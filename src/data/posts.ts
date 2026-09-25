export const posts = [
  {
    slug: "my-best-friend",
    title: "My Best Friend",
    date: "2026-09-25",
    category: "Personal",
    excerpt: "A tribute to the closest friend who has supported me throughout my journey in life.",
    body: [
      "As one of the posts I wanted to share after writing about my setup, I chose to introduce my closest friend. He has been a huge part of my journey through life for many years and has always stood by me. He has never let me down or hurt me. To me, he is much more than a friend—he is like a brother. I’m writing this to introduce someone who means so much to me.",
      "His name is Yusuf. We first met on a Counter-Strike: Global Offensive community server, and from then on he became my closest friend. He has always been by my side throughout my journey in life, supporting every project I’ve worked on and every idea I’ve had.",
      "Whenever I spend time with him, it feels as though all the problems and worries outside simply disappear. We sit together, play games, laugh, and enjoy ourselves. Words can’t express how much those moments mean to me.",
      "Yusuf is truly one of the best people I’ve ever known and a wonderful friend. I hope our friendship lasts until the end of our lives. If I’m fortunate enough to have a beautiful life one day, I will never forget Yusuf, and there will always be a place for him in it. I’ll do everything I can to help make his life as wonderful as possible, too."
    ],
    closing: "I’m so glad you’re here, and so glad to have you in my life. 🤍"
  },
  {
    slug: "building-this-site",
    title: "Building this site from scratch",
    date: "2026-09-19",
    category: "Web",
    excerpt: "Why I chose a lightweight static site and what I want this corner of the internet to become. 🌐",
    body: [
      "I wanted a personal site that feels like mine instead of another generic portfolio template. ✨",
      "The current version is intentionally small: a home page, an about page, projects, and a blog. I can keep expanding it without turning the project into a complicated application. 🧱",
      "Astro gives me the parts I need for a fast static site while still letting me write ordinary HTML, CSS and a little TypeScript when I want more control. ⚡"
    ]
  },
  {
    slug: "things-im-learning",
    title: "Things I'm learning",
    date: "2026-09-18",
    category: "Notes",
    excerpt: "A running list of technologies, ideas and small experiments that I want to understand better. 💡",
    body: [
      "This page is a living notebook rather than a finished curriculum. 📓",
      "I am collecting topics that seem useful, interesting or simply fun to explore, then turning the ones that stick into projects or longer posts. 🔎"
    ]
  },
  {
    slug: "my-current-setup",
    title: "My current setup",
    date: "2026-09-25",
    category: "Setup",
    excerpt: "A closer look at the MSI Katana 17 B12VFK and its gaming-focused hardware. 💻",
    body: [
      "Processor: 12th Gen Intel Core i7-12650H, with 10 cores (6 performance cores and 4 efficiency cores) and a maximum turbo frequency of 4.7 GHz.",
      "Graphics: NVIDIA GeForce RTX 4060 Laptop GPU with 8 GB of GDDR6 memory and up to 105 W maximum graphics power with Dynamic Boost.",
      "Display: 17.3-inch Full HD (1920 × 1080) IPS-level panel with a 144 Hz refresh rate.",
      "Memory: 16 GB DDR5 RAM. The laptop supports DDR5-4800 memory across two slots, up to 64 GB total.",
      "Storage: Two M.2 slots for NVMe PCIe Gen 4 SSDs. The included SSD capacity varies by configuration.",
      "Connectivity: Gigabit Ethernet, Wi-Fi 6, Bluetooth 5.2, HDMI 2.1, one USB-C 3.2 Gen 1 port with DisplayPort, two USB-A 3.2 Gen 1 ports, one USB-A 2.0 port and a combined microphone/headphone jack.",
      "Other details: Four-zone RGB keyboard, 53.5 Wh three-cell battery, 200 W power adapter and approximately 2.6 kg weight.",
      "Specifications can vary between B12VFK regional product codes; RAM and SSD capacity in particular depend on the exact SKU."
    ],
    sourceUrl: "https://www.msi.com/Laptop/Katana-17-B12VX/Specification"
  }
];

const hiddenArchiveSlugs = new Set(["building-this-site", "things-im-learning"]);

export const archivePosts = posts
  .filter((post) => !hiddenArchiveSlugs.has(post.slug))
  .sort((a, b) => b.date.localeCompare(a.date));
