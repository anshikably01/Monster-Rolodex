import { useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

const App=()=>{
  const [searchField, setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]); 

  console.log('render');

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user ));
 

  },[]);


  const onSearchChange=(event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  };
  const filteredMonsters = monsters.filter((monster) =>{
     return monster.name.toLocaleLowerCase().includes(searchField);
 } );
  return(
    <div className="App">
  <h1>Monsters Rolodex</h1>
 
  <SearchBox
  classname='monsters-search-box'
    placeholder="search monsters"
   onChangeHandler={onSearchChange}
  />
  <CardList monsters={filteredMonsters} />
</div>

  )
}
//class App extends Component {
 // constructor() {
   // super();
    //this.state = {
      //monsters: [],
      //searchField: "",
    //};
  //}
  //componentDidMount() {
    //fetch("https://jsonplaceholder.typicode.com/users")
      //.then((response) => response.json())
      //.then((user) => this.setState({ monsters: user }));
 // }

  //handleChange = (e) => {
    //this.setState({ searchField: e.target.value });
  //};
 // render() {
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    //Easier way way to write above two lines=>
    //const { monsters, searchField } = this.state;
    //const filteredMonsters = monsters.filter((monster) =>
      //monster.name.toLowerCase().includes(searchField.toLowerCase())
   // );

   // return (
     // <div className="App">
       // <h1>Monsters Rolodex</h1>
        //<SearchBox
         // placeholder="search monsters"
         // handleChange={this.handleChange}
        ///>
       // <CardList monsters={filteredMonsters} />
     // </div>
   // );
 // }
//}

export default App;
