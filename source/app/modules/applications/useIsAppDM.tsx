// app/modules/applications/useIsAppDM.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useIsAppDM.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsAppDM(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot2;
                var2 = var4.getChannel;
                var1 = _closure2_slot0;
                var7 = var2.bind(var4)(var1);
                var4 = null;
                var1 = var4 == var7;
                var5 = undefined;
                if(var1) { _fun0001_ip = 45; continue _fun0001 }
 35:
                var1 = var7.isDM;
                var5 = var1.bind(var7)();
 45:
                var1 = true;
                if(!(var1 === var5)) { _fun0001_ip = 97; continue _fun0001 }
 51:
                var6 = _closure1_slot3;
                var5 = var6.getUser;
                var3 = var7.getRecipientId;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var6)(var3);
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 91; continue _fun0001 }
 85:
                var2 = var3.bot;
 91:
                var1 = var1 === var2;
                return var1;
 97:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsAppDM'] = var2;
    return var1;
})();