(function(w) {
    w.httpClientApp = (function() {
        const get = (url) => {
            return fetch(url)
                .then(function(response) {
                    return response.json();
                });
        }

        const registerGetAction = (elm, elmOut, url) => {
            elm.addEventListener('click', () => {
                httpClientApp.get(url).then(function(myJson) {
                    elmOut.innerText = JSON.stringify(myJson);
                });
            })
        }

        return {
            get,
            registerGetAction,
        }
    })();
})(window)