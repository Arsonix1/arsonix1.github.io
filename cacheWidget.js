var frame = document.getElementById('results_frame');
var cacheWidget = {
    input: document.body.querySelector('.search-input'),
    archiveButtons: document.body.querySelectorAll('.archive-buttons button'),
    url: null,

    init: function () {
        this.listen()
    },

    listen: function () {
        this.input.addEventListener('input', (e) => {
            this.input.value = this.removeHttp(e.target.value);
            this.url = this.input.value;
        });

        Array.from(this.archiveButtons).forEach(button => {
            button.addEventListener('click', (e) => {
                this.url = this.removeTrailingSlash(this.input.value);
                this.redirectToArchiveUrl(e.target)
            })
        })
    },

    removeHttp: (url) => {
        return url.replace(/^https?:\/\//, '');
    },

    removeTrailingSlash: (str) => {
        return str.replace(/\/+$/, '');
    },

    redirectToArchiveUrl: function (el) {
        if (!this.url) return;
        var archiveUrl = el.dataset.archiveUrl;
        var url = archiveUrl.replace('[YOUR_SITE]', this.url);
        if (el.id) {
            window.open(url, '_blank')
        } else {
            frame.style.display = "block";
            frame.src = url;
        }
    }

}

cacheWidget.init()