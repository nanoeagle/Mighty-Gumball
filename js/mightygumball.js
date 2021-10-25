const SALES_DATA_ID = "salesData";

var lastReportTime = 0;

setInterval(refreshSalesData, 3000);

function refreshSalesData() {
    var oldSalesDataElement = document.getElementById(SALES_DATA_ID);
    if (oldSalesDataElement) {
        document.head.replaceChild(createNewSalesDataElement(), oldSalesDataElement);
    } else {
        document.head.appendChild(createNewSalesDataElement());
    }
}

function createNewSalesDataElement() {
    var newSalesDataElement = document.createElement("script");
    newSalesDataElement.src = 
        "http://gumball.wickedlysmart.com?callback=updateSales" + 
        "&lastreporttime=" + lastReportTime;
    newSalesDataElement.id = SALES_DATA_ID;
    newSalesDataElement.defer = true;
    return newSalesDataElement;
}

function updateSales(salesData) {
    salesData.forEach(dataItem => presentSalesFrom(dataItem));
    if (salesData.length > 0) {
        lastReportTime = salesData[salesData.length - 1].time;
    }
}

function presentSalesFrom(dataItem) {
    var dataItemDiv = createDataItemDivFrom(dataItem);
    var salesViewport = document.getElementById("salesViewport");
    clearSalesViewportIfDataIsTooLong(salesViewport);
    salesViewport.appendChild(dataItemDiv);
}

function createDataItemDivFrom(dataItem) {
    var dataItemDiv = document.createElement("div");
    dataItemDiv.className = "salesDataItem";
    dataItemDiv.innerHTML = 
        dataItem.name + " sold " + dataItem.sales +
        (dataItem.sales === 1 ? " gumball" : " gumballs");
    return dataItemDiv;
}

function clearSalesViewportIfDataIsTooLong(viewport) {
    if (viewport.childElementCount === 10) {
        viewport.textContent = "";
    }
}