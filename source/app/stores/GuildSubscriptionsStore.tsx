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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function prune(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot21;
                    var2 = var4.getGuildId;
                    var2 = var2.bind(var4)();
                    var2 = var3 === var2;
                    if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var5 = _closure1_slot18;
                    var4 = var5.getGuildId;
                    var4 = var4.bind(var5)();
                    var2 = var3 === var4;
case 39:
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var6 = _closure1_slot14;
                    var5 = var6.getChannel;
                    var7 = _closure1_slot20;
                    var4 = var7.getChannelId;
                    var4 = var4.bind(var7)();
                    var6 = var5.bind(var6)(var4);
                    var4 = null;
                    var5 = var4 == var6;
                    var4 = undefined;
                    if(var5) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var5 = var6.getGuildId;
                    var4 = var5.bind(var6)();
case 43:
                    var2 = var3 === var4;
case 41:
                    if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var5 = _closure1_slot2;
                    var4 = null;
                    var4 = var4 != var5;
                    if(!var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var5 = _closure1_slot2;
                    var5 = var5.guildId;
                    var4 = var5 === var3;
case 47:
                    var2 = var4;
case 45:
                    if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var6 = _closure1_slot24;
                    var5 = var6.clearWithoutFlushing;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var3, var4);
                    var4 = _closure2_slot1;
                    if(!var4) { _fun0006_ip = 49; continue _fun0006 }
case 51:
                    var2 = _closure2_slot2;
                    var4 = _closure1_slot24;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var3);
                    var2[var3] = var1;
case 49:
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
            if(var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
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
case 52:
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
case 0:
            var1 = arg1;
            var4 = var1.type;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var2 = 'CONNECTION_OPEN';
            if(!(var2 === var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var5 = _closure1_slot28;
            var4 = true;
            var2 = false;
            var2 = var5.bind(var1)(var4, var2);
case 54:
            var5 = _closure1_slot21;
            var4 = var5.getGuildId;
            var5 = var4.bind(var5)();
            var4 = null;
            if(!(var4 != var5)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var4 = _closure1_slot29;
            var7 = _closure1_slot20;
            var6 = var7.getChannelId;
            var6 = var6.bind(var7)(var5);
            var4 = var4.bind(var1)(var5, var1);
case 56:
            var5 = {};
            _closure2_slot0 = var5;
            var6 = _closure1_slot24;
            var4 = var6.forEach;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot17;
                    var2 = var3.getGuild;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot24;
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var4);
                    var3[var4] = var2;
                    _fun0008_ip = 60; continue _fun0008;
case 58:
                    var3 = _closure1_slot24;
                    var2 = var3.clearWithoutFlushing;
                    var1 = true;
                    var1 = var2.bind(var3)(var4, var1);
case 60:
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
            if(var3) { _fun0007_ip = 24; continue _fun0007 }
case 61:
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
case 24:
            return var1;
        }
    };
    var10 = function handleChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.channelId;
            var3 = _closure1_slot15;
            var1 = var3.isUnavailable;
            var1 = var1.bind(var3)(var4);
            var1 = !var1;
            if(!var1) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var3 = _closure1_slot29;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var1 = false;
case 62:
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
case 0:
            var3 = _closure1_slot10;
            var1 = var3.getSyncingWith;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 64; continue _fun0010 }
case 59:
            var6 = var3.userId;
            var3 = _closure1_slot2;
            if(!(var1 != var3)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var3 = _closure1_slot2;
            var3 = var3.userId;
            if(!(var3 !== var6)) { _fun0010_ip = 67; continue _fun0010 }
case 65:
            var4 = _closure1_slot19;
            var3 = var4.isFriend;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0010_ip = 68; continue _fun0010 }
case 3:
            var4 = _closure1_slot16;
            var3 = var4.memberOf;
            var8 = var3.bind(var4)(var6);
            var3 = var8.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0010_ip = 69; continue _fun0010 }
case 15:
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
            _fun0010_ip = 26; continue _fun0010;
case 69:
            var3 = false;
            return var3;
case 68:
            var3 = false;
            return var3;
case 67:
            var3 = false;
            return var3;
case 64:
            var3 = _closure1_slot2;
            if(!(var1 != var3)) { _fun0010_ip = 26; continue _fun0010 }
case 70:
            var6 = _closure1_slot24;
            var5 = var6.unsubscribeUser;
            var3 = _closure1_slot2;
            var4 = var3.guildId;
            var3 = _closure1_slot2;
            var3 = var3.userId;
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot2 = var1;
case 26:
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
case 0:
            var5 = arg1;
            var7 = var5;
            var2 = null;
            for(var3 in var7)
case 71:
            {
case 38:
                var9 = var3;
                var11 = _closure1_slot17;
                var10 = var11.getGuild;
                var10 = var10.bind(var11)(var9);
                var10 = var2 != var10;
                if(var10) { _fun0011_ip = 34; continue _fun0011 }
case 65:
                var12 = _closure1_slot15;
                var11 = var12.isUnavailable;
                var10 = var11.bind(var12)(var9);
case 34:
                if(var10) { _fun0011_ip = 71; continue _fun0011 }
case 3:
                var9 = delete var5[var9];
                _fun0011_ip = 71; continue _fun0011;
            }
case 72:
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
case 0:
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
                if(var1) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 75; continue _fun0012;
