// app/modules/collectibles/CollectiblesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var22 = dependencyMap;
    var _closure1_slot0 = var21;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var22;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var2 = 0;
    var4 = var22[var2];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.addDebugLog;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.CollectiblesCategoriesRecord;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.CollectiblesMarketingsRecord;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var22[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.CollectiblesShopHomeRecord;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var6 = var4.Endpoints;
    var _closure1_slot16 = var6;
    var6 = var4.Routes;
    var4 = var4.UserSettingsSections;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var4 = 15;
    var4 = var22[var4];
    var4 = var21.bind(var1)(var4);
    var _closure1_slot18 = var2;
    var18 = function openCollectiblesShop(arg1) {
        var3 = arg1;
        var1 = var3.tab;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['tab'] = var1;
        var6 = {};
        var5 = var3;
        var4 = var2;
        var3 = copyDataProperties(var6, var5, var4);
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var17 = function openCollectiblesShopMobile(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)(var6);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.getRootNavigationRef;
            var4 = var2.bind(var3)();
            var8 = null;
            if(!(var8 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 28:
            var2 = var4.isReady;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var6.screen;
            if(!(var8 == var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = var6.initialProductSkuId;
            if(!(var8 == var2)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = _closure1_slot15;
            var2 = var2.FEATURED_PAGE;
            _fun0004_ip = 42; continue _fun0004;
case 40:
            var5 = _closure1_slot15;
            var2 = var5.SHOP_ALL;
case 42:
            var3 = var2;
case 38:
            var2 = var4.getCurrentRoute;
            var5 = var2.bind(var4)();
            var9 = var8 == var5;
            var2 = undefined;
            if(var9) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var5 = var5.params;
            var9 = var8 == var5;
            var2 = undefined;
            if(var9) { _fun0004_ip = 43; continue _fun0004 }
case 45:
            var2 = var5.screen;
case 43:
            if(!(var2 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 46:
            var5 = {};
            var2 = _closure1_slot17;
            var2 = var2.COLLECTIBLES_SHOP;
            var5['screen'] = var2;
            var2 = {};
            var9 = var6.analyticsSource;
            var2['analyticsSource'] = var9;
            var2['screen'] = var3;
            var6 = var6.onNavigateAway;
            var2['onNavigateAway'] = var6;
            var5['params'] = var2;
            var2 = _closure1_slot20;
            var9 = var2.bind(var1)(var4, var3);
            var3 = var4.navigate;
            var2 = {};
            var6 = 'settings';
            var2['name'] = var6;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var6 = var9.key;
case 47:
            if(!(var8 == var6)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var8 = _closure1_slot18;
            var8 = var8 + 1;
            _closure1_slot18 = var8;
            var7 = 'collectibles-shop-';
            var6 = var7 + var8;
case 49:
            var2['key'] = var6;
            var2['params'] = var5;
            var2 = var3.bind(var4)(var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot19 = var17;
    var2 = function findExistingCollectiblesShopRoute(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = var2.getRootState;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var2)) { _fun0005_ip = 35; continue _fun0005 }
case 34:
            var4 = var2.routes;
            if(!var4) { _fun0005_ip = 35; continue _fun0005 }
case 51:
            var4 = function isCollectiblesShopRoute(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.name;
                    var1 = 'settings';
                    var1 = var1 === var2;
                    if(!var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var2 = var4.params;
                    var3 = null;
                    var5 = var3 == var2;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var3 = var2.screen;
case 54:
                    var2 = _closure1_slot17;
                    var2 = var2.COLLECTIBLES_SHOP;
                    var1 = var3 === var2;
case 52:
                    if(!var1) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var2 = _closure2_slot0;
                    var6 = null;
                    var2 = var6 == var2;
                    if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var5 = var4.params;
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0006_ip = 42; continue _fun0006 }
case 60:
                    var5 = var5.params;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0006_ip = 42; continue _fun0006 }
case 61:
                    var4 = var5.screen;
case 42:
                    var3 = _closure2_slot0;
                    var2 = var4 === var3;
case 58:
                    var1 = var2;
case 56:
                    return var1;
                }
            };
            var _closure2_slot1 = var4;
            var4 = function searchRoutes(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot24;
                    var9 = undefined;
                    var1 = arg1;
                    var8 = var2.bind(var9)(var1);
                    var3 = var8.bind(var9)();
                    var2 = var3.done;
                    var1 = null;
                    var6 = var3;
                    var5 = undefined;
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var2 = var6.value;
                    var3 = _closure2_slot1;
                    var3 = var3.bind(var9)(var2);
                    if(var3) { _fun0007_ip = 64; continue _fun0007 }
case 28:
                    var3 = var2.state;
                    var10 = var5;
                    if(!(var1 != var3)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var3 = var3.routes;
                    var10 = var5;
                    if(!var3) { _fun0007_ip = 65; continue _fun0007 }
case 67:
                    var4 = _closure2_slot2;
                    var3 = var2.state;
                    var3 = var3.routes;
                    var3 = var4.bind(var9)(var3);
                    var10 = var3;
                    if(var10) { _fun0007_ip = 68; continue _fun0007 }
case 65:
                    var11 = var8.bind(var9)();
                    var4 = var11.done;
                    var5 = var10;
                    var6 = var11;
                    if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 69:
                    _fun0007_ip = 63; continue _fun0007;
case 68:
                    return var3;
case 64:
                    return var2;
case 62:
                    return var1;
                }
            };
            var _closure2_slot2 = var4;
            var3 = var2.routes;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
case 35:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var16 = function dispatchOpenCollectiblesShop(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'COLLECTIBLES_SHOP_OPEN';
        var2['type'] = var5;
        var6 = arg1;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot21 = var16;
    var15 = function closeCollectiblesShop() {
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 17;
        var3 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var3);
        var5 = var6.dispatch;
        var3 = {};
        var7 = 'COLLECTIBLES_SHOP_CLOSE';
        var3['type'] = var7;
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot0;
        var2 = 18;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.popLayer;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2 = function areOptionalBooleansEqual(arg1, arg2) {
        var1 = global;
        var3 = var1.Boolean;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var3 = var1.Boolean;
        var1 = arg2;
        var1 = var3.bind(var4)(var1);
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot22 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var14 = var13;
                    var11 = arg2;
                    var16 = arg3;
                    var2 = undefined;
                    var10 = undefined;
                    var5 = undefined;
                    var12 = undefined;
                    var3 = undefined;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 17;
                    var6 = var6[var8];
                    var9 = var7.bind(var2)(var6);
                    var7 = var9.dispatch;
                    var6 = {};
                    var15 = 'COLLECTIBLES_CATEGORIES_FETCH';
                    var6['type'] = var15;
                    var15 = null;
                    if(!(var15 == var13)) { _fun0008_ip = 39; continue _fun0008 }
case 59:
                    var13 = {};
                    _fun0008_ip = 72; continue _fun0008;
case 39:
                    var13 = var14;
case 72:
                    var6['options'] = var13;
                    var6 = var7.bind(var9)(var6);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 19;
                    var6 = var9[var6];
                    var9 = var7.bind(var2)(var6);
                    var7 = var9.buildFetchCollectiblesOptionsQuery;
                    var6 = var14;
                    var10 = var7.bind(var9)(var6);
                    var13 = _closure1_slot4;
                    var9 = var13.get;
                    var7 = 'shop_show_debug_overlay';
                    var5 = var9.bind(var13)(var7);
                    var6 = var15 != var6;
                    if(!var6) { _fun0008_ip = 46; continue _fun0008 }
case 73:
                    var7 = var14;
                    var6 = var7.logPerf;
case 46:
                    if(!var6) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var18 = 20;
                    var6 = var6[var18];
                    var9 = var7.bind(var2)(var6);
                    var7 = var9.trackShopPerf;
                    var6 = {};
                    var13 = var16;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var17 = var16;
                    var13 = var17.sessionId;
case 76:
                    var6['sessionId'] = var13;
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var17.bind(var2)(var13);
                    var13 = var13.CollectiblesShopPerfCheckpoint;
                    var13 = var13.CATEGORIES_FETCH_STARTED;
                    var6['checkpoint'] = var13;
                    var13 = var16;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 78; continue _fun0008 }
case 12:
                    var17 = var16;
                    var13 = var17.tab;
case 78:
                    var6['tab'] = var13;
                    var13 = var14;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 79; continue _fun0008 }
case 80:
                    var17 = var14;
                    var13 = var17.includeUnpublished;
case 79:
                    var6['unpublishedCategoriesShown'] = var13;
                    var13 = var14;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                    var17 = var14;
                    var13 = var17.noCache;
case 81:
                    var6['cacheDisabled'] = var13;
                    var6 = var7.bind(var9)(var6);
case 74:
                    var6 = var5;
                    if(!var6) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                    var7 = _closure1_slot7;
                    var6 = global;
                    var18 = var6.JSON;
                    var17 = var18.stringify;
                    var13 = var10;
                    var9 = 2;
                    var13 = var17.bind(var18)(var13, var15, var9);
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'fetchCollectiblesCategories started: ';
                    var6 = var9.bind(var6)(var13);
                    var6 = var7.bind(var2)(var6);
case 83: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 21;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var9 = var6.HTTP;
                    var7 = var9.get;
                    var6 = {};
                    var13 = _closure1_slot16;
                    var13 = var13.COLLECTIBLES_CATEGORIES_V2;
                    var6['url'] = var13;
                    var6['query'] = var10;
                    var10 = true;
                    var6['rejectWithError'] = var10;
                    var6 = var7.bind(var9)(var6);
                    SaveGenerator(address=471);
case 85:
                    return var6;
case 86:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                    var12 = var6;
                    var9 = var14;
                    var9 = var15 != var9;
                    var7 = var9;
                    if(!var9) { _fun0008_ip = 89; continue _fun0008 }
case 90:
                    var9 = var14;
                    var7 = var9.logPerf;
case 89:
                    if(!var7) { _fun0008_ip = 91; continue _fun0008 }
case 92:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var18 = 20;
                    var7 = var7[var18];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.trackShopPerf;
                    var7 = {};
                    var13 = var16;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 93; continue _fun0008 }
case 94:
                    var17 = var16;
                    var13 = var17.sessionId;
case 93:
                    var7['sessionId'] = var13;
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var17.bind(var2)(var13);
                    var13 = var13.CollectiblesShopPerfCheckpoint;
                    var13 = var13.CATEGORIES_FETCH_COMPLETED;
                    var7['checkpoint'] = var13;
                    var13 = var16;
                    var17 = var15 == var13;
                    var13 = undefined;
                    if(var17) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                    var13 = var16.tab;
case 95:
                    var7['tab'] = var13;
                    var13 = var14;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                    var16 = var14;
                    var13 = var16.includeUnpublished;
case 97:
                    var7['unpublishedCategoriesShown'] = var13;
                    var13 = var14;
                    var15 = var15 == var13;
                    var13 = undefined;
                    if(var15) { _fun0008_ip = 99; continue _fun0008 }
case 100:
                    var13 = var14.noCache;
case 99:
                    var7['cacheDisabled'] = var13;
                    var7 = var9.bind(var10)(var7);
case 91:
                    var7 = var5;
                    if(!var7) { _fun0008_ip = 101; continue _fun0008 }
case 102:
                    var9 = _closure1_slot7;
                    var7 = var12;
                    var7 = var7.body;
                    var7 = var7.categories;
                    var14 = var7.length;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var13 = var7.concat;
                    var10 = 'fetchCollectiblesCategories completed ';
                    var7 = ' categories';
                    var7 = var13.bind(var10)(var14, var7);
                    var7 = var9.bind(var2)(var7);
case 101:
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var8];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.dispatch;
                    var7 = {};
                    var13 = 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS';
                    var7['type'] = var13;
                    var14 = _closure1_slot10;
                    var13 = var14.fromServer;
                    var12 = var12.body;
                    var12 = var13.bind(var14)(var12);
                    var7['categories'] = var12;
                    var7['noOp'] = var11;
                    var7 = var9.bind(var10)(var7);
case 103: // try_end0
                    _fun0008_ip = 104; continue _fun0008;
case 87:
                    return var6;
case 105: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = 22;
                    var7 = var6[var7];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.APIError;
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {constructor: {value: var7}});
                    var22 = var9;
                    var21 = var11;
                    var7 = new var22[var7](var21, var20);
                    var9 = var7 instanceof Object ? var7 : var9;
                    var3 = var9;
                    var7 = 23;
                    var7 = var6[var7];
                    var10 = var10.bind(var2)(var7);
                    var7 = var10.captureOrIgnoreApiError;
                    var7 = var7.bind(var10)(var9);
                    var7 = _closure1_slot1;
                    var6 = var6[var8];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE';
                    var6['type'] = var10;
                    var6['error'] = var9;
                    var6 = var7.bind(var8)(var6);
                    if(!var5) { _fun0008_ip = 104; continue _fun0008 }
case 106:
                    var4 = _closure1_slot7;
                    var6 = var3.message;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var3 = 'fetchCollectiblesCategories failed: ';
                    var3 = var5.bind(var3)(var6);
                    var3 = var4.bind(var2)(var3);
case 104:
                    return var2;
case 70:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var14 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 96; continue _fun0009 }
case 107:
                    var2 = undefined;
                    var5 = undefined;
                    var7 = undefined;
                    var11 = undefined;
                    var3 = undefined;
                    var6 = _closure1_slot8;
                    var6 = var6.isFetching;
                    if(var6) { _fun0009_ip = 108; continue _fun0009 }
case 63:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 17;
                    var8 = var8[var6];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'COLLECTIBLES_PURCHASES_FETCH';
                    var8['type'] = var12;
                    var8 = var9.bind(var10)(var8);
                    var10 = _closure1_slot4;
                    var9 = var10.get;
                    var8 = 'shop_show_debug_overlay';
                    var8 = var9.bind(var10)(var8);
                    var5 = var8;
                    if(!var8) { _fun0009_ip = 58; continue _fun0009 }
case 109:
                    var9 = _closure1_slot7;
                    var8 = 'fetchCollectiblesPurchases started';
                    var8 = var9.bind(var2)(var8);
case 58: // try_start_0
                    var8 = {};
                    var9 = _closure1_slot16;
                    var9 = var9.COLLECTIBLES_PURCHASES;
                    var8['url'] = var9;
                    var9 = true;
                    var8['rejectWithError'] = var9;
                    var9 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 24;
                    var10 = var13[var10];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.ShopVariantsReturnStyle;
                    var10 = var10.VARIANTS_GROUP;
                    var9['variants_return_style'] = var10;
                    var8['query'] = var9;
                    var7 = var8;
                    var8 = var5;
                    if(!var8) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var9 = _closure1_slot7;
                    var8 = global;
                    var15 = var8.JSON;
                    var14 = var15.stringify;
                    var13 = var7;
                    var12 = null;
                    var10 = 2;
                    var12 = var14.bind(var15)(var13, var12, var10);
                    var8 = var8.HermesInternal;
                    var10 = var8.concat;
                    var8 = 'fetchCollectiblesPurchases request: ';
                    var8 = var10.bind(var8)(var12);
                    var8 = var9.bind(var2)(var8);
case 110:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 21;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var9 = var8.HTTP;
                    var8 = var9.get;
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=296);
case 36:
                    return var7;
case 80:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0009_ip = 112; continue _fun0009 }
case 79:
                    var11 = var7;
                    var8 = var5;
                    if(!var8) { _fun0009_ip = 113; continue _fun0009 }
case 114:
                    var9 = _closure1_slot7;
                    var8 = var11;
                    var8 = var8.body;
                    var13 = var8.length;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var12 = var8.concat;
                    var10 = 'fetchCollectiblesPurchases completed with ';
                    var8 = ' purchases';
                    var8 = var12.bind(var10)(var13, var8);
                    var8 = var9.bind(var2)(var8);
case 113:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var12 = 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS';
                    var8['type'] = var12;
                    var13 = var11.body;
                    var12 = var13.map;
                    var11 = _closure1_slot13;
                    var11 = var11.fromServer;
                    var11 = var12.bind(var13)(var11);
                    var8['purchases'] = var11;
                    var8 = var9.bind(var10)(var8);
case 115: // try_end0
                    _fun0009_ip = 108; continue _fun0009;
case 112:
                    return var7;
case 116: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 22;
                    var7 = var10[var7];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.APIError;
                    var9 = var7.prototype;
                    var9 = Object.create(var9, {constructor: {value: var7}});
                    var19 = var9;
                    var18 = var11;
                    var7 = new var19[var7](var18, var17);
                    var9 = var7 instanceof Object ? var7 : var9;
                    var3 = var9;
                    var7 = 23;
                    var7 = var10[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.captureOrIgnoreApiError;
                    var7 = var7.bind(var8)(var9);
                    if(!var5) { _fun0009_ip = 117; continue _fun0009 }
case 118:
                    var7 = _closure1_slot7;
                    var5 = var3;
                    var9 = var5.message;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var8 = var5.concat;
                    var5 = 'fetchCollectiblesPurchases failed: ';
                    var5 = var8.bind(var5)(var9);
                    var5 = var7.bind(var2)(var5);
case 117:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'COLLECTIBLES_PURCHASES_FETCH_FAILURE';
                    var4['type'] = var7;
                    var4['error'] = var3;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 108:
                    return var2;
case 96:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var13 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 119; continue _fun0010 }
case 71:
                    var7 = var11;
                    var8 = arg2;
                    var2 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 17;
                    var3 = var3[var5];
                    var10 = var6.bind(var2)(var3);
                    var6 = var10.dispatch;
                    var3 = {};
                    var12 = 'COLLECTIBLES_PRODUCT_FETCH';
                    var3['type'] = var12;
                    var3['skuId'] = var11;
                    var3 = var6.bind(var10)(var3);
case 120: // try_start_0
                    var3 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.locale;
                    var3['locale'] = var6;
                    var9 = var3;
                    var3 = var8;
                    var10 = null;
                    var6 = var10 == var3;
                    var3 = undefined;
                    if(var6) { _fun0010_ip = 121; continue _fun0010 }
case 109:
                    var6 = var8;
                    var3 = var6.countryCode;
case 121:
                    if(!(var10 !== var3)) { _fun0010_ip = 122; continue _fun0010 }
case 123:
                    var6 = var9;
                    var3 = var8;
                    var11 = var10 == var3;
                    var3 = undefined;
                    if(var11) { _fun0010_ip = 124; continue _fun0010 }
case 125:
                    var11 = var8;
                    var3 = var11.countryCode;
case 124:
                    var6['country_code'] = var3;
case 122:
                    var3 = var8;
                    var6 = var10 == var3;
                    var3 = undefined;
                    if(var6) { _fun0010_ip = 126; continue _fun0010 }
case 127:
                    var6 = var8;
                    var3 = var6.paymentGateway;
case 126:
                    if(!(var10 !== var3)) { _fun0010_ip = 22; continue _fun0010 }
case 128:
                    var6 = var9;
                    var3 = var8;
                    var11 = var10 == var3;
                    var3 = undefined;
                    if(var11) { _fun0010_ip = 129; continue _fun0010 }
case 130:
                    var11 = var8;
                    var3 = var11.paymentGateway;
case 129:
                    var6['payment_gateway'] = var3;
case 22:
                    var3 = var8;
                    var6 = var10 == var3;
                    var3 = undefined;
                    if(var6) { _fun0010_ip = 131; continue _fun0010 }
case 132:
                    var6 = var8;
                    var3 = var6.includeBundles;
case 131:
                    if(!(var10 !== var3)) { _fun0010_ip = 110; continue _fun0010 }
case 133:
                    var6 = var9;
                    var3 = var8;
                    var10 = var10 == var3;
                    var3 = undefined;
                    if(var10) { _fun0010_ip = 134; continue _fun0010 }
case 135:
                    var3 = var8.includeBundles;
case 134:
                    var6['include_bundles'] = var3;
case 110:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 21;
                    var3 = var8[var3];
                    var3 = var6.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var6 = var8.get;
                    var3 = {};
                    var12 = _closure1_slot16;
                    var11 = var12.COLLECTIBLES_PRODUCTS;
                    var10 = var7;
                    var10 = var11.bind(var12)(var10);
                    var3['url'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3['query'] = var9;
                    var3 = var6.bind(var8)(var3);
                    SaveGenerator(address=331);
case 136:
                    return var3;
case 81:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 137; continue _fun0010 }
case 138:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var10 = 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var10 = var7;
                    var6['skuId'] = var10;
                    var12 = _closure1_slot12;
                    var11 = var12.fromServer;
                    var10 = var3.body;
                    var10 = var11.bind(var12)(var10);
                    var6['product'] = var10;
                    var6 = var8.bind(var9)(var6);
case 139: // try_end0
                    _fun0010_ip = 140; continue _fun0010;
case 137:
                    return var3;
case 141: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 22;
                    var6 = var3[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.APIError;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var14 = var8;
                    var13 = var10;
                    var6 = new var14[var6](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var8 = 23;
                    var8 = var3[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.captureOrIgnoreApiError;
                    var8 = var8.bind(var9)(var6);
                    var4 = _closure1_slot1;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'COLLECTIBLES_PRODUCT_FETCH_FAILURE';
                    var3['type'] = var8;
                    var3['skuId'] = var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 140:
                    return var2;
case 119:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var12 = var2.bind(var1)();
    var _closure1_slot23 = var12;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 142; continue _fun0011 }
case 107:
                    var4 = _closure1_slot6;
                    var3 = var4.isFetchingProduct;
                    var3 = var3.bind(var4)(var5);
                    if(var3) { _fun0011_ip = 52; continue _fun0011 }
case 143:
                    var4 = _closure1_slot23;
                    var3 = undefined;
                    var2 = arg2;
                    var2 = var4.bind(var3)(var5, var2);
                    SaveGenerator(address=50);
case 144:
                    return var2;
case 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0011_ip = 52; continue _fun0011 }
case 28:
                    return var2;
case 52:
                    var2 = undefined;
                    return var2;
case 142:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var11 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 146; continue _fun0012 }
case 71:
                    var6 = var9;
                    var5 = undefined;
                    var11 = undefined;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 17;
                    var2 = var2[var7];
                    var8 = var3.bind(var5)(var2);
                    var3 = var8.dispatch;
                    var2 = {};
                    var10 = 'COLLECTIBLES_CLAIM';
                    var2['type'] = var10;
                    var2['skuId'] = var9;
                    var2 = var3.bind(var8)(var2);
case 66: // try_start_0
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 21;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var3 = var8.put;
                    var2 = {};
                    var9 = _closure1_slot16;
                    var9 = var9.COLLECTIBLES_CLAIM;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = var6;
                    var9['sku_id'] = var10;
                    var2['body'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var3.bind(var8)(var2);
                    SaveGenerator(address=144);
case 147:
                    return var2;
case 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 135; continue _fun0012 }
case 122:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var9 = var8.bind(var5)(var3);
                    var8 = var9.dispatch;
                    var3 = {};
                    var10 = 'COLLECTIBLES_CLAIM_SUCCESS';
                    var3['type'] = var10;
                    var10 = var6;
                    var3['skuId'] = var10;
                    var12 = var2.body;
                    var11 = var12;
                    var10 = null;
                    var12 = var10 == var12;
                    var10 = undefined;
                    if(var12) { _fun0012_ip = 148; continue _fun0012 }
case 149:
                    var13 = var11;
                    var12 = var13.map;
                    var11 = _closure1_slot13;
                    var11 = var11.fromServer;
                    var10 = var12.bind(var13)(var11);
case 148:
                    var3['purchases'] = var10;
                    var3 = var8.bind(var9)(var3);
case 150: // try_end0
                    return var5;
case 135:
                    return var2;
case 151: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var2 = var3[var2];
                    var2 = var8.bind(var5)(var2);
                    var2 = var2.APIError;
                    var8 = var2.prototype;
                    var8 = Object.create(var8, {constructor: {value: var2}});
                    var15 = var8;
                    var14 = var9;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var8;
                    var4 = _closure1_slot1;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'COLLECTIBLES_CLAIM_FAILURE';
                    var3['type'] = var7;
                    var3['skuId'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 146:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var10 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 152; continue _fun0013 }
case 107:
                    var6 = arg1;
                    var7 = arg2;
case 153: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot16;
                    var5 = var5.COLLECTIBLES_VALID_GIFT_RECIPIENT;
                    var2['url'] = var5;
                    var5 = {};
                    var5['sku_id'] = var7;
                    var5['recipient_id'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=99);
case 154:
                    return var2;
case 155:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 156; continue _fun0013 }
case 157:
                    var3 = var2.body;
                    var3 = var3.valid;
case 121: // try_end0
                    return var3;
case 156:
                    return var2;
case 58: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 23;
                    var2 = var8[var2];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var2);
                    var3 = var4.captureOrIgnoreApiError;
                    var2 = 22;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.APIError;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {constructor: {value: var2}});
                    var10 = var5;
                    var9 = var6;
                    var2 = new var10[var2](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
case 152:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var9 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 158; continue _fun0014 }
case 107:
                    var6 = arg1;
                    var7 = arg2;
