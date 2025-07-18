// app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var5 = undefined;
            var8 = var4.bind(var5)(var2);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var3 = var1.privacy;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 50; continue _fun0002 }
 30:
                    var3 = var3.inappropriateConversationWarnings;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 50; continue _fun0002 }
 45:
                    var2 = var3.value;
 50:
                    var1 = var1 == var2;
                    if(var1) { _fun0002_ip = 60; continue _fun0002 }
 57:
                    var1 = var2;
 60:
                    return var1;
                }
            };
            var3 = var3.bind(var8)(var2, var1);
            var1 = 3;
            var1 = var7[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useUserIsTeen;
            var2 = var1.bind(var2)();
            var1 = 4;
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.useIsEligibleForInappropriateConversationDefaultOn;
            var1 = {};
            var8 = 'useSafetyAlertsSettingOrDefault';
            var1['location'] = var8;
            var1 = var4.bind(var7)(var1);
            var4 = !var2;
            if(var4) { _fun0001_ip = 132; continue _fun0001 }
 129:
            var4 = !var1;
 132:
            var1 = !var4;
            if(!var4) { _fun0001_ip = 177; continue _fun0001 }
 138:
            if(var2) { _fun0001_ip = 168; continue _fun0001 }
 141:
            var4 = null;
            var4 = var4 == var6;
            var5 = undefined;
            if(var4) { _fun0001_ip = 162; continue _fun0001 }
 152:
            var4 = var6.isStaff;
            var5 = var4.bind(var6)();
 162:
            var4 = true;
            var2 = var4 === var5;
 168:
            if(!var2) { _fun0001_ip = 174; continue _fun0001 }
 171:
            var2 = var3;
 174:
            var1 = var2;
 177:
            return var1;
        }
    };
    var3['useSafetyAlertsSettingOrDefault'] = var2;
    return var1;
})();