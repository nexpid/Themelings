// app/modules/activities/native/EmbeddedActivityView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var6 = function useBaseActivityView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.orientationLockState;
            var _closure2_slot0 = var11;
            var8 = var2.showLoadingIndicator;
            var _closure2_slot1 = var8;
            var6 = var2.setShowLoadingStateForLockingOrientation;
            var _closure2_slot2 = var6;
            var14 = var2.application;
            var _closure2_slot3 = var14;
            var7 = var2.setOrientationLockState;
            var _closure2_slot4 = var7;
            var10 = undefined;
            var _closure2_slot7 = var10;
            var _closure2_slot8 = var10;
            var _closure2_slot9 = var10;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var18 = false;
            var3 = var2.bind(var3)(var18);
            var2 = _closure1_slot3;
            var17 = 2;
            var2 = var2.bind(var10)(var3, var17);
            var13 = 0;
            var4 = var2[var13];
            var _closure2_slot5 = var4;
            var12 = 1;
            var3 = var2[var12];
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 8;
            var2 = var15[var2];
            var9 = var9.bind(var10)(var2);
            var2 = var9.getDefaultOrientationLockState;
            var15 = var2.bind(var9)(var14);
            var _closure2_slot6 = var15;
            var2 = null;
            var2 = var2 == var14;
            var9 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var14.id;
case 2:
            var16 = _closure1_slot4;
            var2 = var16.useState;
            var16 = var2.bind(var16)(var18);
            var2 = _closure1_slot3;
            var2 = var2.bind(var10)(var16, var17);
            var13 = var2[var13];
            _closure2_slot7 = var13;
            var2 = var2[var12];
            _closure2_slot8 = var2;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 9;
            var2 = var16[var2];
            var2 = var12.bind(var10)(var2);
            var2 = var2.bind(var10)();
            var10 = var2.width;
            var2 = var2.height;
            var2 = var10 > var2;
            _closure2_slot9 = var2;
            var17 = _closure1_slot4;
            var16 = var17.useLayoutEffect;
            var12 = new Array(1);
            var12[0] = var2;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = _closure1_slot8;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var2.PORTRAIT;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var5 = var2.LANDSCAPE;
case 6:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
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
            var10 = var16.bind(var17)(var10, var12);
            var16 = _closure1_slot4;
            var12 = var16.useLayoutEffect;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var12.bind(var16)(var9, var10);
            var12 = _closure1_slot4;
            var10 = var12.useLayoutEffect;
            var9 = new Array(7);
            var9[0] = var15;
            var9[1] = var14;
            var9[2] = var11;
            var9[3] = var2;
            var9[4] = var13;
            var9[5] = var6;
            var9[6] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot6;
                    var2 = var5.bind(var4)(var3, var2);
                    if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 10:
                    var3 = _closure2_slot2;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 11; continue _fun0003;
case 7:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
case 11:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var10.bind(var12)(var7, var9);
            var10 = _closure1_slot4;
            var9 = var10.useLayoutEffect;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var2;
            var7[2] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var1)(var4, var3);
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure2_slot2;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var7);
            var7 = _closure1_slot4;
            var6 = var7.useLayoutEffect;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var4;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 8:
                    var2 = _closure2_slot5;
