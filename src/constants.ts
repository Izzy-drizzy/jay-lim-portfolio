import { ActorInfo, Project, BTSContent } from './types';


export const JAY_LIM_INFO: ActorInfo = {
  name: "Jay Lim",
  title: "Actor",
  location: "",
  bio: "Jay Lim is a versatile actor and stunt performer known for his compelling performances across film and theatre. With a background in classical training and a keen eye for contemporary storytelling, he brings depth and authenticity to every role. His work explores the complexities of human emotion and the subtle nuances of character relationships.",
  showreelUrl: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318228/Jay_Final_Showreel_vvqvmw.mp4",
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    imdb: "https://imdb.com"
  }
};

export const PROJECTS: Project[] = [
  // — TV —
  {
    id: "tv-2",
    title: "Wedding Season",
    role: "Supporting Role",
    year: 2022,
    genre: "Dark Comedy / Thriller",
    synopsis: "A forbidden affair at a wedding spirals into murder and distrust. Katie and Stefan, once lovers, are pitted against each other uncovering the truth behind a deadly wedding tragedy.",
    imageUrl: "/assets/photo/Film/TV series The Wedding Seasons.jpg",
    category: "TV",
    gallery: [
      { type: "image", url: "/assets/photo/Film/TV series The Wedding Seasons.jpg" },
    ]
  },
  {
    id: "tv-3",
    title: "The Window",
    role: "Supporting Role",
    year: 2022,
    genre: "Drama",
    synopsis: "A look at the multi-billion dollar business surrounding international professional football, where players are bought and sold at the end of the English Super League season.",
    imageUrl: "/assets/photo/Film/Drama The Window 1.jpg",
    category: "TV",
    gallery: [
      { type: "image", url: "/assets/photo/Film/Drama The Window 1.jpg" },
      { type: "image", url: "/assets/photo/Film/Drama The Window 2.jpg" },
      { type: "image", url: "/assets/photo/Film/Drama The Window 3.jpg" },
      { type: "image", url: "/assets/photo/Film/Drama The Window 4.jpg" },
      { type: "image", url: "/assets/photo/BTS/Drama The Windows set.jpg", caption: "On set between takes" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318235/filming_set_Drama_The_Window_scene_Jay_is_about_to_die_p9ympo.mp4", caption: "Final moments — pre-scene" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318237/filming_set_Drama_The_Window_scene_Jay_dies_iveney.mp4", caption: "Death scene — behind the camera" },
    ]
  },
  {
    id: "tv-4",
    title: "Strike Back",
    role: "Guest Role",
    year: 2015,
    genre: "Action / Spy Thriller",
    synopsis: "Follows the actions of Section 20, a secretive unit of British military intelligence. A team of special operations personnel conduct several high-risk missions across the globe.",
    imageUrl: "/assets/photo/Strike back 1.png",
    category: "TV",
    gallery: [
      { type: "image", url: "/assets/photo/Strike back 1.png" },
      { type: "image", url: "/assets/photo/Strike back 2.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318304/Strike_Back_Season_5_episode5_Jay_Lim_clips_jofusq.mp4", caption: "Season 5 — Jay's scenes" },
      { type: "video", url: "/assets/video/Film/Strike_Back S5episode5 Jay Lim dies.mp4", caption: "Season 5 Episode 5 — final scene" }, // not yet on Cloudinary
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318333/Jay_Lim_fight_clip_1_1_da0rwf.mp4", caption: "Fight sequence" },
    ]
  },
  {
    id: "tv-5",
    title: "Obsession: Dark Desires",
    role: "Lead",
    year: 2024,
    genre: "Crime / Docudrama",
    synopsis: "A bone-chilling documentary series exploring real life stories of obsession told by the victims — from chance encounters to dangerous fixations.",
    imageUrl: "/assets/photo/Film/TV series The Dark Desires.jpg",
    category: "TV",
    gallery: [
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires.jpg" },
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires 2.jpg" },
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires 3.jpg" },
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires 4.jpg" },
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires 5.png" },
      { type: "image", url: "/assets/photo/Film/TV series The Dark Desires 6.jpg" },
    ]
  },

  // — Film —
  {
    id: "film-1",
    title: "My Son Hunter",
    role: "Supporting Role",
    year: 2022,
    genre: "Biography / Drama",
    synopsis: "A fictional retelling of the lifestyle and scandals of Hunter Biden, son of US President Joe Biden, exploring themes of privilege, addiction, and political corruption.",
    imageUrl: "/assets/photo/My son hunter Thumbnail.png",
    category: "Film",
    gallery: [
      { type: "image", url: "/assets/photo/My son hunter Thumbnail.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318316/My_Son_Hunter_Jay_part_cuqcee.mp4", caption: "Jay's scenes" },
    ]
  },
  {
    id: "film-2",
    title: "Adults in the Room",
    role: "Supporting Role",
    year: 2019,
    genre: "Drama",
    synopsis: "Greece, 2015 — the economy is in tatters and the country is on the verge of bankruptcy. A new government rebels against the EU's iron-fisted rule, inspiring millions of Europeans.",
    imageUrl: "/assets/photo/Adults in the room thumbnail.png",
    category: "Film",
    gallery: [
      { type: "image", url: "/assets/photo/Adults in the room thumbnail.png" },
    ]
  },
  {
    id: "film-3",
    title: "Sea of Mirrors",
    role: "Supporting Role",
    year: 2019,
    genre: "Thriller",
    synopsis: "A former famous Japanese actress races to find her kidnapped daughter before her obsession with the limelight and the thrills of Macau push her to the brink of madness.",
    imageUrl: "/assets/photo/Film/20160509_133138.jpg",
    category: "Film",
    gallery: [
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318333/Jay_Lim_fight_clip_1_1_da0rwf.mp4", caption: "Fight sequence" },
      { type: "image", url: "/assets/photo/Film/20160509_133138.jpg" },
      { type: "image", url: "/assets/photo/Sea of mirrors thumbnail.png" },
      { type: "image", url: "/assets/photo/Film/Screenshot_20210613-152049_Video Player.jpg" },
      { type: "image", url: "/assets/photo/Film/Screenshot_20210613-145756_Video Player.jpg" },
      { type: "image", url: "/assets/photo/BTS/20180518_105802.png", caption: "Featured in Macau Daily" },
    ]
  },
  {
    id: "film-4",
    title: "Homefront: The Revolution",
    role: "Voice Actor",
    year: 2016,
    genre: "Action / Sci-Fi",
    synopsis: "An open-world first-person shooter set in 2029 Philadelphia, occupied by the North Korean Army. The Resistance fights back in a gripping cinematic action experience.",
    imageUrl: "/assets/photo/Homefront thumbnail.png",
    category: "Film",
    gallery: [
      { type: "image", url: "/assets/photo/Homefront thumbnail.png" },
    ]
  },

  // — Theatre —
  {
    id: "th-1",
    title: "Macbeth",
    role: "Lead",
    year: 2023,
    genre: "Tragedy",
    synopsis: "Shakespeare's timeless tale of ambition, power, and moral corruption brought to the stage with visceral intensity and contemporary staging.",
    imageUrl: "/assets/photo/Theatre/Mcbeth1.jpg",
    category: "Theatre",
    gallery: [
      { type: "image", url: "/assets/photo/Theatre/Mcbeth1.jpg" },
      { type: "image", url: "/assets/photo/Theatre/Mcbeth2.jpg" },
    ]
  },
  {
    id: "th-2",
    title: "Anything Goes",
    role: "Featured Role",
    year: 2021,
    genre: "Musical Comedy",
    synopsis: "Cole Porter's beloved musical comedy set aboard a luxury ocean liner, filled with romance, mistaken identity, and show-stopping song and dance numbers.",
    imageUrl: "/assets/photo/Theatre/Musical Anthing Goes.jpg",
    category: "Theatre",
    gallery: [
      { type: "image", url: "/assets/photo/Theatre/Musical Anthing Goes.jpg" },
      { type: "image", url: "/assets/photo/Theatre/Musiacal Anything Goes 2.jpg" },
    ]
  },
  {
    id: "th-3",
    title: "The King and I",
    role: "Featured Role",
    year: 2018,
    genre: "Musical Drama",
    synopsis: "Rodgers and Hammerstein's sweeping classic exploring the evolving relationship between the King of Siam and a strong-willed British schoolteacher.",
    imageUrl: "/assets/photo/BTS/Musical The King and I.jpg",
    category: "Theatre",
    gallery: [
      { type: "image", url: "/assets/photo/BTS/Musical The King and I.jpg", caption: "In costume as the King of Siam" },
      { type: "image", url: "/assets/photo/BTS/Musical The King and I with other actors.JPG", caption: "Backstage with the cast" },
      { type: "image", url: "/assets/photo/BTS/Musical The King and I all actors and crew.JPG", caption: "Full company call" },
      { type: "image", url: "/assets/photo/BTS/Musical The King And I with children actors.JPG", caption: "With the young cast" },
    ]
  },
  {
    id: "th-4",
    title: "Panto in UK",
    role: "The Cat",
    year: 2017,
    genre: "Pantomime",
    synopsis: "A beloved British pantomime tradition brought to life on stage, with Jay playing the iconic Cat character to sell-out audiences across the UK.",
    imageUrl: "/assets/photo/Theatre/Panto in U.K.png",
    category: "Theatre",
    gallery: [
      { type: "image", url: "/assets/photo/Theatre/Panto in U.K.png" },
      { type: "image", url: "/assets/photo/Theatre/Panto in U.K played CAT.png", caption: "As The Cat" },
    ]
  },

  // — Commercial —
  {
    id: "com-1",
    title: "Heineken",
    role: "Lead",
    year: 2023,
    genre: "Commercial",
    synopsis: "International brand campaign for Heineken, shot on location with Jay in a lead role across a multi-platform global campaign.",
    imageUrl: "/assets/photo/Commercial/Heinecken beer commercial film 1.png",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Commercial/Heinecken beer commercial film 1.png" },
      { type: "image", url: "/assets/photo/Commercial/Heineken beer commercial film 2.png" },
      { type: "image", url: "/assets/photo/Commercial/Heineken beer commercial film set.jpg", caption: "Production setup" },
      { type: "image", url: "/assets/photo/BTS/Heineken beer commercial film set 2.jpg", caption: "Behind the scenes" },
    ]
  },
  {
    id: "com-2",
    title: "Google",
    role: "Lead",
    year: 2022,
    genre: "Commercial",
    synopsis: "A campaign for Google placing Jay at the centre of a story about human curiosity and connection, distributed globally across digital platforms.",
    imageUrl: "/assets/photo/Commercial/Google Commercial photo shoot.jpg",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Commercial/Google Commercial photo shoot.jpg" },
      { type: "image", url: "/assets/photo/Commercial/1673612319704.jpg" },
    ]
  },
  {
    id: "com-3",
    title: "OMO",
    role: "Featured",
    year: 2022,
    genre: "Commercial",
    synopsis: "International commercial for OMO detergent, distributed across Vietnam and South East Asia — Jay's likeness was featured on the final product packaging.",
    imageUrl: "/assets/photo/Commercial/OMO studio shooting chosen ones.jpg",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Commercial/OMO studio shooting chosen ones.jpg" },
      { type: "image", url: "/assets/photo/Commercial/OMO result actual product in Vietnam.jpg", caption: "Final product — Vietnam market" },
      { type: "image", url: "/assets/photo/BTS/OMO studio shooting.jpg", caption: "Studio shoot, between setups" },
    ]
  },
  {
    id: "com-4",
    title: "Doritos: Squid Game",
    role: "Lead",
    year: 2025,
    genre: "Commercial",
    synopsis: "High-concept Doritos campaign inspired by the global Squid Game phenomenon, with Jay leading a cinematic recreation of the show's iconic imagery.",
    imageUrl: "/assets/photo/Doritos x Squid game.png",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Doritos x Squid game.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318252/Doritos_squid_game_3_Jay_oor4ln.mp4", caption: "Campaign film" },
    ]
  },
  {
    id: "com-5",
    title: "Hyundai i35",
    role: "Featured",
    year: 2016,
    genre: "Commercial",
    synopsis: "International TV commercial for the Hyundai i35, showcasing the vehicle's sleek design and performance through a stylised cinematic lens.",
    imageUrl: "/assets/photo/Hyundai.png",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Hyundai.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318252/Hyundai_TVCommercial_i35_q9iuyu.mp4", caption: "TV commercial" },
    ]
  },
  {
    id: "com-6",
    title: "GoToMeeting",
    role: "Lead — Ben",
    year: 2015,
    genre: "Commercial",
    synopsis: "Comedy commercial series for GoToMeeting, with Jay playing the lead character Ben across a widely distributed multi-part campaign.",
    imageUrl: "/assets/photo/Gotomeeting.png",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/Gotomeeting.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318252/Ben_Discovers_GoToMeeting_mitpqo.mp4", caption: "Ben Discovers GoToMeeting — campaign film" },
      { type: "image", url: "/assets/photo/BTS/20150904_112715.jpg", caption: "On set" },
    ]
  },
  {
    id: "com-7",
    title: "The Guardian / Ethax",
    role: "Lead",
    year: 2025,
    genre: "Commercial",
    synopsis: "Brand campaign for The Guardian newspaper in association with Ethax, with Jay in the central role across a high-profile UK media campaign.",
    imageUrl: "/assets/photo/The guardian ethax.png",
    category: "Commercial",
    gallery: [
      { type: "image", url: "/assets/photo/The guardian ethax.png" },
      { type: "video", url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318266/THE_GUARDIAN-Ethax-_Jay_Lim_bcqfvz.mp4", caption: "Campaign film" },
      { type: "image", url: "/assets/photo/Commercial/my face in london tube station.png", caption: "London Underground advertising" },
    ]
  }
];

