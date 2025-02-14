// discord_common/js/packages/media-engine/webrtc/Input.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun51367: for(var _fun51367_ip = 0; ; ) switch(_fun51367_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun51367_ip = 48; continue _fun51367 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun51367_ip = 86; continue _fun51367;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun51368: for(var _fun51368_ip = 0; ; ) switch(_fun51368_ip) {
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
            _fun51368_ip = 74; continue _fun51368;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    report = 'stream';
    mike['Stream'] = report;
    report = 'video';
    mike['Video'] = report;
    report = 'mute';
    mike['Mute'] = report;
    report = 'voiceactivity';
    mike['VoiceActivity'] = report;
    report = 'desktopsourceend';
    mike['DesktopSourceEnd'] = report;
    report = 'speaking';
    mike['Speaking'] = report;
    report = 'audio-permission';
    mike['AudioPermission'] = report;
    report = 'video-permission';
    mike['VideoPermission'] = report;
    report = 'add-video-track';
    mike['AddVideoTrack'] = report;
    var _closure1_slot7 = mike;
    report = 7;
    report = oscar[report];
    report = golf.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: Input
            oscar = this;
            entity = _closure1_slot2;
            tango = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(oscar, tango);
            entity = _closure1_slot8;
            entity = entity.bind(report)(oscar, tango);
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 5;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            golf = zulu.prototype;
            golf = Object.create(golf, {constructor: {value: zulu}});
            offset = golf;
            zulu = new offset[zulu](verify);
            zulu = zulu instanceof Object ? zulu : golf;
            entity['video'] = zulu;
            zulu = null;
            entity['desktop'] = zulu;
            zulu = function() {
                _fun51373: for(var _fun51373_ip = 0; ; ) switch(_fun51373_ip) {
 0:
                    entity = global;
                    entity = entity.MediaStream;
                    mike = entity.prototype;
                    mike = Object.create(mike, {constructor: {value: entity}});
                    offset = mike;
                    entity = new offset[entity](verify);
                    entity = entity instanceof Object ? entity : mike;
                    var _closure4_slot0 = entity;
                    tango = _closure3_slot0;
                    report = tango.desktop;
                    tango = null;
                    if(!(tango == report)) { _fun51373_ip = 145; continue _fun51373 }
 53:
                    report = _closure3_slot0;
                    report = report.audio;
                    oscar = report.stream;
                    if(!(tango != oscar)) { _fun51373_ip = 98; continue _fun51373 }
 73:
                    report = oscar.getAudioTracks;
                    golf = report.bind(oscar)();
                    oscar = golf.forEach;
                    report = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.addTrack;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
 98:
                    report = _closure3_slot0;
                    report = report.video;
                    oscar = report.stream;
                    if(!(tango != oscar)) { _fun51373_ip = 210; continue _fun51373 }
 118:
                    report = oscar.getVideoTracks;
                    golf = report.bind(oscar)();
                    oscar = golf.forEach;
                    report = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.addTrack;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    _fun51373_ip = 210; continue _fun51373;
 145:
                    report = _closure3_slot0;
                    report = report.desktop;
                    report = report.stream;
                    if(!(tango != report)) { _fun51373_ip = 190; continue _fun51373 }
 165:
                    tango = report.getTracks;
                    report = tango.bind(report)();
                    tango = report.forEach;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.addTrack;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
 190:
                    zulu = _closure3_slot0;
                    tango = zulu.desktop;
                    zulu = tango.refreshSpeaking;
                    zulu = zulu.bind(tango)();
 210:
                    report = _closure3_slot0;
                    report['stream'] = entity;
                    tango = report.emit;
                    mike = _closure1_slot7;
                    zulu = mike.Stream;
                    zulu = tango.bind(report)(zulu, entity);
                    tango = report.emit;
                    zulu = mike.Video;
                    mike = report.getVideoStreamId;
                    mike = mike.bind(report)();
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            entity['mergeStreams'] = zulu;
            zulu = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                entity = _closure1_slot7;
                mike = entity.VoiceActivity;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleVoiceActivity'] = zulu;
            zulu = function() {
                zulu = _closure3_slot0;
                mike = zulu.emit;
                entity = _closure1_slot7;
                entity = entity.DesktopSourceEnd;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleDesktopSourceEnd'] = zulu;
            zulu = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                entity = _closure1_slot7;
                mike = entity.Speaking;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleSpeaking'] = zulu;
            zulu = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                entity = _closure1_slot7;
                mike = entity.AudioPermission;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleAudioPermission'] = zulu;
            zulu = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                entity = _closure1_slot7;
                mike = entity.VideoPermission;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleVideoPermission'] = zulu;
            zulu = 6;
            zulu = oscar[zulu];
            report = tango.bind(report)(zulu);
            zulu = report.prototype;
            tango = Object.create(zulu, {constructor: {value: report}});
            verify = argFoo;
            offset = tango;
            zulu = new offset[report](verify, options);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['audio'] = zulu;
            oscar = entity.audio;
            report = oscar.addListener;
            tango = entity.handleVoiceActivity;
            zulu = 'voiceactivity';
            zulu = report.bind(oscar)(zulu, tango);
            oscar = entity.audio;
            report = oscar.addListener;
            tango = entity.handleSpeaking;
            zulu = 'speaking';
            zulu = report.bind(oscar)(zulu, tango);
            report = entity.audio;
            tango = report.addListener;
            zulu = entity.mergeStreams;
            golf = 'stream';
            zulu = tango.bind(report)(golf, zulu);
            report = entity.audio;
            tango = report.addListener;
            zulu = entity.handleAudioPermission;
            oscar = 'permission';
            zulu = tango.bind(report)(oscar, zulu);
            report = entity.video;
            tango = report.addListener;
            zulu = entity.mergeStreams;
            zulu = tango.bind(report)(golf, zulu);
            report = entity.video;
            tango = report.addListener;
            zulu = entity.handleVideoPermission;
            zulu = tango.bind(report)(oscar, zulu);
            report = entity.video;
            tango = report.addListener;
            zulu = 'add-video-track';
            mike = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.emit;
                entity = _closure1_slot7;
                mike = entity.AddVideoTrack;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'destroy';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.removeAllListeners;
            entity = entity.bind(mike)();
            entity = mike.destroyStreams;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(20);
        entity[0] = report;
        report = {};
        golf = 'destroyStreams';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51384: for(var _fun51384_ip = 0; ; ) switch(_fun51384_ip) {
 0:
                entity = this;
                zulu = entity.audio;
                mike = zulu.destroy;
                mike = mike.bind(zulu)();
                zulu = entity.video;
                mike = zulu.destroy;
                mike = mike.bind(zulu)();
                mike = entity.desktop;
                entity = null;
                if(!(entity != mike)) { _fun51384_ip = 57; continue _fun51384 }
 47:
                entity = mike.destroy;
                entity = entity.bind(mike)();
 57:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'setDesktop';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun51385: for(var _fun51385_ip = 0; ; ) switch(_fun51385_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.destroyStreams;
                zulu = zulu.bind(mike)();
                zulu = null;
                if(!(zulu != entity)) { _fun51385_ip = 46; continue _fun51385 }
 22:
                oscar = entity.addListener;
                report = mike.handleDesktopSourceEnd;
                tango = 'desktopsourceend';
                tango = oscar.bind(entity)(tango, report);
 46:
                if(!(zulu != entity)) { _fun51385_ip = 72; continue _fun51385 }
 50:
                report = entity.addListener;
                tango = mike.handleSpeaking;
                zulu = 'speaking';
                zulu = report.bind(entity)(zulu, tango);
 72:
                mike['desktop'] = entity;
                entity = mike.mergeStreams;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'reset';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51386: for(var _fun51386_ip = 0; ; ) switch(_fun51386_ip) {
 0:
                entity = this;
                zulu = entity.audio;
                mike = zulu.reset;
                mike = mike.bind(zulu)();
                mike = entity.desktop;
                entity = null;
                if(!(entity != mike)) { _fun51386_ip = 41; continue _fun51386 }
 31:
                entity = mike.reset;
                entity = entity.bind(mike)();
 41:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getVideoStream';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51387: for(var _fun51387_ip = 0; ; ) switch(_fun51387_ip) {
 0:
                mike = this;
                zulu = mike.desktop;
                entity = null;
                if(!(entity == zulu)) { _fun51387_ip = 29; continue _fun51387 }
 15:
                entity = mike.video;
                entity = entity.stream;
                _fun51387_ip = 41; continue _fun51387;
 29:
                mike = mike.desktop;
                entity = mike.stream;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getVideoStreamId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun51388: for(var _fun51388_ip = 0; ; ) switch(_fun51388_ip) {
 0:
                mike = this;
                zulu = mike.desktop;
                entity = null;
                if(!(entity == zulu)) { _fun51388_ip = 33; continue _fun51388 }
 15:
                zulu = mike.video;
                entity = zulu.getStreamId;
                entity = entity.bind(zulu)();
                _fun51388_ip = 49; continue _fun51388;
 33:
                zulu = mike.desktop;
                mike = zulu.getStreamId;
                entity = mike.bind(zulu)();
 49:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'enableAudioInput';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = mike.enable;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'setAudioMode';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.audio;
            zulu = tango.setMode;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'setMute';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = this;
            entity = zulu.audio;
            entity['mute'] = tango;
            mike = zulu.emit;
            entity = _closure1_slot7;
            entity = entity.Mute;
            entity = mike.bind(zulu)(entity, tango);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'setEchoCancellation';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = argFoo;
            mike['echoCancellation'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'setNoiseSuppression';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = argFoo;
            mike['noiseSuppression'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'setNoiseCancellation';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = argFoo;
            mike['noiseCancellation'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'setAutomaticGainControl';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = argFoo;
            mike['automaticGainControl'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'setPTTActive';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.audio;
            mike = zulu.setPTTActive;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'setAudioSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.audio;
            mike = zulu.setSource;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'setVideoSource';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.video;
            mike = zulu.setSource;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'mute';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.audio;
            entity = entity.mute;
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'resumeAudio';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.audio;
            entity = mike.resume;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getAudioState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.audio;
            entity = entity.state;
            return entity;
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'hasDesktopSource';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.desktop;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = oscar;
        entity[19] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 8;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/webrtc/Input.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['InputEvent'] = mike;
    return entity;
})();