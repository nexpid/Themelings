// app/modules/voice_calls/native/CallsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var10 = metroImportDefault;
        var5 = metroImportAll;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var5;
        var _closure1_slot3 = var9;
        var1 = global;
        var7 = var1.Object;
        var6 = var7.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var4);
        var25 = 0;
        var4 = var9[var25];
        var1 = undefined;
        var4 = var10.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var24 = 1;
        var4 = var9[var24];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var23 = 2;
        var4 = var9[var23];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var22 = 3;
        var4 = var9[var22];
        var4 = var8.bind(var1)(var4);
        var4 = var4.NativeModules;
        var _closure1_slot7 = var4;
        var21 = 4;
        var4 = var9[var21];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var20 = 5;
        var4 = var9[var20];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var19 = 6;
        var4 = var9[var19];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var18 = 7;
        var4 = var9[var18];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot11 = var4;
        var17 = 8;
        var4 = var9[var17];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot12 = var4;
        var16 = 9;
        var4 = var9[var16];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot13 = var4;
        var15 = 10;
        var4 = var9[var15];
        var4 = var10.bind(var1)(var4);
        var _closure1_slot14 = var4;
        var4 = var9[var15];
        var4 = var8.bind(var1)(var4);
        var4 = var4.RouteTypes;
        var _closure1_slot15 = var4;
        var14 = 11;
        var4 = var9[var14];
        var4 = var8.bind(var1)(var4);
        var4 = var4.NativePermissionTypes;
        var _closure1_slot16 = var4;
        var4 = function() {
            var4 = _closure1_slot5;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure1_slot10;
                        var2 = var3.isVideoEnabled;
                        var3 = var2.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 12;
                        var4 = var4[var2];
                        var2 = undefined;
                        var7 = var5.bind(var2)(var4);
                        var5 = var7.getChannelVideoLimit;
                        var4 = arg1;
                        var4 = var5.bind(var7)(var4);
                        var5 = var4.reachedLimit;
                        var11 = var4.limit;
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = 15;
                        var3 = var10[var3];
                        var7 = var4.bind(var2)(var3);
                        var5 = var7.requestPermission;
                        var3 = _closure1_slot16;
                        var3 = var3.CAMERA;
                        var3 = var5.bind(var7)(var3);
                        SaveGenerator(address=128);
case 8:
                        return var3;
case 9:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var5 = 16;
                        var5 = var8[var5];
                        var8 = var7.bind(var2)(var5);
                        var7 = var8.setVideoEnabled;
                        var5 = true;
                        var5 = var7.bind(var8)(var5);
                        _fun0002_ip = 12; continue _fun0002;
case 10:
                        return var3;
case 6:
                        var3 = 16;
                        var3 = var10[var3];
                        var7 = var4.bind(var2)(var3);
                        var5 = var7.setVideoEnabled;
                        var3 = false;
                        var3 = var5.bind(var7)(var3);
                        _fun0002_ip = 12; continue _fun0002;
case 4:
                        var3 = 13;
                        var3 = var10[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.show;
                        var3 = {};
                        var7 = _closure1_slot0;
                        var6 = 14;
                        var8 = var10[var6];
                        var8 = var7.bind(var2)(var8);
                        var12 = var8.intl;
                        var9 = var12.string;
                        var8 = var10[var6];
                        var8 = var7.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8.3ffmEx;
                        var8 = var9.bind(var12)(var8);
                        var3['title'] = var8;
                        var8 = var10[var6];
                        var8 = var7.bind(var2)(var8);
                        var9 = var8.intl;
                        var8 = var9.formatToPlainString;
                        var6 = var10[var6];
                        var6 = var7.bind(var2)(var6);
                        var6 = var6.t;
                        var7 = var6.x9mtl5;
                        var6 = {};
                        var10 = var11.toString;
                        var10 = var10.bind(var11)();
                        var6['limit'] = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var3['body'] = var6;
                        var3 = var4.bind(var5)(var3);
case 12:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure2_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure2_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var6 = var4.bind(var1)();
        var13 = 21;
        var4 = var9[var13];
        var11 = var10.bind(var1)(var4);
        var7 = var11.debounce;
        var5 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot7;
                var3 = var1.AudioRoutePicker;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var2 = var3.handleAudioRoute;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var4 = 250;
        var4 = var7.bind(var11)(var5, var4);
        var _closure1_slot17 = var4;
        var4 = var9[var13];
        var7 = var10.bind(var1)(var4);
        var5 = var7.debounce;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var5.bind(var7)(var4, var24);
        var _closure1_slot18 = var4;
        var5 = {};
        var12 = 22;
        var4 = var9[var12];
        var4 = var10.bind(var1)(var4);
        var5['EARPIECE'] = var4;
        var11 = 23;
        var4 = var9[var11];
        var4 = var10.bind(var1)(var4);
        var5['BLUETOOTH_HEADSET'] = var4;
        var7 = 24;
        var4 = var9[var7];
        var4 = var10.bind(var1)(var4);
        var5['WIRED_HEADSET'] = var4;
        var4 = var9[var7];
        var4 = var10.bind(var1)(var4);
        var5['SPEAKERPHONE'] = var4;
        var4 = var9[var7];
        var4 = var10.bind(var1)(var4);
        var5['INVALID'] = var4;
        var _closure1_slot19 = var5;
        var10 = {};
        var10['TYPE_UNKNOWN'] = var25;
        var4 = 'TYPE_UNKNOWN';
        var10[var25] = var4;
        var10['TYPE_BUILTIN_EARPIECE'] = var24;
        var4 = 'TYPE_BUILTIN_EARPIECE';
        var10[var24] = var4;
        var10['TYPE_BUILTIN_SPEAKER'] = var23;
        var4 = 'TYPE_BUILTIN_SPEAKER';
        var10[var23] = var4;
        var10['TYPE_WIRED_HEADSET'] = var22;
        var4 = 'TYPE_WIRED_HEADSET';
        var10[var22] = var4;
        var10['TYPE_WIRED_HEADPHONES'] = var21;
        var4 = 'TYPE_WIRED_HEADPHONES';
        var10[var21] = var4;
        var10['TYPE_LINE_ANALOG'] = var20;
        var4 = 'TYPE_LINE_ANALOG';
        var10[var20] = var4;
        var10['TYPE_LINE_DIGITAL'] = var19;
        var4 = 'TYPE_LINE_DIGITAL';
        var10[var19] = var4;
        var10['TYPE_BLUETOOTH_SCO'] = var18;
        var4 = 'TYPE_BLUETOOTH_SCO';
        var10[var18] = var4;
        var10['TYPE_BLUETOOTH_A2DP'] = var17;
        var4 = 'TYPE_BLUETOOTH_A2DP';
        var10[var17] = var4;
        var10['TYPE_HDMI'] = var16;
        var4 = 'TYPE_HDMI';
        var10[var16] = var4;
        var10['TYPE_HDMI_ARC'] = var15;
        var4 = 'TYPE_HDMI_ARC';
        var10[var15] = var4;
        var10['TYPE_USB_DEVICE'] = var14;
        var4 = 'TYPE_USB_DEVICE';
        var10[var14] = var4;
        var14 = 12;
        var10['TYPE_USB_ACCESSORY'] = var14;
        var4 = 'TYPE_USB_ACCESSORY';
        var10[var14] = var4;
        var14 = 13;
        var10['TYPE_DOCK'] = var14;
        var4 = 'TYPE_DOCK';
        var10[var14] = var4;
        var14 = 14;
        var10['TYPE_FM'] = var14;
        var4 = 'TYPE_FM';
        var10[var14] = var4;
        var14 = 15;
        var10['TYPE_BUILTIN_MIC'] = var14;
        var4 = 'TYPE_BUILTIN_MIC';
        var10[var14] = var4;
        var14 = 16;
        var10['TYPE_FM_TUNER'] = var14;
        var4 = 'TYPE_FM_TUNER';
        var10[var14] = var4;
        var14 = 17;
        var10['TYPE_TV_TUNER'] = var14;
        var4 = 'TYPE_TV_TUNER';
        var10[var14] = var4;
        var14 = 18;
        var10['TYPE_TELEPHONY'] = var14;
        var4 = 'TYPE_TELEPHONY';
        var10[var14] = var4;
        var14 = 19;
        var10['TYPE_AUX_LINE'] = var14;
        var4 = 'TYPE_AUX_LINE';
        var10[var14] = var4;
        var14 = 20;
        var10['TYPE_IP'] = var14;
        var4 = 'TYPE_IP';
        var10[var14] = var4;
        var10['TYPE_BUS'] = var13;
        var4 = 'TYPE_BUS';
        var10[var13] = var4;
        var10['TYPE_USB_HEADSET'] = var12;
        var4 = 'TYPE_USB_HEADSET';
        var10[var12] = var4;
        var10['TYPE_HEARING_AID'] = var11;
        var4 = 'TYPE_HEARING_AID';
        var10[var11] = var4;
        var10['TYPE_BUILTIN_SPEAKER_SAFE'] = var7;
        var4 = 'TYPE_BUILTIN_SPEAKER_SAFE';
        var10[var7] = var4;
        var4 = 25;
        var10['TYPE_REMOTE_SUBMIX'] = var4;
        var7 = 'TYPE_REMOTE_SUBMIX';
        var10[var4] = var7;
        var11 = 26;
        var10['TYPE_BLE_HEADSET'] = var11;
        var7 = 'TYPE_BLE_HEADSET';
        var10[var11] = var7;
        var11 = 27;
        var10['TYPE_BLE_SPEAKER'] = var11;
        var7 = 'TYPE_BLE_SPEAKER';
        var10[var11] = var7;
        var11 = 28;
        var10['TYPE_ECHO_REFERENCE'] = var11;
        var7 = 'TYPE_ECHO_REFERENCE';
        var10[var11] = var7;
        var11 = 29;
        var10['TYPE_HDMI_EARC'] = var11;
        var7 = 'TYPE_HDMI_EARC';
        var10[var11] = var7;
        var7 = 30;
        var10['TYPE_BLE_BROADCAST'] = var7;
        var11 = 'TYPE_BLE_BROADCAST';
        var10[var7] = var11;
        var12 = 31;
        var10['TYPE_DOCK_ANALOG'] = var12;
        var11 = 'TYPE_DOCK_ANALOG';
        var10[var12] = var11;
        var _closure1_slot20 = var10;
        var4 = var9[var4];
        var10 = var8.bind(var1)(var4);
        var4 = var10.isAndroid;
        var4 = var4.bind(var10)();
        if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 26;
                var1 = var4[var1];
                var5 = undefined;
                var7 = var3.bind(var5)(var1);
                var4 = var7.useStateFromStoresObject;
                var1 = _closure1_slot9;
                var3 = new Array(6);
                var3[0] = var1;
                var1 = _closure1_slot11;
                var3[1] = var1;
                var1 = _closure1_slot8;
                var3[2] = var1;
                var1 = _closure1_slot12;
                var3[3] = var1;
                var1 = _closure1_slot10;
                var3[4] = var1;
                var1 = _closure1_slot14;
                var3[5] = var1;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var8 = var4.bind(var2)(var3);
                        var7 = var8.isVideoMode;
                        var13 = _closure1_slot9;
                        var12 = _closure1_slot11;
                        var11 = _closure1_slot8;
                        var10 = _closure1_slot12;
                        var9 = _closure1_slot10;
                        var14 = var8;
                        var3 = var14[var7](var13, var12, var11, var10, var9, var8);
                        var4 = _closure1_slot14;
                        var2 = var4.getCurrentRouteType;
                        var2 = var2.bind(var4)();
                        var1 = _closure1_slot15;
                        var4 = var1.SPEAKER;
                        var4 = var2 === var4;
                        var1 = var1.BLUETOOTH;
                        var2 = var2 === var1;
                        var1 = {};
                        if(var4) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                        var4 = var2;
case 18:
                        if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var4 = var3;
case 20:
                        var1['isEnabled'] = var4;
                        var1['isVideoMode'] = var3;
                        var1['isBluetoothRoute'] = var2;
                        return var1;
                    }
                };
                var1 = var4.bind(var7)(var3, var1);
                var11 = var1.isEnabled;
                var _closure2_slot0 = var11;
                var10 = var1.isVideoMode;
                var _closure2_slot1 = var10;
                var1 = var1.isBluetoothRoute;
                var9 = _closure1_slot6;
                var3 = var9.useState;
                var7 = var3.bind(var9)(var11);
                var4 = _closure1_slot4;
                var3 = 2;
                var7 = var4.bind(var5)(var7, var3);
                var3 = 0;
                var4 = var7[var3];
                var _closure2_slot2 = var4;
                var3 = 1;
                var3 = var7[var3];
                var _closure2_slot3 = var3;
                var8 = var9.useCallback;
                var7 = new Array(2);
                var7[0] = var4;
                var7[1] = var10;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure1_slot14;
                        var2 = var3.getMultipleRoutesAvailable;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var3 = _closure1_slot18;
                        var2 = var3.cancel;
                        var2 = var2.bind(var3)();
                        var3 = _closure2_slot1;
                        if(var3) { _fun0006_ip = 22; continue _fun0006 }
