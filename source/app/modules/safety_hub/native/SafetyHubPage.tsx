// app/modules/safety_hub/native/SafetyHubPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function AutomatedUnderageAppealStatus() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 10;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getAgeCheckStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var1 = function getAutomatedAppealStatusMessage(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot9;
                    var1 = var1.SUCCESS;
                    if(!(var1 !== var3)) { _fun0002_ip = 368; continue _fun0002 }
 23:
                    var1 = _closure1_slot9;
                    var1 = var1.ERROR;
                    if(!(var1 !== var3)) { _fun0002_ip = 273; continue _fun0002 }
 40:
                    var1 = _closure1_slot9;
                    var1 = var1.FAILURE;
                    if(!(var1 !== var3)) { _fun0002_ip = 178; continue _fun0002 }
 57:
                    var1 = _closure1_slot9;
                    var1 = var1.LOADING;
                    if(!(var1 !== var3)) { _fun0002_ip = 83; continue _fun0002 }
 71:
                    var1 = {'message': null, 'type': null};
                    return var1;
 83:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var7 = var6[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.nhhy/f;
                    var3 = var7.bind(var8)(var3);
                    var1['message'] = var3;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.HelpMessageTypes;
                    var3 = var3.INFO;
                    var1['type'] = var3;
                    return var1;
 178:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var7 = var6[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.40R63t;
                    var3 = var7.bind(var8)(var3);
                    var1['message'] = var3;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.HelpMessageTypes;
                    var3 = var3.ERROR;
                    var1['type'] = var3;
                    return var1;
 273:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var7 = var6[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.4sILBQ;
                    var3 = var7.bind(var8)(var3);
                    var1['message'] = var3;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.HelpMessageTypes;
                    var3 = var3.ERROR;
                    var1['type'] = var3;
                    return var1;
 368:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var6 = var5[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var6);
                    var8 = var6.intl;
                    var7 = var8.format;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var6 = var2.hyh4lp;
                    var2 = {};
                    var9 = function loginHook(arg1) {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.Text;
                        var1 = {'variant': 'text-sm/medium', 'color': 'text-link'};
                        var5 = function onPress() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.logout;
                            var1 = _closure1_slot11;
                            var2 = var1.LOGIN;
                            var1 = 'safety_hub_page_appeal_success';
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1['onPress'] = var5;
                        var5 = arg1;
                        var1['children'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['loginHook'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var1['message'] = var2;
                    var2 = 9;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.HelpMessageTypes;
                    var2 = var2.SUCCESS;
                    var1['type'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var5)(var3);
            var6 = var1.message;
            var7 = var1.type;
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0001_ip = 129; continue _fun0001 }
 88:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var8 = _closure1_slot3;
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['messageType'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 129:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AgeCheckStatus;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var4 = var4.Routes;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingVertical'] = var12;
    var4['container'] = var9;
    var9 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['loadingIndicator'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['body'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/native/SafetyHubPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyHubPage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.visible;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot14;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 13;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var2 = 14;
            var2 = var9[var2];
            var11 = var4.bind(var5)(var2);
            var2 = var11.useSafetyHubInitialized;
            var2 = var2.bind(var11)();
            var _closure2_slot1 = var2;
            var2 = 15;
            var2 = var9[var2];
            var11 = var4.bind(var5)(var2);
            var2 = var11.useSafetyHubAccountStanding;
            var2 = var2.bind(var11)();
            var _closure2_slot2 = var2;
            var2 = 16;
            var2 = var9[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.useSafetyHubFetchError;
            var2 = var2.bind(var4)();
            var _closure2_slot3 = var2;
            var4 = 17;
            var4 = var9[var4];
            var7 = var7.bind(var5)(var4);
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getSafetyHubData;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 159; continue _fun0004 }
 45:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 19;
                    var2 = var7[var2];
                    var8 = var3.bind(var1)(var2);
                    var6 = var8.track;
                    var2 = _closure1_slot10;
                    var4 = var2.SAFETY_HUB_VIEWED;
                    var2 = {};
                    var9 = _closure2_slot2;
                    var9 = var9.state;
                    var2['account_standing'] = var9;
                    var2 = var6.bind(var8)(var4, var2);
                    var2 = 20;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.increment;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 21;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.MetricEvents;
                    var5 = var5.SAFETY_HUB_VIEW;
                    var2['name'] = var5;
                    var2 = var3.bind(var4)(var2);
 159:
                    return var1;
                }
            };
            var4 = var7.bind(var5)(var4);
            var9 = _closure1_slot4;
            var7 = var9.useEffect;
            var4 = new Array(2);
            var4[0] = var2;
            var4[1] = var10;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 64; continue _fun0005 }
 20:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var1 = 'SafetyHubErrorActionSheet';
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 144; continue _fun0005;
 64:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 22;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 24;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 23;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var6)(var2, var1);
                    var2 = 'SafetyHubErrorActionSheet';
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var2, var1);
 144:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var9)(var3, var4);
            if(var1) { _fun0003_ip = 372; continue _fun0003 }
 198:
            var1 = null;
            var2 = var1 != var2;
            if(var2) { _fun0003_ip = 370; continue _fun0003 }
 210:
            var4 = _closure1_slot13;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var9 = _closure1_slot5;
            var7 = {};
            var10 = var8.body;
            var7['style'] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot15;
            var10 = {};
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var14 = _closure1_slot12;
            var13 = _closure1_slot1;
            var12 = _closure1_slot3;
            var11 = 25;
            var11 = var12[var11];
            var13 = var13.bind(var5)(var11);
            var11 = {};
            var11 = var14.bind(var5)(var13, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var9 = var4.bind(var5)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var9 = 26;
            var9 = var12[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.ConnectedSafetyHubViolationsContainer;
            var9 = {};
            var9 = var11.bind(var5)(var10, var9);
            var7[1] = var9;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 370:
            _fun0003_ip = 447; continue _fun0003;
 372:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var9 = var8.container;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = var8.loadingIndicator;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 447:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();