// app/modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx
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
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupColorConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = {};
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'text-muted';
            var2['textColor'] = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.colors;
            var1 = var1.TEXT_MUTED;
            var2['iconColor'] = var1;
            var1 = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = 'text-default';
            var2['textColor'] = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.colors;
            var3 = var3.TEXT_DEFAULT;
            var2['iconColor'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();