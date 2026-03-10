// app/modules/messages/native/MessagesHandlers.tsx
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
            var4 = _closure1_slot18;
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
    var _closure1_slot62 = var1;
    var1 = ['messageId'];
    var _closure1_slot4 = var1;
    var1 = ['messageId'];
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot25 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot26 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot27 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot28 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot29 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot30 = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot31 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot32 = var4;
    var4 = 26;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot33 = var4;
    var4 = 27;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot34 = var4;
    var4 = 28;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SeparatorAction;
    var _closure1_slot35 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot36 = var7;
    var7 = var4.ActivityFlags;
    var _closure1_slot37 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot38 = var7;
    var7 = var4.ActivityTypes;
    var _closure1_slot39 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot40 = var7;
    var7 = var4.AnalyticsGameOpenTypes;
    var _closure1_slot41 = var7;
    var7 = var4.AnalyticsLocations;
    var _closure1_slot42 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot43 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot44 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot45 = var7;
    var7 = var4.AnalyticsSections;
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
    var4 = 30;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot57 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot58 = var7;
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot59 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetySystemNotificationCtaType;
    var _closure1_slot60 = var4;
    var4 = 33;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OpenThreadAnalyticsLocations;
    var _closure1_slot61 = var4;
    var2 = function() {
        var4 = _closure1_slot10;
        var3 = function MessagesHandlers(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot9;
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
                var1 = 34;
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
                    var3 = 36;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 35;
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
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var3 = 37;
                    var3 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.data;
                    var _closure4_slot0 = var3;
                    var3 = 36;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 38;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.handleMessagesTapChannel;
                        var2 = {};
                        var1 = _closure4_slot0;
                        var2['data'] = var1;
                        var1 = function dismissKeyboard() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.getParams;
                                var1 = var1.bind(var2)();
                                var1 = var1.chatInputRef;
                                var3 = var1.current;
                                var1 = null;
                                var2 = var1 == var3;
                                var1 = undefined;
                                if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 13:
                                var2 = var3.dismissKeyboard;
                                var1 = var2.bind(var3)();
case 20:
                                return var1;
                            }
                        };
                        var2['dismissKeyboard'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapChannel'] = var4;
            var4 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var3 = 37;
                    var3 = var2[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.data;
                    var _closure4_slot0 = var3;
                    var3 = 36;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 39;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.handleMessagesLongPressChannel;
                        var2 = {};
                        var1 = _closure4_slot0;
                        var2['data'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleLongPressChannel'] = var4;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapAttachmentLink'] = var4;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onLongPressAttachmentLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleLongPressAttachmentLink'] = var4;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!var2) { _fun0009_ip = 23; continue _fun0009 }
case 7:
                    var3 = var4.isPrivate;
                    var2 = var3.bind(var4)();
case 23:
                    if(!var2) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 41;
                    var2 = var8[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.checkIsCallActive;
                    var2 = var2.bind(var3)(var7, var6);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    if(var2) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var2 = 43;
                    var2 = var5[var2];
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.showSimpleActionSheet;
                    var2 = {};
                    var8 = 'CallTap';
                    var2['key'] = var8;
                    var9 = {};
                    var11 = 44;
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
                    var8 = 45;
                    var8 = var5[var8];
                    var8 = var3.bind(var1)(var8);
                    var8 = var8.PhoneCallIcon;
                    var9['IconComponent'] = var8;
                    var8 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 42;
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
                    var11 = 46;
                    var11 = var5[var11];
                    var11 = var3.bind(var1)(var11);
                    var11 = var11.VideoIcon;
                    var9['IconComponent'] = var11;
                    var10 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 42;
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
                    _fun0009_ip = 24; continue _fun0009;
case 26:
                    var2 = 42;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleJoinCall;
                    var2 = var2.bind(var3)(var4);
case 24:
                    return var1;
                }
            };
            var3['handleTapCall'] = var4;
            var4 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0010_ip = 21; continue _fun0010 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapMention;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapMention'] = var4;
            var4 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
                    var2 = 47;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleTapCommandMention;
                    var2 = {};
                    var2['channelId'] = var9;
                    var11 = var8.current;
                    var8 = null;
                    var10 = var8 == var11;
                    var9 = undefined;
                    if(var10) { _fun0011_ip = 28; continue _fun0011 }
case 29:
                    var10 = var11.getText;
                    var9 = var10.bind(var11)();
case 28:
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0011_ip = 30; continue _fun0011 }
case 31:
                    var8 = var9;
case 30:
                    var2['currentText'] = var8;
                    var2['commandId'] = var7;
                    var2['commandName'] = var6;
                    var6 = function onOpenCustomKeyboard(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = _closure4_slot2;
                            var4 = var1.current;
                            var1 = null;
                            var2 = var1 == var4;
                            var1 = undefined;
                            if(var2) { _fun0012_ip = 2; continue _fun0012 }
case 32:
                            var3 = var4.openCustomKeyboard;
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
case 2:
                            return var1;
                        }
                    };
                    var2['onOpenCustomKeyboard'] = var6;
                    var5 = function onSetCommand() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 48;
                            var3 = var5[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = 49;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.bind(var1)();
                            var4 = _closure4_slot2;
                            var5 = var4.current;
                            var7 = null;
                            if(!(var7 != var5)) { _fun0013_ip = 33; continue _fun0013 }
case 34:
                            var4 = var5.openSystemKeyboard;
                            var4 = var4.bind(var5)();
case 33:
                            var4 = _closure4_slot2;
                            var8 = var4.current;
                            var4 = var7 == var8;
                            var6 = var8;
                            if(var4) { _fun0013_ip = 9; continue _fun0013 }
case 35:
                            var5 = var8.getApplicationCommandManager;
                            var5 = var5.bind(var8)();
                            var4 = var7 == var5;
                            var6 = var5;
case 9:
                            if(var4) { _fun0013_ip = 36; continue _fun0013 }
case 37:
                            var5 = var6.setPartialCommand;
                            var4 = _closure4_slot1;
                            var3 = _closure4_slot0;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 50;
                            var2 = var8[var2];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.ApplicationCommandTriggerLocations;
                            var2 = var2.MENTION;
                            var2 = var5.bind(var6)(var4, var3, var2);
case 36:
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
                var1 = 47;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleLongPressCommandMention;
                var2 = var2.bind(var3)(var5, var4);
                return var1;
            };
            var3['handleLongPressCommandMention'] = var4;
            var4 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.url;
                    var7 = var1.node;
                    var1 = null;
                    if(!(var1 != var7)) { _fun0014_ip = 38; continue _fun0014 }
case 22:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 51;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.isLinkTrusted;
                    var3 = var3.bind(var6)(var7);
                    if(var3) { _fun0014_ip = 39; continue _fun0014 }
case 38:
                    var3 = false;
                    return var3;
case 39:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 52;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.bind(var4)(var5);
                    var3 = var3.payload;
                    var6 = var3.type;
                    var5 = _closure1_slot47;
                    var5 = var5.INVITE;
                    if(!(var6 === var5)) { _fun0014_ip = 40; continue _fun0014 }
case 41:
                    var5 = var3.inviteCode;
                    if(!(var1 != var5)) { _fun0014_ip = 42; continue _fun0014 }
case 8:
                    var6 = _closure1_slot26;
                    var5 = var6.getInvite;
                    var3 = var3.inviteCode;
                    var3 = var5.bind(var6)(var3);
                    var5 = var1 == var3;
                    if(var5) { _fun0014_ip = 43; continue _fun0014 }
case 44:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 53;
                    var1 = var7[var1];
                    var6 = var6.bind(var4)(var1);
                    var1 = var6.isGuildScheduledEventInviteEmbed;
                    var1 = var1.bind(var6)(var3);
                    var5 = !var1;
case 43:
                    var1 = !var5;
                    if(var5) { _fun0014_ip = 45; continue _fun0014 }
case 46:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 54;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.bind(var4)(var3);
                    var1 = true;
case 45:
                    return var1;
case 42:
                    var1 = false;
                    return var1;
case 40:
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
                var1 = 36;
                var4 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = 55;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var5.bind(var1)(var4, var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                        if(var8) { _fun0015_ip = 47; continue _fun0015 }
case 48:
                        var8 = _closure4_slot1;
                        var6 = var8.message;
case 47:
                        var2['message'] = var6;
                        var6 = _closure4_slot1;
                        var7 = var7 == var6;
                        var6 = undefined;
                        if(var7) { _fun0015_ip = 49; continue _fun0015 }
case 25:
                        var7 = _closure4_slot1;
                        var6 = var7.messageChannel;
case 49:
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0016_ip = 21; continue _fun0016 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onLongPressLink;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleLongPressLink'] = var4;
            var4 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
                    if(var5) { _fun0017_ip = 50; continue _fun0017 }
case 33:
                    var5 = _closure3_slot0;
                    var4 = var5.getMessageData;
                    var4 = var4.bind(var5)(var8);
                    var6 = null;
                    if(!(var6 != var4)) { _fun0017_ip = 50; continue _fun0017 }
case 51:
                    var5 = var4.messageChannel;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 56;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.handleAddOrRemoveReaction;
                    var9 = var6 != var10;
                    var6 = null;
                    if(!var9) { _fun0017_ip = 36; continue _fun0017 }
case 52:
                    var9 = {};
                    var16 = var9;
                    var15 = var10;
                    var11 = copyDataProperties(var16, var15);
                    var11 = var10.emoji;
                    var10 = 'emoji';
                    var9[var10] = var11;
                    var6 = var9;
case 36:
                    var2 = var2.nativeEvent;
                    var12 = var2.location;
                    var17 = var4;
                    var16 = var8;
                    var15 = var5;
                    var14 = var6;
                    var13 = var7;
                    var2 = var17[var3](var16, var15, var14, var13, var12, var11);
case 50:
                    return var1;
                }
            };
            var3['handleTapReaction'] = var4;
            var4 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(var2) { _fun0018_ip = 53; continue _fun0018 }
case 34:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 57;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewReactions;
                    var2 = {};
                    var2['messageId'] = var7;
                    var2['channelId'] = var5;
                    var5 = {};
                    var7 = _closure1_slot43;
                    var7 = var7.CHANNEL;
                    var5['object'] = var7;
                    var6 = _closure1_slot44;
                    var6 = var6.REACTION_OVERFLOW;
                    var5['objectType'] = var6;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 53:
                    return var1;
                }
            };
            var3['handleTapReactionOverflow'] = var4;
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(var2) { _fun0019_ip = 54; continue _fun0019 }
case 55:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 57;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleViewReactions;
                    var2 = {};
                    var2['messageId'] = var9;
                    var2['channelId'] = var7;
                    var7 = null;
                    var9 = var7 != var8;
                    if(!var9) { _fun0019_ip = 56; continue _fun0019 }
case 57:
                    var7 = var8.emoji;
case 56:
                    var2['emoji'] = var7;
                    var2['isSelectedBurst'] = var5;
                    var5 = {};
                    var7 = _closure1_slot43;
                    var7 = var7.CHANNEL;
                    var5['object'] = var7;
                    var6 = _closure1_slot44;
                    var6 = var6.REACTION;
                    var5['objectType'] = var6;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var3['handleLongPressReaction'] = var4;
            var4 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var6)) { _fun0020_ip = 28; continue _fun0020 }
case 58:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 58;
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
case 28:
                    return var1;
                }
            };
            var3['handleOpenSticker'] = var4;
            var4 = function(arg1) {
                var5 = _closure3_slot0;
                var4 = var5.handleOpenProfile;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 59;
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
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 60;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0021_ip = 59; continue _fun0021 }
case 60:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 37;
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
                    if(!(var9 != var6)) { _fun0021_ip = 61; continue _fun0021 }
case 62:
                    var4 = var6.message;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 61;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.bind(var1)(var4);
                    if(!var7) { _fun0021_ip = 63; continue _fun0021 }
case 27:
                    var4 = var4.messageReference;
                    var4 = var4.guild_id;
                    if(!(var9 == var4)) { _fun0021_ip = 64; continue _fun0021 }
case 63:
                    if(!(var9 != var8)) { _fun0021_ip = 61; continue _fun0021 }
case 65:
                    var7 = _closure1_slot34;
                    var4 = var7.getUser;
                    var11 = var4.bind(var7)(var8);
                    var7 = _closure3_slot0;
                    var4 = var7.getParams;
                    var4 = var4.bind(var7)();
                    var4 = var4.chatInputRef;
                    var10 = var6.messageChannel;
                    var6 = var10.isPrivate;
                    var8 = var6.bind(var10)();
                    var12 = _closure1_slot28;
                    var7 = var12.can;
                    var6 = _closure1_slot52;
                    var6 = var6.SEND_MESSAGES;
                    var7 = var7.bind(var12)(var6, var10);
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var6 = 62;
                    var6 = var13[var6];
                    var12 = var12.bind(var1)(var6);
                    var6 = var12.computeIsReadOnlyThread;
                    var6 = var6.bind(var12)(var10);
                    if(!(var1 !== var11)) { _fun0021_ip = 61; continue _fun0021 }
case 66:
                    if(var8) { _fun0021_ip = 67; continue _fun0021 }
case 68:
                    if(!var7) { _fun0021_ip = 61; continue _fun0021 }
case 67:
                    if(var6) { _fun0021_ip = 61; continue _fun0021 }
case 69:
                    var8 = var4.current;
                    if(!(var9 != var8)) { _fun0021_ip = 61; continue _fun0021 }
case 70:
                    var7 = var8.insertText;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 63;
                    var4 = var12[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.getMentionTextWithUser;
                    var6 = var4.bind(var6)(var10, var11);
                    var4 = true;
                    var4 = var7.bind(var8)(var6, var9, var4);
                    _fun0021_ip = 61; continue _fun0021;
case 64:
                    var6 = _closure3_slot0;
                    var4 = var6.handleOpenProfile;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 59;
                    var3 = var8[var3];
                    var3 = var7.bind(var1)(var3);
                    var7 = var3.USERNAME;
                    var3 = new Array(1);
                    var3[0] = var7;
                    var3 = var4.bind(var6)(var5, var3);
                    _fun0021_ip = 61; continue _fun0021;
case 59:
                    var4 = _closure3_slot0;
                    var3 = var4.handleOpenProfile;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 59;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var6 = var2.USERNAME;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var3.bind(var4)(var5, var2);
case 61:
                    return var1;
                }
            };
            var3['handleTapUsername'] = var4;
            var4 = function(arg1) {
                var5 = _closure3_slot0;
                var4 = var5.handleOpenProfile;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 59;
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
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var1)) { _fun0022_ip = 71; continue _fun0022 }
case 72:
                    var7 = var1.messageChannel;
                    var1 = var1.message;
                    var8 = var3 != var10;
                    var4 = undefined;
                    if(!var8) { _fun0022_ip = 73; continue _fun0022 }
