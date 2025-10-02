// app/modules/soundboard/getSoundboardSoundURL.tsx
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
    var4 = 'modules/soundboard/getSoundboardSoundURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSoundboardSoundURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var5 = var1.CDN_HOST;
            var3 = var1.PROJECT_ENV;
            var1 = 'development';
            if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.location;
            var8 = var1.protocol;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var7 = var1.API_ENDPOINT;
            var3 = _closure1_slot0;
            var1 = var3.SOUNDBOARD_SOUND;
            var4 = var1.bind(var3)(var6);
            var1 = var2.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var8, var7, var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.SOUNDBOARD_SOUND;
            var4 = var3.bind(var4)(var6);
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'https://';
            var1 = var3.bind(var2)(var5, var4);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();