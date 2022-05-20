import React from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard"
import Navabar from '../Navbar';

const uniqueMenu = [
    ...new Set(Menu.map((curEle) => {
    return curEle.category;
})),
"All",
];


const Restaurant = () => {

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueMenu);
    
    const filterItem = (filterCategory) => {
        const item = Menu.filter((curElem) => {
        return curElem.category === filterCategory;
        });
        if(filterCategory === "All")
        {
            setMenuData(Menu);
            return;
        }
        setMenuData(item);
    };
   
    return (
        <>
            <Navabar menuList={ menuList } filterItem={filterItem}/>
           <MenuCard menuData={ menuData }/> 
        </>
    )
}


export default Restaurant
