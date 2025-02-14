// app/modules/voice_messages/native/VoiceMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: generateBase64EncodedWaveform
        _fun101366: for(var _fun101366_ip = 0; ; ) switch(_fun101366_ip) {
 0:
            oscar = argFoo;
            report = _closure1_slot16;
            mike = oscar.length;
            tango = oscar;
            if(!(!(mike <= report))) { _fun101366_ip = 50; continue _fun101366 }
 22:
            golf = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 6;
            mike = zulu[mike];
            zulu = undefined;
            mike = golf.bind(zulu)(mike);
            tango = mike.bind(zulu)(oscar, report);
 50:
            zulu = tango.map;
            mike = function(argFoo) {
                entity = global;
                tango = entity.Math;
                zulu = tango.min;
                mike = _closure1_slot13;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report = zulu.bind(tango)(mike);
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.fromByteArray;
            entity = global;
            entity = entity.Uint8Array;
            tango = entity.prototype;
            tango = Object.create(tango, {constructor: {value: entity}});
            offset = tango;
            verify = report;
            entity = new offset[entity](verify, options);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot22 = report;
    entity = function() { // Original name: _startAudioRecording
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun101370: for(var _fun101370_ip = 0; ; ) switch(_fun101370_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun101370_ip = 325; continue _fun101370 }
 13:
                    oscar = report;
                    tango = undefined;
                    golf = undefined;
                    mike = null;
                    _closure1_slot19 = mike;
                    options = _closure1_slot9;
                    mike = _closure1_slot12;
                    mike = mike.REQUESTED;
                    mike = options.bind(tango)(mike);
                    mike = _closure1_slot8;
                    mike = mike.bind(tango)(report);
                    report = _closure1_slot4;
                    mike = report.getMediaEngine;
                    verify = mike.bind(report)();
                    options = verify.on;
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 9;
                    mike = offset[mike];
                    mike = report.bind(tango)(mike);
                    mike = mike.MediaEngineEvent;
                    report = mike.VoiceActivity;
                    mike = _closure1_slot21;
                    mike = options.bind(verify)(report, mike);
 119: // try_start_0
                    report = global;
                    options = report.performance;
                    mike = options.now;
                    golf = mike.bind(options)();
                    options = _closure1_slot4;
                    mike = options.getMediaEngine;
                    verify = mike.bind(options)();
                    options = verify.startLocalAudioRecording;
                    mike = {'echoCancellation': false, 'echoCancellationPreEcho': false, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true};
                    mike = options.bind(verify)(mike);
                    SaveGenerator(address=179);
 177:
                    return mike;
 179:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun101370_ip = 310; continue _fun101370 }
 188:
                    verify = report.performance;
                    options = verify.now;
                    options = options.bind(verify)();
                    golf = options - golf;
                    _closure1_slot19 = golf;
                    offset = _closure1_slot20;
                    verify = offset.log;
                    options = _closure1_slot19;
                    golf = 'Voice message audio startup latency:';
                    golf = verify.bind(offset)(golf, options);
                    options = _closure1_slot11;
                    golf = options.getState;
                    golf = golf.bind(options)();
                    golf = golf.recordingId;
                    if(!(golf === oscar)) { _fun101370_ip = 307; continue _fun101370 }
 261:
                    golf = _closure1_slot9;
                    oscar = _closure1_slot12;
                    oscar = oscar.STARTED;
                    oscar = golf.bind(tango)(oscar);
                    oscar = _closure1_slot10;
                    golf = report.Date;
                    report = golf.now;
                    report = report.bind(golf)();
                    report = oscar.bind(tango)(report);
 304: // try_end0
                    return tango;
 307:
                    return tango;
 310:
                    return mike;
 313: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zulu = _closure1_slot24;
                    zulu = zulu.bind(tango)();
                    throw mike;
 325:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: resetAudioRecording
        zulu = _closure1_slot4;
        entity = zulu.getMediaEngine;
        oscar = entity.bind(zulu)();
        report = oscar.removeListener;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        zulu = zulu.MediaEngineEvent;
        tango = zulu.VoiceActivity;
        zulu = _closure1_slot21;
        zulu = report.bind(oscar)(tango, zulu);
        mike = _closure1_slot6;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: stopAndGetAudioRecording
        zulu = _closure1_slot8;
        tango = undefined;
        report = null;
        zulu = zulu.bind(tango)(report);
        zulu = _closure1_slot9;
        zulu = zulu.bind(tango)(report);
        zulu = _closure1_slot22;
        report = _closure1_slot11;
        mike = report.getState;
        mike = mike.bind(report)();
        oscar = mike.waveform;
        report = oscar.map;
        mike = function(argFoo) {
            _fun101373: for(var _fun101373_ip = 0; ; ) switch(_fun101373_ip) {
 0:
                entity = argFoo;
                mike = entity[Symbol.iterator];
                entity = mike().next;
                tango = entity().value;
                zulu = mike;
                entity = undefined;
                zulu = zulu === entity;
                if(zulu) { _fun101373_ip = 25; continue _fun101373 }
 22:
                entity = tango;
 25:
                if(zulu) { _fun101373_ip = 31; continue _fun101373 }
 28:
                mike.return();
 31:
                return entity;
            }
        };
        mike = report.bind(oscar)(mike);
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        golf = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure1_slot4;
            mike = zulu.getMediaEngine;
            zulu = mike.bind(zulu)();
            mike = zulu.stopLocalAudioRecording;
            entity = function(argFoo, argBar) {
                zulu = _closure3_slot0;
                mike = {};
                entity = argFoo;
                mike['filename'] = entity;
                tango = argBar;
                entity = 1000;
                entity = tango / entity;
                mike['durationSecs'] = entity;
                entity = _closure2_slot0;
                mike['waveform'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        options = mike;
        entity = new options[zulu](golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _endAudioRecording
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun101378: for(var _fun101378_ip = 0; ; ) switch(_fun101378_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun101378_ip = 163; continue _fun101378 }
 10:
                    tango = _closure1_slot11;
                    mike = tango.getState;
                    oscar = mike.bind(tango)();
                    report = oscar.savedVoiceMessageUploadData;
                    mike = null;
                    tango = mike == report;
                    if(!tango) { _fun101378_ip = 62; continue _fun101378 }
 42:
                    golf = oscar.recordingStatus;
                    oscar = _closure1_slot12;
                    oscar = oscar.REQUESTED;
                    tango = golf === oscar;
 62:
                    if(!tango) { _fun101378_ip = 89; continue _fun101378 }
 65:
                    oscar = _closure1_slot25;
                    tango = undefined;
                    tango = oscar.bind(tango)();
                    report = {'filename': '', 'durationSecs': 0, 'waveform': ''};
 89:
                    if(!(mike == report)) { _fun101378_ip = 116; continue _fun101378 }
 93:
                    tango = _closure1_slot25;
                    mike = undefined;
                    mike = tango.bind(mike)();
                    SaveGenerator(address=107);
 105:
                    return mike;
 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    report = mike;
                    if(tango) { _fun101378_ip = 160; continue _fun101378 }
 116:
                    oscar = _closure1_slot11;
                    tango = oscar.getState;
                    tango = tango.bind(oscar)();
                    tango = tango.startTimeMillis;
                    oscar = _closure1_slot24;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)();
                    zulu = {};
                    zulu['data'] = report;
                    zulu['startTimeMillis'] = tango;
                    return zulu;
 160:
                    return mike;
 163:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    tango = function() { // Original name: stopAndCacheAudioRecording
        entity = undefined;
        tango = _closure1_slot28;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = tango;
    entity = function() { // Original name: _stopAndCacheAudioRecording
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun101382: for(var _fun101382_ip = 0; ; ) switch(_fun101382_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun101382_ip = 107; continue _fun101382 }
 7:
                    mike = _closure1_slot25;
                    zulu = undefined;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=24);
 22:
                    return mike;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun101382_ip = 104; continue _fun101382 }
 30:
                    oscar = _closure1_slot4;
                    report = oscar.getMediaEngine;
                    options = report.bind(oscar)();
                    golf = options.removeListener;
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 9;
                    report = verify[report];
                    report = oscar.bind(zulu)(report);
                    report = report.MediaEngineEvent;
                    oscar = report.VoiceActivity;
                    report = _closure1_slot21;
                    report = golf.bind(options)(oscar, report);
                    tango = _closure1_slot7;
                    tango = tango.bind(zulu)(mike);
                    return zulu;
 104:
                    return mike;
 107:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    offset = oscar.addVoiceMessageWave;
    var _closure1_slot5 = offset;
    offset = oscar.resetVoiceMessageState;
    var _closure1_slot6 = offset;
    offset = oscar.setSavedVoiceMessageUploadData;
    var _closure1_slot7 = offset;
    offset = oscar.setVoiceMessageRecordingId;
    var _closure1_slot8 = offset;
    offset = oscar.setVoiceMessageRecordingState;
    var _closure1_slot9 = offset;
    offset = oscar.setVoiceMessageStartTimeMillis;
    var _closure1_slot10 = offset;
    offset = oscar.useVoiceMessagesUIStore;
    var _closure1_slot11 = offset;
    oscar = oscar.VoiceMessageRecordingStatus;
    var _closure1_slot12 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    offset = oscar.WAVEFORM_WAVE_MAX_VALUE;
    var _closure1_slot13 = offset;
    offset = oscar.VOICE_RECORDING_MIN_DB;
    var _closure1_slot14 = offset;
    offset = oscar.VOICE_RECORDING_MAX_DB;
    var _closure1_slot15 = offset;
    offset = oscar.WAVEFORM_MAX_SAMPLES;
    var _closure1_slot16 = offset;
    oscar = oscar.VOICE_RECORDING_MAX_DURATION_MILLIS;
    var _closure1_slot17 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.AnalyticEvents;
    var _closure1_slot18 = oscar;
    oscar = null;
    var _closure1_slot19 = oscar;
    oscar = 5;
    oscar = options[oscar];
    yankee = verify.bind(entity)(oscar);
    oscar = yankee.prototype;
    offset = Object.create(oscar, {constructor: {value: yankee}});
    backup = 'VoiceMessages';
    kilo = offset;
    oscar = new kilo[yankee](backup, foxtrot);
    oscar = oscar instanceof Object ? oscar : offset;
    var _closure1_slot20 = oscar;
    oscar = 8;
    oscar = options[oscar];
    yankee = verify.bind(entity)(oscar);
    offset = yankee.throttle;
    verify = function(argFoo) {
        _fun101383: for(var _fun101383_ip = 0; ; ) switch(_fun101383_ip) {
 0:
            zulu = _closure1_slot11;
            mike = zulu.getState;
            tango = mike.bind(zulu)();
            mike = tango.startTimeMillis;
            report = null;
            if(!(report != mike)) { _fun101383_ip = 130; continue _fun101383 }
 29:
            oscar = _closure1_slot5;
            zulu = _closure1_slot13;
            options = _closure1_slot14;
            mike = argFoo;
            golf = mike - options;
            mike = _closure1_slot15;
            mike = mike - options;
            mike = golf / mike;
            zulu = zulu * mike;
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            zulu = tango.savedVoiceMessageUploadData;
            zulu = report == zulu;
            if(!zulu) { _fun101383_ip = 119; continue _fun101383 }
 84:
            report = global;
            oscar = report.performance;
            report = oscar.now;
            report = report.bind(oscar)();
            tango = tango.startTimeMillis;
            report = report - tango;
            tango = _closure1_slot17;
            zulu = report >= tango;
 119:
            if(!zulu) { _fun101383_ip = 130; continue _fun101383 }
 122:
            entity = _closure1_slot27;
            entity = entity.bind(mike)();
 130:
            entity = undefined;
            return entity;
        }
    };
    oscar = 100;
    oscar = offset.bind(yankee)(verify, oscar);
    var _closure1_slot21 = oscar;
    oscar = 13;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/voice_messages/native/VoiceMessageUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['generateBase64EncodedWaveform'] = report;
    report = function() { // Original name: startAudioRecording
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startAudioRecording'] = report;
    report = function() { // Original name: endAudioRecording
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['endAudioRecording'] = report;
    zulu['stopAndCacheAudioRecording'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: emitVoiceMessageRecorded
        _fun101386: for(var _fun101386_ip = 0; ; ) switch(_fun101386_ip) {
 0:
            golf = argBaz;
            mike = null;
            if(!(mike != golf)) { _fun101386_ip = 119; continue _fun101386 }
 9:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.track;
            zulu = _closure1_slot18;
            tango = zulu.VOICE_MESSAGE_RECORDED;
            zulu = {};
            zulu['recording_start_timestamp'] = golf;
            golf = global;
            options = golf.Date;
            golf = options.now;
            golf = golf.bind(options)();
            zulu['recording_stop_timestamp'] = golf;
            golf = argBar;
            zulu['duration_secs'] = golf;
            golf = argFoo;
            zulu['result'] = golf;
            golf = _closure1_slot19;
            zulu['initialize_secs'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            _closure1_slot19 = mike;
 119:
            entity = undefined;
            return entity;
        }
    };
    zulu['emitVoiceMessageRecorded'] = tango;
    mike = function() { // Original name: triggerHaptic
        _fun101387: for(var _fun101387_ip = 0; ; ) switch(_fun101387_ip) {
 0:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            golf = 11;
            mike = options[golf];
            entity = undefined;
            tango = oscar.bind(entity)(mike);
            zulu = tango.triggerHapticFeedback;
            mike = 12;
            mike = options[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            mike = mike.bind(oscar)();
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = oscar.bind(entity)(report);
            report = report.HapticFeedbackTypes;
            if(mike) { _fun101387_ip = 86; continue _fun101387 }
 78:
            mike = report.IMPACT_MEDIUM;
            _fun101387_ip = 92; continue _fun101387;
 86:
            mike = report.IMPACT_LIGHT;
 92:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['triggerHaptic'] = mike;
    return entity;
})();