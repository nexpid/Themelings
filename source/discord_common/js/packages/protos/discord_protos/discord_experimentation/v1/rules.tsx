// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var51 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var52 = dependencyMap;
    var _closure1_slot0 = var51;
    var _closure1_slot1 = var52;
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
            var1 = _closure1_slot53;
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
    var _closure1_slot52 = var1;
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
            _closure1_slot53 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var6 = 0;
    var2 = var52[var6];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var5 = 1;
    var2 = var52[var5];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var4 = 2;
    var2 = var52[var4];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var9 = 3;
    var2 = var52[var9];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var8 = 4;
    var2 = var52[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var52[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var49 = {};
    var49['UNSPECIFIED'] = var6;
    var2 = 'UNSPECIFIED';
    var49[var6] = var2;
    var49['EXCLUDE'] = var5;
    var7 = 'EXCLUDE';
    var49[var5] = var7;
    var49['OVERRIDE'] = var4;
    var7 = 'OVERRIDE';
    var49[var4] = var7;
    var49['REQUIRE'] = var9;
    var7 = 'REQUIRE';
    var49[var9] = var7;
    var49['ASSIGNMENT'] = var8;
    var7 = 'ASSIGNMENT';
    var49[var8] = var7;
    var _closure1_slot8 = var49;
    var48 = {};
    var48['REGULAR'] = var6;
    var7 = 'REGULAR';
    var48[var6] = var7;
    var48['HOLDOUT'] = var5;
    var7 = 'HOLDOUT';
    var48[var5] = var7;
    var _closure1_slot9 = var48;
    var47 = {};
    var47['UNSPECIFIED'] = var6;
    var47[var6] = var2;
    var47['USER'] = var5;
    var7 = 'USER';
    var47[var5] = var7;
    var47['CLIENT'] = var4;
    var7 = 'CLIENT';
    var47[var4] = var7;
    var47['GUILD'] = var9;
    var7 = 'GUILD';
    var47[var9] = var7;
    var47['UTILITY'] = var8;
    var7 = 'UTILITY';
    var47[var8] = var7;
    var46 = {};
    var46['UNSPECIFIED'] = var6;
    var46[var6] = var2;
    var46['STICKY'] = var5;
    var2 = 'STICKY';
    var46[var5] = var2;
    var46['LAZY'] = var4;
    var2 = 'LAZY';
    var46[var4] = var2;
    var2 = 6;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Rule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'type', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_experimentation.v1.Rule.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(6);
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
            var1 = {'no': 6, 'name': 'hash', 'kind': 'scalar', 'T': 9};
            var6[5] = var1;
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
                var1 = {'type': 0, 'filters': null, 'isSunsetRule': false, 'subtype': 0, 'hash': ''};
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
                if(!(var14 !== var29)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var25 = var23;
                if(!(var13 === var23)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 32:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0004_ip = 30; continue _fun0004;
case 28:
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
case 26:
                var2 = var20.string;
                var2 = var2.bind(var20)();
                var1['hash'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 30; continue _fun0004;
case 24:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['subtype'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 30; continue _fun0004;
case 22:
                var2 = var20.bool;
                var2 = var2.bind(var20)();
                var1['isSunsetRule'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 30; continue _fun0004;
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
                _fun0004_ip = 30; continue _fun0004;
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
                _fun0004_ip = 30; continue _fun0004;
case 17:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['type'] = var2;
                var22 = var4;
                var21 = var3;
case 30:
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
                if(!(var9 !== var2)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
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
case 34:
                var2 = var5.filters;
                var2 = var2.length;
                var6 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var10 = 2;
                var8 = 0;
                if(!var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
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
                if(var8 < var6) { _fun0005_ip = 37; continue _fun0005 }
case 36:
                var6 = var5.override;
                if(!var6) { _fun0005_ip = 38; continue _fun0005 }
case 39:
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
case 38:
                var8 = var5.isSunsetRule;
                var6 = false;
                if(!(var6 !== var8)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
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
case 40:
                var8 = var5.subtype;
                if(!(var9 !== var8)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
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
case 42:
                var9 = var5.hash;
                var8 = '';
                if(!(var8 !== var9)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var10 = var9.bind(var1)(var7, var8);
                var9 = var10.string;
                var8 = var5.hash;
                var8 = var9.bind(var10)(var8);
case 44:
                var3 = var3.writeUnknownFields;
                if(!(var6 !== var3)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var6 = 1;
                if(!(var6 == var3)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
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
case 46:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var45 = var4 instanceof Object ? var4 : var5;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Override$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0006_ip = 37; continue _fun0006 }
case 50:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 37:
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
                if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0007_ip = 57; continue _fun0007;
case 55:
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
case 53:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['variationId'] = var2;
                var19 = var4;
                var18 = var3;
case 57:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0007_ip = 52; continue _fun0007 }
case 51:
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
                if(!(var2 !== var3)) { _fun0008_ip = 61; continue _fun0008 }
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
case 61:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
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
case 62:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var44 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var44;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Filter$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 2, 'name': 'client_version', 'kind': 'message', 'oneof': 'filter'};
            var6 = function T() {
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(28);
            var6[0] = var1;
            var1 = {'no': 3, 'name': 'client_os', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot25;
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
                var1 = _closure1_slot23;
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
                var1 = _closure1_slot36;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 12, 'name': 'user_age_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot37;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 13, 'name': 'user_id_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot39;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 14, 'name': 'user_has_flag', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot40;
                return var1;
            };
            var1['T'] = var8;
            var6[12] = var1;
            var1 = {'no': 15, 'name': 'unit_id_in_range_by_hash', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot41;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 16, 'name': 'client_release_channel', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot42;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 17, 'name': 'always', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot43;
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
                var1 = _closure1_slot44;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 20, 'name': 'user_premium_type', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot45;
                return var1;
            };
            var1['T'] = var8;
            var6[18] = var1;
            var1 = {'no': 21, 'name': 'unit_id_matches_filter_snapshot', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot46;
                return var1;
            };
            var1['T'] = var8;
            var6[19] = var1;
            var1 = {'no': 22, 'name': 'guild_ids', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot47;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 23, 'name': 'guild_id_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot49;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 25, 'name': 'guild_member_count_range', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot48;
                return var1;
            };
            var1['T'] = var8;
            var6[22] = var1;
            var1 = {'no': 26, 'name': 'guild_has_feature', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot50;
                return var1;
            };
            var1['T'] = var8;
            var6[23] = var1;
            var1 = {'no': 27, 'name': 'user_location', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot22;
                return var1;
            };
            var1['T'] = var8;
            var6[24] = var1;
            var1 = {'no': 28, 'name': 'user_ip', 'kind': 'message', 'oneof': 'filter'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[25] = var1;
            var1 = {'no': 29, 'name': 'installation_ids', 'kind': 'message', 'oneof': 'filter'};
            var7 = function T() {
                var1 = _closure1_slot51;
                return var1;
            };
            var1['T'] = var7;
            var6[26] = var1;
            var1 = {'no': 30, 'name': 'negate', 'kind': 'scalar', 'T': 8};
            var6[27] = var1;
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
                var11 = false;
                var1['negate'] = var11;
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
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 56; continue _fun0009 }
case 66:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 56:
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
                var46 = arg1;
                var45 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var46.pos;
                var3 = arg2;
                var44 = var4 + var3;
                var3 = var46.pos;
                var3 = var3 < var44;
                var43 = undefined;
                var41 = 6;
                var40 = true;
                var39 = false;
                var38 = 'throw';
                var37 = 'clientVersion';
                var36 = 'clientOs';
                var35 = 'staff';
                var34 = 'userInGuild';
                var33 = 'userIds';
                var32 = 'clientLocale';
                var31 = 'clientLocation';
                var30 = 'clientIp';
                var29 = 'userLocale';
                var28 = 'bot';
                var27 = 'userAgeRange';
                var26 = 'userIdRange';
                var25 = 'userHasFlag';
                var24 = 'unitIdInRangeByHash';
                var23 = 'clientReleaseChannel';
                var22 = 'always';
                var21 = 'clientSystemLocale';
                var20 = 'unitIdInExperiment';
                var19 = 'userPremiumType';
                var18 = 'unitIdMatchesFilterSnapshot';
                var17 = 'guildIds';
                var16 = 'guildIdRange';
                var15 = 'guildMemberCountRange';
                var14 = 'guildHasFeature';
                var13 = 'userLocation';
                var12 = 'userIp';
                var11 = 'installationIds';
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var3 = var46.tag;
                var7 = var3.bind(var46)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var43)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=2427, default_jump_address=2230, unsigned_min_value=2, unsigned_max_value=30) // Switch table: [2160, 2087, 2014, 1941, 1868, 1795, 1722, 1649, 1576, 1503, 1430, 1357, 1284, 1211, 1138, 1065, 992, 919, 846, 773, 700, 627, 2230, 554, 481, 408, 335, 262, 235];
case 69:
                var3 = var46.bool;
                var3 = var3.bind(var46)();
                var1['negate'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 71:
                var3 = {};
                var3['oneofKind'] = var11;
                var52 = _closure1_slot51;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.installationIds;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['installationIds'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 72:
                var3 = {};
                var3['oneofKind'] = var12;
                var52 = _closure1_slot24;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userIp;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userIp'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 73:
                var3 = {};
                var3['oneofKind'] = var13;
                var52 = _closure1_slot22;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userLocation;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userLocation'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 74:
                var3 = {};
                var3['oneofKind'] = var14;
                var52 = _closure1_slot50;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.guildHasFeature;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['guildHasFeature'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 75:
                var3 = {};
                var3['oneofKind'] = var15;
                var52 = _closure1_slot48;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.guildMemberCountRange;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['guildMemberCountRange'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 76:
                var3 = {};
                var3['oneofKind'] = var16;
                var52 = _closure1_slot49;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.guildIdRange;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['guildIdRange'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 77:
                var3 = {};
                var3['oneofKind'] = var17;
                var52 = _closure1_slot47;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.guildIds;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['guildIds'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 78:
                var3 = {};
                var3['oneofKind'] = var18;
                var52 = _closure1_slot46;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.unitIdMatchesFilterSnapshot;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['unitIdMatchesFilterSnapshot'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 79:
                var3 = {};
                var3['oneofKind'] = var19;
                var52 = _closure1_slot45;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userPremiumType;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userPremiumType'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 80:
                var3 = {};
                var3['oneofKind'] = var20;
                var52 = _closure1_slot44;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.unitIdInExperiment;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['unitIdInExperiment'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 81:
                var3 = {};
                var3['oneofKind'] = var21;
                var52 = _closure1_slot17;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientSystemLocale;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientSystemLocale'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 82:
                var3 = {};
                var3['oneofKind'] = var22;
                var52 = _closure1_slot43;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.always;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['always'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 83:
                var3 = {};
                var3['oneofKind'] = var23;
                var52 = _closure1_slot42;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientReleaseChannel;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientReleaseChannel'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 84:
                var3 = {};
                var3['oneofKind'] = var24;
                var52 = _closure1_slot41;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.unitIdInRangeByHash;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['unitIdInRangeByHash'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 85:
                var3 = {};
                var3['oneofKind'] = var25;
                var52 = _closure1_slot40;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userHasFlag;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userHasFlag'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 86:
                var3 = {};
                var3['oneofKind'] = var26;
                var52 = _closure1_slot39;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userIdRange;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userIdRange'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 87:
                var3 = {};
                var3['oneofKind'] = var27;
                var52 = _closure1_slot37;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userAgeRange;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userAgeRange'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 88:
                var3 = {};
                var3['oneofKind'] = var28;
                var52 = _closure1_slot36;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.bot;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['bot'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 89:
                var3 = {};
                var3['oneofKind'] = var29;
                var52 = _closure1_slot15;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userLocale;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userLocale'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 90:
                var3 = {};
                var3['oneofKind'] = var30;
                var52 = _closure1_slot23;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientIp;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientIp'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 91:
                var3 = {};
                var3['oneofKind'] = var31;
                var52 = _closure1_slot18;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientLocation;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientLocation'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 92:
                var3 = {};
                var3['oneofKind'] = var32;
                var52 = _closure1_slot16;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientLocale;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientLocale'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 93:
                var3 = {};
                var3['oneofKind'] = var33;
                var52 = _closure1_slot14;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userIds;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userIds'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 94:
                var3 = {};
                var3['oneofKind'] = var34;
                var52 = _closure1_slot13;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.userInGuild;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['userInGuild'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 95:
                var3 = {};
                var3['oneofKind'] = var35;
                var52 = _closure1_slot12;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.staff;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['staff'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 96:
                var3 = {};
                var3['oneofKind'] = var36;
                var52 = _closure1_slot25;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientOs;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientOs'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 97:
                var3 = {};
                var3['oneofKind'] = var37;
                var52 = _closure1_slot30;
                var51 = var52.internalBinaryRead;
                var49 = var46.uint32;
                var56 = var49.bind(var46)();
                var49 = var1.filter;
                var54 = var49.clientVersion;
                var58 = var52;
                var57 = var46;
                var55 = var45;
                var49 = var58[var51](var57, var56, var55, var54, var53);
                var3['clientVersion'] = var49;
                var1['filter'] = var3;
                var48 = var5;
                var47 = var4;
                _fun0010_ip = 70; continue _fun0010;
case 98:
                var49 = var45.readUnknownField;
                if(!(var38 !== var49)) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                var3 = var46.skip;
                var3 = var3.bind(var46)(var7);
                var48 = var49;
                var47 = var3;
                if(!(var39 !== var49)) { _fun0010_ip = 70; continue _fun0010 }
case 101:
                var51 = var49;
                if(!(var40 === var49)) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                var52 = _closure1_slot0;
                var50 = _closure1_slot1;
                var50 = var50[var41];
                var50 = var52.bind(var43)(var50);
                var50 = var50.UnknownFieldHandler;
                var51 = var50.onRead;
case 102:
                var57 = var2.typeName;
                var58 = undefined;
                var56 = var1;
                var55 = var8;
                var54 = var7;
                var53 = var3;
                var50 = var58[var51](var57, var56, var55, var54, var53, var52);
                var48 = var49;
                var47 = var3;
case 70:
                var3 = var46.pos;
                var5 = var48;
                var4 = var47;
                if(var3 < var44) { _fun0010_ip = 68; continue _fun0010 }
case 67:
                return var1;
case 99:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var53 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var58 = 'Unknown field ';
                var56 = ' (wire type ';
                var54 = ') for ';
                var57 = var8;
                var55 = var7;
                var57 = var58[var5](var57, var56, var55, var54, var53, var52);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var58 = var2;
                var1 = new var58[var3](var57, var56);
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
                var3 = arg3;
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientVersion';
                if(!(var2 === var4)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                var7 = _closure1_slot30;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientVersion;
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
case 104:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientOs';
                if(!(var2 === var4)) { _fun0011_ip = 106; continue _fun0011 }
case 107:
                var7 = _closure1_slot25;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientOs;
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
case 106:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'staff';
                if(!(var2 === var4)) { _fun0011_ip = 108; continue _fun0011 }
case 109:
                var7 = _closure1_slot12;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.staff;
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
case 108:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userInGuild';
                if(!(var2 === var4)) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                var7 = _closure1_slot13;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userInGuild;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 5;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 110:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userIds';
                if(!(var2 === var4)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                var7 = _closure1_slot14;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userIds;
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 6;
                var10 = var2[var8];
                var2 = undefined;
                var2 = var11.bind(var2)(var10);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                var8 = var9.bind(var1)(var8, var2);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 112:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientLocale';
                if(!(var2 === var4)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                var7 = _closure1_slot16;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 7;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 114:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientLocation';
                if(!(var2 === var4)) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                var7 = _closure1_slot18;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientLocation;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 8;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 116:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientIp';
                if(!(var2 === var4)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                var7 = _closure1_slot23;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientIp;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 9;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 118:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userLocale';
                if(!(var2 === var4)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                var7 = _closure1_slot15;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 10;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 120:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'bot';
                if(!(var2 === var4)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                var7 = _closure1_slot36;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.bot;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 11;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 122:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userAgeRange';
                if(!(var2 === var4)) { _fun0011_ip = 124; continue _fun0011 }
case 125:
                var7 = _closure1_slot37;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userAgeRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 12;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 124:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userIdRange';
                if(!(var2 === var4)) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                var7 = _closure1_slot39;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userIdRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 13;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 126:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userHasFlag';
                if(!(var2 === var4)) { _fun0011_ip = 128; continue _fun0011 }
case 129:
                var7 = _closure1_slot40;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userHasFlag;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 14;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 128:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'unitIdInRangeByHash';
                if(!(var2 === var4)) { _fun0011_ip = 130; continue _fun0011 }
case 131:
                var7 = _closure1_slot41;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdInRangeByHash;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 15;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 130:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientReleaseChannel';
                if(!(var2 === var4)) { _fun0011_ip = 132; continue _fun0011 }
case 133:
                var7 = _closure1_slot42;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientReleaseChannel;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 16;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 132:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'always';
                if(!(var2 === var4)) { _fun0011_ip = 134; continue _fun0011 }
case 135:
                var7 = _closure1_slot43;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.always;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 17;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 134:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'clientSystemLocale';
                if(!(var2 === var4)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                var7 = _closure1_slot17;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.clientSystemLocale;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 18;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 136:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'unitIdInExperiment';
                if(!(var2 === var4)) { _fun0011_ip = 138; continue _fun0011 }
case 139:
                var7 = _closure1_slot44;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdInExperiment;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 19;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 138:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userPremiumType';
                if(!(var2 === var4)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
                var7 = _closure1_slot45;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userPremiumType;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 20;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 140:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'unitIdMatchesFilterSnapshot';
                if(!(var2 === var4)) { _fun0011_ip = 142; continue _fun0011 }
case 143:
                var7 = _closure1_slot46;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.unitIdMatchesFilterSnapshot;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 21;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 142:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'guildIds';
                if(!(var2 === var4)) { _fun0011_ip = 144; continue _fun0011 }
case 145:
                var7 = _closure1_slot47;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildIds;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 22;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 144:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'guildIdRange';
                if(!(var2 === var4)) { _fun0011_ip = 146; continue _fun0011 }
case 147:
                var7 = _closure1_slot49;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildIdRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 23;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 146:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'guildMemberCountRange';
                if(!(var2 === var4)) { _fun0011_ip = 148; continue _fun0011 }
case 149:
                var7 = _closure1_slot48;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildMemberCountRange;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 25;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 148:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'guildHasFeature';
                if(!(var2 === var4)) { _fun0011_ip = 150; continue _fun0011 }
case 151:
                var7 = _closure1_slot50;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.guildHasFeature;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 26;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 150:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userLocation';
                if(!(var2 === var4)) { _fun0011_ip = 152; continue _fun0011 }
case 153:
                var7 = _closure1_slot22;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userLocation;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 27;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 152:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'userIp';
                if(!(var2 === var4)) { _fun0011_ip = 154; continue _fun0011 }
case 155:
                var7 = _closure1_slot24;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.userIp;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 28;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 154:
                var2 = var5.filter;
                var4 = var2.oneofKind;
                var2 = 'installationIds';
                if(!(var2 === var4)) { _fun0011_ip = 156; continue _fun0011 }
case 157:
                var7 = _closure1_slot51;
                var6 = var7.internalBinaryWrite;
                var4 = var5.filter;
                var4 = var4.installationIds;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 29;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 156:
                var4 = var5.negate;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 158; continue _fun0011 }
case 159:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 30;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.negate;
                var4 = var6.bind(var7)(var4);
case 158:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0011_ip = 160; continue _fun0011 }
case 161:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 162; continue _fun0011 }
case 163:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 162:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 160:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var43 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var43;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function StaffUsers$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0012_ip = 164; continue _fun0012 }
case 165:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 164:
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
                if(!var2) { _fun0013_ip = 166; continue _fun0013 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0013_ip = 167; continue _fun0013 }
case 54:
                if(!(var7 !== var26)) { _fun0013_ip = 168; continue _fun0013 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0013_ip = 39; continue _fun0013 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0013_ip = 108; continue _fun0013 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0013_ip = 171; continue _fun0013 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0013_ip = 108; continue _fun0013;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['personalAccounts'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0013_ip = 108; continue _fun0013;
case 167:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAccounts'] = var2;
                var19 = var4;
                var18 = var3;
case 108:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0013_ip = 52; continue _fun0013 }
case 166:
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
                if(!(var2 !== var3)) { _fun0014_ip = 61; continue _fun0014 }
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
case 61:
                var3 = var5.personalAccounts;
                if(!(var2 !== var3)) { _fun0014_ip = 62; continue _fun0014 }
case 173:
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
case 62:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0014_ip = 174; continue _fun0014 }
case 175:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 36; continue _fun0014 }
case 176:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 36:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 174:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var42 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot12 = var42;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserInGuild$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0015_ip = 177; continue _fun0015 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0016_ip = 179; continue _fun0016 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0016_ip = 181; continue _fun0016 }
case 164:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0016_ip = 182; continue _fun0016 }
case 183:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0016_ip = 184; continue _fun0016 }
case 185:
                var25 = var23;
                if(!(var11 === var23)) { _fun0016_ip = 186; continue _fun0016 }
case 62:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 186:
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
                _fun0016_ip = 184; continue _fun0016;
case 182:
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
case 181:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0016_ip = 187; continue _fun0016 }
case 188:
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
                _fun0016_ip = 184; continue _fun0016;
case 187:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0016_ip = 184; continue _fun0016 }
case 189:
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
                if(var2 < var22) { _fun0016_ip = 189; continue _fun0016 }
case 184:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0016_ip = 180; continue _fun0016 }
case 179:
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
                if(!var2) { _fun0017_ip = 58; continue _fun0017 }
case 190:
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
                if(!var2) { _fun0017_ip = 191; continue _fun0017 }
case 12:
                var4 = var1.fixed64;
                var2 = var5.guildIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0017_ip = 12; continue _fun0017 }
case 191:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 58:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 192; continue _fun0017 }
case 193:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 194; continue _fun0017 }
case 195:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 194:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 192:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var41 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var41;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0018_ip = 177; continue _fun0018 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0019_ip = 179; continue _fun0019 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0019_ip = 181; continue _fun0019 }
case 164:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0019_ip = 182; continue _fun0019 }
case 183:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0019_ip = 184; continue _fun0019 }
case 185:
                var25 = var23;
                if(!(var11 === var23)) { _fun0019_ip = 186; continue _fun0019 }
case 62:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 186:
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
                _fun0019_ip = 184; continue _fun0019;
case 182:
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
case 181:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0019_ip = 187; continue _fun0019 }
case 188:
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
                _fun0019_ip = 184; continue _fun0019;
case 187:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0019_ip = 184; continue _fun0019 }
case 189:
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
                if(var2 < var22) { _fun0019_ip = 189; continue _fun0019 }
case 184:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0019_ip = 180; continue _fun0019 }
case 179:
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
                if(!var2) { _fun0020_ip = 58; continue _fun0020 }
case 190:
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
                if(!var2) { _fun0020_ip = 191; continue _fun0020 }
case 12:
                var4 = var1.fixed64;
                var2 = var5.userIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.userIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0020_ip = 12; continue _fun0020 }
case 191:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 58:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 192; continue _fun0020 }
case 193:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 194; continue _fun0020 }
case 195:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 194:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 192:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var40 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot14 = var40;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0021_ip = 177; continue _fun0021 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0022_ip = 196; continue _fun0022 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0022_ip = 53; continue _fun0022 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0022_ip = 55; continue _fun0022 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0022_ip = 197; continue _fun0022 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0022_ip = 59; continue _fun0022 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0022_ip = 197; continue _fun0022;
case 55:
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
case 53:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0022_ip = 52; continue _fun0022 }
case 196:
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
                if(!var3) { _fun0023_ip = 198; continue _fun0023 }
case 199:
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
                if(var8 < var3) { _fun0023_ip = 199; continue _fun0023 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0023_ip = 200; continue _fun0023 }
case 183:
                if(!(var6 == var3)) { _fun0023_ip = 201; continue _fun0023 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var39 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot15 = var39;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0024_ip = 177; continue _fun0024 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0025_ip = 196; continue _fun0025 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0025_ip = 53; continue _fun0025 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0025_ip = 55; continue _fun0025 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0025_ip = 197; continue _fun0025 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0025_ip = 59; continue _fun0025 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0025_ip = 197; continue _fun0025;
case 55:
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
case 53:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0025_ip = 52; continue _fun0025 }
case 196:
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
                if(!var3) { _fun0026_ip = 198; continue _fun0026 }
case 199:
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
                if(var8 < var3) { _fun0026_ip = 199; continue _fun0026 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0026_ip = 200; continue _fun0026 }
case 183:
                if(!(var6 == var3)) { _fun0026_ip = 201; continue _fun0026 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var38 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var38;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientSystemLocale$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0027_ip = 177; continue _fun0027 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0028_ip = 196; continue _fun0028 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0028_ip = 53; continue _fun0028 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0028_ip = 55; continue _fun0028 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0028_ip = 197; continue _fun0028 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0028_ip = 59; continue _fun0028 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0028_ip = 197; continue _fun0028;
case 55:
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
case 53:
                var21 = var1.locales;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0028_ip = 52; continue _fun0028 }
case 196:
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
                if(!var3) { _fun0029_ip = 198; continue _fun0029 }
case 199:
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
                if(var8 < var3) { _fun0029_ip = 199; continue _fun0029 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0029_ip = 200; continue _fun0029 }
case 183:
                if(!(var6 == var3)) { _fun0029_ip = 201; continue _fun0029 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var37 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var37;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0030_ip = 177; continue _fun0030 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0031_ip = 202; continue _fun0031 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0031_ip = 203; continue _fun0031 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0031_ip = 204; continue _fun0031 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0031_ip = 205; continue _fun0031 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0031_ip = 59; continue _fun0031 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0031_ip = 205; continue _fun0031;
case 204:
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
case 203:
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
case 205:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0031_ip = 52; continue _fun0031 }
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
                if(!var8) { _fun0032_ip = 206; continue _fun0032 }
case 207:
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
                if(var9 < var8) { _fun0032_ip = 207; continue _fun0032 }
case 206:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0032_ip = 208; continue _fun0032 }
case 209:
                if(!(var6 == var3)) { _fun0032_ip = 210; continue _fun0032 }
case 211:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 210:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 208:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var36 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var36;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_Place$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0033_ip = 212; continue _fun0033 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 212:
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
                if(!var2) { _fun0034_ip = 213; continue _fun0034 }
case 61:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0034_ip = 214; continue _fun0034 }
case 177:
                if(!(var7 !== var27)) { _fun0034_ip = 215; continue _fun0034 }
case 56:
                if(!(var8 !== var27)) { _fun0034_ip = 216; continue _fun0034 }
case 170:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0034_ip = 217; continue _fun0034 }
case 107:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0034_ip = 218; continue _fun0034 }
case 219:
                var23 = var21;
                if(!(var11 === var21)) { _fun0034_ip = 208; continue _fun0034 }
case 220:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 208:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0034_ip = 218; continue _fun0034;
case 217:
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
case 216:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['country'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 218; continue _fun0034;
case 215:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['subdivision'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 218; continue _fun0034;
case 214:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['city'] = var2;
                var20 = var4;
                var19 = var3;
case 218:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0034_ip = 61; continue _fun0034 }
case 213:
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
                if(!(var3 !== var2)) { _fun0035_ip = 61; continue _fun0035 }
case 35:
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
case 61:
                var2 = var5.subdivision;
                if(!(var3 !== var2)) { _fun0035_ip = 27; continue _fun0035 }
case 173:
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
case 27:
                var2 = var5.country;
                if(!(var3 !== var2)) { _fun0035_ip = 69; continue _fun0035 }
case 29:
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
case 69:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0035_ip = 221; continue _fun0035 }
case 222:
                var2 = 1;
                if(!(var2 == var4)) { _fun0035_ip = 223; continue _fun0035 }
case 224:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 223:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 221:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var35 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var35;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_ISORegion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0036_ip = 212; continue _fun0036 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 212:
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
                if(!var2) { _fun0037_ip = 225; continue _fun0037 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0037_ip = 226; continue _fun0037 }
case 54:
                if(!(var7 !== var26)) { _fun0037_ip = 168; continue _fun0037 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0037_ip = 39; continue _fun0037 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0037_ip = 227; continue _fun0037 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0037_ip = 171; continue _fun0037 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0037_ip = 227; continue _fun0037;
case 39:
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
case 168:
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var1['isoSubdivision'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0037_ip = 227; continue _fun0037;
case 226:
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var1['isoCountry'] = var2;
                var19 = var4;
                var18 = var3;
case 227:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0037_ip = 52; continue _fun0037 }
case 225:
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
                if(!(var3 !== var2)) { _fun0038_ip = 61; continue _fun0038 }
case 35:
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
case 61:
                var2 = var5.isoSubdivision;
                if(!(var3 !== var2)) { _fun0038_ip = 27; continue _fun0038 }
case 173:
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
case 27:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0038_ip = 174; continue _fun0038 }
case 175:
                var2 = 1;
                if(!(var2 == var4)) { _fun0038_ip = 36; continue _fun0038 }
case 176:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 36:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 174:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var34 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot20 = var34;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientLocation_Location$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0039_ip = 228; continue _fun0039 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 228:
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
                if(!var2) { _fun0040_ip = 229; continue _fun0040 }
case 230:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0040_ip = 231; continue _fun0040 }
case 232:
                if(!(var7 !== var30)) { _fun0040_ip = 233; continue _fun0040 }
case 234:
                if(!(var8 !== var30)) { _fun0040_ip = 235; continue _fun0040 }
case 236:
                var24 = var20.readUnknownField;
                if(!(var9 !== var24)) { _fun0040_ip = 222; continue _fun0040 }
case 185:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var10 !== var24)) { _fun0040_ip = 237; continue _fun0040 }
case 238:
                var26 = var24;
                if(!(var11 === var24)) { _fun0040_ip = 239; continue _fun0040 }
