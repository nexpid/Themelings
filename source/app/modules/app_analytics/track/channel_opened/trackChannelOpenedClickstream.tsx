// app/modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot3 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackChannelOpenedClickstream(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var1 = _closure1_slot5;
            var1 = var1.VIBEGRATIONS;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot5;
            var1 = var1.CHANNEL_BROWSER;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = _closure1_slot5;
            var1 = var1.GUILD_HOME;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var1 = _closure1_slot5;
            var1 = var1.GUILD_SHOP;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var1 = _closure1_slot5;
            var1 = var1.GAME_SHOP;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var1 = _closure1_slot5;
            var1 = var1.MEMBER_APPLICATIONS;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var1 = _closure1_slot5;
            var1 = var1.ROLE_SUBSCRIPTIONS;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var1 = _closure1_slot5;
            var1 = var1.CUSTOMIZE_COMMUNITY;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var1 = _closure1_slot5;
            var1 = var1.MEMBER_SAFETY;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 11:
            var1 = _closure1_slot5;
            var1 = var1.GUILD_ONBOARDING;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 12:
            var1 = _closure1_slot5;
            var1 = var1.GUILD_BOOSTS;
            if(!(var1 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 13:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackClickstream;
            var2 = _closure1_slot4;
            var3 = var2.CHANNEL_OPENED_CLICKSTREAM;
            var2 = {};
            var2['channel_id'] = var9;
            var8 = _closure1_slot2;
            var6 = var8.getChannel;
            var9 = var6.bind(var8)(var9);
            var8 = null;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var9.type;
case 14:
            if(!(var8 == var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = _closure1_slot3;
            var6 = var7.UNKNOWN;
case 16:
            var2['channel_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();