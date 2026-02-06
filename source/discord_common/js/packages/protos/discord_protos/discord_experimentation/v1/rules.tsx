// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var46 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var47 = dependencyMap;
    var _closure1_slot0 = var46;
    var _closure1_slot1 = var47;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot49;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot49 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var8 = 0;
    var2 = var47[var8];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var7 = 1;
    var2 = var47[var7];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var6 = 2;
    var2 = var47[var6];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var5 = 3;
    var2 = var47[var5];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var4 = 4;
    var2 = var47[var4];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var47[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var44 = {};
    var44['UNSPECIFIED'] = var8;
    var2 = 'UNSPECIFIED';
    var44[var8] = var2;
    var44['EXCLUDE'] = var7;
    var9 = 'EXCLUDE';
    var44[var7] = var9;
    var44['OVERRIDE'] = var6;
    var9 = 'OVERRIDE';
    var44[var6] = var9;
    var44['REQUIRE'] = var5;
    var9 = 'REQUIRE';
    var44[var5] = var9;
    var _closure1_slot8 = var44;
    var43 = {};
    var43['REGULAR'] = var8;
    var9 = 'REGULAR';
    var43[var8] = var9;
    var43['HOLDOUT'] = var7;
    var9 = 'HOLDOUT';
    var43[var7] = var9;
    var _closure1_slot9 = var43;
    var42 = {};
    var42['UNSPECIFIED'] = var8;
    var42[var8] = var2;
    var42['USER'] = var7;
    var2 = 'USER';
    var42[var7] = var2;
    var42['CLIENT'] = var6;
    var2 = 'CLIENT';
    var42[var6] = var2;
    var42['GUILD'] = var5;
    var2 = 'GUILD';
    var42[var5] = var2;
    var42['UTILITY'] = var4;
    var2 = 'UTILITY';
    var42[var4] = var2;
    var2 = 6;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Rule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'type', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_experimentation.v1.Rule.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(5);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'filters', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot11;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'override', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot10;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'is_sunset_rule', 'kind': 'scalar', 'T': 8};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'subtype', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_experimentation.v1.Rule.Subtype'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[4] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Rule'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'type': 0, 'filters': null, 'isSunsetRule': false, 'subtype': 0};
                var2 = new Array(0);
                var1['filters'] = var2;
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 6;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(!(var7 !== var29)) { _fun0004_ip = 19; continue _fun0004 }
case 11:
                if(!(var8 !== var29)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                if(!(var9 !== var29)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                if(!(var10 !== var29)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var25 = var23;
                if(!(var13 === var23)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 30:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var30 = var18.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var28;
                var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var35 = var23;
                var2 = new var35[var24](var34, var33);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 24:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['subtype'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 22:
                var2 = var20.bool;
                var2 = var2.bind(var20)();
                var1['isSunsetRule'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 20:
                var25 = _closure1_slot10;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.override;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['override'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 19:
                var24 = var1.filters;
                var23 = var24.push;
                var26 = _closure1_slot11;
                var25 = var26.internalBinaryRead;
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var2 = var25.bind(var26)(var20, var2, var19);
                var2 = var23.bind(var24)(var2);
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 17:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['type'] = var2;
                var22 = var4;
                var21 = var3;
case 28:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.type;
                var9 = 0;
                if(!(var9 !== var2)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.type;
                var2 = var4.bind(var6)(var2);
case 32:
                var2 = var5.filters;
                var2 = var2.length;
                var6 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var10 = 2;
                var8 = 0;
                if(!var6) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var13 = _closure1_slot11;
                var12 = var13.internalBinaryWrite;
                var6 = var5.filters;
                var11 = var6[var8];
                var14 = var1.tag;
                var15 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var15.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var14 = var14.bind(var1)(var10, var6);
                var6 = var14.fork;
                var6 = var6.bind(var14)();
                var11 = var12.bind(var13)(var11, var6, var3);
                var6 = var11.join;
                var6 = var6.bind(var11)();
                var8 = var8 + 1;
                var6 = var5.filters;
                var6 = var6.length;
                if(var8 < var6) { _fun0005_ip = 35; continue _fun0005 }
case 34:
                var6 = var5.override;
                if(!var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var11 = _closure1_slot10;
                var10 = var11.internalBinaryWrite;
                var8 = var5.override;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 3;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var8 = var10.bind(var11)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 36:
                var8 = var5.isSunsetRule;
                var6 = false;
                if(!(var6 !== var8)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 4;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.isSunsetRule;
                var8 = var10.bind(var11)(var8);
case 38:
                var8 = var5.subtype;
                if(!(var9 !== var8)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.Varint;
                var8 = 5;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.int32;
                var8 = var5.subtype;
                var8 = var9.bind(var10)(var8);
case 40:
                var3 = var3.writeUnknownFields;
                if(!(var6 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var6 = 1;
                if(!(var6 == var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 44:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 42:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var41 = var4 instanceof Object ? var4 : var5;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Override$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'variation_id', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Override'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['variationId'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0006_ip = 35; continue _fun0006 }
case 46:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 35:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 24; continue _fun0007 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0007_ip = 52; continue _fun0007;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['variationId'] = var2;
                var19 = var4;
                var18 = var3;
case 52:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0007_ip = 47; continue _fun0007 }
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.variationId;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0008_ip = 56; continue _fun0008 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.variationId;
                var2 = var3.bind(var4)(var2);
case 56:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 59:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 57:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var40 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var40;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Filter$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 2, 'name': 'client_version', 'kind': 'message', 'oneof': 'filter'};
            var6 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(23);
            var6[0] = var1;
            var1 = {'no': 3, 'name': 'client_os', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot23;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 4, 'name': 'staff', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot12;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 5, 'name': 'user_in_guild', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot13;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 6, 'name': 'user_ids', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot14;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 7, 'name': 'client_locale', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 8, 'name': 'client_location', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot18;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 9, 'name': 'client_ip', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot22;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 10, 'name': 'user_locale', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot15;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 11, 'name': 'bot', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot34;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 12, 'name': 'user_age_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot35;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 13, 'name': 'user_id_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot37;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 14, 'name': 'user_has_flag', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var1['T'] = var8;
            var6[12] = var1;
            var1 = {'no': 15, 'name': 'unit_id_in_range_by_hash', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot39;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 16, 'name': 'client_release_channel', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot40;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 17, 'name': 'always', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot41;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 18, 'name': 'client_system_locale', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot17;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 19, 'name': 'unit_id_in_experiment', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot42;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 20, 'name': 'user_premium_type', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot43;
                return var1;
            };
            var1['T'] = var8;
            var6[18] = var1;
            var1 = {'no': 21, 'name': 'unit_id_matches_filter_snapshot', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot44;
                return var1;
            };
            var1['T'] = var8;
            var6[19] = var1;
            var1 = {'no': 22, 'name': 'guild_ids', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot45;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 25, 'name': 'guild_member_count_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot46;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 26, 'name': 'guild_has_feature', 'kind': 'message', 'oneof': 'filter'};
            var7 = function T() {
                var1 = _closure1_slot47;
                return var1;
            };
            var1['T'] = var7;
            var6[22] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Filter'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['filter'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 61; continue _fun0009 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 61:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var42 = arg1;
                var41 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var42.pos;
                var3 = arg2;
                var40 = var4 + var3;
                var3 = var42.pos;
                var3 = var3 < var40;
                var39 = undefined;
                var37 = 6;
                var36 = true;
                var35 = false;
                var34 = 'throw';
                var33 = 'clientVersion';
                var32 = 'clientOs';
                var31 = 'staff';
                var30 = 'userInGuild';
                var29 = 'userIds';
                var28 = 'clientLocale';
                var27 = 'clientLocation';
                var26 = 'clientIp';
                var25 = 'userLocale';
                var24 = 'bot';
                var23 = 'userAgeRange';
                var22 = 'userIdRange';
                var21 = 'userHasFlag';
                var20 = 'unitIdInRangeByHash';
                var19 = 'clientReleaseChannel';
                var18 = 'always';
                var17 = 'clientSystemLocale';
                var16 = 'unitIdInExperiment';
                var15 = 'userPremiumType';
                var14 = 'unitIdMatchesFilterSnapshot';
                var13 = 'guildIds';
                var12 = 'guildMemberCountRange';
                var11 = 'guildHasFeature';
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                var3 = var42.tag;
                var7 = var3.bind(var42)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var39)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=2092, default_jump_address=1895, unsigned_min_value=2, unsigned_max_value=26) // Switch table: [1825, 1752, 1679, 1606, 1533, 1460, 1387, 1314, 1241, 1168, 1095, 1022, 949, 876, 803, 730, 657, 584, 511, 438, 365, 1895, 1895, 292, 219];
case 64:
                var3 = {};
                var3['oneofKind'] = var11;
                var46 = _closure1_slot47;
                var45 = var46.internalBinaryRead;
                var43 = var42.uint32;
                var52 = var43.bind(var42)();
                var43 = var1.filter;
                var50 = var43.guildHasFeature;
                var54 = var46;
                var53 = var42;
                var51 = var41;
                var43 = var54[var45](var53, var52, var51, var50, var49);
                var3['guildHasFeature'] = var43;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 66:
                var3 = {};
                var3['oneofKind'] = var12;
                var48 = _closure1_slot46;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.guildMemberCountRange;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['guildMemberCountRange'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 22:
                var3 = {};
                var3['oneofKind'] = var13;
                var48 = _closure1_slot45;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.guildIds;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['guildIds'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 67:
                var3 = {};
                var3['oneofKind'] = var14;
                var48 = _closure1_slot44;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.unitIdMatchesFilterSnapshot;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['unitIdMatchesFilterSnapshot'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 68:
                var3 = {};
                var3['oneofKind'] = var15;
                var48 = _closure1_slot43;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userPremiumType;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userPremiumType'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 69:
                var3 = {};
                var3['oneofKind'] = var16;
                var48 = _closure1_slot42;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.unitIdInExperiment;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['unitIdInExperiment'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 70:
                var3 = {};
                var3['oneofKind'] = var17;
                var48 = _closure1_slot17;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientSystemLocale;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientSystemLocale'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 71:
                var3 = {};
                var3['oneofKind'] = var18;
                var48 = _closure1_slot41;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.always;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['always'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 72:
                var3 = {};
                var3['oneofKind'] = var19;
                var48 = _closure1_slot40;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientReleaseChannel;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientReleaseChannel'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 73:
                var3 = {};
                var3['oneofKind'] = var20;
                var48 = _closure1_slot39;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.unitIdInRangeByHash;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['unitIdInRangeByHash'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 74:
                var3 = {};
                var3['oneofKind'] = var21;
                var48 = _closure1_slot38;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userHasFlag;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userHasFlag'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 75:
                var3 = {};
                var3['oneofKind'] = var22;
                var48 = _closure1_slot37;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userIdRange;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userIdRange'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 76:
                var3 = {};
                var3['oneofKind'] = var23;
                var48 = _closure1_slot35;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userAgeRange;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userAgeRange'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 77:
                var3 = {};
                var3['oneofKind'] = var24;
                var48 = _closure1_slot34;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.bot;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['bot'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 78:
                var3 = {};
                var3['oneofKind'] = var25;
                var48 = _closure1_slot15;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userLocale;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userLocale'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 79:
                var3 = {};
                var3['oneofKind'] = var26;
                var48 = _closure1_slot22;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientIp;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientIp'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 80:
                var3 = {};
                var3['oneofKind'] = var27;
                var48 = _closure1_slot18;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientLocation;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientLocation'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 81:
                var3 = {};
                var3['oneofKind'] = var28;
                var48 = _closure1_slot16;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientLocale;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientLocale'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 82:
                var3 = {};
                var3['oneofKind'] = var29;
                var48 = _closure1_slot14;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userIds;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userIds'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 83:
                var3 = {};
                var3['oneofKind'] = var30;
                var48 = _closure1_slot13;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.userInGuild;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['userInGuild'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 84:
                var3 = {};
                var3['oneofKind'] = var31;
                var48 = _closure1_slot12;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.staff;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['staff'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 85:
                var3 = {};
                var3['oneofKind'] = var32;
                var48 = _closure1_slot23;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientOs;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientOs'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 86:
                var3 = {};
                var3['oneofKind'] = var33;
                var48 = _closure1_slot28;
                var47 = var48.internalBinaryRead;
                var45 = var42.uint32;
                var52 = var45.bind(var42)();
                var45 = var1.filter;
                var50 = var45.clientVersion;
                var54 = var48;
                var53 = var42;
                var51 = var41;
                var45 = var54[var47](var53, var52, var51, var50, var49);
                var3['clientVersion'] = var45;
                var1['filter'] = var3;
                var44 = var5;
                var43 = var4;
                _fun0010_ip = 65; continue _fun0010;
case 87:
                var45 = var41.readUnknownField;
                if(!(var34 !== var45)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                var3 = var42.skip;
                var3 = var3.bind(var42)(var7);
                var44 = var45;
                var43 = var3;
                if(!(var35 !== var45)) { _fun0010_ip = 65; continue _fun0010 }
case 90:
                var47 = var45;
                if(!(var36 === var45)) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                var48 = _closure1_slot0;
                var46 = _closure1_slot1;
                var46 = var46[var37];
                var46 = var48.bind(var39)(var46);
                var46 = var46.UnknownFieldHandler;
                var47 = var46.onRead;
case 91:
                var53 = var2.typeName;
                var54 = undefined;
                var52 = var1;
                var51 = var8;
                var50 = var7;
                var49 = var3;
                var46 = var54[var47](var53, var52, var51, var50, var49, var48);
                var44 = var45;
                var43 = var3;
case 65:
                var3 = var42.pos;
                var5 = var44;
                var4 = var43;
                if(var3 < var40) { _fun0010_ip = 63; continue _fun0010 }
case 62:
                return var1;
case 88:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var49 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var54 = 'Unknown field ';
                var52 = ' (wire type ';
                var50 = ') for ';
                var53 = var8;
                var51 = var7;
                var53 = var54[var5](var53, var52, var51, var50, var49, var48);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var54 = var2;
                var1 = new var54[var3](var53, var52);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientVersion';
                if(!(var3 === var4)) { _fun0011_ip = 18; continue _fun0011 }
case 93:
                var7 = _closure1_slot28;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 18:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientOs';
                if(!(var3 === var4)) { _fun0011_ip = 94; continue _fun0011 }
case 59:
                var7 = _closure1_slot23;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientOs;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 94:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'staff';
                if(!(var3 === var4)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                var7 = _closure1_slot12;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.staff;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 95:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userInGuild';
                if(!(var3 === var4)) { _fun0011_ip = 97; continue _fun0011 }
case 98:
                var7 = _closure1_slot13;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userInGuild;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 97:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userIds';
                if(!(var3 === var4)) { _fun0011_ip = 99; continue _fun0011 }
case 100:
                var7 = _closure1_slot14;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userIds;
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 6;
                var10 = var3[var8];
                var3 = undefined;
                var3 = var11.bind(var3)(var10);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 99:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientLocale';
                if(!(var3 === var4)) { _fun0011_ip = 101; continue _fun0011 }
case 102:
                var7 = _closure1_slot16;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 7;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 101:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientLocation';
                if(!(var3 === var4)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
                var7 = _closure1_slot18;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientLocation;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 8;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 103:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientIp';
                if(!(var3 === var4)) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                var7 = _closure1_slot22;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientIp;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 9;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 105:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userLocale';
                if(!(var3 === var4)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                var7 = _closure1_slot15;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 107:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'bot';
                if(!(var3 === var4)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                var7 = _closure1_slot34;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.bot;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 109:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userAgeRange';
                if(!(var3 === var4)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
                var7 = _closure1_slot35;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userAgeRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 12;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 111:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userIdRange';
                if(!(var3 === var4)) { _fun0011_ip = 113; continue _fun0011 }
case 114:
                var7 = _closure1_slot37;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userIdRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 13;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userHasFlag';
                if(!(var3 === var4)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
                var7 = _closure1_slot38;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userHasFlag;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 14;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 115:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'unitIdInRangeByHash';
                if(!(var3 === var4)) { _fun0011_ip = 117; continue _fun0011 }
case 82:
                var7 = _closure1_slot39;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdInRangeByHash;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 15;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 117:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientReleaseChannel';
                if(!(var3 === var4)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                var7 = _closure1_slot40;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientReleaseChannel;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 16;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 118:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'always';
                if(!(var3 === var4)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                var7 = _closure1_slot41;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.always;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 17;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 120:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'clientSystemLocale';
                if(!(var3 === var4)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                var7 = _closure1_slot17;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientSystemLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 18;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 122:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'unitIdInExperiment';
                if(!(var3 === var4)) { _fun0011_ip = 124; continue _fun0011 }
case 125:
                var7 = _closure1_slot42;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdInExperiment;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 19;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 124:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'userPremiumType';
                if(!(var3 === var4)) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                var7 = _closure1_slot43;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userPremiumType;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 20;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 126:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'unitIdMatchesFilterSnapshot';
                if(!(var3 === var4)) { _fun0011_ip = 128; continue _fun0011 }
case 129:
                var7 = _closure1_slot44;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdMatchesFilterSnapshot;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 21;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 128:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'guildIds';
                if(!(var3 === var4)) { _fun0011_ip = 130; continue _fun0011 }
case 131:
                var7 = _closure1_slot45;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildIds;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 22;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 130:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'guildMemberCountRange';
                if(!(var3 === var4)) { _fun0011_ip = 132; continue _fun0011 }
case 133:
                var7 = _closure1_slot46;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildMemberCountRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 25;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 132:
                var3 = var5.filter;
                var4 = var3.oneofKind;
                var3 = 'guildHasFeature';
                if(!(var3 === var4)) { _fun0011_ip = 134; continue _fun0011 }
case 135:
                var7 = _closure1_slot47;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildHasFeature;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 26;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 134:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 138; continue _fun0011 }
case 139:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 138:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 136:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var39 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var39;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function StaffUsers$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'work_accounts', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'personal_accounts', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.StaffUsers'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'workAccounts': false, 'personalAccounts': false};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 140:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 13; continue _fun0013 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0013_ip = 142; continue _fun0013 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0013_ip = 143; continue _fun0013 }
case 49:
                if(!(var7 !== var26)) { _fun0013_ip = 144; continue _fun0013 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0013_ip = 146; continue _fun0013 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0013_ip = 148; continue _fun0013 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0013_ip = 149; continue _fun0013 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0013_ip = 148; continue _fun0013;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['personalAccounts'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0013_ip = 148; continue _fun0013;
case 143:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAccounts'] = var2;
                var19 = var4;
                var18 = var3;
case 148:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0013_ip = 47; continue _fun0013 }
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.workAccounts;
                var2 = false;
                if(!(var2 !== var3)) { _fun0014_ip = 56; continue _fun0014 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.workAccounts;
                var3 = var4.bind(var6)(var3);
case 56:
                var3 = var5.personalAccounts;
                if(!(var2 !== var3)) { _fun0014_ip = 57; continue _fun0014 }
case 151:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.personalAccounts;
                var3 = var4.bind(var6)(var3);
case 57:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0014_ip = 152; continue _fun0014 }
case 153:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 64; continue _fun0014 }
case 154:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 64:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 152:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var38 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot12 = var38;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserInGuild$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserInGuild'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['guildIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0015_ip = 155; continue _fun0015 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0016_ip = 13; continue _fun0016 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0016_ip = 157; continue _fun0016 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0016_ip = 159; continue _fun0016 }
case 140:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0016_ip = 37; continue _fun0016 }
case 160:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0016_ip = 161; continue _fun0016 }
case 162:
                var25 = var23;
                if(!(var11 === var23)) { _fun0016_ip = 163; continue _fun0016 }
case 57:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 163:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0016_ip = 161; continue _fun0016;
case 37:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 159:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0016_ip = 164; continue _fun0016 }
case 165:
                var23 = var1.guildIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0016_ip = 161; continue _fun0016;
case 164:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0016_ip = 161; continue _fun0016 }
case 166:
                var24 = var1.guildIds;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0016_ip = 166; continue _fun0016 }
case 161:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0016_ip = 158; continue _fun0016 }
case 157:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(!var2) { _fun0017_ip = 167; continue _fun0017 }
case 168:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.guildIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0017_ip = 169; continue _fun0017 }
case 170:
                var4 = var1.fixed64;
                var2 = var5.guildIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0017_ip = 170; continue _fun0017 }
case 169:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 167:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 146; continue _fun0017 }
case 171:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 172; continue _fun0017 }
case 173:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 172:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 146:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var37 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var37;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'user_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserIds'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['userIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0019_ip = 13; continue _fun0019 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0019_ip = 157; continue _fun0019 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0019_ip = 159; continue _fun0019 }
case 140:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0019_ip = 37; continue _fun0019 }
case 160:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0019_ip = 161; continue _fun0019 }
case 162:
                var25 = var23;
                if(!(var11 === var23)) { _fun0019_ip = 163; continue _fun0019 }
case 57:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 163:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0019_ip = 161; continue _fun0019;
case 37:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 159:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                var23 = var1.userIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0019_ip = 161; continue _fun0019;
case 164:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0019_ip = 161; continue _fun0019 }
case 166:
                var24 = var1.userIds;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0019_ip = 166; continue _fun0019 }
case 161:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0019_ip = 158; continue _fun0019 }
case 157:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.userIds;
                var2 = var2.length;
                if(!var2) { _fun0020_ip = 167; continue _fun0020 }
case 168:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.userIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0020_ip = 169; continue _fun0020 }
case 170:
                var4 = var1.fixed64;
                var2 = var5.userIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.userIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0020_ip = 170; continue _fun0020 }
case 169:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 167:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 146; continue _fun0020 }
case 171:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 172; continue _fun0020 }
case 173:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 172:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 146:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var36 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot14 = var36;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'locales', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserLocale'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['locales'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0021_ip = 155; continue _fun0021 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0022_ip = 13; continue _fun0022 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0022_ip = 174; continue _fun0022 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0022_ip = 48; continue _fun0022 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0022_ip = 50; continue _fun0022 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0022_ip = 175; continue _fun0022 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0022_ip = 54; continue _fun0022 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0022_ip = 175; continue _fun0022;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0022_ip = 47; continue _fun0022 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.locales;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0023_ip = 176; continue _fun0023 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.locales;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.locales;
                var3 = var3.length;
                if(var8 < var3) { _fun0023_ip = 177; continue _fun0023 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0023_ip = 178; continue _fun0023 }
case 179:
                if(!(var6 == var3)) { _fun0023_ip = 57; continue _fun0023 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var35 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot15 = var35;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'locales', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientLocale'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['locales'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0024_ip = 155; continue _fun0024 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0025_ip = 13; continue _fun0025 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0025_ip = 174; continue _fun0025 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0025_ip = 48; continue _fun0025 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0025_ip = 50; continue _fun0025 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0025_ip = 175; continue _fun0025 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0025_ip = 54; continue _fun0025 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0025_ip = 175; continue _fun0025;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0025_ip = 47; continue _fun0025 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.locales;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0026_ip = 176; continue _fun0026 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.locales;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.locales;
                var3 = var3.length;
                if(var8 < var3) { _fun0026_ip = 177; continue _fun0026 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0026_ip = 178; continue _fun0026 }
case 179:
                if(!(var6 == var3)) { _fun0026_ip = 57; continue _fun0026 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var34 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var34;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientSystemLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'locales', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientSystemLocale'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['locales'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0027_ip = 155; continue _fun0027 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0028_ip = 13; continue _fun0028 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0028_ip = 174; continue _fun0028 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0028_ip = 48; continue _fun0028 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0028_ip = 50; continue _fun0028 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0028_ip = 175; continue _fun0028 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0028_ip = 54; continue _fun0028 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0028_ip = 175; continue _fun0028;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0028_ip = 47; continue _fun0028 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.locales;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0029_ip = 176; continue _fun0029 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.locales;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.locales;
                var3 = var3.length;
                if(var8 < var3) { _fun0029_ip = 177; continue _fun0029 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0029_ip = 178; continue _fun0029 }
case 179:
                if(!(var6 == var3)) { _fun0029_ip = 57; continue _fun0029 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var33 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var33;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'locations', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientLocation'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['locations'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0030_ip = 155; continue _fun0030 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0031_ip = 13; continue _fun0031 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0031_ip = 180; continue _fun0031 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0031_ip = 181; continue _fun0031 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0031_ip = 182; continue _fun0031 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0031_ip = 183; continue _fun0031 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0031_ip = 54; continue _fun0031 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0031_ip = 183; continue _fun0031;
case 182:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 181:
                var21 = var1.locations;
                var20 = var21.push;
                var23 = _closure1_slot21;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 183:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0031_ip = 47; continue _fun0031 }
case 180:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.locations;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0032_ip = 184; continue _fun0032 }
case 185:
                var12 = _closure1_slot21;
                var11 = var12.internalBinaryWrite;
                var8 = var5.locations;
                var10 = var8[var9];
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var6, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
                var9 = var9 + 1;
                var8 = var5.locations;
                var8 = var8.length;
                if(var9 < var8) { _fun0032_ip = 185; continue _fun0032 }
case 184:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0032_ip = 186; continue _fun0032 }
case 162:
                if(!(var6 == var3)) { _fun0032_ip = 187; continue _fun0032 }
case 188:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 187:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 186:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var32 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var32;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_Place$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'city', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'subdivision', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'country', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientLocation.Place'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'city': '', 'subdivision': '', 'country': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0033_ip = 189; continue _fun0033 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 189:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 13; continue _fun0034 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0034_ip = 190; continue _fun0034 }
case 56:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0034_ip = 191; continue _fun0034 }
case 155:
                if(!(var7 !== var27)) { _fun0034_ip = 165; continue _fun0034 }
case 51:
                if(!(var8 !== var27)) { _fun0034_ip = 192; continue _fun0034 }
case 147:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0034_ip = 193; continue _fun0034 }
case 184:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0034_ip = 194; continue _fun0034 }
case 195:
                var23 = var21;
                if(!(var11 === var21)) { _fun0034_ip = 196; continue _fun0034 }
case 63:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 196:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0034_ip = 194; continue _fun0034;
case 193:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 192:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['country'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 194; continue _fun0034;
case 165:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['subdivision'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 194; continue _fun0034;
case 191:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['city'] = var2;
                var20 = var4;
                var19 = var3;
case 194:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0034_ip = 56; continue _fun0034 }
case 190:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.city;
                var3 = '';
                if(!(var3 !== var2)) { _fun0035_ip = 32; continue _fun0035 }
case 33:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.city;
                var2 = var4.bind(var6)(var2);
case 32:
                var2 = var5.subdivision;
                if(!(var3 !== var2)) { _fun0035_ip = 57; continue _fun0035 }
case 197:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.subdivision;
                var2 = var4.bind(var6)(var2);
case 57:
                var2 = var5.country;
                if(!(var3 !== var2)) { _fun0035_ip = 193; continue _fun0035 }
case 198:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.country;
                var2 = var3.bind(var4)(var2);
case 193:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0035_ip = 199; continue _fun0035 }
case 200:
                var2 = 1;
                if(!(var2 == var4)) { _fun0035_ip = 201; continue _fun0035 }
case 96:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 201:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 199:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var31 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var31;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_ISORegion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'iso_country', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'iso_subdivision', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientLocation.ISORegion'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'isoCountry': '', 'isoSubdivision': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0036_ip = 189; continue _fun0036 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 189:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0037_ip = 13; continue _fun0037 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0037_ip = 202; continue _fun0037 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0037_ip = 203; continue _fun0037 }
case 49:
                if(!(var7 !== var26)) { _fun0037_ip = 144; continue _fun0037 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0037_ip = 146; continue _fun0037 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0037_ip = 204; continue _fun0037 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0037_ip = 149; continue _fun0037 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0037_ip = 204; continue _fun0037;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var1['isoSubdivision'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0037_ip = 204; continue _fun0037;
case 203:
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var1['isoCountry'] = var2;
                var19 = var4;
                var18 = var3;
case 204:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0037_ip = 47; continue _fun0037 }
case 202:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.isoCountry;
                var3 = '';
                if(!(var3 !== var2)) { _fun0038_ip = 32; continue _fun0038 }
case 33:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.isoCountry;
                var2 = var4.bind(var6)(var2);
case 32:
                var2 = var5.isoSubdivision;
                if(!(var3 !== var2)) { _fun0038_ip = 57; continue _fun0038 }
case 197:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 2;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.isoSubdivision;
                var2 = var3.bind(var4)(var2);
case 57:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0038_ip = 205; continue _fun0038 }
case 206:
                var2 = 1;
                if(!(var2 == var4)) { _fun0038_ip = 182; continue _fun0038 }
case 207:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 205:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var30 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot20 = var30;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_Location$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'iso_region', 'kind': 'message', 'oneof': 'location'};
            var6 = function T() {
                var1 = _closure1_slot20;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'is_eu', 'kind': 'scalar', 'oneof': 'location', 'T': 8};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'place', 'kind': 'message', 'oneof': 'location'};
            var7 = function T() {
                var1 = _closure1_slot19;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientLocation.Location'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['location'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0039_ip = 61; continue _fun0039 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 61:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0040_ip = 13; continue _fun0040 }
case 14:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 13:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var16 = 'isoRegion';
                var14 = 'isEu';
                var13 = 'place';
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0040_ip = 208; continue _fun0040 }
case 209:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0040_ip = 210; continue _fun0040 }
case 211:
                if(!(var7 !== var30)) { _fun0040_ip = 212; continue _fun0040 }
case 213:
                if(!(var8 !== var30)) { _fun0040_ip = 214; continue _fun0040 }
case 215:
                var24 = var20.readUnknownField;
                if(!(var9 !== var24)) { _fun0040_ip = 216; continue _fun0040 }
case 162:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var10 !== var24)) { _fun0040_ip = 217; continue _fun0040 }
case 218:
                var26 = var24;
                if(!(var11 === var24)) { _fun0040_ip = 219; continue _fun0040 }
case 54:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var12];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 219:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0040_ip = 217; continue _fun0040;
case 216:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var31 = var19.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var29;
                var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var36 = var24;
                var2 = new var36[var25](var35, var34);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 214:
                var2 = {};
                var2['oneofKind'] = var13;
                var27 = _closure1_slot19;
                var26 = var27.internalBinaryRead;
                var24 = var21.uint32;
                var34 = var24.bind(var21)();
                var24 = var1.location;
                var32 = var24.place;
                var36 = var27;
                var35 = var21;
                var33 = var20;
                var24 = var36[var26](var35, var34, var33, var32, var31);
                var2['place'] = var24;
                var1['location'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0040_ip = 217; continue _fun0040;
case 212:
                var2 = {};
                var2['oneofKind'] = var14;
                var24 = var21.bool;
                var24 = var24.bind(var21)();
                var2['isEu'] = var24;
                var1['location'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0040_ip = 217; continue _fun0040;
case 210:
                var2 = {};
                var2['oneofKind'] = var16;
                var27 = _closure1_slot20;
                var26 = var27.internalBinaryRead;
                var24 = var21.uint32;
                var34 = var24.bind(var21)();
                var24 = var1.location;
                var32 = var24.isoRegion;
                var36 = var27;
                var35 = var21;
                var33 = var20;
                var24 = var36[var26](var35, var34, var33, var32, var31);
                var2['isoRegion'] = var24;
                var1['location'] = var2;
                var23 = var4;
                var22 = var3;
case 217:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0040_ip = 209; continue _fun0040 }
case 208:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.location;
                var4 = var3.oneofKind;
                var3 = 'isoRegion';
                if(!(var3 === var4)) { _fun0041_ip = 18; continue _fun0041 }
case 93:
                var7 = _closure1_slot20;
                var6 = var7.internalBinaryWrite;
                var4 = var5.location;
                var4 = var4.isoRegion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 18:
                var3 = var5.location;
                var4 = var3.oneofKind;
                var3 = 'isEu';
                if(!(var3 === var4)) { _fun0041_ip = 220; continue _fun0041 }
case 59:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.location;
                var3 = var3.isEu;
                var3 = var4.bind(var6)(var3);
case 220:
                var3 = var5.location;
                var4 = var3.oneofKind;
                var3 = 'place';
                if(!(var3 === var4)) { _fun0041_ip = 143; continue _fun0041 }
case 221:
                var7 = _closure1_slot19;
                var6 = var7.internalBinaryWrite;
                var4 = var5.location;
                var4 = var4.place;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 143:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0041_ip = 222; continue _fun0041 }
case 223:
                var2 = 1;
                if(!(var2 == var4)) { _fun0041_ip = 224; continue _fun0041 }
case 225:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 224:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 222:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var29 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var29;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientIP$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'blocks', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientIP'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['blocks'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0042_ip = 155; continue _fun0042 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0043_ip = 13; continue _fun0043 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0043_ip = 174; continue _fun0043 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0043_ip = 48; continue _fun0043 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0043_ip = 50; continue _fun0043 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0043_ip = 175; continue _fun0043 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0043_ip = 54; continue _fun0043 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0043_ip = 175; continue _fun0043;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.blocks;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0043_ip = 47; continue _fun0043 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.blocks;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0044_ip = 176; continue _fun0044 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.blocks;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.blocks;
                var3 = var3.length;
                if(var8 < var3) { _fun0044_ip = 177; continue _fun0044 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0044_ip = 178; continue _fun0044 }
case 179:
                if(!(var6 == var3)) { _fun0044_ip = 57; continue _fun0044 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var28 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot22 = var28;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientOperatingSystem$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'ios_version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(7);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'android_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'macos_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'windows_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'playstation_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'xbox_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'linux_version', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var7;
            var6[6] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientOperatingSystem'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0045_ip = 226; continue _fun0045 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 13; continue _fun0046 }
case 14:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 13:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 7;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0046_ip = 228; continue _fun0046 }
case 229:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0046_ip = 230; continue _fun0046 }
case 160:
                if(!(var7 !== var30)) { _fun0046_ip = 231; continue _fun0046 }
case 232:
                if(!(var8 !== var30)) { _fun0046_ip = 233; continue _fun0046 }
case 169:
                if(!(var9 !== var30)) { _fun0046_ip = 234; continue _fun0046 }
case 235:
                if(!(var10 !== var30)) { _fun0046_ip = 236; continue _fun0046 }
case 237:
                if(!(var15 !== var30)) { _fun0046_ip = 238; continue _fun0046 }
case 27:
                if(!(var11 !== var30)) { _fun0046_ip = 239; continue _fun0046 }
case 240:
                var24 = var20.readUnknownField;
                if(!(var12 !== var24)) { _fun0046_ip = 241; continue _fun0046 }
case 242:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var13 !== var24)) { _fun0046_ip = 243; continue _fun0046 }
case 186:
                var26 = var24;
                if(!(var14 === var24)) { _fun0046_ip = 244; continue _fun0046 }
