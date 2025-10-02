// app/modules/user_settings/native/defs/AccountAgeGroupAdultSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.STATIC;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1./52UY2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.ACCOUNT;
    var2['parent'] = var7;
    var7 = function useTrailing() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.XxRj7e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTrailing'] = var7;
    var4 = function useAccountAgeGroupAdultSettingPredicate() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var2 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var2);
            var2 = var3.useIsAgeVerified;
            var3 = var2.bind(var3)();
            var1 = var6[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useIsVerifiedTeen;
            var2 = var1.bind(var2)();
            var1 = 3;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var4 = var5.useIsEligibleForSettingsDefaultsAggregate;
            var1 = 'explicit_media_redaction_utils';
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 89; continue _fun0001 }
 86:
            var1 = var3;
 89:
            if(!var1) { _fun0001_ip = 95; continue _fun0001 }
 92:
            var1 = !var2;
 95:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AccountAgeGroupAdultSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();