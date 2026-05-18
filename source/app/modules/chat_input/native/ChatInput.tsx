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
            var1 = arg1;
            var12 = var1.gradientHeight;
            var7 = var1.inline;
            var8 = var1.scrimBase;
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var5 = 22;
            var1 = var1[var5];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.hex2rgb;
            var11 = 1;
            var1 = var1.bind(var2)(var8, var11);
            var2 = null;
            var10 = var8;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var1;
case 2:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0;
            var1 = var3.bind(var5)(var8, var1);
            var2 = var2 != var1;
            var13 = 'transparent';
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var1;
case 4:
            var3 = _closure1_slot34;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = {'position': 'absolute', 'top': null, 'left': 0, 'right': 0, 'bottom': 0};
            var8 = -var12;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = 2;
            var7 = var8 / var7;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var7 = var8;
case 8:
            var5['top'] = var7;
            var1['style'] = var5;
            var5 = 'none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot33;
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var5 = 23;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useVoiceMessagesUIStore;
    var _closure1_slot11 = var4;
    var4 = 8;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.updateChatInputContainerHeight;
    var _closure1_slot17 = var8;
    var8 = var4.updateShowingAutoComplete;
    var _closure1_slot18 = var8;
    var8 = var4.useChatIsAtBottom;
    var _closure1_slot19 = var8;
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot21 = var8;
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot22 = var8;
    var4 = var4.ChatInputActionType;
    var _closure1_slot23 = var4;
    var4 = 14;
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
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot30 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiInteractionPoint;
    var _closure1_slot31 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot32 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot33 = var8;
    var8 = var4.jsxs;
    var _closure1_slot34 = var8;
    var4 = var4.Fragment;
    var _closure1_slot35 = var4;
    var4 = 19;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg2;
            var1 = {};
            var2 = {};
            var3 = 'relative';
            var2['position'] = var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot3;
            var7 = 20;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['paddingVertical'] = var3;
            var8 = _closure1_slot21;
            var3 = _closure1_slot22;
            var3 = var8 - var3;
            var2['paddingHorizontal'] = var3;
            var3 = null;
            var8 = var5;
            if(!(var3 == var8)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_BASE_LOW;
case 9:
            var2['backgroundColor'] = var8;
            var8 = 1;
            var2['borderTopWidth'] = var8;
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderColor'] = var9;
            var1['container'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var1['containerInner'] = var2;
            var2 = {};
            var2['flex'] = var8;
            var8 = arg3;
            if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = {};
            var9 = 6;
            var8['marginLeft'] = var9;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var8 = {'marginLeft': 0, 'marginTop': 0};
case 13:
            var12 = var2;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var1['inputDefault'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'stretch', 'borderRadius': null, 'paddingHorizontal': null, 'marginHorizontal': null, 'overflow': 'hidden', 'flex': 1};
            var9 = _closure1_slot1;
            var8 = _closure1_slot3;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_BORDER_RADIUS;
            var2['borderRadius'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_PADDING;
            var2['paddingHorizontal'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_MARGIN_HORIZONTAL;
            var2['marginHorizontal'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_BORDER_WIDTH;
            var2['borderWidth'] = var10;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.INPUT_BORDER_DEFAULT;
            var2['borderColor'] = var8;
            if(!(var3 == var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_BACKGROUND;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 16:
            var2['backgroundColor'] = var3;
            var1['input'] = var2;
            var2 = {'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center'};
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
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
            var2['paddingBottom'] = var8;
            var1['floatingContainerKeyboardOpen'] = var2;
            var2 = {'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'flexDirection': 'column', 'overflow': 'hidden'};
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.MOBILE_FLOATINGBAR_BACKGROUND;
            var2['backgroundColor'] = var8;
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_MUTED;
            var2['borderColor'] = var8;
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var1['floatingInputBox'] = var2;
            var2 = {};
            var8 = var10[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_SUBTLE;
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
            var8 = 21;
            var8 = var10[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var9.isAndroid;
            var9 = var8.bind(var9)();
            var8 = -6;
            if(!var9) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = -5;
case 17:
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
            var2['overflow'] = var3;
            var1['overflowVisible'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var14 = var1.isResourceChannel;
            var10 = var1.screenIndex;
            var _closure2_slot1 = var10;
            var57 = var1.setNoExtractUI;
            var34 = var1.secondaryTextFieldRef;
            var32 = var1.threadCreationCallback;
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
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 24;
            var1 = var3[var1];
            var9 = var7.bind(var5)(var1);
            var6 = var9.useMobileVisualRefreshConfig;
            var1 = {};
            var12 = 'ChatInput';
            var1['location'] = var12;
            var1 = var6.bind(var9)(var1);
            var44 = var1.enabled;
            var16 = var1.chatInputFloating;
            var _closure2_slot2 = var16;
            var1 = 25;
            var6 = var3[var1];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useGradientValue;
            var1 = var3[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var6.bind(var9)(var1);
            var6 = 26;
            var6 = var3[var6];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useYouBarGradientBackground;
            var9 = var6.bind(var9)();
            var6 = _closure1_slot36;
            var38 = var6.bind(var5)(var9, var1, var16);
            var12 = 27;
            var6 = var3[var12];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useToken;
            var9 = _closure1_slot1;
            var29 = 20;
            var3 = var3[var29];
            var3 = var9.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var46 = var6.bind(var7)(var3);
            var30 = null;
            if(!(var30 != var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var46 = var1;
case 19:
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var1 = var17[var12];
            var7 = var13.bind(var5)(var1);
            var3 = var7.useToken;
            var6 = _closure1_slot1;
            var1 = var17[var29];
            var1 = var6.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var9 = var3.bind(var7)(var1);
            var1 = var17[var12];
            var7 = var13.bind(var5)(var1);
            var3 = var7.useToken;
            var1 = var17[var29];
            var1 = var6.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED;
            var1 = var3.bind(var7)(var1);
            var3 = var17[var12];
            var15 = var13.bind(var5)(var3);
            var7 = var15.useToken;
            var3 = var17[var29];
            var3 = var6.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT;
            var7 = var7.bind(var15)(var3);
            var3 = var17[var12];
            var15 = var13.bind(var5)(var3);
            var13 = var15.useToken;
            var3 = var17[var29];
            var3 = var6.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var3 = var13.bind(var15)(var3);
            _closure2_slot3 = var3;
            var15 = _closure1_slot6;
            var18 = var15.useMemo;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var52 = var18.bind(var15)(var3, var13);
            var3 = var15.useRef;
            var3 = var3.bind(var15)(var16);
            _closure2_slot4 = var3;
            var3['current'] = var16;
            var3 = var15.useState;
            var24 = false;
            var3 = var3.bind(var15)(var24);
            var13 = _closure1_slot5;
            var51 = 2;
            var3 = var13.bind(var5)(var3, var51);
            var21 = 0;
            var41 = var3[var21];
            var55 = 1;
            var3 = var3[var55];
            _closure2_slot5 = var3;
            var3 = 28;
            var3 = var17[var3];
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var47 = true;
            var3['includeCustomKeyboard'] = var47;
            var3 = var6.bind(var5)(var3);
            _closure2_slot6 = var3;
            var6 = var15.useState;
            var6 = var6.bind(var15)(var3);
            var6 = var13.bind(var5)(var6, var51);
            var19 = var6[var21];
            var6 = var6[var55];
            _closure2_slot7 = var6;
            var13 = var15.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var3 = global;
                    var6 = var3.setTimeout;
                    var5 = undefined;
                    var4 = function() {
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = 100;
                    var3 = var6.bind(var5)(var4, var3);
                    var _closure3_slot0 = var3;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var2;
case 21:
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var13.bind(var15)(var3, var6);
            var3 = var30 != var32;
            _closure2_slot8 = var3;
            var6 = var11.isPrivate;
            var15 = var6.bind(var11)();
            if(!var15) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var15 = !var3;
case 23:
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = 29;
            var6 = var17[var6];
            var17 = var13.bind(var5)(var6);
            var13 = var17.useTypingUserIds;
            var6 = var11.id;
            var17 = var13.bind(var17)(var6, var55);
            var6 = _closure1_slot20;
            var6 = var6.bind(var5)(var10);
            var40 = var16;
            if(!var16) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var13 = var11.rateLimitPerUser;
            var13 = var13 > var21;
            if(var13) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var17 = var17.length;
            var13 = var17 > var21;
case 27:
            var40 = var13;
case 25:
            if(!var40) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var40 = !var6;
case 29:
            var6 = _closure1_slot19;
            var6 = var6.bind(var5)(var10);
            var43 = var9;
            if(!var6) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var43 = var1;
case 31:
            var48 = var7;
            if(!var6) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var48 = var1;
case 33:
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 30;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot14;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 22:
                    var4 = _closure1_slot14;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var28 = var17.bind(var18)(var13, var9);
            _closure2_slot9 = var28;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 22:
                    var4 = _closure1_slot10;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var27 = var17.bind(var18)(var13, var9);
            _closure2_slot10 = var27;
            var1 = var1[var6];
            var13 = var7.bind(var5)(var1);
            var9 = var13.useStateFromStores;
            var1 = _closure1_slot16;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0007_ip = 3; continue _fun0007 }
case 36:
                    var4 = _closure1_slot16;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot13;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 37:
                    return var1;
case 3:
                    var1 = false;
                    return var1;
                }
            };
            var13 = var9.bind(var13)(var7, var1);
            var17 = _closure1_slot6;
            var9 = var17.useMemo;
            var1 = var11.id;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var3;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot8;
                    var5 = _closure1_slot13;
                    if(var1) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var1 = var5.ChannelMessage;
                    _fun0008_ip = 41; continue _fun0008;
case 39:
                    var1 = var5.FirstThreadMessage;
case 41:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var33 = var9.bind(var17)(var1, var7);
            if(!(var30 != var28)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var33 = var28;
case 42:
            var7 = _closure1_slot0;
            var18 = _closure1_slot3;
            var1 = var18[var6];
            var20 = var7.bind(var5)(var1);
            var17 = var20.useStateFromStoresObject;
            var1 = _closure1_slot15;
            var9 = new Array(1);
            var9[0] = var1;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var3;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var7 = _closure1_slot15;
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
                    if(var2) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var11 = _closure1_slot15;
                    var7 = var11.can;
                    var3 = _closure1_slot29;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 44:
                    var7 = _closure1_slot15;
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
                    var7 = _closure2_slot8;
                    if(var7) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var7 = var4;
                    if(var4) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var7 = var10;
case 48:
                    var3 = var7;
case 46:
                    var3 = !var3;
                    if(var3) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var3 = var1;
case 50:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    if(!var9) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var9 = !var3;
case 54:
                    var7 = var9;
case 52:
                    if(!var7) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var9 = _closure2_slot8;
                    var7 = !var9;
case 56:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var7 = var8;
case 58:
                    if(!var7) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var7 = !var3;
case 60:
                    if(!var7) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var8 = _closure2_slot8;
                    var7 = !var8;
case 62:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0009_ip = 20; continue _fun0009 }
case 64:
                    var4 = var6;
case 20:
                    if(!var4) { _fun0009_ip = 65; continue _fun0009 }
case 19:
                    var4 = !var3;
case 65:
                    if(!var4) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var5 = _closure2_slot8;
                    var4 = !var5;
case 66:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var1 = var17.bind(var20)(var9, var1, var7);
            var22 = var1.canMentionEveryone;
            var20 = var1.canUpload;
            var23 = var1.canSendVoiceMessage;
            var7 = var1.editable;
            _closure2_slot11 = var7;
            var9 = var1.canCreateThreads;
            var17 = _closure1_slot1;
            var1 = 32;
            var1 = var18[var1];
            var1 = var17.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var42 = var1.analyticsLocations;
            var17 = var3;
            if(var17) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var17 = var30 != var28;
case 68:
            if(var17) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var18 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 31;
            var1 = var25[var1];
            var18 = var18.bind(var5)(var1);
            var1 = var18.getIsActiveChannelOrUnarchivableThread;
            var1 = var1.bind(var18)(var11);
            var17 = !var1;
case 70:
            var18 = var30 != var27;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var1 = 31;
            var1 = var26[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanStartThread;
            var60 = var1.bind(var25)(var11);
            if(!var60) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var1 = _closure1_slot25;
            var26 = var1.GUILD_THREADS_ONLY;
            var25 = var26.has;
            var1 = var11.type;
            var1 = var25.bind(var26)(var1);
            var60 = !var1;
case 72:
            if(!var60) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var60 = !var3;
case 74:
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var1 = 33;
            var1 = var26[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanPostPollsInChannel;
            var39 = var1.bind(var25)(var11);
            if(!var39) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var39 = !var3;
case 76:
            var25 = _closure1_slot0;
            var1 = _closure1_slot3;
            var26 = var1[var12];
            var36 = var25.bind(var5)(var26);
            var35 = var36.useToken;
            var26 = _closure1_slot1;
            var31 = var1[var29];
            var31 = var26.bind(var5)(var31);
            var31 = var31.modules;
            var31 = var31.mobile;
            var31 = var31.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var50 = var35.bind(var36)(var31);
            _closure2_slot12 = var50;
            var12 = var1[var12];
            var25 = var25.bind(var5)(var12);
            var12 = var25.useToken;
            var1 = var1[var29];
            var1 = var26.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_PILL_BORDER_WIDTH;
            var49 = var12.bind(var25)(var1);
            if(var44) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var12 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 34;
            var1 = var25[var1];
            var12 = var12.bind(var5)(var1);
            var1 = var12.getChatInputMinHeight;
            var12 = var1.bind(var12)();
            _fun0003_ip = 80; continue _fun0003;
case 78:
            var1 = var51 * var49;
            var12 = var50 - var1;
case 80:
            _closure2_slot13 = var12;
            var26 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 35;
            var25 = var25[var1];
            var29 = var26.bind(var5)(var25);
            var26 = var29.useSharedValue;
            var25 = var12;
            if(!var16) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var25 = var50;
case 81:
            var26 = var26.bind(var29)(var25);
            _closure2_slot14 = var26;
            var29 = _closure1_slot6;
            var31 = var29.useEffect;
            var25 = new Array(4);
            var25[0] = var16;
            var25[1] = var50;
            var25[2] = var12;
            var25[3] = var26;
            var12 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var1 = _closure2_slot2;
                    if(var1) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var1 = _closure2_slot13;
                    _fun0010_ip = 85; continue _fun0010;
case 83:
                    var1 = _closure2_slot12;
case 85:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var31.bind(var29)(var12, var25);
            var31 = _closure1_slot0;
            var25 = _closure1_slot3;
            var12 = var25[var1];
            var35 = var31.bind(var5)(var12);
            var31 = var35.useAnimatedStyle;
            var12 = function je() {
                var1 = {};
                var3 = _closure2_slot14;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['minHeight'] = var2;
                return var1;
            };
            var36 = {};
            var36['textFieldHeight'] = var26;
            var12['__closure'] = var36;
            var36 = 11048691841625.0;
            var12['__workletHash'] = var36;
            var36 = _closure1_slot37;
            var12['__initData'] = var36;
            var53 = var31.bind(var35)(var12);
            var12 = var29.useState;
            var29 = var12.bind(var29)(var24);
            var12 = _closure1_slot5;
            var12 = var12.bind(var5)(var29, var51);
            var45 = var12[var21];
            var12 = var12[var55];
            _closure2_slot15 = var12;
            var21 = _closure1_slot1;
            var12 = 36;
            var12 = var25[var12];
            var12 = var21.bind(var5)(var12);
            var36 = var12.bind(var5)();
            var21 = _closure1_slot11;
            var12 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var25 = var21.bind(var5)(var12);
            var35 = !var3;
            var54 = var35;
            if(var3) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var21 = _closure1_slot0;
            var29 = _closure1_slot3;
            var12 = 37;
            var12 = var29[var12];
            var21 = var21.bind(var5)(var12);
            var12 = var21.getIsAppLauncherEnabled;
            var54 = var12.bind(var21)(var11);
case 86:
            var12 = _closure1_slot0;
            var29 = _closure1_slot3;
            var6 = var29[var6];
            var31 = var12.bind(var5)(var6);
            var21 = var31.useStateFromStores;
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
            var59 = var21.bind(var31)(var12, var6);
            var6 = _closure1_slot1;
            var12 = 38;
            var12 = var29[var12];
            var21 = var6.bind(var5)(var12);
            var12 = {};
            var12['channel'] = var11;
            var31 = !var7;
            var12['isReadonly'] = var31;
            var12['isCreatingThread'] = var3;
            var12 = var21.bind(var5)(var12);
            var58 = var12.placeholder;
            var56 = var12.accessibilityLabel;
            var12 = 39;
            var12 = var29[var12];
            var21 = var6.bind(var5)(var12);
            var12 = {};
            var31 = {};
            var31['analyticsLocations'] = var42;
            var31['canUpload'] = var20;
            var31['channel'] = var11;
            var31['defaultValue'] = var33;
            var31['hasAttachmentsToUpload'] = var13;
            var31['pendingEdit'] = var28;
            var31['pendingReply'] = var27;
            var31['screenIndex'] = var10;
            var31['secondaryTextFieldRef'] = var34;
            var31['threadCreationCallback'] = var32;
            var12['chatInputProps'] = var31;
            var12['chatInputTextFieldHeight'] = var26;
            var26 = arg2;
            var12['ref'] = var26;
            var37 = var21.bind(var5)(var12);
            _closure2_slot16 = var37;
            var31 = _closure1_slot6;
            var26 = var31.useEffect;
            var21 = new Array(1);
            var21[0] = var37;
            var12 = function() {
                var2 = _closure2_slot16;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot16;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var12 = var26.bind(var31)(var12, var21);
            var26 = var31.useEffect;
            var21 = new Array(4);
            var21[0] = var37;
            var21[1] = var11;
            var21[2] = var28;
            var21[3] = var27;
            var12 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot16;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0011_ip = 88; continue _fun0011 }
case 35:
                    var5 = _closure2_slot10;
                    var3 = var2 != var5;
case 88:
                    if(var3) { _fun0011_ip = 37; continue _fun0011 }
case 41:
                    var5 = var2 == var4;
                    if(!var5) { _fun0011_ip = 89; continue _fun0011 }
case 38:
                    var6 = _closure2_slot9;
                    var5 = var2 != var6;
case 89:
                    var3 = var5;
case 37:
                    if(!var3) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                    var3 = _closure2_slot16;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 90; continue _fun0011 }
case 92:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 90:
                    var3 = _closure2_slot16;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 40;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0011_ip = 95; continue _fun0011 }
case 93:
                    var3 = _closure2_slot9;
                    if(!(var4 !== var3)) { _fun0011_ip = 96; continue _fun0011 }
case 97:
                    var3 = _closure2_slot16;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 96; continue _fun0011 }
case 11:
                    var4 = var5.setText;
                    var3 = _closure2_slot9;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0011_ip = 98; continue _fun0011 }
case 47:
                    var3 = _closure2_slot9;
case 98:
                    var3 = var4.bind(var5)(var3);
                    _fun0011_ip = 96; continue _fun0011;
case 95:
                    var3 = _closure2_slot16;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0011_ip = 96; continue _fun0011 }
case 99:
                    var2 = var3.setText;
                    var1 = _closure2_slot16;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var26.bind(var31)(var12, var21);
            var26 = var31.useEffect;
            var21 = new Array(1);
            var21[0] = var37;
            var12 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                        var5 = var3.channelId;
case 100:
                        var4 = _closure2_slot16;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0012_ip = 38; continue _fun0012 }
case 88:
                        var6 = var6.channel;
                        var4 = var6.id;
case 38:
                        if(!(var5 === var4)) { _fun0012_ip = 92; continue _fun0012 }
case 102:
                        var3 = _closure2_slot16;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0012_ip = 92; continue _fun0012 }
case 10:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 92:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 41;
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
                    var1 = 41;
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
            var12 = var26.bind(var31)(var12, var21);
            var26 = var31.useMemo;
            var21 = new Array(1);
            var21[0] = var37;
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
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = false;
                        var2 = var2.bind(var3)(var8);
                        var4 = _closure2_slot17;
                        var2 = var4.handleTextOrFocusChange;
                        var2 = var2.bind(var4)(var5, var8);
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 103:
                        var4 = _closure2_slot16;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0013_ip = 105; continue _fun0013 }
case 106:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 105:
                        var4 = _closure2_slot16;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot16;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot16;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 107:
                        var3 = _closure2_slot16;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 109:
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
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = true;
                        var2 = var2.bind(var3)(var8);
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot17;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 111; continue _fun0014 }
case 112:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 111:
                        var3 = _closure2_slot16;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 98; continue _fun0014 }
case 113:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 98:
                        var3 = _closure2_slot16;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 114; continue _fun0014 }
case 115:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot16;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 114:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot16;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot16;
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
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 116; continue _fun0015 }
case 117:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 116:
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
                        if(!var1) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                        var1 = var2 !== var4;
case 118:
                        if(!var1) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                        var2 = _closure2_slot16;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0016_ip = 120; continue _fun0016 }
case 3:
                        var1 = _closure2_slot16;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 120:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0017_ip = 122; continue _fun0017 }
