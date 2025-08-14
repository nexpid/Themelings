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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
 0:
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
            if(var4) { _fun0004_ip = 77; continue _fun0004 }
 43:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.extractPriceByPurchaseTypes;
            var4 = var4.bind(var5)(var2, var7);
            return var4;
 77:
            var4 = _closure1_slot3;
            var4 = var4.MOBILE;
            if(!(var7 !== var4)) { _fun0004_ip = 105; continue _fun0004 }
 91:
            var4 = _closure1_slot3;
            var4 = var4.MOBILE_PREMIUM_TIER_2;
            if(!(var7 === var4)) { _fun0004_ip = 220; continue _fun0004 }
 105:
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
            if(var8) { _fun0004_ip = 152; continue _fun0004 }
 148:
            var3 = var6[var7];
 152:
            var3 = var4.bind(var5)(var3);
            var2 = var2 != var3;
            var1 = undefined;
            if(!var2) { _fun0004_ip = 218; continue _fun0004 }
 166:
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
 218:
            return var1;
 220:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function isGPlaySynced(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(var9) { _fun0005_ip = 65; continue _fun0005 }
 51:
            var9 = _closure1_slot3;
            var9 = var9.MOBILE;
            var1 = var10[var9];
 65:
            var1 = var4.bind(var5)(var1);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var5 = var5.bind(var2)(var4);
            var4 = var5.getProduct;
            var7 = var7.googleSkuIds;
            var8 = var3 == var7;
            var2 = undefined;
            if(var8) { _fun0005_ip = 122; continue _fun0005 }
 108:
            var6 = _closure1_slot3;
            var6 = var6.MOBILE_PREMIUM_TIER_2;
            var2 = var7[var6];
 122:
            var2 = var4.bind(var5)(var2);
            var1 = var3 != var1;
            if(!var1) { _fun0005_ip = 138; continue _fun0005 }
 134:
            var1 = var3 != var2;
 138:
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
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/native/CollectiblesUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg2;
            var3 = _closure1_slot3;
            var4 = arg3;
            if(var4) { _fun0006_ip = 35; continue _fun0006 }
 16:
            if(var1) { _fun0006_ip = 27; continue _fun0006 }
 19:
            var4 = var3.DEFAULT;
            _fun0006_ip = 33; continue _fun0006;
 27:
            var4 = var3.PREMIUM_TIER_2;
 33:
            _fun0006_ip = 55; continue _fun0006;
 35:
            if(var1) { _fun0006_ip = 46; continue _fun0006 }
 38:
            var1 = var3.MOBILE;
            _fun0006_ip = 52; continue _fun0006;
 46:
            var1 = var3.MOBILE_PREMIUM_TIER_2;
 52:
            var4 = var1;
 55:
            var3 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var3 = var3.bind(var5)(var1, var4);
            var6 = null;
            var4 = var6 == var3;
            var1 = null;
            if(var4) { _fun0006_ip = 146; continue _fun0006 }
 81:
            var4 = var3.priceString;
            if(!(var6 == var4)) { _fun0006_ip = 137; continue _fun0006 }
 91:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var2 = var3.currency;
            var2 = var5.bind(var6)(var4, var2);
            _fun0006_ip = 143; continue _fun0006;
 137:
            var2 = var3.priceString;
 143:
            var1 = var2;
 146:
            return var1;
        }
    };
    var3['getFormattedPriceForCollectiblesProduct'] = var6;
    var3['extractPriceByPurchaseTypes'] = var5;
    var3['isGPlaySynced'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 92; continue _fun0007 }
 9:
            var1 = new Array(0);
            var3 = _closure1_slot7;
            var2 = var4.values;
            var2 = var2.bind(var4)();
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0007_ip = 90; continue _fun0007 }
 48:
            var7 = var3.value;
            var2 = _closure1_slot6;
            var2 = var2.bind(var5)(var7);
            if(!var2) { _fun0007_ip = 75; continue _fun0007 }
 65:
            var2 = var1.push;
            var2 = var2.bind(var1)(var7);
 75:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0007_ip = 48; continue _fun0007 }
 90:
            return var1;
 92:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['filterGPlaySyncedCategories'] = var4;
    var2 = function(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg1;
                var3 = var2.unpublishedAt;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0008_ip = 56; continue _fun0008 }
 18:
                var4 = var2.unpublishedAt;
                var3 = global;
                var3 = var3.Date;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var6 = var5;
                var3 = new var6[var3](var5);
                var3 = var3 instanceof Object ? var3 : var5;
                var1 = var4 > var3;
 56:
                var2 = var2.products;
                var3 = var2.length;
                var2 = 0;
                var2 = var3 > var2;
                if(!var1) { _fun0008_ip = 79; continue _fun0008 }
 76:
                var1 = var2;
 79:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterHiddenCategories'] = var2;
    return var1;
})();