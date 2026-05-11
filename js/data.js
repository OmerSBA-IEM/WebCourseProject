const restaurantsData = [
 //Restaurant 1: Japanika
  {
    id: 1,
    name: "ג׳פניקה",
    cities: ["beer-sheva", "haifa", "ashdod"],
    logo: "images/restaurant_logos/JAPANIKA.jfif",
    address: {
      "beer-sheva": "גרנד קניון באר שבע, שדרות דוד טוביהו, באר שבע",
      "haifa": "מרכז הכרמל, הנשיא 122, חיפה",
      "ashdod": "ז'בוטינסקי 43, אשדוד"
    },
    cuisine: "Asian / Sushi",
    description: "מסעדה אסייתית הכוללת סושי, מוקפצים, מרקים, סלטים ומנות טבעוניות.",
    menu: [
      {
        dishId: 101,
        name: "אדממה",
        category: "מנות פתיחה",
        description: "פולי סויה ירוקה עם מלח ים ופלח לימון.",
        price: 21,
        image: "images/Japanika/japanika-edamame.jpg",
        dietary: ["vegan", "vegetarian", "gluten-free", "lactose-free", "kosher"], // הוסף כשר
        allergens: ["soy"],
        ingredients: ["soy-beans", "salt", "lemon"],
        customization: {
          removable: ["salt"],
          replaceable: [],
          notes: [] 
        }
      },
      {
        dishId: 102,
        name: "חמוצים יפניים",
        category: "מנות פתיחה",
        description: "כרוב, גזר, מלפפון, פלפלים וצנון בקישוט שומשום קלוי.",
        price: 24,
        image: "images/Japanika/japanika-pickles.jpg",
        dietary: ["vegan", "vegetarian", "gluten-free", "lactose-free", "kosher"], 
        allergens: ["sesame"],
        ingredients: ["cabbage", "carrot", "cucumber", "pepper", "radish", "sesame"],
        customization: {
          removable: ["sesame"],
          replaceable: [],
          notes: [
            ["אפשר לבקש ללא שומשום.", "sesame"]
          ]
        }
      },
      {
        dishId: 103,
        name: "וונטון ירקות",
        category: "מנות פתיחה",
        description: "כיסוני ירקות מטוגנים במילוי כרוב, בצל, פטריות ואטריות שעועית, עם רוטב פונזו.",
        price: 34,
        image: "images/Japanika/japanika-wonton.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten", "soy"],
        ingredients: ["cabbage", "onion", "mushrooms", "bean-noodles", "ponzu-sauce"],
        customization: {
          removable: ["ponzu-sauce"],
          replaceable: [],
          notes: [
            ["אפשר לבקש את הרוטב בצד (הרוטב מכיל גלוטן וסויה).", "gluten-free", "soy"],
            ["ניתן לבקש ללא בצל.", "onion"],
            ["ניתן לבקש ללא פטריות.", "mushrooms"]
          ]
        }
      },
      {
        dishId: 106,
        name: "קומבינציה טבעונית",
        category: "סושי",
        description: "קומבינציה הכוללת ריינבו ווג׳י רול, מאקי בטטה בטמפורה וניגירי אבוקדו.",
        price: 68,
        image: "images/Japanika/japanika-vegan-combo.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten", "sesame", "soy"],
        ingredients: ["rice", "nori", "avocado", "sweet-potato", "tempura", "vegetables", "sesame"],
        customization: {
          removable: ["sesame"],
          replaceable: ["soy-sauce"],
          notes: [
            ["אפשר לבקש ללא שומשום.", "sesame"]
          ]
        }
      },
      {
        dishId: 112,
        name: "מוקפץ ירקות",
        category: "מוקפצים",
        description: "מוקפץ ירקות עם אטריות או אורז ורוטב אסייתי.",
        price: 58,
        image: "images/Japanika/japanika-vegetable-wok.jpg",
        dietary: ["vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten", "soy", "sesame"],
        ingredients: ["noodles", "vegetables", "cabbage", "carrot", "onion", "soy-sauce", "sesame"],
        customization: {
          removable: ["onion", "sesame"],
          replaceable: ["noodles", "soy-sauce"],
          notes: [
            ["אפשר להחליף אטריות באורז להתאמה ללא גלוטן.", "gluten-free"],
            ["ניתן לבקש ללא בצל.", "onion"],
            ["ניתן לבקש ללא שומשום.", "sesame"]
          ]
        }
      },

      {
        dishId: 115,
        name: "פאד תאי פירות ים",
        category: "מוקפצים",
        description: "אטריות אורז מוקפצות עם שרימפס, קלמארי, ביצה, נבטים ובוטנים.",
        price: 64,
        image: "images/Japanika/japanika-seafood.png",
        dietary: ["lactose-free"], 
        allergens: ["gluten", "soy", "shellfish", "egg", "peanuts"],
        ingredients: ["rice-noodles", "shrimp", "calamari", "egg", "sprouts", "peanuts", "pad-thai-sauce"],
        customization: {
          removable: ["peanuts", "egg"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הבוטנים.", "peanuts"],
            ["ניתן להוריד את הביצה.", "egg"]
          ]
  
        }
      }
    ]
  },

