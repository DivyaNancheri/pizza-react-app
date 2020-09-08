import React from 'react';
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

export default function Customize({ ingredients }) {
    return (
        <div style={{ display: 'flex' }}>
            {JSON.stringify(ingredients)}
            <div style={{ border: '2px solid black', flex: 1 }}>
                <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
                    <img src={Cheese} alt="Cheese" height="100%" width="100%" className="ingredients" />
                    <img src={Olive} alt="Olive" height="100%" width="100%" className="ingredients" />
                    <img src={Pineapple} alt="Pineapple" height="100%" width="100%" className="ingredients" />
                    <img src={Mushroom} alt="Mushroom" height="100%" width="100%" className="ingredients" />
                    <img src={Basil} alt="Basil" height="100%" width="100%" className="ingredients" />
                    <img src={Tomato} alt="Tomato" height="100%" width="100%" className="ingredients" />
                    <img src={Base} alt="Pizza base" height="100%" width="100%" />
                </div>
            </div>
            <div style={{ border: "2px solid blue", flex: 1 }}>
                <input type="checkbox" id="cheese" name="cheese" value="cheese" />
                <label for="cheese"> Cheese</label>
            </div>
        </div>
    )
}
