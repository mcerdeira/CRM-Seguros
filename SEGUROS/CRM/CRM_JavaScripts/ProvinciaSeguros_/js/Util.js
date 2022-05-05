function tableSearch(rows, filter, colToFilter) {
    filter = filter.toUpperCase();
    if (filter != "") {
        rows.hide();
        var showRow;
        rows = rows.filter(function () {
            for (var i = 0; i < colToFilter.length; i++) {
                var dataTD = $(this).children(":nth-child(" + colToFilter[i] + ")").text().toUpperCase();
                console.log(dataTD);
                showRow = dataTD.includes(filter);
                //si encontro datos ya puedo mostrar la fila porlo que salgo del loop
                if (showRow) i = colToFilter.length;
            }

            return showRow;
        });
    }
    rows.show();
}