// app/modules/stage_channels/StageMusicManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
    entity = function() { // Original name: checkVoiceStates
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getVoiceChannelId;
            golfie = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00006_ip = 447; continue _fun00005 }
 26:
            tangon = _closure1_slot7;
            entity = tangon.getChannel;
            tangon = entity.bind(tangon)(golfie);
            if(!(zuuluu != tangon)) { _fun00006_ip = 423; continue _fun00005 }
 47:
            entity = tangon.isGuildStageVoice;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00006_ip = 423; continue _fun00005 }
 63:
            tangon = _closure1_slot8;
            entity = tangon.isSelfDeaf;
            entity = entity.bind(tangon)();
            if(entity) { _fun00006_ip = 399; continue _fun00005 }
 83:
            tangon = _closure1_slot13;
            entity = tangon.shouldPlay;
            entity = entity.bind(tangon)();
            if(entity) { _fun00006_ip = 342; continue _fun00005 }
 103:
            tangon = _closure1_slot12;
            entity = tangon.isLive;
            entity = entity.bind(tangon)(golfie);
            if(entity) { _fun00006_ip = 318; continue _fun00005 }
 124:
            tangon = _closure1_slot13;
            entity = tangon.isMuted;
            entity = entity.bind(tangon)();
            if(entity) { _fun00006_ip = 294; continue _fun00005 }
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
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.suppress;
                    entity = !entity;
                    if(!entity) { _fun00008_ip = 28; continue _fun00007 }
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
            if(entity) { _fun00006_ip = 267; continue _fun00005 }
 203:
            zuuluu = _closure1_slot15;
            if(zuuluu) { _fun00006_ip = 267; continue _fun00005 }
 210:
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
            _fun00006_ip = 290; continue _fun00005;
 267:
            if(!entity) { _fun00006_ip = 290; continue _fun00005 }
 270:
            zuuluu = _closure1_slot16;
            entity = zuuluu.pause;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
 290:
            entity = undefined;
            return entity;
 294:
            zuuluu = _closure1_slot16;
            entity = zuuluu.pause;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 318:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 342:
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
 399:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 423:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 447:
            zuuluu = _closure1_slot16;
            entity = zuuluu.stop;
            entity = entity.bind(zuuluu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
            report = this;
            offset = 0;
            oscard = copyRestArgs(offset);
            michal = _closure1_slot2;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot17;
            entity = new Array(0);
            offset = entity;
            verify = oscard;
            option = 0;
            oscard = arraySpread(offset, verify, option);
            entity = michal.bind(zuuluu)(report, tangon, entity);
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
                michal = _closure1_slot19;
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
                michal = _closure1_slot19;
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
                zuuluu = _closure1_slot19;
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
            michal = _closure1_slot19;
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
            michal = _closure1_slot19;
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
            if(!entity) { _fun00016_ip = 181; continue _fun00015 }
 177:
            entity = tangon == zuuluu;
 181:
            if(!entity) { _fun00016_ip = 187; continue _fun00015 }
 184:
            entity = !michal;
 187:
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
            if(!entity) { _fun00018_ip = 121; continue _fun00017 }
 117:
            entity = tangon == zuuluu;
 121:
            if(!entity) { _fun00018_ip = 127; continue _fun00017 }
 124:
            entity = !michal;
 127:
            return entity;
        }
    };
    zuuluu['shouldShowStageMusicMuteButton'] = michal;
    return entity;
})();