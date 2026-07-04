// app/modules/collectibles/native/CollectiblesShopV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var2 = function CollectiblesShopV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            var3 = _closure1_slot19;
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
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var10.isStaff;
            var9 = var4.bind(var10)();
case 36:
            if(var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = var3 == var10;
            var3 = undefined;
            if(var4) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = var10.isStaffPersonal;
            var3 = var4.bind(var10)();
case 40:
            var9 = var3;
case 38:
            var10 = _closure1_slot4;
            var4 = var10.useState;
            var3 = false;
            var10 = var4.bind(var10)(var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var10 = var4.bind(var5)(var10, var3);
            var3 = 0;
            var4 = var10[var3];
            var3 = 1;
            var3 = var10[var3];
            var _closure2_slot1 = var3;
            var12 = _closure1_slot4;
            var10 = var12.useEffect;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 42; continue _fun0005 }
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
case 42:
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
            if(!var1) { _fun0004_ip = 43; continue _fun0004 }
case 24:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 44;
            var10 = var13[var10];
            var10 = var12.bind(var5)(var10);
            var10 = var10.isStable;
            var1 = !var10;
case 43:
            if(!var1) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = var9;
case 44:
            if(var7) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            if(var1) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            if(var4) { _fun0004_ip = 46; continue _fun0004 }
case 49:
            var10 = _closure1_slot17;
            var9 = _closure1_slot5;
            var1 = {};
            var11 = var11.spinner;
            var1['style'] = var11;
            var11 = 'large';
            var1['size'] = var11;
            var1 = var10.bind(var5)(var9, var1);
            _fun0004_ip = 50; continue _fun0004;
case 46:
            if(!var4) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var4 = !var7;
case 51:
            if(!var4) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 37;
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
            var3 = 44;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var3.isStable;
            var3 = ' isStable: ';
            var3 = var10 + var3;
            var3 = var3 + var9;
            var3 = var4.bind(var7)(var3);
case 53:
            var4 = _closure1_slot17;
            var3 = _closure1_slot20;
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
case 50:
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var9 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var9);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ActivityIndicator;
    var _closure1_slot5 = var9;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FramesBannerBlockRecord;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.COLLECTIBLES_SHOP_CACHE_DURATION_MS;
    var _closure1_slot12 = var8;
    var8 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot13 = var8;
    var4 = var4.CollectibleShopTab;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot15 = var8;
    var4 = var4.PaymentGateways;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': '100%', 'width': '100%'};
    var4['rootContainer'] = var10;
    var10 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    var4['spinner'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = function CollectiblesShopInternal(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var26 = var1.analyticsSource;
            var _closure2_slot0 = var26;
            var17 = var1.onNavigateAway;
            var _closure2_slot1 = var17;
            var2 = var1.storeFront;
            var19 = var1.screen;
            var _closure2_slot2 = var19;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure1_slot10;
                    var1 = var1.lastSuccessfulFetch;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var2 = var1;
case 55:
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
            var25 = var1.noCache;
            var _closure2_slot4 = var25;
            var32 = var1.includeUnpublished;
            var _closure2_slot5 = var32;
            var1 = _closure1_slot19;
            var8 = var1.bind(var7)();
            var1 = null;
            var6 = var1 == var2;
            var14 = undefined;
            if(var6) { _fun0006_ip = 44; continue _fun0006 }
case 43:
            var14 = var2.country;
case 44:
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
            var33 = var12.sessionId;
            _closure2_slot6 = var33;
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var11 = new Array(2);
            var11[0] = var33;
            var11[1] = var19;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot6;
                    var1['sessionId'] = var2;
                    var4 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0008_ip = 57; continue _fun0008 }
case 56:
                    var2 = _closure1_slot13;
                    var2 = var2.FEATURED_PAGE;
                    _fun0008_ip = 58; continue _fun0008;
case 57:
                    var2 = _closure2_slot2;
case 58:
                    var1['tab'] = var2;
                    return var1;
                }
            };
            var20 = var15.bind(var16)(var2, var11);
            var2 = 17;
            var2 = var9[var2];
            var6 = var6.bind(var7)(var2);
            var2 = {};
            var9 = _closure1_slot16;
            var9 = var9.APPLE;
            var2['paymentGateway'] = var9;
            if(!(var1 == var14)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var9 = {};
            _fun0006_ip = 61; continue _fun0006;
case 59:
            var11 = {};
            var11['countryCode'] = var14;
            var9 = var11;
case 61:
            var38 = var2;
            var37 = var9;
            var9 = copyDataProperties(var38, var37);
            var9 = true;
            var11 = 'logPerf';
            var2[10] = var9;
            var2 = var6.bind(var7)(var2, var20);
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
            var2 = _closure1_slot13;
            var2 = var2.ORBS;
            if(!(var19 !== var2)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var2 = _closure1_slot14;
            var11 = var2.HOME;
            _fun0006_ip = 64; continue _fun0006;
case 62:
            var2 = _closure1_slot14;
            var11 = var2.ORBS;
case 64:
            var2 = {};
            var2['noCache'] = var25;
            var2['includeUnpublished'] = var32;
            var2['logPerf'] = var9;
            var11 = var15.bind(var16)(var11, var2, var20);
            var27 = var11.shopBlocks;
            _closure2_slot9 = var27;
            var2 = var11.isFetchingShopHome;
            var28 = var11.fetchShopHomeError;
            _closure2_slot10 = var28;
            var20 = _closure1_slot4;
            var16 = var20.useMemo;
            var15 = new Array(2);
            var15[0] = var6;
            var15[1] = var14;
            var11 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 19;
                    var1 = var5[var1];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.isAndroid;
                    var4 = var1.bind(var4)();
                    var1 = false;
                    if(!(var1 !== var4)) { _fun0009_ip = 65; continue _fun0009 }
case 67:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot21;
                    var4 = _closure2_slot7;
                    var2 = var4.values;
                    var2 = var2.bind(var4)();
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var2 = var3.value;
                    var8 = var2.products;
                    var7 = var8.forEach;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.googleSkuIds;
                            var1 = undefined;
                            var3 = var1 !== var3;
                            if(!var3) { _fun0010_ip = 3; continue _fun0010 }
case 66:
                            var5 = var2.googleSkuIds;
                            var4 = null;
                            var3 = var4 !== var5;
case 3:
                            if(!var3) { _fun0010_ip = 70; continue _fun0010 }
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
case 70:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 20;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getIsVariantProduct;
                            var3 = var3.bind(var4)(var2);
                            if(!var3) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                            var4 = var2.variants;
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.googleSkuIds;
                                    var1 = undefined;
                                    var3 = var1 !== var3;
                                    if(!var3) { _fun0011_ip = 3; continue _fun0011 }
case 66:
                                    var5 = var2.googleSkuIds;
                                    var4 = null;
                                    var3 = var4 !== var5;
case 3:
                                    if(!var3) { _fun0011_ip = 70; continue _fun0011 }
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
case 70:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
case 71:
                            return var1;
                        }
                    };
                    var2 = var7.bind(var8)(var2);
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0009_ip = 69; continue _fun0009 }
case 68:
                    return var1;
