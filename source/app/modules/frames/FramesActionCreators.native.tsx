// app/modules/frames/FramesActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var1 = function _launchFrameOnNative() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.launchFrame;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=50);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot4;
                    var5 = var6.isCurrentClientInVoiceChannel;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.bind(var3)();
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
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var6 = 3;
    var6 = var5[var6];
    var11 = var7.bind(var1)(var6);
    var12 = var2;
    var6 = copyDataProperties(var12, var11);
    var6 = function launchFrameOnNative() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4 = 'launchFrame';
    var2[var4] = var6;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/FramesActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();