case 73:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 75:
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
case 0:
                var3 = _closure1_slot24;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var4 = var1.channels;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0013_ip = 57; continue _fun0013 }
case 76:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var4);
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
case 57:
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
case 0:
            var1 = arg1;
            var1 = var1.idle;
            var4 = false;
            if(var1) { _fun0014_ip = 77; continue _fun0014 }
case 36:
            return var4;
case 77:
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
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var3 = var1.id;
            var4 = _closure1_slot21;
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            if(!(var3 === var2)) { _fun0015_ip = 78; continue _fun0015 }
case 79:
            var2 = _closure1_slot30;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 78:
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
case 0:
                var4 = arg1;
                var3 = _closure1_slot11;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                if(!(var4 !== var2)) { _fun0016_ip = 80; continue _fun0016 }
case 55:
                var3 = _closure1_slot24;
                var2 = var3.subscribeUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
case 80:
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
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.channelId;
            var4 = var1.ranges;
            var1 = _closure1_slot12;
            if(!(var5 !== var1)) { _fun0017_ip = 81; continue _fun0017 }
case 37:
            var3 = _closure1_slot14;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var5);
            var3 = null;
            var7 = var3 == var8;
            var1 = false;
            if(var7) { _fun0017_ip = 82; continue _fun0017 }
case 11:
            var7 = var8.getGuildId;
            var11 = var7.bind(var8)();
            var7 = var11 !== var6;
            if(!var7) { _fun0017_ip = 13; continue _fun0017 }
case 83:
            var9 = _closure1_slot23;
            var7 = var6 === var9;
case 13:
            if(!var7) { _fun0017_ip = 46; continue _fun0017 }
case 56:
            var9 = _closure1_slot24;
            var7 = var9.subscribeToGuild;
            var7 = var7.bind(var9)(var11);
case 46:
            if(!(var3 != var8)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var3 = var8.isThread;
            var3 = var3.bind(var8)();
            if(var3) { _fun0017_ip = 86; continue _fun0017 }
case 84:
            var7 = _closure1_slot24;
            var3 = var7.subscribeChannel;
            var3 = var3.bind(var7)(var11, var5, var4);
            _fun0017_ip = 87; continue _fun0017;
case 86:
            var9 = var8.type;
            var7 = _closure1_slot22;
            var7 = var7.ANNOUNCEMENT_THREAD;
            if(!(var9 !== var7)) { _fun0017_ip = 88; continue _fun0017 }
case 64:
            var7 = var8.isActiveThread;
            var7 = var7.bind(var8)();
            var9 = !var7;
            var7 = !var9;
            if(var9) { _fun0017_ip = 89; continue _fun0017 }
case 90:
            var12 = _closure1_slot24;
            var10 = var12.subscribeThreadMemberList;
            var13 = _closure1_slot20;
            var9 = var13.getChannelId;
            var9 = var9.bind(var13)();
            var7 = var10.bind(var12)(var11, var5, var9);
case 89:
            _fun0017_ip = 25; continue _fun0017;
case 88:
            var10 = _closure1_slot24;
            var9 = var10.subscribeChannel;
            var8 = var8.parent_id;
            var7 = var9.bind(var10)(var11, var8, var4);
case 25:
            var3 = var7;
case 87:
            var1 = var3;
            _fun0017_ip = 82; continue _fun0017;
case 81:
            var3 = _closure1_slot24;
            var2 = var3.subscribeChannel;
            var1 = var2.bind(var3)(var6, var5, var4);
case 82:
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
case 0:
            var1 = arg1;
            var2 = var1.guildIds;
            var1 = _closure1_slot26;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = null;
            if(var1) { _fun0018_ip = 72; continue _fun0018 }
case 63:
            var8 = var2.value;
            if(!(var3 != var8)) { _fun0018_ip = 11; continue _fun0018 }
case 6:
            var7 = _closure1_slot24;
            var1 = var7.subscribeToGuild;
            var1 = var1.bind(var7)(var8);
case 11:
            var7 = var4.bind(var5)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0018_ip = 63; continue _fun0018 }
case 72:
            var1 = false;
            return var1;
        }
    };
    var2['INBOX_OPEN'] = var10;
    var10 = function handleThreadUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var1 = var2.isArchivedThread;
            var1 = var1.bind(var2)();
            if(var1) { _fun0019_ip = 48; continue _fun0019 }
case 91:
            var1 = var2.isActiveThread;
            var1 = var1.bind(var2)();
            var3 = !var1;
            if(var3) { _fun0019_ip = 92; continue _fun0019 }
case 63:
            var4 = _closure1_slot20;
            var1 = var4.getChannelId;
            var4 = var1.bind(var4)();
            var1 = var2.id;
            var3 = var4 !== var1;
case 92:
            var1 = !var3;
            if(var3) { _fun0019_ip = 93; continue _fun0019 }
case 73:
            var7 = _closure1_slot24;
            var6 = var7.subscribeThreadMemberList;
            var5 = var2.guild_id;
            var4 = var2.id;
            var8 = _closure1_slot20;
            var3 = var8.getChannelId;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var5, var4, var3);
            var1 = undefined;
case 93:
            _fun0019_ip = 94; continue _fun0019;
case 48:
            var5 = _closure1_slot24;
            var4 = var5.unsubscribeThreadMemberList;
            var3 = var2.guild_id;
            var2 = var2.id;
            var1 = var4.bind(var5)(var3, var2);
case 94:
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