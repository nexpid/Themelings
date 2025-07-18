// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _trackVoiceFeedback() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 593; continue _fun0001 }
 13:
                    var23 = var2.rating;
                    var21 = var2.category;
                    var20 = var2.reasonCode;
                    var19 = var2.reasonDescription;
                    var18 = var2.variant;
                    var17 = var2.feedback;
                    var5 = var2.analyticsData;
                    var4 = undefined;
                    SaveGenerator(address=59);
 57:
                    return var4;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 590; continue _fun0001 }
 68:
                    var7 = _closure1_slot3;
                    var3 = var7.getSettings;
                    var9 = var3.bind(var7)();
                    var7 = _closure1_slot3;
                    var3 = var7.getInputDeviceId;
                    var7 = var3.bind(var7)();
                    var8 = _closure1_slot3;
                    var3 = var8.getInputDevices;
                    var3 = var3.bind(var8)();
                    var16 = var3[var7];
                    var7 = _closure1_slot3;
                    var3 = var7.getOutputDeviceId;
                    var7 = var3.bind(var7)();
                    var8 = _closure1_slot3;
                    var3 = var8.getOutputDevices;
                    var3 = var3.bind(var8)();
                    var15 = var3[var7];
                    var7 = _closure1_slot3;
                    var3 = var7.getVideoDeviceId;
                    var7 = var3.bind(var7)();
                    var8 = _closure1_slot3;
                    var3 = var8.getVideoDevices;
                    var3 = var3.bind(var8)();
                    var13 = var3[var7];
                    var7 = _closure1_slot3;
                    var3 = var7.getNoiseCancellation;
                    var14 = var3.bind(var7)();
                    var7 = _closure1_slot3;
                    var3 = var7.getMediaEngine;
                    var7 = var3.bind(var7)();
                    var3 = var7.getAudioSubsystem;
                    var11 = var3.bind(var7)();
                    var7 = _closure1_slot3;
                    var3 = var7.getMediaEngine;
                    var7 = var3.bind(var7)();
                    var3 = var7.getAudioLayer;
                    var10 = var3.bind(var7)();
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var3 = var8[var3];
                    var7 = var7.bind(var4)(var3);
                    var3 = var7.getKrispModel;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=277);
 275:
                    return var3;
 277:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 587; continue _fun0001 }
 286:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 3;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.track;
                    var6 = {};
                    var12 = null;
                    var24 = var12 != var23;
                    var22 = 'no response';
                    if(!var24) { _fun0001_ip = 331; continue _fun0001 }
 328:
                    var22 = var23;
 331:
                    var6['rating'] = var22;
                    var6['category'] = var21;
                    var6['reason_code'] = var20;
                    var6['reason_description'] = var19;
                    var6['reason_variant'] = var18;
                    var6['feedback'] = var17;
                    var17 = var9.mode;
                    var6['audio_input_mode'] = var17;
                    var17 = var9.modeOptions;
                    var17 = var17.autoThreshold;
                    var6['automatic_audio_input_sensitivity_enabled'] = var17;
                    var17 = var9.modeOptions;
                    var17 = var17.threshold;
                    var6['audio_input_sensitivity'] = var17;
                    var17 = var9.modeOptions;
                    var17 = var17.vadUseKrisp;
                    var6['vad_use_advanced_voice_activity'] = var17;
                    var17 = var9.echoCancellation;
                    var6['echo_cancellation_enabled'] = var17;
                    var17 = var9.noiseSuppression;
                    var6['noise_suppression_enabled'] = var17;
                    var17 = var9.automaticGainControl;
                    var6['automatic_gain_control_enabled'] = var17;
                    var17 = var9.outputVolume;
                    var6['voice_output_volume'] = var17;
                    var6['noise_cancellation_enabled'] = var14;
                    var17 = var12 == var16;
                    var14 = undefined;
                    if(var17) { _fun0001_ip = 492; continue _fun0001 }
 487:
                    var14 = var16.name;
 492:
                    var6['input_device_name'] = var14;
                    var16 = var12 == var15;
                    var14 = undefined;
                    if(var16) { _fun0001_ip = 511; continue _fun0001 }
 506:
                    var14 = var15.name;
 511:
                    var6['output_device_name'] = var14;
                    var14 = var12 == var13;
                    var12 = undefined;
                    if(var14) { _fun0001_ip = 532; continue _fun0001 }
 527:
                    var12 = var13.name;
 532:
                    var6['video_device_name'] = var12;
                    var6['audio_subsystem'] = var11;
                    var6['audio_layer'] = var10;
                    var9 = var9.automaticAudioSubsystem;
                    var6['automatic_audio_subsystem'] = var9;
                    var6['krisp_nc_model'] = var3;
                    var26 = var6;
                    var25 = var5;
                    var5 = copyDataProperties(var26, var25);
                    var5 = arg1;
                    var5 = var7.bind(var8)(var5, var6);
                    return var4;
 587:
                    return var3;
 590:
                    return var2;
 593:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/trackVoiceFeedback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackVoiceFeedback() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();