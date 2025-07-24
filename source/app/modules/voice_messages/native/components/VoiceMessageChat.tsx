// app/modules/voice_messages/native/components/VoiceMessageChat.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var15 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var15;
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
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var5 = undefined;
                    var2 = var2 === var5;
                    var6 = undefined;
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
 24:
                    var6 = var4;
 27:
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 57; continue _fun0002 }
 32:
                    var7 = var3().value;
                    var3 = var1;
                    var3 = var3 === var5;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0002_ip = 57; continue _fun0002 }
 51:
                    var4 = var7;
                    var2 = var3;
 57:
                    if(var2) { _fun0002_ip = 63; continue _fun0002 }
 60:
                    var1.return();
 63:
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
 0:
                var2 = arg1;
                var10 = var2.animationValue;
                var _closure2_slot0 = var10;
                var2 = _closure1_slot17;
                var4 = undefined;
                var13 = var2.bind(var4)();
                var3 = _closure1_slot7;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.startTimeMillis;
                    return var1;
                };
                var18 = var3.bind(var4)(var2);
                var _closure2_slot1 = var18;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure2_slot1;
                        var1 = null;
                        var3 = var1 != var3;
                        var1 = 0;
                        if(!var3) { _fun0004_ip = 43; continue _fun0004 }
 18:
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var3 = var3.bind(var4)();
                        var2 = _closure2_slot1;
                        var1 = var3 - var2;
 43:
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot3;
                var8 = 2;
                var2 = var2.bind(var4)(var3, var8);
                var6 = 0;
                var3 = var2[var6];
                var _closure2_slot2 = var3;
                var5 = 1;
                var2 = var2[var5];
                var _closure2_slot3 = var2;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var7 = var2.bind(var7)(var4);
                var2 = _closure1_slot3;
                var7 = var2.bind(var4)(var7, var8);
                var2 = var7[var6];
                var _closure2_slot4 = var2;
                var7 = var7[var5];
                var _closure2_slot5 = var7;
                var11 = _closure1_slot7;
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.savedVoiceMessageUploadData;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var16 = var11.bind(var4)(var7);
                var _closure2_slot6 = var16;
                var14 = _closure1_slot4;
                var12 = var14.useEffect;
                var11 = new Array(2);
                var11[0] = var18;
                var11[1] = var16;
                var7 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot6;
                        if(var3) { _fun0005_ip = 51; continue _fun0005 }
 12:
                        var3 = global;
                        var6 = var3.setInterval;
                        var5 = undefined;
                        var4 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var3 = _closure2_slot1;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0006_ip = 108; continue _fun0006 }
 13:
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
                                if(!(!(var5 > var4))) { _fun0006_ip = 89; continue _fun0006 }
 60:
                                var4 = _closure1_slot11;
                                if(!(var5 > var4)) { _fun0006_ip = 108; continue _fun0006 }
 68:
                                var5 = _closure2_slot5;
                                var4 = _closure1_slot19;
                                var4 = var4.WARN;
                                var4 = var5.bind(var3)(var4);
                                _fun0006_ip = 108; continue _fun0006;
 89:
                                var2 = _closure2_slot5;
                                var1 = _closure1_slot19;
                                var1 = var1.REALLY_WARN;
                                var1 = var2.bind(var3)(var1);
 108:
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
 51:
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
                var7 = var12.bind(var14)(var7, var11);
                var12 = _closure1_slot4;
                var11 = var12.useMemo;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
                var12 = var11.bind(var12)(var3, var7);
                var11 = _closure1_slot4;
                var7 = var11.useState;
                var3 = false;
                var7 = var7.bind(var11)(var3);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var7, var8);
                var14 = var3[var6];
                var3 = var3[var5];
                var _closure2_slot7 = var3;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure2_slot4;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0007_ip = 30; continue _fun0007 }
 15:
                        var5 = _closure2_slot7;
                        var3 = undefined;
                        var2 = false;
                        var2 = var5.bind(var3)(var2);
                        _fun0007_ip = 64; continue _fun0007;
 30:
                        var5 = _closure2_slot4;
                        var2 = _closure1_slot19;
                        var2 = var2.ENDED;
                        if(!(var5 === var2)) { _fun0007_ip = 68; continue _fun0007 }
 51:
                        var6 = _closure2_slot7;
                        var5 = undefined;
                        var2 = true;
                        var2 = var6.bind(var5)(var2);
 64:
                        var2 = undefined;
                        return var2;
 68:
                        var2 = _closure1_slot6;
                        var5 = var2.useReducedMotion;
                        var2 = 1000;
                        if(var5) { _fun0007_ip = 117; continue _fun0007 }
 87:
                        var5 = _closure2_slot4;
                        var3 = _closure1_slot19;
                        var4 = var3.WARN;
                        var3 = 250;
                        if(!(var5 === var4)) { _fun0007_ip = 114; continue _fun0007 }
 108:
                        var3 = 500;
 114:
                        var2 = var3;
 117:
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
                var2 = var5.bind(var6)(var2, var3);
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var3 = var8[var5];
                var6 = var2.bind(var4)(var3);
                var3 = var6.useAnimatedStyle;
                var1 = function U() {
                    var1 = {};
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    return var1;
                };
                var7 = {};
                var7['animationValue'] = var10;
                var1['__closure'] = var7;
                var7 = 4012974382717.0;
                var1['__workletHash'] = var7;
                var7 = _closure1_slot20;
                var1['__initData'] = var7;
                var10 = var3.bind(var6)(var1);
                var3 = _closure1_slot14;
                var1 = 15;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var6 = _closure1_slot13;
                var6 = var6.DARK;
                var1['theme'] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot1;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.View;
                var5 = {};
                var11 = var13.durationContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var10;
                var5['style'] = var8;
                var11 = _closure1_slot14;
                var10 = _closure1_slot5;
                var8 = {};
                var17 = var13.dot;
                var15 = new Array(2);
                var15[0] = var17;
                var17 = null;
                var17 = var17 != var18;
                if(!var17) { _fun0003_ip = 493; continue _fun0003 }
 490:
                var17 = !var16;
 493:
                var16 = !var17;
                if(var17) { _fun0003_ip = 505; continue _fun0003 }
 499:
                var16 = var13.dotDismissed;
 505:
                var15[1] = var16;
                var8['style'] = var15;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 16;
                var9 = var15[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {};
                var13 = var13.duration;
                var9['style'] = var13;
                var13 = 'text-sm/semibold';
                var9['variant'] = var13;
                var13 = 'always-white';
                if(!var14) { _fun0003_ip = 590; continue _fun0003 }
 584:
                var13 = 'text-danger';
 590:
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
        var12 = 0;
        var4 = var6[var12];
        var1 = undefined;
        var4 = var15.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var11 = 1;
        var7 = var6[var11];
        var4 = native4;
        var8 = var4.bind(var1)(var7);
        var _closure1_slot4 = var8;
        var10 = 2;
        var4 = var6[var10];
        var4 = var5.bind(var1)(var4);
        var9 = var4.ActivityIndicator;
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var15.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.useVoiceMessagesUIStore;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.VOICE_RECORDING_MAX_DURATION_MILLIS;
        var _closure1_slot8 = var7;
        var7 = var4.VOICE_RECORDING_MAX_DURATION_OFFSET;
        var _closure1_slot9 = var7;
        var7 = var4.VOICE_RECORDING_REALLY_WARN_DURATION_MILLIS;
        var _closure1_slot10 = var7;
        var7 = var4.VOICE_RECORDING_WARN_DURATION_MILLIS;
        var _closure1_slot11 = var7;
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
        var7 = var4.jsx;
        var _closure1_slot14 = var7;
        var4 = var4.jsxs;
        var _closure1_slot15 = var4;
        var4 = 8;
        var4 = var6[var4];
        var7 = var15.bind(var1)(var4);
        var4 = var7.createAnimatedComponent;
        var4 = var4.bind(var7)(var9);
        var _closure1_slot16 = var4;
        var4 = 9;
        var4 = var6[var4];
        var13 = var5.bind(var1)(var4);
        var9 = var13.createStyles;
        var7 = {};
        var4 = {'height': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 12};
        var14 = 10;
        var16 = var6[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.radii;
        var16 = var16.xxl;
        var4['borderRadius'] = var16;
        var7['container'] = var4;
        var4 = {'position': 'absolute', 'left': 12};
        var7['loading'] = var4;
        var4 = {'height': 6, 'width': 6, 'backgroundColor': null, 'marginHorizontal': 4, 'borderRadius': 6};
        var16 = var6[var14];
        var16 = var15.bind(var1)(var16);
        var16 = var16.unsafe_rawColors;
        var16 = var16.RED_400;
        var4['backgroundColor'] = var16;
        var7['dot'] = var4;
        var4 = {};
        var16 = 'transparent';
        var4['backgroundColor'] = var16;
        var7['dotDismissed'] = var4;
        var4 = {'flex': 1, 'height': '100%', 'overflow': 'hidden', 'justifyContent': 'flex-end', 'flexDirection': 'row', 'alignItems': 'center', 'marginLeft': 8};
        var7['waveformContainer'] = var4;
        var4 = {};
        var14 = var6[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.WHITE;
        var4['backgroundColor'] = var14;
        var4['borderRadius'] = var11;
        var7['waveformBar'] = var4;
        var4 = {'flexDirection': 'row', 'alignItems': 'center'};
        var7['durationContainer'] = var4;
        var14 = {};
        var4 = 11;
        var4 = var6[var4];
        var15 = var5.bind(var1)(var4);
        var4 = var15.isAndroid;
        var16 = var4.bind(var15)();
        var4 = 17;
        var15 = var4;
        if(!var16) { _fun0001_ip = 584; continue _fun0001 }
 581:
        var15 = 14;
 584:
        var14['lineHeight'] = var15;
        var7['duration'] = var14;
        var7 = var9.bind(var13)(var7);
        var _closure1_slot17 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx1(){const{animatedHeight,animatedWidth,animatedMargin}=this.__closure;return{height:animatedHeight.get(),width:animatedWidth.get(),marginRight:animatedMargin.get()};}';
        var7['code'] = var9;
        var _closure1_slot18 = var7;
        var7 = {};
        var7['WARN'] = var12;
        var9 = 'WARN';
        var7[var12] = var9;
        var7['REALLY_WARN'] = var11;
        var9 = 'REALLY_WARN';
        var7[var11] = var9;
        var7['ENDED'] = var10;
        var9 = 'ENDED';
        var7[var10] = var9;
        var _closure1_slot19 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx2(){const{animationValue}=this.__closure;return{opacity:animationValue.get()};}';
        var7['code'] = var9;
        var _closure1_slot20 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx3(){const{initialAnimation,isRecording}=this.__closure;return initialAnimation.get()===1&&isRecording;}';
        var7['code'] = var9;
        var _closure1_slot21 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx4(result,previous){const{animationValue,withTiming,Easing,loadingOpacity}=this.__closure;if(result&&result!==previous){animationValue.set(withTiming(1,{easing:Easing.quad,duration:200}));loadingOpacity.set(0);}}';
        var7['code'] = var9;
        var _closure1_slot22 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx5(){const{initialAnimation,backgroundColor}=this.__closure;return{width:80+20*initialAnimation.get()+"%",backgroundColor:backgroundColor.get()};}';
        var7['code'] = var9;
        var _closure1_slot23 = var7;
        var7 = {};
        var9 = 'function VoiceMessageChatTsx6(){const{loadingOpacity}=this.__closure;return{opacity:loadingOpacity.get()};}';
        var7['code'] = var9;
        var _closure1_slot24 = var7;
        var7 = var8.memo;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
 0:
                        var3 = _closure2_slot0;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 54; continue _fun0009 }
 14:
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
 54:
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
 0:
                        var3 = _closure2_slot1;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = 1;
                        var1 = var1 === var3;
                        if(!var1) { _fun0010_ip = 30; continue _fun0010 }
 26:
                        var1 = _closure2_slot0;
 30:
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
 0:
                        var3 = arg1;
                        var1 = var3;
                        if(!var1) { _fun0011_ip = 16; continue _fun0011 }
 9:
                        var2 = arg2;
                        var1 = var3 !== var2;
 16:
                        if(!var1) { _fun0011_ip = 129; continue _fun0011 }
 19:
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
 129:
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
                var2 = function v() {
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
                if(var5) { _fun0008_ip = 571; continue _fun0008 }
 490:
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
                var11 = var11.WHITE_500;
                var5['color'] = var11;
                var11 = 'small';
                var5['size'] = var11;
                var7 = var9.bind(var4)(var8, var5);
 571:
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
        var2 = var7.bind(var8)(var2);
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/voice_messages/native/components/VoiceMessageChat.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();