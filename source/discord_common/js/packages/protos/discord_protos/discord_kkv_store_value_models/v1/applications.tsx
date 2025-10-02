// discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
            var1 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var11 = 0;
    var4 = var9[var11];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var10 = 1;
    var4 = var9[var10];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var7 = 2;
    var4 = var9[var7];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var5 = 3;
    var4 = var9[var5];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var6 = {};
    var6['UNSPECIFIED_DISCLOSURE'] = var11;
    var4 = 'UNSPECIFIED_DISCLOSURE';
    var6[var11] = var4;
    var6['IP_LOCATION'] = var10;
    var4 = 'IP_LOCATION';
    var6[var10] = var4;
    var6['DISPLAYS_ADVERTISEMENTS'] = var7;
    var4 = 'DISPLAYS_ADVERTISEMENTS';
    var6[var7] = var4;
    var6['PARTNER_SDK_DATA_SHARING_MESSAGE'] = var5;
    var4 = 'PARTNER_SDK_DATA_SHARING_MESSAGE';
    var6[var5] = var4;
    var _closure1_slot8 = var6;
    var7 = 6;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationUserRoleConnection$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot10;
            var1 = {'no': 1, 'name': 'metadata', 'kind': 'map', 'K': 9};
            var6 = {'kind': 'scalar', 'T': 9};
            var1['V'] = var6;
            var6 = new Array(4);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'platform_name', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'platform_username', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'version', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = ['discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection'];
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
                var1 = {'metadata': null, 'platformName': '', 'platformUsername': '', 'version': '0'};
                var2 = {};
                var1['metadata'] = var2;
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
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 13; continue _fun0004 }
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
                var13 = 6;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(!(var7 !== var28)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                if(!(var8 !== var28)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                if(!(var9 !== var28)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var24 = var22;
                if(!(var12 === var22)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 29:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0004_ip = 27; continue _fun0004;
case 25:
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
case 23:
                var2 = var19.fixed64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['version'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 27; continue _fun0004;
case 21:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['platformUsername'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 27; continue _fun0004;
case 19:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['platformName'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 27; continue _fun0004;
case 17:
                var22 = var17.binaryReadMap1;
                var2 = var1.metadata;
                var2 = var22.bind(var17)(var2, var19, var18);
                var21 = var4;
                var20 = var3;
case 27:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var12 = arg2;
                var1 = var12.uint32;
                var2 = var1.bind(var12)();
                var1 = var12.pos;
                var11 = var1 + var2;
                var1 = var12.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var7 = 0;
                var5 = undefined;
                var4 = undefined;
                var6 = undefined;
                var2 = undefined;
                if(!var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var3 = var12.tag;
                var13 = var3.bind(var12)();
                var3 = _closure1_slot2;
                var13 = var3.bind(var1)(var13, var10);
                var3 = var13[var7];
                var13 = var13[var9];
                if(!(var9 !== var3)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                if(!(var10 !== var3)) { _fun0005_ip = 35; continue _fun0005 }
case 4:
                var3 = global;
                var3 = var3.globalThis;
                var14 = var3.Error;
                var3 = var14.prototype;
                var13 = Object.create(var3, {constructor: {value: var14}});
                var16 = 'unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata';
                var17 = var13;
                var3 = new var17[var14](var16, var15);
                var3 = var3 instanceof Object ? var3 : var13;
                throw var3;
case 35:
                var3 = var12.string;
                var13 = var3.bind(var12)();
                _fun0005_ip = 36; continue _fun0005;
case 33:
                var3 = var12.string;
                var5 = var3.bind(var12)();
                var13 = var4;
case 36:
                var3 = var12.pos;
                var4 = var13;
                var6 = var5;
                var2 = var4;
                if(var3 < var11) { _fun0005_ip = 32; continue _fun0005 }
case 31:
                var5 = null;
                var7 = var5 != var6;
                var4 = '';
                var3 = var4;
                if(!var7) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var3 = var6;
case 37:
                var5 = var5 != var2;
                if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var4 = var2;
case 39:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = var5.metadata;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                var10 = 2;
                if(!var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var13 = var9[var8];
                var12 = var1.tag;
                var14 = _closure1_slot0;
                var3 = _closure1_slot1;
                var11 = var3[var7];
                var11 = var14.bind(var4)(var11);
                var11 = var11.WireType;
                var11 = var11.LengthDelimited;
                var12 = var12.bind(var1)(var6, var11);
                var11 = var12.fork;
                var15 = var11.bind(var12)();
                var12 = var15.tag;
                var11 = var3[var7];
                var11 = var14.bind(var4)(var11);
                var11 = var11.WireType;
                var11 = var11.LengthDelimited;
                var12 = var12.bind(var15)(var6, var11);
                var11 = var12.string;
                var12 = var11.bind(var12)(var13);
                var11 = var12.tag;
                var3 = var3[var7];
                var3 = var14.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var12 = var11.bind(var12)(var10, var3);
                var11 = var12.string;
                var3 = var5.metadata;
                var3 = var3[var13];
                var11 = var11.bind(var12)(var3);
                var3 = var11.join;
                var3 = var3.bind(var11)();
                var8 = var8 + 1;
                var3 = var9.length;
                if(var8 < var3) { _fun0006_ip = 42; continue _fun0006 }
case 41:
                var3 = var5.platformName;
                var8 = '';
                if(!(var8 !== var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var11.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var10 = var9.bind(var1)(var10, var3);
                var9 = var10.string;
                var3 = var5.platformName;
                var3 = var9.bind(var10)(var3);
case 43:
                var3 = var5.platformUsername;
                if(!(var8 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var8.bind(var4)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var9 = var9.bind(var1)(var3, var8);
                var8 = var9.string;
                var3 = var5.platformUsername;
                var3 = var8.bind(var9)(var3);
case 45:
                var8 = var5.version;
                var3 = '0';
                if(!(var3 !== var8)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var8.bind(var4)(var3);
                var3 = var3.WireType;
                var8 = var3.Bit64;
                var3 = 4;
                var9 = var9.bind(var1)(var3, var8);
                var8 = var9.fixed64;
                var3 = var5.version;
                var3 = var8.bind(var9)(var3);
case 47:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                if(!(var6 == var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 51:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 49:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var15 = var5;
    var4 = new var15[var4](var14);
    var5 = var4 instanceof Object ? var4 : var5;
    var4 = var9[var7];
    var4 = var8.bind(var1)(var4);
    var10 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AcknowledgedApplicationDisclosure$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot10;
            var1 = {'no': 1, 'name': 'disclosure_type', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'acked_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure'];
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['disclosureType'] = var2;
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
                if(!(var6 !== var5)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 53:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0008_ip = 13; continue _fun0008 }
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
                if(!var2) { _fun0008_ip = 55; continue _fun0008 }
case 54:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                if(!(var7 !== var27)) { _fun0008_ip = 46; continue _fun0008 }
case 58:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0008_ip = 41; continue _fun0008 }
case 22:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var23 = var21;
                if(!(var10 === var21)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 61:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0008_ip = 59; continue _fun0008;
case 41:
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
case 46:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.ackedAt;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['ackedAt'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0008_ip = 59; continue _fun0008;
case 56:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['disclosureType'] = var2;
                var20 = var4;
                var19 = var3;
case 59:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.disclosureType;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
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
                var4 = var6.int32;
                var3 = var5.disclosureType;
                var3 = var4.bind(var6)(var3);
case 63:
                var3 = var5.ackedAt;
                if(!var3) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.ackedAt;
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
case 65:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                var2 = 1;
                if(!(var2 == var4)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 69:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 67:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var10);
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var15 = var10;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot9 = var4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.MessageType;
    var2 = function(arg1) {
        var4 = function AcknowledgedApplicationDisclosures$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot10;
            var1 = {'no': 1, 'name': 'acked_disclosures', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot9;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures'];
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['ackedDisclosures'] = var2;
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
                if(!(var6 !== var5)) { _fun0010_ip = 71; continue _fun0010 }
case 63:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 71:
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0011_ip = 13; continue _fun0011 }
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
                if(!var2) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0011_ip = 43; continue _fun0011 }
case 74:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0011_ip = 75; continue _fun0011 }
case 58:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                var22 = var20;
                if(!(var10 === var20)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 78:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0011_ip = 76; continue _fun0011;
case 75:
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
case 43:
                var21 = var1.ackedDisclosures;
                var20 = var21.push;
                var23 = _closure1_slot9;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 76:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0011_ip = 73; continue _fun0011 }
case 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.ackedDisclosures;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0012_ip = 33; continue _fun0012 }
case 80:
                var12 = _closure1_slot9;
                var11 = var12.internalBinaryWrite;
                var8 = var5.ackedDisclosures;
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
                var8 = var5.ackedDisclosures;
                var8 = var8.length;
                if(var9 < var8) { _fun0012_ip = 80; continue _fun0012 }
case 33:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0012_ip = 65; continue _fun0012 }
case 36:
                if(!(var6 == var3)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 81:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 65:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var15 = var7;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/applications.tsx';
    var7 = var8.bind(var9)(var7);
    var3['ApplicationDisclosureType'] = var6;
    var3['ApplicationUserRoleConnection'] = var5;
    var3['AcknowledgedApplicationDisclosure'] = var4;
    var3['AcknowledgedApplicationDisclosures'] = var2;
    return var1;
})();