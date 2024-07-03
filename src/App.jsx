
import { useState } from "react";
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  
  
  const handleAddFighter = (fighter) => {
    if(money >= fighter.price){
      const newTeam = [...team, fighter]
      setTeam(newTeam);
      setMoney(money - fighter.price);
      setTotalStrength(newTeam.reduce((sum, fighter) => sum + fighter.strength, 0))
      setTotalAgility(newTeam.reduce((sum, fighter) => sum + fighter.agility, 0))
    } else {
      console.log("Not enough money");
    }
  };
  
  
  const handleRemoveFighter = (fighter) => {
    const index = team.findIndex(item => item.name == fighter.name);
    const newTeam = [...team];
    newTeam.splice(index, 1);
    setTeam(newTeam);
    setMoney(money + fighter.price);
    setTotalStrength(newTeam.reduce((sum, fighter) => sum + fighter.strength, 0))
    setTotalAgility(newTeam.reduce((sum, fighter) => sum + fighter.agility, 0))
  };
  
  
  return (
    <>
    <section>
    <p>Available money: {money}</p>
    
    <div className="container">
      <div className="teamDiv">
      <h3>Team:</h3>
        <div className="teamInfoDiv">
          <p>Strength: {totalStrength}</p>
          <p>Agility: {totalAgility}</p>
        </div>
        <div className="teamFightersDiv">
          {team.length ? team.map((fighter, index) => 
            <div key={index} className="teamFighterCard">
            <h5>{fighter.name}</h5>
            <p>
            price: {fighter.price}
            </p>
            <p>
            strength: {fighter.strength}
            </p>
            <p>
            agility: {fighter.agility}
            </p>
            <img src={fighter.img} />
            <button onClick={() => handleRemoveFighter(fighter)}>Remove from team</button>
            </div>) : <p>Pick some team members!</p>}
        </div>
      </div>
      <h3>Fighters:</h3>
      <div className="fightersDiv">
      
      {zombieFighters.map((fighter, index) => 
        <div key={index} className="teamFighterCard">
        <h5>{fighter.name}</h5>
        <p>
        price: {fighter.price}
        </p>
        <p>
        strength: {fighter.strength}
        </p>
        <p>
        agility: {fighter.agility}
        </p>
        <img src={fighter.img} />
        <button onClick={() => handleAddFighter(fighter)}>Add to the team</button>
        </div>)}
        </div>
        </div>
        </section>
        </>
      );
    }
    
    export default App
    