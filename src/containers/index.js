import React, { useState } from 'react';
import Footer from './footer';
import Header from "./header"
import MainBody from "./mainbody"
import FooterMain from "../components/footer-main"
import { onAddItem, onUpdateCheckAll, onUpdateItem, onItemExist, onRemoveAllCompleted, onRemoveItem } from "../utils/cart"
const MainApp = () => {
    const [state, setState] = useState({
        cartList: []
    })
    const [selected, setSelected] = useState("all")

    const ToggleCheckHandler = (e, id) => {
        const getdata = onItemExist(state, id)
        const completed = e.target.checked
        const updated = onUpdateItem(state, { ...getdata, completed })
        setState(updated)
    }
    const ToggleAllCheckHandler = (e) => {
        const completed = e.target.checked
        const updatedall = onUpdateCheckAll(state, completed)
        setState(updatedall)
    }
    const ToggleEditHandler = (id) => {
        const getdata = onItemExist(state, id)
        const updated = onUpdateItem(state, { ...getdata, editing: true })
        setState(updated)
    }

    const CompleteEditHandler = (event, id) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            const getdata = onItemExist(state, id)
            const updated = onUpdateItem(state, { ...getdata, title: event.target.value, editing: false })
            setState(updated)
            event.preventDefault()
            event.stopPropagation()
        }
    }

    const AddNewItemHandler = (event) => {
        if (event.key === 'Enter') {
            const id = state.cartList.length + 1
            const added = onAddItem(state, { id, title: event.target.value, completed: false, editing: false })
            setState(added)
            event.stopPropagation()
            event.target.value = ""
        }
    }

    const selectHandler = (value) => setSelected(value)
    const ClearAllHandler = () => setState(onRemoveAllCompleted(state))
    const RemoveItemHandler = (id) => setState(onRemoveItem(state, id))
    const FilterDataSelectionType = () => {
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
                <Header addNewItemHandler={AddNewItemHandler} />
                <MainBody todolist={FilterDataSelectionType()}
                    toggleAllCheckHandler={ToggleAllCheckHandler}
                    toggleCheckHandler={ToggleCheckHandler}
                    removeItemHandler={RemoveItemHandler}
                    toggleEditHandler={ToggleEditHandler}
                    completeEditHandler={CompleteEditHandler}
                />
                <FooterMain
                    completedData={state.cartList.filter(item => item.completed)}
                    selectHandler={selectHandler}
                    itemCount={FilterDataSelectionType().length}
                    selected={selected}
                    clearAllHandler={ClearAllHandler}
                    todolist={state.cartList}
                />
            </section>
            <Footer />
        </div>
    );
};


export default MainApp;