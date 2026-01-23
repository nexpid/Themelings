// app/modules/application_commands/CommandPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = function isExplicitAllow(arg1) {
        var2 = true;
        var1 = arg1;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function isExplicitDeny(arg1) {
        var2 = false;
        var1 = arg1;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = function computeAllowedForChannel(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = var3.id;
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0004_ip = 38; continue _fun0004 }
case 33:
            var2 = var3.parent_id;
            if(!(var1 == var2)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = var3.id;
case 39:
            var8 = var2;
case 38:
            var11 = _closure1_slot0;
            var2 = _closure1_slot3;
            var5 = 11;
            var6 = var2[var5];
            var9 = undefined;
            var7 = var11.bind(var9)(var6);
            var6 = var7.toPermissionKey;
            var10 = 5;
            var2 = var2[var10];
            var2 = var11.bind(var9)(var2);
            var2 = var2.ApplicationCommandPermissionType;
            var2 = var2.CHANNEL;
            var2 = var6.bind(var7)(var8, var2);
            var2 = var4[var2];
            if(!(var1 == var2)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var8 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = var3[var5];
            var7 = var8.bind(var9)(var5);
            var6 = var7.toPermissionKey;
            var5 = 10;
            var5 = var3[var5];
            var12 = var8.bind(var9)(var5);
            var11 = var12.allChannelsSentinel;
            var5 = arg3;
            var5 = var11.bind(var12)(var5);
            var3 = var3[var10];
            var3 = var8.bind(var9)(var3);
            var3 = var3.ApplicationCommandPermissionType;
            var3 = var3.CHANNEL;
            var3 = var6.bind(var7)(var5, var3);
            var4 = var4[var3];
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var3 = var4.permission;
case 43:
            return var3;
case 41:
            var2 = var2.permission;
            return var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var2 = function computeAllowedForUser(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 45; continue _fun0005 }
case 37:
            var2 = arg5;
            if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 11;
            var2 = var9[var2];
            var3 = undefined;
            var6 = var7.bind(var3)(var2);
            var4 = var6.toPermissionKey;
            var2 = 5;
            var2 = var9[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.ApplicationCommandPermissionType;
            var3 = var2.USER;
            var2 = arg3;
            var2 = var4.bind(var6)(var2, var3);
            var2 = var5[var2];
            if(!(var1 != var2)) { _fun0005_ip = 46; continue _fun0005 }
case 48:
            var2 = var2.permission;
            return var2;
case 46:
            var4 = _closure1_slot9;
            var10 = undefined;
            var2 = arg4;
            var14 = var4.bind(var10)(var2);
            var4 = var14.bind(var10)();
            var9 = var4.done;
            var2 = false;
            var7 = true;
            var6 = 11;
            var11 = 5;
            var13 = var4;
            var12 = false;
            var4 = false;
            if(var9) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var17 = var13.value;
            var18 = _closure1_slot0;
            var9 = _closure1_slot3;
            var15 = var9[var6];
            var16 = var18.bind(var10)(var15);
            var15 = var16.toPermissionKey;
            var9 = var9[var11];
            var9 = var18.bind(var10)(var9);
            var9 = var9.ApplicationCommandPermissionType;
            var9 = var9.ROLE;
            var9 = var15.bind(var16)(var17, var9);
            var9 = var5[var9];
            if(!(var1 != var9)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var9 = var9.permission;
            var12 = true;
            if(var9) { _fun0005_ip = 53; continue _fun0005 }
case 51:
            var16 = var14.bind(var10)();
            var9 = var16.done;
            var13 = var16;
            var4 = var12;
            if(var9) { _fun0005_ip = 49; continue _fun0005 }
case 54:
            _fun0005_ip = 50; continue _fun0005;
case 53:
            return var7;
case 49:
            if(var4) { _fun0005_ip = 27; continue _fun0005 }
case 55:
            var7 = var1 != var8;
            var4 = null;
            if(!var7) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var9 = _closure1_slot0;
            var3 = _closure1_slot3;
            var6 = var3[var6];
            var7 = var9.bind(var10)(var6);
            var6 = var7.toPermissionKey;
            var3 = var3[var11];
            var3 = var9.bind(var10)(var3);
            var3 = var3.ApplicationCommandPermissionType;
            var3 = var3.ROLE;
            var3 = var6.bind(var7)(var8, var3);
            var4 = var5[var3];
case 56:
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var3 = var4.permission;
case 58:
            return var3;
case 27:
            return var2;
case 45:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var13 = 0;
    var6 = var9[var13];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var6 = var6.ChannelRecordBase;
    var _closure1_slot4 = var6;
    var12 = 1;
    var6 = var9[var12];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var11 = 2;
    var6 = var9[var11];
    var6 = var8.bind(var1)(var6);
    var6 = var6.BuiltInSectionId;
    var _closure1_slot6 = var6;
    var10 = 3;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot7 = var6;
    var6 = {};
    var6['ALLOWED'] = var13;
    var7 = 'ALLOWED';
    var6[var13] = var7;
    var6['NSFW_NOT_ALLOWED'] = var12;
    var7 = 'NSFW_NOT_ALLOWED';
    var6[var12] = var7;
    var6['WRONG_COMMAND_TYPE'] = var11;
    var7 = 'WRONG_COMMAND_TYPE';
    var6[var11] = var7;
    var6['PREDICATE_FAILED'] = var10;
    var7 = 'PREDICATE_FAILED';
    var6[var10] = var7;
    var10 = 4;
    var6['CONTEXT_NOT_ALLOWED'] = var10;
    var7 = 'CONTEXT_NOT_ALLOWED';
    var6[var10] = var7;
    var10 = 5;
    var6['MISSING_BASE_PERMISSIONS'] = var10;
    var7 = 'MISSING_BASE_PERMISSIONS';
    var6[var10] = var7;
    var10 = 6;
    var6['CHANNEL_DENIED'] = var10;
    var7 = 'CHANNEL_DENIED';
    var6[var10] = var7;
    var10 = 7;
    var6['USER_DENIED'] = var10;
    var7 = 'USER_DENIED';
    var6[var10] = var7;
    var _closure1_slot8 = var6;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/application_commands/CommandPermissionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['HasAccessResult'] = var6;
    var5 = function hasAccess(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = arg3;
            var15 = var2.context;
            var8 = var2.commandTypes;
            var1 = var2.allowNsfw;
            var6 = var2.computedPermissions;
            var13 = var2.userId;
            var12 = var2.roleIds;
            var11 = var2.isImpersonating;
            var14 = var2.hasBaseAccessPermissions;
            var5 = var4.applicationAllowedForUser;
            var9 = var4.applicationAllowedForChannel;
            var2 = var4.isGuildInstalled;
            var16 = var4.isUserInstalled;
            var17 = var4.commandBotId;
            var7 = var8.includes;
            var4 = var3.type;
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var4 = _closure1_slot8;
            var4 = var4.WRONG_COMMAND_TYPE;
            return var4;
case 60:
            var4 = var3.nsfw;
            if(!var4) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            if(var1) { _fun0006_ip = 62; continue _fun0006 }
case 64:
            var1 = _closure1_slot8;
            var1 = var1.NSFW_NOT_ALLOWED;
            return var1;
case 62:
            var4 = null;
            var1 = var4 != var15;
            var7 = undefined;
            var10 = undefined;
            if(!var1) { _fun0006_ip = 65; continue _fun0006 }
case 15:
            var8 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 4;
            var1 = var18[var1];
            var8 = var8.bind(var7)(var1);
            var1 = var8.computeCommandContextType;
            var10 = var1.bind(var8)(var15, var17);
case 65:
            var1 = var3.contexts;
            if(!(var4 == var1)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var17 = var3.inputType;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var8 = 5;
            var8 = var19[var8];
            var8 = var18.bind(var7)(var8);
            var8 = var8.ApplicationCommandInputType;
            var8 = var8.BOT;
            if(!(var17 === var8)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var17 = var3.dmPermission;
            var8 = false;
            if(!(var8 === var17)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 6;
            var8 = var18[var8];
            var8 = var17.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.BOT_DM;
            if(!(var10 !== var8)) { _fun0006_ip = 72; continue _fun0006 }
case 70:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 6;
            var8 = var18[var8];
            var8 = var17.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.PRIVATE_CHANNEL;
            if(!(var10 === var8)) { _fun0006_ip = 68; continue _fun0006 }
case 73:
            var8 = _closure1_slot8;
            var8 = var8.CONTEXT_NOT_ALLOWED;
            return var8;
case 72:
            var1 = _closure1_slot8;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
case 66:
            if(!(var4 != var10)) { _fun0006_ip = 68; continue _fun0006 }
case 74:
            var8 = var3.contexts;
            var1 = var8.includes;
            var1 = var1.bind(var8)(var10);
            if(var1) { _fun0006_ip = 68; continue _fun0006 }
case 75:
            var1 = _closure1_slot8;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
case 68:
            var1 = var3.predicate;
            if(!(var4 != var1)) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var8 = _closure1_slot4;
            var8 = var15 instanceof var8;
            if(!var8) { _fun0006_ip = 76; continue _fun0006 }
case 78:
            var17 = _closure1_slot5;
            var10 = var17.getGuild;
            var8 = var15.guild_id;
            var17 = var10.bind(var17)(var8);
            var10 = var3.predicate;
            var8 = {};
            var8['channel'] = var15;
            var8['guild'] = var17;
            var8 = var10.bind(var3)(var8);
            if(var8) { _fun0006_ip = 76; continue _fun0006 }
case 79:
            var1 = _closure1_slot8;
            var1 = var1.PREDICATE_FAILED;
            return var1;
case 76:
            var10 = var3.applicationId;
            var8 = _closure1_slot6;
            var8 = var8.BUILT_IN;
            if(!(var10 !== var8)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var8 = var4 != var15;
            var10 = undefined;
            if(!var8) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 4;
            var8 = var18[var8];
            var17 = var17.bind(var7)(var8);
            var8 = var17.getContextGuildId;
            var10 = var8.bind(var17)(var15);
case 82:
            if(!(var4 != var10)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var18 = _closure1_slot2;
            var17 = _closure1_slot3;
            var8 = 7;
            var17 = var17[var8];
            var19 = var18.bind(var7)(var17);
            var18 = var19.has;
            var17 = _closure1_slot7;
            var17 = var17.ADMINISTRATOR;
            var17 = var18.bind(var19)(var6, var17);
            if(var17) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            if(!var16) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var18 = var3.integration_types;
            if(!(var4 != var18)) { _fun0006_ip = 88; continue _fun0006 }
case 90:
            var17 = var18.includes;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var16 = 8;
            var16 = var20[var16];
            var16 = var19.bind(var7)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.USER_INSTALL;
            var16 = var17.bind(var18)(var16);
            if(var16) { _fun0006_ip = 91; continue _fun0006 }
case 88:
            if(var14) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
case 94:
            var2 = var3.integration_types;
            if(!(var4 != var2)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var16 = var3.integration_types;
            var14 = var16.includes;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var2 = 8;
            var2 = var18[var2];
            var2 = var17.bind(var7)(var2);
            var2 = var2.ApplicationIntegrationType;
            var2 = var2.GUILD_INSTALL;
            var2 = var14.bind(var16)(var2);
            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
case 95:
            var2 = _closure1_slot8;
            var2 = var2.MISSING_BASE_PERMISSIONS;
            return var2;
case 92:
            var2 = _closure1_slot4;
            var2 = var15 instanceof var2;
            if(!var2) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var14 = _closure1_slot1;
            var16 = _closure1_slot3;
            var2 = 9;
            var2 = var16[var2];
            var16 = var14.bind(var7)(var2);
            var14 = var7 !== var9;
            var2 = 'missing applicationAllowedForChannel';
            var2 = var16.bind(var7)(var14, var2);
            var14 = _closure1_slot13;
            var2 = var3.permissions;
            var14 = var14.bind(var7)(var2, var15, var10);
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var2 = _closure1_slot11;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0006_ip = 97; continue _fun0006 }
case 101:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var9);
            if(!var2) { _fun0006_ip = 97; continue _fun0006 }
case 102:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DENIED;
            return var2;
case 97:
            var9 = _closure1_slot14;
            var25 = var3.permissions;
            var26 = undefined;
            var24 = var10;
            var23 = var13;
            var22 = var12;
            var21 = var11;
            var9 = var26[var9](var25, var24, var23, var22, var21, var20);
            var2 = _closure1_slot11;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var5);
            if(var2) { _fun0006_ip = 105; continue _fun0006 }
case 107:
            var2 = var3.defaultMemberPermissions;
            if(!(var4 == var2)) { _fun0006_ip = 108; continue _fun0006 }
case 109:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            _fun0006_ip = 110; continue _fun0006;
case 108:
            var5 = _closure1_slot2;
            var12 = _closure1_slot3;
            var4 = var12[var8];
            var10 = var5.bind(var7)(var4);
            var9 = var10.equals;
            var5 = var3.defaultMemberPermissions;
            var11 = _closure1_slot0;
            var4 = 10;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.DISABLED_BY_DEFAULT_PERMISSION_FLAG;
            var4 = var9.bind(var10)(var5, var4);
            if(var4) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var4 = var4[var8];
            var5 = var5.bind(var7)(var4);
            var4 = var5.has;
            var3 = var3.defaultMemberPermissions;
            var3 = var4.bind(var5)(var6, var3);
            if(!var3) { _fun0006_ip = 111; continue _fun0006 }
case 113:
            var3 = _closure1_slot8;
            var3 = var3.ALLOWED;
            _fun0006_ip = 114; continue _fun0006;
case 111:
            var4 = _closure1_slot8;
            var3 = var4.USER_DENIED;
case 114:
            var2 = var3;
case 110:
            _fun0006_ip = 115; continue _fun0006;
case 105:
            var3 = _closure1_slot8;
            var2 = var3.USER_DENIED;
case 115:
            _fun0006_ip = 116; continue _fun0006;
case 103:
            var3 = _closure1_slot8;
            var2 = var3.ALLOWED;
case 116:
            return var2;
case 99:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DENIED;
            return var2;
case 91:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
case 86:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
case 84:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
case 80:
            var1 = _closure1_slot8;
            var1 = var1.ALLOWED;
            return var1;
        }
    };
    var3['hasAccess'] = var5;
    var3['computeAllowedForChannel'] = var4;
    var3['computeAllowedForUser'] = var2;
    return var1;
})();