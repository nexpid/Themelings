// app/modules/public_guilds/PublicGuildsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID;
    var _closure1_slot3 = var7;
    var7 = var4.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID;
    var _closure1_slot4 = var7;
    var4 = var4.ENABLE_COMMUNITY_FLOW_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/PublicGuildsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isPublicSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var1 = var1.bind(var2)(var4);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.messageReference;
            var5 = var2.guild_id;
            var2 = _closure1_slot3;
            var1 = var5 === var2;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.author;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var4.author;
            var4 = var4.id;
            var3 = _closure1_slot4;
            var2 = var4 === var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isPublicSystemMessage'] = var4;
    var4 = function getPublicSystemMessageAvatar() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['getPublicSystemMessageAvatar'] = var4;
    var2 = function(arg1) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 4;
        var2 = var9[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.USER_FLOW_TRANSITION;
        var2 = {};
        var8 = _closure1_slot5;
        var2['flow_type'] = var8;
        var8 = var6.fromStep;
        var2['from_step'] = var8;
        var8 = var6.toStep;
        var2['to_step'] = var8;
        var8 = _closure1_slot0;
        var7 = 5;
        var7 = var9[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.collectGuildAnalyticsMetadata;
        var6 = var6.guildId;
        var10 = var7.bind(var8)(var6);
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackEnableCommunityFlow'] = var2;
    return var1;
})();