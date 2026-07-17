// app/modules/collectibles/utils/CollectiblesAssetUtils.tsx
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
    var4 = {};
    var1 = 'animated';
    var4['ANIMATED'] = var1;
    var1 = 'static';
    var4['STATIC'] = var1;
    var1 = 'video';
    var4['VIDEO'] = var1;
    var1 = 1;
    var5 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var5);
    var8 = var9.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/CollectiblesAssetUtils.tsx';
    var5 = var8.bind(var9)(var5);
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.parseSkuIdFromServerData;
    var3['parseSkuIdFromServerData'] = var5;
    var3['CollectiblesItemAssetFormat'] = var4;
    var2 = function getCollectiblesItemAssetUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.skuId;
            var8 = var1.assetFormat;
            var10 = var1.assetId;
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.isDiscordBackendDevelopment;
            var2 = var2.bind(var3)();
            var3 = global;
            var4 = var3.Boolean;
            var4 = var4.bind(var5)(var10);
            var6 = '';
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var6;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.HermesInternal;
            var5 = var2.concat;
            var2 = '/';
            var12 = var5.bind(var6)(var10, var2);
case 6:
            var2 = var3.HermesInternal;
            var11 = var2.concat;
            var19 = 'https://cdn.discordapp.com/';
            var18 = 'media/v1/collectibles-shop';
            var2 = '/';
            var17 = var2;
            var16 = var9;
            var15 = var2;
            var14 = var12;
            var13 = var8;
            var2 = var19[var11](var18, var17, var16, var15, var14, var13, var12);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var7 = var6;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var3.HermesInternal;
            var5 = var4.concat;
            var4 = '/';
            var7 = var5.bind(var6)(var10, var4);
case 9:
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var19 = 'http://localhost:3000/_storage/';
            var18 = 'media/v1/collectibles-shop';
            var3 = '/';
            var17 = var3;
            var16 = var9;
            var15 = var3;
            var14 = var7;
            var13 = var8;
            var2 = var19[var6](var18, var17, var16, var15, var14, var13, var12);
case 8:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['getCollectiblesItemAssetUrl'] = var2;
    return var1;
})();