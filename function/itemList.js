const itemListData = [{
    itemName: "전체",
    score: "",
    _children: [
    {
        itemName: "인사",
        score: "",
        _children: [{
            itemName: "첫 응대",
            score: "5"
        },{
            itemName: "끝 응대",
            score: "5"
        }]
    },
    {
        itemName: "응대태도",
        score: "",
        _children: [{
            itemName: "언어표현",
            score: "10"
        },{
            itemName: "경청/말자름",
            score: "5"
        }]
    }
    ]
}]



var gridList = new Grid({
    el: document.getElementById("itemList"),
    data: itemListData,
    rowHeaders: ["rowNum", "checkbox"],
    treeColumnOptions: {
        name: "itemName"
    },
    header: {
        height: 40,
    },
    columns: [
        {
            header: "문항명",
            name: "itemName"
        },{
            header: "배점",
            name: "score",
            width: 100,
            align: "center"
        }
    ],
    summary: {
        height: 40,
        position: "bottom",
        columnContent: {
            score: {
                template: function(valueMap){
                    return `합계: ${valueMap.sum}`
                }
            }
        }
    }
})

gridList.on('expand', ev => {
    const { rowKey } = ev;
    const descendantRows = gridList.getDescendantRows(rowKey);

    console.log('rowKey: ' + rowKey);
    console.log('descendantRows: ' + descendantRows);

    if (!descendantRows.length) {
        gridList.appendRow(
            {
                name: 'dynamic loading data',
                _children: [
                    {
                        name: 'leaf row'
                    },
                    {
                        name: 'internal row',
                        _children: []
                    }
                ]
            },
            { parentRowKey: rowKey }
        );
    }
});

gridList.on('collapse', ev => {
    const { rowKey } = ev;
    const descendantRows = gridList.getDescendantRows(rowKey);

    console.log('rowKey: ' + rowKey);
    console.log('descendantRows: ' + descendantRows);
});