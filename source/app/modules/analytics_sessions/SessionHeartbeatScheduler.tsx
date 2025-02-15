// app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: startAnalyticsHeartbeat
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = tango;
    entity = function() { // Original name: _startAnalyticsHeartbeat
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 492; continue _fun00001 }
 10:
                    mike = _closure1_slot13;
                    if(mike) { _fun00002_ip = 487; continue _fun00001 }
 23:
                    options = true;
                    _closure1_slot13 = options;
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 4;
                    zulu = verify[mike];
                    golf = undefined;
                    report = oscar.bind(golf)(zulu);
                    zulu = report.setSessionExtendingEnabled;
                    zulu = zulu.bind(report)(options);
                    report = _closure1_slot1;
                    options = 5;
                    zulu = verify[options];
                    offset = report.bind(golf)(zulu);
                    report = offset.addBreadcrumb;
                    zulu = {};
                    yankee = 'Start Analytics Heartbeat';
                    zulu['message'] = yankee;
                    zulu = report.bind(offset)(zulu);
                    zulu = 6;
                    zulu = verify[zulu];
                    zulu = oscar.bind(golf)(zulu);
                    offset = zulu.Storage;
                    report = offset.getAfterRefresh;
                    zulu = _closure1_slot10;
                    report = report.bind(offset)(zulu);
                    zulu = report.then;
                    mike = verify[mike];
                    mike = oscar.bind(golf)(mike);
                    mike = mike.timestampOrZero;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=163);
 161:
                    return mike;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 484; continue _fun00001 }
 172:
                    zulu = _closure1_slot13;
                    if(!zulu) { _fun00002_ip = 487; continue _fun00001 }
 182:
                    zulu = global;
                    oscar = zulu.Date;
                    report = oscar.now;
                    report = report.bind(oscar)();
                    romeo = _closure1_slot9;
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 7;
                    oscar = yankee[verify];
                    oscar = offset.bind(golf)(oscar);
                    oscar = oscar.Millis;
                    oscar = oscar.MINUTE;
                    oscar = romeo * oscar;
                    oscar = oscar + mike;
                    oscar = oscar - report;
                    verify = yankee[verify];
                    verify = offset.bind(golf)(verify);
                    verify = verify.Millis;
                    verify = verify.HOUR;
                    if(!(oscar > verify)) { _fun00002_ip = 348; continue _fun00001 }
 272:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[options];
                    yankee = offset.bind(golf)(verify);
                    offset = yankee.addBreadcrumb;
                    verify = {};
                    romeo = zulu.HermesInternal;
                    kilo = romeo.concat;
                    source = 'Received invalid Date.now() when generating a heartbeat. Date.now() = ';
                    echo = ', timeUntilNextHeartbeat = ';
                    output = ', latestHeartbeatEventTimestamp = ';
                    update = report;
                    result = oscar;
                    sizing = mike;
                    romeo = source[kilo](update, echo, result, output, sizing, kilo);
                    verify['message'] = romeo;
                    verify = offset.bind(yankee)(verify);
 348:
                    verify = oscar;
                    if(!(mike > report)) { _fun00002_ip = 357; continue _fun00001 }
 355:
                    verify = 0;
 357:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[options];
                    options = oscar.bind(golf)(report);
                    oscar = options.addBreadcrumb;
                    report = {};
                    offset = zulu.HermesInternal;
                    foxtrot = offset.concat;
                    romeo = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                    offset = 1000;
                    yankee = verify / offset;
                    offset = ' seconds. Scheduling Heartbeat';
                    offset = foxtrot.bind(romeo)(yankee, offset);
                    report['message'] = offset;
                    report = oscar.bind(options)(report);
                    report = _closure1_slot18;
                    report = report.bind(golf)();
                    oscar = zulu.setTimeout;
                    options = zulu.Math;
                    report = options.max;
                    zulu = 0;
                    report = report.bind(options)(verify, zulu);
                    zulu = function() {
                        mike = _closure1_slot19;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        mike = global;
                        report = mike.setInterval;
                        tango = _closure1_slot9;
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        mike = 7;
                        mike = golf[mike];
                        mike = oscar.bind(entity)(mike);
                        mike = mike.Millis;
                        mike = mike.MINUTE;
                        tango = tango * mike;
                        mike = function() {
                            mike = _closure1_slot19;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            return entity;
                        };
                        mike = report.bind(entity)(mike, tango);
                        _closure1_slot11 = mike;
                        return entity;
                    };
                    zulu = oscar.bind(golf)(zulu, report);
                    _closure1_slot12 = zulu;
                    _fun00002_ip = 487; continue _fun00001;
 484:
                    return mike;
 487:
                    mike = undefined;
                    return mike;
 492:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: clearTimers
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot12;
            entity = null;
            if(!(entity != zulu)) { _fun00004_ip = 36; continue _fun00003 }
 13:
            zulu = global;
            report = zulu.clearTimeout;
            tango = _closure1_slot12;
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            _closure1_slot12 = entity;
 36:
            zulu = _closure1_slot11;
            if(!(entity != zulu)) { _fun00004_ip = 67; continue _fun00003 }
 44:
            zulu = global;
            report = zulu.clearInterval;
            tango = _closure1_slot11;
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            _closure1_slot11 = entity;
 67:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: trackHeartbeat
        entity = undefined;
        tango = _closure1_slot20;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _trackHeartbeat
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscar = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 561; continue _fun00005 }
 13:
                    tango = undefined;
                    if(!(oscar === tango)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    oscar = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return tango;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 558; continue _fun00005 }
 34:
                    report = global;
                    golf = report.Date;
                    zulu = golf.now;
                    foxtrot = zulu.bind(golf)();
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 4;
                    zulu = verify[zulu];
                    golf = golf.bind(tango)(zulu);
                    zulu = golf.getSession;
                    zulu = zulu.bind(golf)();
                    SaveGenerator(address=88);
 86:
                    return zulu;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00006_ip = 555; continue _fun00005 }
 97:
                    verify = report.Date;
                    golf = verify.now;
                    verify = golf.bind(verify)();
                    golf = null;
                    if(!(golf == zulu)) { _fun00006_ip = 196; continue _fun00005 }
 118:
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot2;
                    offset = 5;
                    offset = romeo[offset];
                    yankee = yankee.bind(tango)(offset);
                    offset = yankee.captureException;
                    romeo = report.Error;
                    kilo = verify - foxtrot;
                    verify = report.HermesInternal;
                    backup = verify.concat;
                    foxtrot = 'Null session when tracking session heartbeat. Waited ';
                    verify = 'ms';
                    verify = backup.bind(foxtrot)(kilo, verify);
                    verify = romeo.bind(tango)(verify);
                    verify = offset.bind(yankee)(verify);
                    _fun00006_ip = 552; continue _fun00005;
 196:
                    verify = _closure1_slot13;
                    if(verify) { _fun00006_ip = 265; continue _fun00005 }
 203:
                    if(oscar) { _fun00006_ip = 265; continue _fun00005 }
 206:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = 5;
                    oscar = offset[oscar];
                    offset = verify.bind(tango)(oscar);
                    verify = offset.captureException;
                    yankee = report.Error;
                    oscar = 'Heartbeat scheduler not started when tracking session heartbeat.';
                    oscar = yankee.bind(tango)(oscar);
                    oscar = verify.bind(offset)(oscar);
                    oscar = _closure1_slot18;
                    oscar = oscar.bind(tango)();
                    return tango;
 265:
                    verify = _closure1_slot1;
                    oscar = _closure1_slot2;
                    offset = 5;
                    offset = oscar[offset];
                    romeo = verify.bind(tango)(offset);
                    yankee = romeo.addBreadcrumb;
                    offset = {};
                    foxtrot = 'Tracking Heartbeat';
                    offset['message'] = foxtrot;
                    foxtrot = {};
                    backup = zulu.initialized;
                    foxtrot['initialized'] = backup;
                    offset['data'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    yankee = {};
                    offset = zulu.initialized;
                    yankee['client_heartbeat_initialization_timestamp'] = offset;
                    offset = _closure1_slot8;
                    yankee['client_heartbeat_version'] = offset;
                    offset = 9;
                    oscar = oscar[offset];
                    verify = verify.bind(tango)(oscar);
                    oscar = verify.getMemoryUsageElectronRenderer;
                    oscar = oscar.bind(verify)();
                    if(!(golf != oscar)) { _fun00006_ip = 387; continue _fun00005 }
 379:
                    yankee['client_heartbeat_renderer_memory'] = oscar;
 387:
                    verify = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[offset];
                    verify = verify.bind(tango)(oscar);
                    oscar = verify.getMemoryUsageElectronRendererUsedHeapSize;
                    oscar = oscar.bind(verify)();
                    if(!(golf != oscar)) { _fun00006_ip = 428; continue _fun00005 }
 420:
                    yankee['client_heartbeat_renderer_memory_used_heap'] = oscar;
 428:
                    verify = _closure1_slot1;
                    golf = _closure1_slot2;
                    oscar = 10;
                    oscar = golf[oscar];
                    offset = verify.bind(tango)(oscar);
                    verify = offset.track;
                    oscar = _closure1_slot5;
                    oscar = oscar.CLIENT_HEARTBEAT;
                    oscar = verify.bind(offset)(oscar, yankee);
                    oscar = _closure1_slot0;
                    verify = 6;
                    verify = golf[verify];
                    verify = oscar.bind(tango)(verify);
                    offset = verify.Storage;
                    verify = offset.set;
                    options = _closure1_slot10;
                    yankee = report.Date;
                    report = yankee.now;
                    yankee = report.bind(yankee)();
                    report = yankee.toString;
                    report = report.bind(yankee)();
                    report = verify.bind(offset)(options, report);
                    report = 8;
                    report = golf[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.drainClickstream;
                    report = report.bind(oscar)();
 552:
                    return tango;
 555:
                    return zulu;
 558:
                    return mike;
 561:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot20 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: scheduleHeartbeatTracking
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            report = 5;
            zulu = entity[report];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            tango = oscar.addBreadcrumb;
            zulu = {};
            options = _closure1_slot15;
            golf = 'Heartbeat Track State Parameters Changed. Foregrounded ';
            verify = golf + options;
            options = _closure1_slot14;
            golf = ', Connection State: ';
            golf = verify + golf;
            golf = golf + options;
            zulu['message'] = golf;
            zulu = tango.bind(oscar)(zulu);
            zulu = _closure1_slot15;
            if(zulu) { _fun00008_ip = 136; continue _fun00007 }
 81:
            oscar = _closure1_slot14;
            tango = null;
            tango = tango != oscar;
            if(!tango) { _fun00008_ip = 112; continue _fun00007 }
 94:
            golf = _closure1_slot14;
            oscar = _closure1_slot7;
            oscar = oscar.DISCONNECTED;
            tango = golf !== oscar;
 112:
            if(!tango) { _fun00008_ip = 133; continue _fun00007 }
 115:
            golf = _closure1_slot14;
            oscar = _closure1_slot7;
            oscar = oscar.RTC_DISCONNECTED;
            tango = golf !== oscar;
 133:
            zulu = tango;
 136:
            if(zulu) { _fun00008_ip = 254; continue _fun00007 }
 139:
            zulu = _closure1_slot13;
            if(!zulu) { _fun00008_ip = 294; continue _fun00007 }
 149:
            options = false;
            _closure1_slot13 = options;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = oscar[report];
            golf = tango.bind(entity)(zulu);
            tango = golf.addBreadcrumb;
            zulu = {};
            verify = 'Stopping Analytics Heartbeat';
            zulu['message'] = verify;
            zulu = tango.bind(golf)(zulu);
            tango = _closure1_slot0;
            zulu = 4;
            zulu = oscar[zulu];
            golf = tango.bind(entity)(zulu);
            zulu = golf.setSessionExtendingEnabled;
            zulu = zulu.bind(golf)(options);
            zulu = _closure1_slot18;
            zulu = zulu.bind(entity)();
            zulu = 8;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.drainClickstream;
            zulu = zulu.bind(tango)();
            _fun00008_ip = 294; continue _fun00007;
 254: // try_start_0
            zulu = _closure1_slot16;
            zulu = zulu.bind(entity)();
 262: // try_end0
            _fun00008_ip = 294; continue _fun00007;
 264: // catch_target0
            CatchBlockStart(arg_register=3);
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[report];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.captureException;
            mike = mike.bind(zulu)(tango);
 294:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: handleLogin
        zulu = _closure1_slot19;
        entity = undefined;
        mike = true;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: handleRTCStateChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            zulu = _closure1_slot14;
            if(!(zulu !== mike)) { _fun00010_ip = 39; continue _fun00009 }
 25:
            _closure1_slot14 = mike;
            mike = _closure1_slot21;
            entity = undefined;
            entity = mike.bind(entity)();
 39:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: handleWindowFocus
        entity = argFoo;
        mike = entity.focused;
        _closure1_slot15 = mike;
        mike = _closure1_slot21;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: handleAppStateUpdate
        entity = argFoo;
        zulu = entity.state;
        mike = _closure1_slot6;
        mike = mike.ACTIVE;
        mike = zulu === mike;
        _closure1_slot15 = mike;
        mike = _closure1_slot21;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    options = {};
    report = true;
    options['value'] = report;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = golf[options];
    options = verify.bind(entity)(options);
    options = 2;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.AnalyticEvents;
    var _closure1_slot5 = verify;
    verify = options.AppStates;
    var _closure1_slot6 = verify;
    options = options.RTCConnectionStates;
    var _closure1_slot7 = options;
    options = 17;
    var _closure1_slot8 = options;
    options = 15;
    var _closure1_slot9 = options;
    options = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP';
    var _closure1_slot10 = options;
    options = null;
    var _closure1_slot11 = options;
    var _closure1_slot12 = options;
    verify = false;
    var _closure1_slot13 = verify;
    var _closure1_slot14 = options;
    var _closure1_slot15 = report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    report = oscar.bind(golf)(report);
    zulu['startAnalyticsHeartbeat'] = tango;
    mike = function() { // Original name: initSessionHeartbeatScheduler
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 5;
        zulu = report[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        oscar = golf.addBreadcrumb;
        zulu = {};
        options = 'Initializing SessionHeartbeatScheduler';
        zulu['message'] = options;
        zulu = oscar.bind(golf)(zulu);
        golf = _closure1_slot4;
        oscar = golf.addChangeListener;
        zulu = _closure1_slot23;
        zulu = oscar.bind(golf)(zulu);
        zulu = 11;
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = _closure1_slot24;
        oscar = 'WINDOW_FOCUS';
        oscar = options.bind(verify)(oscar, golf);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = _closure1_slot25;
        oscar = 'APP_STATE_UPDATE';
        oscar = options.bind(verify)(oscar, golf);
        zulu = report[zulu];
        oscar = tango.bind(entity)(zulu);
        report = oscar.subscribe;
        tango = _closure1_slot22;
        zulu = 'LOGIN_SUCCESS';
        zulu = report.bind(oscar)(zulu, tango);
        mike = _closure1_slot21;
        mike = mike.bind(entity)();
        return entity;
    };
    zulu['initSessionHeartbeatScheduler'] = mike;
    return entity;
})();