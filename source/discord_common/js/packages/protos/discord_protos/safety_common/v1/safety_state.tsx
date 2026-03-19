// discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
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
            var1 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var17 = 0;
    var4 = var13[var17];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var16 = 1;
    var4 = var13[var16];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 2;
    var4 = var13[var15];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var8 = 3;
    var4 = var13[var8];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var7 = 4;
    var4 = var13[var7];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var6 = 5;
    var4 = var13[var6];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var10 = {};
    var10['REASON_UNSPECIFIED'] = var17;
    var4 = 'REASON_UNSPECIFIED';
    var10[var17] = var4;
    var10['DISABLED_SUSPICIOUS_ACTIVITY'] = var16;
    var4 = 'DISABLED_SUSPICIOUS_ACTIVITY';
    var10[var16] = var4;
    var10['SMITE_REMOVE_EMAIL_VERIFICATION'] = var15;
    var4 = 'SMITE_REMOVE_EMAIL_VERIFICATION';
    var10[var15] = var4;
    var10['USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT'] = var8;
    var4 = 'USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT';
    var10[var8] = var4;
    var10['ACTIVE_ASSIGNMENT_COMPLETED'] = var7;
    var4 = 'ACTIVE_ASSIGNMENT_COMPLETED';
    var10[var7] = var4;
    var10['ACTIVE_ASSIGNMENT_CREATED'] = var6;
    var4 = 'ACTIVE_ASSIGNMENT_CREATED';
    var10[var6] = var4;
    var14 = 6;
    var10['DEFERRED_ASSIGNMENT_CREATED'] = var14;
    var4 = 'DEFERRED_ASSIGNMENT_CREATED';
    var10[var14] = var4;
    var5 = 7;
    var10['DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE'] = var5;
    var4 = 'DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE';
    var10[var5] = var4;
    var9 = 8;
    var10['DEFERRED_ASSIGNMENT_CANCELLED'] = var9;
    var4 = 'DEFERRED_ASSIGNMENT_CANCELLED';
    var10[var9] = var4;
    var9 = 9;
    var10['ASSIGNMENT_STATE_REPAIRED'] = var9;
    var4 = 'ASSIGNMENT_STATE_REPAIRED';
    var10[var9] = var4;
    var11 = 10;
    var10['MANUAL_PERMANENT_BAN'] = var11;
    var4 = 'MANUAL_PERMANENT_BAN';
    var10[var11] = var4;
    var9 = 11;
    var10['SAFETY_SYSTEM_UNBAN'] = var9;
    var4 = 'SAFETY_SYSTEM_UNBAN';
    var10[var9] = var4;
    var9 = 12;
    var10['GENERIC_AUTOMATED_SAFETY_ACTION'] = var9;
    var4 = 'GENERIC_AUTOMATED_SAFETY_ACTION';
    var10[var9] = var4;
    var9 = 13;
    var10['GENERIC_MANUAL_SAFETY_ACTION'] = var9;
    var4 = 'GENERIC_MANUAL_SAFETY_ACTION';
    var10[var9] = var4;
    var9 = 14;
    var10['BANNED_USER_BACKFILL'] = var9;
    var4 = 'BANNED_USER_BACKFILL';
    var10[var9] = var4;
    var _closure1_slot8 = var10;
    var9 = {};
    var9['ANNOTATION_UNSPECIFIED'] = var17;
    var4 = 'ANNOTATION_UNSPECIFIED';
    var9[var17] = var4;
    var9['SPAMMER'] = var16;
    var4 = 'SPAMMER';
    var9[var16] = var4;
    var9['SELF_DELETED'] = var15;
    var4 = 'SELF_DELETED';
    var9[var15] = var4;
    var9['SELF_DISABLED'] = var8;
    var4 = 'SELF_DISABLED';
    var9[var8] = var4;
    var9['UNDERAGE_DELETED'] = var7;
    var4 = 'UNDERAGE_DELETED';
    var9[var7] = var4;
    var9['SAFETY_POLICY_VIOLATION'] = var6;
    var4 = 'SAFETY_POLICY_VIOLATION';
    var9[var6] = var4;
    var9['INACTIVITY_DELETED'] = var14;
    var4 = 'INACTIVITY_DELETED';
    var9[var14] = var4;
    var9['GENERIC_DELETED'] = var5;
    var4 = 'GENERIC_DELETED';
    var9[var5] = var4;
    var _closure1_slot9 = var9;
    var4 = var13[var14];
    var4 = var12.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function NormalState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = ['discord_protos.safety_common.v1.NormalState'];
            var6 = new Array(0);
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
                var1 = arg4;
                var3 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var3.create;
                var1 = var2.bind(var3)();
