// app/modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ChatInputNotificationNudgeImpl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.promptType;
            var _closure2_slot0 = var1;
            var1 = var2.location;
            var _closure2_slot1 = var1;
            var1 = var2.surface;
            var _closure2_slot2 = var1;
            var15 = var2.body;
            var2 = var2.onDismiss;
            var _closure2_slot3 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 'ChatInputNotificationNudge';
            var11 = var3.bind(var4)(var2);
            var2 = _closure1_slot18;
            var20 = var2.bind(var4)(var11);
            var3 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.CONTEXTUAL_REMINDER_ACTION;
                var2 = {};
                var6 = _closure1_slot14;
                var6 = var6.IMPRESSION;
                var2['action'] = var6;
                var6 = _closure2_slot2;
                var2['prompt_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var20.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var11;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var20.containerRefreshShadow;
case 2:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var5 = {};
            var6 = var20.iconContainer;
            var5['style'] = var6;
            var16 = _closure1_slot16;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 14;
            var12 = var6[var12];
            var12 = var10.bind(var4)(var12);
            var14 = var12.BellSlashIcon;
            var12 = {};
            var17 = 'sm';
            var12['size'] = var17;
            var18 = _closure1_slot1;
            var17 = 11;
            var17 = var6[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.colors;
            var17 = var17.ICON_STRONG;
            var12['color'] = var17;
            var12 = var16.bind(var4)(var14, var12);
            var5['children'] = var12;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var14 = _closure1_slot17;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var20.contentContainer;
            var7['style'] = var12;
            var12 = _closure1_slot16;
            var19 = 15;
            var6 = var6[var19];
            var6 = var10.bind(var4)(var6);
            var10 = var6.Text;
            var6 = {};
            var16 = 'text-md/medium';
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = 'text-sm/medium';
case 4:
            var6['variant'] = var16;
            var16 = 'text-strong';
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = 'text-default';
case 6:
            var6['color'] = var16;
            var6['children'] = var15;
            var6 = var12.bind(var4)(var10, var6);
            var15 = new Array(2);
            var15[0] = var6;
            var18 = _closure1_slot16;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 16;
            var16 = var10[var6];
            var16 = var12.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var21 = 8;
            var16['hitSlop'] = var21;
            var21 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var2 = var4[var1];
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var8 = var9.requestPushNotificationPermission;
                var2 = _closure1_slot13;
                var5 = var2.TO_SETTINGS;
                var3 = _closure2_slot1;
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var8.bind(var9)(var5, var3, var2);
                var3 = _closure1_slot1;
                var2 = 13;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.CONTEXTUAL_REMINDER_ACTION;
                var2 = {};
                var7 = _closure1_slot14;
                var7 = var7.ACCEPT;
                var2['action'] = var7;
                var6 = _closure2_slot2;
                var2['prompt_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var16['onPress'] = var21;
            var20 = var20.ctaButton;
            var16['style'] = var20;
            var20 = 'button';
            var16['accessibilityRole'] = var20;
            var21 = _closure1_slot16;
            var10 = var10[var19];
            var10 = var12.bind(var4)(var10);
            var20 = var10.Text;
            var19 = {};
            var10 = 'text-sm/semibold';
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = 'text-xs/medium';
case 8:
            var19['variant'] = var10;
            var10 = 'text-brand';
            var19['color'] = var10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 18;
            var22 = var12[var11];
            var22 = var10.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var12[var11];
            var22 = var10.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22["+7MDbQ"];
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var7['children'] = var15;
            var7 = var14.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot16;
            var6 = var12[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableHighlight;
            var6 = {'onPress': null, 'hitSlop': 8, 'accessibilityRole': 'button'};
            var13 = function onPress() {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var2 = var5[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var4 = var6.setPushPermissionReactivationSeen;
                var3 = _closure2_slot0;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var3 = 13;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.track;
                var3 = _closure1_slot10;
                var4 = var3.CONTEXTUAL_REMINDER_ACTION;
                var3 = {};
                var7 = _closure1_slot14;
                var7 = var7.DISMISS;
                var3['action'] = var7;
                var7 = _closure2_slot2;
                var3['prompt_type'] = var7;
                var7 = 'relaxed';
                var3['dismiss_logic'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var13;
            var13 = var12[var11];
            var13 = var10.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var12[var11];
            var11 = var10.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.WAI6xu;
            var11 = var13.bind(var14)(var11);
            var6['accessibilityLabel'] = var11;
            var11 = _closure1_slot16;
            var9 = 20;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.XSmallIcon;
            var9 = {'size': 'sm', 'color': 'icon-subtle'};
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useCallback;
    var _closure1_slot4 = var8;
    var4 = var4.useEffect;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EventActionLocation;
    var _closure1_slot12 = var7;
    var7 = var4.EventActionType;
    var _closure1_slot13 = var7;
    var7 = var4.NotificationNudgeAnalyticsAction;
    var _closure1_slot14 = var7;
    var4 = var4.NotificationNudgeSurface;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {'display': 'flex', 'flexDirection': 'row', 'padding': null, 'backgroundColor': null, 'alignItems': 'center', 'borderTopWidth': 1};
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 11;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var8.bind(var6)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_12;
            var2['padding'] = var3;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var8.bind(var6)(var3);
            var8 = var3.colors;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var8.BACKGROUND_SURFACE_HIGH;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var3 = var8.BACKGROUND_BASE_LOW;
case 12:
            var2['backgroundColor'] = var3;
            var3 = 1;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var9 = var8.colors;
            if(var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = var9.BORDER_SUBTLE;
            _fun0002_ip = 3; continue _fun0002;
case 13:
            var8 = var9.BORDER_MUTED;
case 3:
            var2['borderColor'] = var8;
            if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = {};
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var9 = {'borderRadius': null, 'marginBottom': 8, 'borderWidth': 1, 'gap': 12};
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var12 = var10[var7];
            var12 = var11.bind(var6)(var12);
            var12 = var12.radii;
            var12 = var12.md;
            var9['borderRadius'] = var12;
            var10 = var10[var7];
            var10 = var11.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BORDER_MUTED;
            var9['borderColor'] = var10;
            var8 = var9;
case 17:
            var14 = var2;
            var13 = var8;
            var8 = copyDataProperties(var14, var13);
            var1['container'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.shadows;
            var13 = var8.SHADOW_MEDIUM;
            var14 = var2;
            var8 = copyDataProperties(var14, var13);
            var1['containerRefreshShadow'] = var2;
            var2 = {};
            var8 = 10;
            if(!var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var8 = 0;
case 18:
            var2['padding'] = var8;
            var8 = 'transparent';
            if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_MOD_STRONG;
case 20:
            var2['backgroundColor'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var1['iconContainer'] = var2;
            var2 = {};
            var2['flex'] = var3;
            var3 = 0;
            if(var5) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_12;
case 22:
            var2['marginLeft'] = var3;
            var1['contentContainer'] = var2;
            var2 = {};
            var3 = 'flex-start';
            var2['alignSelf'] = var3;
            var1['ctaButton'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatInputNotificationNudge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var _closure2_slot0 = var4;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var9 = var3.bind(var5)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = _closure1_slot8;
            var3[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.getGuildId;
                    var6 = var1.bind(var3)();
                    var1 = var3.isThread;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure1_slot8;
                    var4 = var5.isChannelMuted;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var6, var1);
                    _fun0004_ip = 26; continue _fun0004;
case 24:
                    var4 = _closure1_slot7;
                    var3 = var4.isMuted;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 26:
                    return var1;
                }
            };
            var3 = var6.bind(var9)(var3, var1);
            var6 = _closure1_slot1;
            var1 = 22;
            var1 = var8[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.bind(var5)(var4);
            var17 = !var3;
            if(!var17) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var17 = !var1;
case 27:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 17;
            var3 = var1[var8];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useShouldShowPushNotificationNudgeByPromptType;
            var6 = _closure1_slot9;
            var3 = var6.CHANNEL_BANNER;
            var3 = var9.bind(var10)(var3);
            var10 = _closure1_slot1;
            var9 = 23;
            var9 = var1[var9];
            var11 = var10.bind(var5)(var9);
            var10 = var11.useConfig;
            var9 = {};
            var12 = 'ChatInputNotificationNudge';
            var9['location'] = var12;
            var9 = var10.bind(var11)(var9);
            var16 = var9.enabled;
            var8 = var1[var8];
            var9 = var4.bind(var5)(var8);
            var8 = var9.useShouldShowPushNotificationNudgeByPromptType;
            var6 = var6.POST_REACTION_BANNER;
            var8 = var8.bind(var9)(var6);
            var13 = 24;
            var1 = var1[var13];
            var9 = var4.bind(var5)(var1);
            var6 = var9.useSelectedTimeRecurringDismissibleContent;
            var1 = null;
            var4 = null;
            if(!var17) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = null;
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var4 = var3.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
case 29:
            var3 = {};
            var15 = 604800000;
            var3['cooldownDurationMs'] = var15;
            var22 = var9;
            var21 = var4;
            var20 = var3;
            var19 = undefined;
            var18 = true;
            var4 = var22[var6](var21, var20, var19, var18, var17);
            var3 = _closure1_slot3;
            var11 = 2;
            var6 = var3.bind(var5)(var4, var11);
            var3 = 0;
            var4 = var6[var3];
            var9 = 1;
            var6 = var6[var9];
            _closure2_slot1 = var6;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var13 = var12.bind(var5)(var10);
            var12 = var13.useSelectedTimeRecurringDismissibleContent;
            var10 = null;
            if(!var17) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var10 = null;
            if(!var16) { _fun0003_ip = 32; continue _fun0003 }
case 34:
            var10 = null;
            if(!var8) { _fun0003_ip = 32; continue _fun0003 }
case 35:
            var8 = var1 == var4;
            var10 = null;
            if(!var8) { _fun0003_ip = 32; continue _fun0003 }
case 36:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 25;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var8 = var8.DismissibleContent;
            var10 = var8.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
case 32:
            var8 = {};
            var8['cooldownDurationMs'] = var15;
            var22 = var13;
            var21 = var10;
            var20 = var8;
            var19 = undefined;
            var18 = true;
            var10 = var22[var12](var21, var20, var19, var18, var17);
            var8 = _closure1_slot3;
            var8 = var8.bind(var5)(var10, var11);
            var3 = var8[var3];
            var10 = var8[var9];
            _closure2_slot2 = var10;
            var9 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot11;
                var2 = var1.USER_DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var9.bind(var5)(var6, var8);
            var8 = new Array(1);
            var8[0] = var10;
            var2 = function() {
                var3 = _closure2_slot2;
                var1 = _closure1_slot11;
                var2 = var1.USER_DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var9.bind(var5)(var2, var8);
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 25;
            var2 = var2[var9];
            var2 = var10.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
            if(!(var4 !== var2)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var4.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
            var1 = null;
            if(!(var3 === var2)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var9 = _closure1_slot9;
            var9 = var9.POST_REACTION_BANNER;
            var2['promptType'] = var9;
            var9 = _closure1_slot12;
            var9 = var9.POST_REACTION;
            var2['location'] = var9;
            var9 = _closure1_slot15;
            var9 = var9.POST_REACTION_BANNER;
            var2['surface'] = var9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 18;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.VS6ey0;
            var9 = var10.bind(var11)(var9);
            var2['body'] = var9;
            var2['onDismiss'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 39:
            _fun0003_ip = 41; continue _fun0003;
case 37:
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var8 = _closure1_slot9;
            var8 = var8.CHANNEL_BANNER;
            var2['promptType'] = var8;
            var8 = _closure1_slot12;
            var8 = var8.CHANNEL_BANNER;
            var2['location'] = var8;
            var8 = _closure1_slot15;
            var8 = var8.CHANNEL_BANNER;
            var2['surface'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 18;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7["/6SnPw"];
            var7 = var8.bind(var9)(var7);
            var2['body'] = var7;
            var2['onDismiss'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();