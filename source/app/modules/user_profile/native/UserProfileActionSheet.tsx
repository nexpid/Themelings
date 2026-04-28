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
            var28 = var2.messageId;
            var26 = var2.roleId;
            var30 = var2.sessionId;
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
            var31 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var31 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var31 = false;
case 2:
            var _closure2_slot7 = var31;
            var22 = var2.showGuildProfile;
            if(!(var22 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = true;
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
            var38 = var2.bind(var5)();
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
            var34 = var12.bind(var13)(var10, var9);
            _closure2_slot10 = var34;
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
            var43 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var43 = var2.guild_id;
case 8:
            _closure2_slot12 = var43;
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
            var2 = var9 == var34;
            var7 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var34.id;
case 12:
            if(!(var9 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot12;
case 14:
            var2 = undefined;
            if(!var22) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var43;
case 16:
            var10 = var10.bind(var5)(var7, var2);
            _closure2_slot14 = var10;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 17;
            var12 = var17[var2];
            var13 = var7.bind(var5)(var12);
            var12 = new Array(1);
            var39 = 0;
            var54 = var12;
            var53 = var4;
            var52 = 0;
            var14 = arraySpread(var54, var53, var52);
            var15 = 18;
            var15 = var17[var15];
            var15 = var7.bind(var5)(var15);
            var15 = var15.USER_PROFILE_ACTION_SHEET;
            var12[13] = var15;
            var15 = 1;
            var14 = var14 + var15;
            var12 = var13.bind(var5)(var12);
            var14 = var12.analyticsLocations;
            _closure2_slot15 = var14;
            var12 = _closure1_slot0;
            var13 = 19;
            var13 = var17[var13];
            var18 = var12.bind(var5)(var13);
            var13 = var18.useBottomSheetRef;
            var13 = var13.bind(var18)();
            var21 = var13.bottomSheetRef;
            var24 = var13.bottomSheetClose;
            var20 = _closure1_slot4;
            var13 = var20.useRef;
            var25 = var13.bind(var20)(var9);
            _closure2_slot16 = var25;
            var13 = var20.useState;
            var29 = false;
            var13 = var13.bind(var20)(var29);
            var23 = _closure1_slot3;
            var18 = 2;
            var13 = var23.bind(var5)(var13, var18);
            var41 = var13[var39];
            _closure2_slot17 = var41;
            var13 = var13[var15];
            _closure2_slot18 = var13;
            var13 = var20.useState;
            var13 = var13.bind(var20)(var39);
            var13 = var23.bind(var5)(var13, var18);
            var27 = var13[var39];
            _closure2_slot19 = var27;
            var13 = var13[var15];
            _closure2_slot20 = var13;
            var18 = var20.useCallback;
            var15 = function(arg1) {
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
            var13 = new Array(0);
            var35 = var18.bind(var20)(var15, var13);
            var13 = 20;
            var13 = var17[var13];
            var13 = var12.bind(var5)(var13);
            var15 = var13.ProfileVisibility;
            var13 = var15.useSetting;
            var48 = var13.bind(var15)();
            var6 = var17[var6];
            var18 = var12.bind(var5)(var6);
            var15 = var18.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var15.bind(var18)(var13, var6);
            var18 = var6.pendingThemeColors;
            var15 = var6.pendingAvatarDecoration;
            _closure2_slot21 = var15;
            var36 = var6.pendingProfileEffect;
            _closure2_slot22 = var36;
            var23 = var6.pendingProfileFrame;
            _closure2_slot23 = var23;
            var13 = 21;
            var6 = var17[var13];
            var20 = var12.bind(var5)(var6);
            var12 = var20.useCreateUserProfileAnalyticsContext;
            var6 = {};
            var32 = 'ACTION_SHEET';
            var6['layout'] = var32;
            var6['sourceSessionId'] = var30;
            var6['userId'] = var1;
            var6['guildId'] = var43;
            var6['channelId'] = var19;
            var6['messageId'] = var28;
            var6['roleId'] = var26;
            var6['showGuildProfile'] = var22;
            var12 = var12.bind(var20)(var6);
            _closure2_slot24 = var12;
            var6 = 22;
            var6 = var17[var6];
            var17 = var7.bind(var5)(var6);
            if(!var31) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var23)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var6 = var9 == var10;
            var7 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var10.profileFrame;
            var20 = var9 == var6;
            var7 = undefined;
            if(var20) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var7 = var6.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var20 = var9 == var23;
            var6 = undefined;
            if(var20) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var23.skuId;
case 25:
            var7 = var6;
case 24:
            var6 = 'UserProfileActionSheet';
            var28 = var17.bind(var5)(var7, var6);
            _closure2_slot25 = var28;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 23;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var20 = var9 == var10;
            var17 = undefined;
            if(var20) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var20 = var10.profileFrame;
            var22 = var9 == var20;
            var17 = undefined;
            if(var22) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var17 = var20.skuId;
case 27:
            var6['skuId'] = var17;
            var6['openedAt'] = var11;
            var6['context'] = var12;
            var6['analyticsLocations'] = var14;
            var6 = var7.bind(var5)(var6);
            var20 = _closure1_slot4;
            var17 = var20.useMemo;
            var7 = new Array(2);
            var7[0] = var28;
            var7[1] = var27;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot25;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0003_ip = 30; continue _fun0003 }
case 11:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot25;
                    var2['frame'] = var7;
                    var6 = _closure2_slot19;
                    var2['containerWidth'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 30:
                    return var1;
                }
            };
            var30 = var17.bind(var20)(var6, var7);
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 25;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            if(!var31) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!(var5 === var36)) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var17 = var9 == var10;
            var6 = undefined;
            if(var17) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var17 = var10.profileEffect;
            var20 = var9 == var17;
            var6 = undefined;
            if(var20) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var6 = var17.skuId;
case 34:
            _fun0001_ip = 37; continue _fun0001;
case 33:
            var20 = var9 == var36;
            var17 = undefined;
            if(var20) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var17 = var36.skuId;
case 38:
            var6 = var17;
case 37:
            var40 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 26;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var34;
            var6['displayProfile'] = var10;
            var17 = undefined;
            if(!var31) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var17 = var18;
case 40:
            var6['pendingThemeColors'] = var17;
            var6 = var7.bind(var5)(var6);
            var17 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var44 = _closure1_slot1;
            var45 = _closure1_slot2;
            var18 = 27;
            var18 = var45[var18];
            var20 = var44.bind(var5)(var18);
            var18 = _closure1_slot14;
            var22 = var20.bind(var5)(var18);
            var18 = 28;
            var18 = var45[var18];
            var18 = var44.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var32 = var18.height;
            var20 = var18.width;
            _closure2_slot26 = var20;
            var18 = 29;
            var18 = var45[var18];
            var18 = var44.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var26 = var18.top;
            var37 = _closure1_slot0;
            var18 = 30;
            var18 = var45[var18];
            var18 = var37.bind(var5)(var18);
            var18 = var18.NAV_BAR_HEIGHT_MULTILINE;
            var18 = var32 - var18;
            var32 = var18 - var26;
            var18 = _closure1_slot4;
            var42 = var18.useMemo;
            var26 = new Array(3);
            var26[0] = var31;
            var26[1] = var28;
            var26[2] = var20;
            var20 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var3 = _closure2_slot25;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 42; continue _fun0004 }
