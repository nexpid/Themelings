// app/modules/search_v2/SearchUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getEmbedImage
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
    var _closure1_slot8 = report;
    tangon = function(argFoo) { // Original name: getSearchContextId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            tangon = _closure1_slot7;
            tangon = tangon.GUILD;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 113; continue _fun00003 }
 25:
            tangon = _closure1_slot7;
            tangon = tangon.GUILD_CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 106; continue _fun00003 }
 39:
            tangon = _closure1_slot7;
            tangon = tangon.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 106; continue _fun00003 }
 53:
            tangon = _closure1_slot7;
            tangon = tangon.THREAD;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 106; continue _fun00003 }
 67:
            tangon = _closure1_slot7;
            tangon = tangon.DMS;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 99; continue _fun00003 }
 81:
            michal = _closure1_slot7;
            michal = michal.FAVORITES;
            if(!(michal !== zuuluu)) { _fun00004_ip = 99; continue _fun00003 }
 95:
            michal = undefined;
            return michal;
 99:
            michal = entity.type;
            return michal;
 106:
            michal = entity.channelId;
            return michal;
 113:
            entity = entity.guildId;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.SearchMediaTypes;
    var _closure1_slot4 = verify;
    oscard = oscard.SearchFileTypes;
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.MessageFlags;
    var _closure1_slot6 = verify;
    oscard = oscard.SearchTypes;
    var _closure1_slot7 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/search_v2/SearchUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getEmbedImage'] = report;
    report = function(argFoo) { // Original name: getMedia
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            michal = 0;
            var _closure2_slot2 = michal;
            golfie = report.attachments;
            michal = null;
            if(!(michal != golfie)) { _fun00006_ip = 52; continue _fun00005 }
 35:
            oscard = golfie.forEach;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = tangon.width;
                    zuuluu = null;
                    entity = zuuluu != entity;
                    if(!entity) { _fun00008_ip = 28; continue _fun00007 }
 17:
                    report = tangon.width;
                    michal = 0;
                    entity = report > michal;
 28:
                    if(!entity) { _fun00008_ip = 40; continue _fun00007 }
 31:
                    michal = tangon.height;
                    entity = zuuluu != michal;
 40:
                    if(!entity) { _fun00008_ip = 54; continue _fun00007 }
 43:
                    zuuluu = tangon.height;
                    michal = 0;
                    entity = zuuluu > michal;
 54:
                    if(!entity) { _fun00008_ip = 140; continue _fun00007 }
 57:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    entity = {};
                    oscard = _closure1_slot4;
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
            if(!(michal != oscard)) { _fun00006_ip = 79; continue _fun00005 }
 62:
            zuuluu = oscard.forEach;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    michal = _closure1_slot8;
                    entity = undefined;
                    zuuluu = michal.bind(entity)(report);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 103; continue _fun00009 }
 23:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    michal = {};
                    golfie = _closure1_slot4;
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
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            option = golfie.bind(michal)(zuuluu);
            golfie = option.hasFlag;
            zuuluu = report.flags;
            michal = _closure1_slot6;
            michal = michal.IS_VOICE_MESSAGE;
            michal = golfie.bind(option)(zuuluu, michal);
            if(!michal) { _fun00006_ip = 198; continue _fun00005 }
 134:
            zuuluu = entity.push;
            michal = {};
            oscard = _closure1_slot4;
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
    zuuluu['getMedia'] = report;
    report = function(argFoo) { // Original name: getFiles
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            tangon = 0;
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            report = 3;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.hasFlag;
            report = zuuluu.flags;
            tangon = _closure1_slot6;
            tangon = tangon.IS_VOICE_MESSAGE;
            tangon = oscard.bind(golfie)(report, tangon);
            var _closure2_slot3 = tangon;
            tangon = zuuluu.attachments;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00012_ip = 108; continue _fun00011 }
 91:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    entity = {};
                    report = _closure2_slot3;
                    oscard = _closure1_slot5;
                    if(report) { _fun00014_ip = 36; continue _fun00013 }
 28:
                    report = oscard.ATTACHMENT;
                    _fun00014_ip = 42; continue _fun00013;
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
    zuuluu['getFiles'] = report;
    report = function(argFoo) { // Original name: getLinks
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            report = oscard.embeds;
            tangon = null;
            if(!(tangon != report)) { _fun00016_ip = 46; continue _fun00015 }
 29:
            zuuluu = report.forEach;
            michal = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    michal = _closure1_slot8;
                    entity = undefined;
                    tangon = michal.bind(entity)(report);
                    michal = report.url;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00018_ip = 35; continue _fun00017 }
 31:
                    michal = zuuluu != tangon;
 35:
                    if(!michal) { _fun00018_ip = 103; continue _fun00017 }
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
            if(!(report === michal)) { _fun00016_ip = 108; continue _fun00015 }
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
    zuuluu['getLinks'] = report;
    zuuluu['getSearchContextId'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getSearchTabFetchId
        zuuluu = _closure1_slot9;
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
    zuuluu['getSearchTabFetchId'] = tangon;
    tangon = function(argFoo) { // Original name: getBackwardCompatibilitySearchId
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            tangon = _closure1_slot7;
            tangon = tangon.GUILD;
            if(!(tangon !== zuuluu)) { _fun00020_ip = 113; continue _fun00019 }
 25:
            tangon = _closure1_slot7;
            tangon = tangon.GUILD_CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00020_ip = 113; continue _fun00019 }
 39:
            tangon = _closure1_slot7;
            tangon = tangon.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00020_ip = 106; continue _fun00019 }
 53:
            tangon = _closure1_slot7;
            tangon = tangon.THREAD;
            if(!(tangon !== zuuluu)) { _fun00020_ip = 106; continue _fun00019 }
 67:
            tangon = _closure1_slot7;
            tangon = tangon.DMS;
            if(!(tangon !== zuuluu)) { _fun00020_ip = 99; continue _fun00019 }
 81:
            michal = _closure1_slot7;
            michal = michal.FAVORITES;
            if(!(michal !== zuuluu)) { _fun00020_ip = 99; continue _fun00019 }
 95:
            michal = undefined;
            return michal;
 99:
            michal = entity.type;
            return michal;
 106:
            michal = entity.channelId;
            return michal;
 113:
            entity = entity.guildId;
            return entity;
        }
    };
    zuuluu['getBackwardCompatibilitySearchId'] = tangon;
    tangon = function(argFoo) { // Original name: getChannelActiveAgoTimestamp
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 4;
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
            if(!(!(report > michal))) { _fun00022_ip = 610; continue _fun00021 }
 75:
            zuuluu = 2592000;
            if(!(!(report > zuuluu))) { _fun00022_ip = 522; continue _fun00021 }
 88:
            tangon = 172800;
            if(!(!(report > tangon))) { _fun00022_ip = 428; continue _fun00021 }
 101:
            tangon = 86400;
            if(!(!(report > tangon))) { _fun00022_ip = 369; continue _fun00021 }
 114:
            tangon = 3600;
            if(!(!(report > tangon))) { _fun00022_ip = 281; continue _fun00021 }
 127:
            golfie = 60;
            if(!(!(report > golfie))) { _fun00022_ip = 193; continue _fun00021 }
 134:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 5;
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
            golfie = 5;
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
            tangon = 5;
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
            tangon = 5;
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
            tangon = 5;
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
            zuuluu = 5;
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
            entity = 5;
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
    zuuluu['getChannelActiveAgoTimestamp'] = tangon;
    tangon = function(argFoo) { // Original name: getIndexingErrorText
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot7;
            michal = michal.CHANNEL;
            if(!(michal !== zuuluu)) { _fun00024_ip = 227; continue _fun00023 }
 28:
            michal = _closure1_slot7;
            michal = michal.DMS;
            if(!(michal !== zuuluu)) { _fun00024_ip = 166; continue _fun00023 }
 45:
            michal = _closure1_slot7;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00024_ip = 105; continue _fun00023 }
 59:
            michal = _closure1_slot7;
            michal = michal.GUILD;
            if(!(michal !== zuuluu)) { _fun00024_ip = 105; continue _fun00023 }
 73:
            michal = _closure1_slot7;
            michal = michal.THREAD;
            if(!(michal !== zuuluu)) { _fun00024_ip = 105; continue _fun00023 }
 87:
            michal = _closure1_slot7;
            michal = michal.FAVORITES;
            if(!(michal !== zuuluu)) { _fun00024_ip = 105; continue _fun00023 }
 101:
            michal = undefined;
            return michal;
 105:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
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
 166:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
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
 227:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
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
    tangon = function(argFoo) { // Original name: isNonEmptyAutocompleteGroup
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            if(!entity) { _fun00026_ip = 22; continue _fun00025 }
 12:
            zuuluu = michal.results;
            entity = tangon != zuuluu;
 22:
            if(!entity) { _fun00026_ip = 42; continue _fun00025 }
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
    michal = function(argFoo) { // Original name: getGuildIdFromSearchContext
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.type;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.GUILD_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00028_ip = 106; continue _fun00027 }
 25:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00028_ip = 106; continue _fun00027 }
 39:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00028_ip = 57; continue _fun00027 }
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
            if(report) { _fun00028_ip = 92; continue _fun00027 }
 87:
            zuuluu = tangon.guild_id;
 92:
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00028_ip = 104; continue _fun00027 }
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