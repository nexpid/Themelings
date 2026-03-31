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
    var14 = var4.PROFILE_FRAME_Z_INDEX;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var13 = 12;
    var13 = var6[var13];
    var13 = var15.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var13;
    var13 = 13;
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
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var18 = var2.channelId;
            var _closure2_slot1 = var18;
            var45 = var2.messageId;
            var43 = var2.roleId;
            var46 = var2.sessionId;
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
            var28 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var28 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var28 = false;
case 2:
            var _closure2_slot7 = var28;
            var42 = var2.showGuildProfile;
            if(!(var42 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var42 = true;
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
            var2 = _closure1_slot16;
            var36 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 14;
            var8 = var2[var6];
            var12 = var7.bind(var5)(var8);
            var10 = var12.useStateFromStores;
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
            var32 = var10.bind(var12)(var9, var8);
            _closure2_slot10 = var32;
            var2 = var2[var6];
            var10 = var7.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
            var7 = new Array(1);
            var7[0] = var18;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var8, var2, var7);
            _closure2_slot11 = var2;
            var8 = null;
            var7 = var8 == var2;
            var40 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var40 = var2.guild_id;
case 8:
            _closure2_slot12 = var40;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var6];
            var12 = var7.bind(var5)(var2);
            var10 = var12.useStateFromStores;
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
            var15 = var10.bind(var12)(var7, var2);
            _closure2_slot13 = var15;
            var7 = _closure1_slot1;
            var2 = 15;
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
            if(!var42) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var40;
case 16:
            var9 = var9.bind(var5)(var7, var2);
            _closure2_slot14 = var9;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 16;
            var7 = var12[var2];
            var13 = var10.bind(var5)(var7);
            var7 = new Array(1);
            var37 = 0;
            var50 = var7;
            var49 = var4;
            var48 = 0;
            var16 = arraySpread(var50, var49, var48);
            var14 = 17;
            var14 = var12[var14];
            var14 = var10.bind(var5)(var14);
            var14 = var14.USER_PROFILE_ACTION_SHEET;
            var7[var16] = var14;
            var14 = 1;
            var16 = var16 + var14;
            var7 = var13.bind(var5)(var7);
            var13 = var7.analyticsLocations;
            _closure2_slot15 = var13;
            var16 = _closure1_slot0;
            var7 = 18;
            var7 = var12[var7];
            var16 = var16.bind(var5)(var7);
            var7 = var16.useBottomSheetRef;
            var7 = var7.bind(var16)();
            var21 = var7.bottomSheetRef;
            var23 = var7.bottomSheetClose;
            var16 = _closure1_slot4;
            var7 = var16.useRef;
            var24 = var7.bind(var16)(var8);
            _closure2_slot16 = var24;
            var7 = var16.useState;
            var26 = false;
            var17 = var7.bind(var16)(var26);
            var16 = _closure1_slot3;
            var7 = 2;
            var7 = var16.bind(var5)(var17, var7);
            var34 = var7[var37];
            _closure2_slot17 = var34;
            var7 = var7[var14];
            _closure2_slot18 = var7;
            var7 = 19;
            var7 = var12[var7];
            var12 = var10.bind(var5)(var7);
            var7 = var8 == var9;
            var10 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var9.profileFrame;
            var14 = var8 == var7;
            var10 = undefined;
            if(var14) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var10 = var7.skuId;
case 18:
            var7 = 'UserProfileActionSheet';
            var10 = var12.bind(var5)(var10, var7);
            var30 = var10.renderProfileFrame;
            var7 = var10.renderProfileFrameBackdrop;
            _closure2_slot19 = var7;
            var33 = var10.onContainerLayout;
            var14 = _closure1_slot4;
            var12 = var14.useMemo;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot19;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = _closure2_slot19;
                    var1 = var2.bind(var3)();
case 21:
                    return var1;
                }
            };
            var19 = var12.bind(var14)(var7, var10);
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 20;
            var12 = var10[var12];
            var12 = var7.bind(var5)(var12);
            var14 = var12.ProfileVisibility;
            var12 = var14.useSetting;
            var44 = var12.bind(var14)();
            var6 = var10[var6];
            var16 = var7.bind(var5)(var6);
            var14 = var16.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var14.bind(var16)(var12, var6);
            var12 = var6.pendingThemeColors;
            var14 = var6.pendingAvatarDecoration;
            _closure2_slot20 = var14;
            var20 = var6.pendingProfileEffect;
            _closure2_slot21 = var20;
            var6 = 21;
            var6 = var10[var6];
            var10 = var7.bind(var5)(var6);
            var7 = var10.useProfileEffectPreset;
            if(!var28) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(!(var5 === var20)) { _fun0001_ip = 25; continue _fun0001 }
