// app/modules/recent_channels/NewChannelsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot26;
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
            var7 = _closure1_slot26;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var1 = function guildHasCommunity(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot14;
            var3 = var4.getGuild;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var4 = var3.features;
            var3 = var4.has;
            var1 = _closure1_slot19;
            var1 = var1.COMMUNITY;
            var2 = var3.bind(var4)(var1);
case 39:
            var1 = true;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var9 = function seedCommunityBaseline() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot23;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot25;
            var3 = _closure1_slot14;
            var1 = var3.getGuildIds;
            var1 = var1.bind(var3)();
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var7 = var2.value;
            var1 = _closure1_slot27;
            var1 = var1.bind(var4)(var7);
            if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var6 = _closure1_slot23;
            var1 = var6.add;
            var1 = var1.bind(var6)(var7);
case 43:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 41:
            var1 = false;
            return var1;
        }
    };
    var1 = function maybeAckViewedChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot21;
            var8 = var3[var6];
            var5 = null;
            var3 = var5 != var8;
            if(!var3) { _fun0007_ip = 45; continue _fun0007 }
case 40:
            var3 = var5 != var7;
case 45:
            if(!var3) { _fun0007_ip = 9; continue _fun0007 }
case 46:
            var4 = var8.has;
            var3 = var4.bind(var8)(var7);