//Restaurant 2: BBB
  {
    id: 2,
    name: "BBB - בורגוס בורגר בר",
    cities: ["beer-sheva", "haifa", "ashdod"],
    logo: "images/restaurant_logos/bbb.jfif",
    address: {
      "beer-sheva": "קניון מול שבע, באר שבע",
      "haifa": "כיכר אליזבט 1 - מול היכל הספורט , חיפה",
      "ashdod": "מקס נורדאו 13 , אשדוד"
    },
    cuisine: "Hamburgers / American",
    description: "רשת דיינרס המציעה בורגרים, מנות בשריות, סלטים ואופציות טבעוניות.",
    menu: [
      {
        dishId: 202,
        name: "כרובית פריכה",
        category: "מנות פתיחה",
        description: "פרחי כרובית בציפוי פריך. מוגש עם רוטב.",
        price: 39,
        image: "images/BBB/cauliflower.jfif",
        dietary: ["vegetarian", "kosher"], 
        allergens: ["gluten", "milk", "egg", "fish", "soy"],
        ingredients: ["cauliflower", "batter", "caesar-sauce", "chili-sauce"],
        customization: {
          removable: [],
          replaceable: ["caesar-sauce"],
          notes: [
            ["החלפת רוטב הקיסר ברוטב צ'ילי הופכת את המנה לטבעונית וללא לקטוז (וללא חלב).", "vegan", "lactose-free", "milk"]
          ]
        }
      },
      {
        dishId: 203,
        name: "סלט בריאות",
        category: "סלטים",
        description: "קינואה, עדשים, ארוגולה, ברוקולי, שעועית ירוקה, תרד, חמוציות, אגוזים ושקדים.",
        price: 49,
        image: "images/BBB/salad.jfif",
        dietary: ["vegan", "vegetarian", "gluten-free", "lactose-free", "kosher"], 
        allergens: ["tree-nuts"],
        ingredients: ["quinoa", "lentils", "arugula", "broccoli", "green-beans", "spinach", "cranberries", "olive-oil", "lemon", "almonds", "walnuts"],
        customization: {
          removable: ["almonds", "walnuts", "broccoli", "green-beans", "cranberries"],
          replaceable: [],
          notes: [
            ["ניתן להסיר את האגוזים והשקדים.", "tree-nuts"],
            ["ניתן להסיר את הברוקולי.", "broccoli"]
          ]
        }
      },

      {
        dishId: 204,
        name: "צ'יזבורגר קלאסי 300 גרם",
        category: "קלאסיים",
        description: "המבורגר מבשר בקר בלחמנייה עם גבינת צ'דר, חסה, עגבנייה, בצל סגול ומלפפון כבוש.",
        price: 82,
        image: "images/BBB/burger.jfif",
        dietary: [], 
        allergens: ["gluten", "sesame", "egg", "milk"],
        ingredients: ["beef", "bun", "cheddar-cheese", "lettuce", "tomato", "red-onion", "pickles"],
        customization: {
          removable: ["lettuce", "tomato", "red-onion", "pickles", "bun", "cheddar-cheese"],
          replaceable: ["gluten-free-bun"],
          notes: [
            ["ניתן להוריד את הגבינה להתאמה לשומרי כשרות (הפרדת בשר וחלב).", "kosher", "milk", "lactose-free"],
            ["ניתן להזמין לחמנייה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את העגבנייה.", "tomato"],
            ["ניתן להוריד את הבצל.", "onion"],
            ["ניתן להוריד את המלפפון החמוץ.", "cucumber"]
          ]
        }
      },
      {
        dishId: 206,
        name: "ביונד בורגר",
        category: "קלאסיים",
        description: "קציצה טבעונית על בסיס אפונה בלחמנייה עם ירקות.",
        price: 69,
        image: "images/BBB/vegan.jfif",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten", "sesame", "peas", "soy"],
        ingredients: ["beyond-meat", "vegan-bun", "lettuce", "tomato", "red-onion", "pickles"],
        customization: {
          removable: ["lettuce", "tomato", "red-onion", "pickles"],
          replaceable: ["gluten-free-bun"],
          notes: [
            ["ניתן להזמין לחמנייה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את העגבנייה.", "tomato"],
            ["ניתן להוריד את הבצל.", "onion"],
            ["ניתן להוריד את המלפפון החמוץ.", "cucumber"]
          ]
        }
      }
    ]
  },


