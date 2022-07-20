// common.js

// menu
$(document).ready(function () {
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });
    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

// masthead background
$('.ui.inverted.masthead.segment').addClass(`bg${Math.ceil(Math.random() * 14)}`).removeClass('zoomed');// analytics
$.getJSON('https://vps.irockbunny.com/analytics/', {
    'module': 'API',
    'method': 'VisitsSummary.getVisits',
    'idSite': '1',
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': 'b20d2b5002a1241da41853f33eccccdd'
}, function (data) {
    $('#yesterday-visits').text(data.value);
});
$.getJSON('https://vps.irockbunny.com/analytics/', {
    'module': 'API',
    'method': 'VisitsSummary.getActions',
    'idSite': '1',
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': 'b20d2b5002a1241da41853f33eccccdd'
}, function (data) {
    $('#yesterday-actions').text(data.value);
});
function updateAnalytics() {
    $.getJSON('https://vps.irockbunny.com/analytics/', {
        'module': 'API',
        'method': 'VisitsSummary.getVisits',
        'idSite': '1',
        'period': 'day',
        'date': 'today',
        'format': 'JSON',
        'token_auth': 'b20d2b5002a1241da41853f33eccccdd'
    }, function (data) {
        $('#today-visits').text(data.value);
    });
    $.getJSON('https://vps.irockbunny.com/analytics/', {
        'module': 'API',
        'method': 'VisitsSummary.getActions',
        'idSite': '1',
        'period': 'day',
        'date': 'today',
        'format': 'JSON',
        'token_auth': 'b20d2b5002a1241da41853f33eccccdd'
    }, function (data) {
        $('#today-actions').text(data.value);
    });
};
updateAnalytics();
setInterval(function () {
    if (!document.hidden) {
        updateAnalytics();
    };
}, 60000);