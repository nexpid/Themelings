// app/modules/auth/QRLoginUtils.tsx
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
    var1 = /^\\/ra\\/([\w-]+)$/;
    var _closure1_slot2 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/QRLoginUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function findRemoteAuthFingerprint(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 87; continue _fun0001 }
 12:
            if(!(var1 != var4)) { _fun0001_ip = 87; continue _fun0001 }
 16:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 0;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var3 = var5.isDiscordHostname;
            var3 = var3.bind(var5)(var6);
            if(!var3) { _fun0001_ip = 87; continue _fun0001 }
 54:
            var3 = var4.match;
            var2 = _closure1_slot2;
            var4 = var3.bind(var4)(var2);
            var3 = var1 != var4;
            var2 = null;
            if(!var3) { _fun0001_ip = 85; continue _fun0001 }
 78:
            var3 = 1;
            var2 = var4[var3];
 85:
            return var2;
 87:
            return var1;
        }
    };
    var3['findRemoteAuthFingerprint'] = var2;
    return var1;
})();