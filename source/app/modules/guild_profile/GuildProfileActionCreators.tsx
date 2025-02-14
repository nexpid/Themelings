// app/modules/guild_profile/GuildProfileActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildProfileActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: getGuildProfile
        _fun90604: for(var _fun90604_ip = 0; ; ) switch(_fun90604_ip) {
 0:
            offset = argFoo;
            report = argBar;
            var _closure2_slot0 = offset;
            zulu = null;
            if(!(zulu != offset)) { _fun90604_ip = 309; continue _fun90604 }
 21:
            oscar = _closure1_slot3;
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
            if(!romeo) { _fun90604_ip = 92; continue _fun90604 }
 89:
            golf = yankee;
 92:
            verify = verify - golf;
            if(!entity) { _fun90604_ip = 124; continue _fun90604 }
 99:
            if(report) { _fun90604_ip = 124; continue _fun90604 }
 102:
            golf = mike.Promise;
            entity = golf.resolve;
            entity = entity.bind(golf)(zulu);
            _fun90604_ip = 307; continue _fun90604;
 124:
            if(!(zulu != oscar)) { _fun90604_ip = 163; continue _fun90604 }
 128:
            golf = 60000;
            if(!(!(verify > golf))) { _fun90604_ip = 163; continue _fun90604 }
 138:
            if(report) { _fun90604_ip = 163; continue _fun90604 }
 141:
            report = mike.Promise;
            mike = report.resolve;
            mike = mike.bind(report)(oscar);
            _fun90604_ip = 304; continue _fun90604;
 163:
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            report = 2;
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
            report = 3;
            report = verify[report];
            report = oscar.bind(golf)(report);
            golf = report.HTTP;
            oscar = golf.get;
            report = {};
            verify = _closure1_slot4;
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
                entity = 4;
                entity = report[entity];
                tango = undefined;
                oscar = zulu.bind(tango)(entity);
                zulu = oscar.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zulu.bind(oscar)(entity);
                zulu = _closure1_slot1;
                mike = 2;
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
                _fun90606: for(var _fun90606_ip = 0; ; ) switch(_fun90606_ip) {
 0:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 5;
                    mike = tango[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.APIError;
                    mike = oscar.prototype;
                    report = Object.create(mike, {constructor: {value: oscar}});
                    verify = argFoo;
                    offset = report;
                    mike = new offset[oscar](verify, options);
                    report = mike instanceof Object ? mike : report;
                    mike = _closure1_slot1;
                    entity = 2;
                    entity = tango[entity];
                    tango = mike.bind(zulu)(entity);
                    zulu = tango.dispatch;
                    mike = {};
                    entity = 'GUILD_PROFILE_FETCH_FAILURE';
                    mike['type'] = entity;
                    entity = _closure2_slot0;
                    mike['guildId'] = entity;
                    entity = report.getAnyErrorMessage;
                    golf = entity.bind(report)();
                    entity = null;
                    options = entity != golf;
                    oscar = 'Unknown Error';
                    if(!options) { _fun90606_ip = 126; continue _fun90606 }
 123:
                    oscar = golf;
 126:
                    mike['error'] = oscar;
                    report = report.code;
                    mike['errorCode'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
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
    mike = function(argFoo, argBar) { // Original name: saveGuildProfile
        _fun90607: for(var _fun90607_ip = 0; ; ) switch(_fun90607_ip) {
 0:
            yankee = argFoo;
            golf = argBar;
            var _closure2_slot0 = yankee;
            zulu = _closure1_slot3;
            mike = zulu.getIsUpdating;
            mike = mike.bind(zulu)(yankee);
            if(mike) { _fun90607_ip = 214; continue _fun90607 }
 38:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 2;
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
            mike = 3;
            mike = verify[mike];
            mike = oscar.bind(options)(mike);
            tango = mike.HTTP;
            zulu = tango.patch;
            mike = {};
            offset = _closure1_slot4;
            report = offset.GUILD_PROFILE;
            report = report.bind(offset)(yankee);
            mike['url'] = report;
            report = 4;
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
                entity = 4;
                entity = report[entity];
                tango = undefined;
                oscar = zulu.bind(tango)(entity);
                zulu = oscar.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zulu.bind(oscar)(entity);
                zulu = _closure1_slot1;
                mike = 2;
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
                _fun90609: for(var _fun90609_ip = 0; ; ) switch(_fun90609_ip) {
 0:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 5;
                    mike = tango[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.APIError;
                    mike = oscar.prototype;
                    report = Object.create(mike, {constructor: {value: oscar}});
                    verify = argFoo;
                    offset = report;
                    mike = new offset[oscar](verify, options);
                    report = mike instanceof Object ? mike : report;
                    mike = _closure1_slot1;
                    entity = 2;
                    entity = tango[entity];
                    tango = mike.bind(zulu)(entity);
                    zulu = tango.dispatch;
                    mike = {};
                    entity = 'GUILD_PROFILE_UPDATE_FAILURE';
                    mike['type'] = entity;
                    entity = _closure2_slot0;
                    mike['guildId'] = entity;
                    entity = report.getAnyErrorMessage;
                    golf = entity.bind(report)();
                    entity = null;
                    options = entity != golf;
                    oscar = 'Unknown Error';
                    if(!options) { _fun90609_ip = 126; continue _fun90609 }
 123:
                    oscar = golf;
 126:
                    mike['error'] = oscar;
                    report = report.code;
                    mike['errorCode'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            _fun90607_ip = 235; continue _fun90607;
 214:
            mike = global;
            tango = mike.Promise;
            zulu = tango.resolve;
            mike = null;
            entity = zulu.bind(tango)(mike);
 235:
            return entity;
        }
    };
    zulu['saveGuildProfile'] = mike;
    return entity;
})();