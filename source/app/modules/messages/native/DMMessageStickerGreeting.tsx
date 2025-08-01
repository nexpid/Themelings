// app/modules/messages/native/DMMessageStickerGreeting.tsx
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
    var4 = 1;
    var4 = var6[var4];
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
    var4 = {};
    var9 = {'backgroundColor': null, 'alignItems': 'center', 'paddingHorizontal': 16, 'paddingBottom': 16, 'paddingTop': 8};
    var10 = 10;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var12;
    var12 = 16;
    var4['container'] = var9;
    var9 = {};
    var9['paddingBottom'] = var12;
    var4['stickerContainer'] = var9;
    var9 = {'flexDirection': 'row', 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center', 'gap': 8, 'height': 48, 'paddingHorizontal': 16};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var9['borderRadius'] = var12;
    var4['toastContainer'] = var9;
    var9 = {};
    var12 = 20;
    var9['lineHeight'] = var12;
    var4['toastContent'] = var9;
    var9 = {'color': null, 'marginTop': 16, 'fontSize': 14, 'lineHeight': 16};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var4['error'] = var9;
    var9 = {'position': 'absolute', 'right': 0, 'left': 0, 'top': 0, 'height': 30};
    var4['gradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function DMMessageStickerGreetingTsx1(){const{styles,isRendered,hasInputText,hasMessages,HEIGHT_COMPACT,HEIGHT_FULL,withDelay,withTiming,STANDARD_EASING}=this.__closure;const gradientOverlayOffset=styles.gradient.height;const hasHeight=isRendered&&!hasInputText;const heightExpanded=(hasMessages?HEIGHT_COMPACT:HEIGHT_FULL)-1;const targetHeight=hasHeight?heightExpanded+gradientOverlayOffset:0;const targetMargin=hasHeight?-gradientOverlayOffset:0;const generateAnimationConfig=function(value){return withDelay(300,withTiming(value,{easing:STANDARD_EASING,duration:250}));};return{justifyContent:'flex-end',overflow:'hidden',marginTop:generateAnimationConfig(targetMargin),height:generateAnimationConfig(targetHeight)};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/DMMessageStickerGreeting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DMMessageStickerGreeting(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var12 = var2.hasInputText;
            var _closure2_slot1 = var12;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var2 = _closure1_slot14;
            var19 = var2.bind(var5)();
            var _closure2_slot2 = var19;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 18;
            var3 = var8[var2];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStores;
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
            var10 = var9.bind(var10)(var7, var3);
            var _closure2_slot3 = var10;
            var3 = var8[var2];
            var9 = var4.bind(var5)(var3);
            var7 = var9.useStateFromStores;
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
            var7 = var7.bind(var9)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 19;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useName;
            var13 = var3.bind(var4)(var7);
            var16 = null;
            if(!(var16 == var13)) { _fun0001_ip = 232; continue _fun0001 }
 175:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 17;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.y1Wu2d;
            var13 = var4.bind(var7)(var3);
 232:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var26 = 17;
            var3 = var7[var26];
            var3 = var4.bind(var5)(var3);
            var11 = var3.intl;
            var9 = var11.formatToPlainString;
            var3 = var7[var26];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var8 = var3.m0zYbW;
            var3 = {};
            var3['username'] = var13;
            var18 = var9.bind(var11)(var8, var3);
            var3 = 20;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var3 = var8.useShowConvoStarterInDM;
            var3 = var3.bind(var8)(var6);
            _closure2_slot4 = var3;
            var2 = var7[var2];
            var13 = var4.bind(var5)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = new Array(1);
            var8[0] = var3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 36; continue _fun0002 }
 12:
                    var4 = _closure1_slot7;
                    var3 = var4.getStickerById;
                    var2 = '749054660769218631';
                    var1 = var3.bind(var4)(var2);
 36:
                    return var1;
                }
            };
            var23 = var11.bind(var13)(var9, var2, var8);
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchStickerPack;
                    var2 = '847199849233514549';
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var11)(var2, var8);
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
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 351; continue _fun0004 }
 10:
                            var2 = undefined;
                            var4 = undefined;
                            var5 = _closure3_slot3;
                            if(var5) { _fun0004_ip = 348; continue _fun0004 }
 27:
                            var7 = _closure3_slot4;
                            var5 = true;
                            var5 = var7.bind(var2)(var5);
                            var4 = function showErrorToast(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var5 = arg1;
                                    var2 = _closure3_slot1;
                                    if(!(var2 !== var5)) { _fun0005_ip = 25; continue _fun0005 }
 14:
                                    var2 = _closure3_slot2;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var5);
 25:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 13;
                                    var2 = var7[var1];
                                    var1 = undefined;
                                    var4 = var6.bind(var1)(var2);
                                    var3 = var4.open;
                                    var2 = {};
                                    var8 = 'HANDLE_WAVE_PRESS_TOAST';
                                    var2['key'] = var8;
                                    var2['content'] = var5;
                                    var5 = 14;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var1)(var5);
                                    var2['icon'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                }
                            };
                            var7 = _closure3_slot1;
                            var5 = null;
                            if(!(var5 === var7)) { _fun0004_ip = 325; continue _fun0004 }
 60: // try_start_0
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 15;
                            var5 = var9[var5];
                            var10 = var8.bind(var2)(var5);
                            var9 = var10.sendGreetMessage;
                            var5 = _closure3_slot0;
                            var8 = var5.id;
                            var5 = '749054660769218631';
                            var5 = var9.bind(var10)(var8, var5);
                            SaveGenerator(address=114);
 112:
                            return var5;
 114:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                            if(var8) { _fun0004_ip = 208; continue _fun0004 }
 120:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 16;
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
 206: // try_end0
                            _fun0004_ip = 312; continue _fun0004;
 208:
                            return var5;
 211: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = var7;
                            var7 = var7.ok;
                            var5 = var7;
                            if(var7) { _fun0004_ip = 243; continue _fun0004 }
 228:
                            var7 = var6.status;
                            var6 = 429;
                            var5 = var6 !== var7;
 243:
                            if(var5) { _fun0004_ip = 312; continue _fun0004 }
 246:
                            var6 = var4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 17;
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
 312:
                            var6 = _closure3_slot4;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            _fun0004_ip = 348; continue _fun0004;
 325:
                            var6 = _closure3_slot4;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            var3 = _closure3_slot1;
                            var3 = var4.bind(var2)(var3);
                            return var3;
 348:
                            return var2;
 351:
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
            var13 = var2.isRendered;
            _closure2_slot5 = var13;
            var6 = var2.setIsRendered;
            var2 = 22;
            var8 = var7[var2];
            var9 = var4.bind(var5)(var8);
            var8 = var9.useAnimatedStyle;
            var1 = function O() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = var2.gradient;
                    var2 = var2.height;
                    var6 = _closure2_slot5;
                    if(!var6) { _fun0006_ip = 32; continue _fun0006 }
 25:
                    var3 = _closure2_slot1;
                    var6 = !var3;
 32:
                    var4 = 0;
                    if(!var6) { _fun0006_ip = 61; continue _fun0006 }
 37:
                    var1 = _closure2_slot3;
                    var3 = 180;
                    if(!var1) { _fun0006_ip = 50; continue _fun0006 }
 47:
                    var3 = 72;
 50:
                    var1 = 1;
                    var1 = var3 - var1;
                    var4 = var1 + var2;
 61:
                    var3 = function generateAnimationConfig(arg1) {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 22;
                        var1 = var9[var1];
                        var7 = undefined;
                        var4 = var8.bind(var7)(var1);
                        var3 = var4.withDelay;
                        var1 = 23;
                        var1 = var9[var1];
                        var6 = var8.bind(var7)(var1);
                        var5 = var6.withTiming;
                        var2 = {};
                        var1 = 24;
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
                    if(!var6) { _fun0006_ip = 92; continue _fun0006 }
 89:
                    var5 = -var2;
 92:
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var1['marginTop'] = var5;
                    var2 = var3.bind(var2)(var4);
                    var1['height'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['styles'] = var19;
            var11['isRendered'] = var13;
            var11['hasInputText'] = var12;
            var11['hasMessages'] = var10;
            var12 = 72;
            var11['HEIGHT_COMPACT'] = var12;
            var12 = 180;
            var11['HEIGHT_FULL'] = var12;
            var12 = var7[var2];
            var12 = var4.bind(var5)(var12);
            var12 = var12.withDelay;
            var11['withDelay'] = var12;
            var12 = 23;
            var12 = var7[var12];
            var12 = var4.bind(var5)(var12);
            var12 = var12.withTiming;
            var11['withTiming'] = var12;
            var22 = 24;
            var12 = var7[var22];
            var12 = var4.bind(var5)(var12);
            var12 = var12.STANDARD_EASING;
            var11['STANDARD_EASING'] = var12;
            var1['__closure'] = var11;
            var11 = 14002474476449.0;
            var1['__workletHash'] = var11;
            var11 = _closure1_slot15;
            var1['__initData'] = var11;
            var9 = var8.bind(var9)(var1);
            var1 = 11;
            var1 = var7[var1];
            var11 = var4.bind(var5)(var1);
            var8 = var11.useToken;
            var12 = _closure1_slot1;
            var1 = 10;
            var1 = var7[var1];
            var1 = var12.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_MOBILE_PRIMARY;
            var1 = var8.bind(var11)(var1);
            var8 = 12;
            var8 = var7[var8];
            var12 = var4.bind(var5)(var8);
            var11 = var12.hexWithOpacity;
            var8 = 0;
            var11 = var11.bind(var12)(var1, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var1;
            var1 = 25;
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.useShouldAnimateSticker;
            var1 = false;
            var21 = var4.bind(var7)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 1269; continue _fun0001 }
 729:
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
            var6 = 26;
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
            if(var10) { _fun0001_ip = 1007; continue _fun0001 }
 837:
            var11 = _closure1_slot13;
            var10 = {};
            var12 = var16 != var23;
            var17 = null;
            if(!var12) { _fun0001_ip = 927; continue _fun0001 }
 852:
            var24 = _closure1_slot11;
            var20 = _closure1_slot6;
            var12 = {};
            var25 = var19.stickerContainer;
            var12['style'] = var25;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var25 = 28;
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
 927:
            var12 = new Array(2);
            var12[0] = var17;
            var24 = _closure1_slot11;
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 30;
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
            _fun0001_ip = 1245; continue _fun0001;
 1007:
            var25 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 27;
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
            if(!var14) { _fun0001_ip = 1162; continue _fun0001 }
 1116:
            var20 = _closure1_slot11;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var14 = 28;
            var14 = var24[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var14['sticker'] = var23;
            var14['size'] = var22;
            var14['animated'] = var21;
            var16 = var20.bind(var5)(var17, var14);
 1162:
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 29;
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
 1245:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1269:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();