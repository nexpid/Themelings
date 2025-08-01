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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
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
            var9 = var1.data;
            var8 = var1.renderItem;
            var5 = var1.initialScrollIndex;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 11;
            var3 = var1[var3];
            var4 = undefined;
            var10 = var2.bind(var4)(var3);
            var7 = var10.useMobileShopCardV2Enabled;
            var3 = _closure1_slot16;
            var3 = var3.COLLECTIBLES_SHOP;
            var7 = var7.bind(var10)(var3);
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var12 = null;
            var10 = var3.bind(var10)(var12);
            var11 = 12;
            var1 = var1[var11];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useScrollToInitialIndexOnce;
            var1 = {};
            var12 = var12 != var5;
            if(!var12) { _fun0004_ip = 115; continue _fun0004 }
 109:
            var13 = 0;
            var12 = var5 > var13;
 115:
            var1['shouldScroll'] = var12;
            var1['initialScrollIndex'] = var5;
            var1['flashListRef'] = var10;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.INITIAL_SCROLL_DELAY_MS;
            var1['afterMs'] = var11;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var1 = 13;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.FlashList;
            var1 = {};
            var1['ref'] = var10;
            var10 = 14;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.pWG4zc;
            var10 = var11.bind(var12)(var10);
            var1['accessibilityLabel'] = var10;
            var1['data'] = var9;
            var1['renderItem'] = var8;
            var8 = false;
            var1['showsVerticalScrollIndicator'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 15;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            if(var7) { _fun0004_ip = 296; continue _fun0004 }
 281:
            var9 = var8.CATEGORY_CONTAINER_HEIGHT;
            var7 = 40;
            var7 = var9 + var7;
            _fun0004_ip = 309; continue _fun0004;
 296:
            var9 = var8.CATEGORY_CONTAINER_HEIGHT_V2;
            var8 = 40;
            var7 = var9 + var8;
 309:
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
        var1 = 16;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var6 = {};
        var7 = 42;
        var6['marginTop'] = var7;
        var1['style'] = var6;
        var8 = _closure1_slot0;
        var5 = 17;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.NoResults;
        var1['Illustration'] = var5;
        var5 = 14;
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
            var25 = var1.analyticsSource;
            var _closure2_slot0 = var25;
            var26 = var1.onClose;
            var5 = var1.storeFront;
            var17 = var1.screen;
            var6 = undefined;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
            var1 = var8[var1];
            var4 = var10.bind(var6)(var1);
            var2 = var4.useCommonTriggerPoint;
            var1 = 19;
            var1 = var8[var1];
            var1 = var10.bind(var6)(var1);
            var1 = var1.CollectiblesShopOpenTriggerPoint;
            var1 = var2.bind(var4)(var1);
            var1 = 20;
            var1 = var8[var1];
            var7 = var10.bind(var6)(var1);
            var4 = var7.useMobileShopFeaturedPageEnabled;
            var1 = _closure1_slot16;
            var2 = var1.COLLECTIBLES_SHOP;
            var16 = var4.bind(var7)(var2);
            var2 = 21;
            var2 = var8[var2];
            var4 = var10.bind(var6)(var2);
            var2 = var4.useMobileCanPurchaseNameplates;
            var1 = var1.COLLECTIBLES_SHOP;
            var12 = var2.bind(var4)(var1);
            var2 = 22;
            var1 = var8[var2];
            var9 = var10.bind(var6)(var1);
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
            var1 = global;
            var7 = var1.Date;
            var1 = var7.now;
            var1 = var1.bind(var7)();
            var7 = var1 - var4;
            var1 = 23;
            var1 = var8[var1];
            var1 = var10.bind(var6)(var1);
            var1 = var1.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            var23 = var7 > var1;
            var7 = _closure1_slot1;
            var1 = 24;
            var1 = var8[var1];
            var7 = var7.bind(var6)(var1);
            var1 = 'shop_include_unpublished';
            var8 = var7.bind(var6)(var1);
            var1 = _closure1_slot19;
            var7 = var1.bind(var6)();
            var1 = null;
            var10 = var1 == var5;
            var14 = undefined;
            if(var10) { _fun0005_ip = 334; continue _fun0005 }
 328:
            var14 = var5.country;
 334:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 25;
            var5 = var11[var5];
            var10 = var10.bind(var6)(var5);
            var5 = {};
            var11 = _closure1_slot15;
            var11 = var11.APPLE;
            var5['paymentGateway'] = var11;
            if(!(var1 == var14)) { _fun0005_ip = 379; continue _fun0005 }
 375:
            var11 = {};
            _fun0005_ip = 389; continue _fun0005;
 379:
            var13 = {};
            var13['countryCode'] = var14;
            var11 = var13;
 389:
            var34 = var5;
            var33 = var11;
            var11 = copyDataProperties(var34, var33);
            var13 = 'CollectiblesShop.native';
            var11 = 'location';
            var5[var11] = var13;
            var10 = var10.bind(var6)(var5);
            var5 = var10.categories;
            _closure2_slot1 = var5;
            var14 = var10.isFetchingCategories;
            _closure2_slot2 = var14;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var10 = 26;
            var10 = var32[var10];
            var15 = var31.bind(var6)(var10);
            var13 = var15.useMaybeFetchCollectiblesShopHome;
            var10 = _closure1_slot13;
            var11 = var10.HOME;
            var10 = {'includeUnpublished': null, 'includeBundles': true, 'logPerf': true};
            var10['includeUnpublished'] = var8;
            var8 = true;
            var10 = var13.bind(var15)(var11, var10);
            var21 = var10.shopBlocks;
            var18 = var10.isFetchingShopHome;
            var10 = var10.fetchShopHomeError;
            _closure2_slot3 = var10;
            var15 = _closure1_slot4;
            var13 = var15.useMemo;
            var11 = new Array(2);
            var11[0] = var5;
            var11[1] = var14;
            var10 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0007_ip = 145; continue _fun0007 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 27;
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
                    var3 = _closure1_slot24;
                    var4 = _closure2_slot1;
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
            var13 = var13.bind(var15)(var10, var11);
            var22 = _closure1_slot1;
            var10 = 28;
            var10 = var32[var10];
            var11 = var22.bind(var6)(var10);
            var10 = var11.useGoogleSkuIds;
            var8 = var8 === var14;
            var8 = var10.bind(var11)(var13, var8);
            var11 = var8.isFetchingGoogleSkus;
            var10 = var8.fetchError;
            var8 = 29;
            var8 = var32[var8];
            var13 = var31.bind(var6)(var8);
            var8 = var13.useFetchMissingProfileEffects;
            var8 = var8.bind(var13)();
            var8 = 30;
            var8 = var32[var8];
            var13 = var31.bind(var6)(var8);
            var8 = var13.useCurrentUserIfAvailable;
            var15 = var8.bind(var13)();
            _closure2_slot4 = var15;
            var8 = 31;
            var8 = var32[var8];
            var13 = var31.bind(var6)(var8);
            var8 = var13.usePurchasedCategoriesSort;
            var29 = var8.bind(var13)(var5);
            var8 = var32[var2];
            var24 = var31.bind(var6)(var8);
            var19 = var24.useStateFromStores;
            var8 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var8;
            var8 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 32;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot9;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var19.bind(var24)(var13, var8);
            _closure2_slot5 = var8;
            var2 = var32[var2];
            var19 = var31.bind(var6)(var2);
            var13 = var19.useStateFromStores;
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
            var28 = var13.bind(var19)(var8, var2);
            var2 = 32;
            var2 = var32[var2];
            var8 = var31.bind(var6)(var2);
            var2 = var8.useThemeContext;
            var2 = var2.bind(var8)();
            var13 = var2.theme;
            var2 = 33;
            var8 = var32[var2];
            var19 = var22.bind(var6)(var8);
            var8 = 34;
            var8 = var32[var8];
            var8 = var22.bind(var6)(var8);
            var24 = var8.COLLECTIBLES_SHOP;
            var8 = new Array(1);
            var8[0] = var24;
            var8 = var19.bind(var6)(var8);
            var8 = var8.analyticsLocations;
            _closure2_slot6 = var8;
            var19 = 35;
            var19 = var32[var19];
            var24 = var22.bind(var6)(var19);
            var19 = {};
            var19['onClose'] = var26;
            var19['currentScreen'] = var17;
            var19 = var24.bind(var6)(var19);
            var19 = 36;
            var19 = var32[var19];
            var19 = var22.bind(var6)(var19);
            var19 = var19.bind(var6)();
            var24 = var19.top;
            var19 = 37;
            var19 = var32[var19];
            var26 = var31.bind(var6)(var19);
            var22 = var26.useAndroidShopLazyLoadPriceEnabled;
            var19 = 'CollectiblesShop';
            var27 = var22.bind(var26)(var19);
            var30 = 38;
            var19 = var32[var30];
            var26 = var31.bind(var6)(var19);
            var22 = var26.filterHiddenCategories;
            var19 = !var12;
            var12 = 27;
            var12 = var32[var12];
            var31 = var31.bind(var6)(var12);
            var12 = var31.isAndroid;
            var31 = var12.bind(var31)();
            var12 = var29;
            if(!var31) { _fun0005_ip = 1012; continue _fun0005 }
 963:
            var12 = var29;
            if(var28) { _fun0005_ip = 1012; continue _fun0005 }
 969:
            if(!var27) { _fun0005_ip = 984; continue _fun0005 }
 972:
            var12 = var29;
            if(var11) { _fun0005_ip = 1012; continue _fun0005 }
 978:
            var12 = var29;
            if(var14) { _fun0005_ip = 1012; continue _fun0005 }
 984:
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var30];
            var28 = var28.bind(var6)(var27);
            var27 = var28.filterGPlaySyncedCategories;
            var12 = var27.bind(var28)(var29);
 1012:
            var19 = var22.bind(var26)(var19, var12);
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var12 = 39;
            var12 = var28[var12];
            var26 = var27.bind(var6)(var12);
            var22 = var26.useCollectiblesShopDeepLinkProps;
            var12 = {};
            var12['categories'] = var19;
            var12 = var22.bind(var26)(var12);
            var22 = var12.categoryIndex;
            var26 = _closure1_slot1;
            var12 = 40;
            var12 = var28[var12];
            var26 = var26.bind(var6)(var12);
            var12 = 41;
            var12 = var28[var12];
            var27 = var27.bind(var6)(var12);
            var12 = var27.v4;
            var12 = var12.bind(var27)();
            var12 = var26.bind(var6)(var12);
            _closure2_slot7 = var12;
            var28 = _closure1_slot4;
            var27 = var28.useEffect;
            var26 = new Array(3);
            var26[0] = var8;
            var26[1] = var25;
            var26[2] = var12;
            var25 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                var2 = {};
                var7 = _closure2_slot6;
                var2['location_stack'] = var7;
                var7 = _closure2_slot7;
                var2['page_session_id'] = var7;
                var6 = _closure2_slot0;
                var2['source'] = var6;
                var6 = 'home';
                var2['page_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var25 = var27.bind(var28)(var25, var26);
            var27 = var28.useEffect;
            var26 = new Array(1);
            var26[0] = var15;
            var25 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 52; continue _fun0009 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 43;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot4;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var27.bind(var28)(var25, var26);
            if(!(var1 != var15)) { _fun0005_ip = 1785; continue _fun0005 }
 1180:
            var15 = var19.length;
            var15 = var9 === var15;
            if(var15) { _fun0005_ip = 1195; continue _fun0005 }
 1192:
            var15 = var23;
 1195:
            if(!var16) { _fun0005_ip = 1204; continue _fun0005 }
 1198:
            if(var18) { _fun0005_ip = 1749; continue _fun0005 }
 1204:
            if(!var15) { _fun0005_ip = 1219; continue _fun0005 }
 1207:
            if(var14) { _fun0005_ip = 1749; continue _fun0005 }
 1213:
            if(var11) { _fun0005_ip = 1749; continue _fun0005 }
 1219:
            var4 = var4 > var9;
            if(!var4) { _fun0005_ip = 1232; continue _fun0005 }
 1226:
            var11 = false;
            var4 = var11 === var14;
 1232:
            if(!var4) { _fun0005_ip = 1244; continue _fun0005 }
 1235:
            var5 = var5.size;
            var4 = var9 === var5;
 1244:
            if(!var4) { _fun0005_ip = 1284; continue _fun0005 }
 1247:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 44;
            var4 = var9[var4];
            var9 = var5.bind(var6)(var4);
            var5 = var9.captureMessage;
            var4 = 'collectibles mobile shop loaded empty categories';
            var4 = var5.bind(var9)(var4);
 1284:
            if(!(var1 !== var10)) { _fun0005_ip = 1329; continue _fun0005 }
 1288:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 44;
            var4 = var9[var4];
            var9 = var5.bind(var6)(var4);
            var5 = var9.captureMessage;
            var4 = 'collectibles mobile shop failed to fetch google sku ids: ';
            var4 = var4 + var10;
            var4 = var5.bind(var9)(var4);
 1329:
            var5 = _closure1_slot17;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = var18[var2];
            var2 = var15.bind(var6)(var2);
            var4 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var8;
            var10 = _closure1_slot18;
            var8 = 45;
            var8 = var18[var8];
            var8 = var15.bind(var6)(var8);
            var9 = var8.CollectiblesAnalyticsProvider;
            var8 = {};
            var11 = {};
            var11['sessionId'] = var12;
            var8['newValue'] = var11;
            var12 = _closure1_slot1;
            var11 = 46;
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
            var33 = var7.rootContainer;
            var34 = var14;
            var23 = copyDataProperties(var34, var33);
            var23 = 'paddingTop';
            var14[var23] = var24;
            var12['style'] = var14;
            var14 = 47;
            var14 = var18[var14];
            var14 = var15.bind(var6)(var14);
            var15 = var14.NativePaymentContextProvider;
            var14 = {};
            var18 = new Array(0);
            var14['skuIDs'] = var18;
            var14['activeSubscription'] = var1;
            if(!var16) { _fun0005_ip = 1584; continue _fun0005 }
 1570:
            var16 = _closure1_slot12;
            var16 = var16.SHOP_ALL;
            if(!(var17 === var16)) { _fun0005_ip = 1635; continue _fun0005 }
 1584:
            var18 = _closure1_slot17;
            var17 = _closure1_slot21;
            var16 = {};
            var16['data'] = var19;
            var19 = function renderItem(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var5 = var1.index;
                var4 = _closure1_slot17;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ShopCategory;
                var1 = {};
                var1['item'] = var6;
                var6 = _closure2_slot5;
                var1['isDarkTheme'] = var6;
                var1['index'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var16['renderItem'] = var19;
            var23 = var1 != var22;
            var19 = undefined;
            if(!var23) { _fun0005_ip = 1622; continue _fun0005 }
 1619:
            var19 = var22;
 1622:
            var16['initialScrollIndex'] = var19;
            var16 = var18.bind(var6)(var17, var16);
            _fun0005_ip = 1667; continue _fun0005;
 1635:
            var19 = _closure1_slot17;
            var18 = _closure1_slot21;
            var17 = {};
            var17['data'] = var21;
            var20 = function renderItem(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 48;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['shopBlock'] = var5;
                    var7 = _closure2_slot3;
                    var5 = null;
                    var7 = var5 != var7;
                    if(!var7) { _fun0010_ip = 64; continue _fun0010 }
 60:
                    var5 = _closure2_slot3;
 64:
                    var1['fetchShopHomeError'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var17['renderItem'] = var20;
            var16 = var19.bind(var6)(var18, var17);
 1667:
            var14['children'] = var16;
            var14 = var5.bind(var6)(var15, var14);
            var12['children'] = var14;
            var12 = var5.bind(var6)(var13, var12);
            var11[1] = var12;
            var14 = _closure1_slot17;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var12 = 49;
            var12 = var15[var12];
            var13 = var13.bind(var6)(var12);
            var12 = {};
            var12 = var14.bind(var6)(var13, var12);
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var2['children'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0005_ip = 1783; continue _fun0005;
 1749:
            var5 = _closure1_slot17;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var7.spinner;
            var3['style'] = var7;
            var7 = 'large';
            var3['size'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1783:
            return var2;
 1785:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var2 = function CollectiblesShopV2(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 28;
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
            var3 = 22;
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
            if(var4) { _fun0011_ip = 131; continue _fun0011 }
 121:
            var4 = var10.isStaff;
            var9 = var4.bind(var10)();
 131:
            if(var9) { _fun0011_ip = 156; continue _fun0011 }
 134:
            var4 = var3 == var10;
            var3 = undefined;
            if(var4) { _fun0011_ip = 153; continue _fun0011 }
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 54; continue _fun0012 }
 14:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = _closure2_slot0;
                            if(var2) { _fun0013_ip = 23; continue _fun0013 }
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
            var3 = 27;
            var1 = var1[var3];
            var10 = var10.bind(var5)(var1);
            var1 = var10.isIOS;
            var1 = var1.bind(var10)();
            if(!var1) { _fun0011_ip = 290; continue _fun0011 }
 261:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 50;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.isStable;
            var1 = !var10;
 290:
            if(!var1) { _fun0011_ip = 296; continue _fun0011 }
 293:
            var1 = var9;
 296:
            if(var7) { _fun0011_ip = 344; continue _fun0011 }
 299:
            if(var1) { _fun0011_ip = 344; continue _fun0011 }
 302:
            if(var4) { _fun0011_ip = 344; continue _fun0011 }
 305:
            var10 = _closure1_slot17;
            var9 = _closure1_slot5;
            var1 = {};
            var11 = var11.spinner;
            var1['style'] = var11;
            var11 = 'large';
            var1['size'] = var11;
            var1 = var10.bind(var5)(var9, var1);
            _fun0011_ip = 499; continue _fun0011;
 344:
            if(!var4) { _fun0011_ip = 350; continue _fun0011 }
 347:
            var4 = !var7;
 350:
            if(!var4) { _fun0011_ip = 449; continue _fun0011 }
 353:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 44;
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
            var3 = 50;
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
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['CollectiblesShopV2'] = var2;
    return var1;
})();