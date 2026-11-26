/*
  Favorite Finds listed on /links.

  How to add a product (newest first):
  1. Copy the product photo into ../images/finds/ and name it
     NN-short-slug.jpg (use the next find number).
  2. Add a new object at the TOP of FAVORITE_FINDS so it appears first
     among the numbered picks, or append and keep `num` in order.
  3. Set `num` so social posts can say "Find #12".
  4. Fill name, blurb, url (include ?tag=billmills-20), image, width, height, alt.

  FAVORITE_FINDS is batch 2 (Find #1–#30) plus ongoing picks (Find #31 on). EARLIER_FINDS is the first
  six picks, listed separately so the new post numbers stay unique.
*/
window.FAVORITE_FINDS = [
  {
    num: 1,
    name: "Clever Fox Budget Planner",
    blurb: "An undated planner with monthly trackers for bills, spending, and savings, ready to start any time of year.",
    url: "https://www.amazon.com/dp/B07NP8R47X?tag=billmills-20",
    image: "../images/finds/01-clever-fox-budget-planner.jpg",
    width: 1500,
    height: 1491,
    alt: "A dark green Clever Fox undated budget planner."
  },
  {
    num: 2,
    name: "Antner A6 Budget Binder",
    blurb: "A compact A6 binder with zipper envelopes and labels for cash stuffing at home or on the go.",
    url: "https://www.amazon.com/dp/B08YDG3Q3Y?tag=billmills-20",
    image: "../images/finds/02-antner-a6-budget-binder.jpg",
    width: 1497,
    height: 1500,
    alt: "A navy Antner A6 budget binder with zipper cash envelopes."
  },
  {
    num: 3,
    name: "Nokingo Undated A5 Budget Planner",
    blurb: "An undated A5 notebook for tracking income, bills, and spending for a full year, starting any month you like.",
    url: "https://www.amazon.com/dp/B08P47MVC5?tag=billmills-20",
    image: "../images/finds/03-nokingo-a5-budget-planner.jpg",
    width: 962,
    height: 1339,
    alt: "A teal Nokingo undated A5 budget planner."
  },
  {
    num: 4,
    name: "The Total Money Makeover",
    blurb: "A clear, step-by-step debt payoff plan that pairs well with a written budget and monthly trackers.",
    url: "https://www.amazon.com/dp/140034252X?tag=billmills-20",
    image: "../images/finds/04-total-money-makeover.jpg",
    width: 1165,
    height: 1500,
    alt: "Hardcover of The Total Money Makeover by Dave Ramsey."
  },
  {
    num: 5,
    name: "SKYDUE Expanding File Organizer",
    blurb: "A letter-size accordion file with 8 labeled pockets for receipts, bills, and tax papers.",
    url: "https://www.amazon.com/dp/B0C77GP9XB?tag=billmills-20",
    image: "../images/finds/05-skydue-expanding-file.jpg",
    width: 1466,
    height: 1500,
    alt: "A blue SKYDUE 8-pocket letter-size expanding file organizer."
  },
  {
    num: 6,
    name: "The Beginner's Bible",
    blurb: "A gentle story Bible with simple words and bright pictures — a companion to kids' Bible coloring pages, not another coloring book.",
    url: "https://www.amazon.com/dp/031075013X?tag=billmills-20",
    image: "../images/finds/06-beginners-bible.jpg",
    width: 1238,
    height: 1500,
    alt: "Hardcover of The Beginner's Bible: Timeless Children's Stories."
  },
  {
    num: 7,
    name: "The Jesus Storybook Bible",
    blurb: "Familiar Bible stories in a warm, readable style for bedtime or a quiet Sunday, alongside coloring pages.",
    url: "https://www.amazon.com/dp/0310708257?tag=billmills-20",
    image: "../images/finds/07-jesus-storybook-bible.jpg",
    width: 1200,
    height: 1200,
    alt: "Hardcover of The Jesus Storybook Bible."
  },
  {
    num: 8,
    name: "Indescribable: God and Science Devotions",
    blurb: "Short kids' devotions that connect Bible truths with simple science, from stars to animals.",
    url: "https://www.amazon.com/dp/0718086104?tag=billmills-20",
    image: "../images/finds/08-indescribable-devotions.jpg",
    width: 1128,
    height: 1500,
    alt: "The kids devotion book Indescribable: 100 Devotions About God and Science."
  },
  {
    num: 9,
    name: "The Action Bible",
    blurb: "A comic-book style story Bible older kids often pick up on their own — not a coloring book.",
    url: "https://www.amazon.com/dp/083077744X?tag=billmills-20",
    image: "../images/finds/09-action-bible.jpg",
    width: 1006,
    height: 1500,
    alt: "The Action Bible: God's Redemptive Story."
  },
  {
    num: 10,
    name: "KASANYER Bible Verse Stickers",
    blurb: "A 200-piece pack of Bible verse and Christian stickers for Sunday school, crafts, and coloring pages.",
    url: "https://www.amazon.com/dp/B0CG197T1K?tag=billmills-20",
    image: "../images/finds/10-bible-verse-stickers.jpg",
    width: 1075,
    height: 1066,
    alt: "A 200-piece pack of Christian Bible verse stickers for kids."
  },
  {
    num: 11,
    name: "Hot Wheels 10-Pack",
    blurb: "A 10-pack of classic 1:64 cars and trucks for the toy bin or a rainy day; styles may vary.",
    url: "https://www.amazon.com/dp/B000B6MKMO?tag=billmills-20",
    image: "../images/finds/11-hot-wheels-10-pack.jpg",
    width: 1500,
    height: 974,
    alt: "A 10-pack of Hot Wheels die-cast cars and trucks."
  },
  {
    num: 12,
    name: "CAT Construction 3-Pack",
    blurb: "A sturdy 7-inch dump truck, loader, and excavator set that doesn't need batteries.",
    url: "https://www.amazon.com/dp/B07QGKGTK7?tag=billmills-20",
    image: "../images/finds/12-cat-construction-3-pack.jpg",
    width: 1500,
    height: 379,
    alt: "A CAT construction 3-pack with a dump truck, loader, and excavator."
  },
  {
    num: 13,
    name: "CAT Construction Dump Truck",
    blurb: "A 15-inch dump truck with a bed that tips, built from sturdy plastic for the sandbox or living room.",
    url: "https://www.amazon.com/dp/B07QFB9T78?tag=billmills-20",
    image: "../images/finds/13-cat-dump-truck.jpg",
    width: 1500,
    height: 1103,
    alt: "A 15-inch CAT Construction Tough Rigs dump truck toy."
  },
  {
    num: 14,
    name: "Tonka Steel Classics Front Loader",
    blurb: "A tough steel-and-plastic front loader for backyard dirt and driveway play, for ages 3 and up.",
    url: "https://www.amazon.com/dp/B07ZS6WM9D?tag=billmills-20",
    image: "../images/finds/14-tonka-front-loader.jpg",
    width: 1500,
    height: 842,
    alt: "A yellow Tonka Steel Classics front loader."
  },
  {
    num: 15,
    name: "Green Toys Dump Truck",
    blurb: "A simple dump truck with a tipping bed, made from recycled plastic in yellow and red.",
    url: "https://www.amazon.com/dp/B001Q3KU9Q?tag=billmills-20",
    image: "../images/finds/15-green-toys-dump-truck.jpg",
    width: 1500,
    height: 1202,
    alt: "A yellow and red Green Toys dump truck."
  },
  {
    num: 16,
    name: "Crayola Mini Twistables, 50 Count",
    blurb: "Mini twistable crayons that don't need sharpening — 50 colors for travel, quiet time, or coloring books.",
    url: "https://www.amazon.com/dp/B07D4T2XKB?tag=billmills-20",
    image: "../images/finds/16-crayola-mini-twistables.jpg",
    width: 902,
    height: 1031,
    alt: "A 50-count box of Crayola Mini Twistables crayons."
  },
  {
    num: 17,
    name: "Crayola Ultra Clean Washable Markers, 40 Count",
    blurb: "A 40-count set of Ultra Clean washable markers that's easier on the kitchen table.",
    url: "https://www.amazon.com/dp/B0773LNGYB?tag=billmills-20",
    image: "../images/finds/17-crayola-washable-markers.jpg",
    width: 1500,
    height: 1314,
    alt: "A 40-count box of Crayola Ultra Clean washable markers."
  },
  {
    num: 18,
    name: "Crayola Crayons, 24 Count, 2-Pack",
    blurb: "Two classic 24-count crayon boxes, so there's a spare for the car, a grandparent's house, or backup.",
    url: "https://www.amazon.com/dp/B0096XWNNY?tag=billmills-20",
    image: "../images/finds/18-crayola-crayons-2-pack.jpg",
    width: 1500,
    height: 1148,
    alt: "A two-pack of 24-count Crayola crayon boxes."
  },
  {
    num: 19,
    name: "Crayola Washable Watercolors, 8-Count",
    blurb: "An 8-color washable watercolor tray for painting after a coloring page, at home or in the classroom.",
    url: "https://www.amazon.com/dp/B000HHKAE2?tag=billmills-20",
    image: "../images/finds/19-crayola-watercolors.jpg",
    width: 1022,
    height: 1500,
    alt: "An 8-count Crayola washable watercolor paint set."
  },
  {
    num: 20,
    name: "Crayola Construction Paper, 2-Pack",
    blurb: "Two 96-sheet packs of construction paper for crafts, Sunday school, and cutting or gluing.",
    url: "https://www.amazon.com/dp/B0CTNN7NWF?tag=billmills-20",
    image: "../images/finds/20-crayola-construction-paper.jpg",
    width: 1500,
    height: 976,
    alt: "Two packs of Crayola construction paper, 96 sheets each."
  },
  {
    num: 21,
    name: "STANLEY Quencher 40 oz Tumbler",
    blurb: "A 40 oz insulated tumbler with a lid and straw, in Rose Quartz 2.0, for water or iced coffee.",
    url: "https://www.amazon.com/dp/B0CP9Z56SW?tag=billmills-20",
    image: "../images/finds/21-stanley-quencher-40oz.jpg",
    width: 686,
    height: 1491,
    alt: "A 40 oz Stanley Quencher H2.0 tumbler in Rose Quartz 2.0."
  },
  {
    num: 22,
    name: "Owala FreeSip 24 oz Bottle",
    blurb: "A 24 oz stainless bottle you can sip from the straw or the spout; keeps drinks cold and fits many cup holders.",
    url: "https://www.amazon.com/dp/B085DV8T75?tag=billmills-20",
    image: "../images/finds/22-owala-freesip-24oz.jpg",
    width: 434,
    height: 1500,
    alt: "A 24 oz Owala FreeSip stainless steel bottle in Shy Marshmallow."
  },
  {
    num: 23,
    name: "Alpha Grillers Meat Thermometer",
    blurb: "A small instant-read thermometer that takes the guesswork out of cooking chicken, burgers, or a roast.",
    url: "https://www.amazon.com/dp/B00S93EQUK?tag=billmills-20",
    image: "../images/finds/23-alpha-grillers-thermometer.jpg",
    width: 1500,
    height: 1500,
    alt: "An Alpha Grillers digital instant-read meat thermometer."
  },
  {
    num: 24,
    name: "Etekcity Digital Kitchen Scale",
    blurb: "A digital scale for baking, coffee, or portioning, in grams or ounces, up to 11 pounds.",
    url: "https://www.amazon.com/dp/B0113UZJE2?tag=billmills-20",
    image: "../images/finds/24-etekcity-kitchen-scale.jpg",
    width: 1130,
    height: 1500,
    alt: "An Etekcity digital food kitchen scale."
  },
  {
    num: 25,
    name: "OXO Good Grips Swivel Peeler",
    blurb: "A sharp, comfortable swivel peeler for potatoes, carrots, and apples.",
    url: "https://www.amazon.com/dp/B00004OCIP?tag=billmills-20",
    image: "../images/finds/25-oxo-swivel-peeler.jpg",
    width: 258,
    height: 1500,
    alt: "An OXO Good Grips swivel peeler."
  },
  {
    num: 26,
    name: "Rain-X Windshield Water Repellent",
    blurb: "A wipe-on windshield treatment that helps rain bead up and roll off in wet weather.",
    url: "https://www.amazon.com/dp/B0000AXNMO?tag=billmills-20",
    image: "../images/finds/26-rain-x-windshield.jpg",
    width: 718,
    height: 1500,
    alt: "A 7-ounce bottle of Rain-X glass windshield water repellent."
  },
  {
    num: 27,
    name: "Amazon Basics Microfiber Cloths, 24-Pack",
    blurb: "A 24-pack of reusable, lint-free cloths for windshields, dashboards, and everyday spills.",
    url: "https://www.amazon.com/dp/B009FUF6DM?tag=billmills-20",
    image: "../images/finds/27-amazon-basics-microfiber.jpg",
    width: 1280,
    height: 1500,
    alt: "A 24-pack of Amazon Basics microfiber cleaning cloths."
  },
  {
    num: 28,
    name: "Kaistyle MagSafe Car Phone Holder",
    blurb: "A magnetic dash mount that keeps your phone in view for maps while you drive.",
    url: "https://www.amazon.com/dp/B0C1Y8Z6VT?tag=billmills-20",
    image: "../images/finds/28-kaistyle-magsafe-car-mount.jpg",
    width: 1500,
    height: 1445,
    alt: "A Kaistyle MagSafe magnetic car dash phone holder."
  },
  {
    num: 29,
    name: "ANCEL AD310 OBD2 Scanner",
    blurb: "A simple code reader for 1996 and newer OBD2 vehicles, to check and clear engine lights.",
    url: "https://www.amazon.com/dp/B01G5EA74I?tag=billmills-20",
    image: "../images/finds/29-ancel-ad310-obd2.jpg",
    width: 950,
    height: 1500,
    alt: "A black ANCEL AD310 universal OBD2 scanner."
  },
  {
    num: 30,
    name: "Energizer 12-Foot Jumper Cables",
    blurb: "12-foot, 10-gauge cables with a carrying bag, ready for the trunk when a battery dies.",
    url: "https://www.amazon.com/dp/B09592FGCY?tag=billmills-20",
    image: "../images/finds/30-energizer-jumper-cables.jpg",
    width: 1468,
    height: 1394,
    alt: "Energizer 12-foot, 10-gauge jumper cables with a carry bag."
  },
  {
    num: 31,
    name: "Brother P-touch D220 Label Maker",
    blurb: "A handheld label maker with a full keyboard for pantry bins, drawers, and file folders.",
    url: "https://www.amazon.com/dp/B0B1L3BL1G?tag=billmills-20",
    image: "../images/finds/31-brother-ptouch-d220.jpg",
    width: 1500,
    height: 1342,
    alt: "A white Brother P-touch D220 label maker."
  },
  {
    num: 32,
    name: "My Little Library: Bible Stories",
    blurb: "Twelve mini Bible story board books in a carry case, great for church bags and bedtime.",
    url: "https://www.amazon.com/dp/1640309969?tag=billmills-20",
    image: "../images/finds/32-my-little-library-bible-stories.jpg",
    width: 1500,
    height: 1500,
    alt: "My Little Library Bible Stories box set of 12 board books with a carry handle."
  },
  {
    num: 33,
    name: "Bruder Mack Granite Dump Truck",
    blurb: "A detailed 1:16 dump truck with a tipping bed and opening doors that holds up in sand and snow.",
    url: "https://www.amazon.com/dp/B000NYT1M6?tag=billmills-20",
    image: "../images/finds/33-bruder-mack-dump-truck.jpg",
    width: 1000,
    height: 599,
    alt: "A yellow and black Bruder Mack Granite toy dump truck."
  },
  {
    num: 34,
    name: "Crayola Super Tips Markers, 100 Count",
    blurb: "A big box of 100 washable markers that draw thin or thick, perfect for detailed coloring pages.",
    url: "https://www.amazon.com/dp/B071CP6X88?tag=billmills-20",
    image: "../images/finds/34-crayola-super-tips-100.jpg",
    width: 953,
    height: 1500,
    alt: "A box of Crayola Super Tips washable markers, 100 colors."
  },
  {
    num: 35,
    name: "Casio MS-80B Desktop Calculator",
    blurb: "A desk calculator with a large display and memory keys to keep beside your budget pages.",
    url: "https://www.amazon.com/dp/B003822IRA?tag=billmills-20",
    image: "../images/finds/35-casio-ms-80b-calculator.jpg",
    width: 1500,
    height: 1378,
    alt: "A black Casio MS-80B desktop calculator."
  },
];

