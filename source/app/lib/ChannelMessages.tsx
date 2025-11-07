// app/lib/ChannelMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function mergeMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var3 = var2.get;
            var1 = var4.id;
            var1 = var3.bind(var2)(var1);
            var8 = null;
            if(!(var8 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.editedTimestamp;
            var3 = var8 != var3;
            var5 = 0;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.editedTimestamp;
            var5 = var3 - 0;
case 4:
            var3 = var4.edited_timestamp;
            var7 = var8 != var3;
            var3 = 0;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = global;
            var10 = var7.Date;
            var11 = var4.edited_timestamp;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var12 = var9;
            var7 = new var12[var10](var11, var10);
            var7 = var7 instanceof Object ? var7 : var9;
            var3 = var7 - 0;
case 6:
            var3 = var3 > var5;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var1.embeds;
            var5 = var5.length;
            var9 = var4.embeds;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var9.length;
case 10:
            var8 = var8 != var7;
            var6 = 0;
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var7;
case 12:
            var3 = var5 < var6;
case 8:
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var1.content;
            var5 = var4.content;
            var3 = var6 !== var5;
case 14:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 16:
            var2 = var2.cached;
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.createMessageRecord;
            var1 = var2.bind(var3)(var4);
case 17:
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
case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = this;
                var2 = var1._map;
                var5 = var2[var4];
                var2 = null;
                if(!(var2 != var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
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
case 18:
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
case 0:
                var1 = this;
                var3 = var1._map;
                var2 = arg1;
                var5 = var3[var2];
                var2 = null;
                if(!(var2 != var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
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
case 20:
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
case 0:
                var5 = arg1;
                var3 = arguments[1];
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = undefined;
                if(!(var3 === var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var3 = false;
case 22:
                var6 = var2.length;
                var7 = 0;
                if(!(var7 === var6)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2['_wasAtEdge'] = var3;
case 24:
                var3 = var2._messages;
                var6 = var3.length;
                var3 = var5.length;
                var8 = var6 + var3;
                var6 = _closure1_slot8;
                if(!(var8 > var6)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var6 = false;
                var2['_wasAtEdge'] = var6;
                var8 = var5.length;
                var6 = _closure1_slot8;
                if(!(!(var8 > var6))) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var8 = _closure1_slot8;
                var6 = var5.length;
                var12 = var8 - var6;
                var6 = var2._isCacheBefore;
                var9 = var2._messages;
                var8 = var9.slice;
                if(var6) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var6 = var8.bind(var9)(var7, var12);
                var2['_messages'] = var6;
                _fun0004_ip = 26; continue _fun0004;
case 30:
                var6 = global;
                var11 = var6.Math;
                var10 = var11.max;
                var6 = var2._messages;
                var6 = var6.length;
                var6 = var6 - var12;
                var6 = var10.bind(var11)(var6, var7);
                var6 = var8.bind(var9)(var6);
                var2['_messages'] = var6;
case 26:
                var6 = var2._isCacheBefore;
                var8 = new Array(0);
                if(var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var15 = var8;
                var14 = var5;
                var13 = 0;
                var13 = arraySpread(var15, var14, var13);
                var14 = var2._messages;
                var15 = var8;
                var6 = arraySpread(var15, var14, var13);
                var6 = var8;
                _fun0004_ip = 34; continue _fun0004;
case 32:
                var14 = var2._messages;
                var15 = var8;
                var13 = 0;
                var13 = arraySpread(var15, var14, var13);
                var15 = var8;
                var14 = var5;
                var9 = arraySpread(var15, var14, var13);
                var6 = var8;
case 34:
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
case 28:
                var6 = var2._isCacheBefore;
                var4 = var5.slice;
                if(var6) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var6 = _closure1_slot8;
                var6 = var4.bind(var5)(var7, var6);
                var2['_messages'] = var6;
                _fun0004_ip = 37; continue _fun0004;
case 35:
                var6 = var5.length;
                var3 = _closure1_slot8;
                var3 = var6 - var3;
                var3 = var4.bind(var5)(var3);
                var2['_messages'] = var3;
case 37:
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
case 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = var4._isCacheBefore;
                var3 = global;
                var7 = var3.Math;
                if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
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
                _fun0005_ip = 40; continue _fun0005;
case 38:
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
case 40:
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
case 0:
                var3 = arg1;
                var5 = arguments[1];
                var4 = this;
                var2 = undefined;
                if(!(var5 === var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var5 = false;
case 41:
                var7 = _closure2_slot0;
                var12 = var4.channelId;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var13 = var6;
                var1 = new var13[var7](var12, var11);
                var1 = var1 instanceof Object ? var1 : var6;
                var9 = var4._array;
                if(var5) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var6 = var9;
                _fun0006_ip = 45; continue _fun0006;
case 43:
                var7 = new Array(0);
                var10 = 0;
                var12 = var7;
                var11 = var9;
                var8 = arraySpread(var12, var11, var10);
                var6 = var7;
case 45:
                var1['_array'] = var6;
                var8 = var4._map;
                if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var6 = var8;
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var7 = {};
                var12 = var7;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var6 = var7;
case 48:
                var1['_map'] = var6;
                var8 = var4._after;
                if(var5) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                var6 = var8;
                _fun0006_ip = 51; continue _fun0006;
case 49:
                var7 = var8.clone;
                var6 = var7.bind(var8)();
case 51:
                var1['_after'] = var6;
                var7 = var4._before;
                if(var5) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var5 = var7;
                _fun0006_ip = 14; continue _fun0006;
case 52:
                var6 = var7.clone;
                var5 = var6.bind(var7)();
case 14:
                var1['_before'] = var5;
                var5 = global;
                var5 = var5.Function;
                var5 = var3 instanceof var5;
                if(var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var6 = 'object';
                var5 = typeof var3;
                if(!(var6 === var5)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var5 = var3.ready;
                if(!(var2 === var5)) { _fun0006_ip = 58; continue _fun0006 }
case 17:
                var5 = var4.ready;
                _fun0006_ip = 59; continue _fun0006;
case 58:
                var7 = var3.ready;
                var6 = true;
                var5 = var6 === var7;
case 59:
                var1['ready'] = var5;
                var5 = var3.jumpType;
                if(!(var2 === var5)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var5 = var4.jumpType;
                _fun0006_ip = 62; continue _fun0006;
case 60:
                var5 = var3.jumpType;
case 62:
                var1['jumpType'] = var5;
                var5 = var3.jumpTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var5 = var4.jumpTargetId;
                _fun0006_ip = 65; continue _fun0006;
case 63:
                var5 = var3.jumpTargetId;
case 65:
                var1['jumpTargetId'] = var5;
                var5 = var3.jumpTargetOffset;
                if(!(var2 === var5)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                var5 = var4.jumpTargetOffset;
                _fun0006_ip = 68; continue _fun0006;
case 66:
                var5 = var3.jumpTargetOffset;
case 68:
                var1['jumpTargetOffset'] = var5;
                var5 = var3.jumpSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 69; continue _fun0006 }
case 37:
                var5 = var4.jumpSequenceId;
                _fun0006_ip = 70; continue _fun0006;
case 69:
                var5 = var3.jumpSequenceId;
case 70:
                var1['jumpSequenceId'] = var5;
                var5 = var3.jumped;
                if(!(var2 === var5)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                var5 = var4.jumped;
                _fun0006_ip = 73; continue _fun0006;
case 71:
                var7 = var3.jumped;
                var6 = true;
                var5 = var6 === var7;
case 73:
                var1['jumped'] = var5;
                var5 = var3.jumpedToPresent;
                if(!(var2 === var5)) { _fun0006_ip = 74; continue _fun0006 }
case 75:
                var5 = var4.jumpedToPresent;
                _fun0006_ip = 76; continue _fun0006;
case 74:
                var7 = var3.jumpedToPresent;
                var6 = true;
                var5 = var6 === var7;
case 76:
                var1['jumpedToPresent'] = var5;
                var5 = var3.jumpFlash;
                if(!(var2 === var5)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                var5 = var4.jumpFlash;
                _fun0006_ip = 79; continue _fun0006;
case 77:
                var7 = var3.jumpFlash;
                var6 = true;
                var5 = var6 === var7;
case 79:
                var1['jumpFlash'] = var5;
                var5 = var3.jumpReturnTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                var5 = var4.jumpReturnTargetId;
                _fun0006_ip = 82; continue _fun0006;
case 80:
                var5 = var3.jumpReturnTargetId;
case 82:
                var1['jumpReturnTargetId'] = var5;
                var5 = var3.focusTargetId;
                if(!(var2 === var5)) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                var5 = var4.focusTargetId;
                _fun0006_ip = 85; continue _fun0006;
case 83:
                var5 = var3.focusTargetId;
case 85:
                var1['focusTargetId'] = var5;
                var5 = var3.focusSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 86; continue _fun0006 }
case 87:
                var5 = var4.focusSequenceId;
                _fun0006_ip = 88; continue _fun0006;
case 86:
                var5 = var3.focusSequenceId;
case 88:
                var1['focusSequenceId'] = var5;
                var5 = var3.hasMoreBefore;
                if(!(var2 === var5)) { _fun0006_ip = 89; continue _fun0006 }
case 90:
                var5 = var4.hasMoreBefore;
                _fun0006_ip = 91; continue _fun0006;
case 89:
                var7 = var3.hasMoreBefore;
                var6 = true;
                var5 = var6 === var7;
case 91:
                var1['hasMoreBefore'] = var5;
                var5 = var3.hasMoreAfter;
                if(!(var2 === var5)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
                var5 = var4.hasMoreAfter;
                _fun0006_ip = 94; continue _fun0006;
case 92:
                var7 = var3.hasMoreAfter;
                var6 = true;
                var5 = var6 === var7;
case 94:
                var1['hasMoreAfter'] = var5;
                var5 = var3.loadingMore;
                if(!(var2 === var5)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
                var5 = var4.loadingMore;
                _fun0006_ip = 97; continue _fun0006;
case 95:
                var5 = var3.loadingMore;
case 97:
                var1['loadingMore'] = var5;
                var5 = var3.revealedMessageId;
                if(!(var2 === var5)) { _fun0006_ip = 98; continue _fun0006 }
case 99:
                var5 = var4.revealedMessageId;
                _fun0006_ip = 100; continue _fun0006;
case 98:
                var5 = var3.revealedMessageId;
case 100:
                var1['revealedMessageId'] = var5;
                var5 = var3.cached;
                if(!(var2 === var5)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                var5 = var4.cached;
                _fun0006_ip = 103; continue _fun0006;
case 101:
                var5 = var3.cached;
case 103:
                var1['cached'] = var5;
                var5 = var3.hasFetched;
                if(!(var2 === var5)) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                var5 = var4.hasFetched;
                _fun0006_ip = 106; continue _fun0006;
case 104:
                var5 = var3.hasFetched;
case 106:
                var1['hasFetched'] = var5;
                var5 = var3.error;
                if(!(var2 === var5)) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                var5 = var4.error;
                _fun0006_ip = 109; continue _fun0006;
case 107:
                var5 = var3.error;
case 109:
                var1['error'] = var5;
                var5 = var3.initialScrollSequenceId;
                if(!(var2 === var5)) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                var5 = var4.initialScrollSequenceId;
                _fun0006_ip = 112; continue _fun0006;
case 110:
                var5 = var3.initialScrollSequenceId;
case 112:
                var1['initialScrollSequenceId'] = var5;
                _fun0006_ip = 56; continue _fun0006;
case 54:
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
case 56:
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
case 0:
                var8 = arg1;
                var7 = arg2;
                var2 = arguments[2];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var2 = false;
case 41:
                var3 = this;
                var6 = var3._array;
                if(var2) { _fun0007_ip = 113; continue _fun0007 }
case 39:
                var2 = var6.forEach;
                var2 = var2.bind(var6)(var8, var7);
                _fun0007_ip = 114; continue _fun0007;
case 113:
                var3 = var6.length;
                var2 = 1;
                var3 = var3 - var2;
                var5 = 0;
                if(!(var3 >= var5)) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                var4 = var8.call;
                var2 = var6[var3];
                var2 = var4.bind(var8)(var7, var2, var3);
                var4 = false;
                if(!(var4 !== var2)) { _fun0007_ip = 114; continue _fun0007 }
case 45:
                var9 = var3 - 1;
                if(!(var9 >= var5)) { _fun0007_ip = 114; continue _fun0007 }
case 116:
                var10 = var8.call;
                var2 = var6[var9];
                var2 = var10.bind(var8)(var7, var2, var9);
                var3 = var9;
                if(var4 !== var2) { _fun0007_ip = 45; continue _fun0007 }
case 114:
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
case 0:
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
                if(!(var4 == var1)) { _fun0008_ip = 117; continue _fun0008 }
case 118:
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.find;
                var8 = var2._array;
                var1 = var9.bind(var10)(var8, var5);
case 117:
                if(!(var4 == var1)) { _fun0008_ip = 119; continue _fun0008 }
case 120:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.find;
                var2 = var2._after;
                var2 = var2._messages;
                var1 = var3.bind(var4)(var2, var5);
case 119:
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
case 0:
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
                if(!(var4 == var1)) { _fun0009_ip = 117; continue _fun0009 }
case 118:
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.findLast;
                var8 = var2._array;
                var1 = var9.bind(var10)(var8, var5);
case 117:
                if(!(var4 == var1)) { _fun0009_ip = 119; continue _fun0009 }
case 120:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.findLast;
                var2 = var2._before;
                var2 = var2._messages;
                var1 = var3.bind(var4)(var2, var5);
case 119:
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
case 0:
                var5 = arg1;
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                var2 = false;
case 41:
                var1 = var3._map;
                var6 = var1[var5];
                var4 = null;
                var1 = var6;
                if(!(var4 == var6)) { _fun0010_ip = 121; continue _fun0010 }
case 122:
                var1 = var6;
                if(!var2) { _fun0010_ip = 121; continue _fun0010 }
case 113:
                var6 = var3._before;
                var2 = var6.get;
                var2 = var2.bind(var6)(var5);
                if(!(var4 == var2)) { _fun0010_ip = 123; continue _fun0010 }
case 124:
                var4 = var3._after;
                var3 = var4.get;
                var2 = var3.bind(var4)(var5);
case 123:
                var1 = var2;
case 121:
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
case 0:
                var4 = this;
                var2 = var4.get;
                var1 = arg1;
                var5 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0011_ip = 125; continue _fun0011 }
case 21:
                var3 = var4._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var5);
                var3 = -1;
                var2 = null;
                if(!(var3 !== var5)) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                var6 = var4.length;
                var3 = 1;
                var6 = var6 - var3;
                var2 = null;
                if(!(var5 !== var6)) { _fun0011_ip = 126; continue _fun0011 }
case 7:
                var4 = var4._array;
                var3 = var5 + var3;
                var2 = var4[var3];
case 126:
                return var2;
case 125:
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
case 0:
                var8 = arg2;
                var7 = arg3;
                var6 = this;
                var2 = var6.get;
                var1 = arg1;
                var4 = var2.bind(var6)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
                var3 = var6._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var4);
                var3 = -1;
                if(!(var3 !== var5)) { _fun0012_ip = 130; continue _fun0012 }
case 118:
                var2 = new Array(0);
                var4 = 1;
                var9 = var5 + var4;
                var4 = var6.length;
                if(!(var9 < var4)) { _fun0012_ip = 16; continue _fun0012 }
case 121:
                var5 = var3 === var8;
                var4 = var9;
                if(var5) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                var3 = var2.length;
                var4 = var9;
                if(!(var3 < var8)) { _fun0012_ip = 16; continue _fun0012 }
case 131:
                var3 = var1 == var7;
                if(var3) { _fun0012_ip = 133; continue _fun0012 }
case 134:
                var9 = var6._array;
                var10 = var9[var4];
                var9 = undefined;
                var3 = var7.bind(var9)(var10);
case 133:
                if(!var3) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                var9 = var2.push;
                var3 = var6._array;
                var3 = var3[var4];
                var3 = var9.bind(var2)(var3);
case 135:
                var9 = var4 + 1;
                var3 = var6.length;
                if(!(var9 < var3)) { _fun0012_ip = 16; continue _fun0012 }
case 53:
                var4 = var9;
                if(var5) { _fun0012_ip = 131; continue _fun0012 }
case 137:
                var3 = var2.length;
                var4 = var9;
                if(var3 < var8) { _fun0012_ip = 131; continue _fun0012 }
case 16:
                return var2;
case 130:
                return var1;
case 128:
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
case 0:
                var9 = arg2;
                var8 = arg3;
                var7 = this;
                var2 = var7.get;
                var1 = arg1;
                var4 = var2.bind(var7)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0013_ip = 138; continue _fun0013 }
case 129:
                var3 = var7._array;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var4);
                var3 = -1;
                if(!(var3 !== var5)) { _fun0013_ip = 139; continue _fun0013 }
case 44:
                var2 = new Array(0);
                var4 = 1;
                var10 = var5 - var4;
                var6 = 0;
                if(!(var10 >= var6)) { _fun0013_ip = 140; continue _fun0013 }
case 141:
                var5 = var3 === var9;
                var4 = var10;
                if(var5) { _fun0013_ip = 47; continue _fun0013 }
case 125:
                var3 = var2.length;
                var4 = var10;
                if(!(var3 < var9)) { _fun0013_ip = 140; continue _fun0013 }
case 47:
                var3 = var1 == var8;
                if(var3) { _fun0013_ip = 142; continue _fun0013 }
case 143:
                var10 = var7._array;
                var11 = var10[var4];
                var10 = undefined;
                var3 = var8.bind(var10)(var11);
case 142:
                if(!var3) { _fun0013_ip = 40; continue _fun0013 }
case 144:
                var10 = var2.unshift;
                var3 = var7._array;
                var3 = var3[var4];
                var3 = var10.bind(var2)(var3);
case 40:
                var10 = var4 - 1;
                if(!(var10 >= var6)) { _fun0013_ip = 140; continue _fun0013 }
case 145:
                var4 = var10;
                if(var5) { _fun0013_ip = 47; continue _fun0013 }
case 146:
                var3 = var2.length;
                var4 = var10;
                if(var3 < var9) { _fun0013_ip = 47; continue _fun0013 }
case 140:
                return var2;
case 139:
                return var1;
case 138:
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
case 0:
                var6 = arg1;
                var2 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0014_ip = 41; continue _fun0014 }
case 42:
                var2 = true;
case 41:
                var1 = var4._map;
                var3 = var1[var6];
                var1 = null;
                var1 = var1 != var3;
                if(var1) { _fun0014_ip = 147; continue _fun0014 }
case 122:
                if(!var2) { _fun0014_ip = 18; continue _fun0014 }
case 148:
                var5 = var4._before;
                var3 = var5.has;
                var3 = var3.bind(var5)(var6);
                if(var3) { _fun0014_ip = 20; continue _fun0014 }
case 44:
                var5 = var4._after;
                var4 = var5.has;
                var3 = var4.bind(var5)(var6);
case 20:
                var2 = var3;
case 18:
                var1 = var2;
case 147:
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
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0015_ip = 129; continue _fun0015 }
case 21:
                    var2 = arg2;
                    _closure3_slot1 = var2;
                    var1 = true;
case 129:
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
case 0:
                var2 = this;
                var1 = var2._after;
                var3 = var1.length;
                var1 = 0;
                var1 = var3 > var1;
                if(!var1) { _fun0016_ip = 149; continue _fun0016 }
case 22:
                var3 = var2._after;
                var1 = var3.wasAtEdge;
case 149:
                if(var1) { _fun0016_ip = 150; continue _fun0016 }
case 151:
                var2 = var2.hasMoreAfter;
                var1 = !var2;
case 150:
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
case 0:
                var2 = this;
                var1 = var2.length;
                var3 = 0;
                if(!(var1 > var3)) { _fun0017_ip = 39; continue _fun0017 }
case 152:
                var1 = var2._before;
                var1 = var1.length;
                if(!(!(var1 > var3))) { _fun0017_ip = 153; continue _fun0017 }
case 39:
                var1 = false;
                return var1;
case 153:
                var1 = var2.first;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0017_ip = 154; continue _fun0017 }
case 155:
                var3 = var2.id;
                var2 = arg1;
                var1 = var3 === var2;
case 154:
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
case 0:
                var2 = this;
                var1 = var2.length;
                var3 = 0;
                if(!(var1 > var3)) { _fun0018_ip = 39; continue _fun0018 }
case 152:
                var1 = var2._after;
                var1 = var1.length;
                if(!(!(var1 > var3))) { _fun0018_ip = 153; continue _fun0018 }
case 39:
                var1 = false;
                return var1;
case 153:
                var1 = var2.last;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 154; continue _fun0018 }
case 155:
                var3 = var2.id;
                var2 = arg1;
                var1 = var3 === var2;
case 154:
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
case 0:
                var4 = arg1;
                var6 = arg2;
                var5 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var6;
                var1 = var5._map;
                var3 = var1[var4];
                var _closure3_slot2 = var3;
                var1 = null;
                if(!(var1 != var3)) { _fun0019_ip = 27; continue _fun0019 }
case 148:
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
case 27:
                var3 = var5._before;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0019_ip = 156; continue _fun0019 }
case 157:
                var3 = var5._after;
                var1 = var3.has;
                var3 = var1.bind(var3)(var4);
                var1 = var5;
                if(!var3) { _fun0019_ip = 158; continue _fun0019 }
case 114:
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
case 158:
                _fun0019_ip = 145; continue _fun0019;
case 156:
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
case 145:
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
case 0:
                var5 = arg1;
                var6 = this;
                var _closure3_slot0 = var5;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = var6._map;
                var2 = var1[var5];
                var _closure3_slot2 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0020_ip = 115; continue _fun0020 }
case 148:
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
                _fun0020_ip = 10; continue _fun0020;
case 115:
                var4 = var6._before;
                var2 = var4.has;
                var2 = var2.bind(var4)(var5);
                if(var2) { _fun0020_ip = 159; continue _fun0020 }
case 160:
                var4 = var6._after;
                var2 = var4.has;
                var4 = var2.bind(var4)(var5);
                var2 = var6;
                if(!var4) { _fun0020_ip = 161; continue _fun0020 }
case 162:
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
case 161:
                _fun0020_ip = 119; continue _fun0020;
case 159:
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
case 119:
                var1 = var2;
case 10:
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
case 0:
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
                if(!var3) { _fun0021_ip = 163; continue _fun0021 }
case 151:
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
case 163:
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
case 0:
                var5 = arguments[1];
                var2 = arguments[2];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0022_ip = 164; continue _fun0022 }
case 165:
                var5 = false;
case 164:
                var _closure3_slot1 = var5;
                if(!(var2 === var3)) { _fun0022_ip = 122; continue _fun0022 }
case 25:
                var2 = false;
case 122:
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
case 0:
                var7 = arg1;
                var2 = arguments[1];
                var4 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0023_ip = 164; continue _fun0023 }
case 165:
                var2 = false;
case 164:
                if(!(var4 === var1)) { _fun0023_ip = 166; continue _fun0023 }
case 3:
                var4 = false;
case 166:
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
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
                        if(var1) { _fun0024_ip = 45; continue _fun0024 }
case 167:
                        var2 = _closure3_slot0;
                        var3 = var2._array;
                        var5 = var2._array;
                        var2 = var5.indexOf;
                        var2 = var2.bind(var5)(var6);
                        var3[var2] = var4;
                        var1 = false;
case 45:
                        return var1;
                    }
                };
                var6 = var6.bind(var7)(var5);
                if(!var4) { _fun0023_ip = 18; continue _fun0023 }
case 168:
                if(var2) { _fun0023_ip = 118; continue _fun0023 }
case 169:
                var5 = var3._after;
                _fun0023_ip = 170; continue _fun0023;
case 118:
                var5 = var3._before;
case 170:
                var4 = var5.clear;
                var4 = var4.bind(var5)();
case 18:
                var4 = new Array(0);
                if(var2) { _fun0023_ip = 171; continue _fun0023 }
case 38:
                var9 = var3._array;
                var10 = var4;
                var8 = 0;
                var8 = arraySpread(var10, var9, var8);
                var10 = var4;
                var9 = var6;
                var2 = arraySpread(var10, var9, var8);
                var2 = var4;
                _fun0023_ip = 30; continue _fun0023;
case 171:
                var10 = var4;
                var9 = var6;
                var8 = 0;
                var8 = arraySpread(var10, var9, var8);
                var9 = var3._array;
                var10 = var4;
                var5 = arraySpread(var10, var9, var8);
                var2 = var4;
case 30:
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
case 0:
                var6 = arguments[0];
                var5 = arguments[1];
                var2 = arguments[2];
                var3 = this;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0025_ip = 165; continue _fun0025 }
case 172:
                var6 = new Array(0);
case 165:
                var _closure3_slot0 = var6;
                if(!(var5 === var4)) { _fun0025_ip = 122; continue _fun0025 }
case 166:
                var5 = new Array(0);
case 122:
                var _closure3_slot1 = var5;
                if(!(var2 === var4)) { _fun0025_ip = 173; continue _fun0025 }
case 174:
                var2 = new Array(0);
case 173:
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
case 0:
                var5 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0026_ip = 175; continue _fun0026 }
case 152:
                var5 = true;
case 175:
                var _closure3_slot0 = var1;
                var1 = var4._array;
                var3 = var1.length;
                var1 = arg1;
                var6 = var3 - var1;
                _closure3_slot0 = var6;
                var3 = 0;
                var1 = var4;
                if(!(!(var6 <= var3))) { _fun0026_ip = 176; continue _fun0026 }
case 127:
                var3 = var4.mutate;
                var2 = function(arg1) {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var8 = 0;
                        var3 = var8 < var3;
                        var4 = 0;
                        if(!var3) { _fun0027_ip = 163; continue _fun0027 }
case 23:
                        var5 = var2._map;
                        var3 = var2._array;
                        var3 = var3[var4];
                        var3 = var3.id;
                        var3 = delete var5[var3];
                        var4 = var4 + 1;
                        var3 = _closure3_slot0;
                        if(var4 < var3) { _fun0027_ip = 23; continue _fun0027 }
case 163:
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
case 176:
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
case 0:
                var5 = arguments[1];
                var2 = arguments[3];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0028_ip = 164; continue _fun0028 }
case 165:
                var5 = true;
case 164:
                var _closure3_slot1 = var5;
                var5 = arguments[2];
                var _closure3_slot2 = var5;
                if(!(var2 === var3)) { _fun0028_ip = 177; continue _fun0028 }
case 178:
                var2 = null;
case 177:
                var _closure3_slot3 = var2;
                var2 = arguments[4];
                var _closure3_slot4 = var2;
                var3 = var4.mutate;
                var2 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var2 = arg1;
                        var3 = true;
                        var2['jumped'] = var3;
                        var1 = false;
                        var2['jumpedToPresent'] = var1;
                        var5 = _closure3_slot4;
                        var8 = null;
                        if(!(var8 == var5)) { _fun0029_ip = 27; continue _fun0029 }
case 166:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var5 = 7;
                        var6 = var6[var5];
                        var5 = undefined;
                        var5 = var7.bind(var5)(var6);
                        var5 = var5.JumpTypes;
                        var5 = var5.ANIMATED;
                        _fun0029_ip = 141; continue _fun0029;
case 27:
                        var5 = _closure3_slot4;
case 141:
                        var2['jumpType'] = var5;
                        var5 = _closure3_slot0;
                        var2['jumpTargetId'] = var5;
                        var6 = var8 != var5;
                        var5 = 0;
                        if(!var6) { _fun0029_ip = 48; continue _fun0029 }
case 120:
                        var6 = _closure3_slot2;
                        var6 = var8 != var6;
                        var5 = 0;
                        if(!var6) { _fun0029_ip = 48; continue _fun0029 }
case 9:
                        var5 = _closure3_slot2;
case 48:
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
case 0:
                    var2 = arg1;
                    var1 = _closure3_slot0;
                    if(var1) { _fun0030_ip = 23; continue _fun0030 }
case 179:
                    var4 = var2._after;
                    _fun0030_ip = 180; continue _fun0030;
case 23:
                    var4 = var2._before;
case 180:
                    var6 = var2._merge;
                    var5 = var4.extract;
                    var1 = _closure3_slot1;
                    var5 = var5.bind(var4)(var1);
                    var1 = _closure3_slot0;
                    var1 = var6.bind(var2)(var5, var1);
                    var5 = var4.length;
                    var1 = 0;
                    var1 = var5 > var1;
                    if(var1) { _fun0030_ip = 121; continue _fun0030 }
case 181:
                    var4 = var4.wasAtEdge;
                    var1 = !var4;
case 121:
                    var3 = _closure3_slot0;
                    if(var3) { _fun0030_ip = 117; continue _fun0030 }
case 182:
                    var2['hasMoreAfter'] = var1;
                    _fun0030_ip = 46; continue _fun0030;
case 117:
                    var2['hasMoreBefore'] = var1;
case 46:
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
case 0:
                var5 = this;
                var4 = var5.length;
                var2 = _closure1_slot7;
                var1 = var5;
                if(!(!(var4 <= var2))) { _fun0031_ip = 181; continue _fun0031 }
case 21:
                var2 = arg1;
                if(var2) { _fun0031_ip = 4; continue _fun0031 }
case 183:
                var4 = arg2;
                var2 = var5;
                if(!var4) { _fun0031_ip = 155; continue _fun0031 }
case 184:
                var6 = var5.truncateTop;
                var4 = _closure1_slot9;
                var2 = var6.bind(var5)(var4);
case 155:
                _fun0031_ip = 7; continue _fun0031;
case 4:
                var4 = var5.truncateBottom;
                var3 = _closure1_slot9;
                var2 = var4.bind(var5)(var3);
case 7:
                var1 = var2;
case 181:
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
case 0:
                var1 = arg1;
                var3 = arguments[1];
                var4 = this;
                var7 = undefined;
                if(!(var3 === var7)) { _fun0032_ip = 41; continue _fun0032 }
case 42:
                var3 = true;
case 41:
                var2 = var1.nonce;
                var6 = null;
                var5 = var6 == var2;
                var2 = null;
                if(var5) { _fun0032_ip = 169; continue _fun0032 }
case 25:
                var9 = var4.get;
                var8 = var1.nonce;
                var5 = true;
                var2 = var9.bind(var4)(var8, var5);
case 169:
                if(!(var6 != var2)) { _fun0032_ip = 140; continue _fun0032 }
case 163:
                var5 = var1.author;
                var9 = var6 == var5;
                var8 = undefined;
                if(var9) { _fun0032_ip = 18; continue _fun0032 }
case 181:
                var8 = var5.id;
case 18:
                var9 = var2.author;
                var10 = var6 == var9;
                var5 = undefined;
                if(var10) { _fun0032_ip = 47; continue _fun0032 }
case 185:
                var5 = var9.id;
case 47:
                if(!(var8 !== var5)) { _fun0032_ip = 30; continue _fun0032 }
case 162:
                var5 = var1.interaction;
                if(!(var6 != var5)) { _fun0032_ip = 140; continue _fun0032 }
case 186:
                var5 = var1.interaction;
                var5 = var5.user;
                var8 = var5.id;
                var5 = var2.author;
                var5 = var5.id;
                if(!(var8 === var5)) { _fun0032_ip = 140; continue _fun0032 }
case 30:
                var5 = var1.nonce;
                if(!(var6 != var5)) { _fun0032_ip = 140; continue _fun0032 }
case 145:
                var8 = var2.id;
                var5 = var1.nonce;
                if(!(var8 !== var5)) { _fun0032_ip = 187; continue _fun0032 }
case 140:
                var5 = var4.hasMoreAfter;
                if(var5) { _fun0032_ip = 188; continue _fun0032 }
case 130:
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
                if(var8) { _fun0032_ip = 34; continue _fun0032 }
case 189:
                var8 = _closure1_slot13;
                var11 = var8.bind(var7)(var4, var1);
                _fun0032_ip = 190; continue _fun0032;
case 34:
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 5;
                var8 = var12[var8];
                var9 = var9.bind(var7)(var8);
                var8 = var9.createMessageRecord;
                var11 = var8.bind(var9)(var1);
case 190:
                var9 = var4.merge;
                var8 = new Array(1);
                var8[0] = var11;
                var9 = var9.bind(var4)(var8);
                if(var3) { _fun0032_ip = 191; continue _fun0032 }
case 192:
                var11 = var4.length;
                var8 = _closure1_slot7;
                var3 = var9;
                if(!(var11 > var8)) { _fun0032_ip = 193; continue _fun0032 }
case 35:
                var11 = var9.truncateBottom;
                var8 = _closure1_slot6;
                var3 = var11.bind(var9)(var8, var10);
case 193:
                _fun0032_ip = 194; continue _fun0032;
case 191:
                var8 = var9.truncateTop;
                var5 = _closure1_slot6;
                var3 = var8.bind(var9)(var5, var10);
case 194:
                return var3;
case 188:
                var3 = var4._after;
                var3 = var3.wasAtEdge;
                if(!var3) { _fun0032_ip = 195; continue _fun0032 }
case 196:
                var5 = var4._after;
                var3 = false;
                var5['wasAtEdge'] = var3;
case 195:
                return var4;
case 187:
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 5;
                var3 = var8[var3];
                var5 = var5.bind(var7)(var3);
                var3 = var5.createMessageRecord;
                var3 = var3.bind(var5)(var1);
                var5 = var2.interactionData;
                if(!(var6 != var5)) { _fun0032_ip = 197; continue _fun0032 }
case 198:
                var2 = var2.interactionData;
                var3['interactionData'] = var2;
case 197:
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
case 0:
                var7 = arg1;
                var6 = this;
                var1 = var7.nonce;
                var3 = null;
                var1 = var3 == var1;
                var2 = null;
                if(var1) { _fun0033_ip = 113; continue _fun0033 }
case 22:
                var5 = var6.get;
                var4 = var7.nonce;
                var1 = true;
                var2 = var5.bind(var6)(var4, var1);
case 113:
                var1 = var6;
                if(!(var3 == var2)) { _fun0033_ip = 199; continue _fun0033 }
case 167:
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
case 199:
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
case 0:
                var7 = arg1;
                var6 = this;
                var1 = var7.nonce;
                var3 = null;
                var1 = var3 == var1;
                var2 = null;
                if(var1) { _fun0034_ip = 113; continue _fun0034 }
case 22:
                var5 = var6.get;
                var4 = var7.nonce;
                var1 = true;
                var2 = var5.bind(var6)(var4, var1);
case 113:
                var1 = var6;
                if(!(var3 == var2)) { _fun0034_ip = 199; continue _fun0034 }
case 167:
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
case 199:
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
case 0:
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
                if(var6) { _fun0035_ip = 150; continue _fun0035 }
case 178:
                var8 = var5.present;
case 150:
                var6 = var4 != var8;
                if(!var6) { _fun0035_ip = 163; continue _fun0035 }
case 4:
                var6 = var8;
case 163:
                var1['jumpedToPresent'] = var6;
                var6 = var4 == var5;
                var8 = undefined;
                if(var6) { _fun0035_ip = 200; continue _fun0035 }
case 27:
                var8 = var5.messageId;
case 200:
                var9 = var4 != var8;
                var6 = null;
                if(!var9) { _fun0035_ip = 182; continue _fun0035 }
case 125:
                var6 = var8;
case 182:
                var1['jumpTargetId'] = var6;
                var6 = var4 == var5;
                var8 = undefined;
                if(var6) { _fun0035_ip = 199; continue _fun0035 }
case 46:
                var8 = var5.offset;
case 199:
                var9 = var4 != var8;
                var6 = 0;
                if(!var9) { _fun0035_ip = 161; continue _fun0035 }
case 48:
                var6 = var8;
case 161:
                var1['jumpTargetOffset'] = var6;
                var6 = var4 == var5;
                var7 = undefined;
                if(var6) { _fun0035_ip = 201; continue _fun0035 }
case 202:
                var7 = var5.returnMessageId;
case 201:
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0035_ip = 145; continue _fun0035 }
case 203:
                var6 = var7;
case 145:
                var1['jumpReturnTargetId'] = var6;
                var4 = var4 == var5;
                if(!var4) { _fun0035_ip = 140; continue _fun0035 }
case 204:
                var4 = var3.ready;
case 140:
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
case 0:
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
                if(!var9) { _fun0036_ip = 127; continue _fun0036 }
case 173:
                var9 = var2;
case 127:
                var2 = var6.isAfter;
                var13 = var12 != var2;
                if(!var13) { _fun0036_ip = 170; continue _fun0036 }
case 154:
                var13 = var2;
case 170:
                var2 = var6.jump;
                var4 = var12 != var2;
                var11 = null;
                if(!var4) { _fun0036_ip = 125; continue _fun0036 }
case 45:
                var11 = var2;
case 125:
                var2 = var6.hasMoreBefore;
                var14 = var12 != var2;
                if(!var14) { _fun0036_ip = 162; continue _fun0036 }
case 205:
                var14 = var2;
case 162:
                var2 = var6.hasMoreAfter;
                var10 = var12 != var2;
                if(!var10) { _fun0036_ip = 48; continue _fun0036 }
case 171:
                var10 = var2;
case 48:
                var2 = var6.avoidInitialScroll;
                var8 = var12 != var2;
                if(!var8) { _fun0036_ip = 156; continue _fun0036 }
case 136:
                var8 = var2;
case 156:
                var2 = var6.cached;
                var7 = var12 != var2;
                if(!var7) { _fun0036_ip = 203; continue _fun0036 }
case 206:
                var7 = var2;
case 203:
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
                if(var2) { _fun0036_ip = 207; continue _fun0036 }
case 208:
                var2 = function(arg1) {
                    var4 = _closure1_slot13;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                };
                _fun0036_ip = 209; continue _fun0036;
case 207:
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
case 209:
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var4 = var2.bind(var3)();
                if(var9) { _fun0036_ip = 210; continue _fun0036 }
case 211:
                if(!var13) { _fun0036_ip = 28; continue _fun0036 }
case 210:
                if(!(var12 == var11)) { _fun0036_ip = 28; continue _fun0036 }
case 212:
                var2 = var16.ready;
                if(var2) { _fun0036_ip = 213; continue _fun0036 }
case 28:
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
                if(var3) { _fun0036_ip = 214; continue _fun0036 }
case 215:
                var1 = var19.length;
                var3 = var1 > var18;
case 214:
                var1 = var16.reset;
                var1 = var1.bind(var16)(var4);
                if(!var3) { _fun0036_ip = 216; continue _fun0036 }
case 217:
                if(var9) { _fun0036_ip = 216; continue _fun0036 }
case 72:
                if(var13) { _fun0036_ip = 216; continue _fun0036 }
case 218:
                var20 = var12 == var11;
                var3 = undefined;
                if(var20) { _fun0036_ip = 73; continue _fun0036 }
case 219:
                var3 = var11.messageId;
case 73:
                if(!(var12 == var3)) { _fun0036_ip = 216; continue _fun0036 }
case 220:
                var20 = var12 == var11;
                var3 = undefined;
                if(var20) { _fun0036_ip = 221; continue _fun0036 }
case 75:
                var3 = var11.offset;
case 221:
                if(!(var12 == var3)) { _fun0036_ip = 216; continue _fun0036 }
case 222:
                var3 = var19.length;
                var20 = var1;
                if(!(var3 > var18)) { _fun0036_ip = 80; continue _fun0036 }
case 223:
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
case 80:
                var19 = var2.length;
                var3 = var20;
                if(!(var19 > var18)) { _fun0036_ip = 224; continue _fun0036 }
case 225:
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
                _fun0036_ip = 224; continue _fun0036;
case 216:
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
                _fun0036_ip = 224; continue _fun0036;
case 213:
                var2 = var16.merge;
                var1 = true;
                var3 = var2.bind(var16)(var4, var9, var1);
case 224:
                var4 = !var7;
                if(!var4) { _fun0036_ip = 226; continue _fun0036 }
case 227:
                var4 = var3.cached;
case 226:
                if(!var4) { _fun0036_ip = 228; continue _fun0036 }
case 229:
                var4 = !var8;
case 228:
                var2 = var3.mutate;
                var1 = {'ready': true, 'loadingMore': false};
                var19 = var12 == var11;
                var16 = undefined;
                if(var19) { _fun0036_ip = 230; continue _fun0036 }
case 231:
                var16 = var11.jumpType;
case 230:
                if(!(var12 == var16)) { _fun0036_ip = 232; continue _fun0036 }
case 233:
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var17 = 7;
                var17 = var20[var17];
                var17 = var19.bind(var15)(var17);
                var17 = var17.JumpTypes;
                var16 = var17.ANIMATED;
case 232:
                var1['jumpType'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 106; continue _fun0036 }
case 104:
                var17 = var11.flash;
case 106:
                var16 = var12 != var17;
                if(!var16) { _fun0036_ip = 234; continue _fun0036 }
case 235:
                var16 = var17;
case 234:
                var1['jumpFlash'] = var16;
                var16 = var12 != var11;
                var1['jumped'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 236; continue _fun0036 }
case 237:
                var17 = var11.present;
case 236:
                var16 = var12 != var17;
                if(!var16) { _fun0036_ip = 238; continue _fun0036 }
case 239:
                var16 = var17;
case 238:
                var1['jumpedToPresent'] = var16;
                var16 = var12 == var11;
                var17 = undefined;
                if(var16) { _fun0036_ip = 54; continue _fun0036 }
case 240:
                var17 = var11.messageId;
case 54:
                var19 = var12 != var17;
                var16 = null;
                if(!var19) { _fun0036_ip = 241; continue _fun0036 }
case 242:
                var16 = var17;
case 241:
                var1['jumpTargetId'] = var16;
                var17 = var12 != var11;
                var16 = 0;
                if(!var17) { _fun0036_ip = 243; continue _fun0036 }
case 244:
                var17 = var11.messageId;
                var17 = var12 != var17;
                var16 = 0;
                if(!var17) { _fun0036_ip = 243; continue _fun0036 }
case 245:
                var17 = var11.offset;
                var17 = var12 != var17;
                var16 = 0;
                if(!var17) { _fun0036_ip = 243; continue _fun0036 }
case 246:
                var16 = var11.offset;
case 243:
                var1['jumpTargetOffset'] = var16;
                if(!(var12 != var11)) { _fun0036_ip = 247; continue _fun0036 }
case 248:
                if(var8) { _fun0036_ip = 247; continue _fun0036 }
case 249:
                var16 = var3.jumpSequenceId;
                var8 = 1;
                var8 = var16 + var8;
                _fun0036_ip = 250; continue _fun0036;
case 247:
                var8 = var3.jumpSequenceId;
case 250:
                var1['jumpSequenceId'] = var8;
                var8 = var12 == var11;
                var15 = undefined;
                if(var8) { _fun0036_ip = 251; continue _fun0036 }
case 252:
                var15 = var11.returnMessageId;
case 251:
                var16 = var12 != var15;
                var8 = null;
                if(!var16) { _fun0036_ip = 253; continue _fun0036 }
case 254:
                var8 = var15;
case 253:
                var1['jumpReturnTargetId'] = var8;
                var8 = var14;
                if(!(var12 == var11)) { _fun0036_ip = 255; continue _fun0036 }
case 256:
                var8 = var14;
                if(!var13) { _fun0036_ip = 255; continue _fun0036 }
case 257:
                var8 = var3.hasMoreBefore;
case 255:
                var1['hasMoreBefore'] = var8;
                var8 = var10;
                if(!(var12 == var11)) { _fun0036_ip = 258; continue _fun0036 }
case 259:
                var8 = var10;
                if(!var9) { _fun0036_ip = 258; continue _fun0036 }
case 260:
                var8 = var3.hasMoreAfter;
case 258:
                var1['hasMoreAfter'] = var8;
                var1['cached'] = var7;
                var6 = var6.hasFetched;
                var1['hasFetched'] = var6;
                var1['error'] = var5;
                var6 = var3.initialScrollSequenceId;
                if(var4) { _fun0036_ip = 261; continue _fun0036 }
case 262:
                var4 = var6;
                _fun0036_ip = 263; continue _fun0036;
case 261:
                var5 = 1;
                var4 = var6 + var5;
case 263:
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
case 0:
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
                if(!var4) { _fun0037_ip = 31; continue _fun0037 }
case 159:
                var4 = var5.cached;
case 31:
                var1 = var5.reset;
                var3 = var1.bind(var5)(var2);
                var2 = var3.mutate;
                var1 = {'ready': true, 'cached': null, 'error': false};
                var1['cached'] = var6;
                var6 = var5.initialScrollSequenceId;
                if(var4) { _fun0037_ip = 264; continue _fun0037 }
case 138:
                var4 = var6;
                _fun0037_ip = 265; continue _fun0037;
case 264:
                var5 = 1;
                var4 = var6 + var5;
case 265:
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
case 0:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0038_ip = 148; continue _fun0038 }
case 39:
                var2 = var3.hasPresent;
                var1 = var2.bind(var3)();
case 148:
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
case 0:
                var4 = arg1;
                var1 = _closure2_slot0;
                var1 = var1._channelMessages;
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0039_ip = 266; continue _fun0039 }
case 164:
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
case 266:
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
case 0:
                var3 = this;
                var1 = _closure2_slot0;
                var2 = var1._channelMessages;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0040_ip = 181; continue _fun0040 }
case 39:
                var4 = var2._before;
                var1 = var4.clear;
                var1 = var1.bind(var4)();
                var4 = var2._after;
                var1 = var4.clear;
                var1 = var1.bind(var4)();
                var1 = var3.commit;
                var1 = var1.bind(var3)(var2);
case 181:
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