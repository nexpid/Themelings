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
    var1 = function ChatInputScrimGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.gradientHeight;
            var7 = var2.inline;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var8 = var2.scrimBase;
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 23;
            var2 = var10[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useToken;
            var9 = _closure1_slot1;
            var2 = 21;
            var2 = var10[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var12 = var3.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var1;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 24;
            var1 = var1[var5];
            var3 = var3.bind(var4)(var1);
            var1 = var3.hex2rgb;
            var11 = 1;
            var1 = var1.bind(var3)(var8, var11);
            var10 = var8;
            if(!(var2 != var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var1;
case 6:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0;
            var1 = var3.bind(var5)(var8, var1);
            var2 = var2 != var1;
            var13 = 'transparent';
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var1;
case 8:
            var3 = _closure1_slot35;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = {'position': 'absolute', 'top': null, 'left': 0, 'right': 0, 'bottom': 0};
            var8 = -var12;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = 2;
            var7 = var8 / var7;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var7 = var8;
case 12:
            var5['top'] = var7;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot34;
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var5 = 25;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var10;
            var5['colors'] = var9;
            var9 = {};
            var9['height'] = var12;
            var5['style'] = var9;
            var9 = {'x': 0, 'y': 0};
            var5['start'] = var9;
            var9 = {'x': 0, 'y': 1};
            var5['end'] = var9;
            var9 = [0, 1];
            var5['locations'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot34;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = {};
            var9['flex'] = var11;
            var9['backgroundColor'] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useVoiceMessagesUIStore;
    var _closure1_slot12 = var4;
    var4 = 9;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.updateShowingAutoComplete;
    var _closure1_slot18 = var8;
    var8 = var4.useChatIsAtBottom;
    var _closure1_slot19 = var8;
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot21 = var8;
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot22 = var8;
    var4 = var4.ChatInputActionType;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot24 = var8;
    var8 = var4.ChannelTypesSets;
    var _closure1_slot25 = var8;
    var8 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot26 = var8;
    var8 = var4.ComponentActions;
    var _closure1_slot27 = var8;
    var8 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot28 = var8;
    var4 = var4.Permissions;
    var _closure1_slot29 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot30 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiInteractionPoint;
    var _closure1_slot31 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot32 = var8;
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot33 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot34 = var8;
    var8 = var4.jsxs;
    var _closure1_slot35 = var8;
    var4 = var4.Fragment;
    var _closure1_slot36 = var4;
    var4 = 20;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {};
            var3 = 'relative';
            var2['position'] = var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot3;
            var7 = 21;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var3 = var3.space;
            var3 = var3.PX_8;
            var2['paddingVertical'] = var3;
            var8 = _closure1_slot21;
            var3 = _closure1_slot22;
            var3 = var8 - var3;
            var2['paddingHorizontal'] = var3;
            var3 = null;
            var8 = var5;
            if(!(var3 == var8)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_BASE_LOW;
case 13:
            var2['backgroundColor'] = var8;
            var8 = 1;
            var2['borderTopWidth'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot3;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_SUBTLE;
            var2['borderColor'] = var8;
            var1['container'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var1['containerInner'] = var2;
            var2 = {};
            var8 = arg2;
            if(var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = {'flex': 1, 'marginLeft': 6};
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var8 = {'alignSelf': 'stretch', 'marginLeft': 0, 'marginTop': 0};
case 17:
            var14 = var2;
            var13 = var8;
            var8 = copyDataProperties(var14, var13);
            var1['inputDefault'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'stretch', 'borderRadius': null, 'paddingHorizontal': null, 'marginHorizontal': null, 'overflow': 'hidden', 'flex': 1};
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var8 = var9[var7];
            var8 = var10.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_BORDER_RADIUS;
            var2['borderRadius'] = var8;
            var8 = var9[var7];
            var8 = var10.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_PILL_PADDING;
            var2['paddingHorizontal'] = var8;
            var8 = var9[var7];
            var8 = var10.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_PILL_MARGIN_HORIZONTAL;
            var2['marginHorizontal'] = var8;
            var8 = 'hidden';
            var11 = var9[var7];
            var11 = var10.bind(var6)(var11);
            var11 = var11.modules;
            var11 = var11.mobile;
            var11 = var11.CHAT_INPUT_PILL_BORDER_WIDTH;
            var2['borderWidth'] = var11;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.INPUT_BORDER_DEFAULT;
            var2['borderColor'] = var9;
            if(!(var3 == var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_BACKGROUND;
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var9 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 20:
            var2['backgroundColor'] = var3;
            var1['input'] = var2;
            var2 = {'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center'};
            var11 = 'column';
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var3 = var10[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_PILL_PADDING;
            var2['paddingVertical'] = var3;
            var1['rightAccessory'] = var2;
            var2 = {};
            var3 = var10[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_PILL_BORDER_WIDTH;
            var2['marginBottom'] = var3;
            var1['refreshButtonAlignment'] = var2;
            var2 = {'position': 'absolute', 'bottom': '100%', 'left': 0, 'right': 0};
            var1['accessories'] = var2;
            var2 = {'borderTopWidth': 0, 'borderColor': 'transparent', 'borderRadius': null, 'backgroundColor': 'transparent', 'paddingHorizontal': null, 'paddingVertical': 0, 'overflow': 'visible'};
            var5 = 'transparent';
            var3 = var10[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.radii;
            var3 = var3.none;
            var2['borderRadius'] = var3;
            var3 = var10[var7];
            var3 = var9.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var2['paddingHorizontal'] = var3;
            var3 = 'visible';
            var1['floatingContainer'] = var2;
            var2 = {};
            var12 = var10[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_CHATINPUT_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var12;
            var12 = var10[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH;
            var2['borderWidth'] = var12;
            var12 = var10[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_CHATINPUT_BORDER_DEFAULT;
            var2['borderColor'] = var12;
            var12 = var10[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_FLOATING_BORDER_RADIUS;
            var2['borderRadius'] = var12;
            var2['flexDirection'] = var11;
            var2['overflow'] = var8;
            var1['floatingInputBox'] = var2;
            var2 = {};
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.MOBILE_CHATINPUT_BACKGROUND_ACTIVE;
            var2['backgroundColor'] = var8;
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.MOBILE_CHATINPUT_BORDER_ACTIVE;
            var2['borderColor'] = var8;
            var1['floatingInputBoxPressed'] = var2;
            var2 = {'shadowOpacity': 0, 'elevation': 0};
            var1['floatingInputBoxTyping'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL;
            var2['paddingHorizontal'] = var8;
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
            var2['paddingVertical'] = var8;
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_FLOATING_CONTENT_GAP;
            var2['gap'] = var8;
            var1['floatingMainContents'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'center'};
            var9 = _closure1_slot0;
            var8 = 22;
            var8 = var10[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var9.isAndroid;
            var9 = var8.bind(var9)();
            var8 = -6;
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var8 = -5;
case 21:
            var2['marginHorizontal'] = var8;
            var1['inputFlat'] = var2;
            var2 = {};
            var2['backgroundColor'] = var5;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var2['paddingRight'] = var4;
            var1['floatingTypingWrapper'] = var2;
            var2 = {};
            var4 = arg3;
            var5 = -var4;
            var4 = 2;
            var4 = var5 / var4;
            var2['marginTop'] = var4;
            var1['floatingScrimOverlap'] = var2;
            var2 = {};
            var2['overflow'] = var3;
            var1['overflowVisible'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var21 = var1.isResourceChannel;
            var10 = var1.screenIndex;
            var61 = var1.setNoExtractUI;
            var44 = var1.secondaryTextFieldRef;
            var41 = var1.threadCreationCallback;
            var8 = var1.onJumpToPresent;
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
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 26;
            var1 = var3[var1];
            var9 = var7.bind(var5)(var1);
            var6 = var9.useMobileVisualRefreshConfig;
            var1 = {};
            var12 = 'ChatInput';
            var1['location'] = var12;
            var1 = var6.bind(var9)(var1);
            var48 = var1.enabled;
            var20 = var1.chatInputFloating;
            var _closure2_slot1 = var20;
            var1 = 27;
            var6 = var3[var1];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useGradientValue;
            var1 = var3[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var6.bind(var9)(var1);
            var12 = 23;
            var6 = var3[var12];
            var14 = var7.bind(var5)(var6);
            var13 = var14.useToken;
            var9 = _closure1_slot1;
            var19 = 21;
            var6 = var3[var19];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var54 = var13.bind(var14)(var6);
            var _closure2_slot2 = var54;
            var6 = var3[var12];
            var14 = var7.bind(var5)(var6);
            var13 = var14.useToken;
            var6 = var3[var19];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_SEND_BUTTON_HEIGHT;
            var6 = var13.bind(var14)(var6);
            var6 = var6 - var54;
            var55 = 2;
            var39 = var6 / var55;
            var6 = var3[var12];
            var14 = var7.bind(var5)(var6);
            var13 = var14.useToken;
            var6 = var3[var19];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var14 = var13.bind(var14)(var6);
            var6 = _closure1_slot37;
            var37 = var6.bind(var5)(var1, var20, var14);
            var6 = var3[var12];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useToken;
            var3 = var3[var19];
            var3 = var9.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var51 = var6.bind(var7)(var3);
            var13 = null;
            if(!(var13 != var1)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var51 = var1;
case 23:
            var15 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = var3[var12];
            var7 = var15.bind(var5)(var1);
            var6 = var7.useToken;
            var16 = _closure1_slot1;
            var1 = var3[var19];
            var1 = var16.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED;
            var1 = var6.bind(var7)(var1);
            var6 = var3[var12];
            var9 = var15.bind(var5)(var6);
            var7 = var9.useToken;
            var6 = var3[var19];
            var6 = var16.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT;
            var7 = var7.bind(var9)(var6);
            var6 = var3[var12];
            var17 = var15.bind(var5)(var6);
            var9 = var17.useToken;
            var6 = var3[var19];
            var6 = var16.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM;
            var9 = var9.bind(var17)(var6);
            var6 = var3[var12];
            var15 = var15.bind(var5)(var6);
            var6 = var15.useToken;
            var3 = var3[var19];
            var3 = var16.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var3 = var6.bind(var15)(var3);
            _closure2_slot3 = var3;
            var6 = _closure1_slot6;
            var16 = var6.useMemo;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var57 = var16.bind(var6)(var3, var15);
            var3 = var6.useRef;
            var3 = var3.bind(var6)(var20);
            _closure2_slot4 = var3;
            var3['current'] = var20;
            var3 = var6.useState;
            var28 = false;
            var6 = var3.bind(var6)(var28);
            var3 = _closure1_slot5;
            var3 = var3.bind(var5)(var6, var55);
            var22 = 0;
            var45 = var3[var22];
            var59 = 1;
            var3 = var3[var59];
            _closure2_slot5 = var3;
            if(var20) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var16 = _closure1_slot7;
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var6 = _closure1_slot1;
            var15 = _closure1_slot3;
            var3 = 28;
            var3 = var15[var3];
            var16 = var6.bind(var5)(var3);
case 27:
            var3 = var13 != var41;
            _closure2_slot6 = var3;
            var6 = var11.isPrivate;
            var24 = var6.bind(var11)();
            if(!var24) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var24 = !var3;
case 28:
            var15 = _closure1_slot9;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var15 = var15.bind(var5)(var6);
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var6 = 29;
            var6 = var18[var6];
            var18 = var17.bind(var5)(var6);
            var17 = var18.useTypingUserIds;
            var6 = var11.id;
            var18 = var17.bind(var18)(var6, var59);
            var6 = _closure1_slot20;
            var6 = var6.bind(var5)(var10);
            var36 = var20;
            if(!var20) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var17 = var11.rateLimitPerUser;
            var17 = var17 > var22;
            if(var17) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var18 = var18.length;
            var17 = var18 > var22;
case 32:
            var36 = var17;
case 30:
            if(!var36) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var36 = !var6;
case 34:
            var6 = _closure1_slot19;
            var6 = var6.bind(var5)(var10);
            var49 = var14;
            if(!var6) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var49 = var9;
case 36:
            var52 = var7;
            if(!var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var52 = var1;
case 38:
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 30;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot15;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var4 = _closure1_slot15;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var32 = var17.bind(var18)(var14, var9);
            _closure2_slot7 = var32;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot11;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = _closure1_slot11;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 40:
                    return var1;
                }
            };
            var31 = var17.bind(var18)(var14, var9);
            _closure2_slot8 = var31;
            var1 = var1[var6];
            var14 = var7.bind(var5)(var1);
            var9 = var14.useStateFromStores;
            var1 = _closure1_slot17;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var4 = _closure1_slot17;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot14;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 44:
                    return var1;
case 42:
                    var1 = false;
                    return var1;
                }
            };
            var14 = var9.bind(var14)(var7, var1);
            var17 = _closure1_slot6;
            var9 = var17.useMemo;
            var1 = var11.id;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var3;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot6;
                    var5 = _closure1_slot14;
                    if(var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var1 = var5.ChannelMessage;
                    _fun0007_ip = 48; continue _fun0007;
case 46:
                    var1 = var5.FirstThreadMessage;
case 48:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var47 = var9.bind(var17)(var1, var7);
            if(!(var13 != var32)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var47 = var32;
case 49:
            var7 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = var18[var6];
            var22 = var7.bind(var5)(var1);
            var17 = var22.useStateFromStoresObject;
            var1 = _closure1_slot16;
            var9 = new Array(1);
            var9[0] = var1;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var3;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = _closure1_slot16;
                    var6 = var7.can;
                    var2 = _closure1_slot29;
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
                    if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var11 = _closure1_slot16;
                    var7 = var11.can;
                    var3 = _closure1_slot29;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 51:
                    var7 = _closure1_slot16;
                    var4 = var7.can;
                    var3 = _closure1_slot29;
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var11 = _closure2_slot0;
                    var3 = var4.bind(var7)(var3, var11);
                    var4 = var11.isPrivate;
                    var4 = var4.bind(var11)();
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 31;
                    var7 = var7[var1];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var1 = var7.computeIsReadOnlyThread;
                    var1 = var1.bind(var7)(var11);
                    var7 = _closure2_slot6;
                    if(var7) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var7 = var4;
                    if(var4) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var7 = var10;
case 55:
                    var3 = var7;
case 53:
                    var3 = !var3;
                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var3 = var1;
case 57:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    if(!var9) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var9 = !var3;
case 61:
                    var7 = var9;
case 59:
                    if(!var7) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var9 = _closure2_slot6;
                    var7 = !var9;
case 63:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var7 = var8;
case 65:
                    if(!var7) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var7 = !var3;
case 67:
                    if(!var7) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var8 = _closure2_slot6;
                    var7 = !var8;
case 69:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                    var4 = var6;
case 71:
                    if(!var4) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var4 = !var3;
case 73:
                    if(!var4) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var5 = _closure2_slot6;
                    var4 = !var5;
case 75:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var1 = var17.bind(var22)(var9, var1, var7);
            var26 = var1.canMentionEveryone;
            var27 = var1.canUpload;
            var35 = var1.canSendVoiceMessage;
            var7 = var1.editable;
            _closure2_slot9 = var7;
            var9 = var1.canCreateThreads;
            var17 = _closure1_slot1;
            var1 = 32;
            var1 = var18[var1];
            var1 = var17.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var46 = var1.analyticsLocations;
            var22 = var3;
            if(var22) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var22 = var13 != var32;
case 77:
            if(var22) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 31;
            var1 = var18[var1];
            var17 = var17.bind(var5)(var1);
            var1 = var17.getIsActiveChannelOrUnarchivableThread;
            var1 = var1.bind(var17)(var11);
            var22 = !var1;
case 79:
            var23 = var13 != var31;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 31;
            var1 = var18[var1];
            var17 = var17.bind(var5)(var1);
            var1 = var17.useCanStartThread;
            var64 = var1.bind(var17)(var11);
            if(!var64) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var1 = _closure1_slot25;
            var18 = var1.GUILD_THREADS_ONLY;
            var17 = var18.has;
            var1 = var11.type;
            var1 = var17.bind(var18)(var1);
            var64 = !var1;
case 81:
            if(!var64) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var64 = !var3;
case 83:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = 33;
            var1 = var18[var1];
            var17 = var17.bind(var5)(var1);
            var1 = var17.useCanPostPollsInChannel;
            var50 = var1.bind(var17)(var11);
            if(!var50) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var50 = !var3;
case 85:
            var17 = _closure1_slot0;
            var1 = _closure1_slot3;
            var12 = var1[var12];
            var17 = var17.bind(var5)(var12);
            var12 = var17.useToken;
            var18 = _closure1_slot1;
            var1 = var1[var19];
            var1 = var18.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_PILL_BORDER_WIDTH;
            var53 = var12.bind(var17)(var1);
            if(var48) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var12 = _closure1_slot0;
            var17 = _closure1_slot3;
            var1 = 34;
            var1 = var17[var1];
            var12 = var12.bind(var5)(var1);
            var1 = var12.getChatInputMinHeight;
            var12 = var1.bind(var12)();
            _fun0003_ip = 89; continue _fun0003;
case 87:
            var1 = var55 * var53;
            var12 = var54 - var1;
case 89:
            _closure2_slot10 = var12;
            var18 = _closure1_slot0;
            var17 = _closure1_slot3;
            var1 = 35;
            var17 = var17[var1];
            var19 = var18.bind(var5)(var17);
            var18 = var19.useSharedValue;
            var17 = var12;
            if(!var20) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var17 = var54;
case 90:
            var30 = var18.bind(var19)(var17);
            _closure2_slot11 = var30;
            var19 = _closure1_slot6;
            var18 = var19.useEffect;
            var17 = new Array(4);
            var17[0] = var20;
            var17[1] = var54;
            var17[2] = var12;
            var17[3] = var30;
            var12 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var1 = _closure2_slot1;
                    if(var1) { _fun0009_ip = 92; continue _fun0009 }
case 93:
                    var1 = _closure2_slot10;
                    _fun0009_ip = 94; continue _fun0009;
case 92:
                    var1 = _closure2_slot2;
case 94:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var18.bind(var19)(var12, var17);
            var17 = _closure1_slot1;
            var18 = _closure1_slot3;
            var12 = 36;
            var12 = var18[var12];
            var12 = var17.bind(var5)(var12);
            var43 = var12.bind(var5)();
            var17 = _closure1_slot12;
            var12 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var29 = var17.bind(var5)(var12);
            var42 = !var3;
            var56 = var42;
            if(var3) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var12 = 37;
            var12 = var18[var12];
            var17 = var17.bind(var5)(var12);
            var12 = var17.getIsAppLauncherEnabled;
            var56 = var12.bind(var17)(var11);
case 95:
            var12 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = var17[var6];
            var19 = var12.bind(var5)(var6);
            var18 = var19.useStateFromStores;
            var6 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getActiveCommand;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var58 = var18.bind(var19)(var12, var6);
            var12 = _closure1_slot1;
            var6 = 38;
            var6 = var17[var6];
            var12 = var12.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var11;
            var17 = !var7;
            var6['isReadonly'] = var17;
            var6['isCreatingThread'] = var3;
            var6 = var12.bind(var5)(var6);
            var62 = var6.placeholder;
            var63 = var6.accessibilityLabel;
            var60 = 8;
            if(!var48) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var60 = 5;
case 97:
            var12 = _closure1_slot0;
            var33 = _closure1_slot3;
            var6 = var33[var1];
            var18 = var12.bind(var5)(var6);
            var17 = var18.useAnimatedStyle;
            var6 = function ze() {
                var1 = {};
                var3 = _closure2_slot11;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['minHeight'] = var2;
                return var1;
            };
            var19 = {};
            var19['textFieldHeight'] = var30;
            var6['__closure'] = var19;
            var19 = 11048691841625.0;
            var6['__workletHash'] = var19;
            var19 = _closure1_slot38;
            var6['__initData'] = var19;
            var38 = var17.bind(var18)(var6);
            var40 = _closure1_slot6;
            var6 = var40.useRef;
            var18 = var6.bind(var40)(var13);
            var19 = 39;
            var6 = var33[var19];
            var17 = var12.bind(var5)(var6);
            var12 = var17.useRefreshChatInputCoachmark;
            var6 = {};
            var25 = !var7;
            var6['disabled'] = var25;
            var17 = var12.bind(var17)(var6);
            var6 = _closure1_slot1;
            var12 = 40;
            var12 = var33[var12];
            var25 = var6.bind(var5)(var12);
            var12 = {};
            var34 = {};
            var34['analyticsLocations'] = var46;
            var34['canUpload'] = var27;
            var34['channel'] = var11;
            var34['defaultValue'] = var47;
            var34['hasAttachmentsToUpload'] = var14;
            var34['pendingEdit'] = var32;
            var34['pendingReply'] = var31;
            var34['screenIndex'] = var10;
            var34['secondaryTextFieldRef'] = var44;
            var34['threadCreationCallback'] = var41;
            var12['chatInputProps'] = var34;
            var12['chatInputTextFieldHeight'] = var30;
            var30 = arg2;
            var12['ref'] = var30;
            var44 = var25.bind(var5)(var12);
            _closure2_slot12 = var44;
            var30 = var40.useEffect;
            var25 = new Array(1);
            var25[0] = var44;
            var12 = function() {
                var2 = _closure2_slot12;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot12;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var12 = var30.bind(var40)(var12, var25);
            var30 = var40.useEffect;
            var25 = new Array(4);
            var25[0] = var44;
            var25[1] = var11;
            var25[2] = var32;
            var25[3] = var31;
            var12 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot12;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0010_ip = 99; continue _fun0010 }
case 40:
                    var5 = _closure2_slot8;
                    var3 = var2 != var5;
case 99:
                    if(var3) { _fun0010_ip = 44; continue _fun0010 }
case 48:
                    var5 = var2 == var4;
                    if(!var5) { _fun0010_ip = 100; continue _fun0010 }
case 45:
                    var6 = _closure2_slot7;
                    var5 = var2 != var6;
case 100:
                    var3 = var5;
case 44:
                    if(!var3) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                    var3 = _closure2_slot12;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 101; continue _fun0010 }
case 103:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 101:
                    var3 = _closure2_slot12;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0010_ip = 104; continue _fun0010 }
case 105:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 41;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0010_ip = 106; continue _fun0010 }
case 104:
                    var3 = _closure2_slot7;
                    if(!(var4 !== var3)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                    var3 = _closure2_slot12;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 107; continue _fun0010 }
case 15:
                    var4 = var5.setText;
                    var3 = _closure2_slot7;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0010_ip = 109; continue _fun0010 }
case 54:
                    var3 = _closure2_slot7;
case 109:
                    var3 = var4.bind(var5)(var3);
                    _fun0010_ip = 107; continue _fun0010;
case 106:
                    var3 = _closure2_slot12;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0010_ip = 107; continue _fun0010 }
case 110:
                    var2 = var3.setText;
                    var1 = _closure2_slot12;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var30.bind(var40)(var12, var25);
            var30 = var40.useEffect;
            var25 = new Array(1);
            var25[0] = var44;
            var12 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0011_ip = 3; continue _fun0011 }
case 111:
                        var5 = var3.channelId;
case 3:
                        var4 = _closure2_slot12;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0011_ip = 45; continue _fun0011 }
case 99:
                        var6 = var6.channel;
                        var4 = var6.id;
case 45:
                        if(!(var5 === var4)) { _fun0011_ip = 103; continue _fun0011 }
case 112:
                        var3 = _closure2_slot12;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0011_ip = 103; continue _fun0011 }
case 14:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 103:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 42;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = _closure1_slot27;
                var2 = var2.TEXTAREA_FOCUS;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 42;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot27;
                    var3 = var2.TEXTAREA_FOCUS;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var12 = var30.bind(var40)(var12, var25);
            var30 = var40.useMemo;
            var25 = new Array(1);
            var25[0] = var44;
            var12 = function() {
                var1 = {};
                var3 = function handleBlur(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var5 = var1.text;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 43;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = false;
                        var2 = var2.bind(var3)(var8);
                        var4 = _closure2_slot13;
                        var2 = var4.handleTextOrFocusChange;
                        var2 = var2.bind(var4)(var5, var8);
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 113:
                        var4 = _closure2_slot12;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0012_ip = 115; continue _fun0012 }
case 6:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 115:
                        var4 = _closure2_slot12;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0012_ip = 116; continue _fun0012 }
case 117:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot12;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot12;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 116:
                        var3 = _closure2_slot12;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0012_ip = 118; continue _fun0012 }
case 119:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 118:
                        return var1;
                    }
                };
                var1['handleBlur'] = var3;
                var3 = function handleFocus(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var6 = var1.start;
                        var5 = var1.end;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 43;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = true;
                        var2 = var2.bind(var3)(var8);
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot13;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 120:
                        var3 = _closure2_slot12;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 109; continue _fun0013 }
case 17:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 109:
                        var3 = _closure2_slot12;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 122; continue _fun0013 }
case 123:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot12;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 122:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot12;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot12;
                    var1 = var1.state;
                    var1 = var1.current;
                    var4 = var1.textFieldHeight;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 34;
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
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 124; continue _fun0014 }
case 125:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 124:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayoutOfInputContainer'] = var3;
                var3 = function handleLayout(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var4 = var1.width;
                        var2 = 0;
                        var1 = var2 !== var3;
                        if(!var1) { _fun0015_ip = 126; continue _fun0015 }
case 127:
                        var1 = var2 !== var4;
case 126:
                        if(!var1) { _fun0015_ip = 128; continue _fun0015 }
case 129:
                        var2 = _closure2_slot12;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0015_ip = 128; continue _fun0015 }
case 42:
                        var1 = _closure2_slot12;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 128:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0016_ip = 130; continue _fun0016 }
case 94:
                        var1 = _closure2_slot12;
                        var1 = var1.state;
                        var1 = var1.current;
                        var3 = var1.textFieldHeight;
                        var2 = var3.set;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 34;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var1 = var4.getChatInputHeightAnimationTiming;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
case 130:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot18;
                    var1 = _closure2_slot12;
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
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.data;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0017_ip = 133; continue _fun0017 }
case 134:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 133:
                        if(var2) { _fun0017_ip = 131; continue _fun0017 }
case 135:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot12;
                        var1 = var1.props;
                        var1 = var1.current;
                        var1 = var1.channel;
                        var1 = var2.bind(var3)(var4, var1);
case 131:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePasteCommand'] = var3;
                var5 = _closure1_slot4;
                var4 = undefined;
                var3 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 136; continue _fun0018 }
case 43:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 137:
                            return var4;
case 138:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                            var3 = _closure2_slot12;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0018_ip = 141; continue _fun0018 }
case 142:
                            var3 = _closure2_slot12;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0018_ip = 141; continue _fun0018 }
case 143:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 44;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 144:
                            return var3;
case 145:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 45;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot12;
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
                            var10 = 46;
                            var10 = var12[var10];
                            var10 = var11.bind(var4)(var10);
                            var10 = var10.UploadPlatform;
                            var10 = var10.REACT_NATIVE;
                            var9['platform'] = var10;
                            var10 = 47;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var11.v4;
                            var10 = var10.bind(var11)();
                            var9['id'] = var10;
                            var5['file'] = var9;
                            var8 = _closure1_slot14;
                            var8 = var8.ChannelMessage;
                            var5['draftType'] = var8;
                            var5 = var6.bind(var7)(var5);
case 141:
                            return var4;
case 146:
                            return var3;
case 139:
                            return var2;
case 136:
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
                var3 = function handlePressAction(arg1, arg2, arg3) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var2 = arg2;
                        var5 = arg3;
                        var1 = _closure1_slot23;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 148; continue _fun0019 }
case 149:
                        var1 = _closure1_slot23;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0019_ip = 150; continue _fun0019 }
case 138:
                        var1 = _closure1_slot23;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 151; continue _fun0019 }
case 152:
                        var1 = _closure1_slot23;
                        var1 = var1.CAMERA;
                        if(!(var1 !== var2)) { _fun0019_ip = 153; continue _fun0019 }
case 154:
                        var1 = _closure1_slot23;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0019_ip = 155; continue _fun0019 }