//Restaurant 3: Vivino
  {
    id: 3,
    name: "ויוינו - Vivino",
    cities: ["beer-sheva", "haifa", "ashdod"],
    logo: "images/restaurant_logos/vivino.jfif",
    address: {
      "beer-sheva": "מתחם הסינמה סיטי, חיים יחיל 2, באר שבע",
      "haifa": "פארק מתם, אנדריי סחרוב 4, חיפה",
      "ashdod": "פארק אשדוד ים, מפקורה 1, אשדוד"
    },
    cuisine: "Italian",
    description: "מסעדה איטלקית המציעה פיצות מטאבון עצים, פסטות טריות, ומבחר טבעוני וללא גלוטן.",
    menu: [
      {
        dishId: 301,
        name: "פוקצ'ת הבית של אופה איטלקי",
        category: "מנות פתיחה",
        description: "פוקצ'ה אפויה בתנור עצים לצד שמן זית, סלסת עגבניות וקונפי שום.",
        price: 26,
        image: "images/Vivino/focaccia.jfif",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten"], 
        ingredients: ["tomato", "garlic", "olive-oil", "bread"],
        customization: {
          removable: ["tomato", "garlic"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את סלסת העגבניות.", "tomato"],
            ["ניתן להוריד את קונפי השום.", "garlic"]
          ]
        }
      },
      {
        dishId: 303,
        name: "סלט פנצנלה בוראטה",
        category: "סלטים",
        description: "עגבניות שרי, מלפפון, פלפלים קלויים, בצל סגול, חצי כדור בוראטה ולחם קלוי.",
        price: 74,
        image: "images/Vivino/burrata.jfif",
        dietary: ["vegetarian", "kosher"], 
        allergens: ["milk", "gluten"],
        ingredients: ["tomato", "cucumber", "bell-pepper", "onion", "bread"],
        customization: {
          removable: ["onion", "bell-pepper", "gluten"],
          replaceable: ["vegan-feta"],
          notes: [
            ["ניתן להסיר את הלחם כדי להפוך למנה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את הפלפלים הקלויים.", "bell-pepper"],
            ["ניתן להוריד את הבצל.", "onion"],
            ["ניתן להחליף לגבינה טבעונית ללא חלב וללא לקטוז.", "vegan", "lactose-free", "milk"]
          ]
        }
      },
      {
        dishId: 304,
        name: "פיצה מרגריטה",
        category: "פיצות",
        description: "רוטב עגבניות, מוצרלה ובזיליקום.",
        price: 78,
        image: "images/Vivino/pizza.jfif",
        dietary: ["vegetarian", "kosher"], 
        allergens: ["gluten", "milk"],
        ingredients: ["tomato", "cheese", "basil", "dough"],
        customization: {
          removable: ["milk"],
          replaceable: ["vegan-cheese", "gluten-free-dough"],
          notes: [
            ["ניתן להזמין עם גבינת קשיו טבעונית (ללא חלב/לקטוז).", "vegan", "lactose-free", "milk"],
            ["ניתן להזמין עם בצק ללא גלוטן.", "gluten-free"]
          ]
        }
      },
      {
        dishId: 306,
        name: "ספגטי אליו אוליו",
        category: "פסטה",
        description: "עגבניות שרי, זיתי קלמטה, פטרוזיליה, פלפל שאטה וגבינת פטה, בשמן זית ושום.",
        price: 82,
        image: "images/Vivino/vivino-aglio-olio.jpg",
        dietary: ["vegetarian", "kosher"], 
        allergens: ["gluten", "milk"],
        ingredients: ["tomato", "olives", "parsley", "hot-pepper", "garlic", "pasta"],
        customization: {
          removable: ["olives", "hot-pepper", "garlic", "milk"],
          replaceable: ["gluten-free-pasta", "vegan-feta"],
          notes: [
            ["ניתן להסיר את הפטה כדי להפוך למנה טבעונית ללא לקטוז וחלב.", "vegan", "lactose-free", "milk"],
            ["ניתן להחליף לפסטה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את הזיתים.", "olives"],
            ["ניתן להוריד את הפלפל החריף.", "hot-pepper"],
            ["ניתן להוריד את השום.", "garlic"]
          ]
        }
      }
    ]
  },


  // Restaurant 4: Cafe Cafe
  {
    id: 4,
    name: "קפה קפה - Cafe Cafe",
    cities: ["tel-aviv", "beer-sheva", "haifa", "ashdod"],
    logo: "images/restaurant_logos/cafecafe.png",
    address: {
      "tel-aviv": "נמל תל אביב, יורדי הסירה 1, תל אביב",
      "beer-sheva": "קניון עופר גרנד, שדרות דוד טוביהו 125, באר שבע",
      "haifa": "קניון עזריאלי, דרך שמחה גולן 54, חיפה",
      "ashdod": "מתחם ביג פאשן, אשדוד"
    },
    cuisine: "Cafe / Israeli / Dairy & Meat",
    description: "רשת בתי קפה ומסעדות המציעה תפריט מגוון הכולל ארוחות בוקר, סלטים, כריכים ופסטות.",
    menu: [
      {
        dishId: 401,
        name: "כריך חביתה",
        category: "כריכים",
        description: "חביתה, גבינת שמנת, עגבנייה ומלפפון. מוגש עם סלט אישי בצד.",
        price: 42,
        image: "images/CafeCafe/omelette.jfif",
        dietary: ["vegetarian", "kosher"], 
        allergens: ["gluten", "egg", "milk", "sesame"],
        ingredients: ["bread", "egg", "cream-cheese", "tomato", "cucumber"],
        customization: {
          removable: ["tomato", "cucumber", "cream-cheese"],
          replaceable: ["gluten-free-bread"],
          notes: [
            ["ניתן להזמין עם לחם ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את העגבנייה.", "tomato"],
            ["ניתן להוריד את המלפפון.", "cucumber"],
            ["ניתן להוריד את גבינת השמנת להתאמה ללא חלב/לקטוז.", "milk", "lactose-free"]
          ]
        }
      },
      {
        dishId: 402,
        name: "סלט חלומי קראנץ'",
        category: "סלטים",
        description: "חסה, עגבניות שרי, מלפפון, גזר, פטריות מוקפצות וקוביות חלומי, ברוטב ויניגרט הדרים.",
        price: 64,
        image: "images/CafeCafe/halloumi.jfif",
        dietary: ["vegetarian", "gluten-free", "kosher"], 
        allergens: ["milk"],
        ingredients: ["lettuce", "tomato", "cucumber", "carrot", "mushrooms", "halloumi", "citrus-vinaigrette"],
        customization: {
          removable: ["tomato", "cucumber", "mushrooms"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הפטריות המוקפצות.", "mushrooms"],
            ["ניתן להוריד את העגבניות.", "tomato"],
            ["ניתן להוריד את המלפפון.", "cucumber"]
          ]
        }
      },
      {
        dishId: 403,
        name: "פסטה נפוליטנה",
        category: "פסטות",
        description: "פסטה פנה ברוטב עגבניות קלאסי, שום, בזיליקום ושמן זית.",
        price: 54,
        image: "images/CafeCafe/napolitana.jfif",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"], 
        allergens: ["gluten"],
        ingredients: ["pasta", "tomato", "garlic", "basil", "olive-oil"],
        customization: {
          removable: ["garlic"],
          replaceable: ["gluten-free-pasta"],
          notes: [
            ["ניתן להחליף לפסטה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את השום.", "garlic"]
          ]
        }
      }
    ]
  },


