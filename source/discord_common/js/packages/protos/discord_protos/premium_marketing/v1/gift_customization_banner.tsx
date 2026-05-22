// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var7[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var7[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 2;
    var4 = var7[var8];
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
    var4 = {};
    var4['UNSPECIFIED'] = var10;
    var5 = 'UNSPECIFIED';
    var4[var10] = var5;
    var4['NORMAL'] = var9;
    var5 = 'NORMAL';
    var4[var9] = var5;
    var4['LARGE_TILTED'] = var8;
    var5 = 'LARGE_TILTED';
    var4[var8] = var5;
    var _closure1_slot8 = var4;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MessageType;
    var2 = function(arg1) {
        var4 = function GiftCustomizationBanner$Type() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = new Array(9);
                var6 = {'no': 1, 'name': 'asset_url', 'kind': 'scalar', 'T': 9};
                var1[0] = var6;
                var6 = {'no': 2, 'name': 'desktop_body', 'kind': 'scalar', 'T': 9};
                var1[1] = var6;
                var6 = {'no': 3, 'name': 'mobile_body', 'kind': 'scalar', 'T': 9};
                var1[2] = var6;
                var6 = {'no': 4, 'name': 'gradient', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.Gradient;
                    return var1;
                };
                var6['T'] = var8;
                var1[3] = var6;
                var6 = {'no': 5, 'name': 'background_asset_url', 'kind': 'scalar', 'T': 9};
                var1[4] = var6;
                var6 = {'no': 6, 'name': 'asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[5] = var6;
                var6 = {'no': 7, 'name': 'background_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[6] = var6;
                var6 = {'no': 8, 'name': 'mobile_background_asset', 'kind': 'message'};
                var8 = function T() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThemeAwareAsset;
                    return var1;
                };
                var6['T'] = var8;
                var1[7] = var6;
                var6 = {'no': 9, 'name': 'asset_variant', 'kind': 'enum'};
                var7 = function T() {
                    var2 = _closure1_slot8;
                    var1 = ['discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant'];
                    var1[1] = var2;
                    var2 = 'ASSET_VARIANT_';
                    var1[2] = var2;
                    return var1;
                };
                var6['T'] = var7;
                var1[8] = var6;
                var9 = ['discord_protos.premium_marketing.v1.GiftCustomizationBanner'];
                var9[1] = var1;
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
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
                var1 = {'assetUrl': '', 'desktopBody': '', 'mobileBody': '', 'backgroundAssetUrl': '', 'assetVariant': 0};
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
                var23 = arg1;
                var22 = arg3;
                var1 = arg4;
                var21 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = var21.create;
                var1 = var2.bind(var21)();
case 11:
                var3 = var23.pos;
                var2 = arg2;
                var20 = var3 + var2;
                var2 = var23.pos;
                var2 = var2 < var20;
                var19 = undefined;
                var17 = 6;
                var16 = 7;
                var15 = 8;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 9;
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
                var2 = var23.tag;
                var24 = var2.bind(var23)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var19)(var24, var7);
                var32 = var2[var5];
                var31 = var2[var6];
                if(!(var6 !== var32)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                if(!(var7 !== var32)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(!(var8 !== var32)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                if(!(var9 !== var32)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                if(!(var10 !== var32)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                if(!(var17 !== var32)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                if(!(var16 !== var32)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                if(!(var15 !== var32)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                if(!(var11 !== var32)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var26 = var22.readUnknownField;
                if(!(var12 !== var26)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var23.skip;
                var2 = var2.bind(var23)(var31);
                var25 = var26;
                var24 = var2;
                if(!(var13 !== var26)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var28 = var26;
                if(!(var14 === var26)) { _fun0004_ip = 7; continue _fun0004 }
case 37:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var19)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 7:
                var37 = var21.typeName;
                var38 = undefined;
                var36 = var1;
                var35 = var32;
                var34 = var31;
                var33 = var2;
                var27 = var38[var28](var37, var36, var35, var34, var33, var32);
                var25 = var26;
                var24 = var2;
                _fun0004_ip = 35; continue _fun0004;
case 33:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var33 = var21.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var38 = 'Unknown field ';
                var36 = ' (wire type ';
                var34 = ') for ';
                var37 = var32;
                var35 = var31;
                var37 = var38[var29](var37, var36, var35, var34, var33, var32);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var38 = var26;
                var2 = new var38[var27](var37, var36);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 31:
                var2 = var23.int32;
                var2 = var2.bind(var23)();
                var1['assetVariant'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 29:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.ThemeAwareAsset;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.mobileBackgroundAsset;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['mobileBackgroundAsset'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 27:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.ThemeAwareAsset;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.backgroundAsset;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['backgroundAsset'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 25:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.ThemeAwareAsset;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.asset;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['asset'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 23:
                var2 = var23.string;
                var2 = var2.bind(var23)();
                var1['backgroundAssetUrl'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 21:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var26.bind(var19)(var2);
                var28 = var2.Gradient;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.gradient;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['gradient'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 19:
                var2 = var23.string;
                var2 = var2.bind(var23)();
                var1['mobileBody'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 17:
                var2 = var23.string;
                var2 = var2.bind(var23)();
                var1['desktopBody'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0004_ip = 35; continue _fun0004;
case 15:
                var2 = var23.string;
                var2 = var2.bind(var23)();
                var1['assetUrl'] = var2;
                var25 = var4;
                var24 = var3;
case 35:
                var2 = var23.pos;
                var4 = var25;
                var3 = var24;
                if(var2 < var20) { _fun0004_ip = 14; continue _fun0004 }
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
                var3 = var5.assetUrl;
                var4 = '';
                if(!(var4 !== var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
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
case 38:
                var3 = var5.desktopBody;
                if(!(var4 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
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
                var3 = var5.desktopBody;
                var3 = var6.bind(var7)(var3);
case 40:
                var3 = var5.mobileBody;
                if(!(var4 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
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
                var3 = var5.mobileBody;
                var3 = var6.bind(var7)(var3);
case 42:
                var3 = var5.gradient;
                if(!var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 6;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.Gradient;
                var7 = var8.internalBinaryWrite;
                var6 = var5.gradient;
                var10 = var1.tag;
                var3 = 8;
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
case 44:
                var3 = var5.backgroundAssetUrl;
                if(!(var4 !== var3)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 5;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.backgroundAssetUrl;
                var3 = var4.bind(var6)(var3);
case 46:
                var3 = var5.asset;
                if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.asset;
                var9 = var1.tag;
                var3 = 8;
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
case 48:
                var3 = var5.backgroundAsset;
                if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 7;
                var3 = var12[var9];
                var10 = undefined;
                var3 = var11.bind(var10)(var3);
                var7 = var3.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.backgroundAsset;
                var8 = var1.tag;
                var3 = 8;
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
case 50:
                var3 = var5.mobileBackgroundAsset;
                if(!var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 7;
                var4 = var3[var4];
                var10 = undefined;
                var4 = var11.bind(var10)(var4);
                var7 = var4.ThemeAwareAsset;
                var6 = var7.internalBinaryWrite;
                var4 = var5.mobileBackgroundAsset;
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
case 52:
                var4 = var5.assetVariant;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 9;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.int32;
                var3 = var5.assetVariant;
                var3 = var4.bind(var6)(var3);
case 54:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
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
    var2 = var2.bind(var1)(var5);
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var14 = var5;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_customization_banner.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GiftCustomizationBanner_AssetVariant'] = var4;
    var3['GiftCustomizationBanner'] = var2;
    return var1;
})();