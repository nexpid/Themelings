// app/modules/games/autocomplete/GameAutocompleteActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchGameAutocomplete() {
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
                    var2 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.normalizeGameAutocompleteQuery;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var6 = var3;
                    var11 = null;
                    if(!(var11 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.shouldSuppressFetch;
                    var3 = var6;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = 4;
                    var4 = var4[var9];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.dispatch;
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = {};
                    var10 = 'GAME_AUTOCOMPLETE_FETCH';
                    var3['type'] = var10;
                    var10 = var6;
                    var3['query'] = var10;
                    var3 = var4.bind(var5)(var3);
case 8: // try_start_0
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 5;
                    var3 = var12[var3];
                    var3 = var10.bind(var2)(var3);
                    var12 = var3.HTTP;
                    var10 = var12.get;
                    var3 = {};
                    var13 = _closure1_slot5;
                    var13 = var13.GAMES_AUTOCOMPLETE;
                    var3['url'] = var13;
                    var13 = {};
                    var14 = var6;
                    var13['q'] = var14;
                    var3['query'] = var13;
                    var13 = false;
                    var3['rejectWithError'] = var13;
                    var3 = var10.bind(var12)(var3);
                    SaveGenerator(address=217);
case 9:
                    return var3;
case 10:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var10 = var3.body;
                    var8 = var10;
                    if(!(var11 == var10)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var11 = new Array(0);
                    _fun0001_ip = 15; continue _fun0001;
case 13:
                    var11 = var8;
case 15:
                    var10 = var11.map;
                    var8 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = global;
                        var5 = var3.String;
                        var4 = var2.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var2 = var2.icon;
                        var1['icon'] = var2;
                        return var1;
                    };
                    var12 = var10.bind(var11)(var8);
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var9];
                    var11 = var10.bind(var2)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var13 = 'GAME_AUTOCOMPLETE_FETCH_SUCCESS';
                    var8['type'] = var13;
                    var13 = var6;
                    var8['query'] = var13;
                    var8['results'] = var12;
                    var8 = var10.bind(var11)(var8);
case 16: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 11:
                    return var3;
case 17: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'GAME_AUTOCOMPLETE_FETCH_FAILURE';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['query'] = var10;
                    var7 = var8.bind(var9)(var7);
                    throw var3;
case 6:
                    var3 = {};
                    var7 = 'GAME_AUTOCOMPLETE_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['query'] = var6;
                    var6 = new Array(0);
                    var3['results'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/autocomplete/GameAutocompleteActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchGameAutocomplete() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGameAutocomplete'] = var2;
    return var1;
})();