// app/modules/remixing/RemixingStore.tsx
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var8 = 0;
    var9 = var6[var8];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BACKDROP_ID;
    var _closure1_slot8 = var9;
    var10 = {};
    var11 = {};
    var9 = new Array(0);
    var11['components'] = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.UpdateReason;
    var9 = var9.INITIALIZE;
    var11['updateReason'] = var9;
    var9 = new Array(1);
    var9[0] = var11;
    var10['history'] = var9;
    var10['currentStep'] = var8;
    var _closure1_slot12 = var10;
    var8 = 7;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.v4;
    var8 = var8.bind(var9)();
    var _closure1_slot13 = var8;
    var9 = var2.Object;
    var8 = var9.assign;
    var2 = {};
    var2 = var8.bind(var9)(var2, var10);
    var _closure1_slot14 = var2;
    var2 = false;
    var _closure1_slot15 = var2;
    var _closure1_slot16 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function RemixingStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'canvasState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'currentRenderedCanvas';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot14;
            var2 = var2.history;
            var1 = _closure1_slot14;
            var1 = var1.currentStep;
            var1 = var2[var1];
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'startRemixing';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.v4;
            var2 = var2.bind(var4)();
            _closure1_slot13 = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRemixing';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getComponentById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot14;
            var3 = var3.history;
            var2 = _closure1_slot14;
            var2 = var2.currentStep;
            var2 = var3[var2];
            var3 = var2.components;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUndoEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            var2 = var1.currentStep;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getRedoEnabled';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot14;
            var2 = var2.currentStep;
            var1 = _closure1_slot14;
            var1 = var1.history;
            var3 = var1.length;
            var1 = 1;
            var1 = var3 - var1;
            var1 = var2 < var1;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getRemixingSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getUsedRemix';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getLastComponentAdded';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getStartTime';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'RemixingStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleAdded(arg1) {
        var2 = arg1;
        var1 = _closure1_slot14;
        var4 = var1.currentStep;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 8;
        var5 = var7[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var5);
        var8 = var9.cloneDeep;
        var5 = _closure1_slot14;
        var5 = var5.history;
        var5 = var5[var4];
        var8 = var8.bind(var9)(var5);
        var5 = 6;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.UpdateReason;
        var5 = var5.ADD;
        var8['updateReason'] = var5;
        var5 = var2.component;
        var _closure1_slot10 = var5;
        var6 = var8.components;
        var5 = var6.push;
        var2 = var2.component;
        var2 = var5.bind(var6)(var2);
        var6 = _closure1_slot14;
        var10 = var6.history;
        var7 = var10.slice;
        var2 = 1;
        var5 = var4 + var2;
        var9 = 0;
        var12 = var7.bind(var10)(var9, var5);
        var5 = new Array(1);
        var13 = var5;
        var11 = 0;
        var7 = arraySpread(var13, var12, var11);
        var5[var7] = var8;
        var7 = var7 + var2;
        var6['history'] = var5;
        var3 = _closure1_slot14;
        var2 = var4 + var2;
        var3['currentStep'] = var2;
        return var1;
    };
    var2['REMIX_COMPONENT_ADDED'] = var9;
    var9 = function handleRemoved(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot14;
        var4 = var1.currentStep;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 8;
        var5 = var7[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var5);
        var8 = var9.cloneDeep;
        var5 = _closure1_slot14;
        var5 = var5.history;
        var5 = var5[var4];
        var8 = var8.bind(var9)(var5);
        var5 = 6;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.UpdateReason;
        var5 = var5.REMOVE;
        var8['updateReason'] = var5;
        var6 = var8.components;
        var5 = var6.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2 !== var1;
            return var1;
        };
        var2 = var5.bind(var6)(var2);
        var8['components'] = var2;
        var6 = _closure1_slot14;
        var10 = var6.history;
        var7 = var10.slice;
        var2 = 1;
        var5 = var4 + var2;
        var9 = 0;
        var12 = var7.bind(var10)(var9, var5);
        var5 = new Array(1);
        var13 = var5;
        var11 = 0;
        var7 = arraySpread(var13, var12, var11);
        var5[var7] = var8;
        var7 = var7 + var2;
        var6['history'] = var5;
        var3 = _closure1_slot14;
        var2 = var4 + var2;
        var3['currentStep'] = var2;
        return var1;
    };
    var2['REMIX_COMPONENT_REMOVED'] = var9;
    var9 = function handleUpdated(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot14;
        var4 = var1.currentStep;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 8;
        var5 = var7[var1];
        var1 = undefined;
        var9 = var6.bind(var1)(var5);
        var8 = var9.cloneDeep;
        var5 = _closure1_slot14;
        var5 = var5.history;
        var5 = var5[var4];
        var8 = var8.bind(var9)(var5);
        var5 = 6;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.UpdateReason;
        var5 = var5.UPDATE;
        var8['updateReason'] = var5;
        var6 = var8.components;
        var5 = var6.map;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var3 = var5.id;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = var5;
                if(!(var3 === var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure2_slot0;
                var2 = var2.partial;
                if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = _closure2_slot0;
                var2 = var2.newState;
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var3 = {};
                var7 = var3;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var4 = _closure2_slot0;
                var6 = var4.newState;
                var7 = var3;
                var4 = copyDataProperties(var7, var6);
                var2 = var3;
case 13:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2);
        var8['components'] = var2;
        var6 = _closure1_slot14;
        var10 = var6.history;
        var7 = var10.slice;
        var2 = 1;
        var5 = var4 + var2;
        var9 = 0;
        var12 = var7.bind(var10)(var9, var5);
        var5 = new Array(1);
        var13 = var5;
        var11 = 0;
        var7 = arraySpread(var13, var12, var11);
        var5[var7] = var8;
        var7 = var7 + var2;
        var6['history'] = var5;
        var3 = _closure1_slot14;
        var2 = var4 + var2;
        var3['currentStep'] = var2;
        return var1;
    };
    var2['REMIX_COMPONENT_UPDATED'] = var9;
    var9 = function handleBringToFront(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot14;
            var2 = var3.currentStep;
            var8 = var3.history;
            var3 = var8[var2];
            var10 = var3.components;
            var6 = var10.length;
            var3 = 1;
            var6 = var6 - var3;
            var6 = var10[var6];
            var6 = var6.id;
            var4 = var4.id;
            if(!(var6 !== var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var7 = null;
            var _closure2_slot1 = var7;
            var9 = var10.reduce;
            var6 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = var3.id;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    if(!(var5 !== var4)) { _fun0005_ip = 16; continue _fun0005 }
case 10:
                    var4 = var1.push;
                    var4 = var4.bind(var1)(var3);
                    _fun0005_ip = 17; continue _fun0005;
case 16:
                    _closure2_slot1 = var3;
case 17:
                    return var1;
                }
            };
            var4 = new Array(0);
            var4 = var9.bind(var10)(var6, var4);
            var6 = _closure2_slot1;
            if(!(var7 != var6)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = var4.push;
            var5 = _closure2_slot1;
            var5 = var6.bind(var4)(var5);
case 18:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var7 = undefined;
            var11 = var9.bind(var7)(var5);
            var6 = var11.cloneDeep;
            var5 = var8[var2];
            var6 = var6.bind(var11)(var5);
            var5 = 6;
            var5 = var10[var5];
            var5 = var9.bind(var7)(var5);
            var5 = var5.UpdateReason;
            var5 = var5.BRING_TO_FRONT;
            var6['updateReason'] = var5;
            var6['components'] = var4;
            var4 = _closure1_slot14;
            var5 = var8.slice;
            var2 = var2 + var3;
            var7 = 0;
            var13 = var5.bind(var8)(var7, var2);
            var2 = new Array(1);
            var14 = var2;
            var12 = 0;
            var5 = arraySpread(var14, var13, var12);
            var2[var5] = var6;
            var5 = var5 + var3;
            var4['history'] = var2;
            var2 = _closure1_slot14;
            var1 = var2.currentStep;
            var1 = var1 + var3;
            var2['currentStep'] = var1;
case 14:
            var1 = undefined;
            return var1;
        }
    };
    var2['REMIX_COMPONENT_BRING_TO_FRONT'] = var9;
    var9 = function handleUndo() {
        var3 = _closure1_slot14;
        var1 = global;
        var6 = var1.Math;
        var5 = var6.max;
        var1 = _closure1_slot14;
        var4 = var1.currentStep;
        var1 = 1;
        var4 = var4 - var1;
        var1 = 0;
        var1 = var5.bind(var6)(var1, var4);
        var3['currentStep'] = var1;
        var1 = null;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['REMIX_UNDO'] = var9;
    var9 = function handleUndoAll() {
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
        var5 = var6[var3];
        var1 = undefined;
        var9 = var4.bind(var1)(var5);
        var5 = _closure1_slot14;
        var7 = var5.currentStep;
        var5 = 0;
        var8 = var7 > var5;
        var7 = 'undoing all can only work if there are things to undo';
        var8 = var9.bind(var1)(var8, var7);
        var3 = var6[var3];
        var6 = var4.bind(var1)(var3);
        var3 = _closure1_slot14;
        var3 = var3.history;
        var3 = var3.length;
        var4 = 1;
        var3 = var3 > var4;
        var3 = var6.bind(var1)(var3, var7);
        var3 = _closure1_slot14;
        var3['currentStep'] = var5;
        var2 = _closure1_slot14;
        var3 = var2.history;
        var2 = var3.splice;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['REMIX_UNDO_ALL'] = var9;
    var9 = function handleRedo() {
        var2 = _closure1_slot14;
        var3 = global;
        var5 = var3.Math;
        var4 = var5.min;
        var3 = _closure1_slot14;
        var3 = var3.history;
        var3 = var3.length;
        var6 = 1;
        var3 = var3 - var6;
        var1 = _closure1_slot14;
        var1 = var1.currentStep;
        var1 = var1 + var6;
        var1 = var4.bind(var5)(var3, var1);
        var2['currentStep'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['REMIX_REDO'] = var9;
    var9 = function handleSetRemixing(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.remixing;
            _closure1_slot15 = var3;
            var3 = var1.source;
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 20; continue _fun0006 }
case 10:
            var3 = var1.source;
            var _closure1_slot9 = var3;
            var3 = global;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var13 = var5;
            var3 = new var13[var3](var12);
            var5 = var3 instanceof Object ? var3 : var5;
            var3 = var5.getTime;
            var3 = var3.bind(var5)();
            var _closure1_slot11 = var3;
case 20:
            var5 = _closure1_slot15;
            var3 = false;
            if(!(var3 !== var5)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var7 = undefined;
            var5 = var5.bind(var7)(var3);
            var3 = var1.source;
            var4 = var4 != var3;
            var3 = 'Remixing can only be started with a source image';
            var3 = var5.bind(var7)(var4, var3);
            var1 = var1.source;
            var3 = var1.uri;
            var6 = _closure1_slot0;
            var1 = 10;
            var1 = var8[var1];
            var4 = var6.bind(var7)(var1);
            var1 = var4.getPortraitOrientationScreenSize;
            var4 = var1.bind(var4)();
            var1 = {};
            var5 = _closure1_slot8;
            var1['id'] = var5;
            var5 = 6;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.RemixElement;
            var5 = var5.BACKDROP;
            var1['type'] = var5;
            var5 = {'x': 0, 'y': 0};
            var1['position'] = var5;
            var1['size'] = var4;
            var4 = 'contain';
            var1['fit'] = var4;
            var1['source'] = var3;
            var3 = new Array(0);
            var1['transform'] = var3;
            var3 = global;
            var7 = var3.Object;
            var6 = var7.assign;
            var5 = _closure1_slot12;
            var4 = {};
            var8 = {};
            var3 = new Array(1);
            var3[0] = var1;
            var8['components'] = var3;
            var3 = new Array(1);
            var3[0] = var8;
            var4['history'] = var3;
            var3 = {};
            var3 = var6.bind(var7)(var3, var5, var4);
            _closure1_slot14 = var3;
            _closure1_slot10 = var1;
            _fun0006_ip = 23; continue _fun0006;
case 21:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.assign;
            var3 = _closure1_slot12;
            var1 = {};
            var1 = var4.bind(var5)(var1, var3);
            _closure1_slot14 = var1;
case 23:
            var1 = undefined;
            return var1;
        }
    };
    var2['SET_REMIXING'] = var9;
    var9 = function handleCanvasUpdated(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot14;
            var4 = var1.currentStep;
            var3 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 8;
            var7 = var9[var10];
            var1 = undefined;
            var11 = var6.bind(var1)(var7);
            var8 = var11.cloneDeep;
            var7 = _closure1_slot14;
            var12 = var7.history;
            var7 = _closure1_slot14;
            var7 = var7.currentStep;
            var7 = var12[var7];
            var7 = var8.bind(var11)(var7);
            var3['step'] = var7;
            var7 = 1;
            var4 = var4 + var7;
            var3['index'] = var4;
            var8 = var3.step;
            var3 = var3.index;
            var4 = 6;
            var4 = var9[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.UpdateReason;
            var4 = var4.UPDATE;
            var8['updateReason'] = var4;
            var6 = var5.canvasSize;
            var4 = null;
            var6 = var4 == var6;
            if(var6) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var11 = var9.bind(var1)(var4);
            var10 = var11.isEqual;
            var9 = var5.canvasSize;
            var4 = var8.canvasSize;
            var6 = var10.bind(var11)(var9, var4);
case 24:
            var4 = false;
            if(var6) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var5 = var5.canvasSize;
            var8['canvasSize'] = var5;
            var4 = true;
case 26:
            if(!var4) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var5 = _closure1_slot14;
            var6 = var5.history;
            var4 = var6.slice;
            var9 = 0;
            var14 = var4.bind(var6)(var9, var3);
            var4 = new Array(1);
            var15 = var4;
            var13 = 0;
            var6 = arraySpread(var15, var14, var13);
            var4[var6] = var8;
            var6 = var6 + var7;
            var5['history'] = var4;
            var2 = _closure1_slot14;
            var2['currentStep'] = var3;
case 28:
            return var1;
        }
    };
    var2['REMIX_CANVAS_UPDATED'] = var9;
    var4 = function handleSetUsedRemix(arg1) {
        var1 = arg1;
        var2 = var1.usedRemix;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['REMIX_SET_USED_REMIX'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/RemixingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();