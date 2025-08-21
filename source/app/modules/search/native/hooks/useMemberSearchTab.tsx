// app/modules/search/native/hooks/useMemberSearchTab.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createZustandStore;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.Permissions;
    var _closure1_slot7 = var9;
    var8 = var8.SearchTypes;
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.AutocompleterResultTypes;
    var _closure1_slot9 = var8;
    var10 = new Array(0);
    var _closure1_slot10 = var10;
    var9 = var4.Object;
    var8 = var9.freeze;
    var4 = {'searchResultsQuery': '', 'data': null, 'isFetching': false, 'count': null};
    var4['data'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = function() {
        var1 = _closure1_slot11;
        return var1;
    };
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useMemberSearchTab.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useMemberSearchTabCount(arg1, arg2) {
        var3 = arg1;
        var9 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var9;
        var4 = function useMemberSearchChannelId(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot6;
                var3 = var4.useState;
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
                if(!(var4 !== var3)) { _fun0001_ip = 82; continue _fun0001 }
 43:
                var5 = var6.size;
                var3 = 1;
                var2 = null;
                if(!(var3 === var5)) { _fun0001_ip = 79; continue _fun0001 }
 57:
                var3 = global;
                var5 = var3.Array;
                var3 = var5.from;
                var3 = var3.bind(var5)(var6);
                var2 = var3[var4];
 79:
                var1 = var2;
 82:
                return var1;
            }
        };
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var _closure2_slot2 = var4;
        var5 = _closure1_slot4;
        var8 = var5.useCallback;
        var7 = new Array(1);
        var7[0] = var4;
        var6 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var6 = _closure1_slot12;
                var4 = var6.getField;
                var3 = 'searchResultsQuery';
                var4 = var4.bind(var6)(var3);
                var3 = arg2;
                if(!(var4 === var3)) { _fun0002_ip = 121; continue _fun0002 }
 34:
                var4 = new Array(0);
                var _closure3_slot0 = var4;
                var7 = _closure1_slot5;
                var6 = var7.getChannel;
                var3 = _closure2_slot2;
                var3 = var6.bind(var7)(var3);
                var _closure3_slot1 = var3;
                var3 = var5.forEach;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var2 = var3.type;
                        var1 = _closure1_slot9;
                        var1 = var1.USER;
                        if(!(var2 === var1)) { _fun0003_ip = 125; continue _fun0003 }
 25:
                        var4 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0003_ip = 111; continue _fun0003 }
 38:
                        var5 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var2 = 6;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.can;
                        var4 = {};
                        var7 = _closure1_slot7;
                        var7 = var7.VIEW_CHANNEL;
                        var4['permission'] = var7;
                        var7 = var3.record;
                        var4['user'] = var7;
                        var7 = _closure3_slot1;
                        var4['context'] = var7;
                        var4 = var5.bind(var6)(var4);
                        if(var4) { _fun0003_ip = 111; continue _fun0003 }
 109:
                        return var2;
 111:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 125:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot12;
                var2 = var3.setState;
                var1 = {};
                var5 = false;
                var1['isFetching'] = var5;
                var1['data'] = var4;
                var4 = var4.length;
                var1['count'] = var4;
                var1 = var2.bind(var3)(var1);
 121:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var8.bind(var5)(var6, var7);
        var _closure2_slot3 = var8;
        var7 = var5.useMemo;
        var6 = new Array(3);
        var6[0] = var8;
        var6[1] = var3;
        var6[2] = var4;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 7;
                var1 = var4[var1];
                var7 = undefined;
                var5 = var3.bind(var7)(var1);
                var3 = var5.getGuildIdFromSearchContext;
                var1 = _closure2_slot0;
                var9 = var3.bind(var5)(var1);
                var1 = null;
                if(!(var1 != var9)) { _fun0004_ip = 290; continue _fun0004 }
 52:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 8;
                var3 = var6[var3];
                var10 = var5.bind(var7)(var3);
                var6 = var10.getCurrentConfig;
                var5 = {};
                var3 = 'useMemberSearchTabCount';
                var5['location'] = var3;
                var3 = {};
                var8 = _closure2_slot0;
                var11 = var8.type;
                var8 = _closure1_slot8;
                var8 = var8.THREAD;
                var8 = var11 !== var8;
                var3['disable'] = var8;
                var8 = true;
                var3['autoTrackExposure'] = var8;
                var3 = var6.bind(var10)(var5, var3);
                var3 = var3.enabled;
                var5 = null;
                if(!var3) { _fun0004_ip = 172; continue _fun0004 }
 143:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var3 = _closure1_slot8;
                var3 = var3.THREAD;
                var5 = null;
                if(!(var6 === var3)) { _fun0004_ip = 172; continue _fun0004 }
 168:
                var5 = _closure2_slot2;
 172:
                var6 = var1 != var5;
                var3 = undefined;
                if(!var6) { _fun0004_ip = 184; continue _fun0004 }
 181:
                var3 = var5;
 184:
                var6 = _closure1_slot1;
                var10 = _closure1_slot3;
                var5 = 9;
                var5 = var10[var5];
                var7 = var6.bind(var7)(var5);
                var15 = _closure2_slot3;
                var2 = _closure1_slot9;
                var2 = var2.USER;
                var5 = new Array(1);
                var5[0] = var2;
                var4 = {};
                var2 = {};
                var2['guild'] = var9;
                var2['strict'] = var8;
                var2['thread'] = var3;
                var4['userFilters'] = var2;
                var2 = var7.prototype;
                var3 = Object.create(var2, {constructor: {value: var7}});
                var13 = 50;
                var16 = var3;
                var14 = var5;
                var12 = var4;
                var2 = new var16[var7](var15, var14, var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var3;
                var3 = var2.createSearchContext;
                var3 = var3.bind(var2)();
                return var2;
 290:
                return var1;
            }
        };
        var6 = var7.bind(var5)(var4, var6);
        var _closure2_slot4 = var6;
        var8 = var5.useCallback;
        var7 = new Array(2);
        var7[0] = var6;
        var7[1] = var3;
        var4 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var7 = _closure1_slot6;
                var6 = var7.getState;
                var5 = _closure2_slot0;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAutocompleteVisible;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var6.bind(var7)(var5, var3);
                if(var3) { _fun0005_ip = 224; continue _fun0005 }
 44:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 7;
                var3 = var6[var3];
                var6 = undefined;
                var7 = var5.bind(var6)(var3);
                var5 = var7.getGuildIdFromSearchContext;
                var3 = _closure2_slot0;
                var7 = var5.bind(var7)(var3);
                var5 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var5)) { _fun0005_ip = 210; continue _fun0005 }
 91:
                var5 = var4.trim;
                var8 = var5.bind(var4)();
                var5 = '';
                if(!(var5 !== var8)) { _fun0005_ip = 210; continue _fun0005 }
 109:
                if(!(var3 != var7)) { _fun0005_ip = 210; continue _fun0005 }
 113:
                var8 = _closure1_slot12;
                var5 = var8.setState;
                var3 = {'isFetching': true, 'data': null, 'count': 0};
                var9 = _closure1_slot10;
                var3['data'] = var9;
                var3['searchResultsQuery'] = var4;
                var3 = var5.bind(var8)(var3);
                var5 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 10;
                var3 = var8[var3];
                var6 = var5.bind(var6)(var3);
                var5 = var6.requestMembers;
                var3 = 50;
                var3 = var5.bind(var6)(var7, var4, var3);
                var3 = _closure2_slot4;
                var2 = var3.search;
                var2 = var2.bind(var3)(var4);
                _fun0005_ip = 224; continue _fun0005;
 210:
                var2 = _closure1_slot12;
                var1 = var2.resetState;
                var1 = var1.bind(var2)();
 224:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var8.bind(var5)(var4, var7);
        var _closure2_slot5 = var8;
        var7 = var5.useEffect;
        var4 = new Array(4);
        var4[0] = var6;
        var4[1] = var9;
        var4[2] = var8;
        var4[3] = var3;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0006_ip = 76; continue _fun0006 }
 10:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.debounce;
                var4 = _closure2_slot5;
                var3 = 250;
                var4 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot6;
                var2 = var3.subscribeTextInputValue;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
 76:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 27; continue _fun0007 }
 13:
                    var2 = _closure2_slot4;
                    var1 = var2.clean;
                    var1 = var1.bind(var2)();
 27:
                    var2 = _closure1_slot12;
                    var1 = var2.resetState;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot12;
        var2 = var3.useField;
        var1 = 'count';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var5;
    var3['MemberSearchTabStore'] = var4;
    var4 = function useIsMemberSearchTabFetching() {
        var3 = _closure1_slot12;
        var2 = var3.useField;
        var1 = 'isFetching';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useIsMemberSearchTabFetching'] = var4;
    var2 = function useMemberSearchTabResults() {
        var3 = _closure1_slot12;
        var2 = var3.useField;
        var1 = 'data';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useMemberSearchTabResults'] = var2;
    return var1;
})();