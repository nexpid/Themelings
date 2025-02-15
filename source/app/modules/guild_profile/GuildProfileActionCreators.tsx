// app/modules/guild_profile/GuildProfileActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchGuildTopGames
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 140; continue _fun00001 }
 10:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    verify = _closure1_slot5;
                    options = verify.GUILD_TOP_GAMES;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 137; continue _fun00001 }
 90:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.buildTopGamesFromServer;
                    zulu = mike.body;
                    zulu = zulu.top_games;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 137:
                    return mike;
 140:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildProfileActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: getGuildProfile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            report = argBar;
            var _closure2_slot0 = offset;
            zulu = null;
            if(!(zulu != offset)) { _fun00004_ip = 309; continue _fun00003 }
 21:
            oscar = _closure1_slot4;
            entity = oscar.getIsFetching;
            entity = entity.bind(oscar)(offset);
            mike = oscar.getLastSyncTimestamp;
            yankee = mike.bind(oscar)(offset);
            mike = oscar.getProfile;
            oscar = mike.bind(oscar)(offset);
            mike = global;
            verify = mike.Date;
            golf = verify.now;
            verify = golf.bind(verify)();
            romeo = zulu != yankee;
            golf = 0;
            if(!romeo) { _fun00004_ip = 92; continue _fun00003 }
 89:
            golf = yankee;
 92:
            verify = verify - golf;
            if(!entity) { _fun00004_ip = 124; continue _fun00003 }
 99:
            if(report) { _fun00004_ip = 124; continue _fun00003 }
 102:
            golf = mike.Promise;
            entity = golf.resolve;
            entity = entity.bind(golf)(zulu);
            _fun00004_ip = 307; continue _fun00003;
 124:
            if(!(zulu != oscar)) { _fun00004_ip = 163; continue _fun00003 }
 128:
            golf = 60000;
            if(!(!(verify > golf))) { _fun00004_ip = 163; continue _fun00003 }
 138:
            if(report) { _fun00004_ip = 163; continue _fun00003 }
 141:
            report = mike.Promise;
            mike = report.resolve;
            mike = mike.bind(report)(oscar);
            _fun00004_ip = 304; continue _fun00003;
 163:
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            report = 3;
            report = verify[report];
            golf = undefined;
            yankee = oscar.bind(golf)(report);
            oscar = yankee.dispatch;
            report = {};
            romeo = 'GUILD_PROFILE_FETCH';
            report['type'] = romeo;
            report['guildId'] = offset;
            report = oscar.bind(yankee)(report);
            oscar = _closure1_slot0;
            report = 4;
            report = verify[report];
            report = oscar.bind(golf)(report);
            golf = report.HTTP;
            oscar = golf.get;
            report = {};
            verify = _closure1_slot5;
            options = verify.GUILD_PROFILE;
            options = options.bind(verify)(offset);
            report['url'] = options;
            options = false;
            report['rejectWithError'] = options;
            golf = oscar.bind(golf)(report);
            oscar = golf.then;
            report = function(argFoo) {
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tango = undefined;
                oscar = zulu.bind(tango)(entity);
                zulu = oscar.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zulu.bind(oscar)(entity);
                zulu = _closure1_slot1;
                mike = 3;
                mike = report[mike];
                tango = zulu.bind(tango)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'GUILD_PROFILE_FETCH_SUCCESS';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['guildId'] = report;
                mike['profile'] = entity;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = oscar.bind(golf)(report);
            report = oscar.catch;
            tango = function(argFoo) {
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                oscar = mike.APIError;
                mike = oscar.prototype;
                tango = Object.create(mike, {constructor: {value: oscar}});
                golf = argFoo;
                options = tango;
                mike = new options[oscar](golf, oscar);
                tango = mike instanceof Object ? mike : tango;
                mike = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.dispatch;
                entity = {};
                report = 'GUILD_PROFILE_FETCH_FAILURE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['guildId'] = report;
                entity['error'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = null;
                return entity;
            };
            mike = report.bind(oscar)(tango);
 304:
            entity = mike;
 307:
            return entity;
 309:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    zulu['getGuildProfile'] = tango;
    tango = function(argFoo, argBar) { // Original name: saveGuildProfile
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = argFoo;
            golf = argBar;
            var _closure2_slot0 = yankee;
            zulu = _closure1_slot4;
            mike = zulu.getIsUpdating;
            mike = mike.bind(zulu)(yankee);
            if(mike) { _fun00006_ip = 212; continue _fun00005 }
 38:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 3;
            mike = verify[mike];
            options = undefined;
            tango = zulu.bind(options)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GUILD_PROFILE_UPDATE';
            mike['type'] = oscar;
            mike['guildId'] = yankee;
            mike['updates'] = golf;
            mike = zulu.bind(tango)(mike);
            oscar = _closure1_slot0;
            mike = 4;
            mike = verify[mike];
            mike = oscar.bind(options)(mike);
            tango = mike.HTTP;
            zulu = tango.patch;
            mike = {};
            offset = _closure1_slot5;
            report = offset.GUILD_PROFILE;
            report = report.bind(offset)(yankee);
            mike['url'] = report;
            report = 5;
            report = verify[report];
            oscar = oscar.bind(options)(report);
            report = oscar.buildGuildProfileUpdateForServer;
            report = report.bind(oscar)(golf);
            mike['body'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tango = undefined;
                oscar = zulu.bind(tango)(entity);
                zulu = oscar.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zulu.bind(oscar)(entity);
                zulu = _closure1_slot1;
                mike = 3;
                mike = report[mike];
                tango = zulu.bind(tango)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'GUILD_PROFILE_UPDATE_SUCCESS';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['guildId'] = report;
                mike['profile'] = entity;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                oscar = mike.APIError;
                mike = oscar.prototype;
                tango = Object.create(mike, {constructor: {value: oscar}});
                golf = argFoo;
                options = tango;
                mike = new options[oscar](golf, oscar);
                tango = mike instanceof Object ? mike : tango;
                mike = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.dispatch;
                entity = {};
                report = 'GUILD_PROFILE_UPDATE_FAILURE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['guildId'] = report;
                entity['error'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = null;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun00006_ip = 233; continue _fun00005;
 212:
            mike = global;
            tango = mike.Promise;
            zulu = tango.resolve;
            mike = null;
            entity = zulu.bind(tango)(mike);
 233:
            return entity;
        }
    };
    zulu['saveGuildProfile'] = tango;
    mike = function() { // Original name: fetchGuildTopGames
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchGuildTopGames'] = mike;
    return entity;
})();