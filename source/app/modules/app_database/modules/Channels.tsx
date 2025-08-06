// app/modules/app_database/modules/Channels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromServer;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function Channels() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['privateChannels'] = var2;
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleBackgroundSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CHANNEL_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.putOne;
                var1 = arg1;
                var2 = var1.channel;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_CREATE'] = var5;
            var5 = function CHANNEL_DELETE(arg1, arg2) {
                var1 = arg1;
                var5 = _closure3_slot0;
                var4 = var5.deleteOne;
                var2 = var1.channel;
                var3 = var2.guild_id;
                var1 = var1.channel;
                var2 = var1.id;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var2['CHANNEL_DELETE'] = var5;
            var5 = function CHANNEL_RECIPIENT_ADD(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelRecipientAdd;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_RECIPIENT_ADD'] = var5;
            var5 = function CHANNEL_RECIPIENT_REMOVE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelRecipientRemove;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_RECIPIENT_REMOVE'] = var5;
            var5 = function CHANNEL_UPDATES(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.putMany;
                var1 = arg1;
                var2 = var1.channels;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_UPDATES'] = var5;
            var5 = function CONNECTION_OPEN_SUPPLEMENTAL(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpenSupplemental;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var5;
            var5 = function CONNECTION_OPEN(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpen;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function GUILD_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_CREATE'] = var5;
            var4 = function GUILD_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_DELETE'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handleBackgroundSync';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = this;
                var _closure3_slot1 = var2;
                var5 = function _loop(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var7 = function asRecord(arg1) {
                            var4 = _closure1_slot4;
                            var1 = _closure4_slot0;
                            var3 = var1.id;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var3 = var2.data_mode;
                        var1 = 'unavailable';
                        if(!(var1 !== var3)) { _fun0005_ip = 213; continue _fun0005 }
 31:
                        var1 = 'partial';
                        if(!(var1 !== var3)) { _fun0005_ip = 103; continue _fun0005 }
 39:
                        var6 = {};
                        var1 = 'full_sync';
                        var6['op'] = var1;
                        var3 = var2.channels;
                        var1 = var3.map;
                        var1 = var1.bind(var3)(var7);
                        var6['items'] = var1;
                        var5 = _closure3_slot1;
                        var4 = var5.handleGuildSynchronize;
                        var3 = var2.id;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var3, var6, var1);
                        _fun0005_ip = 213; continue _fun0005;
 103:
                        var5 = {};
                        var1 = 'update';
                        var5['op'] = var1;
                        var1 = var2.partial_updates;
                        var6 = var1.channels;
                        var3 = null;
                        var4 = var3 == var6;
                        var1 = undefined;
                        if(var4) { _fun0005_ip = 146; continue _fun0005 }
 136:
                        var4 = var6.map;
                        var1 = var4.bind(var6)(var7);
 146:
                        if(!(var3 == var1)) { _fun0005_ip = 154; continue _fun0005 }
 150:
                        var1 = new Array(0);
 154:
                        var5['writes'] = var1;
                        var1 = var2.partial_updates;
                        var1 = var1.deleted_channel_ids;
                        if(!(var3 == var1)) { _fun0005_ip = 179; continue _fun0005 }
 175:
                        var1 = new Array(0);
 179:
                        var5['deletes'] = var1;
                        var4 = _closure3_slot1;
                        var3 = var4.handleGuildSynchronize;
                        var2 = var2.id;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var5, var1);
 213:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = _closure1_slot7;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0004_ip = 81; continue _fun0004 }
 56:
                var2 = var3.value;
                var2 = var5.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0004_ip = 56; continue _fun0004 }
 81:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(14);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleConnectionOpen';
        var1['key'] = var6;
        var6 = function handleConnectionOpen(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var7 = arg2;
                var3 = this;
                var5 = _closure1_slot7;
                var4 = var2.guilds;
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.bind(var1)();
                var4 = var5.done;
                if(var4) { _fun0006_ip = 85; continue _fun0006 }
 41:
                var4 = var5.value;
                var9 = var3.handleGuildSynchronize;
                var8 = var4.id;
                var4 = var4.channels;
                var4 = var9.bind(var3)(var8, var4, var7);
                var8 = var6.bind(var1)();
                var4 = var8.done;
                var5 = var8;
                if(!var4) { _fun0006_ip = 41; continue _fun0006 }
 85:
                var2 = var2.initialPrivateChannels;
                var3['privateChannels'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleConnectionOpenSupplemental';
        var1['key'] = var6;
        var6 = function handleConnectionOpenSupplemental(arg1, arg2) {
            var2 = this;
            var5 = var2.replace;
            var7 = var2.privateChannels;
            var4 = new Array(0);
            var6 = 0;
            var8 = var4;
            var6 = arraySpread(var8, var7, var6);
            var1 = arg1;
            var7 = var1.lazyPrivateChannels;
            var8 = var4;
            var1 = arraySpread(var8, var7, var6);
            var3 = null;
            var1 = arg2;
            var1 = var5.bind(var2)(var3, var4, var1);
            var1 = new Array(0);
            var2['privateChannels'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handleChannelRecipientAdd';
        var1['key'] = var6;
        var6 = function handleChannelRecipientAdd(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var6 = _closure1_slot6;
                var5 = var6.getChannel;
                var3 = var1.channelId;
                var7 = var5.bind(var6)(var3);
                var3 = _closure1_slot5;
                var2 = var3.getId;
                var6 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var7;
                if(!var2) { _fun0007_ip = 61; continue _fun0007 }
 51:
                var3 = var7.isPrivate;
                var2 = var3.bind(var7)();
 61:
                if(!var2) { _fun0007_ip = 108; continue _fun0007 }
 64:
                var3 = var4.putOne;
                var5 = var7.addRecipient;
                var2 = var1.user;
                var2 = var2.id;
                var1 = var1.nick;
                var2 = var5.bind(var7)(var2, var1, var6);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 108:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'handleChannelRecipientRemove';
        var1['key'] = var6;
        var6 = function handleChannelRecipientRemove(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var5 = _closure1_slot6;
                var3 = var5.getChannel;
                var2 = var1.channelId;
                var5 = var3.bind(var5)(var2);
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0008_ip = 47; continue _fun0008 }
 37:
                var3 = var5.isPrivate;
                var2 = var3.bind(var5)();
 47:
                if(!var2) { _fun0008_ip = 86; continue _fun0008 }
 50:
                var3 = var4.putOne;
                var2 = var5.removeRecipient;
                var1 = var1.user;
                var1 = var1.id;
                var2 = var2.bind(var5)(var1);
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
 86:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'handleGuildCreate';
        var1['key'] = var6;
        var6 = function handleGuildCreate(arg1, arg2) {
            var1 = arg1;
            var5 = this;
            var4 = var5.handleGuildSynchronize;
            var2 = var1.guild;
            var3 = var2.id;
            var1 = var1.guild;
            var2 = var1.channels;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'handleGuildDelete';
        var1['key'] = var6;
        var6 = function handleGuildDelete(arg1, arg2) {
            var4 = this;
            var3 = var4.deleteMany;
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.id;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'resetInMemoryState';
        var1['key'] = var6;
        var6 = function resetInMemoryState() {
            var2 = new Array(0);
            var1 = this;
            var1['privateChannels'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'handleGuildSynchronize';
        var1['key'] = var6;
        var6 = function handleGuildSynchronize(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var1 = arg2;
                var7 = arg3;
                var4 = this;
                var3 = var1.op;
                var2 = 'update';
                if(!(var2 !== var3)) { _fun0009_ip = 58; continue _fun0009 }
 25:
                var2 = 'full_sync';
                if(!(var2 === var3)) { _fun0009_ip = 170; continue _fun0009 }
 38:
                var3 = var4.replace;
                var2 = var1.items;
                var2 = var3.bind(var4)(var6, var2, var7);
                _fun0009_ip = 170; continue _fun0009;
 58:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.channelsTransaction;
                var4 = var3.bind(var4)(var7);
                var7 = var4.putAll;
                var3 = var1.writes;
                var3 = var7.bind(var4)(var6, var3);
                var2 = _closure1_slot7;
                var1 = var1.deletes;
                var3 = var2.bind(var5)(var1);
                var2 = var3.bind(var5)();
                var1 = var2.done;
                if(var1) { _fun0009_ip = 170; continue _fun0009 }
 139:
                var7 = var2.value;
                var1 = var4.delete;
                var1 = var1.bind(var4)(var6, var7);
                var7 = var3.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                if(!var1) { _fun0009_ip = 139; continue _fun0009 }
 170:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'putOne';
        var1['key'] = var6;
        var6 = function putOne(arg1, arg2) {
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.channelsTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.put;
            var2 = var5.guild_id;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'putMany';
        var1['key'] = var6;
        var6 = function putMany(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.channelsTransaction;
                var3 = arg2;
                var5 = var4.bind(var5)(var3);
                var3 = _closure1_slot7;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0010_ip = 100; continue _fun0010 }
 63:
                var7 = var3.value;
                var6 = var5.put;
                var2 = var7.guild_id;
                var2 = var6.bind(var5)(var2, var7);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0010_ip = 63; continue _fun0010 }
 100:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'replace';
        var1['key'] = var6;
        var6 = function replace(arg1, arg2, arg3) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.channelsTransaction;
            var2 = arg3;
            var5 = var3.bind(var4)(var2);
            var4 = var5.replaceAll;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'deleteOne';
        var1['key'] = var6;
        var6 = function deleteOne(arg1, arg2, arg3) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.channelsTransaction;
            var2 = arg3;
            var5 = var3.bind(var4)(var2);
            var4 = var5.delete;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'deleteMany';
        var1['key'] = var6;
        var5 = function deleteMany(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.channelsTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var5;
        var2[13] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/Channels.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();