case 65:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var16 = var16.bind(var20)(var11, var15);
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var11 = 21;
            var11 = var21[var11];
            var15 = var20.bind(var7)(var11);
            var11 = var15.useGoogleSkuIds;
            var9 = var9 === var14;
            var9 = var11.bind(var15)(var16, var9);
            var15 = var9.isFetchingGoogleSkus;
            _closure2_slot11 = var15;
            var11 = var9.fetchError;
            var23 = _closure1_slot0;
            var9 = 22;
            var9 = var21[var9];
            var16 = var23.bind(var7)(var9);
            var9 = var16.useCurrentUserIfAvailable;
            var16 = var9.bind(var16)();
            _closure2_slot12 = var16;
            var9 = 23;
            var9 = var21[var9];
            var22 = var23.bind(var7)(var9);
            var9 = var22.useCurrentUserWishlist;
            var9 = var9.bind(var22)();
            var3 = var21[var3];
            var24 = var23.bind(var7)(var3);
            var22 = var24.useStateFromStores;
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
            var22 = var22.bind(var24)(var9, var3);
            _closure2_slot13 = var22;
            var3 = 25;
            var9 = var21[var3];
            var24 = var20.bind(var7)(var9);
            var9 = 26;
            var9 = var21[var9];
            var9 = var20.bind(var7)(var9);
            var29 = var9.COLLECTIBLES_SHOP;
            var9 = new Array(1);
            var9[0] = var29;
            var9 = var24.bind(var7)(var9);
            var9 = var9.analyticsLocations;
            _closure2_slot14 = var9;
            var24 = 27;
            var24 = var21[var24];
            var29 = var23.bind(var7)(var24);
            var24 = var29.useNavigation;
            var31 = var24.bind(var29)();
            _closure2_slot15 = var31;
            var30 = _closure1_slot4;
            var29 = var30.useEffect;
            var24 = new Array(2);
            var24[0] = var31;
            var24[1] = var17;
            var17 = function() {
                var4 = _closure2_slot15;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.data;
                        var1 = var1.action;
                        var2 = var1.type;
                        var1 = 'RESET';
                        if(!(var1 !== var2)) { _fun0012_ip = 73; continue _fun0012 }
case 55:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 73:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var29.bind(var30)(var17, var24);
            var29 = _closure1_slot4;
            var24 = var29.useMemo;
            var17 = new Array(4);
            var17[0] = var6;
            var17[1] = var13;
            var17[2] = var15;
            var17[3] = var14;
            var13 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                    if(!var9) { _fun0013_ip = 65; continue _fun0013 }
case 75:
                    var9 = _closure2_slot3;
                    var1 = var6;
                    if(var9) { _fun0013_ip = 65; continue _fun0013 }
case 76:
                    var9 = _closure2_slot11;
                    var1 = var6;
                    if(var9) { _fun0013_ip = 65; continue _fun0013 }
case 77:
                    var5 = _closure2_slot8;
                    var1 = var6;
                    if(var5) { _fun0013_ip = 65; continue _fun0013 }
case 78:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.filterGPlaySyncedCategories;
                    var1 = var4.bind(var5)(var6);
case 65:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var24 = var24.bind(var29)(var13, var17);
            var13 = global;
            var17 = var13.Date;
            var13 = var17.now;
            var13 = var13.bind(var17)();
            var17 = var13 - var5;
            var13 = _closure1_slot12;
            var17 = var17 > var13;
            var13 = 30;
            var13 = var21[var13];
            var29 = var23.bind(var7)(var13);
            var23 = var29.useCollectiblesShopDeepLinkProps;
            var13 = {};
            var13['categories'] = var24;
            var13 = var23.bind(var29)(var13);
            var23 = var13.categoryIndex;
            var31 = _closure1_slot4;
            var30 = var31.useRef;
            var29 = {};
            var34 = _closure1_slot13;
            var35 = var34.SHOP_ALL;
            var13 = false;
            var29[34] = var13;
            var35 = var34.FEATURED_PAGE;
            var29[34] = var13;
            var34 = var34.ORBS;
            var29[33] = var13;
            var29 = var30.bind(var31)(var29);
            _closure2_slot16 = var29;
            var31 = _closure1_slot4;
            var30 = var31.useEffect;
            var29 = new Array(6);
            var29[0] = var9;
            var29[1] = var26;
            var29[2] = var33;
            var29[3] = var32;
            var29[4] = var19;
            var29[5] = var25;
            var26 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var8 = null;
                    var10 = var8 == var1;
                    if(var10) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot13;
                    var1 = var1.FEATURED_PAGE;
                    var10 = var2 === var1;
case 79:
                    if(var10) { _fun0014_ip = 7; continue _fun0014 }
case 74:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot13;
                    var1 = var1.SHOP_ALL;
                    var10 = var2 === var1;
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var4 = var7.track;
                    var2 = _closure1_slot15;
                    var3 = var2.COLLECTIBLES_SHOP_VIEWED;
                    var2 = {};
                    var9 = _closure2_slot14;
                    var2['location_stack'] = var9;
                    var9 = _closure2_slot6;
                    var2['page_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var2['source'] = var9;
                    var9 = 'home';
                    if(var10) { _fun0014_ip = 81; continue _fun0014 }
case 82:
                    var9 = _closure2_slot2;
case 81:
                    var2['page_type'] = var9;
                    var2 = var4.bind(var7)(var3, var2);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 32;
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
                    if(!(var8 == var7)) { _fun0014_ip = 21; continue _fun0014 }
case 83:
                    var6 = _closure1_slot13;
                    var6 = var6.FEATURED_PAGE;
                    _fun0014_ip = 84; continue _fun0014;
case 21:
                    var6 = _closure2_slot2;
case 84:
                    var2['tab'] = var6;
                    var6 = _closure2_slot5;
                    var2['unpublishedCategoriesShown'] = var6;
                    var5 = _closure2_slot4;
                    var2['cacheDisabled'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var26 = var30.bind(var31)(var26, var29);
            var31 = _closure1_slot4;
            var30 = var31.useEffect;
            var29 = new Array(1);
            var29[0] = var16;
            var26 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 85; continue _fun0015 }
case 86:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 33;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot12;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var30.bind(var31)(var26, var29);
            var31 = _closure1_slot4;
            var30 = var31.useMemo;
            var29 = new Array(1);
            var29[0] = var27;
            var26 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0016_ip = 87; continue _fun0016 }
case 66:
                    var4 = _closure2_slot9;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var2 = _closure1_slot11;
                        var1 = arg1;
                        var1 = var1 instanceof var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 87:
                    return var1;
                }
            };
            var26 = var30.bind(var31)(var26, var29);
            _closure2_slot17 = var26;
            var31 = _closure1_slot4;
            var30 = var31.useCallback;
            var29 = new Array(4);
            var29[0] = var33;
            var29[1] = var32;
            var29[2] = var25;
            var29[3] = var22;
            var22 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var5 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var5;
                    if(var1) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                    var2 = _closure2_slot16;
                    var3 = var2.current;
                    var2 = _closure1_slot13;
                    var2 = var2.SHOP_ALL;
                    var1 = var3[var2];
