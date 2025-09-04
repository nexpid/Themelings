// app/modules/activities/utils/trackApplicationOpen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/trackApplicationOpen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackApplicationOpen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var19 = var1.type;
            var18 = var1.source;
            var12 = var1.userId;
            var17 = var1.guildId;
            var16 = var1.channelId;
            var15 = var1.channelType;
            var13 = var1.applicationId;
            var14 = var1.partyId;
            var11 = var1.messageId;
            var10 = var1.locationObject;
            var9 = var1.analyticsLocations;
            var8 = var1.referrerId;
            var7 = var1.inviterUserId;
            var6 = var1.remoteJoinPlatform;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot2;
            var3 = var2.APPLICATION_OPENED;
            var2 = {};
            var2['type'] = var19;
            var2['source'] = var18;
            var2['guild_id'] = var17;
            var2['channel_id'] = var16;
            var2['channel_type'] = var15;
            var2['application_id'] = var13;
            var13 = null;
            var15 = var13 != var14;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 162; continue _fun0001 }
 159:
            var13 = var14;
 162:
            var2['party_id'] = var13;
            var2['other_user_id'] = var12;
            var2['message_id'] = var11;
            var2['location'] = var10;
            var2['location_stack'] = var9;
            var2['referrer_id'] = var8;
            var2['invite_inviter_id'] = var7;
            var2['remote_join_platform'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();