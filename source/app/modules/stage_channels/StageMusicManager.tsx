// app/modules/stage_channels/StageMusicManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun102942: for(var _fun102942_ip = 0; ; ) switch(_fun102942_ip) {
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
            if(entity) { _fun102942_ip = 51; continue _fun102942 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun102942_ip = 92; continue _fun102942;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun102942_ip = 71; continue _fun102942 }
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
        _fun102943: for(var _fun102943_ip = 0; ; ) switch(_fun102943_ip) {
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
            _fun102943_ip = 76; continue _fun102943;
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
    entity = function() { // Original name: checkVoiceStates
        _fun102946: for(var _fun102946_ip = 0; ; ) switch(_fun102946_ip) {
 0:
            zulu = _closure1_slot9;
            entity = zulu.getVoiceChannelId;
            golf = entity.bind(zulu)();
            zulu = null;
            if(!(zulu != golf)) { _fun102946_ip = 447; continue _fun102946 }
 26:
            tango = _closure1_slot7;
            entity = tango.getChannel;
            tango = entity.bind(tango)(golf);
            if(!(zulu != tango)) { _fun102946_ip = 423; continue _fun102946 }
 47:
            entity = tango.isGuildStageVoice;
            entity = entity.bind(tango)();
            if(!entity) { _fun102946_ip = 423; continue _fun102946 }
 63:
            tango = _closure1_slot8;
            entity = tango.isSelfDeaf;
            entity = entity.bind(tango)();
            if(entity) { _fun102946_ip = 399; continue _fun102946 }
 83:
            tango = _closure1_slot13;
            entity = tango.shouldPlay;
            entity = entity.bind(tango)();
            if(entity) { _fun102946_ip = 342; continue _fun102946 }
 103:
            tango = _closure1_slot12;
            entity = tango.isLive;
            entity = entity.bind(tango)(golf);
            if(entity) { _fun102946_ip = 318; continue _fun102946 }
 124:
            tango = _closure1_slot13;
            entity = tango.isMuted;
            entity = entity.bind(tango)();
            if(entity) { _fun102946_ip = 294; continue _fun102946 }
 144:
            entity = global;
            report = entity.Object;
            tango = report.values;
            oscar = _closure1_slot10;
            entity = oscar.getVoiceStatesForChannel;
            entity = entity.bind(oscar)(golf);
            report = tango.bind(report)(entity);
            tango = report.find;
            entity = function(argFoo) {
                _fun102947: for(var _fun102947_ip = 0; ; ) switch(_fun102947_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.suppress;
                    entity = !entity;
                    if(!entity) { _fun102947_ip = 28; continue _fun102947 }
 15:
                    mike = zulu.isVoiceMuted;
                    mike = mike.bind(zulu)();
                    entity = !mike;
 28:
                    return entity;
                }
            };
            entity = tango.bind(report)(entity);
            entity = zulu != entity;
            if(entity) { _fun102946_ip = 267; continue _fun102946 }
 203:
            zulu = _closure1_slot15;
            if(zulu) { _fun102946_ip = 267; continue _fun102946 }
 210:
            tango = _closure1_slot16;
            oscar = _closure1_slot14;
            report = _closure1_slot8;
            zulu = report.getOutputVolume;
            report = zulu.bind(report)();
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            tango['volume'] = zulu;
            tango = _closure1_slot16;
            zulu = tango.loop;
            zulu = zulu.bind(tango)();
            zulu = true;
            _closure1_slot15 = zulu;
            _fun102946_ip = 290; continue _fun102946;
 267:
            if(!entity) { _fun102946_ip = 290; continue _fun102946 }
 270:
            zulu = _closure1_slot16;
            entity = zulu.pause;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
 290:
            entity = undefined;
            return entity;
 294:
            zulu = _closure1_slot16;
            entity = zulu.pause;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 318:
            zulu = _closure1_slot16;
            entity = zulu.stop;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 342:
            tango = _closure1_slot16;
            report = _closure1_slot14;
            zulu = _closure1_slot8;
            entity = zulu.getOutputVolume;
            zulu = entity.bind(zulu)();
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            tango['volume'] = zulu;
            tango = _closure1_slot16;
            zulu = tango.loop;
            zulu = zulu.bind(tango)();
            zulu = true;
            _closure1_slot15 = zulu;
            return entity;
 399:
            zulu = _closure1_slot16;
            entity = zulu.stop;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 423:
            zulu = _closure1_slot16;
            entity = zulu.stop;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
 447:
            zulu = _closure1_slot16;
            entity = zulu.stop;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = golf[tango];
    yankee = report.bind(entity)(tango);
    var _closure1_slot8 = yankee;
    tango = 7;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 8;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 9;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 10;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 11;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot13 = tango;
    options = function(argFoo) { // Original name: convertVolume
        mike = argFoo;
        entity = 400;
        entity = mike / entity;
        return entity;
    };
    var _closure1_slot14 = options;
    tango = false;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = golf[tango];
    offset = oscar.bind(entity)(tango);
    verify = offset.createSound;
    tango = yankee.getOutputVolume;
    tango = tango.bind(yankee)();
    options = options.bind(entity)(tango);
    tango = 'stage_waiting';
    tango = verify.bind(offset)(tango, tango, options);
    var _closure1_slot16 = tango;
    tango = 16;
    tango = golf[tango];
    report = report.bind(entity)(tango);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: StageMusicManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot2;
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
            zulu = entity.handleVoiceChannelSelect;
            mike['VOICE_CHANNEL_SELECT'] = zulu;
            zulu = entity.handleLogout;
            mike['LOGOUT'] = zulu;
            zulu = entity.handleMute;
            mike['STAGE_MUSIC_MUTE'] = zulu;
            zulu = entity.handlePlay;
            mike['STAGE_MUSIC_PLAY'] = zulu;
            zulu = entity.handleVoiceStateUpdates;
            mike['VOICE_STATE_UPDATES'] = zulu;
            zulu = entity.handleSetOutputVolume;
            mike['AUDIO_SET_OUTPUT_VOLUME'] = zulu;
            zulu = entity.handleToggleSelfDeaf;
            mike['AUDIO_TOGGLE_SELF_DEAF'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'handleVoiceChannelSelect';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun102951: for(var _fun102951_ip = 0; ; ) switch(_fun102951_ip) {
 0:
                entity = argFoo;
                report = entity.channelId;
                mike = null;
                if(!(mike == report)) { _fun102951_ip = 39; continue _fun102951 }
 14:
                tango = _closure1_slot16;
                entity = tango.stop;
                entity = entity.bind(tango)();
                entity = false;
                _closure1_slot15 = entity;
                _fun102951_ip = 105; continue _fun102951;
 39:
                tango = _closure1_slot7;
                zulu = tango.getChannel;
                zulu = zulu.bind(tango)(report);
                if(!(mike != zulu)) { _fun102951_ip = 73; continue _fun102951 }
 60:
                mike = zulu.isGuildStageVoice;
                mike = mike.bind(zulu)();
                if(mike) { _fun102951_ip = 95; continue _fun102951 }
 73:
                zulu = _closure1_slot16;
                mike = zulu.stop;
                mike = mike.bind(zulu)();
                mike = false;
                _closure1_slot15 = mike;
                _fun102951_ip = 105; continue _fun102951;
 95:
                mike = _closure1_slot19;
                entity = undefined;
                entity = mike.bind(entity)();
 105:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'handleLogout';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot16;
            entity = zulu.stop;
            entity = entity.bind(zulu)();
            entity = false;
            _closure1_slot15 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handlePlay';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun102953: for(var _fun102953_ip = 0; ; ) switch(_fun102953_ip) {
 0:
                entity = argFoo;
                mike = entity.play;
                if(mike) { _fun102953_ip = 37; continue _fun102953 }
 15:
                zulu = _closure1_slot16;
                mike = zulu.pause;
                mike = mike.bind(zulu)();
                mike = false;
                _closure1_slot15 = mike;
                _fun102953_ip = 47; continue _fun102953;
 37:
                mike = _closure1_slot19;
                entity = undefined;
                entity = mike.bind(entity)();
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleMute';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun102954: for(var _fun102954_ip = 0; ; ) switch(_fun102954_ip) {
 0:
                entity = argFoo;
                entity = entity.muted;
                if(entity) { _fun102954_ip = 27; continue _fun102954 }
 15:
                zulu = _closure1_slot19;
                entity = undefined;
                entity = zulu.bind(entity)();
                _fun102954_ip = 47; continue _fun102954;
 27:
                zulu = _closure1_slot16;
                entity = zulu.pause;
                entity = entity.bind(zulu)();
                entity = false;
                _closure1_slot15 = entity;
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleVoiceStateUpdates';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot19;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'handleSetOutputVolume';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            tango = entity.volume;
            zulu = _closure1_slot16;
            mike = _closure1_slot14;
            entity = undefined;
            mike = mike.bind(entity)(tango);
            zulu['volume'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handleToggleSelfDeaf';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = _closure1_slot19;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    kilo = report;
    tango = new kilo[tango](backup);
    tango = tango instanceof Object ? tango : report;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stage_channels/StageMusicManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: useShowStageMusicMuteButton
        _fun102958: for(var _fun102958_ip = 0; ; ) switch(_fun102958_ip) {
 0:
            yankee = argFoo;
            var _closure2_slot0 = yankee;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            oscar = 13;
            entity = verify[oscar];
            golf = undefined;
            offset = options.bind(golf)(entity);
            tango = offset.useStateFromStores;
            entity = _closure1_slot9;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot9;
                entity = mike.getVoiceChannelId;
                mike = entity.bind(mike)();
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = tango.bind(offset)(mike, entity);
            mike = 14;
            mike = verify[mike];
            offset = options.bind(golf)(mike);
            tango = offset.useStageParticipants;
            mike = 15;
            mike = verify[mike];
            mike = options.bind(golf)(mike);
            mike = mike.StageChannelParticipantNamedIndex;
            mike = mike.SPEAKER;
            offset = tango.bind(offset)(yankee, mike);
            tango = offset.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.voiceState;
                entity = mike.isVoiceMuted;
                entity = entity.bind(mike)();
                entity = !entity;
                return entity;
            };
            mike = tango.bind(offset)(mike);
            tango = null;
            mike = tango != mike;
            oscar = verify[oscar];
            golf = options.bind(golf)(oscar);
            oscar = golf.useStateFromStores;
            options = _closure1_slot12;
            report = new Array(1);
            report[0] = options;
            zulu = function() {
                zulu = _closure1_slot12;
                mike = zulu.getStageInstanceByChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = oscar.bind(golf)(report, zulu);
            if(!entity) { _fun102958_ip = 181; continue _fun102958 }
 177:
            entity = tango == zulu;
 181:
            if(!entity) { _fun102958_ip = 187; continue _fun102958 }
 184:
            entity = !mike;
 187:
            return entity;
        }
    };
    zulu['useShowStageMusicMuteButton'] = tango;
    mike = function(argFoo) { // Original name: shouldShowStageMusicMuteButton
        _fun102962: for(var _fun102962_ip = 0; ; ) switch(_fun102962_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot9;
            entity = mike.getVoiceChannelId;
            entity = entity.bind(mike)();
            entity = entity === oscar;
            report = _closure1_slot11;
            tango = report.getMutableParticipants;
            options = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 15;
            golf = golf[mike];
            mike = undefined;
            mike = options.bind(mike)(golf);
            mike = mike.StageChannelParticipantNamedIndex;
            mike = mike.SPEAKER;
            report = tango.bind(report)(oscar, mike);
            tango = report.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.voiceState;
                entity = mike.isVoiceMuted;
                entity = entity.bind(mike)();
                entity = !entity;
                return entity;
            };
            mike = tango.bind(report)(mike);
            tango = null;
            mike = tango != mike;
            report = _closure1_slot12;
            zulu = report.getStageInstanceByChannel;
            zulu = zulu.bind(report)(oscar);
            if(!entity) { _fun102962_ip = 121; continue _fun102962 }
 117:
            entity = tango == zulu;
 121:
            if(!entity) { _fun102962_ip = 127; continue _fun102962 }
 124:
            entity = !mike;
 127:
            return entity;
        }
    };
    zulu['shouldShowStageMusicMuteButton'] = mike;
    return entity;
})();