export default function countReducer(preState = 99, action) {
    // console.log('count reducer执行')
    const {type, data} = action
    switch (type) {
        case "increase":
            return preState + data;
        case "decrease":
            return preState - data;
        default:
            return preState;
    }
}
