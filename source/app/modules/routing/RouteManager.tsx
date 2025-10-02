// app/modules/routing/RouteManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function RouteManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = global;
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['rewrites'] = var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['listeners'] = var4;
            var4 = 0;
            var3['routeChangeCount'] = var4;
            var4 = -1;
            var3['timer'] = var4;
            var4 = false;
            var3['connected'] = var4;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.isConnected;
                    var5 = var2.bind(var3)();
                    var3 = var5;
                    if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 31:
                    var2 = _closure3_slot0;
                    var2 = var2.connected;
                    var3 = !var2;
case 36:
                    var4 = _closure3_slot0;
                    var4['connected'] = var5;
                    if(!var3) { _fun0004_ip = 37; continue _fun0004 }
case 4:
                    var4 = _closure3_slot0;
                    var2 = 0;
                    var4['routeChangeCount'] = var2;
                    var3 = var4.executeRouteRewrites;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.getHistory;
                    var1 = var1.bind(var2)();
                    var2 = var1.location;
                    var1 = 'REPLACE';
                    var1 = var3.bind(var4)(var2, var1);
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleConnectionChange'] = var4;
            var4 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var11 = arg1;
                    var10 = arg2;
                    var4 = var11;
                    var5 = var10;
                    var1 = undefined;
                    var6 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var9 = _closure3_slot0;
                    var3 = var9.executeRouteRewrites;
                    var3 = var3.bind(var9)(var11, var10);
                    if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var9 = 6;
                    var9 = var11[var9];
                    var11 = var10.bind(var1)(var9);
                    var10 = var11.convertRouteToNavigation;
                    var9 = var4;
                    var9 = var10.bind(var11)(var9);
                    if(var9) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var9 = 5;
                    var9 = var11[var9];
                    var11 = var10.bind(var1)(var9);
                    var10 = var11.replaceWith;
                    var9 = _closure1_slot6;
                    var9 = var9.ME;
                    var9 = var10.bind(var11)(var9);
                    _fun0005_ip = 38; continue _fun0005;
case 40:
                    var10 = _closure1_slot5;
                    var9 = var10.getState;
                    var11 = var9.bind(var10)();
                    var10 = var11.basePath;
                    var9 = var4;
                    var9 = var9.pathname;
                    if(!(var10 !== var9)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var10 = var11.resetPath;
                    var9 = var4;
                    var9 = var9.pathname;
                    var9 = var10.bind(var11)(var9);
case 42:
                    var9 = _closure1_slot7;
                    var3 = _closure3_slot0;
                    var3 = var3.listeners;
                    var3 = var9.bind(var1)(var3);
                    var7 = var3;
                    var3 = var3.bind(var1)();
                    var6 = var3;
                    var3 = var3.done;
                    if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var3 = var6;
                    var8 = var3.value;
case 46: // try_start_0
                    var10 = var8;
                    var9 = var4;
                    var3 = var5;
                    var3 = var10.bind(var1)(var9, var3);
case 47: // try_end0
                    _fun0005_ip = 48; continue _fun0005;
case 49: // catch_target0
                    CatchBlockStart(arg_register=2);
case 48:
                    var3 = var7;
                    var3 = var3.bind(var1)();
                    var6 = var3;
                    var3 = var3.done;
                    if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 44:
                    var3 = _closure3_slot0;
                    var2 = 0;
                    var3['routeChangeCount'] = var2;
case 38:
                    return var1;
                }
            };
            var3['handleRouteChange'] = var4;
            var4 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.path;
                    var2 = _closure3_slot0;
                    var4 = var2.timer;
                    var2 = -1;
                    if(!(var2 !== var4)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = _closure3_slot0;
                    var4 = var2.timer;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
case 50:
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var2 = _closure3_slot0;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = var2.flushRoute;
                    var3 = undefined;
                    var1 = 200;
                    var1 = var5.bind(var3)(var4, var1);
                    var2['timer'] = var1;
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleKeybindRouteChange'] = var4;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure3_slot0;
                    var2 = var1.timer;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot5;
                    var2 = var4.getState;
                    var2 = var2.bind(var4)();
                    var5 = var2.path;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0007_ip = 54; continue _fun0007 }
