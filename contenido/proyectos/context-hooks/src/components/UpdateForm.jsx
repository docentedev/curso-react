import React, { useState } from 'react';

/**
 * 
 * @param {string} n - nombre del hero 
 * @param {string} r - raza del hero
 * @param {number} a - edad del hero
 * @param {string} w - arma del hero
 */
const isDisabled = (n, r, a, w) => {
    return n === '' || r === '' || a < 0 || a > 100 || w === '';
}

const UpdateForm = function (props) {
    const [toggleView, setToggleView] = useState('none');

    const [id, setId] = useState(props.hero.id);
    const [nombre, setNombre] = useState(props.hero.name);
    const [race, setRace] = useState(props.hero.race);
    const [age, setAge] = useState(props.hero.age);
    const [weapon, setWeapon] = useState(props.hero.weapon);

    return (
        <div>
            <button onClick={() => { setToggleView('block'); }}>Ver form de Actualizar</button>
            <div className="modal" style={{ display: toggleView }}>
                <form>
                    <label>Nombre</label>
                    <input name="nombre" type="text" value={nombre} onChange={(event) => { setNombre(event.target.value); }} />
                    <br />
                    <label>Raza</label>
                    <input name="race" type="text" value={race} onChange={(event) => { setRace(event.target.value); }} />
                    <br />
                    <label>Edad</label>
                    <input name="age" type="number" min="0" value={age} onChange={(event) => { setAge(event.target.value); }} />
                    <br />
                    <label>Arma</label>
                    <input name="weapon" type="text" value={weapon} onChange={(event) => { setWeapon(event.target.value); }} />
                    <br />
                    <button
                        disabled={isDisabled(nombre, race, age, weapon)}
                        onClick={(event) => {
                            event.preventDefault();
                            const hero = {
                                id: id,
                                name: nombre,
                                age: age,
                                weapon: weapon,
                                race: race,
                            };
                            props.onUpdateHero(hero);
                            setToggleView('none');
                        }}>Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateForm;