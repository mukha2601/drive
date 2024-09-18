<template>
  <Section label="TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR">
    <div class="flex flex-col justify-between gap-4">
      <p>
        {{
          locale === "en"
            ? itemsEn[route.params - 1]
            : itemsEn[route.params - 1]
        }}
      </p>
      <p class="text-lg">Abu-Dhabi</p>
      <!-- <NuxtImg :src="" /> -->
      <p>
        If the combination of adventure and history is one of your personal
        weaknesses, then Hatta should never be off your list of primary
        destinations. A journey that takes only a couple of hours will bring you
        to a noticeably cooler mountainous climate. Thanks to its high-altitude
        location among the beautiful Hajar Mountains, the sense of space and
        release you will feel here after the suffocating heat of Dubai is what
        you really need for a change and fresh impressions.This trip will
        broaden your Emirates experience as it lets you to explore an absolutely
        different area with remarkable features that include, but not limit to
        the greenness of the vast Wadi Hatta Park, the enormity of the world's
        largest inclined mural, the birdlife diversity of the Swan Lake, and a
        grand spaciousness of Hatta Dam offering everyone to take an active part
        in various watersport experiences. It would be a gorgeous bonus if you
        try to extend your visit with an overnight stay in one of the Hatta
        hotels, motels, and resorts. This will save you from a sense of missed
        opportunities and allow you to enjoy the lavish local hospitality and
        its distinctive cuisine. Treat yourself with memorable outdoor
        activities such as a mountainous hiking and biking, a thrilling
        paragliding flight over endemic peaks, valleys and plateaus, or take an
        insightful tour to the marvelous Honeybee Garden and Discovery Center.
      </p>
    </div>
  </Section>
</template>

<script setup>
const { locale } = useI18n();
const route = useRoute();

// const itemsEn = [
//   {
//     id: 1,
//     title: "TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR",
//     image: "/images/blog (1).jpg",
//     descr2:
//     "If the combination of adventure and history is one of your personal weaknesses, then Hatta should never be off your list of primary destinations. A journey that takes only a couple of hours will bring you to a noticeably cooler mountainous climate. Thanks to its high-altitude location among the beautiful Hajar Mountains, the sense of space and release you will feel here after the suffocating heat of Dubai is what you really need for a change and fresh impressions.This trip will broaden your Emirates experience as it lets you to explore an absolutely different area with remarkable features that include, but not limit to the greenness of the vast Wadi Hatta Park, the enormity of the world's largest inclined mural, the birdlife diversity of the Swan Lake, and a grand spaciousness of Hatta Dam offering everyone to take an active part in various watersport experiences. It would be a gorgeous bonus if you try to extend your visit with an overnight stay in one of the Hatta hotels, motels, and resorts. This will save you from a sense of missed opportunities and allow you to enjoy the lavish local hospitality and its distinctive cuisine. Treat yourself with memorable outdoor activities such as a mountainous hiking and biking, a thrilling paragliding flight over endemic peaks, valleys and plateaus, or take an insightful tour to the marvelous Honeybee Garden and Discovery Center.",
//     descr1:
//     "One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure. All the roads and carriageways are constantly maintained and looked after, and their excellent condition is the result of a special government program.This is why driving from Dubai to far away destinations seems so exciting and thrilling! And if you are fond of new experiences and adventure, your Dubai holiday will not be complete without visiting a few fascinating UAU districts",
//   },
// ];
const itemsEn = [
  {
    id: 1,
    descr1: "TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR",
    image: "/images/blog (1).jpg",
  },
  // {
  //   id: 2,
  //   descr2: "TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR",
  //   image: "/images/blog (1).jpg",
  // },
];

const itemsRu = [
  {
    id: 1,
    descr1:
      "ТОП-3 НАПРАВЛЕНИЯ ДЛЯ ПОСЕЩЕНИЯ ИЗ ДУБАЯ НА АРЕНДОВАННОМ АВТОМОБИЛЕ",
    image: "/images/blog (1).jpg",
  },
];
// const itemsRu = [
//   {
//     id: 1,
//     title:
//       "ТОП-3 НАПРАВЛЕНИЯ ДЛЯ ПОСЕЩЕНИЯ ИЗ ДУБАЯ НА АРЕНДОВАННОМ АВТОМОБИЛЕ",
//     image: "/images/blog (1).jpg",
//     descr2:
//       "Если сочетание приключений и истории – это ваша личная слабость, тогда Хатта никогда не должна исчезать из вашего списка основных направлений. Путешествие, которое занимает всего пару часов, приведет вас в заметно более прохладный горный климат. Благодаря высокогорному расположению среди красивых гор Хаджар, ощущение простора и свободы, которое вы здесь испытаете после удушающей жары Дубая, именно то, что вам нужно для смены обстановки и новых впечатлений. Эта поездка расширит ваш опыт в Эмиратах, позволив вам исследовать совершенно другую местность с выдающимися особенностями, включая, но не ограничиваясь зелеными просторами парка Вади Хатта, огромностью самой большой в мире наклонной фрески, разнообразием птичьих видов на Лебедином озере и грандиозным пространством плотины Хатта, где каждый может принять активное участие в различных водных видах спорта. Прекрасным бонусом будет продление вашего визита на одну ночь в одном из отелей, мотелей или курортов Хатты. Это избавит вас от чувства упущенных возможностей и позволит насладиться роскошным местным гостеприимством и его уникальной кухней. Побалуйте себя незабываемыми активными занятиями на свежем воздухе, такими как горные походы и велосипедные прогулки, захватывающий полет на параплане над местными вершинами, долинами и плато, или возьмите познавательную экскурсию в замечательный Сад медоносных пчел и Центр открытий.",
//     descr1:
//       "Одна из главных причин арендовать автомобиль в Дубае — это качество дорог ОАЭ. По данным Всемирного экономического форума, Эмираты входят в число семи стран с лучшей дорожной инфраструктурой. Все дороги и магистрали постоянно поддерживаются и находятся в отличном состоянии благодаря специальной правительственной программе. Именно поэтому вождение из Дубая до отдаленных мест кажется таким захватывающим и увлекательным! И если вы любите новые впечатления и приключения, ваш отдых в Дубае будет неполным без посещения нескольких увлекательных районов ОАЭ.",
//   },
// ];

const description =
  locale === "en"
    ? itemsEn.find((item) => item.id === route.params.id)?.descr1
    : itemsRu.find((item) => item.id === route.params.id)?.descr1;

console.log(itemsEn[0]);
</script>
