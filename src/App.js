

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
function App() {
  const Cards=data.map(item=>{
    return(
      <Card 
      key={item.id}
      {...item}
      ></Card>
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <section className="cards-list">
     {Cards}</section>
    </div>
  );
}

export default App;
