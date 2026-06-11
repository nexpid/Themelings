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
            var26 = var1.applicationId;
            var _closure2_slot0 = var26;
            var28 = var1.sharedVisible;
            var _closure2_slot1 = var28;
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
            var18 = var1.bind(var5)();
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var22 = 0;
            var3 = var1.bind(var3)(var22);
            var1 = _closure1_slot3;
            var30 = 2;
            var1 = var1.bind(var5)(var3, var30);
            var17 = var1[var22];
            var27 = 1;
            var1 = var1[var27];
            var _closure2_slot2 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useContext;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 12;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var7.bind(var8)(var3);
            var7 = var3.channelId;
            var _closure2_slot3 = var7;
            var39 = var3.focused;
            var _closure2_slot4 = var39;
            var33 = var3.layoutManager;
            var _closure2_slot5 = var33;
            var37 = var3.mode;
            var _closure2_slot6 = var37;
            var31 = var3.windowDimensions;
            var _closure2_slot7 = var31;
            var20 = var3.hideControls;
            var _closure2_slot8 = var20;
            var21 = var3.controlsSpecs;
            var _closure2_slot9 = var21;
            var3 = 13;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var32 = var3.bind(var5)();
            var _closure2_slot10 = var32;
            var3 = _closure1_slot0;
            var15 = 14;
            var1 = var1[var15];
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
            var19 = var6.bind(var7)(var3, var1);
            var _closure2_slot11 = var19;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot11;
                var1['channel'] = var2;
                var2 = 'channel';
                var1['type'] = var2;
                return var1;
            };
            var25 = var6.bind(var7)(var1, var3);
            var1 = null;
            var6 = var1 == var19;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var19.guild_id;
case 2:
            _closure2_slot12 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 15;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useActivityShelfItemData;
            var6 = var1 == var19;
            var9 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var19.guild_id;
case 4:
            var10 = var1 != var9;
            var6 = null;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var9;
case 6:
            var24 = var7.bind(var8)(var6, var26);
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
            var3[0] = var26;
            var6 = var6.bind(var5)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var27);
            var11 = var3[var22];
            _closure2_slot13 = var11;
            var9 = _closure1_slot0;
            var3 = var10[var15];
            var12 = var9.bind(var5)(var3);
            var8 = var12.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = new Array(1);
            var6[0] = var26;
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
            var3 = var8.bind(var12)(var7, var3, var6);
            var35 = var3.gridOrientationLockState;
            _closure2_slot14 = var35;
            var29 = var3.focusedOrientationLockState;
            _closure2_slot15 = var29;
            var3 = 18;
            var3 = var10[var3];
            var3 = var13.bind(var5)(var3);
            var6 = var3.bind(var5)();
            var3 = var10[var15];
            var12 = var9.bind(var5)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = _closure1_slot5;
                    var5 = var6.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot3;
                    var6 = var5.bind(var6)(var1);
                    var5 = var6.find;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var3 = _closure2_slot13;
                            var1 = var3.id;
