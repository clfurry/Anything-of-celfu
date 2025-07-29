// testing mod
elements.prionic_ice = {
    color: "#a1b298",
    behavior: behaviors.GAS,
    category: "states",
    state: "gas",
    hidden = true,
    tempHigh = -70,
    tempLow = -200,
    stateHigh = "prionic_gas",
    stateLow = "prionic_ice",
    reactions = {},
    density = 1300,
    viscosity = 30000000000000
};
elements.prionic_gas = {
    color: "#6c9066",
    behavior: behaviors.GAS,
    category: "Gases",
    state: "gas",
    hidden = false,
    tempHigh = 1000,
    tempLow = -80,
    stateHigh = "ash",
    stateLow = "prionic_ice",
    reactions = {
"body": { elem1: "prionic_gas", elem2: "prionic_gas"},
        {"head": { elem1: "prionic_gas", elem2: "prionic_gas"}}
    },
    density = 0.00058,
    viscosity = 0.1,
    alpha = 0.5,
    glow = true
};