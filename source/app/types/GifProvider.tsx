// app/types/GifProvider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = ['tenor', 'giphy', 'klipy'];
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'types/GifProvider.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = {'enabled': false, 'sendProviderToAPI': false, 'fallbackProvider': 'tenor'};
    var3['DEFAULT_GIF_PROVIDER_CONFIG'] = var5;
    var3['VALID_GIF_PROVIDERS'] = var4;
    var4 = function isValidGifProvider(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isValidGifProvider'] = var4;
    var2 = function getProviderForRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.sendProviderToAPI;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 4:
            var3 = var2.userProvider;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var2.fallbackProvider;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var1 = var2.userProvider;
case 7:
            return var1;
        }
    };
    var3['getProviderForRequest'] = var2;
    return var1;
})();