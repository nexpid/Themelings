// app/modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function VoicePanelAnimatedActivityCardInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var27 = var1.applicationId;
            var _closure2_slot0 = var27;
            var29 = var1.sharedVisible;
            var _closure2_slot1 = var29;
            var14 = var1.layout;
            var5 = undefined;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var1 = _closure1_slot17;
            var15 = var1.bind(var5)();
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var23 = 0;
            var3 = var1.bind(var3)(var23);
            var1 = _closure1_slot3;
            var31 = 2;
            var1 = var1.bind(var5)(var3, var31);
            var20 = var1[var23];
            var28 = 1;
            var1 = var1[var28];
            var _closure2_slot2 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useContext;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 12;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var7.bind(var8)(var3);
            var18 = var3.channelId;
            var _closure2_slot3 = var18;
            var40 = var3.focused;
            var _closure2_slot4 = var40;
            var34 = var3.layoutManager;
            var _closure2_slot5 = var34;
            var38 = var3.mode;
            var _closure2_slot6 = var38;
            var32 = var3.windowDimensions;
            var _closure2_slot7 = var32;
            var16 = var3.hideControls;
            var _closure2_slot8 = var16;
            var21 = var3.controlsSpecs;
            var _closure2_slot9 = var21;
            var3 = 13;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var33 = var3.bind(var5)();
            var _closure2_slot10 = var33;
            var3 = _closure1_slot0;
            var12 = 14;
            var1 = var1[var12];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var6.bind(var7)(var3, var1);
            var _closure2_slot11 = var22;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var22;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot11;
                var1['channel'] = var2;
                var2 = 'channel';
                var1['type'] = var2;
                return var1;
            };
            var26 = var6.bind(var7)(var1, var3);
            var1 = null;
            var6 = var1 == var22;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var22.guild_id;
case 2:
            _closure2_slot12 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 15;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useActivityShelfItemData;
            var6 = var1 == var22;
            var9 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var22.guild_id;
case 4:
            var10 = var1 != var9;
            var6 = null;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var9;
case 6:
            var25 = var7.bind(var8)(var6, var27);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchShelf;
                var2 = {};
                var5 = _closure2_slot12;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 17;
            var3 = var10[var3];
            var6 = var13.bind(var5)(var3);
            var3 = new Array(1);
            var3[0] = var27;
            var6 = var6.bind(var5)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var28);
            var19 = var3[var23];
            _closure2_slot13 = var19;
            var9 = _closure1_slot0;
            var3 = var10[var12];
            var11 = var9.bind(var5)(var3);
            var8 = var11.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = new Array(1);
            var6[0] = var27;
            var3 = function() {
                var1 = {};
                var5 = _closure1_slot5;
                var3 = var5.getGridOrientationLockStateForApp;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['gridOrientationLockState'] = var3;
                var3 = _closure1_slot5;
                var2 = var3.getOrientationLockStateForApp;
                var2 = var2.bind(var3)(var4);
                var1['focusedOrientationLockState'] = var2;
                return var1;
            };
            var3 = var8.bind(var11)(var7, var3, var6);
            var36 = var3.gridOrientationLockState;
            _closure2_slot14 = var36;
            var30 = var3.focusedOrientationLockState;
            _closure2_slot15 = var30;
            var3 = 18;
            var3 = var10[var3];
            var3 = var13.bind(var5)(var3);
            var6 = var3.bind(var5)();
            var3 = var10[var12];
            var11 = var9.bind(var5)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getEmbeddedActivitiesForChannel;
                var1 = _closure2_slot3;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var4 = _closure2_slot13;
                        var1 = null;
                        var4 = var1 == var4;
                        var1 = undefined;
                        if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = _closure2_slot13;
                        var1 = var3.id;
case 8:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var11)(var7, var3);
            var8 = 19;
            var3 = var10[var8];
            var7 = var13.bind(var5)(var3);
            var3 = 20;
            var3 = var10[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.ACTIVITY_TILE;
            var3 = var7.bind(var5)(var3);
            var7 = var3.analyticsLocations;
            var3 = 21;
            var3 = var10[var3];
            var9 = var9.bind(var5)(var3);
            var3 = var9.useAnalyticsContext;
            var24 = var3.bind(var9)();
            var3 = var1 != var6;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var6.id;
            var10 = var1 == var19;
            var6 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var19.id;
case 12:
            var3 = var9 === var6;
case 10:
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var1 == var11;
            var6 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = var11.participants;
            var9 = var1 == var13;
            var6 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var10 = var13.find;
            var9 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var13)(var9);
