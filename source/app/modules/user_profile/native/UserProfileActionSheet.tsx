// app/modules/user_profile/native/UserProfileActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx1(touchEvent){const{SWIPE_DISTANCE_THRESHOLD,increment,decrement,ActionSheetActionCreators}=this.__closure;if(touchEvent.translationX>SWIPE_DISTANCE_THRESHOLD){increment();}if(touchEvent.translationX<-SWIPE_DISTANCE_THRESHOLD){decrement();}if(Math.abs(touchEvent.translationY)>SWIPE_DISTANCE_THRESHOLD){ActionSheetActionCreators.hideActionSheet();}}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var30 = var2.userId;
            var _closure2_slot0 = var30;
            var22 = var2.channelId;
            var _closure2_slot1 = var22;
            var44 = var2.messageId;
            var43 = var2.roleId;
            var45 = var2.sessionId;
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
            var31 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var31 === var5)) { _fun0001_ip = 109; continue _fun0001 }
 107:
            var31 = false;
 109:
            var _closure2_slot7 = var31;
            var42 = var2.showGuildProfile;
            if(!(var42 === var5)) { _fun0001_ip = 125; continue _fun0001 }
 123:
            var42 = true;
 125:
            var4 = var2.sourceAnalyticsLocations;
            if(!(var4 === var5)) { _fun0001_ip = 139; continue _fun0001 }
 135:
            var4 = new Array(0);
 139:
            var _closure2_slot8 = var4;
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
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var2 = _closure1_slot16;
            var38 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 12;
            var7 = var2[var3];
            var12 = var6.bind(var5)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var9.bind(var12)(var8, var7);
            _closure2_slot9 = var34;
            var2 = var2[var3];
            var9 = var6.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = new Array(1);
            var6[0] = var22;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var7, var2, var6);
            _closure2_slot10 = var2;
            var8 = null;
            var6 = var8 == var2;
            var37 = undefined;
            if(var6) { _fun0001_ip = 352; continue _fun0001 }
 347:
            var37 = var2.guild_id;
 352:
            _closure2_slot11 = var37;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = var7[var3];
            var12 = var6.bind(var5)(var2);
            var9 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
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
            var16 = var9.bind(var12)(var6, var2);
            _closure2_slot12 = var16;
            var6 = _closure1_slot1;
            var2 = 13;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var8 == var34;
            var6 = undefined;
            if(var2) { _fun0001_ip = 435; continue _fun0001 }
 430:
            var6 = var34.id;
 435:
            if(!(var8 == var6)) { _fun0001_ip = 443; continue _fun0001 }
 439:
            var6 = _closure1_slot12;
 443:
            var2 = undefined;
            if(!var42) { _fun0001_ip = 451; continue _fun0001 }
 448:
            var2 = var37;
 451:
            var9 = var7.bind(var5)(var6, var2);
            _closure2_slot13 = var9;
            var15 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 14;
            var7 = var6[var2];
            var12 = var15.bind(var5)(var7);
            var7 = new Array(1);
            var39 = 0;
            var49 = var7;
            var48 = var4;
            var47 = 0;
            var14 = arraySpread(var49, var48, var47);
            var13 = 15;
            var13 = var6[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.USER_PROFILE_ACTION_SHEET;
            var7[var14] = var13;
            var13 = 1;
            var14 = var14 + var13;
            var7 = var12.bind(var5)(var7);
            var14 = var7.analyticsLocations;
            _closure2_slot14 = var14;
            var7 = _closure1_slot0;
            var12 = 16;
            var12 = var6[var12];
            var15 = var7.bind(var5)(var12);
            var12 = var15.useBottomSheetRef;
            var12 = var12.bind(var15)();
            var20 = var12.bottomSheetRef;
            var24 = var12.bottomSheetClose;
            var15 = _closure1_slot4;
            var12 = var15.useRef;
            var25 = var12.bind(var15)(var8);
            _closure2_slot15 = var25;
            var12 = 17;
            var12 = var6[var12];
            var17 = var7.bind(var5)(var12);
            var12 = var17.useSharedValue;
            var12 = var12.bind(var17)(var39);
            _closure2_slot16 = var12;
            var18 = var15.useCallback;
            var17 = new Array(1);
            var17[0] = var12;
            var12 = function(arg1) {
                var3 = _closure2_slot16;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var23 = var18.bind(var15)(var12, var17);
            var12 = var15.useState;
            var27 = false;
            var17 = var12.bind(var15)(var27);
            var15 = _closure1_slot3;
            var12 = 2;
            var12 = var15.bind(var5)(var17, var12);
            var36 = var12[var39];
            _closure2_slot17 = var36;
            var12 = var12[var13];
            _closure2_slot18 = var12;
            var6 = var6[var3];
            var13 = var7.bind(var5)(var6);
            var12 = var13.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getAllPending;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var12.bind(var13)(var7, var6);
            var13 = var6.pendingThemeColors;
            var29 = var6.pendingAvatarDecoration;
            _closure2_slot19 = var29;
            var28 = var6.pendingProfileEffectId;
            _closure2_slot20 = var28;
            if(!var31) { _fun0001_ip = 765; continue _fun0001 }
 758:
            var15 = var28;
            if(!(var5 === var15)) { _fun0001_ip = 783; continue _fun0001 }
 765:
            var7 = var8 == var9;
            var6 = undefined;
            if(var7) { _fun0001_ip = 780; continue _fun0001 }
 774:
            var6 = var9.profileEffectId;
 780:
            var15 = var6;
 783:
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 18;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var34;
            var6['displayProfile'] = var9;
            var12 = undefined;
            if(!var31) { _fun0001_ip = 822; continue _fun0001 }
 819:
            var12 = var13;
 822:
            var6['pendingThemeColors'] = var12;
            var6 = var7.bind(var5)(var6);
            var17 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = var18[var3];
            var19 = var21.bind(var5)(var3);
            var13 = var19.useStateFromStores;
            var3 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.syncProfileThemeWithUserTheme;
                return var1;
            };
            var3 = var13.bind(var19)(var12, var3);
            var26 = _closure1_slot1;
            var12 = 19;
            var12 = var18[var12];
            var12 = var26.bind(var5)(var12);
            var35 = var12.bind(var5)();
            var12 = 20;
            var12 = var18[var12];
            var13 = var21.bind(var5)(var12);
            var12 = var13.useProfileThemeValues;
            var12 = var12.bind(var13)(var17);
            var13 = 21;
            var19 = var18[var13];
            var21 = var21.bind(var5)(var19);
            var19 = var21.useToken;
            var32 = 11;
            var18 = var18[var32];
            var18 = var26.bind(var5)(var18);
            var18 = var18.colors;
            var18 = var18.INTERACTIVE_HOVER;
            var26 = var19.bind(var21)(var18, var17);
            var18 = var8 == var12;
            if(var3) { _fun0001_ip = 1004; continue _fun0001 }
 991:
            var19 = undefined;
            if(var18) { _fun0001_ip = 1002; continue _fun0001 }
 996:
            var19 = var12.overlay;
 1002:
            _fun0001_ip = 1018; continue _fun0001;
 1004:
            var3 = undefined;
            if(var18) { _fun0001_ip = 1015; continue _fun0001 }
 1009:
            var3 = var12.overlaySyncedWithUserTheme;
 1015:
            var19 = var3;
 1018:
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = var3[var13];
            var18 = var18.bind(var5)(var13);
            var13 = var18.useToken;
            var21 = _closure1_slot1;
            var3 = var3[var32];
            var3 = var21.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ACTION_SHEET_GRADIENT_BG;
            var3 = var13.bind(var18)(var3, var35);
            var32 = var3;
            if(!(var8 != var6)) { _fun0001_ip = 1147; continue _fun0001 }
 1078:
            var32 = var3;
            if(!(var8 != var12)) { _fun0001_ip = 1147; continue _fun0001 }
 1085:
            var32 = var3;
            if(!(var8 != var19)) { _fun0001_ip = 1147; continue _fun0001 }
 1092:
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 22;
            var3 = var21[var3];
            var13 = var18.bind(var5)(var3);
            var12 = var13.int2hex;
            var3 = 23;
            var3 = var21[var3];
            var18 = var18.bind(var5)(var3);
            var3 = var18.calculateOverlayedColor;
            var3 = var3.bind(var18)(var6, var19);
            var32 = var12.bind(var13)(var3);
 1147:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var3 = 24;
            var3 = var19[var3];
            var12 = var18.bind(var5)(var3);
            var3 = {};
            var3['userId'] = var30;
            var3['user'] = var34;
            var3['channelId'] = var22;
            var3['guildId'] = var37;
            var3['displayProfile'] = var9;
            var3['guildMember'] = var16;
            var40 = var12.bind(var5)(var3);
            _closure2_slot21 = var40;
            var3 = _closure1_slot0;
            var13 = 25;
            var12 = var19[var13];
            var41 = var3.bind(var5)(var12);
            var21 = var41.useCreateUserProfileAnalyticsContext;
            var12 = {};
            var46 = 'ACTION_SHEET';
            var12['layout'] = var46;
            var12['sourceSessionId'] = var45;
            var12['userId'] = var30;
            var12['guildId'] = var37;
            var12['channelId'] = var22;
            var12['messageId'] = var44;
            var12['roleId'] = var43;
            var12['showGuildProfile'] = var42;
            var12 = var21.bind(var41)(var12);
            _closure2_slot22 = var12;
            var21 = _closure1_slot4;
            var43 = var21.useMemo;
            var42 = new Array(2);
            var42[0] = var34;
            var42[1] = var22;
            var41 = function() {
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
            var41 = var43.bind(var21)(var41, var42);
            _closure2_slot23 = var41;
            var42 = var21.useEffect;
            var41 = new Array(2);
            var41[0] = var34;
            var41[1] = var30;
            var30 = function() {
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
            var30 = var42.bind(var21)(var30, var41);
            var41 = var21.useEffect;
            var30 = new Array(3);
            var30[0] = var34;
            var30[1] = var37;
            var30[2] = var22;
            var22 = function() {
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
            var22 = var41.bind(var21)(var22, var30);
            var30 = var21.useEffect;
            var22 = new Array(5);
            var22[0] = var40;
            var22[1] = var9;
            var22[2] = var37;
            var22[3] = var36;
            var22[4] = var16;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot17;
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
                    var2 = _closure2_slot21;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 127:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var30.bind(var21)(var16, var22);
            var22 = var21.useEffect;
            var16 = new Array(3);
            var16[0] = var29;
            var16[1] = var28;
            var16[2] = var4;
            var4 = function() {
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
                    var6 = _closure2_slot19;
                    var8 = null;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 139; continue _fun0007 }
 130:
                    var9 = _closure2_slot19;
                    var6 = var9.id;
 139:
                    if(!(var8 == var6)) { _fun0007_ip = 147; continue _fun0007 }
 143:
                    var6 = _closure2_slot20;
 147:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 158:
                    return var1;
                }
            };
            var4 = var22.bind(var21)(var4, var16);
            var16 = var21.useEffect;
            var4 = new Array(1);
            var4[0] = var1;
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
            var1 = var16.bind(var21)(var1, var4);
            var1 = 31;
            var1 = var19[var1];
            var4 = var18.bind(var5)(var1);
            var1 = 'mobile_profile_effect_debug_controls';
            var4 = var4.bind(var5)(var1);
            var1 = 32;
            var1 = var19[var1];
            var1 = var18.bind(var5)(var1);
            var1 = var1.bind(var5)(var15);
            var41 = var1.preset;
            var21 = var1.increment;
            _closure2_slot24 = var21;
            var16 = var1.decrement;
            _closure2_slot25 = var16;
            var1 = 33;
            var1 = var19[var1];
            var15 = var3.bind(var5)(var1);
            var1 = var15.useNavigation;
            var1 = var1.bind(var15)();
            _closure2_slot26 = var1;
            var29 = 34;
            var1 = var19[var29];
            var1 = var3.bind(var5)(var1);
            var3 = var1.Gesture;
            var1 = var3.Pan;
            var3 = var1.bind(var3)();
            var1 = var3.enabled;
            var3 = var1.bind(var3)(var4);
            var1 = var3.runOnJS;
            var37 = true;
            var4 = var1.bind(var3)(var37);
            var3 = var4.onEnd;
            var1 = function Ie(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.translationX;
                    var2 = 120;
                    if(!(var3 > var2)) { _fun0009_ip = 29; continue _fun0009 }
 16:
                    var4 = _closure2_slot24;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
 29:
                    var4 = var1.translationX;
                    var3 = -120;
                    if(!(var4 < var3)) { _fun0009_ip = 58; continue _fun0009 }
 45:
                    var4 = _closure2_slot25;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
 58:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.abs;
                    var1 = var1.translationY;
                    var1 = var3.bind(var4)(var1);
                    if(!(var1 > var2)) { _fun0009_ip = 122; continue _fun0009 }
 87:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = {};
            var22 = 120;
            var15['SWIPE_DISTANCE_THRESHOLD'] = var22;
            var15['increment'] = var21;
            var15['decrement'] = var16;
            var16 = 35;
            var16 = var19[var16];
            var16 = var18.bind(var5)(var16);
            var15['ActionSheetActionCreators'] = var16;
            var1['__closure'] = var15;
            var15 = 7905694692600.0;
            var1['__workletHash'] = var15;
            var15 = _closure1_slot17;
            var1['__initData'] = var15;
            var28 = var3.bind(var4)(var1);
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot14;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot22;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot27 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot26;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot27;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot28 = var1;
            if(!(var8 != var34)) { _fun0001_ip = 2560; continue _fun0001 }
 1725:
            var4 = _closure1_slot14;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var21 = 41;
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
            if(var18) { _fun0001_ip = 1833; continue _fun0001 }
 1827:
            var17 = var9.fetchStartedAt;
 1833:
            var15['fetchStartedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 1853; continue _fun0001 }
 1847:
            var17 = var9.fetchEndedAt;
 1853:
            var15['fetchEndedAt'] = var17;
            var18 = var8 == var9;
            var17 = undefined;
            if(var18) { _fun0001_ip = 1873; continue _fun0001 }
 1867:
            var17 = var9.isLoaded;
 1873:
            var15['isLoaded'] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 37;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.BottomSheet;
            var17 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var17['ref'] = var20;
            var20 = var38.noPadding;
            var17['contentStyles'] = var20;
            var20 = undefined;
            if(!var31) { _fun0001_ip = 2088; continue _fun0001 }
 1947:
            var30 = _closure1_slot14;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var21 = var45[var21];
            var21 = var44.bind(var5)(var21);
            var22 = var21.ThemeContextProvider;
            var21 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var21['theme'] = var35;
            var35 = 42;
            var35 = var45[var35];
            var35 = var44.bind(var5)(var35);
            var36 = var35.ActionSheetBackdropToast;
            var35 = {};
            var40 = 40;
            var42 = var45[var40];
            var42 = var44.bind(var5)(var42);
            var43 = var42.intl;
            var42 = var43.string;
            var40 = var45[var40];
            var40 = var44.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.wSnI//;
            var40 = var42.bind(var43)(var40);
            var35['text'] = var40;
            var35['isExpanded'] = var37;
            var35 = var30.bind(var5)(var36, var35);
            var21['children'] = var35;
            var20 = var30.bind(var5)(var22, var21);
 2088:
            var17['backdropChildren'] = var20;
            var22 = _closure1_slot14;
            var21 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 43;
            var20 = var30[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.BottomSheetScrollView;
            var20 = {};
            var20['scrollsToTop'] = var27;
            var30 = var38.container;
            var27 = new Array(2);
            var27[0] = var30;
            var30 = {};
            var30['backgroundColor'] = var32;
            var27[1] = var30;
            var20['style'] = var27;
            var27 = {};
            var30 = undefined;
            if(!var31) { _fun0001_ip = 2168; continue _fun0001 }
 2164:
            var30 = 'none';
 2168:
            var27['pointerEvents'] = var30;
            var20['contentContainerStyle'] = var27;
            var20['ref'] = var25;
            var20['onScroll'] = var23;
            var27 = _closure1_slot14;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var29];
            var23 = var25.bind(var5)(var23);
            var25 = var23.GestureDetector;
            var23 = {};
            var23['gesture'] = var28;
            var30 = _closure1_slot15;
            var29 = _closure1_slot5;
            var28 = {};
            var31 = {};
            var32 = var38.bounceOffset;
            var31['style'] = var32;
            var32 = var27.bind(var5)(var29, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var35 = var38.profileContainer;
            var32['style'] = var35;
            var33 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    var4 = _closure2_slot23;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot15;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot16;
                    var6['scrollPosition'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 44;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot28;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 44;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot13;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot28;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var2 = _closure2_slot27;
                    var6['showUserProfileActionSheet'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0010_ip = 236; continue _fun0010 }
 147:
                    var1 = var1.bot;
                    var7 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0010_ip = 202; continue _fun0010 }
 168:
                    var1 = 47;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0010_ip = 234; continue _fun0010;
 202:
                    var3 = 46;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
 234:
                    _fun0010_ip = 280; continue _fun0010;
 236:
                    var5 = _closure1_slot14;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 45;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
 280:
                    return var1;
                }
            };
            var34 = var33.bind(var5)(var34);
            var33 = new Array(2);
            var33[0] = var34;
            var35 = var8 == var41;
            var34 = undefined;
            if(var35) { _fun0001_ip = 2301; continue _fun0001 }
 2296:
            var34 = var41.id;
 2301:
            var34 = var8 != var34;
            if(!var34) { _fun0001_ip = 2374; continue _fun0001 }
 2308:
            var37 = _closure1_slot14;
            var36 = _closure1_slot1;
            var40 = _closure1_slot2;
            var35 = 48;
            var35 = var40[var35];
            var36 = var36.bind(var5)(var35);
            var35 = {};
            var42 = var8 == var41;
            var40 = undefined;
            if(var42) { _fun0001_ip = 2348; continue _fun0001 }
 2343:
            var40 = var41.id;
 2348:
            var35['profileEffectId'] = var40;
            var35['bannerAdjustment'] = var39;
            var38 = var38.profileEffect;
            var35['style'] = var38;
            var34 = var37.bind(var5)(var36, var35);
 2374:
            var33[1] = var34;
            var32['children'] = var33;
            var32 = var30.bind(var5)(var29, var32);
            var31[1] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var5)(var29, var28);
            var23['children'] = var28;
            var23 = var27.bind(var5)(var25, var23);
            var20['children'] = var23;
            var21 = var22.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot14;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 49;
            var21 = var28[var21];
            var21 = var27.bind(var5)(var21);
            var22 = var21.ActionSheetHeaderBar;
            var21 = {};
            var25 = 50;
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
            _fun0001_ip = 2852; continue _fun0001;
 2560:
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
            if(var12) { _fun0001_ip = 2634; continue _fun0001 }
 2628:
            var10 = var9.fetchStartedAt;
 2634:
            var6['fetchStartedAt'] = var10;
            var12 = var8 == var9;
            var10 = undefined;
            if(var12) { _fun0001_ip = 2654; continue _fun0001 }
 2648:
            var10 = var9.fetchEndedAt;
 2654:
            var6['fetchEndedAt'] = var10;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 2674; continue _fun0001 }
 2668:
            var8 = var9.isLoaded;
 2674:
            var6['isLoaded'] = var8;
            var10 = _closure1_slot14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 37;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var12 = _closure1_slot1;
            var11 = 38;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var13 = {};
            var14 = 42;
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 39;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 40;
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
 2852:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();