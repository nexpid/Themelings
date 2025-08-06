// app/modules/devtools/DevToolsSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var4 = {'sidebarWidth': 360, 'lastOpenTabId': null, 'displayTools': false, 'showDevWidget': false, 'devWidgetPosition': null, 'sortedScreenKeys': null, 'isRandomlyChangingPremiumOptions': false};
    var2 = 360;
    var8 = {'x': 0, 'y': 0};
    var4['devWidgetPosition'] = var8;
    var8 = new Array(0);
    var4['sortedScreenKeys'] = var8;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.DeviceSettingsStore;
    var4 = function(arg1) {
        var4 = function DevToolsSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 16; continue _fun0003 }
 9:
                var3 = _closure1_slot8;
 16:
                _closure1_slot8 = var3;
                var4 = var3.sortedScreenKeys;
                if(!(var1 == var4)) { _fun0003_ip = 37; continue _fun0003 }
 33:
                var4 = new Array(0);
 37:
                var1 = {};
                var5 = _closure1_slot8;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var3 = 'sortedScreenKeys';
                var1[var3] = var4;
                _closure1_slot8 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.actionLogger;
                var2 = _closure1_slot7;
                var2 = var2.isDeveloper;
                var3['persist'] = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'sidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var2 = var1.displayTools;
                var1 = 0;
                if(!var2) { _fun0004_ip = 27; continue _fun0004 }
 14:
                var2 = _closure1_slot8;
                var1 = var2.sidebarWidth;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'lastOpenTabId';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot8;
                var2 = var1.lastOpenTabId;
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 25; continue _fun0005 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'displayTools';
        var5['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure1_slot7;
                var1 = var1.isDeveloper;
                if(!var1) { _fun0006_ip = 26; continue _fun0006 }
 16:
                var2 = _closure1_slot8;
                var1 = var2.displayTools;
 26:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'showDevWidget';
        var5['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = _closure1_slot7;
                var1 = var1.isDeveloper;
                if(!var1) { _fun0007_ip = 26; continue _fun0007 }
 16:
                var2 = _closure1_slot8;
                var1 = var2.showDevWidget;
 26:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'devWidgetPosition';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.devWidgetPosition;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'sortedScreenKeys';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.sortedScreenKeys;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isRandomlyChangingPremiumOptions';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot8;
            var1 = var1.isRandomlyChangingPremiumOptions;
            return var1;
        };
        var5['get'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'DevToolsSettingsStore';
    var8['displayName'] = var4;
    var8['persistKey'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = {};
    var5 = function handleDevToolsSettingsUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.isDeveloper;
            if(!var1) { _fun0008_ip = 49; continue _fun0008 }
 16:
            var1 = {};
            var4 = _closure1_slot8;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var3 = arg1;
            var4 = var3.settings;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            _closure1_slot8 = var1;
 49:
            var1 = undefined;
            return var1;
        }
    };
    var4['DEV_TOOLS_SETTINGS_UPDATE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var8](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/devtools/DevToolsSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DEVTOOLS_SIDEBAR_MIN_WIDTH'] = var2;
    return var1;
})();