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
    var4 = var14.bind(var1)(var4);
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
    var13 = var13.BACKGROUND_TERTIARY;
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
 0:
            var2 = arg1;
            var27 = var2.userId;
            var _closure2_slot0 = var27;
            var19 = var2.channelId;
            var _closure2_slot1 = var19;
            var42 = var2.messageId;
            var41 = var2.roleId;
            var43 = var2.sessionId;
            var1 = var2.disableCalls;
            var _closure2_slot2 = var1;
            var1 = var2.disableMessage;
            var _closure2_slot3 = var1;
            var1 = var2.isVoiceContext;
            var _closure2_slot4 = var1;
            var1 = var2.onClose;
            var _closure2_slot5 = var1;
            var3 = var2.location;
            var _closure2_slot6 = var3;
            var10 = var2.openedAt;
            var28 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var28 === var5)) { _fun0001_ip = 109; continue _fun0001 }
 107:
            var28 = false;
 109:
            var _closure2_slot7 = var28;
            var40 = var2.showGuildProfile;
            if(!(var40 === var5)) { _fun0001_ip = 125; continue _fun0001 }
 123:
            var40 = true;
 125:
            var15 = var2.sourceAnalyticsLocations;
            if(!(var15 === var5)) { _fun0001_ip = 139; continue _fun0001 }
 135:
            var15 = new Array(0);
 139:
            var _closure2_slot8 = var15;
            var _closure2_slot9 = var5;
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
            var2 = _closure1_slot16;
            var35 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 12;
            var6 = var2[var3];
            var9 = var4.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var8.bind(var9)(var7, var6);
            _closure2_slot9 = var31;
            var2 = var2[var3];
            var8 = var4.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var4 = new Array(1);
            var4[0] = var19;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var8)(var6, var2, var4);
            _closure2_slot10 = var2;
            var8 = null;
            var4 = var8 == var2;
            var34 = undefined;
            if(var4) { _fun0001_ip = 340; continue _fun0001 }
 335:
            var34 = var2.guild_id;
 340:
            _closure2_slot11 = var34;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var3];
            var9 = var4.bind(var5)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot11;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var16 = var7.bind(var9)(var4, var2);
            _closure2_slot12 = var16;
            var4 = _closure1_slot1;
            var2 = 13;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var2 = var8 == var31;
            var4 = undefined;
            if(var2) { _fun0001_ip = 423; continue _fun0001 }
 418:
            var4 = var31.id;
 423:
            if(!(var8 == var4)) { _fun0001_ip = 431; continue _fun0001 }
 427:
            var4 = _closure1_slot12;
 431:
            var2 = undefined;
            if(!var40) { _fun0001_ip = 439; continue _fun0001 }
 436:
            var2 = var34;
 439:
            var9 = var6.bind(var5)(var4, var2);
            _closure2_slot13 = var9;
            var14 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var4 = var7[var2];
            var6 = var14.bind(var5)(var4);
            var4 = new Array(1);
            var36 = 0;
            var47 = var4;
            var46 = var15;
            var45 = 0;
            var13 = arraySpread(var47, var46, var45);
            var12 = 15;
            var12 = var7[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.USER_PROFILE_ACTION_SHEET;
            var4[var13] = var12;
            var12 = 1;
            var13 = var13 + var12;
            var4 = var6.bind(var5)(var4);
            var14 = var4.analyticsLocations;
            _closure2_slot14 = var14;
            var6 = _closure1_slot0;
            var4 = 16;
            var4 = var7[var4];
            var13 = var6.bind(var5)(var4);
            var4 = var13.useBottomSheetRef;
            var4 = var4.bind(var13)();
            var20 = var4.bottomSheetRef;
            var24 = var4.bottomSheetClose;
            var13 = _closure1_slot4;
            var4 = var13.useRef;
            var23 = var4.bind(var13)(var8);
            _closure2_slot15 = var23;
            var4 = var13.useState;
            var25 = false;
            var17 = var4.bind(var13)(var25);
            var13 = _closure1_slot3;
            var4 = 2;
            var4 = var13.bind(var5)(var17, var4);
            var33 = var4[var36];
            _closure2_slot16 = var33;
            var4 = var4[var12];
            _closure2_slot17 = var4;
            var4 = var7[var3];
            var17 = var6.bind(var5)(var4);
            var13 = var17.useStateFromStoresObject;
            var4 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getAllPending;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var13.bind(var17)(var12, var4);
            var12 = var4.pendingThemeColors;
            var22 = var4.pendingAvatarDecoration;
            _closure2_slot18 = var22;
            var21 = var4.pendingProfileEffectId;
            _closure2_slot19 = var21;
            var4 = 17;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useProfileEffectPreset;
            if(!var28) { _fun0001_ip = 721; continue _fun0001 }
 714:
            var4 = var21;
            if(!(var5 === var4)) { _fun0001_ip = 753; continue _fun0001 }
 721:
            var17 = var8 == var9;
            var13 = undefined;
            if(var17) { _fun0001_ip = 750; continue _fun0001 }
 730:
            var17 = var9.profileEffect;
            var18 = var8 == var17;
            var13 = undefined;
            if(var18) { _fun0001_ip = 750; continue _fun0001 }
 745:
            var13 = var17.id;
 750:
            var4 = var13;
 753:
            var37 = var6.bind(var7)(var4);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 18;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['user'] = var31;
            var4['displayProfile'] = var9;
            var7 = undefined;
            if(!var28) { _fun0001_ip = 797; continue _fun0001 }
 794:
            var7 = var12;
 797:
            var4['pendingThemeColors'] = var7;
            var4 = var6.bind(var5)(var4);
            var17 = var4.theme;
            var7 = var4.primaryColor;
            var6 = var4.secondaryColor;
            var26 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = var13[var3];
            var18 = var26.bind(var5)(var3);
            var12 = var18.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var3 = var12.bind(var18)(var4, var3);
            var29 = _closure1_slot1;
            var4 = 19;
            var4 = var13[var4];
            var4 = var29.bind(var5)(var4);
            var32 = var4.bind(var5)();
            var4 = 20;
            var4 = var13[var4];
            var12 = var26.bind(var5)(var4);
            var4 = var12.useProfileThemeValues;
            var4 = var4.bind(var12)(var17);
            var12 = 21;
            var18 = var13[var12];
            var26 = var26.bind(var5)(var18);
            var18 = var26.useToken;
            var38 = 11;
            var13 = var13[var38];
            var13 = var29.bind(var5)(var13);
            var13 = var13.colors;
            var13 = var13.INTERACTIVE_HOVER;
            var26 = var18.bind(var26)(var13, var17);
            var13 = var8 == var4;
            if(var3) { _fun0001_ip = 980; continue _fun0001 }
 967:
            var18 = undefined;
            if(var13) { _fun0001_ip = 978; continue _fun0001 }
 972:
            var18 = var4.overlay;
 978:
            _fun0001_ip = 994; continue _fun0001;
 980:
            var3 = undefined;
            if(var13) { _fun0001_ip = 991; continue _fun0001 }
 985:
            var3 = var4.overlaySyncedWithUserTheme;
 991:
            var18 = var3;
 994:
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.useToken;
            var29 = _closure1_slot1;
            var3 = var3[var38];
            var3 = var29.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ACTION_SHEET_GRADIENT_BG;
            var3 = var12.bind(var13)(var3, var32);
            var29 = var3;
            if(!(var8 != var6)) { _fun0001_ip = 1123; continue _fun0001 }
 1054:
            var29 = var3;
            if(!(var8 != var4)) { _fun0001_ip = 1123; continue _fun0001 }
 1061:
            var29 = var3;
            if(!(var8 != var18)) { _fun0001_ip = 1123; continue _fun0001 }
 1068:
            var13 = _closure1_slot0;
            var38 = _closure1_slot2;
            var3 = 22;
            var3 = var38[var3];
            var12 = var13.bind(var5)(var3);
            var4 = var12.int2hex;
            var3 = 23;
            var3 = var38[var3];
            var13 = var13.bind(var5)(var3);
            var3 = var13.calculateOverlayedColor;
            var3 = var3.bind(var13)(var6, var18);
            var29 = var4.bind(var12)(var3);
 1123:
            var12 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 24;
            var3 = var4[var3];
            var12 = var12.bind(var5)(var3);
            var3 = {};
            var3['userId'] = var27;
            var3['user'] = var31;
            var3['channelId'] = var19;
            var3['guildId'] = var34;
            var3['displayProfile'] = var9;
            var3['guildMember'] = var16;
            var38 = var12.bind(var5)(var3);
            _closure2_slot20 = var38;
            var3 = _closure1_slot0;
            var13 = 25;
            var12 = var4[var13];
            var39 = var3.bind(var5)(var12);
            var18 = var39.useCreateUserProfileAnalyticsContext;
            var12 = {};
            var44 = 'ACTION_SHEET';
            var12['layout'] = var44;
            var12['sourceSessionId'] = var43;
            var12['userId'] = var27;
            var12['guildId'] = var34;
            var12['channelId'] = var19;
            var12['messageId'] = var42;
            var12['roleId'] = var41;
            var12['showGuildProfile'] = var40;
            var12 = var18.bind(var39)(var12);
            _closure2_slot21 = var12;
            var18 = _closure1_slot4;
            var41 = var18.useMemo;
            var40 = new Array(2);
            var40[0] = var31;
            var40[1] = var19;
            var39 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 61; continue _fun0003 }
 16:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 61:
                    return var1;
                }
            };
            var39 = var41.bind(var18)(var39, var40);
            _closure2_slot22 = var39;
            var40 = var18.useEffect;
            var39 = new Array(2);
            var39[0] = var31;
            var39[1] = var27;
            var27 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 53; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var40.bind(var18)(var27, var39);
            var39 = var18.useEffect;
            var27 = new Array(3);
            var27[0] = var31;
            var27[1] = var34;
            var27[2] = var19;
            var19 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot9;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0005_ip = 78; continue _fun0005 }
 16:
                    var3 = _closure2_slot9;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0005_ip = 75; continue _fun0005 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 28;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot9;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
 75:
                    var1 = var2;
 78:
                    if(var1) { _fun0005_ip = 188; continue _fun0005 }
 81:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var1 = _closure2_slot9;
                    var3 = var1.id;
                    var9 = _closure2_slot9;
                    var6 = var9.getAvatarURL;
                    var2 = _closure2_slot11;
                    var1 = 80;
                    var2 = var6.bind(var9)(var2, var1);
                    var1 = {'type': 'action_sheet', 'withMutualGuilds': true, 'withMutualFriends': true, 'dispatchWait': true};
                    var6 = _closure2_slot11;
                    var1['guildId'] = var6;
                    var6 = _closure2_slot1;
                    var8 = var8 != var6;
                    var6 = undefined;
                    if(!var8) { _fun0005_ip = 177; continue _fun0005 }
 173:
                    var6 = _closure2_slot1;
 177:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 188:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var39.bind(var18)(var19, var27);
            var27 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var38;
            var19[1] = var9;
            var19[2] = var34;
            var19[3] = var33;
            var19[4] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot16;
                    if(var2) { _fun0006_ip = 20; continue _fun0006 }
 10:
                    var4 = _closure2_slot13;
                    var3 = null;
                    var2 = var3 == var4;
 20:
                    if(var2) { _fun0006_ip = 127; continue _fun0006 }
 23:
                    var2 = _closure2_slot11;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0006_ip = 63; continue _fun0006 }
 36:
                    var3 = _closure2_slot12;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 59; continue _fun0006 }
 49:
                    var5 = _closure2_slot12;
                    var3 = var5.fullProfileLoadedTimestamp;
 59:
                    var2 = var4 != var3;
 63:
                    if(!var2) { _fun0006_ip = 127; continue _fun0006 }
 66:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 30;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot11;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot20;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot17;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 127:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var27.bind(var18)(var16, var19);
            var19 = var18.useEffect;
            var16 = new Array(3);
            var16[0] = var22;
            var16[1] = var21;
            var16[2] = var15;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(!(var4 === var3)) { _fun0007_ip = 158; continue _fun0007 }
 59:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 30;
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
                    var6 = _closure2_slot18;
                    var8 = null;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 139; continue _fun0007 }
 130:
                    var9 = _closure2_slot18;
                    var6 = var9.id;
 139:
                    if(!(var8 == var6)) { _fun0007_ip = 147; continue _fun0007 }
 143:
                    var6 = _closure2_slot19;
 147:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 158:
                    return var1;
                }
            };
            var15 = var19.bind(var18)(var15, var16);
            var16 = var18.useEffect;
            var15 = new Array(1);
            var15[0] = var1;
            var1 = function() {
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0008_ip = 23; continue _fun0008 }
 13:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var16.bind(var18)(var1, var15);
            var1 = 31;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot23 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot14;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot21;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot24 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot23;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot24;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot25 = var1;
            if(!(var8 != var31)) { _fun0001_ip = 2266; continue _fun0001 }
 1496:
            var4 = _closure1_slot14;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var21 = 37;
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
            if(var18) { _fun0001_ip = 1605; continue _fun0001 }
 1599:
            var17 = var9.fetchStartedAt;
 1605:
            var15['fetchStartedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 1625; continue _fun0001 }
 1619:
            var17 = var9.fetchEndedAt;
 1625:
            var15['fetchEndedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 1645; continue _fun0001 }
 1639:
            var17 = var9.isLoaded;
 1645:
            var15['isLoaded'] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 33;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.BottomSheet;
            var17 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var17['ref'] = var20;
            var34 = true;
            var20 = var35.noPadding;
            var17['contentStyles'] = var20;
            var20 = undefined;
            if(!var28) { _fun0001_ip = 1862; continue _fun0001 }
 1721:
            var27 = _closure1_slot14;
            var41 = _closure1_slot0;
            var42 = _closure1_slot2;
            var21 = var42[var21];
            var21 = var41.bind(var5)(var21);
            var22 = var21.ThemeContextProvider;
            var21 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var21['theme'] = var32;
            var32 = 38;
            var32 = var42[var32];
            var32 = var41.bind(var5)(var32);
            var33 = var32.ActionSheetBackdropToast;
            var32 = {};
            var38 = 36;
            var39 = var42[var38];
            var39 = var41.bind(var5)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var42[var38];
            var38 = var41.bind(var5)(var38);
            var38 = var38.t;
            var38 = var38.wSnI//;
            var38 = var39.bind(var40)(var38);
            var32['text'] = var38;
            var32['isExpanded'] = var34;
            var32 = var27.bind(var5)(var33, var32);
            var21['children'] = var32;
            var20 = var27.bind(var5)(var22, var21);
 1862:
            var17['backdropChildren'] = var20;
            var22 = _closure1_slot14;
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 39;
            var20 = var27[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.BottomSheetScrollView;
            var20 = {};
            var20['scrollsToTop'] = var25;
            var27 = var35.container;
            var25 = new Array(2);
            var25[0] = var27;
            var27 = {};
            var27['backgroundColor'] = var29;
            var25[1] = var27;
            var20['style'] = var25;
            var25 = {};
            var27 = undefined;
            if(!var28) { _fun0001_ip = 1942; continue _fun0001 }
 1938:
            var27 = 'none';
 1942:
            var25['pointerEvents'] = var27;
            var20['contentContainerStyle'] = var25;
            var20['ref'] = var23;
            var27 = _closure1_slot15;
            var25 = _closure1_slot5;
            var23 = {};
            var29 = _closure1_slot14;
            var28 = {};
            var32 = var35.bounceOffset;
            var28['style'] = var32;
            var29 = var29.bind(var5)(var25, var28);
            var28 = new Array(2);
            var28[0] = var29;
            var29 = {};
            var32 = var35.profileContainer;
            var29['style'] = var32;
            var30 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var6 = {};
                    var6['user'] = var1;
                    var4 = _closure2_slot10;
                    var6['channel'] = var4;
                    var4 = _closure2_slot13;
                    var6['displayProfile'] = var4;
                    var4 = _closure2_slot2;
                    var6['disableCalls'] = var4;
                    var4 = _closure2_slot3;
                    var6['disableMessage'] = var4;
                    var4 = _closure2_slot4;
                    var6['isVoiceContext'] = var4;
                    var4 = _closure2_slot6;
                    var6['location'] = var4;
                    var4 = _closure2_slot22;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot15;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot25;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot25;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var2 = _closure2_slot24;
                    var6['showUserProfileActionSheet'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0009_ip = 227; continue _fun0009 }
 138:
                    var1 = var1.bot;
                    var7 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0009_ip = 193; continue _fun0009 }
 159:
                    var1 = 43;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0009_ip = 225; continue _fun0009;
 193:
                    var3 = 42;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
 225:
                    _fun0009_ip = 271; continue _fun0009;
 227:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 41;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
 271:
                    return var1;
                }
            };
            var31 = var30.bind(var5)(var31);
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var8 != var37;
            if(!var31) { _fun0001_ip = 2090; continue _fun0001 }
 2033:
            var34 = _closure1_slot14;
            var33 = _closure1_slot1;
            var38 = _closure1_slot2;
            var32 = 44;
            var32 = var38[var32];
            var33 = var33.bind(var5)(var32);
            var32 = {};
            var37 = var37.id;
            var32['profileEffectId'] = var37;
            var32['bannerAdjustment'] = var36;
            var35 = var35.profileEffect;
            var32['style'] = var35;
            var31 = var34.bind(var5)(var33, var32);
 2090:
            var30[1] = var31;
            var29['children'] = var30;
            var29 = var27.bind(var5)(var25, var29);
            var28[1] = var29;
            var23['children'] = var28;
            var23 = var27.bind(var5)(var25, var23);
            var20['children'] = var23;
            var21 = var22.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot14;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 45;
            var21 = var28[var21];
            var21 = var27.bind(var5)(var21);
            var22 = var21.ActionSheetHeaderBar;
            var21 = {};
            var25 = 46;
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
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var15['children'] = var17;
            var15 = var4.bind(var5)(var16, var15);
            var6['children'] = var15;
            var6 = var4.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 2558; continue _fun0001;
 2266:
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
            if(var12) { _fun0001_ip = 2340; continue _fun0001 }
 2334:
            var10 = var9.fetchStartedAt;
 2340:
            var6['fetchStartedAt'] = var10;
            var12 = var8 == var9;
            var10 = undefined;
            if(var12) { _fun0001_ip = 2360; continue _fun0001 }
 2354:
            var10 = var9.fetchEndedAt;
 2360:
            var6['fetchEndedAt'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 2380; continue _fun0001 }
 2374:
            var8 = var9.isLoaded;
 2380:
            var6['isLoaded'] = var8;
            var10 = _closure1_slot14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 33;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 34;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var13 = {};
            var14 = 42;
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 35;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 36;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.eAn6z8;
            var13 = var14.bind(var15)(var13);
            var11['body'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 2558:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();