{
    let document_addr = document.location.pathname;
    var elements = document.getElementsByClassName("md-content")[0].getElementsByTagName('a');
    for(var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].className == "") {
            elements[i].onclick = function (obj) {
                linkReport(obj.target.href, document_addr);
            }
        }
    }
}
