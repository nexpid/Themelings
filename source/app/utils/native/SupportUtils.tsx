// app/utils/native/SupportUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _emailSupport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 4;
                    var4 = var10[var3];
                    var3 = undefined;
                    var5 = var7.bind(var3)(var4);
                    var4 = var5.openURL;
                    var6 = 5;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.getSubmitRequestURL;
                    var9 = _closure1_slot2;
                    var8 = 2;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.getConstants;
                    var8 = var8.bind(var9)();
                    var10 = var8.Manifest;
                    var9 = var10.trim;
                    var9 = var9.bind(var10)();
                    var10 = var9.length;
                    var9 = 0;
                    var9 = var10 > var9;
                    var17 = 'N/A';
                    if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var17 = var8.Manifest;
case 4:
                    var16 = var8.Version;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 3;
                    var11 = var10[var8];
                    var12 = var9.bind(var3)(var11);
                    var11 = var12.getSystemVersion;
                    var22 = var11.bind(var12)();
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.getDeviceInfo;
                    var20 = var8.bind(var9)();
                    var2 = _closure1_slot5;
                    var18 = var2.locale;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var12 = var2.concat;
                    var27 = 'App version: ';
                    var25 = '\n  Manifest: ';
                    var23 = '\n  iOS version: ';
                    var21 = '\n  Device: ';
                    var19 = '\n  Language: ';
                    var26 = var16;
                    var24 = var17;
                    var2 = var27[var12](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=254);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var4.bind(var5)(var2);
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/SupportUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function emailSupport() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['emailSupport'] = var2;
    return var1;
})();