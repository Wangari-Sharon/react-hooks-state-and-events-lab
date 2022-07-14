import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false);

  function ToggleMode(){
    setIsDark((isDark) => !isDark)
  }


  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (isDark? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ToggleMode}>{isDark ? "Light Mode": "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} category = {items.category}/>
    </div>
  );
}

export default App;