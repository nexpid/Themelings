// app/utils/EmbedUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: validateSize
        _fun56051: for(var _fun56051_ip = 0; ; ) switch(_fun56051_ip) {
 0:
            mike = argFoo;
            entity = mike.width;
            zulu = mike.height;
            mike = 0;
            entity = entity > mike;
            if(!entity) { _fun56051_ip = 26; continue _fun56051 }
 22:
            entity = zulu > mike;
 26:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: sanitizeMedia
        _fun56052: for(var _fun56052_ip = 0; ; ) switch(_fun56052_ip) {
 0:
            entity = argFoo;
            yankee = entity.url;
            offset = entity.proxy_url;
            verify = entity.width;
            options = entity.height;
            golf = entity.placeholder;
            report = entity.placeholder_version;
            tango = entity.flags;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 3;
            entity = oscar[entity];
            oscar = undefined;
            romeo = zulu.bind(oscar)(entity);
            zulu = romeo.getCurrentConfig;
            entity = {};
            backup = 'embed_utils_sanitize_media';
            entity['location'] = backup;
            entity = zulu.bind(romeo)(entity);
            zulu = entity.enabled;
            if(zulu) { _fun56052_ip = 139; continue _fun56052 }
 97:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            entity = 4;
            entity = foxtrot[entity];
            foxtrot = romeo.bind(oscar)(entity);
            romeo = foxtrot.getCurrentConfig;
            entity = {};
            entity['location'] = backup;
            entity = romeo.bind(foxtrot)(entity);
            zulu = entity.enabled;
 139:
            entity = {};
            entity['url'] = yankee;
            entity['proxyURL'] = offset;
            entity['width'] = verify;
            entity['height'] = options;
            entity['placeholder'] = golf;
            entity['placeholderVersion'] = report;
            report = zulu;
            if(!report) { _fun56052_ip = 230; continue _fun56052 }
 174:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 5;
            golf = verify[golf];
            offset = options.bind(oscar)(golf);
            verify = offset.hasFlag;
            golf = null;
            golf = golf != tango;
            options = 0;
            if(!golf) { _fun56052_ip = 214; continue _fun56052 }
 211:
            options = tango;
 214:
            golf = _closure1_slot3;
            golf = golf.IS_ANIMATED;
            report = verify.bind(offset)(options, golf);
 230:
            entity['srcIsAnimated'] = report;
            if(zulu) { _fun56052_ip = 296; continue _fun56052 }
 238:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 5;
            zulu = golf[zulu];
            oscar = report.bind(oscar)(zulu);
            report = oscar.removeFlag;
            zulu = null;
            golf = zulu != tango;
            zulu = 0;
            if(!golf) { _fun56052_ip = 278; continue _fun56052 }
 275:
            zulu = tango;
 278:
            mike = _closure1_slot3;
            mike = mike.IS_ANIMATED;
            mike = report.bind(oscar)(zulu, mike);
            _fun56052_ip = 313; continue _fun56052;
 296:
            zulu = null;
            report = zulu != tango;
            zulu = 0;
            if(!report) { _fun56052_ip = 310; continue _fun56052 }
 307:
            zulu = tango;
 310:
            mike = zulu;
 313:
            entity['flags'] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: appendQueryParams
        report = argBar;
        var _closure2_slot0 = report;
        zulu = global;
        oscar = zulu.URL;
        mike = oscar.prototype;
        tango = Object.create(mike, {constructor: {value: oscar}});
        golf = argFoo;
        options = tango;
        mike = new options[oscar](golf, oscar);
        mike = mike instanceof Object ? mike : tango;
        var _closure2_slot1 = mike;
        tango = zulu.Object;
        zulu = tango.keys;
        tango = zulu.bind(tango)(report);
        zulu = tango.forEach;
        entity = function(argFoo) {
            tango = argFoo;
            mike = _closure2_slot1;
            zulu = mike.searchParams;
            mike = zulu.set;
            entity = _closure2_slot0;
            entity = entity[tango];
            entity = mike.bind(zulu)(tango, entity);
            entity = undefined;
            return entity;
        };
        entity = zulu.bind(tango)(entity);
        entity = mike.toString;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot15 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    options = golf.MessageEmbedMediaFlags;
    var _closure1_slot3 = options;
    options = golf.MessageEmbedTypes;
    var _closure1_slot4 = options;
    golf = golf.Permissions;
    var _closure1_slot5 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
    var _closure1_slot6 = golf;
    golf = /sketchfab/i;
    var _closure1_slot7 = golf;
    golf = /^https:\\/\\/sketchfab\.com/i;
    var _closure1_slot8 = golf;
    golf = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
    var _closure1_slot9 = golf;
    golf = /^https?:\\/\\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\\/channels\\/([0-9]+)\\/shop$/;
    var _closure1_slot10 = golf;
    golf = /^https?:\\/\\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\\/channels\\/([0-9]+)\\/shop\\/([0-9]+)$/;
    var _closure1_slot11 = golf;
    options = tango.RegExp;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/EmbedUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: sanitizeEmbed
        _fun56055: for(var _fun56055_ip = 0; ; ) switch(_fun56055_ip) {
 0:
            foxtrot = argBar;
            zulu = argBaz;
            entity = {};
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            golf = undefined;
            oscar = report.bind(golf)(mike);
            report = oscar.uniqueId;
            mike = 'embed_';
            mike = report.bind(oscar)(mike);
            entity['id'] = mike;
            mike = zulu.url;
            entity['url'] = mike;
            mike = zulu.type;
            entity['type'] = mike;
            mike = zulu.title;
            entity['rawTitle'] = mike;
            mike = zulu.description;
            entity['rawDescription'] = mike;
            mike = zulu.reference_id;
            entity['referenceId'] = mike;
            mike = zulu.flags;
            entity['flags'] = mike;
            mike = zulu.content_scan_version;
            entity['contentScanVersion'] = mike;
            report = zulu.footer;
            mike = null;
            if(!(mike != report)) { _fun56055_ip = 194; continue _fun56055 }
 137:
            report = {};
            oscar = zulu.footer;
            oscar = oscar.text;
            report['text'] = oscar;
            oscar = zulu.footer;
            oscar = oscar.icon_url;
            report['iconURL'] = oscar;
            oscar = zulu.footer;
            oscar = oscar.proxy_icon_url;
            report['iconProxyURL'] = oscar;
            entity['footer'] = report;
 194:
            report = zulu.author;
            report = mike != report;
            if(!report) { _fun56055_ip = 222; continue _fun56055 }
 207:
            oscar = zulu.author;
            oscar = oscar.name;
            report = mike != oscar;
 222:
            if(!report) { _fun56055_ip = 297; continue _fun56055 }
 225:
            report = {};
            oscar = zulu.author;
            oscar = oscar.name;
            report['name'] = oscar;
            oscar = zulu.author;
            oscar = oscar.url;
            report['url'] = oscar;
            oscar = zulu.author;
            oscar = oscar.icon_url;
            report['iconURL'] = oscar;
            oscar = zulu.author;
            oscar = oscar.proxy_icon_url;
            report['iconProxyURL'] = oscar;
            entity['author'] = report;
 297:
            report = zulu.provider;
            report = mike != report;
            if(!report) { _fun56055_ip = 325; continue _fun56055 }
 310:
            oscar = zulu.provider;
            oscar = oscar.name;
            report = mike != oscar;
 325:
            if(!report) { _fun56055_ip = 366; continue _fun56055 }
 328:
            report = {};
            oscar = zulu.provider;
            oscar = oscar.name;
            report['name'] = oscar;
            oscar = zulu.provider;
            oscar = oscar.url;
            report['url'] = oscar;
            entity['provider'] = report;
 366:
            report = zulu.timestamp;
            if(!(mike != report)) { _fun56055_ip = 441; continue _fun56055 }
 376:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 7;
            report = options[report];
            oscar = oscar.bind(golf)(report);
            report = global;
            verify = report.Date;
            sizing = zulu.timestamp;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            output = options;
            report = new output[verify](sizing, kilo);
            report = report instanceof Object ? report : options;
            report = oscar.bind(golf)(report);
            entity['timestamp'] = report;
 441:
            report = zulu.color;
            if(!(mike != report)) { _fun56055_ip = 495; continue _fun56055 }
 450:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 8;
            report = options[report];
            verify = oscar.bind(golf)(report);
            options = verify.int2hsl;
            oscar = zulu.color;
            report = false;
            report = options.bind(verify)(oscar, report);
            entity['color'] = report;
 495:
            report = zulu.thumbnail;
            if(!(mike != report)) { _fun56055_ip = 600; continue _fun56055 }
 505:
            oscar = _closure1_slot13;
            report = zulu.thumbnail;
            report = oscar.bind(golf)(report);
            if(!report) { _fun56055_ip = 600; continue _fun56055 }
 523:
            oscar = entity.type;
            report = _closure1_slot4;
            report = report.ARTICLE;
            if(!(report !== oscar)) { _fun56055_ip = 579; continue _fun56055 }
 542:
            report = _closure1_slot4;
            report = report.IMAGE;
            if(!(report !== oscar)) { _fun56055_ip = 579; continue _fun56055 }
 556:
            oscar = _closure1_slot14;
            report = zulu.thumbnail;
            report = oscar.bind(golf)(report);
            entity['thumbnail'] = report;
            _fun56055_ip = 600; continue _fun56055;
 579:
            oscar = _closure1_slot14;
            report = zulu.thumbnail;
            report = oscar.bind(golf)(report);
            entity['image'] = report;
 600:
            report = zulu.image;
            report = mike != report;
            if(!report) { _fun56055_ip = 628; continue _fun56055 }
 613:
            options = _closure1_slot13;
            oscar = zulu.image;
            report = options.bind(golf)(oscar);
 628:
            if(!report) { _fun56055_ip = 652; continue _fun56055 }
 631:
            oscar = _closure1_slot14;
            report = zulu.image;
            report = oscar.bind(golf)(report);
            entity['image'] = report;
 652:
            report = zulu.video;
            if(!(mike != report)) { _fun56055_ip = 1060; continue _fun56055 }
 665:
            report = entity.thumbnail;
            report = mike == report;
            if(!report) { _fun56055_ip = 694; continue _fun56055 }
 678:
            oscar = zulu.video;
            oscar = oscar.proxy_url;
            report = mike != oscar;
 694:
            if(!report) { _fun56055_ip = 712; continue _fun56055 }
 697:
            options = _closure1_slot13;
            oscar = zulu.video;
            report = options.bind(golf)(oscar);
 712:
            if(!report) { _fun56055_ip = 791; continue _fun56055 }
 715:
            report = {};
            oscar = zulu.video;
            oscar = oscar.width;
            report['width'] = oscar;
            oscar = zulu.video;
            oscar = oscar.height;
            report['height'] = oscar;
            verify = _closure1_slot15;
            oscar = zulu.video;
            options = oscar.proxy_url;
            oscar = {};
            offset = 'webp';
            oscar['format'] = offset;
            oscar = verify.bind(golf)(options, oscar);
            report['url'] = oscar;
            entity['thumbnail'] = report;
 791:
            report = entity.thumbnail;
            report = mike != report;
            if(!report) { _fun56055_ip = 819; continue _fun56055 }
 804:
            options = _closure1_slot13;
            oscar = zulu.video;
            report = options.bind(golf)(oscar);
 819:
            if(!report) { _fun56055_ip = 1036; continue _fun56055 }
 825:
            offset = zulu.provider;
            options = zulu.video;
            if(!(mike != offset)) { _fun56055_ip = 868; continue _fun56055 }
 841:
            yankee = _closure1_slot7;
            verify = yankee.test;
            oscar = offset.name;
            verify = verify.bind(yankee)(oscar);
            oscar = false;
            if(verify) { _fun56055_ip = 1033; continue _fun56055 }
 868:
            romeo = _closure1_slot8;
            yankee = romeo.test;
            verify = options.url;
            verify = yankee.bind(romeo)(verify);
            oscar = false;
            if(verify) { _fun56055_ip = 1033; continue _fun56055 }
 895:
            verify = options.proxy_url;
            yankee = mike != verify;
            if(yankee) { _fun56055_ip = 937; continue _fun56055 }
 908:
            romeo = /^https:/i;
            verify = romeo.test;
            options = options.url;
            yankee = verify.bind(romeo)(options);
 937:
            verify = mike != foxtrot;
            if(!verify) { _fun56055_ip = 989; continue _fun56055 }
 944:
            romeo = _closure1_slot1;
            backup = _closure1_slot2;
            options = 2;
            options = backup[options];
            romeo = romeo.bind(golf)(options);
            options = romeo.extractTimestamp;
            romeo = options.bind(romeo)(foxtrot);
            options = 1492472454139.0;
            verify = romeo < options;
 989:
            options = yankee;
            if(!verify) { _fun56055_ip = 1030; continue _fun56055 }
 995:
            verify = yankee;
            if(!yankee) { _fun56055_ip = 1005; continue _fun56055 }
 1001:
            verify = mike != offset;
 1005:
            if(!verify) { _fun56055_ip = 1027; continue _fun56055 }
 1008:
            romeo = _closure1_slot9;
            yankee = romeo.test;
            offset = offset.name;
            verify = yankee.bind(romeo)(offset);
 1027:
            options = verify;
 1030:
            oscar = options;
 1033:
            report = oscar;
 1036:
            if(!report) { _fun56055_ip = 1060; continue _fun56055 }
 1039:
            oscar = _closure1_slot14;
            report = zulu.video;
            report = oscar.bind(golf)(report);
            entity['video'] = report;
 1060:
            oscar = _closure1_slot6;
            report = oscar.has;
            tango = entity.type;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun56055_ip = 1094; continue _fun56055 }
 1082:
            tango = new Array(0);
            entity['fields'] = tango;
            _fun56055_ip = 1131; continue _fun56055;
 1094:
            tango = zulu.fields;
            if(!(mike == tango)) { _fun56055_ip = 1108; continue _fun56055 }
 1104:
            tango = new Array(0);
 1108:
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.name;
                zulu = entity.value;
                mike = entity.inline;
                entity = {};
                entity['rawName'] = tango;
                entity['rawValue'] = zulu;
                entity['inline'] = mike;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity['fields'] = mike;
 1131:
            return entity;
        }
    };
    zulu['sanitizeEmbed'] = tango;
    tango = function(argFoo) { // Original name: mergeEmbedsOnURL
        tango = argFoo;
        entity = global;
        entity = entity.Map;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        oscar = zulu;
        entity = new oscar[entity](report);
        entity = entity instanceof Object ? entity : zulu;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun56058: for(var _fun56058_ip = 0; ; ) switch(_fun56058_ip) {
 0:
                tango = argFoo;
                entity = tango.url;
                report = null;
                if(!(report == entity)) { _fun56058_ip = 33; continue _fun56058 }
 14:
                mike = _closure2_slot1;
                entity = mike.push;
                entity = entity.bind(mike)(tango);
                _fun56058_ip = 143; continue _fun56058;
 33:
                oscar = _closure2_slot0;
                zulu = oscar.get;
                mike = tango.url;
                mike = zulu.bind(oscar)(mike);
                if(!(report != mike)) { _fun56058_ip = 147; continue _fun56058 }
 59:
                zulu = tango.image;
                if(!(report != zulu)) { _fun56058_ip = 143; continue _fun56058 }
 69:
                zulu = mike.images;
                if(!(report == zulu)) { _fun56058_ip = 121; continue _fun56058 }
 79:
                zulu = new Array(0);
                mike['images'] = zulu;
                zulu = mike.image;
                if(!(report != zulu)) { _fun56058_ip = 121; continue _fun56058 }
 99:
                oscar = mike.images;
                report = oscar.push;
                zulu = mike.image;
                zulu = report.bind(oscar)(zulu);
 121:
                report = mike.images;
                zulu = report.push;
                mike = tango.image;
                mike = zulu.bind(report)(mike);
 143:
                mike = undefined;
                return mike;
 147:
                zulu = _closure2_slot1;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
                zulu = _closure2_slot0;
                mike = zulu.set;
                entity = tango.url;
                entity = mike.bind(zulu)(entity, tango);
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['mergeEmbedsOnURL'] = tango;
    tango = function(argFoo) { // Original name: isEmbedInline
        _fun56059: for(var _fun56059_ip = 0; ; ) switch(_fun56059_ip) {
 0:
            zulu = argFoo;
            entity = zulu.image;
            mike = zulu.video;
            golf = zulu.type;
            oscar = zulu.author;
            report = zulu.rawTitle;
            tango = null;
            entity = tango != entity;
            if(entity) { _fun56059_ip = 45; continue _fun56059 }
 41:
            entity = tango != mike;
 45:
            if(!entity) { _fun56059_ip = 102; continue _fun56059 }
 48:
            mike = _closure1_slot4;
            mike = mike.GIFV;
            mike = golf === mike;
            if(mike) { _fun56059_ip = 99; continue _fun56059 }
 68:
            zulu = _closure1_slot4;
            zulu = zulu.RICH;
            zulu = golf !== zulu;
            if(!zulu) { _fun56059_ip = 89; continue _fun56059 }
 85:
            zulu = tango == oscar;
 89:
            if(!zulu) { _fun56059_ip = 96; continue _fun56059 }
 92:
            zulu = tango == report;
 96:
            mike = zulu;
 99:
            entity = mike;
 102:
            return entity;
        }
    };
    zulu['isEmbedInline'] = tango;
    tango = function(argFoo) { // Original name: isServerShopArticleEmbed
        _fun56060: for(var _fun56060_ip = 0; ; ) switch(_fun56060_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            entity = _closure1_slot4;
            entity = entity.ARTICLE;
            entity = mike === entity;
            if(!entity) { _fun56060_ip = 39; continue _fun56060 }
 28:
            report = zulu.url;
            mike = null;
            entity = mike != report;
 39:
            if(!entity) { _fun56060_ip = 86; continue _fun56060 }
 42:
            oscar = _closure1_slot11;
            report = oscar.test;
            mike = zulu.url;
            mike = report.bind(oscar)(mike);
            if(mike) { _fun56060_ip = 83; continue _fun56060 }
 64:
            report = _closure1_slot10;
            tango = report.test;
            zulu = zulu.url;
            mike = tango.bind(report)(zulu);
 83:
            entity = mike;
 86:
            return entity;
        }
    };
    zulu['isServerShopArticleEmbed'] = tango;
    tango = function(argFoo) { // Original name: isCollectiblesShopArticleEmbed
        _fun56061: for(var _fun56061_ip = 0; ; ) switch(_fun56061_ip) {
 0:
            mike = argFoo;
            tango = mike.type;
            entity = _closure1_slot4;
            entity = entity.ARTICLE;
            entity = tango === entity;
            if(!entity) { _fun56061_ip = 39; continue _fun56061 }
 28:
            report = mike.url;
            tango = null;
            entity = tango != report;
 39:
            if(!entity) { _fun56061_ip = 61; continue _fun56061 }
 42:
            tango = _closure1_slot12;
            zulu = tango.test;
            mike = mike.url;
            entity = zulu.bind(tango)(mike);
 61:
            return entity;
        }
    };
    zulu['isCollectiblesShopArticleEmbed'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getMaxEmbedMediaSize
        _fun56062: for(var _fun56062_ip = 0; ; ) switch(_fun56062_ip) {
 0:
            tango = argBar;
            zulu = argBaz;
            mike = null;
            if(!(mike != tango)) { _fun56062_ip = 16; continue _fun56062 }
 12:
            if(!(mike == zulu)) { _fun56062_ip = 81; continue _fun56062 }
 16:
            entity = argFoo;
            entity = entity.provider;
            report = mike == entity;
            mike = undefined;
            if(report) { _fun56062_ip = 39; continue _fun56062 }
 34:
            mike = entity.name;
 39:
            entity = 'TikTok';
            if(!(entity !== mike)) { _fun56062_ip = 65; continue _fun56062 }
 49:
            entity = {'maxMediaWidth': 400, 'maxMediaHeight': 300};
            _fun56062_ip = 79; continue _fun56062;
 65:
            entity = {'maxMediaWidth': 400, 'maxMediaHeight': 450};
 79:
            _fun56062_ip = 96; continue _fun56062;
 81:
            mike = {};
            mike['maxMediaWidth'] = tango;
            mike['maxMediaHeight'] = zulu;
            entity = mike;
 96:
            return entity;
        }
    };
    zulu['getMaxEmbedMediaSize'] = tango;
    tango = function(argFoo, argBar) { // Original name: canEmbedLinks
        _fun56063: for(var _fun56063_ip = 0; ; ) switch(_fun56063_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            entity = zulu.isPrivate;
            entity = entity.bind(zulu)();
            if(entity) { _fun56063_ip = 46; continue _fun56063 }
 19:
            mike = tango.can;
            entity = _closure1_slot5;
            entity = entity.EMBED_LINKS;
            entity = mike.bind(tango)(entity, zulu);
            _fun56063_ip = 59; continue _fun56063;
 46:
            mike = zulu.isManaged;
            mike = mike.bind(zulu)();
            entity = !mike;
 59:
            return entity;
        }
    };
    zulu['canEmbedLinks'] = tango;
    mike = function(argFoo) { // Original name: shouldStripEmbeds
        _fun56064: for(var _fun56064_ip = 0; ; ) switch(_fun56064_ip) {
 0:
            mike = argFoo;
            zulu = mike.content;
            entity = '';
            entity = entity !== zulu;
            if(entity) { _fun56064_ip = 43; continue _fun56064 }
 19:
            tango = mike.messageSnapshots;
            zulu = tango.some;
            mike = function(argFoo) {
                _fun56065: for(var _fun56065_ip = 0; ; ) switch(_fun56065_ip) {
 0:
                    mike = argFoo;
                    entity = mike.message;
                    zulu = entity.content;
                    entity = '';
                    entity = entity !== zulu;
                    if(entity) { _fun56065_ip = 46; continue _fun56065 }
 24:
                    mike = mike.message;
                    mike = mike.attachments;
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 46:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 43:
            return entity;
        }
    };
    zulu['shouldStripEmbeds'] = mike;
    return entity;
})();