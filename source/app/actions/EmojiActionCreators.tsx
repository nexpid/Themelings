// app/actions/EmojiActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _updateEmoji
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 206; continue _fun00001 }
 13:
                    offset = mike.guildId;
                    golf = mike.emojiId;
                    verify = mike.name;
                    options = mike.roles;
                    oscar = undefined;
                    SaveGenerator(address=41);
 39:
                    return oscar;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 203; continue _fun00001 }
 50: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 9;
                    zulu = report[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    report = zulu.HTTP;
                    tango = report.patch;
                    zulu = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.GUILD_EMOJI;
                    golf = yankee.bind(romeo)(offset, golf);
                    zulu['url'] = golf;
                    golf = {};
                    golf['name'] = verify;
                    golf['roles'] = options;
                    zulu['body'] = golf;
                    golf = true;
                    zulu['oldFormErrors'] = golf;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=141);
 139:
                    return zulu;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 150; continue _fun00001 }
 147: // try_end0
                    return zulu;
 150:
                    return zulu;
 153: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 10;
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    kilo = tango;
                    backup = report;
                    zulu = new kilo[zulu](backup, foxtrot);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 203:
                    return mike;
 206:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: dedupeFavoriteEmojis
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot6;
            zulu = zulu.totalUnavailableGuilds;
            tango = 0;
            if(!(!(zulu > tango))) { _fun00004_ip = 146; continue _fun00003 }
 25:
            report = _closure1_slot5;
            zulu = report.isConnected;
            zulu = zulu.bind(report)();
            if(zulu) { _fun00004_ip = 44; continue _fun00003 }
 42:
            return entity;
 44:
            report = entity.map;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot4;
                    entity = zulu.getCustomEmojiById;
                    entity = entity.bind(zulu)(tango);
                    zulu = null;
                    if(!(zulu == entity)) { _fun00006_ip = 60; continue _fun00005 }
 27:
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 11;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.getByName;
                    entity = mike.bind(zulu)(tango);
 60:
                    return entity;
                }
            };
            options = report.bind(entity)(zulu);
            oscar = options.filter;
            verify = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 12;
            zulu = golf[zulu];
            report = undefined;
            zulu = verify.bind(report)(zulu);
            zulu = zulu.isNotNullish;
            zulu = oscar.bind(options)(zulu);
            oscar = _closure1_slot1;
            mike = 13;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            zulu = mike.bind(report)(zulu);
            mike = zulu.keys;
            yankee = mike.bind(zulu)();
            mike = new Array(0);
            romeo = mike;
            offset = 0;
            zulu = arraySpread(romeo, yankee, offset);
            return mike;
 146:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getFavoriteEmojiNameOrId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            tango = null;
            mike = tango == zulu;
            entity = null;
            if(mike) { _fun00008_ip = 91; continue _fun00007 }
 14:
            mike = zulu.id;
            if(!(tango == mike)) { _fun00008_ip = 79; continue _fun00007 }
 23:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 11;
            oscar = oscar[report];
            report = undefined;
            options = golf.bind(report)(oscar);
            golf = options.convertSurrogateToBase;
            oscar = zulu.surrogates;
            oscar = golf.bind(options)(oscar);
            golf = tango == oscar;
            if(golf) { _fun00008_ip = 76; continue _fun00007 }
 71:
            report = oscar.name;
 76:
            mike = report;
 79:
            if(!(tango == mike)) { _fun00008_ip = 88; continue _fun00007 }
 83:
            mike = zulu.name;
 88:
            entity = mike;
 91:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MAX_FAVORITES;
    var _closure1_slot8 = golf;
    tango = tango.UserSettingsDelay;
    var _closure1_slot9 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/EmojiActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: setDiversityColor
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 6;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        oscar = tango.PreloadedUserSettingsActionCreators;
        report = oscar.updateAsync;
        zulu = _closure1_slot9;
        tango = zulu.FREQUENT_USER_ACTION;
        zulu = 'textAndImages';
        mike = function(argFoo) {
            mike = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            tango = zulu.StringValue;
            zulu = tango.create;
            zulu = zulu.bind(tango)();
            mike['diversitySurrogate'] = zulu;
            zulu = mike.diversitySurrogate;
            mike = _closure2_slot0;
            zulu['value'] = mike;
            return entity;
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['setDiversityColor'] = tango;
    tango = function(argFoo) { // Original name: fetchEmoji
        options = argFoo;
        var _closure2_slot0 = options;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        zulu = report[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        tango = golf.dispatch;
        zulu = {};
        verify = 'EMOJI_FETCH';
        zulu['type'] = verify;
        zulu['guildId'] = options;
        zulu = tango.bind(golf)(zulu);
        tango = _closure1_slot0;
        zulu = 9;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golf = _closure1_slot7;
        oscar = golf.GUILD_EMOJIS;
        oscar = oscar.bind(golf)(options);
        zulu['url'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'EMOJI_FETCH_SUCCESS';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            tango = argFoo;
            tango = tango.body;
            entity['emojis'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'EMOJI_FETCH_FAILURE';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['fetchEmoji'] = tango;
    tango = function(argFoo) { // Original name: uploadEmoji
        mike = argFoo;
        offset = mike.guildId;
        var _closure2_slot0 = offset;
        options = mike.image;
        golf = mike.name;
        oscar = mike.roles;
        zulu = _closure1_slot1;
        verify = _closure1_slot2;
        mike = 8;
        mike = verify[mike];
        tango = undefined;
        yankee = zulu.bind(tango)(mike);
        zulu = yankee.dispatch;
        mike = {};
        romeo = 'EMOJI_UPLOAD_START';
        mike['type'] = romeo;
        mike['guildId'] = offset;
        mike = zulu.bind(yankee)(mike);
        zulu = _closure1_slot0;
        mike = 9;
        mike = verify[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {};
        verify = _closure1_slot7;
        report = verify.GUILD_EMOJIS;
        report = report.bind(verify)(offset);
        mike['url'] = report;
        report = {};
        report['image'] = options;
        report['name'] = golf;
        report['roles'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'EMOJI_UPLOAD_STOP';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'EMOJI_UPLOAD_STOP';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['uploadEmoji'] = tango;
    tango = function(argFoo, argBar) { // Original name: deleteEmoji
        golf = argFoo;
        oscar = argBar;
        mike = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        entity = report[entity];
        zulu = undefined;
        options = mike.bind(zulu)(entity);
        mike = options.dispatch;
        entity = {};
        verify = 'EMOJI_DELETE';
        entity['type'] = verify;
        entity['guildId'] = golf;
        entity['emojiId'] = oscar;
        entity = mike.bind(options)(entity);
        mike = _closure1_slot0;
        entity = 9;
        entity = report[entity];
        entity = mike.bind(zulu)(entity);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot7;
        tango = report.GUILD_EMOJI;
        tango = tango.bind(report)(golf, oscar);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['deleteEmoji'] = tango;
    tango = function() { // Original name: updateEmoji
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateEmoji'] = tango;
    tango = function(argFoo) { // Original name: favoriteEmoji
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = _closure1_slot12;
            entity = undefined;
            tango = argFoo;
            report = report.bind(entity)(tango);
            var _closure2_slot0 = report;
            tango = null;
            if(!(tango != report)) { _fun00010_ip = 89; continue _fun00009 }
 29:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 6;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.FrecencyUserSettingsActionCreators;
            report = oscar.updateAsync;
            zulu = _closure1_slot9;
            tango = zulu.INFREQUENT_USER_ACTION;
            zulu = 'favoriteEmojis';
            mike = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure1_slot11;
                    entity = zulu.emojis;
                    offset = undefined;
                    entity = mike.bind(offset)(entity);
                    zulu['emojis'] = entity;
                    mike = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 14;
                    entity = tango[entity];
                    tango = mike.bind(offset)(entity);
                    mike = tango.size;
                    entity = zulu.emojis;
                    mike = mike.bind(tango)(entity);
                    entity = _closure1_slot8;
                    if(!(!(mike >= entity))) { _fun00012_ip = 129; continue _fun00011 }
 73:
                    report = zulu.emojis;
                    tango = report.includes;
                    entity = _closure2_slot0;
                    entity = tango.bind(report)(entity);
                    entity = !entity;
                    if(!entity) { _fun00012_ip = 124; continue _fun00011 }
 102:
                    tango = zulu.emojis;
                    zulu = tango.push;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    entity = undefined;
 124:
                    _fun00012_ip = 278; continue _fun00011;
 129:
                    zulu = _closure1_slot1;
                    yankee = _closure1_slot2;
                    mike = 15;
                    mike = yankee[mike];
                    tango = zulu.bind(offset)(mike);
                    zulu = tango.show;
                    mike = {};
                    oscar = _closure1_slot0;
                    report = 16;
                    golf = yankee[report];
                    golf = oscar.bind(offset)(golf);
                    romeo = golf.intl;
                    options = romeo.string;
                    golf = yankee[report];
                    golf = oscar.bind(offset)(golf);
                    golf = golf.t;
                    golf = golf.+XYXtb;
                    golf = options.bind(romeo)(golf);
                    mike['title'] = golf;
                    golf = yankee[report];
                    golf = oscar.bind(offset)(golf);
                    options = golf.intl;
                    golf = options.formatToPlainString;
                    report = yankee[report];
                    report = oscar.bind(offset)(report);
                    report = report.t;
                    oscar = report.JaIyFh;
                    report = {};
                    verify = _closure1_slot8;
                    report['count'] = verify;
                    report = golf.bind(options)(oscar, report);
                    mike['body'] = report;
                    mike = zulu.bind(tango)(mike);
                    entity = false;
 278:
                    return entity;
                }
            };
            mike = report.bind(oscar)(zulu, mike, tango);
 89:
            return entity;
        }
    };
    zulu['favoriteEmoji'] = tango;
    mike = function(argFoo) { // Original name: unfavoriteEmoji
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = _closure1_slot12;
            entity = undefined;
            tango = argFoo;
            report = report.bind(entity)(tango);
            var _closure2_slot0 = report;
            tango = null;
            if(!(tango != report)) { _fun00014_ip = 89; continue _fun00013 }
 29:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 6;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.FrecencyUserSettingsActionCreators;
            report = oscar.updateAsync;
            zulu = _closure1_slot9;
            tango = zulu.INFREQUENT_USER_ACTION;
            zulu = 'favoriteEmojis';
            mike = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot11;
                    mike = zulu.emojis;
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    zulu['emojis'] = mike;
                    report = zulu.emojis;
                    tango = report.includes;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(mike);
                    if(mike) { _fun00016_ip = 59; continue _fun00015 }
 55:
                    mike = false;
                    return mike;
 59:
                    report = zulu.emojis;
                    tango = report.filter;
                    mike = function(argFoo) {
                        mike = _closure2_slot0;
                        entity = argFoo;
                        entity = mike !== entity;
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    zulu['emojis'] = mike;
                    return entity;
                }
            };
            mike = report.bind(oscar)(zulu, mike, tango);
 89:
            return entity;
        }
    };
    zulu['unfavoriteEmoji'] = mike;
    return entity;
})();