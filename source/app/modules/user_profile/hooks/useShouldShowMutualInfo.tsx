// app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useShouldShowMutualInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowMutualInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var9)(var5, var3);
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)(var2);
            var1 = 3;
            var1 = var7[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var7.useIsEligibleForUserProfileBlockeeHideMutuals;
            var1 = {};
            var8 = 'useShouldShowMutualInfo';
            var1['location'] = var8;
            var1 = var6.bind(var7)(var1);
            var1 = !var1;
            if(var1) { _fun0001_ip = 154; continue _fun0001 }
 120:
            var6 = null;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var4 = var5.id;
 136:
            var2 = var2.id;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var2 = !var3;
 151:
            var1 = var2;
 154:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();