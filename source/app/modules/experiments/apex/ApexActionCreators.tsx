// app/modules/experiments/apex/ApexActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
                    if(var2) { _fun0001_ip = 232; continue _fun0001 }
 10:
                    var8 = arg1;
 13: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.APEX_EXPERIMENTS_METADATA;
                    var2['url'] = var7;
                    var7 = {};
                    var7['surface'] = var8;
                    var2['query'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=90);
 88:
                    return var2;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 175; continue _fun0001 }
 96:
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
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['experiments'] = var6;
                    var3 = var4.bind(var5)(var3);
 173: // try_end0
                    _fun0001_ip = 227; continue _fun0001;
 175:
                    return var2;
 178: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'APEX_EXPERIMENTS_METADATA_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 227:
                    var2 = undefined;
                    return var2;
 232:
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/apex/ApexActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchApexExperimentsMetadata() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchApexExperimentsMetadata'] = var2;
    return var1;
})();