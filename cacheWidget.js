var frame = document.getElementById('results_frame');
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
        if (el.id === 'yahooBtn' || el.id === 'yandexBtn') {
            el.id === 'yahooBtn'
                ? window.open('http://search.yahoo.com/search?p=url:http%3A%2F%2F'+this.url, '_blank')
                : window.open('https://yandex.ru/yandsearch?lr=213&text=url%3A'+this.url, '_blank')
        } else {
            if (!this.url) return;
            var archiveUrl = el.dataset.archiveUrl;
            var url = archiveUrl.replace('[YOUR_SITE]', this.url);
            frame.style.display = "block";
            frame.src = url;
        }
    }
}

cacheWidget.init()