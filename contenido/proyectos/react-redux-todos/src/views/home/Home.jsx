import React from 'react';
import { connect, batch } from 'react-redux';
import {
    addTodo,
    removeTodo,
    completedTodo,
    uncompletedTodo,
    increaseCounter,
} from '../../store/actions/todos.actions';
import { Table, TodoForm } from '../../components';

const Home = (props) => {
    const {
        counter,
        todos,
        addTodo,
        removeTodo,
        completedTodo,
        uncompletedTodo,
    } = props;
    return (
        <div className="home">
            <TodoForm counter={counter} addTodo={addTodo} />
            <Table
                todos={todos}
                removeTodo={removeTodo}
                uncompletedTodo={uncompletedTodo}
                completedTodo={completedTodo}
            />
        </div>
    );
};

// simplemente se retorna la parte de los todos al componente
const mapStateToProps = state => state.todos;

const maDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            // batch permite que los componentes solo
            // renderizen cuando ambas acciones esten completadas
            batch(() => {
                dispatch(increaseCounter());
                dispatch(addTodo(todo));
            });
        },
        removeTodo: todo => dispatch(removeTodo(todo)),
        completedTodo: todo => dispatch(completedTodo(todo)),
        uncompletedTodo: todo => dispatch(uncompletedTodo(todo)),
    };
};

export default connect(
    mapStateToProps,
    maDispatchToProps,
)(Home);
