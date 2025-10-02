// app/modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SuggestedFriendSource;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSuggestedFriends(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var7 = var2.isConnected;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var9 = undefined;
            var8 = var5.bind(var9)(var2);
            var6 = var8.useStateFromStoresArray;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getSuggestions;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var6.bind(var8)(var5, var2);
            var _closure2_slot0 = var2;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var5 = new Array(0);
            var8 = var6.bind(var8)(var5);
            var6 = _closure1_slot3;
            var5 = 2;
            var8 = var6.bind(var9)(var8, var5);
            var5 = 0;
            var6 = var8[var5];
            var _closure2_slot1 = var6;
            var5 = 1;
            var5 = var8[var5];
            var4 = var4 == var7;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7;
case 4:
            var _closure2_slot2 = var4;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var3 = new Array(3);
            var3[0] = var6;
            var3[1] = var2;
            var3[2] = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = new Array(0);
                    return var3;
case 6:
                    var5 = _closure2_slot1;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.source;
                        var1 = _closure1_slot6;
                        var1 = var1.USER_SUGGESTIONS;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var4.bind(var5)(var3);
                    var4 = _closure2_slot0;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.user;
                            var1['user'] = var3;
                            var4 = var2.name;
                            var3 = null;
                            var5 = var3 != var4;
                            var3 = undefined;
                            if(!var5) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var3 = var4;
case 8:
                            var1['friendSuggestionName'] = var3;
                            var3 = _closure1_slot6;
                            var3 = var3.USER_SUGGESTIONS;
                            var1['source'] = var3;
                            var2 = var2.contactNames;
                            var1['contactNames'] = var2;
                            return var1;
                        }
                    };
                    var5 = var3.bind(var4)(var2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.unionBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var6, var5, var2);
                    var2 = var3.sort;
                    var1 = function(arg1, arg2) {
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 6;
                        var2 = var6[var1];
                        var4 = undefined;
                        var7 = var5.bind(var4)(var2);
                        var3 = var7.getName;
                        var2 = arg1;
                        var2 = var2.user;
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.localeCompare;
                        var1 = var6[var1];
                        var5 = var5.bind(var4)(var1);
                        var4 = var5.getName;
                        var1 = arg2;
                        var1 = var1.user;
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var1, var3);
            var1 = {};
            var1['added'] = var6;
            var1['setAdded'] = var5;
            var1['friendSuggestions'] = var3;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var2.length;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var2 = var3.length;
case 12:
            var1['numFriendSuggestions'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();