case 85:
                        var1 = _closure2_slot16;
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
case 122:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot18;
                    var1 = _closure2_slot16;
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
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0018_ip = 4; continue _fun0018 }
case 123:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0018_ip = 124; continue _fun0018 }
case 125:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 124:
                        if(var2) { _fun0018_ip = 4; continue _fun0018 }
case 126:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot16;
                        var1 = var1.props;
                        var1 = var1.current;
                        var1 = var1.channel;
                        var1 = var2.bind(var3)(var4, var1);
case 4:
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
                            if(var2) { _fun0019_ip = 127; continue _fun0019 }
case 36:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 128:
                            return var4;
case 129:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0019_ip = 130; continue _fun0019 }
case 131:
                            var3 = _closure2_slot16;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0019_ip = 132; continue _fun0019 }
case 133:
                            var3 = _closure2_slot16;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0019_ip = 132; continue _fun0019 }
case 134:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 43;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 135:
                            return var3;
case 136:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0019_ip = 137; continue _fun0019 }
case 138:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 44;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot16;
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
                            var10 = 45;
                            var10 = var12[var10];
                            var10 = var11.bind(var4)(var10);
                            var10 = var10.UploadPlatform;
                            var10 = var10.REACT_NATIVE;
                            var9['platform'] = var10;
                            var10 = 46;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var11.v4;
                            var10 = var10.bind(var11)();
                            var9['id'] = var10;
                            var5['file'] = var9;
                            var8 = _closure1_slot13;
                            var8 = var8.ChannelMessage;
                            var5['draftType'] = var8;
                            var5 = var6.bind(var7)(var5);
