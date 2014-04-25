$(function() {

    BWC.Dispatcher.addListener('sys.title', function(e) {
        var ee = e;
        var $dom = BWC.Dispatcher.getDom(ee);
        var sysTitleData = $dom.data('sysTitle') || {};

        if (typeof sysTitleData.target == "undefined") {
            sysTitleData.target = $dom.data('target');
        }
        if (!sysTitleData.target) {
                throw new SyntaxError('sys.title: No target specified');
            }
        var $target = $(sysTitleData.target);
        if ($target.length < 1) {
                throw new SyntaxError('sys.title.append: Target not found: '+target);
            }
        if (typeof sysTitleData.title == "undefined") {
            sysTitleData.title = $dom.data('title');
        }
        if (!sysTitleData.title) {
                throw new SyntaxError('sys.title: No title specified');
        }

        $target.html(sysTitleData.title);

    });

});