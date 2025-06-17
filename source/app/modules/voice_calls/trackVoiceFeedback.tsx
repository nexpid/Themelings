// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _trackVoiceFeedback
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 595; continue _fun00001 }
 13:
                    vacuum = michal.rating;
                    source = michal.category;
                    update = michal.reasonCode;
                    echoed = michal.reasonDescription;
                    result = michal.variant;
                    output = michal.feedback;
                    report = michal.analyticsData;
                    tangon = undefined;
                    SaveGenerator(address=60);
 58:
                    return tangon;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 592; continue _fun00001 }
 69:
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getSettings;
                    verify = zuuluu.bind(golfie)();
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getInputDeviceId;
                    golfie = zuuluu.bind(golfie)();
                    option = _closure1_slot3;
                    zuuluu = option.getInputDevices;
                    zuuluu = zuuluu.bind(option)();
                    sizing = zuuluu[golfie];
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getOutputDeviceId;
                    golfie = zuuluu.bind(golfie)();
                    option = _closure1_slot3;
                    zuuluu = option.getOutputDevices;
                    zuuluu = zuuluu.bind(option)();
                    kiloes = zuuluu[golfie];
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getVideoDeviceId;
                    golfie = zuuluu.bind(golfie)();
                    option = _closure1_slot3;
                    zuuluu = option.getVideoDevices;
                    zuuluu = zuuluu.bind(option)();
                    foxtra = zuuluu[golfie];
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getNoiseCancellation;
                    backup = zuuluu.bind(golfie)();
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getMediaEngine;
                    golfie = zuuluu.bind(golfie)();
                    zuuluu = golfie.getAudioSubsystem;
                    yankee = zuuluu.bind(golfie)();
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getMediaEngine;
                    golfie = zuuluu.bind(golfie)();
                    zuuluu = golfie.getAudioLayer;
                    offset = zuuluu.bind(golfie)();
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    zuuluu = 2;
                    zuuluu = option[zuuluu];
                    golfie = golfie.bind(tangon)(zuuluu);
                    zuuluu = golfie.getKrispModel;
                    zuuluu = zuuluu.bind(golfie)();
                    SaveGenerator(address=278);
 276:
                    return zuuluu;
 278:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 589; continue _fun00001 }
 287:
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    oscard = 3;
                    oscard = option[oscard];
                    option = golfie.bind(tangon)(oscard);
                    golfie = option.track;
                    oscard = {};
                    romeon = null;
                    sequen = romeon != vacuum;
                    ctrled = 'no response';
                    if(!sequen) { _fun00002_ip = 332; continue _fun00001 }
 329:
                    ctrled = vacuum;
 332:
                    oscard['rating'] = ctrled;
                    oscard['category'] = source;
                    oscard['reason_code'] = update;
                    oscard['reason_description'] = echoed;
                    oscard['reason_variant'] = result;
                    oscard['feedback'] = output;
                    output = verify.mode;
                    oscard['audio_input_mode'] = output;
                    output = verify.modeOptions;
                    output = output.autoThreshold;
                    oscard['automatic_audio_input_sensitivity_enabled'] = output;
                    output = verify.modeOptions;
                    output = output.threshold;
                    oscard['audio_input_sensitivity'] = output;
                    output = verify.modeOptions;
                    output = output.vadUseKrisp;
                    oscard['vad_use_advanced_voice_activity'] = output;
                    output = verify.echoCancellation;
                    oscard['echo_cancellation_enabled'] = output;
                    output = verify.noiseSuppression;
                    oscard['noise_suppression_enabled'] = output;
                    output = verify.automaticGainControl;
                    oscard['automatic_gain_control_enabled'] = output;
                    output = verify.outputVolume;
                    oscard['voice_output_volume'] = output;
                    oscard['noise_cancellation_enabled'] = backup;
                    output = romeon == sizing;
                    backup = undefined;
                    if(output) { _fun00002_ip = 494; continue _fun00001 }
 489:
                    backup = sizing.name;
 494:
                    oscard['input_device_name'] = backup;
                    sizing = romeon == kiloes;
                    backup = undefined;
                    if(sizing) { _fun00002_ip = 513; continue _fun00001 }
 508:
                    backup = kiloes.name;
 513:
                    oscard['output_device_name'] = backup;
                    backup = romeon == foxtra;
                    romeon = undefined;
                    if(backup) { _fun00002_ip = 534; continue _fun00001 }
 529:
                    romeon = foxtra.name;
 534:
                    oscard['video_device_name'] = romeon;
                    oscard['audio_subsystem'] = yankee;
                    oscard['audio_layer'] = offset;
                    verify = verify.automaticAudioSubsystem;
                    oscard['automatic_audio_subsystem'] = verify;
                    oscard['krisp_nc_model'] = zuuluu;
                    record = oscard;
                    config = report;
                    report = copyDataProperties(record, config);
                    report = argFoo;
                    report = golfie.bind(option)(report, oscard);
                    return tangon;
 589:
                    return zuuluu;
 592:
                    return michal;
 595:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
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
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/trackVoiceFeedback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: trackVoiceFeedback
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();