// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/micheline2023.webp';
// import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import ChefImg from '../src/assets/img/team/Dado.webp'
import SousChefImg from '../src/assets/img/team/Ivan.webp'
import TogetherImg from '../src/assets/img/team/DadoiIvan.webp'
export const navData = [
  { href: '/', name: 'home' },
  { href: '/aboutus', name: 'about' },
  { href: '/findus', name: 'find us' },
  { href: '/bookatable', name: 'book a table' },
  { href: '/menu', name: 'menu' },
  { href: '/winelist', name: 'wine list' },
  { href: '/team', name: 'team' },
  { href: '/gallery', name: 'gallery' },
  { href: '/catering', name: 'catering' },
];

export const heroData = {
  pretitle: 'IS CONSTANTLY PROVING ITS REPUTATION',
  title: 'RESTAURANT DUBROVNIK',
  subtitle:
    'as being amongst Dubrovnik’s top class fine dining restaurants, serving a consistently good quality food with a distinctly modern Dalmatian twist. ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: 'https://www.facebook.com/restorandubrovnik/', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/dubrovnik.restaurant/', icon: <FaInstagram /> },
];

export const aboutData = {
  pretitle: 'Our story...',
  title: 'Who we are',
  subtitle:
    'Perched on a picturesque rooftop in the heart of Old Town in Dubrovnik, Restaurant Dubrovnik is a romantic fine dining haven that combines elegance with charm. Our smart, stylish decor creates an inviting atmosphere, perfect for any occasion, from intimate dinners to special celebrations...',
  btnText: 'More about us',
  image: AboutImg,
};

