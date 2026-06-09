// app/modules/user_profile/native/UserProfileActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function UseAnimatedPosition(arg1) {
        var2 = arg1;
        var7 = var2.animatedPosition;
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
        var6['value'] = var8;
        var2['__closure'] = var6;
        var6 = 5684011437075.0;
        var2['__workletHash'] = var6;
        var6 = _closure1_slot20;
        var2['__initData'] = var6;
        var1 = function o(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.set;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = {};
        var6['animatedPosition'] = var7;
        var1['__closure'] = var6;
        var6 = 15360670503044.0;
        var1['__workletHash'] = var6;
        var5 = _closure1_slot21;
        var1['__initData'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function AnimatedActionSheetHeaderBar(arg1) {
        var1 = arg1;
        var13 = var1.animatedPosition;
        var _closure2_slot0 = var13;
        var12 = var1.safeAreaTop;
        var _closure2_slot1 = var12;
        var9 = var1.tabStyle;
        var8 = var1.onPress;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 16;
        var3 = var10[var1];
        var4 = undefined;
        var7 = var6.bind(var4)(var3);
        var3 = var7.useAnimatedStyle;
        var2 = function u() {
            var1 = {};
            var3 = {};
            var5 = _closure2_slot0;
            var4 = var5.get;
            var4 = var4.bind(var5)();
            var2 = _closure2_slot1;
            var2 = var4 + var2;
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            return var1;
        };
        var11 = {};
        var11['animatedPosition'] = var13;
        var11['safeAreaTop'] = var12;
        var2['__closure'] = var11;
        var11 = 8560285457923.0;
        var2['__workletHash'] = var11;
        var11 = _closure1_slot22;
        var2['__initData'] = var11;
        var11 = var3.bind(var7)(var2);
        var3 = _closure1_slot16;
        var2 = _closure1_slot1;
        var1 = var10[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var7 = _closure1_slot5;
        var12 = var7.absoluteFill;
        var7 = new Array(2);
        var7[0] = var12;
        var7[1] = var11;
        var1['style'] = var7;
        var7 = 'box-none';
        var1['pointerEvents'] = var7;
        var7 = _closure1_slot16;
        var5 = 17;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.ActionSheetHeaderBar;
        var5 = {};
        var10 = 'floating';
        var5['variant'] = var10;
        var5['tabStyle'] = var9;
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function ProfileFrameBackdrop(arg1) {
        var2 = arg1;
        var10 = var2.frame;
        var12 = var2.animatedPosition;
        var _closure2_slot0 = var12;
        var11 = var2.safeAreaTop;
        var _closure2_slot1 = var11;
        var5 = var2.containerWidth;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 16;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useDerivedValue;
        var1 = function s() {
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1 = _closure2_slot1;
            var1 = var2 + var1;
            return var1;
        };
        var7 = {};
        var7['animatedPosition'] = var12;
        var7['safeAreaTop'] = var11;
        var1['__closure'] = var7;
        var7 = 8268643017073.0;
        var1['__workletHash'] = var7;
        var7 = _closure1_slot23;
        var1['__initData'] = var7;
        var7 = var2.bind(var3)(var1);
        var3 = _closure1_slot16;
        var2 = _closure1_slot1;
        var1 = 18;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['frame'] = var10;
        var1['animatedPosition'] = var7;
        var7 = 14;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.ProfileFrameLayerOrder;
        var7 = var7.BACK;
        var1['frameOrder'] = var7;
        var6 = _closure1_slot11;
        var6 = var6.ACTION_SHEET;
        var1['profileThemeType'] = var6;
        var1['containerWidth'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var8 = var4.StyleSheet;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot12 = var8;
    var8 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.PROFILE_FRAME_Z_INDEX;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var8 = var4.Fragment;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
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
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}]};}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx4(){const{animatedPosition,safeAreaTop}=this.__closure;return animatedPosition.get()+safeAreaTop;}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = var7.memo;
    var2 = function UserProfileActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var19 = var2.channelId;
            var _closure2_slot1 = var19;
            var24 = var2.messageId;
            var22 = var2.roleId;
            var29 = var2.sessionId;
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
            var35 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var35 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var35 = false;
case 2:
            var _closure2_slot7 = var35;
            var15 = var2.showGuildProfile;
            if(!(var15 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = true;
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
            var2 = _closure1_slot19;
            var42 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 16;
            var7 = var2[var7];
            var8 = var6.bind(var5)(var7);
            var7 = var8.useSharedValue;
            var43 = 0;
            var31 = var7.bind(var8)(var43);
            var13 = 19;
            var7 = var2[var13];
            var10 = var6.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var38 = var9.bind(var10)(var8, var7);
            _closure2_slot10 = var38;
            var2 = var2[var13];
            var9 = var6.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = new Array(1);
            var6[0] = var19;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var7, var2, var6);
            _closure2_slot11 = var2;
            var9 = null;
            var6 = var9 == var2;
            var34 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var34 = var2.guild_id;
case 8:
            _closure2_slot12 = var34;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = var7[var13];
            var10 = var6.bind(var5)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var17 = var8.bind(var10)(var6, var2);
            _closure2_slot13 = var17;
            var6 = _closure1_slot1;
            var2 = 20;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var9 == var38;
            var6 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var38.id;
case 12:
            if(!(var9 == var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = _closure1_slot13;
case 14:
            var2 = undefined;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var34;
case 16:
            var10 = var7.bind(var5)(var6, var2);
            _closure2_slot14 = var10;
            var18 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 21;
            var7 = var6[var2];
            var8 = var18.bind(var5)(var7);
            var7 = new Array(1);
            var59 = var7;
            var58 = var4;
            var57 = 0;
            var14 = arraySpread(var59, var58, var57);
            var16 = 22;
            var16 = var6[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.USER_PROFILE_ACTION_SHEET;
            var7[13] = var16;
            var16 = 1;
            var14 = var14 + var16;
            var7 = var8.bind(var5)(var7);
            var8 = var7.analyticsLocations;
            _closure2_slot15 = var8;
            var7 = _closure1_slot0;
            var14 = 23;
            var14 = var6[var14];
            var18 = var7.bind(var5)(var14);
            var14 = var18.useBottomSheetRef;
            var14 = var14.bind(var18)();
            var23 = var14.bottomSheetRef;
            var28 = var14.bottomSheetClose;
            var20 = _closure1_slot4;
            var14 = var20.useRef;
            var26 = var14.bind(var20)(var9);
            _closure2_slot16 = var26;
            var14 = var20.useState;
            var33 = false;
            var14 = var14.bind(var20)(var33);
            var21 = _closure1_slot3;
            var18 = 2;
            var14 = var21.bind(var5)(var14, var18);
            var25 = var14[var43];
            _closure2_slot17 = var25;
            var14 = var14[var16];
            _closure2_slot18 = var14;
            var14 = var20.useState;
            var14 = var14.bind(var20)(var43);
            var14 = var21.bind(var5)(var14, var18);
            var27 = var14[var43];
            var14 = var14[var16];
            _closure2_slot19 = var14;
            var18 = var20.useCallback;
            var16 = function(arg1) {
                var3 = _closure2_slot19;
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
            var39 = var18.bind(var20)(var16, var14);
            var14 = 24;
            var14 = var6[var14];
            var14 = var7.bind(var5)(var14);
            var16 = var14.ProfileVisibility;
            var14 = var16.useSetting;
            var53 = var14.bind(var16)();
            var13 = var6[var13];
            var18 = var7.bind(var5)(var13);
            var16 = var18.useStateFromStoresObject;
            var13 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getPendingChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var16.bind(var18)(var14, var13);
            var18 = var13.pendingThemeColors;
            var16 = var13.pendingAvatarDecoration;
            _closure2_slot20 = var16;
            var21 = var13.pendingProfileEffect;
            _closure2_slot21 = var21;
            var20 = var13.pendingProfileFrame;
            _closure2_slot22 = var20;
            var14 = 25;
            var6 = var6[var14];
            var13 = var7.bind(var5)(var6);
            var7 = var13.useCreateUserProfileAnalyticsContext;
            var6 = {};
            var30 = 'ACTION_SHEET';
            var6['layout'] = var30;
            var6['sourceSessionId'] = var29;
            var6['userId'] = var1;
            var6['guildId'] = var34;
            var6['channelId'] = var19;
            var6['messageId'] = var24;
            var6['roleId'] = var22;
            var6['showGuildProfile'] = var15;
            var13 = var7.bind(var13)(var6);
            _closure2_slot23 = var13;
            if(!var35) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var20)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var6 = var9 == var10;
            var22 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var10.profileFrame;
            var7 = var9 == var6;
            var22 = undefined;
            if(var7) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var22 = var6.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var7 = var9 == var20;
            var6 = undefined;
            if(var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var20.skuId;
case 25:
            var22 = var6;
case 24:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 26;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useIsScreenLandscape;
            var24 = var6.bind(var7)();
            var7 = _closure1_slot1;
            var6 = 27;
            var6 = var15[var6];
            var15 = var7.bind(var5)(var6);
            var7 = undefined;
            if(var24) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = var22;
case 27:
            var6 = 'UserProfileActionSheet';
            var32 = var15.bind(var5)(var7, var6);
            _closure2_slot24 = var32;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 28;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var15 = undefined;
            if(var24) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var15 = var22;
case 29:
            var6['skuId'] = var15;
            var6['openedAt'] = var11;
            var6['context'] = var13;
            var6['analyticsLocations'] = var8;
            var6 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 29;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            if(!var35) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!(var5 === var21)) { _fun0001_ip = 33; continue _fun0001 }
case 31:
            var15 = var9 == var10;
            var6 = undefined;
            if(var15) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var15 = var10.profileEffect;
            var22 = var9 == var15;
            var6 = undefined;
            if(var22) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var6 = var15.skuId;
case 34:
            _fun0001_ip = 37; continue _fun0001;
case 33:
            var22 = var9 == var21;
            var15 = undefined;
            if(var22) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var15 = var21.skuId;
case 38:
            var6 = var15;
case 37:
            var44 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 30;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var38;
            var6['displayProfile'] = var10;
            var15 = undefined;
            if(!var35) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var15 = var18;
case 40:
            var6['pendingThemeColors'] = var15;
            var6 = var7.bind(var5)(var6);
            var15 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var41 = _closure1_slot1;
            var45 = _closure1_slot2;
            var18 = 31;
            var18 = var45[var18];
            var22 = var41.bind(var5)(var18);
            var18 = _closure1_slot15;
            var36 = var22.bind(var5)(var18);
            var18 = 32;
            var18 = var45[var18];
            var18 = var41.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var24 = var18.height;
            var22 = var18.width;
            _closure2_slot25 = var22;
            var18 = 33;
            var18 = var45[var18];
            var18 = var41.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var29 = var18.top;
            var30 = _closure1_slot0;
            var18 = 34;
            var18 = var45[var18];
            var18 = var30.bind(var5)(var18);
            var18 = var18.NAV_BAR_HEIGHT_MULTILINE;
            var18 = var24 - var18;
            var40 = var18 - var29;
            var18 = _closure1_slot4;
            var46 = var18.useMemo;
            var24 = new Array(3);
            var24[0] = var35;
            var24[1] = var32;
            var24[2] = var22;
            var22 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var3 = _closure2_slot24;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 42; continue _fun0003 }
case 44:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot25;
                    var3 = _closure1_slot15;
                    var4 = var5.bind(var6)(var4, var3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var1 = _closure2_slot24;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = var1.overflowTop;
                    return var1;
case 42:
                    var1 = 0;
                    return var1;
                }
            };
            var22 = var46.bind(var18)(var22, var24);
            var24 = 36;
            var24 = var45[var24];
            var24 = var41.bind(var5)(var24);
            var46 = var24.bind(var5)();
            var24 = 37;
            var24 = var45[var24];
            var47 = var30.bind(var5)(var24);
            var30 = var47.useToken;
            var24 = 13;
            var24 = var45[var24];
            var24 = var41.bind(var5)(var24);
            var24 = var24.colors;
            var24 = var24.INTERACTIVE_TEXT_HOVER;
            var30 = var30.bind(var47)(var24, var15);
            var24 = 38;
            var24 = var45[var24];
            var41 = var41.bind(var5)(var24);
            var24 = {};
            var24['userId'] = var1;
            var24['user'] = var38;
            var24['channelId'] = var19;
            var24['guildId'] = var34;
            var24['displayProfile'] = var10;
            var24['guildMember'] = var17;
            var41 = var41.bind(var5)(var24);
            _closure2_slot26 = var41;
            var47 = var18.useMemo;
            var45 = new Array(2);
            var45[0] = var38;
            var45[1] = var19;
            var24 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 45; continue _fun0004 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 39;
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
            var24 = var47.bind(var18)(var24, var45);
            _closure2_slot27 = var24;
            var47 = var18.useEffect;
            var45 = new Array(2);
            var45[0] = var38;
            var45[1] = var1;
            var24 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 40;
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
            var24 = var47.bind(var18)(var24, var45);
            var45 = var18.useEffect;
            var24 = new Array(3);
            var24[0] = var38;
            var24[1] = var34;
            var24[2] = var19;
            var19 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0006_ip = 48; continue _fun0006 }
case 11:
                    var3 = _closure2_slot10;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 41;
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
                    if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 42;
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
                    if(!var8) { _fun0006_ip = 53; continue _fun0006 }
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
            var19 = var45.bind(var18)(var19, var24);
            var24 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var41;
            var19[1] = var10;
            var19[2] = var34;
            var19[3] = var25;
            var19[4] = var17;
            var17 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 43:
                    var4 = _closure2_slot14;
                    var3 = null;
                    var2 = var3 == var4;
case 44:
                    if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var2 = _closure2_slot12;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var3 = _closure2_slot13;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var5 = _closure2_slot13;
                    var3 = var5.fullProfileLoadedTimestamp;
case 59:
                    var2 = var4 != var3;
case 57:
                    if(!var2) { _fun0007_ip = 55; continue _fun0007 }
case 61:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 43;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot12;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot26;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot18;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var24.bind(var18)(var17, var19);
            var17 = var18.useEffect;
            var24 = var9 == var16;
            var19 = undefined;
            if(var24) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var19 = var16.skuId;
case 62:
            var16 = new Array(4);
            var16[0] = var19;
            var24 = var9 == var21;
            var19 = undefined;
            if(var24) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var19 = var21.skuId;
case 64:
            var16[1] = var19;
            var21 = var9 == var20;
            var19 = undefined;
            if(var21) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var19 = var20.skuId;
case 66:
            var16[2] = var19;
            var16[3] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.at;
                    var1 = -1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 43;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
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
                    if(var7) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var7 = _closure2_slot20;
                    var6 = var7.skuId;
case 70:
                    if(!(var9 == var6)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var7 = _closure2_slot21;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var10 = _closure2_slot21;
                    var7 = var10.skuId;
case 74:
                    var6 = var7;
case 72:
                    if(!(var9 == var6)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var7 = _closure2_slot22;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0008_ip = 78; continue _fun0008 }
case 51:
                    var8 = _closure2_slot22;
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
            var4 = var17.bind(var18)(var4, var16);
            var16 = _closure1_slot4;
            var17 = var16.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0009_ip = 56; continue _fun0009 }
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
            var3 = var17.bind(var16)(var3, var4);
            var4 = var16.useEffect;
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
                            if(var4) { _fun0011_ip = 79; continue _fun0011 }
case 44:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0011_ip = 79; continue _fun0011 }
case 10:
                            var3 = var4.key;
case 79:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 45;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 46;
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
                    var2 = 44;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0010_ip = 84; continue _fun0010 }
case 82:
                    return var2;
case 84:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                    var2 = var3.key;
case 85:
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
            var1 = var4.bind(var16)(var1, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 47;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot28 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 46;
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
            _closure2_slot29 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot28;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot29;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot30 = var1;
            if(!(var9 != var38)) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var4 = _closure1_slot16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var34 = 52;
            var1 = var16[var34];
            var1 = var17.bind(var5)(var1);
            var3 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var15;
            var1['primaryColor'] = var7;
            var1['secondaryColor'] = var6;
            var15 = _closure1_slot16;
            var6 = var16[var2];
            var6 = var17.bind(var5)(var6);
            var7 = var6.AnalyticsLocationProvider;
            var6 = {};
            var6['value'] = var8;
            var18 = _closure1_slot18;
            var16 = var16[var14];
            var16 = var17.bind(var5)(var16);
            var17 = var16.UserProfileAnalyticsProvider;
            var16 = {};
            var16['value'] = var13;
            var16['openedAt'] = var11;
            var20 = var9 == var10;
            var19 = undefined;
            if(var20) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var19 = var10.fetchStartedAt;
case 89:
            var16['fetchStartedAt'] = var19;
            var20 = var9 == var10;
            var19 = undefined;
            if(var20) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var19 = var10.fetchEndedAt;
case 91:
            var16['fetchEndedAt'] = var19;
            var20 = var9 == var10;
            var19 = undefined;
            if(var20) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var19 = var10.isLoaded;
case 93:
            var16['isLoaded'] = var19;
            var21 = _closure1_slot18;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 48;
            var19 = var24[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.BottomSheet;
            var19 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var19['ref'] = var23;
            var49 = true;
            var22 = var40 - var22;
            var19['maxHeight'] = var22;
            var22 = var42.noPadding;
            var19['contentStyles'] = var22;
            var23 = _closure1_slot17;
            var22 = {};
            var25 = var9 != var32;
            if(!var25) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var45 = _closure1_slot16;
            var41 = _closure1_slot26;
            var24 = {};
            var24['frame'] = var32;
            var24['animatedPosition'] = var31;
            var24['safeAreaTop'] = var29;
            var24['containerWidth'] = var27;
            var25 = var45.bind(var5)(var41, var24);
case 95:
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var35;
            if(!var25) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var45 = _closure1_slot16;
            var54 = _closure1_slot0;
            var56 = _closure1_slot2;
            var34 = var56[var34];
            var34 = var54.bind(var5)(var34);
            var41 = var34.ThemeContextProvider;
            var34 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var34['theme'] = var46;
            var48 = _closure1_slot16;
            var46 = 53;
            var46 = var56[var46];
            var46 = var54.bind(var5)(var46);
            var47 = var46.ActionSheetBackdropToast;
            var46 = {};
            var55 = 51;
            var50 = var56[var55];
            var50 = var54.bind(var5)(var50);
            var52 = var50.intl;
            var51 = var52.string;
            var50 = 54;
            var50 = var56[var50];
            var50 = var54.bind(var5)(var50);
            var50 = var50.ProfileVisibility;
            var50 = var50.FRIENDS_ONLY;
            if(!(var53 !== var50)) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var53 = _closure1_slot0;
            var50 = _closure1_slot2;
            var50 = var50[var55];
            var50 = var53.bind(var5)(var50);
            var50 = var50.t;
            var50 = var50.wSnI/0;
            _fun0001_ip = 101; continue _fun0001;
case 99:
            var54 = _closure1_slot0;
            var53 = _closure1_slot2;
            var53 = var53[var55];
            var53 = var54.bind(var5)(var53);
            var53 = var53.t;
            var50 = var53.mNZcD8;
case 101:
            var50 = var51.bind(var52)(var50);
            var46['text'] = var50;
            var46['isExpanded'] = var49;
            var46 = var48.bind(var5)(var47, var46);
            var34['children'] = var46;
            var25 = var45.bind(var5)(var41, var34);
case 97:
            var24[1] = var25;
            var22['children'] = var24;
            var22 = var21.bind(var5)(var23, var22);
            var19['backdropChildren'] = var22;
            var23 = var9 != var32;
            if(!var23) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var25 = _closure1_slot16;
            var24 = _closure1_slot24;
            var22 = {};
            var22['animatedPosition'] = var31;
            var23 = var25.bind(var5)(var24, var22);
case 102:
            var22 = new Array(4);
            var22[0] = var23;
            var25 = _closure1_slot16;
            var24 = _closure1_slot1;
            var34 = _closure1_slot2;
            var23 = 55;
            var23 = var34[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['gradientHeight'] = var40;
            var23['bannerHeight'] = var36;
            var23 = var25.bind(var5)(var24, var23);
            var22[1] = var23;
            var25 = _closure1_slot16;
            var24 = _closure1_slot0;
            var23 = 15;
            var23 = var34[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.BottomSheetScrollView;
            var23 = {};
            var23['scrollsToTop'] = var33;
            var33 = var42.container;
            var23['style'] = var33;
            var33 = {};
            var34 = undefined;
            if(!var35) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var34 = 'none';
case 104:
            var33['pointerEvents'] = var34;
            var23['contentContainerStyle'] = var33;
            var23['ref'] = var26;
            var34 = _closure1_slot18;
            var33 = _closure1_slot6;
            var26 = {};
            var36 = _closure1_slot16;
            var35 = {};
            var40 = var42.bounceOffset;
            var35['style'] = var40;
            var36 = var36.bind(var5)(var33, var35);
            var35 = new Array(2);
            var35[0] = var36;
            var36 = {};
            var40 = var42.profileContainer;
            var36['style'] = var40;
            var36['onLayout'] = var39;
            var37 = function(arg1) {
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
                    var4 = _closure2_slot27;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot16;
                    var6['scrollViewRef'] = var4;
                    var4 = _closure2_slot7;
                    var6['isPreviewingChanges'] = var4;
                    var4 = function navigateToShop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot14;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot30;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToShop'] = var4;
                    var3 = function navigateToPremium() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot14;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot30;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var3 = _closure2_slot29;
                    var6['showUserProfileActionSheet'] = var3;
                    var2 = _closure2_slot9;
                    var6['initialSection'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                    var1 = var1.bot;
                    var7 = _closure1_slot16;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if(var1) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                    var1 = 59;
                    var1 = var5[var1];
                    var8 = undefined;
                    var3 = var4.bind(var8)(var1);
                    var1 = {};
                    var11 = var1;
                    var10 = var6;
                    var9 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var8)(var3, var1);
                    _fun0012_ip = 110; continue _fun0012;
case 108:
                    var3 = 58;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var6;
                    var8 = copyDataProperties(var11, var10);
                    var1 = var7.bind(var5)(var4, var3);
case 110:
                    _fun0012_ip = 111; continue _fun0012;
case 106:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 57;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = var2;
                    var10 = var6;
                    var6 = copyDataProperties(var11, var10);
                    var1 = var5.bind(var4)(var3, var2);
case 111:
                    return var1;
                }
            };
            var38 = var37.bind(var5)(var38);
            var37 = new Array(2);
            var37[0] = var38;
            var38 = var9 != var44;
            if(!var38) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var41 = _closure1_slot16;
            var40 = _closure1_slot1;
            var45 = _closure1_slot2;
            var39 = 60;
            var39 = var45[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var44 = var44.skuId;
            var39['skuId'] = var44;
            var39['bannerAdjustment'] = var43;
            var42 = var42.profileEffect;
            var39['style'] = var42;
            var38 = var41.bind(var5)(var40, var39);
case 112:
            var37[1] = var38;
            var36['children'] = var37;
            var36 = var34.bind(var5)(var33, var36);
            var35[1] = var36;
            var26['children'] = var35;
            var26 = var34.bind(var5)(var33, var26);
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[2] = var23;
            var23 = var9 == var32;
            if(!var23) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var26 = _closure1_slot16;
            var25 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 17;
            var24 = var33[var24];
            var24 = var25.bind(var5)(var24);
            var25 = var24.ActionSheetHeaderBar;
            var24 = {};
            var33 = 'floating';
            var24['variant'] = var33;
            var33 = {};
            var33['backgroundColor'] = var30;
            var24['tabStyle'] = var33;
            var24['onPress'] = var28;
            var23 = var26.bind(var5)(var25, var24);
case 114:
            var22[3] = var23;
            var19['children'] = var22;
            var20 = var21.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var9 != var32;
            if(!var20) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var23 = _closure1_slot18;
            var22 = _closure1_slot17;
            var21 = {};
            var26 = _closure1_slot16;
            var25 = _closure1_slot1;
            var34 = _closure1_slot2;
            var24 = 18;
            var24 = var34[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var24['frame'] = var32;
            var32 = _closure1_slot11;
            var32 = var32.ACTION_SHEET;
            var24['profileThemeType'] = var32;
            var33 = _closure1_slot0;
            var32 = 14;
            var32 = var34[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.ProfileFrameLayerOrder;
            var32 = var32.FRONT;
            var24['frameOrder'] = var32;
            var24['containerWidth'] = var27;
            var24['animatedPosition'] = var31;
            var24['safeAreaTop'] = var29;
            var25 = var26.bind(var5)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot16;
            var26 = _closure1_slot25;
            var25 = {};
            var25['animatedPosition'] = var31;
            var25['safeAreaTop'] = var29;
            var29 = {};
            var29['backgroundColor'] = var30;
            var25['tabStyle'] = var29;
            var25['onPress'] = var28;
            var25 = var27.bind(var5)(var26, var25);
            var24[1] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 116:
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var6['children'] = var16;
            var6 = var15.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 118; continue _fun0001;
case 87:
            var4 = _closure1_slot16;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var8;
            var8 = _closure1_slot16;
            var6 = var6[var14];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileAnalyticsProvider;
            var6 = {};
            var6['value'] = var13;
            var6['openedAt'] = var11;
            var13 = var9 == var10;
            var11 = undefined;
            if(var13) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var11 = var10.fetchStartedAt;
case 119:
            var6['fetchStartedAt'] = var11;
            var13 = var9 == var10;
            var11 = undefined;
            if(var13) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var11 = var10.fetchEndedAt;
case 121:
            var6['fetchEndedAt'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 123; continue _fun0001 }
case 124:
            var9 = var10.isLoaded;
case 123:
            var6['isLoaded'] = var9;
            var11 = _closure1_slot16;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 48;
            var9 = var19[var9];
            var9 = var18.bind(var5)(var9);
            var10 = var9.BottomSheet;
            var9 = {};
            var14 = _closure1_slot16;
            var12 = 49;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var13 = var12.EmptyState;
            var12 = {};
            var15 = {};
            var16 = 42;
            var15['marginTop'] = var16;
            var12['style'] = var15;
            var15 = 50;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.NoResults;
            var12['Illustration'] = var15;
            var15 = 51;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.eAn6z2;
            var15 = var16.bind(var17)(var15);
            var12['body'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 118:
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