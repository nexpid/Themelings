// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx
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
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageType;
    var2 = function(arg1) {
        var4 = function GiftPlanSelectionCardBanner$Type() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = new Array(15);
                var6 = {'no': 1, 'name': 'header', 'kind': 'scalar', 'T': 9};
                var1[0] = var6;
                var6 = {'no': 2, 'name': 'desktop_body', 'kind': 'scalar', 'T': 9};
                var1[1] = var6;
                var6 = {'no': 3, 'name': 'mobile_body', 'kind': 'scalar', 'T': 9};
                var1[2] = var6;
                var6 = {'no': 4, 'name': 'avatar_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[3] = var6;
                var6 = {'no': 5, 'name': 'banner_asset_url', 'kind': 'scalar', 'T': 9};
                var1[4] = var6;
                var6 = {'no': 6, 'name': 'background_asset_url', 'kind': 'scalar', 'T': 9};
                var1[5] = var6;
                var6 = {'no': 7, 'name': 'card_asset_url', 'kind': 'scalar', 'T': 9};
                var1[6] = var6;
                var6 = {'no': 8, 'name': 'gradient', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.Gradient;
                    return var1;
                };
                var6['T'] = var8;
                var1[7] = var6;
                var6 = {'no': 9, 'name': 'banner_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[8] = var6;
                var6 = {'no': 10, 'name': 'background_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[9] = var6;
                var6 = {'no': 11, 'name': 'card_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[10] = var6;
                var6 = {'no': 12, 'name': 'mobile_banner_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[11] = var6;
                var6 = {'no': 13, 'name': 'header_localized', 'kind': 'message'};
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
                var1[12] = var6;
                var6 = {'no': 14, 'name': 'desktop_body_localized', 'kind': 'message'};
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
                var1[13] = var6;
                var6 = {'no': 15, 'name': 'mobile_body_localized', 'kind': 'message'};
                var7 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.LocalizedString;
                    return var1;
                };
                var6['T'] = var7;
                var1[14] = var6;
                var9 = ['discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner'];
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
                var1 = {'header': '', 'desktopBody': '', 'mobileBody': '', 'bannerAssetUrl': '', 'backgroundAssetUrl': '', 'cardAssetUrl': ''};
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
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 11:
                var4 = var22.pos;
                var3 = arg2;
                var20 = var4 + var3;
                var3 = var22.pos;
                var3 = var3 < var20;
                var19 = undefined;
                var17 = 9;
                var16 = true;
                var15 = false;
                var14 = 'throw';
                var13 = 6;
                var12 = 7;
                var11 = 8;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var22.tag;
                var7 = var3.bind(var22)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var19)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=1158, default_jump_address=961, unsigned_min_value=1, unsigned_max_value=15) // Switch table: [938, 915, 889, 814, 788, 762, 736, 661, 586, 511, 436, 361, 286, 211, 136];
case 15:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var19)(var3);
                var25 = var3.LocalizedString;
                var24 = var25.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.mobileBodyLocalized;
                var34 = var25;
                var33 = var22;
                var31 = var21;
                var3 = var34[var24](var33, var32, var31, var30, var29);
                var1['mobileBodyLocalized'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 17:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var25.bind(var19)(var3);
                var27 = var3.LocalizedString;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.desktopBodyLocalized;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['desktopBodyLocalized'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 18:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var25.bind(var19)(var3);
                var27 = var3.LocalizedString;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.headerLocalized;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['headerLocalized'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 19:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var25.bind(var19)(var3);
                var27 = var3.ThemeAwareAsset;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.mobileBannerAsset;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['mobileBannerAsset'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 20:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var25.bind(var19)(var3);
                var27 = var3.ThemeAwareAsset;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.cardAsset;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['cardAsset'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 21:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var25.bind(var19)(var3);
                var27 = var3.ThemeAwareAsset;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.backgroundAsset;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['backgroundAsset'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 22:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var25.bind(var19)(var3);
                var27 = var3.ThemeAwareAsset;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.bannerAsset;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['bannerAsset'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 23:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var12];
                var3 = var25.bind(var19)(var3);
                var27 = var3.Gradient;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.gradient;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['gradient'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 24:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['cardAssetUrl'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 25:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['backgroundAssetUrl'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 26:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['bannerAssetUrl'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 27:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var25.bind(var19)(var3);
                var27 = var3.ThemeAwareAsset;
                var26 = var27.internalBinaryRead;
                var3 = var22.uint32;
                var32 = var3.bind(var22)();
                var30 = var1.avatarAsset;
                var34 = var27;
                var33 = var22;
                var31 = var21;
                var3 = var34[var26](var33, var32, var31, var30, var29);
                var1['avatarAsset'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 28:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['mobileBody'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 29:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['desktopBody'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 30:
                var3 = var22.string;
                var3 = var3.bind(var22)();
                var1['header'] = var3;
                var24 = var5;
                var23 = var4;
                _fun0004_ip = 16; continue _fun0004;
case 31:
                var25 = var21.readUnknownField;
                if(!(var14 !== var25)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var3 = var22.skip;
                var3 = var3.bind(var22)(var7);
                var24 = var25;
                var23 = var3;
                if(!(var15 !== var25)) { _fun0004_ip = 16; continue _fun0004 }
case 34:
                var27 = var25;
                if(!(var16 === var25)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var17];
                var26 = var28.bind(var19)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 35:
                var33 = var2.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var8;
                var30 = var7;
                var29 = var3;
                var26 = var34[var27](var33, var32, var31, var30, var29, var28);
                var24 = var25;
                var23 = var3;
case 16:
                var3 = var22.pos;
                var5 = var24;
                var4 = var23;
                if(var3 < var20) { _fun0004_ip = 14; continue _fun0004 }
case 13:
                return var1;
case 32:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var29 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var8;
                var31 = var7;
                var33 = var34[var5](var33, var32, var31, var30, var29, var28);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var34 = var2;
                var1 = new var34[var3](var33, var32);
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.header;
                var4 = '';
                if(!(var4 !== var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
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
case 37:
                var3 = var5.desktopBody;
                if(!(var4 !== var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
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
                var3 = var5.desktopBody;
                var3 = var6.bind(var7)(var3);
case 39:
                var3 = var5.mobileBody;
                if(!(var4 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.mobileBody;
                var3 = var6.bind(var7)(var3);
case 41:
                var3 = var5.avatarAsset;
                if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 6;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.ThemeAwareAsset;
                var7 = var8.internalBinaryWrite;
                var6 = var5.avatarAsset;
                var10 = var1.tag;
                var3 = 9;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 4;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 43:
                var3 = var5.bannerAssetUrl;
                if(!(var4 !== var3)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 5;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.bannerAssetUrl;
                var3 = var6.bind(var7)(var3);
case 45:
                var3 = var5.backgroundAssetUrl;
                if(!(var4 !== var3)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 6;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.backgroundAssetUrl;
                var3 = var6.bind(var7)(var3);
case 47:
                var3 = var5.cardAssetUrl;
                if(!(var4 !== var3)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 7;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.cardAssetUrl;
                var3 = var4.bind(var6)(var3);
case 49:
                var3 = var5.gradient;
                if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Gradient;
                var6 = var7.internalBinaryWrite;
                var4 = var5.gradient;
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
case 51:
                var3 = var5.bannerAsset;
                if(!var3) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 6;
                var4 = var3[var4];
                var10 = undefined;
                var4 = var11.bind(var10)(var4);
                var7 = var4.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.bannerAsset;
                var9 = var1.tag;
                var8 = 9;
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
case 53:
                var3 = var5.backgroundAsset;
                if(!var3) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.backgroundAsset;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 55:
                var3 = var5.cardAsset;
                if(!var3) { _fun0005_ip = 35; continue _fun0005 }
case 57:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.cardAsset;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 35:
                var3 = var5.mobileBannerAsset;
                if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.mobileBannerAsset;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 12;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 58:
                var3 = var5.headerLocalized;
                if(!var3) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.headerLocalized;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 13;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 60:
                var3 = var5.desktopBodyLocalized;
                if(!var3) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.desktopBodyLocalized;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 14;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 62:
                var3 = var5.mobileBodyLocalized;
                if(!var3) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.LocalizedString;
                var6 = var7.internalBinaryWrite;
                var4 = var5.mobileBodyLocalized;
                var9 = var1.tag;
                var3 = 9;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 15;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 64:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 68:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 66:
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['GiftPlanSelectionCardBanner'] = var2;
    return var1;
})();