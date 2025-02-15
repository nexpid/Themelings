// app/modules/voice_calls/VoicePermissionManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123103: for(var _fun123103_ip = 0; ; ) switch(_fun123103_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun123103_ip = 51; continue _fun123103 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123103_ip = 92; continue _fun123103;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123103_ip = 71; continue _fun123103 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123104: for(var _fun123104_ip = 0; ; ) switch(_fun123104_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun123104_ip = 76; continue _fun123104;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: voicePermissionRequest
        _fun123107: for(var _fun123107_ip = 0; ; ) switch(_fun123107_ip) {
 0:
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            report = 13;
            zulu = entity[report];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            tango = oscar.requestPermission;
            zulu = _closure1_slot15;
            zulu = zulu.AUDIO;
            oscar = tango.bind(oscar)(zulu);
            tango = oscar.then;
            zulu = function(argFoo) {
                _fun123108: for(var _fun123108_ip = 0; ; ) switch(_fun123108_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun123108_ip = 38; continue _fun123108 }
 6:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 14;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(oscar)(zulu);
            tango = _closure1_slot12;
            zulu = tango.getMode;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot14;
            zulu = zulu.PUSH_TO_TALK;
            if(!(tango === zulu)) { _fun123107_ip = 131; continue _fun123107 }
 93:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[report];
            tango = tango.bind(entity)(zulu);
            zulu = tango.requestPermission;
            mike = _closure1_slot15;
            mike = mike.INPUT_MONITORING;
            mike = zulu.bind(tango)(mike);
 131:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    mike = function(argFoo, argBar) { // Original name: shouldImmediatelyRequestVoicePermissions
        _fun123109: for(var _fun123109_ip = 0; ; ) switch(_fun123109_ip) {
 0:
            report = argBar;
            zulu = _closure1_slot11;
            entity = zulu.getChannel;
            tango = entity.bind(zulu)(report);
            entity = null;
            zulu = entity == tango;
            entity = undefined;
            if(zulu) { _fun123109_ip = 43; continue _fun123109 }
 31:
            zulu = tango.isListenModeCapable;
            entity = zulu.bind(tango)();
 43:
            entity = !entity;
            if(entity) { _fun123109_ip = 68; continue _fun123109 }
 49:
            tango = _closure1_slot8;
            zulu = tango.isSpeaker;
            mike = argFoo;
            entity = zulu.bind(tango)(mike, report);
 68:
            return entity;
        }
    };
    var _closure1_slot20 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 9;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 10;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 11;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.InputModes;
    var _closure1_slot14 = report;
    report = 12;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.NativePermissionTypes;
    var _closure1_slot15 = report;
    report = null;
    var _closure1_slot16 = report;
    report = 16;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: VoicePermissionManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot17;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            zulu = entity.handleVoiceStateUpdates;
            mike['VOICE_STATE_UPDATES'] = zulu;
            zulu = entity.handleVoiceChannelSelect;
            mike['VOICE_CHANNEL_SELECT'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'handleVoiceChannelSelect';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun123112: for(var _fun123112_ip = 0; ; ) switch(_fun123112_ip) {
 0:
                entity = argFoo;
                entity = entity.channelId;
                mike = null;
                if(!(mike == entity)) { _fun123112_ip = 21; continue _fun123112 }
 14:
                _closure1_slot16 = mike;
 21:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'handleVoiceStateUpdates';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = entity.voiceStates;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun123114: for(var _fun123114_ip = 0; ; ) switch(_fun123114_ip) {
 0:
                    oscar = argFoo;
                    report = oscar.userId;
                    zulu = oscar.channelId;
                    tango = null;
                    if(!(tango != zulu)) { _fun123114_ip = 182; continue _fun123114 }
 22:
                    golf = _closure1_slot10;
                    entity = golf.getId;
                    entity = entity.bind(golf)();
                    if(!(entity === report)) { _fun123114_ip = 182; continue _fun123114 }
 46:
                    golf = _closure1_slot13;
                    entity = golf.getRTCConnectionId;
                    entity = entity.bind(golf)();
                    if(!(tango != entity)) { _fun123114_ip = 182; continue _fun123114 }
 64:
                    entity = _closure1_slot16;
                    if(!(entity !== zulu)) { _fun123114_ip = 182; continue _fun123114 }
 72:
                    tango = _closure1_slot20;
                    entity = undefined;
                    tango = tango.bind(entity)(report, zulu);
                    if(tango) { _fun123114_ip = 186; continue _fun123114 }
 87:
                    tango = _closure1_slot9;
                    report = tango.prototype;
                    report = Object.create(report, {constructor: {value: tango}});
                    romeo = report;
                    yankee = oscar;
                    tango = new romeo[tango](yankee, offset);
                    verify = tango instanceof Object ? tango : report;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 15;
                    report = golf[tango];
                    options = oscar.bind(entity)(report);
                    report = options.getAudienceRequestToSpeakState;
                    report = report.bind(options)(verify);
                    tango = golf[tango];
                    tango = oscar.bind(entity)(tango);
                    tango = tango.RequestToSpeakStates;
                    tango = tango.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(report === tango)) { _fun123114_ip = 182; continue _fun123114 }
 170:
                    _closure1_slot16 = zulu;
                    tango = _closure1_slot19;
                    tango = tango.bind(entity)();
 182:
                    tango = undefined;
                    return tango;
 186:
                    _closure1_slot16 = zulu;
                    mike = _closure1_slot19;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    backup = report;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : report;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_calls/VoicePermissionManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['shouldImmediatelyRequestVoicePermissions'] = mike;
    return entity;
})();