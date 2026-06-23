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
            var3 = _closure1_slot34;
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
            var8 = _closure1_slot33;
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
            var8 = _closure1_slot33;
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
    var _closure1_slot38 = var1;
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
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot32 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot33 = var8;
    var8 = var4.jsxs;
    var _closure1_slot34 = var8;
    var4 = var4.Fragment;
    var _closure1_slot35 = var4;
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
            var15 = var2;
            var14 = var8;
            var8 = copyDataProperties(var15, var14);
            var1['inputDefault'] = var2;
            var2 = {'position': 'absolute', 'left': null, 'right': 0};
            var9 = _closure1_slot0;
            var8 = _closure1_slot3;
            var10 = 22;
            var8 = var8[var10];
            var9 = var9.bind(var6)(var8);
            var8 = var9.isAndroid;
            var9 = var8.bind(var9)();
            var8 = 6;
            if(!var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.space;
            var8 = var9.PX_4;
case 18:
            var2['left'] = var8;
            var1['customPlaceholder'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'stretch', 'borderRadius': null, 'paddingHorizontal': null, 'marginHorizontal': null, 'overflow': 'hidden', 'flex': 1};
            var11 = _closure1_slot1;
            var8 = _closure1_slot3;
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_BORDER_RADIUS;
            var2['borderRadius'] = var9;
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_PILL_PADDING;
            var2['paddingHorizontal'] = var9;
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_PILL_MARGIN_HORIZONTAL;
            var2['marginHorizontal'] = var9;
            var9 = 'hidden';
            var12 = var8[var7];
            var12 = var11.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_PILL_BORDER_WIDTH;
            var2['borderWidth'] = var12;
            var8 = var8[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.INPUT_BORDER_DEFAULT;
            var2['borderColor'] = var8;
            if(!(var3 == var5)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_BACKGROUND;
            _fun0002_ip = 22; continue _fun0002;
case 20:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 22:
            var2['backgroundColor'] = var3;
            var1['input'] = var2;
            var2 = {'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center'};
            var12 = 'column';
            var11 = _closure1_slot1;
            var8 = _closure1_slot3;
            var3 = var8[var7];
            var3 = var11.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_PILL_PADDING;
            var2['paddingVertical'] = var3;
            var1['rightAccessory'] = var2;
            var2 = {};
            var3 = var8[var7];
            var3 = var11.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_PILL_BORDER_WIDTH;
            var2['marginBottom'] = var3;
            var1['refreshButtonAlignment'] = var2;
            var2 = {'position': 'absolute', 'bottom': '100%', 'left': 0, 'right': 0};
            var1['accessories'] = var2;
            var2 = {'borderTopWidth': 0, 'borderColor': 'transparent', 'borderRadius': null, 'backgroundColor': 'transparent', 'paddingHorizontal': null, 'paddingVertical': 0, 'overflow': 'visible'};
            var5 = 'transparent';
            var3 = var8[var7];
            var3 = var11.bind(var6)(var3);
            var3 = var3.radii;
            var3 = var3.none;
            var2['borderRadius'] = var3;
            var3 = var8[var7];
            var3 = var11.bind(var6)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var2['paddingHorizontal'] = var3;
            var3 = 'visible';
            var1['floatingContainer'] = var2;
            var2 = {};
            var13 = var8[var7];
            var13 = var11.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.MOBILE_FLOATINGBAR_BACKGROUND;
            var2['backgroundColor'] = var13;
            var13 = var8[var7];
            var13 = var11.bind(var6)(var13);
            var13 = var13.modules;
            var13 = var13.mobile;
            var13 = var13.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH;
            var2['borderWidth'] = var13;
            var13 = var8[var7];
            var13 = var11.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.MOBILE_FLOATING_ACCESSORY_BORDER;
            var2['borderColor'] = var13;
            var13 = var8[var7];
            var13 = var11.bind(var6)(var13);
            var13 = var13.modules;
            var13 = var13.mobile;
            var13 = var13.CHAT_INPUT_FLOATING_BORDER_RADIUS;
            var2['borderRadius'] = var13;
            var2['flexDirection'] = var12;
            var2['overflow'] = var9;
            var1['floatingInputBox'] = var2;
            var2 = {};
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderColor'] = var9;
            var1['floatingInputBoxPressed'] = var2;
            var2 = {'shadowOpacity': 0, 'elevation': 0};
            var1['floatingInputBoxTyping'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL;
            var2['paddingHorizontal'] = var9;
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
            var2['paddingVertical'] = var9;
            var9 = var8[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_FLOATING_CONTENT_GAP;
            var2['gap'] = var9;
            var1['floatingMainContents'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'center'};
            var9 = _closure1_slot0;
            var8 = var8[var10];
            var9 = var9.bind(var6)(var8);
            var8 = var9.isAndroid;
            var9 = var8.bind(var9)();
            var8 = -6;
            if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var8 = -5;
case 23:
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
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function ChatInputTsx1(){const{placeholderFieldHeight,textFieldHeight}=this.__closure;return{minHeight:placeholderFieldHeight>0?Math.max(textFieldHeight.get(),placeholderFieldHeight):textFieldHeight.get()};}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var17 = var1.isResourceChannel;
            var10 = var1.screenIndex;
            var60 = var1.setNoExtractUI;
            var42 = var1.secondaryTextFieldRef;
            var37 = var1.threadCreationCallback;
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
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
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
            var47 = var1.enabled;
            var16 = var1.chatInputFloating;
            var _closure2_slot1 = var16;
            var1 = 27;
            var6 = var3[var1];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useGradientValue;
            var1 = var3[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var6.bind(var9)(var1);
            var21 = 23;
            var6 = var3[var21];
            var13 = var7.bind(var5)(var6);
            var12 = var13.useToken;
            var9 = _closure1_slot1;
            var29 = 21;
            var6 = var3[var29];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var53 = var12.bind(var13)(var6);
            var _closure2_slot2 = var53;
            var6 = var3[var21];
            var13 = var7.bind(var5)(var6);
            var12 = var13.useToken;
            var6 = var3[var29];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_SEND_BUTTON_HEIGHT;
            var6 = var12.bind(var13)(var6);
            var6 = var6 - var53;
            var54 = 2;
            var35 = var6 / var54;
            var6 = var3[var21];
            var13 = var7.bind(var5)(var6);
            var12 = var13.useToken;
            var6 = var3[var29];
            var6 = var9.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var13 = var12.bind(var13)(var6);
            var6 = _closure1_slot36;
            var34 = var6.bind(var5)(var1, var16, var13);
            var6 = var3[var21];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useToken;
            var3 = var3[var29];
            var3 = var9.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var50 = var6.bind(var7)(var3);
            var30 = null;
            if(!(var30 != var1)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var50 = var1;
case 25:
            var12 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = var3[var21];
            var7 = var12.bind(var5)(var1);
            var6 = var7.useToken;
            var14 = _closure1_slot1;
            var1 = var3[var29];
            var1 = var14.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED;
            var1 = var6.bind(var7)(var1);
            var6 = var3[var21];
            var9 = var12.bind(var5)(var6);
            var7 = var9.useToken;
            var6 = var3[var29];
            var6 = var14.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT;
            var7 = var7.bind(var9)(var6);
            var6 = var3[var21];
            var15 = var12.bind(var5)(var6);
            var9 = var15.useToken;
            var6 = var3[var29];
            var6 = var14.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM;
            var9 = var9.bind(var15)(var6);
            var6 = var3[var21];
            var12 = var12.bind(var5)(var6);
            var6 = var12.useToken;
            var3 = var3[var29];
            var3 = var14.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var3 = var6.bind(var12)(var3);
            _closure2_slot3 = var3;
            var6 = _closure1_slot6;
            var14 = var6.useMemo;
            var12 = new Array(1);
            var12[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var56 = var14.bind(var6)(var3, var12);
            var3 = var6.useRef;
            var3 = var3.bind(var6)(var16);
            _closure2_slot4 = var3;
            var3['current'] = var16;
            var3 = var6.useState;
            var24 = false;
            var6 = var3.bind(var6)(var24);
            var3 = _closure1_slot5;
            var3 = var3.bind(var5)(var6, var54);
            var12 = 0;
            var44 = var3[var12];
            var59 = 1;
            var3 = var3[var59];
            _closure2_slot5 = var3;
            if(var16) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var15 = _closure1_slot7;
            _fun0003_ip = 29; continue _fun0003;
case 27:
            var6 = _closure1_slot1;
            var14 = _closure1_slot3;
            var3 = 28;
            var3 = var14[var3];
            var15 = var6.bind(var5)(var3);
case 29:
            var3 = var30 != var37;
            _closure2_slot6 = var3;
            var6 = var11.isPrivate;
            var20 = var6.bind(var11)();
            if(!var20) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var20 = !var3;
case 30:
            var14 = _closure1_slot9;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var14 = var14.bind(var5)(var6);
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var6 = 29;
            var6 = var19[var6];
            var19 = var18.bind(var5)(var6);
            var18 = var19.useTypingUserIds;
            var6 = var11.id;
            var19 = var18.bind(var19)(var6, var59);
            var6 = _closure1_slot20;
            var6 = var6.bind(var5)(var10);
            var33 = var16;
            if(!var16) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var18 = var11.rateLimitPerUser;
            var18 = var18 > var12;
            if(var18) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var19 = var19.length;
            var18 = var19 > var12;
case 34:
            var33 = var18;
case 32:
            if(!var33) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var33 = !var6;
case 36:
            var6 = _closure1_slot19;
            var6 = var6.bind(var5)(var10);
            var48 = var13;
            if(!var6) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var48 = var9;
case 38:
            var51 = var7;
            if(!var6) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var51 = var1;
case 40:
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 30;
            var9 = var1[var6];
            var19 = var7.bind(var5)(var9);
            var18 = var19.useStateFromStores;
            var9 = _closure1_slot15;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(var3) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var4 = _closure1_slot15;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 42:
                    return var1;
                }
            };
            var28 = var18.bind(var19)(var13, var9);
            _closure2_slot7 = var28;
            var9 = var1[var6];
            var19 = var7.bind(var5)(var9);
            var18 = var19.useStateFromStores;
            var9 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var4 = _closure1_slot11;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 42:
                    return var1;
                }
            };
            var27 = var18.bind(var19)(var13, var9);
            _closure2_slot8 = var27;
            var1 = var1[var6];
            var13 = var7.bind(var5)(var1);
            var9 = var13.useStateFromStores;
            var1 = _closure1_slot17;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var4 = _closure1_slot17;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot14;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 46:
                    return var1;
case 44:
                    var1 = false;
                    return var1;
                }
            };
            var13 = var9.bind(var13)(var7, var1);
            var18 = _closure1_slot6;
            var9 = var18.useMemo;
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
                    if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var1 = var5.ChannelMessage;
                    _fun0007_ip = 50; continue _fun0007;
case 48:
                    var1 = var5.FirstThreadMessage;
case 50:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var46 = var9.bind(var18)(var1, var7);
            if(!(var30 != var28)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var46 = var28;
case 51:
            _closure2_slot9 = var46;
            var7 = _closure1_slot0;
            var19 = _closure1_slot3;
            var1 = var19[var6];
            var22 = var7.bind(var5)(var1);
            var18 = var22.useStateFromStoresObject;
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
                    if(var2) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var11 = _closure1_slot16;
                    var7 = var11.can;
                    var3 = _closure1_slot29;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 53:
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
                    if(var7) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var7 = var4;
                    if(var4) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var7 = var10;
case 57:
                    var3 = var7;
case 55:
                    var3 = !var3;
                    if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var3 = var1;
case 59:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    if(!var9) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var9 = !var3;
case 63:
                    var7 = var9;
case 61:
                    if(!var7) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var9 = _closure2_slot6;
                    var7 = !var9;
case 65:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var7 = var8;
case 67:
                    if(!var7) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var7 = !var3;
case 69:
                    if(!var7) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                    var8 = _closure2_slot6;
                    var7 = !var8;
case 71:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0008_ip = 73; continue _fun0008 }
case 18:
                    var4 = var6;
case 73:
                    if(!var4) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var4 = !var3;
case 74:
                    if(!var4) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var5 = _closure2_slot6;
                    var4 = !var5;
case 76:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var1 = var18.bind(var22)(var9, var1, var7);
            var22 = var1.canMentionEveryone;
            var23 = var1.canUpload;
            var32 = var1.canSendVoiceMessage;
            var7 = var1.editable;
            _closure2_slot10 = var7;
            var9 = var1.canCreateThreads;
            var18 = _closure1_slot1;
            var1 = 32;
            var1 = var19[var1];
            var1 = var18.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var45 = var1.analyticsLocations;
            var18 = var3;
            if(var18) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var18 = var30 != var28;
case 78:
            if(var18) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var19 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 31;
            var1 = var25[var1];
            var19 = var19.bind(var5)(var1);
            var1 = var19.getIsActiveChannelOrUnarchivableThread;
            var1 = var1.bind(var19)(var11);
            var18 = !var1;
case 80:
            var19 = var30 != var27;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var1 = 31;
            var1 = var26[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanStartThread;
            var67 = var1.bind(var25)(var11);
            if(!var67) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var1 = _closure1_slot25;
            var26 = var1.GUILD_THREADS_ONLY;
            var25 = var26.has;
            var1 = var11.type;
            var1 = var25.bind(var26)(var1);
            var67 = !var1;
case 82:
            if(!var67) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var67 = !var3;
case 84:
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var1 = 33;
            var1 = var26[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanPostPollsInChannel;
            var36 = var1.bind(var25)(var11);
            if(!var36) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var36 = !var3;
case 86:
            var25 = _closure1_slot0;
            var1 = _closure1_slot3;
            var21 = var1[var21];
            var25 = var25.bind(var5)(var21);
            var21 = var25.useToken;
            var26 = _closure1_slot1;
            var1 = var1[var29];
            var1 = var26.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_PILL_BORDER_WIDTH;
            var52 = var21.bind(var25)(var1);
            if(var47) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var21 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 34;
            var1 = var25[var1];
            var21 = var21.bind(var5)(var1);
            var1 = var21.getChatInputMinHeight;
            var57 = var1.bind(var21)();
            _fun0003_ip = 90; continue _fun0003;
case 88:
            var1 = var54 * var52;
            var57 = var53 - var1;
case 90:
            _closure2_slot11 = var57;
            var25 = _closure1_slot0;
            var21 = _closure1_slot3;
            var1 = 35;
            var21 = var21[var1];
            var26 = var25.bind(var5)(var21);
            var25 = var26.useSharedValue;
            var21 = var57;
            if(!var16) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var21 = var53;
case 91:
            var26 = var25.bind(var26)(var21);
            _closure2_slot12 = var26;
            var31 = _closure1_slot6;
            var29 = var31.useEffect;
            var25 = new Array(4);
            var25[0] = var16;
            var25[1] = var53;
            var25[2] = var57;
            var25[3] = var26;
            var21 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = var3.set;
                    var1 = _closure2_slot1;
                    if(var1) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                    var1 = _closure2_slot11;
                    _fun0009_ip = 95; continue _fun0009;
case 93:
                    var1 = _closure2_slot2;
case 95:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = var29.bind(var31)(var21, var25);
            var25 = _closure1_slot1;
            var29 = _closure1_slot3;
            var21 = 36;
            var21 = var29[var21];
            var21 = var25.bind(var5)(var21);
            var41 = var21.bind(var5)();
            var25 = _closure1_slot12;
            var21 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var25 = var25.bind(var5)(var21);
            var38 = !var3;
            var63 = var38;
            if(var3) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var29 = _closure1_slot0;
            var31 = _closure1_slot3;
            var21 = 37;
            var21 = var31[var21];
            var29 = var29.bind(var5)(var21);
            var21 = var29.getIsAppLauncherEnabled;
            var63 = var21.bind(var29)(var11);
case 96:
            var21 = _closure1_slot0;
            var29 = _closure1_slot3;
            var6 = var29[var6];
            var39 = var21.bind(var5)(var6);
            var31 = var39.useStateFromStores;
            var6 = _closure1_slot8;
            var21 = new Array(1);
            var21[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getActiveCommand;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var66 = var31.bind(var39)(var21, var6);
            var21 = _closure1_slot1;
            var6 = 38;
            var6 = var29[var6];
            var31 = var21.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var11;
            var39 = !var7;
            var6['isReadonly'] = var39;
            var6['isCreatingThread'] = var3;
            var6 = var31.bind(var5)(var6);
            var65 = var6.placeholder;
            var49 = var6.accessibilityLabel;
            var6 = 39;
            var6 = var29[var6];
            var21 = var21.bind(var5)(var6);
            var6 = null;
            if(!var7) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var6 = null;
            if(var3) { _fun0003_ip = 98; continue _fun0003 }
case 100:
            var6 = var11;
case 98:
            var61 = var21.bind(var5)(var6);
            var29 = _closure1_slot0;
            var31 = _closure1_slot3;
            var6 = 40;
            var39 = var31[var6];
            var43 = var29.bind(var5)(var39);
            var40 = var43.useGiftIntentExpressionPickerActive;
            var39 = var11.id;
            var39 = var40.bind(var43)(var39);
            _closure2_slot13 = var39;
            var6 = var31[var6];
            var31 = var29.bind(var5)(var6);
            var29 = var31.useGiftIntentExpressionPickerPlaceholder;
            var6 = var11.id;
            var6 = var29.bind(var31)(var6);
            if(!(var30 != var6)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var61 = var6;
case 101:
            var40 = !var39;
            if(!var40) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var40 = undefined;
case 103:
            var43 = _closure1_slot6;
            var21 = var43.useState;
            var6 = var46.length;
            var6 = var6 > var12;
            var21 = var21.bind(var43)(var6);
            var6 = _closure1_slot5;
            var21 = var6.bind(var5)(var21, var54);
            var6 = var21[var12];
            var21 = var21[var59];
            _closure2_slot14 = var21;
            var31 = var43.useEffect;
            var29 = new Array(1);
            var29[0] = var46;
            var21 = function() {
                var3 = _closure2_slot14;
                var1 = _closure2_slot9;
                var2 = var1.length;
                var1 = 0;
                var2 = var2 > var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21 = var31.bind(var43)(var21, var29);
            var55 = var30 != var61;
            if(!var55) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var55 = !var6;
case 105:
            var43 = _closure1_slot6;
            var6 = var43.useState;
            var21 = var6.bind(var43)(var12);
            var6 = _closure1_slot5;
            var21 = var6.bind(var5)(var21, var54);
            var6 = var21[var12];
            var21 = var21[var59];
            _closure2_slot15 = var21;
            var31 = var43.useCallback;
            var29 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot15;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21 = new Array(0);
            var62 = var31.bind(var43)(var29, var21);
            var58 = 8;
            if(!var47) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var58 = 5;
case 107:
            if(!var16) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var57 = var53;
case 109:
            var43 = 0;
            if(!var55) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var21 = var6 > var12;
            var43 = 0;
            if(!var21) { _fun0003_ip = 111; continue _fun0003 }
case 113:
            var21 = global;
            var31 = var21.Math;
            var29 = var31.max;
            var21 = var54 * var58;
            var21 = var6 + var21;
            var43 = var29.bind(var31)(var57, var21);
case 111:
            _closure2_slot16 = var43;
            var64 = var58;
            if(!(var43 > var12)) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var6 = var43 - var6;
            var64 = var6 / var54;
case 114:
            var12 = _closure1_slot0;
            var29 = _closure1_slot3;
            var6 = var29[var1];
            var21 = var12.bind(var5)(var6);
            var12 = var21.useAnimatedStyle;
            var6 = function it() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot16;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0010_ip = 116; continue _fun0010 }
case 117:
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    _fun0010_ip = 118; continue _fun0010;
case 116:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var7 = _closure2_slot12;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var3 = _closure2_slot16;
                    var2 = var5.bind(var6)(var4, var3);
case 118:
                    var1['minHeight'] = var2;
                    return var1;
                }
            };
            var31 = {};
            var31['placeholderFieldHeight'] = var43;
            var31['textFieldHeight'] = var26;
            var6['__closure'] = var31;
            var31 = 14640048327678.0;
            var6['__workletHash'] = var31;
            var31 = _closure1_slot37;
            var6['__initData'] = var31;
            var57 = var12.bind(var21)(var6);
            var6 = _closure1_slot1;
            var12 = 41;
            var12 = var29[var12];
            var21 = var6.bind(var5)(var12);
            var12 = {};
            var31 = {};
            var31['analyticsLocations'] = var45;
            var31['canUpload'] = var23;
            var31['channel'] = var11;
            var31['defaultValue'] = var46;
            var31['hasAttachmentsToUpload'] = var13;
            var31['pendingEdit'] = var28;
            var31['pendingReply'] = var27;
            var31['screenIndex'] = var10;
            var31['secondaryTextFieldRef'] = var42;
            var31['threadCreationCallback'] = var37;
            var12['chatInputProps'] = var31;
            var12['chatInputTextFieldHeight'] = var26;
            var26 = arg2;
            var12['ref'] = var26;
            var42 = var21.bind(var5)(var12);
            _closure2_slot17 = var42;
            var43 = _closure1_slot6;
            var26 = var43.useEffect;
            var21 = new Array(1);
            var21[0] = var42;
            var12 = function() {
                var2 = _closure2_slot17;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot17;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var12 = var26.bind(var43)(var12, var21);
            var26 = var43.useEffect;
            var21 = new Array(4);
            var21[0] = var42;
            var21[1] = var11;
            var21[2] = var28;
            var21[3] = var27;
            var12 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot17;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0011_ip = 119; continue _fun0011 }
case 42:
                    var5 = _closure2_slot8;
                    var3 = var2 != var5;
case 119:
                    if(var3) { _fun0011_ip = 46; continue _fun0011 }
case 50:
                    var5 = var2 == var4;
                    if(!var5) { _fun0011_ip = 120; continue _fun0011 }
case 47:
                    var6 = _closure2_slot7;
                    var5 = var2 != var6;
case 120:
                    var3 = var5;
case 46:
                    if(!var3) { _fun0011_ip = 121; continue _fun0011 }
case 122:
                    var3 = _closure2_slot17;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 121; continue _fun0011 }
case 123:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 121:
                    var3 = _closure2_slot17;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0011_ip = 124; continue _fun0011 }
case 125:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 42;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0011_ip = 126; continue _fun0011 }
case 124:
                    var3 = _closure2_slot7;
                    if(!(var4 !== var3)) { _fun0011_ip = 127; continue _fun0011 }
case 128:
                    var3 = _closure2_slot17;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 127; continue _fun0011 }
