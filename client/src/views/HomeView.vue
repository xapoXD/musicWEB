<template>

  <div class="card mb-5 mt-5 ">
    <div class="card-body black">
      <div class="card-title">

      </div>
      <hr/>

      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label ">Title</label>
            <input v-model="song.title" type="text" class="form-control " placeholder="Title of song"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label cs-style">Text</label>
            <textarea v-model="song.text" class="form-control " rows="5" placeholder="Description of song"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label ">Audio file</label>
            <input @change="onSong" class="form-control " type="file" id="file">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="send" class="btn float-end btn-dark btn-lg">ADD SONG TO THE ALBUM!</button>
    </div>
  </div>



</template>

<script>

import Song from "../stores/song.js";


export default {
  name: "NewSong",
  data() {
    return {
      song: new Song()
    }
  },
  methods: {
    onSong(e) {

    },
    async send() {

      var input = document.querySelector('#file')

      var data = new FormData()
      data.append('file', input.files[0])


      fetch('http://localhost:3001/songs', {
        method: 'POST',
        body: data
      })


      // tady zacina post na stringy
      /*
      try {
        console.log(this.song);
        await fetch('http://localhost:3000/',
            {
              method: 'POST',
              body: JSON.stringify(this.song),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
      */


    }
  }

}

</script>

<style>

.black{

  -webkit-text-fill-color: black;
}

</style>