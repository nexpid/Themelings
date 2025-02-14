// app/modules/soundboard/useSoundGrid.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun103420: for(var _fun103420_ip = 0; ; ) switch(_fun103420_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun103420_ip = 46; continue _fun103420 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun103420_ip = 55; continue _fun103420 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun103420_ip = 345; continue _fun103420 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun103420_ip = 323; continue _fun103420 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun103420_ip = 283; continue _fun103420 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun103420_ip = 270; continue _fun103420 }
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
            if(!golf) { _fun103420_ip = 163; continue _fun103420 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun103420_ip = 179; continue _fun103420 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun103420_ip = 249; continue _fun103420 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun103420_ip = 249; continue _fun103420 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun103420_ip = 234; continue _fun103420 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun103420_ip = 247; continue _fun103420 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun103420_ip = 265; continue _fun103420;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun103420_ip = 283; continue _fun103420;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun103420_ip = 323; continue _fun103420 }
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
            if(!tango) { _fun103420_ip = 330; continue _fun103420 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun103421: for(var _fun103421_ip = 0; ; ) switch(_fun103421_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun103421_ip = 56; continue _fun103421 }
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
                    _fun103421_ip = 67; continue _fun103421;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun103422: for(var _fun103422_ip = 0; ; ) switch(_fun103422_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun103422_ip = 23; continue _fun103422 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun103422_ip = 33; continue _fun103422 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun103422_ip = 70; continue _fun103422 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun103422_ip = 55; continue _fun103422 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: createSoundItems
        _fun103423: for(var _fun103423_ip = 0; ; ) switch(_fun103423_ip) {
 0:
            report = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun103423_ip = 16; continue _fun103423 }
 14:
            zulu = true;
 16:
            tango = report.map;
            entity = function(argFoo) {
                entity = {};
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.SoundboardSoundItemType;
                mike = mike.SOUND;
                entity['type'] = mike;
                mike = argFoo;
                entity['sound'] = mike;
                return entity;
            };
            tango = tango.bind(report)(entity);
            entity = tango;
            if(!zulu) { _fun103423_ip = 57; continue _fun103423 }
 39:
            zulu = tango.sort;
            mike = function(argFoo, argBar) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.compare;
                entity = argFoo;
                entity = entity.sound;
                mike = entity.soundId;
                entity = argBar;
                entity = entity.sound;
                entity = entity.soundId;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 57:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: _addSectionForPotentialSoundIds
        _fun103426: for(var _fun103426_ip = 0; ; ) switch(_fun103426_ip) {
 0:
            mike = argFoo;
            tango = mike.sections;
            update = mike.guildIds;
            foxtrot = mike.allSounds;
            verify = mike.potentialSoundIdsForSection;
            var _closure2_slot0 = verify;
            golf = mike.sectionType;
            oscar = mike.sortById;
            romeo = {};
            var _closure2_slot1 = romeo;
            offset = new Array(1);
            zulu = 0;
            source = offset;
            echo = 0;
            report = arraySpread(source, update, echo);
            entity = _closure1_slot10;
            offset[report] = entity;
            entity = 1;
            entity = report + entity;
            entity = offset.length;
            report = zulu < entity;
            entity = undefined;
            yankee = null;
            options = 0;
            if(!report) { _fun103426_ip = 190; continue _fun103426 }
 103:
            sizing = offset[options];
            output = function(argFoo) { // Original name: _loop
                _fun103427: for(var _fun103427_ip = 0; ; ) switch(_fun103427_ip) {
 0:
                    zulu = argFoo;
                    var _closure3_slot0 = zulu;
                    report = _closure2_slot0;
                    tango = report.find;
                    mike = function(argFoo) {
                        entity = _closure3_slot0;
                        mike = entity.soundId;
                        entity = argFoo;
                        entity = entity === mike;
                        return entity;
                    };
                    tango = tango.bind(report)(mike);
                    mike = null;
                    if(!(mike != tango)) { _fun103427_ip = 53; continue _fun103427 }
 39:
                    mike = _closure2_slot1;
                    entity = zulu.soundId;
                    mike[entity] = zulu;
 53:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = _closure1_slot13;
            report = foxtrot.get;
            report = report.bind(foxtrot)(sizing);
            if(!(yankee == report)) { _fun103426_ip = 136; continue _fun103426 }
 132:
            report = new Array(0);
 136:
            sizing = kilo.bind(entity)(report);
            kilo = sizing.bind(entity)();
            report = kilo.done;
            if(report) { _fun103426_ip = 178; continue _fun103426 }
 153:
            report = kilo.value;
            report = output.bind(entity)(report);
            result = sizing.bind(entity)();
            report = result.done;
            kilo = result;
            if(!report) { _fun103426_ip = 153; continue _fun103426 }
 178:
            options = options + 1;
            report = offset.length;
            if(options < report) { _fun103426_ip = 103; continue _fun103426 }
 190:
            report = new Array(0);
            options = _closure1_slot13;
            offset = options.bind(entity)(verify);
            verify = offset.bind(entity)();
            options = verify.done;
            if(options) { _fun103426_ip = 253; continue _fun103426 }
 215:
            options = verify.value;
            foxtrot = romeo[options];
            if(!(yankee != foxtrot)) { _fun103426_ip = 238; continue _fun103426 }
 228:
            options = report.push;
            options = options.bind(report)(foxtrot);
 238:
            foxtrot = offset.bind(entity)();
            options = foxtrot.done;
            verify = foxtrot;
            if(!options) { _fun103426_ip = 215; continue _fun103426 }
 253:
            mike = _closure1_slot15;
            report = mike.bind(entity)(report, oscar);
            mike = report.length;
            if(!(mike > zulu)) { _fun103426_ip = 304; continue _fun103426 }
 272:
            zulu = tango.push;
            mike = {};
            mike['key'] = golf;
            oscar = {};
            oscar['type'] = golf;
            mike['categoryInfo'] = oscar;
            mike['items'] = report;
            mike = zulu.bind(tango)(mike);
 304:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: addDefaultSection
        _fun103429: for(var _fun103429_ip = 0; ; ) switch(_fun103429_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            mike = zulu.get;
            entity = _closure1_slot10;
            oscar = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity == oscar)) { _fun103429_ip = 33; continue _fun103429 }
 29:
            oscar = _closure1_slot11;
 33:
            zulu = tango.push;
            mike = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 9;
            golf = offset[options];
            entity = undefined;
            golf = verify.bind(entity)(golf);
            golf = golf.SoundboardSoundGridSectionType;
            golf = golf.DEFAULTS;
            mike['key'] = golf;
            golf = {};
            options = offset[options];
            options = verify.bind(entity)(options);
            options = options.SoundboardSoundGridSectionType;
            options = options.DEFAULTS;
            golf['type'] = options;
            mike['categoryInfo'] = golf;
            report = _closure1_slot15;
            report = report.bind(entity)(oscar);
            mike['items'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    mike = function() { // Original name: useFrequentlyPlayedSounds
        oscar = _closure1_slot4;
        report = oscar.useEffect;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
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
        zulu = 11;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = _closure1_slot8;
            entity = entity.frecentlyPlayedSounds;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot18 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
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
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = options;
    report = report.EMPTY_SOUND_LIST;
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.PremiumTypes;
    var _closure1_slot12 = report;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/soundboard/useSoundGrid.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useSoundGrid
        _fun103433: for(var _fun103433_ip = 0; ; ) switch(_fun103433_ip) {
 0:
            kilo = argFoo;
            mike = arguments[1];
            golf = arguments[2];
            var _closure2_slot0 = kilo;
            sizing = undefined;
            if(!(mike === sizing)) { _fun103433_ip = 23; continue _fun103433 }
 21:
            mike = {};
 23:
            offset = mike.filterOutEmptyCurrentGuild;
            if(!(offset === sizing)) { _fun103433_ip = 35; continue _fun103433 }
 33:
            offset = false;
 35:
            var _closure2_slot1 = offset;
            if(!(golf === sizing)) { _fun103433_ip = 45; continue _fun103433 }
 43:
            golf = false;
 45:
            var _closure2_slot2 = golf;
            var _closure2_slot3 = sizing;
            var _closure2_slot4 = sizing;
            var _closure2_slot5 = sizing;
            var _closure2_slot6 = sizing;
            var _closure2_slot7 = sizing;
            var _closure2_slot8 = sizing;
            var _closure2_slot9 = sizing;
            var _closure2_slot10 = sizing;
            var _closure2_slot11 = sizing;
            var _closure2_slot12 = sizing;
            var _closure2_slot13 = sizing;
            var _closure2_slot14 = sizing;
            var _closure2_slot15 = sizing;
            tango = _closure1_slot0;
            update = _closure1_slot2;
            zulu = 11;
            report = update[zulu];
            verify = tango.bind(sizing)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                mike = _closure1_slot7;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            foxtrot = options.bind(verify)(oscar, report);
            romeo = _closure1_slot1;
            verify = 12;
            report = update[verify];
            options = romeo.bind(sizing)(report);
            oscar = options.isPremium;
            report = _closure1_slot12;
            report = report.TIER_2;
            report = oscar.bind(options)(foxtrot, report);
            _closure2_slot3 = report;
            oscar = update[zulu];
            backup = tango.bind(sizing)(oscar);
            yankee = backup.useStateFromStoresArray;
            oscar = _closure1_slot9;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot9;
                entity = zulu.getSounds;
                mike = entity.bind(zulu)();
                entity = new Array(3);
                entity[0] = mike;
                mike = zulu.getFavorites;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                mike = zulu.isFetching;
                mike = mike.bind(zulu)();
                entity[2] = mike;
                return entity;
            };
            yankee = yankee.bind(backup)(options, oscar);
            options = _closure1_slot3;
            oscar = 3;
            options = options.bind(sizing)(yankee, oscar);
            oscar = 0;
            result = options[oscar];
            _closure2_slot4 = result;
            oscar = 1;
            output = options[oscar];
            _closure2_slot5 = output;
            oscar = 2;
            oscar = options[oscar];
            _closure2_slot6 = oscar;
            options = 13;
            options = update[options];
            backup = tango.bind(sizing)(options);
            yankee = backup.useSortedGuildIdsForSoundboard;
            options = false;
            echo = yankee.bind(backup)(kilo, options);
            _closure2_slot7 = echo;
            options = update[zulu];
            source = tango.bind(sizing)(options);
            kilo = source.useStateFromStoresArray;
            yankee = _closure1_slot5;
            backup = new Array(1);
            backup[0] = yankee;
            options = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tango = _closure2_slot7;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun103437: for(var _fun103437_ip = 0; ; ) switch(_fun103437_ip) {
 0:
                        zulu = _closure1_slot5;
                        mike = zulu.getGuild;
                        entity = argFoo;
                        zulu = mike.bind(zulu)(entity);
                        entity = null;
                        if(!(entity != zulu)) { _fun103437_ip = 43; continue _fun103437 }
 26:
                        mike = _closure3_slot0;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            options = kilo.bind(source)(backup, options);
            _closure2_slot8 = options;
            verify = update[verify];
            romeo = romeo.bind(sizing)(verify);
            verify = romeo.canUseSoundboardEverywhere;
            verify = verify.bind(romeo)(foxtrot);
            _closure2_slot9 = verify;
            romeo = update[zulu];
            backup = tango.bind(sizing)(romeo);
            foxtrot = backup.useStateFromStores;
            romeo = new Array(1);
            romeo[0] = yankee;
            yankee = function() {
                _fun103438: for(var _fun103438_ip = 0; ; ) switch(_fun103438_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun103438_ip = 39; continue _fun103438 }
 30:
                    tango = _closure2_slot0;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            romeo = foxtrot.bind(backup)(romeo, yankee);
            _closure2_slot10 = romeo;
            yankee = update[zulu];
            source = tango.bind(sizing)(yankee);
            kilo = source.useStateFromStores;
            yankee = _closure1_slot6;
            backup = new Array(1);
            backup[0] = yankee;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            yankee = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getManageResourcePermissions;
                entity = _closure2_slot10;
                entity = mike.bind(zulu)(entity);
                entity = entity.canCreateExpressions;
                return entity;
            };
            yankee = kilo.bind(source)(backup, yankee, foxtrot);
            _closure2_slot11 = yankee;
            foxtrot = 15;
            foxtrot = update[foxtrot];
            kilo = tango.bind(sizing)(foxtrot);
            backup = kilo.useRecentlyHeardExperiment;
            foxtrot = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            backup = backup.bind(kilo)(foxtrot);
            foxtrot = backup.canSeeRecentlyHeard;
            _closure2_slot12 = foxtrot;
            backup = backup.canSeeFrequentlyPlayed;
            _closure2_slot13 = backup;
            kilo = _closure1_slot18;
            kilo = kilo.bind(sizing)();
            _closure2_slot14 = kilo;
            zulu = update[zulu];
            update = tango.bind(sizing)(zulu);
            sizing = update.useStateFromStoresArray;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = _closure1_slot8;
                entity = entity.recentlyHeardSoundIds;
                return entity;
            };
            sizing = sizing.bind(update)(tango, zulu);
            _closure2_slot15 = sizing;
            tango = _closure1_slot4;
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
                _fun103441: for(var _fun103441_ip = 0; ; ) switch(_fun103441_ip) {
 0:
                    sizing = 0;
                    var _closure3_slot0 = sizing;
                    var _closure3_slot1 = sizing;
                    tango = new Array(0);
                    entity = _closure2_slot2;
                    if(entity) { _fun103441_ip = 934; continue _fun103441 }
 32:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tango;
                    golf = _closure2_slot7;
                    entity['guildIds'] = golf;
                    golf = _closure2_slot4;
                    entity['allSounds'] = golf;
                    golf = global;
                    verify = golf.Array;
                    options = verify.from;
                    golf = _closure2_slot5;
                    golf = options.bind(verify)(golf);
                    entity['potentialSoundIdsForSection'] = golf;
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    kilo = 9;
                    options = golf[kilo];
                    golf = undefined;
                    options = verify.bind(golf)(options);
                    options = options.SoundboardSoundGridSectionType;
                    options = options.FAVORITES;
                    entity['sectionType'] = options;
                    options = true;
                    entity['sortById'] = options;
                    entity = report.bind(golf)(entity);
                    entity = _closure2_slot12;
                    if(!entity) { _fun103441_ip = 230; continue _fun103441 }
 146:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tango;
                    options = _closure2_slot7;
                    entity['guildIds'] = options;
                    options = _closure2_slot4;
                    entity['allSounds'] = options;
                    options = _closure2_slot15;
                    entity['potentialSoundIdsForSection'] = options;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[kilo];
                    options = verify.bind(golf)(options);
                    options = options.SoundboardSoundGridSectionType;
                    options = options.RECENTLY_HEARD;
                    entity['sectionType'] = options;
                    options = false;
                    entity['sortById'] = options;
                    entity = report.bind(golf)(entity);
 230:
                    entity = _closure2_slot13;
                    if(!entity) { _fun103441_ip = 338; continue _fun103441 }
 237:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tango;
                    options = _closure2_slot7;
                    entity['guildIds'] = options;
                    options = _closure2_slot4;
                    entity['allSounds'] = options;
                    offset = _closure2_slot14;
                    verify = offset.map;
                    options = function(argFoo) {
                        entity = argFoo;
                        entity = entity.soundId;
                        return entity;
                    };
                    options = verify.bind(offset)(options);
                    entity['potentialSoundIdsForSection'] = options;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[kilo];
                    options = verify.bind(golf)(options);
                    options = options.SoundboardSoundGridSectionType;
                    options = options.FREQUENTLY_USED;
                    entity['sectionType'] = options;
                    options = false;
                    entity['sortById'] = options;
                    entity = report.bind(golf)(entity);
 338:
                    verify = _closure2_slot10;
                    report = _closure2_slot11;
                    yankee = _closure2_slot4;
                    entity = _closure2_slot1;
                    backup = null;
                    if(!(backup != verify)) { _fun103441_ip = 584; continue _fun103441 }
 363:
                    offset = yankee.get;
                    options = verify.id;
                    offset = offset.bind(yankee)(options);
                    if(!(backup == offset)) { _fun103441_ip = 386; continue _fun103441 }
 382:
                    offset = new Array(0);
 386:
                    options = _closure1_slot15;
                    options = options.bind(golf)(offset);
                    yankee = offset.length;
                    offset = verify.getMaxSoundboardSlots;
                    offset = offset.bind(verify)();
                    offset = yankee < offset;
                    if(!offset) { _fun103441_ip = 422; continue _fun103441 }
 419:
                    offset = report;
 422:
                    report = options.length;
                    report = sizing === report;
                    offset = !offset;
                    if(!offset) { _fun103441_ip = 440; continue _fun103441 }
 437:
                    offset = !report;
 440:
                    if(offset) { _fun103441_ip = 446; continue _fun103441 }
 443:
                    offset = entity;
 446:
                    if(offset) { _fun103441_ip = 498; continue _fun103441 }
 449:
                    yankee = options.push;
                    offset = {};
                    foxtrot = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[kilo];
                    romeo = foxtrot.bind(golf)(romeo);
                    romeo = romeo.SoundboardSoundItemType;
                    romeo = romeo.ADD_SOUND;
                    offset['type'] = romeo;
                    offset['guild'] = verify;
                    offset = yankee.bind(options)(offset);
 498:
                    if(!entity) { _fun103441_ip = 504; continue _fun103441 }
 501:
                    entity = report;
 504:
                    if(entity) { _fun103441_ip = 584; continue _fun103441 }
 507:
                    report = tango.push;
                    entity = {};
                    offset = {};
                    romeo = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[kilo];
                    yankee = romeo.bind(golf)(yankee);
                    yankee = yankee.SoundboardSoundGridSectionType;
                    yankee = yankee.GUILD;
                    offset['type'] = yankee;
                    offset['guild'] = verify;
                    yankee = false;
                    offset['isNitroLocked'] = yankee;
                    entity['categoryInfo'] = offset;
                    verify = verify.id;
                    entity['key'] = verify;
                    entity['items'] = options;
                    entity = report.bind(tango)(entity);
 584:
                    entity = _closure2_slot9;
                    if(entity) { _fun103441_ip = 605; continue _fun103441 }
 591:
                    report = _closure1_slot17;
                    entity = _closure2_slot4;
                    entity = report.bind(golf)(tango, entity);
 605:
                    report = _closure2_slot8;
                    entity = _closure2_slot10;
                    entity = backup == entity;
                    foxtrot = undefined;
                    if(entity) { _fun103441_ip = 631; continue _fun103441 }
 622:
                    entity = _closure2_slot10;
                    foxtrot = entity.id;
 631:
                    romeo = _closure2_slot4;
                    yankee = _closure2_slot3;
                    entity = _closure1_slot13;
                    offset = entity.bind(golf)(report);
                    report = offset.bind(golf)();
                    entity = report.done;
                    verify = report;
                    options = undefined;
                    report = undefined;
                    if(entity) { _fun103441_ip = 839; continue _fun103441 }
 670:
                    update = verify.value;
                    entity = update.id;
                    if(!(entity !== foxtrot)) { _fun103441_ip = 821; continue _fun103441 }
 687:
                    result = _closure1_slot15;
                    output = romeo.get;
                    entity = update.id;
                    output = output.bind(romeo)(entity);
                    entity = output;
                    if(!(backup == output)) { _fun103441_ip = 717; continue _fun103441 }
 713:
                    entity = new Array(0);
 717:
                    entity = result.bind(golf)(entity);
                    result = entity.length;
                    options = output;
                    report = entity;
                    if(!(result > sizing)) { _fun103441_ip = 821; continue _fun103441 }
 737:
                    echo = tango.push;
                    result = {};
                    source = {};
                    vacuum = _closure1_slot0;
                    control = _closure1_slot2;
                    control = control[kilo];
                    control = vacuum.bind(golf)(control);
                    control = control.SoundboardSoundGridSectionType;
                    control = control.GUILD;
                    source['type'] = control;
                    source['guild'] = update;
                    control = !yankee;
                    source['isNitroLocked'] = control;
                    result['categoryInfo'] = source;
                    update = update.id;
                    result['key'] = update;
                    result['items'] = entity;
                    result = echo.bind(tango)(result);
                    options = output;
                    report = entity;
 821:
                    output = offset.bind(golf)();
                    entity = output.done;
                    verify = output;
                    if(!entity) { _fun103441_ip = 670; continue _fun103441 }
 839:
                    entity = _closure2_slot9;
                    if(!entity) { _fun103441_ip = 860; continue _fun103441 }
 846:
                    report = _closure1_slot17;
                    entity = _closure2_slot4;
                    entity = report.bind(golf)(tango, entity);
 860:
                    report = tango.forEach;
                    entity = function(argFoo) {
                        _fun103443: for(var _fun103443_ip = 0; ; ) switch(_fun103443_ip) {
 0:
                            mike = argFoo;
                            entity = mike.categoryInfo;
                            tango = entity.type;
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 9;
                            zulu = zulu[entity];
                            entity = undefined;
                            zulu = report.bind(entity)(zulu);
                            zulu = zulu.SoundboardSoundGridSectionType;
                            zulu = zulu.GUILD;
                            if(!(tango === zulu)) { _fun103443_ip = 121; continue _fun103443 }
 55:
                            zulu = mike.categoryInfo;
                            tango = zulu.isNitroLocked;
                            if(tango) { _fun103443_ip = 98; continue _fun103443 }
 73:
                            report = _closure3_slot0;
                            tango = mike.items;
                            tango = tango.length;
                            tango = report + tango;
                            _closure3_slot0 = tango;
                            _fun103443_ip = 121; continue _fun103443;
 98:
                            tango = _closure3_slot1;
                            mike = mike.items;
                            mike = mike.length;
                            mike = tango + mike;
                            _closure3_slot1 = mike;
 121:
                            return entity;
                        }
                    };
                    entity = report.bind(tango)(entity);
                    entity = {};
                    entity['categories'] = tango;
                    report = _closure2_slot6;
                    entity['isFetching'] = report;
                    report = {};
                    golf = _closure2_slot5;
                    golf = golf.size;
                    report['favoriteSoundCount'] = golf;
                    golf = _closure3_slot0;
                    report['unlockedCustomSoundCount'] = golf;
                    oscar = _closure3_slot1;
                    report['lockedCustomSoundCount'] = oscar;
                    entity['soundCounts'] = report;
                    _fun103441_ip = 988; continue _fun103441;
 934:
                    oscar = _closure1_slot17;
                    report = _closure2_slot4;
                    mike = undefined;
                    mike = oscar.bind(mike)(tango, report);
                    mike = {};
                    mike['categories'] = tango;
                    zulu = _closure2_slot6;
                    mike['isFetching'] = zulu;
                    zulu = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    mike['soundCounts'] = zulu;
                    entity = mike;
 988:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: useSearchCategories
        golf = argFoo;
        report = argBar;
        oscar = argBaz;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = report;
        var _closure2_slot2 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        oscar = oscar.length;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun103445: for(var _fun103445_ip = 0; ; ) switch(_fun103445_ip) {
 0:
                entity = _closure2_slot2;
                zulu = entity.length;
                entity = 0;
                if(!(!(zulu > entity))) { _fun103445_ip = 24; continue _fun103445 }
 18:
                entity = _closure2_slot0;
                _fun103445_ip = 131; continue _fun103445;
 24:
                zulu = {};
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 9;
                report = verify[golf];
                oscar = undefined;
                report = options.bind(oscar)(report);
                report = report.SoundboardSoundGridSectionType;
                report = report.SEARCH;
                zulu['key'] = report;
                report = {};
                golf = verify[golf];
                golf = options.bind(oscar)(golf);
                golf = golf.SoundboardSoundGridSectionType;
                golf = golf.SEARCH;
                report['type'] = golf;
                zulu['categoryInfo'] = report;
                report = _closure1_slot15;
                tango = _closure2_slot1;
                mike = false;
                mike = report.bind(oscar)(tango, mike);
                zulu['items'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 131:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useSearchCategories'] = tango;
    zulu['useFrequentlyPlayedSounds'] = mike;
    return entity;
})();