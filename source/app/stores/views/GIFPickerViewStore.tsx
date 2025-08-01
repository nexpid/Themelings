// app/stores/views/GIFPickerViewStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GIFPickerResultTypes;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GIFType;
    var2 = var2.IMAGE;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = '';
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var2;
    var2 = new Array(0);
    var _closure1_slot12 = var2;
    var2 = new Array(0);
    var _closure1_slot13 = var2;
    var2 = new Array(0);
    var _closure1_slot14 = var2;
    var2 = new Array(0);
    var _closure1_slot15 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GIFPickerViewStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getAnalyticsID';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getResultQuery';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getResultItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getTrendingCategories';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSelectedFormat';
        var5['key'] = var7;
        var7 = function value() {
            var1 = 'tinywebp';
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSuggestions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getTrendingSearchTerms';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GIFPickerViewStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleInitialize(arg1) {
        var1 = arg1;
        var2 = var1.analyticsID;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GIF_PICKER_INITIALIZE'] = var9;
    var9 = function handleQuery(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.query;
            _closure1_slot10 = var3;
            var1 = '';
            if(!(var1 === var3)) { _fun0003_ip = 43; continue _fun0003 }
 23:
            _closure1_slot11 = var1;
            var1 = new Array(0);
            _closure1_slot12 = var1;
            var1 = new Array(0);
            _closure1_slot14 = var1;
 43:
            var1 = undefined;
            return var1;
        }
    };
    var2['GIF_PICKER_QUERY'] = var9;
    var9 = function handleQuerySuccess(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.query;
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 29; continue _fun0004 }
 14:
            var4 = _closure1_slot10;
            var2 = _closure1_slot11;
            if(!(var4 !== var2)) { _fun0004_ip = 84; continue _fun0004 }
 29:
            var2 = var1.query;
            if(!(var3 != var2)) { _fun0004_ip = 50; continue _fun0004 }
 38:
            var3 = var1.query;
            _closure1_slot11 = var3;
 50:
            var3 = var1.items;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var7 = var1.width;
                var6 = var1.height;
                var5 = var1.src;
                var4 = var1.gif_src;
                var3 = var1.url;
                var2 = var1.id;
                var1 = {};
                var1['width'] = var7;
                var1['height'] = var6;
                var1['src'] = var5;
                var1['gifSrc'] = var4;
                var1['url'] = var3;
                var1['id'] = var2;
                var2 = _closure1_slot8;
                var1['format'] = var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            _closure1_slot12 = var2;
            var1 = undefined;
            return var1;
 84:
            var1 = false;
            return var1;
        }
    };
    var2['GIF_PICKER_QUERY_SUCCESS'] = var9;
    var9 = function handleQueryFailure(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.query;
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 33; continue _fun0005 }
 14:
            _closure1_slot11 = var1;
            var1 = new Array(0);
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
 33:
            var1 = false;
            return var1;
        }
    };
    var2['GIF_PICKER_QUERY_FAILURE'] = var9;
    var9 = function handleTrendingFetchSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var5 = var4.trendingCategories;
            var2 = var4.trendingGIFPreview;
            var1 = null;
            if(!(var1 == var2)) { _fun0006_ip = 27; continue _fun0006 }
 21:
            var3 = new Array(0);
            _fun0006_ip = 145; continue _fun0006;
 27:
            var2 = {};
            var6 = _closure1_slot7;
            var6 = var6.TRENDING_GIFS;
            var2['type'] = var6;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 7;
            var7 = var11[var6];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.H6zNFx;
            var6 = var7.bind(var8)(var6);
            var2['name'] = var6;
            var4 = var4.trendingGIFPreview;
            var4 = var4.src;
            var2['src'] = var4;
            var1 = _closure1_slot8;
            var2['format'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var3 = var1;
 145:
            var2 = new Array(0);
            var12 = 0;
            var14 = var2;
            var13 = var3;
            var12 = arraySpread(var14, var13, var12);
            var4 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var3 = var2.src;
                var2 = 'src';
                var1[var2] = var3;
                var3 = _closure1_slot7;
                var4 = var3.TRENDING_CATEGORY;
                var3 = 'type';
                var1[var3] = var4;
                var3 = _closure1_slot8;
                var2 = 'format';
                var1[var2] = var3;
                return var1;
            };
            var13 = var4.bind(var5)(var1);
            var14 = var2;
            var1 = arraySpread(var14, var13, var12);
            _closure1_slot13 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['GIF_PICKER_TRENDING_FETCH_SUCCESS'] = var9;
    var9 = function handleSuggestionsSuccess(arg1) {
        var1 = arg1;
        var2 = var1.items;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GIF_PICKER_SUGGESTIONS_SUCCESS'] = var9;
    var4 = function handleTrendingSearchSuccess(arg1) {
        var1 = arg1;
        var2 = var1.items;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/views/GIFPickerViewStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();