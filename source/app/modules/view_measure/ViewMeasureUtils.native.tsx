// app/modules/view_measure/ViewMeasureUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = function measureView(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.measure;
            var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                var3 = _closure3_slot0;
                var2 = {};
                var1 = arg1;
                var2['x'] = var1;
                var1 = arg2;
                var2['y'] = var1;
                var1 = arg3;
                var2['width'] = var1;
                var1 = arg4;
                var2['height'] = var1;
                var1 = arg5;
                var2['pageX'] = var1;
                var1 = arg6;
                var2['pageY'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot0 = var6;
    var5 = function measureViewInWindow(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.measureInWindow;
            var1 = function(arg1, arg2, arg3, arg4) {
                var3 = _closure3_slot0;
                var2 = {};
                var1 = arg1;
                var2['x'] = var1;
                var1 = arg2;
                var2['y'] = var1;
                var1 = arg3;
                var2['width'] = var1;
                var1 = arg4;
                var2['height'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot1 = var5;
    var4 = function measureViewInView(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure2_slot0;
            var4 = var5.measureLayout;
            var3 = _closure2_slot1;
            var2 = function(arg1, arg2, arg3, arg4) {
                var3 = _closure3_slot0;
                var2 = {};
                var1 = arg1;
                var2['x'] = var1;
                var1 = arg2;
                var2['y'] = var1;
                var1 = arg3;
                var2['width'] = var1;
                var1 = arg4;
                var2['height'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = function() {
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var7 = dependencyMap;
    var1 = 0;
    var8 = var7[var1];
    var7 = require;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/view_measure/ViewMeasureUtils.native.tsx';
    var7 = var8.bind(var9)(var7);
    var3['measureView'] = var6;
    var6 = function measureViewRef(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.current;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = undefined;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['measureViewRef'] = var6;
    var3['measureViewInWindow'] = var5;
    var5 = function measureViewRefInWindow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.current;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = _closure1_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = undefined;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['measureViewRefInWindow'] = var5;
    var3['measureViewInView'] = var4;
    var2 = function measureViewRefInView(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.current;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 5; continue _fun0003 }
case 3:
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = arg2;
            var1 = var3.bind(var2)(var4, var1);
            _fun0003_ip = 6; continue _fun0003;
case 5:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.resolve;
            var2 = undefined;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['measureViewRefInView'] = var2;
    return var1;
})();