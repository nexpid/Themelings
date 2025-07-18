// app/modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function shouldShowMembershipVerificationGate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 46; continue _fun0001 }
 12:
            var4 = _closure1_slot3;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var3 = _closure1_slot2;
            var1[2] = var3;
            var2 = var1;
 46:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var2 = var2 === var5;
            var4 = undefined;
            if(var2) { _fun0001_ip = 71; continue _fun0001 }
 68:
            var4 = var3;
 71:
            var3 = undefined;
            if(var2) { _fun0001_ip = 101; continue _fun0001 }
 76:
            var9 = var6().value;
            var7 = var1;
            var7 = var7 === var5;
            var3 = undefined;
            var2 = var7;
            if(var7) { _fun0001_ip = 101; continue _fun0001 }
 95:
            var3 = var9;
            var2 = var7;
 101:
            var7 = undefined;
            if(var2) { _fun0001_ip = 131; continue _fun0001 }
 106:
            var9 = var6().value;
            var6 = var1;
            var6 = var6 === var5;
            var7 = undefined;
            var2 = var6;
            if(var6) { _fun0001_ip = 131; continue _fun0001 }
 125:
            var7 = var9;
            var2 = var6;
 131:
            if(var2) { _fun0001_ip = 137; continue _fun0001 }
 134:
            var1.return();
 137:
            var2 = null;
            if(!(var2 != var8)) { _fun0001_ip = 261; continue _fun0001 }
 143:
            var1 = var4.getGuild;
            var4 = var1.bind(var4)(var8);
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var6 = var2 != var3;
            var1 = false;
            if(!var6) { _fun0001_ip = 216; continue _fun0001 }
 171:
            var6 = var7.getMember;
            var3 = var3.id;
            var6 = var6.bind(var7)(var8, var3);
            var7 = var2 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 203; continue _fun0001 }
 197:
            var3 = var6.isPending;
 203:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 213; continue _fun0001 }
 210:
            var2 = var3;
 213:
            var1 = var2;
 216:
            if(!var1) { _fun0001_ip = 259; continue _fun0001 }
 219:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.guildHasVerificationGate;
            var2 = var2.bind(var3)(var4);
            var2 = !var2;
            var1 = !var2;
 259:
            return var1;
 261:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx';
    var5 = var6.bind(var7)(var5);
    var3['shouldShowMembershipVerificationGate'] = var4;
    var2 = function useShowMemberVerificationGate(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot2;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 63; continue _fun0002 }
 16:
                var5 = _closure1_slot5;
                var4 = _closure2_slot0;
                var6 = _closure1_slot3;
                var3 = new Array(3);
                var3[0] = var6;
                var6 = _closure1_slot4;
                var3[1] = var6;
                var2 = _closure1_slot2;
                var3[2] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 63:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useShowMemberVerificationGate'] = var2;
    return var1;
})();