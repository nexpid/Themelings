// app/modules/activities/utils/getEmbeddedActivityJoinability.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var5 = function getEmbeddedActivityJoinability(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var12 = var3.userId;
            var13 = var3.activity;
            var11 = var3.application;
            var7 = var3.channelId;
            var1 = var3.currentUser;
            var2 = var3.isActivitiesEnabledForCurrentPlatform;
            var4 = var3.ChannelStore;
            var8 = var3.VoiceStateStore;
            var9 = var3.PermissionStore;
            var6 = var3.GuildStore;
            var3 = null;
            if(!(var3 != var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var3 == var1;
            var10 = undefined;
            var5 = undefined;
            if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1.nsfwAllowed;
case 4:
            var1 = false;
            if(!(var1 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3 == var11;
            var5 = undefined;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var11.embeddedActivityConfig;
            var14 = var3 == var1;
            var5 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var5 = var1.requires_age_gate;
case 8:
            var1 = true;
            if(!(var1 !== var5)) { _fun0001_ip = 11; continue _fun0001 }
case 6:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot9;
            var2 = var2.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return var2;
case 12:
            var5 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var5 = var5.bind(var10)(var2);
            var14 = var3 == var11;
            var2 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var11.embeddedActivityConfig;
            var14 = var3 == var11;
            var2 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var2 = var11.supported_platforms;
case 14:
            var2 = var5.bind(var10)(var2);
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = _closure1_slot9;
            var2 = var2.ACTIVITY_NOT_SUPPORTED_ON_OS;
            return var2;
case 17:
            var5 = var7;
            if(!(var3 == var5)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var8.getVoiceStateForSession;
            var14 = var3 == var13;
            var2 = undefined;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var13.session_id;
case 21:
            var11 = var11.bind(var8)(var12, var2);
            var12 = var3 == var11;
            var2 = undefined;
            if(var12) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = var11.channelId;
case 23:
            var5 = var2;
case 19:
            if(!(var3 != var5)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var2 = var4.getChannel;
            var7 = var2.bind(var4)(var7);
            if(!(var3 != var7)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var2 = var7.isPrivate;
            var2 = var2.bind(var7)();
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var2 = var7.getGuildId;
            var4 = var2.bind(var7)();
            if(!(var3 != var4)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var2 = var6.getGuild;
            var2 = var2.bind(var6)(var4);
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = var2.afkChannelId;
case 33:
            var2 = var7.id;
            if(!(var3 !== var2)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = var8.getCurrentClientVoiceChannelId;
            var2 = var7.getGuildId;
            var2 = var2.bind(var7)();
            var4 = var3.bind(var8)(var2);
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var3 = var3.bind(var10)(var2);
            var2 = var3.isChannelFull;
            var3 = var2.bind(var3)(var7, var8, var6);
            var6 = var9.can;
            var2 = _closure1_slot8;
            var2 = var2.CONNECT;
            var2 = var6.bind(var9)(var2, var7);
            var8 = var9.can;
            var6 = _closure1_slot8;
            var6 = var6.USE_EMBEDDED_ACTIVITIES;
            var6 = var8.bind(var9)(var6, var7);
            if(var6) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var6 = _closure1_slot9;
            var6 = var6.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return var6;
case 37:
            var6 = var7.isVocal;
            var6 = var6.bind(var7)();
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 39:
            if(!(var4 !== var5)) { _fun0001_ip = 29; continue _fun0001 }
case 40:
            if(var3) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 43:
            var2 = _closure1_slot9;
            var2 = var2.NO_CHANNEL_CONNECT_PERMISSION;
            return var2;
case 41:
            var2 = _closure1_slot9;
            var2 = var2.CHANNEL_FULL;
            return var2;
case 35:
            var2 = _closure1_slot9;
            var2 = var2.IS_AFK_CHANNEL;
            return var2;
case 31:
            var2 = _closure1_slot9;
            var2 = var2.NO_GUILD;
            return var2;
case 29:
            var2 = _closure1_slot9;
            var2 = var2.CAN_JOIN;
            return var2;
case 27:
            var2 = _closure1_slot9;
            var2 = var2.NO_CHANNEL;
            return var2;
case 25:
            var1 = _closure1_slot9;
            var1 = var1.NO_CHANNEL;
            return var1;
case 11:
            var1 = _closure1_slot9;
            var1 = var1.ACTIVITY_AGE_GATED;
            return var1;
case 2:
            var1 = _closure1_slot9;
            var1 = var1.NO_USER;
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var14 = 0;
    var4 = var8[var14];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var4 = var8[var13];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var8[var12];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var11 = 3;
    var4 = var8[var11];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var8[var10];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var9 = 5;
    var4 = var8[var9];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = {};
    var4['CAN_JOIN'] = var14;
    var6 = 'CAN_JOIN';
    var4[var14] = var6;
    var4['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = var13;
    var6 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var4[var13] = var6;
    var4['NO_CHANNEL_CONNECT_PERMISSION'] = var12;
    var6 = 'NO_CHANNEL_CONNECT_PERMISSION';
    var4[var12] = var6;
    var4['CHANNEL_FULL'] = var11;
    var6 = 'CHANNEL_FULL';
    var4[var11] = var6;
    var4['NO_CHANNEL'] = var10;
    var6 = 'NO_CHANNEL';
    var4[var10] = var6;
    var4['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = var9;
    var6 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var4[var9] = var6;
    var9 = 6;
    var4['ACTIVITY_NOT_SUPPORTED_ON_OS'] = var9;
    var6 = 'ACTIVITY_NOT_SUPPORTED_ON_OS';
    var4[var9] = var6;
    var9 = 7;
    var4['ACTIVITY_AGE_GATED'] = var9;
    var6 = 'ACTIVITY_AGE_GATED';
    var4[var9] = var6;
    var9 = 8;
    var4['NO_USER'] = var9;
    var6 = 'NO_USER';
    var4[var9] = var6;
    var9 = 9;
    var4['IS_AFK_CHANNEL'] = var9;
    var6 = 'IS_AFK_CHANNEL';
    var4[var9] = var6;
    var6 = 10;
    var4['NO_GUILD'] = var6;
    var9 = 'NO_GUILD';
    var4[var6] = var9;
    var _closure1_slot9 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/getEmbeddedActivityJoinability.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['EmbeddedActivityJoinability'] = var4;
    var2 = function useEmbeddedActivityJoinability(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var _closure2_slot0 = var6;
        var11 = var2.activity;
        var _closure2_slot1 = var11;
        var9 = var2.channelId;
        var _closure2_slot2 = var9;
        var10 = var2.application;
        var _closure2_slot3 = var10;
        var5 = _closure1_slot0;
        var12 = _closure1_slot2;
        var3 = 8;
        var3 = var12[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var3 = var7.useIsActivitiesEnabledForCurrentPlatform;
        var7 = var3.bind(var7)();
        var _closure2_slot4 = var7;
        var3 = 9;
        var8 = var12[var3];
        var15 = var5.bind(var4)(var8);
        var14 = var15.useStateFromStores;
        var8 = _closure1_slot6;
        var13 = new Array(1);
        var13[0] = var8;
        var8 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var14.bind(var15)(var13, var8);
        var _closure2_slot5 = var8;
        var3 = var12[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var12 = _closure1_slot3;
        var3 = new Array(4);
        var3[0] = var12;
        var12 = _closure1_slot7;
        var3[1] = var12;
        var12 = _closure1_slot5;
        var3[2] = var12;
        var2 = _closure1_slot4;
        var3[3] = var2;
        var2 = new Array(6);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var1 = function() {
            var3 = _closure1_slot10;
            var2 = {};
            var5 = _closure2_slot0;
            var2['userId'] = var5;
            var5 = _closure2_slot1;
            var2['activity'] = var5;
            var5 = _closure2_slot3;
            var2['application'] = var5;
            var5 = _closure2_slot2;
            var2['channelId'] = var5;
            var5 = _closure2_slot5;
            var2['currentUser'] = var5;
            var4 = _closure2_slot4;
            var2['isActivitiesEnabledForCurrentPlatform'] = var4;
            var4 = _closure1_slot3;
            var2['ChannelStore'] = var4;
            var4 = _closure1_slot7;
            var2['VoiceStateStore'] = var4;
            var4 = _closure1_slot5;
            var2['PermissionStore'] = var4;
            var1 = _closure1_slot4;
            var2['GuildStore'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useEmbeddedActivityJoinability'] = var2;
    return var1;
})();