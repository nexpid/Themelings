// app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 24;
    var9['paddingBottom'] = var10;
    var4['wrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildBoostingMarketingOverview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = _closure1_slot13;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var9 = var1.guildId;
            var _closure2_slot0 = var9;
            var3 = var1.guildBoostSlots;
            var _closure2_slot1 = var3;
            var1 = null;
            var2 = var1 == var3;
            var13 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 0;
            var13 = var3[var2];
case 2:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 8;
            var2 = var10[var4];
            var12 = var6.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var7, var2);
            var _closure2_slot2 = var14;
            var2 = 9;
            var2 = var10[var2];
            var7 = var6.bind(var5)(var2);
            var2 = var7.useNavigation;
            var17 = var2.bind(var7)();
            var _closure2_slot3 = var17;
            var16 = _closure1_slot1;
            var2 = 10;
            var2 = var10[var2];
            var2 = var16.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var7 = var2.analyticsLocations;
            var _closure2_slot4 = var7;
            var19 = _closure1_slot4;
            var2 = var19.useState;
            var11 = false;
            var2 = var2.bind(var19)(var11);
            var23 = _closure1_slot3;
            var22 = 2;
            var2 = var23.bind(var5)(var2, var22);
            var21 = 0;
            var12 = var2[var21];
            var20 = 1;
            var2 = var2[var20];
            var _closure2_slot5 = var2;
            var2 = var19.useState;
            var2 = var2.bind(var19)(var21);
            var2 = var23.bind(var5)(var2, var22);
            var21 = var2[var21];
            var _closure2_slot6 = var21;
            var2 = var2[var20];
            var _closure2_slot7 = var2;
            var2 = var19.useRef;
            var2 = var2.bind(var19)(var11);
            var _closure2_slot8 = var2;
            var2 = 11;
            var2 = var10[var2];
            var11 = var16.bind(var5)(var2);
            var2 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var11.bind(var5)(var2);
            var _closure2_slot9 = var2;
            var11 = 12;
            var11 = var10[var11];
            var16 = var16.bind(var5)(var11);
            var11 = {};
            var19 = true;
            var11['forceFetch'] = var19;
            var11 = var16.bind(var5)(var11);
            var4 = var10[var4];
            var16 = var6.bind(var5)(var4);
            var10 = var16.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var10.bind(var16)(var6, var4);
            if(!(var1 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 13;
            var6 = var16[var6];
            var6 = var10.bind(var5)(var6);
            var6 = var6.PremiumSubscriptionGroupRole;
            var10 = var6.UNSPECIFIED;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = var4.premiumGroupRole;
case 6:
            var16 = _closure1_slot4;
            var6 = var16.useLayoutEffect;
            var4 = new Array(3);
            var4[0] = var17;
            var4[1] = var3;
            var17 = var1 == var14;
            var3 = undefined;
            if(var17) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = var14.name;
case 7:
            var4[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var6 = var7 != var1;
                    if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = 0;
                    var6 = var2 > var1;
case 9:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = '';
                    var4 = var5;
                    if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure2_slot2;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var8 = _closure2_slot2;
                    var6 = var8.name;
case 13:
                    var7 = var7 != var6;
                    if(!var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var5 = var6;
case 15:
                    var4 = var5;
case 11:
                    var1['title'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var16)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useEffect;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var7;
            var3[2] = var2;
            var2 = function() {
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.MODAL_DISMISSED;
                    var2 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.PREMIUM_GUILD_USER_MODAL;
                    var2['type'] = var6;
                    var7 = _closure2_slot4;
                    var2['location_stack'] = var7;
                    var7 = _closure2_slot0;
                    var2['guild_id'] = var7;
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var6 = _closure2_slot9;
                    var6 = var7 - var6;
                    var2['duration_open_ms'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var6)(var2, var3);
            var4 = var6.useEffect;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.fetchPremiumSubscriptionPlans;
                    var2 = var2.bind(var5)();
                    var2 = 17;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchPaymentSources;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var6)(var3, var2);
            var2 = var1 == var14;
            var1 = null;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = _closure1_slot11;
            var3 = _closure1_slot12;
            var2 = {};
            var7 = _closure1_slot5;
            var6 = {};
            var8 = var8.wrapper;
            var6['contentContainerStyle'] = var8;
            var8 = function onScroll(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var5 = var1.layoutMeasurement;
                    var2 = var1.contentOffset;
                    var4 = var1.contentSize;
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var3 = !var3;
                    if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var6 = var5.height;
                    var5 = var2.y;
                    var5 = var6 + var5;
                    var6 = var4.height;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 18;
                    var7 = var7[var4];
                    var4 = undefined;
                    var4 = var8.bind(var4)(var7);
                    var4 = var4.VISIBILITY_OFFSET;
                    var4 = var6 - var4;
                    var3 = var5 >= var4;
case 19:
                    if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                    var3 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.PREMIUM_GUILD_USER_MODAL;
                    var3['type'] = var7;
                    var7 = _closure2_slot4;
                    var3['location_stack'] = var7;
                    var7 = _closure2_slot2;
                    var7 = var7.id;
                    var3['guild_id'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = _closure2_slot8;
                    var3 = true;
                    var4['current'] = var3;
case 21:
                    var3 = _closure2_slot5;
                    var2 = var2.y;
                    var1 = _closure2_slot6;
                    var2 = var2 >= var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6['onScroll'] = var8;
            var8 = 16;
            var6['scrollEventThrottle'] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 19;
            var16 = var15[var16];
            var17 = var8.bind(var5)(var16);
            var16 = {};
            var16['guild'] = var14;
            var16['previousGuildSubscriptionSlot'] = var13;
            var18 = function onLayout(arg1) {
                var1 = arg1;
                var3 = _closure2_slot7;
                var2 = var1.nativeEvent;
                var2 = var2.layout;
                var2 = var2.y;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var2 = var2 + var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var16['onLayout'] = var18;
            var16['fractionalPremiumInfo'] = var11;
            var16['premiumGroupRole'] = var10;
            var17 = var9.bind(var5)(var17, var16);
            var16 = new Array(6);
            var16[0] = var17;
            var17 = 20;
            var17 = var15[var17];
            var18 = var8.bind(var5)(var17);
            var17 = {};
            var17['guild'] = var14;
            var17 = var9.bind(var5)(var18, var17);
            var16[1] = var17;
            var17 = 21;
            var17 = var15[var17];
            var18 = var8.bind(var5)(var17);
            var17 = {};
            var17['guild'] = var14;
            var17 = var9.bind(var5)(var18, var17);
            var16[2] = var17;
            var17 = 22;
            var17 = var15[var17];
            var18 = var8.bind(var5)(var17);
            var17 = {};
            var17 = var9.bind(var5)(var18, var17);
            var16[3] = var17;
            var17 = 23;
            var17 = var15[var17];
            var18 = var8.bind(var5)(var17);
            var17 = {};
            var17 = var9.bind(var5)(var18, var17);
            var16[4] = var17;
            var17 = 24;
            var17 = var15[var17];
            var18 = var8.bind(var5)(var17);
            var17 = {};
            var17 = var9.bind(var5)(var18, var17);
            var16[5] = var17;
            var6['children'] = var16;
            var7 = var4.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 18;
            var7 = var15[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['guild'] = var14;
            var7['previousGuildSubscriptionSlot'] = var13;
            var7['isVisible'] = var12;
            var11 = var11.fractionalState;
            var7['fractionalPremiumState'] = var11;
            var7['premiumGroupRole'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();