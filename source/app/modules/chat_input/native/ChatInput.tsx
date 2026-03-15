// app/modules/chat_input/native/ChatInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useVoiceMessagesUIStore;
    var _closure1_slot10 = var4;
    var4 = 7;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.updateShowingAutoComplete;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot17 = var8;
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot18 = var8;
    var8 = var4.CHAT_INPUT_PILL_PADDING;
    var _closure1_slot19 = var8;
    var4 = var4.ChatInputActionType;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot21 = var8;
    var8 = var4.ChannelTypesSets;
    var _closure1_slot22 = var8;
    var8 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot23 = var8;
    var8 = var4.ComponentActions;
    var _closure1_slot24 = var8;
    var8 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot25 = var8;
    var4 = var4.Permissions;
    var _closure1_slot26 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot27 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiInteractionPoint;
    var _closure1_slot28 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot29 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot30 = var8;
    var8 = var4.jsxs;
    var _closure1_slot31 = var8;
    var4 = var4.Fragment;
    var _closure1_slot32 = var4;
    var4 = 18;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = {};
            var2 = {};
            var3 = 'relative';
            var2['position'] = var3;
            var9 = _closure1_slot1;
            var4 = _closure1_slot3;
            var8 = 19;
            var4 = var4[var8];
            var7 = undefined;
            var4 = var9.bind(var7)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['paddingVertical'] = var4;
            var9 = _closure1_slot17;
            var4 = _closure1_slot18;
            var4 = var9 - var4;
            var2['paddingHorizontal'] = var4;
            var4 = null;
            var9 = var6;
            if(!(var4 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot1;
            var10 = _closure1_slot3;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.colors;
            var9 = var10.BACKGROUND_BASE_LOW;
case 2:
            var2['backgroundColor'] = var9;
            var11 = 1;
            var2['borderTopWidth'] = var11;
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderColor'] = var9;
            var1['container'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var1['containerInner'] = var2;
            var2 = {'flex': 1, 'marginLeft': 6};
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = {};
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = {};
            var12 = 2;
            var10['marginTop'] = var12;
            var9 = var10;
case 6:
            var14 = var2;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var1['inputDefault'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'stretch', 'borderRadius': null, 'paddingHorizontal': null, 'minHeight': null, 'marginHorizontal': 4, 'overflow': 'hidden', 'flex': 1};
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var12 = var9[var8];
            var12 = var10.bind(var7)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_BORDER_RADIUS;
            var2['borderRadius'] = var12;
            var12 = var9[var8];
            var12 = var10.bind(var7)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_PILL_PADDING;
            var2['paddingHorizontal'] = var12;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var2['minHeight'] = var9;
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = {};
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var10 = {};
            var10['borderWidth'] = var11;
            var12 = _closure1_slot1;
            var11 = _closure1_slot3;
            var11 = var11[var8];
            var11 = var12.bind(var7)(var11);
            var11 = var11.colors;
            var11 = var11.INPUT_BORDER_DEFAULT;
            var10['borderColor'] = var11;
            var9 = var10;
case 9:
            var14 = var2;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            if(!(var4 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot1;
            var4 = _closure1_slot3;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var4.REDESIGN_CHAT_INPUT_BACKGROUND;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var5 = var4.INPUT_BACKGROUND_DEFAULT;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 10:
            var6 = _closure1_slot1;
            var4 = _closure1_slot3;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            var5 = var4.CARD_SECONDARY_BG;
case 15:
            var4 = 'backgroundColor';
            var2[var4] = var5;
            var1['input'] = var2;
            var2 = {'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center'};
            var3 = _closure1_slot19;
            var2['paddingVertical'] = var3;
            var1['rightAccessory'] = var2;
            var2 = {'position': 'absolute', 'bottom': '100%', 'left': 0, 'right': 0};
            var1['accessories'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var11 = var2.channel;
            var _closure2_slot0 = var11;
            var14 = var2.isResourceChannel;
            var10 = var2.screenIndex;
            var49 = var2.setNoExtractUI;
            var23 = var2.secondaryTextFieldRef;
            var21 = var2.threadCreationCallback;
            var8 = var2.onJumpToPresent;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot1;
            var12 = _closure1_slot3;
            var3 = 20;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = 'ChatInput';
            var6 = var4.bind(var5)(var3);
            var9 = _closure1_slot0;
            var3 = 21;
            var4 = var12[var3];
            var7 = var9.bind(var5)(var4);
            var4 = var7.useGradientValue;
            var3 = var12[var3];
            var3 = var9.bind(var5)(var3);
            var3 = var3.GradientPercentage;
            var3 = var3.END;
            var4 = var4.bind(var7)(var3);
            var3 = _closure1_slot33;
            var40 = var3.bind(var5)(var4, var6);
            var33 = null;
            var3 = var33 != var21;
            var _closure2_slot1 = var3;
            var4 = var11.isPrivate;
            var15 = var4.bind(var11)();
            if(!var15) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var15 = !var3;
case 16:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 22;
            var9 = var6[var4];
            var16 = var7.bind(var5)(var9);
            var13 = var16.useStateFromStores;
            var9 = _closure1_slot13;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure1_slot13;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 18:
                    return var1;
                }
            };
            var32 = var13.bind(var16)(var12, var9);
            _closure2_slot2 = var32;
            var9 = var6[var4];
            var16 = var7.bind(var5)(var9);
            var13 = var16.useStateFromStores;
            var9 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var4 = _closure1_slot9;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 18:
                    return var1;
                }
            };
            var24 = var13.bind(var16)(var12, var9);
            _closure2_slot3 = var24;
            var6 = var6[var4];
            var12 = var7.bind(var5)(var6);
            var9 = var12.useStateFromStores;
            var6 = _closure1_slot15;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var4 = _closure1_slot15;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot12;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 22:
                    return var1;
case 20:
                    var1 = false;
                    return var1;
                }
            };
            var34 = var9.bind(var12)(var7, var6);
            var12 = _closure1_slot5;
            var9 = var12.useMemo;
            var6 = var11.id;
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var3;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot11;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot12;
                    if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var1 = var5.ChannelMessage;
                    _fun0006_ip = 26; continue _fun0006;
