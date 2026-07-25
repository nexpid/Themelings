// app/modules/lurker_mode/LurkerActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var5 = function stopLurkingAll() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var5;
    var1 = function _stopLurkingAll() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var _closure4_slot0 = var9;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var6 = _closure1_slot5;
                    var4 = var6.lurkingGuildIds;
                    var7 = var4.bind(var6)();
                    var6 = var7.filter;
                    var4 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var7 = var6.bind(var7)(var4);
                    var6 = var7.length;
                    var4 = 0;
                    if(!(var4 !== var6)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var4 = global;
                    var10 = var4.Map;
                    var8 = var7.map;
                    var6 = function(arg1) {
                        var4 = arg1;
                        var1 = new Array(2);
                        var1[0] = var4;
                        var3 = _closure1_slot5;
                        var2 = var3.getLurkingSourceForGuild;
                        var2 = var2.bind(var3)(var4);
                        var1[1] = var2;
                        return var1;
                    };
                    var11 = var8.bind(var7)(var6);
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {constructor: {value: var10}});
                    var12 = var8;
                    var6 = new var12[var10](var11, var10);
                    var6 = var6 instanceof Object ? var6 : var8;
                    _closure4_slot1 = var6;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var5 = var8[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var10 = 'GUILD_STOP_LURKING';
                    var5['type'] = var10;
                    var5['ignoredGuildIds'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var5 = var4.Promise;
                    var4 = var5.all;
                    var6 = var7.map;
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                                    var7 = var5;
                                    var2 = undefined;
                                    var6 = undefined;
                                    var4 = _closure4_slot1;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)(var5);
                                    var3 = null;
                                    var5 = var3 != var4;
                                    if(!var5) { _fun0005_ip = 5; continue _fun0005 }
case 2:
                                    var3 = var4;
case 5:
                                    var6 = var3;
case 42: // try_start_0
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 5;
                                    var3 = var5[var3];
                                    var3 = var4.bind(var2)(var3);
                                    var5 = var3.HTTP;
                                    var4 = var5.del;
                                    var3 = {};
                                    var10 = _closure1_slot6;
                                    var9 = var10.GUILD_LEAVE;
                                    var8 = var7;
                                    var8 = var9.bind(var10)(var8);
                                    var3['url'] = var8;
                                    var9 = {};
                                    var8 = true;
                                    var9['lurking'] = var8;
                                    var3['body'] = var9;
                                    var3['oldFormErrors'] = var8;
                                    var3['rejectWithError'] = var8;
                                    var3 = var4.bind(var5)(var3);
                                    SaveGenerator(address=141);
case 43:
                                    return var3;
case 44:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                    if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 46: // try_end0
                                    _fun0005_ip = 47; continue _fun0005;
case 45:
                                    return var3;
case 48: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 4;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.dispatch;
                                    var3 = {};
                                    var8 = 'GUILD_STOP_LURKING_FAILURE';
                                    var3['type'] = var8;
                                    var3['lurkingGuildId'] = var7;
                                    var3['lurkingSource'] = var6;
                                    var3 = var4.bind(var5)(var3);
case 47:
                                    return var2;
case 40:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var3)();
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=209);
case 49:
                    return var2;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 50; continue _fun0004 }
case 38:
                    return var3;
case 50:
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var4 = function stopLurkingForGuild() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = function _stopLurkingForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 41:
                    var7 = var8;
                    var2 = undefined;
                    var6 = undefined;
                    var5 = _closure1_slot5;
                    var4 = var5.lurkingGuildIds;
                    var5 = var4.bind(var5)();
                    var4 = var5.includes;
                    var4 = var4.bind(var5)(var8);
                    if(!var4) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var5 = _closure1_slot5;
                    var4 = var5.getLurkingSourceForGuild;
                    var10 = var7;
                    var6 = var4.bind(var5)(var10);
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 4;
                    var4 = var4[var5];
                    var9 = var8.bind(var2)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var11 = 'GUILD_STOP_LURKING_FOR_GUILD';
                    var4['type'] = var11;
                    var4['lurkingGuildId'] = var10;
                    var4 = var8.bind(var9)(var4);
