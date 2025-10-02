// app/modules/chat/SlowmodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function canBypassSlowmodeHelper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var4 = arg3;
            var3 = var4.can;
            var1 = _closure1_slot4;
            var1 = var1.BYPASS_SLOWMODE;
            var1 = var3.bind(var4)(var1, var5);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var1 = var1.SendMessage;
            if(!(var1 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            var1 = var1.CreateThread;
            if(!(var1 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var3);
            var3 = var6.assertNever;
            var3 = var3.bind(var6)(var7);
            return var1;
case 6:
            var3 = var4.can;
            var1 = _closure1_slot4;
            var1 = var1.MANAGE_THREADS;
            var1 = var3.bind(var4)(var1, var5);
            return var1;
case 4:
            var3 = var4.can;
            var1 = _closure1_slot4;
            var1 = var1.MANAGE_CHANNELS;
            var1 = var3.bind(var4)(var1, var5);
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.can;
            var2 = _closure1_slot4;
            var2 = var2.MANAGE_MESSAGES;
            var1 = var3.bind(var4)(var2, var5);
case 8:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SlowmodeType;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/SlowmodeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canBypassSlowmode(arg1, arg2) {
        var5 = _closure1_slot5;
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var3['canBypassSlowmode'] = var4;
    var2 = function useCanBypassSlowmode(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanBypassSlowmode'] = var2;
    return var1;
})();