case 24:
                    var1 = var5.FirstThreadMessage;
case 26:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var36 = var9.bind(var12)(var6, var7);
            if(!(var33 != var32)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var36 = var32;
case 27:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = var13[var4];
            var16 = var7.bind(var5)(var6);
            var12 = var16.useStateFromStoresObject;
            var6 = _closure1_slot14;
            var9 = new Array(1);
            var9[0] = var6;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var3;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var7 = _closure1_slot14;
                    var6 = var7.can;
                    var2 = _closure1_slot26;
                    var3 = var2.ATTACH_FILES;
                    var4 = _closure2_slot0;
                    var8 = var6.bind(var7)(var3, var4);
                    var6 = var7.can;
                    var3 = var2.MENTION_EVERYONE;
                    var9 = var6.bind(var7)(var3, var4);
                    var6 = var7.can;
                    var3 = var2.SEND_MESSAGES;
                    var10 = var6.bind(var7)(var3, var4);
                    var6 = var7.can;
                    var3 = var2.SEND_VOICE_MESSAGES;
                    var6 = var6.bind(var7)(var3, var4);
                    var3 = var7.can;
                    var2 = var2.CREATE_PUBLIC_THREADS;
                    var2 = var3.bind(var7)(var2, var4);
                    if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var11 = _closure1_slot14;
                    var7 = var11.can;
                    var3 = _closure1_slot26;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 29:
                    var7 = _closure1_slot14;
                    var4 = var7.can;
                    var3 = _closure1_slot26;
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var11 = _closure2_slot0;
                    var3 = var4.bind(var7)(var3, var11);
                    var4 = var11.isPrivate;
                    var4 = var4.bind(var11)();
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 23;
                    var7 = var7[var1];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var1 = var7.computeIsReadOnlyThread;
                    var1 = var1.bind(var7)(var11);
                    var7 = _closure2_slot1;
                    if(var7) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var7 = var4;
                    if(var4) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var7 = var10;
case 33:
                    var3 = var7;
case 31:
                    var3 = !var3;
                    if(var3) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var3 = var1;
case 35:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    if(!var9) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var9 = !var3;
case 39:
                    var7 = var9;
case 37:
                    if(!var7) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var9 = _closure2_slot1;
                    var7 = !var9;
case 41:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var7 = var8;
case 43:
                    if(!var7) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var7 = !var3;
case 45:
                    if(!var7) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var8 = _closure2_slot1;
                    var7 = !var8;
case 47:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var4 = var6;
case 49:
                    if(!var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var4 = !var3;
case 51:
                    if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var5 = _closure2_slot1;
                    var4 = !var5;
case 53:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var6 = var12.bind(var16)(var9, var6, var7);
            var22 = var6.canMentionEveryone;
            var35 = var6.canUpload;
            var37 = var6.canSendVoiceMessage;
            var7 = var6.editable;
            var9 = var6.canCreateThreads;
            var12 = _closure1_slot1;
            var6 = 24;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var6 = var6.bind(var5)();
            var44 = var6.analyticsLocations;
            var19 = var3;
            if(var19) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var19 = var33 != var32;
case 55:
            if(var19) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 23;
            var6 = var13[var6];
            var12 = var12.bind(var5)(var6);
            var6 = var12.getIsActiveChannelOrUnarchivableThread;
            var6 = var6.bind(var12)(var11);
            var19 = !var6;
case 57:
            var20 = var33 != var24;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 23;
            var6 = var13[var6];
            var12 = var12.bind(var5)(var6);
            var6 = var12.useCanStartThread;
            var45 = var6.bind(var12)(var11);
            if(!var45) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var6 = _closure1_slot22;
            var13 = var6.GUILD_THREADS_ONLY;
            var12 = var13.has;
            var6 = var11.type;
            var6 = var12.bind(var13)(var6);
            var45 = !var6;
case 59:
            if(!var45) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var45 = !var3;
case 61:
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 25;
            var6 = var13[var6];
            var12 = var12.bind(var5)(var6);
            var6 = var12.useCanPostPollsInChannel;
            var41 = var6.bind(var12)(var11);
            if(!var41) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var41 = !var3;
case 63:
            var13 = _closure1_slot0;
            var16 = _closure1_slot3;
            var29 = 26;
            var6 = var16[var29];
            var17 = var13.bind(var5)(var6);
            var12 = var17.useSharedValue;
            var6 = 27;
            var6 = var16[var6];
            var18 = var13.bind(var5)(var6);
            var6 = var18.getChatInputMinHeight;
            var6 = var6.bind(var18)();
            var12 = var12.bind(var17)(var6);
            _closure2_slot4 = var12;
            var6 = var16[var29];
            var17 = var13.bind(var5)(var6);
            var13 = var17.useAnimatedStyle;
            var6 = function z() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['minHeight'] = var2;
                return var1;
            };
            var18 = {};
            var18['textFieldHeight'] = var12;
            var6['__closure'] = var18;
            var18 = 11048691841625.0;
            var6['__workletHash'] = var18;
            var18 = _closure1_slot34;
            var6['__initData'] = var18;
            var42 = var13.bind(var17)(var6);
            var13 = _closure1_slot1;
            var6 = 28;
            var6 = var16[var6];
            var6 = var13.bind(var5)(var6);
            var46 = var6.bind(var5)();
            var13 = _closure1_slot10;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var26 = var13.bind(var5)(var6);
            var30 = !var3;
            var39 = var30;
            if(var3) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var13 = _closure1_slot0;
            var16 = _closure1_slot3;
            var6 = 29;
            var6 = var16[var6];
            var13 = var13.bind(var5)(var6);
            var6 = var13.getIsAppLauncherEnabled;
            var39 = var6.bind(var13)(var11);
case 65:
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var4 = var17[var4];
            var18 = var13.bind(var5)(var4);
            var16 = var18.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getActiveCommand;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var43 = var16.bind(var18)(var6, var4);
            var16 = _closure1_slot1;
            var4 = 30;
            var4 = var17[var4];
            var6 = var16.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var11;
            var18 = !var7;
            var4['isReadonly'] = var18;
            var4['isCreatingThread'] = var3;
            var4 = var6.bind(var5)(var4);
            var51 = var4.placeholder;
            var50 = var4.accessibilityLabel;
            var4 = 31;
            var4 = var17[var4];
            var6 = var16.bind(var5)(var4);
            var4 = {};
            var18 = {};
            var18['analyticsLocations'] = var44;
            var18['canUpload'] = var35;
            var18['channel'] = var11;
            var18['defaultValue'] = var36;
            var18['hasAttachmentsToUpload'] = var34;
            var18['pendingEdit'] = var32;
            var18['pendingReply'] = var24;
            var18['screenIndex'] = var10;
            var18['secondaryTextFieldRef'] = var23;
            var18['threadCreationCallback'] = var21;
            var4['chatInputProps'] = var18;
            var4['chatInputTextFieldHeight'] = var12;
            var12 = arg2;
            var4['ref'] = var12;
            var38 = var6.bind(var5)(var4);
            _closure2_slot5 = var38;
            var18 = _closure1_slot5;
            var12 = var18.useEffect;
            var6 = new Array(1);
            var6[0] = var38;
            var4 = function() {
                var2 = _closure2_slot5;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot5;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var4 = var12.bind(var18)(var4, var6);
            var12 = var18.useEffect;
            var6 = new Array(4);
            var6[0] = var38;
            var6[1] = var11;
            var6[2] = var32;
            var6[3] = var24;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0008_ip = 67; continue _fun0008 }
case 18:
                    var5 = _closure2_slot3;
                    var3 = var2 != var5;
case 67:
                    if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 26:
                    var5 = var2 == var4;
                    if(!var5) { _fun0008_ip = 68; continue _fun0008 }
case 23:
                    var6 = _closure2_slot2;
                    var5 = var2 != var6;
case 68:
                    var3 = var5;
case 22:
                    if(!var3) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var3 = _closure2_slot5;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0008_ip = 69; continue _fun0008 }
