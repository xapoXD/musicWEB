<script>

import Preview from "@/components/Preview.vue";

export default {
  components: { Preview },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    const res = await fetch('http://localhost:3001/songs/', {method: 'GET'},);
    //console.log(res);
    this.songs = await res.json();
    //console.log(this.songs);
  }
}

</script>


<template>


  <div class="row justify-content-md-center" >
    <div class="card-deck" style="width:600px" v-for="song in songs" >
        <Preview :id="song.id" :name="song.name" :popis="song.text" :songlocation="song.songlocation"> </Preview>
    </div>
  </div>

</template>

<style>

</style>