const ferreteria = {

    veneno: [{
    
        id: 301,
        marca: 'Py',
        modelo: '5º',
        unidad: '1000',
        precio: '3',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },
    {
        id: 302,
        marca: 'Py',
        modelo:'6º',
        unidad: '2000',
        precio: '4',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },
  
    {
        id: 303,
        marca: 'Py',
        modelo:'8º',
        unidad: '500',
        precio: '5',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },
    {
        id: 304,
        marca: 'Py',
        modelo:'10º',
        unidad: '800',
        precio: '10',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },
    {
        id: 305,
        marca: 'Py',
        modelo:'12º',
        unidad: '700',
        precio: '20',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },

    {
        id: 306,
        marca: 'Py',
        modelo:'14º',
        unidad: '1500',
        precio: '25',
        tipo: "Ladrillo Comun",
        vendido: true,
        oferta: true,
    },

{
    id: 307,
    marca: 'Py',
    modelo: '5º Espiga',
    unidad: '1000',
    precio: '5',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,
},
{
    id: 308,
    marca: 'Py',
    modelo:'6º Espiga',
    unidad: '2000',
    precio: '7',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,
},

{
    id: 309,
    marca: 'Py',
    modelo:'8º Espiga',
    unidad: '500',
    precio: '15',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,
},
{
    id: 310,
    marca: 'Py',
    modelo:'10º Espiga',
    unidad: '800',
    precio: '25',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,
},
{
    id: 305,
    marca: 'Py',
    modelo:'12º Espiga',
    unidad: '700',
    precio: '35',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,
},

{
    id: 306,
    marca: 'Py',
    modelo:'14º Espiga',
    unidad: '1500',
    precio: '90',
    tipo: "Ladrillo Hueco",
    vendido: true,
    oferta: true,

}],

    mostrarTarugos: function () {
        this.tarugos.forEach((tarugos) => { console.log(tarugos) });
    },

    venderTarugos: function (id) {
        this.tarugos.forEach((tarugos) => {
            if (tarugos.id === id) {
                tarugos.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentTarugos = this.tarugos.find(tarugos => tarugos.id === id)
        currentTarugos.stock = currentTarugos.stock - qty;
        console.log(currentTarugos.stock)
    }

}
ferreteria.descuentoStock(150,10);