// app/modules/user_profile/native/EditNameplateActionSheet.tsx
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
    var2 = var2.isNameplateRecord;
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
    var2 = var2.jsxs;
    var _closure1_slot12 = var2;
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
    var9 = {};
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var12;
    var12 = 25;
    var9['margin'] = var12;
    var2['title'] = var9;
    var9 = {'width': '92%', 'marginTop': 24, 'flex': 1};
    var2['nameplateList'] = var9;
    var9 = {'width': '80%', 'justifyContent': 'center', 'alignItems': 'center'};
    var2['nameplatePreviewContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['width'] = var12;
    var2['nameplateGradientContainer'] = var9;
    var9 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9['color'] = var10;
    var2['nameplatePreviewGradient'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot13 = var2;
    var2 = function EditNameplateInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.user;
            var _closure2_slot0 = var15;
            var8 = var1.selectedNameplate;
            var _closure2_slot1 = var8;
            var2 = var1.setSelectedNameplate;
            var _closure2_slot2 = var2;
            var7 = var1.showTitle;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var16 = var1.guildId;
            var _closure2_slot3 = var16;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var1 = var1.bind(var2)();
            var2 = 21;
            var1 = var4[var2];
            var12 = var3.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.isFetching;
                return var1;
            };
            var1 = var11.bind(var12)(var9, var1);
            var11 = _closure1_slot1;
            var9 = 22;
            var9 = var4[var9];
            var9 = var11.bind(var5)(var9);
            var12 = var9.bind(var5)();
            var2 = var4[var2];
            var13 = var3.bind(var5)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure1_slot9;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var9 = var11.bind(var13)(var9, var2);
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var8;
            var13 = null;
            var11 = var13 == var15;
            var8 = undefined;
            if(var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var11 = var15.collectibles;
            var14 = var13 == var11;
            var8 = undefined;
            if(var14) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var8 = var11.nameplate;
case 5:
            var2['userValue'] = var8;
            var11 = var13 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var9.collectibles;
            var11 = var13 == var9;
            var8 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var8 = var9.nameplate;
case 8:
            var2['guildValue'] = var8;
            var2['guildId'] = var16;
            var14 = var3.bind(var4)(var2);
            var2 = _closure1_slot13;
            var11 = var2.bind(var5)();
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var4 = var11.contentContainer;
            var1['style'] = var4;
            if(!var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot11;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 23;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var8 = var4.Text;
            var4 = {'variant': 'redesign/heading-18/bold', 'style': null, 'accessibilityRole': 'header'};
            var17 = var11.title;
            var4['style'] = var17;
            var17 = 24;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.BwdeM1;
            var17 = var18.bind(var19)(var17);
            var4['children'] = var17;
            var7 = var9.bind(var5)(var8, var4);
case 13:
            var4 = new Array(4);
            var4[0] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot15;
            var7 = {};
            var18 = var13 == var14;
            var17 = undefined;
            if(var18) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var17 = var14.skuId;
case 15:
            var7['previewSkuId'] = var17;
            var7['user'] = var15;
            var7['guildId'] = var16;
            var7 = var9.bind(var5)(var8, var7);
            var4[1] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 25;
            var7 = var16[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['user'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var14.skuId;
case 17:
            var7['previewSkuId'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 24;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.V+IE93;
            var14 = var15.bind(var18)(var14);
            var7['nitroJoinCTA'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.a6SrkR;
            var13 = var14.bind(var15)(var13);
            var7['nitroUpgradeCTA'] = var13;
            var7 = var9.bind(var5)(var8, var7);
            var4[2] = var7;
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.nameplateList;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot11;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var6 = _closure2_slot1;
                var2['selectedNameplate'] = var6;
                var6 = _closure2_slot2;
                var2['setSelectedNameplate'] = var6;
                var6 = arg1;
                var2['section'] = var6;
                var1 = _closure2_slot3;
                var2['guildId'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var4[3] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 19; continue _fun0001;
case 11:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = {};
            var8 = 250;
            var7['top'] = var8;
            var2['style'] = var7;
            var7 = _closure1_slot5;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var5 = function NameplateActionSheetPreview(arg1) {
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
                    if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = _closure2_slot0;
                    var6 = var3.items;
                    var3 = 0;
                    var2 = var6[var3];
case 20:
                    if(!(var1 == var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = _closure2_slot1;
                    var6 = var1 == var3;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure2_slot1;
                    var6 = var5.items;
                    var5 = 0;
                    var3 = var6[var5];
case 24:
                    var2 = var3;
case 22:
                    var3 = _closure1_slot8;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var1 = var2;
case 26:
                    return var1;
                }
            };
            var25 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.nameplatePreviewContainer;
            var1['style'] = var5;
            var5 = null;
            if(!(var5 == var25)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 24;
            var6 = var10[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.aqlsGS;
            var5 = var6.bind(var7)(var5);
            _fun0003_ip = 30; continue _fun0003;
case 28:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
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
case 30:
            var1['accessibilityLabel'] = var5;
            var5 = 'image';
            var1['accessibilityRole'] = var5;
            var21 = true;
            var1['accessible'] = var21;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var5 = {};
            var6 = var14.nameplateGradientContainer;
            var5['style'] = var6;
            var12 = _closure1_slot11;
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
    var _closure1_slot15 = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/EditNameplateActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EditNameplateActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var18 = var1.user;
            var19 = var1.currentNameplate;
            var24 = var1.guildId;
            var _closure2_slot0 = var24;
            var1 = _closure1_slot13;
            var4 = undefined;
            var23 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 10;
            var1 = var20[var1];
            var3 = var10.bind(var4)(var1);
            var1 = var3.useBottomSheetRef;
            var1 = var1.bind(var3)();
            var22 = var1.bottomSheetRef;
            var12 = var1.bottomSheetClose;
            var6 = _closure1_slot4;
            var1 = var6.useRef;
            var16 = null;
            var21 = var1.bind(var6)(var16);
            var1 = var6.useState;
            var5 = var1.bind(var6)(var19);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 0;
            var17 = var3[var1];
            var _closure2_slot1 = var17;
            var1 = 1;
            var25 = var3[var1];
            var11 = _closure1_slot1;
            var1 = 11;
            var3 = var20[var1];
            var5 = var11.bind(var4)(var3);
            var13 = 12;
            var3 = var20[var13];
            var3 = var11.bind(var4)(var3);
            var3 = var3.EDIT_NAMEPLATE_SHEET;
            var3 = var5.bind(var4)(var3);
            var14 = var3.analyticsLocations;
            var7 = var6.useCallback;
            var5 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 13;
                var3 = var8[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot10;
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
            var8 = var7.bind(var6)(var5, var3);
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var24;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setNewPendingNameplate;
                    var6 = _closure2_slot1;
                    var3 = null;
                    var6 = var3 != var6;
                    if(!var6) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = _closure2_slot1;
case 31:
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var15 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot11;
            var1 = var20[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var14;
            var7 = _closure1_slot12;
            var5 = 15;
            var5 = var20[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'handleDisabled': true, 'scrollable': true, 'ref': null, 'onExpand': null, 'startExpanded': true};
            var5['ref'] = var22;
            var5['onExpand'] = var8;
            var8 = 16;
            var8 = var20[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.BottomSheetScrollView;
            var8 = {};
            var22 = false;
            var8['scrollsToTop'] = var22;
            var26 = var23.container;
            var22 = new Array(1);
            var22[0] = var26;
            var8['style'] = var22;
            var8['ref'] = var21;
            var22 = _closure1_slot6;
            var21 = {};
            var23 = var23.bounceOffset;
            var21['style'] = var23;
            var22 = var3.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var23 = _closure1_slot14;
            var22 = {};
            var22['user'] = var18;
            var22['selectedNameplate'] = var17;
            var22['setSelectedNameplate'] = var25;
            var22['guildId'] = var24;
            var22 = var3.bind(var4)(var23, var22);
            var21[1] = var22;
            var8['children'] = var21;
            var10 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var10 = 17;
            var10 = var20[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['user'] = var18;
            var20 = var16 == var19;
            var18 = undefined;
            if(var20) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var18 = var19.skuId;
case 33:
            var10['currentSkuId'] = var18;
            var18 = var16 == var17;
            var16 = undefined;
            if(var18) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var16 = var17.skuId;
case 35:
            var10['selectedSkuId'] = var16;
            var10['onApply'] = var15;
            var10['analyticsLocations'] = var14;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.EDIT_NAMEPLATE_SHEET;
            var10['analyticsSource'] = var13;
            var10 = var3.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot11;
            var14 = _closure1_slot0;
            var9 = 18;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.ActionSheetHeaderBar;
            var9 = {};
            var13 = 19;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.ActionSheetHeaderBarVariants;
            var13 = var13.FLOATING;
            var9['variant'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['EditNameplateInner'] = var2;
    return var1;
})();