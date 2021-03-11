import React, { useState } from 'react';
import Footer from './footer';
import Header from "./header"
import MainBody from "./mainbody"
import FooterMain from "../components/footer-main"
import { onAddItem, onUpdateCheckAll, onUpdateItem, onItemExist, onRemoveAllCompleted, onRemoveItem } from "../utils/cart"
const MainApp = () => {
    const [state, setState] = useState({
        cartList: [
            { id: 1, title: "des", completed: false, editing: false },
            { id: 2, title: "gigi", completed: false, editing: false },
        ]
    })
    const toggleHandler = (e, id) => {
        const getdata = onItemExist(state, id)
        const completed = e.target.checked
        const updated = onUpdateItem(state, { ...getdata, completed })
        setState(updated)
    }
    const toggleEditHandler = (id) => {
        const getdata = onItemExist(state, id)
        const updated = onUpdateItem(state, { ...getdata, editing: true })
        setState(updated)
    }

    const toggleAllHandler = (e) => {
        const completed = e.target.checked
        const updatedall = onUpdateCheckAll(state, completed)
        setState(updatedall)
    }

    const CompleteEdit = (event, id) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            const getdata = onItemExist(state, id)
            const updated = onUpdateItem(state, { ...getdata, title: event.target.value, editing: false })
            setState(updated)
            event.preventDefault()
            event.stopPropagation()
        }
    }
    const [selected, setSelected] = useState("all")
    const selectHandler = (value) => setSelected(value)
    const ClearAllHandler = () => setState(onRemoveAllCompleted(state))
    const RemoveItemHandler = (id) => setState(onRemoveItem(state, id))
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
                    removeItem={RemoveItemHandler}
                    setToggleEdit={toggleEditHandler}
                    CompleteEdit={CompleteEdit}
                />
                <FooterMain
                    selectHandler={selectHandler}
                    itemCount={FilterTypeList().length}
                    selected={selected}
                    ClearAllHandler={ClearAllHandler}
                    todolist={state.cartList}
                />
            </section>
            <Footer />
        </div>
    );
};


export default MainApp;