// app/modules/user_profile/native/UserProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot11 = var8;
    var8 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot12 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.PROFILE_FRAME_Z_INDEX;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var8 = var4.Fragment;
    var _closure1_slot16 = var8;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var13 = 13;
    var13 = var6[var13];
    var13 = var15.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var13;
    var13 = 14;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.ProfileFrameLayerOrder;
    var13 = var13.FRONT;
    var13 = var14[var13];
    var13 = var13 + var11;
    var10['zIndex'] = var13;
    var4['bounceOffset'] = var10;
    var10 = {};
    var13 = 'relative';
    var10['position'] = var13;
    var4['profileContainer'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var12;
    var4['noPadding'] = var10;
    var10 = {};
    var10['zIndex'] = var11;
    var4['profileEffect'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var19 = var2.channelId;
            var _closure2_slot1 = var19;
            var48 = var2.messageId;
            var47 = var2.roleId;
            var50 = var2.sessionId;
            var3 = var2.disableCalls;
            var _closure2_slot2 = var3;
            var3 = var2.disableMessage;
            var _closure2_slot3 = var3;
            var3 = var2.isVoiceContext;
            var _closure2_slot4 = var3;
            var3 = var2.onClose;
            var _closure2_slot5 = var3;
            var4 = var2.location;
            var _closure2_slot6 = var4;
            var11 = var2.openedAt;
            var32 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var32 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var32 = false;
case 2:
            var _closure2_slot7 = var32;
            var46 = var2.showGuildProfile;
            if(!(var46 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var46 = true;
case 4:
            var4 = var2.sourceAnalyticsLocations;
            if(!(var4 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = new Array(0);
case 6:
            var _closure2_slot8 = var4;
            var2 = var2.initialSection;
            var _closure2_slot9 = var2;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
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
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var2 = _closure1_slot18;
            var39 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 15;
            var9 = var2[var6];
            var13 = var7.bind(var5)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var35 = var12.bind(var13)(var10, var9);
            _closure2_slot10 = var35;
            var2 = var2[var6];
            var12 = var7.bind(var5)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var2;
            var7 = new Array(1);
            var7[0] = var19;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var10.bind(var12)(var9, var2, var7);
            _closure2_slot11 = var2;
            var9 = null;
            var7 = var9 == var2;
            var42 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var42 = var2.guild_id;
case 8:
            _closure2_slot12 = var42;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var6];
            var13 = var7.bind(var5)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot7;
                    var4 = var5.getMember;
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var16 = var12.bind(var13)(var7, var2);
            _closure2_slot13 = var16;
            var7 = _closure1_slot1;
            var2 = 16;
            var2 = var10[var2];
            var10 = var7.bind(var5)(var2);
            var2 = var9 == var35;
            var7 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var35.id;
case 12:
            if(!(var9 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot12;
case 14:
            var2 = undefined;
            if(!var46) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var42;
case 16:
            var10 = var10.bind(var5)(var7, var2);
            _closure2_slot14 = var10;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 17;
            var13 = var12[var2];
            var14 = var7.bind(var5)(var13);
            var13 = new Array(1);
            var40 = 0;
            var55 = var13;
            var54 = var4;
            var53 = 0;
            var15 = arraySpread(var55, var54, var53);
            var17 = 18;
            var17 = var12[var17];
            var17 = var7.bind(var5)(var17);
            var17 = var17.USER_PROFILE_ACTION_SHEET;
            var13[14] = var17;
            var17 = 1;
            var15 = var15 + var17;
            var13 = var14.bind(var5)(var13);
            var15 = var13.analyticsLocations;
            _closure2_slot15 = var15;
            var13 = _closure1_slot0;
            var14 = 19;
            var14 = var12[var14];
            var18 = var13.bind(var5)(var14);
            var14 = var18.useBottomSheetRef;
            var14 = var14.bind(var18)();
            var22 = var14.bottomSheetRef;
            var25 = var14.bottomSheetClose;
            var20 = _closure1_slot4;
            var14 = var20.useRef;
            var26 = var14.bind(var20)(var9);
            _closure2_slot16 = var26;
            var14 = var20.useState;
            var30 = false;
            var14 = var14.bind(var20)(var30);
            var21 = _closure1_slot3;
            var18 = 2;
            var14 = var21.bind(var5)(var14, var18);
            var38 = var14[var40];
            _closure2_slot17 = var38;
            var14 = var14[var17];
            _closure2_slot18 = var14;
            var14 = var20.useState;
            var14 = var14.bind(var20)(var40);
            var14 = var21.bind(var5)(var14, var18);
            var28 = var14[var40];
            _closure2_slot19 = var28;
            var14 = var14[var17];
            _closure2_slot20 = var14;
            var18 = var20.useCallback;
            var17 = function(arg1) {
                var3 = _closure2_slot20;
                var1 = global;
                var4 = var1.Math;
                var2 = var4.floor;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = new Array(0);
            var36 = var18.bind(var20)(var17, var14);
            var14 = 20;
            var14 = var12[var14];
            var14 = var13.bind(var5)(var14);
            var17 = var14.ProfileVisibility;
            var14 = var17.useSetting;
            var49 = var14.bind(var17)();
            var6 = var12[var6];
            var17 = var13.bind(var5)(var6);
            var14 = var17.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var14.bind(var17)(var13, var6);
            var13 = var6.pendingThemeColors;
            var14 = var6.pendingAvatarDecoration;
            _closure2_slot21 = var14;
            var24 = var6.pendingProfileEffect;
            _closure2_slot22 = var24;
            var20 = var6.pendingProfileFrame;
            _closure2_slot23 = var20;
            var6 = 21;
            var6 = var12[var6];
            var12 = var7.bind(var5)(var6);
            if(!var32) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var20)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var6 = var9 == var10;
            var7 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var10.profileFrame;
            var17 = var9 == var6;
            var7 = undefined;
            if(var17) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var7 = var6.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var17 = var9 == var20;
            var6 = undefined;
            if(var17) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var20.skuId;
case 25:
            var7 = var6;
case 24:
            var6 = 'UserProfileActionSheet';
            var29 = var12.bind(var5)(var7, var6);
            _closure2_slot24 = var29;
            var17 = _closure1_slot4;
            var12 = var17.useMemo;
            var7 = new Array(2);
            var7[0] = var29;
            var7[1] = var28;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot24;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 11:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot24;
                    var2['frame'] = var7;
                    var6 = _closure2_slot19;
                    var2['containerWidth'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 27:
                    return var1;
                }
            };
            var31 = var12.bind(var17)(var6, var7);
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 23;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            if(!var32) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            if(!(var5 === var24)) { _fun0001_ip = 30; continue _fun0001 }
case 28:
            var12 = var9 == var10;
            var6 = undefined;
            if(var12) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var12 = var10.profileEffect;
            var17 = var9 == var12;
            var6 = undefined;
            if(var17) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var6 = var12.skuId;
case 31:
            _fun0001_ip = 34; continue _fun0001;
case 30:
            var17 = var9 == var24;
            var12 = undefined;
            if(var17) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var12 = var24.skuId;
case 35:
            var6 = var12;
case 34:
            var41 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 24;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var35;
            var6['displayProfile'] = var10;
            var12 = undefined;
            if(!var32) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = var13;
case 37:
            var6['pendingThemeColors'] = var12;
            var6 = var7.bind(var5)(var6);
            var18 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var44 = _closure1_slot1;
            var12 = _closure1_slot2;
            var13 = 25;
            var13 = var12[var13];
            var17 = var44.bind(var5)(var13);
            var13 = _closure1_slot14;
            var23 = var17.bind(var5)(var13);
            var13 = 26;
            var13 = var12[var13];
            var13 = var44.bind(var5)(var13);
            var13 = var13.bind(var5)();
            var27 = var13.height;
            var13 = var13.width;
            _closure2_slot25 = var13;
            var17 = 27;
            var17 = var12[var17];
            var17 = var44.bind(var5)(var17);
            var17 = var17.bind(var5)();
            var21 = var17.top;
            var37 = _closure1_slot0;
            var17 = 28;
            var17 = var12[var17];
            var17 = var37.bind(var5)(var17);
            var17 = var17.NAV_BAR_HEIGHT_MULTILINE;
            var17 = var27 - var17;
            var33 = var17 - var21;
            var17 = _closure1_slot4;
            var27 = var17.useMemo;
            var21 = new Array(3);
            var21[0] = var32;
            var21[1] = var29;
            var21[2] = var13;
            var13 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var3 = _closure2_slot24;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 39; continue _fun0004 }
case 41:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var3 = _closure2_slot25;
                    var2 = _closure1_slot14;
                    var3 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.bind(var2)(var3);
                    var1 = var1.overflowTop;
                    return var1;
case 39:
                    var1 = 0;
                    return var1;
                }
            };
            var21 = var27.bind(var17)(var13, var21);
            var13 = 30;
            var13 = var12[var13];
            var13 = var44.bind(var5)(var13);
            var43 = var13.bind(var5)();
            var13 = 31;
            var13 = var12[var13];
            var45 = var37.bind(var5)(var13);
            var27 = var45.useToken;
            var13 = 13;
            var13 = var12[var13];
            var13 = var44.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.INTERACTIVE_TEXT_HOVER;
            var27 = var27.bind(var45)(var13, var18);
            var13 = 32;
            var13 = var12[var13];
            var44 = var44.bind(var5)(var13);
            var13 = {};
            var13['userId'] = var1;
            var13['user'] = var35;
            var13['channelId'] = var19;
            var13['guildId'] = var42;
            var13['displayProfile'] = var10;
            var13['guildMember'] = var16;
            var44 = var44.bind(var5)(var13);
            _closure2_slot26 = var44;
            var13 = 33;
            var12 = var12[var13];
            var45 = var37.bind(var5)(var12);
            var37 = var45.useCreateUserProfileAnalyticsContext;
            var12 = {};
            var51 = 'ACTION_SHEET';
            var12['layout'] = var51;
            var12['sourceSessionId'] = var50;
            var12['userId'] = var1;
            var12['guildId'] = var42;
            var12['channelId'] = var19;
            var12['messageId'] = var48;
            var12['roleId'] = var47;
            var12['showGuildProfile'] = var46;
            var12 = var37.bind(var45)(var12);
            _closure2_slot27 = var12;
            var46 = var17.useMemo;
            var45 = new Array(2);
            var45[0] = var35;
            var45[1] = var19;
            var37 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 34;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 42:
                    return var1;
                }
            };
            var37 = var46.bind(var17)(var37, var45);
            _closure2_slot28 = var37;
            var46 = var17.useEffect;
            var45 = new Array(2);
            var45[0] = var35;
            var45[1] = var1;
            var37 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var46.bind(var17)(var37, var45);
            var45 = var17.useEffect;
            var37 = new Array(3);
            var37[0] = var35;
            var37[1] = var42;
            var37[2] = var19;
            var19 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 11:
                    var3 = _closure2_slot10;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 36;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot10;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 46:
                    var1 = var2;
case 45:
                    if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var1 = _closure2_slot10;
                    var3 = var1.id;
                    var9 = _closure2_slot10;
                    var6 = var9.getAvatarURL;
                    var2 = _closure2_slot12;
                    var1 = 80;
                    var2 = var6.bind(var9)(var2, var1);
                    var1 = {'type': 'action_sheet', 'withMutualGuilds': true, 'withMutualFriends': true, 'dispatchWait': true};
                    var6 = _closure2_slot12;
                    var1['guildId'] = var6;
                    var6 = _closure2_slot1;
                    var8 = var8 != var6;
                    var6 = undefined;
                    if(!var8) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var6 = _closure2_slot1;
case 50:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var45.bind(var17)(var19, var37);
            var37 = var17.useEffect;
            var19 = new Array(5);
            var19[0] = var44;
            var19[1] = var10;
            var19[2] = var42;
            var19[3] = var38;
            var19[4] = var16;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 41; continue _fun0008 }
