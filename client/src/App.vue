<script setup>
import { RouterView } from 'vue-router'

import Header from "@/components/Header.vue"
import Foot from "@/components/Footer.vue"

</script>

<template>

  <Header>
  </Header>


  <body>

  <div class="container " >
    <div class="row justify-content-md-center">


      <nav class="navbar navbar-light" >

        <div class="col col-lg-2">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Router-Link  class="nav-link white" to="/about">NEWS</Router-Link>
            </li>
          </ul>
        </div>

        <div class="col col-lg-2">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink  class="nav-link white" to="/latestalbum">LATEST ALBUM</RouterLink>
            </li>
          </ul>
        </div>

        <div class="col col-lg-2">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink  class="nav-link white" to="/">Home</RouterLink>
            </li>
          </ul>
        </div>

      </nav>

    </div>

    <RouterView/>

  </div>


  </body>


<Foot>
</Foot>



</template>

<style>

.container {
  font-family: arial;
  font-size: 24px;
  text-align: center;

}

.white{

  -webkit-text-fill-color: white;

}

body {
  background-color: #333333;

}

</style>
