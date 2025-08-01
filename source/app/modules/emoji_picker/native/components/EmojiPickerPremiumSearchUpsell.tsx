// app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var9;
    var5 = function useEmojiPickerPremiumSearchUpsellViewed(arg1) {
        var2 = arg1;
        var7 = var2.guildId;
        var _closure2_slot0 = var7;
        var8 = var2.analyticsLocations;
        var _closure2_slot1 = var8;
        var6 = var2.useTier0UpsellContent;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var3 = false;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot3 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot3;
                var1 = var1.current;
                if(var1) { _fun0001_ip = 188; continue _fun0001 }
 18:
                var2 = _closure2_slot3;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.PREMIUM_UPSELL_VIEWED;
                var1 = {};
                var7 = _closure1_slot10;
                var7 = var7.EMOJI_PICKER_SEARCH;
                var1['type'] = var7;
                var7 = {};
                var9 = _closure2_slot0;
                var8 = null;
                if(!(var8 == var9)) { _fun0001_ip = 110; continue _fun0001 }
 98:
                var8 = _closure1_slot7;
                var8 = var8.DM_CHANNEL;
                _fun0001_ip = 120; continue _fun0001;
 110:
                var9 = _closure1_slot7;
                var8 = var9.GUILD_CHANNEL;
 120:
                var7['page'] = var8;
                var8 = _closure1_slot8;
                var8 = var8.EMOJI_PICKER_POPOUT;
                var7['section'] = var8;
                var1['location'] = var7;
                var7 = _closure2_slot1;
                var1['location_stack'] = var7;
                var5 = _closure2_slot2;
                var6 = _closure1_slot9;
                if(var5) { _fun0001_ip = 171; continue _fun0001 }
 163:
                var5 = var6.TIER_2;
                _fun0001_ip = 177; continue _fun0001;
 171:
                var5 = var6.TIER_0;
 177:
                var1['sku_id'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 188:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot15 = var5;
    var4 = function useEmojiPickerPremiumSearchUpsellClick(arg1) {
        var2 = arg1;
        var6 = var2.analyticsLocations;
        var _closure2_slot0 = var6;
        var5 = var2.useTier0UpsellContent;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var1 = null;
                var1 = var1 == var4;
                if(var1) { _fun0002_ip = 58; continue _fun0002 }
 25:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.canUseEmojisEverywhere;
                var1 = var2.bind(var3)(var4);
 58:
                if(var1) { _fun0002_ip = 220; continue _fun0002 }
 64:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 10;
                var2 = var1[var2];
                var8 = undefined;
                var4 = var3.bind(var8)(var2);
                var2 = var4.hideActionSheet;
                var2 = var2.bind(var4)();
                var2 = 11;
                var2 = var1[var2];
                var4 = var3.bind(var8)(var2);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 13;
                var2 = var1[var2];
                var5 = var5.bind(var8)(var2);
                var2 = 12;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var8)(var2, var1);
                var1 = {};
                var7 = _closure2_slot0;
                var1['analyticsLocations'] = var7;
                var5 = _closure2_slot1;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 14;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.PremiumFeatureCardOrder;
                if(var5) { _fun0002_ip = 203; continue _fun0002 }
 195:
                var5 = var6.TIER_2_LEADING;
                _fun0002_ip = 209; continue _fun0002;
 203:
                var5 = var6.TIER_0_LEADING;
 209:
                var1['premiumFeatureCardOrder'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 220:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var6);
    var1 = 0;
    var7 = var9[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var10 = var6.bind(var1)(var7);
    var _closure1_slot3 = var10;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var15.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var6.AnalyticsPages;
    var _closure1_slot7 = var7;
    var6 = var6.AnalyticsSections;
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.PremiumSubscriptionSKUs;
    var _closure1_slot9 = var7;
    var7 = var6.PremiumUpsellTypes;
    var _closure1_slot10 = var7;
    var6 = var6.SubscriptionPlans;
    var _closure1_slot11 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.jsx;
    var _closure1_slot12 = var7;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 6;
    var6 = var9[var6];
    var12 = var8.bind(var1)(var6);
    var11 = var12.createStyles;
    var7 = {};
    var6 = {};
    var14 = 7;
    var13 = var9[var14];
    var13 = var15.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var6['paddingTop'] = var13;
    var7['container'] = var6;
    var13 = {'height': 56, 'padding': null, 'borderRadius': null, 'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'alignContent': 'center'};
    var6 = 56;
    var16 = var9[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13['padding'] = var16;
    var16 = var9[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var13['borderRadius'] = var16;
    var14 = var9[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var13['backgroundColor'] = var14;
    var7['premiumSearchUpsell'] = var13;
    var13 = {'flex': 0.8, 'flexDirection': 'row'};
    var7['premiumSearchUpsellContent'] = var13;
    var13 = {'marginRight': 8, 'alignSelf': 'center'};
    var7['nitroIcon'] = var13;
    var7 = var11.bind(var12)(var7);
    var _closure1_slot14 = var7;
    var7 = var10.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var11 = arg1;
            var2 = _closure1_slot14;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot16;
            var7 = var2.bind(var4)(var11);
            var2 = _closure1_slot15;
            var2 = var2.bind(var4)(var11);
            var5 = _closure1_slot13;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var6.premiumSearchUpsellContent;
            var2['style'] = var8;
            var13 = _closure1_slot12;
            var14 = _closure1_slot1;
            var9 = _closure1_slot2;
            var12 = 15;
            var8 = var9[var12];
            var10 = var14.bind(var4)(var8);
            var8 = {};
            var15 = var6.nitroIcon;
            var8['style'] = var15;
            var15 = 16;
            var15 = var9[var15];
            var15 = var14.bind(var4)(var15);
            var8['source'] = var15;
            var15 = true;
            var8['disableColor'] = var15;
            var12 = var9[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.Sizes;
            var12 = var12.MEDIUM;
            var8['size'] = var12;
            var10 = var13.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var10 = _closure1_slot0;
            var12 = 17;
            var9 = var9[var12];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'lineClamp': 2, 'variant': 'text-sm/medium', 'color': 'interactive-active'};
            var14 = var11.useTier0UpsellContent;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 18;
            var15 = var22[var16];
            var15 = var21.bind(var4)(var15);
            var19 = var15.intl;
            if(var14) { _fun0003_ip = 255; continue _fun0003 }
 221:
            var15 = var19.string;
            var14 = var22[var16];
            var14 = var21.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.5t3lw8;
            var14 = var15.bind(var19)(var14);
            _fun0003_ip = 326; continue _fun0003;
 255:
            var18 = var19.formatToPlainString;
            var15 = var22[var16];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15.kWBwlJ;
            var15 = {};
            var20 = 9;
            var20 = var22[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.getTierDisplayName;
            var20 = _closure1_slot11;
            var20 = var20.PREMIUM_MONTH_TIER_0;
            var20 = var21.bind(var22)(var20);
            var15['planName'] = var20;
            var14 = var18.bind(var19)(var17, var15);
 326:
            var9['children'] = var14;
            var9 = var13.bind(var4)(var10, var9);
            var8[1] = var9;
            var2['children'] = var8;
            var10 = var5.bind(var4)(var3, var2);
            var5 = _closure1_slot13;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var2 = var9.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var13 = var6.premiumSearchUpsell;
            var2['style'] = var13;
            var13 = 'button';
            var2['accessibilityRole'] = var13;
            var2['onPress'] = var7;
            var7 = new Array(2);
            var7[0] = var10;
            var10 = _closure1_slot12;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/medium', 'color': 'text-link'};
            var11 = var11.useTier0UpsellContent;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            if(var11) { _fun0003_ip = 507; continue _fun0003 }
 494:
            var11 = var12.pj0XBA;
            var11 = var13.bind(var14)(var11);
            _fun0003_ip = 518; continue _fun0003;
 507:
            var12 = var12.9CM5v7;
            var11 = var13.bind(var14)(var12);
 518:
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7[1] = var8;
            var2['children'] = var7;
            var5 = var5.bind(var4)(var3, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = false;
            var1['collapsable'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var10)(var2);
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx';
    var7 = var8.bind(var9)(var7);
    var3['EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT'] = var6;
    var3['useEmojiPickerPremiumSearchUpsellViewed'] = var5;
    var3['useEmojiPickerPremiumSearchUpsellClick'] = var4;
    var3['PremiumSearchUpsell'] = var2;
    return var1;
})();