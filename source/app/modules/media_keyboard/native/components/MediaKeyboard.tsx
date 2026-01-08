// app/modules/media_keyboard/native/components/MediaKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot6 = var8;
    var8 = var4.MediaKeyboardTarget;
    var _closure1_slot7 = var8;
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot9 = var8;
    var4 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboard(arg1) {
        var2 = arg1;
        var9 = var2.channel;
        var _closure2_slot0 = var9;
        var20 = var2.chatInputRef;
        var _closure2_slot1 = var20;
        var11 = var2.onClose;
        var5 = var2.transitionState;
        var14 = _closure1_slot3;
        var4 = var14.useEffect;
        var2 = var9.id;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = var9.guild_id;
        var3[1] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot9;
            var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
            var2 = {};
            var6 = _closure1_slot10;
            var6 = var6.MEDIA_PICKER;
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var7 = var6.id;
            var2['channel_id'] = var7;
            var6 = var6.guild_id;
            var2['guild_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var14)(var2, var3);
        var2 = var14.useRef;
        var3 = null;
        var15 = var2.bind(var14)(var3);
        var _closure2_slot2 = var15;
        var13 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 9;
        var6 = var10[var2];
        var4 = undefined;
        var8 = var13.bind(var4)(var6);
        var7 = var8.useSharedValue;
        var6 = -1;
        var17 = var7.bind(var8)(var6);
        var _closure2_slot3 = var17;
        var2 = var10[var2];
        var7 = var13.bind(var4)(var2);
        var6 = var7.useSharedValue;
        var2 = 0;
        var16 = var6.bind(var7)(var2);
        var _closure2_slot4 = var16;
        var2 = 10;
        var2 = var10[var2];
        var7 = var13.bind(var4)(var2);
        var6 = var7.useKeyboardContextForType;
        var2 = 11;
        var2 = var10[var2];
        var2 = var13.bind(var4)(var2);
        var2 = var2.KeyboardTypes;
        var2 = var2.MEDIA;
        var2 = var6.bind(var7)(var2);
        var _closure2_slot5 = var2;
        var6 = 12;
        var6 = var10[var6];
        var8 = var13.bind(var4)(var6);
        var7 = var8.useAppLauncherActionSheet;
        var6 = {};
        var6['chatInputRef'] = var20;
        var6['channel'] = var9;
        var6 = var7.bind(var8)(var6);
        var12 = var6.appLauncherActionSheet;
        var6 = _closure1_slot1;
        var7 = 13;
        var7 = var10[var7];
        var8 = var6.bind(var4)(var7);
        var7 = {};
        var7['channel'] = var9;
        var7['context'] = var2;
        var7 = var8.bind(var4)(var7);
        var _closure2_slot6 = var7;
        var19 = var14.useMemo;
        var8 = new Array(6);
        var8[0] = var17;
        var8[1] = var9;
        var8[2] = var20;
        var8[3] = var2;
        var8[4] = var15;
        var8[5] = var7;
        var2 = function() {
            var1 = function onRestoreKeyboard() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.target;
                    var1 = _closure1_slot7;
                    var1 = var1.APP_LAUNCHER;
                    if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var2 = var3.openCustomKeyboard;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.MEDIA;
                    var1['type'] = var5;
                    var4 = _closure2_slot5;
                    var1['context'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot0 = var1;
            var1 = function onSelectFiles(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var2 = _closure2_slot5;
                    var6 = var2.target;
                    var3 = _closure1_slot7;
                    var3 = var3.CHAT;
                    if(!(var6 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot5;
                    var6 = var3.target;
                    var3 = _closure1_slot7;
                    var3 = var3.COMMAND;
                    if(!(var6 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var6 = var6[var3];
                    var3 = undefined;
                    var10 = var7.bind(var3)(var6);
                    var9 = var10.addAttachmentForCommand;
                    var3 = _closure2_slot0;
                    var15 = var3.id;
                    var14 = _closure2_slot1;
                    var3 = 0;
                    var13 = var5[var3];
                    var12 = _closure2_slot5;
                    var16 = var10;
                    var11 = var4;
                    var3 = var16[var9](var15, var14, var13, var12, var11, var10);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.addImagesFromPicker;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1, var5, var4);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot1 = var1;
            var1 = function onAttachFileParams(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = {};
                var4 = _closure2_slot0;
                var1['channel'] = var4;
                var3 = _closure2_slot6;
                var3 = var3.uploadLimit;
                var1['uploadLimit'] = var3;
                var3 = function onDismissKeyboard() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['onDismissKeyboard'] = var3;
                var3 = _closure3_slot0;
                var1['onRestoreKeyboard'] = var3;
                var2 = function onSelectFiles(arg1) {
                    var4 = _closure3_slot1;
                    var3 = _closure4_slot0;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var3);
                    return var1;
                };
                var1['onSelectFiles'] = var2;
                return var1;
            };
            var _closure3_slot2 = var1;
            var1 = function onSelectItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.channelId;
                    var6 = var1.item;
                    var5 = var1.isIncluded;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var3);
                    var8 = var9.track;
                    var3 = _closure1_slot9;
                    var4 = var3.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                    var3 = {};
                    var10 = _closure1_slot8;
                    var10 = var10.MEDIA_SELECTED;
                    var3['action'] = var10;
                    var3 = var8.bind(var9)(var4, var3);
                    var4 = _closure2_slot5;
                    var8 = var4.target;
                    var4 = _closure1_slot7;
                    var4 = var4.CHAT;
                    if(!(var8 !== var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot5;
                    var8 = var4.target;
                    var4 = _closure1_slot7;
                    var4 = var4.COMMAND;
                    if(!(var8 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 14;
                    var8 = var13[var4];
                    var9 = var12.bind(var1)(var8);
                    var8 = var9.mediaNodeToUploadItem;
                    var16 = var8.bind(var9)(var6);
                    var4 = var13[var4];
                    var10 = var12.bind(var1)(var4);
                    var9 = var10.addAttachmentForCommand;
                    var17 = _closure2_slot1;
                    var15 = _closure2_slot5;
                    var3 = 16;
                    var3 = var13[var3];
                    var3 = var12.bind(var1)(var3);
                    var3 = var3.UploadOrigin;
                    var14 = var3.IMAGE_PICKER;
                    var19 = var10;
                    var18 = var7;
                    var3 = var19[var9](var18, var17, var16, var15, var14, var13);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleSelectKeyboardItem;
                    var15 = false;
                    var19 = var4;
                    var18 = var7;
                    var17 = var6;
                    var16 = var5;
                    var2 = var19[var3](var18, var17, var16, var15, var14);
case 10:
                    return var1;
                }
            };
            var _closure3_slot3 = var1;
            var1 = {};
            var3 = function onAttachPress() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.handleAttachFile;
                var2 = {};
                var6 = _closure3_slot2;
                var5 = 16;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.UploadOrigin;
                var5 = var5.FILE_ATTACHMENT;
                var9 = var6.bind(var1)(var5);
                var10 = var2;
                var5 = copyDataProperties(var10, var9);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onAttachPress'] = var3;
            var3 = function onPressApps() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = var1.current;
                    var3 = var4.openCustomKeyboard;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var5 = var9[var1];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.APP_LAUNCHER;
                    var2['type'] = var5;
                    var5 = {};
                    var7 = _closure1_slot11;
                    var7 = var7.HOME;
                    var5['initialRouteName'] = var7;
                    var7 = 17;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getAppDMApplication;
                    var6 = _closure2_slot0;
                    var7 = var7.bind(var8)(var6);
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var6 = var7.name;
case 12:
                    var5['initialSearchQuery'] = var6;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPressApps'] = var3;
            var3 = function onPressGift() {
                var5 = _closure2_slot1;
                var2 = var5.current;
                var1 = var2.closeCustomKeyboard;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleSelectGift;
                var2 = new Array(0);
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            };
            var1['onPressGift'] = var3;
            var3 = function onPressThread() {
                var1 = _closure2_slot1;
                var3 = var1.current;
                var1 = var3.closeCustomKeyboard;
                var1 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.navigateToThreadCreation;
                var3 = _closure2_slot0;
                var2 = 'MediaKeyboard';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPressThread'] = var3;
            var3 = function onPressCamera(arg1) {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.handleCameraDialog;
                var2 = {};
                var6 = _closure3_slot2;
                var5 = 16;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.UploadOrigin;
                var5 = var5.IMAGE_PICKER;
                var9 = var6.bind(var1)(var5);
                var10 = var2;
                var5 = copyDataProperties(var10, var9);
                var6 = arg1;
                var5 = 'previewType';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPressCamera'] = var3;
            var3 = function onPressHeader() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var2 = var3.collapse;
                    var2 = var2.bind(var3)();
                    _fun0005_ip = 16; continue _fun0005;
case 14:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 18:
                    var1 = var2.expand;
                    var1 = var1.bind(var2)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPressHeader'] = var3;
            var3 = function onViewAll() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var2 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.handleViewAllDialog;
                    var3 = {};
                    var8 = _closure3_slot2;
                    var2 = 16;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.UploadOrigin;
                    var2 = var2.IMAGE_PICKER;
                    var10 = var8.bind(var1)(var2);
                    var11 = var3;
                    var2 = copyDataProperties(var11, var10);
                    var8 = _closure2_slot6;
                    var9 = var8.draftType;
                    var8 = 'draftType';
                    var3[var8] = var9;
                    var3 = var6.bind(var7)(var3);
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                    var2 = var3.collapse;
                    var2 = var2.bind(var3)();
case 19:
                    return var1;
                }
            };
            var1['onViewAll'] = var3;
            var3 = function onPressItem(arg1) {
                var1 = arg1;
                var5 = var1.channelId;
                var4 = var1.item;
                var1 = var1.isIncluded;
                var3 = _closure3_slot3;
                var2 = {};
                var2['channelId'] = var5;
                var2['item'] = var4;
                var2['isIncluded'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPressItem'] = var3;
            var3 = function onLongPressItem(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var9 = var1.channelId;
                    var _closure4_slot0 = var9;
                    var10 = var1.item;
                    var _closure4_slot1 = var10;
                    var3 = var1.isIncluded;
                    var _closure4_slot2 = var3;
                    var1 = undefined;
                    var _closure4_slot3 = var1;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.mediaNodeToUploadItem;
                    var7 = var4.bind(var7)(var10);
                    var4 = 20;
                    var4 = var8[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.CloudUpload;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var14 = var6;
                    var13 = var7;
                    var12 = var9;
                    var4 = new var14[var4](var13, var12, var11);
                    var8 = var4 instanceof Object ? var4 : var6;
                    var7 = undefined;
                    if(!var3) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var10 = _closure1_slot5;
                    var6 = var10.getUpload;
                    var4 = var8.id;
                    var3 = _closure1_slot4;
                    var3 = var3.ChannelMessage;
                    var7 = var6.bind(var10)(var9, var4, var3);
case 22:
                    var6 = null;
                    var3 = var6 == var7;
                    var4 = undefined;
                    if(var3) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.handleSelectKeyboardItem;
                        var10 = _closure4_slot0;
                        var9 = _closure4_slot1;
                        var8 = _closure4_slot2;
                        var7 = false;
                        var11 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var1;
                    };
case 24:
                    _closure4_slot3 = var4;
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 21;
                    var2 = var10[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['channelId'] = var9;
                    var9 = var6 == var7;
                    var2['disableAddDescription'] = var9;
                    var9 = var6 == var7;
                    var2['disableSpoiler'] = var9;
                    if(!(var6 != var7)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var8 = var7;
case 26:
                    var2['upload'] = var8;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if(!var7) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var6 = function() {
                        var3 = _closure3_slot3;
                        var2 = {};
                        var4 = _closure4_slot0;
                        var2['channelId'] = var4;
                        var4 = _closure4_slot1;
                        var2['item'] = var4;
                        var1 = _closure4_slot2;
                        var2['isIncluded'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
case 28:
                    var2['onAdd'] = var6;
                    var5 = function onEdit(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = _closure4_slot3;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                            var2 = _closure4_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 30:
                            var4 = _closure3_slot1;
                            var3 = new Array(1);
                            var1 = arg1;
                            var3[0] = var1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var2 = var2.IMAGE_EDITOR;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2['onEdit'] = var5;
                    var2['onRemove'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1['onLongPressItem'] = var3;
            var3 = function onPollsPress() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var3 = var4[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var3);
                var8 = var9.track;
                var3 = _closure1_slot9;
                var7 = var3.CHAT_INPUT_COMPONENT_VIEWED;
                var6 = {};
                var3 = _closure1_slot10;
                var3 = var3.POLLS;
                var6['type'] = var3;
                var5 = _closure2_slot0;
                var10 = var5.id;
                var6['channel_id'] = var10;
                var10 = var5.guild_id;
                var6['guild_id'] = var10;
                var6 = var8.bind(var9)(var7, var6);
                var3 = _closure2_slot1;
                var6 = var3.current;
                var3 = var6.closeCustomKeyboard;
                var3 = var3.bind(var6)();
                var3 = _closure1_slot0;
                var2 = 22;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCreatePollModal;
                var2 = {};
                var2['channel'] = var5;
                var5 = _closure3_slot0;
                var2['onCancel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPollsPress'] = var3;
            var2 = function onSend() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                    var2 = var3.collapse;
                    var2 = var2.bind(var3)();
case 32:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.handleSend;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onSend'] = var2;
            return var1;
        };
        var8 = var19.bind(var14)(var2, var8);
        var _closure2_slot7 = var8;
        var2 = 23;
        var2 = var10[var2];
        var2 = var13.bind(var4)(var2);
        var20 = var2.ChatInputIaMobileExperiment;
        var19 = var20.useConfig;
        var2 = {};
        var21 = 'MediaKeyboard';
        var2['location'] = var21;
        var2 = var19.bind(var20)(var2);
        var19 = var2.overflowButtonsOrder;
        var _closure2_slot8 = var19;
        var2 = 24;
        var20 = var10[var2];
        var21 = var13.bind(var4)(var20);
        var20 = var21.useMediaKeyboardActionsExperiment;
        var20 = var20.bind(var21)();
        var21 = var20.mediaKeyboardActionsType;
        var20 = 'legacy';
        var22 = var20 !== var21;
        var _closure2_slot9 = var22;
        var21 = var14.useMemo;
        var20 = new Array(7);
        var20[0] = var8;
        var23 = var7.uploadDisabled;
        var20[1] = var23;
        var23 = var7.canPostPolls;
        var20[2] = var23;
        var23 = var7.canStartThreads;
        var20[3] = var23;
        var23 = var7.isAppLauncherEnabled;
        var20[4] = var23;
        var20[5] = var22;
        var20[6] = var19;
        var19 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = {};
                var4 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 25;
                var2 = var9[var6];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var10 = var2.intl;
                var5 = var10.string;
                var2 = var9[var6];
                var2 = var8.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.RgIi2B;
                var2 = var5.bind(var10)(var2);
                var4['text'] = var2;
                var2 = 26;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var2 = var2.PollsIcon;
                var4['IconComponent'] = var2;
                var10 = _closure2_slot7;
                var5 = var10.onPollsPress;
                var4['onPress'] = var5;
                var5 = _closure2_slot6;
                var11 = var5.canPostPolls;
                var11 = !var11;
                var4['disabled'] = var11;
                var3['polls'] = var4;
                var4 = {};
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.8Hvr3+;
                var11 = var12.bind(var13)(var11);
                var4['text'] = var11;
                var11 = 27;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.AttachmentIcon;
                var4['IconComponent'] = var11;
                var11 = var10.onAttachPress;
                var4['onPress'] = var11;
                var11 = var5.uploadDisabled;
                var4['disabled'] = var11;
                var3['files'] = var4;
                var4 = {};
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.PHjkRE;
                var11 = var12.bind(var13)(var11);
                var4['text'] = var11;
                var11 = 28;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.AppsIcon;
                var4['IconComponent'] = var11;
                var11 = var10.onPressApps;
                var4['onPress'] = var11;
                var11 = var5.isAppLauncherEnabled;
                var11 = !var11;
                var4['disabled'] = var11;
                var3['apps'] = var4;
                var4 = {};
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.7Xm5QI;
                var11 = var12.bind(var13)(var11);
                var4['text'] = var11;
                var11 = 29;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.ThreadPlusIcon;
                var4['IconComponent'] = var11;
                var11 = var10.onPressThread;
                var4['onPress'] = var11;
                var11 = var5.canStartThreads;
                var11 = !var11;
                var4['disabled'] = var11;
                var3['thread'] = var4;
                var4 = {};
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.Ve9Ge6;
                var11 = var12.bind(var13)(var11);
                var4['text'] = var11;
                var11 = 30;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.GiftIcon;
                var4['IconComponent'] = var11;
                var11 = var10.onPressGift;
                var4['onPress'] = var11;
                var11 = false;
                var4['disabled'] = var11;
                var3['gift'] = var4;
                var4 = {};
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var9[var6];
                var11 = var8.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.Zmm6dN;
                var11 = var12.bind(var13)(var11);
                var4['text'] = var11;
                var11 = 31;
                var11 = var9[var11];
                var11 = var8.bind(var7)(var11);
                var11 = var11.ImageIcon;
                var4['IconComponent'] = var11;
                var10 = var10.onViewAll;
                var4['onPress'] = var10;
                var10 = var5.uploadDisabled;
                var4['disabled'] = var10;
                var3['allphotos'] = var4;
                var4 = {};
                var10 = var9[var6];
                var10 = var8.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.uje3P9;
                var6 = var10.bind(var11)(var6);
                var4['text'] = var6;
                var6 = 32;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.CameraIcon;
                var4['IconComponent'] = var6;
                var6 = function onPress() {
                    var3 = _closure2_slot7;
                    var2 = var3.onPressCamera;
                    var1 = _closure1_slot6;
                    var1 = var1.TAKE_A_PHOTO_BUTTON;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['onPress'] = var6;
                var5 = var5.uploadDisabled;
                var4['disabled'] = var5;
                var3['camera'] = var4;
                var _closure3_slot0 = var3;
                var4 = _closure2_slot9;
                if(var4) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                var5 = _closure2_slot8;
                var4 = var5.filter;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = 'thread';
                        var1 = arg1;
                        var1 = var2 !== var1;
                        if(var1) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                        var2 = _closure2_slot6;
                        var1 = var2.canStartThreads;
case 36:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.map;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                _fun0010_ip = 38; continue _fun0010;
case 34:
                var4 = var3.allphotos;
                var2 = new Array(4);
                var2[0] = var4;
                var4 = var3.camera;
                var2[1] = var4;
                var4 = var3.polls;
                var2[2] = var4;
                var3 = var3.files;
                var2[3] = var3;
                var1 = var2;
case 38:
                return var1;
            }
        };
        var19 = var21.bind(var14)(var19, var20);
        var _closure2_slot10 = var19;
        var2 = var10[var2];
        var13 = var13.bind(var4)(var2);
        var2 = var13.useIsMediaKeyboardActionsFloatingOrTabBarEnabled;
        var20 = var2.bind(var13)();
        var _closure2_slot11 = var20;
        var2 = var14.useRef;
        var2 = var2.bind(var14)(var3);
        var _closure2_slot12 = var2;
        var13 = var14.useCallback;
        var3 = new Array(6);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var9;
        var3[3] = var15;
        var3[4] = var19;
        var3[5] = var20;
        var2 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var7 = arg1;
                var1 = _closure2_slot11;
                var5 = _closure1_slot13;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                if(var1) { _fun0012_ip = 39; continue _fun0012 }
case 40:
                var1 = 34;
                var1 = var4[var1];
                var8 = undefined;
                var2 = var3.bind(var8)(var1);
                var1 = {};
                var14 = var1;
                var13 = var7;
                var9 = copyDataProperties(var14, var13);
                var9 = _closure2_slot6;
                var11 = var9.title;
                var10 = 'title';
                var1[var10] = var11;
                var11 = var9.subtitle;
                var10 = 'subtitle';
                var1[var10] = var11;
                var11 = _closure2_slot0;
                var10 = 'channel';
                var1[var10] = var11;
                var11 = _closure2_slot10;
                var10 = 'overflowButtons';
                var1[var10] = var11;
                var11 = var9.draftType;
                var10 = 'draftType';
                var1[var10] = var11;
                var10 = _closure2_slot7;
                var12 = var10.onViewAll;
                var11 = 'onViewAll';
                var1[var11] = var12;
                var12 = function onBack() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0013_ip = 41; continue _fun0013 }
case 30:
                        var2 = var3.collapse;
                        var1 = var2.bind(var3)();
case 41:
                        return var1;
                    }
                };
                var11 = 'onBack';
                var1[var11] = var12;
                var11 = var10.onPressHeader;
                var10 = 'onPress';
                var1[var10] = var11;
                var11 = var9.uploadLimit;
                var10 = 'uploadLimit';
                var1[var10] = var11;
                var11 = var9.disableWhenReachedLimit;
                var10 = 'disableWhenReachedLimit';
                var1[var10] = var11;
                var10 = var9.includedUploadIds;
                var9 = 'includedUploadIds';
                var1[var9] = var10;
                var1 = var5.bind(var8)(var2, var1);
                _fun0012_ip = 42; continue _fun0012;
case 39:
                var2 = 33;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = var7.animatedIndex;
                var2['animatedIndex'] = var7;
                var6 = _closure2_slot7;
                var6 = var6.onPressHeader;
                var2['onPress'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 42:
                return var1;
            }
        };
        var13 = var13.bind(var14)(var2, var3);
        var3 = var14.useCallback;
        var2 = new Array(7);
        var2[0] = var17;
        var2[1] = var16;
        var2[2] = var8;
        var21 = var9.id;
        var2[3] = var21;
        var2[4] = var7;
        var2[5] = var20;
        var2[6] = var19;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var8 = var1.animateOnMount;
                var4 = undefined;
                if(!(var8 === var4)) { _fun0014_ip = 43; continue _fun0014 }
case 44:
                var8 = false;
case 43:
                var5 = var1.initialPosition;
                var3 = _closure1_slot14;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 35;
                var1 = var11[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var1['animateOnMount'] = var8;
                var10 = _closure2_slot3;
                var1['animatedIndex'] = var10;
                var9 = _closure2_slot4;
                var1['animatedPosition'] = var9;
                var1['initialPosition'] = var5;
                var9 = _closure1_slot13;
                var5 = 36;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var11 = _closure2_slot12;
                var5['ref'] = var11;
                var5['animatedIndex'] = var10;
                var10 = _closure2_slot0;
                var10 = var10.id;
                var5['channelId'] = var10;
                var10 = _closure2_slot6;
                var10 = var10.draftType;
                var5['draftType'] = var10;
                var10 = _closure2_slot7;
                var10 = var10.onSend;
                var5['onSend'] = var10;
                var6 = var9.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var10 = _closure2_slot11;
                var9 = null;
                if(!var10) { _fun0014_ip = 45; continue _fun0014 }
case 46:
                var12 = _closure1_slot13;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 37;
                var10 = var13[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var13 = _closure2_slot6;
                var14 = var13.canPostPolls;
                var10['canPostPolls'] = var14;
                var14 = function onHeightChange(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = _closure2_slot12;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0015_ip = 17; continue _fun0015 }
case 30:
                        var3 = var4.setInsetFab;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
case 17:
                        return var1;
                    }
                };
                var10['onHeightChange'] = var14;
                var13 = var13.uploadDisabled;
                var10['uploadDisabled'] = var13;
                var13 = _closure2_slot10;
                var10['overflowButtons'] = var13;
                var9 = var12.bind(var4)(var11, var10);
case 45:
                var5[1] = var9;
                var8 = _closure2_slot11;
                var6 = null;
                if(var8) { _fun0014_ip = 47; continue _fun0014 }
case 48:
                var9 = _closure1_slot13;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 38;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.NavScrim;
                var7 = {};
                var6 = var9.bind(var4)(var8, var7);
case 47:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var14 = var3.bind(var14)(var1, var2);
        var3 = _closure1_slot13;
        var1 = 39;
        var1 = var10[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var18 = _closure1_slot12;
        var1['animationConfigs'] = var18;
        var1['animatedIndex'] = var17;
        var1['animatedPosition'] = var16;
        var1['bottomSheetRef'] = var15;
        var1['accessoriesComponent'] = var14;
        var1['handleComponent'] = var13;
        var1['overlayComponent'] = var12;
        var1['onClose'] = var11;
        var1['transitionState'] = var5;
        var5 = 40;
        var5 = var10[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['channel'] = var9;
        var9 = var7.draftType;
        var5['draftType'] = var9;
        var9 = var8.onPressCamera;
        var5['onPressCamera'] = var9;
        var9 = var8.onAttachPress;
        var5['onAttachPress'] = var9;
        var9 = var8.onPressItem;
        var5['onPressItem'] = var9;
        var9 = var8.onLongPressItem;
        var5['onLongPressItem'] = var9;
        var8 = var8.onViewAll;
        var5['onViewAll'] = var8;
        var8 = var7.includedUploadIds;
        var5['includedUploadIds'] = var8;
        var8 = var7.uploadDisabled;
        var5['uploadDisabled'] = var8;
        var8 = var7.uploadLimit;
        var5['uploadLimit'] = var8;
        var7 = var7.disableWhenReachedLimit;
        var5['disableWhenReachedLimit'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();