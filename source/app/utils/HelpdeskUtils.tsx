// app/utils/HelpdeskUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: wrapURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 16; continue _fun00001 }
 9:
            michal = _closure1_slot5;
 16:
            entity = argFoo;
            entity = michal + entity;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: getLocale
        entity = _closure1_slot3;
        michal = entity.locale;
        entity = michal.toLowerCase;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot8 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.LocalizedLinks;
    var _closure1_slot4 = option;
    offset = michal.SUPPORT_DOMAIN;
    verify = michal.SUPPORT_DEV_DOMAIN;
    michal = tangon.HermesInternal;
    michal = michal.concat;
    option = 'https://';
    michal = michal.bind(option)(offset);
    var _closure1_slot5 = michal;
    tangon = tangon.HermesInternal;
    tangon = tangon.concat;
    tangon = tangon.bind(option)(verify);
    var _closure1_slot6 = tangon;
    tangon = {};
    option = function(argFoo) { // Original name: getArticleURL
        zuuluu = _closure1_slot7;
        entity = _closure1_slot8;
        michal = undefined;
        golfie = entity.bind(michal)();
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        report = '/hc/';
        tangon = '/articles/';
        entity = argFoo;
        entity = oscard.bind(report)(golfie, tangon, entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    tangon['getArticleURL'] = option;
    option = function(argFoo) { // Original name: getDevArticleURL
        tangon = _closure1_slot7;
        michal = _closure1_slot8;
        zuuluu = undefined;
        option = michal.bind(zuuluu)();
        michal = global;
        michal = michal.HermesInternal;
        golfie = michal.concat;
        oscard = '/hc/';
        report = '/articles/';
        michal = argFoo;
        michal = golfie.bind(oscard)(option, report, michal);
        entity = _closure1_slot6;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    tangon['getDevArticleURL'] = option;
    option = function(argFoo) { // Original name: getCreatorSupportArticleURL
        tangon = _closure1_slot7;
        entity = _closure1_slot8;
        zuuluu = undefined;
        golfie = entity.bind(zuuluu)();
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        report = '/hc/';
        michal = '/articles/';
        entity = argFoo;
        michal = oscard.bind(report)(golfie, michal, entity);
        entity = 'https://creator-support.discord.com';
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    tangon['getCreatorSupportArticleURL'] = option;
    option = function() { // Original name: getTwitterURL
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 2;
        michal = zuuluu[michal];
        zuuluu = undefined;
        michal = tangon.bind(zuuluu)(michal);
        entity = _closure1_slot4;
        entity = entity.TWITTER;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['getTwitterURL'] = option;
    option = function() { // Original name: getCommunityURL
        zuuluu = _closure1_slot7;
        entity = _closure1_slot8;
        michal = undefined;
        report = entity.bind(michal)();
        entity = global;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        entity = '/hc/';
        entity = tangon.bind(entity)(report);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    tangon['getCommunityURL'] = option;
    option = function(argFoo) { // Original name: getSubmitRequestURL
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot7;
            michal = _closure1_slot8;
            report = undefined;
            verify = michal.bind(report)();
            michal = global;
            tangon = michal.encodeURIComponent;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 3;
            entity = option[entity];
            golfie = golfie.bind(report)(entity);
            entity = golfie.getPlatformName;
            entity = entity.bind(golfie)();
            option = tangon.bind(report)(entity);
            entity = michal.HermesInternal;
            golfie = entity.concat;
            tangon = '/hc/';
            entity = '/requests/new?platform=';
            entity = golfie.bind(tangon)(verify, entity, option);
            zuuluu = zuuluu.bind(report)(entity);
            tangon = null;
            entity = zuuluu;
            if(!(tangon != oscard)) { _fun00004_ip = 144; continue _fun00003 }
 107:
            tangon = michal.encodeURIComponent;
            report = tangon.bind(report)(oscard);
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = '&device_info=';
            michal = tangon.bind(michal)(report);
            entity = zuuluu + michal;
 144:
            return entity;
        }
    };
    tangon['getSubmitRequestURL'] = option;
    option = function(argFoo) { // Original name: getSearchURL
        entity = global;
        tangon = entity.encodeURIComponent;
        zuuluu = undefined;
        michal = argFoo;
        offset = tangon.bind(zuuluu)(michal);
        michal = _closure1_slot7;
        tangon = _closure1_slot8;
        romeon = tangon.bind(zuuluu)();
        entity = entity.HermesInternal;
        oscard = entity.concat;
        foxtra = '/hc/';
        yankee = '/search?utf8=%E2%9C%93&query=';
        verify = '&commit=Search';
        entity = foxtra[oscard](romeon, yankee, offset, verify, option);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['getSearchURL'] = option;
    option = function() { // Original name: getFeaturedArticlesJsonURL
        zuuluu = _closure1_slot7;
        michal = undefined;
        entity = '/api/v2/help_center/en-us/articles.json?label_names=featured';
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    tangon['getFeaturedArticlesJsonURL'] = option;
    report = function(argFoo) { // Original name: getAppsSupportURL
        tangon = _closure1_slot7;
        entity = _closure1_slot8;
        zuuluu = undefined;
        golfie = entity.bind(zuuluu)();
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        report = '/hc/';
        michal = '/articles/';
        entity = argFoo;
        michal = oscard.bind(report)(golfie, michal, entity);
        entity = 'https://support-apps.discord.com';
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    tangon['getAppsSupportURL'] = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/HelpdeskUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['SUPPORT_LOCATION'] = michal;
    return entity;
})();