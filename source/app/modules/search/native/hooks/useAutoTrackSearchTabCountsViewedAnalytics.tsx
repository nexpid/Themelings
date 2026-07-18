// app/modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTabs;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoTrackSearchTabCountsViewedAnalytics(arg1) {
        var2 = arg1;
        var6 = var2.searchContext;
        var _closure2_slot0 = var6;
        var5 = var2.visibleTabCounts;
        var _closure2_slot1 = var5;
        var2 = var2.visibleTabs;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var2);
        var _closure2_slot3 = var3;
        var7 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot2;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var7.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = function getSearchTabCount(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = arg1;
                        var1 = _closure2_slot1;
                        var2 = null;
                        var5 = var2 == var1;
                        var1 = null;
                        if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = _closure2_slot3;
                        var6 = var5.current;
                        var5 = var6.includes;
                        var5 = var5.bind(var6)(var4);
                        var2 = null;
                        if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = _closure2_slot1;
                        var2 = var3[var4];
case 4:
                        var1 = var2;
case 2:
                        return var1;
                    }
                };
                var _closure3_slot0 = var6;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = _closure2_slot1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg2;
                        var1 = var3.bind(var2)(var1);
                        var2 = null;
                        var3 = var2 != var1;
                        var2 = 0;
                        if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = var1;
case 8:
                        var1 = arg1;
                        var1 = var1 + var2;
                        return var1;
                    }
                };
                var1 = 0;
                var7 = var3.bind(var4)(var2, var1);
                if(!(var7 > var1)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.trackSearchResultReturned;
                var1 = {};
                var8 = _closure2_slot0;
                var1['searchContext'] = var8;
                var1['searchResultTotalCount'] = var7;
                var4 = _closure1_slot3;
                var7 = var4.MEMBERS;
                var7 = var6.bind(var5)(var7);
                var1['numMemberTabReturnedResults'] = var7;
                var7 = var4.GUILD_CHANNELS;
                var7 = var6.bind(var5)(var7);
                var1['numChannelTabReturnedResults'] = var7;
                var7 = var4.PEOPLE;
                var7 = var6.bind(var5)(var7);
                var1['numPeopleTabReturnedResults'] = var7;
                var7 = var4.MESSAGES;
                var7 = var6.bind(var5)(var7);
                var1['numMessageTabReturnedResults'] = var7;
                var7 = var4.MEDIA;
                var7 = var6.bind(var5)(var7);
                var1['numMediaTabReturnedResults'] = var7;
                var7 = var4.FILES;
                var7 = var6.bind(var5)(var7);
                var1['numFileTabReturnedResults'] = var7;
                var4 = var4.LINKS;
                var4 = var6.bind(var5)(var4);
                var1['numLinkTabReturnedResults'] = var4;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useAutoTrackSearchTabCountsViewedAnalytics'] = var2;
    return var1;
})();