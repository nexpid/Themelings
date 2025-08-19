// app/modules/custom_status/native/EditCustomStatusWithPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ClearInputButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var1 = _closure1_slot15;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot13;
        var12 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 10;
        var1 = var10[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var7 = {'borderRadius': 10, 'paddingLeft': 8};
        var1['style'] = var7;
        var7 = 'button';
        var1['accessibilityRole'] = var7;
        var7 = 11;
        var8 = var10[var7];
        var8 = var12.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var10[var7];
        var7 = var12.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.VkKicX;
        var7 = var8.bind(var9)(var7);
        var1['accessibilityLabel'] = var7;
        var1['onPress'] = var6;
        var6 = {'top': 8, 'bottom': 8, 'right': 8};
        var1['hitSlop'] = var6;
        var7 = _closure1_slot13;
        var9 = _closure1_slot1;
        var8 = 12;
        var5 = var10[var8];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var12 = 13;
        var12 = var10[var12];
        var12 = var9.bind(var4)(var12);
        var5['source'] = var12;
        var11 = var11.closeIcon;
        var5['style'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.Sizes;
        var8 = var8.SMALL;
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function CustomStatusLabelSection(arg1) {
        var1 = arg1;
        var8 = var1.label;
        var1 = _closure1_slot15;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot13;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.customStatusLabelSection;
        var1['style'] = var6;
        var7 = _closure1_slot13;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 14;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['label'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot10 = var7;
    var14 = var4.Fonts;
    var4 = var4.NOOP;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexGrow': 1, 'padding': 16, 'rowGap': 24};
    var4['container'] = var9;
    var9 = {};
    var9['rowGap'] = var10;
    var4['statusSection'] = var9;
    var9 = {'flexDirection': 'column', 'rowGap': 4, 'backgroundColor': null, 'borderRadius': null, 'padding': 12};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['statusInput'] = var9;
    var13 = 'center';
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['statusInputRow'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['emoji'] = var9;
    var9 = {'color': null, 'lineHeight': 16, 'flexGrow': 1, 'alignSelf': 'flex-start', 'paddingVertical': 0, 'paddingHorizontal': 0};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_PRIMARY;
    var9['color'] = var15;
    var4['status'] = var9;
    var9 = {'fontSize': 16, 'lineHeight': 20, 'fontFamily': null, 'color': null, 'flexGrow': 1, 'height': 'auto', 'textAlignVertical': 'center'};
    var14 = var14.PRIMARY_MEDIUM;
    var9['fontFamily'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_PRIMARY;
    var9['color'] = var14;
    var4['statusText'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_MUTED;
    var9['color'] = var14;
    var4['inputPlaceholder'] = var9;
    var9 = {};
    var9['rowGap'] = var10;
    var4['clearAfterSection'] = var9;
    var9 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND;
    var9['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var14 = 'hidden';
    var9['overflow'] = var14;
    var4['clearAfterOptions'] = var9;
    var9 = {};
    var9['alignItems'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.shadows;
    var17 = var13.SHADOW_LOW;
    var18 = var9;
    var13 = copyDataProperties(var18, var17);
    var4['previewContainer'] = var9;
    var9 = {'tintColor': null, 'paddingLeft': 8, 'flexShrink': 0};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var9['tintColor'] = var11;
    var4['closeIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var4['statusSectionHeader'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['customStatusLabelSection'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/native/EditCustomStatusWithPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditCustomStatusWithPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.navigation;
            var _closure2_slot0 = var8;
            var3 = var1.onClose;
            var _closure2_slot1 = var3;
            var4 = var1.analyticsLocations;
            var _closure2_slot2 = var4;
            var6 = var1.prompt;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var11 = var2.bind(var5)(var1);
            var10 = var11.useIsEligibleForCustomStatusClearAfterTimesExperiment;
            var1 = {};
            var9 = 'EditCustomStatusWithPreview';
            var1['location'] = var9;
            var28 = var10.bind(var11)(var1);
            var1 = 16;
            var1 = var7[var1];
            var7 = var2.bind(var5)(var1);
            var2 = var7.useIsEligibleForCustomStatusLabelsExperiment;
            var1 = {};
            var1['location'] = var9;
            var18 = var2.bind(var7)(var1);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var12 = null;
            if(!(var12 == var6)) { _fun0001_ip = 233; continue _fun0001 }
 201:
            var7 = null;
            if(!var18) { _fun0001_ip = 230; continue _fun0001 }
 206:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 17;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var7 = var9.bind(var5)();
 230:
            var6 = var7;
 233:
            var1 = var1.bind(var2)(var6);
            _closure2_slot3 = var1;
            var7 = _closure1_slot4;
            var6 = var7.useEffect;
            var2 = new Array(1);
            var2[0] = var4;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = _closure1_slot10;
                var6 = var6.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW;
                var2['type'] = var6;
                var6 = _closure2_slot2;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var2);
            var1 = _closure1_slot15;
            var38 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var1 = var9[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.useCustomStatusActivity;
            var10 = var1.bind(var6)();
            var25 = 20;
            var1 = var9[var25];
            var11 = var2.bind(var5)(var1);
            var6 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var11)(var2, var1);
            _closure2_slot4 = var1;
            var6 = _closure1_slot1;
            var2 = 21;
            var2 = var9[var2];
            var2 = var6.bind(var5)(var2);
            var15 = var2.bind(var5)();
            var6 = var7.useState;
            var2 = var12 == var10;
            var9 = undefined;
            if(var2) { _fun0001_ip = 391; continue _fun0001 }
 386:
            var9 = var10.state;
 391:
            var11 = var12 != var9;
            var33 = '';
            var2 = var33;
            if(!var11) { _fun0001_ip = 408; continue _fun0001 }
 405:
            var2 = var9;
 408:
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot3;
            var14 = 2;
            var2 = var2.bind(var5)(var6, var14);
            var11 = 0;
            var32 = var2[var11];
            _closure2_slot5 = var32;
            var9 = 1;
            var39 = var2[var9];
            _closure2_slot6 = var39;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var2 = var12 == var10;
            var13 = undefined;
            if(var2) { _fun0001_ip = 471; continue _fun0001 }
 465:
            var13 = var10.emoji;
 471:
            var16 = var12 != var13;
            var2 = null;
            if(!var16) { _fun0001_ip = 483; continue _fun0001 }
 480:
            var2 = var13;
 483:
            var2 = var6.bind(var7)(var2);
            var7 = _closure1_slot3;
            var2 = var7.bind(var5)(var2, var14);
            var31 = var2[var11];
            _closure2_slot7 = var31;
            var2 = var2[var9];
            _closure2_slot8 = var2;
            var13 = _closure1_slot4;
            var6 = var13.useState;
            var6 = var6.bind(var13)(var15);
            var6 = var7.bind(var5)(var6, var14);
            var27 = var6[var11];
            _closure2_slot9 = var27;
            var6 = var6[var9];
            _closure2_slot10 = var6;
            var7 = var13.useState;
            var15 = var12 != var10;
            var6 = null;
            if(!var15) { _fun0001_ip = 594; continue _fun0001 }
 564:
            var6 = null;
            if(!var18) { _fun0001_ip = 594; continue _fun0001 }
 569:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 22;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var6 = var15.bind(var5)(var10);
 594:
            var6 = var7.bind(var13)(var6);
            var13 = _closure1_slot3;
            var6 = var13.bind(var5)(var6, var14);
            var30 = var6[var11];
            _closure2_slot11 = var30;
            var6 = var6[var9];
            _closure2_slot12 = var6;
            var6 = _closure1_slot4;
            var15 = var6.useState;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot11;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 108; continue _fun0002 }
 13:
                    var1 = _closure2_slot3;
                    var1 = var1.current;
                    if(!(var3 == var1)) { _fun0002_ip = 88; continue _fun0002 }
 26:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.xod36+;
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 106; continue _fun0002;
 88:
                    var3 = _closure2_slot3;
                    var4 = var3.current;
                    var3 = var4.label;
                    var1 = var3.bind(var4)();
 106:
                    _fun0002_ip = 142; continue _fun0002;
 108:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot11;
                    var1 = var3.bind(var4)(var2);
 142:
                    return var1;
                }
            };
            var7 = var15.bind(var6)(var7);
            var7 = var13.bind(var5)(var7, var14);
            var42 = var7[var11];
            _closure2_slot13 = var42;
            var7 = var7[var9];
            _closure2_slot14 = var7;
            var9 = var6.useCallback;
            var7 = new Array(6);
            var7[0] = var32;
            var7[1] = var31;
            var7[2] = var27;
            var7[3] = var30;
            var7[4] = var3;
            var7[5] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = {};
                    var6 = _closure2_slot5;
                    var4['text'] = var6;
                    var6 = _closure2_slot7;
                    var4['emojiInfo'] = var6;
                    var6 = _closure2_slot9;
                    var4['clearAfter'] = var6;
                    var6 = _closure2_slot11;
                    var4['customStatusLabel'] = var6;
                    var6 = _closure2_slot2;
                    var4['analyticsLocations'] = var6;
                    var6 = _closure2_slot3;
                    var7 = var6.current;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0003_ip = 97; continue _fun0003 }
 94:
                    var6 = var7;
 97:
                    var4['prompt'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 25;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var5 = var3.AccessibilityAnnouncer;
                    var4 = var5.announce;
                    var3 = 11;
                    var6 = var9[var3];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.Og40Ym;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var7 = var9.bind(var6)(var4, var7);
            _closure2_slot15 = var7;
            var9 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 26;
                var3 = var8[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var7 = _closure1_slot0;
                var2 = 25;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 11;
                var5 = var8[var2];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.YdUwBQ;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17 = var9.bind(var6)(var3, var4);
            var9 = var6.useCallback;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot8;
                    var2 = {};
                    var4 = var1.id;
                    var2['id'] = var4;
                    var5 = var1.id;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0004_ip = 54; continue _fun0004 }
 32:
                    var5 = var1.surrogates;
                    if(!(var4 != var5)) { _fun0004_ip = 54; continue _fun0004 }
 41:
                    var6 = var1.surrogates;
                    var5 = '';
                    if(!(var5 === var6)) { _fun0004_ip = 75; continue _fun0004 }
 54:
                    var5 = var1.name;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0004_ip = 73; continue _fun0004 }
 70:
                    var4 = var5;
 73:
                    _fun0004_ip = 80; continue _fun0004;
 75:
                    var4 = var1.surrogates;
 80:
                    var2['name'] = var4;
                    var1 = var1.animated;
                    var2['animated'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var9.bind(var6)(var4, var3);
            _closure2_slot16 = var3;
            var9 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot16;
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot12;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var36 = var9.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var39;
            var2 = function() {
                var4 = _closure2_slot8;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot6;
                var2 = '';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var35 = var4.bind(var6)(var2, var3);
            var2 = var6.useRef;
            var43 = var2.bind(var6)(var12);
            _closure2_slot17 = var43;
            var4 = var6.useCallback;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot17;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 28; continue _fun0005 }
 18:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var40 = var4.bind(var6)(var3, var2);
            var3 = var6.useRef;
            var2 = {};
            var2['statusText'] = var32;
            var2['statusEmoji'] = var31;
            var2['clearAfter'] = var27;
            var2['customStatusLabel'] = var30;
            var2 = var3.bind(var6)(var2);
            _closure2_slot18 = var2;
            var4 = var6.useMemo;
            var3 = new Array(4);
            var3[0] = var32;
            var3[1] = var31;
            var3[2] = var27;
            var3[3] = var30;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = _closure2_slot18;
                    var1 = var1.current;
                    var1 = var1.statusText;
                    var1 = var3 !== var1;
                    if(var1) { _fun0006_ip = 52; continue _fun0006 }
 29:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot18;
                    var3 = var3.current;
                    var3 = var3.statusEmoji;
                    var1 = var4 !== var3;
 52:
                    if(var1) { _fun0006_ip = 78; continue _fun0006 }
 55:
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot18;
                    var3 = var3.current;
                    var3 = var3.clearAfter;
                    var1 = var4 !== var3;
 78:
                    if(var1) { _fun0006_ip = 104; continue _fun0006 }
 81:
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot18;
                    var2 = var2.current;
                    var2 = var2.customStatusLabel;
                    var1 = var3 !== var2;
 104:
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            _closure2_slot19 = var2;
            var9 = var6.useMemo;
            var4 = new Array(5);
            var4[0] = var1;
            var4[1] = var32;
            var4[2] = var31;
            var4[3] = var30;
            var4[4] = var42;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0007_ip = 97; continue _fun0007 }
 16:
                    var5 = _closure1_slot13;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot4;
                    var2['user'] = var7;
                    var7 = _closure2_slot5;
                    var2['pendingStatusText'] = var7;
                    var7 = _closure2_slot7;
                    var2['pendingStatusEmoji'] = var7;
                    var7 = _closure2_slot11;
                    var2['pendingStatusLabel'] = var7;
                    var6 = _closure2_slot13;
                    var2['placeholderText'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 97:
                    return var1;
                }
            };
            var14 = var9.bind(var6)(var3, var4);
            var4 = var6.useLayoutEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var2;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.setOptions;
                var2 = {};
                var1 = function headerRight() {
                    var4 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 29;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderTextButton;
                    var1 = {};
                    var5 = 11;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPHx;
                    var5 = var6.bind(var7)(var5);
                    var1['label'] = var5;
                    var6 = _closure2_slot15;
                    var1['onPress'] = var6;
                    var5 = _closure2_slot19;
                    var5 = !var5;
                    var1['disabled'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['headerRight'] = var1;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 30;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = var7.getHeaderConditionalBackButton;
                var5 = function() {
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = function(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 31;
                        var2 = var8[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var6 = _closure2_slot19;
                        var2['hasEdits'] = var6;
                        var7 = _closure1_slot0;
                        var6 = 32;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.dismissKeyboard;
                        var2['onHasEdits'] = var6;
                        var5 = _closure1_slot11;
                        var2['resetPending'] = var5;
                        var4 = function onConfirm() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 33;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.close;
                            var2 = var2.bind(var3)();
                            var3 = _closure5_slot0;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2['onConfirm'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var2['headerLeft'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var4.bind(var6)(var2, var3);
            var2 = var12 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 2339; continue _fun0001 }
 1009:
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = 'always';
            var2['keyboardShouldPersistTaps'] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var38.container;
            var6['style'] = var9;
            var13 = _closure1_slot13;
            var11 = _closure1_slot5;
            var9 = {};
            var15 = var38.previewContainer;
            var9['style'] = var15;
            var9['children'] = var14;
            var11 = var13.bind(var5)(var11, var9);
            var9 = new Array(4);
            var9[0] = var11;
            var13 = _closure1_slot5;
            var11 = {};
            var14 = var38.statusSection;
            var11['style'] = var14;
            var15 = _closure1_slot5;
            var14 = {};
            var16 = var38.statusSectionHeader;
            var14['style'] = var16;
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var21 = 34;
            var16 = var16[var21];
            var16 = var19.bind(var5)(var16);
            var19 = var16.Text;
            var16 = {'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 11;
            var34 = var26[var22];
            var34 = var29.bind(var5)(var34);
            var37 = var34.intl;
            var34 = var37.string;
            var26 = var26[var22];
            var26 = var29.bind(var5)(var26);
            var29 = var26.t;
            if(var18) { _fun0001_ip = 1222; continue _fun0001 }
 1207:
            var26 = var29.UcdRn5;
            var26 = var34.bind(var37)(var26);
            _fun0001_ip = 1235; continue _fun0001;
 1222:
            var29 = var29.zOdg0N;
            var26 = var34.bind(var37)(var29);
 1235:
            var16['children'] = var26;
            var19 = var20.bind(var5)(var19, var16);
            var16 = new Array(2);
            var16[0] = var19;
            if(!var18) { _fun0001_ip = 1303; continue _fun0001 }
 1256:
            var26 = _closure1_slot13;
            var20 = _closure1_slot1;
            var29 = _closure1_slot2;
            var19 = 35;
            var19 = var29[var19];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var19['currentValue'] = var30;
            var29 = function onChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot9;
                    var5 = var2.CUSTOM_STATUS_LABEL_CLICKED;
                    var4 = {};
                    var9 = _closure2_slot11;
                    var4['previous_label'] = var9;
                    var4['new_label'] = var6;
                    var9 = _closure2_slot2;
                    var4['location_stack'] = var9;
                    var4 = var7.bind(var8)(var5, var4);
                    var4 = _closure2_slot11;
                    if(!(var6 !== var4)) { _fun0008_ip = 134; continue _fun0008 }
 89:
                    var4 = _closure2_slot12;
                    var4 = var4.bind(var1)(var6);
                    var5 = _closure2_slot14;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.bind(var1)(var6);
                    var4 = var5.bind(var1)(var4);
                    _fun0008_ip = 251; continue _fun0008;
 134:
                    var4 = _closure2_slot12;
                    var5 = null;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot3;
                    var4 = var4.current;
                    if(!(var5 == var4)) { _fun0008_ip = 224; continue _fun0008 }
 158:
                    var4 = _closure2_slot14;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 11;
                    var5 = var8[var3];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.xod36+;
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.bind(var1)(var3);
                    _fun0008_ip = 251; continue _fun0008;
 224:
                    var3 = _closure2_slot14;
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var2 = var4.label;
                    var2 = var2.bind(var4)();
                    var2 = var3.bind(var1)(var2);
 251:
                    return var1;
                }
            };
            var19['onChange'] = var29;
            var18 = var26.bind(var5)(var20, var19);
 1303:
            var16[1] = var18;
            var14['children'] = var16;
            var15 = var8.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var18 = _closure1_slot14;
            var16 = _closure1_slot5;
            var15 = {};
            var19 = var38.statusInput;
            var15['style'] = var19;
            var20 = var12 != var30;
            if(!var20) { _fun0001_ip = 1372; continue _fun0001 }
 1352:
            var29 = _closure1_slot13;
            var26 = _closure1_slot17;
            var19 = {};
            var19['label'] = var30;
            var20 = var29.bind(var5)(var26, var19);
 1372:
            var19 = new Array(2);
            var19[0] = var20;
            var29 = _closure1_slot14;
            var26 = _closure1_slot5;
            var20 = {};
            var30 = var38.statusInputRow;
            var20['style'] = var30;
            var37 = _closure1_slot13;
            var46 = _closure1_slot0;
            var41 = _closure1_slot2;
            var30 = 10;
            var30 = var41[var30];
            var30 = var46.bind(var5)(var30);
            var34 = var30.PressableOpacity;
            var30 = {};
            var44 = var41[var22];
            var44 = var46.bind(var5)(var44);
            var45 = var44.intl;
            var44 = var45.string;
            var41 = var41[var22];
            var41 = var46.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.WkfRZG;
            var41 = var44.bind(var45)(var41);
            var30['accessibilityLabel'] = var41;
            var41 = {};
            var45 = var12 == var31;
            var44 = undefined;
            if(var45) { _fun0001_ip = 1496; continue _fun0001 }
 1491:
            var44 = var31.name;
 1496:
            var41['text'] = var44;
            var30['accessibilityValue'] = var41;
            var41 = 'button';
            var30['accessibilityRole'] = var41;
            var30['onPress'] = var36;
            var46 = _closure1_slot13;
            var36 = _closure1_slot1;
            var41 = _closure1_slot2;
            var44 = 36;
            var44 = var41[var44];
            var45 = var36.bind(var5)(var44);
            var44 = {};
            var44['emoji'] = var31;
            var44['size'] = var25;
            var25 = var38.emoji;
            var44['style'] = var25;
            var25 = true;
            var44['withPlaceholder'] = var25;
            var44 = var46.bind(var5)(var45, var44);
            var30['children'] = var44;
            var34 = var37.bind(var5)(var34, var30);
            var30 = new Array(3);
            var30[0] = var34;
            var37 = _closure1_slot13;
            var34 = 37;
            var34 = var41[var34];
            var36 = var36.bind(var5)(var34);
            var34 = {};
            var34['ref'] = var43;
            var43 = _closure1_slot8;
            var34['maxLength'] = var43;
            var34['placeholder'] = var42;
            var42 = var38.inputPlaceholder;
            var42 = var42.color;
            var34['placeholderTextColor'] = var42;
            var44 = _closure1_slot0;
            var42 = var41[var22];
            var42 = var44.bind(var5)(var42);
            var43 = var42.intl;
            var42 = var43.string;
            var41 = var41[var22];
            var41 = var44.bind(var5)(var41);
            var41 = var41.t;
            var41 = var41.xalUlZ;
            var41 = var42.bind(var43)(var41);
            var34['accessibilityLabel'] = var41;
            var34['onSubmitEditing'] = var40;
            var40 = var38.status;
            var34['style'] = var40;
            var34['value'] = var32;
            var34['onChange'] = var39;
            var39 = false;
            var34['autoCorrect'] = var39;
            var34['showBorder'] = var39;
            var34['showTopContainer'] = var39;
            var39 = 'none';
            var34['autoCapitalize'] = var39;
            var38 = var38.statusText;
            var34['inputTextStyle'] = var38;
            var34['multiline'] = var25;
            var38 = 'blurAndSubmit';
            var34['submitBehavior'] = var38;
            var38 = 'done';
            var34['returnKeyType'] = var38;
            var34['autoFocus'] = var25;
            var34 = var37.bind(var5)(var36, var34);
            var30[1] = var34;
            var31 = var12 != var31;
            if(var31) { _fun0001_ip = 1808; continue _fun0001 }
 1804:
            var31 = var33 !== var32;
 1808:
            if(!var31) { _fun0001_ip = 1831; continue _fun0001 }
 1811:
            var34 = _closure1_slot13;
            var33 = _closure1_slot16;
            var32 = {};
            var32['onPress'] = var35;
            var31 = var34.bind(var5)(var33, var32);
 1831:
            var30[2] = var31;
            var20['children'] = var30;
            var20 = var29.bind(var5)(var26, var20);
            var19[1] = var20;
            var15['children'] = var19;
            var15 = var18.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var8.bind(var5)(var13, var11);
            var9[1] = var11;
            var16 = _closure1_slot13;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 38;
            var13 = var18[var11];
            var13 = var19.bind(var5)(var13);
            var15 = var13.TableRowGroup;
            var13 = {};
            var20 = _closure1_slot13;
            var14 = 39;
            var18 = var18[var14];
            var18 = var19.bind(var5)(var18);
            var19 = var18.TableRow;
            var18 = {};
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var30 = var26[var22];
            var30 = var29.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var26[var22];
            var26 = var29.bind(var5)(var26);
            var29 = var26.t;
            if(var28) { _fun0001_ip = 1990; continue _fun0001 }
 1977:
            var26 = var29.E45wvL;
            var26 = var30.bind(var31)(var26);
            _fun0001_ip = 2003; continue _fun0001;
 1990:
            var29 = var29.+14vvb;
            var26 = var30.bind(var31)(var29);
 2003:
            var18['label'] = var26;
            var18['arrow'] = var25;
            var23 = function onPress() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var5 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var5);
                var5 = var6.dismissKeyboard;
                var5 = var5.bind(var6)();
                var5 = _closure1_slot1;
                var3 = 40;
                var3 = var2[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.openLazy;
                var3 = 42;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 41;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot9;
                var3['initialValue'] = var7;
                var2 = _closure2_slot10;
                var3['onChange'] = var2;
                var2 = 'ClearAfterOptionsActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var18['onPress'] = var23;
            var25 = _closure1_slot13;
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = var30[var21];
            var21 = var23.bind(var5)(var21);
            var23 = var21.Text;
            var21 = {};
            var26 = 'text-sm/medium';
            var21['variant'] = var26;
            var29 = _closure1_slot1;
            var26 = 43;
            var26 = var30[var26];
            var26 = var29.bind(var5)(var26);
            var26 = var26.bind(var5)(var27, var28);
            var21['children'] = var26;
            var21 = var25.bind(var5)(var23, var21);
            var18['trailing'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var13['children'] = var18;
            var13 = var16.bind(var5)(var15, var13);
            var9[2] = var13;
            var10 = var12 != var10;
            if(!var10) { _fun0001_ip = 2315; continue _fun0001 }
 2124:
            var13 = _closure1_slot13;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = var18[var11];
            var11 = var21.bind(var5)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            var16 = _closure1_slot13;
            var14 = var18[var14];
            var14 = var21.bind(var5)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var23 = _closure1_slot13;
            var19 = 44;
            var19 = var18[var19];
            var19 = var21.bind(var5)(var19);
            var20 = var19.TrashIcon;
            var19 = {};
            var25 = _closure1_slot1;
            var24 = 9;
            var24 = var18[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.colors;
            var24 = var24.TEXT_DANGER;
            var19['color'] = var24;
            var19 = var23.bind(var5)(var20, var19);
            var14['icon'] = var19;
            var19 = var18[var22];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.wO53tr;
            var18 = var19.bind(var20)(var18);
            var14['label'] = var18;
            var14['onPress'] = var17;
            var17 = 'danger';
            var14['variant'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 2315:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 2339:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();