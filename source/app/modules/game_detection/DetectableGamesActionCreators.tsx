// app/modules/game_detection/DetectableGamesActionCreators.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/DetectableGamesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchDetectableGamesSupplemental(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
            var5 = false;
            var3['forceFetch'] = var5;
            var2 = var3;
case 2:
            var2 = var2.forceFetch;
            var6 = var4;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.filter;
            var2 = _closure1_slot4;
            var2 = var2.canFetch;
            var6 = var3.bind(var4)(var2);
case 4:
            var2 = var6.length;
            var5 = 0;
            if(!(var5 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH';
            var2['type'] = var7;
            var2['applicationIds'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var5 = arg1;
case 10: // try_start_0
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 4;
                            var2 = var6[var2];
                            var6 = undefined;
                            var2 = var4.bind(var6)(var2);
                            var7 = var2.HTTP;
                            var4 = var7.get;
                            var2 = {};
                            var8 = _closure1_slot5;
                            var8 = var8.APPLICATIONS_GAMES_SUPPLEMENTAL;
                            var2['url'] = var8;
                            var8 = {};
                            var9 = var5;
                            var8['application_ids'] = var9;
                            var2['query'] = var8;
                            var8 = true;
                            var2['rejectWithError'] = var8;
                            var2 = var4.bind(var7)(var2);
                            SaveGenerator(address=94);
case 11:
                            return var2;
case 12:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = 3;
                            var3 = var7[var3];
                            var6 = var4.bind(var6)(var3);
                            var4 = var6.dispatch;
                            var3 = {};
                            var7 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS';
                            var3['type'] = var7;
                            var7 = var5;
                            var3['applicationIds'] = var7;
                            var7 = var2.body;
                            var7 = var7.supplemental_game_data;
                            var3['supplementalGameData'] = var7;
                            var3 = var4.bind(var6)(var3);
case 15: // try_end0
                            _fun0002_ip = 16; continue _fun0002;
case 13:
                            return var2;
case 17: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 3;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE';
                            var2['type'] = var6;
                            var2['applicationIds'] = var5;
                            var2 = var3.bind(var4)(var2);
case 16:
                            var2 = undefined;
                            return var2;
case 8:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var2.bind(var1)();
            var2 = var6.length;
            var3 = 20;
            if(!(var2 > var5)) { _fun0001_ip = 6; continue _fun0001 }
case 18:
            var2 = var6.splice;
            var2 = var2.bind(var6)(var5, var3);
            var2 = var4.bind(var1)(var2);
            var2 = var6.length;
            if(var2 > var5) { _fun0001_ip = 18; continue _fun0001 }
case 6:
            return var1;
        }
    };
    var3['fetchDetectableGamesSupplemental'] = var2;
    return var1;
})();