case 15:
                    var4 = var5.setText;
                    var3 = _closure2_slot7;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0011_ip = 129; continue _fun0011 }
case 56:
                    var3 = _closure2_slot7;
case 129:
                    var3 = var4.bind(var5)(var3);
                    _fun0011_ip = 127; continue _fun0011;
case 126:
                    var3 = _closure2_slot17;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0011_ip = 127; continue _fun0011 }
case 130:
                    var2 = var3.setText;
                    var1 = _closure2_slot17;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 127:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var26.bind(var43)(var12, var21);
            var26 = var43.useEffect;
            var21 = new Array(1);
            var21[0] = var42;
            var12 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0012_ip = 3; continue _fun0012 }
case 131:
                        var5 = var3.channelId;
case 3:
                        var4 = _closure2_slot17;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0012_ip = 47; continue _fun0012 }
case 119:
                        var6 = var6.channel;
                        var4 = var6.id;
case 47:
                        if(!(var5 === var4)) { _fun0012_ip = 123; continue _fun0012 }
case 132:
                        var3 = _closure2_slot17;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0012_ip = 123; continue _fun0012 }
case 14:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 123:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 43;
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
                    var1 = 43;
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
            var12 = var26.bind(var43)(var12, var21);
            var26 = var43.useMemo;
            var21 = new Array(1);
            var21[0] = var42;
            var12 = function() {
                var1 = {};
                var3 = function handleBlur(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var5 = var1.text;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 44;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = false;
                        var2 = var2.bind(var3)(var8);
                        var4 = _closure2_slot18;
                        var2 = var4.handleTextOrFocusChange;
                        var2 = var2.bind(var4)(var5, var8);
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 133:
                        var4 = _closure2_slot17;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0013_ip = 135; continue _fun0013 }
case 6:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 135:
                        var4 = _closure2_slot17;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0013_ip = 136; continue _fun0013 }
