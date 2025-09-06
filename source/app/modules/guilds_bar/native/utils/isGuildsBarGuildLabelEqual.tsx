// app/modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function isGuildsBarGuildLabelEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var4.count;
            var1 = var3.count;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 93; continue _fun0001 }
 25:
            var2 = var4.names;
            var5 = var2.length;
            var2 = var3.names;
            var2 = var2.length;
            var2 = var5 === var2;
            if(!var2) { _fun0001_ip = 90; continue _fun0001 }
 52:
            var5 = var4.names;
            var4 = var5.join;
            var6 = '|';
            var4 = var4.bind(var5)(var6);
            var5 = var3.names;
            var3 = var5.join;
            var3 = var3.bind(var5)(var6);
            var2 = var4 === var3;
 90:
            var1 = var2;
 93:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();