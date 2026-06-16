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
            var5 = 23;
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
            var3 = _closure1_slot37;
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
            var8 = _closure1_slot36;
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var5 = 24;
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
            var8 = _closure1_slot36;
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
    var _closure1_slot42 = var1;
    var1 = function ChatInputFloatingSlot(arg1) {
        var1 = arg1;
        var6 = var1.screenIndex;
        var5 = var1.children;
        var1 = global;
        var8 = var1.Math;
        var7 = var8.max;
        var1 = _closure1_slot21;
        var4 = undefined;
        var6 = var1.bind(var4)(var6);
        var1 = _closure1_slot18;
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
            var1 = 90;
            var5 = var10[var1];
            var1 = undefined;
            var7 = var9.bind(var1)(var5);
            var6 = var7.withTiming;
            var5 = _closure2_slot0;
            var2 = {};
            var8 = 91;
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
        var9 = _closure1_slot41;
        var3['__initData'] = var9;
        var6 = var6.bind(var8)(var3);
        var3 = _closure1_slot36;
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
    var _closure1_slot43 = var1;
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
    var2 = var4.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.useVoiceMessagesUIStore;
    var _closure1_slot12 = var2;
    var2 = 9;
    var9 = var6[var2];
    var9 = var4.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DraftType;
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
    var2 = var4.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.CHAT_INPUT_CONTAINER_HEIGHT_FALLBACK_FLOATING_DP;
    var _closure1_slot18 = var4;
    var4 = var2.updateChatInputContainerHeight;
    var _closure1_slot19 = var4;
    var4 = var2.updateShowingAutoComplete;
    var _closure1_slot20 = var4;
    var4 = var2.useChatInputContainerHeight;
    var _closure1_slot21 = var4;
    var4 = var2.useChatIsAtBottom;
    var _closure1_slot22 = var4;
    var2 = var2.useChatShowingAutoComplete;
    var _closure1_slot23 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot24 = var4;
    var4 = var2.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot25 = var4;
    var2 = var2.ChatInputActionType;
    var _closure1_slot26 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.AnalyticEvents;
    var _closure1_slot27 = var4;
    var4 = var2.ChannelTypesSets;
    var _closure1_slot28 = var4;
    var4 = var2.ChatInputComponentViewedTypes;
    var _closure1_slot29 = var4;
    var4 = var2.ComponentActions;
    var _closure1_slot30 = var4;
    var4 = var2.MAX_UPLOAD_COUNT;
    var _closure1_slot31 = var4;
    var2 = var2.Permissions;
    var _closure1_slot32 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AppLauncherRouteName;
    var _closure1_slot33 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EmojiInteractionPoint;
    var _closure1_slot34 = var2;
    var2 = 18;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaKeyboardTarget;
    var _closure1_slot35 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot36 = var4;
    var4 = var2.jsxs;
    var _closure1_slot37 = var4;
    var2 = var2.Fragment;
    var _closure1_slot38 = var2;
    var2 = 20;
    var2 = var6[var2];
    var9 = var5.bind(var1)(var2);
    var4 = var9.createStyles;
    var2 = function(arg1, arg2) {
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
            var8 = _closure1_slot24;
            var3 = _closure1_slot25;
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
            var8 = arg2;
            if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = {};
            var9 = 6;
            var8['marginLeft'] = var9;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var8 = {'marginLeft': 0, 'marginTop': 0};
case 13:
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
            if(!var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.space;
            var8 = var9.PX_4;
case 14:
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
            if(!(var3 == var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_BACKGROUND;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 18:
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
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var8 = -5;
case 19:
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
    var _closure1_slot39 = var2;
    var2 = {};
    var4 = 'function ChatInputTsx1(){const{placeholderFieldHeight,textFieldHeight}=this.__closure;return{minHeight:placeholderFieldHeight>0?Math.max(textFieldHeight.get(),placeholderFieldHeight):textFieldHeight.get()};}';
    var2['code'] = var4;
    var _closure1_slot40 = var2;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var17 = var1.isResourceChannel;
            var8 = var1.screenIndex;
            var _closure2_slot1 = var8;
            var61 = var1.setNoExtractUI;
            var43 = var1.secondaryTextFieldRef;
            var38 = var1.threadCreationCallback;
            var10 = var1.onJumpToPresent;
            var6 = undefined;
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
            var _closure2_slot16 = var6;
            var _closure2_slot17 = var6;
            var _closure2_slot18 = var6;
            var _closure2_slot19 = var6;
            var _closure2_slot20 = var6;
            var9 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 25;
            var1 = var2[var1];
            var7 = var9.bind(var6)(var1);
            var4 = var7.useMobileVisualRefreshConfig;
            var1 = {};
            var11 = 'ChatInput';
            var1['location'] = var11;
            var1 = var4.bind(var7)(var1);
            var48 = var1.enabled;
            var4 = var1.chatInputFloating;
            var _closure2_slot2 = var4;
            var1 = 26;
            var7 = var2[var1];
            var11 = var9.bind(var6)(var7);
            var7 = var11.useGradientValue;
            var1 = var2[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var7.bind(var11)(var1);
            var22 = 27;
            var7 = var2[var22];
            var14 = var9.bind(var6)(var7);
            var13 = var14.useToken;
            var11 = _closure1_slot1;
            var30 = 21;
            var7 = var2[var30];
            var7 = var11.bind(var6)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var54 = var13.bind(var14)(var7);
            var _closure2_slot3 = var54;
            var7 = var2[var22];
            var14 = var9.bind(var6)(var7);
            var13 = var14.useToken;
            var7 = var2[var30];
            var7 = var11.bind(var6)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_SEND_BUTTON_HEIGHT;
            var7 = var13.bind(var14)(var7);
            var7 = var7 - var54;
            var55 = 2;
            var36 = var7 / var55;
            var7 = _closure1_slot39;
            var35 = var7.bind(var6)(var1, var4);
            var7 = var2[var22];
            var9 = var9.bind(var6)(var7);
            var7 = var9.useToken;
            var2 = var2[var30];
            var2 = var11.bind(var6)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOWER;
            var50 = var7.bind(var9)(var2);
            var31 = null;
            if(!(var31 != var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var50 = var1;
case 21:
            var13 = _closure1_slot0;
            var1 = _closure1_slot3;
            var2 = var1[var22];
            var9 = var13.bind(var6)(var2);
            var7 = var9.useToken;
            var15 = _closure1_slot1;
            var2 = var1[var30];
            var2 = var15.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var14 = var7.bind(var9)(var2);
            var2 = var1[var22];
            var9 = var13.bind(var6)(var2);
            var7 = var9.useToken;
            var2 = var1[var30];
            var2 = var15.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED;
            var2 = var7.bind(var9)(var2);
            var7 = var1[var22];
            var11 = var13.bind(var6)(var7);
            var9 = var11.useToken;
            var7 = var1[var30];
            var7 = var15.bind(var6)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT;
            var9 = var9.bind(var11)(var7);
            var7 = var1[var22];
            var16 = var13.bind(var6)(var7);
            var11 = var16.useToken;
            var7 = var1[var30];
            var7 = var15.bind(var6)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM;
            var11 = var11.bind(var16)(var7);
            var7 = var1[var22];
            var13 = var13.bind(var6)(var7);
            var7 = var13.useToken;
            var1 = var1[var30];
            var1 = var15.bind(var6)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var1 = var7.bind(var13)(var1);
            _closure2_slot4 = var1;
            var15 = _closure1_slot6;
            var13 = var15.useMemo;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var56 = var13.bind(var15)(var1, var7);
            var7 = _closure1_slot6;
            var1 = var7.useRef;
            var1 = var1.bind(var7)(var4);
            _closure2_slot5 = var1;
            var1['current'] = var4;
            var7 = _closure1_slot6;
            var1 = var7.useState;
            var25 = false;
            var7 = var1.bind(var7)(var25);
            var1 = _closure1_slot5;
            var1 = var1.bind(var6)(var7, var55);
            var13 = 0;
            var45 = var1[var13];
            var59 = 1;
            var1 = var1[var59];
            _closure2_slot6 = var1;
            if(var4) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var16 = _closure1_slot7;
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var7 = _closure1_slot1;
            var15 = _closure1_slot3;
            var1 = 28;
            var1 = var15[var1];
            var16 = var7.bind(var6)(var1);
case 25:
            var1 = var31 != var38;
            _closure2_slot7 = var1;
            var7 = var12.isPrivate;
            var20 = var7.bind(var12)();
            if(!var20) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var20 = !var1;
case 26:
            var15 = _closure1_slot9;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var15 = var15.bind(var6)(var7);
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var7 = 29;
            var7 = var19[var7];
            var19 = var18.bind(var6)(var7);
            var18 = var19.useTypingUserIds;
            var7 = var12.id;
            var19 = var18.bind(var19)(var7, var59);
            var7 = _closure1_slot23;
            var7 = var7.bind(var6)(var8);
            var34 = var4;
            if(!var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var18 = var12.rateLimitPerUser;
            var18 = var18 > var13;
            if(var18) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var19 = var19.length;
            var18 = var19 > var13;
case 30:
            var34 = var18;
case 28:
            if(!var34) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var34 = !var7;
case 32:
            var7 = _closure1_slot22;
            var7 = var7.bind(var6)(var8);
            var47 = var14;
            if(!var7) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var47 = var11;
case 34:
            var51 = var9;
            if(!var7) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var51 = var2;
case 36:
            var9 = _closure1_slot0;
            var2 = _closure1_slot3;
            var7 = 30;
            var11 = var2[var7];
            var19 = var9.bind(var6)(var11);
            var18 = var19.useStateFromStores;
            var11 = _closure1_slot15;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var4 = _closure1_slot15;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 38:
                    return var1;
                }
            };
            var29 = var18.bind(var19)(var14, var11);
            _closure2_slot8 = var29;
            var11 = var2[var7];
            var19 = var9.bind(var6)(var11);
            var18 = var19.useStateFromStores;
            var11 = _closure1_slot11;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var4 = _closure1_slot11;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 38:
                    return var1;
                }
            };
            var28 = var18.bind(var19)(var14, var11);
            _closure2_slot9 = var28;
            var2 = var2[var7];
            var14 = var9.bind(var6)(var2);
            var11 = var14.useStateFromStores;
            var2 = _closure1_slot17;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0006_ip = 3; continue _fun0006 }
case 40:
                    var4 = _closure1_slot17;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot14;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 41:
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
                    var4 = _closure1_slot13;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot7;
                    var5 = _closure1_slot14;
                    if(var1) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var1 = var5.ChannelMessage;
                    _fun0007_ip = 45; continue _fun0007;
case 43:
                    var1 = var5.FirstThreadMessage;
case 45:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var33 = var11.bind(var18)(var2, var9);
            if(!(var31 != var29)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var33 = var29;
case 46:
            _closure2_slot10 = var33;
            var9 = _closure1_slot0;
            var19 = _closure1_slot3;
            var2 = var19[var7];
            var21 = var9.bind(var6)(var2);
            var18 = var21.useStateFromStoresObject;
            var2 = _closure1_slot16;
            var11 = new Array(1);
            var11[0] = var2;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var1;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = _closure1_slot16;
                    var6 = var7.can;
                    var2 = _closure1_slot32;
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
                    if(var2) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var11 = _closure1_slot16;
                    var7 = var11.can;
                    var3 = _closure1_slot32;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 48:
                    var7 = _closure1_slot16;
                    var4 = var7.can;
                    var3 = _closure1_slot32;
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
                    var7 = _closure2_slot7;
                    if(var7) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var7 = var4;
                    if(var4) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var7 = var10;
case 52:
                    var3 = var7;
case 50:
                    var3 = !var3;
                    if(var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = var1;
case 54:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    if(!var9) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var9 = !var3;
case 58:
                    var7 = var9;
case 56:
                    if(!var7) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var9 = _closure2_slot7;
                    var7 = !var9;
case 60:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var7 = var8;
case 62:
                    if(!var7) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var7 = !var3;
case 64:
                    if(!var7) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var8 = _closure2_slot7;
                    var7 = !var8;
case 66:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0008_ip = 68; continue _fun0008 }
case 14:
                    var4 = var6;
case 68:
                    if(!var4) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var4 = !var3;
case 69:
                    if(!var4) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                    var5 = _closure2_slot7;
                    var4 = !var5;
case 71:
                    var1['canSendVoiceMessage'] = var4;
                    var3 = !var3;
                    var1['editable'] = var3;
                    var1['canCreateThreads'] = var2;
                    return var1;
                }
            };
            var2 = var18.bind(var21)(var11, var2, var9);
            var21 = var2.canMentionEveryone;
            var23 = var2.canUpload;
            var24 = var2.canSendVoiceMessage;
            var9 = var2.editable;
            _closure2_slot11 = var9;
            var11 = var2.canCreateThreads;
            var18 = _closure1_slot1;
            var2 = 32;
            var2 = var19[var2];
            var2 = var18.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var46 = var2.analyticsLocations;
            var18 = var1;
            if(var18) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var18 = var31 != var29;
case 73:
            if(var18) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var19 = _closure1_slot0;
            var26 = _closure1_slot3;
            var2 = 31;
            var2 = var26[var2];
            var19 = var19.bind(var6)(var2);
            var2 = var19.getIsActiveChannelOrUnarchivableThread;
            var2 = var2.bind(var19)(var12);
            var18 = !var2;
case 75:
            var19 = var31 != var28;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var2 = 31;
            var2 = var27[var2];
            var26 = var26.bind(var6)(var2);
            var2 = var26.useCanStartThread;
            var68 = var2.bind(var26)(var12);
            if(!var68) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var2 = _closure1_slot28;
            var27 = var2.GUILD_THREADS_ONLY;
            var26 = var27.has;
            var2 = var12.type;
            var2 = var26.bind(var27)(var2);
            var68 = !var2;
case 77:
            if(!var68) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var68 = !var1;
case 79:
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var2 = 33;
            var2 = var27[var2];
            var26 = var26.bind(var6)(var2);
            var2 = var26.useCanPostPollsInChannel;
            var37 = var2.bind(var26)(var12);
            if(!var37) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var37 = !var1;
case 81:
            var26 = _closure1_slot0;
            var2 = _closure1_slot3;
            var22 = var2[var22];
            var26 = var26.bind(var6)(var22);
            var22 = var26.useToken;
            var27 = _closure1_slot1;
            var2 = var2[var30];
            var2 = var27.bind(var6)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_PILL_BORDER_WIDTH;
            var53 = var22.bind(var26)(var2);
            if(var48) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var22 = _closure1_slot0;
            var26 = _closure1_slot3;
            var2 = 34;
            var2 = var26[var2];
            var22 = var22.bind(var6)(var2);
            var2 = var22.getChatInputMinHeight;
            var58 = var2.bind(var22)();
            _fun0003_ip = 85; continue _fun0003;
case 83:
            var2 = var55 * var53;
            var58 = var54 - var2;
case 85:
            _closure2_slot12 = var58;
            var26 = _closure1_slot0;
            var22 = _closure1_slot3;
            var2 = 35;
            var22 = var22[var2];
            var27 = var26.bind(var6)(var22);
            var26 = var27.useSharedValue;
            var22 = var58;
            if(!var4) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var22 = var54;
case 86:
            var27 = var26.bind(var27)(var22);
            _closure2_slot13 = var27;
            var32 = _closure1_slot6;
            var30 = var32.useEffect;
            var26 = new Array(4);
            var26[0] = var4;
            var26[1] = var54;
            var26[2] = var58;
            var26[3] = var27;
            var22 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = var3.set;
                    var1 = _closure2_slot2;
                    if(var1) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                    var1 = _closure2_slot12;
                    _fun0009_ip = 90; continue _fun0009;
case 88:
                    var1 = _closure2_slot3;
case 90:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var30.bind(var32)(var22, var26);
            var26 = _closure1_slot6;
            var22 = var26.useState;
            var26 = var22.bind(var26)(var25);
            var22 = _closure1_slot5;
            var22 = var22.bind(var6)(var26, var55);
            var52 = var22[var13];
            var22 = var22[var59];
            _closure2_slot14 = var22;
            var26 = _closure1_slot1;
            var30 = _closure1_slot3;
            var22 = 36;
            var22 = var30[var22];
            var22 = var26.bind(var6)(var22);
            var42 = var22.bind(var6)();
            var26 = _closure1_slot12;
            var22 = function(arg1) {
                var1 = arg1;
                var2 = var1.startTimeMillis;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var26 = var26.bind(var6)(var22);
            var39 = !var1;
            var64 = var39;
            if(var1) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var30 = _closure1_slot0;
            var32 = _closure1_slot3;
            var22 = 37;
            var22 = var32[var22];
            var30 = var30.bind(var6)(var22);
            var22 = var30.getIsAppLauncherEnabled;
            var64 = var22.bind(var30)(var12);
case 91:
            var22 = _closure1_slot0;
            var30 = _closure1_slot3;
            var7 = var30[var7];
            var40 = var22.bind(var6)(var7);
            var32 = var40.useStateFromStores;
            var7 = _closure1_slot8;
            var22 = new Array(1);
            var22[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getActiveCommand;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var67 = var32.bind(var40)(var22, var7);
            var22 = _closure1_slot1;
            var7 = 38;
            var7 = var30[var7];
            var32 = var22.bind(var6)(var7);
            var7 = {};
            var7['channel'] = var12;
            var40 = !var9;
            var7['isReadonly'] = var40;
            var7['isCreatingThread'] = var1;
            var7 = var32.bind(var6)(var7);
            var66 = var7.placeholder;
            var49 = var7.accessibilityLabel;
            var7 = 39;
            var7 = var30[var7];
            var22 = var22.bind(var6)(var7);
            var7 = null;
            if(!var9) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var7 = null;
            if(var1) { _fun0003_ip = 93; continue _fun0003 }
case 95:
            var7 = var12;
case 93:
            var62 = var22.bind(var6)(var7);
            var30 = _closure1_slot0;
            var32 = _closure1_slot3;
            var7 = 40;
            var40 = var32[var7];
            var44 = var30.bind(var6)(var40);
            var41 = var44.useGiftIntentExpressionPickerActive;
            var40 = var12.id;
            var40 = var41.bind(var44)(var40);
            _closure2_slot15 = var40;
            var7 = var32[var7];
            var32 = var30.bind(var6)(var7);
            var30 = var32.useGiftIntentExpressionPickerPlaceholder;
            var7 = var12.id;
            var7 = var30.bind(var32)(var7);
            if(!(var31 != var7)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var62 = var7;
case 96:
            var41 = !var40;
            if(!var41) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var41 = undefined;
case 98:
            var30 = _closure1_slot6;
            var22 = var30.useState;
            var7 = var33.length;
            var7 = var7 > var13;
            var22 = var22.bind(var30)(var7);
            var7 = _closure1_slot5;
            var22 = var7.bind(var6)(var22, var55);
            var7 = var22[var13];
            var22 = var22[var59];
            _closure2_slot16 = var22;
            var44 = _closure1_slot6;
            var32 = var44.useEffect;
            var30 = new Array(1);
            var30[0] = var33;
            var22 = function() {
                var3 = _closure2_slot16;
                var1 = _closure2_slot10;
                var2 = var1.length;
                var1 = 0;
                var2 = var2 > var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var32.bind(var44)(var22, var30);
            var57 = var31 != var62;
            if(!var57) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var57 = !var7;
case 100:
            var22 = _closure1_slot6;
            var7 = var22.useState;
            var22 = var7.bind(var22)(var13);
            var7 = _closure1_slot5;
            var22 = var7.bind(var6)(var22, var55);
            var7 = var22[var13];
            var22 = var22[var59];
            _closure2_slot17 = var22;
            var44 = _closure1_slot6;
            var32 = var44.useCallback;
            var30 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot17;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = new Array(0);
            var63 = var32.bind(var44)(var30, var22);
            var60 = 8;
            if(!var48) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var60 = 5;
case 102:
            if(!var4) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var58 = var54;
case 104:
            var44 = 0;
            if(!var57) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var22 = var7 > var13;
            var44 = 0;
            if(!var22) { _fun0003_ip = 106; continue _fun0003 }
case 108:
            var22 = global;
            var32 = var22.Math;
            var30 = var32.max;
            var22 = var55 * var60;
            var22 = var7 + var22;
            var44 = var30.bind(var32)(var58, var22);
case 106:
            _closure2_slot18 = var44;
            var65 = var60;
            if(!(var44 > var13)) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var7 = var44 - var7;
            var65 = var7 / var55;
case 109:
            var13 = _closure1_slot0;
            var30 = _closure1_slot3;
            var7 = var30[var2];
            var22 = var13.bind(var6)(var7);
            var13 = var22.useAnimatedStyle;
            var7 = function ht() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot18;
                    var2 = 0;
                    if(!(!(var4 > var2))) { _fun0010_ip = 111; continue _fun0010 }
case 112:
                    var4 = _closure2_slot13;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    _fun0010_ip = 113; continue _fun0010;
case 111:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var7 = _closure2_slot13;
                    var4 = var7.get;
                    var4 = var4.bind(var7)();
                    var3 = _closure2_slot18;
                    var2 = var5.bind(var6)(var4, var3);
case 113:
                    var1['minHeight'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['placeholderFieldHeight'] = var44;
            var32['textFieldHeight'] = var27;
            var7['__closure'] = var32;
            var32 = 14640048327678.0;
            var7['__workletHash'] = var32;
            var32 = _closure1_slot40;
            var7['__initData'] = var32;
            var58 = var13.bind(var22)(var7);
            var7 = _closure1_slot1;
            var13 = 41;
            var13 = var30[var13];
            var22 = var7.bind(var6)(var13);
            var13 = {};
            var32 = {};
            var32['analyticsLocations'] = var46;
            var32['canUpload'] = var23;
            var32['channel'] = var12;
            var32['defaultValue'] = var33;
            var32['hasAttachmentsToUpload'] = var14;
            var32['pendingEdit'] = var29;
            var32['pendingReply'] = var28;
            var32['screenIndex'] = var8;
            var32['secondaryTextFieldRef'] = var43;
            var32['threadCreationCallback'] = var38;
            var13['chatInputProps'] = var32;
            var13['chatInputTextFieldHeight'] = var27;
            var27 = arg2;
            var13['ref'] = var27;
            var43 = var22.bind(var6)(var13);
            _closure2_slot19 = var43;
            var32 = _closure1_slot6;
            var27 = var32.useEffect;
            var22 = new Array(1);
            var22[0] = var43;
            var13 = function() {
                var2 = _closure2_slot19;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot19;
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
            var22[0] = var43;
            var22[1] = var12;
            var22[2] = var29;
            var22[3] = var28;
            var13 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot19;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0011_ip = 114; continue _fun0011 }
case 38:
                    var5 = _closure2_slot9;
                    var3 = var2 != var5;
case 114:
                    if(var3) { _fun0011_ip = 41; continue _fun0011 }
case 45:
                    var5 = var2 == var4;
                    if(!var5) { _fun0011_ip = 115; continue _fun0011 }
case 42:
                    var6 = _closure2_slot8;
                    var5 = var2 != var6;
case 115:
                    var3 = var5;
case 41:
                    if(!var3) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                    var3 = _closure2_slot19;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 116; continue _fun0011 }
case 118:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 116:
                    var3 = _closure2_slot19;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0011_ip = 119; continue _fun0011 }
case 120:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 42;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0011_ip = 121; continue _fun0011 }
case 119:
                    var3 = _closure2_slot8;
                    if(!(var4 !== var3)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                    var3 = _closure2_slot19;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0011_ip = 122; continue _fun0011 }
case 11:
                    var4 = var5.setText;
                    var3 = _closure2_slot8;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0011_ip = 124; continue _fun0011 }
case 51:
                    var3 = _closure2_slot8;
case 124:
                    var3 = var4.bind(var5)(var3);
                    _fun0011_ip = 122; continue _fun0011;
case 121:
                    var3 = _closure2_slot19;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0011_ip = 122; continue _fun0011 }
case 125:
                    var2 = var3.setText;
                    var1 = _closure2_slot19;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var27.bind(var32)(var13, var22);
            var32 = _closure1_slot6;
            var27 = var32.useEffect;
            var22 = new Array(1);
            var22[0] = var43;
            var13 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                        var5 = var3.channelId;
case 126:
                        var4 = _closure2_slot19;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0012_ip = 42; continue _fun0012 }
case 114:
                        var6 = var6.channel;
                        var4 = var6.id;
case 42:
                        if(!(var5 === var4)) { _fun0012_ip = 118; continue _fun0012 }
case 128:
                        var3 = _closure2_slot19;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0012_ip = 118; continue _fun0012 }
case 10:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 118:
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
                var2 = _closure1_slot30;
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
                    var2 = _closure1_slot30;
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
            var22[0] = var43;
            var13 = function() {
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
                        var4 = _closure2_slot20;
                        var2 = var4.handleTextOrFocusChange;
                        var2 = var2.bind(var4)(var5, var8);
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot6;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 129:
                        var4 = _closure2_slot19;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 131:
                        var4 = _closure2_slot19;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot19;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot19;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 133:
                        var3 = _closure2_slot19;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 135:
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
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['focused'] = var8;
                        var2 = _closure2_slot6;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot20;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 137:
                        var3 = _closure2_slot19;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 124; continue _fun0014 }
case 13:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 124:
                        var3 = _closure2_slot19;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot19;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 139:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot19;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot19;
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
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0015_ip = 141; continue _fun0015 }
case 142:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 141:
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
                        if(!var1) { _fun0016_ip = 143; continue _fun0016 }
