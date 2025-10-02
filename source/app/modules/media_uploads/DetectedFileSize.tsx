// app/modules/media_uploads/DetectedFileSize.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _getDetectedFileSize() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var _closure4_slot0 = var2;
                    var5 = var2.size;
                    var3 = 0;
                    if(!(!(var5 > var3))) { _fun0001_ip = 4; continue _fun0001 }
case 5: // try_start_0
                    var5 = global;
                    var6 = var5.Promise;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var7 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var1 = global;
                        var3 = var1.FileReader;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {constructor: {value: var3}});
                        var9 = var4;
                        var3 = new var9[var3](var8);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var6 = var1.setTimeout;
                        var1 = undefined;
                        var5 = function() {
                            var3 = _closure5_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'File read timeout';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = 10000;
                        var3 = var6.bind(var1)(var5, var3);
                        var _closure5_slot2 = var3;
                        var3 = function(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var4 = global;
                                var5 = var4.clearTimeout;
                                var2 = _closure5_slot2;
                                var1 = undefined;
                                var2 = var5.bind(var1)(var2);
                                var2 = arg1;
                                var5 = var2.target;
                                var2 = null;
                                var6 = var2 == var5;
                                var2 = undefined;
                                if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var2 = var5.result;
case 6:
                                var5 = var4.ArrayBuffer;
                                var5 = var2 instanceof var5;
                                if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                                var5 = _closure5_slot1;
                                var7 = var4.Error;
                                var4 = var7.prototype;
                                var6 = Object.create(var4, {constructor: {value: var7}});
                                var8 = 'Unexpected FileReader result type';
                                var9 = var6;
                                var4 = new var9[var7](var8, var7);
                                var4 = var4 instanceof Object ? var4 : var6;
                                var4 = var5.bind(var1)(var4);
                                _fun0002_ip = 10; continue _fun0002;
case 8:
                                var3 = _closure5_slot0;
                                var2 = var2.byteLength;
                                var2 = var3.bind(var1)(var2);
case 10:
                                return var1;
                            }
                        };
                        var4['onload'] = var3;
                        var2 = function() {
                            var2 = global;
                            var5 = var2.clearTimeout;
                            var4 = _closure5_slot2;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var3 = _closure5_slot1;
                            var5 = var2.Error;
                            var2 = var5.prototype;
                            var4 = Object.create(var2, {constructor: {value: var5}});
                            var6 = 'Could not read file';
                            var7 = var4;
                            var2 = new var7[var5](var6, var5);
                            var2 = var2 instanceof Object ? var2 : var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4['onerror'] = var2;
                        var3 = var4.readAsArrayBuffer;
                        var2 = _closure4_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8 = var5;
                    var4 = new var8[var6](var7, var6);
                    var4 = var4 instanceof Object ? var4 : var5;
                    SaveGenerator(address=64);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 14: // try_end0
                    return var4;
case 13:
                    return var4;
case 15: // catch_target0
                    CatchBlockStart(arg_register=3);
                    return var3;
case 4:
                    var2 = var2.size;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot1 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/DetectedFileSize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getDetectedFileSize() {
        var1 = undefined;
        var4 = _closure1_slot1;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDetectedFileSize'] = var2;
    return var1;
})();