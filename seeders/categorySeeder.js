const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "mesas",
      image:
        "https://f.fcdn.app/imgs/ba4121/www.kavehome.com.uy/kaveuy/3ddf/webp/recursos/47/600x0/banner-envio-express.jpg",
    },
    {
      name: "sillas",
      image:
        "https://f.fcdn.app/imgs/a906b6/www.kavehome.com.uy/kaveuy/1433/webp/recursos/46/600x0/banner-1-envio-express.jpg",
    },
    {
      name: "sillones",
      image:
        "https://f.fcdn.app/imgs/91efa9/www.kavehome.com.uy/kaveuy/dad2/webp/recursos/49/600x0/banner-4-envio-express.jpg",
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
