// app/modules/stage_channels/StageMusicManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
    entity = function() { // Original name: checkVoiceStates
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getVoiceChannelId;
            golfie = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 448; continue _fun00003 }
 26:
            tangon = _closure1_slot7;
            entity = tangon.getChannel;
            tangon = entity.bind(tangon)(golfie);
            if(!(zuuluu != tangon)) { _fun00004_ip = 424; continue _fun00003 }
 47:
            entity = tangon.isGuildStageVoice;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00004_ip = 424; continue _fun00003 }
 63:
            tangon = _closure1_slot8;
            entity = tangon.isSelfDeaf;
            entity = entity.bind(tangon)();
            if(entity) { _fun00004_ip = 400; continue _fun00003 }
 83:
            tangon = _closure1_slot13;
            entity = tangon.shouldPlay;
            entity = entity.bind(tangon)();
            if(entity) { _fun00004_ip = 343; continue _fun00003 }
 103:
            tangon = _closure1_slot12;
            entity = tangon.isLive;
            entity = entity.bind(tangon)(golfie);
            if(entity) { _fun00004_ip = 319; continue _fun00003 }
 124:
            tangon = _closure1_slot13;
            entity = tangon.isMuted;
            entity = entity.bind(tangon)();
            if(entity) { _fun00004_ip = 295; continue _fun00003 }
 144:
            entity = global;
            report = entity.Object;
            tangon = report.values;
            oscard = _closure1_slot10;
            entity = oscard.getVoiceStatesForChannel;
            entity = entity.bind(oscard)(golfie);
            report = tangon.bind(report)(entity);
            tangon = report.find;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.suppress;
                    entity = !entity;
                    if(!entity) { _fun00006_ip = 28; continue _fun00005 }
 15:
                    michal = zuuluu.isVoiceMuted;
                    michal = michal.bind(zuuluu)();
                    entity = !michal;
 28:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity);
            entity = zuuluu != entity;
            if(entity) { _fun00004_ip = 268; continue _fun00003 }
 204:
            zuuluu = _closure1_slot15;
            if(zuuluu) { _fun00004_ip = 268; continue _fun00003 }
 211:
            tangon = _closure1_slot16;
            oscard = _closure1_slot14;
            report = _closure1_slot8;
            zuuluu = report.getOutputVolume;
            report = zuuluu.bind(report)();
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            tangon['volume'] = zuuluu;
            tangon = _closure1_slot16;
            zuuluu = tangon.loop;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = true;
            _closure1_slot15 = zuuluu;
            _fun00004_ip = 291; continue _fun00003;
 268:
            if(!entity) { _fun00004_ip = 291; continue _fun00003 }
 271:
            zuuluu = _closure1_slot16;
            entity = zuuluu.pause;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
 291:
            entity = undefined;
            return entity;
 295:
            zuuluu = _closure1_slot16;
            entity = zuuluu.pause;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 319:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 343:
            tangon = _closure1_slot16;
            report = _closure1_slot14;
            zuuluu = _closure1_slot8;
            entity = zuuluu.getOutputVolume;
            zuuluu = entity.bind(zuuluu)();
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            tangon['volume'] = zuuluu;
            tangon = _closure1_slot16;
            zuuluu = tangon.loop;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = true;
            _closure1_slot15 = zuuluu;
            return entity;
 400:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 424:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 448:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    yankee = report.bind(entity)(tangon);
    var _closure1_slot8 = yankee;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    option = function(argFoo) { // Original name: convertVolume
        michal = argFoo;
        entity = 400;
        entity = michal / entity;
        return entity;
    };
    var _closure1_slot14 = option;
    tangon = false;
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = golfie[tangon];
    offset = oscard.bind(entity)(tangon);
    verify = offset.createSound;
    tangon = yankee.getOutputVolume;
    tangon = tangon.bind(yankee)();
    option = option.bind(entity)(tangon);
    tangon = 'stage_waiting';
    tangon = verify.bind(offset)(tangon, tangon, option);
    var _closure1_slot16 = tangon;
    tangon = 16;
    tangon = golfie[tangon];
    report = report.bind(entity)(tangon);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: StageMusicManager
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot2;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot5;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot17;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 84; continue _fun00007 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00008_ip = 118; continue _fun00007;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot5;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = {};
                zuuluu = entity.handleVoiceChannelSelect;
                michal['VOICE_CHANNEL_SELECT'] = zuuluu;
                zuuluu = entity.handleLogout;
                michal['LOGOUT'] = zuuluu;
                zuuluu = entity.handleMute;
                michal['STAGE_MUSIC_MUTE'] = zuuluu;
                zuuluu = entity.handlePlay;
                michal['STAGE_MUSIC_PLAY'] = zuuluu;
                zuuluu = entity.handleVoiceStateUpdates;
                michal['VOICE_STATE_UPDATES'] = zuuluu;
                zuuluu = entity.handleSetOutputVolume;
                michal['AUDIO_SET_OUTPUT_VOLUME'] = zuuluu;
                zuuluu = entity.handleToggleSelfDeaf;
                michal['AUDIO_TOGGLE_SELF_DEAF'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'handleVoiceChannelSelect';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                report = entity.channelId;
                michal = null;
                if(!(michal == report)) { _fun00010_ip = 39; continue _fun00009 }
 14:
                tangon = _closure1_slot16;
                entity = tangon.stop;
                entity = entity.bind(tangon)();
                entity = false;
                _closure1_slot15 = entity;
                _fun00010_ip = 105; continue _fun00009;
 39:
                tangon = _closure1_slot7;
                zuuluu = tangon.getChannel;
                zuuluu = zuuluu.bind(tangon)(report);
                if(!(michal != zuuluu)) { _fun00010_ip = 73; continue _fun00009 }
 60:
                michal = zuuluu.isGuildStageVoice;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00010_ip = 95; continue _fun00009 }
 73:
                zuuluu = _closure1_slot16;
                michal = zuuluu.stop;
                michal = michal.bind(zuuluu)();
                michal = false;
                _closure1_slot15 = michal;
                _fun00010_ip = 105; continue _fun00009;
 95:
                michal = _closure1_slot18;
                entity = undefined;
                entity = michal.bind(entity)();
 105:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'handleLogout';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handlePlay';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                michal = entity.play;
                if(michal) { _fun00012_ip = 37; continue _fun00011 }
 15:
                zuuluu = _closure1_slot16;
                michal = zuuluu.pause;
                michal = michal.bind(zuuluu)();
                michal = false;
                _closure1_slot15 = michal;
                _fun00012_ip = 47; continue _fun00011;
 37:
                michal = _closure1_slot18;
                entity = undefined;
                entity = michal.bind(entity)();
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleMute';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                entity = entity.muted;
                if(entity) { _fun00014_ip = 27; continue _fun00013 }
 15:
                zuuluu = _closure1_slot18;
                entity = undefined;
                entity = zuuluu.bind(entity)();
                _fun00014_ip = 47; continue _fun00013;
 27:
                zuuluu = _closure1_slot16;
                entity = zuuluu.pause;
                entity = entity.bind(zuuluu)();
                entity = false;
                _closure1_slot15 = entity;
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleVoiceStateUpdates';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot18;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'handleSetOutputVolume';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            tangon = entity.volume;
            zuuluu = _closure1_slot16;
            michal = _closure1_slot14;
            entity = undefined;
            michal = michal.bind(entity)(tangon);
            zuuluu['volume'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'handleToggleSelfDeaf';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = _closure1_slot18;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    kiloes = report;
    tangon = new kiloes[tangon](backup);
    tangon = tangon instanceof Object ? tangon : report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/stage_channels/StageMusicManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: useShowStageMusicMuteButton
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            yankee = argFoo;
            var _closure2_slot0 = yankee;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 13;
            entity = verify[oscard];
            golfie = undefined;
            offset = option.bind(golfie)(entity);
            tangon = offset.useStateFromStores;
            entity = _closure1_slot9;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot9;
                entity = michal.getVoiceChannelId;
                michal = entity.bind(michal)();
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = tangon.bind(offset)(michal, entity);
            michal = 14;
            michal = verify[michal];
            offset = option.bind(golfie)(michal);
            tangon = offset.useStageParticipants;
            michal = 15;
            michal = verify[michal];
            michal = option.bind(golfie)(michal);
            michal = michal.StageChannelParticipantNamedIndex;
            michal = michal.SPEAKER;
            offset = tangon.bind(offset)(yankee, michal);
            tangon = offset.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.voiceState;
                entity = michal.isVoiceMuted;
                entity = entity.bind(michal)();
                entity = !entity;
                return entity;
            };
            michal = tangon.bind(offset)(michal);
            tangon = null;
            michal = tangon != michal;
            oscard = verify[oscard];
            golfie = option.bind(golfie)(oscard);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot12;
            report = new Array(1);
            report[0] = option;
            zuuluu = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getStageInstanceByChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            if(!entity) { _fun00016_ip = 182; continue _fun00015 }
 178:
            entity = tangon == zuuluu;
 182:
            if(!entity) { _fun00016_ip = 188; continue _fun00015 }
 185:
            entity = !michal;
 188:
            return entity;
        }
    };
    zuuluu['useShowStageMusicMuteButton'] = tangon;
    michal = function(argFoo) { // Original name: shouldShowStageMusicMuteButton
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot9;
            entity = michal.getVoiceChannelId;
            entity = entity.bind(michal)();
            entity = entity === oscard;
            report = _closure1_slot11;
            tangon = report.getMutableParticipants;
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 15;
            golfie = golfie[michal];
            michal = undefined;
            michal = option.bind(michal)(golfie);
            michal = michal.StageChannelParticipantNamedIndex;
            michal = michal.SPEAKER;
            report = tangon.bind(report)(oscard, michal);
            tangon = report.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.voiceState;
                entity = michal.isVoiceMuted;
                entity = entity.bind(michal)();
                entity = !entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            tangon = null;
            michal = tangon != michal;
            report = _closure1_slot12;
            zuuluu = report.getStageInstanceByChannel;
            zuuluu = zuuluu.bind(report)(oscard);
            if(!entity) { _fun00018_ip = 122; continue _fun00017 }
 118:
            entity = tangon == zuuluu;
 122:
            if(!entity) { _fun00018_ip = 128; continue _fun00017 }
 125:
            entity = !michal;
 128:
            return entity;
        }
    };
    zuuluu['shouldShowStageMusicMuteButton'] = michal;
    return entity;
})();