case 128:
                        var1 = _closure1_slot23;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0019_ip = 156; continue _fun0019 }
case 157:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 48;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 55;
                        var1 = var7[var1];
                        var7 = var3.bind(var2)(var1);
                        var3 = var7.handleSelectThread;
                        var2 = _closure2_slot12;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot12;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0019_ip = 156; continue _fun0019;
case 155:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 57;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.markPotentialBadState;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 48;
                        var8 = var7[var1];
                        var9 = var2.bind(var3)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 22;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0019_ip = 158; continue _fun0019 }
case 159:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 56;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 158:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 55;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot12;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot12;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0019_ip = 156; continue _fun0019;
case 153:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 48;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 55;
                        var1 = var7[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleCameraDialog;
                        var1 = {};
                        var7 = _closure2_slot12;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot32;
                        var7 = var7.CAMERA_BUTTON;
                        var1['previewType'] = var7;
                        var7 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 56;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var7;
                        var7 = function onRestoreKeyboard() {
                            var3 = _closure2_slot13;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 50;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.SYSTEM;
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['onRestoreKeyboard'] = var7;
                        var7 = function onSelectFiles(arg1) {
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 55;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot12;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 46;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var3 = var2.IMAGE_PICKER;
                            var2 = arg1;
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        };
                        var1['onSelectFiles'] = var7;
                        var1 = var2.bind(var3)(var1);
                        _fun0019_ip = 156; continue _fun0019;
case 151:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 48;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 55;
                        var1 = var7[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var7 = _closure2_slot12;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot28;
                        var1['uploadLimit'] = var7;
                        var7 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 56;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var7;
                        var7 = function onRestoreKeyboard() {
                            var3 = _closure2_slot13;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 50;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.SYSTEM;
                            var1['type'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1['onRestoreKeyboard'] = var7;
                        var6 = function onSelectFiles(arg1) {
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 55;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot12;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 46;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var3 = var2.IMAGE_PICKER;
                            var2 = arg1;
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        };
                        var1['onSelectFiles'] = var6;
                        var6 = _closure1_slot14;
                        var6 = var6.ChannelMessage;
                        var1['draftType'] = var6;
                        var1 = var2.bind(var3)(var1);
                        _fun0019_ip = 156; continue _fun0019;
case 150:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 48;
                        var7 = var3[var1];
                        var6 = undefined;
                        var8 = var2.bind(var6)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 51;
                        var1 = var3[var1];
                        var9 = var2.bind(var6)(var1);
                        var8 = var9.trackWithMetadata;
                        var1 = _closure1_slot24;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 49;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot26;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot12;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot12;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.guild_id;
                        var1['guild_id'] = var11;
                        var1 = var9.bind(var10)(var8, var1);
                        var8 = _closure1_slot2;
                        var1 = 52;
                        var1 = var3[var1];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.dismissNewActivityIndicator;
                        var1 = var1.bind(var8)();
                        var1 = 53;
                        var1 = var3[var1];
                        var3 = var2.bind(var6)(var1);
                        var2 = var3.setAppLauncherA11yFocusReturnRef;
                        var8 = null;
                        var9 = var8 != var5;
                        var1 = null;
                        if(!var9) { _fun0019_ip = 160; continue _fun0019 }
case 161:
                        var1 = var5;
case 160:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot13;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 50;
                        var5 = var11[var5];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.KeyboardTypes;
                        var5 = var5.APP_LAUNCHER;
                        var1['type'] = var5;
                        var5 = {};
                        var9 = _closure1_slot30;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 54;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot12;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0019_ip = 162; continue _fun0019 }
case 163:
                        var6 = var7.name;
case 162:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0019_ip = 156; continue _fun0019;
case 148:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 48;
                        var2 = var3[var1];
                        var6 = undefined;
                        var5 = var7.bind(var6)(var2);
                        var2 = var5.triggerHapticFeedback;
                        var1 = var3[var1];
                        var1 = var7.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var2.bind(var5)(var1);
                        var2 = _closure1_slot1;
                        var1 = 49;
                        var1 = var3[var1];
                        var7 = var2.bind(var6)(var1);
                        var5 = var7.track;
                        var1 = _closure1_slot24;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot26;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot12;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot12;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var7 = var5.bind(var6)(var3);
                        var3 = var7.getKeyboardType;
                        var3 = var3.bind(var7)();
                        var7 = 50;
                        var2 = var2[var7];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.APP_LAUNCHER;
                        if(!(var3 !== var2)) { _fun0019_ip = 166; continue _fun0019 }
case 164:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var8 = var5.bind(var6)(var3);
                        var3 = var8.getKeyboardType;
                        var3 = var3.bind(var8)();
                        var10 = 50;
                        var2 = var2[var10];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.MEDIA;
                        if(!(var3 === var2)) { _fun0019_ip = 167; continue _fun0019 }
case 89:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0019_ip = 167; continue _fun0019 }
case 168:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 167:
                        var5 = _closure2_slot13;
                        var3 = var5.handleToggleKeyboard;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var10];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.KeyboardTypes;
                        var8 = var8.MEDIA;
                        var2['type'] = var8;
                        var8 = {};
                        var9 = _closure1_slot33;
                        var9 = var9.CHAT;
                        var8['target'] = var9;
                        var2['context'] = var8;
                        var2 = var3.bind(var5)(var2);
                        _fun0019_ip = 156; continue _fun0019;
case 166:
                        var3 = _closure2_slot13;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var7];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.APP_LAUNCHER;
                        var1['type'] = var4;
                        var1 = var2.bind(var3)(var1);
case 156:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressAction'] = var3;
                var3 = function handlePollsPress() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 48;
                    var6 = var4[var2];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var6.bind(var7)(var2);
                    var6 = _closure1_slot1;
                    var2 = 49;
                    var2 = var4[var2];
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot24;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot26;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot12;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot12;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.guild_id;
                    var2['guild_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 56;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.dismissKeyboard;
                    var2 = var2.bind(var6)();
                    var2 = 58;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot12;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot13;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 50;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.SYSTEM;
                        var1['type'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onCancel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handlePollsPress'] = var3;
                var3 = function handleAttachPress() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 48;
                    var7 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var7.bind(var8)(var2);
                    var2 = 55;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var7 = _closure2_slot12;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot28;
                    var2['uploadLimit'] = var6;
                    var6 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2['onDismissKeyboard'] = var6;
                    var6 = function onRestoreKeyboard() {
                        var3 = _closure2_slot13;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 50;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.SYSTEM;
                        var1['type'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onRestoreKeyboard'] = var6;
                    var5 = function onSelectFiles(arg1) {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 55;
                        var2 = var7[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.addImagesFromPicker;
                        var2 = _closure2_slot12;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var4 = var2.id;
                        var2 = 46;
                        var2 = var7[var2];
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.UploadOrigin;
                        var3 = var2.FILE_ATTACHMENT;
                        var2 = arg1;
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var2['onSelectFiles'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleAttachPress'] = var3;
                var3 = function handlePressExpression(arg1) {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 59;
                    var3 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot31;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot13;
                    var3 = var4.handleToggleKeyboard;
                    var2 = {};
                    var5 = 50;
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
                    var1 = _closure2_slot12;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.handleSend;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressSend'] = var3;
                var3 = function handleSelectionOrTextChange(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.nativeEvent;
                        var10 = var2.start;
                        var9 = var2.end;
                        var1 = var2.text;
                        var5 = var2.editId;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot13;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0020_ip = 117; continue _fun0020 }
case 169:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 117:
                        var6 = _closure2_slot12;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 110; continue _fun0020 }
case 170:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot12;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 110:
                        var6 = _closure2_slot12;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 171:
                        if(!(var4 !== var5)) { _fun0020_ip = 173; continue _fun0020 }
case 174:
                        var4 = _closure2_slot12;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot12;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0020_ip = 175; continue _fun0020 }
case 176:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 175:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 60;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 173:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSelectionOrTextChange'] = var3;
                var3 = function handleTapAction(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.tapAction;
                        var3 = var2.action;
                        var1 = 'tapAttachment';
                        if(!(var1 === var3)) { _fun0021_ip = 117; continue _fun0021 }
case 127:
                        var1 = _closure2_slot12;
                        var1 = var1.chatInput;
                        var3 = var1.current;
                        var1 = var3.blur;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 61;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openCommandAttachmentPreview;
                        var3 = _closure2_slot12;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot12;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0021_ip = 115; continue _fun0021 }
case 177:
                        var1 = function() {
                            var1 = _closure2_slot12;
                            var1 = var1.chatInput;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
case 115:
                        var12 = var6;
                        var11 = var4;
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 117:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapAction'] = var3;
                var3 = function handleTextOrFocusChange(arg1, arg2) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var1 = var3.length;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0022_ip = 45; continue _fun0022 }
case 178:
                        if(var4) { _fun0022_ip = 179; continue _fun0022 }
case 180:
                        var5 = var3.length;
                        var1 = _closure2_slot12;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.textPrev;
                        var1 = var1.length;
                        if(!(!(var5 > var1))) { _fun0022_ip = 179; continue _fun0022 }
case 45:
                        var1 = var3.length;
                        if(!(var2 === var1)) { _fun0022_ip = 61; continue _fun0022 }
case 181:
                        var1 = _closure2_slot12;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 182; continue _fun0022 }
case 183:
                        var5 = var6.onShowActions;
                        var5 = var5.bind(var6)(var4);
case 182:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 61; continue _fun0022 }
case 184:
                        var1 = var2.onShowActions;
                        var1 = var1.bind(var2)(var4);
                        _fun0022_ip = 61; continue _fun0022;
case 179:
                        var5 = _closure1_slot10;
                        var2 = var5.isOpen;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0022_ip = 185; continue _fun0022 }
case 186:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 62;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
case 185:
                        var1 = _closure2_slot12;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 11; continue _fun0022 }
case 187:
                        var5 = var6.onDismissActions;
                        var5 = var5.bind(var6)(var4);
case 11:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 61; continue _fun0022 }
case 188:
                        var1 = var2.onDismissActions;
                        var1 = var1.bind(var2)(var4);
case 61:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 63;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getMaxMessageLength;
                        var7 = var2.bind(var5)();
                        var5 = _closure2_slot12;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0022_ip = 146; continue _fun0022 }
case 75:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 146:
                        if(!var5) { _fun0022_ip = 189; continue _fun0022 }
case 139:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 49;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot24;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 189:
                        var4 = _closure2_slot12;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot12;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot12;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['text'] = var3;
                        return var1;
                    }
                };
                var1['handleTextOrFocusChange'] = var3;
                var3 = function handleTextFlushed(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var3 = var1.text;
                        var4 = var1.requestId;
                        var1 = _closure2_slot12;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0023_ip = 112; continue _fun0023 }
