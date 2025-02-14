// app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    kilo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: PopoutCheck
        _fun91782: for(var _fun91782_ip = 0; ; ) switch(_fun91782_ip) {
 0:
            entity = argFoo;
            yankee = entity.connectionType;
            offset = entity.connectionMetadataField;
            zulu = entity.operator;
            verify = entity.value;
            options = entity.description;
            entity = _closure1_slot19;
            report = undefined;
            backup = entity.bind(report)();
            entity = null;
            if(!(entity == options)) { _fun91782_ip = 107; continue _fun91782 }
 50:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 14;
            mike = oscar[mike];
            oscar = tango.bind(report)(mike);
            tango = oscar.getConnectionsCheckText;
            mike = {};
            mike['connectionType'] = yankee;
            mike['connectionMetadataField'] = offset;
            mike['operator'] = zulu;
            mike['value'] = verify;
            offset = tango.bind(oscar)(mike);
            _fun91782_ip = 356; continue _fun91782;
 107:
            mike = _closure1_slot12;
            mike = mike.LESS_THAN;
            if(!(mike !== zulu)) { _fun91782_ip = 251; continue _fun91782 }
 124:
            mike = _closure1_slot12;
            mike = mike.GREATER_THAN;
            offset = options;
            if(!(mike === zulu)) { _fun91782_ip = 356; continue _fun91782 }
 144:
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 13;
            tango = yankee[mike];
            tango = zulu.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.format;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.t;
            zulu = mike.2p7dAw;
            mike = {};
            mike['description'] = options;
            yankee = global;
            kilo = yankee.Math;
            foxtrot = kilo.max;
            yankee = yankee.Number;
            romeo = yankee.bind(report)(verify);
            yankee = 1;
            romeo = romeo + yankee;
            yankee = 0;
            yankee = foxtrot.bind(kilo)(yankee, romeo);
            mike['count'] = yankee;
            offset = tango.bind(oscar)(zulu, mike);
            _fun91782_ip = 356; continue _fun91782;
 251:
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 13;
            tango = yankee[mike];
            tango = zulu.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.format;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.t;
            zulu = mike.2p7dAw;
            mike = {};
            mike['description'] = options;
            options = global;
            romeo = options.Math;
            yankee = romeo.max;
            options = options.Number;
            verify = options.bind(report)(verify);
            options = 1;
            verify = verify - options;
            options = 0;
            options = yankee.bind(romeo)(options, verify);
            mike['count'] = options;
            offset = tango.bind(oscar)(zulu, mike);
 356:
            mike = entity == offset;
            entity = null;
            if(mike) { _fun91782_ip = 542; continue _fun91782 }
 368:
            tango = _closure1_slot17;
            zulu = _closure1_slot6;
            mike = {};
            oscar = backup.popoutCheck;
            mike['style'] = oscar;
            verify = _closure1_slot16;
            foxtrot = _closure1_slot1;
            yankee = _closure1_slot2;
            romeo = 15;
            oscar = yankee[romeo];
            options = foxtrot.bind(report)(oscar);
            oscar = {};
            backup = backup.popoutCheckIcon;
            oscar['style'] = backup;
            backup = 16;
            backup = yankee[backup];
            backup = foxtrot.bind(report)(backup);
            oscar['source'] = backup;
            romeo = yankee[romeo];
            romeo = foxtrot.bind(report)(romeo);
            romeo = romeo.Sizes;
            romeo = romeo.SMALL;
            oscar['size'] = romeo;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot16;
            options = _closure1_slot0;
            golf = 17;
            golf = yankee[golf];
            golf = options.bind(report)(golf);
            options = golf.Text;
            golf = {'variant': 'text-xs/medium', 'color': 'header-primary'};
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 542:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    mike = function(argFoo) { // Original name: PopoutChecks
        entity = argFoo;
        options = entity.eligibilityStates;
        entity = entity.guildId;
        var _closure2_slot0 = entity;
        mike = _closure1_slot19;
        tango = undefined;
        mike = mike.bind(tango)();
        var _closure2_slot1 = mike;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 18;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        mike = mike.bind(tango)();
        var _closure2_slot2 = mike;
        mike = 19;
        mike = oscar[mike];
        golf = zulu.bind(tango)(mike);
        zulu = golf.groupBy;
        mike = function(argFoo) {
            _fun91784: for(var _fun91784_ip = 0; ; ) switch(_fun91784_ip) {
 0:
                entity = argFoo;
                tango = entity.connection_type;
                zulu = entity.application_id;
                mike = null;
                report = mike != zulu;
                zulu = '';
                mike = zulu;
                if(!report) { _fun91784_ip = 59; continue _fun91784 }
 31:
                oscar = entity.application_id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = ':';
                mike = report.bind(entity)(oscar);
 59:
                entity = global;
                entity = entity.HermesInternal;
                entity = entity.concat;
                entity = entity.bind(zulu)(tango, mike);
                return entity;
            }
        };
        golf = zulu.bind(golf)(options, mike);
        var _closure2_slot3 = golf;
        mike = global;
        zulu = mike.Object;
        mike = zulu.keys;
        golf = mike.bind(zulu)(golf);
        zulu = golf.length;
        mike = 1;
        mike = zulu - mike;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot0;
        mike = 20;
        mike = oscar[mike];
        oscar = zulu.bind(tango)(mike);
        zulu = oscar.useColorValue;
        mike = _closure1_slot14;
        mike = mike.GREEN_330;
        mike = zulu.bind(oscar)(mike);
        mike = mike.hex;
        var _closure2_slot5 = mike;
        zulu = _closure1_slot16;
        mike = _closure1_slot18;
        entity = {};
        oscar = golf.map;
        report = function(argFoo, argBar) {
            _fun91785: for(var _fun91785_ip = 0; ; ) switch(_fun91785_ip) {
 0:
                report = argFoo;
                entity = _closure2_slot3;
                zulu = entity[report];
                mike = zulu.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.operator;
                    entity = null;
                    entity = entity != mike;
                    return entity;
                };
                verify = mike.bind(zulu)(entity);
                mike = zulu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.application;
                    entity = null;
                    entity = entity != mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 21;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.get;
                echo = mike.bind(zulu)(report);
                output = null;
                mike = output == entity;
                result = undefined;
                if(mike) { _fun91785_ip = 101; continue _fun91785 }
 96:
                result = entity.application;
 101:
                mike = output == result;
                entity = undefined;
                if(mike) { _fun91785_ip = 116; continue _fun91785 }
 110:
                entity = result.bot;
 116:
                entity = output != entity;
                control = null;
                if(!entity) { _fun91785_ip = 155; continue _fun91785 }
 125:
                zulu = _closure1_slot7;
                status = result.bot;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                sierra = mike;
                entity = new sierra[zulu](status, target);
                control = entity instanceof Object ? entity : mike;
 155:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 14;
                entity = zulu[entity];
                entity = mike.bind(tango)(entity);
                zulu = entity.officialApplicationIds;
                mike = zulu.includes;
                entity = output == result;
                oscar = undefined;
                if(entity) { _fun91785_ip = 200; continue _fun91785 }
 195:
                oscar = result.id;
 200:
                options = output != oscar;
                entity = '';
                if(!options) { _fun91785_ip = 214; continue _fun91785 }
 211:
                entity = oscar;
 214:
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun91785_ip = 289; continue _fun91785 }
 222:
                entity = output != control;
                romeo = undefined;
                if(!entity) { _fun91785_ip = 359; continue _fun91785 }
 234:
                zulu = _closure1_slot16;
                mike = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 23;
                entity = oscar[entity];
                mike = mike.bind(tango)(entity);
                entity = {};
                oscar = _closure2_slot1;
                oscar = oscar.botTag;
                entity['style'] = oscar;
                oscar = false;
                entity['verified'] = oscar;
                romeo = zulu.bind(tango)(mike, entity);
                _fun91785_ip = 359; continue _fun91785;
 289:
                zulu = _closure1_slot16;
                mike = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 22;
                entity = oscar[entity];
                mike = mike.bind(tango)(entity);
                entity = {};
                oscar = _closure2_slot1;
                oscar = oscar.botTag;
                entity['style'] = oscar;
                oscar = _closure2_slot0;
                entity['guildId'] = oscar;
                oscar = _closure2_slot5;
                entity['roleColor'] = oscar;
                oscar = 16;
                entity['size'] = oscar;
                romeo = zulu.bind(tango)(mike, entity);
 359:
                zulu = _closure1_slot17;
                mike = _closure1_slot6;
                entity = {};
                oscar = _closure2_slot1;
                options = oscar.popoutChecksGroup;
                oscar = new Array(2);
                oscar[0] = options;
                offset = _closure2_slot4;
                options = argBar;
                offset = options < offset;
                options = null;
                if(!offset) { _fun91785_ip = 413; continue _fun91785 }
 403:
                offset = _closure2_slot1;
                options = offset.popoutChecksGroupBottomMargin;
 413:
                oscar[1] = options;
                entity['style'] = oscar;
                offset = _closure1_slot17;
                options = _closure1_slot6;
                oscar = {};
                yankee = _closure2_slot1;
                yankee = yankee.popoutCheckGroupName;
                oscar['style'] = yankee;
                yankee = output != echo;
                backup = null;
                if(!yankee) { _fun91785_ip = 623; continue _fun91785 }
 457:
                sizing = _closure1_slot16;
                kilo = _closure1_slot1;
                context = _closure1_slot2;
                vacuum = 15;
                yankee = context[vacuum];
                kilo = kilo.bind(tango)(yankee);
                yankee = {};
                update = _closure2_slot1;
                update = update.popoutCheckGroupPlatformIcon;
                yankee['style'] = update;
                record = _closure1_slot0;
                update = 24;
                update = context[update];
                config = record.bind(tango)(update);
                source = config.makeSource;
                update = 25;
                update = context[update];
                context = record.bind(tango)(update);
                record = context.isThemeDark;
                update = _closure2_slot2;
                update = record.bind(context)(update);
                record = echo.icon;
                if(update) { _fun91785_ip = 562; continue _fun91785 }
 554:
                update = record.lightPNG;
                _fun91785_ip = 568; continue _fun91785;
 562:
                update = record.darkPNG;
 568:
                update = source.bind(config)(update);
                yankee['source'] = update;
                update = true;
                yankee['disableColor'] = update;
                source = _closure1_slot1;
                update = _closure1_slot2;
                update = update[vacuum];
                update = source.bind(tango)(update);
                update = update.Sizes;
                update = update.MEDIUM;
                yankee['size'] = update;
                backup = sizing.bind(tango)(kilo, yankee);
 623:
                yankee = new Array(4);
                yankee[0] = backup;
                kilo = output != control;
                backup = null;
                if(!kilo) { _fun91785_ip = 723; continue _fun91785 }
 640:
                update = _closure1_slot16;
                sizing = _closure1_slot1;
                vacuum = _closure1_slot2;
                source = 26;
                kilo = vacuum[source];
                sizing = sizing.bind(tango)(kilo);
                kilo = {};
                sequence = _closure2_slot1;
                sequence = sequence.popoutCheckGroupPlatformIcon;
                kilo['style'] = sequence;
                kilo['user'] = control;
                control = _closure1_slot0;
                source = vacuum[source];
                source = control.bind(tango)(source);
                source = source.AvatarSizes;
                source = source.XSMALL;
                kilo['size'] = source;
                kilo['guildId'] = tango;
                backup = update.bind(tango)(sizing, kilo);
 723:
                yankee[1] = backup;
                kilo = _closure1_slot16;
                backup = _closure1_slot0;
                sizing = _closure1_slot2;
                foxtrot = 17;
                foxtrot = sizing[foxtrot];
                foxtrot = backup.bind(tango)(foxtrot);
                backup = foxtrot.Text;
                foxtrot = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
                update = output == echo;
                sizing = undefined;
                if(update) { _fun91785_ip = 784; continue _fun91785 }
 779:
                sizing = echo.name;
 784:
                if(!(output == sizing)) { _fun91785_ip = 805; continue _fun91785 }
 788:
                echo = output == result;
                output = undefined;
                if(echo) { _fun91785_ip = 802; continue _fun91785 }
 797:
                output = result.name;
 802:
                sizing = output;
 805:
                foxtrot['children'] = sizing;
                foxtrot = kilo.bind(tango)(backup, foxtrot);
                yankee[2] = foxtrot;
                yankee[3] = romeo;
                oscar['children'] = yankee;
                options = offset.bind(tango)(options, oscar);
                oscar = new Array(2);
                oscar[0] = options;
                options = verify.map;
                golf = function(argFoo) {
                    entity = argFoo;
                    yankee = entity.connection_type;
                    offset = entity.connection_metadata_field;
                    verify = entity.operator;
                    options = entity.value;
                    entity = entity.description;
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 27;
                    zulu = golf[tango];
                    report = undefined;
                    backup = oscar.bind(report)(zulu);
                    zulu = null;
                    foxtrot = zulu != offset;
                    romeo = 'connectionMetadataField is null';
                    romeo = backup.bind(report)(foxtrot, romeo);
                    romeo = golf[tango];
                    backup = oscar.bind(report)(romeo);
                    foxtrot = zulu != verify;
                    romeo = 'operator is null';
                    romeo = backup.bind(report)(foxtrot, romeo);
                    tango = golf[tango];
                    oscar = oscar.bind(report)(tango);
                    tango = zulu != options;
                    zulu = 'value is null';
                    zulu = oscar.bind(report)(tango, zulu);
                    tango = _closure1_slot16;
                    zulu = _closure1_slot20;
                    mike = {};
                    mike['connectionType'] = yankee;
                    mike['connectionMetadataField'] = offset;
                    mike['operator'] = verify;
                    mike['value'] = options;
                    mike['description'] = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    control = '';
                    entity = ':';
                    source = yankee;
                    update = entity;
                    echo = offset;
                    result = entity;
                    output = verify;
                    sizing = entity;
                    kilo = options;
                    entity = control[golf](source, update, echo, result, output, sizing, kilo, backup);
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                golf = options.bind(verify)(golf);
                oscar[1] = golf;
                entity['children'] = oscar;
                entity = zulu.bind(tango)(mike, entity, report);
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot21 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = kilo.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ActivityIndicator;
    var _closure1_slot5 = options;
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = kilo.bind(entity)(report);
    var _closure1_slot7 = report;
    romeo = 4;
    report = golf[romeo];
    report = kilo.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = kilo.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = kilo.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = kilo.bind(entity)(report);
    var _closure1_slot11 = report;
    foxtrot = 8;
    report = golf[foxtrot];
    report = oscar.bind(entity)(report);
    report = report.OperatorTypes;
    var _closure1_slot12 = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AnalyticEvents;
    var _closure1_slot13 = options;
    options = report.Color;
    var _closure1_slot14 = options;
    report = report.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot15 = report;
    report = 10;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot16 = options;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot17 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot18 = report;
    report = 11;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    options = {};
    report = {'flexDirection': 'column', 'alignItems': 'center', 'padding': 16};
    options['container'] = report;
    report = {'width': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'paddingBottom': 16, 'borderBottomWidth': 1};
    backup = 12;
    yankee = golf[backup];
    yankee = kilo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    report['borderBottomColor'] = yankee;
    yankee = golf[backup];
    yankee = kilo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_24;
    report['marginBottom'] = yankee;
    options['header'] = report;
    report = {'marginRight': 8, 'height': 24, 'width': 24};
    options['verifiedContainer'] = report;
    report = {'flexShrink': 1, 'flexDirection': 'column'};
    options['headerTextContainer'] = report;
    report = {'position': 'absolute', 'left': 0, 'top': 0};
    options['verifiedCheck'] = report;
    yankee = {};
    report = 40;
    yankee['marginVertical'] = report;
    options['loadingSpinner'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8, 'marginLeft': 32, 'paddingRight': 20};
    options['popoutCheck'] = yankee;
    yankee = {};
    yankee['marginRight'] = foxtrot;
    sizing = golf[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.TEXT_POSITIVE;
    yankee['tintColor'] = sizing;
    options['popoutCheckIcon'] = yankee;
    yankee = {'width': '100%', 'marginBottom': 24};
    options['popoutChecksGroup'] = yankee;
    yankee = {'paddingBottom': 12, 'borderBottomWidth': 1, 'borderBottomColor': null, 'marginBottom': 12};
    backup = golf[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    yankee['borderBottomColor'] = backup;
    options['popoutChecksGroupBottomMargin'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center'};
    options['popoutCheckGroupName'] = yankee;
    yankee = {};
    yankee['marginRight'] = foxtrot;
    options['popoutCheckGroupPlatformIcon'] = yankee;
    yankee = {};
    yankee['marginBottom'] = foxtrot;
    options['button'] = yankee;
    yankee = {};
    yankee['marginLeft'] = romeo;
    options['botTag'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot19 = options;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: ConnectionsRoleMessageBadgeActionSheet
        _fun91789: for(var _fun91789_ip = 0; ; ) switch(_fun91789_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.userId;
            var _closure2_slot0 = foxtrot;
            yankee = entity.roleId;
            var _closure2_slot1 = yankee;
            golf = entity.channelId;
            var _closure2_slot2 = golf;
            control = entity.guildId;
            var _closure2_slot3 = control;
            entity = _closure1_slot19;
            tango = undefined;
            record = entity.bind(tango)();
            oscar = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 28;
            zulu = mike[entity];
            report = oscar.bind(tango)(zulu);
            zulu = 29;
            zulu = mike[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.CONNECTIONS_ROLE_POPOUT;
            zulu = report.bind(tango)(zulu);
            report = zulu.analyticsLocations;
            var _closure2_slot4 = report;
            zulu = _closure1_slot0;
            options = 30;
            oscar = mike[options];
            romeo = zulu.bind(tango)(oscar);
            offset = romeo.useStateFromStores;
            oscar = _closure1_slot10;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot10;
                mike = zulu.getGuild;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            target = offset.bind(romeo)(verify, oscar);
            var _closure2_slot5 = target;
            oscar = mike[options];
            romeo = zulu.bind(tango)(oscar);
            offset = romeo.useStateFromStores;
            oscar = _closure1_slot8;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                mike = _closure1_slot8;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = offset.bind(romeo)(verify, oscar);
            var _closure2_slot6 = oscar;
            oscar = mike[options];
            romeo = zulu.bind(tango)(oscar);
            offset = romeo.useStateFromStores;
            oscar = _closure1_slot9;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                tango = _closure1_slot9;
                zulu = tango.getMember;
                mike = _closure2_slot3;
                entity = _closure2_slot6;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            verify = offset.bind(romeo)(verify, oscar);
            mike = mike[options];
            offset = zulu.bind(tango)(mike);
            oscar = offset.useStateFromStores;
            mike = _closure1_slot11;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot11;
                mike = zulu.getGuildRoleConnectionEligibility;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            context = oscar.bind(offset)(zulu, mike);
            var _closure2_slot7 = context;
            oscar = _closure1_slot4;
            zulu = oscar.useState;
            output = null;
            mike = output == context;
            oscar = zulu.bind(oscar)(mike);
            zulu = _closure1_slot3;
            mike = 2;
            offset = zulu.bind(tango)(oscar, mike);
            mike = 0;
            oscar = offset[mike];
            var _closure2_slot8 = oscar;
            zulu = 1;
            offset = offset[zulu];
            var _closure2_slot9 = offset;
            offset = output == verify;
            update = undefined;
            if(offset) { _fun91789_ip = 362; continue _fun91789 }
 346:
            offset = verify.roles;
            verify = offset.includes;
            update = verify.bind(offset)(yankee);
 362:
            offset = _closure1_slot4;
            romeo = offset.useEffect;
            verify = new Array(4);
            verify[0] = foxtrot;
            verify[1] = yankee;
            verify[2] = golf;
            verify[3] = control;
            golf = function() {
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 31;
                mike = verify[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot13;
                zulu = mike.PASSPORT_ROLE_POPOUT_VIEWED;
                mike = {};
                options = _closure2_slot0;
                mike['other_user_id'] = options;
                options = _closure2_slot1;
                mike['role_id'] = options;
                options = _closure1_slot0;
                golf = 32;
                offset = verify[golf];
                romeo = options.bind(entity)(offset);
                yankee = romeo.collectChannelAnalyticsMetadataFromId;
                offset = _closure2_slot2;
                foxtrot = yankee.bind(romeo)(offset);
                backup = mike;
                offset = copyDataProperties(backup, foxtrot);
                golf = verify[golf];
                options = options.bind(entity)(golf);
                golf = options.collectGuildAnalyticsMetadata;
                oscar = _closure2_slot3;
                foxtrot = golf.bind(options)(oscar);
                backup = mike;
                oscar = copyDataProperties(backup, foxtrot);
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            golf = romeo.bind(offset)(golf, verify);
            verify = offset.useEffect;
            golf = new Array(4);
            golf[0] = control;
            golf[1] = yankee;
            golf[2] = oscar;
            golf[3] = context;
            oscar = function() {
                _fun91795: for(var _fun91795_ip = 0; ; ) switch(_fun91795_ip) {
 0:
                    mike = _closure2_slot8;
                    if(!mike) { _fun91795_ip = 20; continue _fun91795 }
 10:
                    tango = _closure2_slot7;
                    zulu = null;
                    mike = zulu == tango;
 20:
                    if(!mike) { _fun91795_ip = 87; continue _fun91795 }
 23:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 33;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.fetchGuildRoleConnectionsEligibility;
                    mike = _closure2_slot3;
                    entity = _closure2_slot1;
                    zulu = zulu.bind(tango)(mike, entity);
                    mike = zulu.then;
                    entity = function() {
                        zulu = _closure2_slot9;
                        mike = undefined;
                        entity = false;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = verify.bind(offset)(oscar, golf);
            oscar = output == context;
            result = undefined;
            if(oscar) { _fun91789_ip = 479; continue _fun91789 }
 451:
            oscar = context.flat;
            verify = oscar.bind(context)();
            golf = verify.some;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.application_id;
                entity = undefined;
                entity = entity === mike;
                return entity;
            };
            result = golf.bind(verify)(oscar);
 479:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            verify = golf.bind(tango)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot10;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun91798: for(var _fun91798_ip = 0; ; ) switch(_fun91798_ip) {
 0:
                    zulu = _closure2_slot5;
                    entity = null;
                    zulu = entity != zulu;
                    entity = undefined;
                    if(!zulu) { _fun91798_ip = 50; continue _fun91798 }
 18:
                    report = _closure1_slot10;
                    tango = report.getRole;
                    zulu = _closure2_slot5;
                    zulu = zulu.id;
                    mike = _closure2_slot1;
                    entity = tango.bind(report)(zulu, mike);
 50:
                    return entity;
                }
            };
            lima = options.bind(verify)(golf, oscar);
            if(!(output != context)) { _fun91789_ip = 687; continue _fun91789 }
 533:
            oscar = context.length;
            if(!(zulu === oscar)) { _fun91789_ip = 558; continue _fun91789 }
 542:
            mike = context[mike];
            mike = mike.length;
            if(!(zulu !== mike)) { _fun91789_ip = 687; continue _fun91789 }
 558:
            mike = context.length;
            if(!(zulu !== mike)) { _fun91789_ip = 627; continue _fun91789 }
 567:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 13;
            oscar = options[mike];
            oscar = zulu.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.format;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.D7uftL;
            mike = {};
            status = oscar.bind(golf)(zulu, mike);
            _fun91789_ip = 685; continue _fun91789;
 627:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 13;
            oscar = options[mike];
            oscar = zulu.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.format;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.0eBj39;
            mike = {};
            status = oscar.bind(golf)(zulu, mike);
 685:
            _fun91789_ip = 742; continue _fun91789;
 687:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 13;
            zulu = options[mike];
            zulu = golf.bind(tango)(zulu);
            oscar = zulu.intl;
            zulu = oscar.string;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.jDym4O;
            status = zulu.bind(oscar)(mike);
 742:
            zulu = _closure1_slot16;
            oscar = _closure1_slot0;
            papa = _closure1_slot2;
            entity = papa[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot16;
            report = 34;
            report = papa[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheet;
            report = {};
            offset = _closure1_slot17;
            verify = _closure1_slot6;
            options = {};
            yankee = record.container;
            options['style'] = yankee;
            foxtrot = _closure1_slot17;
            romeo = _closure1_slot6;
            yankee = {};
            backup = record.header;
            yankee['style'] = backup;
            sizing = _closure1_slot16;
            kilo = _closure1_slot6;
            backup = {};
            echo = record.verifiedContainer;
            backup['style'] = echo;
            vacuum = _closure1_slot16;
            source = _closure1_slot1;
            echo = 35;
            echo = papa[echo];
            source = source.bind(tango)(echo);
            echo = {};
            papa = record.verifiedCheck;
            echo['style'] = papa;
            sierra = output == target;
            papa = undefined;
            if(sierra) { _fun91789_ip = 903; continue _fun91789 }
 898:
            papa = target.id;
 903:
            if(!(output == papa)) { _fun91789_ip = 911; continue _fun91789 }
 907:
            papa = _closure1_slot15;
 911:
            echo['guildId'] = papa;
            target = output != lima;
            papa = undefined;
            if(!target) { _fun91789_ip = 927; continue _fun91789 }
 924:
            papa = lima;
 927:
            echo['role'] = papa;
            papa = 24;
            echo['size'] = papa;
            echo = vacuum.bind(tango)(source, echo);
            backup['children'] = echo;
            kilo = sizing.bind(tango)(kilo, backup);
            backup = new Array(2);
            backup[0] = kilo;
            echo = _closure1_slot17;
            sizing = _closure1_slot6;
            kilo = {};
            source = record.headerTextContainer;
            kilo['style'] = source;
            papa = _closure1_slot16;
            vacuum = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 17;
            source = source[sierra];
            source = vacuum.bind(tango)(source);
            vacuum = source.Text;
            source = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            whiskey = output == lima;
            target = undefined;
            if(whiskey) { _fun91789_ip = 1040; continue _fun91789 }
 1035:
            target = lima.name;
 1040:
            source['children'] = target;
            vacuum = papa.bind(tango)(vacuum, source);
            source = new Array(2);
            source[0] = vacuum;
            target = _closure1_slot16;
            papa = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[sierra];
            vacuum = papa.bind(tango)(vacuum);
            papa = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            vacuum['children'] = status;
            vacuum = target.bind(tango)(papa, vacuum);
            source[1] = vacuum;
            kilo['children'] = source;
            kilo = echo.bind(tango)(sizing, kilo);
            backup[1] = kilo;
            yankee['children'] = backup;
            romeo = foxtrot.bind(tango)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            if(!(output != context)) { _fun91789_ip = 1162; continue _fun91789 }
 1148:
            romeo = context.flat;
            romeo = romeo.bind(context)();
            if(!(output == romeo)) { _fun91789_ip = 1201; continue _fun91789 }
 1162:
            backup = _closure1_slot16;
            foxtrot = _closure1_slot5;
            romeo = {};
            kilo = record.loadingSpinner;
            romeo['style'] = kilo;
            kilo = 'large';
            romeo['size'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            _fun91789_ip = 1554; continue _fun91789;
 1201:
            kilo = _closure1_slot17;
            backup = _closure1_slot18;
            foxtrot = {};
            source = _closure1_slot16;
            echo = _closure1_slot21;
            sizing = {};
            vacuum = context.flat;
            vacuum = vacuum.bind(context)();
            sizing['eligibilityStates'] = vacuum;
            sizing['guildId'] = control;
            echo = source.bind(tango)(echo, sizing);
            sizing = new Array(3);
            sizing[0] = echo;
            echo = null;
            if(update) { _fun91789_ip = 1395; continue _fun91789 }
 1262:
            control = _closure1_slot16;
            context = _closure1_slot1;
            papa = _closure1_slot2;
            vacuum = 36;
            update = papa[vacuum];
            source = context.bind(tango)(update);
            update = {};
            target = record.button;
            update['style'] = target;
            target = function() { // Original name: onPress
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 37;
                zulu = tango[entity];
                entity = undefined;
                oscar = report.bind(entity)(zulu);
                report = oscar.hideActionSheet;
                zulu = 'ConnectionsRoleMessageBadgeActionSheet';
                zulu = report.bind(oscar)(zulu);
                zulu = _closure1_slot0;
                mike = 38;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openGuildRoleConnectionsModal;
                mike = {};
                report = _closure2_slot3;
                mike['guildId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            update['onPress'] = target;
            lima = _closure1_slot0;
            target = 13;
            status = papa[target];
            status = lima.bind(tango)(status);
            sierra = status.intl;
            status = sierra.string;
            target = papa[target];
            target = lima.bind(tango)(target);
            target = target.t;
            target = target.T1t1WV;
            target = status.bind(sierra)(target);
            update['text'] = target;
            vacuum = papa[vacuum];
            vacuum = context.bind(tango)(vacuum);
            vacuum = vacuum.Colors;
            vacuum = vacuum.BRAND;
            update['color'] = vacuum;
            echo = control.bind(tango)(source, update);
 1395:
            sizing[1] = echo;
            output = null;
            if(!result) { _fun91789_ip = 1540; continue _fun91789 }
 1407:
            update = _closure1_slot16;
            control = _closure1_slot1;
            vacuum = _closure1_slot2;
            source = 36;
            result = vacuum[source];
            echo = control.bind(tango)(result);
            result = {};
            record = record.button;
            result['style'] = record;
            config = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 39;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = _closure2_slot0;
                mike['userId'] = report;
                report = _closure2_slot2;
                mike['channelId'] = report;
                report = _closure2_slot1;
                mike['roleId'] = report;
                tango = _closure2_slot4;
                mike['sourceAnalyticsLocations'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            result['onPress'] = config;
            context = _closure1_slot0;
            sequence = 13;
            config = vacuum[sequence];
            config = context.bind(tango)(config);
            record = config.intl;
            config = record.string;
            sequence = vacuum[sequence];
            sequence = context.bind(tango)(sequence);
            sequence = sequence.t;
            sequence = sequence.hgKDnJ;
            sequence = config.bind(record)(sequence);
            result['text'] = sequence;
            source = vacuum[source];
            source = control.bind(tango)(source);
            source = source.Colors;
            source = source.GREY;
            result['color'] = source;
            output = update.bind(tango)(echo, result);
 1540:
            sizing[2] = output;
            foxtrot['children'] = sizing;
            romeo = kilo.bind(tango)(backup, foxtrot);
 1554:
            yankee[1] = romeo;
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['PopoutChecks'] = mike;
    return entity;
})();