case 13:
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
                var1 = arg2;
                var2 = arg3;
                var5 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var2 = 1;
                if(!(var2 == var5)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var5 = var2.onWrite;
case 17:
                var2 = this;
                var4 = var2.typeName;
                var3 = undefined;
                var2 = arg1;
                var2 = var5.bind(var3)(var4, var2, var1);
case 15:
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
    var21 = var5;
    var4 = new var21[var4](var20);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var8;
    var4 = var13[var14];
    var4 = var12.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RestrictedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = {'no': 1, 'name': 'restricted_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.safety_common.v1.RestrictedState'];
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
                if(!(var6 !== var5)) { _fun0006_ip = 11; continue _fun0006 }
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 19; continue _fun0007 }
case 16:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 19:
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
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var23 = var21;
                if(!(var10 === var21)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 28:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0007_ip = 26; continue _fun0007;
case 24:
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
case 22:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.restrictedUntil;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['restrictedUntil'] = var2;
                var20 = var4;
                var19 = var3;
case 26:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0007_ip = 21; continue _fun0007 }
case 20:
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
                var2 = arg3;
                var3 = var5.restrictedUntil;
                if(!var3) { _fun0008_ip = 30; continue _fun0008 }
case 16:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.restrictedUntil;
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
case 30:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 33:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 31:
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
    var21 = var5;
    var4 = new var21[var4](var20);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var7;
    var4 = var13[var14];
    var4 = var12.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DeferredActionState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = {'no': 1, 'name': 'action_deferred_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.safety_common.v1.DeferredActionState'];
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
                if(!(var6 !== var5)) { _fun0009_ip = 11; continue _fun0009 }
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 19; continue _fun0010 }
case 16:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 19:
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
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0010_ip = 20; continue _fun0010 }
case 21:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0010_ip = 22; continue _fun0010 }
case 23:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0010_ip = 24; continue _fun0010 }
case 25:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0010_ip = 26; continue _fun0010 }
case 27:
                var23 = var21;
                if(!(var10 === var21)) { _fun0010_ip = 28; continue _fun0010 }
case 29:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 28:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0010_ip = 26; continue _fun0010;
case 24:
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
case 22:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.actionDeferredUntil;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['actionDeferredUntil'] = var2;
                var20 = var4;
                var19 = var3;
case 26:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0010_ip = 21; continue _fun0010 }
case 20:
                return var1;
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
                var3 = var5.actionDeferredUntil;
                if(!var3) { _fun0011_ip = 30; continue _fun0011 }
case 16:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.actionDeferredUntil;
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
case 30:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 31; continue _fun0011 }
case 32:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 33; continue _fun0011 }
case 34:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 33:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 31:
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
    var21 = var5;
    var4 = new var21[var4](var20);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot12 = var6;
    var4 = var13[var14];
    var4 = var12.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function TempBannedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = {'no': 1, 'name': 'banned_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'classification_types', 'kind': 'enum', 'repeat': 1};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ClassificationType;
                var1 = ['discord_protos.safety_common.v1.ClassificationType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.safety_common.v1.TempBannedState'];
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['classificationTypes'] = var2;
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
                if(!(var6 !== var5)) { _fun0012_ip = 23; continue _fun0012 }
case 35:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 23:
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
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 19; continue _fun0013 }
case 16:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 19:
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
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0013_ip = 36; continue _fun0013 }
case 37:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var8);
                var29 = var2[var6];
                var23 = var2[var7];
                if(!(var7 !== var29)) { _fun0013_ip = 38; continue _fun0013 }
