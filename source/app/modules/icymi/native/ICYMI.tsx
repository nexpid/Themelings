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
        var5 = 25;
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
            var2 = 26;
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
    var _closure1_slot28 = var1;
    var1 = function ICYMIHeaderTextWrapper() {
        var2 = _closure1_slot24;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var7 = _closure1_slot5;
        var5 = var7.useMemo;
        var3 = function() {
            var4 = _closure1_slot20;
            var3 = _closure1_slot19;
            var2 = {};
            var10 = _closure1_slot18;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 27;
            var5 = var13[var6];
            var1 = undefined;
            var5 = var12.bind(var1)(var5);
            var8 = var5.Text;
            var5 = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var9 = 28;
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
        var2 = new Array(0);
        var5 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot18;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var6.headerText;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function handleEndReached() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 39;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hydrateNextPage;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function itemToType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var1 = var6.data;
            var5 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var5)) { _fun0002_ip = 342; continue _fun0002 }
 24:
            var2 = 'loading';
            if(!(var2 !== var5)) { _fun0002_ip = 340; continue _fun0002 }
 35:
            var4 = 'message';
            if(!(var4 !== var5)) { _fun0002_ip = 243; continue _fun0002 }
 46:
            var3 = 'channelSummary';
            if(!(var3 !== var5)) { _fun0002_ip = 237; continue _fun0002 }
 59:
            var3 = 'guildEvent';
            if(!(var3 !== var5)) { _fun0002_ip = 229; continue _fun0002 }
 70:
            var3 = 'contentInventory';
            if(!(var3 !== var5)) { _fun0002_ip = 158; continue _fun0002 }
 80:
            var3 = 'recommendedGuilds';
            if(!(var3 !== var5)) { _fun0002_ip = 150; continue _fun0002 }
 90:
            var3 = 'forumThread';
            if(!(var3 !== var5)) { _fun0002_ip = 142; continue _fun0002 }
 100:
            var3 = 'generatedCandidate';
            if(!(var3 !== var5)) { _fun0002_ip = 134; continue _fun0002 }
 110:
            var3 = 'icymiHeader';
            if(!(var3 !== var5)) { _fun0002_ip = 126; continue _fun0002 }
 120:
            var3 = 'unknown';
            return var3;
 126:
            var3 = 'icymi_header';
            return var3;
 134:
            var3 = 'generated_candidate';
            return var3;
 142:
            var3 = 'forum_thread';
            return var3;
 150:
            var3 = 'recommended_guilds';
            return var3;
 158:
            var3 = var6.data;
            var3 = var3.content;
            var7 = var3.content_type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 41;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var5);
            var3 = var3.ContentInventoryEntryType;
            var5 = var3.CUSTOM_STATUS;
            var3 = 'hotwheels_gaming_activity';
            if(!(var7 === var5)) { _fun0002_ip = 227; continue _fun0002 }
 221:
            var3 = 'hotwheels_custom_status';
 227:
            return var3;
 229:
            var3 = 'guild_event';
            return var3;
 237:
            var3 = 'summary';
            return var3;
 243:
            var8 = var6.channelType;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 40;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var7 = var3.GUILD_ANNOUNCEMENT;
            var3 = 'announcement';
            if(!(var8 !== var7)) { _fun0002_ip = 338; continue _fun0002 }
 294:
            var6 = var6.data;
            var7 = var6.messageContext;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0002_ip = 322; continue _fun0002 }
 316:
            var5 = var7.external_content_application_id;
 322:
            var5 = var6 != var5;
            if(!var5) { _fun0002_ip = 335; continue _fun0002 }
 329:
            var4 = 'game_message';
 335:
            var3 = var4;
 338:
            return var3;
 340:
            return var2;
 342:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function getViewableFeedItemsArray(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!(var7 >= var3)) { _fun0003_ip = 150; continue _fun0003 }
 82:
            var10 = var9[var7];
            if(!(var6 != var10)) { _fun0003_ip = 141; continue _fun0003 }
 90:
            var13 = _closure1_slot22;
            var12 = var13.has;
            var11 = var10.item;
            var11 = var11.data;
            var11 = var11.kind;
            var11 = var12.bind(var13)(var11);
            if(var11) { _fun0003_ip = 141; continue _fun0003 }
 122:
            var10 = var10.item;
            var10 = var10.id;
            _closure2_slot0 = var10;
            var2 = var10;
            _fun0003_ip = 150; continue _fun0003;
 141:
            var7 = var7 - 1;
            var2 = null;
            if(var7 >= var3) { _fun0003_ip = 82; continue _fun0003 }
 150:
            if(!(var6 != var2)) { _fun0003_ip = 199; continue _fun0003 }
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
            if(!(!(var1 < var3))) { _fun0003_ip = 193; continue _fun0003 }
 176:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0003_ip = 197; continue _fun0003;
 193:
            var1 = new Array(0);
 197:
            return var1;
 199:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function ICYMI(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var8 = var1.inNestedNavigator;
            var1 = _closure1_slot24;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var12 = _closure1_slot1;
            var31 = _closure1_slot2;
            var1 = 42;
            var1 = var31[var1];
            var1 = var12.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.height;
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var30 = _closure1_slot0;
            var1 = 43;
            var1 = var31[var1];
            var1 = var30.bind(var4)(var1);
            var1 = var1.ICYMIContext;
            var1 = var2.bind(var3)(var1);
            var33 = var1.width;
            var _closure2_slot0 = var33;
            var1 = 44;
            var1 = var31[var1];
            var1 = var12.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.top;
            var1 = 45;
            var1 = var31[var1];
            var6 = var30.bind(var4)(var1);
            var2 = var6.useICYMINewConversationSummaryExperiment;
            var1 = 'ICYMI';
            var1 = var2.bind(var6)(var1);
            var2 = var1.contentGenerationEnabled;
            var _closure2_slot1 = var2;
            var1 = 46;
            var6 = var31[var1];
            var11 = var30.bind(var4)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var13 = var9.bind(var11)(var7, var6);
            var _closure2_slot2 = var13;
            var9 = _closure1_slot5;
            var7 = var9.useState;
            var6 = false;
            var7 = var7.bind(var9)(var6);
            var6 = _closure1_slot4;
            var21 = 2;
            var6 = var6.bind(var4)(var7, var21);
            var26 = 0;
            var29 = var6[var26];
            var _closure2_slot3 = var29;
            var16 = 1;
            var6 = var6[var16];
            var _closure2_slot4 = var6;
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var7 = new Array(1);
            var7[0] = var29;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 29; continue _fun0005 }
 10:
                    var3 = _closure1_slot15;
                    var2 = var3.hasOpenedEnoughTimes;
                    var1 = var2.bind(var3)();
 29:
                    if(!var1) { _fun0005_ip = 112; continue _fun0005 }
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
                    var2 = 47;
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
            var6 = var9.bind(var11)(var6, var7);
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 48;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.startICYMIScreenRecordingFlow;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = new Array(0);
            var6 = var9.bind(var11)(var7, var6);
            var18 = 49;
            var6 = var31[var18];
            var7 = var30.bind(var4)(var6);
            var6 = var7.useIsFocused;
            var9 = var6.bind(var7)();
            var _closure2_slot5 = var9;
            var11 = _closure1_slot5;
            var7 = var11.useLayoutEffect;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 50;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackAppUIViewed;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = var7.bind(var11)(var6);
            var6 = 51;
            var6 = var31[var6];
            var11 = var30.bind(var4)(var6);
            var7 = var11.useGetDismissibleContent;
            var6 = 52;
            var6 = var31[var6];
            var6 = var30.bind(var4)(var6);
            var6 = var6.DismissibleContent;
            var15 = var6.ICYMI_ALPHA_UPSELL;
            var6 = new Array(1);
            var6[0] = var15;
            var7 = var7.bind(var11)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var7, var21);
            var19 = var6[var26];
            var _closure2_slot6 = var19;
            var17 = var6[var16];
            var _closure2_slot7 = var17;
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
            var _closure2_slot8 = var6;
            var15 = _closure1_slot5;
            var11 = var15.useEffect;
            var7 = new Array(3);
            var7[0] = var19;
            var7[1] = var17;
            var7[2] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 86; continue _fun0006 }
 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.pushICYMIInfoModal;
                    var4 = {};
                    var8 = _closure2_slot8;
                    var7 = 3;
                    var7 = var8 <= var7;
                    var4['extendedOnboarding'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot7;
                    var1 = _closure1_slot17;
                    var1 = var1.USER_DISMISS;
                    var1 = var2.bind(var3)(var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var15)(var6, var7);
            var6 = 53;
            var6 = var31[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.bind(var4)();
            var20 = var7.unreadItems;
            var _closure2_slot9 = var20;
            var6 = var7.readItems;
            var _closure2_slot10 = var6;
            var19 = var7.allUnreadItemsHydrated;
            var _closure2_slot11 = var19;
            var7 = var31[var1];
            var22 = var30.bind(var4)(var7);
            var17 = var22.useStateFromStores;
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
            var11 = var17.bind(var22)(var15, var11, var7);
            var _closure2_slot12 = var11;
            var7 = var31[var1];
            var22 = var30.bind(var4)(var7);
            var17 = var22.useStateFromStores;
            var7 = _closure1_slot15;
            var15 = new Array(1);
            var15[0] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure1_slot15;
                    var1 = var2.isFirstPageHydrated;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0007_ip = 35; continue _fun0007 }
 22:
                    var3 = _closure2_slot12;
                    var2 = 0;
                    var1 = var3 > var2;
 35:
                    var1 = !var1;
                    return var1;
                }
            };
            var15 = var17.bind(var22)(var15, var7);
            var _closure2_slot13 = var15;
            var7 = 54;
            var7 = var31[var7];
            var17 = var30.bind(var4)(var7);
            var7 = var17.useICYMIEmptyLoadingAnalytics;
            var7 = var7.bind(var17)(var15, var9);
            var23 = _closure1_slot5;
            var22 = var23.useEffect;
            var17 = new Array(1);
            var17[0] = var11;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getLoadId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 75; continue _fun0008 }
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
            var7 = var22.bind(var23)(var7, var17);
            var7 = var31[var1];
            var25 = var30.bind(var4)(var7);
            var23 = var25.useStateFromStores;
            var7 = _closure1_slot15;
            var22 = new Array(1);
            var22[0] = var7;
            var17 = function() {
                var2 = _closure1_slot15;
                var1 = var2.isRefreshing;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var25 = var23.bind(var25)(var22, var17, var7);
            var _closure2_slot14 = var25;
            var22 = _closure1_slot5;
            var17 = var22.useState;
            var7 = new Array(0);
            var17 = var17.bind(var22)(var7);
            var7 = _closure1_slot4;
            var17 = var7.bind(var4)(var17, var21);
            var7 = var17[var26];
            var _closure2_slot15 = var7;
            var17 = var17[var16];
            var _closure2_slot16 = var17;
            var17 = var31[var1];
            var23 = var30.bind(var4)(var17);
            var22 = var23.useStateFromStoresObject;
            var17 = _closure1_slot15;
            var21 = new Array(1);
            var21[0] = var17;
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
            var21 = var22.bind(var23)(var21, var17);
            var17 = var21.loadId;
            var32 = var21.lastScrollEventTimestamp;
            var _closure2_slot17 = var32;
            var22 = var7.filter;
            var21 = function(arg1) {
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
            var23 = var22.bind(var7)(var21);
            var22 = var23.map;
            var21 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var1 = var1.id;
                return var1;
            };
            var22 = var22.bind(var23)(var21);
            var21 = var22.pop;
            var27 = var21.bind(var22)();
            var _closure2_slot18 = var27;
            var21 = 55;
            var21 = var31[var21];
            var21 = var12.bind(var4)(var21);
            var28 = var21.bind(var4)(var27);
            var _closure2_slot19 = var28;
            var23 = _closure1_slot5;
            var22 = var23.useEffect;
            var21 = new Array(6);
            var21[0] = var25;
            var21[1] = var32;
            var21[2] = var28;
            var21[3] = var27;
            var21[4] = var17;
            var21[5] = var15;
            var17 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0009_ip = 157; continue _fun0009 }
 13:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0009_ip = 157; continue _fun0009 }
 23:
                    var2 = _closure2_slot19;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0009_ip = 157; continue _fun0009 }
 36:
                    var2 = _closure2_slot18;
                    if(!(var3 != var2)) { _fun0009_ip = 157; continue _fun0009 }
 44:
                    var3 = _closure2_slot18;
                    var2 = _closure2_slot19;
                    if(!(var3 !== var2)) { _fun0009_ip = 157; continue _fun0009 }
 56:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var6 = var2.bind(var3)();
                    var1 = _closure2_slot17;
                    var3 = var6 - var1;
                    var2 = _closure1_slot21;
                    if(!(var3 > var2)) { _fun0009_ip = 157; continue _fun0009 }
 92:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 56;
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
            var17 = var22.bind(var23)(var17, var21);
            var23 = _closure1_slot5;
            var22 = var23.useCallback;
            var21 = new Array(1);
            var21[0] = var11;
            var17 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    if(!var2) { _fun0010_ip = 56; continue _fun0010 }
 42:
                    var4 = _closure2_slot4;
                    var2 = true;
                    var2 = var4.bind(var1)(var2);
 56:
                    var2 = var6.length;
                    var7 = 0;
                    if(!(var7 !== var2)) { _fun0010_ip = 418; continue _fun0010 }
 70:
                    var4 = _closure2_slot16;
                    var4 = var4.bind(var1)(var6);
                    var4 = var6.length;
                    var11 = 1;
                    var4 = var4 - var11;
                    var5 = var6[var4];
                    var12 = null;
                    var8 = var12 == var5;
                    var4 = undefined;
                    if(var8) { _fun0010_ip = 114; continue _fun0010 }
 109:
                    var4 = var5.index;
 114:
                    var8 = var12 != var4;
                    var5 = 0;
                    if(!var8) { _fun0010_ip = 126; continue _fun0010 }
 123:
                    var5 = var4;
 126:
                    var4 = 10;
                    if(!(var5 > var4)) { _fun0010_ip = 160; continue _fun0010 }
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
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = 0;
                            var2 = var3[var2];
                            var4 = var2.item;
                            var2 = var4.data;
                            var3 = var2.kind;
                            var2 = 'channelSummary';
                            if(!(var2 === var3)) { _fun0011_ip = 93; continue _fun0011 }
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
                    var5 = _closure1_slot32;
                    var8 = var5.bind(var1)(var6);
                    var5 = global;
                    var9 = var5.Date;
                    var5 = var9.now;
                    var5 = var5.bind(var9)();
                    var9 = var8.length;
                    var11 = var9 - var11;
                    var9 = 57;
                    if(!(var11 >= var7)) { _fun0010_ip = 315; continue _fun0010 }
 230:
                    var18 = var8[var11];
                    var13 = var5;
                    if(!(var12 != var18)) { _fun0010_ip = 305; continue _fun0010 }
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
                    if(var11 >= var7) { _fun0010_ip = 230; continue _fun0010 }
 315:
                    var5 = var10.length;
                    if(!(var5 > var7)) { _fun0010_ip = 358; continue _fun0010 }
 324:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 56;
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
                        var2 = 57;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var3 = var7.bind(var8)(var3);
                    var2 = _closure2_slot12;
                    var2 = var4.bind(var5)(var6, var3, var2);
 418:
                    return var1;
                }
            };
            var28 = var22.bind(var23)(var17, var21);
            var _closure2_slot20 = var28;
            var23 = _closure1_slot5;
            var22 = var23.useCallback;
            var21 = new Array(1);
            var21[0] = var11;
            var17 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = arg1;
                    var6 = var2.viewableItems;
                    var3 = var6.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0012_ip = 163; continue _fun0012 }
 25:
                    var3 = _closure1_slot32;
                    var4 = undefined;
                    var10 = var3.bind(var4)(var6);
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var3 = var7.bind(var4)(var3);
                    var9 = var3.ICYMIAnalytics;
                    var8 = var9.trackItemLongImpression;
                    var7 = var10.map;
                    var3 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = var4.id;
                        var1['id'] = var2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 57;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var7 = var7.bind(var10)(var3);
                    var3 = _closure2_slot12;
                    var3 = var8.bind(var9)(var6, var7, var3);
                    var3 = _closure1_slot1;
                    var2 = 56;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.triggerItemsLongImpression;
                    var5 = var6.filter;
                    var4 = function(arg1) {
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
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.map;
                    var1 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.item;
                            var2 = var1.index;
                            var1 = {};
                            var4 = var3.id;
                            var1['itemId'] = var4;
                            var5 = _closure1_slot31;
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
                            if(!var6) { _fun0013_ip = 78; continue _fun0013 }
 75:
                            var4 = var5;
 78:
                            var1['itemScore'] = var4;
                            var3 = var3.channelType;
                            var4 = var2 != var3;
                            var2 = null;
                            if(!var4) { _fun0013_ip = 101; continue _fun0013 }
 98:
                            var2 = var3;
 101:
                            var1['itemChannelType'] = var2;
                            var2 = false;
                            var1['isInitiallyVisible'] = var2;
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 163:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var22.bind(var23)(var17, var21);
            var _closure2_slot21 = var27;
            var23 = _closure1_slot5;
            var22 = var23.useCallback;
            var21 = function(arg1) {
                var1 = arg1;
                var7 = var1.viewableItems;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 56;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.startItemsDwell;
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
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.item;
                        var2 = var1.index;
                        var1 = {};
                        var4 = var3.id;
                        var1['itemId'] = var4;
                        var5 = _closure1_slot31;
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
                        if(!var6) { _fun0014_ip = 78; continue _fun0014 }
 75:
                        var4 = var5;
 78:
                        var1['itemScore'] = var4;
                        var3 = var3.channelType;
                        var4 = var2 != var3;
                        var2 = null;
                        if(!var4) { _fun0014_ip = 101; continue _fun0014 }
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
            var17 = var22.bind(var23)(var21, var17);
            var _closure2_slot22 = var17;
            var23 = _closure1_slot5;
            var22 = var23.useMemo;
            var21 = new Array(3);
            var21[0] = var28;
            var21[1] = var27;
            var21[2] = var17;
            var17 = function() {
                var2 = {};
                var1 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
                var2['viewabilityConfig'] = var1;
                var1 = _closure2_slot20;
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(3);
                var1[0] = var2;
                var2 = {};
                var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
                var2['viewabilityConfig'] = var4;
                var4 = _closure2_slot21;
                var2['onViewableItemsChanged'] = var4;
                var1[1] = var2;
                var2 = {};
                var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 50};
                var2['viewabilityConfig'] = var4;
                var3 = _closure2_slot22;
                var2['onViewableItemsChanged'] = var3;
                var1[2] = var2;
                return var1;
            };
            var17 = var22.bind(var23)(var17, var21);
            var23 = _closure1_slot5;
            var22 = var23.useRef;
            var21 = null;
            var23 = var22.bind(var23)(var21);
            var _closure2_slot23 = var23;
            var27 = _closure1_slot5;
            var22 = var27.useRef;
            var21 = {};
            var28 = function scrollToTop() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot23;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0015_ip = 50; continue _fun0015 }
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
            var21['scrollToTop'] = var28;
            var22 = var22.bind(var27)(var21);
            var _closure2_slot24 = var22;
            var18 = var31[var18];
            var21 = var30.bind(var4)(var18);
            var18 = var21.useScrollToTop;
            var18 = var18.bind(var21)(var22);
            var18 = var31[var1];
            var27 = var30.bind(var4)(var18);
            var22 = var27.useStateFromStores;
            var18 = _closure1_slot14;
            var21 = new Array(1);
            var21[0] = var18;
            var18 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getDoubleTapBehavior;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var22.bind(var27)(var21, var18);
            var _closure2_slot25 = var28;
            var18 = 58;
            var18 = var31[var18];
            var21 = var30.bind(var4)(var18);
            var18 = var21.useNavigation;
            var18 = var18.bind(var21)();
            var27 = _closure1_slot5;
            var22 = var27.useEffect;
            var21 = new Array(3);
            var21[0] = var28;
            var21[1] = var18;
            var21[2] = var13;
            var18 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var5 = _closure2_slot25;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 57;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.GravityICYMIDoubleTapBehavior;
                    var3 = var3.DEFAULT;
                    if(!(var5 !== var3)) { _fun0016_ip = 76; continue _fun0016 }
 50:
                    var5 = _closure2_slot24;
                    var3 = {};
                    var6 = function scrollToTop() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 59;
                        var4 = var2[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 24;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 60;
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
                    var3['scrollToTop'] = var6;
                    var5['current'] = var3;
                    _fun0016_ip = 100; continue _fun0016;
 76:
                    var3 = _closure2_slot24;
                    var2 = {};
                    var4 = function scrollToTop() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var1 = _closure2_slot23;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0017_ip = 50; continue _fun0017 }
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
                    var2['scrollToTop'] = var4;
                    var3['current'] = var2;
 100:
                    return var1;
                }
            };
            var18 = var22.bind(var27)(var18, var21);
            var22 = _closure1_slot5;
            var21 = var22.useCallback;
            var18 = new Array(2);
            var18[0] = var23;
            var18[1] = var13;
            var13 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = _closure2_slot23;
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
            var13 = var21.bind(var22)(var13, var18);
            var _closure2_slot26 = var13;
            var21 = _closure1_slot5;
            var18 = var21.useEffect;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 56;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setTabFocused;
                var2 = _closure2_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var18.bind(var21)(var9, var13);
            var21 = _closure1_slot5;
            var18 = var21.useEffect;
            var13 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 56;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openICYMITab;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9 = new Array(0);
            var9 = var18.bind(var21)(var13, var9);
            var9 = 61;
            var9 = var31[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var27 = var9.showDot;
            var _closure2_slot27 = var27;
            var9 = var31[var1];
            var22 = var30.bind(var4)(var9);
            var21 = var22.useStateFromStores;
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
            var21 = var21.bind(var22)(var18, var13, var9);
            var _closure2_slot28 = var21;
            var22 = _closure1_slot5;
            var18 = var22.useCallback;
            var13 = _closure1_slot3;
            var9 = function* () {
                var1 = function* anon_0_() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0019_ip = 254; continue _fun0019 }
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
                        var8 = _closure2_slot27;
                        var7 = 'NoDotShown';
                        if(!var8) { _fun0019_ip = 71; continue _fun0019 }
 65:
                        var7 = 'DotShown';
 71:
                        var2['variant'] = var7;
                        var7 = 'gravity_refresh';
                        var2['homeSessionId'] = var7;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 56;
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
                        if(var3) { _fun0019_ip = 251; continue _fun0019 }
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
                        if(var4) { _fun0019_ip = 248; continue _fun0019 }
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
                        if(var7) { _fun0019_ip = 245; continue _fun0019 }
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
            var9[0] = var27;
            var28 = var18.bind(var22)(var13, var9);
            var _closure2_slot29 = var28;
            var18 = _closure1_slot5;
            var13 = var18.useMemo;
            var9 = new Array(5);
            var9[0] = var15;
            var9[1] = var21;
            var9[2] = var20;
            var9[3] = var19;
            var9[4] = var6;
            var6 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot13;
                    if(!var4) { _fun0020_ip = 30; continue _fun0020 }
 20:
                    var6 = _closure2_slot28;
                    var5 = null;
                    var4 = var5 != var6;
 30:
                    if(!var4) { _fun0020_ip = 83; continue _fun0020 }
 33:
                    var5 = _closure2_slot28;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 57;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ICYMIItemTypes;
                    var5 = var5.CUSTOM_STATUS;
                    var4 = var6 === var5;
 83:
                    if(!var4) { _fun0020_ip = 216; continue _fun0020 }
 89:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure2_slot28;
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
                    var8 = 39;
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
                    var4 = _closure2_slot13;
                    if(var4) { _fun0020_ip = 327; continue _fun0020 }
 223:
                    var6 = _closure2_slot9;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure1_slot26;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var4);
                            if(var2) { _fun0021_ip = 37; continue _fun0021 }
 20:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 37:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot11;
                    if(!var4) { _fun0020_ip = 289; continue _fun0020 }
 251:
                    var5 = var2.push;
                    var4 = {'id': 'end', 'timestamp': 0, 'unread': false};
                    var7 = 'end';
                    var6 = {};
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 289:
                    var4 = _closure2_slot10;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0020_ip = 365; continue _fun0020 }
 304:
                    var4 = _closure2_slot10;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
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
                    var1 = var3.bind(var4)(var1);
                    _fun0020_ip = 365; continue _fun0020;
 327:
                    var3 = var2.push;
                    var1 = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    var5 = 'loading';
                    var4 = {};
                    var4['kind'] = var5;
                    var1['data'] = var4;
                    var1 = var3.bind(var2)(var1);
 365:
                    var1 = {};
                    var1['data'] = var2;
                    var2 = new Array(0);
                    var1['stickyHeaderIndices'] = var2;
                    return var1;
                }
            };
            var6 = var13.bind(var18)(var6, var9);
            var21 = var6.data;
            var _closure2_slot30 = var21;
            var18 = var6.stickyHeaderIndices;
            var5 = var5 - var3;
            var3 = 32;
            var6 = var5 - var3;
            var3 = 62;
            var3 = var31[var3];
            var5 = var30.bind(var4)(var3);
            var3 = var5.useMainTabsHeight;
            var5 = var3.bind(var5)();
            var3 = 24;
            var3 = var6 - var3;
            var34 = var3 - var5;
            var _closure2_slot31 = var34;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var29;
            var3[2] = var2;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'generatedCandidate';
                    if(!(var1 !== var2)) { _fun0023_ip = 979; continue _fun0023 }
 37:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'channelSummary';
                    if(!(var1 !== var2)) { _fun0023_ip = 924; continue _fun0023 }
 60:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'message';
                    if(!(var1 !== var2)) { _fun0023_ip = 681; continue _fun0023 }
 81:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'contentInventory';
                    if(!(var1 !== var2)) { _fun0023_ip = 590; continue _fun0023 }
 104:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'loading';
                    if(!(var1 !== var2)) { _fun0023_ip = 545; continue _fun0023 }
 125:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'end';
                    if(!(var1 !== var2)) { _fun0023_ip = 494; continue _fun0023 }
 146:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'guildEvent';
                    if(!(var1 !== var2)) { _fun0023_ip = 436; continue _fun0023 }
 167:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'recommendedGuilds';
                    if(!(var1 !== var2)) { _fun0023_ip = 388; continue _fun0023 }
 190:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'icymiHeader';
                    if(!(var1 !== var2)) { _fun0023_ip = 349; continue _fun0023 }
 213:
                    var1 = var6.data;
                    var2 = var1.kind;
                    var1 = 'forumThread';
                    if(!(var1 === var2)) { _fun0023_ip = 345; continue _fun0023 }
 233:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 73;
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
                    var9 = _closure2_slot15;
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
                    _fun0023_ip = 1044; continue _fun0023;
 345:
                    var1 = null;
                    return var1;
 349:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 72;
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
                    var1 = 71;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ICYMIServerRecommendationRow;
                    var1 = {};
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0023_ip = 1044; continue _fun0023;
 436:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 70;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = var6.data;
                    var7 = var7.eventId;
                    var1['eventId'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0023_ip = 1044; continue _fun0023;
 494:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 69;
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
                    var1 = 68;
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
                    var1 = 67;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = _closure2_slot15;
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
                    _fun0023_ip = 1044; continue _fun0023;
 681:
                    var3 = var6.channelType;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 40;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    if(!(var3 !== var1)) { _fun0023_ip = 827; continue _fun0023 }
 728:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 66;
                    var1 = var9[var1];
                    var3 = var3.bind(var7)(var1);
                    var1 = {};
                    var9 = var6.data;
                    var9 = var9.message;
                    var1['message'] = var9;
                    var9 = var6.data;
                    var9 = var9.messageContext;
                    var1['messageContext'] = var9;
                    var11 = _closure2_slot15;
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
                    _fun0023_ip = 919; continue _fun0023;
 827:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 65;
                    var2 = var9[var2];
                    var3 = var3.bind(var7)(var2);
                    var2 = {};
                    var9 = var6.unread;
                    var2['unread'] = var9;
                    var9 = var6.data;
                    var9 = var9.message;
                    var2['message'] = var9;
                    var10 = _closure2_slot15;
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
                    _fun0023_ip = 1044; continue _fun0023;
 924:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 64;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = var6.data;
                    var7 = var7.topic;
                    var1['topic'] = var7;
                    var5 = var4.bind(var3)(var2, var1);
                    _fun0023_ip = 1044; continue _fun0023;
 979:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0023_ip = 993; continue _fun0023 }
 989:
                    var1 = null;
                    return var1;
 993:
                    var4 = _closure1_slot18;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 63;
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
                    var1 = 74;
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
            var22 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var34;
            var2 = var21.length;
            var3[1] = var2;
            var3[2] = var33;
            var2 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = _closure2_slot30;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0024_ip = 44; continue _fun0024 }
 23:
                    var2 = {};
                    var4 = _closure2_slot31;
                    var2['height'] = var4;
                    var3 = _closure2_slot0;
                    var2['width'] = var3;
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var19 = var5.bind(var6)(var2, var3);
            var2 = 75;
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
            var3 = _closure1_slot20;
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
            var5['inNestedNavigator'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var6 = {};
            var32 = var24.flashListWrapper;
            var9 = new Array(3);
            var9[0] = var32;
            var32 = {};
            var32['height'] = var34;
            var32['width'] = var33;
            var33 = 'auto';
            var32['marginHorizontal'] = var33;
            var9[1] = var32;
            var9[2] = var13;
            var6['style'] = var9;
            var13 = _closure1_slot18;
            var9 = 76;
            var9 = var31[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var14 = function onPress() {
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
                var3 = _closure2_slot29;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot26;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var14;
            var9['isRefreshing'] = var25;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var14 = _closure1_slot18;
            var12 = 77;
            var12 = var31[var12];
            var12 = var30.bind(var4)(var12);
            var13 = var12.FlashList;
            var12 = {};
            var12['ref'] = var23;
            var23 = !var15;
            var12['scrollEnabled'] = var23;
            var23 = {};
            var23['endVisible'] = var29;
            var12['extraData'] = var23;
            var12['contentContainerStyle'] = var22;
            var22 = 28;
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
            if(!var27) { _fun0004_ip = 2112; continue _fun0004 }
 2110:
            var25 = 0;
 2112:
            var24['opacity'] = var25;
            var21['style'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var12['refreshControl'] = var21;
            var21 = 3;
            var12['onEndReachedThreshold'] = var21;
            var21 = _closure1_slot30;
            var12['onEndReached'] = var21;
            var21 = _closure1_slot34;
            var12['keyExtractor'] = var21;
            var12['renderItem'] = var20;
            var20 = 200;
            var12['estimatedItemSize'] = var20;
            var12['estimatedListSize'] = var19;
            var19 = _closure1_slot31;
            var12['getItemType'] = var19;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 78;
            var19 = var21[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isAndroid;
            var19 = var19.bind(var20)();
            var19 = 100;
            var12['drawDistance'] = var19;
            var12['stickyHeaderIndices'] = var18;
            var12['viewabilityConfigCallbackPairs'] = var17;
            if(var15) { _fun0004_ip = 2237; continue _fun0004 }
 2234:
            var16 = var11;
 2237:
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
            var10 = 79;
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
    var _closure1_slot33 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot34 = var1;
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
    var9 = var7.Fragment;
    var _closure1_slot19 = var9;
    var7 = var7.jsxs;
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
    var13 = ['end', 'loading', 'icymiHeader', 'recommendedGuilds'];
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
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var18 = var1.inNestedNavigator;
            var1 = _closure1_slot24;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 29;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var14 = var1.bind(var4)();
            var12 = _closure1_slot0;
            var1 = 30;
            var1 = var13[var1];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useYouBarBackButtonBadgeEnabled;
            var1 = 'ICYMI';
            var19 = var2.bind(var3)(var1);
            var3 = _closure1_slot20;
            var1 = 31;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = !var14;
            var1['top'] = var5;
            var5 = var9.header;
            var1['style'] = var5;
            var8 = _closure1_slot18;
            var5 = 32;
            var5 = var13[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            var23 = true;
            var10 = {};
            var11 = 33;
            var15 = var13[var11];
            var15 = var12.bind(var4)(var15);
            var15 = var15.OverlayOpacity;
            var15 = var15.LEVEL_7;
            var10['dark'] = var15;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.OverlayOpacity;
            var11 = var11.LEVEL_8;
            var10['light'] = var11;
            var5['mixAmount'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var10 = _closure1_slot20;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var9.headerTitle;
            var7['style'] = var11;
            var13 = _closure1_slot20;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var9.headerLeft;
            var11['style'] = var15;
            if(var14) { _fun0025_ip = 276; continue _fun0025 }
 268:
            var15 = null;
            if(!var18) { _fun0025_ip = 539; continue _fun0025 }
 276:
            var17 = _closure1_slot18;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 34;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var16 = var14.PressableOpacity;
            var14 = {};
            var20 = var9.headerClose;
            var14['style'] = var20;
            var20 = 28;
            var24 = var22[var20];
            var24 = var21.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.13/7kZ;
            var20 = var24.bind(var25)(var20);
            var14['accessibilityLabel'] = var20;
            var20 = 35;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.goBack;
            var14['onPress'] = var20;
            var22 = _closure1_slot18;
            if(var18) { _fun0025_ip = 444; continue _fun0025 }
 398:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 38;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var20 = var18.XSmallIcon;
            var18 = {};
            var21 = 'interactive-normal';
            var18['color'] = var21;
            var18 = var22.bind(var4)(var20, var18);
            _fun0025_ip = 529; continue _fun0025;
 444:
            if(var19) { _fun0025_ip = 493; continue _fun0025 }
 447:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 37;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.ArrowLargeLeftIcon;
            var19 = {};
            var21 = 'interactive-normal';
            var19['color'] = var21;
            var19 = var22.bind(var4)(var20, var19);
            _fun0025_ip = 526; continue _fun0025;
 493:
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var20 = 36;
            var20 = var24[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['includeNotificationsCount'] = var23;
            var19 = var22.bind(var4)(var21, var20);
 526:
            var18 = var19;
 529:
            var14['children'] = var18;
            var15 = var17.bind(var4)(var16, var14);
 539:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot18;
            var16 = _closure1_slot29;
            var15 = {};
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot20;
            var13 = _closure1_slot6;
            var12 = {};
            var15 = var9.headerActions;
            var12['style'] = var15;
            var17 = _closure1_slot18;
            var16 = _closure1_slot28;
            var15 = {};
            var16 = var17.bind(var4)(var16, var15);
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
    var4 = 83;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMITab(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var2 = arg1;
            var2 = var2.route;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 80;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var3 = 46;
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
            var3 = 29;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var11 = var3.bind(var4)();
            var _closure2_slot0 = var11;
            var3 = 44;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.top;
            var5 = null;
            var6 = var5 == var2;
            var15 = undefined;
            if(var6) { _fun0026_ip = 163; continue _fun0026 }
 142:
            var2 = var2.params;
            var5 = var5 == var2;
            var15 = undefined;
            if(var5) { _fun0026_ip = 163; continue _fun0026 }
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
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    if(!var3) { _fun0027_ip = 22; continue _fun0027 }
 12:
                    var2 = _closure2_slot1;
                    var1 = var2.containerOuterTablet;
 22:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            if(var11) { _fun0026_ip = 231; continue _fun0026 }
 219:
            var1 = _closure1_slot5;
            var10 = var1.Fragment;
            _fun0026_ip = 235; continue _fun0026;
 231:
            var10 = _closure1_slot6;
 235:
            var3 = _closure1_slot18;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 81;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot18;
            var6 = _closure1_slot0;
            var5 = 43;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ICYMIContextProvider;
            var5 = {};
            var9 = _closure1_slot20;
            var8 = {};
            if(var11) { _fun0026_ip = 302; continue _fun0026 }
 298:
            var11 = {};
            _fun0026_ip = 311; continue _fun0026;
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
            var11 = 32;
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
            var11 = 82;
            var11 = var18[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.ThemeContextProvider;
            var11 = {};
            var11['gradient'] = var17;
            var18 = _closure1_slot18;
            var17 = _closure1_slot33;
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