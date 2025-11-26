// app/modules/user_settings/LocaleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _getSystemLocale() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 8;
                    var2 = var2[var7];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    var6 = var4 == var2;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var7];
                    var6 = var8.bind(var5)(var6);
                    var6 = var6.app;
                    var8 = var4 == var6;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var2 = var6.getPreferredSystemLanguages;
case 8:
                    if(!(var4 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var5)(var2);
                    var6 = var2.app;
                    var2 = var6.getPreferredSystemLanguages;
                    var7 = var2.bind(var6)();
                    var6 = var7.then;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 0;
                        var1 = var2[var1];
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=142);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    if(!(var4 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 17:
                    var4 = '';
                    if(!(var4 === var2)) { _fun0002_ip = 18; continue _fun0002 }
case 11:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.systemLocale;
                    return var3;
case 18:
                    return var2;
case 15:
                    return var2;
case 6:
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
    var9 = function handleUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot10;
            var1 = var1.settings;
            var2 = var1.localization;
            var1 = null;
            var6 = var1 == var2;
            var4 = undefined;
            var3 = undefined;
            if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var2 = var2.locale;
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            var3 = var2.value;
case 19:
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = '';
            var1 = var2 !== var3;
case 22:
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 3:
            var2 = _closure1_slot11;
            var1 = var3 !== var2;
case 10:
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var2 = _closure1_slot9;
            _closure1_slot11 = var3;
            var2 = var2.bind(var4)(var3);
            var1 = true;
case 24:
            return var1;
        }
    };
    var _closure1_slot15 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.setAppLocale;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var8 = var6[var2];
    var8 = var5.bind(var1)(var8);
    var8 = var8.intl;
    var8 = var8.currentLocale;
    var _closure1_slot11 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.systemLocale;
    var _closure1_slot12 = var2;
    var2 = function getSystemLocale() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var10 = var2.bind(var1)();
    var8 = var10.then;
    var2 = function(arg1) {
        var1 = arg1;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2 = var8.bind(var10)(var2);
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LocaleStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 28:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var1 = _closure1_slot10;
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot15;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot11;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'locale';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'systemLocale';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LocaleStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var2['OVERLAY_INITIALIZE'] = var9;
    var2['CACHE_LOADED'] = var9;
    var2['CONNECTION_OPEN'] = var9;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var4 = function handleLocaleOverride(arg1) {
        var1 = arg1;
        var3 = var1.locale;
        _closure1_slot11 = var3;
        var2 = _closure1_slot9;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['USER_SETTINGS_LOCALE_OVERRIDE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/LocaleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();