var salesDiv = document.getElementById("sales");

retrieveSalesData();

function retrieveSalesData() {
    var salesDataURL = "http://localhost:8080/MightyGumball/json/sales.json";
    var request = new XMLHttpRequest();
    request.open("get", salesDataURL);
    request.onload = function() {
        if (request.status == 200) {
            updateSales(request.responseText);
        }
    };
    request.send(null);
}

function updateSales(responseText) {
    var salesData = JSON.parse(responseText);
    salesData.forEach(dataItem => {
        presentSalesDataItem(dataItem);
    });
}

function presentSalesDataItem(dataItem) {
    var dataItemDiv = document.createElement("div");
    dataItemDiv.className = "salesDataItem";
    dataItemDiv.innerHTML = 
        dataItem.name + " sold " + dataItem.sales + " gumballs";
    salesDiv.appendChild(dataItemDiv);
}