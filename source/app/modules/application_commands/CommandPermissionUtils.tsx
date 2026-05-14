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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var1 = function isExplicitAllow(arg1) {
        var2 = true;
        var1 = arg1;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function isExplicitDeny(arg1) {
        var2 = false;
        var1 = arg1;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot13 = var1;
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
            var5 = 15;
            var6 = var2[var5];
            var9 = undefined;
            var7 = var11.bind(var9)(var6);
            var6 = var7.toPermissionKey;
            var10 = 6;
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
            var5 = 11;
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
    var _closure1_slot14 = var4;
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
            var2 = 15;
            var2 = var9[var2];
            var3 = undefined;
            var6 = var7.bind(var3)(var2);
            var4 = var6.toPermissionKey;
            var2 = 6;
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
            var4 = _closure1_slot10;
            var10 = undefined;
            var2 = arg4;
            var14 = var4.bind(var10)(var2);
            var4 = var14.bind(var10)();
            var9 = var4.done;
            var2 = false;
            var7 = true;
            var6 = 15;
            var11 = 6;
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
    var _closure1_slot15 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var14 = 0;
    var6 = var9[var14];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var13 = 1;
    var6 = var9[var13];
    var6 = var8.bind(var1)(var6);
    var6 = var6.ChannelRecordBase;
    var _closure1_slot5 = var6;
    var12 = 2;
    var6 = var9[var12];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var11 = 3;
    var6 = var9[var11];
    var6 = var8.bind(var1)(var6);
    var6 = var6.BuiltInSectionId;
    var _closure1_slot7 = var6;
    var10 = 4;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot8 = var6;
    var6 = {};
    var6['ALLOWED'] = var14;
    var7 = 'ALLOWED';
    var6[var14] = var7;
    var6['NSFW_NOT_ALLOWED'] = var13;
    var7 = 'NSFW_NOT_ALLOWED';
    var6[var13] = var7;
    var6['WRONG_COMMAND_TYPE'] = var12;
    var7 = 'WRONG_COMMAND_TYPE';
    var6[var12] = var7;
    var6['PREDICATE_FAILED'] = var11;
    var7 = 'PREDICATE_FAILED';
    var6[var11] = var7;
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
    var _closure1_slot9 = var6;
    var7 = 16;
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
            var16 = var2.hasBaseAccessPermissions;
            var14 = var2.hasSendMessagesPermission;
            var5 = var4.applicationAllowedForUser;
            var9 = var4.applicationAllowedForChannel;
            var2 = var4.isGuildInstalled;
            var17 = var4.isUserInstalled;
            var18 = var4.commandBotId;
            var7 = var8.includes;
            var4 = var3.type;
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var4 = _closure1_slot9;
            var4 = var4.WRONG_COMMAND_TYPE;
            return var4;
case 60:
            var4 = var3.nsfw;
            if(var4) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var21 = var3.applicationId;
            var8 = _closure1_slot1;
            var10 = _closure1_slot3;
            var4 = 12;
            var4 = var10[var4];
            var19 = undefined;
            var10 = var8.bind(var19)(var4);
            var8 = var10.getConfig;
            var4 = {};
            var20 = 'isApplicationAgeRestricted';
            var4['location'] = var20;
            var4 = var8.bind(var10)(var4);
            var8 = var4.enabled;
            var4 = false;
            if(!var8) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var20 = _closure1_slot4;
            var8 = var20.getApplication;
            var22 = var8.bind(var20)(var21);
            var20 = null;
            var21 = var20 == var22;
            var8 = undefined;
            if(var21) { _fun0006_ip = 21; continue _fun0006 }
case 66:
            var8 = var22.contentClassification;
case 21:
            var8 = var20 == var8;
            var4 = false;
            if(var8) { _fun0006_ip = 64; continue _fun0006 }
case 49:
            var10 = _closure1_slot0;
            var20 = _closure1_slot3;
            var23 = 13;
            var7 = var20[var23];
            var21 = var10.bind(var19)(var7);
            var8 = var21.contentClassificationToAgeRestriction;
            var7 = {};
            var23 = var20[var23];
            var23 = var10.bind(var19)(var23);
            var23 = var23.ContentClassificationVariant;
            var23 = var23.MINIMAL;
            var7['type'] = var23;
            var22 = var22.contentClassification;
            var7['data'] = var22;
            var8 = var8.bind(var21)(var7);
            var7 = 14;
            var7 = var20[var7];
            var7 = var10.bind(var19)(var7);
            var7 = var7.AgeRestrictionStatus;
            var7 = var7.ADULT;
            var4 = var8 === var7;
case 64:
            if(!var4) { _fun0006_ip = 67; continue _fun0006 }
case 62:
            if(var1) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var1 = _closure1_slot9;
            var1 = var1.NSFW_NOT_ALLOWED;
            return var1;
case 67:
            var4 = null;
            var1 = var4 != var15;
            var7 = undefined;
            var10 = undefined;
            if(!var1) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var8 = _closure1_slot0;
            var19 = _closure1_slot3;
            var1 = 5;
            var1 = var19[var1];
            var8 = var8.bind(var7)(var1);
            var1 = var8.computeCommandContextType;
            var10 = var1.bind(var8)(var15, var18);
case 69:
            var1 = var3.contexts;
            if(!(var4 == var1)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var18 = var3.inputType;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var8 = 6;
            var8 = var20[var8];
            var8 = var19.bind(var7)(var8);
            var8 = var8.ApplicationCommandInputType;
            var8 = var8.BOT;
            if(!(var18 === var8)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var18 = var3.dmPermission;
            var8 = false;
            if(!(var8 === var18)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var8 = 7;
            var8 = var19[var8];
            var8 = var18.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.BOT_DM;
            if(!(var10 !== var8)) { _fun0006_ip = 77; continue _fun0006 }
case 75:
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var8 = 7;
            var8 = var19[var8];
            var8 = var18.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.PRIVATE_CHANNEL;
            if(!(var10 === var8)) { _fun0006_ip = 73; continue _fun0006 }
case 78:
            var8 = _closure1_slot9;
            var8 = var8.CONTEXT_NOT_ALLOWED;
            return var8;
case 77:
            var1 = _closure1_slot9;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
case 71:
            if(!(var4 != var10)) { _fun0006_ip = 73; continue _fun0006 }
case 79:
            var8 = var3.contexts;
            var1 = var8.includes;
            var1 = var1.bind(var8)(var10);
            if(var1) { _fun0006_ip = 73; continue _fun0006 }
case 80:
            var1 = _closure1_slot9;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
case 73:
            var1 = var3.predicate;
            if(!(var4 != var1)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var8 = _closure1_slot5;
            var8 = var15 instanceof var8;
            if(!var8) { _fun0006_ip = 81; continue _fun0006 }
case 83:
            var18 = _closure1_slot6;
            var10 = var18.getGuild;
            var8 = var15.guild_id;
            var18 = var10.bind(var18)(var8);
            var10 = var3.predicate;
            var8 = {};
            var8['channel'] = var15;
            var8['guild'] = var18;
            var8 = var10.bind(var3)(var8);
            if(var8) { _fun0006_ip = 81; continue _fun0006 }
case 84:
            var1 = _closure1_slot9;
            var1 = var1.PREDICATE_FAILED;
            return var1;
case 81:
            var10 = var3.applicationId;
            var8 = _closure1_slot7;
            var8 = var8.BUILT_IN;
            if(!(var10 !== var8)) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var8 = var4 != var15;
            var10 = undefined;
            if(!var8) { _fun0006_ip = 87; continue _fun0006 }
case 88:
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var8 = 5;
            var8 = var19[var8];
            var18 = var18.bind(var7)(var8);
            var8 = var18.getContextGuildId;
            var10 = var8.bind(var18)(var15);
case 87:
            if(!(var4 != var10)) { _fun0006_ip = 89; continue _fun0006 }
case 90:
            var19 = _closure1_slot2;
            var18 = _closure1_slot3;
            var8 = 8;
            var18 = var18[var8];
            var20 = var19.bind(var7)(var18);
            var19 = var20.has;
            var18 = _closure1_slot8;
            var18 = var18.ADMINISTRATOR;
            var18 = var19.bind(var20)(var6, var18);
            if(var18) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            if(!var17) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var19 = var3.integration_types;
            if(!(var4 != var19)) { _fun0006_ip = 93; continue _fun0006 }
case 95:
            var18 = var19.includes;
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var17 = 9;
            var17 = var21[var17];
            var17 = var20.bind(var7)(var17);
            var17 = var17.ApplicationIntegrationType;
            var17 = var17.USER_INSTALL;
            var17 = var18.bind(var19)(var17);
            if(var17) { _fun0006_ip = 96; continue _fun0006 }
case 93:
            if(!var16) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            if(var14) { _fun0006_ip = 99; continue _fun0006 }
case 97:
            if(!var2) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            var2 = var3.integration_types;
            if(!(var4 != var2)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var16 = var3.integration_types;
            var14 = var16.includes;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var2 = 9;
            var2 = var18[var2];
            var2 = var17.bind(var7)(var2);
            var2 = var2.ApplicationIntegrationType;
            var2 = var2.GUILD_INSTALL;
            var2 = var14.bind(var16)(var2);
            if(!var2) { _fun0006_ip = 99; continue _fun0006 }
case 101:
            var2 = _closure1_slot9;
            var2 = var2.MISSING_BASE_PERMISSIONS;
            return var2;
case 99:
            var2 = _closure1_slot5;
            var2 = var15 instanceof var2;
            if(!var2) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var14 = _closure1_slot1;
            var16 = _closure1_slot3;
            var2 = 10;
            var2 = var16[var2];
            var16 = var14.bind(var7)(var2);
            var14 = var7 !== var9;
            var2 = 'missing applicationAllowedForChannel';
            var2 = var16.bind(var7)(var14, var2);
            var14 = _closure1_slot14;
            var2 = var3.permissions;
            var14 = var14.bind(var7)(var2, var15, var10);
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0006_ip = 103; continue _fun0006 }
case 107:
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var9);
            if(!var2) { _fun0006_ip = 103; continue _fun0006 }
case 108:
            var2 = _closure1_slot9;
            var2 = var2.CHANNEL_DENIED;
            return var2;
case 103:
            var9 = _closure1_slot15;
            var28 = var3.permissions;
            var29 = undefined;
            var27 = var10;
            var26 = var13;
            var25 = var12;
            var24 = var11;
            var9 = var29[var9](var28, var27, var26, var25, var24, var23);
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var2 = _closure1_slot13;
            var2 = var2.bind(var7)(var5);
            if(var2) { _fun0006_ip = 111; continue _fun0006 }
case 113:
            var2 = var3.defaultMemberPermissions;
            if(!(var4 == var2)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var2 = _closure1_slot9;
            var2 = var2.ALLOWED;
            _fun0006_ip = 116; continue _fun0006;
case 114:
            var5 = _closure1_slot2;
            var12 = _closure1_slot3;
            var4 = var12[var8];
            var10 = var5.bind(var7)(var4);
            var9 = var10.equals;
            var5 = var3.defaultMemberPermissions;
            var11 = _closure1_slot0;
            var4 = 11;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.DISABLED_BY_DEFAULT_PERMISSION_FLAG;
            var4 = var9.bind(var10)(var5, var4);
            if(var4) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var4 = var4[var8];
            var5 = var5.bind(var7)(var4);
            var4 = var5.has;
            var3 = var3.defaultMemberPermissions;
            var3 = var4.bind(var5)(var6, var3);
            if(!var3) { _fun0006_ip = 117; continue _fun0006 }
case 119:
            var3 = _closure1_slot9;
            var3 = var3.ALLOWED;
            _fun0006_ip = 120; continue _fun0006;
case 117:
            var4 = _closure1_slot9;
            var3 = var4.USER_DENIED;
case 120:
            var2 = var3;
case 116:
            _fun0006_ip = 121; continue _fun0006;
case 111:
            var3 = _closure1_slot9;
            var2 = var3.USER_DENIED;
case 121:
            _fun0006_ip = 122; continue _fun0006;
case 109:
            var3 = _closure1_slot9;
            var2 = var3.ALLOWED;
case 122:
            return var2;
case 105:
            var2 = _closure1_slot9;
            var2 = var2.CHANNEL_DENIED;
            return var2;
case 96:
            var2 = _closure1_slot9;
            var2 = var2.ALLOWED;
            return var2;
case 91:
            var2 = _closure1_slot9;
            var2 = var2.ALLOWED;
            return var2;
case 89:
            var2 = _closure1_slot9;
            var2 = var2.ALLOWED;
            return var2;
case 85:
            var1 = _closure1_slot9;
            var1 = var1.ALLOWED;
            return var1;
        }
    };
    var3['hasAccess'] = var5;
    var3['computeAllowedForChannel'] = var4;
    var3['computeAllowedForUser'] = var2;
    return var1;
})();