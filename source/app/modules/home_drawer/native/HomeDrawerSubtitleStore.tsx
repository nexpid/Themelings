// app/modules/home_drawer/native/HomeDrawerSubtitleStore.tsx
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
    var1 = null;
    var _closure1_slot0 = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = 'voice';
        var1['currentType'] = var3;
        var3 = function startTimer() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = global;
                var4 = var1.clearInterval;
                var2 = _closure1_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
case 2:
                var1 = global;
                var5 = var1.setInterval;
                var1 = undefined;
                var4 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var5 = var3.currentType;
                        var3 = _closure2_slot0;
                        var2 = {};
                        var4 = 'voice';
                        if(!(var4 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = 'activity';
case 4:
                        var2['currentType'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2 = 3500;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot0 = var2;
                return var1;
            }
        };
        var1['startTimer'] = var3;
        var2 = function stopTimer() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                var3 = global;
                var5 = var3.clearInterval;
                var4 = _closure1_slot0;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _closure1_slot0 = var1;
case 6:
                var3 = _closure2_slot0;
                var2 = {};
                var1 = 'voice';
                var2['currentType'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['stopTimer'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerSubtitleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();