// app/modules/search_v2/native/SearchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: getEmbedImage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.image;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 21; continue _fun00001 }
 15:
            entity = michal.thumbnail;
 21:
            if(!(zuuluu == entity)) { _fun00002_ip = 31; continue _fun00001 }
 25:
            entity = michal.video;
 31:
            return entity;
        }
    };
    var _closure1_slot10 = oscard;
    report = function(argFoo) { // Original name: getSearchContextId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            tangon = _closure1_slot9;
            tangon = tangon.GUILD;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 99; continue _fun00003 }
 25:
            tangon = _closure1_slot9;
            tangon = tangon.GUILD_CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 92; continue _fun00003 }
 39:
            tangon = _closure1_slot9;
            tangon = tangon.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 92; continue _fun00003 }
 53:
            tangon = _closure1_slot9;
            tangon = tangon.THREAD;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 92; continue _fun00003 }
 67:
            michal = _closure1_slot9;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00004_ip = 85; continue _fun00003 }
 81:
            michal = undefined;
            return michal;
 85:
            michal = entity.type;
            return michal;
 92:
            michal = entity.channelId;
            return michal;
 99:
            entity = entity.guildId;
            return entity;
        }
    };
    var _closure1_slot11 = report;
    entity = function(argFoo) { // Original name: getGridItemBorderStyles
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.itemIndex;
            entity = michal.numItems;
            tangon = michal.numColumns;
            michal = global;
            oscard = michal.Math;
            report = oscard.ceil;
            entity = entity / tangon;
            entity = report.bind(oscard)(entity);
            oscard = michal.Math;
            report = oscard.floor;
            michal = zuuluu / tangon;
            oscard = report.bind(oscard)(michal);
            michal = 1;
            report = entity - michal;
            option = 0;
            if(!(option !== zuuluu)) { _fun00006_ip = 262; continue _fun00005 }
 81:
            golfie = tangon - michal;
            if(!(zuuluu !== golfie)) { _fun00006_ip = 214; continue _fun00005 }
 92:
            golfie = zuuluu % tangon;
            if(!(golfie == option)) { _fun00006_ip = 104; continue _fun00005 }
 100:
            if(!(oscard !== report)) { _fun00006_ip = 166; continue _fun00005 }
 104:
            entity = entity * tangon;
            michal = entity - michal;
            report = undefined;
            entity = undefined;
            if(!(zuuluu === michal)) { _fun00006_ip = 164; continue _fun00005 }
 120:
            michal = {};
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomRightRadius'] = zuuluu;
            entity = michal;
 164:
            _fun00006_ip = 212; continue _fun00005;
 166:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomLeftRadius'] = zuuluu;
            entity = michal;
 212:
            _fun00006_ip = 260; continue _fun00005;
 214:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopRightRadius'] = zuuluu;
            entity = michal;
 260:
            _fun00006_ip = 308; continue _fun00005;
 262:
            michal = {};
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopLeftRadius'] = zuuluu;
            entity = michal;
 308:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tangon = function(argFoo) { // Original name: getGridItemSpacingStyles
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.itemIndex;
            report = entity.spacing;
            tangon = entity.numColumns;
            entity = 1;
            michal = tangon - entity;
            michal = report * michal;
            michal = michal / tangon;
            zuuluu = zuuluu % tangon;
            report = 0;
            if(!(report !== zuuluu)) { _fun00008_ip = 78; continue _fun00007 }
 45:
            entity = tangon - entity;
            if(!(entity !== zuuluu)) { _fun00008_ip = 69; continue _fun00007 }
 53:
            entity = {};
            zuuluu = 2;
            zuuluu = michal / zuuluu;
            entity['marginHorizontal'] = zuuluu;
            return entity;
 69:
            entity = {};
            entity['marginStart'] = michal;
            return entity;
 78:
            entity = {};
            entity['marginEnd'] = michal;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.PLATFORM_REGEX_ICON_PAIRS;
    var _closure1_slot5 = offset;
    offset = golfie.SearchMediaTypes;
    var _closure1_slot6 = offset;
    golfie = golfie.SearchFileTypes;
    var _closure1_slot7 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.MessageFlags;
    var _closure1_slot8 = offset;
    golfie = golfie.SearchTypes;
    var _closure1_slot9 = golfie;
    golfie = 15;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/search_v2/native/SearchUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar, argBaz) { // Original name: getAttachmentThumbnailURI
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            entity = report.width;
            oscard = null;
            michal = oscard != entity;
            tangon = undefined;
            entity = undefined;
            if(!michal) { _fun00010_ip = 161; continue _fun00009 }
 24:
            michal = report.width;
            zuuluu = 0;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00010_ip = 161; continue _fun00009 }
 40:
            michal = report.height;
            michal = oscard != michal;
            entity = undefined;
            if(!michal) { _fun00010_ip = 161; continue _fun00009 }
 54:
            michal = report.height;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00010_ip = 161; continue _fun00009 }
 68:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getSrcWithWidthAndHeight;
            michal = {};
            oscard = report.proxy_url;
            michal['src'] = oscard;
            oscard = report.width;
            michal['sourceWidth'] = oscard;
            report = report.height;
            michal['sourceHeight'] = report;
            report = argBar;
            michal['targetWidth'] = report;
            report = argBaz;
            michal['targetHeight'] = report;
            report = 'png';
            michal['format'] = report;
            entity = zuuluu.bind(tangon)(michal);
 161:
            return entity;
        }
    };
    zuuluu['getAttachmentThumbnailURI'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: getEmbedMediaURI
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            golfie = null;
            entity = golfie == report;
            tangon = undefined;
            oscard = undefined;
            if(entity) { _fun00012_ip = 22; continue _fun00011 }
 16:
            oscard = report.proxyURL;
 22:
            if(!(golfie == oscard)) { _fun00012_ip = 43; continue _fun00011 }
 26:
            michal = golfie == report;
            entity = undefined;
            if(michal) { _fun00012_ip = 40; continue _fun00011 }
 35:
            entity = report.url;
 40:
            oscard = entity;
 43:
            michal = golfie != oscard;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 55:
            michal = golfie != report;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 67:
            michal = report.width;
            michal = golfie != michal;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 84:
            michal = report.width;
            zuuluu = 0;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 100:
            michal = report.height;
            michal = golfie != michal;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 114:
            michal = report.height;
            michal = michal > zuuluu;
            entity = undefined;
            if(!michal) { _fun00012_ip = 215; continue _fun00011 }
 128:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 4;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getSrcWithWidthAndHeight;
            michal = {};
            michal['src'] = oscard;
            oscard = report.width;
            michal['sourceWidth'] = oscard;
            report = report.height;
            michal['sourceHeight'] = report;
            report = argBar;
            michal['targetWidth'] = report;
            report = argBaz;
            michal['targetHeight'] = report;
            report = 'png';
            michal['format'] = report;
            entity = zuuluu.bind(tangon)(michal);
 215:
            return entity;
        }
    };
    zuuluu['getEmbedMediaURI'] = golfie;
    zuuluu['getEmbedImage'] = oscard;
    oscard = function(argFoo) { // Original name: getMedia
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            michal = 0;
            var _closure2_slot2 = michal;
            golfie = report.attachments;
            michal = null;
            if(!(michal != golfie)) { _fun00014_ip = 52; continue _fun00013 }
 35:
            oscard = golfie.forEach;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    entity = tangon.width;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00016_ip = 28; continue _fun00015 }
 17:
                    report = tangon.width;
                    michal = 0;
                    entity = report > michal;
 28:
                    if(!entity) { _fun00016_ip = 40; continue _fun00015 }
 31:
                    michal = tangon.height;
                    entity = zuuluu != michal;
 40:
                    if(!entity) { _fun00016_ip = 54; continue _fun00015 }
 43:
                    zuuluu = tangon.height;
                    michal = 0;
                    entity = zuuluu > michal;
 54:
                    if(!entity) { _fun00016_ip = 140; continue _fun00015 }
 57:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    entity = {};
                    oscard = _closure1_slot6;
                    oscard = oscard.ATTACHMENT;
                    entity['type'] = oscard;
                    oscard = _closure2_slot0;
                    golfie = oscard.id;
                    entity['messageId'] = golfie;
                    golfie = oscard.channel_id;
                    entity['channelId'] = golfie;
                    oscard = oscard.author;
                    entity['author'] = oscard;
                    report = _closure2_slot2;
                    entity['mediaIndex'] = report;
                    entity['attachment'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 140:
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(zuuluu);
 52:
            oscard = report.embeds;
            if(!(michal != oscard)) { _fun00014_ip = 79; continue _fun00013 }
 62:
            zuuluu = oscard.forEach;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    michal = _closure1_slot10;
                    entity = undefined;
                    zuuluu = michal.bind(entity)(report);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 103; continue _fun00017 }
 23:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.EMBED;
                    michal['type'] = golfie;
                    golfie = _closure2_slot0;
                    option = golfie.id;
                    michal['messageId'] = option;
                    option = golfie.channel_id;
                    michal['channelId'] = option;
                    golfie = golfie.author;
                    michal['author'] = golfie;
                    oscard = _closure2_slot2;
                    michal['mediaIndex'] = oscard;
                    michal['embed'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 103:
                    michal = _closure2_slot2;
                    michal = michal + 1;
                    _closure2_slot2 = michal;
                    return entity;
                }
            };
            michal = zuuluu.bind(oscard)(michal);
 79:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            option = golfie.bind(michal)(zuuluu);
            golfie = option.hasFlag;
            zuuluu = report.flags;
            michal = _closure1_slot8;
            michal = michal.IS_VOICE_MESSAGE;
            michal = golfie.bind(option)(zuuluu, michal);
            if(!michal) { _fun00014_ip = 198; continue _fun00013 }
 134:
            zuuluu = entity.push;
            michal = {};
            oscard = _closure1_slot6;
            oscard = oscard.SOUND;
            michal['type'] = oscard;
            oscard = report.id;
            michal['messageId'] = oscard;
            oscard = report.channel_id;
            michal['channelId'] = oscard;
            report = report.author;
            michal['author'] = report;
            tangon = _closure2_slot2;
            michal['mediaIndex'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 198:
            return entity;
        }
    };
    zuuluu['getMedia'] = oscard;
    oscard = function(argFoo) { // Original name: getFiles
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            tangon = 0;
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            report = 5;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.hasFlag;
            report = zuuluu.flags;
            tangon = _closure1_slot8;
            tangon = tangon.IS_VOICE_MESSAGE;
            tangon = oscard.bind(golfie)(report, tangon);
            var _closure2_slot3 = tangon;
            tangon = zuuluu.attachments;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00020_ip = 108; continue _fun00019 }
 91:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    entity = {};
                    report = _closure2_slot3;
                    oscard = _closure1_slot7;
                    if(report) { _fun00022_ip = 36; continue _fun00021 }
 28:
                    report = oscard.ATTACHMENT;
                    _fun00022_ip = 42; continue _fun00021;
 36:
                    report = oscard.SOUND;
 42:
                    entity['type'] = report;
                    report = _closure2_slot0;
                    oscard = report.id;
                    entity['messageId'] = oscard;
                    oscard = report.channel_id;
                    entity['channelId'] = oscard;
                    report = report.author;
                    entity['author'] = report;
                    report = _closure2_slot2;
                    entity['mediaIndex'] = report;
                    report = argFoo;
                    entity['attachment'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 108:
            return entity;
        }
    };
    zuuluu['getFiles'] = oscard;
    oscard = function(argFoo) { // Original name: getLinks
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            report = oscard.embeds;
            tangon = null;
            if(!(tangon != report)) { _fun00024_ip = 46; continue _fun00023 }
 29:
            zuuluu = report.forEach;
            michal = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    report = argFoo;
                    michal = _closure1_slot10;
                    entity = undefined;
                    tangon = michal.bind(entity)(report);
                    michal = report.url;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00026_ip = 35; continue _fun00025 }
 31:
                    michal = zuuluu != tangon;
 35:
                    if(!michal) { _fun00026_ip = 103; continue _fun00025 }
 38:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    michal = {};
                    oscard = _closure2_slot0;
                    golfie = oscard.id;
                    michal['messageId'] = golfie;
                    golfie = oscard.channel_id;
                    michal['channelId'] = golfie;
                    oscard = oscard.author;
                    michal['author'] = oscard;
                    oscard = argBar;
                    michal['mediaIndex'] = oscard;
                    michal['embed'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 103:
                    return entity;
                }
            };
            michal = zuuluu.bind(report)(michal);
 46:
            michal = entity.length;
            report = 0;
            if(!(report === michal)) { _fun00024_ip = 108; continue _fun00023 }
 57:
            zuuluu = entity.push;
            michal = {};
            golfie = oscard.id;
            michal['messageId'] = golfie;
            golfie = oscard.channel_id;
            michal['channelId'] = golfie;
            oscard = oscard.author;
            michal['author'] = oscard;
            michal['mediaIndex'] = report;
            michal['embed'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 108:
            return entity;
        }
    };
    zuuluu['getLinks'] = oscard;
    zuuluu['getSearchContextId'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: getSearchTabFetchId
        zuuluu = _closure1_slot11;
        michal = undefined;
        entity = argFoo;
        yankee = zuuluu.bind(michal)(entity);
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        romeon = '';
        zuuluu = '-';
        verify = argBar;
        golfie = argBaz;
        offset = zuuluu;
        option = zuuluu;
        entity = romeon[report](yankee, offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['getSearchTabFetchId'] = report;
    report = function(argFoo) { // Original name: getBackwardCompatibilitySearchId
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            tangon = _closure1_slot9;
            tangon = tangon.GUILD;
            if(!(tangon !== zuuluu)) { _fun00028_ip = 99; continue _fun00027 }
 25:
            tangon = _closure1_slot9;
            tangon = tangon.GUILD_CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00028_ip = 99; continue _fun00027 }
 39:
            tangon = _closure1_slot9;
            tangon = tangon.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00028_ip = 92; continue _fun00027 }
 53:
            tangon = _closure1_slot9;
            tangon = tangon.THREAD;
            if(!(tangon !== zuuluu)) { _fun00028_ip = 92; continue _fun00027 }
 67:
            michal = _closure1_slot9;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00028_ip = 85; continue _fun00027 }
 81:
            michal = undefined;
            return michal;
 85:
            michal = entity.type;
            return michal;
 92:
            michal = entity.channelId;
            return michal;
 99:
            entity = entity.guildId;
            return entity;
        }
    };
    zuuluu['getBackwardCompatibilitySearchId'] = report;
    report = function(argFoo) { // Original name: getChannelActiveAgoTimestamp
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 6;
            tangon = golfie[michal];
            oscard = undefined;
            tangon = zuuluu.bind(oscard)(tangon);
            report = tangon.bind(oscard)();
            tangon = report.diff;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = argFoo;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = 's';
            report = tangon.bind(report)(zuuluu, michal);
            michal = 31536000;
            if(!(!(report > michal))) { _fun00030_ip = 610; continue _fun00029 }
 75:
            zuuluu = 2592000;
            if(!(!(report > zuuluu))) { _fun00030_ip = 522; continue _fun00029 }
 88:
            tangon = 172800;
            if(!(!(report > tangon))) { _fun00030_ip = 428; continue _fun00029 }
 101:
            tangon = 86400;
            if(!(!(report > tangon))) { _fun00030_ip = 369; continue _fun00029 }
 114:
            tangon = 3600;
            if(!(!(report > tangon))) { _fun00030_ip = 281; continue _fun00029 }
 127:
            golfie = 60;
            if(!(!(report > golfie))) { _fun00030_ip = 193; continue _fun00029 }
 134:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 7;
            verify = romeon[option];
            verify = yankee.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(oscard)(option);
            option = option.t;
            option = option.5LdpkZ;
            option = verify.bind(offset)(option);
            return option;
 193:
            option = global;
            verify = option.Math;
            option = verify.round;
            golfie = report / golfie;
            yankee = option.bind(verify)(golfie);
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 7;
            verify = romeon[golfie];
            verify = option.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            golfie = romeon[golfie];
            golfie = option.bind(oscard)(golfie);
            golfie = golfie.t;
            option = golfie.CbRfws;
            golfie = {};
            golfie['count'] = yankee;
            golfie = verify.bind(offset)(option, golfie);
            return golfie;
 281:
            golfie = global;
            option = golfie.Math;
            golfie = option.round;
            tangon = report / tangon;
            offset = golfie.bind(option)(tangon);
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 7;
            option = yankee[tangon];
            option = golfie.bind(oscard)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            tangon = yankee[tangon];
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.t;
            golfie = tangon.WJBWPz;
            tangon = {};
            tangon['count'] = offset;
            tangon = option.bind(verify)(golfie, tangon);
            return tangon;
 369:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 7;
            golfie = offset[tangon];
            golfie = verify.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.string;
            tangon = offset[tangon];
            tangon = verify.bind(oscard)(tangon);
            tangon = tangon.t;
            tangon = tangon.uNkIhY;
            tangon = golfie.bind(option)(tangon);
            return tangon;
 428:
            tangon = global;
            option = tangon.Math;
            golfie = option.round;
            tangon = 86400;
            tangon = report / tangon;
            offset = golfie.bind(option)(tangon);
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 7;
            option = yankee[tangon];
            option = golfie.bind(oscard)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            tangon = yankee[tangon];
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.t;
            golfie = tangon.HNgi9/;
            tangon = {};
            tangon['count'] = offset;
            tangon = option.bind(verify)(golfie, tangon);
            return tangon;
 522:
            tangon = global;
            golfie = tangon.Math;
            tangon = golfie.round;
            zuuluu = report / zuuluu;
            verify = tangon.bind(golfie)(zuuluu);
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 7;
            golfie = offset[zuuluu];
            golfie = tangon.bind(oscard)(golfie);
            option = golfie.intl;
            golfie = option.formatToPlainString;
            zuuluu = offset[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.g2uHTE;
            zuuluu = {};
            zuuluu['count'] = verify;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            return zuuluu;
 610:
            zuuluu = global;
            tangon = zuuluu.Math;
            zuuluu = tangon.round;
            michal = report / michal;
            report = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 7;
            zuuluu = golfie[entity];
            zuuluu = michal.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = michal.bind(oscard)(entity);
            entity = entity.t;
            michal = entity.7th+MT;
            entity = {};
            entity['count'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['getChannelActiveAgoTimestamp'] = report;
    report = function(argFoo) { // Original name: performKeyboardAwareNavigation
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.keyboardOpen;
            if(!zuuluu) { _fun00032_ip = 60; continue _fun00031 }
 25:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 8;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.isIOS;
            zuuluu = zuuluu.bind(oscard)();
            if(zuuluu) { _fun00032_ip = 68; continue _fun00031 }
 60:
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)();
            _fun00032_ip = 122; continue _fun00031;
 68:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.dismissGlobalKeyboard;
            michal = michal.bind(zuuluu)();
            michal = global;
            zuuluu = michal.setTimeout;
            michal = function() {
                michal = _closure2_slot0;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            entity = 100;
            entity = zuuluu.bind(tangon)(michal, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['performKeyboardAwareNavigation'] = report;
    report = function(argFoo) { // Original name: delayUntilNavigationComplete
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        tangon = entity.setTimeout;
        entity = undefined;
        zuuluu = function() {
            michal = _closure2_slot0;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        michal = 200;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['delayUntilNavigationComplete'] = report;
    zuuluu['getGridItemSpacingStyles'] = tangon;
    tangon = function(argFoo) { // Original name: getMediaGridItemStyles
        entity = argFoo;
        golfie = entity.itemIndex;
        tangon = entity.numItems;
        report = entity.numColumns;
        oscard = entity.spacing;
        entity = {};
        option = _closure1_slot12;
        zuuluu = {};
        zuuluu['itemIndex'] = golfie;
        zuuluu['numItems'] = tangon;
        zuuluu['numColumns'] = report;
        tangon = undefined;
        offset = option.bind(tangon)(zuuluu);
        yankee = entity;
        zuuluu = copyDataProperties(yankee, offset);
        zuuluu = _closure1_slot13;
        michal = {};
        michal['itemIndex'] = golfie;
        michal['spacing'] = oscard;
        michal['numColumns'] = report;
        offset = zuuluu.bind(tangon)(michal);
        yankee = entity;
        michal = copyDataProperties(yankee, offset);
        return entity;
    };
    zuuluu['getMediaGridItemStyles'] = tangon;
    tangon = function(argFoo) { // Original name: getUrlIcon
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            golfie = argFoo;
            oscard = null;
            if(!(oscard != golfie)) { _fun00034_ip = 241; continue _fun00033 }
 12:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            report = 12;
            michal = michal[report];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.safeParseWithQuery;
            michal = michal.bind(tangon)(golfie);
            if(!(oscard != michal)) { _fun00034_ip = 213; continue _fun00033 }
 55:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.isDiscordUrl;
            michal = michal.bind(tangon)(golfie);
            if(michal) { _fun00034_ip = 185; continue _fun00033 }
 86:
            michal = _closure1_slot5;
            michal = michal.length;
            report = 0;
            michal = report < michal;
            if(!michal) { _fun00034_ip = 155; continue _fun00033 }
 104:
            michal = _closure1_slot5;
            michal = michal[report];
            option = michal.REGEX;
            michal = michal.Icon;
            tangon = option.exec;
            tangon = tangon.bind(option)(golfie);
            if(!(oscard == tangon)) { _fun00034_ip = 183; continue _fun00033 }
 139:
            report = report + 1;
            tangon = _closure1_slot5;
            tangon = tangon.length;
            if(report < tangon) { _fun00034_ip = 104; continue _fun00033 }
 155:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 11;
            tangon = oscard[tangon];
            tangon = report.bind(zuuluu)(tangon);
            tangon = tangon.LinkIcon;
            return tangon;
 183:
            return michal;
 185:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 13;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ClydeIcon;
            return michal;
 213:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.LinkIcon;
            return entity;
 241:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.LinkIcon;
            return entity;
        }
    };
    zuuluu['getUrlIcon'] = tangon;
    tangon = function(argFoo) { // Original name: getIndexingErrorText
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot9;
            michal = michal.CHANNEL;
            if(!(michal !== zuuluu)) { _fun00036_ip = 210; continue _fun00035 }
 28:
            michal = _closure1_slot9;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00036_ip = 149; continue _fun00035 }
 42:
            michal = _closure1_slot9;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00036_ip = 88; continue _fun00035 }
 56:
            michal = _closure1_slot9;
            michal = michal.GUILD;
            if(!(michal !== zuuluu)) { _fun00036_ip = 88; continue _fun00035 }
 70:
            michal = _closure1_slot9;
            michal = michal.THREAD;
            if(!(michal !== zuuluu)) { _fun00036_ip = 88; continue _fun00035 }
 84:
            michal = undefined;
            return michal;
 88:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.AXPbZm;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 149:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Br0xJC;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 210:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 7;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.Q0JJjo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getIndexingErrorText'] = tangon;
    tangon = function(argFoo) { // Original name: toSearchBarTag
        michal = argFoo;
        entity = {};
        zuuluu = michal.text;
        entity['id'] = zuuluu;
        michal = michal.text;
        entity['text'] = michal;
        return entity;
    };
    zuuluu['toSearchBarTag'] = tangon;
    tangon = function(argFoo) { // Original name: isNonEmptyAutocompleteGroup
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            if(!entity) { _fun00038_ip = 22; continue _fun00037 }
 12:
            zuuluu = michal.results;
            entity = tangon != zuuluu;
 22:
            if(!entity) { _fun00038_ip = 42; continue _fun00037 }
 25:
            michal = michal.results;
            zuuluu = michal.length;
            michal = 0;
            entity = zuuluu > michal;
 42:
            return entity;
        }
    };
    zuuluu['isNonEmptyAutocompleteGroup'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: navigateToSearch
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            report = argFoo;
            michal = argBar;
            golfie = argBaz;
            option = _closure1_slot1;
            entity = _closure1_slot2;
            oscard = 14;
            tangon = entity[oscard];
            entity = undefined;
            option = option.bind(entity)(tangon);
            tangon = option.openSearchScreen;
            tangon = tangon.bind(option)(michal);
            tangon = null;
            tangon = tangon != golfie;
            if(!tangon) { _fun00040_ip = 60; continue _fun00039 }
 54:
            tangon = golfie.prefetch;
 60:
            if(!tangon) { _fun00040_ip = 91; continue _fun00039 }
 63:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.fetchInitialMessages;
            zuuluu = zuuluu.bind(tangon)(michal);
 91:
            tangon = report.navigate;
            zuuluu = {};
            zuuluu['searchContext'] = michal;
            michal = 'search';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['navigateToSearch'] = tangon;
    michal = function(argFoo) { // Original name: getGuildIdFromSearchContext
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            tangon = entity.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GUILD_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00042_ip = 106; continue _fun00041 }
 25:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00042_ip = 106; continue _fun00041 }
 39:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00042_ip = 57; continue _fun00041 }
 53:
            zuuluu = null;
            return zuuluu;
 57:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            michal = entity.channelId;
            tangon = zuuluu.bind(tangon)(michal);
            michal = null;
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00042_ip = 92; continue _fun00041 }
 87:
            zuuluu = tangon.guild_id;
 92:
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00042_ip = 104; continue _fun00041 }
 101:
            michal = zuuluu;
 104:
            return michal;
 106:
            entity = entity.guildId;
            return entity;
        }
    };
    zuuluu['getGuildIdFromSearchContext'] = michal;
    return entity;
})();