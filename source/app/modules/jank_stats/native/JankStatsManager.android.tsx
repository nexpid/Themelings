// app/modules/jank_stats/native/JankStatsManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AppStates;
    var _closure1_slot8 = options;
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: JankStatsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            mike = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot10;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = null;
            entity['_timeoutId'] = mike;
            mike = false;
            entity['_isScheduledReportSent'] = mike;
            mike = true;
            entity['_isStartup'] = mike;
            mike = {};
            tango = function(argFoo) { // Original name: APP_STATE_UPDATE
                zulu = _closure3_slot0;
                mike = zulu.handleAppStateUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike['APP_STATE_UPDATE'] = tango;
            zulu = function() { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpenSupplemental;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            mike['CONNECTION_OPEN_SUPPLEMENTAL'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'handleAppStateUpdate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = this;
                entity = argFoo;
                mike = entity.state;
                tango = _closure1_slot8;
                tango = tango.ACTIVE;
                if(!(mike === tango)) { _fun00006_ip = 49; continue _fun00005 }
 28:
                tango = zulu._isStartup;
                if(tango) { _fun00006_ip = 49; continue _fun00005 }
 37:
                tango = zulu.scheduleReport;
                tango = tango.bind(zulu)();
                _fun00006_ip = 119; continue _fun00005;
 49:
                entity = _closure1_slot8;
                entity = entity.BACKGROUND;
                entity = mike !== entity;
                if(entity) { _fun00006_ip = 72; continue _fun00005 }
 66:
                entity = zulu._isScheduledReportSent;
 72:
                if(entity) { _fun00006_ip = 119; continue _fun00005 }
 75:
                entity = global;
                tango = entity.clearTimeout;
                mike = zulu._timeoutId;
                entity = undefined;
                entity = tango.bind(entity)(mike);
                entity = null;
                zulu['_timeoutId'] = entity;
                mike = zulu.sendReport;
                entity = 'background';
                entity = mike.bind(zulu)(entity);
 119:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'handleConnectionOpenSupplemental';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = global;
            tango = entity.setTimeout;
            entity = undefined;
            zulu = function() {
                mike = _closure3_slot0;
                zulu = mike.sendReport;
                entity = 'startup';
                entity = zulu.bind(mike)(entity);
                entity = false;
                mike['_isStartup'] = entity;
                entity = mike.scheduleReport;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            mike = 0;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'scheduleReport';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                tango = mike._timeoutId;
                zulu = null;
                if(!(zulu == tango)) { _fun00008_ip = 64; continue _fun00007 }
 21:
                zulu = false;
                mike['_isScheduledReportSent'] = zulu;
                zulu = global;
                report = zulu.setTimeout;
                tango = undefined;
                zulu = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        mike = _closure3_slot0;
                        report = null;
                        mike['_timeoutId'] = report;
                        zulu = mike.sendReport;
                        entity = 'timer';
                        entity = zulu.bind(mike)(entity);
                        entity = true;
                        mike['_isScheduledReportSent'] = entity;
                        oscar = _closure1_slot1;
                        entity = _closure1_slot2;
                        tango = 6;
                        zulu = entity[tango];
                        entity = undefined;
                        zulu = oscar.bind(entity)(zulu);
                        if(!(report != zulu)) { _fun00010_ip = 94; continue _fun00009 }
 67:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        mike = mike[tango];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.stopTracking;
                        mike = mike.bind(zulu)();
 94:
                        return entity;
                    }
                };
                entity = 300000;
                entity = report.bind(tango)(zulu, entity);
                mike['_timeoutId'] = entity;
 64:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'sendReport';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                report = 6;
                mike = entity[report];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = null;
                zulu = mike == zulu;
                oscar = undefined;
                if(zulu) { _fun00012_ip = 63; continue _fun00011 }
 36:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                zulu = zulu[report];
                tango = tango.bind(entity)(zulu);
                zulu = tango.requestReport;
                oscar = zulu.bind(tango)();
 63:
                mike = mike != oscar;
                if(!mike) { _fun00012_ip = 82; continue _fun00011 }
 70:
                tango = oscar.totalFrameCount;
                zulu = 0;
                mike = zulu !== tango;
 82:
                if(!mike) { _fun00012_ip = 224; continue _fun00011 }
 88:
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                mike = 7;
                mike = verify[mike];
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot9;
                zulu = mike.ANDROID_JANK_STATS;
                mike = {};
                options = _closure1_slot0;
                golf = 8;
                golf = verify[golf];
                options = options.bind(entity)(golf);
                golf = options.getDeviceMetadata;
                offset = golf.bind(options)();
                yankee = mike;
                golf = copyDataProperties(yankee, offset);
                options = 1;
                golf = 'version';
                mike[golf] = options;
                options = oscar.totalFrameCount;
                golf = 'total_frame_count';
                mike[golf] = options;
                golf = oscar.jankFrameCount;
                oscar = 'jank_frame_count';
                mike[oscar] = golf;
                golf = argFoo;
                oscar = 'trigger';
                mike[oscar] = golf;
                mike = tango.bind(report)(zulu, mike);
 224:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/jank_stats/native/JankStatsManager.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();