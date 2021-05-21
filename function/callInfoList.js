function setGridOnCallInfoModal() {
    $("#fieldCallInfoList").html(
        '<div id="gridCallInfoList"></div>'
    );
    
   setTimeout(setTableCallInfo, 250);
}

function setTableCallInfo(){
    var prevData = [
        {
            title: "dsjfklsd",
            score: "22"
        },
        {
            title: "dsjfklsd",
            score: "23"
        },
        {
            title: "dsjfklsd",
            score: "24"
        },
    ]
    
    var ss = "1)문제해결능력";

    const gridCallInfo = new Grid({
        el: document.getElementById("gridCallInfoList"),
        data: prevData,
        rowHeaders: ["rowNum", "checkbox"],
        columns: [
            {
                header: "평가항목명1",
                name: "evalClassify1",
            },
            {
                header: "평가항목명2",
                name: "evalClassify2",
            },
            {
                header: "사용여부",
                name: "useStatus",
            },
            {
                header: "최초 작성일",
                name: "regDate",
            },
            {
                header: "최종 수정일",
                name: "updDate",
            },
            {
                header: "작성자",
                name: "writer",
            }
        ],
    })
}