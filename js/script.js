$(function() {
    animateLine = function(canvas, hoverDivName, colorNumber, pathString) {
            var line = canvas.path(pathString).attr({
                stroke: colorNumber
            });
            var length = line.getTotalLength();

            $('path[fill*="none"]').animate({
                'to': 1
            }, {
                duration: 5000,
                step: function(pos, fx) {
                    var offset = length * fx.pos;
                    var subpath = line.getSubpath(0, offset);
                    canvas.clear();
                    canvas.path(subpath).attr({
                        stroke: colorNumber
                    });

                },
            });
        }, function() {
            $('path[fill*="none"]').stop(true, false).fadeOut();
        }


    var canvas = Raphael('canvas', 800, 300);
    var pathString = "M0 0L0 300L0 H800 V0 H0 Z";

    animateLine(canvas, "canvas", "#000", pathString);

});