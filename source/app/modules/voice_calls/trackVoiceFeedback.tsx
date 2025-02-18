// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/trackVoiceFeedback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: trackVoiceFeedback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            kiloes = argFoo;
            zuuluu = _closure1_slot2;
            entity = zuuluu.getSettings;
            oscard = entity.bind(zuuluu)();
            entity = zuuluu.getInputDeviceId;
            tangon = entity.bind(zuuluu)();
            entity = zuuluu.getInputDevices;
            entity = entity.bind(zuuluu)();
            foxtra = entity[tangon];
            entity = zuuluu.getOutputDeviceId;
            tangon = entity.bind(zuuluu)();
            entity = zuuluu.getOutputDevices;
            entity = entity.bind(zuuluu)();
            romeon = entity[tangon];
            entity = zuuluu.getVideoDeviceId;
            tangon = entity.bind(zuuluu)();
            entity = zuuluu.getVideoDevices;
            entity = entity.bind(zuuluu)();
            offset = entity[tangon];
            entity = zuuluu.getNoiseCancellation;
            yankee = entity.bind(zuuluu)();
            entity = zuuluu.getMediaEngine;
            tangon = entity.bind(zuuluu)();
            entity = tangon.getAudioSubsystem;
            option = entity.bind(tangon)();
            entity = zuuluu.getMediaEngine;
            zuuluu = entity.bind(zuuluu)();
            entity = zuuluu.getAudioLayer;
            golfie = entity.bind(zuuluu)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.CALL_REPORT_PROBLEM;
            michal = {};
            verify = null;
            sizing = verify != kiloes;
            backup = 'no response';
            if(!sizing) { _fun00002_ip = 199; continue _fun00001 }
 196:
            backup = kiloes;
 199:
            michal['rating'] = backup;
            backup = argBar;
            michal['reason_code'] = backup;
            backup = argBaz;
            michal['reason_description'] = backup;
            backup = argCor;
            michal['feedback'] = backup;
            backup = oscard.mode;
            michal['audio_input_mode'] = backup;
            backup = oscard.modeOptions;
            backup = backup.autoThreshold;
            michal['automatic_audio_input_sensitivity_enabled'] = backup;
            backup = oscard.modeOptions;
            backup = backup.threshold;
            michal['audio_input_sensitivity'] = backup;
            backup = oscard.echoCancellation;
            michal['echo_cancellation_enabled'] = backup;
            backup = oscard.noiseSuppression;
            michal['noise_suppression_enabled'] = backup;
            backup = oscard.automaticGainControl;
            michal['automatic_gain_control_enabled'] = backup;
            backup = oscard.outputVolume;
            michal['voice_output_volume'] = backup;
            michal['noise_cancellation_enabled'] = yankee;
            backup = verify == foxtra;
            yankee = undefined;
            if(backup) { _fun00002_ip = 353; continue _fun00001 }
 348:
            yankee = foxtra.name;
 353:
            michal['input_device_name'] = yankee;
            foxtra = verify == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 372; continue _fun00001 }
 367:
            yankee = romeon.name;
 372:
            michal['output_device_name'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 393; continue _fun00001 }
 388:
            verify = offset.name;
 393:
            michal['video_device_name'] = verify;
            michal['audio_subsystem'] = option;
            michal['audio_layer'] = golfie;
            oscard = oscard.automaticAudioSubsystem;
            michal['automatic_audio_subsystem'] = oscard;
            output = argGra;
            result = michal;
            oscard = copyDataProperties(result, output);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();