export const menu = {
  menuItems: [
    {
      headingMax: "PLATINUM DEGUSTACIJSKI MENU",
      heading : "Chef's Choice Tasting Menu",
      price: '105 €',
      items: [
        "Opening note", "Smoked Eel & mussels / Citrus, honey and olive oil emulsion / Caviar and strawberry",
        "Crunchy ravioli / Baby beef ragout / Mushrooms carpaccio / Corn espuma / Pickled carrot / Red wine reduction",
        "Octopus / Sweet corn / Beetroot epsuma / Broccoli cream with black Truffle",
        "Glazed Veal / Dolomitico cream / Roasted leek with chili and honey / Peas puree / Pommes souffle",
        "Blue poppy seed mousse / Caramel / Anise / Almond",
        "Wine pairing Discovery:",
        "70 €",
        "Wine pairing Experience:",
        "95 €"
      ],
    },
    {
      headingMax: "DIAMOND DEGUSTACIJSKI MENU",
      heading: "Chef’s Choice Tasting Menu",
      price: '145 €',
      items: [
        "Opening note",
        "Ceviche Dubrovnik style", "Sliced white fish fillets and shrimp tails marinated in citrus juice / Peeled orange fillets / Pepper / Flavored bread croutons",
        "Beef tartare / Mildly spiced with aromatic herbs / Blue potato chips / Asparagus / Radish / Fresh cucumber / Quail egg",
        "Cream celery soup / Black Truffles / Prawn",
        "Scallops / Soft polenta / Goat cheese / Hazelnuts / Baby porcini mushrooms",
        "Wild mushrooms risotto / Black Truffles / Foie gras",
        "Crispy common sea bream / Beetroot powder / Roasted potatoe & garlic cream / Swiss chard / Pickled radish / Garlic aioli / Baby spinach mayo / Lemon gel",
        "Fruit minestrone with basil / Lemon ice cream",
        "„Tiramisu“ Truffle / Coffee / Chocolate / Dehydrated raspberry / Meringues from egg white",
        "Wine pairing:",
        "90 €"
      ],
    },
    {
      heading: "Cold starters",
      items: [ 
        "Ceviche Dubrovnik style", "Sliced white fish fillets and adriatic shrimp tails marinated in citrus juice / Peeled orange fillets / Pepper / Flavored bread croutons",
      ]
    },
    {
      //price2: "28 €",
      items: [
        "Smoked Eel & mussels / Citrus, honey and olive oil emulsion / Caviar and strawberry"
      ]
    },
    {
      //price2: "28 €",
      items: [
        "Beef tartare / Mildly spiced with aromatic herbs / Blue potato chips / Asparagus / Radish / Fresh cucumber / Quail egg"
      ]
    },
    {
      //price2: "28 €",
      items: [
        "Foie gras pâté / Caramelised steak bites / Pistachio / Smoked duck breast / Hazelnut Vinaigrette"
      ]
    },
    {
      heading: "Soups",
      //price2: "14 €",
      items: [
        "Cream celery soup / Black Truffle / Prawn"
      ]
    },
    {
      heading: "Warm starters",
      //price2: "30 €",
      items: [
        "Octopus / Sweet corn / Beetroot espuma / Broccoli cream with black Truffle"
      ]
    },
    {
      //price2: "30 €",
      items: [
        "Scallops / Soft polenta / Goat cheese / Hazelnuts / Baby porcini mushrooms"
      ]
    },
    {
      //price2: "30 €",
      items: [
        "Crunchy ravioli / Baby reef ragout / Mushrooms carpaccio / Corn epsuma / Pickled carrot / Red win reduction"
      ]
    },
    {
      //price2: "30 €",
      items: [
        "Wild mushroom risotto / Truffles / Foie gras"
      ]
    },
    {
      heading: "Main dishes",
      items: [
        "Crispy common sea bream / Beetroot powder / Roasted potato & garlic cream / Swiss chard / Pickled radish / Garlic aioli / Baby spinach mayo / Lemon gel"
      ],
      //price2: "43 €"
    },
    {
      //price2: "43 €",
      items: [
        "Wild mediterranean grouper / Carrot & orange glaze / Smoked shrimp tartare with roasted celery / Vine & olive oil foam / Sea fennel / Chives oil"
      ],
    },
    {
      //price2: "43 €",
      items: [
        "Glazed Veal / Dolomitico cream / Roasted leek with chili and honey / Peas puree / Pommes souffle"
      ],
    },
    {
      //price2: "43 €",
      items: [
        "Lamb fillet / Pistachio / Thyme sauce / Potatoes terrine / Carrot purée"
      ],
    },
    {
      //price2: "43 €",
      items: [
        "European lobster / Parsnip cream / Asparagus / Marinated garlic / Raspberry powder"
      ],
    },
    {
      headingMax: "SILVER MENU",
      price: "65 €",
      items: [
        "Opening note", "Cold or Warm starter", "Main dish"
      ],
    },
    {
      headingMax: "GOLD MENU",
      price: "90 €",
      items: [
        "Opening note", "Cold starter", "Warm starter", "Main dish"
      ],
    },
    //{
      //heading: "Cheeses",
      //items: [
       // "Selection of cheeses: Cow cheese, goat cheese, sheep cheese"
      //],
      //price2: "40 €",
      //price3: "20 €"
    //}
  ],
};

