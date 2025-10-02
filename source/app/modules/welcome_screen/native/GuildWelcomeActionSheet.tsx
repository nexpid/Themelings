// app/modules/welcome_screen/native/GuildWelcomeActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot4 = var5;
    var2 = var2.ScrollView;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var13 = 4;
    var2 = var7[var13];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var5 = var7[var2];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.NO_WELCOME_SCREEN;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.WELCOME_SCREEN_TYPE;
    var _closure1_slot12 = var2;
    var14 = 8;
    var2 = var7[var14];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot13 = var5;
    var15 = var2.Fonts;
    var2 = var2.Routes;
    var _closure1_slot14 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.EMOJI_URL_BASE_SIZE;
    var _closure1_slot15 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Permissions;
    var _closure1_slot16 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot17 = var5;
    var2 = var2.jsxs;
    var _closure1_slot18 = var2;
    var2 = 12;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var2 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'paddingHorizontal': 16, 'width': '100%', 'paddingVertical': 32};
    var19 = 'center';
    var5 = 32;
    var11 = 13;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var16;
    var2['container'] = var10;
    var10 = {'borderRadius': null, 'width': 64, 'height': 64, 'marginBottom': 16};
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderRadius'] = var16;
    var2['guildIcon'] = var10;
    var10 = {};
    var16 = 14;
    var17 = var7[var16];
    var21 = var12.bind(var1)(var17);
    var20 = var15.DISPLAY_EXTRABOLD;
    var17 = var7[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.HEADER_SECONDARY;
    var18 = 24;
    var23 = var21.bind(var1)(var20, var17, var18);
    var24 = var10;
    var17 = copyDataProperties(var24, var23);
    var17 = 'marginBottom';
    var10[var17] = var14;
    var17 = 'textAlign';
    var10[var17] = var19;
    var2['header'] = var10;
    var10 = {};
    var16 = var7[var16];
    var17 = var12.bind(var1)(var16);
    var16 = var15.DISPLAY_EXTRABOLD;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_PRIMARY;
    var23 = var17.bind(var1)(var16, var15, var18);
    var24 = var10;
    var15 = copyDataProperties(var24, var23);
    var2['headerGuildName'] = var10;
    var10 = {'textAlign': 'center', 'marginBottom': 30};
    var2['guildDescription'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var15;
    var10['marginTop'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var2['welcomeChannel'] = var10;
    var10 = {};
    var14 = 'flex-start';
    var10['alignSelf'] = var14;
    var2['channelsTitle'] = var10;
    var10 = {'width': 24, 'height': 24};
    var2['emoji'] = var10;
    var10 = {};
    var10['padding'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var2['placeholderEmojiWrapper'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot19 = var2;
    var2 = function WelcomeChannelRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.welcomeChannel;
            var _closure2_slot0 = var15;
            var8 = var2.trackOptionSelect;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot19;
            var5 = undefined;
            var16 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 15;
            var2 = var7[var3];
            var11 = var4.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var9, var2);
            var _closure2_slot2 = var10;
            var9 = _closure1_slot1;
            var2 = 16;
            var2 = var7[var2];
            var9 = var9.bind(var5)(var2);
            var2 = true;
            var13 = var9.bind(var5)(var10, var2);
            var2 = var7[var3];
            var12 = var4.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot9;
                    var4 = var5.can;
                    var3 = _closure1_slot16;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var9, var2);
            var3 = var7[var3];
            var11 = var4.bind(var5)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = var15.emoji_id;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.emoji_id;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure1_slot6;
                    var3 = var4.getCustomEmojiById;
                    var2 = _closure2_slot0;
                    var2 = var2.emoji_id;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var18 = var9.bind(var11)(var7, var3, var4);
            var7 = _closure1_slot3;
            var4 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 17;
                    var5 = var4[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.transitionTo;
                    var9 = _closure1_slot14;
                    var8 = var9.CHANNEL;
                    var2 = _closure2_slot2;
                    var7 = var2.guild_id;
                    var2 = var2.id;
                    var2 = var8.bind(var9)(var7, var2);
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var1 = 18;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var1, var3);
            var8 = null;
            var3 = var8 != var10;
            var1 = null;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = null;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            if(!(var8 == var18)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var15.emoji_name;
            if(!(var8 != var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 21;
            var3 = var11[var2];
            var4 = var9.bind(var5)(var3);
            var3 = var4.getByName;
            var2 = var11[var2];
            var12 = var9.bind(var5)(var2);
            var11 = var12.convertSurrogateToName;
            var9 = var15.emoji_name;
            var2 = false;
            var2 = var11.bind(var12)(var9, var2);
            var2 = var3.bind(var4)(var2);
            if(!(var8 == var2)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var16.placeholderEmojiWrapper;
            var2['style'] = var9;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 23;
            var9 = var17[var12];
            var11 = var14.bind(var5)(var9);
            var9 = {};
            var12 = var17[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.Sizes;
            var12 = var12.REFRESH_SMALL_16;
            var9['size'] = var12;
            var12 = 24;
            var12 = var17[var12];
            var12 = var14.bind(var5)(var12);
            var9['source'] = var12;
            var9 = var4.bind(var5)(var11, var9);
            var2['children'] = var9;
            var14 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 16; continue _fun0001;
case 15:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 22;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var9 = var16.emoji;
            var2['style'] = var9;
            var9 = 'text-sm/medium';
            var2['variant'] = var9;
            var9 = var15.emoji_name;
            var2['children'] = var9;
            var14 = var4.bind(var5)(var3, var2);
case 16:
            _fun0001_ip = 17; continue _fun0001;
case 11:
            var4 = _closure1_slot17;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 19;
            var2 = var17[var2];
            var3 = var12.bind(var5)(var2);
            var2 = {};
            var9 = var16.emoji;
            var2['style'] = var9;
            var9 = {};
            var11 = 20;
            var11 = var17[var11];
            var17 = var12.bind(var5)(var11);
            var12 = var17.getEmojiURL;
            var11 = {};
            var19 = var18.id;
            var11['id'] = var19;
            var18 = var18.animated;
            var11['animated'] = var18;
            var18 = _closure1_slot15;
            var11['size'] = var18;
            var11 = var12.bind(var17)(var11);
            var9['uri'] = var11;
            var2['source'] = var9;
            var9 = 'contain';
            var2['resizeMode'] = var9;
            var14 = var4.bind(var5)(var3, var2);
case 17:
            var4 = _closure1_slot17;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 25;
            var2 = var11[var9];
            var2 = var12.bind(var5)(var2);
            var3 = var2.FormRow;
            var2 = {};
            var16 = var16.welcomeChannel;
            var2['DEPRECATED_style'] = var16;
            var2['leading'] = var14;
            var14 = 22;
            var11 = var11[var14];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/semibold', 'color': 'interactive-active'};
            var15 = var15.description;
            var11['children'] = var15;
            var11 = var4.bind(var5)(var12, var11);
            var2['label'] = var11;
            var10 = var8 != var10;
            var8 = null;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = _closure1_slot17;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var10['children'] = var13;
            var8 = var12.bind(var5)(var11, var10);
case 18:
            var2['subLabel'] = var8;
            var2['onPress'] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var7.bind(var5)(var6);
            var6 = var6.FormRow;
            var7 = var6.Arrow;
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/welcome_screen/native/GuildWelcomeActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildWelcomeActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var2 = var2.onHide;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot19;
            var5 = undefined;
            var15 = var3.bind(var5)();
            var _closure2_slot2 = var15;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var7 = var6[var3];
            var12 = var4.bind(var5)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var11.bind(var12)(var8, var7);
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStoresObject;
            var3 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot10;
                var4 = var3.get;
                var2 = _closure2_slot0;
                var2 = var4.bind(var3)(var2);
                var1['welcomeScreen'] = var2;
                var2 = var3.isFetching;
                var2 = var2.bind(var3)();
                var1['fetching'] = var2;
                var2 = var3.hasError;
                var2 = var2.bind(var3)();
                var1['hasError'] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var11 = var3.welcomeScreen;
            var _closure2_slot3 = var11;
            var8 = var3.fetching;
            var _closure2_slot4 = var8;
            var3 = var3.hasError;
            var _closure2_slot5 = var3;
            var4 = _closure1_slot3;
            var12 = var4.useEffect;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var11;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 20; continue _fun0006 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchWelcomeScreen;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var12.bind(var4)(var6, var7);
            var7 = var4.useEffect;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = false;
                    var1 = var1 === var3;
                    if(!var1) { _fun0007_ip = 21; continue _fun0007 }
case 3:
                    var3 = _closure2_slot5;
                    var2 = true;
                    var1 = var2 === var3;
case 21:
                    if(!var1) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var4)(var3, var6);
            var7 = var4.useEffect;
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var11;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 20; continue _fun0008 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.welcomeScreenViewed;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var4)(var3, var6);
            var7 = var4.useEffect;
            var6 = new Array(1);
            var6[0] = var11;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = _closure1_slot11;
                    if(!(var3 === var2)) { _fun0009_ip = 4; continue _fun0009 }
case 24:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var4)(var3, var6);
            var7 = var4.useEffect;
            var6 = new Array(1);
            var6[0] = var1;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot13;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = _closure1_slot12;
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['guild_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var7.bind(var4)(var3, var6);
            var6 = var4.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 25; continue _fun0010 }
case 7:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 25:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var6.bind(var4)(var2, var3);
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var11;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0011_ip = 26; continue _fun0011 }
case 24:
                    var8 = new Array(0);
                    var _closure3_slot0 = var8;
                    var7 = new Array(0);
                    var _closure3_slot1 = var7;
                    var1 = false;
                    var _closure3_slot2 = var1;
                    var6 = _closure2_slot3;
                    var3 = var6.welcome_channels;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure3_slot0;
                            var4 = var5.push;
                            var3 = var1.description;
                            var3 = var4.bind(var5)(var3);
                            var5 = _closure3_slot1;
                            var4 = var5.push;
                            var3 = var1.channel_id;
                            var3 = var4.bind(var5)(var3);
                            var3 = var1.emoji_id;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0012_ip = 27; continue _fun0012 }
case 28:
                            var1 = true;
                            _closure3_slot2 = var1;
case 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.GUILD_WELCOME_SCREEN_OPTION_SELECTED;
                    var1 = {};
                    var10 = arg1;
                    var1['index'] = var10;
                    var9 = _closure2_slot0;
                    var1['guild_id'] = var9;
                    var1['options'] = var8;
                    var1['options_channel_ids'] = var7;
                    var6 = var6.description;
                    var1['guild_description'] = var6;
                    var5 = _closure3_slot2;
                    var1['has_custom_emojis'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var _closure2_slot6 = var1;
            var3 = null;
            var2 = var3 == var23;
            var1 = null;
            if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var2 = var3 == var11;
            var1 = null;
            if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 31:
            var4 = _closure1_slot17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 29;
            var2 = var18[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.ActionSheet;
            var2 = {};
            var6 = true;
            var2['startExpanded'] = var6;
            var8 = _closure1_slot18;
            var7 = _closure1_slot5;
            var6 = {};
            var12 = var15.container;
            var6['contentContainerStyle'] = var12;
            var14 = _closure1_slot1;
            var13 = 30;
            var9 = var18[var13];
            var12 = var14.bind(var5)(var9);
            var9 = {};
            var16 = var15.guildIcon;
            var9['style'] = var16;
            var9['guild'] = var23;
            var13 = var18[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Sizes;
            var13 = var13.MEDIUM;
            var9['size'] = var13;
            var13 = 2;
            var9['textScale'] = var13;
            var12 = var4.bind(var5)(var12, var9);
            var9 = new Array(5);
            var9[0] = var12;
            var12 = 22;
            var13 = var18[var12];
            var13 = var17.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-secondary'};
            var14 = var15.header;
            var13['style'] = var14;
            var14 = 31;
            var19 = var18[var14];
            var19 = var17.bind(var5)(var19);
            var22 = var19.intl;
            var21 = var22.format;
            var19 = var18[var14];
            var19 = var17.bind(var5)(var19);
            var19 = var19.t;
            var20 = var19.0aydCA;
            var19 = {};
            var23 = var23.name;
            var19['guildName'] = var23;
            var23 = function guildNameHook(arg1, arg2) {
                var5 = _closure1_slot17;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
                var1 = _closure2_slot2;
                var1 = var1.headerGuildName;
                var2['style'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var19['guildNameHook'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var13['children'] = var19;
            var13 = var4.bind(var5)(var16, var13);
            var9[1] = var13;
            var13 = var18[var12];
            var13 = var17.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var19 = var15.guildDescription;
            var13['style'] = var19;
            var19 = var11.description;
            var13['children'] = var19;
            var13 = var4.bind(var5)(var16, var13);
            var9[2] = var13;
            var12 = var18[var12];
            var12 = var17.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            var15 = var15.channelsTitle;
            var12['style'] = var15;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.haj5+v;
            var15 = var15.bind(var16)(var14);
            var14 = var15.toUpperCase;
            var14 = var14.bind(var15)();
            var12['children'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var9[3] = var12;
            var12 = var11.welcome_channels;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = arg2;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot17;
                var3 = _closure1_slot20;
                var2 = {};
                var6 = arg1;
                var2['welcomeChannel'] = var6;
                var1 = function trackOptionSelect() {
                    var3 = _closure2_slot6;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['trackOptionSelect'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var9[4] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 29:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['WelcomeChannelRow'] = var2;
    return var1;
})();