// app/modules/analytics_sessions/SessionAdManager.tsx
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    option = tangon.AnalyticEvents;
    var _closure1_slot8 = option;
    tangon = tangon.AppStates;
    var _closure1_slot9 = tangon;
    tangon = {};
    option = 'DEFAULT';
    tangon['DEFAULT'] = option;
    option = 'USER_LOGOUT';
    tangon['USER_LOGOUT'] = option;
    option = 'WINDOW_FOCUS';
    tangon['WINDOW_FOCUS'] = option;
    option = 'APP_STATE_UPDATE';
    tangon['APP_STATE_UPDATE'] = option;
    var _closure1_slot10 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: SessionAdManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golfie = this;
                zuuluu = 0;
                kiloes = 0;
                entity = copyRestArgs(kiloes);
                option = _closure1_slot3;
                report = _closure2_slot0;
                oscard = undefined;
                option = option.bind(oscard)(golfie, report);
                romeon = new Array(0);
                kiloes = romeon;
                backup = entity;
                foxtra = 0;
                entity = arraySpread(kiloes, backup, foxtra);
                entity = _closure1_slot6;
                yankee = entity.bind(oscard)(report);
                report = _closure1_slot5;
                entity = _closure1_slot11;
                entity = entity.bind(oscard)();
                if(entity) { _fun00004_ip = 88; continue _fun00003 }
 75:
                entity = yankee.apply;
                entity = entity.bind(yankee)(golfie, romeon);
                _fun00004_ip = 122; continue _fun00003;
 88:
                option = global;
                offset = option.Reflect;
                verify = offset.construct;
                option = _closure1_slot6;
                option = option.bind(oscard)(golfie);
                option = option.constructor;
                entity = verify.bind(offset)(yankee, romeon, option);
 122:
                entity = report.bind(oscard)(golfie, entity);
                var _closure3_slot0 = entity;
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 6;
                tangon = golfie[tangon];
                option = report.bind(oscard)(tangon);
                tangon = option.isForegrounded;
                tangon = tangon.bind(option)();
                entity['focusedOrForegrounded'] = tangon;
                tangon = 7;
                tangon = golfie[tangon];
                tangon = report.bind(oscard)(tangon);
                tangon = tangon.Interval;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                sizing = report;
                tangon = new sizing[tangon](kiloes);
                tangon = tangon instanceof Object ? tangon : report;
                entity['heartbeatInterval'] = tangon;
                tangon = false;
                entity['schedulerStarted'] = tangon;
                entity['lastHeartbeatTimestamp'] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.heartbeatInterval;
                        michal = zuuluu.isStarted;
                        michal = michal.bind(zuuluu)();
                        if(michal) { _fun00006_ip = 107; continue _fun00005 }
 26:
                        entity = _closure3_slot0;
                        michal = entity.trackHeartbeat;
                        michal = michal.bind(entity)();
                        tangon = entity.heartbeatInterval;
                        zuuluu = tangon.start;
                        oscard = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 8;
                        report = report[michal];
                        michal = undefined;
                        michal = oscard.bind(michal)(report);
                        michal = michal.Millis;
                        report = michal.MINUTE;
                        michal = 5;
                        michal = michal * report;
                        entity = entity.trackHeartbeat;
                        entity = zuuluu.bind(tangon)(michal, entity);
 107:
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
                        entity = 9;
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
                        golfie = arguments[0];
                        entity = undefined;
                        if(!(golfie === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
                        golfie = false;
 11:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.schedulerStarted;
                        if(zuuluu) { _fun00010_ip = 102; continue _fun00009 }
 27:
                        if(golfie) { _fun00010_ip = 102; continue _fun00009 }
 30:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 9;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.addBreadcrumb;
                        zuuluu = {'category': 'ad', 'message': 'Ad heartbeat called but scheduler not started'};
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = _closure3_slot0;
                        tangon = zuuluu.heartbeatInterval;
                        zuuluu = tangon.stop;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = undefined;
                        return zuuluu;
 102:
                        zuuluu = global;
                        tangon = zuuluu.performance;
                        zuuluu = tangon.now;
                        zuuluu = zuuluu.bind(tangon)();
                        tangon = _closure3_slot0;
                        tangon = tangon.lastHeartbeatTimestamp;
                        oscard = zuuluu - tangon;
                        option = _closure1_slot1;
                        verify = _closure1_slot2;
                        report = 8;
                        report = verify[report];
                        report = option.bind(entity)(report);
                        report = report.Millis;
                        option = report.MINUTE;
                        report = 5;
                        report = report * option;
                        if(golfie) { _fun00010_ip = 198; continue _fun00009 }
 178:
                        golfie = _closure3_slot0;
                        option = golfie.lastHeartbeatTimestamp;
                        golfie = 0;
                        if(!(option > golfie)) { _fun00010_ip = 198; continue _fun00009 }
 194:
                        if(!(!(oscard < report))) { _fun00010_ip = 307; continue _fun00009 }
 198:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 10;
                        report = golfie[report];
                        oscard = oscard.bind(entity)(report);
                        report = oscard.getOrRefreshAdSession;
                        option = report.bind(oscard)();
                        oscard = _closure1_slot1;
                        report = 11;
                        report = golfie[report];
                        golfie = oscard.bind(entity)(report);
                        oscard = golfie.track;
                        tangon = _closure1_slot8;
                        report = tangon.CLIENT_AD_HEARTBEAT;
                        tangon = {};
                        verify = option.uuid;
                        tangon['client_ad_session_id'] = verify;
                        option = option.createdAtTimestamp;
                        tangon['client_heartbeat_initialization_timestamp'] = option;
                        option = 2;
                        tangon['client_heartbeat_version'] = option;
                        tangon = oscard.bind(golfie)(report, tangon);
                        michal = _closure3_slot0;
                        michal['lastHeartbeatTimestamp'] = zuuluu;
 307:
                        return entity;
                    }
                };
                entity['trackHeartbeat'] = zuuluu;
                zuuluu = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        option = arguments[0];
                        entity = undefined;
                        if(!(option === entity)) { _fun00012_ip = 22; continue _fun00011 }
 9:
                        michal = _closure1_slot10;
                        option = michal.DEFAULT;
 22:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.schedulerStarted;
                        if(!zuuluu) { _fun00012_ip = 149; continue _fun00011 }
 38:
                        michal = _closure3_slot0;
                        zuuluu = false;
                        michal['schedulerStarted'] = zuuluu;
                        zuuluu = 0;
                        michal['lastHeartbeatTimestamp'] = zuuluu;
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 9;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.addBreadcrumb;
                        zuuluu = {};
                        oscard = 'ad';
                        zuuluu['category'] = oscard;
                        oscard = global;
                        oscard = oscard.HermesInternal;
                        golfie = oscard.concat;
                        oscard = 'Stopping ad session heartbeat: ';
                        oscard = golfie.bind(oscard)(option);
                        zuuluu['message'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = michal.heartbeatInterval;
                        michal = zuuluu.stop;
                        michal = michal.bind(zuuluu)();
 149:
                        return entity;
                    }
                };
                entity['stopAnalyticHeartbeat'] = zuuluu;
                zuuluu = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        report = arguments[0];
                        entity = undefined;
                        if(!(report === entity)) { _fun00014_ip = 22; continue _fun00013 }
 9:
                        michal = _closure1_slot10;
                        report = michal.DEFAULT;
 22:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.focusedOrForegrounded;
                        if(zuuluu) { _fun00014_ip = 55; continue _fun00013 }
 38:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.stopAnalyticHeartbeat;
                        zuuluu = zuuluu.bind(tangon)(report);
                        _fun00014_ip = 107; continue _fun00013;
 55: // try_start_0
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.startAnalyticHeartbeat;
                        michal = michal.bind(zuuluu)();
 69: // try_end0
                        _fun00014_ip = 107; continue _fun00013;
 71: // catch_target0
                        CatchBlockStart(arg_register=3);
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 9;
                        michal = report[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.captureException;
                        michal = michal.bind(zuuluu)(tangon);
 107:
                        return entity;
                    }
                };
                entity['scheduleHeartbeatTracking'] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure3_slot0;
                    entity = zuuluu.scheduleHeartbeatTracking;
                    entity = entity.bind(zuuluu)();
                    michal = zuuluu.trackHeartbeat;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleLogin'] = zuuluu;
                zuuluu = function() {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.stopAnalyticHeartbeat;
                    michal = _closure1_slot10;
                    michal = michal.USER_LOGOUT;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.clearAdSession;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                entity['handleLogout'] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getOrRefreshAdSession;
                    michal = true;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['handleEnrollmentSuccess'] = zuuluu;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.focused;
                    zuuluu = _closure3_slot0;
                    zuuluu['focusedOrForegrounded'] = entity;
                    michal = zuuluu.scheduleHeartbeatTracking;
                    entity = _closure1_slot10;
                    entity = entity.WINDOW_FOCUS;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleWindowFocus'] = zuuluu;
                michal = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.state;
                    zuuluu = _closure3_slot0;
                    michal = _closure1_slot9;
                    michal = michal.ACTIVE;
                    michal = tangon === michal;
                    zuuluu['focusedOrForegrounded'] = michal;
                    michal = zuuluu.scheduleHeartbeatTracking;
                    entity = _closure1_slot10;
                    entity = entity.APP_STATE_UPDATE;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleAppStateUpdate'] = michal;
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
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            tangon = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.isForegrounded;
            tangon = tangon.bind(oscard)();
            zuuluu['focusedOrForegrounded'] = tangon;
            tangon = _closure1_slot1;
            michal = 12;
            oscard = report[michal];
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
            oscard = report[michal];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = zuuluu.handleEnrollmentSuccess;
            oscard = 'QUESTS_ENROLL_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[michal];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = zuuluu.handleLogin;
            oscard = 'LOGIN_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            michal = report[michal];
            oscard = tangon.bind(entity)(michal);
            report = oscard.subscribe;
            tangon = zuuluu.handleLogout;
            michal = 'LOGOUT';
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
            zuuluu = 12;
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
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleEnrollmentSuccess;
            oscard = 'QUESTS_ENROLL_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleLogin;
            oscard = 'LOGIN_SUCCESS';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = michal.handleLogout;
            michal = 'LOGOUT';
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
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/analytics_sessions/SessionAdManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();