case 59:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var12];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 239:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0040_ip = 237; continue _fun0040;
case 222:
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
case 235:
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
                _fun0040_ip = 237; continue _fun0040;
case 233:
                var2 = {};
                var2['oneofKind'] = var14;
                var24 = var21.bool;
                var24 = var24.bind(var21)();
                var2['isEu'] = var24;
                var1['location'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0040_ip = 237; continue _fun0040;
case 231:
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
case 237:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0040_ip = 230; continue _fun0040 }
case 229:
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
                if(!(var3 === var4)) { _fun0041_ip = 104; continue _fun0041 }
case 105:
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
case 104:
                var3 = var5.location;
                var4 = var3.oneofKind;
                var3 = 'isEu';
                if(!(var3 === var4)) { _fun0041_ip = 239; continue _fun0041 }
case 107:
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
case 239:
                var3 = var5.location;
                var4 = var3.oneofKind;
                var3 = 'place';
                if(!(var3 === var4)) { _fun0041_ip = 235; continue _fun0041 }
case 240:
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
case 235:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0041_ip = 241; continue _fun0041 }
case 242:
                var2 = 1;
                if(!(var2 == var4)) { _fun0041_ip = 187; continue _fun0041 }
case 243:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 187:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 241:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var33 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var33;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserLocation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'locations', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'prefer_client_ip', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserLocation'];
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
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['locations'] = var2;
                var11 = false;
                var1['preferClientIp'] = var11;
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
                if(!(var6 !== var5)) { _fun0042_ip = 104; continue _fun0042 }