case 153: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot16;
                    var5 = var5.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH;
                    var2['url'] = var5;
                    var5 = {};
                    var5['sku_ids'] = var7;
                    var5['recipient_id'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=99);
case 154:
                    return var2;
case 155:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 159; continue _fun0014 }
case 157:
                    var3 = var2.body;
case 13: // try_end0
                    return var3;
case 159:
                    return var2;
case 121: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 23;
                    var2 = var8[var2];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var2);
                    var3 = var4.captureOrIgnoreApiError;
                    var2 = 22;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.APIError;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {constructor: {value: var2}});
                    var10 = var5;
                    var9 = var6;
                    var2 = new var10[var2](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = {};
                    return var2;
case 158:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var8 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 160; continue _fun0015 }
case 107:
                    var2 = arg1;
                    var7 = var2.release;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0015_ip = 161; continue _fun0015 }
case 162:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 25;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesMarketingReleaseType;
                    var7 = var2.PROD;
case 161:
                    var9 = undefined;
                    SaveGenerator(address=66);
case 142:
                    return var3;
case 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 164; continue _fun0015 }
case 165:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 17;
                    var4 = var10[var6];
                    var11 = var8.bind(var3)(var4);
                    var8 = var11.dispatch;
                    var4 = {};
                    var12 = 'COLLECTIBLES_MARKETING_FETCH';
                    var4['type'] = var12;
                    var4 = var8.bind(var11)(var4);
                    var4 = {};
                    var8 = _closure1_slot0;
                    var11 = 26;
                    var11 = var10[var11];
                    var11 = var8.bind(var3)(var11);
                    var11 = var11.CollectiblesMarketingPlatform;
                    var11 = var11.MOBILE;
                    var4['platform'] = var11;
                    var9 = var4;
                    var4 = 25;
                    var4 = var10[var4];
                    var4 = var8.bind(var3)(var4);
                    var4 = var4.CollectiblesMarketingReleaseType;
                    var4 = var4.PROD;
                    if(!(var7 !== var4)) { _fun0015_ip = 20; continue _fun0015 }
