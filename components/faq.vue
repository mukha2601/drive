<template>
  <Section :label="'faq'">
    <UAccordion
      color="white"
      variant="outline"
      size="xl"
      :items="locale === 'ru' ? faqRu : faqEn"
    />
  </Section>
</template>

<script setup>
const { locale } = useI18n();

const faqEn = [
  {
    label: "What is the minimum age requirements to rent a car in Dubai ?",
    content:
      "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
  },
  {
    label: "What do you need for a luxury car rental in Dubai ?",
    content:
      "Drivers shall be required to have a valid drivers license and Passport copy.",
  },
  {
    label: "How much is the Insurance limit on luxury car rental Dubai?",
    content:
      "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars",
  },
  {
    label: "What are the driving licenses that can be used in Arab countries ?",
    content:
      "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.",
  },
  {
    label: "Can anyone else drive the car i rent?",
    content:
      "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a drivers license and passport",
  },
];

const faqRu = [
  {
    label: "Каков минимальный возраст для аренды автомобиля в Дубае?",
    content:
      "Водители моложе 25 лет должны иметь водительские права не менее трёх лет. Это же правило действует для лиц, чьи имена указаны как дополнительные водители.",
  },
  {
    label: "Что нужно для аренды роскошного автомобиля в Дубае?",
    content:
      "Водители должны иметь действующие водительские права и копию паспорта.",
  },
  {
    label: "Каков лимит страхования при аренде роскошного автомобиля в Дубае?",
    content:
      "Включает общую страховку автомобиля. 3000-5000 AED для роскошных автомобилей. 7000-10000 AED для спортивных автомобилей.",
  },
  {
    label:
      "Какие водительские удостоверения можно использовать в арабских странах?",
    content:
      "Местные водительские удостоверения для граждан ОАЭ. Международные водительские удостоверения, выданные следующими странами: 1. Саудовская Аравия, 2. Египет, 3. Бахрейн, 4. Иордания, 5. Кувейт, 6. Тунис, 7. Султанат Оман, 8. Алжир, 9. Катар, 10. Марокко, 11. Судан, 12. Сомали, 13. Палестина, 14. Ливан, 15. Ливия, 16. Сирия, 17. Йемен, 18. Ирак, 19. Джибути, 20. Коморские острова, 21. Мавритания.",
  },
  {
    label: "Может ли кто-нибудь еще водить арендованный мной автомобиль?",
    content:
      "В договоре указывается два водителя, но при заключении контракта вы должны предоставить водительские права и паспорт.",
  },
];
</script>
