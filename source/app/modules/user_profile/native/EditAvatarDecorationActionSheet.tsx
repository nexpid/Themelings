// app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function EditAvatarDecorationInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var16 = var2.pendingAvatarSrc;
            var7 = var2.user;
            var _closure2_slot0 = var7;
            var12 = var2.selectedAvatarDecoration;
            var10 = var2.setSelectedAvatarDecoration;
            var _closure2_slot1 = var10;
            var17 = var2.guildId;
            var _closure2_slot2 = var17;
            var8 = var2.isTryItOut;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var _closure2_slot3 = var8;
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
            var13 = var14.useStateFromStores;
            var9 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var1 = _closure1_slot6;
                var1 = var1.isFetching;
                return var1;
            };
            var9 = var13.bind(var14)(var11, var9);
            var13 = _closure1_slot1;
            var11 = 23;
            var11 = var5[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.bind(var4)();
            var2 = var5[var2];
            var15 = var3.bind(var4)(var2);
            var14 = var15.useStateFromStores;
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
            var15 = var14.bind(var15)(var11, var2);
            var2 = 24;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var12;
            var11 = null;
            var18 = var11 == var7;
            var14 = undefined;
            if(var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var7.avatarDecoration;
case 6:
            var2['userValue'] = var14;
            var18 = var11 == var15;
            var14 = undefined;
            if(var18) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var15.avatarDecoration;
case 8:
            var2['guildValue'] = var14;
            var2['guildId'] = var17;
            var14 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var17;
            var2[2] = var8;
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
            var10 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var15 = _closure1_slot10;
            var8 = _closure1_slot15;
            var5 = {};
            var19 = var11 == var14;
            var18 = undefined;
            if(var19) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = var14.skuId;
case 10:
            var5['previewSkuId'] = var18;
            var5['user'] = var7;
            var5['guildId'] = var17;
            var5['pendingAvatarSrc'] = var16;
            var8 = var15.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 26;
            var8 = var17[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var8['user'] = var7;
            var17 = var11 == var14;
            var7 = undefined;
            if(var17) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var14.skuId;
case 12:
            var8['previewSkuId'] = var7;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = 19;
            var18 = var14[var17];
            var18 = var7.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var14[var17];
            var18 = var7.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.FyBDiY;
            var18 = var19.bind(var20)(var18);
            var8['nitroJoinCTA'] = var18;
            var18 = var14[var17];
            var18 = var7.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var14[var17];
            var17 = var7.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.e1UiOa;
            var17 = var18.bind(var19)(var17);
            var8['nitroUpgradeCTA'] = var17;
            var8 = var16.bind(var4)(var15, var8);
            var5[1] = var8;
            var8 = _closure1_slot10;
            var6 = 27;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.EditCollectiblesPickerList;
            var6 = {};
            var6['sections'] = var13;
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var12.skuId;
case 14:
            var6['selectedSkuId'] = var11;
            var6['renderRow'] = var10;
            var6['isFetching'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function AvatarDecorationSectionPreview(arg1) {
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
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 28;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var8 = var2.product;
            var _closure2_slot0 = var8;
            var9 = var2.purchase;
            var _closure2_slot1 = var9;
            var7 = _closure1_slot4;
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var9;
            var2[1] = var8;
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
            var9 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.avatarDisplayContainer;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var9)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 19;
            var7 = var14[var5];
            var7 = var13.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["7hRBmC"];
            var5 = var7.bind(var8)(var5);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 19;
            var13 = var15[var7];
            var13 = var8.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var8 = var7.Do2lxE;
            var7 = {};
            var15 = var9.label;
            var7['a11y_text'] = var15;
            var5 = var13.bind(var14)(var8, var7);
case 26:
            var1['accessibilityLabel'] = var5;
            var5 = 'image';
            var1['accessibilityRole'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var14 = _closure1_slot10;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 29;
            var5 = var13[var5];
            var8 = var7.bind(var4)(var5);
            var5 = {};
            var5['user'] = var12;
            var5['guildId'] = var11;
            var5['pendingAvatarSrc'] = var10;
            var5['pendingAvatarDecoration'] = var9;
            var16 = _closure1_slot0;
            var15 = 30;
            var15 = var13[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.AvatarSizes;
            var15 = var15.EDIT_AVATAR_DECORATION;
            var5['size'] = var15;
            var8 = var14.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot10;
            var6 = 31;
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
    var _closure1_slot15 = var1;
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
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditAvatarDecorationActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditAvatarDecorationActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var22 = var2.user;
            var31 = var2.guildId;
            var23 = var2.currentAvatarDecoration;
            var19 = var2.isTryItOut;
            var6 = var2.analyticsLocations;
            var2 = _closure1_slot13;
            var4 = undefined;
            var32 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 10;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var5 = {};
            var5['analyticsLocations'] = var6;
            var5['isTryItOut'] = var19;
            var5['guildId'] = var31;
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
            var12 = var22.id;
            var5['userId'] = var12;
            var5['image'] = var11;
            var30 = var9.bind(var10)(var5);
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var10 = var5.bind(var9)(var23);
            var9 = _closure1_slot3;
            var5 = 2;
            var9 = var9.bind(var4)(var10, var5);
            var5 = 0;
            var21 = var9[var5];
            var _closure2_slot1 = var21;
            var5 = 1;
            var29 = var9[var5];
            var5 = 12;
            var5 = var2[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useBottomSheetRef;
            var5 = var5.bind(var8)();
            var14 = var5.bottomSheetRef;
            var5 = 13;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            var20 = null;
            if(!(var20 == var6)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = new Array(0);
case 27:
            var13 = _closure1_slot1;
            var24 = _closure1_slot2;
            var17 = 14;
            var2 = var24[var17];
            var2 = var13.bind(var4)(var2);
            var2 = var2.EDIT_AVATAR_DECORATION_SHEET;
            var2 = var3.bind(var4)(var6, var2);
            var16 = var2.analyticsLocations;
            var8 = _closure1_slot4;
            var6 = var8.useCallback;
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
            var12 = var6.bind(var8)(var3, var2);
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var21;
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
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot10;
            var35 = _closure1_slot0;
            var1 = 16;
            var1 = var24[var1];
            var1 = var35.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var7 = _closure1_slot10;
            var5 = var24[var5];
            var5 = var35.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var16;
            var10 = _closure1_slot11;
            var8 = 17;
            var8 = var24[var8];
            var8 = var35.bind(var4)(var8);
            var9 = var8.BottomSheet;
            var8 = {};
            var11 = true;
            var8['scrollable'] = var11;
            var8['ref'] = var14;
            var8['onExpand'] = var12;
            var8['startExpanded'] = var11;
            var14 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var25 = var32.container;
            var11['style'] = var25;
            var27 = _closure1_slot10;
            var26 = _closure1_slot5;
            var25 = {};
            var28 = var32.bounceOffset;
            var25['style'] = var28;
            var26 = var27.bind(var4)(var26, var25);
            var25 = new Array(3);
            var25[0] = var26;
            var28 = _closure1_slot10;
            var26 = 18;
            var26 = var24[var26];
            var26 = var35.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var32 = var32.title;
            var26['style'] = var32;
            var32 = 19;
            var33 = var24[var32];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var24[var32];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.HykynS;
            var32 = var33.bind(var34)(var32);
            var26['children'] = var32;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var28 = _closure1_slot10;
            var27 = _closure1_slot14;
            var26 = {};
            var26['user'] = var22;
            var26['guildId'] = var31;
            var26['pendingAvatarSrc'] = var30;
            var26['selectedAvatarDecoration'] = var21;
            var26['setSelectedAvatarDecoration'] = var29;
            var26['isTryItOut'] = var19;
            var26 = var28.bind(var4)(var27, var26);
            var25[2] = var26;
            var11['children'] = var25;
            var12 = var14.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot10;
            var12 = 20;
            var12 = var24[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['user'] = var22;
            var24 = var20 == var23;
            var22 = undefined;
            if(var24) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var22 = var23.skuId;
case 30:
            var12['currentSkuId'] = var22;
            var22 = var20 == var21;
            var20 = undefined;
            if(var22) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var20 = var21.skuId;
case 32:
            var12['selectedSkuId'] = var20;
            var12['isTryItOut'] = var19;
            var12['onApply'] = var18;
            var12['analyticsLocations'] = var16;
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var16.bind(var4)(var15);
            var15 = var15.EDIT_AVATAR_DECORATION_SHEET;
            var12['analyticsSource'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();