// app/modules/collectibles/nameplates/native/NameplateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/nameplates/native/NameplateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getNameplateAssets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var4.bind(var7)(var1);
            var4 = var5.getIsCollectiblesNewAssetUrlEnabled;
            var1 = 'getNameplateAssets';
            var4 = var4.bind(var5)(var1);
            var1 = {};
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var4 = var8[var5];
            var12 = var6.bind(var7)(var4);
            var11 = var12.getAssetCDNUrl;
            var14 = var3.src;
            var4 = global;
            var9 = var4.HermesInternal;
            var13 = var9.concat;
            var10 = 'collectibles/';
            var9 = 'static.png';
            var9 = var13.bind(var10)(var14, var9);
            var9 = var11.bind(var12)(var9);
            var1['staticImageUrl'] = var9;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.getAssetCDNUrl;
            var9 = var3.src;
            var4 = var4.HermesInternal;
            var8 = var4.concat;
            var4 = 'img.png';
            var4 = var8.bind(var10)(var9, var4);
            var4 = var5.bind(var6)(var4);
            var1['animatedImageUrl'] = var4;
            return var1;
case 2:
            var5 = var3.skuId;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var3 = var8[var2];
            var9 = var6.bind(var7)(var3);
            var4 = var9.getCollectiblesItemAssetUrl;
            var3 = var8[var2];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemAssetFormat;
            var3 = var3.STATIC;
            var3 = var4.bind(var9)(var5, var3);
            var1['staticImageUrl'] = var3;
            var3 = var8[var2];
            var4 = var6.bind(var7)(var3);
            var3 = var4.getCollectiblesItemAssetUrl;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.CollectiblesItemAssetFormat;
            var2 = var2.ANIMATED;
            var2 = var3.bind(var4)(var5, var2);
            var1['animatedImageUrl'] = var2;
            return var1;
        }
    };
    var3['getNameplateAssets'] = var2;
    return var1;
})();