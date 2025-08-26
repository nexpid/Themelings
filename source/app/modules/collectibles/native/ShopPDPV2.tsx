// app/modules/collectibles/native/ShopPDPV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = function useCollectiblesMobileShopPDPSegmentEnabled() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useConfig;
        var1 = {};
        var4 = 'ShopPDPV2';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot8 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {};
    var12['flex'] = var10;
    var10 = 5;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_SECONDARY;
    var12['backgroundColor'] = var14;
    var7['container'] = var12;
    var12 = {};
    var12['marginBottom'] = var13;
    var7['title'] = var12;
    var12 = {'marginHorizontal': 16, 'marginTop': 24, 'marginBottom': 50, 'flexDirection': 'column', 'gap': 20};
    var7['body'] = var12;
    var12 = {'flexDirection': 'column', 'gap': 6};
    var7['description'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = function PreviewContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.product;
            var6 = var1.width;
            var3 = var7.type;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 10;
            var2 = var2[var8];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0001_ip = 243; continue _fun0001 }
 63:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0001_ip = 209; continue _fun0001 }
 96:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0001_ip = 166; continue _fun0001 }
 129:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var2 !== var3)) { _fun0001_ip = 166; continue _fun0001 }
 162:
            var2 = null;
            return var2;
 166:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['product'] = var7;
            var2['width'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 209:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 16;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 243:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 5;
            var10 = var6[var8];
            var7 = undefined;
            var10 = var9.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.BG_MOD_SUBTLE;
            var2['borderBottomColor'] = var10;
            var10 = 1;
            var2['borderBottomWidth'] = var10;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_24;
            var2['paddingBottom'] = var10;
            var8 = var6[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_24;
            var2['marginTop'] = var8;
            var9 = _closure1_slot0;
            var8 = 10;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.AVATAR_DECORATION;
            var6 = var5 === var6;
            if(!var6) { _fun0002_ip = 155; continue _fun0002 }
 143:
            var9 = {};
            var10 = 16;
            var9['paddingHorizontal'] = var10;
            var6 = var9;
 155:
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.NAMEPLATE;
            var6 = var5 === var6;
            if(!var6) { _fun0002_ip = 215; continue _fun0002 }
 201:
            var6 = {'marginTop': 8, 'paddingBottom': 0};
 215:
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.PROFILE_EFFECT;
            var6 = var5 === var6;
            if(var6) { _fun0002_ip = 303; continue _fun0002 }
 261:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.CollectiblesItemType;
            var9 = var9.BUNDLE;
            var9 = var5 === var9;
            if(!var9) { _fun0002_ip = 300; continue _fun0002 }
 297:
            var9 = !var4;
 300:
            var6 = var9;
 303:
            if(!var6) { _fun0002_ip = 344; continue _fun0002 }
 306:
            var9 = {'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
            var11 = 0.48;
            var10 = arg2;
            var10 = var11 * var10;
            var9['height'] = var10;
            var6 = var9;
 344:
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.BUNDLE;
            var3 = var5 === var3;
            if(!var3) { _fun0002_ip = 393; continue _fun0002 }
 390:
            var3 = var4;
 393:
            if(!var3) { _fun0002_ip = 409; continue _fun0002 }
 396:
            var4 = {};
            var5 = 16;
            var4['paddingBottom'] = var5;
            var3 = var4;
 409:
            var13 = var2;
            var12 = var3;
            var3 = copyDataProperties(var13, var12);
            var1['preview'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var7 = function BundlePreviewContent(arg1) {
        var2 = arg1;
        var8 = var2.product;
        var _closure2_slot0 = var8;
        var5 = var2.width;
        var _closure2_slot1 = var5;
        var7 = var2.handlePreviewPress;
        var _closure2_slot2 = var7;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 19;
        var2 = var11[var2];
        var4 = undefined;
        var3 = var9.bind(var4)(var2);
        var2 = var3.bundleContainsNameplates;
        var6 = var2.bind(var3)(var8);
        var _closure2_slot3 = var6;
        var3 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var5;
        var2[2] = var7;
        var2[3] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = {};
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var1 = var12[var5];
                var7 = undefined;
                var1 = var15.bind(var7)(var1);
                var6 = var1.intl;
                var3 = var6.string;
                var1 = var12[var5];
                var1 = var15.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.s+YSgo;
                var1 = var3.bind(var6)(var1);
                var4['label'] = var1;
                var1 = 'profile';
                var4['id'] = var1;
                var9 = _closure1_slot6;
                var8 = _closure1_slot4;
                var1 = {};
                var10 = _closure2_slot2;
                var1['onPress'] = var10;
                var6 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
                var1['style'] = var6;
                var11 = _closure1_slot1;
                var6 = 17;
                var6 = var12[var6];
                var13 = var11.bind(var7)(var6);
                var6 = {};
                var14 = _closure2_slot0;
                var6['product'] = var14;
                var14 = _closure2_slot1;
                var6['width'] = var14;
                var6 = var9.bind(var7)(var13, var6);
                var1['children'] = var6;
                var1 = var9.bind(var7)(var8, var1);
                var4['page'] = var1;
                var1 = new Array(2);
                var1[0] = var4;
                var4 = {};
                var6 = var12[var5];
                var6 = var15.bind(var7)(var6);
                var14 = var6.intl;
                var13 = var14.string;
                var6 = var12[var5];
                var6 = var15.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.aVCcr6;
                var6 = var13.bind(var14)(var6);
                var4['label'] = var6;
                var6 = 'decoration';
                var4['id'] = var6;
                var6 = {};
                var6['onPress'] = var10;
                var10 = {'flex': 1, 'paddingHorizontal': null, 'justifyContent': 'center'};
                var13 = 5;
                var13 = var12[var13];
                var13 = var11.bind(var7)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_16;
                var10['paddingHorizontal'] = var13;
                var6['style'] = var10;
                var10 = 16;
                var10 = var12[var10];
                var11 = var11.bind(var7)(var10);
                var10 = {};
                var10 = var9.bind(var7)(var11, var10);
                var6['children'] = var10;
                var6 = var9.bind(var7)(var8, var6);
                var4['page'] = var6;
                var1[1] = var4;
                var3 = _closure2_slot3;
                if(var3) { _fun0003_ip = 343; continue _fun0003 }
 337:
                var3 = new Array(0);
                _fun0003_ip = 455; continue _fun0003;
 343:
                var4 = {};
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = var8[var5];
                var6 = var10.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var5 = var8[var5];
                var5 = var10.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5.HNnSVV;
                var5 = var6.bind(var9)(var5);
                var4['label'] = var5;
                var5 = 'nameplate';
                var4['id'] = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var2 = 15;
                var2 = var8[var2];
                var5 = var5.bind(var7)(var2);
                var2 = {};
                var2 = var6.bind(var7)(var5, var2);
                var4['page'] = var2;
                var2 = new Array(1);
                var2[0] = var4;
                var3 = var2;
 455:
                var16 = 2;
                var18 = var1;
                var17 = var3;
                var2 = arraySpread(var18, var17, var16);
                return var1;
            }
        };
        var6 = var3.bind(var4)(var1, var2);
        var1 = 20;
        var1 = var11[var1];
        var3 = var9.bind(var4)(var1);
        var2 = var3.useSegmentedControlState;
        var1 = {};
        var1['items'] = var6;
        var1['pageWidth'] = var5;
        var5 = 0;
        var1['defaultIndex'] = var5;
        var10 = var2.bind(var3)(var1);
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = {};
        var6 = 1;
        var5['flex'] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot6;
        var5 = 21;
        var5 = var11[var5];
        var5 = var9.bind(var4)(var5);
        var6 = var5.SegmentedControlPages;
        var5 = {};
        var5['state'] = var10;
        var8 = {};
        var13 = 435;
        var8['minHeight'] = var13;
        var5['style'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var8 = {};
        var13 = _closure1_slot1;
        var12 = 5;
        var14 = var11[var12];
        var14 = var13.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_16;
        var8['paddingHorizontal'] = var14;
        var12 = var11[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var8['paddingTop'] = var12;
        var6['style'] = var8;
        var8 = 22;
        var8 = var11[var8];
        var8 = var9.bind(var4)(var8);
        var9 = var8.SegmentedControl;
        var8 = {};
        var8['state'] = var10;
        var10 = 'default';
        var8['variant'] = var10;
        var8 = var7.bind(var4)(var9, var8);
        var6['children'] = var8;
        var6 = var7.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start'};
    var4['bulletpoint'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['marginHorizontal'] = var10;
    var4['bulletpointDot'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function BundledProductBulletpoint(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var14 = var2.product;
            var _closure2_slot0 = var14;
            var2 = _closure1_slot13;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var3 = _closure1_slot3;
            var4 = var14.type;
            var2 = new Array(1);
            var2[0] = var4;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 10;
                    var2 = var2[var6];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.AVATAR_DECORATION;
                    if(!(var2 !== var4)) { _fun0005_ip = 196; continue _fun0005 }
 56:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.PROFILE_EFFECT;
                    if(!(var2 !== var4)) { _fun0005_ip = 161; continue _fun0005 }
 89:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.CollectiblesItemType;
                    var2 = var2.NAMEPLATE;
                    if(!(var2 !== var4)) { _fun0005_ip = 126; continue _fun0005 }
 122:
                    var2 = null;
                    return var2;
 126:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.eVNt6O;
                    return var2;
 161:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 11;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.x/MGW1;
                    return var2;
 196:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1.IQQYeX;
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0004_ip = 251; continue _fun0004 }
 70:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var10.bulletpoint;
            var2['style'] = var7;
            var9 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 9;
            var6 = var12[var7];
            var6 = var11.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'text-normal', 'style': null, 'children': '•'};
            var10 = var10.bulletpointDot;
            var6['style'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var10 = 11;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var12 = var10.intl;
            var11 = var12.format;
            var10 = {};
            var14 = var14.name;
            var10['itemName'] = var14;
            var10 = var11.bind(var12)(var13, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 251:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function BundleProductList(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var1 = var1.product;
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var1.bundledProducts;
            var1 = null;
            if(!(var1 == var6)) { _fun0006_ip = 38; continue _fun0006 }
 34:
            var6 = new Array(0);
 38:
            var5 = var6.map;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot6;
                var4 = _closure1_slot14;
                var3 = {};
                var3['product'] = var1;
                var2 = var1.skuId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopPDPV2.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var12 = var1.product;
            var13 = var1.onBuy;
            var11 = var1.analyticsLocations;
            var1 = _closure1_slot9;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 6;
            var1 = var14[var1];
            var2 = var16.bind(var4)(var1);
            var1 = var2.isPremiumCollectiblesProduct;
            var6 = var1.bind(var2)(var12);
            var1 = 7;
            var1 = var14[var1];
            var2 = var16.bind(var4)(var1);
            var1 = var2.useProductPurchaseState;
            var1 = var1.bind(var2)(var12);
            var10 = var1.isPurchased;
            var8 = var1.isPartiallyOwnedBundle;
            var1 = 8;
            var1 = var14[var1];
            var2 = var16.bind(var4)(var1);
            var1 = var2.useProductDescription;
            var19 = var1.bind(var2)(var12);
            var1 = _closure1_slot8;
            var15 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var18.body;
            var1['style'] = var5;
            var5 = {};
            var7 = var18.description;
            var5['style'] = var7;
            var17 = _closure1_slot6;
            var7 = 9;
            var14 = var14[var7];
            var14 = var16.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'heading-xl/bold', 'color': 'header-primary', 'style': null, 'accessibilityRole': 'header'};
            var18 = var18.title;
            var14['style'] = var18;
            var18 = var12.name;
            var14['children'] = var18;
            var16 = var17.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            if(var15) { _fun0007_ip = 297; continue _fun0007 }
 233:
            var16 = var12.type;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 10;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.CollectiblesItemType;
            var15 = var15.BUNDLE;
            if(!(var16 === var15)) { _fun0007_ip = 297; continue _fun0007 }
 274:
            var17 = _closure1_slot6;
            var16 = _closure1_slot15;
            var15 = {};
            var15['product'] = var12;
            var15 = var17.bind(var4)(var16, var15);
            _fun0007_ip = 347; continue _fun0007;
 297:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var7];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 347:
            var14[1] = var15;
            var5['children'] = var14;
            var14 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var14;
            if(var10) { _fun0007_ip = 522; continue _fun0007 }
 375:
            if(var8) { _fun0007_ip = 423; continue _fun0007 }
 378:
            var6 = !var6;
            if(!var6) { _fun0007_ip = 421; continue _fun0007 }
 384:
            var14 = _closure1_slot6;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 12;
            var8 = var15[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['product'] = var12;
            var6 = var14.bind(var4)(var10, var8);
 421:
            _fun0007_ip = 520; continue _fun0007;
 423:
            var14 = _closure1_slot6;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = var19[var7];
            var8 = var18.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var15 = 11;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.BEjTio;
            var15 = var16.bind(var17)(var15);
            var8['children'] = var15;
            var6 = var14.bind(var4)(var10, var8);
 520:
            _fun0007_ip = 619; continue _fun0007;
 522:
            var10 = _closure1_slot6;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = var18[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var14 = 11;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.6cfuDg;
            var14 = var15.bind(var16)(var14);
            var7['children'] = var14;
            var6 = var10.bind(var4)(var8, var7);
 619:
            var5[1] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 13;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NativePaymentContextProvider;
            var6 = {};
            var10 = new Array(0);
            var6['skuIDs'] = var10;
            var10 = null;
            var6['activeSubscription'] = var10;
            var10 = _closure1_slot1;
            var9 = 14;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['onBuy'] = var13;
            var9['product'] = var12;
            var9['analyticsLocations'] = var11;
            var11 = true;
            var9['condensed'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ProductDetailsV2'] = var4;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var9 = var1.product;
            var7 = var1.handlePreviewPress;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 18;
            var3 = var2[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.width;
            var10 = var3.height;
            var3 = _closure1_slot8;
            var6 = var3.bind(var4)();
            var5 = _closure1_slot11;
            var3 = var9.type;
            var6 = var5.bind(var4)(var3, var10, var6);
            var3 = var9.type;
            var5 = _closure1_slot0;
            var10 = 10;
            var2 = var2[var10];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            if(!(var2 !== var3)) { _fun0008_ip = 393; continue _fun0008 }
 118:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_EFFECT;
            if(!(var2 !== var3)) { _fun0008_ip = 320; continue _fun0008 }
 154:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.AVATAR_DECORATION;
            if(!(var2 !== var3)) { _fun0008_ip = 256; continue _fun0008 }
 187:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var2 !== var3)) { _fun0008_ip = 224; continue _fun0008 }
 220:
            var2 = null;
            return var2;
 224:
            var5 = _closure1_slot6;
            var3 = _closure1_slot12;
            var2 = {};
            var2['product'] = var9;
            var2['width'] = var8;
            var2['handlePreviewPress'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 256:
            var5 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var2['onPress'] = var7;
            var10 = var6.preview;
            var2['style'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 16;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10 = var5.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 320:
            var5 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var2['onPress'] = var7;
            var6 = var6.preview;
            var2['style'] = var6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['product'] = var9;
            var6['width'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 393:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PreviewContentPerSegment'] = var4;
    var2 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var9 = var1.product;
            var4 = var1.handlePreviewPress;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var8 = var1.width;
            var7 = var1.height;
            var1 = _closure1_slot8;
            var3 = var1.bind(var5)();
            var2 = _closure1_slot11;
            var1 = var9.type;
            var7 = var2.bind(var5)(var1, var7, var3);
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 141; continue _fun0009 }
 84:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['onPress'] = var4;
            var4 = var7.preview;
            var1['style'] = var4;
            var10 = _closure1_slot10;
            var4 = {};
            var4['product'] = var9;
            var4['width'] = var8;
            var4 = var3.bind(var5)(var10, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0009_ip = 192; continue _fun0009;
 141:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.preview;
            var2['style'] = var7;
            var7 = _closure1_slot10;
            var6 = {};
            var6['product'] = var9;
            var6['width'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 192:
            return var1;
        }
    };
    var3['ProductPreviewV2'] = var2;
    return var1;
})();