// app/modules/application_storefront/storefrontMessageEmbedCodedLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_storefront/storefrontMessageEmbedCodedLink.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function makeStorefrontSKUCodedLink(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['makeStorefrontSKUCodedLink'] = var4;
    var2 = function parseStorefrontSkuCodedLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 2;
            if(!(var3 === var1)) { _fun0001_ip = 70; continue _fun0001 }
 29:
            var2 = _closure1_slot0;
            var1 = undefined;
            var3 = var2.bind(var1)(var4, var3);
            var1 = {};
            var2 = 0;
            var2 = var3[var2];
            var1['applicationId'] = var2;
            var2 = 1;
            var2 = var3[var2];
            var1['skuId'] = var2;
            return var1;
 70:
            var1 = null;
            return var1;
        }
    };
    var3['parseStorefrontSkuCodedLink'] = var2;
    return var1;
})();