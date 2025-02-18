// app/modules/soundboard/useSoundGrid.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot14;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot14;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: createSoundItems
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00008_ip = 16; continue _fun00007 }
 14:
            zuuluu = true;
 16:
            tangon = report.map;
            entity = function(argFoo) {
                entity = {};
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.SoundboardSoundItemType;
                michal = michal.SOUND;
                entity['type'] = michal;
                michal = argFoo;
                entity['sound'] = michal;
                return entity;
            };
            tangon = tangon.bind(report)(entity);
            entity = tangon;
            if(!zuuluu) { _fun00008_ip = 57; continue _fun00007 }
 39:
            zuuluu = tangon.sort;
            michal = function(argFoo, argBar) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.compare;
                entity = argFoo;
                entity = entity.sound;
                michal = entity.soundId;
                entity = argBar;
                entity = entity.sound;
                entity = entity.soundId;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 57:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: _addSectionForPotentialSoundIds
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            tangon = michal.sections;
            update = michal.guildIds;
            foxtra = michal.allSounds;
            verify = michal.potentialSoundIdsForSection;
            var _closure2_slot0 = verify;
            golfie = michal.sectionType;
            oscard = michal.sortById;
            romeon = {};
            var _closure2_slot1 = romeon;
            offset = new Array(1);
            zuuluu = 0;
            source = offset;
            echoed = 0;
            report = arraySpread(source, update, echoed);
            entity = _closure1_slot10;
            offset[report] = entity;
            entity = 1;
            entity = report + entity;
            entity = offset.length;
            report = zuuluu < entity;
            entity = undefined;
            yankee = null;
            option = 0;
            if(!report) { _fun00010_ip = 190; continue _fun00009 }
 103:
            sizing = offset[option];
            output = function(argFoo) { // Original name: _loop
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    var _closure3_slot0 = zuuluu;
                    report = _closure2_slot0;
                    tangon = report.find;
                    michal = function(argFoo) {
                        entity = _closure3_slot0;
                        michal = entity.soundId;
                        entity = argFoo;
                        entity = entity === michal;
                        return entity;
                    };
                    tangon = tangon.bind(report)(michal);
                    michal = null;
                    if(!(michal != tangon)) { _fun00012_ip = 53; continue _fun00011 }
 39:
                    michal = _closure2_slot1;
                    entity = zuuluu.soundId;
                    michal[entity] = zuuluu;
 53:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = _closure1_slot13;
            report = foxtra.get;
            report = report.bind(foxtra)(sizing);
            if(!(yankee == report)) { _fun00010_ip = 136; continue _fun00009 }
 132:
            report = new Array(0);
 136:
            sizing = kiloes.bind(entity)(report);
            kiloes = sizing.bind(entity)();
            report = kiloes.done;
            if(report) { _fun00010_ip = 178; continue _fun00009 }
 153:
            report = kiloes.value;
            report = output.bind(entity)(report);
            result = sizing.bind(entity)();
            report = result.done;
            kiloes = result;
            if(!report) { _fun00010_ip = 153; continue _fun00009 }
 178:
            option = option + 1;
            report = offset.length;
            if(option < report) { _fun00010_ip = 103; continue _fun00009 }
 190:
            report = new Array(0);
            option = _closure1_slot13;
            offset = option.bind(entity)(verify);
            verify = offset.bind(entity)();
            option = verify.done;
            if(option) { _fun00010_ip = 253; continue _fun00009 }
 215:
            option = verify.value;
            foxtra = romeon[option];
            if(!(yankee != foxtra)) { _fun00010_ip = 238; continue _fun00009 }
 228:
            option = report.push;
            option = option.bind(report)(foxtra);
 238:
            foxtra = offset.bind(entity)();
            option = foxtra.done;
            verify = foxtra;
            if(!option) { _fun00010_ip = 215; continue _fun00009 }
 253:
            michal = _closure1_slot15;
            report = michal.bind(entity)(report, oscard);
            michal = report.length;
            if(!(michal > zuuluu)) { _fun00010_ip = 304; continue _fun00009 }
 272:
            zuuluu = tangon.push;
            michal = {};
            michal['key'] = golfie;
            oscard = {};
            oscard['type'] = golfie;
            michal['categoryInfo'] = oscard;
            michal['items'] = report;
            michal = zuuluu.bind(tangon)(michal);
 304:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: addDefaultSection
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            michal = zuuluu.get;
            entity = _closure1_slot10;
            oscard = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity == oscard)) { _fun00014_ip = 33; continue _fun00013 }
 29:
            oscard = _closure1_slot11;
 33:
            zuuluu = tangon.push;
            michal = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 9;
            golfie = offset[option];
            entity = undefined;
            golfie = verify.bind(entity)(golfie);
            golfie = golfie.SoundboardSoundGridSectionType;
            golfie = golfie.DEFAULTS;
            michal['key'] = golfie;
            golfie = {};
            option = offset[option];
            option = verify.bind(entity)(option);
            option = option.SoundboardSoundGridSectionType;
            option = option.DEFAULTS;
            golfie['type'] = option;
            michal['categoryInfo'] = golfie;
            report = _closure1_slot15;
            report = report.bind(entity)(oscard);
            michal['items'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    michal = function() { // Original name: useFrequentlyPlayedSounds
        oscard = _closure1_slot4;
        report = oscard.useEffect;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.FrecencyUserSettingsActionCreators;
            michal = zuuluu.loadIfNecessary;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        zuuluu = new Array(0);
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 11;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot8;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = _closure1_slot8;
            entity = entity.frecentlyPlayedSounds;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
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
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = option;
    report = report.EMPTY_SOUND_LIST;
    var _closure1_slot11 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.PremiumTypes;
    var _closure1_slot12 = report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/soundboard/useSoundGrid.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useSoundGrid
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            kiloes = argFoo;
            michal = arguments[1];
            golfie = arguments[2];
            var _closure2_slot0 = kiloes;
            sizing = undefined;
            if(!(michal === sizing)) { _fun00016_ip = 23; continue _fun00015 }
 21:
            michal = {};
 23:
            offset = michal.filterOutEmptyCurrentGuild;
            if(!(offset === sizing)) { _fun00016_ip = 35; continue _fun00015 }
 33:
            offset = false;
 35:
            var _closure2_slot1 = offset;
            if(!(golfie === sizing)) { _fun00016_ip = 45; continue _fun00015 }
 43:
            golfie = false;
 45:
            var _closure2_slot2 = golfie;
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
            tangon = _closure1_slot0;
            update = _closure1_slot2;
            zuuluu = 11;
            report = update[zuuluu];
            verify = tangon.bind(sizing)(report);
            option = verify.useStateFromStores;
            report = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = option.bind(verify)(oscard, report);
            romeon = _closure1_slot1;
            verify = 12;
            report = update[verify];
            option = romeon.bind(sizing)(report);
            oscard = option.isPremium;
            report = _closure1_slot12;
            report = report.TIER_2;
            report = oscard.bind(option)(foxtra, report);
            _closure2_slot3 = report;
            oscard = update[zuuluu];
            backup = tangon.bind(sizing)(oscard);
            yankee = backup.useStateFromStoresArray;
            oscard = _closure1_slot9;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot9;
                entity = zuuluu.getSounds;
                michal = entity.bind(zuuluu)();
                entity = new Array(3);
                entity[0] = michal;
                michal = zuuluu.getFavorites;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                michal = zuuluu.isFetching;
                michal = michal.bind(zuuluu)();
                entity[2] = michal;
                return entity;
            };
            yankee = yankee.bind(backup)(option, oscard);
            option = _closure1_slot3;
            oscard = 3;
            option = option.bind(sizing)(yankee, oscard);
            oscard = 0;
            result = option[oscard];
            _closure2_slot4 = result;
            oscard = 1;
            output = option[oscard];
            _closure2_slot5 = output;
            oscard = 2;
            oscard = option[oscard];
            _closure2_slot6 = oscard;
            option = 13;
            option = update[option];
            backup = tangon.bind(sizing)(option);
            yankee = backup.useSortedGuildIdsForSoundboard;
            option = false;
            echoed = yankee.bind(backup)(kiloes, option);
            _closure2_slot7 = echoed;
            option = update[zuuluu];
            source = tangon.bind(sizing)(option);
            kiloes = source.useStateFromStoresArray;
            yankee = _closure1_slot5;
            backup = new Array(1);
            backup[0] = yankee;
            option = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot7;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.getGuild;
                        entity = argFoo;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00018_ip = 43; continue _fun00017 }
 26:
                        michal = _closure3_slot0;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            option = kiloes.bind(source)(backup, option);
            _closure2_slot8 = option;
            verify = update[verify];
            romeon = romeon.bind(sizing)(verify);
            verify = romeon.canUseSoundboardEverywhere;
            verify = verify.bind(romeon)(foxtra);
            _closure2_slot9 = verify;
            romeon = update[zuuluu];
            backup = tangon.bind(sizing)(romeon);
            foxtra = backup.useStateFromStores;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00020_ip = 39; continue _fun00019 }
 30:
                    tangon = _closure2_slot0;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            romeon = foxtra.bind(backup)(romeon, yankee);
            _closure2_slot10 = romeon;
            yankee = update[zuuluu];
            source = tangon.bind(sizing)(yankee);
            kiloes = source.useStateFromStores;
            yankee = _closure1_slot6;
            backup = new Array(1);
            backup[0] = yankee;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            yankee = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getManageResourcePermissions;
                entity = _closure2_slot10;
                entity = michal.bind(zuuluu)(entity);
                entity = entity.canCreateExpressions;
                return entity;
            };
            yankee = kiloes.bind(source)(backup, yankee, foxtra);
            _closure2_slot11 = yankee;
            foxtra = 15;
            foxtra = update[foxtra];
            kiloes = tangon.bind(sizing)(foxtra);
            backup = kiloes.useRecentlyHeardExperiment;
            foxtra = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            backup = backup.bind(kiloes)(foxtra);
            foxtra = backup.canSeeRecentlyHeard;
            _closure2_slot12 = foxtra;
            backup = backup.canSeeFrequentlyPlayed;
            _closure2_slot13 = backup;
            kiloes = _closure1_slot18;
            kiloes = kiloes.bind(sizing)();
            _closure2_slot14 = kiloes;
            zuuluu = update[zuuluu];
            update = tangon.bind(sizing)(zuuluu);
            sizing = update.useStateFromStoresArray;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot8;
                entity = entity.recentlyHeardSoundIds;
                return entity;
            };
            sizing = sizing.bind(update)(tangon, zuuluu);
            _closure2_slot15 = sizing;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(15);
            michal[0] = echoed;
            michal[1] = result;
            michal[2] = output;
            michal[3] = sizing;
            michal[4] = kiloes;
            michal[5] = backup;
            michal[6] = foxtra;
            michal[7] = romeon;
            michal[8] = yankee;
            michal[9] = offset;
            michal[10] = verify;
            michal[11] = option;
            michal[12] = golfie;
            michal[13] = oscard;
            michal[14] = report;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    sizing = 0;
                    var _closure3_slot0 = sizing;
                    var _closure3_slot1 = sizing;
                    tangon = new Array(0);
                    entity = _closure2_slot2;
                    if(entity) { _fun00022_ip = 932; continue _fun00021 }
 32:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    golfie = _closure2_slot7;
                    entity['guildIds'] = golfie;
                    golfie = _closure2_slot4;
                    entity['allSounds'] = golfie;
                    golfie = global;
                    verify = golfie.Array;
                    option = verify.from;
                    golfie = _closure2_slot5;
                    golfie = option.bind(verify)(golfie);
                    entity['potentialSoundIdsForSection'] = golfie;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    kiloes = 9;
                    option = golfie[kiloes];
                    golfie = undefined;
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FAVORITES;
                    entity['sectionType'] = option;
                    option = true;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
                    entity = _closure2_slot12;
                    if(!entity) { _fun00022_ip = 230; continue _fun00021 }
 146:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    option = _closure2_slot7;
                    entity['guildIds'] = option;
                    option = _closure2_slot4;
                    entity['allSounds'] = option;
                    option = _closure2_slot15;
                    entity['potentialSoundIdsForSection'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[kiloes];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.RECENTLY_HEARD;
                    entity['sectionType'] = option;
                    option = false;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
 230:
                    entity = _closure2_slot13;
                    if(!entity) { _fun00022_ip = 338; continue _fun00021 }
 237:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    option = _closure2_slot7;
                    entity['guildIds'] = option;
                    option = _closure2_slot4;
                    entity['allSounds'] = option;
                    offset = _closure2_slot14;
                    verify = offset.map;
                    option = function(argFoo) {
                        entity = argFoo;
                        entity = entity.soundId;
                        return entity;
                    };
                    option = verify.bind(offset)(option);
                    entity['potentialSoundIdsForSection'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[kiloes];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FREQUENTLY_USED;
                    entity['sectionType'] = option;
                    option = false;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
 338:
                    verify = _closure2_slot10;
                    report = _closure2_slot11;
                    yankee = _closure2_slot4;
                    entity = _closure2_slot1;
                    backup = null;
                    if(!(backup != verify)) { _fun00022_ip = 582; continue _fun00021 }
 363:
                    offset = yankee.get;
                    option = verify.id;
                    offset = offset.bind(yankee)(option);
                    if(!(backup == offset)) { _fun00022_ip = 386; continue _fun00021 }
 382:
                    offset = new Array(0);
 386:
                    option = _closure1_slot15;
                    option = option.bind(golfie)(offset);
                    yankee = offset.length;
                    offset = verify.getMaxSoundboardSlots;
                    offset = offset.bind(verify)();
                    offset = yankee < offset;
                    if(!offset) { _fun00022_ip = 420; continue _fun00021 }
 417:
                    offset = report;
 420:
                    report = option.length;
                    report = sizing === report;
                    offset = !offset;
                    if(!offset) { _fun00022_ip = 438; continue _fun00021 }
 435:
                    offset = !report;
 438:
                    if(offset) { _fun00022_ip = 444; continue _fun00021 }
 441:
                    offset = entity;
 444:
                    if(offset) { _fun00022_ip = 496; continue _fun00021 }
 447:
                    yankee = option.push;
                    offset = {};
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[kiloes];
                    romeon = foxtra.bind(golfie)(romeon);
                    romeon = romeon.SoundboardSoundItemType;
                    romeon = romeon.ADD_SOUND;
                    offset['type'] = romeon;
                    offset['guild'] = verify;
                    offset = yankee.bind(option)(offset);
 496:
                    if(!entity) { _fun00022_ip = 502; continue _fun00021 }
 499:
                    entity = report;
 502:
                    if(entity) { _fun00022_ip = 582; continue _fun00021 }
 505:
                    report = tangon.push;
                    entity = {};
                    offset = {};
                    romeon = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[kiloes];
                    yankee = romeon.bind(golfie)(yankee);
                    yankee = yankee.SoundboardSoundGridSectionType;
                    yankee = yankee.GUILD;
                    offset['type'] = yankee;
                    offset['guild'] = verify;
                    yankee = false;
                    offset['isNitroLocked'] = yankee;
                    entity['categoryInfo'] = offset;
                    verify = verify.id;
                    entity['key'] = verify;
                    entity['items'] = option;
                    entity = report.bind(tangon)(entity);
 582:
                    entity = _closure2_slot9;
                    if(entity) { _fun00022_ip = 603; continue _fun00021 }
 589:
                    report = _closure1_slot17;
                    entity = _closure2_slot4;
                    entity = report.bind(golfie)(tangon, entity);
 603:
                    report = _closure2_slot8;
                    entity = _closure2_slot10;
                    entity = backup == entity;
                    foxtra = undefined;
                    if(entity) { _fun00022_ip = 629; continue _fun00021 }
 620:
                    entity = _closure2_slot10;
                    foxtra = entity.id;
 629:
                    romeon = _closure2_slot4;
                    yankee = _closure2_slot3;
                    entity = _closure1_slot13;
                    offset = entity.bind(golfie)(report);
                    report = offset.bind(golfie)();
                    entity = report.done;
                    verify = report;
                    option = undefined;
                    report = undefined;
                    if(entity) { _fun00022_ip = 837; continue _fun00021 }
 668:
                    update = verify.value;
                    entity = update.id;
                    if(!(entity !== foxtra)) { _fun00022_ip = 819; continue _fun00021 }
 685:
                    result = _closure1_slot15;
                    output = romeon.get;
                    entity = update.id;
                    output = output.bind(romeon)(entity);
                    entity = output;
                    if(!(backup == output)) { _fun00022_ip = 715; continue _fun00021 }
 711:
                    entity = new Array(0);
 715:
                    entity = result.bind(golfie)(entity);
                    result = entity.length;
                    option = output;
                    report = entity;
                    if(!(result > sizing)) { _fun00022_ip = 819; continue _fun00021 }
 735:
                    echoed = tangon.push;
                    result = {};
                    source = {};
                    vacuum = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    ctrled = ctrled[kiloes];
                    ctrled = vacuum.bind(golfie)(ctrled);
                    ctrled = ctrled.SoundboardSoundGridSectionType;
                    ctrled = ctrled.GUILD;
                    source['type'] = ctrled;
                    source['guild'] = update;
                    ctrled = !yankee;
                    source['isNitroLocked'] = ctrled;
                    result['categoryInfo'] = source;
                    update = update.id;
                    result['key'] = update;
                    result['items'] = entity;
                    result = echoed.bind(tangon)(result);
                    option = output;
                    report = entity;
 819:
                    output = offset.bind(golfie)();
                    entity = output.done;
                    verify = output;
                    if(!entity) { _fun00022_ip = 668; continue _fun00021 }
 837:
                    entity = _closure2_slot9;
                    if(!entity) { _fun00022_ip = 858; continue _fun00021 }
 844:
                    report = _closure1_slot17;
                    entity = _closure2_slot4;
                    entity = report.bind(golfie)(tangon, entity);
 858:
                    report = tangon.forEach;
                    entity = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            michal = argFoo;
                            entity = michal.categoryInfo;
                            tangon = entity.type;
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 9;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            zuuluu = report.bind(entity)(zuuluu);
                            zuuluu = zuuluu.SoundboardSoundGridSectionType;
                            zuuluu = zuuluu.GUILD;
                            if(!(tangon === zuuluu)) { _fun00024_ip = 121; continue _fun00023 }
 55:
                            zuuluu = michal.categoryInfo;
                            tangon = zuuluu.isNitroLocked;
                            if(tangon) { _fun00024_ip = 98; continue _fun00023 }
 73:
                            report = _closure3_slot0;
                            tangon = michal.items;
                            tangon = tangon.length;
                            tangon = report + tangon;
                            _closure3_slot0 = tangon;
                            _fun00024_ip = 121; continue _fun00023;
 98:
                            tangon = _closure3_slot1;
                            michal = michal.items;
                            michal = michal.length;
                            michal = tangon + michal;
                            _closure3_slot1 = michal;
 121:
                            return entity;
                        }
                    };
                    entity = report.bind(tangon)(entity);
                    entity = {};
                    entity['categories'] = tangon;
                    report = _closure2_slot6;
                    entity['isFetching'] = report;
                    report = {};
                    golfie = _closure2_slot5;
                    golfie = golfie.size;
                    report['favoriteSoundCount'] = golfie;
                    golfie = _closure3_slot0;
                    report['unlockedCustomSoundCount'] = golfie;
                    oscard = _closure3_slot1;
                    report['lockedCustomSoundCount'] = oscard;
                    entity['soundCounts'] = report;
                    _fun00022_ip = 982; continue _fun00021;
 932:
                    oscard = _closure1_slot17;
                    report = _closure2_slot4;
                    michal = undefined;
                    michal = oscard.bind(michal)(tangon, report);
                    michal = {};
                    michal['categories'] = tangon;
                    zuuluu = _closure2_slot6;
                    michal['isFetching'] = zuuluu;
                    zuuluu = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    michal['soundCounts'] = zuuluu;
                    entity = michal;
 982:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useSearchCategories
        golfie = argFoo;
        report = argBar;
        oscard = argBaz;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = report;
        var _closure2_slot2 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        oscard = oscard.length;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = _closure2_slot2;
                zuuluu = entity.length;
                entity = 0;
                if(!(!(zuuluu > entity))) { _fun00026_ip = 24; continue _fun00025 }
 18:
                entity = _closure2_slot0;
                _fun00026_ip = 131; continue _fun00025;
 24:
                zuuluu = {};
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 9;
                report = verify[golfie];
                oscard = undefined;
                report = option.bind(oscard)(report);
                report = report.SoundboardSoundGridSectionType;
                report = report.SEARCH;
                zuuluu['key'] = report;
                report = {};
                golfie = verify[golfie];
                golfie = option.bind(oscard)(golfie);
                golfie = golfie.SoundboardSoundGridSectionType;
                golfie = golfie.SEARCH;
                report['type'] = golfie;
                zuuluu['categoryInfo'] = report;
                report = _closure1_slot15;
                tangon = _closure2_slot1;
                michal = false;
                michal = report.bind(oscard)(tangon, michal);
                zuuluu['items'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 131:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSearchCategories'] = tangon;
    zuuluu['useFrequentlyPlayedSounds'] = michal;
    return entity;
})();