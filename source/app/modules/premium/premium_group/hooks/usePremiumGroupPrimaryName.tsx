// app/modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumGroupPrimaryName() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[0];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = true;
case 2:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 0;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.bind(var2)(var4);
            var5 = var1.premiumGroupMembers;
            var6 = null;
            var4 = var6 == var5;
            var1 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.primary;
case 4:
            var4 = var6 != var1;
            var1 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.nameFromUser;
            var6 = var6 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var5.primary;
case 8:
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();