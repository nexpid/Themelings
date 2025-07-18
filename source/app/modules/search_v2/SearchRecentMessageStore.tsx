// app/modules/search_v2/SearchRecentMessageStore.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function handleReset() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot7 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
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
    var8 = var2.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot7 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = new Array(0);
    var _closure1_slot9 = var2;
    var2 = new Array(0);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchRecentMessageStore() {
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
                var1 = _closure1_slot11;
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
        var1 = 'getRecentMessageAuthorIds';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot7;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0003_ip = 30; continue _fun0003 }
 26:
                var1 = _closure1_slot9;
 30:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRecentMessageChannelIds';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot8;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 30; continue _fun0004 }
 26:
                var1 = _closure1_slot10;
 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchRecentMessageStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSearchMessagesSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.data;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var4 = null;
            if(!(var4 != var5)) { _fun0005_ip = 289; continue _fun0005 }
 50:
            var1 = false;
            _closure2_slot0 = var1;
            _closure2_slot1 = var1;
            var6 = _closure1_slot7;
            var3 = var6.get;
            var3 = var3.bind(var6)(var5);
            if(!(var4 == var3)) { _fun0005_ip = 85; continue _fun0005 }
 81:
            var3 = new Array(0);
 85:
            var7 = new Array(0);
            var13 = var7;
            var12 = var3;
            var11 = 0;
            var3 = arraySpread(var13, var12, var11);
            _closure2_slot2 = var7;
            var3 = global;
            var6 = var3.Set;
            var10 = var6.prototype;
            var10 = Object.create(var10, {constructor: {value: var6}});
            var14 = var10;
            var13 = var7;
            var6 = new var14[var6](var13, var12);
            var6 = var6 instanceof Object ? var6 : var10;
            _closure2_slot3 = var6;
            var10 = _closure1_slot8;
            var6 = var10.get;
            var6 = var6.bind(var10)(var5);
            if(!(var4 == var6)) { _fun0005_ip = 162; continue _fun0005 }
 158:
            var6 = new Array(0);
 162:
            var4 = new Array(0);
            var13 = var4;
            var12 = var6;
            var11 = 0;
            var6 = arraySpread(var13, var12, var11);
            _closure2_slot4 = var4;
            var3 = var3.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var14 = var6;
            var13 = var4;
            var3 = new var14[var3](var13, var12);
            var3 = var3 instanceof Object ? var3 : var6;
            _closure2_slot5 = var3;
            var6 = var8.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.messages;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var5 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var4 = undefined;
                        if(var3) { _fun0006_ip = 27; continue _fun0006 }
 24:
                        var4 = var5;
 27:
                        if(var3) { _fun0006_ip = 33; continue _fun0006 }
 30:
                        var2.return();
 33:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 5;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.createMessageRecord;
                        var2 = var2.bind(var3)(var4);
                        var6 = _closure2_slot3;
                        var5 = var6.has;
                        var4 = var2.author;
                        var4 = var4.id;
                        var4 = var5.bind(var6)(var4);
                        var4 = !var4;
                        if(!var4) { _fun0006_ip = 117; continue _fun0006 }
 101:
                        var5 = _closure2_slot3;
                        var6 = var5.size;
                        var5 = 15;
                        var4 = var6 < var5;
 117:
                        if(!var4) { _fun0006_ip = 176; continue _fun0006 }
 120:
                        var6 = _closure2_slot3;
                        var5 = var6.add;
                        var4 = var2.author;
                        var4 = var4.id;
                        var4 = var5.bind(var6)(var4);
                        var6 = _closure2_slot2;
                        var5 = var6.push;
                        var4 = var2.author;
                        var4 = var4.id;
                        var4 = var5.bind(var6)(var4);
                        var4 = true;
                        _closure2_slot0 = var4;
 176:
                        var6 = _closure2_slot5;
                        var5 = var6.has;
                        var4 = var2.channel_id;
                        var4 = var5.bind(var6)(var4);
                        var4 = !var4;
                        if(!var4) { _fun0006_ip = 217; continue _fun0006 }
 201:
                        var5 = _closure2_slot5;
                        var6 = var5.size;
                        var5 = 15;
                        var4 = var6 < var5;
 217:
                        if(!var4) { _fun0006_ip = 264; continue _fun0006 }
 220:
                        var6 = _closure2_slot5;
                        var5 = var6.add;
                        var4 = var2.channel_id;
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure2_slot4;
                        var4 = var5.push;
                        var2 = var2.channel_id;
                        var2 = var4.bind(var5)(var2);
                        var2 = true;
                        _closure2_slot1 = var2;
 264:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var6.bind(var8)(var3);
            var3 = _closure2_slot0;
            if(!var3) { _fun0005_ip = 254; continue _fun0005 }
 239:
            var6 = _closure1_slot7;
            var3 = var6.set;
            var3 = var3.bind(var6)(var5, var7);
 254:
            var3 = _closure2_slot1;
            if(!var3) { _fun0005_ip = 276; continue _fun0005 }
 261:
            var3 = _closure1_slot8;
            var1 = var3.set;
            var1 = var1.bind(var3)(var5, var4);
 276:
            var1 = _closure2_slot0;
            if(var1) { _fun0005_ip = 287; continue _fun0005 }
 283:
            var1 = _closure2_slot1;
 287:
            return var1;
 289:
            var1 = false;
            return var1;
        }
    };
    var2['SEARCH_MESSAGES_SUCCESS'] = var9;
    var2['SEARCH_RECENT_MESSAGES_CLEAR'] = var4;
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/SearchRecentMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();