// app/modules/client_themes/SavedCustomThemeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function validateSavedTheme(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = undefined;
            var2 = undefined;
case 6: // try_start_0
            var3 = _closure1_slot7;
            var7 = var5;
            var1 = var7.base_theme;
            var2 = var3[var1];
            var7 = var7.colors;
            var8 = var7.length;
            var7 = 0;
            var7 = var8 > var7;
            var6 = var7;
            if(!var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var5;
            var7 = var7.gradient_angle;
            var8 = 'number';
            var7 = typeof var7;
            var6 = var8 === var7;
case 7:
            var3 = var6;
            if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var5.base_mix;
            var6 = 'number';
            var5 = typeof var5;
            var3 = var6 === var5;
case 9:
            var1 = var3;
            if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var2;
            var2 = null;
            var1 = var2 != var3;
case 11: // try_end0
            return var1;
case 13: // catch_target0
            CatchBlockStart(arg_register=1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.captureMessage;
            var1 = 'Invalid saved custom theme: ';
            var2 = var1 + var2;
            var1 = {};
            var5 = {};
            var6 = 'SavedCustomThemeStore';
            var5['app_context'] = var6;
            var1['tags'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var12 = 0;
    var2 = var7[var12];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 2;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var9 = 3;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.PROTO_THEME_MAP_WEB_REFRESH;
    var2 = var2.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot7 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var12;
    var4 = 'NOT_FETCHED';
    var2[var12] = var4;
    var2['IS_FETCHING'] = var11;
    var4 = 'IS_FETCHING';
    var2[var11] = var4;
    var2['HAS_FETCHED'] = var10;
    var4 = 'HAS_FETCHED';
    var2[var10] = var4;
    var2['ERROR'] = var9;
    var4 = 'ERROR';
    var2[var9] = var4;
    var _closure1_slot8 = var2;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = var2.NOT_FETCHED;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function SavedCustomThemeStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 14:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 15; continue _fun0003;
case 7:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = var1.savedCustomThemes;
                _closure1_slot9 = var2;
case 16:
                var1 = _closure1_slot8;
                var1 = var1.NOT_FETCHED;
                _closure1_slot10 = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = {};
                var4 = _closure1_slot9;
                var2 = null;
                if(!(var2 == var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var2 = new Array(0);
                _fun0005_ip = 20; continue _fun0005;
case 18:
                var2 = _closure1_slot9;
case 20:
                var1['savedCustomThemes'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSavedCustomTheme';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot9;
                var5 = null;
                var4 = var5 == var3;
                var1 = undefined;
                if(var4) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var1 = var3.length;
case 21:
                var3 = 0;
                var4 = var1 > var3;
                var1 = null;
                if(!var4) { _fun0006_ip = 7; continue _fun0006 }
case 23:
                var4 = _closure1_slot9;
                var4 = var4[var3];
                var4 = var4.colors;
                var4 = var4.length;
                var4 = var4 > var3;
                var1 = null;
                if(!var4) { _fun0006_ip = 7; continue _fun0006 }
case 24:
                var2 = _closure1_slot9;
                var1 = var2[var3];
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasSavedCustomThemes';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure1_slot9;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var2 = var1.length;
case 21:
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot10;
            var1 = _closure1_slot8;
            var1 = var1.IS_FETCHING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasFetched';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot10;
            var1 = _closure1_slot8;
            var1 = var1.HAS_FETCHED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasError';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot10;
            var1 = _closure1_slot8;
            var1 = var1.ERROR;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SavedCustomThemeStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleCustomThemesFetchStart() {
        var1 = _closure1_slot8;
        var1 = var1.IS_FETCHING;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['SAVED_CUSTOM_THEMES_FETCH_START'] = var10;
    var10 = function SAVED_CUSTOM_THEMES_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var4 = var1.themes;
        var1 = _closure1_slot8;
        var1 = var1.HAS_FETCHED;
        _closure1_slot10 = var1;
        var3 = var4.filter;
        var1 = _closure1_slot12;
        var4 = var3.bind(var4)(var1);
        var3 = var4.map;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = _closure1_slot7;
            var1 = {};
            var4 = var2.colors;
            var1['colors'] = var4;
            var4 = var2.gradient_angle;
            var1['gradient_angle'] = var4;
            var4 = var2.base_mix;
            var1['base_mix'] = var4;
            var2 = var2.base_theme;
            var2 = var3[var2];
            var1['base_theme'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var4['SAVED_CUSTOM_THEMES_FETCH_SUCCESS'] = var10;
    var5 = function SAVED_CUSTOM_THEMES_FETCH_FAILURE(arg1) {
        var1 = arg1;
        var5 = var1.error;
        var2 = _closure1_slot8;
        var2 = var2.ERROR;
        _closure1_slot10 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.captureException;
        var2 = {};
        var6 = {};
        var7 = 'SavedCustomThemeStore';
        var6['app_context'] = var7;
        var2['tags'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var4['SAVED_CUSTOM_THEMES_FETCH_FAILURE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/SavedCustomThemeStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();