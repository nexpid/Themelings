// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            var1 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var5 = 9;
    var4 = var7[var5];
    var4 = var6.bind(var1)(var4);
    var8 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PremiumTabPopoverCTAButton$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot9;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'copy', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'button_action', 'kind': 'enum'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ButtonAction;
                var1 = ['discord_protos.premium_marketing.v1.ButtonAction'];
                var1[1] = var2;
                var2 = 'BUTTON_ACTION_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'deeplink_section', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'copy_localized', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LocalizedString;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'navigable_storefront_application_id', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[4] = var1;
            var1 = ['discord_protos.premium_marketing.v1.PremiumTabPopoverCTAButton'];
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
                var1 = {'copy': '', 'buttonAction': 0, 'deeplinkSection': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 9;
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
case 4:
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
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 12:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 7;
                var15 = 8;
                var14 = 9;
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
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                if(!(var7 !== var31)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                if(!(var8 !== var31)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                if(!(var9 !== var31)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                if(!(var10 !== var31)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var25 = var21.readUnknownField;
                if(!(var11 !== var25)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var12 !== var25)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var27 = var25;
                if(!(var13 === var25)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 30:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0004_ip = 28; continue _fun0004;
case 26:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 24:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var25.bind(var18)(var2);
                var27 = var2.UInt64Value;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.navigableStorefrontApplicationId;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['navigableStorefrontApplicationId'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 22:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.LocalizedString;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.copyLocalized;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['copyLocalized'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 20:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['deeplinkSection'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 18:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['buttonAction'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0004_ip = 28; continue _fun0004;
case 16:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['copy'] = var2;
                var24 = var4;
                var23 = var3;
case 28:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0004_ip = 15; continue _fun0004 }
case 14:
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
                var2 = arg3;
                var3 = var5.copy;
                var4 = '';
                if(!(var4 !== var3)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.copy;
                var3 = var6.bind(var7)(var3);
case 32:
                var6 = var5.buttonAction;
                var3 = 0;
                if(!(var3 !== var6)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.buttonAction;
                var3 = var6.bind(var7)(var3);
case 34:
                var3 = var5.deeplinkSection;
                if(!(var4 !== var3)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 3;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.deeplinkSection;
                var3 = var4.bind(var6)(var3);
case 36:
                var3 = var5.copyLocalized;
                if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.copyLocalized;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 38:
                var3 = var5.navigableStorefrontApplicationId;
                if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.navigableStorefrontApplicationId;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 40:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 44:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 42:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot8 = var4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MessageType;
    var2 = function(arg1) {
        var4 = function PremiumTabPopover$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot9;
            var6 = new Array(8);
            var1 = {'no': 1, 'name': 'header', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'body', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'asset', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ThemeAwareAsset;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'button', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot8;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'help_article_id', 'kind': 'scalar', 'T': 9};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'help_article', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.HelpArticle;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'header_localized', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LocalizedString;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'body_localized', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.LocalizedString;
                return var1;
            };
            var1['T'] = var7;
            var6[7] = var1;
            var1 = ['discord_protos.premium_marketing.v1.PremiumTabPopover'];
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
                var1 = {'header': '', 'body': '', 'helpArticleId': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 9;
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
case 4:
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
                var25 = arg1;
                var24 = arg3;
                var1 = arg4;
                var23 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var2 = var23.create;
                var1 = var2.bind(var23)();
case 12:
                var3 = var25.pos;
                var2 = arg2;
                var22 = var3 + var2;
                var2 = var25.pos;
                var2 = var2 < var22;
                var21 = undefined;
                var19 = 10;
                var18 = 11;
                var17 = 7;
                var16 = 9;
                var15 = true;
                var14 = false;
                var13 = 'throw';
                var12 = 8;
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                var2 = var25.tag;
                var26 = var2.bind(var25)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var21)(var26, var7);
                var34 = var2[var5];
                var33 = var2[var6];
                if(!(var6 !== var34)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                if(!(var7 !== var34)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                if(!(var8 !== var34)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                if(!(var9 !== var34)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                if(!(var10 !== var34)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                if(!(var11 !== var34)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                if(!(var17 !== var34)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                if(!(var12 !== var34)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var28 = var24.readUnknownField;
                if(!(var13 !== var28)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var2 = var25.skip;
                var2 = var2.bind(var25)(var33);
                var27 = var28;
                var26 = var2;
                if(!(var14 !== var28)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var30 = var28;
                if(!(var15 === var28)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                var31 = _closure1_slot0;
                var29 = _closure1_slot1;
                var29 = var29[var16];
                var29 = var31.bind(var21)(var29);
                var29 = var29.UnknownFieldHandler;
                var30 = var29.onRead;
case 68:
                var39 = var23.typeName;
                var40 = undefined;
                var38 = var1;
                var37 = var34;
                var36 = var33;
                var35 = var2;
                var29 = var40[var30](var39, var38, var37, var36, var35, var34);
                var27 = var28;
                var26 = var2;
                _fun0007_ip = 66; continue _fun0007;
case 64:
                var2 = global;
                var28 = var2.globalThis;
                var29 = var28.Error;
                var35 = var23.typeName;
                var2 = var2.HermesInternal;
                var31 = var2.concat;
                var40 = 'Unknown field ';
                var38 = ' (wire type ';
                var36 = ') for ';
                var39 = var34;
                var37 = var33;
                var39 = var40[var31](var39, var38, var37, var36, var35, var34);
                var28 = var29.prototype;
                var28 = Object.create(var28, {constructor: {value: var29}});
                var40 = var28;
                var2 = new var40[var29](var39, var38);
                var2 = var2 instanceof Object ? var2 : var28;
                throw var2;
case 62:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var28.bind(var21)(var2);
                var30 = var2.LocalizedString;
                var29 = var30.internalBinaryRead;
                var2 = var25.uint32;
                var38 = var2.bind(var25)();
                var36 = var1.bodyLocalized;
                var40 = var30;
                var39 = var25;
                var37 = var24;
                var2 = var40[var29](var39, var38, var37, var36, var35);
                var1['bodyLocalized'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 60:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var28.bind(var21)(var2);
                var30 = var2.LocalizedString;
                var29 = var30.internalBinaryRead;
                var2 = var25.uint32;
                var38 = var2.bind(var25)();
                var36 = var1.headerLocalized;
                var40 = var30;
                var39 = var25;
                var37 = var24;
                var2 = var40[var29](var39, var38, var37, var36, var35);
                var1['headerLocalized'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 58:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var18];
                var2 = var28.bind(var21)(var2);
                var30 = var2.HelpArticle;
                var29 = var30.internalBinaryRead;
                var2 = var25.uint32;
                var38 = var2.bind(var25)();
                var36 = var1.helpArticle;
                var40 = var30;
                var39 = var25;
                var37 = var24;
                var2 = var40[var29](var39, var38, var37, var36, var35);
                var1['helpArticle'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 56:
                var2 = var25.string;
                var2 = var2.bind(var25)();
                var1['helpArticleId'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 54:
                var30 = _closure1_slot8;
                var29 = var30.internalBinaryRead;
                var2 = var25.uint32;
                var38 = var2.bind(var25)();
                var36 = var1.button;
                var40 = var30;
                var39 = var25;
                var37 = var24;
                var2 = var40[var29](var39, var38, var37, var36, var35);
                var1['button'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 52:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var19];
                var2 = var28.bind(var21)(var2);
                var30 = var2.ThemeAwareAsset;
                var29 = var30.internalBinaryRead;
                var2 = var25.uint32;
                var38 = var2.bind(var25)();
                var36 = var1.asset;
                var40 = var30;
                var39 = var25;
                var37 = var24;
                var2 = var40[var29](var39, var38, var37, var36, var35);
                var1['asset'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 50:
                var2 = var25.string;
                var2 = var2.bind(var25)();
                var1['body'] = var2;
                var27 = var4;
                var26 = var3;
                _fun0007_ip = 66; continue _fun0007;
case 48:
                var2 = var25.string;
                var2 = var2.bind(var25)();
                var1['header'] = var2;
                var27 = var4;
                var26 = var3;
case 66:
                var2 = var25.pos;
                var4 = var27;
                var3 = var26;
                if(var2 < var22) { _fun0007_ip = 47; continue _fun0007 }
case 46:
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
                var3 = var5.header;
                var4 = '';
                if(!(var4 !== var3)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.header;
                var3 = var6.bind(var7)(var3);
case 70:
                var3 = var5.body;
                if(!(var4 !== var3)) { _fun0008_ip = 25; continue _fun0008 }
case 72:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.body;
                var3 = var6.bind(var7)(var3);
case 25:
                var3 = var5.asset;
                if(!var3) { _fun0008_ip = 73; continue _fun0008 }
case 57:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 10;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.ThemeAwareAsset;
                var7 = var8.internalBinaryWrite;
                var6 = var5.asset;
                var10 = var1.tag;
                var3 = 9;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 3;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 73:
                var3 = var5.button;
                if(!var3) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                var8 = _closure1_slot8;
                var7 = var8.internalBinaryWrite;
                var6 = var5.button;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 9;
                var9 = var9[var3];
                var3 = undefined;
                var3 = var11.bind(var3)(var9);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 4;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 74:
                var3 = var5.helpArticleId;
                if(!(var4 !== var3)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 5;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.helpArticleId;
                var3 = var4.bind(var6)(var3);
case 76:
                var3 = var5.helpArticle;
                if(!var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 11;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.HelpArticle;
                var6 = var7.internalBinaryWrite;
                var4 = var5.helpArticle;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 78:
                var3 = var5.headerLocalized;
                if(!var3) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 7;
                var3 = var12[var9];
                var10 = undefined;
                var3 = var11.bind(var10)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.headerLocalized;
                var8 = var1.tag;
                var3 = 9;
                var3 = var12[var3];
                var3 = var11.bind(var10)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var8.bind(var1)(var9, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 80:
                var3 = var5.bodyLocalized;
                if(!var3) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.bodyLocalized;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 8;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 82:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 86:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 84:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var13 = var5;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PremiumTabPopoverCTAButton'] = var4;
    var3['PremiumTabPopover'] = var2;
    return var1;
})();