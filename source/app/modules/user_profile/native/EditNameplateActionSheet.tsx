// app/modules/user_profile/native/EditNameplateActionSheet.tsx
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
    var4 = var4.isNameplateRecord;
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
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var12;
    var4['title'] = var9;
    var9 = {'width': '80%', 'alignSelf': 'center', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['nameplatePreviewContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['width'] = var12;
    var4['nameplateGradientContainer'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_ACTIONSHEET_BACKGROUND;
    var9['color'] = var10;
    var4['nameplatePreviewGradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function EditNameplateInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.user;
            var _closure2_slot0 = var7;
            var13 = var2.selectedNameplate;
            var6 = var2.setSelectedNameplate;
            var _closure2_slot1 = var6;
            var16 = var2.guildId;
            var _closure2_slot2 = var16;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var2 = var8.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var8)();
            var2 = 20;
            var8 = var5[var2];
            var12 = var3.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var1 = _closure1_slot6;
                var1 = var1.isFetching;
                return var1;
            };
            var9 = var11.bind(var12)(var9, var8);
            var11 = _closure1_slot1;
            var8 = 21;
            var8 = var5[var8];
            var8 = var11.bind(var4)(var8);
            var14 = var8.bind(var4)();
            var2 = var5[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var8, var2);
            var2 = 22;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var13;
            var12 = null;
            var15 = var12 == var7;
            var8 = undefined;
            if(var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var7.collectibles;
            var17 = var12 == var15;
            var8 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = var15.nameplate;
case 4:
            var2['userValue'] = var8;
            var15 = var12 == var11;
            var8 = undefined;
            if(var15) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = var11.collectibles;
            var15 = var12 == var11;
            var8 = undefined;
            if(var15) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var8 = var11.nameplate;
case 7:
            var2['guildValue'] = var8;
            var2['guildId'] = var16;
            var15 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var16;
            var1 = function(arg1) {
                var1 = arg1;
                var7 = var1.items;
                var6 = var1.size;
                var5 = var1.selectedSkuId;
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.EditNameplateRow;
                var1 = {};
                var1['items'] = var7;
                var1['size'] = var6;
                var1['selectedSkuId'] = var5;
                var6 = _closure2_slot1;
                var1['setSelectedNameplate'] = var6;
                var5 = _closure2_slot2;
                var1['guildId'] = var5;
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
            var18 = var12 == var15;
            var17 = undefined;
            if(var18) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var17 = var15.skuId;
case 10:
            var5['previewSkuId'] = var17;
            var5['user'] = var7;
            var5['guildId'] = var16;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var16 = _closure1_slot10;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 24;
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
            var17 = 17;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.V+IE93;
            var18 = var19.bind(var20)(var18);
            var6['nitroJoinCTA'] = var18;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var15[var17];
            var17 = var7.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.a6SrkR;
            var17 = var18.bind(var19)(var17);
            var6['nitroUpgradeCTA'] = var17;
            var6 = var16.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var6 = 25;
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
            var10 = 26;
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
    var4 = function NameplateActionSheetPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.previewSkuId;
            var24 = var2.user;
            var23 = var2.guildId;
            var2 = _closure1_slot13;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 27;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var6 = var2.product;
            var _closure2_slot0 = var6;
            var7 = var2.purchase;
            var _closure2_slot1 = var7;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
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
            var25 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var14.nameplatePreviewContainer;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var25)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 17;
            var6 = var10[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.aqlsGS;
            var5 = var6.bind(var7)(var5);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 17;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.YJig7C;
            var6 = {};
            var11 = var25.label;
            var6['a11y_text'] = var11;
            var5 = var8.bind(var10)(var7, var6);
case 26:
            var1['accessibilityLabel'] = var5;
            var5 = 'image';
            var1['accessibilityRole'] = var5;
            var21 = true;
            var1['accessible'] = var21;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var5 = {};
            var6 = var14.nameplateGradientContainer;
            var5['style'] = var6;
            var12 = _closure1_slot10;
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = 28;
            var6 = var15[var18];
            var6 = var19.bind(var4)(var6);
            var10 = var6.NameplateDummyUserPreview;
            var6 = {};
            var20 = 100;
            var6['width'] = var20;
            var10 = var12.bind(var4)(var10, var6);
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var15[var18];
            var10 = var19.bind(var4)(var10);
            var11 = var10.NameplateDummyUserPreview;
            var10 = {};
            var22 = 140;
            var10['width'] = var22;
            var10 = var12.bind(var4)(var11, var10);
            var6[1] = var10;
            var11 = _closure1_slot1;
            var10 = 29;
            var9 = var15[var10];
            var26 = var11.bind(var4)(var9);
            var9 = {};
            var13 = var14.nameplatePreviewGradient;
            var9['style'] = var13;
            var13 = {'x': 0, 'y': 0.1};
            var9['start'] = var13;
            var13 = {'x': 0, 'y': 0.8};
            var9['end'] = var13;
            var13 = var14.nameplatePreviewGradient;
            var13 = var13.color;
            var27 = new Array(2);
            var27[0] = var13;
            var13 = var14.nameplatePreviewGradient;
            var29 = var13.color;
            var13 = global;
            var16 = var13.HermesInternal;
            var28 = var16.concat;
            var17 = '';
            var16 = '00';
            var28 = var28.bind(var17)(var29, var16);
            var27[1] = var28;
            var9['colors'] = var27;
            var9 = var12.bind(var4)(var26, var9);
            var6[2] = var9;
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = 30;
            var6 = var15[var6];
            var6 = var19.bind(var4)(var6);
            var9 = var6.NameplatePreview;
            var6 = {};
            var6['nameplate'] = var25;
            var6['user'] = var24;
            var6['guildId'] = var23;
            var6['animate'] = var21;
            var6 = var12.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = {};
            var9 = var14.nameplateGradientContainer;
            var6['style'] = var9;
            var9 = var15[var18];
            var9 = var19.bind(var4)(var9);
            var21 = var9.NameplateDummyUserPreview;
            var9 = {};
            var9['width'] = var22;
            var21 = var12.bind(var4)(var21, var9);
            var9 = new Array(3);
            var9[0] = var21;
            var18 = var15[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.NameplateDummyUserPreview;
            var18 = {};
            var18['width'] = var20;
            var18 = var12.bind(var4)(var19, var18);
            var9[1] = var18;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = var14.nameplatePreviewGradient;
            var10['style'] = var15;
            var15 = {'x': 0, 'y': 0.2};
            var10['start'] = var15;
            var15 = {'x': 0, 'y': 0.9};
            var10['end'] = var15;
            var15 = var14.nameplatePreviewGradient;
            var15 = var15.color;
            var13 = var13.HermesInternal;
            var13 = var13.concat;
            var15 = var13.bind(var17)(var15, var16);
            var13 = new Array(2);
            var13[0] = var15;
            var14 = var14.nameplatePreviewGradient;
            var14 = var14.color;
            var13[1] = var14;
            var10['colors'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditNameplateActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditNameplateActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var15 = var1.user;
            var18 = var1.currentNameplate;
            var22 = var1.guildId;
            var _closure2_slot0 = var22;
            var1 = _closure1_slot13;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useBottomSheetRef;
            var1 = var1.bind(var3)();
            var19 = var1.bottomSheetRef;
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var5 = var1.bind(var3)(var4);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 0;
            var7 = var3[var1];
            var _closure2_slot1 = var7;
            var1 = 1;
            var23 = var3[var1];
            var16 = var18;
            if(!(var4 !== var7)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var16 = var7;
case 27:
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 11;
            var3 = var17[var1];
            var5 = var10.bind(var4)(var3);
            var13 = 12;
            var3 = var17[var13];
            var3 = var10.bind(var4)(var3);
            var3 = var3.EDIT_NAMEPLATE_SHEET;
            var3 = var5.bind(var4)(var3);
            var12 = var3.analyticsLocations;
            var6 = _closure1_slot4;
            var8 = var6.useCallback;
            var5 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 13;
                var3 = var8[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.EDIT_NAMEPLATE_SHEET;
                var2['type'] = var6;
                var6 = true;
                var2['is_fullscreen'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var9 = var8.bind(var6)(var5, var3);
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var22;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setPendingChanges;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['guildId'] = var5;
                    var7 = _closure2_slot1;
                    var5 = null;
                    var7 = var5 != var7;
                    if(!var7) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var5 = _closure2_slot1;
case 29:
                    var2['nameplate'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot10;
            var27 = _closure1_slot0;
            var1 = var17[var1];
            var1 = var27.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var12;
            var7 = _closure1_slot11;
            var5 = 15;
            var5 = var17[var5];
            var5 = var27.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var8 = true;
            var5['scrollable'] = var8;
            var5['ref'] = var19;
            var5['onExpand'] = var9;
            var5['startExpanded'] = var8;
            var9 = _closure1_slot5;
            var8 = {};
            var19 = var24.container;
            var8['style'] = var19;
            var19 = {};
            var20 = var24.bounceOffset;
            var19['style'] = var20;
            var20 = var3.bind(var4)(var9, var19);
            var19 = new Array(3);
            var19[0] = var20;
            var20 = 16;
            var20 = var17[var20];
            var20 = var27.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var24 = var24.title;
            var20['style'] = var24;
            var24 = 17;
            var25 = var17[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var17[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.BwdeM1;
            var24 = var25.bind(var26)(var24);
            var20['children'] = var24;
            var20 = var3.bind(var4)(var21, var20);
            var19[1] = var20;
            var21 = _closure1_slot14;
            var20 = {};
            var20['user'] = var15;
            var20['selectedNameplate'] = var16;
            var20['setSelectedNameplate'] = var23;
            var20['guildId'] = var22;
            var20 = var3.bind(var4)(var21, var20);
            var19[2] = var20;
            var8['children'] = var19;
            var9 = var7.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 18;
            var9 = var17[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['user'] = var15;
            var15 = null;
            var19 = var15 == var18;
            var17 = undefined;
            if(var19) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var17 = var18.skuId;
case 31:
            var9['currentSkuId'] = var17;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var15 = var16.skuId;
case 33:
            var9['selectedSkuId'] = var15;
            var9['onApply'] = var14;
            var9['analyticsLocations'] = var12;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.EDIT_NAMEPLATE_SHEET;
            var9['analyticsSource'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[1] = var9;
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