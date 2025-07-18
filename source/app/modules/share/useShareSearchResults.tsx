// app/modules/share/useShareSearchResults.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function makeAutocompleterSearchParams(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getQuickSwitcherOptions;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var4 = var1.query;
            var1 = var1.queryMode;
            var2 = _closure1_slot8;
            var3 = null;
            var5 = var3 != var1;
            if(!var5) { _fun0001_ip = 77; continue _fun0001 }
 63:
            var7 = _closure1_slot8;
            var6 = var7.includes;
            var5 = var6.bind(var7)(var1);
 77:
            var3 = null;
            if(!var5) { _fun0001_ip = 96; continue _fun0001 }
 82:
            var5 = new Array(1);
            var5[0] = var1;
            var2 = var5;
            var3 = var1;
 96:
            var1 = {};
            var1['query'] = var4;
            var1['queryMode'] = var3;
            var1['resultTypes'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ALLOWED_TYPES;
    var _closure1_slot8 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/share/useShareSearchResults.tsx';
    var5 = var6.bind(var7)(var5);
    var3['makeAutocompleterSearchParams'] = var4;
    var2 = function useShareSearchResults(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.targetDestination;
            var _closure2_slot0 = var13;
            var11 = var1.selectedDestinations;
            var _closure2_slot1 = var11;
            var9 = var1.originDestination;
            var _closure2_slot2 = var9;
            var8 = var1.includeMissingDMs;
            var17 = undefined;
            if(!(var8 === var17)) { _fun0002_ip = 49; continue _fun0002 }
 47:
            var8 = false;
 49:
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var17;
            var _closure2_slot5 = var17;
            var _closure2_slot6 = var17;
            var _closure2_slot7 = var17;
            var _closure2_slot8 = var17;
            var _closure2_slot9 = var17;
            var _closure2_slot10 = var17;
            var _closure2_slot11 = var17;
            var _closure2_slot12 = var17;
            var _closure2_slot13 = var17;
            var _closure2_slot14 = var17;
            var _closure2_slot15 = var17;
            var _closure2_slot16 = var17;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 7;
            var1 = var6[var18];
            var7 = var2.bind(var17)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var7)(var2, var1);
            _closure2_slot4 = var1;
            var12 = _closure1_slot4;
            var4 = var12.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var2 = {'blacklist': null, 'frecencyBoosters': true, 'userFilters': null};
                var3 = global;
                var5 = var3.Set;
                var6 = _closure2_slot4;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'user:';
                var4 = var4.bind(var3)(var6);
                var3 = new Array(1);
                var3[0] = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var7 = var3;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['blacklist'] = var3;
                var1['searchOptions'] = var2;
                return var1;
            };
            var2 = var4.bind(var12)(var1, var2);
            var4 = _closure1_slot1;
            var1 = 8;
            var1 = var6[var1];
            var1 = var4.bind(var17)(var1);
            var1 = var1.bind(var17)(var2);
            var19 = var1.search;
            _closure2_slot5 = var19;
            var4 = var1.query;
            _closure2_slot6 = var4;
            var16 = var1.results;
            _closure2_slot7 = var16;
            var6 = var12.useState;
            var2 = _closure1_slot9;
            var1 = '';
            var2 = var2.bind(var17)(var1);
            var7 = var6.bind(var12)(var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var17)(var7, var2);
            var2 = 0;
            var7 = var6[var2];
            _closure2_slot8 = var7;
            var2 = 1;
            var2 = var6[var2];
            _closure2_slot9 = var2;
            var10 = var12.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot9;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var10.bind(var12)(var2, var6);
            var14 = var7.queryMode;
            _closure2_slot10 = var14;
            var10 = var12.useRef;
            var6 = null;
            var10 = var10.bind(var12)(var6);
            _closure2_slot11 = var10;
            var6 = var12.useRef;
            var6 = var6.bind(var12)(var11);
            _closure2_slot12 = var6;
            var12 = var10.current;
            var10 = var11;
            if(!(var4 === var12)) { _fun0002_ip = 382; continue _fun0002 }
 377:
            var10 = var6.current;
 382:
            _closure2_slot13 = var10;
            var6 = _closure1_slot4;
            var20 = var6.useEffect;
            var15 = new Array(2);
            var15[0] = var4;
            var15[1] = var11;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
 20:
                    var3 = _closure2_slot12;
                    var2 = _closure2_slot1;
                    var3['current'] = var2;
 34:
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot6;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var20.bind(var6)(var12, var15);
            var15 = var6.useLayoutEffect;
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var7;
            var7 = function() {
                var1 = _closure2_slot8;
                var4 = var1.query;
                var1 = _closure2_slot8;
                var1 = var1.resultTypes;
                var3 = _closure2_slot5;
                var2 = {};
                var2['query'] = var4;
                var2['resultTypes'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var15.bind(var6)(var7, var12);
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = 9;
            var12 = var7[var12];
            var19 = var15.bind(var17)(var12);
            var12 = var19.useFrecencySettings;
            var12 = var12.bind(var19)();
            var12 = var7[var18];
            var21 = var15.bind(var17)(var12);
            var20 = var21.useStateFromStores;
            var12 = _closure1_slot7;
            var19 = new Array(1);
            var19[0] = var12;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getFrequentlyWithoutFetchingLatest;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var20.bind(var21)(var19, var12);
            _closure2_slot14 = var12;
            var7 = var7[var18];
            var17 = var15.bind(var17)(var7);
            var15 = var17.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var15.bind(var17)(var7, var5);
            _closure2_slot15 = var7;
            var15 = var1 !== var4;
            _closure2_slot16 = var15;
            var1 = {};
            var5 = var6.useMemo;
            var4 = new Array(10);
            var4[0] = var16;
            var4[1] = var15;
            var4[2] = var14;
            var4[3] = var13;
            var4[4] = var12;
            var4[5] = var11;
            var4[6] = var10;
            var4[7] = var9;
            var4[8] = var8;
            var4[9] = var7;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot7;
                var1['results'] = var5;
                var5 = _closure2_slot16;
                var1['hasQuery'] = var5;
                var5 = _closure2_slot10;
                var1['queryMode'] = var5;
                var5 = _closure2_slot0;
                var1['targetDestination'] = var5;
                var5 = _closure2_slot14;
                var1['frequentChannels'] = var5;
                var5 = _closure2_slot1;
                var1['selectedDestinations'] = var5;
                var5 = _closure2_slot13;
                var1['pinnedDestinations'] = var5;
                var5 = _closure2_slot2;
                var1['originDestination'] = var5;
                var5 = _closure2_slot3;
                var1['includeMissingDMs'] = var5;
                var4 = _closure2_slot15;
                var1['isConnected'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var6)(var3, var4);
            var1['results'] = var3;
            var1['updateSearchText'] = var2;
            return var1;
        }
    };
    var3['useShareSearchResults'] = var2;
    return var1;
})();