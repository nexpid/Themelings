// app/modules/user_settings/native/defs/BugReporterSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {};
    var10 = 5;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var12 = var11.intl;
    var11 = var12.string;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.t;
    var10 = var10./tZh0A;
    var10 = var11.bind(var12)(var10);
    var2['title'] = var10;
    var10 = null;
    var2['parent'] = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.BugIcon;
    var2['IconComponent'] = var10;
    var9 = function handleBugReporterSettingPress() {
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
    var2['onPress'] = var9;
    var2['withArrow'] = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.useBugReporterExperimentSettingPredicate;
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/BugReporterSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();