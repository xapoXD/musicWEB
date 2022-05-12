<template>
  <body>



    <div>

    <label class="form-label" for="customFile">Default file input example</label>
    <input type="file" class="form-control" id="customFile" />

    </div>



  </body>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
      file2: null
    }
  }
}
</script>

<style>


body {
  background-color: #333333;
  -webkit-text-fill-color: white;
}

</style>