case 40:
                    var4 = _closure2_slot14;
                    var3 = null;
                    var2 = var3 == var4;
case 41:
                    if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = _closure2_slot13;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var5 = _closure2_slot13;
                    var3 = var5.fullProfileLoadedTimestamp;
case 56:
                    var2 = var4 != var3;
case 54:
                    if(!var2) { _fun0008_ip = 52; continue _fun0008 }
case 58:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 38;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot11;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot26;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var37.bind(var17)(var16, var19);
            var16 = var17.useEffect;
            var37 = var9 == var14;
            var19 = undefined;
            if(var37) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var19 = var14.skuId;
case 59:
            var14 = new Array(4);
            var14[0] = var19;
            var37 = var9 == var24;
            var19 = undefined;
            if(var37) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var19 = var24.skuId;
case 61:
            var14[1] = var19;
            var24 = var9 == var20;
            var19 = undefined;
            if(var24) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var19 = var20.skuId;
case 63:
            var14[2] = var19;
            var14[3] = var4;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.at;
                    var1 = -1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 38;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var6 = 'Collectibles Shop Details Modal Expanded';
                    var2['type'] = var6;
                    var6 = _closure2_slot8;
                    var2['location_stack'] = var6;
                    var6 = _closure2_slot21;
                    var9 = null;
                    var7 = var9 == var6;
                    var6 = undefined;
                    if(var7) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var7 = _closure2_slot21;
                    var6 = var7.skuId;
