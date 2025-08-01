// app/modules/main_tabs_v2/native/settings/definitions/BugReporterSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = 5;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var10 = var9.intl;
    var9 = var10.string;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.t;
    var8 = var8./tZh0N;
    var8 = var9.bind(var10)(var8);
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.BugIcon;
    var2['IconComponent'] = var8;
    var7 = function handleBugReporterSettingPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getField;
            var1 = 'isReportOpen';
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 116; continue _fun0001 }
 25:
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var5 = true;
            var1['isReportOpen'] = var5;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 2;
            var2 = var1[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.pushLazy;
            var5 = _closure1_slot0;
            var4 = 4;
            var4 = var1[var4];
            var5 = var5.bind(var6)(var4);
            var4 = 3;
            var4 = var1[var4];
            var1 = var1.paths;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
 116:
            var1 = undefined;
            return var1;
        }
    };
    var2['onPress'] = var7;
    var2['withArrow'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useBugReporterExperimentSettingPredicate;
    var2['usePredicate'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/BugReporterSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();