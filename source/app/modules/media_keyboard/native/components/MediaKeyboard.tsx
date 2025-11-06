// app/modules/media_keyboard/native/components/MediaKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = metroImportAll;
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
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var14 = var1.chatInputRef;
            var _closure2_slot1 = var14;
            var7 = var1.onClose;
            var6 = var1.transitionState;
            var2 = _closure1_slot3;
            var4 = var2.useEffect;
            var1 = var10.id;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = var10.guild_id;
            var3[1] = var1;
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
            var1 = var4.bind(var2)(var1, var3);
            var8 = var2.useContext;
            var3 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 6;
            var1 = var20[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.PortalKeyboardContext;
            var1 = var8.bind(var2)(var1);
            var21 = var1.animatedSheetPosition;
            var15 = var1.animatedSheetIndex;
            var _closure2_slot2 = var15;
            var1 = var1.bottomSheetRefs;
            var1 = var1.media;
            var _closure2_slot3 = var1;
            var8 = 7;
            var8 = var20[var8];
            var12 = var3.bind(var4)(var8);
            var9 = var12.useKeyboardContextForType;
            var8 = 8;
            var8 = var20[var8];
            var8 = var3.bind(var4)(var8);
            var8 = var8.KeyboardTypes;
            var8 = var8.MEDIA;
            var13 = var9.bind(var12)(var8);
            var _closure2_slot4 = var13;
            var17 = _closure1_slot1;
            var8 = 9;
            var8 = var20[var8];
            var9 = var17.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var10;
            var8['context'] = var13;
            var8 = var9.bind(var4)(var8);
            var _closure2_slot5 = var8;
            var12 = var2.useMemo;
            var9 = new Array(6);
            var9[0] = var15;
            var9[1] = var10;
            var9[2] = var14;
            var9[3] = var13;
            var9[4] = var1;
            var9[5] = var8;
            var1 = function() {
                var1 = function onRestoreKeyboard() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot4;
                        var2 = var1.target;
                        var1 = _closure1_slot4;
                        var1 = var1.APP_LAUNCHER;
                        if(!(var2 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
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
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var1;
                var1 = function onAttachFileParams(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['channel'] = var4;
                    var3 = _closure2_slot5;
                    var3 = var3.uploadLimit;
                    var1['uploadLimit'] = var3;
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
                    var3 = _closure3_slot0;
                    var1['onRestoreKeyboard'] = var3;
                    var2 = function onSelectFiles(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var5 = arg1;
                            var2 = _closure2_slot4;
                            var4 = var2.target;
                            var3 = _closure1_slot4;
                            var3 = var3.CHAT;
                            if(!(var4 !== var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var3 = _closure2_slot4;
                            var4 = var3.target;
                            var3 = _closure1_slot4;
                            var3 = var3.COMMAND;
                            if(!(var4 === var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
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
                            _fun0003_ip = 6; continue _fun0003;
case 4:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.addImagesFromPicker;
                            var1 = _closure2_slot0;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var3.bind(var4)(var2, var5, var1);
case 6:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['onSelectFiles'] = var2;
                    return var1;
                };
                var _closure3_slot1 = var1;
                var1 = {};
                var3 = function onAttachPress() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 11;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var6 = _closure3_slot1;
                    var5 = 12;
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
                    var1 = 11;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleCameraDialog;
                    var2 = {};
                    var6 = _closure3_slot1;
                    var5 = 12;
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = 0;
                        if(!(var2 !== var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var2 = var3.collapse;
                        var2 = var2.bind(var3)();
                        _fun0004_ip = 10; continue _fun0004;
case 8:
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                        var1 = var2.expand;
                        var1 = var1.bind(var2)();
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onPressHeader'] = var3;
                var3 = function onViewAll() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 11;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.handleViewAllDialog;
                        var3 = {};
                        var8 = _closure3_slot1;
                        var2 = 12;
                        var2 = var5[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.UploadOrigin;
                        var2 = var2.IMAGE_PICKER;
                        var10 = var8.bind(var1)(var2);
                        var11 = var3;
                        var2 = copyDataProperties(var11, var10);
                        var8 = _closure2_slot5;
                        var9 = var8.draftType;
                        var8 = 'draftType';
                        var3[var8] = var9;
                        var3 = var6.bind(var7)(var3);
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 13; continue _fun0005 }
case 15:
                        var2 = var3.collapse;
                        var2 = var2.bind(var3)();
case 13:
                        return var1;
                    }
                };
                var1['onViewAll'] = var3;
                var3 = function onSelectItem(arg1, arg2, arg3, arg4) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var6 = arg1;
                        var5 = arg2;
                        var1 = _closure2_slot4;
                        var4 = var1.target;
                        var3 = _closure1_slot4;
                        var3 = var3.CHAT;
                        if(!(var4 !== var3)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var3 = _closure2_slot4;
                        var4 = var3.target;
                        var3 = _closure1_slot4;
                        var3 = var3.COMMAND;
                        if(!(var4 === var3)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 11;
                        var4 = var12[var3];
                        var10 = undefined;
                        var7 = var11.bind(var10)(var4);
                        var4 = var7.mediaNodeToUploadItem;
                        var15 = var4.bind(var7)(var5);
                        var3 = var12[var3];
                        var8 = var11.bind(var10)(var3);
                        var7 = var8.addAttachmentForCommand;
                        var16 = _closure2_slot1;
                        var14 = _closure2_slot4;
                        var2 = 12;
                        var2 = var12[var2];
                        var2 = var11.bind(var10)(var2);
                        var2 = var2.UploadOrigin;
                        var13 = var2.IMAGE_PICKER;
                        var18 = var8;
                        var17 = var6;
                        var2 = var18[var7](var17, var16, var15, var14, var13, var12);
                        _fun0006_ip = 18; continue _fun0006;
case 16:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleSelectKeyboardItem;
                        var15 = arg3;
                        var14 = arg4;
                        var18 = var4;
                        var17 = var6;
                        var16 = var5;
                        var1 = var18[var3](var17, var16, var15, var14, var13);
case 18:
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
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['channel'] = var5;
                    var5 = _closure3_slot0;
                    var2['onCancel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onPollsPress'] = var3;
                var2 = function onSend() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                        var2 = var3.collapse;
                        var2 = var2.bind(var3)();
case 20:
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
            var9 = var12.bind(var2)(var1, var9);
            var _closure2_slot6 = var9;
            var1 = 15;
            var1 = var20[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useMediaKeyboardActionsExperiment;
            var1 = var1.bind(var3)();
            var18 = var1.mediaKeyboardActionsType;
            var1 = var2.useRef;
            var16 = null;
            var19 = var1.bind(var2)(var16);
            var _closure2_slot7 = var19;
            var3 = _closure1_slot8;
            var1 = 16;
            var1 = var20[var1];
            var2 = var17.bind(var4)(var1);
            var1 = {};
            var12 = _closure1_slot7;
            var1['animationConfigs'] = var12;
            var14 = _closure1_slot9;
            var12 = 17;
            var12 = var20[var12];
            var13 = var17.bind(var4)(var12);
            var12 = {};
            var12['animatedSheetPosition'] = var21;
            var12['animatedSheetIndex'] = var15;
            var15 = 18;
            var15 = var20[var15];
            var17 = var17.bind(var4)(var15);
            var15 = {};
            var15['ref'] = var19;
            var19 = var10.id;
            var15['channelId'] = var19;
            var19 = var8.draftType;
            var15['draftType'] = var19;
            var19 = var9.onSend;
            var15['onSend'] = var19;
            var17 = var3.bind(var4)(var17, var15);
            var15 = new Array(3);
            var15[0] = var17;
            var17 = 'legacy';
            var19 = null;
            if(!(var17 !== var18)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var22 = _closure1_slot8;
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var20 = 19;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var23 = var8.canPostPolls;
            var20['canPostPolls'] = var23;
            var23 = var9.onViewAll;
            var20['onBrowsePress'] = var23;
            var23 = var9.onPressCamera;
            var20['onCameraPress'] = var23;
            var23 = function onHeightChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0008_ip = 11; continue _fun0008 }
case 24:
                    var3 = var4.setInsetFab;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var20['onHeightChange'] = var23;
            var23 = var9.onPollsPress;
            var20['onPollsPress'] = var23;
            var23 = var9.onAttachPress;
            var20['onFilesPress'] = var23;
            var23 = var8.uploadDisabled;
            var20['uploadDisabled'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 22:
            var15[1] = var19;
            var16 = null;
            if(!(var17 === var18)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 20;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.NavScrim;
            var17 = {};
            var16 = var19.bind(var4)(var18, var17);
case 25:
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var1['accessoriesComponent'] = var12;
            var11 = function handleComponent(arg1) {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = arg1;
                var10 = var1;
                var5 = copyDataProperties(var10, var9);
                var5 = _closure2_slot5;
                var8 = var5.title;
                var7 = 'title';
                var1[var7] = var8;
                var8 = var5.subtitle;
                var7 = 'subtitle';
                var1[var7] = var8;
                var8 = _closure2_slot0;
                var7 = 'channel';
                var1[var7] = var8;
                var7 = var5.canPostPolls;
                var8 = !var7;
                var7 = 'disablePolls';
                var1[var7] = var8;
                var8 = var5.uploadDisabled;
                var7 = 'disableAttach';
                var1[var7] = var8;
                var8 = var5.draftType;
                var7 = 'draftType';
                var1[var7] = var8;
                var6 = _closure2_slot6;
                var8 = var6.onAttachPress;
                var7 = 'onAttachPress';
                var1[var7] = var8;
                var8 = var6.onPollsPress;
                var7 = 'onPollsPress';
                var1[var7] = var8;
                var8 = var6.onViewAll;
                var7 = 'onViewAll';
                var1[var7] = var8;
                var8 = function onBack() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure2_slot3;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0009_ip = 5; continue _fun0009 }
case 24:
                        var2 = var3.collapse;
                        var1 = var2.bind(var3)();
case 5:
                        return var1;
                    }
                };
                var7 = 'onBack';
                var1[var7] = var8;
                var7 = var6.onPressHeader;
                var6 = 'onPress';
                var1[var6] = var7;
                var7 = var5.uploadLimit;
                var6 = 'uploadLimit';
                var1[var6] = var7;
                var7 = var5.disableWhenReachedLimit;
                var6 = 'disableWhenReachedLimit';
                var1[var6] = var7;
                var6 = var5.includedUploadIds;
                var5 = 'includedUploadIds';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['handleComponent'] = var11;
            var1['onClose'] = var7;
            var1['transitionState'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 22;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['channel'] = var10;
            var10 = var8.draftType;
            var5['draftType'] = var10;
            var10 = var9.onPressCamera;
            var5['onPressCamera'] = var10;
            var10 = var9.onSelectItem;
            var5['onSelectItem'] = var10;
            var9 = var9.onViewAll;
            var5['onViewAll'] = var9;
            var9 = var8.includedUploadIds;
            var5['includedUploadIds'] = var9;
            var9 = var8.showRemixButton;
            var5['showRemixButton'] = var9;
            var9 = var8.uploadDisabled;
            var5['uploadDisabled'] = var9;
            var9 = var8.uploadLimit;
            var5['uploadLimit'] = var9;
            var8 = var8.disableWhenReachedLimit;
            var5['disableWhenReachedLimit'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();