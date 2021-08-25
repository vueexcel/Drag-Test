<template>
  <div>
    <Toast />

    <DataTable :value="products" @column-reorder="onColReorder" @row-reorder="onRowReorder">
    <Column :rowReorder="windowWidth" headerStyle="width: 3rem" :reorderableColumn="false">
    </Column>
    <Column v-for="col of getColumns" :field="col.field" :header="col.header" :key="col.field">
     <template #body="slotProp" v-if="col.field === 'icon'">
            <div @click="moveUp(slotProp)"><i class="pi pi-chevron-up"></i></div>
            <div @click="moveDown(slotProp)"><i class="pi pi-chevron-down"></i></div>
        </template>
    </Column>
</DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toast from "primevue/toast";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';  

export default {
  name: "Table",
  components: {
    DataTable,
    Column,
    Toast,
  },
  data() {
    return {
      columns: [
        { field: "brand", header: "Brand" },
        { field: "year", header: "Year" },
        { field: "color", header: "Color" },
      ],
      columns2: [
        { field: "icon", header: "" },
        { field: "brand", header: "Brand" },
        { field: "year", header: "Year" },
        { field: "color", header: "Color" },
      ],
      products: [
        { brand: "Volkswagen", year: "2012", color: "Orange", vin: "dsad231ff" },
        { brand: "Audi", year: "2011", color: "Black", vin: "gwregre345" },
        { brand: "Renault", year: "2005", color: "Gray", vin: "h354htr" },
        { brand: "BMW", year: "2003", color: "Blue", vin: "j6w54qgh" },
        { brand: "Mercedes", year: "1995", color: "Orange", vin: "hrtwy34" },
        { brand: "Volvo", year: "2005", color: "Black", vin: "jejtyj" },
        { brand: "Honda", year: "2012", color: "Yellow", vin: "g43gr" },
        { brand: "Jaguar", year: "2013", color: "Orange", vin: "greg34" },
        { brand: "Ford", year: "2000", color: "Black", vin: "h54hw5" },
        { brand: "Fiat", year: "2013", color: "Red", vin: "245t2s" },
      ],
    };
  },
  computed: {
      windowWidth() {
      const extraSmall = window.matchMedia(
        "only screen and (max-width: 400px)"
      );
      if (extraSmall.matches) {
        return false;
      }
      const isMobile = window.matchMedia("only screen and (max-width: 576px)");
      if (isMobile.matches) {
        return false;
      } else {
        return true;
      }
    },
    getColumns() {
      let columnData = this.columns
        const extraSmall = window.matchMedia(
        "only screen and (max-width: 400px)"
      );
      if (extraSmall.matches) {
        columnData = this.columns2
        return columnData;
      }
      const isMobile = window.matchMedia("only screen and (max-width: 576px)");
      if (isMobile.matches) {
          columnData = this.columns2
        return columnData;
      } else {
        return columnData;
      }
    }
  },
  methods: {
    onRowReorder(event) {
      this.products = event.value;
      this.$toast.add({
        severity: "success",
        summary: "Rows Reordered",
        life: 3000,
      });
    },
    onColReorder() {
        this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
    },
    moveUp(param) {
      if (param.index !== 0 && !this.windowWidth) {
        let index = param.index -1
        let temp = null
        temp = this.products[param.index]
        this.products[param.index] = this.products[index]
        this.products[index] = temp
        this.$forceUpdate()
      }
    },
    moveDown(param) {
      if (param.index !== this.products.length - 1 && !this.windowWidth) {
        let index = param.index +1
        let temp = null
        temp = this.products[param.index]
        this.products[param.index] = this.products[index]
        this.products[index] = temp
        this.$forceUpdate()
      }
    }
  },
};
</script>