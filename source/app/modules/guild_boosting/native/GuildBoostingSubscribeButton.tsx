// app/modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot5 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot6 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumGuildSubscribeModalScenes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/GuildBoostingSubscribeButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = function _handleBoostPress() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            var8 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 280; continue _fun0002 }
 13:
                            var2 = _closure2_slot6;
                            if(var2) { _fun0002_ip = 171; continue _fun0002 }
 29:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var5 = undefined;
                            var10 = var3.bind(var5)(var2);
                            var9 = var10.launchGuildBoostFlowOrAlert;
                            var4 = {};
                            var2 = _closure1_slot7;
                            var2 = var2.PREMIUM_GUILD_USER_MODAL;
                            var4['page'] = var2;
                            var4['section'] = var8;
                            var2 = _closure1_slot5;
                            var2 = var2.BUTTON_CTA;
                            var4['object'] = var2;
                            var2 = _closure1_slot6;
                            var2 = var2.BUY;
                            var4['objectType'] = var2;
                            var3 = _closure2_slot5;
                            var2 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 12;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.pop;
                                var1 = var1.bind(var2)();
                                return var1;
                            };
                            var2 = var9.bind(var10)(var4, var3, var2);
                            SaveGenerator(address=130);
 128:
                            return var2;
 130:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 168; continue _fun0002 }
 136:
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 13;
                            var3 = var9[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.closeApplyBoostModal;
                            var3 = var3.bind(var4)();
                            _fun0002_ip = 275; continue _fun0002;
 168:
                            return var2;
 171:
                            var5 = _closure2_slot4;
                            var4 = var5.push;
                            var2 = _closure1_slot8;
                            var3 = var2.CONFIRMATION;
                            var2 = {};
                            var9 = _closure2_slot0;
                            var9 = var9.id;
                            var2['guildId'] = var9;
                            var6 = _closure2_slot1;
                            var2['previousGuildSubscriptionSlot'] = var6;
                            var6 = {};
                            var9 = _closure1_slot7;
                            var9 = var9.PREMIUM_GUILD_USER_MODAL;
                            var6['page'] = var9;
                            var6['section'] = var8;
                            var8 = _closure1_slot5;
                            var8 = var8.BUTTON_CTA;
                            var6['object'] = var8;
                            var7 = _closure1_slot6;
                            var7 = var7.BUY;
                            var6['objectType'] = var7;
                            var2['location'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
 275:
                            var2 = undefined;
                            return var2;
 280:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot8 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot8 = var2;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var2 = var1.previousGuildSubscriptionSlot;
            var _closure2_slot1 = var2;
            var8 = var1.useShortenedCTA;
            var6 = var1.styles;
            var11 = var1.buttonColor;
            var7 = var1.buttonTextColor;
            var _closure2_slot2 = var7;
            var2 = var1.analyticsSection;
            var _closure2_slot3 = var2;
            var2 = var1.fractionalPremiumState;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var4 = undefined;
            var1 = var13.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = 8;
            var1 = var10[var1];
            var14 = var3.bind(var4)(var1);
            var1 = var14.useNavigation;
            var1 = var1.bind(var14)();
            var _closure2_slot4 = var1;
            var1 = 9;
            var1 = var10[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot5 = var1;
            var1 = 10;
            var1 = var10[var1];
            var13 = var3.bind(var4)(var1);
            var10 = var13.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot4;
                var1 = var1.boostSlots;
                var3 = var2.bind(var3)(var1);
                var2 = var3.some;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure1_slot4;
                        var2 = var1.boostSlots;
                        var1 = arg1;
                        var3 = var2[var1];
                        var2 = var3.premiumGuildSubscription;
                        var1 = null;
                        var1 = var1 == var2;
                        if(!var1) { _fun0003_ip = 48; continue _fun0003 }
 35:
                        var2 = var3.isOnCooldown;
                        var2 = var2.bind(var3)();
                        var1 = !var2;
 48:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var13)(var3, var1);
            var _closure2_slot6 = var1;
            var10 = !var1;
            if(!var10) { _fun0001_ip = 226; continue _fun0001 }
 212:
            var1 = _closure1_slot9;
            var1 = var1.NONE;
            var10 = var2 !== var1;
 226:
            var _closure2_slot7 = var10;
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 14;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['loading'] = var12;
            var1['loadingColorLight'] = var7;
            var1['loadingColorDark'] = var7;
            var1['color'] = var11;
            var11 = undefined;
            if(var12) { _fun0001_ip = 285; continue _fun0001 }
 280:
            var11 = function() {
                var3 = _closure2_slot3;
                var2 = function handleBoostPress(arg1) {
                    var1 = undefined;
                    var4 = _closure2_slot8;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
 285:
            var1['onPress'] = var11;
            var1['disabled'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0001_ip = 355; continue _fun0001 }
 340:
            var8 = var9.gKmQ1N;
            var8 = var10.bind(var11)(var8);
            _fun0001_ip = 366; continue _fun0001;
 355:
            var9 = var9.Uj0md3;
            var8 = var10.bind(var11)(var9);
 366:
            var1['text'] = var8;
            var1['style'] = var6;
            var6 = {};
            var6['color'] = var7;
            var1['textStyle'] = var6;
            var5 = function renderIcon() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 85; continue _fun0004 }
 12:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
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
 85:
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