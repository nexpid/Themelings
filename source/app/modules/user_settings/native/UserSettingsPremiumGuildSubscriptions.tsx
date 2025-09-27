// app/modules/user_settings/native/UserSettingsPremiumGuildSubscriptions.tsx
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
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.View;
    var _closure1_slot9 = var9;
    var7 = var7.ScrollView;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var11 = 8;
    var7 = var6[var11];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.HelpdeskArticles;
    var _closure1_slot14 = var8;
    var7 = var7.UserSettingsSections;
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FractionalPremiumStates;
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot17 = var8;
    var7 = var7.jsxs;
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var12 = 'relative';
    var10['position'] = var12;
    var7['upsellSection'] = var10;
    var10 = {'position': 'absolute', 'width': '100%'};
    var7['background'] = var10;
    var10 = {'flex': 1, 'backgroundColor': null, 'marginTop': 16};
    var12 = 14;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.DARK_TRANSPARENT_LIGHT_WHITE_500;
    var10['backgroundColor'] = var12;
    var7['scroller'] = var10;
    var10 = {'paddingHorizontal': 16, 'paddingBottom': 32};
    var7['subscriptionHeader'] = var10;
    var10 = {};
    var12 = 18;
    var10['lineHeight'] = var12;
    var7['blurb'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var7['blurbNotLast'] = var10;
    var10 = {'marginHorizontal': 16, 'alignContent': 'center'};
    var7['fpCountDown'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot19 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function UserSettingsPremiumGuildSubscriptions(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                var1 = _closure1_slot21;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = false;
                var3['isOnCooldown'] = var4;
                var1['state'] = var3;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                            var1 = _closure1_slot15;
                            var1 = var1.PREMIUM;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 15;
                        var5 = var7[var1];
                        var1 = undefined;
                        var9 = var6.bind(var1)(var5);
                        var6 = var9.setSection;
                        var8 = _closure1_slot15;
                        var5 = var8.PREMIUM;
                        var5 = var6.bind(var9)(var5);
                        var6 = _closure1_slot0;
                        var5 = 16;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.trackUserSettingsPaneViewed;
                        var5 = {};
                        var8 = var8.PREMIUM;
                        var5['destinationPane'] = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = null;
                        if(!(var5 == var3)) { _fun0003_ip = 168; continue _fun0003 }
 146:
                        var5 = var4.push;
                        var2 = _closure1_slot15;
                        var2 = var2.PREMIUM;
                        var2 = var5.bind(var4)(var2);
                        _fun0003_ip = 179; continue _fun0003;
 168:
                        var2 = var4.navigate;
                        var2 = var2.bind(var4)(var3);
 179:
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
 0:
                var1 = this;
                var2 = var1.props;
                var2 = var2.hasFetchedSlots;
                if(var2) { _fun0004_ip = 52; continue _fun0004 }
 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchGuildBoostSlots;
                var2 = var2.bind(var3)();
 52:
                var2 = var1.props;
                var2 = var2.shouldFetchSubscriptionPlans;
                if(!var2) { _fun0004_ip = 80; continue _fun0004 }
 66:
                var3 = var1.props;
                var3 = var3.isFetchingSubscriptionPlans;
                var2 = !var3;
 80:
                if(!var2) { _fun0004_ip = 118; continue _fun0004 }
 83:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchPremiumSubscriptionPlans;
                var2 = var2.bind(var3)();
 118:
                var1 = var1.props;
                var1 = var1.isFetchingPaymentSources;
                if(var1) { _fun0004_ip = 167; continue _fun0004 }
 132:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchPaymentSources;
                var1 = var1.bind(var2)();
 167:
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
 0:
                var1 = this;
                var3 = _closure1_slot19;
                var2 = var1.context;
                var5 = undefined;
                var15 = var3.bind(var5)(var2);
                var1 = var1.props;
                var2 = var1.hasSlots;
                var1 = null;
                if(!var2) { _fun0005_ip = 414; continue _fun0005 }
 41:
                var4 = _closure1_slot18;
                var2 = _closure1_slot8;
                var3 = var2.Fragment;
                var2 = {};
                var7 = _closure1_slot9;
                var6 = {};
                var8 = var15.subscriptionHeader;
                var6['style'] = var8;
                var9 = _closure1_slot17;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 20;
                var8 = var10[var8];
                var8 = var14.bind(var5)(var8);
                var12 = var8.Text;
                var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                var13 = var15.blurb;
                var8 = new Array(2);
                var8[0] = var13;
                var13 = var15.blurbNotLast;
                var8[1] = var13;
                var11['style'] = var8;
                var8 = 21;
                var13 = var10[var8];
                var13 = var14.bind(var5)(var13);
                var17 = var13.intl;
                var16 = var17.string;
                var13 = var10[var8];
                var13 = var14.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.GwnFOz;
                var13 = var16.bind(var17)(var13);
                var11['children'] = var13;
                var12 = var9.bind(var5)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = 22;
                var12 = var10[var12];
                var12 = var14.bind(var5)(var12);
                var13 = var12.TextWithIOSLinkWorkaround;
                var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                var15 = var15.blurb;
                var12['style'] = var15;
                var15 = var10[var8];
                var15 = var14.bind(var5)(var15);
                var17 = var15.intl;
                var16 = var17.format;
                var8 = var10[var8];
                var8 = var14.bind(var5)(var8);
                var8 = var8.t;
                var15 = var8.A4UTjI;
                var14 = {};
                var8 = _closure1_slot1;
                var19 = 23;
                var19 = var10[var19];
                var20 = var8.bind(var5)(var19);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot14;
                var18 = var18.GUILD_SUBSCRIPTIONS;
                var18 = var19.bind(var20)(var18);
                var14['helpdeskArticle'] = var18;
                var14 = var16.bind(var17)(var15, var14);
                var12['children'] = var14;
                var12 = var9.bind(var5)(var13, var12);
                var11[1] = var12;
                var6['children'] = var11;
                var7 = var4.bind(var5)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = 24;
                var7 = var10[var7];
                var8 = var8.bind(var5)(var7);
                var7 = {};
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 414:
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
 0:
                var17 = this;
                var2 = _closure1_slot19;
                var1 = var17.context;
                var4 = undefined;
                var19 = var2.bind(var4)(var1);
                var1 = var17.props;
                var12 = var1.hasFetchedSubscriptionPlans;
                var14 = var1.hasAvailableSlots;
                var9 = var1.fpDurationText;
                var16 = var1.fractionalState;
                var15 = var1.isInReverseTrial;
                var3 = _closure1_slot18;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var19.scroller;
                var1['style'] = var5;
                var5 = _closure1_slot16;
                var5 = var5.NONE;
                var6 = null;
                if(!(var16 !== var5)) { _fun0006_ip = 145; continue _fun0006 }
 93:
                var8 = _closure1_slot17;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 25;
                var5 = var13[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['fpDurationText'] = var9;
                var5['isInReverseTrial'] = var15;
                var9 = var19.fpCountDown;
                var5['style'] = var9;
                var6 = var8.bind(var4)(var7, var5);
 145:
                var5 = new Array(3);
                var5[0] = var6;
                var6 = var17.renderPremiumGuildSubscriptions;
                var6 = var6.bind(var17)();
                var5[1] = var6;
                var8 = _closure1_slot18;
                var7 = _closure1_slot9;
                var6 = {};
                var9 = var19.upsellSection;
                var6['style'] = var9;
                var18 = _closure1_slot17;
                var13 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 26;
                var9 = var20[var9];
                var9 = var13.bind(var4)(var9);
                var13 = var9.TopPattern;
                var9 = {};
                var19 = var19.background;
                var9['style'] = var19;
                var13 = var18.bind(var4)(var13, var9);
                var9 = new Array(2);
                var9[0] = var13;
                var10 = null;
                if(!var12) { _fun0006_ip = 308; continue _fun0006 }
 250:
                var13 = _closure1_slot17;
                var12 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 27;
                var11 = var18[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var17 = var17.handleLearnMorePremium;
                var11['onLearnMorePremium'] = var17;
                var11['fractionalState'] = var16;
                var11['isInReverseTrial'] = var15;
                var11['hasAvailableSlots'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 308:
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot20 = var7;
    var4 = 28;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsPremiumGuildSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedUserSettingsPremiumGuildSubscriptions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var6 = var1.route;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 29;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSubscriptionPlansLoaded;
            var3 = var3.bind(var5)();
            var _closure2_slot0 = var3;
            var3 = null;
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0007_ip = 98; continue _fun0007 }
 77:
            var6 = var6.params;
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0007_ip = 98; continue _fun0007 }
 92:
            var5 = var6.shouldFetchSubscriptionPlans;
 98:
            var3 = var3 == var5;
            if(var3) { _fun0007_ip = 108; continue _fun0007 }
 105:
            var3 = var5;
 108:
            _closure2_slot1 = var3;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 30;
            var3 = var6[var3];
            var5 = var9.bind(var4)(var3);
            var3 = {};
            var7 = true;
            var3['forceFetch'] = var7;
            var3 = var5.bind(var4)(var3);
            var5 = var3.fractionalState;
            _closure2_slot2 = var5;
            var8 = var3.endsAt;
            var3 = _closure1_slot0;
            var5 = 31;
            var5 = var6[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useIsInReverseTrial;
            var5 = var5.bind(var7)();
            _closure2_slot3 = var5;
            var5 = 32;
            var7 = var6[var5];
            var7 = var9.bind(var4)(var7);
            var5 = var6[var5];
            var5 = var3.bind(var4)(var5);
            var5 = var5.CountDownMessageTypes;
            var5 = var5.LONG_TIME_LEFT;
            var5 = var7.bind(var4)(var8, var5);
            _closure2_slot4 = var5;
            var5 = 33;
            var5 = var6[var5];
            var8 = var3.bind(var4)(var5);
            var7 = var8.useStateFromStoresObject;
            var9 = _closure1_slot12;
            var5 = new Array(3);
            var5[0] = var9;
            var9 = _closure1_slot11;
            var5[1] = var9;
            var9 = _closure1_slot13;
            var5[2] = var9;
            var2 = function() {
                var1 = {};
                var2 = _closure1_slot12;
                var4 = var2.hasFetched;
                var1['hasFetchedSlots'] = var4;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.keys;
                var4 = var2.boostSlots;
                var4 = var6.bind(var7)(var4);
                var6 = var4.length;
                var4 = 0;
                var6 = var6 > var4;
                var1['hasSlots'] = var6;
                var6 = var5.Object;
                var5 = var6.values;
                var2 = var2.boostSlots;
                var6 = var5.bind(var6)(var2);
                var5 = var6.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAvailable;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var2 = var2.length;
                var2 = var2 > var4;
                var1['hasAvailableSlots'] = var2;
                var4 = _closure2_slot0;
                var1['hasFetchedSubscriptionPlans'] = var4;
                var5 = _closure1_slot13;
                var4 = var5.isFetchingForPremiumSKUs;
                var4 = var4.bind(var5)();
                var1['isFetchingSubscriptionPlans'] = var4;
                var3 = _closure1_slot11;
                var3 = var3.isPaymentSourceFetching;
                var1['isFetchingPaymentSources'] = var3;
                var3 = _closure2_slot1;
                var1['shouldFetchSubscriptionPlans'] = var3;
                var3 = _closure2_slot2;
                var1['fractionalState'] = var3;
                var3 = _closure2_slot3;
                var1['isInReverseTrial'] = var3;
                var2 = _closure2_slot4;
                var1['fpDurationText'] = var2;
                return var1;
            };
            var10 = var7.bind(var8)(var5, var2);
            var2 = 34;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var6 = var2.bind(var3)();
            var3 = _closure1_slot17;
            var2 = _closure1_slot20;
            var1 = {};
            var1['navigation'] = var6;
            var11 = var1;
            var5 = copyDataProperties(var11, var10);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();