case 44:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.min;
                    var3 = _closure2_slot26;
                    var2 = _closure1_slot14;
                    var3 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.bind(var2)(var3);
                    var1 = var1.overflowTop;
                    return var1;
case 42:
                    var1 = 0;
                    return var1;
                }
            };
            var20 = var42.bind(var18)(var20, var26);
            var26 = 32;
            var26 = var45[var26];
            var26 = var44.bind(var5)(var26);
            var42 = var26.bind(var5)();
            var26 = 33;
            var26 = var45[var26];
            var46 = var37.bind(var5)(var26);
            var37 = var46.useToken;
            var26 = 13;
            var26 = var45[var26];
            var26 = var44.bind(var5)(var26);
            var26 = var26.colors;
            var26 = var26.INTERACTIVE_TEXT_HOVER;
            var26 = var37.bind(var46)(var26, var17);
            var37 = 34;
            var37 = var45[var37];
            var44 = var44.bind(var5)(var37);
            var37 = {};
            var37['userId'] = var1;
            var37['user'] = var34;
            var37['channelId'] = var19;
            var37['guildId'] = var43;
            var37['displayProfile'] = var10;
            var37['guildMember'] = var16;
            var44 = var44.bind(var5)(var37);
            _closure2_slot27 = var44;
            var46 = var18.useMemo;
            var45 = new Array(2);
            var45[0] = var34;
            var45[1] = var19;
            var37 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 45; continue _fun0005 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 35;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 45:
                    return var1;
                }
            };
            var37 = var46.bind(var18)(var37, var45);
            _closure2_slot28 = var37;
            var46 = var18.useEffect;
            var45 = new Array(2);
            var45[0] = var34;
            var45[1] = var1;
            var37 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 36;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var46.bind(var18)(var37, var45);
            var45 = var18.useEffect;
            var37 = new Array(3);
            var37[0] = var34;
            var37[1] = var43;
            var37[2] = var19;
            var19 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 11:
                    var3 = _closure2_slot10;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 37;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot10;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 49:
                    var1 = var2;
