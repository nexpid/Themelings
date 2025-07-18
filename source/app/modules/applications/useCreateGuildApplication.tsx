// app/modules/applications/useCreateGuildApplication.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useCreateGuildApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreateGuildApplication() {
        var7 = _closure1_slot5;
        var4 = var7.useState;
        var2 = false;
        var2 = var4.bind(var7)(var2);
        var9 = _closure1_slot4;
        var4 = undefined;
        var8 = 2;
        var5 = var9.bind(var4)(var2, var8);
        var2 = 0;
        var3 = var5[var2];
        var6 = 1;
        var5 = var5[var6];
        var _closure2_slot0 = var5;
        var5 = var7.useState;
        var5 = var5.bind(var7)();
        var5 = var9.bind(var4)(var5, var8);
        var2 = var5[var2];
        var5 = var5[var6];
        var _closure2_slot1 = var5;
        var6 = var7.useRef;
        var5 = null;
        var5 = var6.bind(var7)(var5);
        var _closure2_slot2 = var5;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3, arg4) {
                var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 341; continue _fun0001 }
 10:
                        var4 = arg1;
                        var9 = arg2;
                        var10 = arg3;
                        var11 = arg4;
                        var2 = _closure2_slot1;
                        var5 = undefined;
                        var2 = var2.bind(var5)(var5);
 36: // try_start_0 // try_start_1
                        var2 = _closure2_slot0;
                        var6 = true;
                        var2 = var2.bind(var5)(var6);
                        var2 = _closure2_slot2;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 == var7)) { _fun0001_ip = 146; continue _fun0001 }
 62:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 3;
                        var2 = var8[var2];
                        var8 = var7.bind(var5)(var2);
                        var7 = var8.createApplication;
                        var2 = {};
                        var2['name'] = var11;
                        var11 = var4;
                        var11 = var11.id;
                        var2['guildId'] = var11;
                        var11 = var10;
                        var2['type'] = var11;
                        var2['teamId'] = var9;
                        var2 = var7.bind(var8)(var2);
                        SaveGenerator(address=130);
 128:
                        return var2;
 130:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 235; continue _fun0001 }
 136:
                        var7 = _closure2_slot2;
                        var7['current'] = var2;
 146:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 3;
                        var7 = var9[var7];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.getApplicationsForGuild;
                        var7 = var4.id;
                        var4 = {};
                        var4['type'] = var10;
                        var4['includeTeam'] = var6;
                        var4 = var8.bind(var9)(var7, var4);
                        SaveGenerator(address=201);
 199:
                        return var4;
 201:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0001_ip = 221; continue _fun0001 }
 207: // try_end0 // try_end1
                        var8 = _closure2_slot0;
                        var7 = false;
                        var7 = var8.bind(var5)(var7);
                        return var6;
 221:
                        var7 = _closure2_slot0;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        return var4;
 235:
                        var6 = _closure2_slot0;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
 249: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var4 = _closure2_slot1;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 4;
                        var2 = var8[var2];
                        var2 = var6.bind(var5)(var2);
                        var2 = var2.APIError;
                        var6 = var2.prototype;
                        var6 = Object.create(var6, {constructor: {value: var2}});
                        var14 = var6;
                        var13 = var7;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var6;
                        var2 = var4.bind(var5)(var2);
 312: // try_end2
                        var4 = _closure2_slot0;
                        var2 = false;
                        var4 = var4.bind(var5)(var2);
                        return var2;
 326: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
 341:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var4 = var1.bind(var4)();
        var1 = {};
        var1['createGuildApplication'] = var4;
        var1['submitting'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();