case 74:
                    var9 = _closure1_slot34;
                    var8 = var9.getUser;
                    var4 = var8.bind(var9)(var10);
case 73:
                    var9 = var4;
                    if(!(var3 != var5)) { _fun0022_ip = 75; continue _fun0022 }
case 76:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 64;
                    var8 = var11[var8];
                    var10 = var10.bind(var6)(var8);
                    var8 = var10.isPublicSystemMessage;
                    var8 = var8.bind(var10)(var1);
                    if(var8) { _fun0022_ip = 77; continue _fun0022 }
case 78:
                    var10 = var4;
                    if(!(var3 == var4)) { _fun0022_ip = 46; continue _fun0022 }
case 79:
                    var11 = _closure1_slot34;
                    var8 = var11.getUser;
                    var4 = var1.author;
                    var4 = var4.id;
                    var10 = var8.bind(var11)(var4);
case 46:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var12 = 61;
                    var4 = var4[var12];
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.bind(var6)(var1);
                    if(!var4) { _fun0022_ip = 80; continue _fun0022 }
case 81:
                    var4 = var1.messageReference;
                    var8 = var4.guild_id;
                    if(!(var3 == var8)) { _fun0022_ip = 82; continue _fun0022 }
case 80:
                    var11 = var1.type;
                    var4 = _closure1_slot51;
                    var4 = var4.THREAD_STARTER_MESSAGE;
                    var9 = var10;
                    if(!(var11 === var4)) { _fun0022_ip = 75; continue _fun0022 }
case 83:
                    var4 = var1.messageReference;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0022_ip = 75; continue _fun0022 }
case 84:
                    var11 = var1.messageReference;
                    var4 = _closure1_slot18;
                    var1 = var4.getMessageByReference;
                    var1 = var1.bind(var4)(var11);
                    var9 = var10;
                    if(!(var3 != var1)) { _fun0022_ip = 75; continue _fun0022 }
case 85:
                    var4 = var1.message;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0022_ip = 75; continue _fun0022 }
case 86:
                    var11 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var12];
                    var11 = var11.bind(var6)(var4);
                    var4 = var1.message;
                    var4 = var11.bind(var6)(var4);
                    var9 = var10;
                    if(!var4) { _fun0022_ip = 75; continue _fun0022 }
case 87:
                    var4 = var1.message;
                    var4 = var4.messageReference;
                    var9 = var10;
                    if(!(var3 != var4)) { _fun0022_ip = 75; continue _fun0022 }
case 88:
                    var4 = var1.message;
                    var4 = var4.messageReference;
                    var4 = var4.guild_id;
                    var9 = var10;
                    if(!(var3 == var4)) { _fun0022_ip = 89; continue _fun0022 }
case 75:
                    if(!(var3 != var9)) { _fun0022_ip = 71; continue _fun0022 }
case 90:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 67;
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
case 71:
                    return var6;
case 89:
                    var1 = var1.message;
                    var1 = var1.messageReference;
                    var9 = var1.guild_id;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 48;
                    var3 = var1[var3];
                    var7 = var4.bind(var6)(var3);
                    var5 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 36;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = 66;
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
case 82:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 48;
                    var3 = var1[var3];
                    var7 = var4.bind(var6)(var3);
                    var5 = var7.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 36;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = 66;
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
case 77:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 48;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 36;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 65;
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var5)) { _fun0023_ip = 91; continue _fun0023 }
case 92:
                    var6 = var5.messageChannel;
                    var5 = var6.getGuildId;
                    var6 = var5.bind(var6)();
                    if(!(var4 != var8)) { _fun0023_ip = 91; continue _fun0023 }
case 93:
                    if(!(var4 != var6)) { _fun0023_ip = 91; continue _fun0023 }
case 94:
                    var7 = _closure3_slot0;
                    var5 = var7.getParams;
                    var5 = var5.bind(var7)();
                    var5 = var5.chatInputRef;
                    var5 = var5.current;
                    if(!(var4 != var5)) { _fun0023_ip = 95; continue _fun0023 }
case 96:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
case 95:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTransitionToThread;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 68;
                    var3 = var9[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.castMessageIdAsChannelId;
                    var3 = var3.bind(var7)(var8);
                    var2 = _closure1_slot61;
                    var2 = var2.EMBED;
                    var2 = var4.bind(var5)(var6, var3, var2);
case 91:
                    return var1;
                }
            };
            var3['handleTapThreadEmbed'] = var4;
            var4 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.originId;
                    var3 = _closure3_slot0;
                    var1 = var3.getMessageData;
                    var4 = var1.bind(var3)(var4);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0024_ip = 97; continue _fun0024 }
case 98:
                    var1 = var4.messageChannel;
                    var4 = var4.message;
                    var5 = var1.getGuildId;
                    var5 = var5.bind(var1)();
                    if(!(var3 == var5)) { _fun0024_ip = 48; continue _fun0024 }
case 99:
                    var5 = _closure1_slot48;
case 48:
                    var6 = var4.messageReference;
                    var7 = var3 == var6;
                    var4 = undefined;
                    if(var7) { _fun0024_ip = 100; continue _fun0024 }
case 10:
                    var4 = var6.message_id;
case 100:
                    if(!(var3 != var4)) { _fun0024_ip = 97; continue _fun0024 }
case 35:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTransitionToMessage;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var5, var1, var4);
case 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapReply'] = var4;
            var4 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var2)) { _fun0025_ip = 101; continue _fun0025 }
case 33:
                    var5 = _closure1_slot19;
                    var2 = var5.findSummary;
                    var2 = var2.bind(var5)(var7, var6);
                    if(!(var3 != var2)) { _fun0025_ip = 101; continue _fun0025 }
case 25:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var5 = 48;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var4 = 36;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 69;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var3['summary'] = var2;
                    var2 = 'SummaryActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 101:
                    return var1;
                }
            };
            var3['handleTapSummary'] = var4;
            var4 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var8 != var3)) { _fun0026_ip = 102; continue _fun0026 }
case 33:
                    var6 = var3.messageChannel;
                    var3 = var3.message;
                    var9 = var6.getGuildId;
                    var9 = var9.bind(var6)();
                    if(!(var8 == var9)) { _fun0026_ip = 16; continue _fun0026 }
case 103:
                    var9 = _closure1_slot48;
case 16:
                    var8 = _closure3_slot0;
                    var7 = var8.handleTransitionToMessage;
                    var6 = var6.id;
                    var3 = var3.id;
                    var3 = var7.bind(var8)(var9, var6, var3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 70;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setSelectedSummary;
                    var2 = var2.bind(var3)(var5, var4);
case 102:
                    return var1;
                }
            };
            var3['handleTapSummaryJump'] = var4;
            var4 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var6 != var2)) { _fun0027_ip = 104; continue _fun0027 }
case 94:
                    var10 = var2.messageChannel;
                    var8 = var2.message;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0027_ip = 104; continue _fun0027 }
case 57:
                    var5 = _closure1_slot34;
                    var3 = var5.getUser;
                    var2 = var8.author;
                    var2 = var2.id;
                    var5 = var3.bind(var5)(var2);
                    if(!(var6 == var5)) { _fun0027_ip = 105; continue _fun0027 }
case 106:
                    var3 = var8.state;
                    var2 = _closure1_slot50;
                    var2 = var2.SEND_FAILED;
                    if(!(var3 === var2)) { _fun0027_ip = 104; continue _fun0027 }
case 105:
                    var3 = _closure1_slot33;
                    var2 = var3.getUploaderFileForMessageId;
                    var2 = var2.bind(var3)(var4);
                    if(!(var6 != var2)) { _fun0027_ip = 81; continue _fun0027 }
case 107:
                    var3 = var8.state;
                    var2 = _closure1_slot50;
                    var2 = var2.SEND_FAILED;
                    if(!(var3 === var2)) { _fun0027_ip = 104; continue _fun0027 }
case 81:
                    var3 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var2 = 56;
                    var2 = var13[var2];
                    var7 = var3.bind(var1)(var2);
                    var4 = var7.getLongPressSelectedMedia;
                    var2 = 71;
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
                    var2 = 72;
                    var2 = var13[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showLongPressMessageActionSheet;
                    var2 = {};
                    var12 = {};
                    var14 = _closure1_slot46;
                    var14 = var14.CHANNEL;
                    var12['section'] = var14;
                    var14 = _closure1_slot43;
                    var14 = var14.MESSAGE;
                    var12['object'] = var14;
                    var2['analyticsLocation'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 73;
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
                    if(!var8) { _fun0027_ip = 108; continue _fun0027 }
case 109:
                    var6 = var7;
case 108:
                    var2['selectedMedia'] = var6;
                    var2['user'] = var5;
                    var2 = var3.bind(var4)(var2);
case 104:
                    return var1;
                }
            };
            var3['handleLongPressMessage'] = var4;
            var4 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var5 = arg1;
                    var7 = _closure3_slot0;
                    var1 = var7.params;
                    var6 = var1.chatInputRef;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getNativeSyntheticEventData;
                    var3 = var3.bind(var4)(var5);
                    var4 = var3.messageId;
                    var3 = var7.getMessageData;
                    var3 = var3.bind(var7)(var4);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0028_ip = 110; continue _fun0028 }
case 7:
                    var7 = var3.messageChannel;
                    var8 = var3.message;
                    var3 = var5.nativeEvent;
                    var3 = var3.triggerHaptic;
                    if(!var3) { _fun0028_ip = 111; continue _fun0028 }
case 49:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 74;
                    var3 = var12[var3];
                    var10 = var9.bind(var1)(var3);
                    var9 = var10.triggerHapticFeedback;
                    var11 = _closure1_slot1;
                    var3 = 75;
                    var3 = var12[var3];
                    var3 = var11.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var9.bind(var10)(var3);
case 111:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 76;
                    var2 = var9[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['message'] = var8;
                    var2['channel'] = var7;
                    var2['chatInputRef'] = var6;
                    var5 = var5.nativeEvent;
                    var5 = var5.location;
                    var6 = var4 != var5;
                    var4 = 'message_swipe';
                    if(!var6) { _fun0028_ip = 40; continue _fun0028 }
case 112:
                    var4 = var5;
case 40:
                    var2['actionSource'] = var4;
                    var4 = true;
                    var2['invertible'] = var4;
                    var2 = var3.bind(var1)(var2);
case 110:
                    return var1;
                }
            };
            var3['handleInitiateReply'] = var4;
            var4 = function(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var2)) { _fun0029_ip = 113; continue _fun0029 }
case 92:
                    var3 = var2.messageChannel;
                    var2 = var2.message;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 74;
                    var4 = var9[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.triggerHapticFeedback;
                    var8 = _closure1_slot1;
                    var4 = 75;
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
                    if(var4) { _fun0029_ip = 114; continue _fun0029 }
case 102:
                    var4 = 78;
                    var4 = var8[var4];
                    var9 = var5.bind(var1)(var4);
                    var7 = var9.handleCreateThread;
                    var4 = 'Message Shortcut';
                    var4 = var7.bind(var9)(var3, var2, var4);
                    _fun0029_ip = 113; continue _fun0029;
case 114:
                    var4 = 77;
                    var4 = var8[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.transitionToGuild;
                    var3 = var3.guild_id;
                    var7 = _closure1_slot1;
                    var6 = 68;
                    var6 = var8[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.castMessageIdAsChannelId;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var3, var2);
case 113:
                    return var1;
                }
            };
            var3['handleInitiateThread'] = var4;
            var4 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var1 = var5.params;
                    var8 = var1.chatInputRef;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var4)) { _fun0030_ip = 107; continue _fun0030 }
case 115:
                    var7 = var4.messageChannel;
                    var6 = var4.message;
                    var5 = _closure1_slot34;
                    var4 = var5.getCurrentUser;
                    var5 = var4.bind(var5)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 79;
                    var4 = var10[var4];
                    var4 = var9.bind(var1)(var4);
                    var9 = var3 == var5;
                    var3 = undefined;
                    if(var9) { _fun0030_ip = 116; continue _fun0030 }
case 29:
                    var3 = var5.id;
case 116:
                    var3 = var4.bind(var1)(var6, var3);
                    if(!var3) { _fun0030_ip = 107; continue _fun0030 }
case 117:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 78;
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
case 107:
                    return var1;
                }
            };
            var3['handleInitiateEdit'] = var4;
            var4 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var2 != var4)) { _fun0031_ip = 118; continue _fun0031 }
case 92:
                    var5 = var4.messageChannel;
                    var8 = var4.message;
                    var4 = var5.getGuildId;
                    var5 = var4.bind(var5)();
                    if(!(var2 != var8)) { _fun0031_ip = 118; continue _fun0031 }
case 25:
                    if(!(var2 != var5)) { _fun0031_ip = 118; continue _fun0031 }
case 119:
                    var6 = var8.type;
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST;
                    if(!(var4 !== var6)) { _fun0031_ip = 120; continue _fun0031 }
case 121:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_1;
                    if(!(var4 !== var6)) { _fun0031_ip = 120; continue _fun0031 }
case 27:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_2;
                    if(!(var4 !== var6)) { _fun0031_ip = 120; continue _fun0031 }
case 111:
                    var4 = _closure1_slot51;
                    var4 = var4.GUILD_BOOST_TIER_3;
                    if(!(var4 !== var6)) { _fun0031_ip = 120; continue _fun0031 }
case 101:
                    var4 = _closure1_slot51;
                    var4 = var4.AUTO_MODERATION_ACTION;
                    if(!(var4 === var6)) { _fun0031_ip = 118; continue _fun0031 }
case 122:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var9 = 82;
                    var4 = var4[var9];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.isAutomodMessageRecord;
                    var4 = var4.bind(var6)(var8);
                    if(!var4) { _fun0031_ip = 118; continue _fun0031 }
case 123:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var9];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.extractAutomodMessageFields;
                    var4 = var4.bind(var6)(var8);
                    var8 = var4.embedChannel;
                    var6 = var4.flaggedMessageId;
                    var4 = var2 != var6;
                    if(!var4) { _fun0031_ip = 124; continue _fun0031 }
case 125:
                    var4 = var2 != var8;
case 124:
                    if(!var4) { _fun0031_ip = 118; continue _fun0031 }
case 126:
                    var4 = _closure3_slot0;
                    var3 = var4.handleTransitionToMessage;
                    var9 = var2 == var8;
                    var2 = undefined;
                    if(var9) { _fun0031_ip = 127; continue _fun0031 }
case 128:
                    var2 = var8.id;
case 127:
                    var2 = var3.bind(var4)(var5, var2, var6);
                    _fun0031_ip = 118; continue _fun0031;
