// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nagbar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageType;
    var2 = function(arg1) {
        var4 = function Nagbar$Type() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = new Array(8);
                var6 = {'no': 1, 'name': 'body', 'kind': 'scalar', 'T': 9};
                var1[0] = var6;
                var6 = {'no': 2, 'name': 'cta_label', 'kind': 'scalar', 'T': 9};
                var1[1] = var6;
                var6 = {'no': 3, 'name': 'cta_action', 'kind': 'enum'};
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
                var6['T'] = var8;
                var1[2] = var6;
                var6 = {'no': 4, 'name': 'deeplink_section', 'kind': 'scalar', 'T': 9};
                var1[3] = var6;
                var6 = {'no': 5, 'name': 'help_article', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.HelpArticle;
                    return var1;
                };
                var6['T'] = var8;
                var1[4] = var6;
                var6 = {'no': 6, 'name': 'body_localized', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.LocalizedString;
                    return var1;
                };
                var6['T'] = var8;
                var1[5] = var6;
                var6 = {'no': 7, 'name': 'cta_label_localized', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.LocalizedString;
                    return var1;
                };
                var6['T'] = var8;
                var1[6] = var6;
                var6 = {'no': 8, 'name': 'navigable_storefront_application_id', 'kind': 'message'};
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
                var6['T'] = var7;
                var1[7] = var6;
                var9 = ['discord_protos.premium_marketing.v1.Nagbar'];
                var9[1] = var1;
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
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
                var1 = {'body': '', 'ctaLabel': '', 'ctaAction': 0, 'deeplinkSection': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 10;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 9:
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
                var24 = arg1;
                var23 = arg3;
                var1 = arg4;
                var22 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = var22.create;
                var1 = var2.bind(var22)();
case 11:
                var3 = var24.pos;
                var2 = arg2;
                var21 = var3 + var2;
                var2 = var24.pos;
                var2 = var2 < var21;
                var20 = undefined;
                var18 = 7;
                var17 = 8;
                var16 = 9;
                var15 = 10;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var24.tag;
                var25 = var2.bind(var24)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var20)(var25, var7);
                var33 = var2[var5];
                var32 = var2[var6];
                if(!(var6 !== var33)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                if(!(var7 !== var33)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(!(var8 !== var33)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                if(!(var9 !== var33)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                if(!(var10 !== var33)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                if(!(var11 !== var33)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                if(!(var18 !== var33)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                if(!(var17 !== var33)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var27 = var23.readUnknownField;
                if(!(var12 !== var27)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var24.skip;
                var2 = var2.bind(var24)(var32);
                var26 = var27;
                var25 = var2;
                if(!(var13 !== var27)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var29 = var27;
                if(!(var14 === var27)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var30 = _closure1_slot0;
                var28 = _closure1_slot1;
                var28 = var28[var15];
                var28 = var30.bind(var20)(var28);
                var28 = var28.UnknownFieldHandler;
                var29 = var28.onRead;
case 35:
                var38 = var22.typeName;
                var39 = undefined;
                var37 = var1;
                var36 = var33;
                var35 = var32;
                var34 = var2;
                var28 = var39[var29](var38, var37, var36, var35, var34, var33);
                var26 = var27;
                var25 = var2;
                _fun0004_ip = 33; continue _fun0004;
case 31:
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
case 29:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var27.bind(var20)(var2);
                var29 = var2.UInt64Value;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.navigableStorefrontApplicationId;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['navigableStorefrontApplicationId'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0004_ip = 33; continue _fun0004;
case 27:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var27.bind(var20)(var2);
                var29 = var2.LocalizedString;
                var28 = var29.internalBinaryRead;
                var2 = var24.uint32;
                var37 = var2.bind(var24)();
                var35 = var1.ctaLabelLocalized;
                var39 = var29;
                var38 = var24;
                var36 = var23;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['ctaLabelLocalized'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0004_ip = 33; continue _fun0004;
case 25:
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
                _fun0004_ip = 33; continue _fun0004;
case 23:
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
                _fun0004_ip = 33; continue _fun0004;
case 21:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['deeplinkSection'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0004_ip = 33; continue _fun0004;
case 19:
                var2 = var24.int32;
                var2 = var2.bind(var24)();
                var1['ctaAction'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0004_ip = 33; continue _fun0004;
case 17:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['ctaLabel'] = var2;
                var26 = var4;
                var25 = var3;
                _fun0004_ip = 33; continue _fun0004;
case 15:
                var2 = var24.string;
                var2 = var2.bind(var24)();
                var1['body'] = var2;
                var26 = var4;
                var25 = var3;
case 33:
                var2 = var24.pos;
                var4 = var26;
                var3 = var25;
                if(var2 < var21) { _fun0004_ip = 14; continue _fun0004 }
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
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.body;
                var4 = '';
                if(!(var4 !== var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.body;
                var3 = var6.bind(var7)(var3);
case 37:
                var3 = var5.ctaLabel;
                if(!(var4 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.ctaLabel;
                var3 = var6.bind(var7)(var3);
case 39:
                var6 = var5.ctaAction;
                var3 = 0;
                if(!(var3 !== var6)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.ctaAction;
                var3 = var6.bind(var7)(var3);
case 41:
                var3 = var5.deeplinkSection;
                if(!(var4 !== var3)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 4;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.deeplinkSection;
                var3 = var4.bind(var6)(var3);
case 43:
                var3 = var5.helpArticle;
                if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.HelpArticle;
                var6 = var7.internalBinaryWrite;
                var4 = var5.helpArticle;
                var9 = var1.tag;
                var3 = 10;
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
case 45:
                var3 = var5.bodyLocalized;
                if(!var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.bodyLocalized;
                var9 = var1.tag;
                var3 = 10;
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
case 47:
                var3 = var5.ctaLabelLocalized;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.ctaLabelLocalized;
                var9 = var1.tag;
                var3 = 10;
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
case 49:
                var3 = var5.navigableStorefrontApplicationId;
                if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.navigableStorefrontApplicationId;
                var9 = var1.tag;
                var3 = 10;
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
case 51:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 55:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 53:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/nagbar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Nagbar'] = var2;
    return var1;
})();