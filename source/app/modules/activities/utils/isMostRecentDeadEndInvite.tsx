// app/modules/activities/utils/isMostRecentDeadEndInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = var4.ActivityActionTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isMostRecentDeadEndInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isMostRecentDeadEndInvite(arg1, arg2, arg3, arg4) {
        var5 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var2;
        var2 = arg4;
        var _closure2_slot1 = var2;
        var4 = var5.hasAnyAfter;
        var3 = arg1;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var1 = var6.activity;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var6.application;
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = var2.id;
case 4:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 2:
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var6.activity;
                var3 = var2.type;
                var2 = _closure1_slot2;
                var2 = var2.JOIN;
                var1 = var3 === var2;
case 6:
                if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var3, var6, var2);
                var1 = !var2;
case 8:
                return var1;
            }
        };
        var1 = 25;
        var1 = var4.bind(var5)(var3, var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['isMostRecentDeadEndInvite'] = var2;
    return var1;
})();