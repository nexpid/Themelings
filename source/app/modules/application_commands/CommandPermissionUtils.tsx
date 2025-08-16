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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 225; continue _fun0004 }
 15:
            var8 = var3.id;
            var2 = var3.isThread;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
 33:
            var2 = var3.parent_id;
            if(!(var1 == var2)) { _fun0004_ip = 48; continue _fun0004 }
 43:
            var2 = var3.id;
 48:
            var8 = var2;
 51:
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
            if(!(var1 == var2)) { _fun0004_ip = 217; continue _fun0004 }
 120:
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
            if(!var5) { _fun0004_ip = 215; continue _fun0004 }
 209:
            var3 = var4.permission;
 215:
            return var3;
 217:
            var2 = var2.permission;
            return var2;
 225:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var2 = function computeAllowedForUser(arg1, arg2, arg3, arg4, arg5) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 328; continue _fun0005 }
 15:
            var2 = arg5;
            if(var2) { _fun0005_ip = 101; continue _fun0005 }
 21:
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
            if(!(var1 != var2)) { _fun0005_ip = 101; continue _fun0005 }
 93:
            var2 = var2.permission;
            return var2;
 101:
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
            if(var9) { _fun0005_ip = 243; continue _fun0005 }
 147:
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
            if(!(var1 != var9)) { _fun0005_ip = 221; continue _fun0005 }
 210:
            var9 = var9.permission;
            var12 = true;
            if(var9) { _fun0005_ip = 241; continue _fun0005 }
 221:
            var16 = var14.bind(var10)();
            var9 = var16.done;
            var13 = var16;
            var4 = var12;
            if(var9) { _fun0005_ip = 243; continue _fun0005 }
 239:
            _fun0005_ip = 147; continue _fun0005;
 241:
            return var7;
 243:
            if(var4) { _fun0005_ip = 326; continue _fun0005 }
 246:
            var7 = var1 != var8;
            var4 = null;
            if(!var7) { _fun0005_ip = 309; continue _fun0005 }
 255:
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
 309:
            var5 = var1 != var4;
            var3 = null;
            if(!var5) { _fun0005_ip = 324; continue _fun0005 }
 318:
            var3 = var4.permission;
 324:
            return var3;
 326:
            return var2;
 328:
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
 0:
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
            if(var4) { _fun0006_ip = 118; continue _fun0006 }
 103:
            var4 = _closure1_slot8;
            var4 = var4.WRONG_COMMAND_TYPE;
            return var4;
 118:
            var4 = var3.nsfw;
            if(!var4) { _fun0006_ip = 145; continue _fun0006 }
 127:
            if(var1) { _fun0006_ip = 145; continue _fun0006 }
 130:
            var1 = _closure1_slot8;
            var1 = var1.NSFW_NOT_ALLOWED;
            return var1;
 145:
            var4 = null;
            var1 = var4 != var15;
            var7 = undefined;
            var10 = undefined;
            if(!var1) { _fun0006_ip = 193; continue _fun0006 }
 158:
            var8 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 4;
            var1 = var18[var1];
            var8 = var8.bind(var7)(var1);
            var1 = var8.computeCommandContextType;
            var10 = var1.bind(var8)(var15, var17);
 193:
            var1 = var3.contexts;
            if(!(var4 == var1)) { _fun0006_ip = 362; continue _fun0006 }
 206:
            var17 = var3.inputType;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var8 = 5;
            var8 = var19[var8];
            var8 = var18.bind(var7)(var8);
            var8 = var8.ApplicationCommandInputType;
            var8 = var8.BOT;
            if(!(var17 === var8)) { _fun0006_ip = 400; continue _fun0006 }
 254:
            var17 = var3.dmPermission;
            var8 = false;
            if(!(var8 === var17)) { _fun0006_ip = 302; continue _fun0006 }
 266:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 6;
            var8 = var18[var8];
            var8 = var17.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.BOT_DM;
            if(!(var10 !== var8)) { _fun0006_ip = 350; continue _fun0006 }
 302:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 6;
            var8 = var18[var8];
            var8 = var17.bind(var7)(var8);
            var8 = var8.InteractionContextType;
            var8 = var8.PRIVATE_CHANNEL;
            if(!(var10 === var8)) { _fun0006_ip = 400; continue _fun0006 }
 338:
            var8 = _closure1_slot8;
            var8 = var8.CONTEXT_NOT_ALLOWED;
            return var8;
 350:
            var1 = _closure1_slot8;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
 362:
            if(!(var4 != var10)) { _fun0006_ip = 400; continue _fun0006 }
 366:
            var8 = var3.contexts;
            var1 = var8.includes;
            var1 = var1.bind(var8)(var10);
            if(var1) { _fun0006_ip = 400; continue _fun0006 }
 385:
            var1 = _closure1_slot8;
            var1 = var1.CONTEXT_NOT_ALLOWED;
            return var1;
 400:
            var1 = var3.predicate;
            if(!(var4 != var1)) { _fun0006_ip = 479; continue _fun0006 }
 410:
            var8 = _closure1_slot4;
            var8 = var15 instanceof var8;
            if(!var8) { _fun0006_ip = 479; continue _fun0006 }
 424:
            var17 = _closure1_slot5;
            var10 = var17.getGuild;
            var8 = var15.guild_id;
            var17 = var10.bind(var17)(var8);
            var10 = var3.predicate;
            var8 = {};
            var8['channel'] = var15;
            var8['guild'] = var17;
            var8 = var10.bind(var3)(var8);
            if(var8) { _fun0006_ip = 479; continue _fun0006 }
 467:
            var1 = _closure1_slot8;
            var1 = var1.PREDICATE_FAILED;
            return var1;
 479:
            var10 = var3.applicationId;
            var8 = _closure1_slot6;
            var8 = var8.BUILT_IN;
            if(!(var10 !== var8)) { _fun0006_ip = 1144; continue _fun0006 }
 504:
            var8 = var4 != var15;
            var10 = undefined;
            if(!var8) { _fun0006_ip = 544; continue _fun0006 }
 513:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var8 = 4;
            var8 = var18[var8];
            var17 = var17.bind(var7)(var8);
            var8 = var17.getContextGuildId;
            var10 = var8.bind(var17)(var15);
 544:
            if(!(var4 != var10)) { _fun0006_ip = 1132; continue _fun0006 }
 551:
            var18 = _closure1_slot2;
            var17 = _closure1_slot3;
            var8 = 7;
            var17 = var17[var8];
            var19 = var18.bind(var7)(var17);
            var18 = var19.has;
            var17 = _closure1_slot7;
            var17 = var17.ADMINISTRATOR;
            var17 = var18.bind(var19)(var6, var17);
            if(var17) { _fun0006_ip = 1120; continue _fun0006 }
 598:
            if(!var16) { _fun0006_ip = 659; continue _fun0006 }
 601:
            var18 = var3.integration_types;
            if(!(var4 != var18)) { _fun0006_ip = 659; continue _fun0006 }
 611:
            var17 = var18.includes;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var16 = 8;
            var16 = var20[var16];
            var16 = var19.bind(var7)(var16);
            var16 = var16.ApplicationIntegrationType;
            var16 = var16.USER_INSTALL;
            var16 = var17.bind(var18)(var16);
            if(var16) { _fun0006_ip = 1108; continue _fun0006 }
 659:
            if(var14) { _fun0006_ip = 738; continue _fun0006 }
 662:
            if(!var2) { _fun0006_ip = 738; continue _fun0006 }
 665:
            var2 = var3.integration_types;
            if(!(var4 != var2)) { _fun0006_ip = 726; continue _fun0006 }
 675:
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
            if(!var2) { _fun0006_ip = 738; continue _fun0006 }
 726:
            var2 = _closure1_slot8;
            var2 = var2.MISSING_BASE_PERMISSIONS;
            return var2;
 738:
            var2 = _closure1_slot4;
            var2 = var15 instanceof var2;
            if(!var2) { _fun0006_ip = 853; continue _fun0006 }
 749:
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
            if(var2) { _fun0006_ip = 1096; continue _fun0006 }
 817:
            var2 = _closure1_slot11;
            var2 = var2.bind(var7)(var14);
            if(var2) { _fun0006_ip = 853; continue _fun0006 }
 829:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var9);
            if(!var2) { _fun0006_ip = 853; continue _fun0006 }
 841:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DENIED;
            return var2;
 853:
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
            if(var2) { _fun0006_ip = 1084; continue _fun0006 }
 896:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0006_ip = 1072; continue _fun0006 }
 911:
            var2 = _closure1_slot12;
            var2 = var2.bind(var7)(var5);
            if(var2) { _fun0006_ip = 1072; continue _fun0006 }
 926:
            var2 = var3.defaultMemberPermissions;
            if(!(var4 == var2)) { _fun0006_ip = 948; continue _fun0006 }
 936:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            _fun0006_ip = 1070; continue _fun0006;
 948:
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
            if(var4) { _fun0006_ip = 1057; continue _fun0006 }
 1008:
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var4 = var4[var8];
            var5 = var5.bind(var7)(var4);
            var4 = var5.has;
            var3 = var3.defaultMemberPermissions;
            var3 = var4.bind(var5)(var6, var3);
            if(!var3) { _fun0006_ip = 1057; continue _fun0006 }
 1045:
            var3 = _closure1_slot8;
            var3 = var3.ALLOWED;
            _fun0006_ip = 1067; continue _fun0006;
 1057:
            var4 = _closure1_slot8;
            var3 = var4.USER_DENIED;
 1067:
            var2 = var3;
 1070:
            _fun0006_ip = 1082; continue _fun0006;
 1072:
            var3 = _closure1_slot8;
            var2 = var3.USER_DENIED;
 1082:
            _fun0006_ip = 1094; continue _fun0006;
 1084:
            var3 = _closure1_slot8;
            var2 = var3.ALLOWED;
 1094:
            return var2;
 1096:
            var2 = _closure1_slot8;
            var2 = var2.CHANNEL_DENIED;
            return var2;
 1108:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
 1120:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
 1132:
            var2 = _closure1_slot8;
            var2 = var2.ALLOWED;
            return var2;
 1144:
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