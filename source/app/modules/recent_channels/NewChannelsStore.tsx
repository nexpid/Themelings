// app/modules/recent_channels/NewChannelsStore.tsx
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function maybeAckViewedChannel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot21;
            var8 = var3[var6];
            var5 = null;
            var3 = var5 != var8;
            if(!var3) { _fun0002_ip = 36; continue _fun0002 }
 32:
            var3 = var5 != var7;
 36:
            if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 39:
            var4 = var8.has;
            var3 = var4.bind(var8)(var7);
 49:
            if(!var3) { _fun0002_ip = 170; continue _fun0002 }
 52:
            var4 = _closure1_slot16;
            var3 = var4.isOptInEnabled;
            var3 = var3.bind(var4)(var6);
            var3 = !var3;
            if(var3) { _fun0002_ip = 107; continue _fun0002 }
 73:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var8 = var4.bind(var6)(var7);
            var4 = var5 != var8;
            if(!var4) { _fun0002_ip = 104; continue _fun0002 }
 94:
            var6 = var8.isThread;
            var4 = var6.bind(var8)();
 104:
            var3 = var4;
 107:
            if(var3) { _fun0002_ip = 129; continue _fun0002 }
 110:
            var6 = _closure1_slot15;
            var4 = var6.ackMessageId;
            var4 = var4.bind(var6)(var7);
            var3 = var5 != var4;
 129:
            if(var3) { _fun0002_ip = 170; continue _fun0002 }
 132:
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
 170:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function initializeNewChannels(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot21;
            var5 = var1[var3];
            var1 = null;
            if(!(var1 == var5)) { _fun0003_ip = 281; continue _fun0003 }
 29:
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
            if(var6) { _fun0003_ip = 112; continue _fun0003 }
 106:
            var7 = var5.joinedAt;
 112:
            if(!(var1 != var7)) { _fun0003_ip = 281; continue _fun0003 }
 119:
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
            if(!(var5 !== var6)) { _fun0003_ip = 281; continue _fun0003 }
 209:
            var5 = _closure1_slot21;
            var7 = var1.Set;
            var6 = var8.filter;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!var1) { _fun0004_ip = 120; continue _fun0004 }
 63:
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
 120:
                    if(!var1) { _fun0004_ip = 149; continue _fun0004 }
 123:
                    var7 = _closure1_slot8;
                    var6 = var7.getGuildRecentsDismissedAt;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var1 = var4 > var3;
 149:
                    if(!var1) { _fun0004_ip = 163; continue _fun0004 }
 152:
                    var3 = _closure2_slot1;
                    var1 = var4 > var3;
 163:
                    if(!var1) { _fun0004_ip = 192; continue _fun0004 }
 166:
                    var4 = _closure1_slot16;
                    var3 = var4.isChannelOrParentOptedIn;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = !var2;
 192:
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
 281:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
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
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot11 = var9;
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
    var9 = var8.AnalyticsObjects;
    var _closure1_slot17 = var9;
    var9 = var8.AnalyticsObjectTypes;
    var _closure1_slot18 = var9;
    var8 = var8.GuildFeatures;
    var _closure1_slot19 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot20 = var2;
    var2 = {};
    var _closure1_slot21 = var2;
    var2 = {};
    var _closure1_slot22 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function NewChannelsStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
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
            var9 = var4.waitFor;
            var15 = _closure1_slot11;
            var14 = _closure1_slot9;
            var13 = _closure1_slot13;
            var12 = _closure1_slot16;
            var11 = _closure1_slot15;
            var10 = _closure1_slot8;
            var16 = var4;
            var2 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
            var3 = var4.syncWith;
            var5 = _closure1_slot16;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot26;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0006_ip = 27; continue _fun0006 }
 12:
                var4 = _closure1_slot21;
                var4 = var4[var3];
                var1 = var2 == var4;
 27:
                if(!var1) { _fun0006_ip = 44; continue _fun0006 }
 30:
                var4 = _closure1_slot25;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
 44:
                if(!(var2 != var3)) { _fun0006_ip = 63; continue _fun0006 }
 48:
                var1 = _closure1_slot21;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0006_ip = 70; continue _fun0006 }
 63:
                var1 = _closure1_slot20;
 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldIndicateNewChannel';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var6 = arg2;
                var4 = null;
                if(!(var4 != var5)) { _fun0007_ip = 161; continue _fun0007 }
 15:
                var2 = _closure1_slot14;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var5);
                var2 = var4 == var1;
                if(var2) { _fun0007_ip = 68; continue _fun0007 }
 39:
                var8 = var1.features;
                var7 = var8.has;
                var1 = _closure1_slot19;
                var1 = var1.COMMUNITY;
                var1 = var7.bind(var8)(var1);
                var2 = !var1;
 68:
                var1 = !var2;
                if(var2) { _fun0007_ip = 159; continue _fun0007 }
 74:
                var2 = var4 != var5;
                if(!var2) { _fun0007_ip = 93; continue _fun0007 }
 81:
                var7 = _closure1_slot21;
                var7 = var7[var5];
                var2 = var4 == var7;
 93:
                if(!var2) { _fun0007_ip = 107; continue _fun0007 }
 96:
                var7 = _closure1_slot25;
                var2 = undefined;
                var2 = var7.bind(var2)(var5);
 107:
                var2 = _closure1_slot21;
                var7 = var2[var5];
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0007_ip = 134; continue _fun0007 }
 124:
                var5 = var7.has;
                var2 = var5.bind(var7)(var6);
 134:
                if(!var2) { _fun0007_ip = 156; continue _fun0007 }
 137:
                var5 = _closure1_slot15;
                var3 = var5.getTrackedAckMessageId;
                var3 = var3.bind(var5)(var6);
                var2 = var4 == var3;
 156:
                var1 = var2;
 159:
                return var1;
 161:
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
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleBulkClearRecents(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var5 = var1.channelIds;
            var4 = _closure1_slot21;
            var6 = var4[var2];
            var4 = null;
            if(!(var4 != var6)) { _fun0008_ip = 83; continue _fun0008 }
 37:
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
            if(!(var3 === var4)) { _fun0008_ip = 79; continue _fun0008 }
 71:
            var1 = _closure1_slot21;
            var1 = delete var1[var2];
 79:
            var1 = undefined;
            return var1;
 83:
            var1 = false;
            return var1;
        }
    };
    var2['BULK_CLEAR_RECENTS'] = var9;
    var9 = function CHANNEL_ACK() {
        var1 = true;
        return var1;
    };
    var2['CHANNEL_ACK'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.channelId;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0009_ip = 143; continue _fun0009 }
 22:
            var4 = _closure1_slot21;
            var4 = var4[var5];
            if(!(var2 != var4)) { _fun0009_ip = 127; continue _fun0009 }
 37:
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
            if(!(!(var6 < var4))) { _fun0009_ip = 127; continue _fun0009 }
 104:
            var6 = var2 != var8;
            var2 = false;
            if(!var6) { _fun0009_ip = 140; continue _fun0009 }
 113:
            var6 = _closure1_slot24;
            var6 = var6.bind(var7)(var5, var8);
            var2 = false;
            _fun0009_ip = 140; continue _fun0009;
 127:
            var4 = _closure1_slot25;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = true;
 140:
            var1 = var2;
 143:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleSidebarViewChannel(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.channelId;
            var5 = var1.sidebarType;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0010_ip = 69; continue _fun0010 }
 28:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 15;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.SidebarType;
            var2 = var2.VIEW_CHANNEL;
            var1 = var5 !== var2;
 69:
            if(var1) { _fun0010_ip = 87; continue _fun0010 }
 72:
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
 87:
            var1 = false;
            return var1;
        }
    };
    var2['SIDEBAR_VIEW_CHANNEL'] = var9;
    var9 = function handleSidebarViewGuild(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.baseChannelId;
            var1 = null;
            if(!(var1 != var4)) { _fun0011_ip = 35; continue _fun0011 }
 20:
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
 35:
            var1 = false;
            return var1;
        }
    };
    var2['SIDEBAR_VIEW_GUILD'] = var9;
    var9 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot21;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleChannelCreate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var2 = var1.isVocal;
            var2 = var2.bind(var1)();
            if(var2) { _fun0012_ip = 112; continue _fun0012 }
 21:
            var5 = _closure1_slot21;
            var4 = var1.guild_id;
            var6 = _closure1_slot21;
            var3 = var1.guild_id;
            var3 = var6[var3];
            var6 = null;
            if(!(var6 == var3)) { _fun0012_ip = 80; continue _fun0012 }
 52:
            var6 = global;
            var6 = var6.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var9 = var7;
            var6 = new var9[var6](var8);
            var3 = var6 instanceof Object ? var6 : var7;
 80:
            var5[var4] = var3;
            var3 = _closure1_slot21;
            var2 = var1.guild_id;
            var3 = var3[var2];
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
 112:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
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