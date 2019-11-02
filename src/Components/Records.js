import React from 'react';
import 'react-input-range/lib/css/index.css';
import '../App.css';


class Records extends React.Component {
  state = {
    MetaProducts: [],
  };
 
  componentDidMount=()=>{
    //this.abcd()
    var data=localStorage.getItem('loandetail')
    if(data === null){
      this.setState({MetaProducts:[]})

    }else{
      this.setState({MetaProducts:JSON.parse(data)},()=>{
        console.log("metamsg",this.state.MetaProducts)
      })
    }
   // localStorage.clear('loandetail');
  }  
  handleClick() {
        localStorage.clear('loandetail');
        window.location.reload();
    };
    
  
  render() {  
    return (
      <div>
      <section> 
      <div className="container">
      <div className="row">
        <div className="col-md-10 tableBox">
            <div className="row">
        <div className="col-md-10">
            <h3>You Search Records</h3> 
        </div>
        <div className="col-md-2"> <button className="btn btn-danger clear_button" onClick={this.handleClick}>Clear History</button> </div>
        </div>
     
        <div className="table-responsive resultTable grid-container">
        <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Principal</th>
                <th>No.of Payments ( Months )</th>
                <th>Interest ( % )</th>
                <th>Monthly Payment ( EMI )</th>
                <th>Apply for Loan</th>
              </tr>
            </thead>
            <tbody>
           {
            this.state.MetaProducts.map((product,i)=>{
              return(
                <tr>
                <td>{product.principal.amount}</td>
                <td>{product.numPayments}</td>
                <td>{product.interestRate}</td>
                <td>{product.monthlyPayment.amount}</td>
                <td> <div className="btn btn-primary">Apply</div></td>
              </tr>
              )
            })
           } 
            </tbody>
          </table>
          </div>
  
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

export default Records;




   





