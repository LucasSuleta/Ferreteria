const ferreteria = {

    teflon: [{
    
        id: 0100,
        marca: 'Cafu',
        tipo: '1/2º',
        stock: '40',
        precio: '100',
        metros: "10", 
        vendido: true,
        oferta: true,
    },
    {
        id: 0101,
        marca: 'Cafu',
        tipo: '3/4º',
        stock: '30',
        precio: '120',
        metros: "10", 
        vendido: true,
        oferta: true,
    },
  
    {
        id: 0102,
        marca: 'Cafu',
        tipo: '1/2º',
        stock: '30',
        precio: '180',
        metros: "10",
        densidad: 'Alta', 
        vendido: true,
        oferta: true,
    },

    {
        id: 0103,
        marca: 'Cafu',
        tipo: '3/4º',
        stock: '20',
        precio: '200',
        metros: "10",
        densidad: 'Alta', 
        vendido: true,
        oferta: true,
    },
   

],

    mostrarTeflon: function () {
        this.teflon.forEach((teflon) => { console.log(teflon) });
    },

    venderTeflon: function (id) {
        this.teflon.forEach((teflon) => {
            if (teflon.id === id) {
                teflon.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {//abreviacion de quantity cantidad de productos

        const currentTeflon = this.teflon.find(teflon => teflon.id === id)
        currentTeflon.stock = currentTeflon.stock - qty;
        console.log(currentTeflon.stock)
    }

}
ferreteria.descuentoStock(0102,5);