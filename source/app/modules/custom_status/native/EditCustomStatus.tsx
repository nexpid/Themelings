// app/modules/custom_status/native/EditCustomStatus.tsx
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
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot9 = var7;
    var12 = var4.Fonts;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexGrow': 1, 'padding': 16, 'rowGap': 32};
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'backgroundColor': null, 'borderRadius': null, 'padding': 12};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['statusContainer'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['emoji'] = var9;
    var9 = {'color': null, 'lineHeight': 16, 'flexGrow': 1, 'alignSelf': 'flex-start', 'paddingVertical': 0, 'paddingHorizontal': 0};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_PRIMARY;
    var9['color'] = var13;
    var4['status'] = var9;
    var9 = {'minHeight': 80, 'fontSize': 16, 'lineHeight': 20, 'fontFamily': null, 'color': null, 'flexGrow': 1, 'height': 'auto'};
    var12 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_PRIMARY;
    var9['color'] = var12;
    var4['statusText'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var9['color'] = var12;
    var4['inputPlaceholder'] = var9;
    var9 = {};
    var9['rowGap'] = var10;
    var4['clearAfterSection'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['clearAfterOptions'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/native/EditCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditCustomStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.navigation;
            var _closure2_slot0 = var6;
            var2 = var1.onClose;
            var _closure2_slot1 = var2;
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var5 = _closure1_slot4;
            var7 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot8;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = _closure1_slot9;
                var6 = var6.EDIT_CUSTOM_STATUS_MODAL;
                var2['type'] = var6;
                var6 = _closure2_slot2;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var7.bind(var5)(var1, var3);
            var1 = _closure1_slot13;
            var22 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useCustomStatusActivity;
            var10 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var1 = 11;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var3 = var5.useState;
            var9 = null;
            var1 = var9 == var10;
            var7 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var10.state;
case 2:
            var8 = var9 != var7;
            var1 = '';
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var7;
case 4:
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot3;
            var11 = 2;
            var1 = var1.bind(var4)(var3, var11);
            var7 = 0;
            var25 = var1[var7];
            _closure2_slot3 = var25;
            var3 = 1;
            var24 = var1[var3];
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var1 = var9 == var10;
            var13 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var10.emoji;
case 6:
            var15 = var9 != var13;
            var1 = null;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var13;
case 8:
            var1 = var5.bind(var8)(var1);
            var8 = _closure1_slot3;
            var1 = var8.bind(var4)(var1, var11);
            var18 = var1[var7];
            _closure2_slot4 = var18;
            var1 = var1[var3];
            _closure2_slot5 = var1;
            var5 = _closure1_slot4;
            var1 = var5.useState;
            var1 = var1.bind(var5)(var12);
            var1 = var8.bind(var4)(var1, var11);
            var16 = var1[var7];
            _closure2_slot6 = var16;
            var1 = var1[var3];
            _closure2_slot7 = var1;
            var7 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var25;
            var3[1] = var18;
            var3[2] = var16;
            var3[3] = var2;
            var1 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 12;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = {};
                var6 = _closure2_slot3;
                var4['text'] = var6;
                var6 = _closure2_slot4;
                var4['emojiInfo'] = var6;
                var6 = _closure2_slot6;
                var4['clearAfter'] = var6;
                var4 = var5.bind(var1)(var4);
                var8 = _closure1_slot0;
                var3 = 13;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var5 = var3.AccessibilityAnnouncer;
                var4 = var5.announce;
                var3 = 14;
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
            };
            var1 = var7.bind(var5)(var1, var3);
            _closure2_slot8 = var1;
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 15;
                var3 = var8[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var7 = _closure1_slot0;
                var2 = 13;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var4 = var2.AccessibilityAnnouncer;
                var3 = var4.announce;
                var2 = 14;
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
            var15 = var7.bind(var5)(var2, var3);
            var7 = var5.useCallback;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot5;
                    var2 = {};
                    var4 = var1.id;
                    var2['id'] = var4;
                    var5 = var1.id;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var1.surrogates;
                    if(!(var4 != var5)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var6 = var1.surrogates;
                    var5 = '';
                    if(!(var5 === var6)) { _fun0002_ip = 13; continue _fun0002 }
case 10:
                    var5 = var1.name;
                    var6 = var4 != var5;
                    var4 = '';
                    if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = var5;
case 14:
                    _fun0002_ip = 16; continue _fun0002;
case 13:
                    var4 = var1.surrogates;
case 16:
                    var2['name'] = var4;
                    var1 = var1.animated;
                    var2['animated'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var7.bind(var5)(var3, var2);
            _closure2_slot9 = var2;
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot9;
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot10;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12 = var7.bind(var5)(var2, var3);
            var2 = var5.useRef;
            var27 = var2.bind(var5)(var9);
            _closure2_slot10 = var27;
            var7 = var5.useCallback;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var26 = var7.bind(var5)(var3, var2);
            var3 = var5.useRef;
            var2 = {};
            var2['statusText'] = var25;
            var2['statusEmoji'] = var18;
            var2['clearAfter'] = var16;
            var2 = var3.bind(var5)(var2);
            _closure2_slot11 = var2;
            var3 = var5.useLayoutEffect;
            var2 = new Array(6);
            var2[0] = var6;
            var2[1] = var1;
            var2[2] = var25;
            var2[3] = var18;
            var2[4] = var16;
            var2[5] = var22;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = var2.trim;
                    var2 = var1.bind(var2)();
                    var1 = '';
                    var7 = var1 === var2;
                    if(!var7) { _fun0004_ip = 19; continue _fun0004 }
case 17:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var7 = var1 == var2;
case 19:
                    if(var7) { _fun0004_ip = 20; continue _fun0004 }
case 12:
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot11;
                    var1 = var1.current;
                    var1 = var1.statusText;
                    var1 = var2 === var1;
                    if(!var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var2 = var2.statusEmoji;
                    var1 = var3 === var2;
case 21:
                    if(!var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var2 = var2.clearAfter;
                    var1 = var3 === var2;
case 23:
                    var7 = var1;
case 20:
                    var4 = _closure2_slot0;
                    var3 = var4.setOptions;
                    var2 = {};
                    var1 = undefined;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 17;
                    var7 = var13[var7];
                    var9 = var12.bind(var1)(var7);
                    var8 = var9.getHeaderTextButton;
                    var7 = 14;
                    var10 = var13[var7];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.R3BPHx;
                    var7 = var10.bind(var11)(var7);
                    var6 = _closure2_slot8;
                    var5 = var8.bind(var9)(var7, var6);
case 25:
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var22.container;
            var5['style'] = var8;
            var8 = {};
            var11 = var22.statusContainer;
            var8['style'] = var11;
            var28 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 18;
            var11 = var13[var11];
            var11 = var28.bind(var4)(var11);
            var19 = var11.PressableOpacity;
            var11 = {};
            var20 = 14;
            var17 = var13[var20];
            var17 = var28.bind(var4)(var17);
            var23 = var17.intl;
            var17 = var23.string;
            var13 = var13[var20];
            var13 = var28.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.WkfRZG;
            var13 = var17.bind(var23)(var13);
            var11['accessibilityLabel'] = var13;
            var13 = {};
            var23 = var9 == var18;
            var17 = undefined;
            if(var23) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var17 = var18.name;
case 27:
            var13['text'] = var17;
            var11['accessibilityValue'] = var13;
            var13 = 'button';
            var11['accessibilityRole'] = var13;
            var11['onPress'] = var12;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var23 = 19;
            var23 = var17[var23];
            var29 = var12.bind(var4)(var23);
            var28 = {};
            var28['emoji'] = var18;
            var18 = 20;
            var28['size'] = var18;
            var23 = var22.emoji;
            var28['style'] = var23;
            var23 = true;
            var28['withPlaceholder'] = var23;
            var28 = var13.bind(var4)(var29, var28);
            var11['children'] = var28;
            var19 = var3.bind(var4)(var19, var11);
            var11 = new Array(2);
            var11[0] = var19;
            var18 = var17[var18];
            var19 = var12.bind(var4)(var18);
            var18 = {};
            var18['ref'] = var27;
            var27 = _closure1_slot7;
            var18['maxLength'] = var27;
            var30 = _closure1_slot0;
            var27 = var17[var20];
            var27 = var30.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var17[var20];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.TM2l8P;
            var27 = var28.bind(var29)(var27);
            var18['placeholder'] = var27;
            var27 = var22.inputPlaceholder;
            var27 = var27.color;
            var18['placeholderTextColor'] = var27;
            var27 = var17[var20];
            var27 = var30.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var17[var20];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.xalUlZ;
            var27 = var28.bind(var29)(var27);
            var18['accessibilityLabel'] = var27;
            var18['onSubmitEditing'] = var26;
            var26 = var22.status;
            var18['style'] = var26;
            var18['value'] = var25;
            var18['onChange'] = var24;
            var18['multiline'] = var23;
            var24 = false;
            var18['autoCorrect'] = var24;
            var18['showBorder'] = var24;
            var18['showTopContainer'] = var24;
            var24 = 'top';
            var18['textAlignVertical'] = var24;
            var24 = 'none';
            var18['autoCapitalize'] = var24;
            var18['showCharactersRemaining'] = var23;
            var22 = var22.statusText;
            var18['inputTextStyle'] = var22;
            var18 = var13.bind(var4)(var19, var18);
            var11[1] = var18;
            var8['children'] = var11;
            var11 = var7.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var11 = 21;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['value'] = var16;
            var14 = function onChange(arg1) {
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var11['onChange'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8[1] = var11;
            var9 = var9 != var10;
            if(!var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var12 = _closure1_slot11;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 22;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var13 = 23;
            var13 = var16[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.TableRow;
            var13 = {};
            var17 = 24;
            var17 = var16[var17];
            var17 = var19.bind(var4)(var17);
            var18 = var17.TrashIcon;
            var17 = {};
            var22 = _closure1_slot1;
            var21 = 8;
            var21 = var16[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.colors;
            var21 = var21.TEXT_DANGER;
            var17['color'] = var21;
            var17 = var12.bind(var4)(var18, var17);
            var13['icon'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.wO53tr;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var13['onPress'] = var15;
            var15 = 'danger';
            var13['variant'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 29:
            var8[2] = var9;
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