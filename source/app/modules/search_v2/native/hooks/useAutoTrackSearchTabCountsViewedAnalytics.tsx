// app/modules/search_v2/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTabs;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoTrackSearchTabCountsViewedAnalytics(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var2 = var2.visibleTabCounts;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot2;
        var6 = var4.useRef;
        var3 = false;
        var3 = var6.bind(var4)(var3);
        var _closure2_slot2 = var3;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0001_ip = 25; continue _fun0001 }
 16:
                var2 = _closure2_slot2;
                var1 = var2.current;
 25:
                if(var1) { _fun0001_ip = 218; continue _fun0001 }
 31:
                var2 = _closure2_slot2;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackSearchResultCountsViewed;
                var1 = {};
                var6 = _closure2_slot0;
                var1['searchContext'] = var6;
                var5 = _closure2_slot1;
                var4 = _closure1_slot4;
                var6 = var4.FILES;
                var6 = var5[var6];
                var1['totalFilesResults'] = var6;
                var6 = var4.GUILD_CHANNELS;
                var6 = var5[var6];
                var1['totalGuildChannelsResults'] = var6;
                var6 = var4.LINKS;
                var6 = var5[var6];
                var1['totalLinksResults'] = var6;
                var6 = var4.MEDIA;
                var6 = var5[var6];
                var1['totalMediaResults'] = var6;
                var6 = var4.MEMBERS;
                var6 = var5[var6];
                var1['totalMembersResults'] = var6;
                var6 = var4.MESSAGES;
                var6 = var5[var6];
                var1['totalMessageResults'] = var6;
                var6 = var4.PEOPLE;
                var6 = var5[var6];
                var1['totalPeopleResults'] = var6;
                var4 = var4.PINS;
                var4 = var5[var4];
                var1['totalPinsResults'] = var4;
                var1 = var2.bind(var3)(var1);
 218:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot3;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 19; continue _fun0002 }
 12:
                    var2 = arg2;
                    var1 = var2 !== var3;
 19:
                    if(!var1) { _fun0002_ip = 37; continue _fun0002 }
 22:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2['current'] = var1;
 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useAutoTrackSearchTabCountsViewedAnalytics'] = var2;
    return var1;
})();