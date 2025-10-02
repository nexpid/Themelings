// app/modules/collectibles/hooks/useProductDescription.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isExternalProduct;
    var _closure1_slot3 = var4;
    var4 = function getBundleName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var6.bundledProducts;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = new Array(0);
case 6:
            var7 = var4.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                var1 = var2 === var1;
                return var1;
            };
            var12 = var7.bind(var4)(var3);
            var7 = var4.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                var1 = var2 === var1;
                return var1;
            };
            var11 = var7.bind(var4)(var3);
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var3.bind(var4)(var2);
            if(!(var1 == var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.BS1Cu7;
            var2 = {};
            var8 = var1 == var12;
            var13 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = var12.name;
case 10:
            var14 = var1 != var13;
            var8 = '';
            var10 = var8;
            if(!var14) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var13;
case 12:
            var2['decoName'] = var10;
            var13 = var1 == var11;
            var10 = undefined;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var11.name;
case 14:
            var13 = var1 != var10;
            if(!var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var10;
case 16:
            var2['pfxName'] = var8;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 8:
            var3 = new Array(0);
            if(!(var1 != var12)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var3.push;
            var7 = _closure1_slot0;
            var13 = _closure1_slot1;
            var2 = 2;
            var8 = var13[var2];
            var8 = var7.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var2 = var13[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var7 = var2.Ntv9Ji;
            var2 = {};
            var12 = var12.name;
            var2['itemName'] = var12;
            var2 = var8.bind(var10)(var7, var2);
            var2 = var4.bind(var3)(var2);
case 18:
            if(!(var1 != var11)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = var3.push;
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 2;
            var8 = var12[var2];
            var8 = var7.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var2 = var12[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var7 = var2.3Y8q7e;
            var2 = {};
            var11 = var11.name;
            var2['itemName'] = var11;
            var2 = var8.bind(var10)(var7, var2);
            var2 = var4.bind(var3)(var2);
case 20:
            if(!(var1 != var9)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = var3.push;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 2;
            var7 = var10[var1];
            var7 = var4.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var1 = var10[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var4 = var1.2keXk5;
            var1 = {};
            var9 = var9.name;
            var1['itemName'] = var9;
            var1 = var7.bind(var8)(var4, var1);
            var1 = var2.bind(var3)(var1);
case 22:
            var2 = var3.join;
            var1 = ', ';
            var4 = var2.bind(var3)(var1);
            var3 = var4.replace;
            var2 = /, ([^,]*)$/;
            var1 = ' & $1';
            var7 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var3 = var8[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1.Ofrqj4;
            var1 = {};
            var1['joinedItems'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 4:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var3 = var7[var1];
            var3 = var2.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var2 = var1./0Yndn;
            var1 = {};
            var6 = var6.bundledProducts;
            var7 = null;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var6.length;
case 24:
            var1['num'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var4 = function getCustomizedProductDescription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 3; continue _fun0002 }
case 26:
            var5 = false;
case 3:
            var1 = null;
            var2 = var1 == var6;
            var1 = '';
            if(var2) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var7 !== var2)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var2 = var6.summary;
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var3 = _closure1_slot4;
            var2 = var3.bind(var4)(var6, var5);
case 31:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useProductDescription.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getCustomizedProductDescription'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arguments[1];
            var _closure2_slot0 = var6;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = false;
case 32:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var2 = null;
            var7 = var2 == var6;
            var3 = undefined;
            if(var7) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var3 = var6.skuId;
case 34:
            var7 = var2 != var3;
            if(!var7) { _fun0003_ip = 29; continue _fun0003 }
case 36:
            var3 = _closure1_slot3;
            var8 = var2 == var6;
            var2 = undefined;
            if(var8) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var2 = var6.skuId;
case 37:
            var7 = var3.bind(var4)(var2);
case 29:
            _closure2_slot2 = var7;
            var3 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var7 = undefined;
                    if(!(var5 === var7)) { _fun0004_ip = 41; continue _fun0004 }
case 28:
                    var5 = false;
case 41:
                    var1 = null;
                    var1 = var1 == var6;
                    var8 = undefined;
                    if(var1) { _fun0004_ip = 34; continue _fun0004 }
case 42:
                    var8 = var6.type;
case 34:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var9 = 3;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.AVATAR_DECORATION;
                    if(!(var1 !== var8)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.PROFILE_EFFECT;
                    if(!(var1 !== var8)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var1 = var1.NAMEPLATE;
                    if(!(var1 !== var8)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.CollectiblesItemType;
                    var4 = var1.BUNDLE;
                    var1 = '';
                    if(!(var4 === var8)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var4 = _closure1_slot4;
                    var1 = var4.bind(var7)(var6, var5);
                    _fun0004_ip = 49; continue _fun0004;
case 47:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 2;
                    var5 = var9[var4];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.ik37ER;
                    var1 = var5.bind(var6)(var4);
                    _fun0004_ip = 49; continue _fun0004;
case 45:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 2;
                    var5 = var9[var4];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.VhJL7+;
                    var1 = var5.bind(var6)(var4);
                    _fun0004_ip = 49; continue _fun0004;
case 43:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 2;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.3lv7q6;
                    var1 = var4.bind(var5)(var3);
case 49:
                    _fun0004_ip = 20; continue _fun0004;
case 39:
                    var5 = _closure1_slot5;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 20:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useProductDescription'] = var2;
    return var1;
})();