case 144:
                        var1 = var2 !== var4;
case 143:
                        if(!var1) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                        var2 = _closure2_slot19;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0016_ip = 145; continue _fun0016 }
case 3:
                        var1 = _closure2_slot19;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 145:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0017_ip = 147; continue _fun0017 }
case 90:
                        var1 = _closure2_slot19;
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
case 147:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot20;
                    var1 = _closure2_slot19;
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
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0018_ip = 4; continue _fun0018 }
case 148:
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0018_ip = 149; continue _fun0018 }
case 150:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 149:
                        if(var2) { _fun0018_ip = 4; continue _fun0018 }
case 151:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot19;
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
                            if(var2) { _fun0019_ip = 152; continue _fun0019 }
case 40:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 153:
                            return var4;
case 154:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0019_ip = 155; continue _fun0019 }
case 156:
                            var3 = _closure2_slot19;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0019_ip = 157; continue _fun0019 }
case 158:
                            var3 = _closure2_slot19;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0019_ip = 157; continue _fun0019 }
case 159:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 45;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 160:
                            return var3;
case 161:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0019_ip = 162; continue _fun0019 }
case 163:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 46;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot19;
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
case 157:
                            return var4;
case 162:
                            return var3;
case 155:
                            return var2;
case 152:
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
                        var1 = _closure1_slot26;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0020_ip = 164; continue _fun0020 }
