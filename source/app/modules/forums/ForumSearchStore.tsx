// app/modules/forums/ForumSearchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isForumLikeChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0002_ip = 42; continue _fun0002 }
 29:
            var2 = var3.isForumLikeChannel;
            var2 = var2.bind(var3)();
            var1 = !var2;
 42:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot6;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0003_ip = 34; continue _fun0003 }
 20:
            var1 = {'query': null, 'loading': false, 'results': null};
 34:
            var2 = _closure1_slot6;
            var2[var3] = var1;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ForumSearchStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getSearchQuery';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 30; continue _fun0005 }
 25:
                var1 = var2.query;
 30:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSearchLoading';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0006_ip = 31; continue _fun0006 }
 25:
                var2 = var3.loading;
 31:
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 41; continue _fun0006 }
 38:
                var1 = var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSearchResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 31; continue _fun0007 }
 25:
                var1 = var2.results;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getHasSearchResults';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var3 = null;
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0008_ip = 31; continue _fun0008 }
 25:
                var1 = var2.results;
 31:
                var1 = var3 != var1;
                if(!var1) { _fun0008_ip = 55; continue _fun0008 }
 38:
                var2 = var2.results;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 55:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ForumSearchStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function handleThreadDelete(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = var1.parent_id;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 108; continue _fun0009 }
 26:
            var3 = _closure1_slot6;
            var6 = var3[var4];
            if(!(var1 != var6)) { _fun0009_ip = 104; continue _fun0009 }
 41:
            var3 = _closure1_slot6;
            var2 = {};
            var10 = var2;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var8 = var6.results;
            var7 = var1 == var8;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0009_ip = 89; continue _fun0009 }
 74:
            var7 = var8.filter;
            var5 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var6 = var7.bind(var8)(var5);
 89:
            var5 = 'results';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
 104:
            var1 = false;
            return var1;
 108:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_DELETE'] = var8;
    var8 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var2 = _closure1_slot6;
        var1 = var1.id;
        var1 = delete var2[var1];
        return var1;
    };
    var2['CHANNEL_DELETE'] = var8;
    var8 = function handleForumSearchQueryUpdated(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.query;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0010_ip = 34; continue _fun0010 }
 30:
            var3 = false;
            return var3;
 34:
            var3 = _closure1_slot9;
            var7 = var3.bind(var1)(var4);
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var5 = 'query';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var2['FORUM_SEARCH_QUERY_UPDATED'] = var8;
    var8 = function handleForumSearchStart(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0011_ip = 29; continue _fun0011 }
 25:
            var3 = false;
            return var3;
 29:
            var3 = _closure1_slot9;
            var7 = var3.bind(var1)(var4);
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var6 = true;
            var5 = 'loading';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var2['FORUM_SEARCH_START'] = var8;
    var8 = function handleForumSearchSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.threadIds;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0012_ip = 35; continue _fun0012 }
 31:
            var3 = false;
            return var3;
 35:
            var3 = _closure1_slot9;
            var8 = var3.bind(var1)(var4);
            var3 = _closure1_slot6;
            var2 = {};
            var9 = var2;
            var5 = copyDataProperties(var9, var8);
            var7 = false;
            var5 = 'loading';
            var2[var5] = var7;
            var5 = 'results';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var2['FORUM_SEARCH_SUCCESS'] = var8;
    var8 = function handleForumSearchFailure(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0013_ip = 29; continue _fun0013 }
 25:
            var3 = false;
            return var3;
 29:
            var3 = _closure1_slot9;
            var7 = var3.bind(var1)(var4);
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var6 = false;
            var5 = 'loading';
            var2[var5] = var6;
            var6 = new Array(0);
            var5 = 'results';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var2['FORUM_SEARCH_FAILURE'] = var8;
    var4 = function handleForumSearchClear(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot8;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0014_ip = 39; continue _fun0014 }
 31:
            var2 = _closure1_slot6;
            var1 = delete var2[var3];
 39:
            return var1;
        }
    };
    var2['FORUM_SEARCH_CLEAR'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumSearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();