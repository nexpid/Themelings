// app/modules/user_settings/native/defs/InternalBuildActiveSetting.tsx
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
    var2 = 2;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createStatic;
    var2 = {'title': 'Internal Build Active', 'parent': null};
    var9 = 3;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.MobilePhoneSettingsIcon;
    var2['IconComponent'] = var9;
    var9 = function useInternalBuildActiveDescription() {
        var1 = 'Build installed from builds.discord.tools';
        return var1;
    };
    var2['useDescription'] = var9;
    var8 = function useHasCheckNativeUpdateSetting() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.useStaffOrDeveloperSettingPredicate;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot2;
            var1 = var1.hasUpdatesConfigured;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/InternalBuildActiveSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();