// app/modules/application_commands/CommandPermissionContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function computeAllowNsfw(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = arg3;
            var5 = arg4;
            var1 = arg2;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var4 = var6 instanceof var2;
            var2 = !var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.guild_id;
            var4 = null;
            if(!(var4 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var6.isNSFW;
            var4 = var4.bind(var6)();
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5;
case 8:
            var3 = var4;
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function computePermissions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot5;
            var1 = var7 instanceof var1;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var7.isPrivate;
            var1 = var1.bind(var7)();
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = _closure1_slot11;
            var1 = var3.computePermissions;
            var5 = var1.bind(var3)(var7);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 13;
            var1 = var1[var9];
            var8 = undefined;
            var4 = var3.bind(var8)(var1);
            var3 = var4.has;
            var1 = _closure1_slot14;
            var1 = var1.ADMINISTRATOR;
            var1 = var3.bind(var4)(var5, var1);
            var4 = true;
            var3 = true;
            if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = _closure1_slot5;
            var7 = var7 instanceof var1;
            var10 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var11 = var10.bind(var8)(var1);
            var10 = var11.has;
            var1 = _closure1_slot14;
            var1 = var1.VIEW_CHANNEL;
            var1 = var10.bind(var11)(var5, var1);
            if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = var1;
            var3 = true;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var6 = var1;
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var10 = var7.bind(var8)(var1);
            var7 = var10.has;
            var1 = _closure1_slot14;
            var1 = var1.USE_APPLICATION_COMMANDS;
            var6 = var7.bind(var10)(var5, var1);
case 18:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var7.bind(var8)(var1);
            var8 = var9.has;
            var7 = _closure1_slot14;
            var1 = arg2;
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = var7.SEND_MESSAGES;
            var1 = var8.bind(var9)(var5, var1);
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var7 = var7.SEND_MESSAGES_IN_THREADS;
            var1 = var8.bind(var9)(var5, var7);
case 22:
            var3 = var1;
            var4 = var6;
case 14:
            var1 = {};
            var1['computedPermissions'] = var5;
            var1['hasBaseAccessPermissions'] = var4;
            var1['hasSendMessagesPermission'] = var3;
            return var1;
case 12:
            var1 = {'computedPermissions': null, 'hasBaseAccessPermissions': true, 'hasSendMessagesPermission': true};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.deserialize;
            var2 = 0;
            var2 = var3.bind(var4)(var2);
            var1['computedPermissions'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = function getContextGuildId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot5;
            var1 = var2 instanceof var1;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 11:
            var1 = var2.id;
            _fun0003_ip = 24; continue _fun0003;
case 23:
            var1 = var2.guild_id;
case 24:
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChannelRecordBase;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isGuildNSFW;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot13 = var8;
    var5 = var5.Permissions;
    var _closure1_slot14 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/CommandPermissionContext.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function buildPermissionContext(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var13 = arg1;
            var1 = _closure1_slot5;
            var1 = var13 instanceof var1;
            var7 = var13;
            if(!var1) { _fun0004_ip = 6; continue _fun0004 }
case 25:
            var1 = var13.isThread;
            var1 = var1.bind(var13)();
            var7 = var13;
            if(!var1) { _fun0004_ip = 6; continue _fun0004 }
case 26:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var1 = var13.parent_id;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var7 = var13;
            if(!(var3 != var1)) { _fun0004_ip = 6; continue _fun0004 }
case 8:
            var7 = var1;
case 6:
            var1 = null;
            var3 = var1 != var7;
            var6 = undefined;
            var10 = undefined;
            if(!var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = _closure1_slot17;
            var10 = var3.bind(var6)(var7);
case 27:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getViewNsfwCommandsOrDefault;
            var5 = var3.bind(var4)();
            var4 = _closure1_slot7;
            var3 = var4.getId;
            var11 = var3.bind(var4)();
            var4 = _closure1_slot12;
            var3 = var4.getCurrentUser;
            var4 = var3.bind(var4)();
            var8 = var1 == var4;
            var3 = undefined;
            if(var8) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = var4.nsfwAllowed;
case 29:
            var4 = var1 != var3;
            if(!var4) { _fun0004_ip = 19; continue _fun0004 }
case 31:
            var4 = var3;
case 19:
            if(!(var1 != var10)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var8 = _closure1_slot9;
            var3 = var8.getMember;
            var3 = var3.bind(var8)(var10, var11);
            var8 = var1 == var3;
            var9 = undefined;
            if(var8) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var9 = var3.roles;
case 34:
            if(!(var1 == var9)) { _fun0004_ip = 36; continue _fun0004 }
case 32:
            var9 = new Array(0);
case 36:
            var3 = _closure1_slot4;
            var1 = var3.isViewingRoles;
            var8 = var1.bind(var3)(var10);
            var3 = _closure1_slot16;
            var1 = _closure1_slot5;
            var1 = var13 instanceof var1;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var12 = var13.isThread;
            var1 = var12.bind(var13)();
case 37:
            var3 = var3.bind(var6)(var7, var1);
            var1 = {};
            var1['context'] = var7;
            var1['userId'] = var11;
            var1['roleIds'] = var9;
            var1['isImpersonating'] = var8;
            var8 = arg2;
            var1['commandTypes'] = var8;
            var8 = var3.computedPermissions;
            var1['computedPermissions'] = var8;
            var8 = var3.hasBaseAccessPermissions;
            var1['hasBaseAccessPermissions'] = var8;
            var3 = var3.hasSendMessagesPermission;
            var1['hasSendMessagesPermission'] = var3;
            var3 = _closure1_slot15;
            var8 = _closure1_slot6;
            var9 = _closure1_slot10;
            var2 = var9.getGuild;
            var2 = var2.bind(var9)(var10);
            var14 = var8.bind(var6)(var2);
            var18 = undefined;
            var17 = var7;
            var16 = var4;
            var15 = var5;
            var2 = var18[var3](var17, var16, var15, var14, var13);
            var1['allowNsfw'] = var2;
            return var1;
        }
    };
    var3['buildPermissionContext'] = var5;
    var5 = function usePermissionContext(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var11;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var5;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot5;
                    var3 = var4 instanceof var3;
                    if(!var3) { _fun0006_ip = 6; continue _fun0006 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = var4.isThread;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0006_ip = 6; continue _fun0006 }
case 5:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0006_ip = 39; continue _fun0006 }
case 6:
                    var1 = _closure2_slot0;
case 39:
                    return var1;
                }
            };
            var10 = var6.bind(var7)(var3, var4);
            var _closure2_slot2 = var10;
            var3 = null;
            var4 = var3 != var10;
            var13 = undefined;
            var3 = undefined;
            if(!var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var4 = _closure1_slot17;
            var3 = var4.bind(var13)(var10);
case 40:
            var _closure2_slot3 = var3;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 11;
            var4 = var15[var4];
            var6 = var14.bind(var13)(var4);
            var4 = var6.useViewNsfwCommandsOrDefault;
            var12 = var4.bind(var6)();
            var4 = 12;
            var6 = var15[var4];
            var9 = var14.bind(var13)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var8.bind(var9)(var7, var6);
            var _closure2_slot4 = var7;
            var6 = var15[var4];
            var16 = var14.bind(var13)(var6);
            var9 = var16.useStateFromStores;
            var6 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 10; continue _fun0007 }
case 42:
                    var2 = var3.nsfwAllowed;
case 10:
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var1 = var2;
case 43:
                    return var1;
                }
            };
            var6 = var9.bind(var16)(var8, var6);
            var8 = var15[var4];
            var17 = var14.bind(var13)(var8);
            var16 = var17.useStateFromStoresArray;
            var8 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var5 = _closure1_slot9;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var3 = var4.bind(var5)(var3, var1);
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 47; continue _fun0008 }
case 7:
                    var1 = var3.roles;
