// app/modules/vibegrations/stores/VibegrationsChatStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = function turnSettled(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.content;
            var1 = '';
            var1 = var1 !== var3;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var4 = var2.proposal;
            var3 = null;
            var1 = var3 != var4;
case 40:
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = var2.steps;
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.kind;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var1 = function newMessage(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg3;
            var1 = {};
            var3 = _closure1_slot13;
            var3 = var3 + 1;
            _closure1_slot13 = var3;
            var2 = 'm';
            var2 = var2 + var3;
            var1['id'] = var2;
            var2 = arg1;
            var1['role'] = var2;
            var2 = arg2;
            var1['content'] = var2;
            var2 = new Array(0);
            var1['steps'] = var2;
            var2 = null;
            if(!(var2 == var5)) { _fun0006_ip = 44; continue _fun0006 }
case 7:
            var2 = global;
            var3 = var2.Date;
            var2 = var3.now;
            var2 = var2.bind(var3)();
            _fun0006_ip = 45; continue _fun0006;
case 44:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.parse;
            var2 = var3.bind(var4)(var5);
case 45:
            var1['created_at'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function newMessageFromHistory(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot18;
            var5 = var2.role;
            var4 = var2.content;
            var3 = var2.ts;
            var1 = undefined;
            var1 = var6.bind(var1)(var5, var4, var3);
            var3 = var2.kind;
            var4 = null;
            if(!(var4 != var3)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var3 = var2.kind;
            var1['kind'] = var3;
case 46:
            var3 = var2.proposal;
            if(!(var4 != var3)) { _fun0007_ip = 44; continue _fun0007 }
case 48:
            var2 = var2.proposal;
            var1['proposal'] = var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function patchLastAssistant(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.get;
            var8 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var8)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var2 = var8.length;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0008_ip = 49; continue _fun0008 }
case 51:
            var2 = var8.length;
            var6 = 1;
            var2 = var2 - var6;
            var9 = var8[var2];
            var3 = var9.role;
            var2 = 'assistant';
            if(!(var2 === var3)) { _fun0008_ip = 49; continue _fun0008 }
case 52:
            var3 = _closure1_slot6;
            var2 = var3.set;
            var5 = var8.slice;
            var1 = -1;
            var11 = var5.bind(var8)(var7, var1);
            var1 = new Array(1);
            var12 = var1;
            var10 = 0;
            var5 = arraySpread(var12, var11, var10);
            var8 = arg2;
            var7 = undefined;
            var7 = var8.bind(var7)(var9);
            var1[4] = var7;
            var5 = var5 + var6;
            var1 = var2.bind(var3)(var4, var1);
case 49:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function computeThinking(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot6;
            var3 = var4.get;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 53; continue _fun0009 }
case 50:
            var4 = var3.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0009_ip = 53; continue _fun0009 }
case 51:
            var4 = var3.length;
            var1 = 1;
            var1 = var4 - var1;
            var4 = var3[var1];
            var3 = var4.role;
            var1 = 'assistant';
            var1 = var1 === var3;
            if(!var1) { _fun0009_ip = 9; continue _fun0009 }
case 37:
            var3 = _closure1_slot17;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var1 = !var2;
case 9:
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function recordThinkingTransition(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot8;
            var1 = var2.get;
            var1 = var1.bind(var2)(var4);
            var2 = null;
            var5 = var2 != var1;
            if(!var5) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var5 = var1;
case 54:
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            if(!(var5 !== var2)) { _fun0010_ip = 56; continue _fun0010 }
case 47:
            var6 = _closure1_slot8;
            var5 = var6.set;
            var5 = var5.bind(var6)(var4, var2);
            var3 = _closure1_slot7;
            if(var2) { _fun0010_ip = 45; continue _fun0010 }
case 52:
            var5 = var3.set;
            var2 = global;
            var6 = var2.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var2 = var5.bind(var3)(var4, var2);
            _fun0010_ip = 56; continue _fun0010;
case 45:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 56:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function purgeProject(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot6;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var6);
            var4 = _closure1_slot7;
            var3 = var4.delete;
            var4 = var3.bind(var4)(var6);
            var5 = _closure1_slot8;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var6);
            var5 = _closure1_slot9;
            var2 = var5.delete;
            var2 = var2.bind(var5)(var6);
            if(var1) { _fun0011_ip = 48; continue _fun0011 }
case 57:
            var1 = var4;
case 48:
            if(var1) { _fun0011_ip = 39; continue _fun0011 }
case 58:
            var1 = var3;
case 39:
            if(var1) { _fun0011_ip = 44; continue _fun0011 }
case 59:
            var1 = var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var4 = 0;
    var9 = var6[var4];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot0 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot1 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var11 = var8.Set;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var14 = ['preview_ready', 'built', 'error', 'build_error', 'healthcheck_failed'];
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot5 = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot6 = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot7 = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot8 = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var4;
    var8 = null;
    var _closure1_slot11 = var8;
    var8 = new Array(0);
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function VibegrationsChatStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 52; continue _fun0012 }
case 60:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 61; continue _fun0012;
case 52:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 61:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'getMessages';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = _closure1_slot6;
                var3 = var4.get;
                var1 = arg1;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0013_ip = 3; continue _fun0013 }
