// app/modules/share/useShareSearchResults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function makeAutocompleterSearchParams(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot8;
            var6 = var7.includes;
            var5 = var6.bind(var7)(var1);
case 2:
            var3 = null;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = new Array(1);
            var5[0] = var1;
            var2 = var5;
            var3 = var1;
case 4:
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
    var5 = metroImportAll;
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
case 0:
            var1 = arg1;
            var14 = var1.targetDestination;
            var _closure2_slot0 = var14;
            var12 = var1.selectedDestinations;
            var _closure2_slot1 = var12;
            var10 = var1.originDestination;
            var _closure2_slot2 = var10;
            var9 = var1.channelFilter;
            var _closure2_slot3 = var9;
            var8 = var1.includeMissingDMs;
            var18 = undefined;
            if(!(var8 === var18)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = false;
case 6:
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var18;
            var _closure2_slot6 = var18;
            var _closure2_slot7 = var18;
            var _closure2_slot8 = var18;
            var _closure2_slot9 = var18;
            var _closure2_slot10 = var18;
            var _closure2_slot11 = var18;
            var _closure2_slot12 = var18;
            var _closure2_slot13 = var18;
            var _closure2_slot14 = var18;
            var _closure2_slot15 = var18;
            var _closure2_slot16 = var18;
            var _closure2_slot17 = var18;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 7;
            var1 = var6[var19];
            var7 = var2.bind(var18)(var1);
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
            _closure2_slot5 = var1;
            var13 = _closure1_slot4;
            var4 = var13.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var2 = {'blacklist': null, 'frecencyBoosters': true, 'userFilters': null};
                var3 = global;
                var5 = var3.Set;
                var6 = _closure2_slot5;
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
            var2 = var4.bind(var13)(var1, var2);
            var4 = _closure1_slot1;
            var1 = 8;
            var1 = var6[var1];
            var1 = var4.bind(var18)(var1);
            var1 = var1.bind(var18)(var2);
            var20 = var1.search;
            _closure2_slot6 = var20;
            var4 = var1.query;
            _closure2_slot7 = var4;
            var17 = var1.results;
            _closure2_slot8 = var17;
            var6 = var13.useState;
            var2 = _closure1_slot9;
            var1 = '';
            var2 = var2.bind(var18)(var1);
            var7 = var6.bind(var13)(var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var18)(var7, var2);
            var2 = 0;
            var7 = var6[var2];
            _closure2_slot9 = var7;
            var2 = 1;
            var2 = var6[var2];
            _closure2_slot10 = var2;
            var11 = var13.useCallback;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot10;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var11.bind(var13)(var2, var6);
            var15 = var7.queryMode;
            _closure2_slot11 = var15;
            var11 = var13.useRef;
            var6 = null;
            var11 = var11.bind(var13)(var6);
            _closure2_slot12 = var11;
            var6 = var13.useRef;
            var6 = var6.bind(var13)(var12);
            _closure2_slot13 = var6;
            var13 = var11.current;
            var11 = var12;
            if(!(var4 === var13)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = var6.current;
case 8:
            _closure2_slot14 = var11;
            var6 = _closure1_slot4;
            var21 = var6.useEffect;
            var16 = new Array(2);
            var16[0] = var4;
            var16[1] = var12;
            var13 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot1;
                    var3['current'] = var2;
case 10:
                    var2 = _closure2_slot12;
                    var1 = _closure2_slot7;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var21.bind(var6)(var13, var16);
            var16 = var6.useLayoutEffect;
            var13 = new Array(2);
            var13[0] = var20;
            var13[1] = var7;
            var7 = function() {
                var1 = _closure2_slot9;
                var4 = var1.query;
                var1 = _closure2_slot9;
                var1 = var1.resultTypes;
                var3 = _closure2_slot6;
                var2 = {};
                var2['query'] = var4;
                var2['resultTypes'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var16.bind(var6)(var7, var13);
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var13 = 9;
            var13 = var7[var13];
            var20 = var16.bind(var18)(var13);
            var13 = var20.useFrecencySettings;
            var13 = var13.bind(var20)();
            var13 = var7[var19];
            var22 = var16.bind(var18)(var13);
            var21 = var22.useStateFromStores;
            var13 = _closure1_slot7;
            var20 = new Array(1);
            var20[0] = var13;
            var13 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getFrequentlyWithoutFetchingLatest;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var21.bind(var22)(var20, var13);
            _closure2_slot15 = var13;
            var7 = var7[var19];
            var18 = var16.bind(var18)(var7);
            var16 = var18.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var16.bind(var18)(var7, var5);
            _closure2_slot16 = var7;
            var16 = var1 !== var4;
            _closure2_slot17 = var16;
            var1 = {};
            var5 = var6.useMemo;
            var4 = new Array(11);
            var4[0] = var17;
            var4[1] = var16;
            var4[2] = var15;
            var4[3] = var14;
            var4[4] = var13;
            var4[5] = var12;
            var4[6] = var11;
            var4[7] = var10;
            var4[8] = var9;
            var4[9] = var8;
            var4[10] = var7;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot8;
                var1['results'] = var5;
                var5 = _closure2_slot17;
                var1['hasQuery'] = var5;
                var5 = _closure2_slot11;
                var1['queryMode'] = var5;
                var5 = _closure2_slot0;
                var1['targetDestination'] = var5;
                var5 = _closure2_slot15;
                var1['frequentChannels'] = var5;
                var5 = _closure2_slot1;
                var1['selectedDestinations'] = var5;
                var5 = _closure2_slot14;
                var1['pinnedDestinations'] = var5;
                var5 = _closure2_slot2;
                var1['originDestination'] = var5;
                var5 = _closure2_slot3;
                var1['channelFilter'] = var5;
                var5 = _closure2_slot4;
                var1['includeMissingDMs'] = var5;
                var4 = _closure2_slot16;
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