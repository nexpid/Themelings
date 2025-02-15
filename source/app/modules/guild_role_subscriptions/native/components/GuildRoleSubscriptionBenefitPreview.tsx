// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: BaseBenefitRow
        _fun127248: for(var _fun127248_ip = 0; ; ) switch(_fun127248_ip) {
 0:
            entity = argFoo;
            sizing = entity.emoji;
            yankee = entity.children;
            foxtrot = entity.contentStyle;
            output = entity.guildId;
            options = entity.isInteractive;
            tango = undefined;
            if(!(options === tango)) { _fun127248_ip = 39; continue _fun127248 }
 37:
            options = true;
 39:
            entity = _closure1_slot7;
            romeo = entity.bind(tango)();
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = romeo.container;
            entity['style'] = report;
            verify = _closure1_slot5;
            oscar = _closure1_slot3;
            report = {};
            offset = romeo.emojiContainer;
            report['style'] = offset;
            kilo = _closure1_slot5;
            backup = _closure1_slot1;
            result = _closure1_slot2;
            offset = 5;
            offset = result[offset];
            backup = backup.bind(tango)(offset);
            offset = {};
            offset['guildId'] = output;
            offset['id'] = sizing;
            offset = kilo.bind(tango)(backup, offset);
            report['children'] = offset;
            oscar = verify.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            offset = _closure1_slot5;
            verify = _closure1_slot3;
            oscar = {};
            backup = romeo.benefitColumn;
            romeo = new Array(2);
            romeo[0] = backup;
            romeo[1] = foxtrot;
            oscar['style'] = romeo;
            oscar['children'] = yankee;
            oscar = offset.bind(tango)(verify, oscar);
            report[1] = oscar;
            oscar = true;
            oscar = oscar === options;
            if(!oscar) { _fun127248_ip = 250; continue _fun127248 }
 202:
            verify = _closure1_slot5;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 6;
            golf = romeo[golf];
            options = yankee.bind(tango)(golf);
            golf = {};
            offset = 7;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            golf['source'] = offset;
            oscar = verify.bind(tango)(options, golf);
 250:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: DescriptiveBenefitRow
        _fun127249: for(var _fun127249_ip = 0; ; ) switch(_fun127249_ip) {
 0:
            entity = argFoo;
            zulu = entity.benefit;
            golf = entity.children;
            options = entity.guildId;
            report = entity.isInteractive;
            mike = _closure1_slot7;
            tango = undefined;
            romeo = mike.bind(tango)();
            mike = zulu.description;
            offset = null;
            mike = offset != mike;
            oscar = null;
            if(!mike) { _fun127249_ip = 124; continue _fun127249 }
 54:
            yankee = _closure1_slot5;
            verify = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 8;
            mike = foxtrot[mike];
            mike = verify.bind(tango)(mike);
            verify = mike.Text;
            mike = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            romeo = romeo.benefitDescription;
            mike['style'] = romeo;
            romeo = zulu.description;
            mike['children'] = romeo;
            oscar = yankee.bind(tango)(verify, mike);
 124:
            verify = zulu.emoji_id;
            if(!(offset == verify)) { _fun127249_ip = 194; continue _fun127249 }
 134:
            mike = zulu.emoji_name;
            offset = offset != mike;
            mike = '';
            if(!offset) { _fun127249_ip = 191; continue _fun127249 }
 151:
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            romeo = yankee.bind(tango)(offset);
            yankee = romeo.convertSurrogateToName;
            offset = zulu.emoji_name;
            zulu = false;
            mike = yankee.bind(romeo)(offset, zulu);
 191:
            verify = mike;
 194:
            zulu = _closure1_slot6;
            mike = _closure1_slot8;
            entity = {};
            entity['emoji'] = verify;
            entity['guildId'] = options;
            entity['isInteractive'] = report;
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: ChannelBenefitRow
        _fun127250: for(var _fun127250_ip = 0; ; ) switch(_fun127250_ip) {
 0:
            entity = argFoo;
            options = entity.benefit;
            golf = entity.guildId;
            oscar = entity.isInteractive;
            entity = _closure1_slot7;
            report = undefined;
            output = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            entity = tango[entity];
            tango = zulu.bind(report)(entity);
            zulu = tango.useChannelWithTemplateFallback;
            entity = options.ref_id;
            foxtrot = zulu.bind(tango)(entity);
            entity = null;
            zulu = entity != foxtrot;
            romeo = null;
            if(!zulu) { _fun127250_ip = 112; continue _fun127250 }
 81:
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 11;
            zulu = verify[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.getChannelIcon;
            romeo = zulu.bind(tango)(foxtrot);
 112:
            if(!(entity != foxtrot)) { _fun127250_ip = 325; continue _fun127250 }
 119:
            tango = _closure1_slot5;
            zulu = _closure1_slot9;
            entity = {};
            entity['benefit'] = options;
            entity['guildId'] = golf;
            entity['isInteractive'] = oscar;
            options = _closure1_slot6;
            golf = _closure1_slot3;
            oscar = {};
            verify = output.channelRow;
            oscar['style'] = verify;
            yankee = _closure1_slot5;
            sizing = _closure1_slot1;
            backup = _closure1_slot2;
            kilo = 6;
            verify = backup[kilo];
            offset = sizing.bind(report)(verify);
            verify = {};
            output = output.channelIcon;
            verify['style'] = output;
            kilo = backup[kilo];
            kilo = sizing.bind(report)(kilo);
            kilo = kilo.Sizes;
            kilo = kilo.CUSTOM;
            verify['size'] = kilo;
            verify['source'] = romeo;
            offset = yankee.bind(report)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            romeo = _closure1_slot5;
            yankee = _closure1_slot0;
            offset = 8;
            offset = backup[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            foxtrot = foxtrot.name;
            offset['children'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun127250_ip = 452; continue _fun127250;
 325:
            tango = _closure1_slot5;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 8;
            mike = offset[mike];
            mike = verify.bind(report)(mike);
            zulu = mike.Text;
            mike = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            oscar = 12;
            golf = offset[oscar];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.bz1PZW;
            verify = golf.bind(options)(oscar);
            oscar = global;
            oscar = oscar.HermesInternal;
            options = oscar.concat;
            golf = '[';
            oscar = ']';
            oscar = options.bind(golf)(verify, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 452:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: IntangibleBenefitRow
        entity = argFoo;
        options = entity.benefit;
        oscar = entity.guildId;
        report = entity.isInteractive;
        tango = _closure1_slot5;
        zulu = _closure1_slot9;
        mike = {};
        mike['benefit'] = options;
        mike['guildId'] = oscar;
        mike['isInteractive'] = report;
        golf = _closure1_slot5;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 8;
        report = report[entity];
        entity = undefined;
        report = oscar.bind(entity)(report);
        oscar = report.Text;
        report = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        options = options.name;
        report['children'] = options;
        report = golf.bind(entity)(oscar, report);
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: EmojiBenefitRow
        entity = argFoo;
        backup = entity.benefit;
        oscar = entity.guildId;
        report = entity.isInteractive;
        entity = _closure1_slot7;
        tango = undefined;
        verify = entity.bind(tango)();
        zulu = _closure1_slot6;
        mike = _closure1_slot8;
        entity = {};
        golf = backup.id;
        entity['emoji'] = golf;
        entity['guildId'] = oscar;
        oscar = verify.emojiRow;
        entity['contentStyle'] = oscar;
        entity['isInteractive'] = report;
        romeo = _closure1_slot5;
        golf = _closure1_slot0;
        offset = _closure1_slot2;
        oscar = 8;
        report = offset[oscar];
        report = golf.bind(tango)(report);
        yankee = report.Text;
        report = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        foxtrot = verify.emojiColons;
        report['style'] = foxtrot;
        yankee = romeo.bind(tango)(yankee, report);
        report = new Array(3);
        report[0] = yankee;
        foxtrot = _closure1_slot5;
        yankee = offset[oscar];
        yankee = golf.bind(tango)(yankee);
        romeo = yankee.Text;
        yankee = {'variant': 'text-md/semibold', 'color': 'header-primary'};
        backup = backup.name;
        yankee['children'] = backup;
        yankee = foxtrot.bind(tango)(romeo, yankee);
        report[1] = yankee;
        options = _closure1_slot5;
        oscar = offset[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.Text;
        oscar = {'style': null, 'variant': 'text-md/medium', 'color': 'text-muted', 'children': ':'};
        verify = verify.emojiColons;
        oscar['style'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[2] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
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
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    offset = 2;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot4 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'justifyContent': 'flex-start'};
    tango['container'] = verify;
    verify = {'width': 24, 'height': 24, 'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center', 'marginEnd': 16};
    tango['emojiContainer'] = verify;
    verify = {'flexDirection': 'column', 'flexGrow': 1, 'flex': 1, 'alignItems': 'flex-start', 'justifyContent': 'center'};
    tango['benefitColumn'] = verify;
    verify = {'flex': 1, 'marginTop': 2};
    tango['benefitDescription'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    tango['channelRow'] = verify;
    verify = {'width': 16, 'height': 16, 'marginEnd': 8};
    tango['channelIcon'] = verify;
    verify = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center'};
    tango['emojiRow'] = verify;
    verify = {};
    verify['paddingHorizontal'] = offset;
    tango['emojiColons'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildRoleSubscriptionBenefitPreview
        _fun127253: for(var _fun127253_ip = 0; ; ) switch(_fun127253_ip) {
 0:
            entity = argFoo;
            golf = entity.benefit;
            oscar = entity.guildId;
            mike = entity.isInteractive;
            entity = 'roles';
            entity = entity in golf;
            if(entity) { _fun127253_ip = 122; continue _fun127253 }
 34:
            tango = golf.ref_type;
            entity = _closure1_slot4;
            entity = entity.CHANNEL;
            if(!(tango !== entity)) { _fun127253_ip = 88; continue _fun127253 }
 54:
            options = _closure1_slot5;
            report = _closure1_slot11;
            tango = {};
            tango['benefit'] = golf;
            tango['guildId'] = oscar;
            tango['isInteractive'] = mike;
            entity = undefined;
            entity = options.bind(entity)(report, tango);
            _fun127253_ip = 120; continue _fun127253;
 88:
            verify = _closure1_slot5;
            options = _closure1_slot10;
            report = {};
            report['benefit'] = golf;
            report['guildId'] = oscar;
            report['isInteractive'] = mike;
            tango = undefined;
            entity = verify.bind(tango)(options, report);
 120:
            _fun127253_ip = 154; continue _fun127253;
 122:
            report = _closure1_slot5;
            tango = _closure1_slot12;
            zulu = {};
            zulu['benefit'] = golf;
            zulu['guildId'] = oscar;
            zulu['isInteractive'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 154:
            return entity;
        }
    };
    zulu['GuildRoleSubscriptionBenefitPreview'] = mike;
    return entity;
})();