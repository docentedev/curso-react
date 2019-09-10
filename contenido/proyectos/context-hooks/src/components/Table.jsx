import React, { useContext } from 'react';
import Context from '../Context';
import HeroItem from './HeroItem';


const Table = function (props) {
    // lista []
    const context = useContext(Context);
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Raza</th>
                    <th>Edad</th>
                    <th>Arma</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {context.map((element, index) => {
                    return (
                        <HeroItem
                            key={index}
                            hero={element}
                            onRemoveHero={props.onRemoveHero}
                            onUpdateHero={props.onUpdateHero}
                        />);
                })}
            </tbody>
        </table>
    </div>);
}

export default Table;