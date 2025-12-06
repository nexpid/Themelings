// app/modules/search/SearchFetcher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot4;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = _closure1_slot12;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot4;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.SearchTypes;
    var _closure1_slot9 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function SearchFetcher(arg1, arg2, arg3) {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['isCanceled'] = var2;
            var2 = arg1;
            var3['searchId'] = var2;
            var2 = arg2;
            var3['searchType'] = var2;
            var2 = arg3;
            var3['query'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'fetch';
        var5['key'] = var2;
        var7 = _closure1_slot6;
        var2 = undefined;
        var1 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var11 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = arg1;
                    var7 = arg2;
                    var3 = arg3;
                    var2 = undefined;
                    var5 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var4 = var11.isCanceled;
                    if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14: // try_start_0
                    var10 = var11.makeRequest;
                    var4 = {};
                    var12 = false;
                    var4['rejectWithError'] = var12;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=67);
case 15:
                    return var4;
case 6:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = var4;
                    var13 = null;
                    if(!(var13 != var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var10 = var11.isCanceled;
                    if(var10) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var10 = var5;
                    var12 = var10.status;
                    var10 = 200;
                    if(!(var10 !== var12)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var10 = var5;
                    var12 = var10.status;
                    var10 = 202;
                    if(!(var10 === var12)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var10 = var11.query;
                    var12 = var11.query;
                    var12 = var12.attempts;
                    var8 = var12;
                    var14 = var13 != var12;
                    var12 = 0;
                    var13 = 0;
                    if(!var14) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var13 = var8;
case 26:
                    var8 = 1;
                    var8 = var13 + var8;
                    var10['attempts'] = var8;
                    var8 = var11.query;
                    var10 = var8.attempts;
                    var8 = 5;
                    if(!(!(var10 > var8))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var8 = global;
                    var13 = var8.parseInt;
                    var10 = var5;
                    var10 = var10.headers;
                    var10 = var10.retry-after;
                    var10 = var13.bind(var2)(var10);
                    var9 = var10;
                    var8 = var8.isNaN;
                    var10 = var8.bind(var2)(var10);
                    var13 = 5000;
                    var8 = var13;
                    if(var10) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var10 = var9;
                    var8 = var13;
                    if(!(var12 !== var10)) { _fun0003_ip = 30; continue _fun0003 }
case 32:
                    var10 = var9;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 7;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.Millis;
                    var9 = var9.SECOND;
                    var8 = var10 * var9;
case 30:
                    var11['retryDelay'] = var8;
                    var10 = var11.retryLater;
                    var9 = var6;
                    var8 = var7;
                    var7 = var3;
                    var7 = var10.bind(var11)(var9, var8, var7);
                    var7 = var5;
                    var7 = var8.bind(var2)(var7);
                    _fun0003_ip = 24; continue _fun0003;
case 28: // try_end0
                    return var2;
case 22: // try_start_1
                    var5 = var6.bind(var2)(var5);
case 24: // try_end1
                    _fun0003_ip = 13; continue _fun0003;
case 20:
                    return var2;
case 18:
                    return var2;
case 16:
                    return var4;
case 33: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 8;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {constructor: {value: var7}});
                    var17 = 'SearchFetcher';
                    var18 = var6;
                    var5 = new var18[var7](var17, var16);
                    var6 = var5 instanceof Object ? var5 : var6;
                    var5 = var6.error;
                    var5 = var5.bind(var6)(var4);
                    var3 = var3.bind(var2)(var4);
case 13:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function fetch() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'cancel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var2 = true;
                var1['isCanceled'] = var2;
                var3 = var1.indexingPollId;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = var1.indexingPollId;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'retryLater';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var2 = var3.indexingPollId;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var1 = global;
                var4 = var1.clearTimeout;
                var2 = var3.indexingPollId;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
case 36:
                var1 = global;
                var5 = var1.setTimeout;
                var7 = var3.fetch;
                var6 = var7.bind;
                var10 = arg1;
                var9 = arg2;
                var8 = arg3;
                var12 = var7;
                var11 = var3;
                var4 = var12[var6](var11, var10, var9, var8, var7);
                var2 = var3.retryDelay;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var2);
                var3['indexingPollId'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function(arg1) {
        var4 = function SearchFetcherImpl() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot7;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot11;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'getEndpoint';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var4 = var2.searchType;
                var3 = _closure1_slot9;
                var3 = var3.FAVORITES;
                if(!(var3 !== var4)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var3 = _closure1_slot9;
                var3 = var3.GUILD;
                if(!(var3 !== var4)) { _fun0006_ip = 26; continue _fun0006 }
case 40:
                var3 = _closure1_slot9;
                var3 = var3.CHANNEL;
                if(!(var3 !== var4)) { _fun0006_ip = 23; continue _fun0006 }
case 41:
                var3 = global;
                var5 = var3.Error;
                var6 = var2.searchType;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '[SearchFetcher] Unhandled search type: ';
                var7 = var4.bind(var3)(var6);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
case 23:
                var4 = var2.searchId;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var4 = var2.searchId;
                var3 = '';
                if(!(var3 !== var4)) { _fun0006_ip = 42; continue _fun0006 }
case 44:
                var5 = _closure1_slot10;
                var4 = var5.SEARCH_CHANNEL;
                var3 = var2.searchId;
                var3 = var4.bind(var5)(var3);
                return var3;
case 42:
                var3 = undefined;
                return var3;
case 26:
                var4 = var2.searchId;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var4 = var2.searchId;
                var3 = '';
                if(!(var3 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 47:
                var4 = _closure1_slot10;
                var3 = var4.SEARCH_GUILD;
                var2 = var2.searchId;
                var2 = var3.bind(var4)(var2);
                return var2;
case 45:
                var2 = undefined;
                return var2;
case 38:
                var1 = _closure1_slot10;
                var1 = var1.SEARCH_FAVORITES;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'makeRequest';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var1 = arg1;
                var5 = var1.rejectWithError;
                var1 = var6.getEndpoint;
                var8 = var1.bind(var6)();
                var1 = null;
                var2 = var1 == var8;
                if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 9;
                var2 = var10[var2];
                var9 = undefined;
                var2 = var3.bind(var9)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {};
                var2['url'] = var8;
                var8 = _closure1_slot1;
                var7 = 10;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.stringify;
                var6 = var6.query;
                var6 = var7.bind(var8)(var6);
                var2['query'] = var6;
                var6 = true;
                var2['oldFormErrors'] = var6;
                var2['rejectWithError'] = var5;
                var1 = var3.bind(var4)(var2);
case 48:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var2 = function(arg1) {
        var4 = function SearchTabFetcherImpl(arg1, arg2, arg3, arg4) {
            var5 = this;
            var2 = _closure1_slot7;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot11;
            var1 = new Array(3);
            var6 = arg1;
            var1[0] = var6;
            var6 = arg2;
            var1[1] = var6;
            var6 = arg3;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = arg4;
            var1['payload'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'getEndpoint';
        var5['key'] = var1;
        var1 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var4 = var2.searchType;
                var3 = _closure1_slot9;
                var3 = var3.DMS;
                if(!(var3 !== var4)) { _fun0008_ip = 50; continue _fun0008 }
case 39:
                var3 = _closure1_slot9;
                var3 = var3.GUILD_CHANNEL;
                if(!(var3 !== var4)) { _fun0008_ip = 51; continue _fun0008 }
case 40:
                var3 = _closure1_slot9;
                var3 = var3.GUILD;
                if(!(var3 !== var4)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var3 = _closure1_slot9;
                var3 = var3.THREAD;
                if(!(var3 !== var4)) { _fun0008_ip = 51; continue _fun0008 }
case 53:
                var3 = _closure1_slot9;
                var3 = var3.CHANNEL;
                if(!(var3 !== var4)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var3 = global;
                var5 = var3.Error;
                var6 = var2.searchType;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '[SearchFetcher] Unhandled search type: ';
                var7 = var4.bind(var3)(var6);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
case 54:
                var4 = var2.searchId;
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var4 = var2.searchId;
                var3 = '';
                if(!(var3 !== var4)) { _fun0008_ip = 56; continue _fun0008 }
case 58:
                var5 = _closure1_slot10;
                var4 = var5.SEARCH_TABS_CHANNEL;
                var3 = var2.searchId;
                var3 = var4.bind(var5)(var3);
                return var3;
case 56:
                var3 = undefined;
                return var3;
case 51:
                var4 = var2.searchId;
                var3 = null;
                if(!(var3 != var4)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var4 = var2.searchId;
                var3 = '';
                if(!(var3 !== var4)) { _fun0008_ip = 59; continue _fun0008 }
case 61:
                var4 = _closure1_slot10;
                var3 = var4.SEARCH_TABS_GUILD;
                var2 = var2.searchId;
                var2 = var3.bind(var4)(var2);
                return var2;
case 59:
                var2 = undefined;
                return var2;
case 50:
                var1 = _closure1_slot10;
                var1 = var1.SEARCH_TABS_DMS;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'makeRequest';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = this;
                var1 = arg1;
                var5 = var1.rejectWithError;
                var1 = var6.getEndpoint;
                var7 = var1.bind(var6)();
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0009_ip = 62; continue _fun0009 }
case 49:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {};
                var2['url'] = var7;
                var6 = var6.payload;
                var2['body'] = var6;
                var6 = true;
                var2['oldFormErrors'] = var6;
                var2['rejectWithError'] = var5;
                var1 = var3.bind(var4)(var2);
case 62:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/search/SearchFetcher.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SearchFetcher'] = var5;
    var3['SearchFetcherImpl'] = var4;
    var3['SearchTabFetcherImpl'] = var2;
    return var1;
})();