case 137:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot17;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot17;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 136:
                        var3 = _closure2_slot17;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 138; continue _fun0013 }
case 139:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 138:
                        return var1;
                    }
                };
                var1['handleBlur'] = var3;
                var3 = function handleFocus(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var6 = var1.start;
                        var5 = var1.end;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 44;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = true;
                        var2 = var2.bind(var3)(var8);
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot18;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 140; continue _fun0014 }
case 141:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 140:
                        var3 = _closure2_slot17;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 129; continue _fun0014 }
case 17:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 129:
                        var3 = _closure2_slot17;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 142; continue _fun0014 }
case 143:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot17;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 142:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot17;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot17;
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
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 144; continue _fun0015 }
case 145:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 144:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayoutOfInputContainer'] = var3;
                var3 = function handleLayout(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var4 = var1.width;
                        var2 = 0;
                        var1 = var2 !== var3;
                        if(!var1) { _fun0016_ip = 146; continue _fun0016 }
case 147:
                        var1 = var2 !== var4;
case 146:
                        if(!var1) { _fun0016_ip = 148; continue _fun0016 }
case 149:
                        var2 = _closure2_slot17;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0016_ip = 148; continue _fun0016 }
case 44:
                        var1 = _closure2_slot17;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 148:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0017_ip = 150; continue _fun0017 }