case 71:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 69:
                    var3 = _closure2_slot5;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 32;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0008_ip = 74; continue _fun0008 }
case 72:
                    var3 = _closure2_slot2;
                    if(!(var4 !== var3)) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var3 = _closure2_slot5;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0008_ip = 75; continue _fun0008 }
case 77:
                    var4 = var5.setText;
                    var3 = _closure2_slot2;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0008_ip = 78; continue _fun0008 }
case 32:
                    var3 = _closure2_slot2;
case 78:
                    var3 = var4.bind(var5)(var3);
                    _fun0008_ip = 75; continue _fun0008;
case 74:
                    var3 = _closure2_slot5;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0008_ip = 75; continue _fun0008 }
case 79:
                    var2 = var3.setText;
                    var1 = _closure2_slot5;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var12.bind(var18)(var4, var6);
            var12 = var18.useEffect;
            var6 = new Array(1);
            var6[0] = var38;
            var4 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                        var5 = var3.channelId;
case 80:
                        var4 = _closure2_slot5;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0009_ip = 23; continue _fun0009 }
case 67:
                        var6 = var6.channel;
                        var4 = var6.id;
case 23:
                        if(!(var5 === var4)) { _fun0009_ip = 71; continue _fun0009 }
case 82:
                        var3 = _closure2_slot5;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0009_ip = 71; continue _fun0009 }