case 166:
                    var4 = var9;
                    var4['release'] = var7;
case 20: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 21;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var10 = _closure1_slot16;
                    var10 = var10.COLLECTIBLES_MARKETING;
                    var4['url'] = var10;
                    var4['query'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=261);
case 50:
                    return var4;
case 167:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0015_ip = 168; continue _fun0015 }
case 169:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'COLLECTIBLES_MARKETING_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var12 = _closure1_slot11;
                    var11 = var12.fromServer;
                    var10 = var4.body;
                    var10 = var11.bind(var12)(var10);
                    var7['marketings'] = var10;
                    var7 = var8.bind(var9)(var7);
case 81: // try_end0
                    _fun0015_ip = 170; continue _fun0015;
case 168:
                    return var4;
case 171: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 23;
                    var7 = var4[var7];
                    var9 = var10.bind(var3)(var7);
                    var8 = var9.captureOrIgnoreApiError;
                    var7 = 22;
                    var7 = var4[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.APIError;
                    var10 = var7.prototype;
                    var10 = Object.create(var10, {constructor: {value: var7}});
                    var14 = var10;
                    var13 = var11;
                    var7 = new var14[var7](var13, var12);
                    var7 = var7 instanceof Object ? var7 : var10;
                    var7 = var8.bind(var9)(var7);
                    var5 = _closure1_slot1;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'COLLECTIBLES_MARKETING_FETCH_FAILURE';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
case 170:
                    return var3;
case 164:
                    return var2;
case 160:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var7 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 172; continue _fun0016 }
case 153:
                    var7 = var13;
                    var12 = var11;
                    var14 = arg3;
                    var2 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 17;
                    var3 = var3[var5];
                    var8 = var6.bind(var2)(var3);
                    var6 = var8.dispatch;
                    var3 = {};
                    var15 = 'COLLECTIBLES_SHOP_HOME_FETCH';
                    var3['type'] = var15;
                    var3['tab'] = var13;
                    var13 = null;
                    if(!(var13 == var11)) { _fun0016_ip = 9; continue _fun0016 }
