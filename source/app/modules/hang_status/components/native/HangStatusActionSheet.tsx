// app/modules/hang_status/components/native/HangStatusActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HANG_STATUS_ACTION_SHEET_KEY;
    var _closure1_slot9 = var7;
    var4 = var4.STATUS_MAX_LENGTH;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HangStatusTypes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 16, 'marginBottom': 64};
    var4['contentContainer'] = var9;
    var9 = {'marginTop': 16, 'borderRadius': null, 'overflow': 'hidden'};
    var11 = 10;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var13;
    var4['optionsWrapper'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['customStatusContainer'] = var9;
    var9 = {'height': 28, 'width': 28};
    var4['emojiStyle'] = var9;
    var9 = {'marginRight': 8, 'backgroundColor': null, 'padding': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['emojiSelector'] = var9;
    var9 = {'height': 20, 'width': 20};
    var4['emoji'] = var9;
    var9 = {};
    var9['flexGrow'] = var10;
    var4['inputContainer'] = var9;
    var9 = {'position': 'absolute', 'bottom': 12, 'left': 12, 'right': 12, 'paddingHorizontal': 16};
    var4['floatingButtonsContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'flexGrow': 1, 'gap': 12};
    var4['buttonsRow'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9['borderRadius'] = var11;
    var9['flexGrow'] = var10;
    var4['confirmButtonWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/HangStatusActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.initialStatusType;
            var11 = var1.initialStatusText;
            var9 = var1.initialStatusEmoji;
            var3 = var1.channelId;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot16;
            var23 = var1.bind(var4)();
            var _closure2_slot1 = var23;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.getHangStatusOptions;
            var27 = var1.bind(var2)();
            var5 = _closure1_slot4;
            var10 = var5.useRef;
            var1 = _closure1_slot8;
            var2 = var1.getRecentCustomStatuses;
            var2 = var2.bind(var1)();
            var21 = var10.bind(var5)(var2);
            var2 = 12;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getHangStatusActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var8)(var2, var1);
            var2 = var5.useState;
            var30 = null;
            if(!(var30 == var6)) { _fun0001_ip = 213; continue _fun0001 }
 196:
            var7 = var30 == var10;
            var1 = undefined;
            if(var7) { _fun0001_ip = 210; continue _fun0001 }
 205:
            var1 = var10.state;
 210:
            var6 = var1;
 213:
            var7 = var30 != var6;
            var1 = null;
            if(!var7) { _fun0001_ip = 225; continue _fun0001 }
 222:
            var1 = var6;
 225:
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot3;
            var7 = 2;
            var1 = var1.bind(var4)(var2, var7);
            var26 = 0;
            var2 = var1[var26];
            _closure2_slot2 = var2;
            var5 = 1;
            var1 = var1[var5];
            _closure2_slot3 = var1;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            if(!(var30 == var11)) { _fun0001_ip = 295; continue _fun0001 }
 277:
            var12 = var30 == var10;
            var1 = undefined;
            if(var12) { _fun0001_ip = 292; continue _fun0001 }
 286:
            var1 = var10.details;
 292:
            var11 = var1;
 295:
            var12 = var30 != var11;
            var1 = '';
            if(!var12) { _fun0001_ip = 309; continue _fun0001 }
 306:
            var1 = var11;
 309:
            var6 = var6.bind(var8)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var6, var7);
            var32 = var1[var26];
            _closure2_slot4 = var32;
            var1 = var1[var5];
            _closure2_slot5 = var1;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            if(!(var30 == var9)) { _fun0001_ip = 371; continue _fun0001 }
 353:
            var11 = var30 == var10;
            var1 = undefined;
            if(var11) { _fun0001_ip = 368; continue _fun0001 }
 362:
            var1 = var10.emoji;
 368:
            var9 = var1;
 371:
            var10 = var30 != var9;
            var1 = null;
            if(!var10) { _fun0001_ip = 383; continue _fun0001 }
 380:
            var1 = var9;
 383:
            var6 = var6.bind(var8)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var6, var7);
            var35 = var1[var26];
            _closure2_slot6 = var35;
            var1 = var1[var5];
            _closure2_slot7 = var1;
            var7 = _closure1_slot4;
            var1 = var7.useRef;
            var34 = var1.bind(var7)(var30);
            _closure2_slot8 = var34;
            var6 = var7.useCallback;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 28; continue _fun0002 }
 18:
                    var1 = var2.blur;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var33 = var6.bind(var7)(var5, var1);
            var1 = function handleSelectStatus(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot3;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var5 = var3.current;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0003_ip = 42; continue _fun0003 }
 32:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
 42:
                    var5 = _closure2_slot5;
                    var4 = '';
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            _closure2_slot9 = var1;
            var6 = var7.useCallback;
            var5 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.clearHangStatus;
                var3 = true;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var2 = _closure1_slot9;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var24 = var6.bind(var7)(var5, var1);
            var6 = var7.useCallback;
            var5 = new Array(2);
            var5[0] = var32;
            var5[1] = var3;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var8 = {};
                    var2 = var1.id;
                    var8['id'] = var2;
                    var3 = var1.id;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 47; continue _fun0004 }
 25:
                    var3 = var1.surrogates;
                    if(!(var2 != var3)) { _fun0004_ip = 47; continue _fun0004 }
 34:
                    var4 = var1.surrogates;
                    var3 = '';
                    if(!(var3 === var4)) { _fun0004_ip = 68; continue _fun0004 }
 47:
                    var3 = var1.name;
                    var4 = var2 != var3;
                    var2 = '';
                    if(!var4) { _fun0004_ip = 66; continue _fun0004 }
 63:
                    var2 = var3;
 66:
                    _fun0004_ip = 73; continue _fun0004;
 68:
                    var2 = var1.surrogates;
 73:
                    var8['name'] = var2;
                    var1 = var1.animated;
                    var8['animated'] = var1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var3 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 16;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 15;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = _closure1_slot9;
                    var2 = {};
                    var7 = _closure1_slot11;
                    var7 = var7.CUSTOM;
                    var2['initialStatusType'] = var7;
                    var9 = _closure2_slot4;
                    var2['initialStatusText'] = var9;
                    var2['initialStatusEmoji'] = var8;
                    var7 = _closure2_slot0;
                    var2['channelId'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            _closure2_slot10 = var1;
            var6 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var6 = _closure2_slot10;
                var2['onPressEmoji'] = var6;
                var5 = _closure1_slot12;
                var5 = var5.STATUS;
                var2['pickerIntention'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15 = var6.bind(var7)(var1, var5);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.bottom;
            var11 = {};
            var1 = 19;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var6 = var1.bind(var4)();
            var1 = 0;
            if(var6) { _fun0001_ip = 602; continue _fun0001 }
 599:
            var1 = var5;
 602:
            var11['paddingBottom'] = var1;
            var19 = var30 != var2;
            if(!var19) { _fun0001_ip = 628; continue _fun0001 }
 614:
            var1 = _closure1_slot11;
            var1 = var1.CUSTOM;
            var19 = var2 !== var1;
 628:
            var1 = var32.trim;
            var1 = var1.bind(var32)();
            var1 = var1.length;
            var20 = var1 > var26;
            if(!var20) { _fun0001_ip = 654; continue _fun0001 }
 650:
            var20 = var30 != var35;
 654:
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var3);
            _closure2_slot11 = var1;
            var3 = _closure1_slot14;
            var37 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 20;
            var1 = var25[var1];
            var1 = var37.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var7 = _closure1_slot13;
            var5 = 21;
            var5 = var25[var5];
            var5 = var37.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'bodyStyles': null, 'startExpanded': true, 'keyboardShouldPersistTaps': 'handled'};
            var8 = var23.contentContainer;
            var5['bodyStyles'] = var8;
            var16 = true;
            var10 = _closure1_slot1;
            var9 = 22;
            var8 = var25[var9];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var12 = 23;
            var12 = var25[var12];
            var12 = var37.bind(var4)(var12);
            var13 = var12.BottomSheetTitleHeader;
            var12 = {};
            var22 = 24;
            var14 = var25[var22];
            var14 = var37.bind(var4)(var14);
            var29 = var14.intl;
            var28 = var29.string;
            var14 = var25[var22];
            var14 = var37.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.qstQub;
            var14 = var28.bind(var29)(var14);
            var12['title'] = var14;
            var13 = var7.bind(var4)(var13, var12);
            var12 = new Array(4);
            var12[0] = var13;
            var28 = _closure1_slot5;
            var13 = {};
            var14 = var23.customStatusContainer;
            var13['style'] = var14;
            var14 = 25;
            var14 = var25[var14];
            var14 = var37.bind(var4)(var14);
            var29 = var14.PressableOpacity;
            var14 = {};
            var31 = var23.emojiSelector;
            var14['style'] = var31;
            var31 = var25[var22];
            var31 = var37.bind(var4)(var31);
            var36 = var31.intl;
            var31 = var36.string;
            var25 = var25[var22];
            var25 = var37.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.WkfRZG;
            var25 = var31.bind(var36)(var25);
            var14['accessibilityLabel'] = var25;
            var25 = {};
            var31 = var30 == var35;
            var30 = undefined;
            if(var31) { _fun0001_ip = 969; continue _fun0001 }
 964:
            var30 = var35.name;
 969:
            var25['text'] = var30;
            var14['accessibilityValue'] = var25;
            var25 = 'button';
            var14['accessibilityRole'] = var25;
            var14['onPress'] = var15;
            var15 = _closure1_slot13;
            var31 = _closure1_slot1;
            var25 = _closure1_slot2;
            var30 = 26;
            var30 = var25[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {'size': 20, 'emoji': null, 'withPlaceholder': true};
            var30['emoji'] = var35;
            var30 = var15.bind(var4)(var31, var30);
            var14['children'] = var30;
            var14 = var7.bind(var4)(var29, var14);
            var29 = new Array(2);
            var29[0] = var14;
            var14 = _closure1_slot0;
            var30 = 27;
            var30 = var25[var30];
            var30 = var14.bind(var4)(var30);
            var31 = var30.TextInput;
            var30 = {};
            var30['ref'] = var34;
            var34 = var23.inputContainer;
            var30['containerStyle'] = var34;
            var34 = _closure1_slot10;
            var30['maxLength'] = var34;
            var34 = var25[var22];
            var34 = var14.bind(var4)(var34);
            var36 = var34.intl;
            var35 = var36.string;
            var34 = var25[var22];
            var34 = var14.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.KPop4u;
            var34 = var35.bind(var36)(var34);
            var30['placeholder'] = var34;
            var34 = var25[var22];
            var34 = var14.bind(var4)(var34);
            var36 = var34.intl;
            var35 = var36.string;
            var34 = var25[var22];
            var34 = var14.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.xalUlZ;
            var34 = var35.bind(var36)(var34);
            var30['accessibilityLabel'] = var34;
            var30['onSubmitEditing'] = var33;
            var30['value'] = var32;
            var32 = function onChange(arg1) {
                var4 = _closure2_slot3;
                var1 = _closure1_slot11;
                var3 = var1.CUSTOM;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot5;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var30['onChange'] = var32;
            var32 = 'none';
            var30['autoCapitalize'] = var32;
            var30['grow'] = var16;
            var30 = var15.bind(var4)(var31, var30);
            var29[1] = var30;
            var13['children'] = var29;
            var13 = var3.bind(var4)(var28, var13);
            var12[1] = var13;
            var13 = 28;
            var13 = var25[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.FormDivider;
            var13 = {};
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot5;
            var13 = {};
            var25 = var23.optionsWrapper;
            var13['style'] = var25;
            var25 = var21.current;
            var25 = var25.length;
            var25 = var25 > var26;
            if(!var25) { _fun0001_ip = 1353; continue _fun0001 }
 1331:
            var28 = var21.current;
            var26 = var28.map;
            var21 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var13 = arg1;
                    var _closure3_slot0 = var13;
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot11;
                    var2 = var2.CUSTOM;
                    var14 = var3 === var2;
                    if(!var14) { _fun0005_ip = 49; continue _fun0005 }
 36:
                    var3 = var13.status;
                    var2 = _closure2_slot4;
                    var14 = var3 === var2;
 49:
                    if(!var14) { _fun0005_ip = 96; continue _fun0005 }
 52:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.isEqual;
                    var3 = var13.emoji;
                    var2 = _closure2_slot6;
                    var14 = var4.bind(var6)(var3, var2);
 96:
                    var3 = var13.emoji;
                    var2 = null;
                    var12 = var2 != var3;
                    if(!var12) { _fun0005_ip = 158; continue _fun0005 }
 111:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.canUseEmojiForHangStatus;
                    var2 = var13.emoji;
                    var1 = _closure2_slot11;
                    var1 = var3.bind(var4)(var2, var1);
                    var12 = !var1;
 158:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot15;
                    var2 = {};
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 28;
                    var10 = var9[var6];
                    var1 = undefined;
                    var10 = var7.bind(var1)(var10);
                    var11 = var10.FormRadioRow;
                    var10 = {};
                    var16 = var13.status;
                    var10['aria-label'] = var16;
                    var16 = var13.status;
                    var10['label'] = var16;
                    var15 = function onPress() {
                        var2 = _closure3_slot0;
                        var5 = _closure2_slot3;
                        var1 = _closure1_slot11;
                        var4 = var1.CUSTOM;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot5;
                        var4 = var2.status;
                        var4 = var5.bind(var1)(var4);
                        var3 = _closure2_slot7;
                        var2 = var2.emoji;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10['onPress'] = var15;
                    var10['selected'] = var14;
                    var10['disabled'] = var12;
                    var12 = 'right';
                    var10['align'] = var12;
                    var12 = _closure1_slot1;
                    var5 = 26;
                    var5 = var9[var5];
                    var12 = var12.bind(var1)(var5);
                    var5 = {};
                    var5['size'] = var6;
                    var13 = var13.emoji;
                    var5['emoji'] = var13;
                    var5 = var8.bind(var1)(var12, var5);
                    var10['leading'] = var5;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var13 = var5.concat;
                    var12 = 'custom-status-';
                    var5 = arg2;
                    var5 = var13.bind(var12)(var5);
                    var10 = var8.bind(var1)(var11, var10, var5);
                    var5 = new Array(2);
                    var5[0] = var10;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var25 = var26.bind(var28)(var21);
 1353:
            var21 = new Array(2);
            var21[0] = var25;
            var25 = global;
            var26 = var25.Object;
            var25 = var26.entries;
            var27 = var25.bind(var26)(var27);
            var26 = var27.map;
            var25 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var5 = var3().value;
                    var2 = var1;
                    var4 = undefined;
                    var2 = var2 === var4;
                    var11 = undefined;
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
 26:
                    var11 = var5;
 29:
                    var _closure3_slot0 = var11;
                    var15 = undefined;
                    if(var2) { _fun0006_ip = 63; continue _fun0006 }
 38:
                    var5 = var3().value;
                    var3 = var1;
                    var3 = var3 === var4;
                    var15 = undefined;
                    var2 = var3;
                    if(var3) { _fun0006_ip = 63; continue _fun0006 }
 57:
                    var15 = var5;
                    var2 = var3;
 63:
                    if(var2) { _fun0006_ip = 69; continue _fun0006 }
 66:
                    var1.return();
 69:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 28;
                    var5 = var9[var6];
                    var5 = var7.bind(var4)(var5);
                    var10 = var5.FormRadioRow;
                    var5 = {};
                    var14 = var15.title;
                    var5['label'] = var14;
                    var13 = function onPress() {
                        var3 = _closure2_slot9;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onPress'] = var13;
                    var13 = _closure2_slot2;
                    var13 = var11 === var13;
                    var5['selected'] = var13;
                    var13 = 'right';
                    var5['align'] = var13;
                    var13 = _closure1_slot6;
                    var12 = {};
                    var16 = var15.icon;
                    var12['source'] = var16;
                    var15 = var15.title;
                    var12['alt'] = var15;
                    var14 = _closure2_slot1;
                    var14 = var14.emojiStyle;
                    var12['style'] = var14;
                    var12 = var8.bind(var4)(var13, var12);
                    var5['leading'] = var12;
                    var10 = var8.bind(var4)(var10, var5, var11);
                    var5 = new Array(2);
                    var5[0] = var10;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var25 = var26.bind(var27)(var25);
            var21[1] = var25;
            var13['children'] = var21;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var8['children'] = var12;
            var8 = var3.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var12 = var23.floatingButtonsContainer;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = var21[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var12 = var23.buttonsRow;
            var9['style'] = var12;
            var15 = _closure1_slot0;
            var14 = 31;
            var12 = var21[var14];
            var12 = var15.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var25 = 'secondary';
            var12['variant'] = var25;
            var25 = var21[var22];
            var25 = var15.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var21[var22];
            var25 = var15.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.S90Fub;
            var25 = var26.bind(var27)(var25);
            var12['text'] = var25;
            var12['onPress'] = var24;
            var12['grow'] = var16;
            var13 = var8.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var23 = var23.confirmButtonWrapper;
            var13['style'] = var23;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {};
            if(var19) { _fun0001_ip = 1648; continue _fun0001 }
 1645:
            var19 = var20;
 1648:
            var19 = !var19;
            var14['disabled'] = var19;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.S0ajKC;
            var18 = var19.bind(var20)(var18);
            var14['text'] = var18;
            var17 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = _closure1_slot11;
                    var3 = var3.CUSTOM;
                    if(!(var4 !== var3)) { _fun0007_ip = 66; continue _fun0007 }
 24:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.updateHangStatus;
                    var4 = _closure2_slot2;
                    var3 = true;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun0007_ip = 149; continue _fun0007;
 66:
                    var4 = _closure2_slot4;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var3 = var3 !== var4;
                    if(!var3) { _fun0007_ip = 101; continue _fun0007 }
 91:
                    var5 = _closure2_slot6;
                    var4 = null;
                    var3 = var4 != var5;
 101:
                    if(!var3) { _fun0007_ip = 149; continue _fun0007 }
 104:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.updateCustomHangStatus;
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot6;
                    var1 = true;
                    var1 = var5.bind(var6)(var4, var3, var1);
 149:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var2 = _closure1_slot9;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14['onPress'] = var17;
            var14['grow'] = var16;
            var14 = var8.bind(var4)(var15, var14);
            var13['children'] = var14;
            var13 = var8.bind(var4)(var7, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();