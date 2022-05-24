<template>
  <div class="card mb-5 mt-5 ">
    <div class="card-body black">
      <div class="card-title"></div>

      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label ">Old name: {{song.name}}  </label>
            <input v-model="newSong.name" type="text" class="form-control " placeholder="New name" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label cs-style">Old text: {{song.text}}</label>
            <textarea v-model="newSong.text" class="form-control " rows="5" placeholder="New text"></textarea>
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
      song: {
        id: null,
        name: null,
        text: null,
        songlocation: null,
      },
      newSong: {
        id: null,
        name: null,
        text: null,
        songlocation: null,
      }
    }
  },
  async created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    this.song = await this.getData(id);
  },
  methods: {

    async getData(id) {
      const res = await fetch(`http://localhost:3001/songs/${id}`,{method: 'GET'});
      return res.json();
    },

    async send(){
          this.newSong.id = this.song.id;
          this.newSong.songlocation = this.song.songlocation;

      try {
        console.log(this.newSong);
        await fetch(`http://localhost:3001/songs/${this.newSong.id}`, {
              method: 'PATCH',
              body: JSON.stringify(this.newSong),
              headers: {
                'Content-type': 'application/json'
              }
            }
        )
        alert("Saved!");

      } catch (e) {
        alert(e);
      }

    },
  }

}
</script>

<style scoped>

</style>
