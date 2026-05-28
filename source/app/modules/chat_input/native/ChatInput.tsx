// app/modules/chat_input/native/ChatInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
            var3 = _closure1_slot36;
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
            var8 = _closure1_slot35;
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
            var8 = _closure1_slot35;
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
    var _closure1_slot41 = var1;
    var1 = function ChatInputFloatingSlot(arg1) {
        var1 = arg1;
        var6 = var1.screenIndex;
        var5 = var1.children;
        var1 = global;
        var8 = var1.Math;
        var7 = var8.max;
        var1 = _closure1_slot20;
        var4 = undefined;
        var6 = var1.bind(var4)(var6);
        var1 = _closure1_slot17;
        var6 = var7.bind(var8)(var6, var1);
        var _closure2_slot0 = var6;
        var8 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 35;
        var9 = var7[var1];
        var10 = var8.bind(var4)(var9);
        var9 = var10.useSharedValue;
        var10 = var9.bind(var10)(var6);
        var _closure2_slot1 = var10;
        var12 = _closure1_slot6;
        var11 = var12.useEffect;
        var9 = new Array(2);
        var9[0] = var10;
        var9[1] = var6;
        var6 = function() {
            var4 = _closure2_slot1;
            var3 = var4.set;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 86;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var9.bind(var1)(var5);
            var6 = var7.withTiming;
            var5 = _closure2_slot0;
            var2 = {};
            var8 = 87;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.timingFastDuration;
            var2['duration'] = var8;
            var8 = 35;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.Easing;
            var8 = var8.linear;
            var2['easing'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var11.bind(var12)(var6, var9);
        var6 = var7[var1];
        var8 = var8.bind(var4)(var6);
        var6 = var8.useAnimatedStyle;
        var3 = function c() {
            var1 = {};
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['height'] = var2;
            return var1;
        };
        var9 = {};
        var9['animatedHeight'] = var10;
        var3['__closure'] = var9;
        var9 = 10646001500176.0;
        var3['__workletHash'] = var9;
        var9 = _closure1_slot40;
        var3['__initData'] = var9;
        var6 = var6.bind(var8)(var3);
        var3 = _closure1_slot35;
        var2 = _closure1_slot1;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var7 = var7.bind(var1)(var2);
    var _closure1_slot6 = var7;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.useVoiceMessagesUIStore;
    var _closure1_slot11 = var2;
    var2 = 8;
    var9 = var6[var2];
    var9 = var4.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DraftType;
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.CHAT_INPUT_CONTAINER_HEIGHT_FALLBACK_FLOATING_DP;
    var _closure1_slot17 = var4;
    var4 = var2.updateChatInputContainerHeight;
    var _closure1_slot18 = var4;
    var4 = var2.updateShowingAutoComplete;
    var _closure1_slot19 = var4;
    var4 = var2.useChatInputContainerHeight;
    var _closure1_slot20 = var4;
    var4 = var2.useChatIsAtBottom;
    var _closure1_slot21 = var4;
    var2 = var2.useChatShowingAutoComplete;
    var _closure1_slot22 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot23 = var4;
    var4 = var2.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot24 = var4;
    var2 = var2.ChatInputActionType;
    var _closure1_slot25 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AnalyticEvents;
    var _closure1_slot26 = var4;
    var4 = var2.ChannelTypesSets;
    var _closure1_slot27 = var4;
    var4 = var2.ChatInputComponentViewedTypes;
    var _closure1_slot28 = var4;
    var4 = var2.ComponentActions;
    var _closure1_slot29 = var4;
    var4 = var2.MAX_UPLOAD_COUNT;
    var _closure1_slot30 = var4;
    var2 = var2.Permissions;
    var _closure1_slot31 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AppLauncherRouteName;
    var _closure1_slot32 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EmojiInteractionPoint;
    var _closure1_slot33 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaKeyboardTarget;
    var _closure1_slot34 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot35 = var4;
    var4 = var2.jsxs;
    var _closure1_slot36 = var4;
    var2 = var2.Fragment;
    var _closure1_slot37 = var2;
    var2 = 19;
    var2 = var6[var2];
    var9 = var5.bind(var1)(var2);
    var4 = var9.createStyles;
    var2 = function(arg1, arg2, arg3) {
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
            var8 = _closure1_slot23;
            var3 = _closure1_slot24;
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
            var9 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 16:
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
            var12 = var12.MOBILE_FLOATINGBAR_BACKGROUND;
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
            var12 = var12.MOBILE_FLOATING_ACCESSORY_BORDER;
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
    var2 = var4.bind(var9)(var2);
    var _closure1_slot38 = var2;
    var2 = {};
    var4 = 'function ChatInputTsx1(){const{textFieldHeight}=this.__closure;return{minHeight:textFieldHeight.get()};}';
    var2['code'] = var4;
    var _closure1_slot39 = var2;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var15 = var1.isResourceChannel;
            var8 = var1.screenIndex;
            var _closure2_slot1 = var8;
            var56 = var1.setNoExtractUI;
            var35 = var1.secondaryTextFieldRef;
            var33 = var1.threadCreationCallback;
            var10 = var1.onJumpToPresent;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var6;
            var9 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 24;
            var1 = var2[var1];
            var7 = var9.bind(var6)(var1);
            var4 = var7.useMobileVisualRefreshConfig;
            var1 = {};
            var11 = 'ChatInput';
            var1['location'] = var11;
            var1 = var4.bind(var7)(var1);
            var45 = var1.enabled;
            var4 = var1.chatInputFloating;
            var _closure2_slot2 = var4;
            var1 = 25;
            var7 = var2[var1];
            var11 = var9.bind(var6)(var7);
            var7 = var11.useGradientValue;
            var1 = var2[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var7.bind(var11)(var1);
            var7 = 26;
            var7 = var2[var7];
            var11 = var9.bind(var6)(var7);
            var7 = var11.useYouBarGradientBackground;
            var11 = var7.bind(var11)();
            var7 = _closure1_slot38;
            var39 = var7.bind(var6)(var11, var1, var4);
            var13 = 27;
            var7 = var2[var13];
            var9 = var9.bind(var6)(var7);
            var7 = var9.useToken;
            var11 = _closure1_slot1;
            var30 = 20;
            var2 = var2[var30];
            var2 = var11.bind(var6)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOWER;
            var46 = var7.bind(var9)(var2);
            var31 = null;
            if(!(var31 != var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var46 = var1;
case 19:
            var14 = _closure1_slot0;
            var1 = _closure1_slot3;
            var2 = var1[var13];
            var9 = var14.bind(var6)(var2);
            var7 = var9.useToken;
            var16 = _closure1_slot1;
            var2 = var1[var30];
            var2 = var16.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var11 = var7.bind(var9)(var2);
            var2 = var1[var13];
            var9 = var14.bind(var6)(var2);
            var7 = var9.useToken;
            var2 = var1[var30];
            var2 = var16.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED;
            var2 = var7.bind(var9)(var2);
            var7 = var1[var13];
            var17 = var14.bind(var6)(var7);
            var9 = var17.useToken;
            var7 = var1[var30];
            var7 = var16.bind(var6)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT;
            var9 = var9.bind(var17)(var7);
            var7 = var1[var13];
            var14 = var14.bind(var6)(var7);
            var7 = var14.useToken;
            var1 = var1[var30];
            var1 = var16.bind(var6)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var1 = var7.bind(var14)(var1);
            _closure2_slot3 = var1;
            var16 = _closure1_slot6;
            var14 = var16.useMemo;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var49 = var14.bind(var16)(var1, var7);
            var7 = _closure1_slot6;
            var1 = var7.useRef;
            var1 = var1.bind(var7)(var4);
            _closure2_slot4 = var1;
            var1['current'] = var4;
            var7 = _closure1_slot6;
            var1 = var7.useState;
            var25 = false;
            var7 = var1.bind(var7)(var25);
            var1 = _closure1_slot5;
            var52 = 2;
            var1 = var1.bind(var6)(var7, var52);
            var22 = 0;
            var42 = var1[var22];
            var54 = 1;
            var1 = var1[var54];
            _closure2_slot5 = var1;
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var16 = _closure1_slot7;
            _fun0003_ip = 23; continue _fun0003;
case 21:
            var7 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 28;
            var1 = var14[var1];
            var16 = var7.bind(var6)(var1);
case 23:
            var1 = var31 != var33;
            _closure2_slot6 = var1;
            var7 = var12.isPrivate;
            var17 = var7.bind(var12)();
            if(!var17) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var17 = !var1;
case 24:
            var14 = _closure1_slot0;
            var18 = _closure1_slot3;
            var7 = 29;
            var7 = var18[var7];
            var18 = var14.bind(var6)(var7);
            var14 = var18.useTypingUserIds;
            var7 = var12.id;
            var18 = var14.bind(var18)(var7, var54);
            var7 = _closure1_slot22;
            var7 = var7.bind(var6)(var8);
            var41 = var4;
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var14 = var12.rateLimitPerUser;
            var14 = var14 > var22;
            if(var14) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var18 = var18.length;
            var14 = var18 > var22;
case 28:
            var41 = var14;
case 26:
            if(!var41) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var41 = !var7;
case 30:
            var7 = _closure1_slot21;
            var7 = var7.bind(var6)(var8);
            var34 = var11;
            if(!var7) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var34 = var2;
case 32:
            var47 = var9;
            if(!var7) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var47 = var2;
case 34:
            var9 = _closure1_slot0;
            var2 = _closure1_slot3;
            var7 = 30;
            var11 = var2[var7];
            var19 = var9.bind(var6)(var11);
            var18 = var19.useStateFromStores;
            var11 = _closure1_slot14;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var4 = _closure1_slot14;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var29 = var18.bind(var19)(var14, var11);
            _closure2_slot7 = var29;
            var11 = var2[var7];
            var19 = var9.bind(var6)(var11);
            var18 = var19.useStateFromStores;
            var11 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = _closure1_slot10;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var28 = var18.bind(var19)(var14, var11);
            _closure2_slot8 = var28;
            var2 = var2[var7];
            var14 = var9.bind(var6)(var2);
            var11 = var14.useStateFromStores;
            var2 = _closure1_slot16;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0006_ip = 3; continue _fun0006 }
case 38:
                    var4 = _closure1_slot16;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot13;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 39:
                    return var1;
case 3:
                    var1 = false;
                    return var1;
                }
            };
            var14 = var11.bind(var14)(var9, var2);
            var18 = _closure1_slot6;
            var11 = var18.useMemo;
            var2 = var12.id;
            var9 = new Array(2);
            var9[0] = var2;
            var9[1] = var1;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot6;
                    var5 = _closure1_slot13;
                    if(var1) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var1 = var5.ChannelMessage;
                    _fun0007_ip = 43; continue _fun0007;
case 41:
                    var1 = var5.FirstThreadMessage;
case 43:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var24 = var11.bind(var18)(var2, var9);
            if(!(var31 != var29)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var24 = var29;
case 44:
            var9 = _closure1_slot0;
            var19 = _closure1_slot3;
            var2 = var19[var7];
            var20 = var9.bind(var6)(var2);
            var18 = var20.useStateFromStoresObject;
            var2 = _closure1_slot15;
            var11 = new Array(1);
            var11[0] = var2;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var1;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = _closure1_slot15;
                    var6 = var7.can;
                    var2 = _closure1_slot31;
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
                    if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var11 = _closure1_slot15;
                    var7 = var11.can;
                    var3 = _closure1_slot31;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 46:
                    var7 = _closure1_slot15;
                    var4 = var7.can;
                    var3 = _closure1_slot31;
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
                    if(var7) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var7 = var4;
                    if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var7 = var10;
case 50:
                    var3 = var7;
case 48:
                    var3 = !var3;
                    if(var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var3 = var1;
case 52:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    if(!var9) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var9 = !var3;
case 56:
                    var7 = var9;
case 54:
                    if(!var7) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var9 = _closure2_slot6;
                    var7 = !var9;
case 58:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var7 = var8;
case 60:
                    if(!var7) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var7 = !var3;
case 62:
                    if(!var7) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var8 = _closure2_slot6;
                    var7 = !var8;
case 64:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var4 = var6;
case 66:
                    if(!var4) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var4 = !var3;
case 68:
                    if(!var4) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var5 = _closure2_slot6;
                    var4 = !var5;
case 70:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var2 = var18.bind(var20)(var11, var2, var9);
            var21 = var2.canMentionEveryone;
            var20 = var2.canUpload;
            var23 = var2.canSendVoiceMessage;
            var9 = var2.editable;
            _closure2_slot9 = var9;
            var11 = var2.canCreateThreads;
            var18 = _closure1_slot1;
            var2 = 32;
            var2 = var19[var2];
            var2 = var18.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var43 = var2.analyticsLocations;
            var18 = var1;
            if(var18) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var18 = var31 != var29;
case 72:
            if(var18) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var19 = _closure1_slot0;
            var26 = _closure1_slot3;
            var2 = 31;
            var2 = var26[var2];
            var19 = var19.bind(var6)(var2);
            var2 = var19.getIsActiveChannelOrUnarchivableThread;
            var2 = var2.bind(var19)(var12);
            var18 = !var2;
case 74:
            var19 = var31 != var28;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var2 = 31;
            var2 = var27[var2];
            var26 = var26.bind(var6)(var2);
            var2 = var26.useCanStartThread;
            var59 = var2.bind(var26)(var12);
            if(!var59) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var2 = _closure1_slot27;
            var27 = var2.GUILD_THREADS_ONLY;
            var26 = var27.has;
            var2 = var12.type;
            var2 = var26.bind(var27)(var2);
            var59 = !var2;
case 76:
            if(!var59) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var59 = !var1;
case 78:
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var2 = 33;
            var2 = var27[var2];
            var26 = var26.bind(var6)(var2);
            var2 = var26.useCanPostPollsInChannel;
            var40 = var2.bind(var26)(var12);
            if(!var40) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var40 = !var1;
case 80:
            var26 = _closure1_slot0;
            var2 = _closure1_slot3;
            var27 = var2[var13];
            var37 = var26.bind(var6)(var27);
            var36 = var37.useToken;
            var27 = _closure1_slot1;
            var32 = var2[var30];
            var32 = var27.bind(var6)(var32);
            var32 = var32.modules;
            var32 = var32.mobile;
            var32 = var32.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var51 = var36.bind(var37)(var32);
            _closure2_slot10 = var51;
            var13 = var2[var13];
            var26 = var26.bind(var6)(var13);
            var13 = var26.useToken;
            var2 = var2[var30];
            var2 = var27.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_PILL_BORDER_WIDTH;
            var50 = var13.bind(var26)(var2);
            if(var45) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var13 = _closure1_slot0;
            var26 = _closure1_slot3;
            var2 = 34;
            var2 = var26[var2];
            var13 = var13.bind(var6)(var2);
            var2 = var13.getChatInputMinHeight;
            var13 = var2.bind(var13)();
            _fun0003_ip = 84; continue _fun0003;
case 82:
            var2 = var52 * var50;
            var13 = var51 - var2;
case 84:
            _closure2_slot11 = var13;
            var27 = _closure1_slot0;
            var26 = _closure1_slot3;
            var2 = 35;
            var26 = var26[var2];
            var30 = var27.bind(var6)(var26);
            var27 = var30.useSharedValue;
            var26 = var13;
            if(!var4) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var26 = var51;
case 85:
            var27 = var27.bind(var30)(var26);
            _closure2_slot12 = var27;
            var32 = _closure1_slot6;
            var30 = var32.useEffect;
            var26 = new Array(4);
            var26[0] = var4;
            var26[1] = var51;
            var26[2] = var13;
            var26[3] = var27;
            var13 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var2 = var3.set;
                    var1 = _closure2_slot2;
                    if(var1) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                    var1 = _closure2_slot11;
                    _fun0009_ip = 89; continue _fun0009;
case 87:
                    var1 = _closure2_slot10;
case 89:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var30.bind(var32)(var13, var26);
            var30 = _closure1_slot0;
            var26 = _closure1_slot3;
            var13 = var26[var2];
            var32 = var30.bind(var6)(var13);
            var30 = var32.useAnimatedStyle;
            var13 = function we() {
                var1 = {};
                var3 = _closure2_slot12;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['minHeight'] = var2;
                return var1;
            };
            var36 = {};
            var36['textFieldHeight'] = var27;
            var13['__closure'] = var36;
            var36 = 11048691841625.0;
            var13['__workletHash'] = var36;
            var36 = _closure1_slot39;
            var13['__initData'] = var36;
            var48 = var30.bind(var32)(var13);
            var30 = _closure1_slot6;
            var13 = var30.useState;
            var30 = var13.bind(var30)(var25);
            var13 = _closure1_slot5;
            var13 = var13.bind(var6)(var30, var52);
            var44 = var13[var22];
            var13 = var13[var54];
            _closure2_slot13 = var13;
            var22 = _closure1_slot1;
            var13 = 36;
            var13 = var26[var13];
            var13 = var22.bind(var6)(var13);
            var37 = var13.bind(var6)();
            var22 = _closure1_slot11;
            var13 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var26 = var22.bind(var6)(var13);
            var36 = !var1;
            var53 = var36;
            if(var1) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var22 = _closure1_slot0;
            var30 = _closure1_slot3;
            var13 = 37;
            var13 = var30[var13];
            var22 = var22.bind(var6)(var13);
            var13 = var22.getIsAppLauncherEnabled;
            var53 = var13.bind(var22)(var12);
case 90:
            var13 = _closure1_slot0;
            var30 = _closure1_slot3;
            var7 = var30[var7];
            var32 = var13.bind(var6)(var7);
            var22 = var32.useStateFromStores;
            var7 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getActiveCommand;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var58 = var22.bind(var32)(var13, var7);
            var7 = _closure1_slot1;
            var13 = 38;
            var13 = var30[var13];
            var22 = var7.bind(var6)(var13);
            var13 = {};
            var13['channel'] = var12;
            var32 = !var9;
            var13['isReadonly'] = var32;
            var13['isCreatingThread'] = var1;
            var13 = var22.bind(var6)(var13);
            var57 = var13.placeholder;
            var55 = var13.accessibilityLabel;
            var13 = 39;
            var13 = var30[var13];
            var22 = var7.bind(var6)(var13);
            var13 = {};
            var32 = {};
            var32['analyticsLocations'] = var43;
            var32['canUpload'] = var20;
            var32['channel'] = var12;
            var32['defaultValue'] = var24;
            var32['hasAttachmentsToUpload'] = var14;
            var32['pendingEdit'] = var29;
            var32['pendingReply'] = var28;
            var32['screenIndex'] = var8;
            var32['secondaryTextFieldRef'] = var35;
            var32['threadCreationCallback'] = var33;
            var13['chatInputProps'] = var32;
            var13['chatInputTextFieldHeight'] = var27;
            var27 = arg2;
            var13['ref'] = var27;
            var38 = var22.bind(var6)(var13);
            _closure2_slot14 = var38;
            var32 = _closure1_slot6;
            var27 = var32.useEffect;
            var22 = new Array(1);
            var22[0] = var38;
            var13 = function() {
                var2 = _closure2_slot14;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot14;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var13 = var27.bind(var32)(var13, var22);
            var32 = _closure1_slot6;
            var27 = var32.useEffect;
            var22 = new Array(4);
            var22[0] = var38;
            var22[1] = var12;
            var22[2] = var29;
            var22[3] = var28;
            var13 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0010_ip = 92; continue _fun0010 }
case 36:
                    var5 = _closure2_slot8;
                    var3 = var2 != var5;
case 92:
                    if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 43:
                    var5 = var2 == var4;
                    if(!var5) { _fun0010_ip = 93; continue _fun0010 }
case 40:
                    var6 = _closure2_slot7;
                    var5 = var2 != var6;
case 93:
                    var3 = var5;
case 39:
                    if(!var3) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                    var3 = _closure2_slot14;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 94; continue _fun0010 }
case 96:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 94:
                    var3 = _closure2_slot14;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 40;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0010_ip = 99; continue _fun0010 }
case 97:
                    var3 = _closure2_slot7;
                    if(!(var4 !== var3)) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                    var3 = _closure2_slot14;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 100; continue _fun0010 }
case 11:
                    var4 = var5.setText;
                    var3 = _closure2_slot7;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0010_ip = 102; continue _fun0010 }
case 49:
                    var3 = _closure2_slot7;
case 102:
                    var3 = var4.bind(var5)(var3);
                    _fun0010_ip = 100; continue _fun0010;
case 99:
                    var3 = _closure2_slot14;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0010_ip = 100; continue _fun0010 }
case 103:
                    var2 = var3.setText;
                    var1 = _closure2_slot14;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var27.bind(var32)(var13, var22);
            var32 = _closure1_slot6;
            var27 = var32.useEffect;
            var22 = new Array(1);
            var22[0] = var38;
            var13 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                        var5 = var3.channelId;
case 104:
                        var4 = _closure2_slot14;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0011_ip = 40; continue _fun0011 }
