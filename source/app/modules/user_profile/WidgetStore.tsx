// app/modules/user_profile/WidgetStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = null;
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var7 = {};
    var8 = new Array(0);
    var7['suggestedGamesIds'] = var8;
    var8 = new Array(0);
    var7['suggestedWishlistGamesIds'] = var8;
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var2;
    var _closure1_slot15 = var2;
    var _closure1_slot16 = var2;
    var2 = 9;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function WidgetStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 41; continue _fun0005;
case 39:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 41:
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
        var1 = 'getPendingWidgets';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSaveablePendingWidgets';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot10;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var4 = _closure1_slot10;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isSaveable;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 42:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasPendingChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure1_slot10;
                var4 = null;
                var1 = var4 !== var1;
                if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 43:
                var2 = _closure1_slot11;
                var2 = var4 === var2;
                if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 45:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 8;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isEqual;
                var4 = _closure1_slot10;
                var3 = _closure1_slot11;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
case 38:
                var1 = var2;
case 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getWidgetUpdates';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var2 = var3.getSaveablePendingWidgets;
                var2 = var2.bind(var3)();
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                var4 = _closure1_slot11;
                if(!(var3 != var4)) { _fun0008_ip = 46; continue _fun0008 }
case 48:
                var5 = global;
                var7 = var5.Map;
                var8 = _closure1_slot11;
                var6 = var8.map;
                var4 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.id;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var19 = var6.bind(var8)(var4);
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var20 = var6;
                var4 = new var20[var7](var19, var18);
                var4 = var4 instanceof Object ? var4 : var6;
                var6 = var5.Map;
                var5 = var2.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.id;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                };
                var19 = var5.bind(var2)(var1);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var20 = var5;
                var1 = new var20[var6](var19, var18);
                var13 = var1 instanceof Object ? var1 : var5;
                var6 = new Array(0);
                var5 = new Array(0);
                var1 = _closure1_slot17;
                var10 = undefined;
                var14 = var1.bind(var10)(var13);
                var7 = var14.bind(var10)();
                var1 = var7.done;
                var12 = 2;
                var9 = 0;
                var8 = 1;
                if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var15 = var7.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var10)(var15, var12);
                var16 = var1[var9];
                var15 = var1[var8];
                var1 = var4.get;
                var17 = var1.bind(var4)(var16);
                var1 = var3 != var17;
                if(!var1) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var16 = var15.isEqual;
                var1 = var16.bind(var15)(var17);
case 51:
                if(var1) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var1 = var6.push;
                var1 = var1.bind(var6)(var15);
case 53:
                var15 = var14.bind(var10)();
                var1 = var15.done;
                var7 = var15;
                if(!var1) { _fun0008_ip = 50; continue _fun0008 }
case 49:
                var1 = _closure1_slot17;
                var7 = var1.bind(var10)(var4);
                var4 = var7.bind(var10)();
                var1 = var4.done;
                if(var1) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var14 = var4.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var10)(var14, var12);
                var15 = var1[var9];
                var14 = var1[var8];
                var1 = var13.has;
                var1 = var1.bind(var13)(var15);
                if(var1) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var1 = var5.push;
                var1 = var1.bind(var5)(var14);
case 57:
                var14 = var7.bind(var10)();
                var1 = var14.done;
                var4 = var14;
                if(!var1) { _fun0008_ip = 56; continue _fun0008 }
case 55:
                var1 = var2.length;
                var1 = var9 < var1;
                var9 = 0;
                var4 = false;
                if(!var1) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var1 = var2[var9];
                var13 = var3 == var1;
                var12 = undefined;
                if(var13) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var12 = var1.id;
case 61:
                var1 = _closure1_slot11;
                var13 = var1[var9];
                var14 = var3 == var13;
                var1 = undefined;
                if(var14) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var1 = var13.id;
case 63:
                var4 = true;
                if(!(var12 === var1)) { _fun0008_ip = 59; continue _fun0008 }
case 65:
                var9 = var9 + 1;
                var1 = var2.length;
                var1 = var9 < var1;
                var4 = false;
                if(var1) { _fun0008_ip = 60; continue _fun0008 }
case 59:
                var1 = {};
                var1['changedWidgets'] = var6;
                var1['removedWidgets'] = var5;
                var1['hasOrderChanges'] = var4;
                return var1;
