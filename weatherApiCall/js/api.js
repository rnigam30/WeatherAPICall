function getApiCall({ apiUrl, method, callback }) {

    var request = new XMLHttpRequest();

    request.open(method, apiUrl);

    request.send();

    request.addEventListener('load', function () {

        callback(this.responseText);

    })

}