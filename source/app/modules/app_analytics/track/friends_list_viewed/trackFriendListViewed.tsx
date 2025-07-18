// app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackFriendsListViewed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.tab_opened;
            var11 = var1.source;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 1;
            var2 = var5[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var7 = var2.bind(var1)();
            var2 = 2;
            var2 = var5[var2];
            var10 = var4.bind(var1)(var2);
            var8 = var10.track;
            var2 = _closure1_slot3;
            var6 = var2.FRIENDS_LIST_VIEWED;
            var4 = {};
            var4['tab_opened'] = var9;
            var4['source'] = var11;
            var14 = var4;
            var13 = var7;
            var11 = copyDataProperties(var14, var13);
            var4 = var8.bind(var10)(var6, var4);
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackClickstream;
            var3 = var2.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            var2 = {};
            var8 = null;
            var10 = var8 != var9;
            var6 = 'tabless';
            if(!var10) { _fun0001_ip = 145; continue _fun0001 }
 142:
            var6 = var9;
 145:
            var2['tab_opened'] = var6;
            var10 = var7.num_friends;
            var11 = var8 != var10;
            var9 = 0;
            if(!var11) { _fun0001_ip = 168; continue _fun0001 }
 165:
            var9 = var10;
 168:
            var2['num_friends'] = var9;
            var10 = var7.now_playing_visible;
            var9 = var8 != var10;
            if(!var9) { _fun0001_ip = 189; continue _fun0001 }
 186:
            var9 = var10;
 189:
            var2['now_playing_visible'] = var9;
            var7 = var7.now_playing_num_cards;
            var8 = var8 != var7;
            var6 = 0;
            if(!var8) { _fun0001_ip = 212; continue _fun0001 }
 209:
            var6 = var7;
 212:
            var2['now_playing_num_cards'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();