case 46:
                var1 = {};
                if(!(var3 == var2)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                var2 = new Array(0);
case 66:
                var1['changedWidgets'] = var2;
                var2 = new Array(0);
                var1['removedWidgets'] = var2;
                var2 = false;
                var1['hasOrderChanges'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getChangedWidgets';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getWidgetUpdates;
            var1 = var1.bind(var2)();
            var1 = var1.changedWidgets;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRemovedWidgets';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.getWidgetUpdates;
            var1 = var1.bind(var2)();
            var1 = var1.removedWidgets;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasSaveablePendingChanges';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.getWidgetUpdates;
                var2 = var1.bind(var2)();
                var1 = var2.changedWidgets;
                var3 = var2.removedWidgets;
                var2 = var2.hasOrderChanges;
                var1 = var1.length;
                var4 = 0;
                var1 = var1 > var4;
                if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                var3 = var3.length;
                var1 = var3 > var4;
case 68:
                if(var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                var1 = var2;
case 70:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isSubmitting';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'suggestedFetchError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'suggestedFetchIsLoading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'suggestedFetchAttempted';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'suggestedGameIds';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 10;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleSetPendingWidgets(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.widgets;
            _closure1_slot10 = var1;
            var1 = _closure1_slot11;
            var3 = null;
            if(!(var3 === var1)) { _fun0010_ip = 72; continue _fun0010 }
case 47:
            var4 = _closure1_slot8;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            if(!(var3 != var1)) { _fun0010_ip = 72; continue _fun0010 }
case 73:
            var5 = _closure1_slot9;
            var4 = var5.getUserProfile;
            var1 = var1.id;
            var4 = var4.bind(var5)(var1);
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0010_ip = 74; continue _fun0010 }
case 38:
            var1 = var4.widgets;
case 74:
            if(!(var3 == var1)) { _fun0010_ip = 9; continue _fun0010 }
case 75:
            var1 = new Array(0);
case 9:
            _closure1_slot11 = var1;
case 72:
            var1 = undefined;
            return var1;
        }
    };
    var2['WIDGET_PENDING_SET'] = var8;
    var8 = function handleSavePendingWidgetsStart() {
        var1 = true;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_PENDING_SAVE_START'] = var8;
    var8 = function handleSavePendingWidgetsSuccess() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = false;
            _closure1_slot12 = var1;
            var3 = _closure1_slot10;
            var1 = null;
            if(!(var1 !== var3)) { _fun0011_ip = 45; continue _fun0011 }
case 76:
            _closure1_slot11 = var1;
            _closure1_slot10 = var1;
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var2['WIDGET_PENDING_SAVE_SUCCESS'] = var8;
    var8 = function handleSavePendingWidgetsFailure() {
        var1 = false;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_PENDING_SAVE_FAILURE'] = var8;
    var8 = function handleSetSuggestedGameIds(arg1) {
        var1 = arg1;
        var4 = var1.suggestedGamesIds;
        var3 = var1.suggestedWishlistGamesIds;
        var1 = _closure1_slot13;
        var1['suggestedGamesIds'] = var4;
        var1['suggestedWishlistGamesIds'] = var3;
        var1 = false;
        _closure1_slot15 = var1;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_SUGGESTED_FETCH_SUCCESS'] = var8;
    var8 = function handleSetSuggestedFetchFailure() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = false;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_SUGGESTED_FETCH_FAILURE'] = var8;
    var8 = function handleSetSuggestedFetchStart() {
        var1 = true;
        _closure1_slot15 = var1;
        var3 = false;
        _closure1_slot14 = var3;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_SUGGESTED_FETCH_START'] = var8;
    var8 = function handleClearPendingWidgets() {
        var1 = null;
        _closure1_slot10 = var1;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_PENDING_CLEAR'] = var8;
    var4 = function handleRemoveApplicationIdFromSuggestedGames(arg1) {
        var2 = arg1;
        var2 = var2.applicationId;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot13;
        var5 = var2.suggestedGamesIds;
        var4 = var5.filter;
        var3 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var2['suggestedGamesIds'] = var3;
        var4 = var2.suggestedWishlistGamesIds;
        var3 = var4.filter;
        var1 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var1 !== var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var2['suggestedWishlistGamesIds'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['WIDGET_SUGGESTED_REMOVE_GAME'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/WidgetStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();