case 244:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 104:
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
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0043_ip = 245; continue _fun0043 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0043_ip = 167; continue _fun0043 }
case 54:
                if(!(var7 !== var26)) { _fun0043_ip = 168; continue _fun0043 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0043_ip = 39; continue _fun0043 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0043_ip = 246; continue _fun0043 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0043_ip = 171; continue _fun0043 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0043_ip = 246; continue _fun0043;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['preferClientIp'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0043_ip = 246; continue _fun0043;
case 167:
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
case 246:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0043_ip = 52; continue _fun0043 }
case 245:
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
                var3 = arg3;
                var2 = var5.locations;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0044_ip = 206; continue _fun0044 }
case 207:
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
                if(var9 < var8) { _fun0044_ip = 207; continue _fun0044 }
case 206:
                var9 = var5.preferClientIp;
                var8 = false;
                if(!(var8 !== var9)) { _fun0044_ip = 247; continue _fun0044 }
case 209:
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
                var9 = var5.preferClientIp;
                var9 = var10.bind(var11)(var9);
case 247:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0044_ip = 248; continue _fun0044 }
case 249:
                if(!(var6 == var3)) { _fun0044_ip = 250; continue _fun0044 }
case 192:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 250:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 248:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var32 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot22 = var32;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientIP$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
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
                if(!(var6 !== var5)) { _fun0045_ip = 177; continue _fun0045 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 13; continue _fun0046 }
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
                if(!var2) { _fun0046_ip = 196; continue _fun0046 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0046_ip = 53; continue _fun0046 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0046_ip = 55; continue _fun0046 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0046_ip = 197; continue _fun0046 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0046_ip = 59; continue _fun0046 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0046_ip = 197; continue _fun0046;
case 55:
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
case 53:
                var21 = var1.blocks;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0046_ip = 52; continue _fun0046 }
