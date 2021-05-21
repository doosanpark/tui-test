
const detailData = [{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
},{
    itemName: "05월 신입 자동평가",
    cnt: 10,
    score: 40
}]


const gridDetail = new Grid({
    el: document.getElementById("evalTableDetail"),
    data: detailData,
    rowHeaders: ["rowNum"],
    header: {
        height: 40
    },
    columns: [
        {
            header: "평가항목명",
            name: "itemName",
            width: "auto"
        },
        {
            header: "문항",
            name: "cnt",
            width: 100,
            align: "center"
        },
        {
            header: "배점",
            name: "score",
            width: 100,
            align: "center"
        }
    ],
    summary: {
        height: 30,
        position: "bottom",
        columnContent: {
            score: {
                template: function(valueMap){
                    return `합계: ${valueMap.sum}`;
                }
            }
        }
    }
})

function addData(){
    
}