case 120:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 80;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openApplyBoostModal;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot1;
                    var2 = 81;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot40;
                    var3 = var2.PREMIUM_GUILD_PROMOTION_OPENED;
                    var2 = {};
                    var6 = {};
                    var8 = _closure1_slot46;
                    var8 = var8.CHANNEL_TEXT_AREA;
                    var6['section'] = var8;
                    var7 = _closure1_slot43;
                    var7 = var7.BOOST_ANNOUNCEMENT_UPSELL;
                    var6['object'] = var7;
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 118:
                    return var1;
                }
            };
            var3['handleTapMessage'] = var4;
            var4 = function(arg1) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var3)) { _fun0032_ip = 73; continue _fun0032 }
case 129:
                    var5 = var3.messageChannel;
                    var4 = var3.message;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 83;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleAddDefaultDoubleTapReaction;
                    var2 = var2.bind(var3)(var4, var5);
case 73:
                    return var1;
                }
            };
            var3['handleDoubleTapMessage'] = var4;
            var4 = function(arg1) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var4 = _closure3_slot0;
                    var3 = var4.isModalOrActionsheetObstructing;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0033_ip = 130; continue _fun0033 }
case 131:
                    var4 = var2.type;
                    var5 = _closure1_slot35;
                    var5 = var5.LOAD_MORE_BEFORE;
                    if(!(var5 !== var4)) { _fun0033_ip = 132; continue _fun0033 }
case 133:
                    var5 = _closure1_slot35;
                    var5 = var5.LOAD_MORE_AFTER;
                    if(!(var5 !== var4)) { _fun0033_ip = 134; continue _fun0033 }
case 58:
                    var5 = _closure1_slot35;
                    var5 = var5.TOGGLE_BLOCKED_MESSAGES;
                    if(!(var5 !== var4)) { _fun0033_ip = 135; continue _fun0033 }
case 10:
                    var3 = _closure1_slot35;
                    var3 = var3.DISMISS_SUSPENDED_USER_MESSAGES;
                    if(!(var3 === var4)) { _fun0033_ip = 130; continue _fun0033 }
case 136:
                    var3 = var2.context;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0033_ip = 130; continue _fun0033 }
case 137:
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var3 = var3.dismissMessage;
                    if(!(var4 != var3)) { _fun0033_ip = 130; continue _fun0033 }
case 138:
                    var5 = var2.context;
                    var4 = var5.split;
                    var3 = ',';
                    var5 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var4 = var3.params;
                    var3 = var4.dismissMessage;
                    var3 = var3.bind(var4)(var5);
                    _fun0033_ip = 130; continue _fun0033;
case 135:
                    var4 = var2.context;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0033_ip = 130; continue _fun0033 }
case 91:
                    var4 = _closure3_slot0;
                    var3 = var4.handleReveal;
                    var2 = var2.context;
                    var2 = var3.bind(var4)(var2);
                    _fun0033_ip = 130; continue _fun0033;
case 134:
                    var2 = _closure3_slot0;
                    var3 = var2.params;
                    var2 = var3.loadMoreAfter;
                    var2 = var2.bind(var3)();
                    _fun0033_ip = 130; continue _fun0033;
case 132:
                    var1 = _closure3_slot0;
                    var2 = var1.params;
                    var1 = var2.loadMoreBefore;
                    var1 = var1.bind(var2)();
case 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSeparator'] = var4;
            var4 = function(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                    if(!(var1 != var5)) { _fun0034_ip = 139; continue _fun0034 }
case 140:
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var5)(var2);
                    if(!(var1 != var3)) { _fun0034_ip = 139; continue _fun0034 }
case 48:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 74;
                    var2 = var6[var2];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var2);
                    var7 = var8.triggerHapticFeedback;
                    var2 = _closure1_slot1;
                    var1 = 75;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var7.bind(var8)(var1);
                    var1 = 84;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.cancelUploadItem;
                    var1 = var1.bind(var2)(var3, var4);
case 139:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapCancelUploadItem'] = var4;
            var4 = function(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.author;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0035_ip = 141; continue _fun0035 }
case 142:
                    var1 = var2.id;
                    if(!(var3 != var1)) { _fun0035_ip = 141; continue _fun0035 }
case 143:
                    var5 = _closure1_slot29;
                    var4 = var5.findActivity;
                    var3 = var2.id;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot39;
                        var1 = var1.LISTENING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 85;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.openTrack;
                    var1 = var1.bind(var2)(var3);
case 141:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSpotifyResource'] = var4;
            var4 = function(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var6 = arg1;
                    var19 = var6.author;
                    var1 = var6.activity;
                    var17 = var6.application;
                    var8 = null;
                    if(!(var8 != var19)) { _fun0036_ip = 144; continue _fun0036 }
case 145:
                    if(!(var8 != var1)) { _fun0036_ip = 144; continue _fun0036 }
case 146:
                    if(!(var8 != var17)) { _fun0036_ip = 144; continue _fun0036 }
case 147:
                    var1 = var19.id;
                    if(!(var8 != var1)) { _fun0036_ip = 144; continue _fun0036 }
case 148:
                    var11 = var6.channel_id;
                    var2 = _closure1_slot22;
                    var1 = var2.getChannel;
                    var13 = var1.bind(var2)(var11);
                    var10 = var17.id;
                    var14 = var17.deeplink_uri;
                    var3 = _closure1_slot29;
                    var2 = var3.getApplicationActivity;
                    var1 = var19.id;
                    var9 = var2.bind(var3)(var1, var10);
                    if(!(var8 == var9)) { _fun0036_ip = 149; continue _fun0036 }
case 150:
                    if(!(var8 != var14)) { _fun0036_ip = 144; continue _fun0036 }
case 8:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 93;
                    var1 = var4[var1];
                    var3 = undefined;
                    var12 = var2.bind(var3)(var1);
                    var7 = var12.openURL;
                    var1 = _closure1_slot56;
                    var1 = var1.SAFARI;
                    var1 = var7.bind(var12)(var14, var1);
                    var1 = 92;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var4 = _closure1_slot41;
                    var4 = var4.PLAY;
                    var1['type'] = var4;
                    var4 = _closure1_slot42;
                    var4 = var4.MESSAGE_EMBED;
                    var1['source'] = var4;
                    var4 = var6.author;
                    var4 = var4.id;
                    var1['userId'] = var4;
                    var7 = var8 == var13;
                    var4 = undefined;
                    if(var7) { _fun0036_ip = 151; continue _fun0036 }
case 123:
                    var4 = var13.guild_id;
case 151:
                    var1['guildId'] = var4;
                    var1['channelId'] = var11;
                    var4 = var17.id;
                    var1['applicationId'] = var4;
                    var4 = var6.id;
                    var1['messageId'] = var4;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var4 = 59;
                    var4 = var12[var4];
                    var4 = var7.bind(var3)(var4);
                    var7 = var4.INVITE_EMBED;
                    var4 = new Array(1);
                    var4[0] = var7;
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0036_ip = 144; continue _fun0036;
case 149:
                    var18 = var9.session_id;
                    if(!(var8 != var18)) { _fun0036_ip = 152; continue _fun0036 }
case 153:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var4 = 60;
                    var2 = var1[var4];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0036_ip = 154; continue _fun0036 }
case 64:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var14 = undefined;
                    if(!var2) { _fun0036_ip = 155; continue _fun0036 }
case 90:
                    var2 = _closure1_slot38;
                    var14 = var2.ANDROID;
                    _fun0036_ip = 155; continue _fun0036;
case 154:
                    var2 = _closure1_slot38;
                    var14 = var2.IOS;
case 155:
                    var2 = var9.flags;
                    var7 = var8 != var2;
                    if(!var7) { _fun0036_ip = 156; continue _fun0036 }
case 157:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 86;
                    var2 = var4[var2];
                    var12 = var3.bind(var1)(var2);
                    var4 = var12.hasFlag;
                    var3 = var9.flags;
                    var2 = _closure1_slot37;
                    var2 = var2.EMBEDDED;
                    var7 = var4.bind(var12)(var3, var2);
case 156:
                    var2 = var8 != var14;
                    if(!var2) { _fun0036_ip = 158; continue _fun0036 }
case 159:
                    var12 = var9.supported_platforms;
                    var4 = var8 == var12;
                    var3 = undefined;
                    if(var4) { _fun0036_ip = 160; continue _fun0036 }
case 161:
                    var4 = var12.includes;
                    var3 = var4.bind(var12)(var14);
case 160:
                    var2 = var3;
case 158:
                    var12 = var8 != var2;
                    if(!var12) { _fun0036_ip = 162; continue _fun0036 }
case 163:
                    var12 = var2;
case 162:
                    var3 = _closure1_slot12;
                    var2 = var3.getApplication;
                    var2 = var2.bind(var3)(var10);
                    var3 = var8 != var2;
                    var15 = null;
                    if(!var3) { _fun0036_ip = 164; continue _fun0036 }
case 165:
                    var15 = var2;
case 164:
                    if(!(var8 != var15)) { _fun0036_ip = 166; continue _fun0036 }
case 167:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 87;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getCanJoin;
                    var2 = {};
                    var2['presenceActivity'] = var9;
                    var20 = _closure1_slot32;
                    var16 = var20.getApplicationActivity;
                    var14 = true;
                    var14 = var16.bind(var20)(var10, var14);
                    var2['currentUserPresenceActivity'] = var14;
                    var16 = _closure1_slot21;
                    var14 = var16.getId;
                    var14 = var14.bind(var16)();
                    var2['currentUserId'] = var14;
                    var2['message'] = var6;
                    var2['application'] = var15;
                    var2['isEmbeddedApplication'] = var7;
                    var14 = false;
                    var2['isFrameApplication'] = var14;
                    var2['isGameLaunchable'] = var12;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.canJoin;
                    var4 = var3.remoteJoinPlatform;
                    var3 = var8 != var4;
                    var12 = undefined;
                    if(!var3) { _fun0036_ip = 168; continue _fun0036 }
case 169:
                    var14 = var9.party;
                    var16 = var8 == var14;
                    var3 = undefined;
                    if(var16) { _fun0036_ip = 170; continue _fun0036 }
case 171:
                    var3 = var14.id;
case 170:
                    var12 = var3;
case 168:
                    if(var2) { _fun0036_ip = 172; continue _fun0036 }
case 173:
                    var3 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var2 = 88;
                    var2 = var14[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getSupportsRemoteJoin;
                    var2 = var2.bind(var3)(var9);
                    if(!var2) { _fun0036_ip = 172; continue _fun0036 }
case 174:
                    var3 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var2 = 89;
                    var2 = var14[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getShouldShowAppAuthPrompt;
                    var2 = var2.bind(var3)(var15);
                    if(!var2) { _fun0036_ip = 172; continue _fun0036 }
case 175:
                    var3 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var2 = 90;
                    var2 = var20[var2];
                    var14 = var3.bind(var1)(var2);
                    var3 = var14.startAuthorizationNoHook;
                    var16 = _closure1_slot1;
                    var2 = 59;
                    var2 = var20[var2];
                    var2 = var16.bind(var1)(var2);
                    var16 = var2.INVITE_EMBED;
                    var2 = new Array(1);
                    var2[0] = var16;
                    var2 = var3.bind(var14)(var15, var2);
                    var2 = undefined;
                    return var2;
case 172:
                    var3 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var2 = 91;
                    var2 = var14[var2];
                    var16 = var3.bind(var1)(var2);
                    var15 = var16.join;
                    var2 = {};
                    var19 = var19.id;
                    var2['userId'] = var19;
                    var2['sessionId'] = var18;
                    var2['application'] = var17;
                    var2['channelId'] = var11;
                    var17 = var6.id;
                    var2['messageId'] = var17;
                    var2['applicationActivity'] = var9;
                    var2['remotePartyId'] = var12;
                    var2['embedded'] = var7;
                    var12 = _closure1_slot42;
                    var7 = var12.MESSAGE_EMBED;
                    var2['source'] = var7;
                    var7 = 59;
                    var17 = var14[var7];
                    var17 = var3.bind(var1)(var17);
                    var18 = var17.INVITE_EMBED;
                    var17 = new Array(1);
                    var17[0] = var18;
                    var2['analyticsLocations'] = var17;
                    var2 = var15.bind(var16)(var2);
                    var2 = 92;
                    var2 = var14[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var14 = _closure1_slot41;
                    var14 = var14.JOIN;
                    var2['type'] = var14;
                    var12 = var12.MESSAGE_EMBED;
                    var2['source'] = var12;
                    var12 = var6.author;
                    var12 = var12.id;
                    var2['userId'] = var12;
                    var14 = var8 == var13;
                    var12 = undefined;
                    if(var14) { _fun0036_ip = 176; continue _fun0036 }
case 177:
                    var12 = var13.guild_id;
case 176:
                    var2['guildId'] = var12;
                    var2['channelId'] = var11;
                    var2['applicationId'] = var10;
                    var9 = var9.party;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0036_ip = 178; continue _fun0036 }
case 179:
                    var8 = var9.id;
case 178:
                    var2['partyId'] = var8;
                    var6 = var6.id;
                    var2['messageId'] = var6;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.INVITE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['analyticsLocations'] = var5;
                    var2['remoteJoinPlatform'] = var4;
                    var2 = var3.bind(var1)(var2);
case 144:
                    var2 = undefined;
                    return var2;
case 166:
                    return var1;
case 152:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapActivityResource'] = var4;
            var4 = function(arg1) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 94;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.canFulfillStreamRequest;
                    var7 = true;
                    var6 = var4.bind(var5)(var3, var7);
                    var5 = _closure1_slot8;
                    var4 = 1;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var4 = var5[var4];
                    if(!var4) { _fun0037_ip = 180; continue _fun0037 }
case 181:
                    var5 = _closure1_slot22;
                    var4 = var5.getChannel;
                    var3 = var3.channel_id;
                    var6 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0037_ip = 180; continue _fun0037 }
case 182:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 95;
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
case 180:
                    return var1;
                }
            };
            var3['handleTapStreamRequest'] = var4;
            var4 = function(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var6 = arg1;
                    var3 = var6.author;
                    var2 = var6.application;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0038_ip = 183; continue _fun0038 }
case 22:
                    if(!(var1 != var2)) { _fun0038_ip = 183; continue _fun0038 }
case 143:
                    var3 = var3.id;
                    if(!(var1 != var3)) { _fun0038_ip = 183; continue _fun0038 }
case 184:
                    var7 = _closure1_slot32;
                    var5 = var7.getApplicationActivity;
                    var3 = var2.id;
                    var2 = true;
                    var5 = var5.bind(var7)(var3, var2);
                    if(!(var1 != var5)) { _fun0038_ip = 183; continue _fun0038 }
case 39:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 96;
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
                    var4 = _closure1_slot42;
                    var4 = var4.MESSAGE_EMBED;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
