<template>
  <div id="app">
    <Toast />
    <h1>Data Table</h1>
    <Table :options="dataOptions"
    @showMessage="showMessage" />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Toast from "primevue/toast";
export default {
  name: "App",
  components: {
    Table,
    Toast,
  },
  watch: {
    "$screen.width"(newVal) {
      if (newVal > 576) {
        this.dataOptions.isMobile = false;
      } else {
        this.dataOptions.isMobile = true;
      }
    },
  },
  data() {
    return {
      dataOptions: {
        data: [
          {
            brand: "Volkswagen",
            year: "2012",
            color: "Orange",
            vin: "dsad231ff",
          },
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
        columns: [
          { field: "brand", header: "Brand" },
          { field: "year", header: "Year" },
          { field: "color", header: "Color" },
        ],
        isMobile: false,
        rowReorder: true,
        reorderableColumn: false,
        striped: true,
        gridlines: true,
        size: 'md'
      },
    };
  },
  mounted(){
     if (this.$screen.width > 576) {
        this.dataOptions.isMobile = false;
      } else {
        this.dataOptions.isMobile = true;
      }
  },
  methods:{
    showMessage(val) {
      this.$toast.add(val);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
