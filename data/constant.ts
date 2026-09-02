import { Box, Clock, Compass, Grid, Layers, Ruler, ShieldCheck, Sliders, Wrench } from "lucide-react";

export const CATEGORIES = [
    {
        id: "mirror-frames",
        name: "Mirror Frames",
        nameUr: "آئینے کے فریم",
        icon: Grid,
        count: 18,
        desc: "Intricately relief-carved accent and full-length wooden frames.",
    },
    {
        id: "wall-clocks",
        name: "Wall Clocks",
        nameUr: "دیوار کی گھڑیاں",
        icon: Clock,
        count: 12,
        desc: "Architectural clockworks combining natural timber grain & brass.",
    },
    {
        id: "wooden-doors",
        name: "Wooden Doors",
        nameUr: "لکڑی کے دروازے",
        icon: Box,
        count: 24,
        desc: "Heavy solid entry & interior doors with deep CNC geometric carving.",
    },
    {
        id: "wooden-windows",
        name: "Wooden Windows",
        nameUr: "لکڑی کی کھڑکیاں",
        icon: Layers,
        count: 15,
        desc: "Custom louvers, screens, and classic carved frame surrounds.",
    },
    {
        id: "ceiling-designs",
        name: "Ceiling Panels",
        nameUr: "چھت کے پینل",
        icon: Compass,
        count: 20,
        desc: "Coffered panels, geometric grilles, and backlighted ceiling layouts.",
    },
    {
        id: "decorative-panels",
        name: "Decorative Wall Panels",
        nameUr: "آرائشی دیواری پینل",
        icon: Sliders,
        count: 32,
        desc: "Acoustic & 3D carved partition walls, mashrabiya and fretwork.",
    },
];

