// app/modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function canToggleCommunicationDisableOnUser(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[2];
            var10 = undefined;
            if(!(var2 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot6;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var3 = _closure1_slot5;
            var1[2] = var3;
            var2 = var1;
case 2:
            var5 = var2;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var2 = var2 === var10;
            var3 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4;
case 4:
            var4 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var5().value;
            var6 = var1;
            var6 = var6 === var10;
            var4 = undefined;
            var2 = var6;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var7;
            var2 = var6;
case 6:
            var8 = undefined;
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var10;
            var8 = undefined;
            var2 = var5;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var8 = var6;
            var2 = var5;
case 9:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1.return();
case 12:
            var2 = var4.getGuild;
            var1 = arg1;
            var7 = var2.bind(var4)(var1);
            var2 = var3.getUser;
            var1 = arg2;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var2 != var6;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var6.isNonUserBot;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = _closure1_slot3;
            var3 = var3.bind(var10)(var7, var6);
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
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
case 20:
            var3 = !var3;
            if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var8.canManageUser;
            var4 = _closure1_slot7;
            var4 = var4.MODERATE_MEMBERS;
            var3 = var5.bind(var8)(var4, var6, var7);
case 22:
            var2 = var3;
case 18:
            var1 = var2;
case 16:
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