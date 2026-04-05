// app/components_native/common/VoiceSensitivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'height': 20};
    var4['sensitivity'] = var9;
    var9 = {'position': 'absolute', 'top': 7, 'left': 0, 'right': 0, 'bottom': 7, 'flexDirection': 'row'};
    var4['sensitivityBar'] = var9;
    var9 = {'position': 'absolute', 'backgroundColor': null, 'opacity': 0.5, 'top': 7, 'left': 0, 'right': 0, 'bottom': 7};
    var10 = 11;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE;
    var9['backgroundColor'] = var13;
    var4['sensitivityFill'] = var9;
    var9 = {'height': 6, 'borderRadius': 3};
    var4['sensitivityCommon'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var9['backgroundColor'] = var13;
    var4['sensitivityMin'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var9['backgroundColor'] = var13;
    var4['sensitivityMax'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var13 = 12;
    var13 = var6[var13];
    var16 = var5.bind(var1)(var13);
    var15 = var16.hexWithOpacity;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.PRIMARY_400;
    var13 = 0.6;
    var13 = var15.bind(var16)(var14, var13);
    var9['backgroundColor'] = var13;
    var4['sensitivityDefault'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_360;
    var9['backgroundColor'] = var10;
    var4['sensitivitySpeaking'] = var9;
    var9 = {'flex': 1, 'backgroundColor': 'transparent', 'marginVertical': 4294967286};
    var4['sensitivitySlider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/VoiceSensitivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceSensitivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.auto;
            var _closure2_slot0 = var1;
            var2 = var3.threshold;
            var3 = var3.onThresholdChange;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot14;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var14 = 100;
            var16 = var2 + var14;
            var7 = _closure1_slot5;
            var2 = var7.useRef;
            var3 = null;
            var17 = var2.bind(var7)(var3);
            var2 = var7.useRef;
            var19 = var2.bind(var7)(var3);
            var2 = var7.useRef;
            var9 = var2.bind(var7)(var3);
            var5 = var7.useState;
            var10 = _closure1_slot8;
            var2 = var10.isCurrentUserSpeaking;
            var2 = var2.bind(var10)();
            var2 = var5.bind(var7)(var2);
            var23 = _closure1_slot4;
            var18 = 2;
            var2 = var23.bind(var4)(var2, var18);
            var12 = 0;
            var11 = var2[var12];
            var _closure2_slot2 = var11;
            var22 = 1;
            var2 = var2[var22];
            var _closure2_slot3 = var2;
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 13;
            var2 = var13[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var5 = var2.width;
            var _closure2_slot4 = var5;
            var10 = _closure1_slot0;
            var2 = 14;
            var2 = var13[var2];
            var21 = var10.bind(var4)(var2);
            var20 = var21.useStateFromStores;
            var2 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var2;
            var10 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var20.bind(var21)(var13, var10, var2);
            var _closure2_slot5 = var2;
            var10 = var7.useState;
            var10 = var10.bind(var7)(var12);
            var10 = var23.bind(var4)(var10, var18);
            var20 = var10[var12];
            var _closure2_slot6 = var20;
            var10 = var10[var22];
            var _closure2_slot7 = var10;
            var10 = var7.useState;
            var10 = var10.bind(var7)(var16);
            var13 = var23.bind(var4)(var10, var18);
            var10 = var13[var12];
            var _closure2_slot8 = var10;
            var13 = var13[var22];
            var _closure2_slot9 = var13;
            var21 = var7.useState;
            var13 = var10 / var14;
            var13 = var21.bind(var7)(var13);
            var13 = var23.bind(var4)(var13, var18);
            var21 = var13[var12];
            var13 = var13[var22];
            var _closure2_slot10 = var13;
            var24 = var7.useState;
            var13 = -100;
            var13 = var20 / var13;
            var13 = var22 - var13;
            var13 = var5 * var13;
            var13 = var24.bind(var7)(var13);
            var13 = var23.bind(var4)(var13, var18);
            var18 = var13[var12];
            var13 = var13[var22];
            var _closure2_slot11 = var13;
            var23 = var7.useEffect;
            var13 = new Array(2);
            var13[0] = var1;
            var13[1] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot8;
                    var1 = 100;
                    var2 = var2 / var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var23.bind(var7)(var10, var13);
            var13 = var7.useEffect;
            var10 = new Array(3);
            var10[0] = var1;
            var10[1] = var20;
            var10[2] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot4;
                    var4 = _closure2_slot6;
                    var1 = -100;
                    var4 = var4 / var1;
                    var1 = 1;
                    var1 = var1 - var4;
                    var2 = var2 * var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var7)(var5, var10);
            var13 = var7.useCallback;
            var10 = function(arg1, arg2) {
                var4 = _closure2_slot3;
                var1 = undefined;
                var3 = arg2;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot7;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var20 = var13.bind(var7)(var10, var5);
            var _closure2_slot12 = var20;
            var13 = var7.useCallback;
            var10 = function(arg1) {
                var3 = _closure2_slot9;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var13 = var13.bind(var7)(var10, var5);
            var10 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var20;
            var5[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = function _listenOnlyIfWeHavePermission() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0005_ip = 5; continue _fun0005 }
case 3:
                                    var5 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 15;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var7 = var5.bind(var3)(var2);
                                    var6 = var7.hasPermission;
                                    var2 = _closure1_slot11;
                                    var5 = var2.AUDIO;
                                    var2 = {};
                                    var8 = false;
                                    var2['showAuthorizationError'] = var8;
                                    var2 = var6.bind(var7)(var5, var2);
                                    SaveGenerator(address=70);
case 6:
                                    return var2;
case 7:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                                    var5 = var2;
                                    if(!var5) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                                    var6 = _closure3_slot0;
                                    var5 = !var6;
case 10:
                                    if(!var5) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                                    var6 = _closure1_slot7;
                                    var5 = var6.getMediaEngine;
                                    var7 = var5.bind(var6)();
                                    var6 = var7.on;
                                    var5 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var4 = 16;
                                    var4 = var8[var4];
                                    var4 = var5.bind(var3)(var4);
                                    var4 = var4.MediaEngineEvent;
                                    var5 = var4.VoiceActivity;
                                    var4 = _closure2_slot12;
                                    var4 = var6.bind(var7)(var5, var4);
case 12:
                                    return var3;
case 8:
                                    return var2;
case 5:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot1 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot1 = var2;
                    var3 = _closure2_slot5;
                    var2 = _closure1_slot10;
                    var2 = var2.ACTIVE;
                    if(!(var3 !== var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = undefined;
                    return var2;
case 14:
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var3 = function listenOnlyIfWeHavePermission() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var1 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var3 = _closure1_slot7;
                        var2 = var3.getMediaEngine;
                        var5 = var2.bind(var3)();
                        var4 = var5.removeListener;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.MediaEngineEvent;
                        var3 = var2.VoiceActivity;
                        var2 = _closure2_slot12;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var10.bind(var7)(var2, var5);
            var2 = var7.useRef;
            var5 = false;
            var2 = var2.bind(var7)(var5);
            var _closure2_slot13 = var2;
            var2 = var7.useRef;
            var2 = var2.bind(var7)(var5);
            var _closure2_slot14 = var2;
            var2 = var7.useRef;
            var2 = var2.bind(var7)(var3);
            var _closure2_slot15 = var2;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var11;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var3 = var3.current;
                    if(var3) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var4 = _closure2_slot13;
                    var3 = true;
                    var4['current'] = var3;
                    _fun0006_ip = 18; continue _fun0006;
case 16:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot14;
                    if(var4) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var4 = false;
                    var3['current'] = var4;
                    _fun0006_ip = 18; continue _fun0006;
case 19:
                    var3 = var3.current;
                    if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 18:
                    var3 = undefined;
                    return var3;
case 21:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot15;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var4 = global;
                    var7 = var4.setTimeout;
                    var6 = undefined;
                    var5 = function() {
                        var2 = _closure2_slot15;
                        var1 = null;
                        var2['current'] = var1;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 17;
                        var2 = var8[var1];
                        var1 = undefined;
                        var2 = var7.bind(var1)(var2);
                        var4 = var2.AccessibilityAnnouncer;
                        var3 = var4.announce;
                        var2 = 18;
                        var5 = var8[var2];
                        var5 = var7.bind(var1)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.t;
                        var2 = var2.X2hJL7;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = 1000;
                    var4 = var7.bind(var6)(var5, var4);
                    var3['current'] = var4;
                    _fun0006_ip = 24; continue _fun0006;
case 22:
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var4 = global;
                    var6 = var4.clearTimeout;
                    var2 = _closure2_slot15;
                    var5 = var2.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var2['current'] = var3;
case 25:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 17;
                    var2 = var9[var2];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var4 = var2.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = 18;
                    var5 = var9[var2];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.haLKZ0;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
case 24:
                    var1 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot15;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var1 = _closure2_slot15;
                            var4 = var1.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1['current'] = var2;
case 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var15.sensitivity;
            var1['style'] = var5;
            var5 = {};
            var7 = var15.sensitivityBar;
            var5['style'] = var7;
            var10 = _closure1_slot12;
            var7 = {};
            var7['ref'] = var17;
            var20 = var15.sensitivityCommon;
            var17 = new Array(3);
            var17[0] = var20;
            var20 = var15.sensitivityMin;
            var17[1] = var20;
            var20 = {};
            var20['flex'] = var21;
            var17[2] = var20;
            var7['style'] = var17;
            var17 = var10.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var17;
            var17 = {};
            var17['ref'] = var19;
            var20 = var15.sensitivityCommon;
            var19 = new Array(3);
            var19[0] = var20;
            var20 = var15.sensitivityMax;
            var19[1] = var20;
            var20 = {};
            var21 = var22 - var21;
            var20['flex'] = var21;
            var19[2] = var20;
            var17['style'] = var19;
            var17 = var10.bind(var4)(var2, var17);
            var7[1] = var17;
            var5['children'] = var7;
            var7 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = {};
            var7['ref'] = var9;
            var17 = var15.sensitivityFill;
            var9 = new Array(2);
            var9[0] = var17;
            var17 = {};
            var17['left'] = var18;
            var9[1] = var17;
            var7['style'] = var9;
            var7 = var10.bind(var4)(var2, var7);
            var5[1] = var7;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 21;
            var7 = var17[var7];
            var9 = var9.bind(var4)(var7);
            var7 = {'style': null, 'value': null, 'minimumValue': 0, 'maximumValue': 100, 'minimumTrackTintColor': 'transparent', 'maximumTrackTintColor': 'transparent'};
            var17 = var15.sensitivitySlider;
            var7['style'] = var17;
            var7['value'] = var16;
            var7['onValueChange'] = var13;
            var13 = function handleSlidingComplete(arg1) {
                var3 = _closure2_slot1;
                var2 = 100;
                var1 = arg1;
                var4 = var2 - var1;
                var1 = undefined;
                var2 = -1;
                var2 = var2 * var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onSlidingComplete'] = var13;
            var7 = var10.bind(var4)(var9, var7);
            var5[2] = var7;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 29:
            if(var11) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var16 = var15.sensitivityDefault;
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var16 = var15.sensitivitySpeaking;
case 33:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var9 = _closure1_slot12;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 19;
            var5 = var17[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'accessible': true, 'role': 'meter', 'aria-label': null, 'aria-valuenow': null, 'aria-valuemin': 0, 'aria-valuemax': 100};
            var10 = true;
            var20 = _closure1_slot0;
            var13 = 18;
            var18 = var17[var13];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var13];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.yZcOjo;
            var17 = var18.bind(var19)(var17);
            var5['aria-label'] = var17;
            var12 = 0;
            if(!var11) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var12 = var14;
case 34:
            var5['aria-valuenow'] = var12;
            var18 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = var12[var13];
            var14 = var18.bind(var4)(var14);
            var17 = var14.intl;
            var14 = var17.string;
            var12 = var12[var13];
            var12 = var18.bind(var4)(var12);
            var12 = var12.t;
            if(var11) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = var12.X2hJL7;
            var11 = var14.bind(var17)(var11);
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var12 = var12.haLKZ0;
            var11 = var14.bind(var17)(var12);
case 38:
            var5['aria-valuetext'] = var11;
            var11 = function onAccessibilityFocus() {
                var2 = _closure2_slot14;
                var1 = true;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5['onAccessibilityFocus'] = var11;
            var8 = function onAccessibilityBlur() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = false;
                    var3['current'] = var2;
                    var2 = _closure2_slot15;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 18; continue _fun0008 }
case 39:
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var1 = _closure2_slot15;
                    var4 = var1.current;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var1['current'] = var2;
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onAccessibilityBlur'] = var8;
            var8 = var15.sensitivity;
            var5['style'] = var8;
            var8 = _closure1_slot12;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var15.sensitivityBar;
            var11['style'] = var14;
            var14 = {};
            var17 = var15.sensitivityCommon;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var14['style'] = var15;
            var14 = var8.bind(var4)(var12, var14);
            var11['children'] = var14;
            var11 = var8.bind(var4)(var12, var11);
            var5['children'] = var11;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 20;
            var6 = var9[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.FormHint;
            var6 = {};
            var6['inset'] = var10;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.W3K5Im;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();