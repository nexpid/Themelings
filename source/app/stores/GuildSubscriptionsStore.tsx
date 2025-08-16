// app/stores/GuildSubscriptionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function prune(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var5 = {};
            var _closure2_slot2 = var5;
            var4 = _closure1_slot24;
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot21;
                    var2 = var4.getGuildId;
                    var2 = var2.bind(var4)();
                    var2 = var3 === var2;
                    if(var2) { _fun0006_ip = 45; continue _fun0006 }
 27:
                    var5 = _closure1_slot18;
                    var4 = var5.getGuildId;
                    var4 = var4.bind(var5)();
                    var2 = var3 === var4;
 45:
                    if(var2) { _fun0006_ip = 101; continue _fun0006 }
 48:
                    var6 = _closure1_slot14;
                    var5 = var6.getChannel;
                    var7 = _closure1_slot20;
                    var4 = var7.getChannelId;
                    var4 = var4.bind(var7)();
                    var6 = var5.bind(var6)(var4);
                    var4 = null;
                    var5 = var4 == var6;
                    var4 = undefined;
                    if(var5) { _fun0006_ip = 97; continue _fun0006 }
 87:
                    var5 = var6.getGuildId;
                    var4 = var5.bind(var6)();
 97:
                    var2 = var3 === var4;
 101:
                    if(var2) { _fun0006_ip = 133; continue _fun0006 }
 104:
                    var5 = _closure1_slot2;
                    var4 = null;
                    var4 = var4 != var5;
                    if(!var4) { _fun0006_ip = 130; continue _fun0006 }
 117:
                    var5 = _closure1_slot2;
                    var5 = var5.guildId;
                    var4 = var5 === var3;
 130:
                    var2 = var4;
 133:
                    if(var2) { _fun0006_ip = 188; continue _fun0006 }
 136:
                    var6 = _closure1_slot24;
                    var5 = var6.clearWithoutFlushing;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var3, var4);
                    var4 = _closure2_slot1;
                    if(!var4) { _fun0006_ip = 188; continue _fun0006 }
 166:
                    var2 = _closure2_slot2;
                    var4 = _closure1_slot24;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var3);
                    var2[var3] = var1;
 188:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 22;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEmpty;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0005_ip = 127; continue _fun0005 }
 80:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 21;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SUBSCRIPTIONS_FLUSH';
            var2['type'] = var6;
            var2['subscriptions'] = var5;
            var2 = var3.bind(var4)(var2);
 127:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function subscribe(arg1) {
        var3 = _closure1_slot24;
        var2 = var3.subscribeToGuild;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot29 = var1;
    var11 = function handleConnectionOpenOrResumed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var2 = 'CONNECTION_OPEN';
            if(!(var2 === var4)) { _fun0007_ip = 41; continue _fun0007 }
 24:
            var5 = _closure1_slot28;
            var4 = true;
            var2 = false;
            var2 = var5.bind(var1)(var4, var2);
 41:
            var5 = _closure1_slot21;
            var4 = var5.getGuildId;
            var5 = var4.bind(var5)();
            var4 = null;
            if(!(var4 != var5)) { _fun0007_ip = 89; continue _fun0007 }
 64:
            var4 = _closure1_slot29;
            var7 = _closure1_slot20;
            var6 = var7.getChannelId;
            var6 = var6.bind(var7)(var5);
            var4 = var4.bind(var1)(var5, var1);
 89:
            var5 = {};
            _closure2_slot0 = var5;
            var6 = _closure1_slot24;
            var4 = var6.forEach;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot17;
                    var2 = var3.getGuild;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 53; continue _fun0008 }
 26:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot24;
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var4);
                    var3[var4] = var2;
                    _fun0008_ip = 71; continue _fun0008;
 53:
                    var3 = _closure1_slot24;
                    var2 = var3.clearWithoutFlushing;
                    var1 = true;
                    var1 = var2.bind(var3)(var4, var1);
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 22;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEmpty;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0007_ip = 195; continue _fun0007 }
 148:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 21;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SUBSCRIPTIONS_FLUSH';
            var2['type'] = var6;
            var2['subscriptions'] = var5;
            var2 = var3.bind(var4)(var2);
 195:
            return var1;
        }
    };
    var10 = function handleChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.channelId;
            var3 = _closure1_slot15;
            var1 = var3.isUnavailable;
            var1 = var1.bind(var3)(var4);
            var1 = !var1;
            if(!var1) { _fun0009_ip = 50; continue _fun0009 }
 37:
            var3 = _closure1_slot29;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var1 = false;
 50:
            return var1;
        }
    };
    var4 = function resubscribe() {
        var3 = _closure1_slot29;
        var4 = _closure1_slot21;
        var2 = var4.getGuildId;
        var2 = var2.bind(var4)();
        var4 = _closure1_slot20;
        var1 = var4.getChannelId;
        var1 = var1.bind(var4)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot30 = var4;
    var1 = function handleSpotifyUpdate() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = _closure1_slot10;
            var1 = var3.getSyncingWith;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 159; continue _fun0010 }
 26:
            var6 = var3.userId;
            var3 = _closure1_slot2;
            if(!(var1 != var3)) { _fun0010_ip = 52; continue _fun0010 }
 39:
            var3 = _closure1_slot2;
            var3 = var3.userId;
            if(!(var3 !== var6)) { _fun0010_ip = 155; continue _fun0010 }
 52:
            var4 = _closure1_slot19;
            var3 = var4.isFriend;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0010_ip = 151; continue _fun0010 }
 70:
            var4 = _closure1_slot16;
            var3 = var4.memberOf;
            var8 = var3.bind(var4)(var6);
            var3 = var8.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0010_ip = 147; continue _fun0010 }
 96:
            var7 = _closure1_slot8;
            var5 = undefined;
            var3 = 1;
            var3 = var7.bind(var5)(var8, var3);
            var5 = var3[var4];
            var3 = {};
            var3['guildId'] = var5;
            var3['userId'] = var6;
            var _closure1_slot2 = var3;
            var4 = _closure1_slot24;
            var3 = var4.subscribeUser;
            var3 = var3.bind(var4)(var5, var6);
            _fun0010_ip = 205; continue _fun0010;
 147:
            var3 = false;
            return var3;
 151:
            var3 = false;
            return var3;
 155:
            var3 = false;
            return var3;
 159:
            var3 = _closure1_slot2;
            if(!(var1 != var3)) { _fun0010_ip = 205; continue _fun0010 }
 167:
            var6 = _closure1_slot24;
            var5 = var6.unsubscribeUser;
            var3 = _closure1_slot2;
            var4 = var3.guildId;
            var3 = _closure1_slot2;
            var3 = var3.userId;
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot2 = var1;
 205:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EVERYONE_CHANNEL_ID;
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ChannelSections;
    var8 = var2.ChannelTypes;
    var _closure1_slot22 = var8;
    var2 = var2.FAVORITES;
    var _closure1_slot23 = var2;
    var2 = 20;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = var12.prototype;
    var8 = Object.create(var2, {constructor: {value: var12}});
    var15 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var7 = var5;
            var2 = null;
            for(var3 in var7)
 19:
            {
 28:
                var9 = var3;
                var11 = _closure1_slot17;
                var10 = var11.getGuild;
                var10 = var10.bind(var11)(var9);
                var10 = var2 != var10;
                if(var10) { _fun0011_ip = 67; continue _fun0011 }
 52:
                var12 = _closure1_slot15;
                var11 = var12.isUnavailable;
                var10 = var11.bind(var12)(var9);
 67:
                if(var10) { _fun0011_ip = 19; continue _fun0011 }
 70:
                var9 = delete var5[var9];
                _fun0011_ip = 19; continue _fun0011;
            }
 76:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GUILD_SUBSCRIPTIONS_FLUSH';
            var2['type'] = var6;
            var2['subscriptions'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var16 = var8;
    var2 = new var16[var12](var15, var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot24 = var2;
    var2 = 23;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSubscriptionsStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 69; continue _fun0012 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 105; continue _fun0012;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var11 = var4.waitFor;
            var19 = _closure1_slot14;
            var18 = _closure1_slot17;
            var17 = _closure1_slot21;
            var16 = _closure1_slot20;
            var15 = _closure1_slot18;
            var14 = _closure1_slot11;
            var5 = _closure1_slot13;
            var12 = _closure1_slot9;
            var20 = var4;
            var13 = var5;
            var2 = var20[var11](var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var6 = var4.syncWith;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot31;
            var2 = var6.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot30;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSubscribedThreadIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot24;
            var1 = var2.getSubscribedThreadIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isSubscribedToThreads';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot24;
            var2 = var3.isSubscribedToThreads;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSubscribedToAnyMember';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot24;
            var2 = var3.isSubscribedToAnyMember;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isSubscribedToMemberUpdates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot24;
            var2 = var3.isSubscribedToMemberUpdates;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isSubscribedToAnyGuildChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var4 = var1.channels;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0013_ip = 64; continue _fun0013 }
 35:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var4);
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 64:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildSubscriptionsStore';
    var8['displayName'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var11;
    var2['CONNECTION_RESUMED'] = var11;
    var11 = function handleConnectionClosed() {
        var3 = _closure1_slot28;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var2, var2);
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var11;
    var11 = function handleIdle(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var1 = var1.idle;
            var4 = false;
            if(var1) { _fun0014_ip = 16; continue _fun0014 }
 14:
            return var4;
 16:
            var3 = _closure1_slot28;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var2['IDLE'] = var11;
    var11 = function handleLogout() {
        var2 = _closure1_slot24;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var11;
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleGuildCreate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var3 = var1.id;
            var4 = _closure1_slot21;
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            if(!(var3 === var2)) { _fun0015_ip = 44; continue _fun0015 }
 34:
            var2 = _closure1_slot30;
            var1 = undefined;
            var1 = var2.bind(var1)();
 44:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot24;
        var3 = var4.clearWithoutFlushing;
        var2 = var1.id;
        var1 = true;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var10;
    var10 = function handleMembersAdd(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var3 = var2.userIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot11;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                if(!(var4 !== var2)) { _fun0016_ip = 47; continue _fun0016 }
 24:
                var3 = _closure1_slot24;
                var2 = var3.subscribeUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
 47:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var2['GUILD_SUBSCRIPTIONS_MEMBERS_ADD'] = var10;
    var10 = function handleMembersRemove(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var3 = var2.userIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot24;
            var3 = var4.unsubscribeUser;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var2['GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE'] = var10;
    var10 = function handleAddMemberUpdatesGuildSubscription(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot24;
        var1 = var2.subscribeToMemberUpdates;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES'] = var10;
    var10 = function handleRemoveMemberUpdatesGuildSubscription(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot24;
        var1 = var2.unsubscribeFromMemberUpdates;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES'] = var10;
    var10 = function handleChannel(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.channelId;
            var4 = var1.ranges;
            var1 = _closure1_slot12;
            if(!(var5 !== var1)) { _fun0017_ip = 242; continue _fun0017 }
 33:
            var3 = _closure1_slot14;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var5);
            var3 = null;
            var7 = var3 == var8;
            var1 = false;
            if(var7) { _fun0017_ip = 259; continue _fun0017 }
 61:
            var7 = var8.getGuildId;
            var11 = var7.bind(var8)();
            var7 = var11 !== var6;
            if(!var7) { _fun0017_ip = 86; continue _fun0017 }
 78:
            var9 = _closure1_slot23;
            var7 = var6 === var9;
 86:
            if(!var7) { _fun0017_ip = 104; continue _fun0017 }
 89:
            var9 = _closure1_slot24;
            var7 = var9.subscribeToGuild;
            var7 = var7.bind(var9)(var11);
 104:
            if(!(var3 != var8)) { _fun0017_ip = 121; continue _fun0017 }
 108:
            var3 = var8.isThread;
            var3 = var3.bind(var8)();
            if(var3) { _fun0017_ip = 140; continue _fun0017 }
 121:
            var7 = _closure1_slot24;
            var3 = var7.subscribeChannel;
            var3 = var3.bind(var7)(var11, var5, var4);
            _fun0017_ip = 237; continue _fun0017;
 140:
            var9 = var8.type;
            var7 = _closure1_slot22;
            var7 = var7.ANNOUNCEMENT_THREAD;
            if(!(var9 !== var7)) { _fun0017_ip = 211; continue _fun0017 }
 159:
            var7 = var8.isActiveThread;
            var7 = var7.bind(var8)();
            var9 = !var7;
            var7 = !var9;
            if(var9) { _fun0017_ip = 209; continue _fun0017 }
 178:
            var12 = _closure1_slot24;
            var10 = var12.subscribeThreadMemberList;
            var13 = _closure1_slot20;
            var9 = var13.getChannelId;
            var9 = var9.bind(var13)();
            var7 = var10.bind(var12)(var11, var5, var9);
 209:
            _fun0017_ip = 234; continue _fun0017;
 211:
            var10 = _closure1_slot24;
            var9 = var10.subscribeChannel;
            var8 = var8.parent_id;
            var7 = var9.bind(var10)(var11, var8, var4);
 234:
            var3 = var7;
 237:
            var1 = var3;
            _fun0017_ip = 259; continue _fun0017;
 242:
            var3 = _closure1_slot24;
            var2 = var3.subscribeChannel;
            var1 = var2.bind(var3)(var6, var5, var4);
 259:
            return var1;
        }
    };
    var2['GUILD_SUBSCRIPTIONS_CHANNEL'] = var10;
    var10 = function handleGuild(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot24;
        var1 = var2.subscribeToGuild;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['GUILD_SUBSCRIPTIONS'] = var10;
    var10 = function handleChannelPreload(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var1 = var1.channelId;
        var2 = _closure1_slot29;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var1 = false;
        return var1;
    };
    var2['CHANNEL_PRELOAD'] = var10;
    var10 = function handleInboxOpen(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildIds;
            var1 = _closure1_slot26;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = null;
            if(var1) { _fun0018_ip = 76; continue _fun0018 }
 37:
            var8 = var2.value;
            if(!(var3 != var8)) { _fun0018_ip = 61; continue _fun0018 }
 46:
            var7 = _closure1_slot24;
            var1 = var7.subscribeToGuild;
            var1 = var1.bind(var7)(var8);
 61:
            var7 = var4.bind(var5)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0018_ip = 37; continue _fun0018 }
 76:
            var1 = false;
            return var1;
        }
    };
    var2['INBOX_OPEN'] = var10;
    var10 = function handleThreadUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var1 = var2.isArchivedThread;
            var1 = var1.bind(var2)();
            if(var1) { _fun0019_ip = 117; continue _fun0019 }
 21:
            var1 = var2.isActiveThread;
            var1 = var1.bind(var2)();
            var3 = !var1;
            if(var3) { _fun0019_ip = 63; continue _fun0019 }
 37:
            var4 = _closure1_slot20;
            var1 = var4.getChannelId;
            var4 = var1.bind(var4)();
            var1 = var2.id;
            var3 = var4 !== var1;
 63:
            var1 = !var3;
            if(var3) { _fun0019_ip = 115; continue _fun0019 }
 69:
            var7 = _closure1_slot24;
            var6 = var7.subscribeThreadMemberList;
            var5 = var2.guild_id;
            var4 = var2.id;
            var8 = _closure1_slot20;
            var3 = var8.getChannelId;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var5, var4, var3);
            var1 = undefined;
 115:
            _fun0019_ip = 146; continue _fun0019;
 117:
            var5 = _closure1_slot24;
            var4 = var5.unsubscribeThreadMemberList;
            var3 = var2.guild_id;
            var2 = var2.id;
            var1 = var4.bind(var5)(var3, var2);
 146:
            return var1;
        }
    };
    var2['THREAD_UPDATE'] = var10;
    var9 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot24;
        var3 = var4.unsubscribeThreadMemberList;
        var2 = var1.guild_id;
        var1 = var1.id;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['THREAD_DELETE'] = var9;
    var2['THREAD_LIST_SYNC'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildSubscriptionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();