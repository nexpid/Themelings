// app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.doesRegistrationHaveIdentityType;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot4 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsHCaptchaModalOpenTracking() {
        var5 = _closure1_slot2;
        var4 = var5.useContext;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var6.bind(var1)(var3);
        var3 = var3.TrackRegistrationContext;
        var6 = var4.bind(var5)(var3);
        var _closure2_slot0 = var6;
        var4 = var5.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var4.current;
case 2:
                if(!(var3 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                return var1;
case 4:
                var3 = var4.addListener;
                var2 = 'state';
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.isModalOpen;
                        var2 = 'hcaptcha';
                        var2 = var3.bind(var5)(var2);
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = _closure1_slot3;
                        var2 = var3.bind(var1)();
case 6:
                        if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = _closure2_slot0;
                        var2 = {};
                        var5 = _closure1_slot4;
                        var5 = var5.CAPTCHA;
                        var2['step'] = var5;
                        var4 = _closure1_slot5;
                        var4 = var4.VIEWED;
                        var2['actionType'] = var4;
                        var2 = var3.bind(var1)(var2);
case 8:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useIsHCaptchaModalOpenTracking'] = var2;
    return var1;
})();