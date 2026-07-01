import type { BlogDetailContent } from "@/features/blog/types/blog";

export const BLOG_DETAIL_CONTENT: BlogDetailContent = {
  heroImage: "/img/blog/blog-details-img.jpg",
  secondaryImage: "/img/blog/blog-details-img-2.jpg",
  paragraphs: [
    "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger. Plastered it's all gone to pot I brilliant young delinquent excuse my French",
    "Bugger all mate chinwag skive off bender cack chap baking cakes brown bread bodge wind up, amongst mush David lurgy burke blow off bits and bobs faff about dropped a clanger, such a fibber so I said spiffing codswallop bite your arm off my lady bleeding tosser.",
    "He legged it that blatant brown bread some dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get stuffed mate you mug cobblers off his nut pukka, give us a bell ummm I'm telling burke A bit of how's your father starkers daft hanky panky bog-standard golly gosh William a load of old tosh brolly Queen's English bits and bobs bugger, grub geeza cracking goal cheesed off bog baking cakes James Bond up the duff mufty morish do one wellies zonked I. Oxford smashing is blower bobby so I said, bleeder hunky-dory hanky panky codswallop grub, show off show off pick your nose .",
  ],
  featureList: [
    "Shop configurations",
    "Installing Sylius ecommerce shop",
    "Check system requirements",
    "Setting up the database",
    "Loading sample data for the environment",
    "Assets installation",
  ],
  quote: {
    text: "He legged it that blatant brown bread some dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get stuffed mate you mug cobblers off his nut pukka",
    author: "Jesus Requena",
    role: "Support Engineer, Aliexpress",
    avatar: "/img/blog/quote-author.png",
  },
  sectionTitle: "Install Sylius via SSH",
  sectionParagraph:
    "Nancy boy vagabond A bit of how's your father starkers baking cakes boot dropped a clanger my lady bender blow off bugger all mate, jolly good brolly posh ummm I'm telling get stuffed mate up the duff haggle lost the plot off his nut wind up loo, I don't want no agro.",
  tags: ["business", "web design", "software"],
  authorBio: {
    name: "Ahmad Bator",
    avatar: "/img/blog/author-1.png",
    bio: "Loo tomfoolery jolly good bloke chancer chimney pot nice one a, he nicked it mufty Oxford say wind up bits and bobs cheeky bugger, amongst cack bugger Eaton William skive off.!",
  },
  relatedSlugs: ["why-set-impossible-goals-for-2021", "how-our-revamped-api-can-help-your-finances"],
  comments: [
    {
      id: "1",
      author: "Karon Balina",
      avatar: "/img/blog/comment-1.png",
      date: "March 18, 2021",
      content:
        "Wouldn't it be better practice to use get_the_title(..) in this case? directly accessing the post object's data member would bypass applying filters and enforcing protected and private settings, unless that's explicitly desired.",
    },
    {
      id: "2",
      author: "Julias Roy",
      avatar: "/img/blog/comment-2.png",
      date: "March 18, 2021",
      content: "Thenks Demo User for Wouldn't it be better practice to use get_the_title.",
      isReply: true,
    },
    {
      id: "3",
      author: "Arista Williamson",
      avatar: "/img/blog/comment-3.png",
      date: "March 18, 2021",
      content:
        "Wouldn't it be better practice to use get_the_title(..) in this case? directly accessing the post object's data member would bypass applying filters and enforcing protected and private settings, unless that's explicitly desired.",
    },
  ],
};
