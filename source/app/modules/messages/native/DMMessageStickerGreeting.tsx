// app/modules/messages/native/DMMessageStickerGreeting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {'backgroundColor': null, 'alignItems': 'center', 'paddingHorizontal': 16, 'paddingBottom': 16, 'paddingTop': 8};
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 10;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.colors;
            var3 = var4.BACKGROUND_MOBILE_PRIMARY;
case 2:
            var2['backgroundColor'] = var3;
            var3 = 16;
            var1['container'] = var2;
            var2 = {};
            var2['paddingBottom'] = var3;
            var1['stickerContainer'] = var2;
            var2 = {'flexDirection': 'row', 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center', 'gap': 8, 'height': 48, 'paddingHorizontal': 16};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_TERTIARY;
            var2['backgroundColor'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.radii;
            var7 = var7.xxl;
            var2['borderRadius'] = var7;
            var1['toastContainer'] = var2;
            var2 = {};
            var7 = 20;
            var2['lineHeight'] = var7;
            var1['toastContent'] = var2;
            var2 = {'color': null, 'marginTop': 16, 'fontSize': 14, 'lineHeight': 16};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.RED_400;
            var2['color'] = var3;
            var1['error'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'left': 0, 'top': 0, 'height': 30};
            var1['gradient'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GradientPercentage;
    var4 = var4.END;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;const generateAnimationConfig=function(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));};return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/DMMessageStickerGreeting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DMMessageStickerGreeting(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var _closure2_slot0 = var6;
            var13 = var1.hasInputText;
            var _closure2_slot1 = var13;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var2 = var9[var1];
            var7 = var4.bind(var5)(var2);
            var3 = var7.useGradientValue;
            var2 = _closure1_slot15;
            var3 = var3.bind(var7)(var2);
            var2 = _closure1_slot14;
            var19 = var2.bind(var5)(var3);
            var _closure2_slot2 = var19;
            var2 = 19;
            var3 = var9[var2];
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var10 = var10.bind(var11)(var7, var3);
            var _closure2_slot3 = var10;
            var3 = var9[var2];
            var11 = var4.bind(var5)(var3);
            var7 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var11)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 20;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useName;
            var14 = var3.bind(var4)(var7);
            var16 = null;
            if(!(var16 == var14)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 18;
            var4 = var11[var3];
            var4 = var9.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.y1Wu2d;
            var14 = var4.bind(var7)(var3);
case 4:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var26 = 18;
            var3 = var7[var26];
            var3 = var4.bind(var5)(var3);
            var12 = var3.intl;
            var11 = var12.formatToPlainString;
            var3 = var7[var26];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var9 = var3.m0zYbW;
            var3 = {};
            var3['username'] = var14;
            var18 = var11.bind(var12)(var9, var3);
            var3 = 21;
            var3 = var7[var3];
            var9 = var4.bind(var5)(var3);
            var3 = var9.useShowConvoStarterInDM;
            var3 = var3.bind(var9)(var6);
            _closure2_slot4 = var3;
            var2 = var7[var2];
            var14 = var4.bind(var5)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var2;
            var9 = new Array(1);
            var9[0] = var3;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot7;
                    var3 = var4.getStickerById;
                    var2 = '749054660769218631';
                    var1 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var23 = var12.bind(var14)(var11, var2, var9);
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var9 = new Array(1);
            var9[0] = var3;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchStickerPack;
                    var2 = '847199849233514549';
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var2, var9);
            var2 = function useHandleWavePress(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot5;
                var6 = var4.useState;
                var3 = null;
                var3 = var6.bind(var4)(var3);
                var11 = _closure1_slot4;
                var8 = undefined;
                var10 = 2;
                var3 = var11.bind(var8)(var3, var10);
                var7 = 0;
                var6 = var3[var7];
                var _closure3_slot1 = var6;
                var9 = 1;
                var3 = var3[var9];
                var _closure3_slot2 = var3;
                var12 = var4.useState;
                var3 = false;
                var3 = var12.bind(var4)(var3);
                var3 = var11.bind(var8)(var3, var10);
                var7 = var3[var7];
                var _closure3_slot3 = var7;
                var3 = var3[var9];
                var _closure3_slot4 = var3;
                var10 = var4.useEffect;
                var3 = var5.id;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() {
                    var3 = _closure3_slot2;
                    var1 = undefined;
                    var2 = null;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var10.bind(var4)(var3, var9);
                var3 = var4.useCallback;
                var2 = _closure1_slot3;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 9:
                            var2 = undefined;
                            var4 = undefined;
                            var5 = _closure3_slot3;
                            if(var5) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                            var7 = _closure3_slot4;
                            var5 = true;
                            var5 = var7.bind(var2)(var5);
                            var4 = function showErrorToast(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var5 = arg1;
                                    var2 = _closure3_slot1;
                                    if(!(var2 !== var5)) { _fun0006_ip = 3; continue _fun0006 }
case 13:
                                    var2 = _closure3_slot2;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var5);
case 3:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 14;
                                    var2 = var7[var1];
                                    var1 = undefined;
                                    var4 = var6.bind(var1)(var2);
                                    var3 = var4.open;
                                    var2 = {};
                                    var8 = 'HANDLE_WAVE_PRESS_TOAST';
                                    var2['key'] = var8;
                                    var2['content'] = var5;
                                    var5 = 15;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var1)(var5);
                                    var2['icon'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                }
                            };
                            var7 = _closure3_slot1;
                            var5 = null;
                            if(!(var5 === var7)) { _fun0005_ip = 14; continue _fun0005 }
case 15: // try_start_0
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 16;
                            var5 = var9[var5];
                            var10 = var8.bind(var2)(var5);
                            var9 = var10.sendGreetMessage;
                            var5 = _closure3_slot0;
                            var8 = var5.id;
                            var5 = '749054660769218631';
                            var5 = var9.bind(var10)(var8, var5);
                            SaveGenerator(address=114);
case 16:
                            return var5;
case 17:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                            if(var8) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 17;
                            var8 = var10[var8];
                            var10 = var9.bind(var2)(var8);
                            var9 = var10.track;
                            var7 = _closure1_slot10;
                            var8 = var7.DM_EMPTY_ACTION;
                            var7 = {};
                            var11 = _closure3_slot0;
                            var12 = var11.id;
                            var7['channel_id'] = var12;
                            var11 = var11.type;
                            var7['channel_type'] = var11;
                            var11 = 'Wave';
                            var7['source'] = var11;
                            var11 = 'Send wave';
                            var7['type'] = var11;
                            var7 = var9.bind(var10)(var8, var7);
case 20: // try_end0
                            _fun0005_ip = 21; continue _fun0005;
case 18:
                            return var5;
case 22: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = var7;
                            var7 = var7.ok;
                            var5 = var7;
                            if(var7) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                            var7 = var6.status;
                            var6 = 429;
                            var5 = var6 !== var7;
case 23:
                            if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 25:
                            var6 = var4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 18;
                            var7 = var10[var5];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var2)(var5);
                            var5 = var5.t;
                            var5 = var5.Whhv4+;
                            var5 = var7.bind(var8)(var5);
                            var5 = var6.bind(var2)(var5);
