/* ============================================================
   ВОЛГА. Каталог автомобилей
   Логика: язык, рендер главной, каталога, карточки модели,
   таймлайна истории и фильтров.
   Зависимость: data.js с массивом VOLGA_MODELS.
   ============================================================ */

(function () {
  "use strict";

  var LANG_KEY = "volga.lang";
  var DEFAULT_LANG = "ru";

  var models =
    typeof VOLGA_MODELS !== "undefined" && Array.isArray(VOLGA_MODELS)
      ? VOLGA_MODELS.slice()
      : [];

  models.sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });

  var state = {
    lang: DEFAULT_LANG,
    query: "",
    line: "all",
    body: "all",
    decades: []
  };

  /* 1. Словарь интерфейса
     ============================================================ */

  var I18N = {
    ru: {
      "meta.home": "Волга. Каталог автомобилей ГАЗ, 1956-2026",
      "meta.catalog": "Каталог моделей - Волга",
      "meta.history": "История марки - Волга",
      "meta.about": "Об издании - Волга",
      "meta.brand": "Волга",

      "brand.sub": "Автомобильный архив · 1956-2026",
      "nav.label": "Основная навигация",
      "nav.home": "Главная",
      "nav.catalog": "Каталог",
      "nav.history": "История",
      "nav.about": "Об издании",
      "lang.label": "Язык интерфейса",
      "skip": "Перейти к содержанию",

      "header.edition": "Издание № 1 · справочник моделей",
      "header.date": "19 ноября 2026",

      "home.heroKicker": "Модель {n} из {total}",
      "home.heroLead":
        "Первая «Волга»: три серии, хром и первая автоматическая коробка. С неё начинается каталог.",
      "home.heroCta": "Смотреть модель",
      "home.heroAll": "Весь каталог",
      "home.stats.models": "Моделей",
      "home.stats.years": "Годы выпуска",
      "home.stats.lines": "Линии",
      "home.stats.photos": "Фотографий",
      "home.s1num": "01",
      "home.s1title": "Линия марки",
      "home.s1cap": "Каталог легковых автомобилей Горьковского автозавода",
      "home.s1text":
        "От послевоенной ГАЗ-21 до линейки 2026 года: шестнадцать моделей, пять линий и разные эпохи одного завода.",
      "home.s1text2":
        "Основная линия шла к новой «Волге», параллельная держала номенклатуру, малая серия пробовала будущее, вернувшаяся марка начинает заново.",
      "home.s1link": "Смотреть все модели",
      "home.s2num": "02",
      "home.s2title": "От 1956 до 2026",
      "home.s2text":
        "Семьдесят лет истории марки. Указатель по годам начала выпуска ведёт сразу к карточке модели.",
      "home.s3num": "03",
      "home.s3title": "Техника и факты",
      "home.s3text":
        "Три подробности из архива: автоматическая коробка, предкамерное зажигание и реечное рулевое управление.",
      "home.factLink": "Открыть модель",
      "home.ctaTitle": "Шестнадцать машин. Семьдесят лет.",
      "home.ctaNote": "Каталог, фильтры, галереи",
      "home.ctaBtn": "Открыть каталог",

      "catalog.kicker": "Архив",
      "catalog.filters": "Фильтры каталога",
      "catalog.title": "Каталог моделей",
      "catalog.lead":
        "Шестнадцать моделей «Волги» Горьковского автозавода. Фильтры по линии, кузову и десятилетию, поиск по названию.",
      "catalog.search": "Поиск по названию",
      "catalog.searchPh": "Например, ГАЗ-24 или 3110",
      "catalog.line": "Линия",
      "catalog.body": "Кузов",
      "catalog.decade": "Десятилетие",
      "catalog.bodySedan": "Седан",
      "catalog.bodyEstate": "Универсал",
      "catalog.bodyCrossover": "Кроссовер",
      "catalog.all": "Все",
      "catalog.count": "Найдено: {n} из {total}",
      "catalog.reset": "Сбросить",
      "catalog.noPhoto": "Нет фото",
      "catalog.emptyTitle": "Ничего не найдено",
      "catalog.emptyText":
        "Измените запрос или сбросите фильтры. В каталоге шестнадцать моделей.",
      "catalog.emptyBtn": "Сбросить фильтры",

      "model.crumbLabel": "Путь к странице",
      "model.kicker": "Модель {n} из {total}",
      "model.specs": "Характеристики",
      "model.spec.body": "Кузов",
      "model.spec.engines": "Двигатель",
      "model.spec.trans": "Трансмиссия",
      "model.spec.base": "База",
      "model.spec.length": "Длина",
      "model.spec.width": "Ширина",
      "model.spec.height": "Высота",
      "model.spec.mass": "Масса",
      "model.history": "История",
      "model.facts": "Факты",
      "model.gallery": "Галерея",
      "model.filePage": "Страница файла",
      "model.relatedPhoto": "Фото родственной модели",
      "model.noPhotos":
        "Свободных фотографий этой модели в Wikimedia Commons нет",
      "model.source": "Источник: Википедия",
      "model.prev": "Предыдущая модель",
      "model.next": "Следующая модель",
      "model.pagerLabel": "Другие модели",
      "model.notFound": "Модель не найдена",
      "model.notFoundText":
        "Такой модели нет в каталоге. Возможно, ссылка устарела.",
      "model.toCatalog": "Открыть каталог",
      "model.dataError": "Данные каталога не загружены",
      "model.dataErrorText":
        "Проверьте, что файл data.js лежит рядом со страницами сайта.",

      "history.kicker": "Хроника",
      "history.title": "История марки",
      "history.lead":
        "Семнадцать дат, в которых видна вся линия «Волги»: от первых пяти машин 1956 года до линейки 2026-го.",
      "history.openModel": "Открыть модель",

      "about.kicker": "Издание",
      "about.title": "Об издании",
      "about.lead":
        "Справочник об одной марке: шестнадцать моделей, от первой «Волги» 1956 года до линейки 2026-го.",
      "about.aboutTitle": "О чём это издание",
      "about.aboutText":
        "«Волга» — справочное издание об одной марке. Здесь собраны карточки моделей Горьковского автозавода: характеристики, история выпуска и хроника. Восемь моделей основной линии, ГАЗ-3102 параллельной линии, спецверсия ГАЗ-23, две машины малой серии, Volga Siber и три модели современной линейки.",
      "about.sourcesTitle": "Источники",
      "about.sourceModels":
        "Статьи Википедии по каждой модели: оттуда взяты характеристики, история выпуска и ссылки на страницы файлов.",
      "about.sourcePrices":
        "Для современной линейки характеристики сверены с прайс-листами марки за июль 2026 года в пересказе агрегатора AUTO vs AUTO.",
      "about.termsTitle": "Цены и характеристики",
      "about.termsText":
        "Цены в издании рекомендованные и могут отличаться от дилерских. Характеристики собраны по открытым источникам и могут расходиться с данными конкретных машин.",
      "about.photosTitle": "Фотографии",
      "about.photosText":
        "Снимки взяты с Wikimedia Commons, лицензия указана под каждым кадром. Для части поздних моделей салоны взяты у родственных моделей, и это подписано в подписи.",
      "about.photosNote":
        "У ГАЗ-23 свободных фотографий нет, поэтому её карточка опубликована без снимков.",
      "about.date": "Дата выпуска: 19 ноября 2026.",

      "footer.note":
        "Каталог собран по материалам Википедии и Викисклада. Фотографии используются по лицензиям, указанным в карточках моделей.",
      "footer.nav": "Навигация в подвале",
      "footer.place": "Горьковский автомобильный завод"
    },

    en: {
      "meta.home": "Volga. GAZ car catalog, 1956-2026",
      "meta.catalog": "Model catalog - Volga",
      "meta.history": "Brand history - Volga",
      "meta.about": "About the edition - Volga",
      "meta.brand": "Volga",

      "brand.sub": "Automobile archive · 1956-2026",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.catalog": "Catalog",
      "nav.history": "History",
      "nav.about": "About",
      "lang.label": "Interface language",
      "skip": "Skip to content",

      "header.edition": "Edition No. 1 · model reference",
      "header.date": "19 November 2026",

      "home.heroKicker": "Model {n} of {total}",
      "home.heroLead":
        "The first Volga: three series, chrome and the first automatic gearbox. The catalog starts here.",
      "home.heroCta": "Open model",
      "home.heroAll": "Full catalog",
      "home.stats.models": "Models",
      "home.stats.years": "Production years",
      "home.stats.lines": "Lines",
      "home.stats.photos": "Photographs",
      "home.s1num": "01",
      "home.s1title": "The brand line",
      "home.s1cap": "Passenger cars of the Gorky Automobile Plant",
      "home.s1text":
        "From the post-war GAZ-21 to the 2026 line: sixteen models, five lines and different eras of one plant.",
      "home.s1text2":
        "The main line moved toward a new Volga, the parallel line served the nomenklatura, the small series tried the future, and the returning brand starts over.",
      "home.s1link": "See all models",
      "home.s2num": "02",
      "home.s2title": "From 1956 to 2026",
      "home.s2text":
        "Seventy years of brand history. The index by launch year leads straight to a model page.",
      "home.s3num": "03",
      "home.s3title": "Engineering and facts",
      "home.s3text":
        "Three details from the archive: an automatic gearbox, pre-chamber ignition and rack-and-pinion steering.",
      "home.factLink": "Open model",
      "home.ctaTitle": "Sixteen cars. Seventy years.",
      "home.ctaNote": "Catalog, filters, galleries",
      "home.ctaBtn": "Open catalog",

      "catalog.kicker": "Archive",
      "catalog.filters": "Catalog filters",
      "catalog.title": "Model catalog",
      "catalog.lead":
        "Sixteen Volga models of the Gorky Automobile Plant. Filter by line, body type and decade, search by name.",
      "catalog.search": "Search by name",
      "catalog.searchPh": "For example, GAZ-24 or 3110",
      "catalog.line": "Line",
      "catalog.body": "Body",
      "catalog.decade": "Decade",
      "catalog.bodySedan": "Sedan",
      "catalog.bodyEstate": "Estate",
      "catalog.bodyCrossover": "Crossover",
      "catalog.all": "All",
      "catalog.count": "Found: {n} of {total}",
      "catalog.reset": "Reset",
      "catalog.noPhoto": "No photo",
      "catalog.emptyTitle": "Nothing found",
      "catalog.emptyText":
        "Change the query or reset the filters. The catalog has sixteen models.",
      "catalog.emptyBtn": "Reset filters",

      "model.crumbLabel": "Page path",
      "model.kicker": "Model {n} of {total}",
      "model.specs": "Specifications",
      "model.spec.body": "Body",
      "model.spec.engines": "Engine",
      "model.spec.trans": "Transmission",
      "model.spec.base": "Wheelbase",
      "model.spec.length": "Length",
      "model.spec.width": "Width",
      "model.spec.height": "Height",
      "model.spec.mass": "Mass",
      "model.history": "History",
      "model.facts": "Facts",
      "model.gallery": "Gallery",
      "model.filePage": "File page",
      "model.relatedPhoto": "Related model photo",
      "model.noPhotos":
        "No free photographs of this model are available on Wikimedia Commons",
      "model.source": "Source: Wikipedia",
      "model.prev": "Previous model",
      "model.next": "Next model",
      "model.pagerLabel": "Other models",
      "model.notFound": "Model not found",
      "model.notFoundText":
        "There is no such model in the catalog. The link may be outdated.",
      "model.toCatalog": "Open catalog",
      "model.dataError": "Catalog data is not loaded",
      "model.dataErrorText":
        "Check that data.js is stored next to the site pages.",

      "history.kicker": "Chronicle",
      "history.title": "Brand history",
      "history.lead":
        "Seventeen dates that trace the whole Volga story: from the first five cars in 1956 to the 2026 line.",
      "history.openModel": "Open model",

      "about.kicker": "Edition",
      "about.title": "About the edition",
      "about.lead":
        "A reference book about one marque: sixteen models, from the first Volga of 1956 to the 2026 line.",
      "about.aboutTitle": "What this edition is",
      "about.aboutText":
        "Volga is a reference edition about a single marque. It collects pages of Gorky Automobile Plant models: specifications, production history and a chronicle. Eight models of the main line, the parallel GAZ-3102, the special GAZ-23, two small-series cars, the Volga Siber and three models of the current line.",
      "about.sourcesTitle": "Sources",
      "about.sourceModels":
        "Wikipedia articles on each model: specifications, production history and links to the original files come from there.",
      "about.sourcePrices":
        "For the current line, specifications were checked against the brand price lists of July 2026 as retold by the AUTO vs AUTO aggregator.",
      "about.termsTitle": "Prices and specifications",
      "about.termsText":
        "Prices in this edition are recommended and may differ from dealer prices. Specifications come from open sources and may differ from those of a particular car.",
      "about.photosTitle": "Photographs",
      "about.photosText":
        "Photographs come from Wikimedia Commons, and the licence is shown under every image. For some late models the interior shots are taken from related models, and the caption says so.",
      "about.photosNote":
        "There are no free photographs of the GAZ-23 on Wikimedia Commons, so its page is published without images.",
      "about.date": "Published on 19 November 2026.",

      "footer.note":
        "The catalog is based on Wikipedia and Wikimedia Commons. Photos are used under the licences listed on each model page.",
      "footer.nav": "Footer navigation",
      "footer.place": "Gorky Automobile Plant"
    }
  };

  /* 2. Хроника
     ============================================================ */

  var TIMELINE =
    typeof VOLGA_TIMELINE !== "undefined" && Array.isArray(VOLGA_TIMELINE)
      ? VOLGA_TIMELINE.slice()
      : [];

  /* 3. Помощники
     ============================================================ */

  function t(key) {
    var pack = I18N[state.lang] || I18N.ru;
    if (pack[key] !== undefined) {
      return pack[key];
    }
    return I18N.ru[key] !== undefined ? I18N.ru[key] : key;
  }

  function field(obj, base) {
    if (!obj) {
      return "";
    }
    if (state.lang === "en") {
      return obj[base + "En"] || obj[base] || "";
    }
    return obj[base] || "";
  }

  function captionOf(photo) {
    if (!photo) {
      return "";
    }
    if (state.lang === "en") {
      return photo.captionEn || photo.captionRu || "";
    }
    return photo.captionRu || photo.captionEn || "";
  }

  function esc(value) {
    return String(value === null || value === undefined ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function pad2(value) {
    var n = parseInt(value, 10) || 0;
    return (n < 10 ? "0" : "") + n;
  }

  function altText(model, photo) {
    var name = field(model, "name");
    var caption = captionOf(photo);
    if (!caption) {
      return name;
    }
    return name + " - " + caption;
  }

  function yearsText(model) {
    var value = model && model.years ? model.years : "";
    if (state.lang === "en") {
      value = value.replace(/,\s*малая серия/gi, ", small series");
    }
    return value;
  }

  function factList(model) {
    if (state.lang === "en") {
      return model.factsEn || model.facts || [];
    }
    return model.facts || [];
  }

  function photoScore(model, photo) {
    var token = String((model && model.slug) || "")
      .replace(/^gaz-?/i, "")
      .toLowerCase();
    if (!token) {
      return 0;
    }
    var hay = ((photo.url || "") + " " + (photo.page || "")).toLowerCase();
    return hay.indexOf(token) !== -1 ? 1 : 0;
  }

  function pickPhoto(model, kinds) {
    var photos = (model && model.photos) || [];
    for (var k = 0; k < kinds.length; k += 1) {
      var matches = [];
      for (var i = 0; i < photos.length; i += 1) {
        if (photos[i].kind === kinds[k]) {
          matches.push(photos[i]);
        }
      }
      if (matches.length) {
        var best = matches[0];
        for (var j = 1; j < matches.length; j += 1) {
          if (photoScore(model, matches[j]) > photoScore(model, best)) {
            best = matches[j];
          }
        }
        return best;
      }
    }
    return photos[0] || null;
  }

  function cardPhoto(model) {
    return pickPhoto(model, ["front", "side", "rear"]);
  }

  function heroPhoto(model) {
    return pickPhoto(model, ["front", "side", "rear"]);
  }

  function shortLine(model) {
    var line = field(model, "line");
    var text = line.toLowerCase();
    if (state.lang === "en") {
      if (text.indexOf("parallel") !== -1) {
        return "Parallel";
      }
      if (text.indexOf("small") !== -1) {
        return "Small series";
      }
      return "Main";
    }
    if (text.indexOf("параллель") !== -1) {
      return "Параллельная";
    }
    if (text.indexOf("малая") !== -1) {
      return "Малая серия";
    }
    return "Основная";
  }

  function yearsIn(model) {
    var years = String((model && model.years) || "").match(/19\d{2}|20\d{2}/g);
    return years ? years.map(Number) : [];
  }

  function firstYear(model) {
    var list = yearsIn(model);
    return list.length ? list[0] : "";
  }

  function decadesOf(model) {
    var list = yearsIn(model);
    var result = [];
    for (var i = 0; i < list.length; i += 1) {
      var decade = Math.floor(list[i] / 10) * 10;
      if (result.indexOf(decade) === -1) {
        result.push(decade);
      }
    }
    return result;
  }

  function decadeLabel(decade) {
    return state.lang === "en" ? decade + "s" : decade + "-е";
  }

  function normalize(value) {
    return String(value)
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^0-9a-zа-я]+/g, "");
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) {
      node.textContent = value;
    }
  }

  function allDecades() {
    var result = [];
    for (var i = 0; i < models.length; i += 1) {
      var list = decadesOf(models[i]);
      for (var j = 0; j < list.length; j += 1) {
        if (result.indexOf(list[j]) === -1) {
          result.push(list[j]);
        }
      }
    }
    result.sort(function (a, b) {
      return a - b;
    });
    return result;
  }

  function allLines() {
    var result = [];
    for (var i = 0; i < models.length; i += 1) {
      var exists = false;
      for (var j = 0; j < result.length; j += 1) {
        if (result[j].line === models[i].line) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        result.push({
          line: models[i].line,
          lineEn: models[i].lineEn || models[i].line
        });
      }
    }
    return result;
  }

  var BODY_TYPES = ["sedan", "estate", "crossover"];

  var BODY_LABELS = {
    sedan: "catalog.bodySedan",
    estate: "catalog.bodyEstate",
    crossover: "catalog.bodyCrossover"
  };

  function allBodyTypes() {
    var result = [];
    for (var i = 0; i < BODY_TYPES.length; i += 1) {
      for (var j = 0; j < models.length; j += 1) {
        if (models[j].bodyType === BODY_TYPES[i]) {
          result.push(BODY_TYPES[i]);
          break;
        }
      }
    }
    return result;
  }

  function bodyLabel(type) {
    var key = BODY_LABELS[type];
    return key ? t(key) : type;
  }

  /* 4. Язык
     ============================================================ */

  function readLang() {
    var value = "";
    try {
      value = window.localStorage.getItem(LANG_KEY) || "";
    } catch (error) {
      value = "";
    }
    if (value === "ru" || value === "en") {
      return value;
    }
    return document.documentElement.lang === "en" ? "en" : DEFAULT_LANG;
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      /* Режим приватного окна или file:// без хранилища. */
    }
  }

  function updateLangButtons() {
    var buttons = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < buttons.length; i += 1) {
      var isActive = buttons[i].getAttribute("data-lang-btn") === state.lang;
      buttons[i].setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function translateStatic() {
    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i += 1) {
      var key = textNodes[i].getAttribute("data-i18n");
      var value = t(key);
      if (value) {
        textNodes[i].textContent = value;
      }
    }

    var holders = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < holders.length; j += 1) {
      holders[j].setAttribute(
        "placeholder",
        t(holders[j].getAttribute("data-i18n-ph"))
      );
    }

    var labels = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < labels.length; k += 1) {
      labels[k].setAttribute(
        "aria-label",
        t(labels[k].getAttribute("data-i18n-aria"))
      );
    }
  }

  function setLang(lang, persist) {
    state.lang = lang === "en" ? "en" : "ru";
    document.documentElement.lang = state.lang;
    if (persist !== false) {
      saveLang(state.lang);
    }
    updateLangButtons();
    translateStatic();
    renderPage();
  }

  /* 5. Главная
     ============================================================ */

  function renderHome() {
    var first = models[0];
    var hero = document.getElementById("hero-img");

    if (!first) {
      renderDataError("home-root");
      return;
    }

    var photo = (first.photos && first.photos[0]) || null;
    if (hero && photo) {
      hero.src = photo.url;
      hero.alt = altText(first, photo);
    }

    setText(
      "hero-kicker",
      t("home.heroKicker")
        .replace("{n}", pad2(first.order))
        .replace("{total}", String(models.length))
    );
    setText("hero-title", field(first, "name"));
    setText("hero-lead", t("home.heroLead"));

    var meta = document.getElementById("hero-meta");
    if (meta) {
      meta.innerHTML =
        "<span>" +
        esc(yearsText(first)) +
        "</span> <span>" +
        esc(field(first, "line")) +
        "</span> <span>" +
        esc(field(first, "klass")) +
        "</span>";
    }

    document.title = t("meta.home");

    renderStats();
    renderYearIndex();
    renderHomeFacts();
  }

  function renderStats() {
    var grid = document.getElementById("stats-grid");
    if (!grid) {
      return;
    }

    var years = [];
    var photoCount = 0;
    for (var i = 0; i < models.length; i += 1) {
      years = years.concat(yearsIn(models[i]));
      photoCount += (models[i].photos || []).length;
    }

    var min = years.length ? Math.min.apply(null, years) : 0;
    var max = years.length ? Math.max.apply(null, years) : 0;
    var lines = allLines().length;

    var items = [
      { value: pad2(models.length), label: t("home.stats.models") },
      { value: min + "-" + max, label: t("home.stats.years") },
      { value: pad2(lines), label: t("home.stats.lines") },
      { value: pad2(photoCount), label: t("home.stats.photos") }
    ];

    var html = "";
    for (var j = 0; j < items.length; j += 1) {
      html +=
        '<div class="stat"><div class="stat__value">' +
        esc(items[j].value) +
        '</div><div class="stat__label">' +
        esc(items[j].label) +
        "</div></div>";
    }
    grid.innerHTML = html;
  }

  function renderYearIndex() {
    var box = document.getElementById("year-index");
    if (!box) {
      return;
    }

    var html = "";
    for (var i = 0; i < models.length; i += 1) {
      var model = models[i];
      html +=
        '<a class="year-row" href="model.html?id=' +
        encodeURIComponent(model.slug) +
        '">' +
        '<span class="year-row__year">' +
        esc(firstYear(model)) +
        "</span>" +
        '<span class="year-row__name">' +
        esc(field(model, "name")) +
        "</span>" +
        '<span class="year-row__line">' +
        esc(shortLine(model)) +
        "</span>" +
        "</a>";
    }
    box.innerHTML = html;
  }

  function renderHomeFacts() {
    var box = document.getElementById("facts-grid");
    if (!box) {
      return;
    }

    var picks = [
      { index: 0, fact: 1 },
      { index: 3, fact: 2 },
      { index: 6, fact: 3 }
    ];

    var html = "";
    for (var i = 0; i < picks.length; i += 1) {
      var model = models[picks[i].index];
      if (!model) {
        continue;
      }
      var facts = factList(model);
      if (!facts.length) {
        continue;
      }
      var text = facts[picks[i].fact] || facts[facts.length - 1];
      html +=
        '<article class="fact">' +
        '<p class="fact__label">' +
        esc(field(model, "name")) +
        "</p>" +
        '<p class="fact__text">' +
        esc(text) +
        "</p>" +
        '<a class="fact__link" href="model.html?id=' +
        encodeURIComponent(model.slug) +
        '">' +
        esc(t("home.factLink")) +
        "</a>" +
        "</article>";
    }
    box.innerHTML = html;
  }

  /* 6. Каталог
     ============================================================ */

  function renderCatalog() {
    if (!models.length) {
      renderDataError("catalog-root");
      return;
    }
    document.title = t("meta.catalog");
    buildCatalogFilters();
    updateChips();
    applyCatalog();
  }

  function buildCatalogFilters() {
    var lineBox = document.getElementById("line-chips");
    var bodyBox = document.getElementById("body-chips");
    var decadeBox = document.getElementById("decade-chips");

    if (lineBox) {
      var lines = allLines();
      var html =
        '<button type="button" class="chip" data-line="all" aria-pressed="true">' +
        esc(t("catalog.all")) +
        "</button>";

      for (var i = 0; i < lines.length; i += 1) {
        var label = state.lang === "en" ? lines[i].lineEn : lines[i].line;
        html +=
          '<button type="button" class="chip" data-line="' +
          esc(lines[i].line) +
          '" aria-pressed="false">' +
          esc(label) +
          "</button>";
      }
      lineBox.innerHTML = html;
    }

    if (bodyBox) {
      var bodies = allBodyTypes();
      var bodyHtml =
        '<button type="button" class="chip" data-body="all" aria-pressed="true">' +
        esc(t("catalog.all")) +
        "</button>";

      for (var b = 0; b < bodies.length; b += 1) {
        bodyHtml +=
          '<button type="button" class="chip" data-body="' +
          esc(bodies[b]) +
          '" aria-pressed="false">' +
          esc(bodyLabel(bodies[b])) +
          "</button>";
      }
      bodyBox.innerHTML = bodyHtml;
    }

    if (decadeBox) {
      var decades = allDecades();
      var chipHtml =
        '<button type="button" class="chip" data-decade="all" aria-pressed="true">' +
        esc(t("catalog.all")) +
        "</button>";
      for (var j = 0; j < decades.length; j += 1) {
        chipHtml +=
          '<button type="button" class="chip" data-decade="' +
          decades[j] +
          '" aria-pressed="false">' +
          esc(decadeLabel(decades[j])) +
          "</button>";
      }
      decadeBox.innerHTML = chipHtml;
    }
  }

  function updateChips() {
    var lineChips = document.querySelectorAll("[data-line]");
    for (var i = 0; i < lineChips.length; i += 1) {
      var value = lineChips[i].getAttribute("data-line");
      lineChips[i].setAttribute(
        "aria-pressed",
        value === state.line ? "true" : "false"
      );
    }

    var bodyChips = document.querySelectorAll("[data-body]");
    for (var b = 0; b < bodyChips.length; b += 1) {
      var body = bodyChips[b].getAttribute("data-body");
      bodyChips[b].setAttribute(
        "aria-pressed",
        body === state.body ? "true" : "false"
      );
    }

    var decadeChips = document.querySelectorAll("[data-decade]");
    for (var j = 0; j < decadeChips.length; j += 1) {
      var raw = decadeChips[j].getAttribute("data-decade");
      if (raw === "all") {
        decadeChips[j].setAttribute(
          "aria-pressed",
          state.decades.length === 0 ? "true" : "false"
        );
        continue;
      }
      var decade = parseInt(raw, 10);
      decadeChips[j].setAttribute(
        "aria-pressed",
        state.decades.indexOf(decade) !== -1 ? "true" : "false"
      );
    }
  }

  function getFiltered() {
    var query = state.query.trim().toLowerCase();
    var normalized = normalize(query);
    var result = [];

    for (var i = 0; i < models.length; i += 1) {
      var model = models[i];

      if (state.line !== "all" && model.line !== state.line) {
        continue;
      }

      if (state.body !== "all" && model.bodyType !== state.body) {
        continue;
      }

      if (normalized) {
        var haystack = normalize(
          [model.name, model.nameEn, model.slug, model.id].join(" ")
        );
        if (haystack.indexOf(normalized) === -1) {
          continue;
        }
      }

      if (state.decades.length) {
        var decades = decadesOf(model);
        var hit = false;
        for (var j = 0; j < state.decades.length; j += 1) {
          if (decades.indexOf(state.decades[j]) !== -1) {
            hit = true;
            break;
          }
        }
        if (!hit) {
          continue;
        }
      }

      result.push(model);
    }

    return result;
  }

  function cardSpecsHTML(model) {
    var items = [
      [t("model.spec.engines"), field(model, "engines")],
      [t("model.spec.trans"), field(model, "trans")],
      [t("model.spec.mass"), model.mass || ""]
    ];

    var html = "";
    for (var i = 0; i < items.length; i += 1) {
      if (!items[i][1]) {
        continue;
      }
      html +=
        '<div class="card__spec"><dt>' +
        esc(items[i][0]) +
        "</dt><dd>" +
        esc(items[i][1]) +
        "</dd></div>";
    }

    if (!html) {
      return "";
    }
    return '<dl class="card__specs">' + html + "</dl>";
  }

  function cardHTML(model) {
    var photo = cardPhoto(model);
    var media = "";

    if (photo) {
      media =
        '<img src="' +
        esc(photo.url) +
        '" alt="' +
        esc(altText(model, photo)) +
        '" loading="lazy" decoding="async">';
    } else {
      media =
        '<span class="card__empty">' + esc(t("catalog.noPhoto")) + "</span>";
    }

    return (
      '<article class="card">' +
      '<a class="card__link" href="model.html?id=' +
      encodeURIComponent(model.slug) +
      '">' +
      '<div class="card__media">' +
      media +
      '<span class="card__num">' +
      pad2(model.order) +
      "</span>" +
      "</div>" +
      '<div class="card__body">' +
      '<span class="card__tag">' +
      esc(field(model, "line")) +
      "</span>" +
      '<h2 class="card__title">' +
      esc(field(model, "name")) +
      "</h2>" +
      '<p class="card__years">' +
      esc(yearsText(model)) +
      "</p>" +
      '<p class="card__class">' +
      esc(field(model, "klass")) +
      "</p>" +
      cardSpecsHTML(model) +
      "</div>" +
      "</a>" +
      "</article>"
    );
  }

  function applyCatalog() {
    var grid = document.getElementById("cards");
    var empty = document.getElementById("empty");
    if (!grid) {
      return;
    }

    var list = getFiltered();
    var html = "";
    for (var i = 0; i < list.length; i += 1) {
      html += cardHTML(list[i]);
    }
    grid.innerHTML = html;

    var count = document.getElementById("count");
    if (count) {
      count.textContent = t("catalog.count")
        .replace("{n}", String(list.length))
        .replace("{total}", String(models.length));
    }

    if (empty) {
      empty.hidden = list.length > 0;
    }

    updateChips();
  }

  function resetFilters() {
    state.query = "";
    state.line = "all";
    state.body = "all";
    state.decades = [];
    var input = document.getElementById("search");
    if (input) {
      input.value = "";
    }
    applyCatalog();
  }

  function bindCatalog() {
    var form = document.getElementById("filter-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });
    }

    var input = document.getElementById("search");
    if (input) {
      input.addEventListener("input", function () {
        state.query = input.value;
        applyCatalog();
      });
    }

    var lineBox = document.getElementById("line-chips");
    if (lineBox) {
      lineBox.addEventListener("click", function (event) {
        var button = event.target.closest ? event.target.closest("[data-line]") : null;
        if (!button) {
          return;
        }
        state.line = button.getAttribute("data-line");
        applyCatalog();
      });
    }

    var bodyBox = document.getElementById("body-chips");
    if (bodyBox) {
      bodyBox.addEventListener("click", function (event) {
        var button = event.target.closest ? event.target.closest("[data-body]") : null;
        if (!button) {
          return;
        }
        state.body = button.getAttribute("data-body");
        applyCatalog();
      });
    }

    var decadeBox = document.getElementById("decade-chips");
    if (decadeBox) {
      decadeBox.addEventListener("click", function (event) {
        var button = event.target.closest
          ? event.target.closest("[data-decade]")
          : null;
        if (!button) {
          return;
        }
        var rawDecade = button.getAttribute("data-decade");
        if (rawDecade === "all") {
          state.decades = [];
          applyCatalog();
          return;
        }
        var decade = parseInt(rawDecade, 10);
        var index = state.decades.indexOf(decade);
        if (index === -1) {
          state.decades.push(decade);
          state.decades.sort(function (a, b) {
            return a - b;
          });
        } else {
          state.decades.splice(index, 1);
        }
        applyCatalog();
      });
    }

    var reset = document.getElementById("reset");
    if (reset) {
      reset.addEventListener("click", resetFilters);
    }

    var emptyReset = document.getElementById("empty-reset");
    if (emptyReset) {
      emptyReset.addEventListener("click", resetFilters);
    }
  }

  /* 7. Карточка модели
     ============================================================ */

  function modelBySlug(slug) {
    if (!slug) {
      return { index: -1, model: null };
    }
    for (var i = 0; i < models.length; i += 1) {
      if (models[i].slug === slug || models[i].id === slug) {
        return { index: i, model: models[i] };
      }
    }
    return { index: -1, model: null };
  }

  function readSlug() {
    try {
      return new URLSearchParams(window.location.search).get("id") || "";
    } catch (error) {
      return "";
    }
  }

  function specRows(model) {
    var rows = [
      ["model.spec.body", "body"],
      ["model.spec.engines", "engines"],
      ["model.spec.trans", "trans"],
      ["model.spec.base", "base"],
      ["model.spec.length", "length"],
      ["model.spec.width", "width"],
      ["model.spec.height", "height"],
      ["model.spec.mass", "mass"]
    ];

    var html = "";
    for (var i = 0; i < rows.length; i += 1) {
      html +=
        '<tr><th scope="row">' +
        esc(t(rows[i][0])) +
        "</th><td>" +
        esc(field(model, rows[i][1])) +
        "</td></tr>";
    }
    return html;
  }

  function galleryHTML(model) {
    var photos = model.photos || [];
    var html = "";

    for (var i = 0; i < photos.length; i += 1) {
      var photo = photos[i];
      var meta = "";
      if (photo.page) {
        meta +=
          '<a href="' +
          esc(photo.page) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(t("model.filePage")) +
          "</a> ";
      }
      if (photo.lic) {
        meta += "<span>" + esc(photo.lic) + "</span> ";
      }
      if (photo.own === false) {
        meta +=
          '<span class="shot__note">' +
          esc(t("model.relatedPhoto")) +
          "</span>";
      }

      html +=
        '<figure class="shot">' +
        '<img src="' +
        esc(photo.url) +
        '" alt="' +
        esc(altText(model, photo)) +
        '" loading="lazy" decoding="async">' +
        "<figcaption>" +
        esc(captionOf(photo)) +
        '<div class="shot__meta">' +
        meta +
        "</div>" +
        "</figcaption>" +
        "</figure>";
    }

    return html;
  }

  function renderModel() {
    var root = document.getElementById("model-root");
    if (!root) {
      return;
    }

    if (!models.length) {
      renderDataError("model-root");
      return;
    }

    var found = modelBySlug(readSlug());
    if (found.index === -1) {
      renderModelNotFound(root);
      return;
    }

    var model = found.model;
    var photo = heroPhoto(model);
    var prev = found.index > 0 ? models[found.index - 1] : null;
    var next =
      found.index < models.length - 1 ? models[found.index + 1] : null;

    var html = "";

    html +=
      '<nav class="crumbs" aria-label="' +
      esc(t("model.crumbLabel")) +
      '">' +
      '<a href="index.html">' +
      esc(t("nav.home")) +
      '</a><span class="crumbs__sep" aria-hidden="true"></span>' +
      '<a href="catalog.html">' +
      esc(t("nav.catalog")) +
      '</a><span class="crumbs__sep" aria-hidden="true"></span>' +
      '<span aria-current="page">' +
      esc(field(model, "name")) +
      "</span>" +
      "</nav>";

    html +=
      '<header class="model-head">' +
      '<div class="model-head__main">' +
      '<p class="kicker model-head__kicker">' +
      esc(
        t("model.kicker")
          .replace("{n}", pad2(model.order))
          .replace("{total}", String(models.length))
      ) +
      "</p>" +
      '<h1 class="model-title">' +
      esc(field(model, "name")) +
      "</h1>" +
      '<div class="model-meta"><span>' +
      esc(yearsText(model)) +
      "</span> <span>" +
      esc(field(model, "line")) +
      "</span> <span>" +
      esc(field(model, "klass")) +
      "</span></div>" +
      "</div>" +
      '<div class="model-num" aria-hidden="true">' +
      pad2(model.order) +
      "</div>" +
      "</header>";

    if (photo) {
      var heroMeta = "";
      if (photo.page) {
        heroMeta +=
          '<a href="' +
          esc(photo.page) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(t("model.filePage")) +
          "</a>";
      }
      if (photo.lic) {
        heroMeta += "<span>" + esc(photo.lic) + "</span>";
      }

      html +=
        '<figure class="model-figure">' +
        '<img src="' +
        esc(photo.url) +
        '" alt="' +
        esc(altText(model, photo)) +
        '" fetchpriority="high" decoding="async">' +
        "<figcaption><span>" +
        esc(captionOf(photo)) +
        "</span> <span>" +
        heroMeta +
        "</span></figcaption>" +
        "</figure>";
    } else {
      html +=
        '<p class="photo-empty">' + esc(t("model.noPhotos")) + "</p>";
    }

    html += '<div class="model-layout">';

    html +=
      '<aside class="specs-wrap" aria-labelledby="specs-title">' +
      '<h2 class="block__title" id="specs-title">' +
      esc(t("model.specs")) +
      "</h2>" +
      '<table class="specs"><caption class="sr-only">' +
      esc(t("model.specs")) +
      "</caption><tbody>" +
      specRows(model) +
      "</tbody></table>" +
      "</aside>";

    html += '<div class="model-body">';

    html +=
      '<section class="block" aria-labelledby="history-title">' +
      '<h2 class="block__title" id="history-title">' +
      esc(t("model.history")) +
      "</h2>" +
      '<p class="prose">' +
      esc(field(model, "history")) +
      "</p>" +
      (model.source
        ? '<a class="source-link" href="' +
          esc(model.source) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(t("model.source")) +
          "</a>"
        : "") +
      "</section>";

    var facts = factList(model);
    if (facts.length) {
      var factsHtml = "";
      for (var i = 0; i < facts.length; i += 1) {
        factsHtml += "<li>" + esc(facts[i]) + "</li>";
      }
      html +=
        '<section class="block" aria-labelledby="facts-title">' +
        '<h2 class="block__title" id="facts-title">' +
        esc(t("model.facts")) +
        "</h2>" +
        '<ol class="facts-list">' +
        factsHtml +
        "</ol>" +
        "</section>";
    }

    html += "</div>";
    html += "</div>";

    if ((model.photos || []).length) {
      html +=
        '<section class="gallery-block" aria-labelledby="gallery-title">' +
        '<h2 class="block__title" id="gallery-title">' +
        esc(t("model.gallery")) +
        "</h2>" +
        '<div class="gallery">' +
        galleryHTML(model) +
        "</div>" +
        "</section>";
    }

    html +=
      '<nav class="pager" aria-label="' +
      esc(t("model.pagerLabel")) +
      '">';

    if (prev) {
      html +=
        '<a class="pager__link" href="model.html?id=' +
        encodeURIComponent(prev.slug) +
        '">' +
        '<span class="pager__dir">' +
        esc(t("model.prev")) +
        "</span>" +
        '<span class="pager__name">' +
        esc(field(prev, "name")) +
        "</span>" +
        "</a>";
    } else {
      html += '<div class="pager__spacer" aria-hidden="true"></div>';
    }

    if (next) {
      html +=
        '<a class="pager__link pager__link--next" href="model.html?id=' +
        encodeURIComponent(next.slug) +
        '">' +
        '<span class="pager__dir">' +
        esc(t("model.next")) +
        "</span>" +
        '<span class="pager__name">' +
        esc(field(next, "name")) +
        "</span>" +
        "</a>";
    } else {
      html += '<div class="pager__spacer" aria-hidden="true"></div>';
    }

    html += "</nav>";

    root.innerHTML = html;
    document.title = field(model, "name") + " - " + yearsText(model);
  }

  function renderModelNotFound(root) {
    document.title = t("model.notFound") + " - " + t("meta.brand");
    root.innerHTML =
      '<div class="empty">' +
      '<p class="kicker">404</p>' +
      '<h1 class="empty__title">' +
      esc(t("model.notFound")) +
      "</h1>" +
      '<p class="empty__text">' +
      esc(t("model.notFoundText")) +
      "</p>" +
      '<a class="btn btn--solid" href="catalog.html">' +
      esc(t("model.toCatalog")) +
      "</a>" +
      "</div>";
  }

  function renderDataError(id) {
    var root = document.getElementById(id);
    if (!root) {
      return;
    }
    root.innerHTML =
      '<div class="empty">' +
      '<h1 class="empty__title">' +
      esc(t("model.dataError")) +
      "</h1>" +
      '<p class="empty__text">' +
      esc(t("model.dataErrorText")) +
      "</p>" +
      '<a class="btn btn--solid" href="index.html">' +
      esc(t("nav.home")) +
      "</a>" +
      "</div>";
  }

  /* 8. История
     ============================================================ */

  function renderHistory() {
    var box = document.getElementById("timeline");
    if (!box) {
      return;
    }

    var html = "";
    for (var i = 0; i < TIMELINE.length; i += 1) {
      var item = TIMELINE[i];
      var found = modelBySlug(item.slug);
      var name = found.model ? field(found.model, "name") : item.slug;
      var href = "model.html?id=" + encodeURIComponent(item.slug);
      var text = state.lang === "en" ? item.en : item.ru;

      html +=
        '<li class="timeline__item">' +
        '<div class="timeline__year">' +
        '<a href="' +
        href +
        '">' +
        esc(item.year) +
        "</a>" +
        "</div>" +
        '<div class="timeline__body">' +
        '<h2 class="timeline__title">' +
        '<a class="timeline__name" href="' +
        href +
        '">' +
        esc(name) +
        "</a>" +
        "</h2>" +
        '<p class="timeline__text">' +
        esc(text) +
        "</p>" +
        '<a class="timeline__link" href="' +
        href +
        '">' +
        esc(t("history.openModel")) +
        "</a>" +
        "</div>" +
        "</li>";
    }

    box.innerHTML = html;
    document.title = t("meta.history");
  }

  /* 9. Запуск
     ============================================================ */

  function renderPage() {
    var page = document.body.getAttribute("data-page");
    if (page === "home") {
      renderHome();
    } else if (page === "catalog") {
      renderCatalog();
    } else if (page === "model") {
      renderModel();
    } else if (page === "history") {
      renderHistory();
    } else if (page === "about") {
      document.title = t("meta.about");
    }
  }

  function bindLang() {
    var buttons = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", function (event) {
        var lang = event.currentTarget.getAttribute("data-lang-btn");
        if (lang && lang !== state.lang) {
          setLang(lang);
        }
      });
    }
  }

  function init() {
    state.lang = readLang();
    document.documentElement.lang = state.lang;
    bindLang();
    if (document.body.getAttribute("data-page") === "catalog") {
      bindCatalog();
    }
    updateLangButtons();
    translateStatic();
    renderPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
