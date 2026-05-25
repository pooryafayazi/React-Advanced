// src/graphql/resolvers.js

const REAL_MOCK_DATA = [
  {
    id: '1',
    title:
      'Suspected gunman dead after exchanging fire with Secret Service near White House - The Washington Post',
    description:
      'The alleged suspect had previously tried to enter the White House complex, according to court records...',
    url: 'https://www.washingtonpost.com/politics/2026/05/23/gunshots-fired-near-white-house-fbi-director-says/',
    image:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://cloudfront-us-east-1.images.arcpublishing.com/wapo/DOMGBEAVS3E3EADK4KEZRIQGDU.JPG&w=1440',
    publishedAt: '2026-05-24T12:38:32Z',
    category: 'politics',
  },
  {
    id: '2',
    title: 'Red Cross volunteers die from suspected Ebola in DR Congo - BBC',
    description:
      'They are thought to have caught the virus before the outbreak was identified, the Red Cross says.',
    url: 'https://www.bbc.com/news/articles/c759knxln0wo',
    image:
      'https://ichef.bbci.co.uk/news/1024/branded_news/f4e9/live/1fde0380-56bc-11f1-89a3-d1f559421220.jpg',
    publishedAt: '2026-05-24T11:09:54Z',
    category: 'health',
  },
  {
    id: '3',
    title:
      'Suicide car bomb attack on train in Pakistan kills at least 24 - Al Jazeera',
    description:
      'The Balochistan Liberation Army has claimed responsibility for the attack.',
    url: 'https://www.aljazeera.com/news/2026/5/24/bomb-attack-in-pakistans-balochistan-province-kills-more-than-20-people',
    image:
      'https://www.aljazeera.com/wp-content/uploads/2026/05/afp_6a12aa73a2ce-1779608179.jpg?resize=1920%2C1080',
    publishedAt: '2026-05-24T11:29:06Z',
  },
  {
    id: '4',
    title:
      "Second Ebola treatment center set on fire in epicenter of disease's outbreak - CBS News",
    description:
      'Angry residents of a town at the epicenter of the Ebola outbreak in eastern Congo​ attacked and burned a tent that was part of a health center where people are being treated for the virus.',
    url: 'https://www.cbsnews.com/news/ebola-congo-epicenter-treatment-center-set-on-fire/',
    image:
      'https://assets3.cbsnewsstatic.com/hub/i/r/2026/05/24/550a4c9d-c063-43bc-af55-5e292f1f0ba5/thumbnail/1200x630/c5361362c76b4b91b7048db2d599ddde/ap26143623280557.jpg',
    publishedAt: '2026-05-24T10:55:03Z',
  },
  {
    id: '5',
    title:
      'Russia uses hypersonic Oreshnik missile in mass attack on Kyiv - NPR',
    description:
      'Ukrainian President Volodymyr Zelenskyy said Sunday Russia used the powerful hypersonic Oreshnik ballistic missile during a mass drone and missile attack on Kyiv on Sunday that killed at least two people.',
    url: 'https://www.npr.org/2026/05/24/nx-s1-5833050/russia-uses-hypersonic-oreshnik-missile-in-mass-attack-on-kyiv',
    image:
      'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8108x4561+0+422/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F49%2F38%2Fdc930a8248169e7d05a2e9d03b4b%2Fap26144194965543.jpg',
    publishedAt: '2026-05-24T09:12:28Z',
  },
  {
    id: '6',
    title:
      '‘Homeland Security’ has spawned political insecurity since DHS was born - NPR',
    description:
      'DHS was originally conceived in the interest of unity and harmony — and the phrase "homeland security" was originally meant to be reassuring.',
    url: 'https://www.npr.org/2026/05/24/nx-s1-5821574/homeland-security-dhs-history',
    image:
      'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5448x3064+0+284/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F43%2F4b%2F6f48c3c14ead8ac61b43ef4ff03a%2Fgettyimages-2255143480.jpg',
    publishedAt: '2026-05-24T09:00:00Z',
  },
  {
    id: '7',
    title:
      'Johnny Manziel breezes past social media influencer in MMA debut - New York Post',
    description:
      'Johnny Manziel made his amateur MMA debut Saturday at Brand Risk 14, making quick work ‌of social media ​influencer Bob Menery in a bout in Las Vegas.',
    url: 'https://nypost.com/2026/05/24/sports/johnny-manziel-beats-social-media-influencer-in-mma-debut/',
    image:
      'https://nypost.com/wp-content/uploads/sites/2/2026/05/newspress-collage-z4j0d5rld-1779612911558.jpg?quality=75&strip=all&1779598527&w=1200',
    publishedAt: '2026-05-24T08:57:00Z',
  },
  {
    id: '8',
    title:
      "Prediction: It's Only a Matter of Time Before President Donald Trump and Fed Chair Kevin Warsh Are Butting Heads -- and Wall Street May Be the Big Loser - Yahoo Finance",
    description:
      "Economic dynamics and the new Fed chair's strong views on monetary policy have Warsh and Trump on a collision course.",
    url: 'https://www.fool.com/investing/2026/05/24/prediction-trump-fed-chair-warsh-feuding-wall-st/',
    image:
      'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F870725%2Fpresident-donald-trump-wh-photo-speak-jerome-powell-daniel-torok.jpg&w=1200&op=resize',
    publishedAt: '2026-05-24T08:26:00Z',
  },
  {
    id: '9',
    title:
      '9-story building under construction in the Philippines collapses, leaving 21 people missing - AP News',
    description:
      'A nine-story building under construction in a city north of the Philippine capital Manila. Police and officials say 24 workers managed to get out or were rescued and at least 21 remain missing. The building collapsed before dawn on Sunday after a fierce thund…',
    url: 'https://apnews.com/article/philippines-building-collapse-missing-006061ba614cf54656a19c1f4b429877',
    image:
      'https://dims.apnews.com/dims4/default/ca04785/2147483647/strip/true/crop/5136x3422+0+1/resize/980x653!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff6%2Fed%2Fedf5fba299639197ab6679a019ae%2F8506b15a62b14514bfd27a4336327774',
    publishedAt: '2026-05-24T07:57:00Z',
  },
  {
    id: '10',
    title:
      'Video: Ray J knocked out by Supah Hot Fire at Brand Risk 14 - MMA Fighting',
    description: 'Ray J gets caught by Supah Hot Fire in second round',
    url: 'https://www.mmafighting.com/latest-news/490446/video-ray-j-gets-knocked-out-by-supah-hot-fire-at-brand-risk-14',
    image:
      'https://platform.mmafighting.com/wp-content/uploads/sites/109/2026/05/Screenshot-2026-05-24-at-3.02.57AM.png?quality=90&strip=all&crop=0,3.8233377525111,100,92.353324494978',
    publishedAt: '2026-05-24T07:05:24Z',
  },
]

export const resolvers = {
  Query: {
    topHeadlines: async (_, { category }) => {
      console.log('Serving News from Mock Data...')
      return REAL_MOCK_DATA
    },
  },
}