case 140:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 112:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTextFlushed'] = var3;
                var2 = function handleToggleKeyboard(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot10;
                        var1 = var3.isOpen;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0024_ip = 124; continue _fun0024 }
case 2:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 62;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 124:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 50;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0024_ip = 190; continue _fun0024 }
case 191:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 36;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0024_ip = 190; continue _fun0024 }
case 192:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0024_ip = 8; continue _fun0024;
case 190:
                        var2 = _closure2_slot12;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 8:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var41 = var30.bind(var40)(var12, var25);
            _closure2_slot13 = var41;
            var30 = var40.useCallback;
            var25 = new Array(2);
            var25[0] = var3;
            var25[1] = var44;
            var12 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = var1.width;
                    var2 = 0;
                    var1 = var2 !== var3;
                    if(!var1) { _fun0025_ip = 126; continue _fun0025 }
case 127:
                    var1 = var2 !== var4;
case 126:
                    if(!var1) { _fun0025_ip = 193; continue _fun0025 }
case 129:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0025_ip = 193; continue _fun0025 }
case 194:
                    var1 = _closure2_slot12;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 193:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var30.bind(var40)(var12, var25);
            var34 = var40.useCallback;
            var30 = function() {
                var1 = true;
                return var1;
            };
            var25 = new Array(0);
            var34 = var34.bind(var40)(var30, var25);
            var30 = var40.useCallback;
            var25 = new Array(2);
            var25[0] = var7;
            var25[1] = var44;
            var4 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0026_ip = 195; continue _fun0026 }
