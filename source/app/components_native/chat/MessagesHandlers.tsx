// app/components_native/chat/MessagesHandlers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function getCodedLinks(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var2 = _closure1_slot51;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var4 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.messageReference;
            var2 = null;
            if(!(var2 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = var1.messageSnapshots;
            var4 = var4.length;
            var6 = 0;
            if(!(!(var4 > var6))) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var1.codedLinks;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var5 = var1.messageSnapshots;
            var5 = var5[var6];
            var5 = var5.message;
            var4 = var5.codedLinks;
case 7:
            return var4;
case 4:
            var4 = _closure1_slot16;
            var3 = var4.getMessageByReference;
            var1 = var1.messageReference;
            var1 = var3.bind(var4)(var1);
            var1 = var1.message;
            if(!(var2 != var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var1.codedLinks;
            return var1;
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot68 = var1;
    var1 = ['messageId'];
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildVocalChannelType;
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildLurker;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot26 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot27 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot35 = var4;
    var4 = 30;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot36 = var7;
    var7 = var4.ActivityTypes;
    var _closure1_slot37 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot38 = var7;
    var7 = var4.AnalyticsGameOpenTypes;
    var _closure1_slot39 = var7;
    var7 = var4.AnalyticsLocations;
    var _closure1_slot40 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot41 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot42 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot43 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot44 = var7;
    var7 = var4.ChannelTypes;
    var _closure1_slot45 = var7;
    var7 = var4.GuildFeatures;
    var _closure1_slot46 = var7;
    var7 = var4.LinkingTypes;
    var _closure1_slot47 = var7;
    var7 = var4.ME;
    var _closure1_slot48 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot49 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot50 = var7;
    var7 = var4.MessageTypes;
    var _closure1_slot51 = var7;
    var7 = var4.Permissions;
    var _closure1_slot52 = var7;
    var7 = var4.Routes;
    var _closure1_slot53 = var7;
    var7 = var4.UpsellTypes;
    var _closure1_slot54 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot55 = var7;
    var4 = var4.WebBrowserType;
    var _closure1_slot56 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot57 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot58 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingTab;
    var _closure1_slot59 = var4;
    var4 = 34;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot60 = var4;
    var4 = 35;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot61 = var4;
    var4 = 36;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTagTypes;
    var _closure1_slot62 = var4;
    var4 = 37;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SeparatorAction;
    var _closure1_slot63 = var4;
    var4 = 38;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot64 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot65 = var4;
    var4 = 39;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetySystemNotificationCtaType;
    var _closure1_slot66 = var4;
    var4 = 40;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot67 = var4;
    var2 = function() {
        var4 = _closure1_slot9;
        var3 = function MessagesHandlers(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var3;
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['getParams'] = var4;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure3_slot0;
                    var2 = var2.params;
                    var3 = var2.getMessage;
                    var2 = undefined;
                    var5 = var3.bind(var2)(var4);
                    if(!(var1 != var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot22;
                    var3 = var4.getChannel;
                    var2 = var5.channel_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = var1 == var4;
                    var2 = null;
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = {};
                    var3['message'] = var5;
                    var3['messageChannel'] = var4;
                    var2 = var3;
case 14:
                    return var2;
case 12:
                    return var1;
case 10:
                    return var1;
                }
            };
            var3['getMessageData'] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isAlertOrActionSheetOpen;
                var1 = _closure3_slot0;
                var1 = var1.params;
                var1 = var1.selectedChannelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3['isModalOrActionsheetObstructing'] = var4;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var _closure4_slot0 = var2;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var _closure4_slot1 = var3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var3 = 43;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 42;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.handleMessagesTapImage;
                        var2 = {};
                        var4 = _closure4_slot0;
                        var2['tapImageData'] = var4;
                        var4 = false;
                        var2['allowWithinModal'] = var4;
                        var1 = _closure4_slot1;
                        var4 = var1.message;
                        var2['message'] = var4;
                        var1 = var1.messageChannel;
                        var2['messageChannel'] = var1;
                        var1 = _closure3_slot0;
                        var1 = var1.params;
                        var1 = var1.selectedChannelId;
                        var2['selectedChannelId'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapImage'] = var4;
            var4 = function() {
                var4 = _closure1_slot7;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var2 = undefined;
                            var7 = undefined;
                            var8 = undefined;
                            var5 = undefined;
                            var14 = undefined;
                            var4 = _closure3_slot1;
                            var3 = var4.isModalOrActionsheetObstructing;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var4 = 44;
                            var4 = var9[var4];
                            var9 = var6.bind(var2)(var4);
                            var6 = var9.getNativeSyntheticEventData;
                            var4 = arg1;
                            var4 = var6.bind(var9)(var4);
                            var6 = var4.data;
                            var4 = var6.channelId;
                            var7 = var4;
                            var8 = var6.guildId;
                            var5 = var6.messageId;
                            var6 = null;
                            var4 = var6 != var4;
                            var9 = null;
                            if(!var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                            var12 = _closure1_slot22;
                            var11 = var12.getChannel;
                            var4 = var7;
                            var9 = var11.bind(var12)(var4);
case 22:
                            var12 = _closure1_slot26;
                            var4 = var12.getGuild;
                            var11 = var8;
                            var4 = var4.bind(var12)(var11);
                            var13 = _closure1_slot1;
                            var15 = _closure1_slot3;
                            var12 = 45;
                            var12 = var15[var12];
                            var15 = var13.bind(var2)(var12);
                            var13 = var15.trackDiscordLinkClicked;
                            var12 = {};
                            var12['guildId'] = var11;
                            var16 = var7;
                            var12['channelId'] = var16;
                            var16 = var5;
                            var12['messageId'] = var16;
                            var12 = var13.bind(var15)(var12);
                            if(!(var6 != var11)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                            var11 = var7;
                            if(!(var6 != var11)) { _fun0004_ip = 24; continue _fun0004 }
case 26:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var11 = 46;
                            var11 = var13[var11];
                            var13 = var12.bind(var2)(var11);
                            var12 = var13.isStaticRouteIconType;
                            var11 = var7;
                            var11 = var12.bind(var13)(var11);
                            if(var11) { _fun0004_ip = 27; continue _fun0004 }
case 24:
                            var11 = var5;
                            if(!(var6 != var11)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                            if(!(var6 == var9)) { _fun0004_ip = 30; continue _fun0004 }
case 28:
                            if(!(var6 != var9)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                            var11 = var8;
                            if(!(var6 == var11)) { _fun0004_ip = 33; continue _fun0004 }
case 31:
                            var11 = var7;
                            if(!(var6 != var11)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                            var11 = var8;
                            if(!(var6 == var11)) { _fun0004_ip = 36; continue _fun0004 }
case 34:
                            if(!(var6 != var9)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                            var11 = var9.isPrivate;
                            var11 = var11.bind(var9)();
                            if(var11) { _fun0004_ip = 39; continue _fun0004 }
case 37:
                            var11 = var7;
                            var11 = var6 != var11;
                            if(!var11) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                            var12 = var8;
                            var11 = var6 == var12;
case 40:
                            if(!var11) { _fun0004_ip = 20; continue _fun0004 }
case 42:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var11 = 54;
                            var11 = var13[var11];
                            var13 = var12.bind(var2)(var11);
                            var17 = _closure1_slot53;
                            var16 = var17.CHANNEL;
                            var15 = var8;
                            var12 = var7;
                            var11 = var5;
                            var12 = var16.bind(var17)(var15, var12, var11);
                            var11 = {'navigationReplace': false, 'openChannel': true};
                            var11 = var13.bind(var2)(var12, var11);
                            _fun0004_ip = 20; continue _fun0004;
case 39:
                            var12 = _closure3_slot1;
                            var11 = var12.getParams;
                            var11 = var11.bind(var12)();
                            var11 = var11.chatInputRef;
                            var12 = var11.current;
                            if(!(var6 != var12)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                            var11 = var12.dismissKeyboard;
                            var11 = var11.bind(var12)();
case 43:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var11 = 58;
                            var11 = var13[var11];
                            var15 = var12.bind(var2)(var11);
                            var12 = var15.selectVoiceChannel;
                            var11 = var7;
                            var11 = var12.bind(var15)(var11);
                            var12 = _closure1_slot0;
                            var11 = 59;
                            var11 = var13[var11];
                            var12 = var12.bind(var2)(var11);
                            var11 = var12.isVoicePanelEnabled;
                            var11 = var11.bind(var12)();
                            if(var11) { _fun0004_ip = 20; continue _fun0004 }
case 45:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var11 = 56;
                            var11 = var13[var11];
                            var12 = var12.bind(var2)(var11);
                            var11 = var12.openChannelCallModal;
                            var11 = var11.bind(var12)(var9);
                            _fun0004_ip = 20; continue _fun0004;
case 36:
                            var14 = false;
                            if(!(var6 != var4)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                            var11 = _closure1_slot20;
                            var11 = var11.bind(var2)(var4);
                            if(!var11) { _fun0004_ip = 48; continue _fun0004 }
case 46: // try_start_0
                            var12 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var11 = 57;
                            var11 = var13[var11];
                            var16 = var12.bind(var2)(var11);
                            var15 = var16.startLurking;
                            var13 = var8;
                            var12 = {};
                            var11 = var7;
                            var12['channelId'] = var11;
                            var11 = var5;
                            var12['messageId'] = var11;
                            var11 = {};
                            var11 = var15.bind(var16)(var13, var11, var12);
                            SaveGenerator(address=624);
case 49:
                            return var11;
case 50:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                            if(var12) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                            var14 = true;
case 53: // try_end0
                            return var2;
case 51:
                            return var11;
case 54: // catch_target0
                            CatchBlockStart(arg_register=10);
case 48:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var11 = 54;
                            var11 = var13[var11];
                            var13 = var12.bind(var2)(var11);
                            var17 = _closure1_slot53;
                            var16 = var17.CHANNEL;
                            var15 = var8;
                            var12 = var7;
                            var11 = var5;
                            var12 = var16.bind(var17)(var15, var12, var11);
                            var11 = {};
                            var11['navigationReplace'] = var14;
                            var14 = true;
                            var11['openChannel'] = var14;
                            var11 = var13.bind(var2)(var12, var11);
                            _fun0004_ip = 20; continue _fun0004;
case 33:
                            var12 = _closure1_slot19;
                            var11 = var9.type;
                            var11 = var12.bind(var2)(var11);
                            if(!var11) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var11 = 55;
                            var11 = var13[var11];
                            var12 = var12.bind(var2)(var11);
                            var11 = var12.canViewChannel;
                            var11 = var11.bind(var12)(var9);
                            if(var11) { _fun0004_ip = 57; continue _fun0004 }
case 55:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var11 = 54;
                            var11 = var13[var11];
                            var13 = var12.bind(var2)(var11);
                            var15 = _closure1_slot53;
                            var14 = var15.CHANNEL;
                            var12 = var8;
                            var11 = var9.id;
                            var12 = var14.bind(var15)(var12, var11);
                            var11 = {'navigationReplace': false, 'openChannel': true};
                            var11 = var13.bind(var2)(var12, var11);
                            _fun0004_ip = 20; continue _fun0004;
case 57:
                            var12 = var9.type;
                            var11 = _closure1_slot45;
                            var11 = var11.GUILD_STAGE_VOICE;
                            if(!(var12 === var11)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                            var13 = _closure1_slot29;
                            var12 = var13.can;
                            var11 = _closure1_slot52;
                            var11 = var11.CONNECT;
                            var11 = var12.bind(var13)(var11, var9);
                            if(var11) { _fun0004_ip = 58; continue _fun0004 }
case 60:
                            return var2;
case 58:
                            var11 = _closure3_slot1;
                            var10 = var11.getParams;
                            var10 = var10.bind(var11)();
                            var10 = var10.chatInputRef;
                            var11 = var10.current;
                            if(!(var6 != var11)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                            var10 = var11.dismissKeyboard;
                            var10 = var10.bind(var11)();
case 61:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var10 = 56;
                            var10 = var12[var10];
                            var11 = var11.bind(var2)(var10);
                            var10 = var11.openChannelCallModal;
                            var10 = var10.bind(var11)(var9);
                            _fun0004_ip = 20; continue _fun0004;
case 30:
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var10 = 54;
                            var10 = var12[var10];
                            var11 = var11.bind(var2)(var10);
                            var14 = _closure1_slot53;
                            var13 = var14.CHANNEL;
                            var12 = var9.guild_id;
                            var10 = var9.id;
                            var9 = var5;
                            var10 = var13.bind(var14)(var12, var10, var9);
                            var9 = {'navigationReplace': false, 'openChannel': true};
                            var9 = var11.bind(var2)(var10, var9);
                            _fun0004_ip = 20; continue _fun0004;
case 27:
                            if(!(var6 != var4)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                            var10 = var7;
                            var9 = 'browse';
                            if(!(var9 !== var10)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
                            var9 = 'customize';
                            if(!(var9 !== var10)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
                            var9 = 'home';
                            if(!(var9 !== var10)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                            var9 = 'guide';
                            if(!(var9 !== var10)) { _fun0004_ip = 69; continue _fun0004 }
case 71:
                            var9 = 'linked-roles';
                            if(!(var9 !== var10)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var9 = 53;
                            var9 = var11[var9];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.assertNever;
                            var7 = var9.bind(var10)(var7);
                            _fun0004_ip = 20; continue _fun0004;
case 72:
                            var11 = var5;
                            if(!(var6 == var11)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                            var9 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var7 = 47;
                            var7 = var5[var7];
                            var10 = var9.bind(var2)(var7);
                            var9 = var10.pushLazy;
                            var12 = _closure1_slot0;
                            var7 = 43;
                            var7 = var5[var7];
                            var12 = var12.bind(var2)(var7);
                            var7 = 52;
                            var7 = var5[var7];
                            var5 = var5.paths;
                            var7 = var12.bind(var2)(var7, var5);
                            var5 = {};
                            var12 = var8;
                            var5['guildId'] = var12;
                            var5 = var9.bind(var10)(var7, var5);
                            _fun0004_ip = 20; continue _fun0004;
case 74:
                            var9 = _closure1_slot24;
                            var7 = var9.getSelfMember;
                            var5 = var8;
                            var5 = var7.bind(var9)(var5);
                            if(!(var6 != var5)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
                            var10 = _closure1_slot25;
                            var9 = var10.getRole;
                            var7 = var8;
                            var11 = var9.bind(var10)(var7, var11);
                            if(!(var6 != var11)) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                            var7 = var5.roles;
                            var6 = var7.includes;
                            var5 = var11.id;
                            var5 = var6.bind(var7)(var5);
                            if(var5) { _fun0004_ip = 78; continue _fun0004 }
case 80:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var6 = 50;
                            var6 = var5[var6];
                            var10 = var7.bind(var2)(var6);
                            var9 = var10.openLazy;
                            var7 = _closure1_slot0;
                            var6 = 43;
                            var6 = var5[var6];
                            var7 = var7.bind(var2)(var6);
                            var6 = 51;
                            var6 = var5[var6];
                            var5 = var5.paths;
                            var7 = var7.bind(var2)(var6, var5);
                            var12 = var11.id;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
                            var6 = var6.bind(var5)(var12);
                            var5 = {};
                            var5['role'] = var11;
                            var11 = var8;
                            var5['guildId'] = var11;
                            var5 = var9.bind(var10)(var7, var6, var5);
                            _fun0004_ip = 20; continue _fun0004;
case 78:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var6 = 47;
                            var6 = var5[var6];
                            var9 = var7.bind(var2)(var6);
                            var7 = var9.pushLazy;
                            var10 = _closure1_slot0;
                            var6 = 43;
                            var6 = var5[var6];
                            var10 = var10.bind(var2)(var6);
                            var6 = 52;
                            var6 = var5[var6];
                            var5 = var5.paths;
                            var6 = var10.bind(var2)(var6, var5);
                            var5 = {};
                            var10 = var8;
                            var5['guildId'] = var10;
                            var5 = var7.bind(var9)(var6, var5);
                            _fun0004_ip = 20; continue _fun0004;
case 76:
                            return var2;
case 69:
                            var7 = var4.features;
                            var6 = var7.has;
                            var5 = _closure1_slot46;
                            var5 = var5.COMMUNITY;
                            var5 = var6.bind(var7)(var5);
                            if(var5) { _fun0004_ip = 81; continue _fun0004 }
case 82:
                            return var2;
case 81:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var5 = 49;
                            var5 = var7[var5];
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.transitionTo;
                            var11 = _closure1_slot53;
                            var10 = var11.CHANNEL;
                            var9 = var8;
                            var5 = _closure1_slot57;
                            var5 = var5.GUILD_HOME;
                            var5 = var10.bind(var11)(var9, var5);
                            var5 = var6.bind(var7)(var5);
                            _fun0004_ip = 20; continue _fun0004;
case 67:
                            var7 = var4.features;
                            var6 = var7.has;
                            var5 = _closure1_slot46;
                            var5 = var5.COMMUNITY;
                            var5 = var6.bind(var7)(var5);
                            if(var5) { _fun0004_ip = 83; continue _fun0004 }
case 84:
                            return var2;
case 83:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var6 = 47;
                            var6 = var5[var6];
                            var10 = var7.bind(var2)(var6);
                            var9 = var10.pushLazy;
                            var7 = _closure1_slot0;
                            var6 = 43;
                            var6 = var5[var6];
                            var7 = var7.bind(var2)(var6);
                            var6 = 48;
                            var6 = var5[var6];
                            var5 = var5.paths;
                            var7 = var7.bind(var2)(var6, var5);
                            var6 = {};
                            var5 = var8;
                            var6['guildId'] = var5;
                            var5 = _closure1_slot59;
                            var5 = var5.CUSTOMIZE;
                            var6['defaultTab'] = var5;
                            var5 = _closure1_slot60;
                            var5 = var9.bind(var10)(var7, var6, var5);
                            _fun0004_ip = 20; continue _fun0004;
case 65:
                            var6 = var4.features;
                            var5 = var6.has;
                            var4 = _closure1_slot46;
                            var4 = var4.COMMUNITY;
                            var4 = var5.bind(var6)(var4);
                            if(var4) { _fun0004_ip = 85; continue _fun0004 }
case 86:
                            return var2;
case 85:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var5 = 47;
                            var5 = var4[var5];
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.pushLazy;
                            var9 = _closure1_slot0;
                            var5 = 43;
                            var5 = var4[var5];
                            var9 = var9.bind(var2)(var5);
                            var5 = 48;
                            var5 = var4[var5];
                            var4 = var4.paths;
                            var5 = var9.bind(var2)(var5, var4);
                            var4 = {};
                            var4['guildId'] = var8;
                            var8 = _closure1_slot59;
                            var8 = var8.BROWSE;
                            var4['defaultTab'] = var8;
                            var3 = _closure1_slot60;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            _fun0004_ip = 20; continue _fun0004;
case 63:
                            return var2;
case 20:
                            return var2;
case 18:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var4.bind(var1)();
            var3['handleTapChannel'] = var4;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.data;
                    var6 = var3.guildId;
                    var5 = var3.channelId;
                    var4 = var3.messageId;
                    var7 = var3.originalLink;
                    var8 = _closure3_slot0;
                    var3 = var8.isModalOrActionsheetObstructing;
                    var3 = var3.bind(var8)();
                    if(var3) { _fun0005_ip = 87; continue _fun0005 }
case 4:
                    var3 = null;
                    if(!(var3 == var5)) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                    if(!(var3 != var7)) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                    if(!(var3 == var7)) { _fun0005_ip = 90; continue _fun0005 }
case 91:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 60;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.getChannelPermalink;
                    var7 = var8.bind(var9)(var6, var5, var4);
case 90:
                    if(!(var3 != var7)) { _fun0005_ip = 87; continue _fun0005 }
case 92:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 61;
                    var2 = var8[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['urlString'] = var7;
                    var2['guildId'] = var6;
                    var2['channelId'] = var5;
                    var2['messageId'] = var4;
                    var2 = var3.bind(var1)(var2);
case 87:
                    return var1;
                }
            };
            var3['handleLongPressChannel'] = var4;
            var4 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0006_ip = 93; continue _fun0006 }
case 94:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 62;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapAttachmentLink'] = var4;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 62;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleLongPressAttachmentLink'] = var4;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.data;
                    var7 = var2.channelId;
                    var6 = var2.messageId;
                    var3 = _closure1_slot22;
                    var2 = var3.getChannel;
                    var4 = var2.bind(var3)(var7);
                    var _closure4_slot0 = var4;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0008_ip = 95; continue _fun0008 }
case 7:
                    var3 = var4.isPrivate;
                    var2 = var3.bind(var4)();
case 95:
                    if(!var2) { _fun0008_ip = 96; continue _fun0008 }
case 91:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 63;
                    var2 = var8[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.checkIsCallActive;
                    var2 = var2.bind(var3)(var7, var6);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    if(var2) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                    var2 = 64;
                    var2 = var5[var2];
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.showSimpleActionSheet;
                    var2 = {};
                    var8 = 'CallTap';
                    var2['key'] = var8;
                    var9 = {};
                    var11 = 65;
                    var8 = var5[var11];
                    var8 = var3.bind(var1)(var8);
                    var13 = var8.intl;
                    var12 = var13.string;
                    var8 = var5[var11];
                    var8 = var3.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.focH1t;
                    var8 = var12.bind(var13)(var8);
                    var9['label'] = var8;
                    var8 = 66;
                    var8 = var5[var8];
                    var8 = var3.bind(var1)(var8);
                    var8 = var8.PhoneCallIcon;
                    var9['IconComponent'] = var8;
                    var8 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleStartCall;
                        var2 = _closure4_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var9['onPress'] = var8;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var9 = {};
                    var12 = var5[var11];
                    var12 = var3.bind(var1)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var5[var11];
                    var11 = var3.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.oCqlGG;
                    var11 = var12.bind(var13)(var11);
                    var9['label'] = var11;
                    var11 = 67;
                    var11 = var5[var11];
                    var11 = var3.bind(var1)(var11);
                    var11 = var11.VideoIcon;
                    var9['IconComponent'] = var11;
                    var10 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 56;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.handleStartCall;
                        var3 = _closure4_slot0;
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var9['onPress'] = var10;
                    var8[1] = var9;
                    var2['options'] = var8;
                    var2 = var6.bind(var7)(var2);
                    _fun0008_ip = 96; continue _fun0008;
case 97:
                    var2 = 56;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleJoinCall;
                    var2 = var2.bind(var3)(var4);
case 96:
                    return var1;
                }
            };
            var3['handleTapCall'] = var4;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 62;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapMention'] = var4;
            var4 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var2 = var4[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var6.bind(var7)(var2);
                    var9 = var2.channelId;
                    var6 = var2.commandName;
                    var _closure4_slot0 = var6;
                    var7 = var2.commandId;
                    var _closure4_slot1 = var7;
                    var8 = _closure3_slot0;
                    var2 = var8.getParams;
                    var2 = var2.bind(var8)();
                    var8 = var2.chatInputRef;
                    var _closure4_slot2 = var8;
                    var2 = 68;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleTapCommandMention;
                    var2 = {};
                    var2['channelId'] = var9;
                    var11 = var8.current;
                    var8 = null;
                    var10 = var8 == var11;
                    var9 = undefined;
                    if(var10) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                    var10 = var11.getText;
                    var9 = var10.bind(var11)();
case 99:
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                    var8 = var9;
case 101:
                    var2['currentText'] = var8;
                    var2['commandId'] = var7;
                    var2['commandName'] = var6;
                    var6 = function onOpenCustomKeyboard(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = _closure4_slot2;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0011_ip = 2; continue _fun0011 }
case 103:
                            var3 = var4.openCustomKeyboard;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 2:
                            return var1;
                        }
                    };
                    var2['onOpenCustomKeyboard'] = var6;
                    var5 = function onSetCommand() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 50;
                            var3 = var5[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = 69;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.bind(var1)();
                            var4 = _closure4_slot2;
                            var5 = var4.current;
                            var7 = null;
                            if(!(var7 != var5)) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                            var4 = var5.openSystemKeyboard;
                            var4 = var4.bind(var5)();
case 104:
                            var4 = _closure4_slot2;
                            var8 = var4.current;
                            var4 = var7 == var8;
                            var6 = var8;
                            if(var4) { _fun0012_ip = 9; continue _fun0012 }
case 106:
                            var5 = var8.getApplicationCommandManager;
                            var5 = var5.bind(var8)();
                            var4 = var7 == var5;
                            var6 = var5;
case 9:
                            if(var4) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                            var5 = var6.setPartialCommand;
                            var4 = _closure4_slot1;
                            var3 = _closure4_slot0;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 70;
                            var2 = var8[var2];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.ApplicationCommandTriggerLocations;
                            var2 = var2.MENTION;
                            var2 = var5.bind(var6)(var4, var3, var2);
case 107:
                            return var1;
                        }
                    };
                    var2['onSetCommand'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3['handleTapCommandMention'] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = var1.commandName;
                var4 = var1.commandId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 68;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleLongPressCommandMention;
                var2 = var2.bind(var3)(var5, var4);
                return var1;
            };
            var3['handleLongPressCommandMention'] = var4;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.url;
                    var7 = var1.node;
                    var1 = null;
                    if(!(var1 != var7)) { _fun0013_ip = 109; continue _fun0013 }
case 94:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 71;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.isLinkTrusted;
                    var3 = var3.bind(var6)(var7);
                    if(var3) { _fun0013_ip = 110; continue _fun0013 }
case 109:
                    var3 = false;
                    return var3;
case 110:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 72;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.bind(var4)(var5);
                    var3 = var3.payload;
                    var6 = var3.type;
                    var5 = _closure1_slot47;
                    var5 = var5.INVITE;
                    if(!(var6 === var5)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                    var5 = var3.inviteCode;
                    if(!(var1 != var5)) { _fun0013_ip = 113; continue _fun0013 }
case 8:
                    var6 = _closure1_slot27;
                    var5 = var6.getInvite;
                    var3 = var3.inviteCode;
                    var3 = var5.bind(var6)(var3);
                    var5 = var1 == var3;
                    if(var5) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 73;
                    var1 = var7[var1];
                    var6 = var6.bind(var4)(var1);
                    var1 = var6.isGuildScheduledEventInviteEmbed;
                    var1 = var1.bind(var6)(var3);
                    var5 = !var1;
case 114:
                    var1 = !var5;
                    if(var5) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 74;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.bind(var4)(var3);
                    var1 = true;
case 116:
                    return var1;
case 113:
                    var1 = false;
                    return var1;
case 111:
                    var1 = false;
                    return var1;
                }
            };
            var3['handleTapGuildEventLink'] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var _closure4_slot0 = var1;
                var4 = _closure3_slot0;
                var3 = var4.getMessageData;
                var1 = var1.data;
                var1 = var1.messageId;
                var1 = var3.bind(var4)(var1);
                var _closure4_slot1 = var1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 43;
                var4 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = 75;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var5.bind(var1)(var4, var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.handleMessagesTapLink;
                        var2 = {};
                        var1 = false;
                        var2['allowWithinModal'] = var1;
                        var1 = _closure3_slot0;
                        var4 = var1.params;
                        var4 = var4.chatInputRef;
                        var2['chatInputRef'] = var4;
                        var1 = var1.handleTransitionToThread;
                        var2['handleTransitionToThread'] = var1;
                        var1 = _closure4_slot1;
                        var7 = null;
                        var8 = var7 == var1;
                        var1 = undefined;
                        var6 = undefined;
                        if(var8) { _fun0014_ip = 118; continue _fun0014 }
case 119:
                        var8 = _closure4_slot1;
                        var6 = var8.message;
case 118:
                        var2['message'] = var6;
                        var6 = _closure4_slot1;
                        var7 = var7 == var6;
                        var6 = undefined;
                        if(var7) { _fun0014_ip = 120; continue _fun0014 }
case 91:
                        var7 = _closure4_slot1;
                        var6 = var7.messageChannel;
case 120:
                        var2['messageChannel'] = var6;
                        var5 = _closure3_slot0;
                        var5 = var5.params;
                        var5 = var5.selectedChannelId;
                        var2['selectedChannelId'] = var5;
                        var4 = _closure4_slot0;
                        var2['tapLinkData'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapLink'] = var4;
            var4 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 62;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleLongPressLink'] = var4;
            var4 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getNativeSyntheticEventData;
                    var4 = var4.bind(var5)(var2);
                    var10 = var4.reaction;
                    var8 = var4.messageId;
                    var7 = var4.isBurst;
                    var6 = _closure3_slot0;
                    var5 = var6.isModalOrActionsheetObstructing;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0016_ip = 121; continue _fun0016 }
case 122:
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var4 = var4.bind(var5)(var8);
                    var6 = null;
                    if(!(var6 != var4)) { _fun0016_ip = 121; continue _fun0016 }
case 123:
                    var5 = var4.messageChannel;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 76;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.handleAddOrRemoveReaction;
                    var9 = var6 != var10;
                    var6 = null;
                    if(!var9) { _fun0016_ip = 124; continue _fun0016 }
case 125:
                    var9 = {};
                    var16 = var9;
                    var15 = var10;
                    var11 = copyDataProperties(var16, var15);
                    var11 = var10.emoji;
                    var10 = 'emoji';
                    var9[var10] = var11;
                    var6 = var9;
case 124:
                    var2 = var2.nativeEvent;
                    var12 = var2.location;
                    var17 = var4;
                    var16 = var8;
                    var15 = var5;
                    var14 = var6;
                    var13 = var7;
                    var2 = var17[var3](var16, var15, var14, var13, var12, var11);
case 121:
                    return var1;
                }
            };
            var3['handleTapReaction'] = var4;
            var4 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var7 = var2.messageId;
                    var5 = var2.channelId;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0017_ip = 126; continue _fun0017 }
case 105:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 77;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewReactions;
                    var2 = {};
                    var2['messageId'] = var7;
                    var2['channelId'] = var5;
                    var5 = {};
                    var7 = _closure1_slot41;
                    var7 = var7.CHANNEL;
                    var5['object'] = var7;
                    var6 = _closure1_slot42;
                    var6 = var6.REACTION_OVERFLOW;
                    var5['objectType'] = var6;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 126:
                    return var1;
                }
            };
            var3['handleTapReactionOverflow'] = var4;
            var4 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var8 = var2.reaction;
                    var9 = var2.messageId;
                    var7 = var2.channelId;
                    var5 = var2.isBurst;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0018_ip = 127; continue _fun0018 }
case 128:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 77;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewReactions;
                    var2 = {};
                    var2['messageId'] = var9;
                    var2['channelId'] = var7;
                    var7 = null;
                    var9 = var7 != var8;
                    if(!var9) { _fun0018_ip = 22; continue _fun0018 }
case 129:
                    var7 = var8.emoji;
case 22:
                    var2['emoji'] = var7;
                    var2['isSelectedBurst'] = var5;
                    var5 = {};
                    var7 = _closure1_slot41;
                    var7 = var7.CHANNEL;
                    var5['object'] = var7;
                    var6 = _closure1_slot42;
                    var6 = var6.REACTION;
                    var5['objectType'] = var6;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 127:
                    return var1;
                }
            };
            var3['handleLongPressReaction'] = var4;
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.sticker;
                    var6 = var3.messageId;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var6 = var3.bind(var4)(var6);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0019_ip = 99; continue _fun0019 }
case 130:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 78;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showStickerDetailActionSheet;
                    var2 = {};
                    var2['renderableSticker'] = var7;
                    var6 = var6.messageChannel;
                    var2['channel'] = var6;
                    var5 = _closure3_slot0;
                    var5 = var5.params;
                    var5 = var5.chatInputRef;
                    var2['chatInputRef'] = var5;
                    var2 = var3.bind(var4)(var2);
case 99:
                    return var1;
                }
            };
            var3['handleOpenSticker'] = var4;
            var4 = function(arg1) {
                var5 = _closure3_slot0;
                var4 = var5.handleOpenProfile;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 79;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.AVATAR;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var3['handleTapAvatar'] = var4;
            var4 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 80;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0020_ip = 131; continue _fun0020 }
case 132:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 44;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getNativeSyntheticEventData;
                    var3 = var3.bind(var4)(var5);
                    var8 = var3.userId;
                    var7 = var3.messageId;
                    var6 = _closure3_slot0;
                    var4 = var6.getMessageData;
                    var6 = var4.bind(var6)(var7);
                    var9 = null;
                    if(!(var9 != var6)) { _fun0020_ip = 133; continue _fun0020 }
case 134:
                    var4 = var6.message;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 81;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.bind(var1)(var4);
                    if(!var7) { _fun0020_ip = 135; continue _fun0020 }
case 98:
                    var4 = var4.messageReference;
                    var4 = var4.guild_id;
                    if(!(var9 == var4)) { _fun0020_ip = 136; continue _fun0020 }
case 135:
                    if(!(var9 != var8)) { _fun0020_ip = 133; continue _fun0020 }
case 137:
                    var7 = _closure1_slot35;
                    var4 = var7.getUser;
                    var11 = var4.bind(var7)(var8);
                    var7 = _closure3_slot0;
                    var4 = var7.getParams;
                    var4 = var4.bind(var7)();
                    var4 = var4.chatInputRef;
                    var10 = var6.messageChannel;
                    var6 = var10.isPrivate;
                    var8 = var6.bind(var10)();
                    var12 = _closure1_slot29;
                    var7 = var12.can;
                    var6 = _closure1_slot52;
                    var6 = var6.SEND_MESSAGES;
                    var7 = var7.bind(var12)(var6, var10);
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 82;
                    var6 = var13[var6];
                    var12 = var12.bind(var1)(var6);
                    var6 = var12.computeIsReadOnlyThread;
                    var6 = var6.bind(var12)(var10);
                    if(!(var1 !== var11)) { _fun0020_ip = 133; continue _fun0020 }
case 138:
                    if(var8) { _fun0020_ip = 139; continue _fun0020 }
case 140:
                    if(!var7) { _fun0020_ip = 133; continue _fun0020 }
case 139:
                    if(var6) { _fun0020_ip = 133; continue _fun0020 }
case 38:
                    var8 = var4.current;
                    if(!(var9 != var8)) { _fun0020_ip = 133; continue _fun0020 }
case 141:
                    var7 = var8.insertText;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 83;
                    var4 = var12[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.getMentionTextWithUser;
                    var6 = var4.bind(var6)(var10, var11);
                    var4 = true;
                    var4 = var7.bind(var8)(var6, var9, var4);
                    _fun0020_ip = 133; continue _fun0020;
case 136:
                    var6 = _closure3_slot0;
                    var4 = var6.handleOpenProfile;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 79;
                    var3 = var8[var3];
                    var3 = var7.bind(var1)(var3);
                    var7 = var3.USERNAME;
                    var3 = new Array(1);
                    var3[0] = var7;
                    var3 = var4.bind(var6)(var5, var3);
                    _fun0020_ip = 133; continue _fun0020;
case 131:
                    var4 = _closure3_slot0;
                    var3 = var4.handleOpenProfile;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 79;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var6 = var2.USERNAME;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var3.bind(var4)(var5, var2);
case 133:
                    return var1;
                }
            };
            var3['handleTapUsername'] = var4;
            var4 = function(arg1) {
                var5 = _closure3_slot0;
                var4 = var5.handleOpenProfile;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 79;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.USERNAME;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var3['handleLongPressUsername'] = var4;
            var4 = function(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var1 = var4[var1];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var1);
                    var3 = var4.getNativeSyntheticEventData;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1);
                    var5 = var1.messageId;
                    var10 = var1.userId;
                    var3 = _closure3_slot0;
                    var1 = var3.getMessageData;
                    var1 = var1.bind(var3)(var5);
                    var3 = null;
                    if(!(var3 != var1)) { _fun0021_ip = 142; continue _fun0021 }
case 122:
                    var7 = var1.messageChannel;
                    var1 = var1.message;
                    var8 = var3 != var10;
                    var4 = undefined;
                    if(!var8) { _fun0021_ip = 143; continue _fun0021 }
case 144:
                    var9 = _closure1_slot35;
                    var8 = var9.getUser;
                    var4 = var8.bind(var9)(var10);
case 143:
                    var9 = var4;
                    if(!(var3 != var5)) { _fun0021_ip = 145; continue _fun0021 }
case 146:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 84;
                    var8 = var11[var8];
                    var10 = var10.bind(var6)(var8);
                    var8 = var10.isPublicSystemMessage;
                    var8 = var8.bind(var10)(var1);
                    if(var8) { _fun0021_ip = 147; continue _fun0021 }
case 148:
                    var10 = var4;
                    if(!(var3 == var4)) { _fun0021_ip = 117; continue _fun0021 }
case 149:
                    var11 = _closure1_slot35;
                    var8 = var11.getUser;
                    var4 = var1.author;
                    var4 = var4.id;
                    var10 = var8.bind(var11)(var4);
case 117:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var12 = 81;
                    var4 = var4[var12];
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.bind(var6)(var1);
                    if(!var4) { _fun0021_ip = 150; continue _fun0021 }
case 151:
                    var4 = var1.messageReference;
                    var8 = var4.guild_id;
                    if(!(var3 == var8)) { _fun0021_ip = 152; continue _fun0021 }
case 150:
                    var11 = var1.type;
                    var4 = _closure1_slot51;
                    var4 = var4.THREAD_STARTER_MESSAGE;
                    var9 = var10;
                    if(!(var11 === var4)) { _fun0021_ip = 145; continue _fun0021 }
case 153:
                    var4 = var1.messageReference;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0021_ip = 145; continue _fun0021 }
case 154:
                    var11 = var1.messageReference;
                    var4 = _closure1_slot16;
                    var1 = var4.getMessageByReference;
                    var1 = var1.bind(var4)(var11);
                    var9 = var10;
                    if(!(var3 != var1)) { _fun0021_ip = 145; continue _fun0021 }
case 155:
                    var4 = var1.message;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0021_ip = 145; continue _fun0021 }
case 156:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var11 = var11.bind(var6)(var4);
                    var4 = var1.message;
                    var4 = var11.bind(var6)(var4);
                    var9 = var10;
                    if(!var4) { _fun0021_ip = 145; continue _fun0021 }
case 157:
                    var4 = var1.message;
                    var4 = var4.messageReference;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0021_ip = 145; continue _fun0021 }
case 158:
                    var4 = var1.message;
                    var4 = var4.messageReference;
                    var4 = var4.guild_id;
                    var9 = var10;
                    if(!(var3 == var4)) { _fun0021_ip = 159; continue _fun0021 }
case 145:
                    if(!(var3 != var9)) { _fun0021_ip = 142; continue _fun0021 }
case 160:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 87;
                    var3 = var10[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var9 = var9.id;
                    var3['userId'] = var9;
                    var7 = var7.id;
                    var3['channelId'] = var7;
                    var3['messageId'] = var5;
                    var5 = arg2;
                    var3['sourceAnalyticsLocations'] = var5;
                    var3 = var4.bind(var6)(var3);
case 142:
                    return var6;
case 159:
                    var1 = var1.message;
                    var1 = var1.messageReference;
                    var9 = var1.guild_id;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 50;
                    var3 = var1[var3];
                    var7 = var4.bind(var6)(var3);
                    var5 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 43;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = 86;
                    var3 = var1[var3];
                    var1 = var1.paths;
                    var4 = var4.bind(var6)(var3, var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var1 = 'GuildProfileActionSheet:';
                    var3 = var3.bind(var1)(var9);
                    var1 = {};
                    var1['guildId'] = var9;
                    var1 = var5.bind(var7)(var4, var3, var1);
                    var1 = undefined;
                    return var1;
case 152:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 50;
                    var3 = var1[var3];
                    var7 = var4.bind(var6)(var3);
                    var5 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 43;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = 86;
                    var3 = var1[var3];
                    var1 = var1.paths;
                    var4 = var4.bind(var6)(var3, var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var1 = 'GuildProfileActionSheet:';
                    var3 = var3.bind(var1)(var8);
                    var1 = {};
                    var1['guildId'] = var8;
                    var1 = var5.bind(var7)(var4, var3, var1);
                    var1 = undefined;
                    return var1;
case 147:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 50;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 43;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 85;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = 'PublicGuildAnnouncementProfile';
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleOpenProfile'] = var4;
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.messageId;
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var5 = var4.bind(var5)(var8);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0022_ip = 161; continue _fun0022 }
case 162:
                    var6 = var5.messageChannel;
                    var5 = var6.getGuildId;
                    var6 = var5.bind(var6)();
                    if(!(var4 != var8)) { _fun0022_ip = 161; continue _fun0022 }
case 89:
                    if(!(var4 != var6)) { _fun0022_ip = 161; continue _fun0022 }
case 88:
                    var7 = _closure3_slot0;
                    var5 = var7.getParams;
                    var5 = var5.bind(var7)();
                    var5 = var5.chatInputRef;
                    var5 = var5.current;
                    if(!(var4 != var5)) { _fun0022_ip = 163; continue _fun0022 }
case 164:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
case 163:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTransitionToThread;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 88;
                    var3 = var9[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.castMessageIdAsChannelId;
                    var3 = var3.bind(var7)(var8);
                    var2 = _closure1_slot67;
                    var2 = var2.EMBED;
                    var2 = var4.bind(var5)(var6, var3, var2);
case 161:
                    return var1;
                }
            };
            var3['handleTapThreadEmbed'] = var4;
            var4 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.originId;
                    var3 = _closure3_slot0;
                    var1 = var3.getMessageData;
                    var4 = var1.bind(var3)(var4);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0023_ip = 165; continue _fun0023 }
case 166:
                    var1 = var4.messageChannel;
                    var4 = var4.message;
                    var5 = var1.getGuildId;
                    var5 = var5.bind(var1)();
                    if(!(var3 == var5)) { _fun0023_ip = 167; continue _fun0023 }
case 93:
                    var5 = _closure1_slot48;
case 167:
                    var6 = var4.messageReference;
                    var7 = var3 == var6;
                    var4 = undefined;
                    if(var7) { _fun0023_ip = 95; continue _fun0023 }
case 168:
                    var4 = var6.message_id;
case 95:
                    if(!(var3 != var4)) { _fun0023_ip = 165; continue _fun0023 }
case 123:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTransitionToMessage;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var5, var1, var4);
case 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapReply'] = var4;
            var4 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.channelId;
                    var5 = var2.messageId;
                    var6 = var2.summaryId;
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var2 = var2.bind(var3)(var5);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0024_ip = 169; continue _fun0024 }
case 104:
                    var5 = _closure1_slot17;
                    var2 = var5.findSummary;
                    var2 = var2.bind(var5)(var7, var6);
                    if(!(var3 != var2)) { _fun0024_ip = 169; continue _fun0024 }
case 91:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var5 = 50;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 43;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 89;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var3['summary'] = var2;
                    var2 = 'SummaryActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 169:
                    return var1;
                }
            };
            var3['handleTapSummary'] = var4;
            var4 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.messageId;
                    var5 = var3.channelId;
                    var4 = var3.summaryId;
                    var6 = _closure3_slot0;
                    var3 = var6.getMessageData;
                    var3 = var3.bind(var6)(var8);
                    var8 = null;
                    if(!(var8 != var3)) { _fun0025_ip = 124; continue _fun0025 }