case 50:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 5;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionTo;
                    var2 = var2.path;
                    var2 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var3['flushRoute'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = var2.cleanup;
            var1 = var1.bind(var2)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 5;
            var7 = var6[var4];
            var1 = undefined;
            var8 = var5.bind(var1)(var7);
            var7 = var8.getHistory;
            var9 = var7.bind(var8)();
            var8 = var9.listen;
            var7 = var2.handleRouteChange;
            var7 = var8.bind(var9)(var7);
            var2['unlistenHistory'] = var7;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getHistory;
            var4 = var4.bind(var5)();
            var4 = var4.location;
            var7 = var4.pathname;
            var6 = _closure1_slot5;
            var4 = var6.getState;
            var5 = var4.bind(var6)();
            var4 = var5.resetPath;
            var4 = var4.bind(var5)(var7);
            var5 = var6.subscribe;
            var4 = var2.handleKeybindRouteChange;
            var4 = var5.bind(var6)(var4);
            var2['unlistenKeyboardChange'] = var4;
            var4 = _closure1_slot4;
            var3 = var4.addChangeListener;
            var2 = var2.handleConnectionChange;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'executeRouteRewrites';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var11 = arg1;
                var9 = arg2;
                var1 = this;
                var3 = var1.routeChangeCount;
                var2 = 1;
                var2 = var3 + var2;
                var1['routeChangeCount'] = var2;
                var3 = var1.routeChangeCount;
                var2 = 10;
                if(!(!(var3 < var2))) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var14 = 'RouteManager: Something has gone horribly wrong with rewrites';
                var15 = var3;
                var2 = new var15[var4](var14, var13);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 55:
                var3 = _closure1_slot7;
                var1 = var1.rewrites;
                var4 = undefined;
                var8 = var3.bind(var4)(var1);
                var3 = var8.bind(var4)();
                var1 = var3.done;
                var5 = 5;
                var7 = null;
                var6 = var3;
                if(var1) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var1 = var6.value;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var10 = var10.bind(var4)(var3);
                var3 = var10.getHistory;
                var3 = var3.bind(var10)();
                var3 = var3.location;
                var10 = var3.pathname;
                var1 = var1.bind(var4)(var11, var9);
                if(!(var7 == var1)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var12 = var8.bind(var4)();
                var3 = var12.done;
                var6 = var12;
                if(var3) { _fun0008_ip = 57; continue _fun0008 }
case 61:
                _fun0008_ip = 58; continue _fun0008;
case 59:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 7;
                var6 = var2[var6];
                var8 = var3.bind(var4)(var6);
                var7 = var8.addBreadcrumb;
                var6 = {};
                var9 = 'RouteManager.handleRouteChange: A route rewrite is replacing the current route';
                var6['message'] = var9;
                var9 = {};
                var11 = var1.path;
                var9['replacePath'] = var11;
                var9['previousPath'] = var10;
                var6['data'] = var9;
                var6 = var7.bind(var8)(var6);
                var2 = var2[var5];
                var4 = var3.bind(var4)(var2);
                var3 = var4.replaceWith;
                var2 = var1.path;
                var1 = var1.state;
                var1 = var3.bind(var4)(var2, var1);
                var1 = true;
                return var1;
case 57:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'cleanup';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var4 = var2.unlistenHistory;
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                var1 = var4.call;
                var1 = var1.bind(var4)(var2);
case 62:
                var1 = undefined;
                var2['unlistenHistory'] = var1;
                var4 = var2.unlistenKeyboardChange;
                if(!(var3 != var4)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var3 = var4.call;
                var3 = var3.bind(var4)(var2);
case 64:
                var2['unlistenKeyboardChange'] = var1;
                var4 = _closure1_slot4;
                var3 = var4.removeChangeListener;
                var2 = var2.handleConnectionChange;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'addRouteChangeListener';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var5 = var2.unlistenHistory;
                var3 = null;
                if(!(var3 != var5)) { _fun0010_ip = 66; continue _fun0010 }
case 34:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 5;
                var3 = var6[var3];
                var6 = undefined;
                var5 = var5.bind(var6)(var3);
                var3 = var5.getHistory;
                var3 = var3.bind(var5)();
                var5 = var3.location;
                var3 = 'REPLACE';
                var3 = var4.bind(var6)(var5, var3);
case 66:
                var3 = var2.listeners;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.removeRouteChangeListener;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'addRouteRewriter';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var3 = var2.unlistenHistory;
                var6 = null;
                if(!(var6 != var3)) { _fun0011_ip = 67; continue _fun0011 }
case 34:
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 5;
                var9 = var3[var8];
                var7 = undefined;
                var11 = var10.bind(var7)(var9);
                var9 = var11.getHistory;
                var9 = var9.bind(var11)();
                var9 = var9.location;
                var3 = var3[var8];
                var10 = var10.bind(var7)(var3);
                var3 = var10.getHistory;
                var3 = var3.bind(var10)();
                var3 = var3.action;
                var3 = var4.bind(var7)(var9, var3);
                if(!(var6 != var3)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var7 = var6.bind(var7)(var5);
                var6 = var7.replaceWith;
                var5 = var3.path;
                var3 = var3.state;
                var3 = var6.bind(var7)(var5, var3);
case 67:
                var3 = var2.rewrites;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.removeRouteRewriter;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'removeRouteChangeListener';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.listeners;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'removeRouteRewriter';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.rewrites;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getHistory';
        var1['key'] = var6;
        var5 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getHistory;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/RouteManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['RouteManager'] = var2;
    return var1;
})();