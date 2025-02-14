// app/modules/channel_text_area/slate/SlateUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    tango = function(argFoo) { // Original name: toRichValue
        _fun66917: for(var _fun66917_ip = 0; ; ) switch(_fun66917_ip) {
 0:
            tango = argFoo;
            entity = '';
            if(!(entity === tango)) { _fun66917_ip = 20; continue _fun66917 }
 11:
            entity = _closure1_slot0;
            _fun66917_ip = 53; continue _fun66917;
 20:
            zulu = tango.split;
            mike = '\n';
            tango = zulu.bind(tango)(mike);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = {};
                mike = 'line';
                entity['type'] = mike;
                zulu = {};
                mike = argFoo;
                zulu['text'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity['children'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 53:
            return entity;
        }
    };
    var _closure1_slot1 = tango;
    verify = global;
    golf = verify.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    oscar = verify.Object;
    report = oscar.freeze;
    options = verify.Object;
    golf = options.freeze;
    entity = {};
    offset = 'line';
    entity['type'] = offset;
    yankee = verify.Object;
    offset = yankee.freeze;
    foxtrot = verify.Object;
    romeo = foxtrot.freeze;
    verify = {};
    backup = '';
    verify['text'] = backup;
    romeo = romeo.bind(foxtrot)(verify);
    verify = new Array(1);
    verify[0] = romeo;
    verify = offset.bind(yankee)(verify);
    entity['children'] = verify;
    golf = golf.bind(options)(entity);
    entity = new Array(1);
    entity[0] = golf;
    entity = report.bind(oscar)(entity);
    var _closure1_slot0 = entity;
    report = argPlugh;
    entity = 0;
    oscar = report[entity];
    report = argBar;
    entity = undefined;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/channel_text_area/slate/SlateUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: createEmptyState
        entity = {};
        mike = '';
        entity['textValue'] = mike;
        zulu = {};
        tango = 'line';
        zulu['type'] = tango;
        tango = {};
        tango['text'] = mike;
        mike = new Array(1);
        mike[0] = tango;
        zulu['children'] = mike;
        mike = new Array(1);
        mike[0] = zulu;
        entity['richValue'] = mike;
        return entity;
    };
    zulu['createEmptyState'] = report;
    report = function(argFoo) { // Original name: createState
        tango = argFoo;
        entity = {};
        entity['textValue'] = tango;
        zulu = _closure1_slot1;
        mike = undefined;
        mike = zulu.bind(mike)(tango);
        entity['richValue'] = mike;
        return entity;
    };
    zulu['createState'] = report;
    zulu['toRichValue'] = tango;
    mike = function(argFoo) { // Original name: voidToOptionValue
        _fun66921: for(var _fun66921_ip = 0; ; ) switch(_fun66921_ip) {
 0:
            mike = argFoo;
            offset = mike.type;
            zulu = 'userMention';
            if(!(zulu !== offset)) { _fun66921_ip = 311; continue _fun66921 }
 21:
            tango = 'channelMention';
            if(!(tango !== offset)) { _fun66921_ip = 294; continue _fun66921 }
 32:
            report = 'soundboard';
            if(!(report !== offset)) { _fun66921_ip = 266; continue _fun66921 }
 43:
            oscar = 'roleMention';
            if(!(oscar !== offset)) { _fun66921_ip = 247; continue _fun66921 }
 54:
            golf = 'textMention';
            if(!(golf !== offset)) { _fun66921_ip = 230; continue _fun66921 }
 67:
            options = 'emoji';
            if(!(options !== offset)) { _fun66921_ip = 190; continue _fun66921 }
 75:
            verify = 'customEmoji';
            if(!(verify !== offset)) { _fun66921_ip = 133; continue _fun66921 }
 83:
            entity = 'testInlineVoid';
            if(!(entity !== offset)) { _fun66921_ip = 97; continue _fun66921 }
 93:
            entity = null;
            return entity;
 97:
            entity = global;
            yankee = entity.Error;
            entity = yankee.prototype;
            offset = Object.create(entity, {constructor: {value: yankee}});
            romeo = 'Unable to convert test types';
            foxtrot = offset;
            entity = new foxtrot[yankee](romeo, yankee);
            entity = entity instanceof Object ? entity : offset;
            throw entity;
 133:
            entity = {};
            entity['type'] = verify;
            verify = mike.emoji;
            verify = verify.emojiId;
            entity['emojiId'] = verify;
            verify = mike.emoji;
            verify = verify.name;
            entity['name'] = verify;
            verify = mike.emoji;
            verify = verify.animated;
            entity['animated'] = verify;
            return entity;
 190:
            entity = {};
            entity['type'] = options;
            options = mike.emoji;
            options = options.name;
            entity['name'] = options;
            options = mike.emoji;
            options = options.surrogate;
            entity['surrogate'] = options;
            return entity;
 230:
            entity = {};
            entity['type'] = golf;
            golf = mike.name;
            entity['text'] = golf;
            return entity;
 247:
            entity = {};
            entity['type'] = oscar;
            oscar = mike.roleId;
            entity['roleId'] = oscar;
            return entity;
 266:
            entity = {};
            entity['type'] = report;
            report = mike.guildId;
            entity['guildId'] = report;
            report = mike.soundId;
            entity['soundId'] = report;
            return entity;
 294:
            entity = {};
            entity['type'] = tango;
            tango = mike.channelId;
            entity['channelId'] = tango;
            return entity;
 311:
            entity = {};
            entity['type'] = zulu;
            mike = mike.userId;
            entity['userId'] = mike;
            return entity;
        }
    };
    zulu['voidToOptionValue'] = mike;
    return entity;
})();