case 9:
            if(!var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var4 = _closure1_slot16;
            var3 = var4.isOptInEnabled;
            var3 = var3.bind(var4)(var6);
            var3 = !var3;
            if(var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var8 = var4.bind(var6)(var7);
            var4 = var5 != var8;
            if(!var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var6 = var8.isThread;
            var4 = var6.bind(var8)();
case 51:
            var3 = var4;
case 49:
            if(var3) { _fun0007_ip = 53; continue _fun0007 }
case 17:
            var6 = _closure1_slot15;
            var4 = var6.ackMessageId;
            var4 = var4.bind(var6)(var7);
            var3 = var5 != var4;
case 53:
            if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 54:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.wait;
            var1 = function() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 17;
                var2 = var8[var2];
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var5 = var6.ack;
                var4 = _closure2_slot0;
                var3 = {};
                var2 = _closure1_slot17;
                var2 = var2.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED;
                var3['object'] = var2;
                var2 = _closure1_slot18;
                var2 = var2.ACK_AUTOMATIC;
                var3['objectType'] = var2;
                var2 = _closure1_slot1;
                var1 = 18;
                var1 = var8[var1];
                var2 = var2.bind(var7)(var1);
                var1 = var2.atPreviousMillisecond;
                var9 = var1.bind(var2)(var4);
                var14 = var6;
                var13 = var4;
                var12 = var3;
                var11 = true;
                var10 = true;
                var1 = var14[var5](var13, var12, var11, var10, var9, var8);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 47:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function initializeNewChannels(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot21;
            var5 = var1[var3];
            var1 = null;
            if(!(var1 == var5)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var6 = _closure1_slot11;
            var5 = var6.getChannels;
            var6 = var5.bind(var6)(var3);
            var5 = _closure1_slot12;
            var7 = var6[var5];
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var8 = var6.bind(var7)(var5);
            var7 = _closure1_slot13;
            var6 = var7.getMember;
            var9 = _closure1_slot9;
            var5 = var9.getId;
            var5 = var5.bind(var9)();
            var5 = var6.bind(var7)(var3, var5);
            var6 = var1 == var5;
            var7 = undefined;
            if(var6) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var7 = var5.joinedAt;
case 57:
            if(!(var1 != var7)) { _fun0008_ip = 55; continue _fun0008 }
case 59:
            var6 = _closure1_slot21;
            var1 = global;
            var5 = var1.Set;
            var9 = var5.prototype;
            var9 = Object.create(var9, {constructor: {value: var5}});
            var12 = var9;
            var5 = new var12[var5](var11);
            var5 = var5 instanceof Object ? var5 : var9;
            var6[var3] = var5;
            var5 = var1.Date;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var12 = var6;
            var11 = var7;
            var5 = new var12[var5](var11, var10);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = var6.getTime;
            var5 = var5.bind(var6)();
            var _closure2_slot1 = var5;
            var6 = var8.length;
            var5 = 0;
            if(!(var5 !== var6)) { _fun0008_ip = 55; continue _fun0008 }
case 60:
            var5 = _closure1_slot21;
            var7 = var1.Set;
            var6 = var8.filter;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var1 = var4[var1];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var1);
                    var1 = var3.extractTimestamp;
                    var4 = var1.bind(var3)(var5);
                    var3 = _closure1_slot15;
                    var1 = var3.getTrackedAckMessageId;
                    var3 = var1.bind(var3)(var5);
                    var1 = null;
                    var1 = var1 == var3;
                    if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = global;
                    var6 = var3.Date;
                    var3 = var6.now;
                    var6 = var3.bind(var6)();
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 14;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.Millis;
                    var3 = var3.WEEK;
                    var3 = var6 - var3;
                    var1 = var4 > var3;
case 61:
                    if(!var1) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var7 = _closure1_slot8;
                    var6 = var7.getGuildRecentsDismissedAt;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var1 = var4 > var3;
case 63:
                    if(!var1) { _fun0009_ip = 18; continue _fun0009 }
case 65:
                    var3 = _closure2_slot1;
                    var1 = var4 > var3;
case 18:
                    if(!var1) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var4 = _closure1_slot16;
                    var3 = var4.isChannelOrParentOptedIn;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = !var2;
case 66:
                    return var1;
                }
            };
            var11 = var6.bind(var8)(var4);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var4 = new var12[var7](var11, var10);
            var4 = var4 instanceof Object ? var4 : var6;
            var5[var3] = var4;
            var2 = _closure1_slot22;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
case 55:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function pruneNewChannels() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 18;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.keys;
        var2 = _closure1_slot21;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = _closure1_slot21;
            var9 = var4[var3];
            var2 = _closure1_slot21;
            var4 = global;
            var5 = var4.Set;
            var6 = new Array(0);
            var8 = 0;
            var10 = var6;
            var4 = arraySpread(var10, var9, var8);
            var4 = var6.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot16;
                var3 = var4.isChannelOrParentOptedIn;
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var10 = var4.bind(var6)(var1);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var11 = var4;
            var1 = new var11[var5](var10, var9);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot30 = var1;
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
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var10 = var6[var8];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AnalyticsObjects;
    var _closure1_slot17 = var10;
    var10 = var8.AnalyticsObjectTypes;
    var _closure1_slot18 = var10;
    var8 = var8.GuildFeatures;
    var _closure1_slot19 = var8;
    var8 = var2.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot20 = var8;
    var8 = {};
    var _closure1_slot21 = var8;
    var8 = {};
    var _closure1_slot22 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot23 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function NewChannelsStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 70; continue _fun0010;
case 68:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 70:
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
            var19 = _closure1_slot9;
            var18 = _closure1_slot10;
            var17 = _closure1_slot11;
            var16 = _closure1_slot13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot15;
            var13 = _closure1_slot16;
            var12 = _closure1_slot8;
            var20 = var4;
            var2 = var20[var11](var19, var18, var17, var16, var15, var14, var13, var12, var11);
            var3 = var4.syncWith;
            var5 = _closure1_slot16;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot30;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getNewChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                var4 = _closure1_slot21;
                var4 = var4[var3];
                var1 = var2 == var4;
case 71:
                if(!var1) { _fun0011_ip = 73; continue _fun0011 }
case 7:
                var4 = _closure1_slot29;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
case 73:
                if(!(var2 != var3)) { _fun0011_ip = 62; continue _fun0011 }
case 74:
                var1 = _closure1_slot21;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0011_ip = 3; continue _fun0011 }
case 62:
                var1 = _closure1_slot20;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldIndicateNewChannel';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var4 = null;
                if(!(var4 != var5)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                var2 = _closure1_slot14;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var5);
                var2 = var4 == var1;
                if(var2) { _fun0012_ip = 68; continue _fun0012 }
case 77:
                var8 = var1.features;
                var7 = var8.has;
                var1 = _closure1_slot19;
                var1 = var1.COMMUNITY;
                var1 = var7.bind(var8)(var1);
                var2 = !var1;
case 68:
                var1 = !var2;
                if(var2) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                var2 = var4 != var5;
                if(!var2) { _fun0012_ip = 52; continue _fun0012 }
case 80:
                var7 = _closure1_slot21;
                var7 = var7[var5];
                var2 = var4 == var7;
case 52:
                if(!var2) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var7 = _closure1_slot29;
                var2 = undefined;
                var2 = var7.bind(var2)(var5);
case 81:
                var2 = _closure1_slot21;
                var7 = var2[var5];
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                var5 = var7.has;
                var2 = var5.bind(var7)(var6);
case 83:
                if(!var2) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                var5 = _closure1_slot15;
                var3 = var5.getTrackedAckMessageId;
                var3 = var3.bind(var5)(var6);
                var2 = var4 == var3;
case 85:
                var1 = var2;
case 78:
                return var1;
case 75:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'NewChannelsStore';
    var8['displayName'] = var2;
    var2 = 16;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleBulkClearRecents(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var5 = var1.channelIds;
            var4 = _closure1_slot21;
            var6 = var4[var2];
            var4 = null;
            if(!(var4 != var6)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
            var4 = var5.forEach;
            var3 = function(arg1) {
                var2 = _closure1_slot21;
                var1 = _closure2_slot0;
                var3 = var2[var1];
                var2 = var3.delete;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot21;
            var3 = var3[var2];
            var4 = var3.size;
            var3 = 0;
            if(!(var3 === var4)) { _fun0013_ip = 89; continue _fun0013 }
case 44:
            var1 = _closure1_slot21;
            var1 = delete var1[var2];
case 89:
            var1 = undefined;
            return var1;
case 87:
            var1 = false;
            return var1;
        }
    };
    var2['BULK_CLEAR_RECENTS'] = var10;
    var10 = function CHANNEL_ACK() {
        var1 = true;
        return var1;
    };
    var2['CHANNEL_ACK'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.channelId;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0014_ip = 90; continue _fun0014 }
case 91:
            var4 = _closure1_slot21;
            var4 = var4[var5];
            if(!(var2 != var4)) { _fun0014_ip = 92; continue _fun0014 }
case 88:
            var4 = _closure1_slot22;
            var6 = var4[var5];
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var9 = var4.bind(var7)();
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var7 = undefined;
            var4 = var10.bind(var7)(var4);
            var4 = var4.Millis;
            var4 = var4.HOUR;
            var4 = var9 - var4;
            if(!(!(var6 < var4))) { _fun0014_ip = 92; continue _fun0014 }
case 51:
            var6 = var2 != var8;
            var2 = false;
            if(!var6) { _fun0014_ip = 93; continue _fun0014 }
case 94:
            var6 = _closure1_slot28;
            var6 = var6.bind(var7)(var5, var8);
            var2 = false;
            _fun0014_ip = 93; continue _fun0014;
case 92:
            var4 = _closure1_slot29;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = true;
case 93:
            var1 = var2;
case 90:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleSidebarViewChannel(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.channelId;
            var5 = var1.sidebarType;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0015_ip = 68; continue _fun0015 }
case 38:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 15;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.SidebarType;
            var2 = var2.VIEW_CHANNEL;
            var1 = var5 !== var2;
case 68:
            if(var1) { _fun0015_ip = 95; continue _fun0015 }
case 5:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
case 95:
            var1 = false;
            return var1;
        }
    };
    var2['SIDEBAR_VIEW_CHANNEL'] = var10;
    var10 = function handleSidebarViewGuild(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.baseChannelId;
            var1 = null;
            if(!(var1 != var4)) { _fun0016_ip = 96; continue _fun0016 }
case 33:
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
case 96:
            var1 = false;
            return var1;
        }
    };
    var2['SIDEBAR_VIEW_GUILD'] = var10;
    var2['CONNECTION_OPEN'] = var9;
    var2['CACHE_LOADED'] = var9;
    var9 = function handleGuildCreate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = _closure1_slot27;
            var4 = var1.id;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            if(!var3) { _fun0017_ip = 9; continue _fun0017 }
