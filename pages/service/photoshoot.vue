<template>
  <Section :label="$t('photoshoot')">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in locale === 'ru' ? itemsRu : itemsEn">
        <ServiceCard :item="item" />
      </div>
    </div>
  </Section>
</template>

<script setup>
const { locale } = useI18n();
const itemsEn = [
  {
    id: 1,
    img: "/images/photoshoot (1).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
  {
    id: 2,
    img: "/images/photoshoot (2).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
  {
    id: 3,
    img: "/images/photoshoot (3).jpg",
    variant: "basic",
    price: "1000",
    person: "one",
    descr:
      "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
    subtitle: "Package Inclusions:",
  },
];

const itemsRu = [
  {
    id: 1,
    img: "/images/photoshoot (1).jpg",
    variant: "базовый",
    price: "1000",
    person: "один",
    descr:
      "Дюны-багги в Дубае. Забронируйте свою поездку на самом захватывающем приключении в пустыне, а затем побалуйте себя традиционным арабским гостеприимством.",
    subtitle: "Включено в пакет:",
  },
  {
    id: 2,
    img: "/images/photoshoot (2).jpg",
    variant: "базовый",
    price: "1000",
    person: "один",
    descr:
      "Дюны-багги в Дубае. Забронируйте свою поездку на самом захватывающем приключении в пустыне, а затем побалуйте себя традиционным арабским гостеприимством.",
    subtitle: "Включено в пакет:",
  },
  {
    id: 3,
    img: "/images/photoshoot (3).jpg",
    variant: "базовый",
    price: "1000",
    person: "один",
    descr:
      "Дюны-багги в Дубае. Забронируйте свою поездку на самом захватывающем приключении в пустыне, а затем побалуйте себя традиционным арабским гостеприимством.",
    subtitle: "Включено в пакет:",
  },
];
</script>
