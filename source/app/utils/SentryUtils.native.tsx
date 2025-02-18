// app/utils/SentryUtils.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: updateNativeReporter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[0];
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 21; continue _fun00001 }
 9:
            michal = {};
            zuuluu = false;
            michal['staff'] = zuuluu;
            tangon = michal;
 21:
            michal = _closure1_slot4;
            zuuluu = michal.CrashReportingManager;
            michal = zuuluu.setUser;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.NativeModules;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    option = golfie.bind(entity)(michal);
    michal = option.prototype;
    golfie = Object.create(michal, {constructor: {value: option}});
    romeon = 'Sentry';
    foxtra = golfie;
    michal = new foxtra[option](romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    golfie = report.bind(entity)(michal);
    michal = golfie.initSentry;
    michal = michal.bind(golfie)();
    michal = {};
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: setUser
        zuuluu = {};
        entity = argFoo;
        zuuluu['id'] = entity;
        entity = argBar;
        zuuluu['username'] = entity;
        entity = argBaz;
        zuuluu['email'] = entity;
        entity = argCor;
        zuuluu['staff'] = entity;
        report = _closure1_slot2;
        tangon = _closure1_slot3;
        entity = 3;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = report.getCurrentScope;
        report = tangon.bind(report)();
        tangon = report.setUser;
        tangon = tangon.bind(report)(zuuluu);
        michal = _closure1_slot6;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['setUser'] = golfie;
    golfie = function() { // Original name: clearUser
        tangon = _closure1_slot2;
        zuuluu = _closure1_slot3;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.getCurrentScope;
        report = zuuluu.bind(tangon)();
        tangon = report.setUser;
        zuuluu = null;
        zuuluu = tangon.bind(report)(zuuluu);
        michal = _closure1_slot6;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['clearUser'] = golfie;
    golfie = function(argFoo) { // Original name: setTags
        zuuluu = _closure1_slot2;
        michal = _closure1_slot3;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getCurrentScope;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.setTags;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setTags'] = golfie;
    golfie = function(argFoo) { // Original name: setExtra
        zuuluu = _closure1_slot2;
        michal = _closure1_slot3;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getCurrentScope;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.setExtras;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setExtra'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: captureException
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscard = _closure1_slot0;
        report = _closure1_slot3;
        entity = 4;
        tangon = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(tangon);
        oscard = golfie.getUpdatedOptions;
        tangon = argBar;
        tangon = oscard.bind(golfie)(tangon);
        var _closure2_slot1 = tangon;
        tangon = _closure1_slot2;
        zuuluu = 3;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.withScope;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00004_ip = 86; continue _fun00003 }
 16:
                entity = _closure2_slot1;
                entity = entity.tags;
                if(!(zuuluu != entity)) { _fun00004_ip = 51; continue _fun00003 }
 30:
                report = tangon.setTags;
                entity = _closure2_slot1;
                entity = entity.tags;
                entity = report.bind(tangon)(entity);
 51:
                entity = _closure2_slot1;
                entity = entity.extra;
                if(!(zuuluu != entity)) { _fun00004_ip = 86; continue _fun00003 }
 65:
                zuuluu = tangon.setExtras;
                entity = _closure2_slot1;
                entity = entity.extra;
                entity = zuuluu.bind(tangon)(entity);
 86:
                tangon = _closure1_slot2;
                zuuluu = _closure1_slot3;
                entity = 3;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.captureException;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['captureException'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: captureCrash
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 4;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.getUpdatedOptions;
            zuuluu = argBar;
            report = report.bind(oscard)(zuuluu);
            var _closure2_slot2 = report;
            golfie = {};
            zuuluu = null;
            option = zuuluu == report;
            oscard = undefined;
            if(option) { _fun00006_ip = 71; continue _fun00005 }
 65:
            oscard = report.tags;
 71:
            if(!(zuuluu != oscard)) { _fun00006_ip = 93; continue _fun00005 }
 75:
            oscard = zuuluu == report;
            zuuluu = undefined;
            if(oscard) { _fun00006_ip = 90; continue _fun00005 }
 84:
            zuuluu = report.tags;
 90:
            golfie = zuuluu;
 93:
            zuuluu = global;
            oscard = zuuluu.Object;
            report = oscard.assign;
            zuuluu = {};
            option = 'true';
            zuuluu['crash'] = option;
            zuuluu = report.bind(oscard)(zuuluu, golfie);
            var _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot2;
            report = _closure1_slot3;
            michal = 3;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.withScope;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot2;
                    report = null;
                    entity = report != entity;
                    if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 19:
                    michal = _closure2_slot2;
                    michal = michal.extra;
                    entity = report != michal;
 33:
                    if(!entity) { _fun00008_ip = 57; continue _fun00007 }
 36:
                    michal = tangon.setExtras;
                    entity = _closure2_slot2;
                    entity = entity.extra;
                    entity = michal.bind(tangon)(entity);
 57:
                    michal = tangon.setTags;
                    entity = _closure2_slot3;
                    entity = michal.bind(tangon)(entity);
                    michal = tangon.setLevel;
                    entity = 'fatal';
                    entity = michal.bind(tangon)(entity);
                    michal = tangon.addEventProcessor;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            tangon = entity.exception;
                            michal = null;
                            report = michal == tangon;
                            zuuluu = undefined;
                            if(report) { _fun00010_ip = 40; continue _fun00009 }
 20:
                            report = tangon.values;
                            tangon = michal == report;
                            zuuluu = undefined;
                            if(tangon) { _fun00010_ip = 40; continue _fun00009 }
 34:
                            tangon = 0;
                            zuuluu = report[tangon];
 40:
                            if(!(michal != zuuluu)) { _fun00010_ip = 76; continue _fun00009 }
 44:
                            michal = {};
                            golfie = zuuluu.mechanism;
                            option = michal;
                            tangon = copyDataProperties(option, golfie);
                            report = false;
                            tangon = 'handled';
                            michal[tangon] = report;
                            zuuluu['mechanism'] = michal;
 76:
                            return entity;
                        }
                    };
                    entity = michal.bind(tangon)(entity);
                    tangon = _closure1_slot2;
                    michal = _closure1_slot3;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(michal);
                    tangon = report.captureException;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal);
                    var _closure2_slot1 = michal;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure2_slot1;
            return entity;
        }
    };
    michal['captureCrash'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: captureMessage
        entity = argFoo;
        var _closure2_slot0 = entity;
        oscard = _closure1_slot0;
        report = _closure1_slot3;
        entity = 4;
        tangon = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(tangon);
        oscard = golfie.getUpdatedOptions;
        tangon = argBar;
        tangon = oscard.bind(golfie)(tangon);
        var _closure2_slot1 = tangon;
        tangon = _closure1_slot2;
        zuuluu = 3;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.withScope;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot1;
                report = null;
                entity = report != entity;
                if(!entity) { _fun00012_ip = 33; continue _fun00011 }
 19:
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.extra;
                entity = report != zuuluu;
 33:
                if(!entity) { _fun00012_ip = 57; continue _fun00011 }
 36:
                zuuluu = tangon.setExtras;
                entity = _closure2_slot1;
                entity = entity.extra;
                entity = zuuluu.bind(tangon)(entity);
 57:
                entity = _closure2_slot1;
                entity = report != entity;
                if(!entity) { _fun00012_ip = 82; continue _fun00011 }
 68:
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.tags;
                entity = report != zuuluu;
 82:
                if(!entity) { _fun00012_ip = 106; continue _fun00011 }
 85:
                zuuluu = tangon.setTags;
                entity = _closure2_slot1;
                entity = entity.tags;
                entity = zuuluu.bind(tangon)(entity);
 106:
                tangon = _closure1_slot2;
                zuuluu = _closure1_slot3;
                entity = 3;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.captureMessage;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['captureMessage'] = golfie;
    golfie = function(argFoo) { // Original name: addBreadcrumb
        zuuluu = argFoo;
        report = _closure1_slot5;
        tangon = report.verbose;
        michal = 'Breadcrumb';
        michal = tangon.bind(report)(michal, zuuluu);
        tangon = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['addBreadcrumb'] = golfie;
    golfie = function(argFoo) { // Original name: profiledRootComponent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot2;
            zuuluu = _closure1_slot3;
            michal = 6;
            michal = zuuluu[michal];
            zuuluu = undefined;
            report = report.bind(zuuluu)(michal);
            michal = report.getConstants;
            michal = michal.bind(report)();
            report = michal.ReleaseChannel;
            michal = 'canaryRelease';
            if(!(michal !== report)) { _fun00014_ip = 56; continue _fun00013 }
 54:
            return tangon;
 56:
            option = _closure1_slot2;
            michal = _closure1_slot3;
            report = 3;
            oscard = michal[report];
            golfie = option.bind(zuuluu)(oscard);
            oscard = golfie.getCurrentHub;
            golfie = oscard.bind(golfie)();
            oscard = golfie.getIntegration;
            michal = michal[report];
            michal = option.bind(zuuluu)(michal);
            michal = michal.ReactNativeTracing;
            oscard = oscard.bind(golfie)(michal);
            michal = null;
            if(!(michal != oscard)) { _fun00014_ip = 126; continue _fun00013 }
 118:
            michal = true;
            oscard['useAppStartWithProfiler'] = michal;
 126:
            michal = _closure1_slot2;
            entity = _closure1_slot3;
            entity = entity[report];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.withProfiler;
            entity = {'includeRender': true, 'includeUpdates': true};
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    michal['profiledRootComponent'] = golfie;
    tangon = function() { // Original name: crash
        entity = _closure1_slot4;
        michal = entity.CrashReportingManager;
        entity = michal.crash;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    michal['crash'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/SentryUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();