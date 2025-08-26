// app/modules/safety_hub/native/AppealIngestionModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function getHeader(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Text;
        var1 = {};
        var5 = 'text-md/normal';
        var1['variant'] = var5;
        var1['children'] = var3;
        var1 = var4.bind(var3)(var2, var1);
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.APPEAL_INGESTION_IMPRESSION_PROPERTIES;
    var _closure1_slot9 = var7;
    var4 = var4.AppealIngestionSections;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = var7;
    var10 = var4.Fonts;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var11;
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = 14;
    var9['fontSize'] = var13;
    var10 = var10.PRIMARY_SEMIBOLD;
    var9['fontFamily'] = var10;
    var4['buttonTextStyles'] = var9;
    var10 = 16;
    var9 = {'alignSelf': 'stretch', 'marginTop': 16, 'marginBottom': 8, 'paddingHorizontal': 16};
    var4['headerContainer'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['header'] = var9;
    var9 = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    var4['subheader'] = var9;
    var9 = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {'height': 1, 'backgroundColor': null, 'marginVertical': 24};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var11;
    var4['separator'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['footerContainer'] = var9;
    var9 = {'marginBottom': 16, 'textAlign': 'center'};
    var4['footerText'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var4['footerButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/native/AppealIngestionModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function AppealIngestionModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.classificationId;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSafetyHubClassification;
            var3 = var2.bind(var3)(var5);
            var2 = var3.isDsaEligible;
            var _closure2_slot0 = var2;
            var7 = var3.classification;
            var2 = null;
            var8 = var2 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 88; continue _fun0001 }
 82:
            var5 = var7.is_spam;
 88:
            if(var5) { _fun0001_ip = 93; continue _fun0001 }
 91:
            var5 = false;
 93:
            _closure2_slot1 = var5;
            var3 = var3.classification;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 118; continue _fun0001 }
 112:
            var2 = var3.is_coppa;
 118:
            if(var2) { _fun0001_ip = 123; continue _fun0001 }
 121:
            var2 = false;
 123:
            _closure2_slot2 = var2;
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var2 = 29;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var1 = function() {
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = _closure2_slot2;
                var2 = function getScreens(arg1, arg2, arg3) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = arg2;
                    var _closure4_slot1 = var1;
                    var1 = arg3;
                    var _closure4_slot2 = var1;
                    var1 = {};
                    var2 = _closure1_slot10;
                    var12 = var2.SPEED_BUMP;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var11 = 21;
                    var5 = var8[var11];
                    var6 = undefined;
                    var15 = var7.bind(var6)(var5);
                    var14 = var15.getHeaderCloseButton;
                    var13 = _closure1_slot1;
                    var10 = 15;
                    var5 = var8[var10];
                    var5 = var13.bind(var6)(var5);
                    var5 = var5.close;
                    var5 = var14.bind(var15)(var5);
                    var3['headerLeft'] = var5;
                    var5 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var3['headerTitle'] = var5;
                    var5 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 22;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = _closure4_slot0;
                        var1['isDsaEligible'] = var6;
                        var6 = _closure4_slot1;
                        var1['isSpam'] = var6;
                        var5 = _closure4_slot2;
                        var1['isCoppa'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var5;
                    var5 = 23;
                    var14 = var8[var5];
                    var14 = var7.bind(var6)(var14);
                    var14 = var14.ImpressionNames;
                    var14 = var14.APPEAL_INGESTION_SPEED_BUMP;
                    var3['impressionName'] = var14;
                    var4 = _closure1_slot9;
                    var3['impressionProperties'] = var4;
                    var1[var12] = var3;
                    var12 = var2.COLLECT_SIGNAL;
                    var3 = {};
                    var14 = var8[var11];
                    var15 = var7.bind(var6)(var14);
                    var14 = var15.getHeaderBackButton;
                    var14 = var14.bind(var15)();
                    var3['headerLeft'] = var14;
                    var14 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var3['headerTitle'] = var14;
                    var14 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 24;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure4_slot0;
                        var1['isDsaEligible'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var14;
                    var14 = var8[var5];
                    var14 = var7.bind(var6)(var14);
                    var14 = var14.ImpressionNames;
                    var14 = var14.APPEAL_INGESTION_COLLECT_SIGNAL;
                    var3['impressionName'] = var14;
                    var3['impressionProperties'] = var4;
                    var1[var12] = var3;
                    var12 = var2.CONFIRM_SUBMISSION;
                    var3 = {};
                    var14 = var8[var11];
                    var15 = var7.bind(var6)(var14);
                    var14 = var15.getHeaderBackButton;
                    var14 = var14.bind(var15)();
                    var3['headerLeft'] = var14;
                    var14 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var3['headerTitle'] = var14;
                    var14 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 25;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure4_slot0;
                        var1['isDsaEligible'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var14;
                    var14 = var8[var5];
                    var14 = var7.bind(var6)(var14);
                    var14 = var14.ImpressionNames;
                    var14 = var14.APPEAL_INGESTION_CONFIRM_SUBMISSION;
                    var3['impressionName'] = var14;
                    var3['impressionProperties'] = var4;
                    var1[var12] = var3;
                    var12 = var2.REQUEST_SENT;
                    var3 = {};
                    var14 = var8[var11];
                    var16 = var7.bind(var6)(var14);
                    var15 = var16.getHeaderCloseButton;
                    var14 = var8[var10];
                    var14 = var13.bind(var6)(var14);
                    var14 = var14.close;
                    var14 = var15.bind(var16)(var14);
                    var3['headerLeft'] = var14;
                    var14 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var3['headerTitle'] = var14;
                    var14 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 26;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var14;
                    var14 = var8[var5];
                    var14 = var7.bind(var6)(var14);
                    var14 = var14.ImpressionNames;
                    var14 = var14.APPEAL_INGESTION_REQUEST_SENT;
                    var3['impressionName'] = var14;
                    var3['impressionProperties'] = var4;
                    var1[var12] = var3;
                    var12 = var2.THANKS;
                    var3 = {};
                    var14 = var8[var11];
                    var16 = var7.bind(var6)(var14);
                    var15 = var16.getHeaderCloseButton;
                    var14 = var8[var10];
                    var14 = var13.bind(var6)(var14);
                    var14 = var14.close;
                    var14 = var15.bind(var16)(var14);
                    var3['headerLeft'] = var14;
                    var14 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var3['headerTitle'] = var14;
                    var14 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 27;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3['render'] = var14;
                    var14 = var8[var5];
                    var14 = var7.bind(var6)(var14);
                    var14 = var14.ImpressionNames;
                    var14 = var14.APPEAL_INGESTION_THANKS;
                    var3['impressionName'] = var14;
                    var3['impressionProperties'] = var4;
                    var1[var12] = var3;
                    var3 = var2.SPAM;
                    var2 = {};
                    var11 = var8[var11];
                    var12 = var7.bind(var6)(var11);
                    var11 = var12.getHeaderCloseButton;
                    var10 = var8[var10];
                    var10 = var13.bind(var6)(var10);
                    var10 = var10.close;
                    var10 = var11.bind(var12)(var10);
                    var2['headerLeft'] = var10;
                    var10 = function headerTitle() {
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var2['headerTitle'] = var10;
                    var9 = function render() {
                        var4 = _closure1_slot12;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 28;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['render'] = var9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ImpressionNames;
                    var5 = var5.APPEAL_INGESTION_SPAM;
                    var2['impressionName'] = var5;
                    var2['impressionProperties'] = var4;
                    var1[var3] = var2;
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var5, var4, var3);
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var3 = _closure1_slot12;
            var8 = _closure1_slot0;
            var1 = 30;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var6 = _closure1_slot10;
            var6 = var6.SPEED_BUMP;
            var1['initialRouteName'] = var6;
            var1['screens'] = var5;
            var5 = 19;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.13/7kZ;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var5 = 'center';
            var1['headerTitleAlign'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function AppealIngestionModalHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.headerText;
            var10 = var1.subHeaderText;
            var1 = _closure1_slot15;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var11.headerContainer;
            var1['style'] = var5;
            var9 = null;
            var6 = var9 != var13;
            if(!var6) { _fun0002_ip = 65; continue _fun0002 }
 57:
            var5 = '';
            var6 = var5 !== var13;
 65:
            if(!var6) { _fun0002_ip = 132; continue _fun0002 }
 68:
            var12 = _closure1_slot12;
            var8 = _closure1_slot0;
            var14 = _closure1_slot3;
            var5 = 10;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var14 = var11.header;
            var5['style'] = var14;
            var5['children'] = var13;
            var6 = var12.bind(var4)(var8, var5);
 132:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = var9 != var10;
            var6 = null;
            if(!var8) { _fun0002_ip = 230; continue _fun0002 }
 149:
            var12 = var10.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0002_ip = 230; continue _fun0002 }
 165:
            var9 = _closure1_slot12;
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var7 = 10;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var11 = var11.subheader;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 230:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AppealIngestionModalHeader'] = var4;
    var2 = function AppealIngestionModalScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var6 = var2.children;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot15;
            var26 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var10 = 11;
            var2 = var5[var10];
            var11 = var3.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var8 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var8;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getIsSubmitting;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var9.bind(var11)(var7, var2);
            var2 = 12;
            var7 = var5[var2];
            var9 = var3.bind(var4)(var7);
            var7 = var9.useSafetyHubAppealSignal;
            var9 = var7.bind(var9)();
            var _closure2_slot0 = var9;
            var7 = var5[var10];
            var13 = var3.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var8;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getFreeTextAppealReason;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var12.bind(var13)(var11, var7);
            var _closure2_slot1 = var7;
            var10 = var5[var10];
            var12 = var3.bind(var4)(var10);
            var11 = var12.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getAppealClassificationId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var _closure2_slot2 = var10;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useSafetyHubClassification;
            var3 = null;
            var2 = var10;
            if(!(var3 == var2)) { _fun0003_ip = 225; continue _fun0003 }
 221:
            var2 = _closure1_slot11;
 225:
            var2 = var5.bind(var8)(var2);
            var8 = var2.classification;
            var11 = var3 == var8;
            var5 = undefined;
            if(var11) { _fun0003_ip = 251; continue _fun0003 }
 245:
            var5 = var8.is_spam;
 251:
            if(var5) { _fun0003_ip = 256; continue _fun0003 }
 254:
            var5 = false;
 256:
            var11 = var2.classification;
            var12 = var3 == var11;
            var8 = undefined;
            if(var12) { _fun0003_ip = 277; continue _fun0003 }
 271:
            var8 = var11.is_coppa;
 277:
            if(var8) { _fun0003_ip = 282; continue _fun0003 }
 280:
            var8 = false;
 282:
            var2 = var2.classification;
            var11 = var3 == var2;
            var12 = undefined;
            if(var11) { _fun0003_ip = 305; continue _fun0003 }
 297:
            var12 = var2.appeal_ingestion_type;
 305:
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var2 = 13;
            var2 = var13[var2];
            var11 = var11.bind(var4)(var2);
            var2 = var11.useNavigation;
            var2 = var2.bind(var11)();
            _closure2_slot3 = var2;
            var3 = var3 != var12;
            if(!var3) { _fun0003_ip = 382; continue _fun0003 }
 346:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var11 = 14;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.AppealIngestionType;
            var11 = var11.IN_APP;
            var3 = var12 !== var11;
 382:
            if(var3) { _fun0003_ip = 388; continue _fun0003 }
 385:
            var3 = var8;
 388:
            if(var3) { _fun0003_ip = 394; continue _fun0003 }
 391:
            var3 = var5;
 394:
            var8 = !var3;
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var17 = '';
            var3 = var3.bind(var5)(var17);
            var14 = _closure1_slot5;
            var13 = 2;
            var3 = var14.bind(var4)(var3, var13);
            var12 = 0;
            var22 = var3[var12];
            var11 = 1;
            var3 = var3[var11];
            _closure2_slot4 = var3;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var17);
            var3 = var14.bind(var4)(var3, var13);
            var16 = var3[var12];
            _closure2_slot5 = var16;
            var3 = var3[var11];
            _closure2_slot6 = var3;
            var12 = var5.useEffect;
            var11 = new Array(1);
            var11[0] = var2;
            var3 = function() {
                var5 = _closure2_slot3;
                var4 = var5.addListener;
                var3 = 'state';
                var2 = function() {
                    var3 = _closure2_slot3;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var3 = var2.routes;
                    var4 = _closure2_slot3;
                    var2 = var4.getState;
                    var2 = var2.bind(var4)();
                    var2 = var2.routes;
                    var4 = var2.length;
                    var2 = 1;
                    var2 = var4 - var2;
                    var2 = var3[var2];
                    var3 = var2.name;
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var4 = _closure2_slot3;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot0;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = var12.bind(var5)(var3, var11);
            var11 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var16;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot10;
                    var3 = var3.SPEED_BUMP;
                    if(!(var4 !== var3)) { _fun0004_ip = 149; continue _fun0004 }
 27:
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot10;
                    var3 = var3.COLLECT_SIGNAL;
                    if(!(var4 !== var3)) { _fun0004_ip = 123; continue _fun0004 }
 45:
                    var4 = _closure2_slot5;
                    var3 = _closure1_slot10;
                    var3 = var3.CONFIRM_SUBMISSION;
                    if(!(var4 !== var3)) { _fun0004_ip = 97; continue _fun0004 }
 63:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.close;
                    var3 = var3.bind(var4)();
                    _fun0004_ip = 173; continue _fun0004;
 97:
                    var5 = _closure2_slot3;
                    var4 = var5.push;
                    var3 = _closure1_slot10;
                    var3 = var3.REQUEST_SENT;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 173; continue _fun0004;
 123:
                    var5 = _closure2_slot3;
                    var4 = var5.push;
                    var3 = _closure1_slot10;
                    var3 = var3.CONFIRM_SUBMISSION;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 173; continue _fun0004;
 149:
                    var3 = _closure2_slot3;
                    var2 = var3.push;
                    var1 = _closure1_slot10;
                    var1 = var1.COLLECT_SIGNAL;
                    var1 = var2.bind(var3)(var1);
 173:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var11.bind(var5)(var2, var3);
            _closure2_slot7 = var15;
            var3 = var5.useCallback;
            var2 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 184; continue _fun0005 }
 10:
                        var2 = undefined;
                        var7 = undefined;
                        var3 = _closure2_slot2;
                        var8 = null;
                        if(!(var8 !== var3)) { _fun0005_ip = 181; continue _fun0005 }
 30: // try_start_0
                        var5 = _closure2_slot4;
                        var3 = '';
                        var3 = var5.bind(var2)(var3);
                        var5 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var3 = 16;
                        var3 = var6[var3];
                        var10 = var5.bind(var2)(var3);
                        var9 = var10.requestReview;
                        var6 = _closure2_slot2;
                        var5 = _closure2_slot0;
                        var3 = _closure2_slot1;
                        var3 = var9.bind(var10)(var6, var5, var3);
                        SaveGenerator(address=95);
 93:
                        return var3;
 95:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0005_ip = 111; continue _fun0005 }
 101:
                        var5 = _closure2_slot7;
                        var5 = var5.bind(var2)();
 109: // try_end0
                        _fun0005_ip = 181; continue _fun0005;
 111:
                        return var3;
 114: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var4 = _closure2_slot4;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var5 = 17;
                        var5 = var9[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.getRequestReviewErrorFromCode;
                        var3 = var3.body;
                        var7 = var3;
                        var8 = var8 == var3;
                        var3 = undefined;
                        if(var8) { _fun0005_ip = 171; continue _fun0005 }
 166:
                        var3 = var7.code;
 171:
                        var3 = var5.bind(var6)(var3);
                        var3 = var4.bind(var2)(var3);
 181:
                        return var2;
 184:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(4);
            var1[0] = var10;
            var1[1] = var9;
            var1[2] = var7;
            var1[3] = var15;
            var27 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var26.container;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var26.footerContainer;
            var6['style'] = var7;
            var9 = _closure1_slot12;
            var7 = {};
            var10 = var26.separator;
            var7['style'] = var10;
            var9 = var9.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var9;
            if(!var8) { _fun0003_ip = 1274; continue _fun0003 }
 659:
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var9 = 18;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var12 = true;
            var9['bottom'] = var12;
            var12 = var26.footerButton;
            var9['style'] = var12;
            var12 = _closure1_slot10;
            var12 = var12.CONFIRM_SUBMISSION;
            if(!(var16 !== var12)) { _fun0003_ip = 920; continue _fun0003 }
 724:
            var14 = _closure1_slot12;
            var13 = _closure1_slot1;
            var18 = _closure1_slot3;
            var12 = 20;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['onPress'] = var15;
            var15 = var26.buttonTextStyles;
            var12['textStyle'] = var15;
            var15 = _closure1_slot10;
            var15 = var15.REQUEST_SENT;
            if(!(var16 !== var15)) { _fun0003_ip = 850; continue _fun0003 }
 779:
            var15 = _closure1_slot10;
            var15 = var15.THANKS;
            if(!(var16 !== var15)) { _fun0003_ip = 850; continue _fun0003 }
 793:
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var15 = 19;
            var16 = var21[var15];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.XiOHRU;
            var15 = var16.bind(var18)(var15);
            _fun0003_ip = 905; continue _fun0003;
 850:
            var21 = _closure1_slot0;
            var23 = _closure1_slot3;
            var16 = 19;
            var18 = var23[var16];
            var18 = var21.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var23[var16];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.i4jeWV;
            var15 = var18.bind(var19)(var16);
 905:
            var12['text'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            _fun0003_ip = 1264; continue _fun0003;
 920:
            var15 = _closure1_slot13;
            var14 = _closure1_slot14;
            var13 = {};
            var19 = _closure1_slot12;
            var30 = _closure1_slot0;
            var21 = _closure1_slot3;
            var23 = 10;
            var16 = var21[var23];
            var16 = var30.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var24 = var26.footerText;
            var16['style'] = var24;
            var24 = 19;
            var28 = var21[var24];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var21 = var21[var24];
            var21 = var30.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.d6qgY2;
            var21 = var28.bind(var29)(var21);
            var16['children'] = var21;
            var18 = var19.bind(var4)(var18, var16);
            var16 = new Array(3);
            var16[0] = var18;
            var17 = var17 !== var22;
            if(!var17) { _fun0003_ip = 1117; continue _fun0003 }
 1057:
            var21 = _closure1_slot12;
            var19 = _closure1_slot0;
            var18 = _closure1_slot3;
            var18 = var18[var23];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
            var23 = var26.footerText;
            var18['style'] = var23;
            var18['children'] = var22;
            var17 = var21.bind(var4)(var19, var18);
 1117:
            var16[1] = var17;
            var19 = _closure1_slot12;
            var22 = _closure1_slot1;
            var23 = _closure1_slot3;
            var21 = 20;
            var17 = var23[var21];
            var18 = var22.bind(var4)(var17);
            var17 = {};
            var17['onPress'] = var27;
            var26 = var26.buttonTextStyles;
            var17['textStyle'] = var26;
            var27 = _closure1_slot0;
            var25 = var23[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var23[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.geKm7u;
            var24 = var25.bind(var26)(var24);
            var17['text'] = var24;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.Colors;
            var21 = var21.RED;
            var17['color'] = var21;
            var17['loading'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[2] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 1264:
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 1274:
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['AppealIngestionModalScreen'] = var2;
    return var1;
})();