case 21:
                            var6 = _closure3_slot4;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            _fun0005_ip = 11; continue _fun0005;
case 14:
                            var6 = _closure3_slot4;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            var3 = _closure3_slot1;
                            var3 = var4.bind(var2)(var3);
                            return var3;
case 11:
                            return var2;
case 10:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var2.bind(var8)(var1);
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var6 = var5.id;
                var1[2] = var6;
                var5 = var5.type;
                var1[3] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var2.bind(var5)(var6);
            var2 = function useIsRendered() {
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var3 = false;
                var6 = var4.bind(var5)(var3);
                var4 = _closure1_slot4;
                var3 = undefined;
                var1 = 2;
                var4 = var4.bind(var3)(var6, var1);
                var1 = 0;
                var3 = var4[var1];
                var1 = 1;
                var6 = var4[var1];
                var _closure3_slot0 = var6;
                var1 = {};
                var1['isRendered'] = var3;
                var4 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                var1['setIsRendered'] = var2;
                return var1;
            };
            var2 = var2.bind(var5)();
            var17 = var2.isRendered;
            _closure2_slot5 = var17;
            var6 = var2.setIsRendered;
            var2 = 23;
            var9 = var7[var2];
            var11 = var4.bind(var5)(var9);
            var9 = var11.useAnimatedStyle;
            var8 = function x() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var2 = var2.gradient;
                    var2 = var2.height;
                    var6 = _closure2_slot5;
                    if(!var6) { _fun0007_ip = 26; continue _fun0007 }
case 3:
                    var3 = _closure2_slot1;
                    var6 = !var3;
case 26:
                    var4 = 0;
                    if(!var6) { _fun0007_ip = 2; continue _fun0007 }
case 27:
                    var1 = _closure2_slot3;
                    var3 = 180;
                    if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = 72;
case 28:
                    var1 = 1;
                    var1 = var3 - var1;
                    var4 = var1 + var2;
