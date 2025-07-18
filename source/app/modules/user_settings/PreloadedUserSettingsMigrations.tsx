// app/modules/user_settings/PreloadedUserSettingsMigrations.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function migrateDismissibleContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = arg2;
            var1 = var2.userContent;
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 77; continue _fun0001 }
 18:
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
 77:
            var1 = var2.userContent;
            var1 = var1.dismissedContents;
            if(!(var3 == var1)) { _fun0001_ip = 133; continue _fun0001 }
 93:
            var3 = var2.userContent;
            var1 = global;
            var1 = var1.Uint8Array;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var11 = var4;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var4;
            var3['dismissedContents'] = var1;
 133:
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
            if(var3) { _fun0001_ip = 242; continue _fun0001 }
 187:
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
 242:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function migrateHotspotLocation(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(var3) { _fun0002_ip = 70; continue _fun0002 }
 54:
            var4 = _closure1_slot6;
            var3 = arg1;
            var2 = arg3;
            var1 = var4.bind(var5)(var3, var2);
 70:
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
 0:
            var17 = arg1;
            var2 = {};
            var1 = 'Recent Mentions';
            var2['Mentions'] = var1;
            var1 = 'Inbox';
            var2['Unreads'] = var1;
            var1 = var17.inbox;
            var16 = null;
            if(!(var16 == var1)) { _fun0003_ip = 470; continue _fun0003 }
 48:
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
            if(!var5) { _fun0003_ip = 144; continue _fun0003 }
 134:
            var5 = true;
            var3['viewedTutorial'] = var5;
            var1 = true;
 144:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var4];
            var5 = var6.bind(var14)(var5);
            var8 = var5.Storage;
            var6 = var8.get;
            var5 = 'recentsButtonTab2';
            var5 = var6.bind(var8)(var5);
            if(!(var16 != var5)) { _fun0003_ip = 265; continue _fun0003 }
 187:
            var2 = var2.Mentions;
            if(!(var5 !== var2)) { _fun0003_ip = 228; continue _fun0003 }
 197:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var5.bind(var14)(var2);
            var2 = var2.InboxTab;
            var2 = var2.UNREADS;
            _fun0003_ip = 257; continue _fun0003;
 228:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var6.bind(var14)(var5);
            var5 = var5.InboxTab;
            var2 = var5.MENTIONS;
 257:
            var3['currentTab'] = var2;
            var1 = true;
 265:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var14)(var2);
            var4 = var2.Storage;
            var3 = var4.get;
            var2 = 'unread-messages-collapsed-channels';
            var13 = var3.bind(var4)(var2);
            if(!(var16 == var13)) { _fun0003_ip = 310; continue _fun0003 }
 308:
            var13 = {};
 310:
            var11 = var13;
            var6 = 7;
            var5 = '0';
            var4 = var1;
            var3 = undefined;
            var2 = undefined;
            var1 = var4;
            for(var8 in var11)
 343:
            {
                var20 = var4;
                var1 = var20;
 358:
                var22 = var8;
                var19 = var13[var22];
                var4 = var20;
                if(!var19) { _fun0003_ip = 343; continue _fun0003 }
 371:
                var21 = _closure1_slot3;
                var19 = var21.getChannel;
                var19 = var19.bind(var21)(var22);
                var4 = var20;
                var2 = var19;
                if(var16 == var2) { _fun0003_ip = 343; continue _fun0003 }
 395:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var6];
                var24 = var21.bind(var14)(var20);
                var23 = var24.mutateUserChannelSettings;
                var3 = var19.guild_id;
                var20 = var16 != var3;
                var22 = var5;
                if(!var20) { _fun0003_ip = 436; continue _fun0003 }
 433:
                var22 = var3;
 436:
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
                _fun0003_ip = 343; continue _fun0003;
            }
 468:
            return var1;
 470:
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
 0:
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
 0:
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
                    if(var2) { _fun0005_ip = 56; continue _fun0005 }
 52:
                    var2 = '';
 56:
                    var1['diversitySurrogate'] = var2;
                    return var1;
                }
            };
            var2[0] = var1;
            var1 = 'EmojiStore';
            var1 = var5.bind(var6)(var1, var2);
            var2 = var1.state;
            var6 = null;
            if(!(var6 != var2)) { _fun0004_ip = 260; continue _fun0004 }
 83:
            var1 = var2.diversitySurrogate;
            var5 = var6 != var1;
            if(!var5) { _fun0004_ip = 110; continue _fun0004 }
 96:
            var8 = var2.diversitySurrogate;
            var1 = '';
            var5 = var1 !== var8;
 110:
            var1 = false;
            if(!var5) { _fun0004_ip = 258; continue _fun0004 }
 118:
            var5 = var3.textAndImages;
            if(!(var6 == var5)) { _fun0004_ip = 169; continue _fun0004 }
 128:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var5 = var9[var5];
            var5 = var8.bind(var7)(var5);
            var8 = var5.TextAndImagesSettings;
            var5 = var8.create;
            var5 = var5.bind(var8)();
            var3['textAndImages'] = var5;
 169:
            var5 = var3.textAndImages;
            var5 = var5.diversitySurrogate;
            if(!(var6 == var5)) { _fun0004_ip = 232; continue _fun0004 }
 185:
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
 232:
            var3 = var3.textAndImages;
            var3 = var3.diversitySurrogate;
            var2 = var2.diversitySurrogate;
            var3['value'] = var2;
            var1 = true;
 258:
            return var1;
 260:
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
 0:
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
            if(var3) { _fun0006_ip = 114; continue _fun0006 }
 56:
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
 114:
            var1 = false;
            if(!var3) { _fun0006_ip = 164; continue _fun0006 }
 119:
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
 164:
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
 0:
            var3 = arg1;
            var2 = var3.textAndImages;
            var1 = null;
            if(!(var1 == var2)) { _fun0007_ip = 55; continue _fun0007 }
 15:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.TextAndImagesSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 55:
            var3['textAndImages'] = var2;
            var2 = var3.notifications;
            if(!(var1 == var2)) { _fun0007_ip = 111; continue _fun0007 }
 71:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.NotificationSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 111:
            var3['notifications'] = var2;
            var2 = var3.privacy;
            if(!(var1 == var2)) { _fun0007_ip = 167; continue _fun0007 }
 127:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.PrivacySettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 167:
            var3['privacy'] = var2;
            var2 = var3.voiceAndVideo;
            if(!(var1 == var2)) { _fun0007_ip = 223; continue _fun0007 }
 183:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.VoiceAndVideoSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 223:
            var3['voiceAndVideo'] = var2;
            var2 = var3.gameLibrary;
            if(!(var1 == var2)) { _fun0007_ip = 279; continue _fun0007 }
 239:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.GameLibrarySettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 279:
            var3['gameLibrary'] = var2;
            var2 = var3.debug;
            if(!(var1 == var2)) { _fun0007_ip = 335; continue _fun0007 }
 295:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.DebugSettings;
            var4 = var5.create;
            var2 = var4.bind(var5)();
 335:
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
            if(!(var1 == var6)) { _fun0007_ip = 394; continue _fun0007 }
 392:
            var6 = {};
 394:
            var4 = var6.useRichChatTextBox;
            var7 = 'boolean';
            var4 = typeof var4;
            var1 = false;
            if(!(var7 === var4)) { _fun0007_ip = 475; continue _fun0007 }
 413:
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
 475:
            var4 = var6.renderSpoilers;
            var8 = 'string';
            var4 = typeof var4;
            if(!(var8 === var4)) { _fun0007_ip = 554; continue _fun0007 }
 492:
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
 554:
            var4 = var6.useThreadSidebar;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 629; continue _fun0007 }
 567:
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
 629:
            var4 = var6.showInAppNotifications;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 704; continue _fun0007 }
 642:
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
 704:
            var9 = var6.emojiPickerCollapsedSections;
            var4 = global;
            var8 = var4.Array;
            var8 = var9 instanceof var8;
            if(!var8) { _fun0007_ip = 745; continue _fun0007 }
 725:
            var9 = var3.textAndImages;
            var8 = var6.emojiPickerCollapsedSections;
            var9['emojiPickerCollapsedSections'] = var8;
            var1 = true;
 745:
            var8 = var6.stickerPickerCollapsedSections;
            var4 = var4.Array;
            var4 = var8 instanceof var4;
            if(!var4) { _fun0007_ip = 784; continue _fun0007 }
 764:
            var8 = var3.textAndImages;
            var4 = var6.stickerPickerCollapsedSections;
            var8['stickerPickerCollapsedSections'] = var4;
            var1 = true;
 784:
            var4 = var6.viewImageDescriptions;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 859; continue _fun0007 }
 797:
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
 859:
            var4 = var6.showCommandSuggestions;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 934; continue _fun0007 }
 872:
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
 934:
            var4 = var6.alwaysPreviewVideo;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1009; continue _fun0007 }
 947:
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
 1009:
            var4 = var6.notifyFriendsOnGoLive;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1084; continue _fun0007 }
 1022:
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
 1084:
            var4 = var6.installShortcutDesktop;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1159; continue _fun0007 }
 1097:
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
 1159:
            var4 = var6.installShortcutStartMenu;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1234; continue _fun0007 }
 1172:
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
 1234:
            var4 = var6.allowActivityPartyPrivacyFriends;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1309; continue _fun0007 }
 1247:
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
 1309:
            var4 = var6.allowActivityPartyPrivacyVoiceChannel;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1384; continue _fun0007 }
 1322:
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
 1384:
            var4 = var6.rtcPanelShowVoiceStates;
            var4 = typeof var4;
            if(!(var7 === var4)) { _fun0007_ip = 1459; continue _fun0007 }
 1397:
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
 1459:
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
 0:
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
            if(!var2) { _fun0008_ip = 111; continue _fun0008 }
 66:
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
 111:
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
 0:
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
            if(!(var2 == var7)) { _fun0009_ip = 117; continue _fun0009 }
 115:
            var7 = {};
 117:
            var2 = _closure1_slot4;
            var2 = var2.INVITE;
            var2 = var7[var2];
            var4 = false;
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 179; continue _fun0009 }
 140:
            var10 = _closure1_slot6;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var5)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.CHANNEL_NOTICE_INVITE;
            var2 = var10.bind(var5)(var6, var9);
 179:
            if(!var2) { _fun0009_ip = 184; continue _fun0009 }
 182:
            var1 = true;
 184:
            var2 = _closure1_slot4;
            var2 = var2.QUICKSWITCHER;
            var2 = var7[var2];
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 244; continue _fun0009 }
 205:
            var10 = _closure1_slot6;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var11.bind(var5)(var9);
            var9 = var9.DismissibleContent;
            var9 = var9.CHANNEL_NOTICE_QUICKSWITCHER;
            var2 = var10.bind(var5)(var6, var9);
 244:
            if(!var2) { _fun0009_ip = 249; continue _fun0009 }
 247:
            var1 = true;
 249:
            var2 = _closure1_slot4;
            var2 = var2.GUILD_BOOSTING;
            var2 = var7[var2];
            var2 = var4 === var2;
            if(!var2) { _fun0009_ip = 309; continue _fun0009 }
 270:
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
            var2 = var4.bind(var5)(var6, var3);
 309:
            if(!var2) { _fun0009_ip = 314; continue _fun0009 }
 312:
            var1 = true;
 314:
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
 0:
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
            if(!var4) { _fun0010_ip = 82; continue _fun0010 }
 80:
            var1 = true;
 82:
            var9 = _closure1_slot7;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var3];
            var7 = var10.bind(var5)(var7);
            var7 = var7.HotspotLocations;
            var7 = var7.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP;
            var4 = var4[var8];
            var4 = var10.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.GUILD_HEADER_PREMIUM_GUILD_PROGRESS;
            var4 = var9.bind(var5)(var6, var7, var4);
            if(!var4) { _fun0010_ip = 148; continue _fun0010 }
 146:
            var1 = true;
 148:
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
            if(!var2) { _fun0010_ip = 214; continue _fun0010 }
 212:
            var1 = true;
 214:
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
 0:
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
            if(!var2) { _fun0011_ip = 95; continue _fun0011 }
 53:
            var4 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.NAGBAR_NOTICE_DOWNLOAD;
            var2 = var4.bind(var5)(var6, var1);
 95:
            var1 = false;
            if(!var2) { _fun0011_ip = 102; continue _fun0011 }
 100:
            var1 = true;
 102:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var8 = var2.Storage;
            var4 = var8.get;
            var2 = 'hideConnectSpotify';
            var2 = var4.bind(var8)(var2);
            if(!var2) { _fun0011_ip = 186; continue _fun0011 }
 144:
            var8 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_CONNECT_SPOTIFY;
            var2 = var8.bind(var5)(var6, var4);
 186:
            if(!var2) { _fun0011_ip = 191; continue _fun0011 }
 189:
            var1 = true;
 191:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var8 = var2.Storage;
            var4 = var8.get;
            var2 = 'hideConnectPlayStation';
            var2 = var4.bind(var8)(var2);
            if(!var2) { _fun0011_ip = 275; continue _fun0011 }
 233:
            var8 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
            var2 = var8.bind(var5)(var6, var4);
 275:
            if(!var2) { _fun0011_ip = 280; continue _fun0011 }
 278:
            var1 = true;
 280:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var5)(var2);
            var7 = var2.Storage;
            var4 = var7.get;
            var2 = 'hideMFASMSNotice';
            var2 = var4.bind(var7)(var2);
            if(!var2) { _fun0011_ip = 364; continue _fun0011 }
 322:
            var4 = _closure1_slot6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.NAGBAR_NOTICE_MFA_SMS_BACKUP;
            var2 = var4.bind(var5)(var6, var3);
 364:
            if(!var2) { _fun0011_ip = 369; continue _fun0011 }
 367:
            var1 = true;
 369:
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
        var5 = var4[var2];
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'hideConnectPlayStation';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'hideMFASMSNotice';
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
 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = 'hidePremiumPromo';
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0012_ip = 95; continue _fun0012 }
 53:
            var4 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.NAGBAR_NOTICE_PREMIUM_PROMO;
            var3 = var4.bind(var5)(var6, var1);
 95:
            var1 = false;
            if(!var3) { _fun0012_ip = 102; continue _fun0012 }
 100:
            var1 = true;
 102:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var4.bind(var5)(var3);
            var8 = var3.Storage;
            var4 = var8.get;
            var3 = 'hidePremiumTier2TrialEnding';
            var3 = var4.bind(var8)(var3);
            if(!var3) { _fun0012_ip = 186; continue _fun0012 }
 144:
            var8 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
            var3 = var8.bind(var5)(var6, var4);
 186:
            if(!var3) { _fun0012_ip = 191; continue _fun0012 }
 189:
            var1 = true;
 191:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var4.bind(var5)(var3);
            var7 = var3.Storage;
            var4 = var7.get;
            var3 = 'hidePremiumReactivateNotice';
            var3 = var4.bind(var7)(var3);
            if(!var3) { _fun0012_ip = 275; continue _fun0012 }
 233:
            var7 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 10;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
            var3 = var7.bind(var5)(var6, var4);
 275:
            if(!var3) { _fun0012_ip = 280; continue _fun0012 }
 278:
            var1 = true;
 280:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.HotspotLocations;
            var3 = var2.INVITE_SPLASH_GUILD_HEADER_TOOLTIP;
            var2 = 10;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.GUILD_HEADER_INVITE_SPLASH;
            var2 = var4.bind(var5)(var6, var3, var2);
            if(!var2) { _fun0012_ip = 352; continue _fun0012 }
 350:
            var1 = true;
 352:
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
 0:
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
            if(!(var7 != var1)) { _fun0013_ip = 206; continue _fun0013 }
 59:
            var1 = var1._state;
            var6 = var1.lastDismissedOutboundPromotionStartDate;
            var1 = var7 != var6;
            if(!var1) { _fun0013_ip = 145; continue _fun0013 }
 78:
            var4 = var3.userContent;
            if(!(var7 == var4)) { _fun0013_ip = 129; continue _fun0013 }
 88:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.UserContentSettings;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['userContent'] = var4;
 129:
            var4 = var3.userContent;
            var4 = var4.lastDismissedOutboundPromotionStartDate;
            var1 = var7 == var4;
 145:
            if(!var1) { _fun0013_ip = 204; continue _fun0013 }
 148:
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
 204:
            return var1;
 206:
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
 0:
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
            if(!(var7 != var1)) { _fun0014_ip = 207; continue _fun0014 }
 66:
            var6 = var1.expressionSuggestionsEnabled;
            var1 = var7 != var6;
            if(!var1) { _fun0014_ip = 146; continue _fun0014 }
 79:
            var4 = var3.textAndImages;
            if(!(var7 == var4)) { _fun0014_ip = 130; continue _fun0014 }
 89:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var8 = var4.TextAndImagesSettings;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['textAndImages'] = var4;
 130:
            var4 = var3.textAndImages;
            var4 = var4.expressionSuggestionsEnabled;
            var1 = var7 == var4;
 146:
            if(!var1) { _fun0014_ip = 205; continue _fun0014 }
 149:
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
 205:
            return var1;
 207:
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
 0:
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
            if(!var4) { _fun0015_ip = 82; continue _fun0015 }
 80:
            var1 = true;
 82:
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
            if(!var2) { _fun0015_ip = 148; continue _fun0015 }
 146:
            var1 = true;
 148:
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
 0:
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
            if(!var3) { _fun0016_ip = 59; continue _fun0016 }
 56:
            var3 = var1;
 59:
            var1 = false;
            if(!var3) { _fun0016_ip = 109; continue _fun0016 }
 64:
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
 109:
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
 0:
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
            if(!(var6 != var2)) { _fun0017_ip = 284; continue _fun0017 }
 59:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 11;
            var4 = var10[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.isSnowflake;
            var4 = var4.bind(var9)(var2);
            if(var4) { _fun0017_ip = 131; continue _fun0017 }
 93:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var9.bind(var5)(var4);
            var9 = var4.Storage;
            var4 = var9.remove;
            var4 = var4.bind(var9)(var7);
            var4 = false;
            return var4;
 131:
            var4 = var1.userContent;
            if(!(var6 != var4)) { _fun0017_ip = 227; continue _fun0017 }
 141:
            var4 = var1.userContent;
            if(!(var6 != var4)) { _fun0017_ip = 268; continue _fun0017 }
 151:
            var4 = var1.userContent;
            var4 = var4.lastReceivedChangelogId;
            if(!(var6 != var4)) { _fun0017_ip = 268; continue _fun0017 }
 167:
            var4 = var1.userContent;
            var6 = var4.lastReceivedChangelogId;
            var4 = '0';
            if(!(var4 !== var6)) { _fun0017_ip = 268; continue _fun0017 }
 189:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var5)(var4);
            var6 = var4.Storage;
            var4 = var6.remove;
            var4 = var4.bind(var6)(var7);
            var4 = false;
            return var4;
 227:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.UserContentSettings;
            var3 = var4.create;
            var3 = var3.bind(var4)();
            var1['userContent'] = var3;
 268:
            var1 = var1.userContent;
            var1['lastReceivedChangelogId'] = var2;
            var1 = true;
            return var1;
 284:
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
 0:
            var3 = arg1;
            var1 = var3.appearance;
            var2 = null;
            var2 = var2 == var1;
            var5 = undefined;
            var4 = undefined;
            if(var2) { _fun0018_ip = 28; continue _fun0018 }
 22:
            var4 = var1.uiDensity;
 28:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 5;
            var1 = var1[var6];
            var1 = var7.bind(var5)(var1);
            var1 = var1.UIDensity;
            var1 = var1.COMPACT;
            var1 = var4 === var1;
            if(!var1) { _fun0018_ip = 113; continue _fun0018 }
 70:
            var3 = var3.appearance;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.UIDensity;
            var2 = var2.DEFAULT;
            var3['uiDensity'] = var2;
            var1 = true;
 113:
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