export const BTS_GALLERY: BTSContent[] = [
  {
    id: "bts-1",
    title: "In Costume — The King and I",
    type: "image",
    url: "/assets/photo/BTS/Musical The King and I.jpg",
    anecdote: "Getting into the King of Siam required more than just the costume — the shaved head, the posture, the stillness. The moment I looked in the mirror in full costume, everything clicked into place."
  },
  {
    id: "bts-2",
    title: "On Set — The Window",
    type: "image",
    url: "/assets/photo/BTS/Drama The Windows set.jpg",
    anecdote: "The dinner scene on The Window was one of the most detailed setups I've been a part of — every prop on that table was deliberate. Watching the director work through each angle between takes was a masterclass."
  },
  {
    id: "bts-3",
    title: "Final Moments — The Window",
    type: "video",
    url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318235/filming_set_Drama_The_Window_scene_Jay_is_about_to_die_p9ympo.mp4",
    anecdote: "The moment just before my character's final scene. There's a strange calm that descends before a big emotional beat — the crew goes quiet, and everything narrows to just the scene in front of you."
  },
  {
    id: "bts-4",
    title: "Heineken Commercial Set",
    type: "image",
    url: "/assets/photo/BTS/Heineken beer commercial film set 2.jpg",
    anecdote: "The scale of this production was something else — two full scissor lifts rigging lights over a massive studio floor. The Heineken team flew in a full international crew for this campaign."
  },
  {
    id: "bts-5",
    title: "OMO Studio Shoot",
    type: "image",
    url: "/assets/photo/BTS/OMO studio shooting.jpg",
    anecdote: "Between setups on the OMO shoot. The brief was simple — natural, relaxed, effortless. The hardest thing to manufacture in front of a camera is ease."
  },
  {
    id: "bts-6",
    title: "Backstage — The King and I",
    type: "image",
    url: "/assets/photo/BTS/Musical The King and I with other actors.JPG",
    anecdote: "The dressing room before curtain up. This cast became a family over the run — the energy backstage was just as electric as anything we put on stage."
  },
  {
    id: "bts-7",
    title: "Company Call — The King and I",
    type: "image",
    url: "/assets/photo/BTS/Musical The King and I all actors and crew.JPG",
    anecdote: "The full company on stage after a show. These group moments are rare — you look around and realise how many people it takes to make this world exist for two hours every night."
  },
  {
    id: "bts-8",
    title: "With the Young Cast — The King and I",
    type: "image",
    url: "/assets/photo/BTS/Musical The King And I with children actors.JPG",
    anecdote: "The children in the company were extraordinary — fearless, committed, and more professional than most adults I've worked with. These backstage moments were always the highlight of the run."
  },
  {
    id: "bts-9",
    title: "Death Scene — The Window",
    type: "video",
    url: "https://res.cloudinary.com/dd2dxo3lo/video/upload/q_auto/f_auto/v1775318237/filming_set_Drama_The_Window_scene_Jay_dies_iveney.mp4",
    anecdote: "The moment the director called action on this scene, everything fell away. Dying on camera is one of the stranger experiences in this job — there's a stillness to it that stays with you long after wrap."
  },
  {
    id: "bts-10",
    title: "Military Prep",
    type: "image",
    url: "/assets/photo/BTS/20170128_130020.jpg",
    anecdote: "Full military costume between setups. The physicality of wearing a uniform changes how you carry yourself — the costume does half the character work before you've said a single line."
  },
  {
    id: "bts-11",
    title: "On Set — GoToMeeting",
    type: "image",
    url: "/assets/photo/BTS/20150904_112715.jpg",
    anecdote: "The GoToMeeting shoot was a tight, fast-moving production. Commercial work operates on a completely different rhythm to film — everything moves in fifteen-minute blocks and you have to be ready."
  },
  {
    id: "bts-12",
    title: "Sea of Mirrors — Press",
    type: "image",
    url: "/assets/photo/BTS/20180518_105802.png",
    anecdote: "Seeing the film featured in the Macau Daily was surreal — a reminder that this work travels further than you expect, and lands with audiences you never get to meet."
  },
  {
    id: "bts-13",
    title: "On the Way to Set",
    type: "image",
    url: "/assets/photo/BTS/Screenshot_20240105_161637_Gallery.jpg",
    anecdote: "The commute to set. Every job has its own version of this moment — half awake, running lines in your head before the day begins."
  }
];