case 54: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 5;
                    var4 = var9[var4];
                    var4 = var8.bind(var2)(var4);
                    var9 = var4.HTTP;
                    var8 = var9.del;
                    var4 = {};
                    var12 = _closure1_slot6;
                    var11 = var12.GUILD_LEAVE;
                    var10 = var7;
                    var10 = var11.bind(var12)(var10);
                    var4['url'] = var10;
                    var11 = {};
                    var10 = true;
                    var11['lurking'] = var10;
                    var4['body'] = var11;
                    var4['oldFormErrors'] = var10;
                    var4['rejectWithError'] = var10;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=204);
case 55:
                    return var4;
case 56:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 40; continue _fun0006 }
case 57: // try_end0
                    _fun0006_ip = 52; continue _fun0006;
case 40:
                    return var4;
case 38: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'GUILD_STOP_LURKING_FAILURE';
                    var3['type'] = var8;
                    var3['lurkingGuildId'] = var7;
                    var3['lurkingSource'] = var6;
                    var3 = var4.bind(var5)(var3);
case 52:
                    return var2;
case 51:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _stopLurking() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var5 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 58; continue _fun0007 }
case 37:
                    var3 = undefined;
                    if(!(var5 === var3)) { _fun0007_ip = 31; continue _fun0007 }
case 59:
                    var5 = null;
case 31:
                    var _closure4_slot0 = var3;
                    SaveGenerator(address=31);
case 60:
                    return var3;
