var Grid = tui.Grid;

Grid.applyTheme("clean", {
    cell: {
        rowHeader: {
            background: "clean"
        }
    }
});

const data = [{
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[31231]",
    regDate: "2021-01-02",
    updDate: "2021-04-30"
}, {
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[31231]",
    regDate: "2021-01-02",
    updDate: "2021-04-30"
}, {
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[31231]",
    regDate: "2021-01-02",
    updDate: "2021-04-30"
}, {
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[11111]",
    regDate: "2021-01-12",
    updDate: "2021-04-30"
}, {
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[2222]",
    regDate: "2021-01-01",
    updDate: "2021-04-22"
}, {
    evalComposeName: "03",
    evalTableName: "test",
    itemCnt: "2",
    totalPoint: "40",
    useStatus: "N",
    writer: "은방실[33333]",
    regDate: "2021-01-02",
    updDate: "2021-04-29"
}];

const grid = new Grid({
    el: document.getElementById('manageEvalList'),
    data,
    rowHeaders: [
        {
            type: "rowNum",
            header: `구분`
        }, { type: "checkbox" }
    ],
    header: {
        height: 40,
    },
    pageOptions: { useClient: true, perPage: 3 },
    columns: [
        {
            header: '평가표 구성명',
            name: 'evalComposeName',
            formatter: 'listItemText',
            align: "center",
            editor: {
                type: 'select',
                options: {
                    listItems: [
                        { text: 'Select', value: '' },
                        { text: 'Domestic', value: '01' },
                        { text: 'Overseas', value: '02' },
                        { text: 'Etc', value: '03' }
                    ]
                }
            },
        },
        {
            header: '평가표명',
            name: 'evalTableName',
            editor: "text"
        },
        {
            header: '문항 수',
            name: 'itemCnt',
            editor: "text",
            align: "center",
        },
        {
            header: '총점',
            name: 'totalPoint',
            align: "center",
            editor: "text"
        },
        {
            header: '사용여부',
            name: 'useStatus',
            formatter: "listItemText",
            align: "center",
            editor: {
                type: "radio",
                options: {
                    listItems: [
                        { text: "사용", value: 'Y' },
                        { text: "미사용", value: 'N' }
                    ]
                }
            }
        },
        {
            header: '등록자',
            name: 'writer',
            align: "center",
            editor: "text"
        },
        {
            header: '최초 작성일',
            align: "center",
            name: 'regDate',
            sortingType: "desc",
            sortable: true,
            editor: {
                type: 'datePicker',
                options: {
                    format: "yyyy-MM-dd"
                }
            }
        },
        {
            header: '최종 수정일',
            align: "center",
            name: 'updDate',
            sortingType: "desc",
            sortable: true,
            editor: {
                type: 'datePicker',
                options: {
                    selectableRanges: [[new Date(2014, 3, 10), new Date(2030, 5, 20)]]
                }
            }
        }
    ]
});


function addDataFromModal(fieldId) {

    var data = {};

    data.evalComposeName = $(fieldId + " #evalTableCate option:selected").val();
    data.evalTableName = $(fieldId + " #evalTableName").val();
    data.itemCnt = $(fieldId + " #itemCnt").val();
    data.totalPoint = $(fieldId + " #totalScore").val();
    data.useStatus = $(fieldId + " input[name='useStatus']:checked").val();
    data.writer = "doosan";
    data.regDate = "2021-01-02";
    data.updDate = "2021-05-21";

    grid.appendRow(data);

    $(fieldId).modal('hide');
}


function removeDatas(){
    grid.removeCheckedRows();
}


// 데이터가 소트되는데 어떻게??
function saveDatas(){
    var dataList = grid.getData();
}


function cancel(){
    grid.restore();
}