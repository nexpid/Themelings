// app/modules/polls/native/PollAnswerInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ImageInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.channelId;
            var12 = var1.localCreationAnswerId;
            var3 = var1.image;
            var _closure2_slot0 = var3;
            var10 = var1.iconSrc;
            var16 = var1.openExpressionPicker;
            var9 = var1.emojiSize;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var9 = 24;
 53:
            var13 = var1.containerStyle;
            var7 = var1.imageSize;
            var5 = var1.answerIndex;
            var _closure2_slot1 = var5;
            var1 = var1.openImageInputActionSheet;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var8 = _closure1_slot14;
            var11 = var8.bind(var4)();
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 9;
            var8 = var17[var8];
            var8 = var15.bind(var4)(var8);
            var24 = undefined;
            var23 = var14;
            var22 = var12;
            var21 = var3;
            var20 = var7;
            var19 = var9;
            var8 = var24[var8](var23, var22, var21, var20, var19, var18);
            var9 = var8.renderImage;
            var12 = var8.upload;
            _closure2_slot2 = var12;
            var15 = var8.setUploadSize;
            _closure2_slot3 = var15;
            var17 = _closure1_slot3;
            var14 = var17.useMemo;
            var8 = new Array(3);
            var8[0] = var3;
            var8[1] = var12;
            var8[2] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 == var1;
                    var6 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 29; continue _fun0002 }
 20:
                    var3 = _closure2_slot0;
                    var1 = var3.emoji;
 29:
                    if(!(var2 == var1)) { _fun0002_ip = 261; continue _fun0002 }
 36:
                    var1 = _closure2_slot2;
                    if(!(var2 == var1)) { _fun0002_ip = 125; continue _fun0002 }
 44:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var4 = var8[var1];
                    var4 = var3.bind(var6)(var4);
                    var7 = var4.intl;
                    var4 = var7.formatToPlainString;
                    var1 = var8[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.ieNrxs;
                    var1 = {};
                    var9 = _closure2_slot1;
                    var8 = 1;
                    var8 = var9 + var8;
                    var1['answerNumber'] = var8;
                    var1 = var4.bind(var7)(var3, var1);
                    return var1;
 125:
                    var1 = _closure2_slot2;
                    var1 = var1.item;
                    var1 = var1.filename;
                    var2 = var2 != var1;
                    var9 = '';
                    if(!var2) { _fun0002_ip = 154; continue _fun0002 }
 151:
                    var9 = var1;
 154:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 10;
                    var2 = var10[var1];
                    var2 = var8.bind(var6)(var2);
                    var4 = var2.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var10[var1];
                    var1 = var8.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1.vcC7Qk;
                    var1 = {};
                    var7 = 11;
                    var7 = var10[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.filterOutUUID;
                    var7 = var7.bind(var8)(var9);
                    var1['imageName'] = var7;
                    var8 = _closure2_slot1;
                    var7 = 1;
                    var7 = var8 + var7;
                    var1['answerNumber'] = var7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 261:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var3 = var7[var1];
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1.vcC7Qk;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.emoji;
                    var6 = var6.name;
                    var1['imageName'] = var6;
                    var6 = _closure2_slot1;
                    var5 = 1;
                    var5 = var6 + var5;
                    var1['answerNumber'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var17 = var14.bind(var17)(var5, var8);
            var14 = _closure1_slot3;
            var8 = var14.useCallback;
            var5 = new Array(1);
            var5[0] = var15;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var14 = var8.bind(var14)(var2, var5);
            var8 = null;
            var5 = var8 != var12;
            if(var5) { _fun0001_ip = 262; continue _fun0001 }
 244:
            var15 = var8 == var3;
            var2 = undefined;
            if(var15) { _fun0001_ip = 258; continue _fun0001 }
 253:
            var2 = var3.emoji;
 258:
            var5 = var8 != var2;
 262:
            if(!var5) { _fun0001_ip = 268; continue _fun0001 }
 265:
            var16 = var1;
 268:
            var15 = undefined;
            if(var5) { _fun0001_ip = 276; continue _fun0001 }
 273:
            var15 = var1;
 276:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 12;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var18 = 'button';
            var1['accessibilityRole'] = var18;
            var1['accessibilityLabel'] = var17;
            var1['onPress'] = var16;
            var1['onLongPress'] = var15;
            var15 = var8 == var7;
            var7 = undefined;
            if(!var15) { _fun0001_ip = 341; continue _fun0001 }
 338:
            var7 = var14;
 341:
            var1['onLayout'] = var7;
            var7 = new Array(2);
            var7[0] = var13;
            var8 = var8 != var12;
            if(!var8) { _fun0001_ip = 367; continue _fun0001 }
 361:
            var8 = var11.uploadContainer;
 367:
            var7[1] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot11;
            if(var5) { _fun0001_ip = 416; continue _fun0001 }
 382:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 13;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['source'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 432; continue _fun0001;
 416:
            var7 = _closure1_slot5;
            var6 = {};
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 432:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TouchableOpacity;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_POLL_ANSWER_LENGTH;
    var _closure1_slot8 = var7;
    var4 = var4.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
    var _closure1_slot9 = var4;
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
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['defaultContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'flex': 1, 'overflow': 'hidden'};
    var11 = 8;
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
    var4['defaultImageAndTextContainer'] = var9;
    var9 = {};
    var13 = 30;
    var9['marginRight'] = var13;
    var4['cannotRemove'] = var9;
    var9 = {'width': 60, 'height': 48, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['defaultImageContainer'] = var9;
    var9 = {'flex': 1, 'paddingStart': 0};
    var4['pollAnswerTextInput'] = var9;
    var9 = {'paddingLeft': 6, 'height': 48, 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var9['color'] = var13;
    var4['defaultRemoveButtonContainer'] = var9;
    var9 = {};
    var13 = 'flex-start';
    var9['alignItems'] = var13;
    var4['uploadContainer'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_DANGER;
    var9['borderColor'] = var11;
    var9['borderWidth'] = var10;
    var4['errorInput'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/PollAnswerInput.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PollAnswerInput(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.answer;
            var _closure2_slot0 = var1;
            var22 = var2.index;
            var _closure2_slot1 = var22;
            var15 = var2.inputRef;
            var24 = var2.channelId;
            var _closure2_slot2 = var24;
            var3 = var2.onAnswerTextChange;
            var _closure2_slot3 = var3;
            var3 = var2.onAnswerEmojiSelect;
            var _closure2_slot4 = var3;
            var11 = var2.canRemoveAnswer;
            var3 = var2.onRemoveAnswer;
            var _closure2_slot5 = var3;
            var3 = var2.onRemoveAnswerImage;
            var _closure2_slot6 = var3;
            var25 = var2.onSubmitEditing;
            var10 = var2.error;
            var2 = _closure1_slot14;
            var4 = undefined;
            var18 = var2.bind(var4)();
            var21 = var1.image;
            var23 = var1.localCreationAnswerId;
            var _closure2_slot7 = var23;
            var20 = function openExpressionPicker() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var5 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0004_ip = 110; continue _fun0004 }
 30:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var1['channel'] = var5;
                    var5 = function onPressEmoji(arg1) {
                        var4 = _closure2_slot4;
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    };
                    var1['onPressEmoji'] = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.POLLS;
                    var1['pickerIntention'] = var4;
                    var4 = false;
                    var1['startExpanded'] = var4;
                    var1['autoFocus'] = var4;
                    var1 = var2.bind(var3)(var1);
 110:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot8 = var20;
            var1 = function handleSaveAltText(arg1) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.update;
                var12 = _closure2_slot2;
                var3 = _closure2_slot0;
                var11 = var3.localCreationAnswerId;
                var2 = _closure1_slot7;
                var10 = var2.Poll;
                var2 = {};
                var8 = arg1;
                var2['description'] = var8;
                var13 = var7;
                var9 = var2;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                return var1;
            };
            var _closure2_slot9 = var1;
            var1 = null;
            var6 = var1 != var10;
            if(!var6) { _fun0003_ip = 167; continue _fun0003 }
 156:
            var2 = var10.length;
            var1 = 0;
            var6 = var2 > var1;
 167:
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var8 = _closure1_slot5;
            var5 = {};
            var12 = var18.defaultContainer;
            var9 = new Array(2);
            var9[0] = var12;
            var12 = !var11;
            if(!var12) { _fun0003_ip = 209; continue _fun0003 }
 203:
            var12 = var18.cannotRemove;
 209:
            var9[1] = var12;
            var5['style'] = var9;
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var9 = {};
            var17 = var18.defaultImageAndTextContainer;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = var6;
            if(!var6) { _fun0003_ip = 253; continue _fun0003 }
 247:
            var17 = var18.errorInput;
 253:
            var14[1] = var17;
            var9['style'] = var14;
            var19 = _closure1_slot11;
            var17 = _closure1_slot15;
            var14 = {};
            var14['channelId'] = var24;
            var14['localCreationAnswerId'] = var23;
            var14['image'] = var21;
            var14['openExpressionPicker'] = var20;
            var20 = function openImageInputActionSheet() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 18;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 17;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot9;
                var2 = {};
                var8 = _closure2_slot2;
                var2['channelId'] = var8;
                var8 = _closure2_slot1;
                var2['index'] = var8;
                var8 = _closure2_slot0;
                var2['answer'] = var8;
                var8 = _closure2_slot9;
                var2['onSaveAltText'] = var8;
                var8 = _closure2_slot6;
                var2['onRemoveAnswerImage'] = var8;
                var7 = _closure2_slot8;
                var2['openExpressionPicker'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var14['openImageInputActionSheet'] = var20;
            var23 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 19;
            var21 = var20[var21];
            var21 = var23.bind(var4)(var21);
            var14['iconSrc'] = var21;
            var21 = var18.defaultImageContainer;
            var14['containerStyle'] = var21;
            var21 = 48;
            var14['imageSize'] = var21;
            var14['answerIndex'] = var22;
            var17 = var19.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var21 = _closure1_slot11;
            var23 = _closure1_slot0;
            var17 = 20;
            var17 = var20[var17];
            var17 = var23.bind(var4)(var17);
            var19 = var17.FormInput;
            var17 = {'ref': null, 'textAlignVertical': 'center', 'showTopContainer': false, 'showBorder': false};
            var17['ref'] = var15;
            var24 = false;
            var15 = 10;
            var26 = var20[var15];
            var26 = var23.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var20[var15];
            var26 = var23.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.NNHVlp;
            var26 = var27.bind(var28)(var26);
            var17['placeholder'] = var26;
            var26 = function onChange(arg1) {
                var3 = _closure2_slot3;
                var2 = {};
                var4 = arg1;
                var2['text'] = var4;
                var4 = _closure2_slot1;
                var2['index'] = var4;
                var1 = _closure2_slot7;
                var2['localCreationAnswerId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var17['onChange'] = var26;
            var17['onSubmitEditing'] = var25;
            var17['blurOnSubmit'] = var24;
            var24 = var18.pollAnswerTextInput;
            var17['style'] = var24;
            var24 = 'none';
            var17['textContentType'] = var24;
            var24 = var20[var15];
            var24 = var23.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.formatToPlainString;
            var20 = var20[var15];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var24 = var20.3+V8Gx;
            var23 = {};
            var20 = 1;
            var27 = var22 + var20;
            var23['answerNumber'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var17['accessibilityLabel'] = var23;
            var23 = undefined;
            if(!var6) { _fun0003_ip = 638; continue _fun0003 }
 578:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var26 = var24[var15];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.formatToPlainString;
            var24 = var24[var15];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var25 = var24.jnq5Hh;
            var24 = {};
            var24['errorMessage'] = var10;
            var23 = var26.bind(var27)(var25, var24);
 638:
            var17['accessibilityHint'] = var23;
            var23 = _closure1_slot8;
            var17['maxLength'] = var23;
            var23 = 'next';
            var17['returnKeyType'] = var23;
            var23 = true;
            var17['required'] = var23;
            var17['autoCorrect'] = var23;
            var17['aria-invalid'] = var10;
            var17 = var21.bind(var4)(var19, var17);
            var14[1] = var17;
            var9['children'] = var14;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            if(!var11) { _fun0003_ip = 915; continue _fun0003 }
 712:
            var14 = _closure1_slot11;
            var13 = _closure1_slot4;
            var12 = {};
            var16 = function onPress() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var16;
            var16 = 'button';
            var12['accessibilityRole'] = var16;
            var16 = var18.defaultRemoveButtonContainer;
            var12['style'] = var16;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = var21[var15];
            var17 = var16.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.formatToPlainString;
            var15 = var21[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.22fjER;
            var15 = {};
            var20 = var22 + var20;
            var15['answerNumber'] = var20;
            var15 = var17.bind(var19)(var16, var15);
            var12['accessibilityLabel'] = var15;
            var17 = _closure1_slot11;
            var20 = _closure1_slot1;
            var19 = 13;
            var15 = var21[var19];
            var16 = var20.bind(var4)(var15);
            var15 = {};
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.Sizes;
            var19 = var19.MEDIUM;
            var15['size'] = var19;
            var19 = 21;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var15['source'] = var19;
            var18 = var18.defaultRemoveButtonContainer;
            var18 = var18.color;
            var15['color'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 915:
            var9[1] = var11;
            var5['children'] = var9;
            var8 = var3.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0003_ip = 976; continue _fun0003 }
 940:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 22;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['message'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 976:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();