case 39:
                    var11 = {};
                    _fun0016_ip = 173; continue _fun0016;
case 9:
                    var11 = var12;
case 173:
                    var3['options'] = var11;
                    var3 = var6.bind(var8)(var3);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 19;
                    var3 = var8[var3];
                    var11 = var6.bind(var2)(var3);
                    var8 = var11.buildFetchCollectiblesOptionsQuery;
                    var3 = var12;
                    var6 = var7;
                    var9 = var8.bind(var11)(var3, var6);
                    var3 = var13 != var3;
                    if(!var3) { _fun0016_ip = 174; continue _fun0016 }
case 175:
                    var6 = var12;
                    var3 = var6.logPerf;
case 174:
                    if(!var3) { _fun0016_ip = 136; continue _fun0016 }
case 15:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var16 = 20;
                    var3 = var3[var16];
                    var8 = var6.bind(var2)(var3);
                    var6 = var8.trackShopPerf;
                    var3 = {};
                    var11 = var14;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 176; continue _fun0016 }
case 177:
                    var15 = var14;
                    var11 = var15.sessionId;
case 176:
                    var3['sessionId'] = var11;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var16];
                    var11 = var15.bind(var2)(var11);
                    var11 = var11.CollectiblesShopPerfCheckpoint;
                    var11 = var11.SHOP_HOME_FETCH_STARTED;
                    var3['checkpoint'] = var11;
                    var11 = var14;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 169; continue _fun0016 }
