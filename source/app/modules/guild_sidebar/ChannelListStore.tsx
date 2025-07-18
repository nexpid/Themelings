// app/modules/guild_sidebar/ChannelListStore.tsx
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
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot29;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot29;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
    var _closure1_slot29 = var1;
    var15 = function handleReset() {
        var3 = _closure1_slot21;
        var2 = var3.getChannelId;
        var3 = var2.bind(var3)();
        var4 = _closure1_slot21;
        var2 = var4.getVoiceChannelId;
        var2 = var2.bind(var4)();
        _closure1_slot24 = var3;
        _closure1_slot25 = var2;
        var2 = _closure1_slot26;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var1;
    };
    var16 = function handleGuildAction(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var19 = function handleChannelAction(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.guild_id;
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var11 = function handleRebuildGuildId(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var12 = function handleReadStateChange(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var13 = function handleThreadUpdate(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot26;
        var2 = var3.nonPositionalChannelIdUpdate;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var14 = function handleThreadMemberUpdate(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var9 = function handleChannelSelect() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot21;
            var1 = var2.getChannelId;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot21;
            var1 = var2.getVoiceChannelId;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot24;
            var5 = var1 !== var4;
            if(var5) { _fun0005_ip = 50; continue _fun0005 }
 42:
            var1 = _closure1_slot25;
            var5 = var1 !== var2;
 50:
            var1 = !var5;
            var1 = !var1;
            if(!var5) { _fun0005_ip = 151; continue _fun0005 }
 59:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 22;
            var5 = var7[var5];
            var7 = undefined;
            var6 = var6.bind(var7)(var5);
            var8 = _closure1_slot24;
            var5 = new Array(4);
            var5[0] = var8;
            var8 = _closure1_slot25;
            var5[1] = var8;
            var5[2] = var4;
            var5[3] = var2;
            var6 = var6.bind(var7)(var5);
            var5 = var6.uniq;
            var7 = var5.bind(var6)();
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 27; continue _fun0006 }
 9:
                    var2 = _closure1_slot26;
                    var1 = var2.nonPositionalChannelIdUpdate;
                    var1 = var1.bind(var2)(var3);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            _closure1_slot24 = var4;
            _closure1_slot25 = var2;
            var1 = true;
 151:
            return var1;
        }
    };
    var _closure1_slot30 = var9;
    var20 = function handleCategoryChange(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.id;
            var3 = _closure1_slot16;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var1)) { _fun0007_ip = 53; continue _fun0007 }
 31:
            var5 = _closure1_slot26;
            var3 = var5.clearGuildId;
            var1 = var1.guild_id;
            var1 = var3.bind(var5)(var1);
            _fun0007_ip = 68; continue _fun0007;
 53:
            var3 = _closure1_slot26;
            var2 = var3.clearGuildId;
            var1 = var2.bind(var3)(var4);
 68:
            return var1;
        }
    };
    var10 = function handleVoiceChannelsChange(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var18 = function handleRecomputeAllSubtitles() {
        var2 = _closure1_slot26;
        var1 = var2.updateSubtitles;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot31 = var18;
    var17 = function handleGuildScheduledEventUpdate(arg1) {
        var1 = arg1;
        var1 = var1.guildScheduledEvent;
        var3 = _closure1_slot26;
        var2 = var3.updateSubtitles;
        var1 = var1.guild_id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = global;
    var21 = var1.Object;
    var8 = var21.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var21)(var3, var1, var2);
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot22 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot23 = var2;
    var2 = null;
    var _closure1_slot24 = var2;
    var _closure1_slot25 = var2;
    var2 = 21;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var25 = var8;
    var2 = new var25[var2](var24);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot26 = var2;
    var2 = 26;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ChannelListStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
            var17 = this;
            var16 = var17.waitFor;
            var32 = _closure1_slot11;
            var31 = _closure1_slot14;
            var30 = _closure1_slot15;
            var29 = _closure1_slot16;
            var28 = _closure1_slot17;
            var27 = _closure1_slot8;
            var26 = _closure1_slot18;
            var25 = _closure1_slot9;
            var24 = _closure1_slot10;
            var23 = _closure1_slot12;
            var22 = _closure1_slot19;
            var21 = _closure1_slot20;
            var20 = _closure1_slot21;
            var19 = _closure1_slot22;
            var18 = _closure1_slot13;
            var33 = var17;
            var1 = var33[var16](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuild';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg2;
                var5 = _closure1_slot26;
                var4 = var5.getGuild;
                var1 = null;
                var7 = var1 == var6;
                var2 = undefined;
                if(var7) { _fun0009_ip = 32; continue _fun0009 }
 26:
                var2 = var6.guildActionRows;
 32:
                if(!(var1 == var2)) { _fun0009_ip = 40; continue _fun0009 }
 36:
                var2 = new Array(0);
 40:
                var7 = var1 == var6;
                var3 = undefined;
                if(var7) { _fun0009_ip = 55; continue _fun0009 }
 49:
                var3 = var6.channelNoticeRows;
 55:
                if(!(var1 == var3)) { _fun0009_ip = 63; continue _fun0009 }
 59:
                var3 = new Array(0);
 63:
                var1 = arg1;
                var2 = var4.bind(var5)(var1, var2, var3);
                var1 = {};
                var3 = var2.version;
                var1['guildChannelsVersion'] = var3;
                var1['guildChannels'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildWithoutChangingGuildActionRows';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot26;
            var2 = var3.getGuildChannelRowsOnly;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var3 = var2.version;
            var1['guildChannelsVersion'] = var3;
            var1['guildChannels'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'recentsChannelCount';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 61; continue _fun0010 }
 9:
                var2 = _closure1_slot26;
                var1 = var2.getGuildChannelRowsOnly;
                var3 = var1.bind(var2)(var3);
                var2 = var3.getCategoryFromSection;
                var1 = var3.recentsSectionNumber;
                var2 = var2.bind(var3)(var1);
                var1 = var2.getShownChannelIds;
                var1 = var1.bind(var2)();
                var1 = var1.length;
                return var1;
 61:
                var1 = 0;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ChannelListStore';
    var8['displayName'] = var2;
    var2 = 27;
    var2 = var6[var2];
    var24 = var7.bind(var1)(var2);
    var2 = {};
    var2['APPLICATION_FETCH_FAIL'] = var18;
    var2['APPLICATION_FETCH_SUCCESS'] = var18;
    var2['APPLICATION_FETCH'] = var18;
    var2['APPLICATIONS_FETCH_FAIL'] = var18;
    var2['APPLICATIONS_FETCH_SUCCESS'] = var18;
    var2['APPLICATIONS_FETCH'] = var18;
    var2['BACKGROUND_SYNC'] = var15;
    var21 = function handleBulkAck(arg1) {
        var2 = arg1;
        var4 = var2.channels;
        var2 = false;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 22;
        var3 = var7[var3];
        var6 = undefined;
        var3 = var5.bind(var6)(var3);
        var5 = var3.bind(var6)(var4);
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot16;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var1.channelId;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0011_ip = 41; continue _fun0011 }
 36:
                var1 = var2.guild_id;
 41:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.filter;
        var5 = _closure1_slot0;
        var2 = 23;
        var2 = var7[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var2.isNotNullish;
        var3 = var3.bind(var4)(var2);
        var2 = var3.uniq;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot26;
                var2 = var3.clearGuildId;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                if(!var1) { _fun0012_ip = 33; continue _fun0012 }
 24:
                var1 = true;
                _closure2_slot0 = var1;
 33:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var2['BULK_ACK'] = var21;
    var2['BULK_CLEAR_RECENTS'] = var11;
    var2['CACHE_LOADED_LAZY'] = var15;
    var2['CATEGORY_COLLAPSE_ALL'] = var11;
    var2['CATEGORY_COLLAPSE'] = var20;
    var2['CATEGORY_EXPAND_ALL'] = var11;
    var2['CATEGORY_EXPAND'] = var20;
    var2['CHANNEL_ACK'] = var12;
    var20 = function handleChannelCollapse(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = _closure1_slot26;
            var2 = var3.clearGuildId;
            var4 = _closure1_slot16;
            var1 = var4.getChannel;
            var4 = var1.bind(var4)(var5);
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0013_ip = 51; continue _fun0013 }
 46:
            var1 = var4.guild_id;
 51:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['CHANNEL_COLLAPSE'] = var20;
    var2['CHANNEL_CREATE'] = var19;
    var2['CHANNEL_DELETE'] = var19;
    var2['CHANNEL_LOCAL_ACK'] = var12;
    var2['CHANNEL_MUTE_EXPIRED'] = var11;
    var2['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var12;
    var2['CHANNEL_SELECT'] = var9;
    var19 = function handleChannelStatuses(arg1) {
        var3 = _closure1_slot26;
        var2 = var3.clearGuildId;
        var1 = arg1;
        var1 = var1.guildId;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['CHANNEL_STATUSES'] = var19;
    var19 = function handleChannelUpdates(arg1) {
        var2 = arg1;
        var4 = var2.channels;
        var2 = false;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 22;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var4 = var2.bind(var3)(var4);
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.guild_id;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.uniq;
        var4 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure1_slot26;
                var2 = var3.clearGuildId;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                if(!var1) { _fun0014_ip = 33; continue _fun0014 }
 24:
                var1 = true;
                _closure2_slot0 = var1;
 33:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var2['CHANNEL_UPDATES'] = var19;
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var18;
    var2['CONNECTION_OPEN'] = var15;
    var2['CURRENT_USER_UPDATE'] = var15;
    var2['DECAY_READ_STATES'] = var15;
    var2['DEV_TOOLS_DESIGN_TOGGLE_SET'] = var15;
    var2['DISABLE_AUTOMATIC_ACK'] = var12;
    var19 = function handleFavoriteSuggestionDimissed(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['DISMISS_FAVORITE_SUGGESTION'] = var19;
    var19 = function handleEmbeddedActivityUpdateV2(arg1) {
        var1 = arg1;
        var6 = var1.location;
        var4 = _closure1_slot26;
        var3 = var4.updateSubtitles;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 24;
        var2 = var8[var1];
        var5 = undefined;
        var9 = var7.bind(var5)(var2);
        var2 = var9.getEmbeddedActivityLocationGuildId;
        var2 = var2.bind(var9)(var6);
        var1 = var8[var1];
        var5 = var7.bind(var5)(var1);
        var1 = var5.getEmbeddedActivityLocationChannelId;
        var1 = var1.bind(var5)(var6);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['EMBEDDED_ACTIVITY_UPDATE_V2'] = var19;
    var19 = function handleEmbeddedActivityLaunchStart() {
        var2 = _closure1_slot31;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['EMBEDDED_ACTIVITY_LAUNCH_START'] = var19;
    var2['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = var18;
    var2['ENABLE_AUTOMATIC_ACK'] = var12;
    var19 = function handleFetchGuildEventsForGuild(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot26;
        var1 = var2.updateSubtitles;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['FETCH_GUILD_EVENTS_FOR_GUILD'] = var19;
    var2['GAMES_DATABASE_FETCH_FAIL'] = var18;
    var2['GAMES_DATABASE_FETCH'] = var18;
    var2['GAMES_DATABASE_UPDATE'] = var18;
    var2['GUILD_APPLICATIONS_FETCH_SUCCESS'] = var18;
    var2['GUILD_CREATE'] = var16;
    var2['GUILD_DELETE'] = var16;
    var18 = function handleGuildMemberUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = var1.user;
            var5 = _closure1_slot14;
            var3 = var5.getId;
            var3 = var3.bind(var5)();
            var1 = var1.id;
            var1 = var3 === var1;
            if(!var1) { _fun0015_ip = 57; continue _fun0015 }
 42:
            var3 = _closure1_slot26;
            var2 = var3.clearGuildId;
            var1 = var2.bind(var3)(var4);
 57:
            return var1;
        }
    };
    var2['GUILD_MEMBER_UPDATE'] = var18;
    var2['GUILD_MUTE_EXPIRED'] = var11;
    var2['GUILD_ROLE_CREATE'] = var11;
    var2['GUILD_ROLE_DELETE'] = var11;
    var2['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE'] = var11;
    var2['GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS'] = var11;
    var2['GUILD_ROLE_UPDATE'] = var11;
    var2['GUILD_SCHEDULED_EVENT_CREATE'] = var17;
    var2['GUILD_SCHEDULED_EVENT_DELETE'] = var17;
    var2['GUILD_SCHEDULED_EVENT_UPDATE'] = var17;
    var2['GUILD_TOGGLE_COLLAPSE_MUTED'] = var11;
    var2['GUILD_UPDATE'] = var16;
    var2['IMPERSONATE_STOP'] = var11;
    var2['IMPERSONATE_UPDATE'] = var11;
    var16 = function handleLoadChannels(arg1) {
        var1 = arg1;
        var3 = var1.channels;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.guildId;
            var2 = _closure1_slot26;
            var1 = var2.clearGuildId;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_CHANNELS'] = var16;
    var2['LOAD_MESSAGES_SUCCESS'] = var12;
    var2['MESSAGE_ACK'] = var12;
    var16 = function handleMessageCreate(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['MESSAGE_CREATE'] = var16;
    var2['MESSAGE_DELETE_BULK'] = var12;
    var2['MESSAGE_DELETE'] = var12;
    var2['NOTIFICATION_SETTINGS_UPDATE'] = var15;
    var2['OVERLAY_INITIALIZE'] = var15;
    var16 = function handlePassiveUpdateV2(arg1) {
        var3 = _closure1_slot26;
        var2 = var3.clearGuildId;
        var1 = arg1;
        var1 = var1.guildId;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['PASSIVE_UPDATE_V2'] = var16;
    var2['RECOMPUTE_READ_STATES'] = var15;
    var2['RESORT_THREADS'] = var12;
    var2['SET_RECENTLY_ACTIVE_COLLAPSED'] = var15;
    var2['THREAD_CREATE'] = var13;
    var15 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelUpdate;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['THREAD_DELETE'] = var15;
    var2['THREAD_LIST_SYNC'] = var11;
    var2['THREAD_MEMBER_UPDATE'] = var14;
    var2['THREAD_MEMBERS_UPDATE'] = var14;
    var2['THREAD_UPDATE'] = var13;
    var2['TRY_ACK'] = var12;
    var2['UPDATE_CHANNEL_DIMENSIONS'] = var12;
    var12 = function handleUpdateSubtitles(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot26;
        var1 = var2.updateSubtitles;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['UPDATE_CHANNEL_LIST_SUBTITLES'] = var12;
    var2['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = var11;
    var2['USER_GUILD_SETTINGS_CHANNEL_UPDATE'] = var11;
    var12 = function handleUserGuildSettingsFullUpdate(arg1) {
        var1 = arg1;
        var3 = var1.userGuildSettings;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.guild_id;
            var2 = _closure1_slot26;
            var1 = var2.clearGuildId;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['USER_GUILD_SETTINGS_FULL_UPDATE'] = var12;
    var2['USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE'] = var11;
    var2['USER_GUILD_SETTINGS_GUILD_UPDATE'] = var11;
    var11 = function handleSettingsProtoUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = arg1;
            var3 = var2.settings;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var6 = var3.type;
            var4 = _closure1_slot23;
            var4 = var4.PRELOADED_USER_SETTINGS;
            if(!(var6 === var4)) { _fun0016_ip = 137; continue _fun0016 }
 43:
            var3 = var3.proto;
            var6 = var3.guilds;
            var3 = null;
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0016_ip = 72; continue _fun0016 }
 66:
            var4 = var6.guilds;
 72:
            _closure2_slot0 = var4;
            var6 = false;
            _closure2_slot1 = var6;
            if(!(var3 != var4)) { _fun0016_ip = 131; continue _fun0016 }
 86:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 25;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.keys;
            var4 = var2.bind(var3)(var4);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var1[var4];
                    var3 = var1.guildRecentsDismissedAt;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0017_ip = 55; continue _fun0017 }
 26:
                    var3 = _closure1_slot26;
                    var1 = var3.updateRecentsCategory;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0017_ip = 51; continue _fun0017 }
 47:
                    var1 = _closure2_slot1;
 51:
                    _closure2_slot1 = var1;
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 131:
            var1 = _closure2_slot1;
            return var1;
 137:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var11;
    var2['VOICE_CATEGORY_COLLAPSE'] = var10;
    var2['VOICE_CATEGORY_EXPAND'] = var10;
    var2['VOICE_CHANNEL_SELECT'] = var9;
    var9 = function handleVoiceChannelStatusUpdate(arg1) {
        var3 = _closure1_slot26;
        var2 = var3.nonPositionalChannelIdUpdate;
        var1 = arg1;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['VOICE_CHANNEL_STATUS_UPDATE'] = var9;
    var9 = function handleVoiceStateUpdates(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.voiceStates;
            var1 = _closure1_slot30;
            var9 = undefined;
            var1 = var1.bind(var9)();
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var16 = var4;
            var2 = new var16[var2](var15);
            var8 = var2 instanceof Object ? var2 : var4;
            var2 = _closure1_slot28;
            var7 = var2.bind(var9)(var3);
            var3 = var7.bind(var9)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = var1;
            var1 = var3;
            if(var2) { _fun0018_ip = 237; continue _fun0018 }
 85:
            var2 = var4.value;
            var13 = var2.channelId;
            var12 = var2.oldChannelId;
            var11 = var5 == var12;
            if(var11) { _fun0018_ip = 118; continue _fun0018 }
 108:
            var2 = var8.has;
            var11 = var2.bind(var8)(var12);
 118:
            var2 = var3;
            if(var11) { _fun0018_ip = 157; continue _fun0018 }
 124:
            var14 = _closure1_slot26;
            var11 = var14.nonPositionalChannelIdUpdate;
            var11 = var11.bind(var14)(var12);
            if(!var11) { _fun0018_ip = 144; continue _fun0018 }
 142:
            var3 = true;
 144:
            var11 = var8.add;
            var11 = var11.bind(var8)(var12);
            var2 = var3;
 157:
            var12 = var5 == var13;
            if(var12) { _fun0018_ip = 174; continue _fun0018 }
 164:
            var11 = var8.has;
            var12 = var11.bind(var8)(var13);
 174:
            var11 = var2;
            if(var12) { _fun0018_ip = 213; continue _fun0018 }
 180:
            var14 = _closure1_slot26;
            var12 = var14.nonPositionalChannelIdUpdate;
            var12 = var12.bind(var14)(var13);
            if(!var12) { _fun0018_ip = 200; continue _fun0018 }
 198:
            var2 = true;
 200:
            var12 = var8.add;
            var12 = var12.bind(var8)(var13);
            var11 = var2;
 213:
            var12 = var7.bind(var9)();
            var2 = var12.done;
            var3 = var11;
            var4 = var12;
            var1 = var3;
            if(!var2) { _fun0018_ip = 85; continue _fun0018 }
 237:
            return var1;
        }
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var4 = function handleCurrentChannelReadStateChange() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = _closure1_slot24;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0019_ip = 35; continue _fun0019 }
 16:
            var4 = _closure1_slot26;
            var3 = var4.nonPositionalChannelIdUpdate;
            var2 = _closure1_slot24;
            var1 = var3.bind(var4)(var2);
 35:
            return var1;
        }
    };
    var2['WINDOW_FOCUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var25 = var4;
    var23 = var2;
    var2 = new var25[var8](var24, var23, var22);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/ChannelListStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();