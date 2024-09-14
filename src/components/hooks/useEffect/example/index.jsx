import { useEffect } from "react"

export default function Example(){
    useEffect(() => {
        console.log("oaoaoa")
        // toda vez que recarregar a pagina, o useffect vai ser executado
        // [] array de dependencia
        // toda recarregada ou mudança nas dependeicias vai alterar o useEffect
    },[])

    return (
        <div>oi</div>

    )

}