case 245:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var15];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 244:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0046_ip = 243; continue _fun0046;
case 241:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var31 = var19.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var29;
                var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var36 = var24;
                var2 = new var36[var25](var35, var34);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 239:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.linuxVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['linuxVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 238:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.xboxVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['xboxVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 236:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.playstationVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['playstationVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 234:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.windowsVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['windowsVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 233:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.macosVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['macosVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 231:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.androidVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['androidVersion'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0046_ip = 243; continue _fun0046;
case 230:
                var26 = _closure1_slot24;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.iosVersion;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['iosVersion'] = var2;
                var23 = var4;
                var22 = var3;
case 243:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0046_ip = 229; continue _fun0046 }
case 228:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.iosVersion;
                if(!var3) { _fun0047_ip = 226; continue _fun0047 }
case 14:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.iosVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 226:
                var3 = var5.androidVersion;
                if(!var3) { _fun0047_ip = 245; continue _fun0047 }
case 155:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.androidVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 245:
                var3 = var5.macosVersion;
                if(!var3) { _fun0047_ip = 246; continue _fun0047 }
case 34:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.macosVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 246:
                var3 = var5.windowsVersion;
                if(!var3) { _fun0047_ip = 247; continue _fun0047 }
case 248:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.windowsVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 247:
                var3 = var5.playstationVersion;
                if(!var3) { _fun0047_ip = 249; continue _fun0047 }
case 250:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.playstationVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 249:
                var3 = var5.xboxVersion;
                if(!var3) { _fun0047_ip = 251; continue _fun0047 }
case 234:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.xboxVersion;
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 6;
                var10 = var3[var8];
                var3 = undefined;
                var3 = var11.bind(var3)(var10);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 251:
                var3 = var5.linuxVersion;
                if(!var3) { _fun0047_ip = 252; continue _fun0047 }
case 253:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.linuxVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 7;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 252:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0047_ip = 254; continue _fun0047 }
case 255:
                var2 = 1;
                if(!(var2 == var4)) { _fun0047_ip = 256; continue _fun0047 }
case 257:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 256:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 254:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var27 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot23 = var27;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'ranges', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot25;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'work_around_pyoto_bug', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.SDKVersion'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['ranges'] = var2;
                var11 = false;
                var1['workAroundPyotoBug'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0048_ip = 258; continue _fun0048 }
case 229:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 258:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0049_ip = 13; continue _fun0049 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0049_ip = 259; continue _fun0049 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0049_ip = 143; continue _fun0049 }
case 49:
                if(!(var7 !== var26)) { _fun0049_ip = 144; continue _fun0049 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0049_ip = 146; continue _fun0049 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0049_ip = 260; continue _fun0049 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0049_ip = 149; continue _fun0049 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0049_ip = 260; continue _fun0049;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAroundPyotoBug'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0049_ip = 260; continue _fun0049;
case 143:
                var21 = var1.ranges;
                var20 = var21.push;
                var23 = _closure1_slot25;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 260:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0049_ip = 47; continue _fun0049 }
