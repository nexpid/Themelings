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
    var4 = 16;
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
                var16 = var1;
                var15 = var3;
                var3 = copyDataProperties(var16, var15);
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 2;
                var11 = var10[var4];
                var9 = undefined;
                var12 = var8.bind(var9)(var11);
                var11 = var12.sanitizeMediaDimension;
                var12 = var11.bind(var12)(var6);
                var11 = 'width';
                var1[10] = var12;
                var4 = var10[var4];
                var8 = var8.bind(var9)(var4);
                var4 = var8.sanitizeMediaDimension;
                var8 = var4.bind(var8)(var5);
                var4 = 'height';
                var1[3] = var8;
                var8 = null;
                var10 = var2;
                if(!(var8 != var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 3;
                var4 = var12[var4];
                var12 = var11.bind(var9)(var4);
                var11 = var12.getImageSrc;
                var4 = _closure2_slot1;
                var13 = !var4;
                var17 = var12;
                var16 = var2;
                var15 = var6;
                var14 = var5;
                var10 = var17[var11](var16, var15, var14, var13, var12);
case 5:
                var4 = 'proxyURL';
                var1[3] = var10;
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 3;
                var3 = var10[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.getImageSrc;
                if(!(var8 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var7 = var2;
case 7:
                var2 = _closure2_slot1;
                var13 = !var2;
                var17 = var4;
                var16 = var7;
                var15 = var6;
                var14 = var5;
                var3 = var17[var3](var16, var15, var14, var13, var12);
                var2 = 'url';
                var1[1] = var3;
                return var1;
            }
        };
        var _closure2_slot14 = var2;
        var2 = var3.flatMap;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.POST_PREVIEW;
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.GIFT;
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.SAFETY_POLICY_NOTICE;
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.SAFETY_SYSTEM_NOTIFICATION;
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 13:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 14:
                var3 = var4.type;
                var2 = _closure1_slot4;
                var2 = var2.COMPONENTS;
                if(!(var3 === var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = var4.components;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var2 = var4.components;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0003_ip = 17; continue _fun0003 }
case 15:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 4;
                var3 = var2[var10];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.isServerShopArticleEmbed;
                var3 = var3.bind(var5)(var4);
                if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var5 = var4.type;
                var3 = _closure1_slot4;
                var3 = var3.VOICE_CHANNEL;
                if(!(var5 !== var3)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var5 = var5.bind(var2)(var3);
                var3 = var5.isContentInventoryFallbackEmbed;
                var3 = var3.bind(var5)(var4);
                if(!var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var3 = _closure2_slot11;
                if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                var3 = new Array(0);
                return var3;
case 23:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var5 = var5.bind(var2)(var3);
                var3 = var5.isSocialLayerStorefrontArticleEmbed;
                var3 = var3.bind(var5)(var4);
                if(!var3) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var6 = var5.bind(var2)(var3);
                var5 = var6.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
                var3 = {};
                var7 = 'transformEmbeds';
                var3['location'] = var7;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 26:
                var6 = _closure2_slot4;
                var5 = null;
                var7 = null;
                if(!var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var6 = var4.thumbnail;
                var6 = var5 != var6;
                var7 = null;
                if(!var6) { _fun0003_ip = 29; continue _fun0003 }
case 31:
                var9 = var4.thumbnail;
                var14 = var9.url;
                var8 = var9.proxyURL;
                var13 = var9.width;
                var12 = var9.height;
                var6 = {};
                var30 = var6;
                var29 = var9;
                var9 = copyDataProperties(var30, var29);
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 2;
                var16 = var15[var9];
                var17 = var11.bind(var2)(var16);
                var16 = var17.sanitizeMediaDimension;
                var17 = var16.bind(var17)(var13);
                var16 = 'width';
                var6[15] = var17;
                var9 = var15[var9];
                var11 = var11.bind(var2)(var9);
                var9 = var11.sanitizeMediaDimension;
                var11 = var9.bind(var11)(var12);
                var9 = 'height';
                var6[8] = var11;
                var11 = var8;
                if(!(var5 != var8)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 3;
                var9 = var16[var9];
                var16 = var15.bind(var2)(var9);
                var15 = var16.getImageSrc;
                var9 = _closure2_slot1;
                var27 = !var9;
                var31 = var16;
                var30 = var8;
                var29 = var13;
                var28 = var12;
                var11 = var31[var15](var30, var29, var28, var27, var26);
case 32:
                var9 = 'proxyURL';
                var6[8] = var11;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 3;
                var9 = var15[var9];
                var11 = var11.bind(var2)(var9);
                var9 = var11.getImageSrc;
                if(!(var5 != var8)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var14 = var8;
case 34:
                var8 = _closure2_slot1;
                var27 = !var8;
                var31 = var11;
                var30 = var14;
                var29 = var13;
                var28 = var12;
                var9 = var31[var9](var30, var29, var28, var27, var26);
                var8 = 'url';
                var6[7] = var9;
                var7 = var6;
case 29:
                var6 = _closure2_slot4;
                var12 = null;
                if(!var6) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var6 = var4.image;
                var6 = var5 != var6;
                var12 = null;
                if(!var6) { _fun0003_ip = 36; continue _fun0003 }
case 38:
                var8 = _closure2_slot14;
                var6 = var4.image;
                var12 = var8.bind(var2)(var6);
case 36:
                var6 = _closure2_slot4;
                if(!var6) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var6 = var4.images;
                if(!(var5 == var6)) { _fun0003_ip = 41; continue _fun0003 }
case 39:
                var8 = var5 == var12;
                if(var8) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 7;
                var6 = var11[var6];
                var9 = var9.bind(var2)(var6);
                var6 = var9.isIOS;
                var6 = var6.bind(var9)();
                var8 = !var6;
case 42:
                var6 = !var8;
                if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var8 = var4.thumbnail;
                var6 = var5 == var8;
case 44:
                var11 = null;
                if(!var6) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                var6 = var5 != var12;
                var11 = null;
                if(!var6) { _fun0003_ip = 46; continue _fun0003 }
case 48:
                var6 = new Array(1);
                var6[0] = var12;
                var11 = var6;
case 46:
                _fun0003_ip = 49; continue _fun0003;
case 41:
                var9 = var4.images;
                var8 = var9.map;
                var6 = _closure2_slot14;
                var11 = var8.bind(var9)(var6);
case 49:
                var13 = var7;
                if(!(var5 != var13)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var6 = var4.video;
                var13 = var7;
                if(!(var5 != var6)) { _fun0003_ip = 50; continue _fun0003 }
case 52:
                var8 = var4.type;
                var6 = _closure1_slot4;
                var6 = var6.VIDEO;
                var6 = var8 === var6;
                if(var6) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var9 = var4.type;
                var8 = _closure1_slot4;
                var8 = var8.RICH;
                var6 = var9 === var8;
case 53:
                if(var6) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                var9 = var4.type;
                var8 = _closure1_slot4;
                var8 = var8.ARTICLE;
                var6 = var9 === var8;
case 55:
                var9 = var4.type;
                var8 = _closure1_slot4;
                var8 = var8.GIFV;
                if(!(var9 === var8)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var8 = _closure2_slot1;
                if(var8) { _fun0003_ip = 59; continue _fun0003 }
case 57:
                if(!var6) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var8 = var4.video;
                var8 = var8.proxyURL;
                if(!(var5 == var8)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var8 = var7;
                if(!var6) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var6 = var4.video;
                var6 = var6.proxyURL;
                var8 = var7;
                if(!(var5 == var6)) { _fun0003_ip = 62; continue _fun0003 }
case 64:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var14 = var9.bind(var2)(var6);
                var10 = var14.getEffectiveVideoProvider;
                var6 = var4.provider;
                var15 = var5 == var6;
                var9 = undefined;
                if(var15) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var9 = var6.name;
case 65:
                var6 = var4.video;
                var6 = var6.url;
                var10 = var10.bind(var14)(var9, var6);
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 8;
                var6 = var14[var6];
                var9 = var9.bind(var2)(var6);
                var6 = var9.shouldPlayVideoInline;
                var6 = var6.bind(var9)(var10);
                var8 = var7;
                if(!var6) { _fun0003_ip = 62; continue _fun0003 }
case 67:
                var6 = {};
                var30 = var6;
                var29 = var7;
                var9 = copyDataProperties(var30, var29);
                var10 = true;
                var9 = 'showPlayButton';
                var6[8] = var10;
                var8 = var6;
                _fun0003_ip = 62; continue _fun0003;
case 59:
                var6 = {};
                var30 = var6;
                var29 = var7;
                var7 = copyDataProperties(var30, var29);
                var9 = var4.type;
                var7 = _closure1_slot4;
                var7 = var7.GIFV;
                var9 = var9 === var7;
                var7 = 'gifv';
                var6[6] = var9;
                var9 = _closure1_slot5;
                var7 = var4.video;
                var9 = var9.bind(var2)(var7);
                var7 = 'videoUrl';
                var6[6] = var9;
                var8 = var6;
case 62:
                var7 = var4.type;
                var6 = _closure1_slot4;
                var6 = var6.GIFV;
                var6 = var7 !== var6;
                if(var6) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                var6 = _closure2_slot1;
case 68:
                var7 = var8;
                if(var6) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                var6 = {};
                var30 = var6;
                var29 = var8;
                var8 = copyDataProperties(var30, var29);
                var9 = _closure1_slot5;
                var8 = var4.video;
                var9 = var9.bind(var2)(var8);
                var8 = 'gifvUrlForPortal';
                var6[7] = var9;
                var7 = var6;
case 70:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var6 = var9[var6];
                var9 = var8.bind(var2)(var6);
                var8 = var9.isWebPlayerVideoUrl;
                var10 = _closure1_slot5;
                var6 = var4.video;
                var6 = var10.bind(var2)(var6);
                var6 = var8.bind(var9)(var6);
                var13 = var7;
                if(!var6) { _fun0003_ip = 50; continue _fun0003 }
case 72:
                var6 = {};
                var30 = var6;
                var29 = var7;
                var7 = copyDataProperties(var30, var29);
                var8 = true;
                var7 = 'inlinePlaybackDisabled';
                var6[6] = var8;
                var13 = var6;
case 50:
                var6 = _closure2_slot5;
                var6 = var6.embedBorderLeftColor;
                var7 = var4.color;
                var7 = var5 != var7;
                if(!var7) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                var9 = var4.color;
                var8 = '';
                var7 = var8 !== var9;
case 73:
                if(!var7) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                var8 = _closure1_slot3;
                var7 = var4.color;
                var6 = var8.bind(var2)(var7);
case 75:
                var7 = var4.url;
                if(!(var5 != var7)) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                var8 = var4.url;
                var7 = '';
                if(!(var7 === var8)) { _fun0003_ip = 79; continue _fun0003 }
case 77:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var9 = var7.parseEmbedTitleMarkup;
                _fun0003_ip = 80; continue _fun0003;
case 79:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 10;
                var7 = var10[var7];
                var7 = var8.bind(var2)(var7);
                var9 = var7.parseEmbedTitleMarkupWithoutLinks;
case 80:
                var8 = var4.type;
                var7 = _closure1_slot4;
                var7 = var7.RICH;
                if(!(var8 === var7)) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                var7 = var4.rawTitle;
                if(!(var5 == var7)) { _fun0003_ip = 83; continue _fun0003 }
case 81:
                var15 = var4.rawTitle;
                _fun0003_ip = 84; continue _fun0003;
case 83:
                var8 = var4.rawTitle;
                var7 = _closure2_slot0;
                var15 = var9.bind(var2)(var8, var7);
case 84:
                var8 = var4.type;
                var7 = _closure1_slot4;
                var7 = var7.IMAGE;
                var14 = undefined;
                if(!(var7 !== var8)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                var7 = _closure1_slot4;
                var7 = var7.VIDEO;
                var14 = undefined;
                if(!(var7 !== var8)) { _fun0003_ip = 85; continue _fun0003 }
case 87:
                var7 = _closure1_slot4;
                var7 = var7.GIFV;
                var14 = undefined;
                if(!(var7 !== var8)) { _fun0003_ip = 85; continue _fun0003 }
case 88:
                var7 = _closure1_slot4;
                var7 = var7.RICH;
                if(!(var7 !== var8)) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                var14 = var4.rawDescription;
                _fun0003_ip = 85; continue _fun0003;
case 89:
                var7 = var4.rawDescription;
                var7 = var5 != var7;
                var14 = undefined;
                if(!var7) { _fun0003_ip = 85; continue _fun0003 }
case 91:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var9 = var8.bind(var2)(var7);
                var8 = var9.parseEmbedDescriptionMarkup;
                var7 = {};
                var10 = var4.rawDescription;
                var7['description'] = var10;
                var10 = _closure2_slot0;
                var7['channelId'] = var10;
                var10 = false;
                var7['isField'] = var10;
                var10 = _closure2_slot3;
                var7['ignoreCache'] = var10;
                var10 = _closure2_slot6;
                var7['showListsAndHeaders'] = var10;
                var10 = _closure2_slot7;
                var7['showMaskedLinks'] = var10;
                var14 = var8.bind(var9)(var7);
case 85:
                var9 = var4.fields;
                if(!(var5 == var9)) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                var9 = new Array(0);
case 92:
                var8 = var9.map;
                var7 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.rawName;
                        var3 = null;
                        var1 = var3 == var1;
                        var4 = null;
                        if(var1) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 10;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.parseEmbedTitleMarkup;
                        var5 = var2.rawName;
                        var1 = _closure2_slot0;
                        var4 = var6.bind(var7)(var5, var1);
case 94:
                        var1 = var2.rawValue;
                        var1 = var3 == var1;
                        var3 = null;
                        if(var1) { _fun0004_ip = 96; continue _fun0004 }
case 97:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 10;
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
case 96:
                        var1 = {};
                        var11 = var1;
                        var10 = var2;
                        var2 = copyDataProperties(var11, var10);
                        var2 = 'name';
                        var1[1] = var4;
                        var2 = 'value';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var10 = var8.bind(var9)(var7);
                var7 = var4.timestamp;
                var7 = var5 != var7;
                var20 = null;
                if(!var7) { _fun0003_ip = 98; continue _fun0003 }
case 99:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 11;
                var7 = var9[var7];
                var9 = var8.bind(var2)(var7);
                var8 = var9.calendarFormat;
                var7 = var4.timestamp;
                var20 = var8.bind(var9)(var7);
case 98:
                var7 = var4.footer;
                if(!(var5 == var7)) { _fun0003_ip = 100; continue _fun0003 }
case 101:
                var8 = var5 != var20;
                var7 = undefined;
                if(!var8) { _fun0003_ip = 102; continue _fun0003 }
case 103:
                var8 = {};
                var8['content'] = var20;
                var9 = '';
                var8['text'] = var9;
                var7 = var8;
                _fun0003_ip = 102; continue _fun0003;
case 100:
                var8 = var4.footer;
                var18 = var8.text;
                var16 = var18;
                if(!(var5 != var20)) { _fun0003_ip = 104; continue _fun0003 }
case 105:
                var8 = global;
                var8 = var8.HermesInternal;
                var17 = var8.concat;
                var9 = '';
                var8 = ' | ';
                var16 = var17.bind(var9)(var18, var8, var20);
case 104:
                var8 = {};
                var29 = var4.footer;
                var30 = var8;
                var9 = copyDataProperties(var30, var29);
                var9 = 'content';
                var8[8] = var16;
                var9 = var4.footer;
                var9 = var9.iconProxyURL;
                if(!(var5 != var9)) { _fun0003_ip = 106; continue _fun0003 }
case 107:
                var9 = var4.footer;
                var16 = var9.iconProxyURL;
                var9 = '';
                if(!(var9 === var16)) { _fun0003_ip = 108; continue _fun0003 }
case 106:
                var9 = var4.footer;
                var20 = var9.iconURL;
                _fun0003_ip = 109; continue _fun0003;
case 108:
                var9 = var4.footer;
                var20 = var9.iconProxyURL;
case 109:
                var7 = var8;
                if(!(var5 != var20)) { _fun0003_ip = 102; continue _fun0003 }
case 110:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 3;
                var9 = var17[var9];
                var18 = var16.bind(var2)(var9);
                var17 = var18.getImageSrc;
                var9 = _closure2_slot1;
                var27 = !var9;
                var9 = 16;
                var31 = var18;
                var30 = var20;
                var29 = var9;
                var28 = var9;
                var9 = var31[var17](var30, var29, var28, var27, var26);
                var8['iconURL'] = var9;
                var7 = var8;
case 102:
                var8 = var4.author;
                var9 = var5 != var8;
                var8 = undefined;
                if(!var9) { _fun0003_ip = 111; continue _fun0003 }
case 112:
                var9 = var4.author;
                var9 = var9.iconProxyURL;
                if(!(var5 != var9)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
                var9 = var4.author;
                var16 = var9.iconProxyURL;
                var9 = '';
                if(!(var9 === var16)) { _fun0003_ip = 115; continue _fun0003 }
case 113:
                var9 = var4.author;
                var22 = var9.iconURL;
                _fun0003_ip = 116; continue _fun0003;
case 115:
                var9 = var4.author;
                var22 = var9.iconProxyURL;
case 116:
                if(!(var5 == var22)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
                var9 = var4.author;
                _fun0003_ip = 119; continue _fun0003;
case 117:
                var16 = {};
                var29 = var4.author;
                var30 = var16;
                var17 = copyDataProperties(var30, var29);
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var17 = 3;
                var17 = var20[var17];
                var21 = var18.bind(var2)(var17);
                var20 = var21.getImageSrc;
                var17 = _closure2_slot1;
                var27 = !var17;
                var17 = 16;
                var31 = var21;
                var30 = var22;
                var29 = var17;
                var28 = var17;
                var18 = var31[var20](var30, var29, var28, var27, var26);
                var17 = 'iconURL';
                var16[16] = var18;
                var9 = var16;
case 119:
                var8 = var9;
case 111:
                var17 = var4.type;
                var9 = _closure1_slot4;
                var16 = var9.COMPONENTS;
                var9 = undefined;
                if(!(var17 === var16)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
                var16 = _closure2_slot2;
                var18 = var4.components;
                if(var16) { _fun0003_ip = 122; continue _fun0003 }
case 123:
                var16 = var18;
                _fun0003_ip = 124; continue _fun0003;
case 122:
                var17 = var18.map;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = true;
                    var2 = 'spoiler';
                    var1[1] = var3;
                    return var1;
                };
                var16 = var17.bind(var18)(var1);
case 124:
                var1 = _closure2_slot13;
                var9 = var1.bind(var2)(var16);
case 120:
                var21 = _closure1_slot0;
                var1 = _closure1_slot2;
                var17 = 12;
                var16 = var1[var17];
                var20 = var21.bind(var2)(var16);
                var18 = var20.getMediaObscuredReasonFromBitmask;
                var16 = {};
                var23 = 13;
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
                var1 = 14;
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
                var22 = 15;
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
                var22 = 15;
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
                var19 = 15;
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
case 28:
                var1 = new Array(0);
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