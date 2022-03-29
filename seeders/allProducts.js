const products = [
  {
    title: "Mesa De Centro",
    imageenvironment:
      "https://f.fcdn.app/imgs/069bb9/www.kavehome.com.uy/kaveuy/3a7a/webp/catalogo/CC6003M43_CC6003M43_3/900x1125/mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm-mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm.jpg",
    description: "Mesa De Centro Alaia De Madera Maciza De Acacia Con Acabado Natural 115cm x 65cm",
    price: 756,
    image:
      "https://f.fcdn.app/imgs/9d72e8/www.kavehome.com.uy/kaveuy/d9bf/webp/catalogo/CC6003M43_CC6003M43_1/900x1125/mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm-mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm.jpg",
    stock: 1,
    featured: true,
    measures: "Al 75 cm x An 120 cm x Pr 120 cm",
    style: "Colonia, Rústico",
    material: "Acacia, Hierro, Madera maciza",
    environment: "Living",
    slug: "mesa-de-centro",
    categoryId: 1,
  },
  {
    title: "Silla Doriane De Madera Maciza",
    imageenvironment:
      "https://f.fcdn.app/imgs/e32502/www.kavehome.com.uy/kaveuy/4696/webp/catalogo/CC210_8MV12_2/900x1125/silla-doriane-de-madera-maciza-de-roble-acabado-natural-y-asiento-de-tela.jpg",
    description:
      "La silla Doriane  de roble acabado natural y asiento de tela es una pieza artesanal hecha con madera maciza de roble sostenible, ratán trenzado a mano y un asiento con un tapizado efecto lino hidrorepelente.. Ideal para conseguir un comedor de tendencia con look natural gracias a su diseño clásico.",
    price: 444,
    image:
      "https://f.fcdn.app/imgs/cccdb6/www.kavehome.com.uy/kaveuy/24ba/webp/catalogo/CC210_8MV12_1/900x1125/silla-doriane-de-madera-maciza-de-roble-acabado-natural-y-asiento-de-tela.jpg",
    stock: 1,
    featured: false,
    measures: "Al 82,5 cm x An 47 cm x Pr 51 cm",
    style: "Colonial, Rústico, Vintage",
    material: "Espuma, Madera, Ratán, Roble, Tela",
    environment: "Comedor",
    slug: "silla-doriane-de-madera-maciza",
    categoryId: 2,
  },
  {
    title: "Silla Konna Gris Oscuro ",
    imageenvironment:
      "https://f.fcdn.app/imgs/f1502c/www.kavehome.com.uy/kaveuy/58ca/webp/catalogo/CC5212KY15_CC5212KY15_2/900x1125/silla-konna-gris-oscuro-patas-de-madera-maciza-de-fresno-silla-konna-gris-oscuro-patas-de-madera-maciza-de-fresno.jpg",
    description:
      "La silla Konna con sus patas de madera maciza de fresno para cualquier ocasión. No hay nada que se agradezca más que unas sillas cómodas alrededor de una buena mesa. Con las sillas Konna, además de añadir estilo y marcar tendencia en tu comedor, tienes ese confort que esperas de las largas sobremesas.",
    price: 388,
    image:
      "https://f.fcdn.app/imgs/1277d2/www.kavehome.com.uy/kaveuy/2793/webp/catalogo/CC5212KY15_CC5212KY15_1/900x1125/silla-konna-gris-oscuro-patas-de-madera-maciza-de-fresno-silla-konna-gris-oscuro-patas-de-madera-maciza-de-fresno.jpg",
    stock: 1,
    featured: false,
    measures: "Al 15 cm x An 45 cm x Pr 45 cm",
    style: "Moderno, Nórdico",
    material: "Comedor, Escritorio",
    environment: "Comedor",
    slug: "silla-konna-gris-oscuro",
    categoryId: 2,
  },
  {
    title: "Silla Nina Madera Maciza",
    imageenvironment:
      "https://f.fcdn.app/imgs/0a24e6/www.kavehome.com.uy/kaveuy/b545/webp/catalogo/CC2034J01_CC2034J01_2/1920-1200/silla-nina-madera-maciza-eucalipto-acabado-negro-mate-y-cuerda-negro-silla-nina-madera-maciza-eucalipto-acabado-negro-mate-y-cuerda-negro.jpg",
    description:
      "La silla Nina confeccionada de eucalipto y cuerda negra es un diseño donde la estructura de madera maciza de eucalipto y el trenzado del asiento se han trabajado a mano. Además, los materiales están tratados para aprovechar al máximo sus cualidades. Conócelas y disfruta de una pieza única.",
    price: 472,
    image:
      "https://f.fcdn.app/imgs/762e1b/www.kavehome.com.uy/kaveuy/a5fb/webp/catalogo/CC0555_S15_1/900x1125/silla-nina-madera-maciza-eucalipto-y-cuerda-negro.jpg",
    stock: 1,
    featured: false,
    measures: "Al 77 cm x An 53 cm x Pr 54 cm",
    style: "Moderno, Nórdico, Vintage",
    material: "Cuerda, Eucalipto, Madera maciza",
    environment: "Comedor, Escritorio, Exterior",
    slug: "silla-nina-madera-maciza",
    categoryId: 2,
  },
  {
    title: "Mesa Batilde Madera Maciza",
    imageenvironment:
      "https://f.fcdn.app/imgs/ad5eee/www.kavehome.com.uy/kaveuy/2330/webp/catalogo/CC1347M87_CC1347M87_2/900x1125/mesa-batilde-madera-maciza-caucho-con-chapa-de-fresno-70-x-140-cm-mesa-batilde-madera-maciza-caucho-con-chapa-de-fresno-70-x-140-cm.jpg",
    description:
      "Todo lo bueno ocurre alrededor de una mesa. Así que, si quieres escogerla bien, apuesta por aquella que más hable de ti. La mesa Batilde es exclusiva como tú, al ser de madera maciza de caucho, con tonalidades y vetas únicas.",
    price: 496,
    image:
      "https://f.fcdn.app/imgs/0b0aa5/www.kavehome.com.uy/kaveuy/86d9/webp/catalogo/CC1347M87_CC1347M87_1/900x1125/mesa-batilde-madera-maciza-caucho-con-chapa-de-fresno-70-x-140-cm-mesa-batilde-madera-maciza-caucho-con-chapa-de-fresno-70-x-140-cm.jpg",
    stock: 1,
    featured: true,
    measures: "Al 74 cm x An 140 cm x Pr 70 cm",
    style: "Moderno, Nórdico",
    material: "Caucho, Madera maciza",
    environment: "Comedor",
    slug: "mesa-batilde-madera-maciza",
    categoryId: 1,
  },
  {
    title: "Mesa Redonda Maial",
    imageenvironment:
      "https://f.fcdn.app/imgs/1e910e/www.kavehome.com.uy/kaveuy/4696/webp/catalogo/CC2125M47_CC2125M47_2/900x1125/mesa-redonda-maial-madera-maciza-teca-90-cm-mesa-redonda-maial-madera-maciza-teca-90-cm.jpg",
    description:
      "¿Comedor pequeño? Welcome! La mesa Maial es la pieza ideal para espacios reducidos. Es de madera maciza de teca, con unas tonalidades que mantienen la luminosidad y amplitud de la estancia, y es redonda por lo que aprovechas al máximo el espacio.",
    price: 1040,
    image:
      "https://f.fcdn.app/imgs/80bd20/www.kavehome.com.uy/kaveuy/da3b/webp/catalogo/CC2125M47_CC2125M47_1/900x1125/mesa-redonda-maial-madera-maciza-teca-90-cm-mesa-redonda-maial-madera-maciza-teca-90-cm.jpg",
    stock: 1,
    featured: false,
    measures: "Al 77 cm x An 90 cm x Pr 90 cm",
    style: "Rústico",
    material: "Madera",
    environment: "Comedor",
    slug: "mesa-redonda-maial",
    categoryId: 1,
  },
  {
    title: "Sofá Narnia 3 Plazas",
    imageenvironment:
      "https://f.fcdn.app/imgs/73c92e/www.kavehome.com.uy/kaveuy/bdde/webp/catalogo/S481_LD03_2/900x1125/sofa-narnia-3-plazas-marron-192-cm.jpg",
    description:
      "Sofá 3 plazas tapizado con tela Lido tratamiento Teflón antimanchas. Asientos y respaldo desenfundables. Pies en madera de haya natural.",
    price: 1552,
    image:
      "https://f.fcdn.app/imgs/757013/www.kavehome.com.uy/kaveuy/438e/webp/catalogo/S481_LD03_1/900x1125/sofa-narnia-3-plazas-marron-192-cm.jpg",
    stock: 1,
    featured: true,
    measures: "Al 88 cm x An 192 cm x Pr 90 cm",
    style: "Nórdico",
    material: "Acero, Madera maciza, Tapizado Tela Antimanchas",
    environment: "Estar, Living",
    slug: "sofa-narnia-3-plazas",
    categoryId: 3,
  },
  {
    title: "Sofá Gilma 3 Plazas",
    imageenvironment:
      "https://f.fcdn.app/imgs/0a6378/www.kavehome.com.uy/kaveuy/7a2e/webp/catalogo/S682MN14_S682MN14_2/1920-1200/sofa-gilma-3-plazas-con-chaise-longue-izquierdo-gris-patas-metal-negro-260-cm-sofa-gilma-3-plazas-con-chaise-longue-izquierdo-gris-patas-metal-negro-260-cm.jpg",
    description:
      "Un sofá ideal vivas solo o en compañía, con lugar para todos los de casa. El diseño del sofá Gilma con chaise longue, de líneas sencillas y corte contemporáneo, se ajusta a todo tipo de ambiente añadiendo estilo.",
    price: 2440,
    image:
      "https://f.fcdn.app/imgs/03d502/www.kavehome.com.uy/kaveuy/5b02/webp/catalogo/S792M46_S792M46_1/900x1125/sofa-gilma-3-plazas-con-chaise-longue-derecho-gris-patas-acabado-natural-260-cm-sofa-gilma-3-plazas-con-chaise-longue-derecho-gris-patas-acabado-natural-260-cm.jpg",
    stock: 1,
    featured: false,
    measures: "Al 83 cm x An 260 cm x Pr 83 / 158 cm",
    style: "Moderno, Nórdico",
    material: "Madera maciza, Eucalipto, Tapizado Tela",
    environment: "Estar, Living",
    slug: "sofa-gilma-3-plazas",
    categoryId: 3,
  },
  {
    title: "Butaca Glam",
    imageenvironment:
      "https://f.fcdn.app/imgs/5905d6/www.kavehome.com.uy/kaveuy/ffb9/webp/catalogo/S418VA_81_2/900x1125/butaca-glam-mostaza.jpg",
    description:
      "Sillón tapizado con tela Varese tratamiento Teflón antimanchas. Pies en madera de haya natural. Cojín incluido.",
    price: 728,
    image:
      "https://f.fcdn.app/imgs/5ac0b3/www.kavehome.com.uy/kaveuy/2363/webp/catalogo/S418VA_81_1/900x1125/butaca-glam-mostaza.jpg",
    stock: 1,
    featured: false,
    measures: "Alto: 90 cm x Ancho: 73 cm x Fondo: 85 cm",
    style: "Moderno, Nórdico",
    material: "Madera maciza, Tapizado Tela",
    environment: "Estar, Living",
    slug: "butaca-glam",
    categoryId: 3,
  },
];

module.exports = products;