case 83:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 71:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 33;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = _closure1_slot24;
                var2 = var2.TEXTAREA_FOCUS;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 33;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot24;
                    var3 = var2.TEXTAREA_FOCUS;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var12.bind(var18)(var4, var6);
            var12 = var18.useMemo;
            var6 = new Array(1);
            var6[0] = var38;
            var4 = function() {
                var1 = {};
                var3 = function handleBlur(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.text;
                        var3 = _closure2_slot6;
                        var1 = var3.handleTextOrFocusChange;
                        var7 = false;
                        var1 = var1.bind(var3)(var4, var7);
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1['focused'] = var7;
                        var1 = _closure2_slot5;
                        var1 = var1.chatInputCover;
                        var5 = var1.current;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                        var3 = var5.focused;
                        var3 = var3.bind(var5)(var7);
case 84:
                        var3 = _closure2_slot5;
                        var3 = var3.chatInputAppCommandManager;
                        var5 = var3.current;
                        if(!(var1 != var5)) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                        var3 = var5.updateState;
                        var3 = var3.bind(var5)();
case 86:
                        var3 = _closure2_slot5;
                        var3 = var3.chatInputAutocomplete;
                        var6 = var3.current;
                        if(!(var1 != var6)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                        var5 = var6.setData;
                        var3 = {};
                        var3['focused'] = var7;
                        var3['text'] = var4;
                        var7 = _closure2_slot5;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.selectionStart;
                        var3['selectionStart'] = var7;
                        var7 = _closure2_slot5;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.selectionEnd;
                        var3['selectionEnd'] = var7;
                        var3 = var5.bind(var6)(var3);
case 88:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputSendButton;
                        var3 = var2.current;
                        if(!(var1 != var3)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                        var2 = var3.setHasText;
                        var1 = var4.trim;
                        var1 = var1.bind(var4)();
                        var4 = var1.length;
                        var1 = 0;
                        var1 = var4 > var1;
                        var1 = var2.bind(var3)(var1);
case 90:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleBlur'] = var3;
                var3 = function handleFocus(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var5 = var1.start;
                        var4 = var1.end;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var7 = true;
                        var1['focused'] = var7;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1['selectionStart'] = var5;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1['selectionEnd'] = var4;
                        var3 = _closure2_slot6;
                        var2 = var3.handleTextOrFocusChange;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.text;
                        var1 = var2.bind(var3)(var1, var7);
                        var1 = _closure2_slot5;
                        var1 = var1.chatInputAppCommandManager;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                        var2 = var3.updateState;
                        var2 = var2.bind(var3)();
case 92:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputCover;
                        var3 = var2.current;
                        if(!(var1 != var3)) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                        var2 = var3.focused;
                        var2 = var2.bind(var3)(var7);
case 94:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        if(!(var1 != var3)) { _fun0011_ip = 38; continue _fun0011 }
case 96:
                        var2 = var3.setData;
                        var1 = {};
                        var1['focused'] = var7;
                        var6 = _closure2_slot5;
                        var6 = var6.state;
                        var6 = var6.current;
                        var6 = var6.text;
                        var1['text'] = var6;
                        var1['selectionStart'] = var5;
                        var1['selectionEnd'] = var4;
                        var1 = var2.bind(var3)(var1);
case 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot5;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot5;
                    var1 = var1.state;
                    var1 = var1.current;
                    var4 = var1.textFieldHeight;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.getChatInputHeightAnimationTiming;
                    var2 = var2.bind(var5)(var6);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleChangeContentSize'] = var3;
                var3 = function handleLayoutOfInputContainer(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 97:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayoutOfInputContainer'] = var3;
                var3 = function handleLayout(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var4 = var1.width;
                        var2 = 0;
                        var1 = var2 !== var3;
                        if(!var1) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                        var1 = var2 !== var4;
case 99:
                        if(!var1) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                        var2 = _closure2_slot5;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0013_ip = 101; continue _fun0013 }
case 20:
                        var1 = _closure2_slot5;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 101:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0014_ip = 103; continue _fun0014 }
case 104:
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var3 = var1.textFieldHeight;
                        var2 = var3.set;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 27;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var1 = var4.getChatInputHeightAnimationTiming;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
case 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot16;
                    var1 = _closure2_slot5;
                    var1 = var1.props;
                    var1 = var1.current;
                    var3 = var1.screenIndex;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['handleChangeAutoCompleteVisibility'] = var3;
                var3 = function handlePasteCommand(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.data;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0015_ip = 3; continue _fun0015 }
case 107:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 3:
                        if(var2) { _fun0015_ip = 105; continue _fun0015 }
case 84:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot5;
                        var1 = var1.props;
                        var1 = var1.current;
                        var1 = var1.channel;
                        var1 = var2.bind(var3)(var4, var1);
case 105:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePasteCommand'] = var3;
                var5 = _closure1_slot4;
                var4 = undefined;
                var3 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0016_ip = 108; continue _fun0016 }
case 21:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 109:
                            return var4;
case 110:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                            var3 = _closure2_slot5;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                            var3 = _closure2_slot5;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0016_ip = 113; continue _fun0016 }
case 115:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 34;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 116:
                            return var3;
case 117:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 35;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot5;
                            var9 = var9.props;
                            var9 = var9.current;
                            var9 = var9.channel;
                            var9 = var9.id;
                            var5['channelId'] = var9;
                            var9 = {};
                            var9['uri'] = var11;
                            var9['originalUri'] = var11;
                            var11 = var3.width;
                            var9['width'] = var11;
                            var11 = var3.height;
                            var9['height'] = var11;
                            var9['mimeType'] = var10;
                            var11 = _closure1_slot0;
                            var10 = 36;
                            var10 = var12[var10];
                            var10 = var11.bind(var4)(var10);
                            var10 = var10.UploadPlatform;
                            var10 = var10.REACT_NATIVE;
                            var9['platform'] = var10;
                            var10 = 37;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var11.v4;
                            var10 = var10.bind(var11)();
                            var9['id'] = var10;
                            var5['file'] = var9;
                            var8 = _closure1_slot12;
                            var8 = var8.ChannelMessage;
                            var5['draftType'] = var8;
                            var5 = var6.bind(var7)(var5);
case 113:
                            return var4;
case 118:
                            return var3;
case 111:
                            return var2;
case 108:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = var5.bind(var4)(var3);
                var _closure3_slot0 = var3;
                var3 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1['handlePasteImage'] = var3;
                var3 = function handlePressAction(arg1, arg2) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg2;
                        var1 = _closure1_slot20;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                        var1 = _closure1_slot20;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0017_ip = 122; continue _fun0017 }
case 123:
                        var1 = _closure1_slot20;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0017_ip = 11; continue _fun0017 }
case 124:
                        var1 = _closure1_slot20;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0017_ip = 125; continue _fun0017 }
case 85:
                        var1 = _closure1_slot20;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0017_ip = 126; continue _fun0017 }
case 127:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 38;
                        var7 = var6[var1];
                        var2 = undefined;
                        var8 = var3.bind(var2)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var6[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 44;
                        var1 = var6[var1];
                        var6 = var3.bind(var2)(var1);
                        var3 = var6.handleSelectThread;
                        var2 = _closure2_slot5;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot5;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var6)(var2, var1);
                        _fun0017_ip = 126; continue _fun0017;
case 125:
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var1 = 46;
                        var1 = var6[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.markPotentialBadState;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 38;
                        var7 = var6[var1];
                        var8 = var2.bind(var3)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var6[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 47;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0017_ip = 128; continue _fun0017 }
case 52:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 45;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 128:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 44;
                        var1 = var6[var1];
                        var6 = var2.bind(var3)(var1);
                        var3 = var6.handleSelectGift;
                        var2 = _closure2_slot5;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot5;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var6)(var2, var1);
                        _fun0017_ip = 126; continue _fun0017;
