// app/modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function MemberActionRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.channelId;
            var _closure2_slot0 = var14;
            var18 = var2.title;
            var1 = var2.emoji;
            var13 = var2.icon;
            var10 = var2.completed;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var2 = _closure1_slot17;
            var11 = var2.bind(var5)();
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 65; continue _fun0001 }
 63:
            var1 = {};
 65:
            var9 = var1.id;
            _closure2_slot1 = var9;
            var8 = var1.name;
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 15;
            var1 = var6[var16];
            var15 = var17.bind(var5)(var1);
            var7 = var15.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var7.bind(var15)(var2, var1);
            _closure2_slot2 = var1;
            var7 = _closure1_slot1;
            var2 = 16;
            var2 = var6[var2];
            var2 = var7.bind(var5)(var2);
            var15 = true;
            var22 = var2.bind(var5)(var1, var15);
            var2 = var6[var16];
            var21 = var17.bind(var5)(var2);
            var20 = var21.useStateFromStores;
            var2 = _closure1_slot9;
            var19 = new Array(1);
            var19[0] = var2;
            var2 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot12;
                var2 = var1.VIEW_CHANNEL;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var20.bind(var21)(var19, var2);
            var16 = var6[var16];
            var20 = var17.bind(var5)(var16);
            var19 = var20.useStateFromStores;
            var16 = _closure1_slot5;
            var17 = new Array(1);
            var17[0] = var16;
            var16 = new Array(1);
            var16[0] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 38; continue _fun0002 }
 16:
                    var4 = _closure1_slot5;
                    var3 = var4.getCustomEmojiById;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var17 = var19.bind(var20)(var17, var9, var16);
            var16 = 17;
            var6 = var6[var16];
            var9 = var7.bind(var5)(var6);
            var7 = var9.getNewMemberActionIconURL;
            var6 = {};
            var6['channelId'] = var14;
            var6['icon'] = var13;
            var9 = var7.bind(var9)(var6);
            var13 = _closure1_slot3;
            var7 = var13.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 68; continue _fun0003 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectNewMemberActionChannel;
                    var2 = _closure2_slot2;
                    var2 = var2.guild_id;
                    var1 = _closure2_slot2;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var7.bind(var13)(var4, var6);
            var4 = var3 != var1;
            var1 = null;
            if(!var4) { _fun0001_ip = 1086; continue _fun0001 }
 319:
            var1 = null;
            if(!var2) { _fun0001_ip = 1086; continue _fun0001 }
 327:
            if(!(var3 == var9)) { _fun0001_ip = 684; continue _fun0001 }
 334:
            if(!(var3 == var17)) { _fun0001_ip = 571; continue _fun0001 }
 341:
            if(!(var3 != var8)) { _fun0001_ip = 403; continue _fun0001 }
 345:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 20;
            var4 = var14[var2];
            var7 = var13.bind(var5)(var4);
            var4 = var7.getByName;
            var2 = var14[var2];
            var14 = var13.bind(var5)(var2);
            var13 = var14.convertSurrogateToName;
            var2 = false;
            var2 = var13.bind(var14)(var8, var2);
            var2 = var4.bind(var7)(var2);
            if(!(var3 == var2)) { _fun0001_ip = 508; continue _fun0001 }
 403:
            var4 = _closure1_slot15;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var11.emojiPlaceholder;
            var2['style'] = var7;
            var14 = _closure1_slot15;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 22;
            var7 = var21[var19];
            var13 = var20.bind(var5)(var7);
            var7 = {};
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.Sizes;
            var19 = var19.REFRESH_SMALL_16;
            var7['size'] = var19;
            var19 = 23;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var7['source'] = var19;
            var7 = var14.bind(var5)(var13, var7);
            var2['children'] = var7;
            var7 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 569; continue _fun0001;
 508:
            var4 = _closure1_slot15;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 21;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var13 = var11.textEmoji;
            var2['style'] = var13;
            var13 = 'heading-xxl/normal';
            var2['variant'] = var13;
            var2['children'] = var8;
            var7 = var4.bind(var5)(var3, var2);
 569:
            _fun0001_ip = 682; continue _fun0001;
 571:
            var4 = _closure1_slot15;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 19;
            var2 = var13[var2];
            var3 = var14.bind(var5)(var2);
            var2 = {};
            var8 = var11.emoji;
            var2['style'] = var8;
            var8 = {};
            var13 = var13[var16];
            var16 = var14.bind(var5)(var13);
            var14 = var16.getEmojiURL;
            var13 = {};
            var19 = var17.id;
            var13['id'] = var19;
            var17 = var17.animated;
            var13['animated'] = var17;
            var17 = _closure1_slot13;
            var13['size'] = var17;
            var13 = var14.bind(var16)(var13);
            var8['uri'] = var13;
            var2['source'] = var8;
            var8 = 'contain';
            var2['resizeMode'] = var8;
            var7 = var4.bind(var5)(var3, var2);
 682:
            _fun0001_ip = 744; continue _fun0001;
 684:
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = var11.icon;
            var2['style'] = var8;
            var8 = {};
            var8['uri'] = var9;
            var2['source'] = var8;
            var8 = 'contain';
            var2['resizeMode'] = var8;
            var7 = var4.bind(var5)(var3, var2);
 744:
            var4 = _closure1_slot16;
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 24;
            var2 = var14[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['onPress'] = var6;
            var6 = var11.actionContainer;
            var2['style'] = var6;
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot16;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.channelNameContainer;
            var7['style'] = var11;
            var17 = _closure1_slot15;
            var13 = 21;
            var11 = var14[var13];
            var11 = var19.bind(var5)(var11);
            var16 = var11.Text;
            var11 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var11['children'] = var18;
            var16 = var17.bind(var5)(var16, var11);
            var11 = new Array(2);
            var11[0] = var16;
            var17 = _closure1_slot15;
            var13 = var14[var13];
            var13 = var19.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var18 = 25;
            var20 = var14[var18];
            var20 = var19.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.format;
            var18 = var14[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.t;
            var19 = var18.MkzlDA;
            var18 = {};
            var18['channelName'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var13['children'] = var18;
            var13 = var17.bind(var5)(var16, var13);
            var11[1] = var13;
            var7['children'] = var11;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot15;
            var11 = _closure1_slot1;
            var13 = 22;
            var7 = var14[var13];
            var8 = var11.bind(var5)(var7);
            var7 = {};
            var7['disableColor'] = var15;
            var13 = var14[var13];
            var13 = var11.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.MEDIUM;
            var7['size'] = var13;
            var13 = _closure1_slot2;
            if(var10) { _fun0001_ip = 1050; continue _fun0001 }
 1041:
            var10 = 27;
            var10 = var13[var10];
            _fun0001_ip = 1057; continue _fun0001;
 1050:
            var12 = 26;
            var10 = var13[var12];
 1057:
            var10 = var11.bind(var5)(var10);
            var7['source'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1086:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var10 = 8;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot14 = var4;
    var11 = 12;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingHorizontal'] = var11;
    var4['actionsContainer'] = var9;
    var9 = {'display': 'flex', 'marginBottom': 16};
    var4['actionsHeader'] = var9;
    var9 = {'backgroundColor': null, 'marginBottom': 8, 'padding': 12, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = 14;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['actionContainer'] = var9;
    var9 = {'flex': 1, 'marginHorizontal': 8};
    var4['channelNameContainer'] = var9;
    var9 = {'width': 40, 'height': 40};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['icon'] = var9;
    var9 = {'width': 40, 'height': 40};
    var4['emoji'] = var9;
    var9 = {'width': 40, 'textAlign': 'center'};
    var4['textEmoji'] = var9;
    var9 = {'width': 40, 'height': 40, 'backgroundColor': null, 'borderRadius': 20, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var11;
    var4['emojiPlaceholder'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['completedText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingNewMemberActions(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot17;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var1 = var6[var3];
            var11 = var4.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var1;
            var8 = new Array(1);
            var8[0] = var2;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var10.bind(var11)(var9, var1, var8);
            var1 = var6[var3];
            var10 = var4.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getCompletedActions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var1);
            var _closure2_slot1 = var8;
            var1 = var6[var3];
            var11 = var4.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getSelfMember;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var _closure2_slot2 = var1;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var9)(var4, var3);
            var _closure2_slot3 = var9;
            var6 = _closure1_slot3;
            var4 = var6.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var2;
            var8 = null;
            var10 = var8 == var1;
            var2 = undefined;
            if(var10) { _fun0004_ip = 252; continue _fun0004 }
 247:
            var2 = var1.flags;
 252:
            var3[2] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 == var2;
                    if(!var2) { _fun0005_ip = 42; continue _fun0005 }
 16:
                    var3 = _closure2_slot2;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 38; continue _fun0005 }
 29:
                    var5 = _closure2_slot2;
                    var3 = var5.flags;
 38:
                    var2 = var4 != var3;
 42:
                    if(!var2) { _fun0005_ip = 113; continue _fun0005 }
 45:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 28;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.hasFlag;
                    var7 = _closure2_slot2;
                    var7 = var7.flags;
                    var8 = var4 != var7;
                    var4 = 0;
                    if(!var8) { _fun0005_ip = 97; continue _fun0005 }
 94:
                    var4 = var7;
 97:
                    var3 = _closure1_slot14;
                    var3 = var3.STARTED_HOME_ACTIONS;
                    var2 = var5.bind(var6)(var4, var3);
 113:
                    if(!var2) { _fun0005_ip = 156; continue _fun0005 }
 116:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchNewMemberActions;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot3;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 43; continue _fun0006 }
 16:
                    var3 = _closure2_slot3;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 39; continue _fun0006 }
 29:
                    var5 = _closure2_slot3;
                    var3 = var5.rulesChannelId;
 39:
                    var2 = var4 != var3;
 43:
                    if(!var2) { _fun0006_ip = 98; continue _fun0006 }
 46:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectNewMemberActionChannel;
                    var1 = _closure2_slot3;
                    var2 = var1.id;
                    var1 = var1.rulesChannelId;
                    var1 = var3.bind(var4)(var2, var1);
 98:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var4.bind(var6)(var2, var3);
            var2 = var8 == var1;
            var1 = null;
            if(var2) { _fun0004_ip = 838; continue _fun0004 }
 311:
            var2 = var8 == var12;
            var1 = null;
            if(var2) { _fun0004_ip = 838; continue _fun0004 }
 323:
            var3 = var12.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0004_ip = 838; continue _fun0004 }
 339:
            var4 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var17.actionsContainer;
            var2['style'] = var6;
            var13 = _closure1_slot15;
            var10 = _closure1_slot4;
            var6 = {};
            var14 = var17.actionsHeader;
            var6['style'] = var14;
            var19 = _closure1_slot15;
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 21;
            var14 = var20[var15];
            var14 = var24.bind(var5)(var14);
            var18 = var14.Text;
            var14 = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
            var22 = 25;
            var21 = var20[var22];
            var21 = var24.bind(var5)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var22];
            var20 = var24.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.LhlgY2;
            var20 = var21.bind(var23)(var20);
            var14['children'] = var20;
            var14 = var19.bind(var5)(var18, var14);
            var6['children'] = var14;
            var10 = var13.bind(var5)(var10, var6);
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var12.map;
            var7 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot18;
                    var3 = {};
                    var2 = var1.channelId;
                    var3['channelId'] = var2;
                    var2 = var1.title;
                    var3['title'] = var2;
                    var2 = var1.emoji;
                    var3['emoji'] = var2;
                    var2 = var1.icon;
                    var3['icon'] = var2;
                    var2 = _closure2_slot1;
                    var6 = null;
                    var9 = var6 == var2;
                    var2 = undefined;
                    var7 = undefined;
                    if(var9) { _fun0007_ip = 87; continue _fun0007 }
 74:
                    var9 = _closure2_slot1;
                    var8 = var1.channelId;
                    var7 = var9[var8];
 87:
                    var6 = var6 != var7;
                    if(!var6) { _fun0007_ip = 97; continue _fun0007 }
 94:
                    var6 = var7;
 97:
                    var3['completed'] = var6;
                    var7 = var1.channelId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'member-action-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var7 = var10.bind(var12)(var7);
            var6[1] = var7;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0004_ip = 533; continue _fun0004 }
 527:
            var7 = var9.rulesChannelId;
 533:
            var7 = var8 != var7;
            if(!var7) { _fun0004_ip = 824; continue _fun0004 }
 543:
            var10 = _closure1_slot16;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 24;
            var8 = var18[var8];
            var8 = var21.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var8['onPress'] = var11;
            var11 = var17.actionContainer;
            var8['style'] = var11;
            var13 = _closure1_slot15;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var17.emojiPlaceholder;
            var11['style'] = var14;
            var20 = _closure1_slot15;
            var24 = _closure1_slot1;
            var23 = 22;
            var14 = var18[var23];
            var19 = var24.bind(var5)(var14);
            var14 = {};
            var23 = var18[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.Sizes;
            var23 = var23.REFRESH_SMALL_16;
            var14['size'] = var23;
            var23 = 29;
            var23 = var18[var23];
            var23 = var24.bind(var5)(var23);
            var14['source'] = var23;
            var14 = var20.bind(var5)(var19, var14);
            var11['children'] = var14;
            var12 = var13.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot15;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var17.channelNameContainer;
            var12['style'] = var17;
            var17 = _closure1_slot15;
            var15 = var18[var15];
            var15 = var21.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var19 = var18[var22];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.K/i3iY;
            var18 = var19.bind(var20)(var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 824:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 838:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();