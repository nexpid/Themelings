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
    var2 = function openProductDetailsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.product;
            var5 = var2.initialVariantIndex;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 0;
case 2:
            var2 = var2.analyticsLocations;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 0;
            var3 = var3[var9];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getIsVariantProduct;
            var3 = var3.bind(var6)(var8);
            var7 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var8.variants;
            var6 = var6.length;
            var6 = var5 < var6;
            var7 = 0;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = var5;
case 4:
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var8.skuId;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var3 = var8.variants;
            var3 = var3[var7];
            var10 = var3.skuId;
case 9:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 1;
            var5 = var3[var5];
            var6 = var9.bind(var1)(var5);
            var5 = var6.productDetailsOpened;
            var5 = var5.bind(var6)(var10);
            var5 = _closure1_slot1;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = 4;
            var4 = var3[var4];
            var9 = var9.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var9.bind(var1)(var4, var3);
            var3 = {};
            var3['product'] = var8;
            var3['initialVariantIndex'] = var7;
            var3['analyticsLocations'] = var2;
            var2 = 'Shop Product Preview';
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var3['openProductDetailsActionSheet'] = var2;
    return var1;
})();