case 11:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 38;
                        var7 = var6[var1];
                        var2 = undefined;
                        var8 = var3.bind(var2)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var6[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 44;
                        var1 = var6[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var6 = _closure2_slot5;
                        var6 = var6.props;
                        var6 = var6.current;
                        var6 = var6.channel;
                        var1['channel'] = var6;
                        var6 = _closure1_slot25;
                        var1['uploadLimit'] = var6;
                        var6 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 45;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var6;
                        var6 = function onRestoreKeyboard() {
                            var3 = _closure2_slot6;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 40;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.SYSTEM;
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['onRestoreKeyboard'] = var6;
                        var4 = function onSelectFiles(arg1) {
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 44;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot5;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 36;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var3 = var2.IMAGE_PICKER;
                            var2 = arg1;
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        };
                        var1['onSelectFiles'] = var4;
                        var4 = _closure1_slot12;
                        var4 = var4.ChannelMessage;
                        var1['draftType'] = var4;
                        var1 = var2.bind(var3)(var1);
                        _fun0017_ip = 126; continue _fun0017;
case 122:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 38;
                        var2 = var10[var1];
                        var6 = undefined;
                        var3 = var9.bind(var6)(var2);
                        var2 = var3.triggerHapticFeedback;
                        var1 = var10[var1];
                        var1 = var9.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var2.bind(var3)(var1);
                        var1 = 41;
                        var1 = var10[var1];
                        var4 = var9.bind(var6)(var1);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot21;
                        var2 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = 39;
                        var2 = var10[var2];
                        var4 = var3.bind(var6)(var2);
                        var3 = var4.track;
                        var2 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot23;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var8 = _closure2_slot5;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var1['channel_id'] = var8;
                        var8 = _closure2_slot5;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var1['guild_id'] = var8;
                        var1 = var3.bind(var4)(var2, var1);
                        var2 = _closure1_slot2;
                        var1 = 42;
                        var1 = var10[var1];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.dismissNewActivityIndicator;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot6;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var4 = 40;
                        var4 = var10[var4];
                        var4 = var9.bind(var6)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.APP_LAUNCHER;
                        var1['type'] = var4;
                        var4 = {};
                        var8 = _closure1_slot27;
                        var8 = var8.HOME;
                        var4['initialRouteName'] = var8;
                        var8 = 43;
                        var8 = var10[var8];
                        var9 = var9.bind(var6)(var8);
                        var8 = var9.getAppDMApplication;
                        var7 = _closure2_slot5;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var8.bind(var9)(var7);
                        var8 = null;
                        var8 = var8 == var7;
                        if(var8) { _fun0017_ip = 129; continue _fun0017 }
case 130:
                        var6 = var7.name;
case 129:
                        var4['initialSearchQuery'] = var6;
                        var1['context'] = var4;
                        var1 = var2.bind(var3)(var1);
                        _fun0017_ip = 126; continue _fun0017;
case 120:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 38;
                        var3 = var2[var1];
                        var7 = undefined;
                        var6 = var4.bind(var7)(var3);
                        var3 = var6.triggerHapticFeedback;
                        var1 = var2[var1];
                        var1 = var4.bind(var7)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var3.bind(var6)(var1);
                        var3 = _closure1_slot1;
                        var1 = 39;
                        var1 = var2[var1];
                        var9 = var3.bind(var7)(var1);
                        var8 = var9.track;
                        var1 = _closure1_slot21;
                        var6 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var3 = {};
                        var1 = _closure1_slot23;
                        var1 = var1.ADD_BUTTON;
                        var3['type'] = var1;
                        var10 = _closure2_slot5;
                        var10 = var10.props;
                        var10 = var10.current;
                        var10 = var10.channel;
                        var10 = var10.id;
                        var3['channel_id'] = var10;
                        var10 = _closure2_slot5;
                        var10 = var10.props;
                        var10 = var10.current;
                        var10 = var10.channel;
                        var10 = var10.guild_id;
                        var3['guild_id'] = var10;
                        var3 = var8.bind(var9)(var6, var3);
                        var3 = 28;
                        var3 = var2[var3];
                        var6 = var4.bind(var7)(var3);
                        var3 = var6.getKeyboardType;
                        var3 = var3.bind(var6)();
                        var8 = 40;
                        var2 = var2[var8];
                        var2 = var4.bind(var7)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.MEDIA;
                        if(!(var3 === var2)) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 131; continue _fun0017 }
case 133:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 131:
                        var3 = _closure2_slot6;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var8];
                        var4 = var6.bind(var7)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.MEDIA;
                        var1['type'] = var4;
                        var4 = {};
                        var5 = _closure1_slot29;
                        var5 = var5.CHAT;
                        var4['target'] = var5;
                        var1['context'] = var4;
                        var1 = var2.bind(var3)(var1);
case 126:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressAction'] = var3;
                var3 = function handlePressExpression(arg1) {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 48;
                    var3 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot28;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot6;
                    var3 = var4.handleToggleKeyboard;
                    var2 = {};
                    var5 = 40;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.KeyboardTypes;
                    var5 = var5.EXPRESSION;
                    var2['type'] = var5;
                    var5 = arg1;
                    var2['context'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handlePressExpression'] = var3;
                var3 = function handlePressSend() {
                    var1 = _closure2_slot5;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.handleSend;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressSend'] = var3;
                var3 = function handleSelectionOrTextChange(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.nativeEvent;
                        var10 = var2.start;
                        var9 = var2.end;
                        var1 = var2.text;
                        var5 = var2.editId;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot6;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot5;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0018_ip = 94; continue _fun0018 }
case 134:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 94:
                        var6 = _closure2_slot5;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0018_ip = 79; continue _fun0018 }
case 96:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot5;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 79:
                        var6 = _closure2_slot5;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 135:
                        if(!(var4 !== var5)) { _fun0018_ip = 137; continue _fun0018 }
case 138:
                        var4 = _closure2_slot5;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot5;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 139:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 49;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 137:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSelectionOrTextChange'] = var3;
                var3 = function handleTapAction(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.tapAction;
                        var3 = var2.action;
                        var1 = 'tapAttachment';
                        if(!(var1 === var3)) { _fun0019_ip = 141; continue _fun0019 }
case 98:
                        var1 = _closure2_slot5;
                        var1 = var1.chatInput;
                        var3 = var1.current;
                        var1 = var3.blur;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 50;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openCommandAttachmentPreview;
                        var3 = _closure2_slot5;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot5;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0019_ip = 142; continue _fun0019 }
case 143:
                        var1 = function() {
                            var1 = _closure2_slot5;
                            var1 = var1.chatInput;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
case 142:
                        var12 = var6;
                        var11 = var4;
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 141:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapAction'] = var3;
                var3 = function handleTextOrFocusChange(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var1 = var3.length;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0020_ip = 23; continue _fun0020 }
case 144:
                        if(var4) { _fun0020_ip = 87; continue _fun0020 }
case 145:
                        var5 = var3.length;
                        var1 = _closure2_slot5;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.textPrev;
                        var1 = var1.length;
                        if(!(!(var5 > var1))) { _fun0020_ip = 87; continue _fun0020 }
case 23:
                        var1 = var3.length;
                        if(!(var2 === var1)) { _fun0020_ip = 146; continue _fun0020 }
case 147:
                        var1 = _closure2_slot5;
                        var1 = var1.chatInputActions;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0020_ip = 146; continue _fun0020 }
case 127:
                        var1 = var2.onShowActions;
                        var1 = var1.bind(var2)(var4);
                        _fun0020_ip = 146; continue _fun0020;
case 87:
                        var5 = _closure1_slot8;
                        var2 = var5.isOpen;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0020_ip = 119; continue _fun0020 }
case 148:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 51;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
case 119:
                        var1 = _closure2_slot5;
                        var1 = var1.chatInputActions;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0020_ip = 146; continue _fun0020 }
case 149:
                        var1 = var2.onDismissActions;
                        var1 = var1.bind(var2)(var4);
case 146:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 52;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getMaxMessageLength;
                        var7 = var2.bind(var5)();
                        var5 = _closure2_slot5;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0020_ip = 150; continue _fun0020 }
