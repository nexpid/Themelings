// app/modules/collectibles/native/openProductDetailsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/openProductDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'Shop Product Preview';
    var3['PRODUCT_DETAILS_ACTION_SHEET_KEY'] = var4;
    var2 = function openProductDetailsActionSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.product;
            var6 = var2.initialVariantIndex;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 0;
case 2:
            var2 = var2.analyticsLocations;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 0;
            var3 = var3[var9];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getIsVariantProduct;
            var4 = var3.bind(var4)(var8);
            var3 = 0;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var8.variants;
            var7 = var7.length;
            var7 = var6 < var7;
            var3 = 0;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var6;
case 4:
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var8.skuId;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var4 = var8.variants;
            var4 = var4[var3];
            var10 = var4.skuId;
case 9:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 1;
            var6 = var4[var6];
            var7 = var9.bind(var1)(var6);
            var6 = var7.productDetailsOpened;
            var6 = var6.bind(var7)(var10);
            var6 = _closure1_slot1;
            var5 = 2;
            var5 = var4[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.openLazy;
            var5 = 4;
            var5 = var4[var5];
            var9 = var9.bind(var1)(var5);
            var5 = 3;
            var5 = var4[var5];
            var4 = var4.paths;
            var14 = var9.bind(var1)(var5, var4);
            var4 = {};
            var4['product'] = var8;
            var4['initialVariantIndex'] = var3;
            var4['analyticsLocations'] = var2;
            var13 = 'Shop Product Preview';
            var11 = arg2;
            var15 = var7;
            var12 = var4;
            var2 = var15[var6](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['openProductDetailsActionSheet'] = var2;
    return var1;
})();