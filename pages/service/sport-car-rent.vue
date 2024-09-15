<template>
  <Section label="Ride a buggy in Dubai and have fun">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in items">
        <ServiceCard :item="item" />
      </div>
    </div>
  </Section>
</template>

<script setup>
const items = [
  {
    id: 1,
    img: "/images/buggy (1).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
  {
    id: 2,
    img: "/images/buggy (2).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
  {
    id: 3,
    img: "/images/buggy (3).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
];
</script>
