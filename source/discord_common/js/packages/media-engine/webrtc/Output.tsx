// discord_common/js/packages/media-engine/webrtc/Output.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.SpeakingFlags;
    var _closure1_slot7 = report;
    mike = mike.DEFAULT_VOLUME;
    var _closure1_slot8 = mike;
    mike = 6;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    verify = mike.Logger;
    mike = verify.prototype;
    report = Object.create(mike, {constructor: {value: verify}});
    romeo = 'Output';
    foxtrot = report;
    mike = new foxtrot[verify](romeo, yankee);
    mike = mike instanceof Object ? mike : report;
    var _closure1_slot9 = mike;
    mike = {};
    report = 'interactionrequired';
    mike['InteractionRequired'] = report;
    report = 'speaking';
    mike['Speaking'] = report;
    report = 'video';
    mike['Video'] = report;
    var _closure1_slot10 = mike;
    report = 9;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: Output
            report = this;
            entity = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            entity = entity.bind(zulu)(report, tango);
            entity = _closure1_slot11;
            entity = entity.bind(zulu)(report, tango);
            zulu = _closure1_slot7;
            zulu = zulu.NONE;
            entity['_speakingFlags'] = zulu;
            zulu = false;
            entity['_mute'] = zulu;
            mike = _closure1_slot8;
            entity['_volume'] = mike;
            mike = null;
            entity['sinkId'] = mike;
            entity['audioElement'] = mike;
            zulu = global;
            zulu = zulu.MediaStream;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            options = tango;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['stream'] = zulu;
            entity['videoStreamId'] = mike;
            entity['levelNode'] = mike;
            entity['streamSourceNode'] = mike;
            mike = argFoo;
            entity['id'] = mike;
            mike = argBar;
            entity['audioContext'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'play';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                mike = entity.audioElement;
                entity = null;
                if(!(entity != mike)) { _fun00006_ip = 25; continue _fun00005 }
 15:
                entity = mike.play;
                entity = entity.bind(mike)();
 25:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(11);
        entity[0] = report;
        report = {};
        golf = 'destroy';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                tango = mike.audioElement;
                entity = null;
                if(!(entity != tango)) { _fun00008_ip = 25; continue _fun00007 }
 15:
                zulu = tango.pause;
                zulu = zulu.bind(tango)();
 25:
                zulu = mike.videoStreamId;
                if(!(entity != zulu)) { _fun00008_ip = 77; continue _fun00007 }
 35:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 7;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.unregisterVideoStream;
                zulu = mike.videoStreamId;
                zulu = tango.bind(report)(zulu);
 77:
                zulu = mike.streamSourceNode;
                if(!(entity != zulu)) { _fun00008_ip = 109; continue _fun00007 }
 87:
                tango = mike.streamSourceNode;
                zulu = tango.disconnect;
                zulu = zulu.bind(tango)();
                mike['streamSourceNode'] = entity;
 109:
                zulu = mike.levelNode;
                if(!(entity != zulu)) { _fun00008_ip = 168; continue _fun00007 }
 119:
                tango = mike.levelNode;
                zulu = tango.disconnect;
                zulu = zulu.bind(tango)();
                zulu = mike.levelNode;
                report = zulu.port;
                tango = report.postMessage;
                zulu = 'close';
                zulu = tango.bind(report)(zulu);
                mike['levelNode'] = entity;
 168:
                zulu = mike.setSpeakingFlags;
                entity = _closure1_slot7;
                entity = entity.NONE;
                entity = zulu.bind(mike)(entity);
                entity = mike.removeAllListeners;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'addTrack';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = tango;
                report = entity.stream;
                mike = report.getTracks;
                report = mike.bind(report)();
                mike = report.includes;
                report = mike.bind(report)(tango);
                mike = entity.stream;
                if(report) { _fun00010_ip = 619; continue _fun00009 }
 54:
                report = mike.addTrack;
                report = report.bind(mike)(tango);
                report = entity.audioElement;
                oscar = null;
                if(!(oscar == report)) { _fun00010_ip = 158; continue _fun00009 }
 77:
                report = global;
                options = report.document;
                golf = options.createElement;
                report = 'audio';
                report = golf.bind(options)(report);
                golf = entity.stream;
                report['srcObject'] = golf;
                golf = report.play;
                verify = golf.bind(report)();
                if(!(oscar != verify)) { _fun00010_ip = 142; continue _fun00009 }
 126:
                options = verify.catch;
                golf = function() {
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    entity = _closure1_slot10;
                    mike = entity.InteractionRequired;
                    entity = true;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                golf = options.bind(verify)(golf);
 142:
                entity['audioElement'] = report;
                report = entity.updateAudioElement;
                report = report.bind(entity)();
 158:
                report = entity.levelNode;
                if(!(oscar == report)) { _fun00010_ip = 377; continue _fun00009 }
 171:
                golf = entity.stream;
                report = golf.getAudioTracks;
                report = report.bind(golf)();
                golf = report.length;
                report = 0;
                if(!(golf > report)) { _fun00010_ip = 377; continue _fun00009 }
 201:
                options = entity.audioContext;
                golf = options.createMediaStreamSource;
                report = entity.stream;
                report = golf.bind(options)(report);
                entity['streamSourceNode'] = report;
 230: // try_start_0
                report = global;
                verify = report.AudioWorkletNode;
                romeo = entity.audioContext;
                report = verify.prototype;
                golf = Object.create(report, {constructor: {value: verify}});
                yankee = 'level-processor';
                foxtrot = golf;
                report = new foxtrot[verify](romeo, yankee, offset);
                report = report instanceof Object ? report : golf;
                entity['levelNode'] = report;
                report = entity.levelNode;
                golf = report.port;
                report = function(argFoo) {
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    entity = _closure1_slot10;
                    mike = entity.Speaking;
                    entity = argFoo;
                    entity = entity.data;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                golf['onmessage'] = report;
                report = entity.streamSourceNode;
                if(!(oscar != report)) { _fun00010_ip = 332; continue _fun00009 }
 309:
                options = entity.streamSourceNode;
                golf = options.connect;
                report = entity.levelNode;
                report = golf.bind(options)(report);
 332: // try_end0
                _fun00010_ip = 377; continue _fun00009;
 334: // catch_target0
                CatchBlockStart(arg_register=9);
                options = _closure1_slot9;
                golf = options.warn;
                report = global;
                report = report.HermesInternal;
                verify = report.concat;
                report = 'Output#Failed to setup speaking indicator: ';
                report = verify.bind(report)(offset);
                report = golf.bind(options)(report);
 377:
                golf = tango.kind;
                report = 'video';
                if(!(report === golf)) { _fun00010_ip = 552; continue _fun00009 }
 393:
                report = entity.videoStreamId;
                if(!(oscar != report)) { _fun00010_ip = 445; continue _fun00009 }
 403:
                golf = _closure1_slot0;
                oscar = _closure1_slot1;
                report = 7;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.unregisterVideoStream;
                report = entity.videoStreamId;
                report = oscar.bind(golf)(report);
 445:
                oscar = entity.stream;
                report = oscar.getVideoTracks;
                golf = report.bind(oscar)();
                oscar = golf.forEach;
                report = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zulu = argFoo;
                        mike = _closure3_slot1;
                        if(!(mike !== zulu)) { _fun00012_ip = 43; continue _fun00011 }
 14:
                        mike = true;
                        zulu['discordIsTearingDown'] = mike;
                        entity = _closure3_slot0;
                        mike = entity.stream;
                        entity = mike.removeTrack;
                        entity = entity.bind(mike)(zulu);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                report = oscar.bind(golf)(report);
                options = _closure1_slot0;
                golf = _closure1_slot1;
                oscar = 7;
                golf = golf[oscar];
                oscar = undefined;
                options = options.bind(oscar)(golf);
                golf = options.registerVideoStream;
                oscar = entity.stream;
                oscar = golf.bind(options)(oscar);
                entity['videoStreamId'] = oscar;
                golf = entity.emit;
                report = _closure1_slot10;
                oscar = report.Video;
                report = entity.videoStreamId;
                report = golf.bind(entity)(oscar, report);
 552:
                report = tango.kind;
                tango = 'audio';
                if(!(tango === report)) { _fun00010_ip = 596; continue _fun00009 }
 565:
                report = entity.stream;
                tango = report.getAudioTracks;
                report = tango.bind(report)();
                tango = report.forEach;
                zulu = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zulu = argFoo;
                        mike = _closure3_slot1;
                        if(!(mike !== zulu)) { _fun00014_ip = 43; continue _fun00013 }
 14:
                        mike = true;
                        zulu['discordIsTearingDown'] = mike;
                        entity = _closure3_slot0;
                        mike = entity.stream;
                        entity = mike.removeTrack;
                        entity = entity.bind(mike)(zulu);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
 596:
                zulu = entity.stream;
                entity = zulu.getTracks;
                entity = entity.bind(zulu)();
                entity = entity.length;
                return entity;
 619:
                entity = mike.getTracks;
                entity = entity.bind(mike)();
                entity = entity.length;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'removeTrack';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = argFoo;
                entity = this;
                tango = entity.stream;
                zulu = tango.removeTrack;
                zulu = zulu.bind(tango)(mike);
                zulu = mike.kind;
                mike = 'video';
                if(!(mike === zulu)) { _fun00016_ip = 115; continue _fun00015 }
 36:
                mike = entity.videoStreamId;
                tango = null;
                if(!(tango != mike)) { _fun00016_ip = 90; continue _fun00015 }
 48:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 7;
                zulu = zulu[mike];
                mike = undefined;
                report = report.bind(mike)(zulu);
                zulu = report.unregisterVideoStream;
                mike = entity.videoStreamId;
                mike = zulu.bind(report)(mike);
 90:
                zulu = entity.emit;
                mike = _closure1_slot10;
                mike = mike.Video;
                mike = zulu.bind(entity)(mike, tango);
 115:
                mike = entity.stream;
                entity = mike.getTracks;
                entity = entity.bind(mike)();
                entity = entity.length;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'setSinkId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['sinkId'] = entity;
            entity = mike.updateAudioElement;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'mute';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity._mute;
            return entity;
        };
        report['get'] = golf;
        golf = function(argFoo) { // Original name: set
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                mike = this;
                if(entity) { _fun00018_ip = 11; continue _fun00017 }
 9:
                entity = false;
 11:
                mike['_mute'] = entity;
                entity = mike.updateAudioElement;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['set'] = golf;
        entity[5] = report;
        report = {};
        golf = 'priority';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            zulu = entity._speakingFlags;
            entity = _closure1_slot7;
            mike = entity.PRIORITY;
            mike = zulu & mike;
            entity = entity.PRIORITY;
            entity = mike === entity;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'volume';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity._volume;
            return entity;
        };
        report['get'] = golf;
        golf = function(argFoo) { // Original name: set
            mike = this;
            entity = global;
            report = entity.Math;
            tango = report.max;
            golf = entity.Math;
            oscar = golf.min;
            options = entity.Math;
            zulu = options.round;
            entity = argFoo;
            zulu = zulu.bind(options)(entity);
            entity = _closure1_slot8;
            zulu = oscar.bind(golf)(zulu, entity);
            entity = 0;
            entity = tango.bind(report)(entity, zulu);
            mike['_volume'] = entity;
            entity = mike.updateAudioElement;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['set'] = golf;
        entity[7] = report;
        report = {};
        golf = 'speakingFlags';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            entity = entity._speakingFlags;
            return entity;
        };
        report['get'] = golf;
        entity[8] = report;
        report = {};
        golf = 'setSpeakingFlags';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike._speakingFlags;
                if(!(zulu !== entity)) { _fun00020_ip = 32; continue _fun00019 }
 16:
                mike['_speakingFlags'] = entity;
                entity = mike.updateAudioElement;
                entity = entity.bind(mike)();
 32:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'updateAudioElement';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = this;
                zulu = mike.audioElement;
                entity = null;
                if(!(entity != zulu)) { _fun00022_ip = 104; continue _fun00021 }
 15:
                tango = mike._mute;
                zulu['muted'] = tango;
                report = mike._volume;
                tango = 100;
                tango = report / tango;
                zulu['volume'] = tango;
                mike = mike.sinkId;
                entity = entity != mike;
                if(!entity) { _fun00022_ip = 90; continue _fun00021 }
 59:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                tango = 8;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                entity = tango.CAN_SET_OUTPUT_DEVICES;
 90:
                if(!entity) { _fun00022_ip = 104; continue _fun00021 }
 93:
                entity = zulu.setSinkId;
                entity = entity.bind(zulu)(mike);
 104:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[10] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/webrtc/Output.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['OutputEvent'] = mike;
    return entity;
})();