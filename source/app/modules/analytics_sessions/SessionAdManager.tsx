// app/modules/analytics_sessions/SessionAdManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
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
    tangon = tangon.AppStates;
    var _closure1_slot8 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: SessionAdManager
            golfie = this;
            romeon = 0;
            option = copyRestArgs(romeon);
            entity = _closure1_slot3;
            oscard = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golfie, oscard);
            tangon = _closure1_slot9;
            entity = new Array(0);
            romeon = entity;
            yankee = option;
            offset = 0;
            option = arraySpread(romeon, yankee, offset);
            entity = tangon.bind(report)(golfie, oscard, entity);
            var _closure3_slot0 = entity;
            tangon = true;
            entity['focusedOrForegrounded'] = tangon;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 6;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.Interval;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            foxtra = tangon;
            zuuluu = new foxtra[zuuluu](romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            entity['heartbeatInterval'] = zuuluu;
            zuuluu = false;
            entity['schedulerStarted'] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure3_slot0;
                    zuuluu = michal.heartbeatInterval;
                    michal = zuuluu.isStarted;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00006_ip = 97; continue _fun00005 }
 26:
                    entity = _closure3_slot0;
                    tangon = entity.heartbeatInterval;
                    zuuluu = tangon.start;
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 7;
                    report = report[michal];
                    michal = undefined;
                    michal = oscard.bind(michal)(report);
                    michal = michal.Millis;
                    report = michal.MINUTE;
                    michal = 5;
                    michal = michal * report;
                    entity = entity.trackHeartbeat;
                    entity = zuuluu.bind(tangon)(michal, entity);
 97:
                    entity = undefined;
                    return entity;
                }
            };
            entity['maybeStartHeartbeat'] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.schedulerStarted;
                    if(michal) { _fun00008_ip = 88; continue _fun00007 }
 16:
                    michal = _closure3_slot0;
                    entity = true;
                    michal['schedulerStarted'] = entity;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 8;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.addBreadcrumb;
                    entity = {'category': 'ad', 'message': 'Starting ad session heartbeat'};
                    entity = zuuluu.bind(tangon)(entity);
                    entity = michal.maybeStartHeartbeat;
                    entity = entity.bind(michal)();
 88:
                    entity = undefined;
                    return entity;
                }
            };
            entity['startAnalyticHeartbeat'] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure3_slot0;
                    zuuluu = entity.schedulerStarted;
                    if(zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 19:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 8;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.addBreadcrumb;
                    zuuluu = {'category': 'ad', 'message': 'Ad heartbeat called but scheduler not started'};
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = _closure3_slot0;
                    zuuluu = michal.heartbeatInterval;
                    michal = zuuluu.stop;
                    michal = michal.bind(zuuluu)();
                    michal = undefined;
                    return michal;
 90:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getOrRefreshAdSession;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            entity['trackHeartbeat'] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.schedulerStarted;
                    if(!michal) { _fun00012_ip = 94; continue _fun00011 }
 16:
                    entity = _closure3_slot0;
                    michal = false;
                    entity['schedulerStarted'] = michal;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.addBreadcrumb;
                    michal = {'category': 'ad', 'message': 'Stopping ad session heartbeat'};
                    michal = zuuluu.bind(tangon)(michal);
                    michal = entity.heartbeatInterval;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
 94:
                    entity = undefined;
                    return entity;
                }
            };
            entity['stopAnalyticHeartbeat'] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.focusedOrForegrounded;
                    if(michal) { _fun00014_ip = 32; continue _fun00013 }
 16:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.stopAnalyticHeartbeat;
                    michal = michal.bind(zuuluu)();
                    _fun00014_ip = 86; continue _fun00013;
 32: // try_start_0
                    michal = _closure3_slot0;
                    entity = michal.startAnalyticHeartbeat;
                    entity = entity.bind(michal)();
 46: // try_end0
                    _fun00014_ip = 86; continue _fun00013;
 48: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.captureException;
                    entity = entity.bind(michal)(zuuluu);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            entity['scheduleHeartbeatTracking'] = zuuluu;
            zuuluu = function() {
                entity = undefined;
                return entity;
            };
            entity['handleEnrollmentSuccess'] = zuuluu;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.focused;
                michal = _closure3_slot0;
                michal['focusedOrForegrounded'] = entity;
                entity = michal.scheduleHeartbeatTracking;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleWindowFocus'] = zuuluu;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.state;
                michal = _closure3_slot0;
                entity = _closure1_slot8;
                entity = entity.ACTIVE;
                entity = zuuluu === entity;
                michal['focusedOrForegrounded'] = entity;
                entity = michal.scheduleHeartbeatTracking;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleAppStateUpdate'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 10;
            oscard = report[michal];
            entity = undefined;
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = zuuluu.handleWindowFocus;
            oscard = 'WINDOW_FOCUS';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[michal];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = zuuluu.handleAppStateUpdate;
            oscard = 'APP_STATE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            michal = report[michal];
            oscard = tangon.bind(entity)(michal);
            report = oscard.subscribe;
            tangon = zuuluu.handleEnrollmentSuccess;
            michal = 'QUESTS_ENROLL_SUCCESS';
            michal = report.bind(oscard)(michal, tangon);
            michal = zuuluu.scheduleHeartbeatTracking;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.stopAnalyticHeartbeat;
            entity = entity.bind(michal)();
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            oscard = report[zuuluu];
            entity = undefined;
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleWindowFocus;
            oscard = 'WINDOW_FOCUS';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleAppStateUpdate;
            oscard = 'APP_STATE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = michal.handleEnrollmentSuccess;
            michal = 'QUESTS_ENROLL_SUCCESS';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/analytics_sessions/SessionAdManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();