case 92:
                        var6 = var6.channel;
                        var4 = var6.id;
case 40:
                        if(!(var5 === var4)) { _fun0011_ip = 96; continue _fun0011 }
case 106:
                        var3 = _closure2_slot14;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0011_ip = 96; continue _fun0011 }
case 10:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 96:
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
                var2 = _closure1_slot29;
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
                    var2 = _closure1_slot29;
                    var3 = var2.TEXTAREA_FOCUS;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var13 = var27.bind(var32)(var13, var22);
            var32 = _closure1_slot6;
            var27 = var32.useMemo;
            var22 = new Array(1);
            var22[0] = var38;
            var13 = function() {
                var1 = {};
                var3 = function handleBlur(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                        var4 = _closure2_slot15;
                        var2 = var4.handleTextOrFocusChange;
                        var2 = var2.bind(var4)(var5, var8);
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 107:
                        var4 = _closure2_slot14;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 109:
                        var4 = _closure2_slot14;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot14;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot14;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 111:
                        var3 = _closure2_slot14;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 113:
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
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setIsAnyChatInputFocused;
                        var8 = true;
                        var2 = var2.bind(var3)(var8);
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot5;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot15;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 115:
                        var3 = _closure2_slot14;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 102; continue _fun0013 }
case 13:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 102:
                        var3 = _closure2_slot14;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot14;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 117:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot14;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot14;
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
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 119:
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
                        if(!var1) { _fun0015_ip = 121; continue _fun0015 }
case 122:
                        var1 = var2 !== var4;
case 121:
                        if(!var1) { _fun0015_ip = 123; continue _fun0015 }
case 124:
                        var2 = _closure2_slot14;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0015_ip = 123; continue _fun0015 }
