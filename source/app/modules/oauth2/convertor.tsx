// app/modules/oauth2/convertor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportAll;
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
    var4 = 'modules/oauth2/convertor.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function convertOAuth2Authorization(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = var3.guilds;
            var2 = null;
            var1 = var3;
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var7 = var2;
            var6 = var3;
            var4 = copyDataProperties(var7, var6);
            var5 = var3.guilds;
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var2;
                var3 = copyDataProperties(var7, var6);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.deserialize;
                var2 = var2.permissions;
                var3 = var3.bind(var4)(var2);
                var2 = 'permissions';
                var1[var2] = var3;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = 'guilds';
            var2[var3] = var4;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['convertOAuth2Authorization'] = var2;
    return var1;
})();