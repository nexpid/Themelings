// app/utils/FileManagerUtils.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _readFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = arg2;
                    var5 = arg3;
                    var11 = undefined;
                    var9 = undefined;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var12 = 2;
                    var2 = var2[var12];
                    var3 = var3.bind(var11)(var2);
                    var2 = null;
                    var7 = var2 == var3;
                    var3 = null;
                    if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = 'cache';
                    var7 = arg1;
                    if(!(var8 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var12];
                    var8 = var8.bind(var11)(var7);
                    var7 = var8.getConstants;
                    var7 = var7.bind(var8)();
                    var7 = var7.DocumentsDirPath;
                    _fun0001_ip = 8; continue _fun0001;
case 6:
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var12];
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.getConstants;
                    var8 = var8.bind(var10)();
                    var7 = var8.CacheDirPath;
case 8:
                    var3 = var7;
case 4:
                    var9 = var3;
                    if(!(var2 != var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var8 = var7.bind(var11)(var3);
                    var7 = var8.fileExists;
                    var3 = var9;
                    var10 = '/';
                    var13 = var3 + var10;
                    var3 = var6;
                    var3 = var13 + var3;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=198);
case 11:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    return var2;
case 15: // try_start_0
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var12];
                    var8 = var8.bind(var11)(var7);
                    var7 = var8.readFile;
                    var9 = var9 + var10;
                    var6 = var9 + var6;
                    var5 = var7.bind(var8)(var6, var5);
                    SaveGenerator(address=251);
case 17:
                    return var5;
case 18:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20: // try_end0
                    return var5;
case 19:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot3;
                    var5 = var6.error;
                    var4 = 'Failed to read file from disk';
                    var4 = var5.bind(var6)(var4, var7);
                    return var2;
case 13:
                    return var3;
case 9:
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
    var11 = 'FileManagerUtils';
    var12 = var6;
    var4 = new var12[var7](var11, var10);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/FileManagerUtils.android.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function writeFile(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = null;
            var4 = var2 == var1;
            var1 = undefined;
            if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var8 = var4.bind(var5)(var3);
            var7 = var8.writeFile;
            var12 = arg1;
            var11 = arg2;
            var10 = arg3;
            var9 = arg4;
            var13 = var8;
            var5 = var13[var7](var12, var11, var10, var9, var8);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'file:';
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3);
case 22:
            if(!(var2 == var1)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.reject;
            var2 = "RTNFileManager doesn't exist?";
            var1 = var3.bind(var4)(var2);
case 24:
            return var1;
        }
    };
    var3['writeFile'] = var4;
    var4 = function moveFile(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = null;
            var4 = var2 == var1;
            var1 = undefined;
            if(var4) { _fun0003_ip = 26; continue _fun0003 }
case 23:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var7 = var4.bind(var5)(var3);
            var6 = var7.moveFile;
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var1 = var6.bind(var7)(var5, var4, var3);
case 26:
            if(!(var2 == var1)) { _fun0003_ip = 6; continue _fun0003 }
case 27:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.reject;
            var2 = false;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['moveFile'] = var4;
    var4 = function removeFile(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = null;
            var4 = var2 == var1;
            var1 = undefined;
            if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 23:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var6 = var4.bind(var5)(var3);
            var5 = var6.removeFile;
            var4 = arg1;
            var3 = arg2;
            var1 = var5.bind(var6)(var4, var3);
case 28:
            if(!(var2 == var1)) { _fun0004_ip = 29; continue _fun0004 }
case 26:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.reject;
            var2 = false;
            var1 = var3.bind(var4)(var2);
case 29:
            return var1;
        }
    };
    var3['removeFile'] = var4;
    var4 = function clearFolder(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 2;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = null;
            var4 = var2 == var1;
            var1 = undefined;
            if(var4) { _fun0005_ip = 28; continue _fun0005 }
case 23:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var6 = var4.bind(var5)(var3);
            var5 = var6.clearFolder;
            var4 = arg1;
            var3 = arg2;
            var1 = var5.bind(var6)(var4, var3);
case 28:
            if(!(var2 == var1)) { _fun0005_ip = 29; continue _fun0005 }
case 26:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.reject;
            var2 = false;
            var1 = var3.bind(var4)(var2);
case 29:
            return var1;
        }
    };
    var3['clearFolder'] = var4;
    var2 = function readFile() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['readFile'] = var2;
    return var1;
})();