case 3:
                        var1 = _closure2_slot14;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 123:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0016_ip = 125; continue _fun0016 }
case 89:
                        var1 = _closure2_slot14;
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
case 125:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot19;
                    var1 = _closure2_slot14;
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
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0017_ip = 4; continue _fun0017 }
case 126:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0017_ip = 127; continue _fun0017 }
case 128:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 127:
                        if(var2) { _fun0017_ip = 4; continue _fun0017 }
case 129:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot14;
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
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0018_ip = 130; continue _fun0018 }
case 38:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 131:
                            return var4;
case 132:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0018_ip = 133; continue _fun0018 }
case 134:
                            var3 = _closure2_slot14;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                            var3 = _closure2_slot14;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0018_ip = 135; continue _fun0018 }
case 137:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 43;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 138:
                            return var3;
case 139:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 44;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot14;
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
case 135:
                            return var4;
case 140:
                            return var3;
case 133:
                            return var2;
case 130:
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
                        var1 = _closure1_slot25;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 142; continue _fun0019 }
case 143:
                        var1 = _closure1_slot25;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0019_ip = 144; continue _fun0019 }
case 132:
                        var1 = _closure1_slot25;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 145; continue _fun0019 }
case 146:
                        var1 = _closure1_slot25;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0019_ip = 147; continue _fun0019 }
