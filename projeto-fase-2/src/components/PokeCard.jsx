
import { useState } from "react"


export default function PokeCard({req}){
    const [card, setCard] = useState(null)
    
    return(
        <div className="pokemonRandom">
            <button onClick={()=> setCard(req)}>EU ESCOLHO VOCÊ!</button>

            {!card && <div>Capture seu primeiro PIKOMON</div>}

            {card&& 

                <div>
                    Nome: {card.name}
                    <img src={card.sprites.front_default}
                    className="poke"
                    width='180'
                    alt="" />

                     {card.stats.map((stat) => (
                        <div className="stats-menu">
                            <span>{stat.stat.name}</span>
                            <span>{stat.base_stat}</span>
                            
                            <div className="stat-bar">
                                <div
                                    className="stat-fill"
                                    style={{
                                            width: `${Math.min(stat.base_stat, 150) / 150 * 100}%`,
                                            }}
                                />
                            </div>

                        </div>
                    ))}

                </div>
            }
        </div>
    )}