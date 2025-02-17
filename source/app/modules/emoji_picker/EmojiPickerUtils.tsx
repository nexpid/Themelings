// app/modules/emoji_picker/EmojiPickerUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot21;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot21;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    oscar = function(argFoo) { // Original name: useFrequentlyUsedEmojis
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu = new Array(0);
        zulu = report.bind(oscar)(tango, zulu);
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 15;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getDisambiguatedEmojiContext;
            entity = _closure2_slot0;
            mike = mike.bind(zulu)(entity);
            entity = mike.getFrequentlyUsedEmojisWithoutFetchingLatest;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot22 = oscar;
    report = function(argFoo) { // Original name: useFrequentlyUsedReactionEmojis
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu = new Array(0);
        zulu = report.bind(oscar)(tango, zulu);
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 15;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getDisambiguatedEmojiContext;
            entity = _closure2_slot0;
            mike = mike.bind(zulu)(entity);
            entity = mike.getFrequentlyUsedReactionEmojisWithoutFetchingLatest;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot23 = report;
    tango = function(argFoo) { // Original name: useFavoriteEmojis
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu = new Array(0);
        zulu = report.bind(oscar)(tango, zulu);
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 15;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getDisambiguatedEmojiContext;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            entity = entity.favoriteEmojisWithoutFetchingLatest;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot24 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    yankee = offset[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(yankee);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 5;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    yankee = golf.EmojiCategories;
    var _closure1_slot8 = yankee;
    yankee = golf.EmojiCategoryTypes;
    var _closure1_slot9 = yankee;
    golf = golf.EmojiSubCategory;
    var _closure1_slot10 = golf;
    golf = 6;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    yankee = golf.AnalyticEvents;
    var _closure1_slot11 = yankee;
    yankee = golf.AnalyticsPages;
    var _closure1_slot12 = yankee;
    yankee = golf.AnalyticsSections;
    var _closure1_slot13 = yankee;
    yankee = golf.AutoCompleteResultTypes;
    var _closure1_slot14 = yankee;
    golf = golf.SearchTypes;
    var _closure1_slot15 = golf;
    golf = 7;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    yankee = golf.isExternalEmojiAllowedForIntention;
    var _closure1_slot16 = yankee;
    golf = golf.EmojiIntention;
    var _closure1_slot17 = golf;
    golf = 8;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.ExpressionPickerViewType;
    var _closure1_slot18 = golf;
    golf = 9;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.PremiumUpsellTypes;
    var _closure1_slot19 = golf;
    golf = 23;
    golf = offset[golf];
    foxtrot = verify.bind(entity)(golf);
    romeo = foxtrot.throttle;
    golf = 24;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Millis;
    yankee = golf.HALF_SECOND;
    options = function(argFoo) {
        entity = argFoo;
        golf = entity.emojiSuggestions;
        oscar = entity.analyticsLocation;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 21;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot11;
        zulu = mike.AUTO_SUGGEST_DISPLAYED;
        mike = {};
        options = _closure1_slot14;
        options = options.EMOJI;
        mike['suggestion_type'] = options;
        options = golf.results;
        options = options.length;
        mike['suggestion_quantity'] = options;
        offset = golf.results;
        verify = offset.filter;
        options = function(argFoo) {
            entity = argFoo;
            entity = entity.emoji;
            mike = entity.id;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        options = verify.bind(offset)(options);
        options = options.length;
        mike['custom_quantity'] = options;
        golf = golf.loadId;
        mike['load_id'] = golf;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    golf = {'leading': false, 'trailing': true};
    golf = romeo.bind(foxtrot)(options, yankee, golf);
    options = 26;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/emoji_picker/EmojiPickerUtils.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo, argBar) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            sizing = argFoo;
            result = argBar;
            output = arguments[2];
            report = arguments[3];
            var _closure2_slot0 = sizing;
            var _closure2_slot1 = result;
            oscar = undefined;
            if(!(output === oscar)) { _fun00008_ip = 52; continue _fun00007 }
 28:
            mike = null;
            zulu = mike == result;
            mike = undefined;
            if(zulu) { _fun00008_ip = 49; continue _fun00007 }
 39:
            zulu = result.getGuildId;
            mike = zulu.bind(result)();
 49:
            output = mike;
 52:
            var _closure2_slot2 = output;
            if(!(report === oscar)) { _fun00008_ip = 62; continue _fun00007 }
 60:
            report = false;
 62:
            var _closure2_slot3 = report;
            var _closure2_slot4 = oscar;
            var _closure2_slot5 = oscar;
            var _closure2_slot6 = oscar;
            var _closure2_slot7 = oscar;
            var _closure2_slot8 = oscar;
            var _closure2_slot9 = oscar;
            var _closure2_slot10 = oscar;
            var _closure2_slot11 = oscar;
            var _closure2_slot12 = oscar;
            var _closure2_slot13 = oscar;
            var _closure2_slot14 = oscar;
            tango = _closure1_slot0;
            source = _closure1_slot2;
            zulu = 10;
            zulu = source[zulu];
            golf = tango.bind(oscar)(zulu);
            zulu = golf.maybeFetchTopEmojisByGuild;
            zulu = zulu.bind(golf)(output);
            zulu = _closure1_slot16;
            golf = zulu.bind(oscar)(sizing);
            _closure2_slot4 = golf;
            zulu = _closure1_slot22;
            verify = zulu.bind(oscar)(output);
            _closure2_slot5 = verify;
            zulu = _closure1_slot23;
            offset = zulu.bind(oscar)(output);
            _closure2_slot6 = offset;
            zulu = 11;
            zulu = source[zulu];
            yankee = tango.bind(oscar)(zulu);
            options = yankee.useCanSplitFrecencyList;
            update = 'useEmojiCategories';
            kilo = true;
            zulu = {'location': 'useEmojiCategories', 'autoTrackExposure': true};
            zulu = options.bind(yankee)(zulu);
            romeo = zulu.canSplitFrecencyList;
            _closure2_slot7 = romeo;
            zulu = 12;
            options = source[zulu];
            foxtrot = tango.bind(oscar)(options);
            yankee = foxtrot.useCanUseReactionFrecency;
            options = {'location': 'useEmojiCategories', 'autoTrackExposure': true};
            yankee = yankee.bind(foxtrot)(options);
            _closure2_slot8 = yankee;
            zulu = source[zulu];
            zulu = tango.bind(oscar)(zulu);
            backup = zulu.RetriggerReactionFrecencyAlgorithmsExperiment;
            foxtrot = backup.useExperiment;
            options = {};
            options['location'] = update;
            zulu = {};
            zulu['autoTrackExposure'] = kilo;
            zulu = foxtrot.bind(backup)(options, zulu);
            zulu = _closure1_slot24;
            options = zulu.bind(oscar)(output);
            _closure2_slot9 = options;
            foxtrot = _closure1_slot1;
            zulu = 13;
            zulu = source[zulu];
            zulu = foxtrot.bind(oscar)(zulu);
            zulu = zulu.bind(oscar)(output, sizing);
            kilo = zulu.topEmojis;
            backup = zulu.newlyAddedEmojis;
            zulu = 14;
            zulu = source[zulu];
            foxtrot = foxtrot.bind(oscar)(zulu);
            zulu = {};
            zulu['topEmojis'] = kilo;
            zulu['newlyAddedEmojis'] = backup;
            zulu = foxtrot.bind(oscar)(zulu);
            backup = zulu.allEmojis;
            _closure2_slot10 = backup;
            zulu = 15;
            foxtrot = source[zulu];
            vacuum = tango.bind(oscar)(foxtrot);
            control = vacuum.useStateFromStores;
            foxtrot = _closure1_slot4;
            echo = new Array(1);
            echo[0] = foxtrot;
            kilo = new Array(1);
            kilo[0] = output;
            foxtrot = function() {
                zulu = _closure1_slot4;
                mike = zulu.getDisambiguatedEmojiContext;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = control.bind(vacuum)(echo, foxtrot, kilo);
            _closure2_slot11 = echo;
            foxtrot = source[zulu];
            vacuum = tango.bind(oscar)(foxtrot);
            control = vacuum.useStateFromStores;
            foxtrot = _closure1_slot5;
            kilo = new Array(1);
            kilo[0] = foxtrot;
            foxtrot = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getGuild;
                    entity = _closure2_slot2;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00010_ip = 40; continue _fun00009 }
 35:
                    entity = mike.name;
 40:
                    return entity;
                }
            };
            foxtrot = control.bind(vacuum)(kilo, foxtrot);
            _closure2_slot12 = foxtrot;
            zulu = source[zulu];
            vacuum = tango.bind(oscar)(zulu);
            control = vacuum.useStateFromStores;
            zulu = _closure1_slot7;
            kilo = new Array(1);
            kilo[0] = zulu;
            zulu = function() {
                mike = _closure1_slot7;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            control = control.bind(vacuum)(kilo, zulu);
            zulu = 16;
            zulu = source[zulu];
            kilo = tango.bind(oscar)(zulu);
            zulu = kilo.isPremium;
            kilo = zulu.bind(kilo)(control);
            _closure2_slot13 = kilo;
            zulu = 17;
            zulu = source[zulu];
            oscar = tango.bind(oscar)(zulu);
            tango = oscar.useSoundmojiEmojiPickerSectionExperiment;
            zulu = {};
            zulu['location'] = update;
            oscar = tango.bind(oscar)(zulu);
            _closure2_slot14 = oscar;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(15);
            mike[0] = echo;
            mike[1] = result;
            mike[2] = output;
            mike[3] = sizing;
            mike[4] = kilo;
            mike[5] = backup;
            mike[6] = foxtrot;
            mike[7] = romeo;
            mike[8] = yankee;
            mike[9] = offset;
            mike[10] = verify;
            mike[11] = options;
            mike[12] = golf;
            mike[13] = oscar;
            mike[14] = report;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure2_slot11;
                    zulu = tango.getGroupedCustomEmoji;
                    update = zulu.bind(tango)();
                    report = _closure1_slot6;
                    tango = report.getFlattenedGuildIds;
                    report = tango.bind(report)();
                    echo = new Array(0);
                    var _closure3_slot0 = echo;
                    oscar = {};
                    tango = _closure1_slot9;
                    golf = tango.SOUNDMOJI;
                    oscar['type'] = golf;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golf = 18;
                    options = yankee[golf];
                    result = undefined;
                    options = offset.bind(result)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(result)(golf);
                    golf = golf.t;
                    golf = golf.f0Ezmp;
                    golf = options.bind(verify)(golf);
                    oscar['name'] = golf;
                    golf = _closure1_slot8;
                    golf = golf.SOUNDMOJI;
                    oscar['id'] = golf;
                    golf = false;
                    oscar['isNitroLocked'] = golf;
                    output = function(argFoo) { // Original name: getEmojiUnavailableReasons
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getEmojiUnavailableReasons;
                        entity = {};
                        tango = argFoo;
                        entity['categoryEmojis'] = tango;
                        report = _closure2_slot1;
                        entity['channel'] = report;
                        report = _closure2_slot2;
                        entity['guildId'] = report;
                        tango = _closure2_slot0;
                        entity['intention'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    var _closure3_slot1 = output;
                    sizing = tango.GUILD;
                    tango = _closure1_slot20;
                    kilo = tango.bind(result)(report);
                    report = kilo.bind(result)();
                    tango = report.done;
                    backup = null;
                    foxtrot = 0;
                    romeo = report;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    report = undefined;
                    if(tango) { _fun00012_ip = 605; continue _fun00011 }
 202:
                    control = romeo.value;
                    tango = _closure1_slot9;
                    tango = tango.GUILD;
                    sierra = undefined;
                    if(!(sizing === tango)) { _fun00012_ip = 237; continue _fun00011 }
 223:
                    source = _closure1_slot5;
                    tango = source.getGuild;
                    sierra = tango.bind(source)(control);
 237:
                    config = offset;
                    sequence = verify;
                    vacuum = options;
                    control = golf;
                    source = report;
                    if(!(backup != sierra)) { _fun00012_ip = 572; continue _fun00011 }
 259:
                    tango = backup == update;
                    status = undefined;
                    if(tango) { _fun00012_ip = 277; continue _fun00011 }
 268:
                    tango = sierra.id;
                    status = update[tango];
 277:
                    yankee = status;
                    config = offset;
                    sequence = verify;
                    vacuum = options;
                    control = golf;
                    source = report;
                    if(!(backup != status)) { _fun00012_ip = 572; continue _fun00011 }
 302:
                    tango = status.length;
                    yankee = status;
                    config = offset;
                    sequence = verify;
                    vacuum = options;
                    control = golf;
                    source = report;
                    if(!(foxtrot !== tango)) { _fun00012_ip = 572; continue _fun00011 }
 332:
                    tango = output.bind(result)(status);
                    target = tango.emojisDisabled;
                    papa = tango.emojisUnfiltered;
                    context = tango.emojisPremiumLockedCount;
                    record = tango.emojiNitroLocked;
                    tango = _closure2_slot1;
                    if(!(backup != tango)) { _fun00012_ip = 399; continue _fun00011 }
 369:
                    tango = papa.length;
                    yankee = status;
                    config = target;
                    sequence = papa;
                    vacuum = context;
                    control = record;
                    source = report;
                    if(!(foxtrot !== tango)) { _fun00012_ip = 572; continue _fun00011 }
 399:
                    tango = _closure1_slot9;
                    lima = tango.GUILD;
                    tango = null;
                    if(!(sizing === lima)) { _fun00012_ip = 478; continue _fun00011 }
 415:
                    lima = {};
                    whiskey = _closure1_slot9;
                    whiskey = whiskey.GUILD;
                    lima['type'] = whiskey;
                    lima['guild'] = sierra;
                    whiskey = _closure2_slot13;
                    whiskey = !whiskey;
                    if(!whiskey) { _fun00012_ip = 448; continue _fun00011 }
 445:
                    whiskey = record;
 448:
                    if(!whiskey) { _fun00012_ip = 460; continue _fun00011 }
 451:
                    equality = status.length;
                    whiskey = context === equality;
 460:
                    lima['isNitroLocked'] = whiskey;
                    lima['emojis'] = status;
                    lima['emojisDisabled'] = target;
                    tango = lima;
 478:
                    yankee = status;
                    config = target;
                    sequence = papa;
                    vacuum = context;
                    control = record;
                    source = tango;
                    if(!(backup != tango)) { _fun00012_ip = 572; continue _fun00011 }
 500:
                    lima = sierra.id;
                    sierra = _closure2_slot2;
                    if(!(lima !== sierra)) { _fun00012_ip = 543; continue _fun00011 }
 513:
                    sierra = echo.push;
                    sierra = sierra.bind(echo)(tango);
                    yankee = status;
                    config = target;
                    sequence = papa;
                    vacuum = context;
                    control = record;
                    source = tango;
                    _fun00012_ip = 572; continue _fun00011;
 543:
                    sierra = echo.unshift;
                    sierra = sierra.bind(echo)(tango);
                    yankee = status;
                    config = target;
                    sequence = papa;
                    vacuum = context;
                    control = record;
                    source = tango;
 572:
                    record = kilo.bind(result)();
                    tango = record.done;
                    offset = config;
                    verify = sequence;
                    options = vacuum;
                    golf = control;
                    report = source;
                    romeo = record;
                    if(!tango) { _fun00012_ip = 202; continue _fun00011 }
 605:
                    zulu = _closure1_slot4;
                    tango = zulu.categories;
                    zulu = tango.reduce;
                    report = _closure2_slot14;
                    if(!report) { _fun00012_ip = 635; continue _fun00011 }
 628:
                    mike = _closure2_slot3;
                    if(mike) { _fun00012_ip = 641; continue _fun00011 }
 635:
                    mike = new Array(0);
                    _fun00012_ip = 652; continue _fun00011;
 641:
                    report = new Array(1);
                    report[0] = oscar;
                    mike = report;
 652:
                    entity = function(argFoo, argBar) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argFoo;
                            golf = argBar;
                            mike = _closure1_slot8;
                            mike = mike.TOP_GUILD_EMOJI;
                            if(!(golf !== mike)) { _fun00014_ip = 567; continue _fun00013 }
 26:
                            mike = _closure1_slot8;
                            mike = mike.RECENT;
                            if(!(golf !== mike)) { _fun00014_ip = 363; continue _fun00013 }
 43:
                            mike = _closure1_slot8;
                            mike = mike.FAVORITES;
                            if(!(golf !== mike)) { _fun00014_ip = 197; continue _fun00013 }
 60:
                            mike = _closure1_slot8;
                            mike = mike.CUSTOM;
                            if(!(golf !== mike)) { _fun00014_ip = 120; continue _fun00013 }
 74:
                            zulu = entity.push;
                            mike = {};
                            tango = _closure1_slot9;
                            tango = tango.UNICODE;
                            mike['type'] = tango;
                            mike['id'] = golf;
                            mike['name'] = golf;
                            tango = false;
                            mike['isNitroLocked'] = tango;
                            mike = zulu.bind(entity)(mike);
                            _fun00014_ip = 738; continue _fun00013;
 120:
                            report = _closure3_slot0;
                            zulu = _closure2_slot4;
                            if(zulu) { _fun00014_ip = 158; continue _fun00013 }
 137:
                            tango = _closure3_slot0;
                            zulu = tango.filter;
                            mike = function(argFoo) {
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    mike = argFoo;
                                    zulu = mike.type;
                                    entity = _closure1_slot9;
                                    entity = entity.GUILD;
                                    entity = zulu === entity;
                                    if(!entity) { _fun00016_ip = 49; continue _fun00015 }
 28:
                                    mike = mike.guild;
                                    zulu = mike.id;
                                    mike = _closure2_slot2;
                                    entity = zulu === mike;
 49:
                                    return entity;
                                }
                            };
                            report = zulu.bind(tango)(mike);
 158:
                            zulu = entity.push;
                            mike = new Array(0);
                            backup = 0;
                            sizing = mike;
                            kilo = report;
                            tango = arraySpread(sizing, kilo, backup);
                            sizing = zulu;
                            kilo = mike;
                            backup = entity;
                            mike = apply(sizing, kilo, backup);
                            _fun00014_ip = 738; continue _fun00013;
 197:
                            zulu = _closure3_slot1;
                            mike = _closure2_slot9;
                            romeo = undefined;
                            mike = zulu.bind(romeo)(mike);
                            tango = mike.emojisDisabled;
                            report = mike.emojisUnfiltered;
                            mike = null;
                            if(!(mike != report)) { _fun00014_ip = 361; continue _fun00013 }
 239:
                            zulu = report.length;
                            mike = 0;
                            if(!(mike !== zulu)) { _fun00014_ip = 361; continue _fun00013 }
 250:
                            zulu = entity.push;
                            mike = {};
                            options = _closure1_slot9;
                            options = options.FAVORITES;
                            mike['type'] = options;
                            mike['id'] = golf;
                            yankee = _closure1_slot0;
                            foxtrot = _closure1_slot2;
                            options = 18;
                            verify = foxtrot[options];
                            verify = yankee.bind(romeo)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            options = foxtrot[options];
                            options = yankee.bind(romeo)(options);
                            options = options.t;
                            options = options.y3LQCA;
                            options = verify.bind(offset)(options);
                            mike['name'] = options;
                            options = false;
                            mike['isNitroLocked'] = options;
                            mike['emojis'] = report;
                            mike['emojisDisabled'] = tango;
                            mike = zulu.bind(entity)(mike);
                            _fun00014_ip = 738; continue _fun00013;
 361:
                            return entity;
 363:
                            tango = _closure2_slot0;
                            zulu = _closure1_slot17;
                            zulu = zulu.REACTION;
                            if(!(tango === zulu)) { _fun00014_ip = 398; continue _fun00013 }
 384:
                            zulu = _closure2_slot7;
                            if(zulu) { _fun00014_ip = 404; continue _fun00013 }
 391:
                            zulu = _closure2_slot8;
                            if(zulu) { _fun00014_ip = 404; continue _fun00013 }
 398:
                            zulu = _closure2_slot5;
                            _fun00014_ip = 408; continue _fun00013;
 404:
                            zulu = _closure2_slot6;
 408:
                            mike = _closure3_slot1;
                            romeo = undefined;
                            mike = mike.bind(romeo)(zulu);
                            tango = mike.emojisDisabled;
                            report = mike.emojisUnfiltered;
                            mike = null;
                            if(!(mike != report)) { _fun00014_ip = 565; continue _fun00013 }
 443:
                            zulu = report.length;
                            mike = 0;
                            if(!(mike !== zulu)) { _fun00014_ip = 565; continue _fun00013 }
 454:
                            zulu = entity.push;
                            mike = {};
                            options = _closure1_slot9;
                            options = options.RECENT;
                            mike['type'] = options;
                            mike['id'] = golf;
                            yankee = _closure1_slot0;
                            foxtrot = _closure1_slot2;
                            options = 18;
                            verify = foxtrot[options];
                            verify = yankee.bind(romeo)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            options = foxtrot[options];
                            options = yankee.bind(romeo)(options);
                            options = options.t;
                            options = options.5TvaSk;
                            options = verify.bind(offset)(options);
                            mike['name'] = options;
                            options = false;
                            mike['isNitroLocked'] = options;
                            mike['emojis'] = report;
                            mike['emojisDisabled'] = tango;
                            mike = zulu.bind(entity)(mike);
                            _fun00014_ip = 738; continue _fun00013;
 565:
                            return entity;
 567:
                            zulu = _closure3_slot1;
                            mike = _closure2_slot10;
                            yankee = undefined;
                            mike = zulu.bind(yankee)(mike);
                            tango = mike.emojisDisabled;
                            report = mike.emojisUnfiltered;
                            mike = null;
                            if(!(mike != report)) { _fun00014_ip = 740; continue _fun00013 }
 609:
                            zulu = report.length;
                            mike = 0;
                            if(!(mike !== zulu)) { _fun00014_ip = 740; continue _fun00013 }
 620:
                            zulu = entity.push;
                            mike = {};
                            options = _closure1_slot9;
                            options = options.TOP_GUILD_EMOJI;
                            mike['type'] = options;
                            mike['id'] = golf;
                            golf = _closure1_slot0;
                            romeo = _closure1_slot2;
                            oscar = 18;
                            options = romeo[oscar];
                            options = golf.bind(yankee)(options);
                            verify = options.intl;
                            options = verify.formatToPlainString;
                            oscar = romeo[oscar];
                            oscar = golf.bind(yankee)(oscar);
                            oscar = oscar.t;
                            golf = oscar.W6Wi1d;
                            oscar = {};
                            offset = _closure2_slot12;
                            oscar['guildName'] = offset;
                            oscar = options.bind(verify)(golf, oscar);
                            mike['name'] = oscar;
                            oscar = false;
                            mike['isNitroLocked'] = oscar;
                            mike['emojis'] = report;
                            mike['emojisDisabled'] = tango;
                            mike = zulu.bind(entity)(mike);
 738:
                            return entity;
 740:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useEmojiCategories'] = options;
    options = function(argFoo) {
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            options = argFoo;
            oscar = null;
            zulu = oscar == options;
            entity = undefined;
            mike = undefined;
            if(zulu) { _fun00018_ip = 26; continue _fun00017 }
 16:
            zulu = options.getGuildId;
            mike = zulu.bind(options)();
 26:
            verify = oscar != mike;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 20;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot11;
            zulu = mike.PREMIUM_PROMOTION_OPENED;
            mike = {};
            offset = _closure1_slot12;
            if(verify) { _fun00018_ip = 85; continue _fun00017 }
 77:
            verify = offset.DM_CHANNEL;
            _fun00018_ip = 91; continue _fun00017;
 85:
            verify = offset.GUILD_CHANNEL;
 91:
            mike['location_page'] = verify;
            if(!(oscar == options)) { _fun00018_ip = 112; continue _fun00017 }
 100:
            oscar = _closure1_slot13;
            oscar = oscar.CUSTOM_STATUS_MODAL;
            _fun00018_ip = 122; continue _fun00017;
 112:
            golf = _closure1_slot13;
            oscar = golf.EMOJI_PICKER_POPOUT;
 122:
            mike['location_section'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackPremiumSettingsPaneOpened'] = options;
    options = function(argFoo, argBar) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            options = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 21;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.SEARCH_STARTED;
            mike = {};
            oscar = null;
            if(!(oscar != options)) { _fun00020_ip = 66; continue _fun00019 }
 52:
            oscar = _closure1_slot17;
            oscar = oscar.REACTION;
            if(!(options !== oscar)) { _fun00020_ip = 78; continue _fun00019 }
 66:
            oscar = _closure1_slot15;
            oscar = oscar.EMOJI;
            _fun00020_ip = 88; continue _fun00019;
 78:
            golf = _closure1_slot15;
            oscar = golf.EMOJI_REACTION;
 88:
            mike['search_type'] = oscar;
            oscar = argFoo;
            mike['location'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiSearchStart'] = options;
    options = function(argFoo, argBar, argBaz, argCorge, argGrault) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            options = argGrault;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 21;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.SEARCH_RESULT_VIEWED;
            mike = {};
            oscar = null;
            if(!(oscar != options)) { _fun00022_ip = 66; continue _fun00021 }
 52:
            oscar = _closure1_slot17;
            oscar = oscar.REACTION;
            if(!(options !== oscar)) { _fun00022_ip = 78; continue _fun00021 }
 66:
            oscar = _closure1_slot15;
            oscar = oscar.EMOJI;
            _fun00022_ip = 88; continue _fun00021;
 78:
            golf = _closure1_slot15;
            oscar = golf.EMOJI_REACTION;
 88:
            mike['search_type'] = oscar;
            oscar = argFoo;
            mike['total_results'] = oscar;
            oscar = argBar;
            mike['num_results_locked'] = oscar;
            oscar = argCorge;
            mike['query'] = oscar;
            oscar = argBaz;
            mike['location'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiSearchResultsViewed'] = options;
    options = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            romeo = entity.emoji;
            verify = entity.emojiSuggestions;
            offset = entity.searchQuery;
            yankee = entity.isLocked;
            backup = entity.location;
            kilo = entity.intention;
            oscar = entity.index;
            foxtrot = romeo.uniqueName;
            options = null;
            if(!(options == foxtrot)) { _fun00024_ip = 62; continue _fun00023 }
 57:
            foxtrot = romeo.name;
 62:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 22;
            zulu = report[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.match;
            output = zulu.bind(tango)(kilo);
            sizing = output.with;
            zulu = _closure1_slot17;
            kilo = zulu.REACTION;
            tango = function() {
                entity = _closure1_slot15;
                entity = entity.EMOJI_REACTION;
                return entity;
            };
            sizing = sizing.bind(output)(kilo, tango);
            kilo = sizing.with;
            tango = zulu.AUTO_SUGGESTION;
            zulu = function() {
                entity = _closure1_slot15;
                entity = entity.EMOJI_AUTO_SUGGESTION;
                return entity;
            };
            kilo = kilo.bind(sizing)(tango, zulu);
            tango = kilo.otherwise;
            zulu = function() {
                entity = _closure1_slot15;
                entity = entity.EMOJI;
                return entity;
            };
            kilo = tango.bind(kilo)(zulu);
            tango = _closure1_slot1;
            zulu = 21;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.SEARCH_RESULT_SELECTED;
            mike = {};
            mike['search_type'] = kilo;
            mike['location'] = backup;
            backup = romeo.guildId;
            mike['expression_guild_id'] = backup;
            backup = romeo.id;
            mike['emoji_id'] = backup;
            mike['emoji_name'] = foxtrot;
            foxtrot = romeo.id;
            foxtrot = options != foxtrot;
            mike['is_custom'] = foxtrot;
            romeo = romeo.animated;
            mike['is_animated'] = romeo;
            mike['is_locked'] = yankee;
            mike['query'] = offset;
            mike['index_num'] = oscar;
            offset = options == verify;
            oscar = undefined;
            if(offset) { _fun00024_ip = 290; continue _fun00023 }
 284:
            oscar = verify.loadId;
 290:
            mike['load_id'] = oscar;
            offset = options == verify;
            oscar = undefined;
            if(offset) { _fun00024_ip = 324; continue _fun00023 }
 304:
            offset = verify.results;
            yankee = options == offset;
            oscar = undefined;
            if(yankee) { _fun00024_ip = 324; continue _fun00023 }
 319:
            oscar = offset.length;
 324:
            mike['total_results'] = oscar;
            offset = options == verify;
            oscar = undefined;
            if(offset) { _fun00024_ip = 383; continue _fun00023 }
 338:
            offset = verify.results;
            options = options == offset;
            oscar = undefined;
            if(options) { _fun00024_ip = 383; continue _fun00023 }
 353:
            verify = offset.map;
            options = function(argFoo) {
                entity = argFoo;
                entity = entity.emoji;
                entity = entity.id;
                return entity;
            };
            verify = verify.bind(offset)(options);
            options = verify.filter;
            golf = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            oscar = options.bind(verify)(golf);
 383:
            mike['emoji_suggestion_ids'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiSearchSelect'] = options;
    options = function(argFoo, argBar) {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 21;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot11;
        zulu = mike.SEARCH_RESULT_EMPTY;
        mike = {};
        oscar = _closure1_slot15;
        oscar = oscar.EMOJI;
        mike['search_type'] = oscar;
        oscar = argBar;
        mike['query'] = oscar;
        oscar = argFoo;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackEmojiSearchEmpty'] = options;
    options = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            golf = entity.emoji;
            yankee = entity.subCategory;
            oscar = entity.position;
            options = entity.newlyAddedHighlight;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 21;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.EXPRESSION_PICKER_EXPRESSION_FOCUS;
            mike = {};
            verify = null;
            offset = verify == yankee;
            verify = undefined;
            if(offset) { _fun00026_ip = 89; continue _fun00025 }
 80:
            offset = yankee.toString;
            verify = offset.bind(yankee)();
 89:
            mike['expression_section'] = verify;
            mike['newly_added_highlight'] = options;
            options = golf.id;
            mike['emoji_id'] = options;
            options = golf.name;
            mike['emoji_name'] = options;
            golf = golf.animated;
            mike['emoji_animated'] = golf;
            mike['emoji_position'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiFocus'] = options;
    options = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            mike = argFoo;
            romeo = mike.emoji;
            backup = mike.location;
            tango = mike.pickerIntention;
            offset = mike.category;
            yankee = mike.subCategory;
            entity = undefined;
            if(!(yankee === entity)) { _fun00028_ip = 50; continue _fun00027 }
 37:
            zulu = _closure1_slot10;
            yankee = zulu.NONE;
 50:
            options = mike.position;
            golf = mike.newlyAddedHighlight;
            oscar = mike.isBurstReaction;
            zulu = _closure1_slot17;
            zulu = zulu.REACTION;
            if(!(zulu !== tango)) { _fun00028_ip = 122; continue _fun00027 }
 84:
            zulu = _closure1_slot17;
            zulu = zulu.STATUS;
            if(!(zulu !== tango)) { _fun00028_ip = 110; continue _fun00027 }
 98:
            zulu = _closure1_slot19;
            kilo = zulu.EMOJI_PICKER_EMOJI_CLICKED;
            _fun00028_ip = 146; continue _fun00027;
 110:
            zulu = _closure1_slot19;
            kilo = zulu.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            _fun00028_ip = 146; continue _fun00027;
 122:
            tango = _closure1_slot19;
            if(oscar) { _fun00028_ip = 137; continue _fun00027 }
 129:
            zulu = tango.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            _fun00028_ip = 143; continue _fun00027;
 137:
            zulu = tango.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED;
 143:
            kilo = zulu;
 146:
            foxtrot = romeo.uniqueName;
            verify = null;
            if(!(verify == foxtrot)) { _fun00028_ip = 163; continue _fun00027 }
 158:
            foxtrot = romeo.name;
 163:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 21;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.EXPRESSION_PICKER_EXPRESSION_SELECTED;
            mike = {};
            mike['type'] = kilo;
            mike['location'] = backup;
            backup = romeo.id;
            mike['expression_id'] = backup;
            mike['expression_name'] = foxtrot;
            foxtrot = romeo.guildId;
            mike['expression_guild_id'] = foxtrot;
            foxtrot = romeo.id;
            foxtrot = verify != foxtrot;
            mike['is_custom'] = foxtrot;
            romeo = romeo.animated;
            mike['is_animated'] = romeo;
            mike['expression_picker_section'] = offset;
            offset = verify == yankee;
            verify = undefined;
            if(offset) { _fun00028_ip = 284; continue _fun00027 }
 275:
            offset = yankee.toString;
            verify = offset.bind(yankee)();
 284:
            mike['expression_section'] = verify;
            mike['emoji_position'] = options;
            mike['newly_added_highlight'] = golf;
            mike['is_burst'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiSelect'] = options;
    options = function(argFoo) {
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            oscar = entity.emoji;
            offset = entity.location;
            golf = oscar.uniqueName;
            options = null;
            if(!(options == golf)) { _fun00030_ip = 31; continue _fun00029 }
 26:
            golf = oscar.name;
 31:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 21;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot11;
            zulu = mike.EXPRESSION_FAVORITED;
            mike = {};
            mike['location'] = offset;
            verify = _closure1_slot18;
            verify = verify.EMOJI;
            mike['expression_type'] = verify;
            verify = oscar.id;
            mike['expression_id'] = verify;
            mike['expression_name'] = golf;
            golf = oscar.guildId;
            mike['expression_guild_id'] = golf;
            golf = oscar.id;
            golf = options != golf;
            mike['is_custom'] = golf;
            oscar = oscar.animated;
            mike['is_animated'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackEmojiFavorited'] = options;
    zulu['throttledTrackEmojiAutoSuggestDisplayed'] = golf;
    golf = function(argFoo, argBar) {
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            zulu = entity.type;
            mike = _closure1_slot9;
            mike = mike.GUILD;
            if(!(zulu !== mike)) { _fun00032_ip = 35; continue _fun00031 }
 28:
            entity = entity.id;
            _fun00032_ip = 60; continue _fun00031;
 35:
            mike = null;
            zulu = mike != tango;
            mike = '';
            if(!zulu) { _fun00032_ip = 57; continue _fun00031 }
 48:
            zulu = tango.toString;
            mike = zulu.bind(tango)();
 57:
            entity = mike;
 60:
            return entity;
        }
    };
    zulu['getAriaIdForEmojiCategory'] = golf;
    golf = function(argFoo, argBar) {
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            mike = argFoo;
            report = argBar;
            zulu = _closure1_slot8;
            zulu = zulu.TOP_GUILD_EMOJI;
            if(!(zulu !== mike)) { _fun00034_ip = 961; continue _fun00033 }
 26:
            zulu = _closure1_slot8;
            zulu = zulu.RECENT;
            if(!(zulu !== mike)) { _fun00034_ip = 902; continue _fun00033 }
 43:
            zulu = _closure1_slot8;
            zulu = zulu.FAVORITES;
            if(!(zulu !== mike)) { _fun00034_ip = 843; continue _fun00033 }
 60:
            zulu = _closure1_slot8;
            zulu = zulu.ACTIVITY;
            if(!(zulu !== mike)) { _fun00034_ip = 782; continue _fun00033 }
 77:
            zulu = _closure1_slot8;
            zulu = zulu.FLAGS;
            if(!(zulu !== mike)) { _fun00034_ip = 721; continue _fun00033 }
 94:
            zulu = _closure1_slot8;
            zulu = zulu.FOOD;
            if(!(zulu !== mike)) { _fun00034_ip = 660; continue _fun00033 }
 111:
            zulu = _closure1_slot8;
            zulu = zulu.NATURE;
            if(!(zulu !== mike)) { _fun00034_ip = 599; continue _fun00033 }
 128:
            zulu = _closure1_slot8;
            zulu = zulu.OBJECTS;
            if(!(zulu !== mike)) { _fun00034_ip = 538; continue _fun00033 }
 145:
            zulu = _closure1_slot8;
            zulu = zulu.PEOPLE;
            if(!(zulu !== mike)) { _fun00034_ip = 477; continue _fun00033 }
 162:
            zulu = _closure1_slot8;
            zulu = zulu.SYMBOLS;
            if(!(zulu !== mike)) { _fun00034_ip = 416; continue _fun00033 }
 179:
            zulu = _closure1_slot8;
            zulu = zulu.TRAVEL;
            if(!(zulu !== mike)) { _fun00034_ip = 355; continue _fun00033 }
 196:
            zulu = _closure1_slot8;
            zulu = zulu.PREMIUM_UPSELL;
            if(!(zulu !== mike)) { _fun00034_ip = 294; continue _fun00033 }
 210:
            zulu = _closure1_slot8;
            zulu = zulu.SOUNDMOJI;
            if(!(zulu !== mike)) { _fun00034_ip = 235; continue _fun00033 }
 224:
            zulu = null;
            if(!(zulu != report)) { _fun00034_ip = 233; continue _fun00033 }
 230:
            mike = report;
 233:
            return mike;
 235:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.f0Ezmp;
            mike = zulu.bind(tango)(mike);
            return mike;
 294:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.pAF6xM;
            mike = zulu.bind(tango)(mike);
            return mike;
 355:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.w33hIC;
            mike = zulu.bind(tango)(mike);
            return mike;
 416:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.QXMYAQ;
            mike = zulu.bind(tango)(mike);
            return mike;
 477:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.GX594O;
            mike = zulu.bind(tango)(mike);
            return mike;
 538:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.gWm7Mj;
            mike = zulu.bind(tango)(mike);
            return mike;
 599:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.egIBDA;
            mike = zulu.bind(tango)(mike);
            return mike;
 660:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.ldm9aW;
            mike = zulu.bind(tango)(mike);
            return mike;
 721:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.vvaizs;
            mike = zulu.bind(tango)(mike);
            return mike;
 782:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.O783tb;
            mike = zulu.bind(tango)(mike);
            return mike;
 843:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.y3LQCA;
            mike = zulu.bind(tango)(mike);
            return mike;
 902:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.5TvaSk;
            mike = zulu.bind(tango)(mike);
            return mike;
 961:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 18;
            zulu = golf[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.W6Wi1d;
            entity = {};
            entity['guildName'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['getStringForEmojiCategory'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: useEmojiSearchResults
        yankee = argFoo;
        foxtrot = argBar;
        romeo = argBaz;
        var _closure2_slot0 = yankee;
        var _closure2_slot1 = foxtrot;
        var _closure2_slot2 = romeo;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        mike = new Array(0);
        mike = report.bind(oscar)(tango, mike);
        mike = _closure1_slot16;
        options = undefined;
        offset = mike.bind(options)(romeo);
        var _closure2_slot3 = offset;
        golf = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 15;
        tango = verify[mike];
        oscar = golf.bind(options)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(4);
        zulu[0] = foxtrot;
        zulu[1] = romeo;
        zulu[2] = yankee;
        zulu[3] = offset;
        mike = verify[mike];
        mike = golf.bind(options)(mike);
        backup = mike.statesWillNeverBeEqual;
        sizing = function() {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tango = _closure2_slot0;
                zulu = tango.replace;
                entity = /^:/;
                mike = '';
                tango = zulu.bind(tango)(entity, mike);
                zulu = tango.replace;
                entity = /:$/;
                oscar = zulu.bind(tango)(entity, mike);
                entity = null;
                if(!(mike !== oscar)) { _fun00036_ip = 123; continue _fun00035 }
 67:
                tango = _closure1_slot4;
                zulu = tango.searchWithoutFetchingLatest;
                mike = {};
                golf = _closure2_slot1;
                mike['channel'] = golf;
                mike['query'] = oscar;
                oscar = 0;
                mike['count'] = oscar;
                oscar = _closure2_slot2;
                mike['intention'] = oscar;
                report = _closure2_slot3;
                mike['includeExternalGuilds'] = report;
                entity = zulu.bind(tango)(mike);
 123:
                return entity;
            }
        };
        result = oscar;
        output = tango;
        kilo = zulu;
        entity = result[report](output, sizing, kilo, backup, foxtrot);
        return entity;
    };
    zulu['useEmojiSearchResults'] = golf;
    zulu['useFrequentlyUsedEmojis'] = oscar;
    zulu['useFrequentlyUsedReactionEmojis'] = report;
    zulu['useFavoriteEmojis'] = tango;
    tango = function(argFoo, argBar) { // Original name: useIsFavoriteEmoji
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu = new Array(0);
        zulu = report.bind(oscar)(tango, zulu);
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 15;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00038_ip = 53; continue _fun00037 }
 16:
                report = _closure1_slot4;
                tango = report.getDisambiguatedEmojiContext;
                zulu = _closure2_slot0;
                tango = tango.bind(report)(zulu);
                zulu = tango.isFavoriteEmojiWithoutFetchingLatest;
                mike = _closure2_slot1;
                entity = zulu.bind(tango)(mike);
 53:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsFavoriteEmoji'] = tango;
    tango = function(argFoo) { // Original name: useEmojiInPriorityOrder
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            zulu = mike.FrecencyUserSettingsActionCreators;
            mike = zulu.loadIfNecessary;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu = new Array(0);
        zulu = report.bind(oscar)(tango, zulu);
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 15;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresArray;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getDisambiguatedEmojiContext;
            entity = _closure2_slot0;
            mike = mike.bind(zulu)(entity);
            entity = mike.getEmojiInPriorityOrderWithoutFetchingLatest;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useEmojiInPriorityOrder'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getEmojiSubCategory
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = argBaz;
            mike = null;
            if(!(mike != tango)) { _fun00040_ip = 108; continue _fun00039 }
 17:
            zulu = oscar.map;
            mike = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    mike = argFoo;
                    entity = mike.id;
                    zulu = null;
                    if(!(zulu == entity)) { _fun00042_ip = 20; continue _fun00041 }
 14:
                    entity = mike.uniqueName;
 20:
                    if(!(zulu == entity)) { _fun00042_ip = 29; continue _fun00041 }
 24:
                    entity = mike.name;
 29:
                    return entity;
                }
            };
            mike = zulu.bind(oscar)(mike);
            zulu = report.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            zulu = zulu.bind(report)(entity);
            entity = mike.includes;
            entity = entity.bind(mike)(tango);
            if(entity) { _fun00040_ip = 96; continue _fun00039 }
 63:
            entity = zulu.includes;
            entity = entity.bind(zulu)(tango);
            zulu = _closure1_slot10;
            if(entity) { _fun00040_ip = 88; continue _fun00039 }
 80:
            entity = zulu.NONE;
            _fun00040_ip = 94; continue _fun00039;
 88:
            entity = zulu.NEWLY_ADDED_EMOJI;
 94:
            _fun00040_ip = 106; continue _fun00039;
 96:
            mike = _closure1_slot10;
            entity = mike.TOP_GUILD_EMOJI;
 106:
            return entity;
 108:
            entity = _closure1_slot10;
            entity = entity.NONE;
            return entity;
        }
    };
    zulu['getEmojiSubCategory'] = tango;
    mike = function(argFoo, argBar) { // Original name: getSearchPlaceholder
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = _closure1_slot17;
            zulu = entity.REACTION;
            entity = argFoo;
            if(!(entity !== zulu)) { _fun00044_ip = 79; continue _fun00043 }
 20:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 18;
            zulu = golf[entity];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity.KgK5qq;
            entity = zulu.bind(tango)(entity);
            _fun00044_ip = 162; continue _fun00043;
 79:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 18;
            tango = golf[mike];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            report = tango.intl;
            tango = report.string;
            mike = golf[mike];
            mike = oscar.bind(zulu)(mike);
            zulu = mike.t;
            mike = argBar;
            if(mike) { _fun00044_ip = 146; continue _fun00043 }
 131:
            mike = zulu.6any2N;
            mike = tango.bind(report)(mike);
            _fun00044_ip = 159; continue _fun00043;
 146:
            zulu = zulu.h7ES+v;
            mike = tango.bind(report)(zulu);
 159:
            entity = mike;
 162:
            return entity;
        }
    };
    zulu['getSearchPlaceholder'] = mike;
    return entity;
})();