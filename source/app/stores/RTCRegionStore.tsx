// app/stores/RTCRegionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun52113: for(var _fun52113_ip = 0; ; ) switch(_fun52113_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun52113_ip = 51; continue _fun52113 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun52113_ip = 92; continue _fun52113;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun52113_ip = 71; continue _fun52113 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun52114: for(var _fun52114_ip = 0; ; ) switch(_fun52114_ip) {
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
 70: // try_end0
            _fun52114_ip = 74; continue _fun52114;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    golf = 1;
    mike = report[golf];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = {'preferredRegions': null, 'lastTestTimestamp': null, 'lastGeoRankedOrder': null};
    var _closure1_slot7 = mike;
    var _closure1_slot8 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Millis;
    mike = mike.HOUR;
    mike = golf * mike;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.DeviceSettingsStore;
    mike = function(argFoo) {
        tango = function() { // Original name: RTCRegionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun52119: for(var _fun52119_ip = 0; ; ) switch(_fun52119_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun52119_ip = 16; continue _fun52119 }
 9:
                mike = _closure1_slot7;
 16:
                _closure1_slot8 = mike;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'shouldIncludePreferredRegion';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            mike = entity.preferredRegions;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getPreferredRegion';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun52121: for(var _fun52121_ip = 0; ; ) switch(_fun52121_ip) {
 0:
                entity = _closure1_slot8;
                tango = entity.preferredRegions;
                entity = null;
                zulu = entity == tango;
                mike = undefined;
                if(zulu) { _fun52121_ip = 30; continue _fun52121 }
 24:
                zulu = 0;
                mike = tango[zulu];
 30:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun52121_ip = 42; continue _fun52121 }
 39:
                entity = mike;
 42:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getPreferredRegions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            entity = entity.preferredRegions;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getRegion';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun52123: for(var _fun52123_ip = 0; ; ) switch(_fun52123_ip) {
 0:
                tango = argFoo;
                entity = null;
                if(!(entity == tango)) { _fun52123_ip = 13; continue _fun52123 }
 9:
                entity = undefined;
                return entity;
 13:
                zulu = tango.substr;
                mike = tango.search;
                entity = /\d/;
                mike = mike.bind(tango)(entity);
                entity = 0;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUserAgnosticState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'shouldPerformLatencyTest';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun52125: for(var _fun52125_ip = 0; ; ) switch(_fun52125_ip) {
 0:
                entity = _closure1_slot8;
                entity = entity.preferredRegions;
                zulu = null;
                entity = zulu === entity;
                if(entity) { _fun52125_ip = 80; continue _fun52125 }
 22:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 6;
                report = report[tango];
                tango = undefined;
                golf = oscar.bind(tango)(report);
                oscar = golf.isEqual;
                tango = _closure1_slot8;
                report = tango.lastGeoRankedOrder;
                if(!(zulu == report)) { _fun52125_ip = 68; continue _fun52125 }
 64:
                report = new Array(0);
 68:
                tango = argFoo;
                tango = oscar.bind(golf)(tango, report);
                entity = !tango;
 80:
                if(entity) { _fun52125_ip = 134; continue _fun52125 }
 83:
                tango = global;
                report = tango.Date;
                tango = report.now;
                tango = tango.bind(report)();
                report = _closure1_slot8;
                report = report.lastTestTimestamp;
                oscar = zulu != report;
                zulu = 0;
                if(!oscar) { _fun52125_ip = 122; continue _fun52125 }
 119:
                zulu = report;
 122:
                zulu = tango - zulu;
                mike = _closure1_slot9;
                entity = zulu >= mike;
 134:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'RTCRegionStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = new Array(1);
    options = function(argFoo) {
        _fun52126: for(var _fun52126_ip = 0; ; ) switch(_fun52126_ip) {
 0:
            entity = argFoo;
            mike = entity.preferredRegion;
            if(mike) { _fun52126_ip = 22; continue _fun52126 }
 12:
            mike = null;
            entity['preferredRegions'] = mike;
            _fun52126_ip = 42; continue _fun52126;
 22:
            zulu = entity.preferredRegion;
            mike = new Array(1);
            mike[0] = zulu;
            entity['preferredRegions'] = mike;
 42:
            mike = delete entity.preferredRegion;
            return entity;
        }
    };
    mike[0] = options;
    golf['migrations'] = mike;
    mike = 8;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleCompletedRTCLatencyTest
        _fun52127: for(var _fun52127_ip = 0; ; ) switch(_fun52127_ip) {
 0:
            entity = argFoo;
            mike = entity.latencyRankedRegions;
            zulu = mike.length;
            mike = 0;
            if(!(zulu > mike)) { _fun52127_ip = 55; continue _fun52127 }
 20:
            tango = _closure1_slot8;
            zulu = entity.geoRankedRegions;
            tango['lastGeoRankedOrder'] = zulu;
            mike = _closure1_slot8;
            entity = entity.latencyRankedRegions;
            mike['preferredRegions'] = entity;
 55:
            mike = _closure1_slot8;
            entity = global;
            zulu = entity.Date;
            entity = zulu.now;
            entity = entity.bind(zulu)();
            mike['lastTestTimestamp'] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['RTC_LATENCY_TEST_COMPLETE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/RTCRegionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();