case 95:
                        var1 = _closure2_slot17;
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
case 150:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot18;
                    var1 = _closure2_slot17;
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
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.data;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0018_ip = 153; continue _fun0018 }
case 154:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 153:
                        if(var2) { _fun0018_ip = 151; continue _fun0018 }
case 155:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot17;
                        var1 = var1.props;
                        var1 = var1.current;
                        var1 = var1.channel;
                        var1 = var2.bind(var3)(var4, var1);
case 151:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePasteCommand'] = var3;
                var5 = _closure1_slot4;
                var4 = undefined;
                var3 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0019_ip = 156; continue _fun0019 }
case 45:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 157:
                            return var4;
case 158:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0019_ip = 159; continue _fun0019 }
case 160:
                            var3 = _closure2_slot17;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0019_ip = 161; continue _fun0019 }
case 162:
                            var3 = _closure2_slot17;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0019_ip = 161; continue _fun0019 }
case 163:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 45;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 164:
                            return var3;
case 165:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0019_ip = 166; continue _fun0019 }
case 167:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 46;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot17;
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
                            var10 = 47;
                            var10 = var12[var10];
                            var10 = var11.bind(var4)(var10);
                            var10 = var10.UploadPlatform;
                            var10 = var10.REACT_NATIVE;
                            var9['platform'] = var10;
                            var10 = 48;
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
case 161:
                            return var4;
case 166:
                            return var3;
case 159:
                            return var2;
case 156:
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
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var2 = arg2;
                        var5 = arg3;
                        var1 = _closure1_slot23;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0020_ip = 168; continue _fun0020 }
case 169:
                        var1 = _closure1_slot23;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0020_ip = 170; continue _fun0020 }
case 158:
                        var1 = _closure1_slot23;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                        var1 = _closure1_slot23;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0020_ip = 173; continue _fun0020 }
case 174:
                        var1 = _closure1_slot23;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0020_ip = 175; continue _fun0020 }
case 148:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 49;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 56;
                        var1 = var7[var1];
                        var7 = var3.bind(var2)(var1);
                        var3 = var7.handleSelectThread;
                        var2 = _closure2_slot17;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot17;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0020_ip = 175; continue _fun0020;
case 173:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 58;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.markPotentialBadState;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 49;
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
                        if(!var1) { _fun0020_ip = 176; continue _fun0020 }
case 74:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 57;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 176:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 56;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot17;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot17;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0020_ip = 175; continue _fun0020;
case 171:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 49;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 56;
                        var1 = var7[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var7 = _closure2_slot17;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot28;
                        var1['uploadLimit'] = var7;
                        var7 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 57;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var7;
                        var7 = function onRestoreKeyboard() {
                            var3 = _closure2_slot18;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 51;
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
                            var1 = 56;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot17;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 47;
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
                        _fun0020_ip = 175; continue _fun0020;
case 170:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 49;
                        var7 = var3[var1];
                        var6 = undefined;
                        var8 = var2.bind(var6)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 52;
                        var1 = var3[var1];
                        var9 = var2.bind(var6)(var1);
                        var8 = var9.trackWithMetadata;
                        var1 = _closure1_slot24;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 50;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot26;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot17;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot17;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.guild_id;
                        var1['guild_id'] = var11;
                        var1 = var9.bind(var10)(var8, var1);
                        var8 = _closure1_slot2;
                        var1 = 53;
                        var1 = var3[var1];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.dismissNewActivityIndicator;
                        var1 = var1.bind(var8)();
                        var1 = 54;
                        var1 = var3[var1];
                        var3 = var2.bind(var6)(var1);
                        var2 = var3.setAppLauncherA11yFocusReturnRef;
                        var8 = null;
                        var9 = var8 != var5;
                        var1 = null;
                        if(!var9) { _fun0020_ip = 177; continue _fun0020 }
case 178:
                        var1 = var5;
case 177:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot18;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 51;
                        var5 = var11[var5];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.KeyboardTypes;
                        var5 = var5.APP_LAUNCHER;
                        var1['type'] = var5;
                        var5 = {};
                        var9 = _closure1_slot30;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 55;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot17;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0020_ip = 179; continue _fun0020 }
case 180:
                        var6 = var7.name;
case 179:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0020_ip = 175; continue _fun0020;
case 168:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 49;
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
                        var1 = 50;
                        var1 = var3[var1];
                        var7 = var2.bind(var6)(var1);
                        var5 = var7.track;
                        var1 = _closure1_slot24;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot26;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot17;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot17;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0020_ip = 181; continue _fun0020 }
case 182:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var7 = var5.bind(var6)(var3);
                        var3 = var7.getKeyboardType;
                        var3 = var3.bind(var7)();
                        var7 = 51;
                        var2 = var2[var7];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.APP_LAUNCHER;
                        if(!(var3 !== var2)) { _fun0020_ip = 183; continue _fun0020 }
case 181:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var8 = var5.bind(var6)(var3);
                        var3 = var8.getKeyboardType;
                        var3 = var3.bind(var8)();
                        var10 = 51;
                        var2 = var2[var10];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.MEDIA;
                        if(!(var3 === var2)) { _fun0020_ip = 184; continue _fun0020 }
case 185:
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0020_ip = 184; continue _fun0020 }
case 186:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 184:
                        var5 = _closure2_slot18;
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
                        var9 = _closure1_slot32;
                        var9 = var9.CHAT;
                        var8['target'] = var9;
                        var2['context'] = var8;
                        var2 = var3.bind(var5)(var2);
                        _fun0020_ip = 175; continue _fun0020;