export const PRODUCTS = [
    {
        id: "p1",
        name: "Nordic Radial Oak Mirror Frame",
        nameUr: "نورڈک ریڈیل اوک آئینے کا فریم",
        category: "mirror-frames",
        price: "$640",
        wood: "White Oak / Walnut Accent",
        woodUr: "وائٹ اوک / اخروٹ کی جھلک",
        dimensions: "900 x 900 x 35 mm",
        finish: "Natural Matte Oil",
        finishUr: "قدرتی میٹ آئل فنش",
        tag: "Popular",
        tagUr: "مقبول",
        desc: "Precision 3D CNC carved concentric geometric ridges highlighting natural quarter-sawn white oak grain patterns.",
        descUr:
            "قدرتی وائٹ اوک کی لکڑی کے خوبصورت دانوں کو نمایاں کرنے کے لیے مرتکز جیومیٹرک ڈیزائن کے ساتھ تیار کردہ درست تھری ڈی CNC نقش و نگار۔",
        features: [
            "Precision 0.2mm carving radius",
            "Moisture-resistant oil coating",
            "Integrated heavy-duty French cleat mount",
        ],
        featuresUr: [
            "0.2 ملی میٹر کی درست نقش کاری",
            "نمی سے محفوظ آئل کوٹنگ",
            "مضبوط انٹیگریٹڈ فرنچ کلیٹ ماؤنٹ",
        ],
        bgSvg: "radial",
        startingAt: "$640",
    },

    {
        id: "p2",
        name: "Chronos 3D Carved Wall Clock",
        nameUr: "کرونوس تھری ڈی نقش دار وال کلاک",
        category: "wall-clocks",
        price: "$380",
        wood: "American Walnut",
        woodUr: "امریکن اخروٹ",
        dimensions: "600 x 600 x 40 mm",
        finish: "Satin Polyurethane",
        finishUr: "سیٹن پولی یوریتھین فنش",
        tag: "Ready to Ship",
        tagUr: "فوری ترسیل کے لیے تیار",
        desc: "Seamless single-slab walnut block carved with parametric wave contours and recessed brushed brass hour indicators.",
        descUr:
            "ایک ہی اخروٹ کی لکڑی کے تختے سے تیار کردہ وال کلاک، جس پر پیرامیٹرک لہروں کے ڈیزائن اور اندر نصب برشڈ براس کے گھنٹے کے نشانات موجود ہیں۔",
        features: [
            "Silent German quartz movement",
            "Hand-rubbed wax finish",
            "Solid brass inlaid markers",
        ],
        featuresUr: [
            "خاموش جرمن کوارٹز موومنٹ",
            "ہاتھ سے تیار کردہ ویکس فنش",
            "خالص پیتل کے جڑے ہوئے نشانات",
        ],
        bgSvg: "waves",
        startingAt: "$380",
    },

    {
        id: "p3",
        name: "Grand Islamic Lattice Door (Double)",
        nameUr: "گرینڈ اسلامی جالی دار ڈبل دروازہ",
        category: "wooden-doors",
        price: "$2,850",
        wood: "Teak / Mahogany Core",
        woodUr: "ساگوان / مہوگنی کور",
        dimensions: "1800 x 2400 x 55 mm",
        finish: "Weather-Shield Exterior Varnish",
        finishUr: "موسم سے محفوظ بیرونی وارنش",
        tag: "Bespoke",
        tagUr: "خصوصی ڈیزائن",
        desc: "Deep multi-layered CNC carved Arabesque lattice pattern overlay on structural teak core suitable for main entrances.",
        descUr:
            "مضبوط ساگوان کے بنیادی ڈھانچے پر گہرے ملٹی لیئر CNC نقش و نگار کے ساتھ عربی طرز کا جالی دار ڈیزائن، جو مرکزی داخلی دروازوں کے لیے موزوں ہے۔",
        features: [
            "Dual-layer thermal isolation",
            "Multi-point lock compatibility",
            "Deep 25mm relief depth",
        ],
        featuresUr: [
            "دوہری تہہ پر مشتمل حرارتی موصلیت",
            "ملٹی پوائنٹ لاک کے ساتھ مطابقت",
            "25 ملی میٹر گہری ریلیف نقش کاری",
        ],
        bgSvg: "lattice",
        startingAt: "$2,850",
    },

    {
        id: "p4",
        name: "Parametric Acoustic Wall Panel",
        nameUr: "پیرامیٹرک ایکوسٹک وال پینل",
        category: "decorative-panels",
        price: "$420 / m²",
        wood: "Steamed Beech",
        woodUr: "اسٹیمڈ بیچ ووڈ",
        dimensions: "1200 x 600 x 30 mm",
        finish: "Fire-retardant Matte Clear",
        finishUr: "فائر ریٹارڈنٹ میٹ کلیئر فنش",
        tag: "Architectural",
        tagUr: "آرکیٹیکچرل",
        desc: "Fluid-wave sound diffusing panel engineered via parametric 5-axis CNC routing for auditoriums and luxury living rooms.",
        descUr:
            "پیرامیٹرک فائیو ایکسس CNC روٹنگ کے ذریعے تیار کردہ روان لہروں پر مشتمل ساؤنڈ ڈفیوزنگ پینل، جو آڈیٹوریمز اور لگژری رہائشی کمروں کے لیے موزوں ہے۔",
        features: [
            "Sound absorption backing optional",
            "Seamless tileable edges",
            "Custom stain matching",
        ],
        featuresUr: [
            "ساؤنڈ ابزروپشن بیکنگ اختیاری",
            "بغیر جوڑ کے ملنے والے کنارے",
            "حسب ضرورت اسٹین کلر میچنگ",
        ],
        bgSvg: "parametric",
        startingAt: "$420 / m²",
    },

    {
        id: "p5",
        name: "Octagonal Heritage Ceiling Rose",
        nameUr: "آکٹاگونل ہیریٹیج سیلنگ روز",
        category: "ceiling-designs",
        price: "$1,150",
        wood: "Ash Wood",
        woodUr: "ایش ووڈ",
        dimensions: "1400 x 1400 x 60 mm",
        finish: "Warm Amber Hard-Wax",
        finishUr: "وارم ایمبر ہارڈ ویکس فنش",
        tag: "Custom Sizes",
        tagUr: "حسب ضرورت سائز",
        desc: "Modular ceiling centerpiece designed for cove LED illumination and central chandelier accentuation.",
        descUr:
            "ماڈیولر چھت کا مرکزی ڈیزائن، جو Cove LED لائٹنگ اور مرکزی فانوس کو نمایاں کرنے کے لیے تیار کیا گیا ہے۔",
        features: [
            "Hidden mounting bracket system",
            "Integrated light channel",
            "Precision interlocking segments",
        ],
        featuresUr: [
            "چھپا ہوا ماؤنٹنگ بریکٹ سسٹم",
            "انٹیگریٹڈ لائٹ چینل",
            "درستگی سے جڑنے والے حصے",
        ],
        bgSvg: "rose",
        startingAt: "$1,150",
    },

    {
        id: "p6",
        name: "Mashrabiya Arch Window Screen",
        nameUr: "مشربیہ محرابی کھڑکی اسکرین",
        category: "wooden-windows",
        price: "$890",
        wood: "Cedar Wood",
        woodUr: "سیڈر ووڈ",
        dimensions: "800 x 1500 x 40 mm",
        finish: "UV Protection Oil",
        finishUr: "UV پروٹیکشن آئل فنش",
        tag: "Traditional",
        tagUr: "روایتی",
        desc: "Intricate CNC double-sided pierced fretwork screen providing natural daylight filtration and privacy.",
        descUr:
            "نفیس CNC ڈبل سائیڈڈ جالی دار اسکرین جو قدرتی روشنی کو متوازن کرنے کے ساتھ رازداری بھی فراہم کرتی ہے۔",
        features: [
            "Rot-resistant cedar wood",
            "Custom arch curvature matching",
            "Removable glass panel track",
        ],
        featuresUr: [
            "سڑنے سے محفوظ سیڈر لکڑی",
            "حسب ضرورت محرابی خم کی مطابقت",
            "قابلِ تنصیب و علیحدگی شیشے کے پینل کا ٹریک",
        ],
        bgSvg: "fretwork",
        startingAt: "$890",
    },
];
export const PROCESS_STEPS = [
    {
        step: "01",
        title: "Design & Consultation",
        titleUr: "ڈیزائن اور مشاورت",
        desc: "We review your architectural drawings, dimensions, material requirements, and desired design details.",
        descUr:
            "ہم آپ کے آرکیٹیکچرل ڈرائنگز، پیمائش، لکڑی کی ضروریات اور مطلوبہ ڈیزائن کی تفصیلات کا جائزہ لیتے ہیں۔",
    },
    {
        step: "02",
        title: "Digital Modeling",
        titleUr: "ڈیجیٹل ماڈلنگ",
        desc: "Your concept is converted into a precise digital CNC model with controlled carving depth and toolpaths.",
        descUr:
            "آپ کے تصور کو درست ڈیجیٹل CNC ماڈل میں تبدیل کیا جاتا ہے، جس میں نقش کاری کی گہرائی اور مشین ٹول پاتھ کو کنٹرول کیا جاتا ہے۔",
    },
    {
        step: "03",
        title: "CNC Manufacturing",
        titleUr: "CNC مینوفیکچرنگ",
        desc: "Selected hardwood is securely mounted and precision-machined using advanced CNC routing technology.",
        descUr:
            "منتخب شدہ معیاری لکڑی کو محفوظ طریقے سے نصب کرکے جدید CNC روٹنگ ٹیکنالوجی کے ذریعے انتہائی درستگی سے تیار کیا جاتا ہے۔",
    },
    {
        step: "04",
        title: "Hand Finishing",
        titleUr: "ہاتھ سے فنشنگ",
        desc: "Every piece is carefully sanded, finished, and inspected by experienced woodworking craftsmen.",
        descUr:
            "ہر ٹکڑے کو ماہر لکڑی کے کاریگروں کی نگرانی میں احتیاط سے سینڈ، فنش اور مکمل طور پر جانچا جاتا ہے۔",
    },
    {
        step: "05",
        title: "Delivery & Installation",
        titleUr: "ترسیل اور تنصیب",
        desc: "Finished architectural pieces are securely packaged and prepared for delivery and professional installation.",
        descUr:
            "تیار شدہ آرکیٹیکچرل مصنوعات کو محفوظ طریقے سے پیک کرکے ترسیل اور پیشہ ورانہ تنصیب کے لیے تیار کیا جاتا ہے۔",
    },
];
export const FEATURED_WORKS = [
    {
        id: "parametric-teak-wall-installation",
        title: "Parametric Teak Wall Installation",
        titleUr: "پیرامیٹرک ساگوان وال انسٹالیشن",
        location: "Private Residence, Zurich",
        locationUr: "نجی رہائش گاہ، زیورخ",
        pattern: "waves",
    },
    {
        id: "geometric-lattice-double-entrance",
        title: "Geometric Lattice Double Entrance",
        titleUr: "جیومیٹرک جالی دار ڈبل داخلی دروازہ",
        location: "Boutique Hotel, Dubai",
        locationUr: "بوتیک ہوٹل، دبئی",
        pattern: "lattice",
    },
    {
        id: "backlit-hexagonal-ceiling-dome",
        title: "Backlit Hexagonal Ceiling Dome",
        titleUr: "بیک لِٹ ہیکساگونل سیلنگ ڈوم",
        location: "Architectural Firm HQ",
        locationUr: "آرکیٹیکچرل فرم کا مرکزی دفتر",
        pattern: "rose",
    },
];
export const VALUE_PROPOSITIONS = [
    {
        id: "cnc-precision",
        icon: Compass,
        title: "0.05mm CNC Precision",
        titleUr: "0.05 ملی میٹر CNC درستگی",
        desc: "State-of-the-art 5-axis routers guarantee micro-sharp relief corners and tight interlocking tolerances.",
        descUr:
            "جدید ترین 5 ایکسس CNC راؤٹرز انتہائی باریک نقش و نگار اور آپس میں جڑنے والے حصوں میں اعلیٰ درستگی کو یقینی بناتے ہیں۔",
    },
    {
        id: "seasoned-hardwoods",
        icon: ShieldCheck,
        title: "Seasoned Hardwoods",
        titleUr: "معیاری خشک لکڑی",
        desc: "100% kiln-dried premium timbers treated against warping, humidity variations, and UV decay.",
        descUr:
            "سو فیصد بھٹے میں خشک کی گئی معیاری لکڑی، جسے مڑنے، نمی میں تبدیلی اور UV اثرات سے تحفظ کے لیے تیار کیا جاتا ہے۔",
    },
    {
        id: "bespoke-scaling",
        icon: Ruler,
        title: "Bespoke Scaling",
        titleUr: "حسب ضرورت پیمائش",
        desc: "No fixed dimensions. Every ready-made item can be parametric re-scaled to fit your specific wall cavity.",
        descUr:
            "کوئی مقررہ سائز نہیں۔ ہر تیار شدہ مصنوعات کو آپ کی مخصوص دیوار کی جگہ کے مطابق حسب ضرورت دوبارہ سائز کیا جا سکتا ہے۔",
    },
    {
        id: "master-finishing",
        icon: Wrench,
        title: "Master Finishing",
        titleUr: "ماہر فنشنگ",
        desc: "Multi-stage hand sanding followed by organic natural oils, hard-wax lacquers, or exterior coats.",
        descUr:
            "کئی مراحل میں ہاتھ سے سینڈنگ کے بعد قدرتی آرگینک آئلز، ہارڈ ویکس لکیئر یا بیرونی حفاظتی کوٹنگز استعمال کی جاتی ہیں۔",
    },
];
export const TESTIMONIALS = [
    {
        id: "elena-rostova",
        quote:
            "TimberCraft executed our parametric wall panelling flawlessly. The 3D depth and timber grain matching exceeded our architectural client's expectations.",
        quoteUr:
            "ٹمبر کرافٹ نے ہمارے پیرامیٹرک وال پینلنگ کے منصوبے کو بہترین انداز میں مکمل کیا۔ تھری ڈی گہرائی اور لکڑی کے دانوں کی مطابقت نے ہمارے آرکیٹیکچرل کلائنٹ کی توقعات سے بھی بڑھ کر نتائج فراہم کیے۔",
        author: "Elena Rostova",
        role: "Principal Interior Architect, Milan",
        roleUr: "پرنسپل انٹیریئر آرکیٹیکٹ، میلان",
    },
    {
        id: "marcus-vance",
        quote:
            "The CNC precision on the custom double teak doors was unbelievable. Joints locked together with zero seam gaps. Absolute master craft.",
        quoteUr:
            "حسب ضرورت تیار کیے گئے ڈبل ساگوان کے دروازوں میں CNC کی درستگی حیران کن تھی۔ جوڑ بالکل بغیر کسی خلا کے مضبوطی سے جڑ گئے۔ واقعی اعلیٰ درجے کی کاریگری۔",
        author: "Marcus Vance",
        role: "Luxury Home Builder, California",
        roleUr: "لگژری ہوم بلڈر، کیلیفورنیا",
    },
    {
        id: "sarah-al-hassan",
        quote:
            "Ordering a custom geometric mirror frame to fit an awkward bathroom recess was seamless. Quick CAD toolpath validation and fast delivery.",
        quoteUr:
            "باتھ روم کی ایک مشکل جگہ کے مطابق حسب ضرورت جیومیٹرک آئینے کا فریم بنوانا انتہائی آسان رہا۔ CAD ٹول پاتھ کی فوری تصدیق اور تیز ترسیل نے پورے عمل کو بہترین بنا دیا۔",
        author: "Sarah Al-Hassan",
        role: "Private Homeowner, Dubai",
        roleUr: "نجی گھر کی مالکن، دبئی",
    },
];
export const FAQS = [
    {
        id: "custom-dimensions",
        q: "Can I request custom dimensions for a ready-made product?",
        qUr: "کیا میں تیار شدہ مصنوعات کے لیے حسب ضرورت پیمائش کی درخواست کر سکتا ہوں؟",
        a: "Yes. Most of our ready-made products can be re-scaled to fit your specific architectural dimensions. Share your required measurements and we will confirm the feasibility.",
        aUr: "جی ہاں۔ ہماری زیادہ تر تیار شدہ مصنوعات کو آپ کی مخصوص آرکیٹیکچرل پیمائش کے مطابق دوبارہ سائز کیا جا سکتا ہے۔ اپنی مطلوبہ پیمائش فراہم کریں اور ہم اس کی تصدیق کریں گے۔",
    },
    {
        id: "wood-selection",
        q: "What types of wood do you work with?",
        qUr: "آپ کس قسم کی لکڑی کے ساتھ کام کرتے ہیں؟",
        a: "We work with premium hardwoods including American White Oak, Black Walnut, Burmese Teak, European Ash, and other suitable materials depending on the project.",
        aUr: "ہم امریکن وائٹ اوک، بلیک وال نٹ، برمی ساگوان، یورپی ایش اور دیگر موزوں معیاری لکڑیوں کے ساتھ کام کرتے ہیں، جس کا انتخاب منصوبے کی ضرورت کے مطابق کیا جاتا ہے۔",
    },
    {
        id: "custom-design",
        q: "Can you manufacture a completely custom design?",
        qUr: "کیا آپ مکمل طور پر حسب ضرورت ڈیزائن تیار کر سکتے ہیں؟",
        a: "Yes. We can manufacture custom wall panels, doors, ceiling designs, decorative elements, and other architectural woodwork based on your drawings, CAD files, or design requirements.",
        aUr: "جی ہاں۔ ہم آپ کی ڈرائنگز، CAD فائلز یا ڈیزائن کی ضروریات کے مطابق حسب ضرورت وال پینلز، دروازے، چھت کے ڈیزائن، آرائشی عناصر اور دیگر آرکیٹیکچرل لکڑی کا کام تیار کر سکتے ہیں۔",
    },
    {
        id: "file-formats",
        q: "Which design file formats do you accept?",
        qUr: "آپ کون سے ڈیزائن فائل فارمیٹس قبول کرتے ہیں؟",
        a: "We support common design and manufacturing formats including DXF, DWG, STEP, AI, SVG, and OBJ.",
        aUr: "ہم DXF، DWG، STEP، AI، SVG اور OBJ سمیت عام ڈیزائن اور مینوفیکچرنگ فائل فارمیٹس قبول کرتے ہیں۔",
    },
    {
        id: "production-time",
        q: "How long does a custom project take?",
        qUr: "حسب ضرورت منصوبہ مکمل ہونے میں کتنا وقت لگتا ہے؟",
        a: "Production time depends on the material, dimensions, carving complexity, quantity, and finishing requirements. We provide an estimated timeline after reviewing your project specifications.",
        aUr: "پیداواری وقت لکڑی کی قسم، پیمائش، نقش کاری کی پیچیدگی، مقدار اور فنشنگ کی ضروریات پر منحصر ہوتا ہے۔ آپ کی منصوبے کی تفصیلات کا جائزہ لینے کے بعد ہم متوقع مدت فراہم کرتے ہیں۔",
    },
    {
        id: "installation",
        q: "Do you provide delivery and installation support?",
        qUr: "کیا آپ ترسیل اور تنصیب کی سہولت فراہم کرتے ہیں؟",
        a: "Yes. Finished architectural pieces can be prepared for secure delivery, with installation support available depending on the project and location.",
        aUr: "جی ہاں۔ تیار شدہ آرکیٹیکچرل مصنوعات کو محفوظ ترسیل کے لیے تیار کیا جا سکتا ہے، جبکہ منصوبے اور مقام کے مطابق تنصیب کی معاونت بھی دستیاب ہے۔",
    },
];
export const CUSTOM_WORKFLOW = [
    {
        id: "consultation",
        num: "01",
        title: "Vector / CAD Consultation",
        titleUr: "ویکٹر / CAD مشاورت",
        desc: "We ingest your .dxf, .dwg, .ai vector files or simple dimensioned sketches to construct precise 3D CNC solid models.",
        descUr:
            "ہم آپ کی .dxf، .dwg، .ai ویکٹر فائلز یا سادہ پیمائش شدہ خاکوں کو استعمال کرکے درست 3D CNC سالڈ ماڈلز تیار کرتے ہیں۔",
    },
    {
        id: "milling",
        num: "02",
        title: "Hardwood Selection & Milling",
        titleUr: "معیاری لکڑی کا انتخاب اور ملنگ",
        desc: "Select from Black Walnut, Oak, Teak, or Ash. We perform multi-pass roughing and fine relief carving with 0.05mm accuracy.",
        descUr:
            "بلیک وال نٹ، اوک، ساگوان یا ایش میں سے انتخاب کریں۔ ہم 0.05 ملی میٹر درستگی کے ساتھ ملٹی پاس رفنگ اور باریک ریلیف نقش کاری کرتے ہیں۔",
    },
    {
        id: "finishing",
        num: "03",
        title: "Hand Polish & Varnish",
        titleUr: "ہاتھ سے پالش اور وارنش",
        desc: "Carvings are meticulously hand-sanded to smooth micro-fuzz before applying protective natural oils or exterior polyurethane.",
        descUr:
            "حفاظتی قدرتی آئل یا بیرونی پولی یوریتھین لگانے سے پہلے نقش کاری کو باریک ہاتھ سے سینڈ کرکے مکمل ہموار فنش دیا جاتا ہے۔",
    },
];