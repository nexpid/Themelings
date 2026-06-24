// app/modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleBoostPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.launchGuildBoostFlowOrAlert;
                    var6 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.PREMIUM_GUILD_USER_MODAL;
                    var6['page'] = var2;
                    var2 = arg2;
                    var6['section'] = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.BUTTON_CTA;
                    var6['object'] = var2;
                    var2 = _closure1_slot8;
                    var2 = var2.BUY;
                    var6['objectType'] = var2;
                    var5 = arg1;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6, var5, var2);
                    SaveGenerator(address=117);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.closeApplyBoostModal;
                    var4 = var4.bind(var5)();
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot7 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot9 = var7;
    var4 = var4.NOOP;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumGuildSubscribeModalScenes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildBoostingSubscribeButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var17 = var1.guild;
            var _closure2_slot0 = var17;
            var14 = var1.previousGuildSubscriptionSlot;
            var _closure2_slot1 = var14;
            var7 = var1.useShortenedCTA;
            var5 = var1.styles;
            var16 = var1.analyticsSection;
            var _closure2_slot2 = var16;
            var3 = var1.fractionalPremiumState;
            var6 = var1.premiumGroupRole;
            var19 = var1.onAvailableSlotPress;
            var _closure2_slot3 = var19;
            var18 = var1.intent;
            var _closure2_slot4 = var18;
            var1 = var1.onResult;
            var _closure2_slot5 = var1;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 11;
            var2 = var12[var2];
            var4 = undefined;
            var2 = var13.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var _closure2_slot6 = var11;
            var9 = _closure1_slot0;
            var2 = 12;
            var2 = var12[var2];
            var15 = var9.bind(var4)(var2);
            var2 = var15.useNavigation;
            var20 = var2.bind(var15)();
            var _closure2_slot7 = var20;
            var2 = 13;
            var2 = var12[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = var2.analyticsLocations;
            var _closure2_slot8 = var13;
            var2 = 14;
            var2 = var12[var2];
            var15 = var9.bind(var4)(var2);
            var12 = var15.useStateFromStores;
            var2 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot6;
                var1 = var1.boostSlots;
                var3 = var2.bind(var3)(var1);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure1_slot6;
                        var2 = var1.boostSlots;
                        var1 = arg1;
                        var3 = var2[var1];
                        var2 = var3.premiumGuildSubscription;
                        var1 = null;
                        var1 = var1 == var2;
                        if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var2 = var3.isOnCooldown;
                        var2 = var2.bind(var3)();
                        var1 = !var2;
case 8:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var12.bind(var15)(var9, var2);
            var _closure2_slot9 = var15;
            var12 = _closure1_slot4;
            var9 = var12.useCallback;
            var2 = new Array(5);
            var2[0] = var20;
            var2[1] = var16;
            var2[2] = var19;
            var2[3] = var18;
            var2[4] = var1;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var8 = _closure2_slot7;
                    var7 = var8.push;
                    var5 = _closure1_slot11;
                    var6 = var5.CONFIRMATION;
                    var5 = {};
                    var5['guildId'] = var4;
                    var11 = var2 != var3;
                    var2 = undefined;
                    var9 = undefined;
                    if(!var11) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = new Array(1);
                    var11[0] = var3;
                    var9 = var11;
case 12:
                    var5['guildBoostSlots'] = var9;
                    var9 = {};
                    var11 = _closure1_slot9;
                    var11 = var11.PREMIUM_GUILD_USER_MODAL;
                    var9['page'] = var11;
                    var11 = _closure2_slot2;
                    var9['section'] = var11;
                    var11 = _closure1_slot7;
                    var11 = var11.BUTTON_CTA;
                    var9['object'] = var11;
                    var10 = _closure1_slot8;
                    var10 = var10.BUY;
                    var9['objectType'] = var10;
                    var5['location'] = var9;
                    var9 = _closure2_slot4;
                    var5['intent'] = var9;
                    var9 = _closure2_slot5;
                    var5['onResult'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    return var2;
case 10:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var1 = var9.bind(var12)(var1, var2);
            var _closure2_slot10 = var1;
            var9 = !var15;
            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot12;
            var2 = var2.NONE;
            var2 = var3 !== var2;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 15;
            var3 = var18[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.PremiumSubscriptionGroupRole;
            var3 = var3.MEMBER;
            var2 = var6 === var3;
case 16:
            var9 = var2;
case 14:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 16;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'guild_boost_subscribe_button';
            var2 = var3.bind(var4)(var2);
            var19 = var2.shouldUseMobileWebRedirectCheckout;
            var _closure2_slot11 = var19;
            var18 = var2.handleMobileWebRedirectCheckout;
            var _closure2_slot12 = var18;
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(9);
            var2[0] = var11;
            var2[1] = var19;
            var2[2] = var18;
            var17 = var17.id;
            var2[3] = var17;
            var2[4] = var16;
            var2[5] = var15;
            var2[6] = var14;
            var2[7] = var13;
            var2[8] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 3:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0005_ip = 23; continue _fun0005 }
case 21:
                    var5 = _closure2_slot8;
                    var4 = _closure2_slot2;
                    var3 = function handleBoostPress() {
                        var1 = undefined;
                        var4 = _closure1_slot14;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var3.bind(var1)(var5, var4);
                    _fun0005_ip = 24; continue _fun0005;
case 23:
                    var6 = _closure2_slot12;
                    var5 = _closure2_slot8;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = undefined;
                    var1 = var6.bind(var3)(var5, var4);
case 24:
                    _fun0005_ip = 25; continue _fun0005;
case 19:
                    var5 = _closure2_slot10;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 25:
                    _fun0005_ip = 26; continue _fun0005;
case 18:
                    var1 = _closure1_slot10;
case 26:
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1, var2);
            var _closure2_slot13 = var1;
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var5;
            var6 = _closure1_slot0;
            var5 = 17;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {};
            var5['loading'] = var11;
            var11 = 'primary';
            var5['variant'] = var11;
            var10 = function onPress() {
                var2 = _closure2_slot13;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var5['onPress'] = var10;
            var5['disabled'] = var9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 18;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            if(var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var7 = var10.gKmQ1G;
            var7 = var11.bind(var12)(var7);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var10 = var10.Uj0md3;
            var7 = var11.bind(var12)(var10);
case 29:
            var5['text'] = var7;
            var7 = undefined;
            if(!var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = _closure1_slot13;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 19;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.LockIcon;
            var8 = {'size': 'xs', 'color': 'white'};
            var7 = var10.bind(var4)(var9, var8);
case 30:
            var5['icon'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();