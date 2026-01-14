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
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = arg1;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.APEX_EXPERIMENTS_METADATA;
                    var2['url'] = var7;
                    var7 = {};
                    var7['surface'] = var8;
                    var2['query'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=90);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
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
                    var3 = 5;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['experiments'] = var6;
                    var3 = var4.bind(var5)(var3);
case 9: // try_end0
                    _fun0001_ip = 10; continue _fun0001;
case 7:
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'APEX_EXPERIMENTS_METADATA_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
case 10:
                    var2 = undefined;
                    return var2;
case 2:
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
    var1 = function _fetchUserExperimentAssignments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 4:
                    var6 = var7;
                    var2 = undefined;
                    var10 = undefined;
                    var5 = _closure1_slot6;
                    var4 = var5.isFetching;
                    var4 = var4.bind(var5)(var7);
                    if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var7 = _closure1_slot6;
                    var5 = var7.hasLoaded;
                    var4 = var6;
                    var4 = var5.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 5;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'APEX_EXPERIMENTS_FETCH_START';
                    var4['type'] = var9;
                    var9 = var6;
                    var4['unitId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 16: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 4;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.APEX_EXPERIMENTS;
                    var4['url'] = var9;
                    var9 = {};
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.Experiment_Surface;
                    var11 = var11.APP;
                    var9['surface'] = var11;
                    var4['query'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=212);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var10 = var4;
                    var8 = null;
                    if(!(var8 != var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var7 = var10;
                    var7 = var7.body;
                    if(!(var8 != var7)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'APEX_EXPERIMENTS_FETCH_SUCCESS';
                    var7['type'] = var11;
                    var11 = var6;
                    var7['unitId'] = var11;
                    var10 = var10.body;
                    var7['experiments'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0002_ip = 24; continue _fun0002;
case 21:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['unitId'] = var10;
                    var7 = var8.bind(var9)(var7);
case 24: // try_end0
                    _fun0002_ip = 13; continue _fun0002;
case 19:
                    return var4;
case 25: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['unitId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 13:
                    return var2;
case 12:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _fetchInstallationExperiments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = undefined;
                    var6 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var10 = null;
                    if(!(var10 != var7)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var4 = _closure1_slot6;
                    var3 = var4.hasLoaded;
                    var3 = var3.bind(var4)(var7);
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 28:
                    var9 = _closure1_slot6;
                    var4 = var9.isFetching;
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 7;
                    var3 = var3[var8];
                    var3 = var11.bind(var2)(var3);
                    var3 = var3.INSTALLATION_UNIT_ID;
                    var3 = var4.bind(var9)(var3);
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var9 = _closure1_slot6;
                    var4 = var9.hasLoaded;
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var11.bind(var2)(var3);
                    var3 = var3.INSTALLATION_UNIT_ID;
                    var3 = var4.bind(var9)(var3);
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 32:
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 5;
                    var4 = var12[var3];
                    var11 = var9.bind(var2)(var4);
                    var9 = var11.dispatch;
                    var4 = {};
                    var13 = 'APEX_EXPERIMENTS_FETCH_START';
                    var4['type'] = var13;
                    var13 = _closure1_slot0;
                    var12 = var12[var8];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.INSTALLATION_UNIT_ID;
                    var4['unitId'] = var12;
                    var4 = var9.bind(var11)(var4);
case 33: // try_start_0
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 4;
                    var4 = var15[var4];
                    var4 = var14.bind(var2)(var4);
                    var11 = var4.HTTP;
                    var9 = var11.get;
                    var4 = {};
                    var12 = _closure1_slot7;
                    var12 = var12.APEX_EXPERIMENTS;
                    var4['url'] = var12;
                    var12 = {};
                    var13 = 6;
                    var13 = var15[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.Experiment_Surface;
                    var13 = var13.APP;
                    var12['surface'] = var13;
                    var4['query'] = var12;
                    var12 = false;
                    var4['rejectWithError'] = var12;
                    var4 = var9.bind(var11)(var4);
                    SaveGenerator(address=311);
case 34:
                    return var4;
case 35:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var6 = var4;
                    var11 = var10 == var4;
                    var9 = undefined;
                    if(var11) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var11 = var6;
                    var9 = var11.body;
case 38:
                    if(!(var10 == var9)) { _fun0003_ip = 40; continue _fun0003 }
case 24:
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = var12[var3];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var13 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var9['type'] = var13;
                    var13 = _closure1_slot0;
                    var12 = var12[var8];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.INSTALLATION_UNIT_ID;
                    var9['unitId'] = var12;
                    var9 = var10.bind(var11)(var9);
                    _fun0003_ip = 41; continue _fun0003;
case 40:
                    var10 = var6.body;
                    var6 = var10.installation;
                    _closure4_slot0 = var6;
                    var9 = _closure1_slot4;
                    var6 = _closure1_slot3;
                    var6 = var9.bind(var2)(var10, var6);
                    _closure4_slot1 = var6;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var9 = var6.Emitter;
                    var6 = var9.batched;
                    var5 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure4_slot0;
                            if(!var1) { _fun0004_ip = 42; continue _fun0004 }
case 3:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'INSTALLATION_ID';
                            var1['type'] = var4;
                            var4 = _closure4_slot0;
                            var1['installation'] = var4;
                            var1 = var2.bind(var3)(var1);
case 42:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 5;
                            var2 = var8[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var7 = 'APEX_EXPERIMENTS_FETCH_SUCCESS';
                            var2['type'] = var7;
                            var7 = _closure1_slot0;
                            var6 = 7;
                            var6 = var8[var6];
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.INSTALLATION_UNIT_ID;
                            var2['unitId'] = var6;
                            var5 = _closure4_slot1;
                            var2['experiments'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var5 = var6.bind(var9)(var5);
case 41: // try_end0
                    _fun0003_ip = 30; continue _fun0003;
case 36:
                    return var4;
case 43: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                    var3['type'] = var9;
                    var7 = _closure1_slot0;
                    var6 = var6[var8];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.INSTALLATION_UNIT_ID;
                    var3['unitId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 30:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = ['installation'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/apex/ApexActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchApexExperimentsMetadata() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchApexExperimentsMetadata'] = var4;
    var4 = function fetchUserExperimentAssignments() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUserExperimentAssignments'] = var4;
    var2 = function fetchInstallationExperiments() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchInstallationExperiments'] = var2;
    return var1;
})();