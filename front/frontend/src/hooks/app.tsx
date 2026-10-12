import { useState, useEffect } from "react"

export default function Apoi() {
    const [data, setData] = useState(0)
    useEffect(() => {

        console.log("Increase:", data)

        return () => {
            console.log("Data yangilandi")
        }
    }, [data])

    return (
        <div className="">
            <h1>value: {data}</h1>
            <button className="bg-amber-300" onClick={() => setData(data + 1)}>Increase</button>
        </div>
    )
}
