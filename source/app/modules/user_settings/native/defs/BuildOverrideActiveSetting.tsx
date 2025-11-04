// app/modules/user_settings/native/defs/BuildOverrideActiveSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function useBuildOverrideActive() {
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot2;
                var1 = var3.getCurrentBuildOverride;
                var1 = var1.bind(var3)();
                var5 = var1.overrides;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                var1 = undefined;
                if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DEVICE_FIELD;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var1 = var2.id;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
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
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
    var2 = 7;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {'title': 'Build Override Active', 'parent': null};
    var10 = 8;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.RefreshIcon;
    var2['IconComponent'] = var10;
    var10 = function useBuildOverrideActiveDescription() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot4;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = null;
            var3 = var1 != var6;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.DevToolsContentSubLabel;
            var2 = {};
            var7 = 'Build override: ';
            var2['label'] = var7;
            var2['value'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var2['useDescription'] = var10;
    var10 = function useHasBuildOverrideActive() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.useStaffOrDeveloperSettingPredicate;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot4;
            var3 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var2['usePredicate'] = var10;
    var9 = function handleBuildOverrideActivePress() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.navigateToDevTools;
        var2 = {};
        var5 = 'buildOverride';
        var2['screenKey'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var9;
    var2['withArrow'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/BuildOverrideActiveSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();