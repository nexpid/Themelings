// app/modules/user_profile/native/UserProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function CaptureAnimatedPosition(arg1) {
        var2 = arg1;
        var7 = var2.target;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 15;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var2 = var8.useBottomSheet;
        var2 = var2.bind(var8)();
        var8 = var2.animatedPosition;
        var _closure2_slot1 = var8;
        var2 = 16;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useAnimatedReaction;
        var2 = function n() {
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = {};
        var6['animatedPosition'] = var8;
        var2['__closure'] = var6;
        var6 = 9297767242419.0;
        var2['__workletHash'] = var6;
        var6 = _closure1_slot19;
        var2['__initData'] = var6;
        var1 = function o(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.set;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6 = {};
        var6['target'] = var7;
        var1['__closure'] = var6;
        var6 = 7972876079182.0;
        var1['__workletHash'] = var6;
        var5 = _closure1_slot20;
        var1['__initData'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx1(){const{animatedPosition}=this.__closure;return animatedPosition.get();}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx2(value){const{target}=this.__closure;target.set(value);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var19 = var2.channelId;
            var _closure2_slot1 = var19;
            var30 = var2.messageId;
            var27 = var2.roleId;
            var32 = var2.sessionId;
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
            var33 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var33 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var33 = false;
case 2:
            var _closure2_slot7 = var33;
            var25 = var2.showGuildProfile;
            if(!(var25 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var25 = true;
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
            var40 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 16;
            var6 = var2[var6];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useSharedValue;
            var41 = 0;
            var23 = var6.bind(var9)(var41);
            var6 = 17;
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
            var36 = var12.bind(var13)(var10, var9);
            _closure2_slot10 = var36;
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
            var2 = 18;
            var2 = var10[var2];
            var10 = var7.bind(var5)(var2);
            var2 = var9 == var36;
            var7 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var36.id;
case 12:
            if(!(var9 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = _closure1_slot12;
case 14:
            var2 = undefined;
            if(!var25) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var43;
case 16:
            var10 = var10.bind(var5)(var7, var2);
            _closure2_slot14 = var10;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 19;
            var12 = var17[var2];
            var13 = var7.bind(var5)(var12);
            var12 = new Array(1);
            var56 = var12;
            var55 = var4;
            var54 = 0;
            var14 = arraySpread(var56, var55, var54);
            var15 = 20;
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
            var13 = 21;
            var13 = var17[var13];
            var18 = var12.bind(var5)(var13);
            var13 = var18.useBottomSheetRef;
            var13 = var13.bind(var18)();
            var22 = var13.bottomSheetRef;
            var28 = var13.bottomSheetClose;
            var20 = _closure1_slot4;
            var13 = var20.useRef;
            var29 = var13.bind(var20)(var9);
            _closure2_slot16 = var29;
            var13 = var20.useState;
            var31 = false;
            var13 = var13.bind(var20)(var31);
            var21 = _closure1_slot3;
            var18 = 2;
            var13 = var21.bind(var5)(var13, var18);
            var39 = var13[var41];
            _closure2_slot17 = var39;
            var13 = var13[var15];
            _closure2_slot18 = var13;
            var13 = var20.useState;
            var13 = var13.bind(var20)(var41);
            var13 = var21.bind(var5)(var13, var18);
            var24 = var13[var41];
            _closure2_slot19 = var24;
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
            var37 = var18.bind(var20)(var15, var13);
            var13 = 22;
            var13 = var17[var13];
            var13 = var12.bind(var5)(var13);
            var15 = var13.ProfileVisibility;
            var13 = var15.useSetting;
            var50 = var13.bind(var15)();
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
            var26 = var6.pendingProfileEffect;
            _closure2_slot22 = var26;
            var20 = var6.pendingProfileFrame;
            _closure2_slot23 = var20;
            var13 = 23;
            var6 = var17[var13];
            var21 = var12.bind(var5)(var6);
            var12 = var21.useCreateUserProfileAnalyticsContext;
            var6 = {};
            var34 = 'ACTION_SHEET';
            var6['layout'] = var34;
            var6['sourceSessionId'] = var32;
            var6['userId'] = var1;
            var6['guildId'] = var43;
            var6['channelId'] = var19;
            var6['messageId'] = var30;
            var6['roleId'] = var27;
            var6['showGuildProfile'] = var25;
            var12 = var12.bind(var21)(var6);
            _closure2_slot24 = var12;
            var6 = 24;
            var6 = var17[var6];
            var17 = var7.bind(var5)(var6);
            if(!var33) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var20)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var6 = var9 == var10;
            var7 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var10.profileFrame;
            var21 = var9 == var6;
            var7 = undefined;
            if(var21) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var7 = var6.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var21 = var9 == var20;
            var6 = undefined;
            if(var21) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var20.skuId;
case 25:
            var7 = var6;
case 24:
            var6 = 'UserProfileActionSheet';
            var25 = var17.bind(var5)(var7, var6);
            _closure2_slot25 = var25;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 25;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var21 = var9 == var10;
            var17 = undefined;
            if(var21) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var21 = var10.profileFrame;
            var27 = var9 == var21;
            var17 = undefined;
            if(var27) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var17 = var21.skuId;
case 27:
            var6['skuId'] = var17;
            var6['openedAt'] = var11;
            var6['context'] = var12;
            var6['analyticsLocations'] = var14;
            var6 = var7.bind(var5)(var6);
            var21 = _closure1_slot4;
            var17 = var21.useMemo;
            var7 = new Array(2);
            var7[0] = var25;
            var7[1] = var24;
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
                    var2 = 26;
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
            var27 = var17.bind(var21)(var6, var7);
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 27;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            if(!var33) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!(var5 === var26)) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var17 = var9 == var10;
            var6 = undefined;
            if(var17) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var17 = var10.profileEffect;
            var21 = var9 == var17;
            var6 = undefined;
            if(var21) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var6 = var17.skuId;
case 34:
            _fun0001_ip = 37; continue _fun0001;
case 33:
            var21 = var9 == var26;
            var17 = undefined;
            if(var21) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var17 = var26.skuId;
case 38:
            var6 = var17;
case 37:
            var42 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 28;
            var6 = var17[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var36;
            var6['displayProfile'] = var10;
            var17 = undefined;
            if(!var33) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var17 = var18;
case 40:
            var6['pendingThemeColors'] = var17;
            var6 = var7.bind(var5)(var6);
            var17 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var45 = _closure1_slot1;
            var46 = _closure1_slot2;
            var18 = 29;
            var18 = var46[var18];
            var21 = var45.bind(var5)(var18);
            var18 = _closure1_slot14;
            var34 = var21.bind(var5)(var18);
            var18 = 30;
            var18 = var46[var18];
            var18 = var45.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var38 = var18.height;
            var21 = var18.width;
            _closure2_slot26 = var21;
            var18 = 31;
            var18 = var46[var18];
            var18 = var45.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var30 = var18.top;
            var32 = _closure1_slot0;
            var18 = 32;
            var18 = var46[var18];
            var18 = var32.bind(var5)(var18);
            var18 = var18.NAV_BAR_HEIGHT_MULTILINE;
            var18 = var38 - var18;
            var38 = var18 - var30;
            var18 = _closure1_slot4;
            var44 = var18.useMemo;
            var30 = new Array(3);
            var30[0] = var33;
            var30[1] = var25;
            var30[2] = var21;
            var21 = function() {
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
                    var1 = 33;
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
            var21 = var44.bind(var18)(var21, var30);
            var30 = 34;
            var30 = var46[var30];
            var30 = var45.bind(var5)(var30);
            var44 = var30.bind(var5)();
            var30 = 35;
            var30 = var46[var30];
            var47 = var32.bind(var5)(var30);
            var32 = var47.useToken;
            var30 = 13;
            var30 = var46[var30];
            var30 = var45.bind(var5)(var30);
            var30 = var30.colors;
            var30 = var30.INTERACTIVE_TEXT_HOVER;
            var30 = var32.bind(var47)(var30, var17);
            var32 = 36;
            var32 = var46[var32];
            var45 = var45.bind(var5)(var32);
            var32 = {};
            var32['userId'] = var1;
            var32['user'] = var36;
            var32['channelId'] = var19;
            var32['guildId'] = var43;
            var32['displayProfile'] = var10;
            var32['guildMember'] = var16;
            var45 = var45.bind(var5)(var32);
            _closure2_slot27 = var45;
            var47 = var18.useMemo;
            var46 = new Array(2);
            var46[0] = var36;
            var46[1] = var19;
            var32 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 45; continue _fun0005 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 37;
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
            var32 = var47.bind(var18)(var32, var46);
            _closure2_slot28 = var32;
            var47 = var18.useEffect;
            var46 = new Array(2);
            var46[0] = var36;
            var46[1] = var1;
            var32 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 38;
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
            var32 = var47.bind(var18)(var32, var46);
            var46 = var18.useEffect;
            var32 = new Array(3);
            var32[0] = var36;
            var32[1] = var43;
            var32[2] = var19;
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
                    var3 = 39;
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
                    var1 = 40;
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
            var19 = var46.bind(var18)(var19, var32);
            var32 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var45;
            var19[1] = var10;
            var19[2] = var43;
            var19[3] = var39;
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
                    var3 = 41;
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
            var16 = var32.bind(var18)(var16, var19);
            var16 = var18.useEffect;
            var32 = var9 == var15;
            var19 = undefined;
            if(var32) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var19 = var15.skuId;
case 62:
            var15 = new Array(4);
            var15[0] = var19;
            var32 = var9 == var26;
            var19 = undefined;
            if(var32) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var19 = var26.skuId;
case 64:
            var15[1] = var19;
            var26 = var9 == var20;
            var19 = undefined;
            if(var26) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var19 = var20.skuId;
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
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 41;
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
                            var3 = 43;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 44;
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
                    var2 = 42;
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
            var1 = 45;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot29 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 44;
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
            if(!(var9 != var36)) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var4 = _closure1_slot15;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var32 = 50;
            var1 = var15[var32];
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
            var17 = _closure1_slot17;
            var15 = var15[var13];
            var15 = var16.bind(var5)(var15);
            var16 = var15.UserProfileAnalyticsProvider;
            var15 = {};
            var15['value'] = var12;
            var15['openedAt'] = var11;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var18 = var10.fetchStartedAt;
case 88:
            var15['fetchStartedAt'] = var18;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var18 = var10.fetchEndedAt;
case 90:
            var15['fetchEndedAt'] = var18;
            var19 = var9 == var10;
            var18 = undefined;
            if(var19) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var18 = var10.isLoaded;
case 92:
            var15['isLoaded'] = var18;
            var20 = _closure1_slot17;
            var19 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 46;
            var18 = var26[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.BottomSheet;
            var18 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var18['ref'] = var22;
            var46 = true;
            var21 = var38 - var21;
            var18['maxHeight'] = var21;
            var21 = var40.noPadding;
            var18['contentStyles'] = var21;
            var22 = _closure1_slot16;
            var21 = {};
            var26 = new Array(2);
            var26[0] = var27;
            var27 = var33;
            if(!var27) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var43 = _closure1_slot15;
            var51 = _closure1_slot0;
            var53 = _closure1_slot2;
            var32 = var53[var32];
            var32 = var51.bind(var5)(var32);
            var39 = var32.ThemeContextProvider;
            var32 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var32['theme'] = var44;
            var44 = 51;
            var44 = var53[var44];
            var44 = var51.bind(var5)(var44);
            var45 = var44.ActionSheetBackdropToast;
            var44 = {};
            var52 = 49;
            var47 = var53[var52];
            var47 = var51.bind(var5)(var47);
            var49 = var47.intl;
            var48 = var49.string;
            var47 = 52;
            var47 = var53[var47];
            var47 = var51.bind(var5)(var47);
            var47 = var47.ProfileVisibility;
            var47 = var47.FRIENDS_ONLY;
            if(!(var50 !== var47)) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var50 = _closure1_slot0;
            var47 = _closure1_slot2;
            var47 = var47[var52];
            var47 = var50.bind(var5)(var47);
            var47 = var47.t;
            var47 = var47.wSnI/0;
            _fun0001_ip = 98; continue _fun0001;
case 96:
            var51 = _closure1_slot0;
            var50 = _closure1_slot2;
            var50 = var50[var52];
            var50 = var51.bind(var5)(var50);
            var50 = var50.t;
            var47 = var50.mNZcD8;
case 98:
            var47 = var48.bind(var49)(var47);
            var44['text'] = var47;
            var44['isExpanded'] = var46;
            var44 = var43.bind(var5)(var45, var44);
            var32['children'] = var44;
            var27 = var43.bind(var5)(var39, var32);
case 94:
            var26[1] = var27;
            var21['children'] = var26;
            var21 = var20.bind(var5)(var22, var21);
            var18['backdropChildren'] = var21;
            var27 = _closure1_slot15;
            var22 = _closure1_slot21;
            var21 = {};
            var21['target'] = var23;
            var22 = var27.bind(var5)(var22, var21);
            var21 = new Array(4);
            var21[0] = var22;
            var26 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 53;
            var22 = var32[var22];
            var26 = var26.bind(var5)(var22);
            var22 = {};
            var22['gradientHeight'] = var38;
            var22['bannerHeight'] = var34;
            var22 = var27.bind(var5)(var26, var22);
            var21[1] = var22;
            var26 = _closure1_slot0;
            var22 = 15;
            var22 = var32[var22];
            var22 = var26.bind(var5)(var22);
            var26 = var22.BottomSheetScrollView;
            var22 = {};
            var22['scrollsToTop'] = var31;
            var31 = var40.container;
            var22['style'] = var31;
            var31 = {};
            var32 = undefined;
            if(!var33) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var32 = 'none';
case 99:
            var31['pointerEvents'] = var32;
            var22['contentContainerStyle'] = var31;
            var22['ref'] = var29;
            var32 = _closure1_slot17;
            var31 = _closure1_slot5;
            var29 = {};
            var34 = _closure1_slot15;
            var33 = {};
            var38 = var40.bounceOffset;
            var33['style'] = var38;
            var34 = var34.bind(var5)(var31, var33);
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var38 = var40.profileContainer;
            var34['style'] = var38;
            var34['onLayout'] = var37;
            var35 = function(arg1) {
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
                        var1 = 54;
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
                        var1 = 54;
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
                    var1 = 57;
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
                    var3 = 56;
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
                    var2 = 55;
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
            var36 = var35.bind(var5)(var36);
            var35 = new Array(2);
            var35[0] = var36;
            var36 = var9 != var42;
            if(!var36) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var39 = _closure1_slot15;
            var38 = _closure1_slot1;
            var43 = _closure1_slot2;
            var37 = 58;
            var37 = var43[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var42 = var42.skuId;
            var37['skuId'] = var42;
            var37['bannerAdjustment'] = var41;
            var40 = var40.profileEffect;
            var37['style'] = var40;
            var36 = var39.bind(var5)(var38, var37);
case 107:
            var35[1] = var36;
            var34['children'] = var35;
            var34 = var32.bind(var5)(var31, var34);
            var33[1] = var34;
            var29['children'] = var33;
            var29 = var32.bind(var5)(var31, var29);
            var22['children'] = var29;
            var22 = var27.bind(var5)(var26, var22);
            var21[2] = var22;
            var27 = _closure1_slot15;
            var26 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 59;
            var22 = var29[var22];
            var22 = var26.bind(var5)(var22);
            var26 = var22.ActionSheetHeaderBar;
            var22 = {};
            var29 = 'floating';
            var22['variant'] = var29;
            var29 = {};
            var29['backgroundColor'] = var30;
            var22['tabStyle'] = var29;
            var22['onPress'] = var28;
            var22 = var27.bind(var5)(var26, var22);
            var21[3] = var22;
            var18['children'] = var21;
            var19 = var20.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var9 != var25;
            if(!var19) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var22 = _closure1_slot15;
            var21 = _closure1_slot1;
            var27 = _closure1_slot2;
            var20 = 60;
            var20 = var27[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['frame'] = var25;
            var25 = _closure1_slot10;
            var25 = var25.ACTION_SHEET;
            var20['profileThemeType'] = var25;
            var26 = _closure1_slot0;
            var25 = 14;
            var25 = var27[var25];
            var25 = var26.bind(var5)(var25);
            var25 = var25.ProfileFrameLayerOrder;
            var25 = var25.FRONT;
            var20['frameOrder'] = var25;
            var20['containerWidth'] = var24;
            var20['animatedPosition'] = var23;
            var19 = var22.bind(var5)(var21, var20);
case 109:
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
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
            var8 = 46;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var11 = 47;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.EmptyState;
            var11 = {};
            var13 = {};
            var14 = 42;
            var13['marginTop'] = var14;
            var11['style'] = var13;
            var13 = 48;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.NoResults;
            var11['Illustration'] = var13;
            var13 = 49;
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
    var4 = 61;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();