case 165:
                        var1 = _closure1_slot26;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0020_ip = 166; continue _fun0020 }
case 154:
                        var1 = _closure1_slot26;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0020_ip = 167; continue _fun0020 }
case 168:
                        var1 = _closure1_slot26;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0020_ip = 169; continue _fun0020 }
case 170:
                        var1 = _closure1_slot26;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0020_ip = 171; continue _fun0020 }
case 145:
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
                        var2 = _closure2_slot19;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot19;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0020_ip = 171; continue _fun0020;
case 169:
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
                        if(!var1) { _fun0020_ip = 172; continue _fun0020 }
case 69:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 57;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 172:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 56;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot19;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot19;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0020_ip = 171; continue _fun0020;
case 167:
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
                        var7 = _closure2_slot19;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot31;
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
                            var3 = _closure2_slot20;
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
                            var2 = _closure2_slot19;
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
                        _fun0020_ip = 171; continue _fun0020;
case 166:
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
                        var1 = _closure1_slot27;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 50;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot29;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot19;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot19;
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
                        if(!var9) { _fun0020_ip = 173; continue _fun0020 }
case 174:
                        var1 = var5;
case 173:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot20;
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
                        var9 = _closure1_slot33;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 55;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot19;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0020_ip = 175; continue _fun0020 }
