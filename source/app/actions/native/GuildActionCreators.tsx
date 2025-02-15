// app/actions/native/GuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    tango = function(argFoo, argBar) { // Original name: batchChannelUpdate
        _fun126143: for(var _fun126143_ip = 0; ; ) switch(_fun126143_ip) {
 0:
            report = argBar;
            mike = report.length;
            entity = 0;
            if(!(!(mike <= entity))) { _fun126143_ip = 155; continue _fun126143 }
 17:
            zulu = function() { // Original name: onEnd
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 1;
            entity = golf[entity];
            tango = undefined;
            options = mike.bind(tango)(entity);
            mike = options.dispatch;
            entity = {};
            verify = 'GUILD_SETTINGS_SUBMIT';
            entity['type'] = verify;
            entity = mike.bind(options)(entity);
            mike = _closure1_slot0;
            entity = 2;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            tango = entity.HTTP;
            mike = tango.patch;
            entity = {};
            options = _closure1_slot3;
            golf = options.GUILD_CHANNELS;
            oscar = argFoo;
            oscar = golf.bind(options)(oscar);
            entity['url'] = oscar;
            entity['body'] = report;
            report = true;
            entity['oldFormErrors'] = report;
            entity['rejectWithError'] = report;
            mike = mike.bind(tango)(entity);
            entity = mike.then;
            entity = entity.bind(mike)(zulu, zulu);
 155:
            entity = undefined;
            return entity;
        }
    };
    mike = function(argFoo, argBar) { // Original name: batchRoleUpdate
        _fun126145: for(var _fun126145_ip = 0; ; ) switch(_fun126145_ip) {
 0:
            report = argBar;
            mike = report.length;
            entity = 0;
            if(!(!(mike <= entity))) { _fun126145_ip = 155; continue _fun126145 }
 17:
            zulu = function() { // Original name: onEnd
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'GUILD_SETTINGS_SUBMIT_SUCCESS';
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 1;
            entity = golf[entity];
            tango = undefined;
            options = mike.bind(tango)(entity);
            mike = options.dispatch;
            entity = {};
            verify = 'GUILD_SETTINGS_SUBMIT';
            entity['type'] = verify;
            entity = mike.bind(options)(entity);
            mike = _closure1_slot0;
            entity = 2;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            tango = entity.HTTP;
            mike = tango.patch;
            entity = {};
            options = _closure1_slot3;
            golf = options.GUILD_ROLES;
            oscar = argFoo;
            oscar = golf.bind(options)(oscar);
            entity['url'] = oscar;
            entity['body'] = report;
            report = true;
            entity['oldFormErrors'] = report;
            entity['rejectWithError'] = report;
            mike = mike.bind(tango)(entity);
            entity = mike.then;
            entity = entity.bind(mike)(zulu, zulu);
 155:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot3 = report;
    report = {};
    report['batchChannelUpdate'] = tango;
    report['batchRoleUpdate'] = mike;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'actions/native/GuildActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['batchChannelUpdate'] = tango;
    zulu['batchRoleUpdate'] = mike;
    return entity;
})();