case 24:
                        var4 = _closure2_slot3;
                        var2 = _closure2_slot2;
                        var3 = !var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 22:
                        var3 = _closure1_slot17;
                        var1 = _closure2_slot2;
                        var2 = !var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var3 = var8.bind(var9)(var3, var7);
                var8 = var9.useEffect;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot14;
                        var2 = var3.getMultipleRoutesAvailable;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0007_ip = 25; continue _fun0007 }
case 23:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                        var3 = _closure1_slot18;
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
                        _fun0007_ip = 27; continue _fun0007;
case 25:
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var8.bind(var9)(var2, var7);
                var2 = _closure1_slot1;
                var7 = _closure1_slot3;
                if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var1 = 24;
                var1 = var7[var1];
                _fun0004_ip = 30; continue _fun0004;
case 28:
                var6 = 23;
                var1 = var7[var6];
case 30:
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1['isAudioRouteEnabled'] = var4;
                var1['toggleAudio'] = var3;
                var1['routeSource'] = var2;
                return var1;
            }
        };
        _fun0001_ip = 31; continue _fun0001;
case 16:
        var4 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 26;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.useStateFromStoresObject;
            var1 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot13;
                    var1 = var2.getActiveAudioDevice;
                    var7 = var1.bind(var2)();
                    var1 = {};
                    var2 = true;
                    var1['isAudioRouteEnabled'] = var2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 27;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.showAudioOutputSelector;
                    var1['toggleAudio'] = var2;
                    var3 = _closure1_slot19;
                    var5 = null;
                    var8 = var5 == var7;
                    var2 = undefined;
                    if(var8) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var2 = var7.simpleDeviceType;
