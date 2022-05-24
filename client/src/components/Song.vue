<template>
  <div class="card mb-5 mt-5 ">
    <div class="card-body black">
      <div class="card-title"></div>

      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label ">Title {{song.id}}</label>
            <input v-model="Newsong.name" type="text" class="form-control " placeholder="{{song.name}}"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label cs-style">Text</label>
            <textarea v-model="Newsong.text" class="form-control " rows="5" placeholder="{{song.text}}"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer row">
    <div class="col-1">
      <button type="button" class="btn btn-dark btn-lg">
        <RouterLink to="/latestalbum">BACK!</RouterLink>
      </button>
    </div>
    <div class="col">
      <button type="button" @click="send" class="btn float-end btn-dark btn-lg">EDIT THIS SONG!</button>
    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Song",
  data() {
    return {
      //song: new Song()
      song:{
        id: null,
        title: null,
        songlocation: null,
        text: null,
      },
      Newsong: {
        name: null,
        text: null,
      }
    }
  },
  methods: {
    async send(){

    },
    async mounted() {
      const id = this.$route.params.id;
      this.song = await this.getData(id);
      console.log(this.song);
    },
      async getData(id) {
        const res = await fetch(`http://localhost:3001/songs/${id}`,{method: 'GET'});
        console.log(res);
        return res.json();


    }
  }

}
</script>

<style scoped>

</style>
