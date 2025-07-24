
const basePath = window.location.pathname.includes("/pages/") ? "../image/" : "image/";
let productos = [
    {   
        id: "01",
        nombre: "Hoodie",
        Destacado: true,
        imagen: basePath + "buzo1.png",
        precio: 30000
    },
    {   
        id: "02",
        nombre: "Hoodie Sky",
        Destacado: false,
        imagen: basePath + "buzo2.png",
        precio: 30000
    },
    {   
        id: "03",
        nombre: "Hoodie Logo",
        Destacado: true,
        imagen: basePath + "buzo3.png",
        precio: 28000
    },
    {   
        id: "04",
        nombre: "Jean Black",
        Destacado: false,
        imagen: basePath + "jean.png",
        precio: 65000
    },
    {   
        id: "05",
        nombre: "Shirt Lava",
        Destacado: false,
        imagen: basePath + "remera1.png",
        precio: 25000
    },
    {   
        id: "06",
        nombre: "Shirt Vulcane",
        Destacado: true,
        imagen: basePath + "remera2.png",
        precio: 28000
    },
    {   
        id: "07",
        nombre: "Shirt Mountain",
        Destacado: true,
        imagen: basePath + "remera3.png",
        precio: 22000
    },
]