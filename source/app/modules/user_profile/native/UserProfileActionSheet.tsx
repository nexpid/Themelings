// app/modules/user_profile/native/UserProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var4 = var14.bind(var1)(var4);
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
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot10 = var8;
    var8 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var13 = 11;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var13;
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
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var19 = var2.channelId;
            var _closure2_slot1 = var19;
            var42 = var2.messageId;
            var41 = var2.roleId;
            var44 = var2.sessionId;
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
            var10 = var2.openedAt;
            var29 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var29 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var29 = false;
case 2:
            var _closure2_slot7 = var29;
            var40 = var2.showGuildProfile;
            if(!(var40 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var40 = true;
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
            var2 = _closure1_slot16;
            var36 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 12;
            var8 = var2[var6];
            var13 = var7.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var32 = var12.bind(var13)(var9, var8);
            _closure2_slot10 = var32;
            var2 = var2[var6];
            var12 = var7.bind(var5)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
            var7 = new Array(1);
            var7[0] = var19;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var12)(var8, var2, var7);
            _closure2_slot11 = var2;
            var8 = null;
            var7 = var8 == var2;
            var33 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var33 = var2.guild_id;
case 8:
            _closure2_slot12 = var33;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var6];
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
            var2 = 13;
            var2 = var9[var2];
            var9 = var7.bind(var5)(var2);
            var2 = var8 == var32;
            var7 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var32.id;
