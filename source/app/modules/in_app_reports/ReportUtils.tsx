// app/modules/in_app_reports/ReportUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
    var9 = function getReportMenu() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var9;
    var1 = function _getReportMenu() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot21;
                    var6 = undefined;
                    var2 = arg1;
                    var9 = var3.bind(var6)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var4 = var7.GET_REPORT_MENU;
                    var4 = var4.bind(var7)(var9);
                    var2['url'] = var4;
                    var4 = null;
                    var9 = var4 == var8;
                    var7 = undefined;
                    if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = var8.variant;
case 4:
                    var7 = var4 != var7;
                    var6 = undefined;
                    if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = {};
                    var8 = var8.variant;
                    var7['variant'] = var8;
                    var6 = var7;
case 6:
                    var2['query'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=140);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = var2.body;
                    if(!(var4 == var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.parse;
                    var4 = var2.text;
                    var3 = var5.bind(var6)(var4);
case 12:
                    return var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _getReportMenuForModeratorReport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot22;
                    var6 = undefined;
                    var2 = arg1;
                    var9 = var3.bind(var6)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var4 = var7.GET_REPORT_MENU;
                    var4 = var4.bind(var7)(var9);
                    var2['url'] = var4;
                    var4 = null;
                    var9 = var4 == var8;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = var8.variant;
case 4:
                    var7 = var4 != var7;
                    var6 = undefined;
                    if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = {};
                    var8 = var8.variant;
                    var7['variant'] = var8;
                    var6 = var7;
case 6:
                    var2['query'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=140);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = var2.body;
                    if(!(var4 == var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.parse;
                    var4 = var2.text;
                    var3 = var5.bind(var6)(var4);
case 12:
                    return var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _getUnauthenticatedReportMenu() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = _closure1_slot20;
                    var6 = undefined;
                    var2 = arg1;
                    var9 = var3.bind(var6)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var4 = var7.GET_UNAUTHENTICATED_REPORT_MENU;
                    var4 = var4.bind(var7)(var9);
                    var2['url'] = var4;
                    var4 = null;
                    var9 = var4 == var8;
                    var7 = undefined;
                    if(var9) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var7 = var8.variant;
case 4:
                    var7 = var4 != var7;
                    var6 = undefined;
                    if(!var7) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var7 = {};
                    var8 = var8.variant;
                    var7['variant'] = var8;
                    var6 = var7;
case 6:
                    var2['query'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=140);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = var2.body;
                    if(!(var4 == var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = global;
                    var6 = var4.JSON;
                    var5 = var6.parse;
                    var4 = var2.text;
                    var3 = var5.bind(var6)(var4);
case 12:
                    return var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _submitHeadlessReport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 3:
                    var2 = _closure1_slot21;
                    var4 = undefined;
                    var11 = var2.bind(var4)(var9);
                    var3 = _closure1_slot11;
                    var2 = arg2;
                    var2 = var3.bind(var4)(var9, var2);
                    SaveGenerator(address=44);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var10 = _closure1_slot7;
                    var8 = var10.SUBMIT_REPORT_MENU;
                    var8 = var8.bind(var10)(var11);
                    var3['url'] = var8;
                    var8 = _closure1_slot10;
                    var10 = {};
                    var7 = var2.root_node_id;
                    var10['nodeRef'] = var7;
                    var11 = var2.success_node_id;
                    var7 = [''];
                    var7[1] = var11;
                    var10['destination'] = var7;
                    var7 = new Array(1);
                    var7[0] = var10;
                    var7 = var8.bind(var4)(var2, var9, var7);
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=181);
case 12:
                    return var3;
case 19:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    return var4;
case 20:
                    return var3;
case 17:
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _verifyUnauthenticatedReport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var5 = var7.VERIFY_UNAUTHENTICATED_REPORT;
                    var5 = var5.bind(var7)(var6);
                    var2['url'] = var5;
                    var5 = {};
                    var5['name'] = var6;
                    var6 = arg2;
                    var5['email'] = var6;
                    var6 = arg3;
                    var5['code'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=107);
case 24:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var3 = var2.body;
                    return var3;
case 26:
                    return var2;
case 22:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _getDsaExperiment() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.DSA_EXPERIMENT_UNAUTHENTICATED;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=73);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    return var2;
case 32:
                    return var2;
case 28:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _fetchUrfCapabilities() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.DSA_CAPABILITIES;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=73);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    return var2;
case 32:
                    return var2;
case 28:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _submitReportSecondLook() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 24; continue _fun0008 }
case 29:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.SUBMIT_REPORT_SECOND_LOOK;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['token'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=88);
case 34:
                    return var2;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var3 = var2.body;
                    return var3;
case 36:
                    return var2;
case 24:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var8 = function getUnauthenticatedReportNameSafely(arg1) {
        var6 = arg1;
        var1 = var6.name;
        var4 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 9;
        var2 = var10[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var2);
        var2 = global;
        var8 = var2.Object;
        var7 = var8.values;
        var9 = _closure1_slot0;
        var3 = 10;
        var3 = var10[var3];
        var3 = var9.bind(var5)(var3);
        var3 = var3.UnauthenticatedReportNames;
        var7 = var7.bind(var8)(var3);
        var3 = var7.includes;
        var3 = var3.bind(var7)(var1);
        var7 = var6.name;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var2 = 'Invalid report type ';
        var2 = var6.bind(var2)(var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot20 = var8;
    var7 = function getReportNameSafely(arg1) {
        var6 = arg1;
        var1 = var6.name;
        var4 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 9;
        var2 = var10[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var2);
        var2 = global;
        var8 = var2.Object;
        var7 = var8.values;
        var9 = _closure1_slot0;
        var3 = 10;
        var3 = var10[var3];
        var3 = var9.bind(var5)(var3);
        var3 = var3.ReportNames;
        var7 = var7.bind(var8)(var3);
        var3 = var7.includes;
        var3 = var3.bind(var7)(var1);
        var7 = var6.name;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var2 = 'Invalid report type ';
        var2 = var6.bind(var2)(var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot21 = var7;
    var6 = function getModeratorReportNameSafely(arg1) {
        var6 = arg1;
        var1 = var6.name;
        var4 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 9;
        var2 = var10[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var2);
        var2 = global;
        var8 = var2.Object;
        var7 = var8.values;
        var9 = _closure1_slot0;
        var3 = 10;
        var3 = var10[var3];
        var3 = var9.bind(var5)(var3);
        var3 = var3.ModeratorReportNames;
        var7 = var7.bind(var8)(var3);
        var3 = var7.includes;
        var3 = var3.bind(var7)(var1);
        var7 = var6.name;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var2 = 'Invalid report type ';
        var2 = var6.bind(var2)(var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function getModeratorReportEndpointSafely(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var8 = undefined;
            var10 = var4.bind(var8)(var3);
            var7 = _closure1_slot0;
            var3 = 6;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.ReportMenuTypeSets;
            var5 = var3.REPORT_TO_MOD;
            var4 = var5.has;
            var3 = var1.name;
            var5 = var4.bind(var5)(var3);
            var11 = var1.name;
            var3 = global;
            var4 = var3.HermesInternal;
            var4 = var4.concat;
            var6 = 'Invalid report type ';
            var4 = var4.bind(var6)(var11);
            var4 = var10.bind(var8)(var5, var4);
            var5 = var1.name;
            var4 = 10;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.ModeratorReportNames;
            var4 = var4.MESSAGE;
            if(!(var5 !== var4)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
            var5 = var3.Error;
            var4 = var1.name;
            var3 = var3.HermesInternal;
            var3 = var3.concat;
            var13 = var3.bind(var6)(var4);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var14 = var4;
            var3 = new var14[var5](var13, var12);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 38:
            var4 = _closure1_slot7;
            var3 = var4.SUBMIT_MODERATOR_MESSAGE_REPORT;
            var2 = var1.record;
            var2 = var2.channel_id;
            var1 = var1.record;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var4);
    var1 = 0;
    var4 = var12[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var13 = var12[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var13);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var12[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var10 = var4.AnalyticEvents;
    var _closure1_slot6 = var10;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var12[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.SafetyToastType;
    var _closure1_slot8 = var4;
    var4 = function genModeratorSubmitdata(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var9 = arg3;
            var4 = var5.version;
            var1 = var5.variant;
            var7 = var5.language;
            var5 = {};
            var8 = undefined;
            var5['channel_id'] = var8;
            var5['message_id'] = var8;
            var5['guild_id'] = var8;
            var6 = {};
            var6['version'] = var4;
            var6['variant'] = var1;
            var1 = null;
            var10 = var1 != var7;
            var4 = 'en';
            if(!var10) { _fun0010_ip = 40; continue _fun0010 }
case 41:
            var4 = var7;
case 40:
            var6['language'] = var4;
            var7 = var9.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nodeRef;
                return var1;
            };
            var4 = var7.bind(var9)(var4);
            var6['breadcrumbs'] = var4;
            var7 = var9.reduce;
            var4 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg2;
                    var4 = var1.multiSelect;
                    var6 = var1.textInput;
                    var1 = {};
                    var10 = arg1;
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    var7 = null;
                    var2 = var7 != var4;
                    if(!var2) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                    var3 = {};
                    var5 = var4.name;
                    var8 = global;
                    var9 = var8.Object;
                    var8 = var9.keys;
                    var4 = var4.state;
                    var4 = var8.bind(var9)(var4);
                    var3[var5] = var4;
                    var2 = var3;
case 42:
                    var11 = var1;
                    var10 = var2;
                    var2 = copyDataProperties(var11, var10);
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.fromEntries;
                    var5 = var2.Object;
                    var2 = var5.entries;
                    if(!(var7 == var6)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                    var6 = {};
case 44:
                    var6 = var2.bind(var5)(var6);
                    var5 = var6.map;
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var7 = arg1;
                            var2 = var7[Symbol.iterator];
                            var7 = var2().next;
                            var9 = undefined;
                            var3 = undefined;
                            var6 = undefined;
                            var8 = var7().value;
                            var10 = var2;
                            var10 = var10 === var9;
                            var3 = var10;
                            if(var10) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                            var6 = var8;
case 46:
                            var4 = var6;
                            var6 = undefined;
                            var8 = var3;
                            if(var8) { _fun0012_ip = 48; continue _fun0012 }
case 49:
                            var7 = var7().value;
                            var8 = var2;
                            var8 = var8 === var9;
                            var3 = var8;
                            if(var8) { _fun0012_ip = 48; continue _fun0012 }
case 50:
                            var6 = var7;
case 48: // try_start_0
                            var5 = var6.value;
case 51: // try_end0
                            var6 = var3;
                            if(var6) { _fun0012_ip = 52; continue _fun0012 }
case 42:
                            var2.return();
case 52:
                            var6 = var4;
                            var4 = new Array(2);
                            var4[0] = var6;
                            var4[1] = var5;
                            return var4;
case 37: // catch_target0
                            CatchBlockStart(arg_register=0);
                            _fun0012_ip = 53; continue _fun0012;
case 54:
                            CatchBlockStart(arg_register=0);
case 53:
                            if(var3) { _fun0012_ip = 7; continue _fun0012 }
case 55:
                            var2.return();
case 7:
                            throw var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    var10 = var3.bind(var4)(var2);
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    return var1;
                }
            };
            var3 = {};
            var3 = var7.bind(var9)(var4, var3);
            var6['elements'] = var3;
            var4 = var2.name;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.ModeratorReportNames;
            var3 = var3.MESSAGE;
            if(!(var4 !== var3)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            return var1;
case 56:
            var1 = var2.record;
            var4 = var1.channel_id;
            var3 = var1.id;
            var1 = {};
            var12 = var1;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var12 = var1;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var5 = var2.name;
            var2 = 'name';
            var1[var2] = var5;
            var2 = 'channel_id';
            var1[var2] = var4;
            var2 = 'message_id';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function genSubmitData(arg1, arg2, arg3, arg4) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var10 = arg3;
            var7 = arg4;
            var4 = var5.version;
            var1 = var5.variant;
            var8 = var5.language;
            var5 = {};
            var9 = undefined;
            var5['channel_id'] = var9;
            var5['message_id'] = var9;
            var5['stage_instance_id'] = var9;
            var5['guild_id'] = var9;
            var5['guild_scheduled_event_id'] = var9;
            var5['user_id'] = var9;
            var5['email_token'] = var9;
            var5['application_id'] = var9;
            var5['entrypoint'] = var9;
            var5['widget_id'] = var9;
            var6 = {};
            var6['version'] = var4;
            var6['variant'] = var1;
            var1 = null;
            var11 = var1 != var8;
            var4 = 'en';
            if(!var11) { _fun0013_ip = 58; continue _fun0013 }
case 25:
            var4 = var8;
case 58:
            var6['language'] = var4;
            var8 = var10.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nodeRef;
                return var1;
            };
            var4 = var8.bind(var10)(var4);
            var6['breadcrumbs'] = var4;
            var8 = var10.reduce;
            var4 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg2;
                    var4 = var1.multiSelect;
                    var6 = var1.textInput;
                    var1 = {};
                    var10 = arg1;
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    var7 = null;
                    var2 = var7 != var4;
                    if(!var2) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                    var3 = {};
                    var5 = var4.name;
                    var8 = global;
                    var9 = var8.Object;
                    var8 = var9.keys;
                    var4 = var4.state;
                    var4 = var8.bind(var9)(var4);
                    var3[var5] = var4;
                    var2 = var3;
case 42:
                    var11 = var1;
                    var10 = var2;
                    var2 = copyDataProperties(var11, var10);
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.fromEntries;
                    var5 = var2.Object;
                    var2 = var5.entries;
                    if(!(var7 == var6)) { _fun0014_ip = 44; continue _fun0014 }
case 45:
                    var6 = {};
case 44:
                    var6 = var2.bind(var5)(var6);
                    var5 = var6.map;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var7 = arg1;
                            var2 = var7[Symbol.iterator];
                            var7 = var2().next;
                            var9 = undefined;
                            var3 = undefined;
                            var6 = undefined;
                            var8 = var7().value;
                            var10 = var2;
                            var10 = var10 === var9;
                            var3 = var10;
                            if(var10) { _fun0015_ip = 46; continue _fun0015 }
case 47:
                            var6 = var8;
case 46:
                            var4 = var6;
                            var6 = undefined;
                            var8 = var3;
                            if(var8) { _fun0015_ip = 48; continue _fun0015 }
case 49:
                            var7 = var7().value;
                            var8 = var2;
                            var8 = var8 === var9;
                            var3 = var8;
                            if(var8) { _fun0015_ip = 48; continue _fun0015 }
case 50:
                            var6 = var7;
case 48: // try_start_0
                            var5 = var6.value;
case 51: // try_end0
                            var6 = var3;
                            if(var6) { _fun0015_ip = 52; continue _fun0015 }
case 42:
                            var2.return();
case 52:
                            var6 = var4;
                            var4 = new Array(2);
                            var4[0] = var6;
                            var4[1] = var5;
                            return var4;
case 37: // catch_target0
                            CatchBlockStart(arg_register=0);
                            _fun0015_ip = 53; continue _fun0015;
case 54:
                            CatchBlockStart(arg_register=0);
case 53:
                            if(var3) { _fun0015_ip = 7; continue _fun0015 }
case 55:
                            var2.return();
case 7:
                            throw var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    var10 = var3.bind(var4)(var2);
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    return var1;
                }
            };
            var3 = {};
            var3 = var8.bind(var10)(var4, var3);
            var6['elements'] = var3;
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = 10;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.MESSAGE;
            if(!(var8 !== var4)) { _fun0013_ip = 59; continue _fun0013 }
case 60:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.FIRST_DM;
            if(!(var8 !== var4)) { _fun0013_ip = 59; continue _fun0013 }
case 61:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.GUILD;
            if(!(var8 !== var4)) { _fun0013_ip = 62; continue _fun0013 }
case 63:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.GUILD_DISCOVERY;
            if(!(var8 !== var4)) { _fun0013_ip = 62; continue _fun0013 }
case 64:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.GUILD_DIRECTORY_ENTRY;
            if(!(var8 !== var4)) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.STAGE_CHANNEL;
            if(!(var8 !== var4)) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.GUILD_SCHEDULED_EVENT;
            if(!(var8 !== var4)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.USER;
            if(!(var8 !== var4)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.UnauthenticatedReportNames;
            var4 = var4.USER;
            if(!(var8 !== var4)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.UnauthenticatedReportNames;
            var4 = var4.MESSAGE;
            if(!(var8 !== var4)) { _fun0013_ip = 75; continue _fun0013 }
case 76:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.UnauthenticatedReportNames;
            var4 = var4.GUILD;
            if(!(var8 !== var4)) { _fun0013_ip = 77; continue _fun0013 }
case 78:
            var8 = var2.name;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var4 = var11.bind(var9)(var4);
            var4 = var4.ReportNames;
            var4 = var4.APPLICATION;
            if(!(var8 !== var4)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
            var4 = var2.name;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var3 = var8.bind(var9)(var3);
            var3 = var3.ReportNames;
            var3 = var3.WIDGET;
            var1 = null;
            if(!(var4 === var3)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var4 = 'name';
            var3[var4] = var8;
            var8 = var2.user_id;
            var4 = 'user_id';
            var3[var4] = var8;
            var8 = var2.widget_id;
            var4 = 'widget_id';
            var3[var4] = var8;
            var1 = var3;
case 81:
            _fun0013_ip = 83; continue _fun0013;
case 79:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var4 = 'name';
            var3[var4] = var8;
            var4 = var2.record;
            var8 = var4.id;
            var4 = 'application_id';
            var3[var4] = var8;
            var8 = var2.contextualGuildId;
            var4 = 'guild_id';
            var3[var4] = var8;
            var8 = var2.contextualChannelId;
            var4 = 'channel_id';
            var3[var4] = var8;
            var8 = var2.entrypoint;
            var4 = 'entrypoint';
            var3[var4] = var8;
            var1 = var3;
case 83:
            _fun0013_ip = 84; continue _fun0013;
case 77:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var4 = 'name';
            var3[var4] = var8;
            var4 = var2.record;
            var8 = var4.id;
            var4 = 'guild_id';
            var3[var4] = var8;
            var4 = 'email_token';
            var3[var4] = var7;
            var1 = var3;
case 84:
            _fun0013_ip = 85; continue _fun0013;
case 75:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var4 = 'name';
            var3[var4] = var8;
            var4 = var2.record;
            var8 = var4.id;
            var4 = 'message_id';
            var3[var4] = var8;
            var4 = 'email_token';
            var3[var4] = var7;
            var1 = var3;
case 85:
            _fun0013_ip = 86; continue _fun0013;
case 73:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var4 = 'name';
            var3[var4] = var8;
            var4 = var2.record;
            var8 = var4.id;
            var4 = 'user_id';
            var3[var4] = var8;
            var8 = var2.contextualGuildId;
            var4 = 'guild_id';
            var3[var4] = var8;
            var4 = 'email_token';
            var3[var4] = var7;
            var1 = var3;
case 86:
            _fun0013_ip = 87; continue _fun0013;
case 71:
            var3 = {};
            var13 = var3;
            var12 = var6;
            var4 = copyDataProperties(var13, var12);
            var13 = var3;
            var12 = var5;
            var4 = copyDataProperties(var13, var12);
            var7 = var2.name;
            var4 = 'name';
            var3[var4] = var7;
            var4 = var2.record;
            var7 = var4.id;
            var4 = 'user_id';
            var3[var4] = var7;
            var7 = var2.contextualGuildId;
            var4 = 'guild_id';
            var3[var4] = var7;
            var1 = var3;
case 87:
            return var1;
case 69:
            var1 = var2.record;
            var4 = var1.id;
            var7 = var1.guild_id;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var3 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var5;
            var3 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var3 = 'name';
            var1[var3] = var8;
            var3 = 'guild_id';
            var1[var3] = var7;
            var3 = 'guild_scheduled_event_id';
            var1[var3] = var4;
            return var1;
case 67:
            var1 = var2.record;
            var4 = var1.id;
            var7 = var1.guild_id;
            var8 = var1.channel_id;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var3 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var5;
            var3 = copyDataProperties(var13, var12);
            var9 = var2.name;
            var3 = 'name';
            var1[var3] = var9;
            var3 = 'channel_id';
            var1[var3] = var8;
            var3 = 'guild_id';
            var1[var3] = var7;
            var3 = 'stage_instance_id';
            var1[var3] = var4;
            return var1;
case 65:
            var1 = var2.record;
            var4 = var1.guildId;
            var7 = var1.channelId;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var3 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var5;
            var3 = copyDataProperties(var13, var12);
            var8 = var2.name;
            var3 = 'name';
            var1[var3] = var8;
            var3 = 'channel_id';
            var1[var3] = var7;
            var3 = 'guild_id';
            var1[var3] = var4;
            return var1;
case 62:
            var1 = var2.record;
            var4 = var1.id;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var3 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var5;
            var3 = copyDataProperties(var13, var12);
            var7 = var2.name;
            var3 = 'name';
            var1[var3] = var7;
            var3 = 'guild_id';
            var1[var3] = var4;
            return var1;
case 59:
            var1 = var2.record;
            var4 = var1.channel_id;
            var3 = var1.id;
            var1 = {};
            var13 = var1;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var13 = var1;
            var12 = var5;
            var5 = copyDataProperties(var13, var12);
            var5 = var2.name;
            var2 = 'name';
            var1[var2] = var5;
            var2 = 'channel_id';
            var1[var2] = var4;
            var2 = 'message_id';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var10 = 'SETTINGS_UPSELLS_VIEWED';
    var4['SETTINGS_UPSELLS_VIEWED'] = var10;
    var10 = 'SETTINGS_UPSELLS_APPLY_CLICKED';
    var4['SETTINGS_UPSELLS_APPLY_CLICKED'] = var10;
    var10 = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED';
    var4['SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED'] = var10;
    var10 = 12;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/in_app_reports/ReportUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['getReportMenu'] = var9;
    var9 = function getReportMenuForModeratorReport() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getReportMenuForModeratorReport'] = var9;
    var9 = function getUnauthenticatedReportMenu() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getUnauthenticatedReportMenu'] = var9;
    var9 = function submitHeadlessReport() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['submitHeadlessReport'] = var9;
    var9 = function submitReport(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = 'iar_skip_api_report_submit';
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0016_ip = 88; continue _fun0016 }
case 89:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var1 = var1.ReportMenuTypeSets;
            var7 = var1.REPORT_TO_MOD;
            var2 = var7.has;
            var1 = var5.name;
            var1 = var2.bind(var7)(var1);
            if(var1) { _fun0016_ip = 12; continue _fun0016 }
case 90:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var2.bind(var3)(var1);
            var7 = var1.HTTP;
            var2 = var7.post;
            var1 = {};
            var11 = _closure1_slot7;
            var10 = var11.SUBMIT_REPORT_MENU;
            var9 = _closure1_slot21;
            var9 = var9.bind(var3)(var5);
            var9 = var10.bind(var11)(var9);
            var1['url'] = var9;
            var8 = _closure1_slot10;
            var8 = var8.bind(var3)(var6, var5, var4);
            var1['body'] = var8;
            var8 = false;
            var1['rejectWithError'] = var8;
            var1 = var2.bind(var7)(var1);
            _fun0016_ip = 17; continue _fun0016;
case 12:
            var2 = function submitModeratorReport(arg1, arg2, arg3) {
                var8 = arg2;
                var4 = _closure1_slot9;
                var7 = undefined;
                var3 = arg1;
                var2 = arg3;
                var5 = var4.bind(var7)(var3, var8, var2);
                var _closure3_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var2 = var3.bind(var7)(var2);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {};
                var6 = _closure1_slot23;
                var6 = var6.bind(var7)(var8);
                var2['url'] = var6;
                var2['body'] = var5;
                var5 = false;
                var2['rejectWithError'] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.showSuccessToast;
                        var2 = _closure1_slot8;
                        var2 = var2.REPORT_TO_MOD_SUCCESS;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure3_slot0;
                        var6 = null;
                        var5 = var6 == var2;
                        var2 = undefined;
                        if(var5) { _fun0017_ip = 31; continue _fun0017 }
case 91:
                        var5 = _closure3_slot0;
                        var2 = var5.channel_id;
case 31:
                        var2 = var6 != var2;
                        if(!var2) { _fun0017_ip = 25; continue _fun0017 }
case 92:
                        var5 = _closure3_slot0;
                        var7 = var6 == var5;
                        var5 = undefined;
                        if(var7) { _fun0017_ip = 55; continue _fun0017 }
case 93:
                        var7 = _closure3_slot0;
                        var5 = var7.message_id;
case 55:
                        var2 = var6 != var5;
case 25:
                        if(!var2) { _fun0017_ip = 94; continue _fun0017 }
case 58:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS';
                        var1['type'] = var5;
                        var4 = _closure3_slot0;
                        var5 = var4.channel_id;
                        var1['channelId'] = var5;
                        var4 = var4.message_id;
                        var1['messageId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 94:
                        var1 = arg1;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var6, var5, var4);
case 17:
            _fun0016_ip = 95; continue _fun0016;
case 88:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 95:
            return var1;
        }
    };
    var3['submitReport'] = var9;
    var9 = function submitUnauthenticatedReport(arg1, arg2, arg3, arg4) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var9 = arg2;
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = 'iar_skip_api_report_submit';
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0018_ip = 96; continue _fun0018 }
case 47:
            var1 = _closure1_slot20;
            var8 = undefined;
            var7 = var1.bind(var8)(var9);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var8)(var1);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var6 = _closure1_slot7;
            var5 = var6.SUBMIT_UNAUTHENTICATED_REPORT_MENU;
            var5 = var5.bind(var6)(var7);
            var1['url'] = var5;
            var7 = _closure1_slot10;
            var13 = arg1;
            var11 = arg3;
            var10 = arg4;
            var14 = undefined;
            var12 = var9;
            var4 = var14[var7](var13, var12, var11, var10, var9);
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
case 96:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['submitUnauthenticatedReport'] = var9;
    var9 = function sendUnauthenticatedReportPincode(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot7;
        var4 = var6.SEND_UNAUTHENTICATED_REPORT_PINCODE;
        var4 = var4.bind(var6)(var5);
        var1['url'] = var4;
        var4 = {};
        var4['name'] = var5;
        var5 = arg2;
        var4['email'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sendUnauthenticatedReportPincode'] = var9;
    var9 = function verifyUnauthenticatedReport() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['verifyUnauthenticatedReport'] = var9;
    var9 = function getDsaExperiment() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDsaExperiment'] = var9;
    var9 = function fetchUrfCapabilities() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchUrfCapabilities'] = var9;
    var9 = function submitReportSecondLook() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['submitReportSecondLook'] = var9;
    var3['getUnauthenticatedReportNameSafely'] = var8;
    var3['getReportNameSafely'] = var7;
    var3['getModeratorReportNameSafely'] = var6;
    var3['getModeratorReportEndpointSafely'] = var5;
    var5 = function trackCloseReportModalAnalytics(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 11;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot6;
            var3 = var2.IAR_MODAL_CLOSE;
            var2 = {};
            var9 = var7.name;
            var2['report_type'] = var9;
            var9 = arg3;
            var2['report_id'] = var9;
            var9 = arg2;
            var2['navigation_history'] = var9;
            var9 = var7.name;
            var11 = _closure1_slot0;
            var10 = 10;
            var8 = var8[var10];
            var8 = var11.bind(var1)(var8);
            var8 = var8.ReportNames;
            var8 = var8.MESSAGE;
            if(!(var9 !== var8)) { _fun0019_ip = 97; continue _fun0019 }
case 98:
            var11 = var7.name;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ReportNames;
            var9 = var8.FIRST_DM;
            var8 = undefined;
            if(!(var11 === var9)) { _fun0019_ip = 99; continue _fun0019 }
case 97:
            var9 = var7.record;
            var8 = var9.id;
case 99:
            var2['message_id'] = var8;
            var11 = var7.name;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ReportNames;
            var9 = var8.STAGE_CHANNEL;
            var8 = undefined;
            if(!(var11 === var9)) { _fun0019_ip = 100; continue _fun0019 }
case 101:
            var9 = var7.record;
            var8 = var9.id;
case 100:
            var2['stage_instance_id'] = var8;
            var11 = var7.name;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ReportNames;
            var9 = var8.GUILD_SCHEDULED_EVENT;
            var8 = undefined;
            if(!(var11 === var9)) { _fun0019_ip = 102; continue _fun0019 }
case 103:
            var9 = var7.record;
            var8 = var9.id;
case 102:
            var2['guild_scheduled_event_id'] = var8;
            var9 = var7.name;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var1)(var8);
            var8 = var8.ReportNames;
            var8 = var8.GUILD;
            if(!(var9 !== var8)) { _fun0019_ip = 104; continue _fun0019 }
case 105:
            var9 = var7.name;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var1)(var8);
            var8 = var8.ReportNames;
            var8 = var8.GUILD_DISCOVERY;
            if(!(var9 !== var8)) { _fun0019_ip = 104; continue _fun0019 }
case 106:
            var9 = var7.name;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var1)(var8);
            var8 = var8.ReportNames;
            var8 = var8.GUILD_DIRECTORY_ENTRY;
            if(!(var9 !== var8)) { _fun0019_ip = 107; continue _fun0019 }
case 108:
            var11 = var7.name;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ReportNames;
            var9 = var8.GUILD_SCHEDULED_EVENT;
            var8 = undefined;
            if(!(var11 === var9)) { _fun0019_ip = 109; continue _fun0019 }
case 110:
            var9 = var7.record;
            var8 = var9.guild_id;
case 109:
            _fun0019_ip = 111; continue _fun0019;
case 107:
            var9 = var7.record;
            var8 = var9.guildId;
case 111:
            _fun0019_ip = 112; continue _fun0019;
case 104:
            var9 = var7.record;
            var8 = var9.id;
case 112:
            var2['guild_id'] = var8;
            var9 = var7.name;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var1)(var8);
            var8 = var8.ReportNames;
            var8 = var8.GUILD_SCHEDULED_EVENT;
            if(!(var9 !== var8)) { _fun0019_ip = 113; continue _fun0019 }
case 114:
            var11 = var7.name;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.ReportNames;
            var9 = var8.GUILD_DIRECTORY_ENTRY;
            var8 = undefined;
            if(!(var11 === var9)) { _fun0019_ip = 115; continue _fun0019 }
case 116:
            var9 = var7.record;
            var8 = var9.channelId;
case 115:
            _fun0019_ip = 117; continue _fun0019;
case 113:
            var9 = var7.record;
            var8 = var9.channel_id;
case 117:
            var2['channel_id'] = var8;
            var9 = var7.name;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var8.bind(var1)(var6);
            var6 = var6.ReportNames;
            var8 = var6.APPLICATION;
            var6 = undefined;
            if(!(var9 === var8)) { _fun0019_ip = 118; continue _fun0019 }
case 119:
            var7 = var7.record;
            var6 = var7.id;
case 118:
            var2['application_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackCloseReportModalAnalytics'] = var5;
    var5 = function showInAppReportsFeedbackModal(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'IN_APP_REPORTS_SHOW_FEEDBACK';
        var2['type'] = var5;
        var5 = arg2;
        var2['reportId'] = var5;
        var5 = arg1;
        var5 = var5.name;
        var2['reportType'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showInAppReportsFeedbackModal'] = var5;
    var5 = function areRequiredElementsUnfilled(arg1, arg2, arg3, arg4, arg5) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var2 = arg3;
            var6 = arg5;
            var1 = arg4;
            var _closure2_slot0 = var1;
            var4 = var7.some;
            var1 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5.should_submit_data;
                    var1 = true;
                    var1 = var1 === var2;
                    if(!var1) { _fun0021_ip = 120; continue _fun0021 }
case 121:
                    var2 = _closure2_slot0;
                    var6 = null;
                    var3 = var6 == var2;
                    var2 = undefined;
                    if(var3) { _fun0021_ip = 122; continue _fun0021 }
case 123:
                    var8 = _closure2_slot0;
                    var3 = var5.name;
                    var2 = var8[var3];
case 122:
                    var2 = var6 == var2;
                    if(var2) { _fun0021_ip = 54; continue _fun0021 }
case 124:
                    var3 = _closure2_slot0;
                    var3 = var6 == var3;
                    var8 = undefined;
                    if(var3) { _fun0021_ip = 90; continue _fun0021 }
case 40:
                    var9 = _closure2_slot0;
                    var3 = var5.name;
                    var3 = var9[var3];
                    var8 = var3.value;
case 90:
                    var3 = '';
                    var2 = var3 === var8;
case 54:
                    if(var2) { _fun0021_ip = 11; continue _fun0021 }
case 125:
                    var3 = _closure2_slot0;
                    var3 = var6 != var3;
                    var4 = undefined;
                    if(!var3) { _fun0021_ip = 126; continue _fun0021 }
case 45:
                    var7 = _closure2_slot0;
                    var5 = var5.name;
                    var5 = var7[var5];
                    var3 = var6 != var5;
                    var4 = var5;
case 126:
                    if(!var3) { _fun0021_ip = 127; continue _fun0021 }
case 128:
                    var3 = var4.isValid;
case 127:
                    var2 = !var3;
case 11:
                    var1 = var2;
case 120:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1);
            if(var1) { _fun0020_ip = 129; continue _fun0020 }
case 130:
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.should_submit_data;
                    var1 = true;
                    var1 = var1 === var2;
                    if(!var1) { _fun0022_ip = 54; continue _fun0022 }
case 131:
                    var2 = _closure2_slot0;
                    var7 = null;
                    var6 = var7 == var2;
                    var2 = undefined;
                    if(var6) { _fun0022_ip = 132; continue _fun0022 }
case 43:
                    var8 = _closure2_slot0;
                    var6 = var3.name;
                    var2 = var8[var6];
case 132:
                    var2 = var7 == var2;
                    if(var2) { _fun0022_ip = 133; continue _fun0022 }
case 129:
                    var6 = _closure2_slot0;
                    var6 = var7 == var6;
                    var4 = undefined;
                    if(var6) { _fun0022_ip = 134; continue _fun0022 }
case 41:
                    var5 = _closure2_slot0;
                    var3 = var3.name;
                    var3 = var5[var3];
                    var4 = var3.value;
case 134:
                    var3 = '';
                    var2 = var3 === var4;
case 133:
                    var1 = var2;
case 54:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
case 129:
            if(var1) { _fun0020_ip = 135; continue _fun0020 }
case 124:
            var3 = null;
            var5 = var3 == var2;
            var4 = undefined;
            if(var5) { _fun0020_ip = 136; continue _fun0020 }
case 137:
            var4 = var2.should_submit_data;
case 136:
            var2 = true;
            var2 = var2 === var4;
            if(!var2) { _fun0020_ip = 22; continue _fun0020 }
case 28:
            var3 = var3 == var6;
            if(var3) { _fun0020_ip = 26; continue _fun0020 }
case 5:
            var4 = global;
            var5 = var4.Object;
            var4 = var5.keys;
            var4 = var4.bind(var5)(var6);
            var5 = var4.length;
            var4 = 0;
            var3 = var4 === var5;
case 26:
            var2 = var3;
case 22:
            var1 = var2;
case 135:
            return var1;
        }
    };
    var3['areRequiredElementsUnfilled'] = var5;
    var3['TrackIarSettingsUpsellsActionType'] = var4;
    var2 = function useTrackSettingsUpsellsAction(arg1, arg2, arg3) {
        var6 = arg1;
        var5 = arg2;
        var7 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var1 = function(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot6;
                var3 = var2.IAR_SETTINGS_UPSELLS_ACTION;
                var2 = {};
                var7 = _closure2_slot2;
                var2['report_id'] = var7;
                var7 = _closure2_slot0;
                var7 = var7.name;
                var2['report_type'] = var7;
                var6 = _closure2_slot1;
                var2['report_subtype'] = var6;
                var6 = _closure3_slot0;
                var2['settings_upsells_type'] = var6;
                var6 = arg1;
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useTrackSettingsUpsellsAction'] = var2;
    return var1;
})();