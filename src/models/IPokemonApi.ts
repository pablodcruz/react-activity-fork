export interface IPokemonApi {
    id:number,
    name:string,
    level?:number,
    stats: [
        {
            base_stat:number
        },
        {
            base_stat:number
        }
    ],
    sprites: {
        front_default:string
    }
}