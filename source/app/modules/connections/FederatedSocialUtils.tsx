// app/modules/connections/FederatedSocialUtils.tsx
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
    var4 = var4.PlatformTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/connections/FederatedSocialUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function validateHandle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot0;
            var2 = var1.MASTODON;
            var1 = arg2;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
            var1 = var2.test;
            var1 = var1.bind(var2)(var3);
case 2:
            var2 = /^.+\.[^.@]{2,}$/;
            var1 = var2.test;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['validateHandle'] = var4;
    var2 = function getExampleHandle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot0;
            var3 = var1.MASTODON;
            var1 = '@example@mastodon.social';
            if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = _closure1_slot0;
            var3 = var2.BLUESKY;
            var2 = 'clyde@example.com';
            if(!(var4 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = 'example.bsky.social';
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getExampleHandle'] = var2;
    return var1;
})();