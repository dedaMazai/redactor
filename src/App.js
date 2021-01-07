import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Редактор текста...</h1>
      <div className="list">
        <div className="listHeader">
          <input type="button" value="Ж"></input>
          <input type="button" value="К"></input>
          <input type="button" value="Ч"></input>
          <input type="button" value="ВР"></input>
          <input type="button" value="НР"></input>
          <select>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>24</option>
          </select>
          <input type="button" value="Фон"></input>
          <input type="button" value="Вставить"></input>
          <input type="button" value="&equiv;"></input>
          <input type="button" value="Очистить"></input>
          <input type="button" className="del" value="Cохранить"></input>
        </div>
        <div className="listBody">
          <div className="listMeny">
            <input type="button" value="1"></input>
            <input type="button" value="2"></input>
            <input type="button" value="3"></input>
          </div>
          <div className="listSpase">
            <textarea/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