case 148:
                        var1 = _closure1_slot25;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0019_ip = 149; continue _fun0019 }
case 123:
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
                        var2 = _closure2_slot14;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot14;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0019_ip = 149; continue _fun0019;
case 147:
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
                        if(!var1) { _fun0019_ip = 150; continue _fun0019 }
case 68:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 55;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 150:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 54;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot14;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot14;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0019_ip = 149; continue _fun0019;
case 145:
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
                        var7 = _closure2_slot14;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot30;
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
                            var3 = _closure2_slot15;
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
                            var2 = _closure2_slot14;
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
                        _fun0019_ip = 149; continue _fun0019;
case 144:
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
                        var1 = _closure1_slot26;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 48;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot28;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot14;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot14;
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
                        if(!var9) { _fun0019_ip = 151; continue _fun0019 }
case 152:
                        var1 = var5;
case 151:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot15;
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
                        var9 = _closure1_slot32;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 53;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot14;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0019_ip = 153; continue _fun0019 }
case 154:
                        var6 = var7.name;
case 153:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0019_ip = 149; continue _fun0019;
case 142:
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
                        var1 = _closure1_slot26;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot28;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot14;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot14;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0019_ip = 155; continue _fun0019 }
case 156:
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
                        if(!(var3 !== var2)) { _fun0019_ip = 157; continue _fun0019 }
case 155:
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
                        if(!(var3 === var2)) { _fun0019_ip = 158; continue _fun0019 }
case 159:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0019_ip = 158; continue _fun0019 }
case 160:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 158:
                        var5 = _closure2_slot15;
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
                        var9 = _closure1_slot34;
                        var9 = var9.CHAT;
                        var8['target'] = var9;
                        var2['context'] = var8;
                        var2 = var3.bind(var5)(var2);
                        _fun0019_ip = 149; continue _fun0019;
case 157:
                        var3 = _closure2_slot15;
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
case 149:
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
                    var2 = _closure1_slot26;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot28;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot14;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot14;
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
                    var5 = _closure2_slot14;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot15;
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
                    var7 = _closure2_slot14;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot30;
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
                        var3 = _closure2_slot15;
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
                        var2 = _closure2_slot14;
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
                    var2 = _closure1_slot33;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot15;
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
                    var1 = _closure2_slot14;
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
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot15;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot14;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0020_ip = 112; continue _fun0020 }
case 161:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 112:
                        var6 = _closure2_slot14;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 103; continue _fun0020 }
case 162:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot14;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 103:
                        var6 = _closure2_slot14;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 20; continue _fun0020 }
case 163:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 20:
                        if(!(var4 !== var5)) { _fun0020_ip = 164; continue _fun0020 }
case 165:
                        var4 = _closure2_slot14;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot14;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0020_ip = 166; continue _fun0020 }
case 167:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 166:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 164:
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
                        if(!(var1 === var3)) { _fun0021_ip = 168; continue _fun0021 }
case 120:
                        var1 = _closure2_slot14;
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
                        var3 = _closure2_slot14;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot14;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0021_ip = 8; continue _fun0021 }
case 110:
                        var1 = function() {
                            var1 = _closure2_slot14;
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
case 168:
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
                        if(!(var1 > var2)) { _fun0022_ip = 40; continue _fun0022 }
case 169:
                        if(var4) { _fun0022_ip = 170; continue _fun0022 }
case 171:
                        var5 = var3.length;
                        var1 = _closure2_slot14;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.textPrev;
                        var1 = var1.length;
                        if(!(!(var5 > var1))) { _fun0022_ip = 170; continue _fun0022 }
case 40:
                        var1 = var3.length;
                        if(!(var2 === var1)) { _fun0022_ip = 56; continue _fun0022 }
case 172:
                        var1 = _closure2_slot14;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 173; continue _fun0022 }