case 23:
            var16 = var8 == var9;
            var6 = undefined;
            if(var16) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var16 = var9.profileEffect;
            var17 = var8 == var16;
            var6 = undefined;
            if(var17) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var6 = var16.skuId;
case 26:
            _fun0001_ip = 29; continue _fun0001;
case 25:
            var17 = var8 == var20;
            var16 = undefined;
            if(var17) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var16 = var20.skuId;
case 30:
            var6 = var16;
case 29:
            var38 = var7.bind(var10)(var6);
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 22;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var32;
            var6['displayProfile'] = var9;
            var10 = undefined;
            if(!var28) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = var12;
case 32:
            var6['pendingThemeColors'] = var10;
            var6 = var7.bind(var5)(var6);
            var16 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var22 = _closure1_slot1;
            var10 = _closure1_slot2;
            var12 = 23;
            var12 = var10[var12];
            var17 = var22.bind(var5)(var12);
            var12 = _closure1_slot13;
            var29 = var17.bind(var5)(var12);
            var12 = 24;
            var12 = var10[var12];
            var12 = var22.bind(var5)(var12);
            var12 = var12.bind(var5)();
            var39 = var12.height;
            var12 = 25;
            var12 = var10[var12];
            var12 = var22.bind(var5)(var12);
            var12 = var12.bind(var5)();
            var35 = var12.top;
            var12 = 26;
            var12 = var10[var12];
            var12 = var22.bind(var5)(var12);
            var27 = var12.bind(var5)();
            var17 = _closure1_slot0;
            var12 = 27;
            var12 = var10[var12];
            var41 = var17.bind(var5)(var12);
            var25 = var41.useToken;
            var12 = 12;
            var12 = var10[var12];
            var12 = var22.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.INTERACTIVE_TEXT_HOVER;
            var25 = var25.bind(var41)(var12, var16);
            var12 = 28;
            var12 = var10[var12];
            var22 = var22.bind(var5)(var12);
            var12 = {};
            var12['userId'] = var1;
            var12['user'] = var32;
            var12['channelId'] = var18;
            var12['guildId'] = var40;
            var12['displayProfile'] = var9;
            var12['guildMember'] = var15;
            var41 = var22.bind(var5)(var12);
            _closure2_slot22 = var41;
            var12 = 29;
            var10 = var10[var12];
            var22 = var17.bind(var5)(var10);
            var17 = var22.useCreateUserProfileAnalyticsContext;
            var10 = {};
            var47 = 'ACTION_SHEET';
            var10['layout'] = var47;
            var10['sourceSessionId'] = var46;
            var10['userId'] = var1;
            var10['guildId'] = var40;
            var10['channelId'] = var18;
            var10['messageId'] = var45;
            var10['roleId'] = var43;
            var10['showGuildProfile'] = var42;
            var10 = var17.bind(var22)(var10);
            _closure2_slot23 = var10;
            var17 = _closure1_slot4;
            var43 = var17.useMemo;
            var42 = new Array(2);
            var42[0] = var32;
            var42[1] = var18;
            var22 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 30;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 34:
                    return var1;
                }
            };
            var22 = var43.bind(var17)(var22, var42);
            _closure2_slot24 = var22;
            var43 = var17.useEffect;
            var42 = new Array(2);
            var42[0] = var32;
            var42[1] = var1;
            var22 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 31;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var43.bind(var17)(var22, var42);
            var42 = var17.useEffect;
            var22 = new Array(3);
            var22[0] = var32;
            var22[1] = var40;
            var22[2] = var18;
            var18 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0006_ip = 37; continue _fun0006 }
case 11:
                    var3 = _closure2_slot10;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot10;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 38:
                    var1 = var2;
case 37:
                    if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 33;
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
                    if(!var8) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var6 = _closure2_slot1;
case 42:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var42.bind(var17)(var18, var22);
            var22 = var17.useEffect;
            var18 = new Array(5);
            var18[0] = var41;
            var18[1] = var9;
            var18[2] = var40;
            var18[3] = var34;
            var18[4] = var15;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0007_ip = 22; continue _fun0007 }
case 44:
                    var4 = _closure2_slot14;
                    var3 = null;
                    var2 = var3 == var4;
case 22:
                    if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var3 = _closure2_slot13;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var5 = _closure2_slot13;
                    var3 = var5.fullProfileLoadedTimestamp;
case 49:
                    var2 = var4 != var3;
case 47:
                    if(!var2) { _fun0007_ip = 45; continue _fun0007 }
