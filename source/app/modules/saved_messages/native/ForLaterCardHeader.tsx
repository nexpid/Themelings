// app/modules/saved_messages/native/ForLaterCardHeader.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: HeaderIcon
        _fun89106: for(var _fun89106_ip = 0; ; ) switch(_fun89106_ip) {
 0:
            mike = argFoo;
            oscar = mike.channel;
            var _closure2_slot0 = oscar;
            mike = _closure1_slot7;
            report = undefined;
            tango = mike.bind(report)();
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            mike = options[mike];
            options = zulu.bind(report)(mike);
            zulu = options.useStateFromStores;
            verify = _closure1_slot4;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = zulu.bind(options)(mike, entity);
            entity = null;
            if(!(entity == verify)) { _fun89106_ip = 251; continue _fun89106 }
 86:
            if(!(entity != oscar)) { _fun89106_ip = 103; continue _fun89106 }
 90:
            entity = oscar.isGroupDM;
            entity = entity.bind(oscar)();
            if(entity) { _fun89106_ip = 181; continue _fun89106 }
 103:
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            tango = tango.dmIcon;
            entity['style'] = tango;
            offset = _closure1_slot5;
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 10;
            tango = yankee[tango];
            tango = options.bind(report)(tango);
            options = tango.ChatIcon;
            tango = {};
            yankee = 'xxs';
            tango['size'] = yankee;
            tango = offset.bind(report)(options, tango);
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun89106_ip = 249; continue _fun89106;
 181:
            tango = _closure1_slot5;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 8;
            mike = offset[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = oscar;
            options = _closure1_slot0;
            oscar = 9;
            oscar = offset[oscar];
            oscar = options.bind(report)(oscar);
            oscar = oscar.AvatarSizes;
            oscar = oscar.XSMALL;
            mike['size'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 249:
            _fun89106_ip = 316; continue _fun89106;
 251:
            tango = _closure1_slot5;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 7;
            mike = options[oscar];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['guild'] = verify;
            golf = _closure1_slot0;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.GuildIconSizes;
            oscar = oscar.XSMALL;
            mike['size'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 316:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: ChannelName
        _fun89108: for(var _fun89108_ip = 0; ; ) switch(_fun89108_ip) {
 0:
            mike = argFoo;
            mike = mike.channel;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot7;
            tango = undefined;
            offset = zulu.bind(tango)();
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            report = 6;
            report = golf[report];
            verify = zulu.bind(tango)(report);
            options = verify.useStateFromStores;
            yankee = _closure1_slot4;
            report = new Array(1);
            report[0] = yankee;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = options.bind(verify)(report, entity);
            options = _closure1_slot1;
            entity = 11;
            entity = golf[entity];
            options = options.bind(tango)(entity);
            entity = false;
            options = options.bind(tango)(mike, entity);
            entity = 12;
            entity = golf[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.getChannelIconComponentWithGuild;
            yankee = entity.bind(zulu)(mike, report);
            entity = mike.isPrivate;
            report = entity.bind(mike)();
            if(report) { _fun89108_ip = 144; continue _fun89108 }
 138:
            entity = null;
            report = entity == yankee;
 144:
            entity = mike.isDM;
            entity = entity.bind(mike)();
            verify = options;
            if(!entity) { _fun89108_ip = 222; continue _fun89108 }
 160:
            mike = _closure1_slot0;
            romeo = _closure1_slot2;
            entity = 13;
            zulu = romeo[entity];
            zulu = mike.bind(tango)(zulu);
            golf = zulu.intl;
            zulu = golf.formatToPlainString;
            entity = romeo[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.t;
            mike = entity.smD7XV;
            entity = {};
            entity['username'] = options;
            verify = zulu.bind(golf)(mike, entity);
 222:
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            golf = offset.channelNameContainer;
            entity['style'] = golf;
            golf = null;
            if(report) { _fun89108_ip = 277; continue _fun89108 }
 247:
            options = _closure1_slot5;
            report = {};
            romeo = offset.channelTypeIcon;
            report['style'] = romeo;
            romeo = 'xxs';
            report['size'] = romeo;
            golf = options.bind(tango)(yankee, report);
 277:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 14;
            oscar = yankee[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            offset = offset.channelName;
            oscar['style'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = oscar[yankee];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    tango['cardHeader'] = verify;
    verify = {'borderRadius': null, 'width': 24, 'height': 24};
    offset = 4;
    romeo = oscar[offset];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['icon'] = verify;
    verify = {};
    romeo = 6;
    verify['padding'] = romeo;
    romeo = oscar[offset];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['dmIcon'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    tango['channelNameContainer'] = verify;
    verify = {};
    verify['flexShrink'] = yankee;
    tango['channelName'] = verify;
    verify = {};
    verify['marginRight'] = offset;
    tango['channelTypeIcon'] = verify;
    verify = {'marginVertical': 4294967292, 'marginLeft': 'auto'};
    tango['actionsContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/saved_messages/native/ForLaterCardHeader.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ForLaterCardHeader
        _fun89110: for(var _fun89110_ip = 0; ; ) switch(_fun89110_ip) {
 0:
            entity = argFoo;
            romeo = entity.channel;
            verify = entity.actions;
            entity = _closure1_slot7;
            tango = undefined;
            offset = entity.bind(tango)();
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = offset.cardHeader;
            entity['style'] = report;
            options = _closure1_slot5;
            golf = _closure1_slot8;
            report = {};
            report['channel'] = romeo;
            golf = options.bind(tango)(golf, report);
            report = new Array(4);
            report[0] = golf;
            golf = romeo.isPrivate;
            options = golf.bind(romeo)();
            golf = null;
            if(options) { _fun89110_ip = 136; continue _fun89110 }
 90:
            foxtrot = _closure1_slot5;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            options = 5;
            options = backup[options];
            options = yankee.bind(tango)(options);
            yankee = options.ChevronSmallRightIcon;
            options = {};
            backup = 'xxs';
            options['size'] = backup;
            golf = foxtrot.bind(tango)(yankee, options);
 136:
            report[1] = golf;
            yankee = _closure1_slot5;
            options = _closure1_slot9;
            golf = {};
            golf['channel'] = romeo;
            golf = yankee.bind(tango)(options, golf);
            report[2] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot3;
            oscar = {};
            offset = offset.actionsContainer;
            oscar['style'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ForLaterCardHeader'] = mike;
    return entity;
})();