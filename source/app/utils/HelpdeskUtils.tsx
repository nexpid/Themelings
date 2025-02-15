// app/utils/HelpdeskUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: wrapURL
        _fun43936: for(var _fun43936_ip = 0; ; ) switch(_fun43936_ip) {
 0:
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun43936_ip = 16; continue _fun43936 }
 9:
            mike = _closure1_slot5;
 16:
            entity = argFoo;
            entity = mike + entity;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: getLocale
        entity = _closure1_slot3;
        mike = entity.locale;
        entity = mike.toLowerCase;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot8 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.LocalizedLinks;
    var _closure1_slot4 = options;
    offset = mike.SUPPORT_DOMAIN;
    verify = mike.SUPPORT_DEV_DOMAIN;
    mike = tango.HermesInternal;
    mike = mike.concat;
    options = 'https://';
    mike = mike.bind(options)(offset);
    var _closure1_slot5 = mike;
    tango = tango.HermesInternal;
    tango = tango.concat;
    tango = tango.bind(options)(verify);
    var _closure1_slot6 = tango;
    tango = {};
    options = function(argFoo) { // Original name: getArticleURL
        zulu = _closure1_slot7;
        entity = _closure1_slot8;
        mike = undefined;
        golf = entity.bind(mike)();
        entity = global;
        entity = entity.HermesInternal;
        oscar = entity.concat;
        report = '/hc/';
        tango = '/articles/';
        entity = argFoo;
        entity = oscar.bind(report)(golf, tango, entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    tango['getArticleURL'] = options;
    options = function(argFoo) { // Original name: getDevArticleURL
        tango = _closure1_slot7;
        mike = _closure1_slot8;
        zulu = undefined;
        options = mike.bind(zulu)();
        mike = global;
        mike = mike.HermesInternal;
        golf = mike.concat;
        oscar = '/hc/';
        report = '/articles/';
        mike = argFoo;
        mike = golf.bind(oscar)(options, report, mike);
        entity = _closure1_slot6;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    tango['getDevArticleURL'] = options;
    options = function(argFoo) { // Original name: getCreatorSupportArticleURL
        tango = _closure1_slot7;
        entity = _closure1_slot8;
        zulu = undefined;
        golf = entity.bind(zulu)();
        entity = global;
        entity = entity.HermesInternal;
        oscar = entity.concat;
        report = '/hc/';
        mike = '/articles/';
        entity = argFoo;
        mike = oscar.bind(report)(golf, mike, entity);
        entity = 'https://creator-support.discord.com';
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    tango['getCreatorSupportArticleURL'] = options;
    options = function() { // Original name: getTwitterURL
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 2;
        mike = zulu[mike];
        zulu = undefined;
        mike = tango.bind(zulu)(mike);
        entity = _closure1_slot4;
        entity = entity.TWITTER;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['getTwitterURL'] = options;
    options = function() { // Original name: getCommunityURL
        zulu = _closure1_slot7;
        entity = _closure1_slot8;
        mike = undefined;
        report = entity.bind(mike)();
        entity = global;
        entity = entity.HermesInternal;
        tango = entity.concat;
        entity = '/hc/';
        entity = tango.bind(entity)(report);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    tango['getCommunityURL'] = options;
    options = function(argFoo) { // Original name: getSubmitRequestURL
        _fun43943: for(var _fun43943_ip = 0; ; ) switch(_fun43943_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot7;
            mike = _closure1_slot8;
            report = undefined;
            verify = mike.bind(report)();
            mike = global;
            tango = mike.encodeURIComponent;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 3;
            entity = options[entity];
            golf = golf.bind(report)(entity);
            entity = golf.getPlatformName;
            entity = entity.bind(golf)();
            options = tango.bind(report)(entity);
            entity = mike.HermesInternal;
            golf = entity.concat;
            tango = '/hc/';
            entity = '/requests/new?platform=';
            entity = golf.bind(tango)(verify, entity, options);
            zulu = zulu.bind(report)(entity);
            tango = null;
            entity = zulu;
            if(!(tango != oscar)) { _fun43943_ip = 144; continue _fun43943 }
 107:
            tango = mike.encodeURIComponent;
            report = tango.bind(report)(oscar);
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = '&device_info=';
            mike = tango.bind(mike)(report);
            entity = zulu + mike;
 144:
            return entity;
        }
    };
    tango['getSubmitRequestURL'] = options;
    options = function(argFoo) { // Original name: getSearchURL
        entity = global;
        tango = entity.encodeURIComponent;
        zulu = undefined;
        mike = argFoo;
        offset = tango.bind(zulu)(mike);
        mike = _closure1_slot7;
        tango = _closure1_slot8;
        romeo = tango.bind(zulu)();
        entity = entity.HermesInternal;
        oscar = entity.concat;
        foxtrot = '/hc/';
        yankee = '/search?utf8=%E2%9C%93&query=';
        verify = '&commit=Search';
        entity = foxtrot[oscar](romeo, yankee, offset, verify, options);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['getSearchURL'] = options;
    options = function() { // Original name: getFeaturedArticlesJsonURL
        zulu = _closure1_slot7;
        mike = undefined;
        entity = '/api/v2/help_center/en-us/articles.json?label_names=featured';
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    tango['getFeaturedArticlesJsonURL'] = options;
    report = function(argFoo) { // Original name: getAppsSupportURL
        tango = _closure1_slot7;
        entity = _closure1_slot8;
        zulu = undefined;
        golf = entity.bind(zulu)();
        entity = global;
        entity = entity.HermesInternal;
        oscar = entity.concat;
        report = '/hc/';
        mike = '/articles/';
        entity = argFoo;
        mike = oscar.bind(report)(golf, mike, entity);
        entity = 'https://support-apps.discord.com';
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    tango['getAppsSupportURL'] = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/HelpdeskUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['SUPPORT_LOCATION'] = mike;
    return entity;
})();