case 183:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapActivityInviteToJoin'] = var4;
            var4 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var1 = arg1;
                    var9 = var1.invite;
                    var6 = var1.isMember;
                    var2 = var1.primary;
                    var3 = var1.secondary;
                    var8 = var1.guildEventId;
                    var7 = var1.recurrenceId;
                    var1 = null;
                    if(!(var1 != var9)) { _fun0039_ip = 129; continue _fun0039 }
case 185:
                    var5 = var9.guild_scheduled_event;
                    var10 = var1 == var5;
                    var4 = undefined;
                    if(var10) { _fun0039_ip = 21; continue _fun0039 }
case 186:
                    var4 = var5.id;
case 21:
                    var8 = var4;
case 129:
                    var10 = _closure1_slot15;
                    var4 = var10.getGuildScheduledEvent;
                    var4 = var4.bind(var10)(var8);
                    if(!(var1 != var4)) { _fun0039_ip = 187; continue _fun0039 }
case 23:
                    if(!(var1 != var8)) { _fun0039_ip = 187; continue _fun0039 }
case 51:
                    if(var6) { _fun0039_ip = 53; continue _fun0039 }
case 188:
                    if(!(var1 != var9)) { _fun0039_ip = 53; continue _fun0039 }
case 189:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 54;
                    var6 = var10[var6];
                    var10 = undefined;
                    var6 = var11.bind(var10)(var6);
                    var6 = var6.bind(var10)(var9);
                    var6 = {};
                    var10 = 'accept';
                    var6['action'] = var10;
                    return var6;
case 53:
                    if(var3) { _fun0039_ip = 190; continue _fun0039 }
case 180:
                    if(!var2) { _fun0039_ip = 191; continue _fun0039 }
case 139:
                    var3 = _closure1_slot16;
                    var10 = undefined;
                    var3 = var3.bind(var10)(var4);
                    if(var3) { _fun0039_ip = 192; continue _fun0039 }
case 191:
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 98;
                    var6 = var6[var3];
                    var3 = undefined;
                    var12 = var11.bind(var3)(var6);
                    if(var2) { _fun0039_ip = 45; continue _fun0039 }
case 193:
                    var2 = var12.transitionToEventDetailsFromInvite;
                    var2 = var2.bind(var12)(var4, var7);
                    var2 = {};
                    var3 = 'transition';
                    var2['action'] = var3;
                    _fun0039_ip = 130; continue _fun0039;
case 45:
                    var11 = var12.handleGuildScheduledEventRsvp;
                    var6 = var4.id;
                    var3 = var4.guild_id;
                    var3 = var11.bind(var12)(var6, var7, var3);
                    var3 = {};
                    var6 = 'rsvp';
                    var3['action'] = var6;
                    var2 = var3;
case 130:
                    _fun0039_ip = 85; continue _fun0039;
case 192:
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var3 = 98;
                    var3 = var11[var3];
                    var6 = var6.bind(var10)(var3);
                    var3 = var6.transitionToEventDetailsFromInvite;
                    var3 = var3.bind(var6)(var4, var7);
                    var3 = {};
                    var6 = 'transition';
                    var3['action'] = var6;
                    var2 = var3;
case 85:
                    return var2;
case 190:
                    var2 = var1 != var9;
                    var7 = null;
                    if(!var2) { _fun0039_ip = 194; continue _fun0039 }
case 127:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 97;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.generateInviteKeyFromExtraData;
                    var2 = {};
                    var9 = var9.code;
                    var2['baseCode'] = var9;
                    var2['guildScheduledEventId'] = var8;
                    var7 = var3.bind(var6)(var2);
case 194:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 98;
                    var2 = var6[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.openShareEvent;
                    var8 = var1 != var7;
                    var1 = undefined;
                    if(!var8) { _fun0039_ip = 195; continue _fun0039 }
case 196:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 99;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var1 = var5.bind(var6)(var7);
case 195:
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = {};
                    var2 = 'share';
                    var1['action'] = var2;
                    return var1;
case 187:
                    var1 = {};
                    var2 = 'noop';
                    var1['action'] = var2;
                    return var1;
                }
            };
            var3['handleTapGuildEventInvite'] = var4;
            var4 = function(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 100;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isMetaQuest;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0040_ip = 197; continue _fun0040 }
case 98:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 101;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.findQuestOrReplacement;
                    var3 = _closure1_slot17;
                    var5 = var3.quests;
                    var4 = var3.excludedQuests;
                    var3 = arg1;
                    var5 = var6.bind(var7)(var3, var5, var4);
                    var3 = null;
                    if(!(var3 == var5)) { _fun0040_ip = 198; continue _fun0040 }
case 25:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 102;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openQuestHome;
                    var3 = var3.bind(var4)();
                    _fun0040_ip = 197; continue _fun0040;
case 198:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 102;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openQuestHome;
                    var2 = {};
                    var5 = var5.id;
                    var2['scrollToQuestId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 197:
                    return var1;
                }
            };
            var3['_questsEmbedOnPress'] = var4;
            var4 = function(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 100;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isMetaQuest;
                    var5 = var3.bind(var4)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    if(var5) { _fun0041_ip = 199; continue _fun0041 }
case 20:
                    var5 = 101;
                    var5 = var4[var5];
                    var10 = var3.bind(var1)(var5);
                    var9 = var10.findQuestOrReplacement;
                    var5 = _closure1_slot17;
                    var8 = var5.quests;
                    var7 = var5.excludedQuests;
                    var6 = arg1;
                    var7 = var9.bind(var10)(var6, var8, var7);
                    var5 = var5.questEnrollmentBlockedUntil;
                    var6 = null;
                    var5 = var6 != var5;
                    if(!(var6 == var7)) { _fun0041_ip = 200; continue _fun0041 }
case 49:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 102;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = var9.openQuestHome;
                    var8 = var8.bind(var9)();
                    _fun0041_ip = 201; continue _fun0041;
case 200:
                    if(var5) { _fun0041_ip = 202; continue _fun0041 }
case 203:
                    var8 = var7.userStatus;
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0041_ip = 36; continue _fun0041 }
case 79:
                    var5 = var8.enrolledAt;
case 36:
                    var5 = var6 != var5;
                    var6 = var7.config;
                    var8 = var6.expiresAt;
                    var6 = global;
                    var6 = var6.Date;
                    var9 = var6.prototype;
                    var9 = Object.create(var9, {constructor: {value: var6}});
                    var17 = var9;
                    var6 = new var17[var6](var16);
                    var9 = var6 instanceof Object ? var6 : var9;
                    var6 = var9.toISOString;
                    var6 = var6.bind(var9)();
                    var6 = var8 < var6;
                    if(var5) { _fun0041_ip = 204; continue _fun0041 }
case 205:
                    var5 = var6;
case 204:
                    if(var5) { _fun0041_ip = 206; continue _fun0041 }
case 207:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 103;
                    var5 = var12[var5];
                    var9 = var11.bind(var1)(var5);
                    var8 = var9.enrollInQuest;
                    var6 = var7.id;
                    var5 = {};
                    var10 = 104;
                    var13 = var12[var10];
                    var13 = var11.bind(var1)(var13);
                    var13 = var13.QuestContent;
                    var13 = var13.QUEST_EMBED_MOBILE;
                    var5['questContent'] = var13;
                    var13 = 105;
                    var13 = var12[var13];
                    var13 = var11.bind(var1)(var13);
                    var13 = var13.QuestContentCTA;
                    var13 = var13.ACCEPT_QUEST;
                    var5['questContentCTA'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.QuestContent;
                    var10 = var10.QUEST_EMBED_MOBILE;
                    var5['sourceQuestContent'] = var10;
                    var5 = var8.bind(var9)(var6, var5);
case 206:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 102;
                    var5 = var8[var5];
                    var8 = var6.bind(var1)(var5);
                    var6 = var8.openQuestHome;
                    var5 = {};
                    var9 = var7.id;
                    var5['scrollToQuestId'] = var9;
                    var5 = var6.bind(var8)(var5);
                    _fun0041_ip = 201; continue _fun0041;
case 202:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 102;
                    var2 = var6[var2];
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.openQuestHome;
                    var2 = {};
                    var7 = var7.id;
                    var2['scrollToQuestId'] = var7;
                    var2 = var5.bind(var6)(var2);
                    _fun0041_ip = 201; continue _fun0041;
case 199:
                    var2 = 102;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openDiscordQuestsFAQ;
                    var2 = var2.bind(var3)();
case 201:
                    return var1;
                }
            };
            var3['_questsEmbedOnAccept'] = var4;
            var4 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var6)(var3);
                    var8 = var3.messageId;
                    var9 = var3.index;
                    var10 = var3.primary;
                    var7 = var3.secondary;
                    var6 = _closure3_slot0;
                    var4 = var6.getMessageData;
                    var4 = var4.bind(var6)(var8);
                    var12 = null;
                    if(!(var12 != var4)) { _fun0042_ip = 208; continue _fun0042 }
case 141:
                    var6 = var4.message;
                    var8 = _closure3_slot0;
                    var4 = var8.getParams;
                    var4 = var4.bind(var8)();
                    var4 = var4.chatInputRef;
                    var8 = var4.current;
                    if(!(var12 != var8)) { _fun0042_ip = 95; continue _fun0042 }
case 96:
                    var4 = var8.dismissKeyboard;
                    var4 = var4.bind(var8)();
case 95:
                    var4 = _closure1_slot62;
                    var8 = var4.bind(var1)(var6);
                    var11 = var12 == var8;
                    var4 = undefined;
                    if(var11) { _fun0042_ip = 106; continue _fun0042 }
case 180:
                    var4 = var8[var9];
case 106:
                    if(!(var12 != var4)) { _fun0042_ip = 208; continue _fun0042 }
case 63:
                    var9 = var4.type;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var13 = 106;
                    var8 = var8[var13];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.CodedLinkType;
                    var8 = var8.INVITE;
                    if(!(var9 !== var8)) { _fun0042_ip = 209; continue _fun0042 }
case 210:
                    var9 = var4.type;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var13];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.CodedLinkType;
                    var8 = var8.QUESTS_EMBED;
                    if(!(var9 === var8)) { _fun0042_ip = 208; continue _fun0042 }
case 211:
                    var11 = _closure3_slot0;
                    var9 = var11._questsEmbedOnAccept;
                    var8 = var4.code;
                    var8 = var9.bind(var11)(var8);
                    _fun0042_ip = 208; continue _fun0042;
case 209:
                    var9 = _closure1_slot26;
                    var8 = var9.getInvite;
                    var4 = var4.code;
                    var9 = var8.bind(var9)(var4);
                    if(!(var12 != var9)) { _fun0042_ip = 212; continue _fun0042 }
case 213:
                    var8 = _closure1_slot21;
                    var4 = var8.getId;
                    var15 = var4.bind(var8)();
                    var11 = _closure1_slot24;
                    var8 = var11.isMember;
                    var13 = var12 == var9;
                    var4 = undefined;
                    if(var13) { _fun0042_ip = 214; continue _fun0042 }
case 215:
                    var13 = var9.guild;
                    var14 = var12 == var13;
                    var4 = undefined;
                    if(var14) { _fun0042_ip = 214; continue _fun0042 }
case 216:
                    var4 = var13.id;
case 214:
                    var11 = var8.bind(var11)(var4, var15);
                    var4 = false;
                    if(!var11) { _fun0042_ip = 217; continue _fun0042 }
case 206:
                    var8 = var9.roles;
                    var8 = var12 != var8;
                    var4 = false;
                    if(!var8) { _fun0042_ip = 217; continue _fun0042 }
case 218:
                    var8 = var9.roles;
                    var14 = var8.length;
                    var8 = 0;
                    var8 = var14 > var8;
                    var4 = false;
                    if(!var8) { _fun0042_ip = 217; continue _fun0042 }
case 219:
                    var14 = var9.guild;
                    var16 = var12 == var14;
                    var8 = undefined;
                    if(var16) { _fun0042_ip = 220; continue _fun0042 }
case 221:
                    var8 = var14.id;
case 220:
                    var8 = var12 != var8;
                    var4 = false;
                    if(!var8) { _fun0042_ip = 217; continue _fun0042 }
case 222:
                    var14 = _closure1_slot24;
                    var13 = var14.getMember;
                    var8 = var9.guild;
                    var8 = var8.id;
                    var14 = var13.bind(var14)(var8, var15);
                    var8 = global;
                    var13 = var8.Set;
                    var15 = var12 == var14;
                    var8 = undefined;
                    if(var15) { _fun0042_ip = 223; continue _fun0042 }
case 224:
                    var8 = var14.roles;
case 223:
                    if(!(var12 == var8)) { _fun0042_ip = 225; continue _fun0042 }
case 226:
                    var8 = new Array(0);
case 225:
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var19 = var12;
                    var18 = var8;
                    var8 = new var19[var13](var18, var17);
                    var8 = var8 instanceof Object ? var8 : var12;
                    var _closure4_slot0 = var8;
                    var12 = var9.roles;
                    var8 = var12.some;
                    var5 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var8.bind(var12)(var5);
case 217:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var5 = 53;
                    var5 = var12[var5];
                    var8 = var8.bind(var1)(var5);
                    var5 = var8.isGuildScheduledEventInviteEmbed;
                    var5 = var5.bind(var8)(var9);
                    if(var5) { _fun0042_ip = 227; continue _fun0042 }
case 228:
                    if(!var11) { _fun0042_ip = 229; continue _fun0042 }
case 230:
                    if(var4) { _fun0042_ip = 229; continue _fun0042 }
case 231:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTransitionToInviteChannel;
                    var4 = var4.bind(var5)(var9);
                    var8 = 'transition';
                    _fun0042_ip = 232; continue _fun0042;
case 229:
                    var5 = _closure3_slot0;
                    var4 = var5.handleAcceptInstantInvite;
                    var4 = var4.bind(var5)(var9);
                    var8 = 'accept';
                    _fun0042_ip = 232; continue _fun0042;
case 227:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTapGuildEventInvite;
                    var3 = {};
                    var3['invite'] = var9;
                    var3['isMember'] = var11;
                    var3['primary'] = var10;
                    var3['secondary'] = var7;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.action;
case 232:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 107;
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
                    var2 = 59;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var6 = var2.INVITE_EMBED;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 208:
                    return var1;
case 212:
                    return var1;
                }
            };
            var3['handleTapInviteEmbedAccept'] = var4;
            var4 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var8 != var4)) { _fun0043_ip = 233; continue _fun0043 }
case 10:
                    var12 = var4.message;
                    var5 = _closure3_slot0;
                    var4 = var5.getParams;
                    var4 = var4.bind(var5)();
                    var4 = var4.chatInputRef;
                    var5 = var4.current;
                    if(!(var8 != var5)) { _fun0043_ip = 56; continue _fun0043 }
case 234:
                    var4 = var5.dismissKeyboard;
                    var4 = var4.bind(var5)();
