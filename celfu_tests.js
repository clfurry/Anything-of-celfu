// testing mod
elements.aminoacids = {
    color: "#dbc5d3",
    behavior: behaviors.POWDER,
    category: "states",
    state: "solid",
    hidden: true,
    reactions: {},
    density: 1000,
    viscosity: 10000
};
elements.prionicIce = {
    color: "#a1b298",
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    hidden: true,
    tempHigh: -70,
    tempLow: 200,
    stateHigh: "prionicGas",
    stateLow: "prionicIce",
    reactions: {},
    density: 1300,
    viscosity: 30000000000000,
    breakInto: "aminoacids"
};
elements.prionicGas = {
    color: "#6c9066",
    behavior: behaviors.GAS,
    category: "weapons",
    state: "gas",
    hidden: false,
    tempHigh: 1000,
    tempLow: -80,
    stateHigh: "ash",
    stateLow: "prionicIce",
    density: 1.2,
    viscosity: 5,
    alpha: 0.5,
    glow: true,
    reactions: {
    "body": { elem1: "prionicGas", elem2: "prionicGas"},
    "head": { elem1: "prionicGas", elem2: "prionicGas"}
}
};