case 39:
                if(!(var8 !== var29)) { _fun0013_ip = 40; continue _fun0013 }
case 41:
                var24 = var18.readUnknownField;
                if(!(var9 !== var24)) { _fun0013_ip = 42; continue _fun0013 }
case 43:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var23);
                var22 = var5;
                var21 = var24;
                var20 = var2;
                if(!(var10 !== var24)) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                var26 = var24;
                if(!(var11 === var24)) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var12];
                var25 = var27.bind(var15)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 46:
                var34 = var17.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var23;
                var30 = var2;
                var25 = var35[var26](var34, var33, var32, var31, var30, var29);
                var22 = var5;
                var21 = var24;
                var20 = var2;
                _fun0013_ip = 44; continue _fun0013;
case 42:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var30 = var17.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var23;
                var34 = var35[var27](var34, var33, var32, var31, var30, var29);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var35 = var24;
                var2 = new var35[var25](var34, var33);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 40:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var24.bind(var15)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var23 !== var2)) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                var24 = var1.classificationTypes;
                var23 = var24.push;
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var2 = var23.bind(var24)(var2);
                var22 = var5;
                var21 = var4;
                var20 = var3;
                _fun0013_ip = 44; continue _fun0013;
case 48:
                var2 = var19.int32;
                var23 = var2.bind(var19)();
                var2 = var19.pos;
                var23 = var23 + var2;
                var2 = var19.pos;
                var21 = var4;
                var20 = var3;
                var22 = var23;
                if(!(var2 < var22)) { _fun0013_ip = 44; continue _fun0013 }
case 50:
                var25 = var1.classificationTypes;
                var24 = var25.push;
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var2 = var24.bind(var25)(var2);
                var2 = var19.pos;
                var22 = var23;
                var21 = var4;
                var20 = var3;
                if(var2 < var23) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                _fun0013_ip = 44; continue _fun0013;
case 38:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var23.bind(var15)(var2);
                var25 = var2.Timestamp;
                var24 = var25.internalBinaryRead;
                var2 = var19.uint32;
                var33 = var2.bind(var19)();
                var31 = var1.bannedUntil;
                var35 = var25;
                var34 = var19;
                var32 = var18;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['bannedUntil'] = var2;
                var22 = var5;
                var21 = var4;
                var20 = var3;
case 44:
                var2 = var19.pos;
                var5 = var22;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0013_ip = 37; continue _fun0013 }
case 36:
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
                var2 = arg3;
                var3 = var5.bannedUntil;
                if(!var3) { _fun0014_ip = 30; continue _fun0014 }
case 16:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.bannedUntil;
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
case 30:
                var3 = var5.classificationTypes;
                var3 = var3.length;
                if(!var3) { _fun0014_ip = 52; continue _fun0014 }
case 53:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 2;
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.classificationTypes;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0014_ip = 54; continue _fun0014 }
case 55:
                var6 = var1.int32;
                var3 = var5.classificationTypes;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.classificationTypes;
                var3 = var3.length;
                if(var4 < var3) { _fun0014_ip = 55; continue _fun0014 }
case 54:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 52:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 58:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 56:
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
    var21 = var5;
    var4 = new var21[var4](var20);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot13 = var5;
    var4 = var13[var14];
    var4 = var12.bind(var1)(var4);
    var15 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function BannedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = {'no': 1, 'name': 'classification_types', 'kind': 'enum', 'repeat': 1};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ClassificationType;
                var1 = ['discord_protos.safety_common.v1.ClassificationType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.safety_common.v1.BannedState'];
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['classificationTypes'] = var2;
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
                if(!(var6 !== var5)) { _fun0015_ip = 23; continue _fun0015 }
