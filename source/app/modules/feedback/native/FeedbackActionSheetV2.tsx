// app/modules/feedback/native/FeedbackActionSheetV2.tsx
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
    var _closure1_slot12 = var1;
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
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
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
    var9['textAlign'] = var12;
    var4['ratingsBody'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginBottom'] = var10;
    var4['problemsList'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = function shuffleOptionsTree(arg1) {
        var5 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.shuffle;
        var4 = var5.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var2;
                var3 = copyDataProperties(var7, var6);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.shuffle;
                var3 = var2.problemOptions;
                var4 = var4.bind(var5)(var3);
                var3 = var4.concat;
                var2 = var2.freeformConfig;
                var5 = null;
                if(!(var5 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = new Array(0);
case 2:
                var3 = var3.bind(var4)(var2);
                var2 = 'problemOptions';
                var1[var2] = var3;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/FeedbackActionSheetV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FeedbackActionSheetV2(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.headerLabel;
            var24 = var1.ratingBody;
            var23 = var1.ratingOptions;
            var13 = var1.showHeaderCloseButton;
            var3 = var1.hideDontShowAgainCheckbox;
            var7 = var1.categoriesHeader;
            var8 = var1.initialRating;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var8 = null;
case 4:
            var22 = var1.optionsTree;
            var _closure2_slot0 = var22;
            var5 = var1.onMount;
            var _closure2_slot1 = var5;
            var5 = var1.trackOpen;
            var _closure2_slot2 = var5;
            var1 = var1.trackReport;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var1 = _closure1_slot10;
            var11 = var1.bind(var4)();
            var16 = _closure1_slot4;
            var1 = var16.useRef;
            var10 = null;
            var9 = var1.bind(var16)(var10);
            _closure2_slot4 = var9;
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 9;
            var1 = var15[var1];
            var1 = var17.bind(var4)(var1);
            var6 = var1.bind(var4)(var22);
            _closure2_slot5 = var6;
            var12 = var16.useState;
            var1 = _closure1_slot11;
            var1 = var1.bind(var4)(var22);
            var1 = var12.bind(var16)(var1);
            var19 = _closure1_slot3;
            var18 = 2;
            var12 = var19.bind(var4)(var1, var18);
            var1 = 0;
            var31 = var12[var1];
            var14 = 1;
            var12 = var12[var14];
            _closure2_slot6 = var12;
            var20 = var16.useEffect;
            var12 = new Array(2);
            var12[0] = var22;
            var12[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.isEqual;
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var5, var3);
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot6;
                    var4 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var1)(var2);
                    var2 = var3.bind(var1)(var2);
case 6:
                    return var1;
                }
            };
            var6 = var20.bind(var16)(var6, var12);
            var6 = var16.useState;
            var20 = false;
            var6 = var6.bind(var16)(var20);
            var6 = var19.bind(var4)(var6, var18);
            var22 = var6[var1];
            _closure2_slot7 = var22;
            var6 = var6[var14];
            _closure2_slot8 = var6;
            var6 = var16.useState;
            var6 = var6.bind(var16)(var8);
            var8 = var19.bind(var4)(var6, var18);
            var6 = var8[var1];
            _closure2_slot9 = var6;
            var8 = var8[var14];
            _closure2_slot10 = var8;
            var8 = var16.useState;
            var8 = var8.bind(var16)(var10);
            var8 = var19.bind(var4)(var8, var18);
            var28 = var8[var1];
            _closure2_slot11 = var28;
            var8 = var8[var14];
            _closure2_slot12 = var8;
            var8 = var16.useState;
            var8 = var8.bind(var16)(var10);
            var12 = var19.bind(var4)(var8, var18);
            var8 = var12[var1];
            _closure2_slot13 = var8;
            var12 = var12[var14];
            _closure2_slot14 = var12;
            var12 = var16.useState;
            var12 = var12.bind(var16)(var20);
            var12 = var19.bind(var4)(var12, var18);
            var18 = var12[var1];
            _closure2_slot15 = var18;
            var12 = var12[var14];
            _closure2_slot16 = var12;
            var12 = 10;
            var14 = var15[var12];
            var17 = var17.bind(var4)(var14);
            var14 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 8:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var14 = var17.bind(var4)(var14);
            var14 = _closure1_slot0;
            var12 = var15[var12];
            var15 = var14.bind(var4)(var12);
            var14 = var15.useUnmountEffect;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot15;
                    if(var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var3 = _closure2_slot3;
                    var2 = {};
                    var1 = _closure2_slot9;
                    var2['rating'] = var1;
                    var1 = _closure2_slot11;
                    var4 = null;
                    var7 = var4 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 7; continue _fun0005 }
case 12:
                    var7 = _closure2_slot11;
                    var5 = var7.value;
case 7:
                    var7 = var4 != var5;
                    var4 = null;
                    if(!var7) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var4 = var5;
case 13:
                    var2['category'] = var4;
                    var4 = _closure2_slot13;
                    var2['reason'] = var4;
                    var4 = _closure2_slot7;
                    var2['dontShowAgain'] = var4;
                    var4 = '';
                    var2['feedback'] = var4;
                    var1 = var3.bind(var1)(var2);
                    _fun0005_ip = 15; continue _fun0005;
case 10:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var2 = 11;
                    var2 = var1[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.pushLazy;
                    var7 = _closure1_slot0;
                    var2 = 13;
                    var2 = var1[var2];
                    var7 = var7.bind(var8)(var2);
                    var2 = 12;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var7.bind(var8)(var2, var1);
                    var1 = {};
                    var9 = {};
                    var7 = _closure2_slot9;
                    var9['rating'] = var7;
                    var10 = _closure2_slot11;
                    var7 = null;
                    var11 = var7 == var10;
                    var10 = undefined;
                    if(var11) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var11 = _closure2_slot11;
                    var10 = var11.value;
case 16:
                    var9['category'] = var10;
                    var10 = _closure2_slot13;
                    var9['reason'] = var10;
                    var10 = _closure2_slot7;
                    var9['dontShowAgain'] = var10;
                    var1['result'] = var9;
                    var9 = function trackReport(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var3 = _closure2_slot3;
                            var2 = {};
                            var4 = var1.rating;
                            var2['rating'] = var4;
                            var4 = var1.category;
                            var2['category'] = var4;
                            var4 = var1.reason;
                            var2['reason'] = var4;
                            var4 = var1.dontShowAgain;
                            var2['dontShowAgain'] = var4;
                            var4 = var1.feedback;
                            var1 = null;
                            var5 = var1 != var4;
                            var1 = '';
                            if(!var5) { _fun0006_ip = 2; continue _fun0006 }
case 18:
                            var1 = var4;
case 2:
                            var2['feedback'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1['trackReport'] = var9;
                    var9 = _closure2_slot11;
                    var10 = var7 == var9;
                    var9 = undefined;
                    if(var10) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var10 = _closure2_slot11;
                    var9 = var10.problemsHeader;
case 19:
                    var1['titleLabel'] = var9;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 14;
                    var9 = var12[var5];
                    var9 = var11.bind(var8)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var12[var5];
                    var5 = var11.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.h95hcn;
                    var5 = var9.bind(var10)(var5);
                    var1['descriptionLabel'] = var5;
                    var5 = _closure2_slot11;
                    var9 = var7 == var5;
                    var5 = undefined;
                    if(var9) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var6 = _closure2_slot11;
                    var6 = var6.freeformConfig;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                    var5 = var6.hideHelpdeskLink;
case 21:
                    var1['hideHelpdeskLink'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var14.bind(var15)(var12);
            var15 = var16.useCallback;
            var14 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var4 = _closure1_slot6;
                    var4 = var4.GOOD;
                    if(!(var5 !== var4)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = _closure2_slot4;
                    var5 = var4.current;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var4 = var5.expandActionSheet;
                    var4 = var4.bind(var5)();
                    _fun0007_ip = 26; continue _fun0007;
case 24:
                    var4 = _closure2_slot12;
                    var5 = null;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot14;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot16;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var1)();
case 26:
                    return var1;
                }
            };
            var12 = new Array(0);
            var20 = var15.bind(var16)(var14, var12);
            var15 = var16.useCallback;
            var14 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot12;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot14;
                    var2 = null;
                    var4 = var4.bind(var1)(var2);
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0008_ip = 7; continue _fun0008 }
case 28:
                    var2 = var3.expandActionSheet;
                    var2 = var2.bind(var3)();
case 7:
                    return var1;
                }
            };
            var12 = new Array(0);
            var12 = var15.bind(var16)(var14, var12);
            _closure2_slot17 = var12;
            var15 = var16.useCallback;
            var14 = new Array(1);
            var14[0] = var28;
            var12 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot14;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot11;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    if(!(var4 != var3)) { _fun0009_ip = 29; continue _fun0009 }
case 31:
                    var5 = _closure2_slot11;
                    var5 = var5.freeformConfig;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 5; continue _fun0009 }
case 32:
                    var4 = var5.value;
case 5:
                    var3 = var3.value;
                    if(!(var4 !== var3)) { _fun0009_ip = 33; continue _fun0009 }
case 29:
                    var4 = _closure2_slot16;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    _fun0009_ip = 34; continue _fun0009;
case 33:
                    var3 = _closure2_slot16;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 34:
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var12 = var15.bind(var16)(var12, var14);
            _closure2_slot18 = var12;
            if(!(var10 != var6)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var12 = _closure1_slot6;
            var12 = var12.GOOD;
            if(!(var6 !== var12)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(!(var10 != var28)) { _fun0002_ip = 39; continue _fun0002 }
case 37:
            var12 = var10 != var28;
            if(!var12) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var12 = var10 == var8;
case 40:
            var8 = undefined;
            var14 = var2;
            if(!var12) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var14 = var28.problemsHeader;
            var17 = _closure1_slot9;
            var16 = _closure1_slot8;
            var15 = {};
            var26 = _closure1_slot7;
            var19 = _closure1_slot5;
            var18 = {};
            var25 = var11.problemsList;
            var18['style'] = var25;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = 18;
            var25 = var32[var25];
            var25 = var30.bind(var4)(var25);
            var27 = var25.TableRowGroup;
            var25 = {};
            var33 = var28.problemOptions;
            var29 = var33.map;
            var28 = function(arg1, arg2) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot7;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRow;
                var2 = {};
                var6 = var6.label;
                var2['label'] = var6;
                var6 = 2;
                var2['labelLineClamp'] = var6;
                var1 = function onPress() {
                    var3 = _closure2_slot18;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var28 = var29.bind(var33)(var28);
            var25['children'] = var28;
            var25 = var26.bind(var4)(var27, var25);
            var18['children'] = var25;
            var19 = var26.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 20;
            var19 = var32[var19];
            var19 = var30.bind(var4)(var19);
            var25 = var19.Button;
            var19 = {'variant': 'secondary', 'size': 'sm'};
            var27 = 14;
            var28 = var32[var27];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var32[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.13/7kZ;
            var27 = var28.bind(var29)(var27);
            var19['text'] = var27;
            var27 = function onPress() {
                var3 = _closure2_slot12;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var19['onPress'] = var27;
            var19 = var26.bind(var4)(var25, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var8 = var17.bind(var4)(var16, var15);
            _fun0002_ip = 42; continue _fun0002;
case 39:
            var16 = _closure1_slot9;
            var15 = _closure1_slot8;
            var12 = {};
            var25 = _closure1_slot7;
            var18 = _closure1_slot5;
            var17 = {};
            var19 = var11.problemsList;
            var17['style'] = var19;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var19 = 18;
            var19 = var30[var19];
            var19 = var29.bind(var4)(var19);
            var26 = var19.TableRowGroup;
            var19 = {};
            var28 = var31.map;
            var27 = function(arg1, arg2) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot7;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRow;
                var2 = {};
                var6 = var6.label;
                var2['label'] = var6;
                var6 = 2;
                var2['labelLineClamp'] = var6;
                var1 = function onPress() {
                    var3 = _closure2_slot17;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var27 = var28.bind(var31)(var27);
            var19['children'] = var27;
            var19 = var25.bind(var4)(var26, var19);
            var17['children'] = var19;
            var18 = var25.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = 20;
            var18 = var30[var18];
            var18 = var29.bind(var4)(var18);
            var19 = var18.Button;
            var18 = {'variant': 'secondary', 'size': 'sm'};
            var26 = 14;
            var27 = var30[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.13/7kZ;
            var26 = var27.bind(var28)(var26);
            var18['text'] = var26;
            var26 = function onPress() {
                var3 = _closure2_slot10;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var18['onPress'] = var26;
            var18 = var25.bind(var4)(var19, var18);
            var17[1] = var18;
            var12['children'] = var17;
            var8 = var16.bind(var4)(var15, var12);
            var14 = var7;
            _fun0002_ip = 42; continue _fun0002;
case 35:
            var15 = _closure1_slot9;
            var12 = _closure1_slot8;
            var7 = {};
            var16 = var10 != var24;
            var17 = null;
            if(!var16) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var19 = _closure1_slot7;
            var18 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 15;
            var16 = var25[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var25 = var11.ratingsBody;
            var16['style'] = var25;
            var16['children'] = var24;
            var17 = var19.bind(var4)(var18, var16);
case 44:
            var16 = new Array(3);
            var16[0] = var17;
            var19 = _closure1_slot7;
            var18 = _closure1_slot1;
            var24 = _closure1_slot2;
            var17 = 16;
            var17 = var24[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['ratingOptions'] = var23;
            var17['selectedRating'] = var6;
            var17['onChangeRating'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var17 = null;
            if(var3) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var20 = _closure1_slot7;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 17;
            var18 = var26[var18];
            var18 = var25.bind(var4)(var18);
            var19 = var18.TableCheckboxRow;
            var18 = {'start': true, 'end': true};
            var18['checked'] = var22;
            var22 = 14;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.5E9SBw;
            var22 = var23.bind(var24)(var22);
            var18['label'] = var22;
            var21 = function onPress() {
                var3 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2 = !var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var18['onPress'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 46:
            var16[2] = var17;
            var7['children'] = var16;
            var8 = var15.bind(var4)(var12, var7);
            var14 = var2;
case 42:
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 21;
            var2 = var12[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.bottom;
            var2 = 48;
            if(!var3) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var2 = 0;
case 48:
            var1 = 232;
            var1 = var1 + var2;
            var7 = var1 + var12;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 22;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var15 = true;
            var1['scrollable'] = var15;
            var1['ref'] = var9;
            var1['startHeight'] = var7;
            var9 = var10 == var6;
            var6 = undefined;
            if(!var9) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var6 = var7;
case 50:
            var1['maxHeight'] = var6;
            var9 = _closure1_slot7;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 23;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var6['title'] = var14;
            var10 = null;
            if(!var13) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var15 = _closure1_slot7;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 24;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ActionSheetCloseButton;
            var13 = {};
            var16 = _closure1_slot12;
            var13['onPress'] = var16;
            var10 = var15.bind(var4)(var14, var13);
case 52:
            var6['trailing'] = var10;
            var6 = var9.bind(var4)(var7, var6);
            var1['header'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 25;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var10 = var11.container;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = var11.container;
            var11 = var11.padding;
            var11 = var11 + var12;
            var10['paddingBottom'] = var11;
            var9[1] = var10;
            var5['contentContainerStyle'] = var9;
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