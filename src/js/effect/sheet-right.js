(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            '$',
            'velocity'
        ], factory);
    } else {
        var framework = window.Zepto || window.jQuery;
        factory(framework, framework.Velocity);
    }
}(function($, Velocity) {
    return function() {
        var plugin = this;
        var coverage = this._coverage();

        this.$pikabu
            .css({
                top: 0,
                bottom: 0,
                right: 0,
                left: coverage ? coverage : 'auto',
                width: coverage ? 'auto' : this.options.coverage,
                height: 'auto'
            });

        return {
            open: function() {


                // Force feed the initial value
                Velocity.animate(
                    plugin.$pikabu,
                    { translateX: [0, '100%'] },
                    {
                        easing: plugin.options.easing,
                        duration: plugin.options.duration,
                        display: 'block',
                        complete: plugin.animation.openComplete.bind(plugin)
                    }
                );
            },
            close: function() {
                Velocity.animate(
                    plugin.$pikabu,
                    'reverse',
                    {
                        begin: plugin.animation.beginClose.bind(plugin),
                        easing: plugin.options.easing,
                        duration: plugin.options.duration,
                        display: 'none',
                        complete: plugin.animation.closeComplete.bind(plugin)
                    }
                );
            }
        };
    };

}));