case 132:
                            return var4;
case 137:
                            return var3;
case 130:
                            return var2;
case 127:
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
                        if(!(var1 !== var2)) { _fun0020_ip = 139; continue _fun0020 }
case 140:
                        var1 = _closure1_slot23;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0020_ip = 141; continue _fun0020 }
case 129:
                        var1 = _closure1_slot23;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0020_ip = 142; continue _fun0020 }
case 143:
                        var1 = _closure1_slot23;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0020_ip = 144; continue _fun0020 }
case 145:
                        var1 = _closure1_slot23;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0020_ip = 146; continue _fun0020 }
case 120:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 47;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 54;
                        var1 = var7[var1];
                        var7 = var3.bind(var2)(var1);
                        var3 = var7.handleSelectThread;
                        var2 = _closure2_slot16;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot16;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0020_ip = 146; continue _fun0020;
case 144:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 56;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.markPotentialBadState;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 47;
                        var8 = var7[var1];
                        var9 = var2.bind(var3)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 21;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0020_ip = 147; continue _fun0020 }
case 65:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 55;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 147:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 54;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot16;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot16;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0020_ip = 146; continue _fun0020;
case 142:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 47;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 54;
                        var1 = var7[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var7 = _closure2_slot16;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot28;
                        var1['uploadLimit'] = var7;
                        var7 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 55;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var7;
                        var7 = function onRestoreKeyboard() {
                            var3 = _closure2_slot17;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 49;
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
                            var1 = 54;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot16;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 45;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var3 = var2.IMAGE_PICKER;
                            var2 = arg1;
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        };
                        var1['onSelectFiles'] = var6;
                        var6 = _closure1_slot13;
                        var6 = var6.ChannelMessage;
                        var1['draftType'] = var6;
                        var1 = var2.bind(var3)(var1);
                        _fun0020_ip = 146; continue _fun0020;
case 141:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 47;
                        var7 = var3[var1];
                        var6 = undefined;
                        var8 = var2.bind(var6)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 50;
                        var1 = var3[var1];
                        var9 = var2.bind(var6)(var1);
                        var8 = var9.trackWithMetadata;
                        var1 = _closure1_slot24;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 48;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot26;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot16;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot16;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.guild_id;
                        var1['guild_id'] = var11;
                        var1 = var9.bind(var10)(var8, var1);
                        var8 = _closure1_slot2;
                        var1 = 51;
                        var1 = var3[var1];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.dismissNewActivityIndicator;
                        var1 = var1.bind(var8)();
                        var1 = 52;
                        var1 = var3[var1];
                        var3 = var2.bind(var6)(var1);
                        var2 = var3.setAppLauncherA11yFocusReturnRef;
                        var8 = null;
                        var9 = var8 != var5;
                        var1 = null;
                        if(!var9) { _fun0020_ip = 148; continue _fun0020 }
case 149:
                        var1 = var5;
case 148:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot17;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 49;
                        var5 = var11[var5];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.KeyboardTypes;
                        var5 = var5.APP_LAUNCHER;
                        var1['type'] = var5;
                        var5 = {};
                        var9 = _closure1_slot30;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 53;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot16;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0020_ip = 150; continue _fun0020 }
