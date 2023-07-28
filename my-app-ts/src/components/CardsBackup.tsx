interface ICard{
    id:number,
    texto:string
}
export const Card =({id, texto}:ICard)=>{
    return(
        <div>
           
            {texto}
        </div>
    )
}