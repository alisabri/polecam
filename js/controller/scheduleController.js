define(["app"], function(app) {

    function init(query) {
        console.log(app);
        var pickerDescribe = app.f7.picker({
            input: '#picker-describe',
            rotateEffect: true,
            cols: [{
                    textAlign: 'left',
                    values: (function() {
                        var retval = [];
                        for (i = 0; i < 24; i++)
                            retval.push(i);
                        return retval;
                    })(),
                },
                {
                    divider: true,
                    content: ':'
                },
                {
                    values: (function() {
                        var retval = [];
                        for (i = 0; i < 60; i++)
                            retval.push(i);
                        return retval;
                    })(),
                },
            ]
        });
    }
    return {
        init: init
    };

});