case 151:
                        var6 = var7.name;
case 150:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0020_ip = 146; continue _fun0020;
case 139:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 47;
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
                        var1 = 48;
                        var1 = var3[var1];
                        var7 = var2.bind(var6)(var1);
                        var5 = var7.track;
                        var1 = _closure1_slot24;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot26;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot16;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot16;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0020_ip = 152; continue _fun0020 }
case 153:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var7 = var5.bind(var6)(var3);
                        var3 = var7.getKeyboardType;
                        var3 = var3.bind(var7)();
                        var7 = 49;
                        var2 = var2[var7];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.APP_LAUNCHER;
                        if(!(var3 !== var2)) { _fun0020_ip = 154; continue _fun0020 }
case 152:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 36;
                        var3 = var2[var3];
                        var8 = var5.bind(var6)(var3);
                        var3 = var8.getKeyboardType;
                        var3 = var3.bind(var8)();
                        var10 = 49;
                        var2 = var2[var10];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.MEDIA;
                        if(!(var3 === var2)) { _fun0020_ip = 155; continue _fun0020 }
case 156:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0020_ip = 155; continue _fun0020 }
case 157:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 155:
                        var5 = _closure2_slot17;
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
                        _fun0020_ip = 146; continue _fun0020;
case 154:
                        var3 = _closure2_slot17;
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
case 146:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressAction'] = var3;
                var3 = function handlePollsPress() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 47;
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
                    var2 = 48;
                    var2 = var4[var2];
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot24;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot26;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot16;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot16;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.guild_id;
                    var2['guild_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 55;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.dismissKeyboard;
                    var2 = var2.bind(var6)();
                    var2 = 57;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot16;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot17;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 49;
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
                    var2 = 47;
                    var7 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var7.bind(var8)(var2);
                    var2 = 54;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var7 = _closure2_slot16;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot28;
                    var2['uploadLimit'] = var6;
                    var6 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 55;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2['onDismissKeyboard'] = var6;
                    var6 = function onRestoreKeyboard() {
                        var3 = _closure2_slot17;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 49;
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
                        var1 = 54;
                        var2 = var7[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.addImagesFromPicker;
                        var2 = _closure2_slot16;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var4 = var2.id;
                        var2 = 45;
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
                    var1 = 58;
                    var3 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot31;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot17;
                    var3 = var4.handleToggleKeyboard;
                    var2 = {};
                    var5 = 49;
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
                    var1 = _closure2_slot16;
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
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot17;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot16;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0021_ip = 108; continue _fun0021 }
case 158:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 108:
                        var6 = _closure2_slot16;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 99; continue _fun0021 }
case 159:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot16;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 99:
                        var6 = _closure2_slot16;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 160; continue _fun0021 }
