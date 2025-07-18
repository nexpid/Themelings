// app/actions/MentionActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot3 = var7;
    var2 = var2.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function setGuildFilter(arg1) {
        var1 = arg1;
        var7 = var1.guildFilter;
        var6 = var1.roleFilter;
        var5 = var1.everyoneFilter;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var8 = 'SET_RECENT_MENTIONS_FILTER';
        var2['type'] = var8;
        var2['guildFilter'] = var7;
        var2['roleFilter'] = var6;
        var2['everyoneFilter'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setGuildFilter'] = var7;
    var7 = function clearMentions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_MENTIONS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearMentions'] = var7;
    var7 = function truncateMentions(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'TRUNCATE_MENTIONS';
        var2['type'] = var5;
        var5 = arg1;
        var2['size'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['truncateMentions'] = var7;
    var7 = function fetchRecentMentions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var9 = arguments[1];
            var8 = arguments[2];
            var7 = arguments[3];
            var6 = arguments[4];
            var _closure2_slot0 = var10;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 27:
            var9 = _closure1_slot4;
 34:
            if(!(var8 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var8 = null;
 40:
            if(!(var7 === var4)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var7 = true;
 46:
            if(!(var6 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var6 = true;
 52:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 1;
            var2 = var11[var2];
            var12 = var3.bind(var4)(var2);
            var3 = var12.dispatch;
            var2 = {};
            var13 = 'LOAD_RECENT_MENTIONS';
            var2['type'] = var13;
            var2['guildId'] = var8;
            var2 = var3.bind(var12)(var2);
            var3 = _closure1_slot0;
            var2 = 2;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            var5 = _closure1_slot3;
            var5 = var5.MENTIONS;
            var2['url'] = var5;
            var5 = {};
            var5['before'] = var10;
            var5['limit'] = var9;
            var5['guild_id'] = var8;
            var5['roles'] = var7;
            var5['everyone'] = var6;
            var2['query'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var6 = var1.body;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var7 = 'LOAD_RECENT_MENTIONS_SUCCESS';
                var2['type'] = var7;
                var2['messages'] = var6;
                var8 = _closure2_slot0;
                var7 = null;
                var7 = var7 != var8;
                var2['isAfter'] = var7;
                var6 = var6.length;
                var5 = _closure1_slot4;
                var5 = var6 >= var5;
                var2['hasMoreAfter'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'LOAD_RECENT_MENTIONS_FAILURE';
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['fetchRecentMentions'] = var7;
    var7 = function deleteRecentMention(arg1) {
        var5 = arg1;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var3 = var4[var1];
        var1 = undefined;
        var3 = var6.bind(var1)(var3);
        var7 = var3.HTTP;
        var6 = var7.del;
        var3 = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
        var9 = _closure1_slot3;
        var8 = var9.MENTIONS_MESSAGE_ID;
        var8 = var8.bind(var9)(var5);
        var3['url'] = var8;
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot1;
        var2 = 1;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'RECENT_MENTION_DELETE';
        var2['type'] = var6;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['deleteRecentMention'] = var7;
    var4 = function setRecentMentionsStale() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_RECENT_MENTIONS_STALE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['setRecentMentionsStale'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/MentionActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();