case 104:
                    var6 = var3.messageChannel;
                    var3 = var3.message;
                    var9 = var6.getGuildId;
                    var9 = var9.bind(var6)();
                    if(!(var8 == var9)) { _fun0025_ip = 170; continue _fun0025 }
case 171:
                    var9 = _closure1_slot48;
case 170:
                    var8 = _closure3_slot0;
                    var7 = var8.handleTransitionToMessage;
                    var6 = var6.id;
                    var3 = var3.id;
                    var3 = var7.bind(var8)(var9, var6, var3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 90;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setSelectedSummary;
                    var2 = var2.bind(var3)(var5, var4);
case 124:
                    return var1;
                }
            };
            var3['handleTapSummaryJump'] = var4;
            var4 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.messageId;
                    var15 = var2.mediaIndex;
                    var14 = var2.mediaType;
                    var17 = var2.componentId;
                    var12 = var2.componentMediaIndex;
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var2 = var2.bind(var3)(var4);
                    var6 = null;
                    if(!(var6 != var2)) { _fun0026_ip = 172; continue _fun0026 }
case 88:
                    var10 = var2.messageChannel;
                    var8 = var2.message;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0026_ip = 172; continue _fun0026 }
case 129:
                    var5 = _closure1_slot35;
                    var3 = var5.getUser;
                    var2 = var8.author;
                    var2 = var2.id;
                    var5 = var3.bind(var5)(var2);
                    if(!(var6 == var5)) { _fun0026_ip = 173; continue _fun0026 }