case 259:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.ranges;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0050_ip = 184; continue _fun0050 }
case 185:
                var12 = _closure1_slot25;
                var11 = var12.internalBinaryWrite;
                var8 = var5.ranges;
                var10 = var8[var9];
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var6, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
                var9 = var9 + 1;
                var8 = var5.ranges;
                var8 = var8.length;
                if(var9 < var8) { _fun0050_ip = 185; continue _fun0050 }
case 184:
                var9 = var5.workAroundPyotoBug;
                var8 = false;
                if(!(var8 !== var9)) { _fun0050_ip = 261; continue _fun0050 }
case 162:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 2;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.workAroundPyotoBug;
                var9 = var10.bind(var11)(var9);
case 261:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0050_ip = 262; continue _fun0050 }
case 263:
                if(!(var6 == var3)) { _fun0050_ip = 264; continue _fun0050 }
case 146:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 264:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 262:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var26 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot24 = var26;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'lower_bound', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'upper_bound', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.SDKVersionRange'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0051_ip = 226; continue _fun0051 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0052_ip = 13; continue _fun0052 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0052_ip = 265; continue _fun0052 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0052_ip = 266; continue _fun0052 }
case 49:
                if(!(var7 !== var26)) { _fun0052_ip = 144; continue _fun0052 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0052_ip = 146; continue _fun0052 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0052_ip = 267; continue _fun0052 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0052_ip = 149; continue _fun0052 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0052_ip = 267; continue _fun0052;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var22 = _closure1_slot26;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.upperBound;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['upperBound'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0052_ip = 267; continue _fun0052;
case 266:
                var22 = _closure1_slot26;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.lowerBound;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['lowerBound'] = var2;
                var19 = var4;
                var18 = var3;
case 267:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0052_ip = 47; continue _fun0052 }
case 265:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.lowerBound;
                if(!var3) { _fun0053_ip = 226; continue _fun0053 }
case 14:
                var7 = _closure1_slot26;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lowerBound;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 226:
                var3 = var5.upperBound;
                if(!var3) { _fun0053_ip = 245; continue _fun0053 }
case 155:
                var7 = _closure1_slot26;
                var6 = var7.internalBinaryWrite;
                var4 = var5.upperBound;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 245:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0053_ip = 268; continue _fun0053 }
