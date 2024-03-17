<template>
  <nav class= "py-4 px-6 rounded">
    <div class="flex flex-row justify-between items-center">
      <div class="basis-1/4">
        <h1 class="text-text-dark text-2xl hover:font-bold">Logo</h1>
      </div>
      <div class="basis-1/2">
        <ul class="flex justify-around">
          <li>
            <a href="#" class="text-text-dark  ">Home</a>
          </li>
          <li>
            <a href="#" class="text-text-dark ">About</a>
          </li>
          <li>
            <a href="#" class="text-text-dark  ">Projects</a>
          </li>
          <li>
            <a href="#" class="text-text-dark ">Contact</a>
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
  a {
    letter-spacing: .1em;
    transition: text-shadow .3s;
  }

  a:hover {
    text-shadow: 0 0 .9px #CAD2C5, 0 0 .65px #CAD2C5 ;
    /* use the line below if you want a more intense effect */
    /* text-shadow: 0 0 .9px #333, 0 0 .9px #333, 0 0 .9px #333; */
} 

</style>
