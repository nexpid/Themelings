// app/modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function getMemberSupplementalByGuildId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot2;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 30; continue _fun0001 }
 20:
            var4 = _closure1_slot2;
            var3 = {};
            var4[var2] = var3;
 30:
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
 0:
            var4 = arg1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 42; continue _fun0002 }
 23:
            var2 = _closure1_slot2;
            var4 = var2[var4];
            var2 = arg2;
            var2 = var4[var2];
            var1 = var3 != var2;
 42:
            return var1;
        }
    };
    var3['hasMemberSupplemental'] = var5;
    var3['getMemberSupplementalByGuildId'] = var4;
    var2 = function syncMemberSupplemental(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg2;
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0003_ip = 56; continue _fun0003 }
 16:
            var5 = _closure1_slot3;
            var4 = undefined;
            var2 = arg1;
            var2 = var5.bind(var4)(var2);
            var _closure2_slot0 = var2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var2 = var5.userId;
                    var7 = var3[var2];
                    var2 = var5.joinSourceType;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0004_ip = 49; continue _fun0004 }
 31:
                    var6 = var4 == var7;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 46; continue _fun0004 }
 40:
                    var3 = var7.joinSourceType;
 46:
                    var2 = var3;
 49:
                    var3 = var4 != var2;
                    var6 = null;
                    if(!var3) { _fun0004_ip = 61; continue _fun0004 }
 58:
                    var6 = var2;
 61:
                    var2 = var4 != var6;
                    if(!var2) { _fun0004_ip = 108; continue _fun0004 }
 68:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 0;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var9.bind(var3)(var8);
                    var3 = var3.JoinSourceType;
                    var3 = var3.UNSPECIFIED;
                    var2 = var6 !== var3;
 108:
                    if(var2) { _fun0004_ip = 121; continue _fun0004 }
 111:
                    var3 = var5.sourceInviteCode;
                    var2 = var4 == var3;
 121:
                    if(var2) { _fun0004_ip = 160; continue _fun0004 }
 124:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var8.bind(var2)(var3);
                    var2 = var2.JoinSourceType;
                    var6 = var2.INVITE;
 160:
                    var3 = _closure2_slot0;
                    var2 = var5.userId;
                    var1 = {};
                    var8 = var5.userId;
                    var1['userId'] = var8;
                    var9 = var5.sourceInviteCode;
                    if(!(var4 == var9)) { _fun0004_ip = 208; continue _fun0004 }
 190:
                    var10 = var4 == var7;
                    var8 = undefined;
                    if(var10) { _fun0004_ip = 205; continue _fun0004 }
 199:
                    var8 = var7.sourceInviteCode;
 205:
                    var9 = var8;
 208:
                    var10 = var4 != var9;
                    var8 = null;
                    if(!var10) { _fun0004_ip = 220; continue _fun0004 }
 217:
                    var8 = var9;
 220:
                    var1['sourceInviteCode'] = var8;
                    var1['joinSourceType'] = var6;
                    var8 = var5.inviterId;
                    if(!(var4 == var8)) { _fun0004_ip = 258; continue _fun0004 }
 240:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 255; continue _fun0004 }
 249:
                    var6 = var7.inviterId;
 255:
                    var8 = var6;
 258:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 270; continue _fun0004 }
 267:
                    var6 = var8;
 270:
                    var1['inviterId'] = var6;
                    var8 = var5.integrationType;
                    if(!(var4 == var8)) { _fun0004_ip = 303; continue _fun0004 }
 285:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 300; continue _fun0004 }
 294:
                    var6 = var7.integrationType;
 300:
                    var8 = var6;
 303:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 315; continue _fun0004 }
 312:
                    var6 = var8;
 315:
                    var1['integrationType'] = var6;
                    var8 = var5.joinSourceApplicationId;
                    if(!(var4 == var8)) { _fun0004_ip = 348; continue _fun0004 }
 330:
                    var9 = var4 == var7;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 345; continue _fun0004 }
 339:
                    var6 = var7.joinSourceApplicationId;
 345:
                    var8 = var6;
 348:
                    var9 = var4 != var8;
                    var6 = null;
                    if(!var9) { _fun0004_ip = 360; continue _fun0004 }
 357:
                    var6 = var8;
 360:
                    var1['joinSourceApplicationId'] = var6;
                    var5 = var5.joinSourceChannelId;
                    if(!(var4 == var5)) { _fun0004_ip = 393; continue _fun0004 }
 375:
                    var8 = var4 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 390; continue _fun0004 }
 384:
                    var6 = var7.joinSourceChannelId;
 390:
                    var5 = var6;
 393:
                    var6 = var4 != var5;
                    var4 = null;
                    if(!var6) { _fun0004_ip = 405; continue _fun0004 }
 402:
                    var4 = var5;
 405:
                    var1['joinSourceChannelId'] = var4;
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
 56:
            var1 = false;
            return var1;
        }
    };
    var3['syncMemberSupplemental'] = var2;
    return var1;
})();