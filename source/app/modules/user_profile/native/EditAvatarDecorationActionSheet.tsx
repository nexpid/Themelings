// app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var11.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var5 = var7[var10];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ActivityIndicator;
    var _closure1_slot5 = var5;
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isAvatarDecorationRecord;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot11 = var5;
    var5 = var2.Fragment;
    var _closure1_slot12 = var5;
    var2 = var2.jsxs;
    var _closure1_slot13 = var2;
    var2 = 8;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 9;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var2['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'paddingBottom': 88};
    var2['contentContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var2['bounceOffset'] = var9;
    var9 = {'alignSelf': 'center', 'color': null, 'margin': 25};
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var10;
    var2['title'] = var9;
    var9 = {'width': '92%', 'marginTop': 24, 'flex': 1};
    var2['avatarDecorationList'] = var9;
    var9 = {'flexDirection': 'row', 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'paddingVertical': 16};
    var2['avatarDisplayContainer'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot14 = var2;
    var2 = function EditAvatarDecorationInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.pendingAvatarSrc;
            var15 = var1.user;
            var _closure2_slot0 = var15;
            var5 = var1.selectedAvatarDecoration;
            var _closure2_slot1 = var5;
            var2 = var1.setSelectedAvatarDecoration;
            var _closure2_slot2 = var2;
            var2 = var1.purchases;
            var _closure2_slot3 = var2;
            var16 = var1.guildId;
            var _closure2_slot4 = var16;
            var2 = var1.scrollToInitialItem;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot5 = var2;
            var1 = var1.isTryItOut;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var _closure2_slot6 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 25;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var1 = var7.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var1 = var1.bind(var7)();
            var7 = _closure1_slot1;
            var1 = 26;
            var1 = var3[var1];
            var1 = var7.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var1 = 10;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot9;
                    var4 = var5.getMember;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var7 = var8.bind(var10)(var7, var1);
            var1 = 27;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getProfilePreviewValue;
            var1 = {};
            var1['pendingValue'] = var5;
            var13 = null;
            var8 = var13 == var15;
            var5 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var15.avatarDecoration;
case 8:
            var1['userValue'] = var5;
            var8 = var13 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var7.avatarDecoration;
case 10:
            var1['guildValue'] = var5;
            var1['guildId'] = var16;
            var14 = var2.bind(var3)(var1);
            var1 = _closure1_slot14;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var10.contentContainer;
            var1['style'] = var5;
            var8 = _closure1_slot11;
            var7 = _closure1_slot16;
            var5 = {};
            var18 = var13 == var14;
            var17 = undefined;
            if(var18) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var14.skuId;
case 12:
            var5['previewSkuId'] = var17;
            var5['user'] = var15;
            var5['guildId'] = var16;
            var5['pendingAvatarSrc'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var12 = _closure1_slot11;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 28;
            var7 = var16[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['user'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = var14.skuId;
case 14:
            var7['previewSkuId'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 21;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.FyBDiY;
            var14 = var15.bind(var18)(var14);
            var7['nitroJoinCTA'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.e1UiOa;
            var13 = var14.bind(var15)(var13);
            var7['nitroUpgradeCTA'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var10.avatarDecorationList;
            var6['style'] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = arg1;
                    var1 = var7.items;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = _closure1_slot11;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 29;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['selectedAvatarDecoration'] = var8;
                    var8 = _closure2_slot2;
                    var3['setSelectedAvatarDecoration'] = var8;
                    var3['section'] = var7;
                    var7 = _closure2_slot3;
                    var3['purchases'] = var7;
                    var7 = _closure2_slot4;
                    var3['guildId'] = var7;
                    var7 = _closure2_slot5;
                    var3['scrollToInitialItem'] = var7;
                    var2 = _closure2_slot6;
                    var3['isTryItOut'] = var2;
                    var2 = arg2;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 16:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var5 = function AvatarDecorationSectionPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.previewSkuId;
            var12 = var2.user;
            var11 = var2.guildId;
            var10 = var2.pendingAvatarSrc;
            var2 = _closure1_slot14;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 30;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var7 = var2.product;
            var _closure2_slot0 = var7;
            var8 = var2.purchase;
            var _closure2_slot1 = var8;
            var6 = _closure1_slot4;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var3 = _closure2_slot0;
                    var6 = var3.items;
                    var3 = 0;
                    var2 = var6[var3];
case 18:
                    if(!(var1 == var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure2_slot1;
                    var6 = var1 == var3;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var5 = _closure2_slot1;
                    var6 = var5.items;
                    var5 = 0;
                    var3 = var6[var5];
case 22:
                    var2 = var3;
case 20:
                    var3 = _closure1_slot8;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if(!var3) { _fun0005_ip = 24; continue _fun0005 }
case 4:
                    var1 = var2;
case 24:
                    return var1;
                }
            };
            var9 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.avatarDisplayContainer;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var9)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 21;
            var6 = var13[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.7hRBmC;
            var5 = var6.bind(var7)(var5);
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 21;
            var8 = var15[var6];
            var8 = var7.bind(var4)(var8);
            var13 = var8.intl;
            var8 = var13.formatToPlainString;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.Do2lxE;
            var6 = {};
            var15 = var9.label;
            var6['a11y_text'] = var15;
            var5 = var8.bind(var13)(var7, var6);
case 27:
            var1['accessibilityLabel'] = var5;
            var5 = 'image';
            var1['accessibilityRole'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 31;
            var5 = var13[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var5['user'] = var12;
            var5['guildId'] = var11;
            var5['pendingAvatarSrc'] = var10;
            var5['pendingAvatarDecoration'] = var9;
            var15 = _closure1_slot0;
            var14 = 32;
            var14 = var13[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.EDIT_AVATAR_DECORATION;
            var5['size'] = var14;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 33;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['user'] = var12;
            var6['guildId'] = var11;
            var6['pendingAvatarSrc'] = var10;
            var6['pendingAvatarDecoration'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var5 = 34;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/EditAvatarDecorationActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EditAvatarDecorationActionSheet(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var22 = var2.user;
            var _closure2_slot0 = var22;
            var30 = var2.guildId;
            var23 = var2.currentAvatarDecoration;
            var19 = var2.isTryItOut;
            var6 = var2.analyticsLocations;
            var2 = _closure1_slot14;
            var4 = undefined;
            var28 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 10;
            var3 = var2[var3];
            var9 = var8.bind(var4)(var3);
            var7 = var9.useStateFromStoresArray;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var3 = var2.purchases;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.isFetching;
                var1[1] = var2;
                return var1;
            };
            var3 = var7.bind(var9)(var5, var3);
            var14 = _closure1_slot3;
            var13 = 2;
            var3 = var14.bind(var4)(var3, var13);
            var12 = 0;
            var31 = var3[var12];
            var10 = 1;
            var15 = var3[var10];
            var3 = _closure1_slot1;
            var5 = 11;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var5 = {};
            var5['analyticsLocations'] = var6;
            var5['isTryItOut'] = var19;
            var5['guildId'] = var30;
            var5 = var7.bind(var4)(var5);
            var17 = var5.pendingAvatar;
            var7 = var5.setPendingAvatarDecoration;
            var _closure2_slot1 = var7;
            var5 = 12;
            var5 = var2[var5];
            var16 = var8.bind(var4)(var5);
            var9 = var16.getPendingAvatarSrc;
            var5 = {};
            var18 = var22.id;
            var5['userId'] = var18;
            var5['image'] = var17;
            var33 = var9.bind(var16)(var5);
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var5 = var5.bind(var9)(var23);
            var5 = var14.bind(var4)(var5, var13);
            var21 = var5[var12];
            var _closure2_slot2 = var21;
            var32 = var5[var10];
            var5 = var9.useRef;
            var20 = null;
            var13 = var5.bind(var9)(var20);
            var5 = 13;
            var5 = var2[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useBottomSheetRef;
            var5 = var5.bind(var8)();
            var25 = var5.bottomSheetRef;
            var14 = var5.bottomSheetClose;
            var5 = 14;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            if(!(var20 == var6)) { _fun0006_ip = 12; continue _fun0006 }
case 28:
            var6 = new Array(0);
case 12:
            var8 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 15;
            var2 = var24[var16];
            var2 = var8.bind(var4)(var2);
            var2 = var2.EDIT_AVATAR_DECORATION_SHEET;
            var2 = var3.bind(var4)(var6, var2);
            var17 = var2.analyticsLocations;
            var6 = _closure1_slot4;
            var8 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var22;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var3 = var8[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.OPEN_POPOUT;
                    var2 = {};
                    var6 = 15;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.EDIT_AVATAR_DECORATION_SHEET;
                    var2['type'] = var6;
                    var6 = global;
                    var7 = var6.Boolean;
                    var9 = _closure2_slot0;
                    var6 = null;
                    var9 = var6 == var9;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var8 = _closure2_slot0;
                    var6 = var8.avatarDecoration;
case 29:
                    var6 = var7.bind(var1)(var6);
                    var2['has_avatar_decoration'] = var6;
                    var6 = true;
                    var2['is_fullscreen'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var10 = var8.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var21;
            var2[1] = var7;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var4 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 != var4;
                    if(!var4) { _fun0008_ip = 31; continue _fun0008 }
case 19:
                    var2 = _closure2_slot2;
case 31:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var1 = 17;
            var1 = var24[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = var24[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var17;
            var9 = _closure1_slot13;
            var7 = 18;
            var7 = var24[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.BottomSheet;
            var7 = {'handleDisabled': true, 'scrollable': true, 'ref': null, 'onExpand': null, 'startExpanded': true};
            var7['ref'] = var25;
            var7['onExpand'] = var10;
            var10 = 19;
            var10 = var24[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.BottomSheetScrollView;
            var10 = {};
            var24 = false;
            var10['scrollsToTop'] = var24;
            var25 = var28.container;
            var24 = new Array(1);
            var24[0] = var25;
            var10['style'] = var24;
            var10['ref'] = var13;
            var24 = _closure1_slot6;
            var13 = {};
            var25 = var28.bounceOffset;
            var13['style'] = var25;
            var24 = var3.bind(var4)(var24, var13);
            var13 = new Array(2);
            var13[0] = var24;
            if(var15) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var25 = _closure1_slot13;
            var24 = _closure1_slot12;
            var15 = {};
            var29 = _closure1_slot11;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var26 = 20;
            var26 = var37[var26];
            var26 = var36.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var28 = var28.title;
            var26['style'] = var28;
            var28 = 21;
            var34 = var37[var28];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var28 = var37[var28];
            var28 = var36.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.HykynS;
            var28 = var34.bind(var35)(var28);
            var26['children'] = var28;
            var27 = var29.bind(var4)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var28 = _closure1_slot15;
            var27 = {};
            var27['pendingAvatarSrc'] = var33;
            var27['user'] = var22;
            var27['selectedAvatarDecoration'] = var21;
            var27['setSelectedAvatarDecoration'] = var32;
            var27['purchases'] = var31;
            var27['guildId'] = var30;
            var27['isTryItOut'] = var19;
            var27 = var29.bind(var4)(var28, var27);
            var26[1] = var27;
            var15['children'] = var26;
            var15 = var25.bind(var4)(var24, var15);
            _fun0006_ip = 34; continue _fun0006;
case 32:
            var26 = _closure1_slot11;
            var25 = _closure1_slot6;
            var24 = {};
            var27 = {};
            var28 = 250;
            var27['top'] = var28;
            var24['style'] = var27;
            var28 = _closure1_slot5;
            var27 = {'animating': true, 'size': 'large'};
            var27 = var26.bind(var4)(var28, var27);
            var24['children'] = var27;
            var15 = var26.bind(var4)(var25, var24);
case 34:
            var13[1] = var15;
            var10['children'] = var13;
            var12 = var9.bind(var4)(var12, var10);
            var10 = new Array(3);
            var10[0] = var12;
            var15 = _closure1_slot11;
            var13 = _closure1_slot1;
            var24 = _closure1_slot2;
            var12 = 22;
            var12 = var24[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var22;
            var24 = var20 == var23;
            var22 = undefined;
            if(var24) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var22 = var23.skuId;
case 35:
            var12['currentSkuId'] = var22;
            var22 = var20 == var21;
            var20 = undefined;
            if(var22) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var20 = var21.skuId;
case 37:
            var12['selectedSkuId'] = var20;
            var12['isTryItOut'] = var19;
            var12['onApply'] = var18;
            var12['analyticsLocations'] = var17;
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var16 = var17[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.EDIT_AVATAR_DECORATION_SHEET;
            var12['analyticsSource'] = var16;
            var12 = var15.bind(var4)(var13, var12);
            var10[1] = var12;
            var13 = _closure1_slot11;
            var16 = _closure1_slot0;
            var11 = 23;
            var11 = var17[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = 24;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ActionSheetHeaderBarVariants;
            var15 = var15.FLOATING;
            var11['variant'] = var15;
            var11['onPress'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['EditAvatarDecorationInner'] = var2;
    return var1;
})();