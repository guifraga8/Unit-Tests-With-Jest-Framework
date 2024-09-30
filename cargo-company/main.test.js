const {
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
} = require('./main');

beforeEach(() => {
    vehiclesMock.forEach(vehicle => {
        vehicle.vehicles = [];
    });
});

describe('Testes com a interface', () => {
    test('Mostrar resultados corretos com veículos que têm itens', () => {
        vehiclesMock[0].vehicles.push({ weight: 40, description: "Caixa pequena" });
        vehiclesMock[1].vehicles.push({ weight: 1000, description: "Caixa média" });
        vehiclesMock[2].vehicles.push({ weight: 5000, description: "Caixa grande" });

        const expectedOutput = 
            "Resultado: \n" +
            "Moto 1: \n" +
            "40Kg Caixa pequena\n" +
            "Van 1: \n" +
            "1000Kg Caixa média\n" +
            "Kombi 1: \n" +
            "5000Kg Caixa grande\n\n" +
            "Capacidade total: 8045kg\n" +
            "Peso total: 6040kg\n" +
            "Espaço de sobra: 2005kg\n" +
            "Percentual carregado: 75.08%";

        document.body.innerHTML = '<textarea id="result-text"></textarea>';
        showResult();
        expect(document.getElementById("result-text").value.trim()).toBe(expectedOutput);
    });

    test('Resetar veículos e itens', () => {
        vehiclesMock[0].vehicles.push({ weight: 40, description: "Caixa pequena" });
        items.push({ weight: 40, description: "Caixa pequena" });
        
        expect(vehiclesMock[0].vehicles.length).toBe(1);
        expect(items.length).toBe(1);

        resetArrays();
        
        expect(vehiclesMock[0].vehicles.length).toBe(0);
        expect(items.length).toBe(1);
    });

    test('Captura de dados corretamente do textArea', () => {
        document.body.innerHTML = '<textarea id="data">40kg Caixa pequena</textarea>';
        getData();
        
        expect(items.length).toBe(1);
        expect(items[0]).toEqual({ weight: 40, description: "Caixa pequena" });
    });

    test('Limpar textarea', () => {
        document.body.innerHTML = '<textarea id="data"></textarea><textarea id="result-text"></textarea>';
        document.getElementById("data").value = "Texto qualquer";
        document.getElementById("result-text").value = "Resultado";
        
        clearTextArea();
        
        expect(document.getElementById("data").value).toBe("");
        expect(document.getElementById("result-text").value).toBe("");
    });
});

describe('Testes para distribuição de itens e veículos', () => {
    test('Distribuir item em veículo adequado', () => {
        const item = { weight: 40, description: "Caixa pequena" };
        distributeItemsBetweenVehicles(item);
        expect(vehiclesMock[0].vehicles.length).toBe(1);
    });

    test('Não exceder o peso máximo do veículo', () => {
        const motoItem = { weight: 50, description: "Caixa grande" };
        distributeItemsBetweenVehicles(motoItem);
        expect(vehiclesMock[0].vehicles.length).toBe(0);
        expect(vehiclesMock[1].vehicles.length).toBe(1);
    });

    test('Distribuir múltiplos itens entre veículos', () => {
        const items = [
            { weight: 40, description: "Caixa pequena" },
            { weight: 1000, description: "Caixa média" },
            { weight: 4000, description: "Caixa grande" }
        ];
        items.forEach(distributeItemsBetweenVehicles);
        expect(vehiclesMock[0].vehicles.length).toBe(1);
        expect(vehiclesMock[1].vehicles.length).toBe(1);
        expect(vehiclesMock[2].vehicles.length).toBe(1);
    });

    test('Adicionar item em novo veículo se o atual estiver cheio', () => {
        const item1 = { weight: 40, description: "Caixa 1" };
        const item2 = { weight: 40, description: "Caixa 2" };

        distributeItemsBetweenVehicles(item1);
        distributeItemsBetweenVehicles(item2);

        expect(vehiclesMock[0].vehicles.length).toBe(2);
    });

    test('Calcular o peso total em um veículo', () => {
        const items = [{ weight: 40, description: "Caixa 1" }, { weight: 60, description: "Caixa 2" }];
        vehiclesMock[1].vehicles.push(...items);
        const totalWeight = calculateWeightInVehicle(vehiclesMock[1]);
        expect(totalWeight).toBe(100);
    });
});

describe('Testes para cálculo de capacidade e espaço utilizado', () => {
    test('Calcular a capacidade total de todos os veículos', () => {
        const totalCapacity = calculateTotalCapacity();
        expect(totalCapacity).toBe(20045);
    });

    test('Calcular o percentual de espaço usado', () => {
        vehiclesMock[1].vehicles.push({ weight: 1000, description: "Caixa grande" });
        const spaceUsed = calculateSpaceUsed(vehiclesMock[1]);
        expect(spaceUsed).toBe("33.33");
    });

    test('Calcular espaço restante', () => {
        vehiclesMock[1].vehicles.push({ weight: 1000, description: "Caixa grande" });
        const remainingSpace = calculateRemainingSpace(vehiclesMock[1]);
        expect(remainingSpace).toBe(2000);
    });

    test('Calcular peso total dos itens carregados', () => {
        vehiclesMock[1].vehicles.push({ weight: 1000, description: "Caixa grande" });
        const totalWeight = calculateItemsTotalWeight();
        expect(totalWeight).toBe(1000);
    });
});
