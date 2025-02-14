// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/trackVoiceFeedback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: trackVoiceFeedback
        _fun123547: for(var _fun123547_ip = 0; ; ) switch(_fun123547_ip) {
 0:
            kilo = argFoo;
            zulu = _closure1_slot2;
            entity = zulu.getSettings;
            oscar = entity.bind(zulu)();
            entity = zulu.getInputDeviceId;
            tango = entity.bind(zulu)();
            entity = zulu.getInputDevices;
            entity = entity.bind(zulu)();
            foxtrot = entity[tango];
            entity = zulu.getOutputDeviceId;
            tango = entity.bind(zulu)();
            entity = zulu.getOutputDevices;
            entity = entity.bind(zulu)();
            romeo = entity[tango];
            entity = zulu.getVideoDeviceId;
            tango = entity.bind(zulu)();
            entity = zulu.getVideoDevices;
            entity = entity.bind(zulu)();
            offset = entity[tango];
            entity = zulu.getNoiseCancellation;
            yankee = entity.bind(zulu)();
            entity = zulu.getMediaEngine;
            tango = entity.bind(zulu)();
            entity = tango.getAudioSubsystem;
            options = entity.bind(tango)();
            entity = zulu.getMediaEngine;
            zulu = entity.bind(zulu)();
            entity = zulu.getAudioLayer;
            golf = entity.bind(zulu)();
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot3;
            zulu = mike.CALL_REPORT_PROBLEM;
            mike = {};
            verify = null;
            sizing = verify != kilo;
            backup = 'no response';
            if(!sizing) { _fun123547_ip = 199; continue _fun123547 }
 196:
            backup = kilo;
 199:
            mike['rating'] = backup;
            backup = argBar;
            mike['reason_code'] = backup;
            backup = argBaz;
            mike['reason_description'] = backup;
            backup = argCorge;
            mike['feedback'] = backup;
            backup = oscar.mode;
            mike['audio_input_mode'] = backup;
            backup = oscar.modeOptions;
            backup = backup.autoThreshold;
            mike['automatic_audio_input_sensitivity_enabled'] = backup;
            backup = oscar.modeOptions;
            backup = backup.threshold;
            mike['audio_input_sensitivity'] = backup;
            backup = oscar.echoCancellation;
            mike['echo_cancellation_enabled'] = backup;
            backup = oscar.noiseSuppression;
            mike['noise_suppression_enabled'] = backup;
            backup = oscar.automaticGainControl;
            mike['automatic_gain_control_enabled'] = backup;
            backup = oscar.outputVolume;
            mike['voice_output_volume'] = backup;
            mike['noise_cancellation_enabled'] = yankee;
            backup = verify == foxtrot;
            yankee = undefined;
            if(backup) { _fun123547_ip = 353; continue _fun123547 }
 348:
            yankee = foxtrot.name;
 353:
            mike['input_device_name'] = yankee;
            foxtrot = verify == romeo;
            yankee = undefined;
            if(foxtrot) { _fun123547_ip = 372; continue _fun123547 }
 367:
            yankee = romeo.name;
 372:
            mike['output_device_name'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun123547_ip = 393; continue _fun123547 }
 388:
            verify = offset.name;
 393:
            mike['video_device_name'] = verify;
            mike['audio_subsystem'] = options;
            mike['audio_layer'] = golf;
            oscar = oscar.automaticAudioSubsystem;
            mike['automatic_audio_subsystem'] = oscar;
            output = argGrault;
            result = mike;
            oscar = copyDataProperties(result, output);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();