case 196:
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
                var2 = var5.blocks;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0047_ip = 198; continue _fun0047 }
case 199:
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
                if(var8 < var3) { _fun0047_ip = 199; continue _fun0047 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0047_ip = 200; continue _fun0047 }
case 183:
                if(!(var6 == var3)) { _fun0047_ip = 201; continue _fun0047 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var31 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot23 = var31;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIP$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'blocks', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'prefer_client_ip', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.UserIP'];
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
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['blocks'] = var2;
                var11 = false;
                var1['preferClientIp'] = var11;
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
                if(!(var6 !== var5)) { _fun0048_ip = 104; continue _fun0048 }
case 244:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 104:
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
                if(!var2) { _fun0049_ip = 246; continue _fun0049 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0049_ip = 167; continue _fun0049 }
case 54:
                if(!(var7 !== var26)) { _fun0049_ip = 168; continue _fun0049 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0049_ip = 39; continue _fun0049 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0049_ip = 251; continue _fun0049 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0049_ip = 171; continue _fun0049 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0049_ip = 251; continue _fun0049;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['preferClientIp'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0049_ip = 251; continue _fun0049;
case 167:
                var21 = var1.blocks;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 251:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0049_ip = 52; continue _fun0049 }
case 246:
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
                var2 = var5.blocks;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0050_ip = 198; continue _fun0050 }
case 199:
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
                if(var8 < var3) { _fun0050_ip = 199; continue _fun0050 }
case 198:
                var3 = var5.preferClientIp;
                var8 = false;
                if(!(var8 !== var3)) { _fun0050_ip = 252; continue _fun0050 }
case 18:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var9.bind(var4)(var3);
                var3 = var3.WireType;
                var9 = var3.Varint;
                var3 = 2;
                var10 = var10.bind(var1)(var3, var9);
                var9 = var10.bool;
                var3 = var5.preferClientIp;
                var3 = var9.bind(var10)(var3);
case 252:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0050_ip = 253; continue _fun0050 }
case 254:
                if(!(var6 == var3)) { _fun0050_ip = 32; continue _fun0050 }
case 33:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 32:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 253:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var30 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot24 = var30;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientOperatingSystem$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'ios_version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(7);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'android_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'macos_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'windows_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'playstation_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'xbox_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'linux_version', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot26;
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
                if(!(var6 !== var5)) { _fun0051_ip = 255; continue _fun0051 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0052_ip = 13; continue _fun0052 }
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
                if(!var2) { _fun0052_ip = 257; continue _fun0052 }
case 244:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0052_ip = 258; continue _fun0052 }
case 183:
                if(!(var7 !== var30)) { _fun0052_ip = 259; continue _fun0052 }
case 260:
                if(!(var8 !== var30)) { _fun0052_ip = 46; continue _fun0052 }
case 206:
                if(!(var9 !== var30)) { _fun0052_ip = 261; continue _fun0052 }
case 262:
                if(!(var10 !== var30)) { _fun0052_ip = 263; continue _fun0052 }
case 264:
                if(!(var15 !== var30)) { _fun0052_ip = 265; continue _fun0052 }
case 266:
                if(!(var11 !== var30)) { _fun0052_ip = 267; continue _fun0052 }
case 29:
                var24 = var20.readUnknownField;
                if(!(var12 !== var24)) { _fun0052_ip = 268; continue _fun0052 }
case 269:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var13 !== var24)) { _fun0052_ip = 270; continue _fun0052 }
case 271:
                var26 = var24;
                if(!(var14 === var24)) { _fun0052_ip = 272; continue _fun0052 }
case 273:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var15];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 272:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0052_ip = 270; continue _fun0052;
case 268:
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
case 267:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 265:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 263:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 261:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 46:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 259:
                var26 = _closure1_slot26;
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
                _fun0052_ip = 270; continue _fun0052;
case 258:
                var26 = _closure1_slot26;
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
case 270:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0052_ip = 244; continue _fun0052 }
case 257:
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
                var3 = var5.iosVersion;
                if(!var3) { _fun0053_ip = 274; continue _fun0053 }
case 14:
                var7 = _closure1_slot26;
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
case 274:
                var3 = var5.androidVersion;
                if(!var3) { _fun0053_ip = 194; continue _fun0053 }
case 164:
                var7 = _closure1_slot26;
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
case 194:
                var3 = var5.macosVersion;
                if(!var3) { _fun0053_ip = 181; continue _fun0053 }
case 55:
                var7 = _closure1_slot26;
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
case 181:
                var3 = var5.windowsVersion;
                if(!var3) { _fun0053_ip = 275; continue _fun0053 }
case 216:
                var7 = _closure1_slot26;
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
case 275:
                var3 = var5.playstationVersion;
                if(!var3) { _fun0053_ip = 276; continue _fun0053 }
case 277:
                var7 = _closure1_slot26;
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
case 276:
                var3 = var5.xboxVersion;
                if(!var3) { _fun0053_ip = 278; continue _fun0053 }
case 279:
                var7 = _closure1_slot26;
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
case 278:
                var3 = var5.linuxVersion;
                if(!var3) { _fun0053_ip = 280; continue _fun0053 }
case 281:
                var7 = _closure1_slot26;
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
case 280:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0053_ip = 282; continue _fun0053 }
case 283:
                var2 = 1;
                if(!(var2 == var4)) { _fun0053_ip = 284; continue _fun0053 }
case 285:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 284:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 282:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var29 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot25 = var29;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'ranges', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot27;
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
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
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
                if(!(var6 !== var5)) { _fun0054_ip = 104; continue _fun0054 }
case 244:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 104:
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
                if(!var2) { _fun0055_ip = 245; continue _fun0055 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0055_ip = 167; continue _fun0055 }
case 54:
                if(!(var7 !== var26)) { _fun0055_ip = 168; continue _fun0055 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0055_ip = 39; continue _fun0055 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0055_ip = 246; continue _fun0055 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0055_ip = 171; continue _fun0055 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0055_ip = 246; continue _fun0055;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAroundPyotoBug'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0055_ip = 246; continue _fun0055;
case 167:
                var21 = var1.ranges;
                var20 = var21.push;
                var23 = _closure1_slot27;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 246:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0055_ip = 52; continue _fun0055 }
case 245:
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
                var2 = var5.ranges;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0056_ip = 206; continue _fun0056 }
case 207:
                var12 = _closure1_slot27;
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
                if(var9 < var8) { _fun0056_ip = 207; continue _fun0056 }
case 206:
                var9 = var5.workAroundPyotoBug;
                var8 = false;
                if(!(var8 !== var9)) { _fun0056_ip = 247; continue _fun0056 }
case 209:
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
case 247:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0056_ip = 248; continue _fun0056 }
case 249:
                if(!(var6 == var3)) { _fun0056_ip = 250; continue _fun0056 }
case 192:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 250:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 248:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var28 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var28;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'lower_bound', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'upper_bound', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot28;
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
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
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
                if(!(var6 !== var5)) { _fun0057_ip = 255; continue _fun0057 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0058_ip = 286; continue _fun0058 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0058_ip = 287; continue _fun0058 }
case 54:
                if(!(var7 !== var26)) { _fun0058_ip = 168; continue _fun0058 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0058_ip = 39; continue _fun0058 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0058_ip = 288; continue _fun0058 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0058_ip = 171; continue _fun0058 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0058_ip = 288; continue _fun0058;
case 39:
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
case 168:
                var22 = _closure1_slot28;
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
                _fun0058_ip = 288; continue _fun0058;
case 287:
                var22 = _closure1_slot28;
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
case 288:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0058_ip = 52; continue _fun0058 }
case 286:
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
                var2 = arg3;
                var3 = var5.lowerBound;
                if(!var3) { _fun0059_ip = 274; continue _fun0059 }
case 14:
                var7 = _closure1_slot28;
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
case 274:
                var3 = var5.upperBound;
                if(!var3) { _fun0059_ip = 194; continue _fun0059 }
