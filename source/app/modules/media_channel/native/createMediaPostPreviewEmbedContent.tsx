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
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createMediaPostPreviewEmbedContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = arguments[1];
            verify = undefined;
            if(!(option === verify)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            option = false;
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
            if(!(entity != oscard)) { _fun00002_ip = 1578; continue _fun00001 }
 57:
            tangon = _closure1_slot10;
            michal = tangon.getEmbedFetchState;
            tangon = michal.bind(tangon)(oscard);
            michal = _closure1_slot11;
            michal = michal.FETCHED;
            if(!(tangon === michal)) { _fun00002_ip = 1576; continue _fun00001 }
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
            if(!(entity != backup)) { _fun00002_ip = 1574; continue _fun00001 }
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
            golfie = michal.bind(tangon)();
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
            michal['selectedGuildId'] = golfie;
            michal['canAccess'] = oscard;
            oscard = tangon.bind(report)(michal);
            if(!(entity != oscard)) { _fun00002_ip = 1572; continue _fun00001 }
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
            golfie = entity == report;
            michal = undefined;
            if(golfie) { _fun00002_ip = 437; continue _fun00001 }
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
            golfie = report.intl;
            report = golfie.formatToParts;
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
            report = report.bind(golfie)(tangon, michal);
            _fun00002_ip = 645; continue _fun00001;
 573:
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 10;
            golfie = yankee[michal];
            golfie = tangon.bind(verify)(golfie);
            offset = golfie.intl;
            golfie = offset.formatToParts;
            michal = yankee[michal];
            michal = tangon.bind(verify)(michal);
            michal = michal.t;
            tangon = michal.p4VdWF;
            michal = {};
            yankee = oscard.guildName;
            michal['guildName'] = yankee;
            report = golfie.bind(offset)(tangon, michal);
 645:
            tangon = oscard.canAccess;
            michal = false;
            if(!(michal !== tangon)) { _fun00002_ip = 678; continue _fun00001 }
 657:
            golfie = _closure1_slot4;
            tangon = _closure1_slot12;
            tangon = tangon.BRAND_500;
            tangon = golfie.bind(verify)(tangon);
            _fun00002_ip = 697; continue _fun00001;
 678:
            offset = _closure1_slot4;
            golfie = _closure1_slot12;
            golfie = golfie.TEAL_430;
            tangon = offset.bind(verify)(golfie);
 697:
            golfie = oscard.coverImage;
            offset = entity != golfie;
            if(!offset) { _fun00002_ip = 747; continue _fun00001 }
 710:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 12;
            golfie = romeon[golfie];
            romeon = yankee.bind(verify)(golfie);
            yankee = romeon.isAnimatedImageUrl;
            golfie = oscard.coverImage;
            offset = yankee.bind(romeon)(golfie);
 747:
            golfie = oscard.coverImage;
            golfie = entity != golfie;
            if(!golfie) { _fun00002_ip = 769; continue _fun00001 }
 760:
            yankee = oscard.shouldShowBlurredThumbnailImage;
            golfie = !yankee;
 769:
            if(!golfie) { _fun00002_ip = 775; continue _fun00001 }
 772:
            golfie = offset;
 775:
            if(!golfie) { _fun00002_ip = 781; continue _fun00001 }
 778:
            golfie = option;
 781:
            if(!golfie) { _fun00002_ip = 825; continue _fun00001 }
 784:
            yankee = oscard.coverImage;
            golfie = global;
            golfie = golfie.HermesInternal;
            offset = golfie.concat;
            option = '';
            golfie = '?format=webp';
            golfie = offset.bind(option)(yankee, golfie);
            oscard['coverImage'] = golfie;
 825:
            golfie = oscard.shouldShowBlurredThumbnailImage;
            if(golfie) { _fun00002_ip = 1487; continue _fun00001 }
 837:
            offset = _closure1_slot5;
            option = offset.get;
            golfie = 'obscure_blur_effect_enabled';
            yankee = option.bind(offset)(golfie);
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 14;
            golfie = offset[golfie];
            offset = option.bind(verify)(golfie);
            option = offset.isPendingScanVersion;
            golfie = oscard.contentScanVersion;
            romeon = option.bind(offset)(golfie);
            offset = yankee;
            if(!yankee) { _fun00002_ip = 930; continue _fun00001 }
 900:
            option = _closure1_slot1;
            foxtra = _closure1_slot2;
            golfie = 15;
            golfie = foxtra[golfie];
            option = option.bind(verify)(golfie);
            golfie = option.shouldShowTiggerPawtect;
            offset = golfie.bind(option)();
 930:
            option = yankee;
            if(!option) { _fun00002_ip = 938; continue _fun00001 }
 936:
            option = false;
 938:
            michal = oscard.shouldContainMediaWithBackground;
            if(!michal) { _fun00002_ip = 960; continue _fun00001 }
 947:
            michal = oscard.coverImage;
            if(!(entity == michal)) { _fun00002_ip = 1202; continue _fun00001 }
 960:
            michal = {};
            source = michal;
            update = oscard;
            golfie = copyDataProperties(source, update);
            golfie = 'footer';
            michal[golfie] = report;
            kiloes = oscard.shouldSpoiler;
            foxtra = '';
            golfie = true;
            backup = foxtra;
            if(!(golfie === kiloes)) { _fun00002_ip = 1065; continue _fun00001 }
 1000:
            output = _closure1_slot0;
            result = _closure1_slot2;
            golfie = 10;
            kiloes = result[golfie];
            kiloes = output.bind(verify)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            golfie = result[golfie];
            golfie = output.bind(verify)(golfie);
            golfie = golfie.t;
            golfie = golfie.F+x38P;
            kiloes = kiloes.bind(sizing)(golfie);
            golfie = kiloes.toUpperCase;
            backup = golfie.bind(kiloes)();
 1065:
            golfie = 'spoiler';
            michal[golfie] = backup;
            if(!yankee) { _fun00002_ip = 1132; continue _fun00001 }
 1077:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            golfie = 10;
            backup = output[golfie];
            backup = sizing.bind(verify)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            golfie = output[golfie];
            golfie = sizing.bind(verify)(golfie);
            golfie = golfie.t;
            golfie = golfie.SpxcUV;
            foxtra = backup.bind(kiloes)(golfie);
 1132:
            golfie = 'obscure';
            michal[golfie] = foxtra;
            golfie = 'obscureAwaitingScan';
            michal[golfie] = romeon;
            golfie = 'verifyAge';
            michal[golfie] = offset;
            golfie = 'obscureHideControls';
            michal[golfie] = option;
            foxtra = offset;
            if(offset) { _fun00002_ip = 1177; continue _fun00001 }
 1174:
            foxtra = option;
 1177:
            golfie = 'obscureIsOpaque';
            michal[golfie] = foxtra;
            golfie = 'ctaButtonColor';
            michal[golfie] = tangon;
            _fun00002_ip = 1485; continue _fun00001;
 1202:
            golfie = {};
            source = golfie;
            update = oscard;
            foxtra = copyDataProperties(source, update);
            foxtra = 'footer';
            golfie[foxtra] = report;
            sizing = oscard.shouldSpoiler;
            foxtra = '';
            backup = true;
            kiloes = foxtra;
            if(!(backup === sizing)) { _fun00002_ip = 1307; continue _fun00001 }
 1242:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            backup = 10;
            sizing = echoed[backup];
            sizing = result.bind(verify)(sizing);
            output = sizing.intl;
            sizing = output.string;
            backup = echoed[backup];
            backup = result.bind(verify)(backup);
            backup = backup.t;
            backup = backup.F+x38P;
            sizing = sizing.bind(output)(backup);
            backup = sizing.toUpperCase;
            kiloes = backup.bind(sizing)();
 1307:
            backup = 'spoiler';
            golfie[backup] = kiloes;
            if(!yankee) { _fun00002_ip = 1374; continue _fun00001 }
 1319:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            yankee = 10;
            backup = output[yankee];
            backup = sizing.bind(verify)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            yankee = output[yankee];
            yankee = sizing.bind(verify)(yankee);
            yankee = yankee.t;
            yankee = yankee.SpxcUV;
            foxtra = backup.bind(kiloes)(yankee);
 1374:
            yankee = 'obscure';
            golfie[yankee] = foxtra;
            yankee = 'obscureAwaitingScan';
            golfie[yankee] = romeon;
            yankee = 'verifyAge';
            golfie[yankee] = offset;
            yankee = 'obscureHideControls';
            golfie[yankee] = option;
            if(offset) { _fun00002_ip = 1416; continue _fun00001 }
 1413:
            offset = option;
 1416:
            option = 'obscureIsOpaque';
            golfie[option] = offset;
            option = 'ctaButtonColor';
            golfie[option] = tangon;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 16;
            option = yankee[option];
            yankee = offset.bind(verify)(option);
            offset = yankee.getBackgroundImageUrl;
            option = oscard.coverImage;
            offset = offset.bind(yankee)(option);
            option = 'backgroundImage';
            golfie[option] = offset;
            michal = golfie;
 1485:
            return michal;
 1487:
            michal = {};
            source = michal;
            update = oscard;
            oscard = copyDataProperties(source, update);
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
 1572:
            return entity;
 1574:
            return entity;
 1576:
            return entity;
 1578:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();