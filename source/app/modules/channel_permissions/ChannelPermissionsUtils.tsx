// app/modules/channel_permissions/ChannelPermissionsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var13;
    var1 = function isAdmin(arg1) {
        var4 = _closure1_slot6;
        var1 = _closure1_slot11;
        var3 = var1.ADMINISTRATOR;
        var2 = undefined;
        var1 = arg1;
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var _closure1_slot14 = var1;
    var10 = function getRoleRowData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = arguments[1];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = false;
case 2:
            var1 = _closure1_slot14;
            var6 = var1.bind(var5)(var2);
            var1 = _closure1_slot10;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1.ROLE;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = var1.ADMINISTRATOR;
case 6:
            var1 = {};
            var1['rowType'] = var7;
            var6 = var2.colorString;
            var8 = null;
            if(!(var8 == var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot13;
case 7:
            var1['colorString'] = var6;
            var6 = var2.name;
            var1['name'] = var6;
            var6 = var2.id;
            var1['id'] = var6;
            var3 = _closure1_slot14;
            var3 = var3.bind(var5)(var2);
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var4;
case 9:
            var1['disabled'] = var3;
            var6 = var2.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ':';
            var3 = var5.bind(var4)(var7, var3, var6);
            var1['key'] = var3;
            var2 = var2.tags;
            var1['tags'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var10;
    var9 = function sortRoles(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = _closure1_slot14;
            var7 = undefined;
            var4 = var2.bind(var7)(var6);
            var3 = 1;
            var2 = var3;
            if(!var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = 0;
case 11:
            var4 = _closure1_slot14;
            var4 = var4.bind(var7)(var5);
            if(!var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = 0;
case 13:
            if(!(var2 === var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 7;
            var1 = var8[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.compareGuildRoles;
            var1 = var1.bind(var4)(var6, var5);
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var1 = var2 - var3;
case 17:
            return var1;
        }
    };
    var _closure1_slot16 = var9;
    var8 = function getNoRolesRow() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.gnsna2;
            var1 = var3.bind(var4)(var2);
case 18:
            var2 = {};
            var4 = _closure1_slot10;
            var4 = var4.EMPTY_STATE;
            var2['rowType'] = var4;
            var3 = _closure1_slot13;
            var2['colorString'] = var3;
            var2['name'] = var1;
            var1 = true;
            var2['disabled'] = var1;
            var1 = 'EMPTY_STATE';
            var2['id'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var8;
    var1 = function canAddPermissionInChannel(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var6 = arg4;
            var3 = _closure1_slot9;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = null;
            if(!(var3 != var1)) { _fun0004_ip = 20; continue _fun0004 }
case 11:
            if(!(var3 != var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = var4.permissionOverwrites;
            var4 = var4[var2];
            var9 = var3 == var6;
            var7 = undefined;
            var8 = undefined;
            if(var9) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var8 = var6[var2];
case 23:
            if(!(var3 != var8)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = var6[var2];
case 25:
            var3 = var3 == var4;
            if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var6 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 9;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.has;
            var5 = var4.allow;
            var4 = arg3;
            var4 = var6.bind(var7)(var5, var4);
            var3 = !var4;
case 27:
            return var3;
case 21:
            var1 = var1.id;
            var1 = var1 !== var2;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var7 = function getExistingRoles(arg1, arg2, arg3, arg4, arg5) {
        var3 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var2;
        var2 = arg4;
        var _closure2_slot1 = var2;
        var2 = arg5;
        var _closure2_slot2 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot14;
                var4 = undefined;
                var1 = var1.bind(var4)(var5);
                if(var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var9 = _closure1_slot18;
                var13 = _closure2_slot0;
                var12 = var5.id;
                var11 = _closure2_slot1;
                var10 = _closure2_slot2;
                var14 = undefined;
                var6 = var14[var9](var13, var12, var11, var10, var9);
                var2 = !var6;
                if(var6) { _fun0005_ip = 25; continue _fun0005 }
case 24:
                var3 = _closure1_slot7;
                var3 = var3.bind(var4)(var5);
                var2 = !var3;
case 25:
                var1 = var2;
case 29:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot19 = var7;
    var6 = function getAllExistingRolesWithPermission(arg1, arg2, arg3, arg4, arg5) {
        var3 = arg2;
        var2 = arg3;
        var _closure2_slot0 = var2;
        var2 = arg4;
        var _closure2_slot1 = var2;
        var2 = arg5;
        var _closure2_slot2 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var9 = arg1;
                var1 = _closure1_slot14;
                var3 = undefined;
                var1 = var1.bind(var3)(var9);
                if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var8 = _closure1_slot18;
                var14 = _closure2_slot0;
                var13 = var9.id;
                var12 = _closure2_slot1;
                var11 = _closure2_slot2;
                var15 = undefined;
                var5 = var15[var8](var14, var13, var12, var11, var10);
                var4 = !var5;
                if(var5) { _fun0006_ip = 25; continue _fun0006 }
case 24:
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var9);
                var4 = !var5;
case 25:
                var1 = var4;
case 29:
                if(var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var2 = 9;
                var4 = var7[var2];
                var5 = var6.bind(var3)(var4);
                var4 = var5.has;
                var2 = var7[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.combine;
                var6 = var9.permissions;
                var10 = _closure2_slot0;
                var10 = var10.permissionOverwrites;
                var9 = var9.id;
                var9 = var10[var9];
                var10 = null;
                var10 = var10 == var9;
                var3 = undefined;
                if(var10) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var3 = var9.allow;
case 33:
                var3 = var7.bind(var8)(var6, var3);
                var2 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2);
case 31:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot20 = var6;
    var1 = function getDisplayName(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot8;
            var5 = var6.getNick;
            var1 = arg2;
            var3 = var1.id;
            var1 = var4.id;
            var1 = var5.bind(var6)(var3, var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 32; continue _fun0007 }
case 4:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getName;
            var1 = var2.bind(var3)(var4);
case 32:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function isDefaultMember(arg1, arg2) {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg2;
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function getMemberRowData(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var1 = _closure1_slot5;
            var4 = undefined;
            var6 = var1.bind(var4)(var5, var2);
            var1 = _closure1_slot10;
            if(var6) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var6 = var1.MEMBER;
            _fun0008_ip = 37; continue _fun0008;
case 35:
            var6 = var1.OWNER;
case 37:
            var1 = {};
            var1['rowType'] = var6;
            var7 = _closure1_slot21;
            var7 = var7.bind(var4)(var2, var5);
            var1['name'] = var7;
            var10 = _closure1_slot8;
            var9 = var10.getNick;
            var8 = var5.id;
            var7 = var2.id;
            var8 = var9.bind(var10)(var8, var7);
            var7 = null;
            var9 = var7 != var8;
            if(!var9) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var7 = var8;
case 38:
            var1['nickname'] = var7;
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 11;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.getName;
            var7 = var7.bind(var8)(var2);
            var1['username'] = var7;
            var7 = var2.id;
            var1['id'] = var7;
            var9 = var2.getAvatarURL;
            var8 = var5.id;
            var7 = 24;
            var7 = var9.bind(var2)(var8, var7);
            var1['avatarURL'] = var7;
            var7 = var2.bot;
            var1['bot'] = var7;
            var7 = var2.isVerifiedBot;
            var7 = var7.bind(var2)();
            var1['verifiedBot'] = var7;
            var3 = _closure1_slot22;
            var3 = var3.bind(var4)(var2, var5);
            var1['disabled'] = var3;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var2 = var4.bind(var3)(var6, var2, var5);
            var1['key'] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function sortMembers(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.rowType;
            var1 = var2.rowType;
            if(!(var4 === var1)) { _fun0009_ip = 40; continue _fun0009 }
case 41:
            var4 = var3.name;
            var1 = var4.toLocaleLowerCase;
            var5 = var1.bind(var4)();
            var4 = var5.localeCompare;
            var6 = var2.name;
            var1 = var6.toLocaleLowerCase;
            var1 = var1.bind(var6)();
            var1 = var4.bind(var5)(var1);
            _fun0009_ip = 42; continue _fun0009;
case 40:
            var3 = var3.rowType;
            var2 = var2.rowType;
            var1 = var3 - var2;
case 42:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var5 = function getExistingMembers(arg1, arg2, arg3, arg4, arg5) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var2 = arg4;
        var _closure2_slot2 = var2;
        var2 = arg5;
        var _closure2_slot3 = var2;
        var4 = var5.map;
        var3 = _closure1_slot9;
        var3 = var3.getUser;
        var4 = var4.bind(var5)(var3);
        var3 = var4.filter;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var2 = 12;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var2.isNotNullish;
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var9 = _closure1_slot18;
                var13 = _closure2_slot0;
                var12 = var5.id;
                var11 = _closure2_slot2;
                var10 = _closure2_slot3;
                var4 = undefined;
                var14 = undefined;
                var6 = var14[var9](var13, var12, var11, var10, var9);
                var1 = !var6;
                if(!var6) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                var3 = _closure1_slot22;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var5, var2);
case 43:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot25 = var5;
    var4 = function flipEveryonePermission(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = var1.permissionOverwrites;
            var2 = var1.guild_id;
            var2 = var3[var2];
            var3 = null;
            if(!(var3 == var2)) { _fun0011_ip = 25; continue _fun0011 }
case 45:
            var6 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 13;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.makeEveryoneOverwrite;
            var1 = var1.guild_id;
            var2 = var3.bind(var4)(var1);
case 25:
            var1 = {};
            var12 = var1;
            var11 = var2;
            var2 = copyDataProperties(var12, var11);
            var7 = _closure1_slot2;
            var3 = _closure1_slot3;
            var6 = 9;
            var8 = var3[var6];
            var4 = undefined;
            var10 = var7.bind(var4)(var8);
            var9 = var10.remove;
            var8 = var1.deny;
            var8 = var9.bind(var10)(var8, var5);
            var1['deny'] = var8;
            var3 = var3[var6];
            var8 = var7.bind(var4)(var3);
            var7 = var8.remove;
            var3 = var1.allow;
            var3 = var7.bind(var8)(var3, var5);
            var1['allow'] = var3;
            var3 = arg3;
            if(var3) { _fun0011_ip = 46; continue _fun0011 }
case 47:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var6];
            var4 = var3.bind(var4)(var2);
            var3 = var4.add;
            var2 = var1.deny;
            var2 = var3.bind(var4)(var2, var5);
            var1['deny'] = var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot26 = var4;
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
    var11 = var12.bind(var1)(var11);
    var11 = var11.isGuildVocalChannelType;
    var _closure1_slot4 = var11;
    var11 = 1;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.isGuildOwner;
    var _closure1_slot5 = var11;
    var11 = 2;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var15 = var11.hasPermission;
    var _closure1_slot6 = var15;
    var11 = var11.isEveryoneRole;
    var _closure1_slot7 = var11;
    var11 = 3;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 4;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 5;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.RowType;
    var _closure1_slot10 = var11;
    var11 = 6;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var14 = var11.Permissions;
    var _closure1_slot11 = var14;
    var14 = var11.ChannelTypes;
    var _closure1_slot12 = var14;
    var11 = var11.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot13 = var11;
    var11 = 17;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/channel_permissions/ChannelPermissionsUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['getRoleRowData'] = var10;
    var3['sortRoles'] = var9;
    var3['getNoRolesRow'] = var8;
    var8 = function isEveryoneRoleId(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.castGuildIdAsEveryoneGuildRoleId;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var3['isEveryoneRoleId'] = var8;
    var8 = function getRolesRows(arg1, arg2, arg3, arg4) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg2;
            var2 = arguments[4];
            var3 = arg3;
            var _closure2_slot0 = var3;
            var3 = arg4;
            var _closure2_slot1 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0012_ip = 5; continue _fun0012 }
case 36:
            var2 = function a() {
                var1 = true;
                return var1;
            };
case 5:
            var _closure2_slot2 = var2;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var1 = _closure1_slot14;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var2);
                    var1 = !var1;
                    if(!var1) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                    var8 = _closure1_slot18;
                    var7 = _closure2_slot0;
                    var6 = var2.id;
                    var5 = _closure2_slot1;
                    var1 = var8.bind(var4)(var7, var6, var5);
case 48:
                    if(!var1) { _fun0013_ip = 40; continue _fun0013 }
case 50:
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var4)(var2);
                    var1 = !var3;
case 40:
                    if(!var1) { _fun0013_ip = 51; continue _fun0013 }
case 25:
                    var3 = _closure2_slot2;
                    var2 = var2.name;
                    var1 = var3.bind(var4)(var2);
case 51:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.sort;
            var2 = _closure1_slot16;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRolesRows'] = var8;
    var8 = function getRolesRowsWithPermissionDisabled(arg1, arg2, arg3, arg4) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg2;
            var2 = arguments[4];
            var3 = arg3;
            var _closure2_slot0 = var3;
            var3 = arg4;
            var _closure2_slot1 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0014_ip = 5; continue _fun0014 }
case 36:
            var2 = function u() {
                var1 = true;
                return var1;
            };
case 5:
            var _closure2_slot2 = var2;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var1 = _closure1_slot14;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var2);
                    var1 = !var1;
                    if(!var1) { _fun0015_ip = 48; continue _fun0015 }
case 49:
                    var8 = _closure1_slot18;
                    var7 = _closure2_slot0;
                    var6 = var2.id;
                    var5 = _closure2_slot1;
                    var1 = var8.bind(var4)(var7, var6, var5);
case 48:
                    if(!var1) { _fun0015_ip = 40; continue _fun0015 }
case 50:
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var4)(var2);
                    var1 = !var3;
case 40:
                    if(!var1) { _fun0015_ip = 51; continue _fun0015 }
case 25:
                    var3 = _closure2_slot2;
                    var2 = var2.name;
                    var1 = var3.bind(var4)(var2);
case 51:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.sort;
            var2 = _closure1_slot16;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot15;
                var5 = _closure1_slot6;
                var1 = _closure2_slot1;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var1);
                var1 = var3.bind(var2)(var4, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRolesRowsWithPermissionDisabled'] = var8;
    var3['getExistingRoles'] = var7;
    var3['getAllExistingRolesWithPermission'] = var6;
    var6 = function getExistingRolesRows(arg1, arg2, arg3, arg4, arg5) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var8 = _closure1_slot19;
            var4 = undefined;
            var5 = 0;
            var12 = arg2;
            var11 = arg3;
            var10 = arg4;
            var9 = arg5;
            var14 = undefined;
            var13 = 0;
            var6 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var6.sort;
            var1 = _closure1_slot16;
            var6 = var3.bind(var6)(var1);
            var3 = var6.map;
            var1 = function(arg1) {
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var3.bind(var6)(var1);
            var3 = var1.length;
            if(!(var5 === var3)) { _fun0016_ip = 52; continue _fun0016 }
case 53:
            var3 = _closure1_slot17;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 8;
            var5 = var8[var2];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.nZfHsb;
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
case 52:
            return var1;
        }
    };
    var3['getExistingRolesRows'] = var6;
    var6 = function getExistingRolesRowWithPermissionDisabled(arg1, arg2, arg3, arg4, arg5) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var9 = arg4;
            var _closure2_slot0 = var9;
            var8 = _closure1_slot20;
            var4 = undefined;
            var5 = 0;
            var13 = arg2;
            var12 = arg3;
            var10 = arg5;
            var15 = undefined;
            var14 = 0;
            var11 = var9;
            var7 = var15[var8](var14, var13, var12, var11, var10, var9);
            var6 = var7.sort;
            var3 = _closure1_slot16;
            var6 = var6.bind(var7)(var3);
            var3 = var6.map;
            var1 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot15;
                var5 = _closure1_slot6;
                var1 = _closure2_slot0;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var1);
                var1 = var3.bind(var2)(var4, var1);
                return var1;
            };
            var1 = var3.bind(var6)(var1);
            var3 = var1.length;
            if(!(var5 === var3)) { _fun0017_ip = 54; continue _fun0017 }
case 55:
            var3 = _closure1_slot17;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 8;
            var5 = var8[var2];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.nZfHsb;
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
case 54:
            return var1;
        }
    };
    var3['getExistingRolesRowWithPermissionDisabled'] = var6;
    var6 = function getMembersRows(arg1, arg2, arg3, arg4) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var1 = arguments[4];
            var3 = arg2;
            var _closure2_slot0 = var3;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var3 = arg4;
            var _closure2_slot2 = var3;
            var7 = undefined;
            if(!(var1 === var7)) { _fun0018_ip = 56; continue _fun0018 }
case 22:
            var1 = function a() {
                var1 = true;
                return var1;
            };
case 56:
            var _closure2_slot3 = var1;
            var4 = var5.map;
            var3 = _closure1_slot9;
            var3 = var3.getUser;
            var5 = var4.bind(var5)(var3);
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 12;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.isNotNullish;
            var5 = var4.bind(var5)(var3);
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure1_slot5;
                    var1 = _closure2_slot1;
                    var5 = undefined;
                    var1 = var6.bind(var5)(var1, var3);
                    var1 = !var1;
                    if(!var1) { _fun0019_ip = 57; continue _fun0019 }
case 11:
                    var9 = _closure1_slot18;
                    var8 = _closure2_slot0;
                    var7 = var3.id;
                    var6 = _closure2_slot2;
                    var1 = var9.bind(var5)(var8, var7, var6);
case 57:
                    if(!var1) { _fun0019_ip = 58; continue _fun0019 }
case 43:
                    var6 = _closure2_slot3;
                    var7 = _closure1_slot21;
                    var2 = _closure2_slot1;
                    var2 = var7.bind(var5)(var3, var2);
                    var2 = var6.bind(var5)(var2);
                    if(var2) { _fun0019_ip = 39; continue _fun0019 }
case 59:
                    var7 = _closure2_slot3;
                    var6 = var3.username;
                    var2 = var7.bind(var5)(var6);
case 39:
                    if(var2) { _fun0019_ip = 60; continue _fun0019 }
case 38:
                    var4 = _closure2_slot3;
                    var3 = var3.discriminator;
                    var2 = var4.bind(var5)(var3);
case 60:
                    var1 = var2;
case 58:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot23;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sort;
            var1 = _closure1_slot24;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getMembersRows'] = var6;
    var3['getExistingMembers'] = var5;
    var5 = function getExistingMembersRows(arg1, arg2, arg3, arg4, arg5) {
        var9 = arg3;
        var _closure2_slot0 = var9;
        var8 = _closure1_slot25;
        var15 = undefined;
        var14 = arg1;
        var13 = arg2;
        var11 = arg4;
        var10 = arg5;
        var12 = var9;
        var4 = var15[var8](var14, var13, var12, var11, var10, var9);
        var3 = var4.map;
        var2 = function(arg1) {
            var4 = _closure1_slot23;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.sort;
        var1 = _closure1_slot24;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getExistingMembersRows'] = var5;
    var5 = function getRowTypeLabel(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.ROLE;
            if(!(var2 !== var3)) { _fun0020_ip = 61; continue _fun0020 }
case 49:
            var2 = _closure1_slot10;
            var2 = var2.OWNER;
            if(!(var2 !== var3)) { _fun0020_ip = 62; continue _fun0020 }
case 56:
            var2 = _closure1_slot10;
            var2 = var2.ADMINISTRATOR;
            if(!(var2 !== var3)) { _fun0020_ip = 63; continue _fun0020 }
case 64:
            var2 = _closure1_slot10;
            var2 = var2.MEMBER;
            if(!(var2 !== var3)) { _fun0020_ip = 65; continue _fun0020 }
case 32:
            var2 = _closure1_slot10;
            var2 = var2.USER;
            if(!(var2 !== var3)) { _fun0020_ip = 66; continue _fun0020 }
case 67:
            var2 = _closure1_slot10;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0020_ip = 68; continue _fun0020 }
case 69:
            var2 = _closure1_slot10;
            var2 = var2.EMPTY_STATE;
            if(!(var2 !== var3)) { _fun0020_ip = 21; continue _fun0020 }
case 60:
            var2 = undefined;
            return var2;
case 21:
            var2 = null;
            return var2;
case 68:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.5qyruL;
            var2 = var3.bind(var4)(var2);
            return var2;
case 66:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.KD6OJC;
            var2 = var3.bind(var4)(var2);
            return var2;
case 65:
            var3 = arg2;
            var2 = null;
            if(!var3) { _fun0020_ip = 70; continue _fun0020 }
case 71:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 8;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.UAJxZm;
            var2 = var4.bind(var5)(var3);
case 70:
            return var2;
case 63:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.dwlcc3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 62:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.NWhYJi;
            var2 = var3.bind(var4)(var2);
            return var2;
case 61:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 8;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ZxoFOD;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRowTypeLabel'] = var5;
    var5 = function getRemoveTooltipHint(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var2 = var2.ROLE;
            if(!(var2 !== var3)) { _fun0021_ip = 72; continue _fun0021 }
case 49:
            var2 = _closure1_slot10;
            var2 = var2.OWNER;
            if(!(var2 !== var3)) { _fun0021_ip = 73; continue _fun0021 }
case 56:
            var2 = _closure1_slot10;
            var2 = var2.ADMINISTRATOR;
            if(!(var2 !== var3)) { _fun0021_ip = 74; continue _fun0021 }
case 75:
            var2 = _closure1_slot10;
            var2 = var2.MEMBER;
            if(!(var2 !== var3)) { _fun0021_ip = 76; continue _fun0021 }
case 25:
            var2 = _closure1_slot10;
            var2 = var2.EMPTY_STATE;
            var2 = null;
            return var2;
case 76:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Gzc/metroImportDefault;
            var2 = var3.bind(var4)(var2);
            return var2;
case 74:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.eTmN5e;
            var2 = var3.bind(var4)(var2);
            return var2;
case 73:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.icuNBA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 72:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 8;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Gzc/metroImportDefault;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRemoveTooltipHint'] = var5;
    var3['flipEveryonePermission'] = var4;
    var4 = function toggleChannelEveryonePermission(arg1, arg2, arg3) {
        var7 = arg1;
        var5 = _closure1_slot26;
        var1 = undefined;
        var4 = arg2;
        var2 = arg3;
        var2 = var5.bind(var1)(var7, var4, var2);
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var3 = 14;
        var3 = var5[var3];
        var6 = var4.bind(var1)(var3);
        var5 = var6.updatePermission;
        var10 = var2.id;
        var9 = var2.allow;
        var8 = var2.deny;
        var12 = var6;
        var11 = var7;
        var2 = var12[var5](var11, var10, var9, var8, var7);
        return var1;
    };
    var3['toggleChannelEveryonePermission'] = var4;
    var4 = function grantUserChannelAccess(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var11 = arg2;
            var4 = _closure1_slot9;
            var1 = var4.getCurrentUser;
            var4 = var1.bind(var4)();
            var5 = null;
            if(!(var5 == var4)) { _fun0022_ip = 77; continue _fun0022 }
case 36:
            var1 = undefined;
            return var1;
case 77:
            var6 = var2.permissionOverwrites;
            var1 = var4.id;
            var1 = var6[var1];
            if(!(var5 != var1)) { _fun0022_ip = 78; continue _fun0022 }
case 79:
            var7 = var1.allow;
            var12 = var1.deny;
            var6 = _closure1_slot2;
            var10 = _closure1_slot3;
            var5 = 9;
            var5 = var10[var5];
            var9 = undefined;
            var6 = var6.bind(var9)(var5);
            var5 = var6.add;
            var13 = var5.bind(var6)(var7, var11);
            var6 = _closure1_slot0;
            var5 = 14;
            var5 = var10[var5];
            var6 = var6.bind(var9)(var5);
            var5 = var6.updatePermission;
            var14 = var1.id;
            var16 = var6;
            var15 = var2;
            var1 = var16[var5](var15, var14, var13, var12, var11);
            return var1;
case 78:
            var1 = {};
            var4 = var4.id;
            var1['id'] = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 15;
            var7 = var6[var4];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.PermissionOverwriteType;
            var7 = var7.MEMBER;
            var1['type'] = var7;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var10 = var7.bind(var4)(var3);
            var9 = var10.add;
            var3 = 13;
            var8 = var6[var3];
            var8 = var7.bind(var4)(var8);
            var8 = var8.NONE;
            var8 = var9.bind(var10)(var8, var11);
            var1['allow'] = var8;
            var3 = var6[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.NONE;
            var1['deny'] = var3;
            var3 = 14;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.savePermissionUpdates;
            var3 = var2.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = true;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['grantUserChannelAccess'] = var4;
    var4 = function isPrivateGuildChannel(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0023_ip = 80; continue _fun0023 }
case 3:
            var4 = var2.permissionOverwrites;
            var3 = var2.guild_id;
            var3 = var4[var3];
            var7 = var1 == var5;
            var6 = undefined;
            var4 = undefined;
            if(var7) { _fun0023_ip = 6; continue _fun0023 }
case 81:
            var7 = var2.guild_id;
            var4 = var5[var7];
case 6:
            if(!(var1 != var4)) { _fun0023_ip = 23; continue _fun0023 }
case 79:
            var4 = var2.guild_id;
            var3 = var5[var4];
case 23:
            var1 = var1 != var3;
            if(!var1) { _fun0023_ip = 82; continue _fun0023 }
case 83:
            var5 = _closure1_slot2;
            var7 = _closure1_slot3;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.has;
            var3 = var3.deny;
            var2 = var2.accessPermissions;
            var1 = var4.bind(var5)(var3, var2);
case 82:
            return var1;
case 80:
            var1 = false;
            return var1;
        }
    };
    var3['isPrivateGuildChannel'] = var4;
    var4 = function isPrivateTextChannel(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var2 = arg1;
            var3 = var2.permissionOverwrites;
            var1 = var2.guild_id;
            var3 = var3[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0024_ip = 16; continue _fun0024 }
case 45:
            var4 = var2.type;
            var2 = _closure1_slot12;
            var2 = var2.GUILD_TEXT;
            var1 = var4 === var2;
case 16:
            if(!var1) { _fun0024_ip = 84; continue _fun0024 }
case 85:
            var6 = _closure1_slot2;
            var5 = _closure1_slot3;
            var4 = 9;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.has;
            var3 = var3.deny;
            var2 = _closure1_slot11;
            var2 = var2.VIEW_CHANNEL;
            var1 = var4.bind(var5)(var3, var2);
case 84:
            return var1;
        }
    };
    var3['isPrivateTextChannel'] = var4;
    var4 = function canCreatePrivateChannel(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var1 = _closure1_slot12;
            var2 = var1.GUILD_TEXT;
            var1 = var5;
            if(!(var6 !== var2)) { _fun0025_ip = 86; continue _fun0025 }
case 12:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var1 = var5;
            if(!(var6 !== var2)) { _fun0025_ip = 86; continue _fun0025 }
case 87:
            var7 = _closure1_slot4;
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = !var2;
            if(!var2) { _fun0025_ip = 88; continue _fun0025 }
case 89:
            var3 = _closure1_slot12;
            var3 = var3.GUILD_CATEGORY;
            var2 = var6 !== var3;
case 88:
            if(var2) { _fun0025_ip = 90; continue _fun0025 }
case 91:
            var3 = var5;
            if(!var5) { _fun0025_ip = 92; continue _fun0025 }
case 93:
            var3 = var4;
case 92:
            var2 = var3;
case 90:
            var1 = var2;
case 86:
            return var1;
        }
    };
    var3['canCreatePrivateChannel'] = var4;
    var4 = function getPrivateChannelHintText(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot12;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0026_ip = 73; continue _fun0026 }
case 49:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0026_ip = 73; continue _fun0026 }
case 56:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0026_ip = 52; continue _fun0026 }
case 75:
            var2 = _closure1_slot12;
            var2 = var2.GUILD_CATEGORY;
            if(!(var2 !== var3)) { _fun0026_ip = 53; continue _fun0026 }
case 25:
            var2 = null;
            return var2;
case 53:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.PhnARU;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 52:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 8;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.iZAMt7;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 73:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 8;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.ZDtA0d;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getPrivateChannelHintText'] = var4;
    var2 = function extractPermissionOverwrites(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.values;
        var3 = arg1;
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var1 = arg1;
                var4 = var1.row;
                var2 = var4.id;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0027_ip = 35; continue _fun0027 }
case 49:
                var3 = var4.id;
                var2 = '';
                var1 = var2 !== var3;
case 35:
                if(!var1) { _fun0027_ip = 94; continue _fun0027 }
case 37:
                var2 = var4.rowType;
                var1 = _closure1_slot10;
                var1 = var1.ROLE;
                if(!(var2 !== var1)) { _fun0027_ip = 95; continue _fun0027 }
case 40:
                var2 = var4.rowType;
                var1 = _closure1_slot10;
                var1 = var1.MEMBER;
                if(!(var2 === var1)) { _fun0027_ip = 94; continue _fun0027 }
case 67:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var6 = 16;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.permissionOverwriteForUser;
                var6 = var4.id;
                var1 = _closure2_slot0;
                var1 = var7.bind(var8)(var6, var1);
                var1 = var2.bind(var3)(var1);
                _fun0027_ip = 94; continue _fun0027;
case 95:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var5 = 16;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.permissionOverwriteForRole;
                var4 = var4.id;
                var1 = _closure2_slot0;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
case 94:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['extractPermissionOverwrites'] = var2;
    return var1;
})();