case 151:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 150:
                        if(!var5) { _fun0020_ip = 152; continue _fun0020 }
case 153:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 39;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot21;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 152:
                        var4 = _closure2_slot5;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot5;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot5;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['text'] = var3;
                        return var1;
                    }
                };
                var1['handleTextOrFocusChange'] = var3;
                var3 = function handleTextFlushed(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var3 = var1.text;
                        var4 = var1.requestId;
                        var1 = _closure2_slot5;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0021_ip = 82; continue _fun0021 }
case 112:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 82:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTextFlushed'] = var3;
                var2 = function handleToggleKeyboard(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.isOpen;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0022_ip = 97; continue _fun0022 }
case 154:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 51;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 97:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 40;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0022_ip = 155; continue _fun0022 }
case 156:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 28;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0022_ip = 155; continue _fun0022 }
case 157:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0022_ip = 158; continue _fun0022;
case 155:
                        var2 = _closure2_slot5;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 158:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var31 = var12.bind(var18)(var4, var6);
            _closure2_slot6 = var31;
            var6 = _closure1_slot31;
            var4 = _closure1_slot6;
            var1 = {};
            var25 = false;
            var1['collapsable'] = var25;
            var12 = 53;
            var12 = var17[var12];
            var16 = var16.bind(var5)(var12);
            var12 = {};
            var12['isCreatingThread'] = var3;
            var12 = var16.bind(var5)(var12);
            var1['style'] = var12;
            var16 = _closure1_slot30;
            var12 = 54;
            var12 = var17[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.ChatInputAccessibilityDivider;
            var12 = {};
            var13 = var16.bind(var5)(var13, var12);
            var12 = new Array(7);
            var12[0] = var13;
            var13 = null;
            if(!var15) { _fun0002_ip = 159; continue _fun0002 }
case 160:
            var17 = _closure1_slot30;
            var16 = _closure1_slot1;
            var18 = _closure1_slot3;
            var15 = 55;
            var15 = var18[var15];
            var16 = var16.bind(var5)(var15);
            var15 = {};
            var15['channel'] = var11;
            var23 = '';
            var18 = var23 !== var36;
            if(var18) { _fun0002_ip = 161; continue _fun0002 }
case 162:
            var21 = var38.chatInput;
            var28 = var21.current;
            var27 = var33 == var28;
            var21 = undefined;
            if(var27) { _fun0002_ip = 163; continue _fun0002 }
case 164:
            var27 = var28.getText;
            var21 = var27.bind(var28)();
case 163:
            var18 = var23 !== var21;
case 161:
            var15['hasInputText'] = var18;
            var13 = var17.bind(var5)(var16, var15);
case 159:
            var12[1] = var13;
            var16 = _closure1_slot31;
            var15 = _closure1_slot6;
            var13 = {};
            var17 = var40.accessories;
            var13['style'] = var17;
            var18 = null;
            if(var3) { _fun0002_ip = 165; continue _fun0002 }
case 166:
            var23 = _closure1_slot30;
            var21 = _closure1_slot1;
            var27 = _closure1_slot3;
            var17 = 56;
            var17 = var27[var17];
            var21 = var21.bind(var5)(var17);
            var17 = {};
            var17['channel'] = var11;
            var17['screenIndex'] = var10;
            var18 = var23.bind(var5)(var21, var17);
case 165:
            var17 = new Array(2);
            var17[0] = var18;
            var23 = _closure1_slot30;
            var21 = _closure1_slot1;
            var27 = _closure1_slot3;
            var18 = 57;
            var18 = var27[var18];
            var21 = var21.bind(var5)(var18);
            var18 = {};
            var27 = var11.id;
            var18['channelId'] = var27;
            var18['screenIndex'] = var10;
            var18['onJumpToPresent'] = var8;
            var18 = var23.bind(var5)(var21, var18);
            var17[1] = var18;
            var13['children'] = var17;
            var13 = var16.bind(var5)(var15, var13);
            var12[2] = var13;
            var13 = null;
            if(!var14) { _fun0002_ip = 167; continue _fun0002 }
case 168:
            var17 = _closure1_slot30;
            var15 = _closure1_slot1;
            var16 = _closure1_slot3;
            var14 = 58;
            var14 = var16[var14];
            var16 = var15.bind(var5)(var14);
            var15 = {};
            var15['channel'] = var11;
            var14 = var11.id;
            var13 = var17.bind(var5)(var16, var15, var14);
case 167:
            var12[3] = var13;
            var15 = _closure1_slot30;
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = 59;
            var13 = var16[var13];
            var13 = var17.bind(var5)(var13);
            var14 = var13.MemberActionsChatInputBannerGuardedOuter;
            var13 = {};
            var13['channel'] = var11;
            var13 = var15.bind(var5)(var14, var13);
            var12[4] = var13;
            var13 = 60;
            var13 = var16[var13];
            var13 = var17.bind(var5)(var13);
            var14 = var13.DoubleTapToReactChatInputBanner;
            var13 = {};
            var13['channel'] = var11;
            var13 = var15.bind(var5)(var14, var13);
            var12[5] = var13;
            var15 = _closure1_slot31;
            var14 = _closure1_slot6;
            var13 = {};
            var18 = var31.handleLayout;
            var13['onLayout'] = var18;
            var48 = 40;
            var16 = var16[var48];
            var16 = var17.bind(var5)(var16);
            var16 = var16.KeyboardTypes;
            var16 = var16.EXPRESSION;
            var17 = null;
            if(!(var46 !== var16)) { _fun0002_ip = 169; continue _fun0002 }
case 170:
            var21 = _closure1_slot30;
            var18 = _closure1_slot1;
            var23 = _closure1_slot3;
            var16 = 61;
            var16 = var23[var16];
            var18 = var18.bind(var5)(var16);
            var16 = {};
            var23 = var38.chatInputAutocomplete;
            var16['ref'] = var23;
            var16['analyticsLocations'] = var44;
            var16['channel'] = var11;
            var16['canMentionEveryone'] = var22;
            var16['keyboardType'] = var46;
            var22 = var31.handleChangeAutoCompleteVisibility;
            var16['onChangeAutoCompleteVisibility'] = var22;
            var16['commandsDisabled'] = var19;
            var16['canOnlyUseTextCommands'] = var20;
            var22 = var38.chatInput;
            var16['chatInputRef'] = var22;
            var16['screenIndex'] = var10;
            var17 = var21.bind(var5)(var18, var16);
case 169:
            var16 = new Array(5);
            var16[0] = var17;
            var23 = _closure1_slot30;
            var21 = _closure1_slot1;
            var22 = _closure1_slot3;
            var17 = 62;
            var17 = var22[var17];
            var18 = var21.bind(var5)(var17);
            var17 = {};
            var17['channel'] = var11;
            var17 = var23.bind(var5)(var18, var17);
            var16[1] = var17;
            var17 = 63;
            var17 = var22[var17];
            var18 = var21.bind(var5)(var17);
            var17 = {};
            var17['channel'] = var11;
            var27 = var38.chatInput;
            var17['chatInputRef'] = var27;
            var17['pendingEdit'] = var32;
            var17['pendingReply'] = var24;
            var17 = var23.bind(var5)(var18, var17);
            var16[2] = var17;
            var17 = 64;
            var17 = var22[var17];
            var18 = var21.bind(var5)(var17);
            var17 = {};
            var24 = var38.chatInputAppCommandManager;
            var17['ref'] = var24;
            var17['canOnlyUseTextCommands'] = var20;
            var17['channel'] = var11;
            var20 = var38.chatInput;
            var17['chatInputRef'] = var20;
            var20 = var38.state;
            var17['chatInputStateRef'] = var20;
            var17['commandsDisabled'] = var19;
            var17 = var23.bind(var5)(var18, var17);
            var16[3] = var17;
            var19 = _closure1_slot31;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var40.container;
            var17['style'] = var20;
            var20 = var31.handleLayoutOfInputContainer;
            var17['onLayout'] = var20;
            var20 = 65;
            var20 = var22[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['canUpload'] = var35;
            var22 = var11.id;
            var20['channelId'] = var22;
            var20['screenIndex'] = var10;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var22 = _closure1_slot32;
            var21 = {};
            var24 = {};
            var27 = var40.containerInner;
            var24['style'] = var27;
            var24['collapsable'] = var25;
            var24['accessibilityElementsHidden'] = var26;
            var25 = undefined;
            if(!var26) { _fun0002_ip = 171; continue _fun0002 }
case 172:
            var25 = 'no-hide-descendants';
case 171:
            var24['importantForAccessibility'] = var25;
            var26 = null;
            if(!var7) { _fun0002_ip = 173; continue _fun0002 }
case 174:
            var28 = _closure1_slot30;
            var27 = _closure1_slot1;
            var47 = _closure1_slot3;
            var25 = 66;
            var25 = var47[var25];
            var27 = var27.bind(var5)(var25);
            var25 = {};
            var47 = var38.chatInputActions;
            var25['ref'] = var47;
            var25['channel'] = var11;
            var47 = var31.handlePressAction;
            var25['onPressAction'] = var47;
            var25['canStartThreads'] = var45;
            var25['isAppLauncherEnabled'] = var39;
            var25['keyboardType'] = var46;
            var39 = var35;
            if(!var35) { _fun0002_ip = 175; continue _fun0002 }
case 176:
            var39 = var33 == var43;
case 175:
            if(var39) { _fun0002_ip = 177; continue _fun0002 }
case 178:
            var39 = var41;
case 177:
            var39 = !var39;
            var25['shouldPhotosButtonBeDisabled'] = var39;
            var25['canUpload'] = var35;
            var25['shouldShowGiftButton'] = var30;
            var26 = var28.bind(var5)(var27, var25);
case 173:
            var25 = new Array(3);
            var25[0] = var26;
            var28 = _closure1_slot31;
            var27 = _closure1_slot6;
            var26 = {};
            var39 = var40.input;
            var26['style'] = var39;
            var43 = _closure1_slot1;
            var47 = _closure1_slot3;
            var29 = var47[var29];
            var29 = var43.bind(var5)(var29);
            var39 = var29.View;
            var29 = {};
            var45 = var40.inputDefault;
            var41 = new Array(2);
            var41[0] = var45;
            var41[1] = var42;
            var29['style'] = var41;
            var45 = _closure1_slot30;
            var41 = 67;
            var41 = var47[var41];
            var42 = var43.bind(var5)(var41);
            var41 = {};
            var41['accessibilityLabel'] = var50;
            var50 = _closure1_slot0;
            var52 = 68;
            var52 = var47[var52];
            var52 = var50.bind(var5)(var52);
            var52 = var52.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var41['customKeyboard'] = var52;
            var41['editable'] = var7;
            var52 = var31.handleFocus;
            var41['onBeginFocus'] = var52;
            var52 = var31.handleBlur;
            var41['onEndBlur'] = var52;
            var52 = var31.handleChangeContentSize;
            var41['onChangeContentSize'] = var52;
            var52 = var31.handleMaxHeightChanged;
            var41['onMaxHeightChanged'] = var52;
            var52 = var31.handleSelectionOrTextChange;
            var41['onSelectionOrTextChange'] = var52;
            var52 = var31.handleTextFlushed;
            var41['onTextFlushed'] = var52;
            var52 = var31.handlePasteImage;
            var41['onPasteImage'] = var52;
            var52 = var31.handlePasteCommand;
            var41['onPasteCommand'] = var52;
            var52 = var31.handleTapAction;
            var41['onTapAction'] = var52;
            var52 = var31.handlePressSend;
            var41['onRequestSend'] = var52;
            var41['placeholder'] = var51;
            var51 = var38.chatInputNative;
            var41['ref'] = var51;
            var41['setNoExtractUI'] = var49;
            var49 = var47[var48];
            var49 = var50.bind(var5)(var49);
            var49 = var49.KeyboardTypes;
            var49 = var49.MEDIA;
            var49 = var46 !== var49;
            var41['shouldShowCursor'] = var49;
            var42 = var45.bind(var5)(var42, var41);
            var41 = new Array(2);
            var41[0] = var42;
            var42 = 69;
            var42 = var47[var42];
            var43 = var43.bind(var5)(var42);
            var42 = {};
            var42['keyboardType'] = var46;
            var47 = var31.handleToggleKeyboard;
            var42['onSelectKeyboard'] = var47;
            var47 = var38.chatInputCover;
            var42['ref'] = var47;
            var42 = var45.bind(var5)(var43, var42);
            var41[1] = var42;
            var29['children'] = var41;
            var39 = var28.bind(var5)(var39, var29);
            var29 = new Array(2);
            var29[0] = var39;
            var39 = {};
            var40 = var40.rightAccessory;
            var39['style'] = var40;
            var41 = null;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
case 180:
            var43 = _closure1_slot30;
            var42 = _closure1_slot1;
            var45 = _closure1_slot3;
            var40 = 70;
            var40 = var45[var40];
            var42 = var42.bind(var5)(var40);
            var40 = {};
            var47 = _closure1_slot0;
            var45 = var45[var48];
            var45 = var47.bind(var5)(var45);
            var45 = var45.KeyboardTypes;
            var45 = var45.EXPRESSION;
            var45 = var46 === var45;
            var40['active'] = var45;
            var45 = var31.handlePressExpression;
            var40['onPress'] = var45;
            var41 = var43.bind(var5)(var42, var40);
case 179:
            var40 = new Array(2);
            var40[0] = var41;
            var43 = _closure1_slot30;
            var42 = _closure1_slot1;
            var45 = _closure1_slot3;
            var41 = 71;
            var41 = var45[var41];
            var42 = var42.bind(var5)(var41);
            var41 = {};
            var41['analyticsLocations'] = var44;
            var44 = var38.chatInputCharCounter;
            var41['ref'] = var44;
            var41 = var43.bind(var5)(var42, var41);
            var40[1] = var41;
            var39['children'] = var40;
            var39 = var28.bind(var5)(var27, var39);
            var29[1] = var39;
            var26['children'] = var29;
            var26 = var28.bind(var5)(var27, var26);
            var25[1] = var26;
            if(var7) { _fun0002_ip = 181; continue _fun0002 }
case 182:
            var26 = null;
            if(!var3) { _fun0002_ip = 183; continue _fun0002 }
case 181:
            var29 = _closure1_slot30;
            var28 = _closure1_slot1;
            var39 = _closure1_slot3;
            var27 = 72;
            var27 = var39[var27];
            var28 = var28.bind(var5)(var27);
            var27 = {};
            var38 = var38.chatInputSendButton;
            var27['ref'] = var38;
            var27['canSendVoiceMessage'] = var37;
            var27['channel'] = var11;
            var27['defaultValue'] = var36;
            if(!var34) { _fun0002_ip = 184; continue _fun0002 }
case 185:
            var34 = var35;
case 184:
            var27['hasPendingAttachments'] = var34;
            var32 = var33 != var32;
            var27['hasPendingEdit'] = var32;
            var31 = var31.handlePressSend;
            var27['onSendMessage'] = var31;
            var27['requireTextContent'] = var30;
            var26 = var29.bind(var5)(var28, var27);
case 183:
            var25[2] = var26;
            var24['children'] = var25;
            var24 = var19.bind(var5)(var18, var24);
            var21['children'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[4] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[6] = var13;
            var1['children'] = var12;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(var3) { _fun0002_ip = 186; continue _fun0002 }
case 187:
            var4 = _closure1_slot30;
            var3 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 73;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var11;
            var2['screenIndex'] = var10;
            var2['canSendMessages'] = var7;
            var2['canCreateThreads'] = var9;
            var2['onJumpToPresent'] = var8;
            var7 = !var7;
            var2['isReadonly'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 186:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 74;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();