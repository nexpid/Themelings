// app/modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = function shouldDisplayCancel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var2 = var2.startedAt;
            var3 = var3 - var2;
            var2 = 6000;
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
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
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldDisplayCancelConsoleTransfer(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot1;
        var4 = var5.useState;
        var3 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var7 = var4.bind(var5)(var3);
        var4 = _closure1_slot0;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot2;
                var6 = _closure2_slot0;
                var1 = undefined;
                var4 = var4.bind(var1)(var6);
                var5 = _closure2_slot1;
                var5 = var5.bind(var1)(var4);
                var5 = null;
                if(!(var5 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var4 = global;
                var5 = var4.setTimeout;
                var6 = var4.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var3 = _closure2_slot0;
                var3 = var3.startedAt;
                var4 = var4 - var3;
                var3 = 6000;
                var4 = var3 - var4;
                var3 = function() {
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var5.bind(var1)(var3, var4);
                var _closure3_slot0 = var3;
                var2 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var2;
case 4:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();