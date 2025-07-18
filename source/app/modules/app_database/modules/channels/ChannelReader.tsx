// app/modules/app_database/modules/channels/ChannelReader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'ChannelReader';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot5 = var4;
    var2 = function() {
        var5 = _closure1_slot4;
        var4 = function ChannelReader() {
            var4 = _closure1_slot3;
            var3 = _closure2_slot2;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot2 = var4;
        var1 = {};
        var3 = 'getSync';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            var11 = arg2;
            var1 = global;
            var3 = var1.performance;
            var2 = var3.now;
            var5 = var2.bind(var3)();
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var3);
            var3 = var6.channels;
            var2 = arg1;
            var3 = var3.bind(var6)(var2);
            var2 = var3.getManySyncUnsafe;
            var3 = var2.bind(var3)(var11);
            var6 = var1.performance;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var2 = var2 - var5;
            var5 = _closure1_slot5;
            var4 = var5.log;
            var13 = var3.length;
            var1 = var1.HermesInternal;
            var9 = var1.concat;
            var18 = 'synchronously loaded in ';
            var16 = 'ms (guild: ';
            var14 = ', channels: ';
            var12 = ')';
            var17 = var2;
            var15 = var11;
            var1 = var18[var9](var17, var16, var15, var14, var13, var12, var11);
            var1 = var4.bind(var5)(var1);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var7 = 'getAsync';
        var1['key'] = var7;
        var8 = _closure1_slot2;
        var2 = undefined;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 175; continue _fun0001 }
 13:
                    var3 = global;
                    var4 = var3.performance;
                    var2 = var4.now;
                    var6 = var2.bind(var4)();
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.channels;
                    var2 = arg1;
                    var5 = var5.bind(var7)(var2);
                    var2 = var5.getMany;
                    var2 = var2.bind(var5)(var12);
                    SaveGenerator(address=84);
 82:
                    return var2;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 172; continue _fun0001 }
 90:
                    var7 = var3.performance;
                    var5 = var7.now;
                    var5 = var5.bind(var7)();
                    var18 = var5 - var6;
                    var5 = _closure1_slot5;
                    var4 = var5.verbose;
                    var14 = var2.length;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var19 = 'loaded in ';
                    var17 = 'ms (guild: ';
                    var15 = ', channels: ';
                    var13 = ')';
                    var16 = var12;
                    var3 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 172:
                    return var2;
 175:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot1 = var7;
        var7 = function getAsync() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var7;
        var3[1] = var1;
        var1 = {};
        var7 = 'getGuildIds';
        var1['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 236; continue _fun0002 }
 10:
                    var6 = undefined;
                    var3 = undefined;
                    var2 = undefined;
 16: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.channels;
                    var5 = var4.bind(var5)();
                    var2 = var5;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 148; continue _fun0002 }
 58:
                    var5 = var2;
                    var2 = var5.getGuildIds;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=75);
 73:
                    return var2;
 75:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 145; continue _fun0002 }
 81:
                    var3 = var2;
                    if(!(var4 == var2)) { _fun0002_ip = 94; continue _fun0002 }
 88:
                    var5 = new Array(0);
                    _fun0002_ip = 97; continue _fun0002;
 94:
                    var5 = var3;
 97:
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = arg1;
                            var1 = null;
                            var1 = var1 !== var2;
                            if(!var1) { _fun0003_ip = 23; continue _fun0003 }
 12:
                            var3 = 'string';
                            var2 = typeof var2;
                            var1 = var3 === var2;
 23:
                            return var1;
                        }
                    };
                    var9 = var4.bind(var5)(var3);
                    var3 = global;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var10 = var4;
                    var3 = new var10[var3](var9, var8);
                    var3 = var3 instanceof Object ? var3 : var4;
 142: // try_end0
                    return var3;
 145:
                    return var2;
 148: // try_start_1
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var10 = var3;
                    var2 = new var10[var2](var9);
                    var2 = var2 instanceof Object ? var2 : var3;
 176: // try_end1
                    return var2;
 179: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot5;
                    var3 = var4.warn;
                    var2 = "couldn't get guild ids";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var10 = var3;
                    var2 = new var10[var2](var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
 236:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var6 = function getGuildIds() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/channels/ChannelReader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();