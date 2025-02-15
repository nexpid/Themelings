// app/utils/SentryUtils.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: updateNativeReporter
        _fun35976: for(var _fun35976_ip = 0; ; ) switch(_fun35976_ip) {
 0:
            tango = arguments[0];
            entity = undefined;
            if(!(tango === entity)) { _fun35976_ip = 21; continue _fun35976 }
 9:
            mike = {};
            zulu = false;
            mike['staff'] = zulu;
            tango = mike;
 21:
            mike = _closure1_slot4;
            zulu = mike.CrashReportingManager;
            mike = zulu.setUser;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.NativeModules;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    options = golf.bind(entity)(mike);
    mike = options.prototype;
    golf = Object.create(mike, {constructor: {value: options}});
    romeo = 'Sentry';
    foxtrot = golf;
    mike = new foxtrot[options](romeo, yankee);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    golf = report.bind(entity)(mike);
    mike = golf.initSentry;
    mike = mike.bind(golf)();
    mike = {};
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: setUser
        zulu = {};
        entity = argFoo;
        zulu['id'] = entity;
        entity = argBar;
        zulu['username'] = entity;
        entity = argBaz;
        zulu['email'] = entity;
        entity = argCorge;
        zulu['staff'] = entity;
        report = _closure1_slot2;
        tango = _closure1_slot3;
        entity = 3;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = report.getCurrentScope;
        report = tango.bind(report)();
        tango = report.setUser;
        tango = tango.bind(report)(zulu);
        mike = _closure1_slot6;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['setUser'] = golf;
    golf = function() { // Original name: clearUser
        tango = _closure1_slot2;
        zulu = _closure1_slot3;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.getCurrentScope;
        report = zulu.bind(tango)();
        tango = report.setUser;
        zulu = null;
        zulu = tango.bind(report)(zulu);
        mike = _closure1_slot6;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['clearUser'] = golf;
    golf = function(argFoo) { // Original name: setTags
        zulu = _closure1_slot2;
        mike = _closure1_slot3;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getCurrentScope;
        tango = mike.bind(zulu)();
        zulu = tango.setTags;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setTags'] = golf;
    golf = function(argFoo) { // Original name: setExtra
        zulu = _closure1_slot2;
        mike = _closure1_slot3;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getCurrentScope;
        tango = mike.bind(zulu)();
        zulu = tango.setExtras;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setExtra'] = golf;
    golf = function(argFoo, argBar) { // Original name: captureException
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscar = _closure1_slot0;
        report = _closure1_slot3;
        entity = 4;
        tango = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(tango);
        oscar = golf.getUpdatedOptions;
        tango = argBar;
        tango = oscar.bind(golf)(tango);
        var _closure2_slot1 = tango;
        tango = _closure1_slot2;
        zulu = 3;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.withScope;
        mike = function(argFoo) {
            _fun35982: for(var _fun35982_ip = 0; ; ) switch(_fun35982_ip) {
 0:
                tango = argFoo;
                entity = _closure2_slot1;
                zulu = null;
                if(!(zulu != entity)) { _fun35982_ip = 86; continue _fun35982 }
 16:
                entity = _closure2_slot1;
                entity = entity.tags;
                if(!(zulu != entity)) { _fun35982_ip = 51; continue _fun35982 }
 30:
                report = tango.setTags;
                entity = _closure2_slot1;
                entity = entity.tags;
                entity = report.bind(tango)(entity);
 51:
                entity = _closure2_slot1;
                entity = entity.extra;
                if(!(zulu != entity)) { _fun35982_ip = 86; continue _fun35982 }
 65:
                zulu = tango.setExtras;
                entity = _closure2_slot1;
                entity = entity.extra;
                entity = zulu.bind(tango)(entity);
 86:
                tango = _closure1_slot2;
                zulu = _closure1_slot3;
                entity = 3;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.captureException;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['captureException'] = golf;
    golf = function(argFoo, argBar) { // Original name: captureCrash
        _fun35983: for(var _fun35983_ip = 0; ; ) switch(_fun35983_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 4;
            zulu = tango[zulu];
            tango = undefined;
            oscar = report.bind(tango)(zulu);
            report = oscar.getUpdatedOptions;
            zulu = argBar;
            report = report.bind(oscar)(zulu);
            var _closure2_slot2 = report;
            golf = {};
            zulu = null;
            options = zulu == report;
            oscar = undefined;
            if(options) { _fun35983_ip = 71; continue _fun35983 }
 65:
            oscar = report.tags;
 71:
            if(!(zulu != oscar)) { _fun35983_ip = 93; continue _fun35983 }
 75:
            oscar = zulu == report;
            zulu = undefined;
            if(oscar) { _fun35983_ip = 90; continue _fun35983 }
 84:
            zulu = report.tags;
 90:
            golf = zulu;
 93:
            zulu = global;
            oscar = zulu.Object;
            report = oscar.assign;
            zulu = {};
            options = 'true';
            zulu['crash'] = options;
            zulu = report.bind(oscar)(zulu, golf);
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot2;
            report = _closure1_slot3;
            mike = 3;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.withScope;
            mike = function(argFoo) {
                _fun35984: for(var _fun35984_ip = 0; ; ) switch(_fun35984_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot2;
                    report = null;
                    entity = report != entity;
                    if(!entity) { _fun35984_ip = 33; continue _fun35984 }
 19:
                    mike = _closure2_slot2;
                    mike = mike.extra;
                    entity = report != mike;
 33:
                    if(!entity) { _fun35984_ip = 57; continue _fun35984 }
 36:
                    mike = tango.setExtras;
                    entity = _closure2_slot2;
                    entity = entity.extra;
                    entity = mike.bind(tango)(entity);
 57:
                    mike = tango.setTags;
                    entity = _closure2_slot3;
                    entity = mike.bind(tango)(entity);
                    mike = tango.setLevel;
                    entity = 'fatal';
                    entity = mike.bind(tango)(entity);
                    mike = tango.addEventProcessor;
                    entity = function(argFoo) {
                        _fun35985: for(var _fun35985_ip = 0; ; ) switch(_fun35985_ip) {
 0:
                            entity = argFoo;
                            tango = entity.exception;
                            mike = null;
                            report = mike == tango;
                            zulu = undefined;
                            if(report) { _fun35985_ip = 40; continue _fun35985 }
 20:
                            report = tango.values;
                            tango = mike == report;
                            zulu = undefined;
                            if(tango) { _fun35985_ip = 40; continue _fun35985 }
 34:
                            tango = 0;
                            zulu = report[tango];
 40:
                            if(!(mike != zulu)) { _fun35985_ip = 76; continue _fun35985 }
 44:
                            mike = {};
                            golf = zulu.mechanism;
                            options = mike;
                            tango = copyDataProperties(options, golf);
                            report = false;
                            tango = 'handled';
                            mike[tango] = report;
                            zulu['mechanism'] = mike;
 76:
                            return entity;
                        }
                    };
                    entity = mike.bind(tango)(entity);
                    tango = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    report = tango.bind(entity)(mike);
                    tango = report.captureException;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike);
                    var _closure2_slot1 = mike;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity = _closure2_slot1;
            return entity;
        }
    };
    mike['captureCrash'] = golf;
    golf = function(argFoo, argBar) { // Original name: captureMessage
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscar = _closure1_slot0;
        report = _closure1_slot3;
        entity = 4;
        tango = report[entity];
        entity = undefined;
        golf = oscar.bind(entity)(tango);
        oscar = golf.getUpdatedOptions;
        tango = argBar;
        tango = oscar.bind(golf)(tango);
        var _closure2_slot1 = tango;
        tango = _closure1_slot2;
        zulu = 3;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.withScope;
        mike = function(argFoo) {
            _fun35987: for(var _fun35987_ip = 0; ; ) switch(_fun35987_ip) {
 0:
                tango = argFoo;
                entity = _closure2_slot1;
                report = null;
                entity = report != entity;
                if(!entity) { _fun35987_ip = 33; continue _fun35987 }
 19:
                zulu = _closure2_slot1;
                zulu = zulu.extra;
                entity = report != zulu;
 33:
                if(!entity) { _fun35987_ip = 57; continue _fun35987 }
 36:
                zulu = tango.setExtras;
                entity = _closure2_slot1;
                entity = entity.extra;
                entity = zulu.bind(tango)(entity);
 57:
                entity = _closure2_slot1;
                entity = report != entity;
                if(!entity) { _fun35987_ip = 82; continue _fun35987 }
 68:
                zulu = _closure2_slot1;
                zulu = zulu.tags;
                entity = report != zulu;
 82:
                if(!entity) { _fun35987_ip = 106; continue _fun35987 }
 85:
                zulu = tango.setTags;
                entity = _closure2_slot1;
                entity = entity.tags;
                entity = zulu.bind(tango)(entity);
 106:
                tango = _closure1_slot2;
                zulu = _closure1_slot3;
                entity = 3;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.captureMessage;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['captureMessage'] = golf;
    golf = function(argFoo) { // Original name: addBreadcrumb
        zulu = argFoo;
        report = _closure1_slot5;
        tango = report.verbose;
        mike = 'Breadcrumb';
        mike = tango.bind(report)(mike, zulu);
        tango = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['addBreadcrumb'] = golf;
    golf = function(argFoo) { // Original name: profiledRootComponent
        _fun35989: for(var _fun35989_ip = 0; ; ) switch(_fun35989_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot2;
            zulu = _closure1_slot3;
            mike = 6;
            mike = zulu[mike];
            zulu = undefined;
            report = report.bind(zulu)(mike);
            mike = report.getConstants;
            mike = mike.bind(report)();
            report = mike.ReleaseChannel;
            mike = 'canaryRelease';
            if(!(mike !== report)) { _fun35989_ip = 56; continue _fun35989 }
 54:
            return tango;
 56:
            options = _closure1_slot2;
            mike = _closure1_slot3;
            report = 3;
            oscar = mike[report];
            golf = options.bind(zulu)(oscar);
            oscar = golf.getCurrentHub;
            golf = oscar.bind(golf)();
            oscar = golf.getIntegration;
            mike = mike[report];
            mike = options.bind(zulu)(mike);
            mike = mike.ReactNativeTracing;
            oscar = oscar.bind(golf)(mike);
            mike = null;
            if(!(mike != oscar)) { _fun35989_ip = 126; continue _fun35989 }
 118:
            mike = true;
            oscar['useAppStartWithProfiler'] = mike;
 126:
            mike = _closure1_slot2;
            entity = _closure1_slot3;
            entity = entity[report];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.withProfiler;
            entity = {'includeRender': true, 'includeUpdates': true};
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    mike['profiledRootComponent'] = golf;
    tango = function() { // Original name: crash
        entity = _closure1_slot4;
        mike = entity.CrashReportingManager;
        entity = mike.crash;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['crash'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/SentryUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();