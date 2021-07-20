import  {FaReact} from 'react-icons/fa';
// Our product database for phones and computers
const sampleProducts = [
  {
    id: 1,
    name: "iPhone 6",
    category: "Shop For iPhone",
    price: 174,
    description:
      "Great condition iPhone 6, works perfectly FREE SHIPPING",
      
    popular: true,
    imageUrls: [
      "https://i.insider.com/5d80e9ca2e22af207811fcb9?width=1040&format=jpeg"
    ]
  },
  {
    id: 2,
    name: "iPhone 13",
    category: "Shop For iPhone",
    price: 840,
    description:
      "Shaped in an iconic casio design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",

    popular: false,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/er3ae54DheccyZ2jeqdUyE-320-80.jpg"
    ]
  },
  {
    id: 3,
    name: "iPhone 5s",
    category: "Shop For iPhone",
    price: 170,

    popular: false,
    imageUrls: [
      "https://cdn.pocket-lint.com/r/s/1200x/assets/images/123723-phones-review-apple-iphone-5s-review-image1-xwvkdotl7w.jpg"
    ]
  },
  {
    id: 4,
    name: "iPhone 8 Plus",
    category: "Shop For iPhone",
    price: 413,
    description:
      "Model name	IPhone 8 Plus Wireless carrier	Unlocked Brand	Apple Form factor	Smartphone Memory storage capacity	64 GB",
    popular: true,
    imageUrls: [
      "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2018/01/iphone-8-plus-space-grey-1.jpg"
    ]
  },
  {
    id: 5,
    name: "Google Pixel 4",
    category: "Shop For Android",
    price: 111,
    description:
      "Amazing angles: Share consistent high-color fidelity with In-Plane Switching (IPS) technology across a 27-inch diagonal screen. A stunning vantage point for everyone, from almost anywhere" +
      "Distinctively modern and accessible: The contemporary thin profile is enhanced by the modern white and silver colors.The open wedge stand design provides convenient access to VGA and dual HDMI ports FREE SHIPPING",

    popular: true,
    imageUrls: [
     "https://www.slashgear.com/wp-content/uploads/2019/10/google-pixel-4-camera-review-1280x720.jpg"
    ]
  },

  {
    id: 7,
    name: "iPhone XS Max",
    category: "Shop For iPhone",
    price: 570,
    description: "",
    popular: false,
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFb66wUNqPJSIx-s_ZyKKGW0ILfxBVnKJzypkU0uxy4uWB-uyqLmZlMSe6ZMDq8O5ynto&usqp=CAU"
    ]
  },
  {
    id: 8,
    name: "Samsung Galaxy S11",
    category: "Shop For Android",
    price: 550,
    description: "",
    popular: false,
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ozk-6pp4IDe_-qY_NkwkL-PfDQ1D7HXaoZZVTFbtq8wH_qDflsFn1Scp31JtU5Zuwv4&usqp=CAU"
    ]
  },

  {
    id: 9,
    name: "Samsung Galaxy S10",
    category: "Shop For Android",
    price: 120,
    description: "",

    popular: false,
    imageUrls: [
      "https://zdnet1.cbsistatic.com/hub/i/r/2018/03/09/1e06c779-fea0-4032-8e05-0afe3c70943b/thumbnail/770x433/ac9b70ee13c865f9fc667671392d9466/samsung-galaxy-s9-2400-6455.jpg"
    ]
  },
  
  {
    id: 10,
    name: "Google Pixel 3",
    category: "Shop For Android",
    price: 130,
    description:
      "Water resistant to 200 m (660 ft): In general, suitable for professional marine activity and serious surface water sports, but not scuba diving",

    popular: false,
    imageUrls: [
      "https://m.media-amazon.com/images/I/71U5ylvmWbL._AC_SL1500_.jpg"
    ]
  },

  {
    id:11,
    name: "Mac Book Air 2018",
    category: "Shop For Mac",
    price: 1000,
    description:
    "",
    popular: true,
    imageUrls: [
      "https://icdn3.digitaltrends.com/image/macbook-air-2018-review-5884-1920x1280.jpg"
    ]

  },
  {
    id:12,
    name: "Mac Book Pro 2019",
    category: "Shop For Mac",
    price: 3000,
    description:
    "MacBook Pro (16-inch, 2.3GHz 8-core 9th-Generation Intel Core i9, 16GB RAM, 1TB) - Silver ",
    popular: false,
    imageUrls: [
      "https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"
    ]

  },
  {
    id:13,
    name: "Microsoft Surface Pro 7",
    category: "Shop For Windows",
    price: 1000,
    description:
    "The Surface Pro 7 offers many compelling features. From a visual standpoint, it’s a beautiful device with a luxurious magnesium alloy case and a stunning 12.3-inch PixelSense touch display.  ",
    popular: true,
    imageUrls: [
      "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8559603/twarren_170512_1708_0002.0.jpg"
    ]

  },
  {
    id:14,
    name: "Microsoft Surface Laptop 3",
    category: "Shop For Windows",
    price: 500,
    description:
    "Microsoft Surface Laptop 1769 (KSR-00001) Intel Core i5, 8GB RAM, 128GB SSD, 13.5-in Touchscreen, Win10 S ",
    popular: true,
    imageUrls: [
      "https://m.media-amazon.com/images/I/61EJz6KKOKL._AC_SL1200_.jpg"
    ]

  },
  {
    id:15,
    name: "Alienware Area-51m",
    category: "Shop For Windows",
    price: 800,
    description:
    "CPU: Intel Core i7-9700 – i9-9900KGraphics: Nvidia GeForce RTX 2060 – 2080RAM: 16GB – 64GBScreen: 17.3-inch FHD (1920 x 1080) 60Hz Anti-Glare IPS – 144Hz IPS Nvidia G-SyncStorage: 1TB SSHD – 2TB RAID0 SSDs + 1TB SSHDOS: Windows 10 Home ",
    popular: true,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/FKqGGHdqqTtD5pY5zqiF9P-970-80.jpg.webp"
    ]

  },
  {
    id:16,
    name: "Galago Pro Laptop",
    category: "Shop For Linux",
    price: 768,
    description:
    "",
    popular: true,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/tBmufcMBh4cNJtsQa67yc5-970-80.jpg.webp"
    ]

  },
  {
    id:17,
    name: "Purism Librem",
    category: "Shop For Linux",
    price: 730,
    description:
    "",
    popular: false,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/DRN6fCj26wCxcsqcnyE2gY-970-80.jpg.webp"
    ]

  },
  {
    id:18,
    name: "Ortx Pro Laptop",
    category: "Shop For Linux",
    price: 800,
    description:
    " ",
    popular: true,
    imageUrls: [
      "https://cdn.mos.cms.futurecdn.net/6Qv5XDs2fA6h4QwrvfxWDf-970-80.jpg.webp"
    ]

  },

];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Shop For Windows",
    icon: "laptop_windows"
    
    
  },
  {
    name: "Shop For Mac",
    icon: "laptop_mac"
  },
  {
    name: "Shop For Linux",
    icon: "laptop"
  }
  ,
  {
    name: "Shop For iPhone",
    icon: "phone_iphone"
  },
  {
    name: "Shop For Android",
    icon: "android"
  }

  
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product Categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
