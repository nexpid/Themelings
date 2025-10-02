// app/modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function shouldShowMembershipVerificationGate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var3 = _closure1_slot2;
            var1[2] = var3;
            var2 = var1;
case 2:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var2 = var2 === var5;
            var4 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3;
case 4:
            var3 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var6().value;
            var7 = var1;
            var7 = var7 === var5;
            var3 = undefined;
            var2 = var7;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = var9;
            var2 = var7;
case 6:
            var7 = undefined;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var6().value;
            var6 = var1;
            var6 = var6 === var5;
            var7 = undefined;
            var2 = var6;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var7 = var9;
            var2 = var6;
case 9:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1.return();
case 12:
            var2 = null;
            if(!(var2 != var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var4.getGuild;
            var4 = var1.bind(var4)(var8);
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var6 = var2 != var3;
            var1 = false;
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var7.getMember;
            var3 = var3.id;
            var6 = var6.bind(var7)(var8, var3);
            var7 = var2 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var6.isPending;
case 18:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var3;
case 20:
            var1 = var2;
case 16:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.guildHasVerificationGate;
            var2 = var2.bind(var3)(var4);
            var2 = !var2;
            var1 = !var2;
case 22:
            return var1;
case 14:
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
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
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
case 24:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useShowMemberVerificationGate'] = var2;
    return var1;
})();