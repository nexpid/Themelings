// app/modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTabs;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoTrackSearchTabCountsViewedAnalytics(arg1) {
        var3 = arg1;
        var5 = var3.searchContext;
        var _closure2_slot0 = var5;
        var2 = var3.visibleTabCounts;
        var _closure2_slot1 = var2;
        var3 = var3.visibleTabs;
        var _closure2_slot2 = var3;
        var4 = _closure1_slot3;
        var7 = var4.useRef;
        var6 = false;
        var6 = var7.bind(var4)(var6);
        var _closure2_slot3 = var6;
        var6 = var4.useRef;
        var6 = var6.bind(var4)(var3);
        var _closure2_slot4 = var6;
        var7 = var4.useEffect;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure2_slot4;
            var1 = _closure2_slot2;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var7.bind(var4)(var3, var6);
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 449; continue _fun0001 }
 18:
                var7 = function getSearchTabCount(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure2_slot4;
                        var4 = var1.current;
                        var1 = var4.includes;
                        var4 = var1.bind(var4)(var3);
                        var1 = null;
                        if(!var4) { _fun0002_ip = 38; continue _fun0002 }
 30:
                        var2 = _closure2_slot1;
                        var1 = var2[var3];
 38:
                        return var1;
                    }
                };
                var _closure3_slot0 = var7;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = _closure2_slot1;
                var4 = var3.bind(var4)(var2);
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = arg2;
                        var1 = var3.bind(var2)(var1);
                        var2 = null;
                        var3 = var2 != var1;
                        var2 = 0;
                        if(!var3) { _fun0003_ip = 31; continue _fun0003 }
 28:
                        var2 = var1;
 31:
                        var1 = arg1;
                        var1 = var1 + var2;
                        return var1;
                    }
                };
                var1 = 0;
                var8 = var3.bind(var4)(var2, var1);
                if(!(var8 > var1)) { _fun0001_ip = 247; continue _fun0001 }
 79:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var3.trackSearchResultReturnedMobile;
                var1 = {};
                var9 = _closure2_slot0;
                var1['searchContext'] = var9;
                var1['searchResultTotalCount'] = var8;
                var4 = _closure1_slot5;
                var8 = var4.MEMBERS;
                var8 = var7.bind(var6)(var8);
                var1['numMemberTabReturnedResults'] = var8;
                var8 = var4.GUILD_CHANNELS;
                var8 = var7.bind(var6)(var8);
                var1['numChannelTabReturnedResults'] = var8;
                var8 = var4.PEOPLE;
                var8 = var7.bind(var6)(var8);
                var1['numPeopleTabReturnedResults'] = var8;
                var8 = var4.MESSAGES;
                var8 = var7.bind(var6)(var8);
                var1['numMessageTabReturnedResults'] = var8;
                var8 = var4.MEDIA;
                var8 = var7.bind(var6)(var8);
                var1['numMediaTabReturnedResults'] = var8;
                var8 = var4.FILES;
                var8 = var7.bind(var6)(var8);
                var1['numFileTabReturnedResults'] = var8;
                var4 = var4.LINKS;
                var4 = var7.bind(var6)(var4);
                var1['numLinkTabReturnedResults'] = var4;
                var1 = var2.bind(var3)(var1);
 247:
                var1 = _closure2_slot3;
                var1 = var1.current;
                if(var1) { _fun0001_ip = 449; continue _fun0001 }
 262:
                var2 = _closure2_slot3;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackSearchResultCountsViewed;
                var1 = {};
                var6 = _closure2_slot0;
                var1['searchContext'] = var6;
                var5 = _closure2_slot1;
                var4 = _closure1_slot5;
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
 449:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot4;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 19; continue _fun0004 }
 12:
                    var2 = arg2;
                    var1 = var2 !== var3;
 19:
                    if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 22:
                    var2 = _closure2_slot3;
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