// app/modules/video_calls/native/components/ChannelCallNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getScreens(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = _closure1_slot10;
        var3 = var2.MAIN_CALL_SCREEN;
        var2 = {'headerShown': false, 'ignoreKeyboard': true, 'gestureEnabled': false, 'title': ''};
        var4 = function render() {
            var4 = _closure1_slot13;
            var3 = _closure1_slot22;
            var2 = {};
            var1 = _closure2_slot0;
            var2['channel'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2['render'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function CallWithVoiceChat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.channel;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot15;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.width;
            var7 = 2;
            var11 = var7 * var1;
            var _closure2_slot0 = var11;
            var3 = _closure1_slot0;
            var1 = 12;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useVoiceChatNavigationContext;
            var1 = var1.bind(var3)();
            var9 = null;
            var3 = var9 == var1;
            var15 = undefined;
            if(var3) { _fun0001_ip = 114; continue _fun0001 }
 108:
            var15 = var1.translateX;
 114:
            _closure2_slot1 = var15;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = 13;
            var1 = var14[var17];
            var5 = var16.bind(var4)(var1);
            var3 = var5.useAnimatedStyle;
            var1 = function h() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot0;
                    var1['width'] = var2;
                    var3 = {};
                    var4 = _closure2_slot1;
                    var2 = null;
                    var6 = var2 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 43; continue _fun0002 }
 30:
                    var6 = _closure2_slot1;
                    var5 = var6.get;
                    var4 = var5.bind(var6)();
 43:
                    var5 = var2 != var4;
                    var2 = 0;
                    if(!var5) { _fun0002_ip = 55; continue _fun0002 }
 52:
                    var2 = var4;
 55:
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['width'] = var11;
            var6['translateX'] = var15;
            var1['__closure'] = var6;
            var6 = 4309613236072.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot16;
            var1['__initData'] = var6;
            var6 = var3.bind(var5)(var1);
            var1 = var14[var17];
            var5 = var16.bind(var4)(var1);
            var3 = var5.useAnimatedStyle;
            var1 = function _() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var2 = 'black';
                    var1['backgroundColor'] = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var7 = undefined;
                    var6 = var3.bind(var7)(var2);
                    var5 = var6.interpolate;
                    var4 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var4;
                    if(var4) { _fun0003_ip = 70; continue _fun0003 }
 57:
                    var8 = _closure2_slot1;
                    var4 = var8.get;
                    var7 = var4.bind(var8)();
 70:
                    var8 = var2 != var7;
                    var2 = 0;
                    var4 = 0;
                    if(!var8) { _fun0003_ip = 84; continue _fun0003 }
 81:
                    var4 = var7;
 84:
                    var3 = _closure2_slot0;
                    var7 = -var3;
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var2;
                    var2 = [0.9, 0];
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var14 = var14[var17];
            var14 = var16.bind(var4)(var14);
            var14 = var14.interpolate;
            var8['interpolate'] = var14;
            var8['translateX'] = var15;
            var8['width'] = var11;
            var1['__closure'] = var8;
            var8 = 1339801810447.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot17;
            var1['__initData'] = var8;
            var18 = var3.bind(var5)(var1);
            var8 = _closure1_slot5;
            var5 = var8.useState;
            var1 = var9 == var15;
            var11 = undefined;
            if(var1) { _fun0001_ip = 316; continue _fun0001 }
 307:
            var1 = var15.get;
            var11 = var1.bind(var15)();
 316:
            var14 = var9 != var11;
            var1 = 0;
            var3 = 0;
            if(!var14) { _fun0001_ip = 330; continue _fun0001 }
 327:
            var3 = var11;
 330:
            var3 = var3 > var1;
            var5 = var5.bind(var8)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5, var7);
            var11 = var3[var1];
            var1 = 1;
            var14 = var3[var1];
            _closure2_slot2 = var14;
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var17];
            var7 = var16.bind(var4)(var3);
            var5 = var7.useAnimatedReaction;
            var3 = function C() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.abs;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var5;
                    var5 = undefined;
                    if(var6) { _fun0004_ip = 45; continue _fun0004 }
 32:
                    var6 = _closure2_slot1;
                    var2 = var6.get;
                    var5 = var2.bind(var6)();
 45:
                    var6 = var1 != var5;
                    var2 = 0;
                    var1 = 0;
                    if(!var6) { _fun0004_ip = 59; continue _fun0004 }
 56:
                    var1 = var5;
 59:
                    var1 = var3.bind(var4)(var1);
                    var1 = var1 > var2;
                    return var1;
                }
            };
            var8 = {};
            var8['translateX'] = var15;
            var3['__closure'] = var8;
            var8 = 3076815293699.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot18;
            var3['__initData'] = var8;
            var2 = function v(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var1 = var3;
                    if(!var1) { _fun0005_ip = 16; continue _fun0005 }
 9:
                    var2 = arg2;
                    var1 = var3 !== var2;
 16:
                    if(!var1) { _fun0005_ip = 68; continue _fun0005 }
 19:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var15 = var1[var17];
            var15 = var16.bind(var4)(var15);
            var15 = var15.runOnJS;
            var8['runOnJS'] = var15;
            var8['setShouldRenderChat'] = var14;
            var2['__closure'] = var8;
            var8 = 661145094859.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot19;
            var2['__initData'] = var8;
            var2 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var12.textInVoiceContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var12.voiceContainer;
            var5['style'] = var8;
            var8 = var13.isGuildStageVoice;
            var8 = var8.bind(var13)();
            var16 = _closure1_slot13;
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var8) { _fun0001_ip = 622; continue _fun0001 }
 596:
            var8 = 15;
            var8 = var19[var8];
            var14 = var15.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var13;
            var14 = var16.bind(var4)(var14, var8);
            _fun0001_ip = 646; continue _fun0001;
 622:
            var8 = 14;
            var8 = var19[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var13;
            var14 = var16.bind(var4)(var15, var8);
 646:
            var8 = new Array(2);
            var8[0] = var14;
            var16 = _closure1_slot13;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var17 = 'box-none';
            var14['pointerEvents'] = var17;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = _closure1_slot7;
            var18 = var18.absoluteFill;
            var17[1] = var18;
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var8[1] = var14;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.textContainer;
            var6['style'] = var12;
            var9 = null;
            if(!var11) { _fun0001_ip = 808; continue _fun0001 }
 772:
            var12 = _closure1_slot13;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 16;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 808:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function MainCallScreen(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var8 = var2.channel;
            var2 = _closure1_slot15;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var15 = var2.analyticsLocations;
            var3 = _closure1_slot0;
            var2 = 18;
            var2 = var5[var2];
            var10 = var3.bind(var4)(var2);
            var6 = var10.useNavigationState;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.routes;
                    var1 = var1.routes;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 47; continue _fun0007 }
 42:
                    var1 = var2.name;
 47:
                    return var1;
                }
            };
            var14 = var6.bind(var10)(var2);
            var2 = _closure1_slot8;
            var2 = var2.bind(var4)();
            var13 = var2.reopenShelfNextMount;
            var2 = 19;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useIsConnectedToVoiceChannel;
            var6 = var2.bind(var6)(var8);
            var _closure2_slot0 = var6;
            var10 = _closure1_slot5;
            var2 = var10.useId;
            var2 = var2.bind(var10)();
            var _closure2_slot1 = var2;
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getState;
                var3 = var1.bind(var2)();
                var2 = var3.requestSafeAreaDisableLock;
                var1 = {};
                var5 = _closure2_slot1;
                var1['key'] = var5;
                var4 = _closure2_slot0;
                var1['lockEnabled'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var3 = var1.bind(var2)();
                    var2 = var3.requestSafeAreaDisableLock;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1['key'] = var4;
                    var4 = false;
                    var1['lockEnabled'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var11.bind(var12)(var2, var10);
            var2 = 20;
            var2 = var5[var2];
            var11 = var3.bind(var4)(var2);
            var10 = var11.useShouldAgeGateChannel;
            var2 = var8.id;
            var2 = var10.bind(var11)(var2);
            var16 = _closure1_slot5;
            var12 = var16.useEffect;
            var11 = function() {
                var2 = function dismissOAuthModal() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure3_slot0;
                        if(!var1) { _fun0008_ip = 56; continue _fun0008 }
 10:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 21;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.popWithKey;
                        var1 = _closure1_slot12;
                        var1 = var3.bind(var4)(var1);
                        var1 = false;
                        _closure3_slot0 = var1;
 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot1 = var2;
                var5 = function showOAuth2Modal() {
                    var1 = undefined;
                    var4 = _closure3_slot3;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot2 = var5;
                var2 = function _showOAuth2Modal() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0009_ip = 160; continue _fun0009 }
 10:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var5 = 21;
                                var7 = var4[var5];
                                var3 = undefined;
                                var9 = var6.bind(var3)(var7);
                                var8 = var9.popWithKey;
                                var7 = _closure1_slot12;
                                var7 = var8.bind(var9)(var7);
                                var5 = var4[var5];
                                var8 = var6.bind(var3)(var5);
                                var7 = var8.pushLazy;
                                var6 = _closure1_slot0;
                                var5 = 23;
                                var5 = var4[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = 22;
                                var5 = var4[var5];
                                var4 = var4.paths;
                                var6 = var6.bind(var3)(var5, var4);
                                var4 = {};
                                var12 = arg1;
                                var13 = var4;
                                var5 = copyDataProperties(var13, var12);
                                var10 = _closure3_slot1;
                                var9 = 'dismissOAuthModal';
                                var4[var9] = var10;
                                var2 = _closure1_slot12;
                                var2 = var7.bind(var8)(var6, var4, var2);
                                SaveGenerator(address=142);
 140:
                                return var2;
 142:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0009_ip = 157; continue _fun0009 }
 148:
                                var4 = true;
                                _closure3_slot0 = var4;
                                return var3;
 157:
                                return var2;
 160:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot3 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot3 = var2;
                var2 = false;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = _closure1_slot11;
                var2 = var2.SHOW_OAUTH2_MODAL;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var6 = var3.ComponentDispatch;
                    var5 = var6.unsubscribe;
                    var2 = _closure1_slot11;
                    var4 = var2.SHOW_OAUTH2_MODAL;
                    var3 = _closure3_slot2;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var10 = new Array(0);
            var10 = var12.bind(var16)(var11, var10);
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = new Array(4);
            var10[0] = var15;
            var10[1] = var8;
            var10[2] = var14;
            var10[3] = var13;
            var1 = function() {
                var1 = _closure1_slot10;
                var1 = var1.MAIN_CALL_SCREEN;
                var1 = undefined;
                return var1;
            };
            var1 = var11.bind(var12)(var1, var10);
            var1 = 25;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsVoiceChannelLocked;
            var1 = var1.bind(var3)(var8);
            if(var2) { _fun0006_ip = 407; continue _fun0006 }
 302:
            if(var1) { _fun0006_ip = 340; continue _fun0006 }
 305:
            var1 = var8.isVocalThread;
            var1 = var1.bind(var8)();
            if(var1) { _fun0006_ip = 340; continue _fun0006 }
 318:
            var3 = _closure1_slot13;
            var2 = _closure1_slot21;
            var1 = {};
            var1['channel'] = var8;
            var5 = var3.bind(var4)(var2, var1);
            _fun0006_ip = 405; continue _fun0006;
 340:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var9 = var9.flex;
            var1['style'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 15;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var8;
            var9 = var11.bind(var4)(var10, var9);
            var1['children'] = var9;
            var5 = var3.bind(var4)(var2, var1);
 405:
            _fun0006_ip = 480; continue _fun0006;
 407:
            var3 = _closure1_slot13;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 26;
            var1 = var11[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var9 = 21;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.pop;
            var1['onReturnToSafety'] = var9;
            var9 = var8.guild_id;
            var1['guildId'] = var9;
            var8 = var8.id;
            var1['channelId'] = var8;
            var5 = var3.bind(var4)(var2, var1);
 480:
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 27;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = _closure1_slot0;
            var7 = 28;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            if(var7) { _fun0006_ip = 537; continue _fun0006 }
 534:
            var7 = !var6;
 537:
            var1['forceHide'] = var7;
            var6 = !var6;
            var1['showWhenParticipantOnScreen'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var10 = var4.StyleSheet;
    var _closure1_slot7 = var10;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useActivityShelfActionSheetStore;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelCallScreens;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'stretch'};
    var4['flex'] = var9;
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var12 = 'right';
    var9[var12] = var1;
    var4['textInVoiceContainer'] = var9;
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var11 = '50%';
    var9[var12] = var11;
    var4['voiceContainer'] = var9;
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 'left';
    var9[var10] = var11;
    var4['textContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelCallNavigator(arg1) {
        var1 = arg1;
        var8 = var1.channel;
        var1 = _closure1_slot10;
        var5 = var1.MAIN_CALL_SCREEN;
        var4 = _closure1_slot13;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 29;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var7 = _closure1_slot20;
        var6 = {};
        var6['channel'] = var8;
        var6 = var7.bind(var3)(var6);
        var1['screens'] = var6;
        var1['initialRouteName'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();