case 174:
                    var3 = var8.state;
                    var2 = _closure1_slot50;
                    var2 = var2.SEND_FAILED;
                    if(!(var3 === var2)) { _fun0026_ip = 172; continue _fun0026 }
case 173:
                    var3 = _closure1_slot34;
                    var2 = var3.getUploaderFileForMessageId;
                    var2 = var2.bind(var3)(var4);
                    if(!(var6 != var2)) { _fun0026_ip = 151; continue _fun0026 }
case 175:
                    var3 = var8.state;
                    var2 = _closure1_slot50;
                    var2 = var2.SEND_FAILED;
                    if(!(var3 === var2)) { _fun0026_ip = 172; continue _fun0026 }
case 151:
                    var3 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var2 = 76;
                    var2 = var13[var2];
                    var7 = var3.bind(var1)(var2);
                    var4 = var7.getLongPressSelectedMedia;
                    var2 = 91;
                    var2 = var13[var2];
                    var16 = var3.bind(var1)(var2);
                    var2 = var16.asComponentId;
                    var19 = var2.bind(var16)(var17);
                    var23 = var7;
                    var22 = var8;
                    var21 = var15;
                    var20 = var14;
                    var18 = var12;
                    var7 = var23[var4](var22, var21, var20, var19, var18, var17);
                    var2 = 92;
                    var2 = var13[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showLongPressMessageActionSheet;
                    var2 = {};
                    var12 = {};
                    var14 = _closure1_slot44;
                    var14 = var14.CHANNEL;
                    var12['section'] = var14;
                    var14 = _closure1_slot41;
                    var14 = var14.MESSAGE;
                    var12['object'] = var14;
                    var2['analyticsLocation'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 93;
                    var11 = var13[var11];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.bind(var1)(var10);
                    var2['canAddNewReactions'] = var11;
                    var2['channel'] = var10;
                    var9 = _closure3_slot0;
                    var9 = var9.params;
                    var9 = var9.chatInputRef;
                    var2['chatInputRef'] = var9;
                    var2['message'] = var8;
                    var8 = var6 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0026_ip = 176; continue _fun0026 }
case 177:
                    var6 = var7;
case 176:
                    var2['selectedMedia'] = var6;
                    var2['user'] = var5;
                    var2 = var3.bind(var4)(var2);
case 172:
                    return var1;
                }
            };
            var3['handleLongPressMessage'] = var4;
            var4 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = arg1;
                    var6 = _closure3_slot0;
                    var1 = var6.params;
                    var8 = var1.chatInputRef;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.getNativeSyntheticEventData;
                    var3 = var3.bind(var5)(var2);
                    var5 = var3.messageId;
                    var3 = var6.getMessageData;
                    var5 = var3.bind(var6)(var5);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0027_ip = 178; continue _fun0027 }
case 7:
                    var7 = var5.messageChannel;
                    var6 = var5.message;
                    var5 = var2.nativeEvent;
                    var5 = var5.triggerHaptic;
                    if(!var5) { _fun0027_ip = 179; continue _fun0027 }
case 170:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 94;
                    var5 = var12[var5];
                    var10 = var9.bind(var1)(var5);
                    var9 = var10.triggerHapticFeedback;
                    var11 = _closure1_slot1;
                    var5 = 95;
                    var5 = var12[var5];
                    var5 = var11.bind(var1)(var5);
                    var5 = var5.IMPACT_LIGHT;
                    var5 = var9.bind(var10)(var5);
case 179:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 96;
                    var4 = var9[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.handleReply;
                    var2 = var2.nativeEvent;
                    var2 = var2.location;
                    var9 = var3 != var2;
                    var3 = 'message_swipe';
                    if(!var9) { _fun0027_ip = 180; continue _fun0027 }
case 181:
                    var3 = var2;
case 180:
                    var13 = true;
                    var18 = var5;
                    var17 = var6;
                    var16 = var7;
                    var15 = var8;
                    var14 = var3;
                    var2 = var18[var4](var17, var16, var15, var14, var13, var12);
case 178:
                    return var1;
                }
            };
            var3['handleInitiateReply'] = var4;
            var4 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.messageId;
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var2 = var2.bind(var3)(var4);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0028_ip = 182; continue _fun0028 }
case 162:
                    var3 = var2.messageChannel;
                    var2 = var2.message;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 94;
                    var4 = var9[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.triggerHapticFeedback;
                    var8 = _closure1_slot1;
                    var4 = 95;
                    var4 = var9[var4];
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.IMPACT_LIGHT;
                    var4 = var5.bind(var7)(var4);
                    var5 = var2.hasFlag;
                    var4 = _closure1_slot49;
                    var4 = var4.HAS_THREAD;
                    var4 = var5.bind(var2)(var4);
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    if(var4) { _fun0028_ip = 183; continue _fun0028 }
case 124:
                    var4 = 96;
                    var4 = var8[var4];
                    var9 = var5.bind(var1)(var4);
                    var7 = var9.handleCreateThread;
                    var4 = 'Message Shortcut';
                    var4 = var7.bind(var9)(var3, var2, var4);
                    _fun0028_ip = 182; continue _fun0028;
case 183:
                    var4 = 49;
                    var4 = var8[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.transitionToGuild;
                    var3 = var3.guild_id;
                    var7 = _closure1_slot1;
                    var6 = 88;
                    var6 = var8[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.castMessageIdAsChannelId;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var3, var2);
case 182:
                    return var1;
                }
            };
            var3['handleInitiateThread'] = var4;
            var4 = function(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var1 = var5.params;
                    var8 = var1.chatInputRef;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.messageId;
                    var3 = var5.getMessageData;
                    var4 = var3.bind(var5)(var4);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0029_ip = 175; continue _fun0029 }
case 184:
                    var7 = var4.messageChannel;
                    var6 = var4.message;
                    var5 = _closure1_slot35;
                    var4 = var5.getCurrentUser;
                    var5 = var4.bind(var5)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 97;
                    var4 = var10[var4];
                    var4 = var9.bind(var1)(var4);
                    var9 = var3 == var5;
                    var3 = undefined;
                    if(var9) { _fun0029_ip = 125; continue _fun0029 }
case 100:
                    var3 = var5.id;
case 125:
                    var3 = var4.bind(var1)(var6, var3);
                    if(!var3) { _fun0029_ip = 175; continue _fun0029 }
case 185:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 96;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.handleEdit;
                    var12 = 'message_swipe';
                    var11 = true;
                    var16 = var5;
                    var15 = var6;
                    var14 = var7;
                    var13 = var8;
                    var2 = var16[var4](var15, var14, var13, var12, var11, var10);
case 175:
                    return var1;
                }
            };
            var3['handleInitiateEdit'] = var4;
            var4 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var5 = var2.messageId;
                    var4 = _closure3_slot0;
                    var2 = var4.getMessageData;
                    var4 = var2.bind(var4)(var5);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0030_ip = 186; continue _fun0030 }
case 162:
                    var16 = var4.messageChannel;
                    var8 = var4.message;
                    var4 = var16.getGuildId;
                    var5 = var4.bind(var16)();
                    if(!(var2 != var8)) { _fun0030_ip = 186; continue _fun0030 }
case 91:
                    if(!(var2 != var5)) { _fun0030_ip = 186; continue _fun0030 }
case 187:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 98;
                    var4 = var9[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.messageHasConfettiPotion;
                    var4 = var4.bind(var6)(var8);
                    if(!var4) { _fun0030_ip = 188; continue _fun0030 }
case 99:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 99;
                    var4 = var10[var4];
                    var9 = var6.bind(var1)(var4);
                    var6 = _closure1_slot0;
                    var4 = 100;
                    var4 = var10[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.ConfettiTriggerAnalyticsLocation;
                    var20 = var4.UserTriggered;
                    var21 = true;
                    var24 = undefined;
                    var23 = var8;
                    var22 = undefined;
                    var4 = var24[var9](var23, var22, var21, var20, var19);
                    var10 = var8.potions;
                    if(!(var2 != var10)) { _fun0030_ip = 188; continue _fun0030 }
case 189:
                    var9 = _closure1_slot35;
                    var6 = var9.getUser;
                    var4 = 0;
                    var4 = var10[var4];
                    var4 = var4.used_by;
                    var19 = var6.bind(var9)(var4);
                    if(!(var2 != var19)) { _fun0030_ip = 188; continue _fun0030 }
case 24:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var4 = 101;
                    var4 = var12[var4];
                    var9 = var11.bind(var1)(var4);
                    var6 = var9.open;
                    var4 = {};
                    var10 = 'confetti';
                    var4['key'] = var10;
                    var18 = _closure1_slot0;
                    var10 = 65;
                    var13 = var12[var10];
                    var13 = var18.bind(var1)(var13);
                    var15 = var13.intl;
                    var14 = var15.formatToPlainString;
                    var10 = var12[var10];
                    var10 = var18.bind(var1)(var10);
                    var10 = var10.t;
                    var13 = var10.FE++aN;
                    var10 = {};
                    var17 = 102;
                    var17 = var12[var17];
                    var18 = var18.bind(var1)(var17);
                    var17 = var18.getName;
                    var16 = var16.id;
                    var16 = var17.bind(var18)(var5, var16, var19);
                    var10['user'] = var16;
                    var10 = var14.bind(var15)(var13, var10);
                    var4['content'] = var10;
                    var10 = 103;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var4['icon'] = var10;
                    var4 = var6.bind(var9)(var4);
case 188:
                    var6 = var8.type;
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST;
                    if(!(var4 !== var6)) { _fun0030_ip = 190; continue _fun0030 }
case 191:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_1;
                    if(!(var4 !== var6)) { _fun0030_ip = 190; continue _fun0030 }
case 192:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_2;
                    if(!(var4 !== var6)) { _fun0030_ip = 190; continue _fun0030 }
case 193:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_3;
                    if(!(var4 !== var6)) { _fun0030_ip = 190; continue _fun0030 }
case 194:
                    var4 = _closure1_slot51;
                    var4 = var4.AUTO_MODERATION_ACTION;
                    if(!(var4 === var6)) { _fun0030_ip = 186; continue _fun0030 }
case 195:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var9 = 106;
                    var4 = var4[var9];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAutomodMessageRecord;
                    var4 = var4.bind(var6)(var8);
                    if(!var4) { _fun0030_ip = 186; continue _fun0030 }
case 196:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var9];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.extractAutomodMessageFields;
                    var4 = var4.bind(var6)(var8);
                    var8 = var4.embedChannel;
                    var6 = var4.flaggedMessageId;
                    var4 = var2 != var6;
                    if(!var4) { _fun0030_ip = 197; continue _fun0030 }
case 198:
                    var4 = var2 != var8;
case 197:
                    if(!var4) { _fun0030_ip = 186; continue _fun0030 }
case 199:
                    var4 = _closure3_slot0;
                    var3 = var4.handleTransitionToMessage;
                    var9 = var2 == var8;
                    var2 = undefined;
                    if(var9) { _fun0030_ip = 200; continue _fun0030 }
case 201:
                    var2 = var8.id;
case 200:
                    var2 = var3.bind(var4)(var5, var2, var6);
                    _fun0030_ip = 186; continue _fun0030;
case 190:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 104;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openApplyBoostModal;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot1;
                    var2 = 105;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot38;
                    var3 = var2.PREMIUM_GUILD_PROMOTION_OPENED;
                    var2 = {};
                    var6 = {};
                    var8 = _closure1_slot44;
                    var8 = var8.CHANNEL_TEXT_AREA;
                    var6['section'] = var8;
                    var7 = _closure1_slot41;
                    var7 = var7.BOOST_ANNOUNCEMENT_UPSELL;
                    var6['object'] = var7;
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 186:
                    return var1;
                }
            };
            var3['handleTapMessage'] = var4;
            var4 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.messageId;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var3 = var3.bind(var4)(var5);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0031_ip = 202; continue _fun0031 }
case 203:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 107;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.getDoubleTapToReactExperiment;
                    var5 = {};
                    var4 = false;
                    var5['autoTrackExposure'] = var4;
                    var4 = 'MessagesHandler';
                    var4 = var6.bind(var7)(var4, var5);
                    var4 = var4.enabled;
                    if(!var4) { _fun0031_ip = 202; continue _fun0031 }
case 8:
                    var5 = var3.messageChannel;
                    var4 = var3.message;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 108;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleAddDefaultDoubleTapReaction;
                    var2 = var2.bind(var3)(var4, var5);
case 202:
                    return var1;
                }
            };
            var3['handleDoubleTapMessage'] = var4;
            var4 = function(arg1, arg2, arg3) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = _closure3_slot0;
                    var3 = var4.isModalOrActionsheetObstructing;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0032_ip = 22; continue _fun0032 }
case 204:
                    var4 = var1.type;
                    var5 = _closure1_slot63;
                    var5 = var5.LOAD_MORE_BEFORE;
                    if(!(var5 !== var4)) { _fun0032_ip = 205; continue _fun0032 }
case 206:
                    var5 = _closure1_slot63;
                    var5 = var5.LOAD_MORE_AFTER;
                    if(!(var5 !== var4)) { _fun0032_ip = 143; continue _fun0032 }
case 207:
                    var3 = _closure1_slot63;
                    var3 = var3.TOGGLE_BLOCKED_MESSAGES;
                    if(!(var3 === var4)) { _fun0032_ip = 22; continue _fun0032 }
case 208:
                    var4 = var1.context;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0032_ip = 22; continue _fun0032 }
