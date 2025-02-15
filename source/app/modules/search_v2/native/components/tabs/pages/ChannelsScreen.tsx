// app/modules/search_v2/native/components/tabs/pages/ChannelsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getVoiceStates
        _fun113784: for(var _fun113784_ip = 0; ; ) switch(_fun113784_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            zulu = argBaz;
            tango = entity.isGuildStageVoice;
            tango = tango.bind(entity)();
            if(!tango) { _fun113784_ip = 25; continue _fun113784 }
 22:
            mike = zulu;
 25:
            entity = entity.id;
            entity = mike[entity];
            mike = null;
            if(!(mike == entity)) { _fun113784_ip = 47; continue _fun113784 }
 40:
            entity = _closure1_slot4;
 47:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = report.bind(entity)(tango);
    options = tango.EMPTY_VOICE_STATES;
    var _closure1_slot4 = options;
    options = tango.SearchListItemTypes;
    var _closure1_slot5 = options;
    options = tango.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot6 = options;
    tango = tango.SearchTabs;
    var _closure1_slot7 = tango;
    tango = 2;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot8 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot9 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun113785: for(var _fun113785_ip = 0; ; ) switch(_fun113785_ip) {
 0:
            mike = argFoo;
            oscar = mike.searchContext;
            var _closure2_slot0 = oscar;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            golf = 3;
            options = tango[golf];
            report = undefined;
            verify = zulu.bind(report)(options);
            options = verify.useTextChannelSearchResults;
            romeo = options.bind(verify)();
            var _closure2_slot1 = romeo;
            golf = tango[golf];
            options = zulu.bind(report)(golf);
            golf = options.useVoiceChannelSearchResults;
            yankee = golf.bind(options)();
            var _closure2_slot2 = yankee;
            options = _closure1_slot1;
            golf = 4;
            golf = tango[golf];
            verify = options.bind(report)(golf);
            golf = oscar.guildId;
            offset = verify.bind(report)(golf);
            var _closure2_slot3 = offset;
            golf = 5;
            golf = tango[golf];
            options = options.bind(report)(golf);
            golf = oscar.guildId;
            foxtrot = options.bind(report)(golf);
            var _closure2_slot4 = foxtrot;
            golf = 6;
            options = tango[golf];
            backup = zulu.bind(report)(options);
            verify = backup.useOnPressGuildTextChannel;
            options = {};
            options['searchContext'] = oscar;
            options = verify.bind(backup)(options);
            var _closure2_slot5 = options;
            golf = tango[golf];
            backup = zulu.bind(report)(golf);
            verify = backup.useOnPressGuildVoiceChannel;
            golf = {};
            golf['searchContext'] = oscar;
            golf = verify.bind(backup)(golf);
            var _closure2_slot6 = golf;
            verify = _closure1_slot3;
            kilo = verify.useCallback;
            backup = new Array(2);
            backup[0] = options;
            backup[1] = oscar;
            options = function(argFoo) {
                report = argFoo;
                mike = _closure2_slot5;
                entity = undefined;
                mike = mike.bind(entity)(report);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 7;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackSearchResultClicked;
                mike = {};
                oscar = _closure2_slot0;
                mike['searchContext'] = oscar;
                mike['channelId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            kilo = kilo.bind(verify)(options, backup);
            var _closure2_slot7 = kilo;
            backup = verify.useCallback;
            options = new Array(2);
            options[0] = golf;
            options[1] = oscar;
            golf = function(argFoo) {
                report = argFoo;
                mike = _closure2_slot6;
                entity = undefined;
                mike = mike.bind(entity)(report);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 7;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackSearchResultClicked;
                mike = {};
                oscar = _closure2_slot0;
                mike['searchContext'] = oscar;
                mike['channelId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            backup = backup.bind(verify)(golf, options);
            var _closure2_slot8 = backup;
            options = verify.useMemo;
            golf = new Array(6);
            golf[0] = kilo;
            golf[1] = backup;
            golf[2] = foxtrot;
            golf[3] = romeo;
            golf[4] = yankee;
            golf[5] = offset;
            entity = function() {
                _fun113788: for(var _fun113788_ip = 0; ; ) switch(_fun113788_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    tango = _closure2_slot1;
                    tango = tango.length;
                    report = 0;
                    if(!(tango > report)) { _fun113788_ip = 145; continue _fun113788 }
 28:
                    oscar = entity.push;
                    tango = {};
                    golf = _closure1_slot5;
                    golf = golf.SECTION;
                    tango['type'] = golf;
                    golf = {};
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    options = 8;
                    verify = foxtrot[options];
                    yankee = undefined;
                    verify = romeo.bind(yankee)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = foxtrot[options];
                    options = romeo.bind(yankee)(options);
                    options = options.t;
                    options = options.nIfr0d;
                    options = verify.bind(offset)(options);
                    golf['title'] = options;
                    tango['props'] = golf;
                    tango = oscar.bind(entity)(tango);
                    golf = _closure2_slot1;
                    oscar = golf.forEach;
                    tango = function(argFoo) {
                        report = argFoo;
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        entity = {};
                        tango = _closure1_slot5;
                        tango = tango.GUILD_TEXT_CHANNEL;
                        entity['type'] = tango;
                        tango = {};
                        oscar = report.channel;
                        tango['channel'] = oscar;
                        report = report.lastMessageId;
                        tango['lastMessageId'] = report;
                        report = _closure2_slot7;
                        tango['onPress'] = report;
                        entity['props'] = tango;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    tango = oscar.bind(golf)(tango);
 145:
                    tango = _closure2_slot2;
                    tango = tango.length;
                    if(!(tango > report)) { _fun113788_ip = 310; continue _fun113788 }
 161:
                    report = entity.push;
                    tango = {};
                    oscar = _closure1_slot5;
                    oscar = oscar.SECTION;
                    tango['type'] = oscar;
                    oscar = {};
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    options = 8;
                    verify = romeo[options];
                    golf = undefined;
                    verify = yankee.bind(golf)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(golf)(options);
                    options = options.t;
                    options = options.CYnO4u;
                    options = verify.bind(offset)(options);
                    oscar['title'] = options;
                    tango['props'] = oscar;
                    tango = report.bind(entity)(tango);
                    oscar = _closure2_slot3;
                    report = _closure2_slot4;
                    tango = function(argFoo, argBar) { // Original name: createSorter
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        mike = argBar;
                        var _closure4_slot1 = mike;
                        entity = function(argFoo, argBar) {
                            _fun113791: for(var _fun113791_ip = 0; ; ) switch(_fun113791_ip) {
 0:
                                oscar = _closure1_slot11;
                                entity = argFoo;
                                entity = entity.channel;
                                report = _closure4_slot0;
                                tango = _closure4_slot1;
                                mike = undefined;
                                zulu = oscar.bind(mike)(entity, report, tango);
                                entity = argBar;
                                entity = entity.channel;
                                mike = oscar.bind(mike)(entity, report, tango);
                                tango = zulu.length;
                                entity = mike.length;
                                tango = tango < entity;
                                entity = 1;
                                if(tango) { _fun113791_ip = 98; continue _fun113791 }
 70:
                                zulu = zulu.length;
                                mike = mike.length;
                                zulu = zulu > mike;
                                mike = 0;
                                if(!zulu) { _fun113791_ip = 95; continue _fun113791 }
 89:
                                mike = -1;
 95:
                                entity = mike;
 98:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    report = tango.bind(golf)(oscar, report);
                    tango = _closure2_slot2;
                    zulu = tango.sort;
                    tango = zulu.bind(tango)(report);
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun113792: for(var _fun113792_ip = 0; ; ) switch(_fun113792_ip) {
 0:
                            oscar = argFoo;
                            zulu = _closure3_slot0;
                            mike = zulu.push;
                            entity = {};
                            tango = _closure1_slot5;
                            tango = tango.GUILD_VOICE_CHANNEL;
                            entity['type'] = tango;
                            tango = {};
                            report = oscar.channel;
                            tango['channel'] = report;
                            verify = _closure2_slot3;
                            options = oscar.channel;
                            options = options.id;
                            verify = verify[options];
                            options = null;
                            if(!(options == verify)) { _fun113792_ip = 76; continue _fun113792 }
 72:
                            verify = _closure1_slot4;
 76:
                            tango['voiceStates'] = verify;
                            verify = _closure2_slot4;
                            oscar = oscar.channel;
                            oscar = oscar.id;
                            oscar = verify[oscar];
                            if(!(options == oscar)) { _fun113792_ip = 107; continue _fun113792 }
 103:
                            oscar = _closure1_slot4;
 107:
                            tango['speakerVoiceStates'] = oscar;
                            report = _closure2_slot8;
                            tango['onPress'] = report;
                            entity['props'] = tango;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 310:
                    return entity;
                }
            };
            yankee = options.bind(verify)(entity, golf);
            entity = 9;
            entity = tango[entity];
            options = zulu.bind(report)(entity);
            golf = options.useIsPlaceholderVisible;
            entity = {};
            entity['searchContext'] = oscar;
            entity['data'] = yankee;
            romeo = golf.bind(options)(entity);
            entity = 10;
            entity = tango[entity];
            tango = zulu.bind(report)(entity);
            zulu = tango.useMessageTabCountsErrorText;
            entity = {};
            entity['searchContext'] = oscar;
            oscar = zulu.bind(tango)(entity);
            entity = null;
            if(!(entity == oscar)) { _fun113785_ip = 516; continue _fun113785 }
 389:
            tango = _closure1_slot10;
            zulu = _closure1_slot9;
            entity = {};
            offset = _closure1_slot8;
            verify = _closure1_slot1;
            foxtrot = _closure1_slot2;
            golf = 12;
            golf = foxtrot[golf];
            options = verify.bind(report)(golf);
            golf = {};
            backup = _closure1_slot7;
            backup = backup.GUILD_CHANNELS;
            golf['tab'] = backup;
            golf['visible'] = romeo;
            options = offset.bind(report)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            options = 13;
            options = foxtrot[options];
            verify = verify.bind(report)(options);
            options = {};
            romeo = !romeo;
            options['visible'] = romeo;
            romeo = _closure1_slot6;
            options['estimatedItemSize'] = romeo;
            options['data'] = yankee;
            options = offset.bind(report)(verify, options);
            golf[1] = options;
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun113785_ip = 552; continue _fun113785;
 516:
            tango = _closure1_slot8;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 11;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['text'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 552:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/tabs/pages/ChannelsScreen.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();