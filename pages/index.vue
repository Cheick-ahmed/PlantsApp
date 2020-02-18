<template>
  <div class="bg-gray-100 h-full">
    <div class="container flex lg:flex-no-wrap">
      <div class="w-full lg:w-8/12 py-16 lg:py-32">
        <div class="font-montserrat mb-12 lg:mb-16">
          <p class="text-5xl text-green-700 font-medium">Let's find out more about</p>
          <p class="text-6xl font-semibold">Plants.</p>
        </div>
        <div class="flex">
          <nuxt-link :to="{  name : ''}" class="mr-4 mb-6 lg:mb-0  px-6 lg:px-5 py-3 lg:px-10 lg:py-2 rounded-lg lg:rounded-full bg-green-700 text-white font-medium uppercase font-rubik text-xs lg:text-sm">
            Contact
          </nuxt-link>
          <nuxt-link :to="{  name : ''}" class="mb-6 lg:mb-0 px-6 lg:px-5 py-3 lg:px-10 lg:py-2 rounded-lg lg:rounded-full border text-gray-900 border-black font-medium uppercase font-rubik text-xs lg:text-sm">
            about us
          </nuxt-link>
        </div>
      </div>
  <!--     <div class="hidden lg:block w-full lg:w-4/12 -mt-8 overflow-hidden">
        <img src="@/assets/img/home_image.png" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    //
  }
</script>
