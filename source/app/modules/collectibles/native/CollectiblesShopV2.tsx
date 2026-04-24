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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot21;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot21;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FramesBannerBlockRecord;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot12 = var7;
    var4 = var4.CollectibleShopTab;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var4 = var4.PaymentGateways;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': '100%', 'width': '100%'};
    var4['rootContainer'] = var9;
    var9 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    var4['spinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = function CollectiblesShopInternal(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var32 = var1.analyticsSource;
            var _closure2_slot0 = var32;
            var18 = var1.onNavigateAway;
            var _closure2_slot1 = var18;
            var2 = var1.storeFront;
            var17 = var1.screen;
            var _closure2_slot2 = var17;
            var7 = undefined;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var _closure2_slot9 = var7;
            var _closure2_slot10 = var7;
            var _closure2_slot11 = var7;
            var _closure2_slot12 = var7;
            var _closure2_slot13 = var7;
            var _closure2_slot14 = var7;
            var _closure2_slot15 = var7;
            var _closure2_slot16 = var7;
            var _closure2_slot17 = var7;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var3 = var1[var3];
            var8 = var6.bind(var7)(var3);
            var5 = var8.useCommonTriggerPoint;
            var3 = 13;
            var3 = var1[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesShopOpenTriggerPoint;
            var3 = var5.bind(var8)(var3);
            var3 = 14;
            var5 = var1[var3];
            var10 = var6.bind(var7)(var5);
            var9 = var10.useStateFromStoresArray;
            var5 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure1_slot10;
                    var1 = var1.lastSuccessfulFetch;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var2 = var1;
case 36:
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var8, var5);
            var8 = _closure1_slot3;
            var5 = 1;
            var5 = var8.bind(var7)(var9, var5);
            var10 = 0;
            var5 = var5[var10];
            var1 = var1[var3];
            var9 = var6.bind(var7)(var1);
            var8 = var9.useStateFromStoresObject;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot7;
                var3 = var4.get;
                var2 = 'bypass_google_sku_sync';
                var2 = var3.bind(var4)(var2);
                var1['bypassGoogleSkuSync'] = var2;
                var3 = var4.get;
                var2 = 'shop_disable_cache';
                var2 = var3.bind(var4)(var2);
                var1['noCache'] = var2;
                var3 = var4.get;
                var2 = 'shop_include_unpublished';
                var2 = var3.bind(var4)(var2);
                var1['includeUnpublished'] = var2;
                return var1;
            };
            var1 = var8.bind(var9)(var6, var1);
            var13 = var1.bypassGoogleSkuSync;
            var _closure2_slot3 = var13;
            var19 = var1.noCache;
            var _closure2_slot4 = var19;
            var30 = var1.includeUnpublished;
            var _closure2_slot5 = var30;
            var1 = _closure1_slot18;
            var8 = var1.bind(var7)();
            var1 = null;
            var6 = var1 == var2;
            var14 = undefined;
            if(var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var14 = var2.country;
case 38:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var11 = var6.bind(var7)(var2);
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.v4;
                var2 = var2.bind(var3)();
                var1['sessionId'] = var2;
                return var1;
            };
            var12 = var11.bind(var7)(var2);
            var31 = var12.sessionId;
            _closure2_slot6 = var31;
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var11 = new Array(2);
            var11[0] = var31;
            var11[1] = var17;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot6;
                    var1['sessionId'] = var2;
                    var4 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0006_ip = 40; continue _fun0006 }
case 37:
                    var2 = _closure1_slot12;
                    var2 = var2.FEATURED_PAGE;
                    _fun0006_ip = 41; continue _fun0006;
case 40:
                    var2 = _closure2_slot2;
