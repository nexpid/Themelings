// app/modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function emphasisHook(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 14;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {'variant': 'text-xs/semibold', 'color': 'text-normal'};
        var5 = arg1;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function SwitchTiersButton(arg1) {
        var2 = arg1;
        var1 = var2.activeSubscription;
        var _closure2_slot0 = var1;
        var5 = var2.activeListingId;
        var _closure2_slot1 = var5;
        var2 = var2.changeToListingId;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot2;
        var14 = _closure1_slot3;
        var2 = 11;
        var2 = var14[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useName;
        var5 = var2.bind(var3)(var5);
        var3 = _closure1_slot5;
        var2 = 1;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var19 = var3[var2];
        var8 = _closure1_slot1;
        var2 = 18;
        var2 = var14[var2];
        var2 = var8.bind(var4)(var2);
        var1 = var1.currentPeriodEnd;
        var3 = var2.bind(var4)(var1);
        var2 = var3.format;
        var1 = 'MMMM Do';
        var18 = var2.bind(var3)(var1);
        var3 = _closure1_slot13;
        var2 = _closure1_slot7;
        var1 = {};
        var11 = _closure1_slot12;
        var13 = _closure1_slot0;
        var5 = 14;
        var5 = var14[var5];
        var5 = var13.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
        var10 = 16;
        var12 = var14[var10];
        var12 = var13.bind(var4)(var12);
        var17 = var12.intl;
        var16 = var17.format;
        var12 = var14[var10];
        var12 = var13.bind(var4)(var12);
        var12 = var12.t;
        var15 = var12.lA7ztL;
        var12 = {};
        var12['activeListingName'] = var19;
        var12['billingEndDate'] = var18;
        var18 = _closure1_slot15;
        var12['emphasisHook'] = var18;
        var12 = var16.bind(var17)(var15, var12);
        var5['children'] = var12;
        var7 = var11.bind(var4)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var11 = _closure1_slot12;
        var7 = 19;
        var7 = var14[var7];
        var8 = var8.bind(var4)(var7);
        var7 = {};
        var7['size'] = var10;
        var7 = var11.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot12;
        var6 = 20;
        var6 = var14[var6];
        var6 = var13.bind(var4)(var6);
        var7 = var6.ArrowButton;
        var6 = {};
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.SACegI;
        var10 = var11.bind(var12)(var10);
        var6['text'] = var10;
        var9 = function onPress() {
            var5 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 21;
            var4 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot0;
            var3 = 23;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 22;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var7 = _closure2_slot2;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'ChangeSubscriptionCard:';
            var3 = var3.bind(var2)(var7);
            var2 = {};
            var9 = _closure2_slot0;
            var2['activeSubscription'] = var9;
            var8 = _closure2_slot1;
            var2['activeListingId'] = var8;
            var2['changeToListingId'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var6['onPress'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsLocations;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot11 = var4;
    var4 = 8;
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
    var4 = {};
    var9 = {};
    var10 = 10;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['subscribedButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubscribeButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.listingId;
            var _closure2_slot0 = var9;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot14;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 12;
            var1 = var4[var1];
            var11 = var2.bind(var5)(var1);
            var8 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var1;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getSubscriptionGroupListingForSubscriptionListing;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var11)(var7, var1, var2);
            var2 = _closure1_slot1;
            var1 = 24;
            var1 = var4[var1];
            var4 = var2.bind(var5)(var1);
            var1 = null;
            var7 = var1 == var11;
            var2 = undefined;
            if(var7) { _fun0001_ip = 131; continue _fun0001 }
 126:
            var2 = var11.id;
 131:
            var2 = var4.bind(var5)(var2);
            var8 = var2.activeSubscriptionListing;
            var7 = var2.activeSubscription;
            var4 = var1 == var8;
            var2 = undefined;
            if(var4) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var2 = var8.id;
 162:
            var4 = function useCreateRoleSubscription(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var10 = arg1;
                    var2 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var1 = 11;
                    var3 = var7[var1];
                    var9 = undefined;
                    var6 = var2.bind(var9)(var3);
                    var3 = var6.useSubscriptionPlan;
                    var8 = var3.bind(var6)(var10);
                    var3 = _closure1_slot5;
                    var6 = 1;
                    var8 = var3.bind(var9)(var8, var6);
                    var3 = 0;
                    var12 = var8[var3];
                    var1 = var7[var1];
                    var2 = var2.bind(var9)(var1);
                    var1 = var2.useApplicationId;
                    var8 = var1.bind(var2)(var10);
                    var2 = _closure1_slot0;
                    var1 = 12;
                    var1 = var7[var1];
                    var11 = var2.bind(var9)(var1);
                    var7 = var11.useStateFromStores;
                    var1 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() {
                        var2 = _closure1_slot8;
                        var1 = var2.getCurrentlySelectedChannelId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2 = var7.bind(var11)(var2, var1);
                    var1 = _closure1_slot11;
                    var1 = var1.ROLE_SUBSCRIPTIONS;
                    if(!(var2 !== var1)) { _fun0002_ip = 152; continue _fun0002 }
 140:
                    var1 = _closure1_slot10;
                    var11 = var1.ROLE_SUBSCRIPTIONS_TAB;
                    _fun0002_ip = 162; continue _fun0002;
 152:
                    var1 = _closure1_slot10;
                    var11 = var1.ROLE_SUBSCRIPTION_GATED_CHANNEL;
 162:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 13;
                    var1 = var7[var1];
                    var7 = var2.bind(var9)(var1);
                    var2 = var7.useCreateSubscription;
                    var1 = {};
                    var12 = var12.id;
                    var1['planId'] = var12;
                    var1['analyticsLocation'] = var11;
                    var1['skuId'] = var10;
                    var1['applicationId'] = var8;
                    var1 = var2.bind(var7)(var1);
                    var8 = var1.createSubscription;
                    var _closure3_slot0 = var8;
                    var2 = var1.nativePaymentsConnected;
                    var7 = _closure1_slot6;
                    var10 = var7.useState;
                    var1 = false;
                    var11 = var10.bind(var7)(var1);
                    var10 = _closure1_slot5;
                    var1 = 2;
                    var1 = var10.bind(var9)(var11, var1);
                    var3 = var1[var3];
                    var1 = var1[var6];
                    var _closure3_slot1 = var1;
                    var1 = {};
                    var6 = var7.useCallback;
                    var5 = _closure1_slot4;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 89; continue _fun0003 }
 7: // try_start_0
                                var4 = _closure3_slot1;
                                var5 = undefined;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                var2 = _closure3_slot0;
                                var2 = var2.bind(var5)();
                                SaveGenerator(address=35);
 33:
                                return var2;
 35:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 55; continue _fun0003 }
 41: // try_end0
                                var6 = _closure3_slot1;
                                var4 = false;
                                var4 = var6.bind(var5)(var4);
                                return var5;
 55:
                                var4 = _closure3_slot1;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                return var2;
 69: // catch_target0
                                CatchBlockStart(arg_register=1);
                                var5 = _closure3_slot1;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                throw var2;
 89:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var5.bind(var9)(var4);
                    var4 = new Array(1);
                    var4[0] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['createSubscription'] = var4;
                    var2 = !var2;
                    if(var2) { _fun0002_ip = 327; continue _fun0002 }
 324:
                    var2 = var3;
 327:
                    var1['loading'] = var2;
                    return var1;
                }
            };
            var12 = var4.bind(var5)(var9);
            var4 = var12.loading;
            var16 = var12.createSubscription;
            _closure2_slot1 = var16;
            var12 = var1 == var11;
            var15 = undefined;
            if(var12) { _fun0001_ip = 204; continue _fun0001 }
 199:
            var15 = var11.guild_id;
 204:
            _closure2_slot2 = var15;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var11 = 25;
            var11 = var13[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.useShowMemberVerificationGate;
            var14 = var11.bind(var12)(var15);
            _closure2_slot3 = var14;
            var13 = _closure1_slot6;
            var12 = var13.useCallback;
            var11 = new Array(3);
            var11[0] = var16;
            var11[1] = var15;
            var11[2] = var14;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
 10:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 32; continue _fun0004 }
 20:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 52; continue _fun0004;
 32:
                    var3 = _closure2_slot2;
                    var2 = function showCompleteOnboardingDialog(arg1) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var1 = 15;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 16;
                        var7 = var9[var5];
                        var7 = var8.bind(var1)(var7);
                        var11 = var7.intl;
                        var10 = var11.string;
                        var7 = var9[var5];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.PYrJGR;
                        var7 = var10.bind(var11)(var7);
                        var2['body'] = var7;
                        var6 = function onConfirm() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openMemberVerificationModal;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['onConfirm'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.IjFdkZ;
                        var6 = var7.bind(var10)(var6);
                        var2['confirmText'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.ETE/oK;
                        var5 = var6.bind(var7)(var5);
                        var2['cancelText'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var3, var11);
            if(!(var2 !== var9)) { _fun0001_ip = 435; continue _fun0001 }
 288:
            if(!(var1 != var8)) { _fun0001_ip = 296; continue _fun0001 }
 292:
            if(!(var1 == var7)) { _fun0001_ip = 394; continue _fun0001 }
 296:
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var16 = _closure1_slot3;
            var1 = 27;
            var1 = var16[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var15 = _closure1_slot0;
            var12 = 16;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.BEeXiY;
            var12 = var13.bind(var14)(var12);
            var1['text'] = var12;
            var1['onPress'] = var11;
            var1['loading'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 430; continue _fun0001;
 394:
            var4 = _closure1_slot12;
            var3 = _closure1_slot16;
            var2 = {};
            var2['changeToListingId'] = var9;
            var8 = var8.id;
            var2['activeListingId'] = var8;
            var2['activeSubscription'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 430:
            _fun0001_ip = 566; continue _fun0001;
 435:
            var4 = _closure1_slot12;
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 26;
            var2 = var9[var7];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var13 = _closure1_slot0;
            var10 = 16;
            var11 = var9[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var9[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.XvAuMj;
            var10 = var11.bind(var12)(var10);
            var2['text'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.Looks;
            var7 = var7.OUTLINED;
            var2['look'] = var7;
            var6 = var6.subscribedButton;
            var2['style'] = var6;
            var6 = true;
            var2['disabled'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 566:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();