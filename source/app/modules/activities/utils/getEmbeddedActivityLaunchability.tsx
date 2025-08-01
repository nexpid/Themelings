// app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function getEmbeddedActivityLaunchability(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.ChannelStore;
            var10 = var1.GuildStore;
            var8 = var1.PermissionStore;
            var7 = var1.VoiceStateStore;
            var1 = var2.getChannel;
            var6 = var1.bind(var2)(var4);
            var5 = null;
            if(!(var5 != var6)) { _fun0001_ip = 357; continue _fun0001 }
 51:
            var9 = _closure1_slot6;
            var3 = var9.includes;
            var2 = var6.type;
            var2 = var3.bind(var9)(var2);
            if(var2) { _fun0001_ip = 88; continue _fun0001 }
 76:
            var2 = _closure1_slot8;
            var2 = var2.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
            return var2;
 88:
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var9 = var9.bind(var3)(var2);
            var2 = var9.getIsActivitiesEnabledForCurrentPlatform;
            var2 = var2.bind(var9)();
            if(var2) { _fun0001_ip = 135; continue _fun0001 }
 123:
            var2 = _closure1_slot8;
            var2 = var2.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return var2;
 135:
            if(!(var5 != var6)) { _fun0001_ip = 345; continue _fun0001 }
 142:
            var2 = var6.isPrivate;
            var2 = var2.bind(var6)();
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 158:
            var2 = var6.getGuildId;
            var9 = var2.bind(var6)();
            if(!(var5 != var9)) { _fun0001_ip = 333; continue _fun0001 }
 175:
            var2 = var10.getGuild;
            var2 = var2.bind(var10)(var9);
            var5 = var5 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 200; continue _fun0001 }
 194:
            var3 = var2.afkChannelId;
 200:
            var2 = var6.id;
            if(!(var3 !== var2)) { _fun0001_ip = 321; continue _fun0001 }
 209:
            var3 = var8.can;
            var2 = _closure1_slot7;
            var2 = var2.CONNECT;
            var2 = var3.bind(var8)(var2, var6);
            var5 = var8.can;
            var3 = _closure1_slot7;
            var3 = var3.USE_EMBEDDED_ACTIVITIES;
            var3 = var5.bind(var8)(var3, var6);
            if(var3) { _fun0001_ip = 268; continue _fun0001 }
 256:
            var3 = _closure1_slot8;
            var3 = var3.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return var3;
 268:
            var5 = var7.getCurrentClientVoiceChannelId;
            var3 = var6.getGuildId;
            var3 = var3.bind(var6)();
            var3 = var5.bind(var7)(var3);
            var5 = var6.isVocal;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 345; continue _fun0001 }
 302:
            if(!(var3 !== var4)) { _fun0001_ip = 345; continue _fun0001 }
 306:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 309:
            var2 = _closure1_slot8;
            var2 = var2.NO_CHANNEL_CONNECT_PERMISSION;
            return var2;
 321:
            var2 = _closure1_slot8;
            var2 = var2.IS_AFK_CHANNEL;
            return var2;
 333:
            var2 = _closure1_slot8;
            var2 = var2.NO_GUILD;
            return var2;
 345:
            var1 = _closure1_slot8;
            var1 = var1.CAN_LAUNCH;
            return var1;
 357:
            var1 = _closure1_slot8;
            var1 = var1.NO_CHANNEL;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var14 = 0;
    var5 = var8[var14];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var13 = 1;
    var5 = var8[var13];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var12 = 2;
    var5 = var8[var12];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 3;
    var5 = var8[var11];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var10 = 4;
    var5 = var8[var10];
    var5 = var7.bind(var1)(var5);
    var5 = var5.SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
    var _closure1_slot6 = var5;
    var9 = 5;
    var5 = var8[var9];
    var5 = var7.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot7 = var5;
    var5 = {};
    var5['CAN_LAUNCH'] = var14;
    var6 = 'CAN_LAUNCH';
    var5[var14] = var6;
    var5['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = var13;
    var6 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var5[var13] = var6;
    var5['NO_CHANNEL_CONNECT_PERMISSION'] = var12;
    var6 = 'NO_CHANNEL_CONNECT_PERMISSION';
    var5[var12] = var6;
    var5['NO_CHANNEL'] = var11;
    var6 = 'NO_CHANNEL';
    var5[var11] = var6;
    var5['NO_GUILD'] = var10;
    var6 = 'NO_GUILD';
    var5[var10] = var6;
    var5['IS_AFK_CHANNEL'] = var9;
    var6 = 'IS_AFK_CHANNEL';
    var5[var9] = var6;
    var9 = 6;
    var5['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = var9;
    var6 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var5[var9] = var6;
    var9 = 7;
    var5['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL'] = var9;
    var6 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL';
    var5[var9] = var6;
    var _closure1_slot8 = var5;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/getEmbeddedActivityLaunchability.tsx';
    var6 = var7.bind(var8)(var6);
    var3['EmbeddedActivityLaunchability'] = var5;
    var3['getEmbeddedActivityLaunchability'] = var4;
    var4 = function getEmbeddedActivityLaunchabilityForChannel(arg1) {
        var3 = _closure1_slot9;
        var2 = {};
        var4 = arg1;
        var2['channelId'] = var4;
        var4 = _closure1_slot2;
        var2['ChannelStore'] = var4;
        var4 = _closure1_slot3;
        var2['GuildStore'] = var4;
        var4 = _closure1_slot4;
        var2['PermissionStore'] = var4;
        var1 = _closure1_slot5;
        var2['VoiceStateStore'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['getEmbeddedActivityLaunchabilityForChannel'] = var4;
    var4 = function useEmbeddedActivityLaunchability(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 7;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(4);
        var3[0] = var7;
        var7 = _closure1_slot3;
        var3[1] = var7;
        var7 = _closure1_slot4;
        var3[2] = var7;
        var2 = _closure1_slot5;
        var3[3] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot9;
            var2 = {};
            var4 = _closure2_slot0;
            var2['channelId'] = var4;
            var4 = _closure1_slot2;
            var2['ChannelStore'] = var4;
            var4 = _closure1_slot3;
            var2['GuildStore'] = var4;
            var4 = _closure1_slot4;
            var2['PermissionStore'] = var4;
            var1 = _closure1_slot5;
            var2['VoiceStateStore'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useEmbeddedActivityLaunchability'] = var4;
    var2 = function getEmbeddedActivityLaunchabilityLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.CAN_LAUNCH;
            if(!(var2 !== var3)) { _fun0002_ip = 155; continue _fun0002 }
 23:
            var2 = _closure1_slot8;
            var2 = var2.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            if(!(var2 !== var3)) { _fun0002_ip = 96; continue _fun0002 }
 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.j29zCg;
            var2 = var3.bind(var4)(var2);
            return var2;
 96:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.hHGrW1;
            var2 = var3.bind(var4)(var2);
            return var2;
 155:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 8;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.qJvTKS;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getEmbeddedActivityLaunchabilityLabel'] = var2;
    return var1;
})();