case 209:
                    var3 = _closure3_slot0;
                    var2 = var3.handleReveal;
                    var1 = var1.context;
                    var1 = var2.bind(var3)(var1);
                    _fun0032_ip = 22; continue _fun0032;
case 143:
                    var2 = arg3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0032_ip = 22; continue _fun0032;
case 205:
                    var2 = arg2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSeparator'] = var4;
            var4 = function(arg1) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.uploaderId;
                    var _closure4_slot0 = var3;
                    var4 = var1.itemId;
                    var1 = _closure3_slot0;
                    var1 = var1.params;
                    var5 = var1.uploads;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0033_ip = 210; continue _fun0033 }
case 211:
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var5)(var2);
                    if(!(var1 != var3)) { _fun0033_ip = 210; continue _fun0033 }
case 119:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 94;
                    var2 = var6[var2];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var2);
                    var7 = var8.triggerHapticFeedback;
                    var2 = _closure1_slot1;
                    var1 = 95;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var7.bind(var8)(var1);
                    var1 = 109;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.cancelUploadItem;
                    var1 = var1.bind(var2)(var3, var4);
case 210:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapCancelUploadItem'] = var4;
            var4 = function(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.author;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0034_ip = 212; continue _fun0034 }
case 213:
                    var1 = var2.id;
                    if(!(var3 != var1)) { _fun0034_ip = 212; continue _fun0034 }
case 214:
                    var5 = _closure1_slot30;
                    var4 = var5.findActivity;
                    var3 = var2.id;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot37;
                        var1 = var1.LISTENING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 110;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.openTrack;
                    var1 = var1.bind(var2)(var3);
case 212:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSpotifyResource'] = var4;
            var4 = function(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var6 = arg1;
                    var18 = var6.author;
                    var1 = var6.activity;
                    var16 = var6.application;
                    var7 = null;
                    if(!(var7 != var18)) { _fun0035_ip = 53; continue _fun0035 }
case 215:
                    if(!(var7 != var1)) { _fun0035_ip = 53; continue _fun0035 }
case 216:
                    if(!(var7 != var16)) { _fun0035_ip = 53; continue _fun0035 }
case 21:
                    var1 = var18.id;
                    if(!(var7 != var1)) { _fun0035_ip = 53; continue _fun0035 }
case 217:
                    var10 = var6.channel_id;
                    var2 = _closure1_slot22;
                    var1 = var2.getChannel;
                    var12 = var1.bind(var2)(var10);
                    var9 = var16.id;
                    var14 = var16.deeplink_uri;
                    var3 = _closure1_slot30;
                    var2 = var3.getApplicationActivity;
                    var1 = var18.id;
                    var8 = var2.bind(var3)(var1, var9);
                    if(!(var7 == var8)) { _fun0035_ip = 37; continue _fun0035 }
case 218:
                    if(!(var7 != var14)) { _fun0035_ip = 53; continue _fun0035 }
case 8:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 114;
                    var1 = var4[var1];
                    var3 = undefined;
                    var13 = var2.bind(var3)(var1);
                    var11 = var13.openURL;
                    var1 = _closure1_slot56;
                    var1 = var1.SAFARI;
                    var1 = var11.bind(var13)(var14, var1);
                    var1 = 113;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var4 = _closure1_slot39;
                    var4 = var4.PLAY;
                    var1['type'] = var4;
                    var4 = _closure1_slot40;
                    var4 = var4.MESSAGE_EMBED;
                    var1['source'] = var4;
                    var4 = var6.author;
                    var4 = var4.id;
                    var1['userId'] = var4;
                    var11 = var7 == var12;
                    var4 = undefined;
                    if(var11) { _fun0035_ip = 219; continue _fun0035 }
case 220:
                    var4 = var12.guild_id;
case 219:
                    var1['guildId'] = var4;
                    var1['channelId'] = var10;
                    var4 = var16.id;
                    var1['applicationId'] = var4;
                    var4 = var6.id;
                    var1['messageId'] = var4;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var4 = 79;
                    var4 = var13[var4];
                    var4 = var11.bind(var3)(var4);
                    var11 = var4.INVITE_EMBED;
                    var4 = new Array(1);
                    var4[0] = var11;
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0035_ip = 53; continue _fun0035;
case 37:
                    var17 = var8.session_id;
                    if(!(var7 != var17)) { _fun0035_ip = 221; continue _fun0035 }
case 222:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 111;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.getRemoteJoinableActivityPlatform;
                    var4 = var1.bind(var2)(var8);
                    var1 = var7 != var4;
                    var15 = undefined;
                    if(!var1) { _fun0035_ip = 223; continue _fun0035 }
case 224:
                    var2 = var8.party;
                    var11 = var7 == var2;
                    var1 = undefined;
                    if(var11) { _fun0035_ip = 225; continue _fun0035 }
case 226:
                    var1 = var2.id;
case 225:
                    var15 = var1;
case 223:
                    var2 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var1 = 112;
                    var1 = var11[var1];
                    var14 = var2.bind(var3)(var1);
                    var13 = var14.join;
                    var1 = {};
                    var18 = var18.id;
                    var1['userId'] = var18;
                    var1['sessionId'] = var17;
                    var1['application'] = var16;
                    var1['channelId'] = var10;
                    var16 = var6.id;
                    var1['messageId'] = var16;
                    var1['applicationActivity'] = var8;
                    var1['remotePartyId'] = var15;
                    var1 = var13.bind(var14)(var1);
                    var1 = 113;
                    var1 = var11[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var11 = _closure1_slot39;
                    var11 = var11.JOIN;
                    var1['type'] = var11;
                    var11 = _closure1_slot40;
                    var11 = var11.MESSAGE_EMBED;
                    var1['source'] = var11;
                    var11 = var6.author;
                    var11 = var11.id;
                    var1['userId'] = var11;
                    var13 = var7 == var12;
                    var11 = undefined;
                    if(var13) { _fun0035_ip = 227; continue _fun0035 }
case 228:
                    var11 = var12.guild_id;
case 227:
                    var1['guildId'] = var11;
                    var1['channelId'] = var10;
                    var1['applicationId'] = var9;
                    var8 = var8.party;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0035_ip = 152; continue _fun0035 }
case 229:
                    var7 = var8.id;
case 152:
                    var1['partyId'] = var7;
                    var6 = var6.id;
                    var1['messageId'] = var6;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 79;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.INVITE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1['analyticsLocations'] = var5;
                    var1['remoteJoinPlatform'] = var4;
                    var1 = var2.bind(var3)(var1);
case 53:
                    var1 = undefined;
                    return var1;
case 221:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapActivityResource'] = var4;
            var4 = function(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 115;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.canFulfillStreamRequest;
                    var7 = true;
                    var6 = var4.bind(var5)(var3, var7);
                    var5 = _closure1_slot6;
                    var4 = 1;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var4 = var5[var4];
                    if(!var4) { _fun0036_ip = 230; continue _fun0036 }
case 207:
                    var5 = _closure1_slot22;
                    var4 = var5.getChannel;
                    var3 = var3.channel_id;
                    var6 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0036_ip = 230; continue _fun0036 }
case 209:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 116;
                    var5 = var4[var2];
                    var8 = var3.bind(var1)(var5);
                    var5 = var8.getOSRequirement;
                    var9 = var5.bind(var8)();
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getStreamPressHandler;
                    var10 = false;
                    var13 = var4;
                    var12 = var6;
                    var11 = true;
                    var2 = var13[var3](var12, var11, var10, var9, var8);
                    var2 = var2.bind(var1)();
case 230:
                    return var1;
                }
            };
            var3['handleTapStreamRequest'] = var4;
            var4 = function(arg1) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var6 = arg1;
                    var3 = var6.author;
                    var2 = var6.application;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0037_ip = 231; continue _fun0037 }
case 94:
                    if(!(var1 != var2)) { _fun0037_ip = 231; continue _fun0037 }
case 214:
                    var3 = var3.id;
                    if(!(var1 != var3)) { _fun0037_ip = 231; continue _fun0037 }
case 232:
                    var7 = _closure1_slot33;
                    var5 = var7.getApplicationActivity;
                    var3 = var2.id;
                    var2 = true;
                    var5 = var5.bind(var7)(var3, var2);
                    if(!(var1 != var5)) { _fun0037_ip = 231; continue _fun0037 }
case 110:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 117;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.sendActivityInvite;
                    var1 = {};
                    var6 = var6.channel_id;
                    var1['channelId'] = var6;
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN;
                    var1['type'] = var6;
                    var1['activity'] = var5;
                    var4 = _closure1_slot40;
                    var4 = var4.MESSAGE_EMBED;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
case 231:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapActivityInviteToJoin'] = var4;
            var4 = function(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var1 = arg1;
                    var9 = var1.invite;
                    var6 = var1.isMember;
                    var2 = var1.primary;
                    var3 = var1.secondary;
                    var8 = var1.guildEventId;
                    var7 = var1.recurrenceId;
                    var1 = null;
                    if(!(var1 != var9)) { _fun0038_ip = 203; continue _fun0038 }
case 233:
                    var5 = var9.guild_scheduled_event;
                    var10 = var1 == var5;
                    var4 = undefined;
                    if(var10) { _fun0038_ip = 93; continue _fun0038 }
case 234:
                    var4 = var5.id;
case 93:
                    var8 = var4;
case 203:
                    var10 = _closure1_slot13;
                    var4 = var10.getGuildScheduledEvent;
                    var4 = var4.bind(var10)(var8);
                    if(!(var1 != var4)) { _fun0038_ip = 235; continue _fun0038 }
case 95:
                    if(!(var1 != var8)) { _fun0038_ip = 235; continue _fun0038 }
case 236:
                    if(var6) { _fun0038_ip = 126; continue _fun0038 }
case 237:
                    if(!(var1 != var9)) { _fun0038_ip = 126; continue _fun0038 }
case 16:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 74;
                    var6 = var10[var6];
                    var10 = undefined;
                    var6 = var11.bind(var10)(var6);
                    var6 = var6.bind(var10)(var9);
                    var6 = {};
                    var10 = 'accept';
                    var6['action'] = var10;
                    return var6;
case 126:
                    if(var3) { _fun0038_ip = 238; continue _fun0038 }
case 230:
                    if(!var2) { _fun0038_ip = 239; continue _fun0038 }
case 210:
                    var3 = _closure1_slot14;
                    var10 = undefined;
                    var3 = var3.bind(var10)(var4);
                    if(var3) { _fun0038_ip = 29; continue _fun0038 }
case 239:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 119;
                    var6 = var6[var3];
                    var3 = undefined;
                    var12 = var11.bind(var3)(var6);
                    if(var2) { _fun0038_ip = 116; continue _fun0038 }
case 240:
                    var2 = var12.transitionToEventDetailsFromInvite;
                    var2 = var2.bind(var12)(var4, var7);
                    var2 = {};
                    var3 = 'transition';
                    var2['action'] = var3;
                    _fun0038_ip = 241; continue _fun0038;
case 116:
                    var11 = var12.handleGuildScheduledEventRsvp;
                    var6 = var4.id;
                    var3 = var4.guild_id;
                    var3 = var11.bind(var12)(var6, var7, var3);
                    var3 = {};
                    var6 = 'rsvp';
                    var3['action'] = var6;
                    var2 = var3;
case 241:
                    _fun0038_ip = 155; continue _fun0038;
case 29:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var3 = 119;
                    var3 = var11[var3];
                    var6 = var6.bind(var10)(var3);
                    var3 = var6.transitionToEventDetailsFromInvite;
                    var3 = var3.bind(var6)(var4, var7);
                    var3 = {};
                    var6 = 'transition';
                    var3['action'] = var6;
                    var2 = var3;
case 155:
                    return var2;
case 238:
                    var2 = var1 != var9;
                    var7 = null;
                    if(!var2) { _fun0038_ip = 242; continue _fun0038 }
case 243:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 118;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.generateInviteKeyFromExtraData;
                    var2 = {};
                    var9 = var9.code;
                    var2['baseCode'] = var9;
                    var2['guildScheduledEventId'] = var8;
                    var7 = var3.bind(var6)(var2);
case 242:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 119;
                    var2 = var6[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.openShareEvent;
                    var8 = var1 != var7;
                    var1 = undefined;
                    if(!var8) { _fun0038_ip = 244; continue _fun0038 }
case 245:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 120;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var1 = var5.bind(var6)(var7);
case 244:
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = {};
                    var2 = 'share';
                    var1['action'] = var2;
                    return var1;
case 235:
                    var1 = {};
                    var2 = 'noop';
                    var1['action'] = var2;
                    return var1;
                }
            };
            var3['handleTapGuildEventInvite'] = var4;
            var4 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot15;
                    var2 = var3.getQuest;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0039_ip = 246; continue _fun0039 }
case 247:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 121;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.openQuestHome;
                    var2 = var2.bind(var3)();
                    _fun0039_ip = 248; continue _fun0039;
