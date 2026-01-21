// app/modules/messages/NavigateToMentionsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.shouldBadgeMessage;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-01-red-dot-navigate-to-mentions', 'kind': 'user'};
    var9 = {};
    var10 = false;
    var9['enableTracking'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enableTracking'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/NavigateToMentionsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackMentionsOnInitialUnreadChannelScroll(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = arg2;
            var2 = _closure1_slot7;
            var5 = var2.GUILD_TEXTUAL;
            var3 = var5.has;
            var2 = var8.type;
            var2 = var3.bind(var5)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.ready;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot5;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var11 = null;
            if(!(var11 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var5 = _closure1_slot3;
            var3 = var5.getMentionCount;
            var2 = var8.id;
            var7 = var3.bind(var5)(var2);
            var2 = 0;
            if(!(!(var7 <= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var9 = _closure1_slot8;
            var5 = var9.getConfig;
            var3 = {};
            var10 = 'trackMentionsOnInitialUnreadChannelLoad';
            var3['location'] = var10;
            var3 = var5.bind(var9)(var3);
            var3 = var3.enableTracking;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var9 = _closure1_slot3;
            var5 = var9.ackMessageId;
            var3 = var8.id;
            var3 = var5.bind(var9)(var3);
            var _closure2_slot1 = var3;
            var5 = var11 != var3;
            if(!(var11 == var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot2;
            var9 = var10.getGuild;
            var3 = var8.guild_id;
            var3 = var9.bind(var10)(var3);
            var9 = var11 != var3;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var3.joinedAt;
            var9 = var11 != var10;
case 10:
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 12:
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var9 = 5;
            var10 = var10[var9];
            var9 = undefined;
            var10 = var11.bind(var9)(var10);
            var9 = var10.fromTimestamp;
            var11 = var3.joinedAt;
            var3 = var11.getTime;
            var3 = var3.bind(var11)();
            var3 = var9.bind(var10)(var3);
            _closure2_slot1 = var3;
case 8:
            var _closure2_slot2 = var2;
            var3 = var4.forAll;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.compare;
                    var5 = var6.id;
                    var2 = _closure2_slot1;
                    var5 = var7.bind(var8)(var5, var2);
                    var2 = 0;
                    var2 = var5 > var2;
                    if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var5 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var2 = var5.bind(var1)(var6, var4);
case 13:
                    if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = _closure2_slot2;
                    var2 = var2 + 1;
                    _closure2_slot2 = var2;
case 15:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.CHANNEL_WITH_UNREAD_MENTIONS_LOADED;
            var1 = {};
            var9 = var8.id;
            var1['channel_id'] = var9;
            var8 = var8.type;
            var1['channel_type'] = var8;
            var1['total_badge_count'] = var7;
            var6 = _closure2_slot2;
            var1['loaded_mention_count'] = var6;
            var1['has_previous_ack'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackMentionsOnInitialUnreadChannelScroll'] = var2;
    return var1;
})();