// testing mod
elements.prionic_ice = {
    color: "#A1B298",
    behavior: behaviors.GAS,
    category: "states",
    state: "gas",
    hidden = true,
    tempHigh = -70,
    tempLow = -500,
    stateHigh = "prionic_gas",
    stateLow = "",
    reactions = {},
    density = 1300
};
elements.prionic_gas = {
    color: "#6C9066",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    hidden = false,
    tempHigh = 1000,
    tempLow = -80,
    stateHigh = "ash",
    stateLow = "prionic_ice",
    reactions = {"body": { elem1: "prionic_gas", elem2: "prionic_gas"},
        {"head": { elem1: "prionic_gas", elem2: "prionic_gas"}}
    },
    density = 0.00058
};