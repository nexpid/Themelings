// app/modules/messages/native/renderer/row_data/ForumPostActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: getForumPostFollowIcon
        _fun71919: for(var _fun71919_ip = 0; ; ) switch(_fun71919_ip) {
 0:
            options = argFoo;
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 7;
            entity = verify[entity];
            oscar = undefined;
            report = zulu.bind(oscar)(entity);
            tango = report.getAssetUriForEmbed;
            golf = _closure1_slot1;
            if(options) { _fun71919_ip = 60; continue _fun71919 }
 41:
            entity = 9;
            entity = verify[entity];
            entity = golf.bind(oscar)(entity);
            entity = tango.bind(report)(entity);
            _fun71919_ip = 77; continue _fun71919;
 60:
            zulu = 8;
            zulu = verify[zulu];
            zulu = golf.bind(oscar)(zulu);
            entity = tango.bind(report)(zulu);
 77:
            zulu = null;
            if(!(zulu == entity)) { _fun71919_ip = 174; continue _fun71919 }
 83:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            zulu = tango[zulu];
            tango = report.bind(oscar)(zulu);
            zulu = tango.captureMessage;
            verify = _closure1_slot2;
            if(options) { _fun71919_ip = 125; continue _fun71919 }
 116:
            mike = 9;
            mike = verify[mike];
            _fun71919_ip = 132; continue _fun71919;
 125:
            golf = 8;
            mike = verify[golf];
 132:
            golf = report.bind(oscar)(mike);
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = 'Forum follow is null. isFollowing: ';
            mike = ' icon: ';
            mike = oscar.bind(report)(options, mike, golf);
            mike = zulu.bind(tango)(mike);
 174:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: getShareIcon
        zulu = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 7;
        mike = oscar[mike];
        report = undefined;
        zulu = zulu.bind(report)(mike);
        mike = zulu.getAssetUriForEmbed;
        tango = _closure1_slot1;
        entity = 11;
        entity = oscar[entity];
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: createMediaPostSharePrompt
        entity = {};
        zulu = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 12;
        tango = golf[mike];
        oscar = undefined;
        tango = zulu.bind(oscar)(tango);
        options = tango.intl;
        report = options.string;
        tango = golf[mike];
        tango = zulu.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.5uAO7e;
        tango = report.bind(options)(tango);
        entity['title'] = tango;
        tango = golf[mike];
        tango = zulu.bind(oscar)(tango);
        offset = tango.intl;
        verify = offset.formatToParts;
        tango = golf[mike];
        tango = zulu.bind(oscar)(tango);
        tango = tango.t;
        options = tango.YtCu5u;
        tango = {};
        yankee = {};
        report = _closure1_slot1;
        foxtrot = 13;
        foxtrot = golf[foxtrot];
        backup = report.bind(oscar)(foxtrot);
        foxtrot = backup.getCreatorSupportArticleURL;
        romeo = _closure1_slot8;
        romeo = romeo.MEDIA_CHANNEL;
        romeo = foxtrot.bind(backup)(romeo);
        yankee['url'] = romeo;
        tango['helpArticleUrl'] = yankee;
        tango = verify.bind(offset)(options, tango);
        entity['subtitle'] = tango;
        tango = golf[mike];
        tango = zulu.bind(oscar)(tango);
        options = tango.intl;
        tango = options.string;
        mike = golf[mike];
        mike = zulu.bind(oscar)(mike);
        mike = mike.t;
        mike = mike.C5UQCw;
        mike = tango.bind(options)(mike);
        entity['cta'] = mike;
        mike = 7;
        tango = golf[mike];
        verify = zulu.bind(oscar)(tango);
        options = verify.getAssetUriForEmbed;
        tango = 14;
        tango = golf[tango];
        tango = report.bind(oscar)(tango);
        tango = options.bind(verify)(tango);
        entity['icon'] = tango;
        mike = golf[mike];
        tango = zulu.bind(oscar)(mike);
        zulu = tango.getAssetUriForEmbed;
        mike = 15;
        mike = golf[mike];
        mike = report.bind(oscar)(mike);
        mike = zulu.bind(tango)(mike);
        entity['closeIcon'] = mike;
        return entity;
    };
    var _closure1_slot14 = entity;
    tango = function(argFoo) { // Original name: createDefaultReaction
        _fun71922: for(var _fun71922_ip = 0; ; ) switch(_fun71922_ip) {
 0:
            entity = argFoo;
            tango = entity.defaultReactionEmoji;
            report = entity.customGuildEmoji;
            mike = null;
            oscar = mike != tango;
            entity = undefined;
            zulu = undefined;
            if(!oscar) { _fun71922_ip = 330; continue _fun71922 }
 31:
            oscar = tango.emojiId;
            golf = tango.emojiName;
            if(!(mike != oscar)) { _fun71922_ip = 54; continue _fun71922 }
 47:
            if(!(mike == report)) { _fun71922_ip = 180; continue _fun71922 }
 54:
            tango = mike != golf;
            zulu = undefined;
            if(!tango) { _fun71922_ip = 330; continue _fun71922 }
 66:
            tango = {};
            tango['id'] = entity;
            tango['name'] = golf;
            yankee = false;
            tango['animated'] = yankee;
            romeo = _closure1_slot1;
            offset = _closure1_slot2;
            verify = 18;
            verify = offset[verify];
            romeo = romeo.bind(entity)(verify);
            verify = romeo.getURL;
            verify = verify.bind(romeo)(golf);
            tango['src'] = verify;
            verify = _closure1_slot0;
            options = 17;
            options = offset[options];
            offset = verify.bind(entity)(options);
            verify = offset.getAccessibleEmojiDisplayName;
            options = {};
            options['id'] = entity;
            options['name'] = golf;
            options['animated'] = yankee;
            golf = 0;
            golf = verify.bind(offset)(yankee, golf, options);
            tango['displayName'] = golf;
            zulu = tango;
            _fun71922_ip = 330; continue _fun71922;
 180:
            tango = {};
            tango['id'] = oscar;
            tango['name'] = entity;
            golf = report.animated;
            tango['animated'] = golf;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            options = 16;
            options = verify[options];
            yankee = offset.bind(entity)(options);
            offset = yankee.getEmojiURL;
            options = {};
            options['id'] = oscar;
            romeo = report.animated;
            options['animated'] = romeo;
            romeo = 48;
            options['size'] = romeo;
            options = offset.bind(yankee)(options);
            tango['src'] = options;
            options = _closure1_slot0;
            golf = 17;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.getAccessibleEmojiDisplayName;
            golf = {};
            golf['id'] = oscar;
            oscar = report.name;
            golf['name'] = oscar;
            report = report.animated;
            golf['animated'] = report;
            oscar = false;
            report = 0;
            report = options.bind(verify)(oscar, report, golf);
            tango['displayName'] = report;
            zulu = tango;
 330:
            mike = mike != zulu;
            entity = undefined;
            if(!mike) { _fun71922_ip = 358; continue _fun71922 }
 339:
            mike = {'emoji': null, 'me': false, 'count': 0};
            mike['emoji'] = zulu;
            entity = mike;
 358:
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    entity = function(argFoo) { // Original name: ForumPostActionsData
        _fun71923: for(var _fun71923_ip = 0; ; ) switch(_fun71923_ip) {
 0:
            mike = argFoo;
            oscar = mike.channel;
            var _closure2_slot0 = oscar;
            options = mike.hasReactions;
            offset = mike.defaultReaction;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 20;
            verify = report[mike];
            tango = undefined;
            foxtrot = zulu.bind(tango)(verify);
            romeo = foxtrot.useStateFromStores;
            verify = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = verify;
            oscar = oscar.id;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot6;
                mike = zulu.hasJoined;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = romeo.bind(foxtrot)(yankee, oscar, verify);
            mike = report[mike];
            verify = zulu.bind(tango)(mike);
            report = verify.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.shouldDisplayPrompt;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = report.bind(verify)(zulu, mike);
            var _closure2_slot1 = verify;
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                _fun71926: for(var _fun71926_ip = 0; ; ) switch(_fun71926_ip) {
 0:
                    mike = _closure2_slot1;
                    zulu = undefined;
                    entity = undefined;
                    if(!mike) { _fun71926_ip = 25; continue _fun71926 }
 14:
                    mike = _closure1_slot14;
                    entity = mike.bind(zulu)();
 25:
                    return entity;
                }
            };
            report = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot11;
            entity = {};
            verify = _closure1_slot10;
            entity['numDisplayedReactions'] = verify;
            entity['isFollowing'] = oscar;
            verify = _closure1_slot12;
            verify = verify.bind(tango)(oscar);
            entity['followIcon'] = verify;
            backup = _closure1_slot0;
            verify = _closure1_slot2;
            yankee = 12;
            romeo = verify[yankee];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            verify = verify[yankee];
            verify = backup.bind(tango)(verify);
            verify = verify.t;
            if(oscar) { _fun71923_ip = 266; continue _fun71923 }
 253:
            oscar = verify.0rQinJ;
            oscar = romeo.bind(foxtrot)(oscar);
            _fun71923_ip = 277; continue _fun71923;
 266:
            verify = verify.OtF+lJ;
            oscar = romeo.bind(foxtrot)(verify);
 277:
            entity['followLabel'] = oscar;
            oscar = _closure1_slot13;
            oscar = oscar.bind(tango)();
            entity['shareIcon'] = oscar;
            foxtrot = _closure1_slot0;
            oscar = _closure1_slot2;
            verify = oscar[yankee];
            verify = foxtrot.bind(tango)(verify);
            romeo = verify.intl;
            verify = romeo.string;
            oscar = oscar[yankee];
            oscar = foxtrot.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.Ej3B3d;
            oscar = verify.bind(romeo)(oscar);
            entity['shareLabel'] = oscar;
            entity['defaultReaction'] = offset;
            oscar = undefined;
            if(options) { _fun71923_ip = 440; continue _fun71923 }
 362:
            verify = null;
            romeo = verify == offset;
            options = undefined;
            if(romeo) { _fun71923_ip = 379; continue _fun71923 }
 373:
            options = offset.emoji;
 379:
            options = verify != options;
            oscar = undefined;
            if(options) { _fun71923_ip = 440; continue _fun71923 }
 388:
            offset = _closure1_slot0;
            golf = _closure1_slot2;
            options = golf[yankee];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            golf = golf[yankee];
            golf = offset.bind(tango)(golf);
            golf = golf.t;
            golf = golf.xpOyTE;
            oscar = options.bind(verify)(golf);
 440:
            entity['addReactLabel'] = oscar;
            entity['sharePrompt'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: ForumPostActionsWithDefaultReaction
        _fun71927: for(var _fun71927_ip = 0; ; ) switch(_fun71927_ip) {
 0:
            entity = argFoo;
            oscar = entity.channel;
            tango = undefined;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            zulu = oscar.parent_id;
            var _closure2_slot0 = zulu;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            options = 20;
            report = report[options];
            offset = golf.bind(tango)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot7;
            golf = new Array(1);
            golf[0] = report;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                _fun71928: for(var _fun71928_ip = 0; ; ) switch(_fun71928_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getChannel;
                    entity = _closure2_slot0;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun71928_ip = 41; continue _fun71928 }
 35:
                    entity = mike.defaultReactionEmoji;
 41:
                    return entity;
                }
            };
            verify = verify.bind(offset)(golf, zulu, report);
            var _closure2_slot1 = verify;
            zulu = null;
            report = zulu == verify;
            zulu = undefined;
            if(report) { _fun71927_ip = 113; continue _fun71927 }
 107:
            zulu = verify.emojiId;
 113:
            _closure2_slot2 = zulu;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            report = report[options];
            offset = golf.bind(tango)(report);
            options = offset.useStateFromStores;
            report = _closure1_slot4;
            golf = new Array(1);
            golf[0] = report;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                _fun71929: for(var _fun71929_ip = 0; ; ) switch(_fun71929_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun71929_ip = 38; continue _fun71929 }
 16:
                    tango = _closure1_slot4;
                    zulu = tango.getUsableCustomEmojiById;
                    mike = _closure2_slot2;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            options = options.bind(offset)(golf, zulu, report);
            _closure2_slot3 = options;
            golf = _closure1_slot3;
            report = golf.useMemo;
            zulu = new Array(2);
            zulu[0] = verify;
            zulu[1] = options;
            mike = function() {
                zulu = _closure1_slot15;
                mike = {};
                tango = _closure2_slot1;
                mike['defaultReactionEmoji'] = tango;
                entity = _closure2_slot3;
                mike['customGuildEmoji'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            report = report.bind(golf)(mike, zulu);
            zulu = _closure1_slot9;
            mike = _closure1_slot16;
            entity = {};
            golf = false;
            entity['hasReactions'] = golf;
            entity['channel'] = oscar;
            entity['defaultReaction'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    options = golf[report];
    options = verify.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.HelpdeskArticles;
    var _closure1_slot8 = options;
    options = 6;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    var _closure1_slot10 = report;
    report = 19;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.makeKeyedDataComponent;
    report = 'postActions';
    report = options.bind(verify)(report);
    var _closure1_slot11 = report;
    report = 21;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: ForumPostActions
        _fun71931: for(var _fun71931_ip = 0; ; ) switch(_fun71931_ip) {
 0:
            mike = argFoo;
            mike = mike.message;
            zulu = mike.getChannelId;
            verify = zulu.bind(mike)();
            var _closure2_slot0 = verify;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 20;
            tango = oscar[tango];
            oscar = undefined;
            options = report.bind(oscar)(tango);
            golf = options.useStateFromStores;
            tango = _closure1_slot7;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(1);
            tango[0] = verify;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(options)(report, entity, tango);
            report = null;
            tango = report != golf;
            entity = null;
            if(!tango) { _fun71931_ip = 183; continue _fun71931 }
 99:
            tango = golf.isForumPost;
            tango = tango.bind(golf)();
            entity = null;
            if(!tango) { _fun71931_ip = 183; continue _fun71931 }
 114:
            mike = mike.reactions;
            tango = mike.length;
            mike = 0;
            if(!(mike === tango)) { _fun71931_ip = 153; continue _fun71931 }
 131:
            report = _closure1_slot9;
            tango = _closure1_slot17;
            mike = {};
            mike['channel'] = golf;
            mike = report.bind(oscar)(tango, mike);
            _fun71931_ip = 180; continue _fun71931;
 153:
            report = _closure1_slot9;
            tango = _closure1_slot16;
            zulu = {};
            options = true;
            zulu['hasReactions'] = options;
            zulu['channel'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 180:
            entity = mike;
 183:
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['createDefaultReaction'] = tango;
    mike = function(argFoo) { // Original name: createForumPostActions
        _fun71933: for(var _fun71933_ip = 0; ; ) switch(_fun71933_ip) {
 0:
            entity = argFoo;
            golf = entity.isFollowing;
            mike = entity.hasReactions;
            tango = entity.defaultReaction;
            entity = entity.showMediaPostSharePrompt;
            zulu = _closure1_slot12;
            verify = undefined;
            options = zulu.bind(verify)(golf);
            zulu = _closure1_slot13;
            oscar = zulu.bind(verify)();
            zulu = undefined;
            if(mike) { _fun71933_ip = 135; continue _fun71933 }
 54:
            offset = null;
            yankee = offset == tango;
            mike = undefined;
            if(yankee) { _fun71933_ip = 71; continue _fun71933 }
 65:
            mike = tango.emoji;
 71:
            mike = offset != mike;
            zulu = undefined;
            if(mike) { _fun71933_ip = 135; continue _fun71933 }
 80:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 12;
            offset = foxtrot[mike];
            offset = romeo.bind(verify)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            mike = foxtrot[mike];
            mike = romeo.bind(verify)(mike);
            mike = mike.t;
            mike = mike.xpOyTE;
            zulu = offset.bind(yankee)(mike);
 135:
            mike = undefined;
            if(!entity) { _fun71933_ip = 148; continue _fun71933 }
 140:
            entity = _closure1_slot14;
            mike = entity.bind(verify)();
 148:
            entity = {};
            offset = _closure1_slot10;
            entity['numDisplayedReactions'] = offset;
            entity['isFollowing'] = golf;
            entity['followIcon'] = options;
            foxtrot = _closure1_slot0;
            options = _closure1_slot2;
            offset = 12;
            yankee = options[offset];
            yankee = foxtrot.bind(verify)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            options = options[offset];
            options = foxtrot.bind(verify)(options);
            options = options.t;
            if(golf) { _fun71933_ip = 229; continue _fun71933 }
 216:
            golf = options.0rQinJ;
            golf = yankee.bind(romeo)(golf);
            _fun71933_ip = 240; continue _fun71933;
 229:
            options = options.OtF+lJ;
            golf = yankee.bind(romeo)(options);
 240:
            entity['followLabel'] = golf;
            entity['shareIcon'] = oscar;
            options = _closure1_slot0;
            report = _closure1_slot2;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = report[offset];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.Ej3B3d;
            report = oscar.bind(golf)(report);
            entity['shareLabel'] = report;
            entity['defaultReaction'] = tango;
            entity['addReactLabel'] = zulu;
            entity['sharePrompt'] = mike;
            return entity;
        }
    };
    zulu['createForumPostActions'] = mike;
    return entity;
})();