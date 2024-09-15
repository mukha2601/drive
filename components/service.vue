<template>
  <Section :label="'Services'">
    <div class="flex gap-4">
      <div class="flex flex-col justify-between gap-4 p-4 border-2 w-96">
        <NuxtImg
          src="https://autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg"
          class="w-full"
        />
        <h1 class="text-xl">Sports Car Rental Dubai Style Tour in Dubai</h1>
        <p class="text-sm">
          Experience the thrill of a dune buggy tour in Dubai with us. We offer
          free hotel pick-up & drop-off service. Book now!
        </p>
        <NuxtLink to="/service/sport-car-rent">
          <Button label="learn more" />
        </NuxtLink>
      </div>
      <div class="flex flex-col justify-between gap-4 p-4 border-2 w-96">
        <NuxtImg
          src="https://autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg"
          class="w-full"
        />
        <h1 class="text-xl">Photoshoot with luxury car rental Dubai</h1>
        <p class="text-sm">
          Professional car photoshoot as an additional type of service at Auto
          Zoom Car Rental
        </p>
        <NuxtLink to="/service/photoshoot">
          <Button label="learn more" />
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>
