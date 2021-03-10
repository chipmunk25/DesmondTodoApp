import React, { useState } from 'react';
import Footer from './footer';
import Header from "./header"
import MainBody from "./mainbody"
import FooterMain from "../components/footer-main"
import { onAddItem, onUpdateCheckAll, onUpdateItem, onItemExist, onRemoveAll } from "../utils/cart"
const MainApp = () => {
    const [state, setState] = useState({
        cartList: [
            { id: 1, title: "des", completed: false },
            { id: 2, title: "gigi", completed: false },
        ]
    })
    const toggleHandler = (e, id) => {
        const getdata = onItemExist(state, id)
        const completed = e.target.checked
        const updated = onUpdateItem(state, { ...getdata, completed })
        setState(updated)
    }
    const toggleAllHandler = (e) => {
        const completed = e.target.checked
        const updatedall = onUpdateCheckAll(state, completed)
        setState(updatedall)
    }

    const [selected, setSelected] = useState("all")
    const selectHandler = (value) => setSelected(value)
    const ClearAllHandler = () => setState(onRemoveAll(state))
    const FilterTypeList = () => {
        if (selected === "active") {
            return state.cartList.filter(item => !item.completed)
        } else if (selected === "completed") {
            return state.cartList.filter(item => item.completed)
        } else {
            return state.cartList
        }
    }
    return (
        <div>
            <section className="todoapp">
                <Header />
                <MainBody todolist={FilterTypeList()}
                    toggleAllHandler={toggleAllHandler}
                    toggleHandler={toggleHandler}
                />
                <FooterMain
                    selectHandler={selectHandler}
                    itemCount={FilterTypeList().length}
                    selected={selected}
                    ClearAllHandler={ClearAllHandler}
                />
            </section>
            <Footer />
        </div>
    );
};


export default MainApp;