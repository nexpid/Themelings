// app/modules/friend_suggestions/FriendSuggestionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function transformSuggestion(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = var3.contact_names;
            var7 = null;
            if(!(var7 != var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.contact_names;
            var1 = var1.length;
            var6 = 2;
            if(!(!(var1 >= var6))) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var2 = new Array(0);
            _fun0002_ip = 9; continue _fun0002;
case 8:
            var5 = var3.contact_names;
            var4 = var5.slice;
            var1 = 0;
            var2 = var4.bind(var5)(var1, var6);
case 9:
            var1 = {};
            var4 = var3.suggested_user;
            var4 = var4.id;
            var1['key'] = var4;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 7;
            var6 = var6[var5];
            var5 = undefined;
            var9 = var8.bind(var5)(var6);
            var8 = var9.first;
            var6 = var3.reasons;
            var6 = var8.bind(var9)(var6);
            var7 = var7 == var6;
            if(var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var6.name;
case 10:
            var1['name'] = var5;
            var6 = _closure1_slot7;
            var11 = var3.suggested_user;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var12 = var5;
            var4 = new var12[var6](var11, var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var1['user'] = var4;
            var3 = var3.mutual_friends_count;
            var1['mutualFriendsCount'] = var3;
            var1['contactNames'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var2 = function transformFriendSuggestions(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.chain;
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.keyBy;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.key;
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot15 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
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
    var8 = {};
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var4;
    var4 = false;
    var _closure1_slot11 = var4;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function FriendSuggestionStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 14; continue _fun0003;
case 12:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 14:
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
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSuggestionCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSuggestions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = _closure1_slot9;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                    var1 = var5;
                    var3 = var4;
case 15:
                    if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2.return();
case 18:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSuggestion';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'FriendSuggestionStore';
    var8['displayName'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleConnectionOpen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = {};
            _closure1_slot9 = var2;
            var2 = arg1;
            var3 = var2.friendSuggestionCount;
            _closure1_slot10 = var3;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            _fun0005_ip = 22; continue _fun0005;
case 20:
            var2 = true;
            _closure1_slot12 = var2;
            var4 = _closure1_slot11;
            var3 = !var4;
            if(var4) { _fun0005_ip = 23; continue _fun0005 }
case 5:
            var3 = _closure1_slot12;
case 23:
            if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 24:
            _closure1_slot11 = var2;
            var2 = false;
            _closure1_slot12 = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.fetch;
            var1 = var1.bind(var2)();
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var9;
    var9 = function handleFriendSuggestionCreate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot14;
            var1 = arg1;
            var2 = var1.suggestion;
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = _closure1_slot9;
            var2 = var5.key;
            var4 = var4[var2];
            var2 = null;
            if(!(var2 == var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = _closure1_slot10;
            var2 = var2 + 1;
            _closure1_slot10 = var2;
            var2 = {};
            var6 = _closure1_slot9;
            var7 = var2;
            var4 = copyDataProperties(var7, var6);
            var4 = var5.key;
            var2[var4] = var5;
            _closure1_slot9 = var2;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var4['FRIEND_SUGGESTION_CREATE'] = var9;
    var9 = function handleFriendSuggestionDelete(arg1) {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.max;
        var2 = _closure1_slot10;
        var3 = var2 - 1;
        _closure1_slot10 = var3;
        var2 = 0;
        var2 = var4.bind(var5)(var2, var3);
        _closure1_slot10 = var2;
        var2 = _closure1_slot9;
        var1 = arg1;
        var1 = var1.suggestedUserId;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var4['FRIEND_SUGGESTION_DELETE'] = var9;
    var9 = function handleLoadFriendSuggestionsSuccess(arg1) {
        var1 = false;
        _closure1_slot11 = var1;
        var4 = _closure1_slot15;
        var1 = arg1;
        var2 = var1.suggestions;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        _closure1_slot9 = var2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 7;
        var2 = var5[var2];
        var5 = var4.bind(var1)(var2);
        var4 = var5.keys;
        var2 = _closure1_slot9;
        var2 = var4.bind(var5)(var2);
        var2 = var2.length;
        _closure1_slot10 = var2;
        return var1;
    };
    var4['LOAD_FRIEND_SUGGESTIONS_SUCCESS'] = var9;
    var5 = function handleLoadFriendSuggestionsFailure() {
        var1 = false;
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOAD_FRIEND_SUGGESTIONS_FAILURE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var8](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/friend_suggestions/FriendSuggestionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['transformFriendSuggestions'] = var2;
    return var1;
})();