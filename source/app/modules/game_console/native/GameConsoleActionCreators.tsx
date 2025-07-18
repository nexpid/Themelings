// app/modules/game_console/native/GameConsoleActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _transferToPlaystationWithAlert() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 247; continue _fun0001 }
 10:
                    var3 = arg1;
                    var9 = arg2;
                    var2 = arg3;
 19: // try_start_0
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 1;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.transferToPlayStation;
                    var4 = var3;
                    var3 = var9;
                    var3 = var3.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    SaveGenerator(address=72);
 70:
                    return var2;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 83; continue _fun0001 }
 78: // try_end0
                    _fun0001_ip = 242; continue _fun0001;
 83:
                    return var2;
 86: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 2;
                    var2 = var11[var2];
                    var10 = undefined;
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 3;
                    var7 = var11[var5];
                    var7 = var6.bind(var10)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var11[var5];
                    var7 = var6.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.QL1y9/;
                    var7 = var8.bind(var12)(var7);
                    var2['title'] = var7;
                    var7 = var11[var5];
                    var7 = var6.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var11[var5];
                    var5 = var6.bind(var10)(var5);
                    var5 = var5.t;
                    var6 = var5.6ZyNHx;
                    var5 = {};
                    var9 = var9.name;
                    var5['deviceName'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['body'] = var5;
                    var2 = var3.bind(var4)(var2);
 242:
                    var2 = undefined;
                    return var2;
 247:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/GameConsoleActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transferToPlaystationWithAlert() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transferToPlaystationWithAlert'] = var2;
    return var1;
})();