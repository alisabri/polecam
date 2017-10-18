require.config({
    paths: {

    },
    shim: {

    }
});
define('app', ['js/router'], function(Router) {

    Router.init();
    var f7 = new Framework7({
        modalTitle: 'PoleCam',
        material: true,
        materialPageLoadDelay: 200
    });

    var mainView = f7.addView('.view-main', {
    });

    return {
        f7: f7,
        mainView: mainView,
        router: Router
    };
});
