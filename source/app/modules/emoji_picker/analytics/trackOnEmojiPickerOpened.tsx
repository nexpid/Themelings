// app/modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: trackOnEmojiPickerOpened
        _fun78139: for(var _fun78139_ip = 0; ; ) switch(_fun78139_ip) {
 0:
            entity = argFoo;
            verify = entity.intention;
            sizing = entity.containerWidth;
            foxtrot = entity.rowSize;
            offset = entity.isBurstReaction;
            options = entity.analyticsObject;
            zulu = _closure1_slot5;
            mike = zulu.getChannel;
            tango = _closure1_slot6;
            entity = tango.getChannelId;
            entity = entity.bind(tango)();
            output = mike.bind(zulu)(entity);
            oscar = null;
            mike = oscar == output;
            entity = undefined;
            tango = undefined;
            if(mike) { _fun78139_ip = 89; continue _fun78139 }
 79:
            mike = output.getGuildId;
            tango = mike.bind(output)();
 89:
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 7;
            mike = backup[mike];
            romeo = zulu.bind(entity)(mike);
            report = romeo.getCurrentConfig;
            zulu = {};
            kilo = 'trackOnEmojiPickerOpened';
            zulu['location'] = kilo;
            mike = {};
            result = true;
            mike['autoTrackExposure'] = result;
            mike = report.bind(romeo)(zulu, mike);
            zulu = mike.canSplitFrecencyList;
            romeo = _closure1_slot0;
            report = 8;
            mike = backup[report];
            echo = romeo.bind(entity)(mike);
            result = echo.getCanUseReactionFrecency;
            mike = {'location': 'trackOnEmojiPickerOpened', 'autoTrackExposure': true};
            mike = result.bind(echo)(mike);
            report = backup[report];
            report = romeo.bind(entity)(report);
            backup = report.RetriggerReactionFrecencyAlgorithmsExperiment;
            romeo = backup.trackExposure;
            report = {};
            report['location'] = kilo;
            report = romeo.bind(backup)(report);
            if(zulu) { _fun78139_ip = 227; continue _fun78139 }
 224:
            if(!mike) { _fun78139_ip = 241; continue _fun78139 }
 227:
            report = _closure1_slot8;
            report = report.REACTION;
            if(!(verify !== report)) { _fun78139_ip = 268; continue _fun78139 }
 241:
            report = _closure1_slot4;
            report = report.emojiFrecencyWithoutFetchingLatest;
            romeo = report.frequently;
            report = romeo.slice;
            romeo = report.bind(romeo)();
            _fun78139_ip = 293; continue _fun78139;
 268:
            report = _closure1_slot4;
            report = report.emojiReactionFrecencyWithoutFetchingLatest;
            backup = report.frequently;
            report = backup.slice;
            romeo = report.bind(backup)();
 293:
            if(!(oscar == output)) { _fun78139_ip = 303; continue _fun78139 }
 297:
            control = new Array(0);
            _fun78139_ip = 334; continue _fun78139;
 303:
            kilo = _closure1_slot4;
            backup = kilo.getDisambiguatedEmojiContext;
            report = output.getGuildId;
            report = report.bind(output)();
            report = backup.bind(kilo)(report);
            control = report.favoriteEmojisWithoutFetchingLatest;
 334:
            if(zulu) { _fun78139_ip = 340; continue _fun78139 }
 337:
            if(!mike) { _fun78139_ip = 354; continue _fun78139 }
 340:
            mike = _closure1_slot8;
            mike = mike.REACTION;
            if(!(verify !== mike)) { _fun78139_ip = 372; continue _fun78139 }
 354:
            mike = _closure1_slot4;
            mike = mike.emojiFrecencyWithoutFetchingLatest;
            zulu = mike.numFrequentlyItems;
            _fun78139_ip = 388; continue _fun78139;
 372:
            mike = _closure1_slot4;
            mike = mike.emojiReactionFrecencyWithoutFetchingLatest;
            zulu = mike.numFrequentlyItems;
 388:
            mike = romeo.slice;
            report = 0;
            result = mike.bind(romeo)(report, zulu);
            if(!(oscar == tango)) { _fun78139_ip = 411; continue _fun78139 }
 405:
            backup = new Array(0);
            _fun78139_ip = 426; continue _fun78139;
 411:
            zulu = _closure1_slot4;
            mike = zulu.getGuildEmoji;
            backup = mike.bind(zulu)(tango);
 426:
            tango = _closure1_slot4;
            zulu = tango.getDisambiguatedEmojiContext;
            romeo = oscar == output;
            mike = undefined;
            if(romeo) { _fun78139_ip = 455; continue _fun78139 }
 445:
            romeo = output.getGuildId;
            mike = romeo.bind(output)();
 455:
            mike = zulu.bind(tango)(mike);
            tango = mike.groupedCustomEmojis;
            if(!(oscar == tango)) { _fun78139_ip = 472; continue _fun78139 }
 470:
            tango = {};
 472:
            mike = global;
            zulu = mike.Object;
            mike = zulu.values;
            tango = mike.bind(zulu)(tango);
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                entity = argBar;
                mike = entity.length;
                entity = argFoo;
                entity = entity + mike;
                return entity;
            };
            romeo = zulu.bind(tango)(mike, report);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.getTopAndNewlyAddedEmojis;
            mike = {};
            kilo = oscar == output;
            report = undefined;
            if(kilo) { _fun78139_ip = 556; continue _fun78139 }
 546:
            kilo = output.getGuildId;
            report = kilo.bind(output)();
 556:
            mike['guildId'] = report;
            mike['pickerIntention'] = verify;
            mike = zulu.bind(tango)(mike);
            output = mike.topEmojis;
            kilo = mike.newlyAddedEmojis;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 10;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            zulu = report.getEmojiHotrail;
            mike = {};
            mike['topEmojis'] = output;
            mike['newlyAddedEmojis'] = kilo;
            mike['rowSize'] = foxtrot;
            mike = zulu.bind(report)(mike);
            kilo = mike.visibleTopEmojis;
            foxtrot = mike.visibleNewlyAddedEmojis;
            zulu = _closure1_slot1;
            mike = 11;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot8;
            mike = mike.REACTION;
            if(!(verify !== mike)) { _fun78139_ip = 690; continue _fun78139 }
 678:
            mike = _closure1_slot7;
            zulu = mike.EXPRESSION_PICKER_OPENED;
            _fun78139_ip = 700; continue _fun78139;
 690:
            mike = _closure1_slot7;
            zulu = mike.REACTION_PICKER_OPENED;
 700:
            mike = {};
            mike['width'] = sizing;
            sizing = _closure1_slot9;
            sizing = sizing.EMOJI;
            mike['tab'] = sizing;
            sizing = false;
            mike['badged'] = sizing;
            sizing = control.length;
            mike['num_expressions_favorites'] = sizing;
            output = control.filter;
            sizing = function(argFoo) {
                _fun78141: for(var _fun78141_ip = 0; ; ) switch(_fun78141_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun78141_ip = 20; continue _fun78141 }
 14:
                    entity = mike.animated;
 20:
                    return entity;
                }
            };
            sizing = output.bind(control)(sizing);
            sizing = sizing.length;
            mike['num_animated_expressions_favorites'] = sizing;
            source = control.filter;
            echo = _closure1_slot1;
            update = _closure1_slot2;
            sizing = 12;
            output = update[sizing];
            output = echo.bind(entity)(output);
            output = output.isCustomEmoji;
            output = source.bind(control)(output);
            output = output.length;
            mike['num_custom_expressions_favorites'] = output;
            source = control.filter;
            output = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = null;
                entity = entity == mike;
                return entity;
            };
            output = source.bind(control)(output);
            output = output.length;
            mike['num_standard_expressions_favorites'] = output;
            output = result.length;
            mike['num_expressions_frecent'] = output;
            source = result.filter;
            output = function(argFoo) {
                _fun78143: for(var _fun78143_ip = 0; ; ) switch(_fun78143_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun78143_ip = 20; continue _fun78143 }
 14:
                    entity = mike.animated;
 20:
                    return entity;
                }
            };
            output = source.bind(result)(output);
            output = output.length;
            mike['num_animated_expressions_frecent'] = output;
            output = result.filter;
            sizing = update[sizing];
            sizing = echo.bind(entity)(sizing);
            sizing = sizing.isCustomEmoji;
            sizing = output.bind(result)(sizing);
            sizing = sizing.length;
            mike['num_custom_expressions_frecent'] = sizing;
            output = result.filter;
            sizing = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = null;
                entity = entity == mike;
                return entity;
            };
            sizing = output.bind(result)(sizing);
            sizing = sizing.length;
            mike['num_standard_expressions_frecent'] = sizing;
            backup = backup.length;
            mike['num_current_guild_expressions'] = backup;
            mike['num_custom_expressions_total'] = romeo;
            romeo = kilo.length;
            mike['num_expressions_top_server'] = romeo;
            backup = kilo.filter;
            romeo = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            romeo = backup.bind(kilo)(romeo);
            romeo = romeo.length;
            mike['num_animated_expressions_top_server'] = romeo;
            romeo = foxtrot.length;
            mike['num_expressions_newly_added'] = romeo;
            romeo = foxtrot.filter;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            yankee = romeo.bind(foxtrot)(yankee);
            yankee = yankee.length;
            mike['num_animated_expressions_newly_added'] = yankee;
            golf = _closure1_slot8;
            golf = golf.REACTION;
            golf = verify === golf;
            if(!golf) { _fun78139_ip = 1081; continue _fun78139 }
 1071:
            verify = {};
            verify['is_burst'] = offset;
            golf = verify;
 1081:
            sequence = mike;
            vacuum = golf;
            golf = copyDataProperties(sequence, vacuum);
            oscar = oscar != options;
            if(!oscar) { _fun78139_ip = 1108; continue _fun78139 }
 1098:
            golf = {};
            golf['location_object'] = options;
            oscar = golf;
 1108:
            sequence = mike;
            vacuum = oscar;
            oscar = copyDataProperties(sequence, vacuum);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ExpressionPickerViewType;
    var _closure1_slot9 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useTrackOnEmojiPickerOpenedForReactions
        tango = _closure1_slot3;
        zulu = tango.useRef;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        zulu = tango.useEffect;
        mike = function() {
            _fun78148: for(var _fun78148_ip = 0; ; ) switch(_fun78148_ip) {
 0:
                mike = _closure2_slot0;
                mike = mike.current;
                tango = mike.intention;
                zulu = _closure1_slot8;
                zulu = zulu.REACTION;
                if(!(tango === zulu)) { _fun78148_ip = 55; continue _fun78148 }
 35:
                zulu = _closure1_slot10;
                entity = _closure2_slot0;
                mike = entity.current;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 55:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['useTrackOnEmojiPickerOpenedForReactions'] = mike;
    return entity;
})();