// app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function UnmuteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.channel;
            var _closure2_slot0 = var11;
            var9 = var2.muteConfig;
            var7 = var2.navigation;
            var _closure2_slot1 = var7;
            var2 = _closure1_slot13;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var8 = var11.guild_id;
            var2 = new Array(3);
            var2[0] = var8;
            var8 = var11.id;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = var3.goBack;
                var1 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.handleUnmutePress;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = var2.guild_id;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var14 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.options;
            var1['style'] = var5;
            var12 = _closure1_slot10;
            var23 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 14;
            var5 = var6[var5];
            var5 = var23.bind(var4)(var5);
            var8 = var5.TableRow;
            var5 = {};
            var17 = _closure1_slot10;
            var7 = _closure1_slot1;
            var13 = 15;
            var13 = var6[var13];
            var16 = var7.bind(var4)(var13);
            var15 = {};
            var13 = true;
            var15['disableColor'] = var13;
            var18 = 16;
            var18 = var6[var18];
            var18 = var7.bind(var4)(var18);
            var15['source'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var5['icon'] = var15;
            var17 = _closure1_slot10;
            var15 = 17;
            var15 = var6[var15];
            var15 = var23.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var18 = 18;
            var19 = var6[var18];
            var19 = var23.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.format;
            var18 = var6[var18];
            var18 = var23.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.eC+9rq;
            var18 = {};
            var22 = 19;
            var22 = var6[var22];
            var25 = var23.bind(var4)(var22);
            var24 = var25.computeChannelName;
            var28 = _closure1_slot8;
            var27 = _closure1_slot7;
            var30 = var25;
            var29 = var11;
            var26 = true;
            var22 = var30[var24](var29, var28, var27, var26, var25);
            var18['name'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var5['label'] = var15;
            var5['onPress'] = var14;
            var5['start'] = var13;
            var5['end'] = var13;
            var8 = var12.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot10;
            var12 = 20;
            var6 = var6[var12];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['muteConfig'] = var9;
            var9 = var11.isPrivate;
            var9 = var9.bind(var11)();
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var10 = var11.bind(var4)(var10);
            var10 = var10.MuteSettingType;
            if(var9) { _fun0001_ip = 431; continue _fun0001 }
 423:
            var9 = var10.CHANNEL;
            _fun0001_ip = 437; continue _fun0001;
 431:
            var9 = var10.DM;
 437:
            var6['type'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function MuteOptions(arg1) {
        var1 = arg1;
        var11 = var1.channel;
        var _closure2_slot0 = var11;
        var2 = var1.applicationId;
        var _closure2_slot1 = var2;
        var10 = var1.navigation;
        var _closure2_slot2 = var10;
        var3 = _closure1_slot13;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var7 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getMuteOptions;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var7 = var8.bind(var9)(var7, var3);
        var _closure2_slot3 = var7;
        var9 = _closure1_slot3;
        var8 = var9.useCallback;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var2;
        var2 = function(arg1) {
            var2 = _closure2_slot2;
            var1 = var2.goBack;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleMuteSettingPress;
            var2 = {};
            var5 = _closure2_slot0;
            var6 = var5.id;
            var2['channelId'] = var6;
            var5 = var5.guild_id;
            var2['guildId'] = var5;
            var5 = function onOptionPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var6 = var1.muted;
                    var7 = var1.mute_config;
                    var1 = undefined;
                    if(!(var7 === var1)) { _fun0002_ip = 34; continue _fun0002 }
 32:
                    var7 = null;
 34:
                    if(!(var1 !== var6)) { _fun0002_ip = 377; continue _fun0002 }
 41:
                    var2 = var5.isThread;
                    var2 = var2.bind(var5)();
                    if(var2) { _fun0002_ip = 318; continue _fun0002 }
 57:
                    var12 = null;
                    if(!(var12 == var11)) { _fun0002_ip = 192; continue _fun0002 }
 66:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 11;
                    var3 = var8[var3];
                    var10 = var4.bind(var1)(var3);
                    var9 = var10.updateChannelOverrideSettings;
                    var3 = var5.getGuildId;
                    var8 = var3.bind(var5)();
                    var4 = var5.id;
                    var3 = {};
                    var3['muted'] = var6;
                    var14 = var12 != var7;
                    var13 = null;
                    if(!var14) { _fun0002_ip = 129; continue _fun0002 }
 126:
                    var13 = var7;
 129:
                    var3['mute_config'] = var13;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 12;
                    var2 = var14[var2];
                    var2 = var13.bind(var1)(var2);
                    var13 = var2.NotificationLabel;
                    var2 = var13.muted;
                    var16 = var2.bind(var13)(var6);
                    var20 = var10;
                    var19 = var8;
                    var18 = var4;
                    var17 = var3;
                    var2 = var20[var9](var19, var18, var17, var16, var15);
                    _fun0002_ip = 377; continue _fun0002;
 192:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 11;
                    var3 = var8[var3];
                    var10 = var4.bind(var1)(var3);
                    var9 = var10.updateAppDMOverrideSettings;
                    var3 = var5.getGuildId;
                    var8 = var3.bind(var5)();
                    var4 = var5.id;
                    var3 = {};
                    var3['muted'] = var6;
                    var13 = var12 != var7;
                    var12 = null;
                    if(!var13) { _fun0002_ip = 255; continue _fun0002 }
 252:
                    var12 = var7;
 255:
                    var3['mute_config'] = var12;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 12;
                    var2 = var13[var2];
                    var2 = var12.bind(var1)(var2);
                    var12 = var2.NotificationLabel;
                    var2 = var12.muted;
                    var15 = var2.bind(var12)(var6);
                    var20 = var10;
                    var19 = var8;
                    var18 = var4;
                    var17 = var11;
                    var16 = var3;
                    var2 = var20[var9](var19, var18, var17, var16, var15, var14);
                    _fun0002_ip = 377; continue _fun0002;
 318:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setNotificationSettings;
                    var2 = {};
                    var2['muted'] = var6;
                    var6 = null;
                    var8 = var6 != var7;
                    if(!var8) { _fun0002_ip = 366; continue _fun0002 }
 363:
                    var6 = var7;
 366:
                    var2['mute_config'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
 377:
                    return var1;
                }
            };
            var2['onOptionPress'] = var5;
            var5 = arg1;
            var2['muteDurationSeconds'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var8.bind(var9)(var2, var3);
        var _closure2_slot4 = var2;
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.options;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var7 = arg2;
            var5 = var1.label;
            var1 = var1.duration;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot10;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var5;
            var6 = function onPress() {
                var3 = _closure2_slot4;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var6;
            var6 = 0;
            var6 = var6 === var7;
            var1['start'] = var6;
            var6 = _closure2_slot3;
            var8 = var6.length;
            var6 = 1;
            var6 = var8 - var6;
            var6 = var7 === var6;
            var1['end'] = var6;
            var1 = var4.bind(var3)(var2, var1, var5);
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function NotificationSettingsButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var15 = var2.isMuted;
            var14 = var2.isGuildMuted;
            var7 = var2.messageNotifications;
            var _closure2_slot1 = var7;
            var13 = var2.guildMessageNotifications;
            var2 = _closure1_slot13;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 21;
            var2 = var21[var2];
            var5 = var19.bind(var4)(var2);
            var2 = var5.useNavigation;
            var2 = var2.bind(var5)();
            var _closure2_slot2 = var2;
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.isThread;
                    var3 = var2.bind(var3)();
                    if(var3) { _fun0004_ip = 50; continue _fun0004 }
 23:
                    var5 = _closure2_slot2;
                    var4 = var5.navigate;
                    var3 = _closure1_slot9;
                    var3 = var3.NOTIFICATIONS;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 87; continue _fun0004;
 50:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showThreadNotificationsBottomSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var6.bind(var8)(var2, var5);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getMessageNotificationsText;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var5.bind(var6)(var1, var2);
            var1 = 23;
            var1 = var21[var1];
            var2 = var19.bind(var4)(var1);
            var1 = var2.useVoiceActivityNotificationSettingsExperiment;
            var12 = var1.bind(var2)(var3);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var7 = _closure1_slot10;
            var18 = 14;
            var5 = var21[var18];
            var5 = var19.bind(var4)(var5);
            var6 = var5.TableRow;
            var5 = {};
            var11 = 18;
            var16 = var21[var11];
            var16 = var19.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var11 = var21[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.h850Sk;
            var11 = var16.bind(var17)(var11);
            var5['label'] = var11;
            var5['onPress'] = var8;
            var16 = _closure1_slot11;
            var11 = _closure1_slot4;
            var8 = {};
            var17 = var10.trailing;
            var8['style'] = var17;
            var22 = _closure1_slot10;
            var17 = 17;
            var17 = var21[var17];
            var17 = var19.bind(var4)(var17);
            var20 = var17.Text;
            var17 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var17['children'] = var23;
            var20 = var22.bind(var4)(var20, var17);
            var17 = new Array(2);
            var17[0] = var20;
            var20 = _closure1_slot10;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.TableRow;
            var19 = var18.Arrow;
            var18 = {};
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var8['children'] = var17;
            var8 = var16.bind(var4)(var11, var8);
            var5['trailing'] = var8;
            var8 = var15;
            if(var8) { _fun0003_ip = 399; continue _fun0003 }
 396:
            var8 = var14;
 399:
            var5['disabled'] = var8;
            var8 = true;
            var5['start'] = var8;
            var5['end'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var10.hint;
            var6['style'] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 24;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.MuteSettingsHint;
            var9 = {};
            var9['isMuted'] = var15;
            var9['isGuildMuted'] = var14;
            var9['guildMessageNotifications'] = var13;
            var9['showVoiceActivityNotificationOptions'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'backgroundColor': null, 'padding': 16};
    var11 = 9;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var11 = 16;
    var4['container'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['options'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['trailing'] = var10;
    var10 = {'marginTop': 8, 'paddingHorizontal': 12};
    var4['hint'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot13;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 21;
            var2 = var3[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.useNavigation;
            var16 = var2.bind(var7)();
            var _closure2_slot0 = var16;
            var2 = 25;
            var2 = var3[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.useRoute;
            var2 = var2.bind(var7)();
            var7 = var2.params;
            var9 = var7.channelId;
            var _closure2_slot1 = var9;
            var2 = var2.params;
            var18 = var2.applicationId;
            var2 = 26;
            var7 = var3[var2];
            var12 = var4.bind(var5)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var11.bind(var12)(var10, var7);
            var _closure2_slot2 = var13;
            var2 = var3[var2];
            var10 = var4.bind(var5)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 39; continue _fun0006 }
 30:
                    var4 = _closure2_slot2;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var7.bind(var10)(var4, var2);
            var _closure2_slot3 = var2;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var2;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMuteSettingLabel;
                var2 = _closure2_slot2;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var10.bind(var11)(var4, var7);
            var _closure2_slot4 = var4;
            var10 = _closure1_slot3;
            var7 = var10.useMemo;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMuteSettingSublabel;
                var2 = _closure2_slot2;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var7.bind(var10)(var2, var4);
            var _closure2_slot5 = var2;
            var7 = _closure1_slot3;
            var4 = var7.useLayoutEffect;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var13 = _closure2_slot4;
                var11 = _closure2_slot5;
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var14 = '';
                var12 = ' (';
                var10 = ')';
                var4 = var14[var7](var13, var12, var11, var10, var9);
                var1['title'] = var4;
                var4 = function headerTitle() {
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.GenericHeaderTitle;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1['title'] = var6;
                    var5 = _closure2_slot5;
                    var1['subtitle'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var7)(var2);
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getMuteSettings;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var7)(var1, var2);
            var17 = var1.muteConfig;
            var12 = var1.messageNotifications;
            var11 = var1.guildMessageNotifications;
            var15 = var1.muted;
            var14 = var1.guildMuted;
            var2 = _closure1_slot1;
            var1 = 28;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = var1.bottom;
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0005_ip = 561; continue _fun0005 }
 381:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['paddingBottom'] = var9;
            var6[1] = var7;
            var2['style'] = var6;
            var10 = _closure1_slot10;
            if(var15) { _fun0005_ip = 453; continue _fun0005 }
 426:
            var7 = _closure1_slot15;
            var6 = {};
            var6['channel'] = var13;
            var6['applicationId'] = var18;
            var6['navigation'] = var16;
            var7 = var10.bind(var5)(var7, var6);
            _fun0005_ip = 483; continue _fun0005;
 453:
            var9 = _closure1_slot14;
            var6 = {};
            var6['channel'] = var13;
            var6['applicationId'] = var18;
            var6['muteConfig'] = var17;
            var6['navigation'] = var16;
            var7 = var10.bind(var5)(var9, var6);
 483:
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var13.isPrivate;
            var7 = var7.bind(var13)();
            var7 = !var7;
            if(!var7) { _fun0005_ip = 547; continue _fun0005 }
 507:
            var10 = _closure1_slot10;
            var9 = _closure1_slot16;
            var8 = {};
            var8['isMuted'] = var15;
            var8['isGuildMuted'] = var14;
            var8['channel'] = var13;
            var8['messageNotifications'] = var12;
            var8['guildMessageNotifications'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 547:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 561:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();