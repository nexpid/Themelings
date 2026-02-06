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
    var1 = true;
    var4['value'] = var1;
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
    var9 = {'enableTracking': false, 'enableNavigation': false};
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {'enableTracking': true, 'enableNavigation': false};
    var9[1] = var10;
    var10 = {'enableTracking': true, 'enableNavigation': true};
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/NavigateToMentionsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getOldestUnreadMentionOnLoad(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var12 = var1.messages;
            var4 = var1.track;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var1 = _closure1_slot7;
            var7 = var1.GUILD_TEXTUAL;
            var5 = var7.has;
            var1 = var9.type;
            var1 = var5.bind(var7)(var1);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot7;
            var7 = var1.THREADS;
            var5 = var7.has;
            var1 = var9.type;
            var1 = var5.bind(var7)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var12.ready;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var5 = _closure1_slot5;
            var1 = var5.getCurrentUser;
            var5 = var1.bind(var5)();
            _closure2_slot0 = var5;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot3;
            var7 = var8.getMentionCount;
            var5 = var9.id;
            var8 = var7.bind(var8)(var5);
            var10 = 0;
            if(!(!(var8 <= var10))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = _closure1_slot8;
            var7 = var11.getConfig;
            var5 = {};
            var13 = 'trackMentionsOnInitialUnreadChannelLoad';
            var5['location'] = var13;
            var7 = var7.bind(var11)(var5);
            var5 = var7.enableTracking;
            var7 = var7.enableNavigation;
            _closure2_slot1 = var7;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            return var1;
case 10:
            var13 = _closure1_slot3;
            var11 = var13.ackMessageId;
            var7 = var9.id;
            var11 = var11.bind(var13)(var7);
            _closure2_slot2 = var11;
            var7 = var1 != var11;
            if(!(var1 == var11)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = _closure1_slot2;
            var13 = var14.getGuild;
            var11 = var9.guild_id;
            var11 = var13.bind(var14)(var11);
            var13 = var1 != var11;
            if(!var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = var11.joinedAt;
            var13 = var1 != var14;
case 15:
            if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 17:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var13 = 5;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var14.fromTimestamp;
            var15 = var11.joinedAt;
            var11 = var15.getTime;
            var11 = var11.bind(var15)();
            var11 = var13.bind(var14)(var11);
            _closure2_slot2 = var11;
case 13:
            _closure2_slot3 = var10;
            _closure2_slot4 = var1;
            var11 = var12.forAll;
            var10 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var9 = 5;
                    var3 = var1[var9];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.compare;
                    var5 = var2.id;
                    var4 = _closure2_slot2;
                    var4 = var7.bind(var8)(var5, var4);
                    var7 = 0;
                    var4 = var4 > var7;
                    if(!var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var8 = _closure1_slot4;
                    var5 = _closure2_slot0;
                    var4 = var8.bind(var1)(var2, var5);
case 18:
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = _closure2_slot3;
                    var4 = var4 + 1;
                    _closure2_slot3 = var4;
                    var4 = _closure2_slot1;
                    if(!var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var8 = _closure2_slot4;
                    var5 = null;
                    var5 = var5 == var8;
                    if(var5) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var9];
                    var10 = var8.bind(var1)(var6);
                    var9 = var10.compare;
                    var8 = var2.id;
                    var6 = _closure2_slot4;
                    var6 = var9.bind(var10)(var8, var6);
                    var5 = var6 < var7;
case 24:
                    var4 = var5;
case 22:
                    if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 26:
                    var2 = var2.id;
                    _closure2_slot4 = var2;
case 20:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            if(!var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var5;
case 27:
            if(!var4) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var5 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 6;
            var4 = var10[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.track;
            var3 = _closure1_slot6;
            var4 = var3.CHANNEL_WITH_UNREAD_MENTIONS_LOADED;
            var3 = {};
            var10 = var9.id;
            var3['channel_id'] = var10;
            var9 = var9.type;
            var3['channel_type'] = var9;
            var3['total_badge_count'] = var8;
            var8 = _closure2_slot3;
            var3['loaded_mention_count'] = var8;
            var3['has_previous_ack'] = var7;
            var3 = var5.bind(var6)(var4, var3);
case 29:
            var2 = _closure2_slot4;
            return var2;
case 8:
            return var1;
case 6:
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var3['getOldestUnreadMentionOnLoad'] = var2;
    return var1;
})();