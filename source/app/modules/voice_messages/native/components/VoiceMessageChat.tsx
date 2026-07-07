// app/modules/voice_messages/native/components/VoiceMessageChat.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var18 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var18;
        var _closure1_slot2 = var6;
        var1 = function WaveformBar(arg1) {
            var1 = arg1;
            var8 = var1.value;
            var _closure2_slot0 = var8;
            var1 = _closure1_slot17;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var6 = var7[var1];
            var10 = var9.bind(var4)(var6);
            var6 = var10.useSharedValue;
            var11 = 0;
            var14 = var6.bind(var10)(var11);
            var _closure2_slot1 = var14;
            var6 = var7[var1];
            var10 = var9.bind(var4)(var6);
            var6 = var10.useSharedValue;
            var12 = var6.bind(var10)(var11);
            var _closure2_slot2 = var12;
            var6 = var7[var1];
            var10 = var9.bind(var4)(var6);
            var6 = var10.useSharedValue;
            var11 = var6.bind(var10)(var11);
            var _closure2_slot3 = var11;
            var6 = var7[var1];
            var10 = var9.bind(var4)(var6);
            var9 = var10.useAnimatedStyle;
            var6 = function o() {
                var1 = {};
                var4 = _closure2_slot1;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['height'] = var3;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['width'] = var3;
                var3 = _closure2_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['marginRight'] = var2;
                return var1;
            };
            var13 = {};
            var13['animatedHeight'] = var14;
            var13['animatedWidth'] = var12;
            var13['animatedMargin'] = var11;
            var6['__closure'] = var13;
            var13 = 8768145898720.0;
            var6['__workletHash'] = var13;
            var13 = _closure1_slot18;
            var6['__initData'] = var13;
            var6 = var9.bind(var10)(var6);
            var13 = _closure1_slot4;
            var10 = var13.useEffect;
            var9 = new Array(2);
            var9[0] = var14;
            var9[1] = var8;
            var8 = function() {
                var2 = global;
                var7 = var2.Math;
                var6 = var7.min;
                var5 = _closure2_slot0;
                var4 = _closure1_slot12;
                var5 = var5 / var4;
                var4 = 1.25;
                var5 = var5 * var4;
                var4 = 1;
                var5 = var6.bind(var7)(var4, var5);
                var4 = 20;
                var9 = var4 * var5;
                var4 = _closure2_slot1;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.withSpring;
                var8 = var2.Math;
                var7 = var8.max;
                var2 = 2;
                var2 = var7.bind(var8)(var2, var9);
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var10.bind(var13)(var8, var9);
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var3 = function() {
                var7 = _closure2_slot2;
                var6 = var7.set;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var2 = var9[var5];
                var1 = undefined;
                var13 = var8.bind(var1)(var2);
                var12 = var13.withTiming;
                var11 = {};
                var10 = 300;
                var11['duration'] = var10;
                var2 = 8;
                var4 = var9[var2];
                var4 = var8.bind(var1)(var4);
                var4 = var4.Easing;
                var4 = var4.linear;
                var11['easing'] = var4;
                var4 = 2;
                var4 = var12.bind(var13)(var4, var11);
                var4 = var6.bind(var7)(var4);
                var4 = _closure2_slot3;
                var3 = var4.set;
                var5 = var9[var5];
                var7 = var8.bind(var1)(var5);
                var6 = var7.withTiming;
                var5 = {};
                var5['duration'] = var10;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.Easing;
                var2 = var2.linear;
                var5['easing'] = var2;
                var2 = 4;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var9.bind(var10)(var3, var8);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var5.waveformBar;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot25 = var1;
        var1 = function Waveform() {
            var2 = _closure1_slot17;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot7;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.waveformVersion;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot7;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.waveform;
                return var1;
            };
            var6 = var3.bind(var4)(var2);
            var7 = _closure1_slot4;
            var3 = var7.useState;
            var2 = 0;
            var9 = var3.bind(var7)(var2);
            var7 = _closure1_slot3;
            var3 = 2;
            var7 = var7.bind(var4)(var9, var3);
            var2 = var7[var2];
            var3 = 1;
            var3 = var7[var3];
            var _closure2_slot0 = var3;
            var3 = var6.slice;
            var2 = -var2;
            var7 = var3.bind(var6)(var2);
            var9 = _closure1_slot4;
            var6 = var9.useCallback;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = global;
                var4 = var1.Math;
                var2 = var4.round;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var5 = var1.width;
                var1 = 6;
                var1 = var5 / var1;
                var2 = var2.bind(var4)(var1);
                var1 = 2;
                var2 = var2 + var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var6 = var6.bind(var9)(var3, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var8.waveformContainer;
            var1['style'] = var8;
            var1['onLayout'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var6 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = var4;
case 2:
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var4 = var7;
                    var2 = var3;
case 4:
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1.return();
case 7:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var1['value'] = var6;
                    var1 = var3.bind(var5)(var2, var1, var4);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot26 = var1;
        var1 = function Duration(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var11 = var2.animationValue;
                var _closure2_slot0 = var11;
                var2 = _closure1_slot17;
                var4 = undefined;
                var15 = var2.bind(var4)();
                var3 = _closure1_slot7;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.startTimeMillis;
                    return var1;
                };
                var19 = var3.bind(var4)(var2);
                var _closure2_slot1 = var19;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var1 = null;
                        var3 = var1 != var3;
                        var1 = 0;
                        if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var3 = var3.bind(var4)();
                        var2 = _closure2_slot1;
                        var1 = var3 - var2;
case 9:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot3;
                var16 = 2;
                var2 = var2.bind(var4)(var3, var16);
                var10 = 0;
                var5 = var2[var10];
                var _closure2_slot2 = var5;
                var7 = 1;
                var2 = var2[var7];
                var _closure2_slot3 = var2;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var3 = var2.bind(var3)(var4);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var3, var16);
                var3 = var2[var10];
                var _closure2_slot4 = var3;
                var2 = var2[var7];
                var _closure2_slot5 = var2;
                var6 = _closure1_slot7;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.savedVoiceMessageUploadData;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var17 = var6.bind(var4)(var2);
                var _closure2_slot6 = var17;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 14;
                var6 = var8[var6];
                var14 = var2.bind(var4)(var6);
                var13 = var14.useToken;
                var6 = _closure1_slot1;
                var12 = 10;
                var12 = var8[var12];
                var12 = var6.bind(var4)(var12);
                var12 = var12.modules;
                var12 = var12.mobile;
                var12 = var12.VOICE_MESSAGE_DURATION_TEXT_STYLE;
                var13 = var13.bind(var14)(var12);
                var20 = _closure1_slot4;
                var18 = var20.useEffect;
                var14 = new Array(2);
                var14[0] = var19;
                var14[1] = var17;
                var12 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure2_slot6;
                        if(var3) { _fun0005_ip = 6; continue _fun0005 }
case 11:
                        var3 = global;
                        var6 = var3.setInterval;
                        var5 = undefined;
                        var4 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var3 = _closure2_slot1;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                                var1 = global;
                                var3 = var1.Date;
                                var1 = var3.now;
                                var3 = var1.bind(var3)();
                                var1 = _closure2_slot1;
                                var5 = var3 - var1;
                                var1 = _closure2_slot3;
                                var3 = undefined;
                                var1 = var1.bind(var3)(var5);
                                var4 = _closure1_slot10;
                                if(!(!(var5 > var4))) { _fun0006_ip = 14; continue _fun0006 }
case 8:
                                var4 = _closure1_slot11;
                                if(!(var5 > var4)) { _fun0006_ip = 12; continue _fun0006 }
case 15:
                                var5 = _closure2_slot5;
                                var4 = _closure1_slot19;
                                var4 = var4.WARN;
                                var4 = var5.bind(var3)(var4);
                                _fun0006_ip = 12; continue _fun0006;
case 14:
                                var2 = _closure2_slot5;
                                var1 = _closure1_slot19;
                                var1 = var1.REALLY_WARN;
                                var1 = var2.bind(var3)(var1);
case 12:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = 100;
                        var3 = var6.bind(var5)(var4, var3);
                        var _closure3_slot0 = var3;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearInterval;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
case 6:
                        var5 = _closure2_slot3;
                        var4 = _closure1_slot8;
                        var3 = _closure1_slot9;
                        var4 = var4 + var3;
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var2 = _closure2_slot5;
                        var1 = _closure1_slot19;
                        var1 = var1.ENDED;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var18.bind(var20)(var12, var14);
                var18 = _closure1_slot4;
                var14 = var18.useMemo;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getTimeFormat;
                    var2 = _closure2_slot2;
                    var1 = 1000;
                    var2 = var2 / var1;
                    var1 = {};
                    var5 = false;
                    var1['padMinutes'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var12 = var14.bind(var18)(var5, var12);
                var18 = _closure1_slot4;
                var14 = var18.useState;
                var5 = false;
                var14 = var14.bind(var18)(var5);
                var5 = _closure1_slot3;
                var5 = var5.bind(var4)(var14, var16);
                var14 = var5[var10];
                var5 = var5[var7];
                var _closure2_slot7 = var5;
                var10 = _closure1_slot4;
                var7 = var10.useEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                        var5 = _closure2_slot7;
                        var3 = undefined;
                        var2 = false;
                        var2 = var5.bind(var3)(var2);
                        _fun0007_ip = 18; continue _fun0007;
case 16:
                        var5 = _closure2_slot4;
                        var2 = _closure1_slot19;
                        var2 = var2.ENDED;
                        if(!(var5 === var2)) { _fun0007_ip = 15; continue _fun0007 }
case 6:
                        var6 = _closure2_slot7;
                        var5 = undefined;
                        var2 = true;
                        var2 = var6.bind(var5)(var2);
case 18:
                        var2 = undefined;
                        return var2;
case 15:
                        var2 = _closure1_slot6;
                        var5 = var2.useReducedMotion;
                        var2 = 1000;
                        if(var5) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                        var5 = _closure2_slot4;
                        var3 = _closure1_slot19;
                        var4 = var3.WARN;
                        var3 = 250;
                        if(!(var5 === var4)) { _fun0007_ip = 21; continue _fun0007 }
case 12:
                        var3 = 500;
case 21:
                        var2 = var3;
case 19:
                        var _closure3_slot1 = var2;
                        var3 = function flash() {
                            var3 = _closure2_slot7;
                            var1 = undefined;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var1 = !var1;
                                return var1;
                            };
                            var2 = var3.bind(var1)(var2);
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = _closure3_slot2;
                            var2 = _closure3_slot1;
                            var2 = var5.bind(var1)(var4, var2);
                            var _closure3_slot0 = var2;
                            return var1;
                        };
                        var _closure3_slot2 = var3;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
                    }
                };
                var3 = var7.bind(var10)(var3, var5);
                var5 = 8;
                var3 = var8[var5];
                var7 = var2.bind(var4)(var3);
                var3 = var7.useAnimatedStyle;
                var1 = function U() {
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    return var1;
                };
                var10 = {};
                var10['animationValue'] = var11;
                var1['__closure'] = var10;
                var10 = 4012974382717.0;
                var1['__workletHash'] = var10;
                var10 = _closure1_slot20;
                var1['__initData'] = var10;
                var10 = var3.bind(var7)(var1);
                var3 = _closure1_slot14;
                var1 = 16;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var7 = _closure1_slot13;
                var7 = var7.DARK;
                var1['theme'] = var7;
                var7 = _closure1_slot15;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.View;
                var5 = {};
                var11 = var15.durationContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var10;
                var5['style'] = var8;
                var11 = _closure1_slot14;
                var10 = _closure1_slot5;
                var8 = {};
                var18 = var15.dot;
                var16 = new Array(2);
                var16[0] = var18;
                var18 = null;
                var18 = var18 != var19;
                if(!var18) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var18 = !var17;
case 22:
                var17 = !var18;
                if(var18) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var17 = var15.dotDismissed;
case 24:
                var16[1] = var17;
                var8['style'] = var16;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 17;
                var9 = var16[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {};
                var15 = var15.duration;
                var9['style'] = var15;
                var9['variant'] = var13;
                var13 = 'text-overlay-light';
                if(!var14) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var13 = 'text-feedback-critical';
case 26:
                var9['color'] = var13;
                var13 = true;
                var9['tabularNumbers'] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var11 = 0;
        var4 = var6[var11];
        var1 = undefined;
        var4 = var18.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var10 = 1;
        var7 = var6[var10];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var9 = 2;
        var4 = var6[var9];
        var4 = var5.bind(var1)(var4);
        var12 = var4.ActivityIndicator;
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var18.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useVoiceMessagesUIStore;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.VOICE_RECORDING_MAX_DURATION_MILLIS;
        var _closure1_slot8 = var8;
        var8 = var4.VOICE_RECORDING_MAX_DURATION_OFFSET;
        var _closure1_slot9 = var8;
        var8 = var4.VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS;
        var _closure1_slot10 = var8;
        var8 = var4.VOICE_RECORDING_WARN_DURATION_MILLIS;
        var _closure1_slot11 = var8;
        var4 = var4.WAVEFORM_WAVE_MAX_VALUE;
        var _closure1_slot12 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ThemeTypes;
        var _closure1_slot13 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot14 = var8;
        var4 = var4.jsxs;
        var _closure1_slot15 = var4;
        var4 = 8;
        var4 = var6[var4];
        var8 = var18.bind(var1)(var4);
        var4 = var8.createAnimatedComponent;
        var4 = var4.bind(var8)(var12);
        var _closure1_slot16 = var4;
        var4 = 9;
        var4 = var6[var4];
        var12 = var5.bind(var1)(var4);
        var8 = var12.createStyles;
        var4 = {};
        var13 = {'height': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingHorizontal': 12};
        var15 = 'center';
        var17 = 10;
        var14 = var6[var17];
        var14 = var18.bind(var1)(var14);
        var14 = var14.modules;
        var14 = var14.mobile;
        var14 = var14.VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL;
        var13['paddingVertical'] = var14;
        var14 = var6[var17];
        var14 = var18.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.xxl;
        var13['borderRadius'] = var14;
        var4['container'] = var13;
        var13 = {'position': 'absolute', 'left': 12};
        var4['loading'] = var13;
        var13 = {'height': 6, 'width': 6, 'backgroundColor': null, 'marginHorizontal': 4, 'borderRadius': 6};
        var14 = var6[var17];
        var14 = var18.bind(var1)(var14);
        var14 = var14.unsafe_rawColors;
        var14 = var14.RED_400;
        var13['backgroundColor'] = var14;
        var4['dot'] = var13;
        var13 = {};
        var14 = 'transparent';
        var13['backgroundColor'] = var14;
        var4['dotDismissed'] = var13;
        var13 = {'flex': 1, 'height': '100%', 'overflow': 'hidden', 'justifyContent': 'flex-end', 'flexDirection': 'row', 'alignItems': 'center', 'marginLeft': 8};
        var4['waveformContainer'] = var13;
        var13 = {};
        var14 = var6[var17];
        var14 = var18.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.WHITE;
        var13['backgroundColor'] = var14;
        var13['borderRadius'] = var10;
        var4['waveformBar'] = var13;
        var13 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['durationContainer'] = var13;
        var13 = {};
        var14 = 11;
        var16 = var6[var14];
        var19 = var5.bind(var1)(var16);
        var16 = var19.isAndroid;
        var16 = var16.bind(var19)();
        var17 = var6[var17];
        var17 = var18.bind(var1)(var17);
        var17 = var17.modules;
        var17 = var17.mobile;
        if(var16) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var16 = var17.VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS;
        _fun0001_ip = 30; continue _fun0001;
case 28:
        var16 = var17.VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID;
case 30:
        var13['lineHeight'] = var16;
        var14 = var6[var14];
        var16 = var5.bind(var1)(var14);
        var14 = var16.isAndroid;
        var16 = var14.bind(var16)();
        var14 = undefined;
        if(!var16) { _fun0001_ip = 31; continue _fun0001 }
case 32:
        var14 = var15;
case 31:
        var13['textAlignVertical'] = var14;
        var4['duration'] = var13;
        var4 = var8.bind(var12)(var4);
        var _closure1_slot17 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}';
        var4['code'] = var8;
        var _closure1_slot18 = var4;
        var4 = {};
        var4['WARN'] = var11;
        var8 = 'WARN';
        var4[var11] = var8;
        var4['REALLY_WARN'] = var10;
        var8 = 'REALLY_WARN';
        var4[var10] = var8;
        var4['ENDED'] = var9;
        var8 = 'ENDED';
        var4[var9] = var8;
        var _closure1_slot19 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}';
        var4['code'] = var8;
        var _closure1_slot20 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}';
        var4['code'] = var8;
        var _closure1_slot21 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}';
        var4['code'] = var8;
        var _closure1_slot22 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx5(){const{initialAnimation,backgroundColor}=this.__closure;return{width:80+20*initialAnimation.get()+"%",backgroundColor:backgroundColor.get()};}';
        var4['code'] = var8;
        var _closure1_slot23 = var4;
        var4 = {};
        var8 = 'function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}';
        var4['code'] = var8;
        var _closure1_slot24 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var5 = var1.isRecording;
                var _closure2_slot0 = var5;
                var16 = var1.initialAnimation;
                var _closure2_slot1 = var16;
                var15 = var1.backgroundColor;
                var _closure2_slot2 = var15;
                var1 = _closure1_slot17;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var3 = var7[var1];
                var8 = var9.bind(var4)(var3);
                var3 = var8.useSharedValue;
                var10 = 0;
                var13 = var3.bind(var8)(var10);
                var _closure2_slot3 = var13;
                var14 = _closure1_slot4;
                var12 = var14.useEffect;
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var5;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                        var3 = global;
                        var5 = var3.setTimeout;
                        var4 = function() {
                            var4 = _closure2_slot3;
                            var3 = var4.set;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 13;
                            var2 = var9[var1];
                            var1 = undefined;
                            var7 = var8.bind(var1)(var2);
                            var6 = var7.withTiming;
                            var5 = {};
                            var2 = 8;
                            var2 = var9[var2];
                            var2 = var8.bind(var1)(var2);
                            var2 = var2.Easing;
                            var2 = var2.quad;
                            var5['easing'] = var2;
                            var2 = 200;
                            var5['duration'] = var2;
                            var2 = 1;
                            var2 = var6.bind(var7)(var2, var5);
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var3 = 1000;
                        var3 = var5.bind(var1)(var4, var3);
                        var _closure3_slot0 = var3;
                        var2 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var2;
case 33:
                        return var1;
                    }
                };
                var3 = var12.bind(var14)(var3, var8);
                var3 = var7[var1];
                var8 = var9.bind(var4)(var3);
                var3 = var8.useSharedValue;
                var10 = var3.bind(var8)(var10);
                var _closure2_slot4 = var10;
                var3 = var7[var1];
                var14 = var9.bind(var4)(var3);
                var12 = var14.useAnimatedReaction;
                var8 = function _() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = 1;
                        var1 = var1 === var3;
                        if(!var1) { _fun0010_ip = 16; continue _fun0010 }
