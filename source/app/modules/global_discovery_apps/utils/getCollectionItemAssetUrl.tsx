// app/modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot2 = var7;
    var4 = var4.window;
    var4 = var4.GLOBAL_ENV;
    var7 = var4.API_ENDPOINT;
    var _closure1_slot3 = var7;
    var4 = var4.CDN_HOST;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCollectionItemAssetUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.itemId;
            var11 = var1.hash;
            var8 = var1.containerWidth;
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 32; continue _fun0001 }
 26:
            var8 = 1024;
 32:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var7 = var4.bind(var5)(var2);
            var2 = var7.getBestMediaProxySize;
            var1 = var6[var1];
            var9 = var4.bind(var5)(var1);
            var1 = var9.getDevicePixelRatio;
            var1 = var1.bind(var9)();
            var1 = var8 * var1;
            var2 = var2.bind(var7)(var1);
            var1 = var2.toString;
            var7 = var1.bind(var2)();
            var2 = global;
            var8 = var2.URLSearchParams;
            var1 = {};
            var1['size'] = var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var22 = var7;
            var21 = var1;
            var1 = new var22[var8](var21, var20);
            var7 = var1 instanceof Object ? var1 : var7;
            var1 = var7.toString;
            var10 = var1.bind(var7)();
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.SUPPORTS_WEBP;
            var9 = 'png';
            if(!var1) { _fun0001_ip = 177; continue _fun0001 }
 171:
            var9 = 'webp';
 177:
            var4 = _closure1_slot4;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 254; continue _fun0001 }
 187:
            var1 = var2.location;
            var8 = var1.protocol;
            var7 = _closure1_slot3;
            var4 = _closure1_slot2;
            var1 = var4.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE;
            var19 = var1.bind(var4)(var12, var11, var9);
            var1 = var2.HermesInternal;
            var5 = var1.concat;
            var22 = '';
            var18 = '?';
            var21 = var8;
            var20 = var7;
            var17 = var10;
            var1 = var22[var5](var21, var20, var19, var18, var17, var16);
            _fun0001_ip = 309; continue _fun0001;
 254:
            var21 = _closure1_slot4;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var22 = 'https://';
            var20 = '/app-assets/application-directory/collection-items/';
            var18 = '/';
            var16 = '.';
            var14 = '?';
            var19 = var12;
            var17 = var11;
            var15 = var9;
            var13 = var10;
            var1 = var22[var7](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
 309:
            return var1;
        }
    };
    var3['getCollectionItemAssetUrl'] = var2;
    return var1;
})();