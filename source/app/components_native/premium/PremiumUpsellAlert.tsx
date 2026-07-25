// app/components_native/premium/PremiumUpsellAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var4 = function PremiumUpsellItem(arg1) {
        var2 = arg1;
        var1 = var2.upsellItem;
        var14 = var2.alertWidth;
        var16 = var2.imageStyle;
        var6 = var2.style;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 14;
        var2 = var11[var2];
        var4 = undefined;
        var5 = var7.bind(var4)(var2);
        var3 = var5.useLegacyClassComponentStyles;
        var2 = _closure1_slot22;
        var10 = var3.bind(var5)(var2);
        var13 = var1.image;
        var15 = var1.title;
        var9 = var1.description;
        var3 = _closure1_slot20;
        var2 = _closure1_slot10;
        var1 = {};
        var12 = var10.premiumUpsellContainer;
        var5 = new Array(3);
        var5[0] = var12;
        var12 = {};
        var12['width'] = var14;
        var5[1] = var12;
        var5[2] = var6;
        var1['style'] = var5;
        var12 = _closure1_slot19;
        var6 = _closure1_slot11;
        var5 = {};
        var17 = var10.upsellImage;
        var14 = new Array(2);
        var14[0] = var17;
        var14[1] = var16;
        var5['style'] = var14;
        var5['source'] = var13;
        var13 = 'contain';
        var5['resizeMode'] = var13;
        var6 = var12.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var14 = _closure1_slot19;
        var6 = 16;
        var12 = var11[var6];
        var12 = var7.bind(var4)(var12);
        var13 = var12.Text;
        var12 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header'};
        var16 = var10.premiumUpsellTitle;
        var12['style'] = var16;
        var12['children'] = var15;
        var12 = var14.bind(var4)(var13, var12);
        var5[1] = var12;
        var8 = _closure1_slot19;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var10 = var10.premiumUpsellDescription;
        var6['style'] = var10;
        var10 = 'text-md/medium';
        var6['variant'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var4;
    var1 = function GlobalEmojiUpsell(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.alertWidth;
            var1 = var1.useTier0Description;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.usePremiumTrialOffer;
            var3 = var2.bind(var3)();
            var6 = null;
            var7 = var6 == var3;
            var2 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var3.subscription_trial;
            var7 = var6 == var3;
            var2 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            var2 = var3.sku_id;
case 6:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 19;
            var9 = var3[var11];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var3 = var3[var11];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var7 = var3.KEn+LY;
            var3 = {};
            var3 = var9.bind(var10)(var7, var3);
            if(!(var6 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var3;
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = var14[var11];
            var1 = var13.bind(var4)(var1);
            var10 = var1.intl;
            var9 = var10.format;
            var1 = var14[var11];
            var1 = var13.bind(var4)(var1);
            var1 = var1.t;
            var7 = var1.kWBwlJ;
            var1 = {};
            var12 = 20;
            var12 = var14[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getPremiumTypeDisplayName;
            var12 = _closure1_slot18;
            var12 = var12.TIER_0;
            var12 = var13.bind(var14)(var12);
            var1['planName'] = var12;
            var6 = var9.bind(var10)(var7, var1);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var1 = _closure1_slot17;
            var1 = var1.TIER_0;
            if(!(var1 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot17;
            var1 = var1.TIER_2;
            var6 = var3;
            if(!(var1 === var2)) { _fun0002_ip = 10; continue _fun0002 }
case 14:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = var12[var11];
            var1 = var10.bind(var4)(var1);
            var7 = var1.intl;
            var3 = var7.format;
            var1 = var12[var11];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1["1P7x8p"];
            var1 = {};
            var9 = 20;
            var9 = var12[var9];
            var12 = var10.bind(var4)(var9);
            var10 = var12.getPremiumTypeDisplayName;
            var9 = _closure1_slot18;
            var9 = var9.TIER_2;
            var9 = var10.bind(var12)(var9);
            var1['planName'] = var9;
            var6 = var3.bind(var7)(var2, var1);
            _fun0002_ip = 10; continue _fun0002;
case 12:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = var12[var11];
            var1 = var10.bind(var4)(var1);
            var7 = var1.intl;
            var3 = var7.format;
            var1 = var12[var11];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1["1P7x8p"];
            var1 = {};
            var9 = 20;
            var9 = var12[var9];
            var12 = var10.bind(var4)(var9);
            var10 = var12.getPremiumTypeDisplayName;
            var9 = _closure1_slot18;
            var9 = var9.TIER_0;
            var9 = var10.bind(var12)(var9);
            var1['planName'] = var9;
            var6 = var3.bind(var7)(var2, var1);
case 10:
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['alertWidth'] = var5;
            var5 = {};
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 21;
            var9 = var7[var9];
            var9 = var10.bind(var4)(var9);
            var5['image'] = var9;
            var10 = _closure1_slot0;
            var8 = var7[var11];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var11];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.UNtcBV;
            var7 = var8.bind(var9)(var7);
            var5['title'] = var7;
            var5['description'] = var6;
            var1['upsellItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function AnimatedEmojiUpsell(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.alertWidth;
            var6 = var2.useTier0Description;
            var4 = _closure1_slot19;
            var3 = _closure1_slot27;
            var2 = {};
            var2['alertWidth'] = var1;
            var5 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 22;
            var7 = var8[var1];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var5['image'] = var7;
            var12 = _closure1_slot0;
            var7 = 19;
            var9 = var8[var7];
            var9 = var12.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var7];
            var8 = var12.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.F6rmyq;
            var8 = var9.bind(var10)(var8);
            var5['title'] = var8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = var14[var7];
            var8 = var13.bind(var1)(var8);
            var10 = var8.intl;
            var9 = var10.format;
            var7 = var14[var7];
            var7 = var13.bind(var1)(var7);
            var7 = var7.t;
            if(var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var8 = var7.JxTzzb;
            var6 = {};
            var6 = var9.bind(var10)(var8, var6);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var8 = var7["1a36ee"];
            var7 = {};
            var12 = 20;
            var12 = var14[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.getPremiumTypeDisplayName;
            var11 = _closure1_slot18;
            var11 = var11.TIER_0;
            var11 = var12.bind(var13)(var11);
            var7['planName'] = var11;
            var6 = var9.bind(var10)(var8, var7);
case 17:
            var5['description'] = var6;
            var2['upsellItem'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function PremiumGuildIdentityUpsell(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.alertWidth;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var2 = var3.useLegacyClassComponentStyles;
            var1 = _closure1_slot22;
            var5 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 23;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['alertWidth'] = var7;
            var5 = var5.largerUpsellImage;
            var1['imageStyle'] = var5;
            var5 = {};
            var7 = 24;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isThemeDark;
            var7 = var7.bind(var8)(var9);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var7) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var7 = 26;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var8 = 25;
            var8 = var10[var8];
            var7 = var9.bind(var4)(var8);
case 20:
            var5['image'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 19;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.OVN9la;
            var7 = var8.bind(var11)(var7);
            var5['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.j0dyAG;
            var6 = var7.bind(var8)(var6);
            var5['description'] = var6;
            var1['upsellItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function CustomProfilesUpsell(arg1) {
        var1 = arg1;
        var7 = var1.alertWidth;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 14;
        var1 = var10[var1];
        var4 = undefined;
        var3 = var9.bind(var4)(var1);
        var2 = var3.useLegacyClassComponentStyles;
        var1 = _closure1_slot22;
        var5 = var2.bind(var3)(var1);
        var3 = _closure1_slot19;
        var2 = _closure1_slot27;
        var1 = {};
        var1['alertWidth'] = var7;
        var5 = var5.customProfileUpsellImage;
        var1['imageStyle'] = var5;
        var5 = {};
        var7 = _closure1_slot1;
        var6 = 27;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var5['image'] = var6;
        var6 = 19;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.rTY76D;
        var7 = var8.bind(var11)(var7);
        var5['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6["2LCxoj"];
        var6 = var7.bind(var8)(var6);
        var5['description'] = var6;
        var1['upsellItem'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function CustomAppIconsUpsell(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.alertWidth;
            var8 = var1.imageSource;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 14;
            var1 = var9[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var1);
            var3 = var7.useLegacyClassComponentStyles;
            var1 = _closure1_slot22;
            var10 = var3.bind(var7)(var1);
            var1 = _closure1_slot16;
            var7 = var1.bind(var4)();
            var3 = var7.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isPremium;
                return var1;
            };
            var3 = var3.bind(var7)(var1);
            var1 = 0;
            var1 = var3[var1];
            var7 = var1.iconSource;
            var3 = _closure1_slot1;
            var1 = 23;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = 24;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeLight;
            var11 = var1.bind(var2)(var3);
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['alertWidth'] = var5;
            var9 = var10.customAppIconsUpsellImage;
            var5 = new Array(2);
            var5[0] = var9;
            var9 = undefined;
            if(!var11) { _fun0005_ip = 15; continue _fun0005 }
case 21:
            var9 = var10.customAppIconUpsellLightImage;
case 15:
            var5[1] = var9;
            var1['imageStyle'] = var5;
            var5 = {};
            var9 = null;
            if(!(var9 != var8)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var7 = var8;
case 22:
            var5['image'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 19;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7["1B1Cyn"];
            var7 = var8.bind(var11)(var7);
            var5['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.VL5TYT;
            var6 = var7.bind(var8)(var6);
            var5['description'] = var6;
            var1['upsellItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function GlobalStickerUpsell(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.alertWidth;
            var6 = var2.useTier0Description;
            var4 = _closure1_slot19;
            var3 = _closure1_slot27;
            var2 = {};
            var2['alertWidth'] = var1;
            var5 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 28;
            var7 = var8[var1];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var5['image'] = var7;
            var12 = _closure1_slot0;
            var7 = 19;
            var9 = var8[var7];
            var9 = var12.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var7];
            var8 = var12.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.jn2mBl;
            var8 = var9.bind(var10)(var8);
            var5['title'] = var8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = var14[var7];
            var8 = var13.bind(var1)(var8);
            var10 = var8.intl;
            var9 = var10.format;
            var7 = var14[var7];
            var7 = var13.bind(var1)(var7);
            var7 = var7.t;
            if(var6) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var8 = var7["0qJYHK"];
            var6 = {};
            var6 = var9.bind(var10)(var8, var6);
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var8 = var7["8C+FZk"];
            var7 = {};
            var12 = 20;
            var12 = var14[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.getPremiumTypeDisplayName;
            var11 = _closure1_slot18;
            var11 = var11.TIER_0;
            var11 = var12.bind(var13)(var11);
            var7['planName'] = var11;
            var6 = var9.bind(var10)(var8, var7);
case 26:
            var5['description'] = var6;
            var2['upsellItem'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function LongerMessageUpsell(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = var1.alertWidth;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 14;
            var1 = var11[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var2 = var3.useLegacyClassComponentStyles;
            var1 = _closure1_slot22;
            var5 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 23;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var1 = 29;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var10 = var1.bind(var4)();
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['alertWidth'] = var7;
            var5 = var5.largerUpsellImage;
            var1['imageStyle'] = var5;
            var5 = {};
            var7 = 24;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isThemeDark;
            var7 = var7.bind(var8)(var9);
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            if(var7) { _fun0007_ip = 16; continue _fun0007 }
case 27:
            var7 = 31;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            _fun0007_ip = 28; continue _fun0007;
case 16:
            var8 = 30;
            var8 = var11[var8];
            var7 = var9.bind(var4)(var8);
case 28:
            var5['image'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 19;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["8cjmTj"];
            var8 = var9.bind(var12)(var8);
            var5['title'] = var8;
            var8 = var11[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.moN9wh;
            var6 = {};
            var6['maxLength'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var5['description'] = var6;
            var1['upsellItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function GuildCapUpsell(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var7 = var1.alertWidth;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var2 = var3.useLegacyClassComponentStyles;
            var1 = _closure1_slot22;
            var5 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 23;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.bind(var4)();
            var3 = _closure1_slot19;
            var2 = _closure1_slot27;
            var1 = {};
            var1['alertWidth'] = var7;
            var5 = var5.largerUpsellImage;
            var1['imageStyle'] = var5;
            var5 = {};
            var7 = 24;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isThemeDark;
            var7 = var7.bind(var8)(var9);
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var7) { _fun0008_ip = 18; continue _fun0008 }
case 19:
            var7 = 33;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            _fun0008_ip = 20; continue _fun0008;
case 18:
            var8 = 32;
            var8 = var10[var8];
            var7 = var9.bind(var4)(var8);
case 20:
            var5['image'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 19;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var11 = var8.intl;
            var9 = var11.string;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.CoNXB+;
            var8 = var9.bind(var11)(var8);
            var5['title'] = var8;
            var8 = var10[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.mkXb2F;
            var6 = {};
            var6 = var8.bind(var9)(var7, var6);
            var5['description'] = var6;
            var1['upsellItem'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function UploadUpsell(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var13 = var1.item;
            var5 = var1.alertWidth;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 34;
            var1 = var3[var1];
            var4 = undefined;
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot12;
                var1 = var1.dataSavingMode;
                return var1;
            };
            var11 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot9;
            var2 = var3.useState;
            var1 = !var11;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var8 = var2[var1];
            var3 = _closure1_slot20;
            var2 = _closure1_slot21;
            var1 = {};
            var12 = _closure1_slot19;
            var9 = _closure1_slot23;
            var6 = {};
            var14 = true;
            var6['isInitial'] = var14;
            var6['upsellItem'] = var13;
            var6['alertWidth'] = var5;
            var5 = _closure1_slot15;
            var5 = var5.UPLOAD;
            var6 = var12.bind(var4)(var9, var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0009_ip = 29; continue _fun0009 }
case 30:
            var9 = _closure1_slot19;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 35;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var8 = var7.TableSwitchRow;
            var7 = {'start': true, 'end': true};
            var12 = 19;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.ix8XIj;
            var13 = var14.bind(var17)(var13);
            var7['label'] = var13;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.wC0+Ph;
            var12 = var13.bind(var14)(var12);
            var7['subLabel'] = var12;
            var7['value'] = var11;
            var10 = function onValueChange(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updatedUnsyncedSettings;
                var2 = {};
                var5 = arg1;
                var2['dataSavingMode'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onValueChange'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 29:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var2 = function PremiumUpsellAlert(arg1) {
        var1 = arg1;
        var9 = var1.initialUpsellKey;
        var _closure2_slot0 = var9;
        var14 = var1.analyticsLocation;
        var _closure2_slot1 = var14;
        var8 = var1.analyticsLocations;
        var10 = var1.analyticsProperties;
        var7 = var1.onClose;
        var1 = var1.imageSource;
        var _closure2_slot2 = var1;
        var4 = undefined;
        var _closure2_slot5 = var4;
        var _closure2_slot8 = var4;
        var1 = function getUploadAlertDescription() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var2) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                var2 = 43;
                var2 = var9[var2];
                var7 = undefined;
                var3 = var8.bind(var7)(var2);
                var2 = var3.getUserMaxFileSize;
                var1 = _closure2_slot5;
                var2 = var2.bind(var3)(var1);
                var6 = 44;
                var1 = var9[var6];
                var1 = var8.bind(var7)(var1);
                var1 = var1.BYTE_IN_KB;
                var12 = var2 / var1;
                var1 = 19;
                var2 = var9[var1];
                var2 = var8.bind(var7)(var2);
                var4 = var2.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.DUT5IC;
                var1 = {};
                var6 = var9[var6];
                var11 = var8.bind(var7)(var6);
                var10 = var11.formatSize;
                var6 = {};
                var13 = true;
                var6['useKibibytes'] = var13;
                var6 = var10.bind(var11)(var12, var6);
                var1['maxUploadStandard'] = var6;
                var6 = 20;
                var6 = var9[var6];
                var10 = var8.bind(var7)(var6);
                var7 = var10.getMaxFileSizeForPremiumType;
                var6 = _closure1_slot18;
                var6 = var6.TIER_2;
                var6 = var7.bind(var10)(var6);
                var1['maxUploadPremium'] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
case 31:
                var1 = 19;
                var2 = var9[var1];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.Z7Xb7H;
                var1 = {};
                var6 = 20;
                var10 = var9[var6];
                var12 = var8.bind(var7)(var10);
                var11 = var12.getPremiumTypeDisplayName;
                var10 = _closure1_slot18;
                var10 = var10.TIER_0;
                var10 = var11.bind(var12)(var10);
                var1['premiumPlan'] = var10;
                var6 = var9[var6];
                var7 = var8.bind(var7)(var6);
                var6 = var7.getMaxFileSizeForPremiumType;
                var5 = _closure1_slot18;
                var5 = var5.TIER_0;
                var5 = var6.bind(var7)(var5);
                var1['premiumMaxSize'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure2_slot11 = var1;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 14;
        var2 = var12[var2];
        var6 = var11.bind(var4)(var2);
        var3 = var6.useLegacyClassComponentStyles;
        var2 = _closure1_slot22;
        var2 = var3.bind(var6)(var2);
        var _closure2_slot3 = var2;
        var2 = _closure1_slot1;
        var3 = 38;
        var3 = var12[var3];
        var3 = var2.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var17 = var3.width;
        var16 = var3.height;
        var3 = global;
        var15 = var3.Math;
        var13 = var15.min;
        var6 = var3.Math;
        var3 = var6.min;
        var6 = var3.bind(var6)(var17, var16);
        var3 = 0.9;
        var6 = var3 * var6;
        var3 = _closure1_slot24;
        var6 = var13.bind(var15)(var6, var3);
        var3 = _closure1_slot25;
        var3 = var6 - var3;
        var _closure2_slot4 = var3;
        var3 = 34;
        var3 = var12[var3];
        var15 = var11.bind(var4)(var3);
        var13 = var15.useStateFromStores;
        var3 = _closure1_slot13;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure1_slot13;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var13.bind(var15)(var6, var3);
        _closure2_slot5 = var3;
        var3 = function generateUpsellItems(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 37;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getUpsellItems;
            var3 = var2.bind(var3)();
            var2 = var3.sort;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.key;
                    var2 = _closure3_slot0;
                    var1 = 1;
                    if(!(var3 === var2)) { _fun0011_ip = 33; continue _fun0011 }
case 34:
                    var1 = -1;
case 33:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var9);
        var _closure2_slot6 = var3;
        var3 = 39;
        var3 = var12[var3];
        var6 = var2.bind(var4)(var3);
        var3 = 40;
        var3 = var12[var3];
        var3 = var2.bind(var4)(var3);
        var3 = var3.PREMIUM_UPSELL_ALERT;
        var3 = var6.bind(var4)(var8, var3);
        var3 = var3.analyticsLocations;
        var _closure2_slot7 = var3;
        var6 = 41;
        var6 = var12[var6];
        var8 = var2.bind(var4)(var6);
        var6 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 42;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot14;
            var3 = var2.OPEN_MODAL;
            var2 = {};
            var6 = 'Nitro Upsell';
            var2['type'] = var6;
            var6 = _closure2_slot1;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6 = var8.bind(var4)(var6);
        var6 = 37;
        var6 = var12[var6];
        var8 = var11.bind(var4)(var6);
        var6 = var8.usePremiumUpsellConfig;
        var6 = var6.bind(var8)(var9, var3, var14);
        var9 = var6.useTier0UpsellContent;
        _closure2_slot8 = var9;
        var8 = var6.getNitroText;
        var6 = var6.onViewAllPerks;
        var13 = {};
        var13['analyticsLocation'] = var14;
        var13['analyticsProperties'] = var10;
        var13['useTier0UpsellContent'] = var9;
        var _closure2_slot9 = var13;
        var10 = _closure1_slot9;
        var9 = var10.useRef;
        var9 = var9.bind(var10)(var13);
        var _closure2_slot10 = var9;
        var13 = _closure1_slot9;
        var10 = var13.useEffect;
        var9 = function() {
            var2 = _closure2_slot10;
            var1 = _closure2_slot9;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var9 = var10.bind(var13)(var9);
        var13 = _closure1_slot9;
        var10 = var13.useEffect;
        var9 = new Array(1);
        var9[0] = var3;
        var3 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = _closure2_slot10;
                var1 = var1.current;
                var10 = var1.analyticsLocation;
                var11 = var1.analyticsProperties;
                var7 = var1.useTier0UpsellContent;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.PREMIUM_UPSELL_VIEWED;
                var2 = {};
                var12 = var2;
                var9 = copyDataProperties(var12, var11);
                var9 = 'location';
                var2[8] = var10;
                var9 = _closure2_slot7;
                var8 = 'location_stack';
                var2[7] = var9;
                var6 = _closure1_slot17;
                if(var7) { _fun0012_ip = 35; continue _fun0012 }
case 36:
                var7 = var6.TIER_2;
                _fun0012_ip = 37; continue _fun0012;
case 35:
                var7 = var6.TIER_0;
case 37:
                var6 = 'sku_id';
                var2[5] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var3 = var10.bind(var13)(var3, var9);
        var3 = _closure1_slot19;
        var1 = 45;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var9 = 46;
        var9 = var12[var9];
        var9 = var11.bind(var4)(var9);
        var9 = var9.ButtonColors;
        var9 = var9.GREEN;
        var1['confirmColor'] = var9;
        var1['confirmText'] = var8;
        var8 = function renderConfirmIcon() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = _closure1_slot19;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 47;
                var1 = var8[var1];
                var5 = undefined;
                var4 = var7.bind(var5)(var1);
                var1 = {};
                var3 = 48;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var1['source'] = var3;
                var7 = _closure2_slot3;
                var7 = var7.nitroWheel;
                var1['style'] = var7;
                var7 = 'contain';
                var1['resizeMode'] = var7;
                var1 = var6.bind(var5)(var4, var1);
                var3 = _closure2_slot0;
                var4 = _closure1_slot15;
                var4 = var4.GLOBAL_EMOJI;
                if(!(var4 !== var3)) { _fun0013_ip = 38; continue _fun0013 }
case 39:
                var4 = _closure1_slot15;
                var4 = var4.ANIMATED_EMOJI;
                if(!(var4 !== var3)) { _fun0013_ip = 38; continue _fun0013 }
case 40:
                var4 = _closure1_slot15;
                var4 = var4.CUSTOM_PROFILES;
                if(!(var4 !== var3)) { _fun0013_ip = 38; continue _fun0013 }
case 41:
                var4 = _closure1_slot15;
                var4 = var4.PREMIUM_GUILD_PROFILE;
                if(!(var4 !== var3)) { _fun0013_ip = 38; continue _fun0013 }
case 42:
                var2 = _closure1_slot15;
                var2 = var2.APP_ICONS;
                if(!(var2 !== var3)) { _fun0013_ip = 38; continue _fun0013 }
case 43:
                var2 = null;
                return var2;
case 38:
                return var1;
            }
        };
        var1['renderConfirmIcon'] = var8;
        var8 = 19;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.cpT0Cq;
        var8 = var9.bind(var10)(var8);
        var1['cancelText'] = var8;
        var1['onClose'] = var7;
        var1['onConfirm'] = var6;
        var5 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = _closure1_slot19;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 49;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot3;
                var8 = var7.carousel;
                var2['style'] = var8;
                var8 = _closure2_slot4;
                var2['width'] = var8;
                var7 = var7.pageIndicatorStyle;
                var2['pageIndicatorStyle'] = var7;
                var9 = _closure2_slot6;
                var8 = var9.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot19;
                    var4 = _closure1_slot23;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var6 = var1.key;
                    var6 = var7 === var6;
                    var3['isInitial'] = var6;
                    var3['upsellItem'] = var1;
                    var2 = _closure2_slot4;
                    var3['alertWidth'] = var2;
                    var2 = var1.key;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var2['children'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                var6 = _closure2_slot0;
                var3 = _closure1_slot15;
                var3 = var3.GLOBAL_EMOJI;
                if(!(var3 !== var6)) { _fun0014_ip = 44; continue _fun0014 }
case 45:
                var3 = _closure1_slot15;
                var3 = var3.ANIMATED_EMOJI;
                if(!(var3 !== var6)) { _fun0014_ip = 46; continue _fun0014 }
case 42:
                var3 = _closure1_slot15;
                var3 = var3.GLOBAL_STICKER;
                if(!(var3 !== var6)) { _fun0014_ip = 47; continue _fun0014 }
case 11:
                var3 = _closure1_slot15;
                var3 = var3.CUSTOM_PROFILES;
                if(!(var3 !== var6)) { _fun0014_ip = 48; continue _fun0014 }
case 49:
                var3 = _closure1_slot15;
                var3 = var3.APP_ICONS;
                if(!(var3 !== var6)) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                var3 = _closure1_slot15;
                var3 = var3.PREMIUM_GUILD_PROFILE;
                if(!(var3 !== var6)) { _fun0014_ip = 52; continue _fun0014 }
case 53:
                var3 = _closure1_slot15;
                var3 = var3.LONGER_MESSAGE;
                if(!(var3 !== var6)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
                var3 = _closure1_slot15;
                var3 = var3.GUILD_CAP;
                if(!(var3 !== var6)) { _fun0014_ip = 56; continue _fun0014 }
case 57:
                var3 = _closure1_slot15;
                var3 = var3.UPLOAD;
                if(!(var3 !== var6)) { _fun0014_ip = 58; continue _fun0014 }
case 59:
                return var2;
case 58:
                var6 = _closure1_slot19;
                var3 = _closure1_slot36;
                var2 = {};
                var7 = {};
                var8 = _closure1_slot15;
                var8 = var8.UPLOAD;
                var7['key'] = var8;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 50;
                var8 = var12[var8];
                var8 = var9.bind(var4)(var8);
                var7['image'] = var8;
                var11 = _closure1_slot0;
                var8 = 19;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var13 = var9.intl;
                var10 = var13.string;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["1EOZqw"];
                var9 = var10.bind(var13)(var9);
                var7['activeTitle'] = var9;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.tB51W4;
                var8 = var9.bind(var10)(var8);
                var7['passiveTitle'] = var8;
                var8 = _closure2_slot11;
                var8 = var8.bind(var4)();
                var7['description'] = var8;
                var2['item'] = var7;
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 56:
                var6 = _closure1_slot19;
                var3 = _closure1_slot35;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 54:
                var6 = _closure1_slot19;
                var3 = _closure1_slot34;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 52:
                var6 = _closure1_slot19;
                var3 = _closure1_slot30;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 50:
                var6 = _closure1_slot19;
                var3 = _closure1_slot32;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var7 = _closure2_slot2;
                var2['imageSource'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 48:
                var6 = _closure1_slot19;
                var3 = _closure1_slot31;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 47:
                var6 = _closure1_slot19;
                var3 = _closure1_slot33;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var7 = _closure2_slot8;
                var2['useTier0Description'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 46:
                var6 = _closure1_slot19;
                var3 = _closure1_slot29;
                var2 = {};
                var7 = _closure2_slot4;
                var2['alertWidth'] = var7;
                var7 = _closure2_slot8;
                var2['useTier0Description'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
case 44:
                var3 = _closure1_slot19;
                var2 = _closure1_slot28;
                var1 = {};
                var6 = _closure2_slot4;
                var1['alertWidth'] = var6;
                var5 = _closure2_slot8;
                var1['useTier0Description'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var5.bind(var4)();
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var15.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var16 = 2;
    var5 = var7[var16];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var9 = var7[var5];
    var5 = metroImportAll;
    var9 = var5.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.View;
    var _closure1_slot10 = var10;
    var5 = var5.Image;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.AnalyticEvents;
    var _closure1_slot14 = var10;
    var5 = var5.UpsellTypes;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.getIcons;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot17 = var10;
    var5 = var5.PremiumTypes;
    var _closure1_slot18 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot19 = var10;
    var10 = var5.jsxs;
    var _closure1_slot20 = var10;
    var5 = var5.Fragment;
    var _closure1_slot21 = var5;
    var5 = 14;
    var5 = var7[var5];
    var12 = var6.bind(var1)(var5);
    var11 = var12.createLegacyClassComponentStyles;
    var10 = {};
    var5 = {};
    var17 = 'center';
    var5['alignItems'] = var17;
    var10['carousel'] = var5;
    var5 = {};
    var5['alignItems'] = var17;
    var10['upsellContainer'] = var5;
    var5 = {'alignItems': 'center', 'paddingHorizontal': 8};
    var10['premiumUpsellContainer'] = var5;
    var5 = 32;
    var13 = {'width': 32, 'height': 32, 'marginVertical': 4294967288};
    var10['nitroWheel'] = var13;
    var13 = {'height': 80, 'width': 120};
    var10['upsellImage'] = var13;
    var13 = {'marginBottom': 8, 'textAlign': 'center'};
    var10['upsellTitle'] = var13;
    var13 = {};
    var14 = 15;
    var18 = var7[var14];
    var18 = var15.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_8;
    var13['marginVertical'] = var18;
    var13['textAlign'] = var17;
    var10['premiumUpsellTitle'] = var13;
    var13 = {};
    var13['textAlign'] = var17;
    var10['upsellDescription'] = var13;
    var13 = {};
    var13['textAlign'] = var17;
    var10['premiumUpsellDescription'] = var13;
    var13 = {};
    var17 = 16;
    var13['marginTop'] = var17;
    var10['pageIndicatorStyle'] = var13;
    var13 = {'height': 154, 'width': 226};
    var10['largerUpsellImage'] = var13;
    var13 = {'width': 240, 'height': 194};
    var10['customProfileUpsellImage'] = var13;
    var13 = {};
    var17 = 170;
    var13['height'] = var17;
    var10['loadingIndicator'] = var13;
    var13 = {};
    var17 = var7[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var13['borderColor'] = var17;
    var13['borderWidth'] = var16;
    var10['customAppIconUpsellLightImage'] = var13;
    var13 = {'height': 80, 'width': 80};
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var13['borderRadius'] = var14;
    var10['customAppIconsUpsellImage'] = var13;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot22 = var10;
    var10 = var9.PureComponent;
    var9 = function(arg1) {
        var4 = function UpsellItem() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0015_ip = 60; continue _fun0015 }
case 61:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0015_ip = 62; continue _fun0015;
case 60:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 62:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var3 = _closure1_slot22;
                var2 = var1.context;
                var4 = undefined;
                var10 = var3.bind(var4)(var2);
                var2 = var1.props;
                var1 = var2.upsellItem;
                var8 = var2.alertWidth;
                var15 = var2.isInitial;
                var11 = var1.image;
                var14 = var1.activeTitle;
                var13 = var1.passiveTitle;
                var9 = var1.description;
                var3 = _closure1_slot20;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = var10.upsellContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = {};
                var7['width'] = var8;
                var5[1] = var7;
                var1['style'] = var5;
                var8 = _closure1_slot19;
                var7 = _closure1_slot11;
                var5 = {};
                var12 = var10.upsellImage;
                var5['style'] = var12;
                var5['source'] = var11;
                var11 = 'contain';
                var5['resizeMode'] = var11;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var12 = _closure1_slot19;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 16;
                var7 = var7[var11];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
                var16 = var10.upsellTitle;
                var7['style'] = var16;
                if(!var15) { _fun0016_ip = 63; continue _fun0016 }
case 64:
                var13 = var14;
case 63:
                var7['children'] = var13;
                var7 = var12.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot19;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var10 = var10.upsellDescription;
                var6['style'] = var10;
                var10 = 'text-sm/medium';
                var6['variant'] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var9.bind(var1)(var10);
    var _closure1_slot23 = var10;
    var9 = 17;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ThemeContext;
    var10['contextType'] = var9;
    var9 = {};
    var11 = false;
    var9['isInitial'] = var11;
    var10['defaultProps'] = var9;
    var9 = 500;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var5;
    var5 = 51;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/premium/PremiumUpsellAlert.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var3['PremiumUpsellItem'] = var4;
    var3['PremiumUpsellAlert'] = var2;
    return var1;
})();