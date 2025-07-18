// app/modules/stage_channels/native/components/StageChannelCallNavigator.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ModeratorViewOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
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
                    if(!var6) { _fun0002_ip = 47; continue _fun0002 }
 44:
                    var3 = 1;
 47:
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
 0:
                        var2 = _closure2_slot0;
                        if(var2) { _fun0003_ip = 23; continue _fun0003 }
 10:
                        var3 = _closure2_slot3;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
 23:
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
            if(!var3) { _fun0001_ip = 426; continue _fun0001 }
 296:
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
 426:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function StagePromptWrapper(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var2 = _closure1_slot14;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 28;
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
    var _closure1_slot16 = var1;
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
    var4 = native4;
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
    var4 = 27;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var10;
    var4['startStagePrompt'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageChannelCallNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageChannelCallNavigator(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useStageChannelStartEvent;
            var1 = var24.id;
            var1 = var2.bind(var3)(var1);
            var12 = var1.isModerator;
            var1 = var1.isLive;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var7 = 1;
            var2 = var2.bind(var4)(var3, var7);
            var8 = 0;
            var18 = var2[var8];
            var9 = var12;
            if(!var12) { _fun0004_ip = 133; continue _fun0004 }
 130:
            var9 = !var1;
 133:
            _closure2_slot1 = var9;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useModeratorOverlayChannelState;
            var1 = var24.id;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var11 = 2;
            var1 = var1.bind(var4)(var3, var11);
            var16 = var1[var8];
            _closure2_slot2 = var16;
            var1 = var1[var7];
            _closure2_slot3 = var1;
            var3 = _closure1_slot1;
            var6 = 11;
            var6 = var5[var6];
            var6 = var3.bind(var4)(var6);
            var26 = var6.bind(var4)(var24);
            _closure2_slot4 = var26;
            var13 = _closure1_slot4;
            var10 = var13.useState;
            var6 = false;
            var10 = var10.bind(var13)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var10, var11);
            var13 = var6[var8];
            var6 = var6[var7];
            _closure2_slot5 = var6;
            var10 = _closure1_slot4;
            var8 = var10.useEffect;
            var6 = var24.id;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = var24.guild_id;
            var7[1] = var6;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
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
            var6 = var8.bind(var10)(var6, var7);
            var8 = _closure1_slot4;
            var7 = var8.useRef;
            var6 = var24.id;
            var6 = var7.bind(var8)(var6);
            _closure2_slot6 = var6;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var10 = _closure1_slot4;
            var8 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var26;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0005_ip = 50; continue _fun0005 }
 16:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 13;
                    var3 = var6[var3];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var3);
 50:
                    if(var2) { _fun0005_ip = 99; continue _fun0005 }
 53:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.selectParticipant;
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1, var4);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var10)(var6, var7);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var1;
            var6[2] = var16;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0006_ip = 17; continue _fun0006 }
 10:
                    var3 = _closure2_slot1;
                    var2 = !var3;
 17:
                    if(!var2) { _fun0006_ip = 30; continue _fun0006 }
 20:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var6);
            var19 = {};
            var7 = _closure1_slot8;
            var1 = 15;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var24;
            var1 = var7.bind(var4)(var6, var1);
            var19['actionBar'] = var1;
            var6 = _closure1_slot8;
            var1 = 16;
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
            var1 = 17;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = _closure1_slot7;
            var5 = var5.DARK;
            var1['theme'] = var5;
            var5 = null;
            if(!(var5 == var26)) { _fun0004_ip = 811; continue _fun0004 }
 547:
            var7 = _closure1_slot9;
            var6 = _closure1_slot10;
            var5 = {};
            var10 = _closure1_slot8;
            if(var16) { _fun0004_ip = 586; continue _fun0004 }
 564:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 24;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            _fun0004_ip = 590; continue _fun0004;
 586:
            var9 = _closure1_slot15;
 590:
            var8 = {};
            var8['channel'] = var24;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot9;
            var20 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = 21;
            var9 = var10[var9];
            var10 = var20.bind(var4)(var9);
            var9 = {};
            var21 = _closure1_slot8;
            var25 = _closure1_slot2;
            if(var16) { _fun0004_ip = 656; continue _fun0004 }
 647:
            var15 = 22;
            var15 = var25[var15];
            _fun0004_ip = 663; continue _fun0004;
 656:
            var22 = 25;
            var15 = var25[var22];
 663:
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
            var15 = 26;
            var15 = var22[var15];
            var20 = var20.bind(var4)(var15);
            var15 = {};
            var15['channel'] = var24;
            var20 = var21.bind(var4)(var20, var15);
            var15 = new Array(2);
            var15[0] = var20;
            if(!var12) { _fun0004_ip = 744; continue _fun0004 }
 741:
            var12 = !var18;
 744:
            if(!var12) { _fun0004_ip = 750; continue _fun0004 }
 747:
            var12 = !var16;
 750:
            if(!var12) { _fun0004_ip = 773; continue _fun0004 }
 753:
            var20 = _closure1_slot8;
            var18 = _closure1_slot16;
            var16 = {};
            var16['channel'] = var24;
            var12 = var20.bind(var4)(var18, var16);
 773:
            var15[1] = var12;
            var12 = 'children';
            var9[var12] = var15;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            _fun0004_ip = 1102; continue _fun0004;
 811:
            var8 = _closure1_slot8;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = _closure1_slot12;
            var9 = var9.fullScreen;
            var6['style'] = var9;
            var11 = _closure1_slot9;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 18;
            var9 = var25[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var24;
            var16 = _closure1_slot8;
            var12 = 19;
            var12 = var25[var12];
            var15 = var21.bind(var4)(var12);
            var12 = {};
            var22 = _closure1_slot8;
            var20 = _closure1_slot0;
            var18 = 20;
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
            var15 = 21;
            var15 = var25[var15];
            var16 = var21.bind(var4)(var15);
            var15 = {};
            var22 = _closure1_slot8;
            var20 = 22;
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
            if(!var13) { _fun0004_ip = 1078; continue _fun0004 }
 1034:
            var16 = _closure1_slot8;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 23;
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
 1078:
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 1102:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();