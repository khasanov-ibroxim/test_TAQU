// Test savollari bazasi
export const questionsBank = [
  // Ko'chmas mulk iqtisodiyoti
  {
    id: 1,
    question: "Ko'chmas mulk nima?",
    options: [
      "Yerga mahkamlangan va ko'chirib bo'lmaydigan mulk",
      "Har qanday mulk",
      "Faqat uy-joy",
      "Faqat yer"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 2,
    question: "Ko'chmas mulk bozorining asosiy ishtirokchilari kimlar?",
    options: [
      "Sotuvchilar va xaridorlar",
      "Faqat davlat",
      "Faqat banklar",
      "Faqat rieltorlar"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 3,
    question: "Ko'chmas mulkning likvidligi nima?",
    options: [
      "Mulkni tezda sotish imkoniyati",
      "Mulkning narxi",
      "Mulkning joylashuvi",
      "Mulkning maydoni"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 4,
    question: "Ko'chmas mulk qiymatini baholashning asosiy usullari?",
    options: [
      "Taqqoslash, daromad va xarajat usullari",
      "Faqat taqqoslash usuli",
      "Faqat daromad usuli",
      "Faqat xarajat usuli"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 5,
    question: "Ipoteka krediti nima?",
    options: [
      "Ko'chmas mulk garoviga beriladigan kredit",
      "Har qanday kredit",
      "Faqat uy-joy uchun kredit",
      "Biznes krediti"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },

  // Buxgalteriya hisobi
  {
    id: 6,
    question: "Buxgalteriya hisobining asosiy vazifasi nima?",
    options: [
      "Moliyaviy ma'lumotlarni yig'ish va tahlil qilish",
      "Faqat hisob-kitob yuritish",
      "Faqat hisobot tayyorlash",
      "Faqat soliq to'lash"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 7,
    question: "Aktiv nima?",
    options: [
      "Korxonaning mulki va huquqlari",
      "Korxonaning qarzlari",
      "Korxonaning kapitali",
      "Korxonaning daromadi"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 8,
    question: "Passiv nima?",
    options: [
      "Korxonaning mablag' manbalari",
      "Korxonaning mulki",
      "Korxonaning daromadi",
      "Korxonaning xarajatlari"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 9,
    question: "Balans nima?",
    options: [
      "Korxonaning moliyaviy ahvolini aks ettiruvchi hisobot",
      "Daromad va xarajatlar hisoboti",
      "Pul oqimlari hisoboti",
      "Soliq hisoboti"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 10,
    question: "Debet va kredit nima?",
    options: [
      "Ikki tomonlama yozuv tizimi",
      "Daromad va xarajat",
      "Aktiv va passiv",
      "Foyda va zarar"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },

  // Investitsion loyihalar
  {
    id: 11,
    question: "Investitsiya nima?",
    options: [
      "Foyda olish maqsadida mablag' kiritish",
      "Pul sarflash",
      "Kredit olish",
      "Mulk sotish"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 12,
    question: "Investitsion loyihaning asosiy bosqichlari?",
    options: [
      "Tayyorlov, amalga oshirish, ekspluatatsiya",
      "Faqat tayyorlov",
      "Faqat amalga oshirish",
      "Faqat ekspluatatsiya"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 13,
    question: "NPV (Net Present Value) nima?",
    options: [
      "Sof joriy qiymat",
      "Umumiy foyda",
      "Investitsiya hajmi",
      "Daromad stavkasi"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 14,
    question: "IRR (Internal Rate of Return) nima?",
    options: [
      "Ichki daromadlilik stavkasi",
      "Tashqi daromadlilik stavkasi",
      "Bank foiz stavkasi",
      "Inflyatsiya stavkasi"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 15,
    question: "Investitsion loyihaning samaradorligini baholash mezonlari?",
    options: [
      "NPV, IRR, payback period",
      "Faqat NPV",
      "Faqat IRR",
      "Faqat payback period"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },

  // Qiymat injiniringi
  {
    id: 16,
    question: "Qiymat injiniringi nima?",
    options: [
      "Mahsulot qiymatini oshirish va xarajatlarni kamaytirish usuli",
      "Faqat narxni oshirish",
      "Faqat xarajatlarni kamaytirish",
      "Marketing strategiyasi"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 17,
    question: "Qiymat injiniringining asosiy tamoyillari?",
    options: [
      "Funksional tahlil va optimizatsiya",
      "Faqat narx tahlili",
      "Faqat sifat tahlili",
      "Faqat bozor tahlili"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 18,
    question: "Funksional-qiymat tahlili (FQT) nima?",
    options: [
      "Mahsulot funksiyalari va xarajatlarini tahlil qilish",
      "Faqat funksiyalarni tahlil qilish",
      "Faqat xarajatlarni tahlil qilish",
      "Faqat narxni tahlil qilish"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 19,
    question: "Qiymat injiniringining maqsadi?",
    options: [
      "Minimal xarajat bilan maksimal qiymat yaratish",
      "Faqat xarajatlarni kamaytirish",
      "Faqat narxni oshirish",
      "Faqat sifatni yaxshilash"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 20,
    question: "Qiymat injiniringi qaysi sohalarda qo'llaniladi?",
    options: [
      "Ishlab chiqarish, qurilish, xizmat ko'rsatish",
      "Faqat ishlab chiqarish",
      "Faqat qurilish",
      "Faqat xizmat ko'rsatish"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },

  // Qurilishda smeta ishi
  {
    id: 21,
    question: "Smeta nima?",
    options: [
      "Qurilish xarajatlarini hisoblash hujjati",
      "Qurilish rejasi",
      "Qurilish shartnomasi",
      "Qurilish grafigi"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 22,
    question: "Smeta qiymatining tarkibi?",
    options: [
      "To'g'ridan-to'g'ri xarajatlar, umumiy xarajatlar, foyda",
      "Faqat materiallar narxi",
      "Faqat mehnat haqi",
      "Faqat texnika xarajatlari"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 23,
    question: "Smeta hujjatlarining turlari?",
    options: [
      "Lokal, obyekt, qo'shma smetalar",
      "Faqat lokal smeta",
      "Faqat obyekt smetasi",
      "Faqat qo'shma smeta"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 24,
    question: "Smeta normativlari nima?",
    options: [
      "Qurilish xarajatlarini hisoblash uchun me'yorlar",
      "Qurilish qoidalari",
      "Qurilish standartlari",
      "Qurilish texnologiyalari"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 25,
    question: "Smeta qiymatini aniqlash usullari?",
    options: [
      "Resurs, resurs-indeks, bazis-indeks usullari",
      "Faqat resurs usuli",
      "Faqat indeks usuli",
      "Faqat bazis usuli"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },

  // Qo'shimcha savollar
  {
    id: 26,
    question: "Amortizatsiya nima?",
    options: [
      "Asosiy vositalarning eskirishi hisobi",
      "Mulk sotish",
      "Kredit to'lash",
      "Soliq to'lash"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 27,
    question: "Likvidlik nima?",
    options: [
      "Aktivlarni naqd pulga aylantirish qobiliyati",
      "Mulk narxi",
      "Foyda darajasi",
      "Xarajat darajasi"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 28,
    question: "Rentabellik nima?",
    options: [
      "Foyda va xarajatlar nisbati",
      "Umumiy daromad",
      "Umumiy xarajat",
      "Umumiy kapital"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 29,
    question: "Diskontlash nima?",
    options: [
      "Kelajak qiymatini hozirgi qiymatga keltirish",
      "Narxni pasaytirish",
      "Chegirma berish",
      "Foizni hisoblash"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 30,
    question: "Biznes-reja nima?",
    options: [
      "Tadbirkorlik faoliyatini rejalashtirish hujjati",
      "Moliyaviy hisobot",
      "Marketing strategiyasi",
      "Ishlab chiqarish rejasi"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },

  // Qo'shimcha savollar
  {
    id: 31,
    question: "Kapital qo'yilmalarining qaytish muddati nima?",
    options: [
      "Investitsiyalar qachon qaytib kelishini ko'rsatuvchi ko'rsatkich",
      "Kredit muddati",
      "Ishlab chiqarish davri",
      "Amortizatsiya muddati"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 32,
    question: "Moliyaviy tahlilning asosiy maqsadi nima?",
    options: [
      "Korxonaning moliyaviy ahvolini baholash",
      "Faqat foyda hisoblash",
      "Faqat xarajatlarni hisoblash",
      "Faqat daromadni hisoblash"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 33,
    question: "Aylanma mablag'lar nima?",
    options: [
      "Bir yil ichida ishlatib bo'linadigan mablag'lar",
      "Asosiy vositalar",
      "Uzoq muddatli aktivlar",
      "Nomoddiy aktivlar"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 34,
    question: "Asosiy vositalar nima?",
    options: [
      "Bir yildan ortiq foydalaniladigan ishlab chiqarish vositalari",
      "Aylanma mablag'lar",
      "Qisqa muddatli aktivlar",
      "Pul mablag'lari"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 35,
    question: "Inventarizatsiya nima?",
    options: [
      "Mulk va majburiyatlarni tekshirish",
      "Faqat tovarlarni sanash",
      "Faqat pul mablag'larini tekshirish",
      "Faqat hujjatlarni tekshirish"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 36,
    question: "Ko'chmas mulk bozorida talab va taklifga ta'sir etuvchi omillar?",
    options: [
      "Iqtisodiy holat, demografiya, joylashuv",
      "Faqat narx",
      "Faqat joylashuv",
      "Faqat demografiya"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 37,
    question: "Ko'chmas mulk investitsiyalarining afzalliklari?",
    options: [
      "Barqarorlik, inflyatsiyadan himoya, daromad",
      "Faqat yuqori daromad",
      "Faqat past xavf",
      "Faqat yuqori likvidlik"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 38,
    question: "Ijara shartnomasi nima?",
    options: [
      "Mulkni vaqtincha foydalanishga berish shartnomasi",
      "Mulkni sotish shartnomasi",
      "Mulkni sovg'a qilish shartnomasi",
      "Mulkni garovga qo'yish shartnomasi"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 39,
    question: "Qurilish-montaj ishlarining smetasi nima?",
    options: [
      "Qurilish ishlarining xarajatlar hisob-kitobi",
      "Qurilish rejasi",
      "Qurilish grafigi",
      "Qurilish shartnomasi"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 40,
    question: "Smeta me'yorlari qanday belgilanadi?",
    options: [
      "Davlat tomonidan tasdiqlangan hujjatlar asosida",
      "Qurilish kompaniyasi tomonidan",
      "Mijoz tomonidan",
      "Arxitektor tomonidan"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 41,
    question: "Qurilishda to'g'ridan-to'g'ri xarajatlar nima?",
    options: [
      "Materiallar, mehnat haqi, texnika xarajatlari",
      "Faqat materiallar",
      "Faqat mehnat haqi",
      "Faqat texnika"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 42,
    question: "Qiymat injiniringida xarajatlarni kamaytirish usullari?",
    options: [
      "Funksional tahlil, standartlashtirish, optimizatsiya",
      "Faqat narxni pasaytirish",
      "Faqat sifatni pasaytirish",
      "Faqat ishchilarni kamaytirish"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 43,
    question: "Mahsulot hayot tsikli nima?",
    options: [
      "Mahsulotning yaratilishidan utilizatsiyasigacha bo'lgan davr",
      "Faqat ishlab chiqarish davri",
      "Faqat sotish davri",
      "Faqat foydalanish davri"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  },
  {
    id: 44,
    question: "Investitsion loyihaning texnik-iqtisodiy asoslash (TIA) nima?",
    options: [
      "Loyihaning samaradorligini asoslovchi hujjat",
      "Qurilish rejasi",
      "Moliyaviy hisobot",
      "Marketing tadqiqoti"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 45,
    question: "Xavf va noaniqlik investitsion loyihalarda qanday baholanadi?",
    options: [
      "Ssenariy tahlili, sezgirlik tahlili, ehtimollik tahlili",
      "Faqat ssenariy tahlili",
      "Faqat sezgirlik tahlili",
      "Faqat ehtimollik tahlili"
    ],
    correctAnswer: 0,
    category: "Investitsion loyihalar"
  },
  {
    id: 46,
    question: "Moliyaviy hisobotning asosiy turlari?",
    options: [
      "Balans, foyda-zarar hisoboti, pul oqimlari hisoboti",
      "Faqat balans",
      "Faqat foyda-zarar hisoboti",
      "Faqat pul oqimlari hisoboti"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 47,
    question: "Soliq hisobi nima?",
    options: [
      "Soliq to'lovlarini hisoblash va to'lash tizimi",
      "Faqat daromad solig'i",
      "Faqat QQS",
      "Faqat mulk solig'i"
    ],
    correctAnswer: 0,
    category: "Buxgalteriya hisobi"
  },
  {
    id: 48,
    question: "Ko'chmas mulk reyestrini yuritish maqsadi nima?",
    options: [
      "Mulk huquqlarini ro'yxatga olish va himoya qilish",
      "Faqat soliq yig'ish",
      "Faqat statistika yuritish",
      "Faqat narxlarni nazorat qilish"
    ],
    correctAnswer: 0,
    category: "Ko'chmas mulk iqtisodiyoti"
  },
  {
    id: 49,
    question: "Qurilish loyihasining smetasi qachon tuziladi?",
    options: [
      "Loyihalash bosqichida",
      "Qurilish tugagandan keyin",
      "Qurilish jarayonida",
      "Ekspluatatsiya bosqichida"
    ],
    correctAnswer: 0,
    category: "Qurilishda smeta ishi"
  },
  {
    id: 50,
    question: "Qiymat injiniringida funksional xarajatlar diagrammasi (FXD) nima?",
    options: [
      "Funksiyalar va ularning xarajatlarini taqqoslash vositasi",
      "Faqat xarajatlar diagrammasi",
      "Faqat funksiyalar ro'yxati",
      "Faqat narxlar jadvali"
    ],
    correctAnswer: 0,
    category: "Qiymat injiniringi"
  }
];
