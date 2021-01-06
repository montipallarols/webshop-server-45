"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Organic cotton shopping bag",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/canvas_tote_bag_organic_cotton-2_600x.jpg?v=1604144974",
        categoryId: 1,
        description: "The durable bag holds up to 20 kg / 44 lbs and is made with strong and wide straps so you can comfortably carry it over your shoulder. The stylish and minimalist design makes it a lovely accessory as well- very unlike the plastic bags from the supermarket!",
        price: 10.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stainless steel bottle",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/double_walled_black_stainless_steel_bottle-3_1200x.jpg?v=1585490647",
        categoryId: 1,
        description: "Stay hydrated with our vacuum insulated stainless steel bottle that keeps your drinks cold for up to 24 hours and hot for up to 12 hours. The bottle has a sleek, minimalist design and a durable exterior that protects it from being scratched while also giving it a nice grip. To top it off, our stainless steel bottle is also BPA-free, leakproof and condensation free.",
        price: 17.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gold stainless steel straw",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/Gold_stainless_steel_straw_smoothie_1200x.jpg?v=1571144476",
        categoryId: 1,
        description: "Our reusable gold stainless steel straw is an elegant zero waste alternative to plastic straws. Take it with you on-the-go in our organic cotton straw pouch so you can avoid disposable straws even when you're out and about! The extra width of the straw makes it perfect for drinks like smoothies, milkshakes and bubble tea.",
        price: 2.19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bamboo cutlery set",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/Bamboo_cutlery_set_organic_cotton_pouch_1200x.jpg?v=1605279499",
        categoryId: 1,
        description: "The cutlery set is super lightweight and comes in a handy organic cotton pouch so you can easily bring it with you and avoid disposable plastic cutlery wherever you go. We love using it when travelling, grabbing takeaways or going on a picnic!",
        price: 7.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wool dryer balls",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/wool_dryer_balls_product-3_1200x.jpg?v=1571144539",
        categoryId: 1,
        description: "Add our hand-felted wool dryer balls to your tumble dryer together with your wet laundry to help reduce drying time, static cling and wrinkles while also softening your laundry in a natural and chemical-free way. Adding a subtle scent to your laundry can easily be done by adding a few drops of your favorite essential oil to the dryer balls before using them or at the end of the drying time.",
        price: 16.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Silicone food bag",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/Siliconefoodbag1000mllo_1200x.jpg?v=1605263652",
        categoryId: 1,
        description: "Our reusable silicone food bag is perfect for storing fresh or frozen produce, leftovers, snacks and much more! Our 1000 ml / 34 oz bag is also great for packing sandwiches, wraps, leftovers, etc for lunch at school or work. The bag is designed with a sealing slider making it completely leakproof and airtight, which means that it will also keep whatever you put inside fresher for longer!",
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bamboo toothbrush",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/BambooToothbrushwhitecopy-3_1200x.jpg?v=1594223127",
        categoryId: 2,
        description: "Our bamboo toothbrush is the perfect sustainable alternative to plastic toothbrushes. Bamboo is one of the fastest growing plants in the world and fully compostable at the end of its life, which makes it a great and environmentally friendly alternative to other materials - especially plastic!",
        price: 4.49,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hair comb",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/fsc_certified_ash_wood_comb-3_1200x.jpg?v=1573225551",
        categoryId: 2,
        description: "Detangle your hair with our high-quality wide-tooth comb made from 100% FSC certified ash wood. The comb is finished and smoothened by hand and treated with linseed oil and vegetable carnauba wax which makes it waterproof and completely vegan-friendly.",
        price: 12.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hairbrush",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/fsc_certified_wood_brush-2_1200x.jpg?v=1573225548",
        categoryId: 2,
        description: "The comfortable brush handle is made from 100% FSC certified ash wood that is finished and smoothened by hand and treated with linseed oil and vegetable carnauba wax which makes it waterproof and completely vegan-friendly.",
        price: 12.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bamboo toothbrush case",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/toothbrushcaseclosed_1200x.jpg?v=1591104798",
        categoryId: 2,
        description: "Keep your toothbrush clean and safe while traveling with our lightweight bamboo toothbrush case. Bamboo is naturally anti-bacterial, which makes it ideal to use for toothbrush cases to ensure good oral health when you're on the go.",
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Face & body soap bar",
        imageUrl: "https://cdn.shopify.com/s/files/1/0122/9946/8858/products/Roseclaysoapbar-3_1200x.jpg?v=1585490682",
        categoryId: 2,
        description: "Our 100% natural, vegan and palm oil free rose clay soap bar is blended with pure rose clay, which has cleansing, detoxifying and balancing effects on the skin, as well as organic unrefined shea butter, vitamin-rich ylang ylang oil and clary sage oil to soothe and moisturize the skin. The essential oils give the soap bar a lovely deep floral scent.",
        price: 6.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
