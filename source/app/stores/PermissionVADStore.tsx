// app/stores/PermissionVADStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot18;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    verify = function() { // Original name: handleUpdateVADPermission
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot11;
            entity = michal.getChannelId;
            tangon = entity.bind(michal)();
            oscard = null;
            michal = oscard == tangon;
            entity = true;
            if(michal) { _fun00006_ip = 225; continue _fun00005 }
 31:
            zuuluu = _closure1_slot8;
            michal = zuuluu.getChannel;
            verify = michal.bind(zuuluu)(tangon);
            golfie = _closure1_slot12;
            tangon = golfie.getVoiceState;
            michal = oscard == verify;
            zuuluu = undefined;
            if(michal) { _fun00006_ip = 74; continue _fun00005 }
 64:
            michal = verify.getGuildId;
            zuuluu = michal.bind(verify)();
 74:
            option = _closure1_slot7;
            michal = option.getId;
            michal = michal.bind(option)();
            tangon = tangon.bind(golfie)(zuuluu, michal);
            zuuluu = _closure1_slot9;
            michal = zuuluu.getMode;
            zuuluu = michal.bind(zuuluu)();
            michal = _closure1_slot13;
            michal = michal.VOICE_ACTIVITY;
            michal = zuuluu !== michal;
            if(michal) { _fun00006_ip = 129; continue _fun00005 }
 125:
            michal = oscard == verify;
 129:
            if(michal) { _fun00006_ip = 142; continue _fun00005 }
 132:
            zuuluu = verify.isPrivate;
            michal = zuuluu.bind(verify)();
 142:
            if(michal) { _fun00006_ip = 155; continue _fun00005 }
 145:
            zuuluu = verify.isGuildStageVoice;
            michal = zuuluu.bind(verify)();
 155:
            if(michal) { _fun00006_ip = 184; continue _fun00005 }
 158:
            option = _closure1_slot10;
            golfie = option.can;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.USE_VAD;
            michal = golfie.bind(option)(zuuluu, verify);
 184:
            if(michal) { _fun00006_ip = 222; continue _fun00005 }
 187:
            zuuluu = oscard == tangon;
            if(zuuluu) { _fun00006_ip = 206; continue _fun00005 }
 194:
            golfie = tangon.suppress;
            golfie = !golfie;
            zuuluu = !golfie;
 206:
            if(zuuluu) { _fun00006_ip = 219; continue _fun00005 }
 209:
            tangon = tangon.requestToSpeakTimestamp;
            zuuluu = oscard != tangon;
 219:
            michal = zuuluu;
 222:
            entity = michal;
 225:
            michal = _closure1_slot15;
            if(!(michal !== entity)) { _fun00006_ip = 296; continue _fun00005 }
 233:
            _closure1_slot16 = entity;
            _closure1_slot15 = entity;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'SET_VAD_PERMISSION';
            michal['type'] = oscard;
            report = _closure1_slot15;
            michal['hasPermission'] = report;
            michal = zuuluu.bind(tangon)(michal);
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
    option = {};
    michal = true;
    option['value'] = michal;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 11;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.InputModes;
    var _closure1_slot13 = offset;
    option = option.Permissions;
    var _closure1_slot14 = option;
    var _closure1_slot15 = michal;
    var _closure1_slot16 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: PermissionVADStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot17;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscard = this;
            report = oscard.waitFor;
            offset = _closure1_slot10;
            verify = _closure1_slot9;
            option = _closure1_slot11;
            golfie = _closure1_slot12;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'shouldShowWarning';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            entity = !entity;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'canUseVoiceActivity';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'PermissionVADStore';
    option['displayName'] = michal;
    michal = 12;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    michal['RTC_CONNECTION_STATE'] = verify;
    michal['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = verify;
    michal['AUDIO_SET_MODE'] = verify;
    michal['CHANNEL_UPDATES'] = verify;
    michal['THREAD_UPDATE'] = verify;
    michal['GUILD_ROLE_UPDATE'] = verify;
    michal['GUILD_MEMBER_UPDATE'] = verify;
    michal['IMPERSONATE_UPDATE'] = verify;
    michal['IMPERSONATE_STOP'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        zuuluu = entity.voiceStates;
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.userId;
                tangon = _closure1_slot7;
                entity = tangon.getId;
                entity = entity.bind(tangon)();
                entity = zuuluu === entity;
                if(!entity) { _fun00008_ip = 42; continue _fun00007 }
 32:
                zuuluu = _closure1_slot19;
                michal = undefined;
                entity = zuuluu.bind(michal)();
 42:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['VOICE_STATE_UPDATES'] = verify;
    verify = function() { // Original name: handleUnclearWarning
        entity = _closure1_slot15;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    michal['AUDIO_TOGGLE_SELF_MUTE'] = verify;
    tangon = function() { // Original name: handleClearWarning
        entity = true;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    michal['PERMISSION_CLEAR_VAD_WARNING'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/PermissionVADStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();