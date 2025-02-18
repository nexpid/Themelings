// app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Image;
    var _closure1_slot3 = golfie;
    tangon = tangon.processColor;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Colors;
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createMediaPostPreviewEmbedContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[1];
            verify = undefined;
            if(!(golfie === verify)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            golfie = false;
 11:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            report = 8;
            entity = entity[report];
            tangon = michal.bind(verify)(entity);
            michal = tangon.getMediaPostEmbedChannelId;
            entity = argFoo;
            oscard = michal.bind(tangon)(entity);
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 1466; continue _fun00001 }
 57:
            tangon = _closure1_slot10;
            michal = tangon.getEmbedFetchState;
            tangon = michal.bind(tangon)(oscard);
            michal = _closure1_slot11;
            michal = michal.FETCHED;
            if(!(tangon === michal)) { _fun00002_ip = 1464; continue _fun00001 }
 89:
            tangon = _closure1_slot10;
            michal = tangon.getMediaPostEmbed;
            michal = michal.bind(tangon)(oscard);
            tangon = entity == michal;
            backup = undefined;
            if(tangon) { _fun00002_ip = 119; continue _fun00001 }
 113:
            backup = michal.media;
 119:
            if(!(entity != backup)) { _fun00002_ip = 1462; continue _fun00001 }
 126:
            oscard = _closure1_slot7;
            tangon = oscard.getGuild;
            michal = backup.guild_id;
            foxtra = tangon.bind(oscard)(michal);
            oscard = _closure1_slot9;
            tangon = oscard.getUser;
            michal = backup.author_id;
            romeon = tangon.bind(oscard)(michal);
            oscard = _closure1_slot6;
            tangon = oscard.getChannel;
            michal = backup.parent_channel_id;
            yankee = tangon.bind(oscard)(michal);
            tangon = oscard.getChannel;
            michal = backup.channel_id;
            offset = tangon.bind(oscard)(michal);
            tangon = _closure1_slot8;
            michal = tangon.getGuildId;
            option = michal.bind(tangon)();
            oscard = entity != yankee;
            if(!oscard) { _fun00002_ip = 253; continue _fun00001 }
 222:
            tangon = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 9;
            michal = kiloes[michal];
            tangon = tangon.bind(verify)(michal);
            michal = tangon.canViewChannel;
            oscard = michal.bind(tangon)(yankee);
 253:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            report = tangon.bind(verify)(michal);
            tangon = report.getMediaPostEmbedCommonData;
            michal = {};
            michal['mediaPostEmbedData'] = backup;
            michal['guild'] = foxtra;
            michal['parentChannel'] = yankee;
            michal['postThread'] = offset;
            michal['user'] = romeon;
            michal['selectedGuildId'] = option;
            michal['canAccess'] = oscard;
            oscard = tangon.bind(report)(michal);
            if(!(entity != oscard)) { _fun00002_ip = 1460; continue _fun00001 }
 323:
            michal = oscard.authorName;
            if(!(entity != michal)) { _fun00002_ip = 573; continue _fun00001 }
 336:
            michal = oscard.channelName;
            if(!(entity != michal)) { _fun00002_ip = 573; continue _fun00001 }
 349:
            if(!(entity != romeon)) { _fun00002_ip = 573; continue _fun00001 }
 356:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            report = tangon.bind(verify)(michal);
            tangon = report.getUserAuthor;
            michal = oscard.postThread;
            report = tangon.bind(report)(romeon, michal);
            tangon = entity == report;
            michal = undefined;
            if(tangon) { _fun00002_ip = 409; continue _fun00001 }
 403:
            michal = report.colorString;
 409:
            michal = entity != michal;
            yankee = undefined;
            if(!michal) { _fun00002_ip = 442; continue _fun00001 }
 418:
            tangon = _closure1_slot4;
            option = entity == report;
            michal = undefined;
            if(option) { _fun00002_ip = 437; continue _fun00001 }
 431:
            michal = report.colorString;
 437:
            yankee = tangon.bind(verify)(michal);
 442:
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 10;
            report = offset[michal];
            report = tangon.bind(verify)(report);
            option = report.intl;
            report = option.formatToParts;
            michal = offset[michal];
            michal = tangon.bind(verify)(michal);
            michal = michal.t;
            tangon = michal.mCytFh;
            michal = {};
            offset = oscard.authorName;
            michal['username'] = offset;
            offset = {};
            foxtra = 'bindUserMenu';
            offset['action'] = foxtra;
            romeon = romeon.id;
            offset['userId'] = romeon;
            offset['linkColor'] = yankee;
            offset['roleColor'] = yankee;
            yankee = oscard.threadId;
            offset['messageChannelId'] = yankee;
            michal['usernameOnClick'] = offset;
            offset = oscard.channelName;
            michal['channelName'] = offset;
            report = report.bind(option)(tangon, michal);
            _fun00002_ip = 645; continue _fun00001;
 573:
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 10;
            option = yankee[michal];
            option = tangon.bind(verify)(option);
            offset = option.intl;
            option = offset.formatToParts;
            michal = yankee[michal];
            michal = tangon.bind(verify)(michal);
            michal = michal.t;
            tangon = michal.p4VdWF;
            michal = {};
            yankee = oscard.guildName;
            michal['guildName'] = yankee;
            report = option.bind(offset)(tangon, michal);
 645:
            tangon = oscard.canAccess;
            michal = false;
            if(!(michal !== tangon)) { _fun00002_ip = 678; continue _fun00001 }
 657:
            tangon = _closure1_slot4;
            michal = _closure1_slot12;
            michal = michal.BRAND_500;
            tangon = tangon.bind(verify)(michal);
            _fun00002_ip = 697; continue _fun00001;
 678:
            option = _closure1_slot4;
            michal = _closure1_slot12;
            michal = michal.TEAL_430;
            tangon = option.bind(verify)(michal);
 697:
            michal = oscard.coverImage;
            option = entity != michal;
            if(!option) { _fun00002_ip = 747; continue _fun00001 }
 710:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 12;
            michal = yankee[michal];
            yankee = offset.bind(verify)(michal);
            offset = yankee.isAnimatedImageUrl;
            michal = oscard.coverImage;
            option = offset.bind(yankee)(michal);
 747:
            michal = oscard.coverImage;
            michal = entity != michal;
            if(!michal) { _fun00002_ip = 769; continue _fun00001 }
 760:
            offset = oscard.shouldShowBlurredThumbnailImage;
            michal = !offset;
 769:
            if(!michal) { _fun00002_ip = 775; continue _fun00001 }
 772:
            michal = option;
 775:
            if(!michal) { _fun00002_ip = 781; continue _fun00001 }
 778:
            michal = golfie;
 781:
            if(!michal) { _fun00002_ip = 825; continue _fun00001 }
 784:
            offset = oscard.coverImage;
            michal = global;
            michal = michal.HermesInternal;
            option = michal.concat;
            golfie = '';
            michal = '?format=webp';
            michal = option.bind(golfie)(offset, michal);
            oscard['coverImage'] = michal;
 825:
            michal = oscard.shouldShowBlurredThumbnailImage;
            if(michal) { _fun00002_ip = 1374; continue _fun00001 }
 837:
            option = _closure1_slot5;
            golfie = option.get;
            michal = 'obscure_blur_effect_enabled';
            option = golfie.bind(option)(michal);
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 14;
            michal = offset[michal];
            offset = golfie.bind(verify)(michal);
            golfie = offset.isPendingScanVersion;
            michal = oscard.contentScanVersion;
            offset = golfie.bind(offset)(michal);
            michal = oscard.shouldContainMediaWithBackground;
            if(!michal) { _fun00002_ip = 916; continue _fun00001 }
 903:
            michal = oscard.coverImage;
            if(!(entity == michal)) { _fun00002_ip = 1122; continue _fun00001 }
 916:
            michal = {};
            echoed = michal;
            result = oscard;
            golfie = copyDataProperties(echoed, result);
            golfie = 'footer';
            michal[golfie] = report;
            foxtra = oscard.shouldSpoiler;
            yankee = '';
            golfie = true;
            romeon = yankee;
            if(!(golfie === foxtra)) { _fun00002_ip = 1021; continue _fun00001 }
 956:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            golfie = 10;
            foxtra = sizing[golfie];
            foxtra = kiloes.bind(verify)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            golfie = sizing[golfie];
            golfie = kiloes.bind(verify)(golfie);
            golfie = golfie.t;
            golfie = golfie.F+x38P;
            foxtra = foxtra.bind(backup)(golfie);
            golfie = foxtra.toUpperCase;
            romeon = golfie.bind(foxtra)();
 1021:
            golfie = 'spoiler';
            michal[golfie] = romeon;
            if(!option) { _fun00002_ip = 1088; continue _fun00001 }
 1033:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            golfie = 10;
            romeon = kiloes[golfie];
            romeon = backup.bind(verify)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            golfie = kiloes[golfie];
            golfie = backup.bind(verify)(golfie);
            golfie = golfie.t;
            golfie = golfie.SpxcUV;
            yankee = romeon.bind(foxtra)(golfie);
 1088:
            golfie = 'obscure';
            michal[golfie] = yankee;
            golfie = 'obscureAwaitingScan';
            michal[golfie] = offset;
            golfie = 'ctaButtonColor';
            michal[golfie] = tangon;
            _fun00002_ip = 1372; continue _fun00001;
 1122:
            golfie = {};
            echoed = golfie;
            result = oscard;
            yankee = copyDataProperties(echoed, result);
            yankee = 'footer';
            golfie[yankee] = report;
            backup = oscard.shouldSpoiler;
            yankee = '';
            romeon = true;
            foxtra = yankee;
            if(!(romeon === backup)) { _fun00002_ip = 1227; continue _fun00001 }
 1162:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            romeon = 10;
            backup = output[romeon];
            backup = sizing.bind(verify)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            romeon = output[romeon];
            romeon = sizing.bind(verify)(romeon);
            romeon = romeon.t;
            romeon = romeon.F+x38P;
            backup = backup.bind(kiloes)(romeon);
            romeon = backup.toUpperCase;
            foxtra = romeon.bind(backup)();
 1227:
            romeon = 'spoiler';
            golfie[romeon] = foxtra;
            if(!option) { _fun00002_ip = 1294; continue _fun00001 }
 1239:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 10;
            romeon = kiloes[option];
            romeon = backup.bind(verify)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            option = kiloes[option];
            option = backup.bind(verify)(option);
            option = option.t;
            option = option.SpxcUV;
            yankee = romeon.bind(foxtra)(option);
 1294:
            option = 'obscure';
            golfie[option] = yankee;
            option = 'obscureAwaitingScan';
            golfie[option] = offset;
            option = 'ctaButtonColor';
            golfie[option] = tangon;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 15;
            option = yankee[option];
            yankee = offset.bind(verify)(option);
            offset = yankee.getBackgroundImageUrl;
            option = oscard.coverImage;
            offset = offset.bind(yankee)(option);
            option = 'backgroundImage';
            golfie[option] = offset;
            michal = golfie;
 1372:
            return michal;
 1374:
            michal = {};
            echoed = michal;
            result = oscard;
            oscard = copyDataProperties(echoed, result);
            golfie = _closure1_slot3;
            oscard = golfie.resolveAssetSource;
            option = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 13;
            zuuluu = offset[zuuluu];
            zuuluu = option.bind(verify)(zuuluu);
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = zuuluu.uri;
            zuuluu = 'blurredCoverImage';
            michal[zuuluu] = oscard;
            zuuluu = 'footer';
            michal[zuuluu] = report;
            zuuluu = 'ctaButtonColor';
            michal[zuuluu] = tangon;
            return michal;
 1460:
            return entity;
 1462:
            return entity;
 1464:
            return entity;
 1466:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();