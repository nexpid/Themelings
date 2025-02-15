// app/stores/PermissionVADStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun108891: for(var _fun108891_ip = 0; ; ) switch(_fun108891_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun108891_ip = 51; continue _fun108891 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun108891_ip = 92; continue _fun108891;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun108891_ip = 71; continue _fun108891 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
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
        _fun108892: for(var _fun108892_ip = 0; ; ) switch(_fun108892_ip) {
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
            _fun108892_ip = 76; continue _fun108892;
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
    verify = function() { // Original name: handleUpdateVADPermission
        _fun108895: for(var _fun108895_ip = 0; ; ) switch(_fun108895_ip) {
 0:
            mike = _closure1_slot11;
            entity = mike.getChannelId;
            tango = entity.bind(mike)();
            oscar = null;
            mike = oscar == tango;
            entity = true;
            if(mike) { _fun108895_ip = 225; continue _fun108895 }
 31:
            zulu = _closure1_slot8;
            mike = zulu.getChannel;
            verify = mike.bind(zulu)(tango);
            golf = _closure1_slot12;
            tango = golf.getVoiceState;
            mike = oscar == verify;
            zulu = undefined;
            if(mike) { _fun108895_ip = 74; continue _fun108895 }
 64:
            mike = verify.getGuildId;
            zulu = mike.bind(verify)();
 74:
            options = _closure1_slot7;
            mike = options.getId;
            mike = mike.bind(options)();
            tango = tango.bind(golf)(zulu, mike);
            zulu = _closure1_slot9;
            mike = zulu.getMode;
            zulu = mike.bind(zulu)();
            mike = _closure1_slot13;
            mike = mike.VOICE_ACTIVITY;
            mike = zulu !== mike;
            if(mike) { _fun108895_ip = 129; continue _fun108895 }
 125:
            mike = oscar == verify;
 129:
            if(mike) { _fun108895_ip = 142; continue _fun108895 }
 132:
            zulu = verify.isPrivate;
            mike = zulu.bind(verify)();
 142:
            if(mike) { _fun108895_ip = 155; continue _fun108895 }
 145:
            zulu = verify.isGuildStageVoice;
            mike = zulu.bind(verify)();
 155:
            if(mike) { _fun108895_ip = 184; continue _fun108895 }
 158:
            options = _closure1_slot10;
            golf = options.can;
            zulu = _closure1_slot14;
            zulu = zulu.USE_VAD;
            mike = golf.bind(options)(zulu, verify);
 184:
            if(mike) { _fun108895_ip = 222; continue _fun108895 }
 187:
            zulu = oscar == tango;
            if(zulu) { _fun108895_ip = 206; continue _fun108895 }
 194:
            golf = tango.suppress;
            golf = !golf;
            zulu = !golf;
 206:
            if(zulu) { _fun108895_ip = 219; continue _fun108895 }
 209:
            tango = tango.requestToSpeakTimestamp;
            zulu = oscar != tango;
 219:
            mike = zulu;
 222:
            entity = mike;
 225:
            mike = _closure1_slot15;
            if(!(mike !== entity)) { _fun108895_ip = 296; continue _fun108895 }
 233:
            _closure1_slot16 = entity;
            _closure1_slot15 = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'SET_VAD_PERMISSION';
            mike['type'] = oscar;
            report = _closure1_slot15;
            mike['hasPermission'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
 296:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot19 = verify;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    options = {};
    mike = true;
    options['value'] = mike;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 8;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 9;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 10;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot12 = options;
    options = 11;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.InputModes;
    var _closure1_slot13 = offset;
    options = options.Permissions;
    var _closure1_slot14 = options;
    var _closure1_slot15 = mike;
    var _closure1_slot16 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PermissionVADStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot17;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscar = this;
            report = oscar.waitFor;
            offset = _closure1_slot10;
            verify = _closure1_slot9;
            options = _closure1_slot11;
            golf = _closure1_slot12;
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'shouldShowWarning';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            entity = !entity;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'canUseVoiceActivity';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'PermissionVADStore';
    options['displayName'] = mike;
    mike = 12;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    mike['RTC_CONNECTION_STATE'] = verify;
    mike['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = verify;
    mike['AUDIO_SET_MODE'] = verify;
    mike['CHANNEL_UPDATES'] = verify;
    mike['THREAD_UPDATE'] = verify;
    mike['GUILD_ROLE_UPDATE'] = verify;
    mike['GUILD_MEMBER_UPDATE'] = verify;
    mike['IMPERSONATE_UPDATE'] = verify;
    mike['IMPERSONATE_STOP'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        zulu = entity.voiceStates;
        mike = zulu.some;
        entity = function(argFoo) {
            _fun108902: for(var _fun108902_ip = 0; ; ) switch(_fun108902_ip) {
 0:
                entity = argFoo;
                zulu = entity.userId;
                tango = _closure1_slot7;
                entity = tango.getId;
                entity = entity.bind(tango)();
                entity = zulu === entity;
                if(!entity) { _fun108902_ip = 42; continue _fun108902 }
 32:
                zulu = _closure1_slot19;
                mike = undefined;
                entity = zulu.bind(mike)();
 42:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['VOICE_STATE_UPDATES'] = verify;
    verify = function() { // Original name: handleUnclearWarning
        entity = _closure1_slot15;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    mike['AUDIO_TOGGLE_SELF_MUTE'] = verify;
    tango = function() { // Original name: handleClearWarning
        entity = true;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    mike['PERMISSION_CLEAR_VAD_WARNING'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/PermissionVADStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();