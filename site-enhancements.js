(function () {
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var loaderDone = false;

    function hideLoader() {
        if (loaderDone) return;
        loaderDone = true;
        var el = document.getElementById('page-loader');
        if (el) {
            el.classList.add('page-loader--hide');
            if (reducedMotion) {
                el.setAttribute('hidden', '');
            } else {
                el.addEventListener(
                    'transitionend',
                    function (ev) {
                        if (ev.propertyName === 'opacity') {
                            el.setAttribute('hidden', '');
                        }
                    },
                    { once: true }
                );
            }
        }
        document.body.classList.remove('page-is-loading');
    }

    if (reducedMotion) {
        hideLoader();
    } else {
        window.addEventListener('load', function () {
            window.setTimeout(hideLoader, 380);
        });
        if (document.readyState === 'complete') {
            window.setTimeout(hideLoader, 380);
        }
        window.setTimeout(hideLoader, 8000);
    }

})();
