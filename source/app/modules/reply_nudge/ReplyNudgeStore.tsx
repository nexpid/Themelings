// app/modules/reply_nudge/ReplyNudgeStore.tsx
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
            var9 = _closure1_slot28;
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
            var7 = _closure1_slot28;
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
    var _closure1_slot27 = var1;
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
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function pruneExpiredNudges(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg2;
            var2 = var1.maxNudgeAge;
            var _closure2_slot0 = var2;
            var1 = var1.maxNudgeCount;
            var _closure2_slot1 = var1;
            var11 = undefined;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var2 = global;
            var3 = var2.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var _closure2_slot2 = var1;
            var1 = {};
            var _closure2_slot3 = var1;
            var5 = var2.Object;
            var4 = var5.entries;
            var3 = arg1;
            var5 = var4.bind(var5)(var3);
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                var3 = 1;
                var1 = var1[var3];
                var2 = var1.timestamp;
                var1 = arg1;
                var1 = var1[var3];
                var1 = var1.timestamp;
                var1 = var2 - var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var10 = 0;
            var _closure2_slot4 = var10;
            var9 = function _loop(arg1, arg2, arg3, arg4) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = arg1;
                    var10 = arg2;
                    var9 = arg3;
                    var8 = arg4;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var10;
                    var _closure3_slot2 = var9;
                    var _closure3_slot3 = var8;
                    var3 = _closure2_slot5;
                    var12 = null;
                    if(!(var12 != var3)) { _fun0006_ip = 40; continue _fun0006 }
case 6:
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot5;
                    var5 = var4 - var3;
                    var4 = _closure1_slot18;
                    if(!(var5 < var4)) { _fun0006_ip = 40; continue _fun0006 }
case 3:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot5;
                    var7 = var5 - var4;
                    var _closure3_slot4 = var7;
                    var5 = _closure1_slot14;
                    var4 = var5.lastMessageId;
                    var4 = var4.bind(var5)(var6);
                    var11 = _closure2_slot6;
                    if(!var11) { _fun0006_ip = 41; continue _fun0006 }
case 17:
                    var5 = _closure2_slot0;
                    var11 = var7 >= var5;
case 41:
                    var7 = _closure2_slot6;
                    if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var13 = _closure2_slot4;
                    var5 = _closure2_slot1;
                    var7 = var13 >= var5;
case 42:
                    var5 = _closure2_slot6;
                    if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var5 = var4 !== var10;
case 44:
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0006_ip = 19; continue _fun0006 }
case 46:
                    var4 = !var11;
