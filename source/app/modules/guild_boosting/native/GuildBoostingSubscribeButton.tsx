// app/modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot7 = var8;
    var8 = var4.AnalyticsObjects;
    var _closure1_slot8 = var8;
    var8 = var4.AnalyticsObjectTypes;
    var _closure1_slot9 = var8;
    var8 = var4.AnalyticsPages;
    var _closure1_slot10 = var8;
    var4 = var4.NOOP;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumGuildSubscribeModalScenes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CustomCheckoutFlow;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'GuildBoostingSubscribeButton';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot16 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var _closure4_slot1 = var10;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var5 = var8.getNewAnalyticsLoadId;
                    var9 = var5.bind(var8)();
                    _closure4_slot2 = var9;
                    var5 = 11;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.goToStandaloneGuildBoostCheckoutFromMobileApp;
                    var15 = 'guild_boosting_subscribe_button';
                    var12 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot7;
                        var4 = var3.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
                        var3 = {};
                        var8 = _closure4_slot1;
                        var3['guild_id'] = var8;
                        var8 = _closure4_slot2;
                        var3['load_id'] = var8;
                        var11 = _closure4_slot0;
                        var7 = new Array(0);
                        var10 = 0;
                        var12 = var7;
                        var8 = arraySpread(var12, var11, var10);
                        var3['location_stack'] = var7;
                        var7 = _closure1_slot13;
                        var7 = var7.APPLE_PAYMENT_LINK;
                        var3['custom_checkout_flow'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var4 = _closure1_slot16;
                        var3 = var4.log;
                        var2 = 'Successfully opened mobile web Guild Boost Management page';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var11 = function(arg1) {
                        var4 = _closure1_slot16;
                        var3 = var4.error;
                        var2 = 'Failed to open mobile web Guild Boost Management page, error response: ';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 13;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 14;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.vgvbiI;
                        var6 = var7.bind(var10)(var6);
                        var2['title'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.ycleJS;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var5 = true;
                        var2['hideActionSheet'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var16 = var8;
                    var14 = var10;
                    var13 = var9;
                    var2 = var16[var7](var15, var14, var13, var12, var11, var10);
                    SaveGenerator(address=124);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
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
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot17 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.launchGuildBoostFlowOrAlert;
                    var6 = {};
                    var2 = _closure1_slot10;
                    var2 = var2.PREMIUM_GUILD_USER_MODAL;
                    var6['page'] = var2;
                    var2 = arg2;
                    var6['section'] = var2;
                    var2 = _closure1_slot8;
                    var2 = var2.BUTTON_CTA;
                    var6['object'] = var2;
                    var2 = _closure1_slot9;
                    var2 = var2.BUY;
                    var6['objectType'] = var2;
                    var5 = arg1;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6, var5, var2);
                    SaveGenerator(address=118);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.closeApplyBoostModal;
                    var4 = var4.bind(var5)();
                    return var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot18 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var19 = var1.guild;
            var _closure2_slot0 = var19;
            var15 = var1.previousGuildSubscriptionSlot;
            var _closure2_slot1 = var15;
            var8 = var1.useShortenedCTA;
            var6 = var1.styles;
            var11 = var1.buttonColor;
            var7 = var1.buttonTextColor;
            var _closure2_slot2 = var7;
            var18 = var1.analyticsSection;
            var _closure2_slot3 = var18;
            var3 = var1.fractionalPremiumState;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 18;
            var1 = var13[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var _closure2_slot4 = var12;
            var10 = _closure1_slot0;
            var1 = 19;
            var1 = var13[var1];
            var14 = var10.bind(var4)(var1);
            var1 = var14.useNavigation;
            var17 = var1.bind(var14)();
            var _closure2_slot5 = var17;
            var1 = 20;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot6 = var1;
            var2 = 21;
            var2 = var13[var2];
            var14 = var10.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot5;
                var1 = var1.boostSlots;
                var3 = var2.bind(var3)(var1);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure1_slot5;
                        var2 = var1.boostSlots;
                        var1 = arg1;
                        var3 = var2[var1];
                        var2 = var3.premiumGuildSubscription;
                        var1 = null;
                        var1 = var1 == var2;
                        if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var2 = var3.isOnCooldown;
                        var2 = var2.bind(var3)();
                        var1 = !var2;
case 13:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var10, var2);
            var _closure2_slot7 = var16;
            var10 = !var16;
            if(!var10) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = _closure1_slot14;
            var2 = var2.NONE;
            var10 = var3 !== var2;
case 15:
            var _closure2_slot8 = var10;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 22;
            var2 = var13[var2];
            var14 = var3.bind(var4)(var2);
            var3 = var14.useApplePaymentLinkExperimentConfig;
            var2 = {};
            var20 = 'guild_boost_subscribe_button';
            var2['location'] = var20;
            var2 = var3.bind(var14)(var2);
            var20 = var2.enabled;
            var _closure2_slot9 = var20;
            var14 = _closure1_slot4;
            var3 = var14.useCallback;
            var2 = new Array(8);
            var2[0] = var12;
            var2[1] = var20;
            var19 = var19.id;
            var2[2] = var19;
            var2[3] = var18;
            var2[4] = var17;
            var2[5] = var16;
            var2[6] = var15;
            var2[7] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                    var4 = _closure1_slot6;
                    var3 = var4.getPremiumSubscription;
                    var9 = var3.bind(var4)();
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 23;
                    var4 = var7[var3];
                    var5 = undefined;
                    var8 = var6.bind(var5)(var4);
                    var4 = var8.getPremiumManagementMethod;
                    var4 = var4.bind(var8)(var9);
                    var3 = var7[var3];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.PremiumManagementMethod;
                    var3 = var3.IN_WEB;
                    if(!(var4 !== var3)) { _fun0005_ip = 24; continue _fun0005 }
case 21:
                    var7 = _closure1_slot18;
                    var6 = _closure2_slot6;
                    var4 = _closure2_slot3;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6, var4);
                    return var3;
case 24:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 19:
                    var4 = _closure2_slot5;
                    var5 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var8 = var2.id;
                    var7 = _closure2_slot3;
                    var3 = var4.push;
                    var1 = _closure1_slot12;
                    var2 = var1.CONFIRMATION;
                    var1 = {};
                    var1['guildId'] = var8;
                    var1['previousGuildSubscriptionSlot'] = var5;
                    var5 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.PREMIUM_GUILD_USER_MODAL;
                    var5['page'] = var8;
                    var5['section'] = var7;
                    var7 = _closure1_slot8;
                    var7 = var7.BUTTON_CTA;
                    var5['object'] = var7;
                    var6 = _closure1_slot9;
                    var6 = var6.BUY;
                    var5['objectType'] = var6;
                    var1['location'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
case 17:
                    var1 = _closure1_slot11;
                    return var1;
                }
            };
            var1 = var3.bind(var14)(var1, var2);
            var _closure2_slot10 = var1;
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var1 = 24;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['loading'] = var12;
            var1['loadingColorLight'] = var7;
            var1['loadingColorDark'] = var7;
            var1['color'] = var11;
            var11 = function onPress() {
                var2 = _closure2_slot10;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var11;
            var1['disabled'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var8 = var9.gKmQ1N;
            var8 = var10.bind(var11)(var8);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var9 = var9.Uj0md3;
            var8 = var10.bind(var11)(var9);
case 27:
            var1['text'] = var8;
            var1['style'] = var6;
            var6 = {};
            var6['color'] = var7;
            var1['textStyle'] = var6;
            var5 = function renderIcon() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var5 = _closure1_slot15;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.LockIcon;
                    var2 = {};
                    var7 = {'opacity': 0.6, 'marginRight': 6};
                    var2['style'] = var7;
                    var7 = 'xs';
                    var2['size'] = var7;
                    var6 = _closure2_slot2;
                    var2['color'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 28:
                    return var1;
                }
            };
            var1['renderIcon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();