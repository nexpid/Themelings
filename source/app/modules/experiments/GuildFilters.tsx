// app/modules/experiments/GuildFilters.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function isInRange(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = arg2;
            var2 = arg3;
            var8 = undefined;
            var4 = undefined;
            var5 = undefined;
            var3 = undefined;
case 36: // try_start_0
            var11 = _closure1_slot0;
            var6 = _closure1_slot1;
            var10 = 4;
            var6 = var6[var10];
            var6 = var11.bind(var8)(var6);
            var4 = var6.bind(var8)(var1);
            var1 = var9;
            var6 = null;
            var11 = var6 != var1;
            var1 = null;
            if(!var11) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var10];
            var11 = var12.bind(var8)(var11);
            var1 = var11.bind(var8)(var9);
case 37:
            var5 = var1;
            var1 = var2;
            var9 = var6 != var1;
            var1 = null;
            if(!var9) { _fun0004_ip = 39; continue _fun0004 }
case 11:
            var9 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var7 = var9.bind(var8)(var7);
            var1 = var7.bind(var8)(var2);
case 39:
            var3 = var1;
case 40: // try_end0
            var7 = var5;
            var7 = var6 == var7;
            var2 = var7;
            if(var7) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var8 = var4;
            var7 = var8.lesser;
            var5 = var7.bind(var8)(var5);
            var2 = !var5;
case 41:
            var1 = var2;
            if(!var2) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var5 = var3;
            var5 = var6 == var5;
            var2 = var5;
            if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 45:
            var5 = var4;
            var4 = var5.greater;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 19:
            var1 = var2;
case 43:
            return var1;
case 46: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getRangeData(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot6;
            var14 = undefined;
            var1 = arg1;
            var13 = var2.bind(var14)(var1);
            var2 = var13.bind(var14)();
            var1 = var2.done;
            var12 = 5;
            var11 = 'max_id';
            var10 = 2;
            var9 = 0;
            var8 = 1;
            var7 = 'min_id';
            var6 = undefined;
            var5 = undefined;
            var4 = var2;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var16 = var4.value;
            var1 = _closure1_slot2;
            var1 = var1.bind(var14)(var16, var10);
            var19 = var1[var9];
            var1 = var1[var8];
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var12];
            var17 = var17.bind(var14)(var16);
            var16 = var17.v3;
            var18 = var16.bind(var17)(var7);
            var17 = var1;
            var16 = var5;
            if(!(var18 !== var19)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var20 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var12];
            var20 = var20.bind(var14)(var18);
            var18 = var20.v3;
            var18 = var18.bind(var20)(var11);
            var17 = var6;
            var16 = var5;
            if(!(var18 === var19)) { _fun0005_ip = 49; continue _fun0005 }
case 51:
            var17 = var6;
            var16 = var1;
case 49:
            var18 = var13.bind(var14)();
            var1 = var18.done;
            var6 = var17;
            var5 = var16;
            var4 = var18;
            var3 = var6;
            var2 = var5;
            if(!var1) { _fun0005_ip = 48; continue _fun0005 }
case 47:
            var1 = {};
            var1['min'] = var3;
            var1['max'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var6 = 5;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_ids';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = new Array(0);
            var _closure2_slot0 = var2;
            var3 = _closure1_slot6;
            var10 = undefined;
            var2 = arg1;
            var9 = var3.bind(var10)(var2);
            var3 = var9.bind(var10)();
            var2 = var3.done;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            var5 = 5;
            var4 = 'guild_ids';
            if(var2) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var12 = var3.value;
            var2 = _closure1_slot2;
            var2 = var2.bind(var10)(var12, var8);
            var13 = var2[var7];
            var2 = var2[var6];
            var14 = _closure1_slot0;
            var12 = _closure1_slot1;
            var12 = var12[var5];
            var14 = var14.bind(var10)(var12);
            var12 = var14.v3;
            var12 = var12.bind(var14)(var4);
            if(!(var13 === var12)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            _closure2_slot0 = var2;
case 54:
            var12 = var9.bind(var10)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 52:
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        }
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_id_range';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var3 = var2.min;
        var _closure2_slot0 = var3;
        var2 = var2.max;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = undefined;
            var1 = arg1;
            var1 = var5.bind(var2)(var1, var4, var3);
            return var1;
        };
        return var1;
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_age_range_days';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var3 = var2.min;
        var _closure2_slot0 = var3;
        var2 = var2.max;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var5 = _closure1_slot8;
            var2 = global;
            var3 = var2.Math;
            var2 = var3.floor;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 6;
            var1 = var8[var1];
            var4 = undefined;
            var9 = var7.bind(var4)(var1);
            var6 = var9.age;
            var1 = arg1;
            var6 = var6.bind(var9)(var1);
            var1 = 7;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.Millis;
            var1 = var1.DAY;
            var1 = var6 / var1;
            var3 = var2.bind(var3)(var1);
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        return var1;
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_member_count_range';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var3 = var2.min;
        var _closure2_slot0 = var3;
        var2 = var2.max;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getMemberCount;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0007_ip = 53; continue _fun0007 }
case 3:
                var5 = _closure1_slot8;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = var5.bind(var2)(var6, var4, var3);
