// app/modules/routing/native/BackPressManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = function handleBackPress() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.hideContextMenu;
        var3 = var3.bind(var4)();
        var1 = _closure1_slot10;
        var1 = var1.bind(var2)();
        var1 = !var1;
        var1 = !var1;
        return var1;
    };
    var _closure1_slot9 = var2;
    var1 = function maybeDismissExpressionPicker() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 7;
            var3 = var1[var3];
            var7 = undefined;
            var5 = var4.bind(var7)(var3);
            var3 = var5.getKeyboardType;
            var3 = var3.bind(var5)();
            var8 = 8;
            var1 = var1[var8];
            var1 = var4.bind(var7)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var3 !== var1;
            if(!var1) { _fun0002_ip = 126; continue _fun0002 }
 66:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 9;
            var2 = var5[var2];
            var4 = var6.bind(var7)(var2);
            var3 = var4.setKeyboardType;
            var2 = {};
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.KeyboardTypes;
            var5 = var5.SYSTEM;
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 126:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BackHandler;
    var _closure1_slot7 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function BackPressManager() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot8;
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0004_ip = 64; continue _fun0004 }
 40:
                var2 = var3._initializeGlobalBackPressLisenter;
                var2 = var2.bind(var3)();
                var2 = var3._initializeNavigatorSideEffects;
                var2 = var2.bind(var3)();
 64:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = '_initializeGlobalBackPressLisenter';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot7;
            var3 = var4.addEventListener;
            var2 = _closure1_slot9;
            var1 = 'hardwareBackPress';
            var2 = var3.bind(var4)(var1, var2);
            var1 = this;
            var1['_backPressEventSubscription'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_initializeNavigatorSideEffects';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.getRootNavigationRef;
                var7 = var2.bind(var5)();
                var _closure3_slot1 = var7;
                var2 = null;
                var6 = var2 == var7;
                var5 = undefined;
                if(var6) { _fun0005_ip = 69; continue _fun0005 }
 59:
                var6 = var7.getCurrentRoute;
                var5 = var6.bind(var7)();
 69:
                var3['_navigationRouteCurrent'] = var5;
                var5 = var2 == var7;
                var2 = undefined;
                if(var5) { _fun0005_ip = 107; continue _fun0005 }
 84:
                var6 = var7.addListener;
                var5 = 'state';
                var4 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1._navigationRouteCurrent;
                        var1 = _closure3_slot1;
                        var5 = null;
                        var6 = var5 == var1;
                        var1 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 44; continue _fun0006 }
 30:
                        var7 = _closure3_slot1;
                        var6 = var7.getCurrentRoute;
                        var2 = var6.bind(var7)();
 44:
                        if(!(var3 !== var2)) { _fun0006_ip = 96; continue _fun0006 }
 48:
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var5 = var5 == var2;
                        var2 = undefined;
                        if(var5) { _fun0006_ip = 79; continue _fun0006 }
 65:
                        var5 = _closure3_slot1;
                        var4 = var5.getCurrentRoute;
                        var2 = var4.bind(var5)();
 79:
                        var3['_navigationRouteCurrent'] = var2;
                        var2 = _closure1_slot10;
                        var2 = var2.bind(var1)();
 96:
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5, var4);
 107:
                var3['_navigationRouteChangeSubscription'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = this;
                var4 = var3._backPressEventSubscription;
                var1 = null;
                if(!(var1 != var4)) { _fun0007_ip = 25; continue _fun0007 }
 15:
                var2 = var4.remove;
                var2 = var2.bind(var4)();
 25:
                var2 = var3._navigationRouteChangeSubscription;
                if(!(var1 != var2)) { _fun0007_ip = 45; continue _fun0007 }
 35:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
 45:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/native/BackPressManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleBackPress'] = var2;
    return var1;
})();