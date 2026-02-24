// app/modules/voice_calls/trackVoiceFeedback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _trackVoiceFeedback() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var24 = var2.rating;
                    var22 = var2.category;
                    var21 = var2.reasonCode;
                    var20 = var2.reasonDescription;
                    var19 = var2.variant;
                    var18 = var2.feedback;
                    var8 = var2.analyticsData;
                    var4 = undefined;
                    SaveGenerator(address=60);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot5;
                    var3 = var5.getSettings;
                    var10 = var3.bind(var5)();
                    var5 = _closure1_slot5;
                    var3 = var5.getInputDeviceId;
                    var5 = var3.bind(var5)();
                    var7 = _closure1_slot5;
                    var3 = var7.getInputDevices;
                    var3 = var3.bind(var7)();
                    var17 = var3[var5];
                    var5 = _closure1_slot5;
                    var3 = var5.getOutputDeviceId;
                    var5 = var3.bind(var5)();
                    var7 = _closure1_slot5;
                    var3 = var7.getOutputDevices;
                    var3 = var3.bind(var7)();
                    var16 = var3[var5];
                    var5 = _closure1_slot5;
                    var3 = var5.getVideoDeviceId;
                    var5 = var3.bind(var5)();
                    var7 = _closure1_slot5;
                    var3 = var7.getVideoDevices;
                    var3 = var3.bind(var7)();
                    var14 = var3[var5];
                    var5 = _closure1_slot5;
                    var3 = var5.getNoiseCancellation;
                    var15 = var3.bind(var5)();
                    var5 = _closure1_slot5;
                    var3 = var5.getMediaEngine;
                    var5 = var3.bind(var5)();
                    var3 = var5.getAudioSubsystem;
                    var12 = var3.bind(var5)();
                    var5 = _closure1_slot5;
                    var3 = var5.getMediaEngine;
                    var5 = var3.bind(var5)();
                    var3 = var5.getAudioLayer;
                    var11 = var3.bind(var5)();
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getKrispModel;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=278);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var13 = null;
                    if(!(var13 == var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var8 = {};
case 12:
                    var9 = var8.output_audio_route_type;
                    var7 = _closure1_slot3;
                    var5 = _closure1_slot2;
                    var5 = var7.bind(var4)(var8, var5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 4;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.track;
                    var6 = {};
                    var25 = var13 != var24;
                    var23 = 'no response';
                    if(!var25) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var23 = var24;
case 14:
                    var6['rating'] = var23;
                    var6['category'] = var22;
                    var6['reason_code'] = var21;
                    var6['reason_description'] = var20;
                    var6['reason_variant'] = var19;
                    var6['feedback'] = var18;
                    var18 = var10.mode;
                    var6['audio_input_mode'] = var18;
                    var18 = var10.modeOptions;
                    var18 = var18.autoThreshold;
                    var6['automatic_audio_input_sensitivity_enabled'] = var18;
                    var18 = var10.modeOptions;
                    var18 = var18.threshold;
                    var6['audio_input_sensitivity'] = var18;
                    var18 = var10.modeOptions;
                    var18 = var18.vadUseKrisp;
                    var6['vad_use_advanced_voice_activity'] = var18;
                    var18 = var10.echoCancellation;
                    var6['echo_cancellation_enabled'] = var18;
                    var18 = var10.noiseSuppression;
                    var6['noise_suppression_enabled'] = var18;
                    var18 = var10.automaticGainControl;
                    var6['automatic_gain_control_enabled'] = var18;
                    var18 = var10.outputVolume;
                    var6['voice_output_volume'] = var18;
                    var6['noise_cancellation_enabled'] = var15;
                    var18 = var13 == var17;
                    var15 = undefined;
                    if(var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var15 = var17.name;
case 16:
                    var6['input_device_name'] = var15;
                    var17 = var13 == var16;
                    var15 = undefined;
                    if(var17) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var15 = var16.name;
case 18:
                    var6['output_device_name'] = var15;
                    var15 = var13 == var14;
                    var13 = undefined;
                    if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var13 = var14.name;
case 20:
                    var6['video_device_name'] = var13;
                    var6['audio_subsystem'] = var12;
                    var6['audio_layer'] = var11;
                    var10 = var10.automaticAudioSubsystem;
                    var6['automatic_audio_subsystem'] = var10;
                    var6['krisp_nc_model'] = var3;
                    var6['audio_output_mode'] = var9;
                    var27 = var6;
                    var26 = var5;
                    var5 = copyDataProperties(var27, var26);
                    var5 = arg1;
                    var5 = var7.bind(var8)(var5, var6);
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = ['output_audio_route_type'];
    var _closure1_slot2 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/trackVoiceFeedback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackVoiceFeedback() {
        var1 = undefined;
        var4 = _closure1_slot6;
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