case 30:
                var2 = 1;
                if(!(var2 == var4)) { _fun0053_ip = 269; continue _fun0053 }
case 270:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 269:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 268:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var25 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot25 = var25;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionRangeBound$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot27;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'inclusive', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.SDKVersionRangeBound'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['inclusive'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0054_ip = 271; continue _fun0054 }
case 56:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 271:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0055_ip = 13; continue _fun0055 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0055_ip = 272; continue _fun0055 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0055_ip = 143; continue _fun0055 }
case 49:
                if(!(var7 !== var26)) { _fun0055_ip = 144; continue _fun0055 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0055_ip = 146; continue _fun0055 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0055_ip = 273; continue _fun0055 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0055_ip = 149; continue _fun0055 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0055_ip = 273; continue _fun0055;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['inclusive'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0055_ip = 273; continue _fun0055;
case 143:
                var22 = _closure1_slot27;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.version;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['version'] = var2;
                var19 = var4;
                var18 = var3;
case 273:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0055_ip = 47; continue _fun0055 }
case 272:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.version;
                if(!var2) { _fun0056_ip = 226; continue _fun0056 }
case 14:
                var7 = _closure1_slot27;
                var6 = var7.internalBinaryWrite;
                var4 = var5.version;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 226:
                var4 = var5.inclusive;
                var2 = false;
                if(!(var2 !== var4)) { _fun0056_ip = 274; continue _fun0056 }
case 189:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 2;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.inclusive;
                var4 = var6.bind(var7)(var4);
case 274:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0056_ip = 275; continue _fun0056 }
case 276:
                var2 = 1;
                if(!(var2 == var4)) { _fun0056_ip = 277; continue _fun0056 }
