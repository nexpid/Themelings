// app/modules/voice_messages/native/VoiceMessageUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: generateBase64EncodedWaveform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = _closure1_slot16;
            michal = oscard.length;
            tangon = oscard;
            if(!(!(michal <= report))) { _fun00002_ip = 50; continue _fun00001 }
 22:
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = golfie.bind(zuuluu)(michal);
            tangon = michal.bind(zuuluu)(oscard, report);
 50:
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = global;
                tangon = entity.Math;
                zuuluu = tangon.min;
                michal = _closure1_slot13;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            report = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.fromByteArray;
            entity = global;
            entity = entity.Uint8Array;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            offset = tangon;
            verify = report;
            entity = new offset[entity](verify, option);
            entity = entity instanceof Object ? entity : tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot22 = report;
    entity = function() { // Original name: _startAudioRecording
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 321; continue _fun00003 }
 13:
                    oscard = report;
                    tangon = undefined;
                    golfie = undefined;
                    michal = null;
                    _closure1_slot19 = michal;
                    option = _closure1_slot9;
                    michal = _closure1_slot12;
                    michal = michal.REQUESTED;
                    michal = option.bind(tangon)(michal);
                    michal = _closure1_slot8;
                    michal = michal.bind(tangon)(report);
                    report = _closure1_slot4;
                    michal = report.getMediaEngine;
                    verify = michal.bind(report)();
                    option = verify.on;
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 9;
                    michal = offset[michal];
                    michal = report.bind(tangon)(michal);
                    michal = michal.MediaEngineEvent;
                    report = michal.VoiceActivity;
                    michal = _closure1_slot21;
                    michal = option.bind(verify)(report, michal);
 119: // try_start_0
                    report = global;
                    option = report.performance;
                    michal = option.now;
                    golfie = michal.bind(option)();
                    option = _closure1_slot4;
                    michal = option.getMediaEngine;
                    verify = michal.bind(option)();
                    option = verify.startLocalAudioRecording;
                    michal = {'echoCancellation': false, 'echoCancellationPreEcho': false, 'noiseSuppression': false, 'automaticGainControl': true, 'noiseCancellation': true};
                    michal = option.bind(verify)(michal);
                    SaveGenerator(address=175);
 173:
                    return michal;
 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00004_ip = 306; continue _fun00003 }
 184:
                    verify = report.performance;
                    option = verify.now;
                    option = option.bind(verify)();
                    golfie = option - golfie;
                    _closure1_slot19 = golfie;
                    offset = _closure1_slot20;
                    verify = offset.log;
                    option = _closure1_slot19;
                    golfie = 'Voice message audio startup latency:';
                    golfie = verify.bind(offset)(golfie, option);
                    option = _closure1_slot11;
                    golfie = option.getState;
                    golfie = golfie.bind(option)();
                    golfie = golfie.recordingId;
                    if(!(golfie === oscard)) { _fun00004_ip = 303; continue _fun00003 }
 257:
                    golfie = _closure1_slot9;
                    oscard = _closure1_slot12;
                    oscard = oscard.STARTED;
                    oscard = golfie.bind(tangon)(oscard);
                    oscard = _closure1_slot10;
                    golfie = report.Date;
                    report = golfie.now;
                    report = report.bind(golfie)();
                    report = oscard.bind(tangon)(report);
 300: // try_end0
                    return tangon;
 303:
                    return tangon;
 306:
                    return michal;
 309: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = _closure1_slot24;
                    zuuluu = zuuluu.bind(tangon)();
                    throw michal;
 321:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: resetAudioRecording
        zuuluu = _closure1_slot4;
        entity = zuuluu.getMediaEngine;
        oscard = entity.bind(zuuluu)();
        report = oscard.removeListener;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        zuuluu = zuuluu.MediaEngineEvent;
        tangon = zuuluu.VoiceActivity;
        zuuluu = _closure1_slot21;
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        michal = _closure1_slot6;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: stopAndGetAudioRecording
        zuuluu = _closure1_slot8;
        tangon = undefined;
        report = null;
        zuuluu = zuuluu.bind(tangon)(report);
        zuuluu = _closure1_slot9;
        zuuluu = zuuluu.bind(tangon)(report);
        zuuluu = _closure1_slot22;
        report = _closure1_slot11;
        michal = report.getState;
        michal = michal.bind(report)();
        oscard = michal.waveform;
        report = oscard.map;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = entity[Symbol.iterator];
                entity = michal().next;
                tangon = entity().value;
                zuuluu = michal;
                entity = undefined;
                zuuluu = zuuluu === entity;
                if(zuuluu) { _fun00006_ip = 25; continue _fun00005 }
 22:
                entity = tangon;
 25:
                if(zuuluu) { _fun00006_ip = 31; continue _fun00005 }
 28:
                michal.return();
 31:
                return entity;
            }
        };
        michal = report.bind(oscard)(michal);
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        golfie = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getMediaEngine;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.stopLocalAudioRecording;
            entity = function(argFoo, argBar) {
                zuuluu = _closure3_slot0;
                michal = {};
                entity = argFoo;
                michal['filename'] = entity;
                tangon = argBar;
                entity = 1000;
                entity = tangon / entity;
                michal['durationSecs'] = entity;
                entity = _closure2_slot0;
                michal['waveform'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        option = michal;
        entity = new option[zuuluu](golfie, oscard);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _endAudioRecording
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 159; continue _fun00007 }
 10:
                    tangon = _closure1_slot11;
                    michal = tangon.getState;
                    oscard = michal.bind(tangon)();
                    report = oscard.savedVoiceMessageUploadData;
                    michal = null;
                    tangon = michal == report;
                    if(!tangon) { _fun00008_ip = 62; continue _fun00007 }
 42:
                    golfie = oscard.recordingStatus;
                    oscard = _closure1_slot12;
                    oscard = oscard.REQUESTED;
                    tangon = golfie === oscard;
 62:
                    if(!tangon) { _fun00008_ip = 85; continue _fun00007 }
 65:
                    oscard = _closure1_slot25;
                    tangon = undefined;
                    tangon = oscard.bind(tangon)();
                    report = {'filename': '', 'durationSecs': 0, 'waveform': ''};
 85:
                    if(!(michal == report)) { _fun00008_ip = 112; continue _fun00007 }
 89:
                    tangon = _closure1_slot25;
                    michal = undefined;
                    michal = tangon.bind(michal)();
                    SaveGenerator(address=103);
 101:
                    return michal;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    report = michal;
                    if(tangon) { _fun00008_ip = 156; continue _fun00007 }
 112:
                    oscard = _closure1_slot11;
                    tangon = oscard.getState;
                    tangon = tangon.bind(oscard)();
                    tangon = tangon.startTimeMillis;
                    oscard = _closure1_slot24;
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)();
                    zuuluu = {};
                    zuuluu['data'] = report;
                    zuuluu['startTimeMillis'] = tangon;
                    return zuuluu;
 156:
                    return michal;
 159:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    tangon = function() { // Original name: stopAndCacheAudioRecording
        entity = undefined;
        tangon = _closure1_slot28;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = tangon;
    entity = function() { // Original name: _stopAndCacheAudioRecording
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 107; continue _fun00009 }
 7:
                    michal = _closure1_slot25;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=24);
 22:
                    return michal;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 104; continue _fun00009 }
 30:
                    oscard = _closure1_slot4;
                    report = oscard.getMediaEngine;
                    option = report.bind(oscard)();
                    golfie = option.removeListener;
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 9;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.MediaEngineEvent;
                    oscard = report.VoiceActivity;
                    report = _closure1_slot21;
                    report = golfie.bind(option)(oscard, report);
                    tangon = _closure1_slot7;
                    tangon = tangon.bind(zuuluu)(michal);
                    return zuuluu;
 104:
                    return michal;
 107:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot28 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.addVoiceMessageWave;
    var _closure1_slot5 = offset;
    offset = oscard.resetVoiceMessageState;
    var _closure1_slot6 = offset;
    offset = oscard.setSavedVoiceMessageUploadData;
    var _closure1_slot7 = offset;
    offset = oscard.setVoiceMessageRecordingId;
    var _closure1_slot8 = offset;
    offset = oscard.setVoiceMessageRecordingState;
    var _closure1_slot9 = offset;
    offset = oscard.setVoiceMessageStartTimeMillis;
    var _closure1_slot10 = offset;
    offset = oscard.useVoiceMessagesUIStore;
    var _closure1_slot11 = offset;
    oscard = oscard.VoiceMessageRecordingStatus;
    var _closure1_slot12 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    offset = oscard.WAVEFORM_WAVE_MAX_VALUE;
    var _closure1_slot13 = offset;
    offset = oscard.VOICE_RECORDING_MIN_DB;
    var _closure1_slot14 = offset;
    offset = oscard.VOICE_RECORDING_MAX_DB;
    var _closure1_slot15 = offset;
    offset = oscard.WAVEFORM_MAX_SAMPLES;
    var _closure1_slot16 = offset;
    oscard = oscard.VOICE_RECORDING_MAX_DURATION_MILLIS;
    var _closure1_slot17 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot18 = oscard;
    oscard = null;
    var _closure1_slot19 = oscard;
    oscard = 5;
    oscard = option[oscard];
    yankee = verify.bind(entity)(oscard);
    oscard = yankee.prototype;
    offset = Object.create(oscard, {constructor: {value: yankee}});
    backup = 'VoiceMessages';
    kiloes = offset;
    oscard = new kiloes[yankee](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : offset;
    var _closure1_slot20 = oscard;
    oscard = 8;
    oscard = option[oscard];
    yankee = verify.bind(entity)(oscard);
    offset = yankee.throttle;
    verify = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot11;
            michal = zuuluu.getState;
            tangon = michal.bind(zuuluu)();
            michal = tangon.startTimeMillis;
            report = null;
            if(!(report != michal)) { _fun00012_ip = 130; continue _fun00011 }
 29:
            oscard = _closure1_slot5;
            zuuluu = _closure1_slot13;
            option = _closure1_slot14;
            michal = argFoo;
            golfie = michal - option;
            michal = _closure1_slot15;
            michal = michal - option;
            michal = golfie / michal;
            zuuluu = zuuluu * michal;
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            zuuluu = tangon.savedVoiceMessageUploadData;
            zuuluu = report == zuuluu;
            if(!zuuluu) { _fun00012_ip = 119; continue _fun00011 }
 84:
            report = global;
            oscard = report.performance;
            report = oscard.now;
            report = report.bind(oscard)();
            tangon = tangon.startTimeMillis;
            report = report - tangon;
            tangon = _closure1_slot17;
            zuuluu = report >= tangon;
 119:
            if(!zuuluu) { _fun00012_ip = 130; continue _fun00011 }
 122:
            entity = _closure1_slot27;
            entity = entity.bind(michal)();
 130:
            entity = undefined;
            return entity;
        }
    };
    oscard = 100;
    oscard = offset.bind(yankee)(verify, oscard);
    var _closure1_slot21 = oscard;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/voice_messages/native/VoiceMessageUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['generateBase64EncodedWaveform'] = report;
    report = function() { // Original name: startAudioRecording
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startAudioRecording'] = report;
    report = function() { // Original name: endAudioRecording
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['endAudioRecording'] = report;
    zuuluu['stopAndCacheAudioRecording'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: emitVoiceMessageRecorded
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = argBaz;
            michal = null;
            if(!(michal != golfie)) { _fun00014_ip = 119; continue _fun00013 }
 9:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.track;
            zuuluu = _closure1_slot18;
            tangon = zuuluu.VOICE_MESSAGE_RECORDED;
            zuuluu = {};
            zuuluu['recording_start_timestamp'] = golfie;
            golfie = global;
            option = golfie.Date;
            golfie = option.now;
            golfie = golfie.bind(option)();
            zuuluu['recording_stop_timestamp'] = golfie;
            golfie = argBar;
            zuuluu['duration_secs'] = golfie;
            golfie = argFoo;
            zuuluu['result'] = golfie;
            golfie = _closure1_slot19;
            zuuluu['initialize_secs'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            _closure1_slot19 = michal;
 119:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['emitVoiceMessageRecorded'] = tangon;
    michal = function() { // Original name: triggerHaptic
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 11;
            michal = option[golfie];
            entity = undefined;
            tangon = oscard.bind(entity)(michal);
            zuuluu = tangon.triggerHapticFeedback;
            michal = 12;
            michal = option[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            michal = michal.bind(oscard)();
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = oscard.bind(entity)(report);
            report = report.HapticFeedbackTypes;
            if(michal) { _fun00016_ip = 86; continue _fun00015 }
 78:
            michal = report.IMPACT_MEDIUM;
            _fun00016_ip = 92; continue _fun00015;
 86:
            michal = report.IMPACT_LIGHT;
 92:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['triggerHaptic'] = michal;
    return entity;
})();