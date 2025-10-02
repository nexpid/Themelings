// app/modules/threads/ActiveJoinedThreadsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot30 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
            var9 = _closure1_slot32;
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
            var7 = _closure1_slot32;
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
    var _closure1_slot31 = var1;
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
    var _closure1_slot32 = var1;
    var14 = function rebuild() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = {};
            _closure1_slot17 = var1;
            var1 = {};
            _closure1_slot21 = var1;
            var1 = {};
            _closure1_slot18 = var1;
            var1 = {};
            _closure1_slot19 = var1;
            var1 = {};
            _closure1_slot20 = var1;
            var3 = _closure1_slot13;
            var1 = var3.getChannelId;
            var1 = var1.bind(var3)();
            _closure1_slot23 = var1;
            var7 = _closure1_slot24;
            var3 = global;
            var1 = undefined;
            for(var4 in var7)
case 34:
            {
case 39:
                var11 = var4;
                var10 = var3.clearTimeout;
                var9 = _closure1_slot24;
                var9 = var9[var11];
                var9 = var10.bind(var1)(var9);
                _fun0005_ip = 34; continue _fun0005;
            }
case 40:
            var3 = {};
            _closure1_slot24 = var3;
            var5 = _closure1_slot14;
            var4 = var5.forEachGuild;
            var3 = function(arg1) {
                var3 = _closure1_slot35;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot36;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var14;
    var1 = function rebuildGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot17;
            var1 = delete var1[var8];
            var1 = _closure1_slot21;
            var1 = delete var1[var8];
            var1 = _closure1_slot18;
            var1 = delete var1[var8];
            var1 = _closure1_slot19;
            var1 = delete var1[var8];
            var1 = _closure1_slot20;
            var1 = delete var1[var8];
            var2 = _closure1_slot35;
            var1 = undefined;
            var2 = var2.bind(var1)(var8);
            var2 = _closure1_slot19;
            var6 = var2[var8];
            for(var2 in var6)
case 41:
            {
case 42:
                var10 = var2;
                var9 = _closure1_slot38;
                var9 = var9.bind(var1)(var8, var10);
                _fun0006_ip = 41; continue _fun0006;
            }
case 43:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function rebuildGuild_(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot14;
            var2 = var3.getThreadsForGuild;
            var1 = arg1;
            var21 = var2.bind(var3)(var1);
            var19 = var21;
            var1 = undefined;
            var15 = true;
            var13 = null;
            var31 = undefined;
            var30 = undefined;
            var29 = undefined;
            var28 = undefined;
            var27 = undefined;
            var26 = undefined;
            for(var16 in var19)
case 44:
            {
                var7 = var31;
                var6 = var30;
                var5 = var29;
                var4 = var28;
                var3 = var27;
                var2 = var26;
case 45:
                var8 = var16;
                var11 = var21[var8];
                var31 = var7;
                var30 = var6;
                var29 = var5;
                var28 = var4;
                var27 = var3;
                var26 = var2;
                var7 = var31;
                var6 = var30;
                var5 = var29;
                var4 = var28;
                var3 = var27;
                var2 = var26;
                ForInLoopInit(obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                if(var12 === undefined) { _fun0007_ip = 44; continue _fun0007 }
case 46:
                var31 = var7;
                var30 = var6;
                var25 = var4;
                var24 = var3;
                var23 = var2;
                var29 = var5;
                var28 = var25;
                var27 = var24;
                var26 = var23;
                ForInLoopNextIter(next_value_register=7, obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                if(var8 === undefined) { _fun0007_ip = 44; continue _fun0007 }
case 47:
                var28 = var8;
                var26 = _closure1_slot46;
                var26 = var26.bind(var1)(var28);
                var27 = _closure1_slot10;
                var26 = var27.getChannel;
                var27 = var26.bind(var27)(var28);
                var7 = var28;
                var6 = var27;
                var4 = var25;
                var3 = var24;
                var2 = var23;
                if(var13 == var27) { _fun0007_ip = 46; continue _fun0007 }
case 48:
                var29 = _closure1_slot15;
                var26 = var29.joinTimestamp;
                var26 = var26.bind(var29)(var28);
                if(!(var13 == var26)) { _fun0007_ip = 49; continue _fun0007 }
case 25:
                var31 = _closure1_slot47;
                var36 = _closure1_slot19;
                var37 = undefined;
                var35 = var27;
                var34 = var27;
                var33 = false;
                var29 = var37[var31](var36, var35, var34, var33, var32);
                var32 = _closure1_slot12;
                var30 = var32.isForumPostUnread;
                var29 = var27.id;
                var32 = var30.bind(var32)(var29);
                var30 = _closure1_slot20;
                var29 = null;
                if(!var32) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var29 = var27;
case 50:
                var37 = undefined;
                var36 = var30;
                var35 = var27;
                var34 = var29;
                var33 = false;
                var29 = var37[var31](var36, var35, var34, var33, var32);
                var7 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                var3 = var24;
                var2 = var23;
                _fun0007_ip = 46; continue _fun0007;
case 49:
                var25 = {};
                var25['channel'] = var27;
                var23 = var26.getTime;
                var23 = var23.bind(var26)();
                var25['joinTimestamp'] = var23;
                var23 = _closure1_slot44;
                var23 = var23.bind(var1)(var27);
                var24 = var23.isUnread;
                var32 = var23.isRelevant;
                var23 = var23.isTimedRelevant;
                var31 = _closure1_slot47;
                var36 = _closure1_slot17;
                var37 = undefined;
                var35 = var27;
                var34 = var25;
                var33 = false;
                var29 = var37[var31](var36, var35, var34, var33, var32);
                var30 = _closure1_slot21;
                var29 = null;
                if(!var32) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var29 = var25;
case 52:
                var37 = undefined;
                var36 = var30;
                var35 = var27;
                var34 = var29;
                var33 = false;
                var29 = var37[var31](var36, var35, var34, var33, var32);
                var31 = _closure1_slot47;
                var30 = _closure1_slot18;
                var29 = null;
                if(!var24) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var29 = var25;
case 54:
                var37 = undefined;
                var36 = var30;
                var35 = var27;
                var34 = var29;
                var33 = false;
                var29 = var37[var31](var36, var35, var34, var33, var32);
                var7 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                var3 = var24;
                var2 = var23;
                if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 56:
                var29 = _closure1_slot45;
                var29 = var29.bind(var1)(var27, var15);
                var7 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                var3 = var24;
                var2 = var23;
                _fun0007_ip = 46; continue _fun0007;
            }
case 57:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function rebuildNewThreadCounts() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = {};
            _closure1_slot22 = var1;
            var12 = _closure1_slot19;
            var1 = undefined;
            for(var8 in var12)
case 35:
            {
case 58:
                var7 = var8;
                var2 = _closure1_slot19;
                var5 = var2[var7];
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var6 === undefined) { _fun0008_ip = 35; continue _fun0008 }
case 59:
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var2 === undefined) { _fun0008_ip = 35; continue _fun0008 }
case 60:
                var15 = var2;
                var14 = _closure1_slot38;
                var14 = var14.bind(var1)(var7, var15);
                _fun0008_ip = 59; continue _fun0008;
            }
case 61:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function recountChannelId(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot10;
            var3 = var4.getBasicChannel;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var3 = var3 != var1;
            if(!var3) { _fun0009_ip = 9; continue _fun0009 }
case 7:
            var6 = _closure1_slot8;
            var5 = var6.has;
            var4 = var1.type;
            var3 = var5.bind(var6)(var4);
case 9:
            if(!var3) { _fun0009_ip = 4; continue _fun0009 }
case 62:
            var4 = _closure1_slot38;
            var3 = var1.guild_id;
            var2 = var1.id;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function recountParent(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var13 = arg1;
            var12 = arg2;
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var12);
            var5 = null;
            if(!(var5 != var2)) { _fun0010_ip = 63; continue _fun0010 }
case 58:
            var1 = var2.isForumLikeChannel;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var1 = _closure1_slot22;
            var1 = var1[var13];
            if(!(var5 == var1)) { _fun0010_ip = 3; continue _fun0010 }
case 60:
            var2 = _closure1_slot22;
            var1 = {};
            var2[var13] = var1;
case 3:
            var1 = _closure1_slot22;
            var1 = var1[var13];
            var10 = 0;
            var1[var12] = var10;
            var1 = _closure1_slot19;
            var1 = var1[var13];
            if(!(var5 != var1)) { _fun0010_ip = 63; continue _fun0010 }
case 65:
            var1 = _closure1_slot19;
            var1 = var1[var13];
            var1 = var1[var12];
            if(!(var5 != var1)) { _fun0010_ip = 63; continue _fun0010 }
case 66:
            var2 = _closure1_slot11;
            var1 = var2.getGuild;
            var9 = var1.bind(var2)(var13);
            if(!(var5 != var9)) { _fun0010_ip = 63; continue _fun0010 }
case 67:
            var2 = _closure1_slot12;
            var1 = var2.getTrackedAckMessageId;
            var8 = var1.bind(var2)(var12);
            if(!(var5 == var8)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var2 = global;
            var3 = var2.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var4 = var9.joinedAt;
            var3 = var1;
            if(!(var5 != var4)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var5 = var9.joinedAt;
            var4 = var2.Date;
            var5 = var5 instanceof var4;
            var4 = var9.joinedAt;
            if(var5) { _fun0010_ip = 72; continue _fun0010 }
case 73:
            var6 = 'string';
            var5 = typeof var4;
            if(!(var6 === var5)) { _fun0010_ip = 74; continue _fun0010 }
case 75:
            var6 = var2.Date;
            var20 = var9.joinedAt;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var21 = var5;
            var2 = new var21[var6](var20, var19);
            var5 = var2 instanceof Object ? var2 : var5;
            var2 = var5.getTime;
            var1 = var2.bind(var5)();
case 74:
            _fun0010_ip = 76; continue _fun0010;
case 72:
            var2 = var4.getTime;
            var1 = var2.bind(var4)();
case 76:
            var3 = var1;
case 70:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.fromTimestamp;
            var8 = var1.bind(var2)(var3);
case 68:
            var1 = _closure1_slot19;
            var1 = var1[var13];
            var6 = var1[var12];
            var2 = 13;
            var1 = undefined;
            for(var3 in var6)
case 77:
            {
case 78:
                var16 = var3;
                var14 = _closure1_slot23;
                if(!(var12 !== var14)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var2];
                var15 = var15.bind(var1)(var14);
                var14 = var15.compare;
                var14 = var14.bind(var15)(var16, var8);
                var14 = var14 > var10;
                if(!var14) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                var17 = _closure1_slot12;
                var15 = var17.hasOpenedThread;
                var15 = var15.bind(var17)(var16);
                var14 = !var15;
case 81:
                if(!var14) { _fun0010_ip = 77; continue _fun0010 }
case 83:
                var14 = _closure1_slot22;
                var15 = var14[var13];
                var14 = var15[var12];
                var14 = var14 + 1;
                var15[var12] = var14;
                _fun0010_ip = 77; continue _fun0010;
case 79:
                var15 = _closure1_slot12;
                var14 = var15.isNewForumThread;
                var14 = var14.bind(var15)(var16, var12, var9);
                if(!var14) { _fun0010_ip = 77; continue _fun0010 }
case 84:
                var14 = _closure1_slot22;
                var15 = var14[var13];
                var14 = var15[var12];
                var14 = var14 + 1;
                var15[var12] = var14;
                _fun0010_ip = 77; continue _fun0010;
            }
case 63:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function updateThread(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var8 = arg3;
            var10 = null;
            if(!(var10 != var3)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
            var5 = _closure1_slot10;
            var2 = var5.getChannel;
            var7 = var2.bind(var5)(var8);
            var5 = _closure1_slot15;
            var2 = var5.joinTimestamp;
            var5 = var2.bind(var5)(var8);
            if(!(var10 != var7)) { _fun0011_ip = 4; continue _fun0011 }
case 87:
            var6 = _closure1_slot14;
            var2 = var6.isActive;
            var2 = var2.bind(var6)(var4, var3, var8);
            if(var2) { _fun0011_ip = 71; continue _fun0011 }
case 4:
            var9 = _closure1_slot48;
            var18 = _closure1_slot17;
            var6 = undefined;
            var19 = undefined;
            var17 = var4;
            var16 = var3;
            var15 = var8;
            var2 = var19[var9](var18, var17, var16, var15, var14);
            var18 = _closure1_slot21;
            var17 = var4;
            var16 = var3;
            var15 = var8;
            var2 = var19[var9](var18, var17, var16, var15, var14);
            var18 = _closure1_slot18;
            var17 = var4;
            var16 = var3;
            var15 = var8;
            var2 = var19[var9](var18, var17, var16, var15, var14);
            var18 = _closure1_slot19;
            var17 = var4;
            var16 = var3;
            var15 = var8;
            var2 = var19[var9](var18, var17, var16, var15, var14);
            var18 = _closure1_slot20;
            var17 = var4;
            var16 = var3;
            var15 = var8;
            var2 = var19[var9](var18, var17, var16, var15, var14);
            var2 = _closure1_slot46;
            var2 = var2.bind(var6)(var8);
            var2 = _closure1_slot38;
            var2 = var2.bind(var6)(var4, var3);
            _fun0011_ip = 88; continue _fun0011;
case 71:
            if(!(var10 == var5)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
            var8 = _closure1_slot12;
            var6 = var8.isForumPostUnread;
            var2 = var7.id;
            var12 = var6.bind(var8)(var2);
            var11 = _closure1_slot47;
            var18 = _closure1_slot17;
            var8 = undefined;
            var19 = undefined;
            var17 = var7;
            var16 = null;
            var15 = true;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var18 = _closure1_slot18;
            var17 = var7;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var18 = _closure1_slot21;
            var17 = var7;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var18 = _closure1_slot19;
            var17 = var7;
            var16 = var7;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var6 = _closure1_slot20;
            var2 = null;
            if(!var12) { _fun0011_ip = 29; continue _fun0011 }
case 91:
            var2 = var7;
case 29:
            var19 = undefined;
            var18 = var6;
            var17 = var7;
            var16 = var2;
            var15 = true;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var6 = _closure1_slot46;
            var2 = var7.id;
            var2 = var6.bind(var8)(var2);
            _fun0011_ip = 92; continue _fun0011;
case 89:
            var12 = {};
            var12['channel'] = var7;
            var2 = var5.getTime;
            var2 = var2.bind(var5)();
            var12['joinTimestamp'] = var2;
            var2 = _closure1_slot44;
            var6 = undefined;
            var2 = var2.bind(var6)(var7);
            var13 = var2.isUnread;
            var14 = var2.isRelevant;
            var5 = var2.isTimedRelevant;
            var11 = _closure1_slot47;
            var18 = _closure1_slot17;
            var19 = undefined;
            var17 = var7;
            var16 = var12;
            var15 = true;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var8 = _closure1_slot21;
            var2 = null;
            if(!var14) { _fun0011_ip = 93; continue _fun0011 }
case 94:
            var2 = var12;
case 93:
            var19 = undefined;
            var18 = var8;
            var17 = var7;
            var16 = var2;
            var15 = true;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var11 = _closure1_slot47;
            var8 = _closure1_slot18;
            var2 = null;
            if(!var13) { _fun0011_ip = 95; continue _fun0011 }
case 96:
            var2 = var12;
case 95:
            var19 = undefined;
            var18 = var8;
            var17 = var7;
            var16 = var2;
            var15 = true;
            var2 = var19[var11](var18, var17, var16, var15, var14);
            var8 = _closure1_slot47;
            var18 = _closure1_slot19;
            var17 = var7;
            var16 = null;
            var2 = var19[var8](var18, var17, var16, var15, var14);
            var18 = _closure1_slot20;
            var17 = var7;
            var2 = var19[var8](var18, var17, var16, var15, var14);
            var2 = _closure1_slot45;
            var2 = var2.bind(var6)(var7, var5);
case 92:
            var2 = _closure1_slot38;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
case 88:
            var1 = undefined;
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var13 = function handleThreadUpdate(arg1) {
        var1 = arg1;
        var5 = _closure1_slot39;
        var2 = var1.channel;
        var4 = var2.guild_id;
        var2 = var1.channel;
        var3 = var2.parent_id;
        var1 = var1.channel;
        var2 = var1.id;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var1 = function anyThreadsNSFW(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
            var2 = _closure1_slot17;
            var2 = var2[var4];
            var5 = var1 == var2;
            var13 = null;
            if(var5) { _fun0012_ip = 99; continue _fun0012 }
case 100:
            var13 = var2[var3];
case 99:
            if(!(var1 != var13)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
            var11 = var13;
            var6 = 14;
            var5 = undefined;
            for(var7 in var11)
case 103:
            {
case 104:
                var2 = var7;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var6];
                var15 = var15.bind(var5)(var14);
                var14 = var15.isChannelContentGated;
                var2 = var13[var2];
                var2 = var2.channel;
                var2 = var14.bind(var15)(var2);
                if(!var2) { _fun0012_ip = 103; continue _fun0012 }
case 105:
                var2 = true;
                return var2;
            }
case 101:
            var2 = _closure1_slot19;
            var2 = var2[var4];
            var4 = var1 == var2;
            var9 = null;
            if(var4) { _fun0012_ip = 106; continue _fun0012 }
case 107:
            var9 = var2[var3];
case 106:
            if(!(var1 != var9)) { _fun0012_ip = 108; continue _fun0012 }
case 109:
            var7 = var9;
            var3 = 14;
            var2 = undefined;
            for(var4 in var7)
case 110:
            {
case 111:
                var1 = var4;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var3];
                var12 = var12.bind(var2)(var11);
                var11 = var12.isChannelContentGated;
                var1 = var9[var1];
                var1 = var11.bind(var12)(var1);
                if(!var1) { _fun0012_ip = 110; continue _fun0012 }
case 112:
                var1 = true;
                return var1;
            }
case 108:
            var1 = false;
            return var1;
case 97:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var12 = function handleThreadMemberUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot10;
            var4 = var5.getChannel;
            var2 = var1.id;
            var2 = var4.bind(var5)(var2);
            var4 = null;
            var4 = var4 == var2;
            if(var4) { _fun0013_ip = 3; continue _fun0013 }
case 113:
            var8 = _closure1_slot14;
            var7 = var8.isActive;
            var6 = var1.guildId;
            var5 = var2.parent_id;
            var1 = var1.id;
            var1 = var7.bind(var8)(var6, var5, var1);
            var4 = !var1;
case 3:
            var1 = !var4;
            if(var4) { _fun0013_ip = 114; continue _fun0013 }
case 39:
            var6 = _closure1_slot39;
            var5 = var2.guild_id;
            var4 = var2.parent_id;
            var3 = var2.id;
            var2 = undefined;
            var1 = var6.bind(var2)(var5, var4, var3);
case 114:
            return var1;
        }
    };
    var11 = function handleReadStateChannelAction(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot10;
            var3 = var4.getChannel;
            var2 = arg1;
            var2 = var2.channelId;
            var9 = var3.bind(var4)(var2);
            var10 = null;
            if(!(var10 != var9)) { _fun0014_ip = 115; continue _fun0014 }
case 113:
            var5 = var9.guild_id;
            var4 = var9.parent_id;
            var6 = _closure1_slot9;
            var3 = var6.has;
            var2 = var9.type;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0014_ip = 106; continue _fun0014 }
case 34:
            var2 = global;
            var3 = var2.Number;
            var2 = _closure1_slot22;
            var8 = var2[var5];
            var6 = var10 == var8;
            var7 = undefined;
            var2 = undefined;
            if(var6) { _fun0014_ip = 116; continue _fun0014 }
case 117:
            var6 = var9.id;
            var2 = var8[var6];
case 116:
            var3 = var3.bind(var7)(var2);
            var2 = 0;
            var2 = var3 > var2;
            if(!var2) { _fun0014_ip = 46; continue _fun0014 }
case 118:
            var6 = _closure1_slot38;
            var3 = var9.id;
            var3 = var6.bind(var7)(var5, var3);
            var2 = true;
case 46:
            return var2;
case 106:
            if(!(var10 != var4)) { _fun0014_ip = 53; continue _fun0014 }
case 119:
            var6 = _closure1_slot49;
            var2 = _closure1_slot17;
            var3 = undefined;
            var2 = var6.bind(var3)(var2, var9);
            if(var2) { _fun0014_ip = 120; continue _fun0014 }
case 121:
            var6 = _closure1_slot49;
            var2 = _closure1_slot20;
            var6 = var6.bind(var3)(var2, var9);
            var8 = _closure1_slot12;
            var7 = var8.isForumPostUnread;
            var2 = var9.id;
            var2 = var7.bind(var8)(var2);
            if(!(var2 !== var6)) { _fun0014_ip = 122; continue _fun0014 }
case 123:
            var8 = _closure1_slot47;
            var7 = _closure1_slot20;
            var6 = null;
            if(!var2) { _fun0014_ip = 73; continue _fun0014 }
case 124:
            var6 = var9;
case 73:
            var12 = true;
            var16 = undefined;
            var15 = var7;
            var14 = var9;
            var13 = var6;
            var2 = var16[var8](var15, var14, var13, var12, var11);
            _fun0014_ip = 125; continue _fun0014;
case 122:
            var2 = false;
            return var2;
case 120:
            var2 = _closure1_slot44;
            var6 = var2.bind(var3)(var9);
            var11 = var6.isUnread;
            var2 = var6.isRelevant;
            var7 = _closure1_slot45;
            var6 = var6.isTimedRelevant;
            var6 = var7.bind(var3)(var9, var6);
            var8 = _closure1_slot49;
            var6 = _closure1_slot18;
            var7 = var8.bind(var3)(var6, var9);
            var6 = _closure1_slot21;
            var6 = var8.bind(var3)(var6, var9);
            if(!(var11 === var7)) { _fun0014_ip = 126; continue _fun0014 }
case 127:
            if(!(var2 !== var6)) { _fun0014_ip = 128; continue _fun0014 }
case 126:
            var6 = _closure1_slot17;
            var6 = var6[var5];
            var7 = var6[var4];
            var6 = var9.id;
            var7 = var7[var6];
            var8 = null;
            if(!var2) { _fun0014_ip = 129; continue _fun0014 }
case 130:
            var8 = var7;
case 129:
            var6 = _closure1_slot47;
            var2 = _closure1_slot18;
            var10 = null;
            if(!var11) { _fun0014_ip = 131; continue _fun0014 }
case 132:
            var10 = var7;
case 131:
            var16 = undefined;
            var15 = var2;
            var14 = var9;
            var13 = var10;
            var12 = true;
            var2 = var16[var6](var15, var14, var13, var12, var11);
            var6 = _closure1_slot47;
            var15 = _closure1_slot21;
            var14 = var9;
            var13 = var8;
            var2 = var16[var6](var15, var14, var13, var12, var11);
            var2 = _closure1_slot38;
            var2 = var2.bind(var3)(var5, var4);
            _fun0014_ip = 125; continue _fun0014;
case 128:
            var2 = false;
            return var2;
case 53:
            var2 = false;
            return var2;
case 115:
            var2 = _closure1_slot42;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 125:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot41 = var11;
    var5 = function rebuildReadStates() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = {};
            _closure1_slot18 = var1;
            var1 = {};
            _closure1_slot21 = var1;
            var22 = _closure1_slot17;
            var1 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            for(var18 in var22)
case 133:
            {
                var10 = var9;
                var5 = var8;
                var4 = var7;
                var3 = var6;
case 134:
                var17 = var18;
                var11 = _closure1_slot17;
                var15 = var11[var17];
                var9 = var10;
                var8 = var5;
                var7 = var4;
                var6 = var3;
                var27 = var9;
                var26 = var8;
                var25 = var7;
                var24 = var6;
                ForInLoopInit(obj_props_register=15, obj_register=14, iter_index_register=13, iter_size_register=12);
                if(var16 === undefined) { _fun0015_ip = 133; continue _fun0015 }
case 135:
                var9 = var27;
                var5 = var26;
                var4 = var25;
                var3 = var24;
                var8 = var5;
                var7 = var4;
                var6 = var3;
                ForInLoopNextIter(next_value_register=11, obj_props_register=15, obj_register=14, iter_index_register=13, iter_size_register=12);
                if(var12 === undefined) { _fun0015_ip = 133; continue _fun0015 }
case 136:
                var11 = var12;
                var6 = _closure1_slot17;
                var6 = var6[var17];
                var9 = var6[var11];
                var27 = var11;
                var26 = var5;
                var25 = var4;
                var24 = var3;
                var5 = var26;
                var4 = var25;
                var3 = var24;
                ForInLoopInit(obj_props_register=9, obj_register=8, iter_index_register=7, iter_size_register=6);
                if(var10 === undefined) { _fun0015_ip = 135; continue _fun0015 }
case 137:
                var26 = var5;
                var25 = var4;
                var24 = var3;
                var27 = var11;
                ForInLoopNextIter(next_value_register=5, obj_props_register=9, obj_register=8, iter_index_register=7, iter_size_register=6);
                if(var6 === undefined) { _fun0015_ip = 135; continue _fun0015 }
case 138:
                var25 = var6;
                var24 = _closure1_slot17;
                var24 = var24[var17];
                var24 = var24[var11];
                var25 = var24[var25];
                var26 = _closure1_slot44;
                var24 = var25.channel;
                var24 = var26.bind(var1)(var24);
                var26 = var24.isUnread;
                var4 = var24.isRelevant;
                var24 = var24.isTimedRelevant;
                if(!var26) { _fun0015_ip = 139; continue _fun0015 }
case 140:
                var28 = _closure1_slot47;
                var32 = _closure1_slot18;
                var31 = var25.channel;
                var33 = undefined;
                var30 = var25;
                var29 = false;
                var26 = var33[var28](var32, var31, var30, var29, var28);
case 139:
                if(!var4) { _fun0015_ip = 127; continue _fun0015 }
case 14:
                var28 = _closure1_slot47;
                var32 = _closure1_slot21;
                var31 = var25.channel;
                var33 = undefined;
                var30 = var25;
                var29 = false;
                var26 = var33[var28](var32, var31, var30, var29, var28);
case 127:
                var27 = _closure1_slot45;
                var26 = var25.channel;
                var26 = var27.bind(var1)(var26, var24);
                var5 = var25;
                var3 = var24;
                _fun0015_ip = 137; continue _fun0015;
            }
case 141:
            var3 = {};
            _closure1_slot20 = var3;
            var19 = _closure1_slot19;
            var5 = undefined;
            var4 = undefined;
            for(var16 in var19)
case 142:
            {
                var6 = var5;
                var3 = var4;
case 143:
                var15 = var16;
                var7 = _closure1_slot19;
                var13 = var7[var15];
                var5 = var6;
                var4 = var3;
                var23 = var5;
                var22 = var4;
                ForInLoopInit(obj_props_register=13, obj_register=12, iter_index_register=11, iter_size_register=10);
                if(var14 === undefined) { _fun0015_ip = 142; continue _fun0015 }
case 53:
                var5 = var23;
                var3 = var22;
                var4 = var3;
                ForInLoopNextIter(next_value_register=9, obj_props_register=13, obj_register=12, iter_index_register=11, iter_size_register=10);
                if(var10 === undefined) { _fun0015_ip = 142; continue _fun0015 }
case 83:
                var9 = var10;
                var4 = _closure1_slot19;
                var4 = var4[var15];
                var7 = var4[var9];
                var23 = var9;
                var22 = var3;
                var3 = var22;
                ForInLoopInit(obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                if(var8 === undefined) { _fun0015_ip = 53; continue _fun0015 }
case 144:
                var22 = var3;
                var23 = var9;
                ForInLoopNextIter(next_value_register=3, obj_props_register=7, obj_register=6, iter_index_register=5, iter_size_register=4);
                if(var4 === undefined) { _fun0015_ip = 53; continue _fun0015 }
case 145:
                var25 = var4;
                var22 = _closure1_slot19;
                var22 = var22[var15];
                var22 = var22[var9];
                var22 = var22[var25];
                var24 = _closure1_slot12;
                var23 = var24.isForumPostUnread;
                var23 = var23.bind(var24)(var25);
                var3 = var22;
                if(!var23) { _fun0015_ip = 144; continue _fun0015 }
case 146:
                var24 = _closure1_slot47;
                var32 = _closure1_slot20;
                var33 = undefined;
                var31 = var22;
                var30 = var22;
                var29 = false;
                var23 = var33[var24](var32, var31, var30, var29, var28);
                var3 = var22;
                _fun0015_ip = 144; continue _fun0015;
            }
case 147:
            var2 = _closure1_slot36;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot42 = var5;
    var1 = function updateSelectedChannel() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = _closure1_slot23;
            var3 = _closure1_slot13;
            var1 = var3.getChannelId;
            var1 = var1.bind(var3)();
            _closure1_slot23 = var1;
            if(!(var1 !== var4)) { _fun0016_ip = 59; continue _fun0016 }
case 148:
            var3 = _closure1_slot37;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var2 = _closure1_slot23;
            var2 = var3.bind(var1)(var2);
            return var1;
case 59:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function parseThreadState(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot12;
            var3 = var4.getMentionCount;
            var2 = var8.id;
            var3 = var3.bind(var4)(var2);
            var2 = 0;
            var4 = var3 > var2;
            var5 = _closure1_slot12;
            var3 = var5.hasUnread;
            var2 = var8.id;
            var5 = var3.bind(var5)(var2);
            if(!var5) { _fun0017_ip = 149; continue _fun0017 }
case 8:
            var6 = _closure1_slot15;
            var3 = var6.isMuted;
            var2 = var8.id;
            var2 = var3.bind(var6)(var2);
            var5 = !var2;
case 149:
            var3 = var8.hasFlag;
            var2 = _closure1_slot16;
            var2 = var2.PINNED;
            var6 = var3.bind(var8)(var2);
            var2 = var8.isActiveThread;
            var3 = var2.bind(var8)();
            var2 = var3;
            if(!var3) { _fun0017_ip = 18; continue _fun0017 }
case 101:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var7 = undefined;
            var1 = var9.bind(var7)(var1);
            var7 = var1.bind(var7)(var8);
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            var2 = var7 > var1;
case 18:
            var1 = {};
            if(var3) { _fun0017_ip = 150; continue _fun0017 }
case 151:
            var3 = var6;
case 150:
            if(!var3) { _fun0017_ip = 152; continue _fun0017 }
case 153:
            var3 = var5;
case 152:
            if(var3) { _fun0017_ip = 154; continue _fun0017 }
case 155:
            var3 = var4;
case 154:
            var1['isUnread'] = var3;
            var3 = var2;
            if(var3) { _fun0017_ip = 156; continue _fun0017 }
case 157:
            var3 = var6;
case 156:
            if(var3) { _fun0017_ip = 112; continue _fun0017 }
case 123:
            var3 = var5;
case 112:
            if(var3) { _fun0017_ip = 158; continue _fun0017 }
case 159:
            var3 = var4;
case 158:
            var1['isRelevant'] = var3;
            var1['isTimedRelevant'] = var2;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function syncTimer(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot46;
            var2 = var3.id;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = arg2;
            if(!var2) { _fun0018_ip = 133; continue _fun0018 }
case 38:
            var2 = function setTimer(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot24;
                var3 = var8.id;
                var5 = global;
                var6 = var5.setTimeout;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 15;
                var7 = var7[var1];
                var1 = undefined;
                var7 = var9.bind(var1)(var7);
                var7 = var7.bind(var1)(var8);
                var8 = var5.Date;
                var5 = var8.now;
                var5 = var5.bind(var8)();
                var7 = var7 - var5;
                var5 = 1;
                var5 = var7 + var5;
                var2 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var4 = _closure1_slot10;
                        var3 = var4.getChannel;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var4 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var4)) { _fun0019_ip = 160; continue _fun0019 }
case 100:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'THREAD_UPDATE';
                        var1['type'] = var5;
                        var1['channel'] = var4;
                        var1 = var2.bind(var3)(var1);
case 160:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var1)(var2, var5);
                var4[var3] = var2;
                return var1;
            };
            var2 = var2.bind(var1)(var3);
case 133:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function clearTimer(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot24;
            var3 = var2 in var3;
            if(!var3) { _fun0020_ip = 64; continue _fun0020 }
case 161:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot24;
            var4 = var3[var2];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var1 = _closure1_slot24;
            var1 = delete var1[var2];
case 64:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function updateIn(arg1, arg2, arg3, arg4) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var6 = arg3;
            var1 = var4.guild_id;
            var2 = var4.parent_id;
            var5 = var4.id;
            var4 = null;
            var7 = var4 != var1;
            if(!var7) { _fun0021_ip = 162; continue _fun0021 }
case 113:
            var7 = var4 != var2;
case 162:
            if(!var7) { _fun0021_ip = 163; continue _fun0021 }
case 164:
            var7 = var4 != var5;
case 163:
            if(!var7) { _fun0021_ip = 48; continue _fun0021 }
case 59:
            var7 = var1 in var3;
            if(var7) { _fun0021_ip = 134; continue _fun0021 }
case 165:
            var7 = {};
            var3[var1] = var7;
case 134:
            var7 = var3[var1];
            var7 = var2 in var7;
            if(var7) { _fun0021_ip = 166; continue _fun0021 }
case 61:
            var8 = var3[var1];
            var7 = {};
            var8[var2] = var7;
case 166:
            var7 = arg4;
            if(!var7) { _fun0021_ip = 167; continue _fun0021 }
case 168:
            var7 = {};
            var10 = var3[var1];
            var11 = var7;
            var8 = copyDataProperties(var11, var10);
            var8 = {};
            var9 = var3[var1];
            var10 = var9[var2];
            var11 = var8;
            var9 = copyDataProperties(var11, var10);
            var7[var2] = var8;
            var3[var1] = var7;
case 167:
            if(!(var4 !== var6)) { _fun0021_ip = 169; continue _fun0021 }
case 46:
            var4 = var3[var1];
            var4 = var4[var2];
            var4[var5] = var6;
            _fun0021_ip = 48; continue _fun0021;
case 169:
            var4 = var3[var1];
            var4 = var4[var2];
            var4 = delete var4[var5];
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 17;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.isEmpty;
            var4 = var3[var1];
            var4 = var4[var2];
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0021_ip = 48; continue _fun0021 }
case 108:
            var1 = var3[var1];
            var1 = delete var1[var2];
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function deleteIn(arg1, arg2, arg3, arg4) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var2 = arg3;
            var5 = arg4;
            var6 = null;
            var4 = var6 != var1;
            if(!var4) { _fun0022_ip = 170; continue _fun0022 }
case 171:
            var4 = var6 != var2;
case 170:
            if(!var4) { _fun0022_ip = 58; continue _fun0022 }
case 38:
            var4 = var6 != var5;
case 58:
            if(!var4) { _fun0022_ip = 60; continue _fun0022 }
case 100:
            var7 = _closure1_slot50;
            var12 = undefined;
            var11 = var3;
            var10 = var1;
            var9 = var2;
            var8 = var5;
            var4 = var12[var7](var11, var10, var9, var8, var7);
case 60:
            if(!var4) { _fun0022_ip = 21; continue _fun0022 }
case 172:
            var4 = {};
            var10 = var3[var1];
            var11 = var4;
            var6 = copyDataProperties(var11, var10);
            var6 = {};
            var7 = var3[var1];
            var10 = var7[var2];
            var11 = var6;
            var7 = copyDataProperties(var11, var10);
            var4[var2] = var6;
            var3[var1] = var4;
            var4 = var3[var1];
            var4 = var4[var2];
            var4 = delete var4[var5];
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 17;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.isEmpty;
            var4 = var3[var1];
            var4 = var4[var2];
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0022_ip = 21; continue _fun0022 }
case 69:
            var1 = var3[var1];
            var1 = delete var1[var2];
case 21:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function exists(arg1, arg2) {
        var1 = arg2;
        var6 = _closure1_slot50;
        var9 = var1.guild_id;
        var8 = var1.parent_id;
        var7 = var1.id;
        var11 = undefined;
        var10 = arg1;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function existsIn(arg1, arg2, arg3, arg4) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = arg3;
            var1 = var2 in var4;
            if(!var1) { _fun0023_ip = 173; continue _fun0023 }
case 174:
            var5 = var4[var2];
            var1 = var3 in var5;
case 173:
            if(!var1) { _fun0023_ip = 175; continue _fun0023 }
case 176:
            var2 = var4[var2];
            var3 = var2[var3];
            var2 = arg4;
            var1 = var2 in var3;
case 175:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.THREADED_CHANNEL_TYPES;
    var _closure1_slot8 = var4;
    var2 = var2.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ChannelFlags;
    var _closure1_slot16 = var2;
    var2 = {};
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = {};
    var _closure1_slot19 = var2;
    var2 = {};
    var _closure1_slot20 = var2;
    var2 = {};
    var _closure1_slot21 = var2;
    var2 = {};
    var _closure1_slot22 = var2;
    var2 = null;
    var _closure1_slot23 = var2;
    var2 = {};
    var _closure1_slot24 = var2;
    var2 = {};
    var _closure1_slot25 = var2;
    var4 = {};
    var _closure1_slot26 = var4;
    var4 = {};
    var _closure1_slot27 = var4;
    var4 = {};
    var _closure1_slot28 = var4;
    var4 = {};
    var _closure1_slot29 = var4;
    var4 = 18;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function ActiveJoinedThreadsStore() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
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
                var1 = _closure1_slot30;
                var1 = var1.bind(var3)();
                if(var1) { _fun0024_ip = 177; continue _fun0024 }
case 59:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0024_ip = 114; continue _fun0024;
case 177:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 114:
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
            var7 = var4.waitFor;
            var11 = _closure1_slot14;
            var10 = _closure1_slot10;
            var9 = _closure1_slot15;
            var8 = _closure1_slot12;
            var12 = var4;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot43;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasActiveJoinedUnreadThreads';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot18;
                var1 = var3 in var1;
                if(!var1) { _fun0025_ip = 58; continue _fun0025 }
case 161:
                var2 = _closure1_slot18;
                var3 = var2[var3];
                var2 = arg2;
                var1 = var2 in var3;
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActiveUnjoinedThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot19;
                var1 = var3 in var1;
                if(!var1) { _fun0026_ip = 162; continue _fun0026 }
case 161:
                var1 = _closure1_slot19;
                var3 = var1[var3];
                var1 = arg2;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0026_ip = 175; continue _fun0026 }
case 162:
                var1 = _closure1_slot28;
case 175:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActiveJoinedThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot17;
                var1 = var3 in var1;
                if(!var1) { _fun0027_ip = 162; continue _fun0027 }
case 161:
                var1 = _closure1_slot17;
                var3 = var1[var3];
                var1 = arg2;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0027_ip = 175; continue _fun0027 }
case 162:
                var1 = _closure1_slot27;
case 175:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAllActiveJoinedThreads';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getActiveJoinedThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = _closure1_slot17;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0028_ip = 173; continue _fun0028 }
case 33:
                var1 = _closure1_slot25;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getActiveJoinedUnreadThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure1_slot18;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0029_ip = 173; continue _fun0029 }
case 33:
                var1 = _closure1_slot25;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActiveJoinedUnreadThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = this;
                var2 = var3.getActiveJoinedUnreadThreadsForGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0030_ip = 178; continue _fun0030 }
case 7:
                var1 = _closure1_slot27;
case 178:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getActiveJoinedRelevantThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = _closure1_slot21;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0031_ip = 173; continue _fun0031 }
case 33:
                var1 = _closure1_slot25;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getActiveJoinedRelevantThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = this;
                var2 = var3.getActiveJoinedRelevantThreadsForGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0032_ip = 178; continue _fun0032 }
case 7:
                var1 = _closure1_slot27;
case 178:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getActiveUnjoinedThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = _closure1_slot19;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0033_ip = 173; continue _fun0033 }
case 33:
                var1 = _closure1_slot26;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getActiveUnjoinedUnreadThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var3 = _closure1_slot20;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0034_ip = 173; continue _fun0034 }
