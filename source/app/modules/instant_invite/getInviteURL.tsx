// app/modules/instant_invite/getInviteURL.tsx
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
    var2 = 'modules/instant_invite/getInviteURL.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getInviteURL() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arguments[0];
            var6 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 16; continue _fun0001 }
 12:
            var4 = '';
 16:
            if(!(var6 === var1)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var6 = true;
 22:
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var5 = var2.INVITE_HOST;
            var2 = var1.HermesInternal;
            var3 = var2.concat;
            var2 = '/';
            var4 = var3.bind(var2)(var4);
            var3 = '';
            var2 = var3;
            if(!var6) { _fun0001_ip = 107; continue _fun0001 }
 72:
            var6 = var1.location;
            var8 = var6.protocol;
            var6 = var1.HermesInternal;
            var7 = var6.concat;
            var6 = '//';
            var2 = var7.bind(var3)(var8, var6);
 107:
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var1 = var1.bind(var3)(var2, var5, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();