case 12:
            if(!(var8 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot11;
case 14:
            var2 = undefined;
            if(!var40) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var33;
case 16:
            var9 = var9.bind(var5)(var7, var2);
            _closure2_slot14 = var9;
            var17 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 14;
            var7 = var12[var2];
            var13 = var17.bind(var5)(var7);
            var7 = new Array(1);
            var37 = 0;
            var49 = var7;
            var48 = var4;
            var47 = 0;
            var14 = arraySpread(var49, var48, var47);
            var15 = 15;
            var15 = var12[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.USER_PROFILE_ACTION_SHEET;
            var7[var14] = var15;
            var15 = 1;
            var14 = var14 + var15;
            var7 = var13.bind(var5)(var7);
            var14 = var7.analyticsLocations;
            _closure2_slot15 = var14;
            var7 = _closure1_slot0;
            var13 = 16;
            var13 = var12[var13];
            var17 = var7.bind(var5)(var13);
            var13 = var17.useBottomSheetRef;
            var13 = var13.bind(var17)();
            var20 = var13.bottomSheetRef;
            var24 = var13.bottomSheetClose;
            var17 = _closure1_slot4;
            var13 = var17.useRef;
            var25 = var13.bind(var17)(var8);
            _closure2_slot16 = var25;
            var13 = var17.useState;
            var27 = false;
            var18 = var13.bind(var17)(var27);
            var17 = _closure1_slot3;
            var13 = 2;
            var13 = var17.bind(var5)(var18, var13);
            var23 = var13[var37];
            _closure2_slot17 = var23;
            var13 = var13[var15];
            _closure2_slot18 = var13;
            var13 = 17;
            var13 = var12[var13];
            var13 = var7.bind(var5)(var13);
            var15 = var13.ProfileVisibility;
            var13 = var15.useSetting;
            var43 = var13.bind(var15)();
            var6 = var12[var6];
            var17 = var7.bind(var5)(var6);
            var15 = var17.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var15.bind(var17)(var13, var6);
            var13 = var6.pendingThemeColors;
            var15 = var6.pendingAvatarDecoration;
            _closure2_slot19 = var15;
            var21 = var6.pendingProfileEffect;
            _closure2_slot20 = var21;
            var6 = 18;
            var6 = var12[var6];
            var12 = var7.bind(var5)(var6);
            var7 = var12.useProfileEffectPreset;
            if(!var29) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var21)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var17 = var8 == var9;
            var6 = undefined;
            if(var17) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var17 = var9.profileEffect;
            var18 = var8 == var17;
            var6 = undefined;
            if(var18) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var6 = var17.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var18 = var8 == var21;
            var17 = undefined;
            if(var18) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var21.skuId;
case 25:
            var6 = var17;
case 24:
            var38 = var7.bind(var12)(var6);
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 19;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var32;
            var6['displayProfile'] = var9;
            var12 = undefined;
            if(!var29) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = var13;
case 27:
            var6['pendingThemeColors'] = var12;
            var6 = var7.bind(var5)(var6);
            var17 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var22 = _closure1_slot1;
            var12 = _closure1_slot2;
            var13 = 20;
            var13 = var12[var13];
            var18 = var22.bind(var5)(var13);
            var13 = _closure1_slot13;
            var30 = var18.bind(var5)(var13);
            var13 = 21;
            var13 = var12[var13];
            var13 = var22.bind(var5)(var13);
            var13 = var13.bind(var5)();
            var35 = var13.height;
            var13 = 22;
            var13 = var12[var13];
            var13 = var22.bind(var5)(var13);
            var13 = var13.bind(var5)();
            var34 = var13.top;
            var13 = 23;
            var13 = var12[var13];
            var13 = var22.bind(var5)(var13);
            var28 = var13.bind(var5)();
            var18 = _closure1_slot0;
            var13 = 24;
            var13 = var12[var13];
            var39 = var18.bind(var5)(var13);
            var26 = var39.useToken;
            var13 = 11;
            var13 = var12[var13];
            var13 = var22.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.INTERACTIVE_TEXT_HOVER;
            var26 = var26.bind(var39)(var13, var17);
            var13 = 25;
            var13 = var12[var13];
            var22 = var22.bind(var5)(var13);
            var13 = {};
            var13['userId'] = var1;
            var13['user'] = var32;
            var13['channelId'] = var19;
            var13['guildId'] = var33;
            var13['displayProfile'] = var9;
            var13['guildMember'] = var16;
            var39 = var22.bind(var5)(var13);
            _closure2_slot21 = var39;
            var13 = 26;
            var12 = var12[var13];
            var22 = var18.bind(var5)(var12);
            var18 = var22.useCreateUserProfileAnalyticsContext;
            var12 = {};
            var45 = 'ACTION_SHEET';
            var12['layout'] = var45;
            var12['sourceSessionId'] = var44;
            var12['userId'] = var1;
            var12['guildId'] = var33;
            var12['channelId'] = var19;
            var12['messageId'] = var42;
            var12['roleId'] = var41;
            var12['showGuildProfile'] = var40;
            var12 = var18.bind(var22)(var12);
            _closure2_slot22 = var12;
            var18 = _closure1_slot4;
            var41 = var18.useMemo;
            var40 = new Array(2);
            var40[0] = var32;
            var40[1] = var19;
            var22 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 29; continue _fun0003 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 29:
                    return var1;
                }
            };
            var22 = var41.bind(var18)(var22, var40);
            _closure2_slot23 = var22;
            var41 = var18.useEffect;
            var40 = new Array(2);
            var40[0] = var32;
            var40[1] = var1;
            var22 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var41.bind(var18)(var22, var40);
            var40 = var18.useEffect;
            var22 = new Array(3);
            var22[0] = var32;
            var22[1] = var33;
            var22[2] = var19;
            var19 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0005_ip = 32; continue _fun0005 }
case 11:
                    var3 = _closure2_slot10;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot10;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 33:
                    var1 = var2;
case 32:
                    if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 30;
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
                    if(!var8) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var6 = _closure2_slot1;
case 37:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var40.bind(var18)(var19, var22);
            var22 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var39;
            var19[1] = var9;
            var19[2] = var33;
            var19[3] = var23;
            var19[4] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var4 = _closure2_slot14;
                    var3 = null;
                    var2 = var3 == var4;
case 39:
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var3 = _closure2_slot13;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var5 = _closure2_slot13;
                    var3 = var5.fullProfileLoadedTimestamp;
case 45:
                    var2 = var4 != var3;
case 43:
                    if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 47:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 31;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot10;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot21;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var22.bind(var18)(var16, var19);
            var16 = var18.useEffect;
            var22 = var8 == var15;
            var19 = undefined;
            if(var22) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var19 = var15.skuId;
