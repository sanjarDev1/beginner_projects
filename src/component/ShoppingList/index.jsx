import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingList = () => {
  const [items, setItems] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 3, isSelected: true },
    { itemName: "item 3", quantity: 2, isSelected: false },
  ]);

	const [inputValue, setInputvalue] = useState("")
	const [totalItem , settotalItem] = useState(6)
	const handleAddButton=()=>{
		const newItem ={
			itemName:inputValue,
			quantity: 1,
			isSelected : false,
		}

		const newItems = [...items, newItem]

		setItems(newItems)
		setInputvalue("")
		calculateTotal();

	}

	const handleQuantitiy= (i)=>{
		const newItems = [...items];

		newItems[i].quantity++;

		setItems(newItems)
		calculateTotal();
	}

	const handleQuantitiyenc= (i)=>{
		const newItems = [...items];

		newItems[i].quantity--;

		setItems(newItems	)
		calculateTotal();

	}
	
	const toggleComplete=(i)=>{
		const newItems = [...items];

		newItems[i].isSelected = !newItems[i].isSelected

		setItems(newItems)
	}

	const calculateTotal = ()=>{
	const totalItems = 	items.reduce((to,it)=>{
			return to+it.quantity;
		},0)

		settotalItem(totalItems)
	}
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            className="add-item-input inputs"
            placeholder="Add an item..."
						value={inputValue}
						onChange={(e)=>setInputvalue(e.target.value)}
          />
          <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddButton()} />
        </div>
        <div className="item-list">
          {items.map((item,index) => (
            <div key={index} className="item-container">
              <div className="item-name" onClick={()=>toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed spans">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span className="spans">Item 1</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button className="buttons">
                  <FontAwesomeIcon icon={faChevronLeft} onClick={()=>handleQuantitiyenc(index)}  />
                </button>
                <span className="totalSpans"> {item.quantity} </span>
                <button className="buttons">
                  <FontAwesomeIcon icon={faChevronRight} onClick={()=>handleQuantitiy(index)} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItem}</div>
      </div>
    </div>
  );
};

export default ShoppingList;
