const deliveryStates = [
    { _id: 1, name: "PENDING" },
    { _id: 2, name: "ACCEPTED" },
    { _id: 3, name: "WAITING_ORDER" },
    { _id: 4, name: "DELIVERY" },
    { _id: 5, name: "CANCELED" },
    { _id: 6, name: "CANCELED_BY_CLIENT" },
    { _id: 7, name: "FINALIZED" },
    { _id: 8, name: "OUTSIDE" },
    { _id: 9, name: "NOT_ACCEPTED" }
]

module.exports = {
    deliveryStates
}