case 51:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 34;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot10;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot22;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var22.bind(var17)(var15, var18);
            var15 = var17.useEffect;
            var22 = var8 == var14;
            var18 = undefined;
            if(var22) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var18 = var14.skuId;
case 52:
            var14 = new Array(3);
            var14[0] = var18;
            var22 = var8 == var20;
            var18 = undefined;
            if(var22) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var18 = var20.skuId;
case 54:
            var14[1] = var18;
            var14[2] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.at;
                    var1 = -1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 34;
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
                    var6 = _closure2_slot20;
                    var9 = null;
                    var7 = var9 == var6;
                    var6 = undefined;
                    if(var7) { _fun0008_ip = 58; continue _fun0008 }
case 6:
                    var7 = _closure2_slot20;
                    var6 = var7.skuId;
case 58:
                    if(!(var9 == var6)) { _fun0008_ip = 43; continue _fun0008 }
case 59:
                    var7 = _closure2_slot21;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var8 = _closure2_slot21;
                    var7 = var8.skuId;
case 60:
                    var6 = var7;
case 43:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 56:
                    return var1;
                }
            };
            var4 = var15.bind(var17)(var4, var14);
            var14 = _closure1_slot4;
            var15 = var14.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0009_ip = 46; continue _fun0009 }
case 36:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var15.bind(var14)(var3, var4);
            var4 = var14.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = function handleNavigationChange() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var5 = null;
                            var4 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0011_ip = 62; continue _fun0011 }
case 22:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0011_ip = 62; continue _fun0011 }
case 10:
                            var3 = var4.key;
case 62:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 36;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 37;
                            var2 = var6[var2];
                            var6 = var5.bind(var1)(var2);
                            var5 = var6.getUserProfileActionSheetKey;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
case 63:
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0010_ip = 65; continue _fun0010 }
case 64:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0010_ip = 66; continue _fun0010 }
case 65:
                    return var2;
case 66:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var2 = var3.key;
case 67:
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
            var4 = _closure1_slot2;
            var1 = 38;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot25 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot15;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot23;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot26 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot25;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot26;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot27 = var1;
            if(!(var8 != var32)) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var4 = _closure1_slot14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var20 = 43;
            var1 = var14[var20];
            var1 = var15.bind(var5)(var1);
            var3 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var16;
            var1['primaryColor'] = var7;
            var1['secondaryColor'] = var6;
            var6 = var14[var2];
            var6 = var15.bind(var5)(var6);
            var7 = var6.AnalyticsLocationProvider;
            var6 = {};
            var6['value'] = var13;
            var14 = var14[var12];
            var14 = var15.bind(var5)(var14);
            var15 = var14.UserProfileAnalyticsProvider;
            var14 = {};
            var14['value'] = var10;
            var17 = var8 == var9;
            var16 = undefined;
            if(var17) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var16 = var9.isLoaded;
