// app/stores/RTCConnectionDesyncStore.tsx
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
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: upsert
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            verify = argBar;
            option = argBaz;
            report = _closure1_slot8;
            entity = {};
            tangon = michal.id;
            entity['userId'] = tangon;
            entity['channelId'] = option;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            kiloes = tangon;
            backup = entity;
            entity = new kiloes[report](backup, foxtra);
            oscard = entity instanceof Object ? entity : tangon;
            offset = _closure1_slot13;
            tangon = null;
            golfie = verify;
            if(!(tangon == golfie)) { _fun00004_ip = 71; continue _fun00003 }
 67:
            golfie = _closure1_slot14;
 71:
            report = michal.id;
            entity = undefined;
            yankee = offset.bind(entity)(oscard, golfie, report);
            offset = _closure1_slot17;
            golfie = offset.set;
            report = michal.id;
            report = golfie.bind(offset)(report, yankee);
            report = {};
            golfie = _closure1_slot16;
            golfie = golfie.USER;
            report['type'] = golfie;
            report['user'] = michal;
            golfie = michal.id;
            report['id'] = golfie;
            report['streamId'] = tangon;
            report['voiceState'] = oscard;
            report['voicePlatform'] = tangon;
            tangon = false;
            report['speaking'] = tangon;
            oscard = 0;
            report['lastSpoke'] = oscard;
            report['soundsharing'] = tangon;
            report['ringing'] = tangon;
            golfie = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 14;
            oscard = offset[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getName;
            oscard = oscard.bind(golfie)(verify, option, michal);
            report['userNick'] = oscard;
            report['localVideoDisabled'] = tangon;
            tangon = _closure1_slot18;
            zuuluu = tangon.set;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal, report);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: deleteUserDesyncData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot17;
            entity = zuuluu.delete;
            entity = entity.bind(zuuluu)(report);
            tangon = _closure1_slot18;
            zuuluu = tangon.delete;
            zuuluu = zuuluu.bind(tangon)(report);
            tangon = _closure1_slot19;
            michal = tangon.delete;
            michal = michal.bind(tangon)(report);
            if(entity) { _fun00006_ip = 54; continue _fun00005 }
 51:
            entity = zuuluu;
 54:
            if(entity) { _fun00006_ip = 60; continue _fun00005 }
 57:
            entity = michal;
 60:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: retryFailedUsers
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot10;
            zuuluu = tangon.getChannelId;
            oscard = zuuluu.bind(tangon)();
            var _closure2_slot0 = oscard;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00008_ip = 99; continue _fun00007 }
 29:
            report = _closure1_slot9;
            tangon = report.getChannel;
            report = tangon.bind(report)(oscard);
            tangon = zuuluu == report;
            zuuluu = undefined;
            if(tangon) { _fun00008_ip = 62; continue _fun00007 }
 52:
            tangon = report.getGuildId;
            zuuluu = tangon.bind(report)();
 62:
            var _closure2_slot1 = zuuluu;
            zuuluu = false;
            var _closure2_slot2 = zuuluu;
            tangon = _closure1_slot19;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    report = _closure1_slot12;
                    tangon = report.getVoiceStateForChannel;
                    zuuluu = _closure2_slot0;
                    tangon = tangon.bind(report)(zuuluu, oscard);
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00010_ip = 51; continue _fun00009 }
 35:
                    report = _closure1_slot19;
                    tangon = report.delete;
                    tangon = tangon.bind(report)(oscard);
                    _fun00010_ip = 111; continue _fun00009;
 51:
                    report = _closure1_slot11;
                    tangon = report.getUser;
                    report = tangon.bind(report)(oscard);
                    if(!(zuuluu != report)) { _fun00010_ip = 111; continue _fun00009 }
 70:
                    zuuluu = true;
                    _closure2_slot2 = zuuluu;
                    tangon = _closure1_slot19;
                    zuuluu = tangon.delete;
                    zuuluu = zuuluu.bind(tangon)(oscard);
                    tangon = _closure1_slot21;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = tangon.bind(entity)(report, zuuluu, michal);
 111:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure2_slot2;
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    verify = function() { // Original name: handleReset
        zuuluu = _closure1_slot17;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        zuuluu = _closure1_slot18;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        michal = _closure1_slot19;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = verify;
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 10;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.makeSortedVoiceState;
    var _closure1_slot13 = option;
    option = 11;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.ME;
    var _closure1_slot14 = offset;
    option = option.RTCConnectionStates;
    var _closure1_slot15 = option;
    option = 12;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.ParticipantTypes;
    var _closure1_slot16 = option;
    option = 13;
    offset = oscard[option];
    offset = golfie.bind(entity)(offset);
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    kiloes = yankee;
    offset = new kiloes[offset](backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot17 = offset;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    kiloes = offset;
    option = new kiloes[option](backup);
    option = option instanceof Object ? option : offset;
    var _closure1_slot18 = option;
    michal = michal.Set;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot19 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: RTCConnectionDesyncStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot20;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 69; continue _fun00011 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00012_ip = 105; continue _fun00011;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            golfie = tangon.waitFor;
            yankee = _closure1_slot12;
            offset = _closure1_slot11;
            verify = _closure1_slot9;
            option = _closure1_slot10;
            romeon = tangon;
            michal = romeon[golfie](yankee, offset, verify, option, golfie);
            zuuluu = tangon.syncWith;
            report = _closure1_slot11;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot23;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'desyncedVoiceStatesCount';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            michal = _closure1_slot17;
            entity = michal.size;
            entity = entity.bind(michal)();
            return entity;
        };
        report['get'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getDesyncedUserIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot17;
            entity = michal.keys;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getDesyncedVoiceStates';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot17;
            entity = michal.values;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getDesyncedParticipants';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = _closure1_slot18;
            entity = michal.values;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'RTCConnectionDesyncStore';
    option['displayName'] = michal;
    michal = 17;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: handleConnectionOpen
        michal = _closure1_slot24;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    michal['VOICE_CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = entity.state;
            michal = entity.context;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 15;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = michal === entity;
            if(!entity) { _fun00014_ip = 87; continue _fun00013 }
 57:
            michal = _closure1_slot15;
            michal = michal.DISCONNECTED;
            michal = report === michal;
            if(!michal) { _fun00014_ip = 84; continue _fun00013 }
 74:
            tangon = _closure1_slot24;
            tangon = tangon.bind(zuuluu)();
            michal = undefined;
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    michal['RTC_CONNECTION_STATE'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceStateUpdates
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = entity.voiceStates;
            zuuluu = _closure1_slot10;
            entity = zuuluu.getChannelId;
            zuuluu = entity.bind(zuuluu)();
            var _closure2_slot0 = zuuluu;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00016_ip = 62; continue _fun00015 }
 41:
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    entity = argBar;
                    report = entity.userId;
                    zuuluu = entity.channelId;
                    entity = _closure2_slot0;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00018_ip = 50; continue _fun00017 }
 30:
                    tangon = _closure1_slot22;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)(report);
                    zuuluu = !zuuluu;
                    entity = !zuuluu;
 50:
                    if(entity) { _fun00018_ip = 56; continue _fun00017 }
 53:
                    entity = michal;
 56:
                    return entity;
                }
            };
            michal = false;
            entity = tangon.bind(report)(zuuluu, michal);
 62:
            return entity;
        }
    };
    michal['VOICE_STATE_UPDATES'] = verify;
    verify = function(argFoo) { // Original name: handleRTCConnectionClientConnect
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            report = entity.userIds;
            zuuluu = entity.guildId;
            var _closure2_slot0 = zuuluu;
            zuuluu = entity.channelId;
            var _closure2_slot1 = zuuluu;
            zuuluu = entity.context;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            entity = oscard.bind(entity)(tangon);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = zuuluu === entity;
            if(!entity) { _fun00020_ip = 99; continue _fun00019 }
 78:
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    report = argBar;
                    golfie = _closure1_slot12;
                    oscard = golfie.getVoiceStateForChannel;
                    tangon = _closure2_slot1;
                    oscard = oscard.bind(golfie)(tangon, report);
                    tangon = null;
                    if(!(tangon == oscard)) { _fun00022_ip = 101; continue _fun00021 }
 38:
                    golfie = _closure1_slot11;
                    oscard = golfie.getUser;
                    option = oscard.bind(golfie)(report);
                    if(!(tangon != option)) { _fun00022_ip = 82; continue _fun00021 }
 57:
                    golfie = _closure1_slot21;
                    oscard = _closure2_slot0;
                    tangon = _closure2_slot1;
                    michal = undefined;
                    michal = golfie.bind(michal)(option, oscard, tangon);
                    michal = true;
                    _fun00022_ip = 99; continue _fun00021;
 82:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.add;
                    zuuluu = zuuluu.bind(tangon)(report);
                    michal = entity;
 99:
                    return michal;
 101:
                    return entity;
                }
            };
            michal = false;
            entity = tangon.bind(report)(zuuluu, michal);
 99:
            return entity;
        }
    };
    michal['RTC_CONNECTION_CLIENT_CONNECT'] = verify;
    tangon = function(argFoo) { // Original name: handleRTCConnectionClientDisconnect
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.userId;
            report = entity.context;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 15;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.MediaEngineContextTypes;
            entity = entity.DEFAULT;
            entity = report === entity;
            if(!entity) { _fun00024_ip = 66; continue _fun00023 }
 57:
            michal = _closure1_slot22;
            entity = michal.bind(zuuluu)(tangon);
 66:
            return entity;
        }
    };
    michal['RTC_CONNECTION_CLIENT_DISCONNECT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/RTCConnectionDesyncStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();