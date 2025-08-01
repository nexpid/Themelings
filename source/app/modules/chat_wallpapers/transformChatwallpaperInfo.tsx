// app/modules/chat_wallpapers/transformChatwallpaperInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_wallpapers/transformChatwallpaperInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformChatWallpaperInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 47; continue _fun0001 }
 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isProbablyAValidSnowflake;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 47:
            var1 = undefined;
            return var1;
 51:
            var1 = {};
            var1['wallpaperId'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();