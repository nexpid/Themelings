// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx
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
    var5 = 8;
    var4 = var7[var5];
    var4 = var6.bind(var1)(var4);
    var8 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CTAButton$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot9;
            var6 = new Array(4);
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
            var6[3] = var1;
            var1 = ['discord_protos.premium_marketing.v1.CTAButton'];
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
                var7 = 8;
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
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 12:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = 8;
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
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                if(!(var7 !== var29)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                if(!(var8 !== var29)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                if(!(var9 !== var29)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var23 = var19.readUnknownField;
                if(!(var10 !== var23)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var11 !== var23)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var25 = var23;
                if(!(var12 === var23)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var13];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 28:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0004_ip = 26; continue _fun0004;
case 24:
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
case 22:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var23.bind(var16)(var2);
                var25 = var2.LocalizedString;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.copyLocalized;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['copyLocalized'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 26; continue _fun0004;
case 20:
                var2 = var20.string;
                var2 = var2.bind(var20)();
                var1['deeplinkSection'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 26; continue _fun0004;
case 18:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['buttonAction'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0004_ip = 26; continue _fun0004;
case 16:
                var2 = var20.string;
                var2 = var2.bind(var20)();
                var1['copy'] = var2;
                var22 = var4;
                var21 = var3;
case 26:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0004_ip = 15; continue _fun0004 }
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
                if(!(var4 !== var3)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
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
case 30:
                var6 = var5.buttonAction;
                var3 = 0;
                if(!(var3 !== var6)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
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
case 32:
                var3 = var5.deeplinkSection;
                if(!(var4 !== var3)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
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
case 34:
                var3 = var5.copyLocalized;
                if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 24:
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
                var3 = 8;
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
case 36:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 39:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 37:
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
        var4 = function MobileBottomSheet$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot9;
            var6 = new Array(9);
            var1 = {'no': 1, 'name': 'asset_url', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'header', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'body', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'help_article_id', 'kind': 'scalar', 'T': 9};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'button', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot8;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'dismissible_content', 'kind': 'enum'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.DismissibleContent;
                var1 = ['discord_protos.discord_users.v1.DismissibleContent'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'help_article', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.HelpArticle;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'header_localized', 'kind': 'message'};
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
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'body_localized', 'kind': 'message'};
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
            var6[8] = var1;
            var1 = ['discord_protos.premium_marketing.v1.MobileBottomSheet'];
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
                var1 = {'assetUrl': '', 'header': '', 'body': '', 'helpArticleId': '', 'dismissibleContent': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 8;
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
                var24 = arg1;
                var23 = arg3;
                var1 = arg4;
                var22 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var2 = var22.create;
                var1 = var2.bind(var22)();
case 12:
                var3 = var24.pos;
                var2 = arg2;
                var21 = var3 + var2;
                var2 = var24.pos;
                var2 = var2 < var21;
                var20 = undefined;
                var18 = 10;
                var17 = 7;
                var16 = 8;
                var15 = true;
                var14 = false;
                var13 = 'throw';
                var12 = 9;
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var2 = var24.tag;
                var25 = var2.bind(var24)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var20)(var25, var7);
                var33 = var2[var5];
                var32 = var2[var6];
                if(!(var6 !== var33)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                if(!(var7 !== var33)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                if(!(var8 !== var33)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                if(!(var9 !== var33)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                if(!(var10 !== var33)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                if(!(var11 !== var33)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                if(!(var17 !== var33)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                if(!(var16 !== var33)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                if(!(var12 !== var33)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var27 = var23.readUnknownField;
                if(!(var13 !== var27)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var2 = var24.skip;
                var2 = var2.bind(var24)(var32);
                var26 = var27;
                var25 = var2;
                if(!(var14 !== var27)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var29 = var27;
                if(!(var15 === var27)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var30 = _closure1_slot0;
                var28 = _closure1_slot1;
                var28 = var28[var16];
                var28 = var30.bind(var20)(var28);
                var28 = var28.UnknownFieldHandler;
                var29 = var28.onRead;
case 65:
                var38 = var22.typeName;
                var39 = undefined;
                var37 = var1;
                var36 = var33;
                var35 = var32;
                var34 = var2;
                var28 = var39[var29](var38, var37, var36, var35, var34, var33);
                var26 = var27;
                var25 = var2;
                _fun0007_ip = 63; continue _fun0007;
case 61:
                var2 = global;
                var27 = var2.globalThis;
                var28 = var27.Error;
                var34 = var22.typeName;
                var2 = var2.HermesInternal;
                var30 = var2.concat;
                var39 = 'Unknown field ';
                var37 = ' (wire type ';
                var35 = ') for ';
                var38 = var33;
                var36 = var32;
                var38 = var39[var30](var38, var37, var36, var35, var34, var33);
                var27 = var28.prototype;
                var27 = Object.create(var27, {constructor: {value: var28}});
                var39 = var27;
                var2 = new var39[var28](var38, var37);
                var2 = var2 instanceof Object ? var2 : var27;
                throw var2;
case 59:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var27.bind(var20)(var2);
                var29 = var2.LocalizedString;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.bodyLocalized;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['bodyLocalized'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 57:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var27.bind(var20)(var2);
                var29 = var2.LocalizedString;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.headerLocalized;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['headerLocalized'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 55:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var18];
                var2 = var27.bind(var20)(var2);
                var29 = var2.HelpArticle;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.helpArticle;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['helpArticle'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 53:
                var2 = var24.int32;
                var2 = var2.bind(var24)();
                var1['dismissibleContent'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 51:
                var29 = _closure1_slot8;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.button;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['button'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 49:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['helpArticleId'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 47:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['body'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 45:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['header'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0007_ip = 63; continue _fun0007;
case 43:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['assetUrl'] = var2;
                var26 = var4;
                var25 = var3;
case 63:
                var2 = var24.pos;
                var4 = var26;
                var3 = var25;
                if(var2 < var21) { _fun0007_ip = 42; continue _fun0007 }
case 41:
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
                var3 = var5.assetUrl;
                var4 = '';
                if(!(var4 !== var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.assetUrl;
                var3 = var6.bind(var7)(var3);
case 30:
                var3 = var5.header;
                if(!(var4 !== var3)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.header;
                var3 = var6.bind(var7)(var3);
case 67:
                var3 = var5.body;
                if(!(var4 !== var3)) { _fun0008_ip = 66; continue _fun0008 }
case 69:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.body;
                var3 = var6.bind(var7)(var3);
case 66:
                var3 = var5.helpArticleId;
                if(!(var4 !== var3)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 4;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.helpArticleId;
                var3 = var4.bind(var6)(var3);
case 70:
                var3 = var5.button;
                if(!var3) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var7 = _closure1_slot8;
                var6 = var7.internalBinaryWrite;
                var4 = var5.button;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 8;
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
case 72:
                var4 = var5.dismissibleContent;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 6;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.int32;
                var3 = var5.dismissibleContent;
                var3 = var4.bind(var6)(var3);
case 74:
                var3 = var5.helpArticle;
                if(!var3) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 10;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.HelpArticle;
                var6 = var7.internalBinaryWrite;
                var4 = var5.helpArticle;
                var9 = var1.tag;
                var3 = 8;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 7;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 76:
                var3 = var5.headerLocalized;
                if(!var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 7;
                var4 = var3[var4];
                var10 = undefined;
                var4 = var11.bind(var10)(var4);
                var7 = var4.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.headerLocalized;
                var9 = var1.tag;
                var8 = 8;
                var3 = var3[var8];
                var3 = var11.bind(var10)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 78:
                var3 = var5.bodyLocalized;
                if(!var3) { _fun0008_ip = 80; continue _fun0008 }
case 81:
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
                var3 = 8;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 9;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 80:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 84:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 82:
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
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/mobile_bottom_sheet.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CTAButton'] = var4;
    var3['MobileBottomSheet'] = var2;
    return var1;
})();