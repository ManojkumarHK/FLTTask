import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../App.css';
import axios from 'axios';


class Home extends React.Component {
  state = {
    amountValue: 1000,
    numPayment: 6,
    MetaProducts: {},
    init:0,
  };
 
  handleAmountChange = value => {
    this.setState({ amountValue: value },()=>{
      this.loanApi()
    });
  };
  handleMonthChange = value => {
    this.setState({ numPayment: value },()=>{
      this.loanApi()
    });
  };
  componentDidMount=()=>{
    this.loanApi()
  }

  loanApi=()=>{
   
  axios.get('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.numPayment)
  .then(response => {
    // handle success
    console.log("response",response.data);
    var data=JSON.parse(localStorage.getItem('loandetail'))
    if(data === null){
      var check=[];
      data=check;

    }
    console.log("response",data);
    data.push(response.data)
    localStorage.setItem('loandetail', JSON.stringify(data));
    this.setState({ MetaProducts:response.data, init:1 },()=>{
      console.log("datamsg",response.data)
    });
})
  .catch(function (error) {
    // handle error
    console.log("error",error);
  })
  }
  getIntrestValue=()=>{
    //this.abcd()
  }

  render() {
    let { amountValue, numPayment } = this.state;
  
    return (
      <div>
     <section> 
      <div className="container">
        <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 calculatorBox">
        <div className="mainBox">
          <div className="row calculate_head">
            <h3>Calculate Monthly Payment and Rate of Interest</h3>
          </div>
          <div className="row amountValue">
          <div className="col-md-9">
          <h3>Select Loan Amount </h3>
          </div>
          <div className="col-md-3">
          <h4>{amountValue} $</h4>
          </div>
          <div className="col-md-12">
          <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        </div>
          </div>
          <div className="row yearValue">
          <div className="col-md-9">
          <h3>No.of Payments</h3>
          </div>
          <div className="col-md-3">
          <h4> {numPayment} &nbsp;months</h4>
        </div>
        <div className="col-md-12">
        <InputRange
        maxValue={24}
        minValue={6}
        value={numPayment}
        onChange={this.handleMonthChange}/>
        </div>
        </div>
      </div>
      </div>
       </div>
       <div className="row">
       <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
         <div  className="principal_amount">         
         {Object.keys(this.state.MetaProducts).length>0 && (<div>
           <h2>Principal Amount</h2>
          {
            this.state.MetaProducts.principal.amount
          }$
         </div>)}
         </div>
         </div>
         <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
         <div className="interest_rate">
           <h2>Rate of Interest ( % )</h2> 
         {
           this.state.MetaProducts.interestRate
          } 
         </div>
         </div>
         <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
           <div className="monthly_emi">
         {Object.keys(this.state.MetaProducts).length>0 && (<div>
           <h2>Monthly EMI </h2>
          {
            this.state.MetaProducts.monthlyPayment.amount
          } $
         </div>)}
         </div>
         </div>
         </div>
         <div className="row">
         <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
           <button className="btn btn-primary apply_button">
             Apply Loan
           </button>
         </div>
       </div>
      </div>
      </section>
      <footer>
        <div class="container text-center">
          <p>Copyright FLTLAB pvt ltd © 2019. All Rights Reserved </p>
        </div>
      </footer>
    </div>
    
    );
  }
}

export default Home;




   