case 88:
                    if(var1) { _fun0017_ip = 19; continue _fun0017 }
case 90:
                    var1 = _closure2_slot16;
                    var8 = var1.current;
                    var7 = _closure1_slot13;
                    var3 = var7.SHOP_ALL;
                    var2 = true;
                    var8[var3] = var2;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 32;
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
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 34;
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
            var22 = var30.bind(var31)(var22, var29);
            var31 = _closure1_slot4;
            var30 = var31.useCallback;
            var29 = new Array(5);
            var29[0] = var33;
            var29[1] = var32;
            var29[2] = var25;
            var29[3] = var28;
            var29[4] = var26;
            var26 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    var1 = var1 !== var2;
                    if(var1) { _fun0018_ip = 88; continue _fun0018 }
case 89:
                    var2 = _closure2_slot16;
                    var3 = var2.current;
                    var2 = _closure1_slot13;
                    var2 = var2.FEATURED_PAGE;
                    var1 = var3[var2];
case 88:
                    if(var1) { _fun0018_ip = 19; continue _fun0018 }
case 90:
                    var1 = _closure2_slot16;
                    var7 = var1.current;
                    var6 = _closure1_slot13;
                    var3 = var6.FEATURED_PAGE;
                    var2 = true;
                    var7[var3] = var2;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 32;
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
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['shopBlock'] = var5;
                    var7 = _closure2_slot10;
                    var6 = null;
                    var7 = var6 != var7;
                    if(!var7) { _fun0018_ip = 91; continue _fun0018 }
