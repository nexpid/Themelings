// app/modules/user_settings/native/defs/BugReporterSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var2 = function useBugReporterExperimentSettingPredicate() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useConfig;
        var1 = {};
        var4 = 'native-settings';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.hasBugReporterAccess;
        return var1;
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createPressable;
    var4 = {};
    var11 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["/tZh0A"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['useTitle'] = var11;
    var11 = null;
    var4['parent'] = var11;
    var11 = 7;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.BugIcon;
    var4['IconComponent'] = var11;
    var10 = function handleBugReporterSettingPress() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getField;
            var1 = 'isReportOpen';
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var5 = true;
            var1['isReportOpen'] = var5;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 1;
            var2 = var1[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.pushLazy;
            var5 = _closure1_slot0;
            var4 = 3;
            var4 = var1[var4];
            var5 = var5.bind(var6)(var4);
            var4 = 2;
            var4 = var1[var4];
            var1 = var1.paths;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var4['onPress'] = var10;
    var4['withArrow'] = var9;
    var4['usePredicate'] = var2;
    var4 = var5.bind(var8)(var4);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/BugReporterSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useBugReporterExperimentSettingPredicate'] = var2;
    return var1;
})();