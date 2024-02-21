export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 12 Pro Max, 256GB, Pacific Blue ',
    price: 799,
    rating: "4.8/5",
    link: "https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_1?crid=5VXR45DIF3OI&keywords=Apple+iPhone+12+Pro+Max%2C+256GB%2C+Pacific+Blue&qid=1647374235&sprefix=apple+iphone+12+pro+max%2C+256gb%2C+pacific+blue%2Caps%2C229&sr=8-1",
    image: 'https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg',
    description: "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information."
  },
  {
    id: 2,
    name: 'Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)',
    price: 699,
    rating: "4.6/5",
    link: "https://www.amazon.com/Redragon-S101-Keyboard-Ergonomic-Programmable/dp/B00NLZUM36/ref=sr_1_3?crid=8AJNIJXEFI6Q&keywords=Redragon+S101+Wired+Gaming+Keyboard+and+Mouse+Combo+RGB+Backlit+Gaming+Keyboard+with+Multimedia+Keys+Wrist+Rest+and+Red+Backlit+Gaming+Mouse+3200+DPI+for+Windows+PC+Gamers+%28Black%29&qid=1647375893&sprefix=apple+iphone+12+pro+max%2C+256gb%2C+pacific+blue%2Caps%2C235&sr=8-3",
    image:'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
    description: 'PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version)'
  },
  {
    id: 3,
    name: 'YSSOA Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair, Black/Red',
    price: 1000,
    rating: "4.9/5",
    link: "https://www.amazon.com/YSSOA-Office-Computer-Ergonomic-Chair/dp/B09B3PXRS2/ref=sr_1_1?crid=3KV83XHUCV3PY&keywords=YSSOA+Backrest+and+Seat+Height+Adjustable+Swivel+Recliner+Racing+Office+Computer+Ergonomic+Video+Game+Chair%2C+Black%2FRed&qid=1647375923&sprefix=yssoa+backrest+and+seat+height+adjustable+swivel+recliner+racing+office+computer+ergonomic+video+game+chair%2C+black%2Fred%2Caps%2C246&sr=8-1",
    image:'https://m.media-amazon.com/images/I/61O4ilN5v1S._AC_SL1500_.jpg',
    description: "The ergonomic body-hugging high back provides lumbar support and naturally follows your spine's natural curve. It is tall enough to support your entire spine. The back can be adjusted from 90° to 120°. The ergonomic armrest allows you to put hands on the armrest to relax."
  },
  {
    id: 4,
    name: 'Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce RTX 2060, 15.6" Full HD 144Hz Display, 3ms Response Time, 16GB DDR4, 512GB PCIe NVMe SSD, RGB Backlit Keyboard, PH315-52-75DE,Black',
    price: 1564.99,
    rating: "4.5/5",
    link: "https://www.amazon.com/Acer-Predator-i7-9750H-Response-PH315-52-75DE/dp/B07YM9KTW4/ref=sr_1_15?crid=37AJ77HL8Q34M&keywords=Acer+Predator+Helios+300+Gaming+Laptop%2C+Intel+Core+i7-9750H%2C+GeForce+RTX+2060%2C+15.6%22+Full+HD+144Hz+Display%2C+3ms+Response+Time%2C+16GB+DDR4%2C+512GB+PCIe+NVMe+SSD%2C+RGB+Backlit+Keyboard%2C+PH315-52-75DE%2CBlack&qid=1647375956&sprefix=yssoa+backrest+and+seat+height+adjustable+swivel+recliner+racing+office+computer+ergonomic+video+game+chair%2C+black%2Fred%2Caps%2C225&sr=8-15",
    image:'https://m.media-amazon.com/images/I/71+Rn0JtpqL._AC_SL1364_.jpg',
    description: '9th Generation Intel Core i7-9750H 6-Core Processor (Up to 4. 5GHz) with Windows 10 Home 64 Bit'
  },
  {
    id: 5,
    name: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games',
    price: 49.99,
    rating: "4.3/5",
    link: "https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_3?crid=2FSPAOEKS12HB&keywords=BENGOO+G9000+Stereo+Gaming+Headset+for+PS4+PC+Xbox+One+PS5+Controller%2C+Noise+Cancelling+Over+Ear+Headphones+with+Mic%2C+LED+Light%2C+Bass+Surround%2C+Soft+Memory+Earmuffs+for+Laptop+Mac+Nintendo+NES+Games&qid=1647375993&sprefix=bengoo+g9000+stereo+gaming+headset+for+ps4+pc+xbox+one+ps5+controller%2C+noise+cancelling+over+ear+headphones+with+mic%2C+led+light%2C+bass+surround%2C+soft+memory+earmuffs+for+laptop+mac+nintendo+nes+games%2Caps%2C244&sr=8-3",
    image:'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg',
    description: 'Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.'
  },
  {
    id: 6,
    name: 'Playstation Sony 4, 500GB Slim System [CUH-2215AB01], Black, 3003347',
    price: 483.83,
    rating: "4.7/5",
    link: "https://www.amazon.com/Sony-Playstation-Video-Console-500GB/dp/B07KJXZX94/ref=sr_1_1?crid=20VN7K5IXFMM&keywords=Playstation+Sony+4%2C+500GB+Slim+System+%5BCUH-2215AB01%5D%2C+Black%2C+3003347&qid=1647376008&sprefix=playstation+sony+4%2C+500gb+slim+system+cuh-2215ab01+%2C+black%2C+3003347%2Caps%2C236&sr=8-1",
    image:'https://m.media-amazon.com/images/I/51HPlBnOoBL._AC_SL1500_.jpg',
    description: 'Brand New in box. The product ships with all relevant accessories'
  },
  {
    id: 7,
    name: 'Oculus Quest All-in-one VR Gaming Headset – 64GB (UK Import)',
    price: 379.99,
    rating: "4.7/5",
    link: "https://www.amazon.com/Oculus-Quest-All-Gaming-Headset-pc/dp/B07P6RJ39C/ref=sr_1_1?crid=TB8KWEP97K6A&keywords=Oculus+Quest+All-in-one+VR+Gaming+Headset+%E2%80%93+64GB+%28UK+Import%29&qid=1647376043&sprefix=playstation+sony+4%2C+500gb+slim+system+cuh-2215ab01+%2C+black%2C+3003347%2Caps%2C255&sr=8-1",
    image:'https://m.media-amazon.com/images/I/71nK+JjLzzL._SL1500_.jpg',
    description: 'Next level gameplay: Launching with original games and experiences like Vader Immortal: A Star Wars VR Series.'
  },
  {
    id: 8,
    name: 'Presto 07061 22-inch Electric Griddle With Removable Handles, Black, 22-inch',
    price: 590.99,
    rating: "4.8/5",
    link: "https://www.amazon.com/Presto-22-inch-Electric-Griddle-Removable/dp/B005FYF3OY/ref=sr_1_1?crid=1VRHBKBNW7RFD&keywords=Presto+07061+22-inch+Electric+Griddle+With+Removable+Handles%2C+Black%2C+22-inch&qid=1647376062&sprefix=presto+07061+22-inch+electric+griddle+with+removable+handles%2C+black%2C+22-inch%2Caps%2C233&sr=8-1",
    image:'https://m.media-amazon.com/images/I/61hqjITqd5L._AC_SL1500_.jpg',
    description: 'Premium nonstick surface provides stick-free cooking and easy cleaning. Slide-out drip tray removes and cleans easily.'
  },
  {
    id: 9,
    name: 'UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly, Makes a Great Gift for 7 Year Olds and Up',
    price: 9.99,
    rating: "4.8/5",
    link: "https://www.amazon.com/Family-Sturdy-Storage-Travel-Friendly-Exclusive/dp/B07P6MZPK3/ref=sr_1_1?crid=2EFMMJI7MNJHY&keywords=UNO+Family+Card+Game%2C+with+112+Cards+in+a+Sturdy+Storage+Tin%2C+Travel-Friendly%2C+Makes+a+Great+Gift+for+7+Year+Olds+and+Up&qid=1647376080&sprefix=uno+family+card+game%2C+with+112+cards+in+a+sturdy+storage+tin%2C+travel-friendly%2C+makes+a+great+gift+for+7+year+olds+and+up%2Caps%2C233&sr=8-1",
    image:'https://m.media-amazon.com/images/I/81LcVsRKnjS._AC_SL1500_.jpg',
    description: "UNO is the classic family card game that's easy to learn and so much fun to play!"
  },
  {
    id: 10,
    name: 'wolfyok Dumbbells Set, Adjustable Weights 3-in-1 Set Barbell 44Lb/66Lb, Home Gym Equipment for Men Women Gym Workout Fitness Exercise with Connecting Rod',
    price: 99.99,
    rating: "4.3/5",
    link: "https://www.amazon.com/wolfyok-Dumbbells-Adjustable-Equipment-Connecting/dp/B092ZM1DKP/ref=sr_1_1?crid=3ER7V258OC9LP&keywords=wolfyok+Dumbbells+Set%2C+Adjustable+Weights+3-in-1+Set+Barbell+44Lb%2F66Lb%2C+Home+Gym+Equipment+for+Men+Women+Gym+Workout+Fitness+Exercise+with+Connecting+Rod&qid=1647376099&sprefix=uno+family+card+game%2C+with+112+cards+in+a+sturdy+storage+tin%2C+travel-friendly%2C+makes+a+great+gift+for+7+year+olds+and+up%2Caps%2C269&sr=8-1",
    image:'https://m.media-amazon.com/images/I/61Wi68zBV5L._AC_SL1000_.jpg',
    description: "With dumbbells available in smaller size,totally up to 44 lbs, you're free to customize the weight setting to meet the training needs.Made of cement mixed substance and polyethylene, the fitness dumbbells kit provides you with various weight options, ranging from 12.8lbs to 44lbs. Key Product Features"
  }
];