case 16:
            var3 = var1 != var6;
case 14:
            _closure2_slot16 = var3;
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1 + 1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var10.bind(var13)(var6, var9);
            _closure2_slot17 = var35;
            var39 = _closure1_slot0;
            var37 = _closure1_slot2;
            var13 = 23;
            var6 = var37[var13];
            var17 = var39.bind(var5)(var6);
            var10 = var17.useAnimatedReaction;
            var9 = function X() {
                var1 = {};
                var4 = _closure2_slot1;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['visible'] = var3;
                var3 = _closure2_slot6;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['mode'] = var2;
                return var1;
            };
            var6 = {};
            var6['sharedVisible'] = var29;
            var6['mode'] = var38;
            var9['__closure'] = var6;
            var6 = 2072430391020.0;
            var9['__workletHash'] = var6;
            var6 = _closure1_slot18;
            var9['__initData'] = var6;
            var6 = function Q(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var2 = var1.visible;
                    var4 = var1.mode;
                    var1 = 1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var2 = null;
                    var1 = var2 != var5;
case 21:
                    if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var3 = var5.visible;
                    var2 = 0;
                    var1 = var2 === var3;
case 23:
                    if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var2 = _closure1_slot9;
                    var2 = var2.PIP;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var4 = var5.mode;
case 29:
                    var3 = _closure1_slot9;
                    var3 = var3.PIP;
                    var2 = var4 === var3;
case 27:
                    var1 = var2;
case 25:
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot17;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var41 = _closure1_slot9;
            var29['VoicePanelModes'] = var41;
            var37 = var37[var13];
            var37 = var39.bind(var5)(var37);
            var37 = var37.runOnJS;
            var29['runOnJS'] = var37;
            var29['incrementActivityKey'] = var35;
            var6['__closure'] = var29;
            var29 = 9732208421749.0;
            var6['__workletHash'] = var29;
            var29 = _closure1_slot19;
            var6['__initData'] = var29;
            var6 = var10.bind(var17)(var9, var6);
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var6 = false;
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var5)(var9, var31);
            var17 = var6[var23];
            _closure2_slot18 = var17;
            var39 = var6[var28];
            _closure2_slot19 = var39;
            var6 = var1 != var11;
            var41 = null;
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 24;
            var6 = var10[var6];
            var10 = var9.bind(var5)(var6);
            var9 = var10.getEmbeddedActivityParticipantId;
            var6 = {};
            var29 = var11.applicationId;
            var6['applicationId'] = var29;
            var29 = var11.compositeInstanceId;
            var6['instanceId'] = var29;
            var41 = var9.bind(var10)(var6);
case 33:
            _closure2_slot20 = var41;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var13];
            var37 = var10.bind(var5)(var9);
            var35 = var37.useAnimatedReaction;
            var29 = function ue() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot20;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 35:
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var4 == var3;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = var3.id;
case 36:
                    var3 = _closure2_slot20;
                    var1 = var4 === var3;
case 26:
                    if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot9;
                    var2 = var2.PANEL;
                    var1 = var3 === var2;
case 38:
                    return var1;
                }
            };
            var9 = {};
            var9['activityParticipantId'] = var41;
            var9['focused'] = var40;
            var9['mode'] = var38;
            var38 = _closure1_slot9;
            var9['VoicePanelModes'] = var38;
            var29['__closure'] = var9;
            var9 = 2833167890519.0;
            var29['__workletHash'] = var9;
            var9 = _closure1_slot20;
            var29['__initData'] = var9;
            var9 = function le(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0006_ip = 40; continue _fun0006 }
