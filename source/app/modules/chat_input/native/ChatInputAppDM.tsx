// app/modules/chat_input/native/ChatInputAppDM.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSection;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {};
    var10 = 10;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_SECONDARY_BG;
    var9['backgroundColor'] = var14;
    var4['themedChatInput'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_POSITIVE;
    var9['backgroundColor'] = var14;
    var4['unmutedNotificationContainer'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['unmutedNotification'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var9['height'] = var13;
    var9['width'] = var13;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9['backgroundColor'] = var10;
    var4['loadingButton'] = var9;
    var9 = {'flexGrow': 1, 'alignSelf': 'stretch'};
    var4['loadingLaunchButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function ChatInputAppDMLaunchButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.context;
            var7 = var1.primaryEntryPointCommand;
            var15 = var1.application;
            var12 = var1.onOpenButtonPress;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var2 = var6[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var2['context'] = var16;
            var2['primaryEntryPointCommand'] = var7;
            var2['application'] = var15;
            var4 = var4.bind(var5)(var2);
            var8 = var4.isExecutingLaunchInteraction;
            var7 = var4.buttonText;
            var2 = var4.hasActiveMatchingEmbeddedActivity;
            var14 = var4.isEmbeddedApp;
            var13 = var4.currentEmbeddedActivity;
            var11 = var4.channelRecipientUserId;
            var10 = var4.setIsExecutingLaunchInteraction;
            var9 = var4.analyticsLocations;
            var4 = _closure1_slot0;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useOnEntryPointCommandButtonPress;
            var3 = {};
            var3['context'] = var16;
            var3['application'] = var15;
            var3['isEmbeddedApp'] = var14;
            var3['hasActiveMatchingEmbeddedActivity'] = var2;
            var3['currentEmbeddedActivity'] = var13;
            var3['onOpenButtonPress'] = var12;
            var3['channelRecipientUserId'] = var11;
            var3['setIsExecutingLaunchInteraction'] = var10;
            var3['analyticsLocations'] = var9;
            var6 = var4.bind(var6)(var3);
            var4 = 'primary';
            if(!var2) { _fun0001_ip = 200; continue _fun0001 }
 194:
            var4 = 'destructive';
 200:
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.Button;
            var1 = {};
            var1['variant'] = var4;
            var9 = 'md';
            var1['size'] = var9;
            var1['loading'] = var8;
            var1['text'] = var7;
            var1['onPress'] = var6;
            var6 = true;
            var1['grow'] = var6;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/ChatInputAppDM.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChatInputAppDMUIState(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var10 = arg2;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var10;
            var9 = _closure1_slot4;
            var3 = var9.useRef;
            var2 = false;
            var6 = var3.bind(var9)(var2);
            var _closure2_slot2 = var6;
            var3 = var9.useState;
            var2 = true;
            var4 = var3.bind(var9)(var2);
            var3 = _closure1_slot3;
            var11 = undefined;
            var2 = 2;
            var3 = var3.bind(var11)(var4, var2);
            var2 = 0;
            var4 = var3[var2];
            var _closure2_slot3 = var4;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot4 = var2;
            var8 = var9.useCallback;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.visible;
                    var3 = var1.willOpenSystemKeyboard;
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0003_ip = 23; continue _fun0003 }
 21:
                    var3 = false;
 23:
                    var4 = _closure2_slot4;
                    var4 = var4.bind(var1)(var5);
                    var2 = _closure2_slot2;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var8.bind(var9)(var3, var2);
            var _closure2_slot5 = var2;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var8 = var9.bind(var11)(var3);
            var3 = var8.useIsChatInputAppDMDisabled;
            var8 = var3.bind(var8)();
            var3 = 12;
            var3 = var12[var3];
            var12 = var9.bind(var11)(var3);
            var9 = var12.useIsAppDM;
            var3 = var5.id;
            var3 = var9.bind(var12)(var3);
            if(!var3) { _fun0002_ip = 177; continue _fun0002 }
 174:
            var3 = !var8;
 177:
            var _closure2_slot6 = var3;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var12 = var9.bind(var11)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var13 = var5.id;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.appDMChannelsWithFailedLoads;
                    var4 = var1.bind(var2)();
                    var3 = var4.has;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 51; continue _fun0004 }
 47:
                    var1 = _closure2_slot6;
 51:
                    return var1;
                }
            };
            var3 = var11.bind(var12)(var9, var3, var8);
            var7 = _closure1_slot4;
            var9 = var7.useEffect;
            var8 = new Array(3);
            var8[0] = var4;
            var8[1] = var10;
            var8[2] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if(!var2) { _fun0005_ip = 22; continue _fun0005 }
 15:
                    var3 = _closure2_slot3;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0005_ip = 56; continue _fun0005 }
 25:
                    var3 = _closure2_slot2;
                    var2 = false;
                    var3['current'] = var2;
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.openSystemKeyboard;
                    var1 = var1.bind(var2)();
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var7)(var6, var8);
            var6 = var7.useEffect;
            var8 = var5.id;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var2;
            var1 = function() {
                var3 = _closure2_slot5;
                var2 = {};
                var1 = true;
                var2['visible'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['appDMsUIEnabled'] = var3;
            if(!var3) { _fun0002_ip = 335; continue _fun0002 }
 332:
            var3 = var4;
 335:
            var1['appDMsUIVisible'] = var3;
            var1['setAppDMsUIVisible'] = var2;
            return var1;
        }
    };
    var3['useChatInputAppDMUIState'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var15 = var1.context;
            var _closure2_slot0 = var15;
            var21 = var1.chatInputRef;
            var _closure2_slot1 = var21;
            var2 = var1.setShowAppLaunchButton;
            var _closure2_slot2 = var2;
            var1 = _closure1_slot12;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 16;
            var1 = var18[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useClientThemesOverride;
            var1 = var10.themedChatInput;
            var12 = var3.bind(var5)(var1);
            var3 = _closure1_slot1;
            var1 = 17;
            var1 = var18[var1];
            var5 = var3.bind(var4)(var1);
            var1 = {};
            var1['context'] = var15;
            var5 = var5.bind(var4)(var1);
            var13 = var5.application;
            var _closure2_slot3 = var13;
            var1 = var5.isInitialLoading;
            var14 = var5.primaryEntryPointCommand;
            var17 = var5.isProfileFetching;
            var16 = var5.wasProfileFetching;
            var9 = var5.applicationId;
            var7 = var5.channelId;
            var5 = var5.commands;
            var20 = _closure1_slot4;
            var19 = var20.useCallback;
            var8 = new Array(4);
            var8[0] = var13;
            var8[1] = var15;
            var8[2] = var21;
            var8[3] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 316; continue _fun0007 }
 18:
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var8 = _closure2_slot3;
                    var1 = var8.id;
                    var7 = undefined;
                    var10 = var3.bind(var7)(var2, var1);
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = false;
                    var1['visible'] = var3;
                    var1 = var2.bind(var7)(var1);
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var2 = var3.openCustomKeyboard;
                    var1 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 18;
                    var4 = var12[var4];
                    var4 = var11.bind(var7)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.APP_LAUNCHER;
                    var1['type'] = var4;
                    var4 = {};
                    var11 = _closure1_slot9;
                    var11 = var11.APPLICATION_VIEW;
                    var4['initialRouteName'] = var11;
                    var11 = true;
                    var4['initiallyExpanded'] = var11;
                    var4['application'] = var8;
                    var8 = var10.isGuildInstalled;
                    var8 = !var8;
                    if(!var8) { _fun0007_ip = 166; continue _fun0007 }
 157:
                    var10 = var10.isUserInstalled;
                    var8 = !var10;
 166:
                    var4['installOnDemand'] = var8;
                    var8 = function onPressBack() {
                        var3 = _closure2_slot2;
                        var2 = {};
                        var1 = true;
                        var2['visible'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['onPressBack'] = var8;
                    var6 = function onCommandExecuted() {
                        var3 = _closure2_slot2;
                        var2 = {};
                        var1 = true;
                        var2['visible'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4['onCommandExecuted'] = var6;
                    var1['context'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 19;
                    var1 = var8[var1];
                    var4 = var6.bind(var7)(var1);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot8;
                    var2 = var1.APPLICATION_COMMAND_SECTION_SELECTED;
                    var1 = {};
                    var9 = _closure2_slot3;
                    var9 = var9.id;
                    var1['application_id'] = var9;
                    var9 = _closure1_slot1;
                    var5 = 20;
                    var5 = var8[var5];
                    var5 = var9.bind(var7)(var5);
                    var5 = var5.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                    var1['location'] = var5;
                    var5 = 21;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.AppLauncherEntrypoint;
                    var5 = var5.TEXT;
                    var1['source'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 316:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var20)(var2, var8);
            var2 = 22;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['isProfileFetching'] = var17;
            var2['wasProfileFetching'] = var16;
            var2['applicationId'] = var9;
            var2['channelId'] = var7;
            var2['commands'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            if(var1) { _fun0006_ip = 511; continue _fun0006 }
 258:
            var1 = null;
            if(!(var1 != var13)) { _fun0006_ip = 511; continue _fun0006 }
 267:
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var9 = _closure1_slot10;
            var7 = _closure1_slot13;
            var5 = {};
            var5['context'] = var15;
            var5['primaryEntryPointCommand'] = var14;
            var5['application'] = var13;
            var5['onOpenButtonPress'] = var8;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 23;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['style'] = var12;
            var12 = true;
            var7['active'] = var12;
            var14 = _closure1_slot0;
            var12 = 24;
            var12 = var15[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.ChatIcon;
            var7['IconComponent'] = var12;
            var11 = function onPress() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = {'visible': false, 'willOpenSystemKeyboard': true};
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onPress'] = var11;
            var11 = 25;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.5/5xY2;
            var12 = var13.bind(var16)(var12);
            var7['accessibilityLabel'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.2d4+Vl;
            var11 = var12.bind(var13)(var11);
            var7['accessibilityHint'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            _fun0006_ip = 625; continue _fun0006;
 511:
            var5 = {};
            var7 = var10.container;
            var5['style'] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var6 = {};
            var7 = var10.loadingButton;
            var6['style'] = var7;
            var7 = var9.bind(var4)(var8, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = {};
            var12 = var10.loadingLaunchButton;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = var10.loadingButton;
            var11[1] = var12;
            var7['style'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var7 = {};
            var10 = var10.loadingButton;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[2] = var7;
            var5['children'] = var6;
            var1 = var5;
 625:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChatInputAppDM'] = var2;
    return var1;
})();