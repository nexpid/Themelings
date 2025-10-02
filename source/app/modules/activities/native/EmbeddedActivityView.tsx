// app/modules/activities/native/EmbeddedActivityView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityIndicator;
    var _closure1_slot5 = var9;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityLayoutMode;
    var _closure1_slot8 = var8;
    var8 = var4.ActivityScreenOrientation;
    var _closure1_slot9 = var8;
    var4 = var4.APPLICATIONS_WITH_NO_REFFERER;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.Fragment;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'justifyContent': 'center'};
    var4['loadingContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function EmbeddedActivityViewInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var23 = var1.channel;
            var18 = var1.layoutMode;
            var _closure2_slot0 = var18;
            var12 = var1.portraitSafeAreasConfig;
            var13 = var1.landscapeSafeAreasConfig;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot15;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot7;
            var1 = var2.getCurrentEmbeddedActivity;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var10 = false;
            var2 = var1.bind(var2)(var10);
            var1 = _closure1_slot3;
            var26 = 2;
            var1 = var1.bind(var4)(var2, var26);
            var7 = 0;
            var2 = var1[var7];
            var _closure2_slot1 = var2;
            var17 = 1;
            var1 = var1[var17];
            var _closure2_slot2 = var1;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var21 = var1.bind(var4)();
            var _closure2_slot3 = var21;
            var1 = null;
            var8 = var1 == var21;
            var20 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = var21.compositeInstanceId;
case 2:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 9;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var19 = var8.bind(var4)();
            _closure2_slot4 = var19;
            var9 = _closure1_slot0;
            var8 = 10;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getDefaultOrientationLockState;
            var24 = var8.bind(var9)(var19);
            _closure2_slot5 = var24;
            var9 = var1 == var19;
            var8 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var19.id;
case 4:
            var11 = _closure1_slot4;
            var9 = var11.useState;
            var9 = var9.bind(var11)(var10);
            var25 = _closure1_slot3;
            var9 = var25.bind(var4)(var9, var26);
            var14 = var9[var7];
            _closure2_slot6 = var14;
            var9 = var9[var17];
            _closure2_slot7 = var9;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var15 = 11;
            var15 = var10[var15];
            var15 = var9.bind(var4)(var15);
            var15 = var15.bind(var4)();
            var16 = var15.width;
            var15 = var15.height;
            var15 = var16 > var15;
            _closure2_slot8 = var15;
            var28 = var11.useLayoutEffect;
            var27 = new Array(1);
            var27[0] = var15;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = _closure1_slot9;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = var2.PORTRAIT;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var5 = var2.LANDSCAPE;
case 8:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
                    var2['type'] = var6;
                    var2['screenOrientation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var16 = var28.bind(var11)(var16, var27);
            var27 = var11.useLayoutEffect;
            var16 = new Array(1);
            var16[0] = var8;
            var8 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var27.bind(var11)(var8, var16);
            var16 = _closure1_slot0;
            var8 = 13;
            var8 = var10[var8];
            var29 = var16.bind(var4)(var8);
            var28 = var29.useStateFromStores;
            var8 = _closure1_slot7;
            var27 = new Array(1);
            var27[0] = var8;
            var16 = new Array(1);
            var16[0] = var19;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure1_slot7;
                    var3 = var4.getOrientationLockStateForApp;
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var8 = var28.bind(var29)(var27, var8, var16);
            _closure2_slot9 = var8;
            var27 = var11.useState;
            var16 = true;
            var16 = var27.bind(var11)(var16);
            var16 = var25.bind(var4)(var16, var26);
            var7 = var16[var7];
            var16 = var16[var17];
            _closure2_slot10 = var16;
            var17 = var11.useLayoutEffect;
            var16 = new Array(5);
            var16[0] = var24;
            var16[1] = var19;
            var16[2] = var8;
            var16[3] = var15;
            var16[4] = var14;
            var14 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var4)(var3, var2);
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 14:
                    var3 = _closure2_slot10;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 15; continue _fun0004;
case 11:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
case 15:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.setOrientationLockState;
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2, var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var17.bind(var11)(var14, var16);
            var16 = var11.useLayoutEffect;
            var14 = new Array(2);
            var14[0] = var8;
            var14[1] = var15;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = _closure2_slot8;
                    var3 = _closure2_slot9;
                    var3 = var5.bind(var1)(var4, var3);
                    if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 9:
                    var3 = _closure2_slot10;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 18:
                    return var1;
                }
            };
            var8 = var16.bind(var11)(var8, var14);
            var8 = 15;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['connectedEmbeddedActivity'] = var3;
            var8 = var9.bind(var4)(var8);
            var10 = var11.useLayoutEffect;
            var9 = new Array(2);
            var9[0] = var18;
            var9[1] = var21;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['layoutMode'] = var5;
                    var4 = _closure2_slot3;
                    var4 = var4.applicationId;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var9);
            var10 = var11.useCallback;
            var9 = new Array(2);
            var9[0] = var19;
            var9[1] = var21;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(var8) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var8 = _closure2_slot3;
                    var5 = var8.location;
