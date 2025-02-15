// app/modules/soundboard/SoundboardActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _uploadSound
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
                    if(zulu) { _fun00002_ip = 214; continue _fun00001 }
 13:
                    golf = mike.guildId;
                    backup = mike.name;
                    foxtrot = mike.sound;
                    romeo = mike.volume;
                    yankee = mike.emojiId;
                    offset = mike.emojiName;
                    oscar = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscar;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 211; continue _fun00001 }
 62:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 5;
                    zulu = options[zulu];
                    zulu = report.bind(oscar)(zulu);
                    options = zulu.HTTP;
                    report = options.post;
                    zulu = {};
                    kilo = _closure1_slot6;
                    verify = kilo.GUILD_SOUNDBOARD_SOUNDS;
                    verify = verify.bind(kilo)(golf);
                    zulu['url'] = verify;
                    verify = {};
                    verify['name'] = backup;
                    verify['sound'] = foxtrot;
                    verify['volume'] = romeo;
                    verify['emoji_id'] = yankee;
                    verify['emoji_name'] = offset;
                    zulu['body'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=162);
 160:
                    return zulu;
 162:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 208; continue _fun00001 }
 168:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 6;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.soundboardSoundFromAPI;
                    tango = zulu.body;
                    tango = report.bind(oscar)(tango, golf);
                    return tango;
 208:
                    return zulu;
 211:
                    return mike;
 214:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    entity = function() { // Original name: _updateSound
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 210; continue _fun00003 }
 13:
                    golf = mike.guildId;
                    kilo = mike.soundId;
                    foxtrot = mike.name;
                    romeo = mike.volume;
                    yankee = mike.emojiId;
                    offset = mike.emojiName;
                    oscar = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscar;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 207; continue _fun00003 }
 62:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 5;
                    zulu = options[zulu];
                    zulu = report.bind(oscar)(zulu);
                    options = zulu.HTTP;
                    report = options.patch;
                    zulu = {};
                    backup = _closure1_slot6;
                    verify = backup.GUILD_SOUNDBOARD_SOUND;
                    verify = verify.bind(backup)(golf, kilo);
                    zulu['url'] = verify;
                    verify = {};
                    verify['name'] = foxtrot;
                    verify['volume'] = romeo;
                    verify['emoji_id'] = yankee;
                    verify['emoji_name'] = offset;
                    zulu['body'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=158);
 156:
                    return zulu;
 158:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 204; continue _fun00003 }
 164:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 6;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.soundboardSoundFromAPI;
                    tango = zulu.body;
                    tango = report.bind(oscar)(tango, golf);
                    return tango;
 204:
                    return zulu;
 207:
                    return mike;
 210:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _deleteSound
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 102; continue _fun00005 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.del;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot6;
                    options = verify.GUILD_SOUNDBOARD_SOUND;
                    golf = argFoo;
                    oscar = argBar;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['url'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 99; continue _fun00005 }
 96:
                    return zulu;
 99:
                    return mike;
 102:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _fetchSoundGuildData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 205; continue _fun00007 }
 10:
                    verify = argFoo;
                    options = argBar;
                    report = undefined;
                    tango = undefined;
 20: // try_start_0
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 5;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    golf = mike.HTTP;
                    zulu = golf.get;
                    mike = {};
                    yankee = _closure1_slot6;
                    offset = yankee.SOUNDBOARD_SOUND_GUILD_DATA;
                    options = offset.bind(yankee)(verify, options);
                    mike['url'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(golf)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 152; continue _fun00007 }
 96:
                    tango = mike;
                    golf = mike.body;
                    zulu = null;
                    golf = zulu != golf;
                    if(!golf) { _fun00008_ip = 149; continue _fun00007 }
 113:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    oscar = 14;
                    oscar = options[oscar];
                    golf = golf.bind(report)(oscar);
                    oscar = golf.makeDiscoverableGuild;
                    tango = tango.body;
                    zulu = oscar.bind(golf)(tango);
 149: // try_end0
                    return zulu;
 152:
                    return mike;
 155: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 8;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    backup = zulu;
                    foxtrot = tango;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 205:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MAX_FAVORITES;
    var _closure1_slot7 = golf;
    tango = tango.UserSettingsDelay;
    var _closure1_slot8 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 257; continue _fun00009 }
 10:
                    options = argFoo;
 13: // try_start_0
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.get;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.SOUNDBOARD_DEFAULT_SOUNDS;
                    mike['url'] = golf;
                    golf = {};
                    golf['guild_ids'] = options;
                    mike['query'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 168; continue _fun00009 }
 96:
                    golf = mike.body;
                    oscar = golf.map;
                    report = function(argFoo) {
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 6;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.soundboardSoundFromAPI;
                        mike = _closure1_slot5;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    golf = oscar.bind(golf)(report);
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 7;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                    tango['type'] = options;
                    tango['soundboardSounds'] = golf;
                    tango = report.bind(oscar)(tango);
 165: // try_end0
                    return zulu;
 168:
                    return mike;
 171: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 7;
                    mike = oscar[mike];
                    zulu = undefined;
                    options = report.bind(zulu)(mike);
                    golf = options.dispatch;
                    mike = {};
                    verify = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE';
                    mike['type'] = verify;
                    mike = golf.bind(options)(mike);
                    mike = 8;
                    mike = oscar[mike];
                    mike = report.bind(zulu)(mike);
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    yankee = zulu;
                    offset = tango;
                    mike = new yankee[mike](offset, verify);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 257:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: _resolveOnActionCompleted
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            report = function() { // Original name: onSoundboardActionCompleted
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.unsubscribe;
                tango = _closure2_slot0;
                zulu = _closure3_slot1;
                zulu = report.bind(oscar)(tango, zulu);
                zulu = global;
                tango = zulu.setTimeout;
                zulu = _closure3_slot0;
                mike = 0;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            var _closure3_slot1 = report;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.subscribe;
            mike = _closure2_slot0;
            mike = zulu.bind(tango)(mike, report);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot10 = tango;
    tango = function(argFoo) { // Original name: _maybeFetchDefaultSounds
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot4;
            entity = zulu.shouldFetchDefaultSounds;
            entity = entity.bind(zulu)();
            if(entity) { _fun00012_ip = 42; continue _fun00011 }
 22:
            entity = global;
            zulu = entity.Promise;
            entity = zulu.resolve;
            entity = entity.bind(zulu)();
            return entity;
 42:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            zulu = undefined;
            report = tango.bind(zulu)(entity);
            tango = report.dispatch;
            entity = {};
            oscar = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS';
            entity['type'] = oscar;
            entity = tango.bind(report)(entity);
            tango = _closure1_slot10;
            entity = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
            entity = tango.bind(zulu)(entity);
            mike = _closure1_slot9;
            mike = mike.bind(zulu)(zulu);
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    tango = function() { // Original name: _maybeFetchGuildSoundboardSounds
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.getGuildIdsToFetchSoundsFor;
            report = entity.bind(zulu)();
            zulu = report.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun00014_ip = 139; continue _fun00013 }
 46:
            zulu = _closure1_slot10;
            entity = 'SOUNDBOARD_SOUNDS_RECEIVED';
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            golf = oscar[mike];
            verify = zulu.bind(tango)(golf);
            options = verify.dispatch;
            golf = {};
            offset = 'GUILD_SOUNDBOARD_FETCH';
            golf['type'] = offset;
            golf = options.bind(verify)(golf);
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'REQUEST_SOUNDBOARD_SOUNDS';
            mike['type'] = oscar;
            mike['guildIds'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
 139:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundboard/SoundboardActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        entity = global;
        zulu = entity.Promise;
        mike = zulu.all;
        entity = _closure1_slot11;
        report = undefined;
        oscar = entity.bind(report)();
        entity = new Array(2);
        entity[0] = oscar;
        tango = _closure1_slot12;
        tango = tango.bind(report)();
        entity[1] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['maybeFetchSoundboardSounds'] = tango;
    tango = function() { // Original name: uploadSound
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['uploadSound'] = tango;
    tango = function() { // Original name: updateSound
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateSound'] = tango;
    tango = function() { // Original name: deleteSound
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteSound'] = tango;
    tango = function(argFoo) { // Original name: addFavoriteSound
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 10;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        oscar = tango.FrecencyUserSettingsActionCreators;
        report = oscar.updateAsync;
        zulu = _closure1_slot8;
        tango = zulu.INFREQUENT_USER_ACTION;
        zulu = 'favoriteSoundboardSounds';
        mike = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = argFoo;
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 11;
                entity = tango[entity];
                offset = undefined;
                tango = mike.bind(offset)(entity);
                mike = tango.size;
                entity = zulu.soundIds;
                mike = mike.bind(tango)(entity);
                entity = _closure1_slot7;
                if(!(!(mike >= entity))) { _fun00016_ip = 108; continue _fun00015 }
 52:
                report = zulu.soundIds;
                tango = report.includes;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                entity = !entity;
                if(!entity) { _fun00016_ip = 103; continue _fun00015 }
 81:
                tango = zulu.soundIds;
                zulu = tango.push;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                entity = undefined;
 103:
                _fun00016_ip = 257; continue _fun00015;
 108:
                zulu = _closure1_slot1;
                yankee = _closure1_slot2;
                mike = 12;
                mike = yankee[mike];
                tango = zulu.bind(offset)(mike);
                zulu = tango.show;
                mike = {};
                oscar = _closure1_slot0;
                report = 13;
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
                verify = _closure1_slot7;
                report['count'] = verify;
                report = golf.bind(options)(oscar, report);
                mike['body'] = report;
                mike = zulu.bind(tango)(mike);
                entity = false;
 257:
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['addFavoriteSound'] = tango;
    tango = function(argFoo) { // Original name: removeFavoriteSound
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 10;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        oscar = tango.FrecencyUserSettingsActionCreators;
        report = oscar.updateAsync;
        zulu = _closure1_slot8;
        tango = zulu.INFREQUENT_USER_ACTION;
        zulu = 'favoriteSoundboardSounds';
        mike = function(argFoo) {
            mike = argFoo;
            tango = mike.soundIds;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['soundIds'] = entity;
            entity = undefined;
            return entity;
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['removeFavoriteSound'] = tango;
    tango = function() { // Original name: fetchSoundGuildData
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSoundGuildData'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: playSoundLocally
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
        mike['type'] = report;
        report = argBar;
        mike['sound'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBaz;
        mike['trigger'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['playSoundLocally'] = tango;
    tango = function(argFoo, argBar) { // Original name: reportSoundStartedPlaying
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_START';
        mike['type'] = report;
        report = argFoo;
        mike['soundId'] = report;
        report = argBar;
        mike['userId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['reportSoundStartedPlaying'] = tango;
    tango = function(argFoo, argBar) { // Original name: reportSoundFinishedPlaying
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_END';
        mike['type'] = report;
        report = argFoo;
        mike['soundId'] = report;
        report = argBar;
        mike['userId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['reportSoundFinishedPlaying'] = tango;
    tango = function(argFoo) { // Original name: updateUserSoundboardVolume
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SOUNDBOARD_SET_VOLUME';
        mike['type'] = report;
        report = argFoo;
        mike['volume'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateUserSoundboardVolume'] = tango;
    mike = function(argFoo) { // Original name: muteCustomJoinSound
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SOUNDBOARD_MUTE_JOIN_SOUND';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['muteCustomJoinSound'] = mike;
    return entity;
})();