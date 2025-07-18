// app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
                if(var5) { _fun0001_ip = 51; continue _fun0001 }
 46:
                var2 = var4.current;
 51:
                if(!(var3 == var2)) { _fun0001_ip = 57; continue _fun0001 }
 55:
                return var1;
 57:
                var3 = var4.addListener;
                var2 = 'state';
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.isModalOpen;
                        var2 = 'hcaptcha';
                        var2 = var3.bind(var5)(var2);
                        if(!var2) { _fun0002_ip = 53; continue _fun0002 }
 45:
                        var3 = _closure1_slot3;
                        var2 = var3.bind(var1)();
 53:
                        if(!var2) { _fun0002_ip = 100; continue _fun0002 }
 56:
                        var3 = _closure2_slot0;
                        var2 = {};
                        var5 = _closure1_slot4;
                        var5 = var5.CAPTCHA;
                        var2['step'] = var5;
                        var4 = _closure1_slot5;
                        var4 = var4.VIEWED;
                        var2['actionType'] = var4;
                        var2 = var3.bind(var1)(var2);
 100:
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