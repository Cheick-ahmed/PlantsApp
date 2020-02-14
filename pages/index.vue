<template>
  <div class="bg-gray-100 ">
    <div class="container flex lg:flex-no-wrap justify-between">
      <div class="w-full lg:w-7/12 py-32">
        <div class="font-montserrat mb-16">
          <p class="text-5xl text-green-700 font-medium">Let's find out more about</p>
          <p class="text-6xl font-semibold">Plants.</p>
        </div>
        <div class="flex">
          <nuxt-link :to="{  name : ''}" class="mr-4 px-10 py-2  rounded-full bg-green-700 text-white font-medium uppercase font-rubik text-sm">
            Contact
          </nuxt-link>
          <nuxt-link :to="{  name : ''}" class="mr-4 px-10 py-2 rounded-full border border-black font-medium uppercase font-rubik text-sm">
            about us
          </nuxt-link>

        </div>
      </div>
      <div class="w-full lg:w-4/12 -mt-6">
        <img src="@/assets/img/home_image.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //
  }
</script>
