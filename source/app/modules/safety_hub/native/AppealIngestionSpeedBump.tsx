// app/modules/safety_hub/native/AppealIngestionSpeedBump.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SafetyHubAnalyticsActions;
    var _closure1_slot5 = var7;
    var4 = var4.SafetyHubLinks;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = 16;
    var10 = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    var7['container'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/native/AppealIngestionSpeedBump.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppealIngestionSpeedBump(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.isCoppa;
            var12 = var1.isSpam;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot10;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getAppealClassificationId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var1 = 8;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useSafetyHubClassification;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot7;
case 2:
            var19 = var3.bind(var5)(var2);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEmitAppealIngestionEvent;
            var2 = var2.bind(var3)();
            _closure2_slot0 = var2;
            var9 = var19.isDsaEligible;
            var3 = var19.classification;
            var5 = var1 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.explainer_link;
case 4:
            var3 = var1 != var2;
            var16 = '';
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var2;
case 6:
            var2 = var19.classification;
            var3 = var1 == var2;
            var20 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var20 = var2.flagged_content;
case 8:
            if(!(var1 == var20)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var20 = new Array(0);
case 10:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var17 = 10;
            var1 = var18[var17];
            var1 = var6.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var18[var17];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.C5q+pa;
            var14 = var2.bind(var3)(var1);
            var1 = var18[var17];
            var1 = var6.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var18[var17];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.URt7VF;
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var5 = 11;
            var1 = var18[var5];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AppealIngestionModalScreen;
            var1 = {};
            var7 = _closure1_slot8;
            var5 = var18[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.AppealIngestionModalHeader;
            var5 = {};
            var5['headerText'] = var14;
            var5['subHeaderText'] = var13;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot3;
            var6 = {};
            var8 = var8.container;
            var6['style'] = var8;
            var13 = var20.length;
            var8 = 0;
            var13 = var13 > var8;
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = _closure1_slot8;
            var14 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 12;
            var8 = var21[var8];
            var14 = var14.bind(var4)(var8);
            var8 = {};
            var8['flaggedContent'] = var20;
            var13 = var18.bind(var4)(var14, var8);
case 12:
            var8 = new Array(6);
            var8[0] = var13;
            var18 = _closure1_slot8;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 13;
            var13 = var20[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var19 = var19.classification;
            var13['classification'] = var19;
            var13 = var18.bind(var4)(var14, var13);
            var8[1] = var13;
            var13 = var11;
            if(!var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var19 = _closure1_slot8;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 14;
            var14 = var20[var14];
            var18 = var18.bind(var4)(var14);
            var14 = {};
            var23 = _closure1_slot0;
            var21 = var20[var17];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var17];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.gJs+kZ;
            var20 = var21.bind(var22)(var20);
            var14['text'] = var20;
            var20 = _closure1_slot6;
            var20 = var20.AGE_VERIFICATION_LINK;
            var14['url'] = var20;
            var20 = function onPress() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot5;
                var2 = var1.ClickAgeVerificationLink;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var14['onPress'] = var20;
            var13 = var19.bind(var4)(var18, var14);
case 14:
            var8[2] = var13;
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = !var11;
case 16:
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = _closure1_slot8;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = 14;
            var13 = var19[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var22 = _closure1_slot0;
            var20 = var19[var17];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var17];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.NBsJvr;
            var19 = var20.bind(var21)(var19);
            var13['text'] = var19;
            var19 = _closure1_slot6;
            var19 = var19.SPAM_LINK;
            var13['url'] = var19;
            var19 = function onPress() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot5;
                var2 = var1.ClickSpamWebformLink;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var13['onPress'] = var19;
            var12 = var18.bind(var4)(var14, var13);
case 18:
            var8[3] = var12;
            var11 = !var11;
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var14 = _closure1_slot8;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 14;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var21 = _closure1_slot0;
            var19 = var18[var17];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var17];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.Vtyn//;
            var18 = var19.bind(var20)(var18);
            var12['text'] = var18;
            var12['url'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot0;
                var1 = _closure1_slot5;
                var2 = var1.ClickLearnMoreLink;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 20:
            var8[4] = var11;
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = _closure1_slot8;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 15;
            var10 = var13[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.TextWithIOSLinkWorkaround;
            var10 = {};
            var15 = 'text-xs/normal';
            var10['variant'] = var15;
            var15 = var13[var17];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.WMUgCQ;
            var13 = {};
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 22:
            var8[5] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();