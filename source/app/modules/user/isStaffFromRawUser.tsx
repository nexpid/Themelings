// app/modules/user/isStaffFromRawUser.tsx
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
    var4 = var4.UserFlags;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user/isStaffFromRawUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isStaff(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = var4.flags;
            var3 = null;
            var2 = var3 != var1;
            var5 = 0;
            if(!var2) { _fun0001_ip = 22; continue _fun0001 }
 19:
            var5 = var1;
 22:
            var1 = _closure1_slot0;
            var2 = var1.STAFF;
            var2 = var5 & var2;
            var1 = var1.STAFF;
            var1 = var2 === var1;
            if(var1) { _fun0001_ip = 71; continue _fun0001 }
 52:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 67; continue _fun0001 }
 61:
            var2 = var4.personal_connection_id;
 67:
            var1 = var3 != var2;
 71:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();