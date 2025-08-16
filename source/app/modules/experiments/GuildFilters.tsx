// app/modules/experiments/GuildFilters.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function isInRange(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = arg2;
            var2 = arg3;
            var8 = undefined;
            var4 = undefined;
            var5 = undefined;
            var3 = undefined;
 17: // try_start_0
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
            if(!var11) { _fun0004_ip = 81; continue _fun0004 }
 59:
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var10];
            var11 = var12.bind(var8)(var11);
            var1 = var11.bind(var8)(var9);
 81:
            var5 = var1;
            var1 = var2;
            var9 = var6 != var1;
            var1 = null;
            if(!var9) { _fun0004_ip = 118; continue _fun0004 }
 96:
            var9 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var7 = var9.bind(var8)(var7);
            var1 = var7.bind(var8)(var2);
 118:
            var3 = var1;
 121: // try_end0
            var7 = var5;
            var7 = var6 == var7;
            var2 = var7;
            if(var7) { _fun0004_ip = 151; continue _fun0004 }
 134:
            var8 = var4;
            var7 = var8.lesser;
            var5 = var7.bind(var8)(var5);
            var2 = !var5;
 151:
            var1 = var2;
            if(!var2) { _fun0004_ip = 190; continue _fun0004 }
 157:
            var5 = var3;
            var5 = var6 == var5;
            var2 = var5;
            if(var5) { _fun0004_ip = 187; continue _fun0004 }
 170:
            var5 = var4;
            var4 = var5.greater;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
 187:
            var1 = var2;
 190:
            return var1;
 192: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getRangeData(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(var1) { _fun0005_ip = 201; continue _fun0005 }
 66:
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
            if(!(var18 !== var19)) { _fun0005_ip = 171; continue _fun0005 }
 127:
            var20 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var12];
            var20 = var20.bind(var14)(var18);
            var18 = var20.v3;
            var18 = var18.bind(var20)(var11);
            var17 = var6;
            var16 = var5;
            if(!(var18 === var19)) { _fun0005_ip = 171; continue _fun0005 }
 165:
            var17 = var6;
            var16 = var1;
 171:
            var18 = var13.bind(var14)();
            var1 = var18.done;
            var6 = var17;
            var5 = var16;
            var4 = var18;
            var3 = var6;
            var2 = var5;
            if(!var1) { _fun0005_ip = 66; continue _fun0005 }
 201:
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
 0:
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
            if(var2) { _fun0006_ip = 128; continue _fun0006 }
 54:
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
            if(!(var13 === var12)) { _fun0006_ip = 113; continue _fun0006 }
 109:
            _closure2_slot0 = var2;
 113:
            var12 = var9.bind(var10)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0006_ip = 54; continue _fun0006 }
 128:
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
 0:
                var4 = _closure1_slot4;
                var3 = var4.getMemberCount;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 30:
                var5 = _closure1_slot8;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = var5.bind(var2)(var6, var4, var3);
 54:
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
 0:
                var6 = arg1;
                var3 = _closure1_slot5;
                var1 = var3.getGuild;
                var1 = var1.bind(var3)(var6);
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 42; continue _fun0008 }
 28:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var1 = var4.bind(var5)(var6);
 42:
                var _closure3_slot0 = var1;
                var1 = var3 != var1;
                if(!var1) { _fun0008_ip = 76; continue _fun0008 }
 53:
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
 76:
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
 0:
                var6 = arg1;
                var3 = _closure1_slot5;
                var1 = var3.getGuild;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 42; continue _fun0009 }
 28:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var3 = var4.bind(var5)(var6);
 42:
                var _closure3_slot0 = var3;
                var1 = var1 != var3;
                if(!var1) { _fun0009_ip = 70; continue _fun0009 }
 53:
                var3 = var3.hubType;
                var4 = 'number';
                var3 = typeof var3;
                var1 = var4 === var3;
 70:
                if(!var1) { _fun0009_ip = 96; continue _fun0009 }
 73:
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
 96:
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
 0:
                var5 = arg1;
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 40; continue _fun0010 }
 26:
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var1 = var3.bind(var4)(var5);
 40:
                if(!(var2 != var1)) { _fun0010_ip = 67; continue _fun0010 }
 44:
                var1 = var1.vanityURLCode;
                var2 = var2 != var1;
                var1 = _closure2_slot0;
                var1 = var1 === var2;
                return var1;
 67:
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
 0:
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
            if(var2) { _fun0011_ip = 211; continue _fun0011 }
 61:
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
            if(!(var16 !== var18)) { _fun0011_ip = 183; continue _fun0011 }
 116:
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var9];
            var17 = var17.bind(var14)(var16);
            var16 = var17.v3;
            var16 = var16.bind(var17)(var8);
            var17 = var4;
            if(!(var16 === var18)) { _fun0011_ip = 190; continue _fun0011 }
 151:
            var16 = var12.parseInt;
            var16 = var16.bind(var14)(var2);
            var19 = var11 != var16;
            var18 = 0;
            if(!var19) { _fun0011_ip = 174; continue _fun0011 }
 171:
            var18 = var16;
 174:
            var _closure2_slot1 = var18;
            var17 = var16;
            _fun0011_ip = 190; continue _fun0011;
 183:
            var _closure2_slot0 = var2;
            var17 = var4;
 190:
            var16 = var13.bind(var14)();
            var2 = var16.done;
            var4 = var17;
            var3 = var16;
            if(!var2) { _fun0011_ip = 61; continue _fun0011 }
 211:
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                    if(!(!(var2 > var3))) { _fun0012_ip = 86; continue _fun0012 }
 80:
                    var3 = var2 >>> var3;
                    _fun0012_ip = 90; continue _fun0012;
 86:
                    var3 = var2 + var2;
 90:
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