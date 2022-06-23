let contenedor ={
    save:(()=>{
        let libro={
            title:'harry_potter',
            price:10000,
            thumbnile:`https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg`,
            id:1,
        }
        JSON.stringify(libro);
        const fs = require('fs');
            
        fs.writeFileSync('libro.txt',libro),(err)=>{
            if(err){
                console.log('error')
            }
        }
        
    })()
}
contenedor.save