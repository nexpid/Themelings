// app/modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function _getEmbedApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 486; continue _fun0001 }
 15:
                    var6 = var11;
                    var2 = undefined;
                    var4 = undefined;
                    var10 = undefined;
                    var _closure4_slot0 = var2;
                    var9 = undefined;
                    var _closure4_slot1 = var2;
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var4 = var3.bind(var5)();
                    var8 = _closure1_slot19;
                    var5 = var8.get;
                    var5 = var5.bind(var8)(var11);
                    var8 = null;
                    var8 = var8 != var5;
                    var11 = 0;
                    if(!var8) { _fun0001_ip = 82; continue _fun0001 }
 79:
                    var11 = var5;
 82:
                    var12 = _closure1_slot6;
                    var8 = var12.getApplicationFetchState;
                    var5 = var6;
                    var8 = var8.bind(var12)(var5);
                    var5 = _closure1_slot7;
                    var5 = var5.FETCHING;
                    if(!(var8 !== var5)) { _fun0001_ip = 483; continue _fun0001 }
 117:
                    var12 = _closure1_slot6;
                    var8 = var12.isInvalidApplication;
                    var5 = var6;
                    var5 = var8.bind(var12)(var5);
                    if(var5) { _fun0001_ip = 483; continue _fun0001 }
 141:
                    var8 = var4;
                    var5 = _closure1_slot18;
                    var5 = var11 + var5;
                    if(!(!(var8 < var5))) { _fun0001_ip = 483; continue _fun0001 }
 159:
                    var8 = _closure1_slot19;
                    var5 = var8.set;
                    var14 = var6;
                    var4 = var5.bind(var8)(var14, var4);
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 11;
                    var4 = var11[var5];
                    var13 = var8.bind(var2)(var4);
                    var12 = var13.dispatch;
                    var4 = {};
                    var15 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    var4['type'] = var15;
                    var4['applicationId'] = var14;
                    var4 = var12.bind(var13)(var4);
                    var4 = 12;
                    var4 = var11[var4];
                    var12 = var8.bind(var2)(var4);
                    var4 = var12.prototype;
                    var8 = Object.create(var4, {constructor: {value: var12}});
                    var17 = 1000;
                    var16 = 5000;
                    var18 = var8;
                    var4 = new var18[var12](var17, var16, var15);
                    var4 = var4 instanceof Object ? var4 : var8;
                    var10 = var4;
                    _closure4_slot0 = var4;
                    var4 = function interceptResponse(arg1, arg2) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = arg2;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var3 = var1.status;
                            var1 = 429;
                            var1 = var1 === var3;
                            if(!var1) { _fun0002_ip = 50; continue _fun0002 }
 30:
                            var3 = _closure4_slot0;
                            var4 = var3.fails;
                            var3 = 10;
                            var1 = var4 < var3;
 50:
                            if(!var1) { _fun0002_ip = 80; continue _fun0002 }
 53:
                            var4 = _closure4_slot0;
                            var3 = var4.fail;
                            var2 = function() {
                                var3 = _closure5_slot0;
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var1, var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var1 = true;
 80:
                            return var1;
                        }
                    };
                    var9 = var4;
                    _closure4_slot1 = var4;
 288: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var13 = _closure1_slot17;
                    var12 = var13.APPLICATION_DIRECTORY_EMBED_APPLICATION;
                    var11 = var6;
                    var11 = var12.bind(var13)(var11);
                    var4['url'] = var11;
                    var4['backoff'] = var10;
                    var10 = 10;
                    var4['retries'] = var10;
                    var4['interceptResponse'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=375);
 373:
                    return var4;
 375:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 431; continue _fun0001 }
 381:
                    var10 = var4.body;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    var7['type'] = var11;
                    var7['application'] = var10;
                    var7 = var8.bind(var9)(var7);
 429: // try_end0
                    _fun0001_ip = 483; continue _fun0001;
 431:
                    return var4;
 434: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    var3['applicationId'] = var6;
                    var3 = var4.bind(var5)(var3);
 483:
                    return var2;
 486:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _getApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var5 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 415; continue _fun0003 }
 13:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var5 === var3)) { _fun0003_ip = 24; continue _fun0003 }
 22:
                    var5 = {};
 24:
                    var11 = undefined;
                    SaveGenerator(address=30);
 28:
                    return var3;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 412; continue _fun0003 }
 39:
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var9 = var4.bind(var6)();
                    var8 = _closure1_slot6;
                    var6 = var8.getApplicationFetchState;
                    var12 = var7;
                    var8 = var6.bind(var8)(var12);
                    var10 = _closure1_slot6;
                    var6 = var10.getApplicationLastFetchTime;
                    var10 = var6.bind(var10)(var12);
                    var6 = var5.dontRefetchMs;
                    var11 = var5.noCache;
                    var12 = null;
                    var5 = var12 != var10;
                    if(!var5) { _fun0003_ip = 131; continue _fun0003 }
 115:
                    if(!(var12 == var6)) { _fun0003_ip = 123; continue _fun0003 }
 119:
                    var6 = _closure1_slot18;
 123:
                    var6 = var10 + var6;
                    var5 = var6 > var9;
 131:
                    var6 = _closure1_slot7;
                    var6 = var6.FETCHING;
                    if(!(var8 !== var6)) { _fun0003_ip = 409; continue _fun0003 }
 148:
                    if(var5) { _fun0003_ip = 409; continue _fun0003 }
 154:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 11;
                    var5 = var5[var6];
                    var9 = var8.bind(var3)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    var5['type'] = var10;
                    var10 = var7;
                    var5['applicationId'] = var10;
                    var5 = var8.bind(var9)(var5);
 203: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 13;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var9 = var5.HTTP;
                    var8 = var9.get;
                    var5 = {};
                    var13 = _closure1_slot17;
                    var12 = var13.APPLICATION_DIRECTORY_APPLICATION;
                    var10 = var7;
                    var10 = var12.bind(var13)(var10);
                    var5['url'] = var10;
                    var10 = {};
                    var12 = _closure1_slot5;
                    var12 = var12.locale;
                    var10['locale'] = var12;
                    var10['nocache'] = var11;
                    var5['query'] = var10;
                    var10 = true;
                    var5['rejectWithError'] = var10;
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=301);
 299:
                    return var5;
 301:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 357; continue _fun0003 }
 307:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    var8['type'] = var11;
                    var11 = var5.body;
                    var8['application'] = var11;
                    var8 = var9.bind(var10)(var8);
 355: // try_end0
                    _fun0003_ip = 409; continue _fun0003;
 357:
                    return var5;
 360: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    var4['applicationId'] = var7;
                    var4 = var5.bind(var6)(var4);
 409:
                    return var3;
 412:
                    return var2;
 415:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _getCategories() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 218; continue _fun0004 }
 10:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var4 = var2.bind(var3)();
                    var5 = _closure1_slot8;
                    var2 = var5.getLastFetchTimeMs;
                    var5 = var2.bind(var5)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 65; continue _fun0004 }
 50:
                    var2 = _closure1_slot18;
                    var2 = var5 + var2;
                    if(!(!(var2 > var4))) { _fun0004_ip = 213; continue _fun0004 }
 65:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot17;
                    var7 = var7.APPLICATION_DIRECTORY_CATEGORIES;
                    var2['url'] = var7;
                    var7 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.locale;
                    var7['locale'] = var8;
                    var2['query'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=150);
 148:
                    return var2;
 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 210; continue _fun0004 }
 156:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['categories'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 213; continue _fun0004;
 210:
                    return var2;
 213:
                    var2 = undefined;
                    return var2;
 218:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _getSimilarApplications() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 533; continue _fun0005 }
 13:
                    var9 = var2.applicationId;
                    var8 = var2.guildId;
                    var4 = var2.options;
                    var3 = undefined;
                    var7 = undefined;
                    SaveGenerator(address=36);
 34:
                    return var3;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 530; continue _fun0005 }
 45:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0005_ip = 53; continue _fun0005 }
 51:
                    var4 = {};
 53:
                    var7 = var4.page;
                    var4 = global;
                    var6 = var4.Date;
                    var4 = var6.now;
                    var6 = var4.bind(var6)();
                    var12 = _closure1_slot13;
                    var11 = var12.getFetchState;
                    var10 = {};
                    var15 = var9;
                    var10['applicationId'] = var15;
                    var14 = var8;
                    var10['guildId'] = var14;
                    var12 = var11.bind(var12)(var10);
                    var13 = _closure1_slot13;
                    var11 = var13.getSimilarApplications;
                    var10 = {};
                    var10['applicationId'] = var15;
                    var10['guildId'] = var14;
                    var10 = var11.bind(var13)(var10);
                    if(!(var5 == var10)) { _fun0005_ip = 141; continue _fun0005 }
 139:
                    var10 = {};
 141:
                    var10 = var10.lastFetchTimeMs;
                    var11 = _closure1_slot14;
                    var11 = var11.FETCHING;
                    if(!(var12 !== var11)) { _fun0005_ip = 527; continue _fun0005 }
 164:
                    if(!(var5 != var10)) { _fun0005_ip = 183; continue _fun0005 }
 168:
                    var5 = _closure1_slot18;
                    var5 = var10 + var5;
                    if(!(!(var5 > var6))) { _fun0005_ip = 527; continue _fun0005 }
 183:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 11;
                    var5 = var5[var6];
                    var11 = var10.bind(var3)(var5);
                    var10 = var11.dispatch;
                    var5 = {};
                    var12 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS';
                    var5['type'] = var12;
                    var12 = var9;
                    var5['applicationId'] = var12;
                    var12 = var8;
                    var5['guildId'] = var12;
                    var12 = var7;
                    var5['page'] = var12;
                    var5 = var10.bind(var11)(var5);
 247: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 13;
                    var5 = var11[var5];
                    var5 = var10.bind(var3)(var5);
                    var11 = var5.HTTP;
                    var10 = var11.get;
                    var5 = {};
                    var14 = _closure1_slot17;
                    var13 = var14.APPLICATION_DIRECTORY_SIMILAR;
                    var12 = var9;
                    var12 = var13.bind(var14)(var12);
                    var5['url'] = var12;
                    var12 = {};
                    var13 = var8;
                    var12['guild_id'] = var13;
                    var13 = var7;
                    var12['page'] = var13;
                    var13 = _closure1_slot5;
                    var13 = var13.locale;
                    var12['locale'] = var13;
                    var5['query'] = var12;
                    var12 = true;
                    var5['rejectWithError'] = var12;
                    var5 = var10.bind(var11)(var5);
                    SaveGenerator(address=353);
 351:
                    return var5;
 353:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0005_ip = 470; continue _fun0005 }
 359:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var6];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var13 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS';
                    var10['type'] = var13;
                    var13 = var9;
                    var10['applicationId'] = var13;
                    var13 = var8;
                    var10['guildId'] = var13;
                    var13 = var5.body;
                    var13 = var13.applications;
                    var10['similarApplications'] = var13;
                    var13 = var5.body;
                    var13 = var13.load_id;
                    var10['loadId'] = var13;
                    var13 = var7;
                    var10['page'] = var13;
                    var13 = var5.body;
                    var13 = var13.num_pages;
                    var10['totalPages'] = var13;
                    var10 = var11.bind(var12)(var10);
 468: // try_end0
                    _fun0005_ip = 527; continue _fun0005;
 470:
                    return var5;
 473: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE';
                    var4['type'] = var10;
                    var4['applicationId'] = var9;
                    var4['guildId'] = var8;
                    var4['page'] = var7;
                    var4 = var5.bind(var6)(var4);
 527:
                    return var3;
 530:
                    return var2;
 533:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function _search() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 1028; continue _fun0006 }
 13:
                    var17 = var2.query;
                    var16 = var2.guildId;
                    var4 = var2.options;
                    var19 = var2.onSuccessCallback;
                    var3 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var18 = undefined;
                    SaveGenerator(address=61);
 59:
                    return var3;
 61:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 1025; continue _fun0006 }
 70:
                    var21 = null;
                    if(!(var21 == var4)) { _fun0006_ip = 78; continue _fun0006 }
 76:
                    var4 = {};
 78:
                    var15 = var4.page;
                    var14 = var4.pageSize;
                    var13 = var4.categoryId;
                    var12 = var4.integrationType;
                    var11 = var4.minUserInstallCommandCount;
                    var10 = var4.excludeAppsWithCustomInstallUrl;
                    var9 = var4.excludeNonEmbeddedApps;
                    var8 = var4.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                    var4 = var4.source;
                    if(!(var3 === var4)) { _fun0006_ip = 170; continue _fun0006 }
 135:
                    var6 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var5 = 14;
                    var5 = var20[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.SearchAppsRequestSource;
                    var4 = var5.APP_DIRECTORY;
 170:
                    var7 = var4;
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var6 = var4.bind(var5)();
                    var22 = _closure1_slot11;
                    var20 = var22.getFetchState;
                    var5 = {};
                    var29 = var17;
                    var5['query'] = var29;
                    var28 = var16;
                    var5['guildId'] = var28;
                    var27 = var15;
                    var5['page'] = var27;
                    var26 = var14;
                    var5['pageSize'] = var26;
                    var25 = var13;
                    var5['categoryId'] = var25;
                    var24 = var12;
                    var5['integrationType'] = var24;
                    var22 = var20.bind(var22)(var5);
                    var23 = _closure1_slot11;
                    var20 = var23.getSearchResults;
                    var5 = {};
                    var5['query'] = var29;
                    var5['guildId'] = var28;
                    var5['page'] = var27;
                    var5['pageSize'] = var26;
                    var5['categoryId'] = var25;
                    var5['integrationType'] = var24;
                    var5 = var20.bind(var23)(var5);
                    if(!(var21 == var5)) { _fun0006_ip = 309; continue _fun0006 }
 307:
                    var5 = {};
 309:
                    var20 = var5.lastFetchTimeMs;
                    var5 = _closure1_slot12;
                    var5 = var5.FETCHING;
                    if(!(var22 !== var5)) { _fun0006_ip = 1022; continue _fun0006 }
 332:
                    if(!(var21 != var20)) { _fun0006_ip = 351; continue _fun0006 }
 336:
                    var5 = _closure1_slot18;
                    var5 = var20 + var5;
                    if(!(!(var5 > var6))) { _fun0006_ip = 1022; continue _fun0006 }
 351:
                    var20 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 11;
                    var5 = var5[var6];
                    var22 = var20.bind(var3)(var5);
                    var20 = var22.dispatch;
                    var5 = {};
                    var23 = 'APPLICATION_DIRECTORY_FETCH_SEARCH';
                    var5['type'] = var23;
                    var23 = var17;
                    var5['query'] = var23;
                    var23 = var16;
                    var5['guildId'] = var23;
                    var23 = var15;
                    var5['page'] = var23;
                    var23 = var14;
                    var5['pageSize'] = var23;
                    var23 = var13;
                    var5['categoryId'] = var23;
                    var23 = var12;
                    var5['integrationType'] = var23;
                    var23 = var11;
                    var5['minUserInstallCommandCount'] = var23;
                    var23 = var10;
                    var5['excludeAppsWithCustomInstallUrl'] = var23;
                    var23 = var9;
                    var5['excludeNonEmbeddedApps'] = var23;
                    var23 = var8;
                    var5['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var23;
                    var23 = var7;
                    var5['source'] = var23;
                    var5 = var20.bind(var22)(var5);
 479: // try_start_0
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var5 = 13;
                    var5 = var22[var5];
                    var5 = var20.bind(var3)(var5);
                    var22 = var5.HTTP;
                    var20 = var22.get;
                    var5 = {};
                    var23 = _closure1_slot17;
                    var23 = var23.APPLICATION_DIRECTORY_SEARCH;
                    var5['url'] = var23;
                    var23 = {};
                    var24 = var17;
                    var23['query'] = var24;
                    var24 = var16;
                    var23['guild_id'] = var24;
                    var24 = var15;
                    var23['page'] = var24;
                    var24 = var14;
                    var23['page_size'] = var24;
                    var24 = var13;
                    var23['category_id'] = var24;
                    var24 = _closure1_slot5;
                    var24 = var24.locale;
                    var23['locale'] = var24;
                    var24 = var12;
                    var23['integration_type'] = var24;
                    var24 = var11;
                    var23['min_user_install_command_count'] = var24;
                    var24 = var10;
                    var23['exclude_apps_with_custom_install_url'] = var24;
                    var24 = var9;
                    var23['exclude_non_embedded_apps'] = var24;
                    var24 = var8;
                    var23['exclude_embedded_apps_without_primary_entry_point_app_command'] = var24;
                    var24 = var7;
                    var23['source'] = var24;
                    var5['query'] = var23;
                    var23 = true;
                    var5['rejectWithError'] = var23;
                    var5 = var20.bind(var22)(var5);
                    SaveGenerator(address=658);
 656:
                    return var5;
 658:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=19);
                    if(var20) { _fun0006_ip = 925; continue _fun0006 }
 667:
                    var18 = var5;
                    var22 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var20 = var20[var6];
                    var23 = var22.bind(var3)(var20);
                    var22 = var23.dispatch;
                    var20 = {};
                    var24 = 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS';
                    var20['type'] = var24;
                    var24 = var17;
                    var20['query'] = var24;
                    var24 = var16;
                    var20['guildId'] = var24;
                    var24 = var15;
                    var20['page'] = var24;
                    var24 = var14;
                    var20['pageSize'] = var24;
                    var24 = var13;
                    var20['categoryId'] = var24;
                    var24 = var12;
                    var20['integrationType'] = var24;
                    var24 = {};
                    var25 = var5.body;
                    var25 = var25.results;
                    var24['results'] = var25;
                    var25 = var5.body;
                    var25 = var25.counts_by_category;
                    var24['countsByCategory'] = var25;
                    var25 = var5.body;
                    var25 = var25.result_count;
                    var24['totalCount'] = var25;
                    var25 = var5.body;
                    var25 = var25.num_pages;
                    var24['totalPages'] = var25;
                    var25 = var5.body;
                    var25 = var25.type;
                    var24['type'] = var25;
                    var25 = var5.body;
                    var25 = var25.load_id;
                    var24['loadId'] = var25;
                    var20['result'] = var24;
                    var24 = var11;
                    var20['minUserInstallCommandCount'] = var24;
                    var24 = var10;
                    var20['excludeAppsWithCustomInstallUrl'] = var24;
                    var24 = var9;
                    var20['excludeNonEmbeddedApps'] = var24;
                    var24 = var8;
                    var20['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var24;
                    var24 = var7;
                    var20['source'] = var24;
                    var20 = var22.bind(var23)(var20);
                    var20 = var19;
                    if(!(var21 != var20)) { _fun0006_ip = 923; continue _fun0006 }
 907:
                    var18 = var18.body;
                    var18 = var18.result_count;
                    var18 = var19.bind(var3)(var18);
 923: // try_end0
                    _fun0006_ip = 1022; continue _fun0006;
 925:
                    return var5;
 928: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var18 = 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE';
                    var4['type'] = var18;
                    var4['query'] = var17;
                    var4['guildId'] = var16;
                    var4['page'] = var15;
                    var4['pageSize'] = var14;
                    var4['categoryId'] = var13;
                    var4['integrationType'] = var12;
                    var4['minUserInstallCommandCount'] = var11;
                    var4['excludeAppsWithCustomInstallUrl'] = var10;
                    var4['excludeNonEmbeddedApps'] = var9;
                    var4['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = var8;
                    var4['source'] = var7;
                    var4 = var5.bind(var6)(var4);
 1022:
                    return var3;
 1025:
                    return var2;
 1028:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _fetchCollections() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 743; continue _fun0007 }
 13:
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0007_ip = 21; continue _fun0007 }
 19:
                    var2 = {};
 21:
                    var5 = var2.surface;
                    if(!(var5 === var3)) { _fun0007_ip = 66; continue _fun0007 }
 31:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 17;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.ApplicationCollectionSurface;
                    var5 = var6.APPLICATION_DIRECTORY;
 66:
                    var8 = var5;
                    var2 = var2.activeState;
                    if(!(var2 === var3)) { _fun0007_ip = 114; continue _fun0007 }
 79:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 18;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.ApplicationCollectionActiveState;
                    var2 = var5.ACTIVE;
 114:
                    var7 = var2;
                    var12 = undefined;
                    SaveGenerator(address=123);
 121:
                    return var3;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 740; continue _fun0007 }
 132:
                    var9 = _closure1_slot4;
                    var6 = var9.get;
                    var5 = 'disable_app_collections_cache';
                    var5 = var6.bind(var9)(var5);
                    var6 = global;
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var11 = _closure1_slot9;
                    var10 = var11.getFetchState;
                    var9 = {};
                    var15 = var8;
                    var9['surface'] = var15;
                    var14 = var7;
                    var9['activeState'] = var14;
                    var11 = var10.bind(var11)(var9);
                    var13 = _closure1_slot9;
                    var10 = var13.getLastFetchTimeMs;
                    var9 = {};
                    var9['surface'] = var15;
                    var9['activeState'] = var14;
                    var9 = var10.bind(var13)(var9);
                    var10 = _closure1_slot10;
                    var10 = var10.FETCHING;
                    if(!(var11 !== var10)) { _fun0007_ip = 737; continue _fun0007 }
 249:
                    var5 = !var5;
                    if(!var5) { _fun0007_ip = 294; continue _fun0007 }
 255:
                    var11 = var7;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 18;
                    var10 = var14[var10];
                    var10 = var13.bind(var3)(var10);
                    var10 = var10.ApplicationCollectionActiveState;
                    var10 = var10.ACTIVE;
                    var5 = var11 === var10;
 294:
                    var12 = var5;
                    if(!var5) { _fun0007_ip = 321; continue _fun0007 }
 300:
                    var5 = null;
                    if(!(var5 != var9)) { _fun0007_ip = 321; continue _fun0007 }
 306:
                    var5 = _closure1_slot18;
                    var5 = var9 + var5;
                    if(!(!(var5 > var6))) { _fun0007_ip = 737; continue _fun0007 }
 321:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 11;
                    var5 = var5[var6];
                    var10 = var9.bind(var3)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var11 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS';
                    var5['type'] = var11;
                    var11 = var8;
                    var5['surface'] = var11;
                    var11 = var7;
                    var5['activeState'] = var11;
                    var5 = var9.bind(var10)(var5);
 379: // try_start_0
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 13;
                    var5 = var14[var5];
                    var5 = var15.bind(var3)(var5);
                    var10 = var5.HTTP;
                    var9 = var10.get;
                    var5 = {};
                    var11 = _closure1_slot17;
                    var11 = var11.APPLICATION_DIRECTORY_COLLECTIONS;
                    var5['url'] = var11;
                    var11 = {};
                    var13 = var8;
                    var11['surface'] = var13;
                    var13 = var7;
                    var11['active_state'] = var13;
                    var13 = 15;
                    var14 = var14[var13];
                    var15 = var15.bind(var3)(var14);
                    var14 = var15.isAndroid;
                    var14 = var14.bind(var15)();
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    if(var14) { _fun0007_ip = 541; continue _fun0007 }
 477:
                    var13 = var16[var13];
                    var14 = var15.bind(var3)(var13);
                    var13 = var14.isIOS;
                    var13 = var13.bind(var14)();
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 16;
                    var14 = var18[var14];
                    var14 = var17.bind(var3)(var14);
                    var14 = var14.ApplicationCollectionPlatforms;
                    if(var13) { _fun0007_ip = 533; continue _fun0007 }
 525:
                    var13 = var14.WEB;
                    _fun0007_ip = 539; continue _fun0007;
 533:
                    var13 = var14.IOS;
 539:
                    _fun0007_ip = 565; continue _fun0007;
 541:
                    var14 = 16;
                    var14 = var16[var14];
                    var14 = var15.bind(var3)(var14);
                    var14 = var14.ApplicationCollectionPlatforms;
                    var13 = var14.ANDROID;
 565:
                    var11['platform'] = var13;
                    var13 = _closure1_slot5;
                    var13 = var13.locale;
                    var11['locale'] = var13;
                    var11['cache'] = var12;
                    var5['query'] = var11;
                    var11 = true;
                    var5['rejectWithError'] = var11;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=610);
 608:
                    return var5;
 610:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0007_ip = 683; continue _fun0007 }
 616:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var6];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS';
                    var9['type'] = var12;
                    var12 = var5.body;
                    var9['collections'] = var12;
                    var12 = var8;
                    var9['surface'] = var12;
                    var12 = var7;
                    var9['activeState'] = var12;
                    var9 = var10.bind(var11)(var9);
 681: // try_end0
                    _fun0007_ip = 737; continue _fun0007;
 683:
                    return var5;
 686: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE';
                    var4['type'] = var9;
                    var4['surface'] = var8;
                    var4['activeState'] = var7;
                    var4 = var5.bind(var6)(var4);
 737:
                    return var3;
 740:
                    return var2;
 743:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _fetchIntegrationApplicationIdsForMyGuilds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 411; continue _fun0008 }
 10:
                    var2 = undefined;
                    var8 = undefined;
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var5 = var3.bind(var4)();
                    var6 = _closure1_slot15;
                    var4 = var6.getFetchState;
                    var10 = var4.bind(var6)();
                    var6 = _closure1_slot15;
                    var4 = var6.getLastFetchTimeMs;
                    var7 = var4.bind(var6)();
                    var6 = _closure1_slot15;
                    var4 = var6.getNextFetchRetryTimeMs;
                    var4 = var4.bind(var6)();
                    var6 = _closure1_slot16;
                    var6 = var6.FETCHING;
                    if(!(var10 !== var6)) { _fun0008_ip = 408; continue _fun0008 }
 95:
                    var10 = null;
                    if(!(var10 != var7)) { _fun0008_ip = 118; continue _fun0008 }
 101:
                    var6 = 86400000;
                    var6 = var7 + var6;
                    if(!(!(var6 > var5))) { _fun0008_ip = 408; continue _fun0008 }
 118:
                    if(!(var10 != var4)) { _fun0008_ip = 129; continue _fun0008 }
 122:
                    if(!(!(var5 < var4))) { _fun0008_ip = 408; continue _fun0008 }
 129:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 11;
                    var4 = var4[var5];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var11 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS';
                    var4['type'] = var11;
                    var4 = var6.bind(var7)(var4);
 171: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 13;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var11 = _closure1_slot17;
                    var11 = var11.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS;
                    var4['url'] = var11;
                    var11 = false;
                    var4['rejectWithError'] = var11;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=232);
 230:
                    return var4;
 232:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 289; continue _fun0008 }
 238:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var11 = var7.bind(var2)(var6);
                    var7 = var11.dispatch;
                    var6 = {};
                    var12 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS';
                    var6['type'] = var12;
                    var12 = var4.body;
                    var6['guildIdToApplicationIds'] = var12;
                    var6 = var7.bind(var11)(var6);
 287: // try_end0
                    _fun0008_ip = 408; continue _fun0008;
 289:
                    return var4;
 292: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var9 = var4;
                    var4 = var10 == var4;
                    var11 = undefined;
                    if(var4) { _fun0008_ip = 314; continue _fun0008 }
 306:
                    var4 = var9;
                    var11 = var4.status;
 314:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE';
                    var3['type'] = var6;
                    var7 = 429;
                    var6 = undefined;
                    if(!(var7 === var11)) { _fun0008_ip = 398; continue _fun0008 }
 360:
                    var7 = var9;
                    var11 = var10 == var7;
                    var7 = undefined;
                    if(var11) { _fun0008_ip = 395; continue _fun0008 }
 372:
                    var9 = var9.body;
                    var8 = var9;
                    var9 = var10 == var9;
                    var7 = undefined;
                    if(var9) { _fun0008_ip = 395; continue _fun0008 }
 389:
                    var7 = var8.retry_after;
 395:
                    var6 = var7;
 398:
                    var3['retryAfterSeconds'] = var6;
                    var3 = var4.bind(var5)(var3);
 408:
                    return var2;
 411:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var7 = 4;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot10 = var7;
    var7 = 7;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot12 = var7;
    var7 = 8;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot14 = var7;
    var7 = 9;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot16 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot17 = var7;
    var7 = 600000;
    var _closure1_slot18 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot19 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getEmbedApplication() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getEmbedApplication'] = var4;
    var4 = function getApplication() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getApplication'] = var4;
    var4 = function getCategories() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getCategories'] = var4;
    var4 = function getSimilarApplications() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getSimilarApplications'] = var4;
    var4 = function search() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['search'] = var4;
    var4 = function fetchCollections() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchCollections'] = var4;
    var2 = function fetchIntegrationApplicationIdsForMyGuilds() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchIntegrationApplicationIdsForMyGuilds'] = var2;
    return var1;
})();