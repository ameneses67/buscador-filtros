const autos = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2020,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatica",
    src: "https://www.bmw.com.mx/content/dam/bmw/common/all-models/3-series/sedan/2021/navigation/bmw-3-series-modellfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1627635464300.png?url",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2020,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatica",
    src: "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/3016-2017-audi-a4-premiumplus?url",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Rojo",
    transmision: "automatica",
    src: "https://cfx-vrf-main-imgs.imgix.net/3/3/e/663d866c31d1dff3752d5122456161a1e7604e33.png?auto=format&fit=clip&w=420?url",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2020,
    precio: 35000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatica",
    src: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_077ed26cfd4b4ffaa9cdcc9389c458a1.jpg?url",
  },
  {
    marca: "Corvette",
    modelo: "C8",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Azul",
    transmision: "automatica",
    src: "https://www.gts-models.com/wp-content/uploads/2020/08/gt286-chevrolet-corvette-c8-02.jpg?url",
  },
  {
    marca: "Mercedes Benz",
    modelo: "C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Perla",
    transmision: "automatica",
    src: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_e4109132de26436da739fd86d5b715d0.jpg?url",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Blanco",
    transmision: "manual",
    src: "https://static.cargurus.com/images/forsale/2023/02/11/14/21/2017_chevrolet_camaro-pic-2361339243133881998-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp?url",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
    src: "https://www.diariomotor.com/imagenes/picscache/1440x655c/ford-mustang-2019-oferta_1440x655c.jpg?url",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2020,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatica",
    src: "https://car-recalls.eu/wp-content/uploads/2021/11/dodge-challenger-2020-windscreen-768x432.jpg?url",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Azul",
    transmision: "manual",
    src: "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/22527-2022-audi-a3-premium-plus?url",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2020,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
    src: "https://freepngimg.com/thumb/dodge_challenger/112152-dodge-challenger-hellcat-srt-photos.png?url",
  },
  {
    marca: "Mercedes Benz",
    modelo: "C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Plata",
    transmision: "automatica",
    src: "https://www.agredasa.es/wp-content/uploads/2016/02/clase-c-coupe-400x250.png?url",
  },
  {
    marca: "BMW",
    modelo: "M5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Gris",
    transmision: "automatica",
    src: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_4c52bfdd6eb740f7bc3b94d3e43ac703.jpg?url",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Militar",
    transmision: "manual",
    src: "https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/mustang-mach-1/2022/colorizer/gris-acero/fco-mustang-mach-1-gris.jpg.dam.full.high.jpg/1652739844848.jpg?url",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Vino",
    transmision: "automatica",
    src: "https://www.cars.com/i/large/in/v2/stock_photos/daa400e7-0658-49c0-85b2-bed9a95a856c/2c7d6674-ee37-4c98-ae22-911264d1da62.png?url",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Negro",
    transmision: "automatica",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQbJ3Lpr8yyxagCX22YeXM085yzUXiHEVCg&usqp=CAU?url",
  },
  {
    marca: "BMW",
    modelo: "Serie 7",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Azul",
    transmision: "automatica",
    src: "http://i0.wp.com/www.mundoautomotor.com.ar/web/wp-content/uploads/2014/05/bmw-serie-7-edicion-exclusive-0.jpg?url",
  },
  {
    marca: "Mercedes Benz",
    modelo: "C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatica",
    src: "https://ymimg1.b8cdn.com/uploads/car_model/8907/pictures/9015212/2018_Mercedes_Benz_C_Class_Cabriolet.png?url",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatica",
    src: "https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i159615290/2023_audi_a4_sedan_angularfront.jpg?url",
  },
];

export default autos;
