// app/modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.Image;
    var _closure1_slot3 = golf;
    tango = tango.processColor;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = options.bind(entity)(golf);
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Colors;
    var _closure1_slot12 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/native/createMediaPostPreviewEmbedContent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createMediaPostPreviewEmbedContent
        _fun72004: for(var _fun72004_ip = 0; ; ) switch(_fun72004_ip) {
 0:
            golf = arguments[1];
            verify = undefined;
            if(!(golf === verify)) { _fun72004_ip = 11; continue _fun72004 }
 9:
            golf = false;
 11:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            report = 8;
            entity = entity[report];
            tango = mike.bind(verify)(entity);
            mike = tango.getMediaPostEmbedChannelId;
            entity = argFoo;
            oscar = mike.bind(tango)(entity);
            entity = null;
            if(!(entity != oscar)) { _fun72004_ip = 1461; continue _fun72004 }
 57:
            tango = _closure1_slot10;
            mike = tango.getEmbedFetchState;
            tango = mike.bind(tango)(oscar);
            mike = _closure1_slot11;
            mike = mike.FETCHED;
            if(!(tango === mike)) { _fun72004_ip = 1459; continue _fun72004 }
 89:
            tango = _closure1_slot10;
            mike = tango.getMediaPostEmbed;
            mike = mike.bind(tango)(oscar);
            tango = entity == mike;
            backup = undefined;
            if(tango) { _fun72004_ip = 119; continue _fun72004 }
 113:
            backup = mike.media;
 119:
            if(!(entity != backup)) { _fun72004_ip = 1457; continue _fun72004 }
 126:
            oscar = _closure1_slot7;
            tango = oscar.getGuild;
            mike = backup.guild_id;
            foxtrot = tango.bind(oscar)(mike);
            oscar = _closure1_slot9;
            tango = oscar.getUser;
            mike = backup.author_id;
            romeo = tango.bind(oscar)(mike);
            oscar = _closure1_slot6;
            tango = oscar.getChannel;
            mike = backup.parent_channel_id;
            yankee = tango.bind(oscar)(mike);
            tango = oscar.getChannel;
            mike = backup.channel_id;
            offset = tango.bind(oscar)(mike);
            tango = _closure1_slot8;
            mike = tango.getGuildId;
            options = mike.bind(tango)();
            oscar = entity != yankee;
            if(!oscar) { _fun72004_ip = 253; continue _fun72004 }
 222:
            tango = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 9;
            mike = kilo[mike];
            tango = tango.bind(verify)(mike);
            mike = tango.canViewChannel;
            oscar = mike.bind(tango)(yankee);
 253:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            report = tango.bind(verify)(mike);
            tango = report.getMediaPostEmbedCommonData;
            mike = {};
            mike['mediaPostEmbedData'] = backup;
            mike['guild'] = foxtrot;
            mike['parentChannel'] = yankee;
            mike['postThread'] = offset;
            mike['user'] = romeo;
            mike['selectedGuildId'] = options;
            mike['canAccess'] = oscar;
            oscar = tango.bind(report)(mike);
            if(!(entity != oscar)) { _fun72004_ip = 1455; continue _fun72004 }
 323:
            mike = oscar.authorName;
            if(!(entity != mike)) { _fun72004_ip = 571; continue _fun72004 }
 336:
            mike = oscar.channelName;
            if(!(entity != mike)) { _fun72004_ip = 571; continue _fun72004 }
 349:
            if(!(entity != romeo)) { _fun72004_ip = 571; continue _fun72004 }
 356:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 11;
            mike = report[mike];
            report = tango.bind(verify)(mike);
            tango = report.getUserAuthor;
            mike = oscar.postThread;
            report = tango.bind(report)(romeo, mike);
            tango = entity == report;
            mike = undefined;
            if(tango) { _fun72004_ip = 409; continue _fun72004 }
 403:
            mike = report.colorString;
 409:
            mike = entity != mike;
            yankee = undefined;
            if(!mike) { _fun72004_ip = 442; continue _fun72004 }
 418:
            tango = _closure1_slot4;
            options = entity == report;
            mike = undefined;
            if(options) { _fun72004_ip = 437; continue _fun72004 }
 431:
            mike = report.colorString;
 437:
            yankee = tango.bind(verify)(mike);
 442:
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 10;
            report = offset[mike];
            report = tango.bind(verify)(report);
            options = report.intl;
            report = options.formatToParts;
            mike = offset[mike];
            mike = tango.bind(verify)(mike);
            mike = mike.t;
            tango = mike.mCytFh;
            mike = {};
            offset = oscar.authorName;
            mike['username'] = offset;
            offset = {};
            foxtrot = 'bindUserMenu';
            offset['action'] = foxtrot;
            romeo = romeo.id;
            offset['userId'] = romeo;
            offset['linkColor'] = yankee;
            offset['roleColor'] = yankee;
            yankee = oscar.threadId;
            offset['messageChannelId'] = yankee;
            mike['usernameOnClick'] = offset;
            offset = oscar.channelName;
            mike['channelName'] = offset;
            report = report.bind(options)(tango, mike);
            _fun72004_ip = 641; continue _fun72004;
 571:
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 10;
            options = yankee[mike];
            options = tango.bind(verify)(options);
            offset = options.intl;
            options = offset.formatToParts;
            mike = yankee[mike];
            mike = tango.bind(verify)(mike);
            mike = mike.t;
            tango = mike.p4VdWF;
            mike = {};
            yankee = oscar.guildName;
            mike['guildName'] = yankee;
            report = options.bind(offset)(tango, mike);
 641:
            tango = oscar.canAccess;
            mike = false;
            if(!(mike !== tango)) { _fun72004_ip = 674; continue _fun72004 }
 653:
            tango = _closure1_slot4;
            mike = _closure1_slot12;
            mike = mike.BRAND_500;
            tango = tango.bind(verify)(mike);
            _fun72004_ip = 693; continue _fun72004;
 674:
            options = _closure1_slot4;
            mike = _closure1_slot12;
            mike = mike.TEAL_430;
            tango = options.bind(verify)(mike);
 693:
            mike = oscar.coverImage;
            options = entity != mike;
            if(!options) { _fun72004_ip = 743; continue _fun72004 }
 706:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 12;
            mike = yankee[mike];
            yankee = offset.bind(verify)(mike);
            offset = yankee.isAnimatedImageUrl;
            mike = oscar.coverImage;
            options = offset.bind(yankee)(mike);
 743:
            mike = oscar.coverImage;
            mike = entity != mike;
            if(!mike) { _fun72004_ip = 765; continue _fun72004 }
 756:
            offset = oscar.shouldShowBlurredThumbnailImage;
            mike = !offset;
 765:
            if(!mike) { _fun72004_ip = 771; continue _fun72004 }
 768:
            mike = options;
 771:
            if(!mike) { _fun72004_ip = 777; continue _fun72004 }
 774:
            mike = golf;
 777:
            if(!mike) { _fun72004_ip = 821; continue _fun72004 }
 780:
            offset = oscar.coverImage;
            mike = global;
            mike = mike.HermesInternal;
            options = mike.concat;
            golf = '';
            mike = '?format=webp';
            mike = options.bind(golf)(offset, mike);
            oscar['coverImage'] = mike;
 821:
            mike = oscar.shouldShowBlurredThumbnailImage;
            if(mike) { _fun72004_ip = 1370; continue _fun72004 }
 833:
            options = _closure1_slot5;
            golf = options.get;
            mike = 'obscure_blur_effect_enabled';
            options = golf.bind(options)(mike);
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 14;
            mike = offset[mike];
            offset = golf.bind(verify)(mike);
            golf = offset.isPendingScanVersion;
            mike = oscar.contentScanVersion;
            offset = golf.bind(offset)(mike);
            mike = oscar.shouldContainMediaWithBackground;
            if(!mike) { _fun72004_ip = 912; continue _fun72004 }
 899:
            mike = oscar.coverImage;
            if(!(entity == mike)) { _fun72004_ip = 1118; continue _fun72004 }
 912:
            mike = {};
            echo = mike;
            result = oscar;
            golf = copyDataProperties(echo, result);
            golf = 'footer';
            mike[golf] = report;
            foxtrot = oscar.shouldSpoiler;
            yankee = '';
            golf = true;
            romeo = yankee;
            if(!(golf === foxtrot)) { _fun72004_ip = 1017; continue _fun72004 }
 952:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            golf = 10;
            foxtrot = sizing[golf];
            foxtrot = kilo.bind(verify)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            golf = sizing[golf];
            golf = kilo.bind(verify)(golf);
            golf = golf.t;
            golf = golf.F+x38P;
            foxtrot = foxtrot.bind(backup)(golf);
            golf = foxtrot.toUpperCase;
            romeo = golf.bind(foxtrot)();
 1017:
            golf = 'spoiler';
            mike[golf] = romeo;
            if(!options) { _fun72004_ip = 1084; continue _fun72004 }
 1029:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            golf = 10;
            romeo = kilo[golf];
            romeo = backup.bind(verify)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            golf = kilo[golf];
            golf = backup.bind(verify)(golf);
            golf = golf.t;
            golf = golf.SpxcUV;
            yankee = romeo.bind(foxtrot)(golf);
 1084:
            golf = 'obscure';
            mike[golf] = yankee;
            golf = 'obscureAwaitingScan';
            mike[golf] = offset;
            golf = 'ctaButtonColor';
            mike[golf] = tango;
            _fun72004_ip = 1368; continue _fun72004;
 1118:
            golf = {};
            echo = golf;
            result = oscar;
            yankee = copyDataProperties(echo, result);
            yankee = 'footer';
            golf[yankee] = report;
            backup = oscar.shouldSpoiler;
            yankee = '';
            romeo = true;
            foxtrot = yankee;
            if(!(romeo === backup)) { _fun72004_ip = 1223; continue _fun72004 }
 1158:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            romeo = 10;
            backup = output[romeo];
            backup = sizing.bind(verify)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            romeo = output[romeo];
            romeo = sizing.bind(verify)(romeo);
            romeo = romeo.t;
            romeo = romeo.F+x38P;
            backup = backup.bind(kilo)(romeo);
            romeo = backup.toUpperCase;
            foxtrot = romeo.bind(backup)();
 1223:
            romeo = 'spoiler';
            golf[romeo] = foxtrot;
            if(!options) { _fun72004_ip = 1290; continue _fun72004 }
 1235:
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            options = 10;
            romeo = kilo[options];
            romeo = backup.bind(verify)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            options = kilo[options];
            options = backup.bind(verify)(options);
            options = options.t;
            options = options.SpxcUV;
            yankee = romeo.bind(foxtrot)(options);
 1290:
            options = 'obscure';
            golf[options] = yankee;
            options = 'obscureAwaitingScan';
            golf[options] = offset;
            options = 'ctaButtonColor';
            golf[options] = tango;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            options = 15;
            options = yankee[options];
            yankee = offset.bind(verify)(options);
            offset = yankee.getBackgroundImageUrl;
            options = oscar.coverImage;
            offset = offset.bind(yankee)(options);
            options = 'backgroundImage';
            golf[options] = offset;
            mike = golf;
 1368:
            return mike;
 1370:
            mike = {};
            echo = mike;
            result = oscar;
            oscar = copyDataProperties(echo, result);
            golf = _closure1_slot3;
            oscar = golf.resolveAssetSource;
            options = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 13;
            zulu = offset[zulu];
            zulu = options.bind(verify)(zulu);
            zulu = oscar.bind(golf)(zulu);
            oscar = zulu.uri;
            zulu = 'blurredCoverImage';
            mike[zulu] = oscar;
            zulu = 'footer';
            mike[zulu] = report;
            zulu = 'ctaButtonColor';
            mike[zulu] = tango;
            return mike;
 1455:
            return entity;
 1457:
            return entity;
 1459:
            return entity;
 1461:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();