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
        columns: [
            {
                header: ss,
                name: "title",
            },
            {
                header: "배점",
                name: "score",
                width: 100,
                align: "center"
            }
        ],
    })
}