case 174:
                        var5 = var6.onShowActions;
                        var5 = var5.bind(var6)(var4);
case 173:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 56; continue _fun0022 }
case 175:
                        var1 = var2.onShowActions;
                        var1 = var1.bind(var2)(var4);
                        _fun0022_ip = 56; continue _fun0022;
case 170:
                        var5 = _closure1_slot9;
                        var2 = var5.isOpen;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0022_ip = 176; continue _fun0022 }
case 177:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
case 176:
                        var1 = _closure2_slot14;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 178; continue _fun0022 }
case 179:
                        var5 = var6.onDismissActions;
                        var5 = var5.bind(var6)(var4);
case 178:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 56; continue _fun0022 }
case 180:
                        var1 = var2.onDismissActions;
                        var1 = var1.bind(var2)(var4);
case 56:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 62;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getMaxMessageLength;
                        var7 = var2.bind(var5)();
                        var5 = _closure2_slot14;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0022_ip = 140; continue _fun0022 }
case 70:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 140:
                        if(!var5) { _fun0022_ip = 181; continue _fun0022 }
case 133:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 48;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot26;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 181:
                        var4 = _closure2_slot14;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot14;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot14;
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
                        var1 = _closure2_slot14;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0023_ip = 106; continue _fun0023 }
case 134:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 106:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTextFlushed'] = var3;
                var2 = function handleToggleKeyboard(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot9;
                        var1 = var3.isOpen;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0024_ip = 119; continue _fun0024 }
case 182:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 61;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 119:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 49;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0024_ip = 183; continue _fun0024 }
case 184:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 36;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0024_ip = 183; continue _fun0024 }
case 185:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0024_ip = 186; continue _fun0024;
case 183:
                        var2 = _closure2_slot14;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 186:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var35 = var27.bind(var32)(var13, var22);
            _closure2_slot15 = var35;
            var32 = _closure1_slot6;
            var27 = var32.useCallback;
            var22 = new Array(4);
            var22[0] = var4;
            var22[1] = var1;
            var22[2] = var8;
            var22[3] = var38;
            var13 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = var1.width;
                    var2 = 0;
                    var1 = var2 !== var3;
                    if(!var1) { _fun0025_ip = 121; continue _fun0025 }
case 122:
                    var1 = var2 !== var4;
case 121:
                    if(!var1) { _fun0025_ip = 187; continue _fun0025 }
case 124:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0025_ip = 188; continue _fun0025 }
case 189:
                    var6 = _closure1_slot18;
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var5 = undefined;
                    var2 = var6.bind(var5)(var4, var3, var2);
                    var4 = _closure2_slot13;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
case 188:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0025_ip = 187; continue _fun0025 }
case 174:
                    var1 = _closure2_slot14;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 187:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var27.bind(var32)(var13, var22);
            var33 = _closure1_slot6;
            var32 = var33.useCallback;
            var27 = function() {
                var1 = true;
                return var1;
            };
            var22 = new Array(0);
            var33 = var32.bind(var33)(var27, var22);
            var32 = _closure1_slot6;
            var27 = var32.useCallback;
            var22 = new Array(2);
            var22[0] = var9;
            var22[1] = var38;
            var5 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0026_ip = 190; continue _fun0026 }
case 38:
                    var1 = _closure2_slot14;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 190:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var27.bind(var32)(var5, var22);
            var22 = _closure1_slot35;
            var5 = 63;
            var5 = var30[var5];
            var7 = var7.bind(var6)(var5);
            var5 = {};
            var5['canUpload'] = var20;
            var30 = var12.id;
            var5['channelId'] = var30;
            var5['screenIndex'] = var8;
            var22 = var22.bind(var6)(var7, var5);
            var32 = null;
            if(!var9) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var30 = _closure1_slot35;
            var7 = _closure1_slot1;
            var60 = _closure1_slot3;
            var5 = 64;
            var5 = var60[var5];
            var7 = var7.bind(var6)(var5);
            var5 = {};
            var60 = var38.chatInputActions;
            var5['ref'] = var60;
            var5['channel'] = var12;
            var60 = var35.handlePressAction;
            var5['onPressAction'] = var60;
            var5['canStartThreads'] = var59;
            var5['isAppLauncherEnabled'] = var53;
            var5['keyboardType'] = var37;
            var53 = var20;
            if(!var20) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var53 = var31 == var58;
case 193:
            if(var53) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var53 = var40;
case 195:
            var53 = !var53;
            var5['shouldPhotosButtonBeDisabled'] = var53;
            var5['canUpload'] = var20;
            var53 = var36;
            if(var1) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var59 = _closure1_slot0;
            var60 = _closure1_slot3;
            var58 = 65;
            var58 = var60[var58];
            var59 = var59.bind(var6)(var58);
            var58 = var59.isPremiumGiftingSupported;
            var53 = var58.bind(var59)();
case 197:
            var5['shouldShowGiftButton'] = var53;
            var5['canPostPolls'] = var40;
            var40 = var35.handlePollsPress;
            var5['onPollsPress'] = var40;
            var40 = var35.handleAttachPress;
            var5['onAttachPress'] = var40;
            var32 = var30.bind(var6)(var7, var5);
case 191:
            var7 = _closure1_slot36;
            var40 = _closure1_slot1;
            var53 = _closure1_slot3;
            var2 = var53[var2];
            var2 = var40.bind(var6)(var2);
            var5 = var2.View;
            var2 = {};
            var58 = var39.inputDefault;
            var30 = new Array(2);
            var30[0] = var58;
            var30[1] = var48;
            var2['style'] = var30;
            var48 = _closure1_slot35;
            var30 = 66;
            var30 = var53[var30];
            var40 = var40.bind(var6)(var30);
            var30 = {};
            var30['accessibilityLabel'] = var55;
            var55 = _closure1_slot0;
            var58 = 67;
            var58 = var53[var58];
            var58 = var55.bind(var6)(var58);
            var58 = var58.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var30['customKeyboard'] = var58;
            var30['editable'] = var9;
            var58 = var35.handleFocus;
            var30['onBeginFocus'] = var58;
            var58 = var35.handleBlur;
            var30['onEndBlur'] = var58;
            var58 = var35.handleChangeContentSize;
            var30['onChangeContentSize'] = var58;
            var58 = var35.handleMaxHeightChanged;
            var30['onMaxHeightChanged'] = var58;
            var58 = var35.handleSelectionOrTextChange;
            var30['onSelectionOrTextChange'] = var58;
            var58 = var35.handleTextFlushed;
            var30['onTextFlushed'] = var58;
            var58 = var35.handlePasteImage;
            var30['onPasteImage'] = var58;
            var58 = var35.handlePasteCommand;
            var30['onPasteCommand'] = var58;
            var58 = var35.handleTapAction;
            var30['onTapAction'] = var58;
            var58 = var35.handlePressSend;
            var30['onRequestSend'] = var58;
            var30['placeholder'] = var57;
            var57 = var38.chatInputNative;
            var30['ref'] = var57;
            var30['setNoExtractUI'] = var56;
            var58 = 49;
            var53 = var53[var58];
            var53 = var55.bind(var6)(var53);
            var53 = var53.KeyboardTypes;
            var53 = var53.MEDIA;
            var53 = var37 !== var53;
            var30['shouldShowCursor'] = var53;
            var53 = 8;
            if(!var45) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            var53 = 5;
