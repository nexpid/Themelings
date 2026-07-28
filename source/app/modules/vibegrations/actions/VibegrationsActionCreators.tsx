// app/modules/vibegrations/actions/VibegrationsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function reloadActivityIfRunning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot4;
            var3 = var5.getConnectedFrame;
            var3 = var3.bind(var5)();
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.applicationId;
case 4:
            var1 = var2 === var4;
case 2:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.refreshProxyTicket;
            var1 = {};
            var1['applicationId'] = var4;
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _listProjects() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot5;
                    var2 = var4.getProjectsFetchState;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    var6 = var2 == var4;
                    var2 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0002_ip = 2; continue _fun0002 }
case 10:
                    var5 = var4.type;
case 2:
                    var4 = 'loading';
                    if(!(var4 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 5;
                    var4 = var4[var5];
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'VIBEGRATIONS_PROJECTS_FETCH_START';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
case 13: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.VIBEGRATIONS_PROJECTS;
                    var4['url'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=161);
case 14:
                    return var4;
case 15:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var9 = var4.body;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'VIBEGRATIONS_PROJECTS_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var6['projects'] = var9;
                    var6 = var7.bind(var8)(var6);
case 18: // try_end0
                    _fun0002_ip = 11; continue _fun0002;
case 16:
                    return var4;
case 19: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIBEGRATIONS_PROJECTS_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 11:
                    return var2;
case 8:
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
    var1 = function _createProject() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 9:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.VIBEGRATIONS_PROJECTS;
                    var2['url'] = var7;
                    var7 = arg1;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=84);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'VIBEGRATIONS_PROJECT_CREATE_SUCCESS';
                    var4['type'] = var7;
                    var4['project'] = var3;
                    var4 = var5.bind(var6)(var4);
                    var3 = var3.id;
                    return var3;
case 23:
                    return var2;
case 20:
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
    var1 = function _renameProject() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 9:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.patch;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.VIBEGRATIONS_PROJECT;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var8 = arg2;
                    var7['name'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=98);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var4 = var2.ok;
                    if(!var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIBEGRATIONS_PROJECT_UPDATE_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['project'] = var6;
                    var3 = var4.bind(var5)(var3);
case 30:
                    return var2;
case 28:
                    return var2;
case 25:
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
    var1 = function _setGuildHints() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 9:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.patch;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.VIBEGRATIONS_PROJECT;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = arg2;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=92);
case 24:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 32; continue _fun0005 }
case 27:
                    var4 = var2.ok;
                    if(!var4) { _fun0005_ip = 14; continue _fun0005 }
case 33:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIBEGRATIONS_PROJECT_UPDATE_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['project'] = var6;
                    var3 = var4.bind(var5)(var3);
case 14:
                    return var2;
case 32:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _deleteProject() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.del;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.VIBEGRATIONS_PROJECT;
                    var8 = var8.bind(var9)(var6);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=85);
case 36:
                    return var2;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var4 = var2.ok;
                    if(!var4) { _fun0006_ip = 40; continue _fun0006 }
case 13:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'VIBEGRATIONS_PROJECT_DELETE_SUCCESS';
                    var3['type'] = var7;
                    var3['projectId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 40:
                    return var2;
case 38:
                    return var2;
case 34:
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
    var1 = function _publishProject() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 9:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.post;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.VIBEGRATIONS_PROJECT_PUBLISH;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=85);
case 36:
                    return var2;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var3 = var2.ok;
                    if(!var3) { _fun0007_ip = 19; continue _fun0007 }
case 44:
                    var6 = var2.body;
                    var3 = var6.application;
                    var12 = var6.project;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 5;
                    var9 = var8[var6];
                    var11 = var7.bind(var5)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var13 = 'VIBEGRATIONS_PROJECT_UPDATE_SUCCESS';
                    var9['type'] = var13;
                    var9['project'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {'type': 'APPLICATION_FETCH_SUCCESS', 'application': null, 'isHydrated': true};
                    var6['application'] = var3;
                    var6 = var7.bind(var8)(var6);
                    var4 = _closure1_slot7;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
case 19:
                    return var2;
case 42:
                    return var2;
case 41:
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
    var1 = function _publishPreviewProject() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 41; continue _fun0008 }
case 9:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.post;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var8 = var9.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=85);
case 36:
                    return var2;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var3 = var2.ok;
                    if(!var3) { _fun0008_ip = 19; continue _fun0008 }
case 44:
                    var6 = var2.body;
                    var3 = var6.application;
                    var12 = var6.project;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 5;
                    var9 = var8[var6];
                    var11 = var7.bind(var5)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var13 = 'VIBEGRATIONS_PROJECT_UPDATE_SUCCESS';
                    var9['type'] = var13;
                    var9['project'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.dispatch;
                    var6 = {'type': 'APPLICATION_FETCH_SUCCESS', 'application': null, 'isHydrated': true};
                    var6['application'] = var3;
                    var6 = var7.bind(var8)(var6);
                    var4 = _closure1_slot7;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
case 19:
                    return var2;
case 42:
                    return var2;
case 41:
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/vibegrations/actions/VibegrationsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function listProjects() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['listProjects'] = var4;
    var4 = function createProject() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createProject'] = var4;
    var4 = function renameProject() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['renameProject'] = var4;
    var4 = function setGuildHints() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setGuildHints'] = var4;
    var4 = function deleteProject() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteProject'] = var4;
    var4 = function publishProject() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['publishProject'] = var4;
    var4 = function publishPreviewProject() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['publishPreviewProject'] = var4;
    var4 = function setChatSidebarWidth(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['width'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setChatSidebarWidth'] = var4;
    var2 = function setBuilderPreviewApplicationId(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setBuilderPreviewApplicationId'] = var2;
    return var1;
})();