case 278:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 277:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 275:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var24 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var24;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionSpecifier$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'version', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.SDKVersionSpecifier'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['version'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0057_ip = 35; continue _fun0057 }
case 46:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 35:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0058_ip = 13; continue _fun0058 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0058_ip = 24; continue _fun0058 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0058_ip = 48; continue _fun0058 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0058_ip = 50; continue _fun0058 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0058_ip = 52; continue _fun0058 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0058_ip = 54; continue _fun0058 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0058_ip = 52; continue _fun0058;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['version'] = var2;
                var19 = var4;
                var18 = var3;
case 52:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0058_ip = 47; continue _fun0058 }
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.version;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0059_ip = 56; continue _fun0059 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.version;
                var2 = var3.bind(var4)(var2);
case 56:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0059_ip = 57; continue _fun0059 }
case 58:
                var2 = 1;
                if(!(var2 == var4)) { _fun0059_ip = 59; continue _fun0059 }
case 60:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 59:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 57:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var23 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var23;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientPlatform$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'ios_version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(6);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'android_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'web_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'native_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 6, 'name': 'allow_non_native_web', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 5, 'name': 'client_required_changes', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot33;
                return var1;
            };
            var1['T'] = var7;
            var6[5] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientPlatform'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['allowNonNativeWeb'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0060_ip = 271; continue _fun0060 }
case 56:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 271:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0061_ip = 13; continue _fun0061 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 6;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0061_ip = 279; continue _fun0061 }
case 16:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0061_ip = 280; continue _fun0061 }
case 18:
                if(!(var7 !== var29)) { _fun0061_ip = 281; continue _fun0061 }
case 11:
                if(!(var8 !== var29)) { _fun0061_ip = 282; continue _fun0061 }
case 21:
                if(!(var9 !== var29)) { _fun0061_ip = 283; continue _fun0061 }
case 23:
                if(!(var14 !== var29)) { _fun0061_ip = 272; continue _fun0061 }
case 25:
                if(!(var10 !== var29)) { _fun0061_ip = 284; continue _fun0061 }
case 285:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0061_ip = 286; continue _fun0061 }
case 240:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0061_ip = 287; continue _fun0061 }
case 31:
                var25 = var23;
                if(!(var13 === var23)) { _fun0061_ip = 270; continue _fun0061 }
case 288:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 270:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0061_ip = 287; continue _fun0061;
case 286:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var30 = var18.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var28;
                var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var35 = var23;
                var2 = new var35[var24](var34, var33);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 284:
                var25 = _closure1_slot33;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.clientRequiredChanges;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['clientRequiredChanges'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0061_ip = 287; continue _fun0061;
case 272:
                var2 = var20.bool;
                var2 = var2.bind(var20)();
                var1['allowNonNativeWeb'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0061_ip = 287; continue _fun0061;
case 283:
                var25 = _closure1_slot29;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.nativeVersion;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['nativeVersion'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0061_ip = 287; continue _fun0061;
case 282:
                var25 = _closure1_slot29;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.webVersion;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['webVersion'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0061_ip = 287; continue _fun0061;
case 281:
                var25 = _closure1_slot29;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.androidVersion;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['androidVersion'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0061_ip = 287; continue _fun0061;
case 280:
                var25 = _closure1_slot29;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.iosVersion;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['iosVersion'] = var2;
                var22 = var4;
                var21 = var3;
case 287:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0061_ip = 16; continue _fun0061 }
case 279:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.iosVersion;
                if(!var2) { _fun0062_ip = 226; continue _fun0062 }
case 14:
                var7 = _closure1_slot29;
                var6 = var7.internalBinaryWrite;
                var4 = var5.iosVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 226:
                var2 = var5.androidVersion;
                if(!var2) { _fun0062_ip = 245; continue _fun0062 }
case 155:
                var7 = _closure1_slot29;
                var6 = var7.internalBinaryWrite;
                var4 = var5.androidVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 2;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 245:
                var2 = var5.webVersion;
                if(!var2) { _fun0062_ip = 246; continue _fun0062 }
case 34:
                var7 = _closure1_slot29;
                var6 = var7.internalBinaryWrite;
                var4 = var5.webVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 246:
                var2 = var5.nativeVersion;
                if(!var2) { _fun0062_ip = 247; continue _fun0062 }
case 248:
                var7 = _closure1_slot29;
                var6 = var7.internalBinaryWrite;
                var4 = var5.nativeVersion;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 4;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 247:
                var4 = var5.allowNonNativeWeb;
                var2 = false;
                if(!(var2 !== var4)) { _fun0062_ip = 289; continue _fun0062 }
case 290:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 6;
                var8 = var4[var6];
                var4 = undefined;
                var4 = var9.bind(var4)(var8);
                var4 = var4.WireType;
                var4 = var4.Varint;
                var7 = var7.bind(var1)(var6, var4);
                var6 = var7.bool;
                var4 = var5.allowNonNativeWeb;
                var4 = var6.bind(var7)(var4);
case 289:
                var4 = var5.clientRequiredChanges;
                if(!var4) { _fun0062_ip = 280; continue _fun0062 }
case 157:
                var8 = _closure1_slot33;
                var7 = var8.internalBinaryWrite;
                var6 = var5.clientRequiredChanges;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 5;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 280:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0062_ip = 291; continue _fun0062 }
case 292:
                var2 = 1;
                if(!(var2 == var4)) { _fun0062_ip = 293; continue _fun0062 }
case 294:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 293:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 291:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var22;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'ranges', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'work_around_pyoto_bug', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.PlatformVersion'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['ranges'] = var2;
                var11 = false;
                var1['workAroundPyotoBug'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0063_ip = 258; continue _fun0063 }
case 229:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 258:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0064_ip = 13; continue _fun0064 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0064_ip = 259; continue _fun0064 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0064_ip = 143; continue _fun0064 }
case 49:
                if(!(var7 !== var26)) { _fun0064_ip = 144; continue _fun0064 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0064_ip = 146; continue _fun0064 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0064_ip = 260; continue _fun0064 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0064_ip = 149; continue _fun0064 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0064_ip = 260; continue _fun0064;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAroundPyotoBug'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0064_ip = 260; continue _fun0064;
case 143:
                var21 = var1.ranges;
                var20 = var21.push;
                var23 = _closure1_slot30;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 260:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0064_ip = 47; continue _fun0064 }
case 259:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.ranges;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0065_ip = 184; continue _fun0065 }
case 185:
                var12 = _closure1_slot30;
                var11 = var12.internalBinaryWrite;
                var8 = var5.ranges;
                var10 = var8[var9];
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var6, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
                var9 = var9 + 1;
                var8 = var5.ranges;
                var8 = var8.length;
                if(var9 < var8) { _fun0065_ip = 185; continue _fun0065 }
case 184:
                var9 = var5.workAroundPyotoBug;
                var8 = false;
                if(!(var8 !== var9)) { _fun0065_ip = 261; continue _fun0065 }
case 162:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 2;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.workAroundPyotoBug;
                var9 = var10.bind(var11)(var9);
case 261:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0065_ip = 262; continue _fun0065 }
case 263:
                if(!(var6 == var3)) { _fun0065_ip = 264; continue _fun0065 }
case 146:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 264:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 262:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var21 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var21;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'lower_bound', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'upper_bound', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.PlatformVersionRange'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0066_ip = 226; continue _fun0066 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0067_ip = 13; continue _fun0067 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0067_ip = 265; continue _fun0067 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0067_ip = 266; continue _fun0067 }
case 49:
                if(!(var7 !== var26)) { _fun0067_ip = 144; continue _fun0067 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0067_ip = 146; continue _fun0067 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0067_ip = 267; continue _fun0067 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0067_ip = 149; continue _fun0067 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0067_ip = 267; continue _fun0067;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var22 = _closure1_slot31;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.upperBound;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['upperBound'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0067_ip = 267; continue _fun0067;
case 266:
                var22 = _closure1_slot31;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.lowerBound;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['lowerBound'] = var2;
                var19 = var4;
                var18 = var3;
case 267:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0067_ip = 47; continue _fun0067 }
case 265:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.lowerBound;
                if(!var3) { _fun0068_ip = 226; continue _fun0068 }
case 14:
                var7 = _closure1_slot31;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lowerBound;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 226:
                var3 = var5.upperBound;
                if(!var3) { _fun0068_ip = 245; continue _fun0068 }
case 155:
                var7 = _closure1_slot31;
                var6 = var7.internalBinaryWrite;
                var4 = var5.upperBound;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 245:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0068_ip = 268; continue _fun0068 }
