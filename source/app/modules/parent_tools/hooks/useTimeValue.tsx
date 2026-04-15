// app/modules/parent_tools/hooks/useTimeValue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 0;
    var7 = var5[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/parent_tools/hooks/useTimeValue.tsx';
    var6 = var7.bind(var8)(var6);
    var2 = function useTimeValue(arg1) {
        var2 = arg1;
        var3 = var2.initial;
        var _closure2_slot0 = var3;
        var2 = var2.defaultValue;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot0;
        var2 = var3.useState;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = {};
                var3 = _closure2_slot0;
                var4 = var3.hours;
                var2['hours'] = var4;
                var3 = var3.minutes;
                var2['minutes'] = var3;
                var1 = var2;
case 4:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.timeToMinutes;
    var3['timeToMinutes'] = var2;
    return var1;
})();