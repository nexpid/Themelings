// app/modules/user_settings/PreloadedUserSettingsMigrations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function migrateDismissibleContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var1 = var2.userContent;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var4 = global;
            var4 = var4.Uint8Array;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var11 = var5;
            var4 = new var11[var4](var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var1['dismissedContents'] = var4;
            var4 = '0';
            var1['lastReceivedChangelogId'] = var4;
            var4 = {};
            var1['recurringDismissibleContentStates'] = var4;
            var2['userContent'] = var1;
case 2:
            var1 = var2.userContent;
            var1 = var1.dismissedContents;
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.userContent;
            var1 = global;
            var1 = var1.Uint8Array;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var11 = var4;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var4;
            var3['dismissedContents'] = var1;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 3;
            var1 = var1[var8];
            var7 = undefined;
            var5 = var3.bind(var7)(var1);
            var3 = var5.hasBit;
            var1 = var2.userContent;
            var1 = var1.dismissedContents;
            var3 = var3.bind(var5)(var1, var6);
            var1 = false;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.userContent;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var5 = var5.bind(var7)(var4);
            var4 = var5.addBit;
            var2 = var2.userContent;
            var2 = var2.dismissedContents;
            var2 = var4.bind(var5)(var2, var6);
            var3['dismissedContents'] = var2;
            var1 = true;
case 6:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function migrateHotspotLocation(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.HotspotStore;
            var3 = var4.hasHiddenHotspot;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot6;
            var3 = arg1;
            var2 = arg3;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelNoticeTypes;
    var _closure1_slot4 = var2;
    var2 = 2;
    var4 = var6[var2];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MULTIACCOUNT_TOOLTIP_SEEN_KEY;
    var _closure1_slot5 = var4;
    var4 = {};
    var4['version'] = var2;
    var2 = function run(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var17 = arg1;
            var2 = {};
            var1 = 'Recent Mentions';
            var2['Mentions'] = var1;
            var1 = 'Inbox';
            var2['Unreads'] = var1;
            var1 = var17.inbox;
            var16 = null;
            if(!(var16 == var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 5;
            var3 = var1[var7];
            var14 = undefined;
            var3 = var5.bind(var14)(var3);
            var4 = var3.InboxSettings;
            var3 = var4.create;
            var3 = var3.bind(var4)();
            var17['inbox'] = var3;
            var4 = 6;
            var1 = var1[var4];
            var1 = var5.bind(var14)(var1);
            var8 = var1.Storage;
            var6 = var8.get;
            var5 = 'seenInboxTutorial';
            var1 = false;
            var5 = var6.bind(var8)(var5, var1);
            if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = true;
            var3['viewedTutorial'] = var5;
            var1 = true;
case 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var4];
            var5 = var6.bind(var14)(var5);
            var8 = var5.Storage;
            var6 = var8.get;
            var5 = 'recentsButtonTab2';
            var5 = var6.bind(var8)(var5);
            if(!(var16 != var5)) { _fun0003_ip = 14; continue _fun0003 }
case 7:
            var2 = var2.Mentions;
            if(!(var5 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var5.bind(var14)(var2);
            var2 = var2.InboxTab;
            var2 = var2.UNREADS;
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var14)(var5);
            var5 = var5.InboxTab;
            var2 = var5.MENTIONS;
case 17:
            var3['currentTab'] = var2;
            var1 = true;
case 14:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var14)(var2);
            var4 = var2.Storage;
            var3 = var4.get;
            var2 = 'unread-messages-collapsed-channels';
            var13 = var3.bind(var4)(var2);
            if(!(var16 == var13)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var13 = {};
case 18:
            var11 = var13;
            var6 = 7;
            var5 = '0';
            var4 = var1;
            var3 = undefined;
            var2 = undefined;
            var1 = var4;
            for(var8 in var11)
case 20:
            {
                var20 = var4;
                var1 = var20;
case 21:
                var22 = var8;
                var19 = var13[var22];
                var4 = var20;
                if(!var19) { _fun0003_ip = 20; continue _fun0003 }
case 22:
                var21 = _closure1_slot3;
                var19 = var21.getChannel;
                var19 = var19.bind(var21)(var22);
                var4 = var20;
                var2 = var19;
                if(var16 == var2) { _fun0003_ip = 20; continue _fun0003 }
case 23:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var6];
                var24 = var21.bind(var14)(var20);
                var23 = var24.mutateUserChannelSettings;
                var3 = var19.guild_id;
                var20 = var16 != var3;
                var22 = var5;
                if(!var20) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var22 = var3;
case 24:
                var26 = var19.id;
                var25 = function(arg1) {
                    var2 = true;
                    var1 = arg1;
                    var1['collapsedInInbox'] = var2;
                    var1 = undefined;
                    return var1;
                };
                var29 = var24;
                var28 = var17;
                var27 = var22;
                var20 = var29[var23](var28, var27, var26, var25, var24);
                var4 = true;
                var2 = var19;
                _fun0003_ip = 20; continue _fun0003;
            }
case 26:
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var2;
    var2 = function cleanup() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var5 = var4[var2];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'seenInboxTutorial';
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'recentsButtonTab2';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'unread-messages-collapsed-channels';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var2;
    var2 = new Array(19);
    var2[0] = var4;
    var4 = {};
    var7 = 3;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var6 = var1.PersistedStore;
            var5 = var6.migrateAndReadStoreState;
            var2 = new Array(1);
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var2 = 'EmojiDiversitySurrogate';
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var2 = '';
case 27:
                    var1['diversitySurrogate'] = var2;
                    return var1;
                }
            };
            var2[0] = var1;
            var1 = 'EmojiStore';
            var1 = var5.bind(var6)(var1, var2);
            var2 = var1.state;
            var6 = null;
            if(!(var6 != var2)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var1 = var2.diversitySurrogate;
            var5 = var6 != var1;
            if(!var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var8 = var2.diversitySurrogate;
            var1 = '';
            var5 = var1 !== var8;
case 31:
            var1 = false;
            if(!var5) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var5 = var3.textAndImages;
            if(!(var6 == var5)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var5 = var9[var5];
            var5 = var8.bind(var7)(var5);
            var8 = var5.TextAndImagesSettings;
            var5 = var8.create;
            var5 = var5.bind(var8)();
            var3['textAndImages'] = var5;
case 35:
            var5 = var3.textAndImages;
            var5 = var5.diversitySurrogate;
            if(!(var6 == var5)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = var3.textAndImages;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var6 = var4.StringValue;
            var4 = var6.create;
            var4 = var4.bind(var6)();
            var5['diversitySurrogate'] = var4;
case 37:
            var3 = var3.textAndImages;
            var3 = var3.diversitySurrogate;
            var2 = var2.diversitySurrogate;
            var3['value'] = var2;
            var1 = true;
case 33:
            return var1;
case 29:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[1] = var4;
    var4 = {};
    var7 = 4;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = 'HAS_SEEN_HUB_UPSELL';
            var3 = var3.bind(var4)(var1);
            var1 = true;
            var3 = var1 === var3;
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 27:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var4 = var8[var1];
            var4 = var7.bind(var5)(var4);
            var6 = var4.HotspotStore;
            var4 = var6.hasHiddenHotspot;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.HotspotLocations;
            var1 = var1.HUB_SECOND_EMAIL_CONNECTION_UPSELL;
            var3 = var4.bind(var6)(var1);
case 39:
            var1 = false;
            if(!var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.HUB_WAITLIST_UPSELL;
            var2 = arg1;
            var1 = var4.bind(var5)(var2, var3);
case 40:
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'HAS_SEEN_HUB_UPSELL';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var7;
    var2[2] = var4;
    var4 = {};
    var7 = 5;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var2 = var3.textAndImages;
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.TextAndImagesSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 42:
            var3['textAndImages'] = var2;
            var2 = var3.notifications;
            if(!(var1 == var2)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.NotificationSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 44:
            var3['notifications'] = var2;
            var2 = var3.privacy;
            if(!(var1 == var2)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.PrivacySettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 46:
            var3['privacy'] = var2;
            var2 = var3.voiceAndVideo;
            if(!(var1 == var2)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.VoiceAndVideoSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 48:
            var3['voiceAndVideo'] = var2;
            var2 = var3.gameLibrary;
            if(!(var1 == var2)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.GameLibrarySettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 50:
            var3['gameLibrary'] = var2;
            var2 = var3.debug;
            if(!(var1 == var2)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.DebugSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
case 52:
            var3['debug'] = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 6;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var7 = var4.Storage;
            var6 = var7.get;
            var4 = 'UserSettingsStore';
            var6 = var6.bind(var7)(var4);
            if(!(var1 == var6)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var6 = {};
case 54:
            var4 = var6.useRichChatTextBox;
            var7 = 'boolean';
            var4 = typeof var4;
            var1 = false;
            if(!(var7 === var4)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var8 = var3.textAndImages;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.useRichChatTextBox;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['useRichChatInput'] = var4;
            var1 = true;
case 56:
            var4 = var6.renderSpoilers;
            var8 = 'string';
            var4 = typeof var4;
            if(!(var8 === var4)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var8 = var3.textAndImages;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.StringValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.renderSpoilers;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['renderSpoilers'] = var4;
            var1 = true;
case 58:
            var4 = var6.useThreadSidebar;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var8 = var3.textAndImages;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.useThreadSidebar;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['useThreadSidebar'] = var4;
            var1 = true;
case 60:
            var4 = var6.showInAppNotifications;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var8 = var3.notifications;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.showInAppNotifications;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['showInAppNotifications'] = var4;
            var1 = true;
case 62:
            var9 = var6.emojiPickerCollapsedSections;
            var4 = global;
            var8 = var4.Array;
            var8 = var9 instanceof var8;
            if(!var8) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var9 = var3.textAndImages;
            var8 = var6.emojiPickerCollapsedSections;
            var9['emojiPickerCollapsedSections'] = var8;
            var1 = true;
case 64:
            var8 = var6.stickerPickerCollapsedSections;
            var4 = var4.Array;
            var4 = var8 instanceof var4;
            if(!var4) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var8 = var3.textAndImages;
            var4 = var6.stickerPickerCollapsedSections;
            var8['stickerPickerCollapsedSections'] = var4;
            var1 = true;
case 66:
            var4 = var6.viewImageDescriptions;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var8 = var3.textAndImages;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.viewImageDescriptions;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['viewImageDescriptions'] = var4;
            var1 = true;
case 68:
            var4 = var6.showCommandSuggestions;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var8 = var3.textAndImages;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.showCommandSuggestions;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['showCommandSuggestions'] = var4;
            var1 = true;
case 70:
            var4 = var6.alwaysPreviewVideo;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var8 = var3.voiceAndVideo;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.alwaysPreviewVideo;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['alwaysPreviewVideo'] = var4;
            var1 = true;
case 72:
            var4 = var6.notifyFriendsOnGoLive;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var8 = var3.notifications;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.notifyFriendsOnGoLive;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['notifyFriendsOnGoLive'] = var4;
            var1 = true;
case 74:
            var4 = var6.installShortcutDesktop;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var8 = var3.gameLibrary;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.installShortcutDesktop;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['installShortcutDesktop'] = var4;
            var1 = true;
case 76:
            var4 = var6.installShortcutStartMenu;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var8 = var3.gameLibrary;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.installShortcutStartMenu;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['installShortcutStartMenu'] = var4;
            var1 = true;
case 78:
            var4 = var6.allowActivityPartyPrivacyFriends;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var8 = var3.privacy;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.allowActivityPartyPrivacyFriends;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['allowActivityPartyPrivacyFriends'] = var4;
            var1 = true;
case 80:
            var4 = var6.allowActivityPartyPrivacyVoiceChannel;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var8 = var3.privacy;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var10 = var4.BoolValue;
            var9 = var10.create;
            var4 = {};
            var11 = var6.allowActivityPartyPrivacyVoiceChannel;
            var4['value'] = var11;
            var4 = var9.bind(var10)(var4);
            var8['allowActivityPartyPrivacyVoiceChannel'] = var4;
            var1 = true;
case 82:
            var4 = var6.rtcPanelShowVoiceStates;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var3 = var3.debug;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var5 = var2.BoolValue;
            var4 = var5.create;
            var2 = {};
            var6 = var6.rtcPanelShowVoiceStates;
            var2['value'] = var6;
            var2 = var4.bind(var5)(var2);
            var3['rtcPanelShowVoiceStates'] = var2;
            var1 = true;
case 84:
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[3] = var4;
    var4 = {};
    var7 = 7;
    var4['version'] = var7;
    var7 = function run(arg1) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HotspotLocations;
        var3 = var1.APPLICATION_COMMAND_TOOLTIP;
        var1 = 10;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.APPLICATION_COMMAND_TOOLTIP;
        var1 = arg1;
        var1 = var5.bind(var4)(var1, var3, var2);
        return var1;
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[4] = var4;
    var4 = {};
    var7 = 8;
    var4['version'] = var7;
    var7 = function run(arg1) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HotspotLocations;
        var3 = var1.CHANNEL_BANNER_MEMBER_LIST_NOTICE;
        var1 = 10;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.CHANNELINFO_CHANNELBANNER_NOTICE;
        var1 = arg1;
        var1 = var5.bind(var4)(var1, var3, var2);
        return var1;
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[5] = var4;
    var4 = {};
    var7 = 9;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var4 = var2[var1];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var6 = var4.HotspotStore;
            var4 = var6.hasHiddenHotspot;
            var2 = var2[var1];
            var2 = var7.bind(var5)(var2);
            var2 = var2.HotspotLocations;
            var2 = var2.MULTI_ACCOUNT_TOOLTIP;
            var2 = var4.bind(var6)(var2);
            if(!var2) { _fun0008_ip = 44; continue _fun0008 }
case 86:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var7 = var2.Storage;
            var6 = var7.set;
            var4 = _closure1_slot5;
            var2 = 'true';
            var2 = var6.bind(var7)(var4, var2);
case 44:
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.HotspotLocations;
            var3 = var1.MULTI_ACCOUNT_TOOLTIP;
            var1 = 10;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.ACCOUNT_MULTIACCOUNT_TOOLTIP;
            var1 = arg1;
            var1 = var4.bind(var5)(var1, var3, var2);
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[6] = var4;
    var4 = {};
    var7 = 10;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var9 = _closure1_slot7;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.HotspotLocations;
            var2 = var1.HUB_LINK_CHANNEL_NOTICE;
            var8 = 10;
            var1 = var7[var8];
            var1 = var4.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.CHANNEL_NOTICE_HUBLINK;
            var1 = var9.bind(var5)(var6, var2, var1);
            var2 = 6;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var7 = var2.Storage;
            var4 = var7.get;
            var2 = 'channelNotices';
            var7 = var4.bind(var7)(var2);
            var2 = null;
            if(!(var2 == var7)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var7 = {};
case 87:
            var2 = _closure1_slot4;
            var2 = var2.INVITE;
            var2 = var7[var2];
            var4 = false;
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var10 = _closure1_slot6;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var5)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.CHANNEL_NOTICE_INVITE;
            var2 = var10.bind(var5)(var6, var9);
case 89:
            if(!var2) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var1 = true;
case 91:
            var2 = _closure1_slot4;
            var2 = var2.QUICKSWITCHER;
            var2 = var7[var2];
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 93; continue _fun0009 }
case 94:
            var10 = _closure1_slot6;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var5)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.CHANNEL_NOTICE_QUICKSWITCHER;
            var2 = var10.bind(var5)(var6, var9);
case 93:
            if(!var2) { _fun0009_ip = 95; continue _fun0009 }
case 96:
            var1 = true;
case 95:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_BOOSTING;
            var2 = var7[var2];
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
            var2 = var4.bind(var5)(var6, var3);
case 97:
            if(!var2) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var1 = true;
case 99:
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'channelNotices';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var7;
    var2[7] = var4;
    var4 = {};
    var7 = 11;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var7 = _closure1_slot7;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 4;
            var4 = var1[var3];
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            var4 = var4.HotspotLocations;
            var4 = var4.GUILD_EVENT_UPSELL;
            var8 = 10;
            var1 = var1[var8];
            var1 = var9.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.GUILD_HEADER_EVENT_UPSELL;
            var4 = var7.bind(var5)(var6, var4, var1);
            var1 = false;
            if(!var4) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var1 = true;
case 101:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.HotspotLocations;
            var3 = var3.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP;
            var2 = var2[var8];
            var2 = var7.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GUILD_HEADER_ANIMATED_GUILD_BANNER;
            var2 = var4.bind(var5)(var6, var3, var2);
            if(!var2) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var1 = true;
case 103:
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[8] = var4;
    var7 = {};
    var4 = 12;
    var7['version'] = var4;
    var9 = function run(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var4 = var1.Storage;
            var2 = var4.get;
            var1 = 'hideNag';
            var2 = var2.bind(var4)(var1);
            if(!var2) { _fun0011_ip = 105; continue _fun0011 }
case 106:
            var4 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.NAGBAR_NOTICE_DOWNLOAD;
            var2 = var4.bind(var5)(var6, var1);
case 105:
            var1 = false;
            if(!var2) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var1 = true;
case 107:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var8 = var2.Storage;
            var4 = var8.get;
            var2 = 'hideConnectSpotify';
            var2 = var4.bind(var8)(var2);
            if(!var2) { _fun0011_ip = 109; continue _fun0011 }
case 12:
            var8 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_CONNECT_SPOTIFY;
            var2 = var8.bind(var5)(var6, var4);
case 109:
            if(!var2) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var1 = true;
case 110:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var7 = var2.Storage;
            var4 = var7.get;
            var2 = 'hideConnectPlayStation';
            var2 = var4.bind(var7)(var2);
            if(!var2) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
            var2 = var4.bind(var5)(var6, var3);
case 112:
            if(!var2) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var1 = true;
case 114:
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var5 = var4[var2];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'hideNag';
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'hideConnectSpotify';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'hideConnectPlayStation';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[9] = var7;
    var7 = {};
    var9 = 13;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var4 = var1.Storage;
            var2 = var4.get;
            var1 = 'hidePremiumPromo';
            var2 = var2.bind(var4)(var1);
            if(!var2) { _fun0012_ip = 105; continue _fun0012 }
case 106:
            var4 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.NAGBAR_NOTICE_PREMIUM_PROMO;
            var2 = var4.bind(var5)(var6, var1);
case 105:
            var1 = false;
            if(!var2) { _fun0012_ip = 107; continue _fun0012 }
case 108:
            var1 = true;
case 107:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var8 = var2.Storage;
            var4 = var8.get;
            var2 = 'hidePremiumTier2TrialEnding';
            var2 = var4.bind(var8)(var2);
            if(!var2) { _fun0012_ip = 109; continue _fun0012 }
case 12:
            var8 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
            var2 = var8.bind(var5)(var6, var4);
case 109:
            if(!var2) { _fun0012_ip = 110; continue _fun0012 }
case 111:
            var1 = true;
case 110:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var7 = var2.Storage;
            var4 = var7.get;
            var2 = 'hidePremiumReactivateNotice';
            var2 = var4.bind(var7)(var2);
            if(!var2) { _fun0012_ip = 112; continue _fun0012 }
case 113:
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
            var2 = var4.bind(var5)(var6, var3);
case 112:
            if(!var2) { _fun0012_ip = 114; continue _fun0012 }
case 115:
            var1 = true;
case 114:
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var5 = var4[var2];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'hidePremiumPromo';
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'hidePremiumTier2TrialEnding';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'hidePremiumReactivateNotice';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[10] = var7;
    var7 = {};
    var9 = 14;
    var7['version'] = var9;
    var9 = function run(arg1) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HotspotLocations;
        var3 = var1.ACTIVITY_BEB_TUTORIAL;
        var1 = 10;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.ACTIVITIES_TUTORIAL_COACH_MARK;
        var1 = arg1;
        var1 = var5.bind(var4)(var1, var3, var2);
        return var1;
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var9;
    var2[11] = var7;
    var7 = {};
    var9 = 15;
    var7['version'] = var9;
    var9 = function run(arg1) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var1 = var6[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.HotspotLocations;
        var3 = var1.NOW_PLAYING_CONSENT_CARD;
        var1 = 10;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var2 = var1.NOW_PLAYING_CONSENT_CARD;
        var1 = arg1;
        var1 = var5.bind(var4)(var1, var3, var2);
        return var1;
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var9;
    var2[12] = var7;
    var7 = {};
    var9 = 16;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var6 = var1.Storage;
            var4 = var6.get;
            var1 = 'PromotionsPersistedStore';
            var1 = var4.bind(var6)(var1);
            var7 = null;
            if(!(var7 != var1)) { _fun0013_ip = 116; continue _fun0013 }
case 117:
            var1 = var1._state;
            var6 = var1.lastDismissedOutboundPromotionStartDate;
            var1 = var7 != var6;
            if(!var1) { _fun0013_ip = 118; continue _fun0013 }
case 119:
            var4 = var3.userContent;
            if(!(var7 == var4)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.UserContentSettings;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['userContent'] = var4;
case 120:
            var4 = var3.userContent;
            var4 = var4.lastDismissedOutboundPromotionStartDate;
            var1 = var7 == var4;
case 118:
            if(!var1) { _fun0013_ip = 122; continue _fun0013 }
case 103:
            var3 = var3.userContent;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var5 = var2.StringValue;
            var4 = var5.create;
            var2 = {};
            var2['value'] = var6;
            var2 = var4.bind(var5)(var2);
            var3['lastDismissedOutboundPromotionStartDate'] = var2;
            var1 = true;
case 122:
            return var1;
case 116:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var9;
    var2[13] = var7;
    var7 = {};
    var9 = 17;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var6 = var1.PersistedStore;
            var4 = var6.migrateAndReadStoreState;
            var1 = 'ExpressionSuggestionsPersistedStore';
            var7 = null;
            var1 = var4.bind(var6)(var1, var7);
            var1 = var1.state;
            if(!(var7 != var1)) { _fun0014_ip = 123; continue _fun0014 }
case 86:
            var6 = var1.expressionSuggestionsEnabled;
            var1 = var7 != var6;
            if(!var1) { _fun0014_ip = 104; continue _fun0014 }
case 124:
            var4 = var3.textAndImages;
            if(!(var7 == var4)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.TextAndImagesSettings;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['textAndImages'] = var4;
case 125:
            var4 = var3.textAndImages;
            var4 = var4.expressionSuggestionsEnabled;
            var1 = var7 == var4;
case 104:
            if(!var1) { _fun0014_ip = 94; continue _fun0014 }
case 127:
            var3 = var3.textAndImages;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var5 = var2.BoolValue;
            var4 = var5.create;
            var2 = {};
            var2['value'] = var6;
            var2 = var4.bind(var5)(var2);
            var3['expressionSuggestionsEnabled'] = var2;
            var1 = true;
case 94:
            return var1;
case 123:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'ExpressionSuggestionsPersistedStore';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[14] = var7;
    var7 = {};
    var9 = 18;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var7 = _closure1_slot7;
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 4;
            var4 = var1[var3];
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            var4 = var4.HotspotLocations;
            var4 = var4.GUILD_DELETE_FEEDBACK;
            var8 = 10;
            var1 = var1[var8];
            var1 = var9.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.GUILD_DELETE_FEEDBACK;
            var4 = var7.bind(var5)(var6, var4, var1);
            var1 = false;
            if(!var4) { _fun0015_ip = 101; continue _fun0015 }
case 102:
            var1 = true;
case 101:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.HotspotLocations;
            var3 = var3.GUILD_LEAVE_FEEDBACK;
            var2 = var2[var8];
            var2 = var7.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GUILD_LEAVE_FEEDBACK;
            var2 = var4.bind(var5)(var6, var3, var2);
            if(!var2) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var1 = true;
case 103:
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var9;
    var2[15] = var7;
    var7 = {};
    var9 = 19;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = 'forumHelperCardStorageKey';
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var3 = var3 != var1;
            if(!var3) { _fun0016_ip = 117; continue _fun0016 }
case 27:
            var3 = var1;
case 117:
            var1 = false;
            if(!var3) { _fun0016_ip = 128; continue _fun0016 }
case 129:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.FORUM_CHANNEL_HELPER_CARD;
            var2 = arg1;
            var1 = var4.bind(var5)(var2, var3);
case 128:
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'forumHelperCardStorageKey';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[16] = var7;
    var7 = {};
    var9 = 20;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 6;
            var2 = var2[var8];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var4 = var2.Storage;
            var2 = var4.get;
            var7 = 'lastChangeLogId';
            var2 = var2.bind(var4)(var7);
            var6 = null;
            if(!(var6 != var2)) { _fun0017_ip = 130; continue _fun0017 }
case 117:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 11;
            var4 = var10[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.isSnowflake;
            var4 = var4.bind(var9)(var2);
            if(var4) { _fun0017_ip = 131; continue _fun0017 }
case 5:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var9.bind(var5)(var4);
            var9 = var4.Storage;
            var4 = var9.remove;
            var4 = var4.bind(var9)(var7);
            var4 = false;
            return var4;
case 131:
            var4 = var1.userContent;
            if(!(var6 != var4)) { _fun0017_ip = 132; continue _fun0017 }
case 133:
            var4 = var1.userContent;
            if(!(var6 != var4)) { _fun0017_ip = 134; continue _fun0017 }
case 135:
            var4 = var1.userContent;
            var4 = var4.lastReceivedChangelogId;
            if(!(var6 != var4)) { _fun0017_ip = 134; continue _fun0017 }
case 46:
            var4 = var1.userContent;
            var6 = var4.lastReceivedChangelogId;
            var4 = '0';
            if(!(var4 !== var6)) { _fun0017_ip = 134; continue _fun0017 }
case 111:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var5)(var4);
            var6 = var4.Storage;
            var4 = var6.remove;
            var4 = var4.bind(var6)(var7);
            var4 = false;
            return var4;
case 132:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.UserContentSettings;
            var3 = var4.create;
            var3 = var3.bind(var4)();
            var1['userContent'] = var3;
case 134:
            var1 = var1.userContent;
            var1['lastReceivedChangelogId'] = var2;
            var1 = true;
            return var1;
case 130:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'lastChangeLogId';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[17] = var7;
    var7 = {};
    var9 = 21;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arg1;
            var1 = var3.appearance;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var4 = undefined;
            if(var2) { _fun0018_ip = 136; continue _fun0018 }
case 137:
            var4 = var1.uiDensity;
case 136:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 5;
            var1 = var1[var6];
            var1 = var7.bind(var5)(var1);
            var1 = var1.UIDensity;
            var1 = var1.COMPACT;
            var1 = var4 === var1;
            if(!var1) { _fun0018_ip = 138; continue _fun0018 }
case 8:
            var3 = var3.appearance;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.UIDensity;
            var2 = var2.DEFAULT;
            var3['uiDensity'] = var2;
            var1 = true;
case 138:
            return var1;
        }
    };
    var7['run'] = var9;
    var8 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var8;
    var2[18] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/PreloadedUserSettingsMigrations.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();