case 19:
                    if(!var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = !var7;
case 47:
                    if(!var4) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var4 = !var5;
case 49:
                    var _closure3_slot5 = var12;
                    if(var11) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    if(var7) { _fun0006_ip = 24; continue _fun0006 }
case 53:
                    if(!var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var5 = 'more_recent_message';
                    _closure3_slot5 = var5;
                    _fun0006_ip = 54; continue _fun0006;
case 24:
                    var5 = 'evicted_max_count';
                    _closure3_slot5 = var5;
                    _fun0006_ip = 54; continue _fun0006;
case 51:
                    var5 = 'aged_out';
                    _closure3_slot5 = var5;
case 54:
                    var7 = _closure2_slot3;
                    var5 = {};
                    var11 = _closure2_slot5;
                    var5['timestamp'] = var11;
                    var5['isActive'] = var4;
                    var5['lastMessageId'] = var10;
                    var5['affinity'] = var9;
                    var5['authorId'] = var8;
                    var7[var6] = var5;
                    if(var4) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var5 = _closure2_slot6;
                    if(!var5) { _fun0006_ip = 40; continue _fun0006 }
case 58:
                    if(var4) { _fun0006_ip = 40; continue _fun0006 }
case 59:
                    var5 = _closure1_slot13;
                    var4 = var5.getChannel;
                    var4 = var4.bind(var5)(var6);
                    var _closure3_slot6 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 19;
                    var4 = var3[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = 18;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = var4.then;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var8 = var1.default;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 20;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot20;
                            var3 = var2.REPLY_NUDGE_DISMISSED;
                            var2 = {};
                            var9 = _closure3_slot0;
                            var2['channel_id'] = var9;
                            var9 = _closure3_slot6;
                            var10 = null;
                            var11 = var10 == var9;
                            var9 = undefined;
                            if(var11) { _fun0007_ip = 60; continue _fun0007 }
case 4:
                            var11 = _closure3_slot6;
                            var9 = var11.type;
case 60:
                            var2['channel_type'] = var9;
                            var9 = _closure3_slot6;
                            var10 = var10 == var9;
                            var9 = undefined;
                            if(var10) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                            var10 = _closure3_slot6;
                            var9 = var10.guild_id;
case 61:
                            var2['guild_id'] = var9;
                            var9 = _closure3_slot5;
                            var2['dismiss_method'] = var9;
                            var9 = _closure3_slot4;
                            var2['nudge_age_ms'] = var9;
                            var9 = _closure3_slot2;
                            var2['nudge_author_affinity'] = var9;
                            var10 = _closure3_slot3;
                            var2['nudge_author_id'] = var10;
                            var9 = _closure1_slot15;
                            var7 = var9.isFriend;
                            var7 = var7.bind(var9)(var10);
                            var2['nudge_author_is_friend'] = var7;
                            var7 = _closure3_slot1;
                            var2['nudge_message_id'] = var7;
                            var7 = var8.getPrivateChannelIds;
                            var8 = var7.bind(var8)();
                            var7 = var8.indexOf;
                            var6 = _closure3_slot0;
                            var6 = var7.bind(var8)(var6);
                            var2['channel_dm_list_index'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 40; continue _fun0006;
case 56:
                    var1 = _closure2_slot4;
                    var1 = var1 + 1;
                    _closure2_slot4 = var1;
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.length;
            var4 = var10 < var3;
            var8 = 2;
            var7 = 1;
            var6 = 0;
            if(!var4) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var13 = var5[var6];
            var4 = _closure1_slot8;
            var4 = var4.bind(var11)(var13, var8);
            var19 = var4[var10];
            var4 = var4[var7];
            var13 = var4.timestamp;
            _closure2_slot5 = var13;
            var13 = var4.isActive;
            _closure2_slot6 = var13;
            var18 = var4.lastMessageId;
            var17 = var4.affinity;
            var16 = var4.authorId;
            var20 = undefined;
            var4 = var20[var9](var19, var18, var17, var16, var15);
            var6 = var6 + 1;
            var4 = var5.length;
            if(var6 < var4) { _fun0005_ip = 64; continue _fun0005 }
case 63:
            var4 = _closure1_slot21;
            var3 = var4.info;
            var6 = var5.length;
            var7 = var2.Object;
            var5 = var7.keys;
            var5 = var5.bind(var7)(var1);
            var5 = var5.length;
            var7 = var6 - var5;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = 'Pruned ';
            var2 = ' expired nudges';
            var2 = var6.bind(var5)(var7, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function maybeDismissNudge(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot24;
            var3 = var5 in var3;
            if(var3) { _fun0008_ip = 65; continue _fun0008 }
case 7:
            var3 = false;
            return var3;
case 65:
            var3 = _closure1_slot24;
            var3 = var3[var5];
            var _closure2_slot2 = var3;
            var4 = var3.isActive;
            if(var4) { _fun0008_ip = 66; continue _fun0008 }
case 8:
            var4 = false;
            return var4;
case 66:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var3 = var3.timestamp;
            var3 = var4 - var3;
            var _closure2_slot3 = var3;
            var3 = _closure1_slot24;
            var4 = var3[var5];
            var3 = false;
            var4['isActive'] = var3;
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var5);
            var _closure2_slot4 = var3;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 19;
            var3 = var2[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = 18;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.default;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot20;
                    var3 = var2.REPLY_NUDGE_DISMISSED;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot4;
                    var10 = null;
                    var11 = var10 == var9;
                    var9 = undefined;
                    if(var11) { _fun0009_ip = 60; continue _fun0009 }
case 4:
                    var11 = _closure2_slot4;
                    var9 = var11.type;
case 60:
                    var2['channel_type'] = var9;
                    var9 = _closure2_slot4;
                    var10 = var10 == var9;
                    var9 = undefined;
                    if(var10) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var10 = _closure2_slot4;
                    var9 = var10.guild_id;
case 61:
                    var2['guild_id'] = var9;
                    var9 = _closure2_slot1;
                    var2['dismiss_method'] = var9;
                    var9 = _closure2_slot3;
                    var2['nudge_age_ms'] = var9;
                    var9 = _closure2_slot2;
                    var9 = var9.affinity;
                    var2['nudge_author_affinity'] = var9;
                    var9 = _closure2_slot2;
                    var9 = var9.authorId;
                    var2['nudge_author_id'] = var9;
                    var9 = _closure2_slot2;
                    var9 = var9.lastMessageId;
                    var2['nudge_message_id'] = var9;
                    var10 = _closure1_slot15;
                    var9 = var10.isFriend;
                    var7 = _closure2_slot2;
                    var7 = var7.authorId;
                    var7 = var9.bind(var10)(var7);
                    var2['nudge_author_is_friend'] = var7;
                    var7 = var8.getPrivateChannelIds;
                    var8 = var7.bind(var8)();
                    var7 = var8.indexOf;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var2['channel_dm_list_index'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function getActiveNudgeChannelIds() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot24;
            var8 = var3.bind(var4)(var2);
            var2 = var8.length;
            var7 = 0;
            var2 = var7 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var10 = var8[var3];
            var2 = _closure1_slot8;
            var2 = var2.bind(var6)(var10, var5);
            var10 = var2[var7];
            var2 = var2[var4];
            var2 = var2.isActive;
            if(!var2) { _fun0010_ip = 69; continue _fun0010 }
case 60:
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
case 69:
            var3 = var3 + 1;
            var2 = var8.length;
            if(var3 < var2) { _fun0010_ip = 68; continue _fun0010 }
case 67:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function handleNudgeVisibilityChange() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 21;
            var5 = var1[var2];
            var2 = undefined;
            var5 = var3.bind(var2)(var5);
            var7 = var5.ReplyNudgeExperiment;
            var6 = var7.getConfig;
            var5 = {};
            var8 = 'handleNudgeVisibilityChange';
            var5['location'] = var8;
            var6 = var6.bind(var7)(var5);
            var5 = var6.displayNudges;
            var9 = var6.maxNudgeAge;
            var8 = var6.maxNudgeCount;
            var6 = 22;
            var1 = var1[var6];
            var1 = var3.bind(var2)(var1);
            var3 = var1.EnableDmReplyNudgeReminders;
            var1 = var3.getSetting;
            var3 = var1.bind(var3)();
            var1 = false;
            var3 = var1 !== var3;
            if(!var3) { _fun0011_ip = 61; continue _fun0011 }
case 70:
            var3 = var5;
case 61:
            var5 = _closure1_slot22;
            if(!(var5 !== var3)) { _fun0011_ip = 71; continue _fun0011 }
case 72:
            _closure1_slot22 = var3;
            if(!var3) { _fun0011_ip = 73; continue _fun0011 }
case 74:
            var7 = _closure1_slot29;
            var5 = _closure1_slot24;
            var3 = {};
            var3['maxNudgeAge'] = var9;
            var3['maxNudgeCount'] = var8;
            var3 = var7.bind(var2)(var5, var3);
            _closure1_slot24 = var3;
            var3 = global;
            var7 = var3.Set;
            var3 = _closure1_slot31;
            var11 = var3.bind(var2)();
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var12 = var5;
            var3 = new var12[var7](var11, var10);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot25 = var3;
case 73:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var5 = var3.EnableDmReplyNudgeReminders;
            var3 = var5.getSetting;
            var3 = var3.bind(var5)();
            if(!(var1 === var3)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var3 = {};
            _closure1_slot24 = var3;
            var3 = global;
            var3 = var3.Set;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var12 = var5;
            var3 = new var12[var3](var11);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot25 = var3;
case 75:
            return var2;
case 71:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleUserGuildSettingsUpdate() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = false;
            var _closure2_slot0 = var2;
            var6 = function _loop2(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot17;
                    var4 = var6.isChannelMuted;
                    var5 = null;
                    var4 = var4.bind(var6)(var5, var2);
                    if(!var4) { _fun0013_ip = 77; continue _fun0013 }
case 37:
                    var4 = _closure1_slot24;
                    var4 = var4[var2];
                    var _closure3_slot1 = var4;
                    if(!(var5 != var4)) { _fun0013_ip = 78; continue _fun0013 }
case 9:
                    var4 = var4.isActive;
                    if(!var4) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var5 = _closure1_slot13;
                    var4 = var5.getChannel;
                    var4 = var4.bind(var5)(var2);
                    var _closure3_slot2 = var4;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 19;
                    var5 = var4[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = 18;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = arg1;
                            var8 = var1.default;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 20;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot20;
                            var3 = var2.REPLY_NUDGE_DISMISSED;
                            var2 = {};
                            var9 = _closure3_slot0;
                            var2['channel_id'] = var9;
                            var9 = _closure3_slot2;
                            var10 = null;
                            var11 = var10 == var9;
                            var9 = undefined;
                            if(var11) { _fun0014_ip = 60; continue _fun0014 }
case 4:
                            var11 = _closure3_slot2;
                            var9 = var11.type;
case 60:
                            var2['channel_type'] = var9;
                            var9 = _closure3_slot2;
                            var10 = var10 == var9;
                            var9 = undefined;
                            if(var10) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                            var10 = _closure3_slot2;
                            var9 = var10.guild_id;
case 61:
                            var2['guild_id'] = var9;
                            var9 = 'channel_muted';
                            var2['dismiss_method'] = var9;
                            var9 = global;
                            var10 = var9.Date;
                            var9 = var10.now;
                            var10 = var9.bind(var10)();
                            var9 = _closure3_slot1;
                            var9 = var9.timestamp;
                            var9 = var10 - var9;
                            var2['nudge_age_ms'] = var9;
                            var9 = _closure3_slot1;
                            var9 = var9.affinity;
                            var2['nudge_author_affinity'] = var9;
                            var9 = _closure3_slot1;
                            var9 = var9.authorId;
                            var2['nudge_author_id'] = var9;
                            var9 = _closure3_slot1;
                            var9 = var9.lastMessageId;
                            var2['nudge_message_id'] = var9;
                            var10 = _closure1_slot15;
                            var9 = var10.isFriend;
                            var7 = _closure3_slot1;
                            var7 = var7.authorId;
                            var7 = var9.bind(var10)(var7);
                            var2['nudge_author_is_friend'] = var7;
                            var7 = var8.getPrivateChannelIds;
                            var8 = var7.bind(var8)();
                            var7 = var8.indexOf;
                            var6 = _closure3_slot0;
                            var6 = var7.bind(var8)(var6);
                            var2['channel_dm_list_index'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
case 78:
                    var1 = _closure1_slot24;
                    var1 = delete var1[var2];
                    var1 = true;
                    _closure2_slot0 = var1;
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = _closure1_slot24;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = undefined;
            if(!var2) { _fun0012_ip = 80; continue _fun0012 }
case 32:
            var2 = var5[var4];
            var2 = var6.bind(var3)(var2);
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0012_ip = 32; continue _fun0012 }
case 80:
            var1 = _closure2_slot0;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
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
    var2 = var5.bind(var1)(var2);
    var9 = var2.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot18 = var9;
    var2 = var2.NUDGE_TIMESTAMP_OFFSET_MS;
    var _closure1_slot19 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot20 = var2;
    var2 = 17;
    var2 = var6[var2];
    var9 = var7.bind(var1)(var2);
    var2 = var9.prototype;
    var10 = Object.create(var2, {constructor: {value: var9}});
    var2 = 'ReplyNudgeStore';
    var14 = var10;
    var13 = var2;
    var9 = new var14[var9](var13, var12);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot21 = var9;
    var9 = false;
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var9;
    var9 = {};
    var _closure1_slot24 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot25 = var8;
    var8 = 23;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var9 = var8.PersistedStore;
    var8 = function(arg1) {
        var4 = function ReplyNudgeStore() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0015_ip = 81; continue _fun0015 }
case 82:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0015_ip = 83; continue _fun0015;
case 81:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 83:
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
        var1 = function initialize(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var3 = undefined;
                if(var6) { _fun0016_ip = 84; continue _fun0016 }
case 85:
                var3 = var4.nudgedChannels;
case 84:
                if(!(var2 == var3)) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                var3 = {};
case 86:
                _closure1_slot24 = var3;
                var13 = var5.waitFor;
                var3 = _closure1_slot9;
                var21 = _closure1_slot12;
                var20 = _closure1_slot13;
                var19 = _closure1_slot14;
                var18 = _closure1_slot15;
                var17 = _closure1_slot16;
                var16 = _closure1_slot10;
                var15 = _closure1_slot17;
                var7 = _closure1_slot11;
                var23 = var5;
                var22 = var3;
                var14 = var7;
                var4 = var23[var13](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
                var6 = var5.syncWith;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = _closure1_slot32;
                var3 = var6.bind(var5)(var4, var3);
                var4 = var5.syncWith;
                var6 = _closure1_slot17;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot33;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function getState() {
            var1 = {};
            var2 = _closure1_slot24;
            var1['nudgedChannels'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getNudgeTimestamp';
        var5['key'] = var7;
        var7 = function getNudgeTimestamp(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot22;
                var5 = null;
                if(var1) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                return var5;
case 88:
                var1 = _closure1_slot24;
                var2 = var1[var4];
                var6 = var5 == var2;
                var1 = null;
                if(var6) { _fun0017_ip = 90; continue _fun0017 }
case 65:
                var2 = var2.isActive;
                if(var2) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                var6 = _closure1_slot25;
                var2 = var6.has;
                var6 = var2.bind(var6)(var4);
                var2 = null;
                if(!var6) { _fun0017_ip = 93; continue _fun0017 }
case 91:
                var3 = _closure1_slot24;
                var3 = var3[var4];
                var3 = var3.timestamp;
                var4 = var5 != var3;
                var2 = null;
                if(!var4) { _fun0017_ip = 93; continue _fun0017 }
case 60:
                var2 = var3;
case 93:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNudgeDMTimestamp';
        var5['key'] = var7;
        var7 = function getNudgeDMTimestamp(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var2 = var3.getNudgeTimestamp;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0018_ip = 94; continue _fun0018 }
case 95:
                var2 = _closure1_slot19;
                var1 = var3 + var2;
case 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isChannelNudged';
        var5['key'] = var7;
        var7 = function isChannelNudged(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arguments[1];
                var3 = undefined;
                if(!(var1 === var3)) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                var1 = {};
case 96:
                var1 = var1.includeInvisible;
                if(!(var1 === var3)) { _fun0019_ip = 35; continue _fun0019 }
case 98:
                var1 = false;
case 35:
                var4 = _closure1_slot22;
                var4 = !var4;
                if(!var4) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                var4 = !var1;
case 99:
                var1 = !var4;
                if(var4) { _fun0019_ip = 101; continue _fun0019 }
case 102:
                var4 = _closure1_slot24;
                var2 = arg1;
                var2 = var4[var2];
                var4 = null;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0019_ip = 103; continue _fun0019 }
case 34:
                var3 = var2.isActive;
case 103:
                var2 = true;
                var1 = var2 === var3;
case 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getChannelNudge';
        var5['key'] = var7;
        var7 = function getChannelNudge(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0020_ip = 96; continue _fun0020 }
case 97:
                var2 = {};
case 96:
                var3 = var2.includeInvisible;
                if(!(var3 === var1)) { _fun0020_ip = 35; continue _fun0020 }
case 98:
                var3 = false;
case 35:
                var1 = _closure1_slot22;
                if(var1) { _fun0020_ip = 104; continue _fun0020 }
case 37:
                var1 = null;
                if(!var3) { _fun0020_ip = 105; continue _fun0020 }
case 104:
                var3 = _closure1_slot24;
                var2 = arg1;
                var2 = var3[var2];
                var4 = null;
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0020_ip = 105; continue _fun0020 }
case 106:
                var1 = var2;
case 105:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isNudgesInitialized';
        var5['key'] = var7;
        var6 = function isNudgesInitialized() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 24;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReplyNudgeSet(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channelId;
            var10 = var2.timestamp;
            var9 = var2.lastMessageId;
            var1 = var2.affinity;
            var8 = var2.authorId;
            var3 = undefined;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot17;
            var5 = var7.isChannelMuted;
            var12 = null;
            var5 = var5.bind(var7)(var12, var6);
            if(var5) { _fun0021_ip = 107; continue _fun0021 }
case 108:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 21;
            var5 = var11[var5];
            var5 = var7.bind(var3)(var5);
            var11 = var5.ReplyNudgeExperiment;
            var7 = var11.getConfig;
            var5 = {};
            var13 = 'handleReplyNudgeSet';
            var5['location'] = var13;
            var5 = var7.bind(var11)(var5);
            var14 = var5.maxNudgeAge;
            var7 = var5.maxNudgeCount;
            var13 = _closure1_slot29;
            var11 = _closure1_slot24;
            var5 = {};
            var5['maxNudgeAge'] = var14;
            var5['maxNudgeCount'] = var7;
            var5 = var13.bind(var3)(var11, var5);
            _closure1_slot24 = var5;
            var5 = var6 in var5;
            if(var5) { _fun0021_ip = 109; continue _fun0021 }
case 110:
            var5 = _closure1_slot31;
            var11 = var5.bind(var3)();
            var5 = var11.length;
            if(!(var5 >= var7)) { _fun0021_ip = 111; continue _fun0021 }
case 112:
            var7 = var11.at;
            var5 = -1;
            var7 = var7.bind(var11)(var5);
            _closure2_slot0 = var7;
            var5 = _closure1_slot27;
            var16 = var5.bind(var3)(var11);
            var13 = var16.bind(var3)();
            var11 = var13.done;
            var5 = inf;
            var15 = var13;
            var14 = var7;
            var13 = var5;
            var7 = var14;
            var5 = var13;
            if(var11) { _fun0021_ip = 10; continue _fun0021 }
case 113:
            var20 = var15.value;
            var11 = _closure1_slot24;
            var19 = var11[var20];
            var18 = var14;
            var17 = var13;
            if(!(var12 != var19)) { _fun0021_ip = 114; continue _fun0021 }
case 115:
            var21 = var19.affinity;
            var11 = var13;
            if(!(var21 < var13)) { _fun0021_ip = 116; continue _fun0021 }
case 117:
            var11 = var19.affinity;
            _closure2_slot0 = var20;
            var14 = var20;
case 116:
            var18 = var14;
            var17 = var11;
case 114:
            var19 = var16.bind(var3)();
            var11 = var19.done;
            var14 = var18;
            var13 = var17;
            var15 = var19;
            var7 = var14;
            var5 = var13;
            if(!var11) { _fun0021_ip = 113; continue _fun0021 }
case 10:
            if(!(!(var1 < var5))) { _fun0021_ip = 118; continue _fun0021 }
case 119:
            var15 = _closure1_slot21;
            var14 = var15.info;
            var13 = {};
            var13['channelId'] = var6;
            var13['lowestAffinity'] = var5;
            var13['newNudgeAffinity'] = var1;
            var11 = 'handleReplyNudgeSet: Evicting nudge with lowest affinity';
            var11 = var14.bind(var15)(var11, var13);
            var11 = _closure1_slot24;
            var11 = var11[var7];
            _closure2_slot1 = var11;
            if(!(var12 != var11)) { _fun0021_ip = 120; continue _fun0021 }
case 121:
            var11 = var11.isActive;
            if(!var11) { _fun0021_ip = 120; continue _fun0021 }
case 122:
            var12 = _closure1_slot13;
            var11 = var12.getChannel;
            var11 = var11.bind(var12)(var7);
            _closure2_slot2 = var11;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 19;
            var12 = var11[var12];
            var13 = var13.bind(var3)(var12);
            var12 = 18;
            var12 = var11[var12];
            var11 = var11.paths;
            var12 = var13.bind(var3)(var12, var11);
            var11 = var12.then;
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.default;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot20;
                    var3 = var2.REPLY_NUDGE_DISMISSED;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot2;
                    var10 = null;
                    var11 = var10 == var9;
                    var9 = undefined;
                    if(var11) { _fun0022_ip = 60; continue _fun0022 }
case 4:
                    var11 = _closure2_slot2;
                    var9 = var11.type;
case 60:
                    var2['channel_type'] = var9;
                    var9 = _closure2_slot2;
                    var10 = var10 == var9;
                    var9 = undefined;
                    if(var10) { _fun0022_ip = 61; continue _fun0022 }
case 62:
                    var10 = _closure2_slot2;
                    var9 = var10.guild_id;
case 61:
                    var2['guild_id'] = var9;
                    var9 = 'evicted_affinity';
                    var2['dismiss_method'] = var9;
                    var9 = global;
                    var10 = var9.Date;
                    var9 = var10.now;
                    var10 = var9.bind(var10)();
                    var9 = _closure2_slot1;
                    var9 = var9.timestamp;
                    var9 = var10 - var9;
                    var2['nudge_age_ms'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var9.affinity;
                    var2['nudge_author_affinity'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var9.authorId;
                    var2['nudge_author_id'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var9.lastMessageId;
                    var2['nudge_message_id'] = var9;
                    var10 = _closure1_slot15;
                    var9 = var10.isFriend;
                    var7 = _closure2_slot1;
                    var7 = var7.authorId;
                    var7 = var9.bind(var10)(var7);
                    var2['nudge_author_is_friend'] = var7;
                    var7 = var8.getPrivateChannelIds;
                    var8 = var7.bind(var8)();
                    var7 = var8.indexOf;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var2['channel_dm_list_index'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var4);
case 120:
            var4 = _closure1_slot24;
            var4 = delete var4[var7];
case 111:
            var7 = _closure1_slot24;
            var4 = {};
            var4['timestamp'] = var10;
            var10 = true;
            var4['isActive'] = var10;
            var4['lastMessageId'] = var9;
            var4['affinity'] = var1;
            var4['authorId'] = var8;
            var7[var6] = var4;
            var7 = _closure1_slot25;
            var4 = var7.add;
            var4 = var4.bind(var7)(var6);
            return var3;
case 118:
            var4 = _closure1_slot21;
            var3 = var4.info;
            var2 = {};
            var2['channelId'] = var6;
            var2['lowestAffinity'] = var5;
            var2['newNudgeAffinity'] = var1;
            var1 = 'handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.';
            var1 = var3.bind(var4)(var1, var2);
            var1 = false;
            return var1;
case 109:
            var1 = false;
            return var1;
case 107:
            var1 = false;
            return var1;
        }
    };
    var2['REPLY_NUDGE_SET'] = var9;
    var9 = function handleReplyNudgeClear(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot30;
        var2 = undefined;
        var1 = 'manual';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var2['REPLY_NUDGE_CLEAR'] = var9;
    var9 = function handleNudgesInitialized() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = _closure1_slot23;
            if(var1) { _fun0023_ip = 123; continue _fun0023 }
case 124:
            var1 = true;
            _closure1_slot23 = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var5 = var2.ReplyNudgeExperiment;
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'handleNudgesInitialized';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var7 = var2.maxNudgeAge;
            var6 = var2.maxNudgeCount;
            var5 = _closure1_slot29;
            var4 = _closure1_slot24;
            var2 = {};
            var2['maxNudgeAge'] = var7;
            var2['maxNudgeCount'] = var6;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot24 = var2;
            return var1;
case 123:
            var1 = false;
            return var1;
        }
    };
    var2['REPLY_NUDGES_INITIALIZED'] = var9;
    var9 = function handleMessageCreate(arg1) {
        var1 = arg1;
        var1 = var1.message;
        var4 = _closure1_slot30;
        var3 = var1.channel_id;
        var2 = undefined;
        var1 = 'message_sent';
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2['MESSAGE_CREATE'] = var9;
    var9 = function handleMessageReactionAdd(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.userId;
            var4 = _closure1_slot12;
            var1 = var4.getId;
            var1 = var1.bind(var4)();
            var1 = var3 === var1;
            if(!var1) { _fun0024_ip = 8; continue _fun0024 }
case 94:
            var4 = _closure1_slot30;
            var3 = undefined;
            var2 = 'reaction_added';
            var1 = var4.bind(var3)(var5, var2);
case 8:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD'] = var9;
    var9 = function handleChannelSelect(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var6 = var1.channelId;
            var2 = null;
            var1 = var2 != var6;
            if(!var1) { _fun0025_ip = 125; continue _fun0025 }
case 126:
            var2 = var2 == var3;
            if(!var2) { _fun0025_ip = 127; continue _fun0025 }
case 87:
            var5 = _closure1_slot30;
            var4 = undefined;
            var3 = 'channel_opened';
            var2 = var5.bind(var4)(var6, var3);
case 127:
            var1 = var2;
case 125:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = var1.id;
        var3 = _closure1_slot30;
        var2 = undefined;
        var1 = 'channel_deleted';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot24 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot25 = var1;
        var1 = false;
        _closure1_slot22 = var1;
        _closure1_slot23 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();