// app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot5 = mike;
    mike = {};
    tango = function(argFoo, argBar, argBaz) { // Original name: acceptGuildTemplate
        report = argFoo;
        var _closure2_slot0 = report;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'GUILD_TEMPLATE_ACCEPT';
        mike['type'] = oscar;
        mike['code'] = report;
        mike = zulu.bind(tango)(mike);
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        golf = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            report = zulu.HTTP;
            tango = report.post;
            zulu = {};
            verify = _closure1_slot5;
            options = verify.UNRESOLVED_GUILD_TEMPLATE;
            oscar = _closure2_slot0;
            oscar = options.bind(verify)(oscar);
            zulu['url'] = oscar;
            oscar = {};
            options = _closure2_slot1;
            oscar['name'] = options;
            golf = _closure2_slot2;
            oscar['icon'] = golf;
            zulu['body'] = oscar;
            oscar = true;
            zulu['oldFormErrors'] = oscar;
            oscar = false;
            zulu['rejectWithError'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                _fun91552: for(var _fun91552_ip = 0; ; ) switch(_fun91552_ip) {
 0:
                    entity = argFoo;
                    report = entity.body;
                    var _closure4_slot0 = report;
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 3;
                    tango = tango[entity];
                    entity = undefined;
                    golf = oscar.bind(entity)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'GUILD_TEMPLATE_ACCEPT_SUCCESS';
                    tango['type'] = options;
                    options = _closure2_slot0;
                    tango['code'] = options;
                    tango['guild'] = report;
                    tango = oscar.bind(golf)(tango);
                    oscar = _closure1_slot3;
                    tango = oscar.isConnected;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun91552_ip = 143; continue _fun91552 }
 93:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 5;
                    tango = golf[tango];
                    golf = oscar.bind(entity)(tango);
                    oscar = golf.transitionToGuild;
                    tango = report.id;
                    tango = oscar.bind(golf)(tango);
                    tango = _closure3_slot0;
                    tango = tango.bind(entity)(report);
                    _fun91552_ip = 165; continue _fun91552;
 143:
                    tango = _closure1_slot4;
                    zulu = tango.addConditionalChangeListener;
                    mike = function() {
                        _fun91553: for(var _fun91553_ip = 0; ; ) switch(_fun91553_ip) {
 0:
                            report = _closure1_slot4;
                            tango = report.getGuild;
                            zulu = _closure4_slot0;
                            zulu = zulu.id;
                            tango = tango.bind(report)(zulu);
                            zulu = null;
                            if(!(zulu == tango)) { _fun91553_ip = 39; continue _fun91553 }
 35:
                            zulu = undefined;
                            return zulu;
 39:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 5;
                            mike = zulu[mike];
                            zulu = undefined;
                            report = tango.bind(zulu)(mike);
                            tango = report.transitionToGuild;
                            mike = _closure4_slot0;
                            entity = mike.id;
                            entity = tango.bind(report)(entity);
                            entity = _closure3_slot0;
                            entity = entity.bind(zulu)(mike);
                            entity = false;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 165:
                    return entity;
                }
            };
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'GUILD_TEMPLATE_ACCEPT_FAILURE';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['code'] = report;
                mike = zulu.bind(tango)(mike);
                zulu = _closure3_slot1;
                mike = argFoo;
                mike = mike.body;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        options = mike;
        entity = new options[zulu](golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    mike['acceptGuildTemplate'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_templates/AcceptGuildTemplateActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();