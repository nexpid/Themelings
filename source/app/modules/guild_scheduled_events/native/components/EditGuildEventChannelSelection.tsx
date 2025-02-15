// app/modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
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
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ChannelTypes;
    var _closure1_slot9 = golf;
    tango = tango.Permissions;
    var _closure1_slot10 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    yankee = 8;
    tango = oscar[yankee];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    romeo = 'column';
    verify['flexDirection'] = romeo;
    tango['container'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    romeo = 9;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    verify['backgroundColor'] = romeo;
    tango['channelSelectorButton'] = verify;
    verify = {};
    verify['marginRight'] = yankee;
    tango['channelIcon'] = verify;
    verify = {'flex': 1, 'marginBottom': 8};
    tango['channelTypeText'] = verify;
    verify = {};
    verify['flex'] = offset;
    tango['channelNameText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/native/components/EditGuildEventChannelSelection.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EditGuildEventChannelSelection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            romeo = mike.guild;
            var _closure2_slot0 = romeo;
            backup = mike.channelType;
            zulu = mike.channel;
            var _closure2_slot1 = zulu;
            entity = mike.guildEventId;
            var _closure2_slot2 = entity;
            tango = mike.recurrenceId;
            var _closure2_slot3 = tango;
            tango = mike.onChangeChannel;
            var _closure2_slot4 = tango;
            oscar = mike.style;
            mike = _closure1_slot13;
            tango = undefined;
            kilo = mike.bind(tango)();
            golf = _closure1_slot0;
            options = _closure1_slot3;
            mike = 10;
            mike = options[mike];
            offset = golf.bind(tango)(mike);
            report = offset.useInputStyles;
            mike = {};
            foxtrot = true;
            mike['hasLeadingIcon'] = foxtrot;
            output = report.bind(offset)(mike);
            mike = _closure1_slot9;
            mike = mike.GUILD_STAGE_VOICE;
            report = backup === mike;
            var _closure2_slot5 = report;
            mike = 11;
            mike = options[mike];
            foxtrot = golf.bind(tango)(mike);
            offset = foxtrot.useGetEventChannelsByType;
            mike = romeo.id;
            mike = offset.bind(foxtrot)(mike, backup);
            var _closure2_slot6 = mike;
            mike = 12;
            mike = options[mike];
            offset = golf.bind(tango)(mike);
            mike = offset.useChannelsUserCanStartStageIn;
            mike = mike.bind(offset)(romeo);
            var _closure2_slot7 = mike;
            offset = _closure1_slot1;
            mike = 13;
            mike = options[mike];
            mike = offset.bind(tango)(mike);
            foxtrot = mike.bind(tango)(zulu);
            mike = 14;
            offset = options[mike];
            sizing = golf.bind(tango)(offset);
            backup = sizing.useStateFromStores;
            offset = _closure1_slot5;
            romeo = new Array(1);
            romeo[0] = offset;
            offset = function() {
                tango = _closure1_slot5;
                zulu = tango.can;
                entity = _closure1_slot10;
                mike = entity.MANAGE_CHANNELS;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            offset = backup.bind(sizing)(romeo, offset);
            var _closure2_slot8 = offset;
            mike = options[mike];
            offset = golf.bind(tango)(mike);
            options = offset.useStateFromStores;
            mike = _closure1_slot8;
            golf = new Array(1);
            golf[0] = mike;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getGuildScheduledEvent;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = options.bind(offset)(golf, entity, mike);
            var _closure2_slot9 = entity;
            options = null;
            if(!(options == zulu)) { _fun00002_ip = 342; continue _fun00001 }
 320:
            mike = _closure1_slot1;
            golf = _closure1_slot3;
            entity = 16;
            entity = golf[entity];
            sizing = mike.bind(tango)(entity);
            _fun00002_ip = 373; continue _fun00001;
 342:
            mike = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 15;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.getChannelIcon;
            sizing = entity.bind(mike)(zulu);
 373:
            if(!(options == zulu)) { _fun00002_ip = 405; continue _fun00001 }
 377:
            mike = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 17;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            backup = entity.LocationIcon;
            _fun00002_ip = 436; continue _fun00001;
 405:
            mike = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 15;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.getChannelIconComponent;
            backup = entity.bind(mike)(zulu);
 436:
            golf = _closure1_slot0;
            entity = _closure1_slot3;
            source = 18;
            mike = entity[source];
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = entity[source];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            if(report) { _fun00002_ip = 496; continue _fun00001 }
 483:
            report = entity.7RYWCA;
            result = mike.bind(zulu)(report);
            _fun00002_ip = 507; continue _fun00001;
 496:
            entity = entity.S7GjDw;
            result = mike.bind(zulu)(entity);
 507:
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            entity = {};
            golf = kilo.container;
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['style'] = report;
            golf = _closure1_slot11;
            update = _closure1_slot0;
            romeo = _closure1_slot3;
            offset = 19;
            report = romeo[offset];
            report = update.bind(tango)(report);
            oscar = report.Text;
            report = {'style': null, 'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            echo = kilo.channelTypeText;
            report['style'] = echo;
            report['children'] = result;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            oscar = 20;
            oscar = romeo[oscar];
            oscar = update.bind(tango)(oscar);
            golf = oscar.PressableOpacity;
            oscar = {};
            oscar['accessibilityLabel'] = result;
            result = romeo[source];
            result = update.bind(tango)(result);
            echo = result.intl;
            result = echo.string;
            romeo = romeo[source];
            romeo = update.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.AaXbMD;
            romeo = result.bind(echo)(romeo);
            oscar['accessibilityHint'] = romeo;
            romeo = {};
            echo = options != foxtrot;
            result = undefined;
            if(!echo) { _fun00002_ip = 698; continue _fun00001 }
 695:
            result = foxtrot;
 698:
            romeo['text'] = result;
            oscar['accessibilityValue'] = romeo;
            romeo = 'button';
            oscar['accessibilityRole'] = romeo;
            result = output.padding;
            romeo = new Array(3);
            romeo[0] = result;
            output = output.radius;
            romeo[1] = output;
            output = kilo.channelSelectorButton;
            romeo[2] = output;
            oscar['style'] = romeo;
            yankee = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 21;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dismissGlobalKeyboard;
                    mike = mike.bind(zulu)();
                    tango = _closure2_slot6;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        golf = argFoo;
                        entity = {};
                        mike = golf.id;
                        entity['value'] = mike;
                        report = _closure1_slot0;
                        tango = _closure1_slot3;
                        zulu = 13;
                        tango = tango[zulu];
                        zulu = undefined;
                        oscar = report.bind(zulu)(tango);
                        report = oscar.computeChannelName;
                        offset = _closure1_slot7;
                        verify = _closure1_slot6;
                        options = true;
                        romeo = oscar;
                        yankee = golf;
                        mike = romeo[report](yankee, offset, verify, options, golf);
                        entity['label'] = mike;
                        return entity;
                    };
                    offset = zulu.bind(tango)(mike);
                    mike = _closure2_slot7;
                    tango = mike.length;
                    mike = null;
                    zulu = 0;
                    verify = null;
                    if(!(zulu === tango)) { _fun00004_ip = 146; continue _fun00003 }
 80:
                    zulu = _closure2_slot8;
                    verify = null;
                    if(!zulu) { _fun00004_ip = 146; continue _fun00003 }
 89:
                    report = _closure1_slot11;
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 22;
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = {};
                    oscar = _closure2_slot0;
                    oscar = oscar.id;
                    zulu['guildId'] = oscar;
                    oscar = function(argFoo) { // Original name: onCreate
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 23;
                            mike = mike[entity];
                            entity = undefined;
                            report = zulu.bind(entity)(mike);
                            tango = report.openCreateOrEditGuildEventModal;
                            zulu = _closure2_slot0;
                            mike = {};
                            golf = argFoo;
                            mike['channel'] = golf;
                            options = _closure2_slot9;
                            golf = null;
                            options = golf != options;
                            golf = undefined;
                            if(!options) { _fun00006_ip = 66; continue _fun00005 }
 62:
                            golf = _closure2_slot9;
 66:
                            mike['guildEvent'] = golf;
                            oscar = _closure2_slot3;
                            mike['recurrenceId'] = oscar;
                            mike = tango.bind(report)(zulu, mike);
                            return entity;
                        }
                    };
                    zulu['onCreate'] = oscar;
                    verify = report.bind(entity)(tango, zulu);
 146:
                    report = _closure1_slot1;
                    zulu = _closure1_slot3;
                    tango = 24;
                    tango = zulu[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.openLazy;
                    yankee = _closure1_slot0;
                    tango = 26;
                    tango = zulu[tango];
                    yankee = yankee.bind(entity)(tango);
                    tango = 25;
                    tango = zulu[tango];
                    zulu = zulu.paths;
                    tango = yankee.bind(entity)(tango, zulu);
                    zulu = {};
                    yankee = _closure2_slot5;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot3;
                    romeo = 18;
                    foxtrot = sizing[romeo];
                    foxtrot = kilo.bind(entity)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = sizing[romeo];
                    romeo = kilo.bind(entity)(romeo);
                    romeo = romeo.t;
                    if(yankee) { _fun00004_ip = 272; continue _fun00003 }
 259:
                    yankee = romeo.7RYWCA;
                    yankee = foxtrot.bind(backup)(yankee);
                    _fun00004_ip = 283; continue _fun00003;
 272:
                    romeo = romeo.S7GjDw;
                    yankee = foxtrot.bind(backup)(romeo);
 283:
                    zulu['title'] = yankee;
                    zulu['items'] = offset;
                    zulu['body'] = verify;
                    golf = function(argFoo) { // Original name: onItemSelect
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            var _closure4_slot0 = entity;
                            tango = _closure2_slot6;
                            zulu = tango.find;
                            mike = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure4_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            zulu = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != zulu)) { _fun00008_ip = 50; continue _fun00007 }
 39:
                            mike = _closure2_slot4;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 50:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 24;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.hideActionSheet;
                            mike = mike.bind(zulu)();
                            return entity;
                        }
                    };
                    zulu['onItemSelect'] = golf;
                    golf = _closure2_slot1;
                    verify = mike == golf;
                    golf = undefined;
                    if(verify) { _fun00004_ip = 330; continue _fun00003 }
 321:
                    options = _closure2_slot1;
                    golf = options.id;
 330:
                    options = mike != golf;
                    mike = undefined;
                    if(!options) { _fun00004_ip = 342; continue _fun00003 }
 339:
                    mike = golf;
 342:
                    zulu['selectedItem'] = mike;
                    mike = 'SelectUpdatesChannel';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            oscar['onPress'] = yankee;
            if(!(options == backup)) { _fun00002_ip = 815; continue _fun00001 }
 767:
            romeo = _closure1_slot11;
            yankee = _closure1_slot1;
            output = _closure1_slot3;
            options = 27;
            options = output[options];
            yankee = yankee.bind(tango)(options);
            options = {};
            options['source'] = sizing;
            sizing = kilo.channelIcon;
            options['style'] = sizing;
            yankee = romeo.bind(tango)(yankee, options);
            _fun00002_ip = 837; continue _fun00001;
 815:
            romeo = _closure1_slot11;
            options = {};
            sizing = kilo.channelIcon;
            options['style'] = sizing;
            yankee = romeo.bind(tango)(backup, options);
 837:
            options = new Array(3);
            options[0] = yankee;
            yankee = _closure1_slot11;
            romeo = _closure1_slot0;
            backup = _closure1_slot3;
            offset = backup[offset];
            offset = romeo.bind(tango)(offset);
            romeo = offset.Text;
            offset = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-active'};
            kilo = kilo.channelNameText;
            offset['style'] = kilo;
            offset['children'] = foxtrot;
            offset = yankee.bind(tango)(romeo, offset);
            options[1] = offset;
            foxtrot = _closure1_slot1;
            verify = 27;
            verify = backup[verify];
            offset = foxtrot.bind(tango)(verify);
            verify = {};
            romeo = 28;
            romeo = backup[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            verify['source'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[2] = verify;
            oscar['children'] = options;
            oscar = zulu.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();