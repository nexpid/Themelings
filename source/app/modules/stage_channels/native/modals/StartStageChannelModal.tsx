// app/modules/stage_channels/native/modals/StartStageChannelModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function closeModal() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.popWithKey;
        var2 = _closure1_slot11;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function NavigationBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var1 = _closure1_slot16;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            var2 = var1 != var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot14;
            var3 = _closure1_slot7;
            var2 = {};
            var8 = var7.contentContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.contentTopSpacing;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot14;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var6 = 12;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var10 = 'button';
            var6['accessibilityRole'] = var10;
            var10 = 13;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.cpT0Cq;
            var10 = var11.bind(var12)(var10);
            var6['accessibilityLabel'] = var10;
            var10 = _closure1_slot17;
            var6['onPress'] = var10;
            var11 = _closure1_slot14;
            var13 = _closure1_slot1;
            var9 = 14;
            var9 = var14[var9];
            var10 = var13.bind(var5)(var9);
            var9 = {};
            var12 = 15;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var9['source'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function HeaderIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guild;
            var1 = _closure1_slot16;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 17;
            var1 = var9[var7];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var8 = var8.guildIcon;
            var1['style'] = var8;
            var8 = _closure1_slot0;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.GuildIconSizes;
            var7 = var7.LARGE;
            var1['size'] = var7;
            var1['guild'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 16;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function NotificationToggle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.sendStartNotification;
            var6 = var1.onToggle;
            var1 = _closure1_slot16;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var18 = _closure1_slot0;
            var15 = _closure1_slot3;
            var1 = 18;
            var1 = var15[var1];
            var7 = var18.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = 19;
            var1 = var15[var1];
            var1 = var18.bind(var4)(var1);
            var1 = var1.HotspotStore;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 19;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.HotspotStore;
                var2 = var3.hasHotspot;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.HotspotLocations;
                var1 = var1.LIVE_STAGE_NOTIFICATION_BADGE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot14;
            var11 = 20;
            var1 = var15[var11];
            var1 = var18.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var7 = var20.notificationToggle;
            var1['DEPRECATED_style'] = var7;
            var10 = _closure1_slot15;
            var9 = _closure1_slot7;
            var7 = {};
            var12 = var20.label;
            var7['style'] = var12;
            var14 = _closure1_slot14;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.FormLabel;
            var11 = {};
            var23 = 13;
            var16 = var15[var23];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var23];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.BYJgew;
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var12 = var14.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = null;
            if(!var13) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var15 = _closure1_slot14;
            var14 = _closure1_slot7;
            var13 = {};
            var16 = var20.pill;
            var13['style'] = var16;
            var18 = _closure1_slot14;
            var22 = _closure1_slot0;
            var19 = _closure1_slot3;
            var16 = 21;
            var16 = var19[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'style': null, 'variant': 'text-xxs/bold', 'color': 'always-white'};
            var20 = var20.pillLabel;
            var16['style'] = var20;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.y2b7CA;
            var19 = var20.bind(var21)(var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 7:
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var10.bind(var4)(var9, var7);
            var1['label'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot14;
            var6 = _closure1_slot1;
            var9 = _closure1_slot3;
            var5 = 22;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['selected'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var14 = 1;
    var5 = var7[var14];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var _closure1_slot6 = var8;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot7 = var9;
    var5 = var5.ScrollView;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.MAX_STAGE_TOPIC_LENGTH;
    var _closure1_slot10 = var9;
    var5 = var5.START_STAGE_CHANNEL_EVENT_MODAL_KEY;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildScheduledEventPrivacyLevel;
    var _closure1_slot13 = var5;
    var15 = 8;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot14 = var9;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var11['flex'] = var14;
    var5['keyboardAwareView'] = var11;
    var11 = {};
    var12 = 10;
    var11['right'] = var12;
    var5['closeButtonContainer'] = var11;
    var11 = {};
    var11['flex'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var14;
    var5['container'] = var11;
    var11 = {};
    var14 = 16;
    var11['paddingHorizontal'] = var14;
    var5['contentContainer'] = var11;
    var11 = {};
    var11['paddingTop'] = var14;
    var5['contentTopSpacing'] = var11;
    var16 = 'center';
    var11 = {'alignItems': 'center', 'paddingBottom': 24};
    var5['header'] = var11;
    var11 = {'marginTop': 16, 'marginBottom': 8};
    var5['headerTitle'] = var11;
    var11 = {};
    var11['textAlign'] = var16;
    var5['headerSubtitle'] = var11;
    var11 = {'padding': 12, 'width': '100%', 'borderRadius': null, 'backgroundColor': null, 'marginBottom': 16};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var11['borderRadius'] = var16;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var11['backgroundColor'] = var16;
    var5['textInput'] = var11;
    var11 = {};
    var11['marginTop'] = var14;
    var5['startButton'] = var11;
    var11 = {};
    var11['paddingTop'] = var15;
    var5['error'] = var11;
    var11 = {'lineHeight': 16, 'paddingTop': 8};
    var5['optionExplanation'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var11['borderRadius'] = var15;
    var5['guildIcon'] = var11;
    var11 = {'display': 'flex', 'alignItems': 'center', 'flexDirection': 'row'};
    var5['label'] = var11;
    var11 = {'backgroundColor': null, 'paddingHorizontal': 4, 'paddingVertical': 2, 'marginStart': 8};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var11['backgroundColor'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var11['borderRadius'] = var15;
    var5['pill'] = var11;
    var11 = {};
    var15 = 'uppercase';
    var11['textTransform'] = var15;
    var5['pillLabel'] = var11;
    var11 = {};
    var11['marginTop'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var11['backgroundColor'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var5['notificationToggle'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11['marginBottom'] = var12;
    var5['ageVerificationNotice'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot16 = var5;
    var5 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var13 = var1.guild;
            var2 = var1.channel;
            var3 = var1.onStageStarted;
            var _closure2_slot0 = var3;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var5 = undefined;
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
            var1 = _closure1_slot16;
            var11 = var1.bind(var5)();
            var7 = _closure1_slot6;
            var4 = var7.useImperativeHandle;
            var3 = arg2;
            var1 = function() {
                var1 = {};
                var2 = function renderRightButton() {
                    var1 = _closure1_slot16;
                    var4 = undefined;
                    var8 = var1.bind(var4)();
                    var3 = _closure1_slot14;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 23;
                    var1 = var7[var1];
                    var2 = var6.bind(var4)(var1);
                    var1 = {};
                    var8 = var8.closeButtonContainer;
                    var1['style'] = var8;
                    var8 = 'button';
                    var1['accessibilityRole'] = var8;
                    var10 = _closure1_slot0;
                    var5 = 13;
                    var8 = var7[var5];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var7[var5];
                    var5 = var10.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5.cpT0Cq;
                    var5 = var8.bind(var9)(var5);
                    var1['accessibilityLabel'] = var5;
                    var5 = 15;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var1['source'] = var5;
                    var5 = _closure2_slot1;
                    var1['onPress'] = var5;
                    var5 = true;
                    var1['disableColor'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['renderRightButton'] = var2;
                return var1;
            };
            var1 = var4.bind(var7)(var3, var1);
            var1 = var7.useState;
            var2 = var1.bind(var7)(var2);
            var1 = _closure1_slot5;
            var10 = 2;
            var1 = var1.bind(var5)(var2, var10);
            var6 = 0;
            var12 = var1[var6];
            var _closure2_slot2 = var12;
            var4 = 1;
            var27 = var1[var4];
            var3 = var7.useMemo;
            var1 = var12.id;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot2;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var3.bind(var7)(var1, var2);
            var _closure2_slot3 = var21;
            var3 = var7.useState;
            var2 = null;
            var1 = var2 == var21;
            var8 = undefined;
            if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var8 = var21.topic;
case 9:
            var14 = var2 != var8;
            var19 = '';
            var1 = var19;
            if(!var14) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = var8;
case 11:
            var3 = var3.bind(var7)(var1);
            var1 = _closure1_slot5;
            var1 = var1.bind(var5)(var3, var10);
            var17 = var1[var6];
            _closure2_slot4 = var17;
            var25 = var1[var4];
            _closure2_slot5 = var25;
            var1 = _closure1_slot13;
            var1 = var1.GUILD_ONLY;
            var8 = _closure1_slot6;
            var7 = var8.useState;
            var3 = var2 == var21;
            var14 = undefined;
            if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var14 = var21.privacy_level;
case 13:
            var3 = var1;
            if(!(var2 != var14)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = var14;
case 15:
            var3 = var7.bind(var8)(var3);
            var7 = _closure1_slot5;
            var3 = var7.bind(var5)(var3, var10);
            var18 = var3[var6];
            _closure2_slot6 = var18;
            var3 = var3[var4];
            _closure2_slot7 = var3;
            var8 = _closure1_slot6;
            var14 = var8.useState;
            var3 = false;
            var3 = var14.bind(var8)(var3);
            var3 = var7.bind(var5)(var3, var10);
            var16 = var3[var6];
            var3 = var3[var4];
            _closure2_slot8 = var3;
            var3 = var8.useState;
            var3 = var3.bind(var8)(var2);
            var3 = var7.bind(var5)(var3, var10);
            var15 = var3[var6];
            var3 = var3[var4];
            _closure2_slot9 = var3;
            var8 = _closure1_slot0;
            var14 = _closure1_slot3;
            var7 = 24;
            var3 = var14[var7];
            var20 = var8.bind(var5)(var3);
            var3 = var20.useCanSendStageStartNotification;
            var3 = var3.bind(var20)(var12);
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.useDefaultSendStartStageNotificationToggle;
            var20 = var7.bind(var8)(var12);
            var8 = var2 == var21;
            if(!var8) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var8 = var3;
case 17:
            _closure2_slot10 = var8;
            var14 = _closure1_slot6;
            var7 = var14.useState;
            var3 = var8;
            if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var20;
case 19:
            var7 = var7.bind(var14)(var3);
            var3 = _closure1_slot5;
            var3 = var3.bind(var5)(var7, var10);
            var24 = var3[var6];
            _closure2_slot11 = var24;
            var3 = var3[var4];
            _closure2_slot12 = var3;
            var10 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 18;
            var3 = var7[var3];
            var14 = var10.bind(var5)(var3);
            var6 = var14.useStateFromStores;
            var3 = 19;
            var3 = var7[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.HotspotStore;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 19;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.HotspotStore;
                var2 = var3.hasHotspot;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.HotspotLocations;
                var1 = var1.LIVE_STAGE_NOTIFICATION_BADGE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var14)(var4, var3);
            _closure2_slot13 = var3;
            var3 = {};
            var3['stageInstance'] = var21;
            var3['privacyDefault'] = var1;
            _closure2_slot14 = var3;
            var6 = _closure1_slot6;
            var1 = var6.useRef;
            var1 = var1.bind(var6)(var3);
            _closure2_slot15 = var1;
            var3 = var6.useEffect;
            var1 = function() {
                var2 = _closure2_slot15;
                var1 = _closure2_slot14;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var6)(var1);
            var4 = var6.useEffect;
            var1 = var12.id;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot15;
                    var1 = var1.current;
                    var2 = var1.stageInstance;
                    var6 = var1.privacyDefault;
                    var5 = _closure2_slot7;
                    var4 = null;
                    var8 = var4 == var2;
                    var1 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var7 = var2.privacy_level;
case 21:
                    if(!(var4 != var7)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var6 = var7;
case 23:
                    var5 = var5.bind(var1)(var6);
                    if(!(var4 != var2)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var3 = _closure2_slot5;
                    var2 = var2.topic;
                    var2 = var3.bind(var1)(var2);
case 25:
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var3 = _closure1_slot1;
            var1 = 25;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var12, var21, var18);
            var28 = var1.helpText;
            var1 = var1.publicDisabled;
            _closure2_slot16 = var1;
            var1 = 26;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 27;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.START_STAGE_OPENED;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var8 = _closure2_slot3;
                    var7 = var8.id;
case 27:
                    var2['stage_instance_id'] = var7;
                    var7 = _closure2_slot16;
                    var7 = !var7;
                    var2['can_start_public_stage'] = var7;
                    var6 = _closure2_slot2;
                    var6 = var6.guild_id;
                    var2['guild_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1);
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                            var4 = _closure2_slot4;
                            var3 = '';
                            if(!(var3 !== var4)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                            var3 = _closure2_slot6;
                            var7 = null;
                            if(!(var7 != var3)) { _fun0007_ip = 31; continue _fun0007 }
case 22:
                            var5 = _closure2_slot8;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot9;
                            var3 = var3.bind(var4)(var7);
                            var6 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 28;
                            var5 = var8[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.dismissGlobalKeyboard;
                            var5 = var5.bind(var6)();
case 33: // try_start_0
                            var5 = _closure2_slot3;
                            if(!(var7 == var5)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                            var6 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 29;
                            var5 = var8[var5];
                            var11 = var6.bind(var4)(var5);
                            var10 = var11.startStage;
                            var15 = _closure2_slot2;
                            var14 = _closure2_slot4;
                            var13 = _closure2_slot6;
                            var12 = _closure2_slot11;
                            var16 = var11;
                            var5 = var16[var10](var15, var14, var13, var12, var11);
                            SaveGenerator(address=160);
case 36:
                            return var5;
case 37:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0007_ip = 8; continue _fun0007 }
case 38:
                            var8 = _closure2_slot10;
                            var6 = var8;
                            if(!var8) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                            var6 = _closure2_slot13;
case 39:
                            if(!var6) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                            var8 = _closure1_slot2;
                            var11 = _closure1_slot3;
                            var6 = 30;
                            var6 = var11[var6];
                            var9 = var8.bind(var4)(var6);
                            var8 = var9.hideHotspot;
                            var10 = _closure1_slot0;
                            var6 = 19;
                            var6 = var11[var6];
                            var6 = var10.bind(var4)(var6);
                            var6 = var6.HotspotLocations;
                            var6 = var6.LIVE_STAGE_NOTIFICATION_BADGE;
                            var6 = var8.bind(var9)(var6);
                            _fun0007_ip = 41; continue _fun0007;
case 8: // try_end0
                            return var5;
case 34: // try_start_1
                            var6 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 29;
                            var5 = var8[var5];
                            var10 = var6.bind(var4)(var5);
                            var9 = var10.editStage;
                            var8 = _closure2_slot2;
                            var6 = _closure2_slot4;
                            var5 = _closure2_slot6;
                            var5 = var9.bind(var10)(var8, var6, var5);
                            SaveGenerator(address=296);
case 43:
                            return var5;
case 44:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0007_ip = 45; continue _fun0007 }
case 41:
                            var8 = _closure2_slot8;
                            var6 = false;
                            var6 = var8.bind(var4)(var6);
                            var6 = _closure2_slot9;
                            var6 = var6.bind(var4)(var7);
                            var6 = _closure2_slot1;
                            if(!(var7 == var6)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                            var6 = _closure1_slot17;
                            var6 = var6.bind(var4)();
                            _fun0007_ip = 48; continue _fun0007;
case 46:
                            var6 = _closure2_slot1;
                            var6 = var6.bind(var4)();
case 48:
                            var6 = _closure2_slot0;
                            if(!(var7 != var6)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot2;
                            var6 = var7.bind(var4)(var6);
case 49: // try_end1
                            _fun0007_ip = 31; continue _fun0007;
case 45:
                            return var5;
case 51: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 31;
                            var3 = var7[var3];
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.APIError;
                            var5 = var3.prototype;
                            var5 = Object.create(var5, {constructor: {value: var3}});
                            var16 = var5;
                            var15 = var6;
                            var3 = new var16[var3](var15, var14);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = _closure2_slot9;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot8;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
case 31:
                            var2 = undefined;
                            return var2;
case 29:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var20 = var1.bind(var5)();
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var1 = {};
            var6 = var11.header;
            var1['style'] = var6;
            var22 = _closure1_slot14;
            var14 = _closure1_slot19;
            var6 = {};
            var6['guild'] = var13;
            var14 = var22.bind(var5)(var14, var6);
            var6 = new Array(3);
            var6[0] = var14;
            var22 = _closure1_slot14;
            var14 = 21;
            var7 = var7[var14];
            var7 = var10.bind(var5)(var7);
            var10 = var7.Text;
            var7 = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-lg/semibold', 'color': 'mobile-text-heading-primary'};
            var26 = var11.headerTitle;
            var7['style'] = var26;
            if(!(var2 != var21)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var26 = 13;
            var29 = var32[var26];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var26 = var32[var26];
            var26 = var31.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.5BKP4y;
            var26 = var29.bind(var30)(var26);
            _fun0004_ip = 54; continue _fun0004;
case 52:
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var29 = 13;
            var30 = var33[var29];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.DDF0cJ;
            var26 = var30.bind(var31)(var29);
case 54:
            var7['children'] = var26;
            var7 = var22.bind(var5)(var10, var7);
            var6[1] = var7;
            var22 = _closure1_slot14;
            var10 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var14];
            var7 = var10.bind(var5)(var7);
            var10 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var26 = var11.headerSubtitle;
            var7['style'] = var26;
            if(!(var2 != var21)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var26 = 13;
            var29 = var32[var26];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var26 = var32[var26];
            var26 = var31.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.I+9bLx;
            var26 = var29.bind(var30)(var26);
            _fun0004_ip = 57; continue _fun0004;
case 55:
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var29 = 13;
            var30 = var33[var29];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.bqQIwa;
            var26 = var30.bind(var31)(var29);
case 57:
            var7['children'] = var26;
            var7 = var22.bind(var5)(var10, var7);
            var6[2] = var7;
            var1['children'] = var6;
            var7 = var4.bind(var5)(var3, var1);
            var4 = _closure1_slot15;
            var3 = _closure1_slot8;
            var1 = {'keyboardShouldPersistTaps': 'handled', 'showsVerticalScrollIndicator': false, 'alwaysBounceVertical': false};
            var6 = var11.container;
            var1['style'] = var6;
            var10 = var11.contentContainer;
            var6 = new Array(2);
            var6[0] = var10;
            var22 = var2 != var13;
            var10 = null;
            if(!var22) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var10 = var11.contentTopSpacing;
case 58:
            var6[1] = var10;
            var1['contentContainerStyle'] = var6;
            var6 = new Array(9);
            var6[0] = var7;
            var22 = _closure1_slot14;
            var10 = _closure1_slot1;
            var30 = _closure1_slot3;
            var7 = 32;
            var7 = var30[var7];
            var10 = var10.bind(var5)(var7);
            var7 = {};
            var29 = _closure1_slot0;
            var26 = 13;
            var31 = var30[var26];
            var31 = var29.bind(var5)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var30[var26];
            var31 = var29.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.5FPBOB;
            var31 = var32.bind(var33)(var31);
            var7['children'] = var31;
            var7 = var22.bind(var5)(var10, var7);
            var6[1] = var7;
            var22 = _closure1_slot14;
            var7 = 20;
            var7 = var30[var7];
            var7 = var29.bind(var5)(var7);
            var10 = var7.FormInput;
            var7 = {'style': null, 'showBorder': false, 'showTopContainer': false, 'multiline': false};
            var31 = var11.textInput;
            var7['style'] = var31;
            var31 = _closure1_slot10;
            var7['maxLength'] = var31;
            var7['value'] = var17;
            var31 = var30[var26];
            var31 = var29.bind(var5)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var30[var26];
            var31 = var29.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.ZwWruY;
            var31 = var32.bind(var33)(var31);
            var7['placeholder'] = var31;
            var7['onChange'] = var25;
            var25 = true;
            var7['autoFocus'] = var25;
            var25 = 33;
            var25 = var30[var25];
            var25 = var29.bind(var5)(var25);
            var25 = var25.ClearButtonVisibility;
            var25 = var25.WITH_CONTENT;
            var7['clearButtonVisibility'] = var25;
            var7 = var22.bind(var5)(var10, var7);
            var6[2] = var7;
            var7 = var2 != var28;
            if(!var7) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var25 = _closure1_slot14;
            var22 = _closure1_slot0;
            var10 = _closure1_slot3;
            var10 = var10[var14];
            var10 = var22.bind(var5)(var10);
            var22 = var10.Text;
            var10 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var29 = var11.optionExplanation;
            var10['style'] = var29;
            var10['children'] = var28;
            var7 = var25.bind(var5)(var22, var10);
case 60:
            var6[3] = var7;
            var7 = var2 != var13;
            if(!var7) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var25 = _closure1_slot14;
            var22 = _closure1_slot1;
            var28 = _closure1_slot3;
            var10 = 34;
            var10 = var28[var10];
            var22 = var22.bind(var5)(var10);
            var10 = {};
            var10['guild'] = var13;
            var10['channel'] = var12;
            var10['onChangeChannel'] = var27;
            var7 = var25.bind(var5)(var22, var10);
case 62:
            var6[4] = var7;
            var7 = null;
            if(!var8) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var22 = _closure1_slot14;
            var10 = _closure1_slot20;
            var8 = {};
            var8['sendStartNotification'] = var24;
            var23 = function onToggle() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissGlobalKeyboard;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot12;
                var2 = _closure2_slot11;
                var2 = !var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onToggle'] = var23;
            var7 = var22.bind(var5)(var10, var8);
case 64:
            var6[5] = var7;
            var10 = _closure1_slot14;
            var8 = _closure1_slot1;
            var22 = _closure1_slot3;
            var7 = 35;
            var7 = var22[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var22 = _closure1_slot17;
            var7['onConfirmPress'] = var22;
            var22 = var11.ageVerificationNotice;
            var7['style'] = var22;
            var12 = var12.id;
            var7['channelId'] = var12;
            var7 = var10.bind(var5)(var8, var7);
            var6[6] = var7;
            var8 = var2 != var15;
            var7 = null;
            if(!var8) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var12 = _closure1_slot14;
            var10 = _closure1_slot0;
            var8 = _closure1_slot3;
            var8 = var8[var14];
            var8 = var10.bind(var5)(var8);
            var10 = var8.Text;
            var8 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-feedback-critical'};
            var14 = var11.error;
            var8['style'] = var14;
            var14 = var15.getAnyErrorMessage;
            var14 = var14.bind(var15)();
            var8['children'] = var14;
            var7 = var12.bind(var5)(var10, var8);
case 66:
            var6[7] = var7;
            var10 = _closure1_slot14;
            var8 = _closure1_slot7;
            var7 = {};
            var12 = var11.startButton;
            var7['style'] = var12;
            var15 = _closure1_slot14;
            var14 = _closure1_slot0;
            var22 = _closure1_slot3;
            var12 = 36;
            var12 = var22[var12];
            var12 = var14.bind(var5)(var12);
            var14 = var12.Button;
            var12 = {};
            if(!(var2 != var21)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var24 = _closure1_slot0;
            var21 = _closure1_slot3;
            var22 = var21[var26];
            var22 = var24.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var26];
            var21 = var24.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.K344S7;
            var21 = var22.bind(var23)(var21);
            _fun0004_ip = 70; continue _fun0004;
case 68:
            var25 = _closure1_slot0;
            var22 = _closure1_slot3;
            var23 = var22[var26];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.s8mM8A;
            var21 = var23.bind(var24)(var22);
case 70:
            var12['text'] = var21;
            var12['onPress'] = var20;
            var17 = var19 === var17;
            if(var17) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var17 = var2 == var18;
case 71:
            var12['disabled'] = var17;
            var12['loading'] = var16;
            var12 = var15.bind(var5)(var14, var12);
            var7['children'] = var12;
            var7 = var10.bind(var5)(var8, var7);
            var6[8] = var7;
            var1['children'] = var6;
            var10 = var4.bind(var5)(var3, var1);
            var1 = var10;
            if(!(var2 == var13)) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var12 = _closure1_slot3;
            var2 = 37;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SafeAreaPaddingView;
            var2 = {'top': true, 'bottom': true};
            var6 = var11.container;
            var2['style'] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot1;
            var6 = 38;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = var11.keyboardAwareView;
            var6['style'] = var11;
            var12 = _closure1_slot14;
            var11 = _closure1_slot18;
            var9 = {};
            var9['guild'] = var13;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 73:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 39;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/modals/StartStageChannelModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NotificationToggle'] = var2;
    return var1;
})();