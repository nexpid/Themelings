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
    var1 = function computeAllowNsfw(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var1 = arg2;
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot5;
            var5 = var4 instanceof var2;
            var2 = !var5;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.guild_id;
            var5 = null;
            if(!(var5 != var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.nsfw;
case 6:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function computePermissions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot5;
            var1 = var7 instanceof var1;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var7.isPrivate;
            var1 = var1.bind(var7)();
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 8:
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot9;
            var1 = var3.computePermissions;
            var5 = var1.bind(var3)(var7);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 11;
            var1 = var1[var9];
            var8 = undefined;
            var4 = var3.bind(var8)(var1);
            var3 = var4.has;
            var1 = _closure1_slot12;
            var1 = var1.ADMINISTRATOR;
            var1 = var3.bind(var4)(var5, var1);
            var4 = true;
            var3 = true;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot5;
            var7 = var7 instanceof var1;
            var10 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var11 = var10.bind(var8)(var1);
            var10 = var11.has;
            var1 = _closure1_slot12;
            var1 = var1.VIEW_CHANNEL;
            var1 = var10.bind(var11)(var5, var1);
            if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = var1;
            var3 = true;
            _fun0002_ip = 12; continue _fun0002;
case 14:
            var6 = var1;
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var10 = var7.bind(var8)(var1);
            var7 = var10.has;
            var1 = _closure1_slot12;
            var1 = var1.USE_APPLICATION_COMMANDS;
            var6 = var7.bind(var10)(var5, var1);
case 16:
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var7.bind(var8)(var1);
            var8 = var9.has;
            var7 = _closure1_slot12;
            var1 = arg2;
            if(var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var7.SEND_MESSAGES;
            var1 = var8.bind(var9)(var5, var1);
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var7 = var7.SEND_MESSAGES_IN_THREADS;
            var1 = var8.bind(var9)(var5, var7);
case 20:
            var3 = var1;
            var4 = var6;
case 12:
            var1 = {};
            var1['computedPermissions'] = var5;
            var1['hasBaseAccessPermissions'] = var4;
            var1['hasSendMessagesPermission'] = var3;
            return var1;
case 10:
            var1 = {'computedPermissions': null, 'hasBaseAccessPermissions': true, 'hasSendMessagesPermission': true};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 11;
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
    var _closure1_slot14 = var1;
    var2 = function getContextGuildId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot5;
            var1 = var2 instanceof var1;
            if(var1) { _fun0003_ip = 21; continue _fun0003 }
case 9:
            var1 = var2.id;
            _fun0003_ip = 22; continue _fun0003;
case 21:
            var1 = var2.guild_id;
case 22:
            return var1;
        }
    };
    var _closure1_slot15 = var2;
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
    var5 = var8.bind(var1)(var5);
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
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot11 = var8;
    var5 = var5.Permissions;
    var _closure1_slot12 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/CommandPermissionContext.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function buildPermissionContext(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var1 = _closure1_slot5;
            var1 = var12 instanceof var1;
            var6 = var12;
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var1 = var12.isThread;
            var1 = var1.bind(var12)();
            var6 = var12;
            if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 25:
            var4 = _closure1_slot7;
            var3 = var4.getChannel;
            var1 = var12.parent_id;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var6 = var12;
            if(!(var3 != var1)) { _fun0004_ip = 23; continue _fun0004 }
case 26:
            var6 = var1;
case 23:
            var1 = null;
            var3 = var1 != var6;
            var5 = undefined;
            var8 = undefined;
            if(!var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = _closure1_slot15;
            var8 = var3.bind(var5)(var6);
case 27:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.ViewNsfwCommands;
            var3 = var4.getSetting;
            var4 = var3.bind(var4)();
            var7 = _closure1_slot6;
            var3 = var7.getId;
            var10 = var3.bind(var7)();
            var7 = _closure1_slot10;
            var3 = var7.getCurrentUser;
            var3 = var3.bind(var7)();
            var9 = var1 == var3;
            var7 = undefined;
            if(var9) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var7 = var3.nsfwAllowed;
case 29:
            var3 = var1 != var7;
            if(!var3) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var3 = var7;
case 31:
            if(!(var1 != var8)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var9 = _closure1_slot8;
            var7 = var9.getMember;
            var7 = var7.bind(var9)(var8, var10);
            var11 = var1 == var7;
            var9 = undefined;
            if(var11) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var9 = var7.roles;
case 35:
            if(!(var1 == var9)) { _fun0004_ip = 37; continue _fun0004 }
case 33:
            var9 = new Array(0);
case 37:
            var7 = _closure1_slot4;
            var1 = var7.isViewingRoles;
            var8 = var1.bind(var7)(var8);
            var7 = _closure1_slot14;
            var1 = _closure1_slot5;
            var1 = var12 instanceof var1;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var11 = var12.isThread;
            var1 = var11.bind(var12)();
case 38:
            var7 = var7.bind(var5)(var6, var1);
            var1 = {};
            var1['context'] = var6;
            var1['userId'] = var10;
            var1['roleIds'] = var9;
            var1['isImpersonating'] = var8;
            var8 = arg2;
            var1['commandTypes'] = var8;
            var8 = var7.computedPermissions;
            var1['computedPermissions'] = var8;
            var8 = var7.hasBaseAccessPermissions;
            var1['hasBaseAccessPermissions'] = var8;
            var7 = var7.hasSendMessagesPermission;
            var1['hasSendMessagesPermission'] = var7;
            var2 = _closure1_slot13;
            var2 = var2.bind(var5)(var6, var3, var4);
            var1['allowNsfw'] = var2;
            return var1;
        }
    };
    var3['buildPermissionContext'] = var5;
    var5 = function usePermissionContext(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var12 = arg2;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var12;
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
                    if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 40:
                    var4 = _closure2_slot0;
                    var3 = var4.isThread;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 41:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0006_ip = 42; continue _fun0006 }
case 23:
                    var1 = _closure2_slot0;
case 42:
                    return var1;
                }
            };
            var11 = var6.bind(var7)(var3, var4);
            var _closure2_slot2 = var11;
            var3 = null;
            var4 = var3 != var11;
            var10 = undefined;
            var3 = undefined;
            if(!var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var4 = _closure1_slot15;
            var3 = var4.bind(var10)(var11);
case 43:
            var _closure2_slot3 = var3;
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 9;
            var3 = var13[var3];
            var3 = var4.bind(var10)(var3);
            var6 = var3.ViewNsfwCommands;
            var3 = var6.useSetting;
            var6 = var3.bind(var6)();
            var _closure2_slot4 = var6;
            var3 = 10;
            var7 = var13[var3];
            var14 = var4.bind(var10)(var7);
            var9 = var14.useStateFromStores;
            var7 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var9.bind(var14)(var8, var7);
            var _closure2_slot5 = var8;
            var7 = var13[var3];
            var15 = var4.bind(var10)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 8; continue _fun0007 }
case 45:
                    var2 = var3.nsfwAllowed;
case 8:
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var1 = var2;
case 46:
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var9, var7);
            var _closure2_slot6 = var7;
            var9 = var13[var3];
            var16 = var4.bind(var10)(var9);
            var15 = var16.useStateFromStoresArray;
            var9 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var5 = _closure1_slot8;
                    var4 = var5.getMember;
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot5;
                    var3 = var4.bind(var5)(var3, var1);
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 4; continue _fun0008 }
case 50:
                    var1 = var3.roles;
