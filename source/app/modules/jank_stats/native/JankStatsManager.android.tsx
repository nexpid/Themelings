// app/modules/jank_stats/native/JankStatsManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AppStates;
    var _closure1_slot8 = option;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: JankStatsManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                michal = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot10;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = michal.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                michal = null;
                entity['_timeoutId'] = michal;
                michal = false;
                entity['_isScheduledReportSent'] = michal;
                michal = true;
                entity['_isStartup'] = michal;
                michal = {};
                tangon = function(argFoo) { // Original name: APP_STATE_UPDATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleAppStateUpdate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal['APP_STATE_UPDATE'] = tangon;
                zuuluu = function() { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                    michal = _closure3_slot0;
                    entity = michal.handleConnectionOpenSupplemental;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                michal['CONNECTION_OPEN_SUPPLEMENTAL'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'handleAppStateUpdate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                entity = argFoo;
                michal = entity.state;
                tangon = _closure1_slot8;
                tangon = tangon.ACTIVE;
                if(!(michal === tangon)) { _fun00006_ip = 49; continue _fun00005 }
 28:
                tangon = zuuluu._isStartup;
                if(tangon) { _fun00006_ip = 49; continue _fun00005 }
 37:
                tangon = zuuluu.scheduleReport;
                tangon = tangon.bind(zuuluu)();
                _fun00006_ip = 119; continue _fun00005;
 49:
                entity = _closure1_slot8;
                entity = entity.BACKGROUND;
                entity = michal !== entity;
                if(entity) { _fun00006_ip = 72; continue _fun00005 }
 66:
                entity = zuuluu._isScheduledReportSent;
 72:
                if(entity) { _fun00006_ip = 119; continue _fun00005 }
 75:
                entity = global;
                tangon = entity.clearTimeout;
                michal = zuuluu._timeoutId;
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                entity = null;
                zuuluu['_timeoutId'] = entity;
                michal = zuuluu.sendReport;
                entity = 'background';
                entity = michal.bind(zuuluu)(entity);
 119:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'handleConnectionOpenSupplemental';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = global;
            tangon = entity.setTimeout;
            entity = undefined;
            zuuluu = function() {
                michal = _closure3_slot0;
                zuuluu = michal.sendReport;
                entity = 'startup';
                entity = zuuluu.bind(michal)(entity);
                entity = false;
                michal['_isStartup'] = entity;
                entity = michal.scheduleReport;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            michal = 0;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'scheduleReport';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                tangon = michal._timeoutId;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00008_ip = 64; continue _fun00007 }
 21:
                zuuluu = false;
                michal['_isScheduledReportSent'] = zuuluu;
                zuuluu = global;
                report = zuuluu.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure3_slot0;
                        report = null;
                        michal['_timeoutId'] = report;
                        zuuluu = michal.sendReport;
                        entity = 'timer';
                        entity = zuuluu.bind(michal)(entity);
                        entity = true;
                        michal['_isScheduledReportSent'] = entity;
                        oscard = _closure1_slot1;
                        entity = _closure1_slot2;
                        tangon = 6;
                        zuuluu = entity[tangon];
                        entity = undefined;
                        zuuluu = oscard.bind(entity)(zuuluu);
                        if(!(report != zuuluu)) { _fun00010_ip = 94; continue _fun00009 }
 67:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        michal = michal[tangon];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.stopTracking;
                        michal = michal.bind(zuuluu)();
 94:
                        return entity;
                    }
                };
                entity = 300000;
                entity = report.bind(tangon)(zuuluu, entity);
                michal['_timeoutId'] = entity;
 64:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'sendReport';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                report = 6;
                michal = entity[report];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = null;
                zuuluu = michal == zuuluu;
                oscard = undefined;
                if(zuuluu) { _fun00012_ip = 63; continue _fun00011 }
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[report];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.requestReport;
                oscard = zuuluu.bind(tangon)();
 63:
                michal = michal != oscard;
                if(!michal) { _fun00012_ip = 82; continue _fun00011 }
 70:
                tangon = oscard.totalFrameCount;
                zuuluu = 0;
                michal = zuuluu !== tangon;
 82:
                if(!michal) { _fun00012_ip = 224; continue _fun00011 }
 88:
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                michal = 7;
                michal = verify[michal];
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot9;
                zuuluu = michal.ANDROID_JANK_STATS;
                michal = {};
                option = _closure1_slot0;
                golfie = 8;
                golfie = verify[golfie];
                option = option.bind(entity)(golfie);
                golfie = option.getDeviceMetadata;
                offset = golfie.bind(option)();
                yankee = michal;
                golfie = copyDataProperties(yankee, offset);
                option = 1;
                golfie = 'version';
                michal[golfie] = option;
                option = oscard.totalFrameCount;
                golfie = 'total_frame_count';
                michal[golfie] = option;
                golfie = oscard.jankFrameCount;
                oscard = 'jank_frame_count';
                michal[oscard] = golfie;
                golfie = argFoo;
                oscard = 'trigger';
                michal[oscard] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
 224:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/jank_stats/native/JankStatsManager.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();