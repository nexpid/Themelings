// app/modules/bug_reporter/BugReportUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchBugReportConfig() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 90; continue _fun0001 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.BUG_REPORTS;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=73);
 71:
                    return var2;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 87; continue _fun0001 }
 79:
                    var3 = var2.body;
                    return var3;
 87:
                    return var2;
 90:
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
    var1 = function _submitReport() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 941; continue _fun0002 }
 16:
                    var8 = var2;
                    var9 = arg3;
                    var10 = undefined;
                    var5 = undefined;
                    var7 = undefined;
                    var3 = {};
                    var4 = 'name';
                    var3['name'] = var4;
                    var4 = var2.name;
                    var3['value'] = var4;
                    var4 = new Array(4);
                    var4[0] = var3;
                    var6 = {};
                    var3 = 'priority';
                    var6['name'] = var3;
                    var14 = var2.priority;
                    var12 = global;
                    var3 = var12.HermesInternal;
                    var13 = var3.concat;
                    var3 = '';
                    var13 = var13.bind(var3)(var14);
                    var6['value'] = var13;
                    var4[1] = var6;
                    var6 = {};
                    var13 = 'override_platform_information';
                    var6['name'] = var13;
                    var14 = var11.overridePlatformInformation;
                    var13 = var12.HermesInternal;
                    var13 = var13.concat;
                    var13 = var13.bind(var3)(var14);
                    var6['value'] = var13;
                    var4[2] = var6;
                    var13 = {};
                    var6 = 'theme';
                    var13['name'] = var6;
                    var14 = _closure1_slot4;
                    var14 = var14.theme;
                    var13['value'] = var14;
                    var4[3] = var13;
                    var5 = var4;
                    var2 = var2.description;
                    if(!(var3 !== var2)) { _fun0002_ip = 221; continue _fun0002 }
 186:
                    var13 = var5;
                    var4 = var13.push;
                    var2 = {};
                    var14 = 'description';
                    var2['name'] = var14;
                    var14 = var8;
                    var14 = var14.description;
                    var2['value'] = var14;
                    var2 = var4.bind(var13)(var2);
 221:
                    var2 = var8;
                    var2 = var2.url;
                    if(!(var3 !== var2)) { _fun0002_ip = 270; continue _fun0002 }
 233:
                    var13 = var5;
                    var4 = var13.push;
                    var2 = {};
                    var14 = 'external_url';
                    var2['name'] = var14;
                    var14 = var8;
                    var14 = var14.url;
                    var2['value'] = var14;
                    var2 = var4.bind(var13)(var2);
 270:
                    var2 = var8;
                    var4 = var2.buildOverride;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0002_ip = 323; continue _fun0002 }
 285:
                    var14 = var5;
                    var13 = var14.push;
                    var4 = {};
                    var15 = 'build_override';
                    var4['name'] = var15;
                    var15 = var8;
                    var15 = var15.buildOverride;
                    var4['value'] = var15;
                    var4 = var13.bind(var14)(var4);
 323:
                    var4 = var8;
                    var13 = var4.feature;
                    var14 = var2 == var13;
                    var4 = undefined;
                    if(var14) { _fun0002_ip = 347; continue _fun0002 }
 341:
                    var4 = var13.asana_inbox_id;
 347:
                    var7 = var4;
                    var4 = var2 != var4;
                    if(!var4) { _fun0002_ip = 364; continue _fun0002 }
 357:
                    var13 = var7;
                    var4 = var3 !== var13;
 364:
                    if(!var4) { _fun0002_ip = 413; continue _fun0002 }
 367:
                    var14 = var5;
                    var13 = var14.push;
                    var4 = {};
                    var15 = 'asana_inbox_id';
                    var4['name'] = var15;
                    var16 = var7;
                    var15 = var12.HermesInternal;
                    var15 = var15.concat;
                    var15 = var15.bind(var3)(var16);
                    var4['value'] = var15;
                    var4 = var13.bind(var14)(var4);
 413:
                    var4 = var8;
                    var4 = var4.feature;
                    var14 = var2 == var4;
                    var13 = undefined;
                    if(var14) { _fun0002_ip = 436; continue _fun0002 }
 431:
                    var13 = var4.name;
 436:
                    var2 = var2 != var13;
                    if(!var2) { _fun0002_ip = 447; continue _fun0002 }
 443:
                    var2 = var3 !== var13;
 447:
                    if(!var2) { _fun0002_ip = 477; continue _fun0002 }
 450:
                    var4 = var5;
                    var3 = var4.push;
                    var2 = {};
                    var14 = 'feature_name';
                    var2['name'] = var14;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
 477:
                    var2 = var11.overridePlatformInformation;
                    if(!var2) { _fun0002_ip = 720; continue _fun0002 }
 489:
                    var4 = var5;
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'device';
                    var2['name'] = var13;
                    var13 = var11.device;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'os';
                    var2['name'] = var13;
                    var13 = var11.operatingSystem;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'os_version';
                    var2['name'] = var13;
                    var13 = var11.operatingSystemVersion;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'client_version';
                    var2['name'] = var13;
                    var13 = var11.clientVersion;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'client_build_number';
                    var2['name'] = var13;
                    var13 = var11.clientBuildNumber;
                    var2['value'] = var13;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var13 = 'release_channel';
                    var2['name'] = var13;
                    var12 = var12.window;
                    var12 = var12.GLOBAL_ENV;
                    var12 = var12.RELEASE_CHANNEL;
                    var2['value'] = var12;
                    var2 = var3.bind(var4)(var2);
                    var3 = var4.push;
                    var2 = {};
                    var12 = 'locale';
                    var2['name'] = var12;
                    var11 = var11.locale;
                    var2['value'] = var11;
                    var2 = var3.bind(var4)(var2);
 720:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 5;
                    var2 = var12[var2];
                    var4 = var11.bind(var10)(var2);
                    var3 = var4.uploadDebugLogFiles;
                    var2 = 6;
                    var2 = var12[var2];
                    var11 = var11.bind(var10)(var2);
                    var2 = var11.isIOS;
                    var2 = var2.bind(var11)();
                    var11 = _closure1_slot5;
                    if(var2) { _fun0002_ip = 783; continue _fun0002 }
 775:
                    var2 = var11.ANDROID_APP;
                    _fun0002_ip = 789; continue _fun0002;
 783:
                    var2 = var11.IOS_APP;
 789:
                    var2 = var3.bind(var4)(var2);
 794: // try_start_0
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 7;
                    var2 = var11[var2];
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var12 = _closure1_slot6;
                    var12 = var12.BUG_REPORTS;
                    var2['url'] = var12;
                    var2['attachments'] = var9;
                    var2['fields'] = var5;
                    var5 = {};
                    var9 = _closure1_slot0;
                    var6 = 8;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.BUG_REPORT_SUBMIT;
                    var5['event'] = var6;
                    var6 = {};
                    var8 = var8.priority;
                    var6['priority'] = var8;
                    var6['asana_inbox_id'] = var7;
                    var5['properties'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=924);
 922:
                    return var2;
 924:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 933; continue _fun0002 }
 930: // try_end0
                    return var2;
 933:
                    return var2;
 936: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var2;
 941:
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.DebugLogCategory;
    var _closure1_slot5 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/bug_reporter/BugReportUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchBugReportConfig() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchBugReportConfig'] = var4;
    var4 = function getFeatureId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            if(var5) { _fun0003_ip = 19; continue _fun0003 }
 14:
            var1 = var3.name;
 19:
            if(!(var4 == var1)) { _fun0003_ip = 41; continue _fun0003 }
 23:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 38; continue _fun0003 }
 32:
            var2 = var3.squad;
 38:
            var1 = '' + var2;
 41:
            return var1;
        }
    };
    var3['getFeatureId'] = var4;
    var4 = function getPriorities() {
        var2 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 4;
        var1 = var8[var3];
        var4 = undefined;
        var1 = var7.bind(var4)(var1);
        var6 = var1.intl;
        var5 = var6.string;
        var1 = var8[var3];
        var1 = var7.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.VwIij4;
        var1 = var5.bind(var6)(var1);
        var2['title'] = var1;
        var1 = var8[var3];
        var1 = var7.bind(var4)(var1);
        var9 = var1.intl;
        var6 = var9.format;
        var1 = var8[var3];
        var1 = var7.bind(var4)(var1);
        var1 = var1.t;
        var5 = var1.DOP8yc;
        var1 = {};
        var1 = var6.bind(var9)(var5, var1);
        var2['description'] = var1;
        var1 = '801497159479722084';
        var2['emoji'] = var1;
        var1 = 0;
        var2['value'] = var1;
        var1 = new Array(4);
        var1[0] = var2;
        var2 = {};
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.rYfJoq;
        var5 = var6.bind(var9)(var5);
        var2['title'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var10 = var5.intl;
        var9 = var10.format;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.+LEfDA;
        var5 = {};
        var5 = var9.bind(var10)(var6, var5);
        var2['description'] = var5;
        var5 = '410336837563973632';
        var2['emoji'] = var5;
        var5 = 1;
        var2['value'] = var5;
        var1[1] = var2;
        var2 = {};
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.Ia0skZ;
        var5 = var6.bind(var9)(var5);
        var2['title'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var10 = var5.intl;
        var9 = var10.format;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.D4rbgY;
        var5 = {};
        var5 = var9.bind(var10)(var6, var5);
        var2['description'] = var5;
        var5 = '841420679643529296';
        var2['emoji'] = var5;
        var5 = 2;
        var2['value'] = var5;
        var1[2] = var2;
        var2 = {};
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.KGsyFx;
        var5 = var6.bind(var9)(var5);
        var2['title'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var4)(var5);
        var6 = var5.intl;
        var5 = var6.format;
        var3 = var8[var3];
        var3 = var7.bind(var4)(var3);
        var3 = var3.t;
        var4 = var3.Kmg64O;
        var3 = {};
        var3 = var5.bind(var6)(var4, var3);
        var2['description'] = var3;
        var3 = '827645852352512021';
        var2['emoji'] = var3;
        var3 = 3;
        var2['value'] = var3;
        var1[3] = var2;
        return var1;
    };
    var3['getPriorities'] = var4;
    var2 = function submitReport() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['submitReport'] = var2;
    return var1;
})();