case 161:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 160:
                        if(!(var4 !== var5)) { _fun0021_ip = 162; continue _fun0021 }
case 163:
                        var4 = _closure2_slot16;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot16;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0021_ip = 164; continue _fun0021 }
case 165:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 164:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 162:
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
                        if(!(var1 === var3)) { _fun0022_ip = 166; continue _fun0022 }
case 117:
                        var1 = _closure2_slot16;
                        var1 = var1.chatInput;
                        var3 = var1.current;
                        var1 = var3.blur;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 60;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openCommandAttachmentPreview;
                        var3 = _closure2_slot16;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot16;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0022_ip = 8; continue _fun0022 }
case 106:
                        var1 = function() {
                            var1 = _closure2_slot16;
                            var1 = var1.chatInput;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
case 8:
                        var12 = var6;
                        var11 = var4;
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 166:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapAction'] = var3;
                var3 = function handleTextOrFocusChange(arg1, arg2) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var1 = var3.length;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0023_ip = 38; continue _fun0023 }
case 167:
                        if(var4) { _fun0023_ip = 168; continue _fun0023 }
case 169:
                        var5 = var3.length;
                        var1 = _closure2_slot16;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.textPrev;
                        var1 = var1.length;
                        if(!(!(var5 > var1))) { _fun0023_ip = 168; continue _fun0023 }
case 38:
                        var1 = var3.length;
                        if(!(var2 === var1)) { _fun0023_ip = 54; continue _fun0023 }
case 170:
                        var1 = _closure2_slot16;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0023_ip = 171; continue _fun0023 }
case 172:
                        var5 = var6.onShowActions;
                        var5 = var5.bind(var6)(var4);
case 171:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0023_ip = 54; continue _fun0023 }
case 173:
                        var1 = var2.onShowActions;
                        var1 = var1.bind(var2)(var4);
                        _fun0023_ip = 54; continue _fun0023;
case 168:
                        var5 = _closure1_slot9;
                        var2 = var5.isOpen;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0023_ip = 174; continue _fun0023 }
case 175:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
case 174:
                        var1 = _closure2_slot16;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0023_ip = 176; continue _fun0023 }
case 177:
                        var5 = var6.onDismissActions;
                        var5 = var5.bind(var6)(var4);
case 176:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0023_ip = 54; continue _fun0023 }
case 178:
                        var1 = var2.onDismissActions;
                        var1 = var1.bind(var2)(var4);
case 54:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 62;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getMaxMessageLength;
                        var7 = var2.bind(var5)();
                        var5 = _closure2_slot16;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0023_ip = 137; continue _fun0023 }
case 66:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 137:
                        if(!var5) { _fun0023_ip = 179; continue _fun0023 }
case 130:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 48;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot24;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 179:
                        var4 = _closure2_slot16;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot16;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot16;
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
                        var1 = _closure2_slot16;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0024_ip = 102; continue _fun0024 }
case 131:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 102:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTextFlushed'] = var3;
                var2 = function handleToggleKeyboard(arg1) {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot9;
                        var1 = var3.isOpen;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0025_ip = 116; continue _fun0025 }
case 180:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 61;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 116:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 49;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0025_ip = 181; continue _fun0025 }
case 182:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 36;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0025_ip = 181; continue _fun0025 }
case 183:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0025_ip = 184; continue _fun0025;
case 181:
                        var2 = _closure2_slot16;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 184:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var34 = var26.bind(var31)(var12, var21);
            _closure2_slot17 = var34;
            var26 = var31.useCallback;
            var21 = new Array(4);
            var21[0] = var16;
            var21[1] = var3;
            var21[2] = var10;
            var21[3] = var37;
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
                    if(!var1) { _fun0026_ip = 118; continue _fun0026 }
case 119:
                    var1 = var2 !== var4;
case 118:
                    if(!var1) { _fun0026_ip = 185; continue _fun0026 }
case 121:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0026_ip = 185; continue _fun0026 }
case 21:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0026_ip = 186; continue _fun0026 }
case 187:
                    var4 = _closure1_slot17;
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot15;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
case 186:
                    var1 = _closure2_slot16;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 185:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var26.bind(var31)(var12, var21);
            var32 = var31.useCallback;
            var26 = function() {
                var1 = true;
                return var1;
            };
            var21 = new Array(0);
            var32 = var32.bind(var31)(var26, var21);
            var26 = var31.useCallback;
            var21 = new Array(2);
            var21[0] = var7;
            var21[1] = var37;
            var4 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot11;
                    if(!var2) { _fun0027_ip = 188; continue _fun0027 }