case 35:
                        var1 = _closure2_slot0;
case 16:
                        return var1;
                    }
                };
                var3 = {};
                var3['initialAnimation'] = var16;
                var3['isRecording'] = var5;
                var8['__closure'] = var3;
                var3 = 7599681139161.0;
                var8['__workletHash'] = var3;
                var3 = _closure1_slot21;
                var8['__initData'] = var3;
                var3 = function c(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3;
                        if(!var1) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                        var2 = arg2;
                        var1 = var3 !== var2;
case 36:
                        if(!var1) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                        var4 = _closure2_slot4;
                        var3 = var4.set;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 13;
                        var2 = var10[var2];
                        var8 = undefined;
                        var7 = var9.bind(var8)(var2);
                        var6 = var7.withTiming;
                        var5 = {};
                        var2 = 8;
                        var2 = var10[var2];
                        var2 = var9.bind(var8)(var2);
                        var2 = var2.Easing;
                        var2 = var2.quad;
                        var5['easing'] = var2;
                        var2 = 200;
                        var5['duration'] = var2;
                        var2 = 1;
                        var2 = var6.bind(var7)(var2, var5);
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure2_slot3;
                        var2 = var3.set;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var17 = {};
                var17['animationValue'] = var10;
                var18 = 13;
                var18 = var7[var18];
                var18 = var9.bind(var4)(var18);
                var18 = var18.withTiming;
                var17['withTiming'] = var18;
                var18 = var7[var1];
                var18 = var9.bind(var4)(var18);
                var18 = var18.Easing;
                var17['Easing'] = var18;
                var17['loadingOpacity'] = var13;
                var3['__closure'] = var17;
                var17 = 7661977794788.0;
                var3['__workletHash'] = var17;
                var17 = _closure1_slot22;
                var3['__initData'] = var17;
                var3 = var12.bind(var14)(var8, var3);
                var3 = var7[var1];
                var12 = var9.bind(var4)(var3);
                var8 = var12.useAnimatedStyle;
                var3 = function f() {
                    var1 = {};
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 20;
                    var4 = var3 * var4;
                    var3 = 80;
                    var4 = var3 + var4;
                    var3 = '%';
                    var3 = var4 + var3;
                    var1['width'] = var3;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['backgroundColor'] = var2;
                    return var1;
                };
                var14 = {};
                var14['initialAnimation'] = var16;
                var14['backgroundColor'] = var15;
                var3['__closure'] = var14;
                var14 = 9739486182352.0;
                var3['__workletHash'] = var14;
                var14 = _closure1_slot23;
                var3['__initData'] = var14;
                var8 = var8.bind(var12)(var3);
                var3 = var7[var1];
                var9 = var9.bind(var4)(var3);
                var3 = var9.useAnimatedStyle;
                var2 = function E() {
                    var1 = {};
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    return var1;
                };
                var12 = {};
                var12['loadingOpacity'] = var13;
                var2['__closure'] = var12;
                var12 = 17421928475897.0;
                var2['__workletHash'] = var12;
                var12 = _closure1_slot24;
                var2['__initData'] = var12;
                var12 = var3.bind(var9)(var2);
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var9 = var11.container;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var1['style'] = var7;
                var7 = null;
                if(var5) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                var9 = _closure1_slot14;
                var8 = _closure1_slot16;
                var5 = {};
                var13 = var11.loading;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var5['style'] = var11;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 10;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.WHITE;
                var5['color'] = var11;
                var11 = 'small';
                var5['size'] = var11;
                var7 = var9.bind(var4)(var8, var5);
case 40:
                var5 = new Array(3);
                var5[0] = var7;
                var9 = _closure1_slot14;
                var8 = _closure1_slot27;
                var7 = {};
                var7['animationValue'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot14;
                var7 = _closure1_slot26;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 18;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/voice_messages/native/components/VoiceMessageChat.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();