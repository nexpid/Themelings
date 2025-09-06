// app/modules/messages/MessageViewTrackingManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 76; continue _fun0004;
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
    var1 = function getAnalyticsConfig(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = 'announcement';
            if(!(var1 !== var2)) { _fun0005_ip = 148; continue _fun0005 }
 19:
            var2 = var3.type;
            var1 = 'app_embed';
            if(!(var1 !== var2)) { _fun0005_ip = 70; continue _fun0005 }
 34:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var5 = 'Invalid message type for message view tracking';
            var6 = var2;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
 70:
            var1 = {};
            var2 = _closure1_slot8;
            var2 = var2.APP_EMBED_VIEWED;
            var1['event'] = var2;
            var2 = {};
            var4 = var3.applicationId;
            var2['application_id'] = var4;
            var4 = var3.linkType;
            var2['link_type'] = var4;
            var4 = var3.messageId;
            var2['message_id'] = var4;
            var4 = var3.channelId;
            var2['channel_id'] = var4;
            var4 = var3.guildId;
            var2['guild_id'] = var4;
            var1['properties'] = var2;
            return var1;
 148:
            var1 = {};
            var2 = _closure1_slot8;
            var2 = var2.ANNOUNCEMENT_MESSAGE_VIEWED;
            var1['event'] = var2;
            var2 = {};
            var4 = var3.messageId;
            var2['message_id'] = var4;
            var4 = var3.channelId;
            var2['channel_id'] = var4;
            var4 = var3.guildId;
            var2['guild_id'] = var4;
            var4 = var3.sourceChannelId;
            var2['source_channel_id'] = var4;
            var3 = var3.sourceGuildId;
            var2['source_guild_id'] = var3;
            var1['properties'] = var2;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot8 = var2;
    var2 = {};
    var5 = 'announcement';
    var2['ANNOUNCEMENT'] = var5;
    var5 = 'app_embed';
    var2['APP_EMBED'] = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function MessageViewTrackingManager(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var5)();
                if(var1) { _fun0006_ip = 86; continue _fun0006 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0006_ip = 120; continue _fun0006;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var1['currentlyVisibleMessageTimers'] = var4;
                var4 = global;
                var4 = var4.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var15 = var6;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var6;
                var1['viewsInCurrentChannel'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var2 = var6[var2];
                var5 = var4.bind(var5)(var2);
                var2 = var5.prototype;
                var4 = Object.create(var2, {constructor: {value: var5}});
                var14 = {'max': 500, 'maxAge': 60000};
                var15 = var4;
                var2 = new var15[var5](var14, var13);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['recentViewTimes'] = var2;
                var2 = new Array(0);
                var1['batchBuffer'] = var2;
                var2 = null;
                var1['batchTimerId'] = var2;
                var2 = {};
                var3 = function CHANNEL_SELECT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleChannelSelect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['CHANNEL_SELECT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'handleMessageBecameVisible';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var3;
                var8 = var3.type;
                var7 = var3.messageId;
                var4 = global;
                var3 = var4.HermesInternal;
                var6 = var3.concat;
                var5 = '';
                var3 = '-';
                var3 = var6.bind(var5)(var7, var3, var8);
                var _closure3_slot2 = var3;
                var5 = var1.currentlyVisibleMessageTimers;
                var6 = var5[var3];
                var5 = null;
                if(!(var5 == var6)) { _fun0007_ip = 179; continue _fun0007 }
 74:
                var7 = var1.viewsInCurrentChannel;
                var6 = var7.has;
                var6 = var6.bind(var7)(var3);
                if(var6) { _fun0007_ip = 179; continue _fun0007 }
 93:
                var7 = var1.recentViewTimes;
                var6 = var7.get;
                var6 = var6.bind(var7)(var3);
                if(!(var5 != var6)) { _fun0007_ip = 142; continue _fun0007 }
 113:
                var7 = var4.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var6 = var5 - var6;
                var5 = 60000;
                if(!(!(var6 < var5))) { _fun0007_ip = 179; continue _fun0007 }
 142:
                var6 = var4.setTimeout;
                var5 = undefined;
                var4 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.currentlyVisibleMessageTimers;
                    var6 = _closure3_slot2;
                    var2 = delete var2[var6];
                    var4 = var3.viewsInCurrentChannel;
                    var2 = var4.add;
                    var2 = var2.bind(var4)(var6);
                    var5 = var3.recentViewTimes;
                    var4 = var5.set;
                    var2 = global;
                    var7 = var2.Date;
                    var2 = var7.now;
                    var2 = var2.bind(var7)();
                    var2 = var4.bind(var5)(var6, var2);
                    var2 = var3.bufferViewTrack;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = 1000;
                var2 = var6.bind(var5)(var4, var2);
                var1 = var1.currentlyVisibleMessageTimers;
                var1[var3] = var2;
 179:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleMessageLostVisibility';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = this;
                var3 = global;
                var2 = var3.HermesInternal;
                var7 = var2.concat;
                var6 = '';
                var5 = arg1;
                var4 = '-';
                var2 = arg2;
                var2 = var7.bind(var6)(var5, var4, var2);
                var4 = var1.currentlyVisibleMessageTimers;
                var5 = var4[var2];
                var4 = null;
                if(!(var4 != var5)) { _fun0008_ip = 76; continue _fun0008 }
 53:
                var4 = var3.clearTimeout;
                var3 = undefined;
                var3 = var4.bind(var3)(var5);
                var1 = var1.currentlyVisibleMessageTimers;
                var1 = delete var1[var2];
 76:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleMessageListVisibilityChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var11 = this;
                var2 = _closure1_slot9;
                var1 = undefined;
                var4 = var2.bind(var1)(var6);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 65; continue _fun0009 }
 32:
                var5 = var3.value;
                var2 = var11.handleMessageBecameVisible;
                var2 = var2.bind(var11)(var5);
                var5 = var4.bind(var1)();
                var2 = var5.done;
                var3 = var5;
                if(!var2) { _fun0009_ip = 32; continue _fun0009 }
 65:
                var2 = global;
                var5 = var2.Set;
                var4 = var6.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.messageId;
                    var4 = var1.type;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = '-';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                };
                var15 = var4.bind(var6)(var3);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var16 = var4;
                var3 = new var16[var5](var15, var14);
                var9 = var3 instanceof Object ? var3 : var4;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = var11.currentlyVisibleMessageTimers;
                var8 = var3.bind(var4)(var2);
                var2 = var8.length;
                var7 = 0;
                var2 = var7 < var2;
                var6 = '-';
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0009_ip = 231; continue _fun0009 }
 160:
                var12 = var8[var3];
                var2 = var9.has;
                var2 = var2.bind(var9)(var12);
                if(var2) { _fun0009_ip = 219; continue _fun0009 }
 177:
                var2 = var12.split;
                var12 = var2.bind(var12)(var6);
                var2 = _closure1_slot2;
                var2 = var2.bind(var1)(var12, var5);
                var13 = var2[var7];
                var12 = var2[var4];
                var2 = var11.handleMessageLostVisibility;
                var2 = var2.bind(var11)(var13, var12);
 219:
                var3 = var3 + 1;
                var2 = var8.length;
                if(var3 < var2) { _fun0009_ip = 160; continue _fun0009 }
 231:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleChannelSelect';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = this;
                var6 = global;
                var4 = var6.Object;
                var2 = var4.values;
                var1 = var3.currentlyVisibleMessageTimers;
                var5 = var2.bind(var4)(var1);
                var1 = var5.length;
                var4 = 0;
                var2 = var4 < var1;
                var1 = undefined;
                if(!var2) { _fun0010_ip = 70; continue _fun0010 }
 43:
                var7 = var5[var4];
                var2 = var6.clearTimeout;
                var2 = var2.bind(var1)(var7);
                var4 = var4 + 1;
                var2 = var5.length;
                if(var4 < var2) { _fun0010_ip = 43; continue _fun0010 }
 70:
                var2 = {};
                var3['currentlyVisibleMessageTimers'] = var2;
                var4 = var3.viewsInCurrentChannel;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                var2 = var3.drainBuffer;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'drainBuffer';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot9;
                var2 = var3.batchBuffer;
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var4 = var6.bind(var1)();
                var2 = var4.done;
                var5 = 8;
                if(var2) { _fun0011_ip = 107; continue _fun0011 }
 38:
                var8 = _closure1_slot12;
                var2 = var4.value;
                var2 = var8.bind(var1)(var2);
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var5];
                var10 = var9.bind(var1)(var8);
                var9 = var10.track;
                var8 = var2.event;
                var2 = var2.properties;
                var2 = var9.bind(var10)(var8, var2);
                var8 = var6.bind(var1)();
                var2 = var8.done;
                var4 = var8;
                if(!var2) { _fun0011_ip = 38; continue _fun0011 }
 107:
                var2 = new Array(0);
                var3['batchBuffer'] = var2;
                var4 = var3.batchTimerId;
                var2 = null;
                if(!(var2 != var4)) { _fun0011_ip = 154; continue _fun0011 }
 129:
                var4 = global;
                var5 = var4.clearTimeout;
                var4 = var3.batchTimerId;
                var4 = var5.bind(var1)(var4);
                var3['batchTimerId'] = var2;
 154:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'bufferViewTrack';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.batchBuffer;
                var4 = var3.length;
                var3 = 10;
                if(!(var4 >= var3)) { _fun0012_ip = 37; continue _fun0012 }
 27:
                var3 = var2.drainBuffer;
                var3 = var3.bind(var2)();
 37:
                var5 = var2.batchBuffer;
                var4 = var5.push;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var4 = var2.batchTimerId;
                var3 = null;
                if(!(var3 == var4)) { _fun0012_ip = 103; continue _fun0012 }
 68:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.drainBuffer;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = 2000;
                var1 = var5.bind(var4)(var3, var1);
                var2['batchTimerId'] = var1;
 103:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageViewTrackingManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MessageViewTrackingType'] = var2;
    return var1;
})();