case 178:
                    var15 = var14;
                    var11 = var15.tab;
case 169:
                    var3['tab'] = var11;
                    var11 = var12;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 179; continue _fun0016 }
case 180:
                    var15 = var12;
                    var11 = var15.includeUnpublished;
case 179:
                    var3['unpublishedCategoriesShown'] = var11;
                    var11 = var12;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 181; continue _fun0016 }
case 182:
                    var15 = var12;
                    var11 = var15.noCache;
case 181:
                    var3['cacheDisabled'] = var11;
                    var3 = var6.bind(var8)(var3);
case 136: // try_start_0
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 21;
                    var3 = var8[var3];
                    var3 = var6.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var6 = var8.get;
                    var3 = {};
                    var11 = _closure1_slot16;
                    var11 = var11.COLLECTIBLES_SHOP;
                    var3['url'] = var11;
                    var3['query'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var8)(var3);
                    SaveGenerator(address=395);
case 183:
                    return var3;
case 184:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                    var10 = var3;
                    var8 = var12;
                    var8 = var13 != var8;
                    var6 = var8;
                    if(!var8) { _fun0016_ip = 187; continue _fun0016 }
case 188:
                    var8 = var12;
                    var6 = var8.logPerf;
case 187:
                    if(!var6) { _fun0016_ip = 189; continue _fun0016 }