export const wineListData = {
  signatureCocktails: [
    {
      name: "Greetings From the Bar NA",
      ingredients: "(Mojito batch, 1724 tonic)",
      type: 'LIVER BREAK',
      price: "14.00 €",
    },
    {
      name: "Strawberry Dream",
      price: "14.00 €",
      ingredients: "(Strawberries, lemon juice, strawberry liqueur, 1724 tonic)"
    },
    {
      name: "Rendezvous",
      type: "I'LL GIVE IT A GO",
      price: "26.00 €",
      ingredients: "(Champagne Pierre Peters Brut BDB, St. Germain, soda)"
    },
    {
      name: "House Vermouth Tonic",
      price: "16.00 €",
      ingredients: "(Cocchi vermouth rosso, campari, 1724 tonic, salt)"
    },{
      name: "Lost in The Sun",
      price: "16.00 €",
      ingredients: "(Sake Eco zero Junmai, Yuzu & Elderflower)"
    },
    {
      name: "Greetings From the Bar",
      ingredients: "(Mojito batch, 1724 tonic, vodka Tito's / Gin Raw)",
      type: "I'M ON VACATION",
      price: "16.00 €"
    },
    {
      name: "Mediterranean Spritz",
      ingredients: "(Gin mare, 1724 tonic, mandarin batch)",
      price: "16.00 €",
    },
    {
      name: "El Día De Fiesta",
      ingredients: "(Cupreata tequila, simple syrup, lime & lemon juice, angostura, homemade spicy infusion)",
      price: "16.00 €",
    },
  ],
  aperitifs: [
    {
      name: "Pierre Peters, Cuvee de Reserve Blanc de Blancs Grand Cru Brut NV",
      type: 'CHAMPAGNE & SPARKLING WINES BY GLASS (0,125l)',
      price: "26.00 €",
      serving_size: "0.125 l"
    },
    {
      name: "Adami Bosco di Gica Prosecco Brut Valdobbiadene DOCG",
      price: "26.00 €",
      serving_size: "0.125 l"
    },
    {
      name: "Juvé & Camps, Cava Gran Reserva Brut Nature Reserva de la Familia",
      price: "14.00 €",
      serving_size: "0.125 l"
    },
    {
      name: "Billecart-Salmon, Brut Rose NV",
      price: "32.00 €",
      serving_size: "0.125 l"
    },{
      name: "Tomac, Diplomat Extra Brut",
      price: "14.00 €",
      serving_size: "0.125 l"
    },
    {
      name: "Šember, Brut Rose",
      price: "13.00 €",
      serving_size: "0.125 l"
    },
  ],
  champagneList: [
    {
      name: "Billecart-Salmon, Brut Réserve NV",
      price: "135.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Philipponnat, Royale Réserve Brut NV",
      price: "130.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Egly-Ouriet, ‘Les Premices’ Brut NV",
      price: "145.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Louis Roederer, Collection 243 NV",
      price: "135.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Charles Heidsieck, Brut Réserve NV",
      price: "135.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Agrapart, 7 Crus Brut NV",
      price: "140.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Billecart-Salmon, Brut Sous Bois NV",
      price: "180.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Philipponnat, Royale Réserve Non Dose Brut NV",
      price: "135.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Egly-Ouriet, Grand Cru Extra Brut NV",
      price: "220.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Billecart-Salmon, Brut Réserve NV Half Bottle",
      price: "70.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Pierre Peters, Cuvee de Reserve Blanc de Blancs Grand Cru Brut NV",
      price: "130.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Agrapart, Terroirs Blanc de Blancs Grand Cru Extra Brut NV",
      price: "160.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Dhondt-Grellet ‘Les Terres Fines’ Blanc de Blancs Premier Cru Extra Brut",
      price: "175.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Ruinart, Blanc de Blancs Brut NV",
      price: "180.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Pierre Peters Les Chetillons Blanc de Blancs Grand Cru Brut 2015.",
      price: "290.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Billecart-Salmon, Brut Rosé NV",
      price: "170.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Laurent-Perrier, Cuvee Rosé Brut NV",
      price: "190.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Bollinger, Brut Rosé NV",
      price: "170.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Ruinart, Rose Brut NV",
      price: "175.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Philipponnat, Royale Brut Reserve Rosé NV",
      price: "160.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Billecart-Salmon, Brut Rosé NV Half Bottle",
      price: "95.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Philipponnat, Blanc de Noirs Extra Brut 2015.",
      price: "170.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Drappier Exception Millesime 2012",
      price: "155.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Billecart-Salmon, ‘Cuvee Nicolas-Francois Billecart’ Brut Millesime 2006",
      price: "380.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Charles Heidsieck, Brut Millesime 2012",
      price: "200.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Dom Pérignon Brut 2012",
      price: "410.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Dom Pérignon Brut 2008",
      price: "580.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Dom Pérignon Brut Rose 2006.",
      price: "690.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Louis Roederer Cristal Brut 2009",
      price: "580.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Krug Rose",
      price: "670.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Armand de Brignac Brut Gold",
      price: "620.00 €",
      serving_size: "0.75 l"
    }
  ],
  sparklingWines: [
    {
      name: "Billecart-Salmon, Brut Réserve",
      type: "France (Champagne)",
      price: "250.00 €",
      serving_size: "1.5 l"
    },
    {
      name: "Juvé & Camps, Cava Gran Reserva Brut Nature Reserva de la Familia",
      type: "Spain (Cava)",
      price: "70.00 €",
      serving_size: "0.75 l",
      serving_size2: "1.5 l",
      price2: "140.00 €"
    },
    {
      name: "Adami Bosco di Gica Brut Valdobbiadene DOCG",
      type: "Italy (Prosecco)",
      price: "50.00 €",
      serving_size: "0.75 l",
    },
    {
      name: "Bellavista Franciacorta ‘Alma’ Gran Cuveé Brut NV",
      price: "85.00 €",
      serving_size: "0.75 l"
    },
    {
      type: "Croatia",
      name: "Šember, Baba Draga 97",
      price: "78.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Tomac, Blanc de Noirs",
      price: "76.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Tomac, Amfora Brut",
      price: "84.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Veralda Blanc de Noir Brut",
      price: "68.00 €",
      serving_size: "0.75 l"
    },
    {
      name : "Barun Amoureux Muscat Extra sec",
      price: "68.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Tomac, Diplomat Extra Brut",
      ingredients: "Pleševica, Croatia",
      price: "74.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Šember, Brut Rose",
      ingredients: "Pleševica, Croatia",
      price: "64.00 €",
      serving_size: "0.75 l"
    }
  ],
  whiteWines: [
    {
      name: "Sancerre Blanc, Pascal Jolivet",
      type: "Sauvignon Blanc",
      ingredients: "France",
      price: "98.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Štampar, Sauvignon Blanc",
      ingredients: "Croatia",
      price: "63.00 €",
      serving_size: "0.75 l",
      price2: "11.50 €",
      serving_size2: "0.15 l"
    },
    {
      name: "Angelo Gaja, Alteni Di Brasica Langhe",
      price: "260.00 €",
      ingredients: "Italy",
      serving_size: "0.75 l"
    },
    {
      name: "Tinpot Hut, Sauvignon Blanc Marlborough",
      price: "72.00 €",
      ingredients: "New Zealand",
      serving_size: "0.75 l"
    },
    {
      name: "Pascal Jolivet, Sauvignon Blanc Attitude",
      price: "63.00 €",
      ingredients: "France",
      serving_size: "0.75 l",
      price2: "110.00 €",
      serving_size2: "1.5 l",
      price3: "12.50 €",
      serving_size3: "0.15 l"
    },
    {
      name: "Greywacke Wild Sauvignon Marlborough",
      price: "82.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Marjan Simčič, Sauvignon Blanc Opoka Jordano",
      price: "94.00 €",
      ingredients: "Slovenia",
      serving_size: "0.75 l"
    },
    {
      name: "Pouilly Fumme, Pascal Jolivet",
      price: "98.00 €",
      ingredients: "France",
      serving_size: "0.75 l"
    },
    {
      name: "Domaine Christian Moreau, Chablis",
      type: "Chardonnay",
      price: "82.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Xavier Monnot, Bourgogne Blanc",
      ingredients: "Burgundy, France",
      price: "92.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Krauthaker, Chardonnay Rosenberg",
      price: "68.00 €",
      serving_size: "0.75 l",
      ingredients: "Kutjevo, Croatia",
      price2: "11.50 €",
      serving_size2: "0.15 l"
    },
    {
      name: "Marjan Simčič, Chardonnay Classic",
      ingredients: "Slovenia",
      price: "68.00 €",
      serving_size: "0.75 l",
      price2: "11.50 €",
      serving_size2: "0.15 l"
    },
    {
      name: "Saint Aubin 1er Cru Chateniere, Domaine Olivier Leflaive",
      ingredients: "France",
      price: "190.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Meursault “Les Chevalières”, Xavier Monnot",
      price: "198.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Korak, Chardonnay Sur Lie",
      price: "72.00 €",
      serving_size: "0.75 l",
      ingredients: "Pleševica, Croatia"
    },
    {
     name: "Chassagne-Montrachet, Domaine",
     ingredients: "France",
     serving_size: "0.75 l",
     price: "240.00 €"
    },
    {
      name: "Saints Hills, Le Chiffre",
      ingredients: "Istria, Croatia",
      price: "110.00 €",
      serving_size: "0.75 l",
      price2: "20.00 €",
      serving_size2: "0.15 l"
    },
    {
      name: "Puligny-Montrachet, Louis Latour",
      serving_size: "0.75 l",
      ingredients: "Burgundy, France",
      price: "250.00 €"
    },
    {
      name: "J.Antunović, Chardonnay Sur Lie",
      serving_size: "0.75 l",
      price: "80.00 €"
    },
    {
      name: "Jermann, Pinot Grigio",
      type: "Pinot Grigio",
      ingredients: "Venice, Italy",
      serving_size: "0.75 l",
      price: "94.00 €"
    },
    {
      name: "Marjan Simčič, Pinot Grigio Classic",
      ingredients: "Slovenia",
      price: "68.00 €",
      serving_size: "0.75 l",
      price2: "14.00 €",
      serving_size2: "0.15 l"
    },
    {
      name: "Kolarić, Coletti Pinot Grigio Classic",
      ingredients: "Pleševica, Croatia",
      price: "65.00 €",
      serving_size: "0.75 l"
    },
    {
      name: "Frescobaldi,Attems Pinot Grigio",
      serving_size: "0.75 l",
      serving_size2: "0.15 l",
      price: "62.00 €",
      price2: "12.00 €"
    }
  ]
};

