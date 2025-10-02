// app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function getMemberSupplementalByGuildId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot2;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var3 = {};
            var4[var2] = var3;
case 2:
            var1 = _closure1_slot2;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = {};
    var _closure1_slot2 = var1;
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function hasMemberSupplemental(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = _closure1_slot2;
            var4 = var2[var4];
            var2 = arg2;
            var2 = var4[var2];
            var1 = var3 != var2;
case 4:
            return var1;
        }
    };
    var3['hasMemberSupplemental'] = var5;
    var3['getMemberSupplementalByGuildId'] = var4;
    var2 = function syncMemberSupplemental(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg2;
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var5 = _closure1_slot3;
            var4 = undefined;
            var2 = arg1;
            var2 = var5.bind(var4)(var2);
            var _closure2_slot0 = var2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var5.userId;
                    var7 = var3[var2];
                    var2 = var5.joinSourceType;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var6 = var4 == var7;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = var7.joinSourceType;
case 10:
                    var2 = var3;
case 8:
                    var3 = var4 != var2;
                    var6 = null;
                    if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var6 = var2;
case 12:
                    var2 = var4 != var6;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 0;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var9.bind(var3)(var8);
                    var3 = var3.JoinSourceType;
                    var3 = var3.UNSPECIFIED;
                    var2 = var6 !== var3;
case 14:
                    if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = var5.sourceInviteCode;
                    var2 = var4 == var3;
case 16:
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var8.bind(var2)(var3);
                    var2 = var2.JoinSourceType;
                    var6 = var2.INVITE;
case 18:
                    var3 = _closure2_slot0;
                    var2 = var5.userId;
                    var1 = {};
                    var8 = var5.userId;
                    var1['userId'] = var8;
                    var9 = var5.sourceInviteCode;
                    if(!(var4 == var9)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var10 = var4 == var7;
                    var8 = undefined;
                    if(var10) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var8 = var7.sourceInviteCode;
case 22:
                    var9 = var8;
case 20:
                    var10 = var4 != var9;
                    var8 = null;
                    if(!var10) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var8 = var9;
case 24:
                    var1['sourceInviteCode'] = var8;
                    var1['joinSourceType'] = var6;
                    var8 = var5.inviterId;
                    if(!(var4 == var8)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var6 = var7.inviterId;
case 28:
                    var8 = var6;
case 26:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var6 = var8;
case 30:
                    var1['inviterId'] = var6;
                    var8 = var5.integrationType;
                    if(!(var4 == var8)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var6 = var7.integrationType;
case 34:
                    var8 = var6;
case 32:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var6 = var8;
case 36:
                    var1['integrationType'] = var6;
                    var8 = var5.joinSourceApplicationId;
                    if(!(var4 == var8)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var6 = var7.joinSourceApplicationId;
case 40:
                    var8 = var6;
case 38:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var6 = var8;
case 42:
                    var1['joinSourceApplicationId'] = var6;
                    var5 = var5.joinSourceChannelId;
                    if(!(var4 == var5)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var8 = var4 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var6 = var7.joinSourceChannelId;
case 46:
                    var5 = var6;
case 44:
                    var6 = var4 != var5;
                    var4 = null;
                    if(!var6) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var4 = var5;
case 48:
                    var1['joinSourceChannelId'] = var4;
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var3['syncMemberSupplemental'] = var2;
    return var1;
})();