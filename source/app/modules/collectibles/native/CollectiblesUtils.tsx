// app/modules/collectibles/native/CollectiblesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot3 = var4;
    var5 = function extractPriceByPurchaseTypes(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.extractPriceByPurchaseTypes;
            var4 = var4.bind(var5)(var2, var7);
            return var4;
case 36:
            var4 = _closure1_slot3;
            var4 = var4.MOBILE;
            if(!(var7 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = _closure1_slot3;
            var4 = var4.MOBILE_PREMIUM_TIER_2;
            if(!(var7 === var4)) { _fun0004_ip = 40; continue _fun0004 }
case 38:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.getProduct;
            var6 = var2.googleSkuIds;
            var2 = null;
            var8 = var2 == var6;
            var3 = undefined;
            if(var8) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var3 = var6[var7];
case 41:
            var3 = var4.bind(var5)(var3);
            var2 = var2 != var3;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = {};
            var4 = var3.price;
            var2['amount'] = var4;
            var4 = var3.currencyCode;
            var2['currency'] = var4;
            var3 = var3.priceString;
            var2['priceString'] = var3;
            var3 = 0;
            var2['tax'] = var3;
            var3 = false;
            var2['taxInclusive'] = var3;
            var1 = var2;
case 43:
            return var1;
case 40:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function isGPlaySynced(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var8 = 3;
            var1 = var1[var8];
            var2 = undefined;
            var5 = var3.bind(var2)(var1);
            var4 = var5.getProduct;
            var10 = var7.googleSkuIds;
            var3 = null;
            var9 = var3 == var10;
            var1 = undefined;
            if(var9) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var9 = _closure1_slot3;
            var9 = var9.MOBILE;
            var1 = var10[var9];
case 45:
            var1 = var4.bind(var5)(var1);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var5 = var5.bind(var2)(var4);
            var4 = var5.getProduct;
            var7 = var7.googleSkuIds;
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = _closure1_slot3;
            var6 = var6.MOBILE_PREMIUM_TIER_2;
            var2 = var7[var6];
case 47:
            var2 = var4.bind(var5)(var2);
            var1 = var3 != var1;
            if(!var1) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var1 = var3 != var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var6 = function hasAtLeastOneGPlaySynced(arg1) {
        var1 = arg1;
        var3 = var1.products;
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var _closure1_slot6 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/native/CollectiblesUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var3 = _closure1_slot3;
            var4 = arg3;
            if(var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            if(var1) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var4 = var3.DEFAULT;
            _fun0006_ip = 33; continue _fun0006;
case 53:
            var4 = var3.PREMIUM_TIER_2;
case 33:
            _fun0006_ip = 4; continue _fun0006;
case 51:
            if(var1) { _fun0006_ip = 2; continue _fun0006 }
case 55:
            var1 = var3.MOBILE;
            _fun0006_ip = 56; continue _fun0006;
case 2:
            var1 = var3.MOBILE_PREMIUM_TIER_2;
case 56:
            var4 = var1;
case 4:
            var3 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var3 = var3.bind(var5)(var1, var4);
            var6 = null;
            var4 = var6 == var3;
            var1 = null;
            if(var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var4 = var3.priceString;
            if(!(var6 == var4)) { _fun0006_ip = 59; continue _fun0006 }
case 39:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var2 = var3.currency;
            var2 = var5.bind(var6)(var4, var2);
            _fun0006_ip = 60; continue _fun0006;
case 59:
            var2 = var3.priceString;
case 60:
            var1 = var2;
case 57:
            return var1;
        }
    };
    var3['getFormattedPriceForCollectiblesProduct'] = var6;
    var3['extractPriceByPurchaseTypes'] = var5;
    var3['isGPlaySynced'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var1 = new Array(0);
            var3 = _closure1_slot7;
            var2 = var4.values;
            var2 = var2.bind(var4)();
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var7 = var3.value;
            var2 = _closure1_slot6;
            var2 = var2.bind(var5)(var7);
            if(!var2) { _fun0007_ip = 65; continue _fun0007 }
case 45:
            var2 = var1.push;
            var2 = var2.bind(var1)(var7);
case 65:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0007_ip = 64; continue _fun0007 }
case 63:
            return var1;
case 61:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['filterGPlaySyncedCategories'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var3 = var2.unpublishedAt;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0008_ip = 28; continue _fun0008 }
case 66:
                var4 = var2.unpublishedAt;
                var3 = global;
                var3 = var3.Date;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var6 = var5;
                var3 = new var6[var3](var5);
                var3 = var3 instanceof Object ? var3 : var5;
                var1 = var4 > var3;
case 28:
                var2 = var2.products;
                var3 = var2.length;
                var2 = 0;
                var2 = var3 > var2;
                if(!var1) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var1 = var2;
case 67:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterHiddenCategories'] = var4;
    var2 = function() {
        var1 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 5;
        var7 = var5[var3];
        var4 = undefined;
        var7 = var6.bind(var4)(var7);
        var7 = var7.OrbBadges;
        var7 = var7.ORB_PROFILE_BADGE;
        var1['id'] = var7;
        var3 = var5[var3];
        var3 = var6.bind(var4)(var3);
        var3 = var3.OrbBadges;
        var3 = var3.ORB_PROFILE_BADGE;
        var1['icon'] = var3;
        var3 = _closure1_slot1;
        var2 = 6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var1['iconSrc'] = var2;
        var2 = '';
        var1['description'] = var2;
        var2 = true;
        var1['isPreviewMode'] = var2;
        return var1;
    };
    var3['createOrbProfileBadge'] = var2;
    return var1;
})();