// app/modules/soundboard/SoundboardActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _uploadSound
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 214; continue _fun00001 }
 13:
                    golfie = michal.guildId;
                    backup = michal.name;
                    foxtra = michal.sound;
                    romeon = michal.volume;
                    yankee = michal.emojiId;
                    offset = michal.emojiName;
                    oscard = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscard;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 211; continue _fun00001 }
 62:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    option = zuuluu.HTTP;
                    report = option.post;
                    zuuluu = {};
                    kiloes = _closure1_slot6;
                    verify = kiloes.GUILD_SOUNDBOARD_SOUNDS;
                    verify = verify.bind(kiloes)(golfie);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['name'] = backup;
                    verify['sound'] = foxtra;
                    verify['volume'] = romeon;
                    verify['emoji_id'] = yankee;
                    verify['emoji_name'] = offset;
                    zuuluu['body'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = report.bind(option)(zuuluu);
                    SaveGenerator(address=162);
 160:
                    return zuuluu;
 162:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 208; continue _fun00001 }
 168:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 6;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.soundboardSoundFromAPI;
                    tangon = zuuluu.body;
                    tangon = report.bind(oscard)(tangon, golfie);
                    return tangon;
 208:
                    return zuuluu;
 211:
                    return michal;
 214:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _updateSound
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 210; continue _fun00003 }
 13:
                    golfie = michal.guildId;
                    kiloes = michal.soundId;
                    foxtra = michal.name;
                    romeon = michal.volume;
                    yankee = michal.emojiId;
                    offset = michal.emojiName;
                    oscard = undefined;
                    SaveGenerator(address=53);
 51:
                    return oscard;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 207; continue _fun00003 }
 62:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(oscard)(zuuluu);
                    option = zuuluu.HTTP;
                    report = option.patch;
                    zuuluu = {};
                    backup = _closure1_slot6;
                    verify = backup.GUILD_SOUNDBOARD_SOUND;
                    verify = verify.bind(backup)(golfie, kiloes);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['name'] = foxtra;
                    verify['volume'] = romeon;
                    verify['emoji_id'] = yankee;
                    verify['emoji_name'] = offset;
                    zuuluu['body'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = report.bind(option)(zuuluu);
                    SaveGenerator(address=158);
 156:
                    return zuuluu;
 158:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 204; continue _fun00003 }
 164:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 6;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.soundboardSoundFromAPI;
                    tangon = zuuluu.body;
                    tangon = report.bind(oscard)(tangon, golfie);
                    return tangon;
 204:
                    return zuuluu;
 207:
                    return michal;
 210:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _deleteSound
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 102; continue _fun00005 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.del;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot6;
                    option = verify.GUILD_SOUNDBOARD_SOUND;
                    golfie = argFoo;
                    oscard = argBar;
                    oscard = option.bind(verify)(golfie, oscard);
                    michal['url'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 99; continue _fun00005 }
 96:
                    return zuuluu;
 99:
                    return michal;
 102:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _fetchSoundGuildData
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 205; continue _fun00007 }
 10:
                    verify = argFoo;
                    option = argBar;
                    report = undefined;
                    tangon = undefined;
 20: // try_start_0
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 5;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    golfie = michal.HTTP;
                    zuuluu = golfie.get;
                    michal = {};
                    yankee = _closure1_slot6;
                    offset = yankee.SOUNDBOARD_SOUND_GUILD_DATA;
                    option = offset.bind(yankee)(verify, option);
                    michal['url'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(golfie)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 152; continue _fun00007 }
 96:
                    tangon = michal;
                    golfie = michal.body;
                    zuuluu = null;
                    golfie = zuuluu != golfie;
                    if(!golfie) { _fun00008_ip = 149; continue _fun00007 }
 113:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    oscard = 14;
                    oscard = option[oscard];
                    golfie = golfie.bind(report)(oscard);
                    oscard = golfie.makeDiscoverableGuild;
                    tangon = tangon.body;
                    zuuluu = oscard.bind(golfie)(tangon);
 149: // try_end0
                    return zuuluu;
 152:
                    return michal;
 155: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 8;
                    michal = oscard[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    backup = zuuluu;
                    foxtra = tangon;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 205:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_FAVORITES;
    var _closure1_slot7 = golfie;
    tangon = tangon.UserSettingsDelay;
    var _closure1_slot8 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 243; continue _fun00009 }
 10: // try_start_0
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.get;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.SOUNDBOARD_DEFAULT_SOUNDS;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 154; continue _fun00009 }
 82:
                    golfie = michal.body;
                    oscard = golfie.map;
                    report = function(argFoo) {
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 6;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.soundboardSoundFromAPI;
                        michal = _closure1_slot5;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    golfie = oscard.bind(golfie)(report);
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 7;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
                    tangon['type'] = option;
                    tangon['soundboardSounds'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 151: // try_end0
                    return zuuluu;
 154:
                    return michal;
 157: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    zuuluu = undefined;
                    option = report.bind(zuuluu)(michal);
                    golfie = option.dispatch;
                    michal = {};
                    verify = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE';
                    michal['type'] = verify;
                    michal = golfie.bind(option)(michal);
                    michal = 8;
                    michal = oscard[michal];
                    michal = report.bind(zuuluu)(michal);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    yankee = zuuluu;
                    offset = tangon;
                    michal = new yankee[michal](offset, verify);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 243:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: _resolveOnActionCompleted
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            report = function() { // Original name: onSoundboardActionCompleted
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.unsubscribe;
                tangon = _closure2_slot0;
                zuuluu = _closure3_slot1;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                zuuluu = global;
                tangon = zuuluu.setTimeout;
                zuuluu = _closure3_slot0;
                michal = 0;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            var _closure3_slot1 = report;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.subscribe;
            michal = _closure2_slot0;
            michal = zuuluu.bind(tangon)(michal, report);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot10 = tangon;
    tangon = function() { // Original name: _maybeFetchDefaultSounds
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot4;
            entity = zuuluu.shouldFetchDefaultSounds;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00012_ip = 42; continue _fun00011 }
 22:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)();
            return entity;
 42:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = tangon.bind(zuuluu)(entity);
            tangon = report.dispatch;
            entity = {};
            oscard = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS';
            entity['type'] = oscard;
            entity = tangon.bind(report)(entity);
            tangon = _closure1_slot10;
            entity = 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS';
            entity = tangon.bind(zuuluu)(entity);
            michal = _closure1_slot9;
            michal = michal.bind(zuuluu)();
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    tangon = function() { // Original name: _maybeFetchGuildSoundboardSounds
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.getGuildIdsToFetchSoundsFor;
            report = entity.bind(zuuluu)();
            zuuluu = report.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00014_ip = 139; continue _fun00013 }
 46:
            zuuluu = _closure1_slot10;
            entity = 'SOUNDBOARD_SOUNDS_RECEIVED';
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            golfie = oscard[michal];
            verify = zuuluu.bind(tangon)(golfie);
            option = verify.dispatch;
            golfie = {};
            offset = 'GUILD_SOUNDBOARD_FETCH';
            golfie['type'] = offset;
            golfie = option.bind(verify)(golfie);
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'REQUEST_SOUNDBOARD_SOUNDS';
            michal['type'] = oscard;
            michal['guildIds'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
 139:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/SoundboardActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        entity = global;
        zuuluu = entity.Promise;
        michal = zuuluu.all;
        entity = _closure1_slot11;
        report = undefined;
        oscard = entity.bind(report)();
        entity = new Array(2);
        entity[0] = oscard;
        tangon = _closure1_slot12;
        tangon = tangon.bind(report)();
        entity[1] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['maybeFetchSoundboardSounds'] = tangon;
    tangon = function() { // Original name: uploadSound
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uploadSound'] = tangon;
    tangon = function() { // Original name: updateSound
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateSound'] = tangon;
    tangon = function() { // Original name: deleteSound
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteSound'] = tangon;
    tangon = function(argFoo) { // Original name: addFavoriteSound
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 10;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        oscard = tangon.FrecencyUserSettingsActionCreators;
        report = oscard.updateAsync;
        zuuluu = _closure1_slot8;
        tangon = zuuluu.INFREQUENT_USER_ACTION;
        zuuluu = 'favoriteSoundboardSounds';
        michal = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = argFoo;
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 11;
                entity = tangon[entity];
                offset = undefined;
                tangon = michal.bind(offset)(entity);
                michal = tangon.size;
                entity = zuuluu.soundIds;
                michal = michal.bind(tangon)(entity);
                entity = _closure1_slot7;
                if(!(!(michal >= entity))) { _fun00016_ip = 108; continue _fun00015 }
 52:
                report = zuuluu.soundIds;
                tangon = report.includes;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(entity);
                entity = !entity;
                if(!entity) { _fun00016_ip = 103; continue _fun00015 }
 81:
                tangon = zuuluu.soundIds;
                zuuluu = tangon.push;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                entity = undefined;
 103:
                _fun00016_ip = 257; continue _fun00015;
 108:
                zuuluu = _closure1_slot1;
                yankee = _closure1_slot2;
                michal = 12;
                michal = yankee[michal];
                tangon = zuuluu.bind(offset)(michal);
                zuuluu = tangon.show;
                michal = {};
                oscard = _closure1_slot0;
                report = 13;
                golfie = yankee[report];
                golfie = oscard.bind(offset)(golfie);
                romeon = golfie.intl;
                option = romeon.string;
                golfie = yankee[report];
                golfie = oscard.bind(offset)(golfie);
                golfie = golfie.t;
                golfie = golfie.+XYXtb;
                golfie = option.bind(romeon)(golfie);
                michal['title'] = golfie;
                golfie = yankee[report];
                golfie = oscard.bind(offset)(golfie);
                option = golfie.intl;
                golfie = option.formatToPlainString;
                report = yankee[report];
                report = oscard.bind(offset)(report);
                report = report.t;
                oscard = report.JaIyFh;
                report = {};
                verify = _closure1_slot7;
                report['count'] = verify;
                report = golfie.bind(option)(oscard, report);
                michal['body'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = false;
 257:
                return entity;
            }
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['addFavoriteSound'] = tangon;
    tangon = function(argFoo) { // Original name: removeFavoriteSound
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 10;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        oscard = tangon.FrecencyUserSettingsActionCreators;
        report = oscard.updateAsync;
        zuuluu = _closure1_slot8;
        tangon = zuuluu.INFREQUENT_USER_ACTION;
        zuuluu = 'favoriteSoundboardSounds';
        michal = function(argFoo) {
            michal = argFoo;
            tangon = michal.soundIds;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['soundIds'] = entity;
            entity = undefined;
            return entity;
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['removeFavoriteSound'] = tangon;
    tangon = function() { // Original name: fetchSoundGuildData
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchSoundGuildData'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: playSoundLocally
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
        michal['type'] = report;
        report = argBar;
        michal['sound'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBaz;
        michal['trigger'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['playSoundLocally'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: reportSoundStartedPlaying
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_START';
        michal['type'] = report;
        report = argFoo;
        michal['soundId'] = report;
        report = argBar;
        michal['userId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['reportSoundStartedPlaying'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: reportSoundFinishedPlaying
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SOUNDBOARD_SOUND_PLAY_END';
        michal['type'] = report;
        report = argFoo;
        michal['soundId'] = report;
        report = argBar;
        michal['userId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['reportSoundFinishedPlaying'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateUserSoundboardVolume
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SOUNDBOARD_SET_VOLUME';
        michal['type'] = report;
        report = argFoo;
        michal['volume'] = report;
        report = argBar;
        michal['location'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateUserSoundboardVolume'] = tangon;
    michal = function(argFoo) { // Original name: muteCustomJoinSound
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SOUNDBOARD_MUTE_JOIN_SOUND';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['muteCustomJoinSound'] = michal;
    return entity;
})();