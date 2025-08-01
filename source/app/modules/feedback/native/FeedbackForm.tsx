// app/modules/feedback/native/FeedbackForm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackRating;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['ratingsLabel'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginBottom'] = var10;
    var4['reasonsHeader'] = var9;
    var9 = {'overflow': 'hidden', 'marginBottom': 12, 'padding': 0};
    var4['reasonsList'] = var9;
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var9['color'] = var12;
    var4['reason'] = var9;
    var9 = {'paddingHorizontal': 0, 'paddingVertical': 8};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['doNotShowAgainContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/FeedbackForm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FeedbackForm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var7 = var3.showDoNotShowAgainCheckbox;
            var14 = var3.ratingsBodyLabel;
            var20 = var3.reasonsHeaderLabel;
            var21 = var3.reasons;
            var _closure2_slot0 = var21;
            var2 = var3.otherKey;
            var _closure2_slot1 = var2;
            var1 = var3.onFeedbackChanged;
            var _closure2_slot2 = var1;
            var3 = var3.trackOpen;
            var _closure2_slot3 = var3;
            var3 = _closure1_slot8;
            var4 = undefined;
            var17 = var3.bind(var4)();
            var _closure2_slot4 = var17;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var19 = var3.bind(var4)(var21);
            var _closure2_slot5 = var19;
            var6 = _closure1_slot4;
            var9 = var6.useState;
            var3 = 7;
            var3 = var8[var3];
            var10 = var5.bind(var4)(var3);
            var3 = var10.shuffle;
            var3 = var3.bind(var10)(var21);
            var3 = var9.bind(var6)(var3);
            var15 = _closure1_slot3;
            var11 = 2;
            var16 = var15.bind(var4)(var3, var11);
            var10 = 0;
            var3 = var16[var10];
            var9 = 1;
            var16 = var16[var9];
            var _closure2_slot6 = var16;
            var18 = var6.useEffect;
            var16 = new Array(3);
            var16[0] = var21;
            var16[1] = var19;
            var16[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.isEqual;
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var5, var3);
                    if(var3) { _fun0002_ip = 100; continue _fun0002 }
 51:
                    var3 = _closure2_slot6;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.shuffleProblems;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var3.bind(var1)(var2);
 100:
                    return var1;
                }
            };
            var2 = var18.bind(var6)(var2, var16);
            var16 = var6.useState;
            var2 = {};
            var2 = var16.bind(var6)(var2);
            var2 = var15.bind(var4)(var2, var11);
            var16 = var2[var10];
            var _closure2_slot7 = var16;
            var2 = var2[var9];
            var _closure2_slot8 = var2;
            var2 = 9;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = function() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var5.bind(var4)(var2);
            var5 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot7;
                    var3 = var1.doNotShowAgain;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 25; continue _fun0003 }
 22:
                    var1 = var3;
 25:
                    var5 = _closure2_slot8;
                    var4 = {};
                    var3 = _closure2_slot7;
                    var8 = var4;
                    var7 = var3;
                    var6 = copyDataProperties(var8, var7);
                    var6 = !var1;
                    var1 = 'doNotShowAgain';
                    var4[var1] = var6;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var10 = var5.bind(var6)(var1, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.label;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var13 = arg1;
                    var5 = arg2;
                    var _closure3_slot0 = var13;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot4;
                    var3 = var2.Fragment;
                    var2 = {};
                    var6 = 0;
                    var6 = var5 > var6;
                    var7 = null;
                    if(!var6) { _fun0004_ip = 82; continue _fun0004 }
 42:
                    var11 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 10;
                    var6 = var9[var6];
                    var9 = undefined;
                    var6 = var8.bind(var9)(var6);
                    var8 = var6.FormDivider;
                    var6 = {};
                    var7 = var11.bind(var9)(var8, var6);
 82:
                    var6 = new Array(2);
                    var6[0] = var7;
                    var9 = _closure1_slot6;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 10;
                    var7 = var14[var11];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var8 = var7.FormRow;
                    var7 = {};
                    var15 = _closure2_slot4;
                    var15 = var15.reason;
                    var7['labelStyle'] = var15;
                    var11 = var14[var11];
                    var11 = var12.bind(var1)(var11);
                    var12 = var11.FormLabel;
                    var11 = {};
                    var13 = var13.label;
                    var11['text'] = var13;
                    var13 = 2;
                    var11['numberOfLines'] = var13;
                    var11 = var9.bind(var1)(var12, var11);
                    var7['label'] = var11;
                    var10 = function onPress() {
                        var4 = _closure3_slot0;
                        var3 = {};
                        var5 = _closure2_slot7;
                        var6 = var3;
                        var1 = copyDataProperties(var6, var5);
                        var1 = 'reason';
                        var3[var1] = var4;
                        var4 = _closure2_slot8;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var7['onPress'] = var10;
                    var7 = var9.bind(var1)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var18 = var2.bind(var3)(var1);
            var1 = var16.rating;
            var15 = null;
            var1 = var15 != var1;
            var6 = null;
            if(!var1) { _fun0001_ip = 533; continue _fun0001 }
 354:
            var2 = var16.rating;
            var1 = _closure1_slot5;
            var1 = var1.GOOD;
            var6 = null;
            if(!(var2 !== var1)) { _fun0001_ip = 533; continue _fun0001 }
 379:
            var3 = _closure1_slot7;
            var1 = _closure1_slot4;
            var2 = var1.Fragment;
            var1 = {};
            var11 = _closure1_slot6;
            var9 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 11;
            var5 = var19[var5];
            var5 = var9.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            var21 = var17.reasonsHeader;
            var5['style'] = var21;
            var5['children'] = var20;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = 12;
            var8 = var19[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Card;
            var8 = {};
            var19 = 'subtle';
            var8['border'] = var19;
            var19 = var17.reasonsList;
            var8['style'] = var19;
            var8['children'] = var18;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var1['children'] = var5;
            var6 = var3.bind(var4)(var2, var1);
 533:
            var3 = _closure1_slot7;
            var1 = _closure1_slot4;
            var2 = var1.Fragment;
            var1 = {};
            var5 = var15 != var14;
            var8 = null;
            if(!var5) { _fun0001_ip = 623; continue _fun0001 }
 558:
            var11 = _closure1_slot6;
            var9 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 11;
            var5 = var18[var5];
            var5 = var9.bind(var4)(var5);
            var9 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-secondary'};
            var18 = var17.ratingsLabel;
            var5['style'] = var18;
            var5['children'] = var14;
            var8 = var11.bind(var4)(var9, var5);
 623:
            var5 = new Array(4);
            var5[0] = var8;
            var11 = _closure1_slot6;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 13;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var18 = var16.rating;
            var19 = var15 != var18;
            var14 = null;
            if(!var19) { _fun0001_ip = 675; continue _fun0001 }
 672:
            var14 = var18;
 675:
            var8['selectedRating'] = var14;
            var13 = function onChangeRating(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure1_slot5;
                    var1 = var1.GOOD;
                    var4 = null;
                    if(!(var5 !== var1)) { _fun0005_ip = 35; continue _fun0005 }
 22:
                    var1 = _closure2_slot7;
                    var4 = var1.reason;
 35:
                    var3 = {};
                    var6 = _closure2_slot7;
                    var7 = var3;
                    var1 = copyDataProperties(var7, var6);
                    var1 = 'rating';
                    var3[var1] = var5;
                    var1 = 'reason';
                    var3[var1] = var4;
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var8['onChangeRating'] = var13;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var5[2] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 917; continue _fun0001 }
 714:
            var9 = _closure1_slot6;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 10;
            var7 = var13[var11];
            var7 = var14.bind(var4)(var7);
            var8 = var7.FormRow;
            var7 = {};
            var17 = var17.doNotShowAgainContainer;
            var7['style'] = var17;
            var13 = var13[var11];
            var13 = var14.bind(var4)(var13);
            var13 = var13.FormRow;
            var14 = var13.Checkbox;
            var13 = {};
            var16 = var16.doNotShowAgain;
            var15 = var15 != var16;
            if(!var15) { _fun0001_ip = 795; continue _fun0001 }
 792:
            var15 = var16;
 795:
            var13['selected'] = var15;
            var13 = var9.bind(var4)(var14, var13);
            var7['leading'] = var13;
            var13 = _closure1_slot6;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var11 = var11.FormRow;
            var12 = var11.Label;
            var11 = {};
            var14 = 14;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.5E9SBw;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var7['label'] = var11;
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 917:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['FeedbackForm'] = var2;
    return var1;
})();