case 16:
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 5:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['isResetting'] = var4;
            var1['setIsResetting'] = var3;
            var1['isLandscape'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var6;
    var5 = function ActivityViewLoadingIndicator() {
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.loadingContainer;
        var1['style'] = var6;
        var5 = _closure1_slot14;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = function BaseActivityView(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var7 = var2.children;
            var10 = var2.wakeLockKey;
            var1 = var2.showLoadingIndicator;
            var2 = var2.isResetting;
            if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var1 = null;
            if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var5 = _closure1_slot12;
            var4 = _closure1_slot11;
            var3 = {};
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var6 = var6[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var6);
            var6 = {};
            var6['wakeLockKey'] = var10;
            var8 = var9.bind(var2)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
case 20:
            _fun0006_ip = 22; continue _fun0006;
case 18:
            var1 = _closure1_slot15;
case 22:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = global;
    var12 = var1.Object;
    var10 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var10 = var9[var7];
    var7 = metroImportAll;
    var10 = var7.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var12 = var7.ActivityIndicator;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.ActivityLayoutMode;
    var _closure1_slot7 = var11;
    var7 = var7.ActivityScreenOrientation;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.jsx;
    var _closure1_slot10 = var11;
    var13 = var7.Fragment;
    var _closure1_slot11 = var13;
    var7 = var7.jsxs;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var9[var7];
    var14 = var8.bind(var1)(var7);
    var13 = var14.createStyles;
    var7 = {};
    var15 = {'flex': 1, 'justifyContent': 'center'};
    var7['loadingContainer'] = var15;
    var7 = var13.bind(var14)(var7);
    var _closure1_slot13 = var7;
    var7 = {};
    var13 = 'large';
    var7['size'] = var13;
    var7 = var11.bind(var1)(var12, var7);
    var _closure1_slot14 = var7;
    var7 = {};
    var7 = var11.bind(var1)(var5, var7);
    var _closure1_slot15 = var7;
    var7 = var10.memo;
    var2 = function EmbeddedActivityViewInner(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var21 = var1.channel;
            var16 = var1.layoutMode;
            var _closure2_slot0 = var16;
            var10 = var1.portraitSafeAreasConfig;
            var12 = var1.landscapeSafeAreasConfig;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot6;
            var2 = var1.getCurrentEmbeddedActivity;
            var19 = var2.bind(var1)();
            var _closure2_slot1 = var19;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var17 = var2.bind(var5)();
            var _closure2_slot2 = var17;
            var3 = _closure1_slot0;
            var2 = 14;
            var2 = var7[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var17;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 15; continue _fun0008 }
case 23:
                    var4 = _closure1_slot6;
                    var3 = var4.getOrientationLockStateForApp;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 15:
                    return var1;
                }
            };
            var4 = var4.bind(var8)(var3, var1, var2);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = true;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var5)(var3, var1);
            var1 = 0;
            var1 = var3[var1];
            var2 = 1;
            var3 = var3[var2];
            var2 = {};
            var2['currentEmbeddedActivity'] = var19;
            var2['channel'] = var21;
            var8 = var2.currentEmbeddedActivity;
            var11 = var2.channel;
            var18 = null;
            if(!(var18 != var8)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var2 = {};
            var13 = var8.compositeInstanceId;
            if(!(var18 == var13)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var13 = var8.launchId;
case 26:
            var2['instance_id'] = var13;
            var14 = var8.location;
            var15 = var18 == var14;
            var13 = undefined;
            if(var15) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var13 = var14.id;
case 28:
            var2['location_id'] = var13;
            var13 = var8.launchId;
            var2['launch_id'] = var13;
            var13 = var8.proxyTicket;
            if(!(var18 != var13)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var8 = var8.proxyTicket;
            var2['discord_proxy_ticket'] = var8;
case 30:
            var8 = var18 != var11;
            if(!var8) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var13 = var11.id;
            var8 = var18 != var13;
case 32:
            if(!var8) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var14 = var11.id;
            var13 = '';
            var8 = var13 !== var14;
case 34:
            if(!var8) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var8 = var11.id;
            var2['channel_id'] = var8;
case 36:
            var13 = var18 == var11;
            var8 = undefined;
            if(var13) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var8 = var11.guild_id;
case 38:
            var8 = var18 != var8;
            if(!var8) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var13 = var18 == var11;
            var14 = undefined;
            if(var13) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var14 = var11.guild_id;
case 42:
            var13 = '';
            var8 = var13 !== var14;
case 40:
            var15 = var2;
            if(!var8) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var13 = var18 == var11;
            var8 = undefined;
            if(var13) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var8 = var11.guild_id;
case 46:
            var2['guild_id'] = var8;
            var15 = var2;
            _fun0007_ip = 44; continue _fun0007;
case 24:
            var2 = {};
            var8 = '';
            var2['instance_id'] = var8;
            var15 = var2;
case 44:
            var2 = 15;
            var2 = var7[var2];
            var6 = var6.bind(var5)(var2);
            var2 = {};
            var2['connectedEmbeddedActivity'] = var19;
            var2 = var6.bind(var5)(var2);
            var8 = _closure1_slot4;
            var7 = var8.useLayoutEffect;
            var6 = new Array(2);
            var6[0] = var16;
            var6[1] = var19;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['layoutMode'] = var5;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationId;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var6);
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = new Array(2);
            var6[0] = var17;
            var6[1] = var19;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(var8) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var8 = _closure2_slot1;
                    var5 = var8.location;
case 50:
                    var2['location'] = var5;
                    var5 = _closure2_slot2;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                    var6 = _closure2_slot2;
                    var5 = var6.id;
case 52:
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var7.bind(var8)(var2, var6);
            var2 = var18 == var17;
            var11 = undefined;
            if(var2) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var11 = var17.id;
case 54:
            var7 = var18 == var19;
            if(var7) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var6 = var18 == var19;
            var2 = undefined;
            if(var6) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var2 = var19.launchId;
case 58:
            var7 = var18 == var2;
case 56:
            if(var7) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var7 = var1;
case 60:
            if(var7) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var7 = var18 == var11;
case 62:
            if(var7) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var7 = var18 == var17;
case 64:
            var2 = _closure1_slot16;
            var1 = {};
            var1['orientationLockState'] = var4;
            var1['showLoadingIndicator'] = var7;
            var1['setShowLoadingStateForLockingOrientation'] = var3;
            var1['application'] = var17;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.setOrientationLockState;
            var1['setOrientationLockState'] = var3;
            var1 = var2.bind(var5)(var1);
            var6 = var1.isResetting;
            var2 = var1.setIsResetting;
            _closure2_slot3 = var2;
            var13 = var1.isLandscape;
            var2 = var18 == var19;
            var1 = null;
            if(var2) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var2 = var18 == var11;
            var1 = null;
            if(var2) { _fun0007_ip = 66; continue _fun0007 }
case 68:
            var4 = _closure1_slot10;
            var3 = _closure1_slot17;
            var2 = {};
            var8 = 'EmbeddedActivities';
            var2['wakeLockKey'] = var8;
            var2['showLoadingIndicator'] = var7;
            var2['isResetting'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 17;
            var6 = var22[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var20 = function onActivityCrash() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = 0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onActivityCrash'] = var20;
            var6['applicationId'] = var11;
            var22 = var18 == var21;
            var20 = undefined;
            if(var22) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var20 = var21.id;
case 69:
            var6['channelId'] = var20;
            var22 = var18 == var21;
            var20 = undefined;
            if(var22) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var20 = var21.guild_id;
case 71:
            var6['guildId'] = var20;
            var20 = var19.url;
            var6['activityUrl'] = var20;
            var6['currentEmbeddedActivity'] = var19;
            var20 = var18 == var19;
            var18 = undefined;
            if(var20) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var18 = var19.compositeInstanceId;
case 73:
            var6['activitySessionId'] = var18;
            var6['queryParams'] = var15;
            var6['onLoadError'] = var14;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 18;
            var14 = var18[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.allowPopups;
            var14 = var14.bind(var15)(var17);
            var6['allowPopups'] = var14;
            var14 = 'origin';
            var6['referrerPolicy'] = var14;
            var14 = _closure1_slot7;
            var14 = var14.PIP;
            var14 = var16 === var14;
            if(var14) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var15 = _closure1_slot7;
            var15 = var15.GRID;
            var14 = var16 === var15;
case 75:
            var6['isPipOrGridMode'] = var14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 16;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
            var6['webViewKey'] = var14;
            if(!var13) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var10 = var12;
case 77:
            var6['safeAreasConfig'] = var10;
            var10 = _closure1_slot9;
            var9 = var10.has;
            var9 = var9.bind(var10)(var11);
            var9 = !var9;
            var6['ignoreSilentHardwareSwitch'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 66:
            return var1;
        }
    };
    var2 = var7.bind(var10)(var2);
    var7 = 19;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/native/EmbeddedActivityView.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var2;
    var3['useBaseActivityView'] = var6;
    var3['ActivityViewLoadingIndicator'] = var5;
    var3['BaseActivityView'] = var4;
    var3['EmbeddedActivityView'] = var2;
    return var1;
})();