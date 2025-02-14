// app/modules/rpc/server/commands/guilds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot3 = mike;
    mike = {};
    offset = tango.GET_GUILD;
    golf = {};
    verify = 2;
    yankee = oscar[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        tango = tango.bind(report)();
        entity['guild_id'] = tango;
        tango = report.number;
        oscar = tango.bind(report)();
        report = oscar.min;
        tango = 0;
        oscar = report.bind(oscar)(tango);
        report = oscar.max;
        tango = 60;
        tango = report.bind(oscar)(tango);
        entity['timeout'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109563: for(var _fun109563_ip = 0; ; ) switch(_fun109563_ip) {
 0:
            mike = argFoo;
            oscar = mike.socket;
            report = mike.server;
            mike = mike.args;
            zulu = mike.guild_id;
            var _closure2_slot0 = zulu;
            tango = mike.timeout;
            mike = undefined;
            if(!(tango === mike)) { _fun109563_ip = 46; continue _fun109563 }
 44:
            tango = 0;
 46:
            zulu = report.storeWait;
            mike = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(report)(oscar, mike, tango);
            zulu = tango.catch;
            mike = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot3;
                entity = entity.GET_GUILD_TIMED_OUT;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                report = 'Request to get guild timed out.';
                golf = mike;
                oscar = zulu;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun109566: for(var _fun109566_ip = 0; ; ) switch(_fun109566_ip) {
 0:
                    mike = argFoo;
                    zulu = null;
                    if(!(zulu != mike)) { _fun109566_ip = 82; continue _fun109566 }
 9:
                    entity = {};
                    tango = mike.id;
                    entity['id'] = tango;
                    tango = mike.name;
                    entity['name'] = tango;
                    report = mike.getIconURL;
                    tango = 128;
                    tango = report.bind(mike)(tango);
                    report = zulu != tango;
                    zulu = null;
                    if(!report) { _fun109566_ip = 55; continue _fun109566 }
 52:
                    zulu = tango;
 55:
                    entity['icon_url'] = zulu;
                    zulu = new Array(0);
                    entity['members'] = zulu;
                    mike = mike.vanityURLCode;
                    entity['vanity_url_code'] = mike;
                    return entity;
 82:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot3;
                    entity = entity.INVALID_GUILD;
                    zulu['errorCode'] = entity;
                    report = _closure2_slot0;
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Invalid guild id: ';
                    oscar = mike.bind(entity)(report);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    options = mike;
                    golf = zulu;
                    entity = new options[tango](golf, oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    golf = tango.GET_GUILDS;
    tango = {};
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.OAuth2Scopes;
    verify = verify.RPC;
    tango['scope'] = verify;
    options = function() { // Original name: handler
        zulu = _closure1_slot2;
        entity = zulu.getGuilds;
        report = entity.bind(zulu)();
        entity = {};
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.map;
        mike = function(argFoo) {
            tango = argFoo;
            entity = {};
            mike = tango.id;
            entity['id'] = mike;
            mike = tango.name;
            entity['name'] = mike;
            zulu = tango.getIconURL;
            mike = 128;
            mike = zulu.bind(tango)(mike);
            entity['icon_url'] = mike;
            return entity;
        };
        mike = zulu.bind(tango)(report, mike);
        entity['guilds'] = mike;
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/guilds.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();