case 176:
                        var6 = var7.name;
case 175:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0020_ip = 171; continue _fun0020;
case 164:
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
                        var1 = _closure1_slot27;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot29;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot19;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot19;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        if(!var2) { _fun0020_ip = 177; continue _fun0020 }
case 178:
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
                        if(!(var3 !== var2)) { _fun0020_ip = 179; continue _fun0020 }
case 177:
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
                        if(!(var3 === var2)) { _fun0020_ip = 180; continue _fun0020 }
case 181:
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0020_ip = 180; continue _fun0020 }
case 182:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 180:
                        var5 = _closure2_slot20;
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
                        var9 = _closure1_slot35;
                        var9 = var9.CHAT;
                        var8['target'] = var9;
                        var2['context'] = var8;
                        var2 = var3.bind(var5)(var2);
                        _fun0020_ip = 171; continue _fun0020;
case 179:
                        var3 = _closure2_slot20;
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
case 171:
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
                    var2 = _closure1_slot27;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot29;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot19;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot19;
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
                    var5 = _closure2_slot19;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot20;
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
                    var7 = _closure2_slot19;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot31;
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
                        var3 = _closure2_slot20;
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
                        var2 = _closure2_slot19;
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
                    var2 = _closure1_slot34;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot20;
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
                    var1 = _closure2_slot19;
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
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot20;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot19;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot19;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0021_ip = 134; continue _fun0021 }
case 183:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 134:
                        var6 = _closure2_slot19;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 125; continue _fun0021 }
case 184:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot19;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 125:
                        var6 = _closure2_slot19;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0021_ip = 185; continue _fun0021 }
case 186:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 185:
                        if(!(var4 !== var5)) { _fun0021_ip = 187; continue _fun0021 }
case 188:
                        var4 = _closure2_slot19;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot19;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0021_ip = 189; continue _fun0021 }
case 190:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 189:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 187:
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
                        if(!(var1 === var3)) { _fun0022_ip = 191; continue _fun0022 }
case 142:
                        var1 = _closure2_slot19;
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
                        var3 = _closure2_slot19;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot19;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0022_ip = 8; continue _fun0022 }
