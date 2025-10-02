// app/modules/action_sheet/native/ActionSheetStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var2 = var2.Array;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot5 = var2;
    var2 = function setContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.content;
            var7 = var1.key;
            var4 = var1.impressionName;
            var3 = var1.impressionProperties;
            var2 = var1.backdropKind;
            var6 = var1.stackingBehavior;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = 'replaceTopSheet';
case 6:
            var5 = {};
            var5['content'] = var8;
            var5['key'] = var7;
            var5['impressionName'] = var4;
            var5['impressionProperties'] = var3;
            var5['backdropKind'] = var2;
            var2 = _closure1_slot5;
            var4 = var2.length;
            var2 = 3;
            var2 = var4 < var2;
            var4 = 'replaceAll';
            if(!(var4 !== var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = 'stack';
            if(!(var4 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            var7 = _closure1_slot5;
            var6 = var7.slice;
            var4 = 0;
            var2 = -1;
            var4 = var6.bind(var7)(var4, var2);
            var2 = var4.concat;
            var2 = var2.bind(var4)(var5);
            _fun0002_ip = 13; continue _fun0002;
case 12:
            var10 = _closure1_slot5;
            var4 = new Array(1);
            var9 = 0;
            var11 = var4;
            var7 = arraySpread(var11, var10, var9);
            var4[var7] = var5;
            var6 = 1;
            var6 = var7 + var6;
            var2 = var4;
case 13:
            _fun0002_ip = 14; continue _fun0002;
case 8:
            var4 = new Array(1);
            var4[0] = var5;
            var2 = var4;
case 14:
            _closure1_slot5 = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function clearContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 == var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = _closure1_slot5;
            var5 = var6.slice;
            var4 = 0;
            var2 = -1;
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot5 = var2;
case 15:
            var4 = _closure1_slot5;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _closure1_slot5 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ActionSheetStore(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot0;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 19:
                var1 = var3.bind(var4)(var5, var1);
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.at;
                        var1 = -1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var1 = var2.content;
case 20:
                        return var1;
                    }
                };
                var1['getContent'] = var3;
                var3 = function() {
                    var1 = _closure1_slot5;
                    return var1;
                };
                var1['getStack'] = var3;
                var3 = function() {
                    var1 = _closure1_slot5;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var1['isOpen'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure1_slot5;
                        var2 = var3.at;
                        var1 = -1;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var1 = var2.key;
case 20:
                        return var1;
                    }
                };
                var1['getKey'] = var2;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'impressionName';
        var5['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.at;
                var1 = -1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 22; continue _fun0007 }
case 21:
                var1 = var2.impressionName;
case 22:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'impressionProperties';
        var5['key'] = var7;
        var7 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.at;
                var1 = -1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 21:
                var1 = var2.impressionProperties;
case 22:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'backdropKind';
        var5['key'] = var7;
        var6 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.at;
                var1 = -1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0009_ip = 22; continue _fun0009 }
case 21:
                var1 = var2.backdropKind;
case 22:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ActionSheetStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleShowActionSheet(arg1) {
        var3 = _closure1_slot6;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['SHOW_ACTION_SHEET'] = var8;
    var8 = function handleShowActionSheetQuickSwitcher(arg1) {
        var3 = _closure1_slot6;
        var2 = {};
        var1 = 'QuickSwitcher';
        var2['key'] = var1;
        var4 = arg1;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['SHOW_ACTION_SHEET_QUICK_SWITCHER'] = var8;
    var8 = function handleHideActionSheet(arg1) {
        var1 = arg1;
        var3 = var1.key;
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['HIDE_ACTION_SHEET'] = var8;
    var8 = function handleHideAllActionSheets() {
        var1 = new Array(0);
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var2['HIDE_ALL_ACTION_SHEETS'] = var8;
    var4 = function handleHideActionSheetQuickSwitcher() {
        var3 = _closure1_slot7;
        var1 = undefined;
        var2 = 'QuickSwitcher';
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['HIDE_ACTION_SHEET_QUICK_SWITCHER'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/ActionSheetStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();