case 67:
                    if(!(var9 == var6)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var7 = _closure2_slot22;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var10 = _closure2_slot22;
                    var7 = var10.skuId;
case 71:
                    var6 = var7;
case 69:
                    if(!(var9 == var6)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var7 = _closure2_slot23;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0009_ip = 75; continue _fun0009 }
case 48:
                    var8 = _closure2_slot23;
                    var7 = var8.skuId;
case 75:
                    var6 = var7;
case 73:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 65:
                    return var1;
                }
            };
            var4 = var16.bind(var17)(var4, var14);
            var14 = _closure1_slot4;
            var16 = var14.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 53; continue _fun0010 }
case 44:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var16.bind(var14)(var3, var4);
            var4 = var14.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = function handleNavigationChange() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = null;
                            var4 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0012_ip = 76; continue _fun0012 }
case 41:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0012_ip = 76; continue _fun0012 }
case 10:
                            var3 = var4.key;
case 76:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 40;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 41;
                            var2 = var6[var2];
                            var6 = var5.bind(var1)(var2);
                            var5 = var6.getUserProfileActionSheetKey;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
case 77:
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0011_ip = 27; continue _fun0011 }
case 79:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0011_ip = 80; continue _fun0011 }
case 27:
                    return var2;
case 80:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var2 = var3.key;
case 81:
                    var _closure3_slot1 = var2;
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot2;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var4.bind(var14)(var1, var3);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 42;
            var1 = var1[var14];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot29 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot15;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot27;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot30 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot29;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot30;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot31 = var1;
            if(!(var9 != var35)) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var4 = _closure1_slot15;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var37 = 47;
            var1 = var16[var37];
            var1 = var17.bind(var5)(var1);
            var3 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var18;
            var1['primaryColor'] = var7;
            var1['secondaryColor'] = var6;
            var6 = var16[var2];
            var6 = var17.bind(var5)(var6);
            var7 = var6.AnalyticsLocationProvider;
            var6 = {};
            var6['value'] = var15;
            var16 = var16[var13];
            var16 = var17.bind(var5)(var16);
            var17 = var16.UserProfileAnalyticsProvider;
            var16 = {};
            var16['value'] = var12;
            var16['openedAt'] = var11;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var18 = var10.fetchStartedAt;