case 132:
                        var1 = function() {
                            var1 = _closure2_slot19;
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
case 191:
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
                        var7 = _closure2_slot16;
                        var1 = var3.length;
                        var5 = 0;
                        var4 = var1 > var5;
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var3.length;
                        if(!(var4 > var5)) { _fun0023_ip = 192; continue _fun0023 }
case 148:
                        if(var6) { _fun0023_ip = 193; continue _fun0023 }
case 153:
                        var7 = var3.length;
                        var4 = _closure2_slot19;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.textPrev;
                        var4 = var4.length;
                        if(!(!(var7 > var4))) { _fun0023_ip = 193; continue _fun0023 }
case 192:
                        var4 = var3.length;
                        if(!(var5 === var4)) { _fun0023_ip = 194; continue _fun0023 }
case 195:
                        var4 = _closure2_slot19;
                        var4 = var4.chatInputActions;
                        var7 = var4.current;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0023_ip = 130; continue _fun0023 }
case 196:
                        var5 = var7.onShowActions;
                        var5 = var5.bind(var7)(var6);
case 130:
                        var5 = _closure2_slot19;
                        var5 = var5.chatInputRightActions;
                        var5 = var5.current;
                        if(!(var4 != var5)) { _fun0023_ip = 194; continue _fun0023 }
case 197:
                        var4 = var5.onShowActions;
                        var4 = var4.bind(var5)(var6);
                        _fun0023_ip = 194; continue _fun0023;
case 193:
                        var7 = _closure1_slot10;
                        var5 = var7.isOpen;
                        var5 = var5.bind(var7)();
                        if(!var5) { _fun0023_ip = 198; continue _fun0023 }
case 199:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 63;
                        var4 = var7[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.hideNativeMenu;
                        var4 = var4.bind(var5)();
case 198:
                        var4 = _closure2_slot19;
                        var4 = var4.chatInputActions;
                        var7 = var4.current;
                        var4 = null;
                        if(!(var4 != var7)) { _fun0023_ip = 200; continue _fun0023 }
case 53:
                        var5 = var7.onDismissActions;
                        var5 = var5.bind(var7)(var6);
case 200:
                        var5 = _closure2_slot19;
                        var5 = var5.chatInputRightActions;
                        var5 = var5.current;
                        if(!(var4 != var5)) { _fun0023_ip = 194; continue _fun0023 }
case 201:
                        var4 = var5.onDismissActions;
                        var4 = var4.bind(var5)(var6);
case 194:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var5 = 64;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.getMaxMessageLength;
                        var7 = var5.bind(var6)();
                        var5 = _closure2_slot19;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0023_ip = 202; continue _fun0023 }
case 203:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 202:
                        if(!var5) { _fun0023_ip = 204; continue _fun0023 }
case 205:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 50;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot27;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 204:
                        var4 = _closure2_slot19;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot19;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot19;
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
                        var1 = _closure2_slot19;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0024_ip = 128; continue _fun0024 }
case 156:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 128:
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
                        if(!var1) { _fun0025_ip = 141; continue _fun0025 }
case 206:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 63;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 141:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 51;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0025_ip = 207; continue _fun0025 }
case 208:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 36;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0025_ip = 207; continue _fun0025 }
case 209:
                        var2 = _closure2_slot19;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0025_ip = 210; continue _fun0025;
case 207:
                        var2 = _closure2_slot19;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 210:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var38 = var27.bind(var32)(var13, var22);
            _closure2_slot20 = var38;
            var32 = _closure1_slot6;
            var27 = var32.useCallback;
            var22 = new Array(4);
            var22[0] = var4;
            var22[1] = var1;
            var22[2] = var8;
            var22[3] = var43;
            var13 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = var1.width;
                    var2 = 0;
                    var1 = var2 !== var3;
                    if(!var1) { _fun0026_ip = 143; continue _fun0026 }
case 144:
                    var1 = var2 !== var4;
case 143:
                    if(!var1) { _fun0026_ip = 211; continue _fun0026 }
case 146:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0026_ip = 212; continue _fun0026 }
case 213:
                    var6 = _closure1_slot19;
                    var4 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var5 = undefined;
                    var2 = var6.bind(var5)(var4, var3, var2);
                    var4 = _closure2_slot14;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
case 212:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0026_ip = 211; continue _fun0026 }
case 214:
                    var1 = _closure2_slot19;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 211:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var27.bind(var32)(var13, var22);
            var44 = _closure1_slot6;
            var32 = var44.useCallback;
            var27 = function() {
                var1 = true;
                return var1;
            };
            var22 = new Array(0);
            var32 = var32.bind(var44)(var27, var22);
            var44 = _closure1_slot6;
            var27 = var44.useCallback;
            var22 = new Array(3);
            var22[0] = var9;
            var22[1] = var40;
            var22[2] = var43;
            var5 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(!var1) { _fun0027_ip = 156; continue _fun0027 }
case 40:
                    var1 = _closure2_slot15;
                    var2 = _closure2_slot19;
                    var2 = var2.chatInput;
                    var2 = var2.current;
                    if(var1) { _fun0027_ip = 43; continue _fun0027 }
case 215:
                    var1 = var2.openSystemKeyboard;
                    var1 = var1.bind(var2)();
                    _fun0027_ip = 156; continue _fun0027;
case 43:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var27.bind(var44)(var5, var22);
            var22 = _closure1_slot36;
            var5 = 65;
            var5 = var30[var5];
            var7 = var7.bind(var6)(var5);
            var5 = {};
            var5['canUpload'] = var23;
            var30 = var12.id;
            var5['channelId'] = var30;
            var5['screenIndex'] = var8;
            var22 = var22.bind(var6)(var7, var5);
            var44 = null;
            if(!var9) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var30 = _closure1_slot36;
            var7 = _closure1_slot1;
            var69 = _closure1_slot3;
            var5 = 66;
            var5 = var69[var5];
            var7 = var7.bind(var6)(var5);
            var5 = {};
            var69 = var43.chatInputActions;
            var5['ref'] = var69;
            var5['channel'] = var12;
            var69 = var38.handlePressAction;
            var5['onPressAction'] = var69;
            var5['canStartThreads'] = var68;
            var5['isAppLauncherEnabled'] = var64;
            var5['keyboardType'] = var42;
            var64 = var23;
            if(!var23) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var64 = var31 == var67;
case 218:
            if(var64) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var64 = var37;
case 220:
            var64 = !var64;
            var5['shouldPhotosButtonBeDisabled'] = var64;
            var5['canUpload'] = var23;
            var64 = var39;
            if(var1) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var68 = _closure1_slot0;
            var69 = _closure1_slot3;
            var67 = 67;
            var67 = var69[var67];
            var68 = var68.bind(var6)(var67);
            var67 = var68.isPremiumGiftingSupported;
            var64 = var67.bind(var68)();
case 222:
            var5['shouldShowGiftButton'] = var64;
            var5['canPostPolls'] = var37;
            var37 = var38.handlePollsPress;
            var5['onPollsPress'] = var37;
            var37 = var38.handleAttachPress;
            var5['onAttachPress'] = var37;
            var44 = var30.bind(var6)(var7, var5);
case 216:
            var7 = _closure1_slot37;
            var37 = _closure1_slot1;
            var67 = _closure1_slot3;
            var2 = var67[var2];
            var2 = var37.bind(var6)(var2);
            var5 = var2.View;
            var2 = {};
            var64 = var35.inputDefault;
            var30 = new Array(2);
            var30[0] = var64;
            var30[1] = var58;
            var2['style'] = var30;
            var58 = _closure1_slot36;
            var30 = 68;
            var30 = var67[var30];
            var37 = var37.bind(var6)(var30);
            var30 = {};
            var30['accessibilityLabel'] = var49;
            var64 = _closure1_slot0;
            var49 = 69;
            var49 = var67[var49];
            var49 = var64.bind(var6)(var49);
            var49 = var49.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var30['customKeyboard'] = var49;
            var30['editable'] = var9;
            var49 = var38.handleFocus;
            var30['onBeginFocus'] = var49;
            var49 = var38.handleBlur;
            var30['onEndBlur'] = var49;
            var49 = var38.handleChangeContentSize;
            var30['onChangeContentSize'] = var49;
            var49 = var38.handleMaxHeightChanged;
            var30['onMaxHeightChanged'] = var49;
            var49 = var38.handleSelectionOrTextChange;
            var30['onSelectionOrTextChange'] = var49;
            var49 = var38.handleTextFlushed;
            var30['onTextFlushed'] = var49;
            var49 = var38.handlePasteImage;
            var30['onPasteImage'] = var49;
            var49 = var38.handlePasteCommand;
            var30['onPasteCommand'] = var49;
            var49 = var38.handleTapAction;
            var30['onTapAction'] = var49;
            var49 = var38.handlePressSend;
            var30['onRequestSend'] = var49;
            var67 = var31 == var62;
            var49 = '';
            var64 = var49;
            if(!var67) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var64 = var66;