case 190:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var16 = 20;
                    var6 = var6[var16];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.trackShopPerf;
                    var6 = {};
                    var11 = var14;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 191; continue _fun0016 }
case 192:
                    var15 = var14;
                    var11 = var15.sessionId;
case 191:
                    var6['sessionId'] = var11;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var16];
                    var11 = var15.bind(var2)(var11);
                    var11 = var11.CollectiblesShopPerfCheckpoint;
                    var11 = var11.SHOP_HOME_FETCH_COMPLETED;
                    var6['checkpoint'] = var11;
                    var11 = var14;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0016_ip = 193; continue _fun0016 }
case 194:
                    var11 = var14.tab;
case 193:
                    var6['tab'] = var11;
                    var11 = var12;
                    var14 = var13 == var11;
                    var11 = undefined;
                    if(var14) { _fun0016_ip = 195; continue _fun0016 }
case 196:
                    var14 = var12;
                    var11 = var14.includeUnpublished;
case 195:
                    var6['unpublishedCategoriesShown'] = var11;
                    var11 = var12;
                    var13 = var13 == var11;
                    var11 = undefined;
                    if(var13) { _fun0016_ip = 197; continue _fun0016 }
case 198:
                    var11 = var12.noCache;
case 197:
                    var6['cacheDisabled'] = var11;
                    var6 = var8.bind(var9)(var6);
case 189:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var11 = 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS';
                    var6['type'] = var11;
                    var11 = var7;
                    var6['tab'] = var11;
                    var12 = _closure1_slot14;
                    var11 = var12.fromServer;
                    var10 = var10.body;
                    var10 = var11.bind(var12)(var10);
                    var6['shopHome'] = var10;
                    var6 = var8.bind(var9)(var6);
case 199: // try_end0
                    _fun0016_ip = 200; continue _fun0016;
case 185:
                    return var3;