case 50:
                var1 = _closure1_slot12;
case 3:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isThinking';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFinishedAt';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot21;
                var1 = undefined;
                var4 = var2.bind(var1)(var5);
                var2 = null;
                var1 = null;
                if(var4) { _fun0014_ip = 62; continue _fun0014 }
case 63:
                var4 = _closure1_slot7;
                var3 = var4.get;
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0014_ip = 64; continue _fun0014 }
case 47:
                var2 = var3;
case 64:
                var1 = var2;
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getProjectUsage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0015_ip = 54; continue _fun0015 }
case 55:
                var1 = var2;
case 54:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSidebarWidth';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getBuilderPreviewApplicationId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isAnyThinking';
        var5['key'] = var7;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = this;
                var2 = _closure1_slot14;
                var3 = _closure1_slot6;
                var1 = var3.keys;
                var1 = var1.bind(var3)();
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                var6 = var2.value;
                var1 = var5.isThinking;
                var1 = var1.bind(var5)(var6);
                if(var1) { _fun0016_ip = 44; continue _fun0016 }
case 67:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(var1) { _fun0016_ip = 65; continue _fun0016 }
case 68:
                _fun0016_ip = 66; continue _fun0016;
case 44:
                var1 = true;
                return var1;
case 65:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 6;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleLogout() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = _closure1_slot6;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 === var3)) { _fun0017_ip = 69; continue _fun0017 }
case 70:
            var3 = _closure1_slot7;
            var3 = var3.size;
            if(!(var1 === var3)) { _fun0017_ip = 69; continue _fun0017 }
case 40:
            var3 = _closure1_slot8;
            var3 = var3.size;
            if(!(var1 === var3)) { _fun0017_ip = 69; continue _fun0017 }
case 71:
            var3 = _closure1_slot9;
            var3 = var3.size;
            if(!(var1 === var3)) { _fun0017_ip = 69; continue _fun0017 }
case 72:
            var3 = _closure1_slot10;
            if(!(var1 === var3)) { _fun0017_ip = 69; continue _fun0017 }
case 57:
            var4 = _closure1_slot11;
            var3 = null;
            if(!(var3 != var4)) { _fun0017_ip = 73; continue _fun0017 }
case 69:
            var4 = _closure1_slot6;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot7;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot8;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot9;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            _closure1_slot10 = var1;
            var1 = null;
            _closure1_slot11 = var1;
            var1 = undefined;
            return var1;
