// app/modules/safety_education/hooks/useCanSeeSafetyEducationBlockMuteCoachmark.tsx
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_education/hooks/useCanSeeSafetyEducationBlockMuteCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var1 = var7[var1];
            var6 = undefined;
            var2 = var4.bind(var6)(var1);
            var1 = var2.useIsSafetyConsumerEducationBlockMuteEnabled;
            var1 = var1.bind(var2)();
            var2 = 2;
            var2 = var7[var2];
            var9 = var4.bind(var6)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var9)(var5, var2);
            var2 = 3;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useUserIsInLargeGuilds;
            var2 = var2.bind(var4)();
            if(!var1) { _fun0001_ip = 138; continue _fun0001 }
 104:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isNewUser;
            var3 = var3.bind(var4)(var5);
            var1 = !var3;
 138:
            if(!var1) { _fun0001_ip = 144; continue _fun0001 }
 141:
            var1 = var2;
 144:
            return var1;
        }
    };
    var3['useCanSeeSafetyEducationBlockMuteCoachmark'] = var2;
    return var1;
})();