case 201: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 22;
                    var6 = var3[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.APIError;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var19 = var8;
                    var18 = var10;
                    var6 = new var19[var6](var18, var17);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var8 = 23;
                    var8 = var3[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.captureOrIgnoreApiError;
                    var8 = var8.bind(var9)(var6);
                    var4 = _closure1_slot1;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE';
                    var3['type'] = var8;
                    var3['tab'] = var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 200:
                    return var2;
case 172:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 146; continue _fun0017 }
case 71:
                    var10 = arg1;
                    var6 = var9;
                    var5 = undefined;
                    var11 = undefined;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 17;
                    var2 = var2[var7];
                    var8 = var3.bind(var5)(var2);
                    var3 = var8.dispatch;
                    var2 = {};
                    var12 = 'COLLECTIBLES_CLAIM';
                    var2['type'] = var12;
                    var2['skuId'] = var9;
                    var2 = var3.bind(var8)(var2);
case 202: // try_start_0
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 21;
                    var2 = var8[var2];
                    var2 = var3.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var3 = var8.put;
                    var2 = {};
                    var9 = _closure1_slot16;
                    var9 = var9.COLLECTIBLES_CLAIM_CATEGORY_REWARD;
                    var2['url'] = var9;
                    var9 = {};
                    var9['category_id'] = var10;
                    var2['body'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var3.bind(var8)(var2);
                    SaveGenerator(address=144);
case 147:
                    return var2;
case 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 135; continue _fun0017 }
case 122:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var9 = var8.bind(var5)(var3);
                    var8 = var9.dispatch;
                    var3 = {};
                    var10 = 'COLLECTIBLES_CLAIM_SUCCESS';
                    var3['type'] = var10;
                    var10 = var6;
                    var3['skuId'] = var10;
                    var12 = var2.body;
                    var11 = var12;
                    var10 = null;
                    var12 = var10 == var12;
                    var10 = undefined;
                    if(var12) { _fun0017_ip = 148; continue _fun0017 }
case 149:
                    var13 = var11;
                    var12 = var13.map;
                    var11 = _closure1_slot13;
                    var11 = var11.fromServer;
                    var10 = var12.bind(var13)(var11);
case 148:
                    var3['purchases'] = var10;
                    var3 = var8.bind(var9)(var3);
case 150: // try_end0
                    return var5;
case 135:
                    return var2;
case 151: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var2 = var3[var2];
                    var2 = var8.bind(var5)(var2);
                    var2 = var2.APIError;
                    var8 = var2.prototype;
                    var8 = Object.create(var8, {constructor: {value: var2}});
                    var15 = var8;
                    var14 = var9;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var8;
                    var4 = _closure1_slot1;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'COLLECTIBLES_CLAIM_FAILURE';
                    var3['type'] = var7;
                    var3['skuId'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 146:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 170; continue _fun0018 }
case 71:
                    var8 = var2.tab;
                    var10 = var2.abortSignal;
                    var3 = undefined;
                    SaveGenerator(address=31);
case 203:
                    return var3;
case 143:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 116; continue _fun0018 }
case 204:
                    var7 = _closure1_slot9;
                    var6 = var7.isFetchingLayout;
                    var4 = var8;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0018_ip = 112; continue _fun0018 }
case 205:
                    var7 = _closure1_slot9;
                    var6 = var7.getLayoutFetchError;
                    var4 = var8;
                    var4 = var6.bind(var7)(var4);
                    var6 = null;
                    var7 = var6 == var4;
                    var9 = undefined;
                    if(var7) { _fun0018_ip = 157; continue _fun0018 }
case 206:
                    var9 = var4.status;
case 157:
                    var7 = 404;
                    if(!(var7 !== var9)) { _fun0018_ip = 112; continue _fun0018 }
case 207:
                    var7 = var6 == var4;
                    var6 = undefined;
                    if(var7) { _fun0018_ip = 208; continue _fun0018 }
case 209:
                    var6 = var4.status;
case 208:
                    var4 = 429;
                    if(!(var4 !== var6)) { _fun0018_ip = 112; continue _fun0018 }
case 210: // try_start_0
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 17;
                    var4 = var7[var9];
                    var11 = var6.bind(var3)(var4);
                    var6 = var11.dispatch;
                    var4 = {};
                    var12 = 'COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH';
                    var4['type'] = var12;
                    var13 = var8;
                    var4['tab'] = var13;
                    var4 = var6.bind(var11)(var4);
                    var6 = _closure1_slot0;
                    var4 = 21;
                    var4 = var7[var4];
                    var4 = var6.bind(var3)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var12 = _closure1_slot16;
                    var11 = var12.COLLECTIBLES_SHOP_TAB_LAYOUT;
                    var11 = var11.bind(var12)(var13);
                    var4['url'] = var11;
                    var11 = true;
                    var4['rejectWithError'] = var11;
                    var4['signal'] = var10;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=262);
case 211:
                    return var4;
case 212:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 213; continue _fun0018 }
case 214:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var7.bind(var3)(var6);
                    var7 = var9.dispatch;
                    var6 = {};
                    var10 = 'COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var10 = var8;
                    var6['tab'] = var10;
                    var10 = var4.body;
                    var10 = var10.layout_id;
                    var6['layoutId'] = var10;
                    var6 = var7.bind(var9)(var6);
case 168: // try_end0
                    _fun0018_ip = 112; continue _fun0018;
case 213:
                    return var4;