case 164:
                var7 = _closure1_slot28;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0059_ip = 289; continue _fun0059 }
case 204:
                var2 = 1;
                if(!(var2 == var4)) { _fun0059_ip = 28; continue _fun0059 }
case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 28:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 289:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var27 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var27;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionRangeBound$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot29;
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
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
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
                if(!(var6 !== var5)) { _fun0060_ip = 290; continue _fun0060 }
case 61:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 290:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0061_ip = 13; continue _fun0061 }
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
                if(!var2) { _fun0061_ip = 291; continue _fun0061 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0061_ip = 167; continue _fun0061 }
case 54:
                if(!(var7 !== var26)) { _fun0061_ip = 168; continue _fun0061 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0061_ip = 39; continue _fun0061 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0061_ip = 292; continue _fun0061 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0061_ip = 171; continue _fun0061 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0061_ip = 292; continue _fun0061;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['inclusive'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0061_ip = 292; continue _fun0061;
case 167:
                var22 = _closure1_slot29;
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
case 292:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0061_ip = 52; continue _fun0061 }
case 291:
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
                var2 = var5.version;
                if(!var2) { _fun0062_ip = 274; continue _fun0062 }
case 14:
                var7 = _closure1_slot29;
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
case 274:
                var4 = var5.inclusive;
                var2 = false;
                if(!(var2 !== var4)) { _fun0062_ip = 293; continue _fun0062 }
case 228:
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
case 293:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0062_ip = 294; continue _fun0062 }
case 295:
                var2 = 1;
                if(!(var2 == var4)) { _fun0062_ip = 296; continue _fun0062 }
case 297:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 296:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 294:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var26 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var26;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SDKVersionSpecifier$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
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
                if(!(var6 !== var5)) { _fun0063_ip = 37; continue _fun0063 }
case 50:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 37:
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
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0064_ip = 51; continue _fun0064 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0064_ip = 53; continue _fun0064 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0064_ip = 55; continue _fun0064 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0064_ip = 57; continue _fun0064 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0064_ip = 59; continue _fun0064 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0064_ip = 57; continue _fun0064;
case 55:
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
case 53:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['version'] = var2;
                var19 = var4;
                var18 = var3;
case 57:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0064_ip = 52; continue _fun0064 }
case 51:
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
                var3 = var5.version;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0065_ip = 61; continue _fun0065 }
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
case 61:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0065_ip = 62; continue _fun0065 }
case 63:
                var2 = 1;
                if(!(var2 == var4)) { _fun0065_ip = 64; continue _fun0065 }
case 65:
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
case 62:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var25 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var25;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientPlatform$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'ios_version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(6);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'android_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'web_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'native_version', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 6, 'name': 'allow_non_native_web', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 5, 'name': 'client_required_changes', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot35;
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
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
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
                if(!(var6 !== var5)) { _fun0066_ip = 290; continue _fun0066 }
case 61:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 290:
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
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0067_ip = 13; continue _fun0067 }
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
                if(!var2) { _fun0067_ip = 298; continue _fun0067 }
case 16:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0067_ip = 299; continue _fun0067 }
case 18:
                if(!(var7 !== var29)) { _fun0067_ip = 300; continue _fun0067 }
case 11:
                if(!(var8 !== var29)) { _fun0067_ip = 301; continue _fun0067 }
case 21:
                if(!(var9 !== var29)) { _fun0067_ip = 302; continue _fun0067 }
case 23:
                if(!(var14 !== var29)) { _fun0067_ip = 291; continue _fun0067 }
case 25:
                if(!(var10 !== var29)) { _fun0067_ip = 26; continue _fun0067 }
case 27:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0067_ip = 28; continue _fun0067 }
case 29:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0067_ip = 303; continue _fun0067 }
case 31:
                var25 = var23;
                if(!(var13 === var23)) { _fun0067_ip = 32; continue _fun0067 }
case 33:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 32:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0067_ip = 303; continue _fun0067;
case 28:
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
case 26:
                var25 = _closure1_slot35;
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
                _fun0067_ip = 303; continue _fun0067;
case 291:
                var2 = var20.bool;
                var2 = var2.bind(var20)();
                var1['allowNonNativeWeb'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0067_ip = 303; continue _fun0067;
case 302:
                var25 = _closure1_slot31;
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
                _fun0067_ip = 303; continue _fun0067;
case 301:
                var25 = _closure1_slot31;
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
                _fun0067_ip = 303; continue _fun0067;
case 300:
                var25 = _closure1_slot31;
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
                _fun0067_ip = 303; continue _fun0067;
case 299:
                var25 = _closure1_slot31;
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
case 303:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0067_ip = 16; continue _fun0067 }
case 298:
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
                var3 = arg3;
                var2 = var5.iosVersion;
                if(!var2) { _fun0068_ip = 274; continue _fun0068 }
case 14:
                var7 = _closure1_slot31;
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
case 274:
                var2 = var5.androidVersion;
                if(!var2) { _fun0068_ip = 194; continue _fun0068 }
case 164:
                var7 = _closure1_slot31;
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
case 194:
                var2 = var5.webVersion;
                if(!var2) { _fun0068_ip = 181; continue _fun0068 }
case 55:
                var7 = _closure1_slot31;
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
case 181:
                var2 = var5.nativeVersion;
                if(!var2) { _fun0068_ip = 275; continue _fun0068 }
case 216:
                var7 = _closure1_slot31;
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
case 275:
                var4 = var5.allowNonNativeWeb;
                var2 = false;
                if(!(var2 !== var4)) { _fun0068_ip = 304; continue _fun0068 }
case 305:
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
case 304:
                var4 = var5.clientRequiredChanges;
                if(!var4) { _fun0068_ip = 306; continue _fun0068 }
case 307:
                var8 = _closure1_slot35;
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
case 306:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0068_ip = 308; continue _fun0068 }
case 309:
                var2 = 1;
                if(!(var2 == var4)) { _fun0068_ip = 310; continue _fun0068 }
case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 310:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 308:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var24 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot30 = var24;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersion$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'ranges', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot32;
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
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
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
                if(!(var6 !== var5)) { _fun0069_ip = 104; continue _fun0069 }
case 244:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 104:
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
                if(!var2) { _fun0070_ip = 245; continue _fun0070 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0070_ip = 167; continue _fun0070 }
case 54:
                if(!(var7 !== var26)) { _fun0070_ip = 168; continue _fun0070 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0070_ip = 39; continue _fun0070 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0070_ip = 246; continue _fun0070 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0070_ip = 171; continue _fun0070 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0070_ip = 246; continue _fun0070;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['workAroundPyotoBug'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0070_ip = 246; continue _fun0070;
case 167:
                var21 = var1.ranges;
                var20 = var21.push;
                var23 = _closure1_slot32;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 246:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0070_ip = 52; continue _fun0070 }
case 245:
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
                var2 = var5.ranges;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0071_ip = 206; continue _fun0071 }
case 207:
                var12 = _closure1_slot32;
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
                if(var9 < var8) { _fun0071_ip = 207; continue _fun0071 }
case 206:
                var9 = var5.workAroundPyotoBug;
                var8 = false;
                if(!(var8 !== var9)) { _fun0071_ip = 247; continue _fun0071 }
case 209:
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
case 247:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0071_ip = 248; continue _fun0071 }
case 249:
                if(!(var6 == var3)) { _fun0071_ip = 250; continue _fun0071 }
case 192:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 250:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 248:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var23 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot31 = var23;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'lower_bound', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot33;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'upper_bound', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot33;
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
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
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
                if(!(var6 !== var5)) { _fun0072_ip = 255; continue _fun0072 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0073_ip = 13; continue _fun0073 }
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
                if(!var2) { _fun0073_ip = 286; continue _fun0073 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0073_ip = 287; continue _fun0073 }
case 54:
                if(!(var7 !== var26)) { _fun0073_ip = 168; continue _fun0073 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0073_ip = 39; continue _fun0073 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0073_ip = 288; continue _fun0073 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0073_ip = 171; continue _fun0073 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0073_ip = 288; continue _fun0073;
case 39:
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
case 168:
                var22 = _closure1_slot33;
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
                _fun0073_ip = 288; continue _fun0073;
case 287:
                var22 = _closure1_slot33;
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
case 288:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0073_ip = 52; continue _fun0073 }
case 286:
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
                var3 = var5.lowerBound;
                if(!var3) { _fun0074_ip = 274; continue _fun0074 }
case 14:
                var7 = _closure1_slot33;
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
case 274:
                var3 = var5.upperBound;
                if(!var3) { _fun0074_ip = 194; continue _fun0074 }
case 164:
                var7 = _closure1_slot33;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0074_ip = 289; continue _fun0074 }
case 204:
                var2 = 1;
                if(!(var2 == var4)) { _fun0074_ip = 28; continue _fun0074 }
case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 28:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 289:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot32 = var22;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionRangeBound$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'version', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot34;
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
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
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
                if(!(var6 !== var5)) { _fun0075_ip = 290; continue _fun0075 }
case 61:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 290:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0076_ip = 13; continue _fun0076 }
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
                if(!var2) { _fun0076_ip = 291; continue _fun0076 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0076_ip = 167; continue _fun0076 }
case 54:
                if(!(var7 !== var26)) { _fun0076_ip = 168; continue _fun0076 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0076_ip = 39; continue _fun0076 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0076_ip = 292; continue _fun0076 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0076_ip = 171; continue _fun0076 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0076_ip = 292; continue _fun0076;
case 39:
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
case 168:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['inclusive'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0076_ip = 292; continue _fun0076;
case 167:
                var22 = _closure1_slot34;
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
case 292:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0076_ip = 52; continue _fun0076 }
case 291:
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
                var3 = arg3;
                var2 = var5.version;
                if(!var2) { _fun0077_ip = 274; continue _fun0077 }
case 14:
                var7 = _closure1_slot34;
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
case 274:
                var4 = var5.inclusive;
                var2 = false;
                if(!(var2 !== var4)) { _fun0077_ip = 293; continue _fun0077 }
case 228:
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
case 293:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0077_ip = 294; continue _fun0077 }
case 295:
                var2 = 1;
                if(!(var2 == var4)) { _fun0077_ip = 296; continue _fun0077 }
case 297:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 296:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 294:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var21 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot33 = var21;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PlatformVersionSpecifier$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
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
                if(!(var6 !== var5)) { _fun0078_ip = 37; continue _fun0078 }
