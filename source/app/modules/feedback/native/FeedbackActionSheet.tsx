// app/modules/feedback/native/FeedbackActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function closeActionSheet() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hideActionSheet;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackRating;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var4['ratingsHeader'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginBottom'] = var10;
    var4['reasonsList'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/FeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FeedbackActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.headerLabel;
            var12 = var1.showHeaderCloseButton;
            var11 = var1.hideDontShowAgainCheckbox;
            var24 = var1.ratingOptions;
            var23 = var1.ratingTextLabels;
            var25 = var1.ratingsBodyLabel;
            var20 = var1.reasonsHeaderLabel;
            var27 = var1.reasons;
            var _closure2_slot0 = var27;
            var2 = var1.feedbackReasons;
            var _closure2_slot1 = var2;
            var3 = var1.otherKey;
            var _closure2_slot2 = var3;
            var4 = var1.trackOpen;
            var _closure2_slot3 = var4;
            var4 = var1.trackReport;
            var _closure2_slot4 = var4;
            var1 = var1.getFreeformDescription;
            var _closure2_slot5 = var1;
            var1 = _closure1_slot9;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var7 = _closure1_slot4;
            var1 = var7.useRef;
            var9 = null;
            var5 = var1.bind(var7)(var9);
            var _closure2_slot6 = var5;
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 8;
            var1 = var15[var1];
            var1 = var16.bind(var4)(var1);
            var26 = var1.bind(var4)(var27);
            var _closure2_slot7 = var26;
            var6 = var7.useState;
            var1 = 9;
            var1 = var15[var1];
            var14 = var16.bind(var4)(var1);
            var1 = var14.shuffle;
            var1 = var1.bind(var14)(var27);
            var1 = var6.bind(var7)(var1);
            var17 = _closure1_slot3;
            var14 = 2;
            var19 = var17.bind(var4)(var1, var14);
            var1 = 0;
            var22 = var19[var1];
            var6 = 1;
            var19 = var19[var6];
            var _closure2_slot8 = var19;
            var21 = var7.useEffect;
            var19 = new Array(3);
            var19[0] = var27;
            var19[1] = var26;
            var19[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.isEqual;
                    var5 = _closure2_slot7;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var5, var3);
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot8;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.shuffleProblems;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var3.bind(var1)(var2);
case 2:
                    return var1;
                }
            };
            var3 = var21.bind(var7)(var3, var19);
            var3 = var7.useState;
            var3 = var3.bind(var7)(var9);
            var3 = var17.bind(var4)(var3, var14);
            var21 = var3[var1];
            var _closure2_slot9 = var21;
            var3 = var3[var6];
            var _closure2_slot10 = var3;
            var3 = var7.useState;
            var3 = var3.bind(var7)(var9);
            var3 = var17.bind(var4)(var3, var14);
            var19 = var3[var1];
            var _closure2_slot11 = var19;
            var3 = var3[var6];
            var _closure2_slot12 = var3;
            var3 = var7.useState;
            var19 = false;
            var3 = var3.bind(var7)(var19);
            var3 = var17.bind(var4)(var3, var14);
            var26 = var3[var1];
            var _closure2_slot13 = var26;
            var3 = var3[var6];
            var _closure2_slot14 = var3;
            var3 = var7.useState;
            var3 = var3.bind(var7)(var19);
            var3 = var17.bind(var4)(var3, var14);
            var14 = var3[var1];
            var _closure2_slot15 = var14;
            var3 = var3[var6];
            var _closure2_slot16 = var3;
            var3 = 11;
            var6 = var15[var3];
            var16 = var16.bind(var4)(var6);
            var6 = function() {
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var16.bind(var4)(var6);
            var6 = _closure1_slot0;
            var3 = var15[var3];
            var15 = var6.bind(var4)(var3);
            var6 = var15.useUnmountEffect;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = _closure2_slot9;
                    var2['rating'] = var1;
                    var1 = _closure2_slot11;
                    var2['reason'] = var1;
                    var1 = _closure2_slot15;
                    var2['dontShowAgain'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 12;
                    var3 = var1[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 14;
                    var2 = var1[var2];
                    var6 = var6.bind(var5)(var2);
                    var2 = 13;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var5)(var2, var1);
                    var1 = {};
                    var6 = {};
                    var7 = _closure2_slot9;
                    var6['rating'] = var7;
                    var7 = _closure2_slot11;
                    var6['reason'] = var7;
                    var7 = _closure2_slot15;
                    var6['dontShowAgain'] = var7;
                    var1['result'] = var6;
                    var6 = _closure2_slot4;
                    var1['trackReport'] = var6;
                    var6 = _closure2_slot5;
                    var7 = null;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var9 = _closure2_slot5;
                    var8 = _closure2_slot11;
                    var6 = var9.bind(var5)(var8);
case 7:
                    var7 = var7 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = var6;
case 9:
                    var1['descriptionLabel'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var6.bind(var15)(var3);
            var15 = var7.useCallback;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var4 = _closure1_slot6;
                    var4 = var4.GOOD;
                    if(!(var5 !== var4)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot6;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = var5.expandActionSheet;
                    var4 = var4.bind(var5)();
                    _fun0004_ip = 13; continue _fun0004;
case 11:
                    var5 = _closure2_slot12;
                    var4 = null;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot14;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var1)();
case 13:
                    return var1;
                }
            };
            var3 = new Array(0);
            var19 = var15.bind(var7)(var6, var3);
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot12;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var5 = _closure2_slot1;
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var6 = _closure2_slot1;
                    var5 = var6.includes;
                    var4 = var4.value;
                    var3 = var5.bind(var6)(var4);
case 14:
                    if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot14;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 16:
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var _closure2_slot17 = var2;
            var15 = var9 !== var21;
            if(!var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot6;
            var2 = var2.GOOD;
            var15 = var21 !== var2;
case 18:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 15;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = var2.bottom;
            var2 = 48;
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = 0;
case 20:
            var1 = 232;
            var1 = var1 + var2;
            var6 = var1 + var17;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = true;
            var1['scrollable'] = var7;
            var1['ref'] = var5;
            var1['startHeight'] = var6;
            var7 = var9 == var21;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var6;
case 22:
            var1['maxHeight'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 17;
            var5 = var16[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var5['title'] = var8;
            var8 = null;
            if(!var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var26 = _closure1_slot7;
            var16 = _closure1_slot0;
            var27 = _closure1_slot2;
            var12 = 18;
            var12 = var27[var12];
            var12 = var16.bind(var4)(var12);
            var16 = var12.ActionSheetCloseButton;
            var12 = {};
            var27 = _closure1_slot10;
            var12['onPress'] = var27;
            var8 = var26.bind(var4)(var16, var12);
case 24:
            var5['trailing'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 19;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var12 = var18.container;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = {};
            var16 = var18.container;
            var16 = var16.padding;
            var16 = var16 + var17;
            var12['paddingBottom'] = var16;
            var8[1] = var12;
            var5['contentContainerStyle'] = var8;
            var8 = var9 != var25;
            var12 = null;
            if(!var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var26 = _closure1_slot2;
            var8 = 20;
            var8 = var26[var8];
            var8 = var16.bind(var4)(var8);
            var16 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var26 = var18.ratingsHeader;
            var8['style'] = var26;
            var8['children'] = var25;
            var12 = var17.bind(var4)(var16, var8);
case 26:
            var8 = new Array(4);
            var8[0] = var12;
            var17 = _closure1_slot7;
            var16 = _closure1_slot1;
            var25 = _closure1_slot2;
            var12 = 21;
            var12 = var25[var12];
            var16 = var16.bind(var4)(var12);
            var12 = {};
            var12['ratingOptions'] = var24;
            var12['textLabels'] = var23;
            var12['selectedRating'] = var21;
            var12['onChangeRating'] = var19;
            var12 = var17.bind(var4)(var16, var12);
            var8[1] = var12;
            var12 = null;
            if(!var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var17 = _closure1_slot7;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var18.reasonsList;
            var15['style'] = var18;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 22;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.TableRowGroup;
            var18 = {};
            var18['title'] = var20;
            var21 = var22.map;
            var20 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var3 = var7.label;
                    var1 = null;
                    var3 = var1 != var3;
                    var6 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0006_ip = 2; continue _fun0006 }
case 30:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 23;
                    var3 = var8[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.TableRow;
                    var3 = {};
                    var7 = var7.label;
                    var3['label'] = var7;
                    var7 = 2;
                    var3['labelLineClamp'] = var7;
                    var2 = function onPress() {
                        var3 = _closure2_slot17;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var2;
                    var2 = arg2;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 2:
                    return var1;
                }
            };
            var20 = var21.bind(var22)(var20);
            var18['children'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var12 = var17.bind(var4)(var16, var15);
case 28:
            var8[2] = var12;
            var9 = null;
            if(var11) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var12 = _closure1_slot7;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 24;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.TableCheckboxRow;
            var10 = {'start': true, 'end': true};
            var10['checked'] = var14;
            var14 = 25;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.5E9SBw;
            var14 = var15.bind(var16)(var14);
            var10['label'] = var14;
            var13 = function onPress() {
                var3 = _closure2_slot16;
                var1 = _closure2_slot15;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var10['onPress'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 31:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();