export const teamData = {
  pretitle: 'Our Team',
  title: 'Meet our Chef',
  name: 'Dalibor Vidović',
  occupation: 'executive chef',
  chefImg: ChefImg,
  togetherImg: TogetherImg,
  sousChefImg: SousChefImg
};

export const testimonialData = {
  title: "What our guest's say",
  subtitle: '2000+ statisfied guests',
  modelImg: ModelBlackImg,
  slider: [
    {
      message:
        'Food is amazing and delicious, Chef is fantastic , he himself came to my table and advise the best course - stuff friendly and accommodative. One of the Best restaurant so far in Dubrovnik.',
      name: 'Motaz Almohamady',
    },
    {
      message:
        'Best restaurant we have eaten in for years. We had the tasting menu and every course just amazed. The staff were wonderful and so knowledgeable about their food and wine. If you only do one thing In Dubrovnik eat here. Can’t recommend this place enough. Loved it.',
      name: 'Sue Ashard',
    },
    {
      message:
        'Amazing food and service. Had a 5 course Tasting Menu - every single dish was outstanding. Would highly recommend for special occasion or birthday celebration.',
      name: 'Arturas Ty',
    },
    {
      message: "This restaurant is such an experience! The lobster was the best I’ve ever had! We also enjoyed the lamb filet and an appetizer. The staff was amazing and went out of their way to be sure we were happy. Croatian wine is fabulous and I recommend pairing it with your meal! The food presentation was just beautiful! We are so glad we tried this place!",
      name: "SARAH STEEP"
    }
  ],
};

