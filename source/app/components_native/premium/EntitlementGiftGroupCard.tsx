// app/components_native/premium/EntitlementGiftGroupCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var19 = 1;
    var4 = var6[var19];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.View;
    var _closure1_slot9 = var9;
    var9 = var7.ActivityIndicator;
    var _closure1_slot10 = var9;
    var7 = var7.TouchableWithoutFeedback;
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var12 = var8.bind(var1)(var7);
    var _closure1_slot12 = var12;
    var18 = 8;
    var7 = var6[var18];
    var14 = var8.bind(var1)(var7);
    var _closure1_slot13 = var14;
    var7 = 9;
    var7 = var6[var7];
    var11 = var8.bind(var1)(var7);
    var _closure1_slot14 = var11;
    var7 = 10;
    var7 = var6[var7];
    var10 = var8.bind(var1)(var7);
    var7 = 11;
    var7 = var6[var7];
    var13 = var8.bind(var1)(var7);
    var _closure1_slot15 = var13;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var20 = var7.Fonts;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.SubscriptionIntervalTypes;
    var _closure1_slot16 = var9;
    var9 = var7.PremiumSubscriptionSKUs;
    var _closure1_slot17 = var9;
    var7 = var7.PremiumGiftStyles;
    var _closure1_slot18 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot19 = var9;
    var7 = var7.jsxs;
    var _closure1_slot20 = var7;
    var7 = 15;
    var7 = var6[var7];
    var15 = var5.bind(var1)(var7);
    var9 = var15.createLegacyClassComponentStyles;
    var7 = {};
    var16 = {'overflow': 'hidden', 'marginTop': 8};
    var7['giftGroupCard'] = var16;
    var16 = {'fontSize': 16, 'lineHeight': 20};
    var17 = 16;
    var20 = var20.PRIMARY_SEMIBOLD;
    var16['fontFamily'] = var20;
    var20 = var6[var17];
    var20 = var8.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.HEADER_PRIMARY;
    var16['color'] = var20;
    var7['title'] = var16;
    var16 = {};
    var20 = var6[var17];
    var20 = var8.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.ICON_SECONDARY;
    var16['color'] = var20;
    var7['arrow'] = var16;
    var16 = {'fontSize': 14, 'lineHeight': 18};
    var7['subtitle'] = var16;
    var16 = {'marginLeft': 8, 'flex': 1};
    var7['titleContainer'] = var16;
    var16 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'padding': 16};
    var20 = var6[var17];
    var20 = var8.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SECONDARY;
    var16['backgroundColor'] = var20;
    var7['groupCardHeader'] = var16;
    var16 = {'height': 8, 'width': 12, 'marginRight': 8};
    var7['rowArrow'] = var16;
    var16 = {};
    var20 = var6[var17];
    var20 = var8.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.xs;
    var16['borderRadius'] = var20;
    var7['giftIcon'] = var16;
    var16 = {'padding': 8, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var20 = var6[var17];
    var20 = var8.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SECONDARY;
    var16['backgroundColor'] = var20;
    var7['generateGiftRow'] = var16;
    var16 = {};
    var16['flexShrink'] = var19;
    var7['generateGiftRowText'] = var16;
    var16 = {'marginLeft': 12, 'paddingHorizontal': 16, 'fontSize': 12};
    var7['generateGiftButton'] = var16;
    var16 = {};
    var16['marginTop'] = var18;
    var7['loading'] = var16;
    var16 = {'flexGrow': 1, 'flexShrink': 0};
    var7['generateButtonContainer'] = var16;
    var16 = {};
    var17 = var6[var17];
    var17 = var8.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_TERTIARY;
    var16['backgroundColor'] = var17;
    var7['groupCardHeaderOpen'] = var16;
    var7 = var9.bind(var15)(var7);
    var _closure1_slot21 = var7;
    var7 = var4.Component;
    var4 = function(arg1) {
        var4 = function EntitlementGiftGroupCard(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot22;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['_mountedAt'] = var3;
                var3 = {};
                var4 = false;
                var3['isOpen'] = var4;
                var1['state'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.props;
                        var6 = var2.skuId;
                        var5 = var2.subscriptionPlanId;
                        var2 = var2.loadedAt;
                        var3 = var3.state;
                        var3 = var3.isOpen;
                        var4 = !var3;
                        var7 = null;
                        var2 = var7 != var2;
                        if(!var2) { _fun0003_ip = 67; continue _fun0003 }
 53:
                        var3 = _closure3_slot0;
                        var3 = var3._mountedAt;
                        var2 = var7 != var3;
 67:
                        if(var2) { _fun0003_ip = 73; continue _fun0003 }
 70:
                        var2 = !var4;
 73:
                        if(var2) { _fun0003_ip = 113; continue _fun0003 }
 76:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var7.bind(var2)(var3);
                        var2 = var3.fetchUserGiftCodesForSKU;
                        var2 = var2.bind(var3)(var6, var5);
 113:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1['isOpen'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleOpen'] = var3;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.skuId;
                    var5 = var1.subscriptionPlanId;
                    var4 = var1.giftStyle;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.createGiftCode;
                    var2 = var2.bind(var3)(var6, var5, var4);
                    return var1;
                };
                var1['handleGenerateGiftCode'] = var2;
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
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = this;
            var1['_mountedAt'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderGenerateGiftCodeRow';
        var5['key'] = var7;
        var7 = function value() {
            var11 = this;
            var2 = _closure1_slot21;
            var1 = var11.context;
            var4 = undefined;
            var10 = var2.bind(var4)(var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = var10.generateGiftRow;
            var1['style'] = var5;
            var7 = _closure1_slot19;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 18;
            var5 = var14[var5];
            var5 = var18.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
            var9 = var10.generateGiftRowText;
            var5['style'] = var9;
            var15 = 19;
            var9 = var14[var15];
            var9 = var18.bind(var4)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var14[var15];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.lELyPj;
            var9 = var12.bind(var13)(var9);
            var5['children'] = var9;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = var10.generateButtonContainer;
            var6['style'] = var9;
            var13 = _closure1_slot1;
            var12 = 20;
            var8 = var14[var12];
            var9 = var13.bind(var4)(var8);
            var8 = {};
            var16 = var14[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var14[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.w4+/BA;
            var15 = var16.bind(var17)(var15);
            var8['text'] = var15;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var15 = var15.Sizes;
            var15 = var15.XSMALL;
            var8['size'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Colors;
            var12 = var12.BRAND;
            var8['color'] = var12;
            var11 = var11.handleGenerateGiftCode;
            var8['onPress'] = var11;
            var10 = var10.generateGiftButton;
            var8['style'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderHeader';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var18 = arg1;
                var5 = this;
                var2 = _closure1_slot21;
                var1 = var5.context;
                var4 = undefined;
                var12 = var2.bind(var4)(var1);
                var2 = var5.state;
                var1 = var5.props;
                var13 = var2.isOpen;
                var24 = var1.entitlements;
                var3 = _closure1_slot19;
                var2 = _closure1_slot11;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var5 = var5.handleToggleOpen;
                var1['onPress'] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot9;
                var5 = {};
                var9 = var12.groupCardHeader;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                var10 = null;
                if(!var13) { _fun0004_ip = 112; continue _fun0004 }
 106:
                var10 = var12.groupCardHeaderOpen;
 112:
                var8[1] = var10;
                var5['style'] = var8;
                var8 = var9 != var18;
                var9 = null;
                if(!var8) { _fun0004_ip = 214; continue _fun0004 }
 129:
                var11 = _closure1_slot19;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 21;
                var8 = var17[var14];
                var10 = var16.bind(var4)(var8);
                var8 = {'resizeMode': 'contain', 'source': null, 'disableColor': true};
                var8['source'] = var18;
                var14 = var17[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.Sizes;
                var14 = var14.LARGE;
                var8['size'] = var14;
                var14 = var12.giftIcon;
                var8['style'] = var14;
                var9 = var11.bind(var4)(var10, var8);
 214:
                var8 = new Array(3);
                var8[0] = var9;
                var14 = _closure1_slot20;
                var10 = _closure1_slot9;
                var9 = {};
                var11 = var12.titleContainer;
                var9['style'] = var11;
                var11 = _closure1_slot19;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = 18;
                var16 = var17[var18];
                var16 = var21.bind(var4)(var16);
                var19 = var16.Text;
                var16 = {'variant': 'heading-sm/semibold', 'color': 'header-primary', 'accessibilityRole': 'header'};
                var20 = arg2;
                var16['children'] = var20;
                var19 = var11.bind(var4)(var19, var16);
                var16 = new Array(2);
                var16[0] = var19;
                var18 = var17[var18];
                var18 = var21.bind(var4)(var18);
                var19 = var18.Text;
                var18 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
                var20 = var12.subtitle;
                var18['style'] = var20;
                var20 = 19;
                var22 = var17[var20];
                var22 = var21.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var20 = var17[var20];
                var20 = var21.bind(var4)(var20);
                var20 = var20.t;
                var21 = var20.zMcvcH;
                var20 = {};
                var24 = var24.length;
                var20['copies'] = var24;
                var20 = var22.bind(var23)(var21, var20);
                var18['children'] = var20;
                var18 = var11.bind(var4)(var19, var18);
                var16[1] = var18;
                var9['children'] = var16;
                var9 = var14.bind(var4)(var10, var9);
                var8[1] = var9;
                var14 = _closure1_slot1;
                var16 = 21;
                var9 = var17[var16];
                var10 = var14.bind(var4)(var9);
                var9 = {};
                var18 = var12.rowArrow;
                var9['style'] = var18;
                var16 = var17[var16];
                var16 = var14.bind(var4)(var16);
                var16 = var16.Sizes;
                var16 = var16.LARGE;
                var9['size'] = var16;
                var16 = _closure1_slot2;
                if(var13) { _fun0004_ip = 505; continue _fun0004 }
 496:
                var13 = 23;
                var13 = var16[var13];
                _fun0004_ip = 512; continue _fun0004;
 505:
                var15 = 22;
                var13 = var16[var15];
 512:
                var13 = var14.bind(var4)(var13);
                var9['source'] = var13;
                var12 = var12.arrow;
                var12 = var12.color;
                var9['color'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCardHeaderThumbnail';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var4 = arg2;
                var2 = _closure1_slot18;
                var2 = var2.STANDARD_BOX;
                if(!(var2 !== var4)) { _fun0005_ip = 493; continue _fun0005 }
 26:
                var2 = _closure1_slot18;
                var2 = var2.CAKE;
                if(!(var2 !== var4)) { _fun0005_ip = 469; continue _fun0005 }
 43:
                var2 = _closure1_slot18;
                var2 = var2.CHEST;
                if(!(var2 !== var4)) { _fun0005_ip = 445; continue _fun0005 }
 60:
                var2 = _closure1_slot18;
                var2 = var2.COFFEE;
                if(!(var2 !== var4)) { _fun0005_ip = 421; continue _fun0005 }
 77:
                var2 = _closure1_slot18;
                var2 = var2.SEASONAL_STANDARD_BOX;
                if(!(var2 !== var4)) { _fun0005_ip = 397; continue _fun0005 }
 94:
                var2 = _closure1_slot18;
                var2 = var2.SEASONAL_CAKE;
                if(!(var2 !== var4)) { _fun0005_ip = 373; continue _fun0005 }
 111:
                var2 = _closure1_slot18;
                var2 = var2.SEASONAL_CHEST;
                if(!(var2 !== var4)) { _fun0005_ip = 349; continue _fun0005 }
 128:
                var2 = _closure1_slot18;
                var2 = var2.SEASONAL_COFFEE;
                if(!(var2 !== var4)) { _fun0005_ip = 325; continue _fun0005 }
 145:
                var2 = _closure1_slot18;
                var2 = var2.NITROWEEN_STANDARD;
                if(!(var2 !== var4)) { _fun0005_ip = 294; continue _fun0005 }
 162:
                var2 = _closure1_slot17;
                var2 = var2.TIER_0;
                if(!(var2 !== var3)) { _fun0005_ip = 270; continue _fun0005 }
 176:
                var2 = _closure1_slot17;
                var2 = var2.TIER_1;
                if(!(var2 !== var3)) { _fun0005_ip = 246; continue _fun0005 }
 190:
                var2 = _closure1_slot17;
                var2 = var2.TIER_2;
                if(!(var2 !== var3)) { _fun0005_ip = 222; continue _fun0005 }
 204:
                var2 = _closure1_slot17;
                var2 = var2.LEGACY;
                if(!(var2 !== var3)) { _fun0005_ip = 222; continue _fun0005 }
 218:
                var2 = null;
                return var2;
 222:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 35;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 246:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 34;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 270:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 33;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 294:
                var2 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 32;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['uri'] = var3;
                return var2;
 325:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 31;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 349:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 30;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 373:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 29;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 397:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 421:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 27;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 445:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 469:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 25;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                return var2;
 493:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderCardHeader';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var9 = arg1;
                var5 = this;
                var1 = var5.props;
                var12 = var1.application;
                var8 = var1.subscriptionPlan;
                var2 = var1.giftStyle;
                var6 = var9.id;
                var10 = var9.name;
                var1 = var5.getCardHeaderThumbnail;
                var4 = var1.bind(var5)(var6, var2);
                var1 = global;
                var7 = var1.Object;
                var3 = var7.values;
                var1 = _closure1_slot17;
                var3 = var3.bind(var7)(var1);
                var1 = var3.includes;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(var3) { _fun0006_ip = 139; continue _fun0006 }
 92:
                var6 = var1 == var12;
                var3 = null;
                if(var6) { _fun0006_ip = 137; continue _fun0006 }
 101:
                var7 = var5.renderHeader;
                var11 = var12.getIconSource;
                var6 = 32;
                var11 = var11.bind(var12)(var6);
                var6 = var4;
                if(!(var1 != var11)) { _fun0006_ip = 131; continue _fun0006 }
 128:
                var6 = var11;
 131:
                var3 = var7.bind(var5)(var6, var10);
 137:
                return var3;
 139:
                if(!(var1 != var8)) { _fun0006_ip = 303; continue _fun0006 }
 146:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 19;
                var3 = var3[var12];
                var11 = undefined;
                var3 = var6.bind(var11)(var3);
                var7 = var3.intl;
                var6 = var7.formatToPlainString;
                var10 = var8.interval;
                var3 = _closure1_slot16;
                var3 = var3.MONTH;
                if(!(var10 !== var3)) { _fun0006_ip = 230; continue _fun0006 }
 198:
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var10.bind(var11)(var3);
                var3 = var3.t;
                var3 = var3.Vd3Iu7;
                _fun0006_ip = 260; continue _fun0006;
 230:
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var12];
                var2 = var10.bind(var11)(var2);
                var2 = var2.t;
                var3 = var2.rCJvqq;
 260:
                var2 = {};
                var9 = var9.name;
                var2['skuName'] = var9;
                var8 = var8.intervalCount;
                var2['intervalCount'] = var8;
                var3 = var6.bind(var7)(var3, var2);
                var2 = var5.renderHeader;
                var2 = var2.bind(var5)(var4, var3);
                return var2;
 303:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var19 = this;
                var2 = _closure1_slot21;
                var1 = var19.context;
                var4 = undefined;
                var14 = var2.bind(var4)(var1);
                var1 = var19.props;
                var15 = var1.entitlements;
                var18 = var1.giftCodes;
                var6 = var1.sku;
                var _closure3_slot0 = var6;
                var10 = var1.isFetching;
                var1 = var19.state;
                var7 = var1.isOpen;
                var3 = _closure1_slot20;
                var2 = _closure1_slot9;
                var1 = {};
                var5 = var14.giftGroupCard;
                var1['style'] = var5;
                var5 = var19.renderCardHeader;
                var6 = var5.bind(var19)(var6);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                if(!var7) { _fun0007_ip = 254; continue _fun0007 }
 117:
                var9 = _closure1_slot19;
                var8 = _closure1_slot9;
                var7 = {};
                if(var10) { _fun0007_ip = 218; continue _fun0007 }
 130:
                var13 = _closure1_slot20;
                var10 = _closure1_slot8;
                var12 = var10.Fragment;
                var10 = {};
                var20 = var18.length;
                var15 = var15.length;
                var15 = var20 < var15;
                var17 = null;
                if(!var15) { _fun0007_ip = 177; continue _fun0007 }
 165:
                var15 = var19.renderGenerateGiftCodeRow;
                var17 = var15.bind(var19)();
 177:
                var15 = new Array(2);
                var15[0] = var17;
                var17 = var18.map;
                var16 = function(arg1, arg2) {
                    var1 = arg1;
                    var5 = _closure1_slot19;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 36;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['giftCode'] = var1;
                    var6 = _closure3_slot0;
                    var2['sku'] = var6;
                    var7 = 0;
                    var6 = arg2;
                    var6 = var7 === var6;
                    var2['isFirst'] = var6;
                    var1 = var1.code;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var16 = var17.bind(var18)(var16);
                var15[1] = var16;
                var10['children'] = var15;
                var10 = var13.bind(var4)(var12, var10);
                _fun0007_ip = 244; continue _fun0007;
 218:
                var13 = _closure1_slot19;
                var12 = _closure1_slot10;
                var11 = {};
                var14 = var14.loading;
                var11['style'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 244:
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 254:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var7 = 37;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var4['contextType'] = var7;
    var7 = 38;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.connectStores;
    var7 = new Array(5);
    var7[0] = var14;
    var7[1] = var13;
    var7[2] = var12;
    var7[3] = var11;
    var7[4] = var10;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.skuId;
            var6 = var1.subscriptionPlanId;
            var1 = var1.giftStyle;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot15;
            var1 = var4.get;
            var5 = var1.bind(var4)(var7);
            var4 = null;
            if(!(var4 != var5)) { _fun0008_ip = 247; continue _fun0008 }
 53:
            var1 = {};
            var1['sku'] = var5;
            var9 = _closure1_slot14;
            var8 = var9.getUserGiftCodesFetchingForSKUAndPlan;
            var8 = var8.bind(var9)(var7, var6);
            var1['isFetching'] = var8;
            var8 = var9.getUserGiftCodesLoadedAtForSKUAndPlan;
            var8 = var8.bind(var9)(var7, var6);
            var1['loadedAt'] = var8;
            var9 = _closure1_slot12;
            var8 = var9.getApplication;
            var5 = var5.applicationId;
            var5 = var8.bind(var9)(var5);
            var1['application'] = var5;
            var5 = var4 != var6;
            var4 = null;
            if(!var5) { _fun0008_ip = 168; continue _fun0008 }
 135:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 39;
            var8 = var8[var5];
            var5 = undefined;
            var8 = var9.bind(var5)(var8);
            var5 = var8.getOrFetchSubscriptionPlan;
            var4 = var5.bind(var8)(var6);
 168:
            var1['subscriptionPlan'] = var4;
            var5 = _closure1_slot14;
            var4 = var5.getForGifterSKUAndPlan;
            var8 = _closure1_slot13;
            var3 = var8.getId;
            var3 = var3.bind(var8)();
            var5 = var4.bind(var5)(var3, var7, var6);
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.isClaimed;
                var1 = !var1;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.giftStyle;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['giftCodes'] = var2;
            return var1;
 247:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var12 = 'SKU was unavailable while rendering gift.';
            var13 = var2;
            var1 = new var13[var3](var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var2 = var8.bind(var9)(var7, var2);
    var2 = var2.bind(var1)(var4);
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/EntitlementGiftGroupCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();