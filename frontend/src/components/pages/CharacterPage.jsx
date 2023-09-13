import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CharacterPage() {
    const [data, setData] = useState(undefined);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch((err) => console.error(err))
    }, [])

    return (
        <article className="rick-and-morty-article">
            {data !== undefined &&
                <>
                    <section aria-label="Left part of the card that display a picture of the character">
                        <img src={data.image} />
                    </section>
                    <section aria-label="Right part of the card that display informations about the character">
                        <h2>{data.name}</h2>

                        <div aria-label="Zone that give us information if the character is dead or alive">
                            <svg height="40" width="40">
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="10"
                                    fill="green"
                                />
                            </svg>
                            <p>
                                {data.status} - {data.species}
                            </p>
                        </div>

                        <p>
                            <span>Gender:</span> {data.origin.name}
                        </p>
                        <p>
                            <span>Origin:</span> {data.gender}
                        </p>
                    </section>
                </>
            }
        </article>
    )
}

export default CharacterPage;