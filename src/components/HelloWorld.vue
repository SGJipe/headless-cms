<template> <!-- mandatory -->
  <div class="hello"> <!-- only one -->
    <h1>{{ msg }} {{ name }} </h1>
    <input type="text" v-model="name"/>
    <h2> {{count}} </h2>
    <button @click="add"> Ajouter </button>
  </div>
</template>

<script>
//export default is mandatory
export default {
  name: 'HelloWorld',
  //props is properties
  props: {
    msg: String
  },

  //data is function which will return an object 
  data(){
    return {
      name: "Jean-Pierre",
      count: 0
    };
  },

  mounted() {
    this.set();
  },

  methods: {
    add() {
      this.count++;
    },
    set() {
      this.count = 3;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