case 48:
                    if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 38;
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
                    if(!var8) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var6 = _closure2_slot1;
case 53:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var45.bind(var18)(var19, var37);
            var37 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var44;
            var19[1] = var10;
            var19[2] = var43;
            var19[3] = var41;
            var19[4] = var16;
            var16 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0008_ip = 44; continue _fun0008 }
case 43:
                    var4 = _closure2_slot14;
                    var3 = null;
                    var2 = var3 == var4;
case 44:
                    if(var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var3 = _closure2_slot13;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var5 = _closure2_slot13;
                    var3 = var5.fullProfileLoadedTimestamp;
case 59:
                    var2 = var4 != var3;
case 57:
                    if(!var2) { _fun0008_ip = 55; continue _fun0008 }
case 61:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 39;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot11;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot27;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var37.bind(var18)(var16, var19);
            var16 = var18.useEffect;
            var37 = var9 == var15;
            var19 = undefined;
            if(var37) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var19 = var15.skuId;
case 62:
            var15 = new Array(4);
            var15[0] = var19;
            var37 = var9 == var36;
            var19 = undefined;
            if(var37) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var19 = var36.skuId;
case 64:
            var15[1] = var19;
            var36 = var9 == var23;
            var19 = undefined;
            if(var36) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var19 = var23.skuId;
case 66:
            var15[2] = var19;
            var15[3] = var4;
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
                    if(!(var4 === var3)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 39;
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
                    if(var7) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var7 = _closure2_slot21;
                    var6 = var7.skuId;
case 70:
                    if(!(var9 == var6)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                    var7 = _closure2_slot22;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var10 = _closure2_slot22;
                    var7 = var10.skuId;
case 74:
                    var6 = var7;
case 72:
                    if(!(var9 == var6)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var7 = _closure2_slot23;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0009_ip = 78; continue _fun0009 }
case 51:
                    var8 = _closure2_slot23;
                    var7 = var8.skuId;
case 78:
                    var6 = var7;
case 76:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 68:
                    return var1;
                }
            };
            var4 = var16.bind(var18)(var4, var15);
            var15 = _closure1_slot4;
            var16 = var15.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 56; continue _fun0010 }
case 47:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var16.bind(var15)(var3, var4);
            var4 = var15.useEffect;
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
                            if(var4) { _fun0012_ip = 79; continue _fun0012 }
case 44:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0012_ip = 79; continue _fun0012 }
case 10:
                            var3 = var4.key;
case 79:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 41;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 42;
                            var2 = var6[var2];
                            var6 = var5.bind(var1)(var2);
                            var5 = var6.getUserProfileActionSheetKey;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
case 80:
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0011_ip = 30; continue _fun0011 }
case 82:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0011_ip = 83; continue _fun0011 }
case 30:
                    return var2;
