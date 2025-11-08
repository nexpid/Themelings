// app/modules/user_settings/native/defs/EnableReducedMotionSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 5;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.e3TR1b;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var10;
    var9 = var9.ACCESSIBILITY;
    var2['parent'] = var9;
    var9 = function useReducedMotionSettingValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var9;
    var9 = function onReducedMotionSettingValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPrefersReducedMotion;
            var2 = 'no-preference';
            var5 = arg1;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'reduce';
case 2:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var9 = function useDescription() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure1_slot3;
                var3 = var1.visible;
                var6 = undefined;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure1_slot3;
                var3 = var3.enabled;
                var1 = undefined;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 6;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.1y+WEi;
                var1 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useDescription'] = var9;
    var8 = function useIsDisabled() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot3;
                var1 = var1.visible;
                if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var2 = _closure1_slot3;
                var1 = var2.enabled;
case 7:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useIsDisabled'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/EnableReducedMotionSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();