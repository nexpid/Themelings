// app/modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var6 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var10;
    var4 = function useCanAccessMemberSafetyPage(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot6;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var5 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var5;
            var1 = _closure1_slot6;
            var2[1] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var10[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.MemberSafetyPagePermissions;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot8 = var5;
    var7 = function getContextForPermission(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 35; continue _fun0001 }
 9:
            var5 = _closure1_slot7;
            var2 = new Array(2);
            var2[0] = var5;
            var3 = _closure1_slot8;
            var2[1] = var3;
            var4 = var2;
 35:
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var1)(var4, var2);
            var2 = 0;
            var5 = var3[var2];
            var2 = 1;
            var3 = var3[var2];
            var4 = var5.getGuild;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function canAccessMemberSafetyPage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 35; continue _fun0002 }
 9:
            var5 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var5;
            var2 = _closure1_slot6;
            var1[1] = var2;
            var4 = var1;
 35:
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function hasBulkBanningPermissions(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0003_ip = 35; continue _fun0003 }
 9:
            var5 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var5;
            var2 = _closure1_slot6;
            var1[1] = var2;
            var4 = var1;
 35:
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var8 = 9;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getContextForPermission'] = var7;
    var3['canAccessMemberSafetyPage'] = var6;
    var3['hasBulkBanningPermissions'] = var5;
    var3['useCanAccessMemberSafetyPage'] = var4;
    var4 = function useCanAccessBulkBanningFeature(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var1 = _closure1_slot12;
            var6 = undefined;
            var1 = var1.bind(var6)(var7);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var8 = _closure1_slot4;
            var4 = new Array(2);
            var4[0] = var8;
            var3 = _closure1_slot6;
            var4[1] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                var4 = _closure1_slot11;
                var3 = _closure2_slot0;
                var5 = _closure1_slot4;
                var2 = new Array(2);
                var2[0] = var5;
                var1 = _closure1_slot6;
                var2[1] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                var1 = false;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2, var3);
            if(!var1) { _fun0004_ip = 94; continue _fun0004 }
 91:
            var1 = var2;
 94:
            return var1;
        }
    };
    var3['useCanAccessBulkBanningFeature'] = var4;
    var4 = function useCanAccessInviteCodeFeature(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot5;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot4;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0005_ip = 59; continue _fun0005 }
 33:
                var4 = _closure1_slot5;
                var3 = var4.can;
                var2 = _closure1_slot8;
                var2 = var2.MANAGE_GUILD;
                var1 = var3.bind(var4)(var2, var5);
 59:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanAccessInviteCodeFeature'] = var4;
    var4 = function useCanBulkBanUser(arg1, arg2, arg3) {
        var7 = arg1;
        var8 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var9 = _closure1_slot5;
        var3 = new Array(2);
        var3[0] = var9;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot4;
                var2 = var5.getGuild;
                var1 = _closure2_slot0;
                var7 = var2.bind(var5)(var1);
                var1 = null;
                var1 = var1 != var7;
                if(!var1) { _fun0006_ip = 74; continue _fun0006 }
 33:
                var2 = _closure2_slot1;
                if(!var2) { _fun0006_ip = 71; continue _fun0006 }
 40:
                var6 = _closure1_slot5;
                var5 = var6.canManageUser;
                var4 = _closure1_slot8;
                var4 = var4.BAN_MEMBERS;
                var3 = _closure2_slot2;
                var2 = var5.bind(var6)(var4, var3, var7);
 71:
                var1 = var2;
 74:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanBulkBanUser'] = var4;
    var2 = function canBulkBanUser(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg2;
            var5 = _closure1_slot4;
            var4 = var5.getGuild;
            var1 = arg1;
            var7 = var4.bind(var5)(var1);
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0007_ip = 68; continue _fun0007 }
 32:
            if(!var2) { _fun0007_ip = 65; continue _fun0007 }
 35:
            var6 = _closure1_slot5;
            var5 = var6.canManageUser;
            var3 = _closure1_slot8;
            var4 = var3.BAN_MEMBERS;
            var3 = arg3;
            var2 = var5.bind(var6)(var4, var3, var7);
 65:
            var1 = var2;
 68:
            return var1;
        }
    };
    var3['canBulkBanUser'] = var2;
    return var1;
})();