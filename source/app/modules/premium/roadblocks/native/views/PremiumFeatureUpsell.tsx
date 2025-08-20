// app/modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getPremiumUpsellType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 6;
            var3 = var2[var6];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var3 = var3.EntitlementFeatureNames;
            var3 = var3.SOUNDBOARD_EVERYWHERE;
            if(!(var3 !== var4)) { _fun0001_ip = 184; continue _fun0001 }
 47:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.EntitlementFeatureNames;
            var3 = var3.EMOJIS_EVERYWHERE;
            if(!(var3 !== var4)) { _fun0001_ip = 172; continue _fun0001 }
 80:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.EntitlementFeatureNames;
            var3 = var3.INCREASED_FILE_UPLOAD_SIZE;
            if(!(var3 !== var4)) { _fun0001_ip = 160; continue _fun0001 }
 113:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var5.bind(var2)(var3);
            var3 = var3.EntitlementFeatureNames;
            var3 = var3.APP_ICONS;
            if(!(var3 !== var4)) { _fun0001_ip = 148; continue _fun0001 }
 146:
            return var2;
 148:
            var2 = _closure1_slot8;
            var2 = var2.APP_ICON_INLINE_UPSELL;
            return var2;
 160:
            var2 = _closure1_slot8;
            var2 = var2.LARGER_FILE_UPLOAD_INLINE_UPSELL;
            return var2;
 172:
            var2 = _closure1_slot8;
            var2 = var2.EMOJI_EVERYWHERE_INLINE_UPSELL;
            return var2;
 184:
            var1 = _closure1_slot8;
            var1 = var1.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function PremiumFeatureUpsellPill(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.featureName;
            var _closure2_slot0 = var2;
            var7 = var1.showShadow;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 31; continue _fun0002 }
 29:
            var7 = true;
 31:
            var6 = var1.style;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 11;
            var1 = var11[var1];
            var5 = var8.bind(var4)(var1);
            var3 = var5.usePremiumUpsellConfig;
            var1 = 12;
            var1 = var11[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.getUpsellType;
            var1 = var1.bind(var8)(var2);
            var1 = var3.bind(var5)(var1);
            var11 = var1.useTier0UpsellContent;
            _closure2_slot1 = var11;
            var3 = var1.onViewAllPerks;
            var1 = _closure1_slot14;
            var12 = var1.bind(var4)(var11);
            _closure2_slot2 = var12;
            var1 = _closure1_slot7;
            if(var11) { _fun0002_ip = 149; continue _fun0002 }
 141:
            var5 = var1.TIER_2;
            _fun0002_ip = 155; continue _fun0002;
 149:
            var5 = var1.TIER_0;
 155:
            var13 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 7;
            var8 = var1[var18];
            var14 = var15.bind(var4)(var8);
            var8 = var14.getPremiumTypeDisplayName;
            var14 = var8.bind(var14)(var5);
            var8 = 6;
            var1 = var1[var8];
            var1 = var15.bind(var4)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.SOUNDBOARD_EVERYWHERE;
            var17 = var5;
            if(!(var1 !== var2)) { _fun0002_ip = 576; continue _fun0002 }
 227:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var4)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.EMOJIS_EVERYWHERE;
            if(!(var1 !== var2)) { _fun0002_ip = 504; continue _fun0002 }
 263:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var4)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.INCREASED_FILE_UPLOAD_SIZE;
            if(!(var1 !== var2)) { _fun0002_ip = 404; continue _fun0002 }
 296:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var5.bind(var4)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.APP_ICONS;
            var21 = undefined;
            if(!(var1 === var2)) { _fun0002_ip = 646; continue _fun0002 }
 334:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 8;
            var5 = var15[var1];
            var5 = var2.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.format;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.x2dQxM;
            var1 = {};
            var1['onClick'] = var13;
            var21 = var5.bind(var8)(var2, var1);
            _fun0002_ip = 646; continue _fun0002;
 404:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 8;
            var2 = var15[var1];
            var2 = var16.bind(var4)(var2);
            var8 = var2.intl;
            var5 = var8.format;
            var1 = var15[var1];
            var1 = var16.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.zzyLEB;
            var1 = {};
            var15 = var15[var18];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getMaxFileSizeForPremiumType;
            var15 = var15.bind(var16)(var17);
            var1['maxFileSize'] = var15;
            var1['nitroTierName'] = var14;
            var1['onClick'] = var13;
            var21 = var5.bind(var8)(var2, var1);
            _fun0002_ip = 646; continue _fun0002;
 504:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 8;
            var5 = var15[var1];
            var5 = var2.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.format;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.gMVjeX;
            var1 = {};
            var1['nitroTierName'] = var14;
            var1['onClick'] = var13;
            var21 = var5.bind(var8)(var2, var1);
            _fun0002_ip = 646; continue _fun0002;
 576:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 8;
            var5 = var15[var1];
            var5 = var2.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.format;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.tw/SSk;
            var1 = {};
            var1['nitroTierName'] = var14;
            var1['onClick'] = var13;
            var21 = var5.bind(var8)(var2, var1);
 646:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = _closure1_slot10;
            var1 = var1.PREMIUM_UPSELL_FILE_UPLOAD;
            var1 = var2.bind(var4)(var11, var3, var1);
            var17 = var1.loading;
            _closure2_slot3 = var17;
            var13 = var1.onPress;
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var12.container;
            var5 = new Array(3);
            var5[0] = var8;
            if(!var7) { _fun0002_ip = 730; continue _fun0002 }
 724:
            var7 = var12.containerShadow;
 730:
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var12.labelContainer;
            var5['style'] = var8;
            var15 = _closure1_slot12;
            var18 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 15;
            var8 = var14[var8];
            var14 = var18.bind(var4)(var8);
            var8 = {};
            var20 = _closure1_slot2;
            if(var11) { _fun0002_ip = 804; continue _fun0002 }
 795:
            var16 = 17;
            var16 = var20[var16];
            _fun0002_ip = 811; continue _fun0002;
 804:
            var19 = 16;
            var16 = var20[var19];
 811:
            var16 = var18.bind(var4)(var16);
            var8['source'] = var16;
            var16 = var12.nitroWheel;
            var8['style'] = var16;
            var16 = true;
            var8['disableColor'] = var16;
            var14 = var15.bind(var4)(var14, var8);
            var8 = new Array(2);
            var8[0] = var14;
            var20 = _closure1_slot12;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var18 = 18;
            var18 = var14[var18];
            var18 = var15.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var22 = var12.text;
            var18['style'] = var22;
            var22 = 'text-sm/medium';
            var18['variant'] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var8[1] = var18;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var6 = 19;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['disabled'] = var17;
            var6['shrink'] = var16;
            var12 = var12.button;
            var6['style'] = var12;
            var12 = 20;
            var14 = var14[var12];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ButtonSizes;
            var14 = var14.XSMALL;
            var6['size'] = var14;
            var6['onPress'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            if(var11) { _fun0002_ip = 1064; continue _fun0002 }
 1051:
            var11 = var13.8x0jKS;
            var11 = var14.bind(var15)(var11);
            _fun0002_ip = 1075; continue _fun0002;
 1064:
            var13 = var13.cM8bb2;
            var11 = var14.bind(var15)(var13);
 1075:
            var6['text'] = var11;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var10 = var11.bind(var4)(var10);
            var10 = var10.ButtonColors;
            var10 = var10.GREEN;
            var6['color'] = var10;
            var10 = function renderIcon() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot2;
                    var6 = var5.nitroWheelButton;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot3;
                    if(!var6) { _fun0003_ip = 69; continue _fun0003 }
 59:
                    var7 = _closure2_slot2;
                    var6 = var7.nitroWheelDisabled;
 69:
                    var5[1] = var6;
                    var1['style'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderIcon'] = var10;
            var9 = function renderLinearGradient() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 22;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = _closure2_slot2;
                    var8 = var8.gradient;
                    var1['style'] = var8;
                    var9 = _closure1_slot0;
                    var8 = 23;
                    var10 = var7[var8];
                    var10 = var9.bind(var3)(var10);
                    var10 = var10.HorizontalGradient;
                    var10 = var10.START;
                    var1['start'] = var10;
                    var7 = var7[var8];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.HorizontalGradient;
                    var7 = var7.END;
                    var1['end'] = var7;
                    var5 = _closure2_slot1;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.Gradients;
                    if(var5) { _fun0004_ip = 143; continue _fun0004 }
 135:
                    var5 = var6.PREMIUM_TIER_2_TRI_COLOR;
                    _fun0004_ip = 149; continue _fun0004;
 143:
                    var5 = var6.PREMIUM_TIER_0;
 149:
                    var1['colors'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderLinearGradient'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.StyleSheet;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot6 = var7;
    var7 = var4.PremiumTypes;
    var _closure1_slot7 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Colors;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {};
            var2 = {};
            var3 = 'row';
            var2['flexDirection'] = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var7 = 10;
            var8 = var4[var7];
            var6 = undefined;
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_FLOATING;
            var2['backgroundColor'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['padding'] = var8;
            var8 = 'space-between';
            var2['justifyContent'] = var8;
            var1['container'] = var2;
            var2 = {};
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.shadows;
            var11 = var4.SHADOW_HIGH;
            var12 = var2;
            var4 = copyDataProperties(var12, var11);
            var4 = _closure1_slot11;
            var5 = arg1;
            if(var5) { _fun0005_ip = 161; continue _fun0005 }
 153:
            var5 = var4.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
            _fun0005_ip = 167; continue _fun0005;
 161:
            var5 = var4.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2;
 167:
            var4 = 'shadowColor';
            var2[var4] = var5;
            var9 = 0.6;
            var4 = 'shadowOpacity';
            var2[var4] = var9;
            var1['containerShadow'] = var2;
            var2 = {'width': 20, 'height': 20};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['marginEnd'] = var8;
            var1['nitroWheel'] = var2;
            var2 = {'flexDirection': 'row', 'flexShrink': 1, 'alignItems': 'center'};
            var8 = 'center';
            var10 = var4[var7];
            var10 = var5.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_4;
            var2['marginEnd'] = var10;
            var1['labelContainer'] = var2;
            var2 = {'flexShrink': 1, 'flexWrap': 'wrap'};
            var1['text'] = var2;
            var2 = {'marginStart': 4294967294, 'width': 20, 'height': 20};
            var1['nitroWheelButton'] = var2;
            var2 = {};
            var2['opacity'] = var9;
            var1['nitroWheelDisabled'] = var2;
            var2 = {};
            var2['alignSelf'] = var8;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var1['button'] = var2;
            var2 = {};
            var3 = _closure1_slot4;
            var11 = var3.absoluteFillObject;
            var12 = var2;
            var3 = copyDataProperties(var12, var11);
            var1['gradient'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = function() {
        var1 = function animationEnterExit(arg1, arg2) {
            var8 = arg2;
            var _closure3_slot0 = var8;
            var1 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 24;
            var4 = var10[var4];
            var5 = undefined;
            var7 = var9.bind(var5)(var4);
            var6 = var7.withSpring;
            var4 = 25;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var13 = var4.springStandard;
            var4 = function l(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure3_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 27; continue _fun0006 }
 13:
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['cleanUp'] = var8;
            var4['__closure'] = var3;
            var3 = 7812030105128.0;
            var4['__workletHash'] = var3;
            var2 = _closure1_slot16;
            var4['__initData'] = var2;
            var14 = arg1;
            var12 = 'respect-motion-settings';
            var15 = var7;
            var11 = var4;
            var2 = var15[var6](var14, var13, var12, var11, var10);
            var1['opacity'] = var2;
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 24;
        var4 = var7[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = 25;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.springStandard;
        var3['springStandard'] = var4;
        var1['__closure'] = var3;
        var3 = 15470414797897.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot15;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot17 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumFeatureUpsell(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = var4.shouldShow;
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['shouldShow'] = var2;
            var19 = {};
            var18 = var4;
            var17 = var3;
            var11 = copyDataProperties(var19, var18, var17);
            var _closure2_slot0 = var11;
            var7 = _closure1_slot3;
            var2 = var7.useRef;
            var10 = false;
            var16 = var2.bind(var7)(var10);
            var _closure2_slot1 = var16;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 26;
            var2 = var13[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var14 = var2.analyticsLocations;
            var _closure2_slot2 = var14;
            var2 = _closure1_slot0;
            var3 = 27;
            var3 = var13[var3];
            var8 = var2.bind(var4)(var3);
            var3 = var8.useAnalyticsContext;
            var3 = var3.bind(var8)();
            var15 = var3.location;
            var _closure2_slot3 = var15;
            var3 = 28;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var12 = var3.bind(var4)(var5);
            var _closure2_slot4 = var12;
            var8 = var7.useCallback;
            var5 = function(arg1, arg2) {
                var4 = _closure1_slot12;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = arg2;
                var1['style'] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot19;
                var5 = {};
                var9 = arg1;
                var10 = var5;
                var8 = copyDataProperties(var10, var9);
                var5 = var7.bind(var3)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3 = new Array(0);
            var8 = var8.bind(var7)(var5, var3);
            var5 = var7.useEffect;
            var3 = new Array(5);
            var3[0] = var16;
            var3[1] = var15;
            var3[2] = var14;
            var3[3] = var12;
            var14 = var11.featureName;
            var3[4] = var14;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var2 = !var2;
                    if(!var2) { _fun0008_ip = 22; continue _fun0008 }
 18:
                    var2 = _closure2_slot4;
 22:
                    if(!var2) { _fun0008_ip = 170; continue _fun0008 }
 28:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 30;
                    var2 = var10[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot9;
                    var3 = var2.PREMIUM_UPSELL_VIEWED;
                    var2 = {};
                    var8 = _closure1_slot18;
                    var7 = _closure2_slot0;
                    var7 = var7.featureName;
                    var7 = var8.bind(var9)(var7);
                    var2['type'] = var7;
                    var7 = _closure2_slot3;
                    var2['location'] = var7;
                    var7 = _closure2_slot2;
                    var2['location_stack'] = var7;
                    var8 = _closure1_slot0;
                    var7 = 7;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.castPremiumSubscriptionAsSkuId;
                    var6 = _closure1_slot6;
                    var6 = var6.TIER_2;
                    var6 = var7.bind(var8)(var6);
                    var2['sku_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot1;
                    var1 = true;
                    var2['current'] = var1;
 170:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1, var3);
            var3 = _closure1_slot12;
            var1 = 31;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.RedesignCompatContext;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var10;
            var7 = _closure1_slot12;
            var5 = 32;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['useReducedMotion'] = var10;
            var10 = undefined;
            if(!var12) { _fun0007_ip = 289; continue _fun0007 }
 286:
            var10 = var11;
 289:
            var5['item'] = var10;
            var9 = _closure1_slot17;
            var5['entering'] = var9;
            var5['exiting'] = var9;
            var5['renderItem'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();