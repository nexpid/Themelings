// app/modules/sentry/SentryExperimentFeatureFlagManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getHashToName() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot8;
            var1 = var2.getRegisteredExperiments;
            var2 = var1.bind(var2)();
            var1 = {};
            var5 = var2;
            for(var2 in var5)
case 7:
            {
case 40:
                var9 = var2;
                var10 = _closure1_slot8;
                var8 = var10.getHash;
                var8 = var8.bind(var10)(var9);
                var1[var8] = var9;
                _fun0005_ip = 7; continue _fun0005;
            }
case 41:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function syncGuildExperimentFlags() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = _closure1_slot10;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var11 = 8;
            var4 = false;
            if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var7 = var3.value;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var11];
            var6 = var6.bind(var1)(var2);
            var2 = var6.addFeatureFlag;
            var2 = var2.bind(var6)(var7, var4);
            var6 = var5.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 42:
            var3 = _closure1_slot10;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot9;
            var2 = var3.getGuildId;
            var3 = var2.bind(var3)();
            var10 = null;
            if(!(var10 != var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var4 = _closure1_slot7;
            var2 = var4.getAllExperimentAssignments;
            var16 = var2.bind(var4)();
            var14 = var16;
            var6 = ':';
            var5 = 1;
            var9 = 0;
            var4 = global;
            var2 = '';
            for(var7 in var14)
case 46:
            {
case 47:
                var17 = var7;
                var19 = var17.startsWith;
                var18 = var4.HermesInternal;
                var18 = var18.concat;
                var18 = var18.bind(var2)(var3, var6);
                var18 = var19.bind(var17)(var18);
                if(!var18) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                var18 = var17.split;
                var18 = var18.bind(var17)(var6);
                var19 = var18[var5];
                var20 = _closure1_slot0;
                var18 = _closure1_slot1;
                var18 = var18[var11];
                var20 = var20.bind(var1)(var18);
                var18 = var20.addFeatureFlag;
                var17 = var16[var17];
                var17 = var17 > var9;
                var17 = var18.bind(var20)(var19, var17);
                var18 = _closure1_slot10;
                var17 = var18.add;
                var17 = var17.bind(var18)(var19);
                _fun0006_ip = 46; continue _fun0006;
            }
case 49:
            var4 = _closure1_slot8;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.evaluatedExperiments;
            var4 = var10 == var2;
            var8 = undefined;
            if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var2 = var2.guild;
            var4 = var10 == var2;
            var8 = undefined;
            if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 52:
            var8 = var2[var3];
case 50:
            if(!(var10 != var8)) { _fun0006_ip = 44; continue _fun0006 }
case 53:
            var2 = _closure1_slot14;
            var7 = var2.bind(var1)();
            var5 = var8.assignments;
            for(var2 in var5)
case 54:
            {
case 55:
                var14 = var2;
                var15 = var7[var14];
                if(var10 == var15) { _fun0006_ip = 54; continue _fun0006 }
case 56:
                var13 = var8.assignments;
                var13 = var13[var14];
                var16 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var11];
                var16 = var16.bind(var1)(var14);
                var14 = var16.addFeatureFlag;
                var13 = var13.variantId;
                var13 = var9 !== var13;
                var13 = var14.bind(var16)(var15, var13);
                var14 = _closure1_slot10;
                var13 = var14.add;
                var13 = var13.bind(var14)(var15);
                _fun0006_ip = 54; continue _fun0006;
            }
case 44:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function syncExperimentFlags() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.getAllExperimentAssignments;
            var9 = var1.bind(var3)();
            var7 = var9;
            var16 = 8;
            var1 = undefined;
            var15 = 0;
            var3 = ':';
            for(var4 in var7)
case 40:
            {
case 57:
                var13 = var4;
                var10 = var13.includes;
                var10 = var10.bind(var13)(var3);
                if(var10) { _fun0007_ip = 40; continue _fun0007 }
case 58:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var16];
                var12 = var11.bind(var1)(var10);
                var11 = var12.addFeatureFlag;
                var10 = var9[var13];
                var10 = var10 > var15;
                var10 = var11.bind(var12)(var13, var10);
                _fun0007_ip = 40; continue _fun0007;
            }
