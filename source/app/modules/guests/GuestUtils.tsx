// app/modules/guests/GuestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildMemberFlags;
    var _closure1_slot2 = var2;
    var2 = {};
    var4 = function canAcceptInvite(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var2 = arg1;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var3 = var2().value;
            var2 = var1;
            var8 = undefined;
            var2 = var2 === var8;
            var6 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1.return();
case 4:
            var2 = var7.guild;
            var9 = null;
            var1 = var9 == var2;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var10 = 1;
            var4 = var4[var10];
            var11 = var5.bind(var8)(var4);
            var5 = var11.hasFlag;
            var4 = var6.getSelfMember;
            var2 = var2.id;
            var4 = var4.bind(var6)(var2);
            var6 = var9 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var4.flags;
case 8:
            var12 = var9 != var2;
            var4 = 0;
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var2;
case 10:
            var2 = _closure1_slot2;
            var2 = var2.IS_GUEST;
            var2 = var5.bind(var11)(var4, var2);
            var2 = !var2;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var10];
            var5 = var5.bind(var8)(var4);
            var4 = var5.hasFlag;
            var7 = var7.flags;
            var9 = var9 != var7;
            var6 = 0;
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var7;
case 14:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 2;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.GuildInviteFlags;
            var3 = var3.IS_GUEST_INVITE;
            var2 = var4.bind(var5)(var6, var3);
case 12:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var2['canAcceptInvite'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guests/GuestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();