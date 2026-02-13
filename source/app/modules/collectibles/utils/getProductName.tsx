// app/modules/collectibles/utils/getProductName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = function getBaseProductName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = '';
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'baseVariantName';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.baseVariantName;
            if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var2 = var3.variants;
            if(!(var4 != var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3.variants;
            var2 = var2.length;
            var5 = 0;
            if(!(!(var2 > var5))) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            var2 = var3.name;
            _fun0001_ip = 10; continue _fun0001;
case 9:
            var4 = var3.variants;
            var4 = var4[var5];
            var2 = var4.baseVariantName;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var2 = var3.baseVariantName;
case 11:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = 3;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/getProductName.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = null;
            if(!(var4 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var3 = var1[var8];
            var7 = undefined;
            var3 = var9.bind(var7)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var1[var8];
            var1 = var9.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.z7y5vF;
            var3 = var3.bind(var5)(var1);
            var1 = 'baseVariantName';
            var1 = var1 in var6;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var6.baseVariantName;
            if(!(var4 != var1)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var1 = var6.variantLabel;
            if(!(var1 === var3)) { _fun0002_ip = 17; continue _fun0002 }
case 14:
            var1 = var6.name;
            _fun0002_ip = 18; continue _fun0002;
case 17:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = var2[var8];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.BZN5k2;
            var2 = {};
            var7 = var6.baseVariantName;
            var2['baseVariantName'] = var7;
            var6 = var6.variantLabel;
            var2['variantLabel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
case 12:
            var1 = '';
            return var1;
        }
    };
    var3['getProductName'] = var5;
    var3['getBaseProductName'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var4 = null;
            if(!(var4 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 13:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var3 = var1[var8];
            var7 = undefined;
            var3 = var9.bind(var7)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var1[var8];
            var1 = var9.bind(var7)(var1);
            var1 = var1.t;
            var1 = var1.z7y5vF;
            var3 = var3.bind(var5)(var1);
            var1 = var6.baseVariantName;
            if(!(var4 != var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = var6.variantLabel;
            if(!(var1 === var3)) { _fun0003_ip = 2; continue _fun0003 }
case 20:
            var1 = var6.name;
            _fun0003_ip = 22; continue _fun0003;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = var2[var8];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.BZN5k2;
            var2 = {};
            var7 = var6.baseVariantName;
            var2['baseVariantName'] = var7;
            var6 = var6.variantLabel;
            var2['variantLabel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 22:
            return var1;
case 19:
            var1 = '';
            return var1;
        }
    };
    var3['getPurchasedProductName'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot2;
            var6 = undefined;
            var5 = var2.bind(var6)(var8);
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = 1;
            var3 = var2[var3];
            var7 = var4.bind(var6)(var3);
            var3 = var7.getProductType;
            var3 = var3.bind(var7)(var8);
            var7 = 2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            return var5;
case 27:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.YFOwHj;
            var2 = {};
            var2['product'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 25:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.eR7moP;
            var2 = {};
            var2['product'] = var5;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 23:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.lvBzLi;
            var1 = {};
            var1['product'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getProductNameAndTypeLabel'] = var2;
    return var1;
})();