case 71:
            var14['isLoaded'] = var16;
            var18 = _closure1_slot15;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 39;
            var16 = var22[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.BottomSheet;
            var16 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var16['ref'] = var21;
            var40 = true;
            var21 = var36.noPadding;
            var16['contentStyles'] = var21;
            if(!var28) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var22 = _closure1_slot14;
            var45 = _closure1_slot0;
            var47 = _closure1_slot2;
            var20 = var47[var20];
            var20 = var45.bind(var5)(var20);
            var21 = var20.ThemeContextProvider;
            var20 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var20['theme'] = var27;
            var27 = 44;
            var27 = var47[var27];
            var27 = var45.bind(var5)(var27);
            var34 = var27.ActionSheetBackdropToast;
            var27 = {};
            var46 = 42;
            var41 = var47[var46];
            var41 = var45.bind(var5)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = 45;
            var41 = var47[var41];
            var41 = var45.bind(var5)(var41);
            var41 = var41.ProfileVisibility;
            var41 = var41.FRIENDS_ONLY;
            if(!(var44 !== var41)) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var44 = _closure1_slot0;
            var41 = _closure1_slot2;
            var41 = var41[var46];
            var41 = var44.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.wSnI/0;
            _fun0001_ip = 77; continue _fun0001;
case 75:
            var45 = _closure1_slot0;
            var44 = _closure1_slot2;
            var44 = var44[var46];
            var44 = var45.bind(var5)(var44);
            var44 = var44.t;
            var41 = var44.mNZcD8;
case 77:
            var41 = var42.bind(var43)(var41);
            var27['text'] = var41;
            var27['isExpanded'] = var40;
            var27 = var22.bind(var5)(var34, var27);
            var20['children'] = var27;
            var19 = var22.bind(var5)(var21, var20);
case 73:
            var16['backdropChildren'] = var19;
            var22 = _closure1_slot14;
            var20 = _closure1_slot1;
            var27 = _closure1_slot2;
            var19 = 46;
            var19 = var27[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var21 = _closure1_slot0;
            var34 = 47;
            var34 = var27[var34];
            var34 = var21.bind(var5)(var34);
            var34 = var34.NAV_BAR_HEIGHT_MULTILINE;
            var34 = var39 - var34;
            var34 = var34 - var35;
            var19['gradientHeight'] = var34;
            var19['bannerHeight'] = var29;
            var20 = var22.bind(var5)(var20, var19);
            var19 = new Array(3);
            var19[0] = var20;
            var20 = 48;
            var20 = var27[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.BottomSheetScrollView;
            var20 = {};
            var20['scrollsToTop'] = var26;
            var26 = var36.container;
            var20['style'] = var26;
            var26 = {};
            var27 = undefined;
            if(!var28) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var27 = 'none';
case 78:
            var26['pointerEvents'] = var27;
            var20['contentContainerStyle'] = var26;
            var20['ref'] = var24;
            var27 = _closure1_slot15;
            var26 = _closure1_slot5;
            var24 = {};
            var29 = _closure1_slot14;
            var28 = {};
            var34 = var36.bounceOffset;
            var28['style'] = var34;
            var29 = var29.bind(var5)(var26, var28);
            var28 = new Array(3);
            var28[0] = var29;
            var29 = {};
            var34 = var36.profileContainer;
            var29['style'] = var34;
            var29['onLayout'] = var33;
            var31 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                    var4 = _closure2_slot24;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot16;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 49;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot12;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot27;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 49;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot12;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot27;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var3 = _closure2_slot26;
                    var6['showUserProfileActionSheet'] = var3;
                    var2 = _closure2_slot9;
                    var6['initialSection'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0012_ip = 80; continue _fun0012 }
case 59:
                    var1 = var1.bot;
                    var7 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var1 = 52;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0012_ip = 83; continue _fun0012;
case 81:
                    var3 = 51;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
case 83:
                    _fun0012_ip = 84; continue _fun0012;
case 80:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 50;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 84:
                    return var1;
                }
            };
            var32 = var31.bind(var5)(var32);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var8 != var38;
            if(!var32) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var35 = _closure1_slot14;
            var34 = _closure1_slot1;
            var39 = _closure1_slot2;
            var33 = 53;
            var33 = var39[var33];
            var34 = var34.bind(var5)(var33);
            var33 = {};
            var38 = var38.skuId;
            var33['skuId'] = var38;
            var33['bannerAdjustment'] = var37;
            var36 = var36.profileEffect;
            var33['style'] = var36;
            var32 = var35.bind(var5)(var34, var33);
case 85:
            var31[1] = var32;
            var29['children'] = var31;
            var29 = var27.bind(var5)(var26, var29);
            var28[1] = var29;
            var31 = var8 == var30;
            var29 = undefined;
            if(var31) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var29 = var30.bind(var5)();
case 87:
            var28[2] = var29;
            var24['children'] = var28;
            var24 = var27.bind(var5)(var26, var24);
            var20['children'] = var24;
            var20 = var22.bind(var5)(var21, var20);
            var19[1] = var20;
            var22 = _closure1_slot14;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 54;
            var20 = var27[var20];
            var20 = var26.bind(var5)(var20);
            var21 = var20.ActionSheetHeaderBar;
            var20 = {};
            var24 = 55;
            var24 = var27[var24];
            var24 = var26.bind(var5)(var24);
            var24 = var24.ActionSheetHeaderBarVariants;
            var24 = var24.FLOATING;
            var20['variant'] = var24;
            var24 = {};
            var24['backgroundColor'] = var25;
            var20['tabStyle'] = var24;
            var20['onPress'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19[2] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var14['children'] = var16;
            var14 = var4.bind(var5)(var15, var14);
            var6['children'] = var14;
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 89; continue _fun0001;
case 69:
            var4 = _closure1_slot14;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var13;
            var6 = var6[var12];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileAnalyticsProvider;
            var6 = {};
            var6['value'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var8 = var9.isLoaded;
case 90:
            var6['isLoaded'] = var8;
            var10 = _closure1_slot14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 39;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 40;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var14 = {};
            var13 = 42;
            var14['marginTop'] = var13;
            var11['style'] = var14;
            var14 = 41;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var14 = var14.NoResults;
            var11['Illustration'] = var14;
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
case 89:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 56;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();