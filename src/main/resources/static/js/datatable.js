$(document).ready( function () {
    var table = $('#beaches').DataTable({
        "sAjaxSource": "/api/v1/beaches",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData": "id"},
            { "mData": "name" },
            { "mData": "description" },
            { "mData": "rating" },
        ]
    })
});