<template>
  <Section :label="'faq'">
    <UAccordion color="white" variant="outline" size="xl" :items="faqEn" />
  </Section>
</template>

<script setup>
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
</script>
