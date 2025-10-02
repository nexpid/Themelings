// app/modules/collectibles/native/CollectiblesShopV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot21;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot21;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var8 = var4.StyleSheet;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot12 = var7;
    var4 = var4.CollectibleShopTab;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var4 = var4.PaymentGateways;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': '100%', 'width': '100%'};
    var4['rootContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'zIndex': 5};
    var4['blur'] = var9;
    var9 = {};
    var10 = 48;
    var9['height'] = var10;
    var4['header'] = var9;
    var9 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    var4['spinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = function CollectiblesShopInternal(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var30 = var1.analyticsSource;
            var _closure2_slot0 = var30;
            var22 = var1.onClose;
            var2 = var1.storeFront;
            var18 = var1.screen;
            var _closure2_slot1 = var18;
            var7 = undefined;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var _closure2_slot9 = var7;
            var _closure2_slot10 = var7;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var6 = var5.bind(var7)(var1);
            var3 = var6.useCommonTriggerPoint;
            var1 = 12;
            var1 = var8[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.CollectiblesShopOpenTriggerPoint;
            var1 = var3.bind(var6)(var1);
            var3 = 13;
            var1 = var8[var3];
            var9 = var5.bind(var7)(var1);
            var6 = var9.useStateFromStoresArray;
            var1 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure1_slot11;
                    var1 = var1.lastSuccessfulFetch;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
 24:
                    var2 = var1;
 27:
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var5, var1);
            var5 = _closure1_slot3;
            var1 = 1;
            var1 = var5.bind(var7)(var6, var1);
            var10 = 0;
            var5 = var1[var10];
            var6 = _closure1_slot1;
            var1 = 14;
            var1 = var8[var1];
            var6 = var6.bind(var7)(var1);
            var1 = 'shop_include_unpublished';
            var26 = var6.bind(var7)(var1);
            var _closure2_slot2 = var26;
            var1 = _closure1_slot18;
            var8 = var1.bind(var7)();
            var1 = null;
            var6 = var1 == var2;
            var12 = undefined;
            if(var6) { _fun0004_ip = 241; continue _fun0004 }
 235:
            var12 = var2.country;
 241:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var11 = var6.bind(var7)(var2);
            var13 = _closure1_slot0;
            var2 = 16;
            var2 = var9[var2];
            var13 = var13.bind(var7)(var2);
            var2 = var13.v4;
            var2 = var2.bind(var13)();
            var13 = var11.bind(var7)(var2);
            _closure2_slot3 = var13;
            var15 = _closure1_slot4;
            var14 = var15.useMemo;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var18;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var1['sessionId'] = var2;
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0006_ip = 39; continue _fun0006 }
 24:
                    var2 = _closure1_slot12;
                    var2 = var2.FEATURED_PAGE;
                    _fun0006_ip = 43; continue _fun0006;
 39:
                    var2 = _closure2_slot1;
 43:
                    var1['tab'] = var2;
                    var2 = true;
                    var1['isFullScreen'] = var2;
                    return var1;
                }
            };
            var16 = var14.bind(var15)(var2, var11);
            var2 = 17;
            var2 = var9[var2];
            var6 = var6.bind(var7)(var2);
            var2 = {};
            var9 = _closure1_slot15;
            var9 = var9.APPLE;
            var2['paymentGateway'] = var9;
            if(!(var1 == var12)) { _fun0004_ip = 367; continue _fun0004 }
 363:
            var9 = {};
            _fun0004_ip = 377; continue _fun0004;
 367:
            var11 = {};
            var11['countryCode'] = var12;
            var9 = var11;
 377:
            var35 = var2;
            var34 = var9;
            var9 = copyDataProperties(var35, var34);
            var9 = true;
            var11 = 'logPerf';
            var2[var11] = var9;
            var2 = var6.bind(var7)(var2, var16);
            var6 = var2.categories;
            _closure2_slot4 = var6;
            var15 = var2.isFetchingCategories;
            _closure2_slot5 = var15;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var2 = var12[var2];
            var14 = var11.bind(var7)(var2);
            var12 = var14.useMaybeFetchCollectiblesShopHome;
            var2 = _closure1_slot12;
            var2 = var2.ORBS;
            if(!(var18 !== var2)) { _fun0004_ip = 476; continue _fun0004 }
 464:
            var2 = _closure1_slot13;
            var11 = var2.HOME;
            _fun0004_ip = 486; continue _fun0004;
 476:
            var2 = _closure1_slot13;
            var11 = var2.ORBS;
 486:
            var2 = {'includeUnpublished': null, 'includeBundles': true, 'logPerf': true};
            var2['includeUnpublished'] = var26;
            var11 = var12.bind(var14)(var11, var2, var16);
            var24 = var11.shopBlocks;
            var2 = var11.isFetchingShopHome;
            var25 = var11.fetchShopHomeError;
            _closure2_slot6 = var25;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var12 = new Array(2);
            var12[0] = var6;
            var12[1] = var15;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0007_ip = 145; continue _fun0007 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 19;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.isAndroid;
                    var4 = var1.bind(var4)();
                    var1 = false;
                    if(!(var1 !== var4)) { _fun0007_ip = 145; continue _fun0007 }
 58:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot20;
                    var4 = _closure2_slot4;
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0007_ip = 143; continue _fun0007 }
 100:
                    var2 = var3.value;
                    var8 = var2.products;
                    var7 = var8.forEach;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.googleSkuIds;
                            var1 = undefined;
                            var3 = var1 !== var3;
                            if(!var3) { _fun0008_ip = 30; continue _fun0008 }
 18:
                            var5 = var2.googleSkuIds;
                            var4 = null;
                            var3 = var4 !== var5;
 30:
                            if(!var3) { _fun0008_ip = 95; continue _fun0008 }
 33:
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var5 = global;
                            var6 = var5.Object;
                            var5 = var6.values;
                            var2 = var2.googleSkuIds;
                            var8 = var5.bind(var6)(var2);
                            var2 = new Array(0);
                            var7 = 0;
                            var9 = var2;
                            var5 = arraySpread(var9, var8, var7);
                            var9 = var3;
                            var8 = var2;
                            var7 = var4;
                            var2 = apply(var9, var8, var7);
 95:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0007_ip = 100; continue _fun0007 }
 143:
                    return var1;
 145:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var14 = var14.bind(var16)(var11, var12);
            var19 = _closure1_slot1;
            var31 = _closure1_slot2;
            var11 = 20;
            var11 = var31[var11];
            var12 = var19.bind(var7)(var11);
            var11 = var12.useGoogleSkuIds;
            var9 = var9 === var15;
            var9 = var11.bind(var12)(var14, var9);
            var16 = var9.isFetchingGoogleSkus;
            var11 = var9.fetchError;
            var27 = _closure1_slot0;
            var9 = 21;
            var9 = var31[var9];
            var12 = var27.bind(var7)(var9);
            var9 = var12.useCurrentUserIfAvailable;
            var17 = var9.bind(var12)();
            _closure2_slot7 = var17;
            var9 = 22;
            var9 = var31[var9];
            var12 = var27.bind(var7)(var9);
            var9 = var12.usePurchasedCategoriesSort;
            var28 = var9.bind(var12)(var6);
            var9 = var31[var3];
            var20 = var27.bind(var7)(var9);
            var14 = var20.useStateFromStores;
            var9 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot9;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var20)(var12, var9);
            _closure2_slot8 = var9;
            var3 = var31[var3];
            var14 = var27.bind(var7)(var3);
            var12 = var14.useStateFromStores;
            var3 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = 'bypass_google_sku_sync';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var12.bind(var14)(var9, var3);
            var3 = 23;
            var3 = var31[var3];
            var9 = var27.bind(var7)(var3);
            var3 = var9.useThemeContext;
            var3 = var3.bind(var9)();
            var14 = var3.theme;
            var3 = 24;
            var9 = var31[var3];
            var12 = var19.bind(var7)(var9);
            var9 = 25;
            var9 = var31[var9];
            var9 = var19.bind(var7)(var9);
            var20 = var9.COLLECTIBLES_SHOP;
            var9 = new Array(1);
            var9[0] = var20;
            var9 = var12.bind(var7)(var9);
            var9 = var9.analyticsLocations;
            _closure2_slot9 = var9;
            var12 = 26;
            var12 = var31[var12];
            var20 = var19.bind(var7)(var12);
            var12 = {};
            var12['onClose'] = var22;
            var12['currentScreen'] = var18;
            var12 = var20.bind(var7)(var12);
            var12 = 27;
            var12 = var31[var12];
            var12 = var19.bind(var7)(var12);
            var12 = var12.bind(var7)();
            var20 = var12.top;
            var29 = 28;
            var12 = var31[var29];
            var22 = var27.bind(var7)(var12);
            var19 = var22.filterHiddenCategories;
            var12 = 19;
            var12 = var31[var12];
            var27 = var27.bind(var7)(var12);
            var12 = var27.isAndroid;
            var27 = var12.bind(var27)();
            var12 = var28;
            if(!var27) { _fun0004_ip = 970; continue _fun0004 }
 924:
            var12 = var28;
            if(var23) { _fun0004_ip = 970; continue _fun0004 }
 930:
            var12 = var28;
            if(var16) { _fun0004_ip = 970; continue _fun0004 }
 936:
            var12 = var28;
            if(var15) { _fun0004_ip = 970; continue _fun0004 }
 942:
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var29];
            var27 = var27.bind(var7)(var23);
            var23 = var27.filterGPlaySyncedCategories;
            var12 = var23.bind(var27)(var28);
 970:
            var23 = var19.bind(var22)(var12);
            var12 = global;
            var19 = var12.Date;
            var12 = var19.now;
            var12 = var12.bind(var19)();
            var19 = var12 - var5;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var12 = 29;
            var12 = var27[var12];
            var12 = var22.bind(var7)(var12);
            var12 = var12.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            var19 = var19 > var12;
            var12 = 30;
            var12 = var27[var12];
            var27 = var22.bind(var7)(var12);
            var22 = var27.useCollectiblesShopDeepLinkProps;
            var12 = {};
            var12['categories'] = var23;
            var12 = var22.bind(var27)(var12);
            var22 = var12.categoryIndex;
            var29 = _closure1_slot4;
            var28 = var29.useRef;
            var27 = {};
            var31 = _closure1_slot12;
            var32 = var31.SHOP_ALL;
            var12 = false;
            var27[var32] = var12;
            var32 = var31.FEATURED_PAGE;
            var27[var32] = var12;
            var31 = var31.ORBS;
            var27[var31] = var12;
            var27 = var28.bind(var29)(var27);
            _closure2_slot10 = var27;
            var28 = var29.useEffect;
            var27 = new Array(5);
            var27[0] = var9;
            var27[1] = var30;
            var27[2] = var13;
            var27[3] = var26;
            var27[4] = var18;
            var26 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot1;
                    var8 = null;
                    var10 = var8 == var1;
                    if(var10) { _fun0009_ip = 37; continue _fun0009 }
 16:
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var1 = var1.FEATURED_PAGE;
                    var10 = var2 === var1;
 37:
                    if(var10) { _fun0009_ip = 61; continue _fun0009 }
 40:
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var1 = var1.SHOP_ALL;
                    var10 = var2 === var1;
 61:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var4 = var7.track;
                    var2 = _closure1_slot14;
                    var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var2 = {};
                    var9 = _closure2_slot9;
                    var2['location_stack'] = var9;
                    var9 = _closure2_slot3;
                    var2['page_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var2['source'] = var9;
                    var9 = 'home';
                    if(var10) { _fun0009_ip = 140; continue _fun0009 }
 136:
                    var9 = _closure2_slot1;
 140:
                    var2['page_type'] = var9;
                    var2 = var4.bind(var7)(var3, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 32;
                    var2 = var10[var7];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.trackShopPerf;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var2['sessionId'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.CollectiblesShopPerfCheckpoint;
                    var7 = var7.SHOP_MOUNTED;
                    var2['checkpoint'] = var7;
                    var7 = _closure2_slot1;
                    if(!(var8 == var7)) { _fun0009_ip = 234; continue _fun0009 }
 222:
                    var6 = _closure1_slot12;
                    var6 = var6.FEATURED_PAGE;
                    _fun0009_ip = 238; continue _fun0009;
 234:
                    var6 = _closure2_slot1;
 238:
                    var2['tab'] = var6;
                    var6 = true;
                    var2['isFullScreen'] = var6;
                    var5 = _closure2_slot2;
                    var2['unpublishedCategoriesShown'] = var5;
                    var5 = false;
                    var2['cacheDisabled'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var26 = var28.bind(var29)(var26, var27);
            var28 = var29.useEffect;
            var27 = new Array(1);
            var27[0] = var17;
            var26 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 52; continue _fun0010 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 33;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot7;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var28.bind(var29)(var26, var27);
            if(!(var1 != var17)) { _fun0004_ip = 1981; continue _fun0004 }
 1196:
            var17 = var23.length;
            var17 = var10 === var17;
            if(var17) { _fun0004_ip = 1211; continue _fun0004 }
 1208:
            var17 = var19;
 1211:
            var19 = _closure1_slot12;
            var19 = var19.FEATURED_PAGE;
            if(!(var18 !== var19)) { _fun0004_ip = 1243; continue _fun0004 }
 1225:
            var19 = _closure1_slot12;
            var19 = var19.ORBS;
            if(!(var18 !== var19)) { _fun0004_ip = 1243; continue _fun0004 }
 1239:
            if(!(var1 == var18)) { _fun0004_ip = 1285; continue _fun0004 }
 1243:
            if(!var2) { _fun0004_ip = 1285; continue _fun0004 }
 1246:
            var26 = _closure1_slot16;
            var19 = _closure1_slot5;
            var2 = {};
            var27 = var8.spinner;
            var2['style'] = var27;
            var27 = 'large';
            var2['size'] = var27;
            var2 = var26.bind(var7)(var19, var2);
            _fun0004_ip = 1979; continue _fun0004;
 1285:
            if(!var17) { _fun0004_ip = 1300; continue _fun0004 }
 1288:
            if(var15) { _fun0004_ip = 1942; continue _fun0004 }
 1294:
            if(var16) { _fun0004_ip = 1942; continue _fun0004 }
 1300:
            var5 = var5 > var10;
            if(!var5) { _fun0004_ip = 1311; continue _fun0004 }
 1307:
            var5 = var12 === var15;
 1311:
            if(!var5) { _fun0004_ip = 1323; continue _fun0004 }
 1314:
            var6 = var6.size;
            var5 = var10 === var6;
 1323:
            if(!var5) { _fun0004_ip = 1363; continue _fun0004 }
 1326:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 34;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop loaded empty categories';
            var5 = var6.bind(var10)(var5);
 1363:
            if(!(var1 !== var11)) { _fun0004_ip = 1408; continue _fun0004 }
 1367:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 34;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop failed to fetch google sku ids: ';
            var5 = var5 + var11;
            var5 = var6.bind(var10)(var5);
 1408:
            var6 = _closure1_slot16;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = var17[var3];
            var3 = var16.bind(var7)(var3);
            var5 = var3.AnalyticsLocationProvider;
            var3 = {};
            var3['value'] = var9;
            var11 = _closure1_slot17;
            var9 = 35;
            var9 = var17[var9];
            var9 = var16.bind(var7)(var9);
            var10 = var9.CollectiblesAnalyticsProvider;
            var9 = {};
            var12 = {};
            var12['sessionId'] = var13;
            var9['newValue'] = var12;
            var13 = _closure1_slot1;
            var12 = 36;
            var12 = var17[var12];
            var13 = var13.bind(var7)(var12);
            var12 = {};
            var15 = 0.5;
            var12['blurAmount'] = var15;
            var15 = _closure1_slot6;
            var19 = var15.absoluteFill;
            var15 = new Array(3);
            var15[0] = var19;
            var19 = var8.blur;
            var15[1] = var19;
            var19 = {};
            var26 = 48;
            var26 = var26 + var20;
            var19['height'] = var26;
            var15[2] = var19;
            var12['style'] = var15;
            var12['blurTheme'] = var14;
            var13 = var6.bind(var7)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var14 = _closure1_slot7;
            var13 = {};
            var15 = {};
            var34 = var8.rootContainer;
            var35 = var15;
            var19 = copyDataProperties(var35, var34);
            var19 = 'paddingTop';
            var15[var19] = var20;
            var13['style'] = var15;
            var15 = 37;
            var15 = var17[var15];
            var15 = var16.bind(var7)(var15);
            var16 = var15.NativePaymentContextProvider;
            var15 = {};
            var17 = new Array(0);
            var15['skuIDs'] = var17;
            var15['activeSubscription'] = var1;
            var17 = _closure1_slot12;
            var17 = var17.SHOP_ALL;
            if(!(var18 !== var17)) { _fun0004_ip = 1795; continue _fun0004 }
 1663:
            var17 = _closure1_slot12;
            var17 = var17.ORBS;
            if(!(var18 !== var17)) { _fun0004_ip = 1727; continue _fun0004 }
 1677:
            var19 = _closure1_slot16;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 38;
            var17 = var20[var17];
            var18 = var18.bind(var7)(var17);
            var17 = {};
            var17['data'] = var24;
            var20 = function renderItem(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var2;
                    if(var1) { _fun0011_ip = 51; continue _fun0011 }
 22:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.FEATURED_PAGE;
                    var1 = var3[var2];
 51:
                    if(var1) { _fun0011_ip = 190; continue _fun0011 }
 57:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var7 = _closure1_slot12;
                    var2 = var7.FEATURED_PAGE;
                    var6 = true;
                    var3[var2] = var6;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 32;
                    var1 = var11[var8];
                    var9 = undefined;
                    var3 = var10.bind(var9)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var12 = _closure2_slot3;
                    var1['sessionId'] = var12;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.CollectiblesShopPerfCheckpoint;
                    var8 = var8.SHOP_RENDERED;
                    var1['checkpoint'] = var8;
                    var7 = var7.FEATURED_PAGE;
                    var1['tab'] = var7;
                    var1['isFullScreen'] = var6;
                    var4 = _closure2_slot2;
                    var1['unpublishedCategoriesShown'] = var4;
                    var4 = false;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
 190:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 41;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['shopBlock'] = var5;
                    var7 = _closure2_slot6;
                    var5 = null;
                    var7 = var5 != var7;
                    if(!var7) { _fun0011_ip = 246; continue _fun0011 }
 242:
                    var5 = _closure2_slot6;
 246:
                    var1['fetchShopHomeError'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var17['renderItem'] = var20;
            var17 = var19.bind(var7)(var18, var17);
            _fun0004_ip = 1793; continue _fun0004;
 1727:
            var20 = _closure1_slot16;
            var19 = _closure1_slot1;
            var26 = _closure1_slot2;
            var18 = 40;
            var18 = var26[var18];
            var19 = var19.bind(var7)(var18);
            var18 = {};
            var18['shopBlocks'] = var24;
            var26 = var1 != var25;
            var24 = null;
            if(!var26) { _fun0004_ip = 1770; continue _fun0004 }
 1767:
            var24 = var25;
 1770:
            var18['fetchShopHomeError'] = var24;
            var24 = function onRenderFirstOrbsItem() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var2 = _closure1_slot12;
                    var2 = var2.ORBS;
                    var2 = var3[var2];
                    if(var2) { _fun0012_ip = 162; continue _fun0012 }
 35:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var6 = _closure1_slot12;
                    var2 = var6.ORBS;
                    var5 = true;
                    var3[var2] = var5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 32;
                    var1 = var10[var7];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var11 = _closure2_slot3;
                    var1['sessionId'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.CollectiblesShopPerfCheckpoint;
                    var7 = var7.SHOP_RENDERED;
                    var1['checkpoint'] = var7;
                    var6 = var6.ORBS;
                    var1['tab'] = var6;
                    var1['isFullScreen'] = var5;
                    var4 = _closure2_slot2;
                    var1['unpublishedCategoriesShown'] = var4;
                    var4 = false;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
 162:
                    var1 = undefined;
                    return var1;
                }
            };
            var18['onRenderFirstOrbsItem'] = var24;
            var17 = var20.bind(var7)(var19, var18);
 1793:
            _fun0004_ip = 1860; continue _fun0004;
 1795:
            var20 = _closure1_slot16;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 38;
            var18 = var24[var18];
            var19 = var19.bind(var7)(var18);
            var18 = {};
            var18['data'] = var23;
            var21 = function renderItem(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var5 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var5;
                    if(var1) { _fun0013_ip = 51; continue _fun0013 }
 22:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.SHOP_ALL;
                    var1 = var3[var2];
 51:
                    if(var1) { _fun0013_ip = 190; continue _fun0013 }
 57:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var8 = _closure1_slot12;
                    var2 = var8.SHOP_ALL;
                    var7 = true;
                    var3[var2] = var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 32;
                    var1 = var12[var9];
                    var10 = undefined;
                    var3 = var11.bind(var10)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var13 = _closure2_slot3;
                    var1['sessionId'] = var13;
                    var9 = var12[var9];
                    var9 = var11.bind(var10)(var9);
                    var9 = var9.CollectiblesShopPerfCheckpoint;
                    var9 = var9.SHOP_RENDERED;
                    var1['checkpoint'] = var9;
                    var8 = var8.SHOP_ALL;
                    var1['tab'] = var8;
                    var1['isFullScreen'] = var7;
                    var4 = _closure2_slot2;
                    var1['unpublishedCategoriesShown'] = var4;
                    var4 = false;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
 190:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 39;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ShopCategory;
                    var1 = {};
                    var1['item'] = var6;
                    var6 = _closure2_slot8;
                    var1['isDarkTheme'] = var6;
                    var1['index'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var18['renderItem'] = var21;
            var23 = var1 != var22;
            var21 = undefined;
            if(!var23) { _fun0004_ip = 1849; continue _fun0004 }
 1846:
            var21 = var22;
 1849:
            var18['initialScrollIndex'] = var21;
            var17 = var20.bind(var7)(var19, var18);
 1860:
            var15['children'] = var17;
            var15 = var6.bind(var7)(var16, var15);
            var13['children'] = var15;
            var13 = var6.bind(var7)(var14, var13);
            var12[1] = var13;
            var15 = _closure1_slot16;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 42;
            var13 = var16[var13];
            var14 = var14.bind(var7)(var13);
            var13 = {};
            var13 = var15.bind(var7)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var7)(var10, var9);
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0004_ip = 1976; continue _fun0004;
 1942:
            var6 = _closure1_slot16;
            var5 = _closure1_slot5;
            var4 = {};
            var8 = var8.spinner;
            var4['style'] = var8;
            var8 = 'large';
            var4['size'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 1976:
            var2 = var3;
 1979:
            return var2;
 1981:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var2 = function CollectiblesShopV2(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 20;
            var3 = var9[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNativeIAPPayments;
            var3 = var3.bind(var4)();
            var7 = var3.nativePaymentsConnected;
            var _closure2_slot0 = var7;
            var8 = var3.storeFront;
            var3 = _closure1_slot18;
            var11 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = 13;
            var3 = var9[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var4, var3);
            var3 = null;
            var4 = var3 == var10;
            var9 = undefined;
            if(var4) { _fun0014_ip = 131; continue _fun0014 }
 121:
            var4 = var10.isStaff;
            var9 = var4.bind(var10)();
 131:
            if(var9) { _fun0014_ip = 156; continue _fun0014 }
 134:
            var4 = var3 == var10;
            var3 = undefined;
            if(var4) { _fun0014_ip = 153; continue _fun0014 }
 143:
            var4 = var10.isStaffPersonal;
            var3 = var4.bind(var10)();
 153:
            var9 = var3;
 156:
            var12 = _closure1_slot4;
            var4 = var12.useState;
            var3 = false;
            var10 = var4.bind(var12)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var10 = var4.bind(var5)(var10, var3);
            var3 = 0;
            var4 = var10[var3];
            var3 = 1;
            var3 = var10[var3];
            var _closure2_slot1 = var3;
            var10 = var12.useEffect;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 54; continue _fun0015 }
 14:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = function() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var2 = _closure2_slot0;
                            if(var2) { _fun0016_ip = 23; continue _fun0016 }
 10:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
 23:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = 10000;
                    var3 = var5.bind(var1)(var4, var3);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
 54:
                    return var1;
                }
            };
            var1 = var10.bind(var12)(var1, var3);
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 19;
            var1 = var1[var3];
            var10 = var10.bind(var5)(var1);
            var1 = var10.isIOS;
            var1 = var1.bind(var10)();
            if(!var1) { _fun0014_ip = 290; continue _fun0014 }
 261:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 43;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.isStable;
            var1 = !var10;
 290:
            if(!var1) { _fun0014_ip = 296; continue _fun0014 }
 293:
            var1 = var9;
 296:
            if(var7) { _fun0014_ip = 344; continue _fun0014 }
 299:
            if(var1) { _fun0014_ip = 344; continue _fun0014 }
 302:
            if(var4) { _fun0014_ip = 344; continue _fun0014 }
 305:
            var10 = _closure1_slot16;
            var9 = _closure1_slot5;
            var1 = {};
            var11 = var11.spinner;
            var1['style'] = var11;
            var11 = 'large';
            var1['size'] = var11;
            var1 = var10.bind(var5)(var9, var1);
            _fun0014_ip = 499; continue _fun0014;
 344:
            if(!var4) { _fun0014_ip = 350; continue _fun0014 }
 347:
            var4 = !var7;
 350:
            if(!var4) { _fun0014_ip = 449; continue _fun0014 }
 353:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 34;
            var4 = var11[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.captureMessage;
            var9 = _closure1_slot0;
            var3 = var11[var3];
            var10 = var9.bind(var5)(var3);
            var3 = var10.isIOS;
            var10 = var3.bind(var10)();
            var3 = 'collectibles mobile shop failed to connect to native payments isIOS: ';
            var10 = var3 + var10;
            var3 = 43;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var3.isStable;
            var3 = ' isStable: ';
            var3 = var10 + var3;
            var3 = var3 + var9;
            var3 = var4.bind(var7)(var3);
 449:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var15 = var2;
            var14 = var6;
            var7 = copyDataProperties(var15, var14);
            var7 = 'storeFront';
            var2[var7] = var8;
            var7 = var6.screen;
            var6 = 'screen';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 499:
            return var1;
        }
    };
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['CollectiblesShopV2'] = var2;
    return var1;
})();