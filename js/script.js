const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Lista Dischi',
      apiUrl: 'server.php',
      list: []
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
          .then(result => {
            
            this.list = result.data;
          })
    }
  },

  mounted(){
    this.getApi();
  }
}).mount('#app')