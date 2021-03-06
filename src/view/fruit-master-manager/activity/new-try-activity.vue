<template>
  <div class="m-role">
    <Card>
      <tables
        ref="tables"
        v-model="tableData"
        :columns="columns"
        :loading="loading"
        editable
        searchable
        border
        search-place="top"
        @on-edit="handleEdit"
        @on-select-all="onSelectionAll"
        @on-selection-change="onSelectionChange"
        @on-delete="handleDelete"
      >
        <div slot="searchCondition">
          <Row>
            <Input v-model="searchRowData.name" placeholder="商品名称" class="search-input mr5" style="width: auto"></Input>
            <Input v-model="searchRowData.barcode" placeholder="商品条码" class="search-input mr5" style="width: auto"></Input>
            <Button v-waves :loading="searchLoading" class="search-btn mr5" type="primary" @click="handleSearch">
              <Icon type="md-search"/>&nbsp;搜索
            </Button>
            <Button v-waves :loading="clearSearchLoading" class="search-btn" type="info" @click="handleClear">
              <Icon type="md-refresh"/>&nbsp;清除条件
            </Button>
          </Row>
        </div>
        <div slot="operations">
          <Button v-waves type="success" class="mr5" @click="addChildren">
            <Icon type="md-add"/>
            关联商品
          </Button>
          <Poptip
            confirm
            placement="bottom"
            style="width: 100px"
            title="您确认删除选中的内容吗?"
            @on-ok="poptipOk"
          >
            <Button type="error" class="mr5">
              <Icon type="md-trash"/>
              删除
            </Button>
          </Poptip>
        </div>
      </tables>
      <div style="margin: 10px;overflow: hidden">
        <Row type="flex" justify="end">
          <Page
            :total="total"
            :current.sync="page"
            show-sizer
            show-total
            @on-change="changePage"
            @on-page-size-change="changePageSize"></Page>
        </Row>
      </div>
    </Card>

    <Modal
      v-model="modalEdit"
      :mask-closable="false"
      :width="700"
    >
      <p slot="header">
        <span>{{ tempModalType === modalType.create?'关联商品':'修改关联商品' }}</span>
      </p>
      <div class="modal-content">
        <Form ref="modalEdit" :model="goodsDetail" :rules="ruleInline">
          <Row>
            <Col span="12">
            <FormItem label="上架商品:" prop="shelfId">
              <Select
                v-if="tempModalType===modalType.create"
                ref="shelfSpecificationSelect"
                :remote="true"
                :filterable="true"
                :remote-method="remoteMethod"
                :loading="shelfSpecificationLoading"
                style="width: 250px"
                placeholder="输入上架商品名称"
              >
                <Option
                  v-for="(option, index) in optionsShelfSpecification"
                  :value="option.id"
                  :key="index"
                  class="pb5 pt5 pl15"
                  @click.native="selectIndex(option)">
                  {{ option.specificationInfo }}
                </Option>
              </Select>
              <Input v-else v-model="goodsDetail.specificationInfo" disabled style="width: 250px"></Input>
            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="商品价格:" >
              <i-col>{{ goodsDetail.price|fenToYuanDot2Filters }}</i-col>
            </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
            <FormItem label="尝鲜价格:¥" prop="activityPrice">
              <InputNumber
                :min="0"
                :value="activityPriceComputed"
                style="width: 150px"
                @on-change="activityPriceOnchange"
              ></InputNumber>

            </FormItem>
            </Col>
            <Col span="12">
            <FormItem label="商品排序:" prop="sort">
              <InputNumber :min="1" v-model="goodsDetail.sort" style="width: 150px"/></InputNumber>
            </FormItem>
            </Col>
          </Row>
          <Checkbox
            v-if="tempModalType === modalType.create"
            v-model="goodsDetail.relationSection"
            :true-value="YNEnum.YES"
            :false-value="YNEnum.NO"
          >
            将改商品同步至新品尝鲜板块</Checkbox>
        </Form>

      </div>
      <div slot="footer">
        <Button @click="handleEditClose">关闭</Button>
        <Button :loading="modalViewLoading" type="primary" @click="handleSubmit('modalEdit')">确定
        </Button>
      </div>

    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
import Tables from '_c/tables';
import {
  getActivityProductsPages,
  deleteActivityProduct,
  getProductShelvesPages,
  addActivityProduct,
  editActivityProduct } from '@/api/fruitermaster';
import tableMixin from '@/mixins/tableMixin.js';
import searchMixin from '@/mixins/searchMixin.js';
import deleteMixin from '@/mixins/deleteMixin.js';
import { fenToYuanDot2, fenToYuanDot2Number, yuanToFenNumber } from '@/libs/util';
import { YNEnum } from '@/libs/enumerate';
const fruitMasterDetail = {
  id: '',
  name: 0,
  phoneNumber: '',
  extractingAmount: '',
  settlementStatus: '',
  creditCardNumbers: '',
  headStatus: '',
  applicationTime: '',
  handlingTime: '2018-10-28'
};

const goodsDetail = {
  shelfId: null,
  activityPrice: null,
  sort: null,
  specification: '',
  barcode: '',
  price: null,
  originalPrice: null,
  relationSection: YNEnum.YES
};

const roleRowData = {
  barcode: '',
  name: '',
  page: 1,
  rows: 10
};

