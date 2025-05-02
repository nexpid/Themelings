// app/modules/gateway/GatewayConnectionStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _handleConnectionOpen
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 466; continue _fun00003 }
 10:
                    verify = global;
                    zuuluu = verify.Date;
                    michal = zuuluu.now;
                    michal = michal.bind(zuuluu)();
                    _closure1_slot25 = michal;
                    michal = argFoo;
                    michal = michal.sessionId;
                    _closure1_slot26 = michal;
                    report = _closure1_slot0;
                    michal = _closure1_slot3;
                    oscard = 18;
                    zuuluu = michal[oscard];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    report = zuuluu.localPresenceState;
                    zuuluu = report.handleConnectionOpen;
                    zuuluu = zuuluu.bind(report)();
                    option = {};
                    report = _closure1_slot17;
                    zuuluu = report.getVoiceChannelId;
                    report = zuuluu.bind(report)();
                    zuuluu = null;
                    golfie = option;
                    if(!(zuuluu != report)) { _fun00004_ip = 420; continue _fun00003 }
 113:
                    verify = verify.window;
                    yankee = zuuluu == verify;
                    offset = undefined;
                    if(yankee) { _fun00004_ip = 202; continue _fun00003 }
 128:
                    romeon = verify.performance;
                    verify = zuuluu == romeon;
                    offset = undefined;
                    if(verify) { _fun00004_ip = 202; continue _fun00003 }
 143:
                    verify = romeon.getEntriesByType;
                    verify = zuuluu == verify;
                    offset = undefined;
                    if(verify) { _fun00004_ip = 202; continue _fun00003 }
 158:
                    yankee = romeon.getEntriesByType;
                    verify = 'navigation';
                    yankee = yankee.bind(romeon)(verify);
                    verify = zuuluu == yankee;
                    offset = undefined;
                    if(verify) { _fun00004_ip = 202; continue _fun00003 }
 182:
                    verify = 0;
                    verify = yankee[verify];
                    yankee = zuuluu == verify;
                    offset = undefined;
                    if(yankee) { _fun00004_ip = 202; continue _fun00003 }
 197:
                    offset = verify.type;
 202:
                    verify = 'reload';
                    if(!(verify !== offset)) { _fun00004_ip = 376; continue _fun00003 }
 213:
                    verify = _closure1_slot23;
                    offset = zuuluu == verify;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 270; continue _fun00003 }
 226:
                    offset = _closure1_slot23;
                    yankee = offset.processUtils;
                    offset = zuuluu == yankee;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 270; continue _fun00003 }
 245:
                    offset = yankee.getLastCrash;
                    offset = zuuluu == offset;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 270; continue _fun00003 }
 260:
                    offset = yankee.getLastCrash;
                    verify = offset.bind(yankee)();
 270:
                    SaveGenerator(address=274);
 272:
                    return verify;
 274:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(offset) { _fun00004_ip = 373; continue _fun00003 }
 280:
                    yankee = zuuluu == verify;
                    offset = undefined;
                    if(yankee) { _fun00004_ip = 297; continue _fun00003 }
 289:
                    offset = verify.rendererCrashReason;
 297:
                    if(!(zuuluu == offset)) { _fun00004_ip = 376; continue _fun00003 }
 301:
                    offset = _closure1_slot27;
                    if(!offset) { _fun00004_ip = 376; continue _fun00003 }
 308:
                    romeon = _closure1_slot15;
                    yankee = romeon.setLastSessionVoiceChannelId;
                    foxtra = zuuluu != report;
                    offset = null;
                    if(!foxtra) { _fun00004_ip = 332; continue _fun00003 }
 329:
                    offset = report;
 332:
                    offset = yankee.bind(romeon)(offset);
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot3;
                    offset = 21;
                    offset = romeon[offset];
                    yankee = yankee.bind(michal)(offset);
                    offset = yankee.selectVoiceChannel;
                    offset = offset.bind(yankee)(zuuluu);
                    golfie = option;
                    _fun00004_ip = 420; continue _fun00003;
 373:
                    return verify;
 376:
                    offset = _closure1_slot13;
                    verify = offset.getChannel;
                    verify = verify.bind(offset)(report);
                    golfie = option;
                    if(!(zuuluu != verify)) { _fun00004_ip = 420; continue _fun00003 }
 397:
                    zuuluu = {};
                    option = verify.getGuildId;
                    option = option.bind(verify)();
                    zuuluu['guildId'] = option;
                    zuuluu['channelId'] = report;
                    golfie = zuuluu;
 420:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu[oscard];
                    zuuluu = report.bind(michal)(zuuluu);
                    oscard = zuuluu.localVoiceState;
                    report = oscard.update;
                    zuuluu = true;
                    zuuluu = report.bind(oscard)(golfie, zuuluu);
                    zuuluu = false;
                    _closure1_slot27 = zuuluu;
                    return michal;
 466:
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
    verify = function() { // Original name: handleClipsFlags
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.localVoiceState;
        michal = zuuluu.update;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot31 = verify;
    entity = function() { // Original name: handleMediaEngineChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        michal = entity.localVoiceState;
        entity = michal.update;
        entity = entity.bind(michal)();
        entity = false;
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: handleLocalPresenceChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        michal = entity.localPresenceState;
        entity = michal.update;
        entity = entity.bind(michal)();
        entity = false;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: deleteStream
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            entity = _closure1_slot3;
            tangon = 18;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            report = zuuluu.socket;
            zuuluu = report.isSessionEstablished;
            zuuluu = zuuluu.bind(report)();
            if(!zuuluu) { _fun00006_ip = 83; continue _fun00005 }
 44:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.socket;
            zuuluu = tangon.streamDelete;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
 83:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: cleanupAllStreamsExceptSelf
        zuuluu = function() { // Original name: getSelfStreamKey
            michal = _closure1_slot19;
            entity = michal.getAllActiveStreamKeys;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.find;
            entity = function(argFoo) {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 25;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.decodeStreamKey;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.ownerId;
                zuuluu = _closure1_slot11;
                entity = zuuluu.getId;
                entity = entity.bind(zuuluu)();
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        var _closure2_slot0 = zuuluu;
        tangon = _closure1_slot19;
        zuuluu = tangon.getAllActiveStreamKeys;
        report = zuuluu.bind(tangon)();
        tangon = report.filter;
        zuuluu = function(argFoo) {
            michal = _closure2_slot0;
            entity = argFoo;
            entity = entity !== michal;
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = _closure1_slot34;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    offset = global;
    romeon = offset.Object;
    yankee = romeon.defineProperty;
    michal = {};
    option = true;
    michal['value'] = option;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, michal);
    michal = 0;
    yankee = oscard[michal];
    entity = undefined;
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot4 = yankee;
    yankee = 1;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot5 = yankee;
    yankee = 2;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot6 = yankee;
    yankee = 3;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot7 = yankee;
    yankee = 4;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 5;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 6;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot10 = yankee;
    yankee = 7;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot11 = yankee;
    yankee = 8;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 9;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot13 = yankee;
    yankee = 10;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot14 = yankee;
    yankee = 11;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot15 = yankee;
    yankee = 12;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot16 = yankee;
    yankee = 13;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot17 = yankee;
    yankee = 14;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot18 = yankee;
    yankee = 15;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot19 = yankee;
    yankee = 16;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    romeon = yankee.RTCConnectionStates;
    var _closure1_slot20 = romeon;
    yankee = yankee.AppStates;
    var _closure1_slot21 = yankee;
    yankee = 17;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.UserSettingsTypes;
    var _closure1_slot22 = yankee;
    offset = offset.window;
    offset = offset.DiscordNative;
    var _closure1_slot23 = offset;
    offset = 18;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.socket;
    yankee = offset.dispatcher;
    offset = 19;
    offset = oscard[offset];
    offset = golfie.bind(entity)(offset);
    yankee['getDispatchHandler'] = offset;
    offset = 20;
    offset = oscard[offset];
    romeon = golfie.bind(entity)(offset);
    offset = romeon.prototype;
    yankee = Object.create(offset, {constructor: {value: romeon}});
    kiloes = 'ConnectionStore';
    sizing = yankee;
    offset = new sizing[romeon](kiloes, backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot24 = offset;
    var _closure1_slot25 = michal;
    michal = null;
    var _closure1_slot26 = michal;
    var _closure1_slot27 = option;
    var _closure1_slot28 = michal;
    michal = 27;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GatewayConnectionStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot29;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            option = tangon.waitFor;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot17;
            yankee = _closure1_slot13;
            offset = _closure1_slot12;
            verify = _closure1_slot10;
            backup = tangon;
            michal = backup[option](foxtra, romeon, yankee, offset, verify, option);
            report = tangon.syncWith;
            michal = _closure1_slot14;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = _closure1_slot32;
            michal = report.bind(tangon)(zuuluu, michal);
            zuuluu = tangon.syncWith;
            report = _closure1_slot18;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot33;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getSocket';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.socket;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isTryingToConnect';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.socket;
            entity = michal.isClosed;
            entity = entity.bind(michal)();
            entity = !entity;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isConnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.socket;
            entity = michal.isSessionEstablished;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isConnectedOrOverlay';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                michal = entity.socket;
                entity = michal.isSessionEstablished;
                entity = entity.bind(michal)();
                if(entity) { _fun00010_ip = 46; continue _fun00009 }
 44:
                entity = false;
 46:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'lastTimeConnectedChanged';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot25;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GatewayConnectionStore';
    option['displayName'] = michal;
    michal = 28;
    michal = oscard[michal];
    kiloes = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: handleSessionStart
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot3;
            report = 18;
            entity = entity[report];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.socket;
            entity = zuuluu.isClosed;
            entity = entity.bind(zuuluu)();
            golfie = _closure1_slot24;
            oscard = golfie.verbose;
            if(entity) { _fun00012_ip = 69; continue _fun00011 }
 54:
            entity = 'Socket is not reconnecting during a new session because it is not closed';
            entity = oscard.bind(golfie)(entity);
            entity = false;
            _fun00012_ip = 113; continue _fun00011;
 69:
            zuuluu = 'Socket is reconnecting because of starting new session';
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.socket;
            michal = zuuluu.connect;
            entity = michal.bind(zuuluu)();
 113:
            return entity;
        }
    };
    michal['START_SESSION'] = offset;
    offset = function() { // Original name: handleSessionRefresh
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            verify = _closure1_slot24;
            option = verify.verbose;
            golfie = {};
            zuuluu = _closure1_slot0;
            entity = _closure1_slot3;
            report = 18;
            oscard = entity[report];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(oscard);
            offset = oscard.socket;
            oscard = offset.isSessionEstablished;
            oscard = oscard.bind(offset)();
            golfie['isEstablished'] = oscard;
            oscard = 'session refresh dispatched';
            oscard = option.bind(verify)(oscard, golfie);
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.socket;
            entity = zuuluu.isSessionEstablished;
            entity = entity.bind(zuuluu)();
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00014_ip = 164; continue _fun00013 }
 106:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            oscard = michal[report];
            oscard = zuuluu.bind(tangon)(oscard);
            golfie = oscard.socket;
            oscard = golfie.close;
            oscard = oscard.bind(golfie)();
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.socket;
            michal = zuuluu.connect;
            entity = michal.bind(zuuluu)();
 164:
            return entity;
        }
    };
    michal['LOGIN_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleLogout
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            entity = entity.isSwitchingAccount;
            if(!entity) { _fun00016_ip = 55; continue _fun00015 }
 12:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.localPresenceState;
            entity = michal.handleAccountSwitch;
            entity = entity.bind(michal)();
 55:
            tangon = _closure1_slot24;
            zuuluu = tangon.verbose;
            michal = 'Closing socket because of logout';
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.socket;
            michal = zuuluu.close;
            michal = michal.bind(zuuluu)();
            return entity;
        }
    };
    michal['LOGOUT'] = offset;
    offset = function(argFoo) { // Original name: handleClearCaches
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            entity = entity.resetSocket;
            if(!entity) { _fun00018_ip = 109; continue _fun00017 }
 12:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 18;
            report = tangon[entity];
            michal = undefined;
            report = zuuluu.bind(michal)(report);
            oscard = report.socket;
            report = oscard.close;
            report = report.bind(oscard)();
            report = tangon[entity];
            report = zuuluu.bind(michal)(report);
            report = report.socket;
            oscard = report.dispatcher;
            report = oscard.clear;
            report = report.bind(oscard)();
            entity = tangon[entity];
            entity = zuuluu.bind(michal)(entity);
            michal = entity.socket;
            entity = michal.connect;
            entity = entity.bind(michal)();
 109:
            entity = false;
            return entity;
        }
    };
    michal['CLEAR_CACHES'] = offset;
    offset = function(argFoo) { // Original name: CONNECTION_OPEN
        zuuluu = function() { // Original name: handleConnectionOpen
            entity = undefined;
            tangon = _closure1_slot30;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        michal = !michal;
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleConnectionClosed
        tangon = _closure1_slot24;
        zuuluu = tangon.verbose;
        entity = 'connection closed dispatched';
        entity = zuuluu.bind(tangon)(entity);
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        _closure1_slot25 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_CLOSED'] = offset;
    offset = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.state;
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.DISCONNECTED;
            if(!(tangon === zuuluu)) { _fun00020_ip = 139; continue _fun00019 }
 25:
            zuuluu = entity.willReconnect;
            if(!zuuluu) { _fun00020_ip = 135; continue _fun00019 }
 34:
            tangon = entity.streamKey;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00020_ip = 88; continue _fun00019 }
 46:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 18;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            tangon = zuuluu.socket;
            zuuluu = tangon.voiceServerPing;
            zuuluu = zuuluu.bind(tangon)();
            _fun00020_ip = 135; continue _fun00019;
 88:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 18;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.socket;
            michal = zuuluu.streamPing;
            entity = entity.streamKey;
            entity = michal.bind(zuuluu)(entity);
 135:
            entity = undefined;
            return entity;
 139:
            entity = false;
            return entity;
        }
    };
    michal['RTC_CONNECTION_STATE'] = offset;
    offset = function(argFoo) { // Original name: handleVoiceChannelSelect
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            tangon = 18;
            report = golfie[tangon];
            zuuluu = undefined;
            report = oscard.bind(zuuluu)(report);
            verify = report.localVoiceState;
            option = verify.update;
            report = {};
            offset = michal.guildId;
            report['guildId'] = offset;
            offset = michal.channelId;
            report['channelId'] = offset;
            report = option.bind(verify)(report);
            report = 22;
            report = golfie[report];
            oscard = oscard.bind(zuuluu)(report);
            report = oscard.isIOS;
            report = report.bind(oscard)();
            if(!report) { _fun00022_ip = 108; continue _fun00021 }
 90:
            golfie = _closure1_slot28;
            oscard = _closure1_slot21;
            oscard = oscard.BACKGROUND;
            report = golfie === oscard;
 108:
            if(!report) { _fun00022_ip = 261; continue _fun00021 }
 114:
            report = michal.channelId;
            michal = null;
            if(!(michal != report)) { _fun00022_ip = 225; continue _fun00021 }
 125:
            report = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            report = michal.socket;
            michal = report.isClosed;
            michal = michal.bind(report)();
            if(!michal) { _fun00022_ip = 261; continue _fun00021 }
 161:
            oscard = _closure1_slot2;
            michal = _closure1_slot3;
            report = 23;
            report = michal[report];
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.setIsPaused;
            report = false;
            report = oscard.bind(golfie)(report);
            report = _closure1_slot0;
            michal = michal[tangon];
            michal = report.bind(zuuluu)(michal);
            report = michal.socket;
            michal = report.connect;
            michal = michal.bind(report)();
            _fun00022_ip = 261; continue _fun00021;
 225:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[tangon];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.socket;
            michal = zuuluu.close;
            entity = true;
            entity = michal.bind(zuuluu)(entity);
 261:
            entity = false;
            return entity;
        }
    };
    michal['VOICE_CHANNEL_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tangon = entity.voiceStates;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                report = argBar;
                tangon = _closure1_slot11;
                zuuluu = tangon.getId;
                tangon = zuuluu.bind(tangon)();
                zuuluu = report.userId;
                if(!(tangon === zuuluu)) { _fun00024_ip = 202; continue _fun00023 }
 35:
                tangon = report.sessionId;
                zuuluu = _closure1_slot26;
                if(!(tangon !== zuuluu)) { _fun00024_ip = 139; continue _fun00023 }
 49:
                tangon = report.guildId;
                option = _closure1_slot0;
                zuuluu = _closure1_slot3;
                golfie = 18;
                zuuluu = zuuluu[golfie];
                oscard = undefined;
                zuuluu = option.bind(oscard)(zuuluu);
                zuuluu = zuuluu.localVoiceState;
                zuuluu = zuuluu.guildId;
                if(!(tangon === zuuluu)) { _fun00024_ip = 137; continue _fun00023 }
 91:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu[golfie];
                zuuluu = tangon.bind(oscard)(zuuluu);
                oscard = zuuluu.localVoiceState;
                tangon = oscard.setState;
                zuuluu = {'guildId': null, 'channelId': null};
                zuuluu = tangon.bind(oscard)(zuuluu);
                _fun00024_ip = 198; continue _fun00023;
 137:
                return entity;
 139:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 18;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.localVoiceState;
                zuuluu = tangon.setState;
                michal = {};
                oscard = report.guildId;
                michal['guildId'] = oscard;
                report = report.channelId;
                michal['channelId'] = report;
                michal = zuuluu.bind(tangon)(michal);
 198:
                michal = true;
                return michal;
 202:
                return entity;
            }
        };
        entity = false;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['VOICE_STATE_UPDATES'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            report = entity.id;
            oscard = _closure1_slot0;
            entity = _closure1_slot3;
            tangon = 18;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.localVoiceState;
            zuuluu = zuuluu.guildId;
            if(!(report === zuuluu)) { _fun00026_ip = 97; continue _fun00025 }
 53:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.localVoiceState;
            zuuluu = tangon.setState;
            michal = {'guildId': null, 'channelId': null};
            michal = zuuluu.bind(tangon)(michal);
 97:
            return entity;
        }
    };
    michal['GUILD_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleChannelDelete
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            report = entity.id;
            oscard = _closure1_slot0;
            entity = _closure1_slot3;
            tangon = 18;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.localVoiceState;
            zuuluu = zuuluu.channelId;
            if(!(report === zuuluu)) { _fun00028_ip = 97; continue _fun00027 }
 53:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.localVoiceState;
            zuuluu = tangon.setState;
            michal = {'guildId': null, 'channelId': null};
            michal = zuuluu.bind(tangon)(michal);
 97:
            return entity;
        }
    };
    michal['CHANNEL_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleCallDelete
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            oscard = _closure1_slot0;
            entity = _closure1_slot3;
            tangon = 18;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.localVoiceState;
            zuuluu = zuuluu.channelId;
            if(!(report === zuuluu)) { _fun00030_ip = 92; continue _fun00029 }
 48:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.localVoiceState;
            zuuluu = tangon.setState;
            michal = {'guildId': null, 'channelId': null};
            michal = zuuluu.bind(tangon)(michal);
 92:
            return entity;
        }
    };
    michal['CALL_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleFocus
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 22;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isIOS;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00032_ip = 167; continue _fun00031 }
 44:
            tangon = entity.state;
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.ACTIVE;
            if(!(tangon === zuuluu)) { _fun00032_ip = 458; continue _fun00031 }
 66:
            tangon = _closure1_slot2;
            oscard = _closure1_slot3;
            zuuluu = 23;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.setIsPaused;
            zuuluu = false;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot11;
            zuuluu = tangon.isAuthenticated;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00032_ip = 458; continue _fun00031 }
 119:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 18;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            oscard = zuuluu.socket;
            tangon = oscard.resetBackoff;
            zuuluu = 'App state is active';
            zuuluu = tangon.bind(oscard)(zuuluu);
            _fun00032_ip = 458; continue _fun00031;
 167:
            tangon = _closure1_slot11;
            zuuluu = tangon.isAuthenticated;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00032_ip = 449; continue _fun00031 }
 187:
            tangon = _closure1_slot28;
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.INACTIVE;
            if(!(tangon === zuuluu)) { _fun00032_ip = 264; continue _fun00031 }
 205:
            tangon = entity.state;
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.BACKGROUND;
            if(!(tangon === zuuluu)) { _fun00032_ip = 264; continue _fun00031 }
 224:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            oscard = 18;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.localVoiceState;
            tangon = zuuluu.channelId;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00032_ip = 413; continue _fun00031 }
 264:
            tangon = _closure1_slot28;
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.BACKGROUND;
            zuuluu = tangon === zuuluu;
            if(!zuuluu) { _fun00032_ip = 304; continue _fun00031 }
 285:
            golfie = entity.state;
            tangon = _closure1_slot21;
            tangon = tangon.ACTIVE;
            zuuluu = golfie === tangon;
 304:
            if(!zuuluu) { _fun00032_ip = 343; continue _fun00031 }
 307:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            tangon = 18;
            tangon = option[tangon];
            tangon = golfie.bind(report)(tangon);
            golfie = tangon.socket;
            tangon = golfie.isClosed;
            zuuluu = tangon.bind(golfie)();
 343:
            if(!zuuluu) { _fun00032_ip = 449; continue _fun00031 }
 346:
            tangon = _closure1_slot2;
            golfie = _closure1_slot3;
            zuuluu = 23;
            zuuluu = golfie[zuuluu];
            option = tangon.bind(report)(zuuluu);
            tangon = option.setIsPaused;
            zuuluu = false;
            zuuluu = tangon.bind(option)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 18;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.socket;
            zuuluu = tangon.connect;
            zuuluu = zuuluu.bind(tangon)();
            _fun00032_ip = 449; continue _fun00031;
 413:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.socket;
            tangon = report.close;
            zuuluu = true;
            zuuluu = tangon.bind(report)(zuuluu);
 449:
            entity = entity.state;
            _closure1_slot28 = entity;
 458:
            entity = false;
            return entity;
        }
    };
    michal['APP_STATE_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildMembersRequest
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            tangon = _closure1_slot3;
            golfie = 18;
            report = tangon[golfie];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            oscard = report.socket;
            report = oscard.isSessionEstablished;
            report = report.bind(oscard)();
            if(!report) { _fun00034_ip = 209; continue _fun00033 }
 56:
            report = 'userIds';
            report = report in michal;
            if(report) { _fun00034_ip = 149; continue _fun00033 }
 67:
            oscard = _closure1_slot0;
            report = _closure1_slot3;
            report = report[golfie];
            report = oscard.bind(tangon)(report);
            option = report.socket;
            golfie = option.requestGuildMembers;
            oscard = michal.guildIds;
            report = {};
            verify = michal.query;
            report['query'] = verify;
            verify = michal.limit;
            report['limit'] = verify;
            verify = michal.presences;
            verify = !verify;
            verify = !verify;
            report['presences'] = verify;
            report = golfie.bind(option)(oscard, report);
            _fun00034_ip = 209; continue _fun00033;
 149:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            zuuluu = 24;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            michal = michal.userIds;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.chunk;
            michal = 100;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                report = michal.socket;
                tangon = report.requestGuildMembers;
                oscard = _closure2_slot0;
                zuuluu = oscard.guildIds;
                michal = {};
                golfie = argFoo;
                michal['userIds'] = golfie;
                oscard = oscard.presences;
                oscard = !oscard;
                oscard = !oscard;
                michal['presences'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 209:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_MEMBERS_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: handleGuildSearchRecentMembers
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            golfie = entity.query;
            oscard = entity.continuationToken;
            option = _closure1_slot0;
            entity = _closure1_slot3;
            tangon = 18;
            zuuluu = entity[tangon];
            entity = undefined;
            zuuluu = option.bind(entity)(zuuluu);
            option = zuuluu.socket;
            zuuluu = option.isSessionEstablished;
            zuuluu = zuuluu.bind(option)();
            if(!zuuluu) { _fun00036_ip = 109; continue _fun00035 }
 63:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.socket;
            zuuluu = tangon.searchRecentMembers;
            michal = {};
            michal['query'] = golfie;
            michal['continuationToken'] = oscard;
            michal = zuuluu.bind(tangon)(report, michal);
 109:
            return entity;
        }
    };
    michal['GUILD_SEARCH_RECENT_MEMBERS'] = offset;
    offset = function(argFoo) { // Original name: handleGuildSubscriptionsFlush
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.subscriptions;
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            report = 18;
            michal = michal[report];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            oscard = michal.socket;
            michal = oscard.isSessionEstablished;
            michal = michal.bind(oscard)();
            if(!michal) { _fun00038_ip = 89; continue _fun00037 }
 53:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[report];
            entity = michal.bind(tangon)(entity);
            michal = entity.socket;
            entity = michal.updateGuildSubscriptions;
            entity = entity.bind(michal)(zuuluu);
 89:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SUBSCRIPTIONS_FLUSH'] = offset;
    offset = function(argFoo) { // Original name: handleCallConnect
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            oscard = _closure1_slot0;
            michal = _closure1_slot3;
            report = 18;
            michal = michal[report];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            oscard = michal.socket;
            michal = oscard.isSessionEstablished;
            michal = michal.bind(oscard)();
            if(!michal) { _fun00040_ip = 86; continue _fun00039 }
 52:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[report];
            entity = michal.bind(tangon)(entity);
            michal = entity.socket;
            entity = michal.callConnect;
            entity = entity.bind(michal)(zuuluu);
 86:
            entity = false;
            return entity;
        }
    };
    michal['CALL_CONNECT'] = offset;
    offset = function(argFoo) { // Original name: handleCallConnectMultiple
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelIds;
            tangon = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 18;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            michal = entity.socket;
            entity = michal.isSessionEstablished;
            entity = entity.bind(michal)();
            if(!entity) { _fun00042_ip = 70; continue _fun00041 }
 53:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.socket;
                zuuluu = tangon.callConnect;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 70:
            entity = false;
            return entity;
        }
    };
    michal['CALL_CONNECT_MULTIPLE'] = offset;
    michal['STREAM_CREATE'] = verify;
    offset = function(argFoo) { // Original name: handleStreamStart
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            oscard = entity.streamType;
            report = entity.guildId;
            tangon = entity.channelId;
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            offset = 18;
            entity = entity[offset];
            verify = undefined;
            entity = michal.bind(verify)(entity);
            michal = entity.socket;
            entity = michal.isSessionEstablished;
            entity = entity.bind(michal)();
            if(!entity) { _fun00044_ip = 204; continue _fun00043 }
 66:
            option = null;
            if(!(option == report)) { _fun00044_ip = 104; continue _fun00043 }
 72:
            michal = _closure1_slot12;
            entity = michal.getCall;
            entity = entity.bind(michal)(tangon);
            michal = option == entity;
            zuuluu = undefined;
            if(michal) { _fun00044_ip = 102; continue _fun00043 }
 96:
            zuuluu = entity.region;
 102:
            _fun00044_ip = 136; continue _fun00043;
 104:
            michal = _closure1_slot13;
            entity = michal.getChannel;
            michal = entity.bind(michal)(tangon);
            yankee = option == michal;
            entity = undefined;
            if(yankee) { _fun00044_ip = 133; continue _fun00043 }
 127:
            entity = michal.rtcRegion;
 133:
            zuuluu = entity;
 136:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[offset];
            entity = michal.bind(verify)(entity);
            michal = entity.socket;
            entity = michal.streamCreate;
            if(!(option == zuuluu)) { _fun00044_ip = 185; continue _fun00043 }
 171:
            option = _closure1_slot16;
            golfie = option.getPreferredRegion;
            zuuluu = golfie.bind(option)();
 185:
            sizing = michal;
            kiloes = oscard;
            backup = report;
            foxtra = tangon;
            romeon = zuuluu;
            entity = sizing[entity](kiloes, backup, foxtra, romeon, yankee);
 204:
            entity = false;
            return entity;
        }
    };
    michal['STREAM_START'] = offset;
    offset = function(argFoo) { // Original name: handleStreamWatch
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.streamKey;
            michal = entity.allowMultiple;
            golfie = _closure1_slot0;
            tangon = _closure1_slot3;
            report = 18;
            oscard = tangon[report];
            tangon = undefined;
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.socket;
            oscard = golfie.isSessionEstablished;
            oscard = oscard.bind(golfie)();
            if(!oscard) { _fun00046_ip = 106; continue _fun00045 }
 59:
            if(michal) { _fun00046_ip = 70; continue _fun00045 }
 62:
            michal = _closure1_slot35;
            michal = michal.bind(tangon)();
 70:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[report];
            entity = michal.bind(tangon)(entity);
            michal = entity.socket;
            entity = michal.streamWatch;
            entity = entity.bind(michal)(zuuluu);
 106:
            entity = false;
            return entity;
        }
    };
    michal['STREAM_WATCH'] = offset;
    offset = function(argFoo) { // Original name: handleStreamStop
        entity = argFoo;
        tangon = entity.streamKey;
        zuuluu = _closure1_slot34;
        michal = undefined;
        zuuluu = zuuluu.bind(michal)(tangon);
        entity = _closure1_slot31;
        entity = entity.bind(michal)();
        entity = false;
        return entity;
    };
    michal['STREAM_STOP'] = offset;
    offset = function(argFoo) { // Original name: handleStreamSetPaused
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            report = entity.streamKey;
            tangon = entity.paused;
            golfie = _closure1_slot0;
            entity = _closure1_slot3;
            oscard = 18;
            zuuluu = entity[oscard];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            golfie = zuuluu.socket;
            zuuluu = golfie.isSessionEstablished;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00048_ip = 96; continue _fun00047 }
 59:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[oscard];
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.socket;
            michal = zuuluu.streamSetPaused;
            michal = michal.bind(zuuluu)(report, tangon);
 96:
            return entity;
        }
    };
    michal['STREAM_SET_PAUSED'] = offset;
    offset = function() { // Original name: handlePushNotificationClick
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        report = entity.socket;
        tangon = report.expeditedHeartbeat;
        zuuluu = 5000;
        michal = 'user clicked on notification';
        entity = true;
        entity = tangon.bind(report)(zuuluu, michal, entity);
        entity = false;
        return entity;
    };
    michal['PUSH_NOTIFICATION_CLICK'] = offset;
    offset = function(argFoo) { // Original name: handleRequestForumUnreads
        entity = argFoo;
        oscard = entity.guildId;
        report = entity.channelId;
        tangon = entity.threads;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.socket;
        michal = zuuluu.requestForumUnreads;
        michal = michal.bind(zuuluu)(oscard, report, tangon);
        return entity;
    };
    michal['REQUEST_FORUM_UNREADS'] = offset;
    offset = function(argFoo) { // Original name: handleRequestSoundboardSounds
        entity = argFoo;
        tangon = entity.guildIds;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.socket;
        michal = zuuluu.requestSoundboardSounds;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['REQUEST_SOUNDBOARD_SOUNDS'] = offset;
    offset = function(argFoo) { // Original name: handleRemoteCommand
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            tangon = entity.sessionId;
            zuuluu = entity.payload;
            golfie = _closure1_slot0;
            michal = _closure1_slot3;
            oscard = 18;
            michal = michal[oscard];
            report = undefined;
            michal = golfie.bind(report)(michal);
            golfie = michal.socket;
            michal = golfie.isSessionEstablished;
            michal = michal.bind(golfie)();
            if(!michal) { _fun00050_ip = 96; continue _fun00049 }
 59:
            michal = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[oscard];
            entity = michal.bind(report)(entity);
            michal = entity.socket;
            entity = michal.remoteCommand;
            entity = entity.bind(michal)(tangon, zuuluu);
 96:
            entity = false;
            return entity;
        }
    };
    michal['REMOTE_COMMAND'] = offset;
    offset = function(argFoo) { // Original name: handleResetSocket
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = _closure1_slot0;
            golfie = _closure1_slot3;
            tangon = 18;
            zuuluu = golfie[tangon];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.socket;
            report = zuuluu.connectionState;
            oscard = _closure1_slot1;
            zuuluu = 26;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.WILL_RECONNECT;
            if(!(report !== zuuluu)) { _fun00052_ip = 106; continue _fun00051 }
 63:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[tangon];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.socket;
            zuuluu = tangon.resetSocketOnError;
            michal = argFoo;
            michal = michal.args;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['RESET_SOCKET'] = offset;
    michal['CLIPS_SETTINGS_UPDATE'] = verify;
    michal['RUNNING_GAMES_CHANGE'] = verify;
    tangon = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.settings;
            tangon = entity.type;
            michal = _closure1_slot22;
            michal = michal.PRELOADED_USER_SETTINGS;
            michal = tangon === michal;
            if(!michal) { _fun00054_ip = 73; continue _fun00053 }
 34:
            zuuluu = zuuluu.settings;
            zuuluu = zuuluu.proto;
            report = zuuluu.clips;
            tangon = null;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00054_ip = 69; continue _fun00053 }
 63:
            zuuluu = report.allowVoiceRecording;
 69:
            michal = tangon != zuuluu;
 73:
            if(!michal) { _fun00054_ip = 86; continue _fun00053 }
 76:
            michal = _closure1_slot31;
            entity = undefined;
            entity = michal.bind(entity)();
 86:
            entity = undefined;
            return entity;
        }
    };
    michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    sizing = tangon;
    backup = michal;
    michal = new sizing[option](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewayConnectionStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();