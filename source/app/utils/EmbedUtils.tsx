// app/utils/EmbedUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function validateSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.width;
            var3 = var2.height;
            var2 = 0;
            var1 = var1 > var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function sanitizeMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!var11) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var8 = var6;
case 4:
            var7 = _closure1_slot3;
            var7 = var7.IS_ANIMATED;
            var7 = var9.bind(var10)(var8, var7);
            var1['srcIsAnimated'] = var7;
            var7 = var4 != var6;
            var5 = 0;
            if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var6;
case 6:
            var1['flags'] = var5;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3;
case 8:
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
case 0:
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
            if(!(var2 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
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
case 10:
            var5 = var3.author;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = var3.author;
            var6 = var6.name;
            var5 = var2 != var6;
case 12:
            if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
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
case 14:
            var5 = var3.provider;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var3.provider;
            var6 = var6.name;
            var5 = var2 != var6;
case 16:
            if(!var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = {};
            var6 = var3.provider;
            var6 = var6.name;
            var5['name'] = var6;
            var6 = var3.provider;
            var6 = var6.url;
            var5['url'] = var6;
            var1['provider'] = var5;
case 18:
            var5 = var3.timestamp;
            if(!(var2 != var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
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
case 20:
            var5 = var3.color;
            if(!(var2 != var5)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
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
case 22:
            var5 = var3.thumbnail;
            if(!(var2 != var5)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = _closure1_slot13;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var6 = var1.type;
            var5 = _closure1_slot4;
            var5 = var5.ARTICLE;
            if(!(var5 !== var6)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var5 = _closure1_slot4;
            var5 = var5.IMAGE;
            if(!(var5 !== var6)) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var6 = _closure1_slot14;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            var1['thumbnail'] = var5;
            _fun0003_ip = 24; continue _fun0003;
case 27:
            var6 = _closure1_slot14;
            var5 = var3.thumbnail;
            var5 = var6.bind(var7)(var5);
            var1['image'] = var5;
case 24:
            var5 = var3.image;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var8 = _closure1_slot13;
            var6 = var3.image;
            var5 = var8.bind(var7)(var6);
case 30:
            if(!var5) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var6 = _closure1_slot14;
            var5 = var3.image;
            var5 = var6.bind(var7)(var5);
            var1['image'] = var5;
case 32:
            var5 = var3.video;
            if(!(var2 != var5)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var5 = var1.thumbnail;
            var5 = var2 == var5;
            if(!var5) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var6 = var3.video;
            var6 = var6.proxy_url;
            var5 = var2 != var6;
case 36:
            if(!var5) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var8 = _closure1_slot13;
            var6 = var3.video;
            var5 = var8.bind(var7)(var6);
case 38:
            if(!var5) { _fun0003_ip = 40; continue _fun0003 }
case 41:
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
case 40:
            var5 = var1.thumbnail;
            var5 = var2 != var5;
            if(!var5) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var8 = _closure1_slot13;
            var6 = var3.video;
            var5 = var8.bind(var7)(var6);
case 42:
            if(!var5) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var10 = var3.provider;
            var8 = var3.video;
            if(!(var2 != var10)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var11 = _closure1_slot7;
            var9 = var11.test;
            var6 = var10.name;
            var9 = var9.bind(var11)(var6);
            var6 = false;
            if(var9) { _fun0003_ip = 48; continue _fun0003 }
case 46:
            var12 = _closure1_slot8;
            var11 = var12.test;
            var9 = var8.url;
            var9 = var11.bind(var12)(var9);
            var6 = false;
            if(var9) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var9 = var8.proxy_url;
            var11 = var2 != var9;
            if(var11) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var12 = /^https:/i;
            var9 = var12.test;
            var8 = var8.url;
            var11 = var9.bind(var12)(var8);
case 50:
            var9 = var2 != var13;
            if(!var9) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 2;
            var8 = var14[var8];
            var12 = var12.bind(var7)(var8);
            var8 = var12.extractTimestamp;
            var12 = var8.bind(var12)(var13);
            var8 = 1492472454139.0;
            var9 = var12 < var8;
case 52:
            var8 = var11;
            if(!var9) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var9 = var11;
            if(!var11) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var9 = var2 != var10;
case 56:
            if(!var9) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var12 = _closure1_slot9;
            var11 = var12.test;
            var10 = var10.name;
            var9 = var11.bind(var12)(var10);
case 58:
            var8 = var9;
case 54:
            var6 = var8;
case 48:
            var5 = var6;
case 44:
            if(!var5) { _fun0003_ip = 34; continue _fun0003 }
case 60:
            var6 = _closure1_slot14;
            var5 = var3.video;
            var5 = var6.bind(var7)(var5);
            var1['video'] = var5;
case 34:
            var6 = _closure1_slot6;
            var5 = var6.has;
            var4 = var1.type;
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var4 = new Array(0);
            var1['fields'] = var4;
            _fun0003_ip = 63; continue _fun0003;
case 61:
            var4 = var3.fields;
            if(!(var2 == var4)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var4 = new Array(0);
case 64:
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
case 63:
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
case 0:
                var4 = arg1;
                var1 = var4.url;
                var5 = null;
                if(!(var5 == var1)) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                var2 = _closure2_slot1;
                var1 = var2.push;
                var1 = var1.bind(var2)(var4);
                _fun0004_ip = 68; continue _fun0004;
case 66:
                var6 = _closure2_slot0;
                var3 = var6.get;
                var2 = var4.url;
                var2 = var3.bind(var6)(var2);
                if(!(var5 != var2)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                var3 = var4.image;
                if(!(var5 != var3)) { _fun0004_ip = 68; continue _fun0004 }
case 71:
                var3 = var2.images;
                if(!(var5 == var3)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                var3 = new Array(0);
                var2['images'] = var3;
                var3 = var2.image;
                if(!(var5 != var3)) { _fun0004_ip = 72; continue _fun0004 }
case 74:
                var6 = var2.images;
                var5 = var6.push;
                var3 = var2.image;
                var3 = var5.bind(var6)(var3);
case 72:
                var5 = var2.images;
                var3 = var5.push;
                var2 = var4.image;
                var2 = var3.bind(var5)(var2);
case 68:
                var2 = undefined;
                return var2;
case 69:
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
case 0:
            var3 = arg1;
            var1 = var3.image;
            var2 = var3.video;
            var7 = var3.type;
            var6 = var3.author;
            var5 = var3.rawTitle;
            var4 = null;
            var1 = var4 != var1;
            if(var1) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var1 = var4 != var2;
case 75:
            if(!var1) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var2 = _closure1_slot4;
            var2 = var2.GIFV;
            var2 = var7 === var2;
            if(var2) { _fun0005_ip = 74; continue _fun0005 }
case 79:
            var3 = _closure1_slot4;
            var3 = var3.RICH;
            var3 = var7 !== var3;
            if(!var3) { _fun0005_ip = 80; continue _fun0005 }
case 81:
            var3 = var4 == var6;
case 80:
            if(!var3) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var3 = var4 == var5;
case 82:
            var2 = var3;
case 74:
            var1 = var2;
case 77:
            return var1;
        }
    };
    var3['isEmbedInline'] = var4;
    var4 = function isServerShopArticleEmbed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot4;
            var1 = var1.ARTICLE;
            var1 = var2 === var1;
            if(!var1) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var5 = var3.url;
            var2 = null;
            var1 = var2 != var5;
case 84:
            if(!var1) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var6 = _closure1_slot11;
            var5 = var6.test;
            var2 = var3.url;
            var2 = var5.bind(var6)(var2);
            if(var2) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var5 = _closure1_slot10;
            var4 = var5.test;
            var3 = var3.url;
            var2 = var4.bind(var5)(var3);
case 88:
            var1 = var2;
case 86:
            return var1;
        }
    };
    var3['isServerShopArticleEmbed'] = var4;
    var4 = function isCollectiblesShopArticleEmbed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var4 = var2.type;
            var1 = _closure1_slot4;
            var1 = var1.ARTICLE;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var5 = var2.url;
            var4 = null;
            var1 = var4 != var5;
case 84:
            if(!var1) { _fun0007_ip = 90; continue _fun0007 }
case 87:
            var4 = _closure1_slot12;
            var3 = var4.test;
            var2 = var2.url;
            var1 = var3.bind(var4)(var2);
case 90:
            return var1;
        }
    };
    var3['isCollectiblesShopArticleEmbed'] = var4;
    var4 = function getMaxEmbedMediaSize(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var3 = arg3;
            var2 = null;
            if(!(var2 != var4)) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            if(!(var2 == var3)) { _fun0008_ip = 93; continue _fun0008 }
case 91:
            var1 = arg1;
            var1 = var1.provider;
            var5 = var2 == var1;
            var2 = undefined;
            if(var5) { _fun0008_ip = 84; continue _fun0008 }
case 94:
            var2 = var1.name;
case 84:
            var1 = 'TikTok';
            if(!(var1 !== var2)) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var1 = {'maxMediaWidth': 400, 'maxMediaHeight': 300};
            _fun0008_ip = 73; continue _fun0008;
case 95:
            var1 = {'maxMediaWidth': 400, 'maxMediaHeight': 450};
case 73:
            _fun0008_ip = 82; continue _fun0008;
case 93:
            var2 = {};
            var2['maxMediaWidth'] = var4;
            var2['maxMediaHeight'] = var3;
            var1 = var2;
case 82:
            return var1;
        }
    };
    var3['getMaxEmbedMediaSize'] = var4;
    var4 = function canEmbedLinks(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = var3.isPrivate;
            var1 = var1.bind(var3)();
            if(var1) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var2 = var4.can;
            var1 = _closure1_slot5;
            var1 = var1.EMBED_LINKS;
            var1 = var2.bind(var4)(var1, var3);
            _fun0009_ip = 70; continue _fun0009;
case 97:
            var2 = var3.isManaged;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 70:
            return var1;
        }
    };
    var3['canEmbedLinks'] = var4;
    var2 = function shouldStripEmbeds(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var3 = var2.content;
            var1 = '';
            var1 = var1 !== var3;
            if(var1) { _fun0010_ip = 99; continue _fun0010 }
case 98:
            var4 = var2.messageSnapshots;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.message;
                    var3 = var1.content;
                    var1 = '';
                    var1 = var1 !== var3;
                    if(var1) { _fun0011_ip = 97; continue _fun0011 }
case 100:
                    var2 = var2.message;
                    var2 = var2.attachments;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 97:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 99:
            return var1;
        }
    };
    var3['shouldStripEmbeds'] = var2;
    return var1;
})();