case 7:
            var3 = _closure1_slot23;
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 9:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot27;
            var3 = var1.id;
            var3 = var4.bind(var6)(var3);
            if(!var3) { _fun0018_ip = 97; continue _fun0018 }
case 98:
            var7 = _closure1_slot23;
            var6 = var7.has;
            var4 = var1.id;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0018_ip = 97; continue _fun0018 }
case 99:
            var7 = _closure1_slot23;
            var6 = var7.add;
            var4 = var1.id;
            var4 = var6.bind(var7)(var4);
            var6 = _closure1_slot21;
            var4 = var1.id;
            var10 = var6[var4];
            _closure2_slot0 = var10;
            var7 = _closure1_slot14;
            var6 = var7.getGuild;
            var4 = var1.id;
            var6 = var6.bind(var7)(var4);
            var4 = global;
            var7 = var4.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var13 = var8;
            var7 = new var13[var7](var12);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure2_slot1 = var7;
            var9 = null;
            var8 = var9 != var6;
            if(!var8) { _fun0018_ip = 21; continue _fun0018 }
case 100:
            var8 = var9 != var10;
case 21:
            if(!var8) { _fun0018_ip = 101; continue _fun0018 }
case 102:
            var9 = var6.rulesChannelId;
            var8 = new Array(2);
            var8[0] = var9;
            var6 = var6.publicUpdatesChannelId;
            var8[1] = var6;
            var6 = var8.forEach;
            var5 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0019_ip = 56; continue _fun0019 }