export const footerData = {
  contact: {
    title: 'Info',
    address: 'Marojice Kaboge 5, Dubrovnik',
    tel: '+385 (0) 20 324 810',
    phone: "+385 (0) 99 258 5871",
    fax: "+385 (0) 20 324 803"
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - sunday',
        hours: '18:00 - 23:00',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};

export const privacyPolicyData = {
    title: "Privacy Policy for Restoran Dubrovnik",
    sub: "At Restoran Dubrovnik, accessible from https://www.restorandubrovnik.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Restoran Dubrovnik and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us",
    details: [
      {
        subtitle: "Log Files",
        text: "Restoran Dubrovnik follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
      },
      {
        subtitle: "Cookies and Web Beacons",
        text: "Like any other website, Restoran Dubrovnik uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
      },
      {
        subtitle: "Privacy Policies",
        text: "You may consult this list to find the Privacy Policy for each of the advertising partners of Restoran Dubrovnik. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Restoran Dubrovnik, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Restoran Dubrovnik has no access to or control over these cookies that are used by third-party advertisers."
      },
      {
        subtitle: "Third Party Privacy Policies",
        text: "Restoran Dubrovnik's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?"
      },
      {
        subtitle: "Children's Information",
        text: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Restoran Dubrovnik does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
      },
      {
        subtitle: "Online Privacy Policy Only",
        text: "Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Restoran Dubrovnik. This policy is not applicable to any information collected offline or via channels other than this website." 
      },
      {
        subtitle: "Consent",
        text: "By using our website, you hereby consent to our Privacy Policy and agree to its terms."
      }
    ]
}
