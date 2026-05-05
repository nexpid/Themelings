// app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function AnnouncementCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.variant;
            var5 = var1.message;
            var8 = var1.onPress;
            var20 = var1.guildId;
            var15 = var1.channelId;
            var2 = _closure1_slot10;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var2 = _closure1_slot3;
            var18 = 5;
            var2 = var2[var18];
            var6 = var6.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getParser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var6.bind(var4)(var2);
            var2 = 'main';
            var21 = var2 === var3;
            var2 = var5.media;
            var11 = null;
            var6 = var11 == var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.proxyUrl;
case 2:
            if(!(var11 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.media;
            var7 = var11 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var6.url;
case 6:
            var3 = var2;
case 4:
            var6 = var11 != var3;
            var2 = null;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 7;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getPosterUrl;
            var2 = var6.bind(var7)(var3);
case 8:
            var14 = var3;
            if(!(var11 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var2;
case 10:
            var2 = var5.media;
            var2 = var11 != var2;
            var7 = null;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var11 != var14;
            var7 = null;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var6 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            if(var21) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var9.smallCardMedia;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var10 = var9.mainCardMedia;
case 17:
            var2['style'] = var10;
            var13 = _closure1_slot8;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var10 = 8;
            var10 = var16[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.ImageWithPlaceholder;
            var10 = {};
            var10['uri'] = var14;
            var14 = var5.media;
            var14 = var14.placeholder;
            var10['placeholder'] = var14;
            var14 = var5.media;
            var14 = var14.placeholderVersion;
            var10['placeholderVersion'] = var14;
            var14 = var9.mediaImage;
            var10['style'] = var14;
            var10 = var13.bind(var4)(var12, var10);
            var2['children'] = var10;
            var7 = var6.bind(var4)(var3, var2);
case 12:
            var6 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var10 = var9.cardBody;
            var2['style'] = var10;
            var10 = var5.title;
            var11 = var11 != var10;
            if(!var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = _closure1_slot8;
            var12 = _closure1_slot0;
            var14 = _closure1_slot3;
            var10 = 9;
            var10 = var14[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var14 = 2;
            if(!var21) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var14 = 1;
case 20:
            var10['lineClamp'] = var14;
            var17 = var5.title;
            var16 = {};
            var16['guildId'] = var20;
            var16['channelId'] = var15;
            var14 = true;
            var14 = var19.bind(var4)(var17, var14, var16);
            var10['children'] = var14;
            var11 = var13.bind(var4)(var12, var10);
case 18:
            var10 = new Array(3);
            var10[0] = var11;
            var11 = var5.body;
            var11 = var11.length;
            var16 = 0;
            var11 = var11 > var16;
            if(!var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var12 = 9;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var17 = 3;
            if(!var21) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = var18;
case 24:
            var12['lineClamp'] = var17;
            var18 = var5.body;
            var17 = {};
            var17['guildId'] = var20;
            var17['channelId'] = var15;
            var15 = true;
            var15 = var19.bind(var4)(var18, var15, var17);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 22:
            var10[1] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var9.metadataRow;
            var11['style'] = var14;
            var17 = _closure1_slot8;
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var20 = 9;
            var14 = var21[var20];
            var14 = var19.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var18 = 10;
            var18 = var21[var18];
            var22 = var19.bind(var4)(var18);
            var21 = var22.dateFormat;
            var23 = global;
            var24 = var23.Date;
            var30 = var5.timestamp;
            var19 = var24.prototype;
            var19 = Object.create(var19, {constructor: {value: var24}});
            var31 = var19;
            var18 = new var31[var24](var30, var29);
            var19 = var18 instanceof Object ? var18 : var19;
            var18 = 'LL';
            var18 = var21.bind(var22)(var19, var18);
            var14['children'] = var18;
            var15 = var17.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = var5.reactionCount;
            var15 = var15 > var16;
            if(!var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var18 = _closure1_slot9;
            var17 = _closure1_slot5;
            var16 = {};
            var19 = var9.reactionInfo;
            var16['style'] = var19;
            var22 = _closure1_slot8;
            var24 = _closure1_slot0;
            var26 = _closure1_slot3;
            var19 = 11;
            var19 = var26[var19];
            var19 = var24.bind(var4)(var19);
            var21 = var19.ReactionIcon;
            var19 = {};
            var25 = 'xs';
            var19['size'] = var25;
            var27 = _closure1_slot1;
            var25 = 4;
            var25 = var26[var25];
            var25 = var27.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.TEXT_MUTED;
            var19['color'] = var25;
            var21 = var22.bind(var4)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var22 = _closure1_slot8;
            var20 = var26[var20];
            var20 = var24.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var23.Intl;
            var25 = var23.NumberFormat;
            var23 = 12;
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.intl;
            var30 = var23.currentLocale;
            var24 = var25.prototype;
            var24 = Object.create(var24, {constructor: {value: var25}});
            var31 = var24;
            var23 = new var31[var25](var30, var29);
            var25 = var23 instanceof Object ? var23 : var24;
            var24 = var25.format;
            var23 = var5.reactionCount;
            var23 = var24.bind(var25)(var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 26:
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var2['children'] = var10;
            var6 = var6.bind(var4)(var3, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var9 = var9.card;
            var1['style'] = var9;
            var1['onPress'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var5 = var5.title;
            var1['accessibilityLabel'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.Pressable;
    var _closure1_slot6 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 'column';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['cardsContainer'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['smallCardsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingHorizontal'] = var12;
    var4['sectionHeader'] = var9;
    var9 = {'height': 180, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['loadingContainer'] = var9;
    var9 = {'flexDirection': 'column', 'borderRadius': null, 'overflow': 'hidden', 'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'flex': 1};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['borderColor'] = var12;
    var4['card'] = var9;
    var9 = {'height': 180, 'overflow': 'hidden', 'flexShrink': 0};
    var4['mainCardMedia'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['padding'] = var12;
    var4['cardBody'] = var9;
    var9 = {'height': 120, 'overflow': 'hidden', 'flexShrink': 0};
    var4['smallCardMedia'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'resizeMode': 'cover'};
    var4['mediaImage'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'marginTop': 'auto'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['metadataRow'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['gap'] = var10;
    var4['reactionInfo'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileAnnouncements.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileAnnouncements(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.gameId;
            var _closure2_slot0 = var8;
            var12 = var1.invite;
            var _closure2_slot1 = var12;
            var13 = var1.closeModal;
            var _closure2_slot2 = var13;
            var14 = var1.trackAction;
            var _closure2_slot3 = var14;
            var2 = var1.scrollOffsetRef;
            var _closure2_slot4 = var2;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.analyticsLocations;
            var _closure2_slot5 = var11;
            var1 = 14;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var8);
            var6 = var1.messages;
            var18 = var1.channelId;
            var _closure2_slot6 = var18;
            var20 = var1.guildId;
            var _closure2_slot7 = var20;
            var1 = var1.loading;
            var7 = _closure1_slot4;
            var15 = var7.useCallback;
            var5 = new Array(8);
            var5[0] = var14;
            var5[1] = var13;
            var5[2] = var12;
            var5[3] = var20;
            var5[4] = var18;
            var5[5] = var11;
            var5[6] = var8;
            var5[7] = var2;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 30:
                    var6 = var2.id;
case 28:
                    if(!(var5 == var6)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var6 = _closure2_slot7;
case 31:
                    var2 = var5 != var6;
                    if(!var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 33:
                    if(!var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var5 = _closure2_slot3;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 15;
                    var3 = var7[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.GameProfileTrackActionActions;
                    var3 = var3.Announcements;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var2 = 16;
                    var2 = var7[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.setGameProfilePendingReturn;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['gameId'] = var5;
                    var5 = _closure2_slot6;
                    var2['channelId'] = var5;
                    var10 = _closure2_slot4;
                    var10 = var10.current;
                    var2['initialScrollOffset'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    var2 = 17;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['invite'] = var7;
                    var2['guildId'] = var6;
                    var2['channelId'] = var5;
                    var4 = _closure2_slot5;
                    var2['analyticsLocationStack'] = var4;
                    var2 = var3.bind(var1)(var2);
case 35:
                    return var1;
                }
            };
            var16 = var15.bind(var7)(var3, var5);
            var5 = var7.useCallback;
            var3 = new Array(8);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var20;
            var3[4] = var18;
            var3[5] = var11;
            var3[6] = var8;
            var3[7] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 30:
                    var6 = var2.id;
case 28:
                    if(!(var5 == var6)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var6 = _closure2_slot7;
case 31:
                    var2 = var5 != var6;
                    if(!var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 33:
                    if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
                    var5 = _closure2_slot3;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 15;
                    var3 = var7[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.GameProfileTrackActionActions;
                    var3 = var3.AnnouncementsItem;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var2 = 16;
                    var2 = var7[var2];
                    var9 = var3.bind(var1)(var2);
                    var8 = var9.setGameProfilePendingReturn;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['gameId'] = var5;
                    var5 = _closure2_slot6;
                    var2['channelId'] = var5;
                    var10 = _closure2_slot4;
                    var10 = var10.current;
                    var2['initialScrollOffset'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    var2 = 17;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['invite'] = var7;
                    var2['guildId'] = var6;
                    var2['channelId'] = var5;
                    var5 = arg1;
                    var2['messageId'] = var5;
                    var4 = _closure2_slot5;
                    var2['analyticsLocationStack'] = var4;
                    var2 = var3.bind(var1)(var2);
case 37:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var _closure2_slot8 = var2;
            if(var1) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var1 = null;
            if(!(var1 != var18)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var2 = var6.length;
            var14 = 0;
            if(!(var14 !== var2)) { _fun0002_ip = 40; continue _fun0002 }
case 42:
            var3 = var6.length;
            var2 = 2;
            var2 = var2 !== var3;
            var21 = null;
            if(!var2) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var21 = var6[var14];
case 43:
            _closure2_slot9 = var21;
            var19 = var6;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var5 = var6.slice;
            var3 = 1;
            var2 = 3;
            var19 = var5.bind(var6)(var3, var2);
case 45:
            var5 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var6 = {};
            var11 = var10.sectionHeader;
            var6['style'] = var11;
            var13 = _closure1_slot8;
            var23 = _closure1_slot0;
            var26 = _closure1_slot3;
            var11 = 9;
            var11 = var26[var11];
            var11 = var23.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var22 = 12;
            var15 = var26[var22];
            var15 = var23.bind(var4)(var15);
            var25 = var15.intl;
            var24 = var25.string;
            var15 = var26[var22];
            var15 = var23.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.B0BV3Y;
            var15 = var24.bind(var25)(var15);
            var11['children'] = var15;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var15 = _closure1_slot8;
            var12 = 18;
            var12 = var26[var12];
            var12 = var23.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {'text': null, 'variant': 'tertiary', 'size': 'sm', 'icon': null, 'iconPosition': 'end'};
            var24 = var26[var22];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var26[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.budhsM;
            var22 = var24.bind(var25)(var22);
            var12['text'] = var22;
            var25 = 'sm';
            var24 = _closure1_slot8;
            var22 = 19;
            var22 = var26[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.ChevronSmallRightIcon;
            var22 = {};
            var22['size'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var12['icon'] = var22;
            var12['onPress'] = var16;
            var12 = var15.bind(var4)(var13, var12);
            var11[1] = var12;
            var6['children'] = var11;
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var11 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var12 = var10.cardsContainer;
            var7['style'] = var12;
            var13 = var1 != var21;
            if(!var13) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var16 = _closure1_slot8;
            var15 = _closure1_slot11;
            var12 = {};
            var22 = 'main';
            var12['variant'] = var22;
            var12['message'] = var21;
            var21 = function onPress() {
                var3 = _closure2_slot8;
                var1 = _closure2_slot9;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var21;
            var12['guildId'] = var20;
            var12['channelId'] = var18;
            var13 = var16.bind(var4)(var15, var12);
case 47:
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var19.length;
            var13 = var13 > var14;
            if(!var13) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var16 = _closure1_slot8;
            var15 = _closure1_slot5;
            var14 = {};
            var18 = var10.smallCardsContainer;
            var14['style'] = var18;
            var18 = var19.map;
            var17 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot8;
                var4 = _closure1_slot11;
                var3 = {};
                var6 = 'small';
                var3['variant'] = var6;
                var3['message'] = var1;
                var2 = function onPress() {
                    var3 = _closure2_slot8;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onPress'] = var2;
                var6 = _closure2_slot7;
                var3['guildId'] = var6;
                var2 = _closure2_slot6;
                var3['channelId'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var17 = var18.bind(var19)(var17);
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 49:
            var12[1] = var13;
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 40:
            return var1;
case 38:
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var10.sectionHeader;
            var5['style'] = var8;
            var12 = _closure1_slot8;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var8 = 9;
            var8 = var17[var8];
            var8 = var16.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var13 = 12;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.B0BV3Y;
            var13 = var14.bind(var15)(var13);
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var10.loadingContainer;
            var6['style'] = var10;
            var11 = _closure1_slot8;
            var10 = _closure1_slot7;
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();