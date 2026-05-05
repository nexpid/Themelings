// app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 9;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_ACTIONSHEET_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var4['bounceOffset'] = var9;
    var9 = {'alignSelf': 'center', 'color': null, 'margin': 25};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var10;
    var4['title'] = var9;
    var9 = {'flexDirection': 'row', 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'paddingVertical': 16};
    var4['avatarDisplayContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function EditAvatarDecorationInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var16 = var2.pendingAvatarSrc;
            var7 = var2.user;
            var _closure2_slot0 = var7;
            var13 = var2.selectedAvatarDecoration;
            var8 = var2.setSelectedAvatarDecoration;
            var _closure2_slot1 = var8;
            var17 = var2.guildId;
            var _closure2_slot2 = var17;
            var6 = var2.isTryItOut;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot3 = var6;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 21;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var9)();
            var2 = 22;
            var9 = var5[var2];
            var14 = var3.bind(var4)(var9);
            var12 = var14.useStateFromStores;
            var9 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var1 = _closure1_slot6;
                var1 = var1.isFetching;
                return var1;
            };
            var9 = var12.bind(var14)(var11, var9);
            var12 = _closure1_slot1;
            var11 = 23;
            var11 = var5[var11];
            var11 = var12.bind(var4)(var11);
            var14 = var11.bind(var4)();
            var2 = var5[var2];
            var15 = var3.bind(var4)(var2);
            var12 = var15.useStateFromStores;
            var2 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var15 = var12.bind(var15)(var11, var2);
            var2 = 24;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var13;
            var12 = null;
            var18 = var12 == var7;
            var11 = undefined;
            if(var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var7.avatarDecoration;
case 6:
            var2['userValue'] = var11;
            var18 = var12 == var15;
            var11 = undefined;
            if(var18) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var15.avatarDecoration;
case 8:
            var2['guildValue'] = var11;
            var2['guildId'] = var17;
            var15 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var17;
            var2[2] = var6;
            var1 = function(arg1) {
                var1 = arg1;
                var7 = var1.items;
                var6 = var1.size;
                var5 = var1.selectedSkuId;
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 25;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.EditAvatarDecorationRow;
                var1 = {};
                var1['items'] = var7;
                var1['size'] = var6;
                var1['selectedSkuId'] = var5;
                var6 = _closure2_slot1;
                var1['setSelectedAvatarDecoration'] = var6;
                var6 = _closure2_slot2;
                var1['guildId'] = var6;
                var5 = _closure2_slot3;
                var1['isTryItOut'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var8 = _closure1_slot10;
            var6 = _closure1_slot15;
            var5 = {};
            var19 = var12 == var15;
            var18 = undefined;
            if(var19) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = var15.skuId;
case 10:
            var5['previewSkuId'] = var18;
            var5['user'] = var7;
            var5['guildId'] = var17;
            var5['pendingAvatarSrc'] = var16;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var16 = _closure1_slot10;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 26;
            var6 = var17[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['user'] = var7;
            var17 = var12 == var15;
            var7 = undefined;
            if(var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var15.skuId;
case 12:
            var6['previewSkuId'] = var7;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = 19;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.FyBDiY;
            var18 = var19.bind(var20)(var18);
            var6['nitroJoinCTA'] = var18;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var15[var17];
            var17 = var7.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.e1UiOa;
            var17 = var18.bind(var19)(var17);
            var6['nitroUpgradeCTA'] = var17;
            var6 = var16.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var6 = 27;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.EditCollectiblesPickerList;
            var6 = {};
            var6['sections'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var13.skuId;
case 14:
            var6['selectedSkuId'] = var12;
            var6['renderRow'] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 28;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.COLLECTIBLE_ROW_HEIGHT;
            var6['estimatedItemSize'] = var10;
            var6['isFetching'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function AvatarDecorationSectionPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.previewSkuId;
            var12 = var2.user;
            var11 = var2.guildId;
            var10 = var2.pendingAvatarSrc;
            var2 = _closure1_slot13;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 29;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = _closure2_slot0;
                    var6 = var3.items;
                    var3 = 0;
                    var2 = var6[var3];
case 16:
                    if(!(var1 == var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var3 = _closure2_slot1;
                    var6 = var1 == var3;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var5 = _closure2_slot1;
                    var6 = var5.items;
                    var5 = 0;
                    var3 = var6[var5];
case 20:
                    var2 = var3;
case 18:
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if(!var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var9 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.avatarDisplayContainer;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var9)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 19;
            var6 = var13[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["7hRBmC"];
            var5 = var6.bind(var7)(var5);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 19;
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
case 26:
            var1['accessibilityLabel'] = var5;
            var5 = 'image';
            var1['accessibilityRole'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 30;
            var5 = var13[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var5['user'] = var12;
            var5['guildId'] = var11;
            var5['pendingAvatarSrc'] = var10;
            var5['pendingAvatarDecoration'] = var9;
            var15 = _closure1_slot0;
            var14 = 31;
            var14 = var13[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.EDIT_AVATAR_DECORATION;
            var5['size'] = var14;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 32;
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
    var _closure1_slot15 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditAvatarDecorationActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditAvatarDecorationActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var20 = var2.user;
            var28 = var2.guildId;
            var21 = var2.currentAvatarDecoration;
            var17 = var2.isTryItOut;
            var6 = var2.analyticsLocations;
            var2 = _closure1_slot13;
            var4 = undefined;
            var29 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 10;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var5 = {};
            var5['analyticsLocations'] = var6;
            var5['isTryItOut'] = var17;
            var5['guildId'] = var28;
            var5 = var7.bind(var4)(var5);
            var11 = var5.pendingAvatar;
            var7 = var5.setPendingAvatarDecoration;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot0;
            var5 = 11;
            var5 = var2[var5];
            var10 = var8.bind(var4)(var5);
            var9 = var10.getPendingAvatarSrc;
            var5 = {};
            var12 = var20.id;
            var5['userId'] = var12;
            var5['image'] = var11;
            var27 = var9.bind(var10)(var5);
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var10 = var5.bind(var9)(var21);
            var9 = _closure1_slot3;
            var5 = 2;
            var9 = var9.bind(var4)(var10, var5);
            var5 = 0;
            var19 = var9[var5];
            var _closure2_slot1 = var19;
            var5 = 1;
            var26 = var9[var5];
            var5 = 12;
            var5 = var2[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useBottomSheetRef;
            var5 = var5.bind(var8)();
            var23 = var5.bottomSheetRef;
            var5 = 13;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            var18 = null;
            if(!(var18 == var6)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = new Array(0);
case 27:
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = 14;
            var2 = var22[var15];
            var2 = var12.bind(var4)(var2);
            var2 = var2.EDIT_AVATAR_DECORATION_SHEET;
            var2 = var3.bind(var4)(var6, var2);
            var14 = var2.analyticsLocations;
            var6 = _closure1_slot4;
            var8 = var6.useCallback;
            var3 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 15;
                var3 = var8[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var6 = 14;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.EDIT_AVATAR_DECORATION_SHEET;
                var2['type'] = var6;
                var6 = true;
                var2['is_fullscreen'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = new Array(0);
            var11 = var8.bind(var6)(var3, var2);
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 != var4;
                    if(!var4) { _fun0006_ip = 29; continue _fun0006 }
case 17:
                    var2 = _closure2_slot1;
case 29:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var16 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot10;
            var32 = _closure1_slot0;
            var1 = 16;
            var1 = var22[var1];
            var1 = var32.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = var22[var5];
            var5 = var32.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var14;
            var9 = _closure1_slot11;
            var7 = 17;
            var7 = var22[var7];
            var7 = var32.bind(var4)(var7);
            var8 = var7.BottomSheet;
            var7 = {};
            var10 = true;
            var7['scrollable'] = var10;
            var7['ref'] = var23;
            var7['onExpand'] = var11;
            var7['startExpanded'] = var10;
            var11 = _closure1_slot5;
            var10 = {};
            var23 = var29.container;
            var10['style'] = var23;
            var23 = {};
            var24 = var29.bounceOffset;
            var23['style'] = var24;
            var24 = var3.bind(var4)(var11, var23);
            var23 = new Array(3);
            var23[0] = var24;
            var24 = 18;
            var24 = var22[var24];
            var24 = var32.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var29 = var29.title;
            var24['style'] = var29;
            var29 = 19;
            var30 = var22[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var22[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.HykynS;
            var29 = var30.bind(var31)(var29);
            var24['children'] = var29;
            var24 = var3.bind(var4)(var25, var24);
            var23[1] = var24;
            var25 = _closure1_slot14;
            var24 = {};
            var24['user'] = var20;
            var24['guildId'] = var28;
            var24['pendingAvatarSrc'] = var27;
            var24['selectedAvatarDecoration'] = var19;
            var24['setSelectedAvatarDecoration'] = var26;
            var24['isTryItOut'] = var17;
            var24 = var3.bind(var4)(var25, var24);
            var23[2] = var24;
            var10['children'] = var23;
            var11 = var9.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 20;
            var11 = var22[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['user'] = var20;
            var22 = var18 == var21;
            var20 = undefined;
            if(var22) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var20 = var21.skuId;
case 30:
            var11['currentSkuId'] = var20;
            var20 = var18 == var19;
            var18 = undefined;
            if(var20) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var18 = var19.skuId;
case 32:
            var11['selectedSkuId'] = var18;
            var11['isTryItOut'] = var17;
            var11['onApply'] = var16;
            var11['analyticsLocations'] = var14;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.EDIT_AVATAR_DECORATION_SHEET;
            var11['analyticsSource'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();