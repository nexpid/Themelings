// app/modules/search_v2/native/SearchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = function(argFoo) { // Original name: getEmbedImage
        _fun112399: for(var _fun112399_ip = 0; ; ) switch(_fun112399_ip) {
 0:
            mike = argFoo;
            entity = mike.image;
            zulu = null;
            if(!(zulu == entity)) { _fun112399_ip = 21; continue _fun112399 }
 15:
            entity = mike.thumbnail;
 21:
            if(!(zulu == entity)) { _fun112399_ip = 31; continue _fun112399 }
 25:
            entity = mike.video;
 31:
            return entity;
        }
    };
    var _closure1_slot10 = oscar;
    report = function(argFoo) { // Original name: getSearchContextId
        _fun112400: for(var _fun112400_ip = 0; ; ) switch(_fun112400_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            tango = _closure1_slot9;
            tango = tango.GUILD;
            if(!(tango !== zulu)) { _fun112400_ip = 99; continue _fun112400 }
 25:
            tango = _closure1_slot9;
            tango = tango.GUILD_CHANNEL;
            if(!(tango !== zulu)) { _fun112400_ip = 92; continue _fun112400 }
 39:
            tango = _closure1_slot9;
            tango = tango.CHANNEL;
            if(!(tango !== zulu)) { _fun112400_ip = 92; continue _fun112400 }
 53:
            tango = _closure1_slot9;
            tango = tango.THREAD;
            if(!(tango !== zulu)) { _fun112400_ip = 92; continue _fun112400 }
 67:
            mike = _closure1_slot9;
            mike = mike.DMS;
            if(!(mike !== zulu)) { _fun112400_ip = 85; continue _fun112400 }
 81:
            mike = undefined;
            return mike;
 85:
            mike = entity.type;
            return mike;
 92:
            mike = entity.channelId;
            return mike;
 99:
            entity = entity.guildId;
            return entity;
        }
    };
    var _closure1_slot11 = report;
    entity = function(argFoo) { // Original name: getGridItemBorderStyles
        _fun112401: for(var _fun112401_ip = 0; ; ) switch(_fun112401_ip) {
 0:
            mike = argFoo;
            zulu = mike.itemIndex;
            entity = mike.numItems;
            tango = mike.numColumns;
            mike = global;
            oscar = mike.Math;
            report = oscar.ceil;
            entity = entity / tango;
            entity = report.bind(oscar)(entity);
            oscar = mike.Math;
            report = oscar.floor;
            mike = zulu / tango;
            oscar = report.bind(oscar)(mike);
            mike = 1;
            report = entity - mike;
            options = 0;
            if(!(options !== zulu)) { _fun112401_ip = 262; continue _fun112401 }
 81:
            golf = tango - mike;
            if(!(zulu !== golf)) { _fun112401_ip = 214; continue _fun112401 }
 92:
            golf = zulu % tango;
            if(!(golf == options)) { _fun112401_ip = 104; continue _fun112401 }
 100:
            if(!(oscar !== report)) { _fun112401_ip = 166; continue _fun112401 }
 104:
            entity = entity * tango;
            mike = entity - mike;
            report = undefined;
            entity = undefined;
            if(!(zulu === mike)) { _fun112401_ip = 164; continue _fun112401 }
 120:
            mike = {};
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 10;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderBottomRightRadius'] = zulu;
            entity = mike;
 164:
            _fun112401_ip = 212; continue _fun112401;
 166:
            mike = {};
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderBottomLeftRadius'] = zulu;
            entity = mike;
 212:
            _fun112401_ip = 260; continue _fun112401;
 214:
            mike = {};
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderTopRightRadius'] = zulu;
            entity = mike;
 260:
            _fun112401_ip = 308; continue _fun112401;
 262:
            mike = {};
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderTopLeftRadius'] = zulu;
            entity = mike;
 308:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo) { // Original name: getGridItemSpacingStyles
        _fun112402: for(var _fun112402_ip = 0; ; ) switch(_fun112402_ip) {
 0:
            entity = argFoo;
            zulu = entity.itemIndex;
            report = entity.spacing;
            tango = entity.numColumns;
            entity = 1;
            mike = tango - entity;
            mike = report * mike;
            mike = mike / tango;
            zulu = zulu % tango;
            report = 0;
            if(!(report !== zulu)) { _fun112402_ip = 78; continue _fun112402 }
 45:
            entity = tango - entity;
            if(!(entity !== zulu)) { _fun112402_ip = 69; continue _fun112402 }
 53:
            entity = {};
            zulu = 2;
            zulu = mike / zulu;
            entity['marginHorizontal'] = zulu;
            return entity;
 69:
            entity = {};
            entity['marginStart'] = mike;
            return entity;
 78:
            entity = {};
            entity['marginEnd'] = mike;
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot5 = offset;
    offset = golf.SearchMediaTypes;
    var _closure1_slot6 = offset;
    golf = golf.SearchFileTypes;
    var _closure1_slot7 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.MessageFlags;
    var _closure1_slot8 = offset;
    golf = golf.SearchTypes;
    var _closure1_slot9 = golf;
    golf = 15;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/search_v2/native/SearchUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar, argBaz) { // Original name: getAttachmentThumbnailURI
        _fun112403: for(var _fun112403_ip = 0; ; ) switch(_fun112403_ip) {
 0:
            report = argFoo;
            entity = report.width;
            oscar = null;
            mike = oscar != entity;
            tango = undefined;
            entity = undefined;
            if(!mike) { _fun112403_ip = 161; continue _fun112403 }
 24:
            mike = report.width;
            zulu = 0;
            mike = mike > zulu;
            entity = undefined;
            if(!mike) { _fun112403_ip = 161; continue _fun112403 }
 40:
            mike = report.height;
            mike = oscar != mike;
            entity = undefined;
            if(!mike) { _fun112403_ip = 161; continue _fun112403 }
 54:
            mike = report.height;
            mike = mike > zulu;
            entity = undefined;
            if(!mike) { _fun112403_ip = 161; continue _fun112403 }
 68:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getSrcWithWidthAndHeight;
            mike = {};
            oscar = report.proxy_url;
            mike['src'] = oscar;
            oscar = report.width;
            mike['sourceWidth'] = oscar;
            report = report.height;
            mike['sourceHeight'] = report;
            report = argBar;
            mike['targetWidth'] = report;
            report = argBaz;
            mike['targetHeight'] = report;
            report = 'png';
            mike['format'] = report;
            entity = zulu.bind(tango)(mike);
 161:
            return entity;
        }
    };
    zulu['getAttachmentThumbnailURI'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: getEmbedMediaURI
        _fun112404: for(var _fun112404_ip = 0; ; ) switch(_fun112404_ip) {
 0:
            report = argFoo;
            golf = null;
            entity = golf == report;
            tango = undefined;
            oscar = undefined;
            if(entity) { _fun112404_ip = 22; continue _fun112404 }
 16:
            oscar = report.proxyURL;
 22:
            if(!(golf == oscar)) { _fun112404_ip = 43; continue _fun112404 }
 26:
            mike = golf == report;
            entity = undefined;
            if(mike) { _fun112404_ip = 40; continue _fun112404 }
 35:
            entity = report.url;
 40:
            oscar = entity;
 43:
            mike = golf != oscar;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 55:
            mike = golf != report;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 67:
            mike = report.width;
            mike = golf != mike;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 84:
            mike = report.width;
            zulu = 0;
            mike = mike > zulu;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 100:
            mike = report.height;
            mike = golf != mike;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 114:
            mike = report.height;
            mike = mike > zulu;
            entity = undefined;
            if(!mike) { _fun112404_ip = 215; continue _fun112404 }
 128:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 4;
            mike = golf[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getSrcWithWidthAndHeight;
            mike = {};
            mike['src'] = oscar;
            oscar = report.width;
            mike['sourceWidth'] = oscar;
            report = report.height;
            mike['sourceHeight'] = report;
            report = argBar;
            mike['targetWidth'] = report;
            report = argBaz;
            mike['targetHeight'] = report;
            report = 'png';
            mike['format'] = report;
            entity = zulu.bind(tango)(mike);
 215:
            return entity;
        }
    };
    zulu['getEmbedMediaURI'] = golf;
    zulu['getEmbedImage'] = oscar;
    oscar = function(argFoo) { // Original name: getMedia
        _fun112405: for(var _fun112405_ip = 0; ; ) switch(_fun112405_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            mike = 0;
            var _closure2_slot2 = mike;
            golf = report.attachments;
            mike = null;
            if(!(mike != golf)) { _fun112405_ip = 52; continue _fun112405 }
 35:
            oscar = golf.forEach;
            zulu = function(argFoo) {
                _fun112406: for(var _fun112406_ip = 0; ; ) switch(_fun112406_ip) {
 0:
                    tango = argFoo;
                    entity = tango.width;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun112406_ip = 28; continue _fun112406 }
 17:
                    report = tango.width;
                    mike = 0;
                    entity = report > mike;
 28:
                    if(!entity) { _fun112406_ip = 40; continue _fun112406 }
 31:
                    mike = tango.height;
                    entity = zulu != mike;
 40:
                    if(!entity) { _fun112406_ip = 54; continue _fun112406 }
 43:
                    zulu = tango.height;
                    mike = 0;
                    entity = zulu > mike;
 54:
                    if(!entity) { _fun112406_ip = 140; continue _fun112406 }
 57:
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    entity = {};
                    oscar = _closure1_slot6;
                    oscar = oscar.ATTACHMENT;
                    entity['type'] = oscar;
                    oscar = _closure2_slot0;
                    golf = oscar.id;
                    entity['messageId'] = golf;
                    golf = oscar.channel_id;
                    entity['channelId'] = golf;
                    oscar = oscar.author;
                    entity['author'] = oscar;
                    report = _closure2_slot2;
                    entity['mediaIndex'] = report;
                    entity['attachment'] = tango;
                    entity = mike.bind(zulu)(entity);
 140:
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(zulu);
 52:
            oscar = report.embeds;
            if(!(mike != oscar)) { _fun112405_ip = 79; continue _fun112405 }
 62:
            zulu = oscar.forEach;
            mike = function(argFoo) {
                _fun112407: for(var _fun112407_ip = 0; ; ) switch(_fun112407_ip) {
 0:
                    report = argFoo;
                    mike = _closure1_slot10;
                    entity = undefined;
                    zulu = mike.bind(entity)(report);
                    mike = null;
                    if(!(mike != zulu)) { _fun112407_ip = 103; continue _fun112407 }
 23:
                    tango = _closure2_slot1;
                    zulu = tango.push;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.EMBED;
                    mike['type'] = golf;
                    golf = _closure2_slot0;
                    options = golf.id;
                    mike['messageId'] = options;
                    options = golf.channel_id;
                    mike['channelId'] = options;
                    golf = golf.author;
                    mike['author'] = golf;
                    oscar = _closure2_slot2;
                    mike['mediaIndex'] = oscar;
                    mike['embed'] = report;
                    mike = zulu.bind(tango)(mike);
 103:
                    mike = _closure2_slot2;
                    mike = mike + 1;
                    _closure2_slot2 = mike;
                    return entity;
                }
            };
            mike = zulu.bind(oscar)(mike);
 79:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            options = golf.bind(mike)(zulu);
            golf = options.hasFlag;
            zulu = report.flags;
            mike = _closure1_slot8;
            mike = mike.IS_VOICE_MESSAGE;
            mike = golf.bind(options)(zulu, mike);
            if(!mike) { _fun112405_ip = 198; continue _fun112405 }
 134:
            zulu = entity.push;
            mike = {};
            oscar = _closure1_slot6;
            oscar = oscar.SOUND;
            mike['type'] = oscar;
            oscar = report.id;
            mike['messageId'] = oscar;
            oscar = report.channel_id;
            mike['channelId'] = oscar;
            report = report.author;
            mike['author'] = report;
            tango = _closure2_slot2;
            mike['mediaIndex'] = tango;
            mike = zulu.bind(entity)(mike);
 198:
            return entity;
        }
    };
    zulu['getMedia'] = oscar;
    oscar = function(argFoo) { // Original name: getFiles
        _fun112408: for(var _fun112408_ip = 0; ; ) switch(_fun112408_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            oscar = 0;
            var _closure2_slot2 = oscar;
            golf = report.attachments;
            options = null;
            if(!(options != golf)) { _fun112408_ip = 52; continue _fun112408 }
 35:
            tango = golf.forEach;
            mike = function(argFoo) {
                _fun112409: for(var _fun112409_ip = 0; ; ) switch(_fun112409_ip) {
 0:
                    tango = argFoo;
                    entity = tango.width;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun112409_ip = 28; continue _fun112409 }
 17:
                    report = tango.width;
                    mike = 0;
                    entity = report > mike;
 28:
                    if(!entity) { _fun112409_ip = 40; continue _fun112409 }
 31:
                    mike = tango.height;
                    entity = zulu != mike;
 40:
                    if(!entity) { _fun112409_ip = 54; continue _fun112409 }
 43:
                    zulu = tango.height;
                    mike = 0;
                    entity = zulu > mike;
 54:
                    if(!entity) { _fun112409_ip = 140; continue _fun112409 }
 57:
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    entity = {};
                    oscar = _closure1_slot7;
                    oscar = oscar.ATTACHMENT;
                    entity['type'] = oscar;
                    oscar = _closure2_slot0;
                    golf = oscar.id;
                    entity['messageId'] = golf;
                    golf = oscar.channel_id;
                    entity['channelId'] = golf;
                    oscar = oscar.author;
                    entity['author'] = oscar;
                    report = _closure2_slot2;
                    entity['mediaIndex'] = report;
                    entity['attachment'] = tango;
                    entity = mike.bind(zulu)(entity);
 140:
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(golf)(mike);
 52:
            verify = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 5;
            tango = tango[mike];
            mike = undefined;
            offset = verify.bind(mike)(tango);
            verify = offset.hasFlag;
            tango = report.flags;
            mike = _closure1_slot8;
            mike = mike.IS_VOICE_MESSAGE;
            mike = verify.bind(offset)(tango, mike);
            if(!mike) { _fun112408_ip = 117; continue _fun112408 }
 107:
            tango = report.attachments;
            mike = options != tango;
 117:
            if(!mike) { _fun112408_ip = 135; continue _fun112408 }
 120:
            tango = report.attachments;
            tango = tango.length;
            mike = tango > oscar;
 135:
            if(!mike) { _fun112408_ip = 228; continue _fun112408 }
 138:
            tango = entity.push;
            mike = {};
            golf = _closure1_slot7;
            golf = golf.SOUND;
            mike['type'] = golf;
            golf = report.id;
            mike['messageId'] = golf;
            golf = report.channel_id;
            mike['channelId'] = golf;
            golf = report.author;
            mike['author'] = golf;
            golf = _closure2_slot2;
            mike['mediaIndex'] = golf;
            report = report.attachments;
            report = report[oscar];
            mike['attachment'] = report;
            mike = tango.bind(entity)(mike);
            mike = _closure2_slot2;
            mike = mike + 1;
            _closure2_slot2 = mike;
 228:
            return entity;
        }
    };
    zulu['getFiles'] = oscar;
    oscar = function(argFoo) { // Original name: getLinks
        _fun112410: for(var _fun112410_ip = 0; ; ) switch(_fun112410_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            report = oscar.embeds;
            tango = null;
            if(!(tango != report)) { _fun112410_ip = 46; continue _fun112410 }
 29:
            zulu = report.forEach;
            mike = function(argFoo, argBar) {
                _fun112411: for(var _fun112411_ip = 0; ; ) switch(_fun112411_ip) {
 0:
                    report = argFoo;
                    mike = _closure1_slot10;
                    entity = undefined;
                    tango = mike.bind(entity)(report);
                    mike = report.url;
                    zulu = null;
                    mike = zulu != mike;
                    if(!mike) { _fun112411_ip = 35; continue _fun112411 }
 31:
                    mike = zulu != tango;
 35:
                    if(!mike) { _fun112411_ip = 103; continue _fun112411 }
 38:
                    tango = _closure2_slot1;
                    zulu = tango.push;
                    mike = {};
                    oscar = _closure2_slot0;
                    golf = oscar.id;
                    mike['messageId'] = golf;
                    golf = oscar.channel_id;
                    mike['channelId'] = golf;
                    oscar = oscar.author;
                    mike['author'] = oscar;
                    oscar = argBar;
                    mike['mediaIndex'] = oscar;
                    mike['embed'] = report;
                    mike = zulu.bind(tango)(mike);
 103:
                    return entity;
                }
            };
            mike = zulu.bind(report)(mike);
 46:
            mike = entity.length;
            report = 0;
            if(!(report === mike)) { _fun112410_ip = 108; continue _fun112410 }
 57:
            zulu = entity.push;
            mike = {};
            golf = oscar.id;
            mike['messageId'] = golf;
            golf = oscar.channel_id;
            mike['channelId'] = golf;
            oscar = oscar.author;
            mike['author'] = oscar;
            mike['mediaIndex'] = report;
            mike['embed'] = tango;
            mike = zulu.bind(entity)(mike);
 108:
            return entity;
        }
    };
    zulu['getLinks'] = oscar;
    zulu['getSearchContextId'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: getSearchTabFetchId
        zulu = _closure1_slot11;
        mike = undefined;
        entity = argFoo;
        yankee = zulu.bind(mike)(entity);
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        romeo = '';
        zulu = '-';
        verify = argBar;
        golf = argBaz;
        offset = zulu;
        options = zulu;
        entity = romeo[report](yankee, offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['getSearchTabFetchId'] = report;
    report = function(argFoo) { // Original name: getBackwardCompatibilitySearchId
        _fun112413: for(var _fun112413_ip = 0; ; ) switch(_fun112413_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            tango = _closure1_slot9;
            tango = tango.GUILD;
            if(!(tango !== zulu)) { _fun112413_ip = 99; continue _fun112413 }
 25:
            tango = _closure1_slot9;
            tango = tango.GUILD_CHANNEL;
            if(!(tango !== zulu)) { _fun112413_ip = 99; continue _fun112413 }
 39:
            tango = _closure1_slot9;
            tango = tango.CHANNEL;
            if(!(tango !== zulu)) { _fun112413_ip = 92; continue _fun112413 }
 53:
            tango = _closure1_slot9;
            tango = tango.THREAD;
            if(!(tango !== zulu)) { _fun112413_ip = 92; continue _fun112413 }
 67:
            mike = _closure1_slot9;
            mike = mike.DMS;
            if(!(mike !== zulu)) { _fun112413_ip = 85; continue _fun112413 }
 81:
            mike = undefined;
            return mike;
 85:
            mike = entity.type;
            return mike;
 92:
            mike = entity.channelId;
            return mike;
 99:
            entity = entity.guildId;
            return entity;
        }
    };
    zulu['getBackwardCompatibilitySearchId'] = report;
    report = function(argFoo) { // Original name: getChannelActiveAgoTimestamp
        _fun112414: for(var _fun112414_ip = 0; ; ) switch(_fun112414_ip) {
 0:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 6;
            tango = golf[mike];
            oscar = undefined;
            tango = zulu.bind(oscar)(tango);
            report = tango.bind(oscar)();
            tango = report.diff;
            mike = golf[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = argFoo;
            zulu = zulu.bind(oscar)(mike);
            mike = 's';
            report = tango.bind(report)(zulu, mike);
            mike = 31536000;
            if(!(!(report > mike))) { _fun112414_ip = 598; continue _fun112414 }
 75:
            zulu = 2592000;
            if(!(!(report > zulu))) { _fun112414_ip = 512; continue _fun112414 }
 88:
            tango = 172800;
            if(!(!(report > tango))) { _fun112414_ip = 420; continue _fun112414 }
 101:
            tango = 86400;
            if(!(!(report > tango))) { _fun112414_ip = 363; continue _fun112414 }
 114:
            tango = 3600;
            if(!(!(report > tango))) { _fun112414_ip = 277; continue _fun112414 }
 127:
            golf = 60;
            if(!(!(report > golf))) { _fun112414_ip = 191; continue _fun112414 }
 134:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 7;
            verify = romeo[options];
            verify = yankee.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(oscar)(options);
            options = options.t;
            options = options.5LdpkZ;
            options = verify.bind(offset)(options);
            return options;
 191:
            options = global;
            verify = options.Math;
            options = verify.round;
            golf = report / golf;
            yankee = options.bind(verify)(golf);
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 7;
            verify = romeo[golf];
            verify = options.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            golf = romeo[golf];
            golf = options.bind(oscar)(golf);
            golf = golf.t;
            options = golf.CbRfws;
            golf = {};
            golf['count'] = yankee;
            golf = verify.bind(offset)(options, golf);
            return golf;
 277:
            golf = global;
            options = golf.Math;
            golf = options.round;
            tango = report / tango;
            offset = golf.bind(options)(tango);
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 7;
            options = yankee[tango];
            options = golf.bind(oscar)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            tango = yankee[tango];
            tango = golf.bind(oscar)(tango);
            tango = tango.t;
            golf = tango.WJBWPz;
            tango = {};
            tango['count'] = offset;
            tango = options.bind(verify)(golf, tango);
            return tango;
 363:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 7;
            golf = offset[tango];
            golf = verify.bind(oscar)(golf);
            options = golf.intl;
            golf = options.string;
            tango = offset[tango];
            tango = verify.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.uNkIhY;
            tango = golf.bind(options)(tango);
            return tango;
 420:
            tango = global;
            options = tango.Math;
            golf = options.round;
            tango = 86400;
            tango = report / tango;
            offset = golf.bind(options)(tango);
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 7;
            options = yankee[tango];
            options = golf.bind(oscar)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            tango = yankee[tango];
            tango = golf.bind(oscar)(tango);
            tango = tango.t;
            golf = tango.HNgi9/;
            tango = {};
            tango['count'] = offset;
            tango = options.bind(verify)(golf, tango);
            return tango;
 512:
            tango = global;
            golf = tango.Math;
            tango = golf.round;
            zulu = report / zulu;
            verify = tango.bind(golf)(zulu);
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 7;
            golf = offset[zulu];
            golf = tango.bind(oscar)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            zulu = offset[zulu];
            zulu = tango.bind(oscar)(zulu);
            zulu = zulu.t;
            tango = zulu.g2uHTE;
            zulu = {};
            zulu['count'] = verify;
            zulu = golf.bind(options)(tango, zulu);
            return zulu;
 598:
            zulu = global;
            tango = zulu.Math;
            zulu = tango.round;
            mike = report / mike;
            report = zulu.bind(tango)(mike);
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 7;
            zulu = golf[entity];
            zulu = mike.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = mike.bind(oscar)(entity);
            entity = entity.t;
            mike = entity.7th+MT;
            entity = {};
            entity['count'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['getChannelActiveAgoTimestamp'] = report;
    report = function(argFoo) { // Original name: performKeyboardAwareNavigation
        _fun112415: for(var _fun112415_ip = 0; ; ) switch(_fun112415_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot4;
            zulu = zulu.keyboardOpen;
            if(!zulu) { _fun112415_ip = 60; continue _fun112415 }
 25:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 8;
            zulu = tango[zulu];
            tango = undefined;
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.isIOS;
            zulu = zulu.bind(oscar)();
            if(zulu) { _fun112415_ip = 68; continue _fun112415 }
 60:
            zulu = undefined;
            zulu = report.bind(zulu)();
            _fun112415_ip = 122; continue _fun112415;
 68:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.dismissGlobalKeyboard;
            mike = mike.bind(zulu)();
            mike = global;
            zulu = mike.setTimeout;
            mike = function() {
                mike = _closure2_slot0;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            entity = 100;
            entity = zulu.bind(tango)(mike, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    zulu['performKeyboardAwareNavigation'] = report;
    report = function(argFoo) { // Original name: delayUntilNavigationComplete
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        tango = entity.setTimeout;
        entity = undefined;
        zulu = function() {
            mike = _closure2_slot0;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        mike = 200;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['delayUntilNavigationComplete'] = report;
    zulu['getGridItemSpacingStyles'] = tango;
    tango = function(argFoo) { // Original name: getMediaGridItemStyles
        entity = argFoo;
        golf = entity.itemIndex;
        tango = entity.numItems;
        report = entity.numColumns;
        oscar = entity.spacing;
        entity = {};
        options = _closure1_slot12;
        zulu = {};
        zulu['itemIndex'] = golf;
        zulu['numItems'] = tango;
        zulu['numColumns'] = report;
        tango = undefined;
        offset = options.bind(tango)(zulu);
        yankee = entity;
        zulu = copyDataProperties(yankee, offset);
        zulu = _closure1_slot13;
        mike = {};
        mike['itemIndex'] = golf;
        mike['spacing'] = oscar;
        mike['numColumns'] = report;
        offset = zulu.bind(tango)(mike);
        yankee = entity;
        mike = copyDataProperties(yankee, offset);
        return entity;
    };
    zulu['getMediaGridItemStyles'] = tango;
    tango = function(argFoo) { // Original name: getUrlIcon
        _fun112420: for(var _fun112420_ip = 0; ; ) switch(_fun112420_ip) {
 0:
            golf = argFoo;
            oscar = null;
            if(!(oscar != golf)) { _fun112420_ip = 241; continue _fun112420 }
 12:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            report = 12;
            mike = mike[report];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.safeParseWithQuery;
            mike = mike.bind(tango)(golf);
            if(!(oscar != mike)) { _fun112420_ip = 213; continue _fun112420 }
 55:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[report];
            tango = tango.bind(zulu)(mike);
            mike = tango.isDiscordUrl;
            mike = mike.bind(tango)(golf);
            if(mike) { _fun112420_ip = 185; continue _fun112420 }
 86:
            mike = _closure1_slot5;
            mike = mike.length;
            report = 0;
            mike = report < mike;
            if(!mike) { _fun112420_ip = 155; continue _fun112420 }
 104:
            mike = _closure1_slot5;
            mike = mike[report];
            options = mike.REGEX;
            mike = mike.Icon;
            tango = options.exec;
            tango = tango.bind(options)(golf);
            if(!(oscar == tango)) { _fun112420_ip = 183; continue _fun112420 }
 139:
            report = report + 1;
            tango = _closure1_slot5;
            tango = tango.length;
            if(report < tango) { _fun112420_ip = 104; continue _fun112420 }
 155:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 11;
            tango = oscar[tango];
            tango = report.bind(zulu)(tango);
            tango = tango.LinkIcon;
            return tango;
 183:
            return mike;
 185:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 13;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.ClydeIcon;
            return mike;
 213:
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 11;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            entity = entity.LinkIcon;
            return entity;
 241:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.LinkIcon;
            return entity;
        }
    };
    zulu['getUrlIcon'] = tango;
    tango = function(argFoo) { // Original name: getIndexingErrorText
        _fun112421: for(var _fun112421_ip = 0; ; ) switch(_fun112421_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = _closure1_slot9;
            mike = mike.CHANNEL;
            if(!(mike !== zulu)) { _fun112421_ip = 206; continue _fun112421 }
 28:
            mike = _closure1_slot9;
            mike = mike.DMS;
            if(!(mike !== zulu)) { _fun112421_ip = 147; continue _fun112421 }
 42:
            mike = _closure1_slot9;
            mike = mike.GUILD_CHANNEL;
            if(!(mike !== zulu)) { _fun112421_ip = 88; continue _fun112421 }
 56:
            mike = _closure1_slot9;
            mike = mike.GUILD;
            if(!(mike !== zulu)) { _fun112421_ip = 88; continue _fun112421 }
 70:
            mike = _closure1_slot9;
            mike = mike.THREAD;
            if(!(mike !== zulu)) { _fun112421_ip = 88; continue _fun112421 }
 84:
            mike = undefined;
            return mike;
 88:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.AXPbZm;
            mike = zulu.bind(tango)(mike);
            return mike;
 147:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Br0xJC;
            mike = zulu.bind(tango)(mike);
            return mike;
 206:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 7;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.Q0JJjo;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getIndexingErrorText'] = tango;
    tango = function(argFoo) { // Original name: toSearchBarTag
        mike = argFoo;
        entity = {};
        zulu = mike.text;
        entity['id'] = zulu;
        mike = mike.text;
        entity['text'] = mike;
        return entity;
    };
    zulu['toSearchBarTag'] = tango;
    tango = function(argFoo) { // Original name: isNonEmptyAutocompleteGroup
        _fun112423: for(var _fun112423_ip = 0; ; ) switch(_fun112423_ip) {
 0:
            mike = argFoo;
            tango = null;
            entity = tango != mike;
            if(!entity) { _fun112423_ip = 22; continue _fun112423 }
 12:
            zulu = mike.results;
            entity = tango != zulu;
 22:
            if(!entity) { _fun112423_ip = 42; continue _fun112423 }
 25:
            mike = mike.results;
            zulu = mike.length;
            mike = 0;
            entity = zulu > mike;
 42:
            return entity;
        }
    };
    zulu['isNonEmptyAutocompleteGroup'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: navigateToSearch
        _fun112424: for(var _fun112424_ip = 0; ; ) switch(_fun112424_ip) {
 0:
            report = argFoo;
            mike = argBar;
            golf = argBaz;
            options = _closure1_slot1;
            entity = _closure1_slot2;
            oscar = 14;
            tango = entity[oscar];
            entity = undefined;
            options = options.bind(entity)(tango);
            tango = options.openSearchScreen;
            tango = tango.bind(options)(mike);
            tango = null;
            tango = tango != golf;
            if(!tango) { _fun112424_ip = 60; continue _fun112424 }
 54:
            tango = golf.prefetch;
 60:
            if(!tango) { _fun112424_ip = 91; continue _fun112424 }
 63:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            tango = tango.bind(entity)(zulu);
            zulu = tango.fetchInitialMessages;
            zulu = zulu.bind(tango)(mike);
 91:
            tango = report.navigate;
            zulu = {};
            zulu['searchContext'] = mike;
            mike = 'search';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['navigateToSearch'] = tango;
    mike = function(argFoo) { // Original name: getGuildIdFromSearchContext
        _fun112425: for(var _fun112425_ip = 0; ; ) switch(_fun112425_ip) {
 0:
            entity = argFoo;
            tango = entity.type;
            zulu = _closure1_slot9;
            zulu = zulu.GUILD_CHANNEL;
            if(!(zulu !== tango)) { _fun112425_ip = 106; continue _fun112425 }
 25:
            zulu = _closure1_slot9;
            zulu = zulu.GUILD;
            if(!(zulu !== tango)) { _fun112425_ip = 106; continue _fun112425 }
 39:
            zulu = _closure1_slot9;
            zulu = zulu.CHANNEL;
            if(!(zulu !== tango)) { _fun112425_ip = 57; continue _fun112425 }
 53:
            zulu = null;
            return zulu;
 57:
            tango = _closure1_slot3;
            zulu = tango.getChannel;
            mike = entity.channelId;
            tango = zulu.bind(tango)(mike);
            mike = null;
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun112425_ip = 92; continue _fun112425 }
 87:
            zulu = tango.guild_id;
 92:
            tango = mike != zulu;
            mike = null;
            if(!tango) { _fun112425_ip = 104; continue _fun112425 }
 101:
            mike = zulu;
 104:
            return mike;
 106:
            entity = entity.guildId;
            return entity;
        }
    };
    zulu['getGuildIdFromSearchContext'] = mike;
    return entity;
})();