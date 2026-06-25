import { type Service, serviceSchema } from "@/schemas/service";

const rawServices: Service[] = [
  {
    slug: "heating",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1585595363541-8b3409e45619?w=800&q=80",
    title: { ru: "Отопление", en: "Heating" },
    description: {
      ru: "Проектирование и монтаж систем отопления для частных домов и коммерческих объектов",
      en: "Design and installation of heating systems for residential and commercial properties",
    },
    longDescription: {
      ru: "Мы предоставляем полный комплекс услуг по проектированию и монтажу систем отопления. Наши специалисты подберут оптимальное решение для вашего объекта с учётом площади, теплопотерь и бюджета. Используем только сертифицированное оборудование ведущих производителей.",
      en: "We provide a full range of services for the design and installation of heating systems. Our specialists will select the optimal solution for your property, considering area, heat loss and budget. We use only certified equipment from leading manufacturers.",
    },
    features: {
      ru: [
        "Расчёт теплопотерь",
        "Проектирование системы",
        "Подбор оборудования",
        "Монтаж радиаторов",
        "Установка котла",
        "Пусконаладка",
        "Гарантийное обслуживание",
      ],
      en: [
        "Heat loss calculation",
        "System design",
        "Equipment selection",
        "Radiator installation",
        "Boiler setup",
        "Commissioning",
        "Warranty service",
      ],
    },
    process: [
      {
        title: { ru: "Выезд на объект", en: "Site Visit" },
        description: {
          ru: "Замеры, осмотр, оценка состояния объекта",
          en: "Measurements, inspection, property assessment",
        },
      },
      {
        title: { ru: "Проектирование", en: "Design" },
        description: {
          ru: "Расчёт и подготовка проектной документации",
          en: "Calculation and preparation of project documentation",
        },
      },
      {
        title: { ru: "Монтаж", en: "Installation" },
        description: {
          ru: "Профессиональный монтаж системы",
          en: "Professional system installation",
        },
      },
      {
        title: { ru: "Пусконаладка", en: "Commissioning" },
        description: {
          ru: "Запуск, настройка и тестирование системы",
          en: "Launch, configuration and system testing",
        },
      },
    ],
    faq: [
      {
        question: {
          ru: "Сколько стоит монтаж отопления?",
          en: "How much does heating installation cost?",
        },
        answer: {
          ru: "Стоимость зависит от площади, типа системы и оборудования. Средняя цена — от 150 000 ₽ для дома 100 м².",
          en: "The cost depends on the area, system type and equipment. Average price — from 150,000 ₽ for a 100 m² house.",
        },
      },
      {
        question: {
          ru: "Какой котёл лучше выбрать?",
          en: "Which boiler is best to choose?",
        },
        answer: {
          ru: "Выбор зависит от площади дома, доступного топлива и бюджета. Мы поможем подобрать оптимальный вариант при бесплатной консультации.",
          en: "The choice depends on the house area, available fuel and budget. We will help select the optimal option during a free consultation.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Монтаж систем отопления в Москве — ГидроТепло",
        en: "Heating System Installation in Moscow — GidroTeplo",
      },
      description: {
        ru: "Профессиональный монтаж отопления под ключ. Проектирование, установка радиаторов и котлов, пусконаладка. Гарантия 5 лет.",
        en: "Professional turnkey heating installation. Design, radiator and boiler installation, commissioning. 5-year warranty.",
      },
      keywords: {
        ru: ["отопление", "монтаж отопления", "система отопления", "радиаторы", "котёл"],
        en: ["heating", "heating installation", "heating system", "radiators", "boiler"],
      },
    },
    relatedSlugs: ["boiler-installation", "floor-heating"],
  },
  {
    slug: "boiler-installation",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    title: { ru: "Котельные", en: "Boiler Rooms" },
    description: {
      ru: "Проектирование и монтаж котельных любой мощности",
      en: "Design and installation of boiler rooms of any capacity",
    },
    longDescription: {
      ru: "Полный цикл работ по созданию котельных: от проектирования до ввода в эксплуатацию. Работаем с газовым, электрическим и твердотопливным оборудованием. Обеспечиваем соответствие всем нормативным требованиям.",
      en: "Full cycle of boiler room creation: from design to commissioning. We work with gas, electric and solid fuel equipment. We ensure compliance with all regulatory requirements.",
    },
    features: {
      ru: [
        "Проектирование котельной",
        "Подбор котлового оборудования",
        "Монтаж обвязки",
        "Дымоходы и вентиляция",
        "Автоматика управления",
        "Пусконаладочные работы",
      ],
      en: [
        "Boiler room design",
        "Boiler equipment selection",
        "Piping installation",
        "Chimneys and ventilation",
        "Control automation",
        "Commissioning works",
      ],
    },
    process: [
      {
        title: { ru: "Техническое задание", en: "Technical Specification" },
        description: { ru: "Определение требований и параметров", en: "Defining requirements and parameters" },
      },
      {
        title: { ru: "Проект", en: "Project" },
        description: { ru: "Разработка проектной документации", en: "Development of project documentation" },
      },
      {
        title: { ru: "Монтаж", en: "Installation" },
        description: { ru: "Установка оборудования и обвязка", en: "Equipment installation and piping" },
      },
      {
        title: { ru: "Запуск", en: "Launch" },
        description: { ru: "Пусконаладка и сдача объекта", en: "Commissioning and handover" },
      },
    ],
    faq: [
      {
        question: { ru: "Нужно ли разрешение на котельную?", en: "Is a permit needed for a boiler room?" },
        answer: {
          ru: "Для газовых котельных требуется проект и согласование с газовой службой. Мы берём на себя все согласования.",
          en: "Gas boiler rooms require a project and approval from the gas service. We handle all approvals.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Монтаж котельных под ключ в Москве — ГидроТепло",
        en: "Turnkey Boiler Room Installation in Moscow — GidroTeplo",
      },
      description: {
        ru: "Проектирование и монтаж котельных. Газовые, электрические, твердотопливные котельные. Все согласования и гарантия.",
        en: "Design and installation of boiler rooms. Gas, electric, solid fuel boiler rooms. All approvals and warranty.",
      },
      keywords: {
        ru: ["котельная", "монтаж котельной", "газовая котельная", "проект котельной"],
        en: ["boiler room", "boiler installation", "gas boiler room", "boiler project"],
      },
    },
    relatedSlugs: ["heating", "water-supply"],
  },
  {
    slug: "floor-heating",
    icon: "Thermometer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    title: { ru: "Тёплые полы", en: "Underfloor Heating" },
    description: {
      ru: "Водяные и электрические тёплые полы для максимального комфорта",
      en: "Water and electric underfloor heating for maximum comfort",
    },
    longDescription: {
      ru: "Устанавливаем водяные и электрические системы тёплого пола. Равномерное распределение тепла, энергоэффективность и комфорт в каждом помещении. Работаем с любыми типами напольных покрытий.",
      en: "We install water and electric underfloor heating systems. Even heat distribution, energy efficiency and comfort in every room. We work with all types of flooring.",
    },
    features: {
      ru: [
        "Водяные тёплые полы",
        "Электрические тёплые полы",
        "Расчёт мощности",
        "Укладка контуров",
        "Подключение к котлу",
        "Настройка терморегуляторов",
      ],
      en: [
        "Water underfloor heating",
        "Electric underfloor heating",
        "Power calculation",
        "Circuit laying",
        "Boiler connection",
        "Thermostat configuration",
      ],
    },
    process: [
      {
        title: { ru: "Расчёт", en: "Calculation" },
        description: { ru: "Расчёт теплопотерь и мощности системы", en: "Heat loss and system power calculation" },
      },
      {
        title: { ru: "Подготовка", en: "Preparation" },
        description: { ru: "Подготовка основания и укладка изоляции", en: "Base preparation and insulation laying" },
      },
      {
        title: { ru: "Укладка", en: "Laying" },
        description: { ru: "Монтаж труб или кабеля", en: "Pipe or cable installation" },
      },
      {
        title: { ru: "Заливка и запуск", en: "Pouring & Launch" },
        description: { ru: "Заливка стяжки и пусконаладка", en: "Screed pouring and commissioning" },
      },
    ],
    faq: [
      {
        question: { ru: "Что лучше — водяной или электрический тёплый пол?", en: "Which is better — water or electric underfloor heating?" },
        answer: {
          ru: "Водяной подходит для больших площадей и экономичнее в эксплуатации. Электрический проще в монтаже и подходит для отдельных помещений.",
          en: "Water is suitable for large areas and more economical to operate. Electric is easier to install and suitable for individual rooms.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Монтаж тёплых полов в Москве — ГидроТепло",
        en: "Underfloor Heating Installation in Moscow — GidroTeplo",
      },
      description: {
        ru: "Установка водяных и электрических тёплых полов. Расчёт, монтаж, настройка. Гарантия качества.",
        en: "Water and electric underfloor heating installation. Calculation, installation, configuration. Quality guarantee.",
      },
      keywords: {
        ru: ["тёплый пол", "водяной тёплый пол", "электрический тёплый пол", "монтаж тёплого пола"],
        en: ["underfloor heating", "water underfloor heating", "electric underfloor heating", "floor heating installation"],
      },
    },
    relatedSlugs: ["heating", "water-supply"],
  },
  {
    slug: "water-supply",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    title: { ru: "Водоснабжение", en: "Water Supply" },
    description: {
      ru: "Монтаж систем холодного и горячего водоснабжения",
      en: "Installation of cold and hot water supply systems",
    },
    longDescription: {
      ru: "Комплексный монтаж систем водоснабжения: от скважины или центрального водопровода до каждой точки потребления. Используем современные материалы и технологии для долговечности и надёжности системы.",
      en: "Comprehensive water supply system installation: from wells or central water supply to every consumption point. We use modern materials and technologies for system durability and reliability.",
    },
    features: {
      ru: [
        "Разводка труб",
        "Установка фильтрации",
        "Монтаж бойлера",
        "Подключение сантехники",
        "Установка насосов",
        "Опрессовка системы",
      ],
      en: [
        "Pipe routing",
        "Filtration installation",
        "Boiler installation",
        "Plumbing connection",
        "Pump installation",
        "System pressure testing",
      ],
    },
    process: [
      {
        title: { ru: "Анализ", en: "Analysis" },
        description: { ru: "Анализ источника воды и потребностей", en: "Water source and needs analysis" },
      },
      {
        title: { ru: "Проект", en: "Project" },
        description: { ru: "Проектирование схемы водоснабжения", en: "Water supply scheme design" },
      },
      {
        title: { ru: "Монтаж", en: "Installation" },
        description: { ru: "Прокладка труб и установка оборудования", en: "Pipe laying and equipment installation" },
      },
      {
        title: { ru: "Проверка", en: "Testing" },
        description: { ru: "Опрессовка и проверка герметичности", en: "Pressure testing and leak checking" },
      },
    ],
    faq: [
      {
        question: { ru: "Какие трубы лучше использовать?", en: "Which pipes are best to use?" },
        answer: {
          ru: "Мы рекомендуем полипропиленовые или металлопластиковые трубы. Выбор зависит от бюджета и условий эксплуатации.",
          en: "We recommend polypropylene or metal-plastic pipes. The choice depends on the budget and operating conditions.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Монтаж водоснабжения в Москве — ГидроТепло",
        en: "Water Supply Installation in Moscow — GidroTeplo",
      },
      description: {
        ru: "Профессиональный монтаж систем водоснабжения. Горячее и холодное водоснабжение, фильтрация, бойлеры.",
        en: "Professional water supply system installation. Hot and cold water supply, filtration, boilers.",
      },
      keywords: {
        ru: ["водоснабжение", "монтаж водоснабжения", "трубы", "сантехника"],
        en: ["water supply", "plumbing", "pipes", "water installation"],
      },
    },
    relatedSlugs: ["heating", "boiler-installation"],
  },
  {
    slug: "sewage",
    icon: "PipetteIcon",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    title: { ru: "Канализация", en: "Sewage Systems" },
    description: {
      ru: "Монтаж внутренней и наружной канализации",
      en: "Internal and external sewage system installation",
    },
    longDescription: {
      ru: "Проектирование и монтаж канализационных систем для частных домов и коммерческих объектов. Внутренняя разводка, наружная канализация, септики и локальные очистные сооружения.",
      en: "Design and installation of sewage systems for residential and commercial properties. Internal routing, external sewage, septic tanks and local treatment facilities.",
    },
    features: {
      ru: [
        "Внутренняя канализация",
        "Наружная канализация",
        "Установка септика",
        "Дренажные системы",
        "Ливневая канализация",
      ],
      en: [
        "Internal sewage",
        "External sewage",
        "Septic tank installation",
        "Drainage systems",
        "Storm drainage",
      ],
    },
    process: [
      {
        title: { ru: "Обследование", en: "Survey" },
        description: { ru: "Обследование участка и грунтов", en: "Site and soil survey" },
      },
      {
        title: { ru: "Проект", en: "Project" },
        description: { ru: "Разработка схемы канализации", en: "Sewage scheme development" },
      },
      {
        title: { ru: "Монтаж", en: "Installation" },
        description: { ru: "Прокладка труб и установка оборудования", en: "Pipe laying and equipment installation" },
      },
      {
        title: { ru: "Сдача", en: "Handover" },
        description: { ru: "Проверка и сдача системы", en: "Testing and system handover" },
      },
    ],
    faq: [
      {
        question: { ru: "Какой септик выбрать?", en: "Which septic tank to choose?" },
        answer: {
          ru: "Выбор зависит от количества проживающих, типа грунта и уровня грунтовых вод. Мы поможем подобрать оптимальный вариант.",
          en: "The choice depends on the number of residents, soil type and groundwater level. We will help select the optimal option.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Монтаж канализации в Москве — ГидроТепло",
        en: "Sewage System Installation in Moscow — GidroTeplo",
      },
      description: {
        ru: "Монтаж канализации под ключ. Внутренняя и наружная канализация, септики, дренаж.",
        en: "Turnkey sewage installation. Internal and external sewage, septic tanks, drainage.",
      },
      keywords: {
        ru: ["канализация", "монтаж канализации", "септик", "дренаж"],
        en: ["sewage", "sewage installation", "septic tank", "drainage"],
      },
    },
    relatedSlugs: ["water-supply"],
  },
  {
    slug: "maintenance",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    title: { ru: "Сервис и обслуживание", en: "Service & Maintenance" },
    description: {
      ru: "Техническое обслуживание и ремонт инженерных систем",
      en: "Maintenance and repair of engineering systems",
    },
    longDescription: {
      ru: "Регулярное обслуживание инженерных систем продлевает срок службы оборудования и предотвращает аварийные ситуации. Предлагаем разовые работы и абонентское обслуживание.",
      en: "Regular maintenance of engineering systems extends equipment life and prevents emergencies. We offer one-time work and subscription maintenance.",
    },
    features: {
      ru: [
        "Плановое обслуживание котлов",
        "Промывка систем отопления",
        "Ремонт оборудования",
        "Замена расходных материалов",
        "Аварийный выезд 24/7",
      ],
      en: [
        "Scheduled boiler maintenance",
        "Heating system flushing",
        "Equipment repair",
        "Consumables replacement",
        "24/7 emergency callout",
      ],
    },
    process: [
      {
        title: { ru: "Заявка", en: "Request" },
        description: { ru: "Приём заявки по телефону или онлайн", en: "Request via phone or online" },
      },
      {
        title: { ru: "Диагностика", en: "Diagnostics" },
        description: { ru: "Выезд и диагностика системы", en: "Site visit and system diagnostics" },
      },
      {
        title: { ru: "Работы", en: "Work" },
        description: { ru: "Выполнение ремонтных или профилактических работ", en: "Repair or preventive work" },
      },
      {
        title: { ru: "Отчёт", en: "Report" },
        description: { ru: "Отчёт о проделанной работе и рекомендации", en: "Work report and recommendations" },
      },
    ],
    faq: [
      {
        question: { ru: "Как часто нужно обслуживать котёл?", en: "How often should a boiler be serviced?" },
        answer: {
          ru: "Рекомендуется проводить техническое обслуживание котла минимум раз в год, перед началом отопительного сезона.",
          en: "It is recommended to service the boiler at least once a year, before the heating season begins.",
        },
      },
    ],
    meta: {
      title: {
        ru: "Сервисное обслуживание инженерных систем — ГидроТепло",
        en: "Engineering Systems Maintenance — GidroTeplo",
      },
      description: {
        ru: "Техническое обслуживание систем отопления и водоснабжения. Ремонт, профилактика, аварийный выезд.",
        en: "Maintenance of heating and water supply systems. Repair, prevention, emergency callout.",
      },
      keywords: {
        ru: ["обслуживание", "ремонт котла", "сервис отопления", "техобслуживание"],
        en: ["maintenance", "boiler repair", "heating service", "technical maintenance"],
      },
    },
    relatedSlugs: ["heating", "boiler-installation"],
  },
];

export const services: Service[] = rawServices.map((s) =>
  serviceSchema.parse(s),
);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
