// app/modules/guild_home/ActiveChannelsStore.tsx
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function resetStore() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = {};
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function truncateOldMessageData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot12;
            var8 = var1[var3];
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var9 = undefined;
            var11 = var6.bind(var9)(var1);
            var10 = var11.fromTimestamp;
            var1 = global;
            var12 = var1.Date;
            var7 = var12.now;
            var12 = var7.bind(var12)();
            var7 = _closure1_slot10;
            var7 = var12 - var7;
            var7 = var10.bind(var11)(var7);
            var _closure2_slot0 = var7;
            var10 = 9;
            var5 = var5[var10];
            var6 = var6.bind(var9)(var5);
            var5 = var6.findIndex;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var7 = var5.bind(var6)(var8, var4);
            var4 = -1;
            if(!(var4 !== var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var1.Math;
            var5 = var6.max;
            var11 = var8.length;
            var4 = 26;
            var4 = var11 - var4;
            var7 = var5.bind(var6)(var7, var4);
            var5 = _closure1_slot12;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var10];
            var6 = var6.bind(var9)(var4);
            var4 = var6.slice;
            var4 = var4.bind(var6)(var8, var7);
            var5[var3] = var4;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var5 = _closure1_slot12;
            var4 = new Array(0);
            var5[var3] = var4;
case 10:
            var2 = _closure1_slot13;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function addMessage(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot11;
            var3 = arg1;
            var4 = var4[var3];
            var3 = var4.add;
            var3 = var3.bind(var4)(var2);
            var3 = _closure1_slot13;
            var6 = var3[var2];
            var4 = null;
            var3 = var4 == var6;
            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = 300000;
            var6 = var6 + var5;
            var5 = global;
            var7 = var5.Date;
            var5 = var7.now;
            var5 = var5.bind(var7)();
            var3 = var6 > var5;
case 11:
            if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = _closure1_slot17;
            var3 = undefined;
            var3 = var5.bind(var3)(var2);
case 13:
            var3 = _closure1_slot12;
            var3 = var3[var2];
            if(!(var4 == var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot12;
            var3 = new Array(0);
            var4[var2] = var3;
case 15:
            var1 = _closure1_slot12;
            var3 = var1[var2];
            var2 = var3.push;
            var1 = {};
            var4 = arg3;
            var1['id'] = var4;
            var4 = arg4;
            var1['userId'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot12;
        var3 = var1.id;
        var3 = delete var4[var3];
        var2 = _closure1_slot13;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isGuildHomeChannel;
    var _closure1_slot9 = var2;
    var2 = 900000;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ActiveChannelsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 19:
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
        var1 = 'getActiveChannelsFetchStatus';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getActiveChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getChannelMessageData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot11;
                var1 = var1[var4];
                var2 = null;
                var1 = var2 == var1;
                if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var3 = _closure1_slot14;
                var3 = var3[var4];
                var2 = var2 != var3;
                if(!var2) { _fun0005_ip = 12; continue _fun0005 }
case 22:
                var2 = var3.loading;
case 12:
                var1 = !var2;
case 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ActiveChannelsStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleRefreshChannels(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var4 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)(var6);
            if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 23; continue _fun0006 }
case 12:
            var6 = _closure1_slot11;
            var10 = var6[var4];
            if(!(var2 != var10)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var6 = var10.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot17;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var4 = _closure1_slot12;
                    var4 = var4[var3];
                    var5 = null;
                    var6 = var5 == var4;
                    var5 = undefined;
                    if(var6) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var5 = var4.length;
case 27:
                    var4 = 0;
                    if(!(var4 === var5)) { _fun0007_ip = 29; continue _fun0007 }
case 20:
                    var2 = _closure1_slot12;
                    var2 = delete var2[var3];
case 29:
                    return var1;
                }
            };
            var2 = var6.bind(var10)(var2);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var2 = var7[var2];
            var8 = var6.bind(var1)(var2);
            var7 = var8.chain;
            var2 = global;
            var9 = var2.Array;
            var6 = var9.from;
            var6 = var6.bind(var9)(var10);
            var8 = var7.bind(var8)(var6);
            var7 = var8.filter;
            var6 = function(arg1) {
                var2 = _closure1_slot12;
                var1 = arg1;
                var1 = var1 in var2;
                return var1;
            };
            var7 = var7.bind(var8)(var6);
            var6 = var7.sortBy;
            var5 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot12;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 30; continue _fun0008 }
case 7:
                    var2 = var3.length;
case 30:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var1 = var2;
case 31:
                    var1 = -var1;
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.value;
            var11 = var5.bind(var6)();
            var3 = _closure1_slot11;
            var2 = var2.Set;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var12 = var5;
            var2 = new var12[var2](var11, var10);
            var2 = var2 instanceof Object ? var2 : var5;
            var3[var4] = var2;
            return var1;
case 25:
            var1 = false;
            return var1;
case 23:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var10 = function handleMessageCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var4 = var1.message;
            var2 = var1.optimistic;
            var1 = var1.isPushNotification;
            if(var2) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            if(var1) { _fun0009_ip = 33; continue _fun0009 }
case 35:
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var8);
            var3 = null;
            if(!(var3 != var1)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
            var7 = var1.guild_id;
            var1 = var3 != var7;
            if(!var1) { _fun0009_ip = 38; continue _fun0009 }
case 39:
            var2 = _closure1_slot11;
            var2 = var2[var7];
            var2 = var3 != var2;
            if(!var2) { _fun0009_ip = 40; continue _fun0009 }
case 41:
            var6 = _closure1_slot18;
            var5 = var4.id;
            var9 = var4.author;
            var10 = var3 == var9;
            var4 = undefined;
            if(var10) { _fun0009_ip = 42; continue _fun0009 }
case 19:
            var4 = var9.id;
case 42:
            var15 = undefined;
            var14 = var7;
            var13 = var8;
            var12 = var5;
            var11 = var4;
            var4 = var15[var6](var14, var13, var12, var11, var10);
            var2 = undefined;
case 40:
            var1 = var2;
case 38:
            return var1;
case 36:
            var1 = false;
            return var1;
case 33:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot11;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var10;
    var2['CHANNEL_DELETE'] = var9;
    var2['THREAD_DELETE'] = var9;
    var9 = function handleActiveChannelsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot14;
        var1 = {'loading': true, 'error': null};
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var1['fetchedAt'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_CHANNELS_FETCH_START'] = var9;
    var9 = function handleActiveChannelsFetchSuccess(arg1) {
        var2 = arg1;
        var5 = var2.guildId;
        var _closure2_slot0 = var5;
        var3 = var2.channels;
        var7 = _closure1_slot14;
        var6 = {'loading': false, 'error': null};
        var2 = global;
        var9 = var2.Date;
        var8 = var9.now;
        var8 = var8.bind(var9)();
        var6['fetchedAt'] = var8;
        var7[var5] = var6;
        var4 = _closure1_slot11;
        var2 = var2.Set;
        var6 = var2.prototype;
        var6 = Object.create(var6, {constructor: {value: var2}});
        var11 = var6;
        var2 = new var11[var2](var10);
        var2 = var2 instanceof Object ? var2 : var6;
        var4[var5] = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.channel_id;
            var _closure3_slot0 = var3;
            var3 = var2.messages;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = _closure1_slot18;
                var10 = _closure2_slot0;
                var9 = _closure3_slot0;
                var8 = var1.message_id;
                var7 = var1.user_id;
                var1 = undefined;
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_CHANNELS_FETCH_SUCCESS'] = var9;
    var9 = function handleActiveChannelsFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.error;
        var2 = _closure1_slot14;
        var1 = {'loading': false, 'error': null, 'fetchedAt': null};
        var1['error'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['ACTIVE_CHANNELS_FETCH_FAILURE'] = var9;
    var4 = function handleConnectionOpen() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = var3.getGuildId;
            var5 = var1.bind(var3)();
            var1 = null;
            if(!(var1 == var5)) { _fun0010_ip = 22; continue _fun0010 }
case 21:
            var4 = _closure1_slot16;
            var3 = undefined;
            var3 = var4.bind(var3)();
            _fun0010_ip = 43; continue _fun0010;
case 22:
            var3 = _closure1_slot14;
            var6 = var3[var5];
            var3 = _closure1_slot11;
            var4 = var3[var5];
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var3 = var4;
            if(!(var1 == var3)) { _fun0010_ip = 14; continue _fun0010 }
case 5:
            var3 = new Array(0);
case 14:
            var10 = var8.bind(var9)(var3);
            var9 = var10.reduce;
            var8 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var2 = _closure1_slot12;
                    var2 = var2[var3];
                    var4 = null;
                    if(!(var4 == var2)) { _fun0011_ip = 44; continue _fun0011 }
case 21:
                    var2 = new Array(0);
case 44:
                    var1[var3] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3 = var9.bind(var10)(var8, var3);
            var9 = _closure1_slot16;
            var8 = undefined;
            var9 = var9.bind(var8)();
            var9 = var7.Date;
            var7 = var9.now;
            var7 = var7.bind(var9)();
            var9 = var1 == var6;
            if(var9) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var8 = var6.fetchedAt;
case 45:
            var9 = var1 != var8;
            var1 = 0;
            if(!var9) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var1 = var8;
case 47:
            var7 = var7 - var1;
            var1 = _closure1_slot10;
            if(!(var7 < var1)) { _fun0010_ip = 43; continue _fun0010 }
case 49:
            var1 = {};
            var1[var5] = var6;
            _closure1_slot14 = var1;
            var1 = {};
            var1[var5] = var4;
            _closure1_slot11 = var1;
            var1 = {};
            var12 = var1;
            var11 = var3;
            var3 = copyDataProperties(var12, var11);
            _closure1_slot12 = var1;
case 43:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_home/ActiveChannelsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 26;
    var3['MAX_STORED_MESSAGES'] = var2;
    return var1;
})();