// app/modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    yankee = 4;
    tango = oscar[yankee];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    golf = {};
    tango = {'flexDirection': 'row', 'alignItems': 'center'};
    golf['guildIdentity'] = tango;
    offset = {};
    tango = 16;
    offset['marginRight'] = tango;
    golf['iconContainer'] = offset;
    offset = {};
    offset['marginRight'] = yankee;
    golf['avatar'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        entity = argFoo;
        mike = entity.selectedGuild;
        zulu = entity.onSelectGuild;
        var _closure2_slot0 = zulu;
        entity = entity.user;
        var _closure2_slot1 = entity;
        zulu = _closure1_slot10;
        tango = undefined;
        romeo = zulu.bind(tango)();
        var _closure2_slot2 = romeo;
        offset = _closure1_slot4;
        oscar = offset.useState;
        zulu = '';
        zulu = oscar.bind(offset)(zulu);
        verify = _closure1_slot3;
        golf = 2;
        oscar = verify.bind(tango)(zulu, golf);
        zulu = 0;
        backup = oscar[zulu];
        var _closure2_slot3 = backup;
        options = 1;
        oscar = oscar[options];
        yankee = {};
        kilo = _closure1_slot0;
        foxtrot = _closure1_slot2;
        sizing = 7;
        sizing = foxtrot[sizing];
        sizing = kilo.bind(tango)(sizing);
        sizing = sizing.SelectOptionType;
        sizing = sizing.GUILD;
        yankee['type'] = sizing;
        sizing = mike.id;
        yankee['value'] = sizing;
        sizing = mike.name;
        yankee['label'] = sizing;
        yankee['guild'] = mike;
        mike = offset.useState;
        mike = mike.bind(offset)(yankee);
        mike = verify.bind(tango)(mike, golf);
        verify = mike[zulu];
        var _closure2_slot4 = verify;
        mike = mike[options];
        var _closure2_slot5 = mike;
        yankee = {'maxValues': 1, 'minValues': 1};
        mike = 8;
        zulu = foxtrot[mike];
        zulu = kilo.bind(tango)(zulu);
        golf = zulu.intl;
        zulu = golf.string;
        mike = foxtrot[mike];
        mike = kilo.bind(tango)(mike);
        mike = mike.t;
        mike = mike.ZImm//;
        mike = zulu.bind(golf)(mike);
        yankee['placeholder'] = mike;
        golf = offset.useCallback;
        zulu = function(argFoo) {
            zulu = function(argFoo) { // Original name: queryGuilds
                _fun94115: for(var _fun94115_ip = 0; ; ) switch(_fun94115_ip) {
 0:
                    report = argFoo;
                    mike = function(argFoo) { // Original name: guildRecordToGuildSearchableSelectOption
                        mike = argFoo;
                        entity = {};
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 7;
                        tango = tango[zulu];
                        zulu = undefined;
                        zulu = report.bind(zulu)(tango);
                        zulu = zulu.SelectOptionType;
                        zulu = zulu.GUILD;
                        entity['type'] = zulu;
                        zulu = mike.id;
                        entity['value'] = zulu;
                        zulu = mike.name;
                        entity['label'] = zulu;
                        entity['guild'] = mike;
                        return entity;
                    };
                    var _closure4_slot0 = mike;
                    zulu = report.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun94115_ip = 88; continue _fun94115 }
 27:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.queryGuilds;
                    mike = {};
                    mike['query'] = report;
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.record;
                        mike = _closure4_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return mike;
 88:
                    zulu = _closure1_slot7;
                    mike = zulu.getFlattenedGuildIds;
                    tango = mike.bind(zulu)();
                    zulu = tango.reduce;
                    mike = global;
                    mike = mike.Array;
                    report = mike.prototype;
                    report = Object.create(report, {constructor: {value: mike}});
                    options = report;
                    mike = new options[mike](golf);
                    mike = mike instanceof Object ? mike : report;
                    entity = function(argFoo, argBar) {
                        _fun94117: for(var _fun94117_ip = 0; ; ) switch(_fun94117_ip) {
 0:
                            entity = argFoo;
                            tango = _closure1_slot6;
                            zulu = tango.getGuild;
                            mike = argBar;
                            report = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != report)) { _fun94117_ip = 53; continue _fun94117 }
 29:
                            zulu = entity.push;
                            tango = _closure4_slot0;
                            mike = undefined;
                            mike = tango.bind(mike)(report);
                            mike = zulu.bind(entity)(mike);
 53:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        mike = new Array(0);
        mike = golf.bind(offset)(zulu, mike);
        var _closure2_slot6 = mike;
        golf = offset.useMemo;
        zulu = new Array(2);
        zulu[0] = backup;
        zulu[1] = mike;
        mike = function() {
            zulu = _closure2_slot6;
            mike = _closure2_slot3;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        offset = golf.bind(offset)(mike, zulu);
        golf = function() { // Original name: submitSelection
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.hideActionSheet;
            entity = entity.bind(mike)();
            return entity;
        };
        var _closure2_slot7 = golf;
        zulu = _closure1_slot8;
        mike = _closure1_slot1;
        entity = 10;
        entity = foxtrot[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        foxtrot = function(argFoo, argBar) { // Original name: onPressOptionItem
            tango = argBar;
            report = _closure2_slot0;
            zulu = tango.guild;
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = _closure2_slot5;
            zulu = zulu.bind(entity)(tango);
            mike = _closure2_slot7;
            mike = mike.bind(entity)();
            return entity;
        };
        entity['onPressOptionItem'] = foxtrot;
        foxtrot = function(argFoo) { // Original name: renderIcon
            tango = _closure1_slot8;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 11;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            report = argFoo;
            report = report.guild;
            entity['guild'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        entity['renderIcon'] = foxtrot;
        foxtrot = function(argFoo) { // Original name: renderHeaderIcon
            tango = _closure1_slot8;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            report = 11;
            entity = golf[report];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            oscar = _closure1_slot0;
            report = golf[report];
            report = oscar.bind(zulu)(report);
            report = report.GuildIconSizes;
            report = report.XSMALL;
            entity['size'] = report;
            report = argFoo;
            report = report.guild;
            entity['guild'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        entity['renderHeaderIcon'] = foxtrot;
        romeo = romeo.iconContainer;
        entity['iconContainerStyle'] = romeo;
        romeo = function(argFoo) { // Original name: renderDescription
            _fun94124: for(var _fun94124_ip = 0; ; ) switch(_fun94124_ip) {
 0:
                romeo = argFoo;
                golf = _closure2_slot1;
                mike = golf.hasAvatarForGuild;
                entity = romeo.guild;
                entity = entity.id;
                report = mike.bind(golf)(entity);
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                entity = zulu[entity];
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = zulu.getNickname;
                entity = romeo.guild;
                entity = entity.id;
                verify = mike.bind(zulu)(entity, tango, golf);
                if(report) { _fun94124_ip = 90; continue _fun94124 }
 82:
                entity = null;
                if(!(entity == verify)) { _fun94124_ip = 90; continue _fun94124 }
 88:
                return tango;
 90:
                zulu = _closure1_slot9;
                mike = _closure1_slot5;
                entity = {};
                golf = _closure2_slot2;
                golf = golf.guildIdentity;
                entity['style'] = golf;
                golf = report;
                if(!golf) { _fun94124_ip = 224; continue _fun94124 }
 120:
                yankee = _closure1_slot8;
                options = _closure1_slot1;
                kilo = _closure1_slot2;
                foxtrot = 13;
                report = kilo[foxtrot];
                options = options.bind(tango)(report);
                report = {};
                backup = _closure1_slot0;
                foxtrot = kilo[foxtrot];
                foxtrot = backup.bind(tango)(foxtrot);
                foxtrot = foxtrot.AvatarSizes;
                foxtrot = foxtrot.SIZE_16;
                report['size'] = foxtrot;
                foxtrot = _closure2_slot2;
                foxtrot = foxtrot.avatar;
                report['style'] = foxtrot;
                foxtrot = _closure2_slot1;
                report['user'] = foxtrot;
                romeo = romeo.guild;
                romeo = romeo.id;
                report['guildId'] = romeo;
                romeo = true;
                report['animate'] = romeo;
                golf = yankee.bind(tango)(options, report);
 224:
                report = new Array(2);
                report[0] = golf;
                options = _closure1_slot8;
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                oscar = 14;
                oscar = yankee[oscar];
                oscar = golf.bind(tango)(oscar);
                golf = oscar.Text;
                oscar = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                yankee = null;
                if(!(yankee == verify)) { _fun94124_ip = 290; continue _fun94124 }
 281:
                offset = _closure2_slot1;
                verify = offset.username;
 290:
                oscar['children'] = verify;
                oscar = options.bind(tango)(golf, oscar);
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity['renderDescription'] = romeo;
        entity['selectionActionComponent'] = yankee;
        entity['options'] = offset;
        entity['selectedCount'] = options;
        options = new Array(1);
        options[0] = verify;
        entity['selectedOptions'] = options;
        options = function(argFoo) { // Original name: isSelected
            entity = argFoo;
            mike = entity.value;
            entity = _closure2_slot4;
            entity = entity.value;
            entity = mike === entity;
            return entity;
        };
        entity['isSelected'] = options;
        entity['submitSelection'] = golf;
        entity['onQueryChange'] = oscar;
        report = function(argFoo) { // Original name: itemAccessibilityLabel
            entity = argFoo;
            entity = entity.label;
            return entity;
        };
        entity['itemAccessibilityLabel'] = report;
        report = true;
        entity['expanded'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();