case 73:
            var1 = false;
            return var1;
        }
    };
    var4['LOGOUT'] = var9;
    var9 = function handleChatHistorySet(arg1) {
        var1 = arg1;
        var3 = var1.projectId;
        var7 = var1.entries;
        var5 = _closure1_slot6;
        var4 = var5.set;
        var6 = var7.map;
        var2 = _closure1_slot19;
        var2 = var6.bind(var7)(var2);
        var2 = var4.bind(var5)(var3, var2);
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['VIBEGRATIONS_CHAT_HISTORY_SET'] = var9;
    var9 = function handleChatMessageAppend(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.projectId;
            var9 = var1.content;
            var4 = _closure1_slot6;
            var1 = var4.get;
            var7 = var1.bind(var4)(var3);
            var1 = null;
            if(!(var1 == var7)) { _fun0018_ip = 74; continue _fun0018 }
case 51:
            var7 = new Array(0);
case 74:
            var6 = _closure1_slot6;
            var5 = var6.set;
            var4 = new Array(2);
            var11 = 0;
            var13 = var4;
            var12 = var7;
            var8 = arraySpread(var13, var12, var11);
            var10 = _closure1_slot18;
            var1 = undefined;
            var7 = 'user';
            var7 = var10.bind(var1)(var7, var9);
            var4[7] = var7;
            var7 = 1;
            var8 = var8 + var7;
            var9 = 'assistant';
            var7 = '';
            var7 = var10.bind(var1)(var9, var7);
            var4[7] = var7;
            var4 = var5.bind(var6)(var3, var4);
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['VIBEGRATIONS_CHAT_MESSAGE_APPEND'] = var9;
    var9 = function handleChatStepAppend(arg1) {
        var1 = arg1;
        var3 = var1.projectId;
        var1 = var1.step;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot20;
        var1 = undefined;
        var4 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var7 = var1;
            var6 = var2;
            var3 = copyDataProperties(var7, var6);
            var6 = var2.steps;
            var3 = new Array(1);
            var5 = 0;
            var7 = var3;
            var4 = arraySpread(var7, var6, var5);
            var2 = _closure2_slot0;
            var3[3] = var2;
            var2 = 1;
            var2 = var4 + var2;
            var2 = 'steps';
            var1[1] = var3;
            return var1;
        };
        var4 = var5.bind(var1)(var3, var4);
        var2 = _closure1_slot22;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['VIBEGRATIONS_CHAT_STEP_APPEND'] = var9;
    var9 = function handleChatUsageSet(arg1) {
        var1 = arg1;
        var4 = var1.projectId;
        var3 = var1.project;
        var2 = _closure1_slot9;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var4['VIBEGRATIONS_CHAT_USAGE_SET'] = var9;
    var9 = function handleChatSidebarWidthSet(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = var1.width;
            var3 = _closure1_slot10;
            if(!(var3 !== var2)) { _fun0019_ip = 75; continue _fun0019 }
case 41:
            _closure1_slot10 = var2;
            var1 = undefined;
            return var1;
case 75:
            var1 = false;
            return var1;
        }
    };
    var4['VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET'] = var9;
    var9 = function handleBuilderPreviewApplicationSet(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var3 = _closure1_slot11;
            if(!(var3 !== var2)) { _fun0020_ip = 75; continue _fun0020 }
case 41:
            _closure1_slot11 = var2;
            var1 = undefined;
            return var1;
case 75:
            var1 = false;
            return var1;
        }
    };
    var4['VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET'] = var9;
    var9 = function handleChatTurnPatch(arg1) {
        var1 = arg1;
        var3 = var1.projectId;
        var1 = var1.patch;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot20;
        var1 = undefined;
        var4 = function(arg1) {
            var1 = {};
            var3 = arg1;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            var3 = _closure2_slot0;
            var4 = var1;
            var2 = copyDataProperties(var4, var3);
            return var1;
        };
        var4 = var5.bind(var1)(var3, var4);
        var2 = _closure1_slot22;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['VIBEGRATIONS_CHAT_TURN_PATCH'] = var9;
    var9 = function handleChatConnState(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.projectId;
            var4 = var1.connState;
            var1 = 'closed';
            if(!(var1 !== var4)) { _fun0021_ip = 76; continue _fun0021 }
case 75:
            var1 = 'failed';
            if(!(var1 === var4)) { _fun0021_ip = 77; continue _fun0021 }
case 76:
            var5 = _closure1_slot6;
            var4 = var5.get;
            var7 = var4.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var7)) { _fun0021_ip = 78; continue _fun0021 }
case 46:
            var5 = var7.some;
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.role;
                    var1 = 'assistant';
                    var1 = var1 === var2;
                    if(!var1) { _fun0022_ip = 79; continue _fun0022 }
case 80:
                    var3 = _closure1_slot17;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var1 = !var2;
case 79:
                    return var1;
                }
            };
            var4 = var5.bind(var7)(var4);
            if(!var4) { _fun0021_ip = 78; continue _fun0021 }
