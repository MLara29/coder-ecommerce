
const infoProducts =[
    { id: 1, titulo: 'Airpods Max' },

    { id: 2, titulo: 'Apple AirPods 2ª' },

    { id: 3, titulo: 'Apple AirPods Pro 2° Geração - USB-C' },

    { id: 4, titulo: 'Beats Fit Pro' },

    
]



export function item(){
    
    console.log('comecei a rodar')

    
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(infoProducts.length > 0){
                resolve(infoProducts)
            }
            else{
                reject("erro nas informações de Produtos Solicitados")
            }
        },2000)

        
    })
    
}