case 4:
                    if(!(var2 == var1)) { _fun0008_ip = 51; continue _fun0008 }
case 48:
                    var1 = new Array(0);
case 51:
                    return var1;
                }
            };
            var9 = var15.bind(var16)(var14, var9);
            var _closure2_slot7 = var9;
            var3 = var13[var3];
            var13 = var4.bind(var10)(var3);
            var10 = var13.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isViewingRoles;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var13)(var4, var3);
            var _closure2_slot8 = var10;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(8);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var2[5] = var7;
            var2[6] = var6;
            var2[7] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot2;
                    var6 = _closure2_slot0;
                    var1 = _closure1_slot5;
                    var1 = var6 instanceof var1;
                    if(!var1) { _fun0009_ip = 46; continue _fun0009 }
case 22:
                    var7 = _closure2_slot0;
                    var6 = var7.isThread;
                    var1 = var6.bind(var7)();
case 46:
                    var6 = undefined;
                    var1 = var5.bind(var6)(var4, var1);
                    var8 = var1.computedPermissions;
                    var7 = var1.hasBaseAccessPermissions;
                    var4 = var1.hasSendMessagesPermission;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['context'] = var5;
                    var9 = _closure2_slot5;
                    var1['userId'] = var9;
                    var9 = _closure2_slot7;
                    var1['roleIds'] = var9;
                    var9 = _closure2_slot1;
                    var1['commandTypes'] = var9;
                    var9 = _closure2_slot8;
                    var1['isImpersonating'] = var9;
                    var1['computedPermissions'] = var8;
                    var1['hasBaseAccessPermissions'] = var7;
                    var1['hasSendMessagesPermission'] = var4;
                    var4 = _closure1_slot13;
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot4;
                    var2 = var4.bind(var6)(var5, var3, var2);
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
            if(!var1) { _fun0010_ip = 52; continue _fun0010 }
case 9:
            var2 = null;
            var4 = var2 == var6;
            var5 = undefined;
            var1 = undefined;
            if(var4) { _fun0010_ip = 5; continue _fun0010 }
case 53:
            var1 = var6.guild_id;
case 5:
            if(!(var2 != var1)) { _fun0010_ip = 54; continue _fun0010 }
case 52:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var4);
            var1 = var1.InteractionContextType;
            var1 = var1.GUILD;
            _fun0010_ip = 55; continue _fun0010;
case 54:
            var4 = var2 == var6;
            var7 = undefined;
            if(var4) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var7 = var6.type;
case 56:
            var4 = _closure1_slot11;
            var4 = var4.DM;
            if(!(var7 === var4)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var2 = var2 == var6;
            var4 = undefined;
            if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var2 = var6.getRecipientId;
            var4 = var2.bind(var6)();
case 60:
            var2 = arg2;
            if(!(var4 !== var2)) { _fun0010_ip = 14; continue _fun0010 }
case 58:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.InteractionContextType;
            var2 = var2.PRIVATE_CHANNEL;
            _fun0010_ip = 62; continue _fun0010;
case 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.InteractionContextType;
            var2 = var3.BOT_DM;
case 62:
            var1 = var2;
case 55:
            return var1;
        }
    };
    var3['computeCommandContextType'] = var4;
    var3['getContextGuildId'] = var2;
    return var1;
})();