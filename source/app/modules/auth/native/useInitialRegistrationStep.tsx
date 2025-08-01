// app/modules/auth/native/useInitialRegistrationStep.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function isFirstStep(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot6;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 4;
            var2 = var2[var5];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ORDERED_REGISTRATION_STEPS_BY_VARIANT;
            var2 = var2[var3];
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 72; continue _fun0001 }
 49:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var2 = var1.DEFAULT_REGISTRATION_STEPS;
 72:
            var1 = 1;
            var2 = var2[var1];
            var1 = arg1;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getRegistrationVariant;
    var _closure1_slot6 = var7;
    var4 = var4.resetRegistration;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/useInitialRegistrationStep.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInitialRegistrationStep(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var8 = var5.bind(var1)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getAuthenticationConsentRequired;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var7.bind(var8)(var5, var3);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot3;
        var7 = var5.useEffect;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var6;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = _closure1_slot8;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                if(!var3) { _fun0002_ip = 34; continue _fun0002 }
 24:
                var5 = _closure2_slot1;
                var4 = null;
                var3 = var4 == var5;
 34:
                if(!var3) { _fun0002_ip = 67; continue _fun0002 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getLocationMetadata;
                var2 = var2.bind(var3)();
 67:
                return var1;
            }
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                if(var2) { _fun0003_ip = 26; continue _fun0003 }
 24:
                return var1;
 26:
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure1_slot7;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var4 = _closure1_slot4;
                        var3 = var4.isAuthenticated;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0004_ip = 60; continue _fun0004 }
 30:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 6;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.loginReset;
                        var2 = var2.bind(var3)();
 60:
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();