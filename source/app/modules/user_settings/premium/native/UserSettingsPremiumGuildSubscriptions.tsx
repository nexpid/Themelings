// app/modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = 1;
    var4 = var6[var4];
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot9 = var9;
    var4 = var4.ScrollView;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var12 = 8;
    var4 = var6[var12];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HelpdeskArticles;
    var _closure1_slot16 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot19 = var8;
    var4 = var4.jsxs;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var4 = {};
    var11 = 'relative';
    var4['position'] = var11;
    var8['upsellSection'] = var4;
    var4 = {'position': 'absolute', 'width': '100%'};
    var8['background'] = var4;
    var4 = {'flex': 1, 'backgroundColor': null, 'marginTop': 16};
    var11 = 16;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_TRANSPARENT_LIGHT_WHITE_500;
    var4['backgroundColor'] = var11;
    var8['scroller'] = var4;
    var4 = 32;
    var11 = {'paddingHorizontal': 16, 'paddingBottom': 32};
    var8['subscriptionHeader'] = var11;
    var11 = {};
    var13 = 18;
    var11['lineHeight'] = var13;
    var8['blurb'] = var11;
    var11 = {};
    var11['marginBottom'] = var12;
    var8['blurbNotLast'] = var11;
    var11 = {'marginHorizontal': 16, 'alignContent': 'center'};
    var8['boostingUnavailablePill'] = var11;
    var11 = {};
    var11['marginTop'] = var12;
    var8['externalManagement'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot21 = var8;
    var8 = var7.PureComponent;
    var7 = function(arg1) {
        var4 = function UserSettingsPremiumGuildSubscriptions(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                var1 = _closure1_slot23;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = false;
                var3['isOnCooldown'] = var4;
                var1['state'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.navigation;
                        var1 = var4.getState;
                        var1 = var1.bind(var4)();
                        var3 = var1.routes;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = _closure1_slot17;
                            var1 = var1.PREMIUM;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 17;
                        var5 = var7[var1];
                        var1 = undefined;
                        var9 = var6.bind(var1)(var5);
                        var6 = var9.setSection;
                        var8 = _closure1_slot17;
                        var5 = var8.PREMIUM;
                        var5 = var6.bind(var9)(var5);
                        var6 = _closure1_slot0;
                        var5 = 18;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.trackUserSettingsPaneViewed;
                        var5 = {};
                        var8 = var8.PREMIUM;
                        var5['destinationPane'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = null;
                        if(!(var5 == var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var5 = var4.push;
                        var2 = _closure1_slot17;
                        var2 = var2.PREMIUM;
                        var2 = var5.bind(var4)(var2);
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var2 = var4.navigate;
                        var2 = var2.bind(var4)(var3);
case 11:
                        return var1;
                    }
                };
                var1['handleLearnMorePremium'] = var2;
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var2 = var2.hasFetchedSlots;
                if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchGuildBoostSlots;
                var2 = var2.bind(var3)();
case 12:
                var2 = var1.props;
                var2 = var2.shouldFetchSubscriptionPlans;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var1.props;
                var3 = var3.isFetchingSubscriptionPlans;
                var2 = !var3;
case 14:
                if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 20;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchPremiumSubscriptionPlans;
                var2 = var2.bind(var3)();
case 16:
                var1 = var1.props;
                var1 = var1.isFetchingPaymentSources;
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchPaymentSources;
                var1 = var1.bind(var2)();
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderPremiumGuildSubscriptions';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var3 = _closure1_slot21;
                var2 = var1.context;
                var5 = undefined;
                var15 = var3.bind(var5)(var2);
                var1 = var1.props;
                var2 = var1.hasSlots;
                var14 = var1.externalManagementMessage;
                var10 = null;
                var1 = null;
                if(!var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var4 = _closure1_slot20;
                var2 = _closure1_slot8;
                var3 = var2.Fragment;
                var2 = {};
                var8 = _closure1_slot9;
                var6 = {};
                var9 = var15.subscriptionHeader;
                var6['style'] = var9;
                var13 = _closure1_slot19;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 22;
                var9 = var23[var16];
                var9 = var18.bind(var5)(var9);
                var11 = var9.Text;
                var9 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                var17 = var15.blurb;
                var12 = new Array(2);
                var12[0] = var17;
                var17 = var15.blurbNotLast;
                var12[1] = var17;
                var9['style'] = var12;
                var17 = 23;
                var12 = var23[var17];
                var12 = var18.bind(var5)(var12);
                var20 = var12.intl;
                var19 = var20.string;
                var12 = var23[var17];
                var12 = var18.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.GwnFO5;
                var12 = var19.bind(var20)(var12);
                var9['children'] = var12;
                var11 = var13.bind(var5)(var11, var9);
                var9 = new Array(3);
                var9[0] = var11;
                var11 = 24;
                var11 = var23[var11];
                var11 = var18.bind(var5)(var11);
                var12 = var11.TextWithIOSLinkWorkaround;
                var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                var19 = var15.blurb;
                var11['style'] = var19;
                var19 = var23[var17];
                var19 = var18.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var17 = var23[var17];
                var17 = var18.bind(var5)(var17);
                var17 = var17.t;
                var18 = var17.A4UTjH;
                var17 = {};
                var22 = _closure1_slot1;
                var21 = 25;
                var21 = var23[var21];
                var23 = var22.bind(var5)(var21);
                var22 = var23.getArticleURL;
                var21 = _closure1_slot16;
                var21 = var21.GUILD_SUBSCRIPTIONS;
                var21 = var22.bind(var23)(var21);
                var17['helpdeskArticle'] = var21;
                var17 = var19.bind(var20)(var18, var17);
                var11['children'] = var17;
                var11 = var13.bind(var5)(var12, var11);
                var9[1] = var11;
                var10 = var10 != var14;
                if(!var10) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var13 = _closure1_slot19;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var16];
                var11 = var12.bind(var5)(var11);
                var12 = var11.Text;
                var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                var15 = var15.externalManagement;
                var11['style'] = var15;
                var11['children'] = var14;
                var10 = var13.bind(var5)(var12, var11);
case 22:
                var9[2] = var10;
                var6['children'] = var9;
                var8 = var4.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot19;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 26;
                var7 = var10[var7];
                var8 = var8.bind(var5)(var7);
                var7 = {};
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var16 = this;
                var2 = _closure1_slot21;
                var1 = var16.context;
                var4 = undefined;
                var17 = var2.bind(var4)(var1);
                var1 = var16.props;
                var11 = var1.hasFetchedSubscriptionPlans;
                var13 = var1.hasAvailableSlots;
                var5 = var1.fpDurationText;
                var15 = var1.fractionalState;
                var14 = var1.isInReverseTrial;
                var2 = var1.premiumGroupRole;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PremiumSubscriptionGroupRole;
                var1 = var1.MEMBER;
                if(!(var2 !== var1)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var1 = _closure1_slot18;
                var1 = var1.NONE;
                var6 = null;
                if(!(var15 !== var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var3 = _closure1_slot19;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 29;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['fpDurationText'] = var5;
                var1['isInReverseTrial'] = var14;
                var5 = var17.boostingUnavailablePill;
                var1['style'] = var5;
                var6 = var3.bind(var4)(var2, var1);
                _fun0006_ip = 26; continue _fun0006;
case 24:
                var3 = _closure1_slot19;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 28;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var5 = var17.boostingUnavailablePill;
                var1['style'] = var5;
                var6 = var3.bind(var4)(var2, var1);
case 26:
                var3 = _closure1_slot20;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var17.scroller;
                var1['style'] = var5;
                var5 = new Array(3);
                var5[0] = var6;
                var6 = var16.renderPremiumGuildSubscriptions;
                var6 = var6.bind(var16)();
                var5[1] = var6;
                var7 = _closure1_slot9;
                var6 = {};
                var8 = var17.upsellSection;
                var6['style'] = var8;
                var12 = _closure1_slot19;
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 30;
                var8 = var18[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.TopPattern;
                var8 = {};
                var17 = var17.background;
                var8['style'] = var17;
                var9 = var12.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if(!var11) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var12 = _closure1_slot19;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = 31;
                var10 = var17[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var16 = var16.handleLearnMorePremium;
                var10['onLearnMorePremium'] = var16;
                var10['fractionalState'] = var15;
                var10['isInReverseTrial'] = var14;
                var10['hasAvailableSlots'] = var13;
                var9 = var12.bind(var4)(var11, var10);
case 28:
                var8[1] = var9;
                var6['children'] = var8;
                var6 = var3.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var8);
    var _closure1_slot22 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/premium/native/UserSettingsPremiumGuildSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedUserSettingsPremiumGuildSubscriptions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.route;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 33;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useSubscriptionPlansLoaded;
            var5 = var5.bind(var6)();
            var _closure2_slot0 = var5;
            var6 = null;
            var7 = var6 == var3;
            var5 = undefined;
            if(var7) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var3 = var3.params;
            var7 = var6 == var3;
            var5 = undefined;
            if(var7) { _fun0007_ip = 30; continue _fun0007 }
case 32:
            var5 = var3.shouldFetchSubscriptionPlans;
case 30:
            var3 = var6 == var5;
            if(var3) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var3 = var5;
case 33:
            _closure2_slot1 = var3;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 34;
            var3 = var10[var3];
            var5 = var8.bind(var4)(var3);
            var3 = {};
            var12 = true;
            var3['forceFetch'] = var12;
            var3 = var5.bind(var4)(var3);
            var5 = var3.fractionalState;
            _closure2_slot2 = var5;
            var7 = var3.endsAt;
            var9 = _closure1_slot0;
            var3 = 35;
            var3 = var10[var3];
            var5 = var9.bind(var4)(var3);
            var3 = var5.useIsInReverseTrial;
            var3 = var3.bind(var5)();
            _closure2_slot3 = var3;
            var3 = 36;
            var5 = var10[var3];
            var5 = var8.bind(var4)(var5);
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.CountDownMessageTypes;
            var3 = var3.LONG_TIME_LEFT;
            var3 = var5.bind(var4)(var7, var3);
            _closure2_slot4 = var3;
            var3 = 37;
            var5 = var10[var3];
            var11 = var9.bind(var4)(var5);
            var8 = var11.useStateFromStoresObject;
            var5 = _closure1_slot13;
            var7 = new Array(4);
            var7[0] = var5;
            var5 = _closure1_slot12;
            var7[1] = var5;
            var5 = _closure1_slot14;
            var7[2] = var5;
            var5 = _closure1_slot11;
            var7[3] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot13;
                    var4 = var3.hasFetched;
                    var1['hasFetchedSlots'] = var4;
                    var5 = global;
                    var7 = var5.Object;
                    var6 = var7.keys;
                    var4 = var3.boostSlots;
                    var4 = var6.bind(var7)(var4);
                    var6 = var4.length;
                    var4 = 0;
                    var6 = var6 > var4;
                    var1['hasSlots'] = var6;
                    var6 = var5.Object;
                    var5 = var6.values;
                    var3 = var3.boostSlots;
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isAvailable;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.length;
                    var3 = var3 > var4;
                    var1['hasAvailableSlots'] = var3;
                    var4 = _closure2_slot0;
                    var1['hasFetchedSubscriptionPlans'] = var4;
                    var5 = _closure1_slot14;
                    var4 = var5.isFetchingForPremiumSKUs;
                    var4 = var4.bind(var5)();
                    var1['isFetchingSubscriptionPlans'] = var4;
                    var4 = _closure1_slot12;
                    var4 = var4.isPaymentSourceFetching;
                    var1['isFetchingPaymentSources'] = var4;
                    var4 = _closure2_slot1;
                    var1['shouldFetchSubscriptionPlans'] = var4;
                    var4 = _closure2_slot2;
                    var1['fractionalState'] = var4;
                    var4 = _closure2_slot3;
                    var1['isInReverseTrial'] = var4;
                    var3 = _closure2_slot4;
                    var1['fpDurationText'] = var3;
                    var3 = _closure1_slot11;
                    var2 = var3.getCurrentUser;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var2 = var3.premiumGroupRole;
case 35:
                    var1['premiumGroupRole'] = var2;
                    return var1;
                }
            };
            var5 = var8.bind(var11)(var7, var5);
            var3 = var10[var3];
            var8 = var9.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var11 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var7.bind(var8)(var3, var2);
            var2 = 38;
            var2 = var10[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useNavigation;
            var8 = var2.bind(var3)();
            var2 = 39;
            var2 = var10[var2];
            var7 = var9.bind(var4)(var2);
            var3 = var7.getExternalManagementMessage;
            var2 = {};
            var2['shouldAllowExternalManagement'] = var12;
            var7 = var3.bind(var7)(var11, var2);
            var3 = _closure1_slot19;
            var2 = _closure1_slot22;
            var1 = {};
            var1['navigation'] = var8;
            var8 = 40;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.isMetaQuest;
            var8 = var8.bind(var9)();
            var6 = null;
            if(!var8) { _fun0007_ip = 22; continue _fun0007 }
case 37:
            var6 = var7;
case 22:
            var1['externalManagementMessage'] = var6;
            var14 = var1;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();