case 35:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 23:
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
                if(!(var2 == var1)) { _fun0016_ip = 19; continue _fun0016 }
case 16:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 19:
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
                if(!var2) { _fun0016_ip = 60; continue _fun0016 }
case 61:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0016_ip = 62; continue _fun0016 }
case 63:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0016_ip = 64; continue _fun0016 }
case 41:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                var25 = var23;
                if(!(var11 === var23)) { _fun0016_ip = 67; continue _fun0016 }
case 68:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 67:
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
                _fun0016_ip = 65; continue _fun0016;
case 64:
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
case 62:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0016_ip = 69; continue _fun0016 }
case 70:
                var23 = var1.classificationTypes;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0016_ip = 65; continue _fun0016;
case 69:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0016_ip = 65; continue _fun0016 }
case 71:
                var24 = var1.classificationTypes;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0016_ip = 71; continue _fun0016 }
case 65:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0016_ip = 61; continue _fun0016 }
case 60:
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
                var2 = var5.classificationTypes;
                var2 = var2.length;
                if(!var2) { _fun0017_ip = 72; continue _fun0017 }
case 73:
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
                var2 = var5.classificationTypes;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0017_ip = 74; continue _fun0017 }
case 75:
                var4 = var1.int32;
                var2 = var5.classificationTypes;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.classificationTypes;
                var2 = var2.length;
                if(var3 < var2) { _fun0017_ip = 75; continue _fun0017 }
case 74:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 72:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 76; continue _fun0017 }
case 77:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 78; continue _fun0017 }
case 79:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 76:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var15);
    var15 = var4.prototype;
    var15 = Object.create(var15, {constructor: {value: var4}});
    var21 = var15;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var15;
    var _closure1_slot14 = var4;
    var14 = var13[var14];
    var14 = var12.bind(var1)(var14);
    var14 = var14.MessageType;
    var2 = function(arg1) {
        var4 = function SafetyState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot15;
            var1 = {'no': 101, 'name': 'normal', 'kind': 'message', 'oneof': 'state'};
            var6 = function T() {
                var1 = _closure1_slot10;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(8);
            var6[0] = var1;
            var1 = {'no': 102, 'name': 'restricted', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot11;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 103, 'name': 'deferred_action', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot12;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 104, 'name': 'temp_banned', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot13;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 105, 'name': 'banned', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot14;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 1, 'name': 'reason', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.safety_common.v1.SafetyStateReason'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 2, 'name': 'annotations', 'kind': 'enum', 'repeat': 1};
            var8 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.safety_common.v1.SafetyAnnotations'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 3, 'name': 'last_mutation_id', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[7] = var1;
            var1 = ['discord_protos.safety_common.v1.SafetyState'];
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['state'] = var2;
                var2 = 0;
                var1['reason'] = var2;
                var2 = new Array(0);
                var1['annotations'] = var2;
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
                if(!(var6 !== var5)) { _fun0018_ip = 80; continue _fun0018 }
case 81:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 80:
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
                var30 = arg1;
                var29 = arg3;
                var1 = arg4;
                var28 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0019_ip = 19; continue _fun0019 }
case 16:
                var2 = var28.create;
                var1 = var2.bind(var28)();
case 19:
                var3 = var30.pos;
                var2 = arg2;
                var27 = var3 + var2;
                var2 = var30.pos;
                var2 = var2 < var27;
                var26 = undefined;
                var25 = 'normal';
                var23 = 'restricted';
                var22 = 'deferredAction';
                var21 = 'tempBanned';
                var20 = 'banned';
                var19 = 6;
                var18 = 9;
                var17 = true;
                var16 = false;
                var15 = 'throw';
                var14 = 3;
                var13 = 2;
                var12 = 1;
                var11 = 105;
                var10 = 104;
                var9 = 103;
                var8 = 102;
                var7 = 101;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0019_ip = 82; continue _fun0019 }
case 83:
                var2 = var30.tag;
                var31 = var2.bind(var30)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var26)(var31, var13);
                var40 = var2[var6];
                var34 = var2[var12];
                if(!(var7 !== var40)) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                if(!(var8 !== var40)) { _fun0019_ip = 86; continue _fun0019 }
