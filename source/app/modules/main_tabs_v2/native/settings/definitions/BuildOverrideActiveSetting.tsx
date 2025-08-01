// app/modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function useBuildOverrideActive() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot2;
                var1 = var3.getCurrentBuildOverride;
                var1 = var1.bind(var3)();
                var5 = var1.overrides;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                var1 = undefined;
                if(var6) { _fun0001_ip = 80; continue _fun0001 }
 36:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 5;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DEVICE_FIELD;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 80; continue _fun0001 }
 75:
                var1 = var2.id;
 80:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RendererType;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
    var2 = {'type': null, 'title': 'Build Override Active', 'parent': null};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RefreshIcon;
    var2['IconComponent'] = var8;
    var8 = function useBuildOverrideActiveDescription() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot4;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = null;
            var3 = var1 != var6;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 76; continue _fun0002 }
 24:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.DevToolsContentSubLabel;
            var2 = {};
            var7 = 'Build override: ';
            var2['label'] = var7;
            var2['value'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 76:
            return var1;
        }
    };
    var2['useDescription'] = var8;
    var8 = function useHasBuildOverrideActive() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.useStaffOrDevEnvSettingPredicate;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot4;
            var3 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 52:
            var1 = var2;
 55:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var7 = function handleBuildOverrideActivePress() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
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
    var2['onPress'] = var7;
    var2['withArrow'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/BuildOverrideActiveSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();