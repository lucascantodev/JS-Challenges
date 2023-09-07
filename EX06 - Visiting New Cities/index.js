const getInfo = () => {
    const name = prompt('Name: ');
    const booleanTrip = prompt('Have you ever visited another city? Y/N');
    return { name, booleanTrip };
}

const gettingInfo = getInfo();

const aksMore = () => {
    const citiesNames = [];
    while (gettingInfo.booleanTrip == 'Y') {
        const city = prompt('Which city?');
        citiesNames.push(city);
        gettingInfo.booleanTrip = prompt('Have you ever visited another city? Y/N');
    }
    return citiesNames;
}

const citiesVisited = aksMore();

const resultPrint = () => {
    alert(gettingInfo.name + " have visited " + citiesVisited.length + " city(ies)");
    alert(gettingInfo.name + " have visited " + citiesVisited);
}

gettingInfo.booleanTrip == 'N' ? resultPrint() : alert('HAHA');
