var cacheWidget = {
    input: document.body.querySelector('.search-input'),
    archiveButtons: document.body.querySelectorAll('.archive-buttons button'),
    url: null,

    init: function () {
        this.listen()
    },

    listen: function () {
        this.input.addEventListener('keyup', (e) => {
            this.input.value = this.removeHttp(e.target.value);
            this.url = e.target.value;
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
        window.open(url, '_blank')
    }

}

cacheWidget.init()