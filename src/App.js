import React, {Component} from 'react';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      sms: {},
      select: 0
    };
  }

  componentWillMount(){
    if( localStorage.sms === null || localStorage.sms === undefined || localStorage.sms === "" ) {
      this.setState({
        sms: {1: "Привет мир!"}
      });
    }else{
      this.setState({
        sms: JSON.parse(localStorage.sms)
      });
    }
  }

  changeInput = () => {
    const {sms, select} = this.state;
    if (select === 0) {
      const name = prompt('Сохранить как:')
      if (name === null) {return}
      const newSms = {[`${Object.keys(sms).length+1}.   ${name}`]: this.ref.current.value};
      this.setState({
        sms: Object.assign(sms, newSms)
      });
      localStorage.sms = JSON.stringify(sms);
      this.ref.current.value = ""
    }else{
      let newSms = this.state.sms;
      for (let key in newSms) {
        if (key === this.state.select) {
          newSms[key] = this.ref.current.value;
        }
      }
      this.setState({
        sms: newSms,
        select: 0
      });
      localStorage.sms = JSON.stringify(newSms);
      this.ref.current.value = ""
    }
  };
  clear = () => {
    if( this.state.select !== null || this.state.select !== undefined || this.state.select !== "" ) {
      let newSms = this.state.sms;
      delete newSms[this.state.select];
      this.setState({
        sms: newSms,
        select: 0
      });
      localStorage.sms = JSON.stringify(newSms);
      this.ref.current.value = ""
    }
  };
  new = () => {
    this.setState({
      select: 0
    });
    this.ref.current.value = ""
  };
  select = (data)=> {
    this.ref.current.value = this.state.sms[data]
    this.setState({
      select: data
    });
  };
  bold = () => {
    let txt = "";
    // newSms = "";1233
    // if (txt = window.getSelection) {
    //   txt = window.getSelection().toString();
    // } else {
    //   txt = document.selection.createRange().text;
    // }
    this.ref.current.value = txt;
  };
  render() {
    return (
      <div className="App">
        <h1>ТвОй БАНер...ру</h1>
        <div className="list">
          <div className="listHeader">
            <input type="button" value="Создать новый"  onClick={this.new}></input>
            <select name="size">
              <option  hidden >Размер банера</option> 
              <option>160х600</option>
              <option>240х600,</option>
              <option>300х300</option>
              <option>300х600</option>
              <option>320х100</option>
              <option>320х480</option>
              <option>480х320</option>
              <option>970х250</option>
            </select>
            <input type="button" value="Ж" onClick={this.bold}></input>
            <select name="language">
              <option>11</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
              <option>18</option>
              <option>20</option>
              <option>22</option>
              <option>24</option>
            </select>
            <input type="color"></input>
            <input type="button" value="Картинка"></input>
            <input type="button" value="Центрировать"></input>
            <input type="button" className="del" value="Удалить" onClick={this.clear}></input>
            <input type="button" className="save" value="Cохранить" onClick={this.changeInput}></input>
          </div>
          <div className="listBody">
            <div className="listMeny">
              {Object.keys(this.state.sms).map(data => (
                <input type="button" value={data}  onClick={() => this.select(data)}></input>
              ))}
            </div>
            <div className="listSpase">
              <textarea ref={this.ref}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}