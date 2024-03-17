<template>
  <nav class= "py-4 px-6 rounded">
    <div class="flex flex-row justify-between items-center">
      <div class="basis-1/4">
        <h1 class="text-text-dark text-3xl ">Logo</h1>
      </div>
      <div class="basis-1/2">
        <ul class="flex justify-around">
          <li>
            <a href="#" class="text-text-dark text-xl">Home</a>
          </li>
          <li>
            <a href="#" class="text-text-dark text-xl">About</a>
          </li>
          <li>
            <a href="#" class="text-text-dark text-xl">Projects</a>
          </li>
          <li>
            <a href="#" class="text-text-dark text-xl">Contact</a>
          </li>
        </ul>
      </div>
    <div class="basis-1/4">

    </div>
    </div>
  </nav>
</template>

<script setup>



</script>

<style scoped>
  a, h1{
    letter-spacing: .2em;
    transition: text-shadow .1s;
  }

  a:hover, h1:hover{
    text-shadow: 0 0 1.5px #CAD2C5, 0 0 1.5px #CAD2C5 ;
    /* use the line below if you want a more intense effect */
    /* text-shadow: 0 0 .9px #333, 0 0 .9px #333, 0 0 .9px #333; */
} 

</style>
