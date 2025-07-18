// app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreatorMonetizationIneligibleReasons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var1 = var2[var1];
            var2 = undefined;
            var3 = var3.bind(var2)(var1);
            var1 = arg1;
            var5 = var3.bind(var2)(var1);
            var1 = null;
            var3 = var1 == var5;
            if(var3) { _fun0001_ip = 61; continue _fun0001 }
 41:
            var4 = var5.flatMap;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.checked;
                    if(var2) { _fun0002_ip = 27; continue _fun0002 }
 12:
                    var2 = var1.key;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0002_ip = 31; continue _fun0002;
 27:
                    var1 = new Array(0);
 31:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
 61:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 73; continue _fun0001 }
 70:
            var1 = var2;
 73:
            return var1;
        }
    };
    var3['useCreatorMonetizationIneligibleReasons'] = var2;
    return var1;
})();