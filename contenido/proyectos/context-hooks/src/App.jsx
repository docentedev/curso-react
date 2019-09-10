import React from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Table from './components/Table';
import Title from './components/Title';

import Context from './Context';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      counter: 1,
    };
    this.addNewHeroToList = this.addNewHeroToList.bind(this);
    this.removeHeroFromList = this.removeHeroFromList.bind(this);
    this.updateHeroFromList = this.updateHeroFromList.bind(this);
  }

  addNewHeroToList(hero) {
    const currentList = this.state.list;
    const counter = this.state.counter;
    currentList.push({
      ...hero,
      id: counter,
    });
    this.setState({
      list: this.state.list,
      counter: counter + 1,
    });
  }

  removeHeroFromList(id) {
    const currentList = this.state.list;
    const newList = currentList.filter(e => e.id !== id);
    this.setState({
      list: newList,
    });
  }

  updateHeroFromList(heroUpdate) {
    const currentList = this.state.list;
    const newList = currentList.map(hero => {
      const currentId = hero.id;
      const updateId = heroUpdate.id;
      if (currentId === updateId) {
        return heroUpdate;
      }

      return hero;
    });
    this.setState({
      list: newList,
    });
  }

  render() {
    return (
      <Context.Provider value={this.state.list}>
        <div className="App">
          <Title>Lista de heroes</Title>
          <AddForm
            onAddNewHero={this.addNewHeroToList}
          />
          <Table
            onRemoveHero={this.removeHeroFromList}
            onUpdateHero={this.updateHeroFromList}
          />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
