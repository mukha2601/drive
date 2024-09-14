<template>
  <div class="w-full p-6 border-2 border-t-0">
    <div class="grid grid-cols-3 space-x-6">
      <ul class="flex flex-col justify-between gap-7">
        <li>
          <NuxtLink to="/">
            <NuxtImg src="/logo.png" class="w-14 h-14 inset-0" />
          </NuxtLink>
        </li>
        <li class="text-xl">LUXURY CAR RENTAL IN DUBAI</li>
        <li class="text-sm max-w-80">
          Rent sports and luxury cars directly without intermediaries. Rent a
          car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
        </li>
        <li><Button label="GET BEST OFFER" /></li>
        <li class="flex flex-col">
          <h1 class="text-xl font-bold">Follow Us</h1>
          <div class="flex gap-4">
            <UButton
              icon="ri:instagram-fill"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
            <UButton
              icon="akar-icons:facebook-fill"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
            <UButton
              icon="ion:logo-youtube"
              variant="link"
              to="https://www.instagram.com/autozoomrental/"
            />
          </div>
        </li>
      </ul>
      <ul class="flex flex-col justify-between text-sm">
        <li><NuxtLink to="/cars" class="text-xl font-bold">Cars</NuxtLink></li>
        <li><NuxtLink to="/cars">SUV</NuxtLink></li>
        <li><NuxtLink to="/cars">Sport Cars</NuxtLink></li>
        <li><NuxtLink to="/cars">Luxury Cars</NuxtLink></li>
        <li><NuxtLink to="/cars">Convertible Cars</NuxtLink></li>
        <li><NuxtLink to="/cars">Budget Cars</NuxtLink></li>
        <li><NuxtLink to="/cars">American Brands </NuxtLink></li>
        <li><NuxtLink to="/cars">Muscle</NuxtLink></li>
      </ul>
      <ul class="flex flex-col justify-between text-sm">
        <li><NuxtLink to="/blog" class="text-xl font-bold">Blog</NuxtLink></li>
        <li>
          <NuxtLink to="/service" class="text-xl font-bold">Service</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts" class="text-xl font-bold">Contacts</NuxtLink>
          <p class="text-[12px] max-w-80">
            Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates +971 52
            7030189 Working hours: 24/7
          </p>
        </li>
        <li class="flex flex-col gap-2">
          <NuxtLink to="/about" class="text-xl font-bold">About Us</NuxtLink>
          <NuxtLink to="/" class="text-sm font-bold">Our Team</NuxtLink>
          <NuxtLink to="/faq" class="text-sm font-bold">FAQ</NuxtLink>
        </li>
      </ul>
      <ul></ul>
    </div>
    <div class="flex justify-between mt-4 pt-2 border-t-2 text-sm">
      <p>© 2024 Auto Zoom Car Rental. United Arab Emirates.</p>
      <NuxtLink to="/terms-and-conditions">Terms and Conditions</NuxtLink>
    </div>
  </div>
</template>