case 56:
                    var4 = _closure1_slot62;
                    var5 = var4.bind(var1)(var12);
                    var7 = var8 == var5;
                    var4 = undefined;
                    if(var7) { _fun0043_ip = 31; continue _fun0043 }
case 203:
                    var4 = var5[var6];
case 31:
                    if(!(var8 != var4)) { _fun0043_ip = 233; continue _fun0043 }
case 235:
                    var6 = _closure1_slot21;
                    var5 = var6.getId;
                    var11 = var5.bind(var6)();
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var13 = 106;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.INVITE;
                    if(!(var6 !== var5)) { _fun0043_ip = 236; continue _fun0043 }
case 81:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var6 !== var5)) { _fun0043_ip = 236; continue _fun0043 }
case 237:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.TEMPLATE;
                    if(!(var6 !== var5)) { _fun0043_ip = 238; continue _fun0043 }
case 239:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.BUILD_OVERRIDE;
                    if(!(var6 !== var5)) { _fun0043_ip = 240; continue _fun0043 }
case 241:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.MANUAL_BUILD_OVERRIDE;
                    if(!(var6 !== var5)) { _fun0043_ip = 240; continue _fun0043 }
case 242:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.EXPERIMENT;
                    if(!(var6 !== var5)) { _fun0043_ip = 243; continue _fun0043 }
case 104:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.EVENT;
                    if(!(var6 !== var5)) { _fun0043_ip = 244; continue _fun0043 }
case 245:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.CHANNEL_LINK;
                    if(!(var6 !== var5)) { _fun0043_ip = 246; continue _fun0043 }
case 160:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_PROFILE;
                    if(!(var6 !== var5)) { _fun0043_ip = 247; continue _fun0043 }
case 248:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.QUESTS_EMBED;
                    if(!(var6 !== var5)) { _fun0043_ip = 249; continue _fun0043 }
case 250:
                    var6 = var4.type;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var13];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_OAUTH2_LINK;
                    if(!(var6 === var5)) { _fun0043_ip = 251; continue _fun0043 }
case 252:
                    var7 = _closure1_slot12;
                    var6 = var7.getApplication;
                    var5 = var4.code;
                    var13 = var6.bind(var7)(var5);
                    if(!(var8 != var13)) { _fun0043_ip = 253; continue _fun0043 }
case 254:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 81;
                    var5 = var7[var5];
                    var15 = var6.bind(var1)(var5);
                    var14 = var15.trackWithMetadata;
                    var5 = _closure1_slot40;
                    var6 = var5.APP_OAUTH2_LINK_EMBED_CTA_CLICKED;
                    var5 = {};
                    var16 = var13.id;
                    var5['application_id'] = var16;
                    var5 = var14.bind(var15)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = 112;
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
                    _fun0043_ip = 233; continue _fun0043;
case 253:
                    return var1;
case 251:
                    var5 = global;
                    var6 = var5.Error;
                    var13 = var4.type;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = 'Unknown coded link type: ';
                    var5 = var7.bind(var5)(var13);
                    var5 = var6.bind(var1)(var5);
                    throw var5;
case 249:
                    var7 = _closure3_slot0;
                    var6 = var7._questsEmbedOnPress;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0043_ip = 233; continue _fun0043;
case 247:
                    var7 = _closure1_slot13;
                    var6 = var7.getApplication;
                    var5 = var4.code;
                    var13 = var6.bind(var7)(var5);
                    if(!(var8 != var13)) { _fun0043_ip = 255; continue _fun0043 }
case 256:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 112;
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
                    _fun0043_ip = 233; continue _fun0043;
case 255:
                    return var1;
case 246:
                    var7 = var4.code;
                    var6 = var7.split;
                    var5 = '/';
                    var7 = var6.bind(var7)(var5);
                    var6 = _closure1_slot8;
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
                    _fun0043_ip = 233; continue _fun0043;
case 244:
                    var7 = var4.code;
                    var6 = var7.split;
                    var5 = '-';
                    var7 = var6.bind(var7)(var5);
                    var6 = _closure1_slot8;
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
                    _fun0043_ip = 233; continue _fun0043;
case 243:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 110;
                    var6 = var6[var5];
                    var12 = var7.bind(var1)(var6);
                    var7 = var12.getExperimentFromEmbedURL;
                    var6 = var4.code;
                    var12 = var7.bind(var12)(var6);
                    if(!(var8 != var12)) { _fun0043_ip = 257; continue _fun0043 }
case 258:
                    var6 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var5 = var13[var5];
                    var14 = var6.bind(var1)(var5);
                    var7 = var14.getExperimentTreatmentFromEmbedURL;
                    var5 = var4.code;
                    var7 = var7.bind(var14)(var5);
                    var5 = 111;
                    var5 = var13[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.handleCodedLinkExperimentEmbedTap;
                    var5 = var5.bind(var6)(var12, var7);
                    _fun0043_ip = 233; continue _fun0043;
case 257:
                    return var1;
case 240:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 109;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.toggleOverride;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0043_ip = 233; continue _fun0043;
case 238:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 108;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.showModal;
                    var5 = var4.code;
                    var5 = var6.bind(var7)(var5);
                    _fun0043_ip = 233; continue _fun0043;
case 236:
                    var6 = _closure1_slot26;
                    var5 = var6.getInvite;
                    var4 = var4.code;
                    var7 = var5.bind(var6)(var4);
                    var6 = _closure1_slot24;
                    var5 = var6.isMember;
                    var12 = var8 == var7;
                    var4 = undefined;
                    if(var12) { _fun0043_ip = 259; continue _fun0043 }
case 260:
                    var12 = var7.guild;
                    var13 = var8 == var12;
                    var4 = undefined;
                    if(var13) { _fun0043_ip = 259; continue _fun0043 }
case 261:
                    var4 = var12.id;
case 259:
                    var11 = var5.bind(var6)(var4, var11);
                    if(!(var8 != var7)) { _fun0043_ip = 262; continue _fun0043 }
case 263:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 53;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isGuildScheduledEventInviteEmbed;
                    var4 = var4.bind(var5)(var7);
                    if(var4) { _fun0043_ip = 264; continue _fun0043 }
case 265:
                    var5 = var7.guild;
                    var6 = var8 == var5;
                    var4 = undefined;
                    if(var6) { _fun0043_ip = 266; continue _fun0043 }
case 267:
                    var4 = var5.id;
case 266:
                    if(!(var8 == var4)) { _fun0043_ip = 268; continue _fun0043 }
case 269:
                    var5 = _closure3_slot0;
                    if(var11) { _fun0043_ip = 270; continue _fun0043 }
case 271:
                    var4 = var5.handleAcceptInstantInvite;
                    var4 = var4.bind(var5)(var7);
                    var6 = 'accept';
                    _fun0043_ip = 272; continue _fun0043;
case 270:
                    var4 = var5.handleTransitionToInviteChannel;
                    var4 = var4.bind(var5)(var7);
                    var6 = 'transition';
                    _fun0043_ip = 272; continue _fun0043;
case 268:
                    var12 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 48;
                    var5 = var4[var5];
                    var14 = var12.bind(var1)(var5);
                    var13 = var14.openLazy;
                    var12 = _closure1_slot0;
                    var5 = 36;
                    var5 = var4[var5];
                    var12 = var12.bind(var1)(var5);
                    var5 = 66;
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
                    _fun0043_ip = 272; continue _fun0043;
case 264:
                    var5 = _closure3_slot0;
                    var4 = var5.handleTapGuildEventInvite;
                    var3 = {};
                    var3['invite'] = var7;
                    var3['isMember'] = var11;
                    var3['primary'] = var10;
                    var3['secondary'] = var9;
                    var3 = var4.bind(var5)(var3);
                    var6 = var3.action;
case 272:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 107;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackInviteServerClicked;
                    var9 = var8 == var7;
                    var3 = undefined;
                    if(var9) { _fun0043_ip = 273; continue _fun0043 }
case 274:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var3 = undefined;
                    if(var8) { _fun0043_ip = 273; continue _fun0043 }
case 275:
                    var3 = var7.id;
case 273:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 59;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var7 = var2.INVITE_EMBED;
                    var2 = new Array(1);
                    var2[0] = var7;
                    var2 = var4.bind(var5)(var3, var6, var2);
case 233:
                    return var1;
case 262:
                    return var1;
                }
            };
            var3['handleTapInviteEmbed'] = var4;
            var4 = function(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.guildId;
                    var5 = var1.channelId;
                    var13 = var1.message;
                    var3 = _closure1_slot31;
                    var2 = var3.getGuildId;
                    var12 = var2.bind(var3)();
                    var3 = _closure1_slot30;
                    var2 = var3.getChannelId;
                    var11 = var2.bind(var3)(var12);
                    var3 = _closure1_slot22;
                    var2 = var3.getChannel;
                    var7 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var7)) { _fun0044_ip = 276; continue _fun0044 }
case 48:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 113;
                    var3 = var4[var3];
                    var4 = undefined;
                    var10 = var8.bind(var4)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot40;
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
                    if(!(var2 != var3)) { _fun0044_ip = 277; continue _fun0044 }
case 114:
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 277:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 114;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.shouldShowAgeGateForVoiceChannel;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0044_ip = 278; continue _fun0044 }
case 279:
                    var2 = var7.isGuildStageVoice;
                    var2 = var2.bind(var7)();
                    if(var2) { _fun0044_ip = 280; continue _fun0044 }
case 281:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 116;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.selectVoiceChannel;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot0;
                    var2 = 42;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.openChannelCallModal;
                    var2 = var2.bind(var3)(var7);
                    _fun0044_ip = 276; continue _fun0044;
case 280:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 115;
                    var2 = var8[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.connectAndOpen;
                    var2 = var2.bind(var3)(var7);
                    _fun0044_ip = 276; continue _fun0044;
case 278:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 77;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.transitionTo;
                    var4 = _closure1_slot53;
                    var1 = var4.CHANNEL;
                    var1 = var1.bind(var4)(var6, var5);
                    var1 = var2.bind(var3)(var1);
case 276:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapVoiceChannelPreview'] = var4;
            var4 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var6 != var4)) { _fun0045_ip = 101; continue _fun0045 }
case 129:
                    var4 = var4.message;
                    var5 = var4.activity;
                    if(!(var6 != var5)) { _fun0045_ip = 101; continue _fun0045 }
case 7:
                    var5 = var5.type;
                    var6 = _closure1_slot36;
                    var6 = var6.LISTEN;
                    if(!(var5 !== var6)) { _fun0045_ip = 282; continue _fun0045 }
case 283:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN;
                    if(!(var5 !== var6)) { _fun0045_ip = 117; continue _fun0045 }
case 150:
                    var3 = _closure1_slot36;
                    var3 = var3.STREAM_REQUEST;
                    if(!(var5 === var3)) { _fun0045_ip = 101; continue _fun0045 }
case 284:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapStreamRequest;
                    var3 = var3.bind(var5)(var4);
                    _fun0045_ip = 101; continue _fun0045;
case 117:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityResource;
                    var3 = var3.bind(var5)(var4);
                    _fun0045_ip = 101; continue _fun0045;
case 282:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTapSpotifyResource;
                    var2 = var2.bind(var3)(var4);
case 101:
                    return var1;
                }
            };
            var3['handleTapJoinActivity'] = var4;
            var4 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var6 != var4)) { _fun0046_ip = 285; continue _fun0046 }
case 92:
                    var4 = var4.message;
                    var5 = var4.activity;
                    if(!(var6 != var5)) { _fun0046_ip = 285; continue _fun0046 }
case 182:
                    var5 = var5.type;
                    var6 = _closure1_slot36;
                    var6 = var6.LISTEN;
                    if(!(var5 !== var6)) { _fun0046_ip = 50; continue _fun0046 }
case 16:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN;
                    if(!(var5 !== var6)) { _fun0046_ip = 286; continue _fun0046 }
case 234:
                    var6 = _closure1_slot36;
                    var6 = var6.JOIN_REQUEST;
                    if(!(var5 !== var6)) { _fun0046_ip = 102; continue _fun0046 }
case 287:
                    var3 = _closure1_slot36;
                    var3 = var3.STREAM_REQUEST;
                    if(!(var5 === var3)) { _fun0046_ip = 285; continue _fun0046 }
case 203:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapStreamRequest;
                    var3 = var3.bind(var5)(var4);
                    _fun0046_ip = 285; continue _fun0046;
case 102:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityInviteToJoin;
                    var3 = var3.bind(var5)(var4);
                    _fun0046_ip = 285; continue _fun0046;
case 286:
                    var5 = _closure3_slot0;
                    var3 = var5.handleTapActivityResource;
                    var3 = var3.bind(var5)(var4);
                    _fun0046_ip = 285; continue _fun0046;
case 50:
                    var3 = _closure3_slot0;
                    var2 = var3.handleTapSpotifyResource;
                    var2 = var2.bind(var3)(var4);
case 285:
                    return var1;
                }
            };
            var3['handleTapJoinRichPresence'] = var4;
            var4 = function(arg1) {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 117;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleNSFWGuildInvite;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0047_ip = 288; continue _fun0047 }
case 185:
                    var3 = var5.code;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0047_ip = 288; continue _fun0047 }
case 38:
                    var3 = var5.type;
                    var2 = _closure1_slot57;
                    var2 = var2.GUILD;
                    if(!(var3 === var2)) { _fun0047_ip = 73; continue _fun0047 }
case 289:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 118;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAtGuildCapAndNonPremium;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0047_ip = 290; continue _fun0047 }
case 73:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 107;
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
                    _fun0047_ip = 288; continue _fun0047;
case 290:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 119;
                    var2 = var8[var2];
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleShowUpsellAlert;
                    var2 = {};
                    var5 = _closure1_slot54;
                    var5 = var5.GUILD_CAP;
                    var2['initialUpsellKey'] = var5;
                    var5 = {};
                    var9 = _closure1_slot45;
                    var9 = var9.INVITE_EMBED;
                    var5['page'] = var9;
                    var2['analyticsLocation'] = var5;
                    var5 = 59;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.INVITE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var7;
                    var2['analyticsLocations'] = var5;
                    var5 = {};
                    var6 = _closure1_slot59;
                    var6 = var6.GUILD_CAP_MODAL_UPSELL;
                    var5['type'] = var6;
                    var2['analyticsProperties'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
case 288:
                    return var1;
                }
            };
            var3['handleAcceptInstantInvite'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 107;
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
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var3);
                    var8 = var3.giftCode;
                    var5 = var3.messageId;
                    var4 = _closure1_slot34;
                    var3 = var4.getCurrentUser;
                    var3 = var3.bind(var4)();
                    var10 = null;
                    if(!(var10 != var3)) { _fun0048_ip = 291; continue _fun0048 }
