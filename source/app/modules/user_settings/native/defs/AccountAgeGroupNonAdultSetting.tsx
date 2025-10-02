// app/modules/user_settings/native/defs/AccountAgeGroupNonAdultSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var8 = var2.MobileSetting;
    var2 = {};
    var9 = 1;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.RendererType;
    var9 = var9.PRESSABLE;
    var2['type'] = var9;
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
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
    var2['title'] = var9;
    var8 = var8.ACCOUNT;
    var2['parent'] = var8;
    var8 = function useAccountAgeGroupNonAdultSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.useIsAgeVerified;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.UX0OdX;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2.sK0dmJ;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = function onAccountAgeGroupNonAdultSettingPress() {
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 2;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.showAgeVerificationGetStartedModal;
        var2 = {};
        var6 = _closure1_slot0;
        var5 = 3;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.AgeVerificationModalEntryPoint;
        var5 = var5.ACCOUNT_AGE_GROUP;
        var2['entryPoint'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var8;
    var2['withArrow'] = var7;
    var4 = function AccountAgeGroupNonAdultSettingPredicate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var2 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var2);
            var2 = var3.useIsAgeVerified;
            var2 = var2.bind(var3)();
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var1 = var3.useIsVerifiedTeen;
            var3 = var1.bind(var3)();
            var1 = 6;
            var1 = var6[var1];
            var5 = var5.bind(var4)(var1);
            var4 = var5.useIsEligibleForSettingsDefaultsAggregate;
            var1 = 'explicit_media_redaction_utils';
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = !var2;
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var3;
case 7:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/AccountAgeGroupNonAdultSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();