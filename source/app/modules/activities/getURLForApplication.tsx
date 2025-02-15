// app/modules/activities/getURLForApplication.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    mike = function(argFoo) { // Original name: getNonTestModeUrlForApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = global;
            entity = mike.window;
            entity = entity.GLOBAL_ENV;
            oscar = entity.ACTIVITY_APPLICATION_HOST;
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun00002_ip = 60; continue _fun00001 }
 29:
            mike = mike.HermesInternal;
            report = mike.concat;
            tango = 'https://';
            zulu = argFoo;
            mike = '.';
            entity = report.bind(tango)(zulu, mike, oscar);
 60:
            return entity;
        }
    };
    var _closure1_slot2 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = oscar[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscar[report];
    report = golf.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/getURLForApplication.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: getURLForApplication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot1;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = mike.useActivityUrlOverride;
            if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 29:
            tango = mike.activityUrlOverride;
            entity = null;
            if(!(entity != tango)) { _fun00004_ip = 55; continue _fun00003 }
 41:
            tango = mike.activityUrlOverride;
            entity = '';
            if(!(entity === tango)) { _fun00004_ip = 102; continue _fun00003 }
 55:
            tango = _closure1_slot0;
            entity = tango.inTestModeForEmbeddedApplication;
            entity = entity.bind(tango)(report);
            if(entity) { _fun00004_ip = 88; continue _fun00003 }
 75:
            tango = _closure1_slot2;
            entity = undefined;
            entity = tango.bind(entity)(report);
            _fun00004_ip = 100; continue _fun00003;
 88:
            zulu = _closure1_slot0;
            entity = zulu.testModeOriginURL;
 100:
            _fun00004_ip = 108; continue _fun00003;
 102:
            entity = mike.activityUrlOverride;
 108:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['getNonTestModeUrlForApplication'] = mike;
    return entity;
})();