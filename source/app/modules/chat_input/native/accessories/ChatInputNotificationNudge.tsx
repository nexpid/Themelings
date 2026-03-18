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
            var1 = arg1;
            var1 = var1.onDismiss;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'ChatInputNotificationNudge';
            var12 = var2.bind(var4)(var1);
            var1 = _closure1_slot15;
            var21 = var1.bind(var4)(var12);
            var2 = _closure1_slot0;
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useNudgeExperimentConfigWithoutExposure;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_BANNER;
            var1 = var2.bind(var3)(var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot4;
            var2 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 14;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.CONTEXTUAL_REMINDER_ACTION;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 15;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var9 = var9.NotificationNudgeAnalyticsAction;
                var9 = var9.IMPRESSION;
                var2['action'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.NotificationNudgeSurface;
                var6 = var6.CHANNEL_BANNER;
                var2['prompt_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var21.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var12;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var21.containerRefreshShadow;
case 2:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var5 = {};
            var6 = var21.iconContainer;
            var5['style'] = var6;
            var15 = _closure1_slot13;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = 16;
            var11 = var6[var11];
            var11 = var10.bind(var4)(var11);
            var14 = var11.BellSlashIcon;
            var11 = {};
            var16 = 'sm';
            var11['size'] = var16;
            var17 = _closure1_slot1;
            var16 = 11;
            var16 = var6[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.ICON_STRONG;
            var11['color'] = var16;
            var11 = var15.bind(var4)(var14, var11);
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var14 = _closure1_slot14;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var21.contentContainer;
            var7['style'] = var11;
            var16 = _closure1_slot13;
            var20 = 17;
            var6 = var6[var20];
            var6 = var10.bind(var4)(var6);
            var15 = var6.Text;
            var6 = {};
            var10 = 'text-md/medium';
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 'text-sm/medium';
case 4:
            var6['variant'] = var10;
            var10 = 'text-strong';
            if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = 'text-default';
case 6:
            var6['color'] = var10;
            var19 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 18;
            var17 = var10[var11];
            var17 = var19.bind(var4)(var17);
            var22 = var17.intl;
            var18 = var22.string;
            var17 = var10[var11];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17./6SnPw;
            var17 = var18.bind(var22)(var17);
            var6['children'] = var17;
            var6 = var16.bind(var4)(var15, var6);
            var15 = new Array(2);
            var15[0] = var6;
            var18 = _closure1_slot13;
            var6 = 19;
            var16 = var10[var6];
            var16 = var19.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var22 = 8;
            var16['hitSlop'] = var22;
            var22 = function onPress() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var3 = var8[var1];
                var1 = undefined;
                var9 = var7.bind(var1)(var3);
                var6 = var9.requestPushNotificationPermission;
                var3 = _closure1_slot12;
                var5 = var3.TO_SETTINGS;
                var3 = _closure1_slot11;
                var4 = var3.CHANNEL_BANNER;
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                var3 = var6.bind(var9)(var5, var4, var3);
                var4 = _closure1_slot1;
                var3 = 14;
                var3 = var8[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.CONTEXTUAL_REMINDER_ACTION;
                var2 = {};
                var6 = 15;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var9 = var9.NotificationNudgeAnalyticsAction;
                var9 = var9.ACCEPT;
                var2['action'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.NotificationNudgeSurface;
                var6 = var6.CHANNEL_BANNER;
                var2['prompt_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var16['onPress'] = var22;
            var21 = var21.ctaButton;
            var16['style'] = var21;
            var21 = 'button';
            var16['accessibilityRole'] = var21;
            var21 = _closure1_slot13;
            var10 = var10[var20];
            var10 = var19.bind(var4)(var10);
            var20 = var10.Text;
            var19 = {};
            var10 = 'text-sm/semibold';
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = 'text-xs/medium';
case 8:
            var19['variant'] = var10;
            var10 = 'text-brand';
            var19['color'] = var10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var22 = var12[var11];
            var22 = var10.bind(var4)(var22);
            var24 = var22.intl;
            var23 = var24.string;
            var22 = var12[var11];
            var22 = var10.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.SwOsUv;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var7['children'] = var15;
            var7 = var14.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot13;
            var6 = var12[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableHighlight;
            var6 = {'onPress': null, 'hitSlop': 8, 'accessibilityRole': 'button'};
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 20;
                    var3 = var8[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var3);
                    var4 = var5.setPushPermissionReactivationSeen;
                    var3 = _closure1_slot8;
                    var3 = var3.CHANNEL_BANNER;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var3 = 14;
                    var3 = var8[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var2 = _closure1_slot9;
                    var4 = var2.CONTEXTUAL_REMINDER_ACTION;
                    var3 = {};
                    var2 = 15;
                    var9 = var8[var2];
                    var9 = var7.bind(var1)(var9);
                    var9 = var9.NotificationNudgeAnalyticsAction;
                    var9 = var9.DISMISS;
                    var3['action'] = var9;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.NotificationNudgeSurface;
                    var2 = var2.CHANNEL_BANNER;
                    var3['prompt_type'] = var2;
                    var8 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                    var8 = _closure2_slot1;
                    var7 = var8.timing;
case 10:
                    var3['dismiss_logic'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
                    return var1;
                }
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
            var11 = _closure1_slot13;
            var9 = 21;
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
    var _closure1_slot16 = var1;
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
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PermissionPromptType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EventActionLocation;
    var _closure1_slot11 = var7;
    var4 = var4.EventActionType;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var8.BACKGROUND_SURFACE_HIGH;
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var3 = var8.BACKGROUND_BASE_LOW;
case 13:
            var2['backgroundColor'] = var3;
            var3 = 1;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var9 = var8.colors;
            if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var8 = var9.BORDER_SUBTLE;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var8 = var9.BORDER_MUTED;
case 16:
            var2['borderColor'] = var8;
            if(var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var8 = {};
            _fun0003_ip = 19; continue _fun0003;
case 17:
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
case 19:
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
            if(!var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var8 = 0;
case 20:
            var2['padding'] = var8;
            var8 = 'transparent';
            if(var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var10.bind(var6)(var9);
            var9 = var9.colors;
            var8 = var9.BACKGROUND_MOD_STRONG;
case 22:
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
            if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_12;
case 24:
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
    var _closure1_slot15 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatInputNotificationNudge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var _closure2_slot0 = var4;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 22;
            var1 = var8[var1];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = _closure1_slot7;
            var3[1] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.getGuildId;
                    var6 = var1.bind(var3)();
                    var1 = var3.isThread;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var5 = _closure1_slot7;
                    var4 = var5.isChannelMuted;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var6, var1);
                    _fun0005_ip = 28; continue _fun0005;
case 26:
                    var4 = _closure1_slot6;
                    var3 = var4.isMuted;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 28:
                    return var1;
                }
            };
            var3 = var7.bind(var9)(var3, var1);
            var7 = _closure1_slot1;
            var1 = 23;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var4);
            var3 = !var3;
            if(!var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = !var1;
case 29:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var4 = var8[var1];
            var10 = var7.bind(var5)(var4);
            var9 = var10.useShouldSeePushNotificationNudge;
            var4 = _closure1_slot8;
            var4 = var4.CHANNEL_BANNER;
            var4 = var9.bind(var10)(var4, var3);
            var1 = var8[var1];
            var10 = var7.bind(var5)(var1);
            var9 = var10.useNudgeExperimentConfigWithoutExposure;
            var1 = _closure1_slot8;
            var1 = var1.CHANNEL_BANNER;
            var12 = var9.bind(var10)(var1);
            var1 = 24;
            var1 = var8[var1];
            var9 = var7.bind(var5)(var1);
            var8 = var9.useSelectedTimeRecurringDismissibleContent;
            var1 = null;
            var7 = null;
            if(!var4) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var7 = null;
            if(!var3) { _fun0004_ip = 31; continue _fun0004 }
case 33:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 25;
            var3 = var10[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var7 = var3.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
case 31:
            var4 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 15;
            var3 = var11[var3];
            var11 = var10.bind(var5)(var3);
            var10 = var11.getNotificationNudgeCooldownMs;
            var13 = var1 == var12;
            var3 = undefined;
            if(var13) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = var12.timing;
case 34:
            var3 = var10.bind(var11)(var3);
            var4['cooldownDurationMs'] = var3;
            var14 = true;
            var18 = var9;
            var17 = var7;
            var16 = var4;
            var15 = undefined;
            var7 = var18[var8](var17, var16, var15, var14, var13);
            var4 = _closure1_slot3;
            var3 = 2;
            var7 = var4.bind(var5)(var7, var3);
            var3 = 0;
            var4 = var7[var3];
            var3 = 1;
            var3 = var7[var3];
            _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
            var1 = null;
            if(!(var4 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot13;
            var3 = _closure1_slot16;
            var2 = {};
            var6 = function onDismiss() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot10;
                var2 = var1.USER_DISMISS;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onDismiss'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();