case 33:
                var1 = _closure1_slot25;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getActiveUnjoinedUnreadThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = this;
                var2 = var3.getActiveUnjoinedUnreadThreadsForGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0035_ip = 99; continue _fun0035 }
case 58:
                var1 = _closure1_slot27;
case 99:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getNewThreadCountsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = _closure1_slot22;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0036_ip = 173; continue _fun0036 }
case 33:
                var1 = _closure1_slot29;
case 173:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'computeAllActiveJoinedThreads';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var21 = arg1;
                var1 = new Array(0);
                var19 = _closure1_slot17;
                var14 = null;
                var2 = undefined;
                for(var15 in var19)
case 148:
                {
                    var3 = var2;
case 179:
                    var13 = var15;
                    if(!(var13 !== var21)) { _fun0037_ip = 165; continue _fun0037 }
case 59:
                    var2 = var3;
                    if(var14 != var21) { _fun0037_ip = 148; continue _fun0037 }
case 165:
                    var4 = _closure1_slot17;
                    var11 = var4[var13];
                    var2 = var3;
                    var22 = var2;
                    ForInLoopInit(obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                    if(var12 === undefined) { _fun0037_ip = 148; continue _fun0037 }
case 180:
                    var2 = var22;
                    ForInLoopNextIter(next_value_register=7, obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                    if(var8 === undefined) { _fun0037_ip = 148; continue _fun0037 }
case 181:
                    var7 = var8;
                    var2 = _closure1_slot17;
                    var2 = var2[var13];
                    var5 = var2[var7];
                    var22 = var7;
                    ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                    if(var6 === undefined) { _fun0037_ip = 180; continue _fun0037 }
case 66:
                    var22 = var7;
                    ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                    if(var2 === undefined) { _fun0037_ip = 180; continue _fun0037 }
case 167:
                    var24 = var2;
                    var23 = var1.push;
                    var22 = _closure1_slot17;
                    var22 = var22[var13];
                    var22 = var22[var7];
                    var22 = var22[var24];
                    var22 = var22.channel;
                    var22 = var23.bind(var1)(var22);
                    _fun0037_ip = 66; continue _fun0037;
                }
case 182:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getNewThreadCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var2 = _closure1_slot22;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0038_ip = 58; continue _fun0038 }
case 170:
                var3 = arg2;
                var2 = var4[var3];
case 58:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0038_ip = 179; continue _fun0038 }
case 164:
                var1 = var2;
