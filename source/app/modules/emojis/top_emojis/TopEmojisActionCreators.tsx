// app/modules/emojis/top_emojis/TopEmojisActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/top_emojis/TopEmojisActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchTopEmojis(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 1;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var4 = var7.dispatch;
        var3 = {};
        var9 = 'TOP_EMOJIS_FETCH';
        var3['type'] = var9;
        var3['guildId'] = var8;
        var3 = var4.bind(var7)(var3);
        var4 = _closure1_slot0;
        var3 = 2;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var5 = var3.HTTP;
        var4 = var5.get;
        var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        var7 = _closure1_slot3;
        var6 = var7.TOP_EMOJIS_FOR_GUILD;
        var6 = var6.bind(var7)(var8);
        var3['url'] = var6;
        var5 = var4.bind(var5)(var3);
        var4 = var5.then;
        var3 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'TOP_EMOJIS_FETCH_SUCCESS';
            var1['type'] = var5;
            var5 = _closure2_slot0;
            var1['guildId'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var7 = var5.items;
            var6 = var7.map;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.emoji_id;
                var1['emojiId'] = var3;
                var2 = var2.emoji_rank;
                var1['rank'] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.sort;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var2 = var1.rank;
                var1 = arg2;
                var1 = var1.rank;
                var1 = var2 - var1;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var1['topEmojisMetadata'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'TOP_EMOJIS_FETCH_FAILURE';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['guildId'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['fetchTopEmojis'] = var4;
    var4 = function updateNewlyAddedLastSeen(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 1;
            var3 = var1[var4];
            var1 = undefined;
            var8 = var7.bind(var1)(var3);
            var7 = var8.dispatch;
            var3 = {};
            var9 = 'NEWLY_ADDED_EMOJI_SEEN_UPDATED';
            var3['type'] = var9;
            var3 = var7.bind(var8)(var3);
            var7 = null;
            var3 = var7 != var6;
            if(!var3) { _fun0001_ip = 66; continue _fun0001 }
 62:
            var3 = var7 != var5;
 66:
            if(!var3) { _fun0001_ip = 117; continue _fun0001 }
 69:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'NEWLY_ADDED_EMOJI_SEEN_PENDING';
            var2['type'] = var7;
            var2['guildId'] = var6;
            var2['emojiId'] = var5;
            var2 = var3.bind(var4)(var2);
 117:
            return var1;
        }
    };
    var3['updateNewlyAddedLastSeen'] = var4;
    var2 = function updateNewlyAddedEmojiSeenAcknowledged(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
 15:
            var1 = var2 != var4;
 19:
            if(!var1) { _fun0002_ip = 78; continue _fun0002 }
 22:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED';
            var1['type'] = var6;
            var1['guildId'] = var5;
            var1['emojiId'] = var4;
            var1 = var2.bind(var3)(var1);
 78:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateNewlyAddedEmojiSeenAcknowledged'] = var2;
    return var1;
})();