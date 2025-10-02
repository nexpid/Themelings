// app/modules/devtools/dev_settings/DevSettingsActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function toggle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = 'boolean';
            var1 = typeof var5;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var1 = var2.get;
            var1 = var1.bind(var2)(var6);
            var5 = !var1;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'DEV_TOOLS_DEV_SETTING_SET';
            var2['type'] = var7;
            var2['toggle'] = var6;
            var2['value'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/devtools/dev_settings/DevSettingsActions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['toggle'] = var4;
    var2 = function clearAll() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = var2.enabled;
            var7 = var1.bind(var2)();
            var1 = undefined;
            var2 = false;
            for(var3 in var7)
case 4:
            {
case 2:
                var10 = var3;
                var9 = _closure1_slot3;
                var9 = var9.bind(var1)(var10, var2);
                _fun0002_ip = 4; continue _fun0002;
            }
case 5:
            return var1;
        }
    };
    var3['clearAll'] = var2;
    return var1;
})();