/*
  Favorite Finds listed on /links.

  How to add a product (newest first):
  1. Copy a text-only graphic into ../images/finds/ and name it
     NN-short-slug.png (use the next find number).
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
    image: "../images/finds/01-clever-fox-budget-planner.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Clever Fox Budget Planner, with the line: An undated planner with monthly trackers for bills, spending, and savings."
  },
  {
    num: 2,
    name: "Antner A6 Budget Binder",
    blurb: "A compact A6 binder with zipper envelopes and labels for cash stuffing at home or on the go.",
    url: "https://www.amazon.com/dp/B08YDG3Q3Y?tag=billmills-20",
    image: "../images/finds/02-antner-a6-budget-binder.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Antner A6 Budget Binder, with the line: A compact A6 binder with zipper envelopes for cash stuffing."
  },
  {
    num: 3,
    name: "Nokingo Undated A5 Budget Planner",
    blurb: "An undated A5 notebook for tracking income, bills, and spending for a full year, starting any month you like.",
    url: "https://www.amazon.com/dp/B08P47MVC5?tag=billmills-20",
    image: "../images/finds/03-nokingo-a5-budget-planner.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Nokingo Undated A5 Budget Planner, with the line: An undated A5 notebook for tracking income, bills, and spending."
  },
  {
    num: 4,
    name: "The Total Money Makeover",
    blurb: "A clear, step-by-step debt payoff plan that pairs well with a written budget and monthly trackers.",
    url: "https://www.amazon.com/dp/140034252X?tag=billmills-20",
    image: "../images/finds/04-total-money-makeover.png",
    width: 800,
    height: 800,
    alt: "Text graphic for The Total Money Makeover, with the line: A step-by-step debt payoff plan that pairs with a written budget."
  },
  {
    num: 5,
    name: "SKYDUE Expanding File Organizer",
    blurb: "A letter-size accordion file with 8 labeled pockets for receipts, bills, and tax papers.",
    url: "https://www.amazon.com/dp/B0C77GP9XB?tag=billmills-20",
    image: "../images/finds/05-skydue-expanding-file.png",
    width: 800,
    height: 800,
    alt: "Text graphic for SKYDUE Expanding File Organizer, with the line: A letter-size accordion file with 8 pockets for receipts and bills."
  },
  {
    num: 6,
    name: "The Beginner's Bible",
    blurb: "A gentle story Bible with simple words and bright pictures — a companion to kids' Bible coloring pages, not another coloring book.",
    url: "https://www.amazon.com/dp/031075013X?tag=billmills-20",
    image: "../images/finds/06-beginners-bible.png",
    width: 800,
    height: 800,
    alt: "Text graphic for The Beginner's Bible, with the line: A story Bible with simple words and bright pictures for kids."
  },
  {
    num: 7,
    name: "The Jesus Storybook Bible",
    blurb: "Familiar Bible stories in a warm, readable style for bedtime or a quiet Sunday, alongside coloring pages.",
    url: "https://www.amazon.com/dp/0310708257?tag=billmills-20",
    image: "../images/finds/07-jesus-storybook-bible.png",
    width: 800,
    height: 800,
    alt: "Text graphic for The Jesus Storybook Bible, with the line: Familiar Bible stories in a warm, readable style for kids."
  },
  {
    num: 8,
    name: "Indescribable: God and Science Devotions",
    blurb: "Short kids' devotions that connect Bible truths with simple science, from stars to animals.",
    url: "https://www.amazon.com/dp/0718086104?tag=billmills-20",
    image: "../images/finds/08-indescribable-devotions.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Indescribable: God and Science Devotions, with the line: Short kids' devotions that connect Bible truths with simple science."
  },
  {
    num: 9,
    name: "The Action Bible",
    blurb: "A comic-book style story Bible older kids often pick up on their own — not a coloring book.",
    url: "https://www.amazon.com/dp/083077744X?tag=billmills-20",
    image: "../images/finds/09-action-bible.png",
    width: 800,
    height: 800,
    alt: "Text graphic for The Action Bible, with the line: A comic-book style story Bible for older kids."
  },
  {
    num: 10,
    name: "KASANYER Bible Verse Stickers",
    blurb: "A 200-piece pack of Bible verse and Christian stickers for Sunday school, crafts, and coloring pages.",
    url: "https://www.amazon.com/dp/B0CG197T1K?tag=billmills-20",
    image: "../images/finds/10-bible-verse-stickers.png",
    width: 800,
    height: 800,
    alt: "Text graphic for KASANYER Bible Verse Stickers, with the line: A 200-piece pack of Bible verse stickers for crafts and Sunday school."
  },
  {
    num: 11,
    name: "Hot Wheels 10-Pack",
    blurb: "A 10-pack of classic 1:64 cars and trucks for the toy bin or a rainy day; styles may vary.",
    url: "https://www.amazon.com/dp/B000B6MKMO?tag=billmills-20",
    image: "../images/finds/11-hot-wheels-10-pack.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Hot Wheels 10-Pack, with the line: A 10-pack of classic 1:64 cars and trucks."
  },
  {
    num: 12,
    name: "CAT Construction 3-Pack",
    blurb: "A sturdy 7-inch dump truck, loader, and excavator set that doesn't need batteries.",
    url: "https://www.amazon.com/dp/B07QGKGTK7?tag=billmills-20",
    image: "../images/finds/12-cat-construction-3-pack.png",
    width: 800,
    height: 800,
    alt: "Text graphic for CAT Construction 3-Pack, with the line: A 7-inch dump truck, loader, and excavator set, with no batteries needed."
  },
  {
    num: 13,
    name: "CAT Construction Dump Truck",
    blurb: "A 15-inch dump truck with a bed that tips, built from sturdy plastic for the sandbox or living room.",
    url: "https://www.amazon.com/dp/B07QFB9T78?tag=billmills-20",
    image: "../images/finds/13-cat-dump-truck.png",
    width: 800,
    height: 800,
    alt: "Text graphic for CAT Construction Dump Truck, with the line: A 15-inch dump truck with a bed that tips."
  },
  {
    num: 14,
    name: "Tonka Steel Classics Front Loader",
    blurb: "A tough steel-and-plastic front loader for backyard dirt and driveway play, for ages 3 and up.",
    url: "https://www.amazon.com/dp/B07ZS6WM9D?tag=billmills-20",
    image: "../images/finds/14-tonka-front-loader.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Tonka Steel Classics Front Loader, with the line: A steel-and-plastic front loader for backyard play, ages 3 and up."
  },
  {
    num: 15,
    name: "Green Toys Dump Truck",
    blurb: "A simple dump truck with a tipping bed, made from recycled plastic in yellow and red.",
    url: "https://www.amazon.com/dp/B001Q3KU9Q?tag=billmills-20",
    image: "../images/finds/15-green-toys-dump-truck.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Green Toys Dump Truck, with the line: A dump truck with a tipping bed, made from recycled plastic."
  },
  {
    num: 16,
    name: "Crayola Mini Twistables, 50 Count",
    blurb: "Mini twistable crayons that don't need sharpening — 50 colors for travel, quiet time, or coloring books.",
    url: "https://www.amazon.com/dp/B07D4T2XKB?tag=billmills-20",
    image: "../images/finds/16-crayola-mini-twistables.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Mini Twistables, 50 Count, with the line: Mini twistable crayons that don't need sharpening, in 50 colors."
  },
  {
    num: 17,
    name: "Crayola Ultra Clean Washable Markers, 40 Count",
    blurb: "A 40-count set of Ultra Clean washable markers that's easier on the kitchen table.",
    url: "https://www.amazon.com/dp/B0773LNGYB?tag=billmills-20",
    image: "../images/finds/17-crayola-washable-markers.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Ultra Clean Washable Markers, 40 Count, with the line: A 40-count set of Ultra Clean washable markers."
  },
  {
    num: 18,
    name: "Crayola Crayons, 24 Count, 2-Pack",
    blurb: "Two classic 24-count crayon boxes, so there's a spare for the car, a grandparent's house, or backup.",
    url: "https://www.amazon.com/dp/B0096XWNNY?tag=billmills-20",
    image: "../images/finds/18-crayola-crayons-2-pack.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Crayons, 24 Count, 2-Pack, with the line: Two classic 24-count crayon boxes."
  },
  {
    num: 19,
    name: "Crayola Washable Watercolors, 8-Count",
    blurb: "An 8-color washable watercolor tray for painting after a coloring page, at home or in the classroom.",
    url: "https://www.amazon.com/dp/B000HHKAE2?tag=billmills-20",
    image: "../images/finds/19-crayola-watercolors.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Washable Watercolors, 8-Count, with the line: An 8-color washable watercolor tray for home or the classroom."
  },
  {
    num: 20,
    name: "Crayola Construction Paper, 2-Pack",
    blurb: "Two 96-sheet packs of construction paper for crafts, Sunday school, and cutting or gluing.",
    url: "https://www.amazon.com/dp/B0CTNN7NWF?tag=billmills-20",
    image: "../images/finds/20-crayola-construction-paper.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Construction Paper, 2-Pack, with the line: Two 96-sheet packs of construction paper for crafts."
  },
  {
    num: 21,
    name: "STANLEY Quencher 40 oz Tumbler",
    blurb: "A 40 oz insulated tumbler with a lid and straw, in Rose Quartz 2.0, for water or iced coffee.",
    url: "https://www.amazon.com/dp/B0CP9Z56SW?tag=billmills-20",
    image: "../images/finds/21-stanley-quencher-40oz.png",
    width: 800,
    height: 800,
    alt: "Text graphic for STANLEY Quencher 40 oz Tumbler, with the line: A 40 oz insulated tumbler with a lid and straw."
  },
  {
    num: 22,
    name: "Owala FreeSip 24 oz Bottle",
    blurb: "A 24 oz stainless bottle you can sip from the straw or the spout; keeps drinks cold and fits many cup holders.",
    url: "https://www.amazon.com/dp/B085DV8T75?tag=billmills-20",
    image: "../images/finds/22-owala-freesip-24oz.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Owala FreeSip 24 oz Bottle, with the line: A 24 oz stainless bottle with a straw and a spout."
  },
  {
    num: 23,
    name: "Alpha Grillers Meat Thermometer",
    blurb: "A small instant-read thermometer that takes the guesswork out of cooking chicken, burgers, or a roast.",
    url: "https://www.amazon.com/dp/B00S93EQUK?tag=billmills-20",
    image: "../images/finds/23-alpha-grillers-thermometer.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Alpha Grillers Meat Thermometer, with the line: An instant-read thermometer for cooking meat."
  },
  {
    num: 24,
    name: "Etekcity Digital Kitchen Scale",
    blurb: "A digital scale for baking, coffee, or portioning, in grams or ounces, up to 11 pounds.",
    url: "https://www.amazon.com/dp/B0113UZJE2?tag=billmills-20",
    image: "../images/finds/24-etekcity-kitchen-scale.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Etekcity Digital Kitchen Scale, with the line: A digital scale for baking or portioning, up to 11 pounds."
  },
  {
    num: 25,
    name: "OXO Good Grips Swivel Peeler",
    blurb: "A sharp, comfortable swivel peeler for potatoes, carrots, and apples.",
    url: "https://www.amazon.com/dp/B00004OCIP?tag=billmills-20",
    image: "../images/finds/25-oxo-swivel-peeler.png",
    width: 800,
    height: 800,
    alt: "Text graphic for OXO Good Grips Swivel Peeler, with the line: A swivel peeler for potatoes, carrots, and apples."
  },
  {
    num: 26,
    name: "Rain-X Windshield Water Repellent",
    blurb: "A wipe-on windshield treatment that helps rain bead up and roll off in wet weather.",
    url: "https://www.amazon.com/dp/B0000AXNMO?tag=billmills-20",
    image: "../images/finds/26-rain-x-windshield.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Rain-X Windshield Water Repellent, with the line: A wipe-on windshield treatment that helps rain bead up and roll off."
  },
  {
    num: 27,
    name: "Amazon Basics Microfiber Cloths, 24-Pack",
    blurb: "A 24-pack of reusable, lint-free cloths for windshields, dashboards, and everyday spills.",
    url: "https://www.amazon.com/dp/B009FUF6DM?tag=billmills-20",
    image: "../images/finds/27-amazon-basics-microfiber.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Amazon Basics Microfiber Cloths, 24-Pack, with the line: A 24-pack of reusable, lint-free cloths for cleaning."
  },
  {
    num: 28,
    name: "Kaistyle Magnetic Car Phone Holder (MagSafe-compatible)",
    blurb: "A magnetic dash mount that keeps your phone in view for maps while you drive.",
    url: "https://www.amazon.com/dp/B0C1Y8Z6VT?tag=billmills-20",
    image: "../images/finds/28-kaistyle-magsafe-car-mount.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Kaistyle Magnetic Car Phone Holder (MagSafe-compatible), with the line: A magnetic dash mount that holds a phone in view while driving."
  },
  {
    num: 29,
    name: "ANCEL AD310 OBD2 Scanner",
    blurb: "A simple code reader for 1996 and newer OBD2 vehicles, to check and clear engine lights.",
    url: "https://www.amazon.com/dp/B01G5EA74I?tag=billmills-20",
    image: "../images/finds/29-ancel-ad310-obd2.png",
    width: 800,
    height: 800,
    alt: "Text graphic for ANCEL AD310 OBD2 Scanner, with the line: A code reader for 1996 and newer OBD2 vehicles."
  },
  {
    num: 30,
    name: "Energizer 12-Foot Jumper Cables",
    blurb: "12-foot, 10-gauge cables with a carrying bag, ready for the trunk when a battery dies.",
    url: "https://www.amazon.com/dp/B09592FGCY?tag=billmills-20",
    image: "../images/finds/30-energizer-jumper-cables.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Energizer 12-Foot Jumper Cables, with the line: 12-foot, 10-gauge cables with a carrying bag."
  },
  {
    num: 31,
    name: "Brother P-touch D220 Label Maker",
    blurb: "A handheld label maker with a full keyboard for pantry bins, drawers, and file folders.",
    url: "https://www.amazon.com/dp/B0B1L3BL1G?tag=billmills-20",
    image: "../images/finds/31-brother-ptouch-d220.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Brother P-touch D220 Label Maker, with the line: A handheld label maker with a full keyboard."
  },
  {
    num: 32,
    name: "My Little Library: Bible Stories",
    blurb: "Twelve mini Bible story board books in a carry case, great for church bags and bedtime.",
    url: "https://www.amazon.com/dp/1640309969?tag=billmills-20",
    image: "../images/finds/32-my-little-library-bible-stories.png",
    width: 800,
    height: 800,
    alt: "Text graphic for My Little Library: Bible Stories, with the line: Twelve mini Bible story board books in a carry case."
  },
  {
    num: 33,
    name: "Bruder Mack Granite Dump Truck",
    blurb: "A detailed 1:16 dump truck with a tipping bed and opening doors that holds up in sand and snow.",
    url: "https://www.amazon.com/dp/B000NYT1M6?tag=billmills-20",
    image: "../images/finds/33-bruder-mack-dump-truck.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Bruder Mack Granite Dump Truck, with the line: A 1:16 dump truck with a tipping bed and opening doors."
  },
  {
    num: 34,
    name: "Crayola Super Tips Markers, 100 Count",
    blurb: "A big box of 100 washable markers that draw thin or thick, perfect for detailed coloring pages.",
    url: "https://www.amazon.com/dp/B071CP6X88?tag=billmills-20",
    image: "../images/finds/34-crayola-super-tips-100.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Super Tips Markers, 100 Count, with the line: A 100-count set of washable markers that draw thin or thick."
  },
  {
    num: 35,
    name: "Casio MS-80B Desktop Calculator",
    blurb: "A desk calculator with a large display and memory keys to keep beside your budget pages.",
    url: "https://www.amazon.com/dp/B003822IRA?tag=billmills-20",
    image: "../images/finds/35-casio-ms-80b-calculator.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Casio MS-80B Desktop Calculator, with the line: A desk calculator with a large display and memory keys."
  },
  {
    num: 36,
    name: "Lodge 10.25-Inch Cast Iron Skillet",
    blurb: "A pre-seasoned 10.25-inch skillet that holds heat well and works on the stove, in the oven, or over a campfire.",
    url: "https://www.amazon.com/dp/B00006JSUA?tag=billmills-20",
    image: "../images/finds/36-lodge-cast-iron-skillet.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Lodge 10.25-Inch Cast Iron Skillet, with the line: A pre-seasoned 10.25-inch skillet for the stove, oven, or campfire."
  },
  {
    num: 37,
    name: "Meguiar's Quik Detailer Mist & Wipe, 16 oz",
    blurb: "A spray-and-wipe detailer for bringing back the shine between washes, safe on clear coat.",
    url: "https://www.amazon.com/dp/B0009IQX90?tag=billmills-20",
    image: "../images/finds/37-meguiars-quik-detailer.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Meguiar's Quik Detailer Mist & Wipe, 16 oz, with the line: A spray-and-wipe detailer for use between washes."
  },
  {
    num: 38,
    name: "Elmer's Disappearing Purple Glue Sticks, 30 Count",
    blurb: "Washable glue sticks that go on purple and dry clear, a 30-pack for school and Sunday school crafts.",
    url: "https://www.amazon.com/dp/B000VXO4L2?tag=billmills-20",
    image: "../images/finds/38-elmers-purple-glue-sticks.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Elmer's Disappearing Purple Glue Sticks, 30 Count, with the line: Washable glue sticks that go on purple and dry clear."
  },
  {
    num: 39,
    name: "Melissa & Doug Reusable Sticker Pad: Vehicles",
    blurb: "165+ reusable cling stickers with five vehicle scenes, great for car rides and quiet time.",
    url: "https://www.amazon.com/dp/122308079X?tag=billmills-20",
    image: "../images/finds/39-melissa-doug-vehicle-sticker-pad.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Melissa & Doug Reusable Sticker Pad: Vehicles, with the line: Reusable cling stickers with five vehicle scenes."
  },
  {
    num: 40,
    name: "Pilot G2 Bold Gel Pens, 12-Pack",
    blurb: "Bold, smooth gel pens with a comfy grip, great for writing in your printed budget pages.",
    url: "https://www.amazon.com/dp/B001E6D3W6?tag=billmills-20",
    image: "../images/finds/40-pilot-g2-bold-gel-pens.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Pilot G2 Bold Gel Pens, 12-Pack, with the line: Bold gel pens with a comfortable grip."
  },
  {
    num: 41,
    name: "The Toddler's Bible",
    blurb: "101 short Bible stories with bright pictures, just right for toddler bedtime reading.",
    url: "https://www.amazon.com/dp/0781405793?tag=billmills-20",
    image: "../images/finds/41-toddlers-bible.png",
    width: 800,
    height: 800,
    alt: "Text graphic for The Toddler's Bible, with the line: Short Bible stories with bright pictures for toddler bedtime reading."
  },
  {
    num: 42,
    name: "Green Toys Recycling Truck",
    blurb: "A sturdy recycled-plastic truck with three chutes for sorting bottles, cans, and paper.",
    url: "https://www.amazon.com/dp/B001Q3KUA0?tag=billmills-20",
    image: "../images/finds/42-green-toys-recycling-truck.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Green Toys Recycling Truck, with the line: A recycled-plastic truck with three chutes for sorting play."
  },
  {
    num: 43,
    name: "Crayola Twistables Colored Pencils, 50 Count",
    blurb: "50 twist-up colored pencils that never need sharpening, great for coloring pages.",
    url: "https://www.amazon.com/dp/B07D4RN9NH?tag=billmills-20",
    image: "../images/finds/43-crayola-twistables-colored-pencils.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Twistables Colored Pencils, 50 Count, with the line: 50 twist-up colored pencils that don't need sharpening."
  },
  {
    num: 44,
    name: "OXO Good Grips Salad Spinner",
    blurb: "One-handed pump salad spinner with a brake button and a non-skid base.",
    url: "https://www.amazon.com/dp/B00004OCKR?tag=billmills-20",
    image: "../images/finds/44-oxo-salad-spinner.png",
    width: 800,
    height: 800,
    alt: "Text graphic for OXO Good Grips Salad Spinner, with the line: A one-handed pump salad spinner with a brake button."
  },
  {
    num: 45,
    name: "Simple Houseware 6-Shelf Hanging Closet Organizer",
    blurb: "Six fabric shelves plus side mesh pockets that hang right from your closet rod.",
    url: "https://www.amazon.com/dp/B06XSS9SSL?tag=billmills-20",
    image: "../images/finds/45-simple-houseware-closet-organizer.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Simple Houseware 6-Shelf Hanging Closet Organizer, with the line: Six fabric shelves plus side pockets that hang from a closet rod."
  },
{
    num: 46,
    name: "Smead Daily and Monthly Desk File/Sorter",
    blurb: "43 tabs for days 1-31 and each month, so every bill has a spot until it's due.",
    url: "https://www.amazon.com/dp/B0006HVEAW?tag=billmills-20",
    image: "../images/finds/46-smead-desk-file-sorter.png",
    width: 800,
    height: 800,
    alt: "Text graphic for the Smead Daily and Monthly Desk File/Sorter, with the line: a spot for every bill, tabs for days 1-31 and every month."
  },
{
    num: 47,
    name: "Crayola Model Magic, 30 Packs",
    blurb: "30 packs of soft, air-dry modeling clay in 15 colors, with an idea guide.",
    url: "https://www.amazon.com/dp/B09HYXVY4F?tag=billmills-20",
    image: "../images/finds/47-crayola-model-magic.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola Model Magic, 30 Packs, with the line: soft air-dry clay for rainy-day crafts."
  },
{
    num: 48,
    name: "NOCO Boost GB40 Jump Starter",
    blurb: "A glove-box jump starter for gas engines up to 6.0L, with a USB charger and flashlight.",
    url: "https://www.amazon.com/dp/B015TKUPIC?tag=billmills-20",
    image: "../images/finds/48-noco-boost-gb40-jump-starter.png",
    width: 800,
    height: 800,
    alt: "Text graphic for the NOCO Boost GB40 Jump Starter, with the line: jump your own car without waiting on anyone."
  },
{
    num: 49,
    name: "Jesus Calling Bible Storybook",
    blurb: "Illustrated Bible stories for ages 3-7, each ending with a short note from Jesus' view.",
    url: "https://www.amazon.com/dp/140032033X?tag=billmills-20",
    image: "../images/finds/49-jesus-calling-bible-storybook.png",
    width: 800,
    height: 800,
    alt: "Text graphic for the Jesus Calling Bible Storybook, with the line: Bible stories with a little note from Jesus after each one."
  },
{
    num: 50,
    name: "Tonka Steel Classics Mighty Dump Truck",
    blurb: "The classic yellow Tonka with a steel dump bed that tilts for hauling and dumping.",
    url: "https://www.amazon.com/dp/B07ZS7J192?tag=billmills-20",
    image: "../images/finds/50-tonka-mighty-dump-truck.png",
    width: 800,
    height: 800,
    alt: "Text graphic for the Tonka Steel Classics Mighty Dump Truck, with the line: the classic yellow Tonka dump truck for the sandbox."
  },
];

window.EARLIER_FINDS = [
  {
    id: "E1",
    name: "SKYDUE Budget Binder",
    blurb: "A small binder with zipper cash envelopes to keep spending categories right next to your printed budget pages.",
    url: "https://www.amazon.com/dp/B0967RNWX3?tag=billmills-20",
    image: "../images/finds/earlier-01-skydue-budget-binder.png",
    width: 800,
    height: 800,
    alt: "Text graphic for SKYDUE Budget Binder, with the line: A small binder with zipper cash envelopes for spending categories."
  },
  {
    id: "E2",
    name: "Hammermill Copy Plus Paper",
    blurb: "Everyday letter-size paper for printing budget pages and kids' activity sheets at home.",
    url: "https://www.amazon.com/dp/B005NL739M?tag=billmills-20",
    image: "../images/finds/earlier-02-hammermill-copy-plus.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Hammermill Copy Plus Paper, with the line: Everyday letter-size paper for printing at home."
  },
  {
    id: "E3",
    name: "Command Medium Designer Hooks",
    blurb: "Damage-free wall hooks for keys and hats in the entryway, closet, or kitchen.",
    url: "https://www.amazon.com/dp/B0000CFLYU?tag=billmills-20",
    image: "../images/finds/earlier-03-command-designer-hooks.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Command Medium Designer Hooks, with the line: Damage-free wall hooks for keys and hats."
  },
  {
    id: "E4",
    name: "Crayola 36 Colored Pencils",
    blurb: "A full box of colors that pairs perfectly with Bible story and truck coloring books.",
    url: "https://www.amazon.com/dp/B007FI5RF8?tag=billmills-20",
    image: "../images/finds/earlier-04-crayola-colored-pencils.png",
    width: 800,
    height: 800,
    alt: "Text graphic for Crayola 36 Colored Pencils, with the line: A 36-count box of colored pencils for coloring books."
  },
  {
    id: "E5",
    name: "KitchenAid Shears",
    blurb: "Handy shears with a protective sheath for snipping herbs and opening packages.",
    url: "https://www.amazon.com/dp/B07PZF3QS3?tag=billmills-20",
    image: "../images/finds/earlier-05-kitchenaid-shears.png",
    width: 800,
    height: 800,
    alt: "Text graphic for KitchenAid Shears, with the line: Kitchen shears with a protective sheath."
  },
  {
    id: "E6",
    name: "AstroAI Tire Gauge",
    blurb: "A small digital gauge for quick tire checks that fits in the glove box.",
    url: "https://www.amazon.com/dp/B01J8DLGU2?tag=billmills-20",
    image: "../images/finds/earlier-06-astroai-tire-gauge.png",
    width: 800,
    height: 800,
    alt: "Text graphic for AstroAI Tire Gauge, with the line: A small digital gauge for tire-pressure checks."
  },
];