case 215: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 22;
                    var4 = var7[var4];
                    var4 = var6.bind(var3)(var4);
                    var4 = var4.APIError;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var15 = var6;
                    var14 = var9;
                    var4 = new var15[var4](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var6 = _closure1_slot1;
                    var5 = 17;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE';
                    var5['type'] = var9;
                    var5['tab'] = var8;
                    var5['apiError'] = var4;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
case 112:
                    return var3;
case 116:
                    return var2;
case 170:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var19 = {};
    var19['openCollectiblesShop'] = var18;
    var19['closeCollectiblesShop'] = var15;
    var19['fetchCollectiblesPurchases'] = var13;
    var19['fetchCollectiblesProduct'] = var12;
    var19['claimPremiumCollectiblesProduct'] = var10;
    var20 = 27;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/collectibles/CollectiblesActionCreators.tsx';
    var20 = var21.bind(var22)(var20);
    var3['default'] = var19;
    var3['openCollectiblesShop'] = var18;
    var3['openCollectiblesShopMobile'] = var17;
    var17 = function() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getRootNavigationRef;
            var4 = var1.bind(var3)();
            var3 = null;
            var6 = var3 == var4;
            if(var6) { _fun0019_ip = 216; continue _fun0019 }
case 217:
            var1 = var4.isReady;
            var1 = var1.bind(var4)();
            var6 = !var1;
case 216:
            var1 = !var6;
            if(var6) { _fun0019_ip = 218; continue _fun0019 }
case 219:
            var2 = _closure1_slot20;
            var2 = var2.bind(var5)(var4);
            var1 = var3 != var2;
case 218:
            return var1;
        }
    };
    var3['isCollectiblesShopOpen'] = var17;
    var3['dispatchOpenCollectiblesShop'] = var16;
    var3['closeCollectiblesShop'] = var15;
    var15 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'COLLECTIBLES_PRODUCT_DETAILS_OPEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['skuId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['productDetailsOpened'] = var15;
    var15 = function(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var8 = _closure1_slot22;
            var5 = null;
            var1 = var5 == var6;
            var2 = undefined;
            var7 = undefined;
            if(var1) { _fun0020_ip = 220; continue _fun0020 }
case 221:
            var7 = var6.noCache;
case 220:
            var9 = var5 == var4;
            var1 = undefined;
            if(var9) { _fun0020_ip = 222; continue _fun0020 }
case 223:
            var1 = var4.noCache;
case 222:
            var1 = var8.bind(var2)(var7, var1);
            if(!var1) { _fun0020_ip = 11; continue _fun0020 }
case 28:
            var9 = _closure1_slot22;
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0020_ip = 165; continue _fun0020 }
case 205:
            var8 = var6.includeUnpublished;
case 165:
            var10 = var5 == var4;
            var7 = undefined;
            if(var10) { _fun0020_ip = 224; continue _fun0020 }
case 225:
            var7 = var4.includeUnpublished;
case 224:
            var1 = var9.bind(var2)(var8, var7);
case 11:
            if(!var1) { _fun0020_ip = 226; continue _fun0020 }
case 155:
            var9 = _closure1_slot22;
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0020_ip = 207; continue _fun0020 }
case 227:
            var8 = var6.includeBundles;
case 207:
            var10 = var5 == var4;
            var7 = undefined;
            if(var10) { _fun0020_ip = 228; continue _fun0020 }
case 209:
            var7 = var4.includeBundles;
case 228:
            var1 = var9.bind(var2)(var8, var7);
case 226:
            if(!var1) { _fun0020_ip = 229; continue _fun0020 }
case 147:
            var8 = _closure1_slot22;
            var3 = var5 == var6;
            var7 = undefined;
            if(var3) { _fun0020_ip = 230; continue _fun0020 }
case 73:
            var7 = var6.includeDynamicBlocks;
case 230:
            var9 = var5 == var4;
            var3 = undefined;
            if(var9) { _fun0020_ip = 231; continue _fun0020 }
case 75:
            var3 = var4.includeDynamicBlocks;
case 231:
            var1 = var8.bind(var2)(var7, var3);
case 229:
            if(!var1) { _fun0020_ip = 76; continue _fun0020 }
case 232:
            var3 = var5 == var6;
            var7 = undefined;
            if(var3) { _fun0020_ip = 158; continue _fun0020 }
case 233:
            var7 = var6.countryCode;
case 158:
            var8 = var5 == var4;
            var3 = undefined;
            if(var8) { _fun0020_ip = 234; continue _fun0020 }
case 149:
            var3 = var4.countryCode;
case 234:
            var1 = var7 === var3;
case 76:
            if(!var1) { _fun0020_ip = 235; continue _fun0020 }
case 236:
            var3 = var5 == var6;
            var7 = undefined;
            if(var3) { _fun0020_ip = 237; continue _fun0020 }
case 238:
            var7 = var6.paymentGateway;
case 237:
            var8 = var5 == var4;
            var3 = undefined;
            if(var8) { _fun0020_ip = 239; continue _fun0020 }
case 240:
            var3 = var4.paymentGateway;
case 239:
            var1 = var7 === var3;
case 235:
            if(!var1) { _fun0020_ip = 179; continue _fun0020 }
case 50:
            var3 = var5 == var6;
            var7 = undefined;
            if(var3) { _fun0020_ip = 241; continue _fun0020 }
case 214:
            var7 = var6.shopHomeConfig;
case 241:
            var8 = var5 == var4;
            var3 = undefined;
            if(var8) { _fun0020_ip = 25; continue _fun0020 }
case 10:
            var3 = var4.shopHomeConfig;
case 25:
            var1 = var7 === var3;
case 179:
            if(!var1) { _fun0020_ip = 26; continue _fun0020 }
case 80:
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0020_ip = 242; continue _fun0020 }
case 79:
            var3 = var6.skipNumCategories;
case 242:
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0020_ip = 27; continue _fun0020 }
case 243:
            var2 = var4.skipNumCategories;
case 27:
            var1 = var3 === var2;
case 26:
            return var1;
        }
    };
    var3['areRequestOptionsEqual'] = var15;
    var3['fetchCollectiblesCategories'] = var14;
    var3['fetchCollectiblesPurchases'] = var13;
    var3['fetchCollectiblesProduct'] = var12;
    var3['maybeFetchCollectiblesProduct'] = var11;
    var3['claimPremiumCollectiblesProduct'] = var10;
    var3['validateCollectiblesRecipient'] = var9;
    var3['validateCollectiblesRecipientsBatch'] = var8;
    var3['fetchCollectiblesMarketings'] = var7;
    var3['fetchCollectiblesShopHome'] = var6;
    var6 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['shopHomeConfigOverride'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setShopHomeConfigOverride'] = var6;
    var6 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['shopLayoutUrlOverride'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setShopLayoutUrlOverride'] = var6;
    var5 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 17;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'COLLECTIBLES_SKIP_NUM_CATEGORIES';
        var2['type'] = var5;
        var5 = arg1;
        var2['skipNumCategories'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSkipNumCategories'] = var5;
    var3['claimCollectiblesCategoryReward'] = var4;
    var3['maybeFetchCollectiblesShopTabLayout'] = var2;
    return var1;
})();