case 50:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 37:
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
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0079_ip = 13; continue _fun0079 }
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
                if(!var2) { _fun0079_ip = 312; continue _fun0079 }
case 165:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0079_ip = 313; continue _fun0079 }
case 212:
                if(!(var7 !== var28)) { _fun0079_ip = 314; continue _fun0079 }
case 315:
                if(!(var8 !== var28)) { _fun0079_ip = 316; continue _fun0079 }
case 317:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0079_ip = 318; continue _fun0079 }
case 23:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0079_ip = 319; continue _fun0079 }
case 29:
                var24 = var22;
                if(!(var11 === var22)) { _fun0079_ip = 320; continue _fun0079 }
case 200:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 320:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0079_ip = 319; continue _fun0079;
case 318:
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
case 316:
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
                _fun0079_ip = 319; continue _fun0079;
case 314:
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
                _fun0079_ip = 319; continue _fun0079;
case 313:
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var1['major'] = var2;
                var21 = var4;
                var20 = var3;
case 319:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0079_ip = 165; continue _fun0079 }
case 312:
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
                var2 = arg3;
                var4 = var5.major;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0080_ip = 165; continue _fun0080 }
case 321:
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
case 165:
                var3 = var5.minor;
                if(!var3) { _fun0080_ip = 322; continue _fun0080 }
case 230:
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
case 322:
                var3 = var5.build;
                if(!var3) { _fun0080_ip = 323; continue _fun0080 }
case 273:
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
case 323:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0080_ip = 324; continue _fun0080 }
case 325:
                var2 = 1;
                if(!(var2 == var4)) { _fun0080_ip = 166; continue _fun0080 }
case 72:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 166:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 324:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var20 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot34 = var20;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientRequiredChanges$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
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
                if(!(var6 !== var5)) { _fun0081_ip = 183; continue _fun0081 }
case 326:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 183:
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
                if(!var2) { _fun0082_ip = 229; continue _fun0082 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0082_ip = 263; continue _fun0082 }
case 164:
                if(!(var8 !== var28)) { _fun0082_ip = 323; continue _fun0082 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0082_ip = 327; continue _fun0082 }
case 260:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0082_ip = 328; continue _fun0082 }
case 62:
                var25 = var23;
                if(!(var11 === var23)) { _fun0082_ip = 295; continue _fun0082 }
case 329:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 295:
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
                _fun0082_ip = 328; continue _fun0082;
case 327:
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
case 323:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0082_ip = 330; continue _fun0082 }
case 196:
                var23 = var1.prNumbers;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0082_ip = 328; continue _fun0082;
case 330:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0082_ip = 328; continue _fun0082 }
case 305:
                var24 = var1.prNumbers;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0082_ip = 305; continue _fun0082 }
case 313:
                _fun0082_ip = 328; continue _fun0082;
case 263:
                var23 = var1.commitHashes;
                var22 = var23.push;
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 328:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0082_ip = 180; continue _fun0082 }
case 229:
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
                var2 = var5.commitHashes;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                var9 = 0;
                if(!var3) { _fun0083_ip = 290; continue _fun0083 }
case 331:
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
                if(var9 < var3) { _fun0083_ip = 331; continue _fun0083 }
case 290:
                var3 = var5.prNumbers;
                var3 = var3.length;
                if(!var3) { _fun0083_ip = 332; continue _fun0083 }
case 315:
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
                if(!var3) { _fun0083_ip = 106; continue _fun0083 }
case 333:
                var9 = var1.int32;
                var3 = var5.prNumbers;
                var3 = var3[var8];
                var3 = var9.bind(var1)(var3);
                var8 = var8 + 1;
                var3 = var5.prNumbers;
                var3 = var3.length;
                if(var8 < var3) { _fun0083_ip = 333; continue _fun0083 }
case 106:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 332:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0083_ip = 221; continue _fun0083 }
case 334:
                if(!(var6 == var3)) { _fun0083_ip = 335; continue _fun0083 }
case 336:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 335:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 221:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot35 = var19;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIsBot$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
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
                if(!(var6 !== var5)) { _fun0084_ip = 290; continue _fun0084 }
case 61:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 290:
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
                if(!var2) { _fun0085_ip = 51; continue _fun0085 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0085_ip = 53; continue _fun0085 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0085_ip = 55; continue _fun0085 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0085_ip = 57; continue _fun0085 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0085_ip = 59; continue _fun0085 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0085_ip = 57; continue _fun0085;
case 55:
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
case 53:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['isBot'] = var2;
                var19 = var4;
                var18 = var3;
case 57:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0085_ip = 52; continue _fun0085 }
case 51:
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
                var3 = var5.isBot;
                var2 = false;
                if(!(var2 !== var3)) { _fun0086_ip = 61; continue _fun0086 }
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
case 61:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0086_ip = 27; continue _fun0086 }
case 326:
                var2 = 1;
                if(!(var2 == var4)) { _fun0086_ip = 206; continue _fun0086 }
case 337:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 206:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 27:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot36 = var18;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserAgeRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
                if(!(var6 !== var5)) { _fun0087_ip = 255; continue _fun0087 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0088_ip = 13; continue _fun0088 }
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
                if(!var2) { _fun0088_ip = 338; continue _fun0088 }
case 61:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0088_ip = 292; continue _fun0088 }
case 177:
                if(!(var7 !== var27)) { _fun0088_ip = 38; continue _fun0088 }
case 56:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0088_ip = 339; continue _fun0088 }
case 317:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0088_ip = 340; continue _fun0088 }
case 27:
                var23 = var21;
                if(!(var10 === var21)) { _fun0088_ip = 341; continue _fun0088 }
case 219:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 341:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0088_ip = 340; continue _fun0088;
case 339:
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
case 38:
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
                _fun0088_ip = 340; continue _fun0088;
case 292:
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
case 340:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0088_ip = 61; continue _fun0088 }
case 338:
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
                var3 = var5.minAgeYears;
                if(!var3) { _fun0089_ip = 169; continue _fun0089 }
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
case 169:
                var3 = var5.maxAgeYears;
                if(!var3) { _fun0089_ip = 174; continue _fun0089 }
case 11:
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
case 174:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0089_ip = 38; continue _fun0089 }
case 342:
                var2 = 1;
                if(!(var2 == var4)) { _fun0089_ip = 343; continue _fun0089 }
case 250:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 343:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 38:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var17 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot37 = var17;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Fixed64Value$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
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
                if(!(var6 !== var5)) { _fun0090_ip = 344; continue _fun0090 }
case 345:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 344:
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
                if(!var2) { _fun0091_ip = 196; continue _fun0091 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0091_ip = 53; continue _fun0091 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0091_ip = 55; continue _fun0091 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0091_ip = 197; continue _fun0091 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0091_ip = 59; continue _fun0091 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0091_ip = 197; continue _fun0091;
case 55:
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
case 53:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['value'] = var2;
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0091_ip = 52; continue _fun0091 }
case 196:
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
                var3 = var5.value;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0092_ip = 50; continue _fun0092 }
case 321:
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
case 50:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0092_ip = 172; continue _fun0092 }
case 12:
                var2 = 1;
                if(!(var2 == var4)) { _fun0092_ip = 23; continue _fun0092 }
case 274:
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
case 172:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot38 = var16;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserIDRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'min_id', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'max_id', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot38;
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
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
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
                if(!(var6 !== var5)) { _fun0093_ip = 255; continue _fun0093 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0094_ip = 13; continue _fun0094 }
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
                if(!var2) { _fun0094_ip = 286; continue _fun0094 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0094_ip = 287; continue _fun0094 }
case 54:
                if(!(var7 !== var26)) { _fun0094_ip = 168; continue _fun0094 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0094_ip = 39; continue _fun0094 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0094_ip = 288; continue _fun0094 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0094_ip = 171; continue _fun0094 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0094_ip = 288; continue _fun0094;
case 39:
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
case 168:
                var22 = _closure1_slot38;
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
                _fun0094_ip = 288; continue _fun0094;
case 287:
                var22 = _closure1_slot38;
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
case 288:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0094_ip = 52; continue _fun0094 }
case 286:
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
                var2 = arg3;
                var3 = var5.minId;
                if(!var3) { _fun0095_ip = 274; continue _fun0095 }
case 14:
                var7 = _closure1_slot38;
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
case 274:
                var3 = var5.maxId;
                if(!var3) { _fun0095_ip = 194; continue _fun0095 }
case 164:
                var7 = _closure1_slot38;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0095_ip = 289; continue _fun0095 }
case 204:
                var2 = 1;
                if(!(var2 == var4)) { _fun0095_ip = 28; continue _fun0095 }
case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 28:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 289:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot39 = var15;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserHasFlag$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
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
                if(!(var6 !== var5)) { _fun0096_ip = 228; continue _fun0096 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 228:
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
                if(!var2) { _fun0097_ip = 196; continue _fun0097 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0097_ip = 53; continue _fun0097 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0097_ip = 55; continue _fun0097 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0097_ip = 197; continue _fun0097 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0097_ip = 59; continue _fun0097 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0097_ip = 197; continue _fun0097;
case 55:
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
case 53:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['mask'] = var2;
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0097_ip = 52; continue _fun0097 }
case 196:
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
                var3 = var5.mask;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0098_ip = 178; continue _fun0098 }
case 346:
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
case 178:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0098_ip = 347; continue _fun0098 }
case 348:
                var2 = 1;
                if(!(var2 == var4)) { _fun0098_ip = 349; continue _fun0098 }
case 350:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 349:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 347:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot40 = var14;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdInRangeByHash$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
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
                if(!(var6 !== var5)) { _fun0099_ip = 212; continue _fun0099 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 212:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0100_ip = 13; continue _fun0100 }
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
                if(!var2) { _fun0100_ip = 351; continue _fun0100 }
case 61:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0100_ip = 352; continue _fun0100 }
case 177:
                if(!(var7 !== var27)) { _fun0100_ip = 242; continue _fun0100 }
case 56:
                if(!(var8 !== var27)) { _fun0100_ip = 216; continue _fun0100 }
case 170:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0100_ip = 217; continue _fun0100 }
case 107:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0100_ip = 353; continue _fun0100 }
case 219:
                var23 = var21;
                if(!(var11 === var21)) { _fun0100_ip = 208; continue _fun0100 }