case 48:
            var15 = new Array(3);
            var15[0] = var19;
            var22 = var8 == var21;
            var19 = undefined;
            if(var22) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var19 = var21.skuId;
case 50:
            var15[1] = var19;
            var15[2] = var4;
            var4 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.at;
                    var1 = -1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 31;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var6 = 'Collectibles Shop Details Modal Expanded';
                    var2['type'] = var6;
                    var6 = _closure2_slot8;
                    var2['location_stack'] = var6;
                    var6 = _closure2_slot19;
                    var9 = null;
                    var7 = var9 == var6;
                    var6 = undefined;
                    if(var7) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var7 = _closure2_slot19;
                    var6 = var7.skuId;
case 54:
                    if(!(var9 == var6)) { _fun0007_ip = 38; continue _fun0007 }
case 56:
                    var7 = _closure2_slot20;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var8 = _closure2_slot20;
                    var7 = var8.skuId;
case 57:
                    var6 = var7;
case 38:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 52:
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0008_ip = 42; continue _fun0008 }
case 31:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 42:
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = function handleNavigationChange() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = null;
                            var4 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0010_ip = 59; continue _fun0010 }
case 39:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0010_ip = 59; continue _fun0010 }
case 10:
                            var3 = var4.key;
case 59:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 33;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 34;
                            var2 = var6[var2];
                            var6 = var5.bind(var1)(var2);
                            var5 = var6.getUserProfileActionSheetKey;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
case 60:
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0009_ip = 62; continue _fun0009 }
case 61:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0009_ip = 63; continue _fun0009 }
case 62:
                    return var2;
