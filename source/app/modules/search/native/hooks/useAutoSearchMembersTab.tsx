// app/modules/search/native/hooks/useAutoSearchMembersTab.tsx
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
    var4 = var4.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useAutoSearchMembersTab.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoSearchMembersTab(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var5;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.debounce;
                var4 = _closure1_slot5;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = _closure1_slot4;
                        var4 = var5.getState;
                        var3 = _closure2_slot0;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.isAutocompleteVisible;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.getGuildIdFromSearchContext;
                        var2 = _closure2_slot0;
                        var4 = var4.bind(var5)(var2);
                        var8 = null;
                        if(!(var8 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                        var2 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 6;
                        var5 = var11[var5];
                        var13 = var2.bind(var3)(var5);
                        var12 = var13.getCurrentConfig;
                        var9 = {};
                        var5 = 'useMemberSearchTabCount';
                        var9['location'] = var5;
                        var5 = {};
                        var10 = _closure2_slot0;
                        var15 = var10.type;
                        var14 = _closure1_slot6;
                        var14 = var14.THREAD;
                        var14 = var15 !== var14;
                        var5['disable'] = var14;
                        var14 = true;
                        var5['autoTrackExposure'] = var14;
                        var5 = var12.bind(var13)(var9, var5);
                        var9 = var5.enabled;
                        var1 = function getMemberSearchChannelId(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var4 = _closure1_slot4;
                                var3 = var4.getState;
                                var2 = arg1;
                                var1 = function(arg1) {
                                    var2 = arg1;
                                    var1 = var2.getChannelIds;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                };
                                var6 = var3.bind(var4)(var2, var1);
                                var3 = var6.size;
                                var4 = 0;
                                var1 = null;
                                if(!(var4 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                                var5 = var6.size;
                                var3 = 1;
                                var2 = null;
                                if(!(var3 === var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var3 = global;
                                var5 = var3.Array;
                                var3 = var5.from;
                                var3 = var3.bind(var5)(var6);
                                var2 = var3[var4];
case 9:
                                var1 = var2;
case 7:
                                return var1;
                            }
                        };
                        var5 = var1.bind(var3)(var10);
                        var1 = 7;
                        var1 = var11[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.searchGuildMemberTab;
                        var1 = {};
                        var1['searchContext'] = var10;
                        var10 = arg1;
                        var1['searchQueryString'] = var10;
                        var1['guildId'] = var4;
                        var1['channelId'] = var5;
                        var4 = null;
                        if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var7 = _closure2_slot0;
                        var7 = var7.type;
                        var6 = _closure1_slot6;
                        var6 = var6.THREAD;
                        var4 = null;
                        if(!(var7 === var6)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                        var4 = var5;
case 11:
                        var1['threadId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var3, var4);
                var3 = _closure1_slot4;
                var2 = var3.subscribeTextInputValue;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.cleanupGuildMemberTab;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useAutoSearchMembersTab'] = var2;
    return var1;
})();