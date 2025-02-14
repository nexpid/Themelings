// app/modules/channel_prompts/RandomEmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: isGuildSafe
        _fun92377: for(var _fun92377_ip = 0; ; ) switch(_fun92377_ip) {
 0:
            tango = _closure1_slot6;
            mike = tango.getGuild;
            entity = argFoo;
            tango = mike.bind(tango)(entity);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun92377_ip = 75; continue _fun92377 }
 29:
            report = tango.nsfwLevel;
            mike = _closure1_slot8;
            mike = mike.DEFAULT;
            mike = report === mike;
            if(mike) { _fun92377_ip = 72; continue _fun92377 }
 52:
            tango = tango.nsfwLevel;
            zulu = _closure1_slot8;
            zulu = zulu.SAFE;
            mike = tango === zulu;
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _sendRandomStickerOrEmoji
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun92380: for(var _fun92380_ip = 0; ; ) switch(_fun92380_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    yankee = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun92380_ip = 919; continue _fun92380 }
 18:
                    var _closure4_slot0 = yankee;
                    zulu = undefined;
                    var _closure4_slot1 = zulu;
                    var _closure4_slot2 = zulu;
                    mike = yankee.getGuildId;
                    oscar = mike.bind(yankee)();
                    _closure4_slot1 = oscar;
                    romeo = null;
                    if(!(romeo != oscar)) { _fun92380_ip = 913; continue _fun92380 }
 55:
                    report = _closure1_slot6;
                    mike = report.getGuild;
                    mike = mike.bind(report)(oscar);
                    if(!(romeo != mike)) { _fun92380_ip = 913; continue _fun92380 }
 79:
                    report = _closure1_slot7;
                    mike = report.getCurrentUser;
                    mike = mike.bind(report)();
                    _closure4_slot2 = mike;
                    if(!(romeo != mike)) { _fun92380_ip = 913; continue _fun92380 }
 103:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 7;
                    mike = oscar[mike];
                    report = report.bind(zulu)(mike);
                    mike = report.fetchStickerPacks;
                    mike = mike.bind(report)();
                    SaveGenerator(address=137);
 135:
                    return mike;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun92380_ip = 916; continue _fun92380 }
 146:
                    report = global;
                    verify = report.Array;
                    options = verify.from;
                    foxtrot = _closure1_slot5;
                    oscar = foxtrot.getAllStickersIterator;
                    oscar = oscar.bind(foxtrot)();
                    foxtrot = options.bind(verify)(oscar);
                    options = foxtrot.filter;
                    oscar = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 8;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.MetaStickerType;
                        entity = entity.GUILD;
                        entity = mike === entity;
                        return entity;
                    };
                    verify = options.bind(foxtrot)(oscar);
                    options = verify.filter;
                    oscar = function(argFoo) {
                        _fun92382: for(var _fun92382_ip = 0; ; ) switch(_fun92382_ip) {
 0:
                            oscar = argFoo;
                            zulu = _closure1_slot12;
                            entity = oscar.guild_id;
                            tango = undefined;
                            entity = zulu.bind(tango)(entity);
                            if(!entity) { _fun92382_ip = 69; continue _fun92382 }
 25:
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 9;
                            mike = report[mike];
                            report = zulu.bind(tango)(mike);
                            tango = report.isSendableSticker;
                            zulu = _closure4_slot2;
                            mike = _closure4_slot0;
                            entity = tango.bind(report)(oscar, zulu, mike);
 69:
                            return entity;
                        }
                    };
                    verify = options.bind(verify)(oscar);
                    options = verify.sort;
                    oscar = function(argFoo, argBar) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        entity = -entity;
                        return entity;
                    };
                    oscar = options.bind(verify)(oscar);
                    verify = oscar.length;
                    options = _closure1_slot10;
                    if(!(!(verify > options))) { _fun92380_ip = 733; continue _fun92380 }
 246:
                    verify = _closure1_slot6;
                    options = verify.getGuildIds;
                    backup = options.bind(verify)();
                    verify = backup.filter;
                    options = _closure1_slot12;
                    backup = verify.bind(backup)(options);
                    verify = backup.map;
                    options = function(argFoo) {
                        zulu = _closure1_slot4;
                        mike = zulu.getUsableGuildEmoji;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = verify.bind(backup)(options);
                    options = verify.flat;
                    backup = options.bind(verify)();
                    verify = backup.filter;
                    options = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getEmojiUnavailableReason;
                        entity = {};
                        report = argFoo;
                        entity['emoji'] = report;
                        oscar = _closure4_slot0;
                        entity['channel'] = oscar;
                        report = _closure4_slot1;
                        entity['guildId'] = report;
                        tango = _closure1_slot9;
                        tango = tango.CHAT;
                        entity['intention'] = tango;
                        mike = mike.bind(zulu)(entity);
                        entity = null;
                        entity = entity == mike;
                        return entity;
                    };
                    backup = verify.bind(backup)(options);
                    verify = backup.sort;
                    options = function(argFoo, argBar) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        entity = -entity;
                        return entity;
                    };
                    options = verify.bind(backup)(options);
                    backup = options.length;
                    verify = _closure1_slot11;
                    if(!(!(backup > verify))) { _fun92380_ip = 533; continue _fun92380 }
 352:
                    verify = foxtrot.filter;
                    golf = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 8;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.MetaStickerType;
                        entity = entity.STANDARD;
                        entity = mike === entity;
                        return entity;
                    };
                    verify = verify.bind(foxtrot)(golf);
                    backup = report.Math;
                    foxtrot = backup.floor;
                    kilo = report.Math;
                    golf = kilo.random;
                    kilo = golf.bind(kilo)();
                    golf = verify.length;
                    golf = kilo * golf;
                    golf = foxtrot.bind(backup)(golf);
                    golf = verify[golf];
                    golf = golf.id;
                    sizing = new Array(1);
                    sizing[0] = golf;
                    verify = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    golf = 11;
                    golf = foxtrot[golf];
                    kilo = verify.bind(zulu)(golf);
                    backup = kilo.sendStickers;
                    foxtrot = yankee.id;
                    verify = {};
                    golf = {};
                    output = yankee.getGuildId;
                    result = output.bind(yankee)();
                    echo = romeo != result;
                    output = undefined;
                    if(!echo) { _fun92380_ip = 485; continue _fun92380 }
 482:
                    output = result;
 485:
                    golf['guild_id'] = output;
                    output = yankee.id;
                    golf['channel_id'] = output;
                    golf['message_id'] = offset;
                    verify['messageReference'] = golf;
                    source = '';
                    sequence = kilo;
                    vacuum = foxtrot;
                    control = sizing;
                    update = verify;
                    golf = sequence[backup](vacuum, control, source, update, echo);
                    _fun92380_ip = 913; continue _fun92380;
 533:
                    foxtrot = report.Math;
                    verify = foxtrot.floor;
                    sizing = report.Math;
                    kilo = sizing.pow;
                    backup = report.Math;
                    golf = backup.random;
                    backup = golf.bind(backup)();
                    golf = 2;
                    backup = kilo.bind(sizing)(backup, golf);
                    golf = options.length;
                    golf = backup * golf;
                    golf = verify.bind(foxtrot)(golf);
                    golf = options[golf];
                    verify = _closure1_slot1;
                    sizing = _closure1_slot2;
                    options = 11;
                    options = sizing[options];
                    kilo = verify.bind(zulu)(options);
                    backup = kilo.sendMessage;
                    foxtrot = yankee.id;
                    options = 13;
                    options = sizing[options];
                    verify = verify.bind(zulu)(options);
                    options = verify.parse;
                    golf = golf.allNamesString;
                    verify = options.bind(verify)(yankee, golf);
                    options = {};
                    golf = {};
                    sizing = yankee.getGuildId;
                    output = sizing.bind(yankee)();
                    result = romeo != output;
                    sizing = undefined;
                    if(!result) { _fun92380_ip = 687; continue _fun92380 }
 684:
                    sizing = output;
 687:
                    golf['guild_id'] = sizing;
                    sizing = yankee.id;
                    golf['channel_id'] = sizing;
                    golf['message_id'] = offset;
                    options['messageReference'] = golf;
                    source = false;
                    sequence = kilo;
                    vacuum = foxtrot;
                    control = verify;
                    update = options;
                    golf = sequence[backup](vacuum, control, source, update, echo);
                    _fun92380_ip = 913; continue _fun92380;
 733:
                    options = report.Math;
                    golf = options.floor;
                    backup = report.Math;
                    foxtrot = backup.pow;
                    verify = report.Math;
                    report = verify.random;
                    verify = report.bind(verify)();
                    report = 2;
                    verify = foxtrot.bind(backup)(verify, report);
                    report = oscar.length;
                    report = verify * report;
                    report = golf.bind(options)(report);
                    report = oscar[report];
                    report = report.id;
                    verify = new Array(1);
                    verify[0] = report;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 11;
                    tango = oscar[tango];
                    options = report.bind(zulu)(tango);
                    golf = options.sendStickers;
                    oscar = yankee.id;
                    report = {};
                    tango = {};
                    foxtrot = yankee.getGuildId;
                    foxtrot = foxtrot.bind(yankee)();
                    backup = romeo != foxtrot;
                    romeo = undefined;
                    if(!backup) { _fun92380_ip = 870; continue _fun92380 }
 867:
                    romeo = foxtrot;
 870:
                    tango['guild_id'] = romeo;
                    yankee = yankee.id;
                    tango['channel_id'] = yankee;
                    tango['message_id'] = offset;
                    report['messageReference'] = tango;
                    source = '';
                    sequence = options;
                    vacuum = oscar;
                    control = verify;
                    update = report;
                    tango = sequence[golf](vacuum, control, source, update, echo);
 913:
                    return zulu;
 916:
                    return mike;
 919:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.GuildNSFWContentLevel;
    var _closure1_slot8 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.EmojiIntention;
    var _closure1_slot9 = golf;
    var _closure1_slot10 = tango;
    tango = 10;
    var _closure1_slot11 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_prompts/RandomEmojiUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: sendRandomStickerOrEmoji
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendRandomStickerOrEmoji'] = mike;
    return entity;
})();