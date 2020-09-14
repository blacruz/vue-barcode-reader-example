<template>
  <div class="hello">
    <h1>{{ codigo }}</h1>
    <div>
      <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['code_128_reader']"
      ></v-quagga>
    </div>

    <button @click="init"></button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    codigo: "Escanear",
    readerSize: {
      width: 400,
      height: 300
    },
    detecteds: []
  }),
  methods: {
    logIt(data) {
      this.codigo = data.codeResult.code;
    },
    init() {}
  },
  mounted() {
    /*navigator.permissions
      .query({ name: "camera" })
      .then(permissionObj => {
        alert(permissionObj.state);
      })
      .catch(error => {
        alert("Got error :", error);
      });
      */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