case 183:
                        var3 = _closure2_slot18;
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
case 175:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressAction'] = var3;
                var3 = function handlePollsPress() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 49;
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
                    var2 = 50;
                    var2 = var4[var2];
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot24;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot26;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot17;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot17;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.guild_id;
                    var2['guild_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 57;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.dismissKeyboard;
                    var2 = var2.bind(var6)();
                    var2 = 59;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot17;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot18;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 51;
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
                    var2 = 49;
                    var7 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var7.bind(var8)(var2);
                    var2 = 56;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var7 = _closure2_slot17;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot28;
                    var2['uploadLimit'] = var6;
                    var6 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 57;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2['onDismissKeyboard'] = var6;
                    var6 = function onRestoreKeyboard() {
                        var3 = _closure2_slot18;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 51;
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
                        var1 = 56;
                        var2 = var7[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.addImagesFromPicker;
                        var2 = _closure2_slot17;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var4 = var2.id;
                        var2 = 47;
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
                    var1 = 60;
                    var3 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot31;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot18;
                    var3 = var4.handleToggleKeyboard;
                    var2 = {};
                    var5 = 51;
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
                    var1 = _closure2_slot17;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.handleSend;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handlePressSend'] = var3;
                var3 = function handleSelectionOrTextChange(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.nativeEvent;
                        var10 = var2.start;
                        var9 = var2.end;
                        var1 = var2.text;
                        var5 = var2.editId;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot18;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot17;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0021_ip = 137; continue _fun0021 }
case 187:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 137:
                        var6 = _closure2_slot17;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 130; continue _fun0021 }
case 188:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot17;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 130:
                        var6 = _closure2_slot17;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 189; continue _fun0021 }
case 190:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 189:
                        if(!(var4 !== var5)) { _fun0021_ip = 191; continue _fun0021 }
case 192:
                        var4 = _closure2_slot17;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot17;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0021_ip = 193; continue _fun0021 }
case 194:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 193:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 191:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSelectionOrTextChange'] = var3;
                var3 = function handleTapAction(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.tapAction;
                        var3 = var2.action;
                        var1 = 'tapAttachment';
                        if(!(var1 === var3)) { _fun0022_ip = 137; continue _fun0022 }
case 147:
                        var1 = _closure2_slot17;
                        var1 = var1.chatInput;
                        var3 = var1.current;
                        var1 = var3.blur;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 62;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openCommandAttachmentPreview;
                        var3 = _closure2_slot17;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot17;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0022_ip = 135; continue _fun0022 }
case 195:
                        var1 = function() {
                            var1 = _closure2_slot17;
                            var1 = var1.chatInput;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
case 135:
                        var12 = var6;
                        var11 = var4;
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 137:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapAction'] = var3;
                var3 = function handleTextOrFocusChange(arg1, arg2) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = arg1;
                        var6 = arg2;
                        var7 = _closure2_slot14;
                        var1 = var3.length;
                        var5 = 0;
                        var4 = var1 > var5;
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var3.length;
                        if(!(var4 > var5)) { _fun0023_ip = 196; continue _fun0023 }
case 152:
                        if(var6) { _fun0023_ip = 197; continue _fun0023 }
case 157:
                        var7 = var3.length;
                        var4 = _closure2_slot17;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.textPrev;
                        var4 = var4.length;
                        if(!(!(var7 > var4))) { _fun0023_ip = 197; continue _fun0023 }
case 196:
                        var4 = var3.length;
                        if(!(var5 === var4)) { _fun0023_ip = 198; continue _fun0023 }
case 199:
                        var4 = _closure2_slot17;
                        var4 = var4.chatInputActions;
                        var7 = var4.current;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0023_ip = 134; continue _fun0023 }
case 200:
                        var5 = var7.onShowActions;
                        var5 = var5.bind(var7)(var6);
case 134:
                        var5 = _closure2_slot17;
                        var5 = var5.chatInputRightActions;
                        var5 = var5.current;
                        if(!(var4 != var5)) { _fun0023_ip = 198; continue _fun0023 }
case 201:
                        var4 = var5.onShowActions;
                        var4 = var4.bind(var5)(var6);
                        _fun0023_ip = 198; continue _fun0023;
case 197:
                        var7 = _closure1_slot10;
                        var5 = var7.isOpen;
                        var5 = var5.bind(var7)();
                        if(!var5) { _fun0023_ip = 202; continue _fun0023 }
case 203:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 63;
                        var4 = var7[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.hideNativeMenu;
                        var4 = var4.bind(var5)();
case 202:
                        var4 = _closure2_slot17;
                        var4 = var4.chatInputActions;
                        var7 = var4.current;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0023_ip = 12; continue _fun0023 }
case 58:
                        var5 = var7.onDismissActions;
                        var5 = var5.bind(var7)(var6);
case 12:
                        var5 = _closure2_slot17;
                        var5 = var5.chatInputRightActions;
                        var5 = var5.current;
                        if(!(var4 != var5)) { _fun0023_ip = 198; continue _fun0023 }
case 204:
                        var4 = var5.onDismissActions;
                        var4 = var4.bind(var5)(var6);
case 198:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var5 = 64;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.getMaxMessageLength;
                        var7 = var5.bind(var6)();
                        var5 = _closure2_slot17;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0023_ip = 205; continue _fun0023 }
case 206:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 205:
                        if(!var5) { _fun0023_ip = 207; continue _fun0023 }
case 208:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 50;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot24;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 207:
                        var4 = _closure2_slot17;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot17;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot17;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['text'] = var3;
                        return var1;
                    }
                };
                var1['handleTextOrFocusChange'] = var3;
                var3 = function handleTextFlushed(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var3 = var1.text;
                        var4 = var1.requestId;
                        var1 = _closure2_slot17;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0024_ip = 132; continue _fun0024 }
case 160:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 132:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTextFlushed'] = var3;
                var2 = function handleToggleKeyboard(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot10;
                        var1 = var3.isOpen;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0025_ip = 144; continue _fun0025 }
case 2:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 63;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 144:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 51;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0025_ip = 209; continue _fun0025 }
case 210:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 36;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0025_ip = 209; continue _fun0025 }
case 211:
                        var2 = _closure2_slot17;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0025_ip = 8; continue _fun0025;
case 209:
                        var2 = _closure2_slot17;
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
            var37 = var26.bind(var43)(var12, var21);
            _closure2_slot18 = var37;
            var26 = var43.useCallback;
            var21 = new Array(2);
            var21[0] = var3;
            var21[1] = var42;
            var12 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = var1.width;
                    var2 = 0;
                    var1 = var2 !== var3;
                    if(!var1) { _fun0026_ip = 146; continue _fun0026 }
case 147:
                    var1 = var2 !== var4;
case 146:
                    if(!var1) { _fun0026_ip = 196; continue _fun0026 }
case 149:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0026_ip = 196; continue _fun0026 }
case 212:
                    var1 = _closure2_slot17;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 196:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var26.bind(var43)(var12, var21);
            var31 = var43.useCallback;
            var26 = function() {
                var1 = true;
                return var1;
            };
            var21 = new Array(0);
            var31 = var31.bind(var43)(var26, var21);
            var26 = var43.useCallback;
            var21 = new Array(3);
            var21[0] = var7;
            var21[1] = var39;
            var21[2] = var42;
            var4 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0027_ip = 160; continue _fun0027 }
case 45:
                    var1 = _closure2_slot13;
                    var2 = _closure2_slot17;
                    var2 = var2.chatInput;
                    var2 = var2.current;
                    if(var1) { _fun0027_ip = 48; continue _fun0027 }
case 213:
                    var1 = var2.openSystemKeyboard;
                    var1 = var1.bind(var2)();
                    _fun0027_ip = 160; continue _fun0027;
