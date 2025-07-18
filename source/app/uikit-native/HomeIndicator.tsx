// app/uikit-native/HomeIndicator.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function createStackEntry(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.prefersHidden;
        var1['prefersHidden'] = var3;
        var2 = var2.prefersDeferringSystemGestures;
        var1['prefersDeferringSystemGestures'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var5 = var7[var2];
    var2 = native4;
    var5 = var2.bind(var1)(var5);
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.create;
    var2 = function() {
        var1 = {};
        var2 = false;
        var1['autoHideHomeIndicator'] = var2;
        return var1;
    };
    var2 = var8.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var5 = var5.Component;
    var4 = function(arg1) {
        var5 = function HomeIndicator(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = null;
                var1['_stackEntry'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot4;
        var1 = {};
        var2 = 'componentDidMount';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var4 = _closure2_slot0;
            var3 = var4.pushStackEntry;
            var1 = var2.props;
            var1 = var3.bind(var4)(var1);
            var2['_stackEntry'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'componentDidUpdate';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var5 = _closure2_slot0;
            var4 = var5.replaceStackEntry;
            var3 = var2._stackEntry;
            var1 = var2.props;
            var1 = var4.bind(var5)(var3, var1);
            var2['_stackEntry'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'componentWillUnmount';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var4 = _closure2_slot0;
            var3 = var4.popStackEntry;
            var1 = var2._stackEntry;
            var1 = var3.bind(var4)(var1);
            var1 = null;
            var2['_stackEntry'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'render';
        var1['key'] = var6;
        var6 = function value() {
            var1 = null;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var6 = {};
        var1 = 'pushStackEntry';
        var6['key'] = var1;
        var1 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var3 = _closure2_slot0;
            var4 = var3._propsStack;
            var2 = var4.push;
            var2 = var2.bind(var4)(var1);
            var2 = var3._updatePropsStack;
            var2 = var2.bind(var3)();
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(4);
        var1[0] = var6;
        var6 = {};
        var8 = 'popStackEntry';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 != var4;
                var1 = -1;
                var5 = var1;
                if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 21:
                var2 = _closure2_slot0;
                var3 = var2._propsStack;
                var2 = var3.indexOf;
                var5 = var2.bind(var3)(var4);
 45:
                if(!(var1 !== var5)) { _fun0003_ip = 87; continue _fun0003 }
 49:
                var2 = _closure2_slot0;
                var4 = var2._propsStack;
                var3 = var4.splice;
                var1 = 1;
                var1 = var3.bind(var4)(var5, var1);
                var1 = var2._updatePropsStack;
                var1 = var1.bind(var2)();
 87:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'replaceStackEntry';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                var2 = null;
                var4 = var2 != var6;
                var2 = -1;
                var3 = var2;
                if(!var4) { _fun0004_ip = 62; continue _fun0004 }
 38:
                var4 = _closure2_slot0;
                var5 = var4._propsStack;
                var4 = var5.indexOf;
                var3 = var4.bind(var5)(var6);
 62:
                if(!(var2 !== var3)) { _fun0004_ip = 83; continue _fun0004 }
 66:
                var2 = _closure2_slot0;
                var2 = var2._propsStack;
                var2[var3] = var1;
 83:
                var3 = _closure2_slot0;
                var2 = var3._updatePropsStack;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var6['value'] = var8;
        var1[2] = var6;
        var6 = {};
        var8 = '_updatePropsStack';
        var6['key'] = var8;
        var7 = function value() {
            var2 = global;
            var5 = var2.clearImmediate;
            var3 = _closure2_slot0;
            var4 = var3._updateImmediate;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var2.setImmediate;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1._propsStack;
                    var1 = var1._propsStack;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var3 = var2[var1];
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 45; continue _fun0005 }
 43:
                    var3 = {};
 45:
                    var5 = var3.prefersHidden;
                    var1 = undefined;
                    var2 = var1 !== var5;
                    if(!var2) { _fun0005_ip = 63; continue _fun0005 }
 60:
                    var2 = var5;
 63:
                    var _closure4_slot0 = var2;
                    var3 = var3.prefersDeferringSystemGestures;
                    var6 = var1 !== var3;
                    if(!var6) { _fun0005_ip = 83; continue _fun0005 }
 80:
                    var6 = var3;
 83:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = 8;
                    var8 = var7[var8];
                    var9 = var5.bind(var1)(var8);
                    var8 = var9.batchUpdates;
                    var4 = function() {
                        var3 = _closure1_slot9;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = _closure4_slot0;
                        var1['autoHideHomeIndicator'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var8.bind(var9)(var4);
                    var4 = 9;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isAndroid;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0005_ip = 203; continue _fun0005 }
 146:
                    var4 = _closure1_slot8;
                    var4 = var4.DCDHomeIndicator;
                    if(!var4) { _fun0005_ip = 239; continue _fun0005 }
 159:
                    var4 = _closure1_slot8;
                    var7 = var4.DCDHomeIndicator;
                    var5 = var7.setPrefersAutoHidden;
                    var5 = var5.bind(var7)(var2);
                    var5 = var4.DCDHomeIndicator;
                    var4 = var5.setPrefersDeferringSystemGestures;
                    var4 = var4.bind(var5)(var6);
                    _fun0005_ip = 239; continue _fun0005;
 203:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.setNavigationBarVisible;
                    var2 = !var2;
                    var2 = var3.bind(var4)(var2);
 239:
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2);
            var3['_updateImmediate'] = var2;
            return var1;
        };
        var6['value'] = var7;
        var1[3] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = {'prefersHidden': false, 'prefersDeferringSystemGestures': false};
    var4['defaultProps'] = var5;
    var5 = new Array(0);
    var4['_propsStack'] = var5;
    var5 = null;
    var4['_updateImmediate'] = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/HomeIndicator.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useHomeIndicatorStore'] = var2;
    return var1;
})();