case 77:
                if(!(var9 !== var40)) { _fun0019_ip = 87; continue _fun0019 }
case 79:
                if(!(var10 !== var40)) { _fun0019_ip = 88; continue _fun0019 }
case 33:
                if(!(var11 !== var40)) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                if(!(var12 !== var40)) { _fun0019_ip = 91; continue _fun0019 }
case 92:
                if(!(var13 !== var40)) { _fun0019_ip = 93; continue _fun0019 }
case 46:
                if(!(var14 !== var40)) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                var35 = var29.readUnknownField;
                if(!(var15 !== var35)) { _fun0019_ip = 40; continue _fun0019 }
case 96:
                var2 = var30.skip;
                var2 = var2.bind(var30)(var34);
                var33 = var5;
                var32 = var35;
                var31 = var2;
                if(!(var16 !== var35)) { _fun0019_ip = 97; continue _fun0019 }
case 98:
                var37 = var35;
                if(!(var17 === var35)) { _fun0019_ip = 57; continue _fun0019 }
case 99:
                var38 = _closure1_slot0;
                var36 = _closure1_slot1;
                var36 = var36[var19];
                var36 = var38.bind(var26)(var36);
                var36 = var36.UnknownFieldHandler;
                var37 = var36.onRead;
case 57:
                var45 = var28.typeName;
                var46 = undefined;
                var44 = var1;
                var43 = var40;
                var42 = var34;
                var41 = var2;
                var36 = var46[var37](var45, var44, var43, var42, var41, var40);
                var33 = var5;
                var32 = var35;
                var31 = var2;
                _fun0019_ip = 97; continue _fun0019;
case 40:
                var2 = global;
                var35 = var2.globalThis;
                var36 = var35.Error;
                var41 = var28.typeName;
                var2 = var2.HermesInternal;
                var38 = var2.concat;
                var46 = 'Unknown field ';
                var44 = ' (wire type ';
                var42 = ') for ';
                var45 = var40;
                var43 = var34;
                var45 = var46[var38](var45, var44, var43, var42, var41, var40);
                var35 = var36.prototype;
                var35 = Object.create(var35, {constructor: {value: var36}});
                var46 = var35;
                var2 = new var46[var36](var45, var44);
                var2 = var2 instanceof Object ? var2 : var35;
                throw var2;
case 94:
                var35 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var18];
                var2 = var35.bind(var26)(var2);
                var37 = var2.UInt64Value;
                var36 = var37.internalBinaryRead;
                var2 = var30.uint32;
                var44 = var2.bind(var30)();
                var42 = var1.lastMutationId;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var2 = var46[var36](var45, var44, var43, var42, var41);
                var1['lastMutationId'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 93:
                var35 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var19];
                var2 = var35.bind(var26)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var34 !== var2)) { _fun0019_ip = 100; continue _fun0019 }
case 101:
                var35 = var1.annotations;
                var34 = var35.push;
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var2 = var34.bind(var35)(var2);
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 100:
                var2 = var30.int32;
                var34 = var2.bind(var30)();
                var2 = var30.pos;
                var34 = var34 + var2;
                var2 = var30.pos;
                var32 = var4;
                var31 = var3;
                var33 = var34;
                if(!(var2 < var33)) { _fun0019_ip = 97; continue _fun0019 }
case 102:
                var36 = var1.annotations;
                var35 = var36.push;
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var2 = var35.bind(var36)(var2);
                var2 = var30.pos;
                var33 = var34;
                var32 = var4;
                var31 = var3;
                if(var2 < var34) { _fun0019_ip = 102; continue _fun0019 }