case 224:
            var30['placeholder'] = var64;
            var64 = var43.chatInputNative;
            var30['ref'] = var64;
            var30['setNoExtractUI'] = var61;
            var66 = _closure1_slot0;
            var64 = _closure1_slot3;
            var61 = 51;
            var64 = var64[var61];
            var64 = var66.bind(var6)(var64);
            var64 = var64.KeyboardTypes;
            var64 = var64.MEDIA;
            var64 = var42 !== var64;
            var30['shouldShowCursor'] = var64;
            var30['verticalInset'] = var60;
            var37 = var58.bind(var6)(var37, var30);
            var30 = new Array(3);
            var30[0] = var37;
            var37 = null;
            if(!var57) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var60 = _closure1_slot36;
            var58 = _closure1_slot0;
            var64 = _closure1_slot3;
            var57 = 70;
            var57 = var64[var57];
            var57 = var58.bind(var6)(var57);
            var58 = var57.Text;
            var57 = {'pointerEvents': 'none', 'onLayout': null, 'style': null, 'variant': 'text-md/normal', 'color': 'text-muted', 'maxFontSizeMultiplier': 2};
            var57['onLayout'] = var63;
            var64 = var35.customPlaceholder;
            var63 = new Array(2);
            var63[0] = var64;
            var64 = {};
            var64['top'] = var65;
            var63[1] = var64;
            var57['style'] = var63;
            var57['children'] = var62;
            var37 = var60.bind(var6)(var58, var57);
case 226:
            var30[1] = var37;
            var58 = _closure1_slot36;
            var57 = _closure1_slot1;
            var60 = _closure1_slot3;
            var37 = 71;
            var37 = var60[var37];
            var57 = var57.bind(var6)(var37);
            var37 = {};
            var60 = !var40;
            var37['enabled'] = var60;
            var37['keyboardType'] = var42;
            var60 = var38.handleToggleKeyboard;
            var37['onSelectKeyboard'] = var60;
            var60 = var43.chatInputCover;
            var37['ref'] = var60;
            var37 = var58.bind(var6)(var57, var37);
            var30[2] = var37;
            var2['children'] = var30;
            var37 = var7.bind(var6)(var5, var2);
            if(var9) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var30 = null;
            if(!var1) { _fun0003_ip = 230; continue _fun0003 }
case 228:
            var7 = _closure1_slot36;
            var5 = _closure1_slot1;
            var57 = _closure1_slot3;
            var2 = 72;
            var2 = var57[var2];
            var5 = var5.bind(var6)(var2);
            var2 = {};
            var57 = var43.chatInputSendButton;
            var2['ref'] = var57;
            var2['canSendVoiceMessage'] = var24;
            var2['channel'] = var12;
            var2['defaultValue'] = var33;
            if(!var14) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var14 = var23;
case 231:
            var2['hasPendingAttachments'] = var14;
            var14 = var31 != var29;
            var2['hasPendingEdit'] = var14;
            var14 = var38.handlePressSend;
            var2['onSendMessage'] = var14;
            var2['requireTextContent'] = var39;
            var30 = var7.bind(var6)(var5, var2);
case 230:
            var7 = _closure1_slot37;
            var5 = _closure1_slot7;
            var2 = {};
            var2['collapsable'] = var25;
            var2['onLayout'] = var13;
            var14 = _closure1_slot1;
            var23 = _closure1_slot3;
            var13 = 73;
            var13 = var23[var13];
            var14 = var14.bind(var6)(var13);
            var13 = {};
            var13['isCreatingThread'] = var1;
            var23 = var4;
            if(!var4) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var57 = _closure1_slot0;
            var58 = _closure1_slot3;
            var24 = 22;
            var24 = var58[var24];
            var57 = var57.bind(var6)(var24);
            var24 = var57.isAndroid;
            var24 = var24.bind(var57)();
            var24 = !var24;
            if(var24) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var24 = var52;
case 235:
            var23 = var24;