case 199:
            var30['verticalInset'] = var53;
            var40 = var48.bind(var6)(var40, var30);
            var30 = new Array(2);
            var30[0] = var40;
            var53 = _closure1_slot35;
            var48 = _closure1_slot1;
            var55 = _closure1_slot3;
            var40 = 68;
            var40 = var55[var40];
            var48 = var48.bind(var6)(var40);
            var40 = {};
            var40['keyboardType'] = var37;
            var55 = var35.handleToggleKeyboard;
            var40['onSelectKeyboard'] = var55;
            var55 = var38.chatInputCover;
            var40['ref'] = var55;
            var40 = var53.bind(var6)(var48, var40);
            var30[1] = var40;
            var2['children'] = var30;
            var40 = var7.bind(var6)(var5, var2);
            if(var9) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            var30 = null;
            if(!var1) { _fun0003_ip = 203; continue _fun0003 }
case 201:
            var7 = _closure1_slot35;
            var5 = _closure1_slot1;
            var48 = _closure1_slot3;
            var2 = 69;
            var2 = var48[var2];
            var5 = var5.bind(var6)(var2);
            var2 = {};
            var48 = var38.chatInputSendButton;
            var2['ref'] = var48;
            var2['canSendVoiceMessage'] = var23;
            var2['channel'] = var12;
            var2['defaultValue'] = var24;
            if(!var14) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var14 = var20;
case 204:
            var2['hasPendingAttachments'] = var14;
            var14 = var31 != var29;
            var2['hasPendingEdit'] = var14;
            var14 = var35.handlePressSend;
            var2['onSendMessage'] = var14;
            var2['requireTextContent'] = var36;
            var30 = var7.bind(var6)(var5, var2);
case 203:
            var7 = _closure1_slot36;
            var5 = _closure1_slot7;
            var2 = {};
            var2['collapsable'] = var25;
            var2['onLayout'] = var13;
            var14 = _closure1_slot1;
            var20 = _closure1_slot3;
            var13 = 70;
            var13 = var20[var13];
            var14 = var14.bind(var6)(var13);
            var13 = {};
            var13['isCreatingThread'] = var1;
            var20 = var4;
            if(!var4) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var48 = _closure1_slot0;
            var53 = _closure1_slot3;
            var23 = 21;
            var23 = var53[var23];
            var48 = var48.bind(var6)(var23);
            var23 = var48.isAndroid;
            var23 = var23.bind(var48)();
            var23 = !var23;
            if(var23) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var23 = var44;
case 208:
            var20 = var23;
