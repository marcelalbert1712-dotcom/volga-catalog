// Данные каталога «Волга». Источники: ru.wikipedia.org и прайс-листы марки 2026 года.
// У каждой модели поле source — ссылка на страницу, откуда взяты характеристики.
const VOLGA_MODELS = [
  {
    "id": "gaz21",
    "slug": "gaz-21",
    "order": 1,
    "name": "ГАЗ-21 «Волга»",
    "nameEn": "GAZ-21 Volga",
    "years": "1956–1970",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан (универсал — ГАЗ-22)",
    "bodyEn": "Sedan (estate — GAZ-22)",
    "engines": "ЗМЗ-21: 65, 70–75, 80–85 л.с. Экспортные дизели Perkins, Rover, Indenor",
    "enginesEn": "ZMZ-21: 65, 70–75, 80–85 hp. Export diesels by Perkins, Rover, Indenor",
    "trans": "3-ступенчатая МКПП; ранние серии — 3-ступенчатая АКПП",
    "transEn": "3-speed manual; early series — 3-speed automatic",
    "base": "2700 мм",
    "length": "4830 мм",
    "width": "1800 мм",
    "height": "1620 мм",
    "mass": "1350–1450 кг",
    "facts": [
      "Первые условно серийные машины собрали 15 октября 1956 года — пять автомобилей.",
      "Автоматическая коробка разработана на основе трансмиссии Ford-O-Matic.",
      "Оформление передка «со звездой» появилось после показа в Кремле.",
      "Заводской индекс сначала был М-21, с 1965 года — ГАЗ-21."
    ],
    "factsEn": [
      "The first pilot-series cars were built on 15 October 1956 — five vehicles.",
      "The automatic gearbox was based on the Ford-O-Matic transmission.",
      "The star-shaped grille appeared after a Kremlin review.",
      "The factory index was M-21 at first; from 1965 it became GAZ-21."
    ],
    "history": "Четвёртое поколение «Волги», пришедшее на смену «Победе». Выпускалось тремя сериями, которые отличались решёткой, хромом и отделкой. Кроме седана выпускался универсал ГАЗ-22. После снятия с конвейера в июле 1970 года машины ещё несколько лет собирали на авторемонтных заводах.",
    "historyEn": "The fourth Volga generation replaced the Pobeda. It was built in three series that differed in grille, chrome and trim. An estate version, GAZ-22, was also produced. After the line stopped in July 1970, cars were still assembled at repair plants for several years.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-21",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_%28front_view%29.jpg/1920px-GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_%28front_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_(front_view).jpg",
        "lic": "CC BY-SA 3.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_%28rear_view%29.jpg/1920px-GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_%28rear_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-21_%22Wo%C5%82ga%22_in_Bochnia_(rear_view).jpg",
        "lic": "CC BY-SA 3.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Wolga_GAZ_21_C_Armaturen%2C_Bj._1969_%282015-07-04%29.JPG/1920px-Wolga_GAZ_21_C_Armaturen%2C_Bj._1969_%282015-07-04%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:Wolga_GAZ_21_C_Armaturen,_Bj._1969_(2015-07-04).JPG",
        "lic": "CC BY-SA 2.0 de",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz22",
    "slug": "gaz-22",
    "order": 2,
    "name": "ГАЗ-22 «Волга»",
    "nameEn": "GAZ-22 Volga",
    "years": "1962–1970",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Универсал",
    "bodyEn": "Estate",
    "bodyType": "estate",
    "engines": "ЗМЗ-21: 75 л.с.",
    "enginesEn": "ZMZ-21: 75 hp",
    "trans": "3-ступенчатая МКПП",
    "transEn": "3-speed manual",
    "base": "2700 мм",
    "length": "4830 мм",
    "width": "1800 мм",
    "height": "1630 мм",
    "mass": "1450 кг",
    "facts": [
      "Грузопассажирский универсал на базе ГАЗ-21.",
      "Выпускался с 1962 по 1970 год.",
      "На его базе делали скорую помощь ГАЗ-22Б и фургон ГАЗ-22А.",
      "Формально отдельного «универсала ГАЗ-21» не существовало, это была самостоятельная модель."
    ],
    "factsEn": [
      "A passenger-and-cargo estate based on the GAZ-21.",
      "Built from 1962 to 1970.",
      "It spawned the GAZ-22B ambulance and the GAZ-22A van.",
      "Formally there was no GAZ-21 estate; the GAZ-22 was a separate model."
    ],
    "history": "Рабочая машина для служб и организаций, а не для частников. Пятидверный несущий кузов, трансформируемый салон на пять или семь мест. В частные руки попадала редко.",
    "historyEn": "A working vehicle for services and organisations rather than private buyers. Five-door unitary body, a cabin that converted between five and seven seats. It rarely reached private owners.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-21",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/GAZ-22_during_ProDvizhenie_2026_%28front_view%29.jpg/1920px-GAZ-22_during_ProDvizhenie_2026_%28front_view%29.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-22_during_ProDvizhenie_2026_(front_view).jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "side",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/%D0%93%D0%B0%D0%B7-22_%D0%B2%D0%B8%D0%B4_%D1%81%D0%B1%D0%BE%D0%BA%D1%83.JPG/1920px-%D0%93%D0%B0%D0%B7-22_%D0%B2%D0%B8%D0%B4_%D1%81%D0%B1%D0%BE%D0%BA%D1%83.JPG",
        "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B0%D0%B7-22_%D0%B2%D0%B8%D0%B4_%D1%81%D0%B1%D0%BE%D0%BA%D1%83.JPG",
        "lic": "CC BY-SA 3.0",
        "captionRu": "Вид сбоку",
        "captionEn": "Side view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Salon_Gaz-22_Volga_%286982776111%29.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:Salon_Gaz-22_Volga_(6982776111).jpg",
        "lic": "CC BY-SA 2.0",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz23",
    "slug": "gaz-23",
    "order": 3,
    "name": "ГАЗ-23 «Волга»",
    "nameEn": "GAZ-23 Volga",
    "years": "1962–1970",
    "line": "Спецверсия",
    "lineEn": "Special version",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "bodyType": "sedan",
    "engines": "ЗМЗ-23 V8: 5 526 см³, 195 л.с.",
    "enginesEn": "ZMZ-23 V8: 5,526 cc, 195 hp",
    "trans": "3-ступенчатая АКПП",
    "transEn": "3-speed automatic",
    "base": "2700 мм",
    "length": "4830 мм",
    "width": "1800 мм",
    "height": "1620 мм",
    "mass": "нет данных",
    "facts": [
      "Снаружи почти не отличалась от ГАЗ-21: главное спрятано под капотом.",
      "Двигатель ЗМЗ-23 сделан на базе ЗМЗ-13 от «Чайки».",
      "Максимальная скорость по техусловиям 160 км/ч, на испытаниях превышала 170.",
      "Строилась для КГБ и других спецслужб, в продажу не поступала."
    ],
    "factsEn": [
      "It looked almost like a GAZ-21: the difference was under the bonnet.",
      "The ZMZ-23 engine was derived from the Chaika's ZMZ-13.",
      "Top speed was rated at 160 km/h; tests exceeded 170.",
      "Built for the KGB and other services, never sold to the public."
    ],
    "history": "«Быстроходный автомобиль» или «машина сопровождения» по закрытым документам. Усиленный кузов, оригинальная маска радиатора под большой радиатор, переработанные тормоза под высокий температурный режим. Сменила М-20Г и уступила место ГАЗ-24-24.",
    "historyEn": "Officially a 'fast car' or 'escort vehicle' in classified documents. Reinforced body, a unique grille for the larger radiator, and brakes reworked for the higher heat load. It replaced the M-20G and gave way to the GAZ-24-24.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-23",
    "photos": [],
    "photoCount": 0
  },
  {
    "id": "gaz24",
    "slug": "gaz-24",
    "order": 4,
    "name": "ГАЗ-24 «Волга»",
    "nameEn": "GAZ-24 Volga",
    "years": "1968–1986 (24-10 до 1992)",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Бизнес-класс",
    "klassEn": "Business class",
    "body": "Седан, универсал (24-02)",
    "bodyEn": "Sedan, estate (24-02)",
    "engines": "ЗМЗ-24: 95 л.с. Дизель Peugeot-Indenor: 75 л.с. V8 195 л.с. (24-24)",
    "enginesEn": "ZMZ-24: 95 hp. Peugeot-Indenor diesel: 75 hp. V8 195 hp (24-24)",
    "trans": "4-ступенчатая МКПП; 24-24 — 3-ступенчатая АКПП",
    "transEn": "4-speed manual; 24-24 — 3-speed automatic",
    "base": "2800 мм",
    "length": "4735 мм (II серия — 4760 мм)",
    "width": "1800 мм",
    "height": "1490 мм",
    "mass": "1400 кг",
    "facts": [
      "Кузов 24-й стал основой для 3102, 31029 и всего семейства 3110.",
      "Универсал 24-02 выпускался с 1972 по 1986 год.",
      "Для спецслужб делали 24-24 с V8 и автоматической коробкой.",
      "Полноприводная 24-95 выпущена в 1974 году в пяти экземплярах; одна машина обслуживала Брежнева."
    ],
    "factsEn": [
      "The GAZ-24 body became the base for the 3102, 31029 and the whole 3110 family.",
      "The 24-02 estate was produced from 1972 to 1986.",
      "A V8-powered 24-24 with automatic transmission was built for special services.",
      "The four-wheel-drive 24-95 was built in 1974 in five units; one served Brezhnev."
    ],
    "history": "Последний принципиально новый кузов этого класса на ГАЗе. Проектировался с оглядкой на североамериканскую школу: широкий салон, мягкая подвеска, простор. В 1985 году его сменила модернизированная 24-10, а сам кузов дожил до 2009 года в моделях 3102 и 31105.",
    "historyEn": "The last fundamentally new body in this class from GAZ. It followed the North American school: a wide cabin, soft suspension, plenty of room. In 1985 the modernised 24-10 replaced it, yet the body survived until 2009 in the 3102 and 31105.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-24",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/GAZ-24_orange_colored_%28front_view%29.jpg/1920px-GAZ-24_orange_colored_%28front_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-24_orange_colored_(front_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/2025-05-01_Muensingen_Wolga_GAZ-24_Volga_back-door.jpg/1920px-2025-05-01_Muensingen_Wolga_GAZ-24_Volga_back-door.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:2025-05-01_Muensingen_Wolga_GAZ-24_Volga_back-door.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Interior_of_the_UMMC_Museum_of_automotive_technology_092.jpg/1920px-Interior_of_the_UMMC_Museum_of_automotive_technology_092.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:Interior_of_the_UMMC_Museum_of_automotive_technology_092.jpg",
        "lic": "CC BY 4.0",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz2402",
    "slug": "gaz-24-02",
    "order": 5,
    "name": "ГАЗ-24-02 «Волга»",
    "nameEn": "GAZ-24-02 Volga",
    "years": "1972–1987",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Универсал",
    "bodyEn": "Estate",
    "bodyType": "estate",
    "engines": "ЗМЗ-24Д: 2,45 л, 95 л.с.",
    "enginesEn": "ZMZ-24D: 2.45 L, 95 hp",
    "trans": "4-ступенчатая МКПП",
    "transEn": "4-speed manual",
    "base": "2800 мм",
    "length": "4735 мм",
    "width": "1800 мм",
    "height": "1490 мм",
    "mass": "нет данных",
    "facts": [
      "Первый универсал семейства ГАЗ-24.",
      "До 1977 года передний ряд превращался в спальное место.",
      "На базе выпускали такси ГАЗ-24-04 и санитарную машину.",
      "Кузов универсала проектировали вместе с седаном, а не после него."
    ],
    "factsEn": [
      "The first estate of the GAZ-24 family.",
      "Until 1977 the front row could be converted into a bed.",
      "It also served as the GAZ-24-04 taxi and an ambulance.",
      "The estate body was designed together with the sedan, not after it."
    ],
    "history": "Грузопассажирская версия с полностью своими кузовными панелями от средней стойки назад. Использовалась как служебный и грузовой транспорт, шла в такси и в скорую помощь.",
    "historyEn": "A passenger-and-cargo version with its own body panels from the middle pillar back. It served as a utility vehicle, a taxi and an ambulance.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-24-02",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/GAZ-24-02.jpg/1920px-GAZ-24-02.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-24-02.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди-сбоку",
        "captionEn": "Front three-quarter view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/GAZ-2402.jpg/1920px-GAZ-2402.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-2402.jpg",
        "lic": "CC BY-SA 3.0",
        "captionRu": "Вид сзади-сбоку",
        "captionEn": "Rear three-quarter view",
        "own": true
      }
    ],
    "photoCount": 2
  },
  {
    "id": "gaz3102",
    "slug": "gaz-3102",
    "order": 6,
    "name": "ГАЗ-3102 «Волга»",
    "nameEn": "GAZ-3102 Volga",
    "years": "1981–2008",
    "line": "Параллельная линия",
    "lineEn": "Parallel line",
    "klass": "Бизнес-класс",
    "klassEn": "Business class",
    "body": "Седан",
    "bodyEn": "Sedan",
    "engines": "ЗМЗ-4022.10: 105 л.с.; позже ЗМЗ-406 и Chrysler (131–152 л.с.)",
    "enginesEn": "ZMZ-4022.10: 105 hp; later ZMZ-406 and Chrysler (131–152 hp)",
    "trans": "4-ступенчатая МКПП",
    "transEn": "4-speed manual",
    "base": "2800 мм",
    "length": "4960 мм",
    "width": "1820 мм",
    "height": "1476 мм",
    "mass": "1450 кг",
    "facts": [
      "Предсерийный ГАЗ-3101 1973 года имел V8 3,0 л и автоматическую коробку, но в серию не пошёл.",
      "Двигатель 4022.10 получил третий клапан и предкамерное зажигание с карбюратором К-156.",
      "Предкамерное зажигание дало +10 л.с. и минус 2 литра на 100 км.",
      "Усилитель тормозов закупали по лицензии британской Girling."
    ],
    "factsEn": [
      "The 1973 pre-production GAZ-3101 had a 3.0 V8 and an automatic, but never entered series production.",
      "The 4022.10 engine got a third valve and pre-chamber ignition with a K-156 carburettor.",
      "Pre-chamber ignition added 10 hp and cut consumption by 2 litres per 100 km.",
      "The brake booster was licensed from the British company Girling."
    ],
    "history": "Модернизированный и глубоко переработанный кузов 24-й для номенклатуры. Выпускалась параллельно с 24-10, 31029 и 3110 почти тридцать лет и пережила три поколения «Волги». Дольше всех продержалась в такси и спецслужбах.",
    "historyEn": "A modernised, deeply reworked GAZ-24 body for the nomenklatura. It was built in parallel with the 24-10, 31029 and 3110 for almost thirty years and outlived three Volga generations. It lasted longest in taxis and special services.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-3102",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/2002_GAZ_3102_front.jpg/1920px-2002_GAZ_3102_front.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:2002_GAZ_3102_front.jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/GAZ-3102_%28rear_view%29_and_Chevrolet_Niva_%28side_view%29.jpg/1920px-GAZ-3102_%28rear_view%29_and_Chevrolet_Niva_%28side_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-3102_(rear_view)_and_Chevrolet_Niva_(side_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg/1920px-%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz2410",
    "slug": "gaz-24-10",
    "order": 7,
    "name": "ГАЗ-24-10 «Волга»",
    "nameEn": "GAZ-24-10 Volga",
    "years": "1985–1993",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "bodyType": "sedan",
    "engines": "ЗМЗ-402.10",
    "enginesEn": "ZMZ-402.10",
    "trans": "4-ступенчатая МКПП",
    "transEn": "4-speed manual",
    "base": "2800 мм",
    "length": "4735 мм",
    "width": "1800 мм",
    "height": "1490 мм",
    "mass": "нет данных",
    "facts": [
      "Рестайлинг ГАЗ-24, а не новая модель.",
      "Травмобезопасные ручки дверей и часть интерьера взяты у ГАЗ-3102.",
      "Убрали форточки в передних дверях и задний стояночный огонь.",
      "На конвейер встала в конце 1985 года."
    ],
    "factsEn": [
      "A facelift of the GAZ-24 rather than a new model.",
      "Safety door handles and part of the interior came from the GAZ-3102.",
      "Front vent windows and the rear parking light were removed.",
      "It entered the line at the end of 1985."
    ],
    "history": "Промежуточный шаг между 24-й и 31029. Планировалась как временная мера до современного кузова, но выпускалась до 1993 года и стала базой для «двадцать девятой».",
    "historyEn": "An intermediate step between the GAZ-24 and the 31029. It was meant as a stopgap until a modern body arrived, yet it was built until 1993 and became the basis for the 31029.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-24-10",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/1990_GAZ_24-10_beige_front.jpg/1920px-1990_GAZ_24-10_beige_front.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:1990_GAZ_24-10_beige_front.jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "side",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/GAZ-24-10_%284936805235%29.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-24-10_(4936805235).jpg",
        "lic": "CC BY-SA 2.0",
        "captionRu": "Вид сбоку",
        "captionEn": "Side view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/1990_GAZ_24-10_beige_rear.jpg/1920px-1990_GAZ_24-10_beige_rear.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:1990_GAZ_24-10_beige_rear.jpg",
        "lic": "CC0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz31029",
    "slug": "gaz-31029",
    "order": 8,
    "name": "ГАЗ-31029 «Волга»",
    "nameEn": "GAZ-31029 Volga",
    "years": "1991–1997",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "engines": "ЗМЗ-402.10: 95 л.с. ЗМЗ-4021: 90 л.с.",
    "enginesEn": "ZMZ-402.10: 95 hp. ZMZ-4021: 90 hp",
    "trans": "4-ступенчатая МКПП, на части машин 5-ступенчатая",
    "transEn": "4-speed manual, 5-speed on some cars",
    "base": "2800 мм",
    "length": "4885 мм",
    "width": "1800 мм",
    "height": "1488 мм",
    "mass": "1400 кг",
    "facts": [
      "В народе модель звали «ослобык», «овцебык» и «баржа».",
      "Это незавершённая модернизация 24-10, выпущенная в ожидании нового кузова.",
      "На конвейер встала в марте 1991 года.",
      "Карбюратор К-126ГМ заменили на К-151 производства ЛенКарЗ."
    ],
    "factsEn": [
      "People nicknamed it 'oslobyk', 'ovtsebyk' and 'barge'.",
      "It was an unfinished modernisation of the 24-10, released while waiting for a new body.",
      "It entered the assembly line in March 1991.",
      "The K-126GM carburettor was replaced by the K-151 made by LenKARZ."
    ],
    "history": "Переходная модель между советской и рыночной эпохами. Задняя часть кузова взята от 3102, передняя — новая для начала девяностых. Завод планировал заменить её современным кузовом 3103/3105, но денег на него не нашлось, и «двадцать девятая» продержалась до 1997 года.",
    "historyEn": "A transitional model between the Soviet and market eras. The rear came from the 3102, the front was new for the early nineties. The plant planned to replace it with the modern 3103/3105 body, but had no money, so the 31029 lasted until 1997.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-31029",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/GAZ-31029_%22Volga%22_%28front_view%29.jpg/1920px-GAZ-31029_%22Volga%22_%28front_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-31029_%22Volga%22_(front_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/GAZ-31029_%22Volga%22_%28rear_view%29.jpg/1920px-GAZ-31029_%22Volga%22_%28rear_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-31029_%22Volga%22_(rear_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/31029-int-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        "page": "https://commons.wikimedia.org/wiki/File:31029-int-2.jpg",
        "lic": "Public domain",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz3110",
    "slug": "gaz-3110",
    "order": 9,
    "name": "ГАЗ-3110 «Волга»",
    "nameEn": "GAZ-3110 Volga",
    "years": "1997–2004",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан, универсал (310221)",
    "bodyEn": "Sedan, estate (310221)",
    "engines": "ЗМЗ-4021: 90 л.с.; ЗМЗ-4062: 131 л.с.; 95 и 110 л.с.",
    "enginesEn": "ZMZ-4021: 90 hp; ZMZ-4062: 131 hp; 95 and 110 hp",
    "trans": "5-ступенчатая МКПП",
    "transEn": "5-speed manual",
    "base": "2800 мм",
    "length": "4870 мм",
    "width": "1810 мм",
    "height": "1422 мм",
    "mass": "1400 кг",
    "facts": [
      "Задняя часть кузова переработана полностью: округлые формы и новая светотехника.",
      "Универсал 310221 выпускался параллельно и остался самой дешёвой «Волгой».",
      "Последняя конвейерная машина семейства — медицинский универсал 310223, декабрь 2008 года.",
      "В 2004 году уступила место модели 31105."
    ],
    "factsEn": [
      "The rear was completely redesigned: rounded shapes and new lights.",
      "The 310221 estate was built in parallel and remained the cheapest Volga.",
      "The last conveyor car of the family was a medical estate 310223, December 2008.",
      "In 2004 it gave way to the 31105."
    ],
    "history": "Первая «Волга» рыночной эпохи с действительно новым оформлением салона и кузова. Сохранила архаичную платформу, но получила современные моторы ЗМЗ-406 и пятиступенчатую коробку. Стала самой массовой моделью позднего периода.",
    "historyEn": "The first Volga of the market era with a genuinely new cabin and body trim. It kept the archaic platform but gained modern ZMZ-406 engines and a five-speed gearbox. It became the most common model of the late period.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-3110",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/GAZ-3110_cherry_colored_%28front_view%29.jpg/1920px-GAZ-3110_cherry_colored_%28front_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-3110_cherry_colored_(front_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/GAZ-3110_cherry_colored_%28rear_view%29.jpg/1920px-GAZ-3110_cherry_colored_%28rear_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-3110_cherry_colored_(rear_view).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/31029-int-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        "page": "https://commons.wikimedia.org/wiki/File:31029-int-2.jpg",
        "lic": "Public domain",
        "captionRu": "Салон ГАЗ-31029 (родственная модель)",
        "captionEn": "GAZ-31029 interior (related model)",
        "own": false
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz3111",
    "slug": "gaz-3111",
    "order": 10,
    "name": "ГАЗ-3111 «Волга»",
    "nameEn": "GAZ-3111 Volga",
    "years": "1999–2004, малая серия",
    "line": "Малая серия",
    "lineEn": "Small series",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "engines": "ЗМЗ-4052.10: 155 л.с.; ЗМЗ-4062: 136 л.с.; V8 170 л.с.; дизель 110 л.с.",
    "enginesEn": "ZMZ-4052.10: 155 hp; ZMZ-4062: 136 hp; V8 170 hp; diesel 110 hp",
    "trans": "5-ступенчатая МКПП",
    "transEn": "5-speed manual",
    "base": "2820 мм",
    "length": "4920 мм",
    "width": "1850 мм",
    "height": "1450 мм",
    "mass": "1560 кг",
    "facts": [
      "Выполнена в стиле неоретро с отсылкой к ГАЗ-21.",
      "Разработана в 1996–1998 годах, премьера — Московский автосалон 1998 года.",
      "В полноценную серию не пошла из-за экономических условий.",
      "Первая «Волга» с реечным рулевым управлением и гидроусилителем."
    ],
    "factsEn": [
      "Styled as neo-retro with a nod to the GAZ-21.",
      "Developed in 1996–1998, premiered at the 1998 Moscow Motor Show.",
      "It never reached full-scale production because of the economic situation.",
      "The first Volga with rack-and-pinion steering and power assistance."
    ],
    "history": "Самая красивая и самая невезучая «Волга». Задумывалась как замена 3102, но смещённый вперёд двигатель, удлинитель коробки и дорогой кузов сделали её мелкосерийной. Часть машин собрана с узлами Toyota по совместному проекту.",
    "historyEn": "The most beautiful and the unluckiest Volga. It was meant to replace the 3102, but the forward-shifted engine, gearbox extension and costly body kept it to small-series production. Some cars were assembled with Toyota components under a joint project.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-3111",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/GAZ_3111_beige_front.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ_3111_beige_front.jpg",
        "lic": "CC BY 4.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/GAZ_3111_beige_rear.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ_3111_beige_rear.jpg",
        "lic": "CC BY 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg/1920px-%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Салон ГАЗ-3102 (родственная модель)",
        "captionEn": "GAZ-3102 interior (related model)",
        "own": false
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz31105",
    "slug": "gaz-31105",
    "order": 11,
    "name": "ГАЗ-31105 «Волга»",
    "nameEn": "GAZ-31105 Volga",
    "years": "2004–2009",
    "line": "Основная линия",
    "lineEn": "Main line",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "engines": "ЗМЗ-4062: 131 л.с.; ЗМЗ-405: 152 л.с.; 110 л.с.",
    "enginesEn": "ZMZ-4062: 131 hp; ZMZ-405: 152 hp; 110 hp",
    "trans": "5-ступенчатая МКПП",
    "transEn": "5-speed manual",
    "base": "2800 мм",
    "length": "4870 мм",
    "width": "1810 мм",
    "height": "1422 мм",
    "mass": "1400 кг",
    "facts": [
      "Получила фары от невыпущенного кузова 3111.",
      "В 2007 году пережила последний рестайлинг: новый интерьер и климат-контроль.",
      "Рулевая колонка стала регулироваться в двух плоскостях.",
      "Последняя массовая «Волга»: седаны выпускали до 2009 года."
    ],
    "factsEn": [
      "It received headlights from the unproduced 3111 body.",
      "In 2007 it got its last facelift: a new interior and climate control.",
      "The steering column became adjustable in two planes.",
      "The last mass-produced Volga: sedans were built until 2009."
    ],
    "history": "Рестайлинг 3110 с «оперением» от 3111. Внешне самая узнаваемая поздняя «Волга»: другая решётка, капот и бампер с хромом. С неё закончилась конвейерная история легковых ГАЗ.",
    "historyEn": "A facelift of the 3110 with the 3111 front end. Visually the most recognisable late Volga: a different grille, bonnet and chrome-trimmed bumper. It closed the conveyor history of GAZ passenger cars.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-3110",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/GAZ-31105_Volga_%28Saint_Petersburg%2C_Russia%29.jpg/1920px-GAZ-31105_Volga_%28Saint_Petersburg%2C_Russia%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-31105_Volga_(Saint_Petersburg%2C_Russia).jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/GAZ-31105_Wolga_hinten.jpg/1920px-GAZ-31105_Wolga_hinten.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-31105_Wolga_hinten.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg/1920px-%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Салон ГАЗ-3102 (родственная модель)",
        "captionEn": "GAZ-3102 interior (related model)",
        "own": false
      }
    ],
    "photoCount": 3
  },
  {
    "id": "gaz3105",
    "slug": "gaz-3105",
    "order": 12,
    "name": "ГАЗ-3105 «Волга»",
    "nameEn": "GAZ-3105 Volga",
    "years": "1992–1996, малая серия",
    "line": "Малая серия",
    "lineEn": "Small series",
    "klass": "Средний и большой класс",
    "klassEn": "Mid and large class",
    "body": "Седан, полный привод",
    "bodyEn": "Sedan, four-wheel drive",
    "engines": "V8: 156 л.с. (К-114), 170 л.с. (Pierburg), моновпрыск Lucas — 31052",
    "enginesEn": "V8: 156 hp (K-114), 170 hp (Pierburg), Lucas single-point injection — 31052",
    "trans": "5-ступенчатая МКПП",
    "transEn": "5-speed manual",
    "base": "2820 мм",
    "length": "4900 мм",
    "width": "1800 мм",
    "height": "1430 мм",
    "mass": "около 1600 кг",
    "facts": [
      "Преемник правительственной «Чайки» ГАЗ-14; имя «Волга» получила в девяностых.",
      "Собиралась малыми предсерийными партиями на ПАМС обходными технологиями.",
      "Конвейерного производства так и не было.",
      "Полный привод и V8 делали её самой технически сложной «Волгой»."
    ],
    "factsEn": [
      "Successor to the GAZ-14 Chaika limousine; it received the Volga name in the nineties.",
      "Assembled in small pre-production batches at PAMS using bypass technologies.",
      "It never had conveyor production.",
      "Four-wheel drive and a V8 made it the most technically complex Volga."
    ],
    "history": "Проект представительского класса, выросший из программы 3103/3104/3105. Должна была заменить «Чайку», но пришлась на развал экономики. Осталась выставочным и музейным экспонатом, хотя именно она задала направление для 3111.",
    "historyEn": "An executive-class project that grew out of the 3103/3104/3105 programme. It was meant to replace the Chaika but arrived during the collapse of the economy. It remained a show and museum piece, though it set the direction for the 3111.",
    "source": "https://ru.wikipedia.org/wiki/ГАЗ-3105",
    "bodyType": "sedan",
    "photos": [
      {
        "kind": "side",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/GAZ-3105_Volga_%28light%29_-_GAZ_museum.jpg/1920px-GAZ-3105_Volga_%28light%29_-_GAZ_museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:GAZ-3105_Volga_(light)_-_GAZ_museum.jpg",
        "lic": "CC0",
        "captionRu": "Вид сбоку",
        "captionEn": "Side view",
        "own": true
      },
      {
        "kind": "side",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Moscow_car_show_2025-08-03_GAZ-3105_1992_03.jpg/1920px-Moscow_car_show_2025-08-03_GAZ-3105_1992_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:Moscow_car_show_2025-08-03_GAZ-3105_1992_03.jpg",
        "lic": "CC0",
        "captionRu": "Вид сбоку",
        "captionEn": "Side view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg/1920px-%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%90%D0%97-3102_%D0%A1%D0%B8%D1%82%D0%B8%D0%B4%D1%80%D0%B0%D0%B9%D0%B2_%D0%BD%D0%B0_%D0%A1%D0%A0%D0%92_%D1%81%D0%B0%D0%BB%D0%BE%D0%BD.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Салон ГАЗ-3102 (родственная модель)",
        "captionEn": "GAZ-3102 interior (related model)",
        "own": false
      }
    ],
    "photoCount": 3
  },
  {
    "id": "siber",
    "slug": "volga-siber",
    "order": 13,
    "name": "Volga Siber",
    "nameEn": "Volga Siber",
    "years": "2008–2010",
    "line": "Возвращение марки",
    "lineEn": "Brand revival",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "bodyType": "sedan",
    "engines": "2,429 л DOHC: 143 л.с.",
    "enginesEn": "2.429 L DOHC: 143 hp",
    "trans": "5-ступенчатая МКПП или 4-ступенчатая АКПП",
    "transEn": "5-speed manual or 4-speed automatic",
    "base": "2765 мм",
    "length": "4844 мм",
    "width": "1789 мм",
    "height": "1470 мм",
    "mass": "нет данных",
    "facts": [
      "Создан на лицензионной платформе Chrysler JR41 (Sebring и Stratus).",
      "Представлен на «Интеравто-2007» как GAZ Siber.",
      "В серию пошли только 2,4-литровые версии.",
      "Базовая цена на 1 апреля 2010 года: 496 200 рублей."
    ],
    "factsEn": [
      "Built on the licensed Chrysler JR41 platform (Sebring and Stratus).",
      "Shown at InterAuto-2007 as the GAZ Siber.",
      "Only 2.4-litre versions reached production.",
      "Base price on 1 April 2010: 496,200 roubles."
    ],
    "history": "Попытка вернуть марку через лицензионную американскую платформу. Выпускался малыми партиями два года и стал последней попыткой классической схемы до возрождения 2020-х.",
    "historyEn": "An attempt to bring the brand back on a licensed American platform. It was built in small batches for two years and became the last attempt of the old scheme before the revival of the 2020s.",
    "source": "https://ru.wikipedia.org/wiki/Volga_Siber",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/%22Volga_Siber%22_beige_colored.jpg/1920px-%22Volga_Siber%22_beige_colored.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:%22Volga_Siber%22_beige_colored.jpg",
        "lic": "CC BY-SA 4.0",
        "captionRu": "Вид спереди-сбоку",
        "captionEn": "Front three-quarter view",
        "own": true
      }
    ],
    "photoCount": 1
  },
  {
    "id": "c50",
    "slug": "volga-c50",
    "order": 14,
    "name": "Volga C50",
    "nameEn": "Volga C50",
    "years": "2026",
    "line": "Возвращение марки",
    "lineEn": "Brand revival",
    "klass": "Средний класс",
    "klassEn": "Mid-size",
    "body": "Седан",
    "bodyEn": "Sedan",
    "bodyType": "sedan",
    "engines": "2,0 л турбо: 150 или 200 л.с.",
    "enginesEn": "2.0 turbo: 150 or 200 hp",
    "trans": "7-ступенчатый робот (DCT), передний привод",
    "transEn": "7-speed DCT, front-wheel drive",
    "base": "2800 мм",
    "length": "4825 мм",
    "width": "1880 мм",
    "height": "1469 мм",
    "mass": "1610 кг",
    "facts": [
      "Седан новой линейки, построенной на платформах Geely.",
      "Два варианта мощности: 150 и 200 л.с.",
      "Расход в смешанном цикле 7,1 л на 100 км.",
      "Рекомендованная цена от 2 999 000 до 3 399 000 рублей по прайс-листу на июль 2026."
    ],
    "factsEn": [
      "A sedan of the new line built on Geely platforms.",
      "Two power outputs: 150 and 200 hp.",
      "Combined consumption is 7.1 litres per 100 km.",
      "Recommended price from 2,999,000 to 3,399,000 roubles under the July 2026 price list."
    ],
    "history": "Часть возрождённой марки: премьера линейки прошла на ЦИПР, продажи стартовали в 2026 году. Данные и цены приведены по прайс-листу марки, опубликованному агрегатором AUTO vs AUTO.",
    "historyEn": "Part of the revived brand: the line premiered at CIPR and sales began in 2026. Specifications and prices follow the brand price list published by the AUTO vs AUTO aggregator.",
    "source": "https://autovsauto.ru/cars/volga-c50/",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/2026_Volga_C50_test_drive_green_grey_front.jpg/1920px-2026_Volga_C50_test_drive_green_grey_front.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_C50_test_drive_green_grey_front.jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/2026_Volga_C50_Premium_black_rear.jpg/1920px-2026_Volga_C50_Premium_black_rear.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_C50_Premium_black_rear.jpg",
        "lic": "CC0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/2026_Volga_C50_Premium_interior.jpg/1920px-2026_Volga_C50_Premium_interior.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_C50_Premium_interior.jpg",
        "lic": "CC0",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "k40",
    "slug": "volga-k40",
    "order": 15,
    "name": "Volga K40",
    "nameEn": "Volga K40",
    "years": "2026",
    "line": "Возвращение марки",
    "lineEn": "Brand revival",
    "klass": "Кроссовер",
    "klassEn": "Crossover",
    "body": "Кроссовер",
    "bodyEn": "Crossover",
    "bodyType": "crossover",
    "engines": "1,5 л турбо: 147 л.с.; 2,0 л турбо: 200 л.с.",
    "enginesEn": "1.5 turbo: 147 hp; 2.0 turbo: 200 hp",
    "trans": "7-ступенчатый робот или 8-ступенчатый автомат",
    "transEn": "7-speed DCT or 8-speed automatic",
    "base": "2760 мм",
    "length": "4678 мм",
    "width": "1900 мм",
    "height": "1705 мм",
    "mass": "1646 кг",
    "facts": [
      "Младший кроссовер линейки.",
      "Версии 147 л.с. передние, 200 л.с. с полным приводом.",
      "Клиренс 215 мм, багажник 650 л.",
      "Рекомендованная цена от 2 849 000 до 3 899 000 рублей по прайс-листу на июль 2026."
    ],
    "factsEn": [
      "The junior crossover of the line.",
      "147 hp versions are front-wheel drive, 200 hp versions have all-wheel drive.",
      "Ground clearance is 215 mm, boot volume 650 litres.",
      "Recommended price from 2,849,000 to 3,899,000 roubles under the July 2026 price list."
    ],
    "history": "Кроссовер возрождённой марки на платформе Geely. Продаётся официально, цены и оснащение взяты из прайс-листа марки.",
    "historyEn": "A crossover of the revived brand on a Geely platform. It is officially on sale; prices and equipment come from the brand price list.",
    "source": "https://autovsauto.ru/cars/volga-k40/",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/2026_Volga_K40_test_drive_green_grey_front.jpg/1920px-2026_Volga_K40_test_drive_green_grey_front.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_K40_test_drive_green_grey_front.jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/2026_Volga_K40_Premium_silver_rear.jpg/1920px-2026_Volga_K40_Premium_silver_rear.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_K40_Premium_silver_rear.jpg",
        "lic": "CC0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      },
      {
        "kind": "interior",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/2026_Volga_K40_Premium_silver_interior.jpg/1920px-2026_Volga_K40_Premium_silver_interior.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_K40_Premium_silver_interior.jpg",
        "lic": "CC0",
        "captionRu": "Салон",
        "captionEn": "Interior",
        "own": true
      }
    ],
    "photoCount": 3
  },
  {
    "id": "k50",
    "slug": "volga-k50",
    "order": 16,
    "name": "Volga K50",
    "nameEn": "Volga K50",
    "years": "2026",
    "line": "Возвращение марки",
    "lineEn": "Brand revival",
    "klass": "Кроссовер",
    "klassEn": "Crossover",
    "body": "Кроссовер",
    "bodyEn": "Crossover",
    "bodyType": "crossover",
    "engines": "2,0 л турбо: 238 л.с.",
    "enginesEn": "2.0 turbo: 238 hp",
    "trans": "8-ступенчатый автомат, полный привод",
    "transEn": "8-speed automatic, all-wheel drive",
    "base": "2845 мм",
    "length": "4770 мм",
    "width": "1895 мм",
    "height": "1689 мм",
    "mass": "1845 кг",
    "facts": [
      "Старший кроссовер линейки.",
      "Разгон до 100 км/ч за 7,7 с.",
      "Расход в смешанном цикле 8,8 л на 100 км.",
      "Рекомендованная цена от 4 349 000 до 4 799 000 рублей по прайс-листу на июль 2026."
    ],
    "factsEn": [
      "The flagship crossover of the line.",
      "0-100 km/h in 7.7 seconds.",
      "Combined consumption is 8.8 litres per 100 km.",
      "Recommended price from 4,349,000 to 4,799,000 roubles under the July 2026 price list."
    ],
    "history": "Флагман возрождённой марки, построен на платформе Geely Monjaro. Самый мощный и самый дорогой автомобиль новой линейки.",
    "historyEn": "The flagship of the revived brand, built on the Geely Monjaro platform. The most powerful and most expensive car of the new line.",
    "source": "https://autovsauto.ru/cars/volga-k50/",
    "photos": [
      {
        "kind": "front",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/2026_Volga_K50_Exclusive_green_front.jpg/1920px-2026_Volga_K50_Exclusive_green_front.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_K50_Exclusive_green_front.jpg",
        "lic": "CC0",
        "captionRu": "Вид спереди",
        "captionEn": "Front view",
        "own": true
      },
      {
        "kind": "rear",
        "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/2026_Volga_K50_Premium_black_rear.jpg/1920px-2026_Volga_K50_Premium_black_rear.jpg",
        "page": "https://commons.wikimedia.org/wiki/File:2026_Volga_K50_Premium_black_rear.jpg",
        "lic": "CC0",
        "captionRu": "Вид сзади",
        "captionEn": "Rear view",
        "own": true
      }
    ],
    "photoCount": 2
  }
];
const VOLGA_TIMELINE = [
  {
    "year": 1956,
    "ru": "С конвейера Горьковского автозавода сходит первая «Волга» ГАЗ-21.",
    "en": "The first Volga, the GAZ-21, leaves the Gorky line.",
    "slug": "gaz-21"
  },
  {
    "year": 1962,
    "ru": "Появляются универсал ГАЗ-22 и спецверсия ГАЗ-23 с V8.",
    "en": "The GAZ-22 estate and the V8-powered GAZ-23 appear.",
    "slug": "gaz-22"
  },
  {
    "year": 1965,
    "ru": "Заводской индекс М-21 меняется на ГАЗ-21.",
    "en": "The factory index changes from M-21 to GAZ-21.",
    "slug": "gaz-21"
  },
  {
    "year": 1970,
    "ru": "ГАЗ-24 сменяет 21-ю модель.",
    "en": "The GAZ-24 replaces the GAZ-21.",
    "slug": "gaz-24"
  },
  {
    "year": 1972,
    "ru": "Начинается выпуск универсала ГАЗ-24-02.",
    "en": "Production of the GAZ-24-02 estate begins.",
    "slug": "gaz-24-02"
  },
  {
    "year": 1981,
    "ru": "Запущена ГАЗ-3102 для номенклатуры.",
    "en": "The GAZ-3102 for the nomenklatura is launched.",
    "slug": "gaz-3102"
  },
  {
    "year": 1985,
    "ru": "ГАЗ-24-10: модернизация 24-й с деталями от 3102.",
    "en": "GAZ-24-10: a modernised 24 with parts from the 3102.",
    "slug": "gaz-24-10"
  },
  {
    "year": 1991,
    "ru": "На конвейер встаёт ГАЗ-31029.",
    "en": "The GAZ-31029 enters the line.",
    "slug": "gaz-31029"
  },
  {
    "year": 1992,
    "ru": "Малой серией собирают ГАЗ-3105.",
    "en": "The GAZ-3105 is assembled in a small series.",
    "slug": "gaz-3105"
  },
  {
    "year": 1997,
    "ru": "ГАЗ-3110 становится главной «Волгой».",
    "en": "The GAZ-3110 becomes the main Volga.",
    "slug": "gaz-3110"
  },
  {
    "year": 1998,
    "ru": "Премьера ГАЗ-3111 на Московском автосалоне.",
    "en": "The GAZ-3111 premieres at the Moscow Motor Show.",
    "slug": "gaz-3111"
  },
  {
    "year": 1999,
    "ru": "Начинается мелкосерийная сборка ГАЗ-3111.",
    "en": "Small-series assembly of the GAZ-3111 begins.",
    "slug": "gaz-3111"
  },
  {
    "year": 2004,
    "ru": "Рестайлинговая ГАЗ-31105 сменяет 3110.",
    "en": "The facelifted GAZ-31105 replaces the 3110.",
    "slug": "gaz-31105"
  },
  {
    "year": 2008,
    "ru": "Завод выпускает Volga Siber на платформе Chrysler.",
    "en": "The plant builds the Volga Siber on a Chrysler platform.",
    "slug": "volga-siber"
  },
  {
    "year": 2009,
    "ru": "Конвейер классической «Волги» остановлен.",
    "en": "The classic Volga line stops.",
    "slug": "gaz-31105"
  },
  {
    "year": 2010,
    "ru": "Производство Volga Siber прекращено.",
    "en": "Volga Siber production ends.",
    "slug": "volga-siber"
  },
  {
    "year": 2026,
    "ru": "Возрождённая марка выходит на рынок с C50, K40 и K50.",
    "en": "The revived brand reaches the market with the C50, K40 and K50.",
    "slug": "volga-c50"
  }
];
