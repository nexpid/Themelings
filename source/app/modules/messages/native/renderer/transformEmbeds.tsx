// app/modules/messages/native/renderer/transformEmbeds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.proxyURL;
            var4 = var1.url;
            var3 = null;
            var1 = var4;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = '';
            var1 = var4;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot4 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/transformEmbeds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformEmbeds(arg1) {
        var2 = arg1;
        var3 = var2.embeds;
        var4 = var2.channelId;
        var _closure2_slot0 = var4;
        var4 = var2.gifAutoPlay;
        var _closure2_slot1 = var4;
        var4 = var2.hasSpoilerEmbeds;
        var _closure2_slot2 = var4;
        var4 = var2.ignoreEmbedDescriptionCache;
        var _closure2_slot3 = var4;
        var4 = var2.shouldInlineEmbedMedia;
        var _closure2_slot4 = var4;
        var4 = var2.colors;
        var _closure2_slot5 = var4;
        var4 = var2.showListsAndHeaders;
        var _closure2_slot6 = var4;
        var4 = var2.showMaskedLinks;
        var _closure2_slot7 = var4;
        var4 = var2.themedBackgroundColor;
        var _closure2_slot8 = var4;
        var4 = var2.enabledContentHarmTypeFlags;
        var _closure2_slot9 = var4;
        var4 = var2.authorIsBot;
        var _closure2_slot10 = var4;
        var4 = var2.showContentInventoryEntryFallbackEmbed;
        var _closure2_slot11 = var4;
        var4 = var2.shouldAgeVerify;
        var _closure2_slot12 = var4;
        var2 = var2.transformComponents;
        var _closure2_slot13 = var2;
        var2 = function renderEmbedMedia(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var7 = var3.url;
                var2 = var3.proxyURL;
                var6 = var3.width;
                var5 = var3.height;
                var1 = {};
                var14 = var1;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var8 = null;
                var4 = var2;
                if(!(var8 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 2;
                var9 = var9[var3];
                var3 = undefined;
                var10 = var10.bind(var3)(var9);
                var9 = var10.getImageSrc;
                var3 = _closure2_slot1;
                var11 = !var3;
                var15 = var10;
                var14 = var2;
                var13 = var6;
                var12 = var5;
                var4 = var15[var9](var14, var13, var12, var11, var10);
case 5:
                var3 = 'proxyURL';
                var1[var3] = var4;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var9.bind(var3)(var4);
                var3 = var4.getImageSrc;
                if(!(var8 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = var2;
case 7:
                var2 = _closure2_slot1;
                var11 = !var2;
                var15 = var4;
                var14 = var7;
                var13 = var6;
                var12 = var5;
                var3 = var15[var3](var14, var13, var12, var11, var10);
                var2 = 'url';
                var1[var2] = var3;
                return var1;
            }
        };
        var _closure2_slot14 = var2;
        var2 = var3.flatMap;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.POST_PREVIEW;
                if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFT;
                if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.SAFETY_POLICY_NOTICE;
                if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.SAFETY_SYSTEM_NOTIFICATION;
                if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                if(!(var2 !== var1)) { _fun0003_ip = 9; continue _fun0003 }
case 14:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.COMPONENTS;
                if(!(var2 === var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = var4.components;
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var1 = var4.components;
                var2 = var1.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isServerShopArticleEmbed;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var3 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VOICE_CHANNEL;
                if(!(var3 !== var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isContentInventoryFallbackEmbed;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var1 = _closure2_slot11;
                if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                var1 = new Array(0);
                return var1;
case 23:
                var1 = _closure2_slot4;
                var5 = null;
                var6 = null;
                if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var1 = var4.thumbnail;
                var1 = var5 != var1;
                var6 = null;
                if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                var8 = var4.thumbnail;
                var12 = var8.url;
                var7 = var8.proxyURL;
                var11 = var8.width;
                var10 = var8.height;
                var1 = {};
                var30 = var1;
                var29 = var8;
                var8 = copyDataProperties(var30, var29);
                var9 = var7;
                if(!(var5 != var7)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 2;
                var8 = var14[var8];
                var14 = var13.bind(var2)(var8);
                var13 = var14.getImageSrc;
                var8 = _closure2_slot1;
                var27 = !var8;
                var31 = var14;
                var30 = var7;
                var29 = var11;
                var28 = var10;
                var9 = var31[var13](var30, var29, var28, var27, var26);
case 29:
                var8 = 'proxyURL';
                var1[var8] = var9;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 2;
                var8 = var13[var8];
                var9 = var9.bind(var2)(var8);
                var8 = var9.getImageSrc;
                if(!(var5 != var7)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var12 = var7;
case 31:
                var7 = _closure2_slot1;
                var27 = !var7;
                var31 = var9;
                var30 = var12;
                var29 = var11;
                var28 = var10;
                var8 = var31[var8](var30, var29, var28, var27, var26);
                var7 = 'url';
                var1[var7] = var8;
                var6 = var1;
case 26:
                var1 = _closure2_slot4;
                var12 = null;
                if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var1 = var4.image;
                var1 = var5 != var1;
                var12 = null;
                if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 35:
                var7 = _closure2_slot14;
                var1 = var4.image;
                var12 = var7.bind(var2)(var1);
case 33:
                var1 = _closure2_slot4;
                if(!var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var1 = var4.images;
                if(!(var5 == var1)) { _fun0003_ip = 38; continue _fun0003 }
case 36:
                var7 = var5 == var12;
                if(var7) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var1 = var9[var1];
                var8 = var8.bind(var2)(var1);
                var1 = var8.isIOS;
                var1 = var1.bind(var8)();
                var7 = !var1;
case 39:
                var1 = !var7;
                if(var7) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var7 = var4.thumbnail;
                var1 = var5 == var7;
case 41:
                var11 = null;
                if(!var1) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var1 = var5 != var12;
                var11 = null;
                if(!var1) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                var1 = new Array(1);
                var1[0] = var12;
                var11 = var1;
case 43:
                _fun0003_ip = 46; continue _fun0003;
case 38:
                var8 = var4.images;
                var7 = var8.map;
                var1 = _closure2_slot14;
                var11 = var7.bind(var8)(var1);
case 46:
                var13 = var6;
                if(!(var5 != var13)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var1 = var4.video;
                var13 = var6;
                if(!(var5 != var1)) { _fun0003_ip = 47; continue _fun0003 }
case 49:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                if(!(var7 === var1)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var1 = _closure2_slot1;
                if(var1) { _fun0003_ip = 52; continue _fun0003 }
case 50:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                if(!(var7 !== var1)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var7 !== var1)) { _fun0003_ip = 53; continue _fun0003 }
case 55:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.ARTICLE;
                if(!(var7 === var1)) { _fun0003_ip = 56; continue _fun0003 }
case 53:
                var1 = var4.video;
                var1 = var1.proxyURL;
                if(!(var5 == var1)) { _fun0003_ip = 52; continue _fun0003 }
case 56:
                var8 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var7 = var6;
                if(!(var8 === var1)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var1 = var4.video;
                var1 = var1.proxyURL;
                var7 = var6;
                if(!(var5 == var1)) { _fun0003_ip = 57; continue _fun0003 }
case 59:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var9 = var8.bind(var2)(var1);
                var8 = var9.shouldPlayVideoInline;
                var10 = var4.provider;
                var14 = var5 == var10;
                var1 = undefined;
                if(var14) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var1 = var10.name;
case 60:
                var1 = var8.bind(var9)(var1);
                var7 = var6;
                if(!var1) { _fun0003_ip = 57; continue _fun0003 }
case 62:
                var1 = var4.provider;
                var9 = var5 == var1;
                var8 = undefined;
                if(var9) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var8 = var1.name;
case 63:
                var1 = 'YouTube';
                var9 = false;
                if(!(var1 === var8)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var9 = true;
case 65:
                var1 = var4.provider;
                var10 = var5 == var1;
                var8 = undefined;
                if(var10) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var8 = var1.name;
case 67:
                var1 = 'TikTok';
                if(!(var1 === var8)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                var9 = true;
case 69:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var8 = copyDataProperties(var30, var29);
                var8 = 'showPlayButton';
                var1[var8] = var9;
                var7 = var1;
                _fun0003_ip = 57; continue _fun0003;
case 52:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var6 = copyDataProperties(var30, var29);
                var8 = var4.type;
                var6 = _closure1_slot4;
                var6 = var6.GIFV;
                var8 = var8 === var6;
                var6 = 'gifv';
                var1[var6] = var8;
                var8 = _closure1_slot5;
                var6 = var4.video;
                var8 = var8.bind(var2)(var6);
                var6 = 'videoUrl';
                var1[var6] = var8;
                var7 = var1;
case 57:
                var6 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var1 = var6 !== var1;
                if(var1) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                var1 = _closure2_slot1;
case 71:
                var6 = var7;
                if(var1) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                var1 = {};
                var30 = var1;
                var29 = var7;
                var7 = copyDataProperties(var30, var29);
                var8 = _closure1_slot5;
                var7 = var4.video;
                var8 = var8.bind(var2)(var7);
                var7 = 'gifvUrlForPortal';
                var1[var7] = var8;
                var6 = var1;
case 73:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.isWebPlayerVideoUrl;
                var9 = _closure1_slot5;
                var1 = var4.video;
                var1 = var9.bind(var2)(var1);
                var1 = var7.bind(var8)(var1);
                var13 = var6;
                if(!var1) { _fun0003_ip = 47; continue _fun0003 }
case 75:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var6 = copyDataProperties(var30, var29);
                var7 = true;
                var6 = 'inlinePlaybackDisabled';
                var1[var6] = var7;
                var13 = var1;
case 47:
                var1 = _closure2_slot5;
                var6 = var1.embedBorderLeftColor;
                var1 = var4.color;
                var1 = var5 != var1;
                if(!var1) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                var8 = var4.color;
                var7 = '';
                var1 = var7 !== var8;
case 76:
                if(!var1) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                var7 = _closure1_slot3;
                var1 = var4.color;
                var6 = var7.bind(var2)(var1);
case 78:
                var1 = var4.url;
                if(!(var5 != var1)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                var7 = var4.url;
                var1 = '';
                if(!(var1 === var7)) { _fun0003_ip = 82; continue _fun0003 }
case 80:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var8 = var1.parseEmbedTitleMarkup;
                _fun0003_ip = 83; continue _fun0003;
case 82:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var1 = var7.bind(var2)(var1);
                var8 = var1.parseEmbedTitleMarkupWithoutLinks;
case 83:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var7 === var1)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                var1 = var4.rawTitle;
                if(!(var5 == var1)) { _fun0003_ip = 86; continue _fun0003 }
case 84:
                var15 = var4.rawTitle;
                _fun0003_ip = 87; continue _fun0003;
case 86:
                var7 = var4.rawTitle;
                var1 = _closure2_slot0;
                var15 = var8.bind(var2)(var7, var1);
case 87:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.IMAGE;
                var14 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var14 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 88; continue _fun0003 }
case 90:
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var14 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 88; continue _fun0003 }
case 91:
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var1 !== var7)) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                var14 = var4.rawDescription;
                _fun0003_ip = 88; continue _fun0003;
case 92:
                var1 = var4.rawDescription;
                var1 = var5 != var1;
                var14 = undefined;
                if(!var1) { _fun0003_ip = 88; continue _fun0003 }
case 94:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.parseEmbedDescriptionMarkup;
                var1 = {};
                var9 = var4.rawDescription;
                var1['description'] = var9;
                var9 = _closure2_slot0;
                var1['channelId'] = var9;
                var9 = false;
                var1['isField'] = var9;
                var9 = _closure2_slot3;
                var1['ignoreCache'] = var9;
                var9 = _closure2_slot6;
                var1['showListsAndHeaders'] = var9;
                var9 = _closure2_slot7;
                var1['showMaskedLinks'] = var9;
                var14 = var7.bind(var8)(var1);
case 88:
                var8 = var4.fields;
                if(!(var5 == var8)) { _fun0003_ip = 95; continue _fun0003 }
case 96:
                var8 = new Array(0);
case 95:
                var7 = var8.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.rawName;
                        var3 = null;
                        var1 = var3 == var1;
                        var4 = null;
                        if(var1) { _fun0004_ip = 97; continue _fun0004 }
case 98:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.parseEmbedTitleMarkup;
                        var5 = var2.rawName;
                        var1 = _closure2_slot0;
                        var4 = var6.bind(var7)(var5, var1);
case 97:
                        var1 = var2.rawValue;
                        var1 = var3 == var1;
                        var3 = null;
                        if(var1) { _fun0004_ip = 99; continue _fun0004 }
case 100:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var5 = var5[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.parseEmbedDescriptionMarkup;
                        var1 = {};
                        var7 = var2.rawValue;
                        var1['description'] = var7;
                        var8 = _closure2_slot0;
                        var1['channelId'] = var8;
                        var8 = true;
                        var1['isField'] = var8;
                        var8 = _closure2_slot3;
                        var1['ignoreCache'] = var8;
                        var8 = {};
                        var9 = '';
                        var8['\t'] = var9;
                        var1['replaceMap'] = var8;
                        var8 = _closure2_slot6;
                        var1['showListsAndHeaders'] = var8;
                        var7 = _closure2_slot7;
                        var1['showMaskedLinks'] = var7;
                        var3 = var5.bind(var6)(var1);
case 99:
                        var1 = {};
                        var11 = var1;
                        var10 = var2;
                        var2 = copyDataProperties(var11, var10);
                        var2 = 'name';
                        var1[var2] = var4;
                        var2 = 'value';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var10 = var7.bind(var8)(var1);
                var1 = var4.timestamp;
                var1 = var5 != var1;
                var18 = null;
                if(!var1) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.calendarFormat;
                var1 = var4.timestamp;
                var18 = var7.bind(var8)(var1);
case 101:
                var1 = var4.footer;
                if(!(var5 == var1)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                var1 = var5 != var18;
                var7 = undefined;
                if(!var1) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                var1 = {};
                var1['content'] = var18;
                var8 = '';
                var1['text'] = var8;
                var7 = var1;
                _fun0003_ip = 105; continue _fun0003;
case 103:
                var1 = var4.footer;
                var17 = var1.text;
                var9 = var17;
                if(!(var5 != var18)) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                var1 = global;
                var1 = var1.HermesInternal;
                var16 = var1.concat;
                var8 = '';
                var1 = ' | ';
                var9 = var16.bind(var8)(var17, var1, var18);
case 107:
                var1 = {};
                var29 = var4.footer;
                var30 = var1;
                var8 = copyDataProperties(var30, var29);
                var8 = 'content';
                var1[var8] = var9;
                var8 = var4.footer;
                var8 = var8.iconProxyURL;
                if(!(var5 != var8)) { _fun0003_ip = 109; continue _fun0003 }
case 110:
                var8 = var4.footer;
                var9 = var8.iconProxyURL;
                var8 = '';
                if(!(var8 === var9)) { _fun0003_ip = 111; continue _fun0003 }
case 109:
                var8 = var4.footer;
                var18 = var8.iconURL;
                _fun0003_ip = 112; continue _fun0003;
case 111:
                var8 = var4.footer;
                var18 = var8.iconProxyURL;
case 112:
                var7 = var1;
                if(!(var5 != var18)) { _fun0003_ip = 105; continue _fun0003 }
case 113:
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 2;
                var8 = var16[var8];
                var17 = var9.bind(var2)(var8);
                var16 = var17.getImageSrc;
                var8 = _closure2_slot1;
                var27 = !var8;
                var8 = 16;
                var31 = var17;
                var30 = var18;
                var29 = var8;
                var28 = var8;
                var8 = var31[var16](var30, var29, var28, var27, var26);
                var1['iconURL'] = var8;
                var7 = var1;
case 105:
                var1 = var4.author;
                var1 = var5 != var1;
                var8 = undefined;
                if(!var1) { _fun0003_ip = 114; continue _fun0003 }
case 115:
                var1 = var4.author;
                var1 = var1.iconProxyURL;
                if(!(var5 != var1)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
                var1 = var4.author;
                var9 = var1.iconProxyURL;
                var1 = '';
                if(!(var1 === var9)) { _fun0003_ip = 118; continue _fun0003 }
case 116:
                var1 = var4.author;
                var21 = var1.iconURL;
                _fun0003_ip = 119; continue _fun0003;
case 118:
                var1 = var4.author;
                var21 = var1.iconProxyURL;
case 119:
                if(!(var5 == var21)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
                var1 = var4.author;
                _fun0003_ip = 122; continue _fun0003;
case 120:
                var9 = {};
                var29 = var4.author;
                var30 = var9;
                var16 = copyDataProperties(var30, var29);
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 2;
                var16 = var18[var16];
                var20 = var17.bind(var2)(var16);
                var18 = var20.getImageSrc;
                var16 = _closure2_slot1;
                var27 = !var16;
                var16 = 16;
                var31 = var20;
                var30 = var21;
                var29 = var16;
                var28 = var16;
                var17 = var31[var18](var30, var29, var28, var27, var26);
                var16 = 'iconURL';
                var9[var16] = var17;
                var1 = var9;
case 122:
                var8 = var1;
case 114:
                var16 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.COMPONENTS;
                var9 = undefined;
                if(!(var16 === var1)) { _fun0003_ip = 123; continue _fun0003 }
case 124:
                var16 = _closure2_slot13;
                var1 = var4.components;
                var9 = var16.bind(var2)(var1);
case 123:
                var21 = _closure1_slot0;
                var1 = _closure1_slot2;
                var17 = 10;
                var16 = var1[var17];
                var20 = var21.bind(var2)(var16);
                var18 = var20.getMediaObscuredReasonFromBitmask;
                var16 = {};
                var23 = 11;
                var1 = var1[var23];
                var1 = var21.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var16['type'] = var1;
                var16['media'] = var4;
                var1 = _closure2_slot9;
                var1 = var18.bind(var20)(var16, var1);
                var16 = _closure2_slot10;
                var20 = !var16;
                if(!var20) { _fun0003_ip = 125; continue _fun0003 }
case 126:
                var22 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var17];
                var21 = var22.bind(var2)(var17);
                var18 = var21.isMediaScanPending;
                var17 = {};
                var16 = var16[var23];
                var16 = var22.bind(var2)(var16);
                var16 = var16.ObscuredMediaTypes;
                var16 = var16.Embed;
                var17['type'] = var16;
                var17['media'] = var4;
                var16 = _closure2_slot9;
                var20 = var18.bind(var21)(var17, var16);
case 125:
                var16 = var1.length;
                var1 = 0;
                var16 = var16 > var1;
                var17 = var16;
                if(!var16) { _fun0003_ip = 127; continue _fun0003 }
case 128:
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var1 = 12;
                var1 = var21[var1];
                var18 = var18.bind(var2)(var1);
                var1 = var18.isVerifiedTeen;
                var17 = var1.bind(var18)();
case 127:
                var1 = {};
                var22 = var4.id;
                var23 = var5 != var22;
                var18 = '';
                var21 = var18;
                if(!var23) { _fun0003_ip = 129; continue _fun0003 }
case 130:
                var21 = var22;
case 129:
                var1['id'] = var21;
                var22 = var4.type;
                var23 = var5 != var22;
                var21 = undefined;
                if(!var23) { _fun0003_ip = 131; continue _fun0003 }
case 132:
                var21 = var22;
case 131:
                var1['type'] = var21;
                var22 = _closure2_slot2;
                var21 = var18;
                if(!var22) { _fun0003_ip = 133; continue _fun0003 }
case 134:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 13;
                var23 = var26[var22];
                var23 = var25.bind(var2)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var2)(var22);
                var22 = var22.t;
                var22 = var22.F+x38C;
                var23 = var23.bind(var24)(var22);
                var22 = var23.toUpperCase;
                var21 = var22.bind(var23)();
case 133:
                var1['spoiler'] = var21;
                var21 = var18;
                if(!var16) { _fun0003_ip = 135; continue _fun0003 }
case 136:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 13;
                var23 = var26[var22];
                var23 = var25.bind(var2)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var2)(var22);
                var22 = var22.t;
                var22 = var22.SpxcUR;
                var21 = var23.bind(var24)(var22);
case 135:
                var1['obscure'] = var21;
                if(!var20) { _fun0003_ip = 137; continue _fun0003 }
case 138:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 13;
                var20 = var23[var19];
                var20 = var22.bind(var2)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var2)(var19);
                var19 = var19.t;
                var19 = var19.MRdR7z;
                var18 = var20.bind(var21)(var19);
case 137:
                var1['obscureAwaitingScan'] = var18;
                var18 = var16;
                if(!var18) { _fun0003_ip = 139; continue _fun0003 }
case 140:
                var18 = _closure2_slot12;
case 139:
                var1['verifyAge'] = var18;
                var1['obscureHideControls'] = var17;
                var1['obscureIsOpaque'] = var16;
                var17 = var4.provider;
                var18 = var5 != var17;
                var16 = undefined;
                if(!var18) { _fun0003_ip = 141; continue _fun0003 }
case 142:
                var16 = var17;
case 141:
                var1['provider'] = var16;
                var1['author'] = var8;
                var8 = var4.rawTitle;
                var1['rawTitle'] = var8;
                var16 = var5 != var15;
                var8 = undefined;
                if(!var16) { _fun0003_ip = 143; continue _fun0003 }
case 144:
                var8 = var15;
case 143:
                var1['title'] = var8;
                var15 = var4.url;
                var16 = var5 != var15;
                var8 = undefined;
                if(!var16) { _fun0003_ip = 145; continue _fun0003 }
case 146:
                var8 = var15;
case 145:
                var1['url'] = var8;
                var8 = var4.rawDescription;
                var1['rawDescription'] = var8;
                var15 = var5 != var14;
                var8 = undefined;
                if(!var15) { _fun0003_ip = 147; continue _fun0003 }
case 148:
                var8 = var14;
case 147:
                var1['description'] = var8;
                var14 = var5 != var13;
                var8 = undefined;
                if(!var14) { _fun0003_ip = 149; continue _fun0003 }
case 150:
                var8 = var13;
case 149:
                var1['thumbnail'] = var8;
                var13 = var5 != var12;
                var8 = undefined;
                if(!var13) { _fun0003_ip = 151; continue _fun0003 }
case 152:
                var8 = var12;
case 151:
                var1['image'] = var8;
                var12 = var5 != var11;
                var8 = undefined;
                if(!var12) { _fun0003_ip = 153; continue _fun0003 }
case 154:
                var8 = var11;
case 153:
                var1['images'] = var8;
                var11 = var5 != var10;
                var8 = undefined;
                if(!var11) { _fun0003_ip = 155; continue _fun0003 }
case 156:
                var8 = var10;
case 155:
                var1['fields'] = var8;
                var10 = var5 != var9;
                var8 = undefined;
                if(!var10) { _fun0003_ip = 157; continue _fun0003 }
case 158:
                var8 = var9;
case 157:
                var1['components'] = var8;
                var1['footer'] = var7;
                var8 = var4.video;
                var9 = var5 != var8;
                var7 = undefined;
                if(!var9) { _fun0003_ip = 159; continue _fun0003 }
case 160:
                var7 = var8;
case 159:
                var1['video'] = var7;
                var1['borderLeftColor'] = var6;
                var6 = _closure2_slot5;
                var7 = var6.embedProviderColor;
                var1['providerColor'] = var7;
                var7 = var6.embedHeaderTextColor;
                var1['headerTextColor'] = var7;
                var6 = var6.embedBodyTextColor;
                var1['bodyTextColor'] = var6;
                var6 = var4.referenceId;
                var7 = var5 != var6;
                var4 = undefined;
                if(!var7) { _fun0003_ip = 161; continue _fun0003 }
case 162:
                var4 = var6;
case 161:
                var1['referenceId'] = var4;
                var4 = _closure2_slot8;
                var4 = var5 != var4;
                var2 = undefined;
                if(!var4) { _fun0003_ip = 163; continue _fun0003 }
case 164:
                var2 = _closure2_slot8;
case 163:
                var1['backgroundColor'] = var2;
                return var1;
case 21:
                var1 = new Array(0);
                return var1;
case 19:
                var1 = new Array(0);
                return var1;
case 17:
                var1 = new Array(0);
                return var1;
case 9:
                var1 = new Array(0);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();