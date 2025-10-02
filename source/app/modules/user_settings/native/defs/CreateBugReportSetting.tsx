// app/modules/user_settings/native/defs/CreateBugReportSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.RendererType;
    var7 = var7.TOGGLE;
    var2['type'] = var7;
    var7 = 5;
    var8 = var6[var7];
    var8 = var5.bind(var1)(var8);
    var9 = var8.intl;
    var8 = var9.string;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.t;
    var7 = var7.aIkGJC;
    var7 = var8.bind(var9)(var7);
    var2['title'] = var7;
    var7 = null;
    var2['parent'] = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.WrenchIcon;
    var2['IconComponent'] = var7;
    var7 = function handleCreateBugReportSettingToggle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.setDeveloperOptionSettings;
            var3 = {};
            var7 = arg1;
            if(var7) { _fun0001_ip = 82; continue _fun0001 }
 39:
            var7 = false;
            var3['bugReporterEnabled'] = var7;
            var7 = var5.bind(var6)(var3);
            var8 = _closure1_slot1;
            var7 = 3;
            var7 = var4[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.terminate;
            var7 = true;
            var7 = var8.bind(var9)(var7);
            _fun0001_ip = 120; continue _fun0001;
 82:
            var7 = true;
            var3['bugReporterEnabled'] = var7;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.initialize;
            var2 = var2.bind(var3)();
 120:
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var7 = function useCreateBugReportSettingToggleValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot3;
            var1 = var1.isBugReporterEnabled;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var7;
    var4 = function useCreateBugReportSettingDescription() {
        var1 = 'Photo permission is required';
        return var1;
    };
    var2['useDescription'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useBugReporterExperimentSettingPredicate;
    var2['usePredicate'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/CreateBugReportSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();