// Restaurant 5: Haachim
  {
    id: 5,
    name: "האחים",
    cities: ["tel-aviv"], 
    logo: "images/restaurant_logos/haachim-logo.png",
    address: {
      "tel-aviv": "אבן גבירול 26, תל אביב - יפו"
    },
    cuisine: "Israeli / Grill / Local",
    description: "מסעדה ישראלית תוססת המציעה אוכל מקומי, שיפודים, סלטים טריים ואווירה שמחה.",
    menu: [
      {
        dishId: 501,
        name: "חומוס הבית",
        category: "סלטים ועניינים",
        description: "חומוס, טחינה, גרגירים, תטבילה, גרמולטה.",
        price: 35,
        image: "images/Haachim/haachim-hummus.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"],
        allergens: ["sesame", "gluten"], // Often served with pita
        ingredients: ["hummus", "tahini", "chickpeas", "tatbila", "gremolata", "pita-bread"],
        customization: {
          removable: ["tahini", "pita-bread"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הטחינה להתאמה לאלרגיים לשומשום.", "sesame"],
            ["ניתן לוותר על הפיתות להתאמה ללא גלוטן.", "gluten-free"]
          ]
        }
      },
      {
        dishId: 502,
        name: "סלט פאטוש",
        category: "סלטים ועניינים",
        description: "ירקות טריים ועשבי תיבול, פיתה 'שראק' מטוגנת, פטה כבשים וזיתים סוריים.",
        price: 62,
        image: "images/Haachim/haachim-fattoush.png",
        dietary: ["vegetarian", "kosher"],
        allergens: ["gluten", "milk"],
        ingredients: ["vegetables", "herbs", "fried-pita", "feta-cheese", "olives"],
        customization: {
          removable: ["fried-pita", "feta-cheese", "olives"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הפיתה המטוגנת להתאמה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את גבינת הפטה להתאמה לטבעונים וללא לקטוז/חלב.", "vegan", "lactose-free", "milk"],
            ["ניתן להוריד את הזיתים.", "olives"]
          ]
        }
      },
      {
        dishId: 503,
        name: "ינעלהעולמבורגר (טבעוני - בשר חדש)",
        category: "גריל",
        description: "קציצת 'בשר חדש' עם לחמניה קלויה, פסטו כוסברה, עשבי תיבול, עגבניות, צנוברים, גרידת לימון וטחינה מתובלת.",
        price: 75,
        image: "images/Haachim/haachim-vegan-burger.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"],
        allergens: ["gluten", "sesame", "tree-nuts"], // צנוברים (אגוזים), טחינה (שומשום)
        ingredients: ["redefine-meat", "bun", "cilantro", "tomato", "pine-nuts", "tahini"],
        customization: {
          removable: ["tomato", "tahini", "pine-nuts", "cilantro", "bun"],
          replaceable: ["gluten-free-bun"],
          notes: [
            ["ניתן לבקש לחמנייה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את הטחינה לאלרגיים לשומשום.", "sesame"],
            ["ניתן להוריד את הצנוברים.", "tree-nuts"],
            ["ניתן להוריד את העגבניות.", "tomato"],
            ["ניתן להוריד את פסטו הכוסברה.", "cilantro"]
          ]
        }
      },
      {
        dishId: 504,
        name: "טארט פקאן - טבעוני",
        category: "קינוחים",
        description: "טארט פקאן ומייפל, מוגש עם סורבה קוקוס.",
        price: 47,
        image: "images/Haachim/haachim-pecan-tart.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"],
        allergens: ["tree-nuts", "gluten"],
        ingredients: ["pecans", "maple", "coconut-sorbet", "tart-dough"],
        customization: {
          removable: [], //the pecans cannot be removed from a pecan tart
          replaceable: [],
          notes: []
        }
      }
    ]
  },
  