case 48:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 160:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var43)(var4, var21);
            var21 = _closure1_slot33;
            var4 = 65;
            var4 = var29[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['canUpload'] = var23;
            var29 = var11.id;
            var4['channelId'] = var29;
            var4['screenIndex'] = var10;
            var21 = var21.bind(var5)(var6, var4);
            var43 = null;
            if(!var7) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var29 = _closure1_slot33;
            var6 = _closure1_slot1;
            var68 = _closure1_slot3;
            var4 = 66;
            var4 = var68[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var68 = var42.chatInputActions;
            var4['ref'] = var68;
            var4['channel'] = var11;
            var68 = var37.handlePressAction;
            var4['onPressAction'] = var68;
            var4['canStartThreads'] = var67;
            var4['isAppLauncherEnabled'] = var63;
            var4['keyboardType'] = var41;
            var63 = var23;
            if(!var23) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var63 = var30 == var66;
case 216:
            if(var63) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var63 = var36;
case 218:
            var63 = !var63;
            var4['shouldPhotosButtonBeDisabled'] = var63;
            var4['canUpload'] = var23;
            var63 = var38;
            if(var3) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var67 = _closure1_slot0;
            var68 = _closure1_slot3;
            var66 = 67;
            var66 = var68[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.isPremiumGiftingSupported;
            var63 = var66.bind(var67)();
case 220:
            var4['shouldShowGiftButton'] = var63;
            var4['canPostPolls'] = var36;
            var36 = var37.handlePollsPress;
            var4['onPollsPress'] = var36;
            var36 = var37.handleAttachPress;
            var4['onAttachPress'] = var36;
            var43 = var29.bind(var5)(var6, var4);
case 214:
            var6 = _closure1_slot34;
            var36 = _closure1_slot1;
            var66 = _closure1_slot3;
            var1 = var66[var1];
            var1 = var36.bind(var5)(var1);
            var4 = var1.View;
            var1 = {};
            var63 = var34.inputDefault;
            var29 = new Array(2);
            var29[0] = var63;
            var29[1] = var57;
            var1['style'] = var29;
            var57 = _closure1_slot33;
            var29 = 68;
            var29 = var66[var29];
            var36 = var36.bind(var5)(var29);
            var29 = {};
            var29['accessibilityLabel'] = var49;
            var63 = _closure1_slot0;
            var49 = 69;
            var49 = var66[var49];
            var49 = var63.bind(var5)(var49);
            var49 = var49.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var29['customKeyboard'] = var49;
            var29['editable'] = var7;
            var49 = var37.handleFocus;
            var29['onBeginFocus'] = var49;
            var49 = var37.handleBlur;
            var29['onEndBlur'] = var49;
            var49 = var37.handleChangeContentSize;
            var29['onChangeContentSize'] = var49;
            var49 = var37.handleMaxHeightChanged;
            var29['onMaxHeightChanged'] = var49;
            var49 = var37.handleSelectionOrTextChange;
            var29['onSelectionOrTextChange'] = var49;
            var49 = var37.handleTextFlushed;
            var29['onTextFlushed'] = var49;
            var49 = var37.handlePasteImage;
            var29['onPasteImage'] = var49;
            var49 = var37.handlePasteCommand;
            var29['onPasteCommand'] = var49;
            var49 = var37.handleTapAction;
            var29['onTapAction'] = var49;
            var49 = var37.handlePressSend;
            var29['onRequestSend'] = var49;
            var66 = var30 == var61;
            var49 = '';
            var63 = var49;
            if(!var66) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var63 = var65;
case 222:
            var29['placeholder'] = var63;
            var63 = var42.chatInputNative;
            var29['ref'] = var63;
            var29['setNoExtractUI'] = var60;
            var65 = _closure1_slot0;
            var63 = _closure1_slot3;
            var60 = 51;
            var63 = var63[var60];
            var63 = var65.bind(var5)(var63);
            var63 = var63.KeyboardTypes;
            var63 = var63.MEDIA;
            var63 = var41 !== var63;
            var29['shouldShowCursor'] = var63;
            var29['verticalInset'] = var58;
            var36 = var57.bind(var5)(var36, var29);
            var29 = new Array(3);
            var29[0] = var36;
            var36 = null;
            if(!var55) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var58 = _closure1_slot33;
            var57 = _closure1_slot0;
            var63 = _closure1_slot3;
            var55 = 70;
            var55 = var63[var55];
            var55 = var57.bind(var5)(var55);
            var57 = var55.Text;
            var55 = {'pointerEvents': 'none', 'onLayout': null, 'style': null, 'variant': 'text-md/normal', 'color': 'text-muted', 'maxFontSizeMultiplier': 2};
            var55['onLayout'] = var62;
            var63 = var34.customPlaceholder;
            var62 = new Array(2);
            var62[0] = var63;
            var63 = {};
            var63['top'] = var64;
            var62[1] = var63;
            var55['style'] = var62;
            var55['children'] = var61;
            var36 = var58.bind(var5)(var57, var55);
case 224:
            var29[1] = var36;
            var57 = _closure1_slot33;
            var55 = _closure1_slot1;
            var58 = _closure1_slot3;
            var36 = 71;
            var36 = var58[var36];
            var55 = var55.bind(var5)(var36);
            var36 = {};
            var58 = !var39;
            var36['enabled'] = var58;
            var36['keyboardType'] = var41;
            var58 = var37.handleToggleKeyboard;
            var36['onSelectKeyboard'] = var58;
            var58 = var42.chatInputCover;
            var36['ref'] = var58;
            var36 = var57.bind(var5)(var55, var36);
            var29[2] = var36;
            var1['children'] = var29;
            var36 = var6.bind(var5)(var4, var1);
            if(var7) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var29 = null;
            if(!var3) { _fun0003_ip = 228; continue _fun0003 }
case 226:
            var6 = _closure1_slot33;
            var4 = _closure1_slot1;
            var55 = _closure1_slot3;
            var1 = 72;
            var1 = var55[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var55 = var42.chatInputSendButton;
            var1['ref'] = var55;
            var1['canSendVoiceMessage'] = var32;
            var1['channel'] = var11;
            var1['defaultValue'] = var46;
            if(!var13) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var13 = var23;
case 229:
            var1['hasPendingAttachments'] = var13;
            var13 = var30 != var28;
            var1['hasPendingEdit'] = var13;
            var13 = var37.handlePressSend;
            var1['onSendMessage'] = var13;
            var1['requireTextContent'] = var38;
            var29 = var6.bind(var5)(var4, var1);
case 228:
            var6 = _closure1_slot34;
            var4 = _closure1_slot7;
            var1 = {};
            var1['collapsable'] = var24;
            var1['onLayout'] = var12;
            var13 = _closure1_slot1;
            var23 = _closure1_slot3;
            var12 = 73;
            var12 = var23[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['isCreatingThread'] = var3;
            var13 = var13.bind(var5)(var12);
            var12 = new Array(3);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var13 = var34.overflowVisible;
case 231:
            var12[1] = var13;
            var13 = var16;
            if(!var16) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var13 = var38;
case 233:
            if(!var13) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var13 = var34.floatingScrimOverlap;
case 235:
            var12[2] = var13;
            var1['style'] = var12;
            var13 = var16;
            if(!var16) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var13 = !var33;
case 237:
            if(!var13) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var32 = _closure1_slot33;
            var23 = _closure1_slot38;
            var12 = {};
            var12['gradientHeight'] = var48;
            var12['inline'] = var24;
            var12['scrimBase'] = var50;
            var13 = var32.bind(var5)(var23, var12);
case 239:
            var12 = new Array(14);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var13 = var33;
case 241:
            if(!var13) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var48 = _closure1_slot33;
            var32 = _closure1_slot7;
            var23 = {};
            var55 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var58 = _closure1_slot0;
            var61 = _closure1_slot3;
            var57 = 24;
            var57 = var61[var57];
            var58 = var58.bind(var5)(var57);
            var57 = var58.hex2rgb;
            var58 = var57.bind(var58)(var50, var59);
            var57 = var50;
            if(!(var30 != var58)) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var57 = var58;
case 245:
            var55['backgroundColor'] = var57;
            var23['style'] = var55;
            var55 = 'none';
            var23['pointerEvents'] = var55;
            var13 = var48.bind(var5)(var32, var23);
case 243:
            var12[1] = var13;
            var32 = _closure1_slot33;
            var23 = _closure1_slot0;
            var48 = _closure1_slot3;
            var13 = 74;
            var13 = var48[var13];
            var13 = var23.bind(var5)(var13);
            var23 = var13.ChatInputAccessibilityDivider;
            var13 = {};
            var13 = var32.bind(var5)(var23, var13);
            var12[2] = var13;
            var13 = null;
            if(!var20) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var32 = _closure1_slot33;
            var23 = _closure1_slot1;
            var48 = _closure1_slot3;
            var20 = 75;
            var20 = var48[var20];
            var23 = var23.bind(var5)(var20);
            var20 = {};
            var20['channel'] = var11;
            var46 = var49 !== var46;
            if(var46) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var48 = var42.chatInput;
            var57 = var48.current;
            var55 = var30 == var57;
            var48 = undefined;
            if(var55) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var55 = var57.getText;
            var48 = var55.bind(var57)();
case 251:
            var46 = var49 !== var48;
case 249:
            var20['hasInputText'] = var46;
            var13 = var32.bind(var5)(var23, var20);
case 247:
            var12[3] = var13;
            var23 = _closure1_slot34;
            var20 = _closure1_slot7;
            var13 = {};
            var32 = var34.accessories;
            var13['style'] = var32;
            var46 = var16;
            if(!var16) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var46 = var33;
case 253:
            if(!var46) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var49 = _closure1_slot33;
            var48 = _closure1_slot38;
            var32 = {};
            var32['gradientHeight'] = var51;
            var51 = true;
            var32['inline'] = var51;
            var32['scrimBase'] = var50;
            var46 = var49.bind(var5)(var48, var32);
case 255:
            var32 = new Array(3);
            var32[0] = var46;
            var46 = null;
            if(var3) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var50 = _closure1_slot33;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var48 = 76;
            var48 = var51[var48];
            var49 = var49.bind(var5)(var48);
            var48 = {};
            var48['channel'] = var11;
            var48['screenIndex'] = var10;
            var51 = undefined;
            if(!var16) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var57 = var34.floatingTypingWrapper;
            var55 = new Array(2);
            var55[0] = var57;
            var55[1] = var56;
            var51 = var55;
case 259:
            var48['wrapperStyle'] = var51;
            var46 = var50.bind(var5)(var49, var48);
case 257:
            var32[1] = var46;
            var48 = _closure1_slot0;
            var49 = _closure1_slot3;
            var46 = 22;
            var46 = var49[var46];
            var48 = var48.bind(var5)(var46);
            var46 = var48.isIOS;
            var48 = var46.bind(var48)();
            var46 = null;
            if(!var48) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var50 = _closure1_slot33;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var48 = 77;
            var48 = var51[var48];
            var49 = var49.bind(var5)(var48);
            var48 = {};
            var51 = var11.id;
            var48['channelId'] = var51;
            var48['screenIndex'] = var10;
            var48['onJumpToPresent'] = var8;
            var46 = var50.bind(var5)(var49, var48);
case 261:
            var32[2] = var46;
            var13['children'] = var32;
            var13 = var23.bind(var5)(var20, var13);
            var12[4] = var13;
            var13 = null;
            if(!var17) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var32 = _closure1_slot33;
            var20 = _closure1_slot1;
            var23 = _closure1_slot3;
            var17 = 78;
            var17 = var23[var17];
            var23 = var20.bind(var5)(var17);
            var20 = {};
            var20['channel'] = var11;
            var17 = var11.id;
            var13 = var32.bind(var5)(var23, var20, var17);
case 263:
            var12[5] = var13;
            var32 = _closure1_slot33;
            var17 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = 79;
            var13 = var23[var13];
            var13 = var17.bind(var5)(var13);
            var20 = var13.MemberActionsChatInputBannerGuardedOuter;
            var13 = {};
            var13['channel'] = var11;
            var13 = var32.bind(var5)(var20, var13);
            var12[6] = var13;
            var20 = _closure1_slot33;
            var13 = 80;
            var13 = var23[var13];
            var13 = var17.bind(var5)(var13);
            var17 = var13.DoubleTapToReactChatInputBanner;
            var13 = {};
            var13['channel'] = var11;
            var13 = var20.bind(var5)(var17, var13);
            var12[7] = var13;
            var13 = null;
            if(!var14) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var20 = _closure1_slot33;
            var17 = _closure1_slot1;
            var23 = _closure1_slot3;
            var14 = 81;
            var14 = var23[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var23 = var11.id;
            var14['channelId'] = var23;
            var13 = var20.bind(var5)(var17, var14);
case 265:
            var12[8] = var13;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var13 = var13[var60];
            var13 = var14.bind(var5)(var13);
            var13 = var13.KeyboardTypes;
            var14 = var13.EXPRESSION;
            var13 = null;
            if(!(var41 !== var14)) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var20 = _closure1_slot33;
            var17 = _closure1_slot1;
            var23 = _closure1_slot3;
            var14 = 82;
            var14 = var23[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var23 = var42.chatInputAutocomplete;
            var14['ref'] = var23;
            var14['analyticsLocations'] = var45;
            var14['channel'] = var11;
            var14['canMentionEveryone'] = var22;
            var14['keyboardType'] = var41;
            var22 = var37.handleChangeAutoCompleteVisibility;
            var14['onChangeAutoCompleteVisibility'] = var22;
            var14['commandsDisabled'] = var18;
            var14['canOnlyUseTextCommands'] = var19;
            var22 = var42.chatInput;
            var14['chatInputRef'] = var22;
            var14['screenIndex'] = var10;
            var13 = var20.bind(var5)(var17, var14);
case 267:
            var12[9] = var13;
            var13 = !var16;
            if(!var13) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var20 = _closure1_slot33;
            var17 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 83;
            var14 = var22[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var13 = var20.bind(var5)(var17, var14);
case 269:
            var12[10] = var13;
            var13 = !var16;
            if(!var13) { _fun0003_ip = 271; continue _fun0003 }
case 272:
            var20 = _closure1_slot33;
            var17 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 84;
            var14 = var22[var14];
            var17 = var17.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var22 = var42.chatInput;
            var14['chatInputRef'] = var22;
            var14['pendingEdit'] = var28;
            var14['pendingReply'] = var27;
            var13 = var20.bind(var5)(var17, var14);
case 271:
            var12[11] = var13;
            var17 = _closure1_slot33;
            var14 = _closure1_slot1;
            var20 = _closure1_slot3;
            var13 = 85;
            var13 = var20[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var20 = var42.chatInputAppCommandManager;
            var13['ref'] = var20;
            var13['canOnlyUseTextCommands'] = var19;
            var13['channel'] = var11;
            var19 = var42.chatInput;
            var13['chatInputRef'] = var19;
            var19 = var42.state;
            var13['chatInputStateRef'] = var19;
            var13['commandsDisabled'] = var18;
            var13 = var17.bind(var5)(var14, var13);
            var12[12] = var13;
            var14 = _closure1_slot33;
            var13 = {};
            var18 = var34.container;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var16;
            if(!var18) { _fun0003_ip = 273; continue _fun0003 }
case 274:
            var18 = var34.floatingContainer;
case 273:
            var17[1] = var18;
            var13['style'] = var17;
            var17 = var37.handleLayoutOfInputContainer;
            var13['onLayout'] = var17;
            var18 = _closure1_slot34;
            var17 = _closure1_slot35;
            var19 = {};
            if(var16) { _fun0003_ip = 275; continue _fun0003 }
case 276:
            var16 = new Array(2);
            var16[0] = var21;
            var23 = _closure1_slot34;
            var22 = _closure1_slot7;
            var20 = {};
            var32 = var34.containerInner;
            var20['style'] = var32;
            var20['collapsable'] = var24;
            var20['accessibilityElementsHidden'] = var25;
            var32 = undefined;
            if(!var25) { _fun0003_ip = 277; continue _fun0003 }
case 278:
            var32 = 'no-hide-descendants';
case 277:
            var20['importantForAccessibility'] = var32;
            var46 = var43;
            if(!var47) { _fun0003_ip = 279; continue _fun0003 }
case 280:
            var49 = _closure1_slot33;
            var48 = _closure1_slot7;
            var32 = {};
            var50 = var34.refreshButtonAlignment;
            var32['style'] = var50;
            var32['children'] = var43;
            var46 = var49.bind(var5)(var48, var32);
case 279:
            var32 = new Array(3);
            var32[0] = var46;
            var49 = _closure1_slot34;
            var48 = _closure1_slot7;
            var46 = {};
            var51 = var34.input;
            var50 = new Array(2);
            var50[0] = var51;
            var51 = {};
            var52 = var54 * var52;
            var52 = var53 - var52;
            var51['minHeight'] = var52;
            var50[1] = var51;
            var46['style'] = var50;
            var50 = new Array(2);
            var50[0] = var36;
            var53 = _closure1_slot34;
            var52 = _closure1_slot7;
            var51 = {};
            var54 = var34.rightAccessory;
            var51['style'] = var54;
            var55 = null;
            if(!var7) { _fun0003_ip = 281; continue _fun0003 }
case 282:
            var57 = _closure1_slot33;
            var56 = _closure1_slot1;
            var58 = _closure1_slot3;
            var54 = 88;
            var54 = var58[var54];
            var56 = var56.bind(var5)(var54);
            var54 = {};
            var59 = _closure1_slot0;
            var58 = var58[var60];
            var58 = var59.bind(var5)(var58);
            var58 = var58.KeyboardTypes;
            var58 = var58.EXPRESSION;
            var58 = var41 === var58;
            var54['active'] = var58;
            var54['showKeyboardIcon'] = var40;
            var58 = var37.handlePressExpression;
            var54['onPress'] = var58;
            var55 = var57.bind(var5)(var56, var54);
case 281:
            var54 = new Array(2);
            var54[0] = var55;
            var57 = _closure1_slot33;
            var56 = _closure1_slot1;
            var58 = _closure1_slot3;
            var55 = 86;
            var55 = var58[var55];
            var56 = var56.bind(var5)(var55);
            var55 = {};
            var55['analyticsLocations'] = var45;
            var58 = var42.chatInputCharCounter;
            var55['ref'] = var58;
            var55 = var57.bind(var5)(var56, var55);
            var54[1] = var55;
            var51['children'] = var54;
            var51 = var53.bind(var5)(var52, var51);
            var50[1] = var51;
            var46['children'] = var50;
            var46 = var49.bind(var5)(var48, var46);
            var32[1] = var46;
            var46 = var29;
            if(!var47) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var49 = _closure1_slot33;
            var48 = _closure1_slot7;
            var47 = {};
            var50 = var34.refreshButtonAlignment;
            var47['style'] = var50;
            var47['children'] = var29;
            var46 = var49.bind(var5)(var48, var47);
case 283:
            var32[2] = var46;
            var20['children'] = var32;
            var20 = var23.bind(var5)(var22, var20);
            var16[1] = var20;
            var19['children'] = var16;
            var16 = var19;
            _fun0003_ip = 285; continue _fun0003;
case 275:
            var20 = new Array(3);
            var20[0] = var21;
            var23 = _closure1_slot33;
            var22 = _closure1_slot1;
            var32 = _closure1_slot3;
            var21 = 83;
            var21 = var32[var21];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var21['channel'] = var11;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var23 = _closure1_slot34;
            var22 = _closure1_slot7;
            var21 = {};
            var46 = var34.floatingInputBox;
            var32 = new Array(3);
            var32[0] = var46;
            if(!var44) { _fun0003_ip = 286; continue _fun0003 }
case 287:
            var44 = var34.floatingInputBoxPressed;
case 286:
            var32[1] = var44;
            if(!var33) { _fun0003_ip = 288; continue _fun0003 }
case 289:
            var33 = var34.floatingInputBoxTyping;
case 288:
            var32[2] = var33;
            var21['style'] = var32;
            var21['onStartShouldSetResponder'] = var31;
            var21['onResponderRelease'] = var26;
            var21['collapsable'] = var24;
            var21['accessibilityElementsHidden'] = var25;
            var24 = undefined;
            if(!var25) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var24 = 'no-hide-descendants';
case 290:
            var21['importantForAccessibility'] = var24;
            var26 = _closure1_slot33;
            var25 = _closure1_slot1;
            var31 = _closure1_slot3;
            var24 = 84;
            var24 = var31[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var24['channel'] = var11;
            var31 = var42.chatInput;
            var24['chatInputRef'] = var31;
            var24['pendingEdit'] = var28;
            var24['pendingReply'] = var27;
            var25 = var26.bind(var5)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot34;
            var26 = _closure1_slot7;
            var25 = {};
            var28 = var34.floatingMainContents;
            var25['style'] = var28;
            var28 = var30 != var43;
            var31 = null;
            if(!var28) { _fun0003_ip = 292; continue _fun0003 }
case 293:
            var33 = _closure1_slot33;
            var32 = _closure1_slot7;
            var28 = {};
            var44 = {};
            var44['paddingBottom'] = var35;
            var44['paddingLeft'] = var35;
            var28['style'] = var44;
            var28['children'] = var43;
            var31 = var33.bind(var5)(var32, var28);
case 292:
            var28 = new Array(4);
            var28[0] = var31;
            var33 = _closure1_slot34;
            var32 = _closure1_slot7;
            var31 = {};
            var43 = var34.inputFlat;
            var34 = new Array(2);
            var34[0] = var43;
            var43 = {};
            var43['paddingBottom'] = var35;
            var34[1] = var43;
            var31['style'] = var34;
            var34 = new Array(2);
            var34[0] = var36;
            var44 = _closure1_slot33;
            var43 = _closure1_slot1;
            var46 = _closure1_slot3;
            var36 = 86;
            var36 = var46[var36];
            var43 = var43.bind(var5)(var36);
            var36 = {};
            var36['analyticsLocations'] = var45;
            var45 = var42.chatInputCharCounter;
            var36['ref'] = var45;
            var36 = var44.bind(var5)(var43, var36);
            var34[1] = var36;
            var31['children'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var28[1] = var31;
            var30 = null;
            if(!var7) { _fun0003_ip = 294; continue _fun0003 }
case 295:
            var33 = _closure1_slot33;
            var32 = _closure1_slot7;
            var31 = {};
            var34 = {};
            var34['paddingBottom'] = var35;
            var31['style'] = var34;
            var36 = _closure1_slot33;
            var35 = _closure1_slot1;
            var43 = _closure1_slot3;
            var34 = 87;
            var34 = var43[var34];
            var35 = var35.bind(var5)(var34);
            var34 = {};
            var42 = var42.chatInputRightActions;
            var34['ref'] = var42;
            var34['channel'] = var11;
            var34['keyboardType'] = var41;
            var34['showKeyboardIcon'] = var40;
            if(var3) { _fun0003_ip = 296; continue _fun0003 }
case 297:
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var40 = 67;
            var40 = var42[var40];
            var41 = var41.bind(var5)(var40);
            var40 = var41.isPremiumGiftingSupported;
            var38 = var40.bind(var41)();
case 296:
            if(!var38) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            var38 = !var39;
case 298:
            var34['shouldShowGiftButton'] = var38;
            var38 = var37.handlePressAction;
            var34['onPressAction'] = var38;
            var37 = var37.handlePressExpression;
            var34['onPressExpression'] = var37;
            var34 = var36.bind(var5)(var35, var34);
            var31['children'] = var34;
            var30 = var33.bind(var5)(var32, var31);
case 294:
            var28[2] = var30;
            var28[3] = var29;
            var25['children'] = var28;
            var25 = var27.bind(var5)(var26, var25);
            var24[1] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[2] = var21;
            var19['children'] = var20;
            var16 = var19;
case 285:
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var14.bind(var5)(var15, var13);
            var12[13] = var13;
            var1['children'] = var12;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(var3) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var4 = _closure1_slot33;
            var3 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 89;
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
case 300:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 90;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();