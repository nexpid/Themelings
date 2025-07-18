// app/lib/ChannelMessages.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function mergeMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var3 = var2.get;
            var1 = var4.id;
            var1 = var3.bind(var2)(var1);
            var8 = null;
            if(!(var8 != var1)) { _fun0001_ip = 189; continue _fun0001 }
 30:
            var3 = var1.editedTimestamp;
            var3 = var8 != var3;
            var5 = 0;
            if(!var3) { _fun0001_ip = 54; continue _fun0001 }
 45:
            var3 = var1.editedTimestamp;
            var5 = var3 - 0;
 54:
            var3 = var4.edited_timestamp;
            var7 = var8 != var3;
            var3 = 0;
            if(!var7) { _fun0001_ip = 106; continue _fun0001 }
 69:
            var7 = global;
            var10 = var7.Date;
            var11 = var4.edited_timestamp;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var12 = var9;
            var7 = new var12[var10](var11, var10);
            var7 = var7 instanceof Object ? var7 : var9;
            var3 = var7 - 0;
 106:
            var3 = var3 > var5;
            if(var3) { _fun0001_ip = 160; continue _fun0001 }
 113:
            var5 = var1.embeds;
            var5 = var5.length;
            var9 = var4.embeds;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 144; continue _fun0001 }
 139:
            var7 = var9.length;
 144:
            var8 = var8 != var7;
            var6 = 0;
            if(!var8) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var6 = var7;
 156:
            var3 = var5 < var6;
 160:
            if(var3) { _fun0001_ip = 177; continue _fun0001 }
 163:
            var6 = var1.content;
            var5 = var4.content;
            var3 = var6 !== var5;
 177:
            if(var3) { _fun0001_ip = 189; continue _fun0001 }
 180:
            var2 = var2.cached;
            if(!var2) { _fun0001_ip = 225; continue _fun0001 }
 189:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.createMessageRecord;
            var1 = var2.bind(var3)(var4);
 225:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot6 = var8;
    var8 = var4.MAX_LOADED_MESSAGES;
    var _closure1_slot7 = var8;
    var8 = var4.MAX_MESSAGE_CACHE_SIZE;
    var _closure1_slot8 = var8;
    var8 = var4.TRUNCATED_MESSAGE_VIEW_SIZE;
    var _closure1_slot9 = var8;
    var4 = var4.MessageStates;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var7[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'ChannelMessages';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var4;
    var4 = function() {
        var4 = function MessageCache(arg1) {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['_messages'] = var2;
            var2 = {};
            var3['_map'] = var2;
            var2 = false;
            var3['_wasAtEdge'] = var2;
            var2 = arg1;
            var3['_isCacheBefore'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var1 = {};
        var2 = 'clone';
        var1['key'] = var2;
        var2 = function clone() {
            var2 = this;
            var4 = _closure2_slot0;
            var8 = var2._isCacheBefore;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var1 = new var9[var4](var8, var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = {};
            var7 = var2._map;
            var8 = var3;
            var4 = copyDataProperties(var8, var7);
            var1['_map'] = var3;
            var7 = var2._messages;
            var3 = new Array(0);
            var6 = 0;
            var8 = var3;
            var4 = arraySpread(var8, var7, var6);
            var1['_messages'] = var3;
            var2 = var2._wasAtEdge;
            var1['_wasAtEdge'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(14);
        var2[0] = var1;
        var1 = {};
        var6 = 'wasAtEdge';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._wasAtEdge;
            return var1;
        };
        var1['get'] = var6;
        var6 = function set(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_wasAtEdge'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['set'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'length';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._messages;
            var1 = var1.length;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var2['_map'] = var1;
            var1 = new Array(0);
            var2['_messages'] = var1;
            var1 = false;
            var2['_wasAtEdge'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'remove';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 6;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.filter;
            var5 = var2._messages;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var6.bind(var7)(var5, var4);
            var2['_messages'] = var4;
            var2 = var2._map;
            var2 = delete var2[var3];
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'removeMany';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var7 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var7;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.each;
            var4 = function(arg1) {
                var1 = _closure3_slot0;
                var2 = var1._map;
                var1 = arg1;
                var1 = delete var2[var1];
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var7, var4);
            var5 = var3._messages;
            var4 = var5.filter;
            var2 = function(arg1) {
                var3 = _closure3_slot1;
                var2 = var3.indexOf;
                var1 = arg1;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                var1 = var1 === var2;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['_messages'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'replace';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var1 = this;
                var2 = var1._map;
                var5 = var2[var4];
                var2 = null;
                if(!(var2 != var5)) { _fun0002_ip = 77; continue _fun0002 }
 25:
                var2 = var1._map;
                var2 = delete var2[var4];
                var4 = var1._map;
                var2 = var3.id;
                var4[var2] = var3;
                var2 = var1._messages;
                var4 = var1._messages;
                var1 = var4.indexOf;
                var1 = var1.bind(var4)(var5);
                var2[var1] = var3;
 77:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var3 = var1._map;
                var2 = arg1;
                var5 = var3[var2];
                var2 = null;
                if(!(var2 != var5)) { _fun0003_ip = 74; continue _fun0003 }
 22:
                var3 = arg2;
                var2 = undefined;
                var3 = var3.bind(var2)(var5);
                var4 = var1._map;
                var2 = var5.id;
                var4[var2] = var3;
                var2 = var1._messages;
                var4 = var1._messages;
                var1 = var4.indexOf;
                var1 = var1.bind(var4)(var5);
                var2[var1] = var3;
 74:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._map;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._map;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'forEach';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1._messages;
            var3 = var4.forEach;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'cache';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var3 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = undefined;
                if(!(var3 === var4)) { _fun0004_ip = 23; continue _fun0004 }
 21:
                var3 = false;
 23:
                var6 = var2.length;
                var7 = 0;
                if(!(var7 === var6)) { _fun0004_ip = 40; continue _fun0004 }
 34:
                var2['_wasAtEdge'] = var3;
 40:
                var3 = var2._messages;
                var6 = var3.length;
                var3 = var5.length;
                var8 = var6 + var3;
                var6 = _closure1_slot8;
                if(!(var8 > var6)) { _fun0004_ip = 187; continue _fun0004 }
 71:
                var6 = false;
                var2['_wasAtEdge'] = var6;
                var8 = var5.length;
                var6 = _closure1_slot8;
                if(!(!(var8 > var6))) { _fun0004_ip = 295; continue _fun0004 }
 95:
                var8 = _closure1_slot8;
                var6 = var5.length;
                var12 = var8 - var6;
                var6 = var2._isCacheBefore;
                var9 = var2._messages;
                var8 = var9.slice;
                if(var6) { _fun0004_ip = 142; continue _fun0004 }
 128:
                var6 = var8.bind(var9)(var7, var12);
                var2['_messages'] = var6;
                _fun0004_ip = 187; continue _fun0004;
 142:
                var6 = global;
                var11 = var6.Math;
                var10 = var11.max;
                var6 = var2._messages;
                var6 = var6.length;
                var6 = var6 - var12;
                var6 = var10.bind(var11)(var6, var7);
                var6 = var8.bind(var9)(var6);
                var2['_messages'] = var6;
 187:
                var6 = var2._isCacheBefore;
                var8 = new Array(0);
                if(var6) { _fun0004_ip = 230; continue _fun0004 }
 200:
                var15 = var8;
                var14 = var5;
                var13 = 0;
                var13 = arraySpread(var15, var14, var13);
                var14 = var2._messages;
                var15 = var8;
                var6 = arraySpread(var15, var14, var13);
                var6 = var8;
                _fun0004_ip = 258; continue _fun0004;
 230:
                var14 = var2._messages;
                var15 = var8;
                var13 = 0;
                var13 = arraySpread(var15, var14, var13);
                var15 = var8;
                var14 = var5;
                var9 = arraySpread(var15, var14, var13);
                var6 = var8;
 258:
                var2['_messages'] = var6;
                var6 = {};
                var2['_map'] = var6;
                var9 = var2._messages;
                var8 = var9.forEach;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = _closure3_slot0;
                    var3 = var2._map;
                    var2 = var1.id;
                    var3[var2] = var1;
                    return var1;
                };
                var6 = var8.bind(var9)(var6);
                return var4;
 295:
                var6 = var2._isCacheBefore;
                var4 = var5.slice;
                if(var6) { _fun0004_ip = 327; continue _fun0004 }
 309:
                var6 = _closure1_slot8;
                var6 = var4.bind(var5)(var7, var6);
                var2['_messages'] = var6;
                _fun0004_ip = 351; continue _fun0004;
 327:
                var6 = var5.length;
                var3 = _closure1_slot8;
                var3 = var6 - var3;
                var3 = var4.bind(var5)(var3);
                var2['_messages'] = var3;
 351:
                var3 = {};
                var2['_map'] = var3;
                var3 = var2._messages;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = _closure3_slot0;
                    var3 = var2._map;
                    var2 = var1.id;
                    var3[var2] = var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'extractAll';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var1 = var3._messages;
            var2 = new Array(0);
            var3['_messages'] = var2;
            var2 = {};
            var3['_map'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'extract';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = var4._isCacheBefore;
                var3 = global;
                var7 = var3.Math;
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 29:
                var3 = var7.min;
                var1 = var4.length;
                var6 = var3.bind(var7)(var5, var1);
                var3 = var4._messages;
                var1 = var3.slice;
                var8 = 0;
                var1 = var1.bind(var3)(var8, var6);
                var6 = var4._messages;
                var3 = var6.splice;
                var3 = var3.bind(var6)(var8, var5);
                _fun0005_ip = 145; continue _fun0005;
 84:
                var6 = var7.max;
                var3 = var4.length;
                var5 = var3 - var5;
                var3 = 0;
                var6 = var6.bind(var7)(var5, var3);
                var7 = var4.length;
                var5 = var4._messages;
                var3 = var5.slice;
                var1 = var3.bind(var5)(var6, var7);
                var5 = var4._messages;
                var4 = var5.splice;
                var4 = var4.bind(var5)(var6);
 145:
                var3 = var1.forEach;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1._map;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = delete var2[var1];
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[13] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot12 = var4;
    var4 = function() {
        var5 = function ChannelMessages(arg1) {
            var3 = this;
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var5 = false;
            var3['ready'] = var5;
            var3['cached'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 7;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.JumpTypes;
            var4 = var4.ANIMATED;
            var3['jumpType'] = var4;
            var6 = null;
            var3['jumpTargetId'] = var6;
            var7 = 0;
            var3['jumpTargetOffset'] = var7;
            var8 = 1;
            var3['jumpSequenceId'] = var8;
            var3['jumped'] = var5;
            var3['jumpedToPresent'] = var5;
            var4 = true;
            var3['jumpFlash'] = var4;
            var3['jumpReturnTargetId'] = var6;
            var3['focusTargetId'] = var6;
            var3['focusSequenceId'] = var8;
            var3['initialScrollSequenceId'] = var7;
            var3['hasMoreBefore'] = var4;
            var3['hasMoreAfter'] = var5;
            var3['loadingMore'] = var5;
            var3['revealedMessageId'] = var6;
            var3['hasFetched'] = var5;
            var3['error'] = var5;
            var6 = new Array(0);
            var3['_array'] = var6;
            var2 = _closure1_slot12;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var12 = var6;
            var11 = true;
            var4 = new var12[var2](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var3['_before'] = var4;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var12 = var4;
            var11 = false;
            var2 = new var12[var2](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_after'] = var2;
            var2 = {};
            var3['_map'] = var2;
            var2 = arg1;
            var3['channelId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var1 = {};
        var2 = 'mutate';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var5 = arguments[1];
                var4 = this;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0006_ip = 17; continue _fun0006 }
 15:
                var5 = false;
 17:
                var7 = _closure2_slot0;
                var12 = var4.channelId;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var13 = var6;
                var1 = new var13[var7](var12, var11);
                var1 = var1 instanceof Object ? var1 : var6;
                var9 = var4._array;
                if(var5) { _fun0006_ip = 63; continue _fun0006 }
 58:
                var6 = var9;
                _fun0006_ip = 82; continue _fun0006;
 63:
                var7 = new Array(0);
                var10 = 0;
                var12 = var7;
                var11 = var9;
                var8 = arraySpread(var12, var11, var10);
                var6 = var7;
 82:
                var1['_array'] = var6;
                var8 = var4._map;
                if(var5) { _fun0006_ip = 102; continue _fun0006 }
 97:
                var6 = var8;
                _fun0006_ip = 117; continue _fun0006;
 102:
                var7 = {};
                var12 = var7;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var6 = var7;
 117:
                var1['_map'] = var6;
                var8 = var4._after;
                if(var5) { _fun0006_ip = 137; continue _fun0006 }
 132:
                var6 = var8;
                _fun0006_ip = 147; continue _fun0006;
 137:
                var7 = var8.clone;
                var6 = var7.bind(var8)();
 147:
                var1['_after'] = var6;
                var7 = var4._before;
                if(var5) { _fun0006_ip = 167; continue _fun0006 }
 162:
                var5 = var7;
                _fun0006_ip = 177; continue _fun0006;
 167:
                var6 = var7.clone;
                var5 = var6.bind(var7)();
 177:
                var1['_before'] = var5;
                var5 = global;
                var5 = var5.Function;
                var5 = var3 instanceof var5;
                if(var5) { _fun0006_ip = 823; continue _fun0006 }
 201:
                var6 = 'object';
                var5 = typeof var3;
                if(!(var6 === var5)) { _fun0006_ip = 1055; continue _fun0006 }
 215:
                var5 = var3.ready;
                if(!(var2 === var5)) { _fun0006_ip = 233; continue _fun0006 }
 225:
                var5 = var4.ready;
                _fun0006_ip = 245; continue _fun0006;
 233:
                var7 = var3.ready;
                var6 = true;
                var5 = var6 === var7;
 245:
                var1['ready'] = var5;
                var5 = var3.jumpType;
                if(!(var2 === var5)) { _fun0006_ip = 269; continue _fun0006 }
 261:
                var5 = var4.jumpType;
                _fun0006_ip = 275; continue _fun0006;
 269:
                var5 = var3.jumpType;
 275:
                var1['jumpType'] = var5;
                var5 = var3.jumpTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 299; continue _fun0006 }
 291:
                var5 = var4.jumpTargetId;
                _fun0006_ip = 305; continue _fun0006;
 299:
                var5 = var3.jumpTargetId;
 305:
                var1['jumpTargetId'] = var5;
                var5 = var3.jumpTargetOffset;
                if(!(var2 === var5)) { _fun0006_ip = 329; continue _fun0006 }
 321:
                var5 = var4.jumpTargetOffset;
                _fun0006_ip = 335; continue _fun0006;
 329:
                var5 = var3.jumpTargetOffset;
 335:
                var1['jumpTargetOffset'] = var5;
                var5 = var3.jumpSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 359; continue _fun0006 }
 351:
                var5 = var4.jumpSequenceId;
                _fun0006_ip = 365; continue _fun0006;
 359:
                var5 = var3.jumpSequenceId;
 365:
                var1['jumpSequenceId'] = var5;
                var5 = var3.jumped;
                if(!(var2 === var5)) { _fun0006_ip = 389; continue _fun0006 }
 381:
                var5 = var4.jumped;
                _fun0006_ip = 401; continue _fun0006;
 389:
                var7 = var3.jumped;
                var6 = true;
                var5 = var6 === var7;
 401:
                var1['jumped'] = var5;
                var5 = var3.jumpedToPresent;
                if(!(var2 === var5)) { _fun0006_ip = 425; continue _fun0006 }
 417:
                var5 = var4.jumpedToPresent;
                _fun0006_ip = 437; continue _fun0006;
 425:
                var7 = var3.jumpedToPresent;
                var6 = true;
                var5 = var6 === var7;
 437:
                var1['jumpedToPresent'] = var5;
                var5 = var3.jumpFlash;
                if(!(var2 === var5)) { _fun0006_ip = 461; continue _fun0006 }
 453:
                var5 = var4.jumpFlash;
                _fun0006_ip = 473; continue _fun0006;
 461:
                var7 = var3.jumpFlash;
                var6 = true;
                var5 = var6 === var7;
 473:
                var1['jumpFlash'] = var5;
                var5 = var3.jumpReturnTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 497; continue _fun0006 }
 489:
                var5 = var4.jumpReturnTargetId;
                _fun0006_ip = 503; continue _fun0006;
 497:
                var5 = var3.jumpReturnTargetId;
 503:
                var1['jumpReturnTargetId'] = var5;
                var5 = var3.focusTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 527; continue _fun0006 }
 519:
                var5 = var4.focusTargetId;
                _fun0006_ip = 533; continue _fun0006;
 527:
                var5 = var3.focusTargetId;
 533:
                var1['focusTargetId'] = var5;
                var5 = var3.focusSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 557; continue _fun0006 }
 549:
                var5 = var4.focusSequenceId;
                _fun0006_ip = 563; continue _fun0006;
 557:
                var5 = var3.focusSequenceId;
 563:
                var1['focusSequenceId'] = var5;
                var5 = var3.hasMoreBefore;
                if(!(var2 === var5)) { _fun0006_ip = 587; continue _fun0006 }
 579:
                var5 = var4.hasMoreBefore;
                _fun0006_ip = 599; continue _fun0006;
 587:
                var7 = var3.hasMoreBefore;
                var6 = true;
                var5 = var6 === var7;
 599:
                var1['hasMoreBefore'] = var5;
                var5 = var3.hasMoreAfter;
                if(!(var2 === var5)) { _fun0006_ip = 623; continue _fun0006 }
 615:
                var5 = var4.hasMoreAfter;
                _fun0006_ip = 635; continue _fun0006;
 623:
                var7 = var3.hasMoreAfter;
                var6 = true;
                var5 = var6 === var7;
 635:
                var1['hasMoreAfter'] = var5;
                var5 = var3.loadingMore;
                if(!(var2 === var5)) { _fun0006_ip = 659; continue _fun0006 }
 651:
                var5 = var4.loadingMore;
                _fun0006_ip = 665; continue _fun0006;
 659:
                var5 = var3.loadingMore;
 665:
                var1['loadingMore'] = var5;
                var5 = var3.revealedMessageId;
                if(!(var2 === var5)) { _fun0006_ip = 689; continue _fun0006 }
 681:
                var5 = var4.revealedMessageId;
                _fun0006_ip = 695; continue _fun0006;
 689:
                var5 = var3.revealedMessageId;
 695:
                var1['revealedMessageId'] = var5;
                var5 = var3.cached;
                if(!(var2 === var5)) { _fun0006_ip = 719; continue _fun0006 }
 711:
                var5 = var4.cached;
                _fun0006_ip = 725; continue _fun0006;
 719:
                var5 = var3.cached;
 725:
                var1['cached'] = var5;
                var5 = var3.hasFetched;
                if(!(var2 === var5)) { _fun0006_ip = 749; continue _fun0006 }
 741:
                var5 = var4.hasFetched;
                _fun0006_ip = 755; continue _fun0006;
 749:
                var5 = var3.hasFetched;
 755:
                var1['hasFetched'] = var5;
                var5 = var3.error;
                if(!(var2 === var5)) { _fun0006_ip = 777; continue _fun0006 }
 770:
                var5 = var4.error;
                _fun0006_ip = 782; continue _fun0006;
 777:
                var5 = var3.error;
 782:
                var1['error'] = var5;
                var5 = var3.initialScrollSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 806; continue _fun0006 }
 798:
                var5 = var4.initialScrollSequenceId;
                _fun0006_ip = 812; continue _fun0006;
 806:
                var5 = var3.initialScrollSequenceId;
 812:
                var1['initialScrollSequenceId'] = var5;
                _fun0006_ip = 1055; continue _fun0006;
 823:
                var5 = var4.ready;
                var1['ready'] = var5;
                var5 = var4.jumpType;
                var1['jumpType'] = var5;
                var5 = var4.jumpTargetId;
                var1['jumpTargetId'] = var5;
                var5 = var4.jumpTargetOffset;
                var1['jumpTargetOffset'] = var5;
                var5 = var4.jumpSequenceId;
                var1['jumpSequenceId'] = var5;
                var5 = var4.jumped;
                var1['jumped'] = var5;
                var5 = var4.jumpedToPresent;
                var1['jumpedToPresent'] = var5;
                var5 = var4.jumpFlash;
                var1['jumpFlash'] = var5;
                var5 = var4.jumpReturnTargetId;
                var1['jumpReturnTargetId'] = var5;
                var5 = var4.focusTargetId;
                var1['focusTargetId'] = var5;
                var5 = var4.focusSequenceId;
                var1['focusSequenceId'] = var5;
                var5 = var4.hasMoreBefore;
                var1['hasMoreBefore'] = var5;
                var5 = var4.hasMoreAfter;
                var1['hasMoreAfter'] = var5;
                var5 = var4.loadingMore;
                var1['loadingMore'] = var5;
                var5 = var4.revealedMessageId;
                var1['revealedMessageId'] = var5;
                var5 = var4.cached;
                var1['cached'] = var5;
                var5 = var4.hasFetched;
                var1['hasFetched'] = var5;
                var5 = var4.error;
                var1['error'] = var5;
                var4 = var4.initialScrollSequenceId;
                var1['initialScrollSequenceId'] = var4;
                var2 = var3.bind(var2)(var1);
 1055:
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(45);
        var3[0] = var1;
        var1 = {};
        var2 = 'length';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._array;
            var1 = var1.length;
            return var1;
        };
        var1['get'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'toArray';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var5 = var1._array;
            var1 = new Array(0);
            var4 = 0;
            var6 = var1;
            var2 = arraySpread(var6, var5, var4);
            return var1;
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'forEach';
        var1['key'] = var2;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var8 = arg1;
                var7 = arg2;
                var2 = arguments[2];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0007_ip = 17; continue _fun0007 }
 15:
                var2 = false;
 17:
                var3 = this;
                var6 = var3._array;
                if(var2) { _fun0007_ip = 42; continue _fun0007 }
 29:
                var2 = var6.forEach;
                var2 = var2.bind(var6)(var8, var7);
                _fun0007_ip = 112; continue _fun0007;
 42:
                var3 = var6.length;
                var2 = 1;
                var3 = var3 - var2;
                var5 = 0;
                if(!(var3 >= var5)) { _fun0007_ip = 112; continue _fun0007 }
 60:
                var4 = var8.call;
                var2 = var6[var3];
                var2 = var4.bind(var8)(var7, var2, var3);
                var4 = false;
                if(!(var4 !== var2)) { _fun0007_ip = 112; continue _fun0007 }
 82:
                var9 = var3 - 1;
                if(!(var9 >= var5)) { _fun0007_ip = 112; continue _fun0007 }
 89:
                var10 = var8.call;
                var2 = var6[var9];
                var2 = var10.bind(var8)(var7, var2, var9);
                var3 = var9;
                if(var4 !== var2) { _fun0007_ip = 82; continue _fun0007 }
 112:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[3] = var1;
        var1 = {};
        var7 = 'reduce';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1._array;
            var3 = var4.reduce;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[4] = var1;
        var1 = {};
        var7 = 'some';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1._array;
            var3 = var4.some;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[5] = var1;
        var1 = {};
        var7 = 'filter';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1._array;
            var3 = var4.filter;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[6] = var1;
        var1 = {};
        var7 = 'forAll';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = arg1;
            var3 = arg2;
            var1 = this;
            var5 = var1._before;
            var2 = var5.forEach;
            var2 = var2.bind(var5)(var4, var3);
            var5 = var1._array;
            var2 = var5.forEach;
            var2 = var2.bind(var5)(var4, var3);
            var2 = var1._after;
            var1 = var2.forEach;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var3[7] = var1;
        var1 = {};
        var7 = 'findOldest';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var4 = _closure1_slot1;
                var1 = _closure1_slot3;
                var7 = 6;
                var1 = var1[var7];
                var6 = undefined;
                var8 = var4.bind(var6)(var1);
                var4 = var8.find;
                var1 = var2._before;
                var1 = var1._messages;
                var1 = var4.bind(var8)(var1, var5);
                var4 = null;
                if(!(var4 == var1)) { _fun0008_ip = 94; continue _fun0008 }
 60:
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.find;
                var8 = var2._array;
                var1 = var9.bind(var10)(var8, var5);
 94:
                if(!(var4 == var1)) { _fun0008_ip = 138; continue _fun0008 }
 98:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.find;
                var2 = var2._after;
                var2 = var2._messages;
                var1 = var3.bind(var4)(var2, var5);
 138:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[8] = var1;
        var1 = {};
        var7 = 'findNewest';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var4 = _closure1_slot1;
                var1 = _closure1_slot3;
                var7 = 6;
                var1 = var1[var7];
                var6 = undefined;
                var8 = var4.bind(var6)(var1);
                var4 = var8.findLast;
                var1 = var2._after;
                var1 = var1._messages;
                var1 = var4.bind(var8)(var1, var5);
                var4 = null;
                if(!(var4 == var1)) { _fun0009_ip = 96; continue _fun0009 }
 61:
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.findLast;
                var8 = var2._array;
                var1 = var9.bind(var10)(var8, var5);
 96:
                if(!(var4 == var1)) { _fun0009_ip = 141; continue _fun0009 }
 100:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.findLast;
                var2 = var2._before;
                var2 = var2._messages;
                var1 = var3.bind(var4)(var2, var5);
 141:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[9] = var1;
        var1 = {};
        var7 = 'map';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1._array;
            var3 = var4.map;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var7;
        var3[10] = var1;
        var1 = {};
        var7 = 'first';
        var1['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1._array;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var7;
        var3[11] = var1;
        var1 = {};
        var7 = 'last';
        var1['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1._array;
            var1 = var1._array;
            var3 = var1.length;
            var1 = 1;
            var1 = var3 - var1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var7;
        var3[12] = var1;
        var1 = {};
        var8 = 'get';
        var1['key'] = var8;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = arg1;
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0010_ip = 17; continue _fun0010 }
 15:
                var2 = false;
 17:
                var1 = var3._map;
                var6 = var1[var5];
                var4 = null;
                var1 = var6;
                if(!(var4 == var6)) { _fun0010_ip = 81; continue _fun0010 }
 36:
                var1 = var6;
                if(!var2) { _fun0010_ip = 81; continue _fun0010 }
 42:
                var6 = var3._before;
                var2 = var6.get;
                var2 = var2.bind(var6)(var5);
                if(!(var4 == var2)) { _fun0010_ip = 78; continue _fun0010 }
 62:
                var4 = var3._after;
                var3 = var4.get;
                var2 = var3.bind(var4)(var5);
 78:
                var1 = var2;
 81:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[13] = var1;
        var1 = {};
        var7 = 'getByIndex';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1._array;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var7;
        var3[14] = var1;
        var1 = {};
        var7 = 'getAfter';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = this;
                var2 = var4.get;
                var1 = arg1;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0011_ip = 85; continue _fun0011 }
 22:
                var3 = var4._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var5);
                var3 = -1;
                var2 = null;
                if(!(var3 !== var5)) { _fun0011_ip = 83; continue _fun0011 }
 51:
                var6 = var4.length;
                var3 = 1;
                var6 = var6 - var3;
                var2 = null;
                if(!(var5 !== var6)) { _fun0011_ip = 83; continue _fun0011 }
 69:
                var4 = var4._array;
                var3 = var5 + var3;
                var2 = var4[var3];
 83:
                return var2;
 85:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[15] = var1;
        var1 = {};
        var7 = 'getManyAfter';
        var1['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var8 = arg2;
                var7 = arg3;
                var6 = this;
                var2 = var6.get;
                var1 = arg1;
                var4 = var2.bind(var6)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0012_ip = 184; continue _fun0012 }
 31:
                var3 = var6._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var4);
                var3 = -1;
                if(!(var3 !== var5)) { _fun0012_ip = 182; continue _fun0012 }
 61:
                var2 = new Array(0);
                var4 = 1;
                var9 = var5 + var4;
                var4 = var6.length;
                if(!(var9 < var4)) { _fun0012_ip = 180; continue _fun0012 }
 81:
                var5 = var3 === var8;
                var4 = var9;
                if(var5) { _fun0012_ip = 103; continue _fun0012 }
 91:
                var3 = var2.length;
                var4 = var9;
                if(!(var3 < var8)) { _fun0012_ip = 180; continue _fun0012 }
 103:
                var3 = var1 == var7;
                if(var3) { _fun0012_ip = 127; continue _fun0012 }
 110:
                var9 = var6._array;
                var10 = var9[var4];
                var9 = undefined;
                var3 = var7.bind(var9)(var10);
 127:
                if(!var3) { _fun0012_ip = 150; continue _fun0012 }
 130:
                var9 = var2.push;
                var3 = var6._array;
                var3 = var3[var4];
                var3 = var9.bind(var2)(var3);
 150:
                var9 = var4 + 1;
                var3 = var6.length;
                if(!(var9 < var3)) { _fun0012_ip = 180; continue _fun0012 }
 162:
                var4 = var9;
                if(var5) { _fun0012_ip = 103; continue _fun0012 }
 168:
                var3 = var2.length;
                var4 = var9;
                if(var3 < var8) { _fun0012_ip = 103; continue _fun0012 }
 180:
                return var2;
 182:
                return var1;
 184:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[16] = var1;
        var1 = {};
        var7 = 'getManyBefore';
        var1['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var9 = arg2;
                var8 = arg3;
                var7 = this;
                var2 = var7.get;
                var1 = arg1;
                var4 = var2.bind(var7)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0013_ip = 174; continue _fun0013 }
 31:
                var3 = var7._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var4);
                var3 = -1;
                if(!(var3 !== var5)) { _fun0013_ip = 172; continue _fun0013 }
 58:
                var2 = new Array(0);
                var4 = 1;
                var10 = var5 - var4;
                var6 = 0;
                if(!(var10 >= var6)) { _fun0013_ip = 170; continue _fun0013 }
 75:
                var5 = var3 === var9;
                var4 = var10;
                if(var5) { _fun0013_ip = 97; continue _fun0013 }
 85:
                var3 = var2.length;
                var4 = var10;
                if(!(var3 < var9)) { _fun0013_ip = 170; continue _fun0013 }
 97:
                var3 = var1 == var8;
                if(var3) { _fun0013_ip = 121; continue _fun0013 }
 104:
                var10 = var7._array;
                var11 = var10[var4];
                var10 = undefined;
                var3 = var8.bind(var10)(var11);
 121:
                if(!var3) { _fun0013_ip = 145; continue _fun0013 }
 124:
                var10 = var2.unshift;
                var3 = var7._array;
                var3 = var3[var4];
                var3 = var10.bind(var2)(var3);
 145:
                var10 = var4 - 1;
                if(!(var10 >= var6)) { _fun0013_ip = 170; continue _fun0013 }
 152:
                var4 = var10;
                if(var5) { _fun0013_ip = 97; continue _fun0013 }
 158:
                var3 = var2.length;
                var4 = var10;
                if(var3 < var9) { _fun0013_ip = 97; continue _fun0013 }
 170:
                return var2;
 172:
                return var1;
 174:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[17] = var1;
        var1 = {};
        var7 = 'has';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var6 = arg1;
                var2 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0014_ip = 17; continue _fun0014 }
 15:
                var2 = true;
 17:
                var1 = var4._map;
                var3 = var1[var6];
                var1 = null;
                var1 = var1 != var3;
                if(var1) { _fun0014_ip = 80; continue _fun0014 }
 36:
                if(!var2) { _fun0014_ip = 77; continue _fun0014 }
 39:
                var5 = var4._before;
                var3 = var5.has;
                var3 = var3.bind(var5)(var6);
                if(var3) { _fun0014_ip = 74; continue _fun0014 }
 58:
                var5 = var4._after;
                var4 = var5.has;
                var3 = var4.bind(var5)(var6);
 74:
                var2 = var3;
 77:
                var1 = var2;
 80:
                return var1;
            }
        };
        var1['value'] = var7;
        var3[18] = var1;
        var1 = {};
        var7 = 'indexOf';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = -1;
            var _closure3_slot1 = var2;
            var2 = this;
            var4 = var2._array;
            var3 = var4.find;
            var2 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0015_ip = 31; continue _fun0015 }
 22:
                    var2 = arg2;
                    _closure3_slot1 = var2;
                    var1 = true;
 31:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot1;
            return var1;
        };
        var1['value'] = var7;
        var3[19] = var1;
        var1 = {};
        var7 = 'hasPresent';
        var1['key'] = var7;
        var9 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = this;
                var1 = var2._after;
                var3 = var1.length;
                var1 = 0;
                var1 = var3 > var1;
                if(!var1) { _fun0016_ip = 35; continue _fun0016 }
 23:
                var3 = var2._after;
                var1 = var3.wasAtEdge;
 35:
                if(var1) { _fun0016_ip = 47; continue _fun0016 }
 38:
                var2 = var2.hasMoreAfter;
                var1 = !var2;
 47:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[20] = var1;
        var1 = {};
        var9 = 'hasBeforeCached';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var2 = this;
                var1 = var2.length;
                var3 = 0;
                if(!(var1 > var3)) { _fun0017_ip = 29; continue _fun0017 }
 14:
                var1 = var2._before;
                var1 = var1.length;
                if(!(!(var1 > var3))) { _fun0017_ip = 33; continue _fun0017 }
 29:
                var1 = false;
                return var1;
 33:
                var1 = var2.first;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0017_ip = 64; continue _fun0017 }
 52:
                var3 = var2.id;
                var2 = arg1;
                var1 = var3 === var2;
 64:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[21] = var1;
        var1 = {};
        var9 = 'hasAfterCached';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var2 = this;
                var1 = var2.length;
                var3 = 0;
                if(!(var1 > var3)) { _fun0018_ip = 29; continue _fun0018 }
 14:
                var1 = var2._after;
                var1 = var1.length;
                if(!(!(var1 > var3))) { _fun0018_ip = 33; continue _fun0018 }
 29:
                var1 = false;
                return var1;
 33:
                var1 = var2.last;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 64; continue _fun0018 }
 52:
                var3 = var2.id;
                var2 = arg1;
                var1 = var3 === var2;
 64:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[22] = var1;
        var1 = {};
        var9 = 'update';
        var1['key'] = var9;
        var9 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var5 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var6;
                var1 = var5._map;
                var3 = var1[var4];
                var _closure3_slot2 = var3;
                var1 = null;
                if(!(var1 != var3)) { _fun0019_ip = 71; continue _fun0019 }
 39:
                var1 = undefined;
                var1 = var6.bind(var1)(var3);
                var _closure3_slot3 = var1;
                var6 = var5.mutate;
                var3 = function(arg1) {
                    var2 = arg1;
                    var6 = var2._map;
                    var5 = _closure3_slot2;
                    var4 = var5.id;
                    var3 = _closure3_slot3;
                    var6[var4] = var3;
                    var3 = var2._array;
                    var4 = var2._array;
                    var2 = var4.indexOf;
                    var2 = var2.bind(var4)(var5);
                    var1 = _closure3_slot3;
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = true;
                var1 = var6.bind(var5)(var3, var1);
                return var1;
 71:
                var3 = var5._before;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0019_ip = 133; continue _fun0019 }
 90:
                var3 = var5._after;
                var1 = var3.has;
                var3 = var1.bind(var3)(var4);
                var1 = var5;
                if(!var3) { _fun0019_ip = 131; continue _fun0019 }
 112:
                var6 = var5.mutate;
                var4 = function(arg1) {
                    var1 = arg1;
                    var4 = var1._after;
                    var3 = var4.update;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3 = true;
                var1 = var6.bind(var5)(var4, var3);
 131:
                _fun0019_ip = 152; continue _fun0019;
 133:
                var4 = var5.mutate;
                var3 = function(arg1) {
                    var1 = arg1;
                    var4 = var1._before;
                    var3 = var4.update;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = true;
                var1 = var4.bind(var5)(var3, var2);
 152:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[23] = var1;
        var1 = {};
        var9 = 'replace';
        var1['key'] = var9;
        var9 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var5 = arg1;
                var6 = this;
                var _closure3_slot0 = var5;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = var6._map;
                var2 = var1[var5];
                var _closure3_slot2 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0020_ip = 60; continue _fun0020 }
 39:
                var4 = var6.mutate;
                var2 = function(arg1) {
                    var4 = arg1;
                    var3 = var4._map;
                    var2 = _closure3_slot0;
                    var2 = delete var3[var2];
                    var5 = var4._map;
                    var3 = _closure3_slot1;
                    var2 = var3.id;
                    var5[var2] = var3;
                    var2 = var4._array;
                    var5 = var4._array;
                    var4 = var5.indexOf;
                    var1 = _closure3_slot2;
                    var1 = var4.bind(var5)(var1);
                    var2[var1] = var3;
                    var1 = undefined;
                    return var1;
                };
                var1 = true;
                var1 = var4.bind(var6)(var2, var1);
                _fun0020_ip = 144; continue _fun0020;
 60:
                var4 = var6._before;
                var2 = var4.has;
                var2 = var2.bind(var4)(var5);
                if(var2) { _fun0020_ip = 122; continue _fun0020 }
 79:
                var4 = var6._after;
                var2 = var4.has;
                var4 = var2.bind(var4)(var5);
                var2 = var6;
                if(!var4) { _fun0020_ip = 120; continue _fun0020 }
 101:
                var7 = var6.mutate;
                var5 = function(arg1) {
                    var1 = arg1;
                    var4 = var1._after;
                    var3 = var4.replace;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var4 = true;
                var2 = var7.bind(var6)(var5, var4);
 120:
                _fun0020_ip = 141; continue _fun0020;
 122:
                var5 = var6.mutate;
                var4 = function(arg1) {
                    var1 = arg1;
                    var4 = var1._before;
                    var3 = var4.replace;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3 = true;
                var2 = var5.bind(var6)(var4, var3);
 141:
                var1 = var2;
 144:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[24] = var1;
        var1 = {};
        var9 = 'remove';
        var1['key'] = var9;
        var9 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.mutate;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1._map;
                var3 = _closure3_slot0;
                var2 = delete var2[var3];
                var5 = var1._array;
                var4 = var5.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var1['_array'] = var2;
                var4 = var1._before;
                var2 = var4.remove;
                var2 = var2.bind(var4)(var3);
                var2 = var1._after;
                var1 = var2.remove;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var9;
        var3[25] = var1;
        var1 = {};
        var9 = 'removeMany';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var4 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var4;
                var3 = var4.some;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var5;
                if(!var3) { _fun0021_ip = 57; continue _fun0021 }
 38:
                var4 = var5.mutate;
                var3 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.each;
                    var4 = _closure3_slot1;
                    var5 = function(arg1) {
                        var1 = _closure4_slot0;
                        var2 = var1._map;
                        var1 = arg1;
                        var1 = delete var2[var1];
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var6.bind(var7)(var4, var5);
                    var6 = var2._array;
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var3 = _closure3_slot1;
                        var2 = var3.indexOf;
                        var1 = arg1;
                        var1 = var1.id;
                        var2 = var2.bind(var3)(var1);
                        var1 = -1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    var2['_array'] = var3;
                    var5 = var2._before;
                    var3 = var5.removeMany;
                    var3 = var3.bind(var5)(var4);
                    var3 = var2._after;
                    var2 = var3.removeMany;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                };
                var2 = true;
                var1 = var4.bind(var5)(var3, var2);
 57:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[26] = var1;
        var1 = {};
        var9 = 'merge';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var5 = arguments[1];
                var2 = arguments[2];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0022_ip = 26; continue _fun0022 }
 24:
                var5 = false;
 26:
                var _closure3_slot1 = var5;
                if(!(var2 === var3)) { _fun0022_ip = 36; continue _fun0022 }
 34:
                var2 = false;
 36:
                var _closure3_slot2 = var2;
                var3 = var4.mutate;
                var2 = function(arg1) {
                    var5 = arg1;
                    var4 = var5._merge;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var1 = _closure3_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[27] = var1;
        var1 = {};
        var9 = '_merge';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var7 = arg1;
                var2 = arguments[1];
                var4 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0023_ip = 26; continue _fun0023 }
 24:
                var2 = false;
 26:
                if(!(var4 === var1)) { _fun0023_ip = 32; continue _fun0023 }
 30:
                var4 = false;
 32:
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var4 = arg1;
                        var1 = _closure3_slot0;
                        var5 = var1._map;
                        var3 = var4.id;
                        var6 = var5[var3];
                        var3 = var1._map;
                        var1 = var4.id;
                        var3[var1] = var4;
                        var1 = null;
                        var1 = var1 == var6;
                        if(var1) { _fun0024_ip = 82; continue _fun0024 }
 49:
                        var2 = _closure3_slot0;
                        var3 = var2._array;
                        var5 = var2._array;
                        var2 = var5.indexOf;
                        var2 = var2.bind(var5)(var6);
                        var3[var2] = var4;
                        var1 = false;
 82:
                        return var1;
                    }
                };
                var6 = var6.bind(var7)(var5);
                if(!var4) { _fun0023_ip = 77; continue _fun0023 }
 50:
                if(var2) { _fun0023_ip = 61; continue _fun0023 }
 53:
                var5 = var3._after;
                _fun0023_ip = 67; continue _fun0023;
 61:
                var5 = var3._before;
 67:
                var4 = var5.clear;
                var4 = var4.bind(var5)();
 77:
                var4 = new Array(0);
                if(var2) { _fun0023_ip = 114; continue _fun0023 }
 84:
                var9 = var3._array;
                var10 = var4;
                var8 = 0;
                var8 = arraySpread(var10, var9, var8);
                var10 = var4;
                var9 = var6;
                var2 = arraySpread(var10, var9, var8);
                var2 = var4;
                _fun0023_ip = 142; continue _fun0023;
 114:
                var10 = var4;
                var9 = var6;
                var8 = 0;
                var8 = arraySpread(var10, var9, var8);
                var9 = var3._array;
                var10 = var4;
                var5 = arraySpread(var10, var9, var8);
                var2 = var4;
 142:
                var3['_array'] = var2;
                return var1;
            }
        };
        var1['value'] = var9;
        var3[28] = var1;
        var1 = {};
        var9 = 'mergeDelta';
        var1['key'] = var9;
        var9 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var6 = arguments[0];
                var5 = arguments[1];
                var2 = arguments[2];
                var3 = this;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0025_ip = 24; continue _fun0025 }
 20:
                var6 = new Array(0);
 24:
                var _closure3_slot0 = var6;
                if(!(var5 === var4)) { _fun0025_ip = 36; continue _fun0025 }
 32:
                var5 = new Array(0);
 36:
                var _closure3_slot1 = var5;
                if(!(var2 === var4)) { _fun0025_ip = 48; continue _fun0025 }
 44:
                var2 = new Array(0);
 48:
                var _closure3_slot2 = var2;
                var2 = var3.mutate;
                var1 = function(arg1) {
                    var2 = arg1;
                    var4 = var2._before;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                    var4 = var2._after;
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                    var3 = global;
                    var6 = var3.Set;
                    var10 = _closure3_slot2;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var11 = var5;
                    var4 = new var11[var6](var10, var9);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure4_slot0 = var4;
                    var7 = _closure3_slot0;
                    var5 = var7.forEach;
                    var4 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var7)(var4);
                    var8 = _closure3_slot1;
                    var4 = var8.forEach;
                    var3 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var8)(var3);
                    var5 = var2._array;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.concat;
                    var4 = var7.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.createMessageRecord;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var4.bind(var7)(var3);
                    var7 = var8.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.createMessageRecord;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var7.bind(var8)(var3);
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = var4.sort;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2['_array'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[29] = var1;
        var1 = {};
        var9 = '_clearMessages';
        var1['key'] = var9;
        var9 = function value() {
            var2 = this;
            var1 = new Array(0);
            var2['_array'] = var1;
            var1 = {};
            var2['_map'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var9;
        var3[30] = var1;
        var1 = {};
        var9 = 'reset';
        var1['key'] = var9;
        var9 = function value(arg1) {
            var3 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = var3.mutate;
            var1 = function(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var4 = _closure3_slot0;
                var1['_array'] = var4;
                var3 = {};
                var1['_map'] = var3;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = _closure4_slot0;
                    var3 = var2._map;
                    var2 = var1.id;
                    var3[var2] = var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var1._before;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var2 = var1._after;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var9;
        var3[31] = var1;
        var1 = {};
        var9 = 'truncateTop';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var5 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0026_ip = 16; continue _fun0026 }
 14:
                var5 = true;
 16:
                var _closure3_slot0 = var1;
                var1 = var4._array;
                var3 = var1.length;
                var1 = arg1;
                var6 = var3 - var1;
                _closure3_slot0 = var6;
                var3 = 0;
                var1 = var4;
                if(!(!(var6 <= var3))) { _fun0026_ip = 68; continue _fun0026 }
 51:
                var3 = var4.mutate;
                var2 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var8 = 0;
                        var3 = var8 < var3;
                        var4 = 0;
                        if(!var3) { _fun0027_ip = 57; continue _fun0027 }
 21:
                        var5 = var2._map;
                        var3 = var2._array;
                        var3 = var3[var4];
                        var3 = var3.id;
                        var3 = delete var5[var3];
                        var4 = var4 + 1;
                        var3 = _closure3_slot0;
                        if(var4 < var3) { _fun0027_ip = 21; continue _fun0027 }
 57:
                        var6 = var2._before;
                        var5 = var6.cache;
                        var7 = var2._array;
                        var4 = var7.slice;
                        var3 = _closure3_slot0;
                        var4 = var4.bind(var7)(var8, var3);
                        var3 = var2.hasMoreBefore;
                        var3 = !var3;
                        var3 = var5.bind(var6)(var4, var3);
                        var4 = var2._array;
                        var3 = var4.slice;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var1);
                        var2['_array'] = var1;
                        var1 = true;
                        var2['hasMoreBefore'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var5);
 68:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[32] = var1;
        var1 = {};
        var9 = 'truncateBottom';
        var1['key'] = var9;
        var9 = function value(arg1) {
            var1 = this;
            return var1;
        };
        var1['value'] = var9;
        var3[33] = var1;
        var1 = {};
        var9 = 'jumpToPresent';
        var1['key'] = var9;
        var9 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.mutate;
            var2 = function(arg1) {
                var2 = arg1;
                var3 = var2._after;
                var1 = var3.extractAll;
                var7 = var1.bind(var3)();
                var1 = false;
                var2['hasMoreAfter'] = var1;
                var3 = global;
                var6 = var3.Math;
                var4 = var6.max;
                var5 = var7.length;
                var3 = _closure3_slot0;
                var3 = var5 - var3;
                var5 = 0;
                var6 = var4.bind(var6)(var3, var5);
                var3 = var7.slice;
                var4 = var3.bind(var7)(var6);
                var3 = var7.splice;
                var3 = var3.bind(var7)(var6);
                var8 = var2._before;
                var6 = var8.cache;
                var3 = var2._array;
                var3 = var6.bind(var8)(var3);
                var6 = var2._before;
                var3 = var6.cache;
                var3 = var3.bind(var6)(var7);
                var3 = var2._clearMessages;
                var3 = var3.bind(var2)();
                var3 = var2._merge;
                var3 = var3.bind(var2)(var4);
                var3 = var2._before;
                var3 = var3.length;
                var3 = var3 > var5;
                var2['hasMoreBefore'] = var3;
                var3 = true;
                var2['jumped'] = var3;
                var4 = null;
                var2['jumpTargetId'] = var4;
                var2['jumpTargetOffset'] = var5;
                var2['jumpedToPresent'] = var3;
                var2['jumpFlash'] = var1;
                var2['jumpReturnTargetId'] = var4;
                var5 = var2.jumpSequenceId;
                var4 = 1;
                var4 = var5 + var4;
                var2['jumpSequenceId'] = var4;
                var2['ready'] = var3;
                var2['loadingMore'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var9;
        var3[34] = var1;
        var1 = {};
        var9 = 'jumpToMessage';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var5 = arguments[1];
                var2 = arguments[3];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0028_ip = 26; continue _fun0028 }
 24:
                var5 = true;
 26:
                var _closure3_slot1 = var5;
                var5 = arguments[2];
                var _closure3_slot2 = var5;
                if(!(var2 === var3)) { _fun0028_ip = 43; continue _fun0028 }
 41:
                var2 = null;
 43:
                var _closure3_slot3 = var2;
                var2 = arguments[4];
                var _closure3_slot4 = var2;
                var3 = var4.mutate;
                var2 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                        var2 = arg1;
                        var3 = true;
                        var2['jumped'] = var3;
                        var1 = false;
                        var2['jumpedToPresent'] = var1;
                        var5 = _closure3_slot4;
                        var8 = null;
                        if(!(var8 == var5)) { _fun0029_ip = 71; continue _fun0029 }
 32:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var5 = 7;
                        var6 = var6[var5];
                        var5 = undefined;
                        var5 = var7.bind(var5)(var6);
                        var5 = var5.JumpTypes;
                        var5 = var5.ANIMATED;
                        _fun0029_ip = 75; continue _fun0029;
 71:
                        var5 = _closure3_slot4;
 75:
                        var2['jumpType'] = var5;
                        var5 = _closure3_slot0;
                        var2['jumpTargetId'] = var5;
                        var6 = var8 != var5;
                        var5 = 0;
                        if(!var6) { _fun0029_ip = 117; continue _fun0029 }
 100:
                        var6 = _closure3_slot2;
                        var6 = var8 != var6;
                        var5 = 0;
                        if(!var6) { _fun0029_ip = 117; continue _fun0029 }
 113:
                        var5 = _closure3_slot2;
 117:
                        var2['jumpTargetOffset'] = var5;
                        var6 = var2.jumpSequenceId;
                        var5 = 1;
                        var5 = var6 + var5;
                        var2['jumpSequenceId'] = var5;
                        var5 = _closure3_slot1;
                        var2['jumpFlash'] = var5;
                        var4 = _closure3_slot3;
                        var2['jumpReturnTargetId'] = var4;
                        var2['ready'] = var3;
                        var2['loadingMore'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = false;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[35] = var1;
        var1 = {};
        var9 = 'focusOnMessage';
        var1['key'] = var9;
        var9 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.mutate;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = _closure3_slot0;
                var2['focusTargetId'] = var1;
                var3 = var2.focusSequenceId;
                var1 = 1;
                var1 = var3 + var1;
                var2['focusSequenceId'] = var1;
                var1 = true;
                var2['ready'] = var1;
                var1 = false;
                var2['loadingMore'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var9;
        var3[36] = var1;
        var1 = {};
        var9 = 'loadFromCache';
        var1['key'] = var9;
        var9 = function value(arg1, arg2) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = var4.mutate;
            var2 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure3_slot0;
                    if(var1) { _fun0030_ip = 21; continue _fun0030 }
 13:
                    var4 = var2._after;
                    _fun0030_ip = 27; continue _fun0030;
 21:
                    var4 = var2._before;
 27:
                    var6 = var2._merge;
                    var5 = var4.extract;
                    var1 = _closure3_slot1;
                    var5 = var5.bind(var4)(var1);
                    var1 = _closure3_slot0;
                    var1 = var6.bind(var2)(var5, var1);
                    var5 = var4.length;
                    var1 = 0;
                    var1 = var5 > var1;
                    if(var1) { _fun0030_ip = 81; continue _fun0030 }
 72:
                    var4 = var4.wasAtEdge;
                    var1 = !var4;
 81:
                    var3 = _closure3_slot0;
                    if(var3) { _fun0030_ip = 96; continue _fun0030 }
 88:
                    var2['hasMoreAfter'] = var1;
                    _fun0030_ip = 102; continue _fun0030;
 96:
                    var2['hasMoreBefore'] = var1;
 102:
                    var1 = true;
                    var2['ready'] = var1;
                    var1 = false;
                    var2['loadingMore'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var9;
        var3[37] = var1;
        var1 = {};
        var9 = 'truncate';
        var1['key'] = var9;
        var9 = function value(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var5 = this;
                var4 = var5.length;
                var2 = _closure1_slot7;
                var1 = var5;
                if(!(!(var4 <= var2))) { _fun0031_ip = 72; continue _fun0031 }
 22:
                var2 = arg1;
                if(var2) { _fun0031_ip = 54; continue _fun0031 }
 28:
                var4 = arg2;
                var2 = var5;
                if(!var4) { _fun0031_ip = 52; continue _fun0031 }
 37:
                var6 = var5.truncateTop;
                var4 = _closure1_slot9;
                var2 = var6.bind(var5)(var4);
 52:
                _fun0031_ip = 69; continue _fun0031;
 54:
                var4 = var5.truncateBottom;
                var3 = _closure1_slot9;
                var2 = var4.bind(var5)(var3);
 69:
                var1 = var2;
 72:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[38] = var1;
        var1 = {};
        var9 = 'receiveMessage';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var1 = arg1;
                var3 = arguments[1];
                var4 = this;
                var7 = undefined;
                if(!(var3 === var7)) { _fun0032_ip = 17; continue _fun0032 }
 15:
                var3 = true;
 17:
                var2 = var1.nonce;
                var6 = null;
                var5 = var6 == var2;
                var2 = null;
                if(var5) { _fun0032_ip = 53; continue _fun0032 }
 34:
                var9 = var4.get;
                var8 = var1.nonce;
                var5 = true;
                var2 = var9.bind(var4)(var8, var5);
 53:
                if(!(var6 != var2)) { _fun0032_ip = 170; continue _fun0032 }
 57:
                var5 = var1.author;
                var9 = var6 == var5;
                var8 = undefined;
                if(var9) { _fun0032_ip = 77; continue _fun0032 }
 72:
                var8 = var5.id;
 77:
                var9 = var2.author;
                var10 = var6 == var9;
                var5 = undefined;
                if(var10) { _fun0032_ip = 97; continue _fun0032 }
 92:
                var5 = var9.id;
 97:
                if(!(var8 !== var5)) { _fun0032_ip = 142; continue _fun0032 }
 101:
                var5 = var1.interaction;
                if(!(var6 != var5)) { _fun0032_ip = 170; continue _fun0032 }
 111:
                var5 = var1.interaction;
                var5 = var5.user;
                var8 = var5.id;
                var5 = var2.author;
                var5 = var5.id;
                if(!(var8 === var5)) { _fun0032_ip = 170; continue _fun0032 }
 142:
                var5 = var1.nonce;
                if(!(var6 != var5)) { _fun0032_ip = 170; continue _fun0032 }
 152:
                var8 = var2.id;
                var5 = var1.nonce;
                if(!(var8 !== var5)) { _fun0032_ip = 394; continue _fun0032 }
 170:
                var5 = var4.hasMoreAfter;
                if(var5) { _fun0032_ip = 363; continue _fun0032 }
 182:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var8 = 9;
                var8 = var10[var8];
                var12 = var9.bind(var7)(var8);
                var11 = var12.getCurrentConfig;
                var9 = {};
                var8 = '2ecb25_1';
                var9['location'] = var8;
                var8 = {};
                var10 = false;
                var8['autoTrackExposure'] = var10;
                var8 = var11.bind(var12)(var9, var8);
                var8 = var8.enabled;
                if(var8) { _fun0032_ip = 258; continue _fun0032 }
 246:
                var8 = _closure1_slot13;
                var11 = var8.bind(var7)(var4, var1);
                _fun0032_ip = 289; continue _fun0032;
 258:
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 5;
                var8 = var12[var8];
                var9 = var9.bind(var7)(var8);
                var8 = var9.createMessageRecord;
                var11 = var8.bind(var9)(var1);
 289:
                var9 = var4.merge;
                var8 = new Array(1);
                var8[0] = var11;
                var9 = var9.bind(var4)(var8);
                if(var3) { _fun0032_ip = 345; continue _fun0032 }
 311:
                var11 = var4.length;
                var8 = _closure1_slot7;
                var3 = var9;
                if(!(var11 > var8)) { _fun0032_ip = 343; continue _fun0032 }
 327:
                var11 = var9.truncateBottom;
                var8 = _closure1_slot6;
                var3 = var11.bind(var9)(var8, var10);
 343:
                _fun0032_ip = 361; continue _fun0032;
 345:
                var8 = var9.truncateTop;
                var5 = _closure1_slot6;
                var3 = var8.bind(var9)(var5, var10);
 361:
                return var3;
 363:
                var3 = var4._after;
                var3 = var3.wasAtEdge;
                if(!var3) { _fun0032_ip = 392; continue _fun0032 }
 378:
                var5 = var4._after;
                var3 = false;
                var5['wasAtEdge'] = var3;
 392:
                return var4;
 394:
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 5;
                var3 = var8[var3];
                var5 = var5.bind(var7)(var3);
                var3 = var5.createMessageRecord;
                var3 = var3.bind(var5)(var1);
                var5 = var2.interactionData;
                if(!(var6 != var5)) { _fun0032_ip = 450; continue _fun0032 }
 438:
                var2 = var2.interactionData;
                var3['interactionData'] = var2;
 450:
                var2 = var4.replace;
                var1 = var1.nonce;
                var1 = var2.bind(var4)(var1, var3);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[39] = var1;
        var1 = {};
        var9 = 'receivePushNotification';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var1 = var7.nonce;
                var3 = null;
                var1 = var3 == var1;
                var2 = null;
                if(var1) { _fun0033_ip = 42; continue _fun0033 }
 23:
                var5 = var6.get;
                var4 = var7.nonce;
                var1 = true;
                var2 = var5.bind(var6)(var4, var1);
 42:
                var1 = var6;
                if(!(var3 == var2)) { _fun0033_ip = 108; continue _fun0033 }
 49:
                var3 = var6.mutate;
                var2 = {'ready': true, 'cached': true};
                var4 = var3.bind(var6)(var2);
                var3 = var4.merge;
                var5 = _closure1_slot13;
                var2 = undefined;
                var5 = var5.bind(var2)(var6, var7);
                var2 = new Array(1);
                var2[0] = var5;
                var1 = var3.bind(var4)(var2);
 108:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[40] = var1;
        var1 = {};
        var9 = 'receiveReactionInAppNotification';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var7 = arg1;
                var6 = this;
                var1 = var7.nonce;
                var3 = null;
                var1 = var3 == var1;
                var2 = null;
                if(var1) { _fun0034_ip = 42; continue _fun0034 }
 23:
                var5 = var6.get;
                var4 = var7.nonce;
                var1 = true;
                var2 = var5.bind(var6)(var4, var1);
 42:
                var1 = var6;
                if(!(var3 == var2)) { _fun0034_ip = 108; continue _fun0034 }
 49:
                var3 = var6.mutate;
                var2 = {'ready': true, 'cached': true};
                var4 = var3.bind(var6)(var2);
                var3 = var4.merge;
                var5 = _closure1_slot13;
                var2 = undefined;
                var5 = var5.bind(var2)(var6, var7);
                var2 = new Array(1);
                var2[0] = var5;
                var1 = var3.bind(var4)(var2);
 108:
                return var1;
            }
        };
        var1['value'] = var9;
        var3[41] = var1;
        var1 = {};
        var9 = 'loadStart';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var2 = var3.mutate;
                var1 = {};
                var4 = true;
                var1['loadingMore'] = var4;
                var4 = null;
                var6 = var4 != var5;
                var1['jumped'] = var6;
                var6 = var4 == var5;
                var8 = undefined;
                if(var6) { _fun0035_ip = 47; continue _fun0035 }
 41:
                var8 = var5.present;
 47:
                var6 = var4 != var8;
                if(!var6) { _fun0035_ip = 57; continue _fun0035 }
 54:
                var6 = var8;
 57:
                var1['jumpedToPresent'] = var6;
                var6 = var4 == var5;
                var8 = undefined;
                if(var6) { _fun0035_ip = 76; continue _fun0035 }
 71:
                var8 = var5.messageId;
 76:
                var9 = var4 != var8;
                var6 = null;
                if(!var9) { _fun0035_ip = 88; continue _fun0035 }
 85:
                var6 = var8;
 88:
                var1['jumpTargetId'] = var6;
                var6 = var4 == var5;
                var8 = undefined;
                if(var6) { _fun0035_ip = 108; continue _fun0035 }
 102:
                var8 = var5.offset;
 108:
                var9 = var4 != var8;
                var6 = 0;
                if(!var9) { _fun0035_ip = 120; continue _fun0035 }
 117:
                var6 = var8;
 120:
                var1['jumpTargetOffset'] = var6;
                var6 = var4 == var5;
                var7 = undefined;
                if(var6) { _fun0035_ip = 140; continue _fun0035 }
 134:
                var7 = var5.returnMessageId;
 140:
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0035_ip = 152; continue _fun0035 }
 149:
                var6 = var7;
 152:
                var1['jumpReturnTargetId'] = var6;
                var4 = var4 == var5;
                if(!var4) { _fun0035_ip = 170; continue _fun0035 }
 164:
                var4 = var3.ready;
 170:
                var1['ready'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[42] = var1;
        var1 = {};
        var9 = 'loadComplete';
        var1['key'] = var9;
        var9 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var6 = arg1;
                var16 = this;
                var _closure3_slot0 = var16;
                var26 = var6.newMessages;
                var3 = new Array(0);
                var18 = 0;
                var27 = var3;
                var25 = 0;
                var2 = arraySpread(var27, var26, var25);
                var2 = var6.isBefore;
                var12 = null;
                var9 = var12 != var2;
                if(!var9) { _fun0036_ip = 51; continue _fun0036 }
 48:
                var9 = var2;
 51:
                var2 = var6.isAfter;
                var13 = var12 != var2;
                if(!var13) { _fun0036_ip = 67; continue _fun0036 }
 64:
                var13 = var2;
 67:
                var2 = var6.jump;
                var4 = var12 != var2;
                var11 = null;
                if(!var4) { _fun0036_ip = 85; continue _fun0036 }
 82:
                var11 = var2;
 85:
                var2 = var6.hasMoreBefore;
                var14 = var12 != var2;
                if(!var14) { _fun0036_ip = 101; continue _fun0036 }
 98:
                var14 = var2;
 101:
                var2 = var6.hasMoreAfter;
                var10 = var12 != var2;
                if(!var10) { _fun0036_ip = 117; continue _fun0036 }
 114:
                var10 = var2;
 117:
                var2 = var6.avoidInitialScroll;
                var8 = var12 != var2;
                if(!var8) { _fun0036_ip = 133; continue _fun0036 }
 130:
                var8 = var2;
 133:
                var2 = var6.cached;
                var7 = var12 != var2;
                if(!var7) { _fun0036_ip = 149; continue _fun0036 }
 146:
                var7 = var2;
 149:
                var5 = _closure1_slot1;
                var19 = _closure1_slot3;
                var2 = 6;
                var2 = var19[var2];
                var15 = undefined;
                var2 = var5.bind(var15)(var2);
                var3 = var2.bind(var15)(var3);
                var2 = var3.reverse;
                var4 = var2.bind(var3)();
                var3 = var4.map;
                var2 = 9;
                var2 = var19[var2];
                var21 = var5.bind(var15)(var2);
                var20 = var21.getCurrentConfig;
                var19 = {};
                var2 = '2ecb25_2';
                var19['location'] = var2;
                var2 = {};
                var5 = false;
                var2['autoTrackExposure'] = var5;
                var2 = var20.bind(var21)(var19, var2);
                var2 = var2.enabled;
                if(var2) { _fun0036_ip = 254; continue _fun0036 }
 247:
                var2 = function(arg1) {
                    var4 = _closure1_slot13;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                _fun0036_ip = 259; continue _fun0036;
 254:
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.createMessageRecord;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
 259:
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var4 = var2.bind(var3)();
                if(var9) { _fun0036_ip = 279; continue _fun0036 }
 276:
                if(!var13) { _fun0036_ip = 295; continue _fun0036 }
 279:
                if(!(var12 == var11)) { _fun0036_ip = 295; continue _fun0036 }
 283:
                var2 = var16.ready;
                if(var2) { _fun0036_ip = 631; continue _fun0036 }
 295:
                var19 = var16._array;
                var3 = var19.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.state;
                    var1 = _closure1_slot10;
                    var1 = var1.SENDING;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var3.bind(var19)(var2);
                var19 = var16._array;
                var3 = var19.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.state;
                    var1 = _closure1_slot10;
                    var1 = var1.SEND_FAILED;
                    var1 = var2 === var1;
                    return var1;
                };
                var19 = var3.bind(var19)(var1);
                var1 = var2.length;
                var3 = var1 > var18;
                if(var3) { _fun0036_ip = 358; continue _fun0036 }
 349:
                var1 = var19.length;
                var3 = var1 > var18;
 358:
                var1 = var16.reset;
                var1 = var1.bind(var16)(var4);
                if(!var3) { _fun0036_ip = 569; continue _fun0036 }
 375:
                if(var9) { _fun0036_ip = 569; continue _fun0036 }
 381:
                if(var13) { _fun0036_ip = 569; continue _fun0036 }
 387:
                var20 = var12 == var11;
                var3 = undefined;
                if(var20) { _fun0036_ip = 401; continue _fun0036 }
 396:
                var3 = var11.messageId;
 401:
                if(!(var12 == var3)) { _fun0036_ip = 569; continue _fun0036 }
 408:
                var20 = var12 == var11;
                var3 = undefined;
                if(var20) { _fun0036_ip = 423; continue _fun0036 }
 417:
                var3 = var11.offset;
 423:
                if(!(var12 == var3)) { _fun0036_ip = 569; continue _fun0036 }
 430:
                var3 = var19.length;
                var20 = var1;
                if(!(var3 > var18)) { _fun0036_ip = 497; continue _fun0036 }
 442:
                var22 = _closure1_slot11;
                var21 = var22.info;
                var24 = var16.channelId;
                var3 = global;
                var3 = var3.HermesInternal;
                var23 = var3.concat;
                var3 = 'loadComplete: merging with SEND_FAILED messages for channelId=';
                var3 = var23.bind(var3)(var24);
                var3 = var21.bind(var22)(var3);
                var3 = var1.merge;
                var20 = var3.bind(var1)(var19);
 497:
                var19 = var2.length;
                var3 = var20;
                if(!(var19 > var18)) { _fun0036_ip = 646; continue _fun0036 }
 512:
                var22 = _closure1_slot11;
                var21 = var22.info;
                var24 = var16.channelId;
                var19 = global;
                var19 = var19.HermesInternal;
                var23 = var19.concat;
                var19 = 'loadComplete: merging with SENDING messages for channelId=';
                var19 = var23.bind(var19)(var24);
                var19 = var21.bind(var22)(var19);
                var19 = var20.merge;
                var3 = var19.bind(var20)(var2);
                _fun0036_ip = 646; continue _fun0036;
 569:
                var20 = _closure1_slot11;
                var19 = var20.info;
                var24 = var16.channelId;
                var23 = var2.length;
                var2 = global;
                var2 = var2.HermesInternal;
                var22 = var2.concat;
                var21 = 'loadComplete: resetting state for channelId=';
                var2 = ', sending.length=';
                var2 = var22.bind(var21)(var24, var2, var23);
                var2 = var19.bind(var20)(var2);
                var3 = var1;
                _fun0036_ip = 646; continue _fun0036;
 631:
                var2 = var16.merge;
                var1 = true;
                var3 = var2.bind(var16)(var4, var9, var1);
 646:
                var4 = !var7;
                if(!var4) { _fun0036_ip = 658; continue _fun0036 }
 652:
                var4 = var3.cached;
 658:
                if(!var4) { _fun0036_ip = 664; continue _fun0036 }
 661:
                var4 = !var8;
 664:
                var2 = var3.mutate;
                var1 = {'ready': true, 'loadingMore': false};
                var19 = var12 == var11;
                var16 = undefined;
                if(var19) { _fun0036_ip = 699; continue _fun0036 }
 693:
                var16 = var11.jumpType;
 699:
                if(!(var12 == var16)) { _fun0036_ip = 735; continue _fun0036 }
 703:
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var17 = 7;
                var17 = var20[var17];
                var17 = var19.bind(var15)(var17);
                var17 = var17.JumpTypes;
                var16 = var17.ANIMATED;
 735:
                var1['jumpType'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 755; continue _fun0036 }
 749:
                var17 = var11.flash;
 755:
                var16 = var12 != var17;
                if(!var16) { _fun0036_ip = 765; continue _fun0036 }
 762:
                var16 = var17;
 765:
                var1['jumpFlash'] = var16;
                var16 = var12 != var11;
                var1['jumped'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 794; continue _fun0036 }
 788:
                var17 = var11.present;
 794:
                var16 = var12 != var17;
                if(!var16) { _fun0036_ip = 804; continue _fun0036 }
 801:
                var16 = var17;
 804:
                var1['jumpedToPresent'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 823; continue _fun0036 }
 818:
                var17 = var11.messageId;
 823:
                var19 = var12 != var17;
                var16 = null;
                if(!var19) { _fun0036_ip = 835; continue _fun0036 }
 832:
                var16 = var17;
 835:
                var1['jumpTargetId'] = var16;
                var17 = var12 != var11;
                var16 = 0;
                if(!var17) { _fun0036_ip = 884; continue _fun0036 }
 849:
                var17 = var11.messageId;
                var17 = var12 != var17;
                var16 = 0;
                if(!var17) { _fun0036_ip = 884; continue _fun0036 }
 863:
                var17 = var11.offset;
                var17 = var12 != var17;
                var16 = 0;
                if(!var17) { _fun0036_ip = 884; continue _fun0036 }
 878:
                var16 = var11.offset;
 884:
                var1['jumpTargetOffset'] = var16;
                if(!(var12 != var11)) { _fun0036_ip = 911; continue _fun0036 }
 893:
                if(var8) { _fun0036_ip = 911; continue _fun0036 }
 896:
                var16 = var3.jumpSequenceId;
                var8 = 1;
                var8 = var16 + var8;
                _fun0036_ip = 917; continue _fun0036;
 911:
                var8 = var3.jumpSequenceId;
 917:
                var1['jumpSequenceId'] = var8;
                var8 = var12 == var11;
                var15 = undefined;
                if(var8) { _fun0036_ip = 937; continue _fun0036 }
 931:
                var15 = var11.returnMessageId;
 937:
                var16 = var12 != var15;
                var8 = null;
                if(!var16) { _fun0036_ip = 949; continue _fun0036 }
 946:
                var8 = var15;
 949:
                var1['jumpReturnTargetId'] = var8;
                var8 = var14;
                if(!(var12 == var11)) { _fun0036_ip = 973; continue _fun0036 }
 961:
                var8 = var14;
                if(!var13) { _fun0036_ip = 973; continue _fun0036 }
 967:
                var8 = var3.hasMoreBefore;
 973:
                var1['hasMoreBefore'] = var8;
                var8 = var10;
                if(!(var12 == var11)) { _fun0036_ip = 997; continue _fun0036 }
 985:
                var8 = var10;
                if(!var9) { _fun0036_ip = 997; continue _fun0036 }
 991:
                var8 = var3.hasMoreAfter;
 997:
                var1['hasMoreAfter'] = var8;
                var1['cached'] = var7;
                var6 = var6.hasFetched;
                var1['hasFetched'] = var6;
                var1['error'] = var5;
                var6 = var3.initialScrollSequenceId;
                if(var4) { _fun0036_ip = 1036; continue _fun0036 }
 1031:
                var4 = var6;
                _fun0036_ip = 1043; continue _fun0036;
 1036:
                var5 = 1;
                var4 = var6 + var5;
 1043:
                var1['initialScrollSequenceId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[43] = var1;
        var1 = {};
        var9 = 'addCachedMessages';
        var1['key'] = var9;
        var9 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var5 = this;
                var _closure3_slot0 = var5;
                var7 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var2 = var3.requireSortedDescending;
                var2 = var2.bind(var3)(var4);
                var3 = var4.map;
                var2 = function(arg1) {
                    var4 = _closure1_slot13;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.reverse;
                var2 = var2.bind(var3)();
                var _closure3_slot1 = var2;
                var7 = var5._array;
                var4 = var7.filter;
                var3 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure3_slot1;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var4 = var4.bind(var7)(var3);
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.insert;
                    var3 = _closure3_slot1;
                    var2 = arg1;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var4 = !var6;
                if(!var4) { _fun0037_ip = 128; continue _fun0037 }
 122:
                var4 = var5.cached;
 128:
                var1 = var5.reset;
                var3 = var1.bind(var5)(var2);
                var2 = var3.mutate;
                var1 = {'ready': true, 'cached': null, 'error': false};
                var1['cached'] = var6;
                var6 = var5.initialScrollSequenceId;
                if(var4) { _fun0037_ip = 179; continue _fun0037 }
 174:
                var4 = var6;
                _fun0037_ip = 186; continue _fun0037;
 179:
                var5 = 1;
                var4 = var6 + var5;
 186:
                var1['initialScrollSequenceId'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var9;
        var3[44] = var1;
        var1 = {};
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.forEach;
            var2 = _closure2_slot0;
            var3 = var2._channelMessages;
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var1['key'] = var8;
        var8 = function value(arg1) {
            var1 = _closure2_slot0;
            var2 = var1._channelMessages;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var8;
        var2[1] = var1;
        var1 = {};
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0038_ip = 39; continue _fun0038 }
 29:
                var2 = var3.hasPresent;
                var1 = var2.bind(var3)();
 39:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[2] = var1;
        var1 = {};
        var7 = 'getOrCreate';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var4 = arg1;
                var1 = _closure2_slot0;
                var1 = var1._channelMessages;
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0039_ip = 66; continue _fun0039 }
 26:
                var3 = _closure2_slot0;
                var2 = var3.prototype;
                var5 = Object.create(var2, {constructor: {value: var3}});
                var7 = var5;
                var6 = var4;
                var2 = new var7[var3](var6, var5);
                var2 = var2 instanceof Object ? var2 : var5;
                var3 = var3._channelMessages;
                var3[var4] = var2;
                var1 = var2;
 66:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[3] = var1;
        var1 = {};
        var7 = 'clear';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure2_slot0;
            var2 = var1._channelMessages;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var2[4] = var1;
        var1 = {};
        var7 = 'clearCache';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var3 = this;
                var1 = _closure2_slot0;
                var2 = var1._channelMessages;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0040_ip = 72; continue _fun0040 }
 29:
                var4 = var2._before;
                var1 = var4.clear;
                var1 = var1.bind(var4)();
                var4 = var2._after;
                var1 = var4.clear;
                var1 = var1.bind(var4)();
                var1 = var3.commit;
                var1 = var1.bind(var3)(var2);
 72:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[5] = var1;
        var1 = {};
        var7 = 'commit';
        var1['key'] = var7;
        var6 = function value(arg1) {
            var3 = arg1;
            var1 = _closure2_slot0;
            var2 = var1._channelMessages;
            var1 = var3.channelId;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = {};
    var4['_channelMessages'] = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/ChannelMessages.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1) {
        var3 = arg1;
        var2 = var3.flatMap;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1._array;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['flatMapChannelMessages'] = var2;
    return var1;
})();