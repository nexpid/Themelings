// app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function useGuildMembers(arg1, arg2) {
        var5 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 5;
        var9 = var8[var3];
        var4 = undefined;
        var12 = var6.bind(var4)(var9);
        var11 = var12.useStateFromStoresArray;
        var9 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var9;
        var9 = new Array(2);
        var9[0] = var5;
        var9[1] = var7;
        var7 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getMembers;
                var1 = _closure2_slot0;
                var4 = var3.bind(var4)(var1);
                var5 = _closure2_slot1;
                var3 = null;
                var1 = var4;
                if(!(var3 != var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var3 = var4.filter;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
case 36:
                return var1;
            }
        };
        var7 = var11.bind(var12)(var10, var7, var9);
        var _closure2_slot2 = var7;
        var3 = var8[var3];
        var9 = var6.bind(var4)(var3);
        var8 = var9.useStateFromStoresObject;
        var3 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var3;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            var4 = _closure2_slot2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var5 = _closure1_slot5;
                    var4 = var5.getUser;
                    var3 = var2.userId;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2 = var2.userId;
                    var1[var2] = var3;
case 38:
                    return var1;
                }
            };
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var8.bind(var9)(var6, var3, var4);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot8;
                var2 = _closure2_slot2;
                var9 = undefined;
                var8 = var3.bind(var9)(var2);
                var3 = var8.bind(var9)();
                var2 = var3.done;
                var7 = 6;
                var6 = 80;
                var5 = null;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var15 = var4.value;
                var12 = _closure2_slot3;
                var2 = var15.userId;
                var14 = var12[var2];
                if(!(var5 != var14)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var13 = var1.push;
                var12 = {};
                var2 = var15.nick;
                var16 = var2;
                if(!(var5 == var2)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var7];
                var18 = var18.bind(var9)(var17);
                var17 = var18.getName;
                var16 = var17.bind(var18)(var14);
case 44:
                var12['name'] = var16;
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var16 = var16[var7];
                var17 = var17.bind(var9)(var16);
                var16 = var17.getUserTag;
                var16 = var16.bind(var17)(var14);
                var12['userTag'] = var16;
                var16 = var15.userId;
                var12['id'] = var16;
                var16 = var14.getAvatarSource;
                var17 = _closure2_slot0;
                var16 = var16.bind(var14)(var17);
                var12['avatarSource'] = var16;
                var16 = var14.getAvatarURL;
                var16 = var16.bind(var14)(var17, var6);
                var12['avatarURL'] = var16;
                var16 = var14.bot;
                var12['bot'] = var16;
                var16 = var14.isVerifiedBot;
                var16 = var16.bind(var14)();
                var12['verifiedBot'] = var16;
                var16 = var15.roles;
                var12['roles'] = var16;
                var15 = var15.userId;
                var12['key'] = var15;
                var12['user'] = var14;
                var12 = var13.bind(var1)(var12);
                var3 = var2;
case 42:
                var12 = var8.bind(var9)();
                var2 = var12.done;
                var4 = var12;
                if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 40:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildSettingsRoleEditSections;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/roles/GuildSettingsRolesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 50;
    var3['ADD_MEMBER_QUERY_LIMIT'] = var5;
    var5 = 1000;
    var3['MAX_PREFETCH_MEMBER_COUNT'] = var5;
    var3['useGuildMembers'] = var4;
    var4 = function useGuildRoleMembers(arg1, arg2, arg3) {
        var4 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot3;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var6);
        var _closure2_slot3 = var3;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var3 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot2;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var5.bind(var6)(var3);
        var8 = _closure1_slot3;
        var6 = var8.useEffect;
        var5 = new Array(2);
        var5[0] = var4;
        var5[1] = var7;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.requestMembersForRole;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.catch;
            var2 = _closure2_slot3;
            var2 = var2.current;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var6.bind(var8)(var3, var5);
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.roles;
            var2 = var3.includes;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var5.bind(var6)(var2, var3);
        var2 = _closure1_slot10;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var3['useGuildRoleMembers'] = var4;
    var4 = function useQueryGuildMembers(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var7 = _closure1_slot3;
        var4 = var7.useRef;
        var3 = false;
        var3 = var4.bind(var7)(var3);
        var _closure2_slot2 = var3;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var8 = var4.bind(var1)(var2);
                var7 = var8.requestMembers;
                var6 = _closure2_slot0;
                var5 = _closure2_slot1;
                var4 = 200;
                var4 = var7.bind(var8)(var6, var5, var4);
                var4 = '';
                var4 = var4 === var5;
                if(var4) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                var5 = _closure2_slot2;
                var4 = var5.current;
case 46:
                if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.track;
                var3 = _closure1_slot7;
                var4 = var3.SEARCH_STARTED;
                var3 = {};
                var7 = 'Role Members';
                var3['search_type'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure2_slot2;
                var2 = true;
                var3['current'] = var2;
case 48:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useQueryGuildMembers'] = var4;
    var4 = function filterFullMembersByQuery(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.trim;
            var3 = var1.bind(var3)();
            var1 = var3.toLowerCase;
            var5 = var1.bind(var3)();
            var1 = var2.id;
            var1 = var1 === var5;
            if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 37:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var3 = var6[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var7 = var2.name;
            var3 = var7.toLowerCase;
            var3 = var3.bind(var7)();
            var1 = var4.bind(var6)(var5, var3);
case 50:
            if(var1) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 10;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var6 = var2.userTag;
            var2 = var6.toLowerCase;
            var2 = var2.bind(var6)();
            var1 = var3.bind(var4)(var5, var2);
case 51:
            return var1;
        }
    };
    var3['filterFullMembersByQuery'] = var4;
    var4 = function getSectionAnalyticsName(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot6;
            var2 = var2.MEMBERS;
            if(!(var2 !== var4)) { _fun0009_ip = 53; continue _fun0009 }
case 29:
            var2 = _closure1_slot6;
            var2 = var2.PERMISSIONS;
            if(!(var2 !== var4)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var2 = _closure1_slot6;
            var2 = var2.DISPLAY;
            if(!(var2 !== var4)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var2 = _closure1_slot6;
            var2 = var2.VERIFICATIONS;
            if(!(var2 !== var4)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 58:
            var1 = 'Connections';
            return var1;
case 56:
            var1 = 'Role Settings';
            return var1;
case 54:
            var1 = 'Permissions';
            return var1;
case 53:
            var1 = 'Members';
            return var1;
        }
    };
    var3['getSectionAnalyticsName'] = var4;
    var2 = function filterRole(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var1 = '';
            var1 = var1 === var5;
            if(var1) { _fun0010_ip = 36; continue _fun0010 }
case 32:
            var2 = arg1;
            var3 = var2.name;
            var2 = var3.toLowerCase;
            var4 = var2.bind(var3)();
            var3 = var4.includes;
            var2 = var5.toLowerCase;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 36:
            return var1;
        }
    };
    var3['filterRole'] = var2;
    return var1;
})();