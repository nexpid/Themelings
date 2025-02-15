// discord_common/js/packages/media-engine/webrtc/BaseWebRTCConnection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot22;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot22;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot24;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
 70: // try_end0
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    romeo = 0;
    mike = golf[romeo];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    yankee = 1;
    mike = golf[yankee];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    offset = 2;
    mike = golf[offset];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    verify = 3;
    mike = golf[verify];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.MEDIA_SINK_WANTS_PROPERTIES;
    var _closure1_slot10 = report;
    report = mike.PING_INTERVAL;
    var _closure1_slot11 = report;
    report = mike.ConnectionStates;
    var _closure1_slot12 = report;
    report = mike.SpeakingFlags;
    var _closure1_slot13 = report;
    report = mike.DEFAULT_VOLUME;
    var _closure1_slot14 = report;
    report = mike.DEFAULT_DEVICE_ID;
    var _closure1_slot15 = report;
    report = mike.MediaEngineContextTypes;
    var _closure1_slot16 = report;
    report = mike.DEFAULT_STREAM_VOLUME;
    var _closure1_slot17 = report;
    mike = mike.DEFAULT_PRIORITY_SPEAKER_DUCKING;
    var _closure1_slot18 = mike;
    mike = 8;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.BROWSER_SUPPORTS_DIAGNOSTICS;
    var _closure1_slot19 = mike;
    mike = {};
    mike['AUDIO_BITRATE'] = romeo;
    report = 'AUDIO_BITRATE';
    mike[romeo] = report;
    mike['VIDEO_RESOLUTION_SCALE'] = yankee;
    report = 'VIDEO_RESOLUTION_SCALE';
    mike[yankee] = report;
    mike['VIDEO_BITRATE'] = offset;
    report = 'VIDEO_BITRATE';
    mike[offset] = report;
    mike['VIDEO_FRAMERATE'] = verify;
    report = 'VIDEO_FRAMERATE';
    mike[verify] = report;
    var _closure1_slot20 = mike;
    report = 16;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: BaseWebRTCConnection
            report = argBaz;
            options = this;
            entity = _closure1_slot4;
            golf = _closure2_slot1;
            oscar = undefined;
            entity = entity.bind(oscar)(options, golf);
            zulu = _closure1_slot23;
            entity = new Array(2);
            verify = argFoo;
            entity[0] = verify;
            verify = argBar;
            entity[1] = verify;
            entity = zulu.bind(oscar)(options, golf, entity);
            var _closure3_slot0 = entity;
            zulu = false;
            entity['silenced'] = zulu;
            entity['interacted'] = zulu;
            zulu = _closure1_slot14;
            entity['outputVolume'] = zulu;
            zulu = _closure1_slot15;
            entity['sinkId'] = zulu;
            zulu = 0;
            entity['lastPingTime'] = zulu;
            zulu = {};
            entity['outputs'] = zulu;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            options = 9;
            options = golf[options];
            options = zulu.bind(oscar)(options);
            options = options.WebRTCStatsCalculator;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            backup = verify;
            options = new backup[options](foxtrot);
            options = options instanceof Object ? options : verify;
            entity['webrtcStats'] = options;
            options = -100;
            entity['silenceThreshold'] = options;
            options = global;
            verify = options.Set;
            offset = verify.prototype;
            offset = Object.create(offset, {constructor: {value: verify}});
            backup = offset;
            verify = new backup[verify](foxtrot);
            verify = verify instanceof Object ? verify : offset;
            entity['canHavePriority'] = verify;
            options = options.Set;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            backup = verify;
            options = new backup[options](foxtrot);
            options = options instanceof Object ? options : verify;
            entity['prioritySpeakers'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setEchoCancellation;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setEchoCancellation'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setNoiseSuppression;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setNoiseSuppression'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setNoiseCancellation;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setNoiseCancellation'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setAutomaticGainControl;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setAutomaticGainControl'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setAudioSource;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setAudioSource'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setVideoSource;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setVideoSource'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setDesktop;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setDesktopInput'] = options;
            options = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.input;
                mike = zulu.setPTTActive;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['setForceAudioInput'] = options;
            options = function(argFoo) {
                report = argFoo;
                tango = _closure3_slot0;
                tango['selfMute'] = report;
                mike = tango.input;
                entity = mike.setMute;
                entity = entity.bind(mike)(report);
                zulu = tango.emit;
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = oscar.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                mike = mike.Mute;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            };
            entity['setSelfMute'] = options;
            options = function() {
                mike = _closure3_slot0;
                entity = mike.updateVideoQuality;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['handleAddVideoTrack'] = options;
            options = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                entity = entity.BaseConnectionEvent;
                mike = entity.AudioPermission;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity['handleAudioPermission'] = options;
            options = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                entity = entity.BaseConnectionEvent;
                mike = entity.VideoPermission;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity['handleVideoPermission'] = options;
            options = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    verify = _closure3_slot0;
                    options = verify.emit;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    mike = mike.BaseConnectionEvent;
                    golf = mike.Video;
                    oscar = verify.userId;
                    report = verify.audioSSRC;
                    mike = verify.videoStreamParameters;
                    tango = 0;
                    mike = mike[tango];
                    zulu = mike.ssrc;
                    mike = verify.videoStreamParameters;
                    mike = mike[tango];
                    mike = mike.rtxSsrc;
                    offset = null;
                    offset = offset != mike;
                    if(!offset) { _fun00012_ip = 107; continue _fun00011 }
 104:
                    tango = mike;
 107:
                    entity = _closure3_slot0;
                    yankee = entity.videoStreamParameters;
                    kilo = argFoo;
                    result = verify;
                    output = golf;
                    sizing = oscar;
                    backup = report;
                    foxtrot = zulu;
                    romeo = tango;
                    entity = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset);
                    return entity;
                }
            };
            entity['handleVideo'] = options;
            options = function() {
                zulu = _closure3_slot0;
                mike = zulu.emit;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 10;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.BaseConnectionEvent;
                entity = entity.DesktopSourceEnd;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleDesktopSourceEnd'] = options;
            options = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.setStream;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleStream'] = options;
            options = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure3_slot0;
                    tango = mike.silenceThreshold;
                    zulu = argFoo;
                    tango = zulu <= tango;
                    mike = mike.silenced;
                    mike = mike === tango;
                    if(mike) { _fun00014_ip = 53; continue _fun00013 }
 33:
                    zulu = _closure3_slot0;
                    report = zulu.input;
                    zulu = report.mute;
                    mike = zulu.bind(report)();
 53:
                    if(mike) { _fun00014_ip = 115; continue _fun00013 }
 56:
                    zulu = _closure3_slot0;
                    zulu['silenced'] = tango;
                    mike = zulu.emit;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 10;
                    report = report[entity];
                    entity = undefined;
                    entity = oscar.bind(entity)(report);
                    entity = entity.BaseConnectionEvent;
                    entity = entity.Silence;
                    entity = mike.bind(zulu)(entity, tango);
 115:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVoiceActivity'] = options;
            options = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    oscar = argFoo;
                    var _closure4_slot0 = oscar;
                    golf = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 10;
                    tango = entity[report];
                    entity = undefined;
                    tango = golf.bind(entity)(tango);
                    tango = tango.BaseConnectionEvent;
                    tango = tango.Video;
                    if(!(tango !== oscar)) { _fun00016_ip = 216; continue _fun00015 }
 53:
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[report];
                    tango = golf.bind(entity)(tango);
                    tango = tango.BaseConnectionEvent;
                    tango = tango.ConnectionStateChange;
                    if(!(tango !== oscar)) { _fun00016_ip = 189; continue _fun00015 }
 86:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.BaseConnectionEvent;
                    zulu = zulu.InteractionRequired;
                    if(!(zulu === oscar)) { _fun00016_ip = 250; continue _fun00015 }
 122:
                    zulu = _closure3_slot0;
                    zulu = zulu.interacted;
                    if(zulu) { _fun00016_ip = 166; continue _fun00015 }
 138:
                    tango = _closure3_slot0;
                    report = tango.input;
                    tango = report.getAudioState;
                    report = tango.bind(report)();
                    tango = 'suspended';
                    zulu = tango !== report;
 166:
                    if(zulu) { _fun00016_ip = 250; continue _fun00015 }
 169:
                    zulu = global;
                    tango = zulu.setImmediate;
                    zulu = function() {
                        tango = _closure3_slot0;
                        zulu = tango.emit;
                        mike = _closure4_slot0;
                        entity = true;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    zulu = tango.bind(entity)(zulu);
                    _fun00016_ip = 250; continue _fun00015;
 189:
                    report = _closure3_slot0;
                    tango = report.emit;
                    zulu = report.connectionState;
                    zulu = tango.bind(report)(oscar, zulu);
                    _fun00016_ip = 250; continue _fun00015;
 216:
                    zulu = _closure3_slot0;
                    zulu = zulu.videoReady;
                    if(!zulu) { _fun00016_ip = 250; continue _fun00015 }
 232:
                    zulu = global;
                    zulu = zulu.setImmediate;
                    mike = function() {
                        zulu = _closure3_slot0;
                        mike = zulu.handleVideo;
                        tango = zulu.input;
                        entity = tango.getVideoStreamId;
                        entity = entity.bind(tango)();
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
 250:
                    return entity;
                }
            };
            entity['handleNewListener'] = options;
            options = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    golf = _closure3_slot0;
                    oscar = golf.emit;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 10;
                    tango = tango[entity];
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    tango = tango.BaseConnectionEvent;
                    report = tango.Speaking;
                    tango = golf.userId;
                    options = _closure1_slot13;
                    zulu = argFoo;
                    if(zulu) { _fun00018_ip = 73; continue _fun00017 }
 65:
                    zulu = options.NONE;
                    _fun00018_ip = 79; continue _fun00017;
 73:
                    zulu = options.VOICE;
 79:
                    mike = _closure3_slot0;
                    offset = mike.audioSSRC;
                    backup = golf;
                    foxtrot = report;
                    romeo = tango;
                    yankee = zulu;
                    mike = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                    return entity;
                }
            };
            entity['handleInputSpeaking'] = options;
            options = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.interacted;
                    if(mike) { _fun00020_ip = 44; continue _fun00019 }
 16:
                    zulu = _closure3_slot0;
                    tango = zulu.input;
                    zulu = tango.getAudioState;
                    tango = zulu.bind(tango)();
                    zulu = 'running';
                    mike = zulu !== tango;
 44:
                    if(mike) { _fun00020_ip = 112; continue _fun00019 }
 47:
                    tango = _closure3_slot0;
                    entity = tango.interact;
                    entity = entity.bind(tango)();
                    zulu = tango.emit;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    entity = report.bind(entity)(mike);
                    entity = entity.BaseConnectionEvent;
                    mike = entity.InteractionRequired;
                    entity = false;
                    entity = zulu.bind(tango)(mike, entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleAudioContextStateChange'] = options;
            options = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure3_slot0;
                    report = entity.connectionState;
                    entity = _closure1_slot12;
                    entity = entity.DISCONNECTED;
                    if(!(report === entity)) { _fun00022_ip = 94; continue _fun00021 }
 33:
                    golf = _closure3_slot0;
                    oscar = golf.off;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 10;
                    report = report[entity];
                    entity = undefined;
                    entity = options.bind(entity)(report);
                    entity = entity.BaseConnectionEvent;
                    report = entity.Stats;
                    entity = golf.handleStats;
                    entity = oscar.bind(golf)(report, entity);
                    _fun00022_ip = 248; continue _fun00021;
 94:
                    entity = null;
                    if(!(entity != zulu)) { _fun00022_ip = 248; continue _fun00021 }
 103:
                    report = _closure3_slot0;
                    oscar = report.webrtcStats;
                    entity = oscar.update;
                    entity = entity.bind(oscar)(zulu);
                    report['stats'] = zulu;
                    entity = global;
                    golf = entity.Date;
                    oscar = golf.now;
                    oscar = oscar.bind(golf)();
                    report = report.lastPingTime;
                    oscar = oscar - report;
                    report = _closure1_slot11;
                    if(!(oscar >= report)) { _fun00022_ip = 248; continue _fun00021 }
 165:
                    mike = _closure3_slot0;
                    report = mike.emit;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 10;
                    oscar = oscar[tango];
                    tango = undefined;
                    tango = golf.bind(tango)(oscar);
                    tango = tango.BaseConnectionEvent;
                    tango = tango.Ping;
                    zulu = zulu.transport;
                    zulu = zulu.ping;
                    zulu = report.bind(mike)(tango, zulu);
                    zulu = entity.Date;
                    entity = zulu.now;
                    entity = entity.bind(zulu)();
                    mike['lastPingTime'] = entity;
 248:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleStats'] = options;
            verify = _closure1_slot1;
            mike = 11;
            options = golf[mike];
            options = verify.bind(oscar)(options);
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            backup = verify;
            foxtrot = report;
            options = new backup[options](foxtrot, romeo);
            options = options instanceof Object ? options : verify;
            entity['input'] = options;
            offset = report.addEventListener;
            verify = entity.handleAudioContextStateChange;
            options = 'statechange';
            options = offset.bind(report)(options, verify);
            entity['audioContext'] = report;
            offset = entity.input;
            verify = offset.on;
            report = golf[mike];
            report = zulu.bind(oscar)(report);
            report = report.InputEvent;
            options = report.AudioPermission;
            report = entity.handleAudioPermission;
            report = verify.bind(offset)(options, report);
            offset = entity.input;
            verify = offset.on;
            report = golf[mike];
            report = zulu.bind(oscar)(report);
            report = report.InputEvent;
            options = report.VideoPermission;
            report = entity.handleVideoPermission;
            report = verify.bind(offset)(options, report);
            offset = entity.input;
            verify = offset.on;
            report = golf[mike];
            report = zulu.bind(oscar)(report);
            report = report.InputEvent;
            options = report.Video;
            report = entity.handleVideo;
            report = verify.bind(offset)(options, report);
            verify = entity.input;
            options = verify.on;
            report = golf[mike];
            report = zulu.bind(oscar)(report);
            report = report.InputEvent;
            report = report.Mute;
            tango = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                entity = entity.BaseConnectionEvent;
                mike = entity.Mute;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            tango = options.bind(verify)(report, tango);
            verify = entity.input;
            options = verify.on;
            tango = golf[mike];
            tango = zulu.bind(oscar)(tango);
            tango = tango.InputEvent;
            report = tango.Stream;
            tango = entity.handleStream;
            tango = options.bind(verify)(report, tango);
            verify = entity.input;
            options = verify.on;
            tango = golf[mike];
            tango = zulu.bind(oscar)(tango);
            tango = tango.InputEvent;
            report = tango.DesktopSourceEnd;
            tango = entity.handleDesktopSourceEnd;
            tango = options.bind(verify)(report, tango);
            verify = entity.input;
            options = verify.on;
            tango = golf[mike];
            tango = zulu.bind(oscar)(tango);
            tango = tango.InputEvent;
            report = tango.Speaking;
            tango = entity.handleInputSpeaking;
            tango = options.bind(verify)(report, tango);
            verify = entity.input;
            options = verify.on;
            tango = golf[mike];
            tango = zulu.bind(oscar)(tango);
            tango = tango.InputEvent;
            report = tango.AddVideoTrack;
            tango = entity.handleAddVideoTrack;
            tango = options.bind(verify)(report, tango);
            report = entity.input;
            tango = report.on;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.InputEvent;
            zulu = mike.Video;
            mike = entity.handleAddVideoTrack;
            mike = tango.bind(report)(zulu, mike);
            tango = entity.on;
            zulu = entity.handleNewListener;
            mike = 'newListener';
            mike = tango.bind(entity)(mike, zulu);
            zulu = entity.initializeStreamParameters;
            mike = argCorge;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot9;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot5;
        report = {};
        entity = 'interact';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = this;
                mike = true;
                entity['interacted'] = mike;
                mike = global;
                tango = mike.Object;
                zulu = tango.keys;
                mike = entity.outputs;
                tango = zulu.bind(tango)(mike);
                mike = tango.length;
                zulu = 0;
                mike = zulu < mike;
                if(!mike) { _fun00024_ip = 85; continue _fun00023 }
 49:
                report = tango[zulu];
                mike = entity.outputs;
                report = mike[report];
                mike = report.play;
                mike = mike.bind(report)();
                zulu = zulu + 1;
                mike = tango.length;
                if(zulu < mike) { _fun00024_ip = 49; continue _fun00023 }
 85:
                mike = entity.input;
                entity = mike.resumeAudio;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(56);
        entity[0] = report;
        report = {};
        options = 'destroy';
        report['key'] = options;
        options = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = this;
                offset = _closure2_slot1;
                report = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        report = argFoo;
                        golf = argBaz;
                        var _closure4_slot0 = golf;
                        oscar = _closure1_slot8;
                        zulu = _closure1_slot7;
                        entity = 1;
                        tango = 3;
                        options = entity & tango;
                        entity = report;
                        if(!options) { _fun00028_ip = 44; continue _fun00027 }
 39:
                        entity = report.prototype;
 44:
                        report = undefined;
                        zulu = zulu.bind(report)(entity);
                        entity = 'destroy';
                        entity = oscar.bind(report)(zulu, entity, golf);
                        var _closure4_slot1 = entity;
                        zulu = 2;
                        zulu = zulu & tango;
                        if(!zulu) { _fun00028_ip = 81; continue _fun00027 }
 76:
                        entity = function(argFoo) {
                            tango = _closure4_slot1;
                            zulu = tango.apply;
                            mike = _closure4_slot0;
                            entity = argFoo;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
 81:
                        return entity;
                    }
                };
                entity = undefined;
                verify = 'destroy';
                golf = 3;
                yankee = undefined;
                options = mike;
                tango = yankee[report](offset, verify, options, golf, oscar);
                zulu = new Array(0);
                zulu = tango.bind(entity)(zulu);
                zulu = !zulu;
                zulu = global;
                report = zulu.Object;
                tango = report.keys;
                zulu = mike.outputs;
                report = tango.bind(report)(zulu);
                zulu = report.length;
                tango = 0;
                zulu = tango < zulu;
                if(!zulu) { _fun00026_ip = 112; continue _fun00025 }
 85:
                oscar = report[tango];
                zulu = mike.destroyOutput;
                zulu = zulu.bind(mike)(oscar);
                tango = tango + 1;
                zulu = report.length;
                if(tango < zulu) { _fun00026_ip = 85; continue _fun00025 }
 112:
                zulu = mike.input;
                mike = zulu.destroy;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'getStats';
        report['key'] = options;
        options = _closure1_slot3;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    zulu = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00030_ip = 124; continue _fun00029 }
 10:
                    mike = _closure1_slot19;
                    if(mike) { _fun00030_ip = 25; continue _fun00029 }
 20:
                    mike = null;
                    return mike;
 25:
                    mike = zulu.getRawStats;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=41);
 39:
                    return mike;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00030_ip = 121; continue _fun00029 }
 47:
                    oscar = zulu.input;
                    report = oscar.getVideoStreamId;
                    verify = report.bind(oscar)();
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 12;
                    tango = oscar[tango];
                    options = undefined;
                    golf = report.bind(options)(tango);
                    foxtrot = zulu.getUserIdBySsrc;
                    romeo = zulu.remoteVideoSinkWants;
                    yankee = zulu.localVideoSinkWants;
                    zulu = null;
                    offset = zulu !== verify;
                    kilo = undefined;
                    backup = mike;
                    zulu = kilo[golf](backup, foxtrot, romeo, yankee, offset, verify);
                    return zulu;
 121:
                    return mike;
 124:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: getStats
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSelfMute';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.selfMute;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'setInputMode';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = argBar;
            mike = this;
            tango = mike.input;
            zulu = tango.setAudioMode;
            mike = {};
            report = entity.pttReleaseDelay;
            mike['delay'] = report;
            entity = entity.vadThreshold;
            mike['threshold'] = entity;
            entity = argFoo;
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'setSelfDeaf';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                tango = this;
                tango['selfDeaf'] = report;
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.outputs;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun00032_ip = 98; continue _fun00031 }
 50:
                options = zulu[mike];
                entity = tango.outputs;
                oscar = entity[options];
                entity = report;
                if(entity) { _fun00032_ip = 80; continue _fun00031 }
 70:
                golf = tango.localMutes;
                entity = golf[options];
 80:
                oscar['mute'] = entity;
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun00032_ip = 50; continue _fun00031 }
 98:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'setLocalMute';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                tango = this;
                entity = tango.localMutes;
                entity[oscar] = report;
                entity = tango.outputs;
                mike = entity[oscar];
                entity = null;
                if(!(entity != mike)) { _fun00034_ip = 63; continue _fun00033 }
 35:
                entity = tango.outputs;
                mike = entity[oscar];
                entity = tango.selfDeaf;
                if(entity) { _fun00034_ip = 57; continue _fun00033 }
 54:
                entity = report;
 57:
                mike['mute'] = entity;
 63:
                zulu = tango.emit;
                golf = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = golf.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                mike = mike.LocalMute;
                mike = zulu.bind(tango)(mike, oscar, report);
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'fastUdpReconnect';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getNumFastUdpReconnects';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'wasRemoteDisconnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'setRemoteVideoSinkWants';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = this;
            entity = argFoo;
            zulu['remoteVideoSinkWants'] = entity;
            mike = zulu.updateVideoQuality;
            entity = _closure1_slot10;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'setLocalVideoSinkWants';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['localVideoSinkWants'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'updateVideoQualityCore';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                romeo = this;
                zulu = romeo.videoSupported;
                if(!zulu) { _fun00036_ip = 677; continue _fun00035 }
 21:
                tango = romeo.input;
                zulu = tango.getVideoStream;
                zulu = zulu.bind(tango)();
                yankee = null;
                if(!(yankee != zulu)) { _fun00036_ip = 677; continue _fun00035 }
 46:
                tango = entity.capture;
                report = yankee != tango;
                offset = undefined;
                tango = undefined;
                if(!report) { _fun00036_ip = 243; continue _fun00035 }
 66:
                report = entity.capture;
                report = report.width;
                report = yankee != report;
                tango = undefined;
                if(!report) { _fun00036_ip = 243; continue _fun00035 }
 89:
                report = entity.capture;
                report = report.height;
                report = yankee != report;
                tango = undefined;
                if(!report) { _fun00036_ip = 243; continue _fun00035 }
 112:
                report = mike.remoteSinkWantsPixelCount;
                report = yankee != report;
                tango = undefined;
                if(!report) { _fun00036_ip = 243; continue _fun00035 }
 127:
                report = mike.remoteSinkWantsPixelCount;
                oscar = 0;
                tango = undefined;
                if(!(oscar !== report)) { _fun00036_ip = 243; continue _fun00035 }
 141:
                report = entity.capture;
                report = report.height;
                tango = undefined;
                if(!(oscar !== report)) { _fun00036_ip = 243; continue _fun00035 }
 158:
                report = entity.capture;
                oscar = report.width;
                report = entity.capture;
                report = report.height;
                options = oscar / report;
                report = global;
                golf = report.Math;
                oscar = golf.sqrt;
                report = mike.remoteSinkWantsPixelCount;
                report = report * options;
                report = oscar.bind(golf)(report);
                entity = entity.capture;
                entity = entity.width;
                report = entity / report;
                oscar = 1;
                entity = undefined;
                if(!(!(report < oscar))) { _fun00036_ip = 240; continue _fun00035 }
 237:
                entity = report;
 240:
                tango = entity;
 243:
                oscar = romeo.logger;
                report = oscar.info;
                record = mike.encodingVideoWidth;
                sequence = mike.remoteSinkWantsMaxFramerate;
                control = mike.encodingVideoMaxBitRate;
                entity = romeo.getLocalWant;
                update = entity.bind(romeo)();
                verify = global;
                entity = verify.HermesInternal;
                kilo = entity.concat;
                target = 'BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: ';
                context = ', encodingVideoWidth: ';
                config = ', remoteSinkWantsMaxFramerate: ';
                vacuum = ', encodingVideoMaxBitRate: ';
                source = ', localWant: ';
                papa = tango;
                entity = target[kilo](papa, context, record, config, sequence, vacuum, control, source, update, echo);
                entity = report.bind(oscar)(entity);
                report = romeo.setVideoEncoderParameters;
                oscar = {};
                golf = _closure1_slot20;
                options = golf.VIDEO_RESOLUTION_SCALE;
                oscar['parameter'] = options;
                oscar['value'] = tango;
                tango = new Array(3);
                tango[0] = oscar;
                oscar = {};
                options = golf.VIDEO_BITRATE;
                oscar['parameter'] = options;
                options = mike.encodingVideoMaxBitRate;
                oscar['value'] = options;
                tango[1] = oscar;
                oscar = {};
                golf = golf.VIDEO_FRAMERATE;
                oscar['parameter'] = golf;
                golf = mike.remoteSinkWantsMaxFramerate;
                oscar['value'] = golf;
                tango[2] = oscar;
                tango = report.bind(romeo)(tango);
                options = mike.encodingVideoWidth;
                golf = mike.encodingVideoHeight;
                mike = _closure1_slot21;
                entity = zulu.getTracks;
                entity = entity.bind(zulu)();
                oscar = mike.bind(offset)(entity);
                mike = oscar.bind(offset)();
                entity = mike.done;
                report = 'BaseWebRTCConnection.updateVideoQuality: old: ';
                tango = ' x ';
                zulu = ', new: ';
                if(entity) { _fun00036_ip = 677; continue _fun00035 }
 500:
                backup = mike.value;
                entity = backup.getConstraints;
                foxtrot = entity.bind(backup)();
                entity = foxtrot.width;
                kilo = yankee == entity;
                result = undefined;
                if(kilo) { _fun00036_ip = 536; continue _fun00035 }
 531:
                result = entity.max;
 536:
                entity = foxtrot.height;
                kilo = yankee == entity;
                output = undefined;
                if(kilo) { _fun00036_ip = 555; continue _fun00035 }
 550:
                output = entity.max;
 555:
                entity = result === options;
                if(!entity) { _fun00036_ip = 566; continue _fun00035 }
 562:
                entity = output === golf;
 566:
                if(entity) { _fun00036_ip = 659; continue _fun00035 }
 569:
                sizing = romeo.logger;
                kilo = sizing.info;
                entity = verify.HermesInternal;
                entity = entity.concat;
                target = report;
                papa = result;
                context = tango;
                record = output;
                config = zulu;
                sequence = options;
                vacuum = tango;
                control = golf;
                entity = target[entity](papa, context, record, config, sequence, vacuum, control, source);
                entity = kilo.bind(sizing)(entity);
                entity = {};
                entity['max'] = options;
                foxtrot['width'] = entity;
                entity = {};
                entity['max'] = golf;
                foxtrot['height'] = entity;
                entity = backup.applyConstraints;
                entity = entity.bind(backup)(foxtrot);
 659:
                foxtrot = oscar.bind(offset)();
                entity = foxtrot.done;
                mike = foxtrot;
                if(!entity) { _fun00036_ip = 500; continue _fun00035 }
 677:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'setCanHavePriority';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = argFoo;
                mike = this;
                entity = mike.canHavePriority;
                zulu = entity.size;
                tango = mike.canHavePriority;
                entity = argBar;
                if(entity) { _fun00038_ip = 41; continue _fun00037 }
 29:
                entity = tango.delete;
                entity = entity.bind(tango)(report);
                _fun00038_ip = 51; continue _fun00037;
 41:
                entity = tango.add;
                entity = entity.bind(tango)(report);
 51:
                entity = mike.canHavePriority;
                entity = entity.size;
                if(!(entity !== zulu)) { _fun00038_ip = 76; continue _fun00037 }
 66:
                entity = mike.recalculatePrioritySpeakers;
                entity = entity.bind(mike)();
 76:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'setSpeakingFlags';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = argFoo;
                entity = argBar;
                mike = this;
                zulu = null;
                if(!(zulu != entity)) { _fun00040_ip = 32; continue _fun00039 }
 15:
                tango = _closure1_slot13;
                tango = tango.NONE;
                if(!(entity === tango)) { _fun00040_ip = 44; continue _fun00039 }
 32:
                tango = mike.localSpeakingFlags;
                tango = delete tango[report];
                _fun00040_ip = 54; continue _fun00039;
 44:
                tango = mike.localSpeakingFlags;
                tango[report] = entity;
 54:
                tango = mike.outputs;
                tango = tango[report];
                if(!(zulu != tango)) { _fun00040_ip = 79; continue _fun00039 }
 68:
                zulu = tango.setSpeakingFlags;
                zulu = zulu.bind(tango)(entity);
 79:
                zulu = mike.wantsPriority;
                zulu = zulu.size;
                tango = _closure1_slot13;
                oscar = tango.VOICE;
                tango = tango.PRIORITY;
                tango = oscar | tango;
                entity = entity & tango;
                if(!(entity !== tango)) { _fun00040_ip = 139; continue _fun00039 }
 121:
                tango = mike.wantsPriority;
                entity = tango.delete;
                entity = entity.bind(tango)(report);
                _fun00040_ip = 155; continue _fun00039;
 139:
                tango = mike.wantsPriority;
                entity = tango.add;
                entity = entity.bind(tango)(report);
 155:
                entity = mike.wantsPriority;
                entity = entity.size;
                if(!(entity !== zulu)) { _fun00040_ip = 180; continue _fun00039 }
 170:
                entity = mike.recalculatePrioritySpeakers;
                entity = entity.bind(mike)();
 180:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'clearAllSpeaking';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                options = this;
                oscar = options.localSpeakingFlags;
                entity = null;
                for(zulu in oscar)
 22:
                {
 31:
                    offset = zulu;
                    verify = options.localSpeakingFlags;
                    verify = delete verify[offset];
                    verify = options.outputs;
                    verify = verify[offset];
                    if(entity == verify) { _fun00042_ip = 22; continue _fun00041 }
 58:
                    verify = options.outputs;
                    yankee = verify[offset];
                    offset = yankee.setSpeakingFlags;
                    verify = _closure1_slot13;
                    verify = verify.NONE;
                    verify = offset.bind(yankee)(verify);
                    _fun00042_ip = 22; continue _fun00041;
                }
 91:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'setOutputVolume';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                tango = this;
                entity = argFoo;
                tango['outputVolume'] = entity;
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.outputs;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun00044_ip = 93; continue _fun00043 }
 50:
                oscar = zulu[mike];
                entity = tango.outputs;
                report = entity[oscar];
                entity = tango.computeLocalVolume;
                entity = entity.bind(tango)(oscar);
                report['volume'] = entity;
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun00044_ip = 50; continue _fun00043 }
 93:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'setSinkId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                report = argFoo;
                tango = this;
                tango['sinkId'] = report;
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.outputs;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun00046_ip = 87; continue _fun00045 }
 50:
                oscar = zulu[mike];
                entity = tango.outputs;
                oscar = entity[oscar];
                entity = oscar.setSinkId;
                entity = entity.bind(oscar)(report);
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun00046_ip = 50; continue _fun00045 }
 87:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'setStreamParameters';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            var _closure3_slot2 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    mike = argBar;
                    var _closure4_slot0 = mike;
                    oscar = function(argFoo) { // Original name: _loop
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            zulu = _closure3_slot1;
                            mike = zulu.findIndex;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.rid;
                                entity = _closure5_slot0;
                                entity = entity.rid;
                                entity = mike === entity;
                                return entity;
                            };
                            tango = mike.bind(zulu)(entity);
                            entity = -1;
                            if(!(entity !== tango)) { _fun00050_ip = 131; continue _fun00049 }
 42:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 13;
                            mike = mike[entity];
                            entity = undefined;
                            oscar = zulu.bind(entity)(mike);
                            mike = _closure3_slot2;
                            mike = mike.videoStreamParameters;
                            zulu = mike[tango];
                            mike = _closure3_slot1;
                            mike = mike[tango];
                            mike = oscar.bind(entity)(zulu, mike);
                            if(mike) { _fun00050_ip = 129; continue _fun00049 }
 98:
                            mike = _closure3_slot2;
                            zulu = mike.videoStreamParameters;
                            mike = {};
                            report = _closure3_slot1;
                            golf = report[tango];
                            options = mike;
                            report = copyDataProperties(options, golf);
                            zulu[tango] = mike;
 129:
                            return entity;
 131:
                            zulu = _closure4_slot0;
                            entity = global;
                            tango = entity.Error;
                            entity = tango.prototype;
                            mike = Object.create(entity, {constructor: {value: tango}});
                            options = 'Invalid rid';
                            verify = mike;
                            entity = new verify[tango](options, golf);
                            entity = entity instanceof Object ? entity : mike;
                            mike = undefined;
                            entity = zulu.bind(mike)(entity);
                            entity = {};
                            entity['v'] = mike;
                            return entity;
                        }
                    };
                    zulu = _closure1_slot21;
                    entity = _closure3_slot0;
                    mike = entity.videoStreamParameters;
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    tango = zulu;
                    if(mike) { _fun00048_ip = 93; continue _fun00047 }
 56:
                    mike = tango.value;
                    mike = oscar.bind(entity)(mike);
                    if(mike) { _fun00048_ip = 86; continue _fun00047 }
 69:
                    golf = report.bind(entity)();
                    zulu = golf.done;
                    tango = golf;
                    if(zulu) { _fun00048_ip = 93; continue _fun00047 }
 84:
                    _fun00048_ip = 56; continue _fun00047;
 86:
                    mike = mike.v;
                    return mike;
 93:
                    mike = argFoo;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'recalculatePrioritySpeakers';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            entity = global;
            report = entity.Set;
            oscar = entity.Array;
            tango = oscar.from;
            entity = zulu.wantsPriority;
            oscar = tango.bind(oscar)(entity);
            tango = oscar.filter;
            entity = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.canHavePriority;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = tango.bind(oscar)(entity);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            verify = tango;
            entity = new verify[report](options, golf);
            entity = entity instanceof Object ? entity : tango;
            zulu['prioritySpeakers'] = entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 14;
            tango = tango[entity];
            entity = undefined;
            tango = report.bind(entity)(tango);
            zulu = zulu.outputs;
            mike = function(argFoo, argBar) {
                zulu = _closure3_slot0;
                mike = zulu.computeLocalVolume;
                entity = argBar;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                entity['volume'] = mike;
                entity = undefined;
                return entity;
            };
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'setBitRate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['voiceBitrate'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'setLocalVolume';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                tango = argFoo;
                zulu = this;
                mike = zulu.localVolumes;
                entity = argBar;
                mike[tango] = entity;
                entity = zulu.outputs;
                mike = entity[tango];
                entity = null;
                if(!(entity != mike)) { _fun00052_ip = 62; continue _fun00051 }
 35:
                entity = zulu.outputs;
                mike = entity[tango];
                entity = zulu.computeLocalVolume;
                entity = entity.bind(zulu)(tango);
                mike['volume'] = entity;
 62:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'getLocalVolume';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                zulu = this;
                mike = zulu.localVolumes;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                if(!(mike == entity)) { _fun00054_ip = 57; continue _fun00053 }
 22:
                report = zulu.context;
                zulu = _closure1_slot16;
                zulu = zulu.DEFAULT;
                if(!(report !== zulu)) { _fun00054_ip = 50; continue _fun00053 }
 44:
                zulu = _closure1_slot17;
                _fun00054_ip = 54; continue _fun00053;
 50:
                zulu = _closure1_slot14;
 54:
                entity = zulu;
 57:
                if(!(mike == entity)) { _fun00054_ip = 68; continue _fun00053 }
 61:
                entity = _closure1_slot14;
 68:
                return entity;
            }
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'computeLocalVolume';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                oscar = argFoo;
                tango = this;
                mike = tango.outputVolume;
                entity = tango.getLocalVolume;
                entity = entity.bind(tango)(oscar);
                zulu = mike * entity;
                entity = _closure1_slot14;
                zulu = zulu / entity;
                entity = tango.prioritySpeakers;
                golf = entity.size;
                report = 0;
                entity = zulu;
                if(!(golf > report)) { _fun00056_ip = 88; continue _fun00055 }
 58:
                report = tango.prioritySpeakers;
                tango = report.has;
                tango = tango.bind(report)(oscar);
                entity = zulu;
                if(tango) { _fun00056_ip = 88; continue _fun00055 }
 80:
                mike = _closure1_slot18;
                entity = zulu * mike;
 88:
                return entity;
            }
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'hasDesktopSource';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                entity = this;
                zulu = entity.input;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00058_ip = 30; continue _fun00057 }
 20:
                mike = zulu.hasDesktopSource;
                entity = mike.bind(zulu)();
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'createOutput';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                oscar = argFoo;
                entity = argBar;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = oscar;
                zulu = entity.discordIsTearingDown;
                if(zulu) { _fun00060_ip = 346; continue _fun00059 }
 31:
                zulu = mike.outputs;
                tango = zulu[oscar];
                verify = null;
                if(!(verify == tango)) { _fun00060_ip = 333; continue _fun00059 }
 50:
                golf = _closure1_slot1;
                zulu = _closure1_slot2;
                foxtrot = 15;
                zulu = zulu[foxtrot];
                romeo = undefined;
                offset = golf.bind(romeo)(zulu);
                sizing = mike.audioContext;
                golf = offset.prototype;
                golf = Object.create(golf, {constructor: {value: offset}});
                result = golf;
                output = oscar;
                zulu = new result[offset](output, sizing, kilo);
                zulu = zulu instanceof Object ? zulu : golf;
                golf = mike.selfDeaf;
                if(golf) { _fun00060_ip = 123; continue _fun00059 }
 113:
                offset = mike.localMutes;
                golf = offset[oscar];
 123:
                zulu['mute'] = golf;
                golf = mike.computeLocalVolume;
                golf = golf.bind(mike)(oscar);
                zulu['volume'] = golf;
                kilo = zulu.on;
                yankee = _closure1_slot0;
                golf = _closure1_slot2;
                offset = golf[foxtrot];
                offset = yankee.bind(romeo)(offset);
                offset = offset.OutputEvent;
                backup = offset.Speaking;
                offset = function(argFoo) {
                    oscar = _closure3_slot0;
                    report = oscar.emit;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    mike = mike.BaseConnectionEvent;
                    offset = mike.Speaking;
                    verify = _closure3_slot1;
                    golf = oscar.audioSSRC;
                    options = argFoo;
                    yankee = oscar;
                    entity = yankee[report](offset, verify, options, golf, oscar);
                    return entity;
                };
                offset = kilo.bind(zulu)(backup, offset);
                kilo = zulu.on;
                offset = golf[foxtrot];
                offset = yankee.bind(romeo)(offset);
                offset = offset.OutputEvent;
                backup = offset.Video;
                offset = function(argFoo) {
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        verify = _closure3_slot0;
                        options = verify.emitUnsafe;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 10;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        mike = mike.BaseConnectionEvent;
                        golf = mike.Video;
                        oscar = _closure3_slot1;
                        report = verify.audioSSRC;
                        mike = verify.videoStreamParameters;
                        tango = 0;
                        mike = mike[tango];
                        zulu = mike.ssrc;
                        mike = verify.videoStreamParameters;
                        mike = mike[tango];
                        mike = mike.rtxSsrc;
                        offset = null;
                        offset = offset != mike;
                        if(!offset) { _fun00062_ip = 108; continue _fun00061 }
 105:
                        tango = mike;
 108:
                        entity = _closure3_slot0;
                        yankee = entity.videoStreamParameters;
                        kilo = argFoo;
                        result = verify;
                        output = golf;
                        sizing = oscar;
                        backup = report;
                        foxtrot = zulu;
                        romeo = tango;
                        entity = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset);
                        return entity;
                    }
                };
                offset = kilo.bind(zulu)(backup, offset);
                offset = zulu.on;
                golf = golf[foxtrot];
                golf = yankee.bind(romeo)(golf);
                golf = golf.OutputEvent;
                golf = golf.InteractionRequired;
                report = function(argFoo) {
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    entity = report.bind(entity)(mike);
                    entity = entity.BaseConnectionEvent;
                    mike = entity.InteractionRequired;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                report = offset.bind(zulu)(golf, report);
                golf = zulu.setSpeakingFlags;
                report = mike.localSpeakingFlags;
                report = report[oscar];
                if(!(verify == report)) { _fun00060_ip = 298; continue _fun00059 }
 288:
                options = _closure1_slot13;
                report = options.NONE;
 298:
                report = golf.bind(zulu)(report);
                golf = zulu.setSinkId;
                report = mike.sinkId;
                report = golf.bind(zulu)(report);
                report = mike.outputs;
                report[oscar] = zulu;
                tango = zulu;
 333:
                zulu = tango.addTrack;
                zulu = zulu.bind(tango)(entity);
                _fun00060_ip = 391; continue _fun00059;
 346:
                zulu = mike.logger;
                mike = zulu.info;
                report = entity.id;
                entity = global;
                entity = entity.HermesInternal;
                tango = entity.concat;
                entity = 'BaseWebRTCConnection.createOutput: ignoring track being torn down: ';
                entity = tango.bind(entity)(report);
                entity = mike.bind(zulu)(entity);
 391:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'destroyOutput';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                mike = argFoo;
                golf = argBar;
                entity = this;
                zulu = entity.outputs;
                tango = zulu[mike];
                report = null;
                zulu = report == tango;
                if(zulu) { _fun00064_ip = 55; continue _fun00063 }
 28:
                report = report != golf;
                if(!report) { _fun00064_ip = 52; continue _fun00063 }
 35:
                oscar = tango.removeTrack;
                golf = oscar.bind(tango)(golf);
                oscar = 0;
                report = oscar !== golf;
 52:
                zulu = report;
 55:
                if(zulu) { _fun00064_ip = 78; continue _fun00063 }
 58:
                zulu = tango.destroy;
                zulu = zulu.bind(tango)();
                entity = entity.outputs;
                entity = delete entity[mike];
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[26] = report;
        report = {};
        golf = 'setSilenceThreshold';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['silenceThreshold'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[27] = report;
        report = {};
        golf = 'setLocalPan';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[28] = report;
        report = {};
        golf = 'setExperimentalEncoders';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[29] = report;
        report = {};
        golf = 'setHardwareH264';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[30] = report;
        report = {};
        golf = 'setSoftwareH264';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[31] = report;
        report = {};
        golf = 'setQoS';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[32] = report;
        report = {};
        golf = 'isAttenuating';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        report['value'] = golf;
        entity[33] = report;
        report = {};
        golf = 'setAttenuation';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[34] = report;
        report = {};
        golf = 'setEncryption';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[35] = report;
        report = {};
        golf = 'setMinimumJitterBufferLevel';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[36] = report;
        report = {};
        golf = 'setPostponeDecodeLevel';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[37] = report;
        report = {};
        golf = 'setReconnectInterval';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[38] = report;
        report = {};
        golf = 'setKeyframeInterval';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[39] = report;
        report = {};
        golf = 'startSamplesLocalPlayback';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[40] = report;
        report = {};
        golf = 'stopSamplesLocalPlayback';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[41] = report;
        report = {};
        golf = 'stopAllSamplesLocalPlayback';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[42] = report;
        report = {};
        golf = 'setVideoQualityMeasurement';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[43] = report;
        report = {};
        golf = 'setVideoEncoderExperiments';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[44] = report;
        report = {};
        golf = 'setBandwidthEstimationExperiments';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[45] = report;
        report = {};
        golf = 'prepareSecureFramesTransition';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[46] = report;
        report = {};
        golf = 'prepareSecureFramesEpoch';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[47] = report;
        report = {};
        golf = 'executeSecureFramesTransition';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[48] = report;
        report = {};
        golf = 'getMLSKeyPackage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[49] = report;
        report = {};
        golf = 'updateMLSExternalSender';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[50] = report;
        report = {};
        golf = 'processMLSProposals';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[51] = report;
        report = {};
        golf = 'prepareMLSCommitTransition';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[52] = report;
        report = {};
        golf = 'processMLSWelcome';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[53] = report;
        report = {};
        golf = 'getMLSPairwiseFingerprint';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[54] = report;
        report = {};
        golf = 'setVoiceFiltersEnabled';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[55] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/webrtc/BaseWebRTCConnection.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['EncoderParameter'] = mike;
    return entity;
})();