case 43:
                    var1 = _closure2_slot12;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.openSystemKeyboard;
                    var1 = var1.bind(var2)();
case 195:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var30.bind(var40)(var4, var25);
            var25 = _closure1_slot34;
            var4 = 64;
            var4 = var33[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['canUpload'] = var27;
            var33 = var11.id;
            var4['channelId'] = var33;
            var4['screenIndex'] = var10;
            var25 = var25.bind(var5)(var6, var4);
            var40 = null;
            if(!var7) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var33 = _closure1_slot34;
            var6 = _closure1_slot1;
            var65 = _closure1_slot3;
            var4 = 65;
            var4 = var65[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var65 = var44.chatInputActions;
            var4['ref'] = var65;
            var4['channel'] = var11;
            var65 = var41.handlePressAction;
            var4['onPressAction'] = var65;
            var4['canStartThreads'] = var64;
            var4['isAppLauncherEnabled'] = var56;
            var4['keyboardType'] = var43;
            var56 = var27;
            if(!var27) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var56 = var13 == var58;
case 198:
            if(var56) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var56 = var50;
case 200:
            var56 = !var56;
            var4['shouldPhotosButtonBeDisabled'] = var56;
            var4['canUpload'] = var27;
            var56 = var42;
            if(var3) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var64 = _closure1_slot0;
            var65 = _closure1_slot3;
            var58 = 66;
            var58 = var65[var58];
            var64 = var64.bind(var5)(var58);
            var58 = var64.isPremiumGiftingSupported;
            var56 = var58.bind(var64)();
case 202:
            var4['shouldShowGiftButton'] = var56;
            var4['canPostPolls'] = var50;
            var50 = var41.handlePollsPress;
            var4['onPollsPress'] = var50;
            var50 = var41.handleAttachPress;
            var4['onAttachPress'] = var50;
            var4['photosButtonExternalRef'] = var18;
            var40 = var33.bind(var5)(var6, var4);
case 196:
            var6 = _closure1_slot35;
            var50 = _closure1_slot1;
            var58 = _closure1_slot3;
            var1 = var58[var1];
            var1 = var50.bind(var5)(var1);
            var4 = var1.View;
            var1 = {};
            var56 = var37.inputDefault;
            var33 = new Array(2);
            var33[0] = var56;
            var33[1] = var38;
            var1['style'] = var33;
            var56 = _closure1_slot34;
            var33 = 67;
            var33 = var58[var33];
            var38 = var50.bind(var5)(var33);
            var33 = {};
            var33['accessibilityLabel'] = var63;
            var63 = _closure1_slot0;
            var64 = 68;
            var64 = var58[var64];
            var64 = var63.bind(var5)(var64);
            var64 = var64.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var33['customKeyboard'] = var64;
            var33['editable'] = var7;
            var64 = var41.handleFocus;
            var33['onBeginFocus'] = var64;
            var64 = var41.handleBlur;
            var33['onEndBlur'] = var64;
            var64 = var41.handleChangeContentSize;
            var33['onChangeContentSize'] = var64;
            var64 = var41.handleMaxHeightChanged;
            var33['onMaxHeightChanged'] = var64;
            var64 = var41.handleSelectionOrTextChange;
            var33['onSelectionOrTextChange'] = var64;
            var64 = var41.handleTextFlushed;
            var33['onTextFlushed'] = var64;
            var64 = var41.handlePasteImage;
            var33['onPasteImage'] = var64;
            var64 = var41.handlePasteCommand;
            var33['onPasteCommand'] = var64;
            var64 = var41.handleTapAction;
            var33['onTapAction'] = var64;
            var64 = var41.handlePressSend;
            var33['onRequestSend'] = var64;
            var33['placeholder'] = var62;
            var62 = var44.chatInputNative;
            var33['ref'] = var62;
            var33['setNoExtractUI'] = var61;
            var61 = 50;
            var62 = var58[var61];
            var62 = var63.bind(var5)(var62);
            var62 = var62.KeyboardTypes;
            var62 = var62.MEDIA;
            var62 = var43 !== var62;
            var33['shouldShowCursor'] = var62;
            var33['verticalInset'] = var60;
            var38 = var56.bind(var5)(var38, var33);
            var33 = new Array(2);
            var33[0] = var38;
            var56 = _closure1_slot34;
            var38 = 69;
            var38 = var58[var38];
            var50 = var50.bind(var5)(var38);
            var38 = {};
            var38['keyboardType'] = var43;
            var58 = var41.handleToggleKeyboard;
            var38['onSelectKeyboard'] = var58;
            var58 = var44.chatInputCover;
            var38['ref'] = var58;
            var38 = var56.bind(var5)(var50, var38);
            var33[1] = var38;
            var1['children'] = var33;
            var38 = var6.bind(var5)(var4, var1);
            if(var7) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var33 = null;
            if(!var3) { _fun0003_ip = 206; continue _fun0003 }
case 204:
            var6 = _closure1_slot34;
            var4 = _closure1_slot1;
            var50 = _closure1_slot3;
            var1 = 70;
            var1 = var50[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var50 = var44.chatInputSendButton;
            var1['ref'] = var50;
            var1['canSendVoiceMessage'] = var35;
            var1['channel'] = var11;
            var1['defaultValue'] = var47;
            if(!var14) { _fun0003_ip = 207; continue _fun0003 }
case 208:
            var14 = var27;
case 207:
            var1['hasPendingAttachments'] = var14;
            var14 = var13 != var32;
            var1['hasPendingEdit'] = var14;
            var14 = var41.handlePressSend;
            var1['onSendMessage'] = var14;
            var1['requireTextContent'] = var42;
            var33 = var6.bind(var5)(var4, var1);
case 206:
            var6 = _closure1_slot35;
            var4 = _closure1_slot7;
            var1 = {};
            var1['collapsable'] = var28;
            var1['onLayout'] = var12;
            var14 = _closure1_slot1;
            var27 = _closure1_slot3;
            var12 = 71;
            var12 = var27[var12];
            var14 = var14.bind(var5)(var12);
            var12 = {};
            var12['isCreatingThread'] = var3;
            var14 = var14.bind(var5)(var12);
            var12 = new Array(3);
            var12[0] = var14;
            var14 = var20;
            if(!var20) { _fun0003_ip = 209; continue _fun0003 }
case 210:
            var14 = var37.overflowVisible;
case 209:
            var12[1] = var14;
            var14 = var20;
            if(!var20) { _fun0003_ip = 211; continue _fun0003 }
case 212:
            var14 = var42;
case 211:
            if(!var14) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            var14 = var37.floatingScrimOverlap;
case 213:
            var12[2] = var14;
            var1['style'] = var12;
            var14 = var20;
            if(!var20) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var14 = !var36;
case 215:
            if(!var14) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            var35 = _closure1_slot34;
            var27 = _closure1_slot39;
            var12 = {};
            var12['gradientHeight'] = var49;
            var12['inline'] = var28;
            var12['scrimBase'] = var51;
            var14 = var35.bind(var5)(var27, var12);
case 217:
            var12 = new Array(15);
            var12[0] = var14;
            var14 = var20;
            if(!var20) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            var14 = var36;
case 219:
            if(!var14) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var49 = _closure1_slot34;
            var35 = _closure1_slot7;
            var27 = {};
            var50 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var58 = _closure1_slot0;
            var60 = _closure1_slot3;
            var56 = 24;
            var56 = var60[var56];
            var58 = var58.bind(var5)(var56);
            var56 = var58.hex2rgb;
            var58 = var56.bind(var58)(var51, var59);
            var56 = var51;
            if(!(var13 != var58)) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var56 = var58;
case 223:
            var50['backgroundColor'] = var56;
            var27['style'] = var50;
            var50 = 'none';
            var27['pointerEvents'] = var50;
            var14 = var49.bind(var5)(var35, var27);
case 221:
            var12[1] = var14;
            var35 = _closure1_slot34;
            var27 = _closure1_slot0;
            var49 = _closure1_slot3;
            var14 = 72;
            var14 = var49[var14];
            var14 = var27.bind(var5)(var14);
            var27 = var14.ChatInputAccessibilityDivider;
            var14 = {};
            var14 = var35.bind(var5)(var27, var14);
            var12[2] = var14;
            var14 = null;
            if(!var24) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var35 = _closure1_slot34;
            var27 = _closure1_slot1;
            var49 = _closure1_slot3;
            var24 = 73;
            var24 = var49[var24];
            var27 = var27.bind(var5)(var24);
            var24 = {};
            var24['channel'] = var11;
            var50 = '';
            var47 = var50 !== var47;
            if(var47) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var49 = var44.chatInput;
            var58 = var49.current;
            var56 = var13 == var58;
            var49 = undefined;
            if(var56) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var56 = var58.getText;
            var49 = var56.bind(var58)();
case 229:
            var47 = var50 !== var49;
case 227:
            var24['hasInputText'] = var47;
            var14 = var35.bind(var5)(var27, var24);
case 225:
            var12[3] = var14;
            var27 = _closure1_slot35;
            var24 = _closure1_slot7;
            var14 = {};
            var35 = var37.accessories;
            var14['style'] = var35;
            var47 = var20;
            if(!var20) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var47 = var36;
case 231:
            if(!var47) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var50 = _closure1_slot34;
            var49 = _closure1_slot39;
            var35 = {};
            var35['gradientHeight'] = var52;
            var52 = true;
            var35['inline'] = var52;
            var35['scrimBase'] = var51;
            var47 = var50.bind(var5)(var49, var35);
case 233:
            var35 = new Array(3);
            var35[0] = var47;
            var47 = null;
            if(var3) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var51 = _closure1_slot34;
            var50 = _closure1_slot1;
            var52 = _closure1_slot3;
            var49 = 74;
            var49 = var52[var49];
            var50 = var50.bind(var5)(var49);
            var49 = {};
            var49['channel'] = var11;
            var49['screenIndex'] = var10;
            var52 = undefined;
            if(!var20) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var58 = var37.floatingTypingWrapper;
            var56 = new Array(2);
            var56[0] = var58;
            var56[1] = var57;
            var52 = var56;
case 237:
            var49['wrapperStyle'] = var52;
            var47 = var51.bind(var5)(var50, var49);
case 235:
            var35[1] = var47;
            var49 = _closure1_slot0;
            var50 = _closure1_slot3;
            var47 = 22;
            var47 = var50[var47];
            var49 = var49.bind(var5)(var47);
            var47 = var49.isIOS;
            var49 = var47.bind(var49)();
            var47 = null;
            if(!var49) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var51 = _closure1_slot34;
            var50 = _closure1_slot1;
            var52 = _closure1_slot3;
            var49 = 75;
            var49 = var52[var49];
            var50 = var50.bind(var5)(var49);
            var49 = {};
            var52 = var11.id;
            var49['channelId'] = var52;
            var49['screenIndex'] = var10;
            var49['onJumpToPresent'] = var8;
            var47 = var51.bind(var5)(var50, var49);
case 239:
            var35[2] = var47;
            var14['children'] = var35;
            var14 = var27.bind(var5)(var24, var14);
            var12[4] = var14;
            var14 = null;
            if(!var21) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var35 = _closure1_slot34;
            var24 = _closure1_slot1;
            var27 = _closure1_slot3;
            var21 = 76;
            var21 = var27[var21];
            var27 = var24.bind(var5)(var21);
            var24 = {};
            var24['channel'] = var11;
            var21 = var11.id;
            var14 = var35.bind(var5)(var27, var24, var21);
case 241:
            var12[5] = var14;
            var35 = _closure1_slot34;
            var21 = _closure1_slot0;
            var27 = _closure1_slot3;
            var14 = 77;
            var14 = var27[var14];
            var14 = var21.bind(var5)(var14);
            var24 = var14.MemberActionsChatInputBannerGuardedOuter;
            var14 = {};
            var14['channel'] = var11;
            var14 = var35.bind(var5)(var24, var14);
            var12[6] = var14;
            var24 = _closure1_slot34;
            var14 = 78;
            var14 = var27[var14];
            var14 = var21.bind(var5)(var14);
            var21 = var14.DoubleTapToReactChatInputBanner;
            var14 = {};
            var14['channel'] = var11;
            var14 = var24.bind(var5)(var21, var14);
            var12[7] = var14;
            var14 = null;
            if(!var15) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var24 = _closure1_slot34;
            var21 = _closure1_slot1;
            var27 = _closure1_slot3;
            var15 = 79;
            var15 = var27[var15];
            var21 = var21.bind(var5)(var15);
            var15 = {};
            var27 = var11.id;
            var15['channelId'] = var27;
            var14 = var24.bind(var5)(var21, var15);
case 243:
            var12[8] = var14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var61];
            var14 = var15.bind(var5)(var14);
            var14 = var14.KeyboardTypes;
            var15 = var14.EXPRESSION;
            var14 = null;
            if(!(var43 !== var15)) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var24 = _closure1_slot34;
            var21 = _closure1_slot1;
            var27 = _closure1_slot3;
            var15 = 80;
            var15 = var27[var15];
            var21 = var21.bind(var5)(var15);
            var15 = {};
            var27 = var44.chatInputAutocomplete;
            var15['ref'] = var27;
            var15['analyticsLocations'] = var46;
            var15['channel'] = var11;
            var15['canMentionEveryone'] = var26;
            var15['keyboardType'] = var43;
            var26 = var41.handleChangeAutoCompleteVisibility;
            var15['onChangeAutoCompleteVisibility'] = var26;
            var15['commandsDisabled'] = var22;
            var15['canOnlyUseTextCommands'] = var23;
            var26 = var44.chatInput;
            var15['chatInputRef'] = var26;
            var15['screenIndex'] = var10;
            var14 = var24.bind(var5)(var21, var15);
case 245:
            var12[9] = var14;
            var14 = !var20;
            if(!var14) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var24 = _closure1_slot34;
            var21 = _closure1_slot1;
            var26 = _closure1_slot3;
            var15 = 81;
            var15 = var26[var15];
            var21 = var21.bind(var5)(var15);
            var15 = {};
            var15['channel'] = var11;
            var14 = var24.bind(var5)(var21, var15);
case 247:
            var12[10] = var14;
            var14 = !var20;
            if(!var14) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var24 = _closure1_slot34;
            var21 = _closure1_slot1;
            var26 = _closure1_slot3;
            var15 = 82;
            var15 = var26[var15];
            var21 = var21.bind(var5)(var15);
            var15 = {};
            var15['channel'] = var11;
            var26 = var44.chatInput;
            var15['chatInputRef'] = var26;
            var15['pendingEdit'] = var32;
            var15['pendingReply'] = var31;
            var14 = var24.bind(var5)(var21, var15);
case 249:
            var12[11] = var14;
            var21 = _closure1_slot34;
            var15 = _closure1_slot1;
            var24 = _closure1_slot3;
            var14 = 83;
            var14 = var24[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var24 = var44.chatInputAppCommandManager;
            var14['ref'] = var24;
            var14['canOnlyUseTextCommands'] = var23;
            var14['channel'] = var11;
            var23 = var44.chatInput;
            var14['chatInputRef'] = var23;
            var23 = var44.state;
            var14['chatInputStateRef'] = var23;
            var14['commandsDisabled'] = var22;
            var14 = var21.bind(var5)(var15, var14);
            var12[12] = var14;
            var15 = _closure1_slot34;
            var14 = {};
            var22 = var37.container;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var20;
            if(!var22) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var22 = var37.floatingContainer;
case 251:
            var21[1] = var22;
            var14['style'] = var21;
            var21 = var41.handleLayoutOfInputContainer;
            var14['onLayout'] = var21;
            var22 = _closure1_slot35;
            var21 = _closure1_slot36;
            var23 = {};
            if(var20) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var20 = new Array(2);
            var20[0] = var25;
            var27 = _closure1_slot35;
            var26 = _closure1_slot7;
            var24 = {};
            var35 = var37.containerInner;
            var24['style'] = var35;
            var24['collapsable'] = var28;
            var24['accessibilityElementsHidden'] = var29;
            var35 = undefined;
            if(!var29) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var35 = 'no-hide-descendants';
case 255:
            var24['importantForAccessibility'] = var35;
            var47 = var40;
            if(!var48) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var50 = _closure1_slot34;
            var49 = _closure1_slot7;
            var35 = {};
            var51 = var37.refreshButtonAlignment;
            var35['style'] = var51;
            var35['children'] = var40;
            var47 = var50.bind(var5)(var49, var35);
case 257:
            var35 = new Array(3);
            var35[0] = var47;
            var50 = _closure1_slot35;
            var49 = _closure1_slot7;
            var47 = {};
            var52 = var37.input;
            var51 = new Array(2);
            var51[0] = var52;
            var52 = {};
            var53 = var55 * var53;
            var53 = var54 - var53;
            var52['minHeight'] = var53;
            var51[1] = var52;
            var47['style'] = var51;
            var51 = new Array(2);
            var51[0] = var38;
            var54 = _closure1_slot35;
            var53 = _closure1_slot7;
            var52 = {};
            var55 = var37.rightAccessory;
            var52['style'] = var55;
            var56 = null;
            if(!var7) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var58 = _closure1_slot34;
            var57 = _closure1_slot1;
            var59 = _closure1_slot3;
            var55 = 86;
            var55 = var59[var55];
            var57 = var57.bind(var5)(var55);
            var55 = {};
            var60 = _closure1_slot0;
            var59 = var59[var61];
            var59 = var60.bind(var5)(var59);
            var59 = var59.KeyboardTypes;
            var59 = var59.EXPRESSION;
            var59 = var43 === var59;
            var55['active'] = var59;
            var59 = var41.handlePressExpression;
            var55['onPress'] = var59;
            var56 = var58.bind(var5)(var57, var55);
case 259:
            var55 = new Array(2);
            var55[0] = var56;
            var58 = _closure1_slot34;
            var57 = _closure1_slot1;
            var59 = _closure1_slot3;
            var56 = 84;
            var56 = var59[var56];
            var57 = var57.bind(var5)(var56);
            var56 = {};
            var56['analyticsLocations'] = var46;
            var59 = var44.chatInputCharCounter;
            var56['ref'] = var59;
            var56 = var58.bind(var5)(var57, var56);
            var55[1] = var56;
            var52['children'] = var55;
            var52 = var54.bind(var5)(var53, var52);
            var51[1] = var52;
            var47['children'] = var51;
            var47 = var50.bind(var5)(var49, var47);
            var35[1] = var47;
            var47 = var33;
            if(!var48) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var50 = _closure1_slot34;
            var49 = _closure1_slot7;
            var48 = {};
            var51 = var37.refreshButtonAlignment;
            var48['style'] = var51;
            var48['children'] = var33;
            var47 = var50.bind(var5)(var49, var48);
case 261:
            var35[2] = var47;
            var24['children'] = var35;
            var24 = var27.bind(var5)(var26, var24);
            var20[1] = var24;
            var23['children'] = var20;
            var20 = var23;
            _fun0003_ip = 263; continue _fun0003;
case 253:
            var24 = new Array(3);
            var24[0] = var25;
            var27 = _closure1_slot34;
            var26 = _closure1_slot1;
            var35 = _closure1_slot3;
            var25 = 81;
            var25 = var35[var25];
            var26 = var26.bind(var5)(var25);
            var25 = {};
            var25['channel'] = var11;
            var25 = var27.bind(var5)(var26, var25);
            var24[1] = var25;
            var27 = _closure1_slot35;
            var26 = _closure1_slot7;
            var25 = {};
            var47 = var37.floatingInputBox;
            var35 = new Array(3);
            var35[0] = var47;
            if(!var45) { _fun0003_ip = 264; continue _fun0003 }
case 265:
            var45 = var37.floatingInputBoxPressed;
case 264:
            var35[1] = var45;
            if(!var36) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var36 = var37.floatingInputBoxTyping;
case 266:
            var35[2] = var36;
            var25['style'] = var35;
            var25['onStartShouldSetResponder'] = var34;
            var25['onResponderRelease'] = var30;
            var25['collapsable'] = var28;
            var25['accessibilityElementsHidden'] = var29;
            var28 = undefined;
            if(!var29) { _fun0003_ip = 268; continue _fun0003 }
case 269:
            var28 = 'no-hide-descendants';
case 268:
            var25['importantForAccessibility'] = var28;
            var30 = _closure1_slot34;
            var29 = _closure1_slot1;
            var34 = _closure1_slot3;
            var28 = 82;
            var28 = var34[var28];
            var29 = var29.bind(var5)(var28);
            var28 = {};
            var28['channel'] = var11;
            var34 = var44.chatInput;
            var28['chatInputRef'] = var34;
            var28['pendingEdit'] = var32;
            var28['pendingReply'] = var31;
            var29 = var30.bind(var5)(var29, var28);
            var28 = new Array(2);
            var28[0] = var29;
            var31 = _closure1_slot35;
            var30 = _closure1_slot7;
            var29 = {};
            var32 = var37.floatingMainContents;
            var29['style'] = var32;
            var32 = var13 != var40;
            var34 = null;
            if(!var32) { _fun0003_ip = 270; continue _fun0003 }
case 271:
            var36 = _closure1_slot34;
            var35 = _closure1_slot7;
            var32 = {};
            var45 = {};
            var45['paddingBottom'] = var39;
            var45['paddingLeft'] = var39;
            var32['style'] = var45;
            var32['children'] = var40;
            var34 = var36.bind(var5)(var35, var32);
case 270:
            var32 = new Array(4);
            var32[0] = var34;
            var36 = _closure1_slot35;
            var35 = _closure1_slot7;
            var34 = {};
            var40 = var37.inputFlat;
            var37 = new Array(2);
            var37[0] = var40;
            var40 = {};
            var40['paddingBottom'] = var39;
            var37[1] = var40;
            var34['style'] = var37;
            var37 = new Array(2);
            var37[0] = var38;
            var45 = _closure1_slot34;
            var40 = _closure1_slot1;
            var47 = _closure1_slot3;
            var38 = 84;
            var38 = var47[var38];
            var40 = var40.bind(var5)(var38);
            var38 = {};
            var38['analyticsLocations'] = var46;
            var46 = var44.chatInputCharCounter;
            var38['ref'] = var46;
            var38 = var45.bind(var5)(var40, var38);
            var37[1] = var38;
            var34['children'] = var37;
            var34 = var36.bind(var5)(var35, var34);
            var32[1] = var34;
            var34 = null;
            if(!var7) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            var37 = _closure1_slot34;
            var36 = _closure1_slot7;
            var35 = {};
            var38 = {};
            var38['paddingBottom'] = var39;
            var35['style'] = var38;
            var40 = _closure1_slot34;
            var39 = _closure1_slot1;
            var45 = _closure1_slot3;
            var38 = 85;
            var38 = var45[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var44 = var44.chatInputRightActions;
            var38['ref'] = var44;
            var38['channel'] = var11;
            var38['keyboardType'] = var43;
            if(var3) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var44 = _closure1_slot0;
            var45 = _closure1_slot3;
            var43 = 66;
            var43 = var45[var43];
            var44 = var44.bind(var5)(var43);
            var43 = var44.isPremiumGiftingSupported;
            var42 = var43.bind(var44)();
case 274:
            var38['shouldShowGiftButton'] = var42;
            var42 = var41.handlePressAction;
            var38['onPressAction'] = var42;
            var41 = var41.handlePressExpression;
            var38['onPressExpression'] = var41;
            var38 = var40.bind(var5)(var39, var38);
            var35['children'] = var38;
            var34 = var37.bind(var5)(var36, var35);
case 272:
            var32[2] = var34;
            var32[3] = var33;
            var29['children'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var28[1] = var29;
            var25['children'] = var28;
            var25 = var27.bind(var5)(var26, var25);
            var24[2] = var25;
            var23['children'] = var24;
            var20 = var23;
case 263:
            var20 = var22.bind(var5)(var21, var20);
            var14['children'] = var20;
            var14 = var15.bind(var5)(var16, var14);
            var12[13] = var14;
            var14 = var13 != var17;
            var13 = null;
            if(!var14) { _fun0003_ip = 276; continue _fun0003 }
case 277:
            var16 = _closure1_slot34;
            var15 = _closure1_slot1;
            var14 = _closure1_slot3;
            var14 = var14[var19];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['buttonRef'] = var18;
            var68 = var14;
            var67 = var17;
            var17 = copyDataProperties(var68, var67);
            var13 = var16.bind(var5)(var15, var14);
case 276:
            var12[14] = var13;
            var1['children'] = var12;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(var3) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var4 = _closure1_slot34;
            var3 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 87;
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
case 278:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 88;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();