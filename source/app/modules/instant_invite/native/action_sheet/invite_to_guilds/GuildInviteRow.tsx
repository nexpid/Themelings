// app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useGuildInviteSendStates;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.InviteSendStates;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.row;
            var _closure2_slot0 = entity;
            zulu = mike.recipientId;
            var _closure2_slot1 = zulu;
            zulu = mike.source;
            var _closure2_slot2 = zulu;
            report = mike.style;
            offset = entity.guild;
            var _closure2_slot3 = offset;
            zulu = _closure1_slot4;
            tango = undefined;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = argFoo;
                    zulu = entity[zulu];
                    entity = null;
                    tango = entity == zulu;
                    entity = undefined;
                    if(tango) { _fun00004_ip = 38; continue _fun00003 }
 25:
                    mike = _closure2_slot3;
                    mike = mike.id;
                    entity = zulu[mike];
 38:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            oscar = function() { // Original name: handlePress
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.sendGuildInvite;
                tango = _closure2_slot1;
                zulu = _closure2_slot3;
                zulu = zulu.id;
                mike = _closure2_slot2;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            yankee = _closure1_slot6;
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            mike = 6;
            mike = sizing[mike];
            golf = foxtrot.bind(tango)(mike);
            mike = {};
            mike['sendState'] = zulu;
            mike['onPressSend'] = oscar;
            verify = yankee.bind(tango)(golf, mike);
            golf = _closure1_slot3;
            mike = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            backup = 7;
            romeo = sizing[backup];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            romeo['guild'] = offset;
            kilo = _closure1_slot0;
            backup = sizing[backup];
            backup = kilo.bind(tango)(backup);
            backup = backup.GuildIconSizes;
            backup = backup.SMALL;
            romeo['size'] = backup;
            romeo = yankee.bind(tango)(foxtrot, romeo);
            mike['children'] = romeo;
            yankee = yankee.bind(tango)(golf, mike);
            mike = _closure1_slot5;
            mike = mike.SENDING;
            golf = zulu === mike;
            if(golf) { _fun00002_ip = 230; continue _fun00001 }
 216:
            mike = _closure1_slot5;
            mike = mike.SENT;
            golf = zulu === mike;
 230:
            zulu = _closure1_slot6;
            mike = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 8;
            entity = romeo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.FormRow;
            entity = {};
            entity['leading'] = yankee;
            offset = offset.name;
            entity['label'] = offset;
            entity['trailing'] = verify;
            options = function() { // Original name: subLabel
                tango = _closure1_slot6;
                oscar = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 9;
                entity = verify[entity];
                zulu = undefined;
                entity = oscar.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
                report = 10;
                golf = verify[report];
                golf = oscar.bind(zulu)(golf);
                options = golf.intl;
                golf = options.format;
                report = verify[report];
                report = oscar.bind(zulu)(report);
                report = report.t;
                oscar = report.zRl6XV;
                report = {};
                verify = _closure2_slot0;
                verify = verify.memberCount;
                report['count'] = verify;
                report = golf.bind(options)(oscar, report);
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            entity['subLabel'] = options;
            entity['onPress'] = oscar;
            entity['disabled'] = golf;
            oscar = {};
            oscar['disabled'] = golf;
            entity['accessibilityState'] = oscar;
            entity['style'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();