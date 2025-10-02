// app/components_native/common/SwipeableFastList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var2.Component;
    var2 = function(arg1) {
        var4 = function SwipeableFastList(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = var1.props;
                var3 = var3.bounceFirstRowOnMount;
                var1['_shouldBounceFirstRowOnMount'] = var3;
                var3 = null;
                var1['_openRowKey'] = var3;
                var4 = {};
                var1['_refs'] = var4;
                var1['_bounceTimeout'] = var3;
                var3 = function(arg1, arg2, arg3) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var8 = arg1;
                        var7 = arg2;
                        var _closure4_slot0 = var8;
                        var _closure4_slot1 = var7;
                        var3 = _closure3_slot0;
                        var2 = var3.props;
                        var4 = var2.renderQuickActions;
                        var _closure4_slot2 = var4;
                        var6 = var2.renderItem;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var9 = var2.concat;
                        var4 = '';
                        var2 = ':';
                        var2 = var9.bind(var4)(var8, var2, var7);
                        var _closure4_slot3 = var2;
                        var2 = false;
                        var _closure4_slot4 = var2;
                        var3 = var3._shouldBounceFirstRowOnMount;
                        if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var1 = _closure3_slot0;
                        var1['_shouldBounceFirstRowOnMount'] = var2;
                        var1 = true;
                        _closure4_slot4 = var1;
case 9:
                        var4 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var9 = function renderRightActions() {
                            var4 = _closure4_slot2;
                            var3 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var1['renderRightActions'] = var9;
                        var9 = function ref(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var5 = arg1;
                                var2 = _closure3_slot0;
                                var3 = var2._refs;
                                var2 = _closure4_slot3;
                                var3[var2] = var5;
                                var3 = null;
                                var2 = var3 != var5;
                                if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                var2 = _closure4_slot4;
case 11:
                                if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                var2 = _closure3_slot0;
                                var4 = var2.bounceSwipeable;
                                var4 = var4.bind(var2)(var5);
                                var2 = var2.props;
                                var2 = var2.onBounceSwipable;
                                if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var1 = var2.onBounceSwipable;
                                var1 = var1.bind(var2)();
case 13:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1['ref'] = var9;
                        var9 = 8;
                        var1['overshootFriction'] = var9;
                        var9 = function onSwipeableWillOpen() {
                            var3 = _closure3_slot0;
                            var2 = var3.handleOpen;
                            var1 = _closure4_slot3;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['onSwipeableWillOpen'] = var9;
                        var5 = function onSwipeableClose() {
                            var3 = _closure3_slot0;
                            var2 = var3.handleClose;
                            var1 = _closure4_slot3;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['onSwipeableClose'] = var5;
                        var5 = true;
                        var1['useNativeAnimations'] = var5;
                        var5 = arg3;
                        var5 = var6.bind(var3)(var8, var7, var5);
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1['renderRow'] = var3;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.closeOpenRow;
                        var2 = var2.bind(var1)();
                        var1 = var1.props;
                        var3 = var1.onScroll;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScroll'] = var2;
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
        var1 = 'componentWillUnmount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var3 = var1._bounceTimeout;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 12; continue _fun0006 }
case 18:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = var1._bounceTimeout;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'bounceSwipeable';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var4 = var3._bounceTimeout;
                var1 = null;
                if(!(var1 != var4)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                var1 = global;
                var5 = var1.clearTimeout;
                var4 = var3._bounceTimeout;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
case 19:
                var1 = global;
                var5 = var1.setTimeout;
                var1 = undefined;
                var4 = function() {
                    var3 = _closure3_slot1;
                    var2 = var3.openRight;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot0;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var1 = undefined;
                    var4 = function() {
                        var2 = _closure3_slot1;
                        var1 = var2.close;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var2 = 400;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['_bounceTimeout'] = var2;
                    return var1;
                };
                var2 = 700;
                var2 = var5.bind(var1)(var4, var2);
                var3['_bounceTimeout'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'closeOpenRow';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = var2._openRowKey;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 21; continue _fun0008 }
case 18:
                var4 = var2._refs;
                var3 = var2._openRowKey;
                var3 = var4[var3];
                if(!(var1 != var3)) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                var4 = var2._refs;
                var3 = var2._openRowKey;
                var4 = var4[var3];
                var3 = var4.close;
                var3 = var3.bind(var4)();
case 22:
                var2['_openRowKey'] = var1;
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = var2.closeOpenRow;
            var1 = var1.bind(var2)();
            var1 = arg1;
            var2['_openRowKey'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleClose';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var3 = var2._openRowKey;
                var1 = arg1;
                if(!(var3 === var1)) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                var1 = null;
                var2['_openRowKey'] = var1;
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var5 = this;
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var8 = var5.props;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var7 = var5.handleScroll;
            var6 = 'onScroll';
            var1[var6] = var7;
            var6 = var5.renderRow;
            var5 = 'renderItem';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {};
    var4['bounceFirstRowOnMount'] = var8;
    var7 = function renderQuickActions() {
        var1 = null;
        return var1;
    };
    var4['renderQuickActions'] = var7;
    var2['defaultProps'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/SwipeableFastList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();