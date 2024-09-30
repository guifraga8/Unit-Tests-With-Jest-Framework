/**
 * @author Guilherme Fraga
 * @since 30/09/2024
 * @version 2.0
 */

const vehiclesMock = [
    { description: "Moto", maxWeight: 45, vehicles: [] },
    { description: "Van", maxWeight: 3000, vehicles: [] },
    { description: "Kombi", maxWeight: 5000, vehicles: [] },
    { description: "Caminhão", maxWeight: 12000, vehicles: [] },
];

let items = [];

function controller() {
    getData();
    items.forEach(distributeItemsBetweenVehicles);
    showResult();
    resetArrays();
}

function showResult() {
    let finalResult = "Resultado: \n";
    const vehiclesWithItems = vehiclesMock.filter(vehicle => vehicle.vehicles.length > 0);

    let totalCapacity = 0;
    let totalWeight = 0;

    const vehicleResults = vehiclesWithItems.map(vehicle => {
        const weightInVehicle = calculateWeightInVehicle(vehicle);
        totalCapacity += vehicle.maxWeight;
        totalWeight += weightInVehicle;
        return toStringVehicleType(vehicle);
    });

    finalResult += vehicleResults.join('');

    const totalRemainingSpace = totalCapacity - totalWeight;
    const totalPercentageLoaded = (totalWeight / totalCapacity * 100).toFixed(2);

    finalResult += `\nCapacidade total: ${totalCapacity}kg\n`;
    finalResult += `Peso total: ${totalWeight}kg\n`;
    finalResult += `Espaço de sobra: ${totalRemainingSpace}kg\n`;
    finalResult += `Percentual carregado: ${totalPercentageLoaded}%`;

    document.getElementById("result-text").value = finalResult;
}

function resetArrays() {
    vehiclesMock.forEach(vehicle => vehicle.vehicles = []);
    items = [];
}

function toStringVehicleType(vehicle) {
    return vehicle.vehicles.map((unit, index) => {
        return `${vehicle.description} ${index + 1}: \n${toString(unit)}`;
    }).join('');
}

function toString(item) {
    return `${item.weight}Kg ${item.description}\n`;
}

function getData() {
    const data = document.getElementById("data").value.trim();
    items = data.split('\n').map(line => {
        const [weight, ...description] = line.split(' ');
        return {
            weight: parseInt(weight.replace('kg', ''), 10),
            description: description.join(' ')
        };
    });
}

function clearTextArea() {
    document.getElementById("data").value = "";
    document.getElementById("result-text").value = "";
}

function distributeItemsBetweenVehicles(item) {
    for (let vehicle of vehiclesMock) {
        if (item.weight <= vehicle.maxWeight) {
            distributeItemInVehicle(vehicle, item);
            break;
        }
    }
}

function distributeItemInVehicle(vehicle, item) {
    vehicle.vehicles.push(item);
}

function calculateWeightInVehicle(vehicle) {
    return vehicle.vehicles.reduce((total, currentItem) => total + currentItem.weight, 0);
}

function calculateTotalCapacity() {
    return vehiclesMock.reduce((total, vehicle) => total + vehicle.maxWeight, 0);
}

function calculateSpaceUsed(vehicle) {
    const totalWeight = calculateWeightInVehicle(vehicle);
    const totalCapacity = vehicle.maxWeight;
    return ((totalWeight / totalCapacity) * 100).toFixed(2);
}

function calculateRemainingSpace(vehicle) {
    return vehicle.maxWeight - calculateWeightInVehicle(vehicle);
}

function calculateItemsTotalWeight() {
    return vehiclesMock.reduce((total, vehicle) => total + calculateWeightInVehicle(vehicle), 0);
}

module.exports = {
    showResult,
    resetArrays,
    getData,
    clearTextArea,
    items,
    distributeItemsBetweenVehicles,
    calculateWeightInVehicle,
    calculateTotalCapacity,
    calculateSpaceUsed,
    calculateRemainingSpace,
    calculateItemsTotalWeight,
    vehiclesMock,
};