case 83:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                    var2 = var3.key;
case 84:
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
            var1 = var4.bind(var15)(var1, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 43;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot29 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot15;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot24;
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
            if(!(var9 != var34)) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var4 = _closure1_slot15;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var36 = 48;
            var1 = var15[var36];
            var1 = var16.bind(var5)(var1);
            var3 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var17;
            var1['primaryColor'] = var7;
            var1['secondaryColor'] = var6;
            var6 = var15[var2];
            var6 = var16.bind(var5)(var6);
            var7 = var6.AnalyticsLocationProvider;
            var6 = {};
            var6['value'] = var14;
            var15 = var15[var13];
            var15 = var16.bind(var5)(var15);
            var16 = var15.UserProfileAnalyticsProvider;
            var15 = {};
            var15['value'] = var12;
            var15['openedAt'] = var11;
            var18 = var9 == var10;
            var17 = undefined;
            if(var18) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var17 = var10.fetchStartedAt;
case 88:
            var15['fetchStartedAt'] = var17;
            var18 = var9 == var10;
            var17 = undefined;
            if(var18) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var17 = var10.fetchEndedAt;
case 90:
            var15['fetchEndedAt'] = var17;
            var18 = var9 == var10;
            var17 = undefined;
            if(var18) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var17 = var10.isLoaded;
case 92:
            var15['isLoaded'] = var17;
            var19 = _closure1_slot17;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 44;
            var17 = var23[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.BottomSheet;
            var17 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var17['ref'] = var21;
            var44 = true;
            var20 = var32 - var20;
            var17['maxHeight'] = var20;
            var20 = var38.noPadding;
            var17['contentStyles'] = var20;
            var21 = _closure1_slot16;
            var20 = {};
            var23 = new Array(2);
            var23[0] = var30;
            var30 = var31;
            if(!var30) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var41 = _closure1_slot15;
            var49 = _closure1_slot0;
            var51 = _closure1_slot2;
            var36 = var51[var36];
            var36 = var49.bind(var5)(var36);
            var37 = var36.ThemeContextProvider;
            var36 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var36['theme'] = var42;
            var42 = 49;
            var42 = var51[var42];
            var42 = var49.bind(var5)(var42);
            var43 = var42.ActionSheetBackdropToast;
            var42 = {};
            var50 = 47;
            var45 = var51[var50];
            var45 = var49.bind(var5)(var45);
            var47 = var45.intl;
            var46 = var47.string;
            var45 = 50;
            var45 = var51[var45];
            var45 = var49.bind(var5)(var45);
            var45 = var45.ProfileVisibility;
            var45 = var45.FRIENDS_ONLY;
            if(!(var48 !== var45)) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var48 = _closure1_slot0;
            var45 = _closure1_slot2;
            var45 = var45[var50];
            var45 = var48.bind(var5)(var45);
            var45 = var45.t;
            var45 = var45.wSnI/0;
            _fun0001_ip = 98; continue _fun0001;
case 96:
            var49 = _closure1_slot0;
            var48 = _closure1_slot2;
            var48 = var48[var50];
            var48 = var49.bind(var5)(var48);
            var48 = var48.t;
            var45 = var48.mNZcD8;
case 98:
            var45 = var46.bind(var47)(var45);
            var42['text'] = var45;
            var42['isExpanded'] = var44;
            var42 = var41.bind(var5)(var43, var42);
            var36['children'] = var42;
            var30 = var41.bind(var5)(var37, var36);
case 94:
            var23[1] = var30;
            var20['children'] = var23;
            var20 = var19.bind(var5)(var21, var20);
            var17['backdropChildren'] = var20;
            var23 = _closure1_slot15;
            var21 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 51;
            var20 = var30[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['gradientHeight'] = var32;
            var20['bannerHeight'] = var22;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(4);
            var20[0] = var21;
            var22 = _closure1_slot0;
            var21 = 52;
            var21 = var30[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.BottomSheetScrollView;
            var21 = {};
            var21['scrollsToTop'] = var29;
            var29 = var38.container;
            var21['style'] = var29;
            var29 = {};
            var30 = undefined;
            if(!var31) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var30 = 'none';
case 99:
            var29['pointerEvents'] = var30;
            var21['contentContainerStyle'] = var29;
            var21['ref'] = var25;
            var30 = _closure1_slot17;
            var29 = _closure1_slot5;
            var25 = {};
            var32 = _closure1_slot15;
            var31 = {};
            var36 = var38.bounceOffset;
            var31['style'] = var36;
            var32 = var32.bind(var5)(var29, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var36 = var38.profileContainer;
            var32['style'] = var36;
            var32['onLayout'] = var35;
            var33 = function(arg1) {
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
                        var1 = 53;
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
                        var1 = 53;
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
                    if(var3) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                    var1 = var1.bot;
                    var7 = _closure1_slot15;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                    var1 = 56;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0013_ip = 105; continue _fun0013;
case 103:
                    var3 = 55;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
case 105:
                    _fun0013_ip = 106; continue _fun0013;
case 101:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 54;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 106:
                    return var1;
                }
            };
            var34 = var33.bind(var5)(var34);
            var33 = new Array(2);
            var33[0] = var34;
            var34 = var9 != var40;
            if(!var34) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var37 = _closure1_slot15;
            var36 = _closure1_slot1;
            var41 = _closure1_slot2;
            var35 = 57;
            var35 = var41[var35];
            var36 = var36.bind(var5)(var35);
            var35 = {};
            var40 = var40.skuId;
            var35['skuId'] = var40;
            var35['bannerAdjustment'] = var39;
            var38 = var38.profileEffect;
            var35['style'] = var38;
            var34 = var37.bind(var5)(var36, var35);
case 107:
            var33[1] = var34;
            var32['children'] = var33;
            var32 = var30.bind(var5)(var29, var32);
            var31[1] = var32;
            var25['children'] = var31;
            var25 = var30.bind(var5)(var29, var25);
            var21['children'] = var25;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var21 = var9 != var28;
            if(!var21) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var25 = _closure1_slot15;
            var23 = _closure1_slot1;
            var30 = _closure1_slot2;
            var22 = 58;
            var22 = var30[var22];
            var23 = var23.bind(var5)(var22);
            var22 = {};
            var22['frame'] = var28;
            var28 = _closure1_slot10;
            var28 = var28.ACTION_SHEET;
            var22['profileThemeType'] = var28;
            var29 = _closure1_slot0;
            var28 = 14;
            var28 = var30[var28];
            var28 = var29.bind(var5)(var28);
            var28 = var28.ProfileFrameLayerOrder;
            var28 = var28.FRONT;
            var22['frameOrder'] = var28;
            var22['containerWidth'] = var27;
            var21 = var25.bind(var5)(var23, var22);
case 109:
            var20[2] = var21;
            var23 = _closure1_slot15;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 59;
            var21 = var25[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.ActionSheetHeaderBar;
            var21 = {};
            var25 = 'floating';
            var21['variant'] = var25;
            var25 = {};
            var25['backgroundColor'] = var26;
            var21['tabStyle'] = var25;
            var21['onPress'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[3] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var15['children'] = var17;
            var15 = var4.bind(var5)(var16, var15);
            var6['children'] = var15;
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 111; continue _fun0001;
case 86:
            var4 = _closure1_slot15;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var14;
            var6 = var6[var13];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileAnalyticsProvider;
            var6 = {};
            var6['value'] = var12;
            var6['openedAt'] = var11;
            var12 = var9 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var11 = var10.fetchStartedAt;
case 112:
            var6['fetchStartedAt'] = var11;
            var12 = var9 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var11 = var10.fetchEndedAt;
case 114:
            var6['fetchEndedAt'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var9 = var10.isLoaded;
case 116:
            var6['isLoaded'] = var9;
            var10 = _closure1_slot15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 44;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var11 = 45;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.EmptyState;
            var11 = {};
            var13 = {};
            var14 = 42;
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 46;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 47;
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
case 111:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 60;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();