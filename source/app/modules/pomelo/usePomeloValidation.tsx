// app/modules/pomelo/usePomeloValidation.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = function usePomeloFormValidation(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[3];
            var3 = arg2;
            var _closure2_slot0 = var3;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 28; continue _fun0001 }
 25:
            var1 = 2;
 28:
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var9 = _closure1_slot5;
            var4 = var9.useState;
            var1 = false;
            var1 = var4.bind(var9)(var1);
            var10 = _closure1_slot4;
            var8 = 2;
            var1 = var10.bind(var5)(var1, var8);
            var4 = 0;
            var6 = var1[var4];
            var7 = 1;
            var1 = var1[var7];
            _closure2_slot4 = var1;
            var11 = var9.useState;
            var1 = null;
            var1 = var11.bind(var9)(var1);
            var1 = var10.bind(var5)(var1, var8);
            var4 = var1[var4];
            var1 = var1[var7];
            _closure2_slot5 = var1;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var1 = arg1;
            var7[0] = var1;
            var1 = function() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = {};
            var1['isLoading'] = var6;
            var1['error'] = var4;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 528; continue _fun0002 }
 13:
                        var7 = var2;
                        var3 = undefined;
                        var5 = undefined;
                        var6 = undefined;
                        var9 = var2.length;
                        var8 = _closure2_slot2;
                        if(!(!(var9 < var8))) { _fun0002_ip = 365; continue _fun0002 }
 41: // try_start_0 // try_start_1
                        var9 = _closure2_slot4;
                        var8 = true;
                        var8 = var9.bind(var3)(var8);
                        var8 = _closure2_slot1;
                        var7 = var8.bind(var3)(var7);
                        SaveGenerator(address=65);
 63:
                        return var7;
 65:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 85; continue _fun0002 }
 71: // try_end0 // try_end1
                        var9 = _closure2_slot4;
                        var8 = false;
                        var8 = var9.bind(var3)(var8);
                        return var3;
 85:
                        var9 = _closure2_slot4;
                        var8 = false;
                        var8 = var9.bind(var3)(var8);
                        return var7;
 99: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=9);
                        var4 = var10;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 6;
                        var7 = var11[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.APIError;
                        var9 = var7.prototype;
                        var9 = Object.create(var9, {constructor: {value: var7}});
                        var14 = var9;
                        var13 = var10;
                        var7 = new var14[var7](var13, var12);
                        var7 = var7 instanceof Object ? var7 : var9;
                        var6 = var7;
                        var9 = var7.status;
                        var7 = null;
                        if(!(var7 != var9)) { _fun0002_ip = 226; continue _fun0002 }
 170:
                        var9 = var6;
                        var10 = var9.status;
                        var9 = 400;
                        if(!(var10 >= var9)) { _fun0002_ip = 226; continue _fun0002 }
 188:
                        var9 = var6;
                        var10 = var9.status;
                        var9 = 500;
                        if(!(var10 < var9)) { _fun0002_ip = 226; continue _fun0002 }
 206:
                        var9 = var6;
                        var6 = var9.getAnyErrorMessage;
                        var6 = var6.bind(var9)();
                        var5 = var6;
                        if(!(var7 == var6)) { _fun0002_ip = 285; continue _fun0002 }
 226:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 4;
                        var7 = var11[var6];
                        var7 = var10.bind(var3)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var6 = var11[var6];
                        var6 = var10.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.ye0Rzs;
                        var6 = var7.bind(var9)(var6);
                        _fun0002_ip = 288; continue _fun0002;
 285:
                        var6 = var5;
 288:
                        var7 = _closure2_slot5;
                        var5 = {};
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 5;
                        var8 = var10[var8];
                        var8 = var9.bind(var3)(var8);
                        var8 = var8.NameValidationState;
                        var8 = var8.ERROR;
                        var5['type'] = var8;
                        var5['message'] = var6;
                        var5 = var7.bind(var3)(var5);
                        var5 = _closure2_slot0;
                        var5 = var5.bind(var3)(var6);
                        throw var4;
 350: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=3);
                        var6 = _closure2_slot4;
                        var5 = false;
                        var5 = var6.bind(var3)(var5);
                        throw var4;
 365:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 4;
                        var5 = var9[var4];
                        var5 = var8.bind(var3)(var5);
                        var7 = var5.intl;
                        var6 = var7.formatToPlainString;
                        var4 = var9[var4];
                        var4 = var8.bind(var3)(var4);
                        var4 = var4.t;
                        var5 = var4.IpijXF;
                        var4 = {};
                        var10 = 32;
                        var4['maxNum'] = var10;
                        var10 = _closure2_slot2;
                        var4['minNum'] = var10;
                        var4 = var6.bind(var7)(var5, var4);
                        var6 = _closure2_slot5;
                        var5 = {};
                        var7 = 5;
                        var7 = var9[var7];
                        var7 = var8.bind(var3)(var7);
                        var7 = var7.NameValidationState;
                        var7 = var7.ERROR;
                        var5['type'] = var7;
                        var5['message'] = var4;
                        var5 = var6.bind(var3)(var5);
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var3)(var4);
                        var2 = global;
                        var2 = var2.Error;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var14 = var3;
                        var13 = var4;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
 528:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure2_slot3 = var3;
            var2 = function() {
                var1 = undefined;
                var4 = _closure2_slot3;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['submit'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/usePomeloValidation.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot7;
        var11 = undefined;
        var10 = arg1;
        var9 = function(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.POMELO_ERRORS;
            var2 = {};
            var6 = arg1;
            var2['reason'] = var6;
            var6 = true;
            var2['display_name_error'] = var6;
            var6 = _closure2_slot0;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var8 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.saveAccountRequest;
            var1 = {};
            var4 = arg1;
            var1['global_name'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = 1;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['useDisplayNameValidation'] = var4;
    var2 = function(arg1) {
        var5 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var2 = function(arg1) {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.POMELO_ERRORS;
            var2 = {'reason': null, 'username_error': true, 'location': 'modal'};
            var6 = arg1;
            var2['reason'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.createPomelo;
            var1 = {};
            var4 = arg1;
            var1['username'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['usePomeloValidation'] = var2;
    return var1;
})();