
<template>
  <body>



  <div class="row justify-content-md-center">
    <div class="card-deck" style="width:500px">
      <img class="card-img-top" src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>

        <audio preload="auto" controls>
          <source src="audio/dummy-audio.mp3">
        </audio>

      </div>
    </div>

    <div class="card-deck" style="width:463px">
      <img class="card-img-top" src="src/components/icons/cover.png" alt="Card image"/>
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>

        <audio preload="auto" controls>
          <source src="audio/dummy-audio.mp3">
        </audio>

      </div>
    </div>

    <div class="card-deck" style="width:500px">
      <img class="card-img-top" src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>

        <audio preload="auto" controls>
          <source src="audio/dummy-audio.mp3">
        </audio>

      </div>
    </div>



    <div class="card-deck" style="width:500px">
      <img class="card-img-top" src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>
          <div>

            <div class="container">
              <div class="row">
                <div class="col">
                  <audio preload="auto" controls>
                    <source src="audio/dummy-audio.mp3">
                  </audio>
                </div>
                <div class="col-1">
                  <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>






  </div>
  </body>
</template>



<script>

export default {
  name: "Songs",
  data() {
    return {
      article: {
        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    onImage(e) {
      // TODO parse image
    },
    send() {
      //this.$http.post(this.article)
    }
  }
}
</script>


<style scoped>

body {
  background-color: #333333;
  -webkit-text-fill-color: white;
}

</style>