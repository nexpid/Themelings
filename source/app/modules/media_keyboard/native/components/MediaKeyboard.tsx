// app/modules/media_keyboard/native/components/MediaKeyboard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot5 = var8;
    var4 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.channel;
            var _closure2_slot0 = var14;
            var10 = var1.chatInputRef;
            var _closure2_slot1 = var10;
            var17 = var1.onClose;
            var5 = var1.transitionState;
            var9 = _closure1_slot3;
            var3 = var9.useEffect;
            var1 = var14.id;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var14.guild_id;
            var2[1] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var2 = {};
                var6 = _closure1_slot6;
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
            var1 = var3.bind(var9)(var1, var2);
            var3 = var9.useContext;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var1 = var15[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.PortalKeyboardContext;
            var1 = var3.bind(var9)(var1);
            var3 = var1.animatedSheetIndex;
            var _closure2_slot2 = var3;
            var1 = var1.bottomSheetRefs;
            var1 = var1.media;
            var _closure2_slot3 = var1;
            var3 = 7;
            var3 = var15[var3];
            var8 = var2.bind(var4)(var3);
            var6 = var8.useKeyboardContextForType;
            var3 = 8;
            var3 = var15[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.KeyboardTypes;
            var3 = var3.MEDIA;
            var8 = var6.bind(var8)(var3);
            var _closure2_slot4 = var8;
            var3 = 9;
            var3 = var15[var3];
            var11 = var2.bind(var4)(var3);
            var6 = var11.getMediaKeyboardDraftType;
            var3 = var8.target;
            var12 = var6.bind(var11)(var3);
            var _closure2_slot5 = var12;
            var6 = var9.useMemo;
            var3 = new Array(5);
            var3[0] = var14;
            var3[1] = var10;
            var3[2] = var8;
            var3[3] = var12;
            var3[4] = var1;
            var1 = function() {
                var1 = function onAttachFileParams(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['channel'] = var4;
                    var3 = _closure2_slot4;
                    var4 = var3.target;
                    var3 = _closure1_slot4;
                    var3 = var3.CHAT;
                    var3 = var4 === var3;
                    var1['pickMultiple'] = var3;
                    var3 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1['onDismissKeyboard'] = var3;
                    var3 = function onRestoreKeyboard() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = _closure2_slot4;
                            var2 = var1.target;
                            var1 = _closure1_slot4;
                            var1 = var1.APP_LAUNCHER;
                            if(!(var2 !== var1)) { _fun0002_ip = 98; continue _fun0002 }
 30:
                            var1 = _closure2_slot1;
                            var3 = var1.current;
                            var2 = var3.openCustomKeyboard;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 8;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var5 = var5.KeyboardTypes;
                            var5 = var5.MEDIA;
                            var1['type'] = var5;
                            var4 = _closure2_slot4;
                            var1['context'] = var4;
                            var1 = var2.bind(var3)(var1);
 98:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onRestoreKeyboard'] = var3;
                    var2 = function onSelectFiles(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var5 = arg1;
                            var2 = _closure2_slot4;
                            var4 = var2.target;
                            var3 = _closure1_slot4;
                            var3 = var3.CHAT;
                            if(!(var4 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
 33:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var10 = var6.bind(var3)(var4);
                            var9 = var10.addAttachmentForCommand;
                            var3 = _closure2_slot0;
                            var15 = var3.id;
                            var14 = _closure2_slot1;
                            var3 = 0;
                            var13 = var5[var3];
                            var12 = _closure2_slot4;
                            var11 = _closure4_slot0;
                            var16 = var10;
                            var3 = var16[var9](var15, var14, var13, var12, var11, var10);
                            _fun0003_ip = 151; continue _fun0003;
 100:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.addImagesFromPicker;
                            var1 = _closure2_slot0;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var3.bind(var4)(var2, var5, var1);
 151:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onSelectFiles'] = var2;
                    return var1;
                };
                var _closure3_slot0 = var1;
                var1 = {};
                var3 = function onAttachPress() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 9;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var6 = _closure3_slot0;
                    var5 = 11;
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
                var3 = function onPressCamera(arg1) {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 9;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleCameraDialog;
                    var2 = {};
                    var6 = _closure3_slot0;
                    var5 = 11;
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
                var3 = function onViewAll() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.handleViewAllDialog;
                        var3 = {};
                        var8 = _closure3_slot0;
                        var2 = 11;
                        var2 = var5[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.UploadOrigin;
                        var2 = var2.IMAGE_PICKER;
                        var10 = var8.bind(var1)(var2);
                        var11 = var3;
                        var2 = copyDataProperties(var11, var10);
                        var9 = _closure2_slot5;
                        var8 = 'draftType';
                        var3[var8] = var9;
                        var3 = var6.bind(var7)(var3);
                        var3 = 12;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0004_ip = 146; continue _fun0004 }
 121:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 146; continue _fun0004 }
 136:
                        var2 = var3.collapse;
                        var2 = var2.bind(var3)();
 146:
                        return var1;
                    }
                };
                var1['onViewAll'] = var3;
                var3 = function onSelectItem(arg1, arg2, arg3, arg4) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var6 = arg1;
                        var5 = arg2;
                        var1 = _closure2_slot4;
                        var4 = var1.target;
                        var3 = _closure1_slot4;
                        var3 = var3.CHAT;
                        if(!(var4 !== var3)) { _fun0005_ip = 87; continue _fun0005 }
 36:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var7 = var7.bind(var3)(var4);
                        var4 = var7.handleSelectAppLauncherItem;
                        var10 = _closure2_slot1;
                        var8 = _closure2_slot4;
                        var12 = var7;
                        var11 = var6;
                        var9 = var5;
                        var2 = var12[var4](var11, var10, var9, var8, var7);
                        _fun0005_ip = 134; continue _fun0005;
 87:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleSelectKeyboardItem;
                        var9 = arg3;
                        var8 = arg4;
                        var12 = var4;
                        var11 = var6;
                        var10 = var5;
                        var1 = var12[var3](var11, var10, var9, var8, var7);
 134:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onSelectItem'] = var3;
                var3 = function onPollsPress() {
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.closeCustomKeyboard;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['channel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onPollsPress'] = var3;
                var2 = function onSend() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 28; continue _fun0006 }
 18:
                        var2 = var3.collapse;
                        var2 = var2.bind(var3)();
 28:
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
            var1 = var6.bind(var9)(var1, var3);
            var3 = var1.onAttachPress;
            var _closure2_slot6 = var3;
            var11 = var1.onPressCamera;
            var9 = var1.onViewAll;
            var _closure2_slot7 = var9;
            var3 = var1.onPollsPress;
            var _closure2_slot8 = var3;
            var10 = var1.onSelectItem;
            var16 = var1.onSend;
            var1 = 14;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCanPostPollsInChannel;
            var1 = var1.bind(var2)(var14);
            var _closure2_slot9 = var1;
            var6 = _closure1_slot1;
            var1 = 15;
            var1 = var15[var1];
            var1 = var6.bind(var4)(var1);
            var13 = var1.bind(var4)(var14);
            var _closure2_slot10 = var13;
            var3 = _closure1_slot8;
            var1 = 16;
            var1 = var15[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var19 = _closure1_slot7;
            var1['animationConfigs'] = var19;
            var1['channel'] = var14;
            var1['draftType'] = var12;
            var18 = function handleComponent(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = arg1;
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var9 = _closure2_slot0;
                    var8 = 'channel';
                    var1[var8] = var9;
                    var8 = _closure2_slot9;
                    var9 = !var8;
                    var8 = 'disablePolls';
                    var1[var8] = var9;
                    var9 = _closure2_slot10;
                    var8 = 'disableAttach';
                    var1[var8] = var9;
                    var9 = _closure2_slot5;
                    var8 = 'draftType';
                    var1[var8] = var9;
                    var9 = _closure2_slot6;
                    var8 = 'onAttachPress';
                    var1[var8] = var9;
                    var9 = _closure2_slot8;
                    var8 = 'onPollsPress';
                    var1[var8] = var9;
                    var9 = _closure2_slot7;
                    var8 = 'onViewAll';
                    var1[var8] = var9;
                    var9 = function onBack() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = _closure2_slot3;
                            var3 = var1.current;
                            var1 = null;
                            var2 = var1 == var3;
                            var1 = undefined;
                            if(var2) { _fun0008_ip = 33; continue _fun0008 }
 23:
                            var2 = var3.collapse;
                            var1 = var2.bind(var3)();
 33:
                            return var1;
                        }
                    };
                    var8 = 'onBack';
                    var1[var8] = var9;
                    var8 = function onPress() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = 0;
                            if(!(var1 !== var3)) { _fun0009_ip = 54; continue _fun0009 }
 22:
                            var1 = _closure2_slot3;
                            var4 = var1.current;
                            var1 = null;
                            var3 = var1 == var4;
                            var1 = undefined;
                            if(var3) { _fun0009_ip = 52; continue _fun0009 }
 42:
                            var3 = var4.collapse;
                            var1 = var3.bind(var4)();
 52:
                            _fun0009_ip = 87; continue _fun0009;
 54:
                            var2 = _closure2_slot3;
                            var4 = var2.current;
                            var2 = null;
                            var3 = var2 == var4;
                            var2 = undefined;
                            if(var3) { _fun0009_ip = 84; continue _fun0009 }
 74:
                            var3 = var4.expand;
                            var2 = var3.bind(var4)();
 84:
                            var1 = var2;
 87:
                            return var1;
                        }
                    };
                    var7 = 'onPress';
                    var1[var7] = var8;
                    var7 = _closure2_slot4;
                    var8 = var7.target;
                    var6 = _closure1_slot4;
                    var7 = var6.CHAT;
                    var6 = undefined;
                    if(!(var8 !== var7)) { _fun0007_ip = 208; continue _fun0007 }
 198:
                    var5 = _closure2_slot4;
                    var6 = var5.option;
 208:
                    var5 = 'singleItemConfig';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1['handleComponent'] = var18;
            var1['onClose'] = var17;
            var1['onSend'] = var16;
            var1['transitionState'] = var5;
            var5 = 18;
            var5 = var15[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var14;
            var5['disabled'] = var13;
            var5['draftType'] = var12;
            var5['onPressCamera'] = var11;
            var5['onSelectItem'] = var10;
            var5['onViewAll'] = var9;
            var10 = var8.target;
            var7 = _closure1_slot4;
            var9 = var7.CHAT;
            var7 = undefined;
            if(!(var10 !== var9)) { _fun0001_ip = 507; continue _fun0001 }
 501:
            var7 = var8.option;
 507:
            var5['singleItemConfig'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();