case 92:
                    var6 = _closure2_slot10;
case 91:
                    var1['fetchShopHomeError'] = var6;
                    var5 = _closure2_slot17;
                    var1['framesBannerBlock'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var31 = var30.bind(var31)(var26, var29);
            var30 = _closure1_slot4;
            var29 = var30.useCallback;
            var26 = new Array(3);
            var26[0] = var33;
            var26[1] = var32;
            var26[2] = var25;
            var25 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot16;
                    var3 = var1.current;
                    var2 = _closure1_slot13;
                    var2 = var2.ORBS;
                    var2 = var3[var2];
                    if(var2) { _fun0019_ip = 93; continue _fun0019 }
case 94:
                    var2 = _closure2_slot16;
                    var6 = var2.current;
                    var5 = _closure1_slot13;
                    var3 = var5.ORBS;
                    var2 = true;
                    var6[var3] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 32;
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
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var29.bind(var30)(var25, var26);
            var30 = _closure1_slot4;
            var29 = var30.useCallback;
            var25 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var18 = new Array(0);
            var25 = var29.bind(var30)(var25, var18);
            var18 = 36;
            var18 = var21[var18];
            var20 = var20.bind(var7)(var18);
            var18 = {};
            var18['currentScreen'] = var19;
            var18 = var20.bind(var7)(var18);
            if(!(var1 != var16)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var16 = var24.length;
            var16 = var10 === var16;
            if(var16) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var16 = var17;
case 97:
            var17 = _closure1_slot13;
            var17 = var17.FEATURED_PAGE;
            if(!(var19 !== var17)) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var17 = _closure1_slot13;
            var17 = var17.ORBS;
            if(!(var19 !== var17)) { _fun0006_ip = 99; continue _fun0006 }
case 101:
            if(!(var1 == var19)) { _fun0006_ip = 102; continue _fun0006 }
case 99:
            if(!var2) { _fun0006_ip = 102; continue _fun0006 }
case 103:
            var18 = _closure1_slot17;
            var17 = _closure1_slot5;
            var2 = {};
            var20 = var8.spinner;
            var2['style'] = var20;
            var20 = 'large';
            var2['size'] = var20;
            var2 = var18.bind(var7)(var17, var2);
            _fun0006_ip = 104; continue _fun0006;
case 102:
            if(!var16) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            if(var14) { _fun0006_ip = 107; continue _fun0006 }
case 108:
            if(var15) { _fun0006_ip = 107; continue _fun0006 }
case 105:
            var5 = var5 > var10;
            if(!var5) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var5 = var13 === var14;
case 109:
            if(!var5) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var6 = var6.size;
            var5 = var10 === var6;
case 111:
            if(!var5) { _fun0006_ip = 113; continue _fun0006 }
case 114:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 37;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop loaded empty categories';
            var5 = var6.bind(var10)(var5);
case 113:
            if(!(var1 !== var11)) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 37;
            var5 = var10[var5];
            var10 = var6.bind(var7)(var5);
            var6 = var10.captureMessage;
            var5 = 'collectibles mobile shop failed to fetch google sku ids: ';
            var5 = var5 + var11;
            var5 = var6.bind(var10)(var5);
case 115:
            var6 = _closure1_slot17;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = var18[var3];
            var3 = var16.bind(var7)(var3);
            var5 = var3.AnalyticsLocationProvider;
            var3 = {};
            var3['value'] = var9;
            var11 = _closure1_slot18;
            var9 = 38;
            var9 = var18[var9];
            var9 = var16.bind(var7)(var9);
            var10 = var9.CollectiblesAnalyticsProvider;
            var9 = {};
            var9['newValue'] = var12;
            var14 = _closure1_slot17;
            var13 = _closure1_slot6;
            var12 = {};
            var15 = var8.rootContainer;
            var12['style'] = var15;
            var17 = _closure1_slot17;
            var15 = 39;
            var15 = var18[var15];
            var15 = var16.bind(var7)(var15);
            var16 = var15.NativePaymentContextProvider;
            var15 = {};
            var18 = new Array(0);
            var15['skuIDs'] = var18;
            var15['activeSubscription'] = var1;
            var18 = _closure1_slot13;
            var18 = var18.SHOP_ALL;
            if(!(var19 !== var18)) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var18 = _closure1_slot13;
            var18 = var18.ORBS;
            if(!(var19 !== var18)) { _fun0006_ip = 119; continue _fun0006 }
case 120:
            var20 = _closure1_slot17;
            var19 = _closure1_slot0;
            var32 = _closure1_slot2;
            var18 = 42;
            var18 = var32[var18];
            var18 = var19.bind(var7)(var18);
            var19 = var18.CollectiblesCoachmarkScrollDismissProvider;
            var18 = {};
            var30 = _closure1_slot17;
            var29 = _closure1_slot1;
            var21 = 40;
            var21 = var32[var21];
            var29 = var29.bind(var7)(var21);
            var21 = {};
            var21['data'] = var27;
            var21['renderItem'] = var31;
            var21['getItemType'] = var25;
            var21 = var30.bind(var7)(var29, var21);
            var18['children'] = var21;
            var18 = var20.bind(var7)(var19, var18);
            _fun0006_ip = 121; continue _fun0006;
case 119:
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var29 = _closure1_slot2;
            var19 = 41;
            var19 = var29[var19];
            var20 = var20.bind(var7)(var19);
            var19 = {};
            var19['shopBlocks'] = var27;
            var29 = var1 != var28;
            var27 = null;
            if(!var29) { _fun0006_ip = 122; continue _fun0006 }
case 123:
            var27 = var28;
case 122:
            var19['fetchShopHomeError'] = var27;
            var19['onRenderFirstOrbsItem'] = var26;
            var19['getItemType'] = var25;
            var18 = var21.bind(var7)(var20, var19);
case 121:
            _fun0006_ip = 124; continue _fun0006;
case 117:
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var25 = _closure1_slot2;
            var19 = 40;
            var19 = var25[var19];
            var20 = var20.bind(var7)(var19);
            var19 = {};
            var19['data'] = var24;
            var19['renderItem'] = var22;
            var24 = var1 != var23;
            var22 = undefined;
            if(!var24) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var22 = var23;
case 125:
            var19['initialScrollIndex'] = var22;
            var18 = var21.bind(var7)(var20, var19);
case 124:
            var15['children'] = var18;
            var15 = var17.bind(var7)(var16, var15);
            var12['children'] = var15;
            var13 = var14.bind(var7)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot17;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 43;
            var13 = var16[var13];
            var14 = var14.bind(var7)(var13);
            var13 = {};
            var13 = var15.bind(var7)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var7)(var10, var9);
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0006_ip = 127; continue _fun0006;
case 107:
            var6 = _closure1_slot17;
            var5 = _closure1_slot5;
            var4 = {};
            var8 = var8.spinner;
            var4['style'] = var8;
            var8 = 'large';
            var4['size'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 127:
            var2 = var3;
case 104:
            return var2;
case 95:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['CollectiblesShopV2'] = var2;
    return var1;
})();