case 8:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var5.bind(var6)(var1);
                    var5 = null;
                    if(!(var5 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot5;
                    var4 = var5.getEmbeddedActivitiesForStartingChannel;
                    var3 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                            var3 = _closure2_slot13;
                            var1 = var3.id;
case 8:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var12 = var8.bind(var12)(var7, var3);
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
            var23 = var3.bind(var9)();
            var3 = var1 != var6;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var6.id;
            var10 = var1 == var11;
            var6 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var11.id;
case 14:
            var3 = var9 === var6;
case 12:
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var1 == var12;
            var6 = undefined;
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = var12.participants;
            var9 = var1 == var13;
            var6 = undefined;
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 20:
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
case 18:
            var3 = var1 != var6;
case 16:
            _closure2_slot16 = var3;
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1 + 1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var34 = var10.bind(var13)(var6, var9);
            _closure2_slot17 = var34;
            var38 = _closure1_slot0;
            var36 = _closure1_slot2;
            var13 = 23;
            var6 = var36[var13];
            var16 = var38.bind(var5)(var6);
            var10 = var16.useAnimatedReaction;
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
            var6['sharedVisible'] = var28;
            var6['mode'] = var37;
            var9['__closure'] = var6;
            var6 = 2072430391020.0;
            var9['__workletHash'] = var6;
            var6 = _closure1_slot18;
            var9['__initData'] = var6;
            var6 = function Q(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var2 = var1.visible;
                    var4 = var1.mode;
                    var1 = 1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var2 = null;
                    var1 = var2 != var5;
case 23:
                    if(!var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var3 = var5.visible;
                    var2 = 0;
                    var1 = var2 === var3;
case 25:
                    if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 11:
                    var2 = _closure1_slot9;
                    var2 = var2.PIP;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var4 = var5.mode;
case 30:
                    var3 = _closure1_slot9;
                    var3 = var3.PIP;
                    var2 = var4 === var3;
case 28:
                    var1 = var2;
case 27:
                    if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
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
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var40 = _closure1_slot9;
            var28['VoicePanelModes'] = var40;
            var36 = var36[var13];
            var36 = var38.bind(var5)(var36);
            var36 = var36.runOnJS;
            var28['runOnJS'] = var36;
            var28['incrementActivityKey'] = var34;
            var6['__closure'] = var28;
            var28 = 9732208421749.0;
            var6['__workletHash'] = var28;
            var28 = _closure1_slot19;
            var6['__initData'] = var28;
            var6 = var10.bind(var16)(var9, var6);
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var6 = false;
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var5)(var9, var30);
            var16 = var6[var22];
            _closure2_slot18 = var16;
            var38 = var6[var27];
            _closure2_slot19 = var38;
            var6 = var1 != var12;
            var40 = null;
            if(!var6) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 24;
            var6 = var10[var6];
            var10 = var9.bind(var5)(var6);
            var9 = var10.getEmbeddedActivityParticipantId;
            var6 = {};
            var28 = var12.applicationId;
            var6['applicationId'] = var28;
            var28 = var12.compositeInstanceId;
            var6['instanceId'] = var28;
            var40 = var9.bind(var10)(var6);
case 34:
            _closure2_slot20 = var40;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var13];
            var36 = var10.bind(var5)(var9);
            var34 = var36.useAnimatedReaction;
            var28 = function ue() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot20;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0007_ip = 11; continue _fun0007 }
case 36:
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var4 == var3;
                    var4 = undefined;
                    if(var5) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var4 = var3.id;
case 37:
                    var3 = _closure2_slot20;
                    var1 = var4 === var3;
case 11:
                    if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot9;
                    var2 = var2.PANEL;
                    var1 = var3 === var2;
case 39:
                    return var1;
                }
            };
            var9 = {};
            var9['activityParticipantId'] = var40;
            var9['focused'] = var39;
            var9['mode'] = var37;
            var37 = _closure1_slot9;
            var9['VoicePanelModes'] = var37;
            var28['__closure'] = var9;
            var9 = 2833167890519.0;
            var28['__workletHash'] = var9;
            var9 = _closure1_slot20;
            var28['__initData'] = var9;
            var9 = function le(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0008_ip = 41; continue _fun0008 }
