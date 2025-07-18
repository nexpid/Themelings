// app/modules/guild_role_subscriptions/RolePermissionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = native4;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var4 = function isChannelAccessDeniedBy(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 142; continue _fun0001 }
 18:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 1;
            var2 = var2[var9];
            var8 = undefined;
            var10 = var3.bind(var8)(var2);
            var7 = var10.has;
            var3 = var5.deny;
            var2 = _closure1_slot2;
            var2 = var2.VIEW_CHANNEL;
            var2 = var7.bind(var10)(var3, var2);
            var3 = !var2;
            var2 = !var3;
            if(!var3) { _fun0001_ip = 139; continue _fun0001 }
 79:
            var3 = var6.isGuildVocal;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0001_ip = 136; continue _fun0001 }
 92:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var7.has;
            var5 = var5.deny;
            var4 = _closure1_slot2;
            var4 = var4.CONNECT;
            var3 = var6.bind(var7)(var5, var4);
 136:
            var2 = var3;
 139:
            var1 = var2;
 142:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/RolePermissionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isAllChannelsRole(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.has;
        var2 = arg1;
        var2 = var2.permissions;
        var1 = _closure1_slot2;
        var1 = var1.VIEW_CHANNEL;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['isAllChannelsRole'] = var5;
    var3['isChannelAccessDeniedBy'] = var4;
    var2 = function isChannelAccessGrantedBy(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0002_ip = 167; continue _fun0002 }
 18:
            var2 = _closure1_slot3;
            var9 = undefined;
            var2 = var2.bind(var9)(var7, var6);
            var2 = !var2;
            if(!var2) { _fun0002_ip = 164; continue _fun0002 }
 42:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var10 = 1;
            var3 = var3[var10];
            var11 = var4.bind(var9)(var3);
            var8 = var11.has;
            var4 = var6.allow;
            var3 = _closure1_slot2;
            var3 = var3.VIEW_CHANNEL;
            var3 = var8.bind(var11)(var4, var3);
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0002_ip = 161; continue _fun0002 }
 98:
            var4 = var7.isGuildVocal;
            var4 = var4.bind(var7)();
            var4 = !var4;
            if(var4) { _fun0002_ip = 158; continue _fun0002 }
 114:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var8 = var8.bind(var9)(var7);
            var7 = var8.has;
            var6 = var6.allow;
            var5 = _closure1_slot2;
            var5 = var5.CONNECT;
            var4 = var7.bind(var8)(var6, var5);
 158:
            var3 = var4;
 161:
            var2 = var3;
 164:
            var1 = var2;
 167:
            return var1;
        }
    };
    var3['isChannelAccessGrantedBy'] = var2;
    return var1;
})();