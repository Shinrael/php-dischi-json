const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Discografia Salvata',
      apiUrl: 'server.php',
      list: [],
      newTask:{
        title:'',
        author:'',
        year:'',
        poster:'',
        genre:''
      }
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
          .then(result => {
            
            this.list = result.data;
          })
    },

    addNewTask(){
      
      const data = new FormData();
      data.append('newTaskTitle', this.newTask.title);
      data.append('newTaskAuthor', this.newTask.author);
      data.append('newTaskYear', this.newTask.year);
      data.append('newTaskPoster', this.newTask.poster);
      data.append('newTaskGenre', this.newTask.genre);

      axios.post(this.apiUrl, data)
            .then(result =>{
              this.list = result.data;
              this.newTask.title = '';
              this.newTask.author = '';
              this.newTask.year = '';
              this.newTask.poster = '';
              this.newTask.genre = '';
            })
    },

    removeTask(index){
      
      const data = new FormData();
      data.append('indexToDelete', index);

      axios.post(this.apiUrl, data)
            .then(result =>{
              this.list = result.data;
            })

    },
  },

  mounted(){
    this.getApi();
  }
}).mount('#app')