//Restaurant 6: Amore Mio
  {
    id: 6,
    name: "אמורה מיו - Amore Mio",
    cities: ["tel-aviv"], 
    logo: "images/restaurant_logos/amoremio-logo.png",
    address: {
      "tel-aviv": "אבן גבירול 100, תל אביב - יפו"
    },
    cuisine: "Italian",
    description: "מסעדה איטלקית משפחתית המציעה פיצות מנחמות, פסטות עשירות, בשרים וקינוחים קלאסיים.",
    menu: [
      {
        dishId: 601,
        name: "פסטה פומודורו ופונגי",
        category: "פסטות",
        description: "פסטה ברוטב עגבניות איטלקי קלאסי עם פטריות טריות, שום ושמן זית.",
        price: 64,
        image: "images/Amore_Mio/pasta.jpg",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"],
        allergens: ["gluten"],
        ingredients: ["pasta", "tomato", "mushrooms", "garlic", "olive-oil"],
        customization: {
          removable: ["mushrooms", "garlic"],
          replaceable: ["gluten-free-pasta"],
          notes: [
            ["ניתן להחליף לפסטה ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את הפטריות.", "mushrooms"],
            ["ניתן להוריד את השום.", "garlic"]
          ]
        }
      },
      {
        dishId: 602,
        name: "אנטריקוט (Bistecca Entrecote)",
        category: "בשרים (Secondi)",
        description: "נתחי סטייק אנטריקוט מיושן (כ-300 גרם), מוגש עם תפוחי אדמה וסלט ירוק.",
        price: 168,
        image: "images/Amore_Mio/Steak.jfif",
        dietary: ["lactose-free"], 
        allergens: [],
        ingredients: ["beef", "potato", "lettuce", "onion"], 
        customization: {
          removable: ["onion", "potato"],
          replaceable: [],
          notes: [
            ["מתאים לדיאטת פליאו/קיטו ללא תוספת תפוחי האדמה.", "paleo", "keto"],
            ["ניתן לבקש את הסלט ללא בצל.", "onion"]
          ]
        }
      },
      {
        dishId: 603,
        name: "פיצה פפרוני איטלקית",
        category: "פיצות",
        description: "רוטב עגבניות, גבינת מוצרלה, פפרוני בקר וזיתים.",
        price: 76,
        image: "images/Amore_Mio/PepperoniPizza.jfif",
        dietary: [], 
        allergens: ["gluten", "milk"],
        ingredients: ["dough", "tomato", "cheese", "pepperoni", "olives"],
        customization: {
          removable: ["cheese", "pepperoni", "olives"],
          replaceable: ["gluten-free-dough"],
          notes: [
            ["ניתן להוריד את הפפרוני להתאמה כשרה/צמחונית.", "kosher", "vegetarian"],
            ["ניתן להוריד את הגבינה להתאמה לשומרי כשרות או אלרגיים לחלב.", "kosher", "milk", "lactose-free"],
            ["ניתן להזמין על בסיס בצק ללא גלוטן.", "gluten-free"],
            ["ניתן להוריד את הזיתים.", "olives"]
          ]
        }
      },
      {
        dishId: 604,
        name: "אלף עלים (Millefoglie Alla Crema)",
        category: "קינוחים",
        description: "שכבות של בצק עלים פריך עם קרם פטיסייר ושקדים קלויים.",
        price: 49,
        image: "images/Amore_Mio/Millefoglie.jfif",
        dietary: ["vegetarian", "kosher"],
        allergens: ["gluten", "milk", "egg", "tree-nuts"],
        ingredients: ["puff-pastry", "pastry-cream", "almonds"],
        customization: {
          removable: ["almonds"],
          replaceable: [],
          notes: [
            ["ניתן לבקש ללא שקדים (לאלרגיים לאגוזים).", "tree-nuts"]
          ]
        }
      }
    ]
  },

  // Restaurant 7: Taizu
  {
    id: 7,
    name: "טאיזו - Taizu",
    cities: ["tel-aviv"],
    logo: "images/restaurant_logos/taizu-logo.png",
    address: {
      "tel-aviv": "מנחם בגין 23, תל אביב"
    },
    cuisine: "Asian / Chef / Fine Dining",
    description: "מסעדת שף של יובל בן נריה המציעה מסע קולינרי וחלוקת מנות בהשראת דרום מזרח אסיה.",
    menu: [
      {
        dishId: 701,
        name: "סלט דפי שעועית",
        category: "ראשונות (Water)",
        description: "בזיל סגול, הולי בזיל, קשיו מקורמלים, צנוניות, טופו מטוגן וטחינה סינית.",
        price: 66,
        image: "images/restaurant_logos/BeanNoodleSalad.jfif",
        dietary: ["vegan", "vegetarian", "lactose-free", "kosher"],
        allergens: ["tree-nuts", "sesame", "soy"],
        ingredients: ["bean-noodles", "basil", "cashew", "radish", "tofu", "tahini"],
        customization: {
          removable: ["cashew", "tahini"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הקשיו המקורמל.", "tree-nuts"],
            ["ניתן להוריד את הטחינה הסינית לאלרגיים לשומשום.", "sesame"]
          ]
        }
      },
      {
        dishId: 702,
        name: "הר גאו",
        category: "ביניים",
        description: "כיסונים במילוי בלק טייגר שרימפס, ארטישוק ירושלמי, בצל ירוק ושמיר.",
        price: 82,
        image: "images/Taizu/HarGow.jfif",
        dietary: ["lactose-free"], 
        allergens: ["shellfish", "gluten"],
        ingredients: ["shrimp", "jerusalem-artichoke", "green-onion", "dill", "dough"],
        customization: {
          removable: ["dill"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את השמיר.", "dill"]
          ]
        }
      },
      {
        dishId: 703,
        name: "באטר צ'יקן",
        category: "עיקריות",
        description: "עגבניות, חילבה, חמאה מזוקקת, שמנת חמוצה ועלי קארי.",
        price: 118,
        image: "images/Taizu/ButterChicken.jfif",
        dietary: [], 
        allergens: ["milk"],
        ingredients: ["chicken", "tomato", "butter", "sour-cream", "curry-leaves"],
        customization: {
          removable: ["tomato"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את העגבניות.", "tomato"]
          ]
        }
      },
      {
        dishId: 704,
        name: "היער השחור",
        category: "קינוחים",
        description: "קרם קוקוס, מוס שוקולד, קראמבל קקאו, פתיתי קוקוס, פירות יער ואבקת מאצ'ה.",
        price: 62,
        image: "images/Taizu/BlackForestDessert.jfif",
        dietary: ["vegetarian", "kosher"],
        allergens: ["gluten", "milk"],
        ingredients: ["coconut", "chocolate", "cocoa", "berries", "matcha"],
        customization: {
          removable: [],
          replaceable: [],
          notes: [] 
        }
      }
    ]
  },

  //Restaurant 8: Nam
  {
    id: 8,
    name: "נאם - Nam",
    cities: ["tel-aviv"],
    logo: "images/restaurant_logos/nam-logo.png",
    address: {
      "tel-aviv": "דיזנגוף 275, תל אביב"
    },
    cuisine: "Thai / Asian",
    description: "מסעדה תאילנדית אותנטית ושוקקת המגישה מנות ווק, קארי וסלטים תאילנדים רעננים.",
    menu: [
      {
        dishId: 801,
        name: "סום טאם (סלט פפאיה)",
        category: "סלטים (YAM & SOD)",
        description: "פפאיה ירוקה, עגבניות שרי, שעועית תאילנדית, בוטנים, שום, רוטב דגים, לימון וצ'ילי.",
        price: 43,
        image: "images/Nam/SomTam.jfif",
        dietary: ["lactose-free", "gluten-free"], // Not vegetarian because of the fish sauce
        allergens: ["peanuts", "fish"],
        ingredients: ["papaya", "tomato", "green-beans", "peanuts", "garlic", "fish-sauce", "chili"],
        customization: {
          removable: ["peanuts", "tomato", "garlic", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הבוטנים.", "peanuts"],
            ["ניתן להוריד את העגבניות.", "tomato"],
            ["ניתן להוריד את השום.", "garlic"],
            ["ניתן להוריד את הצ'ילי (פלפל חריף).", "hot-pepper"]
          ]
        }
      },
      {
        dishId: 802,
        name: "פאד תאי טופו",
        category: "ווק (WOK)",
        description: "אטריות אורז דקות עם טופו, ביצה, שום, בצל ירוק, נבטים, כוסברה ובוטנים.",
        price: 71,
        image: "images/Nam/TofuPadThai.jfif",
        dietary: ["vegetarian", "lactose-free", "gluten-free", "kosher"],
        allergens: ["egg", "soy", "peanuts"],
        ingredients: ["rice-noodles", "tofu", "egg", "garlic", "green-onion", "sprouts", "cilantro", "peanuts"],
        customization: {
          removable: ["egg", "peanuts", "cilantro", "garlic"],
          replaceable: [],
          notes: [
            ["ניתן לוותר על הביצה להתאמה טבעונית מלאה.", "vegan"],
            ["ניתן להוריד את הבוטנים.", "peanuts"],
            ["ניתן להוריד את הכוסברה.", "cilantro"],
            ["ניתן להוריד את השום.", "garlic"]
          ]
        }
      },
      {
        dishId: 803,
        name: "מרק טום יאם עוף",
        category: "מרקים (TOM & GAENG)",
        description: "נתחי עוף, פטריות, עגבניות, בצל, צ'ילי, כפיר ליים, למון גראס, כוסברה וחלב קוקוס.",
        price: 69,
        image: "images/Nam/ChickenTomYumSoup.jfif",
        dietary: ["lactose-free", "gluten-free", "kosher"], 
        allergens: ["soy"],
        ingredients: ["chicken", "mushrooms", "tomato", "onion", "chili", "coconut-milk", "cilantro"],
        customization: {
          removable: ["mushrooms", "tomato", "onion", "cilantro", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הפטריות.", "mushrooms"],
            ["ניתן להוריד את העגבניות.", "tomato"],
            ["ניתן להוריד את הבצל.", "onion"],
            ["ניתן להוריד את הכוסברה.", "cilantro"],
            ["ניתן להוריד את הפלפל החריף.", "hot-pepper"]
          ]
        }
      }
    ]
  },

  //Restaurant 9: Kampai
  {
    id: 9,
    name: "קמפאי - Kampai",
    cities: ["beer-sheva", "ashdod"],
    logo: "images/restaurant_logos/kampai-logo.png",
    address: {
      "beer-sheva": "חיל ההנדסה 1, מתחם ביג, באר שבע",
      "ashdod": "אריאל שרון 1, מתחם ביג פאשן, אשדוד"
    },
    cuisine: "Asian / Sushi / Wok",
    description: "מסעדת רחוב אסייתית המציעה ווק, סושי, מרקי ראמן ומנות גריל בניחוח יפני ותאילנדי.",
    menu: [
      {
        dishId: 901,
        name: "סלט פאפאיה תאילנדי",
        category: "סלטים",
        description: "רצועות פאפאיה ירוקה, גזר, שעועית ירוקה, עגבניות שרי ובוטנים גרוסים ברוטב למון גראס, צ'ילי וכוסברה.",
        price: 46,
        image: "images/Kampai/ThaiPapayaSalad.jfif",
        dietary: ["vegan", "vegetarian", "lactose-free", "gluten-free", "kosher"],
        allergens: ["peanuts", "soy"],
        ingredients: ["papaya", "carrot", "green-beans", "tomato", "peanuts", "lemongrass", "chili", "cilantro"],
        customization: {
          removable: ["peanuts", "tomato", "cilantro", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הבוטנים.", "peanuts"],
            ["ניתן להוריד את העגבניות.", "tomato"],
            ["ניתן להוריד את הכוסברה.", "cilantro"],
            ["ניתן להוריד את הצ'ילי (פלפל חריף).", "hot-pepper"]
          ]
        }
      },
      {
        dishId: 902,
        name: "צ'יקן פאיטאן ראמן",
        category: "מרקים",
        description: "שיפוד פרגית צלויה, ציר עוף וחלב סויה, פטריות שיטאקי, אטריות ראמן, ביצה, באק צ'וי, כרוב סיני, בצל ירוק ואצת נורי.",
        price: 68,
        image: "images/Kampai/ChickenPaitanRamen.jfif",
        dietary: ["lactose-free", "kosher"], 
        allergens: ["soy", "sesame", "egg", "gluten"],
        ingredients: ["chicken", "soy-milk", "mushrooms", "ramen-noodles", "egg", "bok-choy", "green-onion", "nori", "sesame"],
        customization: {
          removable: ["egg", "mushrooms", "sesame"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את הביצה הקשה.", "eggs"],
            ["ניתן להוריד את הפטריות.", "mushrooms"],
            ["ניתן לבקש ללא שמן שומשום ושומשום גרוס.", "sesame"]
          ]
        }
      },
      {
        dishId: 903,
        name: "פאד קפאו",
        category: "מהווק | אורז",
        description: "בקר קצוץ מוקפץ עם תבלינים תאילנדים בניחוח למון גראס, צ'ילי, בזיל וביצת עין מטוגנת על אורז יסמין.",
        price: 72,
        image: "images/Kampai/PadKrapow.jfif",
        dietary: ["lactose-free", "kosher"], 
        allergens: ["soy", "egg"],
        ingredients: ["beef", "lemongrass", "chili", "basil", "egg", "rice"],
        customization: {
          removable: ["egg", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את ביצת העין.", "eggs"],
            ["ניתן לבקש ללא צ'ילי חריף.", "hot-pepper"]
          ]
        }
      },
      {
        dishId: 904,
        name: "סושי במבה רול",
        category: "סושי",
        description: "רול במילוי סלמון, מלפפון וחמאת בוטנים, מוגש חם במעטפת טמפורה ורוטב טריאקי.",
        price: 52,
        image: "images/Kampai/BambaSushiRoll.jfif",
        dietary: ["lactose-free", "kosher"],
        allergens: ["fish", "peanuts", "gluten", "soy"],
        ingredients: ["salmon", "cucumber", "peanut-butter", "tempura", "teriyaki"],
        customization: {
          removable: ["cucumber"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את המלפפון.", "cucumber"]
          ]
        }
      }
    ]
  },
  

  //Restaurant 10: Minna Tomei
  {
    id: 12,
    name: "מינה טומיי - Minna Tomei",
    cities: ["tel-aviv", "haifa"], 
    logo: "images/restaurant_logos/minnatomei-logo.png",
    address: {
      "tel-aviv": "רחוב הארבעה 17, תל אביב",
      "haifa": "רח' פלימן 8, מרכז קסטרא, חיפה"
    },
    cuisine: "Asian / 5 Kitchens",
    description: "מסעדה אסייתית המאגדת 5 מטבחים שונים מהמזרח הרחוק: תאילנד, וייטנאם, יפן, הודו וקוריאה.",
    menu: [
      {
        dishId: 1001,
        name: "אגרול קריספי ויאטנמי",
        category: "וייטנאם (ראשונות)",
        description: "במילוי עוף, ג'ינג'ר, עגבניות, בזיליקום ואטריות שעועית. מוגש עם חסה, בצל ירוק וצ'ילי.",
        price: 57,
        image: "images/Minna_Tomei/minnatomei-eggroll.jpg",
        dietary: ["lactose-free", "kosher"],
        allergens: ["gluten", "soy"],
        ingredients: ["chicken", "tomato", "basil", "bean-noodles", "lettuce", "green-onion", "chili"],
        customization: {
          removable: ["tomato", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את העגבניות מהמילוי.", "tomato"],
            ["ניתן לבקש ללא טבעות הצ'ילי מעל.", "hot-pepper"]
          ]
        }
      },
      {
        dishId: 1002,
        name: "קון קאן פיש",
        category: "וייטנאם (עיקריות)",
        description: "דג לבן במרינדה של למון גראס, קרם קוקוס וקשיו בתוך כפות חסה, עם אטריות שעועית, צ'ילי ורוטב קארי בוטנים.",
        price: 72,
        image: "images/Minna_Tomei/minnatomei-fish.jpg",
        dietary: ["lactose-free", "kosher", "gluten-free"],
        allergens: ["fish", "tree-nuts", "peanuts"],
        ingredients: ["white-fish", "lemongrass", "coconut-cream", "cashew", "lettuce", "bean-noodles", "chili", "peanut-curry"],
        customization: {
          removable: ["cashew", "chili"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את אגוזי הקשיו.", "tree-nuts"],
            ["ניתן להוריד את טבעות הצ'ילי.", "hot-pepper"]
          ]
        }
      },
      {
        dishId: 1003,
        name: "מארה רול",
        category: "סושי",
        description: "שרימפס בטמפורה, אבוקדו ומלפפון, עטוף במיקס טוביקו, איולי צ'ילי, טרטר ספייסי טונה ושומשום.",
        price: 74,
        image: "images/Minna_Tomei/minnatomei-mare.jpg",
        dietary: ["lactose-free"], 
        allergens: ["shellfish", "fish", "gluten", "sesame", "egg"],
        ingredients: ["shrimp", "tempura", "avocado", "cucumber", "tobiko", "chili-aioli", "tuna", "sesame"],
        customization: {
          removable: ["cucumber", "sesame"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את המלפפון.", "cucumber"],
            ["ניתן לבקש ללא שומשום.", "sesame"]
          ]
        }
      },
      {
        dishId: 1004,
        name: "מאגורו אפו רול",
        category: "סושי",
        description: "טונה ספייסי מיונז, מלפפון, בצל ירוק, אבוקדו, מעטפת טונה, שבבי טמפורה ועירית.",
        price: 79,
        image: "images/Minna_Tomei/minnatomei-maguro.jpg",
        dietary: ["lactose-free", "kosher"],
        allergens: ["fish", "egg", "gluten", "soy"],
        ingredients: ["tuna", "spicy-mayo", "cucumber", "green-onion", "avocado", "tempura-flakes", "chives"],
        customization: {
          removable: ["cucumber", "tempura-flakes"],
          replaceable: [],
          notes: [
            ["ניתן להוריד את המלפפון.", "cucumber"],
            ["ניתן להוריד את שבבי הטמפורה להתאמה ללא גלוטן.", "gluten-free"]
          ]
        }
      }
    ]
  }
];

console.log("Data loaded successfully! Restaurants count: ", restaurantsData.length);