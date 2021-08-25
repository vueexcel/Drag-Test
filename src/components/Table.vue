<template>
  <div>
    <DataTable :value="options.data" @row-reorder="onRowReorder"  :class="[{'p-datatable-striped':options.striped },{'p-datatable-gridlines':options.gridlines },`p-datatable-${options.size}`]">
      <Column
        v-if="!options.isMobile"
        :rowReorder="options.rowReorder"
        headerStyle="width: 3rem"
        :reorderableColumn="options.reorderableColumn"
      >
      </Column>
      <Column
        v-for="col of getColumns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      >
        <template #body="slotProp" v-if="col.field === 'icon'">
          <div @click="moveUp(slotProp)"><i class="pi pi-chevron-up"></i></div>
          <div @click="moveDown(slotProp)">
            <i class="pi pi-chevron-down"></i>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

export default {
  name: "Table",
  components: {
    DataTable,
    Column,
  },
  props: {
    options: { type: Object, default: () => {} },
  },
  data() {
    return {};
  },
  computed: {
    getColumns() {
      let columnsArr = this.options.columns;
      let iconObj = { field: "icon", header: "" };
      if (this.options.isMobile) {
        columnsArr.unshift(iconObj);
      } else {
        if (columnsArr.some((el) => el.field === "icon")) {
          const index = columnsArr.findIndex((el) => el.field === "icon");
          columnsArr.splice(index, 1);
        }
      }
      return columnsArr;
    },
  },
  methods: {
    onRowReorder(event) {
      this.options.data = event.value;
      this.$emit("showMessage", {
        severity: "success",
        summary: "Rows Reordered",
        life: 2000,
      });
    },
    moveUp(param) {
      if (param.index !== 0) {
        let index = param.index - 1;
        let temp = null;
        temp = this.options.data[param.index];
        this.options.data[param.index] = this.options.data[index];
        this.options.data[index] = temp;
        this.$forceUpdate();
        this.$emit("showMessage", {
          severity: "success",
          summary: "Rows Reordered",
          life: 2000,
        });
      }
    },
    moveDown(param) {
      if (param.index !== this.options.data.length - 1) {
        let index = param.index + 1;
        let temp = null;
        temp = this.options.data[param.index];
        this.options.data[param.index] = this.options.data[index];
        this.options.data[index] = temp;
        this.$forceUpdate();
        this.$emit("showMessage", {
          severity: "success",
          summary: "Rows Reordered",
          life: 2000,
        });
      }
    },
  },
};
</script>