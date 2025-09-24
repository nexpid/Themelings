// app/modules/experiments/apex/ApexActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchApexExperimentsMetadata() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 233; continue _fun0001 }
 10:
                    var8 = arg1;
 13: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.APEX_EXPERIMENTS_METADATA;
                    var2['url'] = var7;
                    var7 = {};
                    var7['surface'] = var8;
                    var2['query'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=91);
 89:
                    return var2;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 176; continue _fun0001 }
 97:
                    var4 = var2.body;
                    var7 = var4.experiments;
                    var6 = var7.map;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.title;
                        var1['title'] = var3;
                        var3 = var2.revision;
                        var1['revision'] = var3;
                        var3 = var2.unit_type;
                        var1['unitType'] = var3;
                        var4 = var2.variants;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.id;
                            var1['id'] = var3;
                            var3 = var2.label;
                            var1['label'] = var3;
                            var2 = var2.type;
                            var1['type'] = var2;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1['variants'] = var2;
                        return var1;
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['experiments'] = var6;
                    var3 = var4.bind(var5)(var3);
 174: // try_end0
                    _fun0001_ip = 228; continue _fun0001;
 176:
                    return var2;
 179: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'APEX_EXPERIMENTS_METADATA_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 228:
                    var2 = undefined;
                    return var2;
 233:
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
    var1 = function _fetchUserExperimentAssignments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 401; continue _fun0002 }
 13:
                    var6 = var7;
                    var2 = undefined;
                    var10 = undefined;
                    var5 = _closure1_slot4;
                    var4 = var5.isFetching;
                    var4 = var4.bind(var5)(var7);
                    if(var4) { _fun0002_ip = 398; continue _fun0002 }
 44:
                    var7 = _closure1_slot4;
                    var5 = var7.hasLoaded;
                    var4 = var6;
                    var4 = var5.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 398; continue _fun0002 }
 68:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 4;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'APEX_EXPERIMENTS_FETCH_START';
                    var4['type'] = var9;
                    var9 = var6;
                    var4['userId'] = var9;
                    var4 = var7.bind(var8)(var4);
 117: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 3;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot5;
                    var9 = var9.APEX_EXPERIMENTS;
                    var4['url'] = var9;
                    var9 = {};
                    var11 = 5;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.Experiment_Surface;
                    var11 = var11.APP;
                    var9['surface'] = var11;
                    var4['query'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=214);
 212:
                    return var4;
 214:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 350; continue _fun0002 }
 223:
                    var10 = var4;
                    var8 = null;
                    if(!(var8 != var4)) { _fun0002_ip = 302; continue _fun0002 }
 232:
                    var7 = var10;
                    var7 = var7.body;
                    if(!(var8 != var7)) { _fun0002_ip = 302; continue _fun0002 }
 244:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'APEX_EXPERIMENTS_FETCH_SUCCESS';
                    var7['type'] = var11;
                    var11 = var6;
                    var7['userId'] = var11;
                    var10 = var10.body;
                    var7['experiments'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0002_ip = 348; continue _fun0002;
 302:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['userId'] = var10;
                    var7 = var8.bind(var9)(var7);
 348: // try_end0
                    _fun0002_ip = 398; continue _fun0002;
 350:
                    return var4;
 353: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['userId'] = var6;
                    var3 = var4.bind(var5)(var3);
 398:
                    return var2;
 401:
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/apex/ApexActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchApexExperimentsMetadata() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchApexExperimentsMetadata'] = var4;
    var2 = function fetchUserExperimentAssignments() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUserExperimentAssignments'] = var2;
    return var1;
})();