case 85:
            var16['fetchStartedAt'] = var18;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var18 = var10.fetchEndedAt;
case 87:
            var16['fetchEndedAt'] = var18;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var18 = var10.isLoaded;
case 89:
            var16['isLoaded'] = var18;
            var20 = _closure1_slot17;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 43;
            var18 = var24[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.BottomSheet;
            var18 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var18['ref'] = var22;
            var45 = true;
            var21 = var33 - var21;
            var18['maxHeight'] = var21;
            var21 = var39.noPadding;
            var18['contentStyles'] = var21;
            var22 = _closure1_slot16;
            var21 = {};
            var24 = new Array(2);
            var24[0] = var31;
            var31 = var32;
            if(!var31) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var42 = _closure1_slot15;
            var50 = _closure1_slot0;
            var52 = _closure1_slot2;
            var37 = var52[var37];
            var37 = var50.bind(var5)(var37);
            var38 = var37.ThemeContextProvider;
            var37 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var37['theme'] = var43;
            var43 = 48;
            var43 = var52[var43];
            var43 = var50.bind(var5)(var43);
            var44 = var43.ActionSheetBackdropToast;
            var43 = {};
            var51 = 46;
            var46 = var52[var51];
            var46 = var50.bind(var5)(var46);
            var48 = var46.intl;
            var47 = var48.string;
            var46 = 49;
            var46 = var52[var46];
            var46 = var50.bind(var5)(var46);
            var46 = var46.ProfileVisibility;
            var46 = var46.FRIENDS_ONLY;
            if(!(var49 !== var46)) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var49 = _closure1_slot0;
            var46 = _closure1_slot2;
            var46 = var46[var51];
            var46 = var49.bind(var5)(var46);
            var46 = var46.t;
            var46 = var46.wSnI/0;
            _fun0001_ip = 95; continue _fun0001;
case 93:
            var50 = _closure1_slot0;
            var49 = _closure1_slot2;
            var49 = var49[var51];
            var49 = var50.bind(var5)(var49);
            var49 = var49.t;
            var46 = var49.mNZcD8;
case 95:
            var46 = var47.bind(var48)(var46);
            var43['text'] = var46;
            var43['isExpanded'] = var45;
            var43 = var42.bind(var5)(var44, var43);
            var37['children'] = var43;
            var31 = var42.bind(var5)(var38, var37);
case 91:
            var24[1] = var31;
            var21['children'] = var24;
            var21 = var20.bind(var5)(var22, var21);
            var18['backdropChildren'] = var21;
            var24 = _closure1_slot15;
            var22 = _closure1_slot1;
            var31 = _closure1_slot2;
            var21 = 50;
            var21 = var31[var21];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var21['gradientHeight'] = var33;
            var21['bannerHeight'] = var23;
            var22 = var24.bind(var5)(var22, var21);
            var21 = new Array(4);
            var21[0] = var22;
            var23 = _closure1_slot0;
            var22 = 51;
            var22 = var31[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.BottomSheetScrollView;
            var22 = {};
            var22['scrollsToTop'] = var30;
            var30 = var39.container;
            var22['style'] = var30;
            var30 = {};
            var31 = undefined;
            if(!var32) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var31 = 'none';
case 96:
            var30['pointerEvents'] = var31;
            var22['contentContainerStyle'] = var30;
            var22['ref'] = var26;
            var31 = _closure1_slot17;
            var30 = _closure1_slot5;
            var26 = {};
            var33 = _closure1_slot15;
            var32 = {};
            var37 = var39.bounceOffset;
            var32['style'] = var37;
            var33 = var33.bind(var5)(var30, var32);
            var32 = new Array(2);
            var32[0] = var33;
            var33 = {};
            var37 = var39.profileContainer;
            var33['style'] = var37;
            var33['onLayout'] = var36;
            var34 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var6 = {};
                    var6['user'] = var1;
                    var4 = _closure2_slot11;
                    var6['channel'] = var4;
                    var4 = _closure2_slot14;
                    var6['displayProfile'] = var4;
                    var4 = _closure2_slot2;
                    var6['disableCalls'] = var4;
                    var4 = _closure2_slot3;
                    var6['disableMessage'] = var4;
                    var4 = _closure2_slot4;
                    var6['isVoiceContext'] = var4;
                    var4 = _closure2_slot6;
                    var6['location'] = var4;
                    var4 = _closure2_slot28;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot16;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 52;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot31;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 52;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot31;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var3 = _closure2_slot30;
                    var6['showUserProfileActionSheet'] = var3;
                    var2 = _closure2_slot9;
                    var6['initialSection'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                    var1 = var1.bot;
                    var7 = _closure1_slot15;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0013_ip = 100; continue _fun0013 }
case 101:
                    var1 = 55;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0013_ip = 102; continue _fun0013;
case 100:
                    var3 = 54;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
case 102:
                    _fun0013_ip = 103; continue _fun0013;
case 98:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 53;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 103:
                    return var1;
                }
            };
            var35 = var34.bind(var5)(var35);
            var34 = new Array(2);
            var34[0] = var35;
            var35 = var9 != var41;
            if(!var35) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var38 = _closure1_slot15;
            var37 = _closure1_slot1;
            var42 = _closure1_slot2;
            var36 = 56;
            var36 = var42[var36];
            var37 = var37.bind(var5)(var36);
            var36 = {};
            var41 = var41.skuId;
            var36['skuId'] = var41;
            var36['bannerAdjustment'] = var40;
            var39 = var39.profileEffect;
            var36['style'] = var39;
            var35 = var38.bind(var5)(var37, var36);
