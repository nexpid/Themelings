// app/modules/video_calls/native/components/ChannelCallConnectingScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function VoiceSettingsActionSheet() {
        var4 = _closure1_slot16;
        var6 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 17;
        var1 = var12[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var11 = true;
        var1['scrollable'] = var11;
        var7 = _closure1_slot16;
        var5 = 18;
        var5 = var12[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.BottomSheetScrollView;
        var5 = {};
        var10 = _closure1_slot16;
        var9 = _closure1_slot1;
        var8 = 19;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8['disableForm'] = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function EmptyState() {
        var1 = _closure1_slot19;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var11.emptyState;
        var1['style'] = var5;
        var8 = _closure1_slot16;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var5 = 25;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var7 = var5.TextInVoiceEmptyState;
        var5 = {};
        var9 = var11.emptyStateImage;
        var5['style'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var14 = _closure1_slot16;
        var7 = 26;
        var7 = var13[var7];
        var7 = var12.bind(var4)(var7);
        var8 = var7.Text;
        var7 = {'style': null, 'maxFontSizeMultiplier': 2, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
        var9 = var11.emptyStateTitle;
        var7['style'] = var9;
        var10 = 2;
        var9 = 24;
        var15 = var13[var9];
        var15 = var12.bind(var4)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var13[var9];
        var15 = var12.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.GNeL2t;
        var15 = var16.bind(var17)(var15);
        var7['children'] = var15;
        var7 = var14.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot16;
        var6 = 27;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.LegacyText;
        var6 = {};
        var11 = var11.emptyStateSubtitle;
        var6['style'] = var11;
        var6['maxFontSizeMultiplier'] = var10;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.jkg8Zm;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function MemberList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0001_ip = 46; continue _fun0001 }
 9:
            var1 = global;
            var4 = var1.Error;
            var6 = _closure1_slot11;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
 46:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function JoinMutedButton(arg1) {
        var1 = arg1;
        var5 = var1.channel;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 30;
        var2 = var7[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var6 = var2.bind(var4)();
        var3 = _closure1_slot16;
        var2 = _closure1_slot0;
        var1 = 31;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ChannelCallMicButton;
        var1 = {};
        var1['channel'] = var5;
        var5 = 'light';
        var5 = var5 === var6;
        var1['disableTint'] = var5;
        var5 = false;
        var1['isSmallSize'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function JoinVoiceButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var9 = var2.channel;
            var _closure2_slot0 = var9;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 32;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot1 = var2;
            var7 = _closure1_slot0;
            var2 = 33;
            var8 = var6[var2];
            var12 = var7.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8);
            var2 = var6[var2];
            var11 = var7.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot8;
                    var4 = var5.getSessionById;
                    var1 = _closure2_slot1;
                    var3 = null;
                    var7 = var3 == var1;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 41; continue _fun0003 }
 31:
                    var2 = _closure2_slot1;
                    var6 = var2.sessionId;
 41:
                    var7 = var3 != var6;
                    var2 = '';
                    if(!var7) { _fun0003_ip = 55; continue _fun0003 }
 52:
                    var2 = var6;
 55:
                    var2 = var4.bind(var5)(var2);
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 81; continue _fun0003 }
 69:
                    var2 = var2.clientInfo;
                    var1 = var2.os;
 81:
                    return var1;
                }
            };
            var11 = var8.bind(var11)(var7, var2);
            var _closure2_slot2 = var11;
            var2 = 34;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var _closure2_slot3 = var8;
            var2 = 35;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var9);
            var6 = var2.selfMute;
            if(var6) { _fun0002_ip = 192; continue _fun0002 }
 186:
            var6 = var2.mute;
 192:
            if(var6) { _fun0002_ip = 201; continue _fun0002 }
 195:
            var6 = var2.suppress;
 201:
            _closure2_slot4 = var6;
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var11;
            var2[2] = var8;
            var2[3] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var12 = null;
                    if(!(var12 != var2)) { _fun0004_ip = 65; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 36;
                    var3 = var5[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.coerceConsoleTypeToPlatformType;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot3;
                    var4 = var6.bind(var7)(var4, var3);
                    if(!(var12 == var4)) { _fun0004_ip = 272; continue _fun0004 }
 65:
                    var3 = _closure2_slot0;
                    var9 = var3.id;
                    var7 = _closure2_slot4;
                    var8 = _closure1_slot10;
                    var3 = undefined;
                    var8 = var8.bind(var3)();
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 1;
                    var8 = var11[var8];
                    var10 = var10.bind(var3)(var8);
                    var8 = var12 == var10;
                    var11 = var10;
                    if(var8) { _fun0004_ip = 134; continue _fun0004 }
 121:
                    var10 = var10.NativeModules;
                    var8 = var12 == var10;
                    var11 = var10;
 134:
                    var10 = var11;
                    if(var8) { _fun0004_ip = 153; continue _fun0004 }
 140:
                    var11 = var11.KeyboardManager;
                    var8 = var12 == var11;
                    var10 = var11;
 153:
                    if(var8) { _fun0004_ip = 166; continue _fun0004 }
 156:
                    var11 = var10.dismissGlobalKeyboard;
                    var8 = var12 == var11;
 166:
                    if(var8) { _fun0004_ip = 179; continue _fun0004 }
 169:
                    var8 = var10.dismissGlobalKeyboard;
                    var8 = var8.bind(var10)();
 179:
                    if(!var7) { _fun0004_ip = 235; continue _fun0004 }
 182:
                    var8 = _closure1_slot6;
                    var7 = var8.getSettings;
                    var7 = var7.bind(var8)();
                    var7 = var7.mute;
                    if(var7) { _fun0004_ip = 235; continue _fun0004 }
 205:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 28;
                    var7 = var10[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.toggleSelfMute;
                    var7 = var7.bind(var8)();
 235:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.selectVoiceChannel;
                    var6 = false;
                    var6 = var7.bind(var8)(var9, var6, var6);
                    return var3;
 272:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 37;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.beginConsoleTransfer;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var8 = var3.bind(var7)(var1, var2);
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 20;
            var2 = var1[var3];
            var2 = var7.bind(var4)(var2);
            var11 = var2.bind(var4)(var9);
            var2 = _closure1_slot0;
            var3 = var1[var3];
            var7 = var2.bind(var4)(var3);
            var3 = var7.useIsVoiceChannelLocked;
            var12 = var3.bind(var7)(var9);
            var3 = _closure1_slot16;
            var7 = 38;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.LabeledActionButton;
            var1 = {};
            var9 = var11;
            if(var9) { _fun0002_ip = 329; continue _fun0002 }
 326:
            var9 = var12;
 329:
            if(var9) { _fun0002_ip = 335; continue _fun0002 }
 332:
            var9 = var10;
 335:
            var1['disabled'] = var9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var14 = 14;
            var13 = var9[var14];
            var13 = var10.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.GREEN_360;
            var1['backgroundColor'] = var13;
            var13 = {};
            var14 = var9[var14];
            var14 = var10.bind(var4)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.WHITE_500;
            var13['tintColor'] = var14;
            var1['imageStyle'] = var13;
            var16 = _closure1_slot0;
            var14 = 24;
            var13 = var9[var14];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var9 = var9[var14];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.96ANUF;
            var9 = var13.bind(var15)(var9);
            var1['accessibilityLabel'] = var9;
            var15 = _closure1_slot2;
            if(var6) { _fun0002_ip = 477; continue _fun0002 }
 468:
            var9 = 40;
            var9 = var15[var9];
            _fun0002_ip = 484; continue _fun0002;
 477:
            var13 = 39;
            var9 = var15[var13];
 484:
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var1['onPress'] = var8;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var14];
            var9 = var13.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var14];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            if(var12) { _fun0002_ip = 588; continue _fun0002 }
 541:
            if(var11) { _fun0002_ip = 575; continue _fun0002 }
 544:
            if(var6) { _fun0002_ip = 560; continue _fun0002 }
 547:
            var6 = var8.96ANUF;
            var6 = var9.bind(var10)(var6);
            _fun0002_ip = 573; continue _fun0002;
 560:
            var11 = var8.Bd/Li4;
            var6 = var9.bind(var10)(var11);
 573:
            _fun0002_ip = 586; continue _fun0002;
 575:
            var11 = var8.rZfiNj;
            var6 = var9.bind(var10)(var11);
 586:
            _fun0002_ip = 599; continue _fun0002;
 588:
            var8 = var8.TVBCKS;
            var6 = var9.bind(var10)(var8);
 599:
            var1['label'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var4)(var5);
            var5 = var5.IconPosition;
            var5 = var5.RIGHT;
            var1['iconPosition'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.resetFocus;
    var _closure1_slot10 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OLD_VOICE_UI_ERROR_STRING;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var4 = var4.InstantInviteSources;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = var4.Permissions;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.Fragment;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'paddingBottom': 8, 'paddingTop': 44};
    var13 = 14;
    var10 = var6[var13];
    var10 = var14.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'alignItems': 'center', 'justifyContent': 'center', 'marginHorizontal': 16};
    var11 = 'center';
    var10 = 15;
    var16 = var6[var10];
    var16 = var5.bind(var1)(var16);
    var16 = var16.CALL_ACTION_BAR_HEIGHT;
    var9['marginBottom'] = var16;
    var4['emptyState'] = var9;
    var9 = {};
    var9['width'] = var15;
    var4['spacer'] = var9;
    var9 = {'width': 120, 'height': 80, 'marginBottom': 24};
    var4['emptyStateImage'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['emptyStateTitle'] = var9;
    var9 = {};
    var9['fontSize'] = var13;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_SECONDARY;
    var9['color'] = var13;
    var12 = var12.DISPLAY_MEDIUM;
    var9['fontFamily'] = var12;
    var9['textAlign'] = var11;
    var4['emptyStateSubtitle'] = var9;
    var9 = {'paddingHorizontal': 12, 'paddingTop': 16, 'justifyContent': 'center', 'alignItems': 'flex-start', 'flexDirection': 'row'};
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.CALL_ACTION_BAR_HEIGHT;
    var9['height'] = var10;
    var4['actionBarContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallConnectingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChannelCallConnectingScreen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot19;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 33;
            var1 = var11[var1];
            var7 = var6.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.countVoiceStatesForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var1 === var2;
                return var1;
            };
            var8 = var5.bind(var7)(var3, var1);
            var7 = _closure1_slot1;
            var1 = 41;
            var3 = var11[var1];
            var5 = var7.bind(var4)(var3);
            var3 = 42;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.CHANNEL_CALL_CONNECTING_SCREEN;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var _closure2_slot1 = var5;
            var14 = _closure1_slot3;
            var13 = var14.useEffect;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var5;
            var3 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 43;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var8 = var9.track;
                var2 = _closure1_slot12;
                var7 = var2.VIEW_VOICE_CHANNEL;
                var4 = {};
                var6 = _closure2_slot0;
                var11 = var6.id;
                var4['channel_id'] = var11;
                var11 = var6.guild_id;
                var4['guild_id'] = var11;
                var10 = _closure2_slot1;
                var4['location_stack'] = var10;
                var4 = var8.bind(var9)(var7, var4);
                var4 = _closure1_slot0;
                var10 = 44;
                var3 = var5[var10];
                var9 = var4.bind(var1)(var3);
                var8 = var9.trackWithMetadata;
                var7 = var2.CHANNEL_OPENED;
                var3 = {};
                var10 = var5[var10];
                var12 = var4.bind(var1)(var10);
                var11 = var12.getChannelOpenedMetadata;
                var10 = var6.id;
                var13 = var11.bind(var12)(var10);
                var14 = var3;
                var10 = copyDataProperties(var14, var13);
                var3 = var8.bind(var9)(var7, var3);
                var3 = 45;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackClickstream;
                var3 = var2.CHANNEL_OPENED_CLICKSTREAM;
                var2 = {};
                var6 = var6.id;
                var2['channelId'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var13.bind(var14)(var3, var7);
            var13 = _closure1_slot3;
            var7 = var13.useLayoutEffect;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.runAfterInteractions;
                var1 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 47;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.requestPermission;
                    var2 = _closure1_slot14;
                    var2 = var2.AUDIO;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = var1.cancel;
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var13)(var3, var2);
            var3 = _closure1_slot16;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot16;
            var5 = 48;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {'bottom': true, 'top': true};
            var10 = var10.container;
            var5['style'] = var10;
            var11 = _closure1_slot16;
            if(var8) { _fun0005_ip = 282; continue _fun0005 }
 264:
            var10 = _closure1_slot22;
            var8 = {};
            var8['channel'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            _fun0005_ip = 294; continue _fun0005;
 282:
            var10 = _closure1_slot21;
            var9 = {};
            var8 = var11.bind(var4)(var10, var9);
 294:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function showVoiceSettingsActionSheet(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.openLazy;
        var4 = {};
        var2 = arg1;
        var4['guildId'] = var2;
        var3 = function() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = _closure1_slot20;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = 'voice settings';
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['showVoiceSettingsActionSheet'] = var4;
    var4 = function ChannelCallConnectingHeader(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var17 = var2.channel;
            var _closure2_slot0 = var17;
            var2 = _closure1_slot19;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 20;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsVoiceChannelLocked;
            var2 = var2.bind(var3)(var17);
            var7 = _closure1_slot7;
            var5 = var7.can;
            var3 = _closure1_slot15;
            var3 = var3.CREATE_INSTANT_INVITE;
            var3 = var5.bind(var7)(var3, var17);
            var7 = null;
            var13 = null;
            if(!var3) { _fun0006_ip = 103; continue _fun0006 }
 91:
            var13 = null;
            if(var2) { _fun0006_ip = 103; continue _fun0006 }
 96:
            var13 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.showInstantInviteActionSheet;
                var2 = _closure2_slot0;
                var1 = _closure1_slot13;
                var1 = var1.VOICE_CHANNEL;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
 103:
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var5 = {};
            var12 = {};
            var10 = 4;
            var12['width'] = var10;
            var5['style'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var8 = var7 != var13;
            var7 = null;
            if(!var8) { _fun0006_ip = 279; continue _fun0006 }
 159:
            var12 = _closure1_slot16;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 22;
            var8 = var18[var8];
            var9 = var15.bind(var4)(var8);
            var8 = {};
            var14 = 23;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var8['source'] = var14;
            var8['onPress'] = var13;
            var14 = _closure1_slot0;
            var13 = 24;
            var15 = var18[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.dHHb//;
            var13 = {};
            var17 = var17.name;
            var13['channelName'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var8['accessibilityLabel'] = var13;
            var7 = var12.bind(var4)(var9, var8);
 279:
            var5[1] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.spacer;
            var7['style'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = {};
            var9['width'] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelCallConnectingHeader'] = var4;
    var2 = function CallConnectingActionBar(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var1 = _closure1_slot19;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.actionBarContainer;
        var1['style'] = var5;
        var8 = _closure1_slot16;
        var7 = _closure1_slot23;
        var5 = {};
        var5['channel'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot16;
        var7 = _closure1_slot24;
        var6 = {};
        var6['channel'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['CallConnectingActionBar'] = var2;
    return var1;
})();