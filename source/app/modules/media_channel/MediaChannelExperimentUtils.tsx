// app/modules/media_channel/MediaChannelExperimentUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var8[var4];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'guild', 'id': '2023-03_guild_media_channel', 'label': 'Media Channel'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var5['defaultConfig'] = var10;
    var13 = {'id': 1, 'label': 'Enables guild to create a media channel'};
    var10 = {};
    var10['enabled'] = var12;
    var13['config'] = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot1 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2023-04_guild_media_channel_post_preview_embed_users', 'label': 'Guild Role Subscription Users'};
    var10 = {};
    var10['enabledForUser'] = var11;
    var4['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Enables for users Guild Media Post Preview Embeds'};
    var10 = {};
    var10['enabledForUser'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/media_channel/MediaChannelExperimentUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['GuildMediaExperiment'] = var5;
    var5 = function useGuildEligibleForMediaChannels(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot1;
            var6 = var7.useExperiment;
            var5 = {};
            var3 = null;
            var9 = var3 == var4;
            var2 = undefined;
            if(var9) { _fun0001_ip = 34; continue _fun0001 }
 29:
            var2 = var4.id;
 34:
            if(!(var3 == var2)) { _fun0001_ip = 42; continue _fun0001 }
 38:
            var2 = _closure1_slot0;
 42:
            var5['guildId'] = var2;
            var2 = '96e84c_1';
            var5['location'] = var2;
            var2 = {};
            var8 = true;
            var2['autoTrackExposure'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var2.enabled;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 90; continue _fun0001 }
 85:
            var1 = var4.id;
 90:
            var1 = var3 != var1;
            if(!var1) { _fun0001_ip = 100; continue _fun0001 }
 97:
            var1 = var2;
 100:
            return var1;
        }
    };
    var3['useGuildEligibleForMediaChannels'] = var5;
    var3['GuildMediaPostPreviewEmbedUsersExperiments'] = var4;
    var4 = function useEligibleForGuildMediaChannelPostPreviewEmbed() {
        var4 = _closure1_slot2;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = '96e84c_2';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabledForUser;
        return var1;
    };
    var3['useEligibleForGuildMediaChannelPostPreviewEmbed'] = var4;
    var2 = function isEligibleForGuildMediaChannelPostPreviewEmbed() {
        var4 = _closure1_slot2;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = '96e84c_3';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabledForUser;
        return var1;
    };
    var3['isEligibleForGuildMediaChannelPostPreviewEmbed'] = var2;
    return var1;
})();