case 59:
            var3 = _closure1_slot14;
            var14 = var3.bind(var1)();
            var4 = _closure1_slot8;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var13 = var3.evaluatedExperiments;
            var4 = _closure1_slot12;
            var3 = ['user', 'installation'];
            var12 = var4.bind(var1)(var3);
            var4 = var12.bind(var1)();
            var3 = var4.done;
            var11 = null;
            var10 = var4;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            if(var3) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var32 = var10.value;
            var17 = var11 == var13;
            var3 = undefined;
            if(var17) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var3 = var13[var32];
case 62:
            var30 = var3;
            var38 = var9;
            var37 = var8;
            var36 = var7;
            var35 = var6;
            var34 = var5;
            var33 = var4;
            var9 = var38;
            var8 = var37;
            var7 = var36;
            var6 = var35;
            var5 = var34;
            var4 = var33;
            for(var27 in var30)
case 64:
            {
                var9 = var38;
                var8 = var37;
                var7 = var36;
                var6 = var35;
                var17 = var34;
                var3 = var33;
                var5 = var17;
                var4 = var3;
case 65:
                var26 = var27;
                var25 = var13[var32];
                var18 = var11 == var25;
                var24 = undefined;
                if(var18) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var24 = var25[var26];
case 66:
                var18 = var24;
                if(!(var11 == var18)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                var18 = {};
case 68:
                var23 = var18.assignments;
                var21 = var23;
                var38 = var26;
                var37 = var24;
                var36 = var25;
                var35 = var23;
                var34 = var17;
                var33 = var3;
                var17 = var34;
                var3 = var33;
                ForInLoopInit(obj_props_register=21, obj_register=20, iter_index_register=19, iter_size_register=18);
                if(var22 === undefined) { _fun0007_ip = 64; continue _fun0007 }
case 70:
                var34 = var17;
                var33 = var3;
                var38 = var26;
                var37 = var24;
                var36 = var25;
                var35 = var23;
                ForInLoopNextIter(next_value_register=17, obj_props_register=21, obj_register=20, iter_index_register=19, iter_size_register=18);
                if(var18 === undefined) { _fun0007_ip = 64; continue _fun0007 }
case 71:
                var34 = var18;
                var33 = var14[var34];
                var17 = var34;
                var3 = var33;
                if(var11 == var3) { _fun0007_ip = 70; continue _fun0007 }
case 72:
                var35 = var23[var34];
                var37 = _closure1_slot0;
                var36 = _closure1_slot1;
                var36 = var36[var16];
                var37 = var37.bind(var1)(var36);
                var36 = var37.addFeatureFlag;
                var35 = var35.variantId;
                var35 = var15 !== var35;
                var35 = var36.bind(var37)(var33, var35);
                var17 = var34;
                var3 = var33;
                _fun0007_ip = 70; continue _fun0007;
            }
case 73:
            var17 = var12.bind(var1)();
            var3 = var17.done;
            var10 = var17;
            if(!var3) { _fun0007_ip = 61; continue _fun0007 }
case 60:
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function SentryExperimentFeatureFlagManager(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0008_ip = 42; continue _fun0008 }
case 74:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0008_ip = 75; continue _fun0008;
case 42:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 75:
                var1 = var3.bind(var4)(var5, var1);
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var5.set;
                var3 = _closure1_slot7;
                var6 = _closure1_slot16;
                var5 = var4.bind(var5)(var3, var6);
                var4 = var5.set;
                var3 = _closure1_slot8;
                var5 = var4.bind(var5)(var3, var6);
                var4 = var5.set;
                var3 = _closure1_slot9;
                var2 = _closure1_slot15;
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/sentry/SentryExperimentFeatureFlagManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();