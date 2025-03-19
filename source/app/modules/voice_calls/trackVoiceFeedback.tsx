// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/trackVoiceFeedback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: trackVoiceFeedback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            result = entity.rating;
            sizing = entity.reasonCode;
            kiloes = entity.reasonDescription;
            backup = entity.feedback;
            michal = entity.analyticsData;
            tangon = _closure1_slot2;
            zuuluu = tangon.getSettings;
            oscard = zuuluu.bind(tangon)();
            zuuluu = tangon.getInputDeviceId;
            report = zuuluu.bind(tangon)();
            zuuluu = tangon.getInputDevices;
            zuuluu = zuuluu.bind(tangon)();
            foxtra = zuuluu[report];
            zuuluu = tangon.getOutputDeviceId;
            report = zuuluu.bind(tangon)();
            zuuluu = tangon.getOutputDevices;
            zuuluu = zuuluu.bind(tangon)();
            romeon = zuuluu[report];
            zuuluu = tangon.getVideoDeviceId;
            report = zuuluu.bind(tangon)();
            zuuluu = tangon.getVideoDevices;
            zuuluu = zuuluu.bind(tangon)();
            offset = zuuluu[report];
            zuuluu = tangon.getNoiseCancellation;
            yankee = zuuluu.bind(tangon)();
            zuuluu = tangon.getMediaEngine;
            report = zuuluu.bind(tangon)();
            zuuluu = report.getAudioSubsystem;
            option = zuuluu.bind(report)();
            zuuluu = tangon.getMediaEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getAudioLayer;
            golfie = zuuluu.bind(tangon)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            zuuluu = {};
            verify = null;
            echoed = verify != result;
            output = 'no response';
            if(!echoed) { _fun00002_ip = 219; continue _fun00001 }
 216:
            output = result;
 219:
            zuuluu['rating'] = output;
            zuuluu['reason_code'] = sizing;
            zuuluu['reason_description'] = kiloes;
            zuuluu['feedback'] = backup;
            backup = oscard.mode;
            zuuluu['audio_input_mode'] = backup;
            backup = oscard.modeOptions;
            backup = backup.autoThreshold;
            zuuluu['automatic_audio_input_sensitivity_enabled'] = backup;
            backup = oscard.modeOptions;
            backup = backup.threshold;
            zuuluu['audio_input_sensitivity'] = backup;
            backup = oscard.echoCancellation;
            zuuluu['echo_cancellation_enabled'] = backup;
            backup = oscard.noiseSuppression;
            zuuluu['noise_suppression_enabled'] = backup;
            backup = oscard.automaticGainControl;
            zuuluu['automatic_gain_control_enabled'] = backup;
            backup = oscard.outputVolume;
            zuuluu['voice_output_volume'] = backup;
            zuuluu['noise_cancellation_enabled'] = yankee;
            backup = verify == foxtra;
            yankee = undefined;
            if(backup) { _fun00002_ip = 350; continue _fun00001 }
 345:
            yankee = foxtra.name;
 350:
            zuuluu['input_device_name'] = yankee;
            foxtra = verify == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 369; continue _fun00001 }
 364:
            yankee = romeon.name;
 369:
            zuuluu['output_device_name'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 390; continue _fun00001 }
 385:
            verify = offset.name;
 390:
            zuuluu['video_device_name'] = verify;
            zuuluu['audio_subsystem'] = option;
            zuuluu['audio_layer'] = golfie;
            oscard = oscard.automaticAudioSubsystem;
            zuuluu['automatic_audio_subsystem'] = oscard;
            source = zuuluu;
            update = michal;
            michal = copyDataProperties(source, update);
            michal = argFoo;
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();