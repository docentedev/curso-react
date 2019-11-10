import React, { Component } from 'react';
import { Button, Table as TableRS } from 'reactstrap';

import { users } from '../../utils/mock-data';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }

    getAlive = a => a ? 'SI' : 'NO';
    getAction = a => a ? 'Matar' : 'Revivir';

    handlerToggleAlive = (user) => {
        const i = this.state.users.findIndex(e => e.id === user.id);
        return (event) => {
            const nL = this.state.users;
            nL[i].alive = !nL[i].alive;

            this.setState({
                users: nL,
            })
        }
    }

    render() {
        return (
            <TableRS hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Vive</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(elm => (
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.age}</td>
                            <td>{this.getAlive(elm.alive)}</td>
                            <td>
                                <Button
                                block
                                    color={elm.alive ? 'danger' : 'success'}
                                    onClick={this.handlerToggleAlive(elm)} >{this.getAction(elm.alive)}</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableRS>
        );
    }
}

export default Table;