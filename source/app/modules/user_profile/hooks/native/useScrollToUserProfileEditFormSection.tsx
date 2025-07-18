// app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.findNodeHandle;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useScrollToUserProfileEditFormSection(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot3;
        var5 = var4.useRef;
        var1 = {};
        var1 = var5.bind(var4)(var1);
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 4;
        var6 = var6[var5];
        var5 = undefined;
        var7 = var7.bind(var5)(var6);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = _closure1_slot5;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var3 = var6.bind(var7)(var5, var3);
        var _closure2_slot3 = var3;
        var3 = var4.useEffect;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 46; continue _fun0001 }
 16:
                var2 = _closure2_slot2;
                var5 = var2.current;
                var6 = var3 == var5;
                var2 = undefined;
                if(var6) { _fun0001_ip = 42; continue _fun0001 }
 34:
                var4 = _closure2_slot1;
                var2 = var5[var4];
 42:
                var1 = var3 != var2;
 46:
                if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 49:
                var1 = global;
                var4 = var1.setTimeout;
                var3 = undefined;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot2;
                        var3 = var2.current;
                        var2 = _closure2_slot1;
                        var6 = var3[var2];
                        var4 = _closure1_slot4;
                        var1 = _closure2_slot0;
                        var3 = var1.current;
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var3 = null;
                        if(!(var3 != var5)) { _fun0002_ip = 115; continue _fun0002 }
 49:
                        if(!(var3 != var6)) { _fun0002_ip = 74; continue _fun0002 }
 53:
                        var4 = var6.measureLayout;
                        var3 = function(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = _closure2_slot0;
                                var3 = var1.current;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0003_ip = 57; continue _fun0003 }
 18:
                                var2 = var3.scrollTo;
                                var1 = {};
                                var5 = arg1;
                                var1['x'] = var5;
                                var5 = arg2;
                                var1['y'] = var5;
                                var4 = _closure2_slot3;
                                var4 = !var4;
                                var1['animated'] = var4;
                                var1 = var2.bind(var3)(var1);
 57:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var4.bind(var6)(var5, var3);
 74:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.clearScrollPosition;
                        var2 = _closure1_slot6;
                        var2 = var2.PROFILE_CUSTOMIZATION;
                        var2 = var3.bind(var4)(var2);
 115:
                        return var1;
                    }
                };
                var1 = 0;
                var1 = var4.bind(var3)(var2, var1);
 76:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();