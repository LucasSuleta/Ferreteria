const ferreteria = {

    discodecorte:[{
            id:100,
            marca:'TK 99 - ',
            modelo:'Profesional',
            litros:'10',
            precio:'2500',
            color:'blanca',
            vendido:true,
            oferta:true,
        },
        {
            id:101,
            marca:'TK 99',
            modelo:'Profesional',
            Litros:'20',
            precio:'3900',
            color:'Blanco',
            vendido:false,
            oferta:true,
        },
        {
            id:102,
            marca:'Alta Gama',
            modelo:'Premium',
            Litros:'10',
            precio:'7500',
            color:'Rojo Borgoña',
            vendido:false,
            oferta:true,
        },
        {
            id:103,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,
        },
        {
            id:104,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,
        },
        {
            id:105,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,
        },
        {
            id:106,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,

        },
        {
            id:107,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,
        },
        {
            id:108,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false,
            oferta:true,
        },
        {
            id:109,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'20',
            precio:'8000',
            color:'Verde Zafari',
            vendido:false
        },
        {   
            id:110,
            marca:'El Utilitario',
            modelo:'Exterior',
            Litros:'10',
            precio:'8000',
            color:'Rojo Bermellon',
            vendido:false
        }],

        

        
    mostrarPinturas: function(){
        this.pintura.forEach( (pintura)=>{ console.log(pintura) });
    }, 

    venderPintura: function (id) { //este método recibe por parámetro el id de un producto (un número) y cambia la propiedad vendido a true
        this.pintura.forEach( (pintura)=>{  
            if( pintura.id === id ){
                pintura.vendido = true;
            }
        });
    }}