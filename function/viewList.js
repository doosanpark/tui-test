const viewListData = [{
    itemName: "인사말을 누락없이, 정확한 발음으로 구사하였다.",
    score: 5,
}, {
    itemName: "인사말을 누락없이 구사하였으나, 발음이 부정확하였다.",
    score: 3,
}, {
    itemName: "인사말 중 1가지 이상 누락하였다.",
    score: 0,
}]



var gridList = new Grid({
    el: document.getElementById("viewList"),
    data: viewListData,
    rowHeaders: ["rowNum", "checkbox"],
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
