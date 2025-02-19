// app/modules/activities/getURLForApplication.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo) { // Original name: getNonTestModeUrlForApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = global;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            oscard = entity.ACTIVITY_APPLICATION_HOST;
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00002_ip = 60; continue _fun00001 }
 29:
            michal = michal.HermesInternal;
            report = michal.concat;
            tangon = 'https://';
            zuuluu = argFoo;
            michal = '.';
            entity = report.bind(tangon)(zuuluu, michal, oscard);
 60:
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    michal = function() { // Original name: isUsingDevShelfActivityUrlOverride
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot1;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = michal.useActivityUrlOverride;
            if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 26:
            tangon = michal.activityUrlOverride;
            zuuluu = null;
            entity = zuuluu != tangon;
 38:
            if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 41:
            zuuluu = michal.activityUrlOverride;
            michal = '';
            entity = michal !== zuuluu;
 55:
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = golfie[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    var _closure1_slot0 = oscard;
    oscard = 1;
    oscard = golfie[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot1 = oscard;
    oscard = 2;
    golfie = golfie[oscard];
    oscard = argBar;
    option = oscard.bind(entity)(golfie);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/getURLForApplication.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: getURLForApplication
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot3;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00006_ip = 64; continue _fun00005 }
 19:
            report = _closure1_slot0;
            entity = report.inTestModeForEmbeddedApplication;
            entity = entity.bind(report)(tangon);
            if(entity) { _fun00006_ip = 50; continue _fun00005 }
 39:
            entity = _closure1_slot2;
            entity = entity.bind(zuuluu)(tangon);
            _fun00006_ip = 62; continue _fun00005;
 50:
            zuuluu = _closure1_slot0;
            entity = zuuluu.testModeOriginURL;
 62:
            _fun00006_ip = 84; continue _fun00005;
 64:
            zuuluu = _closure1_slot1;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            entity = michal.activityUrlOverride;
 84:
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['getNonTestModeUrlForApplication'] = tangon;
    zuuluu['isUsingDevShelfActivityUrlOverride'] = michal;
    return entity;
})();