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
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var8 = var4.StyleSheet;
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
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'relative', 'height': 20};
    var4['sensitivity'] = var9;
    var9 = {'position': 'absolute', 'top': 7, 'left': 0, 'right': 0, 'bottom': 7, 'flexDirection': 'row'};
    var4['sensitivityBar'] = var9;
    var9 = {'position': 'absolute', 'backgroundColor': null, 'opacity': 0.5, 'top': 7, 'left': 0, 'right': 0, 'bottom': 7};
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE_500;
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
    var13 = 11;
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
    var4 = 19;
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
            var10 = 100;
            var13 = var2 + var10;
            var8 = _closure1_slot5;
            var2 = var8.useRef;
            var3 = null;
            var15 = var2.bind(var8)(var3);
            var2 = var8.useRef;
            var17 = var2.bind(var8)(var3);
            var2 = var8.useRef;
            var9 = var2.bind(var8)(var3);
            var3 = var8.useState;
            var4 = _closure1_slot8;
            var2 = var4.isCurrentUserSpeaking;
            var2 = var2.bind(var4)();
            var2 = var3.bind(var8)(var2);
            var18 = _closure1_slot4;
            var4 = undefined;
            var16 = 2;
            var3 = var18.bind(var4)(var2, var16);
            var14 = 0;
            var2 = var3[var14];
            var20 = 1;
            var3 = var3[var20];
            var _closure2_slot2 = var3;
            var5 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var5 = var3.width;
            var _closure2_slot3 = var5;
            var7 = _closure1_slot0;
            var3 = 13;
            var3 = var12[var3];
            var21 = var7.bind(var4)(var3);
            var19 = var21.useStateFromStores;
            var3 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var3;
            var7 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var19.bind(var21)(var12, var7, var3);
            var _closure2_slot4 = var3;
            var7 = var8.useState;
            var7 = var7.bind(var8)(var14);
            var7 = var18.bind(var4)(var7, var16);
            var12 = var7[var14];
            var _closure2_slot5 = var12;
            var7 = var7[var20];
            var _closure2_slot6 = var7;
            var7 = var8.useState;
            var7 = var7.bind(var8)(var13);
            var19 = var18.bind(var4)(var7, var16);
            var7 = var19[var14];
            var _closure2_slot7 = var7;
            var19 = var19[var20];
            var _closure2_slot8 = var19;
            var19 = var8.useState;
            var10 = var7 / var10;
            var10 = var19.bind(var8)(var10);
            var10 = var18.bind(var4)(var10, var16);
            var19 = var10[var14];
            var10 = var10[var20];
            var _closure2_slot9 = var10;
            var21 = var8.useState;
            var10 = -100;
            var10 = var12 / var10;
            var10 = var20 - var10;
            var10 = var5 * var10;
            var10 = var21.bind(var8)(var10);
            var10 = var18.bind(var4)(var10, var16);
            var16 = var10[var14];
            var10 = var10[var20];
            var _closure2_slot10 = var10;
            var14 = var8.useEffect;
            var10 = new Array(2);
            var10[0] = var1;
            var10[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot7;
                    var1 = 100;
                    var2 = var2 / var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var14.bind(var8)(var7, var10);
            var10 = var8.useEffect;
            var7 = new Array(3);
            var7[0] = var1;
            var7[1] = var12;
            var7[2] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot3;
                    var4 = _closure2_slot5;
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
            var5 = var10.bind(var8)(var5, var7);
            var10 = var8.useCallback;
            var7 = function(arg1, arg2) {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = arg2;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot6;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var10 = var10.bind(var8)(var7, var5);
            var _closure2_slot11 = var10;
            var12 = var8.useCallback;
            var7 = function(arg1) {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = new Array(0);
            var12 = var12.bind(var8)(var7, var5);
            var7 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var3;
            var3 = function() {
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
                                    var2 = 14;
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
                                    var4 = 15;
                                    var4 = var8[var4];
                                    var4 = var5.bind(var3)(var4);
                                    var4 = var4.MediaEngineEvent;
                                    var5 = var4.VoiceActivity;
                                    var4 = _closure2_slot11;
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
                    var3 = _closure2_slot4;
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
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.MediaEngineEvent;
                        var3 = var2.VoiceActivity;
                        var2 = _closure2_slot11;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var5);
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = _closure1_slot13;
            var3 = _closure1_slot6;
            var1 = {};
            var14 = _closure1_slot14;
            var7 = var14.sensitivity;
            var1['style'] = var7;
            var7 = {};
            var8 = var14.sensitivityBar;
            var7['style'] = var8;
            var10 = _closure1_slot12;
            var8 = {};
            var8['ref'] = var15;
            var18 = var14.sensitivityCommon;
            var15 = new Array(3);
            var15[0] = var18;
            var18 = var14.sensitivityMin;
            var15[1] = var18;
            var18 = {};
            var18['flex'] = var19;
            var15[2] = var18;
            var8['style'] = var15;
            var15 = var10.bind(var4)(var3, var8);
            var8 = new Array(2);
            var8[0] = var15;
            var15 = {};
            var15['ref'] = var17;
            var18 = var14.sensitivityCommon;
            var17 = new Array(3);
            var17[0] = var18;
            var18 = var14.sensitivityMax;
            var17[1] = var18;
            var18 = {};
            var19 = var20 - var19;
            var18['flex'] = var19;
            var17[2] = var18;
            var15['style'] = var17;
            var15 = var10.bind(var4)(var3, var15);
            var8[1] = var15;
            var7['children'] = var8;
            var8 = var5.bind(var4)(var3, var7);
            var7 = new Array(3);
            var7[0] = var8;
            var8 = {};
            var8['ref'] = var9;
            var15 = var14.sensitivityFill;
            var9 = new Array(2);
            var9[0] = var15;
            var15 = {};
            var15['left'] = var16;
            var9[1] = var15;
            var8['style'] = var9;
            var8 = var10.bind(var4)(var3, var8);
            var7[1] = var8;
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 18;
            var8 = var15[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {'style': null, 'value': null, 'minimumValue': 0, 'maximumValue': 100, 'minimumTrackTintColor': 'transparent', 'maximumTrackTintColor': 'transparent'};
            var14 = var14.sensitivitySlider;
            var8['style'] = var14;
            var8['value'] = var13;
            var8['onValueChange'] = var12;
            var11 = function handleSlidingComplete(arg1) {
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
            var8['onSlidingComplete'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[2] = var8;
            var1['children'] = var7;
            var1 = var5.bind(var4)(var3, var1);
            return var1;
case 16:
            var1 = _closure1_slot14;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = var1.sensitivityDefault;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var11 = var1.sensitivitySpeaking;
case 20:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = _closure1_slot12;
            var5 = {};
            var10 = _closure1_slot14;
            var7 = var10.sensitivity;
            var5['style'] = var7;
            var7 = {};
            var9 = var10.sensitivityBar;
            var7['style'] = var9;
            var9 = {};
            var12 = var10.sensitivityCommon;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var9['style'] = var10;
            var9 = var8.bind(var4)(var2, var9);
            var7['children'] = var9;
            var7 = var8.bind(var4)(var2, var7);
            var5['children'] = var7;
            var7 = var8.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.FormHint;
            var6 = {};
            var9 = true;
            var6['inset'] = var9;
            var9 = 17;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.W3K5Ii;
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