case 246:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 121;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openQuestHome;
                    var1 = {};
                    var1['scrollToQuestId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 248:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['_questsEmbedOnPress'] = var4;
            var4 = function(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot15;
                    var3 = var2.getQuest;
                    var3 = var3.bind(var2)(var4);
                    var2 = var2.questEnrollmentBlockedUntil;
                    var6 = null;
                    var2 = var6 != var2;
                    if(!(var6 == var3)) { _fun0040_ip = 130; continue _fun0040 }
case 2:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 121;
                    var7 = var7[var5];
                    var5 = undefined;
                    var7 = var8.bind(var5)(var7);
                    var5 = var7.openQuestHome;
                    var5 = var5.bind(var7)();
                    _fun0040_ip = 97; continue _fun0040;
case 130:
                    if(var2) { _fun0040_ip = 249; continue _fun0040 }
case 184:
                    var7 = var3.userStatus;
                    var8 = var6 == var7;
                    var5 = undefined;
                    var2 = undefined;
                    if(var8) { _fun0040_ip = 237; continue _fun0040 }
case 123:
                    var2 = var7.enrolledAt;
case 237:
                    var2 = var6 != var2;
                    var3 = var3.config;
                    var6 = var3.expiresAt;
                    var3 = global;
                    var3 = var3.Date;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {constructor: {value: var3}});
                    var13 = var7;
                    var3 = new var13[var3](var12);
                    var7 = var3 instanceof Object ? var3 : var7;
                    var3 = var7.toISOString;
                    var3 = var3.bind(var7)();
                    var3 = var6 < var3;
                    if(var2) { _fun0040_ip = 202; continue _fun0040 }
case 135:
                    var2 = var3;
case 202:
                    if(var2) { _fun0040_ip = 250; continue _fun0040 }
case 239:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 122;
                    var2 = var9[var2];
                    var6 = var8.bind(var5)(var2);
                    var3 = var6.enrollInQuest;
                    var2 = {};
                    var7 = 123;
                    var10 = var9[var7];
                    var10 = var8.bind(var5)(var10);
                    var10 = var10.QuestContent;
                    var10 = var10.QUEST_EMBED_MOBILE;
                    var2['questContent'] = var10;
                    var10 = 124;
                    var10 = var9[var10];
                    var10 = var8.bind(var5)(var10);
                    var10 = var10.QuestContentCTA;
                    var10 = var10.ACCEPT_QUEST;
                    var2['questContentCTA'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_EMBED_MOBILE;
                    var2['sourceQuestContent'] = var7;
                    var2 = var3.bind(var6)(var4, var2);
case 250:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 121;
                    var2 = var6[var2];
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.openQuestHome;
                    var2 = {};
                    var2['scrollToQuestId'] = var4;
                    var2 = var3.bind(var5)(var2);
                    _fun0040_ip = 97; continue _fun0040;
case 249:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 121;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openQuestHome;
                    var1 = {};
                    var1['scrollToQuestId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['_questsEmbedOnAccept'] = var4;
            var4 = function(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.messageId;
                    var8 = var3.index;
                    var10 = var3.primary;
                    var7 = var3.secondary;
                    var5 = _closure3_slot0;
                    var3 = var5.getMessageData;
                    var3 = var3.bind(var5)(var6);
                    var13 = null;
                    if(!(var13 != var3)) { _fun0041_ip = 251; continue _fun0041 }
case 10:
                    var6 = var3.message;
                    var5 = _closure3_slot0;
                    var3 = var5.getParams;
                    var3 = var3.bind(var5)();
                    var3 = var3.chatInputRef;
                    var5 = var3.current;
                    if(!(var13 != var5)) { _fun0041_ip = 90; continue _fun0041 }
case 205:
                    var3 = var5.dismissKeyboard;
                    var3 = var3.bind(var5)();
case 90:
                    var3 = _closure1_slot68;
                    var5 = var3.bind(var1)(var6);
                    var9 = var13 == var5;
                    var3 = undefined;
                    if(var9) { _fun0041_ip = 102; continue _fun0041 }
case 252:
                    var3 = var5[var8];
case 102:
                    if(!(var13 != var3)) { _fun0041_ip = 251; continue _fun0041 }
case 179:
                    var8 = var3.type;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var11 = 125;
                    var5 = var5[var11];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.INVITE;
                    if(!(var8 !== var5)) { _fun0041_ip = 253; continue _fun0041 }
case 254:
                    var8 = var3.type;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var11];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.QUESTS_EMBED;
                    if(!(var8 === var5)) { _fun0041_ip = 251; continue _fun0041 }
case 255:
                    var9 = _closure3_slot0;
                    var8 = var9._questsEmbedOnAccept;
                    var5 = var3.code;
                    var5 = var8.bind(var9)(var5);
                    _fun0041_ip = 251; continue _fun0041;
case 253:
                    var8 = _closure1_slot27;
                    var5 = var8.getInvite;
                    var3 = var3.code;
                    var9 = var5.bind(var8)(var3);
                    if(!(var13 != var9)) { _fun0041_ip = 256; continue _fun0041 }
case 257:
                    var5 = _closure1_slot21;
                    var3 = var5.getId;
                    var11 = var3.bind(var5)();
                    var8 = _closure1_slot24;
                    var5 = var8.isMember;
                    var12 = var13 == var9;
                    var3 = undefined;
                    if(var12) { _fun0041_ip = 258; continue _fun0041 }
case 259:
                    var12 = var9.guild;
                    var13 = var13 == var12;
                    var3 = undefined;
                    if(var13) { _fun0041_ip = 258; continue _fun0041 }
case 260:
                    var3 = var12.id;
case 258:
                    var11 = var5.bind(var8)(var3, var11);
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 73;
                    var3 = var8[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.isGuildScheduledEventInviteEmbed;
                    var3 = var3.bind(var5)(var9);
                    var5 = _closure3_slot0;
                    if(var3) { _fun0041_ip = 261; continue _fun0041 }
case 223:
                    if(var11) { _fun0041_ip = 176; continue _fun0041 }
case 262:
                    var3 = var5.handleAcceptInstantInvite;
                    var3 = var3.bind(var5)(var9);
                    var8 = 'accept';
                    _fun0041_ip = 133; continue _fun0041;
case 176:
                    var3 = var5.handleTransitionToInviteChannel;
                    var3 = var3.bind(var5)(var9);
                    var8 = 'transition';
                    _fun0041_ip = 133; continue _fun0041;
case 261:
                    var4 = var5.handleTapGuildEventInvite;
                    var3 = {};
                    var3['invite'] = var9;
                    var3['isMember'] = var11;
                    var3['primary'] = var10;
                    var3['secondary'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.action;
case 133:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 126;
                    var3 = var7[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackInviteEmbedActioned;
                    var3 = {};
                    var3['invite'] = var9;
                    var3['action'] = var8;
                    var8 = var6.author;
                    var8 = var8.id;
                    var3['inviter_id'] = var8;
                    var6 = var6.id;
                    var3['invite_message_id'] = var6;
                    var6 = _closure1_slot1;
                    var2 = 79;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var6 = var2.INVITE_EMBED;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 251:
                    return var1;
case 256:
                    return var1;
                }
            };
            var3['handleTapInviteEmbedAccept'] = var4;
            var4 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.messageId;
                    var6 = var3.index;
                    var10 = var3.primary;
                    var9 = var3.secondary;
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var4 = var4.bind(var5)(var7);
                    var8 = null;
                    if(!(var8 != var4)) { _fun0042_ip = 263; continue _fun0042 }
case 10:
                    var12 = var4.message;
                    var5 = _closure3_slot0;
                    var4 = var5.getParams;
                    var4 = var4.bind(var5)();
                    var4 = var4.chatInputRef;
                    var5 = var4.current;
                    if(!(var8 != var5)) { _fun0042_ip = 90; continue _fun0042 }
case 205:
                    var4 = var5.dismissKeyboard;
                    var4 = var4.bind(var5)();
case 90:
                    var4 = _closure1_slot68;
                    var5 = var4.bind(var1)(var12);
                    var7 = var8 == var5;
                    var4 = undefined;
                    if(var7) { _fun0042_ip = 102; continue _fun0042 }
case 252:
                    var4 = var5[var6];
case 102:
                    if(!(var8 != var4)) { _fun0042_ip = 263; continue _fun0042 }
case 179:
                    var6 = _closure1_slot21;
                    var5 = var6.getId;
                    var11 = var5.bind(var6)();
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var13 = 125;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.INVITE;
                    if(!(var6 !== var5)) { _fun0042_ip = 264; continue _fun0042 }
case 151:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var6 !== var5)) { _fun0042_ip = 264; continue _fun0042 }
case 265:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.TEMPLATE;
                    if(!(var6 !== var5)) { _fun0042_ip = 266; continue _fun0042 }
case 267:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.BUILD_OVERRIDE;
                    if(!(var6 !== var5)) { _fun0042_ip = 268; continue _fun0042 }
case 260:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.MANUAL_BUILD_OVERRIDE;
                    if(!(var6 !== var5)) { _fun0042_ip = 268; continue _fun0042 }
case 226:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.EVENT;
                    if(!(var6 !== var5)) { _fun0042_ip = 269; continue _fun0042 }
case 191:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.CHANNEL_LINK;
                    if(!(var6 !== var5)) { _fun0042_ip = 270; continue _fun0042 }
case 271:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_PROFILE;
                    if(!(var6 !== var5)) { _fun0042_ip = 272; continue _fun0042 }
case 273:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.QUESTS_EMBED;
                    if(!(var6 !== var5)) { _fun0042_ip = 274; continue _fun0042 }
case 275:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_OAUTH2_LINK;
                    if(!(var6 === var5)) { _fun0042_ip = 276; continue _fun0042 }
case 277:
                    var7 = _closure1_slot10;
                    var6 = var7.getApplication;
                    var5 = var4.code;
                    var13 = var6.bind(var7)(var5);
                    if(!(var8 != var13)) { _fun0042_ip = 278; continue _fun0042 }
case 279:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 105;
                    var5 = var7[var5];
                    var15 = var6.bind(var1)(var5);
                    var14 = var15.trackWithMetadata;
                    var5 = _closure1_slot38;
                    var6 = var5.APP_OAUTH2_LINK_EMBED_CTA_CLICKED;
                    var5 = {};
                    var16 = var13.id;
                    var5['application_id'] = var16;
                    var5 = var14.bind(var15)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = 129;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.installApplication;
                    var5 = {};
                    var14 = var13.id;
                    var5['applicationId'] = var14;
                    var14 = var13.customInstallUrl;
                    var5['customInstallUrl'] = var14;
                    var14 = var13.installParams;
                    var5['installParams'] = var14;
                    var13 = var13.integrationTypesConfig;
                    var5['integrationTypesConfig'] = var13;
                    var13 = 'app_oauth2_link_embed';
                    var5['source'] = var13;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 278:
                    return var1;
case 276:
                    var5 = global;
                    var6 = var5.Error;
                    var13 = var4.type;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'Unknown coded link type: ';
                    var5 = var7.bind(var5)(var13);
                    var5 = var6.bind(var1)(var5);
                    throw var5;
case 274:
                    var7 = _closure3_slot0;
                    var6 = var7._questsEmbedOnPress;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 272:
                    var7 = _closure1_slot11;
                    var6 = var7.getApplication;
                    var5 = var4.code;
                    var13 = var6.bind(var7)(var5);
                    if(!(var8 != var13)) { _fun0042_ip = 280; continue _fun0042 }
case 281:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 129;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.installApplication;
                    var5 = {};
                    var14 = var13.id;
                    var5['applicationId'] = var14;
                    var14 = var13.custom_install_url;
                    var5['customInstallUrl'] = var14;
                    var14 = var13.install_params;
                    var5['installParams'] = var14;
                    var13 = var13.integration_types_config;
                    var5['integrationTypesConfig'] = var13;
                    var13 = 'app_directory_profile_embed';
                    var5['source'] = var13;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 280:
                    return var1;
case 270:
                    var7 = var4.code;
                    var6 = var7.split;
                    var5 = '/';
                    var7 = var6.bind(var7)(var5);
                    var6 = _closure1_slot6;
                    var5 = 2;
                    var6 = var6.bind(var1)(var7, var5);
                    var5 = 0;
                    var14 = var6[var5];
                    var5 = 1;
                    var13 = var6[var5];
                    var7 = _closure3_slot0;
                    var6 = var7.handleTapVoiceChannelPreview;
                    var5 = {};
                    var5['guildId'] = var14;
                    var5['channelId'] = var13;
                    var5['message'] = var12;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 269:
                    var7 = var4.code;
                    var6 = var7.split;
                    var5 = '-';
                    var7 = var6.bind(var7)(var5);
                    var6 = _closure1_slot6;
                    var5 = 3;
                    var6 = var6.bind(var1)(var7, var5);
                    var5 = 0;
                    var7 = var6[var5];
                    var5 = 1;
                    var13 = var6[var5];
                    var5 = 2;
                    var12 = var6[var5];
                    var6 = _closure1_slot24;
                    var5 = var6.isMember;
                    var14 = var5.bind(var6)(var7, var11);
                    var7 = _closure3_slot0;
                    var6 = var7.handleTapGuildEventInvite;
                    var5 = {};
                    var5['invite'] = var8;
                    var5['isMember'] = var14;
                    var5['primary'] = var10;
                    var5['secondary'] = var9;
                    var5['guildEventId'] = var13;
                    var5['recurrenceId'] = var12;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 268:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 128;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.toggleOverride;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 266:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 127;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.showModal;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0042_ip = 263; continue _fun0042;
case 264:
                    var6 = _closure1_slot27;
                    var5 = var6.getInvite;
                    var4 = var4.code;
                    var7 = var5.bind(var6)(var4);
                    var6 = _closure1_slot24;
                    var5 = var6.isMember;
                    var12 = var8 == var7;
                    var4 = undefined;
                    if(var12) { _fun0042_ip = 282; continue _fun0042 }
case 283:
                    var12 = var7.guild;
                    var13 = var8 == var12;
                    var4 = undefined;
                    if(var13) { _fun0042_ip = 282; continue _fun0042 }
case 284:
                    var4 = var12.id;
case 282:
                    var11 = var5.bind(var6)(var4, var11);
                    if(!(var8 != var7)) { _fun0042_ip = 285; continue _fun0042 }
case 286:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 73;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isGuildScheduledEventInviteEmbed;
                    var4 = var4.bind(var5)(var7);
                    if(var4) { _fun0042_ip = 287; continue _fun0042 }
case 288:
                    var5 = var7.guild;
                    var6 = var8 == var5;
                    var4 = undefined;
                    if(var6) { _fun0042_ip = 289; continue _fun0042 }
case 290:
                    var4 = var5.id;
case 289:
                    if(!(var8 == var4)) { _fun0042_ip = 291; continue _fun0042 }
case 292:
                    var5 = _closure3_slot0;
                    if(var11) { _fun0042_ip = 293; continue _fun0042 }
case 294:
                    var4 = var5.handleAcceptInstantInvite;
                    var4 = var4.bind(var5)(var7);
                    var6 = 'accept';
                    _fun0042_ip = 295; continue _fun0042;
case 293:
                    var4 = var5.handleTransitionToInviteChannel;
                    var4 = var4.bind(var5)(var7);
                    var6 = 'transition';
                    _fun0042_ip = 295; continue _fun0042;
case 291:
                    var12 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 50;
                    var5 = var4[var5];
                    var14 = var12.bind(var1)(var5);
                    var13 = var14.openLazy;
                    var12 = _closure1_slot0;
                    var5 = 43;
                    var5 = var4[var5];
                    var12 = var12.bind(var1)(var5);
                    var5 = 86;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var12 = var12.bind(var1)(var5, var4);
                    var4 = var7.guild;
                    var15 = var4.id;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'GuildProfileActionSheet:';
                    var5 = var5.bind(var4)(var15);
                    var4 = {};
                    var15 = var7.guild;
                    var15 = var15.id;
                    var4['guildId'] = var15;
                    var4 = var13.bind(var14)(var12, var5, var4);
                    var6 = 'show profile';
                    _fun0042_ip = 295; continue _fun0042;
case 287:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTapGuildEventInvite;
                    var3 = {};
                    var3['invite'] = var7;
                    var3['isMember'] = var11;
                    var3['primary'] = var10;
                    var3['secondary'] = var9;
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.action;
case 295:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 126;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackInviteServerClicked;
                    var9 = var8 == var7;
                    var3 = undefined;
                    if(var9) { _fun0042_ip = 296; continue _fun0042 }
case 297:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var3 = undefined;
                    if(var8) { _fun0042_ip = 296; continue _fun0042 }
case 298:
                    var3 = var7.id;
case 296:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 79;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var7 = var2.INVITE_EMBED;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var2 = var4.bind(var5)(var3, var6, var2);
case 263:
                    return var1;
case 285:
                    return var1;
                }
            };
            var3['handleTapInviteEmbed'] = var4;
            var4 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.guildId;
                    var5 = var1.channelId;
                    var13 = var1.message;
                    var3 = _closure1_slot32;
                    var2 = var3.getGuildId;
                    var12 = var2.bind(var3)();
                    var3 = _closure1_slot31;
                    var2 = var3.getChannelId;
                    var11 = var2.bind(var3)(var12);
                    var3 = _closure1_slot22;
                    var2 = var3.getChannel;
                    var7 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var7)) { _fun0043_ip = 299; continue _fun0043 }
case 119:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 130;
                    var3 = var4[var3];
                    var4 = undefined;
                    var10 = var8.bind(var4)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot38;
                    var8 = var3.CHANNEL_LINK_PREVIEW_JOINED;
                    var3 = {};
                    var13 = var13.author;
                    var13 = var13.id;
                    var3['author_id'] = var13;
                    var3['link_guild_id'] = var6;
                    var3['link_channel_id'] = var5;
                    var13 = var7.type;
                    var3['link_channel_type'] = var13;
                    var3['guild_id'] = var12;
                    var3['channel_id'] = var11;
                    var3 = var9.bind(var10)(var8, var3);
                    var8 = _closure3_slot0;
                    var3 = var8.getParams;
                    var3 = var3.bind(var8)();
                    var3 = var3.chatInputRef;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0043_ip = 181; continue _fun0043 }
case 183:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 181:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 131;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.shouldShowAgeGateForVoiceChannel;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0043_ip = 300; continue _fun0043 }
case 301:
                    var2 = var7.isGuildStageVoice;
                    var2 = var2.bind(var7)();
                    if(var2) { _fun0043_ip = 302; continue _fun0043 }
case 303:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 58;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.selectVoiceChannel;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot0;
                    var2 = 56;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.openChannelCallModal;
                    var2 = var2.bind(var3)(var7);
                    _fun0043_ip = 299; continue _fun0043;
case 302:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 132;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.connectAndOpen;
                    var2 = var2.bind(var3)(var7);
                    _fun0043_ip = 299; continue _fun0043;
case 300:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 49;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.transitionTo;
                    var4 = _closure1_slot53;
                    var1 = var4.CHANNEL;
                    var1 = var1.bind(var4)(var6, var5);
                    var1 = var2.bind(var3)(var1);
case 299:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapVoiceChannelPreview'] = var4;
            var4 = function(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.messageId;
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var4 = var4.bind(var5)(var6);
                    var6 = null;
                    if(!(var6 != var4)) { _fun0044_ip = 169; continue _fun0044 }
case 203:
                    var4 = var4.message;
                    var5 = var4.activity;
                    if(!(var6 != var5)) { _fun0044_ip = 169; continue _fun0044 }
case 7:
                    var5 = var5.type;
                    var6 = _closure1_slot36;
                    var6 = var6.LISTEN;
                    if(!(var5 !== var6)) { _fun0044_ip = 304; continue _fun0044 }
case 305:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN;
                    if(!(var5 !== var6)) { _fun0044_ip = 185; continue _fun0044 }
case 218:
                    var3 = _closure1_slot36;
                    var3 = var3.STREAM_REQUEST;
                    if(!(var5 === var3)) { _fun0044_ip = 169; continue _fun0044 }
case 306:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapStreamRequest;
                    var3 = var3.bind(var5)(var4);
                    _fun0044_ip = 169; continue _fun0044;
case 185:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityResource;
                    var3 = var3.bind(var5)(var4);
                    _fun0044_ip = 169; continue _fun0044;
case 304:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTapSpotifyResource;
                    var2 = var2.bind(var3)(var4);
case 169:
                    return var1;
                }
            };
            var3['handleTapJoinActivity'] = var4;
            var4 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.messageId;
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var4 = var4.bind(var5)(var6);
                    var6 = null;
                    if(!(var6 != var4)) { _fun0045_ip = 307; continue _fun0045 }
case 162:
                    var4 = var4.message;
                    var5 = var4.activity;
                    if(!(var6 != var5)) { _fun0045_ip = 307; continue _fun0045 }
case 209:
                    var5 = var5.type;
                    var6 = _closure1_slot36;
                    var6 = var6.LISTEN;
                    if(!(var5 !== var6)) { _fun0045_ip = 308; continue _fun0045 }
case 170:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN;
                    if(!(var5 !== var6)) { _fun0045_ip = 309; continue _fun0045 }
case 205:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN_REQUEST;
                    if(!(var5 !== var6)) { _fun0045_ip = 124; continue _fun0045 }
case 92:
                    var3 = _closure1_slot36;
                    var3 = var3.STREAM_REQUEST;
                    if(!(var5 === var3)) { _fun0045_ip = 307; continue _fun0045 }
case 252:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapStreamRequest;
                    var3 = var3.bind(var5)(var4);
                    _fun0045_ip = 307; continue _fun0045;
case 124:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityInviteToJoin;
                    var3 = var3.bind(var5)(var4);
                    _fun0045_ip = 307; continue _fun0045;
case 309:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityResource;
                    var3 = var3.bind(var5)(var4);
                    _fun0045_ip = 307; continue _fun0045;
case 308:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTapSpotifyResource;
                    var2 = var2.bind(var3)(var4);
case 307:
                    return var1;
                }
            };
            var3['handleTapJoinRichPresence'] = var4;
            var4 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 133;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleNSFWGuildInvite;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0046_ip = 310; continue _fun0046 }
case 233:
                    var3 = var5.code;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0046_ip = 310; continue _fun0046 }
case 109:
                    var3 = var5.type;
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD;
                    if(!(var3 === var2)) { _fun0046_ip = 143; continue _fun0046 }
case 208:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 134;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAtGuildCapAndNonPremium;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0046_ip = 311; continue _fun0046 }
case 143:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 126;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.acceptInvite;
                    var2 = {};
                    var5 = var5.code;
                    var2['inviteKey'] = var5;
                    var5 = {};
                    var7 = 'Invite Button Embed';
                    var5['location'] = var7;
                    var2['context'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.handleTransitionToInviteChannel;
                    var2['callback'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0046_ip = 310; continue _fun0046;
case 311:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 135;
                    var2 = var8[var2];
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleShowUpsellAlert;
                    var2 = {};
                    var5 = _closure1_slot54;
                    var5 = var5.GUILD_CAP;
                    var2['initialUpsellKey'] = var5;
                    var5 = {};
                    var9 = _closure1_slot43;
                    var9 = var9.INVITE_EMBED;
                    var5['page'] = var9;
                    var2['analyticsLocation'] = var5;
                    var5 = 79;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.INVITE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var7;
                    var2['analyticsLocations'] = var5;
                    var5 = {};
                    var6 = _closure1_slot65;
                    var6 = var6.GUILD_CAP_MODAL_UPSELL;
                    var5['type'] = var6;
                    var2['analyticsProperties'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
case 310:
                    return var1;
                }
            };
            var3['handleAcceptInstantInvite'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 126;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToInviteSync;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTransitionToInviteChannel'] = var4;
            var4 = function() {
                var1 = undefined;
                return var1;
            };
            var3['handleTapGiftCodeEmbed'] = var4;
            var4 = function(arg1) {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.giftCode;
                    var5 = var3.messageId;
                    var4 = _closure1_slot35;
                    var3 = var4.getCurrentUser;
                    var3 = var3.bind(var4)();
                    var10 = null;
                    if(!(var10 != var3)) { _fun0047_ip = 312; continue _fun0047 }
case 167:
                    var3 = var3.verified;
                    if(var3) { _fun0047_ip = 218; continue _fun0047 }
case 128:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 136;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.open;
                    var3 = var3.bind(var4)();
                    _fun0047_ip = 312; continue _fun0047;
case 218:
                    var4 = _closure1_slot23;
                    var3 = var4.get;
                    var3 = var3.bind(var4)(var8);
                    if(!(var10 != var3)) { _fun0047_ip = 312; continue _fun0047 }
case 313:
                    var3 = var3.giftStyle;
                    var3 = var10 != var3;
                    var9 = undefined;
                    if(!var3) { _fun0047_ip = 137; continue _fun0047 }
case 230:
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var9 = var3.bind(var4)(var5);
case 137:
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var5 = var3.paymentsBlocked;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    if(var5) { _fun0047_ip = 271; continue _fun0047 }
case 314:
                    var5 = 130;
                    var5 = var4[var5];
                    var11 = var3.bind(var1)(var5);
                    var7 = var11.track;
                    var5 = _closure1_slot38;
                    var6 = var5.OPEN_MODAL;
                    var5 = {'type': 'gift_accept', 'location': null};
                    var5 = var7.bind(var11)(var6, var5);
                    var5 = 47;
                    var5 = var4[var5];
                    var7 = var3.bind(var1)(var5);
                    var6 = var7.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 43;
                    var2 = var4[var2];
                    var11 = var5.bind(var1)(var2);
                    var2 = 138;
                    var5 = var4[var2];
                    var2 = var4.paths;
                    var5 = var11.bind(var1)(var5, var2);
                    var2 = {};
                    var2['code'] = var8;
                    var11 = var10 != var9;
                    var8 = undefined;
                    if(!var11) { _fun0047_ip = 249; continue _fun0047 }
case 302:
                    var11 = var9.message;
                    var8 = var11.content;
case 249:
                    var2['customMessage'] = var8;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0047_ip = 96; continue _fun0047 }
case 315:
                    var11 = var9.message;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0047_ip = 96; continue _fun0047 }
case 316:
                    var11 = var11.giftInfo;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0047_ip = 96; continue _fun0047 }
