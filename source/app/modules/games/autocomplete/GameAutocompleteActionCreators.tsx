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
                    var5 = undefined;
                    var6 = undefined;
                    var4 = undefined;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 2;
                    var2 = var8[var2];
                    var8 = var7.bind(var5)(var2);
                    var7 = var8.normalizeGameAutocompleteQuery;
                    var2 = arg1;
                    var2 = var7.bind(var8)(var2);
                    var6 = var2;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 3;
                    var2 = var2[var7];
                    var10 = var8.bind(var5)(var2);
                    var8 = var10.dispatch;
                    var2 = {};
                    var11 = 'GAME_AUTOCOMPLETE_FETCH';
                    var2['type'] = var11;
                    var11 = var6;
                    var2['query'] = var11;
                    var2 = var8.bind(var10)(var2);
case 6: // try_start_0
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 4;
                    var2 = var10[var2];
                    var2 = var8.bind(var5)(var2);
                    var10 = var2.HTTP;
                    var8 = var10.get;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var11 = var11.GAMES_AUTOCOMPLETE;
                    var2['url'] = var11;
                    var11 = {};
                    var12 = var6;
                    var11['q'] = var12;
                    var2['query'] = var11;
                    var11 = false;
                    var2['rejectWithError'] = var11;
                    var2 = var8.bind(var10)(var2);
                    SaveGenerator(address=191);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = var2.body;
                    var4 = var8;
                    if(!(var9 == var8)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var9 = new Array(0);
                    _fun0001_ip = 13; continue _fun0001;
case 11:
                    var9 = var4;
case 13:
                    var8 = var9.map;
                    var4 = function(arg1) {
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
                        var2 = var2.icon_hash;
                        var1['icon_hash'] = var2;
                        return var1;
                    };
                    var10 = var8.bind(var9)(var4);
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var9 = var8.bind(var5)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var11 = 'GAME_AUTOCOMPLETE_FETCH_SUCCESS';
                    var4['type'] = var11;
                    var11 = var6;
                    var4['query'] = var11;
                    var4['results'] = var10;
                    var4 = var8.bind(var9)(var4);
case 4: // try_end0
                    return var5;
case 9:
                    return var2;
case 14: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GAME_AUTOCOMPLETE_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['query'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/autocomplete/GameAutocompleteActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchGameAutocomplete() {
        var1 = undefined;
        var4 = _closure1_slot5;
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