case 63:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var2 = var3.key;
case 64:
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
            var1 = 35;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot24 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot15;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot22;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot25 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot24;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot25;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot26 = var1;
            if(!(var8 != var32)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var4 = _closure1_slot14;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var21 = 40;
            var1 = var15[var21];
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
            var15['openedAt'] = var10;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var17 = var9.fetchStartedAt;
case 68:
            var15['fetchStartedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var17 = var9.fetchEndedAt;
case 70:
            var15['fetchEndedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var17 = var9.isLoaded;
case 72:
            var15['isLoaded'] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 36;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.BottomSheet;
            var17 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var17['ref'] = var20;
            var39 = true;
            var20 = var36.noPadding;
            var17['contentStyles'] = var20;
            var20 = undefined;
            if(!var29) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var23 = _closure1_slot14;
            var44 = _closure1_slot0;
            var46 = _closure1_slot2;
            var21 = var46[var21];
            var21 = var44.bind(var5)(var21);
            var22 = var21.ThemeContextProvider;
            var21 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var21['theme'] = var28;
            var28 = 41;
            var28 = var46[var28];
            var28 = var44.bind(var5)(var28);
            var33 = var28.ActionSheetBackdropToast;
            var28 = {};
            var45 = 39;
            var40 = var46[var45];
            var40 = var44.bind(var5)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = 42;
            var40 = var46[var40];
            var40 = var44.bind(var5)(var40);
            var40 = var40.ProfileVisibility;
            var40 = var40.FRIENDS_ONLY;
            if(!(var43 !== var40)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var43 = _closure1_slot0;
            var40 = _closure1_slot2;
            var40 = var40[var45];
            var40 = var43.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.wSnI/0;
            _fun0001_ip = 78; continue _fun0001;
case 76:
            var44 = _closure1_slot0;
            var43 = _closure1_slot2;
            var43 = var43[var45];
            var43 = var44.bind(var5)(var43);
            var43 = var43.t;
            var40 = var43.mNZcD8;
case 78:
            var40 = var41.bind(var42)(var40);
            var28['text'] = var40;
            var28['isExpanded'] = var39;
            var28 = var23.bind(var5)(var33, var28);
            var21['children'] = var28;
            var20 = var23.bind(var5)(var22, var21);
case 74:
            var17['backdropChildren'] = var20;
            var23 = _closure1_slot14;
            var21 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 43;
            var20 = var28[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var22 = _closure1_slot0;
            var33 = 44;
            var33 = var28[var33];
            var33 = var22.bind(var5)(var33);
            var33 = var33.NAV_BAR_HEIGHT_MULTILINE;
            var33 = var35 - var33;
            var33 = var33 - var34;
            var20['gradientHeight'] = var33;
            var20['bannerHeight'] = var30;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(3);
            var20[0] = var21;
            var21 = 45;
            var21 = var28[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.BottomSheetScrollView;
            var21 = {};
            var21['scrollsToTop'] = var27;
            var27 = var36.container;
            var21['style'] = var27;
            var27 = {};
            var28 = undefined;
            if(!var29) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var28 = 'none';
case 79:
            var27['pointerEvents'] = var28;
            var21['contentContainerStyle'] = var27;
            var21['ref'] = var25;
            var28 = _closure1_slot15;
            var27 = _closure1_slot5;
            var25 = {};
            var30 = _closure1_slot14;
            var29 = {};
            var33 = var36.bounceOffset;
            var29['style'] = var33;
            var30 = var30.bind(var5)(var27, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var30 = {};
            var33 = var36.profileContainer;
            var30['style'] = var33;
            var31 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                    var4 = _closure2_slot23;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot16;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot12;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot26;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot12;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot26;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var3 = _closure2_slot25;
                    var6['showUserProfileActionSheet'] = var3;
                    var2 = _closure2_slot9;
                    var6['initialSection'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0011_ip = 81; continue _fun0011 }
case 56:
                    var1 = var1.bot;
                    var7 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0011_ip = 82; continue _fun0011 }
case 83:
                    var1 = 49;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0011_ip = 84; continue _fun0011;
case 82:
                    var3 = 48;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
case 84:
                    _fun0011_ip = 85; continue _fun0011;
case 81:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 47;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 85:
                    return var1;
                }
            };
            var32 = var31.bind(var5)(var32);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var8 != var38;
            if(!var32) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var35 = _closure1_slot14;
            var34 = _closure1_slot1;
            var39 = _closure1_slot2;
            var33 = 50;
            var33 = var39[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var38 = var38.skuId;
            var33['skuId'] = var38;
            var33['bannerAdjustment'] = var37;
            var36 = var36.profileEffect;
            var33['style'] = var36;
            var32 = var35.bind(var5)(var34, var33);
case 86:
            var31[1] = var32;
            var30['children'] = var31;
            var30 = var28.bind(var5)(var27, var30);
            var29[1] = var30;
            var25['children'] = var29;
            var25 = var28.bind(var5)(var27, var25);
            var21['children'] = var25;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var23 = _closure1_slot14;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 51;
            var21 = var28[var21];
            var21 = var27.bind(var5)(var21);
            var22 = var21.ActionSheetHeaderBar;
            var21 = {};
            var25 = 52;
            var25 = var28[var25];
            var25 = var27.bind(var5)(var25);
            var25 = var25.ActionSheetHeaderBarVariants;
            var25 = var25.FLOATING;
            var21['variant'] = var25;
            var25 = {};
            var25['backgroundColor'] = var26;
            var21['tabStyle'] = var25;
            var21['onPress'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[2] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var15['children'] = var17;
            var15 = var4.bind(var5)(var16, var15);
            var6['children'] = var15;
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 88; continue _fun0001;
case 66:
            var4 = _closure1_slot14;
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
            var6['openedAt'] = var10;
            var12 = var8 == var9;
            var10 = undefined;
            if(var12) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var10 = var9.fetchStartedAt;
case 89:
            var6['fetchStartedAt'] = var10;
            var12 = var8 == var9;
            var10 = undefined;
            if(var12) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var10 = var9.fetchEndedAt;
case 91:
            var6['fetchEndedAt'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var8 = var9.isLoaded;
case 93:
            var6['isLoaded'] = var8;
            var10 = _closure1_slot14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 36;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 37;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var13 = {};
            var14 = 42;
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 38;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 39;
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
case 88:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();