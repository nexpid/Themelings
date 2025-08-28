// app/modules/roblox_subgame_detection/RobloxActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchUnknownUniverseId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 276; continue _fun0001 }
 10:
                    var7 = arg1;
                    var2 = undefined;
                    var4 = undefined;
                    var9 = undefined;
 19: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.PLATFORM_APPLICATION;
                    var3['url'] = var8;
                    var8 = {};
                    var11 = var7;
                    var8['sku'] = var11;
                    var3['body'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=98);
 96:
                    return var3;
 98:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 214; continue _fun0001 }
 104:
                    var4 = var3;
                    var6 = var3.status;
                    var8 = null;
                    var5 = 200;
                    var11 = null;
                    if(!(var5 === var6)) { _fun0001_ip = 133; continue _fun0001 }
 123:
                    var4 = var4.body;
                    var11 = var4.application;
 133:
                    var9 = var11;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var12 = 'ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS';
                    var4['type'] = var12;
                    var12 = var7;
                    var4['universeId'] = var12;
                    var11 = var8 != var11;
                    var8 = null;
                    if(!var11) { _fun0001_ip = 203; continue _fun0001 }
 188:
                    var11 = _closure1_slot4;
                    var10 = var11.createFromServer;
                    var8 = var10.bind(var11)(var9);
 203:
                    var4['application'] = var8;
                    var4 = var5.bind(var6)(var4);
 212: // try_end0
                    _fun0001_ip = 273; continue _fun0001;
 214:
                    return var3;
 217: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE';
                    var3['type'] = var8;
                    var3['universeId'] = var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
 273:
                    return var2;
 276:
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
    var1 = function _fetchRobloxSupplementalData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 193; continue _fun0002 }
 15:
                    var6 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = function shouldFetch(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getSupplementalData;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var3 = null;
                            var1 = var3 == var2;
                            if(var1) { _fun0003_ip = 40; continue _fun0003 }
 30:
                            var2 = var2.rootPlaceId;
                            var1 = var3 == var2;
 40:
                            return var1;
                        }
                    };
                    var _closure4_slot0 = var4;
                    var2 = var5.filter;
                    var8 = var2.bind(var5)(var4);
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var7 = var4.bind(var5)(var2);
                    var2 = {};
                    _closure4_slot1 = var2;
                    var5 = var7.forEach;
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = arg1;
                            var2 = _closure1_slot5;
                            var1 = var2.getSupplementalData;
                            var2 = var1.bind(var2)(var3);
                            var1 = null;
                            if(!(var1 != var2)) { _fun0004_ip = 38; continue _fun0004 }
 27:
                            var1 = _closure4_slot1;
                            var1[var3] = var2;
 38:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var7)(var4);
                    var5 = var8.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0002_ip = 190; continue _fun0002 }
 87:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var4 = var5.bind(var6)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.get;
                    var4 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.ROBLOX_APPLICATIONS_SUPPLEMENTAL_DATA;
                    var4['url'] = var7;
                    var7 = {};
                    var7['skus'] = var8;
                    var4['query'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.status;
                            var2 = 200;
                            if(!(var2 === var4)) { _fun0005_ip = 162; continue _fun0005 }
 20:
                            var6 = var1.body;
                            var _closure5_slot0 = var6;
                            var1 = {};
                            var7 = _closure4_slot1;
                            var8 = var1;
                            var2 = copyDataProperties(var8, var7);
                            var _closure5_slot1 = var1;
                            var2 = global;
                            var5 = var2.Object;
                            var4 = var5.keys;
                            var5 = var4.bind(var5)(var6);
                            var4 = var5.forEach;
                            var3 = function(arg1) {
                                var3 = arg1;
                                var2 = _closure5_slot1;
                                var1 = {};
                                var4 = _closure5_slot0;
                                var4 = var4[var3];
                                var4 = var4.root_place_id;
                                var1['rootPlaceId'] = var4;
                                var2[var3] = var1;
                                var1 = undefined;
                                return var1;
                            };
                            var3 = var4.bind(var5)(var3);
                            var3 = var2.Object;
                            var2 = var3.keys;
                            var2 = var2.bind(var3)(var1);
                            var3 = var2.length;
                            var2 = 0;
                            if(!(var3 > var2)) { _fun0005_ip = 160; continue _fun0005 }
 109:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 5;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'ROBLOX_SUBGAME_SUPPLEMENTAL_DATA_FETCH_SUCCESS';
                            var2['type'] = var5;
                            var2['data'] = var1;
                            var2 = var3.bind(var4)(var2);
 160:
                            return var1;
 162:
                            var1 = {};
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=178);
 176:
                    return var3;
 178:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    var2 = var3;
                    if(!var4) { _fun0002_ip = 190; continue _fun0002 }
 187:
                    return var3;
 190:
                    return var2;
 193:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/roblox_subgame_detection/RobloxActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchUnknownUniverseId() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUnknownUniverseId'] = var4;
    var2 = function fetchRobloxSupplementalData() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchRobloxSupplementalData'] = var2;
    return var1;
})();