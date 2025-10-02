// app/modules/threads/ThreadActionUtils.tsx
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
    var4 = 'modules/threads/ThreadActionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function doesThreadMembersActionAffectMe(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var1 = var2.getId;
            var8 = var1.bind(var2)();
            var _closure2_slot0 = var8;
            var3 = null;
            var1 = var3 != var8;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var5.removedMemberIds;
            var6 = var3 == var7;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7.includes;
            var2 = var2.bind(var7)(var8);
            var6 = !var2;
case 4:
            var2 = !var6;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.addedMembers;
            var3 = var3 == var6;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var3 = !var4;
case 8:
            var2 = !var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['doesThreadMembersActionAffectMe'] = var2;
    return var1;
})();