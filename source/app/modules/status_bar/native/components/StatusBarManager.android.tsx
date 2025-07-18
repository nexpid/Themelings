// app/modules/status_bar/native/components/StatusBarManager.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusBar;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function StatusBarManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['propsStack'] = var2;
            var2 = null;
            var3['updateImmediate'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'pushStackEntry';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var2 = arg1;
            var3 = this;
            var1 = {};
            var4 = var2.hidden;
            var1['hidden'] = var4;
            var2 = var2.barStyle;
            var1['barStyle'] = var2;
            var4 = var3.propsStack;
            var2 = var4.push;
            var2 = var2.bind(var4)(var1);
            var2 = var3.updatePropsStack;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'popStackEntry';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = arg1;
                var2 = this;
                var1 = null;
                var3 = var1 != var6;
                var1 = -1;
                var5 = var1;
                if(!var3) { _fun0001_ip = 41; continue _fun0001 }
 24:
                var4 = var2.propsStack;
                var3 = var4.indexOf;
                var5 = var3.bind(var4)(var6);
 41:
                if(!(var1 !== var5)) { _fun0001_ip = 76; continue _fun0001 }
 45:
                var4 = var2.propsStack;
                var3 = var4.splice;
                var1 = 1;
                var1 = var3.bind(var4)(var5, var1);
                var1 = var2.updatePropsStack;
                var1 = var1.bind(var2)();
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'replaceStackEntry';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = arg1;
                var2 = arg2;
                var3 = this;
                var1 = {};
                var4 = var2.hidden;
                var1['hidden'] = var4;
                var2 = var2.barStyle;
                var1['barStyle'] = var2;
                var2 = null;
                var5 = var2 != var7;
                var2 = -1;
                var4 = var2;
                if(!var5) { _fun0002_ip = 68; continue _fun0002 }
 51:
                var6 = var3.propsStack;
                var5 = var6.indexOf;
                var4 = var5.bind(var6)(var7);
 68:
                if(!(var2 !== var4)) { _fun0002_ip = 82; continue _fun0002 }
 72:
                var2 = var3.propsStack;
                var2[var4] = var1;
 82:
                var2 = var3.updatePropsStack;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updatePropsStack';
        var1['key'] = var6;
        var5 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var4 = global;
            var6 = var4.clearImmediate;
            var5 = var3.updateImmediate;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var4 = var4.setImmediate;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.merge;
                var2 = new Array(1);
                var8 = {'hidden': false, 'barStyle': 'default'};
                var2[0] = var8;
                var8 = _closure3_slot0;
                var11 = var8.propsStack;
                var10 = 1;
                var12 = var2;
                var8 = arraySpread(var12, var11, var10);
                var12 = var6;
                var11 = var2;
                var10 = var7;
                var2 = apply(var12, var11, var10);
                var7 = var2.barStyle;
                var2 = var2.hidden;
                var6 = _closure1_slot4;
                var3 = var6.setBarStyle;
                var3 = var3.bind(var6)(var7);
                var3 = 4;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.setStatusBarVisible;
                var2 = !var2;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var1)(var2);
            var3['updateImmediate'] = var2;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/status_bar/native/components/StatusBarManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();