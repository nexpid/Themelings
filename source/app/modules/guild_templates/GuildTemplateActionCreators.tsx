// app/modules/guild_templates/GuildTemplateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    mike = global;
    verify = mike.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    options = golf.Endpoints;
    var _closure1_slot3 = options;
    golf = golf.AnalyticEvents;
    var _closure1_slot4 = golf;
    mike = mike.Map;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: resolveGuildTemplate
        _fun65332: for(var _fun65332_ip = 0; ; ) switch(_fun65332_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            report = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 1;
            mike = mike[zulu];
            golf = undefined;
            report = report.bind(golf)(mike);
            mike = report.isDispatching;
            mike = mike.bind(report)();
            if(mike) { _fun65332_ip = 234; continue _fun65332 }
 50:
            report = _closure1_slot5;
            mike = report.get;
            mike = mike.bind(report)(oscar);
            report = null;
            if(!(report == mike)) { _fun65332_ip = 232; continue _fun65332 }
 73:
            report = _closure1_slot1;
            options = _closure1_slot2;
            zulu = options[zulu];
            verify = report.bind(golf)(zulu);
            report = verify.dispatch;
            zulu = {};
            offset = 'GUILD_TEMPLATE_RESOLVE';
            zulu['type'] = offset;
            zulu['code'] = oscar;
            zulu = report.bind(verify)(zulu);
            report = _closure1_slot0;
            zulu = 2;
            zulu = options[zulu];
            zulu = report.bind(golf)(zulu);
            golf = zulu.HTTP;
            report = golf.get;
            zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            verify = _closure1_slot3;
            options = verify.UNRESOLVED_GUILD_TEMPLATE;
            options = options.bind(verify)(oscar);
            zulu['url'] = options;
            options = report.bind(golf)(zulu);
            golf = options.then;
            report = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 3;
                mike = golf[mike];
                tango = undefined;
                verify = oscar.bind(tango)(mike);
                options = verify.track;
                entity = _closure1_slot4;
                zulu = entity.GUILD_TEMPLATE_RESOLVED;
                entity = {};
                mike = true;
                entity['resolved'] = mike;
                mike = _closure2_slot0;
                entity['guild_template_code'] = mike;
                offset = report.name;
                entity['guild_template_name'] = offset;
                offset = report.description;
                entity['guild_template_description'] = offset;
                offset = report.source_guild_id;
                entity['guild_template_guild_id'] = offset;
                entity = options.bind(verify)(zulu, entity);
                entity = 1;
                entity = golf[entity];
                options = oscar.bind(tango)(entity);
                zulu = options.dispatch;
                entity = {};
                verify = 'GUILD_TEMPLATE_RESOLVE_SUCCESS';
                entity['type'] = verify;
                entity['guildTemplate'] = report;
                entity['code'] = mike;
                entity = zulu.bind(options)(entity);
                entity = {};
                zulu = 4;
                zulu = golf[zulu];
                zulu = oscar.bind(tango)(zulu);
                zulu = zulu.bind(tango)(report);
                entity['guildTemplate'] = zulu;
                entity['code'] = mike;
                return entity;
            };
            zulu = function() {
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 3;
                mike = report[mike];
                zulu = undefined;
                options = tango.bind(zulu)(mike);
                golf = options.track;
                entity = _closure1_slot4;
                oscar = entity.GUILD_TEMPLATE_RESOLVED;
                entity = {};
                mike = false;
                entity['resolved'] = mike;
                mike = _closure2_slot0;
                entity['guild_template_code'] = mike;
                entity = golf.bind(options)(oscar, entity);
                entity = 1;
                entity = report[entity];
                tango = tango.bind(zulu)(entity);
                zulu = tango.dispatch;
                entity = {};
                report = 'GUILD_TEMPLATE_RESOLVE_FAILURE';
                entity['type'] = report;
                entity['code'] = mike;
                entity = zulu.bind(tango)(entity);
                entity = {};
                zulu = null;
                entity['guildTemplate'] = zulu;
                entity['code'] = mike;
                return entity;
            };
            golf = golf.bind(options)(report, zulu);
            report = golf.finally;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.delete;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu = report.bind(golf)(zulu);
            report = _closure1_slot5;
            tango = report.set;
            tango = tango.bind(report)(oscar, zulu);
            return zulu;
 232:
            return mike;
 234:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            zulu = mike.bind(zulu)();
            mike = zulu.then;
            entity = function() {
                zulu = _closure1_slot6;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot6 = golf;
    mike['resolveGuildTemplate'] = golf;
    golf = function(argFoo) { // Original name: loadTemplatesForGuild
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.get;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        oscar = _closure1_slot3;
        report = oscar.GUILD_TEMPLATES;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS';
            mike['type'] = report;
            report = entity.body;
            mike['guildTemplates'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['loadTemplatesForGuild'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: createGuildTemplate
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot3;
        report = oscar.GUILD_TEMPLATES;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['name'] = report;
        report = argBaz;
        tango['description'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            report = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GUILD_TEMPLATE_CREATE_SUCCESS';
            mike['type'] = oscar;
            oscar = report.body;
            mike['guildTemplate'] = oscar;
            report = report.body;
            report = report.code;
            mike['code'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['createGuildTemplate'] = golf;
    golf = function(argFoo, argBar) { // Original name: syncGuildTemplate
        options = argBar;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.put;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot3;
        oscar = golf.GUILD_TEMPLATE;
        report = argFoo;
        report = oscar.bind(golf)(report, options);
        mike['url'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_TEMPLATE_SYNC_SUCCESS';
            mike['type'] = report;
            report = argFoo;
            report = report.body;
            mike['guildTemplate'] = report;
            report = _closure2_slot0;
            mike['code'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['syncGuildTemplate'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateGuildTemplate
        options = argBar;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        golf = _closure1_slot3;
        oscar = golf.GUILD_TEMPLATE;
        report = argFoo;
        report = oscar.bind(golf)(report, options);
        mike['url'] = report;
        report = {};
        oscar = argBaz;
        report['name'] = oscar;
        oscar = argCorge;
        report['description'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_TEMPLATE_SYNC_SUCCESS';
            mike['type'] = report;
            report = argFoo;
            report = report.body;
            mike['guildTemplate'] = report;
            report = _closure2_slot0;
            mike['code'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['updateGuildTemplate'] = golf;
    tango = function(argFoo, argBar) { // Original name: deleteGuildTemplate
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.del;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        oscar = _closure1_slot3;
        report = oscar.GUILD_TEMPLATE;
        report = report.bind(oscar)(options, golf);
        mike['url'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_TEMPLATE_DELETE_SUCCESS';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            report = _closure2_slot1;
            mike['code'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['deleteGuildTemplate'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_templates/GuildTemplateActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();