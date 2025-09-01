// customize.js

// 定义需要设置的域名列表
const domains = ['.feilong.onLine', '.flnav.github.io','.12fl.com','.feilong.xyz'];
function setJSONCookie(name, value) {
    domains.forEach(domain => {
        Cookies.set(name, JSON.stringify(value), {
            expires: 365,
            domain: domain, // 遍历设置每个域名
            secure: true
        });
    });
};

function updateJSONCookie(name, key, value) {
    let shortcuts = JSON.parse(Cookies.get(name));
    shortcuts[key] = value;
    domains.forEach(domain => {
        Cookies.set(name, JSON.stringify(shortcuts), {
            expires: 365,
            domain: domain,
            secure: true
        });
    });
};

// initialize cookie
if (Cookies.get('byr_navi_search_shortcuts') === undefined || Cookies.get('byr_navi_search_shortcuts') === '') {
    let shortcuts = {};
    $('.ui.button.shortcut-toggle-show').each(function () {
        shortcuts[$(this).data('search-service-id')] = $(this).data('show');
    });
    setJSONCookie('byr_navi_search_shortcuts', shortcuts);
} else {
    let shortcuts = JSON.parse(Cookies.get('byr_navi_search_shortcuts'));
    $('.shortcut').each(function () {
        if (shortcuts[$(this).attr('id')]) {
            $(`#${$(this).attr('id')} .shortcut-visibility`).addClass('active').text('显示');
            $(`#${$(this).attr('id')} .shortcut-toggle-show`).data('show', true);
            $(`#${$(this).attr('id')} .shortcut-toggle-show`).addClass('grey').attr({
                'data-show': 'false',
                'data-tooltip': '标记“隐藏”'
            });
            $(`#${$(this).attr('id')} .shortcut-toggle-show .icon`).removeClass('slash');
        } else {
            $(`#${$(this).attr('id')} .shortcut-visibility`).removeClass('active').text('隐藏');
            $(`#${$(this).attr('id')} .shortcut-toggle-show`).data('show', false);
            $(`#${$(this).attr('id')} .shortcut-toggle-show`).removeClass('grey').attr({
                'data-show': 'false',
                'data-tooltip': '标记“显示”'
            });
            $(`#${$(this).attr('id')} .shortcut-toggle-show .icon`).addClass('slash');
        };
    });
};

// shortcut toggle button
$('.ui.button.shortcut-toggle-show').each(function () {
    $(this).click(function () {
        if ($(this).data('show')) {
            $(this).data('show', false);
            $(this).removeClass('grey').attr({
                'data-show': 'false',
                'data-tooltip': '标记“显示”'
            });
            $(`#${$(this).data('search-service-id')} .shortcut-visibility`).removeClass('active').text('隐藏');
            $(`#${$(this).data('search-service-id')} .shortcut-toggle-show .icon`).addClass('slash');
            updateJSONCookie('byr_navi_search_shortcuts', $(this).data('search-service-id'), false);
            $('body').toast({
                class: 'success',
                showIcon: 'eye slash',
                title: `隐藏“${$(`#${$(this).data('search-service-id')} .shortcut-preview`).data('tooltip')}”`,
                message: `已标记快捷搜索项“${$(`#${$(this).data('search-service-id')} .shortcut-preview`).data('tooltip')}”为“隐藏”`
            });
        } else {
            $(this).data('show', true);
            $(this).addClass('grey').attr({
                'data-show': 'true',
                'data-tooltip': '标记“隐藏”'
            });
            $(`#${$(this).data('search-service-id')} .shortcut-visibility`).addClass('active').text('显示');
            $(`#${$(this).data('search-service-id')} .shortcut-toggle-show .icon`).removeClass('slash');
            updateJSONCookie('byr_navi_search_shortcuts', $(this).data('search-service-id'), true);
            $('body').toast({
                class: 'success',
                showIcon: 'eye',
                title: `显示“${$(`#${$(this).data('search-service-id')} .shortcut-preview`).data('tooltip')}”`,
                message: `已标记快捷搜索项“${$(`#${$(this).data('search-service-id')} .shortcut-preview`).data('tooltip')}”为“显示”`
            });
        };
    });
});

// reset button
$('#reset-cookie').click(function () {
    domains.forEach(domain => {
        Cookies.remove('byr_navi_search_shortcuts', {
            domain: domain
        });
    });
    location.reload(true);
});
