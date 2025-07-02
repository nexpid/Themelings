// app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: heartbeatTimerHandler
        michal = _closure1_slot26;
        entity = undefined;
        michal = michal.bind(entity)();
        michal = {};
        tangon = 'interval';
        michal['type'] = tangon;
        tangon = global;
        oscard = tangon.setInterval;
        report = _closure1_slot11;
        tangon = function() {
            michal = _closure1_slot26;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = oscard.bind(entity)(tangon, report);
        michal['id'] = tangon;
        _closure1_slot16 = michal;
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: stopAnalyticsHeartbeat
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot16;
            zuuluu = null;
            tangon = zuuluu == michal;
            michal = false;
            if(tangon) { _fun00002_ip = 110; continue _fun00001 }
 18:
            tangon = _closure1_slot16;
            report = tangon.type;
            tangon = 'timeout';
            if(!(tangon !== report)) { _fun00002_ip = 80; continue _fun00001 }
 35:
            tangon = 'interval';
            if(!(tangon !== report)) { _fun00002_ip = 54; continue _fun00001 }
 43:
            tangon = _closure1_slot16;
            tangon = tangon.type;
            _fun00002_ip = 104; continue _fun00001;
 54:
            tangon = global;
            oscard = tangon.clearInterval;
            tangon = _closure1_slot16;
            report = tangon.id;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            _fun00002_ip = 104; continue _fun00001;
 80:
            tangon = global;
            oscard = tangon.clearTimeout;
            tangon = _closure1_slot16;
            report = tangon.id;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
 104:
            _closure1_slot16 = zuuluu;
            michal = true;
 110:
            if(!michal) { _fun00002_ip = 193; continue _fun00001 }
 113:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(michal);
            report = oscard.addBreadcrumb;
            michal = {};
            golfie = _closure1_slot14;
            michal['category'] = golfie;
            golfie = 'Stopping Analytics Heartbeat';
            michal['message'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = _closure1_slot0;
            entity = 10;
            entity = tangon[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.drainClickstream;
            entity = entity.bind(michal)();
 193:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: trackHeartbeat
        entity = undefined;
        tangon = _closure1_slot27;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _trackHeartbeat
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 519; continue _fun00003 }
 10:
                    report = global;
                    zuuluu = report.Date;
                    michal = zuuluu.now;
                    yankee = michal.bind(zuuluu)();
                    michal = _closure1_slot40;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=44);
 42:
                    return michal;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 516; continue _fun00003 }
 53:
                    golfie = report.Date;
                    oscard = golfie.now;
                    oscard = oscard.bind(golfie)();
                    golfie = null;
                    if(!(golfie == michal)) { _fun00004_ip = 152; continue _fun00003 }
 74:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 9;
                    option = offset[option];
                    verify = verify.bind(zuuluu)(option);
                    option = verify.captureException;
                    offset = report.Error;
                    foxtra = oscard - yankee;
                    oscard = report.HermesInternal;
                    romeon = oscard.concat;
                    yankee = 'Null session when tracking session heartbeat. Waited ';
                    oscard = 'ms';
                    oscard = romeon.bind(yankee)(foxtra, oscard);
                    oscard = offset.bind(zuuluu)(oscard);
                    oscard = option.bind(verify)(oscard);
                    _fun00004_ip = 513; continue _fun00003;
 152:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 9;
                    oscard = verify[oscard];
                    offset = option.bind(zuuluu)(oscard);
                    option = offset.addBreadcrumb;
                    oscard = {};
                    yankee = _closure1_slot14;
                    oscard['category'] = yankee;
                    yankee = 'Tracking Heartbeat';
                    oscard['message'] = yankee;
                    yankee = {};
                    romeon = michal.createdAtTimestamp;
                    yankee['initialized'] = romeon;
                    oscard['data'] = yankee;
                    oscard = option.bind(offset)(oscard);
                    offset = {};
                    oscard = michal.createdAtTimestamp;
                    offset['client_heartbeat_initialization_timestamp'] = oscard;
                    oscard = 24;
                    offset['client_heartbeat_version'] = oscard;
                    option = _closure1_slot0;
                    oscard = 11;
                    oscard = verify[oscard];
                    option = option.bind(zuuluu)(oscard);
                    oscard = option.getClientHeartbeatPiggybackProperties;
                    backup = oscard.bind(option)();
                    kiloes = offset;
                    oscard = copyDataProperties(kiloes, backup);
                    option = _closure1_slot6;
                    oscard = option.getIdleSince;
                    oscard = oscard.bind(option)();
                    golfie = golfie != oscard;
                    option = 0;
                    if(!golfie) { _fun00004_ip = 301; continue _fun00003 }
 298:
                    option = oscard;
 301:
                    oscard = {};
                    verify = _closure1_slot6;
                    golfie = verify.isIdle;
                    golfie = golfie.bind(verify)();
                    oscard['is_idle'] = golfie;
                    verify = report.Date;
                    golfie = verify.now;
                    golfie = golfie.bind(verify)();
                    golfie = golfie - option;
                    oscard['idle_duration_ms'] = golfie;
                    option = _closure1_slot6;
                    golfie = option.isAFK;
                    golfie = golfie.bind(option)();
                    oscard['is_afk'] = golfie;
                    option = _closure1_slot6;
                    golfie = option.getSystemSuspended;
                    golfie = golfie.bind(option)();
                    oscard['is_system_suspended'] = golfie;
                    option = _closure1_slot6;
                    golfie = option.getSystemLocked;
                    golfie = golfie.bind(option)();
                    oscard['is_system_locked'] = golfie;
                    kiloes = offset;
                    backup = oscard;
                    oscard = copyDataProperties(kiloes, backup);
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 12;
                    golfie = oscard[golfie];
                    verify = option.bind(zuuluu)(golfie);
                    option = verify.track;
                    golfie = _closure1_slot8;
                    golfie = golfie.CLIENT_HEARTBEAT;
                    golfie = option.bind(verify)(golfie, offset);
                    golfie = report.performance;
                    report = golfie.now;
                    report = report.bind(golfie)();
                    _closure1_slot19 = report;
                    report = _closure1_slot0;
                    tangon = 10;
                    tangon = oscard[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.drainClickstream;
                    tangon = tangon.bind(report)();
 513:
                    return zuuluu;
 516:
                    return michal;
 519:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: buildHeartbeatQOSPayload
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = new Array(0);
            tangon = _closure1_slot23;
            entity = null;
            if(!(entity != tangon)) { _fun00006_ip = 98; continue _fun00005 }
 17:
            entity = _closure1_slot22;
            if(!entity) { _fun00006_ip = 40; continue _fun00005 }
 24:
            tangon = michal.push;
            entity = 'foregrounded';
            entity = tangon.bind(michal)(entity);
 40:
            tangon = _closure1_slot21;
            entity = _closure1_slot10;
            entity = entity.DISCONNECTED;
            entity = tangon !== entity;
            if(!entity) { _fun00006_ip = 79; continue _fun00005 }
 61:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.RTC_DISCONNECTED;
            entity = tangon !== zuuluu;
 79:
            if(!entity) { _fun00006_ip = 98; continue _fun00005 }
 82:
            zuuluu = michal.push;
            entity = 'rtc_connected';
            entity = zuuluu.bind(michal)(entity);
 98:
            entity = {};
            tangon = michal.length;
            zuuluu = 0;
            zuuluu = tangon > zuuluu;
            entity['active'] = zuuluu;
            zuuluu = 24;
            entity['ver'] = zuuluu;
            entity['reasons'] = michal;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: isActive
        michal = _closure1_slot28;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = entity.active;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: scheduleHeartbeatTracking
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.addBreadcrumb;
            zuuluu = {};
            golfie = _closure1_slot22;
            oscard = 'Heartbeat Track State Parameters Changed. Foregrounded ';
            option = oscard + golfie;
            golfie = _closure1_slot21;
            oscard = ', Connection State: ';
            oscard = option + oscard;
            oscard = oscard + golfie;
            zuuluu['message'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot29;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00008_ip = 95; continue _fun00007 }
 85:
            zuuluu = _closure1_slot25;
            zuuluu = zuuluu.bind(entity)();
            _fun00008_ip = 106; continue _fun00007;
 95:
            zuuluu = function() { // Original name: startAnalyticsHeartbeat
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot16;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00010_ip = 192; continue _fun00009 }
 16:
                    michal = _closure1_slot19;
                    zuuluu = 0;
                    oscard = 0;
                    if(!(oscard !== michal)) { _fun00010_ip = 61; continue _fun00009 }
 28:
                    tangon = _closure1_slot11;
                    michal = global;
                    report = michal.performance;
                    michal = report.now;
                    report = michal.bind(report)();
                    michal = _closure1_slot19;
                    michal = report - michal;
                    oscard = tangon - michal;
 61:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 9;
                    tangon = tangon[michal];
                    michal = undefined;
                    option = report.bind(michal)(tangon);
                    golfie = option.addBreadcrumb;
                    report = {};
                    tangon = global;
                    verify = tangon.HermesInternal;
                    romeon = verify.concat;
                    yankee = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                    verify = 1000;
                    offset = oscard / verify;
                    verify = ' seconds. Scheduling Heartbeat';
                    verify = romeon.bind(yankee)(offset, verify);
                    report['message'] = verify;
                    report = golfie.bind(option)(report);
                    if(!(zuuluu !== oscard)) { _fun00010_ip = 184; continue _fun00009 }
 145:
                    zuuluu = {};
                    report = 'timeout';
                    zuuluu['type'] = report;
                    report = tangon.setTimeout;
                    tangon = function() {
                        michal = _closure1_slot24;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    tangon = report.bind(michal)(tangon, oscard);
                    zuuluu['id'] = tangon;
                    _closure1_slot16 = zuuluu;
                    _fun00010_ip = 192; continue _fun00009;
 184:
                    entity = _closure1_slot24;
                    entity = entity.bind(michal)();
 192:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(entity)();
 106:
            tangon = _closure1_slot4;
            zuuluu = tangon.getSocket;
            tangon = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00008_ip = 147; continue _fun00007 }
 126:
            zuuluu = tangon.handleActiveStateChange;
            michal = _closure1_slot28;
            michal = michal.bind(entity)();
            michal = zuuluu.bind(tangon)(michal);
 147:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: scheduleHeartbeatSkippedTracking
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot17;
            entity = null;
            if(!(entity == zuuluu)) { _fun00012_ip = 58; continue _fun00011 }
 13:
            entity = {};
            zuuluu = global;
            oscard = zuuluu.setInterval;
            report = _closure1_slot11;
            tangon = undefined;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot23;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00014_ip = 48; continue _fun00013 }
 16:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 13;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.shouldLogClientHeartbeatSkipped;
                    michal = zuuluu.bind(tangon)();
 48:
                    if(!michal) { _fun00014_ip = 137; continue _fun00013 }
 51:
                    michal = global;
                    zuuluu = michal.performance;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure1_slot19;
                    zuuluu = zuuluu - michal;
                    michal = _closure1_slot11;
                    if(!(!(zuuluu <= michal))) { _fun00014_ip = 137; continue _fun00013 }
 84:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 12;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot8;
                    michal = entity.CLIENT_HEARTBEAT_SKIPPED;
                    entity = {};
                    report = 24;
                    entity['client_heartbeat_version'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 137:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(tangon)(zuuluu, report);
            entity['id'] = zuuluu;
            zuuluu = 'interval';
            entity['type'] = zuuluu;
            _closure1_slot17 = entity;
 58:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: validateClientSession
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golfie = argFoo;
            zuuluu = null;
            michal = zuuluu == golfie;
            entity = null;
            if(michal) { _fun00016_ip = 141; continue _fun00015 }
 17:
            oscard = golfie.version;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 15;
            michal = michal[verify];
            option = undefined;
            michal = report.bind(option)(michal);
            report = michal.CLIENT_SESSION_STORAGE_VERSION;
            michal = golfie;
            if(!(oscard !== report)) { _fun00016_ip = 138; continue _fun00015 }
 61:
            oscard = _closure1_slot15;
            report = oscard.warn;
            offset = golfie.version;
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[verify];
            tangon = golfie.bind(option)(tangon);
            verify = tangon.CLIENT_SESSION_STORAGE_VERSION;
            tangon = global;
            tangon = tangon.HermesInternal;
            option = tangon.concat;
            golfie = 'Throwing away client session with invalid version: ';
            tangon = ', expected ';
            tangon = option.bind(golfie)(offset, tangon, verify);
            tangon = report.bind(oscard)(tangon);
            michal = null;
 138:
            entity = michal;
 141:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: forceDispatchSessionIdUpdate
        entity = undefined;
        tangon = _closure1_slot34;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _forceDispatchSessionIdUpdate
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 114; continue _fun00017 }
 7:
                    report = _closure1_slot40;
                    zuuluu = undefined;
                    michal = false;
                    michal = report.bind(zuuluu)(michal);
                    SaveGenerator(address=27);
 25:
                    return michal;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00018_ip = 111; continue _fun00017 }
 33:
                    report = null;
                    if(!(report != michal)) { _fun00018_ip = 108; continue _fun00017 }
 39:
                    golfie = _closure1_slot4;
                    oscard = golfie.getSocket;
                    option = oscard.bind(golfie)();
                    if(!(report != option)) { _fun00018_ip = 108; continue _fun00017 }
 57:
                    golfie = option.handleUpdateTimeSpentSessionId;
                    oscard = michal.createdAtTimestamp;
                    report = michal.uuid;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 16;
                    tangon = offset[tangon];
                    tangon = verify.bind(zuuluu)(tangon);
                    tangon = tangon.clientLaunchId;
                    tangon = golfie.bind(option)(oscard, report, tangon);
 108:
                    return zuuluu;
 111:
                    return michal;
 114:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot34 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: handleAuthenticationChange
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getToken;
            michal = michal.bind(zuuluu)();
            zuuluu = _closure1_slot23;
            if(!(zuuluu !== michal)) { _fun00020_ip = 104; continue _fun00019 }
 25:
            _closure1_slot23 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 14;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            report = michal.Storage;
            tangon = report.remove;
            michal = _closure1_slot13;
            michal = tangon.bind(report)(michal);
            michal = {'state': 'loaded', 'session': null};
            _closure1_slot20 = michal;
            michal = _closure1_slot25;
            michal = michal.bind(zuuluu)();
            michal = 0;
            _closure1_slot19 = michal;
 104:
            michal = _closure1_slot30;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: handleRTCStateChange
        zuuluu = _closure1_slot7;
        michal = zuuluu.getState;
        michal = michal.bind(zuuluu)();
        _closure1_slot21 = michal;
        michal = _closure1_slot30;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleWindowFocus
        entity = argFoo;
        michal = entity.focused;
        _closure1_slot22 = michal;
        michal = _closure1_slot30;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleAppStateUpdate
        entity = argFoo;
        zuuluu = entity.state;
        michal = _closure1_slot9;
        michal = michal.ACTIVE;
        michal = zuuluu === michal;
        _closure1_slot22 = michal;
        michal = _closure1_slot30;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot38 = entity;
    entity = function() { // Original name: handleFluxInitialized
        zuuluu = _closure1_slot7;
        entity = zuuluu.getState;
        entity = entity.bind(zuuluu)();
        _closure1_slot21 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.isForegrounded;
        zuuluu = zuuluu.bind(tangon)();
        _closure1_slot22 = zuuluu;
        michal = _closure1_slot35;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot39 = entity;
    tangon = function() { // Original name: getSession
        entity = undefined;
        tangon = _closure1_slot41;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot40 = tangon;
    entity = function() { // Original name: _getSession
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    michal = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00022_ip = 256; continue _fun00021 }
 15:
                    tangon = undefined;
                    if(!(michal === tangon)) { _fun00022_ip = 23; continue _fun00021 }
 21:
                    michal = true;
 23:
                    var _closure4_slot0 = michal;
                    var _closure4_slot1 = tangon;
                    var _closure4_slot2 = tangon;
                    SaveGenerator(address=39);
 37:
                    return tangon;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00022_ip = 253; continue _fun00021 }
 48:
                    golfie = null;
                    _closure4_slot1 = golfie;
                    oscard = _closure1_slot20;
                    verify = oscard.state;
                    option = 'loaded';
                    oscard = null;
                    if(!(option === verify)) { _fun00022_ip = 104; continue _fun00021 }
 76:
                    option = _closure1_slot20;
                    option = option.session;
                    verify = golfie == option;
                    golfie = undefined;
                    if(verify) { _fun00022_ip = 101; continue _fun00021 }
 95:
                    golfie = option.uuid;
 101:
                    oscard = golfie;
 104:
                    _closure4_slot2 = oscard;
 108: // try_start_0
                    oscard = _closure1_slot20;
                    golfie = oscard.state;
                    oscard = 'uninitialized';
                    if(!(oscard !== golfie)) { _fun00022_ip = 139; continue _fun00021 }
 127:
                    oscard = _closure1_slot20;
                    golfie = oscard.session;
                    _fun00022_ip = 199; continue _fun00021;
 139:
                    option = _closure1_slot32;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 14;
                    oscard = offset[oscard];
                    oscard = verify.bind(tangon)(oscard);
                    offset = oscard.Storage;
                    verify = offset.getAfterRefresh;
                    oscard = _closure1_slot13;
                    oscard = verify.bind(offset)(oscard);
                    SaveGenerator(address=188);
 186:
                    return oscard;
 188:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(verify) { _fun00022_ip = 205; continue _fun00021 }
 194:
                    golfie = option.bind(tangon)(oscard);
 199:
                    _closure4_slot1 = golfie;
 203: // try_end0
                    _fun00022_ip = 241; continue _fun00021;
 205:
                    return oscard;
 208: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 9;
                    report = option[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.captureException;
                    report = report.bind(oscard)(golfie);
 241:
                    zuuluu = function() {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            oscard = global;
                            michal = oscard.Date;
                            entity = michal.now;
                            report = entity.bind(michal)();
                            entity = _closure1_slot29;
                            option = undefined;
                            golfie = entity.bind(option)();
                            tangon = _closure4_slot1;
                            zuuluu = null;
                            if(golfie) { _fun00024_ip = 99; continue _fun00023 }
 42:
                            golfie = zuuluu != tangon;
                            if(!golfie) { _fun00024_ip = 84; continue _fun00023 }
 49:
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            verify = 15;
                            verify = yankee[verify];
                            yankee = offset.bind(option)(verify);
                            offset = yankee.isSessionExpired;
                            verify = _closure4_slot1;
                            golfie = offset.bind(yankee)(verify);
 84:
                            if(!golfie) { _fun00024_ip = 357; continue _fun00023 }
 90:
                            _closure4_slot1 = zuuluu;
                            _fun00024_ip = 357; continue _fun00023;
 99:
                            tangon = zuuluu == tangon;
                            if(tangon) { _fun00024_ip = 141; continue _fun00023 }
 106:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            golfie = 15;
                            golfie = offset[golfie];
                            offset = verify.bind(option)(golfie);
                            verify = offset.isSessionExpired;
                            golfie = _closure4_slot1;
                            tangon = verify.bind(offset)(golfie);
 141:
                            if(!tangon) { _fun00024_ip = 224; continue _fun00023 }
 144:
                            tangon = {};
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            golfie = 19;
                            golfie = offset[golfie];
                            yankee = verify.bind(option)(golfie);
                            golfie = yankee.v4;
                            golfie = golfie.bind(yankee)();
                            tangon['uuid'] = golfie;
                            tangon['createdAtTimestamp'] = report;
                            tangon['lastUsedTimestamp'] = report;
                            golfie = 15;
                            golfie = offset[golfie];
                            golfie = verify.bind(option)(golfie);
                            golfie = golfie.CLIENT_SESSION_STORAGE_VERSION;
                            tangon['version'] = golfie;
                            _closure4_slot1 = tangon;
                            tangon = 0;
                            _closure1_slot18 = tangon;
 224:
                            tangon = _closure4_slot1;
                            tangon['lastUsedTimestamp'] = report;
                            golfie = _closure4_slot1;
                            report = golfie;
                            tangon = undefined;
                            golfie = oscard.performance;
                            oscard = golfie.now;
                            golfie = oscard.bind(golfie)();
                            tangon = golfie;
                            oscard = _closure1_slot18;
                            golfie = golfie - oscard;
                            oscard = _closure1_slot12;
                            if(!(!(golfie < oscard))) { _fun00024_ip = 357; continue _fun00023 }
 277: // try_start_0
                            golfie = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscard = 14;
                            oscard = verify[oscard];
                            oscard = golfie.bind(option)(oscard);
                            verify = oscard.Storage;
                            golfie = verify.set;
                            oscard = _closure1_slot13;
                            report = golfie.bind(verify)(oscard, report);
                            _closure1_slot18 = tangon;
 322: // try_end0
                            _fun00024_ip = 357; continue _fun00023;
 324: // catch_target0
                            CatchBlockStart(arg_register=5);
                            report = _closure1_slot1;
                            golfie = _closure1_slot2;
                            tangon = 9;
                            tangon = golfie[tangon];
                            report = report.bind(option)(tangon);
                            tangon = report.captureException;
                            tangon = tangon.bind(report)(oscard);
 357:
                            tangon = {};
                            report = 'loaded';
                            tangon['state'] = report;
                            report = _closure4_slot1;
                            tangon['session'] = report;
                            _closure1_slot20 = tangon;
                            tangon = _closure4_slot1;
                            tangon = zuuluu != tangon;
                            if(!tangon) { _fun00024_ip = 409; continue _fun00023 }
 391:
                            oscard = _closure4_slot2;
                            report = _closure4_slot1;
                            report = report.uuid;
                            tangon = oscard !== report;
 409:
                            if(!tangon) { _fun00024_ip = 416; continue _fun00023 }
 412:
                            tangon = _closure4_slot0;
 416:
                            if(!tangon) { _fun00024_ip = 496; continue _fun00023 }
 419:
                            report = _closure1_slot4;
                            tangon = report.getSocket;
                            oscard = tangon.bind(report)();
                            if(!(zuuluu != oscard)) { _fun00024_ip = 496; continue _fun00023 }
 437:
                            report = oscard.handleUpdateTimeSpentSessionId;
                            zuuluu = _closure4_slot1;
                            tangon = zuuluu.createdAtTimestamp;
                            zuuluu = _closure4_slot1;
                            zuuluu = zuuluu.uuid;
                            golfie = _closure1_slot0;
                            verify = _closure1_slot2;
                            michal = 16;
                            michal = verify[michal];
                            michal = golfie.bind(option)(michal);
                            michal = michal.clientLaunchId;
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
 496:
                            entity = _closure4_slot1;
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)();
                    return zuuluu;
 253:
                    return michal;
 256:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot41 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    report = 0;
    option = golfie[report];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = golfie[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = golfie[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot5 = option;
    verify = 3;
    verify = golfie[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = golfie[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot7 = verify;
    offset = 5;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    romeon = offset.AnalyticEvents;
    var _closure1_slot8 = romeon;
    romeon = offset.AppStates;
    var _closure1_slot9 = romeon;
    offset = offset.RTCConnectionStates;
    var _closure1_slot10 = offset;
    offset = 6;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.Millis;
    foxtra = romeon.MINUTE;
    romeon = 15;
    romeon = romeon * foxtra;
    var _closure1_slot11 = romeon;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.SECOND;
    var _closure1_slot12 = offset;
    offset = 'LAST_CLIENT_HEARTBEAT_SESSION';
    var _closure1_slot13 = offset;
    offset = 'user';
    var _closure1_slot14 = offset;
    offset = 7;
    offset = golfie[offset];
    romeon = yankee.bind(entity)(offset);
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    sizing = 'SessionHeartbeatScheduler';
    output = yankee;
    offset = new output[romeon](sizing, kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot15 = offset;
    offset = null;
    var _closure1_slot16 = offset;
    var _closure1_slot17 = offset;
    var _closure1_slot18 = report;
    var _closure1_slot19 = report;
    report = {};
    offset = 'uninitialized';
    report['state'] = offset;
    var _closure1_slot20 = report;
    report = verify.getState;
    report = report.bind(verify)();
    var _closure1_slot21 = report;
    report = 8;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    report = verify.isForegrounded;
    report = report.bind(verify)();
    var _closure1_slot22 = report;
    report = option.getToken;
    report = report.bind(option)();
    var _closure1_slot23 = report;
    report = 20;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: initSessionHeartbeatScheduler
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
        golfie = _closure1_slot7;
        oscard = golfie.addChangeListener;
        zuuluu = _closure1_slot36;
        zuuluu = oscard.bind(golfie)(zuuluu);
        golfie = _closure1_slot5;
        oscard = golfie.addChangeListener;
        zuuluu = _closure1_slot35;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = 17;
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot37;
        oscard = 'WINDOW_FOCUS';
        oscard = option.bind(verify)(oscard, golfie);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot38;
        oscard = 'APP_STATE_UPDATE';
        oscard = option.bind(verify)(oscard, golfie);
        zuuluu = report[zuuluu];
        option = tangon.bind(entity)(zuuluu);
        golfie = option.subscribe;
        oscard = _closure1_slot33;
        zuuluu = 'CONNECTION_OPEN';
        zuuluu = golfie.bind(option)(zuuluu, oscard);
        zuuluu = _closure1_slot30;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = _closure1_slot31;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = 18;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.initialized;
        zuuluu = tangon.then;
        michal = _closure1_slot39;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['initSessionHeartbeatScheduler'] = report;
    zuuluu['getSession'] = tangon;
    michal = function() { // Original name: getActiveSessionUnsafe
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = _closure1_slot20;
            michal = entity.state;
            entity = 'uninitialized';
            if(!(entity !== michal)) { _fun00026_ip = 34; continue _fun00025 }
 22:
            entity = _closure1_slot20;
            michal = entity.session;
            _fun00026_ip = 85; continue _fun00025;
 34:
            report = _closure1_slot32;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 14;
            entity = tangon[entity];
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            golfie = entity.Storage;
            oscard = golfie.get;
            entity = _closure1_slot13;
            entity = oscard.bind(golfie)(entity);
            michal = report.bind(tangon)(entity);
 85:
            tangon = null;
            report = tangon == michal;
            entity = null;
            if(report) { _fun00026_ip = 137; continue _fun00025 }
 96:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 15;
            report = report[zuuluu];
            zuuluu = undefined;
            report = oscard.bind(zuuluu)(report);
            zuuluu = report.isSessionExpired;
            zuuluu = zuuluu.bind(report)(michal);
            entity = null;
            if(zuuluu) { _fun00026_ip = 137; continue _fun00025 }
 134:
            entity = michal;
 137:
            return entity;
        }
    };
    zuuluu['getActiveSessionUnsafe'] = michal;
    return entity;
})();