case 292:
                    var3 = var3.verified;
                    if(var3) { _fun0048_ip = 150; continue _fun0048 }
case 55:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 120;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.open;
                    var3 = var3.bind(var4)();
                    _fun0048_ip = 291; continue _fun0048;
case 150:
                    var4 = _closure1_slot23;
                    var3 = var4.get;
                    var3 = var3.bind(var4)(var8);
                    if(!(var10 != var3)) { _fun0048_ip = 291; continue _fun0048 }
case 293:
                    var3 = var3.giftStyle;
                    var3 = var10 != var3;
                    var9 = undefined;
                    if(!var3) { _fun0048_ip = 65; continue _fun0048 }
case 180:
                    var4 = _closure3_slot0;
                    var3 = var4.getMessageData;
                    var9 = var3.bind(var4)(var5);
case 65:
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var5 = var3.paymentsBlocked;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    if(var5) { _fun0048_ip = 61; continue _fun0048 }
case 294:
                    var5 = 113;
                    var5 = var4[var5];
                    var11 = var3.bind(var1)(var5);
                    var7 = var11.track;
                    var5 = _closure1_slot40;
                    var6 = var5.OPEN_MODAL;
                    var5 = {'type': 'gift_accept', 'location': null};
                    var5 = var7.bind(var11)(var6, var5);
                    var5 = 122;
                    var5 = var4[var5];
                    var7 = var3.bind(var1)(var5);
                    var6 = var7.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 36;
                    var2 = var4[var2];
                    var11 = var5.bind(var1)(var2);
                    var2 = 123;
                    var5 = var4[var2];
                    var2 = var4.paths;
                    var5 = var11.bind(var1)(var5, var2);
                    var2 = {};
                    var2['code'] = var8;
                    var11 = var10 != var9;
                    var8 = undefined;
                    if(!var11) { _fun0048_ip = 295; continue _fun0048 }
case 280:
                    var11 = var9.message;
                    var8 = var11.content;
case 295:
                    var2['customMessage'] = var8;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0048_ip = 24; continue _fun0048 }
case 296:
                    var11 = var9.message;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0048_ip = 24; continue _fun0048 }
case 297:
                    var11 = var11.giftInfo;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0048_ip = 24; continue _fun0048 }
case 298:
                    var11 = var11.sound;
                    var12 = var10 == var11;
                    var8 = undefined;
                    if(var12) { _fun0048_ip = 24; continue _fun0048 }
case 299:
                    var8 = var11.id;
case 24:
                    var2['soundId'] = var8;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0048_ip = 199; continue _fun0048 }
case 300:
                    var9 = var9.message;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0048_ip = 199; continue _fun0048 }
case 301:
                    var9 = var9.giftInfo;
                    var11 = var10 == var9;
                    var8 = undefined;
                    if(var11) { _fun0048_ip = 199; continue _fun0048 }
case 302:
                    var9 = var9.emoji;
                    var10 = var10 == var9;
                    var8 = undefined;
                    if(var10) { _fun0048_ip = 199; continue _fun0048 }
case 303:
                    var8 = var9.name;
case 199:
                    var2['emojiName'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0048_ip = 291; continue _fun0048;
case 61:
                    var2 = 121;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
case 291:
                    return var1;
                }
            };
            var3['handleTapGiftCodeAccept'] = var4;
            var4 = function() {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 124;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.canOpenPremiumPlanDirectlyForReferralTrial;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0049_ip = 10; continue _fun0049 }
case 304:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 126;
                    var2 = var5[var2];
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot55;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0049_ip = 54; continue _fun0049;
case 10:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 125;
                    var2 = var7[var2];
                    var3 = var6.bind(var1)(var2);
                    var2 = {};
                    var5 = {};
                    var8 = _closure1_slot45;
                    var8 = var8.REFERRAL_MESSAGE_EMBED;
                    var5['page'] = var8;
                    var2['analyticsLocation'] = var5;
                    var5 = 59;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.REFERRAL_MESSAGE_EMBED;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2['analyticsLocations'] = var5;
                    var4 = _closure1_slot58;
                    var4 = var4.TIER_2;
                    var2['premiumType'] = var4;
                    var2 = var3.bind(var1)(var2);
case 54:
                    return var1;
                }
            };
            var3['handleTapReferralRedeem'] = var4;
            var4 = function(arg1) {
                _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isModalOrActionsheetObstructing;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0050_ip = 21; continue _fun0050 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.contentHandlers;
                    var2 = var3.onTapEmoji;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapEmoji'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 40;
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
                var1 = 40;
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
                var1 = 127;
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
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var6 = var1.gameApplicationId;
                    var1 = var1.timestamp;
                    var3 = _closure3_slot0;
                    var2 = var3.isModalOrActionsheetObstructing;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0051_ip = 284; continue _fun0051 }
case 98:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 48;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 36;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 128;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var2['applicationId'] = var6;
                    var2['messageTimestamp'] = var1;
                    var1 = 'MessageGameIconActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 284:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapGameIcon'] = var4;
            var4 = function() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 127;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'SUPPRESS_NOTIFICATIONS_TOOLTIP';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 44;
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
                var5 = 129;
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
                var1 = 37;
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
                var4 = 48;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 36;
                var4 = var3[var4];
                var10 = var10.bind(var1)(var4);
                var4 = 130;
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
                var1 = 127;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var8 = 'GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY';
                var2['key'] = var8;
                var10 = _closure1_slot0;
                var5 = 44;
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
                var5 = 129;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapTimeoutIcon'] = var4;
            var4 = function(arg1) {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure3_slot0;
                    var1 = var2.getMessageData;
                    var1 = var1.bind(var2)(var5);
                    var4 = null;
                    if(!(var4 != var1)) { _fun0052_ip = 51; continue _fun0052 }
case 305:
                    var1 = var1.messageChannel;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 131;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.revealMessage;
                    var1 = var1.id;
                    var6 = _closure3_slot0;
                    var6 = var6.params;
                    var6 = var6.revealedMessageId;
                    var4 = null;
                    if(!(var6 !== var5)) { _fun0052_ip = 100; continue _fun0052 }
case 93:
                    var4 = var5;
case 100:
                    var1 = var2.bind(var3)(var1, var4);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleReveal'] = var4;
            var4 = function(arg1) {
                _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var7 != var3)) { _fun0053_ip = 306; continue _fun0053 }
case 307:
                    var6 = var3.messageChannel;
                    var12 = var3.message;
                    var5 = var12.applicationId;
                    if(!(var7 == var5)) { _fun0053_ip = 16; continue _fun0053 }
case 308:
                    var3 = var12.author;
                    var5 = var3.id;
case 16:
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var4 = 132;
                    var4 = var3[var4];
                    var10 = var11.bind(var1)(var4);
                    var8 = var10.flattenComponents;
                    var4 = var12.components;
                    var8 = var8.bind(var10)(var4);
                    var4 = var8.get;
                    var10 = 71;
                    var3 = var3[var10];
                    var11 = var11.bind(var1)(var3);
                    var3 = var11.asComponentId;
                    var3 = var3.bind(var11)(var9);
                    var11 = var4.bind(var8)(var3);
                    var3 = var7 != var11;
                    if(!var3) { _fun0053_ip = 309; continue _fun0053 }
case 43:
                    var8 = var11.type;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var4 = 133;
                    var4 = var15[var4];
                    var4 = var14.bind(var1)(var4);
                    var4 = var4.ComponentType;
                    var4 = var4.BUTTON;
                    var3 = var8 === var4;
case 309:
                    if(!var3) { _fun0053_ip = 310; continue _fun0053 }
case 311:
                    var4 = var11.customId;
                    var3 = var7 != var4;
case 310:
                    if(!var3) { _fun0053_ip = 306; continue _fun0053 }
case 211:
                    var4 = var11.style;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var14 = 133;
                    var3 = var3[var14];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.ButtonStyle;
                    var3 = var3.PREMIUM;
                    if(!(var4 === var3)) { _fun0053_ip = 223; continue _fun0053 }
case 312:
                    var4 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var3 = 134;
                    var3 = var18[var3];
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.show;
                    var3 = {};
                    var17 = _closure1_slot0;
                    var8 = 44;
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
                    _fun0053_ip = 306; continue _fun0053;
case 223:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 135;
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
case 306:
                    return var1;
                }
            };
            var3['handleTapButtonActionComponent'] = var4;
            var4 = function(arg1) {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var5)) { _fun0054_ip = 313; continue _fun0054 }
case 7:
                    var7 = var5.messageChannel;
                    var6 = var5.message;
                    var5 = var6.flags;
                    var _closure4_slot1 = var5;
                    var5 = var6.applicationId;
                    if(!(var4 == var5)) { _fun0054_ip = 8; continue _fun0054 }
case 62:
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
                    var12 = 132;
                    var7 = var15[var12];
                    var11 = var13.bind(var1)(var7);
                    var8 = var11.flattenComponents;
                    var7 = var6.components;
                    var11 = var8.bind(var11)(var7);
                    var8 = var11.get;
                    var7 = 71;
                    var7 = var15[var7];
                    var13 = var13.bind(var1)(var7);
                    var7 = var13.asComponentId;
                    var7 = var7.bind(var13)(var14);
                    var8 = var8.bind(var11)(var7);
                    var _closure4_slot5 = var8;
                    if(!(var4 != var8)) { _fun0054_ip = 313; continue _fun0054 }
case 205:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var11 = var11.bind(var1)(var7);
                    var7 = var11.getParents;
                    var6 = var6.components;
                    var11 = var7.bind(var11)(var6, var8);
                    var6 = var4 == var11;
                    var7 = undefined;
                    if(var6) { _fun0054_ip = 314; continue _fun0054 }
case 84:
                    var6 = 0;
                    var7 = var11[var6];
case 314:
                    var4 = var4 == var7;
                    var12 = undefined;
                    if(var4) { _fun0054_ip = 315; continue _fun0054 }
case 126:
                    var12 = var7.type;
case 315:
                    var11 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var6 = 133;
                    var4 = var4[var6];
                    var4 = var11.bind(var1)(var4);
                    var4 = var4.ComponentType;
                    var11 = var4.LABEL;
                    var4 = undefined;
                    if(!(var12 === var11)) { _fun0054_ip = 316; continue _fun0054 }
case 317:
                    var4 = var7;
case 316:
                    var7 = {};
                    var7['channelId'] = var10;
                    var7['guildId'] = var5;
                    var7['containerId'] = var9;
                    var7['labelComponent'] = var4;
                    var2 = function onSubmit(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 135;
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
                    if(!(var2 !== var4)) { _fun0054_ip = 175; continue _fun0054 }
case 318:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.USER_SELECT;
                    if(!(var2 !== var4)) { _fun0054_ip = 232; continue _fun0054 }
case 319:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.ROLE_SELECT;
                    if(!(var2 !== var4)) { _fun0054_ip = 232; continue _fun0054 }
case 159:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.MENTIONABLE_SELECT;
                    if(!(var2 !== var4)) { _fun0054_ip = 232; continue _fun0054 }
case 320:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.CHANNEL_SELECT;
                    if(!(var2 === var4)) { _fun0054_ip = 313; continue _fun0054 }
case 167:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 48;
                    var4 = var2[var4];
                    var10 = var5.bind(var1)(var4);
                    var6 = var10.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 36;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 138;
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
                    _fun0054_ip = 313; continue _fun0054;
case 232:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 48;
                    var4 = var2[var4];
                    var10 = var5.bind(var1)(var4);
                    var6 = var10.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 36;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 137;
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
                    _fun0054_ip = 313; continue _fun0054;
case 175:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 48;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 36;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 136;
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
case 313:
                    return var1;
                }
            };
            var3['handleTapSelectActionComponent'] = var4;
            var4 = function(arg1) {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var3)) { _fun0055_ip = 46; continue _fun0055 }
case 58:
                    var5 = var3.messageChannel;
                    var4 = var3.message;
                    var7 = var4.type;
                    var3 = _closure1_slot51;
                    var3 = var3.USER_JOIN;
                    if(!(var7 !== var3)) { _fun0055_ip = 78; continue _fun0055 }
case 103:
                    var7 = var4.type;
                    var3 = _closure1_slot51;
                    var3 = var3.ROLE_SUBSCRIPTION_PURCHASE;
                    if(!(var7 === var3)) { _fun0055_ip = 46; continue _fun0055 }
case 8:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 140;
                    var3 = var8[var3];
                    var7 = var7.bind(var1)(var3);
                    var3 = var7.handleRoleSubscriptionPurchaseSystemMessageCtaClicked;
                    var3 = var3.bind(var7)(var5, var4, var6);
                    _fun0055_ip = 46; continue _fun0055;
case 78:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 139;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleWelcomeCtaClicked;
                    var2 = var2.bind(var3)(var5, var4, var6);
case 46:
                    return var1;
                }
            };
            var3['handleTapWelcomeReply'] = var4;
            var4 = function(arg1) {
                _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var2)) { _fun0056_ip = 43; continue _fun0056 }
case 129:
                    var3 = var2.messageChannel;
                    var2 = var2.message;
                    var6 = var2.type;
                    var5 = _closure1_slot51;
                    var5 = var5.STAGE_RAISE_HAND;
                    if(!(var6 === var5)) { _fun0056_ip = 43; continue _fun0056 }
case 35:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 141;
                    var5 = var6[var5];
                    var9 = var7.bind(var1)(var5);
                    var8 = var9.setUserSuppress;
                    var5 = var2.author;
                    var7 = var5.id;
                    var5 = false;
                    var5 = var8.bind(var9)(var3, var7, var5);
                    var5 = _closure1_slot1;
                    var4 = 131;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.deleteMessage;
                    var4 = var3.id;
                    var3 = var2.id;
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 43:
                    return var1;
                }
            };
            var3['handleTapInviteToSpeak'] = var4;
            var4 = function(arg1) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(var3) { _fun0057_ip = 321; continue _fun0057 }
case 292:
                    var3 = _closure3_slot0;
                    var2 = var3.getMessageData;
                    var3 = var2.bind(var3)(var5);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0057_ip = 321; continue _fun0057 }
case 74:
                    var5 = var3.message;
                    var3 = var3.messageChannel;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var6 = 82;
                    var7 = var7[var6];
                    var9 = var9.bind(var1)(var7);
                    var7 = var9.isAutomodMessageRecord;
                    var7 = var7.bind(var9)(var5);
                    if(!var7) { _fun0057_ip = 321; continue _fun0057 }
case 200:
                    var3 = var3.id;
                    if(!(var3 === var8)) { _fun0057_ip = 321; continue _fun0057 }
case 106:
                    var7 = _closure1_slot22;
                    var3 = var7.getChannel;
                    var9 = var3.bind(var7)(var8);
                    var8 = _closure1_slot25;
                    var7 = var8.getGuild;
                    var10 = var2 == var9;
                    var3 = undefined;
                    if(var10) { _fun0057_ip = 290; continue _fun0057 }
