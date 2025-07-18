// app/modules/applications/useGuildApplication.tsx
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useGuildApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildApplication(arg1, arg2) {
        var10 = arg1;
        var11 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var11;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var2 = var4[var2];
        var12 = undefined;
        var6 = var3.bind(var12)(var2);
        var4 = var6.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var4 = _closure1_slot6;
            var3 = var4.getGuildApplication;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var4.bind(var6)(var3, var2);
        var _closure2_slot2 = var4;
        var7 = _closure1_slot5;
        var3 = var7.useState;
        var2 = null;
        var2 = var2 == var4;
        var2 = var3.bind(var7)(var2);
        var14 = _closure1_slot4;
        var13 = 2;
        var3 = var14.bind(var12)(var2, var13);
        var9 = 0;
        var2 = var3[var9];
        var8 = 1;
        var3 = var3[var8];
        var _closure2_slot3 = var3;
        var3 = var7.useState;
        var3 = var3.bind(var7)();
        var6 = var14.bind(var12)(var3, var13);
        var3 = var6[var9];
        var6 = var6[var8];
        var _closure2_slot4 = var6;
        var15 = var7.useState;
        var6 = false;
        var6 = var15.bind(var7)(var6);
        var6 = var14.bind(var12)(var6, var13);
        var9 = var6[var9];
        var _closure2_slot5 = var9;
        var6 = var6[var8];
        var _closure2_slot6 = var6;
        var8 = var7.useCallback;
        var6 = _closure1_slot3;
        var5 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 233; continue _fun0001 }
 10:
                    var2 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0001_ip = 213; continue _fun0001 }
 26:
                    var2 = _closure2_slot0;
                    if(!(var4 != var2)) { _fun0001_ip = 213; continue _fun0001 }
 37:
                    var2 = _closure2_slot6;
                    var5 = undefined;
                    var8 = true;
                    var2 = var2.bind(var5)(var8);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var5)(var8);
 59: // try_start_0 // try_start_1
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.getApplicationsForGuild;
                    var4 = _closure2_slot0;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['type'] = var9;
                    var2['includeTeam'] = var8;
                    var2 = var6.bind(var7)(var4, var2);
                    SaveGenerator(address=117);
 115:
                    return var2;
 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 125; continue _fun0001 }
 123: // try_end0
                    _fun0001_ip = 202; continue _fun0001;
 125: // try_end1
                    var6 = _closure2_slot3;
                    var4 = false;
                    var4 = var6.bind(var5)(var4);
                    return var2;
 139: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var4 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.APIError;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {constructor: {value: var2}});
                    var12 = var6;
                    var11 = var7;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var2 = var4.bind(var5)(var2);
 202: // try_end2
                    var4 = _closure2_slot3;
                    var2 = false;
                    var2 = var4.bind(var5)(var2);
 213:
                    var2 = undefined;
                    return var2;
 218: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var4 = _closure2_slot3;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 233:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var6.bind(var12)(var5);
        var5 = new Array(3);
        var5[0] = var4;
        var5[1] = var11;
        var5[2] = var10;
        var8 = var8.bind(var7)(var6, var5);
        var _closure2_slot7 = var8;
        var6 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var8;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot5;
                if(var2) { _fun0002_ip = 20; continue _fun0002 }
 10:
                var2 = _closure2_slot7;
                var1 = undefined;
                var1 = var2.bind(var1)();
 20:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['application'] = var4;
        var1['error'] = var3;
        var1['loading'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();