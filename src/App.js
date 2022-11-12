import logo from './logo.svg';
import './App.css';
import React from 'react';
import URL from './URL.js';

class App extends React.Component{

  expdict = {'24K Gold': {'Rank 1': '12,500', 'Rank 2': '25,000', 'Rank 3': '50,000', 'Rank 4': '125,000'}, '24K Gold (Loot)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '500,000'}, 'Base': {'Rank 1': 1, 'Rank 2': 2, 'Rank 3': 5, 'Rank 4': 15}, 'Black Camo': {'Rank 1': '1,600', 'Rank 2': '3,200', 'Rank 3': '8,000', 'Rank 4': '24,000'}, 'Black Camo First Wave': {'Rank 1': '6,000', 'Rank 2': '12,000', 'Rank 3': '30,000', 'Rank 4': '90,000'}, 'Black Camo First Wave (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '180,000'}, 'Black Camo First Wave (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '180,000'}, 'Blood Foil': {'Rank 1': '50,000', 'Rank 2': '100,000', 'Rank 3': '200,000', 'Rank 4': '500,000'}, 'Blood Foil (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '1,000,000'}, 'Blood Foil (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '1,000,000'}, 'Camo': {'Rank 1': '400', 'Rank 2': '800', 'Rank 3': '2,000', 'Rank 4': '6,000'}, 'Camo (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '12,000'}, 'Camo (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '12,000'}, 'Camo Edge First Wave': {'Rank 1': '4,000', 'Rank 2': '8,000', 'Rank 3': '20,000', 'Rank 4': '60,000'}, 'Camo Edge First Wave (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '120,000'}, 'Camo Edge First Wave (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '120,000'}, 'Decadent': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '500,000'}, 'Fire Forged': {'Rank 1': '200', 'Rank 2': '400', 'Rank 3': '1,000', 'Rank 4': '3,000'}, 'Fire Forged (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '6,000'}, 'Fire Forged (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '6,000'}, 'Fire Forged First Wave': {'Rank 1': '3,000', 'Rank 2': '6,000', 'Rank 3': '15,000', 'Rank 4': '45,000'}, 'Fire Forged First Wave (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '90,000'}, 'Fire Forged First Wave (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '90,000'}, 'Foil Fire First Wave': {'Rank 1': '8,000', 'Rank 2': '16,000', 'Rank 3': '40,000', 'Rank 4': '120,000'}, 'Foil Fire First Wave (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '240,000'}, 'Foil Fire First Wave (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '240,000'}, 'Foil Prime': {'Rank 1': '200', 'Rank 2': '400', 'Rank 3': '1,000', 'Rank 4': '3,000'}, 'Foil Prime (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '6,000'}, 'Foil Prime (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '6,000'}, 'Foil Prime (Loot)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '18,000'}, 'Full Art': {'Rank 1': 10, 'Rank 2': 20, 'Rank 3': 50, 'Rank 4': 150}, 'Full Art (G0Force)': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 300}, 'Full Art (Infinite)': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 300}, 'Full Art (Resource)': {'Rank 1': 1, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Full Art Medal': {'Rank 1': 20, 'Rank 2': 40, 'Rank 3': 100, 'Rank 4': 300}, 'Full Art Medal First Wave': {'Rank 1': '1,000', 'Rank 2': '2,000', 'Rank 3': '5,000', 'Rank 4': '15,000'}, 'Hacked': {'Rank 1': '1,600', 'Rank 2': '3,200', 'Rank 3': '8,000', 'Rank 4': '24,000'}, 'Hex Tech': {'Rank 1': '600', 'Rank 2': '1,200', 'Rank 3': '3,000', 'Rank 4': '9,000'}, 'Hex Tech (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '18,000'}, 'Hex Tech (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '18,000'}, 'Loot': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Murdered Out': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '12,000'}, 'Murdered Out (Decadent)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '125,000'}, 'Murdered Out (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '48,000'}, 'Murdered Out (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '48,000'}, 'Night Vision': {'Rank 1': '800', 'Rank 2': '1,600', 'Rank 3': '4,000', 'Rank 4': '12,000'}, 'Night Vision (G0Force)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '24,000'}, 'Night Vision (Infinite)': {'Rank 1': '0', 'Rank 2': '0', 'Rank 3': '0', 'Rank 4': '24,000'}, 'Owner': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Promo': {'Rank 1': 1, 'Rank 2': 2, 'Rank 3': 5, 'Rank 4': 15}, 'Smoke Noir': {'Rank 1': '6,000', 'Rank 2': '12,000', 'Rank 3': '25,000', 'Rank 4': '70,000'}, 'Tenant': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Thermal Ash': {'Rank 1': '25,000', 'Rank 2': '50,000', 'Rank 3': '100,000', 'Rank 4': '250,000'}, 'Unique': {'Rank 1': '600', 'Rank 2': '1,200', 'Rank 3': '3,000', 'Rank 4': '9,000'}, 'Upgrade': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 1}};

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
  }

  async loadAllTemplates(url,key,index) {
    url.query["page"]=index;
    console.log(url.stringify());
    var response=fetch(url.stringify(), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
          },
      })
      .then(response => response.json())
      var jsonresponse = await response
      console.log("Fetch from API completed");
      this.populateTemplate(jsonresponse);
      if ((url.query["limit"] && jsonresponse.data.length===url.query["limit"]) || (!(url.query["limit"]) && jsonresponse.data.length===100)){
        console.log(!(url.query["limit"]));
        console.log(jsonresponse.data.length);
        console.log(url.stringify());
        this.loadAllTemplates(url,key,index+1);
      }

  }



  async populateTemplate(){
    //Get args
    let args = Array.from(arguments);
    let rank = new Set();
    let rarity = new Set();
    let type = new Set();
    let subset = new Set();
    
    //populate from templateJson
    if ("templateJson" in localStorage){
      let jsonresponse=localStorage.getItem("templateJson")
      jsonresponse = JSON.parse(jsonresponse)
      if ("rank" in jsonresponse ){
        rank = [...jsonresponse["rank"]]
      }
      if ("rarity" in jsonresponse ){
        rarity = jsonresponse["rarity"]
      }
      if ("type" in jsonresponse ){
        type = jsonresponse["type"]
      }
      if ("subset" in jsonresponse ){
        subset = jsonresponse["subset"]
      }
      rank = new Set(rank)
      rarity = new Set(rarity)
      type = new Set(type)
      subset = new Set(subset)
    }

    //process incoming json if coming
    if (args.length > 0){
      let incomingjson = args[0];
      incomingjson.data.forEach(element => {
          rank.add(element.immutable_data.rank)
          rarity.add(element.immutable_data.rarity)
          type.add(element.immutable_data.type)
          subset.add(element.immutable_data.subset)
        });
        rank.delete(undefined)
        rarity.delete(undefined)
        type.delete(undefined)
        subset.delete(undefined)
        
    }

    this.setState({
      rank : [...rank],
      rarity : [...rarity],
      type : [...type],
      subset : [...subset]},
      ()=>{
        localStorage.setItem("templateJson",JSON.stringify((({ rank, rarity, type, subset }) => ({ rank, rarity, type, subset }))(this.state)));
        console.log("state",this.state);
        console.log("templateJson",JSON.parse(localStorage.getItem("templateJson")))
      }
    )

    
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
        templatelink:templatelink,
        rank : [],
        rarity : [],
        type : [],
        subset : []
    }
  }

componentDidMount(){
  this.populateTemplate();
}


  static expdict = { };
  static namelist=[];
  static raritylist=[];
  render()  {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={()=>this.loadAllTemplates(this.state.templatelink,'templateJson',1)}>
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
