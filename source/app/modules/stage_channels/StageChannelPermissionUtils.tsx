// app/modules/stage_channels/StageChannelPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function createOrUpdateModeratorOverwrite(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg3;
            var1 = {};
            var2 = arg1;
            var1['id'] = var2;
            var2 = arg2;
            var1['type'] = var2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 8;
            var2 = var2[var4];
            var8 = undefined;
            var13 = var3.bind(var8)(var2);
            var12 = var13.remove;
            var7 = null;
            var2 = var7 == var9;
            var11 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var9.deny;
case 2:
            if(!(var7 == var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var3.bind(var8)(var2);
            var11 = var2.NONE;
case 4:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var5 = var10[var2];
            var5 = var3.bind(var8)(var5);
            var5 = var5.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var5 = var12.bind(var13)(var11, var5);
            var1['deny'] = var5;
            var5 = _closure1_slot1;
            var4 = var10[var4];
            var5 = var5.bind(var8)(var4);
            var4 = var5.combine;
            var2 = var10[var2];
            var2 = var3.bind(var8)(var2);
            var3 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var10 = var7 == var9;
            var2 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var9.allow;
case 6:
            if(!(var7 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var2 = var6.NONE;
case 8:
            var2 = var4.bind(var5)(var3, var2);
            var1['allow'] = var2;
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isGuildOwner;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
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
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildFeatures;
    var _closure1_slot10 = var8;
    var5 = var5.Permissions;
    var _closure1_slot11 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageChannelPermissionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createModeratorOverwrite(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = arg3;
            var4 = _closure1_slot12;
            var2 = null;
            var6 = var2 == var1;
            var3 = undefined;
            var2 = undefined;
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var1.permissionOverwrites;
            var2 = var1[var5];
case 10:
            var1 = arg2;
            var1 = var4.bind(var3)(var5, var1, var2);
            return var1;
        }
    };
    var3['createModeratorOverwrite'] = var5;
    var3['createOrUpdateModeratorOverwrite'] = var4;
    var4 = function removeModeratorOverwrite(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = arg3;
            var6 = null;
            var3 = var6 == var1;
            var7 = undefined;
            var8 = undefined;
            if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var1.permissionOverwrites;
            var8 = var1[var2];
case 12:
            var1 = {};
            var1['id'] = var2;
            var2 = arg2;
            var1['type'] = var2;
            var3 = var6 == var8;
            var2 = undefined;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var8.deny;
case 14:
            if(!(var6 == var2)) { _fun0003_ip = 16; continue _fun0003 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var2 = var3.NONE;
case 16:
            var1['deny'] = var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = var4.bind(var7)(var3);
            var4 = var5.remove;
            var9 = var6 == var8;
            var3 = undefined;
            if(var9) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var8.allow;
case 17:
            if(!(var6 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var3 = var6.NONE;
case 19:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var2 = var4.bind(var5)(var3, var2);
            var1['allow'] = var2;
            return var1;
        }
    };
    var3['removeModeratorOverwrite'] = var4;
    var4 = function isEmptyOverwrite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.allow;
            var5 = var1.deny;
            var10 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 8;
            var4 = var1[var3];
            var7 = undefined;
            var6 = var10.bind(var7)(var4);
            var4 = var6.equals;
            var8 = 9;
            var1 = var1[var8];
            var1 = var10.bind(var7)(var1);
            var1 = var1.NONE;
            var1 = var4.bind(var6)(var9, var1);
            if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = var2[var3];
            var4 = var6.bind(var7)(var3);
            var3 = var4.equals;
            var2 = var2[var8];
            var2 = var6.bind(var7)(var2);
            var2 = var2.NONE;
            var1 = var3.bind(var4)(var5, var2);
case 21:
            return var1;
        }
    };
    var3['isEmptyOverwrite'] = var4;
    var4 = function useCanCreateStageChannelByGuild(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot8;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot5;
        var3[1] = var7;
        var2 = _closure1_slot7;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var5 = var1.bind(var2)();
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var7 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var7;
                if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var6 = var7.features;
                var3 = var6.has;
                var2 = _closure1_slot10;
                var2 = var2.COMMUNITY;
                var2 = var3.bind(var6)(var2);
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var3 = _closure1_slot4;
                var9 = undefined;
                var3 = var3.bind(var9)(var7, var5);
                var5 = !var3;
                var3 = !var5;
                if(!var5) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var6 = _closure1_slot8;
                var5 = var6.can;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 10;
                var4 = var10[var4];
                var4 = var8.bind(var9)(var4);
                var4 = var4.CREATE_STAGE_CHANNEL_PERMISSIONS;
                var4 = var5.bind(var6)(var4, var7);
                var4 = !var4;
                var3 = !var4;
case 27:
                var2 = var3;
case 25:
                var1 = var2;
case 23:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanCreateStageChannelByGuild'] = var4;
    var4 = function useCanUpdateStageChannelModerators(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot8;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot7;
        var3[1] = var7;
        var2 = _closure1_slot6;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot6;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var4 = _closure1_slot7;
                var3 = var4.getGuild;
                var1 = null;
                var6 = var1 == var5;
                var7 = undefined;
                var1 = undefined;
                if(var6) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var6 = var5.getGuildId;
                var1 = var6.bind(var5)();
case 29:
                var6 = var3.bind(var4)(var1);
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot11;
                var1 = var1.ADMINISTRATOR;
                var1 = var3.bind(var4)(var1, var6);
                var3 = !var1;
                if(!var3) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                var8 = _closure1_slot8;
                var6 = var8.can;
                var1 = _closure1_slot11;
                var13 = var1.MANAGE_ROLES;
                var9 = true;
                var14 = var8;
                var12 = var5;
                var11 = undefined;
                var10 = undefined;
                var1 = var14[var6](var13, var12, var11, var10, var9, var8);
                var3 = !var1;
case 31:
                var1 = !var3;
                if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var4 = _closure1_slot8;
                var3 = var4.can;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS;
                var2 = var3.bind(var4)(var2, var5);
                var2 = !var2;
                var1 = !var2;
case 33:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanUpdateStageChannelModerators'] = var4;
    var4 = function useCanModerateRequestToSpeak(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot6;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot8;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                var5 = _closure1_slot8;
                var4 = var5.can;
                var3 = _closure1_slot11;
                var3 = var3.MUTE_MEMBERS;
                var7 = _closure1_slot6;
                var6 = var7.getChannel;
                var2 = _closure2_slot0;
                var2 = var6.bind(var7)(var2);
                var1 = var4.bind(var5)(var3, var2);
case 35:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanModerateRequestToSpeak'] = var4;
    var2 = function canLurkerListen(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            var2 = var1 == var7;
            if(var2) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var1 = var7.isGuildStageVoice;
            var1 = var1.bind(var7)();
            var2 = !var1;
case 37:
            var1 = !var2;
            if(var2) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var5 = _closure1_slot3;
            var3 = var5.isLurking;
            var2 = var7.guild_id;
            var2 = var3.bind(var5)(var2);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 35:
            var6 = _closure1_slot9;
            var5 = var6.isPublic;
            var3 = var7.id;
            var3 = var5.bind(var6)(var3);
            var5 = !var3;
            var3 = !var5;
            if(var5) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 10;
            var8 = var8[var4];
            var4 = undefined;
            var4 = var9.bind(var4)(var8);
            var4 = var4.JOIN_VOCAL_CHANNEL_PERMISSIONS;
            var3 = var5.bind(var6)(var4, var7);
case 41:
            var2 = var3;
case 17:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var3['canLurkerListen'] = var2;
    return var1;
})();