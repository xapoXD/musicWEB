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
            <input v-model="song.name" type="text" class="form-control " placeholder="Title of song"/>
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
      //song: new Song()
      song: {
        name: null,
        text: null,
        songlocation: null
      }
    }
  },
  methods: {
    onSong(e) {

    },
    async send() {
      // posilani songy
      var input = document.querySelector('#file')
      var data = new FormData()
      data.append('file', input.files[0])
      var SongCesta;

      try {
        await fetch('http://localhost:3001/songs', {
          method: 'POST',
          // mode: 'no-cors',  // allow origins funguje
          body: data
        }).then(function (data) {
          return data.text().then(function (text) {
            SongCesta = text;
          });
        }).catch(function (error) {
          console.log('Request failed', error);
        });
        // output
        console.log(SongCesta);
        this.song.songlocation = SongCesta;
      } catch (e) {
        alert(e);
      }


      // tady zacina post na stringy
      try {
        console.log(this.song);
        await fetch('http://localhost:3001/upload', {
              method: 'POST',
              body: JSON.stringify(this.song),
              headers: {
                'Content-type': 'application/json'
              }
            }
        )
        alert("Saved!");

      } catch (e) {
        alert(e);
      }


    }
  }

}

</script>

<style>

.black {

  -webkit-text-fill-color: black;
}

</style>