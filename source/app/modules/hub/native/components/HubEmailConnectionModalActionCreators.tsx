// app/modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function open(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var3 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 2;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=54);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.default;
                    var6 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['animation'] = var5;
                    var3['modalConfig'] = var4;
case 8:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var3.bind(var1)(var2);
        var3 = arg1;
        var2 = 'HUB_EMAIL_CONNECTION_MODAL_KEY';
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['open'] = var7;
    var4 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'HUB_EMAIL_CONNECTION_MODAL_KEY';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();