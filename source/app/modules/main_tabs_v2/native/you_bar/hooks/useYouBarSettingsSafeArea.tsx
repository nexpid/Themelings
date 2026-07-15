// app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var2 = function useYouBarSettingsOutsideSafeAreaTop() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var1 = 2;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 3;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useYouBarSettingsCustomHeaderPaddingTop() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            var2 = var2.top;
            var1 = _closure1_slot3;
            var3 = var1.bind(var3)();
            var1 = 16;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useYouBarSettingsCustomHeaderPaddingTop'] = var4;
    var3['useYouBarSettingsOutsideSafeAreaTop'] = var2;
    return var1;
})();