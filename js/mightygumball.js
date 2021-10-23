var salesDiv = document.getElementById("sales");

function updateSales(salesData) {
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