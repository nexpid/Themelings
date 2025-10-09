// app/modules/guild_member/GuildMemberUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var10 = function getGuildMemberAgeInRange(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var1 = arg2;
            var9 = arg3;
            var6 = var1.maxDaysOld;
            var4 = var1.minDaysOld;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 0;
case 2:
            var5 = _closure1_slot4;
            var1 = var5.getGuild;
            var5 = var1.bind(var5)(var10);
            var1 = null;
            var8 = var1 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5.joinedAt;
case 4:
            if(!(var1 != var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot3;
            var5 = var8.getMember;
            var5 = var5.bind(var8)(var10, var9);
            var8 = var1 == var5;
            var3 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.joinedAt;
case 8:
            var8 = var1 == var3;
            var3 = null;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = global;
            var9 = var8.Date;
            var12 = var5.joinedAt;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var13 = var8;
            var5 = new var13[var9](var12, var11);
            var3 = var5 instanceof Object ? var5 : var8;
case 10:
            var7 = var3;
case 6:
            if(!(var1 != var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var5 = var3.bind(var5)();
            var3 = var7.getTime;
            var3 = var3.bind(var7)();
            var3 = var5 - var3;
            var1 = var1 == var6;
            if(var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot9;
            var5 = var5 * var6;
            var1 = var3 <= var5;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = _closure1_slot9;
            var2 = var2 * var4;
            var1 = var3 >= var2;
case 16:
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var10;
    var9 = function useGuildMemberAgeInRange(arg1, arg2, arg3) {
        var6 = arg1;
        var7 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var2;
        var2 = new Array(0);
        var1 = function() {
            var5 = _closure1_slot10;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var _closure1_slot11 = var9;
    var8 = function canKickMember(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var1;
case 18:
            var3 = var4;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var7 = undefined;
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var4;
case 20:
            if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1.return();
case 22:
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = var4.bind(var5)(var2, var6, var3);
case 24:
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 8:
            var2 = var2.isProvisional;
            var1 = !var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot12 = var8;
    var7 = function hasKickMemberPerms(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var2;
            var4 = var1;
case 18:
            var2 = var4;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var4 = var2().value;
            var2 = var1;
            var2 = var2 === var5;
            var5 = undefined;
            if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var4;
case 20:
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1.return();
case 22:
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 25:
            var4 = var5.canManageUser;
            var2 = _closure1_slot8;
            var2 = var2.KICK_MEMBERS;
            var1 = var4.bind(var5)(var2, var3, var6);
case 26:
            if(!var1) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = var3.isNonUserBot;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot13 = var7;
    var6 = function canBanMember(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var1;
case 18:
            var3 = var4;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var7 = undefined;
            if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var7 = var4;
case 20:
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var1.return();
case 22:
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = var4.bind(var5)(var2, var6, var3);
case 24:
            if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 8:
            var2 = var2.isProvisional;
            var1 = !var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var5 = function hasBanMemberPerms(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var1;
case 18:
            var3 = var4;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var5;
            var5 = undefined;
            if(var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var5 = var4;
case 20:
            if(var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1.return();
case 22:
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 25:
            var4 = var5.canManageUser;
            var3 = _closure1_slot8;
            var3 = var3.BAN_MEMBERS;
            var1 = var4.bind(var5)(var3, var2, var6);
case 26:
            if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var3 = var2.isNonUserBot;
            var3 = var3.bind(var2)();
            var1 = !var3;
case 27:
            if(!var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var2 = var2.bot;
            var1 = !var2;
case 29:
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var2 = function canManageMessages(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var2 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var2;
            var4 = var1;
case 18:
            var2 = var4;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var4 = var2().value;
            var2 = var1;
            var2 = var2 === var5;
            var5 = undefined;
            if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var5 = var4;
case 20:
            if(var2) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var1.return();
case 22:
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 25:
            var1 = var2 != var6;
case 31:
            if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var4 = var5.canManageUser;
            var2 = _closure1_slot8;
            var2 = var2.MANAGE_MESSAGES;
            var1 = var4.bind(var5)(var2, var3, var6);
case 32:
            if(!var1) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var2 = var3.isNonUserBot;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 34:
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var1 = global;
    var16 = var1.Object;
    var15 = var16.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var11);
    var1 = 0;
    var11 = var13[var1];
    var1 = undefined;
    var11 = var14.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.GuildMemberFlags;
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.Permissions;
    var _closure1_slot8 = var11;
    var11 = 86400000;
    var _closure1_slot9 = var11;
    var11 = 9;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/guild_member/GuildMemberUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['getGuildMemberAgeInRange'] = var10;
    var3['useGuildMemberAgeInRange'] = var9;
    var9 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 6;
            var2 = var10[var5];
            var6 = undefined;
            var12 = var9.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.hasFlag;
                    var8 = _closure1_slot3;
                    var7 = var8.getMember;
                    var6 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var6 = var7.bind(var8)(var6, var2);
                    var2 = null;
                    var7 = var2 == var6;
                    if(var7) { _fun0008_ip = 36; continue _fun0008 }
case 7:
                    var5 = var6.flags;
case 36:
                    var6 = var2 != var5;
                    var2 = 0;
                    if(!var6) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var2 = var5;
case 37:
                    var1 = _closure1_slot7;
                    var1 = var1.DID_REJOIN;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var4, var2);
            var4 = var10[var5];
            var13 = var9.bind(var6)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0009_ip = 28; continue _fun0009 }
case 18:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.extractTimestamp;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3 = var2 - var3;
                    var2 = 604800000;
                    var1 = var3 < var2;
case 28:
                    return var1;
                }
            };
            var4 = var12.bind(var13)(var11, var4);
            var5 = var10[var5];
            var10 = var9.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var11;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getUser;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                    var1 = var2.bot;
case 39:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var5, var3);
            var5 = _closure1_slot11;
            var1 = {};
            var9 = 7;
            var1['maxDaysOld'] = var9;
            var1 = var5.bind(var6)(var8, var1, var7);
            if(!var1) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var1 = !var4;
case 41:
            if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var1 = !var3;
case 43:
            if(!var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var1 = !var2;
case 45:
            return var1;
        }
    };
    var3['useNewMemberBadge'] = var9;
    var9 = function useCanKickMember(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot12;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanKickMember'] = var9;
    var3['canKickMember'] = var8;
    var3['hasKickMemberPerms'] = var7;
    var7 = function useCanBanMember(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var2 = new Array(0);
        var1 = function() {
            var4 = _closure1_slot14;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanBanMember'] = var7;
    var3['canBanMember'] = var6;
    var3['hasBanMemberPerms'] = var5;
    var4 = function useCanManageMessages(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot16;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanManageMessages'] = var4;
    var3['canManageMessages'] = var2;
    return var1;
})();