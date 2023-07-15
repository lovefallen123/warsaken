import './App.css';
import React from 'react';
import URL from './URL.js';
import Table from "./components/Table";
import {expdict,subset,rarity,rank,type} from "./variables";

import { database } from "./firebase";
import { onChildAdded, ref } from "firebase/database";



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
        if (Number(expdict[sub][rare])!==0){
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
      let reset = this.getMarketData(rare,sub,queuearray.length)
      // if(reset){
      //   queuearray.unshift(element);
      // };
    }
    this.setState({
      pending:0
    })
  }

  async getMarketData(rank,subset,length){
    let marketurl = this.state.marketlink;
    let reset = false
    marketurl.add({
      "immutable_data.rank":rank,
      "immutable_data.subset":subset
    })
    console.log(rank,subset,length)
    var response=fetch(marketurl.stringify(), {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
        },
    })
    .then(response => {
      if(response.status >= 400 ) {
        console.log(response)
        reset = true
      }
      return response.json();
    })
    await response;
    if (reset){
      console.log(reset)
      return reset
    }else{
      var jsonresponse = await response
      console.log(jsonresponse)
      this.saveMarketData(jsonresponse,rank,subset,expdict[subset][rank],length);
      return reset
    }
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
    console.log(this.state)
    console.log(expdict,subset,rarity,rank,type)
    // let args = Array.from(arguments);
    // let rank = new Set();
    // let rarity = new Set();
    // let type = new Set();
    // let subset = new Set();
    
    // //populate from templateJson
    // if ("templateJson" in localStorage){
    //   let jsonresponse=localStorage.getItem("templateJson")
    //   jsonresponse = JSON.parse(jsonresponse)
    //   if ("rank" in jsonresponse ){
    //     rank = jsonresponse["rank"]
    //   }
    //   if ("rarity" in jsonresponse ){
    //     rarity = jsonresponse["rarity"]
    //   }
    //   if ("type" in jsonresponse ){
    //     type = jsonresponse["type"]
    //   }
    //   if ("subset" in jsonresponse ){
    //     subset = jsonresponse["subset"]
    //   }
    //   rank = new Set(rank)
    //   rarity = new Set(rarity)
    //   type = new Set(type)
    //   subset = new Set(subset)
    // }

    // if ("marketData" in localStorage){
    //   let marketData=localStorage.getItem("marketData")
    //   marketData = JSON.parse(marketData)
    //   console.log("before:",this.state)
    //   this.setState({
    //     marketArray:marketData
    //   },()=>{
    //     console.log("after:",this.state)
    //   })
    // }
    // //process incoming json if incoming
    // if (args.length > 0){
    //   let incomingjson = args[0];
    //   incomingjson.data.forEach(element => {
    //       rank.add(element.immutable_data.rank)
    //       rarity.add(element.immutable_data.rarity)
    //       type.add(element.immutable_data.type)
    //       subset.add(element.immutable_data.subset)
    //     });
    //     rank.delete(undefined)
    //     rarity.delete(undefined)
    //     type.delete(undefined)
    //     subset.delete(undefined)
        
    // }

    // this.setState({
    //   rank : [...rank],
    //   rarity : [...rarity],
    //   type : [...type],
    //   subset : [...subset]},
    //   ()=>{
    //     localStorage.setItem("templateJson",JSON.stringify((({ rank, rarity, type, subset }) => ({ rank, rarity, type, subset }))(this.state)));
    //     console.log("state",this.state);
    //     console.log("templateJson",JSON.parse(localStorage.getItem("templateJson")));
    //   }
    // )

    
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

    //const marketlink = new URL("https://wax.api.atomicassets.io/atomicmarket/v2/sales")
    const marketlink = new URL("https://wax.api.atomicassets.io/atomicmarket/v1/sales/templates")
    marketlink.add({
      collection_name:"warsaken",
      page:1,
      state:1,
      limit:100,
      order:"asc",
      sort:"price",
      symbol:"WAX"
    });

    this.state={
      templatelink:templatelink,
      marketlink:marketlink,
      rank : [],
      rarity : [],
      type : [],
      subset : [],
      marketArray:[],
      exp:{},
      pending:0
    }
  }

  componentDidMount(){
    //this.populateTemplate();
    
    this.setState({
      rank : rank,
      rarity : rarity,
      type : type,
      exp:expdict,
      subset : subset,
    },()=>console.log(this.state))
};

  render()  {
      return (
      <div className="App">
        <header className="App-header">
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
