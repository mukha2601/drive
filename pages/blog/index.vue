<template>
  <Section label="blog">
    <div class="flex flex-col gap-4">
      <BlogCard
        v-for="item in items"
        :image="item.image"
        :title="item.title"
        :descr="item.descr"
        :data="item.data"
      />
    </div>
  </Section>
</template>

<script setup>

const items = [
  {
    id: 1,
    image: "/images/blog (1).jpg",
    title: "Top 3 Destinations to Visit in Dubai in a Rental Car",
    data: "25 Seb 2022",
    descr:
      "One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.",
  },
  {
    id: 2,
    image: "/images/blog (2).jpg",
    title: "Top 5 wonderful spots for a car photo session in Dubai",
    data: "11 Feb 2022",
    descr:
      "There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?",
  },
  {
    id: 3,
    image: "/images/blog (3).jpg",
    title: "Top 5 Reasons to Rent a Car Dubai Style this Summer",
    data: "31 Jul 2022",
    descr:
      "Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.",
  },
];
</script>