case 30:
                var2 = 1;
                if(!(var2 == var4)) { _fun0068_ip = 269; continue _fun0068 }
case 270:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 269:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 268:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var20 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot30 = var20;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionRangeBound$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot32;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'inclusive', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.PlatformVersionRangeBound'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['inclusive'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0069_ip = 271; continue _fun0069 }
case 56:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 271:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0070_ip = 13; continue _fun0070 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0070_ip = 272; continue _fun0070 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0070_ip = 143; continue _fun0070 }
case 49:
                if(!(var7 !== var26)) { _fun0070_ip = 144; continue _fun0070 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0070_ip = 146; continue _fun0070 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0070_ip = 273; continue _fun0070 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0070_ip = 149; continue _fun0070 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0070_ip = 273; continue _fun0070;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['inclusive'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0070_ip = 273; continue _fun0070;
case 143:
                var22 = _closure1_slot32;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.version;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['version'] = var2;
                var19 = var4;
                var18 = var3;
case 273:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0070_ip = 47; continue _fun0070 }
case 272:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.version;
                if(!var2) { _fun0071_ip = 226; continue _fun0071 }
case 14:
                var7 = _closure1_slot32;
                var6 = var7.internalBinaryWrite;
                var4 = var5.version;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 226:
                var4 = var5.inclusive;
                var2 = false;
                if(!(var2 !== var4)) { _fun0071_ip = 274; continue _fun0071 }
case 189:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 2;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.inclusive;
                var4 = var6.bind(var7)(var4);
case 274:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0071_ip = 275; continue _fun0071 }
case 276:
                var2 = 1;
                if(!(var2 == var4)) { _fun0071_ip = 277; continue _fun0071 }
case 278:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 277:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 275:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot31 = var19;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionSpecifier$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'major', 'kind': 'scalar', 'T': 13};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'minor', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'build', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.PlatformVersionSpecifier'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['major'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0072_ip = 35; continue _fun0072 }
case 46:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 35:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0073_ip = 13; continue _fun0073 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 7;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0073_ip = 295; continue _fun0073 }
case 141:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0073_ip = 296; continue _fun0073 }
case 189:
                if(!(var7 !== var28)) { _fun0073_ip = 297; continue _fun0073 }
case 179:
                if(!(var8 !== var28)) { _fun0073_ip = 248; continue _fun0073 }
case 298:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0073_ip = 94; continue _fun0073 }
case 23:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0073_ip = 299; continue _fun0073 }
case 240:
                var24 = var22;
                if(!(var11 === var22)) { _fun0073_ip = 278; continue _fun0073 }
case 206:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 278:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0073_ip = 299; continue _fun0073;
case 94:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 248:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt64Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.build;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['build'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0073_ip = 299; continue _fun0073;
case 297:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt32Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.minor;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['minor'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0073_ip = 299; continue _fun0073;
case 296:
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var1['major'] = var2;
                var21 = var4;
                var20 = var3;
case 299:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0073_ip = 141; continue _fun0073 }
case 295:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.major;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0074_ip = 141; continue _fun0074 }
case 300:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.uint32;
                var3 = var5.major;
                var3 = var4.bind(var6)(var3);
case 141:
                var3 = var5.minor;
                if(!var3) { _fun0074_ip = 196; continue _fun0074 }
case 209:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.minor;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 196:
                var3 = var5.build;
                if(!var3) { _fun0074_ip = 192; continue _fun0074 }
case 301:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.build;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 192:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0074_ip = 20; continue _fun0074 }
case 214:
                var2 = 1;
                if(!(var2 == var4)) { _fun0074_ip = 302; continue _fun0074 }
case 303:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 302:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot32 = var18;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientRequiredChanges$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'commit_hashes', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'pr_numbers', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientRequiredChanges'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['commitHashes'] = var2;
                var2 = new Array(0);
                var1['prNumbers'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0075_ip = 160; continue _fun0075 }
case 304:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 160:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0076_ip = 13; continue _fun0076 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0076_ip = 234; continue _fun0076 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0076_ip = 305; continue _fun0076 }
case 140:
                if(!(var8 !== var28)) { _fun0076_ip = 306; continue _fun0076 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0076_ip = 307; continue _fun0076 }
case 232:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0076_ip = 308; continue _fun0076 }
case 57:
                var25 = var23;
                if(!(var11 === var23)) { _fun0076_ip = 309; continue _fun0076 }
case 310:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 309:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0076_ip = 308; continue _fun0076;
case 307:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 306:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0076_ip = 194; continue _fun0076 }
case 311:
                var23 = var1.prNumbers;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0076_ip = 308; continue _fun0076;
case 194:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0076_ip = 308; continue _fun0076 }
case 250:
                var24 = var1.prNumbers;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0076_ip = 250; continue _fun0076 }
case 312:
                _fun0076_ip = 308; continue _fun0076;
case 305:
                var23 = var1.commitHashes;
                var22 = var23.push;
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 308:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0076_ip = 158; continue _fun0076 }
case 234:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.commitHashes;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                var9 = 0;
                if(!var3) { _fun0077_ip = 49; continue _fun0077 }
case 313:
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var11.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var11 = var10.bind(var1)(var6, var3);
                var10 = var11.string;
                var3 = var5.commitHashes;
                var3 = var3[var9];
                var3 = var10.bind(var11)(var3);
                var9 = var9 + 1;
                var3 = var5.commitHashes;
                var3 = var3.length;
                if(var9 < var3) { _fun0077_ip = 313; continue _fun0077 }
case 49:
                var3 = var5.prNumbers;
                var3 = var3.length;
                if(!var3) { _fun0077_ip = 216; continue _fun0077 }
case 314:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var9.bind(var4)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 2;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var3 = var5.prNumbers;
                var3 = var3.length;
                var3 = var8 < var3;
                var8 = 0;
                if(!var3) { _fun0077_ip = 94; continue _fun0077 }
case 315:
                var9 = var1.int32;
                var3 = var5.prNumbers;
                var3 = var3[var8];
                var3 = var9.bind(var1)(var3);
                var8 = var8 + 1;
                var3 = var5.prNumbers;
                var3 = var3.length;
                if(var8 < var3) { _fun0077_ip = 315; continue _fun0077 }
case 94:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 216:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0077_ip = 316; continue _fun0077 }
case 286:
                if(!(var6 == var3)) { _fun0077_ip = 48; continue _fun0077 }
case 317:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 48:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 316:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var17 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot33 = var17;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIsBot$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'is_bot', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserIsBot'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['isBot'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0078_ip = 271; continue _fun0078 }
case 56:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 271:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0079_ip = 13; continue _fun0079 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0079_ip = 24; continue _fun0079 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0079_ip = 48; continue _fun0079 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0079_ip = 50; continue _fun0079 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0079_ip = 52; continue _fun0079 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0079_ip = 54; continue _fun0079 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0079_ip = 52; continue _fun0079;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['isBot'] = var2;
                var19 = var4;
                var18 = var3;
case 52:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0079_ip = 47; continue _fun0079 }
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.isBot;
                var2 = false;
                if(!(var2 !== var3)) { _fun0080_ip = 56; continue _fun0080 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.isBot;
                var3 = var4.bind(var6)(var3);
case 56:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0080_ip = 285; continue _fun0080 }
case 304:
                var2 = 1;
                if(!(var2 == var4)) { _fun0080_ip = 169; continue _fun0080 }
case 318:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 169:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 285:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot34 = var16;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserAgeRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'min_age_years', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'max_age_years', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserAgeRange'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0081_ip = 226; continue _fun0081 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0082_ip = 13; continue _fun0082 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0082_ip = 319; continue _fun0082 }
case 56:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0082_ip = 273; continue _fun0082 }
case 155:
                if(!(var7 !== var27)) { _fun0082_ip = 320; continue _fun0082 }
case 51:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0082_ip = 321; continue _fun0082 }
case 298:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0082_ip = 40; continue _fun0082 }
case 285:
                var23 = var21;
                if(!(var10 === var21)) { _fun0082_ip = 322; continue _fun0082 }
case 195:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 322:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0082_ip = 40; continue _fun0082;
case 321:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 320:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt32Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.maxAgeYears;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['maxAgeYears'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0082_ip = 40; continue _fun0082;
case 273:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt32Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.minAgeYears;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['minAgeYears'] = var2;
                var20 = var4;
                var19 = var3;
case 40:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0082_ip = 56; continue _fun0082 }
case 319:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.minAgeYears;
                if(!var3) { _fun0083_ip = 258; continue _fun0083 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.minAgeYears;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 258:
                var3 = var5.maxAgeYears;
                if(!var3) { _fun0083_ip = 205; continue _fun0083 }
case 147:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.maxAgeYears;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 205:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0083_ip = 36; continue _fun0083 }
case 323:
                var2 = 1;
                if(!(var2 == var4)) { _fun0083_ip = 324; continue _fun0083 }
case 26:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 324:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 36:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot35 = var15;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Fixed64Value$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'value', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Fixed64Value'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['value'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0084_ip = 325; continue _fun0084 }
case 326:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 325:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0085_ip = 13; continue _fun0085 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0085_ip = 174; continue _fun0085 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0085_ip = 48; continue _fun0085 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0085_ip = 50; continue _fun0085 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0085_ip = 175; continue _fun0085 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0085_ip = 54; continue _fun0085 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0085_ip = 175; continue _fun0085;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['value'] = var2;
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0085_ip = 47; continue _fun0085 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.value;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0086_ip = 46; continue _fun0086 }
case 300:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.value;
                var2 = var3.bind(var4)(var2);
case 46:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0086_ip = 150; continue _fun0086 }
case 12:
                var2 = 1;
                if(!(var2 == var4)) { _fun0086_ip = 23; continue _fun0086 }
