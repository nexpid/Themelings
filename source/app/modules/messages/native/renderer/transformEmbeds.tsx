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
        var2 = var2.shouldAgeVerify;
        var _closure2_slot12 = var2;
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
        var _closure2_slot13 = var2;
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
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isServerShopArticleEmbed;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VOICE_CHANNEL;
                if(!(var3 !== var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isContentInventoryFallbackEmbed;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var1 = _closure2_slot11;
                if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                var1 = new Array(0);
                return var1;
case 19:
                var1 = _closure2_slot4;
                var5 = null;
                var6 = null;
                if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var1 = var4.thumbnail;
                var1 = var5 != var1;
                var6 = null;
                if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 24:
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
                if(!(var5 != var7)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
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
case 25:
                var8 = 'proxyURL';
                var1[var8] = var9;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 2;
                var8 = var13[var8];
                var9 = var9.bind(var2)(var8);
                var8 = var9.getImageSrc;
                if(!(var5 != var7)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var12 = var7;
case 27:
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
case 22:
                var1 = _closure2_slot4;
                var11 = null;
                if(!var1) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var1 = var4.image;
                var1 = var5 != var1;
                var11 = null;
                if(!var1) { _fun0003_ip = 29; continue _fun0003 }
case 31:
                var7 = _closure2_slot13;
                var1 = var4.image;
                var11 = var7.bind(var2)(var1);
case 29:
                var1 = _closure2_slot4;
                if(!var1) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var1 = var4.images;
                if(!(var5 == var1)) { _fun0003_ip = 34; continue _fun0003 }
case 32:
                var7 = var5 == var11;
                if(var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var1 = var9[var1];
                var8 = var8.bind(var2)(var1);
                var1 = var8.isIOS;
                var1 = var1.bind(var8)();
                var7 = !var1;
case 35:
                var1 = !var7;
                if(var7) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var7 = var4.thumbnail;
                var1 = var5 == var7;
case 37:
                var10 = null;
                if(!var1) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var1 = var5 != var11;
                var10 = null;
                if(!var1) { _fun0003_ip = 39; continue _fun0003 }
case 41:
                var1 = new Array(1);
                var1[0] = var11;
                var10 = var1;
case 39:
                _fun0003_ip = 42; continue _fun0003;
case 34:
                var8 = var4.images;
                var7 = var8.map;
                var1 = _closure2_slot13;
                var10 = var7.bind(var8)(var1);
case 42:
                var12 = var6;
                if(!(var5 != var12)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var1 = var4.video;
                var12 = var6;
                if(!(var5 != var1)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                if(!(var7 === var1)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var1 = _closure2_slot1;
                if(var1) { _fun0003_ip = 48; continue _fun0003 }
case 46:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                if(!(var7 !== var1)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var7 !== var1)) { _fun0003_ip = 49; continue _fun0003 }
case 51:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.ARTICLE;
                if(!(var7 === var1)) { _fun0003_ip = 52; continue _fun0003 }
case 49:
                var1 = var4.video;
                var1 = var1.proxyURL;
                if(!(var5 == var1)) { _fun0003_ip = 48; continue _fun0003 }
case 52:
                var8 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var7 = var6;
                if(!(var8 === var1)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var1 = var4.video;
                var1 = var1.proxyURL;
                var7 = var6;
                if(!(var5 == var1)) { _fun0003_ip = 53; continue _fun0003 }
case 55:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var9 = var8.bind(var2)(var1);
                var8 = var9.shouldPlayVideoInline;
                var13 = var4.provider;
                var14 = var5 == var13;
                var1 = undefined;
                if(var14) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var1 = var13.name;
case 56:
                var1 = var8.bind(var9)(var1);
                var7 = var6;
                if(!var1) { _fun0003_ip = 53; continue _fun0003 }
case 58:
                var1 = var4.provider;
                var9 = var5 == var1;
                var8 = undefined;
                if(var9) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var8 = var1.name;
case 59:
                var1 = 'YouTube';
                var9 = false;
                if(!(var1 === var8)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                var9 = true;
case 61:
                var1 = var4.provider;
                var13 = var5 == var1;
                var8 = undefined;
                if(var13) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var8 = var1.name;
case 63:
                var1 = 'TikTok';
                if(!(var1 === var8)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var9 = true;
case 65:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var8 = copyDataProperties(var30, var29);
                var8 = 'showPlayButton';
                var1[var8] = var9;
                var7 = var1;
                _fun0003_ip = 53; continue _fun0003;
case 48:
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
case 53:
                var6 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var1 = var6 !== var1;
                if(var1) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var1 = _closure2_slot1;
case 67:
                var6 = var7;
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
case 70:
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
case 69:
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
                var12 = var6;
                if(!var1) { _fun0003_ip = 43; continue _fun0003 }
case 71:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var6 = copyDataProperties(var30, var29);
                var7 = true;
                var6 = 'inlinePlaybackDisabled';
                var1[var6] = var7;
                var12 = var1;
case 43:
                var1 = _closure2_slot5;
                var6 = var1.embedBorderLeftColor;
                var1 = var4.color;
                var1 = var5 != var1;
                if(!var1) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                var8 = var4.color;
                var7 = '';
                var1 = var7 !== var8;
case 72:
                if(!var1) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                var7 = _closure1_slot3;
                var1 = var4.color;
                var6 = var7.bind(var2)(var1);
case 74:
                var1 = var4.url;
                if(!(var5 != var1)) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                var7 = var4.url;
                var1 = '';
                if(!(var1 === var7)) { _fun0003_ip = 78; continue _fun0003 }
case 76:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var8 = var1.parseEmbedTitleMarkup;
                _fun0003_ip = 79; continue _fun0003;
case 78:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 8;
                var1 = var9[var1];
                var1 = var7.bind(var2)(var1);
                var8 = var1.parseEmbedTitleMarkupWithoutLinks;
case 79:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var7 === var1)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                var1 = var4.rawTitle;
                if(!(var5 == var1)) { _fun0003_ip = 82; continue _fun0003 }
case 80:
                var14 = var4.rawTitle;
                _fun0003_ip = 83; continue _fun0003;
case 82:
                var7 = var4.rawTitle;
                var1 = _closure2_slot0;
                var14 = var8.bind(var2)(var7, var1);
case 83:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.IMAGE;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 84; continue _fun0003 }
case 86:
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 84; continue _fun0003 }
case 87:
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var1 !== var7)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
                var13 = var4.rawDescription;
                _fun0003_ip = 84; continue _fun0003;
case 88:
                var1 = var4.rawDescription;
                var1 = var5 != var1;
                var13 = undefined;
                if(!var1) { _fun0003_ip = 84; continue _fun0003 }
case 90:
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
                var13 = var7.bind(var8)(var1);
case 84:
                var8 = var4.fields;
                if(!(var5 == var8)) { _fun0003_ip = 91; continue _fun0003 }
case 92:
                var8 = new Array(0);
case 91:
                var7 = var8.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.rawName;
                        var3 = null;
                        var1 = var3 == var1;
                        var4 = null;
                        if(var1) { _fun0004_ip = 93; continue _fun0004 }
case 94:
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
case 93:
                        var1 = var2.rawValue;
                        var1 = var3 == var1;
                        var3 = null;
                        if(var1) { _fun0004_ip = 95; continue _fun0004 }
case 96:
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
case 95:
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
                var9 = var7.bind(var8)(var1);
                var1 = var4.timestamp;
                var1 = var5 != var1;
                var19 = null;
                if(!var1) { _fun0003_ip = 97; continue _fun0003 }
case 98:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.calendarFormat;
                var1 = var4.timestamp;
                var19 = var7.bind(var8)(var1);
case 97:
                var1 = var4.footer;
                if(!(var5 == var1)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
                var1 = var5 != var19;
                var7 = undefined;
                if(!var1) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                var1 = {};
                var1['content'] = var19;
                var8 = '';
                var1['text'] = var8;
                var7 = var1;
                _fun0003_ip = 101; continue _fun0003;
case 99:
                var1 = var4.footer;
                var17 = var1.text;
                var15 = var17;
                if(!(var5 != var19)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                var1 = global;
                var1 = var1.HermesInternal;
                var16 = var1.concat;
                var8 = '';
                var1 = ' | ';
                var15 = var16.bind(var8)(var17, var1, var19);
case 103:
                var1 = {};
                var29 = var4.footer;
                var30 = var1;
                var8 = copyDataProperties(var30, var29);
                var8 = 'content';
                var1[var8] = var15;
                var8 = var4.footer;
                var8 = var8.iconProxyURL;
                if(!(var5 != var8)) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                var8 = var4.footer;
                var15 = var8.iconProxyURL;
                var8 = '';
                if(!(var8 === var15)) { _fun0003_ip = 107; continue _fun0003 }
case 105:
                var8 = var4.footer;
                var19 = var8.iconURL;
                _fun0003_ip = 108; continue _fun0003;
case 107:
                var8 = var4.footer;
                var19 = var8.iconProxyURL;
case 108:
                var7 = var1;
                if(!(var5 != var19)) { _fun0003_ip = 101; continue _fun0003 }
case 109:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 2;
                var8 = var16[var8];
                var17 = var15.bind(var2)(var8);
                var16 = var17.getImageSrc;
                var8 = _closure2_slot1;
                var27 = !var8;
                var8 = 16;
                var31 = var17;
                var30 = var19;
                var29 = var8;
                var28 = var8;
                var8 = var31[var16](var30, var29, var28, var27, var26);
                var1['iconURL'] = var8;
                var7 = var1;
case 101:
                var1 = var4.author;
                var1 = var5 != var1;
                var8 = undefined;
                if(!var1) { _fun0003_ip = 110; continue _fun0003 }
case 111:
                var1 = var4.author;
                var1 = var1.iconProxyURL;
                if(!(var5 != var1)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
                var1 = var4.author;
                var15 = var1.iconProxyURL;
                var1 = '';
                if(!(var1 === var15)) { _fun0003_ip = 114; continue _fun0003 }
case 112:
                var1 = var4.author;
                var21 = var1.iconURL;
                _fun0003_ip = 115; continue _fun0003;
case 114:
                var1 = var4.author;
                var21 = var1.iconProxyURL;
case 115:
                if(!(var5 == var21)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
                var1 = var4.author;
                _fun0003_ip = 118; continue _fun0003;
case 116:
                var15 = {};
                var29 = var4.author;
                var30 = var15;
                var16 = copyDataProperties(var30, var29);
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 2;
                var16 = var19[var16];
                var20 = var17.bind(var2)(var16);
                var19 = var20.getImageSrc;
                var16 = _closure2_slot1;
                var27 = !var16;
                var16 = 16;
                var31 = var20;
                var30 = var21;
                var29 = var16;
                var28 = var16;
                var17 = var31[var19](var30, var29, var28, var27, var26);
                var16 = 'iconURL';
                var15[var16] = var17;
                var1 = var15;
case 118:
                var8 = var1;
case 110:
                var20 = _closure1_slot0;
                var1 = _closure1_slot2;
                var16 = 10;
                var15 = var1[var16];
                var19 = var20.bind(var2)(var15);
                var17 = var19.getMediaObscuredReasonFromBitmask;
                var15 = {};
                var22 = 11;
                var1 = var1[var22];
                var1 = var20.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var15['type'] = var1;
                var15['media'] = var4;
                var1 = _closure2_slot9;
                var1 = var17.bind(var19)(var15, var1);
                var15 = _closure2_slot10;
                var19 = !var15;
                if(!var19) { _fun0003_ip = 119; continue _fun0003 }
case 120:
                var21 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var16];
                var20 = var21.bind(var2)(var16);
                var17 = var20.isMediaScanPending;
                var16 = {};
                var15 = var15[var22];
                var15 = var21.bind(var2)(var15);
                var15 = var15.ObscuredMediaTypes;
                var15 = var15.Embed;
                var16['type'] = var15;
                var16['media'] = var4;
                var15 = _closure2_slot9;
                var19 = var17.bind(var20)(var16, var15);
case 119:
                var15 = var1.length;
                var1 = 0;
                var21 = var15 > var1;
                var15 = var21;
                if(!var21) { _fun0003_ip = 121; continue _fun0003 }
case 122:
                var15 = _closure2_slot12;
case 121:
                var16 = var21;
                if(!var16) { _fun0003_ip = 123; continue _fun0003 }
case 124:
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 12;
                var1 = var20[var1];
                var17 = var17.bind(var2)(var1);
                var1 = var17.isVerifiedTeen;
                var16 = var1.bind(var17)();
case 123:
                var1 = {};
                var22 = var4.id;
                var23 = var5 != var22;
                var17 = '';
                var20 = var17;
                if(!var23) { _fun0003_ip = 125; continue _fun0003 }
case 126:
                var20 = var22;
case 125:
                var1['id'] = var20;
                var22 = var4.type;
                var23 = var5 != var22;
                var20 = undefined;
                if(!var23) { _fun0003_ip = 127; continue _fun0003 }
case 128:
                var20 = var22;
case 127:
                var1['type'] = var20;
                var22 = _closure2_slot2;
                var20 = var17;
                if(!var22) { _fun0003_ip = 129; continue _fun0003 }
case 130:
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
                var20 = var22.bind(var23)();
case 129:
                var1['spoiler'] = var20;
                var20 = var17;
                if(!var21) { _fun0003_ip = 131; continue _fun0003 }
case 132:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 13;
                var22 = var25[var21];
                var22 = var24.bind(var2)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var2)(var21);
                var21 = var21.t;
                var21 = var21.SpxcUR;
                var20 = var22.bind(var23)(var21);
case 131:
                var1['obscure'] = var20;
                if(!var19) { _fun0003_ip = 133; continue _fun0003 }
case 134:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 13;
                var19 = var22[var18];
                var19 = var21.bind(var2)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18.MRdR7z;
                var17 = var19.bind(var20)(var18);
case 133:
                var1['obscureAwaitingScan'] = var17;
                var1['verifyAge'] = var15;
                var1['obscureHideControls'] = var16;
                if(var15) { _fun0003_ip = 135; continue _fun0003 }
case 136:
                var15 = var16;
case 135:
                var1['obscureIsOpaque'] = var15;
                var16 = var4.provider;
                var17 = var5 != var16;
                var15 = undefined;
                if(!var17) { _fun0003_ip = 137; continue _fun0003 }
case 138:
                var15 = var16;
case 137:
                var1['provider'] = var15;
                var1['author'] = var8;
                var8 = var4.rawTitle;
                var1['rawTitle'] = var8;
                var15 = var5 != var14;
                var8 = undefined;
                if(!var15) { _fun0003_ip = 139; continue _fun0003 }
case 140:
                var8 = var14;
case 139:
                var1['title'] = var8;
                var14 = var4.url;
                var15 = var5 != var14;
                var8 = undefined;
                if(!var15) { _fun0003_ip = 141; continue _fun0003 }
case 142:
                var8 = var14;
case 141:
                var1['url'] = var8;
                var8 = var4.rawDescription;
                var1['rawDescription'] = var8;
                var14 = var5 != var13;
                var8 = undefined;
                if(!var14) { _fun0003_ip = 143; continue _fun0003 }
case 144:
                var8 = var13;
case 143:
                var1['description'] = var8;
                var13 = var5 != var12;
                var8 = undefined;
                if(!var13) { _fun0003_ip = 145; continue _fun0003 }
case 146:
                var8 = var12;
case 145:
                var1['thumbnail'] = var8;
                var12 = var5 != var11;
                var8 = undefined;
                if(!var12) { _fun0003_ip = 147; continue _fun0003 }
case 148:
                var8 = var11;
case 147:
                var1['image'] = var8;
                var11 = var5 != var10;
                var8 = undefined;
                if(!var11) { _fun0003_ip = 149; continue _fun0003 }
case 150:
                var8 = var10;
case 149:
                var1['images'] = var8;
                var10 = var5 != var9;
                var8 = undefined;
                if(!var10) { _fun0003_ip = 151; continue _fun0003 }
case 152:
                var8 = var9;
case 151:
                var1['fields'] = var8;
                var1['footer'] = var7;
                var8 = var4.video;
                var9 = var5 != var8;
                var7 = undefined;
                if(!var9) { _fun0003_ip = 153; continue _fun0003 }
case 154:
                var7 = var8;
case 153:
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
                if(!var7) { _fun0003_ip = 155; continue _fun0003 }
case 156:
                var4 = var6;
case 155:
                var1['referenceId'] = var4;
                var4 = _closure2_slot8;
                var4 = var5 != var4;
                var2 = undefined;
                if(!var4) { _fun0003_ip = 157; continue _fun0003 }
case 158:
                var2 = _closure2_slot8;
case 157:
                var1['backgroundColor'] = var2;
                return var1;
case 17:
                var1 = new Array(0);
                return var1;
case 15:
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