// app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function getSharedMarkdownParser() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot13;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getParser;
            var2 = var2.bind(var3)();
            _closure1_slot13 = var2;
case 2:
            var1 = _closure1_slot13;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function formatReactionCount(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot14;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot14;
            var4 = var3.locale;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 4;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.intl;
            var3 = var3.currentLocale;
            var2 = var4 === var3;
case 4:
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 4;
            var5 = var7[var3];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var5 = var5.intl;
            var5 = var5.currentLocale;
            var2['locale'] = var5;
            var5 = global;
            var5 = var5.Intl;
            var5 = var5.NumberFormat;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.intl;
            var8 = var3.currentLocale;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var3 = new var9[var5](var8, var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2['format'] = var3;
            _closure1_slot14 = var2;
case 6:
            var1 = _closure1_slot14;
            var3 = var1.format;
            var2 = var3.format;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function EmbedAnnouncementCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var26 = var1.message;
            var _closure2_slot0 = var26;
            var2 = var1.onPress;
            var _closure2_slot1 = var2;
            var25 = var1.guildId;
            var18 = var1.channelId;
            var1 = _closure1_slot15;
            var5 = undefined;
            var22 = var1.bind(var5)();
            var1 = _closure1_slot17;
            var24 = var1.bind(var5)();
            var2 = var26.media;
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = var2.proxyUrl;
case 8:
            if(!(var1 == var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = var26.media;
            var7 = var1 == var4;
            var2 = undefined;
            if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var4.url;
case 12:
            var3 = var2;
case 10:
            var4 = var1 != var3;
            var2 = null;
            if(!var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 7;
            var4 = var8[var4];
            var9 = var7.bind(var5)(var4);
            var8 = var9.getPosterUrl;
            var7 = _closure1_slot12;
            var4 = 160;
            var2 = var8.bind(var9)(var3, var4, var7);
case 14:
            var28 = var3;
            if(!(var1 != var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var28 = var2;
case 16:
            var23 = var26.embedSource;
            if(!(var1 != var23)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var2 = var23.color;
            var2 = var1 != var2;
            var14 = undefined;
            if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = {};
            var3 = var23.color;
            var2['borderLeftColor'] = var3;
            var14 = var2;
case 20:
            var4 = _closure1_slot10;
            var3 = _closure1_slot8;
            var2 = {};
            var7 = var22.card;
            var2['style'] = var7;
            var6 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var6 = var26.title;
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var22.cardBody;
            var6['style'] = var9;
            var9 = var23.url;
            var10 = var1 != var9;
            if(!var10) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 8;
            var9 = var13[var9];
            var9 = var11.bind(var5)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-xs/medium', 'color': 'text-link', 'lineClamp': 1};
            var13 = var23.url;
            var9['children'] = var13;
            var10 = var12.bind(var5)(var11, var9);
case 22:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot7;
            var10 = {};
            var15 = var22.embedContentArea;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var13 = var23.authorName;
            var14 = var1 != var13;
            if(!var14) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var16 = _closure1_slot11;
            var15 = _closure1_slot7;
            var13 = {};
            var17 = var22.embedAuthorRow;
            var13['style'] = var17;
            var17 = var23.authorIconUrl;
            var19 = var1 != var17;
            if(!var19) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var21 = _closure1_slot10;
            var20 = _closure1_slot5;
            var17 = {};
            var29 = {};
            var30 = var23.authorIconUrl;
            var29['uri'] = var30;
            var17['source'] = var29;
            var29 = var22.embedAuthorIcon;
            var17['style'] = var29;
            var19 = var21.bind(var5)(var20, var17);
case 26:
            var17 = new Array(2);
            var17[0] = var19;
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var29 = _closure1_slot3;
            var19 = 8;
            var19 = var29[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/semibold', 'color': 'text-strong', 'lineClamp': 1};
            var29 = var23.authorName;
            var19['children'] = var29;
            var19 = var21.bind(var5)(var20, var19);
            var17[1] = var19;
            var13['children'] = var17;
            var14 = var16.bind(var5)(var15, var13);
case 24:
            var13 = new Array(5);
            var13[0] = var14;
            var14 = var26.media;
            var14 = var1 != var14;
            if(!var14) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var14 = var1 != var28;
case 28:
            if(!var14) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var17 = _closure1_slot10;
            var16 = _closure1_slot7;
            var15 = {};
            var19 = var22.embedMedia;
            var15['style'] = var19;
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var29 = _closure1_slot3;
            var19 = 9;
            var19 = var29[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.ImageWithPlaceholder;
            var19 = {};
            var19['uri'] = var28;
            var28 = var26.media;
            var28 = var28.placeholder;
            var19['placeholder'] = var28;
            var28 = var26.media;
            var28 = var28.placeholderVersion;
            var19['placeholderVersion'] = var28;
            var28 = var22.mediaImage;
            var19['style'] = var28;
            var19 = var21.bind(var5)(var20, var19);
            var15['children'] = var19;
            var14 = var17.bind(var5)(var16, var15);
case 30:
            var13[1] = var14;
            var14 = var26.title;
            var14 = var1 != var14;
            if(!var14) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var19 = _closure1_slot3;
            var15 = 8;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 2};
            var21 = var26.title;
            var20 = {};
            var20['guildId'] = var25;
            var20['channelId'] = var18;
            var19 = true;
            var19 = var24.bind(var5)(var21, var19, var20);
            var15['children'] = var19;
            var14 = var17.bind(var5)(var16, var15);
case 32:
            var13[2] = var14;
            var14 = var26.body;
            var14 = var14.length;
            var19 = 0;
            var14 = var14 > var19;
            if(!var14) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var20 = _closure1_slot3;
            var15 = 8;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-default', 'lineClamp': 3};
            var21 = var26.body;
            var20 = {};
            var20['guildId'] = var25;
            var20['channelId'] = var18;
            var18 = true;
            var18 = var24.bind(var5)(var21, var18, var20);
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 34:
            var13[3] = var14;
            var16 = _closure1_slot11;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = var22.metadataRow;
            var14['style'] = var17;
            var17 = var23.providerIconUrl;
            var18 = var1 != var17;
            if(!var18) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var21 = _closure1_slot10;
            var20 = _closure1_slot5;
            var17 = {};
            var24 = {};
            var25 = var23.providerIconUrl;
            var24['uri'] = var25;
            var17['source'] = var24;
            var24 = var22.embedProviderIcon;
            var17['style'] = var24;
            var18 = var21.bind(var5)(var20, var17);
case 36:
            var17 = new Array(3);
            var17[0] = var18;
            var21 = _closure1_slot11;
            var20 = _closure1_slot0;
            var18 = _closure1_slot3;
            var28 = 8;
            var18 = var18[var28];
            var18 = var20.bind(var5)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var24 = var23.providerName;
            var25 = var1 != var24;
            var30 = '';
            var24 = var30;
            if(!var25) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var29 = var23.providerName;
            var23 = global;
            var23 = var23.HermesInternal;
            var25 = var23.concat;
            var23 = ' · ';
            var24 = var25.bind(var30)(var29, var23);
case 38:
            var23 = new Array(2);
            var23[0] = var24;
            var25 = _closure1_slot0;
            var29 = _closure1_slot3;
            var24 = 10;
            var24 = var29[var24];
            var30 = var25.bind(var5)(var24);
            var29 = var30.dateFormat;
            var24 = global;
            var31 = var24.Date;
            var34 = var26.timestamp;
            var25 = var31.prototype;
            var25 = Object.create(var25, {constructor: {value: var31}});
            var35 = var25;
            var24 = new var35[var31](var34, var33);
            var25 = var24 instanceof Object ? var24 : var25;
            var24 = 'LL';
            var24 = var29.bind(var30)(var25, var24);
            var23[1] = var24;
            var18['children'] = var23;
            var18 = var21.bind(var5)(var20, var18);
            var17[1] = var18;
            var18 = var26.reactionCount;
            var18 = var18 > var19;
            if(!var18) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var21 = _closure1_slot11;
            var20 = _closure1_slot7;
            var19 = {};
            var22 = var22.reactionInfo;
            var19['style'] = var22;
            var29 = _closure1_slot10;
            var24 = _closure1_slot0;
            var23 = _closure1_slot3;
            var22 = 11;
            var22 = var23[var22];
            var22 = var24.bind(var5)(var22);
            var25 = var22.ReactionIcon;
            var22 = {};
            var30 = 'xs';
            var22['size'] = var30;
            var31 = _closure1_slot1;
            var30 = 6;
            var30 = var23[var30];
            var30 = var31.bind(var5)(var30);
            var30 = var30.colors;
            var30 = var30.TEXT_MUTED;
            var22['color'] = var30;
            var25 = var29.bind(var5)(var25, var22);
            var22 = new Array(2);
            var22[0] = var25;
            var25 = _closure1_slot10;
            var23 = var23[var28];
            var23 = var24.bind(var5)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var27 = _closure1_slot18;
            var26 = var26.reactionCount;
            var26 = var27.bind(var5)(var26);
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var22[1] = var23;
            var19['children'] = var22;
            var18 = var21.bind(var5)(var20, var19);
case 40:
            var17[2] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[4] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 18:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MessageAnnouncementCard(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var22 = var1.message;
            var _closure2_slot0 = var22;
            var2 = var1.onPress;
            var _closure2_slot1 = var2;
            var20 = var1.guildId;
            var14 = var1.channelId;
            var1 = _closure1_slot15;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var1 = _closure1_slot17;
            var19 = var1.bind(var4)();
            var1 = var22.media;
            var10 = null;
            var3 = var10 == var1;
            var2 = undefined;
            if(var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var2 = var1.proxyUrl;
case 8:
            if(!(var10 == var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var3 = var22.media;
            var6 = var10 == var3;
            var1 = undefined;
            if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = var3.url;
case 12:
            var2 = var1;
case 10:
            var3 = var10 != var2;
            var1 = null;
            if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 7;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.getPosterUrl;
            var6 = _closure1_slot12;
            var3 = 160;
            var1 = var7.bind(var8)(var2, var3, var6);
case 14:
            var13 = var2;
            if(!(var10 != var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var13 = var1;
case 16:
            var3 = _closure1_slot11;
            var2 = _closure1_slot8;
            var1 = {};
            var6 = var18.card;
            var1['style'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var5 = var22.title;
            var1['accessibilityLabel'] = var5;
            var5 = var22.media;
            var6 = var10 != var5;
            if(!var6) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var6 = var10 != var13;
case 42:
            if(!var6) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var8 = _closure1_slot10;
            var7 = _closure1_slot7;
            var5 = {};
            var9 = var18.smallCardMedia;
            var5['style'] = var9;
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot3;
            var9 = 9;
            var9 = var15[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.ImageWithPlaceholder;
            var9 = {};
            var9['uri'] = var13;
            var13 = var22.media;
            var13 = var13.placeholder;
            var9['placeholder'] = var13;
            var13 = var22.media;
            var13 = var13.placeholderVersion;
            var9['placeholderVersion'] = var13;
            var13 = var18.mediaImage;
            var9['style'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 44:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var18.cardBody;
            var6['style'] = var9;
            var9 = var22.title;
            var10 = var10 != var9;
            if(!var10) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 8;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 2};
            var16 = var22.title;
            var15 = {};
            var15['guildId'] = var20;
            var15['channelId'] = var14;
            var13 = true;
            var13 = var19.bind(var4)(var16, var13, var15);
            var9['children'] = var13;
            var10 = var12.bind(var4)(var11, var9);
case 46:
            var9 = new Array(3);
            var9[0] = var10;
            var10 = var22.body;
            var10 = var10.length;
            var15 = 0;
            var10 = var10 > var15;
            if(!var10) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var11 = 8;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-default', 'lineClamp': 3};
            var17 = var22.body;
            var16 = {};
            var16['guildId'] = var20;
            var16['channelId'] = var14;
            var14 = true;
            var14 = var19.bind(var4)(var17, var14, var16);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 48:
            var9[1] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot7;
            var10 = {};
            var13 = var18.metadataRow;
            var10['style'] = var13;
            var16 = _closure1_slot10;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var24 = 8;
            var13 = var20[var24];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var17 = 10;
            var17 = var20[var17];
            var21 = var19.bind(var4)(var17);
            var20 = var21.dateFormat;
            var17 = global;
            var25 = var17.Date;
            var30 = var22.timestamp;
            var19 = var25.prototype;
            var19 = Object.create(var19, {constructor: {value: var25}});
            var31 = var19;
            var17 = new var31[var25](var30, var29);
            var19 = var17 instanceof Object ? var17 : var19;
            var17 = 'LL';
            var17 = var20.bind(var21)(var19, var17);
            var13['children'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var22.reactionCount;
            var14 = var14 > var15;
            if(!var14) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var17 = _closure1_slot11;
            var16 = _closure1_slot7;
            var15 = {};
            var18 = var18.reactionInfo;
            var15['style'] = var18;
            var25 = _closure1_slot10;
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var18 = 11;
            var18 = var19[var18];
            var18 = var20.bind(var4)(var18);
            var21 = var18.ReactionIcon;
            var18 = {};
            var26 = 'xs';
            var18['size'] = var26;
            var27 = _closure1_slot1;
            var26 = 6;
            var26 = var19[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.TEXT_MUTED;
            var18['color'] = var26;
            var21 = var25.bind(var4)(var21, var18);
            var18 = new Array(2);
            var18[0] = var21;
            var21 = _closure1_slot10;
            var19 = var19[var24];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = _closure1_slot18;
            var22 = var22.reactionCount;
            var22 = var23.bind(var4)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 50:
            var13[1] = var14;
            var10['children'] = var13;
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
    var _closure1_slot20 = var1;
    var1 = function PollAnnouncementCard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var20 = var1.message;
            var _closure2_slot0 = var20;
            var1 = var1.onPress;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot15;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var _closure2_slot2 = var15;
            var22 = var20.poll;
            var1 = null;
            if(!(var1 != var22)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var4 = var22.answers;
            var3 = var4.slice;
            var17 = 0;
            var2 = 3;
            var19 = var3.bind(var4)(var17, var2);
            var2 = var22.answers;
            var3 = var2.length;
            var2 = var19.length;
            var27 = var3 - var2;
            var4 = _closure1_slot10;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var15.card;
            var2['style'] = var6;
            var6 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var6 = var22.question;
            var6 = var6.text;
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var15.cardBody;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var13 = 8;
            var9 = var9[var13];
            var9 = var10.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var12 = var22.question;
            var12 = var12.text;
            var9['children'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot7;
            var10 = {};
            var18 = var15.pollAnswers;
            var10['style'] = var18;
            var18 = var19.map;
            var16 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.pollAnswerOption;
                    var3['style'] = var6;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 8;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'text-default', 'lineClamp': 1};
                    var9 = var1.poll_media;
                    var10 = var9.text;
                    var9 = null;
                    var11 = var9 != var10;
                    var9 = '';
                    if(!var11) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var9 = var10;
case 54:
                    var6['children'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var1.answer_id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var18 = var18.bind(var19)(var16);
            var16 = new Array(2);
            var16[0] = var18;
            var17 = var27 > var17;
            if(!var17) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var21 = _closure1_slot10;
            var24 = _closure1_slot0;
            var28 = _closure1_slot3;
            var18 = var28[var13];
            var18 = var24.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var15.pollMoreOptions;
            var18['style'] = var23;
            var23 = 4;
            var25 = var28[var23];
            var25 = var24.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var23 = var28[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.t;
            var24 = var23.mv/nIa;
            var23 = {};
            var23['count'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var18['children'] = var23;
            var17 = var21.bind(var5)(var19, var18);
case 56:
            var16[1] = var17;
            var10['children'] = var16;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot7;
            var10 = {};
            var15 = var15.metadataRow;
            var10['style'] = var15;
            var15 = _closure1_slot10;
            var21 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = var23[var13];
            var13 = var21.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var16 = 4;
            var17 = var23[var16];
            var17 = var21.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.format;
            var16 = var23[var16];
            var16 = var21.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.t0FTsH;
            var16 = {};
            var24 = global;
            var25 = var24.Date;
            var30 = var20.timestamp;
            var24 = var25.prototype;
            var24 = Object.create(var24, {constructor: {value: var25}});
            var31 = var24;
            var20 = new var31[var25](var30, var29);
            var20 = var20 instanceof Object ? var20 : var24;
            var16['createdAt'] = var20;
            var20 = 7;
            var20 = var23[var20];
            var21 = var21.bind(var5)(var20);
            var20 = var21.getPollExpiryLabel;
            var20 = var20.bind(var21)(var22);
            var16['expiryLabel'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 52:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var8 = var7.bind(var1)(var4);
    var _closure1_slot4 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var7 = var4.Pressable;
    var _closure1_slot8 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot9 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 120;
    var _closure1_slot12 = var4;
    var4 = null;
    var _closure1_slot13 = var4;
    var _closure1_slot14 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['gap'] = var13;
    var4['container'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var13 = -var13;
    var10['marginHorizontal'] = var13;
    var13 = 'visible';
    var10['overflow'] = var13;
    var4['smallCardsScroller'] = var10;
    var10 = {};
    var13 = 'row';
    var10['flexDirection'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['gap'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var4['smallCardsContainer'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var4['sectionHeader'] = var10;
    var10 = {'height': 120, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['loadingContainer'] = var10;
    var10 = {'flexDirection': 'column', 'borderRadius': null, 'overflow': 'hidden', 'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'width': 160};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderColor'] = var13;
    var4['card'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['padding'] = var13;
    var4['cardBody'] = var10;
    var10 = {'height': 120, 'overflow': 'hidden', 'flexShrink': 0};
    var4['smallCardMedia'] = var10;
    var10 = {'width': '100%', 'height': '100%', 'resizeMode': 'cover'};
    var4['mediaImage'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'marginTop': 'auto'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['gap'] = var13;
    var4['metadataRow'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['reactionInfo'] = var10;
    var10 = {'flex': 1, 'gap': null, 'borderLeftWidth': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderLeftColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderTopLeftRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderBottomLeftRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['paddingLeft'] = var13;
    var4['embedContentArea'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['embedAuthorRow'] = var10;
    var10 = {'width': 20, 'height': 20};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['embedAuthorIcon'] = var10;
    var10 = {'width': 16, 'height': 16};
    var4['embedProviderIcon'] = var10;
    var10 = {'overflow': 'hidden', 'borderRadius': null, 'aspectRatio': 1.7777777777777777};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var4['embedMedia'] = var10;
    var10 = {'flexDirection': 'column', 'gap': null, 'flex': 1};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['pollAnswers'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['paddingVertical'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var13;
    var4['pollAnswerOption'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['paddingHorizontal'] = var11;
    var4['pollMoreOptions'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = var2.message;
            var1 = var1.poll;
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 12; continue _fun0007 }
case 58:
            var1 = var2.message;
            var1 = var1.embedSource;
            if(!(var3 == var1)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var5 = _closure1_slot10;
            var4 = _closure1_slot20;
            var3 = {};
            var8 = var3;
            var7 = var2;
            var1 = copyDataProperties(var8, var7);
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0007_ip = 61; continue _fun0007;
case 59:
            var6 = _closure1_slot10;
            var5 = _closure1_slot19;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = undefined;
            var1 = var6.bind(var3)(var5, var4);
case 61:
            _fun0007_ip = 62; continue _fun0007;
case 12:
            var5 = _closure1_slot10;
            var4 = _closure1_slot21;
            var3 = {};
            var8 = var3;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 62:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileAnnouncements.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileAnnouncements(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var8 = var1.gameId;
            var _closure2_slot0 = var8;
            var15 = var1.invite;
            var _closure2_slot1 = var15;
            var16 = var1.closeModal;
            var _closure2_slot2 = var16;
            var18 = var1.trackAction;
            var _closure2_slot3 = var18;
            var3 = var1.scrollOffsetRef;
            var _closure2_slot4 = var3;
            var1 = _closure1_slot15;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 12;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = var1.analyticsLocations;
            var _closure2_slot5 = var9;
            var1 = 13;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = 10;
            var2 = var2.bind(var5)(var8, var1);
            var14 = var2.messages;
            var1 = var2.channelId;
            var _closure2_slot6 = var1;
            var13 = var2.guildId;
            var _closure2_slot7 = var13;
            var2 = var2.loading;
            var7 = _closure1_slot4;
            var17 = var7.useCallback;
            var6 = new Array(8);
            var6[0] = var18;
            var6[1] = var16;
            var6[2] = var15;
            var6[3] = var13;
            var6[4] = var1;
            var6[5] = var9;
            var6[6] = var8;
            var6[7] = var3;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 58:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var6 = var2.id;
case 63:
                    if(!(var5 == var6)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var6 = _closure2_slot7;
case 65:
                    var2 = var5 != var6;
                    if(!var2) { _fun0009_ip = 7; continue _fun0009 }
case 67:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 7:
                    if(!var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var5 = _closure2_slot3;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 14;
                    var3 = var7[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.GameProfileTrackActionActions;
                    var3 = var3.Announcements;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var2 = 15;
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
                    var2 = 16;
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
case 68:
                    return var1;
                }
            };
            var17 = var17.bind(var7)(var4, var6);
            var6 = var7.useCallback;
            var4 = new Array(8);
            var4[0] = var18;
            var4[1] = var16;
            var4[2] = var15;
            var4[3] = var13;
            var4[4] = var1;
            var4[5] = var9;
            var4[6] = var8;
            var4[7] = var3;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 58:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var6 = var2.id;
case 63:
                    if(!(var5 == var6)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var6 = _closure2_slot7;
case 65:
                    var2 = var5 != var6;
                    if(!var2) { _fun0010_ip = 7; continue _fun0010 }
case 67:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 7:
                    if(!var2) { _fun0010_ip = 70; continue _fun0010 }
case 69:
                    var5 = _closure2_slot3;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 14;
                    var3 = var7[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.GameProfileTrackActionActions;
                    var3 = var3.AnnouncementsItem;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var2 = 15;
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
                    var2 = 16;
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
case 70:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            var _closure2_slot8 = var3;
            if(var2) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var4 = null;
            var2 = var4 == var1;
            var1 = null;
            if(var2) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var3 = var14.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0008_ip = 73; continue _fun0008 }
case 75:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var11.container;
            var2['style'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var11.sectionHeader;
            var6['style'] = var9;
            var15 = _closure1_slot10;
            var19 = _closure1_slot0;
            var22 = _closure1_slot3;
            var9 = 8;
            var9 = var22[var9];
            var9 = var19.bind(var5)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var18 = 4;
            var16 = var22[var18];
            var16 = var19.bind(var5)(var16);
            var21 = var16.intl;
            var20 = var21.string;
            var16 = var22[var18];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.B0BV3Y;
            var16 = var20.bind(var21)(var16);
            var9['children'] = var16;
            var13 = var15.bind(var5)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var16 = _closure1_slot10;
            var13 = 17;
            var13 = var22[var13];
            var13 = var19.bind(var5)(var13);
            var15 = var13.Button;
            var13 = {'text': null, 'variant': 'tertiary', 'size': 'sm', 'icon': null, 'iconPosition': 'end'};
            var20 = var22[var18];
            var20 = var19.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.budhsM;
            var18 = var20.bind(var21)(var18);
            var13['text'] = var18;
            var21 = 'sm';
            var20 = _closure1_slot10;
            var18 = 18;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.ChevronSmallRightIcon;
            var18 = {};
            var18['size'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var13['icon'] = var18;
            var13['onPress'] = var17;
            var13 = var16.bind(var5)(var15, var13);
            var9[1] = var13;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot6;
            var7 = {'horizontal': true, 'showsHorizontalScrollIndicator': false, 'style': null, 'contentContainerStyle': null, 'decelerationRate': 'fast', 'snapToInterval': 172, 'snapToStart': false, 'snapToEnd': false};
            var13 = var11.smallCardsScroller;
            var7['style'] = var13;
            var13 = var11.smallCardsContainer;
            var7['contentContainerStyle'] = var13;
            var13 = var14.map;
            var12 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var4 = _closure1_slot16;
                var3 = {};
                var3['message'] = var1;
                var6 = _closure2_slot8;
                var3['onPress'] = var6;
                var6 = _closure2_slot7;
                var3['guildId'] = var6;
                var2 = _closure2_slot6;
                var3['channelId'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var12 = var13.bind(var14)(var12);
            var7['children'] = var12;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 73:
            _fun0008_ip = 76; continue _fun0008;
case 71:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var11.container;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var11.sectionHeader;
            var6['style'] = var9;
            var13 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 8;
            var9 = var18[var9];
            var9 = var17.bind(var5)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var14 = 4;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.B0BV3Y;
            var14 = var15.bind(var16)(var14);
            var9['children'] = var14;
            var9 = var13.bind(var5)(var12, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.loadingContainer;
            var7['style'] = var11;
            var12 = _closure1_slot10;
            var11 = _closure1_slot9;
            var10 = {};
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 76:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();