case 327:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 23:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 150:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot36 = var14;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIDRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'min_id', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot36;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'max_id', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot36;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserIDRange'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0087_ip = 226; continue _fun0087 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0088_ip = 13; continue _fun0088 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0088_ip = 265; continue _fun0088 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0088_ip = 266; continue _fun0088 }
case 49:
                if(!(var7 !== var26)) { _fun0088_ip = 144; continue _fun0088 }
case 145:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0088_ip = 146; continue _fun0088 }
case 147:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0088_ip = 267; continue _fun0088 }
case 55:
                var22 = var20;
                if(!(var10 === var20)) { _fun0088_ip = 149; continue _fun0088 }
case 150:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 149:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0088_ip = 267; continue _fun0088;
case 146:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 144:
                var22 = _closure1_slot36;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.maxId;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['maxId'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0088_ip = 267; continue _fun0088;
case 266:
                var22 = _closure1_slot36;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.minId;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['minId'] = var2;
                var19 = var4;
                var18 = var3;
case 267:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0088_ip = 47; continue _fun0088 }
case 265:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.minId;
                if(!var3) { _fun0089_ip = 226; continue _fun0089 }
case 14:
                var7 = _closure1_slot36;
                var6 = var7.internalBinaryWrite;
                var4 = var5.minId;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 226:
                var3 = var5.maxId;
                if(!var3) { _fun0089_ip = 245; continue _fun0089 }
case 155:
                var7 = _closure1_slot36;
                var6 = var7.internalBinaryWrite;
                var4 = var5.maxId;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 245:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0089_ip = 268; continue _fun0089 }
case 30:
                var2 = 1;
                if(!(var2 == var4)) { _fun0089_ip = 269; continue _fun0089 }
case 270:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 269:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 268:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot37 = var13;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserHasFlag$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'mask', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserHasFlag'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['mask'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0090_ip = 61; continue _fun0090 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 61:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0091_ip = 13; continue _fun0091 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0091_ip = 174; continue _fun0091 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0091_ip = 48; continue _fun0091 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0091_ip = 50; continue _fun0091 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0091_ip = 175; continue _fun0091 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0091_ip = 54; continue _fun0091 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0091_ip = 175; continue _fun0091;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['mask'] = var2;
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0091_ip = 47; continue _fun0091 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.mask;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0092_ip = 156; continue _fun0092 }
case 328:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.mask;
                var2 = var3.bind(var4)(var2);
case 156:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0092_ip = 171; continue _fun0092 }
case 329:
                var2 = 1;
                if(!(var2 == var4)) { _fun0092_ip = 330; continue _fun0092 }
case 331:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 330:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 171:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot38 = var12;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdInRangeByHash$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'hash_key', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'stop_ring_position', 'kind': 'scalar', 'T': 13};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'start_ring_position', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UnitIdInRangeByHash'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_UTILITY';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'hashKey': '', 'stopRingPosition': 0, 'startRingPosition': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0093_ip = 189; continue _fun0093 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 189:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0094_ip = 13; continue _fun0094 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0094_ip = 332; continue _fun0094 }
case 56:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0094_ip = 333; continue _fun0094 }
case 155:
                if(!(var7 !== var27)) { _fun0094_ip = 334; continue _fun0094 }
case 51:
                if(!(var8 !== var27)) { _fun0094_ip = 192; continue _fun0094 }
case 147:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0094_ip = 193; continue _fun0094 }
case 184:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0094_ip = 164; continue _fun0094 }
case 195:
                var23 = var21;
                if(!(var11 === var21)) { _fun0094_ip = 196; continue _fun0094 }
case 63:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 196:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0094_ip = 164; continue _fun0094;
case 193:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 192:
                var2 = var18.uint32;
                var2 = var2.bind(var18)();
                var1['startRingPosition'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0094_ip = 164; continue _fun0094;
case 334:
                var2 = var18.uint32;
                var2 = var2.bind(var18)();
                var1['stopRingPosition'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0094_ip = 164; continue _fun0094;
case 333:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['hashKey'] = var2;
                var20 = var4;
                var19 = var3;
case 164:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0094_ip = 56; continue _fun0094 }
case 332:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.hashKey;
                var2 = '';
                if(!(var2 !== var3)) { _fun0095_ip = 32; continue _fun0095 }
case 33:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.hashKey;
                var2 = var3.bind(var4)(var2);
case 32:
                var2 = var5.stopRingPosition;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0095_ip = 335; continue _fun0095 }
case 304:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint32;
                var2 = var5.stopRingPosition;
                var2 = var4.bind(var6)(var2);
case 335:
                var2 = var5.startRingPosition;
                if(!(var3 !== var2)) { _fun0095_ip = 336; continue _fun0095 }
case 153:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.startRingPosition;
                var2 = var3.bind(var4)(var2);
case 336:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0095_ip = 337; continue _fun0095 }
case 264:
                var2 = 1;
                if(!(var2 == var4)) { _fun0095_ip = 181; continue _fun0095 }
case 338:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 181:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 337:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot39 = var11;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientReleaseChannel$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'release_channels', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.ClientReleaseChannel'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_CLIENT';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['releaseChannels'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0096_ip = 155; continue _fun0096 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0097_ip = 13; continue _fun0097 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0097_ip = 174; continue _fun0097 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0097_ip = 48; continue _fun0097 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0097_ip = 50; continue _fun0097 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0097_ip = 175; continue _fun0097 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0097_ip = 54; continue _fun0097 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0097_ip = 175; continue _fun0097;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.releaseChannels;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0097_ip = 47; continue _fun0097 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.releaseChannels;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0098_ip = 176; continue _fun0098 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.releaseChannels;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.releaseChannels;
                var3 = var3.length;
                if(var8 < var3) { _fun0098_ip = 177; continue _fun0098 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0098_ip = 178; continue _fun0098 }
case 179:
                if(!(var6 == var3)) { _fun0098_ip = 57; continue _fun0098 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot40 = var10;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Always$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'value', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Always'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_UTILITY';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['value'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0099_ip = 176; continue _fun0099 }
case 158:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 176:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0100_ip = 13; continue _fun0100 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0100_ip = 24; continue _fun0100 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0100_ip = 48; continue _fun0100 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0100_ip = 50; continue _fun0100 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0100_ip = 52; continue _fun0100 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0100_ip = 54; continue _fun0100 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0100_ip = 52; continue _fun0100;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['value'] = var2;
                var19 = var4;
                var18 = var3;
case 52:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0100_ip = 47; continue _fun0100 }
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.value;
                var2 = false;
                if(!(var2 !== var3)) { _fun0101_ip = 339; continue _fun0101 }
case 340:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.value;
                var3 = var4.bind(var6)(var3);
case 339:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0101_ip = 341; continue _fun0101 }
case 197:
                var2 = 1;
                if(!(var2 == var4)) { _fun0101_ip = 342; continue _fun0101 }
case 170:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 342:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 341:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot41 = var9;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdInExperiment$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'experiment_id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'variation_ids', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UnitIdInExperiment'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_UTILITY';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['experimentId'] = var2;
                var2 = new Array(0);
                var1['variationIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0102_ip = 314; continue _fun0102 }
case 58:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 314:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0103_ip = 13; continue _fun0103 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0103_ip = 234; continue _fun0103 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0103_ip = 305; continue _fun0103 }
case 140:
                if(!(var8 !== var28)) { _fun0103_ip = 306; continue _fun0103 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0103_ip = 307; continue _fun0103 }
case 232:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0103_ip = 308; continue _fun0103 }
case 57:
                var25 = var23;
                if(!(var11 === var23)) { _fun0103_ip = 309; continue _fun0103 }
case 310:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 309:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0103_ip = 308; continue _fun0103;
case 307:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 306:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0103_ip = 194; continue _fun0103 }
case 311:
                var23 = var1.variationIds;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0103_ip = 308; continue _fun0103;
case 194:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0103_ip = 308; continue _fun0103 }
case 250:
                var24 = var1.variationIds;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0103_ip = 250; continue _fun0103 }
case 312:
                _fun0103_ip = 308; continue _fun0103;
case 305:
                var2 = var18.fixed64;
                var22 = var2.bind(var18)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['experimentId'] = var2;
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 308:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0103_ip = 158; continue _fun0103 }
case 234:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.experimentId;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0104_ip = 156; continue _fun0104 }
case 328:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.experimentId;
                var2 = var3.bind(var4)(var2);
case 156:
                var2 = var5.variationIds;
                var2 = var2.length;
                if(!var2) { _fun0104_ip = 343; continue _fun0104 }
case 344:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 2;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.variationIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0104_ip = 345; continue _fun0104 }
case 54:
                var4 = var1.int32;
                var2 = var5.variationIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.variationIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0104_ip = 54; continue _fun0104 }
case 345:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 343:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0104_ip = 320; continue _fun0104 }
case 346:
                var2 = 1;
                if(!(var2 == var4)) { _fun0104_ip = 347; continue _fun0104 }
case 348:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 347:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 320:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot42 = var8;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserPremiumType$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'premium_types', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserPremiumType'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_USER';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['premiumTypes'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0105_ip = 155; continue _fun0105 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0106_ip = 13; continue _fun0106 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0106_ip = 349; continue _fun0106 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0106_ip = 159; continue _fun0106 }
case 140:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0106_ip = 37; continue _fun0106 }
case 160:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0106_ip = 350; continue _fun0106 }
case 162:
                var25 = var23;
                if(!(var11 === var23)) { _fun0106_ip = 163; continue _fun0106 }
case 57:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 163:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0106_ip = 350; continue _fun0106;
case 37:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 159:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0106_ip = 351; continue _fun0106 }
case 165:
                var23 = var1.premiumTypes;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0106_ip = 350; continue _fun0106;
case 351:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0106_ip = 350; continue _fun0106 }
case 352:
                var24 = var1.premiumTypes;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0106_ip = 352; continue _fun0106 }
case 350:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0106_ip = 158; continue _fun0106 }
case 349:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.premiumTypes;
                var2 = var2.length;
                if(!var2) { _fun0107_ip = 167; continue _fun0107 }
