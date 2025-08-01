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
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot11;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
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
                if(!(var6 !== var5)) { _fun0003_ip = 130; continue _fun0003 }
 100:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
 130:
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
 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 27; continue _fun0004 }
 18:
                var2 = var17.create;
                var1 = var2.bind(var17)();
 27:
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
                if(!var2) { _fun0004_ip = 453; continue _fun0004 }
 90:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0004_ip = 409; continue _fun0004 }
 124:
                if(!(var7 !== var28)) { _fun0004_ip = 386; continue _fun0004 }
 131:
                if(!(var8 !== var28)) { _fun0004_ip = 363; continue _fun0004 }
 138:
                if(!(var9 !== var28)) { _fun0004_ip = 330; continue _fun0004 }
 145:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0004_ip = 250; continue _fun0004 }
 155:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0004_ip = 434; continue _fun0004 }
 179:
                var24 = var22;
                if(!(var12 === var22)) { _fun0004_ip = 215; continue _fun0004 }
 186:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
 215:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0004_ip = 434; continue _fun0004;
 250:
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
 330:
                var2 = var19.fixed64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['version'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 434; continue _fun0004;
 363:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['platformUsername'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 434; continue _fun0004;
 386:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['platformName'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 434; continue _fun0004;
 409:
                var22 = var17.binaryReadMap1;
                var2 = var1.metadata;
                var2 = var22.bind(var17)(var2, var19, var18);
                var21 = var4;
                var20 = var3;
 434:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0004_ip = 90; continue _fun0004 }
 453:
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
 0:
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
                if(!var3) { _fun0005_ip = 175; continue _fun0005 }
 57:
                var3 = var12.tag;
                var13 = var3.bind(var12)();
                var3 = _closure1_slot2;
                var13 = var3.bind(var1)(var13, var10);
                var3 = var13[var7];
                var13 = var13[var9];
                if(!(var9 !== var3)) { _fun0005_ip = 144; continue _fun0005 }
 88:
                if(!(var10 !== var3)) { _fun0005_ip = 133; continue _fun0005 }
 92:
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
 133:
                var3 = var12.string;
                var13 = var3.bind(var12)();
                _fun0005_ip = 156; continue _fun0005;
 144:
                var3 = var12.string;
                var5 = var3.bind(var12)();
                var13 = var4;
 156:
                var3 = var12.pos;
                var4 = var13;
                var6 = var5;
                var2 = var4;
                if(var3 < var11) { _fun0005_ip = 57; continue _fun0005 }
 175:
                var5 = null;
                var7 = var5 != var6;
                var4 = '';
                var3 = var4;
                if(!var7) { _fun0005_ip = 194; continue _fun0005 }
 191:
                var3 = var6;
 194:
                var5 = var5 != var2;
                if(!var5) { _fun0005_ip = 204; continue _fun0005 }
 201:
                var4 = var2;
 204:
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
 0:
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
                if(!var3) { _fun0006_ip = 233; continue _fun0006 }
 61:
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
                if(var8 < var3) { _fun0006_ip = 61; continue _fun0006 }
 233:
                var3 = var5.platformName;
                var8 = '';
                if(!(var8 !== var3)) { _fun0006_ip = 303; continue _fun0006 }
 247:
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
 303:
                var3 = var5.platformUsername;
                if(!(var8 !== var3)) { _fun0006_ip = 372; continue _fun0006 }
 313:
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
 372:
                var8 = var5.version;
                var3 = '0';
                if(!(var3 !== var8)) { _fun0006_ip = 448; continue _fun0006 }
 388:
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
 448:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0006_ip = 512; continue _fun0006 }
 463:
                if(!(var6 == var3)) { _fun0006_ip = 496; continue _fun0006 }
 467:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
 496:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
 512:
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
 0:
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
                if(!(var6 !== var5)) { _fun0007_ip = 117; continue _fun0007 }
 87:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
 117:
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
 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0008_ip = 27; continue _fun0008 }
 18:
                var2 = var16.create;
                var1 = var2.bind(var16)();
 27:
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
                if(!var2) { _fun0008_ip = 426; continue _fun0008 }
 87:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0008_ip = 385; continue _fun0008 }
 121:
                if(!(var7 !== var27)) { _fun0008_ip = 313; continue _fun0008 }
 128:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0008_ip = 233; continue _fun0008 }
 138:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0008_ip = 407; continue _fun0008 }
 162:
                var23 = var21;
                if(!(var10 === var21)) { _fun0008_ip = 198; continue _fun0008 }
 169:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
 198:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0008_ip = 407; continue _fun0008;
 233:
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
 313:
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
                _fun0008_ip = 407; continue _fun0008;
 385:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['disclosureType'] = var2;
                var20 = var4;
                var19 = var3;
 407:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0008_ip = 87; continue _fun0008 }
 426:
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
 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.disclosureType;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0009_ip = 89; continue _fun0009 }
 21:
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
 89:
                var3 = var5.ackedAt;
                if(!var3) { _fun0009_ip = 205; continue _fun0009 }
 98:
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
 205:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0009_ip = 279; continue _fun0009 }
 217:
                var2 = 1;
                if(!(var2 == var4)) { _fun0009_ip = 261; continue _fun0009 }
 224:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
 261:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
 279:
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
 0:
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
                if(!(var6 !== var5)) { _fun0010_ip = 119; continue _fun0010 }
 89:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
 119:
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
 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0011_ip = 27; continue _fun0011 }
 18:
                var2 = var15.create;
                var1 = var2.bind(var15)();
 27:
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
                if(!var2) { _fun0011_ip = 371; continue _fun0011 }
 84:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0011_ip = 303; continue _fun0011 }
 118:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0011_ip = 223; continue _fun0011 }
 128:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0011_ip = 352; continue _fun0011 }
 152:
                var22 = var20;
                if(!(var10 === var20)) { _fun0011_ip = 188; continue _fun0011 }
 159:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
 188:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0011_ip = 352; continue _fun0011;
 223:
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
 303:
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
 352:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0011_ip = 84; continue _fun0011 }
 371:
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
 0:
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
                if(!var8) { _fun0012_ip = 144; continue _fun0012 }
 40:
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
                if(var9 < var8) { _fun0012_ip = 40; continue _fun0012 }
 144:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0012_ip = 205; continue _fun0012 }
 156:
                if(!(var6 == var3)) { _fun0012_ip = 189; continue _fun0012 }
 160:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
 189:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
 205:
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