window.EARLIER_FINDS = [
  {
    id: "E1",
    name: "SKYDUE Budget Binder",
    blurb: "A small binder with zipper cash envelopes to keep spending categories right next to your printed budget pages.",
    url: "https://www.amazon.com/dp/B0967RNWX3?tag=billmills-20",
    image: "../images/finds/earlier-01-skydue-budget-binder.jpg",
    width: 1488,
    height: 1500,
    alt: "SKYDUE budget binder with zipper cash envelopes, budget sheets, and category labels."
  },
  {
    id: "E2",
    name: "Hammermill Copy Plus Paper",
    blurb: "Everyday letter-size paper for printing budget pages and kids' activity sheets at home.",
    url: "https://www.amazon.com/dp/B005NL739M?tag=billmills-20",
    image: "../images/finds/earlier-02-hammermill-copy-plus.jpg",
    width: 1058,
    height: 1498,
    alt: "A ream of Hammermill Copy Plus 8.5 by 11 printer paper."
  },
  {
    id: "E3",
    name: "Command Medium Designer Hooks",
    blurb: "Damage-free wall hooks for keys and hats in the entryway, closet, or kitchen.",
    url: "https://www.amazon.com/dp/B0000CFLYU?tag=billmills-20",
    image: "../images/finds/earlier-03-command-designer-hooks.jpg",
    width: 1034,
    height: 1500,
    alt: "A two-pack of Command medium designer wall hooks."
  },
  {
    id: "E4",
    name: "Crayola 36 Colored Pencils",
    blurb: "A full box of colors that pairs perfectly with Bible story and truck coloring books.",
    url: "https://www.amazon.com/dp/B007FI5RF8?tag=billmills-20",
    image: "../images/finds/earlier-04-crayola-colored-pencils.jpg",
    width: 742,
    height: 1032,
    alt: "A 36-count box of Crayola colored pencils."
  },
  {
    id: "E5",
    name: "KitchenAid Shears",
    blurb: "Handy shears with a protective sheath for snipping herbs and opening packages.",
    url: "https://www.amazon.com/dp/B07PZF3QS3?tag=billmills-20",
    image: "../images/finds/earlier-05-kitchenaid-shears.jpg",
    width: 724,
    height: 1450,
    alt: "KitchenAid all-purpose kitchen shears with a protective sheath."
  },
  {
    id: "E6",
    name: "AstroAI Tire Gauge",
    blurb: "A small digital gauge for quick tire checks that fits in the glove box.",
    url: "https://www.amazon.com/dp/B01J8DLGU2?tag=billmills-20",
    image: "../images/finds/earlier-06-astroai-tire-gauge.jpg",
    width: 1154,
    height: 1500,
    alt: "An AstroAI digital tire pressure gauge."
  },
];

