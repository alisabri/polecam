define(["app"], function(app) {

    function timePicker(id) {
        return app.f7.picker({
            input: id,
            rotateEffect: true,
            inputReadOnly: false,
            formatValue: function(picker, values) {
                return values[0] + ':' + values[1];
            },
            cols: [{
                    textAlign: 'left',
                    values: (function() {
                        var retval = [];
                        var tmp;
                        for (i = 0; i < 24; i++) {
                            tmp = '0' + i;
                            retval.push(tmp.substr(tmp.length - 2));
                        }
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
                        var tmp;
                        for (i = 0; i < 60; i++) {
                            tmp = '0' + i;
                            retval.push(tmp.substr(tmp.length - 2));
                        }
                        return retval;
                    })(),
                },
            ]
        });
    }

    function init(query) {
        console.log(app);
        var timeFromPicker = timePicker('#timeFrom');
        var timeToPicker = timePicker('#timeTo');
        var startDate = app.f7.calendar({
              input: '#startDate',
              dateFormat: 'DD, MM dd, yyyy'

        });
    }

    return {
        init: init
    };

});
