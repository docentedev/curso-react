import React from 'react';
import UpdateForm from './UpdateForm';

const HeroItem = function (props) {
    return (<tr>
        <td>{props.hero.id}</td>
        <td>{props.hero.name}</td>
        <td>{props.hero.race}</td>
        <td>{props.hero.age}</td>
        <td>{props.hero.weapon}</td>
        <td>
            <button onClick={() => {
                props.onRemoveHero(props.hero.id)
            }}>Eliminar</button>
            <UpdateForm hero={props.hero} onUpdateHero={props.onUpdateHero}/>
        </td>
    </tr>);
}

export default HeroItem;