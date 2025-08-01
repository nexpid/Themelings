// app/modules/video_calls/native/components/ChannelExpandedControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'relative', 'borderRadius': null, 'backgroundColor': null, 'marginTop': 8, 'marginBottom': 8};
    var11 = 9;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var11 = 10;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.CONTAINER_BACKGROUND;
    var10['backgroundColor'] = var11;
    var4['container'] = var10;
    var10 = {'position': 'absolute', 'bottom': 4294967294, 'right': '50%', 'tintColor': '#FF9A15'};
    var4['sparkle1'] = var10;
    var10 = {'position': 'absolute', 'left': 4294967293, 'top': 8};
    var4['sparkle2'] = var10;
    var10 = {'position': 'absolute', 'right': 4294967291, 'top': '25%'};
    var4['sparkle3'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.channel;
            var _closure2_slot0 = var13;
            var19 = var1.onOpenRTCDebugOverlay;
            var22 = var1.onOpenVoiceSettings;
            var9 = var1.canInvite;
            var7 = var1.isActivitiesEnabled;
            var31 = var1.mediaEngineContext;
            var4 = undefined;
            if(!(var31 === var4)) { _fun0001_ip = 63; continue _fun0001 }
 50:
            var2 = _closure1_slot9;
            var31 = var2.DEFAULT;
 63:
            var36 = var1.showGameConsoleSparkles;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var27 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 11;
            var1 = var20[var1];
            var1 = var27.bind(var4)(var1);
            var29 = var1.bind(var4)(var13);
            var17 = _closure1_slot0;
            var1 = 12;
            var1 = var20[var1];
            var2 = var17.bind(var4)(var1);
            var1 = var2.useIsConnectedToVoiceChannel;
            var14 = var1.bind(var2)(var13);
            _closure2_slot1 = var14;
            var1 = 13;
            var1 = var20[var1];
            var1 = var27.bind(var4)(var1);
            var24 = var1.bind(var4)(var13);
            var1 = 14;
            var1 = var20[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.DeveloperMode;
            var1 = var2.useSetting;
            var18 = var1.bind(var2)();
            var1 = 15;
            var1 = var20[var1];
            var2 = var27.bind(var4)(var1);
            var1 = var13.id;
            var32 = var2.bind(var4)(var1);
            var1 = _closure1_slot13;
            var16 = var1.bind(var4)();
            var23 = 16;
            var1 = var20[var23];
            var1 = var27.bind(var4)(var1);
            var38 = var1.bind(var4)();
            var1 = 17;
            var1 = var20[var1];
            var1 = var27.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var12 = 18;
            var2 = var20[var12];
            var6 = var17.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var15 = var5.bind(var6)(var3, var2);
            var5 = 19;
            var2 = var20[var5];
            var6 = var17.bind(var4)(var2);
            var3 = var6.useActionBarSecondButton;
            var2 = {};
            var2['channel'] = var13;
            var6 = var3.bind(var6)(var2);
            var2 = var20[var5];
            var8 = var17.bind(var4)(var2);
            var3 = var8.useActionBarSecondButtons;
            var2 = {};
            var2['channel'] = var13;
            var11 = var3.bind(var8)(var2);
            var2 = var20[var5];
            var8 = var17.bind(var4)(var2);
            var3 = var8.useActionBarPrimaryButton;
            var2 = {};
            var2['channel'] = var13;
            var3 = var3.bind(var8)(var2);
            var2 = var20[var5];
            var21 = var17.bind(var4)(var2);
            var8 = var21.useActionBarPrimaryButtons;
            var2 = {};
            var2['channel'] = var13;
            var2 = var8.bind(var21)(var2);
            var8 = 20;
            var8 = var20[var8];
            var25 = var17.bind(var4)(var8);
            var21 = var25.UNSAFE_useIsDismissibleContentDismissed;
            var8 = 21;
            var8 = var20[var8];
            var8 = var17.bind(var4)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.DONUT_MOBILE_NUX;
            var8 = var21.bind(var25)(var8);
            var35 = !var8;
            _closure2_slot2 = var35;
            var25 = 22;
            var8 = var20[var25];
            var28 = var17.bind(var4)(var8);
            var21 = var28.useEmbeddedActivityLaunchability;
            var8 = var13.id;
            var8 = var21.bind(var28)(var8);
            var21 = 23;
            var21 = var20[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.bind(var4)();
            var21 = var21.bottom;
            var27 = 24;
            var27 = var20[var27];
            var30 = var17.bind(var4)(var27);
            var28 = var30.useIsStreamFocused;
            var27 = var13.id;
            var33 = var28.bind(var30)(var27);
            var27 = 25;
            var27 = var20[var27];
            var30 = var17.bind(var4)(var27);
            var28 = var30.useHasPipParticipant;
            var27 = {};
            var27['isActivityViewFocused'] = var32;
            var32 = var28.bind(var30)(var27);
            var12 = var20[var12];
            var27 = var17.bind(var4)(var12);
            var20 = var27.useStateFromStores;
            var12 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var12;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isPipEnabledWhileFocusedOnActivityOrStream;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var20.bind(var27)(var17, var12);
            var17 = null;
            if(!(var17 == var1)) { _fun0001_ip = 2260; continue _fun0001 }
 601:
            if(var15) { _fun0001_ip = 2260; continue _fun0001 }
 607:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var12.bind(var4)(var1);
            var1 = var1.ActionBarSecondButton;
            var1 = var1.AUDIO_ROUTE;
            var30 = var6 !== var1;
            if(!var30) { _fun0001_ip = 676; continue _fun0001 }
 643:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var12.bind(var4)(var1);
            var1 = var1.ActionBarSecondButton;
            var1 = var1.AUDIO_ROUTE;
            var30 = var11[var1];
 676:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var12.bind(var4)(var1);
            var1 = var1.ActionBarSecondButton;
            var1 = var1.SCREEN_SHARE_START;
            var34 = var6 !== var1;
            if(!var34) { _fun0001_ip = 745; continue _fun0001 }
 712:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var12.bind(var4)(var1);
            var1 = var1.ActionBarSecondButton;
            var1 = var1.SCREEN_SHARE_START;
            var34 = var11[var1];
 745:
            if(var34) { _fun0001_ip = 820; continue _fun0001 }
 748:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var12.bind(var4)(var1);
            var1 = var1.ActionBarSecondButton;
            var1 = var1.SCREEN_SHARE_END;
            var1 = var6 !== var1;
            if(!var1) { _fun0001_ip = 817; continue _fun0001 }
 784:
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var12.bind(var4)(var6);
            var6 = var6.ActionBarSecondButton;
            var6 = var6.SCREEN_SHARE_END;
            var1 = var11[var6];
 817:
            var34 = var1;
 820:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ActionBarPrimaryButton;
            var1 = var1.END_ACTIVITY;
            var12 = var3 !== var1;
            if(!var12) { _fun0001_ip = 889; continue _fun0001 }
 856:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ActionBarPrimaryButton;
            var1 = var1.END_ACTIVITY;
            var12 = var2[var1];
 889:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ActionBarPrimaryButton;
            var1 = var1.END_CALL;
            var28 = var3 !== var1;
            if(!var28) { _fun0001_ip = 958; continue _fun0001 }
 925:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ActionBarPrimaryButton;
            var1 = var1.END_CALL;
            var28 = var2[var1];
 958:
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var6 = var38.length;
            var5 = 0;
            var5 = var6 > var5;
            var6 = null;
            if(!var5) { _fun0001_ip = 1210; continue _fun0001 }
 987:
            var20 = _closure1_slot11;
            var11 = _closure1_slot3;
            var5 = {};
            var37 = var16.container;
            var5['style'] = var37;
            var37 = var38.map;
            var26 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 26;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.GameConsoleAccountItem;
                var2 = {};
                var7 = _closure2_slot2;
                var2['nuxVisible'] = var7;
                var2['account'] = var1;
                var7 = _closure2_slot0;
                var2['channel'] = var7;
                var6 = _closure2_slot1;
                var2['connected'] = var6;
                var1 = var1.type;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var37 = var37.bind(var38)(var26);
            var26 = new Array(2);
            var26[0] = var37;
            if(var35) { _fun0001_ip = 1042; continue _fun0001 }
 1034:
            var35 = null;
            if(!var36) { _fun0001_ip = 1196; continue _fun0001 }
 1042:
            var38 = _closure1_slot11;
            var37 = _closure1_slot12;
            var36 = {};
            var42 = _closure1_slot10;
            var41 = _closure1_slot4;
            var39 = {};
            var40 = var16.sparkle1;
            var39['style'] = var40;
            var44 = _closure1_slot1;
            var45 = _closure1_slot2;
            var40 = 27;
            var40 = var45[var40];
            var40 = var44.bind(var4)(var40);
            var39['source'] = var40;
            var40 = var42.bind(var4)(var41, var39);
            var39 = new Array(3);
            var39[0] = var40;
            var40 = {};
            var43 = var16.sparkle2;
            var40['style'] = var43;
            var43 = 28;
            var43 = var45[var43];
            var43 = var44.bind(var4)(var43);
            var40['source'] = var43;
            var40 = var42.bind(var4)(var41, var40);
            var39[1] = var40;
            var40 = {};
            var43 = var16.sparkle3;
            var40['style'] = var43;
            var43 = 29;
            var43 = var45[var43];
            var43 = var44.bind(var4)(var43);
            var40['source'] = var43;
            var40 = var42.bind(var4)(var41, var40);
            var39[2] = var40;
            var36['children'] = var39;
            var35 = var38.bind(var4)(var37, var36);
 1196:
            var26[1] = var35;
            var5['children'] = var26;
            var6 = var20.bind(var4)(var11, var5);
 1210:
            var5 = new Array(6);
            var5[0] = var6;
            var6 = var14;
            if(!var6) { _fun0001_ip = 1291; continue _fun0001 }
 1224:
            var26 = _closure1_slot10;
            var20 = _closure1_slot3;
            var11 = {};
            var35 = var16.container;
            var11['style'] = var35;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 26;
            var35 = var37[var35];
            var35 = var36.bind(var4)(var35);
            var36 = var35.SoundboardButton;
            var35 = {};
            var35['channel'] = var13;
            var35 = var26.bind(var4)(var36, var35);
            var11['children'] = var35;
            var6 = var26.bind(var4)(var20, var11);
 1291:
            var5[1] = var6;
            var6 = null;
            if(!var34) { _fun0001_ip = 1374; continue _fun0001 }
 1300:
            var26 = _closure1_slot10;
            var20 = _closure1_slot3;
            var11 = {};
            var35 = var16.container;
            var11['style'] = var35;
            if(!var34) { _fun0001_ip = 1364; continue _fun0001 }
 1322:
            var37 = _closure1_slot10;
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var35 = 26;
            var35 = var38[var35];
            var35 = var36.bind(var4)(var35);
            var36 = var35.ScreenshareButton;
            var35 = {};
            var35['channel'] = var13;
            var34 = var37.bind(var4)(var36, var35);
 1364:
            var11['children'] = var34;
            var6 = var26.bind(var4)(var20, var11);
 1374:
            var5[2] = var6;
            var26 = _closure1_slot11;
            var11 = _closure1_slot3;
            var6 = {};
            var20 = var16.container;
            var6['style'] = var20;
            var20 = null;
            if(!var33) { _fun0001_ip = 1448; continue _fun0001 }
 1402:
            if(var32) { _fun0001_ip = 1410; continue _fun0001 }
 1405:
            var20 = null;
            if(var27) { _fun0001_ip = 1448; continue _fun0001 }
 1410:
            var33 = _closure1_slot10;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = 26;
            var27 = var34[var27];
            var27 = var32.bind(var4)(var27);
            var32 = var27.ToggleShowPip;
            var27 = {};
            var20 = var33.bind(var4)(var32, var27);
 1448:
            var27 = new Array(9);
            var27[0] = var20;
            var20 = null;
            if(!var28) { _fun0001_ip = 1503; continue _fun0001 }
 1461:
            var33 = _closure1_slot10;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 26;
            var28 = var34[var28];
            var28 = var32.bind(var4)(var28);
            var32 = var28.DisconnectCallButton;
            var28 = {};
            var28['channel'] = var13;
            var20 = var33.bind(var4)(var32, var28);
 1503:
            var27[1] = var20;
            var33 = _closure1_slot10;
            var32 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 26;
            var34 = var28[var20];
            var34 = var32.bind(var4)(var34);
            var35 = var34.StreamVolumeItem;
            var34 = {};
            var34 = var33.bind(var4)(var35, var34);
            var27[2] = var34;
            var28 = var28[var20];
            var28 = var32.bind(var4)(var28);
            var32 = var28.DeafenButton;
            var28 = {};
            var28['channel'] = var13;
            var28 = var33.bind(var4)(var32, var28);
            var27[3] = var28;
            var28 = null;
            if(!var30) { _fun0001_ip = 1634; continue _fun0001 }
 1585:
            var33 = _closure1_slot10;
            var32 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var20];
            var30 = var32.bind(var4)(var30);
            var32 = var30.AudioRouteButton;
            var30 = {};
            var34 = var13.id;
            var30['channelId'] = var34;
            var30['isConnectedToVoiceChannel'] = var14;
            var28 = var33.bind(var4)(var32, var30);
 1634:
            var27[4] = var28;
            var28 = null;
            if(!var9) { _fun0001_ip = 1692; continue _fun0001 }
 1643:
            var28 = null;
            if(var29) { _fun0001_ip = 1692; continue _fun0001 }
 1648:
            var28 = null;
            if(!var14) { _fun0001_ip = 1692; continue _fun0001 }
 1653:
            var32 = _closure1_slot10;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var29 = var29[var20];
            var29 = var30.bind(var4)(var29);
            var30 = var29.InviteButton;
            var29 = {};
            var29['channel'] = var13;
            var28 = var32.bind(var4)(var30, var29);
 1692:
            var27[5] = var28;
            var30 = _closure1_slot10;
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var32 = var28[var20];
            var32 = var29.bind(var4)(var32);
            var33 = var32.ToggleNoiseCancellation;
            var32 = {};
            var32 = var30.bind(var4)(var33, var32);
            var27[6] = var32;
            var32 = var28[var20];
            var32 = var29.bind(var4)(var32);
            var33 = var32.HideNonVideoParticipants;
            var32 = {};
            var32['channel'] = var13;
            var32 = var30.bind(var4)(var33, var32);
            var27[7] = var32;
            var28 = var28[var20];
            var28 = var29.bind(var4)(var28);
            var29 = var28.HideSelfVideo;
            var28 = {};
            var28['channel'] = var13;
            var28['mediaEngineContext'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var27[8] = var28;
            var6['children'] = var27;
            var6 = var26.bind(var4)(var11, var6);
            var5[3] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 2035; continue _fun0001 }
 1824:
            var6 = null;
            if(!var14) { _fun0001_ip = 2035; continue _fun0001 }
 1832:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var25];
            var7 = var11.bind(var4)(var7);
            var7 = var7.EmbeddedActivityLaunchability;
            var7 = var7.CAN_LAUNCH;
            var6 = null;
            if(!(var8 === var7)) { _fun0001_ip = 2035; continue _fun0001 }
 1870:
            var11 = _closure1_slot11;
            var8 = _closure1_slot3;
            var7 = {};
            var25 = var16.container;
            var7['style'] = var25;
            var25 = null;
            if(!var12) { _fun0001_ip = 1929; continue _fun0001 }
 1894:
            var27 = _closure1_slot10;
            var26 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var20];
            var12 = var26.bind(var4)(var12);
            var26 = var12.LeaveActivitiesButton;
            var12 = {};
            var25 = var27.bind(var4)(var26, var12);
 1929:
            var12 = new Array(3);
            var12[0] = var25;
            var25 = null;
            if(!var18) { _fun0001_ip = 1977; continue _fun0001 }
 1942:
            var28 = _closure1_slot10;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var20];
            var26 = var27.bind(var4)(var26);
            var27 = var26.ShareActivityLogsButton;
            var26 = {};
            var25 = var28.bind(var4)(var27, var26);
 1977:
            var12[1] = var25;
            var25 = null;
            if(!var18) { _fun0001_ip = 2021; continue _fun0001 }
 1986:
            var28 = _closure1_slot10;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var20];
            var26 = var27.bind(var4)(var26);
            var27 = var26.ToggleShowActivitiesDebugOverlay;
            var26 = {};
            var25 = var28.bind(var4)(var27, var26);
 2021:
            var12[2] = var25;
            var7['children'] = var12;
            var6 = var11.bind(var4)(var8, var7);
 2035:
            var5[4] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot3;
            var6 = {};
            var12 = var16.container;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var21 = var23 + var21;
            var12['marginBottom'] = var21;
            var11[1] = var12;
            var6['style'] = var11;
            var21 = _closure1_slot10;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var12.bind(var4)(var11);
            var12 = var11.VoiceSettingsButton;
            var11 = {};
            var11['onPress'] = var22;
            var12 = var21.bind(var4)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var21 = var17 != var24;
            var12 = null;
            if(!var21) { _fun0001_ip = 2176; continue _fun0001 }
 2136:
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var20];
            var21 = var22.bind(var4)(var21);
            var22 = var21.ReportStreamIssueButton;
            var21 = {};
            var21['stream'] = var24;
            var12 = var23.bind(var4)(var22, var21);
 2176:
            var11[1] = var12;
            var12 = null;
            if(!var18) { _fun0001_ip = 2230; continue _fun0001 }
 2185:
            var12 = null;
            if(!var14) { _fun0001_ip = 2230; continue _fun0001 }
 2190:
            var18 = _closure1_slot10;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var14 = var17.bind(var4)(var14);
            var17 = var14.RtcDebugPanelButton;
            var14 = {};
            var14['onOpenRTCDebugOverlay'] = var19;
            var12 = var18.bind(var4)(var17, var14);
 2230:
            var11[2] = var12;
            var6['children'] = var11;
            var6 = var8.bind(var4)(var7, var6);
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 2260:
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var12 = _closure1_slot10;
            var7 = _closure1_slot3;
            var5 = {};
            var6 = var16.container;
            var5['style'] = var6;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = 26;
            var6 = var8[var14];
            var6 = var11.bind(var4)(var6);
            var17 = var6.TransferCallButton;
            var6 = {};
            var6['disabled'] = var15;
            var18 = var13.id;
            var6['channelId'] = var18;
            var6 = var12.bind(var4)(var17, var6);
            var5['children'] = var6;
            var6 = var12.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var16 = var16.container;
            var6['style'] = var16;
            var8 = var8[var14];
            var8 = var11.bind(var4)(var8);
            var11 = var8.DeafenButton;
            var8 = {};
            var8['disabled'] = var15;
            var8['channel'] = var13;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            if(!var9) { _fun0001_ip = 2446; continue _fun0001 }
 2407:
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.InviteButton;
            var10 = {};
            var10['channel'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 2446:
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var1 = arg1;
        var12 = var1.channel;
        var _closure2_slot0 = var12;
        var11 = var1.onOpenRTCDebugOverlay;
        var8 = var1.onOpenVoiceSettings;
        var7 = var1.showGameConsoleSparkles;
        var9 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 30;
        var2 = var13[var1];
        var4 = undefined;
        var6 = var9.bind(var4)(var2);
        var2 = 31;
        var2 = var13[var2];
        var2 = var9.bind(var4)(var2);
        var2 = var2.CHANNEL_EXPANDED_CONTROLS;
        var2 = var6.bind(var4)(var2);
        var6 = var2.analyticsLocations;
        var2 = _closure1_slot0;
        var10 = 18;
        var10 = var13[var10];
        var15 = var2.bind(var4)(var10);
        var14 = var15.useStateFromStores;
        var16 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var16;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = var3.isPrivate;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 53; continue _fun0002 }
 20:
                var5 = _closure1_slot6;
                var4 = var5.can;
                var3 = _closure1_slot8;
                var3 = var3.CREATE_INSTANT_INVITE;
                var2 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2);
 53:
                return var1;
            }
        };
        var10 = var14.bind(var15)(var10, var3);
        var3 = 32;
        var3 = var13[var3];
        var14 = var9.bind(var4)(var3);
        var3 = var12.getGuildId;
        var9 = var3.bind(var12)();
        var3 = var12.id;
        var9 = var14.bind(var4)(var9, var3);
        var3 = _closure1_slot10;
        var1 = var13[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.AnalyticsLocationProvider;
        var1 = {};
        var1['value'] = var6;
        var6 = _closure1_slot14;
        var5 = {};
        var5['channel'] = var12;
        var5['onOpenRTCDebugOverlay'] = var11;
        var5['canInvite'] = var10;
        var5['isActivitiesEnabled'] = var9;
        var5['onOpenVoiceSettings'] = var8;
        var5['showGameConsoleSparkles'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelExpandedControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['ChannelExpandedControls'] = var2;
    return var1;
})();