// app/modules/self_mod/hooks/useChannelSafetyWarning.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/hooks/useChannelSafetyWarning.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelSafetyWarning(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = arg2;
        var _closure2_slot1 = var3;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 1;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot2;
            var2 = var3.getChannelSafetyWarnings;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var4, var2, var3);
        var3 = var4.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot1;
            var1 = var2 === var1;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.find;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var1 = var4.dismiss_timestamp;
                var3 = null;
                var1 = var3 == var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var4.expiry;
case 4:
                var2 = var3 == var2;
                if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = global;
                var6 = var3.Date;
                var5 = var6.parse;
                var4 = var4.expiry;
                var4 = var5.bind(var6)(var4);
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var2 = var4 > var3;
case 6:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useChannelSafetyWarning'] = var2;
    return var1;
})();