case 317:
                    var11 = var11.sound;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0047_ip = 96; continue _fun0047 }
case 318:
                    var8 = var11.id;
case 96:
                    var2['soundId'] = var8;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0047_ip = 159; continue _fun0047 }
case 319:
                    var9 = var9.message;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0047_ip = 159; continue _fun0047 }
case 320:
                    var9 = var9.giftInfo;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0047_ip = 159; continue _fun0047 }
case 321:
                    var9 = var9.emoji;
                    var10 = var10 == var9;
                    var8 = undefined;
                    if(var10) { _fun0047_ip = 159; continue _fun0047 }
case 322:
                    var8 = var9.name;
case 159:
                    var2['emojiName'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0047_ip = 312; continue _fun0047;
case 271:
                    var2 = 137;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
case 312:
                    return var1;
                }
            };
            var3['handleTapGiftCodeAccept'] = var4;
            var4 = function() {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 139;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.canOpenPremiumPlanDirectlyForReferralTrial;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0048_ip = 10; continue _fun0048 }
case 323:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 141;
                    var2 = var5[var2];
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot55;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0048_ip = 324; continue _fun0048;
case 10:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 140;
                    var2 = var7[var2];
                    var3 = var6.bind(var1)(var2);
                    var2 = {};
                    var5 = {};
                    var8 = _closure1_slot43;
                    var8 = var8.REFERRAL_MESSAGE_EMBED;
                    var5['page'] = var8;
                    var2['analyticsLocation'] = var5;
                    var5 = 79;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.REFERRAL_MESSAGE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['analyticsLocations'] = var5;
                    var4 = _closure1_slot64;
                    var4 = var4.TIER_2;
                    var2['premiumType'] = var4;
                    var2 = var3.bind(var1)(var2);
case 324:
                    return var1;
                }
            };
            var3['handleTapReferralRedeem'] = var4;
            var4 = function(arg1) {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0049_ip = 93; continue _fun0049 }
case 94:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 62;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapEmoji'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.contentHandlers;
                var3 = var4.onTapTimestamp;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapTimestamp'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 62;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.contentHandlers;
                var3 = var4.onTapInlineCode;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapInlineCode'] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = var1.roleName;
                var6 = var1.roleIconSource;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 101;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = 'ROLE_NAME-';
                var7 = var8.bind(var7)(var5);
                var2['key'] = var7;
                var2['content'] = var5;
                var5 = {};
                var5['uri'] = var6;
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapRoleIcon'] = var4;
            var4 = function(arg1) {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.gameApplicationId;
                    var1 = var1.timestamp;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0050_ip = 325; continue _fun0050 }
case 166:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 50;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 43;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 142;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var2['applicationId'] = var6;
                    var2['messageTimestamp'] = var1;
                    var1 = 'MessageGameIconActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 325:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapGameIcon'] = var4;
            var4 = function() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 101;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'SUPPRESS_NOTIFICATIONS_TOOLTIP';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 65;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.RO/KYj;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 143;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapSuppressNotificationsIcon'] = var4;
            var4 = function(arg1) {
                var10 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 44;
                var2 = var3[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var9 = var2.userId;
                var8 = var2.guildId;
                var7 = var2.channelId;
                var2 = var2.roleId;
                var5 = _closure1_slot1;
                var4 = 50;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 43;
                var4 = var3[var4];
                var10 = var10.bind(var1)(var4);
                var4 = 144;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var10.bind(var1)(var4, var3);
                var3 = {};
                var3['userId'] = var9;
                var3['guildId'] = var8;
                var3['channelId'] = var7;
                var3['roleId'] = var2;
                var2 = 'ConnectionsRoleMessageBadgeActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var3['handleTapConnectionsRoleTag'] = var4;
            var4 = function() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 101;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 65;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.AeYyL+;
                var5 = var8.bind(var9)(var5);
                var2['content'] = var5;
                var5 = 143;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapTimeoutIcon'] = var4;
            var4 = function(arg1) {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var2.getMessageData;
                    var1 = var1.bind(var2)(var5);
                    var4 = null;
                    if(!(var4 != var1)) { _fun0051_ip = 236; continue _fun0051 }
case 247:
                    var1 = var1.messageChannel;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 145;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.revealMessage;
                    var1 = var1.id;
                    var6 = _closure3_slot0;
                    var6 = var6.params;
                    var6 = var6.revealedMessageId;
                    var4 = null;
                    if(!(var6 !== var5)) { _fun0051_ip = 326; continue _fun0051 }
case 89:
                    var4 = var5;
case 326:
                    var1 = var2.bind(var3)(var1, var4);
case 236:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleReveal'] = var4;
            var4 = function(arg1) {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var13 = var3.messageId;
                    var9 = var3.componentId;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var3 = var3.bind(var4)(var13);
                    var7 = null;
                    if(!(var7 != var3)) { _fun0052_ip = 190; continue _fun0052 }
case 327:
                    var6 = var3.messageChannel;
                    var12 = var3.message;
                    var5 = var12.applicationId;
                    if(!(var7 == var5)) { _fun0052_ip = 170; continue _fun0052 }
case 123:
                    var3 = var12.author;
                    var5 = var3.id;
case 170:
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var4 = 146;
                    var4 = var3[var4];
                    var10 = var11.bind(var1)(var4);
                    var8 = var10.flattenComponents;
                    var4 = var12.components;
                    var8 = var8.bind(var10)(var4);
                    var4 = var8.get;
                    var10 = 91;
                    var3 = var3[var10];
                    var11 = var11.bind(var1)(var3);
                    var3 = var11.asComponentId;
                    var3 = var3.bind(var11)(var9);
                    var11 = var4.bind(var8)(var3);
                    var3 = var7 != var11;
                    if(!var3) { _fun0052_ip = 328; continue _fun0052 }
case 114:
                    var8 = var11.type;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var4 = 147;
                    var4 = var15[var4];
                    var4 = var14.bind(var1)(var4);
                    var4 = var4.ComponentType;
                    var4 = var4.BUTTON;
                    var3 = var8 === var4;
case 328:
                    if(!var3) { _fun0052_ip = 329; continue _fun0052 }
case 330:
                    var4 = var11.customId;
                    var3 = var7 != var4;
case 329:
                    if(!var3) { _fun0052_ip = 190; continue _fun0052 }
case 331:
                    var4 = var11.style;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var14 = 147;
                    var3 = var3[var14];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.ButtonStyle;
                    var3 = var3.PREMIUM;
                    if(!(var4 === var3)) { _fun0052_ip = 332; continue _fun0052 }
case 333:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var3 = 148;
                    var3 = var18[var3];
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.show;
                    var3 = {};
                    var17 = _closure1_slot0;
                    var8 = 65;
                    var15 = var18[var8];
                    var15 = var17.bind(var1)(var15);
                    var19 = var15.intl;
                    var16 = var19.string;
                    var15 = var18[var8];
                    var15 = var17.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.ZtdF0+;
                    var15 = var16.bind(var19)(var15);
                    var3['title'] = var15;
                    var15 = var18[var8];
                    var15 = var17.bind(var1)(var15);
                    var19 = var15.intl;
                    var16 = var19.string;
                    var15 = var18[var8];
                    var15 = var17.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.0BEZLT;
                    var15 = var16.bind(var19)(var15);
                    var3['body'] = var15;
                    var15 = var18[var8];
                    var15 = var17.bind(var1)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var8 = var18[var8];
                    var8 = var17.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.BddRzS;
                    var8 = var15.bind(var16)(var8);
                    var3['confirmText'] = var8;
                    var3 = var4.bind(var7)(var3);
                    _fun0052_ip = 190; continue _fun0052;
case 332:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 149;
                    var2 = var7[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.executeMessageComponentInteraction;
                    var2 = {};
                    var14 = var7[var14];
                    var14 = var8.bind(var1)(var14);
                    var14 = var14.ComponentType;
                    var14 = var14.BUTTON;
                    var2['componentType'] = var14;
                    var2['messageId'] = var13;
                    var12 = var12.flags;
                    var2['messageFlags'] = var12;
                    var11 = var11.customId;
                    var2['customId'] = var11;
                    var7 = var7[var10];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.asComponentId;
                    var7 = var7.bind(var8)(var9);
                    var2['componentId'] = var7;
                    var2['applicationId'] = var5;
                    var5 = var6.id;
                    var2['channelId'] = var5;
                    var5 = var6.getGuildId;
                    var5 = var5.bind(var6)();
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 190:
                    return var1;
                }
            };
            var3['handleTapButtonActionComponent'] = var4;
            var4 = function(arg1) {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.getNativeSyntheticEventData;
                    var4 = arg1;
                    var4 = var5.bind(var6)(var4);
                    var9 = var4.messageId;
                    var _closure4_slot0 = var9;
                    var14 = var4.componentId;
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var5 = var4.bind(var5)(var9);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0053_ip = 334; continue _fun0053 }
case 7:
                    var7 = var5.messageChannel;
                    var6 = var5.message;
                    var5 = var6.flags;
                    var _closure4_slot1 = var5;
                    var5 = var6.applicationId;
                    if(!(var4 == var5)) { _fun0053_ip = 8; continue _fun0053 }
case 134:
                    var8 = var6.author;
                    var5 = var8.id;
case 8:
                    var _closure4_slot2 = var5;
                    var10 = var7.id;
                    var _closure4_slot3 = var10;
                    var5 = var7.getGuildId;
                    var5 = var5.bind(var7)();
                    var _closure4_slot4 = var5;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var12 = 146;
                    var7 = var15[var12];
                    var11 = var13.bind(var1)(var7);
                    var8 = var11.flattenComponents;
                    var7 = var6.components;
                    var11 = var8.bind(var11)(var7);
                    var8 = var11.get;
                    var7 = 91;
                    var7 = var15[var7];
                    var13 = var13.bind(var1)(var7);
                    var7 = var13.asComponentId;
                    var7 = var7.bind(var13)(var14);
                    var8 = var8.bind(var11)(var7);
                    var _closure4_slot5 = var8;
                    if(!(var4 != var8)) { _fun0053_ip = 334; continue _fun0053 }
case 335:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var11 = var11.bind(var1)(var7);
                    var7 = var11.getParents;
                    var6 = var6.components;
                    var11 = var7.bind(var11)(var6, var8);
                    var6 = var4 == var11;
                    var7 = undefined;
                    if(var6) { _fun0053_ip = 336; continue _fun0053 }
case 154:
                    var6 = 0;
                    var7 = var11[var6];
case 336:
                    var4 = var4 == var7;
                    var12 = undefined;
                    if(var4) { _fun0053_ip = 257; continue _fun0053 }
case 337:
                    var12 = var7.type;
case 257:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var6 = 147;
                    var4 = var4[var6];
                    var4 = var11.bind(var1)(var4);
                    var4 = var4.ComponentType;
                    var11 = var4.LABEL;
                    var4 = undefined;
                    if(!(var12 === var11)) { _fun0053_ip = 42; continue _fun0053 }
case 338:
                    var4 = var7;
case 42:
                    var7 = {};
                    var7['channelId'] = var10;
                    var7['guildId'] = var5;
                    var7['containerId'] = var9;
                    var7['labelComponent'] = var4;
                    var2 = function onSubmit(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 149;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.executeMessageComponentInteraction;
                        var2 = {};
                        var6 = _closure4_slot5;
                        var6 = var6.type;
                        var2['componentType'] = var6;
                        var6 = _closure4_slot0;
                        var2['messageId'] = var6;
                        var6 = _closure4_slot1;
                        var2['messageFlags'] = var6;
                        var6 = _closure4_slot5;
                        var6 = var6.customId;
                        var2['customId'] = var6;
                        var6 = _closure4_slot5;
                        var6 = var6.id;
                        var2['componentId'] = var6;
                        var6 = _closure4_slot2;
                        var2['applicationId'] = var6;
                        var6 = _closure4_slot3;
                        var2['channelId'] = var6;
                        var5 = _closure4_slot4;
                        var2['guildId'] = var5;
                        var5 = arg1;
                        var2['localState'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var7['onSubmit'] = var2;
                    var4 = var8.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.STRING_SELECT;
                    if(!(var2 !== var4)) { _fun0053_ip = 339; continue _fun0053 }
case 340:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.USER_SELECT;
                    if(!(var2 !== var4)) { _fun0053_ip = 341; continue _fun0053 }
case 342:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.ROLE_SELECT;
                    if(!(var2 !== var4)) { _fun0053_ip = 341; continue _fun0053 }
case 312:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.MENTIONABLE_SELECT;
                    if(!(var2 !== var4)) { _fun0053_ip = 341; continue _fun0053 }
case 343:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.CHANNEL_SELECT;
                    if(!(var2 === var4)) { _fun0053_ip = 334; continue _fun0053 }
case 344:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 50;
                    var4 = var2[var4];
                    var10 = var5.bind(var1)(var4);
                    var6 = var10.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 43;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 152;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var1)(var4, var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = 'ChannelSelectComponentActionSheet:';
                    var4 = var4.bind(var2)(var9);
                    var2 = {};
                    var2['selectionActionComponent'] = var8;
                    var18 = var2;
                    var17 = var7;
                    var11 = copyDataProperties(var18, var17);
                    var2 = var6.bind(var10)(var5, var4, var2);
                    _fun0053_ip = 334; continue _fun0053;
case 341:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 50;
                    var4 = var2[var4];
                    var10 = var5.bind(var1)(var4);
                    var6 = var10.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 43;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 151;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var1)(var4, var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = 'MentionableSelectComponentActionSheet:';
                    var4 = var4.bind(var2)(var9);
                    var2 = {};
                    var2['selectionActionComponent'] = var8;
                    var18 = var2;
                    var17 = var7;
                    var11 = copyDataProperties(var18, var17);
                    var2 = var6.bind(var10)(var5, var4, var2);
                    _fun0053_ip = 334; continue _fun0053;
case 339:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 50;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 43;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 150;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'StringSelectComponentActionSheet:';
                    var3 = var3.bind(var2)(var9);
                    var2 = {};
                    var2['selectionActionComponent'] = var8;
                    var18 = var2;
                    var17 = var7;
                    var7 = copyDataProperties(var18, var17);
                    var2 = var5.bind(var6)(var4, var3, var2);
case 334:
                    return var1;
                }
            };
            var3['handleTapSelectActionComponent'] = var4;
            var4 = function(arg1) {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.messageId;
                    var6 = var3.stickerId;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var3 = var3.bind(var4)(var5);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0054_ip = 117; continue _fun0054 }
case 130:
                    var5 = var3.messageChannel;
                    var4 = var3.message;
                    var7 = var4.type;
                    var3 = _closure1_slot51;
                    var3 = var3.USER_JOIN;
                    if(!(var7 !== var3)) { _fun0054_ip = 148; continue _fun0054 }
case 171:
                    var7 = var4.type;
                    var3 = _closure1_slot51;
                    var3 = var3.ROLE_SUBSCRIPTION_PURCHASE;
                    if(!(var7 === var3)) { _fun0054_ip = 117; continue _fun0054 }
case 8:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 154;
                    var3 = var8[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.handleRoleSubscriptionPurchaseSystemMessageCtaClicked;
                    var3 = var3.bind(var7)(var5, var4, var6);
                    _fun0054_ip = 117; continue _fun0054;
case 148:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 153;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleWelcomeCtaClicked;
                    var2 = var2.bind(var3)(var5, var4, var6);
case 117:
                    return var1;
                }
            };
            var3['handleTapWelcomeReply'] = var4;
            var4 = function(arg1) {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    var5 = var2.messageId;
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var2 = var2.bind(var3)(var5);
                    var3 = null;
                    if(!(var3 != var2)) { _fun0055_ip = 114; continue _fun0055 }
case 203:
                    var3 = var2.messageChannel;
                    var2 = var2.message;
                    var6 = var2.type;
                    var5 = _closure1_slot51;
                    var5 = var5.STAGE_RAISE_HAND;
                    if(!(var6 === var5)) { _fun0055_ip = 114; continue _fun0055 }
case 106:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 155;
                    var5 = var6[var5];
                    var9 = var7.bind(var1)(var5);
                    var8 = var9.setUserSuppress;
                    var5 = var2.author;
                    var7 = var5.id;
                    var5 = false;
                    var5 = var8.bind(var9)(var3, var7, var5);
                    var5 = _closure1_slot1;
                    var4 = 145;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.deleteMessage;
                    var4 = var3.id;
                    var3 = var2.id;
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 114:
                    return var1;
                }
            };
            var3['handleTapInviteToSpeak'] = var4;
            var4 = function(arg1) {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    var5 = var2.messageId;
                    var8 = var2.channelId;
                    var6 = _closure3_slot0;
                    var3 = var6.isModalOrActionsheetObstructing;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0056_ip = 221; continue _fun0056 }
case 167:
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var3 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0056_ip = 221; continue _fun0056 }
case 144:
                    var5 = var3.message;
                    var3 = var3.messageChannel;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var6 = 106;
                    var7 = var7[var6];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.isAutomodMessageRecord;
                    var7 = var7.bind(var9)(var5);
                    if(!var7) { _fun0056_ip = 221; continue _fun0056 }
case 345:
                    var3 = var3.id;
                    if(!(var3 === var8)) { _fun0056_ip = 221; continue _fun0056 }
case 174:
                    var7 = _closure1_slot22;
                    var3 = var7.getChannel;
                    var9 = var3.bind(var7)(var8);
                    var8 = _closure1_slot26;
                    var7 = var8.getGuild;
                    var10 = var2 == var9;
                    var3 = undefined;
                    if(var10) { _fun0056_ip = 240; continue _fun0056 }
case 346:
                    var3 = var9.guild_id;
case 240:
                    var7 = var7.bind(var8)(var3);
                    if(!(var2 != var7)) { _fun0056_ip = 221; continue _fun0056 }
case 347:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAutomodMessageRecord;
                    var2 = var2.bind(var3)(var5);
                    if(!var2) { _fun0056_ip = 348; continue _fun0056 }
case 150:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAutomodNotification;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0056_ip = 271; continue _fun0056 }
case 348:
                    var8 = _closure1_slot24;
                    var6 = var8.isMember;
                    var3 = var7.id;
                    var2 = var5.author;
                    var2 = var2.id;
                    var2 = var6.bind(var8)(var3, var2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    if(var2) { _fun0056_ip = 349; continue _fun0056 }
case 243:
                    var2 = 101;
                    var2 = var6[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.open;
                    var2 = {};
                    var10 = 'GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER';
                    var2['key'] = var10;
                    var13 = _closure1_slot0;
                    var10 = 65;
                    var11 = var6[var10];
                    var11 = var13.bind(var1)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var6[var10];
                    var10 = var13.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.UsD2YP;
                    var10 = var11.bind(var12)(var10);
                    var2['content'] = var10;
                    var10 = 143;
                    var10 = var6[var10];
                    var10 = var3.bind(var1)(var10);
                    var2['icon'] = var10;
                    var2 = var8.bind(var9)(var2);
                    _fun0056_ip = 221; continue _fun0056;
case 349:
                    var2 = 159;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = var5.author;
                    var2['user'] = var6;
                    var2['guild'] = var7;
                    var2 = var3.bind(var1)(var2);
                    _fun0056_ip = 221; continue _fun0056;
case 271:
                    var6 = _closure1_slot12;
                    var3 = var6.getGuildIncident;
                    var2 = var7.id;
                    var10 = var3.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 156;
                    var6 = var3[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.GuildIncidentActionSources;
                    var6 = var6.MESSAGE;
                    var2['source'] = var6;
                    var6 = 157;
                    var6 = var3[var6];
                    var9 = var8.bind(var1)(var6);
                    var6 = var9.getIncidentAlertType;
                    var6 = var6.bind(var9)(var10);
                    var2['alertType'] = var6;
                    var5 = var5.id;
                    var2['messageId'] = var5;
                    var5 = _closure1_slot1;
                    var4 = 50;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = 43;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 158;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var3['guild'] = var7;
                    var3['analyticsData'] = var2;
                    var2 = 'GuildIncidentActionsActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 221:
                    return var1;
                }
            };
            var3['handleTapAutoModerationActions'] = var4;
            var4 = function(arg1) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.messageId;
                    var9 = var3.channelId;
                    var5 = _closure3_slot0;
                    var3 = var5.getMessageData;
                    var3 = var3.bind(var5)(var2);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0057_ip = 350; continue _fun0057 }