case 220:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 208:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0100_ip = 353; continue _fun0100;
case 217:
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
case 216:
                var2 = var18.uint32;
                var2 = var2.bind(var18)();
                var1['startRingPosition'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0100_ip = 353; continue _fun0100;
case 242:
                var2 = var18.uint32;
                var2 = var2.bind(var18)();
                var1['stopRingPosition'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0100_ip = 353; continue _fun0100;
case 352:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['hashKey'] = var2;
                var20 = var4;
                var19 = var3;
case 353:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0100_ip = 61; continue _fun0100 }
case 351:
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
                var3 = var5.hashKey;
                var2 = '';
                if(!(var2 !== var3)) { _fun0101_ip = 61; continue _fun0101 }
case 35:
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
case 61:
                var2 = var5.stopRingPosition;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0101_ip = 172; continue _fun0101 }
case 230:
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
case 172:
                var2 = var5.startRingPosition;
                if(!(var3 !== var2)) { _fun0101_ip = 318; continue _fun0101 }
case 220:
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
case 318:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0101_ip = 216; continue _fun0101 }
case 250:
                var2 = 1;
                if(!(var2 == var4)) { _fun0101_ip = 354; continue _fun0101 }
case 334:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 354:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 216:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot41 = var13;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientReleaseChannel$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
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
                if(!(var6 !== var5)) { _fun0102_ip = 177; continue _fun0102 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0103_ip = 13; continue _fun0103 }
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
                if(!var2) { _fun0103_ip = 196; continue _fun0103 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0103_ip = 53; continue _fun0103 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0103_ip = 55; continue _fun0103 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0103_ip = 197; continue _fun0103 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0103_ip = 59; continue _fun0103 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0103_ip = 197; continue _fun0103;
case 55:
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
case 53:
                var21 = var1.releaseChannels;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0103_ip = 52; continue _fun0103 }
case 196:
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
                var2 = var5.releaseChannels;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var3) { _fun0104_ip = 198; continue _fun0104 }
case 199:
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
                if(var8 < var3) { _fun0104_ip = 199; continue _fun0104 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0104_ip = 200; continue _fun0104 }
case 183:
                if(!(var6 == var3)) { _fun0104_ip = 201; continue _fun0104 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot42 = var12;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Always$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
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
                if(!(var6 !== var5)) { _fun0105_ip = 355; continue _fun0105 }
case 180:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 355:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0106_ip = 13; continue _fun0106 }
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
                if(!var2) { _fun0106_ip = 51; continue _fun0106 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0106_ip = 53; continue _fun0106 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0106_ip = 55; continue _fun0106 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0106_ip = 57; continue _fun0106 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0106_ip = 59; continue _fun0106 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0106_ip = 57; continue _fun0106;
case 55:
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
case 53:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['value'] = var2;
                var19 = var4;
                var18 = var3;
case 57:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0106_ip = 52; continue _fun0106 }
case 51:
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
                var3 = var5.value;
                var2 = false;
                if(!(var2 !== var3)) { _fun0107_ip = 356; continue _fun0107 }
case 357:
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
case 356:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0107_ip = 211; continue _fun0107 }
case 66:
                var2 = 1;
                if(!(var2 == var4)) { _fun0107_ip = 358; continue _fun0107 }
case 359:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 358:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 211:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot43 = var11;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdInExperiment$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
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
                if(!(var6 !== var5)) { _fun0108_ip = 360; continue _fun0108 }
case 63:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 360:
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
                if(!var2) { _fun0109_ip = 229; continue _fun0109 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0109_ip = 263; continue _fun0109 }
case 164:
                if(!(var8 !== var28)) { _fun0109_ip = 323; continue _fun0109 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0109_ip = 327; continue _fun0109 }
case 260:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0109_ip = 328; continue _fun0109 }
case 62:
                var25 = var23;
                if(!(var11 === var23)) { _fun0109_ip = 295; continue _fun0109 }
case 329:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 295:
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
                _fun0109_ip = 328; continue _fun0109;
case 327:
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
case 323:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0109_ip = 330; continue _fun0109 }
case 196:
                var23 = var1.variationIds;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0109_ip = 328; continue _fun0109;
case 330:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0109_ip = 328; continue _fun0109 }
case 305:
                var24 = var1.variationIds;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0109_ip = 305; continue _fun0109 }
case 313:
                _fun0109_ip = 328; continue _fun0109;
case 263:
                var2 = var18.fixed64;
                var22 = var2.bind(var18)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['experimentId'] = var2;
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 328:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0109_ip = 180; continue _fun0109 }
case 229:
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
                var3 = var5.experimentId;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0110_ip = 178; continue _fun0110 }
case 346:
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
case 178:
                var2 = var5.variationIds;
                var2 = var2.length;
                if(!var2) { _fun0110_ip = 361; continue _fun0110 }
case 362:
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
                if(!var2) { _fun0110_ip = 363; continue _fun0110 }
case 364:
                var4 = var1.int32;
                var2 = var5.variationIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.variationIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0110_ip = 364; continue _fun0110 }
case 363:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 361:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0110_ip = 365; continue _fun0110 }
case 332:
                var2 = 1;
                if(!(var2 == var4)) { _fun0110_ip = 366; continue _fun0110 }
case 367:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 366:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 365:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot44 = var10;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserPremiumType$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
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
                if(!(var6 !== var5)) { _fun0111_ip = 177; continue _fun0111 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                if(!var2) { _fun0112_ip = 368; continue _fun0112 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0112_ip = 181; continue _fun0112 }
case 164:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0112_ip = 182; continue _fun0112 }
case 183:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0112_ip = 369; continue _fun0112 }
case 185:
                var25 = var23;
                if(!(var11 === var23)) { _fun0112_ip = 186; continue _fun0112 }
case 62:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 186:
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
                _fun0112_ip = 369; continue _fun0112;
case 182:
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
case 181:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0112_ip = 370; continue _fun0112 }
case 188:
                var23 = var1.premiumTypes;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0112_ip = 369; continue _fun0112;
case 370:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0112_ip = 369; continue _fun0112 }
case 371:
                var24 = var1.premiumTypes;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0112_ip = 371; continue _fun0112 }
case 369:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0112_ip = 180; continue _fun0112 }
case 368:
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
                var2 = var5.premiumTypes;
                var2 = var2.length;
                if(!var2) { _fun0113_ip = 58; continue _fun0113 }
case 190:
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
                if(!var2) { _fun0113_ip = 191; continue _fun0113 }
case 12:
                var4 = var1.int32;
                var2 = var5.premiumTypes;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.premiumTypes;
                var2 = var2.length;
                if(var3 < var2) { _fun0113_ip = 12; continue _fun0113 }
case 191:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 58:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0113_ip = 192; continue _fun0113 }
case 193:
                var2 = 1;
                if(!(var2 == var4)) { _fun0113_ip = 194; continue _fun0113 }
case 195:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 194:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 192:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot45 = var9;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UnitIdMatchesFilterSnapshot$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
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
                if(!(var6 !== var5)) { _fun0114_ip = 183; continue _fun0114 }
case 326:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 183:
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
                if(!var2) { _fun0115_ip = 372; continue _fun0115 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0115_ip = 304; continue _fun0115 }
case 164:
                if(!(var8 !== var28)) { _fun0115_ip = 323; continue _fun0115 }
case 18:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0115_ip = 327; continue _fun0115 }
case 260:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0115_ip = 276; continue _fun0115 }
case 62:
                var25 = var23;
                if(!(var11 === var23)) { _fun0115_ip = 295; continue _fun0115 }
case 329:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 295:
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
                _fun0115_ip = 276; continue _fun0115;
case 327:
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
case 323:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0115_ip = 314; continue _fun0115 }
case 196:
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
                _fun0115_ip = 276; continue _fun0115;
case 314:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0115_ip = 276; continue _fun0115 }
case 286:
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
                if(var2 < var22) { _fun0115_ip = 286; continue _fun0115 }
case 373:
                _fun0115_ip = 276; continue _fun0115;
case 304:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['filterSnapshotName'] = var2;
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 276:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0115_ip = 180; continue _fun0115 }
case 372:
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
                var3 = var5.filterSnapshotName;
                var2 = '';
                if(!(var2 !== var3)) { _fun0116_ip = 61; continue _fun0116 }
case 35:
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
case 61:
                var2 = var5.targetFilterValues;
                var2 = var2.length;
                if(!var2) { _fun0116_ip = 182; continue _fun0116 }
case 12:
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
                if(!var2) { _fun0116_ip = 374; continue _fun0116 }
case 375:
                var4 = var1.fixed64;
                var2 = var5.targetFilterValues;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.targetFilterValues;
                var2 = var2.length;
                if(var3 < var2) { _fun0116_ip = 375; continue _fun0116 }
case 374:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 182:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0116_ip = 376; continue _fun0116 }
case 377:
                var2 = 1;
                if(!(var2 == var4)) { _fun0116_ip = 378; continue _fun0116 }
case 379:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 378:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 376:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot46 = var8;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildIds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildIds'];
            var1[1] = var6;
            var6 = {'discord_protos.discord_experimentation.v1.filter_category': 'FILTER_CATEGORY_GUILD', 'discord_protos.discord_experimentation.v1.filter_evaluation_mode': 'FILTER_EVALUATION_MODE_LAZY'};
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
                if(!(var6 !== var5)) { _fun0117_ip = 177; continue _fun0117 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0118_ip = 13; continue _fun0118 }
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
                if(!var2) { _fun0118_ip = 179; continue _fun0118 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0118_ip = 181; continue _fun0118 }
case 164:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0118_ip = 182; continue _fun0118 }
case 183:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0118_ip = 184; continue _fun0118 }
case 185:
                var25 = var23;
                if(!(var11 === var23)) { _fun0118_ip = 186; continue _fun0118 }
case 62:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 186:
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
                _fun0118_ip = 184; continue _fun0118;
case 182:
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
case 181:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0118_ip = 187; continue _fun0118 }
case 188:
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
                _fun0118_ip = 184; continue _fun0118;
case 187:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0118_ip = 184; continue _fun0118 }
case 189:
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
                if(var2 < var22) { _fun0118_ip = 189; continue _fun0118 }
case 184:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0118_ip = 180; continue _fun0118 }
case 179:
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
                var2 = var5.guildIds;
                var2 = var2.length;
                if(!var2) { _fun0119_ip = 58; continue _fun0119 }
case 190:
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
                if(!var2) { _fun0119_ip = 191; continue _fun0119 }
