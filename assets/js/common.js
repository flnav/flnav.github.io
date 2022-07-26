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
$.getJSON('https://47.113.194.125/', {
    'module': 'API',
    'method': 'VisitsSummary.getVisits',
    'idSite': '1',
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': '355b1b1dc039e29d9b3ab7b3db9cc372'
}, function (data) {
    $('#yesterday-visits').text(data.value);
});
$.getJSON('https://47.113.194.125/', {
    'module': 'API',
    'method': 'VisitsSummary.getActions',
    'idSite': '1',
    'period': 'day',
    'date': 'yesterday',
    'format': 'JSON',
    'token_auth': '355b1b1dc039e29d9b3ab7b3db9cc372'
}, function (data) {
    $('#yesterday-actions').text(data.value);
});
function updateAnalytics() {
    $.getJSON('https://47.113.194.125/', {
        'module': 'API',
        'method': 'VisitsSummary.getVisits',
        'idSite': '1',
        'period': 'day',
        'date': 'today',
        'format': 'JSON',
        'token_auth': '355b1b1dc039e29d9b3ab7b3db9cc372'
    }, function (data) {
        $('#today-visits').text(data.value);
    });
    $.getJSON('https://47.113.194.125/', {
        'module': 'API',
        'method': 'VisitsSummary.getActions',
        'idSite': '1',
        'period': 'day',
        'date': 'today',
        'format': 'JSON',
        'token_auth': '355b1b1dc039e29d9b3ab7b3db9cc372'
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