// app/modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var15 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function VoicePanelAnimatedActivityCardInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var23 = var1.applicationId;
            var _closure2_slot0 = var23;
            var27 = var1.sharedVisible;
            var _closure2_slot1 = var27;
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
            var19 = var1.bind(var5)();
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var1 = -1;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot3;
            var29 = 2;
            var1 = var1.bind(var5)(var3, var29);
            var17 = 0;
            var18 = var1[var17];
            var28 = 1;
            var1 = var1[var28];
            var _closure2_slot2 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useContext;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 15;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var7.bind(var8)(var3);
            var7 = var3.channelId;
            var _closure2_slot3 = var7;
            var39 = var3.focused;
            var _closure2_slot4 = var39;
            var34 = var3.layoutManager;
            var _closure2_slot5 = var34;
            var37 = var3.mode;
            var _closure2_slot6 = var37;
            var32 = var3.windowDimensions;
            var _closure2_slot7 = var32;
            var21 = var3.hideControls;
            var _closure2_slot8 = var21;
            var22 = var3.controlsSpecs;
            var _closure2_slot9 = var22;
            var3 = 16;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var33 = var3.bind(var5)();
            var _closure2_slot10 = var33;
            var3 = _closure1_slot0;
            var15 = 17;
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
            var20 = var6.bind(var7)(var3, var1);
            var _closure2_slot11 = var20;
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var20;
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
            var6 = var1 == var20;
            var3 = undefined;
            if(var6) { _fun0001_ip = 368; continue _fun0001 }
 363:
            var3 = var20.guild_id;
 368:
            _closure2_slot12 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useActivityShelfItemData;
            var6 = var1 == var20;
            var9 = undefined;
            if(var6) { _fun0001_ip = 412; continue _fun0001 }
 407:
            var9 = var20.guild_id;
 412:
            var10 = var1 != var9;
            var6 = null;
            if(!var10) { _fun0001_ip = 424; continue _fun0001 }
 421:
            var6 = var9;
 424:
            var25 = var7.bind(var8)(var6, var23);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
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
            var3 = 20;
            var3 = var10[var3];
            var6 = var13.bind(var5)(var3);
            var3 = new Array(1);
            var3[0] = var23;
            var6 = var6.bind(var5)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var28);
            var11 = var3[var17];
            _closure2_slot13 = var11;
            var9 = _closure1_slot0;
            var3 = var10[var15];
            var12 = var9.bind(var5)(var3);
            var8 = var12.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = new Array(1);
            var6[0] = var23;
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
            var36 = var3.gridOrientationLockState;
            _closure2_slot14 = var36;
            var30 = var3.focusedOrientationLockState;
            _closure2_slot15 = var30;
            var3 = 21;
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
 0:
                    var6 = _closure1_slot5;
                    var5 = var6.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot3;
                    var6 = var5.bind(var6)(var1);
                    var5 = var6.find;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0003_ip = 35; continue _fun0003 }
 26:
                            var3 = _closure2_slot13;
                            var1 = var3.id;
 35:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var5.bind(var6)(var1);
                    var5 = null;
                    if(!(var5 == var1)) { _fun0002_ip = 86; continue _fun0002 }
 50:
                    var5 = _closure1_slot5;
                    var4 = var5.getEmbeddedActivitiesForStartingChannel;
                    var3 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.applicationId;
                            var4 = _closure2_slot13;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0004_ip = 35; continue _fun0004 }
 26:
                            var3 = _closure2_slot13;
                            var1 = var3.id;
 35:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2);
 86:
                    return var1;
                }
            };
            var12 = var8.bind(var12)(var7, var3);
            var8 = 22;
            var3 = var10[var8];
            var7 = var13.bind(var5)(var3);
            var3 = 23;
            var3 = var10[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.ACTIVITY_TILE;
            var3 = var7.bind(var5)(var3);
            var7 = var3.analyticsLocations;
            var3 = 24;
            var3 = var10[var3];
            var9 = var9.bind(var5)(var3);
            var3 = var9.useAnalyticsContext;
            var24 = var3.bind(var9)();
            var3 = var1 != var6;
            if(!var3) { _fun0001_ip = 732; continue _fun0001 }
 709:
            var9 = var6.id;
            var10 = var1 == var11;
            var6 = undefined;
            if(var10) { _fun0001_ip = 728; continue _fun0001 }
 723:
            var6 = var11.id;
 728:
            var3 = var9 === var6;
 732:
            if(var3) { _fun0001_ip = 780; continue _fun0001 }
 735:
            var9 = var1 == var12;
            var6 = undefined;
            if(var9) { _fun0001_ip = 776; continue _fun0001 }
 744:
            var13 = var12.participants;
            var9 = var1 == var13;
            var6 = undefined;
            if(var9) { _fun0001_ip = 776; continue _fun0001 }
 759:
            var10 = var13.find;
            var9 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var13)(var9);
 776:
            var3 = var1 != var6;
 780:
            _closure2_slot16 = var3;
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var9 = new Array(1);
            var9[0] = var3;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0005_ip = 30; continue _fun0005 }
 10:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1 + 1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var10.bind(var13)(var6, var9);
            _closure2_slot17 = var31;
            var38 = _closure1_slot0;
            var35 = _closure1_slot2;
            var13 = 26;
            var6 = var35[var13];
            var16 = var38.bind(var5)(var6);
            var10 = var16.useAnimatedReaction;
            var9 = function Z() {
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
            var6['sharedVisible'] = var27;
            var6['mode'] = var37;
            var9['__closure'] = var6;
            var6 = 2072430391020.0;
            var9['__workletHash'] = var6;
            var6 = _closure1_slot18;
            var9['__initData'] = var6;
            var6 = function q(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var5 = arg2;
                    var2 = var1.visible;
                    var4 = var1.mode;
                    var1 = 1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0006_ip = 33; continue _fun0006 }
 27:
                    var2 = null;
                    var1 = var2 != var5;
 33:
                    if(!var1) { _fun0006_ip = 48; continue _fun0006 }
 36:
                    var3 = var5.visible;
                    var2 = 0;
                    var1 = var2 === var3;
 48:
                    if(var1) { _fun0006_ip = 104; continue _fun0006 }
 51:
                    var2 = _closure1_slot9;
                    var2 = var2.PIP;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0006_ip = 101; continue _fun0006 }
 71:
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 87; continue _fun0006 }
 82:
                    var4 = var5.mode;
 87:
                    var3 = _closure1_slot9;
                    var3 = var3.PIP;
                    var2 = var4 === var3;
 101:
                    var1 = var2;
 104:
                    if(!var1) { _fun0006_ip = 153; continue _fun0006 }
 107:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot17;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 153:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = {};
            var40 = _closure1_slot9;
            var27['VoicePanelModes'] = var40;
            var35 = var35[var13];
            var35 = var38.bind(var5)(var35);
            var35 = var35.runOnJS;
            var27['runOnJS'] = var35;
            var27['incrementActivityKey'] = var31;
            var6['__closure'] = var27;
            var27 = 9732208421749.0;
            var6['__workletHash'] = var27;
            var27 = _closure1_slot19;
            var6['__initData'] = var27;
            var6 = var10.bind(var16)(var9, var6);
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var6 = false;
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var5)(var9, var29);
            var16 = var6[var17];
            _closure2_slot18 = var16;
            var38 = var6[var28];
            _closure2_slot19 = var38;
            var6 = var1 != var12;
            var40 = null;
            if(!var6) { _fun0001_ip = 1079; continue _fun0001 }
 1026:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 27;
            var6 = var10[var6];
            var10 = var9.bind(var5)(var6);
            var9 = var10.getEmbeddedActivityParticipantId;
            var6 = {};
            var27 = var12.applicationId;
            var6['applicationId'] = var27;
            var27 = var12.compositeInstanceId;
            var6['instanceId'] = var27;
            var40 = var9.bind(var10)(var6);
 1079:
            _closure2_slot20 = var40;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var9 = var6[var13];
            var35 = var10.bind(var5)(var9);
            var31 = var35.useAnimatedReaction;
            var27 = function ue() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot20;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0007_ip = 51; continue _fun0007 }
 16:
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = var4 == var3;
                    var4 = undefined;
                    if(var5) { _fun0007_ip = 43; continue _fun0007 }
 38:
                    var4 = var3.id;
 43:
                    var3 = _closure2_slot20;
                    var1 = var4 === var3;
 51:
                    if(!var1) { _fun0007_ip = 84; continue _fun0007 }
 54:
                    var3 = _closure2_slot6;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot9;
                    var2 = var2.PANEL;
                    var1 = var3 === var2;
 84:
                    return var1;
                }
            };
            var9 = {};
            var9['activityParticipantId'] = var40;
            var9['focused'] = var39;
            var9['mode'] = var37;
            var37 = _closure1_slot9;
            var9['VoicePanelModes'] = var37;
            var27['__closure'] = var9;
            var9 = 2833167890519.0;
            var27['__workletHash'] = var9;
            var9 = _closure1_slot20;
            var27['__initData'] = var9;
            var9 = function le(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0008_ip = 57; continue _fun0008 }
 10:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 57:
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
            var9 = var31.bind(var35)(var27, var9);
            var35 = _closure1_slot4;
            var31 = var35.useMemo;
            var27 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Tap;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = new Array(0);
            var9 = var31.bind(var35)(var27, var9);
            var35 = _closure1_slot4;
            var31 = var35.useCallback;
            var27 = new Array(2);
            var27[0] = var34;
            var27[1] = var23;
            var23 = function(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg2;
                    var1 = arg3;
                    if(var1) { _fun0009_ip = 41; continue _fun0009 }
 9:
                    var5 = _closure2_slot5;
                    var4 = var5.setTargetAspectRatio;
                    var3 = _closure2_slot0;
                    var1 = 'square';
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0009_ip = 191; continue _fun0009;
 41:
                    var3 = _closure1_slot14;
                    var3 = var3.LANDSCAPE;
                    if(!(var3 !== var2)) { _fun0009_ip = 164; continue _fun0009 }
 58:
                    var3 = _closure1_slot14;
                    var3 = var3.PORTRAIT;
                    if(!(var3 !== var2)) { _fun0009_ip = 133; continue _fun0009 }
 72:
                    var1 = _closure1_slot14;
                    var1 = var1.UNLOCKED;
                    if(!(var1 !== var2)) { _fun0009_ip = 92; continue _fun0009 }
 86:
                    var1 = null;
                    if(!(var1 === var2)) { _fun0009_ip = 191; continue _fun0009 }
 92:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var5 = arg1;
                    if(!var5) { _fun0009_ip = 125; continue _fun0009 }
 121:
                    var1 = 'landscape';
 125:
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0009_ip = 191; continue _fun0009;
 133:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'portrait';
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0009_ip = 191; continue _fun0009;
 164:
                    var4 = _closure2_slot5;
                    var3 = var4.setTargetAspectRatio;
                    var2 = _closure2_slot0;
                    var1 = 'landscape';
                    var1 = var3.bind(var4)(var2, var1);
 191:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var31.bind(var35)(var23, var27);
            _closure2_slot21 = var37;
            var35 = _closure1_slot4;
            var31 = var35.useLayoutEffect;
            var27 = new Array(4);
            var27[0] = var37;
            var27[1] = var32;
            var27[2] = var36;
            var27[3] = var3;
            var23 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
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
            var23 = var31.bind(var35)(var23, var27);
            var31 = _closure1_slot4;
            var27 = var31.useState;
            var23 = var34.getDefaultTargetDimensions;
            var23 = var23.bind(var34)();
            var27 = var27.bind(var31)(var23);
            var23 = _closure1_slot3;
            var27 = var23.bind(var5)(var27, var29);
            var23 = var27[var17];
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
            var28 = function Pe() {
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
            var27 = function pe(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var5 = arg2;
                    var4 = var3.landscape;
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0010_ip = 31; continue _fun0010 }
 25:
                    var2 = var5.landscape;
 31:
                    if(!(var4 !== var2)) { _fun0010_ip = 96; continue _fun0010 }
 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 26;
                    var2 = var5[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.runOnJS;
                    var4 = _closure2_slot21;
                    var5 = var5.bind(var6)(var4);
                    var4 = var3.landscape;
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot16;
                    var2 = var5.bind(var1)(var4, var3, var2);
 96:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
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
            var27 = 30;
            var27 = var6[var27];
            var28 = var10.bind(var5)(var27);
            var27 = var28.isIpadOS;
            var31 = var27.bind(var28)();
            _closure2_slot24 = var31;
            var19 = var19.activityContainerBackground;
            var29 = var19.backgroundColor;
            _closure2_slot25 = var29;
            var13 = var6[var13];
            var27 = var10.bind(var5)(var13);
            var19 = var27.useAnimatedStyle;
            var13 = function Ce() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure1_slot8;
                    var4 = 0;
                    if(!var2) { _fun0011_ip = 28; continue _fun0011 }
 12:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
 28:
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
                    if(!var2) { _fun0011_ip = 103; continue _fun0011 }
 85:
                    var10 = _closure2_slot15;
                    var8 = _closure1_slot14;
                    var8 = var8.LANDSCAPE;
                    var2 = var10 === var8;
 103:
                    if(!var2) { _fun0011_ip = 109; continue _fun0011 }
 106:
                    var2 = !var6;
 109:
                    var8 = _closure2_slot24;
                    if(!var8) { _fun0011_ip = 134; continue _fun0011 }
 116:
                    var11 = _closure2_slot15;
                    var10 = _closure1_slot14;
                    var10 = var10.PORTRAIT;
                    var8 = var11 === var10;
 134:
                    if(!var8) { _fun0011_ip = 140; continue _fun0011 }
 137:
                    var8 = var6;
 140:
                    if(var2) { _fun0011_ip = 173; continue _fun0011 }
 143:
                    var6 = 0;
                    var2 = 0;
                    if(!var8) { _fun0011_ip = 194; continue _fun0011 }
 150:
                    var8 = _closure1_slot12;
                    var8 = var3 * var8;
                    var10 = var7 - var8;
                    var8 = 2;
                    var2 = var10 / var8;
                    var6 = 0;
                    _fun0011_ip = 194; continue _fun0011;
 173:
                    var1 = _closure1_slot12;
                    var1 = var7 * var1;
                    var8 = var3 - var1;
                    var1 = 2;
                    var6 = var8 / var1;
                    var2 = 0;
 194:
                    var1 = {};
                    var10 = _closure2_slot18;
                    var8 = 1;
                    if(!var10) { _fun0011_ip = 208; continue _fun0011 }
 206:
                    var8 = 0;
 208:
                    var1['flex'] = var8;
                    var8 = _closure2_slot25;
                    var1['backgroundColor'] = var8;
                    var1['paddingVertical'] = var6;
                    var1['paddingHorizontal'] = var2;
                    var8 = _closure2_slot18;
                    var2 = 'auto';
                    var6 = var2;
                    if(!var8) { _fun0011_ip = 246; continue _fun0011 }
 243:
                    var6 = var7;
 246:
                    var1['width'] = var6;
                    var5 = _closure2_slot18;
                    if(!var5) { _fun0011_ip = 261; continue _fun0011 }
 257:
                    var2 = var3 - var4;
 261:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var28 = {};
            var34 = _closure1_slot8;
            var28['IS_IOS'] = var34;
            var28['animatedKeyboardHeight'] = var33;
            var28['windowDimensions'] = var32;
            var28['isDeviceTablet'] = var31;
            var28['focusedOrientationLockState'] = var30;
            var30 = _closure1_slot14;
            var28['OrientationLockState'] = var30;
            var30 = _closure1_slot12;
            var28['ACTIVITY_PORTRAIT_ASPECT_RATIO'] = var30;
            var28['isActivityFocused'] = var16;
            var28['backgroundColor'] = var29;
            var13['__closure'] = var28;
            var28 = 12336978466960.0;
            var13['__workletHash'] = var28;
            var28 = _closure1_slot24;
            var13['__initData'] = var28;
            var13 = var19.bind(var27)(var13);
            var6 = var6[var15];
            var19 = var10.bind(var5)(var6);
            var15 = var19.useStateFromStores;
            var6 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getShowActivitiesDebugOverlay;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var15.bind(var19)(var10, var6);
            var19 = _closure1_slot4;
            var10 = var19.useMemo;
            var6 = new Array(3);
            var6[0] = var22;
            var6[1] = var16;
            var6[2] = var21;
            var4 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 28;
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
 0:
                        var2 = arg2;
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot9;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var4 = var2.mode;
                        var3 = _closure1_slot10;
                        var3 = var3.HIDDEN;
                        if(!(var4 !== var3)) { _fun0012_ip = 101; continue _fun0012 }
 51:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 26;
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
 101:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var7 = _closure2_slot9;
                var5['controlsSpecs'] = var7;
                var7 = _closure1_slot10;
                var5['VoicePanelControlsModes'] = var7;
                var7 = 26;
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
            var10 = var10.bind(var19)(var4, var6);
            if(!(var1 != var20)) { _fun0001_ip = 2271; continue _fun0001 }
 1825:
            var4 = _closure1_slot13;
            if(var16) { _fun0001_ip = 1840; continue _fun0001 }
 1832:
            var19 = var4.GRID;
            _fun0001_ip = 1846; continue _fun0001;
 1840:
            var19 = var4.FOCUSED;
 1846:
            if(var3) { _fun0001_ip = 2019; continue _fun0001 }
 1852:
            if(!(var1 != var25)) { _fun0001_ip = 1973; continue _fun0001 }
 1856:
            var6 = _closure1_slot15;
            var4 = _closure1_slot0;
            var27 = _closure1_slot2;
            var3 = 28;
            var3 = var27[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var9;
            var22 = _closure1_slot15;
            var21 = _closure1_slot1;
            var9 = 35;
            var9 = var27[var9];
            var21 = var21.bind(var5)(var9);
            var9 = {};
            var9['context'] = var26;
            var26 = var20.guild_id;
            var9['guildId'] = var26;
            var9['activityItem'] = var25;
            var24 = var24.location;
            var9['locationObject'] = var24;
            var9['itemDimensions'] = var23;
            var23 = true;
            var9['disableBadges'] = var23;
            var9 = var22.bind(var5)(var21, var9);
            var3['children'] = var9;
            var6 = var6.bind(var5)(var4, var3);
            _fun0001_ip = 2014; continue _fun0001;
 1973:
            var9 = _closure1_slot15;
            var4 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 34;
            var3 = var21[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['activity'] = var12;
            var3['application'] = var11;
            var6 = var9.bind(var5)(var4, var3);
 2014:
            _fun0001_ip = 2226; continue _fun0001;
 2019:
            var9 = _closure1_slot15;
            var4 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 28;
            var3 = var21[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GestureDetector;
            var3 = {};
            var3['gesture'] = var10;
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var10 = 31;
            var10 = var21[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['layout'] = var14;
            var14 = 'none';
            if(!var16) { _fun0001_ip = 2094; continue _fun0001 }
 2090:
            var14 = 'auto';
 2094:
            var10['pointerEvents'] = var14;
            var10['style'] = var13;
            var16 = _closure1_slot15;
            var14 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 32;
            var13 = var21[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channel'] = var20;
            var13['layoutMode'] = var19;
            var19 = var18 > var17;
            var17 = 0;
            if(!var19) { _fun0001_ip = 2150; continue _fun0001 }
 2147:
            var17 = var18;
 2150:
            var14 = var16.bind(var5)(var14, var13, var17);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var15) { _fun0001_ip = 2202; continue _fun0001 }
 2170:
            var17 = _closure1_slot15;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 33;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var14 = var17.bind(var5)(var16, var15);
 2202:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var3['children'] = var10;
            var6 = var9.bind(var5)(var4, var3);
 2226:
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
 2271:
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
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
    var12 = var4.VOICE_PANEL_CARD_INNER_PADDING;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var8;
    var8 = var4.ActivityLayoutMode;
    var _closure1_slot13 = var8;
    var4 = var4.OrientationLockState;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var17 = var4.XSMALL;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var14 = 13;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var16;
    var4['activityContainerBackground'] = var10;
    var10 = {};
    var16 = 14;
    var16 = var6[var16];
    var16 = var5.bind(var1)(var16);
    var16 = var16.AVATAR_SIZE_MAP;
    var16 = var16[var17];
    var10['height'] = var16;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var16;
    var4['overflow'] = var10;
    var10 = {'fontSize': 16, 'lineHeight': 24, 'color': null, 'fontFamily': null, 'textAlign': 'center', 'marginLeft': 16, 'marginRight': 16};
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_NORMAL;
    var10['color'] = var14;
    var13 = var13.DISPLAY_EXTRABOLD;
    var10['fontFamily'] = var13;
    var4['titleText'] = var10;
    var10 = {};
    var13 = 'absolute';
    var10['position'] = var13;
    var10['top'] = var12;
    var10['left'] = var12;
    var10['zIndex'] = var11;
    var4['closeButton'] = var10;
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
    var8 = "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isDeviceTablet,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto'};}";
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
        var1 = 36;
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
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();