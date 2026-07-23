// app/modules/application_widget/ApplicationWidgetConfigActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getApplicationsFromConfigs(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = global;
            var2 = var1.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var12 = var3;
            var2 = new var12[var2](var11);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = _closure1_slot10;
            var7 = undefined;
            var2 = arg1;
            var6 = var3.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = null;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var3.value;
            var8 = var2.application;
            if(!(var5 != var8)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var9 = var4.set;
            var8 = var2.application;
            var8 = var8.id;
            var2 = var2.application;
            var2 = var9.bind(var4)(var8, var2);
case 38:
            var8 = var6.bind(var7)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var3 = var1.Array;
            var2 = var3.from;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function fetchFeaturedWidgetConfigsFromApi() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchFeaturedWidgetConfigsFromApi() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 40:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
case 41: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.WIDGET_CONFIGS_FEATURED;
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=118);
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var2.body;
                    var9 = var9.applications;
                    var4['applications'] = var9;
                    var9 = var2.body;
                    var9 = var9.configs;
                    var4['configs'] = var9;
                    var4 = var7.bind(var8)(var4);
case 46: // try_end0
                    return var5;
case 44:
                    return var2;
case 47: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 24:
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
    var1 = function fetchDeveloperWidgetConfigsFromApi() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _fetchDeveloperWidgetConfigsFromApi() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 40:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START';
                    var2['type'] = var8;
                    var2 = var4.bind(var7)(var2);
case 41: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.WIDGET_CONFIGS_DEVELOPER;
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=118);
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var2.body;
                    var9 = var9.applications;
                    var4['applications'] = var9;
                    var9 = var2.body;
                    var9 = var9.configs;
                    var4['configs'] = var9;
                    var4 = var7.bind(var8)(var4);
case 46: // try_end0
                    return var5;
case 44:
                    return var2;
case 47: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 24:
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
    var1 = function _fetchWidgetConfigsFromApi() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var9 = var8;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 3;
                    var2 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var10 = 'APPLICATION_WIDGET_CONFIG_FETCH_START';
                    var2['type'] = var10;
                    var2['applicationId'] = var8;
                    var2 = var4.bind(var7)(var2);
case 30: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var4 = var7.get;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.APPLICATION_WIDGET_CONFIGS;
                    var8 = var9;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=136);
case 50:
                    return var2;
case 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var10 = var2.body;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var11 = 'APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS';
                    var4['type'] = var11;
                    var11 = var9;
                    var4['applicationId'] = var11;
                    var11 = _closure1_slot12;
                    var11 = var11.bind(var5)(var10);
                    var4['applications'] = var11;
                    var4['configs'] = var10;
                    var4 = var7.bind(var8)(var4);
case 54: // try_end0
                    return var5;
case 52:
                    return var2;
case 55: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'APPLICATION_WIDGET_CONFIG_FETCH_FAILURE';
                    var3['type'] = var10;
                    var3['applicationId'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 5;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 48:
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
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 6;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.PromiseDeduper;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.PromiseDeduper;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PromiseDeduper;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_widget/ApplicationWidgetConfigActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchFeaturedWidgetConfigs() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var1 = {};
case 56:
            var7 = var1.force;
            if(!(var7 === var6)) { _fun0008_ip = 31; continue _fun0008 }
case 58:
            var7 = false;
case 31:
            if(var7) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var3 = _closure1_slot4;
            var2 = var3.getFeaturedFetchState;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot5;
            var1 = var1.SUCCESS;
            if(!(var2 === var1)) { _fun0008_ip = 59; continue _fun0008 }
case 41:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            _fun0008_ip = 61; continue _fun0008;
case 59:
            var5 = _closure1_slot7;
            var4 = var5.one;
            var3 = _closure1_slot13;
            var2 = {};
            var2['force'] = var7;
            var1 = var4.bind(var5)(var6, var3, var2);
case 61:
            return var1;
        }
    };
    var3['fetchFeaturedWidgetConfigs'] = var4;
    var4 = function fetchDeveloperWidgetConfigs() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arguments[0];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var1 = {};
case 56:
            var7 = var1.force;
            if(!(var7 === var6)) { _fun0009_ip = 31; continue _fun0009 }
case 58:
            var7 = false;
case 31:
            if(var7) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var3 = _closure1_slot4;
            var2 = var3.getDeveloperFetchState;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot5;
            var1 = var1.SUCCESS;
            if(!(var2 === var1)) { _fun0009_ip = 59; continue _fun0009 }
case 41:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            _fun0009_ip = 61; continue _fun0009;
case 59:
            var5 = _closure1_slot8;
            var4 = var5.one;
            var3 = _closure1_slot15;
            var2 = {};
            var2['force'] = var7;
            var1 = var4.bind(var5)(var6, var3, var2);
case 61:
            return var1;
        }
    };
    var3['fetchDeveloperWidgetConfigs'] = var4;
    var2 = function fetchWidgetConfigs(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var6;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0010_ip = 29; continue _fun0010 }
case 62:
            var3 = {};
case 29:
            var7 = var3.force;
            if(!(var7 === var1)) { _fun0010_ip = 63; continue _fun0010 }
case 3:
            var7 = false;
case 63:
            var4 = _closure1_slot4;
            var1 = var4.getFetchState;
            var4 = var1.bind(var4)(var6);
            if(var7) { _fun0010_ip = 9; continue _fun0010 }
case 64:
            var1 = _closure1_slot5;
            var1 = var1.SUCCESS;
            if(!(var4 === var1)) { _fun0010_ip = 9; continue _fun0010 }
case 30:
            var1 = global;
            var4 = var1.Promise;
            var1 = var4.resolve;
            var1 = var1.bind(var4)();
            _fun0010_ip = 65; continue _fun0010;
case 9:
            var5 = _closure1_slot9;
            var4 = var5.one;
            var3 = {};
            var3['force'] = var7;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = function fetchWidgetConfigsFromApi() {
                    var1 = undefined;
                    var4 = _closure1_slot17;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var4.bind(var5)(var6, var2, var3);
case 65:
            return var1;
        }
    };
    var3['fetchWidgetConfigs'] = var2;
    return var1;
})();