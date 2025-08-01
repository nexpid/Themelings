// app/modules/guild_scheduled_events/useStartEvent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = function onSuccess() {
        var1 = undefined;
        return var1;
    };
    var4['onSuccess'] = var7;
    var7 = new Array(0);
    var4['permissionOverwrites'] = var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useStartEvent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStartEvent() {
        var1 = function _startEvent() {
            var4 = undefined;
            var1 = undefined;
            var3 = _closure1_slot3;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        var2 = arguments[2];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 407; continue _fun0001 }
 13:
                        var9 = arg1;
                        var6 = arg2;
                        var3 = undefined;
                        if(!(var2 === var3)) { _fun0001_ip = 32; continue _fun0001 }
 25:
                        var2 = _closure1_slot6;
 32:
                        var7 = var2.onSuccess;
                        if(!(var7 === var3)) { _fun0001_ip = 55; continue _fun0001 }
 42:
                        var10 = _closure1_slot6;
                        var7 = var10.onSuccess;
 55:
                        var8 = var7;
                        var2 = var2.permissionOverwrites;
                        if(!(var2 === var3)) { _fun0001_ip = 81; continue _fun0001 }
 68:
                        var7 = _closure1_slot6;
                        var2 = var7.permissionOverwrites;
 81:
                        var5 = var2;
                        SaveGenerator(address=88);
 86:
                        return var3;
 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 404; continue _fun0001 }
 97:
                        var10 = _closure2_slot0;
                        var7 = true;
                        var7 = var10.bind(var3)(var7);
 111: // try_start_0
                        var11 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var12 = 3;
                        var7 = var7[var12];
                        var13 = var11.bind(var3)(var7);
                        var11 = var13.preStartEventActions;
                        var7 = var9;
                        var5 = var11.bind(var13)(var7, var5);
                        SaveGenerator(address=153);
 151:
                        return var5;
 153:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 313; continue _fun0001 }
 162:
                        var11 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var12];
                        var12 = var11.bind(var3)(var7);
                        var11 = var12.setEventAsActive;
                        var7 = var9;
                        var6 = var11.bind(var12)(var7, var6);
                        SaveGenerator(address=198);
 196:
                        return var6;
 198:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 310; continue _fun0001 }
 204:
                        var11 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var12 = 4;
                        var7 = var7[var12];
                        var14 = var11.bind(var3)(var7);
                        var13 = var14.navigateToEvent;
                        var11 = var9;
                        var7 = var8;
                        var7 = var13.bind(var14)(var11, var7);
                        SaveGenerator(address=246);
 244:
                        return var7;
 246:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                        if(var11) { _fun0001_ip = 307; continue _fun0001 }
 252:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var12];
                        var11 = var11.bind(var3)(var10);
                        var10 = var11.postStartActions;
                        var8 = var10.bind(var11)(var9, var8);
                        SaveGenerator(address=285);
 283:
                        return var8;
 285:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(var9) { _fun0001_ip = 304; continue _fun0001 }
 291:
                        var10 = _closure2_slot0;
                        var9 = false;
                        var9 = var10.bind(var3)(var9);
 302: // try_end0
                        _fun0001_ip = 390; continue _fun0001;
 304:
                        return var8;
 307:
                        return var7;
 310:
                        return var6;
 313:
                        return var5;
 316: // catch_target0
                        CatchBlockStart(arg_register=6);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 5;
                        var5 = var8[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.APIError;
                        var6 = var5.prototype;
                        var6 = Object.create(var6, {constructor: {value: var5}});
                        var17 = var6;
                        var16 = var7;
                        var5 = new var17[var5](var16, var15);
                        var6 = var5 instanceof Object ? var5 : var6;
                        var5 = _closure2_slot1;
                        var5 = var5.bind(var3)(var6);
                        var6 = _closure2_slot0;
                        var5 = false;
                        var5 = var6.bind(var3)(var5);
 390:
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 404:
                        return var2;
 407:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            _closure2_slot2 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot2 = var1;
        var10 = _closure1_slot5;
        var4 = var10.useState;
        var1 = false;
        var1 = var4.bind(var10)(var1);
        var8 = _closure1_slot4;
        var7 = undefined;
        var6 = 2;
        var1 = var8.bind(var7)(var1, var6);
        var3 = 0;
        var4 = var1[var3];
        var5 = 1;
        var1 = var1[var5];
        var _closure2_slot0 = var1;
        var9 = var10.useState;
        var1 = null;
        var1 = var9.bind(var10)(var1);
        var1 = var8.bind(var7)(var1, var6);
        var3 = var1[var3];
        var1 = var1[var5];
        var _closure2_slot1 = var1;
        var1 = new Array(2);
        var2 = function startEvent(arg1, arg2) {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1[0] = var2;
        var2 = {};
        var2['loading'] = var4;
        var2['error'] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();