case 53:
                return var1;
            }
        };
        return var1;
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_has_feature';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var5 = _closure1_slot2;
        var6 = undefined;
        var4 = arg1;
        var3 = 1;
        var4 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot2;
        var2 = 0;
        var4 = var4[var2];
        var2 = 2;
        var2 = var5.bind(var6)(var4, var2);
        var2 = var2[var3];
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot5;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var6);
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 56; continue _fun0008 }
case 34:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var1 = var4.bind(var5)(var6);
case 56:
                var _closure3_slot0 = var1;
                var1 = var3 != var1;
                if(!var1) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.features;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 57:
                return var1;
            }
        };
        return var1;
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_hub_types';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var5 = _closure1_slot2;
        var6 = undefined;
        var4 = arg1;
        var3 = 1;
        var4 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot2;
        var2 = 0;
        var4 = var4[var2];
        var2 = 2;
        var2 = var5.bind(var6)(var4, var2);
        var2 = var2[var3];
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot5;
                var1 = var3.getGuild;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 56; continue _fun0009 }
case 34:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var3 = var4.bind(var5)(var6);
case 56:
                var _closure3_slot0 = var3;
                var1 = var1 != var3;
                if(!var1) { _fun0009_ip = 35; continue _fun0009 }
case 58:
                var3 = var3.hubType;
                var4 = 'number';
                var3 = typeof var3;
                var1 = var4 === var3;
case 35:
                if(!var1) { _fun0009_ip = 11; continue _fun0009 }
case 59:
                var4 = _closure2_slot0;
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.hubType;
                    var1 = arg1;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 11:
                return var1;
            }
        };
        return var1;
    };
    var2[var9] = var8;
    var8 = var5[var6];
    var10 = var7.bind(var1)(var8);
    var9 = var10.v3;
    var8 = 'guild_has_vanity_url';
    var9 = var9.bind(var10)(var8);
    var8 = function(arg1) {
        var5 = _closure1_slot2;
        var6 = undefined;
        var4 = arg1;
        var3 = 1;
        var4 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot2;
        var2 = 0;
        var4 = var4[var2];
        var2 = 2;
        var2 = var5.bind(var6)(var4, var2);
        var2 = var2[var3];
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var1 = var3.bind(var4)(var5);
case 60:
                if(!(var2 != var1)) { _fun0010_ip = 30; continue _fun0010 }
case 62:
                var1 = var1.vanityURLCode;
                var2 = var2 != var1;
                var1 = _closure2_slot0;
                var1 = var1 === var2;
                return var1;
case 30:
                var1 = false;
                return var1;
            }
        };
        return var1;
    };
    var2[var9] = var8;
    var6 = var5[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.v3;
    var6 = 'guild_in_range_by_hash';
    var6 = var7.bind(var8)(var6);
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot6;
            var14 = undefined;
            var2 = arg1;
            var13 = var3.bind(var14)(var2);
            var3 = var13.bind(var14)();
            var2 = var3.done;
            var12 = global;
            var11 = null;
            var10 = 0;
            var9 = 5;
            var8 = 'target';
            var7 = 2;
            var6 = 1;
            var5 = 'hash_key';
            var4 = undefined;
            if(var2) { _fun0011_ip = 63; continue _fun0011 }
case 7:
            var16 = var3.value;
            var2 = _closure1_slot2;
            var2 = var2.bind(var14)(var16, var7);
            var18 = var2[var10];
            var2 = var2[var6];
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var9];
            var17 = var17.bind(var14)(var16);
            var16 = var17.v3;
            var16 = var16.bind(var17)(var5);
            if(!(var16 !== var18)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var9];
            var17 = var17.bind(var14)(var16);
            var16 = var17.v3;
            var16 = var16.bind(var17)(var8);
            var17 = var4;
            if(!(var16 === var18)) { _fun0011_ip = 43; continue _fun0011 }
case 41:
            var16 = var12.parseInt;
            var16 = var16.bind(var14)(var2);
            var19 = var11 != var16;
            var18 = 0;
            if(!var19) { _fun0011_ip = 66; continue _fun0011 }
case 49:
            var18 = var16;
case 66:
            var _closure2_slot1 = var18;
            var17 = var16;
            _fun0011_ip = 43; continue _fun0011;
case 64:
            var _closure2_slot0 = var2;
            var17 = var4;
case 43:
            var16 = var13.bind(var14)();
            var2 = var16.done;
            var4 = var17;
            var3 = var16;
            if(!var2) { _fun0011_ip = 7; continue _fun0011 }
case 63:
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.v3;
                    var8 = _closure2_slot0;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = '';
                    var5 = ':';
                    var2 = arg1;
                    var2 = var7.bind(var6)(var8, var5, var2);
                    var2 = var3.bind(var4)(var2);
                    var3 = 0;
                    if(!(!(var2 > var3))) { _fun0012_ip = 9; continue _fun0012 }
case 67:
                    var3 = var2 >>> var3;
                    _fun0012_ip = 68; continue _fun0012;
case 9:
                    var3 = var2 + var2;
case 68:
                    var2 = 10000;
                    var2 = var3 % var2;
                    var1 = _closure2_slot1;
                    var1 = var2 < var1;
                    return var1;
                }
            };
            return var1;
        }
    };
    var2[var6] = var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/GuildFilters.tsx';
    var4 = var5.bind(var6)(var4);
    var3['GUILD_FILTERS'] = var2;
    return var1;
})();