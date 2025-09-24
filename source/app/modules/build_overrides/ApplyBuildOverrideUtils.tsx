// app/modules/build_overrides/ApplyBuildOverrideUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _applyStaffBuildOverride() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 226; continue _fun0001 }
 10:
                    var13 = arg1;
                    var5 = undefined;
                    var10 = undefined;
                    var4 = undefined;
 19: // try_start_0
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 3;
                    var2 = var12[var2];
                    var2 = var11.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.put;
                    var2 = {};
                    var9 = 4;
                    var8 = var12[var9];
                    var15 = var11.bind(var5)(var8);
                    var14 = var15.getAPIEndpoint;
                    var8 = _closure1_slot5;
                    var8 = var14.bind(var15)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var8['overrides'] = var13;
                    var9 = var12[var9];
                    var9 = var11.bind(var5)(var9);
                    var9 = var9.APP_VERSION;
                    var8['version'] = var9;
                    var2['body'] = var8;
                    var8 = {};
                    var11 = _closure1_slot4;
                    var9 = var11.getToken;
                    var11 = var9.bind(var11)();
                    var10 = var11;
                    var9 = null;
                    var11 = var9 != var11;
                    var9 = '';
                    if(!var11) { _fun0001_ip = 152; continue _fun0001 }
 149:
                    var9 = var10;
 152:
                    var8['Authorization'] = var9;
                    var2['headers'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=184);
 182:
                    return var2;
 184:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 218; continue _fun0001 }
 190:
                    var4 = var2;
                    var3 = _closure1_slot2;
                    var3 = var3.bind(var5)(var2);
                    SaveGenerator(address=206);
 204:
                    return var3;
 206:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 215; continue _fun0001 }
 212: // try_end0
                    return var4;
 215:
                    return var3;
 218:
                    return var2;
 221: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var2;
 226:
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
    var1 = function _applyPublicBuildOverride() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 200; continue _fun0002 }
 10:
                    var12 = arg1;
                    var5 = undefined;
                    var4 = undefined;
 17: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 3;
                    var2 = var11[var2];
                    var2 = var10.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.put;
                    var2 = {};
                    var9 = 4;
                    var8 = var11[var9];
                    var14 = var10.bind(var5)(var8);
                    var13 = var14.getAPIEndpoint;
                    var8 = '/__development/link';
                    var8 = var13.bind(var14)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var8['payload'] = var12;
                    var13 = _closure1_slot4;
                    var12 = var13.getToken;
                    var12 = var12.bind(var13)();
                    var8['token'] = var12;
                    var9 = var11[var9];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.APP_VERSION;
                    var8['version'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=158);
 156:
                    return var2;
 158:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 192; continue _fun0002 }
 164:
                    var4 = var2;
                    var3 = _closure1_slot2;
                    var3 = var3.bind(var5)(var2);
                    SaveGenerator(address=180);
 178:
                    return var3;
 180:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 189; continue _fun0002 }
 186: // try_end0
                    return var4;
 189:
                    return var3;
 192:
                    return var2;
 195: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var2;
 200:
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
    var1 = function _clearBuildOverride() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 136; continue _fun0003 }
 10:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 3;
                    var2 = var9[var2];
                    var4 = undefined;
                    var2 = var8.bind(var4)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var7 = 4;
                    var7 = var9[var7];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.getAPIEndpoint;
                    var7 = _closure1_slot5;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=102);
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 133; continue _fun0003 }
 108:
                    var3 = _closure1_slot2;
                    var3 = var3.bind(var4)(var2);
                    SaveGenerator(address=121);
 119:
                    return var3;
 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 130; continue _fun0003 }
 127:
                    return var2;
 130:
                    return var3;
 133:
                    return var2;
 136:
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
    var4 = '/__development/build_overrides';
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 79; continue _fun0004 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.default;
                    var4 = var5.setBuildOverrideCookieHeader;
                    var2 = arg1;
                    var2 = var2.headers;
                    var2 = var2.set-cookie;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=67);
 65:
                    return var2;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 76; continue _fun0004 }
 73:
                    return var3;
 76:
                    return var2;
 79:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/build_overrides/ApplyBuildOverrideUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function applyStaffBuildOverride() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['applyStaffBuildOverride'] = var4;
    var4 = function applyPublicBuildOverride() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['applyPublicBuildOverride'] = var4;
    var4 = function clearBuildOverride() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['clearBuildOverride'] = var4;
    var2 = function getPublicBuildOverrideLink(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 3;
            var2 = var9[var2];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var5 = 4;
            var5 = var9[var5];
            var8 = var8.bind(var7)(var5);
            var7 = var8.getAPIEndpoint;
            var5 = '/__development/create_build_override_link';
            var5 = var7.bind(var8)(var5);
            var2['url'] = var5;
            var5 = arg1;
            var2['body'] = var5;
            var5 = {};
            var7 = _closure1_slot4;
            var6 = var7.getToken;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 != var7;
            var6 = '';
            if(!var8) { _fun0005_ip = 112; continue _fun0005 }
 109:
            var6 = var7;
 112:
            var5['Authorization'] = var6;
            var2['headers'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var2 = var2.body;
                var2 = var2.url;
                var1['url'] = var2;
                var2 = false;
                var1['error'] = var2;
                return var1;
            };
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.status;
                    var1 = 400;
                    if(!(var1 !== var2)) { _fun0006_ip = 66; continue _fun0006 }
 18:
                    var1 = {};
                    var2 = false;
                    var1['url'] = var2;
                    var6 = var3.status;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var4 = 'Error making API request (';
                    var2 = ')';
                    var2 = var5.bind(var4)(var6, var2);
                    var1['error'] = var2;
                    _fun0006_ip = 86; continue _fun0006;
 66:
                    var2 = {};
                    var4 = false;
                    var2['url'] = var4;
                    var3 = var3.body;
                    var2['error'] = var3;
                    var1 = var2;
 86:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getPublicBuildOverrideLink'] = var2;
    return var1;
})();