export default {
  components: {
    Tables
  },
  mixins: [tableMixin, searchMixin, deleteMixin],
  data() {
    return {
      YNEnum,
      relationSection: true,
      value9: 1,
      ruleInline: {
        shelfId: [{ required: true, message: '请填写上架商品ID' }],
        activityPrice: [{ required: true, message: '请填写尝鲜价' }],
        sort: [{ required: true, message: '请填写整数排序', pattern: /^-?\d+$/ }]
      },
      columns: [
        {
          type: 'selection',
          key: '',
          width: 60,
          align: 'center',
          fixed: 'left'
        },
        {
          title: '上架图片',
          sortable: true,
          width: 180,
          render: (h, params, vm) => {
            const { row } = params;
            const str = <img src={row.image} style='margin-top:5px' height='60' width='60' margin-top='10px'/>;
            return <div>{str}</div>;
          }
        },
        {
          title: '上架名称',
          key: 'name',
          width: 150
        },
        {
          title: '上架规格',
          width: 150,
          key: 'name'
        },
        {
          title: '规格条码',
          width: 150,
          key: 'barcode'
        },
        {
          title: '商品价格',
          width: 150,
          render(h, params, vm) {
            const amount = fenToYuanDot2(params.row.price);
            return <div>{amount}</div>;
          }
        },
        {
          title: '尝鲜价',
          width: 180,
          render(h, params, vm) {
            const amount = fenToYuanDot2(params.row.activityPrice);
            return <div>{amount}</div>;
          }
        },
        {
          title: '排序',
          width: 150,
          key: 'sort',
          sortable: true
        },
        {
          title: '操作',
          minWidth: 200,
          key: 'handle',
          options: ['edit', 'delete']
        }
      ],
      modalViewLoading: false,
      shelfSpecificationLoading: false,
      optionsShelfSpecification: [],
      searchRowData: this._.cloneDeep(roleRowData),
      fruitMasterDetail: fruitMasterDetail,
      goodsDetail: this._.cloneDeep(goodsDetail)
    };
  },
  computed: {
    activityPriceComputed() {
      return fenToYuanDot2Number(this.goodsDetail.activityPrice);
    }
  },
  created() {
    this.getTableData();
  },
  methods: {
    activityPriceOnchange(value) {
      this.goodsDetail.activityPrice = yuanToFenNumber(value);
    },
    selectIndex(options) {
      this.goodsDetail.shelfId = options.id;
      this.goodsDetail.price = options.price;
      this.goodsDetail.originalPrice = options.originalPrice;
    },
    remoteMethod(query) {
      if (query !== '') {
        this.handleSearchAutoComplete(query);
      } else {
        this.optionsShelfSpecification = [];
      }
    },
    handleSearchAutoComplete(value) {
      this.shelfSpecificationLoading = true;
      getProductShelvesPages({
        keyword: value + '',
        applicationType: this.applicationType,
        page: '1',
        rows: '5',
        shelfStatus: 'ON'
      }).then(res => {
        if (res.array.length > 0) {
          this.optionsShelfSpecification.length = 0;
          this.optionsShelfSpecification = this.optionsShelfSpecification.concat(res.array);
        }
        this.shelfSpecificationLoading = false;
      });
    },
    handleSubmit(name) {
      if (this.goodsDetail.activityPrice > this.goodsDetail.price || this.goodsDetail.activityPrice > this.goodsDetail.originalPrice) {
        this.$Message.error('尝鲜价格不能高于商品价格');
        return;
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.tempModalType === this.modalType.create) {
            // 添加状态
            this.createTableRow();
          } else if (this.tempModalType === this.modalType.edit) {
            // 编辑状态
            this.editTableRow();
          }
        } else {
          this.$Message.error('请完善商品的信息!');
        }
      });
    },
    createTableRow() {
      this.modalViewLoading = true;
      this.loading = true;
      addActivityProduct(this.goodsDetail).then(res => {
        this.$Message.success('创建成功!');
        this.loading = false;
        this.modalViewLoading = false;
        this.modalEdit = false;
        this.getTableData();
        this.resetKeyWord();
      }).catch(res => {
        this.loading = false;
        this.modalViewLoading = false;
        this.modalEdit = false;
      });
    },
    editTableRow() {
      this.modalViewLoading = true;
      editActivityProduct(this.goodsDetail).then(res => {
        this.modalEdit = false;
        this.modalViewLoading = false;
        this.getTableData();
      }).catch(res => {
        this.modalEdit = false;
        this.modalViewLoading = false;
      });
    },
    deleteTable(ids) {
      this.loading = true;
      deleteActivityProduct({
        ids
      }).then(res => {
        const totalPage = Math.ceil(this.total / this.searchRowData.pageSize);
        if (this.tableData.length == this.tableDataSelected.length && this.searchRowData.page === totalPage && this.searchRowData.page !== 1) {
          this.searchRowData.page -= 1;
        }
        this.tableDataSelected = [];
        this.getTableData();
      }
      ).catch(() => {
        this.tableDataSelected = [];
        this.loading = false;
      });
    },
    resetSearchRowData() {
      this.clearSearchLoading = true;
      this.searchRowData = this._.cloneDeep(roleRowData);
      this.getTableData();
    },
    addChildren() {
      // this.$refs.modalEdit.resetFields();
      if (this.tempModalType !== this.modalType.create) {
        this.tempModalType = this.modalType.create;
        this.goodsDetail = this._.cloneDeep(goodsDetail);
      }
      this.modalEdit = true;
    },
    handleEdit(params) {
      // this.$refs.modalEdit.resetFields();
      this.tempModalType = this.modalType.edit;
      this.goodsDetail = this._.cloneDeep(params.row);
      this.modalEdit = true;
    },
    getTableData() {
      getActivityProductsPages(this.searchRowData).then(res => {
        this.tableData = res.array;
        this.total = res.total;
        this.loading = false;
        this.searchLoading = false;
        this.clearSearchLoading = false;
      }).catch(() => {
        this.loading = false;
        this.searchLoading = false;
        this.clearSearchLoading = false;
      });
    },
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    },
    handleEditClose() {
      this.modalEdit = false;
      this.rowData = {};
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