case 206:
            var13['isFloatingRefresh'] = var20;
            var14 = var14.bind(var6)(var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var4;
            if(!var4) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var14 = var39.overflowVisible;
case 210:
            var13[1] = var14;
            var2['style'] = var13;
            var14 = var4;
            if(!var4) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var14 = !var41;
case 212:
            if(!var14) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var23 = _closure1_slot35;
            var20 = _closure1_slot41;
            var13 = {};
            var13['gradientHeight'] = var34;
            var13['inline'] = var25;
            var13['scrimBase'] = var46;
            var14 = var23.bind(var6)(var20, var13);
case 214:
            var13 = new Array(13);
            var13[0] = var14;
            var14 = var4;
            if(!var4) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var14 = var41;
case 216:
            if(!var14) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var34 = _closure1_slot35;
            var23 = _closure1_slot7;
            var20 = {};
            var44 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var53 = _closure1_slot0;
            var55 = _closure1_slot3;
            var48 = 22;
            var48 = var55[var48];
            var53 = var53.bind(var6)(var48);
            var48 = var53.hex2rgb;
            var53 = var48.bind(var53)(var46, var54);
            var48 = var46;
            if(!(var31 != var53)) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var48 = var53;
case 220:
            var44['backgroundColor'] = var48;
            var20['style'] = var44;
            var44 = 'none';
            var20['pointerEvents'] = var44;
            var14 = var34.bind(var6)(var23, var20);
case 218:
            var13[1] = var14;
            var23 = _closure1_slot35;
            var20 = _closure1_slot0;
            var34 = _closure1_slot3;
            var14 = 71;
            var14 = var34[var14];
            var14 = var20.bind(var6)(var14);
            var20 = var14.ChatInputAccessibilityDivider;
            var14 = {};
            var14 = var23.bind(var6)(var20, var14);
            var13[2] = var14;
            var14 = null;
            if(!var17) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var23 = _closure1_slot35;
            var20 = _closure1_slot1;
            var34 = _closure1_slot3;
            var17 = 72;
            var17 = var34[var17];
            var20 = var20.bind(var6)(var17);
            var17 = {};
            var17['channel'] = var12;
            var44 = '';
            var24 = var44 !== var24;
            if(var24) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var34 = var38.chatInput;
            var53 = var34.current;
            var48 = var31 == var53;
            var34 = undefined;
            if(var48) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var48 = var53.getText;
            var34 = var48.bind(var53)();
case 226:
            var24 = var44 !== var34;
case 224:
            var17['hasInputText'] = var24;
            var14 = var23.bind(var6)(var20, var17);
case 222:
            var13[3] = var14;
            var20 = _closure1_slot36;
            var17 = _closure1_slot7;
            var14 = {};
            var23 = var39.accessories;
            var14['style'] = var23;
            var24 = var4;
            if(!var4) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var24 = var41;
case 228:
            if(!var24) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var44 = _closure1_slot35;
            var34 = _closure1_slot41;
            var23 = {};
            var23['gradientHeight'] = var47;
            var47 = true;
            var23['inline'] = var47;
            var23['scrimBase'] = var46;
            var24 = var44.bind(var6)(var34, var23);
case 230:
            var23 = new Array(3);
            var23[0] = var24;
            var24 = null;
            if(var1) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var46 = _closure1_slot35;
            var44 = _closure1_slot1;
            var47 = _closure1_slot3;
            var34 = 73;
            var34 = var47[var34];
            var44 = var44.bind(var6)(var34);
            var34 = {};
            var34['channel'] = var12;
            var34['screenIndex'] = var8;
            var47 = undefined;
            if(!var4) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var53 = var39.floatingTypingWrapper;
            var48 = new Array(2);
            var48[0] = var53;
            var48[1] = var49;
            var47 = var48;
case 234:
            var34['wrapperStyle'] = var47;
            var24 = var46.bind(var6)(var44, var34);
case 232:
            var23[1] = var24;
            var34 = _closure1_slot0;
            var44 = _closure1_slot3;
            var24 = 21;
            var24 = var44[var24];
            var34 = var34.bind(var6)(var24);
            var24 = var34.isIOS;
            var34 = var24.bind(var34)();
            var24 = null;
            if(!var34) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var46 = _closure1_slot35;
            var44 = _closure1_slot1;
            var47 = _closure1_slot3;
            var34 = 74;
            var34 = var47[var34];
            var44 = var44.bind(var6)(var34);
            var34 = {};
            var47 = var12.id;
            var34['channelId'] = var47;
            var34['screenIndex'] = var8;
            var34['onJumpToPresent'] = var10;
            var24 = var46.bind(var6)(var44, var34);
case 236:
            var23[2] = var24;
            var14['children'] = var23;
            var14 = var20.bind(var6)(var17, var14);
            var13[4] = var14;
            var14 = null;
            if(!var15) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var23 = _closure1_slot35;
            var17 = _closure1_slot1;
            var20 = _closure1_slot3;
            var15 = 75;
            var15 = var20[var15];
            var20 = var17.bind(var6)(var15);
            var17 = {};
            var17['channel'] = var12;
            var15 = var12.id;
            var14 = var23.bind(var6)(var20, var17, var15);
case 238:
            var13[5] = var14;
            var23 = _closure1_slot35;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var17 = 76;
            var17 = var14[var17];
            var17 = var15.bind(var6)(var17);
            var20 = var17.MemberActionsChatInputBannerGuardedOuter;
            var17 = {};
            var17['channel'] = var12;
            var17 = var23.bind(var6)(var20, var17);
            var13[6] = var17;
            var23 = _closure1_slot35;
            var17 = 77;
            var17 = var14[var17];
            var17 = var15.bind(var6)(var17);
            var20 = var17.DoubleTapToReactChatInputBanner;
            var17 = {};
            var17['channel'] = var12;
            var17 = var23.bind(var6)(var20, var17);
            var13[7] = var17;
            var14 = var14[var58];
            var14 = var15.bind(var6)(var14);
            var14 = var14.KeyboardTypes;
            var15 = var14.EXPRESSION;
            var14 = null;
            if(!(var37 !== var15)) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var20 = _closure1_slot35;
            var17 = _closure1_slot1;
            var23 = _closure1_slot3;
            var15 = 78;
            var15 = var23[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var23 = var38.chatInputAutocomplete;
            var15['ref'] = var23;
            var15['analyticsLocations'] = var43;
            var15['channel'] = var12;
            var15['canMentionEveryone'] = var21;
            var15['keyboardType'] = var37;
            var21 = var35.handleChangeAutoCompleteVisibility;
            var15['onChangeAutoCompleteVisibility'] = var21;
            var15['commandsDisabled'] = var18;
            var15['canOnlyUseTextCommands'] = var19;
            var21 = var38.chatInput;
            var15['chatInputRef'] = var21;
            var15['screenIndex'] = var8;
            var14 = var20.bind(var6)(var17, var15);
case 240:
            var13[8] = var14;
            var14 = !var4;
            if(!var14) { _fun0003_ip = 242; continue _fun0003 }
case 243:
            var20 = _closure1_slot35;
            var17 = _closure1_slot1;
            var21 = _closure1_slot3;
            var15 = 79;
            var15 = var21[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var15['channel'] = var12;
            var14 = var20.bind(var6)(var17, var15);
case 242:
            var13[9] = var14;
            var14 = !var4;
            if(!var14) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            var20 = _closure1_slot35;
            var17 = _closure1_slot1;
            var21 = _closure1_slot3;
            var15 = 80;
            var15 = var21[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var15['channel'] = var12;
            var21 = var38.chatInput;
            var15['chatInputRef'] = var21;
            var15['pendingEdit'] = var29;
            var15['pendingReply'] = var28;
            var14 = var20.bind(var6)(var17, var15);
case 244:
            var13[10] = var14;
            var17 = _closure1_slot35;
            var15 = _closure1_slot1;
            var20 = _closure1_slot3;
            var14 = 81;
            var14 = var20[var14];
            var15 = var15.bind(var6)(var14);
            var14 = {};
            var20 = var38.chatInputAppCommandManager;
            var14['ref'] = var20;
            var14['canOnlyUseTextCommands'] = var19;
            var14['channel'] = var12;
            var19 = var38.chatInput;
            var14['chatInputRef'] = var19;
            var19 = var38.state;
            var14['chatInputStateRef'] = var19;
            var14['commandsDisabled'] = var18;
            var14 = var17.bind(var6)(var15, var14);
            var13[11] = var14;
            var15 = _closure1_slot35;
            var14 = {};
            var18 = var39.container;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var4;
            if(!var18) { _fun0003_ip = 246; continue _fun0003 }
case 247:
            var18 = var39.floatingContainer;
case 246:
            var17[1] = var18;
            var14['style'] = var17;
            var17 = var35.handleLayoutOfInputContainer;
            var14['onLayout'] = var17;
            var19 = _closure1_slot36;
            var18 = _closure1_slot37;
            var20 = {};
            if(var4) { _fun0003_ip = 248; continue _fun0003 }
case 249:
            var17 = new Array(2);
            var17[0] = var22;
            var24 = _closure1_slot36;
            var23 = _closure1_slot7;
            var21 = {};
            var34 = var39.containerInner;
            var21['style'] = var34;
            var21['collapsable'] = var25;
            var21['accessibilityElementsHidden'] = var26;
            var34 = undefined;
            if(!var26) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var34 = 'no-hide-descendants';
case 250:
            var21['importantForAccessibility'] = var34;
            var44 = var32;
            if(!var45) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            var47 = _closure1_slot35;
            var46 = _closure1_slot7;
            var34 = {};
            var48 = var39.refreshButtonAlignment;
            var34['style'] = var48;
            var34['children'] = var32;
            var44 = var47.bind(var6)(var46, var34);
case 252:
            var34 = new Array(3);
            var34[0] = var44;
            var47 = _closure1_slot36;
            var46 = _closure1_slot7;
            var44 = {};
            var49 = var39.input;
            var48 = new Array(2);
            var48[0] = var49;
            var49 = {};
            var50 = var52 * var50;
            var50 = var51 - var50;
            var49['minHeight'] = var50;
            var48[1] = var49;
            var44['style'] = var48;
            var48 = new Array(2);
            var48[0] = var40;
            var51 = _closure1_slot36;
            var50 = _closure1_slot7;
            var49 = {};
            var52 = var39.rightAccessory;
            var49['style'] = var52;
            var53 = null;
            if(!var9) { _fun0003_ip = 254; continue _fun0003 }
case 255:
            var55 = _closure1_slot35;
            var54 = _closure1_slot1;
            var56 = _closure1_slot3;
            var52 = 84;
            var52 = var56[var52];
            var54 = var54.bind(var6)(var52);
            var52 = {};
            var57 = _closure1_slot0;
            var56 = var56[var58];
            var56 = var57.bind(var6)(var56);
            var56 = var56.KeyboardTypes;
            var56 = var56.EXPRESSION;
            var56 = var37 === var56;
            var52['active'] = var56;
            var56 = var35.handlePressExpression;
            var52['onPress'] = var56;
            var53 = var55.bind(var6)(var54, var52);
case 254:
            var52 = new Array(2);
            var52[0] = var53;
            var55 = _closure1_slot35;
            var54 = _closure1_slot1;
            var56 = _closure1_slot3;
            var53 = 82;
            var53 = var56[var53];
            var54 = var54.bind(var6)(var53);
            var53 = {};
            var53['analyticsLocations'] = var43;
            var56 = var38.chatInputCharCounter;
            var53['ref'] = var56;
            var53 = var55.bind(var6)(var54, var53);
            var52[1] = var53;
            var49['children'] = var52;
            var49 = var51.bind(var6)(var50, var49);
            var48[1] = var49;
            var44['children'] = var48;
            var44 = var47.bind(var6)(var46, var44);
            var34[1] = var44;
            var44 = var30;
            if(!var45) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            var47 = _closure1_slot35;
            var46 = _closure1_slot7;
            var45 = {};
            var48 = var39.refreshButtonAlignment;
            var45['style'] = var48;
            var45['children'] = var30;
            var44 = var47.bind(var6)(var46, var45);
case 256:
            var34[2] = var44;
            var21['children'] = var34;
            var21 = var24.bind(var6)(var23, var21);
            var17[1] = var21;
            var20['children'] = var17;
            var17 = var20;
            _fun0003_ip = 258; continue _fun0003;
case 248:
            var21 = new Array(3);
            var21[0] = var22;
            var24 = _closure1_slot35;
            var23 = _closure1_slot1;
            var34 = _closure1_slot3;
            var22 = 79;
            var22 = var34[var22];
            var23 = var23.bind(var6)(var22);
            var22 = {};
            var22['channel'] = var12;
            var22 = var24.bind(var6)(var23, var22);
            var21[1] = var22;
            var24 = _closure1_slot36;
            var23 = _closure1_slot7;
            var22 = {};
            var44 = var39.floatingInputBox;
            var34 = new Array(3);
            var34[0] = var44;
            if(!var42) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var42 = var39.floatingInputBoxPressed;
case 259:
            var34[1] = var42;
            if(!var41) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var41 = var39.floatingInputBoxTyping;
case 261:
            var34[2] = var41;
            var22['style'] = var34;
            var22['onStartShouldSetResponder'] = var33;
            var22['onResponderRelease'] = var27;
            var22['collapsable'] = var25;
            var22['accessibilityElementsHidden'] = var26;
            var25 = undefined;
            if(!var26) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var25 = 'no-hide-descendants';
case 263:
            var22['importantForAccessibility'] = var25;
            var27 = _closure1_slot35;
            var41 = _closure1_slot1;
            var44 = _closure1_slot3;
            var25 = 80;
            var25 = var44[var25];
            var26 = var41.bind(var6)(var25);
            var25 = {};
            var25['channel'] = var12;
            var33 = var38.chatInput;
            var25['chatInputRef'] = var33;
            var25['pendingEdit'] = var29;
            var25['pendingReply'] = var28;
            var26 = var27.bind(var6)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot36;
            var27 = _closure1_slot7;
            var26 = {};
            var29 = var39.floatingMainContents;
            var26['style'] = var29;
            var29 = new Array(4);
            var29[0] = var32;
            var34 = _closure1_slot36;
            var33 = _closure1_slot7;
            var32 = {};
            var39 = var39.inputFlat;
            var32['style'] = var39;
            var39 = new Array(2);
            var39[0] = var40;
            var42 = _closure1_slot35;
            var40 = 82;
            var40 = var44[var40];
            var41 = var41.bind(var6)(var40);
            var40 = {};
            var40['analyticsLocations'] = var43;
            var43 = var38.chatInputCharCounter;
            var40['ref'] = var43;
            var40 = var42.bind(var6)(var41, var40);
            var39[1] = var40;
            var32['children'] = var39;
            var32 = var34.bind(var6)(var33, var32);
            var29[1] = var32;
            var31 = null;
            if(!var9) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var34 = _closure1_slot35;
            var33 = _closure1_slot1;
            var39 = _closure1_slot3;
            var32 = 83;
            var32 = var39[var32];
            var33 = var33.bind(var6)(var32);
            var32 = {};
            var38 = var38.chatInputRightActions;
            var32['ref'] = var38;
            var32['channel'] = var12;
            var32['keyboardType'] = var37;
            if(var1) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var38 = _closure1_slot0;
            var39 = _closure1_slot3;
            var37 = 65;
            var37 = var39[var37];
            var38 = var38.bind(var6)(var37);
            var37 = var38.isPremiumGiftingSupported;
            var36 = var37.bind(var38)();
case 267:
            var32['shouldShowGiftButton'] = var36;
            var36 = var35.handlePressAction;
            var32['onPressAction'] = var36;
            var35 = var35.handlePressExpression;
            var32['onPressExpression'] = var35;
            var31 = var34.bind(var6)(var33, var32);
case 265:
            var29[2] = var31;
            var29[3] = var30;
            var26['children'] = var29;
            var26 = var28.bind(var6)(var27, var26);
            var25[1] = var26;
            var22['children'] = var25;
            var22 = var24.bind(var6)(var23, var22);
            var21[2] = var22;
            var20['children'] = var21;
            var17 = var20;
case 258:
            var17 = var19.bind(var6)(var18, var17);
            var14['children'] = var17;
            var14 = var15.bind(var6)(var16, var14);
            var13[12] = var14;
            var2['children'] = var13;
            var7 = var7.bind(var6)(var5, var2);
            if(var1) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var5 = _closure1_slot35;
            var2 = _closure1_slot1;
            var13 = _closure1_slot3;
            var1 = 85;
            var1 = var13[var1];
            var2 = var2.bind(var6)(var1);
            var1 = {};
            var1['channel'] = var12;
            var1['screenIndex'] = var8;
            var1['canSendMessages'] = var9;
            var1['canCreateThreads'] = var11;
            var1['onJumpToPresent'] = var10;
            var9 = !var9;
            var1['isReadonly'] = var9;
            var1['children'] = var7;
            var1 = var5.bind(var6)(var2, var1);
            _fun0003_ip = 271; continue _fun0003;
case 269:
            var2 = var7;
            if(!var4) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            var5 = _closure1_slot35;
            var4 = _closure1_slot42;
            var3 = {};
            var3['screenIndex'] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 272:
            var1 = var2;
case 271:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = {};
    var9 = 'function ChatInputTsx2(){const{animatedHeight}=this.__closure;return{height:animatedHeight.get()};}';
    var2['code'] = var9;
    var _closure1_slot40 = var2;
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