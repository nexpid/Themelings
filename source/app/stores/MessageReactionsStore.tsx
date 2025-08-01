// app/stores/MessageReactionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var8 = function handleReaction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.type;
            var8 = var1.messageId;
            var4 = var1.userId;
            var7 = var1.emoji;
            var6 = var1.reactionType;
            var3 = _closure1_slot12;
            var1 = var3.ensure;
            var1 = var1.bind(var3)(var8, var7, var6);
            var3 = 'MESSAGE_REACTION_ADD';
            if(!(var3 !== var5)) { _fun0002_ip = 76; continue _fun0002 }
 58:
            var5 = var1.users;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            _fun0002_ip = 114; continue _fun0002;
 76:
            var3 = _closure1_slot10;
            var2 = var3.getUser;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 114; continue _fun0002 }
 97:
            var2 = var1.users;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
 114:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = function() {
        var5 = function Reaction() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = false;
            var3['fetched'] = var2;
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['users'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var1 = {};
        var3 = 'ensure';
        var1['key'] = var3;
        var2 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg2;
                var8 = var1.name;
                var1 = var1.id;
                var4 = null;
                var2 = var4 != var1;
                var7 = '';
                var6 = var7;
                if(!var2) { _fun0003_ip = 32; continue _fun0003 }
 29:
                var6 = var1;
 32:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var15 = arg1;
                var2 = ':';
                var9 = arg3;
                var16 = var7;
                var14 = var2;
                var13 = var8;
                var12 = var2;
                var11 = var6;
                var10 = var2;
                var3 = var16[var5](var15, var14, var13, var12, var11, var10, var9, var8);
                var2 = _closure1_slot11;
                var1 = var2[var3];
                if(!(var4 == var1)) { _fun0003_ip = 119; continue _fun0003 }
 92:
                var4 = _closure2_slot0;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var16 = var5;
                var4 = new var16[var4](var15);
                var1 = var4 instanceof Object ? var4 : var5;
 119:
                var2[var3] = var1;
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function MessageReactionsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot13;
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
        var6 = _closure1_slot4;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
        var5 = {};
        var6 = 'getReactions';
        var5['key'] = var6;
        var1 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var5 = arg5;
                var3 = _closure1_slot12;
                var1 = var3.ensure;
                var1 = var1.bind(var3)(var7, var6, var5);
                var3 = var1.fetched;
                if(var3) { _fun0005_ip = 174; continue _fun0005 }
 44:
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var10 = var3.bind(var4)(var8);
                var3 = null;
                var4 = var3 != var10;
                var9 = null;
                if(!var4) { _fun0005_ip = 79; continue _fun0005 }
 69:
                var4 = var10.getGuildId;
                var9 = var4.bind(var10)();
 79:
                if(!(var3 != var9)) { _fun0005_ip = 101; continue _fun0005 }
 83:
                var4 = _closure1_slot7;
                var3 = var4.isLurking;
                var3 = var3.bind(var4)(var9);
                if(var3) { _fun0005_ip = 170; continue _fun0005 }
 101:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getReactors;
                var2 = {};
                var2['channelId'] = var8;
                var2['messageId'] = var7;
                var2['emoji'] = var6;
                var6 = arg4;
                var2['limit'] = var6;
                var2['type'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = true;
                var1['fetched'] = var2;
                _fun0005_ip = 174; continue _fun0005;
 170:
                var2 = undefined;
                return var2;
 174:
                var1 = var1.users;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'MessageReactionsStore';
    var7['displayName'] = var2;
    var2 = 11;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var2['MESSAGE_REACTION_ADD'] = var8;
    var2['MESSAGE_REACTION_REMOVE'] = var8;
    var4 = function handleAddUserReactions(arg1) {
        var2 = arg1;
        var7 = var2.messageId;
        var3 = var2.users;
        var6 = var2.emoji;
        var5 = var2.reactionType;
        var4 = _closure1_slot12;
        var2 = var4.ensure;
        var2 = var2.bind(var4)(var7, var6, var5);
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var6 = arg1;
            var1 = _closure2_slot0;
            var4 = var1.users;
            var3 = var4.set;
            var2 = var6.id;
            var1 = _closure1_slot8;
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var9 = var5;
            var8 = var6;
            var1 = new var9[var1](var8, var7);
            var1 = var1 instanceof Object ? var1 : var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['MESSAGE_REACTION_ADD_USERS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MessageReactionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();