case 20:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var38 = {};
            var40 = var6[var13];
            var40 = var10.bind(var5)(var40);
            var40 = var40.runOnJS;
            var38['runOnJS'] = var40;
            var38['setIsActivityFocused'] = var39;
            var9['__closure'] = var38;
            var38 = 12291590020155.0;
            var9['__workletHash'] = var38;
            var38 = _closure1_slot21;
            var9['__initData'] = var38;
            var9 = var35.bind(var37)(var29, var9);
            var37 = _closure1_slot4;
            var35 = var37.useMemo;
            var29 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Tap;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = new Array(0);
            var9 = var35.bind(var37)(var29, var9);
            var37 = _closure1_slot4;
            var35 = var37.useCallback;
            var29 = new Array(2);
            var29[0] = var34;
            var29[1] = var27;
            var27 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg2;
                    var1 = arg3;
                    if(var1) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var5 = _closure2_slot5;
                    var4 = var5.setTargetAspectRatio;
                    var3 = _closure2_slot0;
                    var1 = 'square';
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0007_ip = 43; continue _fun0007;
case 41:
                    var3 = _closure1_slot14;
                    var3 = var3.LANDSCAPE;
                    if(!(var3 !== var2)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var3 = _closure1_slot14;
                    var3 = var3.PORTRAIT;
                    if(!(var3 !== var2)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var1 = _closure1_slot14;
                    var1 = var1.UNLOCKED;
                    if(!(var1 !== var2)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var1 = null;
                    if(!(var1 === var2)) { _fun0007_ip = 43; continue _fun0007 }
case 48:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var5 = arg1;
                    if(!var5) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var1 = 'landscape';
case 50:
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0007_ip = 43; continue _fun0007;
case 46:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0007_ip = 43; continue _fun0007;
case 44:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'landscape';
                    var1 = var3.bind(var4)(var2, var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var35.bind(var37)(var27, var29);
            _closure2_slot21 = var37;
            var38 = _closure1_slot4;
            var35 = var38.useLayoutEffect;
            var29 = new Array(4);
            var29[0] = var37;
            var29[1] = var32;
            var29[2] = var36;
            var29[3] = var3;
            var27 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getWindowDimensions;
                var2 = var2.bind(var3)();
                var3 = var2.width;
                var2 = var2.height;
                var5 = var3 > var2;
                var4 = _closure2_slot21;
                var3 = _closure2_slot14;
                var2 = _closure2_slot16;
                var2 = var4.bind(var1)(var5, var3, var2);
                return var1;
            };
            var27 = var35.bind(var38)(var27, var29);
            var35 = _closure1_slot4;
            var29 = var35.useState;
            var27 = var34.getDefaultTargetDimensions;
            var27 = var27.bind(var34)();
            var29 = var29.bind(var35)(var27);
            var27 = _closure1_slot3;
            var27 = var27.bind(var5)(var29, var31);
            var23 = var27[var23];
            var27 = var27[var28];
            _closure2_slot22 = var27;
            var31 = _closure1_slot4;
            var29 = var31.useCallback;
            var28 = new Array(2);
            var28[0] = var34;
            var28[1] = var27;
            var27 = function() {
                var3 = _closure2_slot22;
                var2 = _closure2_slot5;
                var1 = var2.getDefaultTargetDimensions;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var35 = var29.bind(var31)(var27, var28);
            _closure2_slot23 = var35;
            var27 = var6[var13];
            var31 = var10.bind(var5)(var27);
            var29 = var31.useAnimatedReaction;
            var28 = function pe() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = {};
            var27['windowDimensions'] = var32;
            var28['__closure'] = var27;
            var27 = 12220613662042.0;
            var28['__workletHash'] = var27;
            var27 = _closure1_slot22;
            var28['__initData'] = var27;
            var27 = function ye(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var5 = arg2;
                    var4 = var3.landscape;
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var2 = var5.landscape;
case 52:
                    if(!(var4 !== var2)) { _fun0008_ip = 54; continue _fun0008 }
case 8:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 23;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.runOnJS;
                    var4 = _closure2_slot21;
                    var5 = var5.bind(var6)(var4);
                    var4 = var3.landscape;
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot16;
                    var2 = var5.bind(var1)(var4, var3, var2);
case 54:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot23;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var34 = {};
            var38 = var6[var13];
            var38 = var10.bind(var5)(var38);
            var38 = var38.runOnJS;
            var34['runOnJS'] = var38;
            var34['handleTargetAspectRatioParams'] = var37;
            var34['gridOrientationLockState'] = var36;
            var34['hasJoined'] = var3;
            var34['updateNotJoinedActivityDimensions'] = var35;
            var27['__closure'] = var34;
            var34 = 13125606009235.0;
            var27['__workletHash'] = var34;
            var34 = _closure1_slot23;
            var27['__initData'] = var34;
            var27 = var29.bind(var31)(var28, var27);
            var27 = 27;
            var27 = var6[var27];
            var28 = var10.bind(var5)(var27);
            var27 = var28.getIsTabletActivitySurface;
            var31 = var27.bind(var28)();
            _closure2_slot24 = var31;
            var15 = var15.activityContainerBackground;
            var29 = var15.backgroundColor;
            _closure2_slot25 = var29;
            var13 = var6[var13];
            var27 = var10.bind(var5)(var13);
            var15 = var27.useAnimatedStyle;
            var13 = function Ce() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var4 = 0;
                    if(!var2) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
case 55:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var6 = var2.landscape;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var7 = var2.width;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.height;
                    var2 = _closure2_slot24;
                    if(!var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var10 = _closure2_slot15;
                    var8 = _closure1_slot14;
                    var8 = var8.LANDSCAPE;
                    var2 = var10 === var8;
case 57:
                    if(!var2) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var2 = !var6;
case 59:
                    var8 = _closure2_slot24;
                    if(!var8) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var11 = _closure2_slot15;
                    var10 = _closure1_slot14;
                    var10 = var10.PORTRAIT;
                    var8 = var11 === var10;
case 61:
                    if(!var8) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var8 = var6;
case 63:
                    if(var2) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var6 = 0;
                    var2 = 0;
                    if(!var8) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var8 = _closure1_slot12;
                    var8 = var3 * var8;
                    var10 = var7 - var8;
                    var8 = 2;
                    var2 = var10 / var8;
                    var6 = 0;
                    _fun0009_ip = 67; continue _fun0009;
case 65:
                    var1 = _closure1_slot12;
                    var1 = var7 * var1;
                    var8 = var3 - var1;
                    var1 = 2;
                    var6 = var8 / var1;
                    var2 = 0;
case 67:
                    var1 = {};
                    var10 = _closure2_slot18;
                    var8 = 1;
                    if(!var10) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var8 = 0;
case 69:
                    var1['flex'] = var8;
                    var8 = _closure2_slot25;
                    var1['backgroundColor'] = var8;
                    var1['paddingVertical'] = var6;
                    var1['paddingHorizontal'] = var2;
                    var8 = _closure2_slot18;
                    var2 = 'auto';
                    var6 = var2;
                    if(!var8) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var6 = var7;
case 71:
                    var1['width'] = var6;
                    var5 = _closure2_slot18;
                    if(!var5) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var2 = var3 - var4;
case 73:
                    var1['height'] = var2;
                    var2 = '100%';
                    var1['maxHeight'] = var2;
                    var1['maxWidth'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var34 = _closure1_slot8;
            var28['IS_IOS'] = var34;
            var28['animatedKeyboardHeight'] = var33;
            var28['windowDimensions'] = var32;
            var28['isTabletActivitySurface'] = var31;
            var28['focusedOrientationLockState'] = var30;
            var30 = _closure1_slot14;
            var28['OrientationLockState'] = var30;
            var30 = _closure1_slot12;
            var28['ACTIVITY_PORTRAIT_ASPECT_RATIO'] = var30;
            var28['isActivityFocused'] = var17;
            var28['backgroundColor'] = var29;
            var13['__closure'] = var28;
            var28 = 13392050824169.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot24;
            var13['__initData'] = var28;
            var13 = var15.bind(var27)(var13);
            var6 = var6[var12];
            var15 = var10.bind(var5)(var6);
            var12 = var15.useStateFromStores;
            var6 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getShowActivitiesDebugOverlay;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var12.bind(var15)(var10, var6);
            var12 = _closure1_slot4;
            var10 = var12.useMemo;
            var6 = new Array(3);
            var6[0] = var21;
            var6[1] = var17;
            var6[2] = var16;
            var4 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var2 = var1.Gesture;
                var1 = var2.Manual;
                var3 = var1.bind(var2)();
                var2 = var3.enabled;
                var1 = _closure2_slot18;
                var3 = var2.bind(var3)(var1);
                var2 = var3.onTouchesDown;
                var1 = function t(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg2;
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot9;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var4 = var2.mode;
                        var3 = _closure1_slot10;
                        var3 = var3.HIDDEN;
                        if(!(var4 !== var3)) { _fun0010_ip = 27; continue _fun0010 }
case 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 23;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.runOnJS;
                        var1 = _closure2_slot8;
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var4 = true;
                        var1['debounce'] = var4;
                        var1 = var2.bind(var3)(var1);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var7 = _closure2_slot9;
                var5['controlsSpecs'] = var7;
                var7 = _closure1_slot10;
                var5['VoicePanelControlsModes'] = var7;
                var7 = 23;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot8;
                var5['hideControls'] = var6;
                var1['__closure'] = var5;
                var5 = 14924492513532.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot25;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var12)(var4, var6);
            if(!(var1 != var22)) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var4 = _closure1_slot13;
            if(var17) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var21 = var4.GRID;
            _fun0001_ip = 79; continue _fun0001;
case 77:
            var21 = var4.FOCUSED;
case 79:
            if(var3) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            if(!(var1 != var25)) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var6 = _closure1_slot15;
            var4 = _closure1_slot0;
            var27 = _closure1_slot2;
            var3 = 25;
            var3 = var27[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var9;
            var16 = _closure1_slot15;
            var12 = _closure1_slot1;
            var9 = 33;
            var9 = var27[var9];
            var12 = var12.bind(var5)(var9);
            var9 = {};
            var9['context'] = var26;
            var26 = var22.guild_id;
            var9['guildId'] = var26;
            var9['activityItem'] = var25;
            var24 = var24.location;
            var9['locationObject'] = var24;
            var9['itemDimensions'] = var23;
            var23 = true;
            var9['disableBadges'] = var23;
            var9 = var16.bind(var5)(var12, var9);
            var3['children'] = var9;
            var6 = var6.bind(var5)(var4, var3);
            _fun0001_ip = 84; continue _fun0001;
case 82:
            var9 = _closure1_slot15;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 32;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['activity'] = var11;
            var3['application'] = var19;
            var6 = var9.bind(var5)(var4, var3);
case 84:
            _fun0001_ip = 85; continue _fun0001;
case 80:
            var9 = _closure1_slot15;
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 25;
            var3 = var16[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var10;
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var10 = 28;
            var10 = var16[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['layout'] = var14;
            var14 = 'none';
            if(!var17) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var14 = 'auto';
case 86:
            var10['pointerEvents'] = var14;
            var10['style'] = var13;
            var16 = _closure1_slot15;
            var14 = _closure1_slot1;
            var23 = _closure1_slot2;
            var13 = 29;
            var13 = var23[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channelId'] = var18;
            var23 = var1 == var19;
            var18 = undefined;
            if(var23) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var18 = var19.name;
case 88:
            var13['activityName'] = var18;
            var13['isActivityFocused'] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 30;
            var17 = var23[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['channel'] = var22;
            var17['layoutMode'] = var21;
            var17 = var19.bind(var5)(var18, var17, var20);
            var13['children'] = var17;
            var14 = var16.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var15) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var17 = _closure1_slot15;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 31;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var14 = var17.bind(var5)(var16, var15);
case 90:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var3['children'] = var10;
            var6 = var9.bind(var5)(var4, var3);
case 85:
            var4 = _closure1_slot15;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
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
    var8 = var4.IS_IOS;
    var _closure1_slot8 = var8;
    var4 = var4.VoicePanelModes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var8;
    var8 = var4.ActivityLayoutMode;
    var _closure1_slot13 = var8;
    var4 = var4.OrientationLockState;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 11;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var10['backgroundColor'] = var11;
    var4['activityContainerBackground'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isTabletActivitySurface,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isTabletActivitySurface&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}";
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelAnimatedActivityCard(arg1) {
        var4 = _closure1_slot15;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 34;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = _closure1_slot11;
        var6 = var6.DARK;
        var1['theme'] = var6;
        var7 = _closure1_slot15;
        var6 = _closure1_slot26;
        var5 = {};
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();