case 122:
                    var8 = var3.message;
                    var6 = var3.messageChannel;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 106;
                    var7 = var7[var3];
                    var10 = var10.bind(var1)(var7);
                    var7 = var10.isAutomodMessageRecord;
                    var7 = var7.bind(var10)(var8);
                    if(!var7) { _fun0057_ip = 350; continue _fun0057 }
case 164:
                    var6 = var6.id;
                    if(!(var6 === var9)) { _fun0057_ip = 350; continue _fun0057 }
case 92:
                    var7 = _closure1_slot22;
                    var6 = var7.getChannel;
                    var7 = var6.bind(var7)(var9);
                    if(!(var5 != var7)) { _fun0057_ip = 350; continue _fun0057 }
case 101:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var3];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isAutomodMessageRecord;
                    var5 = var5.bind(var6)(var8);
                    if(!var5) { _fun0057_ip = 151; continue _fun0057 }
case 351:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var3];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isAutomodNotification;
                    var5 = var5.bind(var6)(var8);
                    if(var5) { _fun0057_ip = 352; continue _fun0057 }
case 151:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = var9[var3];
                    var6 = var5.bind(var1)(var3);
                    var3 = var6.extractAutomodMessageFields;
                    var3 = var3.bind(var6)(var8);
                    var12 = var3.decisionId;
                    var13 = var3.content;
                    var3 = 161;
                    var3 = var9[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.openSubmitFeedback;
                    var15 = var5;
                    var14 = var2;
                    var11 = var7;
                    var3 = var15[var3](var14, var13, var12, var11, var10);
                    _fun0057_ip = 350; continue _fun0057;
case 352:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var5 = 50;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var8 = _closure1_slot0;
                    var4 = 43;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 160;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = var7.guild_id;
                    var3['guildId'] = var7;
                    var3['messageId'] = var2;
                    var2 = 'GuildRaidResolveActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 350:
                    return var1;
                }
            };
            var3['handleTapAutoModerationFeedback'] = var4;
            var4 = function(arg1, arg2, arg3) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var4 = _closure1_slot22;
                    var3 = var4.getChannel;
                    var2 = arg2;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0058_ip = 122; continue _fun0058 }
case 353:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 162;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToThread;
                    var1 = {};
                    var5 = arg3;
                    var1['source'] = var5;
                    var5 = false;
                    var1['navigationReplace'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
case 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTransitionToThread'] = var4;
            var4 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 162;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.transitionToMessage;
                var3 = arg2;
                var2 = arg3;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['handleTransitionToMessage'] = var4;
            var4 = function(arg1) {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.messageId;
                    var7 = var3.channelId;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var3 = var3.bind(var4)(var5);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0059_ip = 129; continue _fun0059 }
case 119:
                    var5 = var3.messageChannel;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 76;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.handleToggleFollowForumPost;
                    var6 = _closure1_slot18;
                    var2 = var6.hasJoined;
                    var2 = var2.bind(var6)(var7);
                    var2 = var3.bind(var4)(var5, var2);
case 129:
                    return var1;
                }
            };
            var3['handleTapFollowForumPost'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 44;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var6 = var2.guildId;
                var5 = var2.channelId;
                var2 = 76;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleCopyLinkForumPost;
                var2 = {};
                var7 = _closure1_slot44;
                var7 = var7.CHANNEL;
                var2['section'] = var7;
                var2 = var3.bind(var4)(var6, var5, var2);
                return var1;
            };
            var3['handleTapShareForumPost'] = var4;
            var4 = function() {
                var1 = undefined;
                return var1;
            };
            var3['handleTapSeeMore'] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var6 = var1.text;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 163;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.copy;
                var2 = var2.bind(var5)(var6);
                var2 = 164;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3['handleCopyText'] = var4;
            var4 = function(arg1) {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.messageId;
                    var5 = var3.tagType;
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var3 = var3.bind(var4)(var6);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0060_ip = 354; continue _fun0060 }
case 130:
                    var4 = _closure1_slot62;
                    var4 = var4.REMIXING_TYPE;
                    if(!(var5 === var4)) { _fun0060_ip = 354; continue _fun0060 }
case 10:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 165;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.bind(var1)();
                    if(var4) { _fun0060_ip = 355; continue _fun0060 }
case 9:
                    return var1;
case 355:
                    var4 = _closure1_slot62;
                    var4 = var4.REMIXING_TYPE;
                    if(!(var5 === var4)) { _fun0060_ip = 354; continue _fun0060 }
case 22:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 166;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.showRemixActionSheet;
                    var3 = var3.message;
                    var6 = _closure1_slot1;
                    var2 = 79;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.MESSAGE_REMIX_TAG;
                    var2 = var4.bind(var5)(var3, var2);
case 354:
                    return var1;
                }
            };
            var3['handleTapTag'] = var4;
            var4 = function(arg1) {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.messageId;
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var2 = var2.bind(var3)(var4);
                    var5 = null;
                    var3 = var5 != var2;
                    if(!var3) { _fun0061_ip = 88; continue _fun0061 }
case 162:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var4 = 165;
                    var4 = var8[var4];
                    var4 = var6.bind(var1)(var4);
                    var3 = var4.bind(var1)();
case 88:
                    if(!var3) { _fun0061_ip = 325; continue _fun0061 }
case 106:
                    var4 = var2.message;
                    var4 = var4.attachments;
                    var6 = var5 == var4;
                    var5 = undefined;
                    if(var6) { _fun0061_ip = 8; continue _fun0061 }
case 108:
                    var5 = var4.length;
case 8:
                    var4 = 0;
                    var3 = var5 > var4;
case 325:
                    if(!var3) { _fun0061_ip = 356; continue _fun0061 }
case 357:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var3 = 94;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.triggerHapticFeedback;
                    var9 = _closure1_slot1;
                    var3 = 95;
                    var3 = var10[var3];
                    var3 = var9.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var5.bind(var6)(var3);
                    var3 = 166;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.remixImage;
                    var4 = var2.message;
                    var2 = var2.message;
                    var3 = var2.attachments;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = {};
                    var8 = 79;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.MESSAGE_REMIX_BUTTON;
                    var2['location'] = var8;
                    var7 = _closure1_slot44;
                    var7 = var7.CHANNEL_TEXT_AREA;
                    var2['section'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 356:
                    return var1;
                }
            };
            var3['handleTapRemix'] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 101;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = _closure3_slot0;
                var6 = var6.params;
                var9 = var6.selectedChannelId;
                var6 = global;
                var6 = var6.HermesInternal;
                var8 = var6.concat;
                var6 = 'FORUM_OP-';
                var6 = var8.bind(var6)(var9);
                var2['key'] = var6;
                var6 = _closure1_slot0;
                var5 = 167;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.getForumOriginalPoster;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapOpTag'] = var4;
            var4 = function(arg1) {
                _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var7 = var2.messageId;
                    var6 = var2.totalDurationSecs;
                    var5 = var2.startDurationSecs;
                    var9 = var2.isVoiceMessage;
                    var2 = var2.attachmentId;
                    var _closure4_slot0 = var2;
                    var4 = _closure3_slot0;
                    var2 = var4.getMessageData;
                    var2 = var2.bind(var4)(var7);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0062_ip = 358; continue _fun0062 }
case 237:
                    if(!(var1 !== var9)) { _fun0062_ip = 329; continue _fun0062 }
case 359:
                    if(var9) { _fun0062_ip = 329; continue _fun0062 }
case 218:
                    var10 = var2.message;
                    var9 = var10.getContentMessage;
                    var9 = var9.bind(var10)();
                    var10 = var4 == var9;
                    var11 = undefined;
                    if(var10) { _fun0062_ip = 304; continue _fun0062 }
case 231:
                    var10 = var9.attachments;
                    var9 = var10.find;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var9.bind(var10)(var8);
case 304:
                    if(!(var4 != var11)) { _fun0062_ip = 150; continue _fun0062 }
case 360:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 169;
                    var4 = var9[var4];
                    var10 = var8.bind(var1)(var4);
                    var9 = var10.logMediaAttachmentPlaybackStarted;
                    var17 = var2.messageChannel;
                    var4 = var2.message;
                    var4 = var4.author;
                    var12 = var4.id;
                    var18 = var10;
                    var16 = var11;
                    var15 = var6;
                    var14 = var7;
                    var13 = var5;
                    var4 = var18[var9](var17, var16, var15, var14, var13, var12, var11);
                    _fun0062_ip = 358; continue _fun0062;
case 150:
                    return var1;
case 329:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 168;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.logVoiceMessagePlaybackStarted;
                    var2 = var2.message;
                    var2 = var2.author;
                    var14 = var2.id;
                    var18 = var4;
                    var17 = var7;
                    var16 = var6;
                    var15 = var5;
                    var2 = var18[var3](var17, var16, var15, var14, var13);
case 358:
                    return var1;
                }
            };
            var3['handleMediaAttachmentPlaybackStarted'] = var4;
            var4 = function(arg1) {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.messageId;
                    var7 = var2.totalDurationSecs;
                    var6 = var2.endDurationSecs;
                    var5 = var2.durationListeningSecs;
                    var10 = var2.isVoiceMessage;
                    var2 = var2.attachmentId;
                    var _closure4_slot0 = var2;
                    var4 = _closure3_slot0;
                    var2 = var4.getMessageData;
                    var2 = var2.bind(var4)(var8);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0063_ip = 361; continue _fun0063 }
case 143:
                    if(!(var1 !== var10)) { _fun0063_ip = 362; continue _fun0063 }
case 108:
                    if(var10) { _fun0063_ip = 362; continue _fun0063 }
case 146:
                    var11 = var2.message;
                    var10 = var11.getContentMessage;
                    var10 = var10.bind(var11)();
                    var12 = var4 == var10;
                    var11 = undefined;
                    if(var12) { _fun0063_ip = 239; continue _fun0063 }
case 98:
                    var12 = var10.attachments;
                    var10 = var12.find;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var10.bind(var12)(var9);
case 239:
                    if(!(var4 != var11)) { _fun0063_ip = 329; continue _fun0063 }
case 363:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var4 = 169;
                    var4 = var10[var4];
                    var10 = var9.bind(var1)(var4);
                    var9 = var10.logMediaAttachmentPlaybackEnded;
                    var4 = var2.message;
                    var4 = var4.author;
                    var15 = var4.id;
                    var19 = var10;
                    var18 = var8;
                    var17 = var7;
                    var16 = var6;
                    var14 = var5;
                    var13 = var11;
                    var4 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
                    _fun0063_ip = 361; continue _fun0063;
case 329:
                    return var1;
case 362:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 168;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.logVoiceMessagePlaybackEnded;
                    var2 = var2.message;
                    var2 = var2.author;
                    var15 = var2.id;
                    var19 = var4;
                    var18 = var8;
                    var17 = var7;
                    var16 = var6;
                    var14 = var5;
                    var2 = var19[var3](var18, var17, var16, var15, var14, var13);
case 361:
                    return var1;
                }
            };
            var3['handleMediaAttachmentPlaybackEnded'] = var4;
            var4 = function(arg1) {
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    var5 = var2.messageId;
                    var6 = var2.errorMessage;
                    var2 = 168;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.logVoiceMessagePlaybackFailed;
                    var2 = null;
                    var7 = var2 != var6;
                    if(!var7) { _fun0064_ip = 184; continue _fun0064 }
case 327:
                    var2 = var6;
case 184:
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                }
            };
            var3['handleVoiceMessagePlaybackFailed'] = var4;
            var4 = function() {
                var4 = _closure1_slot7;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0065_ip = 364; continue _fun0065 }
case 19:
                            var2 = undefined;
                            var5 = undefined;
                            var3 = undefined;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 44;
                            var6 = var8[var6];
                            var8 = var7.bind(var2)(var6);
                            var7 = var8.getNativeSyntheticEventData;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var6);
                            var11 = var6.guildId;
                            var5 = var11;
                            var3 = var6.parentChannelId;
                            var7 = var6.threadId;
                            var6 = var6.messageId;
                            var10 = _closure1_slot24;
                            var9 = var10.isMember;
                            var12 = _closure1_slot35;
                            var8 = var12.getCurrentUser;
                            var12 = var8.bind(var12)();
                            var13 = null;
                            var14 = var13 == var12;
                            var8 = undefined;
                            if(var14) { _fun0065_ip = 355; continue _fun0065 }
case 134:
                            var8 = var12.id;
case 355:
                            var8 = var9.bind(var10)(var11, var8);
                            var11 = _closure1_slot22;
                            var10 = var11.getChannel;
                            var9 = var3;
                            var16 = var10.bind(var11)(var9);
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var9 = 105;
                            var9 = var11[var9];
                            var12 = var10.bind(var2)(var9);
                            var11 = var12.trackWithMetadata;
                            var9 = _closure1_slot38;
                            var10 = var9.MEDIA_POST_PREVIEW_EMBED_CLICKED;
                            var9 = {};
                            var9['media_post_id'] = var7;
                            var13 = var13 != var16;
                            if(!var13) { _fun0065_ip = 365; continue _fun0065 }
case 354:
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot3;
                            var14 = 55;
                            var14 = var17[var14];
                            var15 = var15.bind(var2)(var14);
                            var14 = var15.canViewChannel;
                            var13 = var14.bind(var15)(var16);
case 365:
                            var9['can_access'] = var13;
                            var9['is_member'] = var8;
                            var9 = var11.bind(var12)(var10, var9);
                            if(var8) { _fun0065_ip = 366; continue _fun0065 }
case 367: // try_start_0
                            var9 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var8 = 57;
                            var8 = var10[var8];
                            var11 = var9.bind(var2)(var8);
                            var10 = var11.startLurking;
                            var9 = var5;
                            var8 = {};
                            var5 = var3;
                            var8['channelId'] = var5;
                            var5 = {};
                            var5 = var10.bind(var11)(var9, var5, var8);
                            SaveGenerator(address=293);
case 352:
                            return var5;
case 368:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                            if(var8) { _fun0065_ip = 267; continue _fun0065 }
case 369: // try_end0
                            _fun0065_ip = 315; continue _fun0065;
case 267:
                            return var5;
case 370: // catch_target0
                            CatchBlockStart(arg_register=4);
                            _fun0065_ip = 315; continue _fun0065;