case 233:
            var13['isFloatingRefresh'] = var23;
            var14 = var14.bind(var6)(var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var4;
            if(!var4) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var14 = var35.overflowVisible;
case 237:
            var13[1] = var14;
            var2['style'] = var13;
            var14 = var4;
            if(!var4) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var14 = !var34;
case 239:
            if(!var14) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var24 = _closure1_slot36;
            var23 = _closure1_slot42;
            var13 = {};
            var13['gradientHeight'] = var47;
            var13['inline'] = var25;
            var13['scrimBase'] = var50;
            var14 = var24.bind(var6)(var23, var13);
case 241:
            var13 = new Array(14);
            var13[0] = var14;
            var14 = var4;
            if(!var4) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var14 = var34;
case 243:
            if(!var14) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var47 = _closure1_slot36;
            var24 = _closure1_slot7;
            var23 = {};
            var52 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var58 = _closure1_slot0;
            var60 = _closure1_slot3;
            var57 = 23;
            var57 = var60[var57];
            var58 = var58.bind(var6)(var57);
            var57 = var58.hex2rgb;
            var58 = var57.bind(var58)(var50, var59);
            var57 = var50;
            if(!(var31 != var58)) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var57 = var58;
case 247:
            var52['backgroundColor'] = var57;
            var23['style'] = var52;
            var52 = 'none';
            var23['pointerEvents'] = var52;
            var14 = var47.bind(var6)(var24, var23);
case 245:
            var13[1] = var14;
            var24 = _closure1_slot36;
            var23 = _closure1_slot0;
            var47 = _closure1_slot3;
            var14 = 74;
            var14 = var47[var14];
            var14 = var23.bind(var6)(var14);
            var23 = var14.ChatInputAccessibilityDivider;
            var14 = {};
            var14 = var24.bind(var6)(var23, var14);
            var13[2] = var14;
            var14 = null;
            if(!var20) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var24 = _closure1_slot36;
            var23 = _closure1_slot1;
            var47 = _closure1_slot3;
            var20 = 75;
            var20 = var47[var20];
            var23 = var23.bind(var6)(var20);
            var20 = {};
            var20['channel'] = var12;
            var33 = var49 !== var33;
            if(var33) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var47 = var43.chatInput;
            var57 = var47.current;
            var52 = var31 == var57;
            var47 = undefined;
            if(var52) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var52 = var57.getText;
            var47 = var52.bind(var57)();
case 253:
            var33 = var49 !== var47;
case 251:
            var20['hasInputText'] = var33;
            var14 = var24.bind(var6)(var23, var20);
case 249:
            var13[3] = var14;
            var23 = _closure1_slot37;
            var20 = _closure1_slot7;
            var14 = {};
            var24 = var35.accessories;
            var14['style'] = var24;
            var33 = var4;
            if(!var4) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var33 = var34;
case 255:
            if(!var33) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var49 = _closure1_slot36;
            var47 = _closure1_slot42;
            var24 = {};
            var24['gradientHeight'] = var51;
            var51 = true;
            var24['inline'] = var51;
            var24['scrimBase'] = var50;
            var33 = var49.bind(var6)(var47, var24);
case 257:
            var24 = new Array(3);
            var24[0] = var33;
            var33 = null;
            if(var1) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var50 = _closure1_slot36;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var47 = 76;
            var47 = var51[var47];
            var49 = var49.bind(var6)(var47);
            var47 = {};
            var47['channel'] = var12;
            var47['screenIndex'] = var8;
            var51 = undefined;
            if(!var4) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var57 = var35.floatingTypingWrapper;
            var52 = new Array(2);
            var52[0] = var57;
            var52[1] = var56;
            var51 = var52;
case 261:
            var47['wrapperStyle'] = var51;
            var33 = var50.bind(var6)(var49, var47);
case 259:
            var24[1] = var33;
            var47 = _closure1_slot0;
            var49 = _closure1_slot3;
            var33 = 22;
            var33 = var49[var33];
            var47 = var47.bind(var6)(var33);
            var33 = var47.isIOS;
            var47 = var33.bind(var47)();
            var33 = null;
            if(!var47) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var50 = _closure1_slot36;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var47 = 77;
            var47 = var51[var47];
            var49 = var49.bind(var6)(var47);
            var47 = {};
            var51 = var12.id;
            var47['channelId'] = var51;
            var47['screenIndex'] = var8;
            var47['onJumpToPresent'] = var10;
            var33 = var50.bind(var6)(var49, var47);
case 263:
            var24[2] = var33;
            var14['children'] = var24;
            var14 = var23.bind(var6)(var20, var14);
            var13[4] = var14;
            var14 = null;
            if(!var17) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var24 = _closure1_slot36;
            var20 = _closure1_slot1;
            var23 = _closure1_slot3;
            var17 = 78;
            var17 = var23[var17];
            var23 = var20.bind(var6)(var17);
            var20 = {};
            var20['channel'] = var12;
            var17 = var12.id;
            var14 = var24.bind(var6)(var23, var20, var17);
case 265:
            var13[5] = var14;
            var24 = _closure1_slot36;
            var17 = _closure1_slot0;
            var23 = _closure1_slot3;
            var14 = 79;
            var14 = var23[var14];
            var14 = var17.bind(var6)(var14);
            var20 = var14.MemberActionsChatInputBannerGuardedOuter;
            var14 = {};
            var14['channel'] = var12;
            var14 = var24.bind(var6)(var20, var14);
            var13[6] = var14;
            var20 = _closure1_slot36;
            var14 = 80;
            var14 = var23[var14];
            var14 = var17.bind(var6)(var14);
            var17 = var14.DoubleTapToReactChatInputBanner;
            var14 = {};
            var14['channel'] = var12;
            var14 = var20.bind(var6)(var17, var14);
            var13[7] = var14;
            var14 = null;
            if(!var15) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var20 = _closure1_slot36;
            var17 = _closure1_slot1;
            var23 = _closure1_slot3;
            var15 = 81;
            var15 = var23[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var23 = var12.id;
            var15['channelId'] = var23;
            var14 = var20.bind(var6)(var17, var15);
case 267:
            var13[8] = var14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var61];
            var14 = var15.bind(var6)(var14);
            var14 = var14.KeyboardTypes;
            var15 = var14.EXPRESSION;
            var14 = null;
            if(!(var42 !== var15)) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var20 = _closure1_slot36;
            var17 = _closure1_slot1;
            var23 = _closure1_slot3;
            var15 = 82;
            var15 = var23[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var23 = var43.chatInputAutocomplete;
            var15['ref'] = var23;
            var15['analyticsLocations'] = var46;
            var15['channel'] = var12;
            var15['canMentionEveryone'] = var21;
            var15['keyboardType'] = var42;
            var21 = var38.handleChangeAutoCompleteVisibility;
            var15['onChangeAutoCompleteVisibility'] = var21;
            var15['commandsDisabled'] = var18;
            var15['canOnlyUseTextCommands'] = var19;
            var21 = var43.chatInput;
            var15['chatInputRef'] = var21;
            var15['screenIndex'] = var8;
            var14 = var20.bind(var6)(var17, var15);
case 269:
            var13[9] = var14;
            var14 = !var4;
            if(!var14) { _fun0003_ip = 271; continue _fun0003 }
case 272:
            var20 = _closure1_slot36;
            var17 = _closure1_slot1;
            var21 = _closure1_slot3;
            var15 = 83;
            var15 = var21[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var15['channel'] = var12;
            var14 = var20.bind(var6)(var17, var15);
case 271:
            var13[10] = var14;
            var14 = !var4;
            if(!var14) { _fun0003_ip = 273; continue _fun0003 }
case 274:
            var20 = _closure1_slot36;
            var17 = _closure1_slot1;
            var21 = _closure1_slot3;
            var15 = 84;
            var15 = var21[var15];
            var17 = var17.bind(var6)(var15);
            var15 = {};
            var15['channel'] = var12;
            var21 = var43.chatInput;
            var15['chatInputRef'] = var21;
            var15['pendingEdit'] = var29;
            var15['pendingReply'] = var28;
            var14 = var20.bind(var6)(var17, var15);
case 273:
            var13[11] = var14;
            var17 = _closure1_slot36;
            var15 = _closure1_slot1;
            var20 = _closure1_slot3;
            var14 = 85;
            var14 = var20[var14];
            var15 = var15.bind(var6)(var14);
            var14 = {};
            var20 = var43.chatInputAppCommandManager;
            var14['ref'] = var20;
            var14['canOnlyUseTextCommands'] = var19;
            var14['channel'] = var12;
            var19 = var43.chatInput;
            var14['chatInputRef'] = var19;
            var19 = var43.state;
            var14['chatInputStateRef'] = var19;
            var14['commandsDisabled'] = var18;
            var14 = var17.bind(var6)(var15, var14);
            var13[12] = var14;
            var15 = _closure1_slot36;
            var14 = {};
            var18 = var35.container;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var4;
            if(!var18) { _fun0003_ip = 275; continue _fun0003 }
case 276:
            var18 = var35.floatingContainer;
case 275:
            var17[1] = var18;
            var14['style'] = var17;
            var17 = var38.handleLayoutOfInputContainer;
            var14['onLayout'] = var17;
            var19 = _closure1_slot37;
            var18 = _closure1_slot38;
            var20 = {};
            if(var4) { _fun0003_ip = 277; continue _fun0003 }
case 278:
            var17 = new Array(2);
            var17[0] = var22;
            var24 = _closure1_slot37;
            var23 = _closure1_slot7;
            var21 = {};
            var33 = var35.containerInner;
            var21['style'] = var33;
            var21['collapsable'] = var25;
            var21['accessibilityElementsHidden'] = var26;
            var33 = undefined;
            if(!var26) { _fun0003_ip = 279; continue _fun0003 }
case 280:
            var33 = 'no-hide-descendants';
case 279:
            var21['importantForAccessibility'] = var33;
            var47 = var44;
            if(!var48) { _fun0003_ip = 281; continue _fun0003 }
case 282:
            var50 = _closure1_slot36;
            var49 = _closure1_slot7;
            var33 = {};
            var51 = var35.refreshButtonAlignment;
            var33['style'] = var51;
            var33['children'] = var44;
            var47 = var50.bind(var6)(var49, var33);
case 281:
            var33 = new Array(3);
            var33[0] = var47;
            var50 = _closure1_slot37;
            var49 = _closure1_slot7;
            var47 = {};
            var52 = var35.input;
            var51 = new Array(2);
            var51[0] = var52;
            var52 = {};
            var53 = var55 * var53;
            var53 = var54 - var53;
            var52['minHeight'] = var53;
            var51[1] = var52;
            var47['style'] = var51;
            var51 = new Array(2);
            var51[0] = var37;
            var54 = _closure1_slot37;
            var53 = _closure1_slot7;
            var52 = {};
            var55 = var35.rightAccessory;
            var52['style'] = var55;
            var56 = null;
            if(!var9) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var58 = _closure1_slot36;
            var57 = _closure1_slot1;
            var59 = _closure1_slot3;
            var55 = 88;
            var55 = var59[var55];
            var57 = var57.bind(var6)(var55);
            var55 = {};
            var60 = _closure1_slot0;
            var59 = var59[var61];
            var59 = var60.bind(var6)(var59);
            var59 = var59.KeyboardTypes;
            var59 = var59.EXPRESSION;
            var59 = var42 === var59;
            var55['active'] = var59;
            var55['showKeyboardIcon'] = var41;
            var59 = var38.handlePressExpression;
            var55['onPress'] = var59;
            var56 = var58.bind(var6)(var57, var55);
case 283:
            var55 = new Array(2);
            var55[0] = var56;
            var58 = _closure1_slot36;
            var57 = _closure1_slot1;
            var59 = _closure1_slot3;
            var56 = 86;
            var56 = var59[var56];
            var57 = var57.bind(var6)(var56);
            var56 = {};
            var56['analyticsLocations'] = var46;
            var59 = var43.chatInputCharCounter;
            var56['ref'] = var59;
            var56 = var58.bind(var6)(var57, var56);
            var55[1] = var56;
            var52['children'] = var55;
            var52 = var54.bind(var6)(var53, var52);
            var51[1] = var52;
            var47['children'] = var51;
            var47 = var50.bind(var6)(var49, var47);
            var33[1] = var47;
            var47 = var30;
            if(!var48) { _fun0003_ip = 285; continue _fun0003 }
case 286:
            var50 = _closure1_slot36;
            var49 = _closure1_slot7;
            var48 = {};
            var51 = var35.refreshButtonAlignment;
            var48['style'] = var51;
            var48['children'] = var30;
            var47 = var50.bind(var6)(var49, var48);
case 285:
            var33[2] = var47;
            var21['children'] = var33;
            var21 = var24.bind(var6)(var23, var21);
            var17[1] = var21;
            var20['children'] = var17;
            var17 = var20;
            _fun0003_ip = 287; continue _fun0003;
case 277:
            var21 = new Array(3);
            var21[0] = var22;
            var24 = _closure1_slot36;
            var23 = _closure1_slot1;
            var33 = _closure1_slot3;
            var22 = 83;
            var22 = var33[var22];
            var23 = var23.bind(var6)(var22);
            var22 = {};
            var22['channel'] = var12;
            var22 = var24.bind(var6)(var23, var22);
            var21[1] = var22;
            var24 = _closure1_slot37;
            var23 = _closure1_slot7;
            var22 = {};
            var47 = var35.floatingInputBox;
            var33 = new Array(3);
            var33[0] = var47;
            if(!var45) { _fun0003_ip = 288; continue _fun0003 }
case 289:
            var45 = var35.floatingInputBoxPressed;
case 288:
            var33[1] = var45;
            if(!var34) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var34 = var35.floatingInputBoxTyping;
case 290:
            var33[2] = var34;
            var22['style'] = var33;
            var22['onStartShouldSetResponder'] = var32;
            var22['onResponderRelease'] = var27;
            var22['collapsable'] = var25;
            var22['accessibilityElementsHidden'] = var26;
            var25 = undefined;
            if(!var26) { _fun0003_ip = 292; continue _fun0003 }
case 293:
            var25 = 'no-hide-descendants';
case 292:
            var22['importantForAccessibility'] = var25;
            var27 = _closure1_slot36;
            var26 = _closure1_slot1;
            var32 = _closure1_slot3;
            var25 = 84;
            var25 = var32[var25];
            var26 = var26.bind(var6)(var25);
            var25 = {};
            var25['channel'] = var12;
            var32 = var43.chatInput;
            var25['chatInputRef'] = var32;
            var25['pendingEdit'] = var29;
            var25['pendingReply'] = var28;
            var26 = var27.bind(var6)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot37;
            var27 = _closure1_slot7;
            var26 = {};
            var29 = var35.floatingMainContents;
            var26['style'] = var29;
            var29 = var31 != var44;
            var32 = null;
            if(!var29) { _fun0003_ip = 294; continue _fun0003 }
case 295:
            var34 = _closure1_slot36;
            var33 = _closure1_slot7;
            var29 = {};
            var45 = {};
            var45['paddingBottom'] = var36;
            var45['paddingLeft'] = var36;
            var29['style'] = var45;
            var29['children'] = var44;
            var32 = var34.bind(var6)(var33, var29);
case 294:
            var29 = new Array(4);
            var29[0] = var32;
            var34 = _closure1_slot37;
            var33 = _closure1_slot7;
            var32 = {};
            var44 = var35.inputFlat;
            var35 = new Array(2);
            var35[0] = var44;
            var44 = {};
            var44['paddingBottom'] = var36;
            var35[1] = var44;
            var32['style'] = var35;
            var35 = new Array(2);
            var35[0] = var37;
            var45 = _closure1_slot36;
            var44 = _closure1_slot1;
            var47 = _closure1_slot3;
            var37 = 86;
            var37 = var47[var37];
            var44 = var44.bind(var6)(var37);
            var37 = {};
            var37['analyticsLocations'] = var46;
            var46 = var43.chatInputCharCounter;
            var37['ref'] = var46;
            var37 = var45.bind(var6)(var44, var37);
            var35[1] = var37;
            var32['children'] = var35;
            var32 = var34.bind(var6)(var33, var32);
            var29[1] = var32;
            var31 = null;
            if(!var9) { _fun0003_ip = 296; continue _fun0003 }
case 297:
            var34 = _closure1_slot36;
            var33 = _closure1_slot7;
            var32 = {};
            var35 = {};
            var35['paddingBottom'] = var36;
            var32['style'] = var35;
            var37 = _closure1_slot36;
            var36 = _closure1_slot1;
            var44 = _closure1_slot3;
            var35 = 87;
            var35 = var44[var35];
            var36 = var36.bind(var6)(var35);
            var35 = {};
            var43 = var43.chatInputRightActions;
            var35['ref'] = var43;
            var35['channel'] = var12;
            var35['keyboardType'] = var42;
            var35['showKeyboardIcon'] = var41;
            if(var1) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            var42 = _closure1_slot0;
            var43 = _closure1_slot3;
            var41 = 67;
            var41 = var43[var41];
            var42 = var42.bind(var6)(var41);
            var41 = var42.isPremiumGiftingSupported;
            var39 = var41.bind(var42)();
case 298:
            if(!var39) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var39 = !var40;
case 300:
            var35['shouldShowGiftButton'] = var39;
            var39 = var38.handlePressAction;
            var35['onPressAction'] = var39;
            var38 = var38.handlePressExpression;
            var35['onPressExpression'] = var38;
            var35 = var37.bind(var6)(var36, var35);
            var32['children'] = var35;
            var31 = var34.bind(var6)(var33, var32);
case 296:
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
case 287:
            var17 = var19.bind(var6)(var18, var17);
            var14['children'] = var17;
            var14 = var15.bind(var6)(var16, var14);
            var13[13] = var14;
            var2['children'] = var13;
            var7 = var7.bind(var6)(var5, var2);
            if(var1) { _fun0003_ip = 302; continue _fun0003 }
case 303:
            var5 = _closure1_slot36;
            var2 = _closure1_slot1;
            var13 = _closure1_slot3;
            var1 = 89;
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
            _fun0003_ip = 304; continue _fun0003;
case 302:
            var2 = var7;
            if(!var4) { _fun0003_ip = 305; continue _fun0003 }
case 306:
            var5 = _closure1_slot36;
            var4 = _closure1_slot43;
            var3 = {};
            var3['screenIndex'] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 305:
            var1 = var2;
case 304:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = {};
    var9 = 'function ChatInputTsx2(){const{animatedHeight}=this.__closure;return{height:animatedHeight.get()};}';
    var2['code'] = var9;
    var _closure1_slot41 = var2;
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 92;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();