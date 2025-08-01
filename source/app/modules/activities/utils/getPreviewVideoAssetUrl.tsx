// app/modules/activities/utils/getPreviewVideoAssetUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getPreviewVideoAssetUrl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPreviewVideoAssetUrl(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var8 = arg2;
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var7 = var1.CDN_HOST;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var6 = var1.API_ENDPOINT;
            var1 = null;
            if(!(var1 == var7)) { _fun0001_ip = 112; continue _fun0001 }
 50:
            var1 = var2.location;
            var5 = var1.protocol;
            var4 = _closure1_slot0;
            var3 = var4.STORE_ASSET;
            var1 = 'mp4';
            var4 = var3.bind(var4)(var9, var8, var1);
            var1 = var2.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var5, var6, var4);
            _fun0001_ip = 160; continue _fun0001;
 112:
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var16 = 'https://';
            var14 = '/app-assets/';
            var12 = '/store/';
            var10 = '.mp4';
            var15 = var7;
            var13 = var9;
            var11 = var8;
            var1 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
 160:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();