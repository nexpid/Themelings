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
 0:
            var1 = arg1;
            var2 = var1.proxyURL;
            var4 = var1.url;
            var3 = null;
            var1 = var4;
            if(!(var3 != var2)) { _fun0001_ip = 37; continue _fun0001 }
 23:
            var3 = '';
            var1 = var4;
            if(!(var3 !== var2)) { _fun0001_ip = 37; continue _fun0001 }
 34:
            var1 = var2;
 37:
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
    var4 = 13;
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
 0:
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
                if(!(var8 != var2)) { _fun0002_ip = 102; continue _fun0002 }
 45:
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
 102:
                var3 = 'proxyURL';
                var1[var3] = var4;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var9.bind(var3)(var4);
                var3 = var4.getImageSrc;
                if(!(var8 != var2)) { _fun0002_ip = 149; continue _fun0002 }
 146:
                var7 = var2;
 149:
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
 0:
                var4 = arg1;
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.POST_PREVIEW;
                if(!(var2 !== var1)) { _fun0003_ip = 2649; continue _fun0003 }
 28:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFT;
                if(!(var2 !== var1)) { _fun0003_ip = 2649; continue _fun0003 }
 50:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.SAFETY_POLICY_NOTICE;
                if(!(var2 !== var1)) { _fun0003_ip = 2649; continue _fun0003 }
 72:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.SAFETY_SYSTEM_NOTIFICATION;
                if(!(var2 !== var1)) { _fun0003_ip = 2649; continue _fun0003 }
 94:
                var2 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
                if(!(var2 !== var1)) { _fun0003_ip = 2649; continue _fun0003 }
 116:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isServerShopArticleEmbed;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0003_ip = 2643; continue _fun0003 }
 155:
                var3 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VOICE_CHANNEL;
                if(!(var3 !== var1)) { _fun0003_ip = 2637; continue _fun0003 }
 177:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isContentInventoryFallbackEmbed;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0003_ip = 227; continue _fun0003 }
 211:
                var1 = _closure2_slot11;
                if(var1) { _fun0003_ip = 227; continue _fun0003 }
 221:
                var1 = new Array(0);
                return var1;
 227:
                var1 = _closure2_slot4;
                var5 = null;
                var7 = null;
                if(!var1) { _fun0003_ip = 434; continue _fun0003 }
 244:
                var1 = var4.thumbnail;
                var1 = var5 != var1;
                var7 = null;
                if(!var1) { _fun0003_ip = 434; continue _fun0003 }
 262:
                var8 = var4.thumbnail;
                var12 = var8.url;
                var6 = var8.proxyURL;
                var11 = var8.width;
                var10 = var8.height;
                var1 = {};
                var30 = var1;
                var29 = var8;
                var8 = copyDataProperties(var30, var29);
                var9 = var6;
                if(!(var5 != var6)) { _fun0003_ip = 357; continue _fun0003 }
 308:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 2;
                var8 = var14[var8];
                var14 = var13.bind(var2)(var8);
                var13 = var14.getImageSrc;
                var8 = _closure2_slot1;
                var27 = !var8;
                var31 = var14;
                var30 = var6;
                var29 = var11;
                var28 = var10;
                var9 = var31[var13](var30, var29, var28, var27, var26);
 357:
                var8 = 'proxyURL';
                var1[var8] = var9;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 2;
                var8 = var13[var8];
                var9 = var9.bind(var2)(var8);
                var8 = var9.getImageSrc;
                if(!(var5 != var6)) { _fun0003_ip = 399; continue _fun0003 }
 396:
                var12 = var6;
 399:
                var6 = _closure2_slot1;
                var27 = !var6;
                var31 = var9;
                var30 = var12;
                var29 = var11;
                var28 = var10;
                var8 = var31[var8](var30, var29, var28, var27, var26);
                var6 = 'url';
                var1[var6] = var8;
                var7 = var1;
 434:
                var1 = _closure2_slot4;
                var11 = null;
                if(!var1) { _fun0003_ip = 473; continue _fun0003 }
 443:
                var1 = var4.image;
                var1 = var5 != var1;
                var11 = null;
                if(!var1) { _fun0003_ip = 473; continue _fun0003 }
 458:
                var6 = _closure2_slot13;
                var1 = var4.image;
                var11 = var6.bind(var2)(var1);
 473:
                var1 = _closure2_slot4;
                if(!var1) { _fun0003_ip = 490; continue _fun0003 }
 480:
                var1 = var4.images;
                if(!(var5 == var1)) { _fun0003_ip = 573; continue _fun0003 }
 490:
                var6 = var5 == var11;
                if(var6) { _fun0003_ip = 530; continue _fun0003 }
 497:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 5;
                var1 = var9[var1];
                var8 = var8.bind(var2)(var1);
                var1 = var8.isIOS;
                var1 = var1.bind(var8)();
                var6 = !var1;
 530:
                var1 = !var6;
                if(var6) { _fun0003_ip = 546; continue _fun0003 }
 536:
                var6 = var4.thumbnail;
                var1 = var5 == var6;
 546:
                var10 = null;
                if(!var1) { _fun0003_ip = 571; continue _fun0003 }
 551:
                var1 = var5 != var11;
                var10 = null;
                if(!var1) { _fun0003_ip = 571; continue _fun0003 }
 560:
                var1 = new Array(1);
                var1[0] = var11;
                var10 = var1;
 571:
                _fun0003_ip = 593; continue _fun0003;
 573:
                var8 = var4.images;
                var6 = var8.map;
                var1 = _closure2_slot13;
                var10 = var6.bind(var8)(var1);
 593:
                var12 = var7;
                if(!(var5 != var12)) { _fun0003_ip = 1046; continue _fun0003 }
 603:
                var1 = var4.video;
                var12 = var7;
                if(!(var5 != var1)) { _fun0003_ip = 1046; continue _fun0003 }
 619:
                var6 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                if(!(var6 === var1)) { _fun0003_ip = 648; continue _fun0003 }
 638:
                var1 = _closure2_slot1;
                if(var1) { _fun0003_ip = 904; continue _fun0003 }
 648:
                var6 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                if(!(var6 !== var1)) { _fun0003_ip = 686; continue _fun0003 }
 667:
                var6 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var6 === var1)) { _fun0003_ip = 705; continue _fun0003 }
 686:
                var1 = var4.video;
                var1 = var1.proxyURL;
                if(!(var5 == var1)) { _fun0003_ip = 904; continue _fun0003 }
 705:
                var8 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var6 = var7;
                if(!(var8 === var1)) { _fun0003_ip = 973; continue _fun0003 }
 730:
                var1 = var4.video;
                var1 = var1.proxyURL;
                var6 = var7;
                if(!(var5 == var1)) { _fun0003_ip = 973; continue _fun0003 }
 752:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var9 = var8.bind(var2)(var1);
                var8 = var9.shouldPlayVideoInline;
                var13 = var4.provider;
                var14 = var5 == var13;
                var1 = undefined;
                if(var14) { _fun0003_ip = 798; continue _fun0003 }
 793:
                var1 = var13.name;
 798:
                var1 = var8.bind(var9)(var1);
                var6 = var7;
                if(!var1) { _fun0003_ip = 973; continue _fun0003 }
 812:
                var1 = var4.provider;
                var9 = var5 == var1;
                var8 = undefined;
                if(var9) { _fun0003_ip = 832; continue _fun0003 }
 827:
                var8 = var1.name;
 832:
                var1 = 'YouTube';
                var9 = false;
                if(!(var1 === var8)) { _fun0003_ip = 846; continue _fun0003 }
 844:
                var9 = true;
 846:
                var1 = var4.provider;
                var13 = var5 == var1;
                var8 = undefined;
                if(var13) { _fun0003_ip = 866; continue _fun0003 }
 861:
                var8 = var1.name;
 866:
                var1 = 'TikTok';
                if(!(var1 === var8)) { _fun0003_ip = 878; continue _fun0003 }
 876:
                var9 = true;
 878:
                var1 = {};
                var30 = var1;
                var29 = var7;
                var8 = copyDataProperties(var30, var29);
                var8 = 'showPlayButton';
                var1[var8] = var9;
                var6 = var1;
                _fun0003_ip = 973; continue _fun0003;
 904:
                var1 = {};
                var30 = var1;
                var29 = var7;
                var7 = copyDataProperties(var30, var29);
                var8 = var4.type;
                var7 = _closure1_slot4;
                var7 = var7.GIFV;
                var8 = var8 === var7;
                var7 = 'gifv';
                var1[var7] = var8;
                var8 = _closure1_slot5;
                var7 = var4.video;
                var8 = var8.bind(var2)(var7);
                var7 = 'videoUrl';
                var1[var7] = var8;
                var6 = var1;
 973:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var1 = var7 !== var1;
                if(var1) { _fun0003_ip = 999; continue _fun0003 }
 995:
                var1 = _closure2_slot1;
 999:
                var12 = var6;
                if(var1) { _fun0003_ip = 1046; continue _fun0003 }
 1005:
                var1 = {};
                var30 = var1;
                var29 = var6;
                var6 = copyDataProperties(var30, var29);
                var7 = _closure1_slot5;
                var6 = var4.video;
                var7 = var7.bind(var2)(var6);
                var6 = 'gifvUrlForPortal';
                var1[var6] = var7;
                var12 = var1;
 1046:
                var1 = _closure2_slot5;
                var6 = var1.embedBorderLeftColor;
                var1 = var4.color;
                var1 = var5 != var1;
                if(!var1) { _fun0003_ip = 1081; continue _fun0003 }
 1068:
                var8 = var4.color;
                var7 = '';
                var1 = var7 !== var8;
 1081:
                if(!var1) { _fun0003_ip = 1098; continue _fun0003 }
 1084:
                var7 = _closure1_slot3;
                var1 = var4.color;
                var6 = var7.bind(var2)(var1);
 1098:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var7 === var1)) { _fun0003_ip = 1127; continue _fun0003 }
 1117:
                var1 = var4.rawTitle;
                if(!(var5 == var1)) { _fun0003_ip = 1135; continue _fun0003 }
 1127:
                var14 = var4.rawTitle;
                _fun0003_ip = 1177; continue _fun0003;
 1135:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var9 = var7.bind(var2)(var1);
                var8 = var9.parseEmbedTitleMarkup;
                var7 = var4.rawTitle;
                var1 = _closure2_slot0;
                var14 = var8.bind(var9)(var7, var1);
 1177:
                var7 = var4.type;
                var1 = _closure1_slot4;
                var1 = var1.IMAGE;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 1361; continue _fun0003 }
 1201:
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 1361; continue _fun0003 }
 1220:
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var13 = undefined;
                if(!(var1 !== var7)) { _fun0003_ip = 1361; continue _fun0003 }
 1239:
                var1 = _closure1_slot4;
                var1 = var1.RICH;
                if(!(var1 !== var7)) { _fun0003_ip = 1261; continue _fun0003 }
 1253:
                var13 = var4.rawDescription;
                _fun0003_ip = 1361; continue _fun0003;
 1261:
                var1 = var4.rawDescription;
                var1 = var5 != var1;
                var13 = undefined;
                if(!var1) { _fun0003_ip = 1361; continue _fun0003 }
 1276:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
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
 1361:
                var8 = var4.fields;
                if(!(var5 == var8)) { _fun0003_ip = 1375; continue _fun0003 }
 1371:
                var8 = new Array(0);
 1375:
                var7 = var8.map;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.rawName;
                        var3 = null;
                        var1 = var3 == var1;
                        var4 = null;
                        if(var1) { _fun0004_ip = 70; continue _fun0004 }
 20:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.parseEmbedTitleMarkup;
                        var5 = var2.rawName;
                        var1 = _closure2_slot0;
                        var4 = var6.bind(var7)(var5, var1);
 70:
                        var1 = var2.rawValue;
                        var1 = var3 == var1;
                        var3 = null;
                        if(var1) { _fun0004_ip = 194; continue _fun0004 }
 85:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
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
 194:
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
                if(!var1) { _fun0003_ip = 1444; continue _fun0003 }
 1407:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var8 = var7.bind(var2)(var1);
                var7 = var8.calendarFormat;
                var1 = var4.timestamp;
                var19 = var7.bind(var8)(var1);
 1444:
                var1 = var4.footer;
                if(!(var5 == var1)) { _fun0003_ip = 1488; continue _fun0003 }
 1454:
                var1 = var5 != var19;
                var7 = undefined;
                if(!var1) { _fun0003_ip = 1690; continue _fun0003 }
 1466:
                var1 = {};
                var1['content'] = var19;
                var8 = '';
                var1['text'] = var8;
                var7 = var1;
                _fun0003_ip = 1690; continue _fun0003;
 1488:
                var1 = var4.footer;
                var17 = var1.text;
                var15 = var17;
                if(!(var5 != var19)) { _fun0003_ip = 1536; continue _fun0003 }
 1506:
                var1 = global;
                var1 = var1.HermesInternal;
                var16 = var1.concat;
                var8 = '';
                var1 = ' | ';
                var15 = var16.bind(var8)(var17, var1, var19);
 1536:
                var1 = {};
                var29 = var4.footer;
                var30 = var1;
                var8 = copyDataProperties(var30, var29);
                var8 = 'content';
                var1[var8] = var15;
                var8 = var4.footer;
                var8 = var8.iconProxyURL;
                if(!(var5 != var8)) { _fun0003_ip = 1596; continue _fun0003 }
 1576:
                var8 = var4.footer;
                var15 = var8.iconProxyURL;
                var8 = '';
                if(!(var8 === var15)) { _fun0003_ip = 1610; continue _fun0003 }
 1596:
                var8 = var4.footer;
                var19 = var8.iconURL;
                _fun0003_ip = 1622; continue _fun0003;
 1610:
                var8 = var4.footer;
                var19 = var8.iconProxyURL;
 1622:
                var7 = var1;
                if(!(var5 != var19)) { _fun0003_ip = 1690; continue _fun0003 }
 1629:
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
 1690:
                var1 = var4.author;
                var1 = var5 != var1;
                var8 = undefined;
                if(!var1) { _fun0003_ip = 1864; continue _fun0003 }
 1708:
                var1 = var4.author;
                var1 = var1.iconProxyURL;
                if(!(var5 != var1)) { _fun0003_ip = 1744; continue _fun0003 }
 1724:
                var1 = var4.author;
                var15 = var1.iconProxyURL;
                var1 = '';
                if(!(var1 === var15)) { _fun0003_ip = 1758; continue _fun0003 }
 1744:
                var1 = var4.author;
                var21 = var1.iconURL;
                _fun0003_ip = 1770; continue _fun0003;
 1758:
                var1 = var4.author;
                var21 = var1.iconProxyURL;
 1770:
                if(!(var5 == var21)) { _fun0003_ip = 1782; continue _fun0003 }
 1774:
                var1 = var4.author;
                _fun0003_ip = 1861; continue _fun0003;
 1782:
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
 1861:
                var8 = var1;
 1864:
                var20 = _closure1_slot0;
                var1 = _closure1_slot2;
                var16 = 9;
                var15 = var1[var16];
                var19 = var20.bind(var2)(var15);
                var17 = var19.getMediaObscuredReasonFromBitmask;
                var15 = {};
                var22 = 10;
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
                if(!var19) { _fun0003_ip = 2010; continue _fun0003 }
 1945:
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
 2010:
                var15 = var1.length;
                var1 = 0;
                var21 = var15 > var1;
                var15 = var21;
                if(!var21) { _fun0003_ip = 2031; continue _fun0003 }
 2027:
                var15 = _closure2_slot12;
 2031:
                var16 = var21;
                if(!var16) { _fun0003_ip = 2067; continue _fun0003 }
 2037:
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 11;
                var1 = var20[var1];
                var17 = var17.bind(var2)(var1);
                var1 = var17.isVerifiedTeen;
                var16 = var1.bind(var17)();
 2067:
                var1 = {};
                var22 = var4.id;
                var23 = var5 != var22;
                var17 = '';
                var20 = var17;
                if(!var23) { _fun0003_ip = 2091; continue _fun0003 }
 2088:
                var20 = var22;
 2091:
                var1['id'] = var20;
                var22 = var4.type;
                var23 = var5 != var22;
                var20 = undefined;
                if(!var23) { _fun0003_ip = 2112; continue _fun0003 }
 2109:
                var20 = var22;
 2112:
                var1['type'] = var20;
                var22 = _closure2_slot2;
                var20 = var17;
                if(!var22) { _fun0003_ip = 2191; continue _fun0003 }
 2126:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 12;
                var23 = var26[var22];
                var23 = var25.bind(var2)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var2)(var22);
                var22 = var22.t;
                var22 = var22.F+x38P;
                var23 = var23.bind(var24)(var22);
                var22 = var23.toUpperCase;
                var20 = var22.bind(var23)();
 2191:
                var1['spoiler'] = var20;
                var20 = var17;
                if(!var21) { _fun0003_ip = 2257; continue _fun0003 }
 2202:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 12;
                var22 = var25[var21];
                var22 = var24.bind(var2)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var2)(var21);
                var21 = var21.t;
                var21 = var21.SpxcUV;
                var20 = var22.bind(var23)(var21);
 2257:
                var1['obscure'] = var20;
                if(!var19) { _fun0003_ip = 2322; continue _fun0003 }
 2265:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 12;
                var19 = var22[var18];
                var19 = var21.bind(var2)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var2)(var18);
                var18 = var18.t;
                var18 = var18.MRdR7+;
                var17 = var19.bind(var20)(var18);
 2322:
                var1['obscureAwaitingScan'] = var17;
                var1['verifyAge'] = var15;
                var1['obscureHideControls'] = var16;
                if(var15) { _fun0003_ip = 2343; continue _fun0003 }
 2340:
                var15 = var16;
 2343:
                var1['obscureIsOpaque'] = var15;
                var16 = var4.provider;
                var17 = var5 != var16;
                var15 = undefined;
                if(!var17) { _fun0003_ip = 2366; continue _fun0003 }
 2363:
                var15 = var16;
 2366:
                var1['provider'] = var15;
                var1['author'] = var8;
                var8 = var4.rawTitle;
                var1['rawTitle'] = var8;
                var15 = var5 != var14;
                var8 = undefined;
                if(!var15) { _fun0003_ip = 2399; continue _fun0003 }
 2396:
                var8 = var14;
 2399:
                var1['title'] = var8;
                var14 = var4.url;
                var15 = var5 != var14;
                var8 = undefined;
                if(!var15) { _fun0003_ip = 2420; continue _fun0003 }
 2417:
                var8 = var14;
 2420:
                var1['url'] = var8;
                var8 = var4.rawDescription;
                var1['rawDescription'] = var8;
                var14 = var5 != var13;
                var8 = undefined;
                if(!var14) { _fun0003_ip = 2447; continue _fun0003 }
 2444:
                var8 = var13;
 2447:
                var1['description'] = var8;
                var13 = var5 != var12;
                var8 = undefined;
                if(!var13) { _fun0003_ip = 2463; continue _fun0003 }
 2460:
                var8 = var12;
 2463:
                var1['thumbnail'] = var8;
                var12 = var5 != var11;
                var8 = undefined;
                if(!var12) { _fun0003_ip = 2480; continue _fun0003 }
 2477:
                var8 = var11;
 2480:
                var1['image'] = var8;
                var11 = var5 != var10;
                var8 = undefined;
                if(!var11) { _fun0003_ip = 2497; continue _fun0003 }
 2494:
                var8 = var10;
 2497:
                var1['images'] = var8;
                var10 = var5 != var9;
                var8 = undefined;
                if(!var10) { _fun0003_ip = 2514; continue _fun0003 }
 2511:
                var8 = var9;
 2514:
                var1['fields'] = var8;
                var1['footer'] = var7;
                var8 = var4.video;
                var9 = var5 != var8;
                var7 = undefined;
                if(!var9) { _fun0003_ip = 2542; continue _fun0003 }
 2539:
                var7 = var8;
 2542:
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
                if(!var7) { _fun0003_ip = 2609; continue _fun0003 }
 2606:
                var4 = var6;
 2609:
                var1['referenceId'] = var4;
                var4 = _closure2_slot8;
                var4 = var5 != var4;
                var2 = undefined;
                if(!var4) { _fun0003_ip = 2631; continue _fun0003 }
 2627:
                var2 = _closure2_slot8;
 2631:
                var1['backgroundColor'] = var2;
                return var1;
 2637:
                var1 = new Array(0);
                return var1;
 2643:
                var1 = new Array(0);
                return var1;
 2649:
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