case 47:
                    if(!(var2 == var1)) { _fun0008_ip = 48; continue _fun0008 }
case 45:
                    var1 = new Array(0);
case 48:
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var9, var8);
            var _closure2_slot5 = var8;
            var9 = var15[var4];
            var18 = var14.bind(var13)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot4;
            var16 = new Array(1);
            var16[0] = var9;
            var9 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isViewingRoles;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var17.bind(var18)(var16, var9);
            var _closure2_slot6 = var9;
            var4 = var15[var4];
            var16 = var14.bind(var13)(var4);
            var15 = var16.useStateFromStores;
            var4 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var4 = _closure1_slot10;
                var2 = var4.getGuild;
                var1 = _closure2_slot3;
                var2 = var2.bind(var4)(var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = var15.bind(var16)(var14, var3, var4);
            var3 = _closure1_slot15;
            var23 = undefined;
            var22 = var10;
            var21 = var6;
            var20 = var12;
            var6 = var23[var3](var22, var21, var20, var19, var18);
            var _closure2_slot7 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var2[5] = var6;
            var2[6] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure1_slot16;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot5;
                    var3 = var3 instanceof var1;
                    if(!var3) { _fun0009_ip = 43; continue _fun0009 }
case 24:
                    var6 = _closure2_slot0;
                    var1 = var6.isThread;
                    var3 = var1.bind(var6)();
case 43:
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3);
                    var5 = var1.computedPermissions;
                    var4 = var1.hasBaseAccessPermissions;
                    var3 = var1.hasSendMessagesPermission;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['context'] = var6;
                    var6 = _closure2_slot4;
                    var1['userId'] = var6;
                    var6 = _closure2_slot5;
                    var1['roleIds'] = var6;
                    var6 = _closure2_slot1;
                    var1['commandTypes'] = var6;
                    var6 = _closure2_slot6;
                    var1['isImpersonating'] = var6;
                    var1['computedPermissions'] = var5;
                    var1['hasBaseAccessPermissions'] = var4;
                    var1['hasSendMessagesPermission'] = var3;
                    var2 = _closure2_slot7;
                    var1['allowNsfw'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['usePermissionContext'] = var5;
    var4 = function computeCommandContextType(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot5;
            var1 = var6 instanceof var1;
            if(!var1) { _fun0010_ip = 49; continue _fun0010 }
case 11:
            var2 = null;
            var4 = var2 == var6;
            var5 = undefined;
            var1 = undefined;
            if(var4) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var1 = var6.guild_id;
case 50:
            if(!(var2 != var1)) { _fun0010_ip = 52; continue _fun0010 }
case 49:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var4);
            var1 = var1.InteractionContextType;
            var1 = var1.GUILD;
            _fun0010_ip = 35; continue _fun0010;
case 52:
            var4 = var2 == var6;
            var7 = undefined;
            if(var4) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var7 = var6.type;
case 53:
            var4 = _closure1_slot13;
            var4 = var4.DM;
            if(!(var7 === var4)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
            var2 = var2 == var6;
            var4 = undefined;
            if(var2) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var2 = var6.getRecipientId;
            var4 = var2.bind(var6)();
case 57:
            var2 = arg2;
            if(!(var4 !== var2)) { _fun0010_ip = 16; continue _fun0010 }
case 55:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.InteractionContextType;
            var2 = var2.PRIVATE_CHANNEL;
            _fun0010_ip = 59; continue _fun0010;
case 16:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.InteractionContextType;
            var2 = var3.BOT_DM;
case 59:
            var1 = var2;
case 35:
            return var1;
        }
    };
    var3['computeCommandContextType'] = var4;
    var3['getContextGuildId'] = var2;
    return var1;
})();