// app/actions/LibraryApplicationStatisticsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchActivityStatistics() {
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
                    var2 = _closure1_slot4;
                    var4 = var2.lastFetched;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = global;
                    var5 = var2.Date;
                    var2 = var5.now;
                    var2 = var2.bind(var5)();
                    var4 = var2 - var4;
                    var2 = _closure1_slot6;
                    if(!(!(var4 < var2))) { _fun0001_ip = 6; continue _fun0001 }
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = _closure1_slot5;
                    var7 = var7.USER_ACTIVITY_STATISTICS;
                    var2['url'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=128);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['statistics'] = var6;
                    var3 = var4.bind(var5)(var3);
case 11: // try_end0
                    _fun0001_ip = 6; continue _fun0001;
case 9:
                    return var2;
case 12: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var2;
case 6:
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.HOUR;
    var4 = 6;
    var7 = var4 * var7;
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/LibraryApplicationStatisticsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchActivityStatistics() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchActivityStatistics'] = var2;
    return var1;
})();