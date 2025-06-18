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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot14;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot14;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
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
            entity = function(argFoo, argBar) {
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
                michal = argBar;
                entity['index'] = michal;
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
            entity = 18;
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
        zuuluu = 12;
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
    report = 19;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/soundboard/useSoundGrid.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useSoundGrid
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            sizing = argFoo;
            michal = arguments[1];
            option = arguments[2];
            var _closure2_slot0 = sizing;
            report = undefined;
            if(!(michal === report)) { _fun00016_ip = 23; continue _fun00015 }
 21:
            michal = {};
 23:
            yankee = michal.filterOutEmptyCurrentGuild;
            if(!(yankee === report)) { _fun00016_ip = 35; continue _fun00015 }
 33:
            yankee = false;
 35:
            var _closure2_slot1 = yankee;
            if(!(option === report)) { _fun00016_ip = 45; continue _fun00015 }
 43:
            option = false;
 45:
            var _closure2_slot2 = option;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            tangon = _closure1_slot0;
            source = _closure1_slot2;
            zuuluu = 12;
            oscard = source[zuuluu];
            offset = tangon.bind(report)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = verify.bind(offset)(golfie, oscard);
            foxtra = _closure1_slot1;
            offset = 13;
            oscard = source[offset];
            verify = foxtra.bind(report)(oscard);
            golfie = verify.isPremium;
            oscard = _closure1_slot12;
            oscard = oscard.TIER_2;
            oscard = golfie.bind(verify)(backup, oscard);
            _closure2_slot3 = oscard;
            golfie = source[zuuluu];
            kiloes = tangon.bind(report)(golfie);
            romeon = kiloes.useStateFromStoresArray;
            golfie = _closure1_slot9;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
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
            romeon = romeon.bind(kiloes)(verify, golfie);
            verify = _closure1_slot3;
            golfie = 3;
            verify = verify.bind(report)(romeon, golfie);
            golfie = 0;
            echoed = verify[golfie];
            _closure2_slot4 = echoed;
            golfie = 1;
            result = verify[golfie];
            _closure2_slot5 = result;
            golfie = 2;
            golfie = verify[golfie];
            _closure2_slot6 = golfie;
            verify = 14;
            verify = source[verify];
            kiloes = tangon.bind(report)(verify);
            romeon = kiloes.useSortedGuildIdsForSoundboard;
            verify = false;
            update = romeon.bind(kiloes)(sizing, verify);
            _closure2_slot7 = update;
            verify = source[zuuluu];
            output = tangon.bind(report)(verify);
            sizing = output.useStateFromStoresArray;
            romeon = _closure1_slot5;
            kiloes = new Array(1);
            kiloes[0] = romeon;
            verify = function() {
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
            verify = sizing.bind(output)(kiloes, verify);
            _closure2_slot8 = verify;
            offset = source[offset];
            foxtra = foxtra.bind(report)(offset);
            offset = foxtra.canUseSoundboardEverywhere;
            offset = offset.bind(foxtra)(backup);
            _closure2_slot9 = offset;
            foxtra = source[zuuluu];
            kiloes = tangon.bind(report)(foxtra);
            backup = kiloes.useStateFromStores;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            romeon = function() {
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
            foxtra = backup.bind(kiloes)(foxtra, romeon);
            _closure2_slot10 = foxtra;
            romeon = source[zuuluu];
            output = tangon.bind(report)(romeon);
            sizing = output.useStateFromStores;
            romeon = _closure1_slot6;
            kiloes = new Array(1);
            kiloes[0] = romeon;
            backup = new Array(1);
            backup[0] = foxtra;
            romeon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getManageResourcePermissions;
                entity = _closure2_slot10;
                entity = michal.bind(zuuluu)(entity);
                entity = entity.canCreateExpressions;
                return entity;
            };
            romeon = sizing.bind(output)(kiloes, romeon, backup);
            _closure2_slot11 = romeon;
            backup = 16;
            backup = source[backup];
            sizing = tangon.bind(report)(backup);
            kiloes = sizing.useRecentlyHeardExperiment;
            backup = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            kiloes = kiloes.bind(sizing)(backup);
            backup = kiloes.canSeeRecentlyHeard;
            _closure2_slot12 = backup;
            kiloes = kiloes.canSeeFrequentlyPlayed;
            _closure2_slot13 = kiloes;
            sizing = _closure1_slot18;
            sizing = sizing.bind(report)();
            _closure2_slot14 = sizing;
            zuuluu = source[zuuluu];
            vacuum = tangon.bind(report)(zuuluu);
            ctrled = vacuum.useStateFromStoresArray;
            zuuluu = _closure1_slot8;
            output = new Array(1);
            output[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot8;
                entity = entity.recentlyHeardSoundIds;
                return entity;
            };
            output = ctrled.bind(vacuum)(output, zuuluu);
            _closure2_slot15 = output;
            zuuluu = 17;
            zuuluu = source[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.SoundboardDefaultReorderingExperiment;
            tangon = report.useExperiment;
            zuuluu = {};
            source = 'useSoundGrid';
            zuuluu['location'] = source;
            report = tangon.bind(report)(zuuluu);
            _closure2_slot16 = report;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(16);
            michal[0] = update;
            michal[1] = echoed;
            michal[2] = result;
            michal[3] = output;
            michal[4] = sizing;
            michal[5] = kiloes;
            michal[6] = backup;
            michal[7] = foxtra;
            michal[8] = romeon;
            michal[9] = yankee;
            michal[10] = offset;
            michal[11] = verify;
            michal[12] = option;
            michal[13] = golfie;
            michal[14] = oscard;
            report = report.moveDefaultToBottom;
            michal[15] = report;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    result = 0;
                    var _closure3_slot0 = result;
                    var _closure3_slot1 = result;
                    zuuluu = new Array(0);
                    tangon = _closure2_slot2;
                    if(tangon) { _fun00022_ip = 1069; continue _fun00021 }
 32:
                    report = _closure1_slot16;
                    tangon = {};
                    tangon['sections'] = zuuluu;
                    golfie = _closure2_slot7;
                    tangon['guildIds'] = golfie;
                    golfie = _closure2_slot4;
                    tangon['allSounds'] = golfie;
                    golfie = global;
                    verify = golfie.Array;
                    option = verify.from;
                    golfie = _closure2_slot5;
                    golfie = option.bind(verify)(golfie);
                    tangon['potentialSoundIdsForSection'] = golfie;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    output = 9;
                    option = golfie[output];
                    golfie = undefined;
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FAVORITES;
                    tangon['sectionType'] = option;
                    option = true;
                    tangon['sortById'] = option;
                    tangon = report.bind(golfie)(tangon);
                    tangon = _closure2_slot12;
                    if(!tangon) { _fun00022_ip = 230; continue _fun00021 }
 146:
                    report = _closure1_slot16;
                    tangon = {};
                    tangon['sections'] = zuuluu;
                    option = _closure2_slot7;
                    tangon['guildIds'] = option;
                    option = _closure2_slot4;
                    tangon['allSounds'] = option;
                    option = _closure2_slot15;
                    tangon['potentialSoundIdsForSection'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[output];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.RECENTLY_HEARD;
                    tangon['sectionType'] = option;
                    option = false;
                    tangon['sortById'] = option;
                    tangon = report.bind(golfie)(tangon);
 230:
                    tangon = _closure2_slot13;
                    if(!tangon) { _fun00022_ip = 338; continue _fun00021 }
 237:
                    report = _closure1_slot16;
                    tangon = {};
                    tangon['sections'] = zuuluu;
                    option = _closure2_slot7;
                    tangon['guildIds'] = option;
                    option = _closure2_slot4;
                    tangon['allSounds'] = option;
                    offset = _closure2_slot14;
                    verify = offset.map;
                    option = function(argFoo) {
                        entity = argFoo;
                        entity = entity.soundId;
                        return entity;
                    };
                    option = verify.bind(offset)(option);
                    tangon['potentialSoundIdsForSection'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[output];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FREQUENTLY_USED;
                    tangon['sectionType'] = option;
                    option = false;
                    tangon['sortById'] = option;
                    tangon = report.bind(golfie)(tangon);
 338:
                    tangon = _closure2_slot10;
                    if(!(golfie !== tangon)) { _fun00022_ip = 642; continue _fun00021 }
 349:
                    verify = _closure2_slot10;
                    tangon = {};
                    report = _closure2_slot11;
                    tangon['currentGuildHasAddPermissions'] = report;
                    report = _closure2_slot4;
                    tangon['allSounds'] = report;
                    report = _closure2_slot1;
                    tangon['filterOutEmptyCurrentGuild'] = report;
                    report = tangon.currentGuildHasAddPermissions;
                    yankee = tangon.allSounds;
                    tangon = tangon.filterOutEmptyCurrentGuild;
                    offset = yankee.get;
                    option = verify.id;
                    offset = offset.bind(yankee)(option);
                    option = null;
                    if(!(option == offset)) { _fun00022_ip = 425; continue _fun00021 }
 421:
                    offset = new Array(0);
 425:
                    option = _closure1_slot15;
                    option = option.bind(golfie)(offset);
                    yankee = offset.length;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    offset = 11;
                    offset = foxtra[offset];
                    romeon = romeon.bind(golfie)(offset);
                    offset = romeon.getMaxSoundboardSlots;
                    offset = offset.bind(romeon)(verify);
                    offset = yankee < offset;
                    if(!offset) { _fun00022_ip = 480; continue _fun00021 }
 477:
                    offset = report;
 480:
                    report = option.length;
                    report = result === report;
                    offset = !offset;
                    if(!offset) { _fun00022_ip = 498; continue _fun00021 }
 495:
                    offset = !report;
 498:
                    if(offset) { _fun00022_ip = 504; continue _fun00021 }
 501:
                    offset = tangon;
 504:
                    if(offset) { _fun00022_ip = 556; continue _fun00021 }
 507:
                    yankee = option.push;
                    offset = {};
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[output];
                    romeon = foxtra.bind(golfie)(romeon);
                    romeon = romeon.SoundboardSoundItemType;
                    romeon = romeon.ADD_SOUND;
                    offset['type'] = romeon;
                    offset['guild'] = verify;
                    offset = yankee.bind(option)(offset);
 556:
                    if(!tangon) { _fun00022_ip = 562; continue _fun00021 }
 559:
                    tangon = report;
 562:
                    if(tangon) { _fun00022_ip = 642; continue _fun00021 }
 565:
                    report = zuuluu.push;
                    tangon = {};
                    offset = {};
                    romeon = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[output];
                    yankee = romeon.bind(golfie)(yankee);
                    yankee = yankee.SoundboardSoundGridSectionType;
                    yankee = yankee.GUILD;
                    offset['type'] = yankee;
                    offset['guild'] = verify;
                    yankee = false;
                    offset['isNitroLocked'] = yankee;
                    tangon['categoryInfo'] = offset;
                    verify = verify.id;
                    tangon['key'] = verify;
                    tangon['items'] = option;
                    tangon = report.bind(zuuluu)(tangon);
 642:
                    tangon = _closure2_slot9;
                    if(tangon) { _fun00022_ip = 659; continue _fun00021 }
 649:
                    report = _closure2_slot16;
                    tangon = report.moveDefaultToBottom;
 659:
                    if(tangon) { _fun00022_ip = 676; continue _fun00021 }
 662:
                    option = _closure1_slot17;
                    report = _closure2_slot4;
                    report = option.bind(golfie)(zuuluu, report);
 676:
                    report = {};
                    report['sections'] = zuuluu;
                    option = _closure2_slot8;
                    report['guilds'] = option;
                    option = _closure2_slot10;
                    sizing = null;
                    verify = sizing == option;
                    option = undefined;
                    if(verify) { _fun00022_ip = 716; continue _fun00021 }
 707:
                    verify = _closure2_slot10;
                    option = verify.id;
 716:
                    report['currentGuildId'] = option;
                    option = _closure2_slot4;
                    report['allSounds'] = option;
                    option = _closure2_slot3;
                    report['hasNitro'] = option;
                    kiloes = report.sections;
                    option = report.guilds;
                    backup = report.currentGuildId;
                    foxtra = report.allSounds;
                    romeon = report.hasNitro;
                    report = _closure1_slot13;
                    yankee = report.bind(golfie)(option);
                    option = yankee.bind(golfie)();
                    report = option.done;
                    offset = option;
                    verify = undefined;
                    option = undefined;
                    if(report) { _fun00022_ip = 969; continue _fun00021 }
 800:
                    ctrled = offset.value;
                    report = ctrled.id;
                    if(!(report !== backup)) { _fun00022_ip = 951; continue _fun00021 }
 817:
                    update = _closure1_slot15;
                    echoed = foxtra.get;
                    report = ctrled.id;
                    echoed = echoed.bind(foxtra)(report);
                    report = echoed;
                    if(!(sizing == echoed)) { _fun00022_ip = 847; continue _fun00021 }
 843:
                    report = new Array(0);
 847:
                    report = update.bind(golfie)(report);
                    update = report.length;
                    verify = echoed;
                    option = report;
                    if(!(update > result)) { _fun00022_ip = 951; continue _fun00021 }
 867:
                    source = kiloes.push;
                    update = {};
                    vacuum = {};
                    config = _closure1_slot0;
                    sequen = _closure1_slot2;
                    sequen = sequen[output];
                    sequen = config.bind(golfie)(sequen);
                    sequen = sequen.SoundboardSoundGridSectionType;
                    sequen = sequen.GUILD;
                    vacuum['type'] = sequen;
                    vacuum['guild'] = ctrled;
                    sequen = !romeon;
                    vacuum['isNitroLocked'] = sequen;
                    update['categoryInfo'] = vacuum;
                    ctrled = ctrled.id;
                    update['key'] = ctrled;
                    update['items'] = report;
                    update = source.bind(kiloes)(update);
                    verify = echoed;
                    option = report;
 951:
                    echoed = yankee.bind(golfie)();
                    report = echoed.done;
                    offset = echoed;
                    if(!report) { _fun00022_ip = 800; continue _fun00021 }
 969:
                    if(!tangon) { _fun00022_ip = 986; continue _fun00021 }
 972:
                    report = _closure1_slot17;
                    tangon = _closure2_slot4;
                    tangon = report.bind(golfie)(zuuluu, tangon);
 986:
                    report = zuuluu.forEach;
                    tangon = function(argFoo) {
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
                    tangon = report.bind(zuuluu)(tangon);
                    tangon = {};
                    tangon['categories'] = zuuluu;
                    report = _closure2_slot4;
                    tangon['allSounds'] = report;
                    report = _closure2_slot6;
                    tangon['isFetching'] = report;
                    report = {};
                    golfie = _closure2_slot5;
                    golfie = golfie.size;
                    report['favoriteSoundCount'] = golfie;
                    golfie = _closure3_slot0;
                    report['unlockedCustomSoundCount'] = golfie;
                    oscard = _closure3_slot1;
                    report['lockedCustomSoundCount'] = oscard;
                    tangon['soundCounts'] = report;
                    return tangon;
 1069:
                    report = _closure1_slot17;
                    tangon = _closure2_slot4;
                    entity = undefined;
                    entity = report.bind(entity)(zuuluu, tangon);
                    entity = {};
                    entity['categories'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    entity['allSounds'] = zuuluu;
                    michal = _closure2_slot6;
                    entity['isFetching'] = michal;
                    michal = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    entity['soundCounts'] = michal;
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