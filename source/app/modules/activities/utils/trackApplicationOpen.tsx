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
            var18 = var1.type;
            var17 = var1.source;
            var11 = var1.userId;
            var16 = var1.guildId;
            var15 = var1.channelId;
            var14 = var1.channelType;
            var12 = var1.applicationId;
            var13 = var1.partyId;
            var10 = var1.messageId;
            var9 = var1.locationObject;
            var8 = var1.analyticsLocations;
            var7 = var1.referrerId;
            var6 = var1.inviterUserId;
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
            var2['type'] = var18;
            var2['source'] = var17;
            var2['guild_id'] = var16;
            var2['channel_id'] = var15;
            var2['channel_type'] = var14;
            var2['application_id'] = var12;
            var12 = null;
            var14 = var12 != var13;
            var12 = undefined;
            if(!var14) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var12 = var13;
 156:
            var2['party_id'] = var12;
            var2['other_user_id'] = var11;
            var2['message_id'] = var10;
            var2['location'] = var9;
            var2['location_stack'] = var8;
            var2['referrer_id'] = var7;
            var2['invite_inviter_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();