// app/modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.St+DJK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var10;
    var9 = var9.ACCESSIBILITY;
    var2['parent'] = var9;
    var9 = function useReducedMotionSyncSettingValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var2 = var1.rawPrefersReducedMotion;
            var1 = 'auto';
            var1 = var1 === var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var9;
    var8 = function onReducedMotionSyncSettingValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot2;
            var5 = var2.systemPrefersReducedMotion;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPrefersReducedMotion;
            var2 = 'auto';
            var6 = arg1;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5;
case 2:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['onValueChange'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();