case 22:
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
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = {};
            var39 = var6[var13];
            var39 = var10.bind(var5)(var39);
            var39 = var39.runOnJS;
            var37['runOnJS'] = var39;
            var37['setIsActivityFocused'] = var38;
            var9['__closure'] = var37;
            var37 = 12291590020155.0;
            var9['__workletHash'] = var37;
            var37 = _closure1_slot21;
            var9['__initData'] = var37;
            var9 = var34.bind(var36)(var28, var9);
            var36 = _closure1_slot4;
            var34 = var36.useMemo;
            var28 = function() {
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
            var9 = var34.bind(var36)(var28, var9);
            var36 = _closure1_slot4;
            var34 = var36.useCallback;
            var28 = new Array(2);
            var28[0] = var33;
            var28[1] = var26;
            var26 = function(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg2;
                    var1 = arg3;
                    if(var1) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var5 = _closure2_slot5;
                    var4 = var5.setTargetAspectRatio;
                    var3 = _closure2_slot0;
                    var1 = 'square';
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0009_ip = 44; continue _fun0009;
case 42:
                    var3 = _closure1_slot14;
                    var3 = var3.LANDSCAPE;
                    if(!(var3 !== var2)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var3 = _closure1_slot14;
                    var3 = var3.PORTRAIT;
                    if(!(var3 !== var2)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var1 = _closure1_slot14;
                    var1 = var1.UNLOCKED;
                    if(!(var1 !== var2)) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var1 = null;
                    if(!(var1 === var2)) { _fun0009_ip = 44; continue _fun0009 }
case 49:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var5 = arg1;
                    if(!var5) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var1 = 'landscape';
case 51:
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0009_ip = 44; continue _fun0009;
case 47:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0009_ip = 44; continue _fun0009;
case 45:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'landscape';
                    var1 = var3.bind(var4)(var2, var1);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var36 = var34.bind(var36)(var26, var28);
            _closure2_slot21 = var36;
            var37 = _closure1_slot4;
            var34 = var37.useLayoutEffect;
            var28 = new Array(4);
            var28[0] = var36;
            var28[1] = var31;
            var28[2] = var35;
            var28[3] = var3;
            var26 = function() {
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
            var26 = var34.bind(var37)(var26, var28);
            var34 = _closure1_slot4;
            var28 = var34.useState;
            var26 = var33.getDefaultTargetDimensions;
            var26 = var26.bind(var33)();
            var28 = var28.bind(var34)(var26);
            var26 = _closure1_slot3;
            var26 = var26.bind(var5)(var28, var30);
            var22 = var26[var22];
            var26 = var26[var27];
            _closure2_slot22 = var26;
            var30 = _closure1_slot4;
            var28 = var30.useCallback;
            var27 = new Array(2);
            var27[0] = var33;
            var27[1] = var26;
            var26 = function() {
                var3 = _closure2_slot22;
                var2 = _closure2_slot5;
                var1 = var2.getDefaultTargetDimensions;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var34 = var28.bind(var30)(var26, var27);
            _closure2_slot23 = var34;
            var26 = var6[var13];
            var30 = var10.bind(var5)(var26);
            var28 = var30.useAnimatedReaction;
            var27 = function ye() {
                var2 = _closure2_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var26 = {};
            var26['windowDimensions'] = var31;
            var27['__closure'] = var26;
            var26 = 12220613662042.0;
            var27['__workletHash'] = var26;
            var26 = _closure1_slot22;
            var27['__initData'] = var26;
            var26 = function pe(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var5 = arg2;
                    var4 = var3.landscape;
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var2 = var5.landscape;
case 53:
                    if(!(var4 !== var2)) { _fun0010_ip = 55; continue _fun0010 }
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
case 55:
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
            var33 = {};
            var37 = var6[var13];
            var37 = var10.bind(var5)(var37);
            var37 = var37.runOnJS;
            var33['runOnJS'] = var37;
            var33['handleTargetAspectRatioParams'] = var36;
            var33['gridOrientationLockState'] = var35;
            var33['hasJoined'] = var3;
            var33['updateNotJoinedActivityDimensions'] = var34;
            var26['__closure'] = var33;
            var33 = 13125606009235.0;
            var26['__workletHash'] = var33;
            var33 = _closure1_slot23;
            var26['__initData'] = var33;
            var26 = var28.bind(var30)(var27, var26);
            var26 = 27;
            var26 = var6[var26];
            var27 = var10.bind(var5)(var26);
            var26 = var27.getIsTabletActivitySurface;
            var30 = var26.bind(var27)();
            _closure2_slot24 = var30;
            var18 = var18.activityContainerBackground;
            var28 = var18.backgroundColor;
            _closure2_slot25 = var28;
            var13 = var6[var13];
            var26 = var10.bind(var5)(var13);
            var18 = var26.useAnimatedStyle;
            var13 = function Ce() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var4 = 0;
                    if(!var2) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
case 56:
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
                    if(!var2) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                    var10 = _closure2_slot15;
                    var8 = _closure1_slot14;
                    var8 = var8.LANDSCAPE;
                    var2 = var10 === var8;
case 58:
                    if(!var2) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var2 = !var6;
case 60:
                    var8 = _closure2_slot24;
                    if(!var8) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var11 = _closure2_slot15;
                    var10 = _closure1_slot14;
                    var10 = var10.PORTRAIT;
                    var8 = var11 === var10;
case 62:
                    if(!var8) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                    var8 = var6;
case 64:
                    if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var6 = 0;
                    var2 = 0;
                    if(!var8) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var8 = _closure1_slot12;
                    var8 = var3 * var8;
                    var10 = var7 - var8;
                    var8 = 2;
                    var2 = var10 / var8;
                    var6 = 0;
                    _fun0011_ip = 68; continue _fun0011;
case 66:
                    var1 = _closure1_slot12;
                    var1 = var7 * var1;
                    var8 = var3 - var1;
                    var1 = 2;
                    var6 = var8 / var1;
                    var2 = 0;
case 68:
                    var1 = {};
                    var10 = _closure2_slot18;
                    var8 = 1;
                    if(!var10) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var8 = 0;
case 70:
                    var1['flex'] = var8;
                    var8 = _closure2_slot25;
                    var1['backgroundColor'] = var8;
                    var1['paddingVertical'] = var6;
                    var1['paddingHorizontal'] = var2;
                    var8 = _closure2_slot18;
                    var2 = 'auto';
                    var6 = var2;
                    if(!var8) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var6 = var7;
case 72:
                    var1['width'] = var6;
                    var5 = _closure2_slot18;
                    if(!var5) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                    var2 = var3 - var4;
case 74:
                    var1['height'] = var2;
                    var2 = '100%';
                    var1['maxHeight'] = var2;
                    var1['maxWidth'] = var2;
                    return var1;
                }
            };
            var27 = {};
            var33 = _closure1_slot8;
            var27['IS_IOS'] = var33;
            var27['animatedKeyboardHeight'] = var32;
            var27['windowDimensions'] = var31;
            var27['isTabletActivitySurface'] = var30;
            var27['focusedOrientationLockState'] = var29;
            var29 = _closure1_slot14;
            var27['OrientationLockState'] = var29;
            var29 = _closure1_slot12;
            var27['ACTIVITY_PORTRAIT_ASPECT_RATIO'] = var29;
            var27['isActivityFocused'] = var16;
            var27['backgroundColor'] = var28;
            var13['__closure'] = var27;
            var27 = 13392050824169.0;
            var13['__workletHash'] = var27;
            var27 = _closure1_slot24;
            var13['__initData'] = var27;
            var13 = var18.bind(var26)(var13);
            var6 = var6[var15];
            var18 = var10.bind(var5)(var6);
            var15 = var18.useStateFromStores;
            var6 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getShowActivitiesDebugOverlay;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var15.bind(var18)(var10, var6);
            var18 = _closure1_slot4;
            var10 = var18.useMemo;
            var6 = new Array(3);
            var6[0] = var21;
            var6[1] = var16;
            var6[2] = var20;
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
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                        if(!(var4 !== var3)) { _fun0012_ip = 28; continue _fun0012 }
case 11:
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
case 28:
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
            var10 = var10.bind(var18)(var4, var6);
            if(!(var1 != var19)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var4 = _closure1_slot13;
            if(var16) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var18 = var4.GRID;
            _fun0001_ip = 80; continue _fun0001;
case 78:
            var18 = var4.FOCUSED;
case 80:
            if(var3) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            if(!(var1 != var24)) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var6 = _closure1_slot15;
            var4 = _closure1_slot0;
            var26 = _closure1_slot2;
            var3 = 25;
            var3 = var26[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var9;
            var21 = _closure1_slot15;
            var20 = _closure1_slot1;
            var9 = 32;
            var9 = var26[var9];
            var20 = var20.bind(var5)(var9);
            var9 = {};
            var9['context'] = var25;
            var25 = var19.guild_id;
            var9['guildId'] = var25;
            var9['activityItem'] = var24;
            var23 = var23.location;
            var9['locationObject'] = var23;
            var9['itemDimensions'] = var22;
            var22 = true;
            var9['disableBadges'] = var22;
            var9 = var21.bind(var5)(var20, var9);
            var3['children'] = var9;
            var6 = var6.bind(var5)(var4, var3);
            _fun0001_ip = 85; continue _fun0001;
case 83:
            var9 = _closure1_slot15;
            var4 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 31;
            var3 = var20[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['activity'] = var12;
            var3['application'] = var11;
            var6 = var9.bind(var5)(var4, var3);
case 85:
            _fun0001_ip = 86; continue _fun0001;
case 81:
            var9 = _closure1_slot15;
            var4 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 25;
            var3 = var20[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var10;
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var10 = 28;
            var10 = var20[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['layout'] = var14;
            var14 = 'none';
            if(!var16) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var14 = 'auto';
case 87:
            var10['pointerEvents'] = var14;
            var10['style'] = var13;
            var16 = _closure1_slot15;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 29;
            var13 = var20[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channel'] = var19;
            var13['layoutMode'] = var18;
            var14 = var16.bind(var5)(var14, var13, var17);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var15) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var17 = _closure1_slot15;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 30;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var14 = var17.bind(var5)(var16, var15);
case 89:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var3['children'] = var10;
            var6 = var9.bind(var5)(var4, var3);
case 86:
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
case 76:
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
        var1 = 33;
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
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();