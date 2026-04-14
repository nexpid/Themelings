// app/modules/search/native/stores/SearchTabsLayoutStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function handleSearchQuery(arg1) {
        var1 = arg1;
        var2 = var1.searchContext;
        _closure1_slot16 = var2;
        var2 = _closure1_slot22;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var1 = function computeLayout() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = _closure1_slot16;
            var _closure2_slot0 = var11;
            var8 = null;
            if(!(var8 != var11)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot12;
            var2 = var4.isAutocompleteVisible;
            var2 = var2.bind(var4)(var11);
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot12;
            var2 = var4.isInitialSearchQuery;
            var7 = var2.bind(var4)(var11);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot12;
            var2 = var4.isTextInputValueEmpty;
            var2 = var2.bind(var4)(var11);
            var _closure2_slot2 = var2;
            var4 = _closure1_slot12;
            var2 = var4.hasUserAddedTags;
            var2 = var2.bind(var4)(var11);
            var _closure2_slot3 = var2;
            var4 = _closure1_slot12;
            var2 = var4.isTagsEmpty;
            var2 = var2.bind(var4)(var11);
            var _closure2_slot4 = var2;
            var4 = _closure1_slot12;
            var2 = var4.getSearchResultsQuery;
            var5 = var2.bind(var4)(var11);
            var _closure2_slot5 = var5;
            var4 = _closure1_slot12;
            var2 = var4.getQueryString;
            var4 = var2.bind(var4)(var11);
            if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = _closure1_slot15;
            var2 = var11.type;
            var9 = var6[var2];
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var6 = _closure1_slot14;
            var2 = var11.type;
            var9 = var6[var2];
case 12:
            var6 = var9.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure1_slot13;
                    var3 = var3.MEMBERS;
                    if(!(var3 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure1_slot13;
                    var3 = var3.RECENT;
                    if(!(var3 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure1_slot13;
                    var3 = var3.GUILD_CHANNELS;
                    if(!(var3 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                    var1 = _closure1_slot13;
                    var1 = var1.PEOPLE;
                    if(!(var1 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 18:
                    var1 = true;
                    return var1;
case 15:
                    var1 = _closure2_slot4;
                    return var1;
case 13:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure2_slot3;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = _closure2_slot2;
                    var2 = !var3;
case 21:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var2 = var6.bind(var9)(var2);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 12;
            var6 = var10[var6];
            var10 = undefined;
            var9 = var9.bind(var10)(var6);
            var6 = var9.getSearchContextId;
            var6 = var6.bind(var9)(var11);
            var _closure2_slot6 = var6;
            var11 = var2.reduce;
            var9 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var4 = _closure1_slot13;
                    var4 = var4.MEMBERS;
                    if(!(var4 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var4 = _closure1_slot13;
                    var4 = var4.GUILD_CHANNELS;
                    if(!(var4 !== var3)) { _fun0004_ip = 25; continue _fun0004 }
case 9:
                    var4 = _closure1_slot13;
                    var4 = var4.PEOPLE;
                    if(!(var4 !== var3)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var4 = _closure1_slot13;
                    var4 = var4.MESSAGES;
                    if(!(var4 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 5:
                    var4 = _closure1_slot13;
                    var4 = var4.PINS;
                    if(!(var4 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var4 = _closure1_slot13;
                    var4 = var4.MEDIA;
                    if(!(var4 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 21:
                    var4 = _closure1_slot13;
                    var4 = var4.LINKS;
                    if(!(var4 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 30:
                    var4 = _closure1_slot13;
                    var4 = var4.FILES;
                    if(!(var4 === var3)) { _fun0004_ip = 31; continue _fun0004 }
case 28:
                    var6 = _closure1_slot8;
                    var5 = var6.getTotalCount;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var7 = var7[var4];
                    var4 = undefined;
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.getSearchTabFetchId;
                    var7 = _closure2_slot0;
                    var4 = _closure2_slot5;
                    var4 = var8.bind(var9)(var7, var3, var4);
                    var4 = var5.bind(var6)(var4);
                    var1[var3] = var4;
                    _fun0004_ip = 31; continue _fun0004;
case 26:
                    var6 = _closure1_slot11;
                    var5 = var6.getCount;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var1[var3] = var4;
                    _fun0004_ip = 31; continue _fun0004;
case 25:
                    var6 = _closure1_slot9;
                    var5 = var6.getCount;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var1[var3] = var4;
                    _fun0004_ip = 31; continue _fun0004;
case 23:
                    var5 = _closure1_slot10;
                    var4 = var5.getCount;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var2);
                    var1[var3] = var2;
case 31:
                    return var1;
                }
            };
            var6 = {};
            var6 = var11.bind(var2)(var9, var6);
            var _closure2_slot7 = var6;
            if(var7) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            if(!(var5 === var4)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var5 = var2.every;
            var4 = function(arg1) {
                var2 = _closure2_slot7;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var5 = _closure1_slot19;
            var4 = _closure1_slot20;
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var9 = var2.filter;
            var7 = function(arg1) {
                var2 = _closure2_slot7;
                var1 = arg1;
                var2 = var2[var1];
                var1 = 0;
                var1 = var1 !== var2;
                return var1;
            };
            var5 = var9.bind(var2)(var7);
            var9 = false;
            _closure1_slot17 = var9;
            var4 = var6;
            _fun0002_ip = 38; continue _fun0002;
case 34:
            var6 = var2.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure1_slot17;
                    if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var4 = _closure1_slot19;
                    var3 = var4.includes;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 39:
                    return var1;
                }
            };
            var5 = var6.bind(var2)(var1);
            var6 = false;
            _closure1_slot17 = var6;
            var4 = null;
            _fun0002_ip = 38; continue _fun0002;
case 32:
            var1 = true;
            _closure1_slot17 = var1;
            var5 = var2;
            var4 = null;
case 38:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 11;
            var1 = var1[var12];
            var7 = var6.bind(var10)(var1);
            var6 = var7.areArraysShallowEqual;
            var1 = _closure1_slot18;
            var1 = var6.bind(var7)(var1, var2);
            var1 = !var1;
            if(var1) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var9 = var7.bind(var10)(var6);
            var7 = var9.areArraysShallowEqual;
            var6 = _closure1_slot19;
            var6 = var7.bind(var9)(var6, var5);
            var1 = !var6;
case 41:
            if(var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var9 = _closure1_slot20;
            var6 = var9 === var4;
            if(var6) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var7 = var8 != var9;
            if(!var7) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var7 = var8 != var4;
case 47:
            if(!var7) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var11.bind(var10)(var8);
            var7 = var8.bind(var10)(var9, var4);
case 49:
            var6 = var7;
case 45:
            var1 = !var6;
case 43:
            _closure1_slot19 = var5;
            _closure1_slot20 = var4;
            _closure1_slot18 = var2;
            return var1;
case 8:
            var1 = false;
            return var1;
case 6:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var8 = {};
    var10 = true;
    var8['value'] = var10;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.SearchTabs;
    var _closure1_slot13 = var9;
    var9 = var8.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot14 = var9;
    var8 = var8.SEARCH_TYPE_TO_SEARCH_RESULT_TABS;
    var _closure1_slot15 = var8;
    var9 = new Array(0);
    var8 = null;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var10;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var9;
    var _closure1_slot20 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Store;
    var2 = function(arg1) {
        var4 = function SearchTabsLayoutStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot21;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 19; continue _fun0006;
case 51:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 19:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var8 = var4.waitFor;
            var13 = _closure1_slot12;
            var12 = _closure1_slot8;
            var11 = _closure1_slot10;
            var10 = _closure1_slot9;
            var9 = _closure1_slot11;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(4);
            var2[0] = var5;
            var5 = _closure1_slot10;
            var2[1] = var5;
            var5 = _closure1_slot9;
            var2[2] = var5;
            var5 = _closure1_slot11;
            var2[3] = var5;
            var1 = _closure1_slot22;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCandidateTabs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getVisibleTabs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getVisibleTabCounts';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchTabsLayoutStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['SEARCH_QUERY_NATIVE_INITIALIZE'] = var4;
    var2['SEARCH_QUERY_NATIVE_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchTabsLayoutStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();