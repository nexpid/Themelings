// app/modules/application_widget/ApplicationWidgetConfigStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function updateApplicationConfigs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var6 = global;
            var2 = var6.Object;
            var1 = var2.keys;
            var1 = var1.bind(var2)(var8);
            var1 = var1.length;
            var12 = 0;
            if(!(var12 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var11 = function _loop() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Set;
                    var6 = _closure2_slot1;
                    var2 = var6.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.config_id;
                        return var1;
                    };
                    var11 = var2.bind(var6)(var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var12 = var2;
                    var1 = new var12[var3](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var8 = var3[var1];
                    var3 = null;
                    var6 = var3 == var8;
                    var1 = undefined;
                    var7 = undefined;
                    if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = var8.filter;
                    var4 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.config_id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var7 = var6.bind(var8)(var4);
case 8:
                    if(!(var3 == var7)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var7 = new Array(0);
case 10:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var10 = var7;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = _closure2_slot1;
                    var11 = var2;
                    var5 = arraySpread(var11, var10, var9);
                    var4[var3] = var2;
                    return var1;
                }
            };
            var2 = var6.Object;
            var1 = var2.entries;
            var10 = var1.bind(var2)(var8);
            var1 = var10.length;
            var1 = var12 < var1;
            var9 = undefined;
            var7 = 2;
            var5 = 1;
            var4 = 0;
            if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 9:
            var13 = var10[var4];
            var1 = _closure1_slot5;
            var1 = var1.bind(var9)(var13, var7);
            var13 = var1[var12];
            var _closure2_slot0 = var13;
            var1 = var1[var5];
            var _closure2_slot1 = var1;
            var1 = var11.bind(var9)();
            var4 = var4 + 1;
            var1 = var10.length;
            if(var4 < var1) { _fun0002_ip = 9; continue _fun0002 }
case 12:
            var1 = {};
            var14 = _closure1_slot8;
            var15 = var1;
            var4 = copyDataProperties(var15, var14);
            _closure1_slot8 = var1;
            var1 = {};
            var14 = _closure1_slot9;
            var15 = var1;
            var4 = copyDataProperties(var15, var14);
            var5 = var6.Object;
            var4 = var5.fromEntries;
            var7 = var6.Object;
            var6 = var7.keys;
            var7 = var6.bind(var7)(var8);
            var6 = var7.map;
            var3 = function(arg1) {
                var1 = new Array(2);
                var2 = arg1;
                var1[0] = var2;
                var2 = _closure1_slot6;
                var2 = var2.SUCCESS;
                var1[1] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var14 = var4.bind(var5)(var3);
            var15 = var1;
            var3 = copyDataProperties(var15, var14);
            _closure1_slot9 = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var9 = function handleLogout() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = _closure1_slot6;
        var1 = var1.NOT_FETCHED;
        _closure1_slot10 = var1;
        var1 = new Array(0);
        _closure1_slot11 = var1;
        var1 = _closure1_slot6;
        var1 = var1.NOT_FETCHED;
        _closure1_slot12 = var1;
        var1 = new Array(0);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var4 = 'NOT_FETCHED';
    var2['NOT_FETCHED'] = var4;
    var4 = 'FETCHING';
    var2['FETCHING'] = var4;
    var4 = 'SUCCESS';
    var2['SUCCESS'] = var4;
    var4 = 'FAILURE';
    var2['FAILURE'] = var4;
    var _closure1_slot6 = var2;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var4 = {};
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = var2.NOT_FETCHED;
    var _closure1_slot10 = var4;
    var4 = new Array(0);
    var _closure1_slot11 = var4;
    var4 = var2.NOT_FETCHED;
    var _closure1_slot12 = var4;
    var4 = new Array(0);
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function ApplicationWidgetConfigStoreClass() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 15; continue _fun0004;
case 13:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 15:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getConfig';
        var5['key'] = var1;
        var1 = function getConfig(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var5 = var2[var1];
                var3 = null;
                var4 = var3 == var5;
                var2 = undefined;
                if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var4 = 0;
                var2 = var5[var4];
case 16:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var1 = var2;
case 18:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getConfigs';
        var5['key'] = var7;
        var7 = function getConfigs(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot8;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var1 = _closure1_slot7;
case 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var7 = function getFetchState(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 22; continue _fun0007 }
case 21:
                var2 = _closure1_slot6;
                var1 = var2.NOT_FETCHED;
case 22:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFeaturedFetchState';
        var5['key'] = var7;
        var7 = function getFeaturedFetchState() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDeveloperFetchState';
        var5['key'] = var7;
        var7 = function getDeveloperFetchState() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAllConfigsByApplication';
        var5['key'] = var7;
        var7 = function getAllConfigsByApplication() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFeaturedApplicationIds';
        var5['key'] = var7;
        var7 = function getFeaturedApplicationIds() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getDeveloperApplicationIds';
        var5['key'] = var7;
        var6 = function getDeveloperApplicationIds() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'ApplicationWidgetConfigStore';
    var8['displayName'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var4['LOGOUT'] = var9;
    var4['APPLICATION_WIDGET_CONFIG_DEBUG_RESET'] = var9;
    var9 = function handleFeaturedFetchStart(arg1) {
        var1 = _closure1_slot6;
        var1 = var1.FETCHING;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START'] = var9;
    var9 = function handleFeaturedFetchSuccess(arg1) {
        var1 = arg1;
        var3 = _closure1_slot6;
        var3 = var3.SUCCESS;
        _closure1_slot10 = var3;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.keys;
        var3 = var1.configs;
        var3 = var4.bind(var5)(var3);
        _closure1_slot11 = var3;
        var3 = _closure1_slot15;
        var2 = var1.configs;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS'] = var9;
    var9 = function handleFeaturedFetchFailure() {
        var1 = _closure1_slot6;
        var1 = var1.FAILURE;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE'] = var9;
    var9 = function handleDeveloperFetchStart() {
        var1 = _closure1_slot6;
        var1 = var1.FETCHING;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START'] = var9;
    var9 = function handleDeveloperFetchSuccess(arg1) {
        var1 = arg1;
        var3 = _closure1_slot6;
        var3 = var3.SUCCESS;
        _closure1_slot12 = var3;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.keys;
        var3 = var1.configs;
        var3 = var4.bind(var5)(var3);
        _closure1_slot13 = var3;
        var3 = _closure1_slot15;
        var2 = var1.configs;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS'] = var9;
    var9 = function handleDeveloperFetchFailure() {
        var1 = _closure1_slot6;
        var1 = var1.FAILURE;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE'] = var9;
    var9 = function handleFetchStart(arg1) {
        var2 = {};
        var5 = _closure1_slot9;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.applicationId;
        var3 = _closure1_slot6;
        var3 = var3.FETCHING;
        var2[3] = var3;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FETCH_START'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var3 = _closure1_slot15;
        var2 = {};
        var4 = var1.applicationId;
        var1 = var1.configs;
        var2[3] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS'] = var9;
    var5 = function handleFetchFailure(arg1) {
        var2 = {};
        var5 = _closure1_slot9;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.applicationId;
        var3 = _closure1_slot6;
        var3 = var3.FAILURE;
        var2[3] = var3;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_WIDGET_CONFIG_FETCH_FAILURE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var8](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_widget/ApplicationWidgetConfigStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();