case 2:
                    var3 = function generateAnimationConfig(arg1) {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 23;
                        var1 = var9[var1];
                        var7 = undefined;
                        var4 = var8.bind(var7)(var1);
                        var3 = var4.withDelay;
                        var1 = 24;
                        var1 = var9[var1];
                        var6 = var8.bind(var7)(var1);
                        var5 = var6.withTiming;
                        var2 = {};
                        var1 = 25;
                        var1 = var9[var1];
                        var1 = var8.bind(var7)(var1);
                        var1 = var1.STANDARD_EASING;
                        var2['easing'] = var1;
                        var1 = 250;
                        var2['duration'] = var1;
                        var1 = arg1;
                        var2 = var5.bind(var6)(var1, var2);
                        var1 = 300;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = {'justifyContent': 'flex-end', 'overflow': 'hidden'};
                    var5 = 0;
                    if(!var6) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var5 = -var2;
case 30:
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var1['marginTop'] = var5;
                    var2 = var3.bind(var2)(var4);
                    var1['height'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var12['styles'] = var19;
            var12['isRendered'] = var17;
            var12['hasInputText'] = var13;
            var12['hasMessages'] = var10;
            var13 = 72;
            var12['HEIGHT_COMPACT'] = var13;
            var13 = 180;
            var12['HEIGHT_FULL'] = var13;
            var13 = var7[var2];
            var13 = var4.bind(var5)(var13);
            var13 = var13.withDelay;
            var12['withDelay'] = var13;
            var22 = 24;
            var13 = var7[var22];
            var13 = var4.bind(var5)(var13);
            var13 = var13.withTiming;
            var12['withTiming'] = var13;
            var13 = 25;
            var13 = var7[var13];
            var13 = var4.bind(var5)(var13);
            var13 = var13.STANDARD_EASING;
            var12['STANDARD_EASING'] = var13;
            var8['__closure'] = var12;
            var12 = 14002474476449.0;
            var8['__workletHash'] = var12;
            var12 = _closure1_slot16;
            var8['__initData'] = var12;
            var9 = var9.bind(var11)(var8);
            var1 = var7[var1];
            var11 = var4.bind(var5)(var1);
            var8 = var11.useGradientValue;
            var1 = _closure1_slot15;
            var1 = var8.bind(var11)(var1);
            var8 = 12;
            var8 = var7[var8];
            var11 = var4.bind(var5)(var8);
            var8 = var11.useToken;
            if(!(var16 == var1)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 10;
            var12 = var17[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.colors;
            var1 = var12.BACKGROUND_MOBILE_PRIMARY;
case 32:
            var1 = var8.bind(var11)(var1);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var12 = var11.bind(var5)(var8);
            var11 = var12.hexWithOpacity;
            var8 = 0;
            var11 = var11.bind(var12)(var1, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var1;
            var1 = 26;
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.useShouldAnimateSticker;
            var1 = false;
            var21 = var4.bind(var7)(var1);
            var1 = null;
            if(!var3) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var4 = _closure1_slot12;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var2['style'] = var9;
            var2['onLayout'] = var6;
            var9 = _closure1_slot11;
            var6 = 27;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = var19.gradient;
            var6['style'] = var11;
            var6['colors'] = var8;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var19.container;
            var7['style'] = var11;
            var13 = _closure1_slot12;
            if(var10) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var11 = _closure1_slot13;
            var10 = {};
            var12 = var16 != var23;
            var17 = null;
            if(!var12) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var24 = _closure1_slot11;
            var20 = _closure1_slot6;
            var12 = {};
            var25 = var19.stickerContainer;
            var12['style'] = var25;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var25 = 29;
            var25 = var28[var25];
            var27 = var27.bind(var5)(var25);
            var25 = {};
            var25['sticker'] = var23;
            var28 = 100;
            var25['size'] = var28;
            var25['animated'] = var21;
            var25 = var24.bind(var5)(var27, var25);
            var12['children'] = var25;
            var17 = var24.bind(var5)(var20, var12);
case 38:
            var12 = new Array(2);
            var12[0] = var17;
            var24 = _closure1_slot11;
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 31;
            var17 = var25[var17];
            var17 = var20.bind(var5)(var17);
            var20 = var17.Button;
            var17 = {};
            var17['text'] = var18;
            var17['onPress'] = var14;
            var25 = true;
            var17['shrink'] = var25;
            var17 = var24.bind(var5)(var20, var17);
            var12[1] = var17;
            var10['children'] = var12;
            var10 = var13.bind(var5)(var11, var10);
            _fun0002_ip = 40; continue _fun0002;
case 36:
            var25 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 28;
            var11 = var17[var11];
            var11 = var25.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var20 = var19.toastContainer;
            var11['style'] = var20;
            var20 = 'button';
            var11['accessibilityRole'] = var20;
            var20 = var17[var26];
            var20 = var25.bind(var5)(var20);
            var24 = var20.intl;
            var20 = var24.string;
            var17 = var17[var26];
            var17 = var25.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.pJObYG;
            var17 = var20.bind(var24)(var17);
            var11['accessibilityLabel'] = var17;
            var11['onPress'] = var14;
            var14 = var16 != var23;
            var16 = null;
            if(!var14) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var20 = _closure1_slot11;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var14 = 29;
            var14 = var24[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var14['sticker'] = var23;
            var14['size'] = var22;
            var14['animated'] = var21;
            var16 = var20.bind(var5)(var17, var14);
case 41:
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 30;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {};
            var19 = var19.toastContent;
            var15['style'] = var19;
            var19 = 'text-md/bold';
            var15['variant'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 40:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();