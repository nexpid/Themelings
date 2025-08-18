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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
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
    var7 = var4.PaymentGateways;
    var _closure1_slot15 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
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
    var _closure1_slot19 = var4;
    var4 = function ListHeader() {
        var2 = _closure1_slot19;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var5.header;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var4;
    var4 = function ShopFlashList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.data;
            var7 = var1.renderItem;
            var5 = var1.initialScrollIndex;
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var8 = null;
            var11 = var1.bind(var2)(var8);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 11;
            var1 = var1[var12];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.useScrollToInitialIndexOnce;
            var1 = {};
            var8 = var8 != var5;
            if(!var8) { _fun0004_ip = 82; continue _fun0004 }
 76:
            var9 = 0;
            var8 = var5 > var9;
 82:
            var1['shouldScroll'] = var8;
            var1['initialScrollIndex'] = var5;
            var1['flashListRef'] = var11;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var12 = var9[var12];
            var12 = var8.bind(var4)(var12);
            var12 = var12.INITIAL_SCROLL_DELAY_MS;
            var1['afterMs'] = var12;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var1 = 12;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var1['ref'] = var11;
            var11 = 13;
            var12 = var9[var11];
            var12 = var8.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var9[var11];
            var11 = var8.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.pWG4zc;
            var11 = var12.bind(var13)(var11);
            var1['accessibilityLabel'] = var11;
            var1['data'] = var10;
            var1['renderItem'] = var7;
            var7 = false;
            var1['showsVerticalScrollIndicator'] = var7;
            var7 = 14;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.CATEGORY_CONTAINER_HEIGHT;
            var7 = 40;
            var7 = var8 + var7;
            var1['estimatedItemSize'] = var7;
            var7 = _closure1_slot20;
            var1['ListHeaderComponent'] = var7;
            var6 = _closure1_slot22;
            var1['ListEmptyComponent'] = var6;
            var1['initialScrollIndex'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var4 = function ShopEmptyState() {
        var4 = _closure1_slot17;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 15;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var6 = {};
        var7 = 42;
        var6['marginTop'] = var7;
        var1['style'] = var6;
        var8 = _closure1_slot0;
        var5 = 16;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.NoResults;
        var1['Illustration'] = var5;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.eAn6z8;
        var5 = var6.bind(var7)(var5);
        var1['body'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var4;
    var4 = function CollectiblesShopInternal(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var30 = var1.analyticsSource;
            var _closure2_slot0 = var30;
            var24 = var1.onClose;
            var5 = var1.storeFront;
            var17 = var1.screen;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var7 = var4.bind(var6)(var1);
            var2 = var7.useCommonTriggerPoint;
            var1 = 18;
            var1 = var8[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.CollectiblesShopOpenTriggerPoint;
            var1 = var2.bind(var7)(var1);
            var1 = 19;
            var1 = var8[var1];
            var7 = var4.bind(var6)(var1);
            var2 = var7.useMobileShopFeaturedPageEnabled;
            var1 = _closure1_slot16;
            var1 = var1.COLLECTIBLES_SHOP;
            var16 = var2.bind(var7)(var1);
            var _closure2_slot1 = var16;
            var2 = 20;
            var1 = var8[var2];
            var9 = var4.bind(var6)(var1);
            var7 = var9.useStateFromStoresArray;
            var1 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure1_slot11;
                    var1 = var1.lastSuccessfulFetch;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0006_ip = 27; continue _fun0006 }
 24:
                    var2 = var1;
 27:
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var4, var1);
            var4 = _closure1_slot3;
            var1 = 1;
            var1 = var4.bind(var6)(var7, var1);
            var9 = 0;
            var4 = var1[var9];
            var7 = _closure1_slot1;
            var1 = 21;
            var1 = var8[var1];
            var7 = var7.bind(var6)(var1);
            var1 = 'shop_include_unpublished';
            var26 = var7.bind(var6)(var1);
            var _closure2_slot2 = var26;
            var1 = _closure1_slot19;
            var7 = var1.bind(var6)();
            var1 = null;
            var8 = var1 == var5;
            var13 = undefined;
            if(var8) { _fun0005_ip = 274; continue _fun0005 }
 268:
            var13 = var5.country;
 274:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 22;
            var5 = var10[var5];
            var11 = var8.bind(var6)(var5);
            var12 = _closure1_slot0;
            var5 = 23;
            var5 = var10[var5];
            var12 = var12.bind(var6)(var5);
            var5 = var12.v4;
            var5 = var5.bind(var12)();
            var12 = var11.bind(var6)(var5);
            _closure2_slot3 = var12;
            var15 = _closure1_slot4;
            var14 = var15.useMemo;
            var11 = new Array(2);
            var11[0] = var12;
            var11[1] = var16;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot3;
                    var1['sessionId'] = var3;
                    var2 = _closure2_slot1;
                    var3 = _closure1_slot12;
                    if(var2) { _fun0007_ip = 36; continue _fun0007 }
 28:
                    var2 = var3.SHOP_ALL;
                    _fun0007_ip = 42; continue _fun0007;
 36:
                    var2 = var3.FEATURED_PAGE;
 42:
                    var1['tab'] = var2;
                    var2 = true;
                    var1['isFullScreen'] = var2;
                    return var1;
                }
            };
            var18 = var14.bind(var15)(var5, var11);
            var5 = 24;
            var5 = var10[var5];
            var10 = var8.bind(var6)(var5);
            var5 = {};
            var8 = _closure1_slot15;
            var8 = var8.APPLE;
            var5['paymentGateway'] = var8;
            if(!(var1 == var13)) { _fun0005_ip = 400; continue _fun0005 }
 396:
            var8 = {};
            _fun0005_ip = 410; continue _fun0005;
 400:
            var11 = {};
            var11['countryCode'] = var13;
            var8 = var11;
 410:
            var35 = var5;
            var34 = var8;
            var8 = copyDataProperties(var35, var34);
            var8 = true;
            var11 = 'logPerf';
            var5[var11] = var8;
            var10 = var10.bind(var6)(var5, var18);
            var5 = var10.categories;
            _closure2_slot4 = var5;
            var14 = var10.isFetchingCategories;
            _closure2_slot5 = var14;
            var27 = _closure1_slot0;
            var31 = _closure1_slot2;
            var10 = 25;
            var10 = var31[var10];
            var15 = var27.bind(var6)(var10);
            var13 = var15.useMaybeFetchCollectiblesShopHome;
            var10 = _closure1_slot13;
            var11 = var10.HOME;
            var10 = {'includeUnpublished': null, 'includeBundles': true, 'logPerf': true};
            var10['includeUnpublished'] = var26;
            var10 = var13.bind(var15)(var11, var10, var18);
            var21 = var10.shopBlocks;
            var23 = var10.isFetchingShopHome;
            var10 = var10.fetchShopHomeError;
            _closure2_slot6 = var10;
            var15 = _closure1_slot4;
            var13 = var15.useMemo;
            var11 = new Array(2);
            var11[0] = var5;
            var11[1] = var14;
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0008_ip = 145; continue _fun0008 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 26;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.isAndroid;
                    var4 = var1.bind(var4)();
                    var1 = false;
                    if(!(var1 !== var4)) { _fun0008_ip = 145; continue _fun0008 }
 58:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot24;
                    var4 = _closure2_slot4;
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 143; continue _fun0008 }
 100:
                    var2 = var3.value;
                    var8 = var2.products;
                    var7 = var8.forEach;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.googleSkuIds;
                            var1 = undefined;
                            var3 = var1 !== var3;
                            if(!var3) { _fun0009_ip = 30; continue _fun0009 }
 18:
                            var5 = var2.googleSkuIds;
                            var4 = null;
                            var3 = var4 !== var5;
 30:
                            if(!var3) { _fun0009_ip = 95; continue _fun0009 }
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
                    if(!var2) { _fun0008_ip = 100; continue _fun0008 }
 143:
                    return var1;
 145:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var13 = var13.bind(var15)(var10, var11);
            var19 = _closure1_slot1;
            var10 = 27;
            var10 = var31[var10];
            var11 = var19.bind(var6)(var10);
            var10 = var11.useGoogleSkuIds;
            var8 = var8 === var14;
            var8 = var10.bind(var11)(var13, var8);
            var15 = var8.isFetchingGoogleSkus;
            var10 = var8.fetchError;
            var8 = 28;
            var8 = var31[var8];
            var11 = var27.bind(var6)(var8);
            var8 = var11.useFetchMissingProfileEffects;
            var8 = var8.bind(var11)();
            var8 = 29;
            var8 = var31[var8];
            var11 = var27.bind(var6)(var8);
            var8 = var11.useCurrentUserIfAvailable;
            var18 = var8.bind(var11)();
            _closure2_slot7 = var18;
            var8 = 30;
            var8 = var31[var8];
            var11 = var27.bind(var6)(var8);
            var8 = var11.usePurchasedCategoriesSort;
            var28 = var8.bind(var11)(var5);
            var8 = var31[var2];
            var22 = var27.bind(var6)(var8);
            var13 = var22.useStateFromStores;
            var8 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 31;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot9;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var13.bind(var22)(var11, var8);
            _closure2_slot8 = var8;
            var2 = var31[var2];
            var13 = var27.bind(var6)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = 'bypass_google_sku_sync';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var11.bind(var13)(var8, var2);
            var2 = 31;
            var2 = var31[var2];
            var8 = var27.bind(var6)(var2);
            var2 = var8.useThemeContext;
            var2 = var2.bind(var8)();
            var13 = var2.theme;
            var2 = 32;
            var8 = var31[var2];
            var11 = var19.bind(var6)(var8);
            var8 = 33;
            var8 = var31[var8];
            var8 = var19.bind(var6)(var8);
            var22 = var8.COLLECTIBLES_SHOP;
            var8 = new Array(1);
            var8[0] = var22;
            var8 = var11.bind(var6)(var8);
            var8 = var8.analyticsLocations;
            _closure2_slot9 = var8;
            var11 = 34;
            var11 = var31[var11];
            var22 = var19.bind(var6)(var11);
            var11 = {};
            var11['onClose'] = var24;
            var11['currentScreen'] = var17;
            var11 = var22.bind(var6)(var11);
            var11 = 35;
            var11 = var31[var11];
            var11 = var19.bind(var6)(var11);
            var11 = var11.bind(var6)();
            var24 = var11.top;
            var29 = 36;
            var11 = var31[var29];
            var22 = var27.bind(var6)(var11);
            var19 = var22.filterHiddenCategories;
            var11 = 26;
            var11 = var31[var11];
            var27 = var27.bind(var6)(var11);
            var11 = var27.isAndroid;
            var27 = var11.bind(var27)();
            var11 = var28;
            if(!var27) { _fun0005_ip = 991; continue _fun0005 }
 945:
            var11 = var28;
            if(var25) { _fun0005_ip = 991; continue _fun0005 }
 951:
            var11 = var28;
            if(var15) { _fun0005_ip = 991; continue _fun0005 }
 957:
            var11 = var28;
            if(var14) { _fun0005_ip = 991; continue _fun0005 }
 963:
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var29];
            var27 = var27.bind(var6)(var25);
            var25 = var27.filterGPlaySyncedCategories;
            var11 = var25.bind(var27)(var28);
 991:
            var19 = var19.bind(var22)(var11);
            var11 = global;
            var22 = var11.Date;
            var11 = var22.now;
            var11 = var11.bind(var22)();
            var25 = var11 - var4;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var11 = 37;
            var11 = var27[var11];
            var11 = var22.bind(var6)(var11);
            var11 = var11.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            var25 = var25 > var11;
            var11 = 38;
            var11 = var27[var11];
            var27 = var22.bind(var6)(var11);
            var22 = var27.useCollectiblesShopDeepLinkProps;
            var11 = {};
            var11['categories'] = var19;
            var11 = var22.bind(var27)(var11);
            var22 = var11.categoryIndex;
            var29 = _closure1_slot4;
            var28 = var29.useRef;
            var27 = {};
            var31 = _closure1_slot12;
            var32 = var31.SHOP_ALL;
            var11 = false;
            var27[var32] = var11;
            var31 = var31.FEATURED_PAGE;
            var27[var31] = var11;
            var27 = var28.bind(var29)(var27);
            _closure2_slot10 = var27;
            var28 = var29.useEffect;
            var27 = new Array(5);
            var27[0] = var8;
            var27[1] = var30;
            var27[2] = var12;
            var27[3] = var26;
            var27[4] = var16;
            var26 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 39;
                    var2 = var9[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var4 = var6.track;
                    var2 = _closure1_slot14;
                    var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var2 = {};
                    var8 = _closure2_slot9;
                    var2['location_stack'] = var8;
                    var8 = _closure2_slot3;
                    var2['page_session_id'] = var8;
                    var8 = _closure2_slot0;
                    var2['source'] = var8;
                    var8 = 'home';
                    var2['page_type'] = var8;
                    var2 = var4.bind(var6)(var3, var2);
                    var8 = _closure1_slot0;
                    var6 = 40;
                    var2 = var9[var6];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.trackShopPerf;
                    var2 = {};
                    var10 = _closure2_slot3;
                    var2['sessionId'] = var10;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.CollectiblesShopPerfCheckpoint;
                    var6 = var6.SHOP_MOUNTED;
                    var2['checkpoint'] = var6;
                    var6 = _closure2_slot1;
                    var7 = _closure1_slot12;
                    if(var6) { _fun0010_ip = 164; continue _fun0010 }
 156:
                    var6 = var7.SHOP_ALL;
                    _fun0010_ip = 170; continue _fun0010;
 164:
                    var6 = var7.FEATURED_PAGE;
 170:
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
            var27[0] = var18;
            var26 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 52; continue _fun0011 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 41;
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
            if(!(var1 != var18)) { _fun0005_ip = 1809; continue _fun0005 }
 1206:
            var18 = var19.length;
            var18 = var9 === var18;
            if(var18) { _fun0005_ip = 1221; continue _fun0005 }
 1218:
            var18 = var25;
 1221:
            if(!var16) { _fun0005_ip = 1230; continue _fun0005 }
 1224:
            if(var23) { _fun0005_ip = 1773; continue _fun0005 }
 1230:
            if(!var18) { _fun0005_ip = 1245; continue _fun0005 }
 1233:
            if(var14) { _fun0005_ip = 1773; continue _fun0005 }
 1239:
            if(var15) { _fun0005_ip = 1773; continue _fun0005 }
 1245:
            var4 = var4 > var9;
            if(!var4) { _fun0005_ip = 1256; continue _fun0005 }
 1252:
            var4 = var11 === var14;
 1256:
            if(!var4) { _fun0005_ip = 1268; continue _fun0005 }
 1259:
            var5 = var5.size;
            var4 = var9 === var5;
 1268:
            if(!var4) { _fun0005_ip = 1308; continue _fun0005 }
 1271:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 42;
            var4 = var9[var4];
            var9 = var5.bind(var6)(var4);
            var5 = var9.captureMessage;
            var4 = 'collectibles mobile shop loaded empty categories';
            var4 = var5.bind(var9)(var4);
 1308:
            if(!(var1 !== var10)) { _fun0005_ip = 1353; continue _fun0005 }
 1312:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 42;
            var4 = var9[var4];
            var9 = var5.bind(var6)(var4);
            var5 = var9.captureMessage;
            var4 = 'collectibles mobile shop failed to fetch google sku ids: ';
            var4 = var4 + var10;
            var4 = var5.bind(var9)(var4);
 1353:
            var5 = _closure1_slot17;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = var18[var2];
            var2 = var15.bind(var6)(var2);
            var4 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var8;
            var10 = _closure1_slot18;
            var8 = 43;
            var8 = var18[var8];
            var8 = var15.bind(var6)(var8);
            var9 = var8.CollectiblesAnalyticsProvider;
            var8 = {};
            var11 = {};
            var11['sessionId'] = var12;
            var8['newValue'] = var11;
            var12 = _closure1_slot1;
            var11 = 44;
            var11 = var18[var11];
            var12 = var12.bind(var6)(var11);
            var11 = {};
            var14 = 0.5;
            var11['blurAmount'] = var14;
            var14 = _closure1_slot6;
            var23 = var14.absoluteFill;
            var14 = new Array(3);
            var14[0] = var23;
            var23 = var7.blur;
            var14[1] = var23;
            var23 = {};
            var25 = 48;
            var25 = var25 + var24;
            var23['height'] = var25;
            var14[2] = var23;
            var11['style'] = var14;
            var11['blurTheme'] = var13;
            var12 = var5.bind(var6)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var13 = _closure1_slot7;
            var12 = {};
            var14 = {};
            var34 = var7.rootContainer;
            var35 = var14;
            var23 = copyDataProperties(var35, var34);
            var23 = 'paddingTop';
            var14[var23] = var24;
            var12['style'] = var14;
            var14 = 45;
            var14 = var18[var14];
            var14 = var15.bind(var6)(var14);
            var15 = var14.NativePaymentContextProvider;
            var14 = {};
            var18 = new Array(0);
            var14['skuIDs'] = var18;
            var14['activeSubscription'] = var1;
            if(!var16) { _fun0005_ip = 1608; continue _fun0005 }
 1594:
            var16 = _closure1_slot12;
            var16 = var16.SHOP_ALL;
            if(!(var17 === var16)) { _fun0005_ip = 1659; continue _fun0005 }
 1608:
            var18 = _closure1_slot17;
            var17 = _closure1_slot21;
            var16 = {};
            var16['data'] = var19;
            var19 = function renderItem(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var5 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var5;
                    if(var1) { _fun0012_ip = 51; continue _fun0012 }
 22:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.SHOP_ALL;
                    var1 = var3[var2];
 51:
                    if(var1) { _fun0012_ip = 190; continue _fun0012 }
 57:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var8 = _closure1_slot12;
                    var2 = var8.SHOP_ALL;
                    var7 = true;
                    var3[var2] = var7;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 40;
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
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
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
            var16['renderItem'] = var19;
            var23 = var1 != var22;
            var19 = undefined;
            if(!var23) { _fun0005_ip = 1646; continue _fun0005 }
 1643:
            var19 = var22;
 1646:
            var16['initialScrollIndex'] = var19;
            var16 = var18.bind(var6)(var17, var16);
            _fun0005_ip = 1691; continue _fun0005;
 1659:
            var19 = _closure1_slot17;
            var18 = _closure1_slot21;
            var17 = {};
            var17['data'] = var21;
            var20 = function renderItem(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var2;
                    if(var1) { _fun0013_ip = 51; continue _fun0013 }
 22:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.FEATURED_PAGE;
                    var1 = var3[var2];
 51:
                    if(var1) { _fun0013_ip = 190; continue _fun0013 }
 57:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var7 = _closure1_slot12;
                    var2 = var7.FEATURED_PAGE;
                    var6 = true;
                    var3[var2] = var6;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 40;
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
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 46;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['shopBlock'] = var5;
                    var7 = _closure2_slot6;
                    var5 = null;
                    var7 = var5 != var7;
                    if(!var7) { _fun0013_ip = 246; continue _fun0013 }
 242:
                    var5 = _closure2_slot6;
 246:
                    var1['fetchShopHomeError'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var17['renderItem'] = var20;
            var16 = var19.bind(var6)(var18, var17);
 1691:
            var14['children'] = var16;
            var14 = var5.bind(var6)(var15, var14);
            var12['children'] = var14;
            var12 = var5.bind(var6)(var13, var12);
            var11[1] = var12;
            var14 = _closure1_slot17;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 47;
            var12 = var15[var12];
            var13 = var13.bind(var6)(var12);
            var12 = {};
            var12 = var14.bind(var6)(var13, var12);
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var2['children'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0005_ip = 1807; continue _fun0005;
 1773:
            var5 = _closure1_slot17;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var7.spinner;
            var3['style'] = var7;
            var7 = 'large';
            var3['size'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1807:
            return var2;
 1809:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var2 = function CollectiblesShopV2(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 27;
            var3 = var9[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNativeIAPPayments;
            var3 = var3.bind(var4)();
            var7 = var3.nativePaymentsConnected;
            var _closure2_slot0 = var7;
            var8 = var3.storeFront;
            var3 = _closure1_slot19;
            var11 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = 20;
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
            var3 = 26;
            var1 = var1[var3];
            var10 = var10.bind(var5)(var1);
            var1 = var10.isIOS;
            var1 = var1.bind(var10)();
            if(!var1) { _fun0014_ip = 290; continue _fun0014 }
 261:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 48;
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
            var10 = _closure1_slot17;
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
            var4 = 42;
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
            var3 = 48;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var3.isStable;
            var3 = ' isStable: ';
            var3 = var10 + var3;
            var3 = var3 + var9;
            var3 = var4.bind(var7)(var3);
 449:
            var4 = _closure1_slot17;
            var3 = _closure1_slot23;
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
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['CollectiblesShopV2'] = var2;
    return var1;
})();