case 179:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getActiveThreadCount';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = 17;
                var2 = var1[var9];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.size;
                var2 = _closure1_slot17;
                var10 = var2[var8];
                var5 = null;
                var11 = var5 == var10;
                var2 = undefined;
                if(var11) { _fun0039_ip = 103; continue _fun0039 }
case 8:
                var2 = var10[var7];
case 103:
                if(!(var5 == var2)) { _fun0039_ip = 183; continue _fun0039 }
case 172:
                var2 = {};
case 183:
                var2 = var3.bind(var4)(var2);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var4 = var4.bind(var1)(var3);
                var3 = var4.size;
                var6 = _closure1_slot19;
                var6 = var6[var8];
                var8 = var5 == var6;
                var1 = undefined;
                if(var8) { _fun0039_ip = 184; continue _fun0039 }
case 185:
                var1 = var6[var7];
case 184:
                if(!(var5 == var1)) { _fun0039_ip = 186; continue _fun0039 }
case 118:
                var1 = {};
case 186:
                var1 = var3.bind(var4)(var1);
                var1 = var2 + var1;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'ActiveJoinedThreadsStore';
    var9['displayName'] = var4;
    var4 = 16;
    var4 = var7[var4];
    var18 = var8.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var14;
    var4['OVERLAY_INITIALIZE'] = var14;
    var15 = function handleThreadListSync(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot34;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['THREAD_LIST_SYNC'] = var15;
    var4['LOAD_THREADS_SUCCESS'] = var14;
    var4['LOAD_ARCHIVED_THREADS_SUCCESS'] = var14;
    var4['SEARCH_MESSAGES_SUCCESS'] = var14;
    var4['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var14;
    var15 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot34;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_CREATE'] = var15;
    var4['GUILD_DELETE'] = var14;
    var4['CURRENT_USER_UPDATE'] = var14;
    var4['THREAD_CREATE'] = var13;
    var4['THREAD_UPDATE'] = var13;
    var4['THREAD_DELETE'] = var13;
    var13 = function handleChannelUpdates(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channels;
            var3 = _closure1_slot31;
            var1 = undefined;
            var6 = var3.bind(var1)(var4);
            var4 = var6.bind(var1)();
            var3 = var4.done;
            var5 = 14;
            if(var3) { _fun0040_ip = 187; continue _fun0040 }
case 162:
            var3 = var4.value;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var5];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isChannelContentGated;
            var7 = var7.bind(var8)(var3);
            var9 = _closure1_slot40;
            var8 = var3.guild_id;
            var3 = var3.parent_id;
            var3 = var9.bind(var1)(var8, var3);
            if(!(var7 === var3)) { _fun0040_ip = 184; continue _fun0040 }
case 15:
            var7 = var6.bind(var1)();
            var3 = var7.done;
            var4 = var7;
            if(var3) { _fun0040_ip = 187; continue _fun0040 }
case 105:
            _fun0040_ip = 162; continue _fun0040;
case 184:
            var2 = _closure1_slot33;
            var2 = var2.bind(var1)();
            return var1;
case 187:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var13;
    var13 = function handleChannelDelete(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = var3.guild_id;
            var2 = null;
            var4 = var2 != var1;
            if(!var4) { _fun0041_ip = 58; continue _fun0041 }
case 188:
            var1 = var3.parent_id;
            var4 = var2 != var1;
case 58:
            var1 = false;
            if(!var4) { _fun0041_ip = 189; continue _fun0041 }
case 133:
            var6 = var3.guild_id;
            var5 = _closure1_slot17;
            var5 = var6 in var5;
            if(!var5) { _fun0041_ip = 42; continue _fun0041 }
case 103:
            var7 = var3.parent_id;
            var8 = _closure1_slot17;
            var6 = var3.guild_id;
            var6 = var8[var6];
            var5 = var7 in var6;
case 42:
            var2 = false;
            if(!var5) { _fun0041_ip = 190; continue _fun0041 }
case 191:
            var6 = _closure1_slot17;
            var5 = var3.guild_id;
            var6 = var6[var5];
            var5 = var3.parent_id;
            var5 = delete var6[var5];
            var2 = true;
case 190:
            var6 = var3.guild_id;
            var5 = _closure1_slot18;
            var5 = var6 in var5;
            if(!var5) { _fun0041_ip = 192; continue _fun0041 }
case 193:
            var7 = var3.parent_id;
            var8 = _closure1_slot18;
            var6 = var3.guild_id;
            var6 = var8[var6];
            var5 = var7 in var6;
case 192:
            if(!var5) { _fun0041_ip = 20; continue _fun0041 }
case 194:
            var6 = _closure1_slot18;
            var5 = var3.guild_id;
            var6 = var6[var5];
            var5 = var3.parent_id;
            var5 = delete var6[var5];
            var2 = true;
case 20:
            var6 = var3.guild_id;
            var5 = _closure1_slot21;
            var5 = var6 in var5;
            if(!var5) { _fun0041_ip = 195; continue _fun0041 }
case 24:
            var7 = var3.parent_id;
            var8 = _closure1_slot21;
            var6 = var3.guild_id;
            var6 = var8[var6];
            var5 = var7 in var6;
case 195:
            if(!var5) { _fun0041_ip = 196; continue _fun0041 }
case 197:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 13;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.keys;
            var8 = _closure1_slot21;
            var5 = var3.guild_id;
            var8 = var8[var5];
            var5 = var3.parent_id;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.forEach;
            var5 = _closure1_slot46;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot21;
            var5 = var3.guild_id;
            var6 = var6[var5];
            var5 = var3.parent_id;
            var5 = delete var6[var5];
            var2 = true;
case 196:
            var6 = var3.guild_id;
            var5 = _closure1_slot19;
            var5 = var6 in var5;
            if(!var5) { _fun0041_ip = 198; continue _fun0041 }
case 199:
            var7 = var3.parent_id;
            var8 = _closure1_slot19;
            var6 = var3.guild_id;
            var6 = var8[var6];
            var5 = var7 in var6;
case 198:
            if(!var5) { _fun0041_ip = 200; continue _fun0041 }
case 78:
            var6 = _closure1_slot19;
            var5 = var3.guild_id;
            var6 = var6[var5];
            var5 = var3.parent_id;
            var5 = delete var6[var5];
            var2 = true;
case 200:
            var6 = var3.guild_id;
            var5 = _closure1_slot20;
            var5 = var6 in var5;
            if(!var5) { _fun0041_ip = 125; continue _fun0041 }
case 201:
            var7 = var3.parent_id;
            var8 = _closure1_slot20;
            var6 = var3.guild_id;
            var6 = var8[var6];
            var5 = var7 in var6;
case 125:
            if(!var5) { _fun0041_ip = 202; continue _fun0041 }
case 203:
            var6 = _closure1_slot20;
            var5 = var3.guild_id;
            var6 = var6[var5];
            var5 = var3.parent_id;
            var5 = delete var6[var5];
            var2 = true;
case 202:
            var1 = var2;
            if(!var2) { _fun0041_ip = 189; continue _fun0041 }
case 204:
            var6 = _closure1_slot38;
            var5 = var3.guild_id;
            var4 = var3.parent_id;
            var3 = undefined;
            var3 = var6.bind(var3)(var5, var4);
            var1 = var2;
case 189:
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var13;
    var4['THREAD_MEMBER_UPDATE'] = var12;
    var4['THREAD_MEMBERS_UPDATE'] = var12;
    var4['LOAD_MESSAGES_SUCCESS'] = var11;
    var4['MESSAGE_CREATE'] = var11;
    var4['MESSAGE_DELETE'] = var11;
    var4['MESSAGE_DELETE_BULK'] = var11;
    var4['MESSAGE_ACK'] = var11;
    var4['CHANNEL_ACK'] = var11;
    var4['CHANNEL_LOCAL_ACK'] = var11;
    var11 = function handleChannelSelect(arg1) {
        var4 = _closure1_slot41;
        var1 = undefined;
        var3 = arg1;
        var3 = var4.bind(var1)(var3);
        var2 = _closure1_slot43;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['CHANNEL_SELECT'] = var11;
    var10 = function handlePassiveUpdateV2(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channels;
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0042_ip = 173; continue _fun0042 }
case 33:
            var2 = undefined;
            return var2;
case 173:
            var3 = _closure1_slot34;
            var2 = var1.guildId;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4['PASSIVE_UPDATE_V2'] = var10;
    var4['WINDOW_FOCUS'] = var5;
    var4['UPDATE_CHANNEL_DIMENSIONS'] = var5;
    var4['TRY_ACK'] = var5;
    var4['BULK_ACK'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var19 = var5;
    var17 = var4;
    var4 = new var19[var9](var18, var17, var16);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/threads/ActiveJoinedThreadsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_GUILD_JOINED_THREADS'] = var2;
    return var1;
})();