case 12:
                var4 = var1.fixed64;
                var2 = var5.guildIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.guildIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0119_ip = 12; continue _fun0119 }
case 191:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 58:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0119_ip = 192; continue _fun0119 }
case 193:
                var2 = 1;
                if(!(var2 == var4)) { _fun0119_ip = 194; continue _fun0119 }
case 195:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 194:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 192:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot47 = var7;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildMemberCountRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
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
            var6 = {'discord_protos.discord_experimentation.v1.filter_category': 'FILTER_CATEGORY_GUILD', 'discord_protos.discord_experimentation.v1.filter_evaluation_mode': 'FILTER_EVALUATION_MODE_STICKY'};
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
            _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
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
                if(!(var6 !== var5)) { _fun0120_ip = 255; continue _fun0120 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
            _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0121_ip = 13; continue _fun0121 }
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
                if(!var2) { _fun0121_ip = 338; continue _fun0121 }
case 61:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0121_ip = 292; continue _fun0121 }
case 177:
                if(!(var7 !== var27)) { _fun0121_ip = 38; continue _fun0121 }
case 56:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0121_ip = 339; continue _fun0121 }
case 317:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0121_ip = 340; continue _fun0121 }
case 27:
                var23 = var21;
                if(!(var10 === var21)) { _fun0121_ip = 341; continue _fun0121 }
case 219:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 341:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0121_ip = 340; continue _fun0121;
case 339:
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
case 38:
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
                _fun0121_ip = 340; continue _fun0121;
case 292:
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
case 340:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0121_ip = 61; continue _fun0121 }
case 338:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.minCount;
                if(!var3) { _fun0122_ip = 169; continue _fun0122 }
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
case 169:
                var3 = var5.maxCount;
                if(!var3) { _fun0122_ip = 174; continue _fun0122 }
case 11:
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
case 174:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0122_ip = 38; continue _fun0122 }
case 342:
                var2 = 1;
                if(!(var2 == var4)) { _fun0122_ip = 343; continue _fun0122 }
case 250:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 343:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 38:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot48 = var6;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildIdRange$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var1 = {'no': 1, 'name': 'min_id', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'max_id', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildIdRange'];
            var1[1] = var6;
            var6 = {'discord_protos.discord_experimentation.v1.filter_category': 'FILTER_CATEGORY_GUILD', 'discord_protos.discord_experimentation.v1.filter_evaluation_mode': 'FILTER_EVALUATION_MODE_LAZY'};
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
            _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
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
                if(!(var6 !== var5)) { _fun0123_ip = 255; continue _fun0123 }
case 256:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
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
            _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0124_ip = 13; continue _fun0124 }
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
                if(!var2) { _fun0124_ip = 286; continue _fun0124 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0124_ip = 287; continue _fun0124 }
case 54:
                if(!(var7 !== var26)) { _fun0124_ip = 168; continue _fun0124 }
case 169:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0124_ip = 39; continue _fun0124 }
case 170:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0124_ip = 288; continue _fun0124 }
case 60:
                var22 = var20;
                if(!(var10 === var20)) { _fun0124_ip = 171; continue _fun0124 }
case 172:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 171:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0124_ip = 288; continue _fun0124;
case 39:
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
case 168:
                var22 = _closure1_slot38;
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
                _fun0124_ip = 288; continue _fun0124;
case 287:
                var22 = _closure1_slot38;
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
case 288:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0124_ip = 52; continue _fun0124 }
case 286:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.minId;
                if(!var3) { _fun0125_ip = 274; continue _fun0125 }
case 14:
                var7 = _closure1_slot38;
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
case 274:
                var3 = var5.maxId;
                if(!var3) { _fun0125_ip = 194; continue _fun0125 }
case 164:
                var7 = _closure1_slot38;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0125_ip = 289; continue _fun0125 }
case 204:
                var2 = 1;
                if(!(var2 == var4)) { _fun0125_ip = 28; continue _fun0125 }
case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 28:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 289:
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
    var57 = var5;
    var4 = new var57[var4](var56);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot49 = var5;
    var4 = var52[var2];
    var4 = var51.bind(var1)(var4);
    var53 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildHasFeature$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'features', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.GuildHasFeature'];
            var1[1] = var6;
            var6 = {'discord_protos.discord_experimentation.v1.filter_category': 'FILTER_CATEGORY_GUILD', 'discord_protos.discord_experimentation.v1.filter_evaluation_mode': 'FILTER_EVALUATION_MODE_STICKY'};
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
            _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
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
                if(!(var6 !== var5)) { _fun0126_ip = 177; continue _fun0126 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
            _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0127_ip = 13; continue _fun0127 }
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
                if(!var2) { _fun0127_ip = 196; continue _fun0127 }
case 52:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0127_ip = 53; continue _fun0127 }
case 54:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0127_ip = 55; continue _fun0127 }
case 56:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0127_ip = 197; continue _fun0127 }
case 58:
                var22 = var20;
                if(!(var10 === var20)) { _fun0127_ip = 59; continue _fun0127 }
case 60:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 59:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0127_ip = 197; continue _fun0127;
case 55:
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
case 53:
                var21 = var1.features;
                var20 = var21.push;
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 197:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0127_ip = 52; continue _fun0127 }
case 196:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
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
                if(!var3) { _fun0128_ip = 198; continue _fun0128 }
case 199:
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
                if(var8 < var3) { _fun0128_ip = 199; continue _fun0128 }
case 198:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0128_ip = 200; continue _fun0128 }
case 183:
                if(!(var6 == var3)) { _fun0128_ip = 201; continue _fun0128 }
case 11:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 201:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 200:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var53);
    var53 = var4.prototype;
    var53 = Object.create(var53, {constructor: {value: var4}});
    var57 = var53;
    var4 = new var57[var4](var56);
    var4 = var4 instanceof Object ? var4 : var53;
    var _closure1_slot50 = var4;
    var2 = var52[var2];
    var2 = var51.bind(var1)(var2);
    var53 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function InstallationIds$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot52;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'installation_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.InstallationIds'];
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
            _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['installationIds'] = var2;
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
                if(!(var6 !== var5)) { _fun0129_ip = 177; continue _fun0129 }
case 178:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
            _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0130_ip = 13; continue _fun0130 }
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
                if(!var2) { _fun0130_ip = 179; continue _fun0130 }
case 180:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0130_ip = 181; continue _fun0130 }
case 164:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0130_ip = 182; continue _fun0130 }
case 183:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0130_ip = 184; continue _fun0130 }
case 185:
                var25 = var23;
                if(!(var11 === var23)) { _fun0130_ip = 186; continue _fun0130 }
case 62:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 186:
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
                _fun0130_ip = 184; continue _fun0130;
case 182:
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
case 181:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0130_ip = 187; continue _fun0130 }
case 188:
                var23 = var1.installationIds;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0130_ip = 184; continue _fun0130;
case 187:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0130_ip = 184; continue _fun0130 }
case 189:
                var24 = var1.installationIds;
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
                if(var2 < var22) { _fun0130_ip = 189; continue _fun0130 }
case 184:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0130_ip = 180; continue _fun0130 }
case 179:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.installationIds;
                var2 = var2.length;
                if(!var2) { _fun0131_ip = 58; continue _fun0131 }
case 190:
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
                var2 = var5.installationIds;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0131_ip = 191; continue _fun0131 }
case 12:
                var4 = var1.fixed64;
                var2 = var5.installationIds;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.installationIds;
                var2 = var2.length;
                if(var3 < var2) { _fun0131_ip = 12; continue _fun0131 }
case 191:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 58:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0131_ip = 192; continue _fun0131 }
case 193:
                var2 = 1;
                if(!(var2 == var4)) { _fun0131_ip = 194; continue _fun0131 }
case 195:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 194:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 192:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var53);
    var53 = var2.prototype;
    var53 = Object.create(var53, {constructor: {value: var2}});
    var57 = var53;
    var2 = new var57[var2](var56);
    var2 = var2 instanceof Object ? var2 : var53;
    var _closure1_slot51 = var2;
    var50 = 8;
    var50 = var52[var50];
    var52 = var51.bind(var1)(var50);
    var51 = var52.fileFinishedImporting;
    var50 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/rules.tsx';
    var50 = var51.bind(var52)(var50);
    var3['Rule_Type'] = var49;
    var3['Rule_Subtype'] = var48;
    var3['FilterCategory'] = var47;
    var3['FilterEvaluationMode'] = var46;
    var3['Rule'] = var45;
    var3['Override'] = var44;
    var3['Filter'] = var43;
    var3['StaffUsers'] = var42;
    var3['UserInGuild'] = var41;
    var3['UserIds'] = var40;
    var3['UserLocale'] = var39;
    var3['ClientLocale'] = var38;
    var3['ClientSystemLocale'] = var37;
    var3['ClientLocation'] = var36;
    var3['ClientLocation_Place'] = var35;
    var3['ClientLocation_ISORegion'] = var34;
    var3['ClientLocation_Location'] = var33;
    var3['UserLocation'] = var32;
    var3['ClientIP'] = var31;
    var3['UserIP'] = var30;
    var3['ClientOperatingSystem'] = var29;
    var3['SDKVersion'] = var28;
    var3['SDKVersionRange'] = var27;
    var3['SDKVersionRangeBound'] = var26;
    var3['SDKVersionSpecifier'] = var25;
    var3['ClientPlatform'] = var24;
    var3['PlatformVersion'] = var23;
    var3['PlatformVersionRange'] = var22;
    var3['PlatformVersionRangeBound'] = var21;
    var3['PlatformVersionSpecifier'] = var20;
    var3['ClientRequiredChanges'] = var19;
    var3['UserIsBot'] = var18;
    var3['UserAgeRange'] = var17;
    var3['Fixed64Value'] = var16;
    var3['UserIDRange'] = var15;
    var3['UserHasFlag'] = var14;
    var3['UnitIdInRangeByHash'] = var13;
    var3['ClientReleaseChannel'] = var12;
    var3['Always'] = var11;
    var3['UnitIdInExperiment'] = var10;
    var3['UserPremiumType'] = var9;
    var3['UnitIdMatchesFilterSnapshot'] = var8;
    var3['GuildIds'] = var7;
    var3['GuildMemberCountRange'] = var6;
    var3['GuildIdRange'] = var5;
    var3['GuildHasFeature'] = var4;
    var3['InstallationIds'] = var2;
    return var1;
})();