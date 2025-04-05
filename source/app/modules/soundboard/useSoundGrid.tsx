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
            output = argFoo;
            michal = arguments[1];
            verify = arguments[2];
            var _closure2_slot0 = output;
            oscard = undefined;
            if(!(michal === oscard)) { _fun00016_ip = 23; continue _fun00015 }
 21:
            michal = {};
 23:
            romeon = michal.filterOutEmptyCurrentGuild;
            if(!(romeon === oscard)) { _fun00016_ip = 35; continue _fun00015 }
 33:
            romeon = false;
 35:
            var _closure2_slot1 = romeon;
            report = michal.shownAllGuildIds;
            if(!(report === oscard)) { _fun00016_ip = 53; continue _fun00015 }
 49:
            report = new Array(0);
 53:
            var _closure2_slot2 = report;
            if(!(verify === oscard)) { _fun00016_ip = 63; continue _fun00015 }
 61:
            verify = false;
 63:
            var _closure2_slot3 = verify;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            var _closure2_slot6 = oscard;
            var _closure2_slot7 = oscard;
            var _closure2_slot8 = oscard;
            var _closure2_slot9 = oscard;
            var _closure2_slot10 = oscard;
            var _closure2_slot11 = oscard;
            var _closure2_slot12 = oscard;
            var _closure2_slot13 = oscard;
            var _closure2_slot14 = oscard;
            var _closure2_slot15 = oscard;
            var _closure2_slot16 = oscard;
            var _closure2_slot17 = oscard;
            tangon = _closure1_slot0;
            vacuum = _closure1_slot2;
            zuuluu = 12;
            golfie = vacuum[zuuluu];
            yankee = tangon.bind(oscard)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot7;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            kiloes = offset.bind(yankee)(option, golfie);
            backup = _closure1_slot1;
            yankee = 13;
            golfie = vacuum[yankee];
            offset = backup.bind(oscard)(golfie);
            option = offset.isPremium;
            golfie = _closure1_slot12;
            golfie = golfie.TIER_2;
            golfie = option.bind(offset)(kiloes, golfie);
            _closure2_slot4 = golfie;
            option = vacuum[zuuluu];
            sizing = tangon.bind(oscard)(option);
            foxtra = sizing.useStateFromStoresArray;
            option = _closure1_slot9;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
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
            foxtra = foxtra.bind(sizing)(offset, option);
            offset = _closure1_slot3;
            option = 3;
            offset = offset.bind(oscard)(foxtra, option);
            option = 0;
            update = offset[option];
            _closure2_slot5 = update;
            option = 1;
            echoed = offset[option];
            _closure2_slot6 = echoed;
            option = 2;
            option = offset[option];
            _closure2_slot7 = option;
            offset = 14;
            offset = vacuum[offset];
            sizing = tangon.bind(oscard)(offset);
            foxtra = sizing.useSortedGuildIdsForSoundboard;
            offset = false;
            source = foxtra.bind(sizing)(output, offset);
            _closure2_slot8 = source;
            offset = vacuum[zuuluu];
            result = tangon.bind(oscard)(offset);
            output = result.useStateFromStoresArray;
            foxtra = _closure1_slot5;
            sizing = new Array(1);
            sizing[0] = foxtra;
            offset = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot8;
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
            offset = output.bind(result)(sizing, offset);
            _closure2_slot9 = offset;
            yankee = vacuum[yankee];
            backup = backup.bind(oscard)(yankee);
            yankee = backup.canUseSoundboardEverywhere;
            yankee = yankee.bind(backup)(kiloes);
            _closure2_slot10 = yankee;
            backup = vacuum[zuuluu];
            sizing = tangon.bind(oscard)(backup);
            kiloes = sizing.useStateFromStores;
            backup = new Array(1);
            backup[0] = foxtra;
            foxtra = function() {
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
            backup = kiloes.bind(sizing)(backup, foxtra);
            _closure2_slot11 = backup;
            foxtra = vacuum[zuuluu];
            result = tangon.bind(oscard)(foxtra);
            output = result.useStateFromStores;
            foxtra = _closure1_slot6;
            sizing = new Array(1);
            sizing[0] = foxtra;
            kiloes = new Array(1);
            kiloes[0] = backup;
            foxtra = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getManageResourcePermissions;
                entity = _closure2_slot11;
                entity = michal.bind(zuuluu)(entity);
                entity = entity.canCreateExpressions;
                return entity;
            };
            foxtra = output.bind(result)(sizing, foxtra, kiloes);
            _closure2_slot12 = foxtra;
            kiloes = 16;
            kiloes = vacuum[kiloes];
            output = tangon.bind(oscard)(kiloes);
            sizing = output.useRecentlyHeardExperiment;
            ctrled = 'soundboard-useSoundGrid';
            kiloes = {'location': 'soundboard-useSoundGrid', 'autoTrackExposure': true};
            sizing = sizing.bind(output)(kiloes);
            kiloes = sizing.canSeeRecentlyHeard;
            _closure2_slot13 = kiloes;
            sizing = sizing.canSeeFrequentlyPlayed;
            _closure2_slot14 = sizing;
            output = _closure1_slot18;
            output = output.bind(oscard)();
            _closure2_slot15 = output;
            zuuluu = vacuum[zuuluu];
            config = tangon.bind(oscard)(zuuluu);
            sequen = config.useStateFromStoresArray;
            zuuluu = _closure1_slot8;
            result = new Array(1);
            result[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot8;
                entity = entity.recentlyHeardSoundIds;
                return entity;
            };
            result = sequen.bind(config)(result, zuuluu);
            _closure2_slot16 = result;
            zuuluu = 17;
            zuuluu = vacuum[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            oscard = zuuluu.SoundboardRowLimitExperiment;
            tangon = oscard.useExperiment;
            zuuluu = {};
            zuuluu['location'] = ctrled;
            oscard = tangon.bind(oscard)(zuuluu);
            _closure2_slot17 = oscard;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(17);
            michal[0] = source;
            michal[1] = update;
            michal[2] = echoed;
            michal[3] = result;
            michal[4] = output;
            michal[5] = sizing;
            michal[6] = kiloes;
            michal[7] = backup;
            michal[8] = foxtra;
            michal[9] = romeon;
            michal[10] = yankee;
            michal[11] = offset;
            michal[12] = verify;
            michal[13] = option;
            michal[14] = golfie;
            oscard = oscard.numRows;
            michal[15] = oscard;
            michal[16] = report;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    vacuum = 0;
                    var _closure3_slot0 = vacuum;
                    var _closure3_slot1 = vacuum;
                    tangon = new Array(0);
                    entity = _closure2_slot3;
                    if(entity) { _fun00022_ip = 1418; continue _fun00021 }
 32:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    golfie = _closure2_slot8;
                    entity['guildIds'] = golfie;
                    golfie = _closure2_slot5;
                    entity['allSounds'] = golfie;
                    ctrled = global;
                    verify = ctrled.Array;
                    option = verify.from;
                    golfie = _closure2_slot6;
                    golfie = option.bind(verify)(golfie);
                    entity['potentialSoundIdsForSection'] = golfie;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    source = 9;
                    option = golfie[source];
                    golfie = undefined;
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FAVORITES;
                    entity['sectionType'] = option;
                    option = true;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
                    entity = _closure2_slot13;
                    if(!entity) { _fun00022_ip = 230; continue _fun00021 }
 146:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    option = _closure2_slot8;
                    entity['guildIds'] = option;
                    option = _closure2_slot5;
                    entity['allSounds'] = option;
                    option = _closure2_slot16;
                    entity['potentialSoundIdsForSection'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[source];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.RECENTLY_HEARD;
                    entity['sectionType'] = option;
                    option = false;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
 230:
                    entity = _closure2_slot14;
                    if(!entity) { _fun00022_ip = 338; continue _fun00021 }
 237:
                    report = _closure1_slot16;
                    entity = {};
                    entity['sections'] = tangon;
                    option = _closure2_slot8;
                    entity['guildIds'] = option;
                    option = _closure2_slot5;
                    entity['allSounds'] = option;
                    offset = _closure2_slot15;
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
                    option = option[source];
                    option = verify.bind(golfie)(option);
                    option = option.SoundboardSoundGridSectionType;
                    option = option.FREQUENTLY_USED;
                    entity['sectionType'] = option;
                    option = false;
                    entity['sortById'] = option;
                    entity = report.bind(golfie)(entity);
 338:
                    entity = _closure2_slot11;
                    if(!(golfie !== entity)) { _fun00022_ip = 819; continue _fun00021 }
 349:
                    verify = _closure2_slot11;
                    option = {};
                    entity = _closure2_slot12;
                    option['currentGuildHasAddPermissions'] = entity;
                    entity = _closure2_slot5;
                    option['allSounds'] = entity;
                    entity = _closure2_slot1;
                    option['filterOutEmptyCurrentGuild'] = entity;
                    entity = _closure2_slot17;
                    entity = entity.numRows;
                    option['rowLimit'] = entity;
                    entity = _closure2_slot2;
                    option['shownAllGuildIds'] = entity;
                    report = option.currentGuildHasAddPermissions;
                    romeon = option.allSounds;
                    entity = option.filterOutEmptyCurrentGuild;
                    offset = option.rowLimit;
                    sizing = option.shownAllGuildIds;
                    yankee = romeon.get;
                    option = verify.id;
                    option = yankee.bind(romeon)(option);
                    yankee = null;
                    if(!(yankee == option)) { _fun00022_ip = 461; continue _fun00021 }
 457:
                    option = new Array(0);
 461:
                    yankee = _closure1_slot15;
                    kiloes = yankee.bind(golfie)(option);
                    yankee = option.length;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    option = 11;
                    option = foxtra[option];
                    romeon = romeon.bind(golfie)(option);
                    option = romeon.getMaxSoundboardSlots;
                    option = option.bind(romeon)(verify);
                    romeon = yankee < option;
                    if(!romeon) { _fun00022_ip = 516; continue _fun00021 }
 513:
                    romeon = report;
 516:
                    report = kiloes.length;
                    report = vacuum === report;
                    if(romeon) { _fun00022_ip = 531; continue _fun00021 }
 528:
                    romeon = report;
 531:
                    if(!romeon) { _fun00022_ip = 537; continue _fun00021 }
 534:
                    romeon = !entity;
 537:
                    if(!(golfie === offset)) { _fun00022_ip = 555; continue _fun00021 }
 541:
                    option = ctrled.Number;
                    yankee = option.MAX_VALUE;
                    _fun00022_ip = 574; continue _fun00021;
 555:
                    option = 3;
                    offset = option * offset;
                    option = 0;
                    if(!romeon) { _fun00022_ip = 570; continue _fun00021 }
 567:
                    option = 1;
 570:
                    yankee = offset - option;
 574:
                    offset = kiloes.length;
                    foxtra = offset > yankee;
                    if(!foxtra) { _fun00022_ip = 604; continue _fun00021 }
 586:
                    backup = sizing.includes;
                    option = verify.id;
                    option = backup.bind(sizing)(option);
                    foxtra = !option;
 604:
                    option = kiloes;
                    if(!foxtra) { _fun00022_ip = 628; continue _fun00021 }
 610:
                    backup = kiloes.slice;
                    foxtra = 1;
                    foxtra = yankee - foxtra;
                    option = backup.bind(kiloes)(vacuum, foxtra);
 628:
                    if(!romeon) { _fun00022_ip = 680; continue _fun00021 }
 631:
                    foxtra = option.push;
                    romeon = {};
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    backup = backup[source];
                    backup = kiloes.bind(golfie)(backup);
                    backup = backup.SoundboardSoundItemType;
                    backup = backup.ADD_SOUND;
                    romeon['type'] = backup;
                    romeon['guild'] = verify;
                    romeon = foxtra.bind(option)(romeon);
 680:
                    if(!(offset > yankee)) { _fun00022_ip = 733; continue _fun00021 }
 684:
                    yankee = option.push;
                    offset = {};
                    foxtra = _closure1_slot0;
                    romeon = _closure1_slot2;
                    romeon = romeon[source];
                    romeon = foxtra.bind(golfie)(romeon);
                    romeon = romeon.SoundboardSoundItemType;
                    romeon = romeon.SHOW_ALL;
                    offset['type'] = romeon;
                    offset['guild'] = verify;
                    offset = yankee.bind(option)(offset);
 733:
                    if(!entity) { _fun00022_ip = 739; continue _fun00021 }
 736:
                    entity = report;
 739:
                    if(entity) { _fun00022_ip = 819; continue _fun00021 }
 742:
                    report = tangon.push;
                    entity = {};
                    offset = {};
                    romeon = _closure1_slot0;
                    yankee = _closure1_slot2;
                    yankee = yankee[source];
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
 819:
                    entity = _closure2_slot10;
                    if(entity) { _fun00022_ip = 840; continue _fun00021 }
 826:
                    report = _closure1_slot17;
                    entity = _closure2_slot5;
                    entity = report.bind(golfie)(tangon, entity);
 840:
                    entity = {};
                    entity['sections'] = tangon;
                    report = _closure2_slot9;
                    entity['guilds'] = report;
                    report = _closure2_slot11;
                    update = null;
                    option = update == report;
                    report = undefined;
                    if(option) { _fun00022_ip = 880; continue _fun00021 }
 871:
                    option = _closure2_slot11;
                    report = option.id;
 880:
                    entity['currentGuildId'] = report;
                    report = _closure2_slot5;
                    entity['allSounds'] = report;
                    report = _closure2_slot4;
                    entity['hasNitro'] = report;
                    report = _closure2_slot17;
                    report = report.numRows;
                    entity['rowLimit'] = report;
                    report = _closure2_slot2;
                    entity['shownAllGuildIds'] = report;
                    echoed = entity.sections;
                    report = entity.guilds;
                    result = entity.currentGuildId;
                    output = entity.allSounds;
                    sizing = entity.hasNitro;
                    kiloes = entity.rowLimit;
                    backup = entity.shownAllGuildIds;
                    entity = _closure1_slot13;
                    foxtra = entity.bind(golfie)(report);
                    report = foxtra.bind(golfie)();
                    entity = report.done;
                    romeon = 1;
                    yankee = 3;
                    offset = report;
                    verify = undefined;
                    option = undefined;
                    report = undefined;
                    if(entity) { _fun00022_ip = 1314; continue _fun00021 }
 1008:
                    target = offset.value;
                    entity = target.id;
                    sequen = report;
                    if(!(entity !== result)) { _fun00022_ip = 1293; continue _fun00021 }
 1028:
                    config = _closure1_slot15;
                    record = output.get;
                    entity = target.id;
                    record = record.bind(output)(entity);
                    entity = record;
                    if(!(update == record)) { _fun00022_ip = 1058; continue _fun00021 }
 1054:
                    entity = new Array(0);
 1058:
                    sierra = config.bind(golfie)(entity);
                    entity = sierra.length;
                    verify = record;
                    option = sierra;
                    sequen = report;
                    if(!(entity > vacuum)) { _fun00022_ip = 1293; continue _fun00021 }
 1084:
                    if(!(golfie === kiloes)) { _fun00022_ip = 1102; continue _fun00021 }
 1088:
                    entity = ctrled.Number;
                    entity = entity.MAX_VALUE;
                    _fun00022_ip = 1106; continue _fun00021;
 1102:
                    entity = yankee * kiloes;
 1106:
                    cntext = sierra.length;
                    config = sierra;
                    if(!(cntext > entity)) { _fun00022_ip = 1206; continue _fun00021 }
 1118:
                    papara = backup.includes;
                    cntext = target.id;
                    papara = papara.bind(backup)(cntext);
                    cntext = sierra;
                    if(papara) { _fun00022_ip = 1154; continue _fun00021 }
 1139:
                    status = sierra.slice;
                    papara = entity - romeon;
                    cntext = status.bind(sierra)(vacuum, papara);
 1154:
                    status = cntext.push;
                    papara = {};
                    limora = _closure1_slot0;
                    sierra = _closure1_slot2;
                    sierra = sierra[source];
                    sierra = limora.bind(golfie)(sierra);
                    sierra = sierra.SoundboardSoundItemType;
                    sierra = sierra.SHOW_ALL;
                    papara['type'] = sierra;
                    papara['guild'] = target;
                    papara = status.bind(cntext)(papara);
                    config = cntext;
 1206:
                    papara = echoed.push;
                    cntext = {};
                    status = {};
                    limora = _closure1_slot0;
                    sierra = _closure1_slot2;
                    sierra = sierra[source];
                    sierra = limora.bind(golfie)(sierra);
                    sierra = sierra.SoundboardSoundGridSectionType;
                    sierra = sierra.GUILD;
                    status['type'] = sierra;
                    status['guild'] = target;
                    sierra = !sizing;
                    status['isNitroLocked'] = sierra;
                    cntext['categoryInfo'] = status;
                    target = target.id;
                    cntext['key'] = target;
                    cntext['items'] = config;
                    cntext = papara.bind(echoed)(cntext);
                    option = config;
                    verify = record;
                    sequen = entity;
 1293:
                    config = foxtra.bind(golfie)();
                    entity = config.done;
                    report = sequen;
                    offset = config;
                    if(!entity) { _fun00022_ip = 1008; continue _fun00021 }
 1314:
                    entity = _closure2_slot10;
                    if(!entity) { _fun00022_ip = 1335; continue _fun00021 }
 1321:
                    report = _closure1_slot17;
                    entity = _closure2_slot5;
                    entity = report.bind(golfie)(tangon, entity);
 1335:
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
                    report = _closure2_slot5;
                    entity['allSounds'] = report;
                    report = _closure2_slot7;
                    entity['isFetching'] = report;
                    report = {};
                    golfie = _closure2_slot6;
                    golfie = golfie.size;
                    report['favoriteSoundCount'] = golfie;
                    golfie = _closure3_slot0;
                    report['unlockedCustomSoundCount'] = golfie;
                    oscard = _closure3_slot1;
                    report['lockedCustomSoundCount'] = oscard;
                    entity['soundCounts'] = report;
                    _fun00022_ip = 1481; continue _fun00021;
 1418:
                    oscard = _closure1_slot17;
                    report = _closure2_slot5;
                    michal = undefined;
                    michal = oscard.bind(michal)(tangon, report);
                    michal = {};
                    michal['categories'] = tangon;
                    tangon = _closure2_slot5;
                    michal['allSounds'] = tangon;
                    zuuluu = _closure2_slot7;
                    michal['isFetching'] = zuuluu;
                    zuuluu = {'favoriteSoundCount': 0, 'unlockedCustomSoundCount': 0, 'lockedCustomSoundCount': 0};
                    michal['soundCounts'] = zuuluu;
                    entity = michal;
 1481:
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