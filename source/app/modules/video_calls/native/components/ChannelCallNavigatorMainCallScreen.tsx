// app/modules/video_calls/native/components/ChannelCallNavigatorMainCallScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function MainCallScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.channel;
            var1 = var2.shouldShowConnectingScreen;
            var6 = var2.awaitingRemoteSessionInfo;
            var2 = null;
            if(!(var2 == var6)) { _fun0001_ip = 81; continue _fun0001 }
 26:
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var1) { _fun0001_ip = 53; continue _fun0001 }
 44:
            var1 = 12;
            var1 = var7[var1];
            _fun0001_ip = 60; continue _fun0001;
 53:
            var3 = 11;
            var1 = var7[var3];
 60:
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['channel'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            _fun0001_ip = 123; continue _fun0001;
 81:
            var5 = _closure1_slot15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['awaitingRemoteSessionInfo'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 123:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DevShelfFetchState;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setShowConsoleVoiceSparkles;
    var _closure1_slot7 = var8;
    var4 = var4.useConsoleVoiceUpsellStore;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.resetFocus;
    var _closure1_slot11 = var7;
    var4 = var4.useIsVoiceChatFocused;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallNavigatorMainCallScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelCallNavigatorMainCallScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var20 = var1.channel;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useIsConnectedToVoiceChannel;
            var2 = var1.bind(var2)(var20);
            var6 = _closure1_slot1;
            var1 = 14;
            var1 = var3[var1];
            var1 = var6.bind(var4)(var1);
            var21 = var1.bind(var4)();
            var1 = 15;
            var3 = var3[var1];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = var6.bind(var7)(var5, var3);
            if(var2) { _fun0002_ip = 164; continue _fun0002 }
 139:
            var3 = null;
            var3 = var3 == var21;
            var5 = undefined;
            if(var3) { _fun0002_ip = 155; continue _fun0002 }
 150:
            var5 = var21.channelId;
 155:
            var3 = var20.id;
            var2 = var5 === var3;
 164:
            var12 = !var2;
            if(!var12) { _fun0002_ip = 205; continue _fun0002 }
 170:
            var3 = var20.type;
            var2 = _closure1_slot13;
            var2 = var2.GUILD_VOICE;
            var2 = var3 === var2;
            if(var2) { _fun0002_ip = 202; continue _fun0002 }
 192:
            var3 = var20.isVocalThread;
            var2 = var3.bind(var20)();
 202:
            var12 = var2;
 205:
            _closure2_slot0 = var12;
            var2 = _closure1_slot12;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = 'dark';
            var5 = var6;
            if(!var12) { _fun0002_ip = 266; continue _fun0002 }
 251:
            var3 = null;
            var3 = var3 == var22;
            var5 = var6;
            if(!var3) { _fun0002_ip = 266; continue _fun0002 }
 263:
            var5 = var2;
 266:
            var14 = _closure1_slot4;
            var3 = var14.useState;
            var2 = false;
            var6 = var3.bind(var14)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var9 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot1 = var2;
            var2 = _closure1_slot8;
            var2 = var2.bind(var4)();
            var23 = var2.showSparkles;
            _closure2_slot2 = var23;
            var24 = function onOpenRTCDebugOverlay() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = var8[var1];
            var11 = var2.bind(var4)(var3);
            var7 = var11.useStateFromStores;
            var3 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getShowActivitiesDebugOverlay;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var7.bind(var11)(var6, var3);
            var7 = var14.useEffect;
            var6 = new Array(1);
            var6[0] = var12;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0003_ip = 23; continue _fun0003 }
 10:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var14)(var3, var6);
            var6 = _closure1_slot1;
            var3 = 17;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            _closure2_slot3 = var3;
            var7 = 18;
            var7 = var8[var7];
            var17 = var2.bind(var4)(var7);
            var16 = var17.UNSAFE_useIsDismissibleContentDismissed;
            var7 = 19;
            var7 = var8[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.DONUT_MOBILE_NUX;
            var7 = var16.bind(var17)(var7);
            var17 = !var7;
            _closure2_slot4 = var17;
            var16 = var14.useCallback;
            var7 = new Array(3);
            var7[0] = var17;
            var7[1] = var23;
            var7[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 25; continue _fun0004 }
 10:
                    var3 = _closure2_slot3;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 25:
                    if(!var2) { _fun0004_ip = 88; continue _fun0004 }
 28:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 19;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.DONUT_MOBILE_NUX;
                    var2 = var3.bind(var4)(var2);
 88:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0004_ip = 111; continue _fun0004 }
 95:
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var16.bind(var14)(var3, var7);
            var1 = var8[var1];
            var18 = var2.bind(var4)(var1);
            var16 = var18.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getFetchState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var16 = var16.bind(var18)(var7, var3, var1);
            _closure2_slot5 = var16;
            var1 = 20;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)(var16);
            _closure2_slot6 = var1;
            var7 = var14.useEffect;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = _closure1_slot6;
                    var1 = var1.ERROR;
                    var1 = var3 === var1;
                    if(!var1) { _fun0005_ip = 45; continue _fun0005 }
 27:
                    var3 = _closure2_slot6;
                    var2 = _closure1_slot6;
                    var2 = var2.ERROR;
                    var1 = var3 !== var2;
 45:
                    if(!var1) { _fun0005_ip = 166; continue _fun0005 }
 48:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 21;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var8 = 'EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR';
                    var1['key'] = var8;
                    var10 = _closure1_slot0;
                    var4 = 22;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var7[var4];
                    var4 = var10.bind(var5)(var4);
                    var4 = var4.t;
                    var4 = var4.AlJyIy;
                    var4 = var8.bind(var9)(var4);
                    var1['content'] = var4;
                    var4 = 23;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var1['icon'] = var4;
                    var1 = var2.bind(var3)(var1);
 166:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var14)(var1, var3);
            var3 = _closure1_slot15;
            var1 = 24;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var7 = _closure1_slot16;
            var5 = 25;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['useThemedBarStyle'] = var12;
            var8 = var12;
            if(var12) { _fun0002_ip = 682; continue _fun0002 }
 679:
            var8 = var13;
 682:
            var5['showStatus'] = var8;
            var5['channel'] = var20;
            var14 = _closure1_slot15;
            var13 = _closure1_slot17;
            var8 = {};
            var8['channel'] = var20;
            var8['awaitingRemoteSessionInfo'] = var22;
            var8['shouldShowConnectingScreen'] = var12;
            var13 = var14.bind(var4)(var13, var8);
            var8 = new Array(4);
            var8[0] = var13;
            var16 = _closure1_slot15;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 26;
            var13 = var18[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['channel'] = var20;
            var18 = var12;
            if(var18) { _fun0002_ip = 771; continue _fun0002 }
 765:
            var19 = null;
            var18 = var19 != var22;
 771:
            if(var18) { _fun0002_ip = 780; continue _fun0002 }
 774:
            var19 = null;
            var18 = var19 != var21;
 780:
            var13['omitPTT'] = var18;
            var13['disableGradient'] = var12;
            var13['forceReveal'] = var12;
            var13['onDrawerClose'] = var17;
            var22 = _closure1_slot15;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var17 = 27;
            var17 = var21[var17];
            var19 = var18.bind(var4)(var17);
            var17 = {};
            var17['channel'] = var20;
            var17['onOpenRTCDebugOverlay'] = var24;
            var17['showConnecting'] = var12;
            var17 = var22.bind(var4)(var19, var17);
            var13['header'] = var17;
            var17 = true;
            var13['isTouchingLeftScreenEdge'] = var17;
            var22 = _closure1_slot15;
            var17 = 28;
            var17 = var21[var17];
            var19 = var18.bind(var4)(var17);
            var17 = {};
            var17['channel'] = var20;
            var17 = var22.bind(var4)(var19, var17);
            var13['bottomHeader'] = var17;
            var22 = _closure1_slot15;
            var17 = 29;
            var17 = var21[var17];
            var19 = var18.bind(var4)(var17);
            var17 = {};
            var26 = _closure1_slot0;
            var25 = 11;
            var25 = var21[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.showVoiceSettingsActionSheet;
            var17['onOpenVoiceSettings'] = var25;
            var17['channel'] = var20;
            var17['onOpenRTCDebugOverlay'] = var24;
            var24 = _closure1_slot14;
            var24 = var24.DEFAULT;
            var17['mediaEngineContext'] = var24;
            var17['showGameConsoleSparkles'] = var23;
            var17 = var22.bind(var4)(var19, var17);
            var13['expandedControls'] = var17;
            var22 = _closure1_slot15;
            var17 = 30;
            var17 = var21[var17];
            var19 = var18.bind(var4)(var17);
            var17 = {};
            var17['channel'] = var20;
            var17['shouldShowConnectingScreen'] = var12;
            var17 = var22.bind(var4)(var19, var17);
            var13['actionBar'] = var17;
            var19 = _closure1_slot15;
            var17 = 31;
            var17 = var21[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['shouldShowConnectingScreen'] = var12;
            var17['channel'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var13['children'] = var17;
            var13 = var16.bind(var4)(var14, var13);
            var8[1] = var13;
            if(!var9) { _fun0002_ip = 1066; continue _fun0002 }
 1063:
            var9 = !var12;
 1066:
            if(!var9) { _fun0002_ip = 1113; continue _fun0002 }
 1069:
            var14 = _closure1_slot15;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 32;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var15 = function onClose() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var12['onClose'] = var15;
            var9 = var14.bind(var4)(var13, var12);
 1113:
            var8[2] = var9;
            var9 = null;
            if(!var11) { _fun0002_ip = 1154; continue _fun0002 }
 1122:
            var12 = _closure1_slot15;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 33;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
 1154:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();