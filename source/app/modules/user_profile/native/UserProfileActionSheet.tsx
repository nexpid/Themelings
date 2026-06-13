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
        var2 = function o() {
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
        var6 = _closure1_slot19;
        var2['__initData'] = var6;
        var1 = function n(arg1) {
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
        var5 = _closure1_slot20;
        var1['__initData'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ActionSheetAlignedView(arg1) {
        var1 = arg1;
        var13 = var1.animatedPosition;
        var _closure2_slot0 = var13;
        var10 = var1.animatedIndex;
        var _closure2_slot1 = var10;
        var12 = var1.safeAreaTop;
        var _closure2_slot2 = var12;
        var5 = var1.children;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 16;
        var3 = var8[var1];
        var4 = undefined;
        var7 = var11.bind(var4)(var3);
        var3 = var7.useAnimatedStyle;
        var2 = function u() {
            var1 = {};
            var3 = {};
            var5 = _closure2_slot0;
            var2 = var5.get;
            var5 = var2.bind(var5)();
            var2 = _closure2_slot2;
            var2 = var5 + var2;
            var3['translateY'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['transform'] = var2;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 16;
            var5 = var9[var2];
            var3 = undefined;
            var7 = var8.bind(var3)(var5);
            var6 = var7.interpolate;
            var5 = _closure2_slot1;
            var4 = var5.get;
            var5 = var4.bind(var5)();
            var4 = new Array(2);
            var10 = -1;
            var4[0] = var10;
            var10 = 0;
            var4[1] = var10;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.Extrapolation;
            var11 = var2.CLAMP;
            var12 = [0, 1];
            var15 = var7;
            var14 = var5;
            var13 = var4;
            var2 = var15[var6](var14, var13, var12, var11, var10);
            var1['opacity'] = var2;
            return var1;
        };
        var9 = {};
        var9['animatedPosition'] = var13;
        var9['safeAreaTop'] = var12;
        var12 = var8[var1];
        var12 = var11.bind(var4)(var12);
        var12 = var12.interpolate;
        var9['interpolate'] = var12;
        var9['animatedIndex'] = var10;
        var10 = var8[var1];
        var10 = var11.bind(var4)(var10);
        var10 = var10.Extrapolation;
        var9['Extrapolation'] = var10;
        var2['__closure'] = var9;
        var9 = 16546700050596.0;
        var2['__workletHash'] = var9;
        var9 = _closure1_slot21;
        var2['__initData'] = var9;
        var7 = var3.bind(var7)(var2);
        var3 = _closure1_slot16;
        var2 = _closure1_slot1;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var6 = _closure1_slot5;
        var8 = var6.absoluteFill;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var6 = 'box-none';
        var1['pointerEvents'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
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
    var8 = 'function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}';
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
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
            var23 = var2.roleId;
            var25 = var2.sessionId;
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
            var20 = var2.isPreviewingChanges;
            var5 = undefined;
            if(!(var20 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = false;
case 2:
            var _closure2_slot7 = var20;
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
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var2 = _closure1_slot18;
            var48 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 16;
            var8 = var2[var7];
            var9 = var6.bind(var5)(var8);
            var8 = var9.useSharedValue;
            var49 = 0;
            var32 = var8.bind(var9)(var49);
            _closure2_slot10 = var32;
            var7 = var2[var7];
            var9 = var6.bind(var5)(var7);
            var8 = var9.useSharedValue;
            var7 = -1;
            var28 = var8.bind(var9)(var7);
            _closure2_slot11 = var28;
            var8 = _closure1_slot1;
            var7 = 17;
            var7 = var2[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.bind(var5)();
            var29 = var7.top;
            _closure2_slot12 = var29;
            var13 = 18;
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
            var44 = var9.bind(var10)(var8, var7);
            _closure2_slot13 = var44;
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
            _closure2_slot14 = var2;
            var9 = null;
            var6 = var9 == var2;
            var37 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var37 = var2.guild_id;
case 8:
            _closure2_slot15 = var37;
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
                    var3 = _closure2_slot15;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var17 = var8.bind(var10)(var6, var2);
            _closure2_slot16 = var17;
            var6 = _closure1_slot1;
            var2 = 19;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var9 == var44;
            var6 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var44.id;
case 12:
            if(!(var9 == var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = _closure1_slot13;
case 14:
            var2 = undefined;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var37;
case 16:
            var10 = var7.bind(var5)(var6, var2);
            _closure2_slot17 = var10;
            var18 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 20;
            var7 = var6[var2];
            var8 = var18.bind(var5)(var7);
            var7 = new Array(1);
            var54 = var7;
            var53 = var4;
            var52 = 0;
            var14 = arraySpread(var54, var53, var52);
            var16 = 21;
            var16 = var6[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.USER_PROFILE_ACTION_SHEET;
            var7[13] = var16;
            var16 = 1;
            var14 = var14 + var16;
            var7 = var8.bind(var5)(var7);
            var8 = var7.analyticsLocations;
            _closure2_slot18 = var8;
            var7 = _closure1_slot0;
            var14 = 22;
            var14 = var6[var14];
            var18 = var7.bind(var5)(var14);
            var14 = var18.useBottomSheetRef;
            var14 = var14.bind(var18)();
            var27 = var14.bottomSheetRef;
            var33 = var14.bottomSheetClose;
            var21 = _closure1_slot4;
            var14 = var21.useRef;
            var38 = var14.bind(var21)(var9);
            _closure2_slot19 = var38;
            var14 = var21.useState;
            var39 = false;
            var14 = var14.bind(var21)(var39);
            var22 = _closure1_slot3;
            var18 = 2;
            var14 = var22.bind(var5)(var14, var18);
            var34 = var14[var49];
            _closure2_slot20 = var34;
            var14 = var14[var16];
            _closure2_slot21 = var14;
            var14 = var21.useState;
            var14 = var14.bind(var21)(var49);
            var14 = var22.bind(var5)(var14, var18);
            var36 = var14[var49];
            _closure2_slot22 = var36;
            var14 = var14[var16];
            _closure2_slot23 = var14;
            var18 = var21.useCallback;
            var16 = function(arg1) {
                var3 = _closure2_slot23;
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
            var45 = var18.bind(var21)(var16, var14);
            var14 = 23;
            var14 = var6[var14];
            var14 = var7.bind(var5)(var14);
            var16 = var14.ProfileVisibility;
            var14 = var16.useSetting;
            var31 = var14.bind(var16)();
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
            _closure2_slot24 = var16;
            var22 = var13.pendingProfileEffect;
            _closure2_slot25 = var22;
            var21 = var13.pendingProfileFrame;
            _closure2_slot26 = var21;
            var14 = 24;
            var6 = var6[var14];
            var13 = var7.bind(var5)(var6);
            var7 = var13.useCreateUserProfileAnalyticsContext;
            var6 = {};
            var26 = 'ACTION_SHEET';
            var6['layout'] = var26;
            var6['sourceSessionId'] = var25;
            var6['userId'] = var1;
            var6['guildId'] = var37;
            var6['channelId'] = var19;
            var6['messageId'] = var24;
            var6['roleId'] = var23;
            var6['showGuildProfile'] = var15;
            var13 = var7.bind(var13)(var6);
            _closure2_slot27 = var13;
            if(!var20) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var5 === var21)) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var6 = var9 == var10;
            var23 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var10.profileFrame;
            var7 = var9 == var6;
            var23 = undefined;
            if(var7) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var23 = var6.skuId;
case 21:
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var7 = var9 == var21;
            var6 = undefined;
            if(var7) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var21.skuId;
case 25:
            var23 = var6;
case 24:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 25;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useIsScreenLandscape;
            var24 = var6.bind(var7)();
            var7 = _closure1_slot1;
            var6 = 26;
            var6 = var15[var6];
            var15 = var7.bind(var5)(var6);
            var7 = undefined;
            if(var24) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = var23;
case 27:
            var6 = 'UserProfileActionSheet';
            var30 = var15.bind(var5)(var7, var6);
            _closure2_slot28 = var30;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 27;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var15 = undefined;
            if(var24) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var15 = var23;
case 29:
            var6['skuId'] = var15;
            var6['openedAt'] = var11;
            var6['context'] = var13;
            var6['analyticsLocations'] = var8;
            var6 = var7.bind(var5)(var6);
            var23 = _closure1_slot4;
            var15 = var23.useMemo;
            var7 = new Array(5);
            var7[0] = var30;
            var7[1] = var32;
            var7[2] = var29;
            var7[3] = var28;
            var7[4] = var36;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot28;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var5 = _closure1_slot16;
                    var4 = _closure1_slot23;
                    var3 = {};
                    var2 = _closure2_slot10;
                    var3['animatedPosition'] = var2;
                    var2 = _closure2_slot12;
                    var3['safeAreaTop'] = var2;
                    var2 = _closure2_slot11;
                    var3['animatedIndex'] = var2;
                    var8 = _closure1_slot16;
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 28;
                    var6 = var13[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = {};
                    var11 = _closure2_slot28;
                    var6['frame'] = var11;
                    var12 = _closure1_slot0;
                    var11 = 14;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.ProfileFrameLayerOrder;
                    var11 = var11.BACK;
                    var6['frameOrder'] = var11;
                    var10 = _closure1_slot11;
                    var10 = var10.ACTION_SHEET;
                    var6['profileThemeType'] = var10;
                    var9 = _closure2_slot22;
                    var6['containerWidth'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 31:
                    return var1;
                }
            };
            var25 = var15.bind(var23)(var6, var7);
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 29;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            if(!var20) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            if(!(var5 === var22)) { _fun0001_ip = 35; continue _fun0001 }
case 33:
            var15 = var9 == var10;
            var6 = undefined;
            if(var15) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var15 = var10.profileEffect;
            var23 = var9 == var15;
            var6 = undefined;
            if(var23) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var6 = var15.skuId;
case 36:
            _fun0001_ip = 39; continue _fun0001;
case 35:
            var23 = var9 == var22;
            var15 = undefined;
            if(var23) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var15 = var22.skuId;
case 40:
            var6 = var15;
case 39:
            var50 = var7.bind(var5)(var6);
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 30;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var44;
            var6['displayProfile'] = var10;
            var15 = undefined;
            if(!var20) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var15 = var18;
case 42:
            var6['pendingThemeColors'] = var15;
            var6 = var7.bind(var5)(var6);
            var15 = var6.theme;
            var7 = var6.primaryColor;
            var6 = var6.secondaryColor;
            var40 = _closure1_slot1;
            var46 = _closure1_slot2;
            var18 = 31;
            var18 = var46[var18];
            var23 = var40.bind(var5)(var18);
            var18 = _closure1_slot15;
            var41 = var23.bind(var5)(var18);
            var18 = 32;
            var18 = var46[var18];
            var18 = var40.bind(var5)(var18);
            var18 = var18.bind(var5)();
            var24 = var18.height;
            var23 = var18.width;
            _closure2_slot29 = var23;
            var35 = _closure1_slot0;
            var18 = 33;
            var18 = var46[var18];
            var18 = var35.bind(var5)(var18);
            var18 = var18.NAV_BAR_HEIGHT_MULTILINE;
            var18 = var24 - var18;
            var42 = var18 - var29;
            var18 = _closure1_slot4;
            var26 = var18.useMemo;
            var24 = new Array(3);
            var24[0] = var20;
            var24[1] = var30;
            var24[2] = var23;
            var23 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var3 = _closure2_slot28;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 44; continue _fun0004 }
case 46:
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot29;
                    var3 = _closure1_slot15;
                    var4 = var5.bind(var6)(var4, var3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 34;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var1 = _closure2_slot28;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = var1.overflowTop;
                    return var1;
case 44:
                    var1 = 0;
                    return var1;
                }
            };
            var26 = var26.bind(var18)(var23, var24);
            var23 = 35;
            var23 = var46[var23];
            var23 = var40.bind(var5)(var23);
            var24 = var23.bind(var5)();
            var23 = 36;
            var23 = var46[var23];
            var47 = var35.bind(var5)(var23);
            var35 = var47.useToken;
            var23 = 13;
            var23 = var46[var23];
            var23 = var40.bind(var5)(var23);
            var23 = var23.colors;
            var23 = var23.INTERACTIVE_TEXT_HOVER;
            var35 = var35.bind(var47)(var23, var15);
            var23 = 37;
            var23 = var46[var23];
            var40 = var40.bind(var5)(var23);
            var23 = {};
            var23['userId'] = var1;
            var23['user'] = var44;
            var23['channelId'] = var19;
            var23['guildId'] = var37;
            var23['displayProfile'] = var10;
            var23['guildMember'] = var17;
            var40 = var40.bind(var5)(var23);
            _closure2_slot30 = var40;
            var47 = var18.useMemo;
            var46 = new Array(2);
            var46[0] = var44;
            var46[1] = var19;
            var23 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0005_ip = 47; continue _fun0005 }
case 11:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 38;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.shouldDisableUserPresenceInChannel;
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 47:
                    return var1;
                }
            };
            var23 = var47.bind(var18)(var23, var46);
            _closure2_slot31 = var23;
            var47 = var18.useEffect;
            var46 = new Array(2);
            var46[0] = var44;
            var46[1] = var1;
            var23 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var47.bind(var18)(var23, var46);
            var46 = var18.useEffect;
            var23 = new Array(3);
            var23[0] = var44;
            var23[1] = var37;
            var23[2] = var19;
            var19 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot13;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 11:
                    var3 = _closure2_slot13;
                    var2 = var3.isNonUserBot;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 40;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot13;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 51:
                    var1 = var2;
case 50:
                    if(var1) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 41;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var1 = _closure2_slot13;
                    var3 = var1.id;
                    var9 = _closure2_slot13;
                    var6 = var9.getAvatarURL;
                    var2 = _closure2_slot15;
                    var1 = 80;
                    var2 = var6.bind(var9)(var2, var1);
                    var1 = {'type': 'action_sheet', 'withMutualGuilds': true, 'withMutualFriends': true, 'dispatchWait': true};
                    var6 = _closure2_slot15;
                    var1['guildId'] = var6;
                    var6 = _closure2_slot1;
                    var8 = var8 != var6;
                    var6 = undefined;
                    if(!var8) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var6 = _closure2_slot1;
case 55:
                    var1['channelId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var46.bind(var18)(var19, var23);
            var23 = var18.useEffect;
            var19 = new Array(5);
            var19[0] = var40;
            var19[1] = var10;
            var19[2] = var37;
            var19[3] = var34;
            var19[4] = var17;
            var17 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot20;
                    if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 45:
                    var4 = _closure2_slot17;
                    var3 = null;
                    var2 = var3 == var4;
case 46:
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var2 = _closure2_slot15;
                    var4 = null;
                    var2 = var4 == var2;
                    if(var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var3 = _closure2_slot16;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var5 = _closure2_slot16;
                    var3 = var5.fullProfileLoadedTimestamp;
case 61:
                    var2 = var4 != var3;
case 59:
                    if(!var2) { _fun0008_ip = 57; continue _fun0008 }
case 63:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 42;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var2 = _closure1_slot12;
                    var4 = var2.OPEN_POPOUT;
                    var2 = _closure2_slot30;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot21;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var23.bind(var18)(var17, var19);
            var17 = var18.useEffect;
            var23 = var9 == var16;
            var19 = undefined;
            if(var23) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var19 = var16.skuId;
case 64:
            var16 = new Array(4);
            var16[0] = var19;
            var23 = var9 == var22;
            var19 = undefined;
            if(var23) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var19 = var22.skuId;
case 66:
            var16[1] = var19;
            var22 = var9 == var21;
            var19 = undefined;
            if(var22) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var19 = var21.skuId;
case 68:
            var16[2] = var19;
            var16[3] = var4;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.at;
                    var1 = -1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                    if(!(var4 === var3)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 42;
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
                    var6 = _closure2_slot24;
                    var9 = null;
                    var7 = var9 == var6;
                    var6 = undefined;
                    if(var7) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                    var7 = _closure2_slot24;
                    var6 = var7.skuId;
case 72:
                    if(!(var9 == var6)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var7 = _closure2_slot25;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var10 = _closure2_slot25;
                    var7 = var10.skuId;
case 76:
                    var6 = var7;
case 74:
                    if(!(var9 == var6)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var7 = _closure2_slot26;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0009_ip = 80; continue _fun0009 }
case 53:
                    var8 = _closure2_slot26;
                    var7 = var8.skuId;
case 80:
                    var6 = var7;
case 78:
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 70:
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
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 58; continue _fun0010 }
case 49:
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 58:
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
                            if(var4) { _fun0012_ip = 81; continue _fun0012 }
case 46:
                            var6 = _closure3_slot0;
                            var4 = var6.getCurrentRoute;
                            var4 = var4.bind(var6)();
                            var5 = var5 == var4;
                            var3 = undefined;
                            if(var5) { _fun0012_ip = 81; continue _fun0012 }
case 10:
                            var3 = var4.key;
case 81:
                            var2 = _closure3_slot1;
                            if(!(var3 !== var2)) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 44;
                            var3 = var6[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var5 = _closure1_slot0;
                            var2 = 45;
                            var2 = var6[var2];
                            var6 = var5.bind(var1)(var2);
                            var5 = var6.getUserProfileActionSheetKey;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
case 82:
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 43;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                    var3 = var4.isReady;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0011_ip = 86; continue _fun0011 }
case 84:
                    return var2;
case 86:
                    var3 = var4.getCurrentRoute;
                    var3 = var3.bind(var4)();
                    var6 = var6 == var3;
                    var2 = undefined;
                    if(var6) { _fun0011_ip = 87; continue _fun0011 }
case 88:
                    var2 = var3.key;
case 87:
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
            var1 = 46;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot32 = var1;
            var1 = function showUserProfileActionSheetWithParams() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot18;
                var2['sourceAnalyticsLocations'] = var5;
                var6 = _closure2_slot27;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            _closure2_slot33 = var1;
            var1 = function handleUserSettingsClose() {
                var3 = _closure2_slot32;
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot33;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            _closure2_slot34 = var1;
            if(!(var9 != var44)) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var4 = _closure1_slot16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var21 = 51;
            var1 = var16[var21];
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
            var18 = _closure1_slot17;
            var16 = var16[var14];
            var16 = var17.bind(var5)(var16);
            var17 = var16.UserProfileAnalyticsProvider;
            var16 = {};
            var16['value'] = var13;
            var16['openedAt'] = var11;
            var22 = var9 == var10;
            var19 = undefined;
            if(var22) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var19 = var10.fetchStartedAt;
case 91:
            var16['fetchStartedAt'] = var19;
            var22 = var9 == var10;
            var19 = undefined;
            if(var22) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var19 = var10.fetchEndedAt;
case 93:
            var16['fetchEndedAt'] = var19;
            var22 = var9 == var10;
            var19 = undefined;
            if(var22) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var19 = var10.isLoaded;
case 95:
            var16['isLoaded'] = var19;
            var23 = _closure1_slot17;
            var22 = _closure1_slot0;
            var34 = _closure1_slot2;
            var19 = 47;
            var19 = var34[var19];
            var19 = var22.bind(var5)(var19);
            var22 = var19.BottomSheet;
            var19 = {'ref': null, 'handleDisabled': true, 'scrollable': true, 'startExpanded': true};
            var19['ref'] = var27;
            var27 = true;
            var26 = var42 - var26;
            var19['maxHeight'] = var26;
            var26 = var48.noPadding;
            var19['contentStyles'] = var26;
            var19['backdropChildren'] = var25;
            var19['animatedIndex'] = var28;
            var26 = var9 != var30;
            if(!var26) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var37 = _closure1_slot16;
            var34 = _closure1_slot22;
            var25 = {};
            var25['animatedPosition'] = var32;
            var26 = var37.bind(var5)(var34, var25);
case 97:
            var25 = new Array(4);
            var25[0] = var26;
            var37 = _closure1_slot16;
            var34 = _closure1_slot1;
            var40 = _closure1_slot2;
            var26 = 52;
            var26 = var40[var26];
            var34 = var34.bind(var5)(var26);
            var26 = {};
            var26['gradientHeight'] = var42;
            var26['bannerHeight'] = var41;
            var26 = var37.bind(var5)(var34, var26);
            var25[1] = var26;
            var37 = _closure1_slot16;
            var34 = _closure1_slot0;
            var26 = 15;
            var26 = var40[var26];
            var26 = var34.bind(var5)(var26);
            var34 = var26.BottomSheetScrollView;
            var26 = {};
            var26['scrollsToTop'] = var39;
            var39 = var48.container;
            var26['style'] = var39;
            var39 = {};
            var40 = undefined;
            if(!var20) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var40 = 'none';
case 99:
            var39['pointerEvents'] = var40;
            var26['contentContainerStyle'] = var39;
            var26['ref'] = var38;
            var40 = _closure1_slot17;
            var39 = _closure1_slot6;
            var38 = {};
            var42 = _closure1_slot16;
            var41 = {};
            var46 = var48.bounceOffset;
            var41['style'] = var46;
            var42 = var42.bind(var5)(var39, var41);
            var41 = new Array(2);
            var41[0] = var42;
            var42 = {};
            var46 = var48.profileContainer;
            var42['style'] = var46;
            var42['onLayout'] = var45;
            var43 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var6 = {};
                    var6['user'] = var1;
                    var4 = _closure2_slot14;
                    var6['channel'] = var4;
                    var4 = _closure2_slot17;
                    var6['displayProfile'] = var4;
                    var4 = _closure2_slot2;
                    var6['disableCalls'] = var4;
                    var4 = _closure2_slot3;
                    var6['disableMessage'] = var4;
                    var4 = _closure2_slot4;
                    var6['isVoiceContext'] = var4;
                    var4 = _closure2_slot6;
                    var6['location'] = var4;
                    var4 = _closure2_slot31;
                    var6['disableStatus'] = var4;
                    var4 = _closure2_slot19;
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
                        var4 = _closure1_slot14;
                        var4 = var4.COLLECTIBLES_SHOP;
                        var1['screen'] = var4;
                        var4 = _closure2_slot34;
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
                        var4 = _closure1_slot14;
                        var4 = var4.PREMIUM;
                        var1['screen'] = var4;
                        var4 = _closure2_slot34;
                        var1['onClose'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6['navigateToPremium'] = var3;
                    var3 = _closure2_slot33;
                    var6['showUserProfileActionSheet'] = var3;
                    var2 = _closure2_slot9;
                    var6['initialSection'] = var2;
                    var2 = var1.isNonUserBot;
                    var3 = var2.bind(var1)();
                    if(var3) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                    var1 = var1.bot;
                    var7 = _closure1_slot16;
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
                    var5 = _closure1_slot16;
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
            var44 = var43.bind(var5)(var44);
            var43 = new Array(2);
            var43[0] = var44;
            var44 = var9 != var50;
            if(!var44) { _fun0001_ip = 107; continue _fun0001 }
case 108:
            var47 = _closure1_slot16;
            var46 = _closure1_slot1;
            var51 = _closure1_slot2;
            var45 = 57;
            var45 = var51[var45];
            var46 = var46.bind(var5)(var45);
            var45 = {};
            var50 = var50.skuId;
            var45['skuId'] = var50;
            var45['bannerAdjustment'] = var49;
            var48 = var48.profileEffect;
            var45['style'] = var48;
            var44 = var47.bind(var5)(var46, var45);
case 107:
            var43[1] = var44;
            var42['children'] = var43;
            var42 = var40.bind(var5)(var39, var42);
            var41[1] = var42;
            var38['children'] = var41;
            var38 = var40.bind(var5)(var39, var38);
            var26['children'] = var38;
            var26 = var37.bind(var5)(var34, var26);
            var25[2] = var26;
            var26 = var9 == var30;
            if(!var26) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var38 = _closure1_slot16;
            var37 = _closure1_slot0;
            var39 = _closure1_slot2;
            var34 = 58;
            var34 = var39[var34];
            var34 = var37.bind(var5)(var34);
            var37 = var34.ActionSheetHeaderBar;
            var34 = {};
            var39 = 'floating';
            var34['variant'] = var39;
            var39 = {};
            var39['backgroundColor'] = var35;
            var34['tabStyle'] = var39;
            var34['onPress'] = var33;
            var26 = var38.bind(var5)(var37, var34);
case 109:
            var25[3] = var26;
            var19['children'] = var25;
            var22 = var23.bind(var5)(var22, var19);
            var19 = new Array(3);
            var19[0] = var22;
            var22 = var9 != var30;
            if(!var22) { _fun0001_ip = 111; continue _fun0001 }
case 112:
            var26 = _closure1_slot17;
            var25 = _closure1_slot23;
            var23 = {};
            var23['animatedPosition'] = var32;
            var23['safeAreaTop'] = var29;
            var23['animatedIndex'] = var28;
            var32 = _closure1_slot16;
            var29 = _closure1_slot1;
            var34 = _closure1_slot2;
            var28 = 28;
            var28 = var34[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['frame'] = var30;
            var30 = _closure1_slot11;
            var30 = var30.ACTION_SHEET;
            var28['profileThemeType'] = var30;
            var30 = _closure1_slot0;
            var37 = 14;
            var37 = var34[var37];
            var37 = var30.bind(var5)(var37);
            var37 = var37.ProfileFrameLayerOrder;
            var37 = var37.FRONT;
            var28['frameOrder'] = var37;
            var28['containerWidth'] = var36;
            var29 = var32.bind(var5)(var29, var28);
            var28 = new Array(2);
            var28[0] = var29;
            var32 = _closure1_slot16;
            var29 = 58;
            var29 = var34[var29];
            var29 = var30.bind(var5)(var29);
            var30 = var29.ActionSheetHeaderBar;
            var29 = {};
            var34 = 'floating';
            var29['variant'] = var34;
            var34 = {};
            var34['backgroundColor'] = var35;
            var29['tabStyle'] = var34;
            var29['onPress'] = var33;
            var29 = var32.bind(var5)(var30, var29);
            var28[1] = var29;
            var23['children'] = var28;
            var22 = var26.bind(var5)(var25, var23);
case 111:
            var19[1] = var22;
            if(!var20) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var23 = _closure1_slot16;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var21 = var34[var21];
            var21 = var32.bind(var5)(var21);
            var22 = var21.ThemeContextProvider;
            var21 = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            var21['theme'] = var24;
            var26 = _closure1_slot16;
            var24 = 59;
            var24 = var34[var24];
            var24 = var32.bind(var5)(var24);
            var25 = var24.ActionSheetBackdropToast;
            var24 = {};
            var33 = 50;
            var28 = var34[var33];
            var28 = var32.bind(var5)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = 60;
            var28 = var34[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.ProfileVisibility;
            var28 = var28.FRIENDS_ONLY;
            if(!(var31 !== var28)) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var31 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var33];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.wSnI/0;
            _fun0001_ip = 117; continue _fun0001;
case 115:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var33];
            var31 = var32.bind(var5)(var31);
            var31 = var31.t;
            var28 = var31.mNZcD8;
case 117:
            var28 = var29.bind(var30)(var28);
            var24['text'] = var28;
            var24['isExpanded'] = var27;
            var24 = var26.bind(var5)(var25, var24);
            var21['children'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 113:
            var19[2] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var6['children'] = var16;
            var6 = var15.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 118; continue _fun0001;
case 89:
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
            var9 = 47;
            var9 = var19[var9];
            var9 = var18.bind(var5)(var9);
            var10 = var9.BottomSheet;
            var9 = {};
            var14 = _closure1_slot16;
            var12 = 48;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var13 = var12.EmptyState;
            var12 = {};
            var15 = {};
            var16 = 42;
            var15['marginTop'] = var16;
            var12['style'] = var15;
            var15 = 49;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.NoResults;
            var12['Illustration'] = var15;
            var15 = 50;
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