case 104:
            var34[1] = var35;
            var33['children'] = var34;
            var33 = var31.bind(var5)(var30, var33);
            var32[1] = var33;
            var26['children'] = var32;
            var26 = var31.bind(var5)(var30, var26);
            var22['children'] = var26;
            var22 = var24.bind(var5)(var23, var22);
            var21[1] = var22;
            var22 = var9 != var29;
            if(!var22) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var26 = _closure1_slot15;
            var24 = _closure1_slot1;
            var31 = _closure1_slot2;
            var23 = 57;
            var23 = var31[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['frame'] = var29;
            var29 = _closure1_slot10;
            var29 = var29.ACTION_SHEET;
            var23['profileThemeType'] = var29;
            var30 = _closure1_slot0;
            var29 = 14;
            var29 = var31[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.ProfileFrameLayerOrder;
            var29 = var29.FRONT;
            var23['frameOrder'] = var29;
            var23['containerWidth'] = var28;
            var22 = var26.bind(var5)(var24, var23);
case 106:
            var21[2] = var22;
            var24 = _closure1_slot15;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 58;
            var22 = var26[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.ActionSheetHeaderBar;
            var22 = {};
            var26 = 'floating';
            var22['variant'] = var26;
            var26 = {};
            var26['backgroundColor'] = var27;
            var22['tabStyle'] = var26;
            var22['onPress'] = var25;
            var22 = var24.bind(var5)(var23, var22);
            var21[3] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var16['children'] = var18;
            var16 = var4.bind(var5)(var17, var16);
            var6['children'] = var16;
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 108; continue _fun0001;
case 83:
            var4 = _closure1_slot15;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var15;
            var6 = var6[var13];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileAnalyticsProvider;
            var6 = {};
            var6['value'] = var12;
            var6['openedAt'] = var11;
            var12 = var9 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var11 = var10.fetchStartedAt;
case 109:
            var6['fetchStartedAt'] = var11;
            var12 = var9 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 111; continue _fun0001 }
case 112:
            var11 = var10.fetchEndedAt;
case 111:
            var6['fetchEndedAt'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var9 = var10.isLoaded;
case 113:
            var6['isLoaded'] = var9;
            var10 = _closure1_slot15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 43;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var11 = 44;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.EmptyState;
            var11 = {};
            var13 = {};
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 45;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 46;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.eAn6z2;
            var13 = var14.bind(var15)(var13);
            var11['body'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 108:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 59;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();