case 103:
                _fun0019_ip = 97; continue _fun0019;
case 91:
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var1['reason'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 89:
                var2 = {};
                var2['oneofKind'] = var20;
                var37 = _closure1_slot14;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.banned;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['banned'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 88:
                var2 = {};
                var2['oneofKind'] = var21;
                var37 = _closure1_slot13;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.tempBanned;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['tempBanned'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 87:
                var2 = {};
                var2['oneofKind'] = var22;
                var37 = _closure1_slot12;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.deferredAction;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['deferredAction'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 86:
                var2 = {};
                var2['oneofKind'] = var23;
                var37 = _closure1_slot11;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.restricted;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['restricted'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0019_ip = 97; continue _fun0019;
case 84:
                var2 = {};
                var2['oneofKind'] = var25;
                var37 = _closure1_slot10;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.normal;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['normal'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
case 97:
                var2 = var30.pos;
                var5 = var33;
                var4 = var32;
                var3 = var31;
                if(var2 < var27) { _fun0019_ip = 83; continue _fun0019 }
case 82:
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
                var2 = arg3;
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'normal';
                if(!(var3 === var4)) { _fun0020_ip = 83; continue _fun0020 }
case 104:
                var7 = _closure1_slot10;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.normal;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 101;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 83:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'restricted';
                if(!(var3 === var4)) { _fun0020_ip = 105; continue _fun0020 }
case 106:
                var7 = _closure1_slot11;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.restricted;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 102;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 105:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'deferredAction';
                if(!(var3 === var4)) { _fun0020_ip = 107; continue _fun0020 }
case 54:
                var7 = _closure1_slot12;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.deferredAction;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 103;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 107:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'tempBanned';
                if(!(var3 === var4)) { _fun0020_ip = 108; continue _fun0020 }
case 109:
                var7 = _closure1_slot13;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.tempBanned;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 104;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 108:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'banned';
                if(!(var3 === var4)) { _fun0020_ip = 102; continue _fun0020 }
case 110:
                var7 = _closure1_slot14;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.banned;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 105;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 102:
                var3 = var5.reason;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0020_ip = 89; continue _fun0020 }
case 111:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.reason;
                var3 = var6.bind(var7)(var3);
case 89:
                var3 = var5.annotations;
                var3 = var3.length;
                if(!var3) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var6 = var7.bind(var1)(var3, var6);
                var3 = var6.fork;
                var3 = var3.bind(var6)();
                var3 = var5.annotations;
                var3 = var3.length;
                var3 = var4 < var3;
                var4 = 0;
                if(!var3) { _fun0020_ip = 114; continue _fun0020 }
case 115:
                var6 = var1.int32;
                var3 = var5.annotations;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.annotations;
                var3 = var3.length;
                if(var4 < var3) { _fun0020_ip = 115; continue _fun0020 }
case 114:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 112:
                var3 = var5.lastMutationId;
                if(!var3) { _fun0020_ip = 116; continue _fun0020 }
case 117:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lastMutationId;
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
case 116:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 118; continue _fun0020 }
case 119:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 120; continue _fun0020 }
case 121:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 120:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 118:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var14);
    var14 = var2.prototype;
    var14 = Object.create(var14, {constructor: {value: var2}});
    var21 = var14;
    var2 = new var21[var2](var20);
    var2 = var2 instanceof Object ? var2 : var14;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = '../discord_common/js/packages/protos/discord_protos/safety_common/v1/safety_state.tsx';
    var11 = var12.bind(var13)(var11);
    var3['SafetyStateReason'] = var10;
    var3['SafetyAnnotations'] = var9;
    var3['NormalState'] = var8;
    var3['RestrictedState'] = var7;
    var3['DeferredActionState'] = var6;
    var3['TempBannedState'] = var5;
    var3['BannedState'] = var4;
    var3['SafetyState'] = var2;
    return var1;
})();