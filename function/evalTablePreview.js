function setGridOnPreviewModal() {
    $("#fieldEvalTablePreview").html(
        '<div id="gridEvalTablePreview"></div>'
    );
    
   setTimeout(setTable, 250);
}

function setTable(){
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

    const gridPreview = new Grid({
        el: document.getElementById("gridEvalTablePreview"),
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