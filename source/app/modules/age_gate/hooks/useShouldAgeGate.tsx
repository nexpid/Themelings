// app/modules/age_gate/hooks/useShouldAgeGate.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/hooks/useShouldAgeGate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 3;
            var5 = var2[var8];
            var6 = undefined;
            var10 = var4.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot2;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var10)(var7, var5);
            var _closure2_slot1 = var5;
            var2 = var2[var8];
            var9 = var4.bind(var6)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var7.bind(var9)(var4, var2);
            var4 = null;
            var7 = var4 == var2;
            var4 = undefined;
            if(var7) { _fun0001_ip = 120; continue _fun0001 }
 114:
            var4 = var2.nsfwAllowed;
 120:
            var2 = true;
            var4 = var2 === var4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var8 = var7[var8];
            var9 = var2.bind(var6)(var8);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot3;
                    var2 = var3.didAgree;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
 31:
                    var4 = _closure2_slot1;
                    var1 = var4.guild_id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var1);
            var1 = 4;
            var1 = var7[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isChannelNSFW;
            var1 = var1.bind(var2)(var5);
            if(!var1) { _fun0001_ip = 209; continue _fun0001 }
 197:
            var2 = !var4;
            if(!var4) { _fun0001_ip = 206; continue _fun0001 }
 203:
            var2 = !var3;
 206:
            var1 = var2;
 209:
            return var1;
        }
    };
    var3['useShouldAgeGateChannel'] = var2;
    return var1;
})();