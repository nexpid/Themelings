// app/modules/icymi/native/ICYMI.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function isItemNSFW(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.data;
            var3 = var2.kind;
            var2 = 'message';
            if(!(var2 !== var3)) { _fun0001_ip = 174; continue _fun0001 }
 24:
            var2 = 'channelSummary';
            if(!(var2 !== var3)) { _fun0001_ip = 154; continue _fun0001 }
 34:
            var2 = 'generatedCandidate';
            if(!(var2 !== var3)) { _fun0001_ip = 135; continue _fun0001 }
 44:
            var2 = 'forumThread';
            if(!(var2 !== var3)) { _fun0001_ip = 115; continue _fun0001 }
 54:
            var2 = 'guildEvent';
            if(!(var2 !== var3)) { _fun0001_ip = 66; continue _fun0001 }
 62:
            var2 = false;
            return var2;
 66:
            var4 = _closure1_slot9;
            var3 = var4.getGuildScheduledEvent;
            var2 = var1.data;
            var2 = var2.eventId;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            var3 = var3 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 111; continue _fun0001 }
 106:
            var7 = var2.guild_id;
 111:
            var4 = undefined;
            _fun0001_ip = 191; continue _fun0001;
 115:
            var2 = var1.data;
            var2 = var2.threadChannel;
            var4 = var2.id;
            var7 = undefined;
            _fun0001_ip = 191; continue _fun0001;
 135:
            var2 = var1.data;
            var2 = var2.item;
            var4 = var2.channel_id;
            var7 = undefined;
            _fun0001_ip = 191; continue _fun0001;
 154:
            var2 = var1.data;
            var2 = var2.topic;
            var4 = var2.channelId;
            var7 = undefined;
            _fun0001_ip = 191; continue _fun0001;
 174:
            var1 = var1.data;
            var1 = var1.message;
            var4 = var1.channel_id;
            var7 = undefined;
 191:
            var3 = _closure1_slot12;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 223; continue _fun0001 }
 214:
            var1 = var4.nsfw;
            if(var1) { _fun0001_ip = 330; continue _fun0001 }
 223:
            var6 = var5 == var4;
            var1 = undefined;
            if(var6) { _fun0001_ip = 237; continue _fun0001 }
 232:
            var1 = var4.guild_id;
 237:
            if(!(var5 != var1)) { _fun0001_ip = 244; continue _fun0001 }
 241:
            var7 = var1;
 244:
            var1 = var5 != var7;
            var4 = null;
            if(!var1) { _fun0001_ip = 267; continue _fun0001 }
 253:
            var6 = _closure1_slot13;
            var1 = var6.getGuild;
            var4 = var1.bind(var6)(var7);
 267:
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 282; continue _fun0001 }
 276:
            var6 = var4.nsfwLevel;
 282:
            var1 = _closure1_slot16;
            var1 = var1.EXPLICIT;
            var1 = var6 === var1;
            if(var1) { _fun0001_ip = 328; continue _fun0001 }
 299:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 314; continue _fun0001 }
 308:
            var3 = var4.nsfwLevel;
 314:
            var2 = _closure1_slot16;
            var2 = var2.AGE_RESTRICTED;
            var1 = var3 === var2;
 328:
            return var1;
 330:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function SettingsButton() {
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 19;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        var8 = 'sm';
        var7 = _closure1_slot18;
        var5 = 20;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.FiltersHorizontalIcon;
        var5 = {};
        var5['size'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['icon'] = var5;
        var5 = function onPress() {
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var5 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var5);
            var8 = var5.ICYMIAnalytics;
            var7 = var8.trackItemInteraction;
            var6 = 'filters_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var5 = _closure1_slot1;
            var3 = 22;
            var3 = var2[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openLazy;
            var3 = 24;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 23;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var3 = 'ICYMISettingsActionSheet';
            var2 = {};
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function NotificationsButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var15 = var1.numUnreadMentions;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 25;
            var1 = var18[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var14 = var1.value;
            var10 = var1.showDot;
            var12 = _closure1_slot0;
            var1 = 26;
            var1 = var18[var1];
            var2 = var12.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var1 = _closure1_slot24;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot18;
            var1 = 19;
            var1 = var18[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
            var17 = 'sm';
            var8 = _closure1_slot19;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = {'flexDirection': 'row', 'gap': 4};
            var6['style'] = var9;
            var13 = _closure1_slot18;
            var9 = 27;
            var9 = var18[var9];
            var9 = var12.bind(var4)(var9);
            var12 = var9.AtIcon;
            var9 = {};
            var9['size'] = var17;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            if(var10) { _fun0002_ip = 208; continue _fun0002 }
 202:
            var12 = 0;
            var10 = var15 > var12;
 208:
            if(!var10) { _fun0002_ip = 261; continue _fun0002 }
 211:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 28;
            var11 = var17[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var16.notificationBadge;
            var11['style'] = var16;
            var14 = var14 + var15;
            var11['value'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 261:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var5 = var2.ICYMIAnalytics;
                var4 = var5.trackItemInteraction;
                var3 = 'notification_button';
                var2 = 'press_notification_button';
                var2 = var4.bind(var5)(var3, var3, var2);
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = 'notifications-screen';
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function InfoButton() {
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 19;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        var8 = 'sm';
        var7 = _closure1_slot18;
        var5 = 29;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.CircleInformationIcon;
        var5 = {};
        var5['size'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['icon'] = var5;
        var5 = function onPress() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var2 = var4[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var7 = var2.ICYMIAnalytics;
            var6 = var7.trackItemInteraction;
            var5 = 'info_button';
            var2 = 'press_info_button';
            var2 = var6.bind(var7)(var5, var5, var2);
            var2 = 30;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.pushICYMIInfoModal;
            var2 = {};
            var5 = true;
            var2['extendedOnboarding'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function ICYMIHeaderTextWrapper(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var1 = var1.isPressable;
            var3 = _closure1_slot24;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var9 = _closure1_slot5;
            var6 = var9.useMemo;
            var4 = function() {
                var4 = _closure1_slot19;
                var3 = _closure1_slot20;
                var2 = {};
                var10 = _closure1_slot18;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 31;
                var5 = var13[var6];
                var1 = undefined;
                var5 = var12.bind(var1)(var5);
                var8 = var5.Text;
                var5 = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                var9 = 32;
                var11 = var13[var9];
                var11 = var12.bind(var1)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var13[var9];
                var11 = var12.bind(var1)(var11);
                var11 = var11.t;
                var11 = var11.SY4sdX;
                var11 = var14.bind(var15)(var11);
                var5['children'] = var11;
                var8 = var10.bind(var1)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot18;
                var6 = var13[var6];
                var6 = var12.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {'color': 'text-brand', 'variant': 'text-xs/bold'};
                var10 = {};
                var11 = 4;
                var10['marginTop'] = var11;
                var6['style'] = var10;
                var10 = var13[var9];
                var10 = var12.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.Ac2OZG;
                var9 = var10.bind(var11)(var9);
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var6 = var6.bind(var9)(var4, var3);
            var4 = _closure1_slot18;
            if(var1) { _fun0003_ip = 85; continue _fun0003 }
 57:
            var3 = _closure1_slot6;
            var1 = {};
            var9 = var8.headerText;
            var1['style'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 144; continue _fun0003;
 85:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 33;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = var8.headerText;
            var2['style'] = var8;
            var7 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 21;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var7 = var2.ICYMIAnalytics;
                var6 = var7.trackItemInteraction;
                var5 = 'title_text';
                var2 = 'press_info_title_text';
                var2 = var6.bind(var7)(var5, var5, var2);
                var2 = 30;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.pushICYMIInfoModal;
                var2 = {};
                var5 = true;
                var2['extendedOnboarding'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 144:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleEndReached() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 44;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hydrateNextPage;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function itemToType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var1 = var6.data;
            var5 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var5)) { _fun0004_ip = 352; continue _fun0004 }
 24:
            var2 = 'loading';
            if(!(var2 !== var5)) { _fun0004_ip = 350; continue _fun0004 }
 35:
            var4 = 'message';
            if(!(var4 !== var5)) { _fun0004_ip = 253; continue _fun0004 }
 46:
            var3 = 'channelSummary';
            if(!(var3 !== var5)) { _fun0004_ip = 247; continue _fun0004 }
 59:
            var3 = 'guildEvent';
            if(!(var3 !== var5)) { _fun0004_ip = 239; continue _fun0004 }
 70:
            var3 = 'contentInventory';
            if(!(var3 !== var5)) { _fun0004_ip = 168; continue _fun0004 }
 80:
            var3 = 'recommendedGuilds';
            if(!(var3 !== var5)) { _fun0004_ip = 160; continue _fun0004 }
 90:
            var3 = 'forumThread';
            if(!(var3 !== var5)) { _fun0004_ip = 152; continue _fun0004 }
 100:
            var3 = 'generatedCandidate';
            if(!(var3 !== var5)) { _fun0004_ip = 144; continue _fun0004 }
 110:
            var3 = 'icymiHeader';
            if(!(var3 !== var5)) { _fun0004_ip = 136; continue _fun0004 }
 120:
            var3 = 'mentions';
            if(!(var3 !== var5)) { _fun0004_ip = 134; continue _fun0004 }
 128:
            var5 = 'unknown';
            return var5;
 134:
            return var3;
 136:
            var3 = 'icymi_header';
            return var3;
 144:
            var3 = 'generated_candidate';
            return var3;
 152:
            var3 = 'forum_thread';
            return var3;
 160:
            var3 = 'recommended_guilds';
            return var3;
 168:
            var3 = var6.data;
            var3 = var3.content;
            var7 = var3.content_type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 46;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var5);
            var3 = var3.ContentInventoryEntryType;
            var5 = var3.CUSTOM_STATUS;
            var3 = 'hotwheels_gaming_activity';
            if(!(var7 === var5)) { _fun0004_ip = 237; continue _fun0004 }
 231:
            var3 = 'hotwheels_custom_status';
 237:
            return var3;
 239:
            var3 = 'guild_event';
            return var3;
 247:
            var3 = 'summary';
            return var3;
 253:
            var8 = var6.channelType;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 45;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var7 = var3.GUILD_ANNOUNCEMENT;
            var3 = 'announcement';
            if(!(var8 !== var7)) { _fun0004_ip = 348; continue _fun0004 }
 304:
            var6 = var6.data;
            var7 = var6.messageContext;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0004_ip = 332; continue _fun0004 }
 326:
            var5 = var7.external_content_application_id;
 332:
            var5 = var6 != var5;
            if(!var5) { _fun0004_ip = 345; continue _fun0004 }
 339:
            var4 = 'game_message';
 345:
            var3 = var4;
 348:
            return var3;
 350:
            return var2;
 352:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function getViewableFeedItemsArray(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot15;
            var2 = var3.getUnreadDisplayItems;
            var15 = var2.bind(var3)();
            var4 = new Array(0);
            var3 = 0;
            var16 = var4;
            var14 = 0;
            var14 = arraySpread(var16, var15, var14);
            var6 = _closure1_slot15;
            var2 = var6.getReadDisplayItems;
            var15 = var2.bind(var6)();
            var16 = var4;
            var2 = arraySpread(var16, var15, var14);
            var6 = null;
            var _closure2_slot0 = var6;
            var2 = var9.length;
            var5 = 1;
            var7 = var2 - var5;
            var2 = null;
            if(!(var7 >= var3)) { _fun0005_ip = 150; continue _fun0005 }
 82:
            var10 = var9[var7];
            if(!(var6 != var10)) { _fun0005_ip = 141; continue _fun0005 }
 90:
            var13 = _closure1_slot22;
            var12 = var13.has;
            var11 = var10.item;
            var11 = var11.data;
            var11 = var11.kind;
            var11 = var12.bind(var13)(var11);
            if(var11) { _fun0005_ip = 141; continue _fun0005 }
 122:
            var10 = var10.item;
            var10 = var10.id;
            _closure2_slot0 = var10;
            var2 = var10;
            _fun0005_ip = 150; continue _fun0005;
 141:
            var7 = var7 - 1;
            var2 = null;
            if(var7 >= var3) { _fun0005_ip = 82; continue _fun0005 }
 150:
            if(!(var6 != var2)) { _fun0005_ip = 199; continue _fun0005 }
 154:
            var2 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            if(!(!(var1 < var3))) { _fun0005_ip = 193; continue _fun0005 }
 176:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0005_ip = 197; continue _fun0005;
 193:
            var1 = new Array(0);
 197:
            return var1;
 199:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function ICYMI(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var8 = var1.inNestedNavigator;
            var1 = _closure1_slot24;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var12 = _closure1_slot1;
            var31 = _closure1_slot2;
            var1 = 47;
            var1 = var31[var1];
            var1 = var12.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.height;
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var30 = _closure1_slot0;
            var1 = 48;
            var1 = var31[var1];
            var1 = var30.bind(var4)(var1);
            var1 = var1.ICYMIContext;
            var1 = var2.bind(var3)(var1);
            var35 = var1.width;
            var _closure2_slot0 = var35;
            var1 = 49;
            var1 = var31[var1];
            var1 = var12.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.top;
            var6 = 35;
            var1 = var31[var6];
            var2 = var30.bind(var4)(var1);
            var1 = var2.useICYMINewConversationSummaryExperiment;
            var11 = 'ICYMI';
            var1 = var1.bind(var2)(var11);
            var2 = var1.contentGenerationEnabled;
            var _closure2_slot1 = var2;
            var1 = 50;
            var7 = var31[var1];
            var14 = var30.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var13 = var13.bind(var14)(var9, var7);
            var _closure2_slot2 = var13;
            var14 = _closure1_slot5;
            var9 = var14.useState;
            var7 = false;
            var9 = var9.bind(var14)(var7);
            var7 = _closure1_slot4;
            var23 = 2;
            var7 = var7.bind(var4)(var9, var23);
            var26 = 0;
            var32 = var7[var26];
            var _closure2_slot3 = var32;
            var16 = 1;
            var7 = var7[var16];
            var _closure2_slot4 = var7;
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var9 = new Array(1);
            var9[0] = var32;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
 10:
                    var3 = _closure1_slot15;
                    var2 = var3.hasOpenedEnoughTimes;
                    var1 = var2.bind(var3)();
 29:
                    if(!var1) { _fun0007_ip = 112; continue _fun0007 }
 32:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 22;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 24;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 51;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var6)(var2, var1);
                    var2 = 'ICYMIFeedbackSheet';
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var2, var1);
 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var14.bind(var15)(var7, var9);
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var9 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 52;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.startICYMIScreenRecordingFlow;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = new Array(0);
            var7 = var14.bind(var15)(var9, var7);
            var6 = var31[var6];
            var9 = var30.bind(var4)(var6);
            var7 = var9.useIsNotificationsTabMerged;
            var6 = {};
            var6['location'] = var11;
            var6 = var7.bind(var9)(var6);
            var22 = var6.enabled;
            var _closure2_slot5 = var22;
            var18 = 53;
            var6 = var31[var18];
            var7 = var30.bind(var4)(var6);
            var6 = var7.useIsFocused;
            var9 = var6.bind(var7)();
            var _closure2_slot6 = var9;
            var6 = 54;
            var6 = var31[var6];
            var7 = var12.bind(var4)(var6);
            var6 = {};
            var6['isFocused'] = var9;
            var6['mergedNotificationsEnabled'] = var22;
            var6 = var7.bind(var4)(var6);
            var21 = var6.displayUnreadMentionMessages;
            var _closure2_slot7 = var21;
            var14 = var6.newUnreadMentionMessages;
            var11 = _closure1_slot5;
            var7 = var11.useLayoutEffect;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 55;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackAppUIViewed;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = var7.bind(var11)(var6);
            var6 = 56;
            var6 = var31[var6];
            var11 = var30.bind(var4)(var6);
            var7 = var11.useGetDismissibleContent;
            var6 = 57;
            var6 = var31[var6];
            var6 = var30.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var15 = var6.ICYMI_ALPHA_UPSELL;
            var6 = new Array(1);
            var6[0] = var15;
            var7 = var7.bind(var11)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var7, var23);
            var19 = var6[var26];
            var _closure2_slot8 = var19;
            var17 = var6[var16];
            var _closure2_slot9 = var17;
            var6 = var31[var1];
            var15 = var30.bind(var4)(var6);
            var11 = var15.useStateFromStores;
            var6 = _closure1_slot13;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getGuildCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var11.bind(var15)(var7, var6);
            var _closure2_slot10 = var6;
            var15 = _closure1_slot5;
            var11 = var15.useEffect;
            var7 = new Array(3);
            var7[0] = var19;
            var7[1] = var17;
            var7[2] = var6;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 86; continue _fun0008 }
 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 30;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.pushICYMIInfoModal;
                    var4 = {};
                    var8 = _closure2_slot10;
                    var7 = 3;
                    var7 = var8 <= var7;
                    var4['extendedOnboarding'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot9;
                    var1 = _closure1_slot17;
                    var1 = var1.USER_DISMISS;
                    var1 = var2.bind(var3)(var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var15)(var6, var7);
            var6 = 58;
            var6 = var31[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.bind(var4)();
            var20 = var7.unreadItems;
            var _closure2_slot11 = var20;
            var6 = var7.readItems;
            var _closure2_slot12 = var6;
            var19 = var7.allUnreadItemsHydrated;
            var _closure2_slot13 = var19;
            var7 = var31[var1];
            var25 = var30.bind(var4)(var7);
            var17 = var25.useStateFromStores;
            var7 = _closure1_slot15;
            var15 = new Array(1);
            var15[0] = var7;
            var11 = function() {
                var2 = _closure1_slot15;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var11 = var17.bind(var25)(var15, var11, var7);
            var _closure2_slot14 = var11;
            var7 = var31[var1];
            var25 = var30.bind(var4)(var7);
            var17 = var25.useStateFromStores;
            var7 = _closure1_slot15;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure1_slot15;
                    var1 = var2.isFirstPageHydrated;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0009_ip = 35; continue _fun0009 }
 22:
                    var3 = _closure2_slot14;
                    var2 = 0;
                    var1 = var3 > var2;
 35:
                    var1 = !var1;
                    return var1;
                }
            };
            var15 = var17.bind(var25)(var15, var7);
            var _closure2_slot15 = var15;
            var7 = 59;
            var7 = var31[var7];
            var17 = var30.bind(var4)(var7);
            var7 = var17.useICYMIEmptyLoadingAnalytics;
            var7 = var7.bind(var17)(var15, var9);
            var27 = _closure1_slot5;
            var25 = var27.useEffect;
            var17 = new Array(1);
            var17[0] = var11;
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getLoadId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 75; continue _fun0010 }
 23:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.ICYMIAnalytics;
                    var2 = var3.trackFeedShown;
                    var1 = {};
                    var4 = 'gravity';
                    var1['homeSessionId'] = var4;
                    var1 = var2.bind(var3)(var1);
 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var25.bind(var27)(var7, var17);
            var7 = var31[var1];
            var28 = var30.bind(var4)(var7);
            var27 = var28.useStateFromStores;
            var7 = _closure1_slot15;
            var25 = new Array(1);
            var25[0] = var7;
            var17 = function() {
                var2 = _closure1_slot15;
                var1 = var2.isRefreshing;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var25 = var27.bind(var28)(var25, var17, var7);
            var _closure2_slot16 = var25;
            var27 = _closure1_slot5;
            var17 = var27.useState;
            var7 = new Array(0);
            var17 = var17.bind(var27)(var7);
            var7 = _closure1_slot4;
            var17 = var7.bind(var4)(var17, var23);
            var7 = var17[var26];
            var _closure2_slot17 = var7;
            var17 = var17[var16];
            var _closure2_slot18 = var17;
            var17 = var31[var1];
            var28 = var30.bind(var4)(var17);
            var27 = var28.useStateFromStoresObject;
            var17 = _closure1_slot15;
            var23 = new Array(1);
            var23[0] = var17;
            var17 = function() {
                var1 = {};
                var4 = _closure1_slot15;
                var3 = var4.getLoadId;
                var3 = var3.bind(var4)();
                var1['loadId'] = var3;
                var3 = _closure1_slot15;
                var2 = var3.lastScrollEvent;
                var2 = var2.bind(var3)();
                var1['lastScrollEventTimestamp'] = var2;
                return var1;
            };
            var23 = var27.bind(var28)(var23, var17);
            var17 = var23.loadId;
            var36 = var23.lastScrollEventTimestamp;
            var _closure2_slot19 = var36;
            var27 = var7.filter;
            var23 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var3 = _closure1_slot22;
                var2 = var3.has;
                var1 = var1.data;
                var1 = var1.kind;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var28 = var27.bind(var7)(var23);
            var27 = var28.map;
            var23 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var1 = var1.id;
                return var1;
            };
            var27 = var27.bind(var28)(var23);
            var23 = var27.pop;
            var29 = var23.bind(var27)();
            var _closure2_slot20 = var29;
            var23 = 60;
            var23 = var31[var23];
            var23 = var12.bind(var4)(var23);
            var34 = var23.bind(var4)(var29);
            var _closure2_slot21 = var34;
            var28 = _closure1_slot5;
            var27 = var28.useEffect;
            var23 = new Array(6);
            var23[0] = var25;
            var23[1] = var36;
            var23[2] = var34;
            var23[3] = var29;
            var23[4] = var17;
            var23[5] = var15;
            var17 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot16;
                    if(var2) { _fun0011_ip = 157; continue _fun0011 }
 13:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0011_ip = 157; continue _fun0011 }
 23:
                    var2 = _closure2_slot21;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0011_ip = 157; continue _fun0011 }
 36:
                    var2 = _closure2_slot20;
                    if(!(var3 != var2)) { _fun0011_ip = 157; continue _fun0011 }
 44:
                    var3 = _closure2_slot20;
                    var2 = _closure2_slot21;
                    if(!(var3 !== var2)) { _fun0011_ip = 157; continue _fun0011 }
 56:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var6 = var2.bind(var3)();
                    var1 = _closure2_slot19;
                    var3 = var6 - var1;
                    var2 = _closure1_slot21;
                    if(!(var3 > var2)) { _fun0011_ip = 157; continue _fun0011 }
 92:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 61;
                    var2 = var4[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.gravityScrollEvent;
                    var2 = var2.bind(var5)(var6);
                    var2 = _closure1_slot0;
                    var1 = 21;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ICYMIAnalytics;
                    var1 = var2.trackFeedFirstScrollStarted;
                    var1 = var1.bind(var2)();
 157:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var27.bind(var28)(var17, var23);
            var28 = _closure1_slot5;
            var27 = var28.useCallback;
            var23 = new Array(1);
            var23[0] = var11;
            var17 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.viewableItems;
                    var _closure3_slot0 = var6;
                    var1 = undefined;
                    var _closure3_slot1 = var1;
                    var4 = var6.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var1 = var1.data;
                        var2 = var1.kind;
                        var1 = 'end';
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2 = var4.bind(var6)(var2);
                    if(!var2) { _fun0012_ip = 56; continue _fun0012 }
 42:
                    var4 = _closure2_slot4;
                    var2 = true;
                    var2 = var4.bind(var1)(var2);
 56:
                    var2 = var6.length;
                    var7 = 0;
                    if(!(var7 !== var2)) { _fun0012_ip = 418; continue _fun0012 }
 70:
                    var4 = _closure2_slot18;
                    var4 = var4.bind(var1)(var6);
                    var4 = var6.length;
                    var11 = 1;
                    var4 = var4 - var11;
                    var5 = var6[var4];
                    var12 = null;
                    var8 = var12 == var5;
                    var4 = undefined;
                    if(var8) { _fun0012_ip = 114; continue _fun0012 }
 109:
                    var4 = var5.index;
 114:
                    var8 = var12 != var4;
                    var5 = 0;
                    if(!var8) { _fun0012_ip = 126; continue _fun0012 }
 123:
                    var5 = var4;
 126:
                    var4 = 10;
                    if(!(var5 > var4)) { _fun0012_ip = 160; continue _fun0012 }
 133:
                    var5 = _closure1_slot10;
                    var4 = var5.getState;
                    var5 = var4.bind(var5)();
                    var4 = var5.setICYMIScrolled;
                    var4 = var4.bind(var5)();
 160:
                    var10 = new Array(0);
                    _closure3_slot1 = var10;
                    var5 = var6.forEach;
                    var4 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = 0;
                            var2 = var3[var2];
                            var4 = var2.item;
                            var2 = var4.data;
                            var3 = var2.kind;
                            var2 = 'channelSummary';
                            if(!(var2 === var3)) { _fun0013_ip = 93; continue _fun0013 }
 38:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var1 = {};
                            var4 = var4.id;
                            var1['id'] = var4;
                            var4 = 'summary';
                            var1['type'] = var4;
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var1['timestamp'] = var4;
                            var1 = var2.bind(var3)(var1);
 93:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot33;
                    var8 = var5.bind(var1)(var6);
                    var5 = global;
                    var9 = var5.Date;
                    var5 = var9.now;
                    var5 = var5.bind(var9)();
                    var9 = var8.length;
                    var11 = var9 - var11;
                    var9 = 62;
                    if(!(var11 >= var7)) { _fun0012_ip = 315; continue _fun0012 }
 230:
                    var18 = var8[var11];
                    var13 = var5;
                    if(!(var12 != var18)) { _fun0012_ip = 305; continue _fun0012 }
 241:
                    var16 = var10.push;
                    var15 = {};
                    var14 = var18.id;
                    var15['id'] = var14;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var9];
                    var17 = var17.bind(var1)(var14);
                    var14 = var17.typeToString;
                    var14 = var14.bind(var17)(var18);
                    var15['type'] = var14;
                    var17 = parseFloat(var5);
                    var13 = var17 + 1;
                    var15['timestamp'] = var17;
                    var15 = var16.bind(var10)(var15);
 305:
                    var11 = var11 - 1;
                    var5 = var13;
                    if(var11 >= var7) { _fun0012_ip = 230; continue _fun0012 }
 315:
                    var5 = var10.length;
                    if(!(var5 > var7)) { _fun0012_ip = 358; continue _fun0012 }
 324:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 61;
                    var5 = var9[var5];
                    var9 = var7.bind(var1)(var5);
                    var7 = var9.ackGravityItems;
                    var5 = true;
                    var5 = var7.bind(var9)(var10, var5);
 358:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 21;
                    var4 = var7[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ICYMIAnalytics;
                    var4 = var5.trackItemShortImpression;
                    var7 = var8.map;
                    var3 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = var4.id;
                        var1['id'] = var2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 62;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var3 = var7.bind(var8)(var3);
                    var2 = _closure2_slot14;
                    var2 = var4.bind(var5)(var6, var3, var2);
 418:
                    return var1;
                }
            };
            var34 = var27.bind(var28)(var17, var23);
            var _closure2_slot22 = var34;
            var28 = _closure1_slot5;
            var27 = var28.useCallback;
            var23 = new Array(1);
            var23[0] = var11;
            var17 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.viewableItems;
                    var2 = var5.length;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0014_ip = 99; continue _fun0014 }
 20:
                    var2 = _closure1_slot33;
                    var3 = undefined;
                    var6 = var2.bind(var3)(var5);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 21;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var4 = var1.ICYMIAnalytics;
                    var3 = var4.trackItemLongImpression;
                    var2 = var6.map;
                    var1 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = var4.id;
                        var1['id'] = var2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 62;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var2 = var2.bind(var6)(var1);
                    var1 = _closure2_slot14;
                    var1 = var3.bind(var4)(var5, var2, var1);
 99:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = var27.bind(var28)(var17, var23);
            var _closure2_slot23 = var29;
            var28 = _closure1_slot5;
            var27 = var28.useCallback;
            var23 = function(arg1) {
                var1 = arg1;
                var7 = var1.viewableItems;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 61;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.setVisibleItems;
                var6 = var7.filter;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.item;
                    var3 = _closure1_slot22;
                    var2 = var3.has;
                    var1 = var1.data;
                    var1 = var1.kind;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var2 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.item;
                        var2 = var1.index;
                        var1 = {};
                        var4 = var3.id;
                        var1['itemId'] = var4;
                        var5 = _closure1_slot32;
                        var4 = undefined;
                        var4 = var5.bind(var4)(var3);
                        var1['itemType'] = var4;
                        var4 = 'list';
                        var1['triggerType'] = var4;
                        var1['itemFeedIndex'] = var2;
                        var5 = var3.score;
                        var2 = null;
                        var6 = var2 != var5;
                        var4 = null;
                        if(!var6) { _fun0015_ip = 78; continue _fun0015 }
 75:
                        var4 = var5;
 78:
                        var1['itemScore'] = var4;
                        var3 = var3.channelType;
                        var4 = var2 != var3;
                        var2 = null;
                        if(!var4) { _fun0015_ip = 101; continue _fun0015 }
 98:
                        var2 = var3;
 101:
                        var1['itemChannelType'] = var2;
                        var2 = false;
                        var1['isInitiallyVisible'] = var2;
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var17 = new Array(0);
            var17 = var27.bind(var28)(var23, var17);
            var _closure2_slot24 = var17;
            var28 = _closure1_slot5;
            var27 = var28.useMemo;
            var23 = new Array(3);
            var23[0] = var34;
            var23[1] = var29;
            var23[2] = var17;
            var17 = function() {
                var2 = {};
                var1 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
                var2['viewabilityConfig'] = var1;
                var1 = _closure2_slot22;
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(3);
                var1[0] = var2;
                var2 = {};
                var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
                var2['viewabilityConfig'] = var4;
                var4 = _closure2_slot23;
                var2['onViewableItemsChanged'] = var4;
                var1[1] = var2;
                var2 = {};
                var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 50};
                var2['viewabilityConfig'] = var4;
                var3 = _closure2_slot24;
                var2['onViewableItemsChanged'] = var3;
                var1[2] = var2;
                return var1;
            };
            var17 = var27.bind(var28)(var17, var23);
            var28 = _closure1_slot5;
            var27 = var28.useRef;
            var23 = null;
            var29 = var27.bind(var28)(var23);
            var _closure2_slot25 = var29;
            var28 = _closure1_slot5;
            var27 = var28.useRef;
            var23 = {};
            var34 = function scrollToTop() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = _closure2_slot25;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0016_ip = 50; continue _fun0016 }
 18:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var5 = 0;
                    var1['offset'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var23['scrollToTop'] = var34;
            var27 = var27.bind(var28)(var23);
            var _closure2_slot26 = var27;
            var18 = var31[var18];
            var23 = var30.bind(var4)(var18);
            var18 = var23.useScrollToTop;
            var18 = var18.bind(var23)(var27);
            var18 = var31[var1];
            var28 = var30.bind(var4)(var18);
            var27 = var28.useStateFromStores;
            var18 = _closure1_slot14;
            var23 = new Array(1);
            var23[0] = var18;
            var18 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getDoubleTapBehavior;
                var1 = var1.bind(var2)();
                return var1;
            };
            var34 = var27.bind(var28)(var23, var18);
            var _closure2_slot27 = var34;
            var18 = 26;
            var18 = var31[var18];
            var23 = var30.bind(var4)(var18);
            var18 = var23.useNavigation;
            var18 = var18.bind(var23)();
            var _closure2_slot28 = var18;
            var28 = _closure1_slot5;
            var27 = var28.useEffect;
            var23 = new Array(4);
            var23[0] = var34;
            var23[1] = var22;
            var23[2] = var18;
            var23[3] = var13;
            var18 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0017_ip = 57; continue _fun0017 }
 12:
                    var5 = _closure2_slot27;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 62;
                    var4 = var4[var7];
                    var6 = undefined;
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.GravityICYMIDoubleTapBehavior;
                    var4 = var4.DEFAULT;
                    if(!(var5 === var4)) { _fun0017_ip = 83; continue _fun0017 }
 57:
                    var5 = _closure2_slot26;
                    var4 = {};
                    var8 = function scrollToTop() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var1 = _closure2_slot25;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0018_ip = 50; continue _fun0018 }
 18:
                            var2 = var3.scrollToOffset;
                            var1 = {};
                            var5 = 0;
                            var1['offset'] = var5;
                            var4 = _closure2_slot2;
                            var4 = !var4;
                            var1['animated'] = var4;
                            var1 = var2.bind(var3)(var1);
 50:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4['scrollToTop'] = var8;
                    var5['current'] = var4;
                    _fun0017_ip = 170; continue _fun0017;
 83:
                    var4 = _closure2_slot27;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.GravityICYMIDoubleTapBehavior;
                    var2 = var2.NOTIFICATIONS;
                    if(!(var4 !== var2)) { _fun0017_ip = 146; continue _fun0017 }
 120:
                    var4 = _closure2_slot26;
                    var2 = {};
                    var5 = function scrollToTop() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 63;
                        var4 = var2[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 24;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 64;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var11 = var4.bind(var1)(var3, var2);
                        var4 = {};
                        var2 = 'modal';
                        var4['presentation'] = var2;
                        var10 = {};
                        var9 = 'for-later-modal';
                        var12 = var7;
                        var8 = var4;
                        var2 = var12[var6](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2['scrollToTop'] = var5;
                    var4['current'] = var2;
                    _fun0017_ip = 170; continue _fun0017;
 146:
                    var2 = _closure2_slot26;
                    var1 = {};
                    var3 = function scrollToTop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var5 = var2.ICYMIAnalytics;
                        var4 = var5.trackItemInteraction;
                        var3 = 'icymi_button';
                        var2 = 'press_notification_button';
                        var2 = var4.bind(var5)(var3, var3, var2);
                        var4 = _closure2_slot28;
                        var3 = var4.push;
                        var2 = 'notifications-screen';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['scrollToTop'] = var3;
                    var2['current'] = var1;
 170:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var27.bind(var28)(var18, var23);
            var27 = _closure1_slot5;
            var23 = var27.useCallback;
            var18 = new Array(2);
            var18[0] = var29;
            var18[1] = var13;
            var13 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = _closure2_slot25;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0019_ip = 50; continue _fun0019 }
 18:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var5 = 0;
                    var1['offset'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var23.bind(var27)(var13, var18);
            var _closure2_slot29 = var13;
            var23 = _closure1_slot5;
            var18 = var23.useEffect;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 61;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setTabFocused;
                var2 = _closure2_slot6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var18.bind(var23)(var9, var13);
            var23 = _closure1_slot5;
            var18 = var23.useEffect;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 61;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openICYMITab;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = new Array(0);
            var9 = var18.bind(var23)(var13, var9);
            var9 = 65;
            var9 = var31[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var28 = var9.showDot;
            var _closure2_slot30 = var28;
            var9 = var31[var1];
            var27 = var30.bind(var4)(var9);
            var23 = var27.useStateFromStores;
            var9 = _closure1_slot15;
            var18 = new Array(1);
            var18[0] = var9;
            var13 = function() {
                var2 = _closure1_slot15;
                var1 = var2.notificationItem;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = new Array(0);
            var23 = var23.bind(var27)(var18, var13, var9);
            var _closure2_slot31 = var23;
            var27 = _closure1_slot5;
            var18 = var27.useCallback;
            var13 = _closure1_slot3;
            var9 = function* () {
                var1 = function* anon_0_() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0020_ip = 254; continue _fun0020 }
 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var2 = var4[var2];
                        var5 = undefined;
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.ICYMIAnalytics;
                        var3 = var4.trackFeedShown;
                        var2 = {};
                        var8 = _closure2_slot30;
                        var7 = 'NoDotShown';
                        if(!var8) { _fun0020_ip = 71; continue _fun0020 }
 65:
                        var7 = 'DotShown';
 71:
                        var2['variant'] = var7;
                        var7 = 'gravity_refresh';
                        var2['homeSessionId'] = var7;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 61;
                        var2 = var2[var8];
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.fetchDehydrated;
                        var2 = {};
                        var7 = true;
                        var2['isReloading'] = var7;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=135);
 133:
                        return var2;
 135:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0020_ip = 251; continue _fun0020 }
 141:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.reloadICYMITab;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address=172);
 170:
                        return var3;
 172:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0020_ip = 248; continue _fun0020 }
 178:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.getGuildChannelScores;
                        var4 = var4.bind(var7)();
                        SaveGenerator(address=209);
 207:
                        return var4;
 209:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0020_ip = 245; continue _fun0020 }
 215:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.getRecommendedGuilds;
                        var6 = var6.bind(var7)();
                        return var5;
 245:
                        return var4;
 248:
                        return var3;
 251:
                        return var2;
 254:
                        return var1;
                    }
                };
                return var1;
            };
            var13 = var13.bind(var4)(var9);
            var9 = new Array(1);
            var9[0] = var28;
            var28 = var18.bind(var27)(var13, var9);
            var _closure2_slot32 = var28;
            var18 = _closure1_slot5;
            var13 = var18.useMemo;
            var9 = new Array(7);
            var9[0] = var15;
            var9[1] = var23;
            var9[2] = var22;
            var9[3] = var21;
            var9[4] = var20;
            var9[5] = var19;
            var9[6] = var6;
            var6 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot15;
                    if(!var4) { _fun0021_ip = 30; continue _fun0021 }
 20:
                    var6 = _closure2_slot31;
                    var5 = null;
                    var4 = var5 != var6;
 30:
                    if(!var4) { _fun0021_ip = 83; continue _fun0021 }
 33:
                    var5 = _closure2_slot31;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 62;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ICYMIItemTypes;
                    var5 = var5.CUSTOM_STATUS;
                    var4 = var6 === var5;
 83:
                    if(!var4) { _fun0021_ip = 216; continue _fun0021 }
 89:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure2_slot31;
                    var7 = var6.id;
                    var4['id'] = var7;
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var4['timestamp'] = var7;
                    var7 = {};
                    var8 = 'contentInventory';
                    var7['kind'] = var8;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 44;
                    var9 = var9[var8];
                    var8 = undefined;
                    var9 = var10.bind(var8)(var9);
                    var8 = var9.customStatusToContentInventoryEntry;
                    var8 = var8.bind(var9)(var6);
                    var8 = var8.activity;
                    var7['content'] = var8;
                    var4['data'] = var7;
                    var6 = var6.score;
                    var4['score'] = var6;
                    var6 = true;
                    var4['unread'] = var6;
                    var4 = var5.bind(var2)(var4);
 216:
                    var4 = _closure2_slot15;
                    if(var4) { _fun0021_ip = 442; continue _fun0021 }
 226:
                    var4 = _closure2_slot5;
                    if(!var4) { _fun0021_ip = 248; continue _fun0021 }
 233:
                    var5 = _closure2_slot7;
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
 248:
                    if(!var4) { _fun0021_ip = 338; continue _fun0021 }
 251:
                    var5 = var2.push;
                    var4 = {'id': 'mentions', 'timestamp': 0, 'unread': true};
                    var7 = 'mentions';
                    var6 = {};
                    var6['kind'] = var7;
                    var7 = _closure2_slot7;
                    var6['messages'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
                    var5 = var2.push;
                    var4 = {'id': 'icymi_header', 'timestamp': 0, 'unread': false};
                    var6 = {};
                    var7 = 'icymiHeader';
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 338:
                    var6 = _closure2_slot11;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure1_slot26;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var4);
                            if(var2) { _fun0022_ip = 37; continue _fun0022 }
 20:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 37:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot13;
                    if(!var4) { _fun0021_ip = 404; continue _fun0021 }
 366:
                    var5 = var2.push;
                    var4 = {'id': 'end', 'timestamp': 0, 'unread': false};
                    var7 = 'end';
                    var6 = {};
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 404:
                    var4 = _closure2_slot12;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0021_ip = 480; continue _fun0021 }
 419:
                    var4 = _closure2_slot12;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure1_slot26;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var4);
                            if(var2) { _fun0023_ip = 37; continue _fun0023 }
 20:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 37:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    _fun0021_ip = 480; continue _fun0021;
 442:
                    var3 = var2.push;
                    var1 = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    var5 = 'loading';
                    var4 = {};
                    var4['kind'] = var5;
                    var1['data'] = var4;
                    var1 = var3.bind(var2)(var1);
 480:
                    var1 = {};
                    var1['data'] = var2;
                    var2 = new Array(0);
                    var1['stickyHeaderIndices'] = var2;
                    return var1;
                }
            };
            var6 = var13.bind(var18)(var6, var9);
            var21 = var6.data;
            var _closure2_slot33 = var21;
            var18 = var6.stickyHeaderIndices;
            var3 = var5 - var3;
            var22 = 32;
            var6 = var3 - var22;
            var3 = 66;
            var3 = var31[var3];
            var5 = var30.bind(var4)(var3);
            var3 = var5.useMainTabsHeight;
            var5 = var3.bind(var5)();
            var3 = 24;
            var3 = var6 - var3;
            var36 = var3 - var5;
            var _closure2_slot34 = var36;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var32;
            var3[2] = var2;
            var2 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'generatedCandidate';
                    if(!(var1 !== var2)) { _fun0024_ip = 979; continue _fun0024 }
 37:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'channelSummary';
                    if(!(var1 !== var2)) { _fun0024_ip = 924; continue _fun0024 }
 60:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'message';
                    if(!(var1 !== var2)) { _fun0024_ip = 681; continue _fun0024 }
 81:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'contentInventory';
                    if(!(var1 !== var2)) { _fun0024_ip = 590; continue _fun0024 }
 104:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'loading';
                    if(!(var1 !== var2)) { _fun0024_ip = 545; continue _fun0024 }
 125:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'end';
                    if(!(var1 !== var2)) { _fun0024_ip = 494; continue _fun0024 }
 146:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'guildEvent';
                    if(!(var1 !== var2)) { _fun0024_ip = 436; continue _fun0024 }
 167:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'recommendedGuilds';
                    if(!(var1 !== var2)) { _fun0024_ip = 388; continue _fun0024 }
 190:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'icymiHeader';
                    if(!(var1 !== var2)) { _fun0024_ip = 349; continue _fun0024 }
 213:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'forumThread';
                    if(!(var1 === var2)) { _fun0024_ip = 345; continue _fun0024 }
 233:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 77;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ICYMIForumThreadRow;
                    var1 = {};
                    var5 = var6.data;
                    var5 = var5.message;
                    var1['message'] = var5;
                    var5 = var6.data;
                    var5 = var5.threadChannel;
                    var1['channel'] = var5;
                    var9 = _closure2_slot17;
                    var7 = var9.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var7.bind(var9)(var5);
                    var5 = null;
                    var5 = var5 != var7;
                    var1['visible'] = var5;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0024_ip = 1044; continue _fun0024;
 345:
                    var1 = null;
                    return var1;
 349:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 76;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 388:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 75;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ICYMIServerRecommendationRow;
                    var1 = {};
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0024_ip = 1044; continue _fun0024;
 436:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 74;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = var6.data;
                    var7 = var7.eventId;
                    var1['eventId'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0024_ip = 1044; continue _fun0024;
 494:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 73;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['visible'] = var7;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 545:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 72;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ICYMILoading;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 590:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 71;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = _closure2_slot17;
                    var9 = var10.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var9.bind(var10)(var7);
                    var7 = null;
                    var7 = var7 != var9;
                    var1['visible'] = var7;
                    var7 = var6.data;
                    var7 = var7.content;
                    var1['content'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0024_ip = 1044; continue _fun0024;
 681:
                    var3 = var6.channelType;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 45;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    if(!(var3 !== var1)) { _fun0024_ip = 827; continue _fun0024 }
 728:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 70;
                    var1 = var9[var1];
                    var3 = var3.bind(var7)(var1);
                    var1 = {};
                    var9 = var6.data;
                    var9 = var9.message;
                    var1['message'] = var9;
                    var9 = var6.data;
                    var9 = var9.messageContext;
                    var1['messageContext'] = var9;
                    var11 = _closure2_slot17;
                    var10 = var11.find;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var10 = var10.bind(var11)(var9);
                    var9 = null;
                    var9 = var9 != var10;
                    var1['visible'] = var9;
                    var1 = var4.bind(var7)(var3, var1);
                    _fun0024_ip = 919; continue _fun0024;
 827:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 69;
                    var2 = var9[var2];
                    var3 = var3.bind(var7)(var2);
                    var2 = {};
                    var9 = var6.unread;
                    var2['unread'] = var9;
                    var9 = var6.data;
                    var9 = var9.message;
                    var2['message'] = var9;
                    var10 = _closure2_slot17;
                    var9 = var10.find;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var9.bind(var10)(var8);
                    var8 = null;
                    var8 = var8 != var9;
                    var2['visible'] = var8;
                    var1 = var4.bind(var7)(var3, var2);
 919:
                    var5 = var1;
                    _fun0024_ip = 1044; continue _fun0024;
 924:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 68;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = var6.data;
                    var7 = var7.topic;
                    var1['topic'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0024_ip = 1044; continue _fun0024;
 979:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0024_ip = 993; continue _fun0024 }
 989:
                    var1 = null;
                    return var1;
 993:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 67;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = var6.data;
                    var7 = var7.item;
                    var1['item'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
 1044:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 78;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CardHeightMeasurer;
                    var1 = {};
                    var6 = var6.id;
                    var1['itemId'] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var20 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = function() {
                var1 = {};
                var2 = 'transparent';
                var1['backgroundColor'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var23 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var36;
            var2 = var21.length;
            var3[1] = var2;
            var3[2] = var35;
            var2 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var1 = _closure2_slot33;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0025_ip = 44; continue _fun0025 }
 23:
                    var2 = {};
                    var4 = _closure2_slot34;
                    var2['height'] = var4;
                    var3 = _closure2_slot0;
                    var2['width'] = var3;
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var19 = var5.bind(var6)(var2, var3);
            var2 = 79;
            var2 = var31[var2];
            var3 = var30.bind(var4)(var2);
            var2 = var3.useClientThemesOverride;
            var13 = var2.bind(var3)();
            var1 = var31[var1];
            var6 = var30.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var2 = _closure1_slot15;
                var1 = var2.hasNewContent;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var27 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var24.containerInPanels;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var24.containerBackground;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot25;
            var5 = {};
            var5['numUnreadMentions'] = var26;
            var5['inNestedNavigator'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot19;
            var7 = _closure1_slot6;
            var6 = {};
            var34 = var24.flashListWrapper;
            var9 = new Array(3);
            var9[0] = var34;
            var34 = {};
            var34['height'] = var36;
            var34['width'] = var35;
            var35 = 'auto';
            var34['marginHorizontal'] = var35;
            var9[1] = var34;
            var9[2] = var13;
            var6['style'] = var9;
            var13 = _closure1_slot18;
            var9 = 80;
            var9 = var31[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var33 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var5 = var2.ICYMIAnalytics;
                var4 = var5.trackItemInteraction;
                var3 = 'refresh_button';
                var2 = 'press_refresh_button';
                var2 = var4.bind(var5)(var3, var3, var2);
                var3 = _closure2_slot32;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot29;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var33;
            var9['isRefreshing'] = var25;
            var9['newUnreadMentions'] = var14;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var14 = _closure1_slot18;
            var12 = 81;
            var12 = var31[var12];
            var12 = var30.bind(var4)(var12);
            var13 = var12.FlashList;
            var12 = {};
            var12['ref'] = var29;
            var29 = !var15;
            var12['scrollEnabled'] = var29;
            var29 = {};
            var29['endVisible'] = var32;
            var12['extraData'] = var29;
            var12['contentContainerStyle'] = var23;
            var23 = var31[var22];
            var23 = var30.bind(var4)(var23);
            var29 = var23.intl;
            var23 = var29.string;
            var22 = var31[var22];
            var22 = var30.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.OIgYlZ;
            var22 = var23.bind(var29)(var22);
            var12['accessibilityLabel'] = var22;
            var12['data'] = var21;
            var12['refreshing'] = var25;
            var23 = _closure1_slot18;
            var22 = _closure1_slot7;
            var21 = {};
            var21['onRefresh'] = var28;
            var21['refreshing'] = var25;
            var24 = var24.refreshing;
            var24 = var24.color;
            var21['tintColor'] = var24;
            var24 = {};
            var25 = var16;
            if(!var27) { _fun0006_ip = 2215; continue _fun0006 }
 2213:
            var25 = 0;
 2215:
            var24['opacity'] = var25;
            var21['style'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var12['refreshControl'] = var21;
            var21 = 3;
            var12['onEndReachedThreshold'] = var21;
            var21 = _closure1_slot31;
            var12['onEndReached'] = var21;
            var21 = _closure1_slot35;
            var12['keyExtractor'] = var21;
            var12['renderItem'] = var20;
            var20 = 200;
            var12['estimatedItemSize'] = var20;
            var12['estimatedListSize'] = var19;
            var19 = _closure1_slot32;
            var12['getItemType'] = var19;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 82;
            var19 = var21[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isAndroid;
            var19 = var19.bind(var20)();
            var19 = 100;
            var12['drawDistance'] = var19;
            var12['stickyHeaderIndices'] = var18;
            var12['viewabilityConfigCallbackPairs'] = var17;
            if(var15) { _fun0006_ip = 2340; continue _fun0006 }
 2337:
            var16 = var11;
 2340:
            var11 = global;
            var11 = var11.HermesInternal;
            var15 = var11.concat;
            var11 = 'Version-';
            var11 = var15.bind(var11)(var16);
            var11 = var14.bind(var4)(var13, var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot18;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 83;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TTIFirstContentfulPaint;
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot35 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var8 = var6[var7];
    var7 = metroImportAll;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.View;
    var _closure1_slot6 = var9;
    var7 = var7.RefreshControl;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useScreenRecordingStore;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.GuildNSFWContentLevel;
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot17 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot18 = var9;
    var9 = var7.jsxs;
    var _closure1_slot19 = var9;
    var7 = var7.Fragment;
    var _closure1_slot20 = var7;
    var9 = 15;
    var7 = var6[var9];
    var7 = var10.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var9 * var7;
    var _closure1_slot21 = var7;
    var9 = var4.Set;
    var4 = var9.prototype;
    var7 = Object.create(var4, {constructor: {value: var9}});
    var13 = ['end', 'loading', 'mentions', 'icymiHeader', 'recommendedGuilds'];
    var14 = var7;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot22 = var4;
    var4 = 16;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 17;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_TERTIARY;
        var2['backgroundColor'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_8;
        var2['paddingHorizontal'] = var3;
        var3 = 'hidden';
        var2['overflow'] = var3;
        var3 = 1;
        var2['flex'] = var3;
        var3 = arg1;
        var2['paddingTop'] = var3;
        var1['containerOuterTablet'] = var2;
        return var1;
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot23 = var4;
    var4 = 18;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createICYMIStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
        var1['container'] = var2;
        var2 = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1, 'overflow': 'hidden'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 17;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var2['borderTopLeftRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var2['borderTopRightRadius'] = var7;
        var1['containerInPanels'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_PRIMARY;
        var2['backgroundColor'] = var7;
        var1['containerBackground'] = var2;
        var2 = {'backgroundColor': null, 'minHeight': 2, 'flex': 1};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_PRIMARY;
        var2['backgroundColor'] = var7;
        var1['flashListWrapper'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.INTERACTIVE_NORMAL;
        var2['color'] = var7;
        var1['refreshing'] = var2;
        var2 = {'backgroundColor': null, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_PRIMARY;
        var2['backgroundColor'] = var7;
        var1['header'] = var2;
        var7 = 'center';
        var2 = {'flexDirection': 'row', 'alignItems': 'center'};
        var1['headerLeft'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['marginRight'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_32;
        var2['height'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_32;
        var2['width'] = var8;
        var2['alignItems'] = var7;
        var2['justifyContent'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var1['headerClose'] = var2;
        var2 = {'height': 56, 'marginHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var7 = arg1;
        var7 = var7.margin;
        var2['marginHorizontal'] = var7;
        var1['headerTitle'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
        var1['headerText'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['gap'] = var7;
        var1['headerActions'] = var2;
        var2 = {'height': 18, 'width': 18};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var2['borderRadius'] = var7;
        var1['notificationBadge'] = var2;
        var2 = {'flex': 1, 'justifyContent': 'center'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_96;
        var2['paddingTop'] = var7;
        var1['loading'] = var2;
        var2 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': null, 'height': 1};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_MODIFIER_ACCENT;
        var2['backgroundColor'] = var3;
        var1['headerBorder'] = var2;
        return var1;
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot24 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var19 = var1.numUnreadMentions;
            var20 = var1.inNestedNavigator;
            var1 = _closure1_slot24;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 34;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var14 = var1.bind(var4)();
            var12 = _closure1_slot0;
            var1 = 35;
            var1 = var13[var1];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useIsNotificationsTabMerged;
            var1 = {};
            var5 = 'ICYMIHeader';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var15 = var1.enabled;
            var1 = 36;
            var1 = var13[var1];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useYouBarBackButtonBadgeEnabled;
            var1 = 'ICYMI';
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot19;
            var1 = 37;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = !var14;
            var1['top'] = var5;
            var5 = var9.header;
            var1['style'] = var5;
            var8 = _closure1_slot18;
            var5 = 38;
            var5 = var13[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            var25 = true;
            var10 = {};
            var11 = 39;
            var16 = var13[var11];
            var16 = var12.bind(var4)(var16);
            var16 = var16.OverlayOpacity;
            var16 = var16.LEVEL_7;
            var10['dark'] = var16;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.OverlayOpacity;
            var11 = var11.LEVEL_8;
            var10['light'] = var11;
            var5['mixAmount'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var10 = _closure1_slot19;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var9.headerTitle;
            var7['style'] = var11;
            var13 = _closure1_slot19;
            var12 = _closure1_slot6;
            var11 = {};
            var16 = var9.headerLeft;
            var11['style'] = var16;
            if(var14) { _fun0026_ip = 322; continue _fun0026 }
 314:
            var16 = null;
            if(!var20) { _fun0026_ip = 585; continue _fun0026 }
 322:
            var18 = _closure1_slot18;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = 33;
            var14 = var24[var14];
            var14 = var23.bind(var4)(var14);
            var17 = var14.PressableOpacity;
            var14 = {};
            var22 = var9.headerClose;
            var14['style'] = var22;
            var22 = 32;
            var26 = var24[var22];
            var26 = var23.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.13/7kZ;
            var22 = var26.bind(var27)(var22);
            var14['accessibilityLabel'] = var22;
            var22 = 40;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.goBack;
            var14['onPress'] = var22;
            var24 = _closure1_slot18;
            if(var20) { _fun0026_ip = 490; continue _fun0026 }
 444:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 43;
            var20 = var23[var20];
            var20 = var22.bind(var4)(var20);
            var22 = var20.XSmallIcon;
            var20 = {};
            var23 = 'interactive-normal';
            var20['color'] = var23;
            var20 = var24.bind(var4)(var22, var20);
            _fun0026_ip = 575; continue _fun0026;
 490:
            if(var21) { _fun0026_ip = 539; continue _fun0026 }
 493:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 42;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.ArrowLargeLeftIcon;
            var21 = {};
            var23 = 'interactive-normal';
            var21['color'] = var23;
            var21 = var24.bind(var4)(var22, var21);
            _fun0026_ip = 572; continue _fun0026;
 539:
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 41;
            var22 = var26[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var22['includeNotificationsCount'] = var25;
            var21 = var24.bind(var4)(var23, var22);
 572:
            var20 = var21;
 575:
            var14['children'] = var20;
            var16 = var18.bind(var4)(var17, var14);
 585:
            var14 = new Array(2);
            var14[0] = var16;
            var18 = _closure1_slot18;
            var17 = _closure1_slot30;
            var16 = {};
            var16['isPressable'] = var15;
            var16 = var18.bind(var4)(var17, var16);
            var14[1] = var16;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot19;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = var9.headerActions;
            var12['style'] = var16;
            var18 = _closure1_slot18;
            if(var15) { _fun0026_ip = 677; continue _fun0026 }
 663:
            var16 = _closure1_slot29;
            var15 = {};
            var16 = var18.bind(var4)(var16, var15);
            _fun0026_ip = 694; continue _fun0026;
 677:
            var17 = _closure1_slot28;
            var15 = {};
            var15['numUnreadMentions'] = var19;
            var16 = var18.bind(var4)(var17, var15);
 694:
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot18;
            var17 = _closure1_slot27;
            var16 = {};
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot18;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.headerBorder;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot25 = var4;
    var4 = 87;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMITab(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var2 = arg1;
            var2 = var2.route;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 84;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var3 = 50;
            var3 = var6[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var8.bind(var9)(var7, var3);
            var3 = 34;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var11 = var3.bind(var4)();
            var _closure2_slot0 = var11;
            var3 = 49;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.top;
            var5 = null;
            var6 = var5 == var2;
            var15 = undefined;
            if(var6) { _fun0027_ip = 163; continue _fun0027 }
 142:
            var2 = var2.params;
            var5 = var5 == var2;
            var15 = undefined;
            if(var5) { _fun0027_ip = 163; continue _fun0027 }
 157:
            var15 = var2.inNestedNavigator;
 163:
            var2 = _closure1_slot23;
            var6 = var2.bind(var4)(var3);
            _closure2_slot1 = var6;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var11;
            var6 = var6.containerOuterTablet;
            var2[1] = var6;
            var1 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(!var3) { _fun0028_ip = 22; continue _fun0028 }
 12:
                    var2 = _closure2_slot1;
                    var1 = var2.containerOuterTablet;
 22:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            if(var11) { _fun0027_ip = 231; continue _fun0027 }
 219:
            var1 = _closure1_slot5;
            var10 = var1.Fragment;
            _fun0027_ip = 235; continue _fun0027;
 231:
            var10 = _closure1_slot6;
 235:
            var3 = _closure1_slot18;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 85;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot18;
            var6 = _closure1_slot0;
            var5 = 48;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ICYMIContextProvider;
            var5 = {};
            var9 = _closure1_slot19;
            var8 = {};
            if(var11) { _fun0027_ip = 302; continue _fun0027 }
 298:
            var11 = {};
            _fun0027_ip = 311; continue _fun0027;
 302:
            var12 = {};
            var12['style'] = var13;
            var11 = var12;
 311:
            var23 = var8;
            var22 = var11;
            var11 = copyDataProperties(var23, var22);
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 38;
            var11 = var18[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var14 = true;
            var11['absolute'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var12 = new Array(2);
            var12[0] = var11;
            var14 = _closure1_slot18;
            var13 = _closure1_slot0;
            var11 = 86;
            var11 = var18[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.ThemeContextProvider;
            var11 = {};
            var11['gradient'] = var17;
            var18 = _closure1_slot18;
            var17 = _closure1_slot34;
            var16 = {};
            var16['inNestedNavigator'] = var15;
            var15 = global;
            var15 = var15.HermesInternal;
            var19 = var15.concat;
            var15 = '';
            var15 = var19.bind(var15)(var20);
            var15 = var18.bind(var4)(var17, var16, var15);
            var11['children'] = var15;
            var11 = var14.bind(var4)(var13, var11);
            var12[1] = var11;
            var11 = 'children';
            var8[var11] = var12;
            var8 = var9.bind(var4)(var10, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ICYMITab'] = var2;
    return var1;
})();