case 21:
                    var2['location'] = var5;
                    var5 = _closure2_slot4;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var6 = _closure2_slot4;
                    var5 = var6.id;
case 23:
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var16 = var10.bind(var11)(var8, var9);
            var8 = var1 == var21;
            var14 = undefined;
            if(var8) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = var21.applicationId;
case 25:
            var3 = var1 == var3;
            if(var3) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = var1 == var21;
            var8 = undefined;
            if(var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = var21.launchId;
case 29:
            var3 = var1 == var8;
case 27:
            if(var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = var7;
case 31:
            if(var3) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = var1 == var14;
case 33:
            if(var3) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = var1 == var19;
case 35:
            _closure2_slot11 = var3;
            var10 = _closure1_slot4;
            var9 = var10.useLayoutEffect;
            var8 = new Array(2);
            var8[0] = var3;
            var8[1] = var2;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0008_ip = 37; continue _fun0008 }
case 12:
                    var2 = _closure2_slot1;
case 37:
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
case 7:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var8);
            if(var3) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var1 == var21;
            var3 = undefined;
            if(var7) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = var21.launchId;
case 41:
            if(!(var1 != var3)) { _fun0001_ip = 39; continue _fun0001 }
case 43:
            if(!(var1 != var19)) { _fun0001_ip = 39; continue _fun0001 }
case 44:
            if(var2) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var17 = {};
            var3 = var21.compositeInstanceId;
            if(!(var1 == var3)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var3 = var21.launchId;
case 47:
            var8 = var1 != var3;
            var7 = '';
            var2 = var7;
            if(!var8) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var2 = var3;
case 49:
            var17['instance_id'] = var2;
            var3 = var21.location;
            var8 = var1 == var3;
            var2 = undefined;
            if(var8) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var2 = var3.id;
case 51:
            var17['location_id'] = var2;
            var2 = var21.launchId;
            var17['launch_id'] = var2;
            var2 = var21.proxyTicket;
            if(!(var1 != var2)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var2 = var21.proxyTicket;
            var17['discord_proxy_ticket'] = var2;
case 53:
            var2 = var1 != var23;
            if(!var2) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var3 = var23.id;
            var2 = var1 != var3;
case 55:
            if(!var2) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var3 = var23.id;
            var2 = var7 !== var3;
case 57:
            if(!var2) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var2 = var23.id;
            var17['channel_id'] = var2;
case 59:
            var3 = var1 == var23;
            var2 = undefined;
            if(var3) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var2 = var23.guild_id;
case 61:
            var2 = var1 != var2;
            if(!var2) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var8 = var1 == var23;
            var3 = undefined;
            if(var8) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var3 = var23.guild_id;
case 65:
            var2 = var7 !== var3;
case 63:
            if(!var2) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var3 = var1 == var23;
            var2 = undefined;
            if(var3) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var2 = var23.guild_id;
case 69:
            var17['guild_id'] = var2;
case 67:
            var7 = _closure1_slot14;
            var3 = _closure1_slot13;
            var2 = {};
            var11 = _closure1_slot12;
            var10 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 17;
            var8 = var24[var8];
            var9 = var10.bind(var4)(var8);
            var8 = {};
            var25 = 'EmbeddedActivities';
            var8['wakeLockKey'] = var25;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 18;
            var9 = var24[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var22 = function onActivityCrash() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = 0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var9['onActivityCrash'] = var22;
            var9['applicationId'] = var14;
            var24 = var1 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var22 = var23.id;
case 71:
            var9['channelId'] = var22;
            var24 = var1 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var22 = var23.guild_id;
case 73:
            var9['guildId'] = var22;
            var22 = var21.url;
            var9['activityUrl'] = var22;
            var9['currentEmbeddedActivity'] = var21;
            var9['activitySessionId'] = var20;
            var9['queryParams'] = var17;
            var9['onLoadError'] = var16;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 19;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = var17.allowPopups;
            var16 = var16.bind(var17)(var19);
            var9['allowPopups'] = var16;
            var17 = _closure1_slot10;
            var16 = var17.has;
            var17 = var16.bind(var17)(var14);
            var16 = 'origin';
            if(!var17) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var16 = 'no-referrer';
case 75:
            var9['referrerPolicy'] = var16;
            var16 = _closure1_slot8;
            var16 = var16.PIP;
            var16 = var18 === var16;
            if(var16) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var17 = _closure1_slot8;
            var17 = var17.GRID;
            var16 = var18 === var17;
case 77:
            var9['isPipOrGridMode'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 16;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
            var9['webViewKey'] = var16;
            if(!var15) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var12 = var13;
case 79:
            var9['safeAreasConfig'] = var12;
            var13 = _closure1_slot11;
            var12 = var13.has;
            var12 = var12.bind(var13)(var14);
            var12 = !var12;
            var9['ignoreSilentHardwareSwitch'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var2['children'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 45:
            return var1;
case 39:
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var6.loadingContainer;
            var1['style'] = var6;
            var6 = _closure1_slot5;
            var5 = {};
            var7 = 'large';
            var5['size'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/EmbeddedActivityView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['EmbeddedActivityView'] = var2;
    return var1;
})();