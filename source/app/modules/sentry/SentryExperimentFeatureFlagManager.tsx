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
    var1 = function isLikelyControl(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var4 = var2.variations;
            var3 = arg2;
            var6 = var4[var3];
            var1 = var1 == var6;
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = global;
            var5 = var4.JSON;
            var3 = var5.stringify;
            var3 = var3.bind(var5)(var6);
            var5 = var4.JSON;
            var4 = var5.stringify;
            var2 = var2.defaultConfig;
            var2 = var4.bind(var5)(var2);
            var1 = var3 === var2;
case 42:
            return var1;
case 40:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function flushFlags(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var9 = arg2;
            var1 = var3.sort;
            var1 = var1.bind(var3)();
            var2 = _closure1_slot12;
            var1 = undefined;
            var7 = var2.bind(var1)(var3);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 8;
            var5 = true;
            var4 = null;
            if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 9:
            var10 = var3.value;
            var11 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var11 = var11.bind(var1)(var2);
            var2 = var11.addFeatureFlag;
            var2 = var2.bind(var11)(var10, var5);
            if(!(var4 != var9)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var2 = var9.add;
            var2 = var2.bind(var9)(var10);
case 45:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0006_ip = 9; continue _fun0006 }
case 44:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function syncAllExperimentFlags() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot12;
            var3 = _closure1_slot10;
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var4 = var7.bind(var1)();
            var3 = var4.done;
            var6 = 8;
            var5 = false;
            if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var9 = var4.value;
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var8 = var8.bind(var1)(var3);
            var3 = var8.addFeatureFlag;
            var3 = var3.bind(var8)(var9, var5);
            var8 = var7.bind(var1)();
            var3 = var8.done;
            var4 = var8;
            if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 47:
            var4 = _closure1_slot10;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var8 = new Array(0);
            var9 = new Array(0);
            var6 = new Array(0);
            var7 = new Array(0);
            var5 = new Array(0);
            var4 = new Array(0);
            var10 = _closure1_slot9;
            var3 = var10.getGuildId;
            var10 = var3.bind(var10)();
            var11 = _closure1_slot7;
            var3 = var11.getAllExperimentAssignments;
            var17 = var3.bind(var11)();
            var15 = var17;
            var22 = ':';
            var11 = 1;
            var21 = global;
            var20 = '';
            var19 = null;
            var3 = 0;
            for(var12 in var15)
case 49:
            {
case 50:
                var24 = var12;
                var25 = var17[var24];
                var18 = var19 == var25;
                if(var18) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var18 = var25 <= var3;
case 51:
                if(var18) { _fun0007_ip = 49; continue _fun0007 }
case 53:
                var18 = var24.includes;
                var18 = var18.bind(var24)(var22);
                if(var18) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var23 = var8.push;
                var18 = var21.HermesInternal;
                var18 = var18.concat;
                var18 = var18.bind(var20)(var24, var22, var25);
                var18 = var23.bind(var8)(var18);
                _fun0007_ip = 49; continue _fun0007;
case 54:
                var18 = var19 != var10;
                if(!var18) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var26 = var24.startsWith;
                var23 = var21.HermesInternal;
                var23 = var23.concat;
                var23 = var23.bind(var20)(var10, var22);
                var18 = var26.bind(var24)(var23);
case 56:
                if(!var18) { _fun0007_ip = 49; continue _fun0007 }
case 58:
                var23 = var9.push;
                var18 = var24.split;
                var18 = var18.bind(var24)(var22);
                var24 = var18[var11];
                var18 = var21.HermesInternal;
                var18 = var18.concat;
                var18 = var18.bind(var20)(var24, var22, var25);
                var18 = var23.bind(var9)(var18);
                _fun0007_ip = 49; continue _fun0007;
            }
case 59:
            var11 = _closure1_slot8;
            var3 = var11.getRegisteredExperiments;
            var18 = var3.bind(var11)();
            var11 = _closure1_slot8;
            var3 = var11.getRegisteredExperiments;
            var3 = var3.bind(var11)();
            var17 = {};
            var13 = var3;
            for(var3 in var13)
case 60:
            {
case 61:
                var16 = var3;
                var23 = _closure1_slot8;
                var15 = var23.getHash;
                var15 = var15.bind(var23)(var16);
                var17[var15] = var16;
                _fun0007_ip = 60; continue _fun0007;
            }
case 62:
            var11 = _closure1_slot8;
            var3 = var11.getState;
            var3 = var3.bind(var11)();
            var3 = var3.evaluatedExperiments;
            var12 = _closure1_slot12;
            var11 = ['user', 'installation'];
            var27 = var12.bind(var1)(var11);
            var12 = var27.bind(var1)();
            var11 = var12.done;
            var26 = var12;
            var25 = undefined;
            var24 = undefined;
            var23 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var13 = undefined;
            var12 = undefined;
            if(var11) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var45 = var26.value;
            var28 = var19 == var3;
            var11 = undefined;
            if(var28) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var11 = var3[var45];
case 65:
            var43 = var11;
            var54 = var25;
            var53 = var24;
            var52 = var23;
            var51 = var16;
            var50 = var15;
            var49 = var14;
            var48 = var13;
            var47 = var12;
            var25 = var54;
            var24 = var53;
            var23 = var52;
            var16 = var51;
            var15 = var50;
            var14 = var49;
            var13 = var48;
            var12 = var47;
            for(var40 in var43)
case 67:
            {
                var25 = var54;
                var24 = var53;
                var23 = var52;
                var16 = var51;
                var30 = var50;
                var29 = var49;
                var28 = var48;
                var11 = var47;
                var15 = var30;
                var14 = var29;
                var13 = var28;
                var12 = var11;
case 68:
                var39 = var40;
                var38 = var3[var45];
                var31 = var19 == var38;
                var37 = undefined;
                if(var31) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var37 = var38[var39];
case 69:
                var31 = var37;
                if(!(var19 == var31)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                var31 = {};
case 71:
                var36 = var31.assignments;
                var34 = var36;
                var54 = var39;
                var53 = var37;
                var52 = var38;
                var51 = var36;
                var50 = var30;
                var49 = var29;
                var48 = var28;
                var47 = var11;
                var30 = var50;
                var29 = var49;
                var28 = var48;
                var11 = var47;
                ForInLoopInit(obj_props_register=34, obj_register=33, iter_index_register=32, iter_size_register=31);
                if(var35 === undefined) { _fun0007_ip = 67; continue _fun0007 }
case 73:
                var50 = var30;
                var49 = var29;
                var46 = var11;
                var54 = var39;
                var53 = var37;
                var52 = var38;
                var51 = var36;
                var48 = var28;
                var47 = var46;
                ForInLoopNextIter(next_value_register=30, obj_props_register=34, obj_register=33, iter_index_register=32, iter_size_register=31);
                if(var31 === undefined) { _fun0007_ip = 67; continue _fun0007 }
case 74:
                var49 = var31;
                var48 = var17[var49];
                var30 = var49;
                var29 = var48;
                var11 = var46;
                if(var19 == var48) { _fun0007_ip = 73; continue _fun0007 }
case 75:
                var47 = var36[var49];
                var47 = var47.variantId;
                var30 = var49;
                var29 = var48;
                var28 = var47;
                var11 = var46;
                if(var19 == var47) { _fun0007_ip = 73; continue _fun0007 }
case 76:
                var46 = var21.HermesInternal;
                var46 = var46.concat;
                var46 = var46.bind(var20)(var48, var22, var47);
                var51 = _closure1_slot14;
                var50 = var18[var48];
                var50 = var51.bind(var1)(var50, var47);
                var51 = var5;
                if(!var50) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                var51 = var6;
case 77:
                var50 = var51.push;
                var50 = var50.bind(var51)(var46);
                var30 = var49;
                var29 = var48;
                var28 = var47;
                var11 = var46;
                _fun0007_ip = 73; continue _fun0007;
            }
case 79:
            var28 = var27.bind(var1)();
            var11 = var28.done;
            var26 = var28;
            if(!var11) { _fun0007_ip = 64; continue _fun0007 }
case 63:
            if(!(var19 != var10)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var11 = var19 == var3;
            var16 = undefined;
            if(var11) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var3 = var3.guild;
            var11 = var19 == var3;
            var16 = undefined;
            if(var11) { _fun0007_ip = 82; continue _fun0007 }
case 84:
            var16 = var3[var10];
case 82:
            if(!(var19 != var16)) { _fun0007_ip = 80; continue _fun0007 }
case 85:
            var14 = var16.assignments;
            var10 = undefined;
            var3 = undefined;
            for(var11 in var14)
case 86:
            {
case 87:
                var24 = var11;
                var25 = var17[var24];
                if(var19 == var25) { _fun0007_ip = 86; continue _fun0007 }
case 88:
                var23 = var16.assignments;
                var23 = var23[var24];
                var24 = var23.variantId;
                var10 = var24;
                if(var19 == var24) { _fun0007_ip = 86; continue _fun0007 }
case 89:
                var23 = var21.HermesInternal;
                var23 = var23.concat;
                var23 = var23.bind(var20)(var25, var22, var24);
                var26 = _closure1_slot14;
                var25 = var18[var25];
                var25 = var26.bind(var1)(var25, var24);
                var26 = var4;
                if(!var25) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                var26 = var7;
case 90:
                var25 = var26.push;
                var25 = var25.bind(var26)(var23);
                var10 = var24;
                var3 = var23;
                _fun0007_ip = 86; continue _fun0007;
            }
case 80:
            var3 = _closure1_slot15;
            var8 = var3.bind(var1)(var8);
            var8 = _closure1_slot10;
            var8 = var3.bind(var1)(var9, var8);
            var6 = var3.bind(var1)(var6);
            var6 = _closure1_slot10;
            var6 = var3.bind(var1)(var7, var6);
            var5 = var3.bind(var1)(var5);
            var2 = _closure1_slot10;
            var2 = var3.bind(var1)(var4, var2);
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
                if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 92:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0008_ip = 93; continue _fun0008;
case 47:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 93:
                var1 = var3.bind(var4)(var5, var1);
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var6 = var3 instanceof Object ? var3 : var4;
                var4 = var6.set;
                var3 = _closure1_slot7;
                var5 = _closure1_slot16;
                var6 = var4.bind(var6)(var3, var5);
                var4 = var6.set;
                var3 = _closure1_slot8;
                var4 = var4.bind(var6)(var3, var5);
                var3 = var4.set;
                var2 = _closure1_slot9;
                var2 = var3.bind(var4)(var2, var5);
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