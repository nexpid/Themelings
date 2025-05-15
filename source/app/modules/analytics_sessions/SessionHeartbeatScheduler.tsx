// app/modules/analytics_sessions/SessionHeartbeatScheduler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: handleFluxInitialized
        zuuluu = _closure1_slot6;
        entity = zuuluu.getState;
        entity = entity.bind(zuuluu)();
        _closure1_slot19 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.isForegrounded;
        zuuluu = zuuluu.bind(tangon)();
        _closure1_slot20 = zuuluu;
        tangon = _closure1_slot4;
        zuuluu = tangon.isAuthenticated;
        zuuluu = zuuluu.bind(tangon)();
        _closure1_slot21 = zuuluu;
        michal = _closure1_slot27;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: stopAnalyticsHeartbeat
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot15;
            zuuluu = null;
            tangon = zuuluu == michal;
            michal = false;
            if(tangon) { _fun00002_ip = 110; continue _fun00001 }
 18:
            tangon = _closure1_slot15;
            report = tangon.type;
            tangon = 'timeout';
            if(!(tangon !== report)) { _fun00002_ip = 80; continue _fun00001 }
 35:
            tangon = 'interval';
            if(!(tangon !== report)) { _fun00002_ip = 54; continue _fun00001 }
 43:
            tangon = _closure1_slot15;
            tangon = tangon.type;
            _fun00002_ip = 104; continue _fun00001;
 54:
            tangon = global;
            oscard = tangon.clearInterval;
            tangon = _closure1_slot15;
            report = tangon.id;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            _fun00002_ip = 104; continue _fun00001;
 80:
            tangon = global;
            oscard = tangon.clearTimeout;
            tangon = _closure1_slot15;
            report = tangon.id;
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
 104:
            _closure1_slot15 = zuuluu;
            michal = true;
 110:
            if(!michal) { _fun00002_ip = 192; continue _fun00001 }
 113:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(michal);
            report = oscard.addBreadcrumb;
            michal = {};
            golfie = _closure1_slot13;
            michal['category'] = golfie;
            golfie = 'Stopping Analytics Heartbeat';
            michal['message'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = _closure1_slot0;
            entity = 9;
            entity = tangon[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.drainClickstream;
            entity = entity.bind(michal)();
 192:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: trackHeartbeat
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
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
                    if(michal) { _fun00004_ip = 518; continue _fun00003 }
 10:
                    report = global;
                    zuuluu = report.Date;
                    michal = zuuluu.now;
                    yankee = michal.bind(zuuluu)();
                    michal = _closure1_slot29;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=44);
 42:
                    return michal;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 515; continue _fun00003 }
 53:
                    golfie = report.Date;
                    oscard = golfie.now;
                    oscard = oscard.bind(golfie)();
                    golfie = null;
                    if(!(golfie == michal)) { _fun00004_ip = 152; continue _fun00003 }
 74:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 8;
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
                    _fun00004_ip = 512; continue _fun00003;
 152:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 8;
                    oscard = verify[oscard];
                    offset = option.bind(zuuluu)(oscard);
                    option = offset.addBreadcrumb;
                    oscard = {};
                    yankee = _closure1_slot13;
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
                    oscard = 21;
                    offset['client_heartbeat_version'] = oscard;
                    option = _closure1_slot0;
                    oscard = 10;
                    oscard = verify[oscard];
                    option = option.bind(zuuluu)(oscard);
                    oscard = option.getClientHeartbeatPiggybackProperties;
                    backup = oscard.bind(option)();
                    kiloes = offset;
                    oscard = copyDataProperties(kiloes, backup);
                    option = _closure1_slot5;
                    oscard = option.getIdleSince;
                    oscard = oscard.bind(option)();
                    golfie = golfie != oscard;
                    option = 0;
                    if(!golfie) { _fun00004_ip = 300; continue _fun00003 }
 297:
                    option = oscard;
 300:
                    oscard = {};
                    verify = _closure1_slot5;
                    golfie = verify.isIdle;
                    golfie = golfie.bind(verify)();
                    oscard['is_idle'] = golfie;
                    verify = report.Date;
                    golfie = verify.now;
                    golfie = golfie.bind(verify)();
                    golfie = golfie - option;
                    oscard['idle_duration_ms'] = golfie;
                    option = _closure1_slot5;
                    golfie = option.isAFK;
                    golfie = golfie.bind(option)();
                    oscard['is_afk'] = golfie;
                    option = _closure1_slot5;
                    golfie = option.getSystemSuspended;
                    golfie = golfie.bind(option)();
                    oscard['is_system_suspended'] = golfie;
                    option = _closure1_slot5;
                    golfie = option.getSystemLocked;
                    golfie = golfie.bind(option)();
                    oscard['is_system_locked'] = golfie;
                    kiloes = offset;
                    backup = oscard;
                    oscard = copyDataProperties(kiloes, backup);
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 11;
                    golfie = oscard[golfie];
                    verify = option.bind(zuuluu)(golfie);
                    option = verify.track;
                    golfie = _closure1_slot7;
                    golfie = golfie.CLIENT_HEARTBEAT;
                    golfie = option.bind(verify)(golfie, offset);
                    golfie = report.performance;
                    report = golfie.now;
                    report = report.bind(golfie)();
                    _closure1_slot17 = report;
                    report = _closure1_slot0;
                    tangon = 9;
                    tangon = oscard[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.drainClickstream;
                    tangon = tangon.bind(report)();
 512:
                    return zuuluu;
 515:
                    return michal;
 518:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: isActive
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot21;
            if(!entity) { _fun00006_ip = 62; continue _fun00005 }
 10:
            michal = _closure1_slot20;
            if(michal) { _fun00006_ip = 59; continue _fun00005 }
 17:
            report = _closure1_slot19;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.DISCONNECTED;
            zuuluu = report !== zuuluu;
            if(!zuuluu) { _fun00006_ip = 56; continue _fun00005 }
 38:
            report = _closure1_slot19;
            tangon = _closure1_slot9;
            tangon = tangon.RTC_DISCONNECTED;
            zuuluu = report !== tangon;
 56:
            michal = zuuluu;
 59:
            entity = michal;
 62:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: scheduleHeartbeatTracking
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 8;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.addBreadcrumb;
            zuuluu = {};
            golfie = _closure1_slot20;
            oscard = 'Heartbeat Track State Parameters Changed. Foregrounded ';
            option = oscard + golfie;
            golfie = _closure1_slot19;
            oscard = ', Connection State: ';
            oscard = option + oscard;
            oscard = oscard + golfie;
            zuuluu['message'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot26;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00008_ip = 95; continue _fun00007 }
 85:
            michal = _closure1_slot23;
            michal = michal.bind(entity)();
            _fun00008_ip = 106; continue _fun00007;
 95:
            michal = function() { // Original name: startAnalyticsHeartbeat
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot15;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00010_ip = 176; continue _fun00009 }
 16:
                    entity = _closure1_slot17;
                    oscard = 0;
                    if(!(oscard !== entity)) { _fun00010_ip = 59; continue _fun00009 }
 26:
                    zuuluu = _closure1_slot10;
                    entity = global;
                    tangon = entity.performance;
                    entity = tangon.now;
                    tangon = entity.bind(tangon)();
                    entity = _closure1_slot17;
                    entity = tangon - entity;
                    oscard = zuuluu - entity;
 59:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 8;
                    entity = tangon[entity];
                    report = undefined;
                    golfie = zuuluu.bind(report)(entity);
                    tangon = golfie.addBreadcrumb;
                    entity = {};
                    zuuluu = global;
                    option = zuuluu.HermesInternal;
                    yankee = option.concat;
                    offset = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                    option = 1000;
                    verify = oscard / option;
                    option = ' seconds. Scheduling Heartbeat';
                    option = yankee.bind(offset)(verify, option);
                    entity['message'] = option;
                    entity = tangon.bind(golfie)(entity);
                    entity = {};
                    tangon = 'timeout';
                    entity['type'] = tangon;
                    tangon = zuuluu.setTimeout;
                    zuuluu = function() {
                        michal = _closure1_slot24;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        michal = {};
                        tangon = 'interval';
                        michal['type'] = tangon;
                        tangon = global;
                        oscard = tangon.setInterval;
                        report = _closure1_slot10;
                        tangon = function() {
                            michal = _closure1_slot24;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        tangon = oscard.bind(entity)(tangon, report);
                        michal['id'] = tangon;
                        _closure1_slot15 = michal;
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
                    entity['id'] = zuuluu;
                    _closure1_slot15 = entity;
 176:
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.bind(entity)();
 106:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: validateClientSession
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            zuuluu = null;
            michal = zuuluu == golfie;
            entity = null;
            if(michal) { _fun00012_ip = 141; continue _fun00011 }
 17:
            oscard = golfie.version;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 13;
            michal = michal[verify];
            option = undefined;
            michal = report.bind(option)(michal);
            report = michal.CLIENT_SESSION_STORAGE_VERSION;
            michal = golfie;
            if(!(oscard !== report)) { _fun00012_ip = 138; continue _fun00011 }
 61:
            oscard = _closure1_slot14;
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
    var _closure1_slot28 = entity;
    tangon = function() { // Original name: getSession
        entity = undefined;
        tangon = _closure1_slot30;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = tangon;
    entity = function() { // Original name: _getSession
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 529; continue _fun00013 }
 10:
                    golfie = undefined;
                    zuuluu = undefined;
                    verify = null;
                    michal = null;
 18: // try_start_0
                    report = _closure1_slot18;
                    oscard = report.state;
                    report = 'uninitialized';
                    if(!(report !== oscard)) { _fun00014_ip = 52; continue _fun00013 }
 40:
                    report = _closure1_slot18;
                    report = report.session;
                    _fun00014_ip = 112; continue _fun00013;
 52:
                    oscard = _closure1_slot28;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 12;
                    option = yankee[option];
                    option = offset.bind(golfie)(option);
                    offset = option.Storage;
                    option = offset.getAfterRefresh;
                    tangon = _closure1_slot12;
                    tangon = option.bind(offset)(tangon);
                    SaveGenerator(address=101);
 99:
                    return tangon;
 101:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00014_ip = 117; continue _fun00013 }
 107:
                    report = oscard.bind(golfie)(tangon);
 112:
                    michal = report;
 115: // try_end0
                    _fun00014_ip = 156; continue _fun00013;
 117:
                    return tangon;
 120: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 8;
                    tangon = option[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = report.captureException;
                    tangon = tangon.bind(report)(oscard);
 156:
                    oscard = global;
                    report = oscard.Date;
                    tangon = report.now;
                    zuuluu = tangon.bind(report)();
                    report = _closure1_slot26;
                    report = report.bind(golfie)();
                    if(report) { _fun00014_ip = 247; continue _fun00013 }
 187:
                    option = michal;
                    option = verify != option;
                    report = option;
                    if(!option) { _fun00014_ip = 234; continue _fun00013 }
 200:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 13;
                    option = yankee[option];
                    yankee = offset.bind(golfie)(option);
                    offset = yankee.isSessionExpired;
                    option = michal;
                    report = offset.bind(yankee)(option);
 234:
                    if(!report) { _fun00014_ip = 507; continue _fun00013 }
 240:
                    michal = null;
                    _fun00014_ip = 507; continue _fun00013;
 247:
                    option = michal;
                    option = verify == option;
                    report = option;
                    if(option) { _fun00014_ip = 294; continue _fun00013 }
 260:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 13;
                    option = offset[option];
                    offset = verify.bind(golfie)(option);
                    verify = offset.isSessionExpired;
                    option = michal;
                    report = verify.bind(offset)(option);
 294:
                    if(!report) { _fun00014_ip = 379; continue _fun00013 }
 297:
                    report = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 16;
                    option = offset[option];
                    yankee = verify.bind(golfie)(option);
                    option = yankee.v4;
                    option = option.bind(yankee)();
                    report['uuid'] = option;
                    option = zuuluu;
                    report['createdAtTimestamp'] = option;
                    report['lastUsedTimestamp'] = option;
                    option = 13;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    option = option.CLIENT_SESSION_STORAGE_VERSION;
                    report['version'] = option;
                    michal = report;
                    report = 0;
                    _closure1_slot16 = report;
 379:
                    option = michal;
                    option['lastUsedTimestamp'] = zuuluu;
                    report = option;
                    zuuluu = undefined;
                    option = oscard.performance;
                    oscard = option.now;
                    option = oscard.bind(option)();
                    zuuluu = option;
                    oscard = _closure1_slot16;
                    option = option - oscard;
                    oscard = _closure1_slot11;
                    if(!(!(option < oscard))) { _fun00014_ip = 507; continue _fun00013 }
 427: // try_start_1
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 12;
                    oscard = verify[oscard];
                    oscard = option.bind(golfie)(oscard);
                    verify = oscard.Storage;
                    option = verify.set;
                    oscard = _closure1_slot12;
                    report = option.bind(verify)(oscard, report);
                    _closure1_slot16 = zuuluu;
 472: // try_end1
                    _fun00014_ip = 507; continue _fun00013;
 474: // catch_target1
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = option[zuuluu];
                    report = report.bind(golfie)(zuuluu);
                    zuuluu = report.captureException;
                    zuuluu = zuuluu.bind(report)(oscard);
 507:
                    zuuluu = {};
                    report = 'loaded';
                    zuuluu['state'] = report;
                    zuuluu['session'] = michal;
                    _closure1_slot18 = zuuluu;
                    return michal;
 529:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot30 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot30 = entity;
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
    verify = 2;
    verify = golfie[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = golfie[verify];
    verify = yankee.bind(entity)(verify);
    var _closure1_slot6 = verify;
    offset = 4;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    romeon = offset.AnalyticEvents;
    var _closure1_slot7 = romeon;
    romeon = offset.AppStates;
    var _closure1_slot8 = romeon;
    offset = offset.RTCConnectionStates;
    var _closure1_slot9 = offset;
    offset = 5;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.Millis;
    foxtra = romeon.MINUTE;
    romeon = 15;
    romeon = romeon * foxtra;
    var _closure1_slot10 = romeon;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.SECOND;
    var _closure1_slot11 = offset;
    offset = 'LAST_CLIENT_HEARTBEAT_SESSION';
    var _closure1_slot12 = offset;
    offset = 'user';
    var _closure1_slot13 = offset;
    offset = 6;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    romeon = offset.Logger;
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    sizing = 'SessionHeartbeatScheduler';
    output = yankee;
    offset = new output[romeon](sizing, kiloes);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot14 = offset;
    offset = null;
    var _closure1_slot15 = offset;
    var _closure1_slot16 = report;
    var _closure1_slot17 = report;
    report = {};
    offset = 'uninitialized';
    report['state'] = offset;
    var _closure1_slot18 = report;
    report = verify.getState;
    report = report.bind(verify)();
    var _closure1_slot19 = report;
    report = 7;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    report = verify.isForegrounded;
    report = report.bind(verify)();
    var _closure1_slot20 = report;
    report = option.isAuthenticated;
    report = report.bind(option)();
    var _closure1_slot21 = report;
    report = 18;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: initSessionHeartbeatScheduler
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        oscard = report[entity];
        entity = undefined;
        option = tangon.bind(entity)(oscard);
        golfie = option.addBreadcrumb;
        oscard = {};
        verify = 'Initializing SessionHeartbeatScheduler';
        oscard['message'] = verify;
        oscard = golfie.bind(option)(oscard);
        option = _closure1_slot6;
        golfie = option.addChangeListener;
        oscard = function() {
            zuuluu = _closure1_slot6;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            _closure1_slot19 = michal;
            michal = _closure1_slot27;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        oscard = golfie.bind(option)(oscard);
        option = _closure1_slot4;
        golfie = option.addChangeListener;
        oscard = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.isAuthenticated;
            michal = michal.bind(zuuluu)();
            _closure1_slot21 = michal;
            michal = _closure1_slot27;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        oscard = golfie.bind(option)(oscard);
        oscard = 14;
        golfie = report[oscard];
        offset = tangon.bind(entity)(golfie);
        verify = offset.subscribe;
        option = 'WINDOW_FOCUS';
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.focused;
            _closure1_slot20 = michal;
            michal = _closure1_slot27;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        golfie = report[oscard];
        offset = tangon.bind(entity)(golfie);
        verify = offset.subscribe;
        option = 'APP_STATE_UPDATE';
        golfie = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.state;
            michal = _closure1_slot8;
            michal = michal.ACTIVE;
            michal = zuuluu === michal;
            _closure1_slot20 = michal;
            michal = _closure1_slot27;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        oscard = report[oscard];
        option = tangon.bind(entity)(oscard);
        golfie = option.subscribe;
        oscard = 'LOGOUT';
        zuuluu = function() {
            entity = false;
            _closure1_slot21 = entity;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            report = michal.Storage;
            tangon = report.remove;
            michal = _closure1_slot12;
            michal = tangon.bind(report)(michal);
            michal = {'state': 'loaded', 'session': null};
            _closure1_slot18 = michal;
            michal = _closure1_slot23;
            michal = michal.bind(entity)();
            michal = 0;
            _closure1_slot17 = michal;
            return entity;
        };
        zuuluu = golfie.bind(option)(oscard, zuuluu);
        zuuluu = _closure1_slot27;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = 15;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = zuuluu.initialized;
        zuuluu = tangon.then;
        michal = _closure1_slot22;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['initSessionHeartbeatScheduler'] = report;
    zuuluu['getSession'] = tangon;
    michal = function() { // Original name: updateSuperPropertiesWithClientSessionId
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = _closure1_slot18;
            zuuluu = entity.state;
            entity = 'uninitialized';
            if(!(entity !== zuuluu)) { _fun00016_ip = 34; continue _fun00015 }
 22:
            entity = _closure1_slot18;
            tangon = entity.session;
            _fun00016_ip = 85; continue _fun00015;
 34:
            report = _closure1_slot28;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            golfie = entity.Storage;
            oscard = golfie.get;
            entity = _closure1_slot12;
            entity = oscard.bind(golfie)(entity);
            tangon = report.bind(zuuluu)(entity);
 85:
            zuuluu = null;
            oscard = zuuluu == tangon;
            entity = undefined;
            report = undefined;
            if(oscard) { _fun00016_ip = 140; continue _fun00015 }
 98:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 13;
            oscard = option[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.isSessionExpired;
            oscard = oscard.bind(golfie)(tangon);
            report = undefined;
            if(oscard) { _fun00016_ip = 140; continue _fun00015 }
 134:
            report = tangon.uuid;
 140:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 17;
            oscard = oscard[tangon];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getSuperProperties;
            oscard = oscard.bind(golfie)();
            golfie = zuuluu == oscard;
            zuuluu = undefined;
            if(golfie) { _fun00016_ip = 185; continue _fun00015 }
 179:
            zuuluu = oscard.client_heartbeat_session_id;
 185:
            if(!(zuuluu !== report)) { _fun00016_ip = 224; continue _fun00015 }
 189:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.extendSuperProperties;
            michal = {};
            michal['client_heartbeat_session_id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 224:
            return entity;
        }
    };
    zuuluu['updateSuperPropertiesWithClientSessionId'] = michal;
    return entity;
})();