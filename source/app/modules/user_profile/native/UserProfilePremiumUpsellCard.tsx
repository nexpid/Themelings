// app/modules/user_profile/native/UserProfilePremiumUpsellCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot4 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot5 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot6 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'position': 'absolute', 'bottom': null, 'start': 0, 'end': 0};
        var3 = arg1;
        var2['bottom'] = var3;
        var1['container'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfilePremiumUpsellCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfilePremiumUpsellCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.isTryItOut;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = var2.bottom;
            var2 = _closure1_slot9;
            var7 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var3 = 6;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var6.bind(var4)(var3);
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.USER_SETTINGS_USER_PROFILE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var3.USER_SETTINGS_TRY_OUT_PREMIUM;
case 4:
            var3 = new Array(1);
            var3[0] = var6;
            var3 = var5.bind(var4)(var3);
            var10 = var3.analyticsLocations;
            _closure2_slot1 = var10;
            var6 = _closure1_slot3;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.setSection;
                var2 = _closure1_slot7;
                var3 = var2.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = var2.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.pushLazy;
                var7 = _closure1_slot0;
                var2 = 11;
                var2 = var8[var2];
                var6 = var7.bind(var1)(var2);
                var2 = 10;
                var3 = var8[var2];
                var2 = var8.paths;
                var3 = var6.bind(var1)(var3, var2);
                var2 = {};
                var6 = {};
                var10 = _closure1_slot5;
                var10 = var10.USER_SETTINGS;
                var6['page'] = var10;
                var10 = _closure1_slot6;
                var10 = var10.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT;
                var6['section'] = var10;
                var9 = _closure1_slot4;
                var9 = var9.BUTTON_CTA;
                var6['object'] = var9;
                var2['analyticsLocation'] = var6;
                var6 = _closure2_slot1;
                var2['analyticsLocations'] = var6;
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.PremiumFeatureCardOrder;
                var6 = var6.TIER_2_LEADING;
                var2['premiumFeatureCardOrder'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 13;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var13 = 14;
            var11 = var7[var13];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var7[var13];
            var7 = var10.bind(var4)(var7);
            var10 = var7.t;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = var10.PxUx8f;
            var7 = var11.bind(var12)(var7);
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var10 = var10.pj0XBA;
            var7 = var11.bind(var12)(var10);
case 7:
            var1['ctaText'] = var7;
            var7 = true;
            var1['showLinearGradient'] = var7;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6;
case 8:
            var1['onPress'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 15;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/normal', 'maxFontSizeMultiplier': 2.5};
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var9.Tii53d;
            var8 = var10.bind(var11)(var8);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var9 = var9.ZFR9LC;
            var8 = var10.bind(var11)(var9);
case 12:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UserProfilePremiumUpsellCard'] = var2;
    return var1;
})();