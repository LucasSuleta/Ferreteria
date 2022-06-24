const ferreteria = {

    disyuntor: [{
    
        id: 1400,
        marca: 'Sica',
        modelo: 'Bipolar',
        stock: '10',
        precio: '3500',
        Amper: "25",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1401,
        marca: 'Sica',
        modelo: 'Bipolar',
        stock: '10',
        precio: '3800',
        Amper: "40",  
        vendido: true,
        oferta: true,
    },
  
    {
        id: 1402,
        marca: 'Sica',
        modelo: 'Bipolar',
        stock: '8',
        precio: '4200',
        Amper: "63",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1403,
        marca: 'Sica',
        modelo: 'Trifasica',
        stock: '8',
        precio: '4500',
        Amper: "63",  
        vendido: true,
        oferta: true,
    },
    {
        id: 1404,
        marca: 'Chint',
        modelo: 'Bipolar',
        stock: '8',
        precio: '3000',
        Amper: "25",  
        vendido: true,
        oferta: true,
    },

    {
        id: 1405,
        marca: 'Chint',
        modelo: 'Bipolar',
        stock: '8',
        precio: '3200',
        Amper: "40",  
        vendido: true,
        oferta: true,
    }

   ],

    mostrarDisyuntor: function () {
        this.disyuntor.forEach((disyuntor) => { console.log(disyuntor) });
    },

    venderDisyuntor: function (id) {
        this.disyuntor.forEach((disyuntor) => {
            if (disyuntor.id === id) {
                disyuntor.vendido = true;
            }
        });

    },
    descuentoStock: function (id, qty) {

        const currentDisyuntor = this.disyuntor.find(disyuntor => disyuntor.id === id)
        currentDisyuntor.stock = currentDisyuntor.stock - qty;
        console.log(currentDisyuntor.stock)
    }

}
ferreteria.descuentoStock(1400,5);