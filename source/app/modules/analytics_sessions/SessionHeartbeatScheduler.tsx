// app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: startAnalyticsHeartbeat
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = tangon;
    entity = function() { // Original name: _startAnalyticsHeartbeat
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 462; continue _fun00001 }
 10:
                    michal = _closure1_slot14;
                    if(michal) { _fun00002_ip = 457; continue _fun00001 }
 23:
                    report = true;
                    _closure1_slot14 = report;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 5;
                    michal = option[michal];
                    golfie = undefined;
                    zuuluu = oscard.bind(golfie)(michal);
                    michal = zuuluu.setSessionExtendingEnabled;
                    michal = michal.bind(zuuluu)(report);
                    michal = 6;
                    michal = option[michal];
                    michal = oscard.bind(golfie)(michal);
                    report = michal.Storage;
                    zuuluu = report.getAfterRefresh;
                    michal = _closure1_slot10;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.then;
                    michal = 7;
                    michal = option[michal];
                    michal = oscard.bind(golfie)(michal);
                    michal = michal.timestampOrZero;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=127);
 125:
                    return michal;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 454; continue _fun00001 }
 136:
                    zuuluu = _closure1_slot14;
                    if(!zuuluu) { _fun00002_ip = 457; continue _fun00001 }
 146:
                    zuuluu = global;
                    oscard = zuuluu.Date;
                    report = oscard.now;
                    report = report.bind(oscard)();
                    yankee = _closure1_slot9;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 8;
                    oscard = offset[option];
                    oscard = verify.bind(golfie)(oscard);
                    oscard = oscard.Millis;
                    oscard = oscard.MINUTE;
                    oscard = yankee * oscard;
                    oscard = oscard + michal;
                    oscard = oscard - report;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    option = option.Millis;
                    option = option.HOUR;
                    if(!(oscard > option)) { _fun00002_ip = 315; continue _fun00001 }
 236:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 9;
                    option = offset[option];
                    offset = verify.bind(golfie)(option);
                    verify = offset.addBreadcrumb;
                    option = {};
                    yankee = zuuluu.HermesInternal;
                    backup = yankee.concat;
                    update = 'Received invalid Date.now() when generating a heartbeat. Date.now() = ';
                    result = ', timeUntilNextHeartbeat = ';
                    sizing = ', latestHeartbeatEventTimestamp = ';
                    echoed = report;
                    output = oscard;
                    kiloes = michal;
                    yankee = update[backup](echoed, result, output, sizing, kiloes, backup);
                    option['message'] = yankee;
                    option = verify.bind(offset)(option);
 315:
                    verify = oscard;
                    if(!(michal > report)) { _fun00002_ip = 324; continue _fun00001 }
 322:
                    verify = 0;
 324:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 9;
                    report = option[report];
                    option = oscard.bind(golfie)(report);
                    oscard = option.addBreadcrumb;
                    report = {};
                    offset = zuuluu.HermesInternal;
                    foxtra = offset.concat;
                    romeon = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                    offset = 1000;
                    yankee = verify / offset;
                    offset = ' seconds. Scheduling Heartbeat';
                    offset = foxtra.bind(romeon)(yankee, offset);
                    report['message'] = offset;
                    report = oscard.bind(option)(report);
                    report = _closure1_slot19;
                    report = report.bind(golfie)();
                    oscard = zuuluu.setTimeout;
                    option = zuuluu.Math;
                    report = option.max;
                    zuuluu = 0;
                    report = report.bind(option)(verify, zuuluu);
                    zuuluu = function() {
                        michal = _closure1_slot20;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        michal = global;
                        report = michal.setInterval;
                        tangon = _closure1_slot9;
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        michal = 8;
                        michal = golfie[michal];
                        michal = oscard.bind(entity)(michal);
                        michal = michal.Millis;
                        michal = michal.MINUTE;
                        tangon = tangon * michal;
                        michal = function() {
                            michal = _closure1_slot20;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        michal = report.bind(entity)(michal, tangon);
                        _closure1_slot12 = michal;
                        return entity;
                    };
                    zuuluu = oscard.bind(golfie)(zuuluu, report);
                    _closure1_slot13 = zuuluu;
                    _fun00002_ip = 457; continue _fun00001;
 454:
                    return michal;
 457:
                    michal = undefined;
                    return michal;
 462:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: clearTimers
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 36; continue _fun00003 }
 13:
            zuuluu = global;
            report = zuuluu.clearTimeout;
            tangon = _closure1_slot13;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            _closure1_slot13 = entity;
 36:
            zuuluu = _closure1_slot12;
            if(!(entity != zuuluu)) { _fun00004_ip = 67; continue _fun00003 }
 44:
            zuuluu = global;
            report = zuuluu.clearInterval;
            tangon = _closure1_slot12;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            _closure1_slot12 = entity;
 67:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: trackHeartbeat
        entity = undefined;
        tangon = _closure1_slot21;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _trackHeartbeat
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscard = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 565; continue _fun00005 }
 13:
                    tangon = undefined;
                    if(!(oscard === tangon)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    oscard = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 562; continue _fun00005 }
 34:
                    report = global;
                    golfie = report.Date;
                    zuuluu = golfie.now;
                    foxtra = zuuluu.bind(golfie)();
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = verify[zuuluu];
                    golfie = golfie.bind(tangon)(zuuluu);
                    zuuluu = golfie.getSession;
                    zuuluu = zuuluu.bind(golfie)();
                    SaveGenerator(address=88);
 86:
                    return zuuluu;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 559; continue _fun00005 }
 97:
                    verify = report.Date;
                    golfie = verify.now;
                    verify = golfie.bind(verify)();
                    golfie = null;
                    if(!(golfie == zuuluu)) { _fun00006_ip = 196; continue _fun00005 }
 118:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    offset = 9;
                    offset = romeon[offset];
                    yankee = yankee.bind(tangon)(offset);
                    offset = yankee.captureException;
                    romeon = report.Error;
                    kiloes = verify - foxtra;
                    verify = report.HermesInternal;
                    backup = verify.concat;
                    foxtra = 'Null session when tracking session heartbeat. Waited ';
                    verify = 'ms';
                    verify = backup.bind(foxtra)(kiloes, verify);
                    verify = romeon.bind(tangon)(verify);
                    verify = offset.bind(yankee)(verify);
                    _fun00006_ip = 556; continue _fun00005;
 196:
                    verify = _closure1_slot14;
                    if(verify) { _fun00006_ip = 265; continue _fun00005 }
 203:
                    if(oscard) { _fun00006_ip = 265; continue _fun00005 }
 206:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 9;
                    oscard = offset[oscard];
                    offset = verify.bind(tangon)(oscard);
                    verify = offset.captureException;
                    yankee = report.Error;
                    oscard = 'Heartbeat scheduler not started when tracking session heartbeat.';
                    oscard = yankee.bind(tangon)(oscard);
                    oscard = verify.bind(offset)(oscard);
                    oscard = _closure1_slot19;
                    oscard = oscard.bind(tangon)();
                    return tangon;
 265:
                    verify = _closure1_slot1;
                    oscard = _closure1_slot2;
                    offset = 9;
                    offset = oscard[offset];
                    romeon = verify.bind(tangon)(offset);
                    yankee = romeon.addBreadcrumb;
                    offset = {};
                    foxtra = _closure1_slot11;
                    offset['category'] = foxtra;
                    foxtra = 'Tracking Heartbeat';
                    offset['message'] = foxtra;
                    foxtra = {};
                    backup = zuuluu.initialized;
                    foxtra['initialized'] = backup;
                    offset['data'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    yankee = {};
                    offset = zuuluu.initialized;
                    yankee['client_heartbeat_initialization_timestamp'] = offset;
                    offset = _closure1_slot8;
                    yankee['client_heartbeat_version'] = offset;
                    offset = 11;
                    oscard = oscard[offset];
                    verify = verify.bind(tangon)(oscard);
                    oscard = verify.getMemoryUsageElectronRenderer;
                    oscard = oscard.bind(verify)();
                    if(!(golfie != oscard)) { _fun00006_ip = 393; continue _fun00005 }
 385:
                    yankee['client_heartbeat_renderer_memory'] = oscard;
 393:
                    verify = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[offset];
                    verify = verify.bind(tangon)(oscard);
                    oscard = verify.getMemoryUsageElectronRendererUsedHeapSize;
                    oscard = oscard.bind(verify)();
                    if(!(golfie != oscard)) { _fun00006_ip = 432; continue _fun00005 }
 424:
                    yankee['client_heartbeat_renderer_memory_used_heap'] = oscard;
 432:
                    verify = _closure1_slot1;
                    golfie = _closure1_slot2;
                    oscard = 12;
                    oscard = golfie[oscard];
                    offset = verify.bind(tangon)(oscard);
                    verify = offset.track;
                    oscard = _closure1_slot5;
                    oscard = oscard.CLIENT_HEARTBEAT;
                    oscard = verify.bind(offset)(oscard, yankee);
                    oscard = _closure1_slot0;
                    verify = 6;
                    verify = golfie[verify];
                    verify = oscard.bind(tangon)(verify);
                    offset = verify.Storage;
                    verify = offset.set;
                    option = _closure1_slot10;
                    yankee = report.Date;
                    report = yankee.now;
                    yankee = report.bind(yankee)();
                    report = yankee.toString;
                    report = report.bind(yankee)();
                    report = verify.bind(offset)(option, report);
                    report = 10;
                    report = golfie[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.drainClickstream;
                    report = report.bind(oscard)();
 556:
                    return tangon;
 559:
                    return zuuluu;
 562:
                    return michal;
 565:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot21 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: scheduleHeartbeatTracking
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 9;
            zuuluu = entity[report];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            tangon = oscard.addBreadcrumb;
            zuuluu = {};
            option = _closure1_slot16;
            golfie = 'Heartbeat Track State Parameters Changed. Foregrounded ';
            verify = golfie + option;
            option = _closure1_slot15;
            golfie = ', Connection State: ';
            golfie = verify + golfie;
            golfie = golfie + option;
            zuuluu['message'] = golfie;
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot16;
            if(zuuluu) { _fun00008_ip = 136; continue _fun00007 }
 81:
            oscard = _closure1_slot15;
            tangon = null;
            tangon = tangon != oscard;
            if(!tangon) { _fun00008_ip = 112; continue _fun00007 }
 94:
            golfie = _closure1_slot15;
            oscard = _closure1_slot7;
            oscard = oscard.DISCONNECTED;
            tangon = golfie !== oscard;
 112:
            if(!tangon) { _fun00008_ip = 133; continue _fun00007 }
 115:
            golfie = _closure1_slot15;
            oscard = _closure1_slot7;
            oscard = oscard.RTC_DISCONNECTED;
            tangon = golfie !== oscard;
 133:
            zuuluu = tangon;
 136:
            if(zuuluu) { _fun00008_ip = 265; continue _fun00007 }
 142:
            zuuluu = _closure1_slot14;
            if(!zuuluu) { _fun00008_ip = 305; continue _fun00007 }
 152:
            option = false;
            _closure1_slot14 = option;
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = oscard[report];
            golfie = tangon.bind(entity)(zuuluu);
            tangon = golfie.addBreadcrumb;
            zuuluu = {};
            verify = _closure1_slot11;
            zuuluu['category'] = verify;
            verify = 'Stopping Analytics Heartbeat';
            zuuluu['message'] = verify;
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = golfie.setSessionExtendingEnabled;
            zuuluu = zuuluu.bind(golfie)(option);
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.bind(entity)();
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.drainClickstream;
            zuuluu = zuuluu.bind(tangon)();
            _fun00008_ip = 305; continue _fun00007;
 265: // try_start_0
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.bind(entity)();
 273: // try_end0
            _fun00008_ip = 305; continue _fun00007;
 275: // catch_target0
            CatchBlockStart(arg_register=3);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.captureException;
            michal = michal.bind(zuuluu)(tangon);
 305:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: handleLogin
        zuuluu = _closure1_slot20;
        entity = undefined;
        michal = true;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: handleRTCStateChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            zuuluu = _closure1_slot15;
            if(!(zuuluu !== michal)) { _fun00010_ip = 39; continue _fun00009 }
 25:
            _closure1_slot15 = michal;
            michal = _closure1_slot22;
            entity = undefined;
            entity = michal.bind(entity)();
 39:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: handleWindowFocus
        entity = argFoo;
        michal = entity.focused;
        _closure1_slot16 = michal;
        michal = _closure1_slot22;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: handleAppStateUpdate
        entity = argFoo;
        zuuluu = entity.state;
        michal = _closure1_slot6;
        michal = michal.ACTIVE;
        michal = zuuluu === michal;
        _closure1_slot16 = michal;
        michal = _closure1_slot22;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    option = {};
    report = true;
    option['value'] = report;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = golfie[entity];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = golfie[option];
    option = verify.bind(entity)(option);
    option = 2;
    option = golfie[option];
    option = verify.bind(entity)(option);
    option = 3;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 4;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.AnalyticEvents;
    var _closure1_slot5 = verify;
    verify = option.AppStates;
    var _closure1_slot6 = verify;
    option = option.RTCConnectionStates;
    var _closure1_slot7 = option;
    option = 17;
    var _closure1_slot8 = option;
    option = 15;
    var _closure1_slot9 = option;
    option = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP';
    var _closure1_slot10 = option;
    option = 'user';
    var _closure1_slot11 = option;
    option = null;
    var _closure1_slot12 = option;
    var _closure1_slot13 = option;
    verify = false;
    var _closure1_slot14 = verify;
    var _closure1_slot15 = option;
    var _closure1_slot16 = report;
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['startAnalyticsHeartbeat'] = tangon;
    michal = function() { // Original name: initSessionHeartbeatScheduler
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 9;
        zuuluu = report[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.addBreadcrumb;
        zuuluu = {};
        option = 'Initializing SessionHeartbeatScheduler';
        zuuluu['message'] = option;
        zuuluu = oscard.bind(golfie)(zuuluu);
        golfie = _closure1_slot4;
        oscard = golfie.addChangeListener;
        zuuluu = _closure1_slot24;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = 13;
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot25;
        oscard = 'WINDOW_FOCUS';
        oscard = option.bind(verify)(oscard, golfie);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot26;
        oscard = 'APP_STATE_UPDATE';
        oscard = option.bind(verify)(oscard, golfie);
        zuuluu = report[zuuluu];
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.subscribe;
        tangon = _closure1_slot23;
        zuuluu = 'LOGIN_SUCCESS';
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        michal = _closure1_slot22;
        michal = michal.bind(entity)();
        return entity;
    };
    zuuluu['initSessionHeartbeatScheduler'] = michal;
    return entity;
})();