case 32:
                    if(!(var5 == var2)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 28;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.AudioDeviceType;
                    var2 = var4.INVALID;
case 34:
                    var2 = var3[var2];
                    var1['routeSource'] = var2;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
case 31:
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/voice_calls/native/CallsUtils.tsx';
        var7 = var8.bind(var9)(var7);
        var3['handleToggleVideo'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.toggleSelfDeaf;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3['handleToggleSelfDeaf'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 15;
            var5 = var4[var1];
            var1 = undefined;
            var7 = var3.bind(var1)(var5);
            var6 = var7.requestPermission;
            var2 = _closure1_slot16;
            var5 = var2.AUDIO;
            var2 = {};
            var8 = true;
            var2['showAuthorizationError'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = 16;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.toggleSelfMute;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3['handleToggleSelfMute'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.FJSZVF;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.etJjgY;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showSuppressedAlert'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.+JQCa2;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.hsNm7e;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showServerMuteAlert'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.QZ7WSU;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.Tl9JpK;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showServerDeafenAlert'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.OYzPcX;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.oBH7Y2;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showCameraDisabledAlert'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6./x4kn5;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.PpfzUF;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showScreenshareDisabledAlert'] = var6;
        var6 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var10 = 14;
                var2 = var12[var10];
                var1 = undefined;
                var2 = var11.bind(var1)(var2);
                var5 = var2.intl;
                var4 = var5.formatToPlainString;
                var2 = var12[var10];
                var2 = var11.bind(var1)(var2);
                var2 = var2.t;
                var3 = var2.ejOT9/;
                var2 = {};
                var7 = 17;
                var8 = var12[var7];
                var9 = var11.bind(var1)(var8);
                var8 = var9.getErrorInfo;
                var7 = var12[var7];
                var7 = var11.bind(var1)(var7);
                var7 = var7.AVError;
                var7 = var7.SCREENSHARE_OS_NOT_SUPPORTED;
                var8 = var8.bind(var9)(var7);
                var7 = null;
                var9 = var7 == var8;
                var7 = undefined;
                if(var9) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                var7 = var8.errorCode;
case 36:
                var2['errorCode'] = var7;
                var9 = var4.bind(var5)(var3, var2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 13;
                var2 = var5[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var6 = var5[var10];
                var6 = var8.bind(var1)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var5[var10];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.oblMYW;
                var6 = var7.bind(var11)(var6);
                var2['title'] = var6;
                var6 = var5[var10];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var5[var10];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.Wnhd3t;
                var8 = var6.bind(var7)(var5);
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = '';
                var5 = '\n\n';
                var5 = var7.bind(var6)(var8, var5, var9);
                var2['body'] = var5;
                var5 = false;
                var2['hideActionSheet'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var3['showMinOSScreenshareRequirementAlert'] = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.1N0dxc;
            var6 = var7.bind(var10)(var6);
            var2['title'] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.qqDFVV;
            var5 = var6.bind(var7)(var5);
            var2['body'] = var5;
            var5 = false;
            var2['hideActionSheet'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['showTabletRequirementAlert'] = var6;
        var6 = function(arg1) {
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 18;
            var3 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.dismissGlobalKeyboard;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.dismissVoiceChannelScreens;
            var3 = arg1;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectVoiceChannel;
                var2 = null;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var3['handleDisconnect'] = var6;
        var3['audioDeviceToIconMap'] = var5;
        var5 = function getAudioDeviceToDisplayText(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var3 = {};
                var9 = _closure1_slot0;
                var4 = _closure1_slot3;
                var7 = 14;
                var5 = var4[var7];
                var6 = undefined;
                var5 = var9.bind(var6)(var5);
                var10 = var5.intl;
                var8 = var10.string;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.Ouoi6O;
                var5 = var8.bind(var10)(var5);
                var3['EARPIECE'] = var5;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var10 = var5.intl;
                var8 = var10.string;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.i6eV39;
                var5 = var8.bind(var10)(var5);
                var3['BLUETOOTH_HEADSET'] = var5;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var10 = var5.intl;
                var8 = var10.string;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.Dluojo;
                var5 = var8.bind(var10)(var5);
                var3['WIRED_HEADSET'] = var5;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var10 = var5.intl;
                var8 = var10.string;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.snEhlp;
                var5 = var8.bind(var10)(var5);
                var3['SPEAKERPHONE'] = var5;
                var5 = var4[var7];
                var5 = var9.bind(var6)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.kCBL6u;
                var4 = var5.bind(var8)(var4);
                var3['INVALID'] = var4;
                var5 = var1.deviceType;
                var4 = _closure1_slot20;
                var4 = var4.TYPE_BLE_HEADSET;
                if(!(var5 !== var4)) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                var1 = var1.simpleDeviceType;
                var1 = var3[var1];
                _fun0010_ip = 2; continue _fun0010;
case 38:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var3 = var2[var7];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var2[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.BtXSp6;
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var3['getAudioDeviceToDisplayText'] = var5;
        var3['useMaskedSpeakerStates'] = var4;
        var2 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 26;
                var1 = var7[var1];
                var5 = undefined;
                var8 = var3.bind(var5)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot14;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot14;
                    var1 = var2.getCurrentRouteType;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var4.bind(var8)(var3, var1);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var7[var1];
                var1 = var4.bind(var5)(var1);
                var10 = var1.bind(var5)();
                var _closure2_slot0 = var10;
                var1 = _closure1_slot15;
                var4 = var1.SPEAKER;
                var11 = var3 === var4;
                var1 = var1.BLUETOOTH;
                var1 = var3 === var1;
                if(var11) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                var11 = var1;
case 40:
                if(var11) { _fun0011_ip = 42; continue _fun0011 }
case 37:
                var11 = var10;
case 42:
                var _closure2_slot1 = var11;
                var9 = _closure1_slot6;
                var3 = var9.useState;
                var7 = var3.bind(var9)(var11);
                var4 = _closure1_slot4;
                var3 = 2;
                var7 = var4.bind(var5)(var7, var3);
                var3 = 0;
                var4 = var7[var3];
                var _closure2_slot2 = var4;
                var3 = 1;
                var3 = var7[var3];
                var _closure2_slot3 = var3;
                var8 = var9.useCallback;
                var7 = new Array(2);
                var7[0] = var4;
                var7[1] = var10;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot14;
                        var2 = var3.getMultipleRoutesAvailable;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0012_ip = 22; continue _fun0012 }
case 23:
                        var3 = _closure1_slot18;
                        var2 = var3.cancel;
                        var2 = var2.bind(var3)();
                        var3 = _closure2_slot0;
                        if(var3) { _fun0012_ip = 22; continue _fun0012 }
case 24:
                        var4 = _closure2_slot3;
                        var2 = _closure2_slot2;
                        var3 = !var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 22:
                        var3 = _closure1_slot17;
                        var1 = _closure2_slot2;
                        var2 = !var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var3 = var8.bind(var9)(var3, var7);
                var8 = var9.useEffect;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var2 = function() {
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var8.bind(var9)(var2, var7);
                var2 = _closure1_slot1;
                var7 = _closure1_slot3;
                if(var1) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                var1 = 24;
                var1 = var7[var1];
                _fun0011_ip = 45; continue _fun0011;
case 43:
                var6 = 23;
                var1 = var7[var6];
case 45:
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var1['isAudioRouteEnabled'] = var4;
                var1['toggleAudio'] = var3;
                var1['routeSource'] = var2;
                return var1;
            }
        };
        var3['useImmediateMaskedSpeakerStates'] = var2;
        return var1;
    }
})();