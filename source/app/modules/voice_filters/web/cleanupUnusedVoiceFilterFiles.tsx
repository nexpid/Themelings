// app/modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _cleanupUnusedVoiceFilterFiles() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg1;
                    var2 = undefined;
                    var6 = undefined;
                    var4 = undefined;
case 4: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 2;
                    var7 = var9[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.cleanupUnusedVoiceFilterFiles;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=57);
case 5:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var3.deletedFiles;
                    var6 = var7;
                    var4 = var3.errors;
                    var8 = var7.length;
                    var7 = 0;
                    if(!(var8 > var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var10 = _closure1_slot3;
                    var9 = var10.info;
                    var8 = {};
                    var8['deletedFiles'] = var6;
                    var6 = 'VF cleanup completed';
                    var6 = var9.bind(var10)(var6, var8);
case 9:
                    var6 = var4;
                    var6 = var6.length;
                    if(!(var6 > var7)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = _closure1_slot3;
                    var6 = var7.warn;
                    var5 = {};
                    var5['errors'] = var4;
                    var4 = 'VF cleanup had errors';
                    var4 = var6.bind(var7)(var4, var5);
case 11: // try_end0
                    _fun0001_ip = 13; continue _fun0001;
case 7:
                    return var3;
case 14: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var6 = _closure1_slot3;
                    var5 = var6.warn;
                    var4 = {};
                    var4['error'] = var3;
                    var3 = 'VF cleanup failed';
                    var3 = var5.bind(var6)(var3, var4);
case 13:
                    return var2;
case 2:
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
    var7 = var6.bind(var1)(var4);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var11 = 'cleanupUnusedVoiceFilterFiles';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function cleanupUnusedVoiceFilterFiles() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cleanupUnusedVoiceFilterFiles'] = var2;
    return var1;
})();