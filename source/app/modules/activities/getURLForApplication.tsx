// app/modules/activities/getURLForApplication.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    michal = function(argFoo) { // Original name: getNonTestModeUrlForApplication
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
    var _closure1_slot2 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = oscard[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/getURLForApplication.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: getURLForApplication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot1;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = michal.useActivityUrlOverride;
            if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 29:
            tangon = michal.activityUrlOverride;
            entity = null;
            if(!(entity != tangon)) { _fun00004_ip = 55; continue _fun00003 }
 41:
            tangon = michal.activityUrlOverride;
            entity = '';
            if(!(entity === tangon)) { _fun00004_ip = 102; continue _fun00003 }
 55:
            tangon = _closure1_slot0;
            entity = tangon.inTestModeForEmbeddedApplication;
            entity = entity.bind(tangon)(report);
            if(entity) { _fun00004_ip = 88; continue _fun00003 }
 75:
            tangon = _closure1_slot2;
            entity = undefined;
            entity = tangon.bind(entity)(report);
            _fun00004_ip = 100; continue _fun00003;
 88:
            zuuluu = _closure1_slot0;
            entity = zuuluu.testModeOriginURL;
 100:
            _fun00004_ip = 108; continue _fun00003;
 102:
            entity = michal.activityUrlOverride;
 108:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['getNonTestModeUrlForApplication'] = michal;
    return entity;
})();