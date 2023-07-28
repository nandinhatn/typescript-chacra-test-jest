import {soma, multiplica} from './soma'
describe('soma', ()=>{
    it('deve somar 1 ao número informado', ()=>{
        const value = soma(1)
        expect(value).toBe(2)
    })
    it('deve multilplicar um numero por 2', ()=>{
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })
    it('deve multiplicar um numero por 3', ()=>{
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })
    it('Deve infomar um erro com multiplivador diferente de 2 ou 3', ()=>{
        const value = multiplica(2,4)
        expect(value).toBe("Multiplicador não aceito")
    })

})