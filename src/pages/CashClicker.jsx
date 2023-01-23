import { useState } from 'react';
import upgrades from '../upgrades.json';


function CashClicker() {

    const [cash, setCash] = useState(0);
    //cash starts at 0
    const [upgradeLevel, setUpgradeLevel] = useState(1);
    //upgrade starts at 1
    const [upgradesList, setUpgradesList] = useState(upgrades.upgrades.map(upgrade => ({...upgrade})));

  
    function handleClick() {
      setCash(cash + (upgradeLevel > 0 ? upgradeLevel : 1));
    }
    //every time handleClick gets called setCash adds cash to the total amount of cash. 
    //before adding cash it checks what is the current upgrade lvl, if the current upgrade 
    //lvl is for example 1, it will increase the cash amount by 1+1


// this function is called when the user clicks on an upgrade button
function handleUpgrade(index) {
  // store the cost of the upgrade the user wants to purchase in a variable
  const upgradeCost = upgradesList[index].cost;
  // check if the user has enough cash to purchase the upgrade
  if (cash >= upgradeCost) {
  // if they do, subtract the cost of the upgrade from the cash amount
  setCash(cash - upgradeCost);
  // increase the upgrade level
  setUpgradeLevel(upgradeLevel + 1);
  // increase the cost of the upgrade by 30%
  upgradesList[index].cost = upgradeCost * 1.3
  // update the state of the upgrades list
  setUpgradesList([...upgradesList])
  }
  }

return (
      <div className='App'>

        <button className='cash' onClick={handleClick}> 
          $$$ 
        </button>

        <div>
          Your cash: {cash}
        </div>

        {upgradesList.map((upgrade, index) => (
          <button onClick={() => handleUpgrade(index)} disabled={cash < upgrade.cost}>
            {upgrade.name} (cost: {upgrade.cost} cash)
          </button>
        ))}

      </div>
    );
  }
  
export default CashClicker;