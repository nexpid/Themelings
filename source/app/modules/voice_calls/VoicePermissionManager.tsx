// app/modules/voice_calls/VoicePermissionManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: voicePermissionRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 13;
            zuuluu = entity[report];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            tangon = oscard.requestPermission;
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.AUDIO;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = oscard.then;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun00006_ip = 38; continue _fun00005 }
 6:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 14;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot12;
            zuuluu = tangon.getMode;
            tangon = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.PUSH_TO_TALK;
            if(!(tangon === zuuluu)) { _fun00004_ip = 131; continue _fun00003 }
 93:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.requestPermission;
            michal = _closure1_slot15;
            michal = michal.INPUT_MONITORING;
            michal = zuuluu.bind(tangon)(michal);
 131:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = function(argFoo, argBar) { // Original name: shouldImmediatelyRequestVoicePermissions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            tangon = entity.bind(zuuluu)(report);
            entity = null;
            zuuluu = entity == tangon;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 41; continue _fun00007 }
 31:
            zuuluu = tangon.isListenModeCapable;
            entity = zuuluu.bind(tangon)();
 41:
            entity = !entity;
            if(entity) { _fun00008_ip = 66; continue _fun00007 }
 47:
            tangon = _closure1_slot8;
            zuuluu = tangon.isSpeaker;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(michal, report);
 66:
            return entity;
        }
    };
    var _closure1_slot19 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 9;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 10;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 11;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.InputModes;
    var _closure1_slot14 = report;
    report = 12;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.NativePermissionTypes;
    var _closure1_slot15 = report;
    report = null;
    var _closure1_slot16 = report;
    report = 16;
    report = golfie[report];
    report = option.bind(entity)(report);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: VoicePermissionManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot3;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot6;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot17;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00010_ip = 118; continue _fun00009;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot6;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = {};
                zuuluu = entity.handleVoiceStateUpdates;
                michal['VOICE_STATE_UPDATES'] = zuuluu;
                zuuluu = entity.handleVoiceChannelSelect;
                michal['VOICE_CHANNEL_SELECT'] = zuuluu;
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
        entity = 'handleVoiceChannelSelect';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                entity = entity.channelId;
                michal = null;
                if(!(michal == entity)) { _fun00012_ip = 21; continue _fun00011 }
 14:
                _closure1_slot16 = michal;
 21:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'handleVoiceStateUpdates';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = entity.voiceStates;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    oscard = argFoo;
                    report = oscard.userId;
                    zuuluu = oscard.channelId;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00014_ip = 182; continue _fun00013 }
 22:
                    golfie = _closure1_slot10;
                    entity = golfie.getId;
                    entity = entity.bind(golfie)();
                    if(!(entity === report)) { _fun00014_ip = 182; continue _fun00013 }
 46:
                    golfie = _closure1_slot13;
                    entity = golfie.getRTCConnectionId;
                    entity = entity.bind(golfie)();
                    if(!(tangon != entity)) { _fun00014_ip = 182; continue _fun00013 }
 64:
                    entity = _closure1_slot16;
                    if(!(entity !== zuuluu)) { _fun00014_ip = 182; continue _fun00013 }
 72:
                    tangon = _closure1_slot19;
                    entity = undefined;
                    tangon = tangon.bind(entity)(report, zuuluu);
                    if(tangon) { _fun00014_ip = 186; continue _fun00013 }
 87:
                    tangon = _closure1_slot9;
                    report = tangon.prototype;
                    report = Object.create(report, {constructor: {value: tangon}});
                    romeon = report;
                    yankee = oscard;
                    tangon = new romeon[tangon](yankee, offset);
                    verify = tangon instanceof Object ? tangon : report;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 15;
                    report = golfie[tangon];
                    option = oscard.bind(entity)(report);
                    report = option.getAudienceRequestToSpeakState;
                    report = report.bind(option)(verify);
                    tangon = golfie[tangon];
                    tangon = oscard.bind(entity)(tangon);
                    tangon = tangon.RequestToSpeakStates;
                    tangon = tangon.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(report === tangon)) { _fun00014_ip = 182; continue _fun00013 }
 170:
                    _closure1_slot16 = zuuluu;
                    tangon = _closure1_slot18;
                    tangon = tangon.bind(entity)();
 182:
                    tangon = undefined;
                    return tangon;
 186:
                    _closure1_slot16 = zuuluu;
                    michal = _closure1_slot18;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    backup = report;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_calls/VoicePermissionManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['shouldImmediatelyRequestVoicePermissions'] = michal;
    return entity;
})();