case 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var8 = _closure1_slot5;
                    var7 = var8.lurkingGuildIds;
                    var10 = var7.bind(var8)();
                    var7 = var10.length;
                    var9 = 0;
                    if(!(var9 !== var7)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var12 = 6;
                    var7 = var7[var12];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getMobileLurkerServerPreview;
                    var11 = 'LurkerActionCreators.stopLurking';
                    var7 = var7.bind(var8)(var11);
                    var7 = var7.stickyLurk;
                    if(var7) { _fun0007_ip = 64; continue _fun0007 }
case 66:
                    var7 = null;
                    if(!(var7 != var5)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                    var7 = var10.includes;
                    var7 = var7.bind(var10)(var5);
                    if(var7) { _fun0007_ip = 64; continue _fun0007 }
case 67:
                    var14 = new Array(2);
                    var14[0] = var5;
                    var7 = _closure1_slot4;
                    var5 = var7.getGuildId;
                    var5 = var5.bind(var7)();
                    var14[1] = var5;
                    var13 = var14.filter;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 7;
                    var8 = var5[var8];
                    var8 = var7.bind(var3)(var8);
                    var8 = var8.isNotNullish;
                    var8 = var13.bind(var14)(var8);
                    _closure4_slot0 = var8;
                    var5 = var5[var12];
                    var7 = var7.bind(var3)(var5);
                    var5 = var7.getMobileLurkerServerPreview;
                    var5 = var5.bind(var7)(var11);
                    var5 = var5.enabled;
                    if(!var5) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                    var7 = var10.filter;
                    var5 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var7.bind(var10)(var5);
                    var7 = var5.length;
                    if(!(!(var7 > var9))) { _fun0007_ip = 71; continue _fun0007 }
case 69:
                    var7 = _closure1_slot9;
                    var7 = var7.bind(var3)(var8);
                    SaveGenerator(address=275);
case 72:
                    return var7;
case 73:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(!var8) { _fun0007_ip = 64; continue _fun0007 }
case 74:
                    return var7;
case 71:
                    var12 = function* _loop(arg1) {
                        var1 = function* anon_0__loop(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                StartGenerator();
                                var6 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 75:
                                var _closure6_slot0 = var6;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 8;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.openLurkerLeavePrompt;
                                var3 = {};
                                var7 = function onLeave() {
                                    var3 = _closure1_slot11;
                                    var2 = _closure6_slot0;
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var3['onLeave'] = var7;
                                var3 = var4.bind(var5)(var6, var3);
                                return var2;
case 35:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = _closure1_slot7;
                    var11 = var4.bind(var3)(var5);
                    var5 = var11.bind(var3)();
                    var4 = var5.done;
                    var10 = global;
                    var9 = 'iterator is not an object';
                    var8 = 'iterator.throw() did not return an object';
                    var7 = 'throw';
                    var6 = 'iterator.next() did not return an object';
                    if(var4) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                    var4 = var5.value;
                    var13 = var12.bind(var3)(var4);
                    var4 = var10.Symbol;
                    var4 = var4.iterator;
                    var4 = var13[var4];
                    var14 = var4.bind(var13)();
                    var22 = var14;
                    var21 = var9;
                    var4 = ensureObject(var22, var21);
                    var19 = var14.next;
                    var18 = undefined;
case 78:
                    var13 = var18;
                    var13 = var19.bind(var14)(var13);
                    var22 = var13;
                    var21 = var6;
                    var15 = ensureObject(var22, var21);
                    var4 = var13;
                    var15 = var13.done;
                    if(var15) { _fun0007_ip = 79; continue _fun0007 }
case 80: // try_start_0
                    var15 = generatorSetDelegated();
                    SaveGenerator(address=476);
case 81:
                    return var13;
case 82: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=14);
                    var22 = var14;
                    var21 = var7;
                    var13 = getMethod(var22, var21);
                    if(!(var13 !== var3)) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                    var13 = var13.bind(var14)(var15);
                    var22 = var13;
                    var21 = var8;
                    var15 = ensureObject(var22, var21);
                    var15 = var13.done;
                    if(var15) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var15 = generatorSetDelegated();
                    SaveGenerator(address=476);
case 87:
                    return var13;
case 88: // try_start_1
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=16);
                    var18 = var15;
                    var16 = var17;
                    if(!var16) { _fun0007_ip = 78; continue _fun0007 }
case 89:
                    var18 = var15;
case 90: // try_end1
                    var21 = 'return';
                    var22 = var14;
                    var20 = getMethod(var22, var21);
                    if(!(var20 !== var3)) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var16 = var18;
                    var16 = var20.bind(var14)(var16);
                    var21 = 'iterator.return() did not return an object';
                    var22 = var16;
                    var20 = ensureObject(var22, var21);
                    var20 = var16.done;
                    if(var20) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var20 = generatorSetDelegated();
                    SaveGenerator(address=476);
case 95:
                    return var16;
case 93:
                    var16 = var16.value;
                    return var16;
case 91:
                    return var15;
case 85:
                    var4 = var13;
                    _fun0007_ip = 79; continue _fun0007;
case 83:
                    var21 = 'return';
                    var22 = var14;
                    var13 = getMethod(var22, var21);
                    if(!(var13 !== var3)) { _fun0007_ip = 96; continue _fun0007 }
case 97:
                    var22 = var13.bind(var14)();
                    var21 = 'iterator.return() did not return an object';
                    var13 = ensureObject(var22, var21);
case 96:
                    var22 = 'yield* delegate must have a .throw() method';
                    var13 = throwTypeError(var22);
                    throw var3;
case 79:
                    var4 = var4.value;
                    var13 = var11.bind(var3)();
                    var4 = var13.done;
                    var5 = var13;
                    if(!var4) { _fun0007_ip = 77; continue _fun0007 }
case 76:
                    return var3;
case 64:
                    return var3;
case 62:
                    return var2;
case 58:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot6 = var6;
    var6 = 9;
    var6 = var8[var6];
    var9 = var9.bind(var1)(var6);
    var6 = var9.initialize;
    var6 = var6.bind(var9)();
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/lurker_mode/LurkerActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['stopLurkingAll'] = var5;
    var3['stopLurkingForGuild'] = var4;
    var2 = function stopLurking() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['stopLurking'] = var2;
    return var1;
})();