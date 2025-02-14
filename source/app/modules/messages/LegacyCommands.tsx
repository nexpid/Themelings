// app/modules/messages/LegacyCommands.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    offset = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: executeCommand
        tango = argBar;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 10;
        zulu = zulu[mike];
        mike = undefined;
        report = report.bind(mike)(zulu);
        zulu = report.trackWithMetadata;
        entity = _closure1_slot6;
        mike = entity.SLASH_COMMAND_USED;
        entity = {};
        oscar = argFoo;
        entity['command'] = oscar;
        entity = zulu.bind(report)(mike, entity);
        zulu = tango.action;
        mike = argBaz;
        entity = argCorge;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    report = global;
    verify = report.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = offset.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot6 = options;
    options = tango.MARKDOWN_SPOILER_WRAPPER;
    var _closure1_slot7 = options;
    tango = tango.ME;
    var _closure1_slot8 = tango;
    tango = /\\([*?+\/])/g;
    var _closure1_slot9 = tango;
    tango = {};
    options = {};
    verify = function() { // Original name: action
        entity = {};
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        zulu = mike.EnableTTSCommand;
        mike = zulu.getSetting;
        mike = mike.bind(zulu)();
        entity['tts'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['tts'] = options;
    options = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        mike = global;
        mike = mike.HermesInternal;
        tango = mike.concat;
        zulu = '_';
        mike = argFoo;
        mike = tango.bind(zulu)(mike, zulu);
        entity['content'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['me'] = options;
    options = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        mike = global;
        mike = mike.HermesInternal;
        report = mike.concat;
        tango = '';
        zulu = argFoo;
        mike = ' (╯°□°)╯︵ ┻━┻';
        zulu = report.bind(tango)(zulu, mike);
        mike = zulu.trim;
        mike = mike.bind(zulu)();
        entity['content'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['tableflip'] = options;
    options = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        mike = global;
        mike = mike.HermesInternal;
        report = mike.concat;
        tango = '';
        zulu = argFoo;
        mike = ' ┬─┬ノ( º _ ºノ)';
        zulu = report.bind(tango)(zulu, mike);
        mike = zulu.trim;
        mike = mike.bind(zulu)();
        entity['content'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['unflip'] = options;
    options = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        mike = global;
        mike = mike.HermesInternal;
        report = mike.concat;
        tango = '';
        zulu = argFoo;
        mike = ' ¯\\_(ツ)_/¯';
        zulu = report.bind(tango)(zulu, mike);
        mike = zulu.trim;
        mike = mike.bind(zulu)();
        entity['content'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['shrug'] = options;
    options = {};
    verify = function(argFoo, argBar) { // Original name: action
        _fun100412: for(var _fun100412_ip = 0; ; ) switch(_fun100412_ip) {
 0:
            entity = argBar;
            mike = entity.channel;
            zulu = mike.guild_id;
            entity = null;
            if(!(entity == zulu)) { _fun100412_ip = 23; continue _fun100412 }
 19:
            entity = undefined;
            return entity;
 23:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.changeNickname;
            offset = mike.guild_id;
            verify = mike.id;
            options = _closure1_slot8;
            golf = argFoo;
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = {};
            mike = '';
            entity['content'] = mike;
            return entity;
        }
    };
    options['action'] = verify;
    tango['nick'] = options;
    options = {};
    verify = 6;
    yankee = golf[verify];
    foxtrot = offset.bind(entity)(yankee);
    romeo = foxtrot.anyScopeRegex;
    yankee = /^\+:(.+?): *$/;
    yankee = romeo.bind(foxtrot)(yankee);
    options['match'] = yankee;
    yankee = function(argFoo, argBar) { // Original name: action
        _fun100413: for(var _fun100413_ip = 0; ; ) switch(_fun100413_ip) {
 0:
            options = argFoo;
            mike = argBar;
            entity = mike.isEdit;
            mike = mike.channel;
            if(entity) { _fun100413_ip = 248; continue _fun100413 }
 23:
            report = _closure1_slot5;
            tango = report.hasPresent;
            entity = mike.id;
            entity = tango.bind(report)(entity);
            if(!entity) { _fun100413_ip = 248; continue _fun100413 }
 52:
            report = _closure1_slot5;
            tango = report.getMessages;
            entity = mike.id;
            tango = tango.bind(report)(entity);
            entity = tango.last;
            entity = entity.bind(tango)();
            tango = null;
            if(!(tango != entity)) { _fun100413_ip = 248; continue _fun100413 }
 91:
            report = entity.id;
            if(!(tango != report)) { _fun100413_ip = 248; continue _fun100413 }
 103:
            golf = _closure1_slot4;
            oscar = golf.getDisambiguatedEmojiContext;
            report = mike.guild_id;
            golf = oscar.bind(golf)(report);
            oscar = golf.getByName;
            report = options.trim;
            offset = report.bind(options)();
            verify = offset.slice;
            options = 2;
            report = -1;
            report = verify.bind(offset)(options, report);
            golf = oscar.bind(golf)(report);
            if(!(tango != golf)) { _fun100413_ip = 248; continue _fun100413 }
 168:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 7;
            zulu = verify[zulu];
            oscar = undefined;
            report = options.bind(oscar)(zulu);
            tango = report.addReaction;
            zulu = mike.id;
            mike = entity.id;
            entity = 8;
            entity = verify[entity];
            oscar = options.bind(oscar)(entity);
            entity = oscar.toReactionEmoji;
            entity = entity.bind(oscar)(golf);
            entity = tango.bind(report)(zulu, mike, entity);
            entity = {};
            mike = '';
            entity['content'] = mike;
            return entity;
 248:
            entity = undefined;
            return entity;
        }
    };
    options['action'] = yankee;
    tango['reaction'] = options;
    options = {};
    verify = golf[verify];
    yankee = offset.bind(entity)(verify);
    offset = yankee.anyScopeRegex;
    verify = /^s\\/((?:.+?)[^\\]|.)\\/(.*)/;
    verify = offset.bind(yankee)(verify);
    options['match'] = verify;
    verify = function(argFoo, argBar) { // Original name: action
        _fun100414: for(var _fun100414_ip = 0; ; ) switch(_fun100414_ip) {
 0:
            golf = argFoo;
            mike = argBar;
            entity = mike.isEdit;
            mike = mike.channel;
            if(entity) { _fun100414_ip = 426; continue _fun100414 }
 25:
            report = _closure1_slot5;
            tango = report.getLastEditableMessage;
            entity = mike.id;
            entity = tango.bind(report)(entity);
            tango = null;
            if(!(tango != entity)) { _fun100414_ip = 414; continue _fun100414 }
 59:
            report = entity.id;
            if(!(tango != report)) { _fun100414_ip = 414; continue _fun100414 }
 71:
            report = global;
            verify = report.Array;
            options = verify.from;
            offset = golf.match;
            report = this;
            report = report.match;
            report = report.regex;
            report = offset.bind(golf)(report);
            if(!(tango == report)) { _fun100414_ip = 118; continue _fun100414 }
 114:
            report = new Array(0);
 118:
            offset = options.bind(verify)(report);
            verify = _closure1_slot3;
            report = undefined;
            options = 3;
            verify = verify.bind(report)(offset, options);
            options = 1;
            romeo = verify[options];
            options = 2;
            offset = verify[options];
            yankee = romeo.replace;
            verify = _closure1_slot9;
            options = function(argFoo, argBar) {
                entity = argBar;
                return entity;
            };
            yankee = yankee.bind(romeo)(verify, options);
            options = offset.replace;
            oscar = function(argFoo, argBar) {
                entity = argBar;
                return entity;
            };
            foxtrot = options.bind(offset)(verify, oscar);
            options = foxtrot.endsWith;
            oscar = '/g';
            options = options.bind(foxtrot)(oscar);
            offset = foxtrot;
            oscar = false;
            if(!options) { _fun100414_ip = 238; continue _fun100414 }
 217:
            romeo = foxtrot.slice;
            verify = 0;
            options = -2;
            offset = romeo.bind(foxtrot)(verify, options);
            oscar = true;
 238:
            verify = entity.content;
            if(oscar) { _fun100414_ip = 259; continue _fun100414 }
 246:
            oscar = verify.replace;
            oscar = oscar.bind(verify)(yankee, offset);
            _fun100414_ip = 271; continue _fun100414;
 259:
            options = verify.replaceAll;
            oscar = options.bind(verify)(yankee, offset);
 271:
            if(!(tango != oscar)) { _fun100414_ip = 283; continue _fun100414 }
 275:
            tango = '';
            if(!(tango === oscar)) { _fun100414_ip = 344; continue _fun100414 }
 283:
            tango = entity.attachments;
            options = tango.length;
            tango = 0;
            if(!(tango === options)) { _fun100414_ip = 344; continue _fun100414 }
 300:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 9;
            tango = verify[tango];
            offset = options.bind(report)(tango);
            verify = offset.deleteMessage;
            options = mike.id;
            tango = entity.id;
            tango = verify.bind(offset)(options, tango);
            _fun100414_ip = 402; continue _fun100414;
 344:
            tango = entity.content;
            if(!(golf !== tango)) { _fun100414_ip = 402; continue _fun100414 }
 353:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 9;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.editMessage;
            zulu = mike.id;
            mike = entity.id;
            entity = {};
            entity['content'] = oscar;
            entity = tango.bind(report)(zulu, mike, entity);
 402:
            entity = {};
            mike = '';
            entity['content'] = mike;
            return entity;
 414:
            entity = {};
            mike = '';
            entity['content'] = mike;
            return entity;
 426:
            entity = undefined;
            return entity;
        }
    };
    options['action'] = verify;
    tango['searchReplace'] = options;
    options = {};
    verify = function(argFoo) { // Original name: action
        entity = {};
        tango = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        zulu = tango.bind(zulu)(mike);
        mike = zulu.trim;
        mike = mike.bind(zulu)();
        entity['content'] = mike;
        return entity;
    };
    options['action'] = verify;
    tango['spoiler'] = options;
    var _closure1_slot10 = tango;
    verify = report.Object;
    options = verify.setPrototypeOf;
    report = null;
    report = options.bind(verify)(tango, report);
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/LegacyCommands.tsx';
    report = oscar.bind(golf)(report);
    zulu['COMMANDS'] = tango;
    mike = function(argFoo, argBar) { // Original name: handleLegacyCommands
        _fun100418: for(var _fun100418_ip = 0; ; ) switch(_fun100418_ip) {
 0:
            oscar = argFoo;
            romeo = _closure1_slot10;
            entity = undefined;
            options = null;
            golf = undefined;
            for(verify in romeo)
 24:
            {
 33:
                report = verify;
                zulu = _closure1_slot10;
                tango = zulu[report];
                zulu = tango.match;
                if(options == zulu) { _fun100418_ip = 24; continue _fun100418 }
 54:
                zulu = tango.match;
                backup = zulu.regex;
                golf = backup;
                if(options == golf) { _fun100418_ip = 24; continue _fun100418 }
 73:
                zulu = backup.test;
                zulu = zulu.bind(backup)(oscar);
                golf = backup;
                if(!zulu) { _fun100418_ip = 24; continue _fun100418 }
 89:
                zulu = _closure1_slot11;
                kilo = argBar;
                echo = undefined;
                result = report;
                output = tango;
                sizing = oscar;
                mike = echo[zulu](result, output, sizing, kilo, backup);
                return mike;
            }
 113:
            return entity;
        }
    };
    zulu['handleLegacyCommands'] = mike;
    return entity;
})();