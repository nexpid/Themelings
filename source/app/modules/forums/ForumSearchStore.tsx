// app/modules/forums/ForumSearchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isForumLikeChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3.isForumLikeChannel;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 6:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot6;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = {'query': null, 'loading': false, 'results': null};
case 8:
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
case 0:
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
                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 12; continue _fun0004;
case 10:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 12:
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
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = var2.query;
case 13:
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
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                var2 = var3.loading;
case 13:
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var1 = var2;
case 15:
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
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var1 = var2.results;
case 13:
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
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var3 = null;
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0008_ip = 13; continue _fun0008 }
case 14:
                var1 = var2.results;
case 13:
                var1 = var3 != var1;
                if(!var1) { _fun0008_ip = 17; continue _fun0008 }
case 16:
                var2 = var2.results;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
case 17:
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
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var4 = var1.parent_id;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 18; continue _fun0009 }
case 19:
            var3 = _closure1_slot6;
            var6 = var3[var4];
            if(!(var1 != var6)) { _fun0009_ip = 20; continue _fun0009 }
case 15:
            var3 = _closure1_slot6;
            var2 = {};
            var10 = var2;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var8 = var6.results;
            var7 = var1 == var8;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0009_ip = 21; continue _fun0009 }
case 4:
            var7 = var8.filter;
            var5 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var6 = var7.bind(var8)(var5);
case 21:
            var5 = 'results';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
case 20:
            var1 = false;
            return var1;
case 18:
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
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.query;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0010_ip = 22; continue _fun0010 }
case 13:
            var3 = false;
            return var3;
case 22:
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
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0011_ip = 7; continue _fun0011 }
case 14:
            var3 = false;
            return var3;
case 7:
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
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var6 = var1.threadIds;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0012_ip = 22; continue _fun0012 }
case 13:
            var3 = false;
            return var3;
case 22:
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
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0013_ip = 7; continue _fun0013 }
case 14:
            var3 = false;
            return var3;
case 7:
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
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var4 = _closure1_slot8;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0014_ip = 23; continue _fun0014 }
case 13:
            var2 = _closure1_slot6;
            var1 = delete var2[var3];
case 23:
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