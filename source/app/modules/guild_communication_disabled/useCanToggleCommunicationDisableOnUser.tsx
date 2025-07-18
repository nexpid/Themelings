// app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function canToggleCommunicationDisableOnUser(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[2];
            var10 = undefined;
            if(!(var2 === var10)) { _fun0001_ip = 43; continue _fun0001 }
 9:
            var4 = _closure1_slot6;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var3 = _closure1_slot5;
            var1[2] = var3;
            var2 = var1;
 43:
            var5 = var2;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var2 = var2 === var10;
            var3 = undefined;
            if(var2) { _fun0001_ip = 68; continue _fun0001 }
 65:
            var3 = var4;
 68:
            var4 = undefined;
            if(var2) { _fun0001_ip = 98; continue _fun0001 }
 73:
            var7 = var5().value;
            var6 = var1;
            var6 = var6 === var10;
            var4 = undefined;
            var2 = var6;
            if(var6) { _fun0001_ip = 98; continue _fun0001 }
 92:
            var4 = var7;
            var2 = var6;
 98:
            var8 = undefined;
            if(var2) { _fun0001_ip = 128; continue _fun0001 }
 103:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var10;
            var8 = undefined;
            var2 = var5;
            if(var5) { _fun0001_ip = 128; continue _fun0001 }
 122:
            var8 = var6;
            var2 = var5;
 128:
            if(var2) { _fun0001_ip = 134; continue _fun0001 }
 131:
            var1.return();
 134:
            var2 = var4.getGuild;
            var1 = arg1;
            var7 = var2.bind(var4)(var1);
            var2 = var3.getUser;
            var1 = arg2;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0001_ip = 174; continue _fun0001 }
 170:
            var1 = var2 != var6;
 174:
            if(!var1) { _fun0001_ip = 303; continue _fun0001 }
 180:
            var2 = var6.isNonUserBot;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 300; continue _fun0001 }
 196:
            var3 = _closure1_slot3;
            var3 = var3.bind(var10)(var7, var6);
            if(var3) { _fun0001_ip = 268; continue _fun0001 }
 212:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 5;
            var5 = var11[var5];
            var10 = var9.bind(var10)(var5);
            var9 = var10.can;
            var5 = {};
            var11 = _closure1_slot7;
            var11 = var11.ADMINISTRATOR;
            var5['permission'] = var11;
            var5['user'] = var6;
            var5['context'] = var7;
            var3 = var9.bind(var10)(var5);
 268:
            var3 = !var3;
            if(!var3) { _fun0001_ip = 297; continue _fun0001 }
 274:
            var5 = var8.canManageUser;
            var4 = _closure1_slot7;
            var4 = var4.MODERATE_MEMBERS;
            var3 = var5.bind(var8)(var4, var6, var7);
 297:
            var2 = var3;
 300:
            var1 = var2;
 303:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.isGuildOwner;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useCanToggleCommunicationDisableOnUser(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot6;
        var3 = new Array(3);
        var3[0] = var8;
        var8 = _closure1_slot4;
        var3[1] = var8;
        var2 = _closure1_slot5;
        var3[2] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var6 = _closure1_slot6;
            var2 = new Array(3);
            var2[0] = var6;
            var6 = _closure1_slot4;
            var2[1] = var6;
            var1 = _closure1_slot5;
            var2[2] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['canToggleCommunicationDisableOnUser'] = var2;
    return var1;
})();