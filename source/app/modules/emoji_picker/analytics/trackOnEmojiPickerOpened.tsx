// app/modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: trackOnEmojiPickerOpened
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.intention;
            sizing = entity.containerWidth;
            foxtra = entity.rowSize;
            offset = entity.isBurstReaction;
            option = entity.analyticsObject;
            zuuluu = _closure1_slot5;
            michal = zuuluu.getChannel;
            tangon = _closure1_slot6;
            entity = tangon.getChannelId;
            entity = entity.bind(tangon)();
            output = michal.bind(zuuluu)(entity);
            oscard = null;
            michal = oscard == output;
            entity = undefined;
            tangon = undefined;
            if(michal) { _fun00002_ip = 89; continue _fun00001 }
 79:
            michal = output.getGuildId;
            tangon = michal.bind(output)();
 89:
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 7;
            michal = backup[michal];
            romeon = zuuluu.bind(entity)(michal);
            report = romeon.getCurrentConfig;
            zuuluu = {};
            kiloes = 'trackOnEmojiPickerOpened';
            zuuluu['location'] = kiloes;
            michal = {};
            result = true;
            michal['autoTrackExposure'] = result;
            michal = report.bind(romeon)(zuuluu, michal);
            zuuluu = michal.canSplitFrecencyList;
            romeon = _closure1_slot0;
            report = 8;
            michal = backup[report];
            echoed = romeon.bind(entity)(michal);
            result = echoed.getCanUseReactionFrecency;
            michal = {'location': 'trackOnEmojiPickerOpened', 'autoTrackExposure': true};
            michal = result.bind(echoed)(michal);
            report = backup[report];
            report = romeon.bind(entity)(report);
            backup = report.RetriggerReactionFrecencyAlgorithmsExperiment;
            romeon = backup.trackExposure;
            report = {};
            report['location'] = kiloes;
            report = romeon.bind(backup)(report);
            if(zuuluu) { _fun00002_ip = 227; continue _fun00001 }
 224:
            if(!michal) { _fun00002_ip = 241; continue _fun00001 }
 227:
            report = _closure1_slot8;
            report = report.REACTION;
            if(!(verify !== report)) { _fun00002_ip = 268; continue _fun00001 }
 241:
            report = _closure1_slot4;
            report = report.emojiFrecencyWithoutFetchingLatest;
            romeon = report.frequently;
            report = romeon.slice;
            romeon = report.bind(romeon)();
            _fun00002_ip = 293; continue _fun00001;
 268:
            report = _closure1_slot4;
            report = report.emojiReactionFrecencyWithoutFetchingLatest;
            backup = report.frequently;
            report = backup.slice;
            romeon = report.bind(backup)();
 293:
            if(!(oscard == output)) { _fun00002_ip = 303; continue _fun00001 }
 297:
            ctrled = new Array(0);
            _fun00002_ip = 334; continue _fun00001;
 303:
            kiloes = _closure1_slot4;
            backup = kiloes.getDisambiguatedEmojiContext;
            report = output.getGuildId;
            report = report.bind(output)();
            report = backup.bind(kiloes)(report);
            ctrled = report.favoriteEmojisWithoutFetchingLatest;
 334:
            if(zuuluu) { _fun00002_ip = 340; continue _fun00001 }
 337:
            if(!michal) { _fun00002_ip = 354; continue _fun00001 }
 340:
            michal = _closure1_slot8;
            michal = michal.REACTION;
            if(!(verify !== michal)) { _fun00002_ip = 372; continue _fun00001 }
 354:
            michal = _closure1_slot4;
            michal = michal.emojiFrecencyWithoutFetchingLatest;
            zuuluu = michal.numFrequentlyItems;
            _fun00002_ip = 388; continue _fun00001;
 372:
            michal = _closure1_slot4;
            michal = michal.emojiReactionFrecencyWithoutFetchingLatest;
            zuuluu = michal.numFrequentlyItems;
 388:
            michal = romeon.slice;
            report = 0;
            result = michal.bind(romeon)(report, zuuluu);
            if(!(oscard == tangon)) { _fun00002_ip = 411; continue _fun00001 }
 405:
            backup = new Array(0);
            _fun00002_ip = 426; continue _fun00001;
 411:
            zuuluu = _closure1_slot4;
            michal = zuuluu.getGuildEmoji;
            backup = michal.bind(zuuluu)(tangon);
 426:
            tangon = _closure1_slot4;
            zuuluu = tangon.getDisambiguatedEmojiContext;
            romeon = oscard == output;
            michal = undefined;
            if(romeon) { _fun00002_ip = 455; continue _fun00001 }
 445:
            romeon = output.getGuildId;
            michal = romeon.bind(output)();
 455:
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.groupedCustomEmojis;
            if(!(oscard == tangon)) { _fun00002_ip = 472; continue _fun00001 }
 470:
            tangon = {};
 472:
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.values;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                entity = argBar;
                michal = entity.length;
                entity = argFoo;
                entity = entity + michal;
                return entity;
            };
            romeon = zuuluu.bind(tangon)(michal, report);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getTopAndNewlyAddedEmojis;
            michal = {};
            kiloes = oscard == output;
            report = undefined;
            if(kiloes) { _fun00002_ip = 554; continue _fun00001 }
 544:
            kiloes = output.getGuildId;
            report = kiloes.bind(output)();
 554:
            michal['guildId'] = report;
            michal['pickerIntention'] = verify;
            michal = zuuluu.bind(tangon)(michal);
            output = michal.topEmojis;
            kiloes = michal.newlyAddedEmojis;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            zuuluu = report.getEmojiHotrail;
            michal = {};
            michal['topEmojis'] = output;
            michal['newlyAddedEmojis'] = kiloes;
            michal['rowSize'] = foxtra;
            michal = zuuluu.bind(report)(michal);
            kiloes = michal.visibleTopEmojis;
            foxtra = michal.visibleNewlyAddedEmojis;
            zuuluu = _closure1_slot1;
            michal = 11;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot8;
            michal = michal.REACTION;
            if(!(verify !== michal)) { _fun00002_ip = 688; continue _fun00001 }
 676:
            michal = _closure1_slot7;
            zuuluu = michal.EXPRESSION_PICKER_OPENED;
            _fun00002_ip = 698; continue _fun00001;
 688:
            michal = _closure1_slot7;
            zuuluu = michal.REACTION_PICKER_OPENED;
 698:
            michal = {};
            michal['width'] = sizing;
            sizing = _closure1_slot9;
            sizing = sizing.EMOJI;
            michal['tab'] = sizing;
            sizing = false;
            michal['badged'] = sizing;
            sizing = ctrled.length;
            michal['num_expressions_favorites'] = sizing;
            output = ctrled.filter;
            sizing = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 20; continue _fun00003 }
 14:
                    entity = michal.animated;
 20:
                    return entity;
                }
            };
            sizing = output.bind(ctrled)(sizing);
            sizing = sizing.length;
            michal['num_animated_expressions_favorites'] = sizing;
            source = ctrled.filter;
            echoed = _closure1_slot1;
            update = _closure1_slot2;
            sizing = 12;
            output = update[sizing];
            output = echoed.bind(entity)(output);
            output = output.isCustomEmoji;
            output = source.bind(ctrled)(output);
            output = output.length;
            michal['num_custom_expressions_favorites'] = output;
            source = ctrled.filter;
            output = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = null;
                entity = entity == michal;
                return entity;
            };
            output = source.bind(ctrled)(output);
            output = output.length;
            michal['num_standard_expressions_favorites'] = output;
            output = result.length;
            michal['num_expressions_frecent'] = output;
            source = result.filter;
            output = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 20; continue _fun00005 }
 14:
                    entity = michal.animated;
 20:
                    return entity;
                }
            };
            output = source.bind(result)(output);
            output = output.length;
            michal['num_animated_expressions_frecent'] = output;
            output = result.filter;
            sizing = update[sizing];
            sizing = echoed.bind(entity)(sizing);
            sizing = sizing.isCustomEmoji;
            sizing = output.bind(result)(sizing);
            sizing = sizing.length;
            michal['num_custom_expressions_frecent'] = sizing;
            output = result.filter;
            sizing = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = null;
                entity = entity == michal;
                return entity;
            };
            sizing = output.bind(result)(sizing);
            sizing = sizing.length;
            michal['num_standard_expressions_frecent'] = sizing;
            backup = backup.length;
            michal['num_current_guild_expressions'] = backup;
            michal['num_custom_expressions_total'] = romeon;
            romeon = kiloes.length;
            michal['num_expressions_top_server'] = romeon;
            backup = kiloes.filter;
            romeon = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            romeon = backup.bind(kiloes)(romeon);
            romeon = romeon.length;
            michal['num_animated_expressions_top_server'] = romeon;
            romeon = foxtra.length;
            michal['num_expressions_newly_added'] = romeon;
            romeon = foxtra.filter;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.animated;
                return entity;
            };
            yankee = romeon.bind(foxtra)(yankee);
            yankee = yankee.length;
            michal['num_animated_expressions_newly_added'] = yankee;
            golfie = _closure1_slot8;
            golfie = golfie.REACTION;
            golfie = verify === golfie;
            if(!golfie) { _fun00002_ip = 1067; continue _fun00001 }
 1057:
            verify = {};
            verify['is_burst'] = offset;
            golfie = verify;
 1067:
            sequen = michal;
            vacuum = golfie;
            golfie = copyDataProperties(sequen, vacuum);
            oscard = oscard != option;
            if(!oscard) { _fun00002_ip = 1094; continue _fun00001 }
 1084:
            golfie = {};
            golfie['location_object'] = option;
            oscard = golfie;
 1094:
            sequen = michal;
            vacuum = oscard;
            oscard = copyDataProperties(sequen, vacuum);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ExpressionPickerViewType;
    var _closure1_slot9 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useTrackOnEmojiPickerOpenedForReactions
        tangon = _closure1_slot3;
        zuuluu = tangon.useRef;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        zuuluu = tangon.useEffect;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot0;
                michal = michal.current;
                tangon = michal.intention;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.REACTION;
                if(!(tangon === zuuluu)) { _fun00008_ip = 55; continue _fun00007 }
 35:
                zuuluu = _closure1_slot10;
                entity = _closure2_slot0;
                michal = entity.current;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 55:
                entity = undefined;
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useTrackOnEmojiPickerOpenedForReactions'] = michal;
    return entity;
})();