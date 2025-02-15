// app/modules/mobile_native_updater/MobileNativeUpdateStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun99040: for(var _fun99040_ip = 0; ; ) switch(_fun99040_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun99040_ip = 51; continue _fun99040 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun99040_ip = 92; continue _fun99040;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun99040_ip = 71; continue _fun99040 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun99041: for(var _fun99041_ip = 0; ; ) switch(_fun99041_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun99041_ip = 76; continue _fun99041;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UPDATE_CONFIG;
    var _closure1_slot8 = options;
    mike = mike.UPDATE_CHECK_INTERVAL;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.Logger;
    mike = options.prototype;
    verify = Object.create(mike, {constructor: {value: options}});
    mike = 'MobileNativeUpdateStore';
    foxtrot = verify;
    romeo = mike;
    options = new foxtrot[options](romeo, yankee);
    options = options instanceof Object ? options : verify;
    var _closure1_slot10 = options;
    options = null;
    verify = {'lastCheck': null, 'checking': false, 'newBuild': null};
    var _closure1_slot11 = verify;
    var _closure1_slot12 = options;
    options = 9;
    options = oscar[options];
    options = golf.bind(entity)(options);
    verify = options.Store;
    options = function(argFoo) {
        tango = function(argFoo) { // Original name: MobileNativeUpdateStore
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            zulu = _closure1_slot8;
            mike = null;
            mike = mike !== zulu;
            entity['hasUpdatesConfigured'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'checkForNewerBuild';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun99046: for(var _fun99046_ip = 0; ; ) switch(_fun99046_ip) {
 0:
                zulu = _closure1_slot11;
                tango = zulu.checking;
                zulu = true;
                if(!(zulu !== tango)) { _fun99046_ip = 116; continue _fun99046 }
 21:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 7;
                zulu = report[zulu];
                tango = undefined;
                golf = oscar.bind(tango)(zulu);
                oscar = golf.dispatch;
                zulu = {};
                options = 'MOBILE_NATIVE_UPDATE_CHECK_STARTED';
                zulu['type'] = options;
                zulu = oscar.bind(golf)(zulu);
                zulu = _closure1_slot0;
                mike = 8;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.checkForNewerBuild;
                tango = mike.bind(zulu)();
                zulu = tango.then;
                mike = function(argFoo) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'MOBILE_NATIVE_UPDATE_CHECK_FINISHED';
                    mike['type'] = report;
                    report = argFoo;
                    mike['newBuild'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'MOBILE_NATIVE_UPDATE_CHECK_FAILED';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'ensureInitialized';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun99049: for(var _fun99049_ip = 0; ; ) switch(_fun99049_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                mike = mike.hasUpdatesConfigured;
                if(!mike) { _fun99049_ip = 90; continue _fun99049 }
 18:
                zulu = _closure1_slot12;
                mike = null;
                if(!(mike === zulu)) { _fun99049_ip = 90; continue _fun99049 }
 31:
                tango = function() { // Original name: backgroundUpdateCheck
                    zulu = _closure1_slot10;
                    mike = zulu.info;
                    entity = 'Checking for new native builds in the background';
                    entity = mike.bind(zulu)(entity);
                    mike = _closure3_slot0;
                    entity = mike.checkForNewerBuild;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity = global;
                oscar = entity.setInterval;
                zulu = _closure1_slot9;
                mike = zulu.asMilliseconds;
                mike = mike.bind(zulu)();
                zulu = undefined;
                mike = oscar.bind(zulu)(tango, mike);
                _closure1_slot12 = mike;
                mike = entity.setTimeout;
                entity = 1000;
                entity = mike.bind(zulu)(tango, entity);
 90:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'latestFetchedBuild';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.ensureInitialized;
            entity = entity.bind(mike)();
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = options.bind(entity)(verify);
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleCheckStarted
        mike = {};
        report = _closure1_slot11;
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        tango = true;
        zulu = 'checking';
        mike[zulu] = tango;
        _closure1_slot11 = mike;
        entity = undefined;
        return entity;
    };
    mike['MOBILE_NATIVE_UPDATE_CHECK_STARTED'] = verify;
    verify = function() { // Original name: handleCheckFailed
        mike = {};
        report = _closure1_slot11;
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        tango = false;
        zulu = 'checking';
        mike[zulu] = tango;
        _closure1_slot11 = mike;
        entity = undefined;
        return entity;
    };
    mike['MOBILE_NATIVE_UPDATE_CHECK_FAILED'] = verify;
    tango = function(argFoo) { // Original name: handleCheckFinished
        entity = argFoo;
        entity = entity.newBuild;
        mike = {};
        zulu = global;
        zulu = zulu.Date;
        tango = zulu.prototype;
        tango = Object.create(tango, {constructor: {value: zulu}});
        report = tango;
        zulu = new report[zulu](tango);
        zulu = zulu instanceof Object ? zulu : tango;
        mike['lastCheck'] = zulu;
        zulu = false;
        mike['checking'] = zulu;
        mike['newBuild'] = entity;
        _closure1_slot11 = mike;
        entity = undefined;
        return entity;
    };
    mike['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/mobile_native_updater/MobileNativeUpdateStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();