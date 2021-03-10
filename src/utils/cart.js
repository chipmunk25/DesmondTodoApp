let index, newlist
export const onAddItem = (state, payload) => {
    return {
        ...state, cartList: [...state.cartList, { ...payload }]
    }
}
export const onAddItems = (state, payload) => {
    // console.log(state.cartList, payload)
    return {
        ...state,
        cartList: [...state.cartList, ...payload]
    }
}

export const onItemExist = (state, payload) => {
    return state.cartList.find(item => parseInt(payload) === parseInt(item.id)
    )
}

export const onUpdateCheckAll = (state, payload) => {
    return {
        ...state,
        cartList: state.cartList.map(item => {
            return {
                ...item,
                completed: payload
            }
        })
    }
}
export const onUpdateItem = (state, payload) => {
    index = state.cartList.indexOf(onItemExist(state, payload.id))
    newlist = [...state.cartList];
    if (index > -1) {
        newlist[index] = payload
    }
    return { ...state, cartList: newlist }
}

export const onRemoveItem = (state, payload) => {
    return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== payload),
    };
}
export const onRemoveAllCompleted = (state) => {
    return {
        ...state,
        cartList: state.cartList.filter((item) => !item.completed),
    };
}