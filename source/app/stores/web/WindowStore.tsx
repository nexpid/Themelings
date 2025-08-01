// app/stores/web/WindowStore.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getWindowIdState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot9;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 59; continue _fun0002 }
 26:
            var2 = {'isElementFullscreen': false, 'focused': false, 'windowSize': null, 'visible': false};
            var3 = {'width': 0, 'height': 0};
            var2['windowSize'] = var3;
            var1 = var2;
 59:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = null;
    var _closure1_slot8 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function WindowStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isFocused';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0004_ip = 42; continue _fun0004 }
 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getMainWindowId;
                var3 = var1.bind(var4)();
 42:
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)(var3);
                var1 = var1.focused;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isAppFocused';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getFocusedWindowId;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isVisible';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0005_ip = 42; continue _fun0005 }
 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getMainWindowId;
                var3 = var1.bind(var4)();
 42:
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)(var3);
                var1 = var1.visible;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFocusedWindowId';
        var5['key'] = var7;
        var7 = function value() {
            var2 = null;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot9;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.focused;
                    if(!var1) { _fun0006_ip = 22; continue _fun0006 }
 12:
                    var1 = arg2;
                    _closure3_slot0 = var1;
 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot0;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastFocusedWindowId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isElementFullScreen';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0007_ip = 42; continue _fun0007 }
 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getMainWindowId;
                var3 = var1.bind(var4)();
 42:
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)(var3);
                var1 = var1.isElementFullscreen;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'windowSize';
        var5['key'] = var7;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arguments[0];
                var2 = undefined;
                if(!(var3 === var2)) { _fun0008_ip = 42; continue _fun0008 }
 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getMainWindowId;
                var3 = var1.bind(var4)();
 42:
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)(var3);
                var1 = var1.windowSize;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'WindowStore';
    var9['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleWindowInit(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var7 = _closure1_slot9;
            var4 = var7.has;
            var3 = var1.windowId;
            var3 = var4.bind(var7)(var3);
            var4 = !var3;
            var3 = 'Window initialized multiple times';
            var3 = var5.bind(var6)(var4, var3);
            var12 = var1.width;
            var11 = var1.height;
            var9 = var1.isElementFullscreen;
            var3 = var1.focused;
            var8 = var1.visible;
            var7 = _closure1_slot9;
            var6 = var7.set;
            var5 = var1.windowId;
            var4 = {};
            var10 = {};
            var10['width'] = var12;
            var10['height'] = var11;
            var4['windowSize'] = var10;
            var4['isElementFullscreen'] = var9;
            var4['focused'] = var3;
            var4['visible'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            if(!var3) { _fun0009_ip = 157; continue _fun0009 }
 147:
            var1 = var1.windowId;
            _closure1_slot8 = var1;
 157:
            var1 = true;
            return var1;
        }
    };
    var2['WINDOW_INIT'] = var7;
    var7 = function handleWindowFullscreenChange(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot11;
            var3 = var6.windowId;
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var3 = var7.isElementFullscreen;
            var1 = var6.isElementFullscreen;
            var1 = var3 !== var1;
            if(!var1) { _fun0010_ip = 92; continue _fun0010 }
 42:
            var5 = _closure1_slot9;
            var4 = var5.set;
            var3 = var6.windowId;
            var2 = {};
            var9 = var2;
            var8 = var7;
            var7 = copyDataProperties(var9, var8);
            var7 = var6.isElementFullscreen;
            var6 = 'isElementFullscreen';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
 92:
            return var1;
        }
    };
    var2['WINDOW_FULLSCREEN_CHANGE'] = var7;
    var7 = function handleWindowFocus(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot11;
            var3 = var6.windowId;
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var3 = var7.focused;
            var1 = var6.focused;
            var1 = var3 !== var1;
            if(!var1) { _fun0011_ip = 111; continue _fun0011 }
 42:
            var3 = var6.focused;
            if(!var3) { _fun0011_ip = 61; continue _fun0011 }
 51:
            var3 = var6.windowId;
            _closure1_slot8 = var3;
 61:
            var5 = _closure1_slot9;
            var4 = var5.set;
            var3 = var6.windowId;
            var2 = {};
            var9 = var2;
            var8 = var7;
            var7 = copyDataProperties(var9, var8);
            var7 = var6.focused;
            var6 = 'focused';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
 111:
            return var1;
        }
    };
    var2['WINDOW_FOCUS'] = var7;
    var7 = function handleWindowResize(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot11;
            var3 = var6.windowId;
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var1 = var7.windowSize;
            var3 = var1.width;
            var1 = var6.width;
            var1 = var3 !== var1;
            if(var1) { _fun0012_ip = 66; continue _fun0012 }
 46:
            var3 = var7.windowSize;
            var4 = var3.height;
            var3 = var6.height;
            var1 = var4 !== var3;
 66:
            if(!var1) { _fun0012_ip = 133; continue _fun0012 }
 69:
            var5 = _closure1_slot9;
            var4 = var5.set;
            var3 = var6.windowId;
            var2 = {};
            var10 = var2;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var7 = {};
            var8 = var6.width;
            var7['width'] = var8;
            var6 = var6.height;
            var7['height'] = var6;
            var6 = 'windowSize';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
 133:
            return var1;
        }
    };
    var2['WINDOW_RESIZED'] = var7;
    var7 = function handleWindowUnload(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot9;
            var4 = var5.delete;
            var3 = var1.windowId;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot8;
            var1 = var1.windowId;
            if(!(var3 === var1)) { _fun0013_ip = 46; continue _fun0013 }
 40:
            var1 = null;
            _closure1_slot8 = var1;
 46:
            var1 = true;
            return var1;
        }
    };
    var2['WINDOW_UNLOAD'] = var7;
    var7 = function handleWindowVisibilityChange(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot11;
            var3 = var6.windowId;
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var3 = var7.visible;
            var1 = var6.visible;
            var1 = var3 !== var1;
            if(!var1) { _fun0014_ip = 92; continue _fun0014 }
 42:
            var5 = _closure1_slot9;
            var4 = var5.set;
            var3 = var6.windowId;
            var2 = {};
            var9 = var2;
            var8 = var7;
            var7 = copyDataProperties(var9, var8);
            var7 = var6.visible;
            var6 = 'visible';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            var1 = true;
 92:
            return var1;
        }
    };
    var2['WINDOW_VISIBILITY_CHANGE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var2;
    var2 = new var14[var9](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var7;
    var7 = 10;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var7 = 9;
    var8 = var6[var7];
    var7 = var6.paths;
    var8 = var9.bind(var1)(var8, var7);
    var7 = var8.then;
    var4 = function(arg1) {
        var1 = arg1;
        var3 = var1.addExtraAnalyticsDecorator;
        var1 = undefined;
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/web/WindowStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();