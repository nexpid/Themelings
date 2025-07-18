// app/stores/views/PrivateChannelSortStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function makeSortedChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = arguments[1];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0002_ip = 165; continue _fun0002 }
 15:
            var6 = _closure1_slot13;
            var5 = var6.lastMessageId;
            var1 = var3.id;
            var5 = var5.bind(var6)(var1);
            var7 = null;
            if(!(var7 == var5)) { _fun0002_ip = 50; continue _fun0002 }
 44:
            var5 = var3.lastMessageId;
 50:
            if(!(var7 == var5)) { _fun0002_ip = 59; continue _fun0002 }
 54:
            var5 = var3.id;
 59:
            var6 = var3.isMessageRequestTimestamp;
            var1 = var5;
            if(!(var7 != var6)) { _fun0002_ip = 162; continue _fun0002 }
 72:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 15;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var6 = var4.bind(var8)(var6);
            var4 = var6.valueOf;
            var11 = var4.bind(var6)();
            var6 = 13;
            var4 = var9[var6];
            var10 = var7.bind(var8)(var4);
            var4 = var10.fromTimestamp;
            var4 = var4.bind(var10)(var11);
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.compare;
            var7 = var6.bind(var7)(var5, var4);
            var6 = 0;
            if(!(var7 > var6)) { _fun0002_ip = 159; continue _fun0002 }
 156:
            var4 = var5;
 159:
            var1 = var4;
 162:
            var2 = var1;
 165:
            var1 = {};
            var4 = var3.id;
            var1['channelId'] = var4;
            var1['lastMessageId'] = var2;
            var6 = _closure1_slot14;
            var5 = var6.isMessagesFavorite;
            var2 = var3.id;
            var2 = var5.bind(var6)(var2);
            var1['isFavorite'] = var2;
            var6 = _closure1_slot8;
            var5 = var6.isMessageRequest;
            var2 = var3.id;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0002_ip = 252; continue _fun0002 }
 232:
            var5 = _closure1_slot9;
            var4 = var5.isSpam;
            var3 = var3.id;
            var2 = var4.bind(var5)(var3);
 252:
            var1['isRequest'] = var2;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var10 = function handleConnectionOpen() {
        var3 = _closure1_slot17;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var4 = _closure1_slot11;
        var1 = var4.getMutablePrivateChannels;
        var1 = var1.bind(var4)();
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var6 = arg1;
            var5 = _closure1_slot17;
            var4 = var5.set;
            var3 = var6.id;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)(var6);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot24 = var10;
    var9 = function handleCacheLoaded() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot11;
            var1 = var2.getMutablePrivateChannels;
            var7 = var1.bind(var2)();
            var5 = var7;
            var1 = undefined;
            for(var2 in var5)
 30:
            {
 39:
                var12 = var2;
                var11 = _closure1_slot17;
                var10 = var11.set;
                var13 = _closure1_slot23;
                var9 = var7[var12];
                var9 = var13.bind(var1)(var9);
                var9 = var10.bind(var11)(var12, var9);
                _fun0003_ip = 30; continue _fun0003;
            }
 72:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.isPrivate;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
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
    var2 = {};
    var8 = 'DEFAULT';
    var2['DEFAULT'] = var8;
    var8 = 'FAVORITE';
    var2['FAVORITE'] = var8;
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.SecondaryIndexMap;
    var2 = var12.prototype;
    var8 = Object.create(var2, {constructor: {value: var12}});
    var15 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.isRequest;
            var2 = var2.isFavorite;
            if(var1) { _fun0004_ip = 52; continue _fun0004 }
 18:
            var1 = _closure1_slot16;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
 28:
            var2 = var1.DEFAULT;
            _fun0004_ip = 42; continue _fun0004;
 36:
            var2 = var1.FAVORITE;
 42:
            var1 = new Array(1);
            var1[0] = var2;
            _fun0004_ip = 56; continue _fun0004;
 52:
            var1 = new Array(0);
 56:
            return var1;
        }
    };
    var14 = function(arg1) {
        var1 = arg1;
        var3 = var1.lastMessageId;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.extractTimestamp;
        var1 = var1.bind(var2)(var3);
        var1 = -var1;
        return var1;
    };
    var16 = var8;
    var2 = new var16[var12](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot17 = var2;
    var2 = new Array(0);
    var _closure1_slot18 = var2;
    var2 = new Array(0);
    var _closure1_slot19 = var2;
    var2 = new Array(0);
    var _closure1_slot20 = var2;
    var2 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = _closure1_slot17;
            var5 = var6.values;
            var2 = _closure1_slot16;
            var4 = var2.FAVORITE;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot17;
            var5 = var6.values;
            var2 = var2.DEFAULT;
            var2 = var5.bind(var6)(var2);
            var5 = _closure1_slot18;
            var5 = var5 === var4;
            if(!var5) { _fun0005_ip = 68; continue _fun0005 }
 60:
            var6 = _closure1_slot19;
            var5 = var6 === var2;
 68:
            if(var5) { _fun0005_ip = 117; continue _fun0005 }
 71:
            var5 = new Array(0);
            _closure1_slot20 = var5;
            var6 = var4.forEach;
            var5 = function(arg1) {
                var1 = arg1;
                var3 = var1.channelId;
                var2 = _closure1_slot20;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var5 = var6.bind(var4)(var5);
            _closure1_slot18 = var4;
            var4 = var2.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.channelId;
                var2 = _closure1_slot20;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var3 = var4.bind(var2)(var3);
            _closure1_slot19 = var2;
 117:
            var1 = _closure1_slot20;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PrivateChannelSortStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
            var8 = var4.waitFor;
            var13 = _closure1_slot11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot15;
            var10 = _closure1_slot8;
            var9 = _closure1_slot14;
            var14 = var4;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var5 = _closure1_slot14;
            var2 = new Array(2);
            var2[0] = var5;
            var5 = _closure1_slot8;
            var2[1] = var5;
            var1 = _closure1_slot24;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getPrivateChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot21;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSortedChannels';
        var5['key'] = var7;
        var7 = function value() {
            var5 = _closure1_slot17;
            var4 = var5.values;
            var2 = _closure1_slot16;
            var1 = var2.FAVORITE;
            var4 = var4.bind(var5)(var1);
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot17;
            var3 = var4.values;
            var2 = var2.DEFAULT;
            var2 = var3.bind(var4)(var2);
            var1[1] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'serializeForOverlay';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var _closure3_slot0 = var1;
            var4 = _closure1_slot17;
            var3 = var4.values;
            var4 = var3.bind(var4)();
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.channelId;
                var2 = var1.lastMessageId;
                var1 = _closure3_slot0;
                var1[var3] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PrivateChannelSortStore';
    var8['displayName'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var10;
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var2['OVERLAY_INITIALIZE'] = var10;
    var2['CACHE_LOADED'] = var9;
    var2['CACHE_LOADED_LAZY'] = var9;
    var9 = function handleChannelUpdates(arg1) {
        var1 = arg1;
        var3 = var1.channels;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg1;
                var4 = _closure1_slot10;
                var3 = var6.type;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                if(var3) { _fun0007_ip = 44; continue _fun0007 }
 25:
                var7 = _closure1_slot17;
                var5 = var7.has;
                var4 = var6.id;
                var3 = var5.bind(var7)(var4);
 44:
                if(!var3) { _fun0007_ip = 76; continue _fun0007 }
 47:
                var5 = _closure1_slot17;
                var4 = var5.set;
                var3 = var6.id;
                var2 = _closure1_slot23;
                var2 = var2.bind(var1)(var6);
                var2 = var4.bind(var5)(var3, var2);
 76:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_UPDATES'] = var9;
    var9 = function handleChannelCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var8 = var1.channel;
            var2 = _closure1_slot10;
            var1 = var8.type;
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0008_ip = 108; continue _fun0008 }
 36:
            var4 = var8.id;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var2 = var5.bind(var7)(var2);
            var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            var2 = var4 !== var2;
            if(!var2) { _fun0008_ip = 105; continue _fun0008 }
 74:
            var6 = _closure1_slot17;
            var5 = var6.set;
            var4 = var8.id;
            var3 = _closure1_slot23;
            var3 = var3.bind(var7)(var8);
            var3 = var5.bind(var6)(var4, var3);
            var2 = undefined;
 105:
            var1 = var2;
 108:
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot17;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleMessageCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var2 = var1.message;
            var3 = _closure1_slot17;
            var1 = var3.has;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0009_ip = 37; continue _fun0009 }
 33:
            var1 = false;
            return var1;
 37:
            var3 = _closure1_slot11;
            var1 = var3.getChannel;
            var8 = var1.bind(var3)(var5);
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0009_ip = 92; continue _fun0009 }
 60:
            var4 = _closure1_slot17;
            var3 = var4.set;
            var7 = _closure1_slot23;
            var6 = var2.id;
            var2 = undefined;
            var2 = var7.bind(var2)(var8, var6);
            var1 = var3.bind(var4)(var5, var2);
 92:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var9;
    var9 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = _closure1_slot17;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['GUILD_CREATE'] = var9;
    var4 = function handleLogout() {
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/views/PrivateChannelSortStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();