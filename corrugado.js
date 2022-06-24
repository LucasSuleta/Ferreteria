const ferreteria = {

    corrugado: [{
    
        id: 1300,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "5/8",
        stock: '10',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1301,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "3/8",
        stock: '30',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1302,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "7/8",
        stock: '25',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1303,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "1º",
        stock: '22',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1304,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "1º",
        stock: '18',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1305,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "1 1/4º",
        stock: '35',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1306,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "1 1/2º",
        stock: '25',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1307,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "2º",
        stock: '50',
        metros: '10',
        modelo: "Caño Corrugado",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1308,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "3/4",
        stock: '25',
        metros: '10',
        modelo: "Union Para Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1309,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "7/8",
        stock: '25',
        modelo: "Union Para Caño Corrugado",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1310,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "1",
        stock: '50',
        modelo: "Union Para Caño Corrugado",  
        vendido: true,
        oferta: true,
    },

{
        id: 1311,
        marca: 'Ignifugo',
        color:"Blanco",
        precio:"1500",
        tipo: "3/4",
        stock: '20',
        modelo: "Conector Para Caño Corrugado",  
        vendido: true,
        oferta: true,
 },
{

    id: 1312,
    marca: 'Ignifugo',
    color:"Blanco",
    precio:"1500",
    tipo: "7/8",
    stock: '30',
    modelo: "Conector Para Caño Corrugado",  
    vendido: true,
    oferta: true,
},
{
    id: 1312,
    marca: 'Ignifugo',
    color:"Blanco",
    precio:"250",
    tipo: "1",
    stock: '28',
    modelo: "Conector Para Caño Corrugado",  
    vendido: true,
    oferta: true,
},

],

    mostrarCorrugado: function () {
        this.corrugado.forEach((corrugado) => { console.log(corrugado) });
    },

    venderCorrugado: function (id) {
        this.corrugado.forEach((corrugado) => {
            if (corrugado.id === id) {
                corrugado.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {

        const currentCorrugado = this.corrugado.find(corrugado => corrugado.id === id)
        currentCorrugado.stock = currentCorrugado.stock - qty;
        console.log(currentCorrugado.stock)
    }

}
ferreteria.descuentoStock(1300,2);