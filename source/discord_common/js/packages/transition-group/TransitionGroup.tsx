// discord_common/js/packages/transition-group/TransitionGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 2; continue _fun0001;
case 5:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 2:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = '' + var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 10: // try_start_0
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
case 11: // try_end0
            _fun0002_ip = 12; continue _fun0002;
case 13: // catch_target0
            CatchBlockStart(arg_register=1);
case 12:
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var4 = var4.Component;
    var2 = function(arg1) {
        var5 = function TransitionGroup(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var7, var5);
                var12 = new Array(1);
                var12[0] = var3;
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)();
                if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0003_ip = 16; continue _fun0003;
case 14:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
case 16:
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot0 = var1;
                var5 = {};
                var1['_keyChildMapping'] = var5;
                var2 = function(arg1, arg2) {
                    var1 = _closure3_slot0;
                    var3 = var1._keyChildMapping;
                    var2 = arg2;
                    var1 = arg1;
                    var3[var1] = var2;
                    var1 = undefined;
                    return var1;
                };
                var1['addChildRef'] = var2;
                var2 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.getChildMapping;
                var3 = var3.children;
                var3 = var4.bind(var5)(var3);
                var2['children'] = var3;
                var3 = true;
                var2['firstRender'] = var3;
                var1['state'] = var2;
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var16 = var3;
                var2 = new var16[var2](var15);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['_currentlyTransitioningKeys'] = var2;
                var2 = new Array(0);
                var1['_keysToEnter'] = var2;
                var2 = new Array(0);
                var1['_keysToLeave'] = var2;
                var2 = false;
                var1['_isMounted'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'componentDidMount';
        var6['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var7 = this;
                var1 = true;
                var7['_isMounted'] = var1;
                var1 = var7.state;
                var6 = var1.children;
                var1 = var7.props;
                var1 = var1.transitionAppear;
                if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var4 = var6;
                for(var1 in var4)
case 19:
                {
case 20:
                    var9 = var1;
                    var8 = var6[var9];
                    if(!var8) { _fun0004_ip = 19; continue _fun0004 }
case 21:
                    var8 = var7.performAppear;
                    var8 = var8.bind(var7)(var9);
                    _fun0004_ip = 19; continue _fun0004;
                }
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(10);
        var2[0] = var6;
        var6 = {};
        var7 = 'componentWillUnmount';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = false;
            var1['_isMounted'] = var2;
            var2 = {};
            var1['_keyChildMapping'] = var2;
            var2 = var1.state;
            var1 = {};
            var2['children'] = var1;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'componentDidUpdate';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var1.children;
                var2 = var4.props;
                var2 = var2.children;
                if(!(var3 === var2)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var3 = var1.transitionAppear;
                var2 = var4.props;
                var2 = var2.transitionAppear;
                if(!(var3 === var2)) { _fun0005_ip = 22; continue _fun0005 }
case 19:
                var2 = var1.transitionLeave;
                var1 = var4.props;
                var1 = var1.transitionLeave;
                if(!(var2 !== var1)) { _fun0005_ip = 24; continue _fun0005 }
case 22:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 7;
                var2 = var2[var8];
                var7 = undefined;
                var5 = var3.bind(var7)(var2);
                var3 = var5.getChildMapping;
                var2 = var4.props;
                var2 = var2.children;
                var5 = var3.bind(var5)(var2);
                var2 = arg2;
                var3 = var2.children;
                var2 = var4.props;
                var2 = var2.transitionEnter;
                if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var2 = var4._keysToEnter;
                var6 = var2.length;
                var2 = 0;
                if(!(var6 > var2)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var2 = new Array(0);
                var4['_keysToEnter'] = var2;
                _fun0005_ip = 27; continue _fun0005;
case 25:
                var6 = var4._enqueueTransitions;
                var2 = var4._keysToEnter;
                var2 = var6.bind(var4)(var5, var3, var2);
case 27:
                var2 = var4.props;
                var6 = var2.transitionLeave;
                var2 = var4._enqueueTransitions;
                if(var6) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var9 = new Array(0);
                var6 = var2.bind(var4)(var3, var5, var9);
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var6 = var6.bind(var7)(var1);
                var1 = var6.mergeChildMappings;
                var8 = var1.bind(var6)(var3, var5);
                var7 = var9.length;
                var6 = 0;
                var10 = var6 < var7;
                var1 = 0;
                if(!var10) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var10 = var9[var1];
                var10 = delete var8[var10];
                var1 = var1 + 1;
                if(var1 < var7) { _fun0005_ip = 32; continue _fun0005 }
case 31:
                var1 = var4._isMounted;
                if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var7 = var4.setState;
                var1 = {};
                var1['children'] = var8;
                var1 = var7.bind(var4)(var1);
case 33:
                var1 = var4._keysToLeave;
                var1 = var1.length;
                if(!(var1 > var6)) { _fun0005_ip = 24; continue _fun0005 }
case 35:
                var1 = new Array(0);
                var4['_keysToLeave'] = var1;
                _fun0005_ip = 24; continue _fun0005;
case 29:
                var1 = var4._keysToLeave;
                var1 = var2.bind(var4)(var3, var5, var1);
case 24:
                var1 = var4._keysToEnter;
                var1 = var1.length;
                var2 = 0;
                if(!(var1 > var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var5 = var4._keysToEnter;
                var1 = new Array(0);
                var4['_keysToEnter'] = var1;
                var3 = var5.forEach;
                var1 = var4.performEnter;
                var1 = var3.bind(var5)(var1, var4);
case 36:
                var1 = var4._keysToLeave;
                var1 = var1.length;
                if(!(var1 > var2)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var3 = var4._keysToLeave;
                var1 = new Array(0);
                var4['_keysToLeave'] = var1;
                var2 = var3.forEach;
                var1 = var4.performLeave;
                var1 = var2.bind(var3)(var1, var4);
case 38:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = '_enqueueTransitions';
        var6['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var6 = this;
                var4 = var9;
                for(var1 in var4)
case 4:
                {
case 40:
                    var11 = var1;
                    var12 = var8;
                    if(!var12) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var10 = var8.hasOwnProperty;
                    var12 = var10.bind(var8)(var11);
case 41:
                    var10 = var9[var11];
                    var10 = !var10;
                    if(var10) { _fun0006_ip = 21; continue _fun0006 }
case 15:
                    var10 = var12;
case 21:
                    if(var10) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var13 = var6._currentlyTransitioningKeys;
                    var12 = var13.has;
                    var10 = var12.bind(var13)(var11);
case 43:
                    if(var10) { _fun0006_ip = 4; continue _fun0006 }
case 45:
                    var10 = var7.push;
                    var10 = var10.bind(var7)(var11);
                    _fun0006_ip = 4; continue _fun0006;
                }
case 46:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = '_perform';
        var6['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var6 = arguments[3];
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var5;
                var1 = arg3;
                var _closure3_slot2 = var1;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 47; continue _fun0007 }
case 18:
                var6 = false;
case 47:
                var _closure3_slot3 = var6;
                var7 = var3._currentlyTransitioningKeys;
                var6 = var7.add;
                var6 = var6.bind(var7)(var5);
                var4 = function callback() {
                    var5 = _closure3_slot0;
                    var4 = var5._handleDonePerform;
                    var3 = _closure3_slot1;
                    var2 = _closure3_slot2;
                    var1 = _closure3_slot3;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var3 = var3._keyChildMapping;
                var3 = var3[var5];
                var6 = null;
                if(!(var6 != var3)) { _fun0007_ip = 48; continue _fun0007 }
case 17:
                var5 = var3[var2];
                if(!(var6 == var5)) { _fun0007_ip = 49; continue _fun0007 }
case 48:
                var5 = var4.bind(var1)();
                _fun0007_ip = 50; continue _fun0007;
case 49:
                var2 = var3[var2];
                var2 = var2.bind(var3)(var4);
case 50:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = '_handleDonePerform';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var7 = arguments[2];
                var3 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var7 = false;
case 51:
                var5 = var3._keyChildMapping;
                var8 = var5[var4];
                var5 = null;
                var9 = var5 != var8;
                if(!var9) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var10 = var8[var6];
                var9 = var5 != var10;
case 53:
                if(!var9) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var6 = var8[var6];
                var6 = var6.bind(var8)();
case 55:
                var8 = var3._currentlyTransitioningKeys;
                var6 = var8.delete;
                var6 = var6.bind(var8)(var4);
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 7;
                var6 = var9[var6];
                var9 = var8.bind(var1)(var6);
                var8 = var9.getChildMapping;
                var6 = var3.props;
                var6 = var6.children;
                var6 = var8.bind(var9)(var6);
                if(var7) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var7 = var5 != var6;
                if(!var7) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var8 = var6.hasOwnProperty;
                var7 = var8.bind(var6)(var4);
case 59:
                if(var7) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var7 = var3.performLeave;
                var7 = var7.bind(var3)(var4);
                _fun0008_ip = 61; continue _fun0008;
case 57:
                if(!(var5 != var6)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var5 = var6.hasOwnProperty;
                var5 = var5.bind(var6)(var4);
                if(var5) { _fun0008_ip = 65; continue _fun0008 }
case 63:
                var5 = var3.setState;
                var2 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.children;
                    var3 = _closure3_slot0;
                    var1 = var5[var3];
                    var1 = {};
                    var4 = _closure1_slot2;
                    var6 = new Array(1);
                    var6[0] = var3;
                    var3 = var6.map;
                    var2 = _closure1_slot9;
                    var3 = var3.bind(var6)(var2);
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5, var3);
                    var1['children'] = var2;
                    return var1;
                };
                var2 = var5.bind(var3)(var2);
                _fun0008_ip = 61; continue _fun0008;
case 65:
                var2 = var3.performEnter;
                var2 = var2.bind(var3)(var4);
case 61:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'performAppear';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5._perform;
            var3 = arg1;
            var2 = 'componentWillAppear';
            var1 = 'componentDidAppear';
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'performEnter';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var4 = var5._perform;
            var3 = arg1;
            var2 = 'componentWillEnter';
            var1 = 'componentDidEnter';
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'performLeave';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var6 = this;
            var5 = var6._perform;
            var10 = arg1;
            var9 = 'componentWillLeave';
            var8 = 'componentDidLeave';
            var7 = true;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'render';
        var6['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.props;
                var4 = var3.childFactory;
                var _closure3_slot1 = var4;
                var5 = var3.component;
                var3 = var2.state;
                var3 = var3.children;
                var _closure3_slot2 = var3;
                var4 = new Array(0);
                var _closure3_slot3 = var4;
                var11 = function _loop(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var7 = arg1;
                        var _closure4_slot0 = var7;
                        var2 = _closure3_slot2;
                        var10 = var2[var7];
                        var11 = null;
                        var2 = var11 != var10;
                        if(!var2) { _fun0010_ip = 6; continue _fun0010 }
case 66:
                        var4 = _closure1_slot8;
                        var3 = var4.isValidElement;
                        var2 = var3.bind(var4)(var10);
case 6:
                        if(!var2) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                        var3 = _closure3_slot3;
                        var2 = var3.push;
                        var6 = _closure1_slot8;
                        var5 = var6.cloneElement;
                        var9 = _closure3_slot1;
                        var4 = var10;
                        if(!(var11 != var9)) { _fun0010_ip = 49; continue _fun0010 }
case 69:
                        var9 = _closure3_slot1;
                        var1 = undefined;
                        var4 = var9.bind(var1)(var10);
case 49:
                        var1 = {};
                        var8 = function ref(arg1) {
                            var4 = _closure3_slot0;
                            var3 = var4.addChildRef;
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var1['ref'] = var8;
                        var1['key'] = var7;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
case 67:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var3;
                var3 = undefined;
                for(var6 in var9)
case 11:
                {
case 70:
                    var12 = var6;
                    var12 = var11.bind(var3)(var12);
                    _fun0009_ip = 11; continue _fun0009;
                }
case 71:
                var3 = {};
                var14 = var2.props;
                var15 = var3;
                var2 = copyDataProperties(var15, var14);
                var _closure3_slot4 = var3;
                var2 = global;
                var7 = var2.Object;
                var6 = var7.keys;
                var2 = _closure2_slot0;
                var2 = var2.defaultProps;
                var6 = var6.bind(var7)(var2);
                var2 = var6.forEach;
                var1 = function(arg1) {
                    var2 = _closure3_slot4;
                    var1 = arg1;
                    var1 = delete var2[var1];
                    return var1;
                };
                var1 = var2.bind(var6)(var1);
                var2 = _closure1_slot8;
                var1 = var2.createElement;
                var1 = var1.bind(var2)(var5, var3, var4);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'getDerivedStateFromProps';
        var6['key'] = var7;
        var1 = function getDerivedStateFromProps(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg2;
                var6 = var1.children;
                var4 = var1.firstRender;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 7;
                var1 = var1[var8];
                var7 = undefined;
                var5 = var2.bind(var7)(var1);
                var2 = var5.getChildMapping;
                var1 = arg1;
                var1 = var1.children;
                var5 = var2.bind(var5)(var1);
                var1 = {};
                var2 = var5;
                if(var4) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var4 = var4.bind(var7)(var3);
                var3 = var4.mergeChildMappings;
                var2 = var3.bind(var4)(var6, var5);
case 72:
                var1['children'] = var2;
                var2 = false;
                var1['firstRender'] = var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {'component': 'span', 'transitionAppear': true, 'transitionLeave': true, 'transitionEnter': true, 'childFactory': null};
    var2['defaultProps'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/transition-group/TransitionGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var3['TransitionGroup'] = var2;
    return var1;
})();