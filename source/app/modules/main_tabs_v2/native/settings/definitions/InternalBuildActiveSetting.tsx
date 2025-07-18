// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = native3;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = {'type': null, 'title': 'Internal Build Active', 'parent': null};
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.RendererType;
    var7 = var7.STATIC;
    var2['type'] = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.MobilePhoneSettingsIcon;
    var2['IconComponent'] = var7;
    var7 = function useInternalBuildActiveDescription() {
        var1 = 'Build installed from builds.discord.tools';
        return var1;
    };
    var2['useDescription'] = var7;
    var4 = function useHasCheckNativeUpdateSetting() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.useStaffOrDevEnvSettingPredicate;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot2;
            var1 = var1.hasUpdatesConfigured;
            if(!var1) { _fun0001_ip = 51; continue _fun0001 }
 48:
            var1 = var2;
 51:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();