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
    var4 = var4.useChatShowingAutoComplete;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING;
    var _closure1_slot20 = var8;
    var8 = var4.CHAT_INPUT_HORIZONTAL_PADDING_PARENT;
    var _closure1_slot21 = var8;
    var4 = var4.ChatInputActionType;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot23 = var8;
    var8 = var4.ChannelTypesSets;
    var _closure1_slot24 = var8;
    var8 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot25 = var8;
    var8 = var4.ComponentActions;
    var _closure1_slot26 = var8;
    var8 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot27 = var8;
    var4 = var4.Permissions;
    var _closure1_slot28 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot29 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiInteractionPoint;
    var _closure1_slot30 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot31 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot32 = var8;
    var8 = var4.jsxs;
    var _closure1_slot33 = var8;
    var4 = var4.Fragment;
    var _closure1_slot34 = var4;
    var4 = [0, 1];
    var _closure1_slot35 = var4;
    var4 = 19;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            var8 = _closure1_slot20;
            var3 = _closure1_slot21;
            var3 = var8 - var3;
            var2['paddingHorizontal'] = var3;
            var3 = null;
            var8 = var5;
            if(!(var3 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot1;
            var9 = _closure1_slot3;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_BASE_LOW;
case 2:
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
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = {};
            var9 = 6;
            var8['marginLeft'] = var9;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = {'marginLeft': 0, 'marginTop': 0};
case 6:
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
            if(!(var3 == var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_BACKGROUND;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var3 = var5.CARD_SECONDARY_BG;
case 9:
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
            var8 = 'transparent';
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
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
            var2['paddingBottom'] = var5;
            var1['floatingContainerKeyboardOpen'] = var2;
            var2 = {'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'flexDirection': 'column', 'overflow': 'hidden'};
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.MOBILE_FLOATINGBAR_BACKGROUND;
            var2['backgroundColor'] = var5;
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BORDER_MUTED;
            var2['borderColor'] = var5;
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.radii;
            var5 = var5.lg;
            var2['borderRadius'] = var5;
            var1['floatingInputBox'] = var2;
            var2 = {};
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BORDER_SUBTLE;
            var2['borderColor'] = var5;
            var1['floatingInputBoxPressed'] = var2;
            var2 = {'shadowOpacity': 0, 'elevation': 0};
            var1['floatingInputBoxTyping'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'flex-end'};
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL;
            var2['paddingHorizontal'] = var5;
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
            var2['paddingVertical'] = var5;
            var5 = var10[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL;
            var2['gap'] = var5;
            var1['floatingMainContents'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'center'};
            var9 = _closure1_slot0;
            var5 = 21;
            var5 = var10[var5];
            var9 = var9.bind(var6)(var5);
            var5 = var9.isAndroid;
            var9 = var5.bind(var9)();
            var5 = -6;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = -5;
case 10:
            var2['marginHorizontal'] = var5;
            var1['inputFlat'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
            var1['floatingScrimFill'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var9 = var4[var7];
            var9 = var5.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var2['height'] = var9;
            var1['floatingScrimGradient'] = var2;
            var2 = {'position': 'absolute', 'top': null, 'left': 0, 'right': 0, 'bottom': 0};
            var9 = var4[var7];
            var9 = var5.bind(var6)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT;
            var2['top'] = var9;
            var1['floatingScrimSolid'] = var2;
            var2 = {};
            var2['backgroundColor'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.modules;
            var8 = var8.mobile;
            var8 = var8.CHAT_INPUT_FLOATING_TYPING_PADDING_TOP;
            var2['paddingTop'] = var8;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var14 = var1.isResourceChannel;
            var10 = var1.screenIndex;
            var _closure2_slot1 = var10;
            var53 = var1.setNoExtractUI;
            var57 = var1.secondaryTextFieldRef;
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
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 22;
            var1 = var3[var1];
            var9 = var7.bind(var5)(var1);
            var6 = var9.useMobileVisualRefreshConfig;
            var1 = {};
            var12 = 'ChatInput';
            var1['location'] = var12;
            var1 = var6.bind(var9)(var1);
            var42 = var1.enabled;
            var16 = var1.chatInputFloating;
            var _closure2_slot2 = var16;
            var1 = 23;
            var6 = var3[var1];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useGradientValue;
            var1 = var3[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var6.bind(var9)(var1);
            var6 = 24;
            var6 = var3[var6];
            var9 = var7.bind(var5)(var6);
            var6 = var9.useYouBarGradientBackground;
            var9 = var6.bind(var9)();
            var6 = _closure1_slot36;
            var32 = var6.bind(var5)(var9, var1, var16);
            var12 = 25;
            var6 = var3[var12];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useToken;
            var9 = _closure1_slot1;
            var34 = 20;
            var3 = var3[var34];
            var3 = var9.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var3 = var6.bind(var7)(var3);
            var30 = null;
            if(!(var30 != var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var1;
case 12:
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var7 = 26;
            var1 = var1[var7];
            var6 = var6.bind(var5)(var1);
            var1 = var6.hex2rgb;
            var21 = 1;
            var1 = var1.bind(var6)(var3, var21);
            var6 = var3;
            var46 = var6;
            if(!(var30 != var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var46 = var1;
case 14:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var7];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hex2rgb;
            var29 = 0;
            var1 = var1.bind(var3)(var6, var29);
            var3 = var30 != var1;
            var50 = 'transparent';
            if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var50 = var1;
case 16:
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = var9[var12];
            var13 = var6.bind(var5)(var1);
            var7 = var13.useToken;
            var3 = _closure1_slot1;
            var1 = var9[var34];
            var1 = var3.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_FLOATING_SCRIM_OFFSET_TOP;
            var44 = var7.bind(var13)(var1);
            var1 = var9[var12];
            var7 = var6.bind(var5)(var1);
            var6 = var7.useToken;
            var1 = var9[var34];
            var1 = var3.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING;
            var1 = var6.bind(var7)(var1);
            _closure2_slot3 = var1;
            var7 = _closure1_slot6;
            var13 = var7.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var2 = 2;
                var2 = var2 * var3;
                var1['paddingLeft'] = var2;
                return var1;
            };
            var51 = var13.bind(var7)(var1, var6);
            var1 = var7.useRef;
            var1 = var1.bind(var7)(var16);
            _closure2_slot4 = var1;
            var1['current'] = var16;
            var1 = var7.useState;
            var24 = false;
            var1 = var1.bind(var7)(var24);
            var6 = _closure1_slot5;
            var49 = 2;
            var1 = var6.bind(var5)(var1, var49);
            var39 = var1[var29];
            var1 = var1[var21];
            _closure2_slot5 = var1;
            var1 = 27;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var9 = true;
            var1['includeCustomKeyboard'] = var9;
            var1 = var3.bind(var5)(var1);
            _closure2_slot6 = var1;
            var3 = var7.useState;
            var3 = var3.bind(var7)(var1);
            var3 = var6.bind(var5)(var3, var49);
            var19 = var3[var29];
            var3 = var3[var21];
            _closure2_slot7 = var3;
            var6 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
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
case 18:
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var3 = var30 != var37;
            _closure2_slot8 = var3;
            var1 = var11.isPrivate;
            var15 = var1.bind(var11)();
            if(!var15) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var15 = !var3;
case 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 28;
            var1 = var7[var1];
            var7 = var6.bind(var5)(var1);
            var6 = var7.useTypingUserIds;
            var1 = var11.id;
            var7 = var6.bind(var7)(var1, var21);
            var1 = _closure1_slot19;
            var1 = var1.bind(var5)(var10);
            var38 = var16;
            if(!var16) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = var11.rateLimitPerUser;
            var6 = var6 > var29;
            if(var6) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var7 = var7.length;
            var6 = var7 > var29;
case 24:
            var38 = var6;
case 22:
            if(!var38) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var38 = !var1;
case 26:
            var7 = _closure1_slot0;
            var1 = _closure1_slot3;
            var6 = 29;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot14;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 19:
                    var4 = _closure1_slot14;
                    var3 = var4.getEditingTextValue;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var27 = var17.bind(var18)(var13, var9);
            _closure2_slot9 = var27;
            var9 = var1[var6];
            var18 = var7.bind(var5)(var9);
            var17 = var18.useStateFromStores;
            var9 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 19:
                    var4 = _closure1_slot10;
                    var3 = var4.getPendingReply;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var26 = var17.bind(var18)(var13, var9);
            _closure2_slot10 = var26;
            var1 = var1[var6];
            var13 = var7.bind(var5)(var1);
            var9 = var13.useStateFromStores;
            var1 = _closure1_slot16;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var4 = _closure1_slot16;
                    var3 = var4.getUploads;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot13;
                    var1 = var1.ChannelMessage;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 31:
                    return var1;
case 29:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot12;
                    var3 = var4.getDraft;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot8;
                    var5 = _closure1_slot13;
                    if(var1) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var1 = var5.ChannelMessage;
                    _fun0007_ip = 35; continue _fun0007;
case 33:
                    var1 = var5.FirstThreadMessage;
case 35:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var28 = var9.bind(var17)(var1, var7);
            if(!(var30 != var27)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var28 = var27;
case 36:
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = _closure1_slot15;
                    var6 = var7.can;
                    var2 = _closure1_slot28;
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
                    if(var2) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var11 = _closure1_slot15;
                    var7 = var11.can;
                    var3 = _closure1_slot28;
                    var4 = var3.CREATE_PRIVATE_THREADS;
                    var3 = _closure2_slot0;
                    var2 = var7.bind(var11)(var4, var3);
case 38:
                    var7 = _closure1_slot15;
                    var4 = var7.can;
                    var3 = _closure1_slot28;
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var11 = _closure2_slot0;
                    var3 = var4.bind(var7)(var3, var11);
                    var4 = var11.isPrivate;
                    var4 = var4.bind(var11)();
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 30;
                    var7 = var7[var1];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var1 = var7.computeIsReadOnlyThread;
                    var1 = var1.bind(var7)(var11);
                    var7 = _closure2_slot8;
                    if(var7) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var7 = var4;
                    if(var4) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var7 = var10;
case 42:
                    var3 = var7;
case 40:
                    var3 = !var3;
                    if(var3) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var3 = var1;
case 44:
                    var1 = {};
                    var7 = var4;
                    if(var4) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    if(!var9) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var9 = !var3;
case 48:
                    var7 = var9;
case 46:
                    if(!var7) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var9 = _closure2_slot8;
                    var7 = !var9;
case 50:
                    var1['canMentionEveryone'] = var7;
                    var7 = var4;
                    if(var4) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var7 = var8;
case 52:
                    if(!var7) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var7 = !var3;
case 54:
                    if(!var7) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var8 = _closure2_slot8;
                    var7 = !var8;
case 56:
                    var1['canUpload'] = var7;
                    if(var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var4 = var6;
case 58:
                    if(!var4) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var4 = !var3;
case 60:
                    if(!var4) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var5 = _closure2_slot8;
                    var4 = !var5;
case 62:
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
            var9 = var1.canCreateThreads;
            var17 = _closure1_slot1;
            var1 = 31;
            var1 = var18[var1];
            var1 = var17.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var40 = var1.analyticsLocations;
            var17 = var3;
            if(var17) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var17 = var30 != var27;
case 64:
            if(var17) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var18 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 30;
            var1 = var25[var1];
            var18 = var18.bind(var5)(var1);
            var1 = var18.getIsActiveChannelOrUnarchivableThread;
            var1 = var1.bind(var18)(var11);
            var17 = !var1;
case 66:
            var18 = var30 != var26;
            var25 = _closure1_slot0;
            var31 = _closure1_slot3;
            var1 = 30;
            var1 = var31[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanStartThread;
            var56 = var1.bind(var25)(var11);
            if(!var56) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var1 = _closure1_slot24;
            var31 = var1.GUILD_THREADS_ONLY;
            var25 = var31.has;
            var1 = var11.type;
            var1 = var25.bind(var31)(var1);
            var56 = !var1;
case 68:
            if(!var56) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var56 = !var3;
case 70:
            var25 = _closure1_slot0;
            var31 = _closure1_slot3;
            var1 = 32;
            var1 = var31[var1];
            var25 = var25.bind(var5)(var1);
            var1 = var25.useCanPostPollsInChannel;
            var33 = var1.bind(var25)(var11);
            if(!var33) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var33 = !var3;
case 72:
            var25 = _closure1_slot0;
            var1 = _closure1_slot3;
            var31 = var1[var12];
            var41 = var25.bind(var5)(var31);
            var36 = var41.useToken;
            var31 = _closure1_slot1;
            var35 = var1[var34];
            var35 = var31.bind(var5)(var35);
            var35 = var35.modules;
            var35 = var35.mobile;
            var35 = var35.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var48 = var36.bind(var41)(var35);
            _closure2_slot11 = var48;
            var12 = var1[var12];
            var25 = var25.bind(var5)(var12);
            var12 = var25.useToken;
            var1 = var1[var34];
            var1 = var31.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_PILL_BORDER_WIDTH;
            var47 = var12.bind(var25)(var1);
            if(var42) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var12 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 33;
            var1 = var25[var1];
            var12 = var12.bind(var5)(var1);
            var1 = var12.getChatInputMinHeight;
            var12 = var1.bind(var12)();
            _fun0002_ip = 76; continue _fun0002;
case 74:
            var1 = var49 * var47;
            var12 = var48 - var1;
case 76:
            _closure2_slot12 = var12;
            var31 = _closure1_slot0;
            var25 = _closure1_slot3;
            var1 = 34;
            var25 = var25[var1];
            var34 = var31.bind(var5)(var25);
            var31 = var34.useSharedValue;
            var25 = var12;
            if(!var16) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var25 = var48;
case 77:
            var31 = var31.bind(var34)(var25);
            _closure2_slot13 = var31;
            var34 = _closure1_slot6;
            var35 = var34.useEffect;
            var25 = new Array(4);
            var25[0] = var16;
            var25[1] = var48;
            var25[2] = var12;
            var25[3] = var31;
            var12 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var2 = var3.set;
                    var1 = _closure2_slot2;
                    if(var1) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                    var1 = _closure2_slot12;
                    _fun0009_ip = 81; continue _fun0009;
case 79:
                    var1 = _closure2_slot11;
case 81:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var35.bind(var34)(var12, var25);
            var35 = _closure1_slot0;
            var25 = _closure1_slot3;
            var12 = var25[var1];
            var36 = var35.bind(var5)(var12);
            var35 = var36.useAnimatedStyle;
            var12 = function We() {
                var1 = {};
                var3 = _closure2_slot13;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['minHeight'] = var2;
                return var1;
            };
            var41 = {};
            var41['textFieldHeight'] = var31;
            var12['__closure'] = var41;
            var41 = 11048691841625.0;
            var12['__workletHash'] = var41;
            var41 = _closure1_slot37;
            var12['__initData'] = var41;
            var43 = var35.bind(var36)(var12);
            var12 = var34.useState;
            var34 = var12.bind(var34)(var24);
            var12 = _closure1_slot5;
            var12 = var12.bind(var5)(var34, var49);
            var41 = var12[var29];
            var12 = var12[var21];
            _closure2_slot14 = var12;
            var21 = _closure1_slot1;
            var12 = 35;
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
            var45 = var35;
            if(var3) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var21 = _closure1_slot0;
            var29 = _closure1_slot3;
            var12 = 36;
            var12 = var29[var12];
            var21 = var21.bind(var5)(var12);
            var12 = var21.getIsAppLauncherEnabled;
            var45 = var12.bind(var21)(var11);
case 82:
            var12 = _closure1_slot0;
            var29 = _closure1_slot3;
            var6 = var29[var6];
            var34 = var12.bind(var5)(var6);
            var21 = var34.useStateFromStores;
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
            var55 = var21.bind(var34)(var12, var6);
            var6 = _closure1_slot1;
            var12 = 37;
            var12 = var29[var12];
            var21 = var6.bind(var5)(var12);
            var12 = {};
            var12['channel'] = var11;
            var34 = !var7;
            var12['isReadonly'] = var34;
            var12['isCreatingThread'] = var3;
            var12 = var21.bind(var5)(var12);
            var54 = var12.placeholder;
            var52 = var12.accessibilityLabel;
            var12 = 38;
            var12 = var29[var12];
            var21 = var6.bind(var5)(var12);
            var12 = {};
            var34 = {};
            var34['analyticsLocations'] = var40;
            var34['canUpload'] = var20;
            var34['channel'] = var11;
            var34['defaultValue'] = var28;
            var34['hasAttachmentsToUpload'] = var13;
            var34['pendingEdit'] = var27;
            var34['pendingReply'] = var26;
            var34['screenIndex'] = var10;
            var34['secondaryTextFieldRef'] = var57;
            var34['threadCreationCallback'] = var37;
            var12['chatInputProps'] = var34;
            var12['chatInputTextFieldHeight'] = var31;
            var31 = arg2;
            var12['ref'] = var31;
            var37 = var21.bind(var5)(var12);
            _closure2_slot15 = var37;
            var31 = _closure1_slot6;
            var34 = var31.useEffect;
            var21 = new Array(1);
            var21[0] = var37;
            var12 = function() {
                var2 = _closure2_slot15;
                var2 = var2.props;
                var2 = var2.current;
                var3 = var2.defaultValue;
                var1 = _closure2_slot15;
                var1 = var1.chatInput;
                var2 = var1.current;
                var1 = var2.setText;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var12 = var34.bind(var31)(var12, var21);
            var34 = var31.useEffect;
            var21 = new Array(4);
            var21[0] = var37;
            var21[1] = var11;
            var21[2] = var27;
            var21[3] = var26;
            var12 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var2 = var2.propsPrev;
                    var2 = var2.current;
                    var4 = var2.pendingEdit;
                    var3 = var2.pendingReply;
                    var2 = null;
                    var3 = var2 == var3;
                    if(!var3) { _fun0010_ip = 84; continue _fun0010 }
case 28:
                    var5 = _closure2_slot10;
                    var3 = var2 != var5;
case 84:
                    if(var3) { _fun0010_ip = 31; continue _fun0010 }
case 35:
                    var5 = var2 == var4;
                    if(!var5) { _fun0010_ip = 85; continue _fun0010 }
case 32:
                    var6 = _closure2_slot9;
                    var5 = var2 != var6;
case 85:
                    var3 = var5;
case 31:
                    if(!var3) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var3 = _closure2_slot15;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 86; continue _fun0010 }
case 88:
                    var3 = var5.focus;
                    var3 = var3.bind(var5)();
case 86:
                    var3 = _closure2_slot15;
                    var3 = var3.propsPrev;
                    var3 = var3.current;
                    var3 = var3.channel;
                    var5 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    if(!(var5 !== var3)) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 39;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if(!(var5 === var3)) { _fun0010_ip = 91; continue _fun0010 }
case 89:
                    var3 = _closure2_slot9;
                    if(!(var4 !== var3)) { _fun0010_ip = 92; continue _fun0010 }
case 93:
                    var3 = _closure2_slot15;
                    var3 = var3.chatInput;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0010_ip = 92; continue _fun0010 }
case 4:
                    var4 = var5.setText;
                    var3 = _closure2_slot9;
                    var6 = var2 != var3;
                    var3 = '';
                    if(!var6) { _fun0010_ip = 94; continue _fun0010 }
case 41:
                    var3 = _closure2_slot9;
case 94:
                    var3 = var4.bind(var5)(var3);
                    _fun0010_ip = 92; continue _fun0010;
case 91:
                    var3 = _closure2_slot15;
                    var3 = var3.chatInput;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0010_ip = 92; continue _fun0010 }
case 95:
                    var2 = var3.setText;
                    var1 = _closure2_slot15;
                    var1 = var1.props;
                    var1 = var1.current;
                    var1 = var1.defaultValue;
                    var1 = var2.bind(var3)(var1);
case 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var34.bind(var31)(var12, var21);
            var34 = var31.useEffect;
            var21 = new Array(1);
            var21[0] = var37;
            var12 = function() {
                var5 = function handleOpenKeyboard(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var4) { _fun0011_ip = 96; continue _fun0011 }
case 97:
                        var5 = var3.channelId;
case 96:
                        var4 = _closure2_slot15;
                        var4 = var4.props;
                        var6 = var4.current;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if(var7) { _fun0011_ip = 32; continue _fun0011 }
case 84:
                        var6 = var6.channel;
                        var4 = var6.id;
case 32:
                        if(!(var5 === var4)) { _fun0011_ip = 88; continue _fun0011 }
case 98:
                        var3 = _closure2_slot15;
                        var3 = var3.chatInput;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0011_ip = 88; continue _fun0011 }
case 3:
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 88:
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 40;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var4);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = _closure1_slot26;
                var2 = var2.TEXTAREA_FOCUS;
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 40;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot26;
                    var3 = var2.TEXTAREA_FOCUS;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var12 = var34.bind(var31)(var12, var21);
            var34 = var31.useMemo;
            var21 = new Array(1);
            var21[0] = var37;
            var12 = function() {
                var1 = {};
                var3 = function handleBlur(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var5 = var1.text;
                        var2 = _closure2_slot16;
                        var1 = var2.handleTextOrFocusChange;
                        var8 = false;
                        var1 = var1.bind(var2)(var5, var8);
                        var1 = _closure2_slot15;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1['focused'] = var8;
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputCover;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                        var4 = var6.focused;
                        var4 = var4.bind(var6)(var8);
case 99:
                        var4 = _closure2_slot15;
                        var4 = var4.chatInputAppCommandManager;
                        var6 = var4.current;
                        if(!(var2 != var6)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                        var4 = var6.updateState;
                        var4 = var4.bind(var6)();
case 101:
                        var4 = _closure2_slot15;
                        var4 = var4.chatInputAutocomplete;
                        var7 = var4.current;
                        if(!(var2 != var7)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                        var6 = var7.setData;
                        var4 = {};
                        var4['focused'] = var8;
                        var4['text'] = var5;
                        var8 = _closure2_slot15;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionStart;
                        var4['selectionStart'] = var8;
                        var8 = _closure2_slot15;
                        var8 = var8.state;
                        var8 = var8.current;
                        var8 = var8.selectionEnd;
                        var4['selectionEnd'] = var8;
                        var4 = var6.bind(var7)(var4);
case 103:
                        var3 = _closure2_slot15;
                        var3 = var3.chatInputSendButton;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0012_ip = 50; continue _fun0012 }
case 105:
                        var3 = var4.setHasText;
                        var2 = var5.trim;
                        var2 = var2.bind(var5)();
                        var5 = var2.length;
                        var2 = 0;
                        var2 = var5 > var2;
                        var2 = var3.bind(var4)(var2);
case 50:
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
                        var1 = _closure2_slot15;
                        var1 = var1.state;
                        var1 = var1.current;
                        var8 = true;
                        var1['focused'] = var8;
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var8);
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var6;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var5;
                        var4 = _closure2_slot16;
                        var3 = var4.handleTextOrFocusChange;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.text;
                        var2 = var3.bind(var4)(var2, var8);
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputAppCommandManager;
                        var4 = var2.current;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0013_ip = 106; continue _fun0013 }
case 107:
                        var3 = var4.updateState;
                        var3 = var3.bind(var4)();
case 106:
                        var3 = _closure2_slot15;
                        var3 = var3.chatInputCover;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 108; continue _fun0013 }
case 109:
                        var3 = var4.focused;
                        var3 = var3.bind(var4)(var8);
case 108:
                        var3 = _closure2_slot15;
                        var3 = var3.chatInputAutocomplete;
                        var4 = var3.current;
                        if(!(var2 != var4)) { _fun0013_ip = 110; continue _fun0013 }
case 6:
                        var3 = var4.setData;
                        var2 = {};
                        var2['focused'] = var8;
                        var7 = _closure2_slot15;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.text;
                        var2['text'] = var7;
                        var2['selectionStart'] = var6;
                        var2['selectionEnd'] = var5;
                        var2 = var3.bind(var4)(var2);
case 110:
                        return var1;
                    }
                };
                var1['handleFocus'] = var3;
                var3 = function handleChangeContentSize(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.height;
                    var2 = _closure2_slot15;
                    var2 = var2.state;
                    var2 = var2.current;
                    var2['textFieldContentSize'] = var6;
                    var1 = _closure2_slot15;
                    var1 = var1.state;
                    var1 = var1.current;
                    var4 = var1.textFieldHeight;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 33;
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
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputAutocomplete;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 111; continue _fun0014 }
case 112:
                        var2 = var3.setChatInputHeight;
                        var1 = var1.layout;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
case 111:
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
                        if(!var1) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                        var1 = var2 !== var4;
case 113:
                        if(!var1) { _fun0015_ip = 115; continue _fun0015 }
case 116:
                        var2 = _closure2_slot15;
                        var2 = var2.props;
                        var2 = var2.current;
                        var4 = var2.threadCreationCallback;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0015_ip = 115; continue _fun0015 }
case 29:
                        var1 = _closure2_slot15;
                        var1 = var1.chatInput;
                        var2 = var1.current;
                        var1 = var2.updateChatInputContainerHeightDebounced;
                        var1 = var1.bind(var2)(var3);
case 115:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLayout'] = var3;
                var3 = function handleMaxHeightChanged() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var5 = var2.textFieldContentSize;
                        var2 = 0;
                        if(!(var2 !== var5)) { _fun0016_ip = 117; continue _fun0016 }
case 81:
                        var1 = _closure2_slot15;
                        var1 = var1.state;
                        var1 = var1.current;
                        var3 = var1.textFieldHeight;
                        var2 = var3.set;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 33;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var1 = var4.getChatInputHeightAnimationTiming;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
case 117:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMaxHeightChanged'] = var3;
                var3 = function handleChangeAutoCompleteVisibility(arg1) {
                    var4 = _closure1_slot18;
                    var1 = _closure2_slot15;
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
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        if(!var2) { _fun0017_ip = 118; continue _fun0017 }
case 119:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var6 = null;
                        var2 = var6 == var7;
                        var3 = var7;
                        if(var2) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                        var5 = var7.getApplicationCommandManager;
                        var5 = var5.bind(var7)();
                        var2 = var6 == var5;
                        var3 = var5;
case 120:
                        if(var2) { _fun0017_ip = 118; continue _fun0017 }
case 100:
                        var2 = var3.setPastedCommand;
                        var1 = _closure2_slot15;
                        var1 = var1.props;
                        var1 = var1.current;
                        var1 = var1.channel;
                        var1 = var2.bind(var3)(var4, var1);
case 118:
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
                            if(var2) { _fun0018_ip = 122; continue _fun0018 }
case 30:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var11 = var2.url;
                            var7 = var2.width;
                            var6 = var2.height;
                            var10 = var2.type;
                            var4 = undefined;
                            SaveGenerator(address=45);
case 123:
                            return var4;
case 124:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                            var3 = _closure2_slot15;
                            var3 = var3.state;
                            var3 = var3.current;
                            var3 = var3.focused;
                            if(!var3) { _fun0018_ip = 127; continue _fun0018 }
case 128:
                            var3 = _closure2_slot15;
                            var3 = var3.props;
                            var3 = var3.current;
                            var3 = var3.canUpload;
                            if(!var3) { _fun0018_ip = 127; continue _fun0018 }
case 129:
                            var5 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var3 = 41;
                            var3 = var12[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getImageDimensionsIfMissing;
                            var3 = var3.bind(var5)(var11, var7, var6);
                            SaveGenerator(address=149);
case 130:
                            return var3;
case 131:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0018_ip = 132; continue _fun0018 }
case 133:
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 42;
                            var5 = var12[var5];
                            var7 = var6.bind(var4)(var5);
                            var6 = var7.addFile;
                            var5 = {};
                            var9 = _closure2_slot15;
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
                            var10 = 43;
                            var10 = var12[var10];
                            var10 = var11.bind(var4)(var10);
                            var10 = var10.UploadPlatform;
                            var10 = var10.REACT_NATIVE;
                            var9['platform'] = var10;
                            var10 = 44;
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
case 127:
                            return var4;
case 132:
                            return var3;
case 125:
                            return var2;
case 122:
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
                        var1 = _closure1_slot22;
                        var1 = var1.PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 134; continue _fun0019 }
case 135:
                        var1 = _closure1_slot22;
                        var1 = var1.APPS;
                        if(!(var1 !== var2)) { _fun0019_ip = 136; continue _fun0019 }
case 124:
                        var1 = _closure1_slot22;
                        var1 = var1.ALL_PHOTOS;
                        if(!(var1 !== var2)) { _fun0019_ip = 137; continue _fun0019 }
case 138:
                        var1 = _closure1_slot22;
                        var1 = var1.NITRO_GIFT;
                        if(!(var1 !== var2)) { _fun0019_ip = 139; continue _fun0019 }
case 140:
                        var1 = _closure1_slot22;
                        var1 = var1.THREAD;
                        if(!(var1 === var2)) { _fun0019_ip = 141; continue _fun0019 }
case 115:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 45;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 52;
                        var1 = var7[var1];
                        var7 = var3.bind(var2)(var1);
                        var3 = var7.handleSelectThread;
                        var2 = _closure2_slot15;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var1 = _closure2_slot15;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1);
                        _fun0019_ip = 141; continue _fun0019;
case 139:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 54;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.markPotentialBadState;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 45;
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
                        if(!var1) { _fun0019_ip = 142; continue _fun0019 }
case 60:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 53;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
case 142:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 52;
                        var1 = var7[var1];
                        var7 = var2.bind(var3)(var1);
                        var3 = var7.handleSelectGift;
                        var2 = _closure2_slot15;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.analyticsLocations;
                        var1 = _closure2_slot15;
                        var1 = var1.chatInput;
                        var1 = var3.bind(var7)(var2, var1, var5);
                        _fun0019_ip = 141; continue _fun0019;
case 137:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 45;
                        var8 = var7[var1];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var8);
                        var8 = var9.triggerHapticFeedback;
                        var1 = var7[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var8.bind(var9)(var1);
                        var1 = 52;
                        var1 = var7[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var7 = _closure2_slot15;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var1['channel'] = var7;
                        var7 = _closure1_slot27;
                        var1['uploadLimit'] = var7;
                        var7 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 53;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var7;
                        var7 = function onRestoreKeyboard() {
                            var3 = _closure2_slot16;
                            var2 = var3.handleToggleKeyboard;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 47;
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
                            var1 = 52;
                            var2 = var7[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.addImagesFromPicker;
                            var2 = _closure2_slot15;
                            var2 = var2.props;
                            var2 = var2.current;
                            var2 = var2.channel;
                            var4 = var2.id;
                            var2 = 43;
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
                        _fun0019_ip = 141; continue _fun0019;
case 136:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 45;
                        var7 = var3[var1];
                        var6 = undefined;
                        var8 = var2.bind(var6)(var7);
                        var7 = var8.triggerHapticFeedback;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var7.bind(var8)(var1);
                        var1 = 48;
                        var1 = var3[var1];
                        var9 = var2.bind(var6)(var1);
                        var8 = var9.trackWithMetadata;
                        var1 = _closure1_slot23;
                        var7 = var1.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED;
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var7 = 46;
                        var7 = var3[var7];
                        var10 = var8.bind(var6)(var7);
                        var9 = var10.track;
                        var8 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var1 = {};
                        var7 = _closure1_slot25;
                        var7 = var7.APPS_BUTTON;
                        var1['type'] = var7;
                        var11 = _closure2_slot15;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.id;
                        var1['channel_id'] = var11;
                        var11 = _closure2_slot15;
                        var11 = var11.props;
                        var11 = var11.current;
                        var11 = var11.channel;
                        var11 = var11.guild_id;
                        var1['guild_id'] = var11;
                        var1 = var9.bind(var10)(var8, var1);
                        var8 = _closure1_slot2;
                        var1 = 49;
                        var1 = var3[var1];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.dismissNewActivityIndicator;
                        var1 = var1.bind(var8)();
                        var1 = 50;
                        var1 = var3[var1];
                        var3 = var2.bind(var6)(var1);
                        var2 = var3.setAppLauncherA11yFocusReturnRef;
                        var8 = null;
                        var9 = var8 != var5;
                        var1 = null;
                        if(!var9) { _fun0019_ip = 143; continue _fun0019 }
case 144:
                        var1 = var5;
case 143:
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure2_slot16;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var5 = 47;
                        var5 = var11[var5];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.KeyboardTypes;
                        var5 = var5.APP_LAUNCHER;
                        var1['type'] = var5;
                        var5 = {};
                        var9 = _closure1_slot29;
                        var9 = var9.HOME;
                        var5['initialRouteName'] = var9;
                        var9 = 51;
                        var9 = var11[var9];
                        var10 = var10.bind(var6)(var9);
                        var9 = var10.getAppDMApplication;
                        var7 = _closure2_slot15;
                        var7 = var7.props;
                        var7 = var7.current;
                        var7 = var7.channel;
                        var7 = var9.bind(var10)(var7);
                        var8 = var8 == var7;
                        var6 = undefined;
                        if(var8) { _fun0019_ip = 145; continue _fun0019 }
case 146:
                        var6 = var7.name;
case 145:
                        var5['initialSearchQuery'] = var6;
                        var1['context'] = var5;
                        var1 = var2.bind(var3)(var1);
                        _fun0019_ip = 141; continue _fun0019;
case 134:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 45;
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
                        var1 = 46;
                        var1 = var3[var1];
                        var7 = var2.bind(var6)(var1);
                        var5 = var7.track;
                        var1 = _closure1_slot23;
                        var3 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                        var2 = {};
                        var1 = _closure1_slot25;
                        var1 = var1.ADD_BUTTON;
                        var2['type'] = var1;
                        var8 = _closure2_slot15;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.id;
                        var2['channel_id'] = var8;
                        var8 = _closure2_slot15;
                        var8 = var8.props;
                        var8 = var8.current;
                        var8 = var8.channel;
                        var8 = var8.guild_id;
                        var2['guild_id'] = var8;
                        var2 = var5.bind(var7)(var3, var2);
                        var2 = _closure2_slot4;
                        var2 = var2.current;
                        if(!var2) { _fun0019_ip = 147; continue _fun0019 }
case 148:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 35;
                        var3 = var2[var3];
                        var7 = var5.bind(var6)(var3);
                        var3 = var7.getKeyboardType;
                        var3 = var3.bind(var7)();
                        var7 = 47;
                        var2 = var2[var7];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.APP_LAUNCHER;
                        if(!(var3 !== var2)) { _fun0019_ip = 149; continue _fun0019 }
case 147:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 35;
                        var3 = var2[var3];
                        var8 = var5.bind(var6)(var3);
                        var3 = var8.getKeyboardType;
                        var3 = var3.bind(var8)();
                        var10 = 47;
                        var2 = var2[var10];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.MEDIA;
                        if(!(var3 === var2)) { _fun0019_ip = 150; continue _fun0019 }
case 151:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputActions;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0019_ip = 150; continue _fun0019 }
case 152:
                        var2 = var3.focusPhotosButton;
                        var2 = var2.bind(var3)();
case 150:
                        var5 = _closure2_slot16;
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
                        var9 = _closure1_slot31;
                        var9 = var9.CHAT;
                        var8['target'] = var9;
                        var2['context'] = var8;
                        var2 = var3.bind(var5)(var2);
                        _fun0019_ip = 141; continue _fun0019;
case 149:
                        var3 = _closure2_slot16;
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
case 141:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressAction'] = var3;
                var3 = function handlePollsPress() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 45;
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
                    var2 = 46;
                    var2 = var4[var2];
                    var8 = var6.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot23;
                    var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var5 = _closure1_slot25;
                    var5 = var5.POLLS;
                    var2['type'] = var5;
                    var9 = _closure2_slot15;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.id;
                    var2['channel_id'] = var9;
                    var9 = _closure2_slot15;
                    var9 = var9.props;
                    var9 = var9.current;
                    var9 = var9.channel;
                    var9 = var9.guild_id;
                    var2['guild_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 53;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.dismissKeyboard;
                    var2 = var2.bind(var6)();
                    var2 = 55;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCreatePollModal;
                    var2 = {};
                    var5 = _closure2_slot15;
                    var5 = var5.props;
                    var5 = var5.current;
                    var5 = var5.channel;
                    var2['channel'] = var5;
                    var5 = function onCancel() {
                        var3 = _closure2_slot16;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 47;
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
                    var2 = 45;
                    var7 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var7);
                    var7 = var8.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var7.bind(var8)(var2);
                    var2 = 52;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var7 = _closure2_slot15;
                    var7 = var7.props;
                    var7 = var7.current;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var6 = _closure1_slot27;
                    var2['uploadLimit'] = var6;
                    var6 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 53;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2['onDismissKeyboard'] = var6;
                    var6 = function onRestoreKeyboard() {
                        var3 = _closure2_slot16;
                        var2 = var3.handleToggleKeyboard;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 47;
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
                        var1 = 52;
                        var2 = var7[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.addImagesFromPicker;
                        var2 = _closure2_slot15;
                        var2 = var2.props;
                        var2 = var2.current;
                        var2 = var2.channel;
                        var4 = var2.id;
                        var2 = 43;
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
                    var1 = 56;
                    var3 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var3);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot30;
                    var2 = var2.ChatInputExpressionPressed;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot16;
                    var3 = var4.handleToggleKeyboard;
                    var2 = {};
                    var5 = 47;
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
                    var1 = _closure2_slot15;
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
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var4 = var2.editId;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['editId'] = var5;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionStart'] = var10;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2['selectionEnd'] = var9;
                        var7 = _closure2_slot16;
                        var6 = var7.handleTextOrFocusChange;
                        var2 = _closure2_slot15;
                        var2 = var2.state;
                        var2 = var2.current;
                        var2 = var2.focused;
                        var2 = var6.bind(var7)(var1, var2);
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputAppCommandManager;
                        var7 = var2.current;
                        var2 = null;
                        if(!(var2 != var7)) { _fun0020_ip = 109; continue _fun0020 }
case 153:
                        var6 = var7.updateState;
                        var6 = var6.bind(var7)();
case 109:
                        var6 = _closure2_slot15;
                        var6 = var6.chatInputAutocomplete;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 95; continue _fun0020 }
case 154:
                        var7 = var8.setData;
                        var6 = {};
                        var11 = _closure2_slot15;
                        var11 = var11.state;
                        var11 = var11.current;
                        var11 = var11.focused;
                        var6['focused'] = var11;
                        var6['text'] = var1;
                        var6['selectionStart'] = var10;
                        var6['selectionEnd'] = var9;
                        var6 = var7.bind(var8)(var6);
case 95:
                        var6 = _closure2_slot15;
                        var6 = var6.chatInputSendButton;
                        var8 = var6.current;
                        if(!(var2 != var8)) { _fun0020_ip = 155; continue _fun0020 }
case 156:
                        var7 = var8.setHasText;
                        var6 = var1.trim;
                        var6 = var6.bind(var1)();
                        var9 = var6.length;
                        var6 = 0;
                        var6 = var9 > var6;
                        var6 = var7.bind(var8)(var6);
case 155:
                        if(!(var4 !== var5)) { _fun0020_ip = 16; continue _fun0020 }
case 13:
                        var4 = _closure2_slot15;
                        var4 = var4.chatInput;
                        var5 = var4.current;
                        var4 = var5.handleTextChanged;
                        var4 = var4.bind(var5)(var1);
                        var3 = _closure2_slot15;
                        var3 = var3.chatInputCharCounter;
                        var3 = var3.current;
                        if(!(var2 != var3)) { _fun0020_ip = 157; continue _fun0020 }
case 158:
                        var2 = var3.onMessageLengthChanged;
                        var1 = var1.length;
                        var1 = var2.bind(var3)(var1);
case 157:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 57;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideContextMenu;
                        var1 = var1.bind(var2)();
case 16:
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
                        if(!(var1 === var3)) { _fun0021_ip = 159; continue _fun0021 }
case 112:
                        var1 = _closure2_slot15;
                        var1 = var1.chatInput;
                        var3 = var1.current;
                        var1 = var3.blur;
                        var1 = var1.bind(var3)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 58;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openCommandAttachmentPreview;
                        var3 = _closure2_slot15;
                        var3 = var3.chatInput;
                        var4 = var3.current;
                        var3 = var4.getApplicationCommandManager;
                        var4 = var3.bind(var4)();
                        var3 = var2.channelId;
                        var2 = var2.optionName;
                        var7 = _closure2_slot15;
                        var7 = var7.state;
                        var7 = var7.current;
                        var7 = var7.focused;
                        if(!var7) { _fun0021_ip = 160; continue _fun0021 }
case 107:
                        var1 = function() {
                            var1 = _closure2_slot15;
                            var1 = var1.chatInput;
                            var2 = var1.current;
                            var1 = var2.openSystemKeyboard;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
case 160:
                        var12 = var6;
                        var11 = var4;
                        var10 = var3;
                        var9 = var2;
                        var8 = var1;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 159:
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
                        if(!(var1 > var2)) { _fun0022_ip = 32; continue _fun0022 }
case 161:
                        if(var4) { _fun0022_ip = 162; continue _fun0022 }
case 163:
                        var5 = var3.length;
                        var1 = _closure2_slot15;
                        var1 = var1.state;
                        var1 = var1.current;
                        var1 = var1.textPrev;
                        var1 = var1.length;
                        if(!(!(var5 > var1))) { _fun0022_ip = 162; continue _fun0022 }
case 32:
                        var1 = var3.length;
                        if(!(var2 === var1)) { _fun0022_ip = 48; continue _fun0022 }
case 164:
                        var1 = _closure2_slot15;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 165; continue _fun0022 }
case 166:
                        var5 = var6.onShowActions;
                        var5 = var5.bind(var6)(var4);
case 165:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 48; continue _fun0022 }
case 167:
                        var1 = var2.onShowActions;
                        var1 = var1.bind(var2)(var4);
                        _fun0022_ip = 48; continue _fun0022;
case 162:
                        var5 = _closure1_slot9;
                        var2 = var5.isOpen;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0022_ip = 108; continue _fun0022 }
case 168:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 59;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.hideNativeMenu;
                        var1 = var1.bind(var2)();
case 108:
                        var1 = _closure2_slot15;
                        var1 = var1.chatInputActions;
                        var6 = var1.current;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0022_ip = 169; continue _fun0022 }
case 170:
                        var5 = var6.onDismissActions;
                        var5 = var5.bind(var6)(var4);
case 169:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInputRightActions;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0022_ip = 48; continue _fun0022 }
case 171:
                        var1 = var2.onDismissActions;
                        var1 = var1.bind(var2)(var4);
case 48:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 60;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getMaxMessageLength;
                        var7 = var2.bind(var5)();
                        var5 = _closure2_slot15;
                        var5 = var5.state;
                        var5 = var5.current;
                        var5 = var5.textPrev;
                        var5 = var5.length;
                        var5 = var5 <= var7;
                        if(!var5) { _fun0022_ip = 132; continue _fun0022 }
case 62:
                        var6 = var3.length;
                        var5 = var6 > var7;
case 132:
                        if(!var5) { _fun0022_ip = 172; continue _fun0022 }
case 125:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 46;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot23;
                        var5 = var4.MESSAGE_LENGTH_LIMIT_REACHED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
case 172:
                        var4 = _closure2_slot15;
                        var4 = var4.state;
                        var5 = var4.current;
                        var4 = _closure2_slot15;
                        var4 = var4.state;
                        var4 = var4.current;
                        var4 = var4.text;
                        var5['textPrev'] = var4;
                        var2 = _closure2_slot15;
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
                        var1 = _closure2_slot15;
                        var1 = var1.chatInputTextFlushedResponses;
                        var2 = var1.current;
                        var1 = var2.get;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if(!(var1 != var2)) { _fun0023_ip = 98; continue _fun0023 }
case 126:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 98:
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
                        if(!var1) { _fun0024_ip = 111; continue _fun0024 }
case 173:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 59;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.hideNativeMenu;
                        var1 = var1.bind(var3)();
case 111:
                        var5 = var4.type;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 47;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        if(!(var5 !== var3)) { _fun0024_ip = 174; continue _fun0024 }
case 99:
                        var3 = var4.type;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 35;
                        var2 = var6[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.getKeyboardType;
                        var2 = var2.bind(var5)();
                        if(!(var3 !== var2)) { _fun0024_ip = 174; continue _fun0024 }
case 175:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openCustomKeyboard;
                        var2 = var2.bind(var3)(var4);
                        _fun0024_ip = 176; continue _fun0024;
case 174:
                        var2 = _closure2_slot15;
                        var2 = var2.chatInput;
                        var3 = var2.current;
                        var2 = var3.openSystemKeyboard;
                        var2 = var2.bind(var3)();
case 176:
                        return var1;
                    }
                };
                var1['handleToggleKeyboard'] = var2;
                return var1;
            };
            var34 = var34.bind(var31)(var12, var21);
            _closure2_slot16 = var34;
            var21 = var31.useCallback;
            var12 = new Array(4);
            var12[0] = var16;
            var12[1] = var3;
            var12[2] = var10;
            var12[3] = var37;
            var4 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = var1.width;
                    var2 = 0;
                    var1 = var2 !== var3;
                    if(!var1) { _fun0025_ip = 113; continue _fun0025 }
case 114:
                    var1 = var2 !== var4;
case 113:
                    if(!var1) { _fun0025_ip = 177; continue _fun0025 }
case 116:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0025_ip = 177; continue _fun0025 }
case 18:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0025_ip = 178; continue _fun0025 }
case 179:
                    var4 = _closure1_slot17;
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot14;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
case 178:
                    var1 = _closure2_slot15;
                    var1 = var1.chatInput;
                    var2 = var1.current;
                    var1 = var2.updateChatInputContainerHeightDebounced;
                    var1 = var1.bind(var2)(var3);
case 177:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var21.bind(var31)(var4, var12);
            var21 = _closure1_slot32;
            var4 = 61;
            var4 = var29[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['canUpload'] = var20;
            var29 = var11.id;
            var4['channelId'] = var29;
            var4['screenIndex'] = var10;
            var21 = var21.bind(var5)(var6, var4);
            var31 = null;
            if(!var7) { _fun0002_ip = 180; continue _fun0002 }
case 181:
            var29 = _closure1_slot32;
            var6 = _closure1_slot1;
            var57 = _closure1_slot3;
            var4 = 62;
            var4 = var57[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var57 = var37.chatInputActions;
            var4['ref'] = var57;
            var4['channel'] = var11;
            var57 = var34.handlePressAction;
            var4['onPressAction'] = var57;
            var4['canStartThreads'] = var56;
            var4['isAppLauncherEnabled'] = var45;
            var4['keyboardType'] = var36;
            var45 = var20;
            if(!var20) { _fun0002_ip = 182; continue _fun0002 }
case 183:
            var45 = var30 == var55;
case 182:
            if(var45) { _fun0002_ip = 184; continue _fun0002 }
case 185:
            var45 = var33;
case 184:
            var45 = !var45;
            var4['shouldPhotosButtonBeDisabled'] = var45;
            var4['canUpload'] = var20;
            var45 = var35;
            if(var3) { _fun0002_ip = 186; continue _fun0002 }
case 187:
            var56 = _closure1_slot0;
            var57 = _closure1_slot3;
            var55 = 63;
            var55 = var57[var55];
            var56 = var56.bind(var5)(var55);
            var55 = var56.isPremiumGiftingSupported;
            var45 = var55.bind(var56)();
case 186:
            var4['shouldShowGiftButton'] = var45;
            var4['canPostPolls'] = var33;
            var33 = var34.handlePollsPress;
            var4['onPollsPress'] = var33;
            var33 = var34.handleAttachPress;
            var4['onAttachPress'] = var33;
            var31 = var29.bind(var5)(var6, var4);
case 180:
            var6 = _closure1_slot33;
            var33 = _closure1_slot1;
            var45 = _closure1_slot3;
            var1 = var45[var1];
            var1 = var33.bind(var5)(var1);
            var4 = var1.View;
            var1 = {};
            var55 = var32.inputDefault;
            var29 = new Array(2);
            var29[0] = var55;
            var29[1] = var43;
            var1['style'] = var29;
            var43 = _closure1_slot32;
            var29 = 64;
            var29 = var45[var29];
            var33 = var33.bind(var5)(var29);
            var29 = {};
            var29['accessibilityLabel'] = var52;
            var52 = _closure1_slot0;
            var55 = 65;
            var55 = var45[var55];
            var55 = var52.bind(var5)(var55);
            var55 = var55.PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE;
            var29['customKeyboard'] = var55;
            var29['editable'] = var7;
            var55 = var34.handleFocus;
            var29['onBeginFocus'] = var55;
            var55 = var34.handleBlur;
            var29['onEndBlur'] = var55;
            var55 = var34.handleChangeContentSize;
            var29['onChangeContentSize'] = var55;
            var55 = var34.handleMaxHeightChanged;
            var29['onMaxHeightChanged'] = var55;
            var55 = var34.handleSelectionOrTextChange;
            var29['onSelectionOrTextChange'] = var55;
            var55 = var34.handleTextFlushed;
            var29['onTextFlushed'] = var55;
            var55 = var34.handlePasteImage;
            var29['onPasteImage'] = var55;
            var55 = var34.handlePasteCommand;
            var29['onPasteCommand'] = var55;
            var55 = var34.handleTapAction;
            var29['onTapAction'] = var55;
            var55 = var34.handlePressSend;
            var29['onRequestSend'] = var55;
            var29['placeholder'] = var54;
            var54 = var37.chatInputNative;
            var29['ref'] = var54;
            var29['setNoExtractUI'] = var53;
            var53 = 47;
            var45 = var45[var53];
            var45 = var52.bind(var5)(var45);
            var45 = var45.KeyboardTypes;
            var45 = var45.MEDIA;
            var45 = var36 !== var45;
            var29['shouldShowCursor'] = var45;
            var45 = 8;
            if(!var42) { _fun0002_ip = 188; continue _fun0002 }
case 189:
            var45 = 5;
case 188:
            var29['verticalInset'] = var45;
            var33 = var43.bind(var5)(var33, var29);
            var29 = new Array(2);
            var29[0] = var33;
            var45 = _closure1_slot32;
            var43 = _closure1_slot1;
            var52 = _closure1_slot3;
            var33 = 66;
            var33 = var52[var33];
            var43 = var43.bind(var5)(var33);
            var33 = {};
            var33['keyboardType'] = var36;
            var52 = var34.handleToggleKeyboard;
            var33['onSelectKeyboard'] = var52;
            var52 = var37.chatInputCover;
            var33['ref'] = var52;
            var33 = var45.bind(var5)(var43, var33);
            var29[1] = var33;
            var1['children'] = var29;
            var33 = var6.bind(var5)(var4, var1);
            if(var7) { _fun0002_ip = 190; continue _fun0002 }
case 191:
            var29 = null;
            if(!var3) { _fun0002_ip = 192; continue _fun0002 }
case 190:
            var6 = _closure1_slot32;
            var4 = _closure1_slot1;
            var43 = _closure1_slot3;
            var1 = 67;
            var1 = var43[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var43 = var37.chatInputSendButton;
            var1['ref'] = var43;
            var1['canSendVoiceMessage'] = var23;
            var1['channel'] = var11;
            var1['defaultValue'] = var28;
            if(!var13) { _fun0002_ip = 193; continue _fun0002 }
case 194:
            var13 = var20;
case 193:
            var1['hasPendingAttachments'] = var13;
            var13 = var30 != var27;
            var1['hasPendingEdit'] = var13;
            var13 = var34.handlePressSend;
            var1['onSendMessage'] = var13;
            var1['requireTextContent'] = var35;
            var29 = var6.bind(var5)(var4, var1);
case 192:
            var6 = _closure1_slot33;
            var4 = _closure1_slot7;
            var1 = {};
            var1['collapsable'] = var24;
            var1['onLayout'] = var12;
            var13 = _closure1_slot1;
            var20 = _closure1_slot3;
            var12 = 68;
            var12 = var20[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['isCreatingThread'] = var3;
            var20 = var16;
            if(!var16) { _fun0002_ip = 195; continue _fun0002 }
case 196:
            var43 = _closure1_slot0;
            var45 = _closure1_slot3;
            var23 = 21;
            var23 = var45[var23];
            var43 = var43.bind(var5)(var23);
            var23 = var43.isAndroid;
            var23 = var23.bind(var43)();
            var23 = !var23;
            if(var23) { _fun0002_ip = 197; continue _fun0002 }
case 198:
            var23 = var41;
case 197:
            var20 = var23;
case 195:
            var12['isFloatingRefresh'] = var20;
            var13 = var13.bind(var5)(var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0002_ip = 199; continue _fun0002 }
case 200:
            var13 = var32.overflowVisible;
case 199:
            var12[1] = var13;
            var1['style'] = var12;
            var13 = var16;
            if(!var16) { _fun0002_ip = 201; continue _fun0002 }
case 202:
            var13 = !var38;
case 201:
            if(!var13) { _fun0002_ip = 203; continue _fun0002 }
case 204:
            var23 = _closure1_slot33;
            var20 = _closure1_slot7;
            var12 = {};
            var43 = var32.floatingScrimFill;
            var41 = new Array(2);
            var41[0] = var43;
            var43 = {};
            var44 = -var44;
            var43['top'] = var44;
            var41[1] = var43;
            var12['style'] = var41;
            var41 = 'none';
            var12['pointerEvents'] = var41;
            var44 = _closure1_slot32;
            var43 = _closure1_slot1;
            var45 = _closure1_slot3;
            var41 = 69;
            var41 = var45[var41];
            var43 = var43.bind(var5)(var41);
            var41 = {};
            var45 = new Array(2);
            var45[0] = var50;
            var45[1] = var46;
            var41['colors'] = var45;
            var45 = var32.floatingScrimGradient;
            var41['style'] = var45;
            var45 = {'x': 0, 'y': 0};
            var41['start'] = var45;
            var45 = {'x': 0, 'y': 1};
            var41['end'] = var45;
            var45 = [0, 1];
            var41['locations'] = var45;
            var43 = var44.bind(var5)(var43, var41);
            var41 = new Array(2);
            var41[0] = var43;
            var43 = {};
            var52 = var32.floatingScrimSolid;
            var45 = new Array(2);
            var45[0] = var52;
            var52 = {};
            var52['backgroundColor'] = var46;
            var45[1] = var52;
            var43['style'] = var45;
            var43 = var44.bind(var5)(var20, var43);
            var41[1] = var43;
            var12['children'] = var41;
            var13 = var23.bind(var5)(var20, var12);
case 203:
            var12 = new Array(13);
            var12[0] = var13;
            var13 = var16;
            if(!var16) { _fun0002_ip = 205; continue _fun0002 }
case 206:
            var13 = var38;
case 205:
            if(!var13) { _fun0002_ip = 207; continue _fun0002 }
case 208:
            var41 = _closure1_slot32;
            var23 = _closure1_slot7;
            var20 = {};
            var44 = var32.floatingScrimFill;
            var43 = new Array(2);
            var43[0] = var44;
            var44 = {};
            var44['backgroundColor'] = var46;
            var43[1] = var44;
            var20['style'] = var43;
            var43 = 'none';
            var20['pointerEvents'] = var43;
            var13 = var41.bind(var5)(var23, var20);
case 207:
            var12[1] = var13;
            var23 = _closure1_slot32;
            var20 = _closure1_slot0;
            var41 = _closure1_slot3;
            var13 = 70;
            var13 = var41[var13];
            var13 = var20.bind(var5)(var13);
            var20 = var13.ChatInputAccessibilityDivider;
            var13 = {};
            var13 = var23.bind(var5)(var20, var13);
            var12[2] = var13;
            var13 = null;
            if(!var15) { _fun0002_ip = 209; continue _fun0002 }
case 210:
            var23 = _closure1_slot32;
            var20 = _closure1_slot1;
            var41 = _closure1_slot3;
            var15 = 71;
            var15 = var41[var15];
            var20 = var20.bind(var5)(var15);
            var15 = {};
            var15['channel'] = var11;
            var43 = '';
            var28 = var43 !== var28;
            if(var28) { _fun0002_ip = 211; continue _fun0002 }
case 212:
            var41 = var37.chatInput;
            var45 = var41.current;
            var44 = var30 == var45;
            var41 = undefined;
            if(var44) { _fun0002_ip = 213; continue _fun0002 }
case 214:
            var44 = var45.getText;
            var41 = var44.bind(var45)();
case 213:
            var28 = var43 !== var41;
case 211:
            var15['hasInputText'] = var28;
            var13 = var23.bind(var5)(var20, var15);
case 209:
            var12[3] = var13;
            var20 = _closure1_slot33;
            var15 = _closure1_slot7;
            var13 = {};
            var23 = var32.accessories;
            var13['style'] = var23;
            var28 = null;
            if(var3) { _fun0002_ip = 215; continue _fun0002 }
case 216:
            var43 = _closure1_slot32;
            var41 = _closure1_slot1;
            var44 = _closure1_slot3;
            var23 = 72;
            var23 = var44[var23];
            var41 = var41.bind(var5)(var23);
            var23 = {};
            var23['channel'] = var11;
            var23['screenIndex'] = var10;
            var44 = undefined;
            if(!var16) { _fun0002_ip = 217; continue _fun0002 }
case 218:
            var52 = var32.floatingTypingWrapper;
            var45 = new Array(2);
            var45[0] = var52;
            var45[1] = var51;
            var44 = var45;
case 217:
            var23['wrapperStyle'] = var44;
            var44 = undefined;
            if(!var16) { _fun0002_ip = 219; continue _fun0002 }
case 220:
            var45 = new Array(2);
            var45[0] = var50;
            var45[1] = var46;
            var44 = var45;
case 219:
            var23['gradientColors'] = var44;
            var44 = undefined;
            if(!var16) { _fun0002_ip = 221; continue _fun0002 }
case 222:
            var44 = _closure1_slot35;
case 221:
            var23['gradientLocations'] = var44;
            var28 = var43.bind(var5)(var41, var23);
case 215:
            var23 = new Array(2);
            var23[0] = var28;
            var41 = _closure1_slot0;
            var43 = _closure1_slot3;
            var28 = 21;
            var28 = var43[var28];
            var41 = var41.bind(var5)(var28);
            var28 = var41.isIOS;
            var41 = var28.bind(var41)();
            var28 = null;
            if(!var41) { _fun0002_ip = 223; continue _fun0002 }
case 224:
            var44 = _closure1_slot32;
            var43 = _closure1_slot1;
            var45 = _closure1_slot3;
            var41 = 73;
            var41 = var45[var41];
            var43 = var43.bind(var5)(var41);
            var41 = {};
            var45 = var11.id;
            var41['channelId'] = var45;
            var41['screenIndex'] = var10;
            var41['onJumpToPresent'] = var8;
            var28 = var44.bind(var5)(var43, var41);
case 223:
            var23[1] = var28;
            var13['children'] = var23;
            var13 = var20.bind(var5)(var15, var13);
            var12[4] = var13;
            var13 = null;
            if(!var14) { _fun0002_ip = 225; continue _fun0002 }
case 226:
            var23 = _closure1_slot32;
            var15 = _closure1_slot1;
            var20 = _closure1_slot3;
            var14 = 74;
            var14 = var20[var14];
            var20 = var15.bind(var5)(var14);
            var15 = {};
            var15['channel'] = var11;
            var14 = var11.id;
            var13 = var23.bind(var5)(var20, var15, var14);
case 225:
            var12[5] = var13;
            var23 = _closure1_slot32;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var15 = 75;
            var15 = var13[var15];
            var15 = var14.bind(var5)(var15);
            var20 = var15.MemberActionsChatInputBannerGuardedOuter;
            var15 = {};
            var15['channel'] = var11;
            var15 = var23.bind(var5)(var20, var15);
            var12[6] = var15;
            var15 = 76;
            var15 = var13[var15];
            var15 = var14.bind(var5)(var15);
            var20 = var15.DoubleTapToReactChatInputBanner;
            var15 = {};
            var15['channel'] = var11;
            var15 = var23.bind(var5)(var20, var15);
            var12[7] = var15;
            var13 = var13[var53];
            var13 = var14.bind(var5)(var13);
            var13 = var13.KeyboardTypes;
            var14 = var13.EXPRESSION;
            var13 = null;
            if(!(var36 !== var14)) { _fun0002_ip = 227; continue _fun0002 }
case 228:
            var20 = _closure1_slot32;
            var15 = _closure1_slot1;
            var23 = _closure1_slot3;
            var14 = 77;
            var14 = var23[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var23 = var37.chatInputAutocomplete;
            var14['ref'] = var23;
            var14['analyticsLocations'] = var40;
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
case 227:
            var12[8] = var13;
            var13 = !var16;
            if(!var13) { _fun0002_ip = 229; continue _fun0002 }
case 230:
            var20 = _closure1_slot32;
            var15 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 78;
            var14 = var22[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var13 = var20.bind(var5)(var15, var14);
case 229:
            var12[9] = var13;
            var13 = !var16;
            if(!var13) { _fun0002_ip = 231; continue _fun0002 }
case 232:
            var20 = _closure1_slot32;
            var15 = _closure1_slot1;
            var22 = _closure1_slot3;
            var14 = 79;
            var14 = var22[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['channel'] = var11;
            var22 = var37.chatInput;
            var14['chatInputRef'] = var22;
            var14['pendingEdit'] = var27;
            var14['pendingReply'] = var26;
            var13 = var20.bind(var5)(var15, var14);
case 231:
            var12[10] = var13;
            var15 = _closure1_slot32;
            var14 = _closure1_slot1;
            var20 = _closure1_slot3;
            var13 = 80;
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
            var14 = _closure1_slot7;
            var13 = {};
            var18 = var32.container;
            var17 = new Array(3);
            var17[0] = var18;
            var18 = var16;
            if(!var16) { _fun0002_ip = 233; continue _fun0002 }
case 234:
            var18 = var32.floatingContainer;
case 233:
            var17[1] = var18;
            var18 = var16;
            if(!var18) { _fun0002_ip = 235; continue _fun0002 }
case 236:
            var18 = var19;
case 235:
            if(!var18) { _fun0002_ip = 237; continue _fun0002 }
case 238:
            var18 = var32.floatingContainerKeyboardOpen;
case 237:
            var17[2] = var18;
            var13['style'] = var17;
            var17 = var34.handleLayoutOfInputContainer;
            var13['onLayout'] = var17;
            var18 = _closure1_slot33;
            var17 = _closure1_slot34;
            var19 = {};
            if(var16) { _fun0002_ip = 239; continue _fun0002 }
case 240:
            var16 = new Array(2);
            var16[0] = var21;
            var23 = _closure1_slot33;
            var22 = _closure1_slot7;
            var20 = {};
            var28 = var32.containerInner;
            var20['style'] = var28;
            var20['collapsable'] = var24;
            var20['accessibilityElementsHidden'] = var25;
            var28 = undefined;
            if(!var25) { _fun0002_ip = 241; continue _fun0002 }
case 242:
            var28 = 'no-hide-descendants';
case 241:
            var20['importantForAccessibility'] = var28;
            var41 = var31;
            if(!var42) { _fun0002_ip = 243; continue _fun0002 }
case 244:
            var44 = _closure1_slot32;
            var43 = _closure1_slot7;
            var28 = {};
            var45 = var32.refreshButtonAlignment;
            var28['style'] = var45;
            var28['children'] = var31;
            var41 = var44.bind(var5)(var43, var28);
case 243:
            var28 = new Array(3);
            var28[0] = var41;
            var44 = _closure1_slot33;
            var43 = _closure1_slot7;
            var41 = {};
            var46 = var32.input;
            var45 = new Array(2);
            var45[0] = var46;
            var46 = {};
            var47 = var49 * var47;
            var47 = var48 - var47;
            var46['minHeight'] = var47;
            var45[1] = var46;
            var41['style'] = var45;
            var45 = new Array(2);
            var45[0] = var33;
            var46 = {};
            var47 = var32.rightAccessory;
            var46['style'] = var47;
            var48 = null;
            if(!var7) { _fun0002_ip = 245; continue _fun0002 }
case 246:
            var50 = _closure1_slot32;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var47 = 83;
            var47 = var51[var47];
            var49 = var49.bind(var5)(var47);
            var47 = {};
            var52 = _closure1_slot0;
            var51 = var51[var53];
            var51 = var52.bind(var5)(var51);
            var51 = var51.KeyboardTypes;
            var51 = var51.EXPRESSION;
            var51 = var36 === var51;
            var47['active'] = var51;
            var51 = var34.handlePressExpression;
            var47['onPress'] = var51;
            var48 = var50.bind(var5)(var49, var47);
case 245:
            var47 = new Array(2);
            var47[0] = var48;
            var50 = _closure1_slot32;
            var49 = _closure1_slot1;
            var51 = _closure1_slot3;
            var48 = 81;
            var48 = var51[var48];
            var49 = var49.bind(var5)(var48);
            var48 = {};
            var48['analyticsLocations'] = var40;
            var51 = var37.chatInputCharCounter;
            var48['ref'] = var51;
            var48 = var50.bind(var5)(var49, var48);
            var47[1] = var48;
            var46['children'] = var47;
            var46 = var44.bind(var5)(var43, var46);
            var45[1] = var46;
            var41['children'] = var45;
            var41 = var44.bind(var5)(var43, var41);
            var28[1] = var41;
            var41 = var29;
            if(!var42) { _fun0002_ip = 247; continue _fun0002 }
case 248:
            var44 = _closure1_slot32;
            var43 = _closure1_slot7;
            var42 = {};
            var45 = var32.refreshButtonAlignment;
            var42['style'] = var45;
            var42['children'] = var29;
            var41 = var44.bind(var5)(var43, var42);
case 247:
            var28[2] = var41;
            var20['children'] = var28;
            var20 = var23.bind(var5)(var22, var20);
            var16[1] = var20;
            var19['children'] = var16;
            var16 = var19;
            _fun0002_ip = 249; continue _fun0002;
case 239:
            var20 = new Array(3);
            var20[0] = var21;
            var23 = _closure1_slot32;
            var22 = _closure1_slot1;
            var28 = _closure1_slot3;
            var21 = 78;
            var21 = var28[var21];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var21['channel'] = var11;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var23 = _closure1_slot33;
            var22 = _closure1_slot7;
            var21 = {};
            var41 = var32.floatingInputBox;
            var28 = new Array(3);
            var28[0] = var41;
            if(!var39) { _fun0002_ip = 250; continue _fun0002 }
case 251:
            var39 = var32.floatingInputBoxPressed;
case 250:
            var28[1] = var39;
            if(!var38) { _fun0002_ip = 252; continue _fun0002 }
case 253:
            var38 = var32.floatingInputBoxTyping;
case 252:
            var28[2] = var38;
            var21['style'] = var28;
            var21['collapsable'] = var24;
            var21['accessibilityElementsHidden'] = var25;
            var24 = undefined;
            if(!var25) { _fun0002_ip = 254; continue _fun0002 }
case 255:
            var24 = 'no-hide-descendants';
case 254:
            var21['importantForAccessibility'] = var24;
            var39 = _closure1_slot32;
            var38 = _closure1_slot1;
            var41 = _closure1_slot3;
            var24 = 79;
            var24 = var41[var24];
            var25 = var38.bind(var5)(var24);
            var24 = {};
            var24['channel'] = var11;
            var28 = var37.chatInput;
            var24['chatInputRef'] = var28;
            var24['pendingEdit'] = var27;
            var24['pendingReply'] = var26;
            var25 = var39.bind(var5)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot33;
            var26 = _closure1_slot7;
            var25 = {};
            var28 = var32.floatingMainContents;
            var25['style'] = var28;
            var28 = new Array(4);
            var28[0] = var31;
            var31 = {};
            var32 = var32.inputFlat;
            var31['style'] = var32;
            var32 = new Array(2);
            var32[0] = var33;
            var33 = 81;
            var33 = var41[var33];
            var38 = var38.bind(var5)(var33);
            var33 = {};
            var33['analyticsLocations'] = var40;
            var40 = var37.chatInputCharCounter;
            var33['ref'] = var40;
            var33 = var39.bind(var5)(var38, var33);
            var32[1] = var33;
            var31['children'] = var32;
            var31 = var27.bind(var5)(var26, var31);
            var28[1] = var31;
            var30 = null;
            if(!var7) { _fun0002_ip = 256; continue _fun0002 }
case 257:
            var33 = _closure1_slot32;
            var32 = _closure1_slot1;
            var38 = _closure1_slot3;
            var31 = 82;
            var31 = var38[var31];
            var32 = var32.bind(var5)(var31);
            var31 = {};
            var37 = var37.chatInputRightActions;
            var31['ref'] = var37;
            var31['channel'] = var11;
            var31['keyboardType'] = var36;
            if(var3) { _fun0002_ip = 258; continue _fun0002 }
case 259:
            var37 = _closure1_slot0;
            var38 = _closure1_slot3;
            var36 = 63;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = var37.isPremiumGiftingSupported;
            var35 = var36.bind(var37)();
case 258:
            var31['shouldShowGiftButton'] = var35;
            var35 = var34.handlePressAction;
            var31['onPressAction'] = var35;
            var34 = var34.handlePressExpression;
            var31['onPressExpression'] = var34;
            var30 = var33.bind(var5)(var32, var31);
case 256:
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
case 249:
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[12] = var13;
            var1['children'] = var12;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(var3) { _fun0002_ip = 260; continue _fun0002 }
case 261:
            var4 = _closure1_slot32;
            var3 = _closure1_slot1;
            var12 = _closure1_slot3;
            var2 = 84;
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
case 260:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInput';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 85;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();