case 72:
                    var4 = _closure2_slot0;
                    var2 = var4.has;
                    var1 = var2.bind(var4)(var3);
case 56:
                    if(!var1) { _fun0019_ip = 9; continue _fun0019 }
case 40:
                    var2 = _closure2_slot1;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var8)(var5);
case 101:
            var6 = _closure1_slot21;
            var5 = var1.id;
            var6[var5] = var7;
            var6 = _closure1_slot22;
            var5 = var1.id;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var6[var5] = var4;
            var4 = true;
            return var4;
case 97:
            if(var3) { _fun0018_ip = 103; continue _fun0018 }
case 104:
            var3 = _closure1_slot23;
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 103:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_UPDATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot21;
        var3 = var1.id;
        var3 = delete var4[var3];
        var3 = _closure1_slot23;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleChannelCreate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var2 = var1.isVocal;
            var2 = var2.bind(var1)();
            if(var2) { _fun0020_ip = 57; continue _fun0020 }
case 105:
            var5 = _closure1_slot21;
            var4 = var1.guild_id;
            var6 = _closure1_slot21;
            var3 = var1.guild_id;
            var3 = var6[var3];
            var6 = null;
            if(!(var6 == var3)) { _fun0020_ip = 106; continue _fun0020 }
case 48:
            var6 = global;
            var6 = var6.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var9 = var7;
            var6 = new var9[var6](var8);
            var3 = var6 instanceof Object ? var6 : var7;
case 106:
            var5[var4] = var3;
            var3 = _closure1_slot21;
            var2 = var1.guild_id;
            var3 = var3[var2];
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 57:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/recent_channels/NewChannelsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();