case 322:
                    var3 = var9.guild_id;
case 290:
                    var7 = var7.bind(var8)(var3);
                    if(!(var2 != var7)) { _fun0057_ip = 321; continue _fun0057 }
case 323:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAutomodMessageRecord;
                    var2 = var2.bind(var3)(var5);
                    if(!var2) { _fun0057_ip = 209; continue _fun0057 }
case 132:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAutomodNotification;
                    var2 = var2.bind(var3)(var5);
                    if(var2) { _fun0057_ip = 324; continue _fun0057 }
case 209:
                    var8 = _closure1_slot24;
                    var6 = var8.isMember;
                    var3 = var7.id;
                    var2 = var5.author;
                    var2 = var2.id;
                    var2 = var6.bind(var8)(var3, var2);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    if(var2) { _fun0057_ip = 195; continue _fun0057 }
case 149:
                    var2 = 127;
                    var2 = var6[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.open;
                    var2 = {};
                    var10 = 'GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER';
                    var2['key'] = var10;
                    var13 = _closure1_slot0;
                    var10 = 44;
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
                    var10 = 129;
                    var10 = var6[var10];
                    var10 = var3.bind(var1)(var10);
                    var2['icon'] = var10;
                    var2 = var8.bind(var9)(var2);
                    _fun0057_ip = 321; continue _fun0057;
case 195:
                    var2 = 145;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var6 = var5.author;
                    var2['user'] = var6;
                    var2['guild'] = var7;
                    var2 = var3.bind(var1)(var2);
                    _fun0057_ip = 321; continue _fun0057;
case 324:
                    var6 = _closure1_slot14;
                    var3 = var6.getGuildIncident;
                    var2 = var7.id;
                    var10 = var3.bind(var6)(var2);
                    var2 = {};
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 142;
                    var6 = var3[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.GuildIncidentActionSources;
                    var6 = var6.MESSAGE;
                    var2['source'] = var6;
                    var6 = 143;
                    var6 = var3[var6];
                    var9 = var8.bind(var1)(var6);
                    var6 = var9.getIncidentAlertType;
                    var6 = var6.bind(var9)(var10);
                    var2['alertType'] = var6;
                    var5 = var5.id;
                    var2['messageId'] = var5;
                    var5 = _closure1_slot1;
                    var4 = 48;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = 36;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 144;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var3['guild'] = var7;
                    var3['analyticsData'] = var2;
                    var2 = 'GuildIncidentActionsActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 321:
                    return var1;
                }
            };
            var3['handleTapAutoModerationActions'] = var4;
            var4 = function(arg1) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var5 != var3)) { _fun0058_ip = 325; continue _fun0058 }
case 72:
                    var8 = var3.message;
                    var6 = var3.messageChannel;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 82;
                    var7 = var7[var3];
                    var10 = var10.bind(var1)(var7);
                    var7 = var10.isAutomodMessageRecord;
                    var7 = var7.bind(var10)(var8);
                    if(!var7) { _fun0058_ip = 325; continue _fun0058 }
case 96:
                    var6 = var6.id;
                    if(!(var6 === var9)) { _fun0058_ip = 325; continue _fun0058 }
case 287:
                    var7 = _closure1_slot22;
                    var6 = var7.getChannel;
                    var7 = var6.bind(var7)(var9);
                    if(!(var5 != var7)) { _fun0058_ip = 325; continue _fun0058 }
case 30:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var3];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isAutomodMessageRecord;
                    var5 = var5.bind(var6)(var8);
                    if(!var5) { _fun0058_ip = 81; continue _fun0058 }
case 322:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var3];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isAutomodNotification;
                    var5 = var5.bind(var6)(var8);
                    if(var5) { _fun0058_ip = 326; continue _fun0058 }
case 81:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = var9[var3];
                    var6 = var5.bind(var1)(var3);
                    var3 = var6.extractAutomodMessageFields;
                    var3 = var3.bind(var6)(var8);
                    var12 = var3.decisionId;
                    var13 = var3.content;
                    var3 = 147;
                    var3 = var9[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.openSubmitFeedback;
                    var15 = var5;
                    var14 = var2;
                    var11 = var7;
                    var3 = var15[var3](var14, var13, var12, var11, var10);
                    _fun0058_ip = 325; continue _fun0058;
case 326:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var5 = 48;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.openLazy;
                    var8 = _closure1_slot0;
                    var4 = 36;
                    var4 = var3[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = 146;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var8.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = var7.guild_id;
                    var3['guildId'] = var7;
                    var3['messageId'] = var2;
                    var2 = 'GuildRaidResolveActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
case 325:
                    return var1;
                }
            };
            var3['handleTapAutoModerationFeedback'] = var4;
            var4 = function(arg1, arg2, arg3) {
                _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                    var4 = _closure1_slot22;
                    var3 = var4.getChannel;
                    var2 = arg2;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0059_ip = 72; continue _fun0059 }
case 327:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 148;
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
case 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTransitionToThread'] = var4;
            var4 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 148;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.transitionToMessage;
                var4 = {};
                var2 = false;
                var4['navigationReplace'] = var2;
                var3 = arg2;
                var2 = arg3;
                var2 = var5.bind(var6)(var3, var2, var4);
                return var1;
            };
            var3['handleTransitionToMessage'] = var4;
            var4 = function(arg1) {
                _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var3)) { _fun0060_ip = 57; continue _fun0060 }
case 48:
                    var5 = var3.messageChannel;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 56;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.handleToggleFollowForumPost;
                    var6 = _closure1_slot20;
                    var2 = var6.hasJoined;
                    var2 = var2.bind(var6)(var7);
                    var2 = var3.bind(var4)(var5, var2);
case 57:
                    return var1;
                }
            };
            var3['handleTapFollowForumPost'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 37;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getNativeSyntheticEventData;
                var2 = arg1;
                var2 = var5.bind(var6)(var2);
                var6 = var2.guildId;
                var5 = var2.channelId;
                var2 = 56;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleCopyLinkForumPost;
                var2 = {};
                var7 = _closure1_slot46;
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
                var1 = 149;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.copy;
                var2 = var2.bind(var5)(var6);
                var2 = 150;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3['handleCopyText'] = var4;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 37;
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
                return var1;
            };
            var3['handleTapTag'] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 127;
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
                var5 = 151;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.getForumOriginalPoster;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapOpTag'] = var4;
            var4 = function(arg1) {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var2)) { _fun0061_ip = 328; continue _fun0061 }
case 188:
                    if(!(var1 !== var9)) { _fun0061_ip = 151; continue _fun0061 }
case 329:
                    if(var9) { _fun0061_ip = 151; continue _fun0061 }
case 150:
                    var10 = var2.message;
                    var9 = var10.getContentMessage;
                    var9 = var9.bind(var10)();
                    var10 = var4 == var9;
                    var11 = undefined;
                    if(var10) { _fun0061_ip = 63; continue _fun0061 }
case 183:
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
case 63:
                    if(!(var4 != var11)) { _fun0061_ip = 132; continue _fun0061 }
case 102:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 153;
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
                    _fun0061_ip = 328; continue _fun0061;
case 132:
                    return var1;
case 151:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 152;
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
case 328:
                    return var1;
                }
            };
            var3['handleMediaAttachmentPlaybackStarted'] = var4;
            var4 = function(arg1) {
                _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var2)) { _fun0062_ip = 239; continue _fun0062 }
case 73:
                    if(!(var1 !== var10)) { _fun0062_ip = 207; continue _fun0062 }
case 37:
                    if(var10) { _fun0062_ip = 207; continue _fun0062 }
case 76:
                    var11 = var2.message;
                    var10 = var11.getContentMessage;
                    var10 = var10.bind(var11)();
                    var12 = var4 == var10;
                    var11 = undefined;
                    if(var12) { _fun0062_ip = 330; continue _fun0062 }
case 27:
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
case 330:
                    if(!(var4 != var11)) { _fun0062_ip = 151; continue _fun0062 }
case 331:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var4 = 153;
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
                    _fun0062_ip = 239; continue _fun0062;
case 151:
                    return var1;
case 207:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 152;
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
case 239:
                    return var1;
                }
            };
            var3['handleMediaAttachmentPlaybackEnded'] = var4;
            var4 = function(arg1) {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 37;
                    var2 = var4[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var6.bind(var7)(var2);
                    var10 = var2.messageId;
                    var6 = var2.errorMessage;
                    var2 = 152;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.logVoiceMessagePlaybackFailed;
                    var2 = null;
                    var7 = var2 != var6;
                    if(!var7) { _fun0063_ip = 115; continue _fun0063 }
case 307:
                    var2 = var6;
case 115:
                    var2 = var3.bind(var4)(var10, var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 127;
                    var2 = var7[var2];
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'AUDIO_PLAYBACK_FAILED-';
                    var8 = var9.bind(var8)(var10);
                    var2['key'] = var8;
                    var10 = _closure1_slot0;
                    var5 = 44;
                    var8 = var7[var5];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var7[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.gRHMh8;
                    var5 = var8.bind(var9)(var5);
                    var2['content'] = var5;
                    var5 = 129;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3['handleVoiceMessagePlaybackFailed'] = var4;
            var4 = function() {
                var4 = _closure1_slot7;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0064_ip = 216; continue _fun0064 }
case 332:
                            var2 = undefined;
                            var5 = undefined;
                            var3 = undefined;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 37;
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
                            var12 = _closure1_slot34;
                            var8 = var12.getCurrentUser;
                            var12 = var8.bind(var12)();
                            var13 = null;
                            var14 = var13 == var12;
                            var8 = undefined;
                            if(var14) { _fun0064_ip = 18; continue _fun0064 }
case 62:
                            var8 = var12.id;
case 18:
                            var8 = var9.bind(var10)(var11, var8);
                            var11 = _closure1_slot22;
                            var10 = var11.getChannel;
                            var9 = var3;
                            var16 = var10.bind(var11)(var9);
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var9 = 81;
                            var9 = var11[var9];
                            var12 = var10.bind(var2)(var9);
                            var11 = var12.trackWithMetadata;
                            var9 = _closure1_slot40;
                            var10 = var9.MEDIA_POST_PREVIEW_EMBED_CLICKED;
                            var9 = {};
                            var9['media_post_id'] = var7;
                            var13 = var13 != var16;
                            if(!var13) { _fun0064_ip = 112; continue _fun0064 }
case 333:
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot3;
                            var14 = 154;
                            var14 = var17[var14];
                            var15 = var15.bind(var2)(var14);
                            var14 = var15.canViewChannel;
                            var13 = var14.bind(var15)(var16);
case 112:
                            var9['can_access'] = var13;
                            var9['is_member'] = var8;
                            var9 = var11.bind(var12)(var10, var9);
                            if(var8) { _fun0064_ip = 334; continue _fun0064 }
case 335: // try_start_0
                            var9 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var8 = 155;
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
case 326:
                            return var5;
case 336:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                            if(var8) { _fun0064_ip = 239; continue _fun0064 }
case 337: // try_end0
                            _fun0064_ip = 296; continue _fun0064;
case 239:
                            return var5;
case 338: // catch_target0
                            CatchBlockStart(arg_register=4);
                            _fun0064_ip = 296; continue _fun0064;
case 334:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var4 = 148;
                            var4 = var8[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.tryTransitionToThreadMessage;
                            var3 = var4.bind(var5)(var3, var7, var6);
case 296:
                            return var2;
case 216:
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
                var1 = 37;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getNativeSyntheticEventData;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var6 = var3.messageId;
                var4 = _closure1_slot2;
                var3 = 156;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.dismissMediaPostSharePrompt;
                var5 = _closure1_slot1;
                var2 = 68;
                var2 = var7[var2];
                var5 = var5.bind(var1)(var2);
                var2 = var5.castMessageIdAsChannelId;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['handleTapDismissMediaPostSharePrompt'] = var4;
            var4 = function(arg1) {
                var10 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 37;
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
                var4 = 48;
                var4 = var3[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = 36;
                var4 = var3[var4];
                var10 = var10.bind(var1)(var4);
                var4 = 157;
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
            var4 = function() {
                var4 = _closure1_slot7;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0065_ip = 69; continue _fun0065 }
case 332:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var3 = 37;
                            var6 = var2[var3];
                            var3 = undefined;
                            var8 = var5.bind(var3)(var6);
                            var7 = var8.getNativeSyntheticEventData;
                            var6 = arg1;
                            var6 = var7.bind(var8)(var6);
                            var7 = var6.messageId;
                            var7 = var6.channelId;
                            var7 = var6.isReveal;
                            var8 = var6.attachmentId;
                            var6 = var6.embedId;
                            var6 = 158;
                            var2 = var2[var6];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.shouldAgeVerifyForExplicitMedia;
                            var2 = var2.bind(var5)();
                            if(!var7) { _fun0065_ip = 339; continue _fun0065 }
case 189:
                            if(!var2) { _fun0065_ip = 339; continue _fun0065 }
case 41:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 159;
                            var2 = var8[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.maybePerformReactiveCheck;
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=147);
case 27:
                            return var2;
case 117:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0065_ip = 213; continue _fun0065 }
case 106:
                            var5 = null;
                            if(!(var5 == var2)) { _fun0065_ip = 340; continue _fun0065 }
case 111:
                            var8 = _closure1_slot11;
                            var5 = var8.getReactiveCheckPassed;
                            var5 = var5.bind(var8)();
                            _fun0065_ip = 333; continue _fun0065;
case 340:
                            var8 = 'passed';
                            var5 = var8 === var2;
case 333:
                            if(var5) { _fun0065_ip = 339; continue _fun0065 }
case 290:
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var5 = 160;
                            var5 = var12[var5];
                            var9 = var8.bind(var3)(var5);
                            var8 = var9.showAgeVerificationGetStartedModal;
                            var5 = {};
                            var11 = _closure1_slot0;
                            var10 = 161;
                            var10 = var12[var10];
                            var10 = var11.bind(var3)(var10);
                            var10 = var10.AgeVerificationModalEntryPoint;
                            var10 = var10.OBSCURED_MEDIA;
                            var5['entryPoint'] = var10;
                            var5 = var8.bind(var9)(var5);
case 339:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var4 = var4[var6];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.trackToggleMediaObscurityV2;
                            var4 = {};
                            var4['obscure'] = var7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
case 213:
                            return var2;
case 69:
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
            var3['onTapObscuredMediaToggle'] = var4;
            var4 = function(arg1) {
                var7 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 37;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var4);
                var5 = var6.getNativeSyntheticEventData;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var6 = var4.classificationId;
                var4 = _closure1_slot1;
                var3 = 122;
                var3 = var2[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.pushLazy;
                var3 = 36;
                var3 = var2[var3];
                var7 = var7.bind(var1)(var3);
                var3 = 162;
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
                _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.ctaType;
                    var5 = var1.ctaKey;
                    var1 = _closure1_slot60;
                    var1 = var1.POLICY_VIOLATION_DETAIL;
                    if(!(var1 !== var3)) { _fun0066_ip = 341; continue _fun0066 }
case 342:
                    var1 = _closure1_slot60;
                    var1 = var1.LEARN_MORE_LINK;
                    if(!(var1 === var3)) { _fun0066_ip = 343; continue _fun0066 }
case 133:
                    var1 = null;
                    if(!(var1 != var5)) { _fun0066_ip = 343; continue _fun0066 }
case 99:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 93;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = var3.openURL;
                    var1 = var1.bind(var3)(var5);
                    _fun0066_ip = 343; continue _fun0066;
case 341:
                    var1 = null;
                    if(!(var1 != var5)) { _fun0066_ip = 343; continue _fun0066 }
case 189:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 122;
                    var3 = var1[var3];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 36;
                    var2 = var1[var2];
                    var6 = var6.bind(var7)(var2);
                    var2 = 162;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {};
                    var1['classificationId'] = var5;
                    var5 = true;
                    var1['shouldRedirectToAccountStanding'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 343:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleTapSafetySystemNotificationCta'] = var4;
            var4 = function(arg1) {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0067_ip = 100; continue _fun0067 }
case 39:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 163;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollAnswerTapped;
                    var2 = var2.bind(var3)(var4);
case 100:
                    return var1;
                }
            };
            var3['handleTapPollAnswer'] = var4;
            var4 = function(arg1) {
                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0068_ip = 100; continue _fun0068 }
case 39:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 163;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollSubmitVote;
                    var2 = var2.bind(var3)(var4);
case 100:
                    return var1;
                }
            };
            var3['handleTapPollSubmitVote'] = var4;
            var4 = function(arg1) {
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var4 = var5.replaceCorrectMessageParams;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0069_ip = 100; continue _fun0069 }
case 39:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 163;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handlePollActionTapped;
                    var2 = var2.bind(var3)(var4);
case 100:
                    return var1;
                }
            };
            var3['handleTapPollAction'] = var4;
            var4 = function(arg1) {
                _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                    var7 = _closure3_slot0;
                    var6 = var7.replaceCorrectMessageParams;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var9 = var8.bind(var1)(var3);
                    var8 = var9.castNativeSyntheticEventData;
                    var3 = arg1;
                    var3 = var8.bind(var9)(var3);
                    var6 = var6.bind(var7)(var3);
                    var _closure4_slot0 = var6;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0070_ip = 207; continue _fun0070 }
case 292:
                    var8 = _closure3_slot0;
                    var7 = var8.getMessageData;
                    var5 = var6.messageId;
                    var5 = var7.bind(var8)(var5);
                    if(!(var3 != var5)) { _fun0070_ip = 207; continue _fun0070 }
case 25:
                    var10 = var5.message;
                    var5 = var5.messageChannel;
                    var8 = var10.attachments;
                    var7 = var8.findIndex;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.attachmentId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var7.bind(var8)(var4);
                    if(!(var3 != var7)) { _fun0070_ip = 207; continue _fun0070 }
case 116:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 164;
                    var2 = var4[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.extractMediaSourcesFromMessage;
                    var2 = var5.guild_id;
                    var8 = var8.bind(var9)(var10, var10, var2);
                    var2 = 165;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openMediaModal;
                    var2 = {};
                    var2['initialSources'] = var8;
                    var2['initialIndex'] = var7;
                    var6 = var6.layout;
                    var2['originViewOrOriginLayout'] = var6;
                    var6 = 'Channel';
                    var2['analyticsSource'] = var6;
                    var5 = var5.id;
                    var2['channelId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 207:
                    return var1;
                }
            };
            var3['handleLongPressPollImage'] = var4;
            var4 = function(arg1) {
                _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var4 = var3[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var4);
                    var5 = var6.getNativeSyntheticEventData;
                    var4 = arg1;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.messageId;
                    var4 = var6.channelId;
                    var6 = var6.callback;
                    var8 = 166;
                    var3 = var3[var8];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.CtaButtonType;
                    var3 = var3.MARK_AS_FALSE_POSITIVE;
                    if(!(var3 !== var6)) { _fun0071_ip = 344; continue _fun0071 }
case 12:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var8];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.CtaButtonType;
                    var3 = var3.AGE_VERIFICATION_RETRY;
                    if(!(var3 === var6)) { _fun0071_ip = 345; continue _fun0071 }
case 234:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 160;
                    var3 = var9[var3];
                    var10 = var6.bind(var1)(var3);
                    var7 = var10.showAgeVerificationGetStartedModal;
                    var6 = {};
                    var8 = _closure1_slot0;
                    var3 = 161;
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
                    _fun0071_ip = 345; continue _fun0071;
case 344:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 167;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleSenderFalsePositiveFlow;
                    var2 = var2.bind(var3)(var4, var5);
case 345:
                    return var1;
                }
            };
            var3['handleTapCtaButton'] = var4;
            var4 = function(arg1) {
                _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 37;
                    var4 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.getNativeSyntheticEventData;
                    var4 = var4.bind(var7)(var3);
                    var4 = var4.messageId;
                    var12 = 168;
                    var5 = var5[var12];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getMessageAccessibilityActionFromLabel;
                    var3 = var3.nativeEvent;
                    var3 = var3.action;
                    var8 = var5.bind(var6)(var3);
                    var3 = _closure3_slot0;
                    var5 = var3.params;
                    var3 = var5.getMessage;
                    var9 = var5.chatInputRef;
                    var3 = var3.bind(var1)(var4);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0072_ip = 346; continue _fun0072 }
