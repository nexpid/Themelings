// app/modules/search_v2/SearchMessageStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getSearchStateOrDefault(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot10;
            var3 = var4.get;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 50; continue _fun0002 }
 26:
            var2 = _closure1_slot9;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var2 = new var6[var2](var5);
            var1 = var2 instanceof Object ? var2 : var3;
 50:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getOrCreateSearchState(arg1) {
        var4 = arg1;
        var3 = _closure1_slot15;
        var1 = undefined;
        var1 = var3.bind(var1)(var4);
        var3 = _closure1_slot10;
        var2 = var3.set;
        var2 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function updateMessage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot12;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0003_ip = 55; continue _fun0003 }
 26:
            var3 = arg2;
            var2 = undefined;
            var3 = var3.bind(var2)(var5);
            var2 = _closure1_slot12;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = true;
            return var1;
 55:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function withSearchState(arg1, arg2) {
        var2 = _closure1_slot15;
        var3 = undefined;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = arg2;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var9 = function handleReaction(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var2 = var8.type;
            var _closure2_slot1 = var2;
            var4 = var8.messageId;
            var6 = var8.userId;
            var2 = var8.emoji;
            var _closure2_slot2 = var2;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 9;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var5 = var7.shouldApplyReaction;
            var5 = var5.bind(var7)(var8);
            if(var5) { _fun0004_ip = 81; continue _fun0004 }
 77:
            var5 = false;
            return var5;
 81:
            var7 = _closure1_slot7;
            var5 = var7.getId;
            var5 = var5.bind(var7)();
            var5 = var5 === var6;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot17;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var7 = arg1;
                    var1 = _closure2_slot0;
                    var6 = var1.reactionType;
                    var3 = _closure2_slot1;
                    var1 = 'MESSAGE_REACTION_ADD';
                    if(!(var1 !== var3)) { _fun0005_ip = 51; continue _fun0005 }
 28:
                    var4 = var7.removeReaction;
                    var3 = _closure2_slot2;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var7)(var3, var1, var6);
                    _fun0005_ip = 84; continue _fun0005;
 51:
                    var5 = var7.addReaction;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var9 = var2.colors;
                    var12 = var7;
                    var8 = var6;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
 84:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = function() {
        var4 = _closure1_slot6;
        var3 = function SearchState() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var4 = false;
            var3['isIndexing'] = var4;
            var3['isHistoricalIndexing'] = var4;
            var3['isFetching'] = var4;
            var2 = null;
            var3['analyticsId'] = var2;
            var3['error'] = var2;
            var3['messages'] = var2;
            var5 = 0;
            var3['documentsIndexed'] = var5;
            var3['totalResults'] = var2;
            var3['hasNextPage'] = var4;
            var5 = global;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['messageIds'] = var5;
            var3['isInitialFetchComplete'] = var4;
            var3['cursor'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handleSearchStart';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = true;
            var2['isFetching'] = var1;
            var1 = false;
            var2['isIndexing'] = var1;
            var1 = null;
            var2['analyticsId'] = var1;
            var2['error'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleSearchIndexing';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = true;
            var2['isInitialFetchComplete'] = var1;
            var2['isIndexing'] = var1;
            var2['isHistoricalIndexing'] = var1;
            var1 = false;
            var2['isFetching'] = var1;
            var1 = null;
            var2['error'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleSearchFailure';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var1 = false;
            var3['isFetching'] = var1;
            var3['isIndexing'] = var1;
            var2 = true;
            var3['isInitialFetchComplete'] = var2;
            var3['isHistoricalIndexing'] = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var5 = var2.APIError;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var6 = arg1;
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['error'] = var2;
            var2 = null;
            var3['analyticsId'] = var2;
            var2 = 0;
            var3['documentsIndexed'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handleSearchSuccess';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var8 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = var4.analyticsId;
                var1 = var4.cursor;
                var2 = var4.totalResults;
                var5 = var4.doingHistoricalIndex;
                var4 = var4.documentsIndexed;
                var9 = undefined;
                var _closure3_slot1 = var9;
                var _closure3_slot2 = var9;
                var3['analyticsId'] = var7;
                var7 = false;
                var3['isFetching'] = var7;
                var3['isIndexing'] = var7;
                var7 = true;
                var3['isInitialFetchComplete'] = var7;
                var3['isHistoricalIndexing'] = var5;
                var5 = null;
                var3['error'] = var5;
                var3['documentsIndexed'] = var4;
                var3['cursor'] = var1;
                var7 = var3.messages;
                if(!(var5 == var7)) { _fun0006_ip = 123; continue _fun0006 }
 119:
                var7 = new Array(0);
 123:
                var4 = new Array(0);
                var11 = 0;
                var13 = var4;
                var12 = var7;
                var1 = arraySpread(var13, var12, var11);
                _closure3_slot1 = var4;
                var1 = new Array(0);
                _closure3_slot2 = var1;
                var7 = var8.forEach;
                var6 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var5 = var2.messageIds;
                        var4 = var5.has;
                        var2 = var3.id;
                        var2 = var4.bind(var5)(var2);
                        if(var2) { _fun0007_ip = 52; continue _fun0007 }
 34:
                        var5 = _closure1_slot8;
                        var4 = var5.isBlockedOrIgnoredForMessage;
                        var2 = var4.bind(var5)(var3);
 52:
                        if(var2) { _fun0007_ip = 108; continue _fun0007 }
 55:
                        var2 = _closure3_slot0;
                        var5 = var2.messageIds;
                        var4 = var5.add;
                        var2 = var3.id;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure3_slot1;
                        var2 = var4.push;
                        var2 = var2.bind(var4)(var3);
                        var2 = _closure3_slot2;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var3['messages'] = var4;
                var4 = var3.cursor;
                var4 = var5 != var4;
                var3['hasNextPage'] = var4;
                var3['totalResults'] = var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = var8.bind(var1)();
    var _closure1_slot9 = var8;
    var8 = var2.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot10 = var8;
    var8 = null;
    var _closure1_slot11 = var8;
    var8 = var2.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot12 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchMessageStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTotalCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.totalResults;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsInitialFetchComplete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isInitialFetchComplete;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getIsIndexing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isIndexing;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getIsHistoricalIndexing';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isHistoricalIndexing;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getDocumentsIndexed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.documentsIndexed;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getIsFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isFetching;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getHasNextPage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.hasNextPage;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.error;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.messages;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getCursor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.cursor;
                return var1;
            };
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getLastSearchAnalyticsId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasSearchState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchMessageStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleSearchMessagesStart(arg1) {
        var1 = arg1;
        var3 = var1.ids;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot16;
            var1 = undefined;
            var2 = arg1;
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleSearchStart;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_MESSAGES_START'] = var10;
    var10 = function handleSearchMessagesSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = var2.data;
            var1 = 0;
            var3 = var3[var1];
            var1 = null;
            var5 = var1 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0009_ip = 33; continue _fun0009 }
 27:
            var4 = var3.analyticsId;
 33:
            _closure1_slot11 = var4;
            var4 = var2.data;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var6 = arg1;
                var4 = _closure1_slot16;
                var3 = var6.id;
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var7 = var6.messages;
                var4 = var7.map;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var2 = arg1;
                        var1 = var2[Symbol.iterator];
                        var2 = var1().next;
                        var5 = var2().value;
                        var2 = var1;
                        var4 = undefined;
                        var2 = var2 === var4;
                        var3 = undefined;
                        if(var2) { _fun0010_ip = 27; continue _fun0010 }
 24:
                        var3 = var5;
 27:
                        if(var2) { _fun0010_ip = 33; continue _fun0010 }
 30:
                        var1.return();
 33:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 8;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.createMessageRecord;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var4 = var4.bind(var7)(var3);
                var3 = var5.handleSearchSuccess;
                var4 = var3.bind(var5)(var6, var4);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure1_slot12;
                        var4 = var5.set;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3, var1);
                        var5 = _closure1_slot13;
                        var4 = var5.get;
                        var3 = var1.id;
                        var3 = var4.bind(var5)(var3);
                        var4 = null;
                        var4 = var4 != var3;
                        var5 = 0;
                        if(!var4) { _fun0011_ip = 59; continue _fun0011 }
 56:
                        var5 = var3;
 59:
                        var4 = _closure1_slot13;
                        var3 = var4.set;
                        var2 = var1.id;
                        var1 = 1;
                        var1 = var5 + var1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['SEARCH_MESSAGES_SUCCESS'] = var10;
    var10 = function handleSearchMessagesIndexing(arg1) {
        var1 = arg1;
        var3 = var1.ids;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot16;
            var1 = undefined;
            var2 = arg1;
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleSearchIndexing;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_MESSAGES_INDEXING'] = var10;
    var10 = function handleSearchMessagesFailure(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = var2.ids;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot16;
            var1 = undefined;
            var2 = arg1;
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleSearchFailure;
            var2 = _closure2_slot0;
            var2 = var2.error;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_MESSAGES_FAILURE'] = var10;
    var10 = function handleSearchMessagesClear(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot10;
            var4 = var5.get;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0012_ip = 77; continue _fun0012 }
 31:
            var5 = var3.messageIds;
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot13;
                    var2 = var4.get;
                    var2 = var2.bind(var4)(var3);
                    var4 = null;
                    var4 = var4 != var2;
                    var6 = 0;
                    if(!var4) { _fun0013_ip = 34; continue _fun0013 }
 31:
                    var6 = var2;
 34:
                    var2 = 1;
                    if(!(!(var6 <= var2))) { _fun0013_ip = 62; continue _fun0013 }
 41:
                    var5 = _closure1_slot13;
                    var4 = var5.set;
                    var2 = var6 - var2;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0013_ip = 90; continue _fun0013;
 62:
                    var4 = _closure1_slot12;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure1_slot13;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
 77:
            var1 = false;
            return var1;
        }
    };
    var2['SEARCH_MESSAGES_CLEAR'] = var10;
    var10 = function handleSearchMessagesClearAll() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot10 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot12 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_MESSAGES_CLEAR_ALL'] = var10;
    var10 = function handleMessageUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var1 = var3.message;
            var5 = var1.id;
            var1 = null;
            if(!(var1 != var5)) { _fun0014_ip = 100; continue _fun0014 }
 19:
            var6 = _closure1_slot12;
            var4 = var6.get;
            var7 = var4.bind(var6)(var5);
            if(!(var1 != var7)) { _fun0014_ip = 96; continue _fun0014 }
 40:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.updateMessageRecord;
            var3 = var3.message;
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot12;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
 96:
            var1 = false;
            return var1;
 100:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var10;
    var2['MESSAGE_REACTION_ADD'] = var9;
    var10 = function handleReactionBatch(arg1) {
        var2 = arg1;
        var4 = var2.messageId;
        var2 = var2.reactions;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot7;
        var3 = var5.getId;
        var3 = var3.bind(var5)();
        var _closure2_slot1 = var3;
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = function(arg1) {
            var4 = arg1;
            var3 = var4.addReactionBatch;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var10;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        var1 = arg1;
        var4 = var1.messageId;
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = function(arg1) {
            var4 = arg1;
            var3 = var4.set;
            var2 = 'reactions';
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        var2 = arg1;
        var4 = var2.messageId;
        var2 = var2.emoji;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot17;
        var2 = undefined;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.removeReactionsForEmoji;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var4 = function handleConnectionOpen() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot10 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot12 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/SearchMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();