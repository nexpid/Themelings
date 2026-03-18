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
    var1 = 2;
    var5 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var5);
    var8 = var9.fileFinishedImporting;
    var5 = 'modules/collectibles/utils/CollectiblesAssetUtils.tsx';
    var5 = var8.bind(var9)(var5);
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.parseSkuIdFromServerData;
    var3['parseSkuIdFromServerData'] = var5;
    var3['CollectiblesItemAssetFormat'] = var4;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.getIsCollectiblesNewAssetUrlEnabled;
            var1 = 'getCollectiblesItemAssetUrl';
            var3 = var3.bind(var5)(var1);
            var5 = null;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5 != var8;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isDiscordBackendDevelopment;
            var2 = var2.bind(var3)();
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = 'https://cdn.discordapp.com/';
            var13 = 'media/v1/collectibles-shop';
            var2 = '/';
            var12 = var2;
            var11 = var8;
            var10 = var2;
            var9 = var7;
            var2 = var14[var6](var13, var12, var11, var10, var9, var8);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var14 = 'http://localhost:3000/_storage/';
            var13 = 'media/v1/collectibles-shop';
            var3 = '/';
            var12 = var3;
            var11 = var8;
            var10 = var3;
            var9 = var7;
            var2 = var14[var6](var13, var12, var11, var10, var9, var8);
case 7:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['getCollectiblesItemAssetUrl'] = var2;
    return var1;
})();