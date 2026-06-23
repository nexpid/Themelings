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
    var1 = function EmbedAnnouncementCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.variant;
            var26 = var1.message;
            var6 = var1.onPress;
            var27 = var1.guildId;
            var18 = var1.channelId;
            var1 = _closure1_slot11;
            var5 = undefined;
            var22 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot3;
            var21 = 5;
            var1 = var1[var21];
            var3 = var3.bind(var5)(var1);
            var1 = function() {
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
            var23 = var3.bind(var5)(var1);
            var1 = 'main';
            var28 = var1 === var2;
            var2 = var26.media;
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.proxyUrl;
case 2:
            if(!(var1 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var26.media;
            var7 = var1 == var4;
            var2 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4.url;
case 6:
            var3 = var2;
case 4:
            var4 = var1 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 7;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.getPosterUrl;
            var2 = var4.bind(var7)(var3);
case 8:
            var30 = var3;
            if(!(var1 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var30 = var2;
case 10:
            var25 = var26.embedSource;
            if(!(var1 != var25)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var25.color;
            var2 = var1 != var2;
            var14 = undefined;
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = {};
            var3 = var25.color;
            var2['borderLeftColor'] = var3;
            var14 = var2;
case 14:
            var4 = _closure1_slot9;
            var3 = _closure1_slot7;
            var2 = {};
            var8 = var22.card;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var28;
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var22.mainCardTextOnly;
case 16:
            var7[1] = var8;
            var2['style'] = var7;
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var6 = var26.title;
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var22.cardBody;
            var6['style'] = var9;
            var9 = var25.url;
            var10 = var1 != var9;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 8;
            var9 = var13[var9];
            var9 = var11.bind(var5)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-xs/medium', 'color': 'text-link', 'lineClamp': 1};
            var13 = var25.url;
            var9['children'] = var13;
            var10 = var12.bind(var5)(var11, var9);
case 18:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot6;
            var10 = {};
            var15 = var22.embedContentArea;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var10['style'] = var13;
            var13 = var25.authorName;
            var14 = var1 != var13;
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = _closure1_slot10;
            var15 = _closure1_slot6;
            var13 = {};
            var17 = var22.embedAuthorRow;
            var13['style'] = var17;
            var17 = var25.authorIconUrl;
            var19 = var1 != var17;
            if(!var19) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var29 = _closure1_slot9;
            var20 = _closure1_slot5;
            var17 = {};
            var31 = {};
            var32 = var25.authorIconUrl;
            var31['uri'] = var32;
            var17['source'] = var31;
            var31 = var22.embedAuthorIcon;
            var17['style'] = var31;
            var19 = var29.bind(var5)(var20, var17);
case 22:
            var17 = new Array(2);
            var17[0] = var19;
            var29 = _closure1_slot9;
            var20 = _closure1_slot0;
            var31 = _closure1_slot3;
            var19 = 8;
            var19 = var31[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/semibold', 'color': 'text-strong', 'lineClamp': 1};
            var31 = var25.authorName;
            var19['children'] = var31;
            var19 = var29.bind(var5)(var20, var19);
            var17[1] = var19;
            var13['children'] = var17;
            var14 = var16.bind(var5)(var15, var13);
case 20:
            var13 = new Array(5);
            var13[0] = var14;
            var14 = var26.media;
            var14 = var1 != var14;
            if(!var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var14 = var1 != var30;
case 24:
            if(!var14) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var17 = _closure1_slot9;
            var16 = _closure1_slot6;
            var15 = {};
            var19 = var22.embedMedia;
            var15['style'] = var19;
            var29 = _closure1_slot9;
            var20 = _closure1_slot0;
            var31 = _closure1_slot3;
            var19 = 9;
            var19 = var31[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.ImageWithPlaceholder;
            var19 = {};
            var19['uri'] = var30;
            var30 = var26.media;
            var30 = var30.placeholder;
            var19['placeholder'] = var30;
            var30 = var26.media;
            var30 = var30.placeholderVersion;
            var19['placeholderVersion'] = var30;
            var30 = var22.mediaImage;
            var19['style'] = var30;
            var19 = var29.bind(var5)(var20, var19);
            var15['children'] = var19;
            var14 = var17.bind(var5)(var16, var15);
case 26:
            var13[1] = var14;
            var14 = var26.title;
            var14 = var1 != var14;
            if(!var14) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var19 = _closure1_slot3;
            var15 = 8;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var19 = 2;
            if(!var28) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var19 = 1;
case 30:
            var15['lineClamp'] = var19;
            var29 = var26.title;
            var20 = {};
            var20['guildId'] = var27;
            var20['channelId'] = var18;
            var19 = true;
            var19 = var23.bind(var5)(var29, var19, var20);
            var15['children'] = var19;
            var14 = var17.bind(var5)(var16, var15);
case 28:
            var13[2] = var14;
            var14 = var26.body;
            var14 = var14.length;
            var19 = 0;
            var14 = var14 > var19;
            if(!var14) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var20 = _closure1_slot3;
            var15 = 8;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var20 = 3;
            if(!var28) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var20 = var21;
case 34:
            var15['lineClamp'] = var20;
            var21 = var26.body;
            var20 = {};
            var20['guildId'] = var27;
            var20['channelId'] = var18;
            var18 = true;
            var18 = var23.bind(var5)(var21, var18, var20);
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 32:
            var13[3] = var14;
            var16 = _closure1_slot10;
            var15 = _closure1_slot6;
            var14 = {};
            var17 = var22.metadataRow;
            var14['style'] = var17;
            var17 = var25.providerIconUrl;
            var18 = var1 != var17;
            if(!var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var21 = _closure1_slot9;
            var20 = _closure1_slot5;
            var17 = {};
            var23 = {};
            var27 = var25.providerIconUrl;
            var23['uri'] = var27;
            var17['source'] = var23;
            var23 = var22.embedProviderIcon;
            var17['style'] = var23;
            var18 = var21.bind(var5)(var20, var17);
case 36:
            var17 = new Array(3);
            var17[0] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var18 = _closure1_slot3;
            var23 = 8;
            var18 = var18[var23];
            var18 = var20.bind(var5)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var27 = var25.providerName;
            var28 = var1 != var27;
            var30 = '';
            var27 = var30;
            if(!var28) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var29 = var25.providerName;
            var25 = global;
            var25 = var25.HermesInternal;
            var28 = var25.concat;
            var25 = ' · ';
            var27 = var28.bind(var30)(var29, var25);
case 38:
            var25 = new Array(2);
            var25[0] = var27;
            var28 = _closure1_slot0;
            var29 = _closure1_slot3;
            var27 = 10;
            var27 = var29[var27];
            var31 = var28.bind(var5)(var27);
            var30 = var31.dateFormat;
            var27 = global;
            var32 = var27.Date;
            var35 = var26.timestamp;
            var29 = var32.prototype;
            var29 = Object.create(var29, {constructor: {value: var32}});
            var36 = var29;
            var28 = new var36[var32](var35, var34);
            var29 = var28 instanceof Object ? var28 : var29;
            var28 = 'LL';
            var28 = var30.bind(var31)(var29, var28);
            var25[1] = var28;
            var18['children'] = var25;
            var18 = var21.bind(var5)(var20, var18);
            var17[1] = var18;
            var18 = var26.reactionCount;
            var18 = var18 > var19;
            if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var21 = _closure1_slot10;
            var20 = _closure1_slot6;
            var19 = {};
            var22 = var22.reactionInfo;
            var19['style'] = var22;
            var29 = _closure1_slot9;
            var28 = _closure1_slot0;
            var30 = _closure1_slot3;
            var22 = 11;
            var22 = var30[var22];
            var22 = var28.bind(var5)(var22);
            var25 = var22.ReactionIcon;
            var22 = {};
            var31 = 'xs';
            var22['size'] = var31;
            var32 = _closure1_slot1;
            var31 = 4;
            var31 = var30[var31];
            var31 = var32.bind(var5)(var31);
            var31 = var31.colors;
            var31 = var31.TEXT_MUTED;
            var22['color'] = var31;
            var25 = var29.bind(var5)(var25, var22);
            var22 = new Array(2);
            var22[0] = var25;
            var25 = _closure1_slot9;
            var23 = var30[var23];
            var23 = var28.bind(var5)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var27 = var27.Intl;
            var29 = var27.NumberFormat;
            var27 = 12;
            var27 = var30[var27];
            var27 = var28.bind(var5)(var27);
            var27 = var27.intl;
            var35 = var27.currentLocale;
            var28 = var29.prototype;
            var28 = Object.create(var28, {constructor: {value: var29}});
            var36 = var28;
            var27 = new var36[var29](var35, var34);
            var28 = var27 instanceof Object ? var27 : var28;
            var27 = var28.format;
            var26 = var26.reactionCount;
            var26 = var27.bind(var28)(var26);
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
case 12:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function MessageAnnouncementCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.variant;
            var22 = var1.message;
            var5 = var1.onPress;
            var21 = var1.guildId;
            var14 = var1.channelId;
            var1 = _closure1_slot11;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot3;
            var17 = 5;
            var1 = var1[var17];
            var3 = var3.bind(var4)(var1);
            var1 = function() {
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
            var19 = var3.bind(var4)(var1);
            var1 = 'main';
            var23 = var1 === var2;
            var1 = var22.media;
            var10 = null;
            var3 = var10 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var1.proxyUrl;
case 2:
            if(!(var10 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var22.media;
            var6 = var10 == var3;
            var1 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.url;
case 6:
            var2 = var1;
case 4:
            var3 = var10 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 7;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.getPosterUrl;
            var1 = var3.bind(var6)(var2);
case 8:
            var13 = var2;
            if(!(var10 != var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = var1;
case 10:
            var1 = var22.media;
            var8 = var10 != var1;
            if(!var8) { _fun0002_ip = 42; continue _fun0002 }
case 13:
            var8 = var10 != var13;
case 42:
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = var18.card;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = !var8;
            if(var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var7 = var23;
case 43:
            if(!var7) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var7 = var18.mainCardTextOnly;
case 45:
            var6[1] = var7;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var5 = var22.title;
            var1['accessibilityLabel'] = var5;
            var5 = var22.media;
            var6 = var10 != var5;
            if(!var6) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var6 = var10 != var13;
case 47:
            if(!var6) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var5 = {};
            if(var23) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var9 = var18.smallCardMedia;
            _fun0002_ip = 53; continue _fun0002;
case 51:
            var9 = var18.mainCardMedia;
case 53:
            var5['style'] = var9;
            var12 = _closure1_slot9;
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
case 49:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var18.cardBody;
            var6['style'] = var9;
            var9 = var22.title;
            var10 = var10 != var9;
            if(!var10) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var12 = _closure1_slot9;
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 8;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var13 = 2;
            if(!var23) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var13 = 1;
case 56:
            var9['lineClamp'] = var13;
            var16 = var22.title;
            var15 = {};
            var15['guildId'] = var21;
            var15['channelId'] = var14;
            var13 = true;
            var13 = var19.bind(var4)(var16, var13, var15);
            var9['children'] = var13;
            var10 = var12.bind(var4)(var11, var9);
case 54:
            var9 = new Array(3);
            var9[0] = var10;
            var10 = var22.body;
            var10 = var10.length;
            var15 = 0;
            var10 = var10 > var15;
            if(!var10) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var11 = 8;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var16 = 3;
            if(!var23) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var16 = var17;
case 60:
            var11['lineClamp'] = var16;
            var17 = var22.body;
            var16 = {};
            var16['guildId'] = var21;
            var16['channelId'] = var14;
            var14 = true;
            var14 = var19.bind(var4)(var17, var14, var16);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 58:
            var9[1] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var18.metadataRow;
            var10['style'] = var13;
            var16 = _closure1_slot9;
            var21 = _closure1_slot0;
            var23 = _closure1_slot3;
            var19 = 8;
            var13 = var23[var19];
            var13 = var21.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var17 = 10;
            var17 = var23[var17];
            var25 = var21.bind(var4)(var17);
            var24 = var25.dateFormat;
            var23 = global;
            var26 = var23.Date;
            var31 = var22.timestamp;
            var21 = var26.prototype;
            var21 = Object.create(var21, {constructor: {value: var26}});
            var32 = var21;
            var17 = new var32[var26](var31, var30);
            var21 = var17 instanceof Object ? var17 : var21;
            var17 = 'LL';
            var17 = var24.bind(var25)(var21, var17);
            var13['children'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var22.reactionCount;
            var14 = var14 > var15;
            if(!var14) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var17 = _closure1_slot10;
            var16 = _closure1_slot6;
            var15 = {};
            var18 = var18.reactionInfo;
            var15['style'] = var18;
            var25 = _closure1_slot9;
            var24 = _closure1_slot0;
            var26 = _closure1_slot3;
            var18 = 11;
            var18 = var26[var18];
            var18 = var24.bind(var4)(var18);
            var21 = var18.ReactionIcon;
            var18 = {};
            var27 = 'xs';
            var18['size'] = var27;
            var28 = _closure1_slot1;
            var27 = 4;
            var27 = var26[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.colors;
            var27 = var27.TEXT_MUTED;
            var18['color'] = var27;
            var21 = var25.bind(var4)(var21, var18);
            var18 = new Array(2);
            var18[0] = var21;
            var21 = _closure1_slot9;
            var19 = var26[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var23.Intl;
            var25 = var23.NumberFormat;
            var23 = 12;
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.intl;
            var31 = var23.currentLocale;
            var24 = var25.prototype;
            var24 = Object.create(var24, {constructor: {value: var25}});
            var32 = var24;
            var23 = new var32[var25](var31, var30);
            var24 = var23 instanceof Object ? var23 : var24;
            var23 = var24.format;
            var22 = var22.reactionCount;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 62:
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
    var _closure1_slot13 = var1;
    var1 = function PollAnnouncementCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.variant;
            var20 = var1.message;
            var6 = var1.onPress;
            var1 = _closure1_slot11;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var _closure2_slot0 = var15;
            var22 = var20.poll;
            var1 = null;
            if(!(var1 != var22)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var4 = var22.answers;
            var3 = var4.slice;
            var17 = 0;
            var2 = 3;
            var19 = var3.bind(var4)(var17, var2);
            var2 = var22.answers;
            var3 = var2.length;
            var2 = var19.length;
            var27 = var3 - var2;
            var4 = _closure1_slot9;
            var3 = _closure1_slot7;
            var2 = {};
            var8 = var15.card;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = 'main';
            var8 = var8 === var9;
            if(!var8) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var8 = var15.mainCardTextOnly;
case 66:
            var7[1] = var8;
            var2['style'] = var7;
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var6 = var22.question;
            var6 = var6.text;
            var2['accessibilityLabel'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var15.cardBody;
            var6['style'] = var9;
            var11 = _closure1_slot9;
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
            var12 = _closure1_slot10;
            var11 = _closure1_slot6;
            var10 = {};
            var18 = var15.pollAnswers;
            var10['style'] = var18;
            var18 = var19.map;
            var16 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.pollAnswerOption;
                    var3['style'] = var6;
                    var8 = _closure1_slot9;
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
                    if(!var11) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var9 = var10;
case 68:
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
            if(!var17) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var21 = _closure1_slot9;
            var24 = _closure1_slot0;
            var28 = _closure1_slot3;
            var18 = var28[var13];
            var18 = var24.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var23 = var15.pollMoreOptions;
            var18['style'] = var23;
            var23 = 12;
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
case 70:
            var16[1] = var17;
            var10['children'] = var16;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot6;
            var10 = {};
            var15 = var15.metadataRow;
            var10['style'] = var15;
            var15 = _closure1_slot9;
            var21 = _closure1_slot0;
            var23 = _closure1_slot3;
            var13 = var23[var13];
            var13 = var21.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var16 = 12;
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
case 64:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function AnnouncementCard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.message;
            var1 = var1.poll;
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var1 = var2.message;
            var1 = var1.embedSource;
            if(!(var3 == var1)) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var5 = _closure1_slot9;
            var4 = _closure1_slot13;
            var3 = {};
            var8 = var3;
            var7 = var2;
            var1 = copyDataProperties(var8, var7);
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0005_ip = 76; continue _fun0005;
case 74:
            var6 = _closure1_slot9;
            var5 = _closure1_slot12;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = undefined;
            var1 = var6.bind(var3)(var5, var4);
case 76:
            _fun0005_ip = 77; continue _fun0005;
case 72:
            var5 = _closure1_slot9;
            var4 = _closure1_slot14;
            var3 = {};
            var8 = var3;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 77:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var7 = var4.Pressable;
    var _closure1_slot7 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot8 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {};
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var4['gap'] = var10;
    var7['container'] = var4;
    var4 = {};
    var10 = 'column';
    var4['flexDirection'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var4['gap'] = var10;
    var7['cardsContainer'] = var4;
    var4 = {};
    var10 = 'row';
    var4['flexDirection'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var4['gap'] = var10;
    var7['smallCardsContainer'] = var4;
    var4 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var4['paddingHorizontal'] = var10;
    var7['sectionHeader'] = var4;
    var4 = {'height': 180, 'alignItems': 'center', 'justifyContent': 'center'};
    var7['loadingContainer'] = var4;
    var4 = {'flexDirection': 'column', 'borderRadius': null, 'overflow': 'hidden', 'backgroundColor': null, 'borderWidth': 1, 'borderColor': null, 'flex': 1};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var4['borderRadius'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var4['backgroundColor'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var4['borderColor'] = var10;
    var7['card'] = var4;
    var4 = {};
    var10 = 148;
    var4['minHeight'] = var10;
    var7['mainCardTextOnly'] = var4;
    var4 = {'height': 180, 'overflow': 'hidden', 'flexShrink': 0};
    var7['mainCardMedia'] = var4;
    var4 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'overflow': 'hidden'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var4['gap'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var4['padding'] = var10;
    var7['cardBody'] = var4;
    var4 = {'height': 120, 'overflow': 'hidden', 'flexShrink': 0};
    var7['smallCardMedia'] = var4;
    var4 = {'width': '100%', 'height': '100%', 'resizeMode': 'cover'};
    var7['mediaImage'] = var4;
    var4 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'marginTop': 'auto'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var4['gap'] = var10;
    var7['metadataRow'] = var4;
    var4 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var4['gap'] = var10;
    var7['reactionInfo'] = var4;
    var4 = {'flex': 1, 'gap': null, 'borderLeftWidth': 4};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var4['gap'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var4['borderLeftColor'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var4['borderTopLeftRadius'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var4['borderBottomLeftRadius'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var4['paddingLeft'] = var10;
    var7['embedContentArea'] = var4;
    var4 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var4['gap'] = var10;
    var7['embedAuthorRow'] = var4;
    var10 = {'width': 20, 'height': 20};
    var4 = 20;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var7['embedAuthorIcon'] = var10;
    var10 = {'width': 16, 'height': 16};
    var7['embedProviderIcon'] = var10;
    var10 = {'overflow': 'hidden', 'borderRadius': null, 'aspectRatio': 1.7777777777777777};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var7['embedMedia'] = var10;
    var10 = {'flexDirection': 'column', 'gap': null, 'flex': 1};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var7['pollAnswers'] = var10;
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
    var7['pollAnswerOption'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['paddingHorizontal'] = var11;
    var7['pollMoreOptions'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileAnnouncements.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileAnnouncements(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            var1 = _closure1_slot11;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0007_ip = 78; continue _fun0007 }
case 73:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var6 = var2.id;
case 78:
                    if(!(var5 == var6)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                    var6 = _closure2_slot7;
case 80:
                    var2 = var5 != var6;
                    if(!var2) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 82:
                    if(!var2) { _fun0007_ip = 84; continue _fun0007 }
case 85:
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
case 84:
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0008_ip = 78; continue _fun0008 }
case 73:
                    var2 = _closure2_slot1;
                    var2 = var2.guild;
                    var3 = var5 == var2;
                    var6 = undefined;
                    if(var3) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var6 = var2.id;
case 78:
                    if(!(var5 == var6)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var6 = _closure2_slot7;
case 80:
                    var2 = var5 != var6;
                    if(!var2) { _fun0008_ip = 82; continue _fun0008 }
case 83:
                    var3 = _closure2_slot6;
                    var2 = var5 != var3;
case 82:
                    if(!var2) { _fun0008_ip = 46; continue _fun0008 }
case 85:
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
case 46:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var _closure2_slot8 = var2;
            if(var1) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var1 = null;
            if(!(var1 != var18)) { _fun0006_ip = 88; continue _fun0006 }
case 48:
            var2 = var6.length;
            var14 = 0;
            if(!(var14 !== var2)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var3 = var6.length;
            var2 = 2;
            var2 = var2 !== var3;
            var21 = null;
            if(!var2) { _fun0006_ip = 90; continue _fun0006 }
case 51:
            var21 = var6[var14];
case 90:
            _closure2_slot9 = var21;
            var19 = var6;
            if(!var2) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            var5 = var6.slice;
            var3 = 1;
            var2 = 3;
            var19 = var5.bind(var6)(var3, var2);
case 91:
            var5 = _closure1_slot10;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var10.sectionHeader;
            var6['style'] = var11;
            var13 = _closure1_slot9;
            var23 = _closure1_slot0;
            var26 = _closure1_slot3;
            var11 = 8;
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
            var15 = _closure1_slot9;
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
            var24 = _closure1_slot9;
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
            var11 = _closure1_slot10;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var10.cardsContainer;
            var7['style'] = var12;
            var13 = var1 != var21;
            if(!var13) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var16 = _closure1_slot9;
            var15 = _closure1_slot15;
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
case 93:
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var19.length;
            var13 = var13 > var14;
            if(!var13) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var16 = _closure1_slot9;
            var15 = _closure1_slot6;
            var14 = {};
            var18 = var10.smallCardsContainer;
            var14['style'] = var18;
            var18 = var19.map;
            var17 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot9;
                var4 = _closure1_slot15;
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
case 95:
            var12[1] = var13;
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 88:
            return var1;
case 86:
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var10.sectionHeader;
            var5['style'] = var8;
            var12 = _closure1_slot9;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var8 = 8;
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
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var10.loadingContainer;
            var6['style'] = var10;
            var11 = _closure1_slot9;
            var10 = _closure1_slot8;
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