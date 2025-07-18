// app/utils/EmbedUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function validateSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.width;
            var3 = var2.height;
            var2 = 0;
            var1 = var1 > var2;
            if(!var1) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var1 = var3 > var2;
 26:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function sanitizeMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var10 = var1.url;
            var9 = var1.proxy_url;
            var8 = var1.width;
            var7 = var1.height;
            var5 = var1.placeholder;
            var4 = var1.placeholder_version;
            var2 = var1.description;
            var6 = var1.flags;
            var3 = var1.content_type;
            var1 = {};
            var1['url'] = var10;
            var1['proxyURL'] = var9;
            var1['width'] = var8;
            var1['height'] = var7;
            var1['placeholder'] = var5;
            var1['placeholderVersion'] = var4;
            var1['description'] = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var10 = var5.bind(var2)(var4);
            var9 = var10.hasFlag;
            var4 = null;
            var11 = var4 != var6;
            var8 = 0;
            if(!var11) { _fun0002_ip = 130; continue _fun0002 }
 127:
            var8 = var6;
 130:
            var7 = _closure1_slot3;
            var7 = var7.IS_ANIMATED;
            var7 = var9.bind(var10)(var8, var7);
            var1['srcIsAnimated'] = var7;
            var7 = var4 != var6;
            var5 = 0;
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 160:
            var5 = var6;
 163:
            var1['flags'] = var5;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 179; continue _fun0002 }
 176:
            var2 = var3;
 179:
            var1['contentType'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function appendQueryParams(arg1, arg2) {
        var5 = arg2;
        var _closure2_slot0 = var5;
        var3 = global;
        var6 = var3.URL;
        var2 = var6.prototype;
        var4 = Object.create(var2, {constructor: {value: var6}});
        var7 = arg1;
        var8 = var4;
        var2 = new var8[var6](var7, var6);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot1 = var2;
        var4 = var3.Object;
        var3 = var4.keys;
        var4 = var3.bind(var4)(var5);
        var3 = var4.forEach;
        var1 = function(arg1) {
            var4 = arg1;
            var2 = _closure2_slot1;
            var3 = var2.searchParams;
            var2 = var3.set;
            var1 = _closure2_slot0;
            var1 = var1[var4];
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var7 = var5.bind(var1)(var7);
    var8 = var7.MessageEmbedMediaFlags;
    var _closure1_slot3 = var8;
    var8 = var7.MessageEmbedTypes;
    var _closure1_slot4 = var8;
    var7 = var7.Permissions;
    var _closure1_slot5 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
    var _closure1_slot6 = var7;
    var7 = /sketchfab/i;
    var _closure1_slot7 = var7;
    var7 = /^https:\\/\\/sketchfab\.com/i;
    var _closure1_slot8 = var7;
    var7 = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
    var _closure1_slot9 = var7;
    var7 = /^https?:\\/\\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\\/channels\\/([0-9]+)\\/shop$/;
    var _closure1_slot10 = var7;
    var7 = /^https?:\\/\\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\\/channels\\/([0-9]+)\\/shop\\/([0-9]+)$/;
    var _closure1_slot11 = var7;
    var8 = var4.RegExp;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/EmbedUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function sanitizeEmbed(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var13 = arg2;
            var3 = arg3;
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var7 = undefined;
            var6 = var5.bind(var7)(var2);
            var5 = var6.uniqueId;
            var2 = 'embed_';
            var2 = var5.bind(var6)(var2);
            var1['id'] = var2;
            var2 = var3.url;
            var1['url'] = var2;
            var2 = var3.type;
            var1['type'] = var2;
            var2 = var3.title;
            var1['rawTitle'] = var2;
            var2 = var3.description;
            var1['rawDescription'] = var2;
            var2 = var3.reference_id;
            var1['referenceId'] = var2;
            var2 = var3.flags;
            var1['flags'] = var2;
            var2 = var3.content_scan_version;
            var1['contentScanVersion'] = var2;
            var5 = var3.footer;
            var2 = null;
            if(!(var2 != var5)) { _fun0003_ip = 194; continue _fun0003 }
 137:
            var5 = {};
            var6 = var3.footer;
            var6 = var6.text;
            var5['text'] = var6;
            var6 = var3.footer;
            var6 = var6.icon_url;
            var5['iconURL'] = var6;
            var6 = var3.footer;
            var6 = var6.proxy_icon_url;
            var5['iconProxyURL'] = var6;
            var1['footer'] = var5;
 194:
            var5 = var3.author;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 222; continue _fun0003 }
 207:
            var6 = var3.author;
            var6 = var6.name;
            var5 = var2 != var6;
 222:
            if(!var5) { _fun0003_ip = 297; continue _fun0003 }
 225:
            var5 = {};
            var6 = var3.author;
            var6 = var6.name;
            var5['name'] = var6;
            var6 = var3.author;
            var6 = var6.url;
            var5['url'] = var6;
            var6 = var3.author;
            var6 = var6.icon_url;
            var5['iconURL'] = var6;
            var6 = var3.author;
            var6 = var6.proxy_icon_url;
            var5['iconProxyURL'] = var6;
            var1['author'] = var5;
 297:
            var5 = var3.provider;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 325; continue _fun0003 }
 310:
            var6 = var3.provider;
            var6 = var6.name;
            var5 = var2 != var6;
 325:
            if(!var5) { _fun0003_ip = 366; continue _fun0003 }
 328:
            var5 = {};
            var6 = var3.provider;
            var6 = var6.name;
            var5['name'] = var6;
            var6 = var3.provider;
            var6 = var6.url;
            var5['url'] = var6;
            var1['provider'] = var5;
 366:
            var5 = var3.timestamp;
            if(!(var2 != var5)) { _fun0003_ip = 441; continue _fun0003 }
 376:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = global;
            var9 = var5.Date;
            var16 = var3.timestamp;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var17 = var8;
            var5 = new var17[var9](var16, var15);
            var5 = var5 instanceof Object ? var5 : var8;
            var5 = var6.bind(var7)(var5);
            var1['timestamp'] = var5;
 441:
            var5 = var3.color;
            if(!(var2 != var5)) { _fun0003_ip = 495; continue _fun0003 }
 450:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var8 = var9.int2hsl;
            var6 = var3.color;
            var5 = false;
            var5 = var8.bind(var9)(var6, var5);
            var1['color'] = var5;
 495:
            var5 = var3.thumbnail;
            if(!(var2 != var5)) { _fun0003_ip = 600; continue _fun0003 }
 505:
            var6 = _closure1_slot13;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0003_ip = 600; continue _fun0003 }
 523:
            var6 = var1.type;
            var5 = _closure1_slot4;
            var5 = var5.ARTICLE;
            if(!(var5 !== var6)) { _fun0003_ip = 579; continue _fun0003 }
 542:
            var5 = _closure1_slot4;
            var5 = var5.IMAGE;
            if(!(var5 !== var6)) { _fun0003_ip = 579; continue _fun0003 }
 556:
            var6 = _closure1_slot14;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            var1['thumbnail'] = var5;
            _fun0003_ip = 600; continue _fun0003;
 579:
            var6 = _closure1_slot14;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            var1['image'] = var5;
 600:
            var5 = var3.image;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 628; continue _fun0003 }
 613:
            var8 = _closure1_slot13;
            var6 = var3.image;
            var5 = var8.bind(var7)(var6);
 628:
            if(!var5) { _fun0003_ip = 652; continue _fun0003 }
 631:
            var6 = _closure1_slot14;
            var5 = var3.image;
            var5 = var6.bind(var7)(var5);
            var1['image'] = var5;
 652:
            var5 = var3.video;
            if(!(var2 != var5)) { _fun0003_ip = 1060; continue _fun0003 }
 665:
            var5 = var1.thumbnail;
            var5 = var2 == var5;
            if(!var5) { _fun0003_ip = 694; continue _fun0003 }
 678:
            var6 = var3.video;
            var6 = var6.proxy_url;
            var5 = var2 != var6;
 694:
            if(!var5) { _fun0003_ip = 712; continue _fun0003 }
 697:
            var8 = _closure1_slot13;
            var6 = var3.video;
            var5 = var8.bind(var7)(var6);
 712:
            if(!var5) { _fun0003_ip = 791; continue _fun0003 }
 715:
            var5 = {};
            var6 = var3.video;
            var6 = var6.width;
            var5['width'] = var6;
            var6 = var3.video;
            var6 = var6.height;
            var5['height'] = var6;
            var9 = _closure1_slot15;
            var6 = var3.video;
            var8 = var6.proxy_url;
            var6 = {};
            var10 = 'webp';
            var6['format'] = var10;
            var6 = var9.bind(var7)(var8, var6);
            var5['url'] = var6;
            var1['thumbnail'] = var5;
 791:
            var5 = var1.thumbnail;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 819; continue _fun0003 }
 804:
            var8 = _closure1_slot13;
            var6 = var3.video;
            var5 = var8.bind(var7)(var6);
 819:
            if(!var5) { _fun0003_ip = 1036; continue _fun0003 }
 825:
            var10 = var3.provider;
            var8 = var3.video;
            if(!(var2 != var10)) { _fun0003_ip = 868; continue _fun0003 }
 841:
            var11 = _closure1_slot7;
            var9 = var11.test;
            var6 = var10.name;
            var9 = var9.bind(var11)(var6);
            var6 = false;
            if(var9) { _fun0003_ip = 1033; continue _fun0003 }
 868:
            var12 = _closure1_slot8;
            var11 = var12.test;
            var9 = var8.url;
            var9 = var11.bind(var12)(var9);
            var6 = false;
            if(var9) { _fun0003_ip = 1033; continue _fun0003 }
 895:
            var9 = var8.proxy_url;
            var11 = var2 != var9;
            if(var11) { _fun0003_ip = 937; continue _fun0003 }
 908:
            var12 = /^https:/i;
            var9 = var12.test;
            var8 = var8.url;
            var11 = var9.bind(var12)(var8);
 937:
            var9 = var2 != var13;
            if(!var9) { _fun0003_ip = 989; continue _fun0003 }
 944:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 2;
            var8 = var14[var8];
            var12 = var12.bind(var7)(var8);
            var8 = var12.extractTimestamp;
            var12 = var8.bind(var12)(var13);
            var8 = 1492472454139.0;
            var9 = var12 < var8;
 989:
            var8 = var11;
            if(!var9) { _fun0003_ip = 1030; continue _fun0003 }
 995:
            var9 = var11;
            if(!var11) { _fun0003_ip = 1005; continue _fun0003 }
 1001:
            var9 = var2 != var10;
 1005:
            if(!var9) { _fun0003_ip = 1027; continue _fun0003 }
 1008:
            var12 = _closure1_slot9;
            var11 = var12.test;
            var10 = var10.name;
            var9 = var11.bind(var12)(var10);
 1027:
            var8 = var9;
 1030:
            var6 = var8;
 1033:
            var5 = var6;
 1036:
            if(!var5) { _fun0003_ip = 1060; continue _fun0003 }
 1039:
            var6 = _closure1_slot14;
            var5 = var3.video;
            var5 = var6.bind(var7)(var5);
            var1['video'] = var5;
 1060:
            var6 = _closure1_slot6;
            var5 = var6.has;
            var4 = var1.type;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0003_ip = 1094; continue _fun0003 }
 1082:
            var4 = new Array(0);
            var1['fields'] = var4;
            _fun0003_ip = 1131; continue _fun0003;
 1094:
            var4 = var3.fields;
            if(!(var2 == var4)) { _fun0003_ip = 1108; continue _fun0003 }
 1104:
            var4 = new Array(0);
 1108:
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.name;
                var3 = var1.value;
                var2 = var1.inline;
                var1 = {};
                var1['rawName'] = var4;
                var1['rawValue'] = var3;
                var1['inline'] = var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['fields'] = var2;
 1131:
            return var1;
        }
    };
    var3['sanitizeEmbed'] = var4;
    var4 = function mergeEmbedsOnURL(arg1) {
        var4 = arg1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var1 = var4.url;
                var5 = null;
                if(!(var5 == var1)) { _fun0004_ip = 33; continue _fun0004 }
 14:
                var2 = _closure2_slot1;
                var1 = var2.push;
                var1 = var1.bind(var2)(var4);
                _fun0004_ip = 143; continue _fun0004;
 33:
                var6 = _closure2_slot0;
                var3 = var6.get;
                var2 = var4.url;
                var2 = var3.bind(var6)(var2);
                if(!(var5 != var2)) { _fun0004_ip = 147; continue _fun0004 }
 59:
                var3 = var4.image;
                if(!(var5 != var3)) { _fun0004_ip = 143; continue _fun0004 }
 69:
                var3 = var2.images;
                if(!(var5 == var3)) { _fun0004_ip = 121; continue _fun0004 }
 79:
                var3 = new Array(0);
                var2['images'] = var3;
                var3 = var2.image;
                if(!(var5 != var3)) { _fun0004_ip = 121; continue _fun0004 }
 99:
                var6 = var2.images;
                var5 = var6.push;
                var3 = var2.image;
                var3 = var5.bind(var6)(var3);
 121:
                var5 = var2.images;
                var3 = var5.push;
                var2 = var4.image;
                var2 = var3.bind(var5)(var2);
 143:
                var2 = undefined;
                return var2;
 147:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = var4.url;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['mergeEmbedsOnURL'] = var4;
    var4 = function isEmbedInline(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = var3.image;
            var2 = var3.video;
            var7 = var3.type;
            var6 = var3.author;
            var5 = var3.rawTitle;
            var4 = null;
            var1 = var4 != var1;
            if(var1) { _fun0005_ip = 45; continue _fun0005 }
 41:
            var1 = var4 != var2;
 45:
            if(!var1) { _fun0005_ip = 102; continue _fun0005 }
 48:
            var2 = _closure1_slot4;
            var2 = var2.GIFV;
            var2 = var7 === var2;
            if(var2) { _fun0005_ip = 99; continue _fun0005 }
 68:
            var3 = _closure1_slot4;
            var3 = var3.RICH;
            var3 = var7 !== var3;
            if(!var3) { _fun0005_ip = 89; continue _fun0005 }
 85:
            var3 = var4 == var6;
 89:
            if(!var3) { _fun0005_ip = 96; continue _fun0005 }
 92:
            var3 = var4 == var5;
 96:
            var2 = var3;
 99:
            var1 = var2;
 102:
            return var1;
        }
    };
    var3['isEmbedInline'] = var4;
    var4 = function isServerShopArticleEmbed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot4;
            var1 = var1.ARTICLE;
            var1 = var2 === var1;
            if(!var1) { _fun0006_ip = 39; continue _fun0006 }
 28:
            var5 = var3.url;
            var2 = null;
            var1 = var2 != var5;
 39:
            if(!var1) { _fun0006_ip = 86; continue _fun0006 }
 42:
            var6 = _closure1_slot11;
            var5 = var6.test;
            var2 = var3.url;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0006_ip = 83; continue _fun0006 }
 64:
            var5 = _closure1_slot10;
            var4 = var5.test;
            var3 = var3.url;
            var2 = var4.bind(var5)(var3);
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var3['isServerShopArticleEmbed'] = var4;
    var4 = function isCollectiblesShopArticleEmbed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var1 = _closure1_slot4;
            var1 = var1.ARTICLE;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 39; continue _fun0007 }
 28:
            var5 = var2.url;
            var4 = null;
            var1 = var4 != var5;
 39:
            if(!var1) { _fun0007_ip = 61; continue _fun0007 }
 42:
            var4 = _closure1_slot12;
            var3 = var4.test;
            var2 = var2.url;
            var1 = var3.bind(var4)(var2);
 61:
            return var1;
        }
    };
    var3['isCollectiblesShopArticleEmbed'] = var4;
    var4 = function getMaxEmbedMediaSize(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg2;
            var3 = arg3;
            var2 = null;
            if(!(var2 != var4)) { _fun0008_ip = 16; continue _fun0008 }
 12:
            if(!(var2 == var3)) { _fun0008_ip = 81; continue _fun0008 }
 16:
            var1 = arg1;
            var1 = var1.provider;
            var5 = var2 == var1;
            var2 = undefined;
            if(var5) { _fun0008_ip = 39; continue _fun0008 }
 34:
            var2 = var1.name;
 39:
            var1 = 'TikTok';
            if(!(var1 !== var2)) { _fun0008_ip = 65; continue _fun0008 }
 49:
            var1 = {'maxMediaWidth': 400, 'maxMediaHeight': 300};
            _fun0008_ip = 79; continue _fun0008;
 65:
            var1 = {'maxMediaWidth': 400, 'maxMediaHeight': 450};
 79:
            _fun0008_ip = 96; continue _fun0008;
 81:
            var2 = {};
            var2['maxMediaWidth'] = var4;
            var2['maxMediaHeight'] = var3;
            var1 = var2;
 96:
            return var1;
        }
    };
    var3['getMaxEmbedMediaSize'] = var4;
    var4 = function canEmbedLinks(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = var3.isPrivate;
            var1 = var1.bind(var3)();
            if(var1) { _fun0009_ip = 46; continue _fun0009 }
 19:
            var2 = var4.can;
            var1 = _closure1_slot5;
            var1 = var1.EMBED_LINKS;
            var1 = var2.bind(var4)(var1, var3);
            _fun0009_ip = 59; continue _fun0009;
 46:
            var2 = var3.isManaged;
            var2 = var2.bind(var3)();
            var1 = !var2;
 59:
            return var1;
        }
    };
    var3['canEmbedLinks'] = var4;
    var2 = function shouldStripEmbeds(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var3 = var2.content;
            var1 = '';
            var1 = var1 !== var3;
            if(var1) { _fun0010_ip = 43; continue _fun0010 }
 19:
            var4 = var2.messageSnapshots;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.message;
                    var3 = var1.content;
                    var1 = '';
                    var1 = var1 !== var3;
                    if(var1) { _fun0011_ip = 46; continue _fun0011 }
 24:
                    var2 = var2.message;
                    var2 = var2.attachments;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 46:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 43:
            return var1;
        }
    };
    var3['shouldStripEmbeds'] = var2;
    return var1;
})();