case 41:
                    var1['tab'] = var2;
                    return var1;
                }
            };
            var21 = var15.bind(var16)(var2, var11);
            var2 = 17;
            var2 = var9[var2];
            var6 = var6.bind(var7)(var2);
            var2 = {};
            var9 = _closure1_slot15;
            var9 = var9.APPLE;
            var2['paymentGateway'] = var9;
            if(!(var1 == var14)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var9 = {};
            _fun0004_ip = 44; continue _fun0004;
case 42:
            var11 = {};
            var11['countryCode'] = var14;
            var9 = var11;
case 44:
            var37 = var2;
            var36 = var9;
            var9 = copyDataProperties(var37, var36);
            var9 = true;
            var11 = 'logPerf';
            var2[10] = var9;
            var2 = var6.bind(var7)(var2, var21);
            var6 = var2.categories;
            _closure2_slot7 = var6;
            var14 = var2.isFetchingCategories;
            _closure2_slot8 = var14;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 18;
            var2 = var15[var2];
            var16 = var11.bind(var7)(var2);
            var15 = var16.useMaybeFetchCollectiblesShopHome;
            var2 = _closure1_slot12;
            var2 = var2.ORBS;
            if(!(var17 !== var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var2 = _closure1_slot13;
            var11 = var2.HOME;
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var2 = _closure1_slot13;
            var11 = var2.ORBS;
case 47:
            var2 = {};
            var2['noCache'] = var19;
            var2['includeUnpublished'] = var30;
            var2['logPerf'] = var9;
            var11 = var15.bind(var16)(var11, var2, var21);
            var23 = var11.shopBlocks;
            _closure2_slot9 = var23;
            var2 = var11.isFetchingShopHome;
            var24 = var11.fetchShopHomeError;
            _closure2_slot10 = var24;
            var29 = _closure1_slot4;
            var16 = var29.useMemo;
            var15 = new Array(2);
            var15[0] = var6;
            var15[1] = var14;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 19;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.isAndroid;
                    var4 = var1.bind(var4)();
                    var1 = false;
                    if(!(var1 !== var4)) { _fun0007_ip = 48; continue _fun0007 }
case 50:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot20;
                    var4 = _closure2_slot7;
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var2 = var3.value;
                    var8 = var2.products;
                    var7 = var8.forEach;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.googleSkuIds;
                            var1 = undefined;
                            var3 = var1 !== var3;
                            if(!var3) { _fun0008_ip = 3; continue _fun0008 }
case 49:
                            var5 = var2.googleSkuIds;
                            var4 = null;
                            var3 = var4 !== var5;
case 3:
                            if(!var3) { _fun0008_ip = 53; continue _fun0008 }
case 33:
                            var5 = _closure3_slot0;
                            var4 = var5.push;
                            var3 = global;
                            var7 = var3.Object;
                            var6 = var7.values;
                            var3 = var2.googleSkuIds;
                            var9 = var6.bind(var7)(var3);
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var6 = arraySpread(var10, var9, var8);
                            var10 = var4;
                            var9 = var3;
                            var8 = var5;
                            var3 = apply(var10, var9, var8);
case 53:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 20;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getIsVariantProduct;
                            var3 = var3.bind(var4)(var2);
                            if(!var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                            var4 = var2.variants;
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.googleSkuIds;
                                    var1 = undefined;
                                    var3 = var1 !== var3;
                                    if(!var3) { _fun0009_ip = 3; continue _fun0009 }
case 49:
                                    var5 = var2.googleSkuIds;
                                    var4 = null;
                                    var3 = var4 !== var5;
case 3:
                                    if(!var3) { _fun0009_ip = 53; continue _fun0009 }
case 33:
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
case 53:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
case 54:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0007_ip = 52; continue _fun0007 }
case 51:
                    return var1;
case 48:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var16 = var16.bind(var29)(var11, var15);
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var11 = 21;
            var11 = var26[var11];
            var15 = var25.bind(var7)(var11);
            var11 = var15.useGoogleSkuIds;
            var9 = var9 === var14;
            var9 = var11.bind(var15)(var16, var9);
            var15 = var9.isFetchingGoogleSkus;
            _closure2_slot11 = var15;
            var11 = var9.fetchError;
            var21 = _closure1_slot0;
            var9 = 22;
            var9 = var26[var9];
            var16 = var21.bind(var7)(var9);
            var9 = var16.useCurrentUserIfAvailable;
            var16 = var9.bind(var16)();
            _closure2_slot12 = var16;
            var9 = 23;
            var9 = var26[var9];
            var22 = var21.bind(var7)(var9);
            var9 = var22.useCurrentUserWishlist;
            var9 = var9.bind(var22)();
            var3 = var26[var3];
            var27 = var21.bind(var7)(var3);
            var22 = var27.useStateFromStores;
            var3 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 24;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot8;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var22.bind(var27)(var9, var3);
            _closure2_slot13 = var3;
            var3 = 25;
            var9 = var26[var3];
            var22 = var25.bind(var7)(var9);
            var9 = 26;
            var9 = var26[var9];
            var9 = var25.bind(var7)(var9);
            var27 = var9.COLLECTIBLES_SHOP;
            var9 = new Array(1);
            var9[0] = var27;
            var9 = var22.bind(var7)(var9);
            var9 = var9.analyticsLocations;
            _closure2_slot14 = var9;
            var22 = 27;
            var22 = var26[var22];
            var27 = var21.bind(var7)(var22);
            var22 = var27.useNavigation;
            var28 = var22.bind(var27)();
            _closure2_slot15 = var28;
            var27 = var29.useEffect;
            var22 = new Array(2);
            var22[0] = var28;
            var22[1] = var18;
            var18 = function() {
                var4 = _closure2_slot15;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.action;
                        var2 = var1.type;
                        var1 = 'RESET';
                        if(!(var1 !== var2)) { _fun0010_ip = 5; continue _fun0010 }
case 56:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 5; continue _fun0010 }
case 40:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var18 = var27.bind(var29)(var18, var22);
            var22 = var29.useMemo;
            var18 = new Array(4);
            var18[0] = var6;
            var18[1] = var13;
            var18[2] = var15;
            var18[3] = var14;
            var13 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = var2.values;
                    var12 = var1.bind(var2)();
                    var6 = new Array(0);
                    var11 = 0;
                    var13 = var6;
                    var1 = arraySpread(var13, var12, var11);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 28;
                    var1 = var10[var8];
                    var7 = undefined;
                    var3 = var9.bind(var7)(var1);
                    var2 = var3.filterHiddenCategories;
                    var1 = 29;
                    var1 = var10[var1];
                    var9 = var9.bind(var7)(var1);
                    var1 = var9.isGooglePlayBillingSupported;
                    var9 = var1.bind(var9)();
                    var1 = var6;
                    if(!var9) { _fun0011_ip = 48; continue _fun0011 }
case 57:
                    var9 = _closure2_slot3;
                    var1 = var6;
                    if(var9) { _fun0011_ip = 48; continue _fun0011 }
case 58:
                    var9 = _closure2_slot11;
                    var1 = var6;
                    if(var9) { _fun0011_ip = 48; continue _fun0011 }
case 59:
                    var5 = _closure2_slot8;
                    var1 = var6;
                    if(var5) { _fun0011_ip = 48; continue _fun0011 }
case 60:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.filterGPlaySyncedCategories;
                    var1 = var4.bind(var5)(var6);
case 48:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var22 = var22.bind(var29)(var13, var18);
            var13 = global;
            var18 = var13.Date;
            var13 = var18.now;
            var13 = var13.bind(var18)();
            var18 = var13 - var5;
            var13 = 30;
            var13 = var26[var13];
            var13 = var21.bind(var7)(var13);
            var13 = var13.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            var18 = var18 > var13;
            var13 = 31;
            var13 = var26[var13];
            var27 = var21.bind(var7)(var13);
            var21 = var27.useCollectiblesShopDeepLinkProps;
            var13 = {};
            var13['categories'] = var22;
            var13 = var21.bind(var27)(var13);
            var21 = var13.categoryIndex;
            var28 = var29.useRef;
            var27 = {};
            var33 = _closure1_slot12;
            var34 = var33.SHOP_ALL;
            var13 = false;
            var27[33] = var13;
            var34 = var33.FEATURED_PAGE;
            var27[33] = var13;
            var33 = var33.ORBS;
            var27[32] = var13;
            var27 = var28.bind(var29)(var27);
            _closure2_slot16 = var27;
            var28 = var29.useEffect;
            var27 = new Array(6);
            var27[0] = var9;
            var27[1] = var32;
            var27[2] = var31;
            var27[3] = var30;
            var27[4] = var17;
            var27[5] = var19;
            var19 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var8 = null;
                    var10 = var8 == var1;
                    if(var10) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot12;
                    var1 = var1.FEATURED_PAGE;
                    var10 = var2 === var1;
case 61:
                    if(var10) { _fun0012_ip = 7; continue _fun0012 }
case 63:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot12;
                    var1 = var1.SHOP_ALL;
                    var10 = var2 === var1;
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var4 = var7.track;
                    var2 = _closure1_slot14;
                    var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var2 = {};
                    var9 = _closure2_slot14;
                    var2['location_stack'] = var9;
                    var9 = _closure2_slot6;
                    var2['page_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var2['source'] = var9;
                    var9 = 'home';
                    if(var10) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                    var9 = _closure2_slot2;
case 64:
                    var2['page_type'] = var9;
                    var2 = var4.bind(var7)(var3, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 33;
                    var2 = var10[var7];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.trackShopPerf;
                    var2 = {};
                    var11 = _closure2_slot6;
                    var2['sessionId'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.CollectiblesShopPerfCheckpoint;
                    var7 = var7.SHOP_MOUNTED;
                    var2['checkpoint'] = var7;
                    var7 = _closure2_slot2;
                    if(!(var8 == var7)) { _fun0012_ip = 21; continue _fun0012 }
case 66:
                    var6 = _closure1_slot12;
                    var6 = var6.FEATURED_PAGE;
                    _fun0012_ip = 67; continue _fun0012;
case 21:
                    var6 = _closure2_slot2;
case 67:
                    var2['tab'] = var6;
                    var6 = _closure2_slot5;
                    var2['unpublishedCategoriesShown'] = var6;
                    var5 = _closure2_slot4;
                    var2['cacheDisabled'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var19 = var28.bind(var29)(var19, var27);
            var28 = var29.useEffect;
            var27 = new Array(1);
            var27[0] = var16;
            var19 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 34;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot12;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var28.bind(var29)(var19, var27);
            var28 = var29.useMemo;
            var27 = new Array(1);
            var27[0] = var23;
            var19 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0014_ip = 70; continue _fun0014 }
case 49:
                    var4 = _closure2_slot9;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var2 = _closure1_slot11;
                        var1 = arg1;
                        var1 = var1 instanceof var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 70:
                    return var1;
                }
            };
            var19 = var28.bind(var29)(var19, var27);
            _closure2_slot17 = var19;
            var19 = 35;
            var19 = var26[var19];
            var25 = var25.bind(var7)(var19);
            var19 = {};
            var19['currentScreen'] = var17;
            var19 = var25.bind(var7)(var19);
            if(!(var1 != var16)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var16 = var22.length;
            var16 = var10 === var16;
            if(var16) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var16 = var18;
case 73:
            var18 = _closure1_slot12;
            var18 = var18.FEATURED_PAGE;
            if(!(var17 !== var18)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var18 = _closure1_slot12;
            var18 = var18.ORBS;
            if(!(var17 !== var18)) { _fun0004_ip = 75; continue _fun0004 }
case 77:
            if(!(var1 == var17)) { _fun0004_ip = 78; continue _fun0004 }
case 75:
            if(!var2) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var19 = _closure1_slot16;
            var18 = _closure1_slot5;
            var2 = {};
            var25 = var8.spinner;
            var2['style'] = var25;
            var25 = 'large';
            var2['size'] = var25;
            var2 = var19.bind(var7)(var18, var2);
            _fun0004_ip = 80; continue _fun0004;
case 78:
            if(!var16) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            if(var14) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            if(var15) { _fun0004_ip = 83; continue _fun0004 }
case 81:
            var5 = var5 > var10;
            if(!var5) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var5 = var13 === var14;
case 85:
            if(!var5) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var6 = var6.size;
            var5 = var10 === var6;
case 87:
            if(!var5) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 36;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop loaded empty categories';
            var5 = var6.bind(var10)(var5);
case 89:
            if(!(var1 !== var11)) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 36;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop failed to fetch google sku ids: ';
            var5 = var5 + var11;
            var5 = var6.bind(var10)(var5);
case 91:
            var6 = _closure1_slot16;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = var16[var3];
            var3 = var15.bind(var7)(var3);
            var5 = var3.AnalyticsLocationProvider;
            var3 = {};
            var3['value'] = var9;
            var11 = _closure1_slot17;
            var9 = 37;
            var9 = var16[var9];
            var9 = var15.bind(var7)(var9);
            var10 = var9.CollectiblesAnalyticsProvider;
            var9 = {};
            var9['newValue'] = var12;
            var13 = _closure1_slot6;
            var12 = {};
            var14 = var8.rootContainer;
            var12['style'] = var14;
            var14 = 38;
            var14 = var16[var14];
            var14 = var15.bind(var7)(var14);
            var15 = var14.NativePaymentContextProvider;
            var14 = {};
            var16 = new Array(0);
            var14['skuIDs'] = var16;
            var14['activeSubscription'] = var1;
            var16 = _closure1_slot12;
            var16 = var16.SHOP_ALL;
            if(!(var17 !== var16)) { _fun0004_ip = 93; continue _fun0004 }
case 94:
            var16 = _closure1_slot12;
            var16 = var16.ORBS;
            if(!(var17 !== var16)) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var18 = _closure1_slot16;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 42;
            var16 = var26[var16];
            var16 = var17.bind(var7)(var16);
            var17 = var16.CollectiblesCoachmarkScrollDismissProvider;
            var16 = {};
            var25 = _closure1_slot1;
            var19 = 39;
            var19 = var26[var19];
            var25 = var25.bind(var7)(var19);
            var19 = {};
            var19['data'] = var23;
            var26 = function renderItem(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var2;
                    if(var1) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                    var2 = _closure2_slot16;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.FEATURED_PAGE;
                    var1 = var3[var2];
case 97:
                    if(var1) { _fun0015_ip = 19; continue _fun0015 }
case 99:
                    var1 = _closure2_slot16;
                    var7 = var1.current;
                    var6 = _closure1_slot12;
                    var3 = var6.FEATURED_PAGE;
                    var2 = true;
                    var7[var3] = var2;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 33;
                    var1 = var10[var7];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var11 = _closure2_slot6;
                    var1['sessionId'] = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.CollectiblesShopPerfCheckpoint;
                    var7 = var7.SHOP_RENDERED;
                    var1['checkpoint'] = var7;
                    var6 = var6.FEATURED_PAGE;
                    var1['tab'] = var6;
                    var6 = _closure2_slot5;
                    var1['unpublishedCategoriesShown'] = var6;
                    var4 = _closure2_slot4;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 43;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['shopBlock'] = var5;
                    var7 = _closure2_slot10;
                    var6 = null;
                    var7 = var6 != var7;
                    if(!var7) { _fun0015_ip = 100; continue _fun0015 }
case 101:
                    var6 = _closure2_slot10;
case 100:
                    var1['fetchShopHomeError'] = var6;
                    var5 = _closure2_slot17;
                    var1['framesBannerBlock'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var19['renderItem'] = var26;
            var19 = var18.bind(var7)(var25, var19);
            var16['children'] = var19;
            var16 = var18.bind(var7)(var17, var16);
            _fun0004_ip = 102; continue _fun0004;
case 95:
            var19 = _closure1_slot16;
            var18 = _closure1_slot1;
            var25 = _closure1_slot2;
            var17 = 41;
            var17 = var25[var17];
            var18 = var18.bind(var7)(var17);
            var17 = {};
            var17['shopBlocks'] = var23;
            var25 = var1 != var24;
            var23 = null;
            if(!var25) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var23 = var24;
case 103:
            var17['fetchShopHomeError'] = var23;
            var23 = function onRenderFirstOrbsItem() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var3 = var1.current;
                    var2 = _closure1_slot12;
                    var2 = var2.ORBS;
                    var2 = var3[var2];
                    if(var2) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                    var2 = _closure2_slot16;
                    var6 = var2.current;
                    var5 = _closure1_slot12;
                    var3 = var5.ORBS;
                    var2 = true;
                    var6[var3] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 33;
                    var1 = var9[var6];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var10 = _closure2_slot6;
                    var1['sessionId'] = var10;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.CollectiblesShopPerfCheckpoint;
                    var6 = var6.SHOP_RENDERED;
                    var1['checkpoint'] = var6;
                    var5 = var5.ORBS;
                    var1['tab'] = var5;
                    var5 = _closure2_slot5;
                    var1['unpublishedCategoriesShown'] = var5;
                    var4 = _closure2_slot4;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
case 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onRenderFirstOrbsItem'] = var23;
            var16 = var19.bind(var7)(var18, var17);
case 102:
            _fun0004_ip = 107; continue _fun0004;
case 93:
            var19 = _closure1_slot16;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 39;
            var17 = var23[var17];
            var18 = var18.bind(var7)(var17);
            var17 = {};
            var17['data'] = var22;
            var20 = function renderItem(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var5 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var5;
                    if(var1) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                    var2 = _closure2_slot16;
                    var3 = var2.current;
                    var2 = _closure1_slot12;
                    var2 = var2.SHOP_ALL;
                    var1 = var3[var2];
case 97:
                    if(var1) { _fun0017_ip = 19; continue _fun0017 }
case 99:
                    var1 = _closure2_slot16;
                    var8 = var1.current;
                    var7 = _closure1_slot12;
                    var3 = var7.SHOP_ALL;
                    var2 = true;
                    var8[var3] = var2;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 33;
                    var1 = var11[var8];
                    var9 = undefined;
                    var3 = var10.bind(var9)(var1);
                    var2 = var3.trackShopPerf;
                    var1 = {};
                    var12 = _closure2_slot6;
                    var1['sessionId'] = var12;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.CollectiblesShopPerfCheckpoint;
                    var8 = var8.SHOP_RENDERED;
                    var1['checkpoint'] = var8;
                    var7 = var7.SHOP_ALL;
                    var1['tab'] = var7;
                    var7 = _closure2_slot5;
                    var1['unpublishedCategoriesShown'] = var7;
                    var4 = _closure2_slot4;
                    var1['cacheDisabled'] = var4;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 40;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ShopCategory;
                    var1 = {};
                    var1['category'] = var6;
                    var6 = _closure2_slot13;
                    var1['isDarkTheme'] = var6;
                    var1['index'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var17['renderItem'] = var20;
            var22 = var1 != var21;
            var20 = undefined;
            if(!var22) { _fun0004_ip = 108; continue _fun0004 }
case 109:
            var20 = var21;
case 108:
            var17['initialScrollIndex'] = var20;
            var16 = var19.bind(var7)(var18, var17);
case 107:
            var14['children'] = var16;
            var14 = var6.bind(var7)(var15, var14);
            var12['children'] = var14;
            var13 = var6.bind(var7)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot16;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 44;
            var13 = var16[var13];
            var14 = var14.bind(var7)(var13);
            var13 = {};
            var13 = var15.bind(var7)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var7)(var10, var9);
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0004_ip = 110; continue _fun0004;
case 83:
            var6 = _closure1_slot16;
            var5 = _closure1_slot5;
            var4 = {};
            var8 = var8.spinner;
            var4['style'] = var8;
            var8 = 'large';
            var4['size'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 110:
            var2 = var3;
case 80:
            return var2;
case 71:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var2 = function CollectiblesShopV2(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 21;
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
            var3 = 14;
            var3 = var9[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var4, var3);
            var3 = null;
            var4 = var3 == var10;
            var9 = undefined;
            if(var4) { _fun0018_ip = 111; continue _fun0018 }
case 112:
            var4 = var10.isStaff;
            var9 = var4.bind(var10)();
case 111:
            if(var9) { _fun0018_ip = 113; continue _fun0018 }
case 114:
            var4 = var3 == var10;
            var3 = undefined;
            if(var4) { _fun0018_ip = 115; continue _fun0018 }
case 116:
            var4 = var10.isStaffPersonal;
            var3 = var4.bind(var10)();
case 115:
            var9 = var3;
case 113:
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
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(var3) { _fun0019_ip = 117; continue _fun0019 }
case 32:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = function() {
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
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
case 117:
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
            if(!var1) { _fun0018_ip = 118; continue _fun0018 }
case 119:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 45;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.isStable;
            var1 = !var10;
case 118:
            if(!var1) { _fun0018_ip = 120; continue _fun0018 }
case 121:
            var1 = var9;
case 120:
            if(var7) { _fun0018_ip = 122; continue _fun0018 }
case 123:
            if(var1) { _fun0018_ip = 122; continue _fun0018 }
case 124:
            if(var4) { _fun0018_ip = 122; continue _fun0018 }
case 125:
            var10 = _closure1_slot16;
            var9 = _closure1_slot5;
            var1 = {};
            var11 = var11.spinner;
            var1['style'] = var11;
            var11 = 'large';
            var1['size'] = var11;
            var1 = var10.bind(var5)(var9, var1);
            _fun0018_ip = 126; continue _fun0018;
case 122:
            if(!var4) { _fun0018_ip = 127; continue _fun0018 }
case 128:
            var4 = !var7;
case 127:
            if(!var4) { _fun0018_ip = 129; continue _fun0018 }
case 130:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 36;
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
            var3 = 45;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var3.isStable;
            var3 = ' isStable: ';
            var3 = var10 + var3;
            var3 = var3 + var9;
            var3 = var4.bind(var7)(var3);
case 129:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var15 = var2;
            var14 = var6;
            var7 = copyDataProperties(var15, var14);
            var7 = 'storeFront';
            var2[6] = var8;
            var7 = var6.screen;
            var6 = 'screen';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 126:
            return var1;
        }
    };
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['CollectiblesShopV2'] = var2;
    return var1;
})();