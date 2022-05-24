<template>

    <div class="card-body ">
      <img class="card-img-top" src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts" alt="Card image">
      <h4 class="card-title" >{{ name }}</h4>
      <p class="card-text">{{ popis }}</p>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <router-link :to="`/song/${id}`" class="btn btn-secondary">
              Edit
              <em class="bi-play"/>
            </router-link>
          </div>
          <div class="col-sm">
            <audio preload="auto" controls>
              <source :src="songlocation">
            </audio>
          </div>
          <div class="col-sm">
            <button type="button" @click="send(id)" class="btn-close btn-close-white" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "Preview",
  props: {
    id: Number,
    name: String,
    songlocation: String,
    popis: String,
  },
  methods: {

  async send(id){
      console.log("Deleting " + id);
      fetch(`http://localhost:3001/songs/${id}`,{method: 'DELETE'});
      window.location.reload();
    }

  }

}

</script>



<style scoped>

</style>