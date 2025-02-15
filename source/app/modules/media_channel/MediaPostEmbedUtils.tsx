// app/modules/media_channel/MediaPostEmbedUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: getMediaPostEmbedChannelPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            mike = null;
            if(!(mike != oscar)) { _fun00002_ip = 81; continue _fun00001 }
 9:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            golf = 7;
            zulu = zulu[golf];
            tango = undefined;
            report = report.bind(tango)(zulu);
            zulu = report.parseURLSafely;
            oscar = zulu.bind(report)(oscar);
            if(!(mike != oscar)) { _fun00002_ip = 81; continue _fun00001 }
 49:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            report = report.bind(tango)(zulu);
            zulu = report.remainingPathFromDiscordHostMatch;
            zulu = zulu.bind(report)(oscar);
            if(!(mike == zulu)) { _fun00002_ip = 85; continue _fun00001 }
 81:
            mike = undefined;
            return mike;
 85:
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.tryParseChannelPath;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot5 = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/media_channel/MediaPostEmbedUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: getMediaPostEmbedCommonData
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = entity.mediaPostEmbedData;
            foxtrot = entity.guild;
            offset = entity.parentChannel;
            backup = entity.postThread;
            result = entity.user;
            report = entity.selectedGuildId;
            romeo = entity.canAccess;
            verify = undefined;
            if(!(romeo === verify)) { _fun00004_ip = 51; continue _fun00003 }
 49:
            romeo = false;
 51:
            entity = null;
            if(!(entity != zulu)) { _fun00004_ip = 771; continue _fun00003 }
 60:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            oscar = tango.bind(verify)(mike);
            tango = oscar.getThumbnailImage;
            mike = zulu.thumbnail;
            kilo = tango.bind(oscar)(mike);
            golf = !romeo;
            if(!golf) { _fun00004_ip = 114; continue _fun00003 }
 106:
            golf = zulu.has_media_attachment;
 114:
            options = _closure1_slot0;
            mike = _closure1_slot2;
            update = 4;
            tango = mike[update];
            tango = options.bind(verify)(tango);
            oscar = tango.intl;
            tango = oscar.string;
            mike = mike[update];
            mike = options.bind(verify)(mike);
            mike = mike.t;
            if(romeo) { _fun00004_ip = 174; continue _fun00003 }
 161:
            options = mike.ReFzYW;
            output = tango.bind(oscar)(options);
            _fun00004_ip = 185; continue _fun00003;
 174:
            mike = mike.UsZEBA;
            output = tango.bind(oscar)(mike);
 185:
            mike = entity != result;
            yankee = undefined;
            if(!mike) { _fun00004_ip = 237; continue _fun00003 }
 194:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            options = tango.bind(verify)(mike);
            oscar = options.getName;
            tango = zulu.guild_id;
            mike = zulu.channel_id;
            yankee = oscar.bind(options)(tango, mike, result);
 237:
            mike = entity == result;
            options = undefined;
            if(mike) { _fun00004_ip = 275; continue _fun00003 }
 246:
            oscar = result.getAvatarURL;
            mike = entity == foxtrot;
            tango = undefined;
            if(mike) { _fun00004_ip = 266; continue _fun00003 }
 261:
            tango = foxtrot.id;
 266:
            mike = 40;
            options = oscar.bind(result)(tango, mike);
 275:
            mike = entity != options;
            if(!mike) { _fun00004_ip = 291; continue _fun00003 }
 282:
            tango = zulu.guild_id;
            mike = report === tango;
 291:
            if(mike) { _fun00004_ip = 362; continue _fun00003 }
 294:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 6;
            mike = report[mike];
            report = tango.bind(verify)(mike);
            tango = report.getGuildIconURL;
            mike = {};
            oscar = zulu.guild_id;
            mike['id'] = oscar;
            oscar = zulu.guild_icon;
            mike['icon'] = oscar;
            oscar = 40;
            mike['size'] = oscar;
            oscar = false;
            mike['canAnimate'] = oscar;
            options = tango.bind(report)(mike);
 362:
            mike = zulu.thumbnail;
            report = entity == mike;
            tango = false;
            oscar = false;
            if(report) { _fun00004_ip = 410; continue _fun00003 }
 379:
            result = mike.height;
            report = mike.width;
            mike = entity != result;
            if(!mike) { _fun00004_ip = 400; continue _fun00003 }
 396:
            mike = entity != report;
 400:
            if(!mike) { _fun00004_ip = 407; continue _fun00003 }
 403:
            mike = result >= report;
 407:
            oscar = mike;
 410:
            if(!oscar) { _fun00004_ip = 416; continue _fun00003 }
 413:
            oscar = !golf;
 416:
            report = zulu.thumbnail;
            result = entity == report;
            mike = undefined;
            if(result) { _fun00004_ip = 437; continue _fun00003 }
 431:
            mike = report.filename;
 437:
            report = entity != mike;
            if(!report) { _fun00004_ip = 492; continue _fun00003 }
 444:
            result = zulu.thumbnail;
            echo = entity == result;
            mike = undefined;
            if(echo) { _fun00004_ip = 489; continue _fun00003 }
 459:
            source = result.filename;
            result = entity == source;
            mike = undefined;
            if(result) { _fun00004_ip = 489; continue _fun00003 }
 474:
            echo = source.startsWith;
            result = _closure1_slot5;
            mike = echo.bind(source)(result);
 489:
            report = mike;
 492:
            mike = {};
            echo = zulu.title;
            source = entity != echo;
            result = '';
            if(!source) { _fun00004_ip = 513; continue _fun00003 }
 510:
            result = echo;
 513:
            mike['title'] = result;
            result = zulu.description;
            mike['subtitle'] = result;
            mike['ctaText'] = output;
            mike['coverImage'] = kilo;
            kilo = undefined;
            if(!golf) { _fun00004_ip = 594; continue _fun00003 }
 542:
            echo = _closure1_slot0;
            sizing = _closure1_slot2;
            output = sizing[update];
            output = echo.bind(verify)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echo.bind(verify)(sizing);
            sizing = sizing.t;
            sizing = sizing.YonliY;
            kilo = output.bind(result)(sizing);
 594:
            mike['coverImageOverlayText'] = kilo;
            kilo = zulu.parent_channel_id;
            mike['parentChannelId'] = kilo;
            kilo = zulu.channel_id;
            mike['threadId'] = kilo;
            mike['postThread'] = backup;
            backup = zulu.message_id;
            mike['messageId'] = backup;
            mike['canAccess'] = romeo;
            romeo = zulu.guild_id;
            mike['guildId'] = romeo;
            backup = entity == foxtrot;
            romeo = undefined;
            if(backup) { _fun00004_ip = 665; continue _fun00003 }
 660:
            romeo = foxtrot.name;
 665:
            if(!(entity == romeo)) { _fun00004_ip = 675; continue _fun00003 }
 669:
            romeo = zulu.guild_name;
 675:
            mike['guildName'] = romeo;
            foxtrot = entity == zulu;
            romeo = undefined;
            if(foxtrot) { _fun00004_ip = 695; continue _fun00003 }
 689:
            romeo = zulu.author_id;
 695:
            mike['authorId'] = romeo;
            mike['authorName'] = yankee;
            yankee = entity == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 719; continue _fun00003 }
 714:
            verify = offset.name;
 719:
            mike['channelName'] = verify;
            mike['avatarUrl'] = options;
            mike['shouldShowBlurredThumbnailImage'] = golf;
            mike['shouldContainMediaWithBackground'] = oscar;
            mike['shouldSpoiler'] = report;
            mike['obscureAwaitingScan'] = tango;
            tango = zulu.flags;
            mike['flags'] = tango;
            zulu = zulu.content_scan_version;
            mike['contentScanVersion'] = zulu;
            return mike;
 771:
            return entity;
        }
    };
    zulu['getMediaPostEmbedCommonData'] = report;
    report = function(argFoo) { // Original name: getMediaPostEmbedChannelId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot6;
            mike = undefined;
            entity = argFoo;
            zulu = zulu.bind(mike)(entity);
            tango = null;
            if(!(tango != zulu)) { _fun00006_ip = 47; continue _fun00005 }
 23:
            entity = zulu.threadId;
            if(!(tango == entity)) { _fun00006_ip = 38; continue _fun00005 }
 33:
            entity = zulu.channelId;
 38:
            zulu = zulu.messageId;
            if(!(entity !== zulu)) { _fun00006_ip = 49; continue _fun00005 }
 47:
            return mike;
 49:
            return entity;
        }
    };
    zulu['getMediaPostEmbedChannelId'] = report;
    zulu['getMediaPostEmbedChannelPath'] = tango;
    mike = function(argFoo, argBar) { // Original name: canUseMediaPostEmbed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argBar;
            report = _closure1_slot3;
            tango = report.getGuild;
            mike = argFoo;
            report = tango.bind(report)(mike);
            mike = null;
            if(!(mike != report)) { _fun00008_ip = 102; continue _fun00007 }
 29:
            if(!(mike != zulu)) { _fun00008_ip = 102; continue _fun00007 }
 33:
            tango = report.hasFeature;
            mike = _closure1_slot4;
            mike = mike.CREATOR_MONETIZABLE;
            mike = tango.bind(report)(mike);
            if(mike) { _fun00008_ip = 78; continue _fun00007 }
 57:
            tango = report.hasFeature;
            entity = _closure1_slot4;
            entity = entity.CREATOR_MONETIZABLE_PROVISIONAL;
            mike = tango.bind(report)(entity);
 78:
            entity = zulu.isMediaChannel;
            zulu = entity.bind(zulu)();
            entity = true;
            entity = entity === zulu;
            if(!entity) { _fun00008_ip = 100; continue _fun00007 }
 97:
            entity = mike;
 100:
            return entity;
 102:
            entity = false;
            return entity;
        }
    };
    zulu['canUseMediaPostEmbed'] = mike;
    return entity;
})();