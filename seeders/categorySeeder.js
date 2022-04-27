const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "mesas",
      image:
        "https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/categories/mesas2.png",
    },
    {
      name: "sillas",
      image:
        "https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/categories/sillas2.png",
    },
    {
      name: "sillones",
      image:
        "https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/categories/sillones.png",
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
