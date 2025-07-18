// app/modules/stage_channels/useGuildMemberDisplayRole.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = function getHighestHoistedRole(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = arguments[2];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 41; continue _fun0001 }
 15:
            var4 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
 41:
            var8 = var2;
            var1 = var8[Symbol.iterator];
            var8 = var1().next;
            var4 = var8().value;
            var2 = var1;
            var2 = var2 === var7;
            var3 = undefined;
            if(var2) { _fun0001_ip = 66; continue _fun0001 }
 63:
            var3 = var4;
 66:
            var4 = undefined;
            if(var2) { _fun0001_ip = 96; continue _fun0001 }
 71:
            var9 = var8().value;
            var8 = var1;
            var8 = var8 === var7;
            var4 = undefined;
            var2 = var8;
            if(var8) { _fun0001_ip = 96; continue _fun0001 }
 90:
            var4 = var9;
            var2 = var8;
 96:
            if(var2) { _fun0001_ip = 102; continue _fun0001 }
 99:
            var1.return();
 102:
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 191; continue _fun0001 }
 108:
            if(!(var1 != var5)) { _fun0001_ip = 191; continue _fun0001 }
 112:
            var2 = var3.getGuild;
            var6 = var2.bind(var3)(var6);
            if(!(var1 != var6)) { _fun0001_ip = 189; continue _fun0001 }
 126:
            var3 = var4.getMember;
            var2 = var6.id;
            var5 = var3.bind(var4)(var2, var5);
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0001_ip = 187; continue _fun0001 }
 152:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getHighestHoistedRole;
            var2 = var3.bind(var4)(var6, var5);
 187:
            return var2;
 189:
            return var1;
 191:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useGuildMemberDisplayRole.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useGuildMemberDisplayRole(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var6 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var6;
            var1 = _closure1_slot3;
            var2[1] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['getHighestHoistedRole'] = var2;
    return var1;
})();