case 18:
                    var10 = _closure1_slot22;
                    var7 = var10.getChannel;
                    var6 = var3.channel_id;
                    var6 = var7.bind(var10)(var6);
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.VIEW_PROFILE;
                    if(!(var7 !== var8)) { _fun0072_ip = 347; continue _fun0072 }
case 331:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.REPLY;
                    if(!(var7 !== var8)) { _fun0072_ip = 224; continue _fun0072 }
case 348:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.ADD_REACTION;
                    if(!(var7 !== var8)) { _fun0072_ip = 349; continue _fun0072 }
case 279:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var12];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.MessageAccessibilityAction;
                    var7 = var7.MESSAGE_ACTIONS_MENU;
                    if(!(var7 === var8)) { _fun0072_ip = 346; continue _fun0072 }
case 125:
                    if(!(var5 != var6)) { _fun0072_ip = 346; continue _fun0072 }
case 350:
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var7 = 72;
                    var7 = var14[var7];
                    var10 = var8.bind(var1)(var7);
                    var8 = var10.showLongPressMessageActionSheet;
                    var7 = {};
                    var7['channel'] = var6;
                    var7['message'] = var3;
                    var13 = _closure1_slot1;
                    var12 = 73;
                    var12 = var14[var12];
                    var12 = var13.bind(var1)(var12);
                    var12 = var12.bind(var1)(var6);
                    var7['canAddNewReactions'] = var12;
                    var14 = _closure1_slot34;
                    var13 = var14.getUser;
                    var15 = var5 == var3;
                    var12 = undefined;
                    if(var15) { _fun0072_ip = 351; continue _fun0072 }
case 352:
                    var15 = var3.author;
                    var16 = var5 == var15;
                    var12 = undefined;
                    if(var16) { _fun0072_ip = 351; continue _fun0072 }
case 242:
                    var12 = var15.id;
case 351:
                    var12 = var13.bind(var14)(var12);
                    var7['user'] = var12;
                    var11 = _closure3_slot0;
                    var11 = var11.params;
                    var11 = var11.chatInputRef;
                    var7['chatInputRef'] = var11;
                    var7 = var8.bind(var10)(var7);
                    _fun0072_ip = 346; continue _fun0072;
case 349:
                    if(!(var5 != var6)) { _fun0072_ip = 346; continue _fun0072 }
case 353:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 57;
                    var7 = var10[var7];
                    var10 = var8.bind(var1)(var7);
                    var8 = var10.handleAddNewReactions;
                    var7 = var3.id;
                    var7 = var8.bind(var10)(var6, var7);
                    _fun0072_ip = 346; continue _fun0072;
case 224:
                    if(!(var5 != var6)) { _fun0072_ip = 346; continue _fun0072 }
case 354:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 76;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var7['message'] = var3;
                    var7['channel'] = var6;
                    var7['chatInputRef'] = var9;
                    var9 = 'a11y_action';
                    var7['actionSource'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0072_ip = 346; continue _fun0072;
case 347:
                    var8 = var5 == var3;
                    var7 = undefined;
                    if(var8) { _fun0072_ip = 355; continue _fun0072 }
case 164:
                    var7 = var3.author;
case 355:
                    if(!(var5 != var7)) { _fun0072_ip = 346; continue _fun0072 }
case 356:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 67;
                    var2 = var8[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = var7.id;
                    var2['userId'] = var7;
                    var7 = var5 == var6;
                    var5 = undefined;
                    if(var7) { _fun0072_ip = 357; continue _fun0072 }
case 358:
                    var5 = var6.id;
case 357:
                    var2['channelId'] = var5;
                    var2['messageId'] = var4;
                    var2 = var3.bind(var1)(var2);
case 346:
                    return var1;
                }
            };
            var3['handleMessageAccessibilityAction'] = var4;
            var4 = function(arg1) {
                _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var4 != var3)) { _fun0073_ip = 25; continue _fun0073 }
case 58:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 169;
                    var2 = var5[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.bind(var1)(var3);
case 25:
                    return var1;
                }
            };
            var3['handleTapForwardFooter'] = var4;
            var4 = function(arg1) {
                _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                    var7 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var5 != var9)) { _fun0074_ip = 326; continue _fun0074 }
case 307:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 170;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getInlineForwardOptions;
                    var6 = var3.bind(var4)(var9, var6);
                    if(!(var5 != var6)) { _fun0074_ip = 326; continue _fun0074 }
case 150:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.keys;
                    var3 = var3.bind(var4)(var6);
                    var8 = var3.length;
                    var3 = var7.nativeEvent;
                    var3 = var3.triggerHaptic;
                    if(!var3) { _fun0074_ip = 359; continue _fun0074 }
case 31:
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 74;
                    var3 = var12[var3];
                    var10 = var4.bind(var1)(var3);
                    var4 = var10.triggerHapticFeedback;
                    var11 = _closure1_slot1;
                    var3 = 75;
                    var3 = var12[var3];
                    var3 = var11.bind(var1)(var3);
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var4.bind(var10)(var3);
case 359:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 171;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openForwardModal;
                    var2 = {};
                    var2['message'] = var9;
                    var7 = var7.nativeEvent;
                    var7 = var7.location;
                    var9 = var5 != var7;
                    var5 = 'inline-button';
                    if(!var9) { _fun0074_ip = 360; continue _fun0074 }
case 361:
                    var5 = var7;
case 360:
                    var2['source'] = var5;
                    var7 = 0;
                    var5 = undefined;
                    if(!(var7 !== var8)) { _fun0074_ip = 314; continue _fun0074 }
case 362:
                    var5 = var6;
case 314:
                    var2['forwardOptions'] = var5;
                    var2 = var3.bind(var4)(var2);
case 326:
                    return var1;
                }
            };
            var3['handleTapInlineForward'] = var4;
            var4 = function(arg1) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 37;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.getNativeSyntheticEventData;
                var3 = arg1;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var2 = 172;
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var3['handleTapSoundmoji'] = var4;
            var4 = function(arg1) {
                _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getNativeSyntheticEventData;
                    var2 = arg1;
                    var7 = var4.bind(var5)(var2);
                    var5 = null;
                    var2 = var5 != var7;
                    if(!var2) { _fun0075_ip = 133; continue _fun0075 }
case 17:
                    var4 = var7.guildId;
                    var2 = var5 != var4;
case 133:
                    if(!var2) { _fun0075_ip = 102; continue _fun0075 }
case 186:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var4 = 48;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 36;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 66;
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
case 102:
                    return var1;
                }
            };
            var3['handleTapClanTagChiplet'] = var4;
            var4 = function(arg1) {
                _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.messageId;
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot4;
                    var5 = var5.bind(var1)(var6, var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var3 = var3.getMessage;
                    var6 = var3.bind(var1)(var4);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0076_ip = 78; continue _fun0076 }
case 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 173;
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
case 78:
                    return var1;
                }
            };
            var3['handleTapContentInventoryEntryEmbed'] = var4;
            var4 = function(arg1) {
                _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getNativeSyntheticEventData;
                    var3 = arg1;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.messageId;
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot5;
                    var5 = var5.bind(var1)(var6, var3);
                    var3 = _closure3_slot0;
                    var3 = var3.params;
                    var3 = var3.getMessage;
                    var6 = var3.bind(var1)(var4);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0077_ip = 287; continue _fun0077 }
case 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 174;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.onTapCheckpointCard;
                    var2 = {};
                    var2['message'] = var6;
                    var5 = var5.authorId;
                    var2['authorId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 287:
                    return var1;
                }
            };
            var3['handleTapCheckpointCard'] = var4;
            var4 = function(arg1) {
                _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var6)) { _fun0078_ip = 57; continue _fun0078 }
case 58:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 175;
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
case 57:
                    return var1;
                }
            };
            var3['handleTapAppMessageEmbed'] = var4;
            var4 = function(arg1) {
                _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var6)) { _fun0079_ip = 57; continue _fun0079 }
case 58:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 176;
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
case 57:
                    return var1;
                }
            };
            var3['handleTapPreviewSharedClientTheme'] = var4;
            var2 = function(arg1) {
                _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
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
                    if(!(var3 != var6)) { _fun0080_ip = 57; continue _fun0080 }
case 58:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 177;
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
case 57:
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
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
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
                if(!(var3 == var4)) { _fun0081_ip = 60; continue _fun0081 }
case 363:
                return var1;
case 60:
                var9 = var4.type;
                var8 = _closure1_slot51;
                var8 = var8.THREAD_STARTER_MESSAGE;
                if(!(var9 !== var8)) { _fun0081_ip = 16; continue _fun0081 }
case 99:
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
                if(!(var3 != var4)) { _fun0081_ip = 209; continue _fun0081 }
case 76:
                var10 = _closure1_slot27;
                var9 = var10.getMessage;
                var8 = var4.channel_id;
                var2 = var4.message_id;
                var2 = var9.bind(var10)(var8, var2);
                if(!(var3 == var2)) { _fun0081_ip = 40; continue _fun0081 }
case 180:
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
                _fun0081_ip = 364; continue _fun0081;
case 40:
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
case 364:
                return var2;
case 209:
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
    var4 = 178;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/MessagesHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MessagesHandlers'] = var2;
    return var1;
})();