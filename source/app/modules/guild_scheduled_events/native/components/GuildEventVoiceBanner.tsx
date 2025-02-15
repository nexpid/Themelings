// app/modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    backup = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = backup;
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
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = backup.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isGuildScheduledEventActive;
    var _closure1_slot5 = tango;
    tango = 3;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot6 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    romeo = 4;
    tango = oscar[romeo];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'margin': 12, 'padding': 12, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
    yankee = 12;
    foxtrot = 5;
    kilo = oscar[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.sm;
    offset['borderRadius'] = kilo;
    kilo = oscar[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_MODIFIER_ACCENT;
    offset['borderColor'] = kilo;
    foxtrot = oscar[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = foxtrot;
    tango['header'] = offset;
    offset = {};
    offset['paddingTop'] = romeo;
    tango['descriptionContainerStyle'] = offset;
    offset = {};
    offset['marginTop'] = yankee;
    tango['button'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.channel;
            var _closure2_slot0 = yankee;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            entity = _closure1_slot8;
            sizing = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            oscar = tango[entity];
            options = zulu.bind(report)(oscar);
            golf = options.useActiveEvent;
            oscar = yankee.id;
            offset = golf.bind(options)(oscar);
            var _closure2_slot1 = offset;
            entity = tango[entity];
            golf = zulu.bind(report)(entity);
            oscar = golf.useImminentUpcomingGuildEvents;
            entity = yankee.id;
            options = oscar.bind(golf)(entity);
            entity = 7;
            entity = tango[entity];
            oscar = zulu.bind(report)(entity);
            tango = oscar.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.getVoiceChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = tango.bind(oscar)(zulu, entity);
            entity = yankee.id;
            golf = zulu === entity;
            entity = null;
            zulu = offset;
            if(!(entity == zulu)) { _fun00002_ip = 178; continue _fun00001 }
 160:
            oscar = entity == options;
            tango = undefined;
            if(oscar) { _fun00002_ip = 175; continue _fun00001 }
 169:
            oscar = 0;
            tango = options[oscar];
 175:
            zulu = tango;
 178:
            _closure2_slot2 = zulu;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 8;
            tango = options[tango];
            verify = oscar.bind(report)(tango);
            tango = verify.useManageResourcePermissions;
            tango = tango.bind(verify)(yankee);
            tango = tango.canManageGuildEvent;
            verify = tango.bind(report)(zulu);
            tango = 9;
            tango = options[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.getNextRecurrenceIdInEvent;
            tango = tango.bind(oscar)(zulu);
            oscar = entity != tango;
            foxtrot = zulu;
            zulu = undefined;
            if(!oscar) { _fun00002_ip = 262; continue _fun00001 }
 259:
            zulu = tango;
 262:
            _closure2_slot3 = zulu;
            oscar = _closure1_slot3;
            options = oscar.useCallback;
            tango = new Array(4);
            tango[0] = foxtrot;
            tango[1] = yankee;
            tango[2] = offset;
            tango[3] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    tango = null;
                    mike = tango == mike;
                    if(!mike) { _fun00004_ip = 24; continue _fun00003 }
 16:
                    zulu = _closure2_slot2;
                    mike = tango != zulu;
 24:
                    if(!mike) { _fun00004_ip = 108; continue _fun00003 }
 27:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 10;
                    zulu = report[zulu];
                    tango = undefined;
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.hideActionSheet;
                    zulu = zulu.bind(oscar)();
                    zulu = _closure1_slot0;
                    mike = 11;
                    mike = report[mike];
                    report = zulu.bind(tango)(mike);
                    tango = report.openStartGuildEventActionSheet;
                    zulu = _closure2_slot2;
                    mike = _closure2_slot3;
                    entity = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.openVoiceChannelActionSheet;
                        mike = _closure2_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = tango.bind(report)(zulu, mike, entity);
 108:
                    entity = undefined;
                    return entity;
                }
            };
            backup = options.bind(oscar)(zulu, tango);
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = foxtrot;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot2;
                    entity = null;
                    if(!(entity != mike)) { _fun00006_ip = 100; continue _fun00005 }
 13:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 10;
                    mike = report[mike];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(mike);
                    mike = oscar.hideActionSheet;
                    mike = mike.bind(oscar)();
                    mike = _closure1_slot0;
                    entity = 13;
                    entity = report[entity];
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.openGuildEventDetails;
                    entity = {};
                    report = _closure2_slot2;
                    report = report.id;
                    entity['eventId'] = report;
                    tango = _closure2_slot2;
                    entity['event'] = tango;
                    entity = mike.bind(zulu)(entity);
 100:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = tango.bind(oscar)(mike, zulu);
            if(!(entity != foxtrot)) { _fun00002_ip = 686; continue _fun00001 }
 341:
            mike = _closure1_slot5;
            options = mike.bind(report)(foxtrot);
            tango = _closure1_slot7;
            yankee = _closure1_slot0;
            output = _closure1_slot2;
            mike = 14;
            mike = output[mike];
            mike = yankee.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            offset = 'button';
            mike['accessibilityRole'] = offset;
            mike['onPress'] = oscar;
            oscar = sizing.header;
            mike['style'] = oscar;
            romeo = _closure1_slot6;
            offset = 15;
            oscar = output[offset];
            oscar = yankee.bind(report)(oscar);
            result = oscar.GuildEventCardHeader;
            oscar = {};
            oscar['event'] = foxtrot;
            echo = false;
            oscar['showUserCount'] = echo;
            result = romeo.bind(report)(result, oscar);
            oscar = new Array(3);
            oscar[0] = result;
            offset = output[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.GuildEventCardMetaInfo;
            offset = {};
            offset['event'] = foxtrot;
            foxtrot = sizing.descriptionContainerStyle;
            offset['descriptionContainerStyle'] = foxtrot;
            offset['condensed'] = golf;
            offset = romeo.bind(report)(yankee, offset);
            oscar[1] = offset;
            if(!golf) { _fun00002_ip = 507; continue _fun00001 }
 504:
            golf = verify;
 507:
            if(!golf) { _fun00002_ip = 513; continue _fun00001 }
 510:
            golf = !options;
 513:
            if(!golf) { _fun00002_ip = 670; continue _fun00001 }
 519:
            offset = _closure1_slot6;
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 16;
            options = foxtrot[yankee];
            verify = romeo.bind(report)(options);
            options = {};
            sizing = sizing.button;
            options['style'] = sizing;
            result = _closure1_slot0;
            kilo = 17;
            sizing = foxtrot[kilo];
            sizing = result.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = foxtrot[kilo];
            kilo = result.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.cK1GGR;
            kilo = sizing.bind(output)(kilo);
            options['text'] = kilo;
            options['onPress'] = backup;
            backup = foxtrot[yankee];
            backup = romeo.bind(report)(backup);
            backup = backup.Colors;
            backup = backup.GREEN;
            options['color'] = backup;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(report)(yankee);
            yankee = yankee.Sizes;
            yankee = yankee.SMALL;
            options['size'] = yankee;
            golf = offset.bind(report)(verify, options);
 670:
            oscar[2] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 686:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();