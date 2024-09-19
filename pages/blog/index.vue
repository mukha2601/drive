<template>
  <Section :label="$t('blog.title')">
    <div class="flex flex-col gap-4">
      <BlogCard
        v-for="item in locale === 'ru' ? itemsRu : itemsEn"
        :item="item"
      />
    </div>
  </Section>
</template>

<script setup>
const { locale } = useI18n();
const itemsEn = [
  {
    id: 1,
    link: "/blog/blogview1",
    image: "/images/blog (1).jpg",
    title: "Top 3 Destinations to Visit in Dubai in a Rental Car",
    data: "25 Seb 2022",
    descr:
      "One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.",
  },
  {
    id: 2,
    link: "/blog/blogview2",
    image: "/images/blog (2).jpg",
    title: "Top 5 wonderful spots for a car photo session in Dubai",
    data: "11 Feb 2022",
    descr:
      "There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?",
  },
  {
    id: 3,
    link: "/blog/blogview3",
    image: "/images/blog (3).jpg",
    title: "Top 5 Reasons to Rent a Car Dubai Style this Summer",
    data: "31 Jul 2022",
    descr:
      "Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.",
  },
];

const itemsRu = [
  {
    id: 1,
    link: "/blog/blogview1",
    image: "/images/blog (1).jpg",
    title: "Топ-3 места для посещения в Дубае на арендованной машине",
    data: "25 сен 2022",
    descr:
      "Одна из главных причин взять напрокат автомобиль в Дубае — это качество дорог ОАЭ. По данным Всемирного экономического форума, ОАЭ входят в топ-7 стран с самой образцовой дорожной инфраструктурой.",
  },
  {
    id: 2,
    link: "/blog/blogview2",
    image: "/images/blog (2).jpg",
    title: "Топ-5 замечательных мест для фотосессии с автомобилем в Дубае",
    data: "11 фев 2022",
    descr:
      "В Дубае так много замечательных мест, которые стоит посетить, но когда вы арендуете машину, ваши возможности практически удваиваются. Количество мест, куда вы захотите поехать и сделать незабываемые фотографии, так велико, что просто невозможно устоять перед арендой транспорта, хотя бы на день или два, или хотя бы на пару часов. А при этом кто сможет устоять перед желанием сделать фото внутри или рядом с арендованной машиной?",
  },
  {
    id: 3,
    link: "/blog/blogview3",
    image: "/images/blog (3).jpg",
    title: "Топ-5 причин арендовать автомобиль в Дубае этим летом",
    data: "31 июл 2022",
    descr:
      "Лето — это больше, чем просто пляж и отдых, а Autozoom Luxury Car Rental — это больше, чем просто обычная аренда автомобилей. Мы предлагаем вам комплексное решение на четырех колесах, чтобы вы могли максимально использовать своё время в Дубае.",
  },
];
</script>
