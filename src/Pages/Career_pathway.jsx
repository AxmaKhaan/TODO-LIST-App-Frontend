import React, { useEffect, useState } from 'react'
import Career_card from '../Components_reuse/Career_card.jsx';
import "/src/Career_pathway.css"

export default function Career_pathway() {
    const [selectedCards, setSelectedCards] = useState({});
    // const [popUp, setpopUp] = useState("");
    const handleSelect = async (cardId, option) => {
        
        // setpopUp("selected")

        await fetch("todo-list-app-backend-production-622b.up.railway.app/save-choice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: localStorage.getItem("userId"),
                cardId,
                choice: option
            })
        });
        
        if (selectedCards[cardId]) return;

        setSelectedCards({
            ...selectedCards,
            [cardId]: option
        });
        
    };

    // localStorage.setItem("selection", "selected")
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `todo-list-app-backend-production-622b.up.railway.app/get-choices/${localStorage.getItem("userId")}`
            );

            const data = await res.json();

            let obj = {};
            data.forEach(item => {
                obj[item.cardId] = item.choice;
            });

            setSelectedCards(obj);
        };

        fetchData();
    }, []);
    // const popUp = localStorage.getItem("selection");
    // useEffect(() => {
    //         const saved = localStorage.getItem("careerChoice");
    //         if (saved) {
    //             setSelected(saved);
    //             setLocked(true);
    //         }
    //     }, []);
    // console.log(selected);

    return (
        <>
            <section className='Career_pathway_section'>
                <Career_card
                    id="card1"
                    Career_card_label="Web Development : L1,A1"
                    selected={selectedCards["card1"]}
                    onSelect={handleSelect} 
                />

                <Career_card
                    id="card2"
                    Career_card_label="Web Development : L1,A2"
                    selected={selectedCards["card2"]}
                    onSelect={handleSelect} 
                />

                <Career_card
                    id="card3"
                    Career_card_label="Web Development : L2, B1"
                    selected={selectedCards["card3"]}
                    onSelect={handleSelect} 
                />
            </section>
        </>

    )
}
