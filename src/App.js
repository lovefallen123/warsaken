import logo from './logo.svg';
import './App.css';
import React from 'react';
import URL from './URL.js';
import Table from "./components/Table";



//localStorage.keys=["marketData","templateJson"]
const columns = [
  { label: "Rank", accessor: "rank", sortable: true },
  { label: "Subset", accessor: "subset", sortable: false },
  { label: "Sale ID", accessor: "sale_id", sortable: false },
  { label: "Wax", accessor: "waxprice", sortable: true },
  { label: "Exp", accessor: "exp", sortable: true },
  { label: "Exp per wax", accessor: "epw", sortable: true, sortbyOrder: "desc" },
  { label: "Link", accessor: "link", sortable: true },
];


class App extends React.Component{

  expdict = {'24K Gold': {'Rank 1': 12500,  'Rank 2': 25000,  'Rank 3': 50000,  'Rank 4': 125000}, '24K Gold (Loot)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 500000}, 'Base': {'Rank 1': 1, 'Rank 2': 2, 'Rank 3': 5, 'Rank 4': 15}, 'Black Camo': {'Rank 1': 1600,  'Rank 2': 3200,  'Rank 3': 8000,  'Rank 4': 24000}, 'Black Camo First Wave': {'Rank 1': 6000,  'Rank 2': 12000,  'Rank 3': 30000,  'Rank 4': 90000}, 'Black Camo First Wave (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 180000}, 'Black Camo First Wave (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 180000}, 'Blood Foil': {'Rank 1': 50000,  'Rank 2': 100000,  'Rank 3': 200000,  'Rank 4': 500000}, 'Blood Foil (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 1000000}, 'Blood Foil (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 1000000}, 'Camo': {'Rank 1': 400,  'Rank 2': 800,  'Rank 3': 2000,  'Rank 4': 6000}, 'Camo (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 12000}, 'Camo (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 12000}, 'Camo Edge First Wave': {'Rank 1': 4000,  'Rank 2': 8000,  'Rank 3': 20000,  'Rank 4': 60000}, 'Camo Edge First Wave (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 120000}, 'Camo Edge First Wave (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 120000}, 'Decadent': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 500000}, 'Fire Forged': {'Rank 1': 200,  'Rank 2': 400,  'Rank 3': 1000,  'Rank 4': 3000}, 'Fire Forged (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 6000}, 'Fire Forged (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 6000}, 'Fire Forged First Wave': {'Rank 1': 3000,  'Rank 2': 6000,  'Rank 3': 15000,  'Rank 4': 45000}, 'Fire Forged First Wave (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 90000}, 'Fire Forged First Wave (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 90000}, 'Foil Fire First Wave': {'Rank 1': 8000,  'Rank 2': 16000,  'Rank 3': 40000,  'Rank 4': 120000}, 'Foil Fire First Wave (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 240000}, 'Foil Fire First Wave (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 240000}, 'Foil Prime': {'Rank 1': 200,  'Rank 2': 400,  'Rank 3': 1000,  'Rank 4': 3000}, 'Foil Prime (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 6000}, 'Foil Prime (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 6000}, 'Foil Prime (Loot)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 18000}, 'Full Art': {'Rank 1': 10, 'Rank 2': 20, 'Rank 3': 50, 'Rank 4': 150}, 'Full Art (G-Force)': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 300}, 'Full Art (Infinite)': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 300}, 'Full Art (Resource)': {'Rank 1': 1, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Full Art Medal': {'Rank 1': 20, 'Rank 2': 40, 'Rank 3': 100, 'Rank 4': 300}, 'Full Art Medal First Wave': {'Rank 1': 1000,  'Rank 2': 2000,  'Rank 3': 5000,  'Rank 4': 15000}, 'Hacked': {'Rank 1': 1600,  'Rank 2': 3200,  'Rank 3': 8000,  'Rank 4': 24000}, 'Hex Tech': {'Rank 1': 600,  'Rank 2': 1200,  'Rank 3': 3000,  'Rank 4': 9000}, 'Hex Tech (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 18000}, 'Hex Tech (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 18000}, 'Loot': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Murdered Out': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 12000}, 'Murdered Out (Decadent)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 125000}, 'Murdered Out (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 48000}, 'Murdered Out (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 48000}, 'Night Vision': {'Rank 1': 800,  'Rank 2': 1600,  'Rank 3': 4000,  'Rank 4': 12000}, 'Night Vision (G-Force)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 24000}, 'Night Vision (Infinite)': {'Rank 1': 0,  'Rank 2': 0,  'Rank 3': 0,  'Rank 4': 24000}, 'Owner': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Promo': {'Rank 1': 1, 'Rank 2': 2, 'Rank 3': 5, 'Rank 4': 15}, 'Smoke Noir': {'Rank 1': 6000,  'Rank 2': 12000,  'Rank 3': 25000,  'Rank 4': 70000}, 'Tenant': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 0}, 'Thermal Ash': {'Rank 1': 25000,  'Rank 2': 50000,  'Rank 3': 100000,  'Rank 4': 250000}, 'Unique': {'Rank 1': 600,  'Rank 2': 1200,  'Rank 3': 3000,  'Rank 4': 9000}, 'Upgrade': {'Rank 1': 0, 'Rank 2': 0, 'Rank 3': 0, 'Rank 4': 1}};
  
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
  }

  async loadAllTemplates(url,key,index) {
    if (index === 1){
      this.setState({
        pending:1
      })
    }
    url.query["page"]=index;
    var response=fetch(url.stringify(), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
          },
      })
      .then(response => response.json())
      var jsonresponse = await response
      
      this.populateTemplate(jsonresponse);
      if ((url.query["limit"] && jsonresponse.data.length===url.query["limit"]) || (!(url.query["limit"]) && jsonresponse.data.length===100)){
        this.loadAllTemplates(url,key,index+1);
      }else{
        this.setState({
          pending:0
        })
      }
  }

  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    )
  }

  async getAllMarketData(){
    let rank = this.state.rank;
    //let rarity = this.state.rarity;
    let subset = this.state.subset;
    //let type = this.state.type;
    let queuearray = [];
    subset.forEach((sub)=>{
      rank.forEach((rare)=>{
        if (Number(this.expdict[sub][rare])!==0){
          queuearray.push([rare,sub])
        }
      })
    })
    this.setState({
      pending:1,
      marketArray:[]
    })
    while (queuearray.length>0){
      await this.sleep(800);
      let element = queuearray.pop();
      let rare = element[0];
      let sub = element[1];
      this.getMarketData(rare,sub,queuearray.length);
    }
    this.setState({
      pending:0
    })
  }

  async getMarketData(rank,subset,length){
    let marketurl = this.state.marketlink;
    marketurl.add({
      "immutable_data.rank":rank,
      "immutable_data.subset":subset
    })
    var response=fetch(marketurl.stringify(), {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    var jsonresponse = await response
    this.saveMarketData(jsonresponse,rank,subset,this.expdict[subset][rank],length);
  }

  async saveMarketData(jsonresponse,rank,subset,exp,length){
    const denominator = 100000000;
    if (jsonresponse.data.length>0){
      let waxprice =Number(jsonresponse.data[0].price.amount/denominator);
      let sale_id =Number(jsonresponse.data[0].sale_id);
      let link = "https://wax.atomichub.io/market/sale/"+sale_id;
      let epw = Number(exp)/waxprice
      let dict = {
        waxprice:waxprice,
        sale_id:sale_id,
        link:link,
        epw:epw,
        rank:rank,
        subset:subset,
        exp:Number(exp)
      }
      let newarray = [...this.state.marketArray];
      
      newarray.push(dict);
      if (length ===0){
        localStorage.setItem("marketData",JSON.stringify(newarray))
        this.setState({
          marketArray:newarray,
          pending:0
        })
      }else{
        this.setState({
          marketArray:newarray,
          pending:1
        })
      }
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
        rank = jsonresponse["rank"]
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

    if ("marketData" in localStorage){
      let marketData=localStorage.getItem("marketData")
      marketData = JSON.parse(marketData)
      console.log("before:",this.state)
      this.setState({
        marketArray:marketData
      },()=>{
        console.log("after:",this.state)
      })
    }
    //process incoming json if incoming
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
        console.log("templateJson",JSON.parse(localStorage.getItem("templateJson")));
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

    const marketlink = new URL("https://wax.api.atomicassets.io/atomicmarket/v2/sales")
    marketlink.add({
      collection_name:"warsaken",
      page:1,
      state:1,
      limit:10,
      order:"asc",
      sort:"price"
    });

    this.state={
      templatelink:templatelink,
      marketlink:marketlink,
      rank : [],
      rarity : [],
      type : [],
      subset : [],
      marketArray:[],
      pending:0
    }
  }

componentDidMount(){
  //this.populateTemplate();
}

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
          <button onClick={()=>this.getAllMarketData()}>
            getMarketData
          </button>
          <p>
            {(this.state.pending===0)? "Done Loading": "Still loading"}
          </p>
        </header>
        <div className="table_container">
        <h1>Reusable sortable table with React</h1>
        {(this.state.pending===0 && this.state.marketArray.length>0)&&
          <Table
            caption="Cheap exp breakdown"
            data={[...this.state.marketArray]}
            columns={columns}
          />
        }
        </div>
      </div>
      
    );
  }
}

export default App;
