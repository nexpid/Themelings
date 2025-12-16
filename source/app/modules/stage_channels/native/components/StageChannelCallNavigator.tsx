// app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ModeratorViewOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.channel;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 5;
            var2 = var15[var2];
            var5 = undefined;
            var4 = var14.bind(var5)(var2);
            var3 = var4.useModeratorOverlayChannelState;
            var2 = var10.id;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var11 = 2;
            var2 = var2.bind(var5)(var3, var11);
            var3 = 0;
            var4 = var2[var3];
            var _closure2_slot0 = var4;
            var7 = 1;
            var9 = var2[var7];
            var _closure2_slot1 = var9;
            var8 = _closure1_slot4;
            var2 = var8.useState;
            var8 = var2.bind(var8)(var4);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var8, var11);
            var3 = var2[var3];
            var _closure2_slot2 = var3;
            var2 = var2[var7];
            var _closure2_slot3 = var2;
            var2 = 6;
            var7 = var15[var2];
            var11 = var14.bind(var5)(var7);
            var8 = var11.useAnimatedStyle;
            var7 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot2;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = 1;
case 2:
                    var2 = _closure1_slot11;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.withSpring;
            var12['withSpring'] = var13;
            var12['showStartStageView'] = var3;
            var13 = _closure1_slot11;
            var12['viewAnimationConfig'] = var13;
            var7['__closure'] = var12;
            var12 = 3663814804791.0;
            var7['__workletHash'] = var12;
            var12 = _closure1_slot13;
            var7['__initData'] = var12;
            var12 = var8.bind(var11)(var7);
            var11 = _closure1_slot4;
            var8 = var11.useEffect;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot0;
                        if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var3 = _closure2_slot3;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 500;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var4 = var8.bind(var11)(var4, var7);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var9;
            var1 = function() {
                var4 = _closure2_slot3;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9 = var7.bind(var8)(var1, var4);
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot8;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var8 = _closure1_slot5;
            var13 = var8.absoluteFill;
            var8 = new Array(3);
            var8[0] = var13;
            var13 = {};
            var14 = 8;
            var14 = var11[var14];
            var14 = var7.bind(var5)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.PRIMARY_800;
            var13['backgroundColor'] = var14;
            var8[1] = var13;
            var8[2] = var12;
            var2['style'] = var8;
            var8 = _closure1_slot8;
            var6 = 9;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var10;
            var6['onSkip'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function JoinStageOverlay(arg1) {
        var1 = arg1;
        var8 = var1.channel;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var1 = false;
        var6 = var3.bind(var4)(var1);
        var3 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var3 = var3.bind(var4)(var6, var1);
        var1 = 0;
        var11 = var3[var1];
        var _closure2_slot0 = var11;
        var1 = 1;
        var1 = var3[var1];
        var _closure2_slot1 = var1;
        var13 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 6;
        var3 = var9[var1];
        var7 = var13.bind(var4)(var3);
        var6 = var7.useAnimatedStyle;
        var3 = function s() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.withSpring;
                var6 = _closure2_slot0;
                var3 = 0;
                if(!var6) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                var3 = 1;
case 2:
                var2 = _closure1_slot11;
                var2 = var4.bind(var5)(var3, var2);
                var1['opacity'] = var2;
                return var1;
            }
        };
        var10 = {};
        var12 = 7;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.withSpring;
        var10['withSpring'] = var12;
        var10['showOverlay'] = var11;
        var11 = _closure1_slot11;
        var10['viewAnimationConfig'] = var11;
        var3['__closure'] = var10;
        var10 = 1929951426580.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot14;
        var3['__initData'] = var10;
        var10 = var6.bind(var7)(var3);
        var7 = _closure1_slot4;
        var6 = var7.useEffect;
        var3 = function() {
            var2 = global;
            var5 = var2.setTimeout;
            var4 = undefined;
            var3 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 500;
            var2 = var5.bind(var4)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot8;
        var6 = _closure1_slot1;
        var1 = var9[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var7 = _closure1_slot5;
        var11 = var7.absoluteFill;
        var7 = new Array(3);
        var7[0] = var11;
        var11 = {};
        var12 = 8;
        var12 = var9[var12];
        var12 = var6.bind(var4)(var12);
        var12 = var12.unsafe_rawColors;
        var12 = var12.PRIMARY_800;
        var11['backgroundColor'] = var12;
        var7[1] = var11;
        var7[2] = var10;
        var1['style'] = var7;
        var7 = _closure1_slot8;
        var5 = 10;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['channel'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function StagePromptWrapper(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var2 = _closure1_slot15;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 30;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.AnimatedStartStagePrompt;
        var1 = {};
        var1['channel'] = var6;
        var5 = var5.startStagePrompt;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
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
    var8 = 1;
    var7 = var6[var8];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.StyleSheet;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = {'mass': 0.5, 'stiffness': 600, 'damping': 30, 'overshootClamping': false, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = {};
    var7['flex'] = var8;
    var4['fullScreen'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = 29;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['startStagePrompt'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageChannelCallNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageChannelCallNavigator(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var24 = var1.channel;
            var _closure2_slot0 = var24;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useStageChannelStartEvent;
            var1 = var24.id;
            var1 = var5.bind(var6)(var1);
            var12 = var1.isModerator;
            var9 = var1.isLive;
            var5 = _closure1_slot4;
            var1 = var5.useState;
            var5 = var1.bind(var5)(var9);
            var1 = _closure1_slot3;
            var7 = 1;
            var1 = var1.bind(var4)(var5, var7);
            var10 = 0;
            var18 = var1[var10];
            var1 = 12;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useIsConnectedToVoiceChannel;
            var8 = var1.bind(var2)(var24);
            var11 = var12;
            if(!var12) { _fun0005_ip = 8; continue _fun0005 }
case 9:
            var11 = !var9;
case 8:
            _closure2_slot1 = var11;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useModeratorOverlayChannelState;
            var1 = var24.id;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var15 = 2;
            var1 = var1.bind(var4)(var3, var15);
            var16 = var1[var10];
            _closure2_slot2 = var16;
            var1 = var1[var7];
            _closure2_slot3 = var1;
            var3 = _closure1_slot1;
            var6 = 13;
            var6 = var5[var6];
            var6 = var3.bind(var4)(var6);
            var26 = var6.bind(var4)(var24);
            _closure2_slot4 = var26;
            var19 = _closure1_slot4;
            var13 = var19.useState;
            var6 = false;
            var13 = var13.bind(var19)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var13, var15);
            var13 = var6[var10];
            var6 = var6[var7];
            _closure2_slot5 = var6;
            var15 = _closure1_slot4;
            var10 = var15.useEffect;
            var6 = var24.id;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = var24.guild_id;
            var7[1] = var6;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchMessages;
                var2 = {};
                var5 = _closure2_slot0;
                var6 = var5.guild_id;
                var2['guildId'] = var6;
                var5 = var5.id;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var10.bind(var15)(var6, var7);
            var10 = _closure1_slot4;
            var7 = var10.useRef;
            var6 = var24.id;
            var6 = var7.bind(var10)(var6);
            _closure2_slot6 = var6;
            var10 = _closure1_slot4;
            var7 = var10.useEffect;
            var6 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var10)(var6);
            var15 = _closure1_slot4;
            var10 = var15.useEffect;
            var7 = new Array(1);
            var7[0] = var26;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 15;
                    var3 = var6[var3];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var3);
case 10:
                    if(var2) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.selectParticipant;
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1, var4);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var15)(var6, var7);
            var10 = _closure1_slot4;
            var7 = var10.useEffect;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var1;
            var6[2] = var16;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0007_ip = 14; continue _fun0007 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = !var3;
case 14:
                    if(!var2) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var10)(var1, var6);
            var19 = {};
            var7 = _closure1_slot8;
            var1 = 17;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var24;
            var1 = var7.bind(var4)(var6, var1);
            var19['actionBar'] = var1;
            var6 = _closure1_slot8;
            var1 = 18;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var24;
            var1 = var6.bind(var4)(var3, var1);
            var19['expandedControls'] = var1;
            var23 = true;
            var19['isTouchingLeftScreenEdge'] = var23;
            var19['channel'] = var24;
            var3 = _closure1_slot8;
            var1 = 19;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = _closure1_slot7;
            var5 = var5.DARK;
            var1['theme'] = var5;
            var5 = null;
            if(!(var5 == var26)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var7 = _closure1_slot9;
            var6 = _closure1_slot10;
            var5 = {};
            var10 = _closure1_slot8;
            if(var16) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            if(!var9) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            if(var8) { _fun0005_ip = 21; continue _fun0005 }
case 23:
            if(var16) { _fun0005_ip = 21; continue _fun0005 }
case 24:
            var9 = _closure1_slot17;
            _fun0005_ip = 25; continue _fun0005;
case 21:
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 26;
            var8 = var15[var8];
            var9 = var11.bind(var4)(var8);
case 25:
            _fun0005_ip = 26; continue _fun0005;
case 19:
            var9 = _closure1_slot16;
case 26:
            var8 = {};
            var8['channel'] = var24;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot9;
            var20 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = 23;
            var9 = var10[var9];
            var10 = var20.bind(var4)(var9);
            var9 = {};
            var21 = _closure1_slot8;
            var25 = _closure1_slot2;
            if(var16) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var15 = 24;
            var15 = var25[var15];
            _fun0005_ip = 29; continue _fun0005;
case 27:
            var22 = 27;
            var15 = var25[var22];
case 29:
            var20 = var20.bind(var4)(var15);
            var15 = {};
            var15['channel'] = var24;
            var15 = var21.bind(var4)(var20, var15);
            var9['header'] = var15;
            var29 = var9;
            var28 = var19;
            var15 = copyDataProperties(var29, var28);
            var21 = _closure1_slot8;
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = 28;
            var15 = var22[var15];
            var20 = var20.bind(var4)(var15);
            var15 = {};
            var15['channel'] = var24;
            var20 = var21.bind(var4)(var20, var15);
            var15 = new Array(2);
            var15[0] = var20;
            if(!var12) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var12 = !var18;
case 30:
            if(!var12) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var12 = !var16;
case 32:
            if(!var12) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var20 = _closure1_slot8;
            var18 = _closure1_slot18;
            var16 = {};
            var16['channel'] = var24;
            var12 = var20.bind(var4)(var18, var16);
case 34:
            var15[1] = var12;
            var12 = 'children';
            var9[var12] = var15;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            _fun0005_ip = 36; continue _fun0005;
case 17:
            var8 = _closure1_slot8;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = _closure1_slot12;
            var9 = var9.fullScreen;
            var6['style'] = var9;
            var11 = _closure1_slot9;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 20;
            var9 = var25[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var24;
            var16 = _closure1_slot8;
            var12 = 21;
            var12 = var25[var12];
            var15 = var21.bind(var4)(var12);
            var12 = {};
            var22 = _closure1_slot8;
            var20 = _closure1_slot0;
            var18 = 22;
            var18 = var25[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.ChannelCallSingleController;
            var18 = {};
            var18['channel'] = var24;
            var18['selectedParticipant'] = var26;
            var18 = var22.bind(var4)(var20, var18);
            var12['children'] = var18;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var18 = _closure1_slot8;
            var15 = 23;
            var15 = var25[var15];
            var16 = var21.bind(var4)(var15);
            var15 = {};
            var22 = _closure1_slot8;
            var20 = 24;
            var20 = var25[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['channel'] = var24;
            var20['fullscreenStream'] = var23;
            var23 = function onOpenRTCDebugOverlay() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var20['onOpenRTCDebugOverlay'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var15['header'] = var20;
            var29 = var15;
            var28 = var19;
            var19 = copyDataProperties(var29, var28);
            var15 = var18.bind(var4)(var16, var15);
            var12[1] = var15;
            if(!var13) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var16 = _closure1_slot8;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 25;
            var14 = var18[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var17 = function onClose() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var14['onClose'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 37:
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 36:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();