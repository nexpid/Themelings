// app/modules/application_assets_v2/ApplicationAssetV2Utils.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_assets_v2/ApplicationAssetV2Utils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationAssetUrl(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var15 = arg1;
            var1 = arg2;
            var7 = arg3;
            var4 = global;
            var2 = var4.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.CDN_HOST;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.URL;
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var5 = var5[var2];
            var2 = undefined;
            var5 = var8.bind(var2)(var5);
            var2 = var5.getAPIBaseURL;
            var23 = var2.bind(var5)();
            var19 = var1.asset_id;
            var2 = var4.HermesInternal;
            var10 = var2.concat;
            var24 = '';
            var22 = '/applications/';
            var20 = '/app-assets/';
            var18 = '.webp';
            var21 = var15;
            var23 = var24[var10](var23, var22, var21, var20, var19, var18, var17);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var24 = var5;
            var2 = new var24[var6](var23, var22);
            var2 = var2 instanceof Object ? var2 : var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var4.URL;
            var5 = var4.location;
            var23 = var5.protocol;
            var5 = var4.window;
            var5 = var5.GLOBAL_ENV;
            var21 = var5.CDN_HOST;
            var17 = var1.asset_id;
            var4 = var4.HermesInternal;
            var11 = var4.concat;
            var24 = '';
            var22 = '//';
            var20 = '/app-assets/';
            var18 = '/';
            var16 = '.webp';
            var19 = var15;
            var23 = var24[var11](var23, var22, var21, var20, var19, var18, var17, var16, var15);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var24 = var5;
            var4 = new var24[var6](var23, var22);
            var2 = var4 instanceof Object ? var4 : var5;
case 4:
            if(!(var3 != var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var2.searchParams;
            var5 = var6.set;
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var3 = var4.getBestMediaProxySize;
            var4 = var3.bind(var4)(var7);
            var3 = var4.toString;
            var4 = var3.bind(var4)();
            var3 = 'size';
            var3 = var5.bind(var6)(var3, var4);
case 5:
            var1 = var1.metadata;
            var1 = var1.is_animated;
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var2.searchParams;
            var4 = var5.set;
            var3 = 'animated';
            var1 = 'true';
            var1 = var4.bind(var5)(var3, var1);
case 7:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getApplicationAssetUrl'] = var2;
    return var1;
})();