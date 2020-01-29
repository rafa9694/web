function tratarErro(erro)
{
    //throw new Error('...')
    throw 10 
}

function imprimeNOme(obj){
    try {console.log(obj.name.toUpperCase()+ '!!!')}
    catch (e){
        tratarErro(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome : 'Roberto'}
imprimeNOme(obj)