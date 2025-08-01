// app/modules/settings/getSettingsOverrideReason.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SettingsOverrideReasonKeys;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/getSettingsOverrideReason.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSettingsOverrideReason(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot2;
            var2 = var2.REDUCED_MOTION;
            if(!(var2 !== var3)) { _fun0001_ip = 99; continue _fun0001 }
 20:
            var2 = _closure1_slot2;
            var2 = var2.REDUCED_MOTION_STICKERS;
            if(!(var2 !== var3)) { _fun0001_ip = 38; continue _fun0001 }
 34:
            var2 = undefined;
            return var2;
 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.2ExvRk;
            var2 = var3.bind(var4)(var2);
            return var2;
 99:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.1dT9V1;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();