case 366:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var4 = 162;
                            var4 = var8[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.tryTransitionToThreadMessage;
                            var3 = var4.bind(var5)(var3, var7, var6);
case 315:
                            return var2;
case 364:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var4.bind(var1)();
            var3['handleTapPostPreviewEmbed'] = var4;
            var4 = function(arg1) {
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 44;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getNativeSyntheticEventData;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var6 = var3.messageId;
                var4 = _closure1_slot2;
                var3 = 170;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.dismissMediaPostSharePrompt;
                var5 = _closure1_slot1;
                var2 = 88;
                var2 = var7[var2];
                var5 = var5.bind(var1)(var2);
                var2 = var5.castMessageIdAsChannelId;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapDismissMediaPostSharePrompt'] = var4;
            var4 = function(arg1) {
                _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var3.bind(var5)(var2);
                    var6 = var2.messageId;
                    var12 = var2.channelId;
                    var5 = var2.buttonType;
                    var3 = _closure1_slot22;
                    var2 = var3.getChannel;
                    var2 = var2.bind(var3)(var12);
                    var9 = null;
                    if(!(var9 != var2)) { _fun0066_ip = 371; continue _fun0066 }
case 184:
                    var7 = _closure1_slot28;
                    var3 = var7.getMessage;
                    var7 = var3.bind(var7)(var12, var6);
                    if(!(var9 != var7)) { _fun0066_ip = 371; continue _fun0066 }
case 237:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 130;
                    var3 = var10[var3];
                    var11 = var8.bind(var1)(var3);
                    var10 = var11.track;
                    var3 = _closure1_slot38;
                    var8 = var3.CHANNEL_PROMPT_ACTION_CLICKED;
                    var3 = {};
                    var3['message_id'] = var6;
                    var3['channel_id'] = var12;
                    var12 = var2.guild_id;
                    var3['guild_id'] = var12;
                    var3['action_type'] = var5;
                    var3 = var10.bind(var11)(var8, var3);
                    var3 = 'camera';
                    if(!(var3 !== var5)) { _fun0066_ip = 372; continue _fun0066 }
case 87:
                    var3 = 'emoji';
                    if(!(var3 !== var5)) { _fun0066_ip = 373; continue _fun0066 }
case 117:
                    var3 = 'gaming-stats';
                    if(!(var3 !== var5)) { _fun0066_ip = 374; continue _fun0066 }
case 25:
                    var3 = 'gif';
                    if(!(var3 === var5)) { _fun0066_ip = 371; continue _fun0066 }
case 375:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 174;
                    var3 = var8[var3];
                    var8 = var5.bind(var1)(var3);
                    var5 = var8.createPendingReply;
                    var3 = {};
                    var3['message'] = var7;
                    var3['channel'] = var2;
                    var10 = true;
                    var3['shouldMention'] = var10;
                    var3 = var5.bind(var8)(var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var5 = var3.chatInputRef;
                    var3 = var9 == var5;
                    var8 = var5;
                    if(var3) { _fun0066_ip = 370; continue _fun0066 }
case 376:
                    var5 = var5.current;
                    var3 = var9 == var5;
                    var8 = var5;
case 370:
                    if(var3) { _fun0066_ip = 371; continue _fun0066 }
case 377:
                    var5 = var8.openCustomKeyboard;
                    var3 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var9 = 175;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.KeyboardTypes;
                    var9 = var9.EXPRESSION;
                    var3['type'] = var9;
                    var9 = _closure1_slot58;
                    var9 = var9.GIF;
                    var3['context'] = var9;
                    var3 = var5.bind(var8)(var3);
                    _fun0066_ip = 371; continue _fun0066;
case 374:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 173;
                    var3 = var8[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.updateGamingStats;
                    var3 = var3.bind(var5)(var7);
                    _fun0066_ip = 371; continue _fun0066;
case 373:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 172;
                    var3 = var8[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.sendRandomStickerOrEmoji;
                    var3 = var3.bind(var5)(var6, var2);
                    _fun0066_ip = 371; continue _fun0066;
case 372:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var5 = 50;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var8 = _closure1_slot0;
                    var4 = 43;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 171;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var3['message'] = var7;
                    var3['channel'] = var2;
                    var2 = _closure3_slot0;
                    var2 = var2.params;
                    var2 = var2.chatInputRef;
                    var3['chatInputRef'] = var2;
                    var2 = 'ChannelPromptPhoto';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 371:
                    return var1;
                }
            };
            var3['handleTapChannelPromptButton'] = var4;
            var4 = function(arg1) {
                var10 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 44;
                var2 = var3[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var9 = var2.messageId;
                var8 = var2.channelId;
                var7 = var2.attachmentId;
                var2 = var2.embedId;
                var5 = _closure1_slot1;
                var4 = 50;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 43;
                var4 = var3[var4];
                var10 = var10.bind(var1)(var4);
                var4 = 176;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var10.bind(var1)(var4, var3);
                var3 = {};
                var3['messageId'] = var9;
                var3['channelId'] = var8;
                var3['attachmentId'] = var7;
                var3['embedId'] = var2;
                var2 = 'ExplicitMediaLearnMore';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var3['handleTapObscuredMediaLearnMore'] = var4;
            var4 = function(arg1) {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var4 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var5 = var7.getNativeSyntheticEventData;
                    var4 = arg1;
                    var4 = var5.bind(var7)(var4);
                    var5 = var4.messageId;
                    var5 = var4.channelId;
                    var5 = var4.isReveal;
                    var7 = var4.attachmentId;
                    var4 = var4.embedId;
                    var4 = 177;
                    var3 = var3[var4];
                    var6 = var6.bind(var1)(var3);
                    var3 = var6.shouldAgeVerifyForExplicitMedia;
                    var6 = var3.bind(var6)();
                    var3 = var5;
                    if(!var3) { _fun0067_ip = 236; continue _fun0067 }
case 123:
                    var3 = var6;
case 236:
                    if(!var3) { _fun0067_ip = 239; continue _fun0067 }
case 237:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 178;
                    var3 = var10[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.showAgeVerificationGetStartedModal;
                    var3 = {};
                    var9 = _closure1_slot0;
                    var8 = 179;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AgeVerificationModalEntryPoint;
                    var8 = var8.OBSCURED_MEDIA;
                    var3['entryPoint'] = var8;
                    var3 = var6.bind(var7)(var3);
case 239:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackToggleMediaObscurityV2;
                    var2 = {};
                    var2['obscure'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3['onTapObscuredMediaToggle'] = var4;
            var4 = function(arg1) {
                var7 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 44;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var4);
                var5 = var6.getNativeSyntheticEventData;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var6 = var4.classificationId;
                var4 = _closure1_slot1;
                var3 = 47;
                var3 = var2[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.pushLazy;
                var3 = 43;
                var3 = var2[var3];
                var7 = var7.bind(var1)(var3);
                var3 = 180;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var7.bind(var1)(var3, var2);
                var2 = {};
                var2['classificationId'] = var6;
                var6 = true;
                var2['shouldRedirectToAccountStanding'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3['handleTapSafetyPolicyNoticeEmbed'] = var4;
            var4 = function(arg1) {
                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.ctaType;
                    var5 = var1.ctaKey;
                    var1 = _closure1_slot66;
                    var1 = var1.POLICY_VIOLATION_DETAIL;
                    if(!(var1 !== var3)) { _fun0068_ip = 236; continue _fun0068 }
case 13:
                    var1 = _closure1_slot66;
                    var1 = var1.LEARN_MORE_LINK;
                    if(!(var1 === var3)) { _fun0068_ip = 351; continue _fun0068 }
case 378:
                    var1 = null;
                    if(!(var1 != var5)) { _fun0068_ip = 351; continue _fun0068 }
case 93:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 114;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = var3.openURL;
                    var1 = var1.bind(var3)(var5);
                    _fun0068_ip = 351; continue _fun0068;
case 236:
                    var1 = null;
                    if(!(var1 != var5)) { _fun0068_ip = 351; continue _fun0068 }
case 187:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 47;
                    var3 = var1[var3];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 43;
                    var2 = var1[var2];
                    var6 = var6.bind(var7)(var2);
                    var2 = 180;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {};
                    var1['classificationId'] = var5;
                    var5 = true;
                    var1['shouldRedirectToAccountStanding'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 351:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSafetySystemNotificationCta'] = var4;
            var4 = function(arg1) {
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0069_ip = 326; continue _fun0069 }
case 110:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 181;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollAnswerTapped;
                    var2 = var2.bind(var3)(var4);
case 326:
                    return var1;
                }
            };
            var3['handleTapPollAnswer'] = var4;
            var4 = function(arg1) {
                _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0070_ip = 326; continue _fun0070 }
case 110:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 181;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollSubmitVote;
                    var2 = var2.bind(var3)(var4);
case 326:
                    return var1;
                }
            };
            var3['handleTapPollSubmitVote'] = var4;
            var4 = function(arg1) {
                _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0071_ip = 326; continue _fun0071 }
case 110:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 181;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollActionTapped;
                    var2 = var2.bind(var3)(var4);
case 326:
                    return var1;
                }
            };
            var3['handleTapPollAction'] = var4;
            var4 = function(arg1) {
                _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                    var7 = _closure3_slot0;
                    var5 = var7.replaceCorrectMessageParams;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 44;
                    var4 = var4[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var4);
                    var8 = var9.castNativeSyntheticEventData;
                    var4 = arg1;
                    var4 = var8.bind(var9)(var4);
                    var4 = var5.bind(var7)(var4);
                    var _closure4_slot0 = var4;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0072_ip = 254; continue _fun0072 }
case 167:
                    var7 = _closure3_slot0;
                    var6 = var7.getMessageData;
                    var4 = var4.messageId;
                    var6 = var6.bind(var7)(var4);
                    if(!(var5 != var6)) { _fun0072_ip = 254; continue _fun0072 }
case 144:
                    var4 = var6.message;
                    var _closure4_slot1 = var4;
                    var6 = var6.messageChannel;
                    var _closure4_slot2 = var6;
                    var7 = var4.attachments;
                    var6 = var7.findIndex;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.attachmentId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    var _closure4_slot3 = var4;
                    if(!(var5 != var4)) { _fun0072_ip = 254; continue _fun0072 }
case 185:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var4 = 43;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 182;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var5.bind(var1)(var4, var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.openMediaModal;
                        var2 = {};
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 183;
                        var4 = var4[var1];
                        var1 = undefined;
                        var8 = var5.bind(var1)(var4);
                        var7 = var8.extractMediaSourcesFromMessage;
                        var6 = _closure4_slot1;
                        var5 = _closure4_slot2;
                        var5 = var5.guild_id;
                        var5 = var7.bind(var8)(var6, var6, var5);
                        var2['initialSources'] = var5;
                        var5 = _closure4_slot3;
                        var2['initialIndex'] = var5;
                        var5 = _closure4_slot0;
                        var5 = var5.layout;
                        var2['originLayout'] = var5;
                        var5 = 'Channel';
                        var2['analyticsSource'] = var5;
                        var5 = _closure4_slot2;
                        var5 = var5.guild_id;
                        var2['guildId'] = var5;
                        var5 = _closure4_slot2;
                        var5 = var5.id;
                        var2['channelId'] = var5;
                        var4 = _closure4_slot2;
                        var4 = var4.type;
                        var2['channelType'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 254:
                    return var1;
                }
            };
            var3['handleLongPressPollImage'] = var4;
            var4 = function(arg1) {
                _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var4 = var3[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var4);
                    var5 = var6.getNativeSyntheticEventData;
                    var4 = arg1;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.messageId;
                    var4 = var6.channelId;
                    var6 = var6.callback;
                    var8 = 184;
                    var3 = var3[var8];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.CtaButtonType;
                    var3 = var3.MARK_AS_FALSE_POSITIVE;
                    if(!(var3 !== var6)) { _fun0073_ip = 379; continue _fun0073 }
case 12:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var8];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.CtaButtonType;
                    var3 = var3.AGE_VERIFICATION_RETRY;
                    if(!(var3 === var6)) { _fun0073_ip = 380; continue _fun0073 }
case 205:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 178;
                    var3 = var9[var3];
                    var10 = var6.bind(var1)(var3);
                    var7 = var10.showAgeVerificationGetStartedModal;
                    var6 = {};
                    var8 = _closure1_slot0;
                    var3 = 179;
                    var11 = var9[var3];
                    var11 = var8.bind(var1)(var11);
                    var11 = var11.AgeVerificationModalEntryPoint;
                    var11 = var11.SYSTEM_DM_RETRY_BUTTON;
                    var6['entryPoint'] = var11;
                    var6 = var7.bind(var10)(var6);
                    var6 = var9[var3];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.trackAgeVerificationDmClicked;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.AgeVerificationDmCta;
                    var3 = var3.RETRY;
                    var3 = var6.bind(var7)(var3, var4);
                    _fun0073_ip = 380; continue _fun0073;
case 379:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 185;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleSenderFalsePositiveFlow;
                    var2 = var2.bind(var3)(var4, var5);
case 380:
                    return var1;
                }
            };
            var3['handleTapCtaButton'] = var4;
            var4 = function(arg1) {
                _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 44;
                    var4 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.getNativeSyntheticEventData;
                    var4 = var4.bind(var7)(var3);
                    var4 = var4.messageId;
                    var11 = 186;
                    var5 = var5[var11];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getMessageAccessibilityActionFromLabel;
                    var3 = var3.nativeEvent;
                    var3 = var3.action;
                    var8 = var5.bind(var6)(var3);
                    var3 = _closure3_slot0;
                    var5 = var3.params;
                    var3 = var5.getMessage;
                    var10 = var5.chatInputRef;
                    var3 = var3.bind(var1)(var4);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0074_ip = 381; continue _fun0074 }
case 218:
                    var9 = _closure1_slot22;
                    var7 = var9.getChannel;
                    var6 = var3.channel_id;
                    var6 = var7.bind(var9)(var6);
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var11];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.VIEW_PROFILE;
                    if(!(var7 !== var8)) { _fun0074_ip = 382; continue _fun0074 }
case 107:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var11];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.REPLY;
                    if(!(var7 !== var8)) { _fun0074_ip = 333; continue _fun0074 }
case 25:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var11];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.ADD_REACTION;
                    if(!(var7 === var8)) { _fun0074_ip = 381; continue _fun0074 }
case 383:
                    if(!(var5 != var6)) { _fun0074_ip = 381; continue _fun0074 }
case 384:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 77;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.handleAddNewReactions;
                    var7 = var3.id;
                    var7 = var8.bind(var9)(var6, var7);
                    _fun0074_ip = 381; continue _fun0074;
case 333:
                    if(!(var5 != var6)) { _fun0074_ip = 381; continue _fun0074 }
case 34:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 96;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.handleReply;
                    var12 = 'a11y_action';
                    var16 = var9;
                    var15 = var3;
                    var14 = var6;
                    var13 = var10;
                    var7 = var16[var8](var15, var14, var13, var12, var11);
                    _fun0074_ip = 381; continue _fun0074;
case 382:
                    var8 = var5 == var3;
                    var7 = undefined;
                    if(var8) { _fun0074_ip = 136; continue _fun0074 }
case 316:
                    var7 = var3.author;
case 136:
                    if(!(var5 != var7)) { _fun0074_ip = 381; continue _fun0074 }
case 385:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 87;
                    var2 = var8[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = var7.id;
                    var2['userId'] = var7;
                    var7 = var5 == var6;
                    var5 = undefined;
                    if(var7) { _fun0074_ip = 386; continue _fun0074 }
case 387:
                    var5 = var6.id;
case 386:
                    var2['channelId'] = var5;
                    var2['messageId'] = var4;
                    var2 = var3.bind(var1)(var2);
case 381:
                    return var1;
                }
            };
            var3['handleMessageAccessibilityAction'] = var4;
            var4 = function(arg1) {
                _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure3_slot0;
                    var5 = var4.params;
                    var4 = var5.getMessage;
                    var3 = var3.messageId;
                    var3 = var4.bind(var5)(var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0075_ip = 91; continue _fun0075 }
case 130:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 187;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.bind(var1)(var3);
case 91:
                    return var1;
                }
            };
            var3['handleTapForwardFooter'] = var4;
            var4 = function(arg1) {
                _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                    var7 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getNativeSyntheticEventData;
                    var6 = var3.bind(var4)(var7);
                    var3 = _closure3_slot0;
                    var5 = var3.params;
                    var4 = var5.getMessage;
                    var3 = var6.messageId;
                    var9 = var4.bind(var5)(var3);
                    var5 = null;
                    if(!(var5 != var9)) { _fun0076_ip = 333; continue _fun0076 }
case 327:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 188;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getInlineForwardOptions;
                    var6 = var3.bind(var4)(var9, var6);
                    if(!(var5 != var6)) { _fun0076_ip = 333; continue _fun0076 }
case 218:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var3 = var3.bind(var4)(var6);
                    var8 = var3.length;
                    var3 = var7.nativeEvent;
                    var3 = var3.triggerHaptic;
                    if(!var3) { _fun0076_ip = 347; continue _fun0076 }
case 388:
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 94;
                    var3 = var12[var3];
                    var10 = var4.bind(var1)(var3);
                    var4 = var10.triggerHapticFeedback;
                    var11 = _closure1_slot1;
                    var3 = 95;
                    var3 = var12[var3];
                    var3 = var11.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var4.bind(var10)(var3);
case 347:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 189;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openForwardModal;
                    var2 = {};
                    var2['message'] = var9;
                    var7 = var7.nativeEvent;
                    var7 = var7.location;
                    var9 = var5 != var7;
                    var5 = 'inline-button';
                    if(!var9) { _fun0076_ip = 380; continue _fun0076 }
case 182:
                    var5 = var7;
case 380:
                    var2['source'] = var5;
                    var7 = 0;
                    var5 = undefined;
                    if(!(var7 !== var8)) { _fun0076_ip = 31; continue _fun0076 }
case 389:
                    var5 = var6;
case 31:
                    var2['forwardOptions'] = var5;
                    var2 = var3.bind(var4)(var2);
case 333:
                    return var1;
                }
            };
            var3['handleTapInlineForward'] = var4;
            var4 = function(arg1) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 44;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.getNativeSyntheticEventData;
                var3 = arg1;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var2 = 190;
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3['handleTapSoundmoji'] = var4;
            var4 = function(arg1) {
                _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var7 = var4.bind(var5)(var2);
                    var5 = null;
                    var2 = var5 != var7;
                    if(!var2) { _fun0077_ip = 390; continue _fun0077 }
case 391:
                    var4 = var7.guildId;
                    var2 = var5 != var4;
case 390:
                    if(!var2) { _fun0077_ip = 124; continue _fun0077 }
case 234:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 50;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 43;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 86;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var8 = var7.guildId;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'GuildProfileActionSheet:';
                    var3 = var3.bind(var2)(var8);
                    var2 = {};
                    var7 = var7.guildId;
                    var2['guildId'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 124:
                    return var1;
                }
            };
            var3['handleTapClanTagChiplet'] = var4;
            var4 = function(arg1) {
                _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.messageId;
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot4;
                    var5 = var5.bind(var1)(var6, var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var3 = var3.getMessage;
                    var6 = var3.bind(var1)(var4);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0078_ip = 148; continue _fun0078 }
case 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 191;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.onTapContentInventoryEntryEmbed;
                    var2 = {};
                    var2['message'] = var6;
                    var6 = var5.authorId;
                    var2['authorId'] = var6;
                    var6 = var5.contentId;
                    var2['contentId'] = var6;
                    var5 = var5.tappedElement;
                    var2['tappedElement'] = var5;
                    var2 = var3.bind(var4)(var2);
case 148:
                    return var1;
                }
            };
            var3['handleTapContentInventoryEntryEmbed'] = var4;
            var4 = function(arg1) {
                _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var5 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var4 = var3.getMessage;
                    var3 = var5.messageId;
                    var6 = var4.bind(var1)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0079_ip = 129; continue _fun0079 }
case 130:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 192;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleTapAppMessageEmbed;
                    var2 = {};
                    var8 = var2;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'message';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
case 129:
                    return var1;
                }
            };
            var3['handleTapAppMessageEmbed'] = var4;
            var4 = function(arg1) {
                _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var5 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var4 = var3.getMessage;
                    var3 = var5.messageId;
                    var6 = var4.bind(var1)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0080_ip = 129; continue _fun0080 }
case 130:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 193;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleTapPreviewSharedClientTheme;
                    var2 = {};
                    var8 = var2;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'message';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
case 129:
                    return var1;
                }
            };
            var3['handleTapPreviewSharedClientTheme'] = var4;
            var2 = function(arg1) {
                _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 44;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var5 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var4 = var3.getMessage;
                    var3 = var5.messageId;
                    var6 = var4.bind(var1)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0081_ip = 129; continue _fun0081 }
case 130:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 194;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleSharedClientThemeViewed;
                    var2 = {};
                    var8 = var2;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var5 = 'message';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
case 129:
                    return var1;
                }
            };
            var3['handleSharedClientThemeViewed'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'params';
        var1['key'] = var2;
        var2 = function get() {
            var2 = this;
            var1 = var2.getParams;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'replaceCorrectMessageParams';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var7 = arg1;
                var6 = this;
                var1 = var6.params;
                var3 = var1.getMessage;
                var5 = var7.nativeEvent;
                var2 = var5.messageId;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = null;
                if(!(var3 == var4)) { _fun0082_ip = 21; continue _fun0082 }
case 392:
                return var1;
case 21:
                var9 = var4.type;
                var8 = _closure1_slot51;
                var8 = var8.THREAD_STARTER_MESSAGE;
                if(!(var9 !== var8)) { _fun0082_ip = 16; continue _fun0082 }
case 93:
                var11 = var4.id;
                var10 = var4.channel_id;
                var8 = {};
                var13 = var8;
                var12 = var5;
                var9 = copyDataProperties(var13, var12);
                var9 = 'messageId';
                var8[var9] = var11;
                var9 = 'channelId';
                var8[var9] = var10;
                return var8;
case 16:
                var4 = var4.messageReference;
                if(!(var3 != var4)) { _fun0082_ip = 32; continue _fun0082 }
case 393:
                var10 = _closure1_slot28;
                var9 = var10.getMessage;
                var8 = var4.channel_id;
                var2 = var4.message_id;
                var2 = var9.bind(var10)(var8, var2);
                if(!(var3 == var2)) { _fun0082_ip = 394; continue _fun0082 }
case 115:
                var3 = var6.handleLongPressMessage;
                var2 = {};
                var13 = var2;
                var12 = var7;
                var7 = copyDataProperties(var13, var12);
                var8 = {};
                var13 = var8;
                var12 = var5;
                var7 = copyDataProperties(var13, var12);
                var9 = 0;
                var7 = 'mediaIndex';
                var8[var7] = var9;
                var9 = '';
                var7 = 'mediaType';
                var8[var7] = var9;
                var7 = 'nativeEvent';
                var2[var7] = var8;
                var2 = var3.bind(var6)(var2);
                var2 = undefined;
                _fun0082_ip = 395; continue _fun0082;
case 394:
                var3 = {};
                var13 = var3;
                var12 = var5;
                var5 = copyDataProperties(var13, var12);
                var6 = var4.message_id;
                var5 = 'messageId';
                var3[var5] = var6;
                var5 = var4.channel_id;
                var4 = 'channelId';
                var3[var4] = var5;
                var2 = var3;
case 395:
                return var2;
case 32:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 195;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/MessagesHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MessagesHandlers'] = var2;
    return var1;
})();