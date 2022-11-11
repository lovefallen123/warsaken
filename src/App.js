import logo from './logo.svg';
import './App.css';
import React from 'react';
import URL from './URL.js';

class App extends React.Component{

  async loadJsonURL(url,key) {
    var response=fetch(url.stringify(), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
          },
      })
      .then(response => response.json())
      .then(response => JSON.stringify(response))
      var jsonresponse = await response
      localStorage.setItem(key,jsonresponse);
      console.log("Fetch from API completed");
      this.populateTemplate();
  }

  async populateTemplate(){
    if ("templateJson" in localStorage){
      let jsonresponse=localStorage.getItem("templateJson")
      jsonresponse = JSON.parse(jsonresponse)
      let rank = new Set()
      let rarity = new Set()
      let type = new Set()
      let subset = new Set()
      jsonresponse.data.forEach(element => {
          rank.add(element.immutable_data.rank)
          rarity.add(element.immutable_data.rarity)
          type.add(element.immutable_data.type)
          subset.add(element.immutable_data.subset)
        });
        rank.delete(undefined)
        rarity.delete(undefined)
        type.delete(undefined)
        subset.delete(undefined)

        this.setState({
          rank : [...rank],
          rarity : [...rarity],
          type : [...type],
          subset : [...subset]},()=>{console.log("state set");console.log(this.state)}
        )
    }else{
      console.log("empty")
      console.log(this.state)
    }
    
  }

  constructor(props){
    super(props);
    const templatelink = new URL("https://wax.api.atomicassets.io/atomicassets/v1/templates")
    templatelink.add({
      collection_name:"warsaken",
      limit:1000,
      order:"desc",
      sort:"created"
    });
    this.state={
        templatelink:templatelink
    }
  }

componentDidMount(){
  this.populateTemplate();
}
  static templatelink ="https://wax.api.atomicassets.io/atomicassets/v1/templates";
  static collection_name="warsaken";
  static expdict = { };
  static namelist=[];
  static raritylist=[];
  render()  {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={()=>this.loadJsonURL(this.state.templatelink,'templateJson')}>
            loadTemplate
          </button>
          <button onClick={()=>this.populateTemplate()}>
            printTemplate
          </button>
          <button onClick={()=>localStorage.clear()}>
            clearCache
          </button>
        </header>
      </div>
    );
  }
}

export default App;