case 168:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.premiumTypes;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0107_ip = 169; continue _fun0107 }
case 170:
                var4 = var1.int32;
                var2 = var5.premiumTypes;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.premiumTypes;
                var2 = var2.length;
                if(var3 < var2) { _fun0107_ip = 170; continue _fun0107 }
case 169:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 167:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0107_ip = 146; continue _fun0107 }
case 171:
                var2 = 1;
                if(!(var2 == var4)) { _fun0107_ip = 172; continue _fun0107 }
case 173:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 172:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 146:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot43 = var7;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdMatchesFilterSnapshot$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'filter_snapshot_name', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'target_filter_values', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_UTILITY';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '';
                var1['filterSnapshotName'] = var2;
                var2 = new Array(0);
                var1['targetFilterValues'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0108_ip = 160; continue _fun0108 }
case 304:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 160:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0109_ip = 13; continue _fun0109 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0109_ip = 353; continue _fun0109 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0109_ip = 354; continue _fun0109 }
case 140:
                if(!(var8 !== var28)) { _fun0109_ip = 306; continue _fun0109 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0109_ip = 307; continue _fun0109 }
case 232:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0109_ip = 355; continue _fun0109 }
case 57:
                var25 = var23;
                if(!(var11 === var23)) { _fun0109_ip = 309; continue _fun0109 }
case 310:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 309:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0109_ip = 355; continue _fun0109;
case 307:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 306:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0109_ip = 41; continue _fun0109 }
case 311:
                var23 = var1.targetFilterValues;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0109_ip = 355; continue _fun0109;
case 41:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0109_ip = 355; continue _fun0109 }
case 356:
                var24 = var1.targetFilterValues;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0109_ip = 356; continue _fun0109 }
case 282:
                _fun0109_ip = 355; continue _fun0109;
case 354:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['filterSnapshotName'] = var2;
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 355:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0109_ip = 158; continue _fun0109 }
case 353:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.filterSnapshotName;
                var2 = '';
                if(!(var2 !== var3)) { _fun0110_ip = 32; continue _fun0110 }
case 33:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.filterSnapshotName;
                var2 = var3.bind(var4)(var2);
case 32:
                var2 = var5.targetFilterValues;
                var2 = var2.length;
                if(!var2) { _fun0110_ip = 321; continue _fun0110 }
case 170:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 2;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.targetFilterValues;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0110_ip = 357; continue _fun0110 }
case 358:
                var4 = var1.fixed64;
                var2 = var5.targetFilterValues;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.targetFilterValues;
                var2 = var2.length;
                if(var3 < var2) { _fun0110_ip = 358; continue _fun0110 }
case 357:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 321:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0110_ip = 144; continue _fun0110 }
case 359:
                var2 = 1;
                if(!(var2 == var4)) { _fun0110_ip = 360; continue _fun0110 }
case 200:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 360:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 144:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot44 = var6;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildIds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildIds'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_GUILD';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['guildIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0111_ip = 155; continue _fun0111 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0112_ip = 13; continue _fun0112 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0112_ip = 157; continue _fun0112 }
case 158:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0112_ip = 159; continue _fun0112 }
case 140:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0112_ip = 37; continue _fun0112 }
case 160:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0112_ip = 161; continue _fun0112 }
case 162:
                var25 = var23;
                if(!(var11 === var23)) { _fun0112_ip = 163; continue _fun0112 }
case 57:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 163:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0112_ip = 161; continue _fun0112;
case 37:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 159:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0112_ip = 164; continue _fun0112 }
case 165:
                var23 = var1.guildIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0112_ip = 161; continue _fun0112;
case 164:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0112_ip = 161; continue _fun0112 }
case 166:
                var24 = var1.guildIds;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0112_ip = 166; continue _fun0112 }
case 161:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0112_ip = 158; continue _fun0112 }
case 157:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(!var2) { _fun0113_ip = 167; continue _fun0113 }
case 168:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.guildIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0113_ip = 169; continue _fun0113 }
case 170:
                var4 = var1.fixed64;
                var2 = var5.guildIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0113_ip = 170; continue _fun0113 }
case 169:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 167:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0113_ip = 146; continue _fun0113 }
case 171:
                var2 = 1;
                if(!(var2 == var4)) { _fun0113_ip = 172; continue _fun0113 }
case 173:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 172:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 146:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var52 = var5;
    var4 = new var52[var4](var51);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot45 = var5;
    var4 = var47[var2];
    var4 = var46.bind(var1)(var4);
    var48 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildMemberCountRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'min_count', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'max_count', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildMemberCountRange'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_GUILD';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0114_ip = 226; continue _fun0114 }
case 227:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 226:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0115_ip = 13; continue _fun0115 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0115_ip = 319; continue _fun0115 }
case 56:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0115_ip = 273; continue _fun0115 }
case 155:
                if(!(var7 !== var27)) { _fun0115_ip = 320; continue _fun0115 }
case 51:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0115_ip = 321; continue _fun0115 }
case 298:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0115_ip = 40; continue _fun0115 }
case 285:
                var23 = var21;
                if(!(var10 === var21)) { _fun0115_ip = 322; continue _fun0115 }
case 195:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 322:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0115_ip = 40; continue _fun0115;
case 321:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 320:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt32Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.maxCount;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['maxCount'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0115_ip = 40; continue _fun0115;
case 273:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt32Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.minCount;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['minCount'] = var2;
                var20 = var4;
                var19 = var3;
case 40:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0115_ip = 56; continue _fun0115 }
case 319:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.minCount;
                if(!var3) { _fun0116_ip = 258; continue _fun0116 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.minCount;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 258:
                var3 = var5.maxCount;
                if(!var3) { _fun0116_ip = 205; continue _fun0116 }
case 147:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.maxCount;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 205:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0116_ip = 36; continue _fun0116 }
case 323:
                var2 = 1;
                if(!(var2 == var4)) { _fun0116_ip = 324; continue _fun0116 }
case 26:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 324:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 36:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var48);
    var48 = var4.prototype;
    var48 = Object.create(var48, {constructor: {value: var4}});
    var52 = var48;
    var4 = new var52[var4](var51);
    var4 = var4 instanceof Object ? var4 : var48;
    var _closure1_slot46 = var4;
    var2 = var47[var2];
    var2 = var46.bind(var1)(var2);
    var48 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function GuildHasFeature$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'features', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildHasFeature'];
            var1[1] = var6;
            var6 = {};
            var7 = 'FILTER_CATEGORY_GUILD';
            var6['discord_protos.discord_experimentation.v1.filter_category'] = var7;
            var1[2] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['features'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0117_ip = 155; continue _fun0117 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0118_ip = 13; continue _fun0118 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0118_ip = 174; continue _fun0118 }
case 47:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0118_ip = 48; continue _fun0118 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0118_ip = 50; continue _fun0118 }
case 51:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0118_ip = 175; continue _fun0118 }
case 53:
                var22 = var20;
                if(!(var10 === var20)) { _fun0118_ip = 54; continue _fun0118 }
case 55:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 54:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0118_ip = 175; continue _fun0118;
case 50:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 48:
                var21 = var1.features;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 175:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0118_ip = 47; continue _fun0118 }
case 174:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.features;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0119_ip = 176; continue _fun0119 }
case 177:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var10.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var6, var3);
                var9 = var10.string;
                var3 = var5.features;
                var3 = var3[var8];
                var3 = var9.bind(var10)(var3);
                var8 = var8 + 1;
                var3 = var5.features;
                var3 = var3.length;
                if(var8 < var3) { _fun0119_ip = 177; continue _fun0119 }
case 176:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0119_ip = 178; continue _fun0119 }
case 179:
                if(!(var6 == var3)) { _fun0119_ip = 57; continue _fun0119 }
case 147:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 57:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 178:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var48);
    var48 = var2.prototype;
    var48 = Object.create(var48, {constructor: {value: var2}});
    var52 = var48;
    var2 = new var52[var2](var51);
    var2 = var2 instanceof Object ? var2 : var48;
    var _closure1_slot47 = var2;
    var45 = 8;
    var45 = var47[var45];
    var47 = var46.bind(var1)(var45);
    var46 = var47.fileFinishedImporting;
    var45 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx';
    var45 = var46.bind(var47)(var45);
    var3['Rule_Type'] = var44;
    var3['Rule_Subtype'] = var43;
    var3['FilterCategory'] = var42;
    var3['Rule'] = var41;
    var3['Override'] = var40;
    var3['Filter'] = var39;
    var3['StaffUsers'] = var38;
    var3['UserInGuild'] = var37;
    var3['UserIds'] = var36;
    var3['UserLocale'] = var35;
    var3['ClientLocale'] = var34;
    var3['ClientSystemLocale'] = var33;
    var3['ClientLocation'] = var32;
    var3['ClientLocation_Place'] = var31;
    var3['ClientLocation_ISORegion'] = var30;
    var3['ClientLocation_Location'] = var29;
    var3['ClientIP'] = var28;
    var3['ClientOperatingSystem'] = var27;
    var3['SDKVersion'] = var26;
    var3['SDKVersionRange'] = var25;
    var3['SDKVersionRangeBound'] = var24;
    var3['SDKVersionSpecifier'] = var23;
    var3['ClientPlatform'] = var22;
    var3['PlatformVersion'] = var21;
    var3['PlatformVersionRange'] = var20;
    var3['PlatformVersionRangeBound'] = var19;
    var3['PlatformVersionSpecifier'] = var18;
    var3['ClientRequiredChanges'] = var17;
    var3['UserIsBot'] = var16;
    var3['UserAgeRange'] = var15;
    var3['Fixed64Value'] = var14;
    var3['UserIDRange'] = var13;
    var3['UserHasFlag'] = var12;
    var3['UnitIdInRangeByHash'] = var11;
    var3['ClientReleaseChannel'] = var10;
    var3['Always'] = var9;
    var3['UnitIdInExperiment'] = var8;
    var3['UserPremiumType'] = var7;
    var3['UnitIdMatchesFilterSnapshot'] = var6;
    var3['GuildIds'] = var5;
    var3['GuildMemberCountRange'] = var4;
    var3['GuildHasFeature'] = var2;
    return var1;
})();