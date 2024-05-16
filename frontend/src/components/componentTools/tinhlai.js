import React, { useEffect } from 'react'
import '../../assert/cssTools/tinhlai.css'

export default function InvestmentCalculator() {
     
    useEffect(() => {
      const formatCurrency = (value) => {
        let fein = value.replace(/[^0-9]/g, '');
        let formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(fein);
        return formattedValue.replace('₫', '').trim();
    };

        (function () {
          var initial_deposit = document.querySelector('#initial_deposit'),
              contribution_amount = document.querySelector('#contribution_amount'),
              investment_timespan = document.querySelector('#investment_timespan'),
              investment_timespan_text = document.querySelector('#investment_timespan_text'),
              estimated_return = document.querySelector('#estimated_return'),
              future_balance = document.querySelector('#future_balance');
              
          function updateValue(element, action) {
              var min = parseFloat(element.getAttribute('min')),
                  max = parseFloat(element.getAttribute('max')),
                  step = parseFloat(element.getAttribute('step')) || 1,
                  oldValue = element.dataset.value || element.defaultValue || 0,
                  newValue = parseFloat(element.value.replace(/\./g, '.'));

              if (isNaN(parseFloat(newValue))) {
                  newValue = oldValue;
              } else {
                  if (action === 'add') {
                      newValue += step;
                  } else if (action === 'sub') {
                      newValue -= step;
                  }
      
                  newValue = newValue < min ? min : newValue > max ? max : newValue;
              }
              if (element.id === 'estimated_return'){
                element.dataset.value = newValue;
              }else{
              element.dataset.value = newValue;
              element.value = formatCurrency((element.dataset.prepend || '') + newValue + (element.dataset.append || ''));
            }
              getChartData()
          }
      
          function getChartData() {
              var P = parseFloat(initial_deposit.dataset.value), 
                  r = parseFloat(estimated_return.dataset.value / 100), 
                  c = parseFloat(contribution_amount.dataset.value),
                  n = parseInt(document.querySelector('[name="compound_period"]:checked').value),
                  n2 = parseInt(document.querySelector('[name="contribution_period"]:checked').value), 
                  t = parseInt(investment_timespan.value), 
                  currentYear = (new Date()).getFullYear();
      
              var labels = [];
              for (var year = currentYear; year < currentYear + t; year++) {
                  labels.push(year);
              }
      
              var principal_dataset = {
                  label: 'Total Principal',
                  backgroundColor: 'rgb(0, 123,355)',
                  data: []
              };
      
              var interest_dataset = {
                  label: "Total Interest",
                  backgroundColor: 'rgb(23, 162, 184)',
                  data: []
              };
      
              for (var i = 1; i <= t; i++) {
                  var principal = P + ( c * n2 * i ),
                      interest = 0,
                      balance = principal;
      
                  if (r) {
                      var x = Math.pow(1 + r / n, n * i),
                          compound_interest = P * x,
                          contribution_interest = c * (x - 1) / (r / n2);
                      interest = (compound_interest + contribution_interest - principal).toFixed(0)
                      balance = (compound_interest + contribution_interest).toFixed(0);
                  }
      
                  future_balance.innerHTML =  formatCurrency(balance)  +  ' (VNĐ)';
                  principal_dataset.data.push(principal);
                  interest_dataset.data.push(interest);
              }
      
              return {
                  labels: labels,
                  datasets: [principal_dataset, interest_dataset]
              }
          }
      
        
      
          initial_deposit.addEventListener('change', function () {
              updateValue(this);
          });
      
          contribution_amount.addEventListener('change', function () {
              updateValue(this);
          });
      
          estimated_return.addEventListener('change', function () {
              updateValue(this);
          });
         
          
      
          investment_timespan.addEventListener('change', function () {
              investment_timespan_text.innerHTML = this.value + ' years';
          });
      
          investment_timespan.addEventListener('input', function () {
              investment_timespan_text.innerHTML = this.value + ' years';
          });
      
      
          var buttons = document.querySelectorAll('[data-counter]');
          for (var i = 0; i < buttons.length; i++) {
              var button = buttons[i];
      
              button.addEventListener('click', function () {
                  var field = document.querySelector('[name="' + this.dataset.field + '"]'),
                      action = this.dataset.counter;
      
                  if (field) {
                      updateValue(field, action);
                  }
              });
          }
      
          
      })();
  
    }, [])
  
  
    return (
        <>
          <div className="container1">
            <div className="row1">
              <div className="col-md-61">
                <h2>Công cụ tính Lãi Kép, Giá trị tiền gửi, Lợi nhuận đầu tư Miễn Phí</h2>
                <div className="form-group" >
                  <div htmlFor="initial_deposit" style={{fontSize :'24px' , backgroundColor:'#00b14f' , color:'white'}}>Bước 1: Đầu tư ban đầu</div>
                  <div className='form-group-1' >
                  <div className="row1" style={{display : "flex" , justifyContent:'space-between', padding:' 30px 0 '
                    }} >
                  <label htmlFor="initial_deposit" style={{fontSize :'24px' }}>Số tiền gốc ban đầu (VNĐ)</label>
                    <div className="input-group" style={{display : "flex" , alignItems: 'center'}}>
                    <div class="input-group-prepend" >
                              <button class="btn btn-primary" type="button" data-counter="sub" data-field="initial_deposit" style={{ padding:'10px'}}>&minus;</button>
                    </div>
                      <input className="form-control text-center" id="initial_deposit" type="text" placeholder="VD: 10,000,000"   name="initial_deposit" min="100"    />
                      <div class="input-group-append">
                              <button class="btn btn-primary" type="button" data-counter="add" data-field="initial_deposit" style={{ padding:'10px'}}>&#43;</button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
  
                <div className="form-group">
                  <div htmlFor="contribution_amount" style={{fontSize :'24px' , backgroundColor:'#00b14f' , color:'white'}} >Bước 2: Khoản đóng góp</div>
                  <div className="row1" style={{display : "flex" , justifyContent:'space-between',alignItems: 'center'
                    }}>
                  <label htmlFor="contribution_amount" style={{fontSize :'20px' , padding:' 30px 0 ' }} >Số tiền gửi mỗi tháng (VNĐ)</label>
                    <div className="input-group" style={{display : "flex"
                    }}>
                      <div className="input-group-prepend" >
                        <button className="btn btn-primary" type="button" data-counter="sub" data-field="contribution_amount" style={{ padding:'10px'}}>&minus;</button>
                      </div>
                      <input className="form-control text-center" id="contribution_amount" type="text" placeholder="VD: 10,000,000"   name="contribution_amount" min="0"  />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button" data-counter="add" data-field="contribution_amount" style={{ padding:'10px'}}>&#43;</button>
                      </div>
                    </div>
                  </div>
  
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="contribution_period_monthly" type="radio" name="contribution_period" value="12" checked />
                    <label className="form-check-label" htmlFor="contribution_period_monthly" style={{fontSize :'20px'}} >Theo Tháng</label>
                  </div>
                </div>
  
                <div className="form-group" style={{display : "flex" ,justifyContent:'space-between',  alignItems: 'center'
                    }}>
                  <label htmlFor="investment_timespan" style={{fontSize :'20px' , padding:' 30px 0 '}}>Thời gian gửi (Năm)</label>
                  <div className="row1" >
                    <div className="col6 col8">
                    <div className="input-group-prepend" >
                        <button className="btn btn-primary" type="button"  style={{ padding:'10px'}}>&minus;</button>
                      </div>
                      <input className="form-control text-center" id="investment_timespan" type="text" placeholder="VD: 10" name="investment_timespan" min="2" max="50" step="1" style={{padding:'10px'}} />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button"  style={{ padding:'10px'}}>&#43;</button>
                      </div>
                        
                    </div>
                    <span id="investment_timespan_text">Năm</span>
                  </div>
                  
                </div>
                  
                <div className="form-group" >
                  <div htmlFor="estimated_return" style={{fontSize :'24px' , backgroundColor:'#00b14f' , color:'white'}}>Bước 3: Lãi suất</div>
                  <div className="row1" style={{display : "flex" ,justifyContent:'space-between', padding:' 30px 0 '
                    }}>
                  <label htmlFor="contribution_amount" style={{fontSize :'20px'}} >Lãi suất (%)</label>
                    <div className="input-group" style={{display : "flex"
                    }}>
                      <div className="input-group-prepend">
                        <button className="btn btn-primary" type="button" data-counter="sub" data-field="estimated_return" style={{ padding:'10px'}}>&minus;</button>
                      </div>
                      <input className="form-control text-center" id="estimated_return" type="text" placeholder="VD: 10"   name="estimated_return" min="0"  />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button" data-counter="add" data-field="estimated_return" style={{ padding:'10px'}}>&#43;</button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="form-group row1">
                  <div className="col12">
                    <div style={{fontSize :'24px' , backgroundColor:'#00b14f' , color:'white' , marginBottom:'10px'}}>Bước 4: Kỳ hạn</div>
                    <div className="form-check form-check-inline" style={{fontSize:'22px'}}>
                      <input className="form-check-input" id="compound_period_daily" type="radio" name="compound_period" value="365" />
                      <label className="form-check-label" htmlFor="compound_period_daily">Theo Ngày</label>
                    </div>
  
                    <div className="form-check form-check-inline" style={{fontSize:'22px'}}>
                      <input className="form-check-input" id="compound_period_monthly" type="radio" name="compound_period" value="12"  checked/>
                      <label className="form-check-label" htmlFor="compound_period_monthly">Theo Tháng</label>
                    </div>
  
                    <div className="form-check form-check-inline" style={{fontSize:'22px'}}>
                      <input className="form-check-input" id="compound_period_annually" type="radio" name="compound_period" value="1" />
                      <label className="form-check-label" htmlFor="compound_period_annually">Theo Năm</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-62 text-center" style={{display:'flex' , justifyContent:'center' , fontSize:'25px'}}>
                <span>Kết quả bạn sẽ có:</span>
                <span className="h3" id="future_balance">?</span>
              </div>
              </div>
              
            </div>
          </div>
        </>
    );
  };
