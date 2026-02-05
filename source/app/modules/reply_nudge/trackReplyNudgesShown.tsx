// app/modules/reply_nudge/trackReplyNudgesShown.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/trackReplyNudgesShown.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackReplyNudgesShown() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getPrivateChannelIds;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = global;
            var2 = var2.Boolean;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['channelId'] = var3;
                var3 = arg2;
                var1['index'] = var3;
                var4 = _closure1_slot5;
                var3 = var4.isChannelNudged;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isNudged'] = var2;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.isNudged;
                return var1;
            };
            var9 = var3.bind(var4)(var2);
            var3 = var9.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var9.map;
            var2 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.getChannelNudge;
                var1 = arg1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var3.bind(var9)(var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.REPLY_NUDGES_SHOWN;
            var1 = {};
            var8 = var9.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.channelId;
                return var1;
            };
            var6 = var8.bind(var9)(var6);
            var1['channel_ids'] = var6;
            var8 = var9.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.index;
                return var1;
            };
            var6 = var8.bind(var9)(var6);
            var1['channel_dm_list_indexes'] = var6;
            var8 = var7.map;
            var6 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.affinity;
case 4:
                    var3 = var1 != var2;
                    var1 = -2;
                    if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var6 = var8.bind(var7)(var6);
            var1['nudge_author_affinities'] = var6;
            var8 = var7.map;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = null;
                    var4 = var3 == var2;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = var2.authorId;
case 4:
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot3;
                    var3 = var4.isFriend;
                    var2 = var2.authorId;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var6 = var8.bind(var7)(var6);
            var1['nudge_author_is_friend'] = var6;
            var8 = var7.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var2 = var3.authorId;
case 4:
                    var3 = var1 != var2;
                    var1 = '0';
                    if(!var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var6 = var8.bind(var7)(var6);
            var1['nudge_author_ids'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                    var2 = var3.lastMessageId;
case 4:
                    var3 = var1 != var2;
                    var1 = '0';
                    if(!var3) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['nudge_message_ids'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();