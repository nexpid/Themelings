// app/modules/devtools/design_toggles/DesignTogglesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = {'enable_recently_active': 'Enable recently active channels', 'theme_setting_in_account_sheet': 'Show theme settings in the Account action sheet', 'nav_experiment_server_drawer_enabled': '[NavI] Enable expandable server drawer', 'shop_include_unpublished': '[Shop] show unpublished items in shop', 'show_icymi_debug_scores': 'Show ICYMI debug scores', 'channel_list_scrim': 'Dim the channel list when chat appears'};
    var _closure1_slot5 = var2;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.DeviceSettingsStore;
    var4 = function(arg1) {
        var4 = function DesignTogglesStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
        var1 = 'getUserAgnosticState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = {};
            var2 = _closure1_slot6;
            var1['toggleStates'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var10 = arg1;
                var8 = _closure1_slot5;
                var1 = undefined;
                var3 = null;
                var2 = undefined;
                for(var4 in var8)
 24:
                {
 33:
                    var13 = var4;
                    var12 = var3 == var10;
                    var11 = undefined;
                    if(var12) { _fun0003_ip = 70; continue _fun0003 }
 45:
                    var14 = var10.toggleStates;
                    var12 = var3 == var14;
                    var2 = var14;
                    var11 = undefined;
                    if(var12) { _fun0003_ip = 70; continue _fun0003 }
 63:
                    var11 = var14[var13];
                    var2 = var14;
 70:
                    var12 = var3 != var11;
                    if(!var12) { _fun0003_ip = 80; continue _fun0003 }
 77:
                    var12 = var11;
 80:
                    var11 = _closure1_slot6;
                    var11[var13] = var12;
                    _fun0003_ip = 24; continue _fun0003;
                }
 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 26; continue _fun0004 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'set';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg2;
            var3 = _closure1_slot6;
            var2 = arg1;
            var3[var2] = var1;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'all';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'allWithDescriptions';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.entries;
            var1 = _closure1_slot6;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var7 = undefined;
                    var4 = var3 === var7;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 27; continue _fun0005 }
 24:
                    var3 = var2;
 27:
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 57; continue _fun0005 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0005_ip = 57; continue _fun0005 }
 51:
                    var2 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0005_ip = 63; continue _fun0005 }
 60:
                    var1.return();
 63:
                    var1 = new Array(3);
                    var1[0] = var3;
                    var1[1] = var2;
                    var2 = _closure1_slot5;
                    var2 = var2[var3];
                    var1[2] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'DevToolsDesignTogglesStore';
    var8['displayName'] = var4;
    var8['persistKey'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = {};
    var5 = function handleSet(arg1) {
        var1 = arg1;
        var3 = _closure1_slot6;
        var2 = var1.toggle;
        var1 = var1.value;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_DESIGN_TOGGLE_SET'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var8](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/devtools/design_toggles/DesignTogglesStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['toggles'] = var2;
    return var1;
})();