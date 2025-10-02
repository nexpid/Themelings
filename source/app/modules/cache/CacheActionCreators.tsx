// app/modules/cache/CacheActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _writeCaches() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = undefined;
                    if(!(var7 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = false;
case 4:
                    SaveGenerator(address=25);
case 6:
                    return var5;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = _closure1_slot4;
                    var3 = var6.canWriteCaches;
                    var3 = var3.bind(var6)(var7);
                    if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = _closure1_slot3;
                    var3 = var6.loadAllMissingChannels;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=75);
case 12:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = new Array(0);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 3;
                    var4 = var8[var4];
                    var8 = var6.bind(var5)(var4);
                    var6 = var8.dispatch;
                    var4 = {};
                    var9 = 'WRITE_CACHES';
                    var4['type'] = var9;
                    var4['promisesToWaitOn'] = var7;
                    var4 = var6.bind(var8)(var4);
                    var4 = global;
                    var6 = var4.Promise;
                    var4 = var6.all;
                    var4 = var4.bind(var6)(var7);
                    SaveGenerator(address=153);
case 16:
                    return var4;
case 17:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 10:
                    return var5;
case 18:
                    return var4;
case 14:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelLoader;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/cache/CacheActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function writeCaches() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['writeCaches'] = var4;
    var2 = function clearCaches() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'CLEAR_CACHES', 'reason': 'Requested by user', 'preventWritingCachesAgainThisSession': true, 'resetSocket': true};
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearCaches'] = var2;
    return var1;
})();