case 81:
            var5 = _closure1_slot6;
            var4 = var5.set;
            var6 = var7.map;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.role;
                    var2 = 'assistant';
                    var1 = var3;
                    if(!(var2 === var4)) { _fun0023_ip = 82; continue _fun0023 }
case 80:
                    var4 = _closure1_slot17;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var3;
                    if(var2) { _fun0023_ip = 82; continue _fun0023 }
case 66:
                    var2 = {};
                    var8 = var2;
                    var7 = var3;
                    var4 = copyDataProperties(var8, var7);
                    var7 = var3.steps;
                    var4 = new Array(1);
                    var6 = 0;
                    var8 = var4;
                    var5 = arraySpread(var8, var7, var6);
                    var3 = {'type': 'step', 'kind': 'error', 'message': 'Connection lost'};
                    var4[4] = var3;
                    var3 = 1;
                    var3 = var5 + var3;
                    var3 = 'steps';
                    var2[2] = var4;
                    var1 = var2;
case 82:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2);
            var2 = var4.bind(var5)(var3, var2);
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
case 78:
            var1 = false;
            return var1;
case 77:
            var1 = false;
            return var1;
        }
    };
    var4['VIBEGRATIONS_CHAT_CONN_STATE'] = var9;
    var9 = function handleProjectDeleteSuccess(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var3 = var1.projectId;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0024_ip = 3; continue _fun0024 }
case 50:
            var2 = false;
            return var2;
case 3:
            return var1;
        }
    };
    var4['VIBEGRATIONS_PROJECT_DELETE_SUCCESS'] = var9;
    var5 = function handleProjectsFetchSuccess(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.projects;
            var1 = global;
            var4 = var1.Set;
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var15 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var16 = var3;
            var2 = new var16[var4](var15, var14);
            var10 = var2 instanceof Object ? var2 : var3;
            var3 = _closure1_slot14;
            var4 = var1.Set;
            var2 = _closure1_slot6;
            var1 = var2.keys;
            var14 = var1.bind(var2)();
            var1 = new Array(0);
            var13 = 0;
            var15 = var1;
            var13 = arraySpread(var15, var14, var13);
            var6 = _closure1_slot7;
            var2 = var6.keys;
            var14 = var2.bind(var6)();
            var15 = var1;
            var13 = arraySpread(var15, var14, var13);
            var6 = _closure1_slot8;
            var2 = var6.keys;
            var14 = var2.bind(var6)();
            var15 = var1;
            var13 = arraySpread(var15, var14, var13);
            var6 = _closure1_slot9;
            var2 = var6.keys;
            var14 = var2.bind(var6)();
            var15 = var1;
            var2 = arraySpread(var15, var14, var13);
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var16 = var2;
            var15 = var1;
            var1 = new var16[var4](var15, var14);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = undefined;
            var8 = var3.bind(var1)(var2);
            var3 = var8.bind(var1)();
            var4 = var3.done;
            var2 = false;
            var6 = var3;
            var5 = false;
            var3 = false;
            if(var4) { _fun0025_ip = 83; continue _fun0025 }
case 84:
            var12 = var6.value;
            var4 = var10.has;
            var4 = var4.bind(var10)(var12);
            var4 = !var4;
            if(!var4) { _fun0025_ip = 85; continue _fun0025 }
case 86:
            var11 = _closure1_slot23;
            var4 = var11.bind(var1)(var12);
case 85:
            if(!var4) { _fun0025_ip = 87; continue _fun0025 }
case 88:
            var5 = true;
case 87:
            var12 = var8.bind(var1)();
            var4 = var12.done;
            var6 = var12;
            var3 = var5;
            if(!var4) { _fun0025_ip = 84; continue _fun0025 }
case 83:
            if(var3) { _fun0025_ip = 89; continue _fun0025 }
case 90:
            return var2;
case 89:
            return var1;
        }
    };
    var4['VIBEGRATIONS_PROJECTS_FETCH_SUCCESS'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/vibegrations/stores/VibegrationsChatStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['turnSettled'] = var2;
    return var1;
})();