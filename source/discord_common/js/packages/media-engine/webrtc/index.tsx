// discord_common/js/packages/media-engine/webrtc/index.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun50806: for(var _fun50806_ip = 0; ; ) switch(_fun50806_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun50806_ip = 48; continue _fun50806 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun50806_ip = 86; continue _fun50806;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun50807: for(var _fun50807_ip = 0; ; ) switch(_fun50807_ip) {
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
            _fun50807_ip = 74; continue _fun50807;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AudioSubsystems;
    var _closure1_slot9 = options;
    options = tango.DEFAULT_DEVICE_ID;
    var _closure1_slot10 = options;
    options = tango.DEFAULT_VOLUME;
    var _closure1_slot11 = options;
    options = tango.Features;
    var _closure1_slot12 = options;
    tango = tango.MediaEngineContextTypes;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.BROWSER_SUPPORTS_VIDEO;
    var _closure1_slot14 = options;
    options = tango.BROWSER_SUPPORTS_DIAGNOSTICS;
    var _closure1_slot15 = options;
    tango = tango.BROWSER_SUPPORTS_VOICE;
    var _closure1_slot16 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Logger;
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'MediaEngineWebRTC';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot17 = tango;
    tango = 26;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        report = function() { // Original name: MediaEngineWebRTC
            report = this;
            entity = _closure1_slot4;
            tango = _closure2_slot2;
            zulu = undefined;
            entity = entity.bind(zulu)(report, tango);
            entity = _closure1_slot18;
            entity = entity.bind(zulu)(report, tango);
            var _closure3_slot0 = entity;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            golf = 10;
            golf = report[golf];
            golf = tango.bind(zulu)(golf);
            entity['Video'] = golf;
            golf = 11;
            golf = report[golf];
            golf = tango.bind(zulu)(golf);
            entity['Camera'] = golf;
            golf = null;
            entity['_audioContext'] = golf;
            options = _closure1_slot11;
            entity['outputVolume'] = options;
            options = _closure1_slot10;
            entity['sourceId'] = options;
            entity['sinkId'] = options;
            options = false;
            entity['enabled'] = options;
            verify = global;
            verify = verify.Set;
            offset = verify.prototype;
            offset = Object.create(offset, {constructor: {value: verify}});
            foxtrot = offset;
            verify = new foxtrot[verify](romeo);
            verify = verify instanceof Object ? verify : offset;
            entity['connections'] = verify;
            entity['interacted'] = options;
            entity['loopback'] = golf;
            entity['voiceActivityInput'] = golf;
            options = {};
            entity['pendingDesktopInputs'] = options;
            entity['enablePromise'] = golf;
            golf = function(argFoo, argBar) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = argBar;
                var _closure4_slot1 = mike;
                mike = _closure3_slot0;
                zulu = mike.connections;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    report = argFoo;
                    tango = report.setHasActiveVideoOutputSink;
                    zulu = _closure4_slot0;
                    mike = _closure4_slot1;
                    entity = 'MediaEngineWebRTC.handleActiveSinksChange';
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleActiveSinksChange'] = golf;
            golf = function(argFoo) {
                _fun50814: for(var _fun50814_ip = 0; ; ) switch(_fun50814_ip) {
 0:
                    zulu = argFoo;
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 12;
                    mike = entity[oscar];
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    mike = mike.MediaEngineEvent;
                    mike = mike.DeviceChange;
                    if(!(mike !== zulu)) { _fun50814_ip = 248; continue _fun50814 }
 47:
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.MediaEngineEvent;
                    mike = mike.VoiceActivity;
                    if(!(mike === zulu)) { _fun50814_ip = 338; continue _fun50814 }
 83:
                    zulu = _closure3_slot0;
                    report = zulu.voiceActivityInput;
                    zulu = null;
                    if(!(zulu == report)) { _fun50814_ip = 338; continue _fun50814 }
 105:
                    zulu = _closure3_slot0;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 13;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    tango = zulu.getAudioContext;
                    verify = tango.bind(zulu)();
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    offset = report;
                    tango = new offset[oscar](verify, options);
                    tango = tango instanceof Object ? tango : report;
                    zulu['voiceActivityInput'] = tango;
                    oscar = zulu.voiceActivityInput;
                    report = oscar.setSource;
                    tango = zulu.sourceId;
                    tango = report.bind(oscar)(tango);
                    golf = zulu.voiceActivityInput;
                    oscar = golf.on;
                    report = zulu.handleVoiceActivity;
                    tango = 'voiceactivity';
                    tango = oscar.bind(golf)(tango, report);
                    zulu = zulu.enabled;
                    if(!zulu) { _fun50814_ip = 338; continue _fun50814 }
 226:
                    mike = _closure3_slot0;
                    zulu = mike.voiceActivityInput;
                    mike = zulu.enable;
                    mike = mike.bind(zulu)();
                    _fun50814_ip = 338; continue _fun50814;
 248:
                    mike = global;
                    zulu = mike.navigator;
                    zulu = zulu.mediaDevices;
                    report = null;
                    zulu = report != zulu;
                    if(!zulu) { _fun50814_ip = 293; continue _fun50814 }
 271:
                    tango = mike.navigator;
                    tango = tango.mediaDevices;
                    tango = tango.ondevicechange;
                    zulu = report == tango;
 293:
                    if(!zulu) { _fun50814_ip = 338; continue _fun50814 }
 296:
                    mike = mike.navigator;
                    zulu = mike.mediaDevices;
                    mike = function() {
                        mike = _closure3_slot0;
                        entity = mike.handleDeviceChange;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    zulu['ondevicechange'] = mike;
                    zulu = _closure3_slot0;
                    mike = zulu.handleDeviceChange;
                    mike = mike.bind(zulu)();
 338:
                    return entity;
                }
            };
            entity['handleNewListener'] = golf;
            golf = function(argFoo) {
                _fun50816: for(var _fun50816_ip = 0; ; ) switch(_fun50816_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    verify = 12;
                    mike = entity[verify];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = mike.MediaEngineEvent;
                    mike = mike.DeviceChange;
                    if(!(mike !== zulu)) { _fun50816_ip = 189; continue _fun50816 }
 47:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[verify];
                    mike = tango.bind(entity)(mike);
                    mike = mike.MediaEngineEvent;
                    mike = mike.VoiceActivity;
                    if(!(mike === zulu)) { _fun50816_ip = 301; continue _fun50816 }
 83:
                    zulu = _closure3_slot0;
                    tango = zulu.voiceActivityInput;
                    zulu = null;
                    tango = zulu != tango;
                    if(!tango) { _fun50816_ip = 155; continue _fun50816 }
 105:
                    options = _closure3_slot0;
                    golf = options.listenerCount;
                    offset = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[verify];
                    oscar = offset.bind(entity)(oscar);
                    oscar = oscar.MediaEngineEvent;
                    oscar = oscar.VoiceActivity;
                    golf = golf.bind(options)(oscar);
                    oscar = 0;
                    tango = oscar === golf;
 155:
                    if(!tango) { _fun50816_ip = 301; continue _fun50816 }
 161:
                    mike = _closure3_slot0;
                    oscar = mike.voiceActivityInput;
                    tango = oscar.destroy;
                    tango = tango.bind(oscar)();
                    mike['voiceActivityInput'] = zulu;
                    _fun50816_ip = 301; continue _fun50816;
 189:
                    mike = global;
                    zulu = mike.navigator;
                    oscar = zulu.mediaDevices;
                    zulu = null;
                    golf = zulu == oscar;
                    tango = undefined;
                    if(golf) { _fun50816_ip = 220; continue _fun50816 }
 214:
                    tango = oscar.ondevicechange;
 220:
                    tango = zulu != tango;
                    if(!tango) { _fun50816_ip = 280; continue _fun50816 }
 227:
                    golf = _closure3_slot0;
                    oscar = golf.listenerCount;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = options.bind(entity)(report);
                    report = report.MediaEngineEvent;
                    report = report.DeviceChange;
                    oscar = oscar.bind(golf)(report);
                    report = 0;
                    tango = report === oscar;
 280:
                    if(!tango) { _fun50816_ip = 301; continue _fun50816 }
 283:
                    mike = mike.navigator;
                    mike = mike.mediaDevices;
                    mike['ondevicechange'] = zulu;
 301:
                    return entity;
                }
            };
            entity['handleRemoveListener'] = golf;
            golf = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getDevices;
                zulu = entity.bind(mike)();
                mike = zulu.then;
                entity = function(argFoo) {
                    _fun50818: for(var _fun50818_ip = 0; ; ) switch(_fun50818_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        tango = zulu().value;
                        mike = entity;
                        options = undefined;
                        mike = mike === options;
                        oscar = undefined;
                        if(mike) { _fun50818_ip = 27; continue _fun50818 }
 24:
                        oscar = tango;
 27:
                        report = undefined;
                        if(mike) { _fun50818_ip = 57; continue _fun50818 }
 32:
                        golf = zulu().value;
                        tango = entity;
                        tango = tango === options;
                        report = undefined;
                        mike = tango;
                        if(tango) { _fun50818_ip = 57; continue _fun50818 }
 51:
                        report = golf;
                        mike = tango;
 57:
                        tango = undefined;
                        if(mike) { _fun50818_ip = 87; continue _fun50818 }
 62:
                        golf = zulu().value;
                        zulu = entity;
                        zulu = zulu === options;
                        tango = undefined;
                        mike = zulu;
                        if(zulu) { _fun50818_ip = 87; continue _fun50818 }
 81:
                        tango = golf;
                        mike = zulu;
 87:
                        if(mike) { _fun50818_ip = 93; continue _fun50818 }
 90:
                        entity.return();
 93:
                        zulu = _closure3_slot0;
                        mike = zulu.emit;
                        golf = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 12;
                        entity = verify[entity];
                        entity = golf.bind(options)(entity);
                        entity = entity.MediaEngineEvent;
                        foxtrot = entity.DeviceChange;
                        backup = zulu;
                        romeo = oscar;
                        yankee = report;
                        offset = tango;
                        entity = backup[mike](foxtrot, romeo, yankee, offset, verify);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleDeviceChange'] = golf;
            golf = function(argFoo) {
                oscar = _closure3_slot0;
                report = oscar.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.MediaEngineEvent;
                tango = mike.VoiceActivity;
                zulu = argFoo;
                mike = 0;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            entity['handleVoiceActivity'] = golf;
            golf = function() {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.MediaEngineEvent;
                mike = mike.DesktopSourceEnd;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleDesktopSourceEnd'] = golf;
            golf = function(argFoo) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.MediaEngineEvent;
                zulu = mike.AudioPermission;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleAudioPermission'] = golf;
            oscar = function(argFoo) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.MediaEngineEvent;
                zulu = mike.VideoPermission;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleVideoPermission'] = oscar;
            options = entity.on;
            golf = entity.handleNewListener;
            oscar = 'newListener';
            oscar = options.bind(entity)(oscar, golf);
            options = entity.on;
            golf = entity.handleRemoveListener;
            oscar = 'removeListener';
            oscar = options.bind(entity)(oscar, golf);
            oscar = _closure1_slot0;
            mike = 15;
            mike = report[mike];
            golf = oscar.bind(zulu)(mike);
            oscar = golf.setActiveSinksChangeCallback;
            mike = entity.handleActiveSinksChange;
            mike = oscar.bind(golf)(mike);
            mike = 16;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.bind(zulu)(entity);
            return entity;
        };
        var _closure2_slot2 = report;
        zulu = _closure1_slot8;
        tango = undefined;
        mike = argFoo;
        mike = zulu.bind(tango)(report, mike);
        zulu = _closure1_slot5;
        oscar = {};
        mike = 'destroy';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            _fun50823: for(var _fun50823_ip = 0; ; ) switch(_fun50823_ip) {
 0:
                zulu = this;
                mike = zulu.voiceActivityInput;
                entity = null;
                if(!(entity != mike)) { _fun50823_ip = 37; continue _fun50823 }
 15:
                tango = zulu.voiceActivityInput;
                mike = tango.destroy;
                mike = mike.bind(tango)();
                zulu['voiceActivityInput'] = entity;
 37:
                mike = zulu.eachConnection;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.destroy;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                tango = zulu.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.MediaEngineEvent;
                mike = mike.Destroy;
                mike = tango.bind(zulu)(mike);
                mike = zulu.removeAllListeners;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(66);
        mike[0] = oscar;
        oscar = {};
        golf = 'interact';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun50825: for(var _fun50825_ip = 0; ; ) switch(_fun50825_ip) {
 0:
                zulu = this;
                entity = zulu.interacted;
                if(entity) { _fun50825_ip = 53; continue _fun50825 }
 12:
                entity = global;
                tango = entity.document;
                mike = tango.createElement;
                entity = 'audio';
                mike = mike.bind(tango)(entity);
                entity = mike.play;
                entity = entity.bind(mike)();
                entity = true;
                zulu['interacted'] = entity;
 53:
                mike = zulu.eachConnection;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.interact;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'supported';
        oscar['key'] = golf;
        verify = function() { // Original name: value
            entity = true;
            return entity;
        };
        oscar['value'] = verify;
        mike[2] = oscar;
        oscar = {};
        verify = 'supports';
        oscar['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun50828: for(var _fun50828_ip = 0; ; ) switch(_fun50828_ip) {
 0:
                zulu = argFoo;
                mike = _closure1_slot12;
                mike = mike.AUDIO_INPUT_DEVICE;
                if(!(mike !== zulu)) { _fun50828_ip = 674; continue _fun50828 }
 23:
                mike = _closure1_slot12;
                mike = mike.AUDIO_OUTPUT_DEVICE;
                if(!(mike !== zulu)) { _fun50828_ip = 644; continue _fun50828 }
 40:
                mike = _closure1_slot12;
                mike = mike.VIDEO;
                if(!(mike !== zulu)) { _fun50828_ip = 638; continue _fun50828 }
 57:
                mike = _closure1_slot12;
                mike = mike.DESKTOP_CAPTURE;
                if(!(mike !== zulu)) { _fun50828_ip = 601; continue _fun50828 }
 74:
                mike = _closure1_slot12;
                mike = mike.VOICE_PROCESSING;
                if(!(mike !== zulu)) { _fun50828_ip = 562; continue _fun50828 }
 91:
                mike = _closure1_slot12;
                mike = mike.NATIVE_PING;
                if(!(mike !== zulu)) { _fun50828_ip = 556; continue _fun50828 }
 108:
                mike = _closure1_slot12;
                mike = mike.DIAGNOSTICS;
                if(!(mike !== zulu)) { _fun50828_ip = 556; continue _fun50828 }
 125:
                mike = _closure1_slot12;
                mike = mike.DESKTOP_CAPTURE_APPLICATIONS;
                if(!(mike !== zulu)) { _fun50828_ip = 517; continue _fun50828 }
 142:
                mike = _closure1_slot12;
                mike = mike.LOOPBACK;
                if(!(mike !== zulu)) { _fun50828_ip = 517; continue _fun50828 }
 159:
                mike = _closure1_slot12;
                mike = mike.NOISE_SUPPRESSION;
                if(!(mike !== zulu)) { _fun50828_ip = 517; continue _fun50828 }
 176:
                mike = _closure1_slot12;
                mike = mike.AUTOMATIC_GAIN_CONTROL;
                if(!(mike !== zulu)) { _fun50828_ip = 517; continue _fun50828 }
 193:
                mike = _closure1_slot12;
                mike = mike.NOISE_CANCELLATION;
                if(!(mike !== zulu)) { _fun50828_ip = 489; continue _fun50828 }
 210:
                mike = _closure1_slot12;
                mike = mike.QOS;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 227:
                mike = _closure1_slot12;
                mike = mike.ATTENUATION;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 244:
                mike = _closure1_slot12;
                mike = mike.AUTOMATIC_VAD;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 261:
                mike = _closure1_slot12;
                mike = mike.LEGACY_AUDIO_SUBSYSTEM;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 278:
                mike = _closure1_slot12;
                mike = mike.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 295:
                mike = _closure1_slot12;
                mike = mike.AUTOMATIC_AUDIO_SUBSYSTEM;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 312:
                mike = _closure1_slot12;
                mike = mike.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 329:
                mike = _closure1_slot12;
                mike = mike.DEBUG_LOGGING;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 346:
                mike = _closure1_slot12;
                mike = mike.VOICE_PANNING;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 363:
                mike = _closure1_slot12;
                mike = mike.AUTO_ENABLE;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 377:
                mike = _closure1_slot12;
                mike = mike.DESKTOP_CAPTURE_FORMAT;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 391:
                mike = _closure1_slot12;
                mike = mike.VIDEO_HOOK;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 405:
                mike = _closure1_slot12;
                mike = mike.OPEN_H264;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 419:
                mike = _closure1_slot12;
                mike = mike.AEC_DUMP;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 433:
                mike = _closure1_slot12;
                mike = mike.DISABLE_VIDEO;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 447:
                mike = _closure1_slot12;
                mike = mike.CONNECTION_REPLAY;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 461:
                mike = _closure1_slot12;
                mike = mike.SIMULCAST;
                if(!(mike !== zulu)) { _fun50828_ip = 485; continue _fun50828 }
 475:
                mike = _closure1_slot12;
                mike = mike.SCREEN_CAPTURE_KIT;
 485:
                mike = false;
                return mike;
 489:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 18;
                mike = zulu[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                mike = mike.bind(zulu)();
                return mike;
 517:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                zulu = mike.name;
                mike = 'Safari';
                mike = mike !== zulu;
                return mike;
 556:
                mike = _closure1_slot15;
                return mike;
 562:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                zulu = mike.name;
                mike = 'Chrome';
                mike = mike === zulu;
                return mike;
 601:
                mike = global;
                mike = mike.navigator;
                tango = mike.mediaDevices;
                zulu = null;
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun50828_ip = 632; continue _fun50828 }
 626:
                mike = tango.getDisplayMedia;
 632:
                mike = zulu != mike;
                return mike;
 638:
                mike = _closure1_slot14;
                return mike;
 644:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 14;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.CAN_SET_OUTPUT_DEVICES;
                return mike;
 674:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.CAN_SET_DEVICES;
                return entity;
            }
        };
        oscar['value'] = verify;
        mike[3] = oscar;
        oscar = {};
        verify = 'getAudioContext';
        oscar['key'] = verify;
        verify = function() { // Original name: value
            _fun50829: for(var _fun50829_ip = 0; ; ) switch(_fun50829_ip) {
 0:
                entity = this;
                zulu = entity._audioContext;
                mike = null;
                if(!(mike == zulu)) { _fun50829_ip = 49; continue _fun50829 }
 15:
                mike = global;
                mike = mike.AudioContext;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                tango = zulu;
                mike = new tango[mike](zulu);
                mike = mike instanceof Object ? mike : zulu;
                entity['_audioContext'] = mike;
 49:
                entity = entity._audioContext;
                return entity;
            }
        };
        oscar['value'] = verify;
        mike[4] = oscar;
        oscar = {};
        verify = 'connect';
        oscar['key'] = verify;
        verify = function(argFoo, argBar, argBaz) { // Original name: value
            _fun50830: for(var _fun50830_ip = 0; ; ) switch(_fun50830_ip) {
 0:
                report = argFoo;
                entity = argBaz;
                tango = this;
                var _closure3_slot0 = tango;
                mike = entity.ssrc;
                mike = entity.address;
                mike = entity.port;
                mike = entity.modes;
                zulu = entity.streamUserId;
                backup = entity.streamParameters;
                golf = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 19;
                entity = verify[entity];
                oscar = undefined;
                romeo = golf.bind(oscar)(entity);
                yankee = romeo.makeConnection;
                entity = tango.getAudioContext;
                kilo = entity.bind(tango)();
                sizing = argBar;
                result = romeo;
                output = report;
                entity = result[yankee](output, sizing, kilo, backup, foxtrot);
                entity['streamUserId'] = zulu;
                offset = entity.setOutputVolume;
                zulu = tango.outputVolume;
                zulu = offset.bind(entity)(zulu);
                offset = entity.setSinkId;
                zulu = tango.sinkId;
                zulu = offset.bind(entity)(zulu);
                romeo = entity.once;
                zulu = 20;
                offset = verify[zulu];
                offset = golf.bind(oscar)(offset);
                offset = offset.BaseConnectionEvent;
                yankee = offset.Destroy;
                offset = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.connections;
                    mike = zulu.delete;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                offset = romeo.bind(entity)(yankee, offset);
                yankee = entity.on;
                offset = verify[zulu];
                offset = golf.bind(oscar)(offset);
                offset = offset.BaseConnectionEvent;
                offset = offset.Silence;
                options = function(argFoo) {
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    entity = report.bind(entity)(mike);
                    entity = entity.MediaEngineEvent;
                    mike = entity.Silence;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                options = yankee.bind(entity)(offset, options);
                yankee = entity.on;
                options = verify[zulu];
                options = golf.bind(oscar)(options);
                options = options.BaseConnectionEvent;
                offset = options.DesktopSourceEnd;
                options = tango.handleDesktopSourceEnd;
                options = yankee.bind(entity)(offset, options);
                yankee = entity.on;
                options = verify[zulu];
                options = golf.bind(oscar)(options);
                options = options.BaseConnectionEvent;
                offset = options.AudioPermission;
                options = tango.handleAudioPermission;
                options = yankee.bind(entity)(offset, options);
                options = entity.on;
                zulu = verify[zulu];
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.BaseConnectionEvent;
                golf = zulu.VideoPermission;
                zulu = tango.handleVideoPermission;
                zulu = options.bind(entity)(golf, zulu);
                zulu = tango.interacted;
                if(!zulu) { _fun50830_ip = 360; continue _fun50830 }
 350:
                zulu = entity.interact;
                zulu = zulu.bind(entity)();
 360:
                zulu = _closure1_slot13;
                zulu = zulu.DEFAULT;
                if(!(report === zulu)) { _fun50830_ip = 415; continue _fun50830 }
 374:
                report = entity.setAudioSource;
                zulu = tango.sourceId;
                zulu = report.bind(entity)(zulu);
                zulu = tango.enabled;
                if(!zulu) { _fun50830_ip = 415; continue _fun50830 }
 399:
                report = entity.input;
                zulu = report.enableAudioInput;
                zulu = zulu.bind(report)();
 415:
                report = tango.connections;
                zulu = report.add;
                zulu = zulu.bind(report)(entity);
                zulu = tango.emit;
                report = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 12;
                mike = golf[mike];
                mike = report.bind(oscar)(mike);
                mike = mike.MediaEngineEvent;
                mike = mike.Connection;
                mike = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        oscar['value'] = verify;
        mike[5] = oscar;
        oscar = {};
        verify = 'findConnection';
        oscar['key'] = verify;
        verify = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = global;
            tango = mike.Array;
            zulu = tango.from;
            mike = this;
            mike = mike.connections;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.find;
            entity = function(argFoo) {
                _fun50834: for(var _fun50834_ip = 0; ; ) switch(_fun50834_ip) {
 0:
                    zulu = _closure3_slot0;
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun50834_ip = 32; continue _fun50834 }
 16:
                    zulu = argFoo;
                    zulu = zulu.context;
                    mike = _closure3_slot0;
                    entity = zulu === mike;
 32:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = verify;
        mike[6] = oscar;
        oscar = {};
        verify = 'eachConnection';
        oscar['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = this;
            zulu = mike.connections;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun50836: for(var _fun50836_ip = 0; ; ) switch(_fun50836_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure3_slot1;
                    mike = null;
                    mike = mike != tango;
                    if(!mike) { _fun50836_ip = 32; continue _fun50836 }
 19:
                    report = zulu.context;
                    tango = _closure3_slot1;
                    mike = report !== tango;
 32:
                    if(mike) { _fun50836_ip = 46; continue _fun50836 }
 35:
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 46:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar['value'] = verify;
        mike[7] = oscar;
        oscar = {};
        verify = 'enable';
        oscar['key'] = verify;
        verify = function() { // Original name: value
            _fun50837: for(var _fun50837_ip = 0; ; ) switch(_fun50837_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                tango = entity.enablePromise;
                zulu = null;
                if(!(zulu == tango)) { _fun50837_ip = 55; continue _fun50837 }
 21:
                zulu = entity._enable;
                tango = zulu.bind(entity)();
                zulu = tango.finally;
                mike = function() {
                    mike = _closure3_slot0;
                    entity = null;
                    mike['enablePromise'] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                entity['enablePromise'] = mike;
 55:
                entity = entity.enablePromise;
                return entity;
            }
        };
        oscar['value'] = verify;
        mike[8] = oscar;
        oscar = {};
        verify = '_enable';
        oscar['key'] = verify;
        verify = _closure1_slot3;
        options = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun50840: for(var _fun50840_ip = 0; ; ) switch(_fun50840_ip) {
 0:
                    StartGenerator();
                    options = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun50840_ip = 384; continue _fun50840 }
 13:
                    mike = undefined;
                    report = undefined;
                    golf = undefined;
                    zulu = options.enabled;
                    if(zulu) { _fun50840_ip = 381; continue _fun50840 }
 30:
                    zulu = options.getAudioContext;
                    zulu = zulu.bind(options)();
                    oscar = zulu.audioWorklet;
                    tango = oscar.addModule;
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zulu = 21;
                    zulu = yankee[zulu];
                    zulu = offset.bind(mike)(zulu);
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=84);
 82:
                    return zulu;
 84:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun50840_ip = 378; continue _fun50840 }
 93:
                    oscar = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 13;
                    tango = offset[tango];
                    offset = oscar.bind(mike)(tango);
                    tango = options.getAudioContext;
                    foxtrot = tango.bind(options)();
                    oscar = offset.prototype;
                    oscar = Object.create(oscar, {constructor: {value: offset}});
                    backup = oscar;
                    tango = new backup[offset](foxtrot, romeo);
                    yankee = tango instanceof Object ? tango : oscar;
                    report = yankee;
                    offset = yankee.on;
                    oscar = options.handleAudioPermission;
                    tango = 'permission';
                    tango = offset.bind(yankee)(tango, oscar);
 168: // try_start_0
                    oscar = report;
                    tango = oscar.enable;
                    tango = tango.bind(oscar)();
                    SaveGenerator(address=185);
 183:
                    return tango;
 185:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun50840_ip = 345; continue _fun50840 }
 194:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    oscar = 17;
                    oscar = yankee[oscar];
                    oscar = offset.bind(mike)(oscar);
                    offset = oscar.name;
                    oscar = 'Firefox';
                    if(!(oscar === offset)) { _fun50840_ip = 249; continue _fun50840 }
 229:
                    oscar = options.handleDeviceChange;
                    oscar = oscar.bind(options)();
                    SaveGenerator(address=243);
 241:
                    return oscar;
 243:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun50840_ip = 329; continue _fun50840 }
 249:
                    offset = true;
                    options['enabled'] = offset;
                    yankee = options.eachConnection;
                    verify = _closure1_slot13;
                    offset = verify.DEFAULT;
                    verify = function(argFoo) {
                        entity = argFoo;
                        mike = entity.input;
                        entity = mike.enableAudioInput;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    verify = yankee.bind(options)(verify, offset);
                    verify = options.voiceActivityInput;
                    golf = verify;
                    options = null;
                    if(!(options != verify)) { _fun50840_ip = 314; continue _fun50840 }
 301:
                    options = golf;
                    golf = options.enable;
                    golf = golf.bind(options)();
 314: // try_end0
                    options = report;
                    golf = options.destroy;
                    golf = golf.bind(options)();
                    _fun50840_ip = 381; continue _fun50840;
 329:
                    options = report;
                    golf = options.destroy;
                    golf = golf.bind(options)();
                    return oscar;
 345:
                    golf = report;
                    oscar = golf.destroy;
                    oscar = oscar.bind(golf)();
                    return tango;
 361: // catch_target0
                    CatchBlockStart(arg_register=3);
                    oscar = report;
                    report = oscar.destroy;
                    report = report.bind(oscar)();
                    throw tango;
 378:
                    return zulu;
 381:
                    return mike;
 384:
                    return entity;
                }
            };
            return entity;
        };
        options = verify.bind(tango)(options);
        var _closure2_slot1 = options;
        options = function() { // Original name: _enable
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        oscar['value'] = options;
        mike[9] = oscar;
        oscar = {};
        options = 'setInputVolume';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[10] = oscar;
        oscar = {};
        options = 'setOutputVolume';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = this;
            var _closure3_slot0 = zulu;
            mike['outputVolume'] = zulu;
            zulu = mike.connections;
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.setOutputVolume;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[11] = oscar;
        oscar = {};
        options = 'getAudioInputDevices';
        oscar['key'] = options;
        options = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getAudioInputDevices;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar['value'] = options;
        mike[12] = oscar;
        oscar = {};
        options = 'setAudioInputDevice';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50847: for(var _fun50847_ip = 0; ; ) switch(_fun50847_ip) {
 0:
                zulu = argFoo;
                mike = this;
                var _closure3_slot0 = zulu;
                mike['sourceId'] = zulu;
                report = mike.eachConnection;
                tango = _closure1_slot13;
                tango = tango.DEFAULT;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.setAudioSource;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = report.bind(mike)(entity, tango);
                report = mike.voiceActivityInput;
                entity = null;
                if(!(entity != report)) { _fun50847_ip = 71; continue _fun50847 }
 60:
                tango = report.setSource;
                tango = tango.bind(report)(zulu);
 71:
                mike = mike.loopback;
                if(!(entity != mike)) { _fun50847_ip = 92; continue _fun50847 }
 81:
                entity = mike.setAudioSource;
                entity = entity.bind(mike)(zulu);
 92:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = options;
        mike[13] = oscar;
        oscar = {};
        options = 'getAudioOutputDevices';
        oscar['key'] = options;
        options = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getAudioOutputDevices;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar['value'] = options;
        mike[14] = oscar;
        oscar = {};
        options = 'setAudioOutputDevice';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50850: for(var _fun50850_ip = 0; ; ) switch(_fun50850_ip) {
 0:
                zulu = argFoo;
                entity = this;
                var _closure3_slot0 = zulu;
                entity['sinkId'] = zulu;
                report = entity.connections;
                tango = report.forEach;
                mike = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.setSinkId;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = tango.bind(report)(mike);
                mike = entity.loopback;
                entity = null;
                if(!(entity != mike)) { _fun50850_ip = 64; continue _fun50850 }
 51:
                entity = mike.setAudioSink;
                entity = entity.bind(mike)(zulu);
 64:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = options;
        mike[15] = oscar;
        oscar = {};
        options = 'getVideoInputDevices';
        oscar['key'] = options;
        options = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getVideoInputDevices;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar['value'] = options;
        mike[16] = oscar;
        oscar = {};
        options = 'setVideoInputDevice';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.eachConnection;
            mike = _closure1_slot13;
            mike = mike.DEFAULT;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.setVideoSource;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[17] = oscar;
        oscar = {};
        options = 'getSupportedVideoCodecs';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = undefined;
            mike = new Array(0);
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar['value'] = options;
        mike[18] = oscar;
        oscar = {};
        options = 'getCodecCapabilities';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = undefined;
            mike = '';
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar['value'] = options;
        mike[19] = oscar;
        oscar = {};
        options = 'getDesktopSource';
        oscar['key'] = options;
        options = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun50858: for(var _fun50858_ip = 0; ; ) switch(_fun50858_ip) {
 0:
                    StartGenerator();
                    oscar = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun50858_ip = 107; continue _fun50858 }
 10:
                    report = undefined;
                    if(!(oscar === report)) { _fun50858_ip = 18; continue _fun50858 }
 16:
                    oscar = false;
 18:
                    SaveGenerator(address=22);
 20:
                    return report;
 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun50858_ip = 104; continue _fun50858 }
 28:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 22;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.get;
                    zulu = argFoo;
                    zulu = tango.bind(report)(zulu, oscar);
                    SaveGenerator(address=69);
 67:
                    return zulu;
 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun50858_ip = 101; continue _fun50858 }
 75:
                    tango = this;
                    report = tango.pendingDesktopInputs;
                    tango = zulu.id;
                    report[tango] = zulu;
                    tango = zulu.id;
                    return tango;
 101:
                    return zulu;
 104:
                    return mike;
 107:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        options = verify.bind(tango)(options);
        var _closure2_slot0 = options;
        options = function() { // Original name: getDesktopSource
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        oscar['value'] = options;
        mike[20] = oscar;
        oscar = {};
        options = 'getScreenPreviews';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[21] = oscar;
        oscar = {};
        options = 'getWindowPreviews';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[22] = oscar;
        oscar = {};
        options = 'setClipBufferLength';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[23] = oscar;
        oscar = {};
        options = 'saveClip';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[24] = oscar;
        oscar = {};
        options = 'saveClipForUser';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[25] = oscar;
        oscar = {};
        options = 'updateClipMetadata';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[26] = oscar;
        oscar = {};
        options = 'exportClip';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'UNSUPPORTED';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[27] = oscar;
        oscar = {};
        options = 'setGoLiveSource';
        oscar['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun50867: for(var _fun50867_ip = 0; ; ) switch(_fun50867_ip) {
 0:
                mike = argFoo;
                tango = argBar;
                zulu = this;
                oscar = null;
                if(!(oscar != mike)) { _fun50867_ip = 186; continue _fun50867 }
 20:
                report = mike.desktopDescription;
                if(!(oscar != report)) { _fun50867_ip = 203; continue _fun50867 }
 33:
                report = zulu.findConnection;
                report = report.bind(zulu)(tango);
                if(!(oscar != report)) { _fun50867_ip = 203; continue _fun50867 }
 53:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                golf = 23;
                golf = verify[golf];
                verify = undefined;
                options = options.bind(verify)(golf);
                report = _closure1_slot13;
                report = report.STREAM;
                golf = tango === report;
                report = 'Go live context is not STREAM';
                report = options.bind(verify)(golf, report);
                report = false;
                var _closure3_slot0 = report;
                golf = zulu.pendingDesktopInputs;
                report = mike.desktopDescription;
                report = report.id;
                report = golf[report];
                var _closure3_slot1 = report;
                if(!(oscar != report)) { _fun50867_ip = 156; continue _fun50867 }
 139:
                oscar = zulu.eachConnection;
                report = function(argFoo) {
                    _fun50869: for(var _fun50869_ip = 0; ; ) switch(_fun50869_ip) {
 0:
                        zulu = argFoo;
                        mike = zulu.streamUserId;
                        entity = zulu.userId;
                        if(!(mike === entity)) { _fun50869_ip = 42; continue _fun50869 }
 18:
                        mike = true;
                        _closure3_slot0 = mike;
                        mike = zulu.setDesktopInput;
                        entity = _closure3_slot1;
                        entity = mike.bind(zulu)(entity);
 42:
                        entity = undefined;
                        return entity;
                    }
                };
                report = oscar.bind(zulu)(report, tango);
 156:
                report = _closure3_slot0;
                if(!report) { _fun50867_ip = 203; continue _fun50867 }
 163:
                report = zulu.pendingDesktopInputs;
                mike = mike.desktopDescription;
                mike = mike.id;
                mike = delete report[mike];
                _fun50867_ip = 203; continue _fun50867;
 186:
                mike = zulu.eachConnection;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.setDesktopInput;
                    entity = null;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity, tango);
 203:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = options;
        mike[28] = oscar;
        oscar = {};
        options = 'setClipsSource';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[29] = oscar;
        oscar = {};
        options = 'setClipsQualitySettings';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = options;
        mike[30] = oscar;
        oscar = {};
        options = 'setSoundshareSource';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[31] = oscar;
        oscar = {};
        options = 'setAudioSubsystem';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[32] = oscar;
        oscar = {};
        options = 'queueAudioSubsystem';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[33] = oscar;
        oscar = {};
        options = 'getAudioSubsystem';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.STANDARD;
            return entity;
        };
        oscar['value'] = options;
        mike[34] = oscar;
        oscar = {};
        options = 'getAudioLayer';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = '';
            return entity;
        };
        oscar['value'] = options;
        mike[35] = oscar;
        oscar = {};
        options = 'getDebugLogging';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = options;
        mike[36] = oscar;
        oscar = {};
        options = 'setDebugLogging';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[37] = oscar;
        oscar = {};
        options = 'writeAudioDebugState';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'Audio debug state is not supported.';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[38] = oscar;
        oscar = {};
        options = 'setExperimentalAdm';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[39] = oscar;
        oscar = {};
        options = 'setLoopback';
        oscar['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun50881: for(var _fun50881_ip = 0; ; ) switch(_fun50881_ip) {
 0:
                mike = argFoo;
                entity = this;
                if(!mike) { _fun50881_ip = 21; continue _fun50881 }
 9:
                tango = entity.loopback;
                zulu = null;
                if(!(zulu != tango)) { _fun50881_ip = 68; continue _fun50881 }
 21:
                if(mike) { _fun50881_ip = 36; continue _fun50881 }
 24:
                tango = entity.loopback;
                zulu = null;
                mike = zulu == tango;
 36:
                if(mike) { _fun50881_ip = 177; continue _fun50881 }
 42:
                zulu = entity.loopback;
                mike = zulu.stop;
                mike = mike.bind(zulu)();
                mike = null;
                entity['loopback'] = mike;
                _fun50881_ip = 177; continue _fun50881;
 68:
                mike = entity.enable;
                mike = mike.bind(entity)();
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 24;
                zulu = zulu[mike];
                mike = undefined;
                oscar = tango.bind(mike)(zulu);
                mike = entity.getAudioContext;
                verify = mike.bind(entity)();
                options = entity.sourceId;
                golf = entity.sinkId;
                zulu = oscar.prototype;
                zulu = Object.create(zulu, {constructor: {value: oscar}});
                offset = zulu;
                mike = new offset[oscar](verify, options, golf, oscar);
                mike = mike instanceof Object ? mike : zulu;
                entity['loopback'] = mike;
                zulu = entity.loopback;
                mike = zulu.setNoiseCancellation;
                entity = argBar;
                entity = entity.noiseCancellation;
                entity = mike.bind(zulu)(entity);
 177:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = options;
        mike[40] = oscar;
        oscar = {};
        options = 'getLoopback';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = this;
            mike = entity.loopback;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        oscar['value'] = options;
        mike[41] = oscar;
        oscar = {};
        options = 'setH264Enabled';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[42] = oscar;
        oscar = {};
        options = 'setAv1Enabled';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[43] = oscar;
        oscar = {};
        options = 'setH265Enabled';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[44] = oscar;
        oscar = {};
        options = 'getCodecSurvey';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'getCodecSurvey is not implemented on MediaEngine of browsers.';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[45] = oscar;
        oscar = {};
        options = 'startAecDump';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[46] = oscar;
        oscar = {};
        options = 'stopAecDump';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[47] = oscar;
        oscar = {};
        options = 'setAecDump';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[48] = oscar;
        oscar = {};
        options = 'createReplayConnection';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'Connection replay is not supported.';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        oscar['value'] = options;
        mike[49] = oscar;
        oscar = {};
        options = 'setUseDirectVideo';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[50] = oscar;
        oscar = {};
        options = 'setOnVideoContainerResized';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[51] = oscar;
        oscar = {};
        options = 'setMaxSyncDelayOverride';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[52] = oscar;
        oscar = {};
        options = 'rankRtcRegions';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'RTC region latency test is not supported.';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[53] = oscar;
        oscar = {};
        options = 'applyMediaFilterSettings';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar['value'] = options;
        mike[54] = oscar;
        oscar = {};
        options = 'startLocalAudioRecording';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'startLocalAudioRecording is not supported.';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[55] = oscar;
        oscar = {};
        options = 'stopLocalAudioRecording';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[56] = oscar;
        oscar = {};
        options = 'setHasFullbandPerformance';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[57] = oscar;
        oscar = {};
        options = 'getSupportedSecureFramesProtocolVersion';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = 0;
            return entity;
        };
        oscar['value'] = options;
        mike[58] = oscar;
        oscar = {};
        options = 'getSupportedBandwidthEstimationExperiments';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = undefined;
            mike = new Array(0);
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar['value'] = options;
        mike[59] = oscar;
        oscar = {};
        options = 'getMLSSigningKey';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            oscar = 'getMLSSigningKey is not supported.';
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = options;
        mike[60] = oscar;
        oscar = {};
        options = 'setSidechainCompression';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[61] = oscar;
        oscar = {};
        options = 'setSidechainCompressionStrength';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[62] = oscar;
        oscar = {};
        options = 'setNativeDesktopVideoSourcePickerActive';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[63] = oscar;
        oscar = {};
        options = 'presentNativeScreenSharePicker';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[64] = oscar;
        oscar = {};
        options = 'releaseNativeDesktopVideoSourcePickerStream';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[65] = oscar;
        oscar = {};
        oscar['key'] = golf;
        entity = function() { // Original name: value
            _fun50907: for(var _fun50907_ip = 0; ; ) switch(_fun50907_ip) {
 0:
                entity = _closure1_slot16;
                if(!entity) { _fun50907_ip = 46; continue _fun50907 }
 10:
                entity = global;
                zulu = entity.window;
                tango = zulu.AudioContext;
                zulu = null;
                if(!(zulu != tango)) { _fun50907_ip = 46; continue _fun50907 }
 30:
                entity = entity.window;
                entity = entity.RTCPeerConnection;
                if(!(zulu == entity)) { _fun50907_ip = 115; continue _fun50907 }
 46:
                oscar = _closure1_slot17;
                report = oscar.info;
                golf = _closure1_slot1;
                options = _closure1_slot2;
                entity = 17;
                tango = options[entity];
                zulu = undefined;
                tango = golf.bind(zulu)(tango);
                tango = tango.name;
                entity = options[entity];
                entity = golf.bind(zulu)(entity);
                zulu = entity.version;
                entity = 'WebRTC is not supported on';
                entity = report.bind(oscar)(entity, tango, zulu);
                entity = false;
                _fun50907_ip = 139; continue _fun50907;
 115:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 25;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                entity = true;
 139:
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 27;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/index.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();