case 36:
                    var1 = _closure2_slot16;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 188:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var31)(var4, var21);
            var21 = _closure1_slot33;
            var4 = 63;
            var4 = var29[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['canUpload'] = var20;
            var29 = var11.id;
            var4['channelId'] = var29;
            var4['screenIndex'] = var10;
            var21 = var21.bind(var5)(var6, var4);
            var31 = null;
            if(!var7) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var29 = _closure1_slot33;
            var6 = _closure1_slot1;
            var61 = _closure1_slot3;
            var4 = 64;
            var4 = var61[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var61 = var37.chatInputActions;
            var4['ref'] = var61;
            var4['channel'] = var11;
            var61 = var34.handlePressAction;
            var4['onPressAction'] = var61;
            var4['canStartThreads'] = var60;
            var4['isAppLauncherEnabled'] = var54;
            var4['keyboardType'] = var36;
            var54 = var20;
            if(!var20) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var54 = var30 == var59;
case 191:
            if(var54) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var54 = var39;
case 193:
            var54 = !var54;
            var4['shouldPhotosButtonBeDisabled'] = var54;
            var4['canUpload'] = var20;
            var54 = var35;
            if(var3) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var60 = _closure1_slot0;
            var61 = _closure1_slot3;
            var59 = 65;
            var59 = var61[var59];
            var60 = var60.bind(var5)(var59);
            var59 = var60.isPremiumGiftingSupported;
            var54 = var59.bind(var60)();
case 195:
            var4['shouldShowGiftButton'] = var54;
            var4['canPostPolls'] = var39;
            var39 = var34.handlePollsPress;
            var4['onPollsPress'] = var39;
            var39 = var34.handleAttachPress;
            var4['onAttachPress'] = var39;
            var31 = var29.bind(var5)(var6, var4);
case 189:
            var6 = _closure1_slot34;
            var39 = _closure1_slot1;
            var54 = _closure1_slot3;
            var1 = var54[var1];
            var1 = var39.bind(var5)(var1);
            var4 = var1.View;
            var1 = {};
            var59 = var38.inputDefault;
            var29 = new Array(2);
            var29[0] = var59;
            var29[1] = var53;
            var1['style'] = var29;
            var53 = _closure1_slot33;
            var29 = 66;
            var29 = var54[var29];
            var39 = var39.bind(var5)(var29);
            var29 = {};
            var29['accessibilityLabel'] = var56;
            var56 = _closure1_slot0;
            var59 = 67;
            var59 = var54[var59];
            var59 = var56.bind(var5)(var59);
            var59 = var59.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var29['customKeyboard'] = var59;
            var29['editable'] = var7;
            var59 = var34.handleFocus;
            var29['onBeginFocus'] = var59;
            var59 = var34.handleBlur;
            var29['onEndBlur'] = var59;
            var59 = var34.handleChangeContentSize;
            var29['onChangeContentSize'] = var59;
            var59 = var34.handleMaxHeightChanged;
            var29['onMaxHeightChanged'] = var59;
            var59 = var34.handleSelectionOrTextChange;
            var29['onSelectionOrTextChange'] = var59;
            var59 = var34.handleTextFlushed;
            var29['onTextFlushed'] = var59;
            var59 = var34.handlePasteImage;
            var29['onPasteImage'] = var59;
            var59 = var34.handlePasteCommand;
            var29['onPasteCommand'] = var59;
            var59 = var34.handleTapAction;
            var29['onTapAction'] = var59;
            var59 = var34.handlePressSend;
            var29['onRequestSend'] = var59;
            var29['placeholder'] = var58;
            var58 = var37.chatInputNative;
            var29['ref'] = var58;
            var29['setNoExtractUI'] = var57;
            var57 = 49;
            var54 = var54[var57];
            var54 = var56.bind(var5)(var54);
            var54 = var54.KeyboardTypes;
            var54 = var54.MEDIA;
            var54 = var36 !== var54;
            var29['shouldShowCursor'] = var54;
            var54 = 8;
            if(!var44) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var54 = 5;
case 197:
            var29['verticalInset'] = var54;
            var39 = var53.bind(var5)(var39, var29);
            var29 = new Array(2);
            var29[0] = var39;
            var54 = _closure1_slot33;
            var53 = _closure1_slot1;
            var56 = _closure1_slot3;
            var39 = 68;
            var39 = var56[var39];
            var53 = var53.bind(var5)(var39);
            var39 = {};
            var39['keyboardType'] = var36;
            var56 = var34.handleToggleKeyboard;
            var39['onSelectKeyboard'] = var56;
            var56 = var37.chatInputCover;
            var39['ref'] = var56;
            var39 = var54.bind(var5)(var53, var39);
            var29[1] = var39;
            var1['children'] = var29;
            var39 = var6.bind(var5)(var4, var1);
            if(var7) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            var29 = null;
            if(!var3) { _fun0003_ip = 201; continue _fun0003 }
case 199:
            var6 = _closure1_slot33;
            var4 = _closure1_slot1;
            var53 = _closure1_slot3;
            var1 = 69;
            var1 = var53[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var53 = var37.chatInputSendButton;
            var1['ref'] = var53;
            var1['canSendVoiceMessage'] = var23;
            var1['channel'] = var11;
            var1['defaultValue'] = var33;
            if(!var13) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var13 = var20;
case 202:
            var1['hasPendingAttachments'] = var13;
            var13 = var30 != var28;
            var1['hasPendingEdit'] = var13;
            var13 = var34.handlePressSend;
            var1['onSendMessage'] = var13;
            var1['requireTextContent'] = var35;
            var29 = var6.bind(var5)(var4, var1);
case 201:
            var6 = _closure1_slot34;
            var4 = _closure1_slot7;
            var1 = {};
            var1['collapsable'] = var24;
            var1['onLayout'] = var12;
            var13 = _closure1_slot1;
            var20 = _closure1_slot3;
            var12 = 70;
            var12 = var20[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['isCreatingThread'] = var3;
            var20 = var16;
            if(!var16) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var53 = _closure1_slot0;
            var54 = _closure1_slot3;
            var23 = 21;
            var23 = var54[var23];
            var53 = var53.bind(var5)(var23);
            var23 = var53.isAndroid;
            var23 = var23.bind(var53)();
            var23 = !var23;
            if(var23) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var23 = var45;
case 206:
            var20 = var23;
case 204:
            var12['isFloatingRefresh'] = var20;
            var13 = var13.bind(var5)(var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var13 = var38.overflowVisible;
case 208:
            var12[1] = var13;
            var1['style'] = var12;
            var13 = var16;
            if(!var16) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var13 = !var40;
case 210:
            if(!var13) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var23 = _closure1_slot33;
            var20 = _closure1_slot38;
            var12 = {};
            var12['gradientHeight'] = var43;
            var12['inline'] = var24;
            var12['scrimBase'] = var46;
            var13 = var23.bind(var5)(var20, var12);
case 212:
            var12 = new Array(13);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var13 = var40;
case 214:
            if(!var13) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var43 = _closure1_slot33;
            var23 = _closure1_slot7;
            var20 = {};
            var45 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var54 = _closure1_slot0;
            var56 = _closure1_slot3;
            var53 = 22;
            var53 = var56[var53];
            var54 = var54.bind(var5)(var53);
            var53 = var54.hex2rgb;
            var54 = var53.bind(var54)(var46, var55);
            var53 = var46;
            if(!(var30 != var54)) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var53 = var54;
case 218:
            var45['backgroundColor'] = var53;
            var20['style'] = var45;
            var45 = 'none';
            var20['pointerEvents'] = var45;
            var13 = var43.bind(var5)(var23, var20);
case 216:
            var12[1] = var13;
            var23 = _closure1_slot33;
            var20 = _closure1_slot0;
            var43 = _closure1_slot3;
            var13 = 71;
            var13 = var43[var13];
            var13 = var20.bind(var5)(var13);
            var20 = var13.ChatInputAccessibilityDivider;
            var13 = {};
            var13 = var23.bind(var5)(var20, var13);
            var12[2] = var13;
            var13 = null;
            if(!var15) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var23 = _closure1_slot33;
            var20 = _closure1_slot1;
            var43 = _closure1_slot3;
            var15 = 72;
            var15 = var43[var15];
            var20 = var20.bind(var5)(var15);
            var15 = {};
            var15['channel'] = var11;
            var45 = '';
            var33 = var45 !== var33;
            if(var33) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var43 = var37.chatInput;
            var54 = var43.current;
            var53 = var30 == var54;
            var43 = undefined;
            if(var53) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var53 = var54.getText;
            var43 = var53.bind(var54)();
case 224:
            var33 = var45 !== var43;
case 222:
            var15['hasInputText'] = var33;
            var13 = var23.bind(var5)(var20, var15);
case 220:
            var12[3] = var13;
            var20 = _closure1_slot34;
            var15 = _closure1_slot7;
            var13 = {};
            var23 = var38.accessories;
            var13['style'] = var23;
            var33 = var16;
            if(!var16) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var33 = var40;
case 226:
            if(!var33) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var45 = _closure1_slot33;
            var43 = _closure1_slot38;
            var23 = {};
            var23['gradientHeight'] = var48;
            var23['inline'] = var47;
            var23['scrimBase'] = var46;
            var33 = var45.bind(var5)(var43, var23);
case 228:
            var23 = new Array(3);
            var23[0] = var33;
            var33 = null;
            if(var3) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var46 = _closure1_slot33;
            var45 = _closure1_slot1;
            var47 = _closure1_slot3;
            var43 = 73;
            var43 = var47[var43];
            var45 = var45.bind(var5)(var43);
            var43 = {};
            var43['channel'] = var11;
            var43['screenIndex'] = var10;
            var47 = undefined;
            if(!var16) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var53 = var38.floatingTypingWrapper;
            var48 = new Array(2);
            var48[0] = var53;
            var48[1] = var52;
            var47 = var48;
case 232:
            var43['wrapperStyle'] = var47;
            var33 = var46.bind(var5)(var45, var43);
case 230:
            var23[1] = var33;
            var43 = _closure1_slot0;
            var45 = _closure1_slot3;
            var33 = 21;
            var33 = var45[var33];
            var43 = var43.bind(var5)(var33);
            var33 = var43.isIOS;
            var43 = var33.bind(var43)();
            var33 = null;
            if(!var43) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var46 = _closure1_slot33;
            var45 = _closure1_slot1;
            var47 = _closure1_slot3;
            var43 = 74;
            var43 = var47[var43];
            var45 = var45.bind(var5)(var43);
            var43 = {};
            var47 = var11.id;
            var43['channelId'] = var47;
            var43['screenIndex'] = var10;
            var43['onJumpToPresent'] = var8;
            var33 = var46.bind(var5)(var45, var43);
case 234:
            var23[2] = var33;
            var13['children'] = var23;
            var13 = var20.bind(var5)(var15, var13);
            var12[4] = var13;
            var13 = null;
            if(!var14) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var23 = _closure1_slot33;
            var15 = _closure1_slot1;
            var20 = _closure1_slot3;
            var14 = 75;
            var14 = var20[var14];
            var20 = var15.bind(var5)(var14);
            var15 = {};
            var15['channel'] = var11;
            var14 = var11.id;
            var13 = var23.bind(var5)(var20, var15, var14);
case 236:
            var12[5] = var13;
            var23 = _closure1_slot33;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var15 = 76;
            var15 = var13[var15];
            var15 = var14.bind(var5)(var15);
            var20 = var15.MemberActionsChatInputBannerGuardedOuter;
            var15 = {};
            var15['channel'] = var11;
            var15 = var23.bind(var5)(var20, var15);
            var12[6] = var15;
            var23 = _closure1_slot33;
            var15 = 77;
            var15 = var13[var15];
            var15 = var14.bind(var5)(var15);
            var20 = var15.DoubleTapToReactChatInputBanner;
            var15 = {};
            var15['channel'] = var11;
            var15 = var23.bind(var5)(var20, var15);
            var12[7] = var15;
            var13 = var13[var57];
            var13 = var14.bind(var5)(var13);
            var13 = var13.KeyboardTypes;
            var14 = var13.EXPRESSION;
            var13 = null;
            if(!(var36 !== var14)) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var20 = _closure1_slot33;
            var15 = _closure1_slot1;
            var23 = _closure1_slot3;
            var14 = 78;
            var14 = var23[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var23 = var37.chatInputAutocomplete;
            var14['ref'] = var23;
            var14['analyticsLocations'] = var42;
            var14['channel'] = var11;
            var14['canMentionEveryone'] = var22;
            var14['keyboardType'] = var36;
            var22 = var34.handleChangeAutoCompleteVisibility;
            var14['onChangeAutoCompleteVisibility'] = var22;
            var14['commandsDisabled'] = var17;
            var14['canOnlyUseTextCommands'] = var18;
            var22 = var37.chatInput;
            var14['chatInputRef'] = var22;
            var14['screenIndex'] = var10;
            var13 = var20.bind(var5)(var15, var14);
case 238:
            var12[8] = var13;
            var13 = !var16;
            if(!var13) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var20 = _closure1_slot33;
            var15 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 79;
            var14 = var22[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var13 = var20.bind(var5)(var15, var14);
case 240:
            var12[9] = var13;
            var13 = !var16;
            if(!var13) { _fun0003_ip = 242; continue _fun0003 }
case 243:
            var20 = _closure1_slot33;
            var15 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 80;
            var14 = var22[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var22 = var37.chatInput;
            var14['chatInputRef'] = var22;
            var14['pendingEdit'] = var28;
            var14['pendingReply'] = var27;
            var13 = var20.bind(var5)(var15, var14);
case 242:
            var12[10] = var13;
            var15 = _closure1_slot33;
            var14 = _closure1_slot1;
            var20 = _closure1_slot3;
            var13 = 81;
            var13 = var20[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var20 = var37.chatInputAppCommandManager;
            var13['ref'] = var20;
            var13['canOnlyUseTextCommands'] = var18;
            var13['channel'] = var11;
            var18 = var37.chatInput;
            var13['chatInputRef'] = var18;
            var18 = var37.state;
            var13['chatInputStateRef'] = var18;
            var13['commandsDisabled'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var12[11] = var13;
            var15 = _closure1_slot33;
            var14 = _closure1_slot7;
            var13 = {};
            var18 = var38.container;
            var17 = new Array(3);
            var17[0] = var18;
            var18 = var16;
            if(!var16) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            var18 = var38.floatingContainer;
case 244:
            var17[1] = var18;
            var18 = var16;
            if(!var18) { _fun0003_ip = 246; continue _fun0003 }
case 247:
            var18 = var19;
case 246:
            if(!var18) { _fun0003_ip = 248; continue _fun0003 }
case 249:
            var18 = var38.floatingContainerKeyboardOpen;
case 248:
            var17[2] = var18;
            var13['style'] = var17;
            var17 = var34.handleLayoutOfInputContainer;
            var13['onLayout'] = var17;
            var18 = _closure1_slot34;
            var17 = _closure1_slot35;
            var19 = {};
            if(var16) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var16 = new Array(2);
            var16[0] = var21;
            var23 = _closure1_slot34;
            var22 = _closure1_slot7;
            var20 = {};
            var33 = var38.containerInner;
            var20['style'] = var33;
            var20['collapsable'] = var24;
            var20['accessibilityElementsHidden'] = var25;
            var33 = undefined;
            if(!var25) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            var33 = 'no-hide-descendants';
case 252:
            var20['importantForAccessibility'] = var33;
            var43 = var31;
            if(!var44) { _fun0003_ip = 254; continue _fun0003 }
case 255:
            var46 = _closure1_slot33;
            var45 = _closure1_slot7;
            var33 = {};
            var47 = var38.refreshButtonAlignment;
            var33['style'] = var47;
            var33['children'] = var31;
            var43 = var46.bind(var5)(var45, var33);
case 254:
            var33 = new Array(3);
            var33[0] = var43;
            var46 = _closure1_slot34;
            var45 = _closure1_slot7;
            var43 = {};
            var48 = var38.input;
            var47 = new Array(2);
            var47[0] = var48;
            var48 = {};
            var49 = var51 * var49;
            var49 = var50 - var49;
            var48['minHeight'] = var49;
            var47[1] = var48;
            var43['style'] = var47;
            var47 = new Array(2);
            var47[0] = var39;
            var50 = _closure1_slot34;
            var49 = _closure1_slot7;
            var48 = {};
            var51 = var38.rightAccessory;
            var48['style'] = var51;
            var52 = null;
            if(!var7) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            var54 = _closure1_slot33;
            var53 = _closure1_slot1;
            var55 = _closure1_slot3;
            var51 = 84;
            var51 = var55[var51];
            var53 = var53.bind(var5)(var51);
            var51 = {};
            var56 = _closure1_slot0;
            var55 = var55[var57];
            var55 = var56.bind(var5)(var55);
            var55 = var55.KeyboardTypes;
            var55 = var55.EXPRESSION;
            var55 = var36 === var55;
            var51['active'] = var55;
            var55 = var34.handlePressExpression;
            var51['onPress'] = var55;
            var52 = var54.bind(var5)(var53, var51);
case 256:
            var51 = new Array(2);
            var51[0] = var52;
            var54 = _closure1_slot33;
            var53 = _closure1_slot1;
            var55 = _closure1_slot3;
            var52 = 82;
            var52 = var55[var52];
            var53 = var53.bind(var5)(var52);
            var52 = {};
            var52['analyticsLocations'] = var42;
            var55 = var37.chatInputCharCounter;
            var52['ref'] = var55;
            var52 = var54.bind(var5)(var53, var52);
            var51[1] = var52;
            var48['children'] = var51;
            var48 = var50.bind(var5)(var49, var48);
            var47[1] = var48;
            var43['children'] = var47;
            var43 = var46.bind(var5)(var45, var43);
            var33[1] = var43;
            var43 = var29;
            if(!var44) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            var46 = _closure1_slot33;
            var45 = _closure1_slot7;
            var44 = {};
            var47 = var38.refreshButtonAlignment;
            var44['style'] = var47;
            var44['children'] = var29;
            var43 = var46.bind(var5)(var45, var44);
case 258:
            var33[2] = var43;
            var20['children'] = var33;
            var20 = var23.bind(var5)(var22, var20);
            var16[1] = var20;
            var19['children'] = var16;
            var16 = var19;
            _fun0003_ip = 260; continue _fun0003;
case 250:
            var20 = new Array(3);
            var20[0] = var21;
            var23 = _closure1_slot33;
            var22 = _closure1_slot1;
            var33 = _closure1_slot3;
            var21 = 79;
            var21 = var33[var21];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var21['channel'] = var11;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var23 = _closure1_slot34;
            var22 = _closure1_slot7;
            var21 = {};
            var43 = var38.floatingInputBox;
            var33 = new Array(3);
            var33[0] = var43;
            if(!var41) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var41 = var38.floatingInputBoxPressed;
case 261:
            var33[1] = var41;
            if(!var40) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var40 = var38.floatingInputBoxTyping;
case 263:
            var33[2] = var40;
            var21['style'] = var33;
            var21['onStartShouldSetResponder'] = var32;
            var21['onResponderRelease'] = var26;
            var21['collapsable'] = var24;
            var21['accessibilityElementsHidden'] = var25;
            var24 = undefined;
            if(!var25) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var24 = 'no-hide-descendants';
case 265:
            var21['importantForAccessibility'] = var24;
            var26 = _closure1_slot33;
            var40 = _closure1_slot1;
            var43 = _closure1_slot3;
            var24 = 80;
            var24 = var43[var24];
            var25 = var40.bind(var5)(var24);
            var24 = {};
            var24['channel'] = var11;
            var32 = var37.chatInput;
            var24['chatInputRef'] = var32;
            var24['pendingEdit'] = var28;
            var24['pendingReply'] = var27;
            var25 = var26.bind(var5)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot34;
            var26 = _closure1_slot7;
            var25 = {};
            var28 = var38.floatingMainContents;
            var25['style'] = var28;
            var28 = new Array(4);
            var28[0] = var31;
            var33 = _closure1_slot34;
            var32 = _closure1_slot7;
            var31 = {};
            var38 = var38.inputFlat;
            var31['style'] = var38;
            var38 = new Array(2);
            var38[0] = var39;
            var41 = _closure1_slot33;
            var39 = 82;
            var39 = var43[var39];
            var40 = var40.bind(var5)(var39);
            var39 = {};
            var39['analyticsLocations'] = var42;
            var42 = var37.chatInputCharCounter;
            var39['ref'] = var42;
            var39 = var41.bind(var5)(var40, var39);
            var38[1] = var39;
            var31['children'] = var38;
            var31 = var33.bind(var5)(var32, var31);
            var28[1] = var31;
            var30 = null;
            if(!var7) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var33 = _closure1_slot33;
            var32 = _closure1_slot1;
            var38 = _closure1_slot3;
            var31 = 83;
            var31 = var38[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var37 = var37.chatInputRightActions;
            var31['ref'] = var37;
            var31['channel'] = var11;
            var31['keyboardType'] = var36;
            if(var3) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var37 = _closure1_slot0;
            var38 = _closure1_slot3;
            var36 = 65;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = var37.isPremiumGiftingSupported;
            var35 = var36.bind(var37)();
case 269:
            var31['shouldShowGiftButton'] = var35;
            var35 = var34.handlePressAction;
            var31['onPressAction'] = var35;
            var34 = var34.handlePressExpression;
            var31['onPressExpression'] = var34;
            var30 = var33.bind(var5)(var32, var31);
case 267:
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
case 260:
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[12] = var13;
            var1['children'] = var12;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(var3) { _fun0003_ip = 271; continue _fun0003 }
case 272:
            var4 = _closure1_slot33;
            var3 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 85;
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
case 271:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 86;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();