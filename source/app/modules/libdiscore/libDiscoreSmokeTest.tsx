// app/modules/libdiscore/libDiscoreSmokeTest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var6 = function libDiscoreSmokeTest() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _libDiscoreSmokeTest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure1_slot6;
                    if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.initLibdiscore;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=59);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var8 = var6.bind(var5)(var4);
                    var7 = var8.rustMultiply;
                    var6 = 6;
                    var4 = 7;
                    var8 = var7.bind(var8)(var6, var4);
                    var7 = _closure1_slot5;
                    var6 = var7.info;
                    var4 = 'The answer for life the universe and everything is:';
                    var4 = var6.bind(var7)(var4, var8);
                    var4 = _closure1_slot8;
                    var4 = var4.bind(var5)();
case 10: // try_end0
                    _fun0001_ip = 11; continue _fun0001;
case 8:
                    return var2;
case 12: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot10;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5);
case 11:
                    var2 = true;
                    _closure1_slot6 = var2;
case 4:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var5 = function trackLibdiscoreSuccess() {
        var6 = new Array(0);
        var _closure2_slot0 = var6;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 5;
        var4 = var5[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var7 = var4.ALL_LIBDISCORE_EXPERIMENTS;
        var4 = var7.forEach;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = var2.getEnabledFeatureName;
                var3 = var1.bind(var2)();
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = _closure2_slot0;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var4.bind(var7)(var3);
        var4 = _closure1_slot1;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.LIBDISCORE_LOADED;
        var2 = {};
        var7 = true;
        var2['success'] = var7;
        var2['experimental_features'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function formatErrorMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var3 = var2.Error;
            var3 = var1 instanceof var3;
            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = null;
            var3 = var6 != var1;
            var7 = 'Unknown error';
            if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = var2.String;
            var3 = undefined;
            var7 = var4.bind(var3)(var1);
case 17:
            var6 = null;
            _fun0003_ip = 19; continue _fun0003;
case 15:
            var7 = var1.message;
            var6 = var1.name;
case 19:
            var3 = var7.length;
            var1 = 1000;
            var5 = var7;
            if(!(var3 > var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = var7.substring;
            var3 = 0;
            var1 = 997;
            var3 = var4.bind(var7)(var3, var1);
            var1 = '...';
            var5 = var3 + var1;
case 20:
            var3 = null;
            var1 = var5;
            if(!(var3 != var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ': ';
            var1 = var4.bind(var3)(var6, var2, var5);
case 22:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var2 = function trackLibdiscoreFailure(arg1) {
        var4 = arg1;
        var5 = _closure1_slot5;
        var3 = var5.error;
        var1 = 'Failed to execute smoke test:';
        var1 = var3.bind(var5)(var1, var4);
        var3 = _closure1_slot9;
        var1 = undefined;
        var6 = var3.bind(var1)(var4);
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.LIBDISCORE_LOADED;
        var2 = {};
        var7 = false;
        var2['success'] = var7;
        var2['error'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot10 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var12 = var11.bind(var1)(var7);
    var7 = var12.prototype;
    var11 = Object.create(var7, {constructor: {value: var12}});
    var16 = 'libdiscore';
    var17 = var11;
    var7 = new var17[var12](var16, var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot5 = var7;
    var7 = false;
    var _closure1_slot6 = var7;
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/libdiscore/libDiscoreSmokeTest.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['libDiscoreSmokeTest'] = var6;
    var3['trackLibdiscoreSuccess'] = var5;
    var3['formatErrorMessage'] = var4;
    var3['trackLibdiscoreFailure'] = var2;
    return var1;
})();