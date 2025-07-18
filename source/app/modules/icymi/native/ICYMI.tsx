// app/modules/icymi/native/ICYMI.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function isItemNSFW(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.data;
            var3 = var2.kind;
            var2 = 'message';
            if(!(var2 !== var3)) { _fun0001_ip = 108; continue _fun0001 }
 21:
            var2 = 'channelSummary';
            if(!(var2 !== var3)) { _fun0001_ip = 90; continue _fun0001 }
 31:
            var2 = 'generatedCandidate';
            if(!(var2 !== var3)) { _fun0001_ip = 73; continue _fun0001 }
 41:
            var2 = 'forumThread';
            if(!(var2 !== var3)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var2 = false;
            return var2;
 55:
            var2 = var1.data;
            var2 = var2.threadChannel;
            var4 = var2.id;
            _fun0001_ip = 123; continue _fun0001;
 73:
            var2 = var1.data;
            var2 = var2.item;
            var4 = var2.channel_id;
            _fun0001_ip = 123; continue _fun0001;
 90:
            var2 = var1.data;
            var2 = var2.topic;
            var4 = var2.channelId;
            _fun0001_ip = 123; continue _fun0001;
 108:
            var1 = var1.data;
            var1 = var1.message;
            var4 = var1.channel_id;
 123:
            var3 = _closure1_slot11;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 155; continue _fun0001 }
 146:
            var3 = var1.nsfw;
            if(var3) { _fun0001_ip = 260; continue _fun0001 }
 155:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0001_ip = 169; continue _fun0001 }
 164:
            var4 = var1.guild_id;
 169:
            var6 = var5 != var4;
            var4 = null;
            if(!var6) { _fun0001_ip = 197; continue _fun0001 }
 178:
            var7 = _closure1_slot12;
            var6 = var7.getGuild;
            var1 = var1.guild_id;
            var4 = var6.bind(var7)(var1);
 197:
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 212; continue _fun0001 }
 206:
            var6 = var4.nsfwLevel;
 212:
            var1 = _closure1_slot16;
            var1 = var1.EXPLICIT;
            var1 = var6 === var1;
            if(var1) { _fun0001_ip = 258; continue _fun0001 }
 229:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 244; continue _fun0001 }
 238:
            var3 = var4.nsfwLevel;
 244:
            var2 = _closure1_slot16;
            var2 = var2.AGE_RESTRICTED;
            var1 = var3 === var2;
 258:
            return var1;
 260:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function SearchButton() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot25;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 19;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var3 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var3 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var3);
                var6 = var7.trackItemInteraction;
                var5 = 'search_button';
                var3 = 'press_search_button';
                var3 = var6.bind(var7)(var5, var5, var3);
                var3 = _closure1_slot1;
                var2 = 21;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var9 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot18;
            var1 = 22;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = var5.searchBarContainer;
            var5 = new Array(1);
            var5[0] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot0;
            var5 = 23;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {'variant': null, 'grow': true, 'shrink': true, 'size': 'lg'};
            var10 = 'secondary';
            if(!var11) { _fun0002_ip = 159; continue _fun0002 }
 153:
            var10 = 'tertiary';
 159:
            var5['variant'] = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 24;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var11 = _closure1_slot0;
            var8 = 25;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.5h0QOD;
            var8 = var9.bind(var10)(var8);
            var5['text'] = var8;
            var8 = 2;
            var5['maxFontSizeMultiplier'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function SettingsButton() {
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 26;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        var8 = 'sm';
        var7 = _closure1_slot18;
        var5 = 27;
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
            var1 = 20;
            var5 = var2[var1];
            var1 = undefined;
            var8 = var4.bind(var1)(var5);
            var7 = var8.trackItemInteraction;
            var6 = 'filters_button';
            var5 = 'press_info_button';
            var5 = var7.bind(var8)(var6, var6, var5);
            var5 = _closure1_slot1;
            var3 = 28;
            var3 = var2[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.openLazy;
            var3 = 30;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 29;
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
    var _closure1_slot29 = var1;
    var1 = function NotificationsButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var15 = var1.numUnreadMentions;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 31;
            var1 = var18[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var14 = var1.value;
            var10 = var1.showDot;
            var12 = _closure1_slot0;
            var1 = 32;
            var1 = var18[var1];
            var2 = var12.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var1 = _closure1_slot24;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot18;
            var1 = 26;
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
            var9 = 33;
            var9 = var18[var9];
            var9 = var12.bind(var4)(var9);
            var12 = var9.AtIcon;
            var9 = {};
            var9['size'] = var17;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            if(var10) { _fun0003_ip = 208; continue _fun0003 }
 202:
            var12 = 0;
            var10 = var15 > var12;
 208:
            if(!var10) { _fun0003_ip = 261; continue _fun0003 }
 211:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 34;
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
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
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
    var _closure1_slot30 = var1;
    var1 = function InfoButton() {
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 26;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        var8 = 'sm';
        var7 = _closure1_slot18;
        var5 = 35;
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
            var1 = 20;
            var2 = var4[var1];
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var6 = var7.trackItemInteraction;
            var5 = 'info_button';
            var2 = 'press_info_button';
            var2 = var6.bind(var7)(var5, var5, var2);
            var2 = 36;
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
    var _closure1_slot31 = var1;
    var1 = function ICYMIHeaderTextWrapper(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.isPressable;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 37;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useICYMISearchExperienceExperiment;
            var3 = 'ICYMIHeader';
            var3 = var4.bind(var6)(var3);
            var3 = var3.renameEnabled;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot24;
            var8 = var4.bind(var5)();
            var9 = _closure1_slot5;
            var6 = var9.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot19;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var9 = _closure1_slot18;
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 38;
                    var5 = var1[var6];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var8 = var5.Text;
                    var5 = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                    var10 = _closure2_slot0;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = 25;
                    var12 = var11[var13];
                    var12 = var15.bind(var1)(var12);
                    var14 = var12.intl;
                    var12 = var14.string;
                    var11 = var11[var13];
                    var11 = var15.bind(var1)(var11);
                    var11 = var11.t;
                    if(var10) { _fun0005_ip = 125; continue _fun0005 }
 112:
                    var10 = var11.SY4sdX;
                    var10 = var12.bind(var14)(var10);
                    _fun0005_ip = 136; continue _fun0005;
 125:
                    var11 = var11.29mxFh;
                    var10 = var12.bind(var14)(var11);
 136:
                    var5['children'] = var10;
                    var8 = var9.bind(var1)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = _closure1_slot18;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = var9[var6];
                    var6 = var12.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'color': 'text-brand', 'variant': 'text-xs/bold'};
                    var10 = {};
                    var11 = 4;
                    var10['marginTop'] = var11;
                    var6['style'] = var10;
                    var10 = var9[var13];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
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
                }
            };
            var6 = var6.bind(var9)(var3, var4);
            var4 = _closure1_slot18;
            if(var1) { _fun0004_ip = 136; continue _fun0004 }
 108:
            var3 = _closure1_slot6;
            var1 = {};
            var9 = var8.headerText;
            var1['style'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 195; continue _fun0004;
 136:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 39;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = var8.headerText;
            var2['style'] = var8;
            var7 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.trackItemInteraction;
                var5 = 'title_text';
                var2 = 'press_info_title_text';
                var2 = var6.bind(var7)(var5, var5, var2);
                var2 = 36;
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
 195:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function handleEndReached() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.hydrateNextPage;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function itemToType(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var1 = var6.data;
            var8 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var8)) { _fun0006_ip = 393; continue _fun0006 }
 24:
            var2 = 'loading';
            if(!(var2 !== var8)) { _fun0006_ip = 391; continue _fun0006 }
 35:
            var4 = 'message';
            if(!(var4 !== var8)) { _fun0006_ip = 294; continue _fun0006 }
 46:
            var3 = 'channelSummary';
            if(!(var3 !== var8)) { _fun0006_ip = 288; continue _fun0006 }
 59:
            var3 = 'guildEvent';
            if(!(var3 !== var8)) { _fun0006_ip = 280; continue _fun0006 }
 70:
            var3 = 'contentInventory';
            if(!(var3 !== var8)) { _fun0006_ip = 209; continue _fun0006 }
 83:
            var3 = 'recommendedGuilds';
            if(!(var3 !== var8)) { _fun0006_ip = 201; continue _fun0006 }
 93:
            var3 = 'forumThread';
            if(!(var3 !== var8)) { _fun0006_ip = 193; continue _fun0006 }
 103:
            var3 = 'generatedCandidate';
            if(!(var3 !== var8)) { _fun0006_ip = 185; continue _fun0006 }
 113:
            var3 = 'search';
            if(!(var3 !== var8)) { _fun0006_ip = 183; continue _fun0006 }
 121:
            var5 = 'voice';
            if(!(var5 !== var8)) { _fun0006_ip = 181; continue _fun0006 }
 129:
            var7 = 'icymiHeader';
            if(!(var7 !== var8)) { _fun0006_ip = 173; continue _fun0006 }
 139:
            var7 = 'editCustomStatus';
            if(!(var7 !== var8)) { _fun0006_ip = 165; continue _fun0006 }
 149:
            var7 = 'mentions';
            if(!(var7 !== var8)) { _fun0006_ip = 163; continue _fun0006 }
 157:
            var8 = 'unknown';
            return var8;
 163:
            return var7;
 165:
            var7 = 'edit_custom_status';
            return var7;
 173:
            var7 = 'icymi_header';
            return var7;
 181:
            return var5;
 183:
            return var3;
 185:
            var3 = 'generated_candidate';
            return var3;
 193:
            var3 = 'forum_thread';
            return var3;
 201:
            var3 = 'recommended_guilds';
            return var3;
 209:
            var3 = var6.data;
            var3 = var3.content;
            var7 = var3.content_type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 48;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var5);
            var3 = var3.ContentInventoryEntryType;
            var5 = var3.CUSTOM_STATUS;
            var3 = 'hotwheels_gaming_activity';
            if(!(var7 === var5)) { _fun0006_ip = 278; continue _fun0006 }
 272:
            var3 = 'hotwheels_custom_status';
 278:
            return var3;
 280:
            var3 = 'guild_event';
            return var3;
 288:
            var3 = 'summary';
            return var3;
 294:
            var8 = var6.channelType;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 47;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var7 = var3.GUILD_ANNOUNCEMENT;
            var3 = 'announcement';
            if(!(var8 !== var7)) { _fun0006_ip = 389; continue _fun0006 }
 345:
            var6 = var6.data;
            var7 = var6.messageContext;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0006_ip = 373; continue _fun0006 }
 367:
            var5 = var7.external_content_application_id;
 373:
            var5 = var6 != var5;
            if(!var5) { _fun0006_ip = 386; continue _fun0006 }
 380:
            var4 = 'game_message';
 386:
            var3 = var4;
 389:
            return var3;
 391:
            return var2;
 393:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function getViewableFeedItemsArray(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot14;
            var2 = var3.getUnreadDisplayItems;
            var15 = var2.bind(var3)();
            var4 = new Array(0);
            var3 = 0;
            var16 = var4;
            var14 = 0;
            var14 = arraySpread(var16, var15, var14);
            var6 = _closure1_slot14;
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
            if(!(var7 >= var3)) { _fun0007_ip = 150; continue _fun0007 }
 82:
            var10 = var9[var7];
            if(!(var6 != var10)) { _fun0007_ip = 141; continue _fun0007 }
 90:
            var13 = _closure1_slot22;
            var12 = var13.has;
            var11 = var10.item;
            var11 = var11.data;
            var11 = var11.kind;
            var11 = var12.bind(var13)(var11);
            if(var11) { _fun0007_ip = 141; continue _fun0007 }
 122:
            var10 = var10.item;
            var10 = var10.id;
            _closure2_slot0 = var10;
            var2 = var10;
            _fun0007_ip = 150; continue _fun0007;
 141:
            var7 = var7 - 1;
            var2 = null;
            if(var7 >= var3) { _fun0007_ip = 82; continue _fun0007 }
 150:
            if(!(var6 != var2)) { _fun0007_ip = 199; continue _fun0007 }
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
            if(!(!(var1 < var3))) { _fun0007_ip = 193; continue _fun0007 }
 176:
            var2 = var4.slice;
            var1 = var1 + var5;
            var1 = var2.bind(var4)(var3, var1);
            _fun0007_ip = 197; continue _fun0007;
 193:
            var1 = new Array(0);
 197:
            return var1;
 199:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function ICYMI() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = _closure1_slot24;
            var4 = undefined;
            var28 = var1.bind(var4)();
            var _closure2_slot0 = var28;
            var14 = _closure1_slot1;
            var35 = _closure1_slot2;
            var1 = 49;
            var1 = var35[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.width;
            var6 = var1.height;
            var13 = global;
            var3 = var13.Math;
            var2 = var3.min;
            var1 = 480;
            var38 = var2.bind(var3)(var5, var1);
            var _closure2_slot1 = var38;
            var1 = 50;
            var1 = var35[var1];
            var1 = var14.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.top;
            var34 = _closure1_slot0;
            var7 = 37;
            var1 = var35[var7];
            var2 = var34.bind(var4)(var1);
            var1 = var2.useICYMISearchExperienceExperiment;
            var19 = 'ICYMI';
            var1 = var1.bind(var2)(var19);
            var10 = var1.searchEnabled;
            var _closure2_slot2 = var10;
            var1 = var35[var7];
            var2 = var34.bind(var4)(var1);
            var1 = var2.useICYMINewConversationSummaryExperiment;
            var1 = var1.bind(var2)(var19);
            var2 = var1.contentGenerationEnabled;
            var _closure2_slot3 = var2;
            var1 = 51;
            var5 = var35[var1];
            var11 = var34.bind(var4)(var5);
            var9 = var11.useStateFromStores;
            var5 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var15 = var9.bind(var11)(var8, var5);
            var _closure2_slot4 = var15;
            var9 = _closure1_slot5;
            var8 = var9.useState;
            var5 = false;
            var8 = var8.bind(var9)(var5);
            var5 = _closure1_slot4;
            var21 = 2;
            var5 = var5.bind(var4)(var8, var21);
            var30 = 0;
            var33 = var5[var30];
            var _closure2_slot5 = var33;
            var18 = 1;
            var5 = var5[var18];
            var _closure2_slot6 = var5;
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var8 = new Array(1);
            var8[0] = var33;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0009_ip = 29; continue _fun0009 }
 10:
                    var3 = _closure1_slot14;
                    var2 = var3.hasOpenedEnoughTimes;
                    var1 = var2.bind(var3)();
 29:
                    if(!var1) { _fun0009_ip = 112; continue _fun0009 }
 32:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 28;
                    var3 = var1[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 30;
                    var2 = var1[var2];
                    var3 = var3.bind(var6)(var2);
                    var2 = 52;
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
            var5 = var9.bind(var11)(var5, var8);
            var5 = var35[var7];
            var9 = var34.bind(var4)(var5);
            var8 = var9.useIsNotificationsTabMerged;
            var5 = {};
            var5['location'] = var19;
            var5 = var8.bind(var9)(var5);
            var9 = var5.enabled;
            var _closure2_slot7 = var9;
            var5 = 53;
            var8 = var35[var5];
            var11 = var34.bind(var4)(var8);
            var8 = var11.useIsFocused;
            var12 = var8.bind(var11)();
            var _closure2_slot8 = var12;
            var8 = 54;
            var8 = var35[var8];
            var11 = var14.bind(var4)(var8);
            var8 = {};
            var8['isFocused'] = var12;
            var8['mergedNotificationsEnabled'] = var9;
            var11 = var11.bind(var4)(var8);
            var8 = var11.displayUnreadMentionMessages;
            var _closure2_slot9 = var8;
            var16 = var11.newUnreadMentionMessages;
            var20 = _closure1_slot5;
            var17 = var20.useLayoutEffect;
            var11 = function() {
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
            var11 = var17.bind(var20)(var11);
            var11 = 56;
            var11 = var35[var11];
            var20 = var34.bind(var4)(var11);
            var17 = var20.useGetDismissibleContent;
            var11 = 57;
            var11 = var35[var11];
            var11 = var34.bind(var4)(var11);
            var11 = var11.DismissibleContent;
            var23 = var11.ICYMI_ALPHA_UPSELL;
            var11 = new Array(1);
            var11[0] = var23;
            var17 = var17.bind(var20)(var11);
            var11 = _closure1_slot4;
            var11 = var11.bind(var4)(var17, var21);
            var23 = var11[var30];
            var _closure2_slot10 = var23;
            var20 = var11[var18];
            var _closure2_slot11 = var20;
            var7 = var35[var7];
            var17 = var34.bind(var4)(var7);
            var11 = var17.useICYMIStatusWithMediaEnabled;
            var7 = {};
            var7['location'] = var19;
            var37 = var11.bind(var17)(var7);
            var _closure2_slot12 = var37;
            var7 = var35[var1];
            var19 = var34.bind(var4)(var7);
            var17 = var19.useStateFromStores;
            var7 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getGuildCount;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var17.bind(var19)(var11, var7);
            var _closure2_slot13 = var7;
            var19 = _closure1_slot5;
            var17 = var19.useEffect;
            var11 = new Array(3);
            var11[0] = var23;
            var11[1] = var20;
            var11[2] = var7;
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 86; continue _fun0010 }
 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 36;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.pushICYMIInfoModal;
                    var4 = {};
                    var8 = _closure2_slot13;
                    var7 = 3;
                    var7 = var8 <= var7;
                    var4['extendedOnboarding'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot11;
                    var1 = _closure1_slot17;
                    var1 = var1.USER_DISMISS;
                    var1 = var2.bind(var3)(var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var19)(var7, var11);
            var7 = 58;
            var7 = var35[var7];
            var7 = var14.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var24 = var7.unreadItems;
            var _closure2_slot14 = var24;
            var11 = var7.readItems;
            var _closure2_slot15 = var11;
            var23 = var7.allUnreadItemsHydrated;
            var _closure2_slot16 = var23;
            var7 = var35[var1];
            var25 = var34.bind(var4)(var7);
            var20 = var25.useStateFromStores;
            var7 = _closure1_slot14;
            var19 = new Array(1);
            var19[0] = var7;
            var17 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getVersion;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var17 = var20.bind(var25)(var19, var17, var7);
            var _closure2_slot17 = var17;
            var7 = var35[var1];
            var25 = var34.bind(var4)(var7);
            var20 = var25.useStateFromStores;
            var7 = _closure1_slot14;
            var19 = new Array(1);
            var19[0] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure1_slot14;
                    var1 = var2.isFirstPageHydrated;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0011_ip = 35; continue _fun0011 }
 22:
                    var3 = _closure2_slot17;
                    var2 = 0;
                    var1 = var3 > var2;
 35:
                    var1 = !var1;
                    return var1;
                }
            };
            var19 = var20.bind(var25)(var19, var7);
            var _closure2_slot18 = var19;
            var26 = _closure1_slot5;
            var25 = var26.useEffect;
            var20 = new Array(1);
            var20[0] = var17;
            var7 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure1_slot14;
                    var2 = var3.getLoadId;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0012_ip = 84; continue _fun0012 }
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot15;
                    var2 = var1.FEED_SHOWN;
                    var1 = {};
                    var1['load_id'] = var5;
                    var5 = 'gravity';
                    var1['home_session_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var25.bind(var26)(var7, var20);
            var7 = var35[var1];
            var27 = var34.bind(var4)(var7);
            var26 = var27.useStateFromStores;
            var7 = _closure1_slot14;
            var25 = new Array(1);
            var25[0] = var7;
            var20 = function() {
                var2 = _closure1_slot14;
                var1 = var2.isRefreshing;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var29 = var26.bind(var27)(var25, var20, var7);
            var _closure2_slot19 = var29;
            var25 = _closure1_slot5;
            var20 = var25.useState;
            var7 = new Array(0);
            var20 = var20.bind(var25)(var7);
            var7 = _closure1_slot4;
            var20 = var7.bind(var4)(var20, var21);
            var7 = var20[var30];
            var _closure2_slot20 = var7;
            var20 = var20[var18];
            var _closure2_slot21 = var20;
            var20 = var35[var1];
            var26 = var34.bind(var4)(var20);
            var25 = var26.useStateFromStoresObject;
            var20 = _closure1_slot14;
            var21 = new Array(1);
            var21[0] = var20;
            var20 = function() {
                var1 = {};
                var4 = _closure1_slot14;
                var3 = var4.getLoadId;
                var3 = var3.bind(var4)();
                var1['loadId'] = var3;
                var3 = _closure1_slot14;
                var2 = var3.lastScrollEvent;
                var2 = var2.bind(var3)();
                var1['lastScrollEventTimestamp'] = var2;
                return var1;
            };
            var21 = var25.bind(var26)(var21, var20);
            var20 = var21.loadId;
            var _closure2_slot22 = var20;
            var32 = var21.lastScrollEventTimestamp;
            var _closure2_slot23 = var32;
            var25 = var7.filter;
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
            var26 = var25.bind(var7)(var21);
            var25 = var26.map;
            var21 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var1 = var1.id;
                return var1;
            };
            var25 = var25.bind(var26)(var21);
            var21 = var25.pop;
            var27 = var21.bind(var25)();
            var _closure2_slot24 = var27;
            var21 = 59;
            var21 = var35[var21];
            var21 = var14.bind(var4)(var21);
            var31 = var21.bind(var4)(var27);
            var _closure2_slot25 = var31;
            var26 = _closure1_slot5;
            var25 = var26.useEffect;
            var21 = new Array(6);
            var21[0] = var29;
            var21[1] = var32;
            var21[2] = var31;
            var21[3] = var27;
            var21[4] = var20;
            var21[5] = var19;
            var20 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot19;
                    if(var1) { _fun0013_ip = 186; continue _fun0013 }
 13:
                    var1 = _closure2_slot18;
                    if(var1) { _fun0013_ip = 186; continue _fun0013 }
 23:
                    var1 = _closure2_slot25;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0013_ip = 186; continue _fun0013 }
 36:
                    var1 = _closure2_slot24;
                    if(!(var2 != var1)) { _fun0013_ip = 186; continue _fun0013 }
 47:
                    var2 = _closure2_slot24;
                    var1 = _closure2_slot25;
                    if(!(var2 !== var1)) { _fun0013_ip = 186; continue _fun0013 }
 62:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var8 = var1.bind(var2)();
                    var1 = _closure2_slot23;
                    var3 = var8 - var1;
                    var2 = _closure1_slot21;
                    if(!(var3 > var2)) { _fun0013_ip = 186; continue _fun0013 }
 98:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 60;
                    var2 = var6[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var2 = var7.gravityScrollEvent;
                    var2 = var2.bind(var7)(var8);
                    var2 = 16;
                    var2 = var6[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot15;
                    var2 = var1.HOME_FIRST_SCROLL_STARTED;
                    var1 = {};
                    var6 = 'gravity';
                    var1['home_session_id'] = var6;
                    var5 = _closure2_slot22;
                    var1['load_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 186:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var25.bind(var26)(var20, var21);
            var26 = _closure1_slot5;
            var25 = var26.useCallback;
            var21 = new Array(1);
            var21[0] = var17;
            var20 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                    if(!var2) { _fun0014_ip = 56; continue _fun0014 }
 42:
                    var4 = _closure2_slot6;
                    var2 = true;
                    var2 = var4.bind(var1)(var2);
 56:
                    var2 = var6.length;
                    var8 = 0;
                    if(!(var8 !== var2)) { _fun0014_ip = 325; continue _fun0014 }
 70:
                    var4 = _closure2_slot21;
                    var4 = var4.bind(var1)(var6);
                    var10 = new Array(0);
                    _closure3_slot1 = var10;
                    var5 = var6.forEach;
                    var4 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = 0;
                            var2 = var3[var2];
                            var4 = var2.item;
                            var2 = var4.data;
                            var3 = var2.kind;
                            var2 = 'channelSummary';
                            if(!(var2 === var3)) { _fun0015_ip = 93; continue _fun0015 }
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
                    var5 = _closure1_slot35;
                    var7 = var5.bind(var1)(var6);
                    var5 = global;
                    var9 = var5.Date;
                    var5 = var9.now;
                    var5 = var5.bind(var9)();
                    var11 = var7.length;
                    var9 = 1;
                    var12 = var11 - var9;
                    var11 = 61;
                    var9 = null;
                    if(!(var12 >= var8)) { _fun0014_ip = 242; continue _fun0014 }
 157:
                    var18 = var7[var12];
                    var13 = var5;
                    if(!(var9 != var18)) { _fun0014_ip = 232; continue _fun0014 }
 168:
                    var16 = var10.push;
                    var15 = {};
                    var14 = var18.id;
                    var15['id'] = var14;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var11];
                    var17 = var17.bind(var1)(var14);
                    var14 = var17.typeToString;
                    var14 = var14.bind(var17)(var18);
                    var15['type'] = var14;
                    var17 = parseFloat(var5);
                    var13 = var17 + 1;
                    var15['timestamp'] = var17;
                    var15 = var16.bind(var10)(var15);
 232:
                    var12 = var12 - 1;
                    var5 = var13;
                    if(var12 >= var8) { _fun0014_ip = 157; continue _fun0014 }
 242:
                    var5 = var10.length;
                    if(!(var5 > var8)) { _fun0014_ip = 285; continue _fun0014 }
 251:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 60;
                    var5 = var9[var5];
                    var9 = var8.bind(var1)(var5);
                    var8 = var9.ackGravityItems;
                    var5 = true;
                    var5 = var8.bind(var9)(var10, var5);
 285:
                    var5 = _closure1_slot23;
                    var4 = var7.map;
                    var3 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = var4.id;
                        var1['id'] = var2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 61;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var21 = var4.bind(var7)(var3);
                    var20 = _closure2_slot17;
                    var19 = 'batch';
                    var23 = undefined;
                    var22 = var6;
                    var2 = var23[var5](var22, var21, var20, var19, var18);
 325:
                    return var1;
                }
            };
            var27 = var25.bind(var26)(var20, var21);
            var _closure2_slot26 = var27;
            var26 = _closure1_slot5;
            var25 = var26.useCallback;
            var21 = new Array(1);
            var21[0] = var17;
            var20 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.viewableItems;
                    var2 = var6.length;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0016_ip = 77; continue _fun0016 }
 20:
                    var2 = _closure1_slot35;
                    var5 = undefined;
                    var3 = var2.bind(var5)(var6);
                    var4 = _closure1_slot23;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var2 = var4.id;
                        var1['id'] = var2;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 61;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.typeToString;
                        var2 = var2.bind(var3)(var4);
                        var1['type'] = var2;
                        return var1;
                    };
                    var9 = var2.bind(var3)(var1);
                    var8 = _closure2_slot17;
                    var7 = 'long';
                    var11 = undefined;
                    var10 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var25.bind(var26)(var20, var21);
            var _closure2_slot27 = var20;
            var26 = _closure1_slot5;
            var25 = var26.useMemo;
            var21 = new Array(2);
            var21[0] = var27;
            var21[1] = var20;
            var20 = function() {
                var2 = {};
                var1 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
                var2['viewabilityConfig'] = var1;
                var1 = _closure2_slot26;
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
                var2['viewabilityConfig'] = var4;
                var3 = _closure2_slot27;
                var2['onViewableItemsChanged'] = var3;
                var1[1] = var2;
                return var1;
            };
            var20 = var25.bind(var26)(var20, var21);
            var26 = _closure1_slot5;
            var25 = var26.useRef;
            var21 = null;
            var27 = var25.bind(var26)(var21);
            var _closure2_slot28 = var27;
            var26 = _closure1_slot5;
            var25 = var26.useRef;
            var21 = {};
            var31 = function scrollToTop() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure2_slot28;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0017_ip = 50; continue _fun0017 }
 18:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var5 = 0;
                    var1['offset'] = var5;
                    var4 = _closure2_slot4;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var21['scrollToTop'] = var31;
            var25 = var25.bind(var26)(var21);
            var _closure2_slot29 = var25;
            var5 = var35[var5];
            var21 = var34.bind(var4)(var5);
            var5 = var21.useScrollToTop;
            var5 = var5.bind(var21)(var25);
            var5 = var35[var1];
            var26 = var34.bind(var4)(var5);
            var25 = var26.useStateFromStores;
            var5 = _closure1_slot13;
            var21 = new Array(1);
            var21[0] = var5;
            var5 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getDoubleTapBehavior;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var25.bind(var26)(var21, var5);
            var _closure2_slot30 = var32;
            var5 = 32;
            var21 = var35[var5];
            var25 = var34.bind(var4)(var21);
            var21 = var25.useNavigation;
            var21 = var21.bind(var25)();
            var _closure2_slot31 = var21;
            var31 = _closure1_slot5;
            var26 = var31.useEffect;
            var25 = new Array(4);
            var25[0] = var32;
            var25[1] = var9;
            var25[2] = var21;
            var25[3] = var15;
            var21 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0018_ip = 57; continue _fun0018 }
 12:
                    var5 = _closure2_slot30;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 61;
                    var4 = var4[var7];
                    var6 = undefined;
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.GravityICYMIDoubleTapBehavior;
                    var4 = var4.DEFAULT;
                    if(!(var5 === var4)) { _fun0018_ip = 83; continue _fun0018 }
 57:
                    var5 = _closure2_slot29;
                    var4 = {};
                    var8 = function scrollToTop() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var1 = _closure2_slot28;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0019_ip = 50; continue _fun0019 }
 18:
                            var2 = var3.scrollToOffset;
                            var1 = {};
                            var5 = 0;
                            var1['offset'] = var5;
                            var4 = _closure2_slot4;
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
                    _fun0018_ip = 170; continue _fun0018;
 83:
                    var4 = _closure2_slot30;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.GravityICYMIDoubleTapBehavior;
                    var2 = var2.NOTIFICATIONS;
                    if(!(var4 !== var2)) { _fun0018_ip = 146; continue _fun0018 }
 120:
                    var4 = _closure2_slot29;
                    var2 = {};
                    var5 = function scrollToTop() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 62;
                        var4 = var2[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var4);
                        var6 = var7.pushLazy;
                        var4 = _closure1_slot0;
                        var3 = 30;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 63;
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
                    _fun0018_ip = 170; continue _fun0018;
 146:
                    var2 = _closure2_slot29;
                    var1 = {};
                    var3 = function scrollToTop() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.trackItemInteraction;
                        var3 = 'icymi_button';
                        var2 = 'press_notification_button';
                        var2 = var4.bind(var5)(var3, var3, var2);
                        var4 = _closure2_slot31;
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
            var21 = var26.bind(var31)(var21, var25);
            var26 = _closure1_slot5;
            var25 = var26.useCallback;
            var21 = new Array(2);
            var21[0] = var27;
            var21[1] = var15;
            var15 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var1 = _closure2_slot28;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0020_ip = 50; continue _fun0020 }
 18:
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var5 = 0;
                    var1['offset'] = var5;
                    var4 = _closure2_slot4;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var25.bind(var26)(var15, var21);
            var _closure2_slot32 = var15;
            var25 = _closure1_slot5;
            var21 = var25.useEffect;
            var15 = new Array(1);
            var15[0] = var12;
            var12 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0021_ip = 72; continue _fun0021 }
 10:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 64;
                    var1 = var6[var1];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var1);
                    var1 = var7.setGravitySelectedSummary;
                    var4 = null;
                    var1 = var1.bind(var7)(var4, var4);
                    var1 = 60;
                    var1 = var6[var1];
                    var3 = var5.bind(var3)(var1);
                    var1 = var3.setGravitySelectedChannel;
                    var1 = var1.bind(var3)(var4);
 72:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 60;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.setTabFocused;
                    var2 = _closure2_slot8;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12 = var21.bind(var25)(var12, var15);
            var25 = _closure1_slot5;
            var21 = var25.useEffect;
            var15 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 60;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openICYMITab;
                var2 = var2.bind(var3)();
                return var1;
            };
            var12 = new Array(0);
            var12 = var21.bind(var25)(var15, var12);
            var12 = 65;
            var12 = var35[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.bind(var4)();
            var26 = var12.showDot;
            var _closure2_slot33 = var26;
            var12 = var35[var1];
            var31 = var34.bind(var4)(var12);
            var25 = var31.useStateFromStores;
            var12 = _closure1_slot14;
            var21 = new Array(1);
            var21[0] = var12;
            var15 = function() {
                var2 = _closure1_slot14;
                var1 = var2.notificationItem;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = new Array(0);
            var39 = var25.bind(var31)(var21, var15, var12);
            var _closure2_slot34 = var39;
            var25 = _closure1_slot5;
            var21 = var25.useCallback;
            var15 = _closure1_slot3;
            var12 = function* () {
                var1 = function* anon_0_() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0022_ip = 277; continue _fun0022 }
 10:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 16;
                        var2 = var4[var2];
                        var5 = undefined;
                        var7 = var3.bind(var5)(var2);
                        var4 = var7.track;
                        var2 = _closure1_slot15;
                        var3 = var2.FEED_SHOWN;
                        var2 = {};
                        var9 = _closure1_slot14;
                        var8 = var9.getLoadId;
                        var8 = var8.bind(var9)();
                        var2['load_id'] = var8;
                        var8 = 'gravity_refresh';
                        var2['home_session_id'] = var8;
                        var9 = _closure2_slot33;
                        var8 = 'NoDotShown';
                        if(!var9) { _fun0022_ip = 104; continue _fun0022 }
 98:
                        var8 = 'DotShown';
 104:
                        var2['variant'] = var8;
                        var2 = var4.bind(var7)(var3, var2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 60;
                        var2 = var2[var8];
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.fetchDehydrated;
                        var2 = {};
                        var7 = true;
                        var2['isReloading'] = var7;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=158);
 156:
                        return var2;
 158:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0022_ip = 274; continue _fun0022 }
 164:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.reloadICYMITab;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address=195);
 193:
                        return var3;
 195:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0022_ip = 271; continue _fun0022 }
 201:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var7 = var7.bind(var5)(var4);
                        var4 = var7.getGuildChannelScores;
                        var4 = var4.bind(var7)();
                        SaveGenerator(address=232);
 230:
                        return var4;
 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0022_ip = 268; continue _fun0022 }
 238:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.getRecommendedGuilds;
                        var6 = var6.bind(var7)();
                        return var5;
 268:
                        return var4;
 271:
                        return var3;
 274:
                        return var2;
 277:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var12);
            var12 = new Array(1);
            var12[0] = var26;
            var32 = var21.bind(var25)(var15, var12);
            var _closure2_slot35 = var32;
            var12 = 66;
            var12 = var35[var12];
            var15 = var34.bind(var4)(var12);
            var12 = var15.useEligibleActiveVoiceChannelId;
            var31 = var12.bind(var15)();
            var _closure2_slot36 = var31;
            var12 = 67;
            var12 = var35[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.bind(var4)();
            var25 = var12.activeConvos;
            var _closure2_slot37 = var25;
            var26 = var12.loading;
            var _closure2_slot38 = var26;
            var21 = _closure1_slot5;
            var15 = var21.useMemo;
            var12 = new Array(12);
            var12[0] = var19;
            var12[1] = var39;
            var12[2] = var9;
            var12[3] = var8;
            var12[4] = var37;
            var12[5] = var31;
            var12[6] = var26;
            var12[7] = var25;
            var12[8] = var24;
            var12[9] = var23;
            var12[10] = var11;
            var12[11] = var10;
            var11 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = new Array(0);
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0023_ip = 58; continue _fun0023 }
 20:
                    var5 = var2.push;
                    var4 = {'id': 'search', 'timestamp': 0, 'unread': false};
                    var7 = 'search';
                    var6 = {};
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 58:
                    var4 = _closure2_slot18;
                    if(!var4) { _fun0023_ip = 75; continue _fun0023 }
 65:
                    var6 = _closure2_slot34;
                    var5 = null;
                    var4 = var5 != var6;
 75:
                    if(!var4) { _fun0023_ip = 128; continue _fun0023 }
 78:
                    var5 = _closure2_slot34;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 61;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ICYMIItemTypes;
                    var5 = var5.CUSTOM_STATUS;
                    var4 = var6 === var5;
 128:
                    if(!var4) { _fun0023_ip = 261; continue _fun0023 }
 134:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure2_slot34;
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
                    var8 = 46;
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
 261:
                    var4 = _closure2_slot18;
                    if(var4) { _fun0023_ip = 656; continue _fun0023 }
 271:
                    var4 = _closure2_slot7;
                    if(!var4) { _fun0023_ip = 293; continue _fun0023 }
 278:
                    var5 = _closure2_slot9;
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
 293:
                    if(!var4) { _fun0023_ip = 383; continue _fun0023 }
 296:
                    var5 = var2.push;
                    var4 = {'id': 'mentions', 'timestamp': 0, 'unread': true};
                    var7 = 'mentions';
                    var6 = {};
                    var6['kind'] = var7;
                    var7 = _closure2_slot9;
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
 383:
                    var4 = _closure2_slot12;
                    if(!var4) { _fun0023_ip = 430; continue _fun0023 }
 390:
                    var5 = var2.push;
                    var4 = {'id': 'edit_custom_status', 'timestamp': 0, 'unread': false};
                    var6 = {};
                    var7 = 'editCustomStatus';
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 430:
                    var5 = _closure2_slot36;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0023_ip = 503; continue _fun0023 }
 440:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure2_slot36;
                    var4['id'] = var6;
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var4['timestamp'] = var6;
                    var6 = true;
                    var4['unread'] = var6;
                    var6 = {};
                    var7 = 'voice';
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 503:
                    var4 = _closure2_slot38;
                    var4 = !var4;
                    if(!var4) { _fun0023_ip = 528; continue _fun0023 }
 513:
                    var5 = _closure2_slot37;
                    var6 = var5.length;
                    var5 = 0;
                    var4 = var6 > var5;
 528:
                    if(!var4) { _fun0023_ip = 552; continue _fun0023 }
 531:
                    var6 = _closure2_slot37;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        var4 = arg1;
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var5 = var4.id;
                        var1['id'] = var5;
                        var5 = global;
                        var6 = var5.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var1['timestamp'] = var5;
                        var5 = {};
                        var6 = 'channelSummary';
                        var5['kind'] = var6;
                        var6 = var4.summary;
                        var5['topic'] = var6;
                        var1['data'] = var5;
                        var4 = var4.score;
                        var1['score'] = var4;
                        var4 = true;
                        var1['unread'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
 552:
                    var6 = _closure2_slot14;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure1_slot27;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var4);
                            if(var2) { _fun0024_ip = 37; continue _fun0024 }
 20:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 37:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot16;
                    if(!var4) { _fun0023_ip = 618; continue _fun0023 }
 580:
                    var5 = var2.push;
                    var4 = {'id': 'end', 'timestamp': 0, 'unread': false};
                    var7 = 'end';
                    var6 = {};
                    var6['kind'] = var7;
                    var4['data'] = var6;
                    var4 = var5.bind(var2)(var4);
 618:
                    var4 = _closure2_slot15;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0023_ip = 694; continue _fun0023 }
 633:
                    var4 = _closure2_slot15;
                    var3 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                            var4 = arg1;
                            var2 = _closure1_slot27;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var4);
                            if(var2) { _fun0025_ip = 37; continue _fun0025 }
 20:
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 37:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    _fun0023_ip = 694; continue _fun0023;
 656:
                    var3 = var2.push;
                    var1 = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    var5 = 'loading';
                    var4 = {};
                    var4['kind'] = var5;
                    var1['data'] = var4;
                    var1 = var3.bind(var2)(var1);
 694:
                    var1 = {};
                    var1['data'] = var2;
                    var2 = new Array(0);
                    var1['stickyHeaderIndices'] = var2;
                    return var1;
                }
            };
            var11 = var15.bind(var21)(var11, var12);
            var25 = var11.data;
            var _closure2_slot39 = var25;
            var21 = var11.stickyHeaderIndices;
            var3 = var6 - var3;
            var6 = var3 - var5;
            var3 = 68;
            var3 = var35[var3];
            var5 = var34.bind(var4)(var3);
            var3 = var5.useMainTabsHeight;
            var5 = var3.bind(var5)();
            var3 = 24;
            var3 = var6 - var3;
            var39 = var3 - var5;
            var _closure2_slot40 = var39;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(7);
            var3[0] = var10;
            var3[1] = var9;
            var8 = var8.length;
            var3[2] = var8;
            var8 = var28.headerBorder;
            var3[3] = var8;
            var3[4] = var7;
            var3[5] = var33;
            var3[6] = var2;
            var2 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var _closure3_slot0 = var7;
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'generatedCandidate';
                    if(!(var1 !== var2)) { _fun0026_ip = 1450; continue _fun0026 }
 37:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'search';
                    if(!(var1 !== var2)) { _fun0026_ip = 1326; continue _fun0026 }
 58:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'channelSummary';
                    if(!(var1 !== var2)) { _fun0026_ip = 1271; continue _fun0026 }
 81:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'message';
                    if(!(var1 !== var2)) { _fun0026_ip = 898; continue _fun0026 }
 102:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'contentInventory';
                    if(!(var1 !== var2)) { _fun0026_ip = 807; continue _fun0026 }
 125:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'voice';
                    if(!(var1 !== var2)) { _fun0026_ip = 759; continue _fun0026 }
 146:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'loading';
                    if(!(var1 !== var2)) { _fun0026_ip = 714; continue _fun0026 }
 167:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'end';
                    if(!(var1 !== var2)) { _fun0026_ip = 663; continue _fun0026 }
 188:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'guildEvent';
                    if(!(var1 !== var2)) { _fun0026_ip = 608; continue _fun0026 }
 209:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'recommendedGuilds';
                    if(!(var1 !== var2)) { _fun0026_ip = 563; continue _fun0026 }
 232:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'mentions';
                    if(!(var1 !== var2)) { _fun0026_ip = 508; continue _fun0026 }
 253:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'icymiHeader';
                    if(!(var1 !== var2)) { _fun0026_ip = 469; continue _fun0026 }
 276:
                    var1 = var7.data;
                    var2 = var1.kind;
                    var1 = 'editCustomStatus';
                    if(!(var1 !== var2)) { _fun0026_ip = 430; continue _fun0026 }
 299:
                    var1 = var7.data;
                    var3 = var1.kind;
                    var9 = null;
                    var2 = 'forumThread';
                    var1 = null;
                    if(!(var2 === var3)) { _fun0026_ip = 428; continue _fun0026 }
 323:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 82;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ICYMIForumThreadRow;
                    var2 = {};
                    var6 = var7.data;
                    var6 = var6.message;
                    var2['message'] = var6;
                    var6 = var7.data;
                    var6 = var6.threadChannel;
                    var2['channel'] = var6;
                    var11 = _closure2_slot20;
                    var10 = var11.find;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var10.bind(var11)(var6);
                    var6 = var9 != var6;
                    var2['visible'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 428:
                    _fun0026_ip = 467; continue _fun0026;
 430:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 81;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
 467:
                    _fun0026_ip = 506; continue _fun0026;
 469:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 80;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
 506:
                    _fun0026_ip = 561; continue _fun0026;
 508:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 79;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = var7.data;
                    var6 = var6.messages;
                    var2['messages'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 561:
                    _fun0026_ip = 606; continue _fun0026;
 563:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 78;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ICYMIServerRecommendationRow;
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
 606:
                    _fun0026_ip = 661; continue _fun0026;
 608:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 77;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = var7.data;
                    var6 = var6.eventId;
                    var2['eventId'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 661:
                    _fun0026_ip = 712; continue _fun0026;
 663:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 76;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['visible'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 712:
                    _fun0026_ip = 757; continue _fun0026;
 714:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 75;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ICYMILoading;
                    var2 = {};
                    var1 = var5.bind(var4)(var3, var2);
 757:
                    _fun0026_ip = 805; continue _fun0026;
 759:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 66;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = var7.id;
                    var2['channelId'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 805:
                    _fun0026_ip = 893; continue _fun0026;
 807:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 74;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var10 = _closure2_slot20;
                    var9 = var10.find;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var9.bind(var10)(var6);
                    var6 = null;
                    var6 = var6 != var9;
                    var2['visible'] = var6;
                    var6 = var7.data;
                    var6 = var6.content;
                    var2['content'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 893:
                    _fun0026_ip = 1269; continue _fun0026;
 898:
                    var4 = var7.channelType;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 47;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.ChannelTypes;
                    var2 = var2.GUILD_ANNOUNCEMENT;
                    if(!(var4 !== var2)) { _fun0026_ip = 1174; continue _fun0026 }
 948:
                    var2 = var7.data;
                    var4 = var2.messageContext;
                    var11 = null;
                    var5 = var11 == var4;
                    var2 = undefined;
                    if(var5) { _fun0026_ip = 976; continue _fun0026 }
 970:
                    var2 = var4.external_content_application_id;
 976:
                    if(!(var11 == var2)) { _fun0026_ip = 1077; continue _fun0026 }
 980:
                    var5 = _closure1_slot18;
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 73;
                    var2 = var9[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var9 = var7.data;
                    var9 = var9.message;
                    var2['message'] = var9;
                    var9 = var7.data;
                    var9 = var9.messageContext;
                    var2['messageContext'] = var9;
                    var12 = _closure2_slot20;
                    var10 = var12.find;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var10.bind(var12)(var9);
                    var9 = var11 != var9;
                    var2['visible'] = var9;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0026_ip = 1172; continue _fun0026;
 1077:
                    var9 = _closure1_slot18;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 72;
                    var4 = var10[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = {};
                    var10 = var7.data;
                    var10 = var10.message;
                    var4['message'] = var10;
                    var10 = var7.data;
                    var10 = var10.messageContext;
                    var4['messageContext'] = var10;
                    var13 = _closure2_slot20;
                    var12 = var13.find;
                    var10 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.item;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var10 = var12.bind(var13)(var10);
                    var10 = var11 != var10;
                    var4['visible'] = var10;
                    var2 = var9.bind(var6)(var5, var4);
 1172:
                    _fun0026_ip = 1266; continue _fun0026;
 1174:
                    var5 = _closure1_slot18;
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 71;
                    var3 = var9[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = {};
                    var9 = var7.unread;
                    var3['unread'] = var9;
                    var9 = var7.data;
                    var9 = var9.message;
                    var3['message'] = var9;
                    var10 = _closure2_slot20;
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
                    var3['visible'] = var8;
                    var2 = var5.bind(var6)(var4, var3);
 1266:
                    var1 = var2;
 1269:
                    _fun0026_ip = 1324; continue _fun0026;
 1271:
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 70;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = var7.data;
                    var6 = var6.topic;
                    var2['topic'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 1324:
                    _fun0026_ip = 1448; continue _fun0026;
 1326:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!var3) { _fun0026_ip = 1445; continue _fun0026 }
 1338:
                    var6 = _closure1_slot19;
                    var5 = _closure1_slot20;
                    var4 = {};
                    var12 = _closure1_slot18;
                    var11 = _closure1_slot28;
                    var3 = undefined;
                    var8 = {};
                    var11 = var12.bind(var3)(var11, var8);
                    var8 = new Array(2);
                    var8[0] = var11;
                    var11 = _closure2_slot7;
                    if(!var11) { _fun0026_ip = 1401; continue _fun0026 }
 1384:
                    var11 = _closure2_slot9;
                    var12 = var11.length;
                    var11 = 0;
                    var9 = null;
                    if(!(var11 === var12)) { _fun0026_ip = 1431; continue _fun0026 }
 1401:
                    var12 = _closure1_slot18;
                    var11 = _closure1_slot6;
                    var10 = {};
                    var13 = _closure2_slot0;
                    var13 = var13.headerBorder;
                    var10['style'] = var13;
                    var9 = var12.bind(var3)(var11, var10);
 1431:
                    var8[1] = var9;
                    var4['children'] = var8;
                    var2 = var6.bind(var3)(var5, var4);
 1445:
                    var1 = var2;
 1448:
                    _fun0026_ip = 1516; continue _fun0026;
 1450:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!var3) { _fun0026_ip = 1513; continue _fun0026 }
 1462:
                    var6 = _closure1_slot18;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 69;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var7 = var7.data;
                    var7 = var7.item;
                    var3['item'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
 1513:
                    var1 = var2;
 1516:
                    return var1;
                }
            };
            var24 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = function() {
                var1 = {};
                var2 = 'transparent';
                var1['backgroundColor'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var26 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var39;
            var2 = var25.length;
            var3[1] = var2;
            var3[2] = var38;
            var2 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var1 = _closure2_slot39;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0027_ip = 44; continue _fun0027 }
 23:
                    var2 = {};
                    var4 = _closure2_slot40;
                    var2['height'] = var4;
                    var3 = _closure2_slot1;
                    var2['width'] = var3;
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var23 = var5.bind(var6)(var2, var3);
            var2 = 83;
            var2 = var35[var2];
            var3 = var34.bind(var4)(var2);
            var2 = var3.useClientThemesOverride;
            var15 = var2.bind(var3)();
            var1 = var35[var1];
            var6 = var34.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                var2 = _closure1_slot14;
                var1 = var2.hasNewContent;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var31 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot19;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var28.containerInPanels;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var28.containerBackground;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot26;
            var5 = {};
            var5['numUnreadMentions'] = var30;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot18;
            var6 = 84;
            var6 = var35[var6];
            var6 = var34.bind(var4)(var6);
            var6 = var6.ICYMIContext;
            var7 = var6.Provider;
            var6 = {};
            var9 = {};
            var9['width'] = var38;
            var6['value'] = var9;
            var11 = _closure1_slot19;
            var10 = _closure1_slot6;
            var9 = {};
            var37 = var28.flashListWrapper;
            var12 = new Array(3);
            var12[0] = var37;
            var37 = {};
            var37['height'] = var39;
            var37['width'] = var38;
            var38 = 'auto';
            var37['marginHorizontal'] = var38;
            var12[1] = var37;
            var12[2] = var15;
            var9['style'] = var12;
            var15 = _closure1_slot18;
            var12 = 85;
            var12 = var35[var12];
            var14 = var14.bind(var4)(var12);
            var12 = {};
            var36 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackItemInteraction;
                var3 = 'refresh_button';
                var2 = 'press_refresh_button';
                var2 = var4.bind(var5)(var3, var3, var2);
                var3 = _closure2_slot35;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot32;
                var2 = var2.bind(var1)();
                return var1;
            };
            var12['onPress'] = var36;
            var12['isRefreshing'] = var29;
            var12['newUnreadMentions'] = var16;
            var14 = var15.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var16 = _closure1_slot18;
            var14 = 86;
            var14 = var35[var14];
            var14 = var34.bind(var4)(var14);
            var15 = var14.FlashList;
            var14 = {};
            var14['ref'] = var27;
            var27 = !var19;
            var14['scrollEnabled'] = var27;
            var27 = {};
            var27['endVisible'] = var33;
            var14['extraData'] = var27;
            var14['contentContainerStyle'] = var26;
            var26 = 25;
            var27 = var35[var26];
            var27 = var34.bind(var4)(var27);
            var33 = var27.intl;
            var27 = var33.string;
            var26 = var35[var26];
            var26 = var34.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.OIgYlZ;
            var26 = var27.bind(var33)(var26);
            var14['accessibilityLabel'] = var26;
            var14['data'] = var25;
            var14['refreshing'] = var29;
            var27 = _closure1_slot18;
            var26 = _closure1_slot7;
            var25 = {};
            var25['onRefresh'] = var32;
            var25['refreshing'] = var29;
            var28 = var28.refreshing;
            var28 = var28.color;
            var25['tintColor'] = var28;
            var28 = {};
            var29 = var18;
            if(!var31) { _fun0008_ip = 2326; continue _fun0008 }
 2324:
            var29 = 0;
 2326:
            var28['opacity'] = var29;
            var25['style'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var14['refreshControl'] = var25;
            var25 = 3;
            var14['onEndReachedThreshold'] = var25;
            var25 = _closure1_slot33;
            var14['onEndReached'] = var25;
            var25 = _closure1_slot37;
            var14['keyExtractor'] = var25;
            var14['renderItem'] = var24;
            var24 = 200;
            var14['estimatedItemSize'] = var24;
            var14['estimatedListSize'] = var23;
            var23 = _closure1_slot34;
            var14['getItemType'] = var23;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 87;
            var22 = var24[var22];
            var23 = var23.bind(var4)(var22);
            var22 = var23.isAndroid;
            var22 = var22.bind(var23)();
            var22 = 100;
            var14['drawDistance'] = var22;
            var14['stickyHeaderIndices'] = var21;
            var14['viewabilityConfigCallbackPairs'] = var20;
            if(var19) { _fun0008_ip = 2451; continue _fun0008 }
 2448:
            var18 = var17;
 2451:
            var13 = var13.HermesInternal;
            var17 = var13.concat;
            var13 = 'Version-';
            var13 = var17.bind(var13)(var18);
            var13 = var16.bind(var4)(var15, var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function keyExtractor(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot37 = var1;
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
    var7 = var12.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var15 = 1;
    var7 = var6[var15];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var8 = var6[var7];
    var7 = native4;
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
    var7 = var12.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var14 = var7.ICYMI_MARGIN;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticEvents;
    var _closure1_slot15 = var9;
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
    var7 = var12.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var9 * var7;
    var _closure1_slot21 = var7;
    var9 = var4.Set;
    var4 = var9.prototype;
    var7 = Object.create(var4, {constructor: {value: var9}});
    var19 = ['end', 'loading', 'mentions', 'editCustomStatus', 'icymiHeader', 'recommendedGuilds', 'search'];
    var20 = var7;
    var4 = new var20[var9](var19, var18);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot22 = var4;
    var4 = function trackFeedItemSeen(arg1, arg2, arg3, arg4) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var7 = arg1;
            var8 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var3 = 'batch';
            var2 = arg4;
            if(!(var3 !== var2)) { _fun0028_ip = 63; continue _fun0028 }
 51:
            var2 = _closure1_slot15;
            var3 = var2.FEED_ITEM_SEEN_LONG;
            _fun0028_ip = 73; continue _fun0028;
 63:
            var2 = _closure1_slot15;
            var3 = var2.FEED_ITEM_SEEN_BATCH;
 73:
            var2 = {};
            var10 = _closure1_slot14;
            var9 = var10.getLoadId;
            var9 = var9.bind(var10)();
            var2['load_id'] = var9;
            var9 = 'gravity';
            var2['home_session_id'] = var9;
            var10 = var7.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var1 = var1.id;
                return var1;
            };
            var9 = var10.bind(var7)(var9);
            var2['feed_item_ids'] = var9;
            var10 = var7.map;
            var9 = function(arg1) {
                var3 = _closure1_slot34;
                var1 = arg1;
                var2 = var1.item;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = var10.bind(var7)(var9);
            var2['feed_item_types'] = var9;
            var7 = var7.length;
            var2['num_items'] = var7;
            var9 = var8.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var9.bind(var8)(var7);
            var2['all_feed_item_ids'] = var7;
            var9 = var8.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var7 = var9.bind(var8)(var7);
            var2['all_feed_item_types'] = var7;
            var7 = var8.length;
            var2['num_all_items'] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['all_feed_item_indices'] = var6;
            var6 = arg3;
            var2['feed_version'] = var6;
            var6 = 3;
            var2['version'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 17;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyles;
    var7 = {};
    var11 = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
    var7['container'] = var11;
    var13 = {};
    var11 = 18;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BASE_TERTIARY;
    var13['backgroundColor'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13['paddingHorizontal'] = var16;
    var16 = 'hidden';
    var13['overflow'] = var16;
    var13['flex'] = var15;
    var7['containerOuterTablet'] = var13;
    var13 = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1, 'overflow': 'hidden'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var13['borderTopLeftRadius'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var13['borderTopRightRadius'] = var15;
    var7['containerInPanels'] = var13;
    var13 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var13['backgroundColor'] = var15;
    var7['containerBackground'] = var13;
    var13 = {'backgroundColor': null, 'minHeight': 2, 'flex': 1};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var13['backgroundColor'] = var15;
    var7['flashListWrapper'] = var13;
    var13 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_NORMAL;
    var13['color'] = var15;
    var7['refreshing'] = var13;
    var13 = {'backgroundColor': null, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var13['backgroundColor'] = var15;
    var7['header'] = var13;
    var13 = {};
    var13['marginRight'] = var14;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var13['height'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var13['width'] = var15;
    var15 = 'center';
    var13['alignItems'] = var15;
    var13['justifyContent'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var13['borderRadius'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    var13['backgroundColor'] = var15;
    var7['headerClose'] = var13;
    var13 = {'height': 56, 'marginHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13['marginHorizontal'] = var14;
    var7['headerTitle'] = var13;
    var13 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var7['headerText'] = var13;
    var13 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var13['gap'] = var14;
    var7['headerActions'] = var13;
    var13 = {'height': 18, 'width': 18};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var13['borderRadius'] = var14;
    var7['notificationBadge'] = var13;
    var13 = {'flex': 1, 'justifyContent': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_96;
    var13['paddingTop'] = var14;
    var7['loading'] = var13;
    var13 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': null, 'height': 1};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var13['backgroundColor'] = var14;
    var7['headerBorder'] = var13;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot24 = var7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingVertical'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['paddingHorizontal'] = var11;
    var4['searchBarContainer'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot25 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var19 = var1.numUnreadMentions;
            var1 = _closure1_slot24;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 40;
            var1 = var14[var1];
            var1 = var7.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var1 = 37;
            var1 = var14[var1];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useIsNotificationsTabMerged;
            var1 = {};
            var5 = 'ICYMIHeader';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var15 = var1.enabled;
            var3 = _closure1_slot19;
            var1 = 41;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = !var11;
            var1['top'] = var5;
            var5 = var9.header;
            var1['style'] = var5;
            var8 = _closure1_slot18;
            var5 = 42;
            var5 = var14[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            var10 = {};
            var12 = 43;
            var16 = var14[var12];
            var16 = var13.bind(var4)(var16);
            var16 = var16.OverlayOpacity;
            var16 = var16.LEVEL_7;
            var10['dark'] = var16;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.OverlayOpacity;
            var12 = var12.LEVEL_8;
            var10['light'] = var12;
            var5['mixAmount'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var10 = _closure1_slot19;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var9.headerTitle;
            var7['style'] = var12;
            var12 = null;
            if(!var11) { _fun0029_ip = 450; continue _fun0029 }
 264:
            var14 = _closure1_slot18;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 39;
            var11 = var22[var11];
            var11 = var17.bind(var4)(var11);
            var13 = var11.PressableOpacity;
            var11 = {};
            var16 = var9.headerClose;
            var11['style'] = var16;
            var16 = 25;
            var18 = var22[var16];
            var18 = var17.bind(var4)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.13/7kZ;
            var16 = var18.bind(var20)(var16);
            var11['accessibilityLabel'] = var16;
            var16 = 44;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.goBack;
            var11['onPress'] = var16;
            var18 = _closure1_slot18;
            var16 = 45;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.XSmallIcon;
            var16 = {};
            var21 = _closure1_slot1;
            var20 = 18;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.WHITE;
            var16['color'] = var20;
            var16 = var18.bind(var4)(var17, var16);
            var11['children'] = var16;
            var12 = var14.bind(var4)(var13, var11);
 450:
            var11 = new Array(3);
            var11[0] = var12;
            var14 = _closure1_slot18;
            var13 = _closure1_slot32;
            var12 = {};
            var12['isPressable'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var14 = _closure1_slot19;
            var13 = _closure1_slot6;
            var12 = {};
            var16 = var9.headerActions;
            var12['style'] = var16;
            var18 = _closure1_slot18;
            if(var15) { _fun0029_ip = 524; continue _fun0029 }
 510:
            var16 = _closure1_slot31;
            var15 = {};
            var16 = var18.bind(var4)(var16, var15);
            _fun0029_ip = 541; continue _fun0029;
 524:
            var17 = _closure1_slot30;
            var15 = {};
            var15['numUnreadMentions'] = var19;
            var16 = var18.bind(var4)(var17, var15);
 541:
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot18;
            var17 = _closure1_slot29;
            var16 = {};
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[2] = var12;
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
    var _closure1_slot26 = var4;
    var4 = 90;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMITab() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 51;
            var5 = var6[var1];
            var4 = undefined;
            var9 = var3.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot9;
                var1 = var1.gradientPreset;
                return var1;
            };
            var13 = var8.bind(var9)(var7, var5);
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var5.bind(var7)(var3, var1);
            var5 = _closure1_slot1;
            var1 = 40;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot0 = var1;
            var3 = 50;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var7 = var3.top;
            var _closure2_slot1 = var7;
            var3 = _closure1_slot24;
            var8 = var3.bind(var4)();
            var _closure2_slot2 = var8;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var1;
            var3[2] = var7;
            var2 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    if(!var2) { _fun0031_ip = 48; continue _fun0031 }
 12:
                    var2 = _closure2_slot2;
                    var3 = var2.containerOuterTablet;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot1;
                    var3['paddingTop'] = var4;
                    var2[1] = var3;
                    var1 = var2;
 48:
                    return var1;
                }
            };
            var8 = var5.bind(var6)(var2, var3);
            if(var1) { _fun0030_ip = 210; continue _fun0030 }
 198:
            var1 = _closure1_slot5;
            var7 = var1.Fragment;
            _fun0030_ip = 214; continue _fun0030;
 210:
            var7 = _closure1_slot6;
 214:
            var3 = _closure1_slot18;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 88;
            var1 = var14[var1];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot19;
            var5 = {};
            var5['style'] = var8;
            var10 = _closure1_slot18;
            var8 = 42;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var11 = true;
            var8['absolute'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot18;
            var10 = _closure1_slot0;
            var9 = 89;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ThemeContextProvider;
            var9 = {};
            var9['gradient'] = var13;
            var15 = _closure1_slot18;
            var14 = _closure1_slot36;
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = '';
            var13 = var13.bind(var12)(var16);
            var12 = {};
            var12 = var15.bind(var4)(var14, var12, var13);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ICYMITab'] = var2;
    return var1;
})();