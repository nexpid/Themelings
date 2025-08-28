// app/modules/applications/ApplicationActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var5 = function fetchApplication() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var5;
    var1 = function _fetchApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 297; continue _fun0001 }
 13:
                    var7 = arg1;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0001_ip = 24; continue _fun0001 }
 22:
                    var2 = false;
 24:
                    var12 = var2;
                    var10 = arguments[2];
                    SaveGenerator(address=34);
 32:
                    return var6;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 294; continue _fun0001 }
 43:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 5;
                    var3 = var3[var8];
                    var9 = var5.bind(var6)(var3);
                    var5 = var9.dispatch;
                    var3 = {};
                    var11 = 'APPLICATION_FETCH';
                    var3['type'] = var11;
                    var11 = var7;
                    var3['applicationId'] = var11;
                    var3 = var5.bind(var9)(var3);
 93: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 6;
                    var3 = var9[var3];
                    var3 = var5.bind(var6)(var3);
                    var9 = var3.HTTP;
                    var5 = var9.get;
                    var3 = {};
                    var14 = _closure1_slot8;
                    var13 = var14.APPLICATION_PUBLIC;
                    var11 = var7;
                    var11 = var13.bind(var14)(var11);
                    var3['url'] = var11;
                    var11 = {};
                    var11['with_guild'] = var12;
                    var3['query'] = var11;
                    var11 = true;
                    var3['oldFormErrors'] = var11;
                    var3['signal'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var9)(var3);
                    SaveGenerator(address=186);
 184:
                    return var3;
 186:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 246; continue _fun0001 }
 192:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var10 = var9.bind(var6)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var11 = 'APPLICATION_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var11 = var3.body;
                    var5['application'] = var11;
                    var5 = var9.bind(var10)(var5);
                    var5 = var3.body;
 243: // try_end0
                    return var5;
 246:
                    return var3;
 249: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'APPLICATION_FETCH_FAIL';
                    var4['type'] = var8;
                    var4['applicationId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
 294:
                    return var2;
 297:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var11 = var6.bind(var1)(var4);
    var _closure1_slot6 = var11;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var6 = var4.ApplicationFlags;
    var _closure1_slot7 = var6;
    var6 = var4.Endpoints;
    var _closure1_slot8 = var6;
    var6 = var4.NOOP;
    var _closure1_slot9 = var6;
    var4 = var4.QueryIds;
    var _closure1_slot10 = var4;
    var6 = {};
    var4 = function createApplication(arg1) {
        var2 = arg1;
        var3 = var2.name;
        var _closure2_slot0 = var3;
        var3 = var2.guildId;
        var _closure2_slot1 = var3;
        var3 = var2.type;
        var _closure2_slot2 = var3;
        var2 = var2.teamId;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 204; continue _fun0002 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.APPLICATIONS;
                    var2['url'] = var7;
                    var8 = {};
                    var9 = _closure2_slot0;
                    var8['name'] = var9;
                    var9 = _closure2_slot2;
                    var8['type'] = var9;
                    var9 = _closure2_slot1;
                    var8['guild_id'] = var9;
                    var9 = _closure2_slot3;
                    var8['team_id'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=119);
 117:
                    return var2;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 201; continue _fun0002 }
 125:
                    var3 = var2.body;
                    var5 = _closure2_slot1;
                    var8 = null;
                    var5 = var8 != var5;
                    if(!var5) { _fun0002_ip = 151; continue _fun0002 }
 143:
                    var7 = _closure2_slot2;
                    var5 = var8 != var7;
 151:
                    if(!var5) { _fun0002_ip = 198; continue _fun0002 }
 154:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'APPLICATION_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var4['application'] = var3;
                    var4 = var5.bind(var6)(var4);
 198:
                    return var3;
 201:
                    return var2;
 204:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['createApplication'] = var4;
    var4 = function getApplicationsForGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0003_ip = 20; continue _fun0003 }
 18:
            var5 = {};
 20:
            var3 = var5.includeTeam;
            var _closure2_slot1 = var3;
            var3 = null;
            var4 = Object.create(var3);
            var3 = 0;
            var4['includeTeam'] = var3;
            var8 = {};
            var7 = var5;
            var6 = var4;
            var3 = copyDataProperties(var8, var7, var6);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 183; continue _fun0004 }
 10:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var6 = undefined;
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.get;
                        var2 = {};
                        var10 = _closure1_slot8;
                        var9 = var10.GUILD_APPLICATIONS;
                        var7 = _closure2_slot0;
                        var7 = var9.bind(var10)(var7);
                        var2['url'] = var7;
                        var7 = {};
                        var11 = _closure2_slot2;
                        var12 = var7;
                        var9 = copyDataProperties(var12, var11);
                        var9 = _closure2_slot1;
                        var8 = 'include_team';
                        var7[var8] = var9;
                        var2['query'] = var7;
                        var7 = false;
                        var2['rejectWithError'] = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address=121);
 119:
                        return var2;
 121:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 180; continue _fun0004 }
 127:
                        var3 = var2.body;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 5;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'APPLICATIONS_FETCH_SUCCESS';
                        var4['type'] = var7;
                        var4['applications'] = var3;
                        var4 = var5.bind(var6)(var4);
                        return var3;
 180:
                        return var2;
 183:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var6['getApplicationsForGuild'] = var4;
    var4 = function transferApplication(arg1) {
        var2 = arg1;
        var3 = var2.applicationId;
        var _closure2_slot0 = var3;
        var2 = var2.teamId;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 165; continue _fun0005 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot8;
                    var9 = var10.APPLICATION_OWNER_TRANSFER;
                    var7 = _closure2_slot0;
                    var7 = var9.bind(var10)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var8 = _closure2_slot1;
                    var7['team_id'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=104);
 102:
                    return var2;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 162; continue _fun0005 }
 110:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'APPLICATION_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var4['application'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 162:
                    return var2;
 165:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['transferApplication'] = var4;
    var4 = function fetchApplications(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0006_ip = 20; continue _fun0006 }
 18:
            var3 = true;
 20:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0007_ip = 454; continue _fun0007 }
 12:
                        var5 = undefined;
                        var10 = undefined;
                        var _closure4_slot0 = var5;
                        var6 = _closure2_slot0;
                        var4 = _closure2_slot1;
                        if(var4) { _fun0007_ip = 53; continue _fun0007 }
 34:
                        var7 = _closure2_slot0;
                        var4 = var7.filter;
                        var3 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var2 = arg1;
                                var3 = _closure1_slot6;
                                var1 = var3.getApplication;
                                var6 = var1.bind(var3)(var2);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 7;
                                var1 = var5[var1];
                                var8 = undefined;
                                var10 = var3.bind(var8)(var1);
                                var9 = var10.hasFlag;
                                var5 = null;
                                var3 = var5 == var6;
                                var1 = undefined;
                                if(var3) { _fun0008_ip = 65; continue _fun0008 }
 60:
                                var1 = var6.flags;
 65:
                                var11 = var5 != var1;
                                var3 = 0;
                                var7 = 0;
                                if(!var11) { _fun0008_ip = 79; continue _fun0008 }
 76:
                                var7 = var1;
 79:
                                var1 = _closure1_slot7;
                                var1 = var1.EMBEDDED;
                                var1 = var9.bind(var10)(var7, var1);
                                if(!var1) { _fun0008_ip = 157; continue _fun0008 }
 98:
                                var9 = var5 == var6;
                                var7 = undefined;
                                if(var9) { _fun0008_ip = 128; continue _fun0008 }
 107:
                                var9 = var6.embeddedActivityConfig;
                                var10 = var5 == var9;
                                var7 = undefined;
                                if(var10) { _fun0008_ip = 128; continue _fun0008 }
 122:
                                var7 = var9.supported_platforms;
 128:
                                var7 = var5 == var7;
                                if(var7) { _fun0008_ip = 154; continue _fun0008 }
 135:
                                var9 = var5 == var6;
                                var8 = undefined;
                                if(var9) { _fun0008_ip = 150; continue _fun0008 }
 144:
                                var8 = var6.bot;
 150:
                                var7 = var5 == var8;
 154:
                                var1 = var7;
 157:
                                var5 = var5 != var6;
                                if(!var5) { _fun0008_ip = 167; continue _fun0008 }
 164:
                                var5 = !var1;
 167:
                                var1 = !var5;
                                if(var5) { _fun0008_ip = 191; continue _fun0008 }
 173:
                                var6 = _closure1_slot6;
                                var5 = var6.isFetchingApplication;
                                var5 = var5.bind(var6)(var2);
                                var1 = !var5;
 191:
                                if(!var1) { _fun0008_ip = 214; continue _fun0008 }
 194:
                                var5 = _closure1_slot6;
                                var4 = var5.didFetchingApplicationFail;
                                var4 = var4.bind(var5)(var2);
                                var1 = !var4;
 214:
                                if(!var1) { _fun0008_ip = 226; continue _fun0008 }
 217:
                                var2 = var2.length;
                                var1 = var2 > var3;
 226:
                                return var1;
                            }
                        };
                        var6 = var4.bind(var7)(var3);
 53:
                        var3 = var6;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0007_ip = 384; continue _fun0007 }
 70:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var7 = 5;
                        var4 = var4[var7];
                        var11 = var9.bind(var5)(var4);
                        var9 = var11.dispatch;
                        var4 = {};
                        var12 = 'APPLICATIONS_FETCH';
                        var4['type'] = var12;
                        var12 = var6;
                        var4['applicationIds'] = var12;
                        var4 = var9.bind(var11)(var4);
 121: // try_start_0
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 6;
                        var4 = var11[var4];
                        var4 = var9.bind(var5)(var4);
                        var12 = var4.HTTP;
                        var11 = var12.get;
                        var4 = {};
                        var9 = _closure1_slot8;
                        var9 = var9.APPLICATIONS_PUBLIC;
                        var4['url'] = var9;
                        var9 = global;
                        var15 = var9.URLSearchParams;
                        var16 = var6;
                        var14 = var16.map;
                        var13 = function(arg1) {
                            var1 = ['application_ids'];
                            var2 = arg1;
                            var1[1] = var2;
                            return var1;
                        };
                        var17 = var14.bind(var16)(var13);
                        var14 = var15.prototype;
                        var14 = Object.create(var14, {constructor: {value: var15}});
                        var18 = var14;
                        var13 = new var18[var15](var17, var16);
                        var14 = var13 instanceof Object ? var13 : var14;
                        var13 = var14.toString;
                        var13 = var13.bind(var14)();
                        var4['query'] = var13;
                        var13 = true;
                        var4['oldFormErrors'] = var13;
                        var13 = false;
                        var4['rejectWithError'] = var13;
                        var4 = var11.bind(var12)(var4);
                        SaveGenerator(address=249);
 247:
                        return var4;
 249:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                        if(var11) { _fun0007_ip = 387; continue _fun0007 }
 258:
                        var10 = var4;
 261: // try_end0
                        var12 = var10;
                        var13 = var12.body;
                        var11 = var9.Set;
                        var10 = var13.map;
                        var9 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var17 = var10.bind(var13)(var9);
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {constructor: {value: var11}});
                        var18 = var10;
                        var9 = new var18[var11](var17, var16);
                        var9 = var9 instanceof Object ? var9 : var10;
                        _closure4_slot0 = var9;
                        var10 = var6;
                        var9 = var10.filter;
                        var8 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var1 = !var1;
                            return var1;
                        };
                        var11 = var9.bind(var10)(var8);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var7];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var13 = 'APPLICATIONS_FETCH_SUCCESS';
                        var8['type'] = var13;
                        var12 = var12.body;
                        var8['applications'] = var12;
                        var8['unknownApplicationIds'] = var11;
                        var8 = var9.bind(var10)(var8);
 384:
                        return var5;
 387:
                        return var4;
 390: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var2 = var4;
                        var8 = var4.status;
                        var4 = 429;
                        if(!(var4 !== var8)) { _fun0007_ip = 452; continue _fun0007 }
 410:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'APPLICATIONS_FETCH_FAIL';
                        var3['type'] = var7;
                        var3['applicationIds'] = var6;
                        var3 = var4.bind(var5)(var3);
 452:
                        throw var2;
 454:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var6['fetchApplications'] = var4;
    var6['fetchApplication'] = var5;
    var12 = 8;
    var4 = var9[var12];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createFetchStore;
    var4 = {};
    var13 = function queryId(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.APPLICATIONS;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['queryId'] = var13;
    var13 = function get(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            if(!var2) { _fun0009_ip = 30; continue _fun0009 }
 12:
            var3 = _closure1_slot6;
            var2 = var3.getApplication;
            var1 = var2.bind(var3)(var4);
 30:
            return var1;
        }
    };
    var4['get'] = var13;
    var13 = function load(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var7 = arg2;
            var1 = null;
            if(!(var1 == var7)) { _fun0010_ip = 29; continue _fun0010 }
 9:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            _fun0010_ip = 64; continue _fun0010;
 29:
            var6 = _closure1_slot12;
            var5 = undefined;
            var4 = false;
            var3 = arg1;
            var4 = var6.bind(var5)(var7, var4, var3);
            var3 = var4.then;
            var2 = _closure1_slot9;
            var1 = var3.bind(var4)(var2);
 64:
            return var1;
        }
    };
    var4['load'] = var13;
    var12 = var9[var12];
    var12 = var8.bind(var1)(var12);
    var12 = var12.useStateFromStores;
    var4['useStateHook'] = var12;
    var4 = var7.bind(var10)(var11, var4);
    var _closure1_slot11 = var4;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/applications/ApplicationActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['fetchApplication'] = var5;
    var3['useApplication'] = var4;
    var2 = function useApplicationWithLoggedOutContext(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var1 = _closure1_slot11;
        var8 = undefined;
        var1 = var1.bind(var8)(var10);
        var9 = var1.data;
        var _closure2_slot1 = var9;
        var3 = var1.isLoading;
        var2 = var1.error;
        var1 = {};
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 8;
        var6 = var11[var6];
        var8 = var7.bind(var8)(var6);
        var7 = var8.useStateFromStores;
        var5 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(2);
        var5[0] = var10;
        var5[1] = var9;
        var4 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = _closure2_slot1;
                var4 = null;
                if(!(var4 == var1)) { _fun0011_ip = 39; continue _fun0011 }
 13:
                var6 = _closure1_slot4;
                var5 = var6.getApplication;
                var3 = _closure2_slot0;
                var3 = var5.bind(var6)(var3);
                if(!(var4 == var3)) { _fun0011_ip = 45; continue _fun0011 }
 39:
                var2 = _closure2_slot1;
                return var2;
 45:
                var2 = _closure1_slot5;
                var1 = var2.createFromServer;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var4 = var7.bind(var8)(var6, var4, var5);
        var1['app'] = var4;
        var1['isLoading'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useApplicationWithLoggedOutContext'] = var2;
    return var1;
})();